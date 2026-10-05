-- =====================================================================
-- BSMT Study Hub: the AI model test (specs/ai-beta.md §6)
--
-- Run once, after the two earlier migrations: SQL Editor → New query →
-- paste → Run.
--
-- Three tables, all admin-only:
--   ai_pilot_calls    one row per call to a provider: tokens, cost, time
--   ai_pilot_items    one row per generated question, its automatic
--                     checks and the referee's blind answer
--   ai_pilot_reviews  the admin's blind review of a sample of items
-- Nothing here is shown to students.
-- =====================================================================

create table public.ai_pilot_calls (
  id            uuid primary key default gen_random_uuid(),
  run           text not null,
  model         text not null,             -- opus · sonnet · gemini-pro · gemini-flash (the referee runs as opus)
  role          text not null check (role in ('generate', 'referee')),
  course        text not null,
  unit          text not null,
  input_tokens  integer not null default 0,
  output_tokens integer not null default 0,
  cost_usd      numeric(10, 6) not null default 0,
  ms            integer not null default 0,
  ok            boolean not null,
  error         text,
  created_at    timestamptz not null default now()
);

create table public.ai_pilot_items (
  id         bigint generated always as identity primary key,
  run        text not null,
  model      text not null,
  course     text not null,
  unit       text not null,
  item       jsonb not null,   -- {question, options[], answer_index, explanation, source_quote, kind}
  checks     jsonb not null,   -- {format_ok, problems[], quote_found, near_duplicate_of}
  referee    jsonb,            -- {choice, confidence, ambiguous, note, agrees}
  call_id    uuid references public.ai_pilot_calls on delete set null,
  created_at timestamptz not null default now()
);
create index ai_pilot_items_run on public.ai_pilot_items (run, model, course);

create table public.ai_pilot_reviews (
  item_id     bigint primary key references public.ai_pilot_items on delete cascade,
  pos         integer not null,          -- order shown in the blind review
  key_ok      boolean,
  single      boolean,                   -- only one defensible answer
  grounded    boolean,
  distractors smallint check (distractors between 1 and 3),
  note        text check (length(note) <= 1000),
  reviewed_at timestamptz
);

alter table public.ai_pilot_calls   enable row level security;
alter table public.ai_pilot_items   enable row level security;
alter table public.ai_pilot_reviews enable row level security;

create policy "admin only" on public.ai_pilot_calls   for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admin only" on public.ai_pilot_items   for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admin only" on public.ai_pilot_reviews for all to authenticated using (public.is_admin()) with check (public.is_admin());
revoke all on public.ai_pilot_calls, public.ai_pilot_items, public.ai_pilot_reviews from anon;
