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
| Flashcards (active recall) | *Flashcards*: every trap and key definition (742 cards), on a spaced-repetition schedule |
| Master question bank | *Bank*: all questions in every course, searchable and filterable, any result set drillable |
| Common confusions / traps | Course → *Traps*, and in the flashcard deck |
| Timed mock tests | Course → *Assessments* → *Sit a mock*: a full-length paper on the real clock, marked at the end with −0.25 negative marking, plus a colour-coded result grid |
| Practice that adapts to you | *Today* on the home page and *Smart session* on each course: mistakes, due reviews and weakest topics first; every topic labelled weak, shaky or strong |
| Mistake revision | *Mistakes*: every question you miss stays here until you answer it correctly **twice in a row** |

**Guest or signed in.** As a guest, progress is stored in the browser (`localStorage`) and
never leaves the device, and clearing browser data deletes it. Signing in with an
`@iitj.ac.in` Google account saves progress to a Supabase database, so it follows you between
devices; guest progress moves into the account the first time. Row-level security means each
student can read only their own rows. See [`supabase/README.md`](supabase/README.md) and the
in-app privacy notice.

**Answer options are shuffled every time a question is shown**, so the position of the
right answer tells you nothing. The content imported from the Quiz 1 site had 76% of its
answers on option B. Options that refer to the others ("Both", "Neither", "All three")
stay at the end, and a question marked `keep` is shown exactly as written.

## Layout

```
index.html                  the whole app: one page, hash-routed
assets/
  app.js                    router and every view
  store.js                  progress: attempts, mistakes, flags, flashcard schedule, mocks
  adapt.js                  smart sessions, topic strength, spaced question review
  cloud.js                  sign-in, sync outbox, announcements, quiz-date overrides
  merge.js                  account + browser + guest merge (pure, tested)
  admin.js                  the admin panel
  hub.css                   design tokens and components
  analytics.js              GA4 page views, hosted site only
content/
  program.js                registry: semesters, courses, grading, assessment dates
  sem1/<course-slug>.js     one file per course: notes, topics, questions, traps, definitions
tools/
  check.js                  content checker, run before every commit
  build-offline.py          flatten everything into one shareable .html
  migrate-quiz1.js          the one-off import from the Quiz 1 repo (provenance only)
  test-db.mjs               row-level security tests on an in-memory Postgres (npm run test:db)
  test-merge.js             sync merge tests (npm run test:merge)
supabase/
  migrations/               the database schema, applied in order
  README.md                 one-time setup and the security model
.github/workflows/
  keepalive.yml             stops the free Supabase project pausing
ids.lock                    every ID ever issued, append-only
```

## The content model

A **course** owns **units** (the notes sections) and **topics** (the tags questions are
filed under). Each topic belongs to a unit, so a missed question can link straight to the
notes that explain it.

**Assessments** (Quiz 1–3, end-term) live in `content/program.js`, apart from the content.
Each one is a date, a format and a scope. A new quiz date means editing one line, not
rewriting a course file.

### Scope belongs to an assessment, never to the course

This hub is for the whole programme (quizzes, end-terms and the learning itself), so content
is never labelled "not examinable", "out of syllabus" or "skip". When something is outside a
particular paper, name the paper and give the reason: *"Taught after the Quiz 1 cut-off, so it
wasn't in Quiz 1. Expect it in later quizzes and the final."* Scope facts go in that
assessment's brief, in `program.js` and the course's `briefs`, not in topic titles, labels or
flashcards, because those outlive the quiz.

### Source labels

Every notes topic shows its source at the right of its title. Lectures are written **`L#N`**,
the LMS's own lecture number (`#17` on the LMS is `L#17` here), joined with ` · `:
`L#2 · L#4 · slides 21–24`. Deck numbering goes after it (`L#3 · deck Lec 2`).
Textbook blocks use the book and chapter (`Anderson 14e ch3`). Labels describe where
material comes from, never how likely it is to be tested or how recent it is.

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
  w:"Why this is the answer.",   // name options by content, never "option 2": options are shuffled
  o:true,                   // optional: taken from the course's own slides
  keep:true,                // optional: show options in the written order (e.g. the DIKW ladder)
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

- **[2.2.0] — 2026-10-05**: the 35 lectures released since Quiz 1 (563 questions, with exam hints
  from the lecturers), textbook notes for what has been taught so far, and 284 diagrams
  across the notes. Also fixes the `print` naming rule and a z-score example, and adds a
  copyright note for the textbook material.
- **[2.1.0] — 2026-10-05**: privacy requests. Students file them from their account page and
  you answer in Admin → Requests, so no email address has to be published.
- **[2.0.0] — 2026-10-05**: sign in with an `@iitj.ac.in` Google account to keep progress
  across devices (guest mode still works). Adds announcements, an admin panel with cohort
  weak spots and quiz dates, and a privacy notice with account deletion.
- **[1.2.0] — 2026-10-04**: adaptive practice. Smart sessions pick your mistakes, due
  reviews and weakest topics first. Topics are labelled weak, shaky or strong, the home page
  has a *Today* plan, and mock papers can lean toward your weak topics.
- **[1.1.0] — 2026-10-04**: answer options shuffle on every showing, which fixes the 76%-on-B
  bias inherited from the Quiz 1 site. Adds a Home link on every page and removes backup and
  restore from *My data*.
- **[1.0.0] — 2026-10-04**: first release. Imports all six Semester 1 courses (570
  questions) from the Quiz 1 repo with permanent IDs, and adds topic practice, flashcards,
  the question bank, mock papers and mistake revision.

## Licence

Three licences for three kinds of material: code under MIT, original notes and questions
under CC BY-NC-SA 4.0, and the underlying course material, which is not licensed here at
all. See [`LICENSE`](LICENSE).

Textbook-based notes are written in our own words and cite the book and chapter; they don't
reproduce the books and aren't a substitute for them. **Rights holders** (IIT Jodhpur, faculty,
textbook authors or publishers) who want anything changed or removed can message
[Rahul on LinkedIn](https://www.linkedin.com/in/iambeniwal/), and it will be taken down promptly.
