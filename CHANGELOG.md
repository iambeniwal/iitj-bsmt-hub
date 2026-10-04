# Changelog

All notable changes to the BSMT Study Hub are recorded here.
Format follows [Keep a Changelog](https://keepachangelog.com/); dates are YYYY-MM-DD (IST).

**Corrections are load-bearing.** Where an entry reverses advice an earlier version gave,
it is filed under **Fixed** and says so plainly, because anyone who revised from the earlier
version needs to know what moved.

History before 1.0.0 (the Quiz 1 sheets, versions 1.0.0–2.7.0) is in the
[iitj-bsmtsem1-quiz1-prep changelog](https://github.com/iambeniwal/iitj-bsmtsem1-quiz1-prep/blob/main/CHANGELOG.md).

## [1.0.0] — 2026-10-04

### Added
- **The hub**: one app for the whole programme instead of one page per Quiz 1 sheet.
  Built from the features classmates asked for after Quiz 1.
- **Topic-wise practice**: every topic in every course has its own drill and a
  mastery bar, on the course's *Topics & practice* tab. Practice can also be limited to
  unseen questions, flagged questions, your mistakes, or the questions taken from a
  course's own slide deck.
- **Flashcards**: 214 cards made from every trap (131) and every key definition (83)
  in the notes, scheduled by a simplified SM-2 spaced-repetition algorithm. Fifteen new
  cards a session; due cards come first.
- **Master question bank**: all 570 questions across the six courses in one
  searchable list, filterable by course, topic and status. Any filtered set can be
  drilled.
- **Mock papers**: a full-length paper on the real clock (for example, Foundations of
  Computing Quiz 1 at 60 questions in 20 minutes), with no answers shown until you
  submit. Marked with the real scheme, including −0.25 negative marking, and shown as a
  **colour-coded question grid**, which the LMS report page does not have. A quiz whose
  date is not announced yet borrows the format of the course's last quiz.
- **Mistake revision**: every question you get wrong lands in *Mistakes*, and so does a
  mock question you read but left blank. It stays until you answer it correctly **twice
  in a row**, so a lucky guess doesn't clear it. Each topic links to its notes.
- **Assessments tab** per course: the grading split as a bar, every quiz and the
  end-term with its status, the Quiz 1 brief, and your mock-paper history.
- **My data**: progress lives only in the browser. Export and import a backup file to
  keep it safe or to move it between devices.
- **Permanent IDs** for every question (`foc-q0001`), trap (`foc-t0001`) and definition
  (`foc-d0001`), recorded in the append-only `ids.lock`. Saved progress is keyed by them.
- **`tools/check.js`**, a content checker that fails on duplicate, malformed or unlocked
  IDs, out-of-range answers, and topics with no notes unit.
- **`tools/build-offline.py`**: the whole hub as one self-contained HTML file (about
  640 KB) for WhatsApp or email.

### Changed
- Content is split from schedule. Dates, grading and assessment formats live in
  `content/program.js`; notes and questions live in `content/sem1/<course>.js`.

### Fixed
- **Nine DIKW ladder questions in Foundations of Computing showed a literal
  `&mdash;`** in the question text on the old site, because the text was HTML-encoded and
  then escaped a second time. Question, option and explanation text is now plain text,
  and the checker rejects HTML entities in those fields.
