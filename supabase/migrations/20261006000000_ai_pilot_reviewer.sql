-- =====================================================================
-- BSMT Study Hub: the model test gets an independent AI reviewer.
--
-- The blind review was meant to be done by a person, but it needs
-- someone who already knows the Quiz 2 material. OpenAI's
-- gpt-6.1-sol (not one of the four contestants) does it instead,
-- against the same notes and rubric, and records a reason for each
-- verdict. Run once: SQL Editor → New query → paste → Run.
-- =====================================================================

alter table public.ai_pilot_calls drop constraint ai_pilot_calls_role_check;
alter table public.ai_pilot_calls add constraint ai_pilot_calls_role_check
  check (role in ('generate', 'referee', 'review'));

alter table public.ai_pilot_reviews
  add column reviewer text not null default 'human',   -- 'human' or e.g. 'openai:gpt-6.1-sol'
  add column reasons  jsonb;                           -- {key, single, grounded, distractors, correct_index}
