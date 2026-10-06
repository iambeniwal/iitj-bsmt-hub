/* ===================================================================
   Admin → AI beta and Admin → Review (specs/ai-beta.md). Loaded after
   admin.js, which shows these tabs.

   AI beta   the switch, budget, limits and models; the waiting list and
             members (approve within the cap, remove); usage and cost;
             re-checks after a notes change and lesson pre-generation.
   Review    open "Report a problem" reports, one card per question:
             Withdraw · Fix and keep · Dismiss · Promote (AI questions),
             or a record of the outcome (bank questions, whose fixes ship
             in the next content release).

   As in admin.js, the page is a courtesy: every read and write goes
   through row-level security or an admin_* function in the database.
   =================================================================== */
(function () {
"use strict";

const H = window.HUB, CL = H.cloud;
if (!H.ui || !CL || !CL.available) return;
const { esc, link, fmtDay, plural, META, SLUGS, QBY, $, $$ } = H.ui;
const MODELS = { "gemini-flash": "Gemini 3.8 Flash", "gemini-pro": "Gemini 3.1 Pro", "sonnet": "Claude Sonnet 5", "opus": "Claude Opus 5" };
const REASON = { wrong_key: "wrong key", multiple_correct: "more than one correct", not_in_syllabus: "not in syllabus", unclear: "unclear", other: "other" };
const STATUS = { approved: ["approved", "strong"], waitlist: ["waiting", "shaky"], left: ["left", "new"], removed: ["removed", "weak"] };
const fail = (el, e) => { el.innerHTML = `<div class="empty warnbox"><b>Couldn't load this.</b> ${esc(e.message || e)}</div>`; };
const inr = v => "₹" + Number(v || 0).toLocaleString("en-IN", { maximumFractionDigits: 2 });
const day = iso => new Date(iso).toLocaleDateString("sv-SE", { timeZone: "Asia/Kolkata" });
async function all(q) {                                  // page through a select
  const out = [];
  for (let from = 0; from < 20000; from += 1000) {
    const { data, error } = await q().range(from, from + 999);
    if (error) throw error;
    out.push(...data);
    if (data.length < 1000) break;
  }
  return out;
}
async function fn(body) {
  const { data, error } = await CL.sb.functions.invoke("ai", { body });
  if (error) { let i = null; try { i = await error.context.json(); } catch (e) {} throw new Error(i?.error || error.message); }
  if (data && data.ok === false) throw new Error(data.error);
  return data;
}

H.adminTabs = H.adminTabs || {};

/* ================= AI beta ================= */
H.adminTabs.aibeta = async function (pane) {
  try {
    const [{ data: s, error: se }, o, members] = await Promise.all([
      CL.table("ai_settings").select("*").eq("id", 1).single(), CL.rpc("admin_overview"), CL.rpc("admin_ai_members")]);
    if (se) throw se;
    const approved = members.filter(m => m.status === "approved").length;
    const waiting = members.filter(m => m.status === "waitlist");
    const num = (k, label, step) => `<label>${label}<input name="${k}" type="number" min="0" step="${step || 1}" value="${esc(s[k])}"></label>`;
    pane.innerHTML = `
    <div class="tiles">
      <div class="tile${s.enabled ? "" : " warn"}"><span class="k">AI</span><span class="v">${s.enabled ? "On" : "Off"}</span><span class="s">${s.enabled ? "students can use it" : "only admins can test it"}</span></div>
      <div class="tile"><span class="k">Spent today</span><span class="v">${inr(o.ai_spent_today)}</span><span class="s">of ${inr(s.daily_budget_inr)} daily budget</span></div>
      <div class="tile"><span class="k">Members</span><span class="v">${approved}<small> / ${s.member_cap}</small></span><span class="s">${waiting.length} waiting</span></div>
      <a class="tile${o.reports_open ? " warn" : ""}" href="${link("admin", { tab: "review" })}"><span class="k">Open reports</span><span class="v">${o.reports_open}</span><span class="s">review queue →</span></a>
    </div>

    <h3 class="subhead">Members</h3>
    ${members.length ? `<div class="scroller"><table><thead><tr><th>Student</th><th>Status</th><th>Joined</th><th>Batches 7d</th><th>Lessons 7d</th><th>Cost 7d</th><th>Reports</th><th></th></tr></thead><tbody>
      ${members.map(m => `<tr${m.status === "left" || m.status === "removed" ? ' class="muted"' : ""}>
        <td><b>${esc(m.name || "—")}</b><br><span class="hint">${esc(m.email)}</span></td>
        <td><span class="lbl ${STATUS[m.status][1]}">${STATUS[m.status][0]}</span></td>
        <td>${fmtDay(m.joined_at)}</td><td>${m.batches_7d}</td><td>${m.lessons_7d}</td><td>${inr(m.cost_inr_7d)}</td><td>${m.reports_open || ""}</td>
        <td>${m.status === "waitlist" ? `<button class="btn sm" data-set="approved" data-u="${m.user_id}">Approve</button>` : ""}
          ${m.status === "approved" ? `<button class="btn ghost sm" data-set="removed" data-u="${m.user_id}">Remove</button>` : ""}
          ${m.status === "removed" ? `<button class="btn ghost sm" data-set="waitlist" data-u="${m.user_id}">Back to waiting list</button>` : ""}</td></tr>`).join("")}
      </tbody></table></div>
      ${waiting.length && approved < s.member_cap ? `<div class="actions" style="margin-top:10px"><button class="btn ghost sm" id="approvenext">Approve the next ${Math.min(waiting.length, s.member_cap - approved)} in the queue</button></div>` : ""}`
      : `<p class="hint">Nobody has joined yet. Students join from their account page.</p>`}

    <h3 class="subhead">Settings</h3>
    <form id="aiset" class="aform card">
      <label class="toggle"><input type="checkbox" name="enabled"${s.enabled ? " checked" : ""}> AI switched on for members</label>
      <div class="row">${num("daily_budget_inr", "Daily budget (₹)", "1")}${num("usd_inr", "₹ per US$", "0.01")}${num("member_cap", "Member cap")}</div>
      <div class="row">${num("batches_per_day", "Question batches / student / day")}${num("lessons_per_day", "Personal lessons / student / day")}${num("batch_size", "Questions per batch")}</div>
      <div class="row">${num("eve_multiplier", "Quiz-eve multiplier", "0.5")}${num("reports_per_day", "Reports / student / day")}${num("review_threshold", "Reporters before “Under review”")}</div>
      <div class="scroller"><table><thead><tr><th>Course</th><th>Writer</th><th>Referee (a different provider)</th></tr></thead><tbody>
        ${SLUGS.map(slug => { const m = (s.models || {})[slug] || {}; const sel = (role, v) => `<select name="${role}:${slug}">${Object.entries(MODELS).map(([k, l]) => `<option value="${k}"${k === v ? " selected" : ""}>${l}</option>`).join("")}</select>`;
          return `<tr><td>${esc(META[slug].name)}</td><td>${sel("writer", m.writer)}</td><td>${sel("referee", m.referee)}</td></tr>`; }).join("")}
      </tbody></table></div>
      <label>Beta notice version<input name="notice_version" type="number" min="1" value="${esc(s.notice_version)}"><span class="hint">Raise it only when the notice's wording changes; new joiners then accept the new version.</span></label>
      <div class="actions"><button class="btn" type="submit">Save settings</button><span class="hint" id="setmsg">${s.updated_at ? "Last saved " + new Date(s.updated_at).toLocaleString("en-GB", { timeZone: "Asia/Kolkata", day: "numeric", month: "short", hour: "numeric", minute: "2-digit" }) : ""}</span></div>
    </form>

    <h3 class="subhead">Usage</h3>
    <div id="usage"><p class="hint">Loading…</p></div>

    <h3 class="subhead">Maintenance</h3>
    <div class="card">
      <p class="hint">After a content update, <b>Re-check</b> re-solves a course's AI questions against the new notes: passes stay, failures are withdrawn
        (their answers removed), and lessons written from the old notes are retired. <b>Write lessons</b> prepares the shared Simpler and Example
        lessons for every topic in the course's next dated quiz, so they're ready the day before.</p>
      <div class="scroller" style="margin-top:10px"><table><tbody>${SLUGS.map(slug => `<tr><td>${esc(META[slug].name)}</td>
        <td><button class="btn ghost sm" data-job="recheck" data-c="${slug}">Re-check</button>
            <button class="btn ghost sm" data-job="pregenerate" data-c="${slug}">Write lessons for the next quiz</button></td>
        <td class="hint" data-out="${slug}"></td></tr>`).join("")}</tbody></table></div>
    </div>`;

    $$("[data-set]", pane).forEach(b => b.addEventListener("click", async () => {
      b.disabled = true;
      try { await CL.rpc("admin_ai_member_set", { target: b.dataset.u, new_status: b.dataset.set }); H.adminTabs.aibeta(pane); }
      catch (e) { alert(e.message); b.disabled = false; }
    }));
    const next = $("#approvenext", pane);
    if (next) next.addEventListener("click", async () => {
      next.disabled = true;
      const n = Math.min(waiting.length, s.member_cap - approved);
      for (const m of waiting.slice(0, n)) {
        try { await CL.rpc("admin_ai_member_set", { target: m.user_id, new_status: "approved" }); } catch (e) { alert(e.message); break; }
      }
      H.adminTabs.aibeta(pane);
    });

    $("#aiset", pane).addEventListener("submit", async e => {
      e.preventDefault();
      const f = new FormData(e.target), msg = $("#setmsg", pane);
      const models = {};
      SLUGS.forEach(slug => { models[slug] = { writer: f.get("writer:" + slug), referee: f.get("referee:" + slug) }; });
      const PROV = k => k.startsWith("gemini") ? "google" : "anthropic";
      const same = SLUGS.filter(slug => PROV(models[slug].writer) === PROV(models[slug].referee));
      if (same.length) { msg.textContent = `The referee must come from a different provider than the writer: ${same.map(x => META[x].short).join(", ")}.`; return; }
      const patch = { enabled: f.get("enabled") === "on", models };
      ["daily_budget_inr", "usd_inr", "member_cap", "batches_per_day", "lessons_per_day", "batch_size", "eve_multiplier", "reports_per_day", "review_threshold", "notice_version"]
        .forEach(k => { patch[k] = Number(f.get(k)); });
      const { error } = await CL.table("ai_settings").update(patch).eq("id", 1);
      msg.textContent = error ? error.message : "Saved.";
      if (!error) setTimeout(() => H.adminTabs.aibeta(pane), 600);
    });

    $$("[data-job]", pane).forEach(b => b.addEventListener("click", async () => {
      const out = $(`[data-out="${b.dataset.c}"]`, pane), job = b.dataset.job;
      $$("[data-job]", pane).forEach(x => { x.disabled = true; });
      let total = { checked: 0, passed: 0, withdrawn: 0, queued: 0, lessons_retired: 0, made: 0 };
      try {
        for (let round = 0; round < 12; round++) {
          out.textContent = job === "recheck" ? `Re-checking… (${total.checked} so far)` : `Writing lessons… (${total.made} so far)`;
          const d = await fn({ action: job, course: b.dataset.c });
          Object.keys(total).forEach(k => { total[k] += d[k] || 0; });
          if (d.note) { out.textContent = d.note; break; }
          if (d.done) {
            out.textContent = job === "recheck"
              ? `Done: ${total.checked} checked, ${total.passed} passed, ${total.withdrawn} withdrawn${total.queued ? `, ${total.queued} promoted to check by hand` : ""}, ${total.lessons_retired} lessons retired.`
              : `Done: ${total.made} lesson${total.made === 1 ? "" : "s"} written for ${d.for}.`;
            break;
          }
        }
      } catch (e) { out.textContent = e.message; }
      $$("[data-job]", pane).forEach(x => { x.disabled = false; });
    }));

    usage($("#usage", pane)).catch(e => fail($("#usage", pane), e));
  } catch (e) { fail(pane, e); }
};

/* cost per active student per day, the heaviest users, and report rate by model */
async function usage(el) {
  const since = new Date(Date.now() - 14 * 864e5).toISOString();
  const [reqs, calls, qs, reps] = await Promise.all([
    all(() => CL.table("ai_requests").select("user_id, feature, ok, cost_inr, created_at").gte("created_at", since).order("created_at")),
    all(() => CL.table("ai_usage").select("model, role, ok, cost_inr, input_tokens, output_tokens").gte("created_at", since)),
    all(() => CL.table("ai_questions").select("id, writer, course, status")),
    all(() => CL.table("reports").select("qid, status, reason").like("qid", "ai-%"))
  ]);
  if (!reqs.length) { el.innerHTML = `<p class="hint">No AI use in the last 14 days.</p>`; return; }
  const days = {};
  reqs.forEach(r => {
    const d = days[day(r.created_at)] = days[day(r.created_at)] || { cost: 0, users: {}, q: 0, l: 0 };
    d.cost += +r.cost_inr;
    if (r.user_id && r.ok) { d.users[r.user_id] = (d.users[r.user_id] || 0) + +r.cost_inr; if (r.feature === "questions") d.q++; else d.l++; }
  });
  const median = a => { const s = [...a].sort((x, y) => x - y); return s.length ? (s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2) : 0; };
  const byModel = {};
  calls.forEach(c => { const m = byModel[c.model] = byModel[c.model] || { calls: 0, fail: 0, cost: 0, inp: 0, out: 0 }; m.calls++; if (!c.ok) m.fail++; m.cost += +c.cost_inr; m.inp += c.input_tokens; m.out += c.output_tokens; });
  const writer = {}, qWriter = Object.fromEntries(qs.map(q => [q.id, q.writer]));
  qs.forEach(q => { (writer[q.writer] = writer[q.writer] || { n: 0, rep: 0, wd: 0 }).n++; if (q.status === "withdrawn") writer[q.writer].wd++; });
  const reported = new Set(reps.map(r => r.qid));
  reported.forEach(id => { if (writer[qWriter[id]]) writer[qWriter[id]].rep++; });
  const users = {};
  reqs.forEach(r => { if (r.user_id) users[r.user_id] = (users[r.user_id] || 0) + +r.cost_inr; });
  el.innerHTML = `
    <div class="scroller"><table><thead><tr><th>Day</th><th>Active students</th><th>Batches</th><th>Lessons</th><th>Cost</th><th>Per active student: median · heaviest</th></tr></thead><tbody>
      ${Object.entries(days).reverse().map(([d, v]) => { const per = Object.values(v.users); return `<tr><td>${d}</td><td>${per.length}</td><td>${v.q}</td><td>${v.l}</td><td>${inr(v.cost)}</td>
        <td>${per.length ? `${inr(median(per))} · ${inr(Math.max(...per))}` : "—"}</td></tr>`; }).join("")}
    </tbody></table></div>
    <div class="scroller" style="margin-top:12px"><table><thead><tr><th>Model</th><th>Calls (14 d)</th><th>Failed</th><th>Tokens in · out</th><th>Cost</th><th>Questions written</th><th>Reported</th><th>Withdrawn</th></tr></thead><tbody>
      ${Object.keys({ ...byModel, ...writer }).map(k => { const m = byModel[k] || { calls: 0, fail: 0, cost: 0, inp: 0, out: 0 }, w = writer[k] || { n: 0, rep: 0, wd: 0 };
        return `<tr><td>${esc(MODELS[k] || k)}</td><td>${m.calls}</td><td>${m.fail || ""}</td><td>${(m.inp / 1e3).toFixed(0)}k · ${(m.out / 1e3).toFixed(0)}k</td><td>${inr(m.cost)}</td>
          <td>${w.n}</td><td>${w.n ? `${w.rep} (${(100 * w.rep / w.n).toFixed(1)}%)` : "—"}</td><td>${w.wd || ""}</td></tr>`; }).join("")}
    </tbody></table></div>
    <p class="hint" style="margin-top:8px">Heaviest users over 14 days: ${Object.values(users).sort((a, b) => b - a).slice(0, 5).map(inr).join(" · ") || "—"} (names are on the members table above).
      Cost includes failed calls and the referee's re-solve.</p>`;
}

/* ================= Review ================= */
H.adminTabs.review = async function (pane, p) {
  const show = p.show || "open";
  try {
    const reps = await all(() => CL.table("reports").select("*").eq("status", show === "open" ? "open" : show).order("created_at"));
    const aiIds = [...new Set(reps.map(r => r.qid).filter(id => id.startsWith("ai-")))];
    const aiq = aiIds.length ? await all(() => CL.table("ai_questions").select("*").in("id", aiIds)) : [];
    const AIQ = Object.fromEntries(aiq.map(q => [q.id, q]));
    const withdrawnByCheck = show === "open" ? await all(() => CL.table("ai_questions").select("id, course, topic, item, status_note, changed_at")
      .eq("status", "withdrawn").like("status_note", "%re-check%").gte("changed_at", new Date(Date.now() - 14 * 864e5).toISOString())) : [];
    const groups = {};
    reps.forEach(r => { (groups[r.qid] = groups[r.qid] || []).push(r); });
    const qOf = id => id.startsWith("ai-") ? (AIQ[id] ? { ...AIQ[id].item, course: AIQ[id].course, topic: AIQ[id].topic, ai: AIQ[id] } : null) : QBY[id];
    const order = Object.entries(groups).sort((a, b) => b[1].length - a[1].length || a[1][0].created_at.localeCompare(b[1][0].created_at));

    pane.innerHTML = `<p class="lede">Reports from students. One card per question; an outcome applies to every report on it.
      AI questions: <b>Withdraw</b> removes it for good, <b>Fix</b> corrects it and returns it to its owner's pool, <b>Dismiss</b> returns it unchanged,
      <b>Promote</b> records the bank ID it was copied to. Bank questions: the outcome is a record; fixes ship in the next content release.</p>
      <div class="actions">${["open", "withdrawn", "fixed", "dismissed", "promoted"].map(k => `<a class="btn ${k === show ? "" : "ghost "}sm" href="${link("admin", { tab: "review", show: k })}">${k}</a>`).join("")}</div>
      ${order.length ? order.map(([qid, rs]) => {
        const q = qOf(qid);
        return `<div class="card rv" data-q="${esc(qid)}" style="margin-top:12px">
          <div class="qmeta"><span class="qid">${esc(qid)}</span>${q ? `<span class="qtopic">${esc(META[q.course]?.short || "")} · ${esc(q.topic)}</span>` : ""}
            ${q && q.ai ? `<span class="qtopic ai">AI · ${esc(MODELS[q.ai.writer] || q.ai.writer)} / ${esc(MODELS[q.ai.referee] || q.ai.referee)}</span>` : '<span class="qtopic">bank</span>'}
            <span class="qtopic bad">${plural(rs.length, "report")}</span></div>
          ${q ? `<p class="qtext">${esc(q.q)}</p><ul class="rvopts">${q.c.map((c, i) => `<li class="${q.a.includes(i) ? "right" : ""}">${esc(c)}</li>`).join("")}</ul>
            <div class="why">${esc(q.w)}${q.cite ? `\n\nFrom the notes: “${esc(q.cite)}”` : ""}</div>` : `<p class="hint">Question text not found.</p>`}
          <ul class="rvreasons">${rs.map(r => `<li><b>${esc(REASON[r.reason])}</b>${r.note ? `: ${esc(r.note)}` : ""} <span class="hint">${fmtDay(r.created_at)}</span>${r.resolution ? ` <span class="hint">→ ${esc(r.resolution)}</span>` : ""}</li>`).join("")}</ul>
          ${show === "open" ? `<div class="actions">
            <button class="btn warn sm" data-act="withdrawn" data-r="${rs[0].id}">Withdraw</button>
            ${q && q.ai ? `<button class="btn ghost sm" data-fix="${rs[0].id}">Fix…</button>` : `<button class="btn ghost sm" data-act="fixed" data-r="${rs[0].id}">Fixed in content</button>`}
            <button class="btn ghost sm" data-act="dismissed" data-r="${rs[0].id}">Dismiss</button>
            ${q && q.ai ? `<button class="btn ghost sm" data-promote="${rs[0].id}">Promote…</button><button class="btn ghost sm" data-copy="${esc(qid)}">Copy as bank question</button>` : ""}
          </div><div class="fixbox"></div>` : ""}
        </div>`; }).join("") : `<div class="empty" style="margin-top:12px">Nothing ${show === "open" ? "to review" : "here"}.</div>`}
      ${withdrawnByCheck.length ? `<h3 class="subhead">Withdrawn by a re-check (last 14 days)</h3>
        <p class="hint">These failed the blind re-solve after their notes changed, and were removed from their owners' pools automatically.</p>
        ${withdrawnByCheck.map(q => `<details class="qrow"><summary><span class="qid">${esc(q.id)}</span><span class="qtopic">${esc(META[q.course]?.short || "")} · ${esc(q.topic)}</span><span class="qq">${esc(q.item.q)}</span></summary>
          <div class="qans"><ul>${q.item.c.map((c, i) => `<li class="${q.item.a.includes(i) ? "right" : ""}">${esc(c)}</li>`).join("")}</ul><div class="why">${esc(q.status_note)}</div></div></details>`).join("")}` : ""}`;

    const resolve = async (btn, args) => {
      btn.disabled = true;
      try { await CL.rpc("admin_report_resolve", args); H.adminTabs.review(pane, p); }
      catch (e) { alert(e.message); btn.disabled = false; }
    };
    $$("[data-act]", pane).forEach(b => b.addEventListener("click", () => {
      const note = prompt(`Note for the record (optional). Outcome: ${b.dataset.act}`, "");
      if (note === null) return;
      resolve(b, { report_id: +b.dataset.r, outcome: b.dataset.act, admin_note: note || null });
    }));
    $$("[data-promote]", pane).forEach(b => b.addEventListener("click", () => {
      const id = prompt("The bank ID it was added under in the content files (e.g. foc-q0412):", "");
      if (!id) return;
      if (!/^[a-z]{2,3}-q[0-9]{4}$/.test(id.trim())) { alert("That isn't a bank question ID."); return; }
      resolve(b, { report_id: +b.dataset.r, outcome: "promoted", admin_note: "promoted to " + id.trim(), bank_id: id.trim() });
    }));
    $$("[data-copy]", pane).forEach(b => b.addEventListener("click", () => {
      const q = qOf(b.dataset.copy);
      const snippet = `{ id: "${q.course ? H.courses[q.course].questions[0].id.split("-")[0] : "xx"}-q____", topic: ${JSON.stringify(q.topic)},\n  q: ${JSON.stringify(q.q)},\n  c: ${JSON.stringify(q.c)},\n  a: ${JSON.stringify(q.a)},\n  w: ${JSON.stringify(q.w)} }`;
      navigator.clipboard.writeText(snippet).then(() => { b.textContent = "Copied"; });
    }));
    $$("[data-fix]", pane).forEach(b => b.addEventListener("click", () => {
      const card = b.closest(".rv"), q = qOf(card.dataset.q), box = $(".fixbox", card);
      box.innerHTML = `<form class="aform" style="margin-top:10px">
        <label>Question<textarea name="q" rows="2">${esc(q.q)}</textarea></label>
        ${q.c.map((c, i) => `<label class="toggle"><input type="radio" name="a" value="${i}"${q.a.includes(i) ? " checked" : ""}> <input name="c${i}" value="${esc(c)}" style="flex:1"></label>`).join("")}
        <label>Explanation<textarea name="w" rows="3">${esc(q.w)}</textarea></label>
        <label>What was wrong (for the record)<input name="note"></label>
        <div class="actions"><button class="btn sm" type="submit">Save the fix and return it to the pool</button></div></form>`;
      $("form", box).addEventListener("submit", e => {
        e.preventDefault();
        const f = new FormData(e.target);
        const item = { ...q.ai.item, q: String(f.get("q")).trim(), c: q.c.map((_, i) => String(f.get("c" + i)).trim()), a: [Number(f.get("a"))], w: String(f.get("w")).trim() };
        if (new Set(item.c).size !== item.c.length || item.c.some(x => !x)) { alert("Options must be filled in and all different."); return; }
        resolve(e.submitter || b, { report_id: +b.dataset.fix, outcome: "fixed", admin_note: String(f.get("note") || "") || null, fixed_item: item });
      });
    }));
  } catch (e) { fail(pane, e); }
};
})();
