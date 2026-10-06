/* ===================================================================
   Adaptive layer — reads the attempt history in store.js and decides
   what each student should practise next. Rule-based and explainable:
   every choice can be described in one sentence on screen.

   Nothing new is stored. Topic strength and question review dates are
   worked out from attempts each time, so this behaves the same in
   guest mode today and with a synced account later.

   Topic strength (from the last 3 attempts of each question tried):
     new      nothing answered yet
     started  fewer than 3 answers, too few to judge
     weak     under 60% right, or a quarter of the topic is open mistakes
     shaky    60–79% right
     strong   80%+ right
   accuracy is smoothed, (right + 1) / (answers + 2), so one lucky
   answer doesn't read as mastery.

   Question review: a question you have got right comes back after
   1, 3, 7, 16, then 35 days, counting consecutive correct answers.
   =================================================================== */
(function () {
"use strict";

const H = window.HUB, store = H.store;
const DAY = 864e5;
const STEPS = [0, 1, 3, 7, 16, 35];               // days, by correct streak

const QS = [];
Object.entries(H.courses).forEach(([slug, C]) => C.questions.forEach(q => { q.course = slug; QS.push(q); }));
/* the student's own AI-written questions (assets/ai.js) count toward topic strength and
   smart sessions, but never toward mock papers, which stay bank-only */
const AIQ = () => (H.ai ? H.ai.questions() : []);
const ALL = () => AIQ().length ? QS.concat(AIQ()) : QS;

/* ---------- one question ---------- */
function qstate(q, now) {
  const a = store.attempts(q.id);
  if (!a.length) return { seen: false };
  let streak = 0;
  for (let i = a.length - 1; i >= 0 && a[i][1]; i--) streak++;
  const last = a[a.length - 1][0];
  const ivl = STEPS[Math.min(streak, STEPS.length - 1)] * DAY;
  return { seen: true, streak, last, mistake: store.isMistake(q.id),
    due: streak > 0 && now - last >= ivl, overdue: ivl ? (now - last) / ivl : 0 };
}

/* ---------- one topic ---------- */
function topicStats(slug, topic) {
  const qs = H.courses[slug].questions.filter(q => q.topic === topic).concat(AIQ().filter(q => q.course === slug && q.topic === topic));
  let seen = 0, right = 0, tries = 0, mistakes = 0;
  for (const q of qs) {
    const a = store.attempts(q.id);
    if (!a.length) continue;
    seen++;
    a.slice(-3).forEach(x => { tries++; right += x[1]; });
    if (store.isMistake(q.id)) mistakes++;
  }
  const acc = (right + 1) / (tries + 2);
  const label = !seen ? "new"
    : tries < 3 ? "started"
    : acc < 0.6 || mistakes / qs.length >= 0.25 ? "weak"
    : acc < 0.8 ? "shaky" : "strong";
  return { slug, topic, total: qs.length, seen, tries, mistakes, acc, label,
    coverage: qs.length ? seen / qs.length : 0 };
}

function topics(slug) {
  const slugs = slug ? [slug] : Object.keys(H.courses);
  return slugs.flatMap(s => H.courses[s].topics.map(t => topicStats(s, t.name)));
}

/* weakest first; only topics with enough answers to judge */
function weakSpots(slug, n) {
  return topics(slug).filter(t => t.label === "weak" || t.label === "shaky")
    .sort((a, b) => (a.label === b.label ? 0 : a.label === "weak" ? -1 : 1) || a.acc - b.acc || b.mistakes - a.mistakes)
    .slice(0, n || 3);
}

/* ---------- smart session ----------
   Picks n questions in this order of need:
     1. open mistakes, oldest first            (at most half the session)
     2. reviews that are due, most overdue     (at most 30%)
     3. unseen questions, one topic at a time in rotation, weakest first
     4. anything else, soonest-due first, to fill
   No topic may take more than 35% of the session while other topics
   still have candidates.                                            */
function smartPick(opts) {
  const n = opts.n || 20, now = Date.now();
  const pool = ALL().filter(q => !opts.c || q.course === opts.c);
  const tAcc = {};
  topics(opts.c).forEach(t => { tAcc[t.slug + "|" + t.topic] = t.seen ? t.acc : 0.5; });
  const jit = () => Math.random() * 0.5;

  const B = { mistake: [], review: [], fresh: [], rest: [] };
  pool.forEach(q => {
    const s = qstate(q, now);
    if (s.mistake) B.mistake.push({ q, k: (now - s.last) / DAY + jit() });
    else if (s.due) B.review.push({ q, k: s.overdue + jit() });
    // AI questions fill a topic's new slots once its unseen bank questions run out
    else if (!s.seen) B.fresh.push({ q, k: (1 - tAcc[q.course + "|" + q.topic]) + jit() - (q.ai ? 1 : 0) });
    else B.rest.push({ q, k: -((STEPS[Math.min(s.streak, 5)] * DAY - (now - s.last)) / DAY) + jit() });
  });
  Object.values(B).forEach(list => list.sort((a, b) => b.k - a.k));
  /* unseen questions rotate through topics, weakest topic first, so a
     new student's first session samples the whole course evenly */
  const groups = {};
  B.fresh.forEach(x => { (groups[x.q.course + "|" + x.q.topic] = groups[x.q.course + "|" + x.q.topic] || []).push(x); });
  const order = Object.values(groups).sort((a, b) => b[0].k - a[0].k);
  B.fresh = [];
  for (let i = 0; order.some(g => g[i]); i++) order.forEach(g => { if (g[i]) B.fresh.push(g[i]); });

  const cap = Math.max(3, Math.ceil(n * 0.35));
  const picked = [], perTopic = {}, from = { mistake: 0, review: 0, fresh: 0, rest: 0 };
  const take = (name, limit, capped) => {
    for (const { q } of B[name]) {
      if (picked.length >= n || from[name] >= limit) return;
      if (picked.includes(q)) continue;
      const key = q.course + "|" + q.topic;
      if (capped && (perTopic[key] || 0) >= cap) continue;
      picked.push(q); perTopic[key] = (perTopic[key] || 0) + 1; from[name]++;
    }
  };
  take("mistake", Math.ceil(n * 0.5), true);
  take("review", Math.ceil(n * 0.3), true);
  take("fresh", n, true);
  take("rest", n, true);
  ["mistake", "review", "fresh", "rest"].forEach(k => take(k, n, false));   // backfill if caps left gaps
  return { qs: picked, mix: from };
}

/* what a smart session would contain right now, without the cost of
   picking it twice: used for the "Today" summary */
const describeMix = m => [
  m.mistake && `${m.mistake} mistake${m.mistake === 1 ? "" : "s"}`,
  m.review && `${m.review} due for review`,
  m.fresh && `${m.fresh} new`,
  m.rest && `${m.rest} refresher${m.rest === 1 ? "" : "s"}`
].filter(Boolean).join(" · ");

/* ---------- mock papers that lean toward weakness ----------
   Weighted sampling without replacement: a question's weight is 1,
   plus up to 2 for how weak its topic is, plus 2 if it's an open
   mistake. Unseen topics count as middling, not weak.              */
function weightedPaper(slug, n) {
  const tAcc = {};
  topics(slug).forEach(t => { tAcc[t.topic] = t.tries >= 3 ? t.acc : 0.6; });
  const items = H.courses[slug].questions.map(q => ({ q,
    w: 1 + 2 * Math.max(0, 1 - tAcc[q.topic] / 0.8) + (store.isMistake(q.id) ? 2 : 0) }));
  const out = [];
  while (out.length < n && items.length) {
    let r = Math.random() * items.reduce((s, x) => s + x.w, 0), i = 0;
    while ((r -= items[i].w) > 0 && i < items.length - 1) i++;
    out.push(items.splice(i, 1)[0].q);
  }
  return out;
}

const hasHistory = slug => ALL().some(q => (!slug || q.course === slug) && store.attempts(q.id).length);

H.adapt = { topicStats, topics, weakSpots, smartPick, describeMix, weightedPaper, hasHistory, qstate };
})();
