/* ===================================================================
   BSMT Study Hub — router and views.

   One static page. Content comes from content/program.js (dates,
   grading) and content/semN/<slug>.js (notes, questions, traps,
   definitions); progress comes from assets/store.js. Hash routes:

     #/                         home
     #/c/<slug>?tab=…&u=…       a course: topics · notes · traps · exams
     #/practice?<filters>       untimed or paced drill
     #/mock?c=<slug>&a=<id>     a full timed paper, marked at the end
     #/cards?c=<slug>&deck=…    flashcards with spaced repetition
     #/bank?<filters>           every question, searchable
     #/mistakes                 what you keep getting wrong
     #/data                     what is stored, and a reset

   <filters> for practice and bank: c (course) · t (topic) · u (unit)
   · s (new | mistakes | flagged | right) · q (text search)
   =================================================================== */
(function () {
"use strict";

const H = window.HUB, store = H.store, M = H.program.marking;
const app = document.getElementById("app");
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const $ = (s, r) => (r || app).querySelector(s);
const $$ = (s, r) => [...(r || app).querySelectorAll(s)];
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
/* Options are shuffled every time a question is shown, so the position of
   the right answer carries no signal. (Imported Quiz 1 content had 76% of
   its answers on B.) Options that refer to the others, such as "Both" or
   "All three", stay at the end; q.keep freezes an order that is itself the
   point, like the Data → Information → Knowledge → Wisdom ladder. */
const TAIL = /^(both|neither|either|all (three|four|of the above|the above)|none( of the above)?)\b/i;
function optionOrder(q) {
  const idx = q.c.map((_, i) => i);
  if (q.keep) return idx;
  const tail = idx.filter(i => TAIL.test(q.c[i].trim()));
  return shuffle(idx.filter(i => !tail.includes(i))).concat(tail);
}
const plural = (n, w, p) => `${n} ${n === 1 ? w : (p || w + "s")}`;
const stripTags = s => String(s).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");

/* ---------------- content index ---------------- */
const SEMS = H.semesters;
const META = {};                                 // slug -> registry entry (+ sem)
SEMS.forEach(s => s.courses.forEach(c => { META[c.slug] = Object.assign({ sem: s.n }, c); }));
const SLUGS = Object.keys(META).filter(s => H.courses[s]);
const QS = [], QBY = {};
const CARDS = [], CBY = {};
SLUGS.forEach(slug => {
  const C = H.courses[slug];
  C.unitOf = {}; C.topics.forEach(t => { C.unitOf[t.name] = t.unit; });
  C.questions.forEach(q => { q.course = slug; QS.push(q); QBY[q.id] = q; });
  C.traps.forEach(t => CARDS.push({ id: t.id, course: slug, kind: "trap", t }));
  C.defs.forEach(d => CARDS.push({ id: d.id, course: slug, kind: "def", d }));
});
CARDS.forEach(c => { CBY[c.id] = c; });

const unitTitle = (slug, uid) => { const u = H.courses[slug].units.find(x => x.id === uid); return u ? stripTags(u.title) : uid; };

/* ---------------- time ---------------- */
const IST = { timeZone: "Asia/Kolkata" };
const fmtDate = iso => new Date(iso).toLocaleDateString("en-GB", Object.assign({ weekday: "short", day: "numeric", month: "short" }, IST));
const fmtTime = iso => new Date(iso).toLocaleTimeString("en-GB", Object.assign({ hour: "numeric", minute: "2-digit", hour12: true }, IST)).replace(/\s?([ap])m/i, (_, p) => " " + p.toUpperCase() + "M");
const fmtDay = ts => new Date(ts).toLocaleDateString("en-GB", Object.assign({ day: "numeric", month: "short" }, IST));
function until(a) {
  if (!a.start) return { state: "tba", text: "date TBA" };
  const now = Date.now(), s = +new Date(a.start), e = +new Date(a.end || a.start);
  if (now >= e) return { state: "past", text: "done" };
  if (now >= s) return { state: "live", text: "live now" };
  const d = s - now, days = Math.floor(d / 864e5), hrs = Math.floor(d / 36e5) % 24, min = Math.floor(d / 6e4) % 60;
  return { state: days === 0 ? "today" : days <= 7 ? "soon" : "later",
    text: days > 0 ? `${days}d ${hrs}h` : hrs > 0 ? `${hrs}h ${min}m` : `${min}m` };
}
const ivlText = d => d < 1 ? "10 min" : d < 30 ? `${Math.round(d)} d` : `${Math.round(d / 30)} mo`;
const secsPerQ = a => a && a.durationMin && a.questions ? Math.max(5, Math.round(a.durationMin * 60 / a.questions)) : 20;
const lastTimed = slug => [...META[slug].assessments].reverse().find(a => a.durationMin) || null;
function nextAssessment(slug) {
  return META[slug].assessments.find(a => a.start && until(a).state !== "past")
      || META[slug].assessments.find(a => a.status === "tba") || null;
}

/* ---------------- selection ---------------- */
function select(p) {
  const text = (p.q || "").trim().toLowerCase();
  return QS.filter(q =>
    (!p.c || q.course === p.c) &&
    (!p.t || q.topic === p.t) &&
    (!p.u || H.courses[q.course].unitOf[q.topic] === p.u) &&
    (!p.s || (p.s === "flagged" ? store.flagged(q.id)
            : p.s === "mistakes" ? store.isMistake(q.id)
            : p.s === "official" ? q.o
            : store.status(q.id) === p.s)) &&
    (!text || q.id === text || (q.q + " " + q.c.join(" ") + " " + q.w).toLowerCase().includes(text)));
}
const allMistakes = () => QS.filter(q => store.isMistake(q.id));
const dueCards = slug => CARDS.filter(c => (!slug || c.course === slug) && store.isDue(c.id));
const newCards = slug => CARDS.filter(c => (!slug || c.course === slug) && !store.card(c.id));

/* ---------------- routing ---------------- */
function parse() {
  const h = location.hash.replace(/^#\/?/, "");
  const [path, qs] = h.split("?");
  const parts = path.split("/").filter(Boolean);
  const p = {}; new URLSearchParams(qs || "").forEach((v, k) => { p[k] = v; });
  return { parts, p };
}
const link = (route, p) => {
  const qs = new URLSearchParams(Object.entries(p || {}).filter(([, v]) => v !== "" && v != null)).toString();
  return "#/" + route + (qs ? "?" + qs : "");
};
let cleanup = null;
const CL = H.cloud || { available: false, onChange() {}, isAdmin: () => false, unread: () => [], announcements: [] };
H.views = H.views || {};                         // extra views registered by other files (admin.js)
function route(keepScroll) {
  if (cleanup) { cleanup(); cleanup = null; }
  const { parts, p } = parse();
  const view = parts[0] || "";
  const y = window.scrollY;
  if (view === "c" && H.courses[parts[1]]) courseView(parts[1], p);
  else if (view === "practice") practiceView(p);
  else if (view === "mock") mockView(p);
  else if (view === "cards") cardsView(p);
  else if (view === "bank") bankView(p);
  else if (view === "mistakes") mistakesView();
  else if (view === "data") dataView();
  else if (view === "news") newsView();
  else if (view === "privacy") privacyView();
  else if (H.views[view]) H.views[view](p, parts);
  else homeView();
  paintTopnav(view);
  paintFlash();
  window.scrollTo(0, keepScroll ? y : 0);
}
window.addEventListener("hashchange", () => route());

/* sign-in, sync and announcements arrive after the first render: redraw
   pages that only display things, never one mid-practice or mid-mock */
const REDRAW = new Set(["", "c", "mistakes", "data", "news", "bank", "privacy", "cards", "admin"]);
CL.onChange(what => {
  const v = parse().parts[0] || "";
  if (REDRAW.has(v) && !(v === "admin" && what === "public") && !(v === "cards" && what !== "auth")) route(true);
  else { paintTopnav(v); paintFlash(); }
});

/* one-line messages from sign-in: errors, and "your guest progress moved" */
function paintFlash() {
  const old = document.getElementById("flash"); if (old) old.remove();
  const msg = CL.error || CL.note;
  if (!msg) return;
  app.insertAdjacentHTML("afterbegin", `<div id="flash" class="flash${CL.error ? " bad" : ""}"><span>${esc(msg)}</span><button aria-label="Dismiss">×</button></div>`);
  document.querySelector("#flash button").addEventListener("click", () => CL.dismiss());
}

/* ---------------- shell ---------------- */
function paintTopnav(view) {
  const el = document.getElementById("topnav");
  const badge = { mistakes: allMistakes().length, cards: dueCards().length, news: CL.unread().length };
  const top = [["", "Home"], ["mistakes", "Mistakes"], ["cards", "Flashcards"], ["bank", "Bank"]];
  if (CL.announcements.length) top.push(["news", "Updates"]);
  if (CL.isAdmin()) top.push(["admin", "Admin"]);
  if (!CL.available) top.push(["data", "My data"]);
  const u = CL.user, nm = u && ((u.user_metadata && (u.user_metadata.full_name || u.user_metadata.name)) || u.email);
  const acct = !CL.available ? ""
    : u ? `<a class="acct${view === "data" ? " on" : ""}" href="#/data" title="${esc(u.email)} · ${CL.status === "offline" ? "not synced yet" : "synced"}">
        <span class="av">${esc((nm || "?").trim()[0].toUpperCase())}</span><span class="dot ${CL.status === "offline" ? "off" : CL.status === "synced" ? "ok" : "busy"}"></span></a>`
    : `<a class="btn sm signin" href="#/data">Sign in</a>`;
  el.innerHTML = `<div class="topbar">
    <a class="brand" href="#/">BSMT<span>Hub</span></a>
    <div class="navrow">${top.map(([r, l]) => `<a href="#/${r}"${(view === r || (view === "c" && r === "")) ? ' aria-current="true"' : ""}>${l}${badge[r] ? `<i>${badge[r]}</i>` : ""}</a>`).join("")}</div>
    ${acct}
  </div>`;
}
const footer = () => `<footer>
  <p class="credit">Compiled by <strong>Rahul Beniwal</strong> ·
    <a href="https://www.linkedin.com/in/iambeniwal/" target="_blank" rel="noopener noreferrer">LinkedIn</a> ·
    <a href="https://github.com/iambeniwal/iitj-bsmt-hub" target="_blank" rel="noopener noreferrer">Source</a></p>
  <p>Student-made study aid, not official IIT Jodhpur or Masai School course material. Exam facts come from each course's
    official LMS announcement; always confirm against the LMS, which is authoritative.</p>
  <p class="licence">Notes and questions licensed <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC&nbsp;BY-NC-SA&nbsp;4.0</a>; site code under MIT.
    Underlying course material remains the property of IIT Jodhpur and the respective faculty and is <strong>not</strong> licensed here.
    Not affiliated with or endorsed by IIT Jodhpur or Masai School.
    ${CL.user ? "Your progress is saved to your account." : "As a guest, your progress is stored only in this browser."}
    <a href="#/privacy">Privacy notice</a>. The hosted site counts page visits with Google&nbsp;Analytics; offline copies do not report at all.</p>
</footer>`;
/* "← Home / Course" on every page but home */
const crumbs = (...trail) => `<div class="crumbs"><a class="backlink" href="#/">← Home</a>${
  trail.map(([href, label]) => `<span>/</span><a class="backlink" href="${href}">${esc(label)}</a>`).join("")}</div>`;
const LBL = { new: "new", started: "just started", weak: "weak", shaky: "shaky", strong: "strong" };
const lbl = t => `<span class="lbl ${t.label}">${LBL[t.label]}</span>`;
const pctOf = t => Math.round(t.acc * 100);
const bar = (pct, cls) => `<span class="meter${cls ? " " + cls : ""}"><span style="width:${pct}%"></span></span>`;

/* announcements: plain text from the database, escaped, with links and line breaks */
const annBody = t => esc(t).replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>').replace(/\n/g, "<br>");
const annDate = a => fmtDate(a.published_at);
/* the strip at the top of home and course pages: pinned, plus anything unread from the last fortnight */
function annStrip(course) {
  const unread = new Set(CL.unread().map(a => a.id)), fresh = Date.now() - 14 * 864e5;
  const list = CL.announcements.filter(a => (course ? a.course === course : !a.course || unread.has(a.id))
    && (a.pinned || (unread.has(a.id) && Date.parse(a.published_at) > fresh))).slice(0, 3);
  if (!list.length) return "";
  return `<div class="annstrip">${list.map(a => `<a class="annbar${unread.has(a.id) ? " unread" : ""}" href="#/news">
    <span class="pill ${a.pinned ? "today" : "soon"}">${a.pinned ? "Pinned" : "New"}</span>
    <b>${esc(a.title)}</b><span class="when">${annDate(a)}${a.course && META[a.course] ? " · " + esc(META[a.course].short) : ""}</span></a>`).join("")}</div>`;
}

/* =================================================================
   HOME
   ================================================================= */
function homeView() {
  const upcoming = [];
  SLUGS.forEach(slug => META[slug].assessments.forEach(a => {
    const u = until(a);
    if (a.start && u.state !== "past") upcoming.push({ slug, a, u });
  }));
  upcoming.sort((x, y) => new Date(x.a.start) - new Date(y.a.start));
  const recent = [];
  SLUGS.forEach(slug => META[slug].assessments.forEach(a => { if (a.start && until(a).state === "past") recent.push({ slug, a }); }));
  recent.sort((x, y) => new Date(y.a.start) - new Date(x.a.start));
  const tbaCount = SLUGS.filter(s => META[s].assessments.some(a => a.status === "tba" && a.id !== "end")).length;

  const mis = allMistakes(), due = dueCards(), fresh = newCards();
  const answered = store.answeredCount();

  /* Today: a smart session, aimed at the next quiz if one is under two weeks away */
  const A = H.adapt;
  const soon = upcoming.find(x => new Date(x.a.start) - Date.now() < 14 * 864e5);
  const focus = soon ? soon.slug : "";
  const plan = A.smartPick({ c: focus, n: 20 });
  const weak = A.weakSpots("", 4);
  const started = A.hasHistory();

  app.innerHTML = `
  <header class="hub-mast">
    <div class="eyebrow">IIT Jodhpur · ${esc(H.program.name)} · Batch ${esc(H.program.batch)}</div>
    <h1>Study Hub</h1>
    <p class="sub">Notes, a ${QS.length.toLocaleString("en-IN")}-question bank, flashcards and timed mock papers for every course, plus a record of
      what you keep getting wrong. ${CL.user ? "Your progress is saved to your account." : CL.available ? "Use it as a guest, or sign in with your IITJ Google account to keep your progress safe." : "Your progress stays in this browser."}</p>
  </header>
  ${annStrip()}

  <section class="tight">
    <div class="sechead"><h2>Today</h2>${soon ? `<span class="tag">${esc(META[focus].short)} ${esc(soon.a.name)} in ${esc(soon.u.text)}</span>` : ""}</div>
    <div class="today">
      <a class="plan" href="${link("practice", { mode: "smart", c: focus })}">
        <span class="k">Smart session${focus ? " · " + esc(META[focus].name) : " · all courses"}</span>
        <span class="v">${plan.qs.length} questions</span>
        <span class="s">${started ? esc(A.describeMix(plan.mix)) : "A spread of new questions across every topic, to find your level. It adapts from your first answer."}</span>
        <span class="go">Start →</span>
      </a>
      <div class="weakbox">
        <h4>Your weak spots</h4>
        ${weak.length ? weak.map(t => `<div class="wrow">
            <span class="tname">${esc(t.topic)}<em>${esc(META[t.slug].short)} · ${pctOf(t)}% recently${t.mistakes ? ` · ${t.mistakes} to fix` : ""}</em></span>
            ${lbl(t)}
            <a class="btn ghost sm" href="${link("practice", { c: t.slug, t: t.topic })}">Drill</a></div>`).join("")
          : `<p class="hint">${started ? "Nothing weak yet. Keep answering and any topic under 80% will show up here." : "Answer a few questions and the topics you struggle with will show up here."}</p>`}
      </div>
    </div>
    <details class="how"><summary>How a smart session picks questions</summary>
      <p>Your open mistakes come first, then questions you got right a while ago and are due a check (after 1, 3, 7, 16 and 35 days),
      then questions you haven't seen, starting with your weakest topics. No single topic takes more than about a third of a session.
      A topic is <b>weak</b> under 60% right on your recent answers, <b>shaky</b> under 80%, and <b>strong</b> from 80%.
      All of it is worked out from what you've answered in this browser.</p></details>
  </section>

  <section class="tight">
    <div class="sechead"><h2>Next up</h2></div>
    ${upcoming.length ? `<div class="nextlist">${upcoming.slice(0, 4).map(({ slug, a, u }) => `
      <a class="nextrow" href="#/c/${slug}?tab=exams">
        <span class="pill ${u.state === "live" || u.state === "today" ? "today" : u.state}">${esc(u.state === "live" ? "Live now" : u.state === "today" ? "Today" : u.text)}</span>
        <b>${esc(META[slug].name)} · ${esc(a.name)}</b>
        <span class="when">${fmtDate(a.start)} · ${fmtTime(a.start)} IST · ${a.questions} Q · ${a.durationMin} min</span>
      </a>`).join("")}</div>`
    : `<div class="empty"><b>No dates announced yet.</b> All six Quiz 1 papers are done${recent.length ? ` (the last was ${esc(META[recent[0].slug].name)} on ${fmtDate(recent[0].a.start)})` : ""}.
       Quiz 2 dates for ${tbaCount} courses will appear here once the LMS publishes them. A quiet week is a good time to clear your mistakes and start the flashcard habit.</div>`}
  </section>

  <section class="tight">
    <div class="tiles">
      <a class="tile${mis.length ? " warn" : ""}" href="#/mistakes"><span class="k">Mistakes to fix</span><span class="v">${mis.length}</span>
        <span class="s">${mis.length ? "each one clears after two correct answers in a row" : "none yet; they collect as you practise"}</span></a>
      <a class="tile" href="#/cards"><span class="k">Flashcards due</span><span class="v">${due.length}</span>
        <span class="s">${due.length ? "review these first" : `${fresh.length} cards not started yet`}</span></a>
      <a class="tile" href="#/bank"><span class="k">Questions answered</span><span class="v">${answered.toLocaleString("en-IN")}<small> / ${QS.length.toLocaleString("en-IN")}</small></span>
        <span class="s">across ${SLUGS.length} courses</span></a>
    </div>
  </section>

  ${SEMS.map(sem => `<section class="tight">
    <div class="sechead"><h2>${esc(sem.label)}</h2><span class="tag">${esc(sem.term)}</span></div>
    <div class="courses">${sem.courses.filter(c => H.courses[c.slug]).map(c => {
      const ids = H.courses[c.slug].questions.map(q => q.id), m = store.mastery(ids);
      const n = nextAssessment(c.slug), u = n ? until(n) : null;
      return `<a class="course" href="#/c/${c.slug}">
        <div class="course-top"><span class="pill later">${esc(c.short)}</span>
          ${n ? `<span class="pill ${u.state === "tba" ? "past" : u.state === "today" || u.state === "live" ? "today" : u.state}">${esc(n.name)} · ${esc(u.text)}</span>` : ""}</div>
        <h3>${esc(c.name)}</h3>
        <p class="course-when">${esc(c.lecturer)}<br><span style="color:var(--ink-3)">${c.grading.quizPct}% a quiz · best ${c.grading.bestOf} of ${c.grading.quizzes} · end-term ${c.grading.finalPct}%</span></p>
        <div class="mrow">${bar(m.pct)}<span>${m.right}/${m.total}</span></div>
        <div class="course-foot"><span>${ids.length} Q · ${m.mistakes ? `<b style="color:var(--bad)">${m.mistakes} to fix</b>` : `${m.seen} answered`}</span><span class="go">Open →</span></div>
      </a>`;
    }).join("")}</div>
  </section>`).join("")}

  <div class="hubnote"><b>How quizzes are marked.</b> ${esc(M.note)}. A blind guess between four options is worth +0.06; rule out
    one option and it rises to +0.17. Every course counts its <strong>best 2 of 3</strong> quizzes. Foundations of Computing quizzes
    are worth 15% each; the other five are worth 20%. The end-term is worth 60% everywhere, and Foundations of Computing's is pen and paper, including writing Python by hand.</div>
  ${footer()}`;
}

/* =================================================================
   COURSE
   ================================================================= */
function courseView(slug, p) {
  const C = H.courses[slug], R = META[slug];
  const tab = p.tab || "topics";
  const ids = C.questions.map(q => q.id), m = store.mastery(ids);
  const n = nextAssessment(slug), nu = n ? until(n) : null;
  const due = dueCards(slug).length;
  const tabs = [["topics", "Topics & practice"], ["notes", "Notes"], ["traps", `Traps · ${C.traps.length}`], ["exams", "Assessments"]];

  app.innerHTML = `
  <header class="mast">
    ${crumbs()}
    <div class="eyebrow">Semester ${R.sem} · ${esc(R.short)} · ${esc(R.lecturer)}</div>
    <h1>${esc(R.name)}</h1>
    <dl class="strip">
      <div class="cell"><dt>Mastery</dt><dd>${m.pct}%<small>${m.right} of ${m.total} right on last try</small></dd></div>
      <div class="cell${m.mistakes ? " hot" : ""}"><dt>Mistakes</dt><dd>${m.mistakes}<small>to clear</small></dd></div>
      <div class="cell"><dt>Cards due</dt><dd>${due}<small>${C.traps.length + C.defs.length} in the deck</small></dd></div>
      <div class="cell hot"><dt>Next</dt><dd>${n ? esc(n.name) : "—"}<small>${n ? (n.start ? fmtDate(n.start) + " · " + nu.text : "date not announced") : ""}</small></dd></div>
      <div class="cell"><dt>Weighting</dt><dd>${R.grading.quizPct}%<small>a quiz · best ${R.grading.bestOf} of ${R.grading.quizzes}</small></dd></div>
    </dl>
  </header>
  ${annStrip(slug)}
  <nav><div class="navrow">${tabs.map(([k, l]) => `<a href="${link("c/" + slug, { tab: k })}"${k === tab ? ' aria-current="true"' : ""}>${l}</a>`).join("")}</div></nav>
  <div id="pane"></div>
  ${footer()}`;

  const pane = $("#pane");
  if (tab === "notes") return courseNotes(C, pane, p.u);
  if (tab === "traps") {
    pane.innerHTML = `<section><div class="sechead"><h2>The traps</h2><span class="tag">high-yield</span></div>
      <p class="lede">${C.traps.length} distinctions that question writers like to test, because the wrong answer is so tempting. They are also in the flashcard deck.</p>
      <div class="grid2">${C.traps.map(t => `<div class="trap"><h4>${esc(t.h)}</h4><p>${esc(t.p)}</p><div class="fix">→ ${esc(t.f)}</div></div>`).join("")}</div></section>`;
    return;
  }
  if (tab === "exams") return courseExams(slug, pane);

  /* topics & practice */
  const nNew = ids.filter(id => store.status(id) === "new").length;
  const nFlag = ids.filter(id => store.flagged(id)).length;
  const nOff = C.questions.filter(q => q.o).length;
  pane.innerHTML = `<section>
    <div class="actions">
      <a class="btn" href="${link("practice", { mode: "smart", c: slug })}">Smart session · 20</a>
      <a class="btn ghost" href="${link("practice", { c: slug })}">Practise all ${ids.length}</a>
      ${m.mistakes ? `<a class="btn warn" href="${link("practice", { c: slug, s: "mistakes" })}">Fix ${plural(m.mistakes, "mistake")}</a>` : ""}
      ${nNew ? `<a class="btn ghost" href="${link("practice", { c: slug, s: "new" })}">Only unseen · ${nNew}</a>` : ""}
      ${nFlag ? `<a class="btn ghost" href="${link("practice", { c: slug, s: "flagged" })}">Flagged · ${nFlag}</a>` : ""}
      ${nOff ? `<a class="btn ghost" href="${link("practice", { c: slug, s: "official" })}">From the course deck · ${nOff}</a>` : ""}
      <a class="btn ghost" href="${link("cards", { c: slug })}">Flashcards</a>
    </div>
    ${(() => { const w = H.adapt.weakSpots(slug, 3); return w.length ? `<div class="weakline"><b>Weak spots:</b> ${w.map(t =>
      `<a href="${link("practice", { c: slug, t: t.topic })}">${esc(t.topic)} <span>${pctOf(t)}%</span></a>`).join("")}</div>` : ""; })()}
    <div class="topiclist">${C.units.map(u => {
      const ts = C.topics.filter(t => t.unit === u.id);
      if (!ts.length) return "";
      return `<div class="unit"><div class="unithead"><h3>${u.title}</h3><a href="${link("c/" + slug, { tab: "notes", u: u.id })}">Notes →</a></div>
        ${ts.map(t => {
          const tid = C.questions.filter(q => q.topic === t.name).map(q => q.id), tm = store.mastery(tid);
          const ts = H.adapt.topicStats(slug, t.name);
          return `<div class="trow">
            <span class="tname">${esc(t.name)} ${ts.label !== "new" ? lbl(ts) : ""}<em>${tid.length} Q${tm.mistakes ? ` · <b>${tm.mistakes} to fix</b>` : tm.seen ? ` · ${tm.seen} answered` : ""}</em></span>
            ${bar(tm.pct, tm.mistakes ? "warn" : "")}<span class="pct">${tm.seen ? tm.pct + "%" : "—"}</span>
            <a class="btn ghost sm" href="${link("practice", { c: slug, t: t.name })}">Practise</a>
          </div>`;
        }).join("")}</div>`;
    }).join("")}</div>
  </section>`;
}

function courseNotes(C, pane, focus) {
  const b = C.briefs.q1 || {};
  pane.innerHTML = `
    <div class="unitjump">${C.units.map(u => `<a href="#u-${u.id}" data-u="${u.id}">${stripTags(u.title)}</a>`).join("")}</div>
    ${C.units.map(u => `<section id="u-${u.id}">
      <div class="sechead"><h2>${u.title}</h2><span class="tag">${esc(u.tag)}</span></div>
      <p class="lede">${u.lede}</p>
      ${u.topics.map((it, i) => `<details class="topic"${i === 0 || u.id === focus ? " open" : ""}><summary>${esc(stripTags(it.t))}<span class="src">${esc(it.src)}</span></summary><div class="tbody">${it.h}</div></details>`).join("")}
      <div class="practise-unit"><a class="btn ghost sm" href="${link("practice", { c: C.slug, u: u.id })}">Practise this unit · ${C.questions.filter(q => C.unitOf[q.topic] === u.id).length} Q</a></div>
    </section>`).join("")}
    <section><div class="sechead"><h2>Lectures</h2><span class="tag">${C.lectures.length} so far</span></div>
      <div class="card">${C.lectures.map(([n, t, s, k]) => `<div class="lec"><span class="n">${String(n).padStart(2, "0")}</span><span class="t">${esc(t)}<em>${esc(s)}</em></span><span class="w ${k}">${k === "live" ? "live" : "rec"}</span></div>`).join("")}</div>
      <p class="srcnote">${C.sources}</p>
    </section>`;
  $$(".unitjump a", pane).forEach(a => a.addEventListener("click", e => {
    e.preventDefault();
    const t = document.getElementById("u-" + a.dataset.u);
    if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  if (focus) { const t = document.getElementById("u-" + focus); if (t) setTimeout(() => t.scrollIntoView({ block: "start" }), 0); }
}

function courseExams(slug, pane) {
  const C = H.courses[slug], R = META[slug], g = R.grading;
  pane.innerHTML = `<section>
    <div class="sechead"><h2>How this course is graded</h2></div>
    <div class="gradebar">
      <span style="flex:${g.quizPct * g.bestOf}" class="q">Quizzes ${g.quizPct * g.bestOf}%<small>best ${g.bestOf} of ${g.quizzes} × ${g.quizPct}%</small></span>
      ${g.participationPct ? `<span style="flex:${g.participationPct}" class="p">${g.participationPct}%<small>participation</small></span>` : ""}
      <span style="flex:${g.finalPct}" class="f">End-term ${g.finalPct}%<small>${esc(g.finalNote || "major exam")}</small></span>
    </div>
    <p class="lede" style="margin-top:12px">A missed quiz counts as a zero, so it uses up your one dropped score. Marking on every quiz: ${esc(M.note)}.</p>
  </section>
  ${R.assessments.map(a => {
    const u = until(a), b = C.briefs[a.id], mocks = store.mocks(slug, a.id);
    return `<section>
      <div class="sechead"><h2>${esc(a.name)}</h2><span class="tag">${a.status === "tba" ? "date TBA" : u.state === "past" ? "done" : u.text}</span></div>
      ${a.status === "tba" ? `<p class="lede">Not announced yet. When the official LMS announcement goes up, its date, length, question count and syllabus will be added here and the mock paper will follow them.</p>
        <div class="actions"><a class="btn ghost" href="${link("mock", { c: slug, a: a.id })}">Sit a practice paper on everything so far</a></div>` : `
      <dl class="strip">
        <div class="cell"><dt>Date</dt><dd>${fmtDate(a.start)}<small>${fmtTime(a.start)} IST · join from ${fmtTime(a.join)}</small></dd></div>
        <div class="cell"><dt>Paper</dt><dd>${a.questions} Q<small>${esc(a.types)} · ${a.marks} marks</small></dd></div>
        <div class="cell"><dt>Time</dt><dd>${a.durationMin} min<small>${secsPerQ(a)} sec a question</small></dd></div>
        <div class="cell"><dt>Syllabus</dt><dd>${esc(b && b.scopeShort || "—")}<small>${esc(a.scopeText)}</small></dd></div>
      </dl>
      <div class="actions" style="margin-top:16px"><a class="btn" href="${link("mock", { c: slug, a: a.id })}">Sit a mock · ${a.questions} Q in ${a.durationMin} min</a></div>
      ${mocks.length ? `<div class="mockhist"><h4>Your mock papers</h4>${mocks.slice(-5).reverse().map(mk => `<div><span>${fmtDay(mk.at)}</span><b>${mk.score} / ${mk.max}</b><span>${mk.right} right · ${mk.wrong} wrong · ${mk.blank} blank${mk.lean ? " · weak-topic paper" : ""}</span></div>`).join("")}</div>` : ""}
      ${b ? `<details class="topic brief"><summary>The ${esc(a.name)} brief<span class="src">${esc(b.tag)}</span></summary><div class="tbody"><p class="lede">${b.lede}</p>${b.html}
        ${b.weights ? `<h4>Where the marks probably sat</h4><p style="font-size:13.5px;color:var(--ink-3)">Estimated from lecture time, not official.</p>${(() => { const mx = Math.max(...b.weights.map(w => w[1])); return b.weights.map(([l, v]) => `<div class="wbar"><span class="lab">${esc(l)}</span><span class="track"><span class="fill" style="width:${v * 100 / mx}%"></span></span><span class="num">~${v}%</span></div>`).join(""); })()}` : ""}
      </div></details>` : ""}`}
    </section>`;
  }).join("")}`;
}

/* =================================================================
   PRACTICE — one question at a time, answer revealed immediately
   ================================================================= */
function describe(p) {
  const bits = [];
  if (p.c) bits.push(META[p.c].name); else bits.push("All courses");
  if (p.u) bits.push(unitTitle(p.c, p.u));
  if (p.t) bits.push(p.t);
  if (p.s) bits.push({ mistakes: "your mistakes", new: "unseen only", flagged: "flagged", right: "already right", official: "from the course deck" }[p.s] || p.s);
  if (p.q) bits.push(`“${p.q}”`);
  if (p.mode === "smart") bits.unshift("Smart session");
  return bits.join(" · ");
}

function practiceView(p) {
  const smart = p.mode === "smart";
  const source = () => smart ? H.adapt.smartPick({ c: p.c, n: +p.n || 20 }) : { qs: select(p) };
  let pick = source();
  let pool0 = pick.qs;
  const slug = p.c || null;
  const pace = slug ? secsPerQ(lastTimed(slug)) : 20;
  let pool = [], idx = 0, right = 0, answered = 0, pacer = false, timer = null, left = pace, missed = {}, missedIds = [];

  app.innerHTML = `
  <header class="mast slim">
    ${slug ? crumbs(["#/c/" + slug, META[slug].name]) : crumbs(["#/bank", "Bank"])}
    <div class="eyebrow">Practice</div>
    <h1>${esc(describe(p))}</h1>
    ${smart && pick.qs.length ? `<p class="sub" id="mix">Picked for you: ${esc(H.adapt.describeMix(pick.mix))}.</p>` : ""}
  </header>
  <section class="tight">
    ${pool0.length ? `<div class="drillbar">
      <button class="btn ghost" id="pacer" aria-pressed="false">Pacer: off</button>
      <button class="btn ghost" id="restart">${smart ? "New session" : "Shuffle &amp; restart"}</button>
      <span class="score" id="score">0 / 0</span>
    </div>
    <div class="card" id="qcard"></div>
    <p class="hint">Keys: <kbd>1</kbd>–<kbd>4</kbd> to answer, <kbd>Enter</kbd> for next, <kbd>F</kbd> to flag.</p>`
    : `<div class="empty"><b>Nothing to practise here.</b> ${p.s === "mistakes" ? "You have no open mistakes in this set. Good." : "No questions match this filter."}
       <div class="actions" style="margin-top:12px"><a class="btn ghost" href="${slug ? "#/c/" + slug : "#/"}">Back</a></div></div>`}
  </section>`;
  if (!pool0.length) return;

  const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
  cleanup = () => { stop(); document.removeEventListener("keydown", onKey); };

  let built = false;
  function build() {
    if (smart && built) { pick = source(); pool0 = pick.qs; const m = $("#mix"); if (m) m.textContent = `Picked for you: ${H.adapt.describeMix(pick.mix)}.`; }
    built = true;
    pool = shuffle(pool0.slice()); idx = 0; right = 0; answered = 0; missed = {}; missedIds = []; render(); }
  function paintClock() { const c = $("#clock"); if (!c) return; c.textContent = left + "s"; c.classList.toggle("low", left <= Math.ceil(pace / 4)); }
  function startTimer() {
    stop(); if (!pacer) return;
    left = pace; paintClock();
    timer = setInterval(() => { left--; paintClock(); if (left <= 0) { stop(); reveal(pool[idx], [], true); } }, 1000);
  }
  let state = "q", picked = new Set(), order = [];
  function render() {
    stop();
    if (idx >= pool.length) return done();
    const q = pool[idx]; state = "q"; picked = new Set(); order = optionOrder(q);
    $("#qcard").innerHTML = `
      <div class="qmeta">
        <span class="qnum">Q${idx + 1} / ${pool.length}</span>
        ${p.c ? "" : `<span class="qtopic">${esc(META[q.course].short)}</span>`}
        <span class="qtopic${q.o ? " official" : ""}">${q.o ? "from deck" : esc(q.topic)}</span>
        ${q.multi ? '<span class="qtopic">select all that apply</span>' : ""}
        ${store.isMistake(q.id) ? '<span class="qtopic bad">mistake</span>' : ""}
        <button class="flag${store.flagged(q.id) ? " on" : ""}" id="flag" title="Flag for later (F)" aria-pressed="${store.flagged(q.id)}">⚑</button>
        ${pacer ? `<span class="clock" id="clock">${pace}s</span>` : ""}
      </div>
      <p class="qtext">${esc(q.q)}</p>
      <div class="opts">${order.map((i, pos) => `<button class="opt" data-i="${i}"><span class="k">${"ABCDEF"[pos]}</span><span>${esc(q.c[i])}</span></button>`).join("")}</div>
      ${q.multi ? '<div style="margin-top:10px"><button class="btn ghost" id="submulti">Submit answer</button></div>' : ""}
      <div id="after"></div>`;
    $("#score").textContent = `${right} / ${answered}`;
    $$(".opt").forEach(b => b.addEventListener("click", () => choose(+b.dataset.i)));
    const sm = $("#submulti"); if (sm) sm.addEventListener("click", () => reveal(q, [...picked], false));
    $("#flag").addEventListener("click", flag);
    startTimer();
  }
  function choose(i) {
    const q = pool[idx]; if (state !== "q" || i >= q.c.length) return;
    if (!q.multi) return reveal(q, [i], false);
    const b = $(`.opt[data-i="${i}"]`);
    if (picked.has(i)) { picked.delete(i); b.classList.remove("picked"); } else { picked.add(i); b.classList.add("picked"); }
  }
  function flag() { const q = pool[idx]; const on = store.toggleFlag(q.id); const f = $("#flag"); if (f) { f.classList.toggle("on", on); f.setAttribute("aria-pressed", on); } }
  function reveal(q, chosen, timedOut) {
    stop(); state = "a";
    const ok = chosen.length === q.a.length && chosen.every(i => q.a.includes(i));
    answered++; if (ok) right++; else { missed[q.topic] = (missed[q.topic] || 0) + 1; missedIds.push(q.id); }
    store.record(q.id, ok, "practice");
    $$(".opt").forEach(b => {
      const i = +b.dataset.i; b.disabled = true; b.classList.remove("picked");
      if (q.a.includes(i)) b.classList.add("right"); else if (chosen.includes(i)) b.classList.add("wrong");
    });
    const sm = $("#submulti"); if (sm) sm.remove();
    const still = store.isMistake(q.id);
    $("#after").innerHTML = `<div class="why"><b>${timedOut ? "Out of time." : ok ? "Correct." : "Not quite."}</b> ${esc(q.w)}</div>
      ${ok && still ? `<p class="hint" style="margin-top:8px">One more correct answer on a later run clears this from your mistakes.</p>` : ""}
      <div style="margin-top:14px"><button class="btn" id="next">${idx + 1 >= pool.length ? "See results" : "Next question"}</button></div>`;
    $("#score").textContent = `${right} / ${answered}`;
    const n = $("#next"); n.addEventListener("click", () => { idx++; render(); }); n.focus();
  }
  function done() {
    const pct = answered ? Math.round(right * 100 / answered) : 0;
    const weak = Object.entries(missed).sort((a, b) => b[1] - a[1]);
    $("#qcard").innerHTML = `<div class="donecard">
      <div class="big">${right} / ${answered}</div>
      <p>${pct}%: ${pct >= 85 ? "solid on this set." : pct >= 65 ? "getting there. Tighten the weak topics below." : "read the notes for the topics below, then run it again."}</p>
      ${weak.length ? `<div class="weak"><h4>Missed by topic</h4>${weak.map(([t, n]) => {
        const c = pool.find(q => q.topic === t).course, u = H.courses[c].unitOf[t];
        return `<div><span>${esc(t)}</span><span><a href="${link("c/" + c, { tab: "notes", u })}">notes</a> · <b>${n}</b></span></div>`; }).join("")}</div>` : ""}
      <div class="actions center" style="margin-top:20px">
        ${missedIds.length ? `<a class="btn warn" href="${link("practice", Object.assign({}, p, { s: "mistakes" }))}">Retry what I missed</a>` : ""}
        <button class="btn ghost" id="again">Run it again</button></div>
    </div>`;
    $("#again").addEventListener("click", build);
  }
  function onKey(e) {
    if (e.target.closest("input,textarea,select") || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    const pos = k.length === 1 ? "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k) : -1;
    if (state === "q" && pos >= 0 && pos < order.length) { e.preventDefault(); choose(order[pos]); }
    else if (k === "f") flag();
    else if (k === "enter" && state === "q" && pool[idx] && pool[idx].multi) { e.preventDefault(); reveal(pool[idx], [...picked], false); }
  }
  document.addEventListener("keydown", onKey);

  $("#restart").addEventListener("click", build);
  $("#pacer").addEventListener("click", () => {
    pacer = !pacer;
    const b = $("#pacer"); b.textContent = "Pacer: " + (pacer ? `on · ${pace}s` : "off"); b.setAttribute("aria-pressed", String(pacer));
    if (state === "q") render();
  });
  build();
}

/* =================================================================
   MOCK — a real-length paper, timed as a whole, marked at the end
   ================================================================= */
function mockView(p) {
  const slug = p.c, C = H.courses[slug];
  if (!C) { location.hash = "#/"; return; }
  const R = META[slug];
  const a = R.assessments.find(x => x.id === p.a) || lastTimed(slug);
  const ref = a.durationMin ? a : lastTimed(slug);         // a TBA quiz borrows the last known format
  const N = Math.min(ref.questions, C.questions.length), secs = ref.durationMin * 60;

  app.innerHTML = `
  <header class="mast slim">
    ${crumbs([link("c/" + slug, { tab: "exams" }), R.name])}
    <div class="eyebrow">Mock paper · ${esc(a.name)}${a.status === "tba" ? " (format assumed from " + esc(ref.name) + ")" : ""}</div>
    <h1>${N} questions · ${ref.durationMin} minutes</h1>
    <p class="sub">Drawn at random from the ${C.questions.length}-question bank. Marked like the real thing, ${esc(M.note)}.
      You won't see any answers until you submit.</p>
  </header>
  <section class="tight" id="mock">
    <div class="empty"><b>Ready when you are.</b> The clock starts when you press Start and runs for the whole paper, at about
      ${Math.round(secs / N)} seconds a question. Leaving a question blank costs nothing; a wrong answer costs a quarter mark.
      ${H.adapt.hasHistory(slug) ? `<label class="toggle" style="margin:14px 0 0;display:flex"><input type="checkbox" id="lean"> Lean the paper toward my weak topics and open mistakes</label>` : ""}
      <div class="actions" style="margin-top:14px"><button class="btn" id="start">Start the paper</button></div></div>
  </section>`;

  let paper, picks, orders, cur = 0, left = secs, timer = null, t0 = 0, finished = false;
  const opened = new Set();               // a blank only counts as a miss if you actually read the question
  const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
  const guard = e => { if (!finished) { e.preventDefault(); e.returnValue = ""; } };
  cleanup = () => { stop(); window.removeEventListener("beforeunload", guard); document.removeEventListener("keydown", onKey); };

  let lean = false;
  $("#start").addEventListener("click", () => {
    lean = !!($("#lean") && $("#lean").checked);
    paper = shuffle(lean ? H.adapt.weightedPaper(slug, N) : C.questions.slice()).slice(0, N);
    picks = paper.map(() => new Set());
    orders = paper.map(optionOrder);
    t0 = Date.now(); left = secs;
    window.addEventListener("beforeunload", guard);
    document.addEventListener("keydown", onKey);
    $("#mock").innerHTML = `<div class="mockbar"><span class="clock big" id="mclock"></span><span class="score" id="mcount"></span>
      <button class="btn" id="submit">Submit paper</button></div>
      <div class="mockgrid" id="grid"></div><div class="card" id="mq"></div>`;
    $("#submit").addEventListener("click", () => {
      const blanks = picks.filter(s => !s.size).length;
      if (blanks && !confirm(`${plural(blanks, "question")} still blank. Submit anyway?`)) return;
      finish();
    });
    timer = setInterval(tick, 1000); tick();
    show(0);
  });
  function tick() {
    left = Math.max(0, secs - Math.floor((Date.now() - t0) / 1000));
    const c = $("#mclock"); if (!c) return;
    c.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`;
    c.classList.toggle("low", left <= 60);
    if (left <= 0) finish();
  }
  function paintGrid() {
    $("#grid").innerHTML = paper.map((q, i) => `<button data-i="${i}" class="${picks[i].size ? "done" : ""}${i === cur ? " cur" : ""}">${i + 1}</button>`).join("");
    $$("#grid button").forEach(b => b.addEventListener("click", () => show(+b.dataset.i)));
    $("#mcount").textContent = `${picks.filter(s => s.size).length} / ${N} answered`;
  }
  function show(i) {
    cur = i; opened.add(i); const q = paper[i];
    $("#mq").innerHTML = `<div class="qmeta"><span class="qnum">Q${i + 1} / ${N}</span>${q.multi ? '<span class="qtopic">select all that apply</span>' : ""}</div>
      <p class="qtext">${esc(q.q)}</p>
      <div class="opts">${orders[i].map((k, pos) => `<button class="opt${picks[i].has(k) ? " picked" : ""}" data-k="${k}"><span class="k">${"ABCDEF"[pos]}</span><span>${esc(q.c[k])}</span></button>`).join("")}</div>
      <div class="actions" style="margin-top:14px">
        <button class="btn ghost" id="prev"${i === 0 ? " disabled" : ""}>← Previous</button>
        <button class="btn ghost" id="clear"${picks[i].size ? "" : " disabled"}>Clear answer</button>
        <button class="btn" id="nxt">${i + 1 < N ? "Next →" : "Review grid"}</button></div>`;
    $$("#mq .opt").forEach(b => b.addEventListener("click", () => pick(+b.dataset.k)));
    $("#prev").addEventListener("click", () => show(cur - 1));
    $("#clear").addEventListener("click", () => { picks[cur].clear(); show(cur); });
    $("#nxt").addEventListener("click", () => cur + 1 < N ? show(cur + 1) : $("#grid").scrollIntoView({ behavior: "smooth" }));
    paintGrid();
  }
  function pick(k) {
    const q = paper[cur];
    if (k >= q.c.length) return;
    if (q.multi) { picks[cur].has(k) ? picks[cur].delete(k) : picks[cur].add(k); }
    else { picks[cur].clear(); picks[cur].add(k); }
    show(cur);
  }
  function onKey(e) {
    if (finished || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if ("1234".includes(k) && k.length === 1 && +k <= orders[cur].length) { e.preventDefault(); pick(orders[cur][+k - 1]); }
    else if (k === "arrowright" && cur + 1 < N) show(cur + 1);
    else if (k === "arrowleft" && cur > 0) show(cur - 1);
  }
  function finish() {
    if (finished) return; finished = true; cleanup();
    let r = 0, w = 0, b = 0;
    const res = paper.map((q, i) => {
      const ch = [...picks[i]];
      if (!ch.length) { b++; if (opened.has(i)) store.record(q.id, false, "mock"); return "blank"; }
      const ok = ch.length === q.a.length && ch.every(x => q.a.includes(x));
      ok ? r++ : w++; store.record(q.id, ok, "mock");
      return ok ? "right" : "wrong";
    });
    const score = r * M.correct + w * M.incorrect;
    const used = Math.min(secs, Math.round((Date.now() - t0) / 1000));
    store.addMock({ c: slug, a: a.id, at: Date.now(), lean, n: N, right: r, wrong: w, blank: b, score, max: N, secs: used,
      ids: paper.map(q => q.id), picks: picks.map(s => [...s]) });
    const byTopic = {};
    paper.forEach((q, i) => { if (res[i] !== "right") byTopic[q.topic] = (byTopic[q.topic] || 0) + 1; });
    const weak = Object.entries(byTopic).sort((x, y) => y[1] - x[1]);
    $("#mock").innerHTML = `
      <div class="card donecard">
        <div class="big">${score} <small>/ ${N}</small></div>
        <p>${Math.round(score * 100 / N)}% · ${r} right, ${w} wrong (−${w * 0.25}), ${b} blank · ${Math.floor(used / 60)}m ${used % 60}s used</p>
        ${a.status !== "tba" && R.grading.quizPct ? `<p class="hint">As a real ${esc(a.name)} that would be worth <b>${(score / N * R.grading.quizPct).toFixed(2)}</b> of ${R.grading.quizPct} course points.</p>` : ""}
      </div>
      <h3 class="subhead">Every question, at a glance</h3>
      <div class="mockgrid result" id="rgrid">${paper.map((q, i) => `<button data-i="${i}" class="${res[i]}">${i + 1}</button>`).join("")}</div>
      <p class="hint"><span class="key right"></span> right <span class="key wrong"></span> wrong <span class="key blank"></span> blank</p>
      ${weak.length ? `<div class="weak left"><h4>Lost marks by topic</h4>${weak.map(([t, n]) => `<div><span>${esc(t)}</span><span><a href="${link("practice", { c: slug, t })}">practise</a> · <a href="${link("c/" + slug, { tab: "notes", u: C.unitOf[t] })}">notes</a> · <b>${n}</b></span></div>`).join("")}</div>` : ""}
      <div class="actions" style="margin:18px 0">
        ${w + b ? `<a class="btn warn" href="${link("practice", { c: slug, s: "mistakes" })}">Drill my ${esc(R.short)} mistakes</a>` : ""}
        <a class="btn ghost" href="${link("mock", { c: slug, a: a.id })}">New paper</a>
        <label class="toggle"><input type="checkbox" id="onlywrong" checked> Show only wrong &amp; blank</label></div>
      <div id="review">${paper.map((q, i) => `<div class="card rv ${res[i]}" id="mq-${i}">
        <div class="qmeta"><span class="qnum">Q${i + 1}</span><span class="qtopic">${esc(q.topic)}</span><span class="qtopic ${res[i] === "right" ? "good" : "bad"}">${res[i]}</span></div>
        <p class="qtext">${esc(q.q)}</p>
        <div class="opts">${orders[i].map((k, pos) => `<div class="opt${q.a.includes(k) ? " right" : picks[i].has(k) ? " wrong" : ""}"><span class="k">${"ABCDEF"[pos]}</span><span>${esc(q.c[k])}</span></div>`).join("")}</div>
        <div class="why">${esc(q.w)}</div></div>`).join("")}</div>`;
    const filt = () => $$("#review .rv.right").forEach(el => { el.hidden = $("#onlywrong").checked; });
    $("#onlywrong").addEventListener("change", filt); filt();
    $$("#rgrid button").forEach(bt => bt.addEventListener("click", () => {
      const el = document.getElementById("mq-" + bt.dataset.i);
      el.hidden = false;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    paintTopnav("mock");
  }
}

/* =================================================================
   FLASHCARDS — traps and definitions, spaced repetition
   ================================================================= */
function cardsView(p) {
  const slug = p.c || "";
  const NEW_PER_SESSION = 15;
  const scope = CARDS.filter(c => !slug || c.course === slug);
  const due = shuffle(scope.filter(c => store.isDue(c.id)));
  const fresh = scope.filter(c => !store.card(c.id));
  let queue = due.concat(fresh.slice(0, NEW_PER_SESSION)), done = 0, again = 0;

  app.innerHTML = `
  <header class="mast slim">
    ${slug ? crumbs(["#/c/" + slug, META[slug].name]) : crumbs()}
    <div class="eyebrow">Flashcards · active recall</div>
    <h1>${slug ? esc(META[slug].name) : "All courses"}</h1>
    <div class="drillbar" style="margin-top:14px">
      <select id="deck" aria-label="Course">${["", ...SLUGS].map(s => `<option value="${s}"${s === slug ? " selected" : ""}>${s ? esc(META[s].name) : "All courses"} · ${CARDS.filter(c => !s || c.course === s).length} cards</option>`).join("")}</select>
      <span class="score" id="cstat"></span>
    </div>
  </header>
  <section class="tight"><div id="cardbox"></div>
    <p class="hint">Try to say the answer out loud before you flip the card. Rate yourself honestly, because the rating decides when you see it again.
      Keys: <kbd>Space</kbd> to flip, <kbd>1</kbd> Again · <kbd>2</kbd> Hard · <kbd>3</kbd> Good · <kbd>4</kbd> Easy.</p></section>`;
  $("#deck").addEventListener("change", e => { location.hash = link("cards", { c: e.target.value }); });

  let flipped = false;
  function stat() { $("#cstat").textContent = `${done} reviewed · ${queue.length} left${again ? ` · ${again} to repeat` : ""}`; }
  function render() {
    stat(); flipped = false;
    const box = $("#cardbox");
    if (!queue.length) {
      const nextDue = scope.map(c => store.card(c.id)).filter(Boolean).map(c => c.due).filter(d => d > Date.now()).sort((a, b) => a - b)[0];
      box.innerHTML = `<div class="empty"><b>${done ? "Session done." : "Nothing due right now."}</b>
        ${done ? `You reviewed ${plural(done, "card")}.` : ""} ${nextDue ? `The next card is due ${new Date(nextDue).toLocaleString("en-GB", Object.assign({ weekday: "short", hour: "numeric", minute: "2-digit" }, IST))}.` : ""}
        ${scope.filter(c => !store.card(c.id)).length ? `<div class="actions" style="margin-top:12px"><button class="btn" id="more">Learn ${Math.min(NEW_PER_SESSION, scope.filter(c => !store.card(c.id)).length)} new cards</button></div>` : ""}</div>`;
      const m = $("#more"); if (m) m.addEventListener("click", () => { queue = shuffle(scope.filter(c => !store.card(c.id))).slice(0, NEW_PER_SESSION); render(); });
      return;
    }
    const c = queue[0], isNew = !store.card(c.id);
    const front = c.kind === "trap"
      ? `<div class="ckind">Trap · ${esc(META[c.course].short)}</div><div class="cfront">${esc(c.t.h)}</div><div class="cprompt">Why is this a trap? Say the reason in a sentence before you flip.</div>`
      : `<div class="ckind">Definition · ${esc(META[c.course].short)} · ${esc(unitTitle(c.course, c.d.unit))}</div><div class="cfront">${esc(c.d.topic)}</div><div class="cprompt">State the key definition${c.d.term && c.d.term !== c.d.topic ? `: <b>${esc(c.d.term)}</b>` : ""}</div>`;
    const back = c.kind === "trap"
      ? `<p>${esc(c.t.p)}</p><div class="fix">→ ${esc(c.t.f)}</div>`
      : `<div class="def">${c.d.html}</div><p class="hint"><a href="${link("c/" + c.course, { tab: "notes", u: c.d.unit })}">Open the notes</a></p>`;
    box.innerHTML = `<div class="fcard${isNew ? " new" : ""}">${isNew ? '<span class="newtag">new</span>' : ""}${front}
      <div class="cback" hidden>${back}</div>
      <div class="actions center" id="cact"><button class="btn" id="flip">Show answer</button></div></div>`;
    $("#flip").addEventListener("click", flip);
  }
  function flip() {
    if (flipped || !queue.length) return; flipped = true;
    const c = queue[0];
    $(".cback").hidden = false;
    $("#cact").innerHTML = ["Again", "Hard", "Good", "Easy"].map((l, g) =>
      `<button class="btn ${g === 0 ? "warn" : g === 2 ? "" : "ghost"} grade" data-g="${g}">${l}<small>${ivlText(store.preview(c.id, g))}</small></button>`).join("");
    $$(".grade").forEach(b => b.addEventListener("click", () => rate(+b.dataset.g)));
  }
  function rate(g) {
    if (!flipped) return;
    const c = queue.shift();
    store.review(c.id, g); done++;
    if (g === 0) { queue.splice(Math.min(queue.length, 4), 0, c); again++; }
    render(); paintTopnav("cards");
  }
  function onKey(e) {
    if (e.target.closest("input,textarea,select") || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === " " || e.key === "Enter") { if (!flipped) { e.preventDefault(); flip(); } }
    else if (flipped && "1234".includes(e.key) && e.key.length === 1) rate(+e.key - 1);
  }
  document.addEventListener("keydown", onKey);
  cleanup = () => document.removeEventListener("keydown", onKey);
  render();
}

/* =================================================================
   QUESTION BANK — every question in every course
   ================================================================= */
function bankView(p) {
  const PAGE = 40;
  app.innerHTML = `
  <header class="mast slim">
    ${crumbs()}
    <div class="eyebrow">Master question bank</div>
    <h1>${QS.length.toLocaleString("en-IN")} questions, ${SLUGS.length} courses</h1>
    <div class="filters">
      <input id="fq" type="search" placeholder="Search questions, options, explanations" value="${esc(p.q || "")}" aria-label="Search">
      <select id="fc" aria-label="Course"><option value="">All courses</option>${SLUGS.map(s => `<option value="${s}"${s === p.c ? " selected" : ""}>${esc(META[s].name)}</option>`).join("")}</select>
      <select id="ft" aria-label="Topic"></select>
      <select id="fs" aria-label="Status">${[["", "Any status"], ["new", "Unseen"], ["mistakes", "My mistakes"], ["right", "Right last time"], ["flagged", "Flagged"], ["official", "From a course deck"]].map(([v, l]) => `<option value="${v}"${v === (p.s || "") ? " selected" : ""}>${l}</option>`).join("")}</select>
    </div>
  </header>
  <section class="tight"><div class="drillbar"><span id="count" class="score" style="margin-left:0"></span><a class="btn" id="go">Practise these</a></div><div id="list"></div></section>`;

  let shown = PAGE;
  function topics() {
    const c = $("#fc").value;
    const ts = c ? H.courses[c].topics.map(t => t.name) : [];
    $("#ft").innerHTML = `<option value="">${c ? "All topics" : "Pick a course for topics"}</option>` + ts.map(t => `<option${t === p.t ? " selected" : ""}>${esc(t)}</option>`).join("");
    $("#ft").disabled = !c;
  }
  function params() { return { c: $("#fc").value, t: $("#fc").value ? $("#ft").value : "", s: $("#fs").value, q: $("#fq").value.trim() }; }
  function paint() {
    const f = params(), rows = select(f);
    history.replaceState(null, "", link("bank", f));
    $("#count").textContent = `${rows.length} match${rows.length === 1 ? "" : "es"}`;
    const go = $("#go"); go.href = link("practice", f); go.classList.toggle("disabledlink", !rows.length);
    $("#list").innerHTML = rows.slice(0, shown).map(q => {
      const st = store.status(q.id);
      return `<details class="qrow ${st}"><summary><span class="qid">${q.id}</span><span class="qtopic">${esc(META[q.course].short)} · ${esc(q.topic)}</span>${st !== "new" ? `<span class="st ${st}">${st === "mistake" ? "mistake" : st}</span>` : ""}${store.flagged(q.id) ? '<span class="st flag">⚑</span>' : ""}<span class="qq">${esc(q.q)}</span></summary>
        <div class="qans"><ul>${q.c.map((c, i) => `<li class="${q.a.includes(i) ? "right" : ""}">${esc(c)}</li>`).join("")}</ul><div class="why">${esc(q.w)}</div></div></details>`;
    }).join("") + (rows.length > shown ? `<div class="actions center" style="margin-top:14px"><button class="btn ghost" id="more">Show ${Math.min(PAGE, rows.length - shown)} more</button></div>` : "")
      + (!rows.length ? `<div class="empty">No questions match.</div>` : "");
    const m = $("#more"); if (m) m.addEventListener("click", () => { shown += PAGE; paint(); });
  }
  let deb;
  $("#fq").addEventListener("input", () => { clearTimeout(deb); deb = setTimeout(() => { shown = PAGE; paint(); }, 150); });
  $("#fc").addEventListener("change", () => { p.t = ""; topics(); shown = PAGE; paint(); });
  $("#ft").addEventListener("change", () => { shown = PAGE; paint(); });
  $("#fs").addEventListener("change", () => { shown = PAGE; paint(); });
  topics(); paint();
}

/* =================================================================
   MISTAKES
   ================================================================= */
function mistakesView() {
  const mis = allMistakes();
  const groups = {};
  mis.forEach(q => { ((groups[q.course] = groups[q.course] || {})[q.topic] = (groups[q.course][q.topic] || [])).push(q); });
  app.innerHTML = `
  <header class="mast slim">
    ${crumbs()}
    <div class="eyebrow">Mistake revision</div>
    <h1>${mis.length ? plural(mis.length, "question") + " to fix" : "No open mistakes"}</h1>
    <p class="sub">Every question you get wrong in practice or in a mock lands here, and so does a mock question you read but left blank. It stays until you answer it correctly
      <b>twice in a row</b>, so a lucky guess doesn't clear it. Topics where mistakes pile up link straight to their notes.</p>
    ${mis.length ? `<div class="actions" style="margin-top:16px"><a class="btn warn" href="${link("practice", { s: "mistakes" })}">Drill all ${mis.length}</a></div>` : ""}
  </header>
  ${mis.length ? Object.entries(groups).map(([slug, tps]) => {
    const n = Object.values(tps).reduce((s, a) => s + a.length, 0);
    return `<section class="tight">
      <div class="sechead"><h2>${esc(META[slug].name)}</h2><span class="tag">${n} to fix</span>
        <a class="btn warn sm" style="margin-left:auto" href="${link("practice", { c: slug, s: "mistakes" })}">Drill these ${n}</a></div>
      ${Object.entries(tps).sort((a, b) => b[1].length - a[1].length).map(([t, qs]) => `<div class="trow">
        <span class="tname">${esc(t)}<em>${qs.length} of ${H.courses[slug].questions.filter(q => q.topic === t).length} questions in this topic</em></span>
        <a class="btn ghost sm" href="${link("c/" + slug, { tab: "notes", u: H.courses[slug].unitOf[t] })}">Notes</a>
        <a class="btn warn sm" href="${link("practice", { c: slug, t, s: "mistakes" })}">Drill ${qs.length}</a></div>`).join("")}
    </section>`;
  }).join("") : `<section class="tight"><div class="empty">${store.answeredCount() ? "Everything you've missed so far has been cleared. Good work." : "Nothing here yet. Start with a topic drill or a mock paper, and any question you miss will collect here."}
    <div class="actions" style="margin-top:12px"><a class="btn" href="#/">Pick a course</a></div></div></section>`}
  ${footer()}`;
}

/* =================================================================
   MY DATA / ACCOUNT
   ================================================================= */
function dataView() {
  const reset = `<div class="card" style="margin-top:14px"><h3 class="subhead" style="margin-top:0">Start over</h3>
      <p class="hint">${CL.user ? "Deletes all your progress, in this browser and in your account." : "Deletes all progress in this browser."} This can't be undone.</p>
      <div class="actions" style="margin-top:10px"><button class="btn warn" id="rst">Reset everything</button></div></div>`;
  const storageWarn = store.persists ? "" : `<div class="empty warnbox"><b>Saving isn't working in this browser</b> (private mode, or storage is blocked). Progress lasts only until you close the tab.</div>`;

  if (!CL.available) {
    app.innerHTML = `<header class="mast slim">${crumbs()}<div class="eyebrow">My data</div><h1>Your progress lives in this browser</h1>
      <p class="sub">This copy of the hub works offline, so there is no sign-in. Your attempts, mistakes, flags, flashcard schedule and mock scores
        are saved in this browser and nowhere else, and <strong>clearing your browser data deletes them for good</strong>.</p></header>
      <section class="tight">${storageWarn}${reset}<p class="hint" id="msg" style="margin-top:14px"></p></section>${footer()}`;
  } else if (!CL.user) {
    app.innerHTML = `<header class="mast slim">${crumbs()}<div class="eyebrow">Account</div><h1>You're using the hub as a guest</h1>
      <p class="sub">Guest progress is saved in this browser only. It doesn't follow you to your phone, and <strong>clearing your browser data deletes it
        for good</strong>. Sign in to keep it safe in your account, on every device.</p></header>
      <section class="tight">${storageWarn}
        <div class="card signcard">
          <h3 class="subhead" style="margin-top:0">Sign in with your IITJ Google account</h3>
          <p class="hint">Only <b>@iitj.ac.in</b> accounts can sign in. Anything you've done as a guest moves into your account the first time you sign in.</p>
          <div class="actions" style="margin-top:12px"><button class="btn" id="gsi"${CL.status === "signing-in" ? " disabled" : ""}>${CL.status === "signing-in" ? "Opening Google…" : "Continue with Google"}</button></div>
          <p class="hint" style="margin-top:10px">By signing in you agree to the <a href="#/privacy">privacy notice</a>: your name, IITJ email and your answers are stored so the hub can track your progress. You can delete all of it at any time.</p>
        </div>${reset}<p class="hint" id="msg" style="margin-top:14px"></p></section>${footer()}`;
    $("#gsi").addEventListener("click", () => CL.signIn());
  } else {
    const u = CL.user, md = u.user_metadata || {}, pend = CL.pending();
    const st = { synced: "Synced", syncing: "Syncing…", offline: "Offline — changes are saved here and will sync when you're back online" }[CL.status] || CL.status;
    app.innerHTML = `<header class="mast slim">${crumbs()}<div class="eyebrow">Account</div><h1>${esc(md.full_name || md.name || u.email)}</h1>
      <p class="sub">${esc(u.email)}${CL.isAdmin() ? ' · <b>admin</b>' : ""}</p></header>
      <section class="tight">${storageWarn}
        <div class="card"><h3 class="subhead" style="margin-top:0">Your progress</h3>
          <p><span class="dot ${CL.status === "offline" ? "off" : CL.status === "synced" ? "ok" : "busy"}"></span> ${esc(st)}${pend ? ` · ${plural(pend, "change")} waiting to upload` : ""}</p>
          <p class="hint" style="margin-top:6px">Every answer, flag, flashcard review and mock paper is saved to your account, so it's there on any device you sign in on.</p>
          <div class="actions" style="margin-top:12px"><button class="btn ghost" id="out">Sign out</button></div>
          <p class="hint" style="margin-top:8px">Signing out also removes the copy kept in this browser, so nothing is left behind on a shared computer.</p></div>
        ${reset}
        <div class="card" style="margin-top:14px"><h3 class="subhead" style="margin-top:0">Delete my account</h3>
          <p class="hint">Permanently deletes your account and every answer, flashcard and mock paper stored with it. This can't be undone. See the <a href="#/privacy">privacy notice</a>.</p>
          <div class="actions" style="margin-top:10px"><button class="btn warn" id="del">Delete my account and data</button></div></div>
        <p class="hint" id="msg" style="margin-top:14px"></p></section>${footer()}`;
    $("#out").addEventListener("click", async () => {
      if (CL.pending() && !confirm(`${plural(CL.pending(), "change")} haven't uploaded yet (you seem to be offline). Sign out anyway and lose them?`)) return;
      await CL.signOut();
    });
    $("#del").addEventListener("click", async () => {
      if (!confirm("Delete your account and all of its progress? This can't be undone.")) return;
      try { await CL.deleteAccount(); } catch (e) { $("#msg").textContent = "Couldn't delete the account: " + e.message; }
    });
  }
  $("#rst").addEventListener("click", () => {
    if (confirm(CL.user ? "Delete all your progress, here and in your account? This can't be undone." : "Delete all progress in this browser? This can't be undone.")) {
      store.reset(); $("#msg").textContent = "Reset done."; paintTopnav("data");
    }
  });
}

/* =================================================================
   UPDATES (announcements)
   ================================================================= */
function newsView() {
  const unread = new Set(CL.unread().map(a => a.id));
  const list = CL.announcements;
  app.innerHTML = `<header class="mast slim">${crumbs()}<div class="eyebrow">Updates</div><h1>Announcements</h1>
    <p class="sub">News about quizzes, new material and the hub itself. Always check the LMS too: it is the official source.</p></header>
    <section class="tight">${list.length ? list.map(a => `<article class="ann${unread.has(a.id) ? " unread" : ""}${a.pinned ? " pinned" : ""}">
      <div class="qmeta">${a.pinned ? '<span class="pill today">Pinned</span>' : ""}${unread.has(a.id) ? '<span class="pill soon">New</span>' : ""}
        <span class="qnum">${annDate(a)}</span>${a.course && META[a.course] ? `<span class="qtopic">${esc(META[a.course].name)}</span>` : ""}</div>
      <h3>${esc(a.title)}</h3>${a.body ? `<p>${annBody(a.body)}</p>` : ""}</article>`).join("")
    : `<div class="empty">No announcements yet.</div>`}</section>${footer()}`;
  if (unread.size) setTimeout(() => CL.markRead([...unread]), 1200);
}

/* =================================================================
   PRIVACY NOTICE
   ================================================================= */
function privacyView() {
  app.innerHTML = `<header class="mast slim">${crumbs()}<div class="eyebrow">Privacy notice</div><h1>What the hub stores, and why</h1>
    <p class="sub">Last updated 5 October 2026. Written with India's Digital Personal Data Protection Act, 2023 in mind.</p></header>
    <section class="tight prose">
      <h3>Who is responsible</h3>
      <p>The BSMT Study Hub is run by Rahul Beniwal, a student on IIT Jodhpur's B.S. in Management &amp; Technology, as a personal project. It is not
        run by, or affiliated with, IIT Jodhpur or Masai School. For anything about your data, message Rahul on
        <a href="https://www.linkedin.com/in/iambeniwal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      <h3>As a guest</h3>
      <p>Nothing about you leaves your device. Your progress is kept in your browser's local storage, and clearing your browser data deletes it.</p>
      <h3>If you sign in</h3>
      <p>Signing in with your @iitj.ac.in Google account stores:</p>
      <ul>
        <li>your <b>name and IITJ email address</b>, as Google provides them;</li>
        <li>your <b>study activity</b>: each answer (which question, right or wrong, when), your flashcard schedule, flagged questions, mock-paper scores, and which announcements you've read.</li>
      </ul>
      <p>That's all. The hub doesn't see your Google password, your contacts, your other email, or anything else in your Google account.</p>
      <h3>Why</h3>
      <p>Only to run the hub for you: to keep your progress across devices, to work out your weak topics, and to pick what you should practise next.
        The admin (Rahul) can also see <b>totals across all students</b>, such as which questions the batch gets wrong most often, so that
        new notes and questions go where they're needed. Your data is never sold, shared with IIT Jodhpur, Masai School or anyone else, or used for advertising.</p>
      <h3>Where it's kept</h3>
      <p>In a database run by Supabase, on servers in Mumbai, India. Only you can read your own progress; the database itself enforces that. The admin can see the
        student list and progress data in order to manage the hub.</p>
      <h3>How long, and how to delete it</h3>
      <p>Until you delete it. <b>Account → Delete my account and data</b> erases your account and everything stored with it, immediately and permanently.
        <b>Reset everything</b> keeps the account but erases its progress.</p>
      <h3>Your rights</h3>
      <p>You can ask what's held about you, ask for it to be corrected or erased, withdraw your consent by deleting your account, and raise a
        grievance by messaging Rahul at the link above. If that doesn't resolve it, you can complain to the Data Protection Board of India.</p>
      <h3>Analytics</h3>
      <p>The hosted site counts page visits with Google Analytics. It isn't linked to your account and receives no names, emails or answers.</p>
    </section>${footer()}`;
}

/* helpers shared with admin.js */
H.ui = { esc, crumbs, footer, link, fmtDate, fmtTime, fmtDay, plural, stripTags, META, SLUGS, QBY, route, $, $$ };

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => route());
else route();
})();
