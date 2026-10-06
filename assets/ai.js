/* ===================================================================
   AI beta (v2.3), client side. Design: specs/ai-beta.md.

   What it adds:
     · Account → Join the AI beta (the beta notice), waiting-list place,
       today's allowance, and leaving.
     · #/ai?c=<slug>&t=<topic>: a topic's AI page. "Write 10 more
       questions" adds to your own pool; "Explain this further" gives a
       lesson (Simpler and Example are shared and free once written;
       "I keep mixing this up" works from your own wrong answers).
     · Your AI questions join practice, mistakes and smart sessions,
       labelled AI-written. Mock papers stay bank-only.
     · "Report a problem" on every question. Reporting an AI question
       hides it from you at once and removes your answers to it.
       A bank question that 3 students report shows "Under review".

   The work happens in the `ai` Edge Function, which checks membership,
   limits, the budget and the quiz lock before calling a provider.
   =================================================================== */
(function () {
"use strict";

const H = window.HUB, store = H.store, CL = H.cloud;
if (!CL || !CL.available) { H.ai = null; return; }      // offline copy: no AI
const sb = CL.sb;

const NOTICE = [
  "AI-written questions and lessons can be wrong. Check them against the notes, and use Report a problem when something looks off.",
  "To write them, the notes for your topic are sent to Anthropic or Google. For “I keep mixing this up”, so is the text of the questions you got wrong. Never your name, email or account.",
  "Your AI use is counted (what you asked for and what it cost) so we can work out what the beta costs per student.",
  "You can leave the beta at any time from this page. The AI features are planned to become a paid add-on after the beta; everything else in the hub stays free."
];
const REASONS = [["wrong_key", "The marked answer is wrong"], ["multiple_correct", "More than one answer is correct"],
  ["not_in_syllabus", "Not in my syllabus"], ["unclear", "Unclear wording"], ["other", "Something else"]];
const KINDS = { simpler: "Simpler", example: "Give me an example", confusion: "I keep mixing this up" };

const subs = [];
const changed = what => subs.forEach(fn => { try { fn(what); } catch (e) { console.error(e); } });

const ai = {
  status: null,                 // ai_status(): {status, position, enabled, limits, used, …}
  pool: [],                     // this student's live AI questions, in the bank's shape
  reported: new Set(),          // question IDs this student has reported
  review: new Set(),            // bank question IDs under review (public)
  onChange(fn) { subs.push(fn); },
  questions() { return ai.pool.filter(q => !ai.reported.has(q.id)); },
  approved() { return !!ai.status && (ai.status.status === "approved" || CL.isAdmin()); },
  NOTICE, REASONS
};
H.ai = ai;

/* ---------------- loading ---------------- */
const toQ = r => ({ id: r.id, course: r.course, topic: r.topic, unit: r.unit, ai: true, created: r.created_at,
  q: r.item.q, c: r.item.c, a: r.item.a, w: r.item.w + (r.item.cite ? `\n\nFrom the notes: “${r.item.cite}”` : "") });

async function loadReview() {
  const { data, error } = await sb.rpc("questions_under_review");
  if (!error) { ai.review = new Set(data || []); changed("review"); }
}
let loadedFor = null;
async function loadUser() {
  const uid = CL.user.id;
  const [st, qs, reps] = await Promise.all([
    sb.rpc("ai_status"),
    sb.from("ai_questions").select("id, course, unit, topic, item, created_at").eq("user_id", uid).in("status", ["live", "rechecking"]).order("created_at"),
    sb.from("reports").select("qid").eq("user_id", uid)
  ]);
  if (CL.user?.id !== uid) return;
  if (st.error) { console.warn("ai_status", st.error); return; }   // the beta's tables aren't there yet
  ai.status = st.data;
  ai.pool = (qs.data || []).map(toQ);
  ai.reported = new Set((reps.data || []).map(r => r.qid));
  // answers to AI questions that have left your pool (withdrawn, or reported on another device) stop counting here too
  const live = new Set(ai.pool.map(q => q.id));
  Object.keys(store.snapshot().att).filter(id => id.startsWith("ai-") && !live.has(id)).forEach(id => store.forget(id));
  changed("user");
}
async function refreshStatus() {
  const { data, error } = await sb.rpc("ai_status");
  if (!error) { ai.status = data; changed("status"); }
}
CL.onChange(what => {
  if (what !== "auth") return;
  if (CL.user && (CL.status === "synced" || CL.status === "offline") && loadedFor !== CL.user.id) {
    loadedFor = CL.user.id; loadUser().catch(e => console.warn("ai", e));
  }
  if (!CL.user && loadedFor) { loadedFor = null; ai.status = null; ai.pool = []; ai.reported = new Set(); changed("user"); }
});
loadReview();

/* ---------------- actions ---------------- */
async function callFn(body) {
  const { data, error } = await sb.functions.invoke("ai", { body });
  if (error) {
    let info = null;
    try { info = await error.context.json(); } catch (e) {}
    const err = new Error(info?.error || "Couldn't reach the AI service. Check your connection and try again.");
    err.code = info?.code || "network";
    throw err;
  }
  if (data && data.ok === false) { const err = new Error(data.error); err.code = data.code; throw err; }
  return data;
}

ai.join = async () => {
  const { error } = await sb.rpc("ai_beta_join", { accepted_notice: ai.status.notice_version });
  if (error) throw error;
  await refreshStatus();
};
ai.leave = async () => {
  const { error } = await sb.rpc("ai_beta_leave");
  if (error) throw error;
  await refreshStatus();
};
ai.more = async (course, topic) => {
  const d = await callFn({ action: "questions", course, topic });
  d.questions.forEach(r => ai.pool.push(toQ({ id: r.id, course, unit: r.unit, topic: r.topic, created_at: new Date().toISOString(),
    item: { q: r.q, c: r.c, a: r.a, w: r.w, cite: r.cite } })));
  await refreshStatus();
  changed("pool");
  return d;
};
/* shared lessons are read straight from the database when they exist: free, and open to everyone signed in */
ai.lesson = async (course, topic, kind, wrong, picks) => {
  if (kind !== "confusion") {
    const { data } = await sb.from("ai_lessons").select("id, kind, topic, body, created_at, unit, fingerprint")
      .is("user_id", null).eq("course", course).eq("topic", topic).eq("kind", kind).eq("status", "live")
      .order("created_at", { ascending: false }).limit(1);
    if (data && data.length && !ai.approved()) return { lesson: data[0], cached: true };
    if (data && data.length) {
      // the server knows whether the notes have changed since; ask it only if we may write a new one
      const d = await callFn({ action: "lesson", course, topic, kind }).catch(() => ({ lesson: data[0], cached: true }));
      return d;
    }
    if (!ai.approved()) { const e = new Error("This lesson hasn't been written yet. Beta testers can have it written; join the beta from your account page."); e.code = "not_member"; throw e; }
  }
  const d = await callFn({ action: "lesson", course, topic, kind, wrong, picks });
  if (kind === "confusion") await refreshStatus();
  return d;
};
ai.report = async (q, reason, note) => {
  const { error } = await sb.from("reports").insert({ qid: q.id, reason, note: note || null });
  if (error) throw new Error(/duplicate|unique/i.test(error.message) ? "You've already reported this question." : error.message);
  ai.reported.add(q.id);
  if (q.ai) store.forget(q.id);                   // the server has removed your answers to it
  if (ai.status) ai.status.reports_today = (ai.status.reports_today || 0) + 1;
  changed("report");
};

/* is AI off for this course right now because its quiz is running? */
function quizRunning(slug) {
  const c = H.semesters.flatMap(s => s.courses).find(x => x.slug === slug);
  const now = Date.now();
  return c ? c.assessments.find(a => a.start && a.end && now >= +new Date(a.start) && now < +new Date(a.end)) || null : null;
}
function onEve(slug) {
  const c = H.semesters.flatMap(s => s.courses).find(x => x.slug === slug);
  const now = Date.now();
  return c ? c.assessments.find(a => a.start && now < +new Date(a.start) && now >= +new Date(a.start) - 864e5) || null : null;
}
ai.quizRunning = quizRunning;

/* ---------------- rendering helpers ---------------- */
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
/* AI text is plain text: escape it, keep ``` code blocks exactly, paragraphs on blank lines */
function rich(s) {
  return String(s || "").split(/```[a-z]*\n?/).map((part, i) => i % 2
    ? `<pre class="code">${esc(part.replace(/\n$/, ""))}</pre>`
    : part.split(/\n\s*\n/).map(p => p.trim() ? `<p>${esc(p.trim()).replace(/\n/g, "<br>")}</p>` : "").join("")).join("");
}

/* the report form, opened under a question */
ai.reportButton = q => !CL.user || !ai.status ? "" : ai.reported.has(q.id)
  ? `<span class="hint aireported">You reported this question.</span>`
  : `<button class="linkbtn" data-report="${esc(q.id)}">Report a problem</button>`;
ai.wireReports = (root, find) => {
  root.querySelectorAll("[data-report]").forEach(b => b.addEventListener("click", e => {
    e.preventDefault();
    const q = find(b.dataset.report); if (!q) return;
    const box = document.createElement("div");
    box.className = "reportbox";
    box.innerHTML = `<p><b>What's wrong with this question?</b></p>
      ${REASONS.map(([v, l], i) => `<label><input type="radio" name="rr-${esc(q.id)}" value="${v}"${i === 0 ? " checked" : ""}> ${l}</label>`).join("")}
      <textarea maxlength="1000" rows="2" placeholder="Anything that would help (optional)"></textarea>
      <div class="actions"><button class="btn sm" data-send>Send report</button><button class="btn ghost sm" data-cancel>Cancel</button></div>
      <p class="hint" data-msg>${q.ai ? "Reporting an AI question hides it from you and removes your answers to it." : "Bank questions stay up while they're checked; after 3 reports they show “Under review”."}</p>`;
    b.replaceWith(box);
    box.querySelector("[data-cancel]").addEventListener("click", () => box.replaceWith(b));
    box.querySelector("[data-send]").addEventListener("click", async ev => {
      ev.target.disabled = true;
      try {
        await ai.report(q, box.querySelector("input:checked").value, box.querySelector("textarea").value.trim());
        box.innerHTML = `<p class="hint"><b>Thanks, reported.</b> ${q.ai ? "It's hidden from you now and your answers to it no longer count." : "It goes to the review queue."}</p>`;
      } catch (err) { ev.target.disabled = false; box.querySelector("[data-msg]").textContent = err.message; }
    });
  }));
};

/* ---------------- Account → AI beta ---------------- */
ai.accountCard = () => `<section class="tight" id="aibeta"></section>`;
ai.mountAccount = el => {
  if (!el) return;
  const s = ai.status;
  if (!s) { el.innerHTML = ""; return; }
  const lim = s.limits || {}, used = s.used || {};
  const head = `<div class="sechead"><h2>AI beta</h2><span class="tag">${s.status === "approved" ? "you're in" : s.status === "waitlist" ? "waiting list" : "50 places"}</span></div>`;
  let body;
  if (s.status === "approved") {
    body = `<p class="lede">You're in the AI beta. On any topic, open <b>AI</b> to have new questions written for you or to have the topic explained another way.
        ${s.enabled ? "" : "<br><b>The AI is switched off at the moment.</b>"}</p>
      <dl class="strip">
        <div class="cell"><dt>Question batches today</dt><dd>${used.batches} / ${lim.batches}<small>${lim.batch_size} questions each</small></dd></div>
        <div class="cell"><dt>Personal lessons today</dt><dd>${used.lessons} / ${lim.lessons}<small>shared lessons are unlimited</small></dd></div>
        <div class="cell"><dt>Your AI questions</dt><dd>${ai.questions().length}<small>in your own pool</small></dd></div>
      </dl>
      <p class="hint" style="margin-top:10px">Limits reset at midnight and double for a course in the 24 hours before its quiz. AI is off for a course while its quiz is running.</p>
      <div class="actions" style="margin-top:12px"><button class="btn ghost sm" data-leave>Leave the beta</button></div>`;
  } else if (s.status === "waitlist") {
    body = `<p class="lede">You're on the waiting list, <b>number ${s.position}</b>. Places are given out in order as they open up.</p>
      <div class="actions"><button class="btn ghost sm" data-leave>Leave the waiting list</button></div>`;
  } else if (s.status === "removed") {
    body = `<p class="lede">Your place in the AI beta was removed. Message Rahul Beniwal if you think that's a mistake.</p>`;
  } else {
    body = `<p class="lede">New questions on your weak topics, and lessons that explain a topic another way, written by AI from the course notes.
        It's a closed beta for 50 students while we check quality and cost${s.seats_left ? "" : "; it's full now, so you'll join the waiting list"}.</p>
      <div class="notice"><p><b>Before you join</b></p><ol>${NOTICE.map(n => `<li>${esc(n)}</li>`).join("")}</ol>
        <label class="toggle"><input type="checkbox" data-accept> I've read this and want to join</label>
        <div class="actions" style="margin-top:10px"><button class="btn" data-join disabled>Join the AI beta</button></div></div>`;
  }
  el.innerHTML = head + body + `<p class="hint" data-msg></p>`;
  const msg = el.querySelector("[data-msg]");
  const acc = el.querySelector("[data-accept]"), join = el.querySelector("[data-join]");
  if (acc) acc.addEventListener("change", () => { join.disabled = !acc.checked; });
  if (join) join.addEventListener("click", async () => { join.disabled = true; try { await ai.join(); } catch (e) { msg.textContent = e.message; join.disabled = false; } });
  const leave = el.querySelector("[data-leave]");
  if (leave) leave.addEventListener("click", async () => {
    if (!confirm(s.status === "approved" ? "Leave the AI beta? Your AI questions stay, but you'll need to rejoin the waiting list to get new ones." : "Leave the waiting list?")) return;
    try { await ai.leave(); } catch (e) { msg.textContent = e.message; }
  });
};

/* ---------------- #/ai?c=<slug>&t=<topic> ---------------- */
let lastLesson = null;                      // keep the lesson on screen across re-renders
H.views = H.views || {};
H.views.ai = function (p) {
  const U = H.ui, app = document.getElementById("app");
  const slug = p.c, C = H.courses[slug], topic = p.t;
  if (!C || !C.topics.some(t => t.name === topic)) { location.hash = "#/"; return; }
  const R = U.META[slug], s = ai.status;
  const mine = ai.questions().filter(q => q.course === slug && q.topic === topic);
  const unseen = mine.filter(q => !store.attempts(q.id).length).length;
  const wrongs = [...C.questions, ...mine].filter(q => q.topic === topic && store.attempts(q.id).some(a => !a[1]));
  const running = quizRunning(slug), eve = onEve(slug);
  const lim = s?.limits || {}, used = s?.used || {};
  const mult = eve ? lim.eve_multiplier : 1;
  const batchesLeft = s ? Math.floor(lim.batches * mult) - used.batches : 0;
  const lessonsLeft = s ? Math.floor(lim.lessons * mult) - used.lessons : 0;

  let gate = "";
  if (!CL.user) gate = `<div class="empty"><b>Sign in to use the AI features.</b> They're for IITJ accounts in the AI beta. <div class="actions" style="margin-top:12px"><a class="btn" href="#/data">Sign in</a></div></div>`;
  else if (!s) gate = `<div class="empty">Loading…</div>`;
  else if (!ai.approved()) gate = `<div class="empty"><b>The AI features are in a closed beta.</b> ${s.status === "waitlist" ? `You're number ${s.position} on the waiting list.` : "Join the waiting list from your account page."}
      Shared lessons that have already been written are open to everyone signed in, below.
      <div class="actions" style="margin-top:12px"><a class="btn ghost" href="#/data">Account</a></div></div>`;
  else if (!s.enabled && !CL.isAdmin()) gate = `<div class="empty"><b>The AI is switched off at the moment.</b> Everything else in the hub works as usual.</div>`;
  else if (running) gate = `<div class="empty"><b>AI is off for ${esc(R.short)} while ${esc(running.name)} is running.</b> It comes back when the quiz ends.</div>`;
  const canWrite = !gate;

  app.innerHTML = `
  <header class="mast slim">
    ${U.crumbs(["#/c/" + slug, R.name])}
    <div class="eyebrow">AI · beta · ${esc(R.short)}</div>
    <h1>${esc(topic)}</h1>
    <p class="sub">Written by AI from this topic's notes and checked by a second AI before you see it. It can still be wrong:
      check against the <a href="${U.link("c/" + slug, { tab: "notes", u: C.unitOf[topic] })}">notes</a>, and report anything that looks off.</p>
  </header>
  ${gate && !(CL.user && s && !ai.approved()) ? `<section class="tight">${gate}</section>` : ""}
  ${canWrite || (CL.user && s) ? `
  <section class="tight">
    ${CL.user && s && !ai.approved() ? gate : ""}
    <div class="sechead"><h2>New questions</h2><span class="tag">${mine.length} in your pool${unseen ? ` · ${unseen} unanswered` : ""}</span></div>
    ${canWrite ? `<p class="lede">${Number(lim.batch_size) || 10} new questions on this topic at a time. Only the ones that pass every check are kept, so a batch can come back a little short.
      ${eve ? `Limits are doubled for ${esc(R.short)} today: ${esc(eve.name)} is tomorrow.` : ""}</p>` : ""}
    <div class="actions">
      ${canWrite ? `<button class="btn" id="more"${batchesLeft > 0 ? "" : " disabled"}>Write ${Number(lim.batch_size) || 10} more · ${Math.max(0, batchesLeft)} left today</button>` : ""}
      ${mine.length ? `<a class="btn ghost" href="${U.link("practice", { c: slug, t: topic, s: "ai" })}">Practise my AI questions · ${mine.length}</a>` : ""}
      <a class="btn ghost" href="${U.link("practice", { c: slug, t: topic })}">Practise the whole topic</a>
    </div>
    <p class="hint" id="moremsg"></p>
  </section>
  <section class="tight">
    <div class="sechead"><h2>Explain this further</h2></div>
    <div class="actions">
      <button class="btn ghost" data-kind="simpler">Simpler</button>
      <button class="btn ghost" data-kind="example">Give me an example</button>
      ${ai.approved() ? `<button class="btn ghost" data-kind="confusion"${canWrite && wrongs.length && lessonsLeft > 0 ? "" : " disabled"}>I keep mixing this up${wrongs.length ? ` · uses your ${wrongs.length} wrong answer${wrongs.length === 1 ? "" : "s"}` : ""}</button>` : ""}
    </div>
    ${ai.approved() ? `<p class="hint">${wrongs.length ? `“I keep mixing this up” sends the text of the questions you got wrong (never your name or email). ${Math.max(0, lessonsLeft)} left today.` : "“I keep mixing this up” works from your wrong answers on this topic, so it opens once you've missed one."}</p>` : ""}
    <div id="lesson"></div>
  </section>` : ""}
  ${U.footer()}`;

  const more = app.querySelector("#more");
  if (more) more.addEventListener("click", async () => {
    const msg = app.querySelector("#moremsg");
    more.disabled = true; more.textContent = "Writing and checking… (about a minute)";
    try {
      const d = await ai.more(slug, topic);
      lastLesson = lastLesson && lastLesson.key === slug + "|" + topic ? lastLesson : null;
      H.ui.route(true);
      const m2 = document.getElementById("moremsg");
      if (m2) m2.innerHTML = `<b>${d.kept} new question${d.kept === 1 ? "" : "s"} added</b>${d.kept < d.asked ? ` (${d.asked - d.kept} didn't pass the checks and were dropped)` : ""}. <a href="${U.link("practice", { c: slug, t: topic, s: "ai" })}">Practise them →</a>`;
    } catch (e) { msg.textContent = e.message; more.disabled = false; more.textContent = "Try again"; }
  });
  const box = app.querySelector("#lesson");
  if (box && lastLesson && lastLesson.key === slug + "|" + topic) paintLesson(box, lastLesson.d, lastLesson.kind);
  app.querySelectorAll("[data-kind]").forEach(b => b.addEventListener("click", async () => {
    const kind = b.dataset.kind;
    box.innerHTML = `<p class="hint">${kind === "confusion" ? "Reading your mistakes and writing a lesson…" : "Fetching the lesson… (if it hasn't been written yet, about 30 seconds)"}</p>`;
    app.querySelectorAll("[data-kind]").forEach(x => { x.disabled = true; });
    try {
      const wrongIds = wrongs.map(q => q.id), picks = {};
      const d = await ai.lesson(slug, topic, kind, wrongIds, picks);
      lastLesson = { key: slug + "|" + topic, d, kind };
      paintLesson(box, d, kind);
    } catch (e) { box.innerHTML = `<p class="hint bad">${esc(e.message)}</p>`; }
    app.querySelectorAll("[data-kind]").forEach(x => { x.disabled = x.dataset.kind === "confusion" && !(canWrite && wrongs.length); });
  }));
};

function paintLesson(box, d, kind) {
  const L = d.lesson.body;
  box.innerHTML = `<article class="lesson">
    <div class="lhead"><span class="tag">${esc(KINDS[kind])}</span><span class="hint">AI-written${d.lesson.created_at ? " · " + new Date(d.lesson.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : ""}</span></div>
    <h3>The idea</h3>${rich(L.explanation)}
    <h3>Worked example</h3>${rich(L.example)}
    <h3>The usual mix-up</h3>${rich(L.confusion)}
    ${L.checks && L.checks.length ? `<h3>Check yourself</h3>${L.checks.map((q, i) => `<div class="lcheck" data-i="${i}">
      <p class="qtext">${esc(q.q)}</p>
      <div class="opts">${q.c.map((c, k) => `<button class="opt" data-k="${k}"><span>${esc(c)}</span></button>`).join("")}</div>
      <div class="why" hidden>${esc(q.w)}</div></div>`).join("")}` : ""}
  </article>`;
  box.querySelectorAll(".lcheck").forEach(el => {
    const q = L.checks[+el.dataset.i];
    el.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => {
      el.querySelectorAll(".opt").forEach(x => {
        x.disabled = true; const k = +x.dataset.k;
        if (q.a.includes(k)) x.classList.add("right"); else if (x === b) x.classList.add("wrong");
      });
      el.querySelector(".why").hidden = false;
    }));
  });
}
})();
