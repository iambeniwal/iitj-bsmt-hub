/* ===================================================================
   Progress store — the one place progress is read and written.

   Guest mode: everything lives in this browser under "bsmt-hub:v1" and
   nowhere else; clearing browser data erases it.
   Signed in: the store switches to a per-account key
   ("bsmt-hub:u:<user id>") and assets/cloud.js mirrors every change to
   the database. The rest of the app never knows which mode it is in.

   Keyed by permanent content IDs (foc-q0012, ebh-t0003 …), which is
   why those IDs must never be renumbered — a renumber would silently
   reattach someone's history to a different question.

   Shape (localStorage "bsmt-hub:v1"):
     att   { qid: [[ts, ok, mode], …] }   last 12 attempts per question
     cards { cardId: {due, ivl, ef, reps, lapses, upd} }
     flags { qid: 1 }
     mocks [{c, a, at, n, right, wrong, blank, score, max, secs, ids, picks}]
   =================================================================== */
(function () {
"use strict";

const GUEST = "bsmt-hub:v1";
const DAY = 864e5;
const blank = () => ({ v: 1, att: {}, cards: {}, flags: {}, mocks: [] });

function read(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return blank();
    return Object.assign(blank(), JSON.parse(raw));
  } catch (e) { return blank(); }
}

let KEY = GUEST;
let S = read(KEY);
let persistOk = true;
let timer = null;
function write() {
  clearTimeout(timer); timer = null;
  try { localStorage.setItem(KEY, JSON.stringify(S)); persistOk = true; }
  catch (e) { persistOk = false; }
}
function save() { clearTimeout(timer); timer = setTimeout(write, 120); }
// a second tab may have written since we loaded
window.addEventListener("storage", e => { if (e.key === KEY) S = read(KEY); });

/* change events, for cloud sync */
const listeners = [];
const emit = ev => listeners.forEach(fn => { try { fn(ev); } catch (e) { console.error(e); } });

const store = {
  get persists() { return persistOk; },

  /* ---------- question attempts ---------- */
  record(qid, ok, mode) {
    const a = S.att[qid] || (S.att[qid] = []);
    const rec = [Date.now(), ok ? 1 : 0, mode || "practice"];
    a.push(rec);
    if (a.length > 12) a.splice(0, a.length - 12);
    save();
    emit({ t: "att", qid, at: rec[0], ok: !!ok, mode: rec[2] });
  },
  attempts(qid) { return S.att[qid] || []; },
  /* an AI question that left your pool (reported or withdrawn): its answers stop
     counting. The server has already removed its copy, so nothing is emitted. */
  forget(qid) { delete S.att[qid]; delete S.flags[qid]; save(); },

  /* A question is a mistake from the first time you miss it until you
     have answered it correctly twice in a row since that miss. */
  isMistake(qid) {
    const a = S.att[qid];
    if (!a || !a.length) return false;
    let streak = 0;
    for (let i = a.length - 1; i >= 0; i--) {
      if (a[i][1]) streak++;
      else return streak < 2;
    }
    return false;                                  // never missed
  },
  status(qid) {
    const a = S.att[qid];
    if (!a || !a.length) return "new";
    if (store.isMistake(qid)) return "mistake";
    return a[a.length - 1][1] ? "right" : "wrong";
  },
  /* share of a question set whose latest attempt was correct */
  mastery(qids) {
    let seen = 0, right = 0, mistakes = 0;
    for (const id of qids) {
      const a = S.att[id];
      if (!a || !a.length) continue;
      seen++;
      if (a[a.length - 1][1]) right++;
      if (store.isMistake(id)) mistakes++;
    }
    return { total: qids.length, seen, right, mistakes,
      pct: qids.length ? Math.round(right * 100 / qids.length) : 0 };
  },
  answeredCount() { return Object.keys(S.att).filter(id => !id.startsWith("ai-")).length; },   // bank questions

  /* ---------- flags ---------- */
  flagged(qid) { return !!S.flags[qid]; },
  toggleFlag(qid) {
    if (S.flags[qid]) delete S.flags[qid]; else S.flags[qid] = 1;
    save();
    emit({ t: "flag", qid, on: !!S.flags[qid] });
    return !!S.flags[qid];
  },

  /* ---------- flashcards: SM-2, simplified ----------
     grade 0 Again · 1 Hard · 2 Good · 3 Easy                        */
  card(id) { return S.cards[id] || null; },
  isDue(id, now) {
    const c = S.cards[id];
    return !!c && c.due <= (now || Date.now());
  },
  preview(id, grade) { return schedule(S.cards[id], grade).ivl; },
  review(id, grade) {
    S.cards[id] = schedule(S.cards[id], grade);
    save();
    emit({ t: "card", id, c: S.cards[id] });
    return S.cards[id];
  },

  /* ---------- mock papers ---------- */
  addMock(m) { S.mocks.push(m); if (S.mocks.length > 60) S.mocks.shift(); save(); emit({ t: "mock", m }); },
  mocks(slug, aid) { return S.mocks.filter(m => (!slug || m.c === slug) && (!aid || m.a === aid)); },

  /* ---------- start over ---------- */
  reset() { S = blank(); save(); emit({ t: "reset" }); },

  /* ---------- plumbing for cloud.js ---------- */
  on(fn) { listeners.push(fn); },
  get key() { return KEY; },
  guestKey: GUEST,
  use(key) { if (timer) write(); KEY = key; S = read(KEY); },   // switch guest <-> account
  peek(key) { return read(key); },                              // read another key without switching
  drop(key) { try { localStorage.removeItem(key); } catch (e) {} },
  snapshot() { return JSON.parse(JSON.stringify(S)); },
  replace(state) { S = Object.assign(blank(), state); write(); }
};

function schedule(prev, grade) {
  const c = Object.assign({ ivl: 0, ef: 2.5, reps: 0, lapses: 0 }, prev || {});
  let ivl;
  if (grade === 0) {                             // forgot: see it again shortly
    c.reps = 0; c.lapses++; c.ef = Math.max(1.3, c.ef - 0.2);
    c.ivl = 0;
    c.due = Date.now() + 10 * 60e3;
    c.upd = Date.now();
    return c;
  }
  if (grade === 1) { ivl = c.reps === 0 ? 1 : Math.max(1, c.ivl * 1.2); c.ef = Math.max(1.3, c.ef - 0.15); }
  if (grade === 2) { ivl = c.reps === 0 ? 2 : c.reps === 1 ? 5 : c.ivl * c.ef; }
  if (grade === 3) { ivl = c.reps === 0 ? 4 : Math.max(c.ivl * c.ef * 1.3, 4); c.ef += 0.15; }
  c.reps++;
  c.ivl = Math.round(ivl * 10) / 10;
  c.due = Date.now() + c.ivl * DAY;
  c.upd = Date.now();
  return c;
}

window.HUB = window.HUB || { courses: {} };
HUB.store = store;
})();
