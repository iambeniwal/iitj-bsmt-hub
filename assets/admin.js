/* ===================================================================
   Admin panel — #/admin, shown only to accounts with role "admin".

   Hiding the page is a courtesy, not the security: every read and write
   here goes through row-level security or an admin_* function that
   checks is_admin() in the database, so a student who opens #/admin
   gets nothing back.

   Tabs: overview · cohort weak spots · students · requests · announcements · quiz dates · AI test
   =================================================================== */
(function () {
"use strict";

const H = window.HUB, CL = H.cloud;
if (!H.ui || !CL) return;
const { esc, crumbs, link, fmtDate, fmtTime, fmtDay, plural, META, SLUGS, QBY, $, $$ } = H.ui;
const app = document.getElementById("app");
const TABS = [["overview", "Overview"], ["weak", "Cohort weak spots"], ["students", "Students"], ["requests", "Requests"], ["news", "Announcements"], ["dates", "Quiz dates"], ["aitest", "AI test"]];
const REQ = { access: "See what's held", correct: "Correct something", delete: "Delete data", grievance: "Complaint", other: "Other" };

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
  ({ overview, weak, students, requests, news, dates, aitest })[tab](pane, p);
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
      <a class="tile${o.requests_open ? " warn" : ""}" href="${link("admin", { tab: "requests" })}"><span class="k">Open privacy requests</span><span class="v">${o.requests_open || 0}</span><span class="s">reply within ${H.program.replyDays} days</span></a>
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

/* ---------------- privacy requests ---------------- */
async function requests(pane) {
  try {
    const { data, error } = await CL.table("privacy_requests").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    const open = data.filter(r => r.status === "received" || r.status === "in_progress");
    const due = r => Date.parse(r.created_at) + H.program.replyDays * 864e5;
    const row = r => {
      const late = (r.status === "received" || r.status === "in_progress") && Date.now() > due(r);
      return `<form class="card aform rqa" data-id="${r.id}" style="margin-bottom:10px">
        <div class="qmeta"><span class="qtopic">${esc(REQ[r.kind])}</span><span class="qnum">${fmtDate(r.created_at)} ${fmtTime(r.created_at)}</span>
          <span class="hint">${esc(r.email)}${r.user_id ? "" : " · account deleted"}</span>
          ${late ? '<span class="lbl weak">overdue</span>' : r.status === "received" || r.status === "in_progress" ? `<span class="hint">reply by ${fmtDay(due(r))}</span>` : ""}</div>
        <p style="white-space:pre-wrap">${esc(r.message)}</p>
        <div class="row">
          <label style="flex:0 1 180px">Status<select name="status">${["received", "in_progress", "resolved", "declined"].map(s => `<option value="${s}"${r.status === s ? " selected" : ""}>${s.replace("_", " ")}</option>`).join("")}</select></label>
          <label style="flex:3">Reply (the student sees this)<textarea name="response" rows="2" maxlength="4000">${esc(r.response || "")}</textarea></label>
        </div>
        <div class="actions"><button class="btn sm" type="submit">Save</button><span class="hint amsg"></span></div>
      </form>`;
    };
    pane.innerHTML = `<p class="lede">Privacy requests from signed-in students: access, correction, deletion and complaints. Reply within
      ${H.program.replyDays} days, as the privacy notice promises.${H.program.requestForm ? " Requests from people who can't sign in arrive through the Google Form instead." : ""}</p>
      <h3 class="subhead">Open · ${open.length}</h3>${open.length ? open.map(row).join("") : `<div class="empty">Nothing waiting.</div>`}
      ${data.length > open.length ? `<h3 class="subhead">Closed</h3>${data.filter(r => !open.includes(r)).map(row).join("")}` : ""}`;
    $$("form.rqa", pane).forEach(form => form.addEventListener("submit", async e => {
      e.preventDefault();
      const f = new FormData(form);
      if ((f.get("status") === "resolved" || f.get("status") === "declined") && !String(f.get("response")).trim()) {
        form.querySelector(".amsg").textContent = "Write a reply before closing it: the student only sees what you write here."; return;
      }
      const r = await CL.table("privacy_requests").update({ status: f.get("status"), response: String(f.get("response")).trim() || null }).eq("id", form.dataset.id);
      if (r.error) { form.querySelector(".amsg").textContent = r.error.message; return; }
      requests(pane);
    }));
  } catch (e) { fail(pane, e); }
}

/* ---------------- AI model test (specs/ai-beta.md §6) ----------------
   Four models write the same questions from the same notes; Claude Opus 5
   answers every one blind as referee; the admin then blind-reviews a
   sample. Runs through the ai-pilot Edge Function, which holds the keys. */
const PILOT = {
  models: [["opus", "Claude Opus 5"], ["sonnet", "Claude Sonnet 5"], ["gemini-pro", "Gemini 3.1 Pro"], ["gemini-flash", "Gemini 3.8 Flash"]],
  units: [
    ["foundations-of-computing", "ifs"], ["foundations-of-computing", "dicts"],
    ["economic-business-history", "labour"], ["economic-business-history", "systems"],
    ["algorithmic-thinking-in-business", "graphs"], ["algorithmic-thinking-in-business", "hashing"],
    ["financial-accounting", "income-statement"], ["financial-accounting", "adjusting"],
    ["statistics-for-managers", "sampling"], ["statistics-for-managers", "dists"],
    ["principles-of-marketing", "cb"], ["principles-of-marketing", "strategy"]
  ],
  perUnit: 5, perModelReview: 20
};
const RULE = { maxWrongKeys: 0, maxAmbiguousRate: 0.1, maxRefereeReject: 0.15 };
const pilotRun = () => { try { return localStorage.getItem("bsmt-hub:pilot-run") || ""; } catch (e) { return ""; } };
const invoke = async body => {
  const { data, error } = await CL.sb.functions.invoke("ai-pilot", { body });
  if (error) {
    let msg = error.message;
    try { const j = await error.context.json(); msg = j.error || msg; } catch (e) {}
    throw new Error(msg);
  }
  return data;
};
const usd = n => "$" + Number(n).toFixed(n < 1 ? 3 : 2);

async function aitest(pane, p) {
  const run = pilotRun();
  pane.innerHTML = `<p class="lede">The model test: ${PILOT.models.length} models write ${PILOT.perUnit} questions each from the same
    ${PILOT.units.length} notes units, and Claude Opus 5 answers every question blind as referee. Then you review
    ${PILOT.perModelReview * PILOT.models.length} of them without knowing which model wrote which.</p>
    <div class="drillbar">
      <a class="btn ${!p.view || p.view === "run" ? "" : "ghost"} sm" href="${link("admin", { tab: "aitest" })}">Run &amp; results</a>
      <a class="btn ${p.view === "review" ? "" : "ghost"} sm" href="${link("admin", { tab: "aitest", view: "review" })}">Blind review</a>
      <a class="btn ${p.view === "verdict" ? "" : "ghost"} sm" href="${link("admin", { tab: "aitest", view: "verdict" })}">Verdict</a>
      <span class="score">${run ? "Run " + esc(run) : "No run yet"}</span>
    </div><div id="ait"></div>`;
  const el = $("#ait");
  if (p.view === "review") return pilotReview(el, run);
  if (p.view === "verdict") return pilotVerdict(el, run);
  return pilotRunView(el, run);
}

async function pilotLoad(run) {
  const [calls, items, reviews] = await Promise.all([
    CL.table("ai_pilot_calls").select("*").eq("run", run),
    CL.table("ai_pilot_items").select("*").eq("run", run).order("id"),
    CL.table("ai_pilot_reviews").select("*, ai_pilot_items!inner(run)").eq("ai_pilot_items.run", run).order("pos")
  ]);
  for (const r of [calls, items, reviews]) if (r.error) throw r.error;
  return { calls: calls.data, items: items.data, reviews: reviews.data };
}

function pilotStats(calls, items, model, course) {
  const its = items.filter(i => i.model === model && (!course || i.course === course));
  const gen = calls.filter(c => c.role === "generate" && c.model === model && (!course || c.course === course));
  const fmt = its.filter(i => i.checks.format_ok), judged = fmt.filter(i => i.referee);
  const genCost = gen.reduce((s, c) => s + Number(c.cost_usd), 0);
  return {
    n: its.length, calls: gen.length, failed: gen.filter(c => !c.ok).length,
    formatOk: fmt.length, quote: its.filter(i => i.checks.quote_found).length, dup: its.filter(i => i.checks.near_duplicate_of).length,
    judged: judged.length, agree: judged.filter(i => i.referee.agrees).length, ambiguous: judged.filter(i => i.referee.ambiguous).length,
    genCost, ms: gen.filter(c => c.ok).reduce((s, c) => s + c.ms, 0) / Math.max(1, gen.filter(c => c.ok).length)
  };
}
const pct = (a, b) => b ? Math.round(a * 100 / b) + "%" : "—";

async function pilotRunView(el, run) {
  let data = { calls: [], items: [], reviews: [] };
  if (run) { try { data = await pilotLoad(run); } catch (e) { return fail(el, e); } }
  const done = new Set(data.calls.filter(c => c.role === "generate" && c.ok).map(c => c.model + "|" + c.course + "|" + c.unit));
  const total = PILOT.models.length * PILOT.units.length;
  const spent = data.calls.reduce((s, c) => s + Number(c.cost_usd), 0);
  const refSpent = data.calls.filter(c => c.role === "referee").reduce((s, c) => s + Number(c.cost_usd), 0);
  el.innerHTML = `<div class="card">
      <h3 class="subhead" style="margin-top:0">${run ? `${done.size} of ${total} batches done` : "Ready to run"}</h3>
      <p class="hint">Spent so far ${usd(spent)} (referee ${usd(refSpent)}). Each provider stops itself at $9 for a run, under your $10 limits.
        Expected total: roughly $6–8 at Anthropic and $1–2 at Google.</p>
      <div class="actions" style="margin-top:10px">
        <button class="btn" id="go">${run && done.size ? (done.size < total ? "Resume the test" : "Run finished") : "Start the test"}</button>
        ${run ? `<button class="btn ghost sm" id="fresh">Start a fresh run</button>` : ""}
        <button class="btn ghost sm" id="prev">Preview one unit's notes (free)</button>
      </div>
      <pre id="log" class="pilotlog" hidden></pre></div>
    ${data.items.length ? `<h3 class="subhead">Automatic results</h3><div class="scroller"><table><thead><tr>
      <th>Model</th><th>Questions</th><th>Format OK</th><th>Quote found in notes</th><th>Near-duplicate</th>
      <th>Referee agrees</th><th>Referee: ambiguous</th><th>Cost to write</th><th>Per 10 Q</th><th>Avg time</th></tr></thead><tbody>
      ${PILOT.models.map(([k, name]) => { const s = pilotStats(data.calls, data.items, k);
        return `<tr><td><b>${name}</b>${s.failed ? ` <span class="lbl weak">${s.failed} failed</span>` : ""}</td><td>${s.n}</td><td>${pct(s.formatOk, s.n)}</td><td>${pct(s.quote, s.n)}</td>
          <td>${pct(s.dup, s.n)}</td><td>${pct(s.agree, s.judged)}</td><td>${pct(s.ambiguous, s.judged)}</td>
          <td>${usd(s.genCost)}</td><td>${s.n ? usd(s.genCost / s.n * 10) : "—"}</td><td>${(s.ms / 1000).toFixed(0)}s</td></tr>`; }).join("")}
      </tbody></table></div>
      <p class="hint" style="margin-top:8px">Opus is also the referee, so "Referee agrees" may flatter Opus slightly. That's the fixed-referee trade-off we accepted; your blind review is the check on it.</p>` : ""}`;

  $("#prev").addEventListener("click", async () => {
    const log = $("#log"); log.hidden = false; log.textContent = "Loading…";
    try { const r = await invoke({ action: "preview", run: "preview", course: PILOT.units[0][0], unit: PILOT.units[0][1] });
      log.textContent = `${r.title}: ${r.chars} characters of notes, ${r.bank} existing bank questions.\n\n${r.text}`; }
    catch (e) { log.textContent = "Couldn't preview: " + e.message; }
  });
  const fresh = $("#fresh");
  if (fresh) fresh.addEventListener("click", () => { if (confirm("Start a new run? The old run's results stay in the database.")) { try { localStorage.removeItem("bsmt-hub:pilot-run"); } catch (e) {} pilotRunView(el, ""); } });
  $("#go").addEventListener("click", async () => {
    let r = run;
    if (!r) { r = "pilot-" + new Date().toISOString().slice(0, 16).replace(/[-:T]/g, "").toLowerCase(); try { localStorage.setItem("bsmt-hub:pilot-run", r); } catch (e) {} }
    const go = $("#go"); go.disabled = true; go.textContent = "Running… keep this tab open";
    const log = $("#log"); log.hidden = false; log.textContent = "";
    const say = t => { log.textContent += t + "\n"; log.scrollTop = log.scrollHeight; };
    // one queue per provider, so Anthropic and Google run side by side
    const jobs = PILOT.models.flatMap(([k]) => PILOT.units.map(([c, u]) => ({ k, c, u })))
      .filter(j => !done.has(j.k + "|" + j.c + "|" + j.u));
    const lanes = { anthropic: jobs.filter(j => j.k === "opus" || j.k === "sonnet"), google: jobs.filter(j => j.k.startsWith("gemini")) };
    let stop = false;
    const lane = async list => {
      for (const j of list) {
        if (stop) return;
        const tag = `${j.k.padEnd(12)} ${META[j.c].short} · ${j.u}`;
        try {
          const g = await invoke({ action: "generate", run: r, model: j.k, course: j.c, unit: j.u, n: PILOT.perUnit });
          if (!g.ok) { say(`✗ ${tag}: ${g.error}`); continue; }
          say(`✓ ${tag}: ${g.count} questions, ${usd(g.cost_usd)}, ${(g.ms / 1000).toFixed(0)}s`);
          const f = await invoke({ action: "referee", run: r, ids: g.ids });
          say(f.ok ? `  referee judged ${f.judged}, ${usd(f.cost_usd)}` : `  ✗ referee: ${f.error}`);
        } catch (e) {
          say(`✗ ${tag}: ${e.message}`);
          if (/spend cap|admin only/.test(e.message)) { stop = true; say("Stopped."); }
        }
      }
    };
    await Promise.all([lane(lanes.anthropic), lane(lanes.google)]);
    say("Done.");
    setTimeout(() => pilotRunView(el, r), 800);
  });
}

/* the blind sample: per model, spread across courses, from questions a student would actually see */
async function pilotBuildSample(run, items) {
  const courses = [...new Set(PILOT.units.map(u => u[0]))];
  const picks = [];
  PILOT.models.forEach(([k]) => {
    const base = Math.floor(PILOT.perModelReview / courses.length), extra = PILOT.perModelReview % courses.length;
    courses.forEach((c, ci) => {
      const pool = items.filter(i => i.model === k && i.course === c && i.checks.format_ok && i.referee && i.referee.agrees)
        .sort(() => Math.random() - 0.5);
      picks.push(...pool.slice(0, base + (ci < extra ? 1 : 0)));
    });
  });
  const order = picks.map(i => i.id).sort(() => Math.random() - 0.5);
  const { error } = await CL.table("ai_pilot_reviews").insert(order.map((id, pos) => ({ item_id: id, pos })));
  if (error) throw error;
}

async function pilotReview(el, run) {
  if (!run) { el.innerHTML = `<div class="empty">Run the test first.</div>`; return; }
  let data;
  try { data = await pilotLoad(run); } catch (e) { return fail(el, e); }
  if (!data.reviews.length) {
    el.innerHTML = `<div class="empty"><b>No review sample yet.</b> It takes up to ${PILOT.perModelReview} questions per model, spread across the six courses,
      from the questions that passed the automatic checks and the referee: the ones a student would actually see. Model names are hidden and the order is shuffled.
      <div class="actions" style="margin-top:12px"><button class="btn" id="mk">Build the review sample</button></div></div>`;
    $("#mk").addEventListener("click", async () => { try { await pilotBuildSample(run, data.items); pilotReview(el, run); } catch (e) { fail(el, e); } });
    return;
  }
  const byId = Object.fromEntries(data.items.map(i => [i.id, i]));
  const todo = data.reviews.filter(r => r.reviewed_at == null);
  if (!todo.length) { el.innerHTML = `<div class="empty"><b>All ${data.reviews.length} reviewed.</b> Thank you. <a href="${link("admin", { tab: "aitest", view: "verdict" })}">See the verdict →</a></div>`; return; }
  const r = todo[0], it = byId[r.item_id], q = it.item;
  const n = data.reviews.length - todo.length + 1;
  el.innerHTML = `<div class="card">
    <div class="qmeta"><span class="qnum">${n} / ${data.reviews.length}</span><span class="qtopic">${esc(META[it.course].short)} · ${esc(it.unit)}</span><span class="qtopic">${esc(q.kind)}</span></div>
    <p class="qtext">${esc(q.question)}</p>
    <div class="opts">${q.options.map((o, k) => `<div class="opt${k === q.answer_index ? " right" : ""}"><span class="k">${"ABCD"[k]}</span><span>${esc(o)}${k === q.answer_index ? " <b>(the key)</b>" : ""}</span></div>`).join("")}</div>
    <div class="why"><b>Explanation:</b> ${esc(q.explanation)}<br><b>Quoted from the notes:</b> “${esc(q.source_quote)}”${it.checks.quote_found ? "" : " <i>(not found word-for-word in the notes)</i>"}</div>
    <form id="rv" class="aform" style="margin-top:14px">
      <div class="row">
        <label>Is the key correct?<select name="key_ok" required><option value="">—</option><option value="true">Yes</option><option value="false">No</option></select></label>
        <label>Only one defensible answer?<select name="single" required><option value="">—</option><option value="true">Yes</option><option value="false">No</option></select></label>
        <label>Grounded in the notes?<select name="grounded" required><option value="">—</option><option value="true">Yes</option><option value="false">No</option></select></label>
        <label>Wrong options tempting?<select name="distractors" required><option value="">—</option><option value="3">3: tempting</option><option value="2">2: some</option><option value="1">1: obvious</option></select></label>
      </div>
      <label>Note (optional)<input name="note" maxlength="1000"></label>
      <div class="actions"><button class="btn" type="submit">Save &amp; next</button><a class="btn ghost sm" href="${link("c/" + it.course, { tab: "notes", u: it.unit })}" target="_blank">Open the notes</a><span class="hint amsg"></span></div>
    </form></div>`;
  $("#rv").addEventListener("submit", async e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const { error } = await CL.table("ai_pilot_reviews").update({ key_ok: f.get("key_ok") === "true", single: f.get("single") === "true",
      grounded: f.get("grounded") === "true", distractors: +f.get("distractors"), note: f.get("note") || null, reviewed_at: new Date().toISOString() }).eq("item_id", r.item_id);
    if (error) { e.target.querySelector(".amsg").textContent = error.message; return; }
    pilotReview(el, run);
  });
}

async function pilotVerdict(el, run) {
  if (!run) { el.innerHTML = `<div class="empty">Run the test first.</div>`; return; }
  let data;
  try { data = await pilotLoad(run); } catch (e) { return fail(el, e); }
  const byId = Object.fromEntries(data.items.map(i => [i.id, i]));
  const done = data.reviews.filter(r => r.reviewed_at);
  const courses = [...new Set(PILOT.units.map(u => u[0]))];
  const cell = (k, c) => {
    const s = pilotStats(data.calls, data.items, k, c);
    const rv = done.filter(r => byId[r.item_id].model === k && byId[r.item_id].course === c);
    const wrong = rv.filter(r => !r.key_ok).length, amb = rv.filter(r => !r.single).length;
    const reject = s.judged ? 1 - s.agree / s.judged : 1;
    const pass = rv.length > 0 && wrong <= RULE.maxWrongKeys && amb / rv.length <= RULE.maxAmbiguousRate && reject < RULE.maxRefereeReject;
    return { pass, wrong, amb, n: rv.length, reject, cost10: s.n ? s.genCost / s.n * 10 : Infinity };
  };
  el.innerHTML = `<p class="lede">The rule we fixed before the results: a model qualifies for a course if your sample has no wrong keys, at most 1 in 10 ambiguous,
    and the referee rejected under 15% of its questions. Among qualifying models, the cheapest wins. ${done.length < data.reviews.length ? `<b>${data.reviews.length - done.length} reviews still to do</b>, so this is provisional.` : ""}</p>
    <div class="scroller"><table><thead><tr><th>Course</th>${PILOT.models.map(([, n]) => `<th>${n}</th>`).join("")}<th>Pick</th></tr></thead><tbody>
    ${courses.map(c => { const cells = PILOT.models.map(([k]) => [k, cell(k, c)]);
      const ok = cells.filter(([, x]) => x.pass).sort((a, b) => a[1].cost10 - b[1].cost10);
      return `<tr><td><b>${esc(META[c].short)}</b></td>${cells.map(([, x]) => `<td><span class="lbl ${x.pass ? "strong" : "weak"}">${x.pass ? "pass" : "fail"}</span><br>
        <span class="hint">${x.n} reviewed · ${x.wrong} wrong key · ${x.amb} ambiguous · referee rejected ${Math.round(x.reject * 100)}% · ${isFinite(x.cost10) ? usd(x.cost10) : "—"}/10Q</span></td>`).join("")}
        <td><b>${ok.length ? PILOT.models.find(m => m[0] === ok[0][0])[1] : "none qualifies"}</b></td></tr>`; }).join("")}
    </tbody></table></div>
    ${done.some(r => r.note) ? `<h3 class="subhead">Your notes</h3>${done.filter(r => r.note).map(r => `<p class="hint">· ${esc(META[byId[r.item_id].course].short)} (${esc(byId[r.item_id].model)}): ${esc(r.note)}</p>`).join("")}` : ""}`;
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
