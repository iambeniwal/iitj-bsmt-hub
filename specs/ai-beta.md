# AI beta (v2.3) — design decisions

Agreed with Rahul in a design interview on 5 October 2026. This is the brief the build
follows. Change a decision here first, then in code.

## 1. What the beta is for

- **Measure cost per student** and **check quality**, especially the accuracy of AI-written
  questions. Engagement (does anyone come back?) is read from the same logs.

## 2. Features, in order

1. **New questions on your weak topics:** a batch of 10, written from that topic's notes.
2. **Lessons on a topic** ("Explain this further"): explanation, worked example, the usual
   confusion, and 3 check-yourself questions. Fixed options only: *Simpler*, *Give me an
   example*, *I keep mixing this up with…* (that one uses the student's own wrong answers).
   **No free-text box** in the beta.
   - *Simpler* and *Example* lessons are the same for everyone: generate once, store, serve
     free. Only the personal variant costs each time.
- Later, not in v2.3: tutor chat, marking handwritten Python.

## 3. Quality gate (every AI question, before a student sees it)

1. Written only from the unit's notes; the explanation cites where in the notes.
2. **Blind re-solve:** a separate call answers without seeing the key; any mismatch means the
   question is discarded.
3. Format checks: one correct option (unless `multi`), no positional references, length
   limits, not a near-duplicate of a bank question.
4. Passed questions go to **that student's own pool**, labelled *AI-written*, with **Report a
   problem**.
5. Only an admin can **promote** one into the shared bank (permanent ID, same rules as any
   other question). **Mock papers use the shared bank only.**

## 4. How AI questions affect progress

- **Counted but removable.** They count toward mistakes, topic strength and smart sessions,
  marked *AI-written*.
- If one is withdrawn, every answer to it is removed from every student's stats.
- Smart sessions keep bank mistakes and due reviews first; AI questions mainly fill the
  "new" slots once a topic's bank questions run out.
- The database's question-ID rule widens to accept AI IDs (e.g. `ai-foc-<random>`).

## 5. Access and limits

- **Opt-in waiting list, admin approves, cap of 50** (out of 400+ students). Joining means
  accepting the beta notice (§9). Everyone else sees *In beta / You're on the waiting list*.
- **Per student per day:** 3 question batches + 5 personal lessons. Shared lessons are
  unlimited.
- **Quiz eve:** limits double for that course in the 24 hours before its quiz.
- **Global daily budget** in ₹: when it's reached, AI pauses for the day with a friendly
  message. **Off switch** in Admin. All limits can be edited in Admin.
- **Quiz lock:** AI off for a course **only from that quiz's start time to its end time**
  (not the join buffer, not other courses). Dates come from Admin → Quiz dates.
- **The day before each quiz**, pre-generate the shared lessons for every topic in that
  quiz's syllabus.

## 6. Models — decided by a test, not by opinion

- **Candidates:** Claude Opus 5, Claude Sonnet 5, Gemini Pro, Gemini Flash (paid tier only,
  for its data terms).
- **Test:** 60 questions per model (10 per course) from identical notes and instructions.
  **One fixed referee** (Opus 5) re-solves all 240 blind.
- **Automatic measures (all 240):** referee disagreement, format failures, near-duplicates,
  cost and time per batch.
- **Blind human review:** 80 questions (20 per model, spread across courses), shuffled with
  model labels removed. Graded on correct key, single defensible answer, grounded in notes,
  and distractor quality (1–3).
- **Passing rule, fixed before results:** for each course, a model qualifies if its sample
  has 0 wrong keys, at most 1 in 10 ambiguous, and under 15% rejected by the referee. Use
  **the cheapest qualifying model per course**.
- The provider and model are **swappable per course from Admin**.

### Result (5 October 2026)

- **Two runs**, 480 questions in all, 0 failed calls. Total cost $14.56: Anthropic $10.95
  (including the referee), Google $2.85, OpenAI $0.76.
- **The human blind review was replaced by an independent AI reviewer**, OpenAI
  `gpt-6.1-sol` (not a contestant), because judging Quiz 2 material needs someone who
  already knows it. It used the same rubric and notes, blind to which model wrote what, with
  a reason for every verdict. Both runs' samples were reviewed: 160 questions, 6–8 per
  course and model. As a cross-check, every calculation key in run 2's sample was verified
  independently by running the code and redoing the arithmetic: 30/30 correct.
- **Wrong keys: one flagged in 160** (Gemini Pro, hashing). On inspection the key is
  defensible ("a deliberately slow password hash makes lookups severely delayed"), so the
  flag is the reviewer being strict. Referee agreement across all 480 was about 99%.
- **Verdict by the fixed rule, both runs combined.** Not overridden, even where Claude
  would have judged a borderline "ambiguous" differently. Overriding the independent
  reviewer would bring back the bias it was there to remove.

  | Course | Writer | Notes |
  |---|---|---|
  | FoC, EBH, ATB, SfM | **Gemini 3.8 Flash** | passes; about $0.04–0.09 per 10 Q |
  | FA | **Claude Sonnet 5** | Flash 1 ambiguous in 6 (deferrals vs accruals, borderline) |
  | PoM | **Claude Sonnet 5** | Flash 1 ambiguous in 6 (overlapping journey capabilities, fair) |

- **Referees: a different provider from the writer**, so their errors are less correlated.
  **Claude Sonnet 5** referees the Flash courses; **Gemini 3.1 Pro** referees FA and PoM
  (Sonnet shouldn't check its own questions). About ₹10 per batch of 10 for the Flash
  courses and ₹19 for FA and PoM, writing plus checking.
- **Watch in the beta:** Gemini 3.8 Flash's price doubles on 1 January 2027 (still the
  cheapest); Gemini 3.1 Pro is a preview model. Admin can switch any course's models if
  report rates disagree with this verdict.
- **Carry into the beta:** models re-use the notes' worked examples (four variants of the
  metro-fare problem in one sample), so near-duplicate checks must also run within each
  student's own pool. Explanations can be wrong even when the key is right: one cited two
  laptops the question never mentioned. Only student reports catch that.

## 7. Knowledge base

- Generate only from **committed, live notes** (lectures plus textbook notes; v2.2.x took
  this to Week 8). Facts that only appear in a textbook are labelled *from the textbook*;
  the lecture wins where the two disagree.
- **When notes change:** each AI question and stored lesson records its unit and a
  fingerprint of the unit's text. A changed fingerprint triggers a free blind re-check
  against the new notes:
  - pass: keep it
  - fail: withdraw it (answers removed) and queue it for review
  - stored lessons: regenerate them
  - promoted bank questions: re-check, but never withdraw automatically; queue instead

## 8. Reporting and review

- **Report a problem** on **every** question (bank and AI), with five reasons: wrong key /
  more than one correct / not in my syllabus / unclear wording / other, plus an optional
  note.
  - **AI question:** hidden from the reporter at once, and their answers to it stop
    counting.
  - **Bank question:** stays visible; after **3 different reporters** it shows *Under
    review*.
- **Admin → Review:** Withdraw · Fix and keep (bank fixes go into the next content
  release) · Dismiss · Promote.
- No notifications. The reporter sees the outcome when they next meet the question. Limit:
  20 reports per student per day.

## 9. Data and privacy

- **Sent to the provider:** the unit's notes, the topic and course, and (for personal
  features only) the text of the student's wrong questions and the options they picked.
  **Never** a name, email or account ID; each request carries a random reference.
- **Stored:** the generated questions and lessons, plus one usage row per request: user,
  feature, model, tokens in and out, cost, referee result. Raw prompts are not stored.
- **Beta notice (accepted on joining):** AI questions can be wrong, so report and check the
  notes; wrong answers (never name or email) go to Anthropic or Google; AI use is counted;
  you can leave at any time.
- **Privacy notice** gains an "AI features" section naming the providers, what is sent, and
  the paid tiers that don't train on our data.

## 10. Accounts, keys and spend

- Billing on **Rahul's personal accounts**, never Dragonglass: a personal Anthropic Console
  organisation, and a Google AI / Cloud project on his personal Google account (not IITJ).
- Keys go only into **Supabase Edge Function secrets**. The browser calls our function, which
  checks sign-in, beta membership, limits, the budget and the quiz lock before calling a
  provider.
- **Three layers of limits:** the in-hub caps (§5), an Anthropic workspace spend limit, and a
  Google budget alert plus quota. **Start at $10 per provider.** The test will use most of
  the Anthropic $10 (Opus writes and referees), so raise the limit from real figures before
  opening to testers.

## 11. Timeline

1. Knowledge base ready (done: v2.2.x).
2. Model test plus Rahul's blind review (about 1 hour), then pick a model per course.
3. Beta opens for the approved testers.
4. Beta closes **3 days after the last Quiz 2**, and runs at least two weeks.
5. Close-out report: cost per active student per day (median and heaviest), report rate by
   model and course, and usage of questions versus lessons. AI stays on for the 50 testers
   at the same limits until the subscription launches.

## 12. After the beta: subscription

- **Free forever:** notes, the bank, flashcards, mocks, mistakes, smart sessions, shared
  lessons. **Paid add-on:** AI question generation and personal lessons. The free side is
  built from course material, and charging for that is where the takedown risk lies.
- The beta notice says the AI is planned to become paid later.
- A three-question survey at close: would you pay; monthly, per semester or per quiz; up to
  how much. Price = cost per student (§11) against willingness to pay.
- The 50 testers get their **first paid month free**.
- Still to check before charging: IITJ rules on students running a paid service; Razorpay
  KYC; a qualified review of the privacy notice.
