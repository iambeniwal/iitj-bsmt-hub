/* ===================================================================
   Admin panel — #/admin, shown only to accounts with role "admin".

   Hiding the page is a courtesy, not the security: every read and write
   here goes through row-level security or an admin_* function that
   checks is_admin() in the database, so a student who opens #/admin
   gets nothing back.

   Tabs: overview · cohort weak spots · students · announcements · quiz dates
   =================================================================== */
(function () {
"use strict";

const H = window.HUB, CL = H.cloud;
if (!H.ui || !CL) return;
const { esc, crumbs, link, fmtDate, fmtTime, fmtDay, plural, META, SLUGS, QBY, $, $$ } = H.ui;
const app = document.getElementById("app");
const TABS = [["overview", "Overview"], ["weak", "Cohort weak spots"], ["students", "Students"], ["news", "Announcements"], ["dates", "Quiz dates"]];

/* IST <-> <input type="datetime-local"> */
const toLocal = iso => iso ? new Date(iso).toLocaleString("sv-SE", { timeZone: "Asia/Kolkata" }).replace(" ", "T").slice(0, 16) : "";
const fromLocal = v => v ? new Date(v + ":00+05:30").toISOString() : null;
const fail = (el, e) => { el.innerHTML = `<div class="empty warnbox"><b>Couldn't load this.</b> ${esc(e.message || e)}</div>`; };

H.views.admin = function (p) {
  const tab = p.tab || "overview";
  if (!CL.isAdmin()) {
    app.innerHTML = `<header class="mast slim">${crumbs()}<div class="eyebrow">Admin</div><h1>Not available</h1>
      <p class="sub">${CL.user ? "This account isn't an admin." : "Sign in with an admin account to see this page."}</p></header>`;
    return;
  }
  app.innerHTML = `<header class="mast slim">${crumbs()}<div class="eyebrow">Admin</div><h1>Run the hub</h1></header>
    <nav><div class="navrow">${TABS.map(([k, l]) => `<a href="${link("admin", { tab: k })}"${k === tab ? ' aria-current="true"' : ""}>${l}</a>`).join("")}</div></nav>
    <section class="tight" id="pane"><p class="hint">Loading…</p></section>`;
  const pane = $("#pane");
  ({ overview, weak, students, news, dates })[tab](pane, p);
};

/* ---------------- overview ---------------- */
async function overview(pane) {
  try {
    const o = await CL.rpc("admin_overview");
    const tile = (k, v, s) => `<div class="tile"><span class="k">${k}</span><span class="v">${Number(v).toLocaleString("en-IN")}</span><span class="s">${s}</span></div>`;
    pane.innerHTML = `<div class="tiles">
      ${tile("Students", o.students, `${o.new_7d} joined this week${o.suspended ? ` · ${o.suspended} suspended` : ""}`)}
      ${tile("Active today", o.active_1d, `${o.active_7d} in the last 7 days`)}
      ${tile("Answers this week", o.attempts_7d, `${Number(o.attempts_all).toLocaleString("en-IN")} all time`)}
      ${tile("Mock papers this week", o.mocks_7d, "full timed papers")}
    </div>
    <p class="hint" style="margin-top:14px">Guests aren't counted: their progress never leaves their browser. Page views for everyone are in Google Analytics.</p>`;
  } catch (e) { fail(pane, e); }
}

/* ---------------- cohort weak spots ---------------- */
async function weak(pane, p) {
  const days = +p.days || 30;
  try {
    const rows = await CL.rpc("admin_question_stats", { since: new Date(Date.now() - days * 864e5).toISOString() });
    const topics = {}, qs = [];
    rows.forEach(r => {
      const q = QBY[r.qid]; if (!q) return;                     // retired or unknown id
      const k = q.course + "|" + q.topic, t = topics[k] || (topics[k] = { course: q.course, topic: q.topic, att: 0, wrong: 0, students: 0 });
      t.att += +r.attempts; t.wrong += +r.wrong; t.students = Math.max(t.students, +r.students);
      qs.push({ q, att: +r.attempts, wrong: +r.wrong, students: +r.students });
    });
    const tl = Object.values(topics).filter(t => t.att >= 10).sort((a, b) => b.wrong / b.att - a.wrong / a.att);
    const ql = qs.filter(x => x.att >= 5).sort((a, b) => b.wrong / b.att - a.wrong / a.att).slice(0, 20);
    const pct = (w, a) => Math.round(w * 100 / a) + "%";
    pane.innerHTML = `<div class="drillbar">${[7, 30, 90].map(d => `<a class="btn ${d === days ? "" : "ghost"} sm" href="${link("admin", { tab: "weak", days: d })}">Last ${d} days</a>`).join("")}</div>
      <p class="lede">Where the batch loses marks, from every signed-in student's answers. This is where new notes and questions will help most.</p>
      <h3 class="subhead">Topics, hardest first <span class="hint">(10+ answers)</span></h3>
      ${tl.length ? `<div class="scroller"><table><thead><tr><th>Topic</th><th>Course</th><th>Wrong</th><th>Answers</th><th>Students</th></tr></thead><tbody>
        ${tl.map(t => `<tr><td>${esc(t.topic)}</td><td>${esc(META[t.course].short)}</td><td><b>${pct(t.wrong, t.att)}</b></td><td>${t.att}</td><td>${t.students}</td></tr>`).join("")}</tbody></table></div>`
        : `<div class="empty">Not enough answers yet in this window.</div>`}
      <h3 class="subhead">Questions most often got wrong <span class="hint">(5+ answers)</span></h3>
      ${ql.length ? `<div class="scroller"><table><thead><tr><th>Question</th><th>Wrong</th><th>Answers</th></tr></thead><tbody>
        ${ql.map(x => `<tr><td><a href="${link("bank", { c: x.q.course, q: x.q.id })}" class="qid">${x.q.id}</a> ${esc(x.q.q.slice(0, 120))}${x.q.q.length > 120 ? "…" : ""}</td><td><b>${pct(x.wrong, x.att)}</b></td><td>${x.att}</td></tr>`).join("")}</tbody></table></div>`
        : `<div class="empty">Not enough answers yet in this window.</div>`}`;
  } catch (e) { fail(pane, e); }
}

/* ---------------- students ---------------- */
async function students(pane) {
  try {
    const rows = await CL.rpc("admin_students");
    pane.innerHTML = `<p class="lede">${plural(rows.length, "student")} signed in so far.</p>
      <div class="scroller"><table><thead><tr><th>Student</th><th>Joined</th><th>Last seen</th><th>Answers</th><th></th></tr></thead><tbody>
      ${rows.map(r => `<tr${r.suspended ? ' class="muted"' : ""}><td><b>${esc(r.name || "—")}</b>${r.role === "admin" ? ' <span class="lbl strong">admin</span>' : ""}${r.suspended ? ' <span class="lbl weak">suspended</span>' : ""}<br><span class="hint">${esc(r.email)}</span></td>
        <td>${fmtDay(r.created_at)}</td><td>${fmtDay(r.last_seen)}</td><td>${Number(r.attempts).toLocaleString("en-IN")}</td>
        <td>${r.id === CL.user.id ? "" : `<button class="btn ghost sm" data-sus="${r.id}" data-v="${!r.suspended}">${r.suspended ? "Restore" : "Suspend"}</button>
          <button class="btn warn sm" data-del="${r.id}" data-email="${esc(r.email)}">Delete</button>`}</td></tr>`).join("")}
      </tbody></table></div>
      <p class="hint" style="margin-top:10px">Suspending blocks reading and writing progress until restored. Deleting removes the account and all its data permanently.</p>`;
    $$("[data-sus]", pane).forEach(b => b.addEventListener("click", async () => {
      try { await CL.rpc("admin_set_suspended", { target: b.dataset.sus, value: b.dataset.v === "true" }); students(pane); } catch (e) { alert(e.message); }
    }));
    $$("[data-del]", pane).forEach(b => b.addEventListener("click", async () => {
      if (prompt(`Type ${b.dataset.email} to delete this account and all its data for good:`) !== b.dataset.email) return;
      try { await CL.rpc("admin_delete_user", { target: b.dataset.del }); students(pane); } catch (e) { alert(e.message); }
    }));
  } catch (e) { fail(pane, e); }
}

/* ---------------- announcements ---------------- */
async function news(pane, p) {
  try {
    const { data, error } = await CL.table("announcements").select("*").order("published_at", { ascending: false });
    if (error) throw error;
    const edit = p.id ? data.find(a => String(a.id) === p.id) : null;
    const now = Date.now();
    const state = a => Date.parse(a.published_at) > now ? "scheduled" : a.expires_at && Date.parse(a.expires_at) <= now ? "expired" : "live";
    pane.innerHTML = `<div class="card">
      <h3 class="subhead" style="margin-top:0">${edit ? "Edit announcement" : "New announcement"}</h3>
      <form id="af" class="aform">
        <label>Title<input name="title" required maxlength="160" value="${esc(edit ? edit.title : "")}"></label>
        <label>Message<textarea name="body" rows="5" maxlength="5000">${esc(edit ? edit.body : "")}</textarea></label>
        <div class="row">
          <label>For<select name="course"><option value="">Everyone</option>${SLUGS.map(s => `<option value="${s}"${edit && edit.course === s ? " selected" : ""}>${esc(META[s].name)}</option>`).join("")}</select></label>
          <label>Publish at (IST)<input type="datetime-local" name="pub" value="${edit ? toLocal(edit.published_at) : ""}"></label>
          <label>Hide after (IST)<input type="datetime-local" name="exp" value="${edit ? toLocal(edit.expires_at) : ""}"></label>
        </div>
        <label class="toggle"><input type="checkbox" name="pinned"${edit && edit.pinned ? " checked" : ""}> Pin to the top of the home page</label>
        <div class="actions"><button class="btn" type="submit">${edit ? "Save changes" : "Publish"}</button>${edit ? `<a class="btn ghost" href="${link("admin", { tab: "news" })}">Cancel</a>` : ""}
          <span class="hint" id="amsg"></span></div>
        <p class="hint">Leave "Publish at" empty to post now. Plain text; links and line breaks are kept.</p>
      </form></div>
      <h3 class="subhead">All announcements</h3>
      ${data.length ? data.map(a => `<div class="ann admin"><div class="qmeta"><span class="lbl ${state(a) === "live" ? "strong" : state(a) === "scheduled" ? "shaky" : "started"}">${state(a)}</span>
          ${a.pinned ? '<span class="pill today">Pinned</span>' : ""}<span class="qnum">${fmtDate(a.published_at)} ${fmtTime(a.published_at)}</span>
          ${a.course ? `<span class="qtopic">${esc(META[a.course] ? META[a.course].short : a.course)}</span>` : ""}
          <span style="margin-left:auto" class="actions"><a class="btn ghost sm" href="${link("admin", { tab: "news", id: a.id })}">Edit</a>
          <button class="btn warn sm" data-adel="${a.id}">Delete</button></span></div>
        <b>${esc(a.title)}</b></div>`).join("") : `<div class="empty">Nothing posted yet.</div>`}`;
    $("#af").addEventListener("submit", async e => {
      e.preventDefault();
      const f = new FormData(e.target);
      const row = { title: f.get("title").trim(), body: f.get("body").trim(), course: f.get("course") || null, pinned: !!f.get("pinned"),
        published_at: fromLocal(f.get("pub")) || (edit ? edit.published_at : new Date().toISOString()), expires_at: fromLocal(f.get("exp")) };
      const r = edit ? await CL.table("announcements").update(row).eq("id", edit.id) : await CL.table("announcements").insert(row);
      if (r.error) { $("#amsg").textContent = r.error.message; return; }
      await CL.reloadPublic();
      location.hash = link("admin", { tab: "news" });
      if (!edit) news(pane, {});
    });
    $$("[data-adel]", pane).forEach(b => b.addEventListener("click", async () => {
      if (!confirm("Delete this announcement for everyone?")) return;
      const r = await CL.table("announcements").delete().eq("id", b.dataset.adel);
      if (r.error) return alert(r.error.message);
      await CL.reloadPublic(); news(pane, {});
    }));
  } catch (e) { fail(pane, e); }
}

/* ---------------- quiz dates ---------------- */
async function dates(pane, p) {
  try {
    const { data, error } = await CL.table("assessment_overrides").select("*");
    if (error) throw error;
    const over = {}; data.forEach(r => { over[r.course + "|" + r.aid] = r; });
    const slug = p.c || SLUGS[0], R = META[slug];
    pane.innerHTML = `<p class="lede">Set a quiz's date and format as soon as the official LMS announcement goes up. Countdowns, the home page and mock papers follow it at once. No code change needed.</p>
      <div class="drillbar">${SLUGS.map(s => `<a class="btn ${s === slug ? "" : "ghost"} sm" href="${link("admin", { tab: "dates", c: s })}">${esc(META[s].short)}</a>`).join("")}</div>
      ${R.assessments.map(a => {
        const o = over[slug + "|" + a.id];
        return `<form class="card aform" data-aid="${a.id}" style="margin-bottom:12px">
          <div class="sechead"><h3 class="subhead" style="margin:0">${esc(a.name)}</h3>${o ? `<span class="tag">set here · ${fmtDay(o.updated_at)}</span>` : '<span class="tag">from the content file</span>'}</div>
          <div class="row">
            <label>Status<select name="status">${["tba", "upcoming", "done"].map(s => `<option${a.status === s ? " selected" : ""}>${s}</option>`).join("")}</select></label>
            <label>Starts (IST)<input type="datetime-local" name="start" value="${toLocal(a.start)}"></label>
            <label>Minutes<input type="number" name="durationMin" min="1" value="${a.durationMin || ""}"></label>
            <label>Questions<input type="number" name="questions" min="1" value="${a.questions || ""}"></label>
            <label>Marks<input type="number" name="marks" min="1" value="${a.marks || ""}"></label>
          </div>
          <div class="row"><label>Question types<input name="types" value="${esc(a.types || "MCQ")}"></label>
            <label style="flex:2">Syllabus<input name="scopeText" value="${esc(a.scopeText || "")}" placeholder="e.g. Lectures 16–24, to Functions"></label></div>
          <div class="actions"><button class="btn sm" type="submit">Save</button>${o ? `<button class="btn ghost sm" type="button" data-revert="${a.id}">Revert to content file</button>` : ""}<span class="hint amsg"></span></div>
        </form>`;
      }).join("")}
      <p class="hint">The join window is set to 15 minutes before the start, as on the LMS. The paper ends after its duration.</p>`;
    $$("form[data-aid]", pane).forEach(form => form.addEventListener("submit", async e => {
      e.preventDefault();
      const f = new FormData(form), start = fromLocal(f.get("start")), dur = +f.get("durationMin") || null;
      const d = { status: f.get("status"), types: f.get("types"), scopeText: f.get("scopeText") };
      if (start) Object.assign(d, { start, join: new Date(Date.parse(start) - 15 * 6e4).toISOString(),
        end: dur ? new Date(Date.parse(start) + dur * 6e4).toISOString() : start });
      if (dur) d.durationMin = dur;
      if (+f.get("questions")) d.questions = +f.get("questions");
      if (+f.get("marks")) d.marks = +f.get("marks");
      if (d.status !== "tba" && !start) { form.querySelector(".amsg").textContent = "Add a start time, or set the status to tba."; return; }
      if (start && !(dur && d.questions)) { form.querySelector(".amsg").textContent = "Add the duration and question count too: mocks and countdowns need them."; return; }
      const r = await CL.table("assessment_overrides").upsert({ course: slug, aid: form.dataset.aid, data: d, updated_at: new Date().toISOString() });
      if (r.error) { form.querySelector(".amsg").textContent = r.error.message; return; }
      await CL.reloadPublic(); dates(pane, p);
    }));
    $$("[data-revert]", pane).forEach(b => b.addEventListener("click", async () => {
      const r = await CL.table("assessment_overrides").delete().eq("course", slug).eq("aid", b.dataset.revert);
      if (r.error) return alert(r.error.message);
      try { localStorage.removeItem("bsmt-hub:overrides"); } catch (e) {}
      location.reload();
    }));
  } catch (e) { fail(pane, e); }
}
})();
