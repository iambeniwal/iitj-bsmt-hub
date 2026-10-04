#!/usr/bin/env node
/* ===================================================================
   Content checker — run before every commit:   node tools/check.js

   Fails on anything that would corrupt a student's saved progress or
   break a page: duplicate or malformed IDs, an ID missing from
   ids.lock, an answer index out of range, a topic with no notes unit,
   a course in the registry with no content file (or vice versa), an
   explanation that names an option by position (options are shuffled),
   or a course where the right answer would still land on one position
   far too often after shuffling.

   --lock   append any new IDs to ids.lock (do this when adding content)
   =================================================================== */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const ctx = {};
ctx.window = ctx;                                // browser-style: window is the global
vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });

const errors = [], warns = [];
const TAIL = /^(both|neither|either|all (three|four|of the above|the above)|none( of the above)?)\b/i;   // same as app.js
const POSREF = /\boptions? ?[1-6A-F]\b|\b(first|second|third|fourth|last|final) (option|answer|choice)|\bthat last option/i;
const err = m => errors.push(m), warn = m => warns.push(m);

run("content/program.js");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const loaded = [...html.matchAll(/<script src="(content\/sem\d+\/[^"]+\.js)"><\/script>/g)].map(m => m[1]);
loaded.forEach(run);
const H = ctx.HUB;

const lockFile = path.join(ROOT, "ids.lock");
const locked = new Set(fs.readFileSync(lockFile, "utf8").split("\n").filter(l => l && !l.startsWith("#")));
const seen = new Set(), fresh = [];

const registry = H.semesters.flatMap(s => s.courses.map(c => Object.assign({ sem: s.n }, c)));
for (const r of registry) {
  const file = `content/sem${r.sem}/${r.slug}.js`;
  if (!fs.existsSync(path.join(ROOT, file))) { warn(`${r.slug}: in the registry but has no content file yet`); continue; }
  if (!loaded.includes(file)) err(`${file} exists but index.html does not load it`);
}
for (const [slug, C] of Object.entries(H.courses)) {
  if (!registry.find(r => r.slug === slug)) err(`${slug}: content file has no registry entry in program.js`);
  const unitIds = new Set(C.units.map(u => u.id));
  const topicNames = new Set(C.topics.map(t => t.name));
  C.topics.forEach(t => { if (!unitIds.has(t.unit)) err(`${slug}: topic "${t.name}" points at missing unit "${t.unit}"`); });

  const id = (x, kind) => {
    const re = new RegExp(`^${C.code}-${kind}\\d{4}$`);
    if (!re.test(x.id)) err(`${slug}: malformed ${kind} id "${x.id}"`);
    if (seen.has(x.id)) err(`duplicate id ${x.id}`);
    seen.add(x.id);
    if (!locked.has(x.id)) fresh.push(x.id);
  };
  C.questions.forEach(q => {
    id(q, "q");
    if (!topicNames.has(q.topic)) err(`${q.id}: topic "${q.topic}" is not in the course's topics list`);
    if (!Array.isArray(q.c) || q.c.length < 2) err(`${q.id}: needs at least two options`);
    if (!q.a.length || q.a.some(i => i < 0 || i >= q.c.length)) err(`${q.id}: answer index out of range`);
    if (q.a.length > 1 && !q.multi) err(`${q.id}: several answers but not marked multi`);
    if (!q.w) warn(`${q.id}: no explanation`);
    if (/&[a-z]+;/.test(q.q + q.c.join("") + q.w)) err(`${q.id}: HTML entity in plain-text field (write the character itself)`);
    if (!q.keep && POSREF.test(q.w)) err(`${q.id}: explanation refers to an option by position, but options are shuffled — name the option's content instead`);
  });

  /* Where the answer lands once the app has shuffled: options shuffle
     uniformly, except "Both"/"Neither"-style options (pinned last) and
     q.keep questions (shown as written). Mirrors optionOrder() in app.js. */
  const pos = [0, 0, 0, 0, 0, 0]; let single = 0;
  C.questions.filter(q => !q.multi).forEach(q => {
    single++;
    const a = q.a[0];
    if (q.keep) { pos[a]++; return; }
    const idx = q.c.map((_, i) => i), tail = idx.filter(i => TAIL.test(q.c[i].trim())), head = idx.filter(i => !tail.includes(i));
    if (tail.includes(a)) pos[head.length + tail.indexOf(a)]++;
    else head.forEach((_, p) => { pos[p] += 1 / head.length; });
  });
  pos.forEach((n, p) => { if (single && n / single > 0.4) warn(`${slug}: ${Math.round(n * 100 / single)}% of answers would show in position ${"ABCDEF"[p]}`); });
  C.traps.forEach(t => id(t, "t"));
  C.defs.forEach(d => { id(d, "d"); if (!unitIds.has(d.unit)) err(`${d.id}: missing unit ${d.unit}`); });
}
for (const l of locked) if (!seen.has(l)) warn(`${l} is in ids.lock but no longer in the content (fine if deliberately retired, never reuse it)`);

if (fresh.length) {
  if (process.argv.includes("--lock")) {
    fs.appendFileSync(lockFile, fresh.join("\n") + "\n");
    console.log(`locked ${fresh.length} new IDs`);
  } else err(`${fresh.length} IDs not in ids.lock yet (${fresh.slice(0, 5).join(", ")}…) — run with --lock once they are final`);
}

const nq = Object.values(H.courses).reduce((s, c) => s + c.questions.length, 0);
warns.forEach(w => console.log("warn  " + w));
errors.forEach(e => console.log("ERROR " + e));
console.log(`${Object.keys(H.courses).length} courses · ${nq} questions · ${seen.size} IDs · ${errors.length} errors · ${warns.length} warnings`);
process.exit(errors.length ? 1 : 0);
