/* ===================================================================
   Merge: the account's rows from the database + this browser's copy
   of the account + (once) any guest progress made before signing in.

   Pure function, no I/O, so it can be tested on its own.
     remote  { att: [[qid, ts, ok, mode]], cards: {id: card}, flags: [qid], mocks: [m] }
     local   store-shaped state for this account in this browser
     guest   store-shaped guest state, or null
   Returns { state, ops, added }:
     state  the merged store state
     ops    outbox operations for everything the database doesn't have yet
     added  counts of what came over from guest mode, for the message

   Rules: attempts and mock papers are kept if seen anywhere (matched by
   timestamp, so nothing doubles up); a flashcard keeps whichever
   version was reviewed most recently; flags are a union.
   =================================================================== */
(function () {
"use strict";

window.HUB = window.HUB || { courses: {} };

HUB.cloudMerge = function (remote, local, guest) {
  const ops = [], added = { att: 0, cards: 0, mocks: 0 };
  const sources = [local, guest].filter(Boolean);

  /* attempts */
  const seen = new Set(), all = {};
  remote.att.forEach(([q, ts, ok, mode]) => { seen.add(q + "|" + ts); (all[q] = all[q] || []).push([ts, ok, mode]); });
  sources.forEach(src => Object.entries(src.att || {}).forEach(([q, list]) => list.forEach(([ts, ok, mode]) => {
    const k = q + "|" + ts;
    if (seen.has(k)) return;
    seen.add(k);
    (all[q] = all[q] || []).push([ts, ok ? 1 : 0, mode || "practice"]);
    ops.push({ t: "att", qid: q, ok: !!ok, mode: mode || "practice", at: ts });
    if (src === guest) added.att++;
  })));
  const att = {};
  Object.entries(all).forEach(([q, l]) => { l.sort((a, b) => a[0] - b[0]); att[q] = l.slice(-12); });

  /* flashcards: the most recent review wins */
  const cards = Object.assign({}, remote.cards);
  sources.forEach(src => Object.entries(src.cards || {}).forEach(([id, c]) => {
    const r = cards[id];
    if (!r || (c.upd || 0) > (r.upd || 0)) {
      if (src === guest && !r) added.cards++;
      cards[id] = c;
      ops.push({ t: "card", id, c });
    }
  }));

  /* flags */
  const flags = {};
  remote.flags.forEach(q => { flags[q] = 1; });
  sources.forEach(src => Object.keys(src.flags || {}).forEach(q => {
    if (flags[q]) return;
    flags[q] = 1;
    ops.push({ t: "flag", qid: q, on: true });
  }));

  /* mock papers */
  const mk = new Map(remote.mocks.map(m => [m.at, m]));
  sources.forEach(src => (src.mocks || []).forEach(m => {
    if (mk.has(m.at)) return;
    mk.set(m.at, m);
    ops.push({ t: "mock", m });
    if (src === guest) added.mocks++;
  }));
  const mocks = [...mk.values()].sort((a, b) => a.at - b.at).slice(-60);

  return { state: { v: 1, att, cards, flags, mocks }, ops, added };
};
})();
