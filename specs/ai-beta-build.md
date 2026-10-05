# AI beta (v2.3) — build plan

Decisions live in [`ai-beta.md`](ai-beta.md). This file is the order of work. Tick items as
they land.

## State on 5 October 2026

- Live: v2.2.x content (about 1,884 questions), Google sign-in for `@iitj.ac.in`,
  sync, announcements, admin, privacy requests, the OG card.
- Supabase project `wrzxexhincklabhadhmk` (Mumbai). The CLI is installed, logged in and
  linked. Deploy with `supabase functions deploy <name> --use-api`. Read-only SQL with
  `supabase db query --linked "<sql>"`. Migrations so far were pasted into the SQL Editor
  by Rahul (no migration history table), so keep doing that, or ask before using
  `db query` to write.
- Secrets set: `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, `OPENAI_API_KEY`. Provider limits
  are $10 each. Anthropic is at about $10.95 after the test, so **raise it before the beta
  opens**.
- `ai-pilot` Edge Function and Admin → AI test: the model test, finished. Keep them as the
  harness for re-testing a model later.
- Another Claude session ("Course books to IITJ folder") commits content to this repo.
  Stage only your own files, `git pull --rebase` before every push, and never use
  `git add -A`.

## Build order

1. **Schema (migration `…_ai_beta.sql`)**
   - [ ] `ai_settings`: one row holding the on/off switch, the daily ₹ budget, per-student
     limits, quiz-eve multiplier, and per-course writer and referee model.
   - [ ] `ai_beta_members` (user, status waitlist/approved/left, joined_at, approved_at,
     notice_version) and an admin approve function.
   - [ ] `ai_questions` (id `ai-<code>-<random>`, user, course, unit, topic, item jsonb,
     source fingerprint, writer/referee models, status live/withdrawn/rechecking,
     created_at).
   - [ ] `ai_lessons` (shared: course, unit, kind simpler/example, fingerprint; personal:
     user, kind confusion).
   - [ ] `ai_usage` (one row per call: user, feature, model, role, tokens, ₹/$ cost, ok).
   - [ ] `reports` (question id, which can be bank or AI; user; reason; note; status) and a
     limit of 20 per user per day.
   - [ ] Widen `attempts.qid` to accept `ai-…` ids. Withdrawing a question deletes its
     attempts.
   - [ ] Extend the RLS tests in `tools/test-db.mjs`.
2. **Edge Function `ai`** (separate from `ai-pilot`)
   - [ ] Gate: signed in, `is_member`, approved beta member, not suspended, AI on, under
     the daily budget and the student's own limits, not inside a quiz window for that
     course.
   - [ ] `generate`: 10 questions on the student's weakest topic in a unit. Writer and
     referee per course from `ai_settings`. Run format checks, near-duplicate checks
     against the bank **and the student's own pool**, and the blind re-solve; keep only
     passes.
   - [ ] `lesson`: shared simpler/example (cached by unit fingerprint) and personal
     confusion (uses the student's wrong answers; never name or email).
   - [ ] Refusal fallbacks on for Claude calls, which they weren't in the test.
   - [ ] `recheck`: when a unit's fingerprint changes, re-solve its AI questions; withdraw
     the ones that fail.
   - [ ] `pregenerate`: the day before a quiz, shared lessons for every unit in scope.
3. **Client**
   - [ ] Account → Join the AI beta (the four-line notice) and the waiting-list status.
   - [ ] On each topic: "More questions (AI)" and "Explain this further". AI questions are
     labelled and fill the "new" slots in smart sessions.
   - [ ] Report a problem on every question; hide a reported AI question for its reporter.
   - [ ] Privacy notice: an "AI features" section naming Anthropic and Google.
4. **Admin**
   - [ ] Beta members: approve and remove, capped at 50.
   - [ ] AI settings: switch, budget, limits, models per course.
   - [ ] Review queue: withdraw, fix, dismiss, promote (promote gives a bank ID through a
     content commit).
   - [ ] Usage: cost per active student per day, the heaviest users, report rate by model.
5. **Close-out tooling**
   - [ ] The willingness-to-pay survey (3 questions) and the beta report.
