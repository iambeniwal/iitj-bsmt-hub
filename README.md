# BSMT Study Hub

A study hub for **IIT Jodhpur's B.S. in Management & Technology** (off-campus, batch 382).
It covers the whole programme, not one quiz: notes, a question bank, flashcards, timed mock
papers and mistake revision for every course, semester after semester.

It replaces the Semester 1 Quiz 1 sheets
([iitj-bsmtsem1-quiz1-prep](https://github.com/iambeniwal/iitj-bsmtsem1-quiz1-prep)), and
all of their content has moved here.

**This is a student-made study aid, not official IIT Jodhpur or Masai School course material.**
Always check the LMS for the authoritative syllabus and assessment details.

Compiled by **Rahul Beniwal**. [LinkedIn](https://www.linkedin.com/in/iambeniwal/)

## What it does

Built around what classmates asked for after Quiz 1:

| Asked for | Where it lives |
|---|---|
| Topic-wise practice | Course → *Topics & practice*: every topic has its own drill, with a mastery bar |
| Flashcards (active recall) | *Flashcards*: every trap and key definition (214 cards), on a spaced-repetition schedule |
| Master question bank | *Bank*: all questions in every course, searchable and filterable, any result set drillable |
| Common confusions / traps | Course → *Traps*, and in the flashcard deck |
| Timed mock tests | Course → *Assessments* → *Sit a mock*: a full-length paper on the real clock, marked at the end with −0.25 negative marking, plus a colour-coded result grid |
| Mistake revision | *Mistakes*: every question you miss stays here until you answer it correctly **twice in a row** |

There are no accounts. Progress is stored in the browser (`localStorage`) and never leaves
the device. *My data* exports and restores a backup file, which is also how you move
progress between a laptop and a phone.

## Layout

```
index.html                  the whole app: one page, hash-routed
assets/
  app.js                    router and every view
  store.js                  progress: attempts, mistakes, flags, flashcard schedule, mocks
  hub.css                   design tokens and components
  analytics.js              GA4 page views, hosted site only
content/
  program.js                registry: semesters, courses, grading, assessment dates
  sem1/<course-slug>.js     one file per course: notes, topics, questions, traps, definitions
tools/
  check.js                  content checker, run before every commit
  build-offline.py          flatten everything into one shareable .html
  migrate-quiz1.js          the one-off import from the Quiz 1 repo (provenance only)
ids.lock                    every ID ever issued, append-only
```

## The content model

A **course** owns **units** (the notes sections) and **topics** (the tags questions are
filed under). Each topic belongs to a unit, so a missed question can link straight to the
notes that explain it.

**Assessments** (Quiz 1–3, end-term) live in `content/program.js`, apart from the content.
Each one is a date, a format and a scope. A new quiz date means editing one line, not
rewriting a course file.

### Permanent IDs: the one rule that matters

Every question, trap and definition has a permanent ID (`foc-q0012`, `ebh-t0003`,
`sfm-d0004`). Students' saved progress is keyed by those IDs.

- **New items get the next free number.** Never renumber, never reuse.
- **To retire an item, delete it but leave its ID in `ids.lock`.**
- **To correct an item, edit it in place and keep its ID.** A student's history then stays
  with it.

`node tools/check.js` fails on duplicate or malformed IDs and on new IDs not yet in
`ids.lock`. When new content is final, run `node tools/check.js --lock`.

### A question

```js
{ id:"foc-q0120",          // permanent
  topic:"Lists & tuples",   // must be in the course's topics list
  q:"Question text",        // plain text: write “ ” — → as characters, not HTML entities
  c:["A","B","C","D"],
  a:[1],                    // indices into c
  w:"Why this is the answer.",
  o:true,                   // optional: taken from the course's own slides
  multi:true }              // optional: more than one correct answer
```

## Adding a course (Semester 2 onwards)

1. Add the course to `content/program.js` under its semester, with grading and assessments.
2. Write `content/semN/<slug>.js` calling `HUB.addCourse({...})` with a new 2–3 letter `code`.
3. Add its `<script>` tag to `index.html`.
4. `node tools/check.js --lock`.

## Running it

```bash
python3 -m http.server 4530
```

Offline copy for WhatsApp or email (lands in `dist/`, which is git-ignored):

```bash
python3 tools/build-offline.py
```

## Changelog

Full history in [`CHANGELOG.md`](CHANGELOG.md). Most recent:

- **[1.0.0] — 2026-10-04**: first release. Imports all six Semester 1 courses (570
  questions) from the Quiz 1 repo with permanent IDs, and adds topic practice, flashcards,
  the question bank, mock papers and mistake revision.

## Licence

Three licences for three kinds of material: code under MIT, original notes and questions
under CC BY-NC-SA 4.0, and the underlying course material, which is not licensed here at
all. See [`LICENSE`](LICENSE).
