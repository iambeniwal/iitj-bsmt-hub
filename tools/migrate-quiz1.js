#!/usr/bin/env node
/* ===================================================================
   One-off migration: iitj-bsmtsem1-quiz1-prep  ->  iitj-bsmt-hub

   Reads each course's data.js from the Quiz 1 repo and writes
   content/sem1/<slug>.js in the hub's course model, issuing a
   permanent ID to every question, trap and definition.

       node tools/migrate-quiz1.js ~/Documents/iitj-bsmtsem1-quiz1-prep

   Kept in the repo as provenance. Do NOT re-run it once content has
   been edited here: it would overwrite those edits. IDs it issued are
   recorded in ids.lock and must never be reused or renumbered.
   =================================================================== */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");

const SRC = process.argv[2];
if (!SRC) { console.error("usage: migrate-quiz1.js <path to quiz1-prep repo>"); process.exit(1); }
const OUT = path.join(__dirname, "..", "content", "sem1");
fs.mkdirSync(OUT, { recursive: true });

/* course code (ID prefix) and question-topic -> notes-unit map */
const COURSES = {
  "foundations-of-computing": { code: "foc", units: {
    "Data classification":"classify", "Computing & IPO":"computing", "Data & DIKW":"data",
    "DIKW ladder":"data", "Algorithms":"algo", "Hardware":"hardware", "Software & OS":"software",
    "Python basics":"python", "Lists & tuples":"lists" }},
  "economic-business-history": { code: "ebh", units: {
    "Foundations":"found", "Economy → business":"econbiz", "Society & tech":"soctech",
    "Business → society":"bizsoc", "Agrarian & land":"agrarian", "Guilds":"guilds",
    "Guild decline":"guilds", "Before machines":"before", "Machines":"machines",
    "Dates & numbers":"machines" }},
  "algorithmic-thinking-in-business": { code: "atb", units: {
    "Basics":"basics", "Pseudocode":"pseudo", "Properties":"props", "Algorithm types":"types",
    "Arrays":"arrays", "Linked lists":"linked", "Stacks":"stacks", "Queues":"queues" }},
  "financial-accounting": { code: "fa", units: {
    "What accounting is":"what", "Users & regulators":"users", "Concepts":"concepts",
    "Conventions":"conventions", "The equation":"equation", "Accounts & rules":"accounts",
    "Journal & ledger":"journal", "Trial balance":"trial" }},
  "statistics-for-managers": { code: "sfm", units: {
    "Data basics":"basics", "Scales":"scales", "Sources & samples":"sources",
    "Summarising":"summarise", "Location":"location", "Spread & shape":"spread",
    "Association":"assoc", "Probability I":"prob1", "Probability II":"prob2",
    "Distributions":"dists" }},
  "principles-of-marketing": { code: "pom", units: {
    "What marketing is":"what", "Core concepts":"core", "Perceived value":"value",
    "Exchange":"exchange", "Value chain":"chain", "Segmentation":"seg",
    "Targeting":"target", "Positioning":"pos", "Consumer behaviour":"cb" }}
};

/* Question, option and explanation strings are plain text in the hub and
   get escaped at render time. A few old ones carried HTML entities, which
   the old engine then escaped a second time, so they showed as "&mdash;". */
const ENT = { mdash:"—", ndash:"–", ldquo:"“", rdquo:"”", lsquo:"‘", rsquo:"’",
  rarr:"→", larr:"←", amp:"&", lt:"<", gt:">", quot:'"', nbsp:" ", times:"×", hellip:"…", middot:"·" };
const decode = s => String(s)
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
  .replace(/&([a-z]+);/g, (m, n) => ENT[n] ?? m);
const strip = s => decode(String(s).replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
const pad = n => String(n).padStart(4, "0");

const lock = [];
for (const [slug, meta] of Object.entries(COURSES)) {
  const file = path.join(SRC, slug, "data.js");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, "utf8"), ctx);
  const C = ctx.window.COURSE;
  const code = meta.code;

  const unknown = [...new Set(C.questions.map(q => q.t))].filter(t => !meta.units[t]);
  if (unknown.length) throw new Error(`${slug}: unmapped topics ${unknown.join(", ")}`);

  const questions = C.questions.map((q, i) => {
    const o = { id: `${code}-q${pad(i + 1)}`, topic: q.t, q: decode(q.q), c: q.c.map(decode), a: q.a, w: decode(q.w) };
    if (q.o) o.o = true;
    if (q.multi) o.multi = true;
    return o;
  });
  const traps = C.traps.map(([h, p, f], i) => ({ id: `${code}-t${pad(i + 1)}`, h: decode(h), p: decode(p), f: decode(f) }));

  const defs = [];
  C.sections.forEach(sec => sec.topics.forEach(tp => {
    for (const m of tp.h.matchAll(/<div class="def">([\s\S]*?)<\/div>/g)) {
      const b = m[1].match(/<b>([\s\S]*?)<\/b>/);
      defs.push({ id: `${code}-d${pad(defs.length + 1)}`, unit: sec.id, topic: strip(tp.t),
        term: b ? strip(b[1]).replace(/[.:]$/, "") : strip(tp.t), html: m[1].trim() });
    }
  }));

  const units = C.sections.map(s => ({ id: s.id, title: s.title, tag: s.tag, lede: s.lede, topics: s.topics }));
  const topics = [...new Set(C.questions.map(q => q.t))].map(t => ({ name: t, unit: meta.units[t] }));

  const course = {
    slug, code,
    eyebrow: C.eyebrow, heading: C.heading, sub: C.sub, sources: C.footer,
    lectures: C.lectures,
    units, topics, traps, defs, questions,
    briefs: { q1: {
      scopeShort: C.scopeShort, tag: C.briefTag, lede: C.briefLede, html: C.briefHtml,
      mapLede: C.mapLede, syllabusNote: C.syllabusNote || "", drillLede: C.drillLede, weights: C.weights
    }}
  };

  const body = `/* ${slug} — migrated from iitj-bsmtsem1-quiz1-prep on ${new Date().toISOString().slice(0,10)}.
   IDs are permanent: append new items with the next free number, never renumber. */
HUB.addCourse(${JSON.stringify(course, null, 1)});
`;
  fs.writeFileSync(path.join(OUT, slug + ".js"), body);
  lock.push(...questions.map(q => q.id), ...traps.map(t => t.id), ...defs.map(d => d.id));
  console.log(`${slug.padEnd(34)} ${String(questions.length).padStart(4)} Q  ${String(traps.length).padStart(3)} traps  ${String(defs.length).padStart(3)} defs`);
}
fs.writeFileSync(path.join(__dirname, "..", "ids.lock"),
  "# Every ID ever issued. Append-only: never delete a line, never reuse an ID.\n" + lock.join("\n") + "\n");
console.log(`ids.lock: ${lock.length} IDs`);
