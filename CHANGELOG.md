# Changelog

All notable changes to the BSMT Study Hub are recorded here.
Format follows [Keep a Changelog](https://keepachangelog.com/); dates are YYYY-MM-DD (IST).

**Corrections are load-bearing.** Where an entry reverses advice an earlier version gave,
it is filed under **Fixed** and says so plainly, because anyone who revised from the earlier
version needs to know what moved.

History before 1.0.0 (the Quiz 1 sheets, versions 1.0.0–2.7.0) is in the
[iitj-bsmtsem1-quiz1-prep changelog](https://github.com/iambeniwal/iitj-bsmtsem1-quiz1-prep/blob/main/CHANGELOG.md).

## [2.2.1] — 2026-10-05

### Fixed
- **Course material was labelled "not examinable" when it only missed Quiz 1.** Three notes
  topics carried quiz-era tags that read as if they were outside the course: Foundations of
  Computing's *Copying lists, and tuples* ("L16 · out of syllabus"), and History's *The water
  frame and the factory* and *Steam and Manchester*. Their banners even said "revise this
  last, or not at all". They now say which lecture taught them, that it came after the
  Quiz 1 cut-off, and that they are core material to expect in later quizzes and the final.
  The same fix applies to:
  - three flashcards (foc-d0016, foc-d0047, ebh-d0020) that showed "NOT EXAMINABLE" on the card;
  - History's "Modules 4 and 5 … do not revise them", which now says they come later in the
    semester, and flashcard ebh-d0004, which now lists the course's five modules;
  - the Quiz 1 briefs, which now say "was not in Quiz 1" in the past tense.

  The README now has the rule: scope belongs to an assessment, never to the course.

## [2.2.0] — 2026-10-05

### Fixed
- **Reusing `print` as a variable name is not an error.** The Foundations of Computing
  notes (*Variables and naming rules*) listed `print` with the keywords under "Rules —
  breaking these is an error". That was wrong. A **keyword** (`if`, `while`, `True`…) as a
  name is a SyntaxError. A **built-in** name like `print` is legal: `print = 5` runs, but
  the next `print("hi")` then fails with a TypeError, because 5 is not callable. Built-ins
  now sit under the style guidelines, with that explanation. No question depended on the
  old wording.
- **A z-score example didn't add up.** *Shape, z-scores and the two rules* (Statistics) and
  question sfm-q0046 said a rent of 70 with mean 50 and SD 50 gives z = −1. It gives
  z = (70 − 50) / 50 = **+0.4**. The example now uses mean 120 (z = (70 − 120) / 50 = −1),
  which keeps its point: two values on different scales sit at the same place. The
  question keeps its ID and answer.

- **"Trees and graphs are not examinable" was only true for Quiz 1.** Algorithmic Thinking
  trap atb-t0001 said so without qualification. It now says Quiz 1 stopped at linear
  structures, and that trees, graphs, hashing and blockchain (Lectures 12–20) should be
  expected from Quiz 2 on.
### Added
- **35 new lectures**, taken from the LMS on 5 October 2026: every lecture released since the
  Quiz 1 cut-offs, up to 4 October. They add 563 questions, 173 traps, 164 flashcard
  definitions, 93 notes topics and 77 diagrams. Each lecture appears in its course's
  lecture list, and new questions carry `lec: <number>`.

  | Course | Lectures | New questions | What they cover |
  |---|---|---|---|
  | Foundations of Computing | 17–21 | 77 | if statements (3 parts), Live Lecture 4, dictionaries part 1 |
  | Algorithmic Thinking | 12, 14–20 | 141 | trees, tree types, graphs, traversals, hashing, blockchain |
  | Economic & Business History | 17–21 | 84 | labour movements, colonies & mercantilism, Chartism, economic systems |
  | Financial Accounting | 16–21 | 90 | matching, adjusting entries, trading account, P&L account |
  | Statistics for Managers | 14–20 | 113 | continuous distributions, two applied cases, sampling distributions, CLT |
  | Principles of Marketing | 19–21, 23 | 58 | consumer decision making, decision journey, motivation theories |

  Exam hints the lecturers gave are kept in "From the lecture" boxes: what the final will
  look like, what "will be asked", and what is out of scope. Where a lecturer misspoke
  (an elif chain described backwards) or a slide or LMS summary had a wrong figure, the
  notes give the correct version and a trap explains the slip. Where the lecture and the
  textbook disagree, a trap says which to use.
- **Principles of Marketing quiz rule:** multiple-correct questions are marked all-or-nothing,
  with no partial marks (LMS announcement, 4 October). The Quiz 1 details now say so. The
  hub's own practice and mocks already mark these questions the same way.
- **207 diagrams in the notes**, across all six courses: flowcharts, decision trees,
  timelines, matrices (BCG, Ansoff, golden rules), trace tables (loops, binary search,
  stacks and queues), T-accounts, and computed charts (the normal curve, distribution
  shapes, Big-O growth, sampling distributions). 120 sit in the lecture notes, inside the
  topic they explain. 87 are in the *From the textbook* blocks.

  | Course | Diagrams |
  |---|---|
  | Foundations of Computing | 31 |
  | Algorithmic Thinking | 37 |
  | Economic & Business History | 33 |
  | Financial Accounting | 29 |
  | Statistics for Managers | 40 |
  | Principles of Marketing | 37 |

  Each one teaches a single idea, and its caption says what to notice. They use only the
  site's colour tokens, so they follow light and dark mode. On a phone they reflow, or
  scroll inside their own box. They work offline and need no new files. Every number,
  trace and code output in them was computed or run, not drawn by eye. Where the lecture
  and a book disagree on a date, the diagram shows both.
- **Textbook material for what has been taught so far.** It covers every lecture released
  on the LMS up to 4 October 2026, built from each course's prescribed or reference book:
  714 new questions, 220 traps, 308 flashcard definitions, plus chapter notes, case
  summaries, worked problems and "book vs lecture" notes. Units with new material are
  tagged *From the textbook*. Each block and question names its book and chapter (for
  example, `bk: "Anderson 14e ch3"`).

  | Course | Book chapters (taught so far) | New questions |
  |---|---|---|
  | Foundations of Computing | Python Crash Course ch 1–5 (to if statements) | 100 |
  | Algorithmic Thinking | Subero ch 1–6 and 12 (linear structures, trees, hashing, graphs, search) | 143 |
  | Economic & Business History | Allen *VSI* ch 3; Leigh intro + ch 1, 2, 4 | 104 |
  | Financial Accounting | Anthony, Hawkins & Merchant 13e ch 1–4 (to accruals, trading and P&L) | 94 |
  | Statistics for Managers | Anderson et al. 14e ch 1–7 (to sampling distributions) | 156 |
  | Principles of Marketing | Kotler & Armstrong 17e ch 1–3, 5, 7 (to consumer behaviour) | 117 |

  Textbook material arrives only once its topic has been lectured, so nothing here is
  ahead of the course. Dictionary nesting, while loops, sorting, pathfinding, inventory
  methods, Module 4 history and products/pricing will be added as those lectures are
  released. Where a book disagrees with what was taught (a date, a definition, a
  framework), the notes say so, and **the lecture or the official announcement wins for
  the quiz**.
- **Copyright note** in `README.md` and `LICENSE`: textbook notes are original wording
  and don't reproduce the books. Rights holders have a takedown contact.

## [2.1.0] — 2026-10-05

### Added
- **Privacy requests, without a published email address.** Signed-in students file one
  from **Account → Privacy request**: see what's held, correct it, delete it, or make a
  complaint. They see its status and the reply on the same page. It lands in a new
  **Admin → Requests** tab, which flags anything older than the promised reply window
  (`replyDays` in `content/program.js`, 7 days) and won't let a request be closed without
  a reply. The overview counts open requests.
  - The database stamps each request with the sender's own account and email, whatever
    the page sends, and an admin can't rewrite what the student wrote.
  - Suspended students can still file. A grievance route has to stay open to exactly the
    people most likely to have a grievance.
  - Requests are kept as a record of how each was handled, even after the account is
    deleted, and the privacy notice says so. At most five open per student.
- **A route for people who can't sign in**: `requestForm` in `content/program.js` holds a
  Google Form link. Until it's set, the notice points to LinkedIn.
- The privacy notice gains **How to make a request**, and states the reply window.
- `supabase/migrations/20261005120000_privacy_requests.sql`, and 12 more checks in
  `npm run test:db` (54 in all). One of them caught a real bug before release: the
  safeguard that stops an admin rewriting a request had also stopped account deletion from
  clearing the request's link to the deleted account.

## [2.0.0] — 2026-10-05

### Added
- **Sign in with Google, `@iitj.ac.in` accounts only.** Guest mode is unchanged and still
  needs nothing. Signing in saves progress (every answer, flag, flashcard review and mock
  paper) to your account, so it follows you between laptop and phone. The domain rule is
  enforced by the database itself, by a sign-up hook and by row-level security, not just by
  the page.
- **Guest progress moves into your account** the first time you sign in, and the page
  says how much came over. After that, a merge keeps the account, this browser and the
  database in step: nothing doubles up, and a flashcard keeps its most recent review.
- **Offline-safe sync.** Changes queue in the browser and upload in batches. If you're
  offline they wait and retry, and the account page shows how many are pending.
- **Updates**: announcements from the admin, readable by guests too. Pinned and new ones
  show at the top of the home page, and course-specific ones on that course's page, with
  an unread count in the top bar.
- **Admin panel** (`#/admin`, admin accounts only):
  - overview numbers
  - **cohort weak spots**: the topics and questions the whole batch gets wrong most, over
    7, 30 or 90 days
  - the student list, with suspend, restore and delete
  - an announcement editor with scheduling, expiry and pinning
  - **quiz dates**: set a quiz's date, length and syllabus as soon as the LMS announces it,
    and countdowns and mock papers follow with no code change
- **Privacy notice** (`#/privacy`): what is stored, why, who can see it, and how to delete
  it, written with India's DPDP Act, 2023 in mind.
- **Delete my account and data** on the account page. It erases the account and every row
  stored with it, immediately. **Reset everything** also clears the account's copy when
  you're signed in.
- **Signing out removes this browser's copy** of the account, so nothing is left on a
  shared computer.
- `supabase/migrations/`: the schema, with row-level security on every table.
  `supabase/README.md` covers the one-time setup.
- **Tests:** `npm run test:db` applies the migration to an in-memory Postgres and tries 42
  access paths as a guest, two students, a non-IITJ Google account and an admin.
  `npm run test:merge` runs 14 checks on the sync merge.
- A **keep-alive GitHub Action** that makes one small read every three days, so the free
  Supabase project never pauses.

### Changed
- The top bar has **Sign in** (or your initial, with a sync dot) in place of *My data*. The
  offline copy has no sign-in and keeps *My data*.
- The bank's search also matches a question ID exactly (for example `foc-q0012`).

## [1.2.0] — 2026-10-04

### Added
- **Smart sessions**: 20 questions chosen for you, from the home page or any course page.
  They come in order of need:
  1. your open mistakes, oldest first (up to half the session)
  2. questions you got right a while ago that are due a check (up to 30%)
  3. questions you haven't seen, rotating through topics with the weakest first
  4. refreshers, to fill any gap

  No topic takes more than about a third of a session. A brand-new student gets one
  question from each of 20 different topics, to find their level.
- **Spaced review for questions**, not just flashcards. A question you've answered right
  comes back after 1, 3, 7, 16, then 35 days of consecutive correct answers. Nothing new is
  stored: review dates are worked out from the attempt history the hub already keeps.
- **Topic strength labels** on every topic: *just started*, *weak* (under 60% right on
  recent answers, or a quarter of the topic is open mistakes), *shaky* (under 80%) and
  *strong*. Accuracy is smoothed, so one lucky answer doesn't count as mastery.
- **Today** on the home page: a smart session and your four weakest topics, each with a
  Drill button. Once a quiz is less than two weeks away, the session focuses on that
  course.
- **Weak spots** strip on each course's *Topics & practice* tab.
- **Mock papers that lean toward your weak topics**: an optional switch before you start.
  Questions from weak topics and open mistakes are more likely to appear, but the paper
  still covers the course. The mock history marks these as *weak-topic paper*.
- `assets/adapt.js`: the rules behind all of the above, with the thresholds written out
  at the top of the file.

### Changed
- Question counts on the home page and in the bank use thousands separators.

## [1.1.0] — 2026-10-04

### Fixed
- **76% of correct answers were option B.** This came over from the Quiz 1 site: of the 532
  single-answer questions, 405 had the answer in second place, against 30 for A, 84 for C
  and 13 for D. Picking B every time would have scored about 71% on a full practice run
  with no knowledge at all, which made both your scores and the mastery bars mean much
  less than they appeared to. **Options are now shuffled every time a question is shown**,
  in practice and in mock papers. A mock keeps one order per question for the whole paper
  and its review. Tested by answering all 570 questions with the same letter: always-A now
  scores 26% and always-B scores 22%, which is chance level.
  - Options that refer to the others ("Both", "Neither", "Either", "All three") stay at
    the end, where exams put them.
  - The nine Data / Information / Knowledge / Wisdom questions always show the rungs in
    ladder order, because that order is what they teach. Two of them (foc-q0033,
    foc-q0039) had been written in a different order and were reordered. Their answers
    are unchanged.
  - Three explanations named options by position ("Option 1 describes Knowledge…", "That
    last option describes a compiler") and would have been wrong after shuffling. They now
    name the option's content (foc-q0031, foc-q0032, foc-q0082).
  - The question bank lists options without letters, so the stored order can't read as a
    pattern either.

### Added
- **A Home link on every page.** Pages inside a course show the trail as well
  (`← Home / Foundations of Computing`).
- **Two new checker rules** in `tools/check.js`: it fails on an explanation that refers to
  an option by position, and warns if any course's answers would still land on one
  position more than 40% of the time after shuffling.
- `keep: true` on a question shows its options exactly as written.

### Removed
- **Backup and restore on *My data*.** Progress is browser-only until sign-in arrives, and
  the page now says plainly that clearing browser data deletes it. *Reset everything*
  stays.

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
  keep it safe or to move it between devices. *(Removed in 1.1.0.)*
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
