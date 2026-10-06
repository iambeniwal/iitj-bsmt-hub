-- =====================================================================
-- BSMT Study Hub: the AI beta (v2.3). Design: specs/ai-beta.md.
--
-- Run once, after the earlier migrations: SQL Editor → New query →
-- paste → Run.
--
--   ai_settings      one row: the switch, budget, limits, models
--   ai_beta_members  the waiting list and who is approved (cap 50)
--   ai_questions     AI-written questions, each in one student's pool
--   ai_lessons       "Explain this further": shared or personal
--   ai_requests      one row per student action (a batch, a lesson)
--   ai_usage         one row per provider call: tokens and cost
--   reports          "Report a problem", on bank and AI questions
--
-- Who writes what: students write only through the functions below
-- (join, leave) and by filing reports. Questions, lessons and usage are
-- written by the `ai` Edge Function with the service key, after it has
-- checked membership, limits, the budget and the quiz lock. Admins
-- change settings, members and report outcomes.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. Settings: a single row, edited from Admin → AI
-- ---------------------------------------------------------------------
create table public.ai_settings (
  id                 integer primary key default 1 check (id = 1),
  enabled            boolean not null default false,          -- the off switch
  daily_budget_inr   numeric(10, 2) not null default 500 check (daily_budget_inr >= 0),
  usd_inr            numeric(8, 2) not null default 88 check (usd_inr > 0),
  batches_per_day    integer not null default 3 check (batches_per_day >= 0),     -- question batches, per student
  lessons_per_day    integer not null default 5 check (lessons_per_day >= 0),     -- personal lessons, per student
  batch_size         integer not null default 10 check (batch_size between 1 and 20),
  eve_multiplier     numeric(4, 2) not null default 2 check (eve_multiplier >= 1), -- the 24 h before a course's quiz
  member_cap         integer not null default 50 check (member_cap >= 0),
  notice_version     integer not null default 1,              -- bump when the beta notice changes
  reports_per_day    integer not null default 20 check (reports_per_day >= 0),
  review_threshold   integer not null default 3 check (review_threshold >= 1),    -- reporters before a bank question shows "Under review"
  -- writer and referee per course (specs/ai-beta.md §6): referees are a different provider from the writer
  models             jsonb not null default '{
    "foundations-of-computing":         {"writer": "gemini-flash", "referee": "sonnet"},
    "economic-business-history":        {"writer": "gemini-flash", "referee": "sonnet"},
    "algorithmic-thinking-in-business": {"writer": "gemini-flash", "referee": "sonnet"},
    "statistics-for-managers":          {"writer": "gemini-flash", "referee": "sonnet"},
    "financial-accounting":             {"writer": "sonnet",       "referee": "gemini-pro"},
    "principles-of-marketing":          {"writer": "sonnet",       "referee": "gemini-pro"}
  }',
  updated_at         timestamptz not null default now(),
  updated_by         uuid default auth.uid() references auth.users on delete set null
);
insert into public.ai_settings (id) values (1);
alter table public.ai_settings enable row level security;
create policy "members read" on public.ai_settings for select to authenticated using (public.is_member());
create policy "admin changes" on public.ai_settings for update to authenticated using (public.is_admin()) with check (public.is_admin());
revoke all on public.ai_settings from anon;
revoke insert, delete on public.ai_settings from authenticated;

create function public.ai_settings_touch() returns trigger
language plpgsql set search_path = '' as $$
begin
  new.id := 1; new.updated_at := now(); new.updated_by := auth.uid();
  return new;
end $$;
create trigger ai_settings_touch before update on public.ai_settings
  for each row execute function public.ai_settings_touch();

-- the start of today in India, which is when daily limits reset
create function public.ai_day_start() returns timestamptz
language sql stable set search_path = '' as $$
  select date_trunc('day', now() at time zone 'Asia/Kolkata') at time zone 'Asia/Kolkata'
$$;

-- ---------------------------------------------------------------------
-- 2. Beta members: waiting list → approved by an admin (cap 50)
-- ---------------------------------------------------------------------
create table public.ai_beta_members (
  user_id        uuid primary key references auth.users on delete cascade,
  status         text not null default 'waitlist' check (status in ('waitlist', 'approved', 'left', 'removed')),
  notice_version integer not null,          -- the beta notice they accepted
  joined_at      timestamptz not null default now(),
  approved_at    timestamptz,
  changed_at     timestamptz not null default now(),
  changed_by     uuid references auth.users on delete set null
);
create index ai_beta_members_queue on public.ai_beta_members (status, joined_at);
alter table public.ai_beta_members enable row level security;
create policy "own row, or admin" on public.ai_beta_members
  for select to authenticated using (user_id = auth.uid() or public.is_admin());
revoke all on public.ai_beta_members from anon;
revoke insert, update, delete on public.ai_beta_members from authenticated;

create function public.is_ai_member() returns boolean
language sql stable security definer set search_path = '' as $$
  select public.is_member()
     and exists (select 1 from public.ai_beta_members m where m.user_id = auth.uid() and m.status = 'approved')
$$;

-- join the waiting list, accepting the current beta notice. Re-joining
-- after leaving puts you at the back of the queue.
create function public.ai_beta_join(accepted_notice integer) returns text
language plpgsql security definer set search_path = '' as $$
declare cur integer; st text;
begin
  if not public.is_member() then raise exception 'Sign in with your IITJ account first.'; end if;
  select notice_version into cur from public.ai_settings where id = 1;
  if accepted_notice is distinct from cur then raise exception 'The beta notice has changed. Reload the page and read it again.'; end if;
  select status into st from public.ai_beta_members where user_id = auth.uid();
  if st in ('waitlist', 'approved') then return st; end if;
  if st = 'removed' then raise exception 'Your place in the AI beta was removed. Message Rahul Beniwal if you think that is a mistake.'; end if;
  insert into public.ai_beta_members (user_id, status, notice_version, joined_at, changed_at, changed_by)
  values (auth.uid(), 'waitlist', cur, now(), now(), auth.uid())
  on conflict (user_id) do update set status = 'waitlist', notice_version = cur, joined_at = now(),
    approved_at = null, changed_at = now(), changed_by = auth.uid();
  return 'waitlist';
end $$;

create function public.ai_beta_leave() returns void
language sql security definer set search_path = '' as $$
  update public.ai_beta_members set status = 'left', changed_at = now(), changed_by = auth.uid()
  where user_id = auth.uid() and status in ('waitlist', 'approved')
$$;

-- what the client needs to draw the AI parts of the hub, in one call
create function public.ai_status() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare s public.ai_settings; m public.ai_beta_members; pos integer; approved integer;
begin
  if not public.is_member() then return jsonb_build_object('member', false); end if;
  select * into s from public.ai_settings where id = 1;
  select * into m from public.ai_beta_members where user_id = auth.uid();
  select count(*) into approved from public.ai_beta_members where status = 'approved';
  if m.status = 'waitlist' then
    select count(*) + 1 into pos from public.ai_beta_members w
    where w.status = 'waitlist' and w.joined_at < m.joined_at;
  end if;
  return jsonb_build_object(
    'member', true,
    'status', coalesce(m.status, 'none'),
    'position', pos,
    'enabled', s.enabled,
    'notice_version', s.notice_version,
    'seats_left', greatest(s.member_cap - approved, 0),
    'limits', jsonb_build_object('batches', s.batches_per_day, 'lessons', s.lessons_per_day,
                                 'eve_multiplier', s.eve_multiplier, 'batch_size', s.batch_size),
    'used', jsonb_build_object(
      'batches', (select count(*) from public.ai_requests r where r.user_id = auth.uid()
                  and r.feature = 'questions' and r.ok and r.created_at >= public.ai_day_start()),
      'lessons', (select count(*) from public.ai_requests r where r.user_id = auth.uid()
                  and r.feature = 'lesson_personal' and r.ok and r.created_at >= public.ai_day_start())),
    'reports_today', (select count(*) from public.reports r where r.user_id = auth.uid() and r.created_at >= public.ai_day_start())
  );
end $$;

-- ---------------------------------------------------------------------
-- 3. AI-written questions: each one lives in one student's own pool
-- ---------------------------------------------------------------------
create table public.ai_questions (
  id           text primary key check (id ~ '^ai-[a-z]{2,3}-[a-z0-9]{8}$'),
  user_id      uuid not null references auth.users on delete cascade,
  course       text not null,
  unit         text not null,
  topic        text not null,
  item         jsonb not null,             -- {q, o: [...], a, w, multi?, cite}: the bank's question shape
  fingerprint  text not null,              -- hash of the unit's notes it was written from
  writer       text not null,              -- model keys from ai_settings.models
  referee      text not null,
  request_id   uuid,                       -- the ai_requests row that made it
  -- live: in the pool · reported: its owner reported it, hidden from them, waiting for review ·
  -- rechecking: notes changed, being re-solved · withdrawn: removed for good · promoted: copied into the bank
  status       text not null default 'live' check (status in ('live', 'reported', 'rechecking', 'withdrawn', 'promoted')),
  status_note  text,
  promoted_id  text check (promoted_id ~ '^[a-z]{2,3}-q[0-9]{4}$'),
  created_at   timestamptz not null default now(),
  changed_at   timestamptz not null default now()
);
create index ai_questions_pool on public.ai_questions (user_id, course, status);
create index ai_questions_unit on public.ai_questions (course, unit, fingerprint);
alter table public.ai_questions enable row level security;
create policy "own pool, or admin" on public.ai_questions
  for select to authenticated using ((user_id = auth.uid() and public.is_member()) or public.is_admin());
revoke all on public.ai_questions from anon;
revoke insert, update, delete on public.ai_questions from authenticated;

-- ---------------------------------------------------------------------
-- 4. Lessons. Shared ones (simpler, example) are written once per topic
--    and notes version and read free by everyone signed in; personal
--    ones (confusion) use one student's wrong answers and are theirs.
-- ---------------------------------------------------------------------
create table public.ai_lessons (
  id           bigint generated always as identity primary key,
  user_id      uuid references auth.users on delete cascade,   -- null = shared
  kind         text not null check (kind in ('simpler', 'example', 'confusion')),
  course       text not null,
  unit         text not null,
  topic        text not null,
  fingerprint  text not null,
  model        text not null,
  body         jsonb not null,             -- {explanation, example, confusion, checks: [3 questions]}
  status       text not null default 'live' check (status in ('live', 'stale', 'withdrawn')),
  request_id   uuid,
  created_at   timestamptz not null default now(),
  check ((kind = 'confusion') = (user_id is not null))
);
create unique index ai_lessons_shared on public.ai_lessons (course, topic, kind, fingerprint)
  where user_id is null and status = 'live';
create index ai_lessons_own on public.ai_lessons (user_id, course, topic);
alter table public.ai_lessons enable row level security;
create policy "shared, own, or admin" on public.ai_lessons
  for select to authenticated using (
    (user_id is null and status = 'live' and public.is_member())
    or (user_id = auth.uid() and public.is_member())
    or public.is_admin());
revoke all on public.ai_lessons from anon;
revoke insert, update, delete on public.ai_lessons from authenticated;

-- ---------------------------------------------------------------------
-- 5. Usage: a request is one student action; it makes one or more
--    provider calls. Limits count successful requests; the budget counts
--    the cost of every call, failed or not. Raw prompts are not stored.
-- ---------------------------------------------------------------------
create table public.ai_requests (
  id          uuid primary key default gen_random_uuid(),   -- also the random reference sent to providers
  user_id     uuid references auth.users on delete set null, -- null: system work (pre-generation, re-checks)
  feature     text not null check (feature in ('questions', 'lesson_shared', 'lesson_personal', 'recheck', 'pregenerate')),
  course      text not null,
  unit        text,
  topic       text,
  ok          boolean not null default false,
  kept        integer,                       -- questions that passed every check
  asked       integer,                       -- questions written
  error       text,
  cost_inr    numeric(10, 4) not null default 0,
  created_at  timestamptz not null default now(),
  finished_at timestamptz
);
create index ai_requests_user_day on public.ai_requests (user_id, feature, created_at);
create index ai_requests_day on public.ai_requests (created_at);

create table public.ai_usage (
  id            bigint generated always as identity primary key,
  request_id    uuid references public.ai_requests on delete cascade,
  model         text not null,
  role          text not null check (role in ('write', 'referee', 'lesson', 'recheck')),
  input_tokens  integer not null default 0,
  output_tokens integer not null default 0,
  cost_usd      numeric(10, 6) not null default 0,
  cost_inr      numeric(10, 4) not null default 0,
  ms            integer not null default 0,
  ok            boolean not null,
  error         text,
  created_at    timestamptz not null default now()
);
create index ai_usage_day on public.ai_usage (created_at);

alter table public.ai_requests enable row level security;
alter table public.ai_usage enable row level security;
create policy "own, or admin" on public.ai_requests
  for select to authenticated using ((user_id = auth.uid() and public.is_member()) or public.is_admin());
create policy "admin" on public.ai_usage for select to authenticated using (public.is_admin());
revoke all on public.ai_requests, public.ai_usage from anon;
revoke insert, update, delete on public.ai_requests, public.ai_usage from authenticated;

-- spend so far today, in ₹, against ai_settings.daily_budget_inr
create function public.ai_spent_today() returns numeric
language sql stable security definer set search_path = '' as $$
  select coalesce(sum(cost_inr), 0) from public.ai_usage where created_at >= public.ai_day_start()
$$;

-- ---------------------------------------------------------------------
-- 6. Reports: "Report a problem" on any question, bank or AI
-- ---------------------------------------------------------------------
create table public.reports (
  id          bigint generated always as identity primary key,
  user_id     uuid not null default auth.uid() references auth.users on delete cascade,
  qid         text not null check (qid ~ '^([a-z]{2,3}-q[0-9]{4}|ai-[a-z]{2,3}-[a-z0-9]{8})$'),
  reason      text not null check (reason in ('wrong_key', 'multiple_correct', 'not_in_syllabus', 'unclear', 'other')),
  note        text check (length(note) <= 1000),
  status      text not null default 'open' check (status in ('open', 'withdrawn', 'fixed', 'dismissed', 'promoted')),
  resolution  text check (length(resolution) <= 2000),
  created_at  timestamptz not null default now(),
  resolved_at timestamptz,
  resolved_by uuid references auth.users on delete set null,
  unique (user_id, qid)                    -- one report per student per question
);
create index reports_open on public.reports (status, qid);
alter table public.reports enable row level security;

-- whatever the client sends, a report is stamped as the caller's and
-- starts open; the daily limit is checked here
create function public.report_stamp() returns trigger
language plpgsql security definer set search_path = '' as $$
declare lim integer;
begin
  new.user_id := auth.uid(); new.status := 'open'; new.resolution := null;
  new.created_at := now(); new.resolved_at := null; new.resolved_by := null;
  select reports_per_day into lim from public.ai_settings where id = 1;
  if (select count(*) from public.reports r where r.user_id = auth.uid() and r.created_at >= public.ai_day_start()) >= lim then
    raise exception 'You''ve reached today''s limit of % reports. Thank you, and please try again tomorrow.', lim;
  end if;
  -- an AI question can only be reported by its owner, the only person who sees it
  if new.qid like 'ai-%' and not exists (select 1 from public.ai_questions q where q.id = new.qid and q.user_id = auth.uid()) then
    raise exception 'question not found';
  end if;
  return new;
end $$;
create trigger report_stamp before insert on public.reports
  for each row execute function public.report_stamp();

-- reporting your AI question hides it from you at once, and your answers
-- to it stop counting (the status change below removes them)
create function public.report_hides_ai() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if new.qid like 'ai-%' then
    update public.ai_questions set status = 'reported', changed_at = now()
    where id = new.qid and status in ('live', 'rechecking');
  end if;
  return new;
end $$;
create trigger report_hides_ai after insert on public.reports
  for each row execute function public.report_hides_ai();

create policy "own reports, or admin" on public.reports
  for select to authenticated using ((user_id = auth.uid() and public.is_member()) or public.is_admin());
create policy "file a report" on public.reports
  for insert to authenticated with check (public.is_member());
revoke all on public.reports from anon;
revoke update, delete on public.reports from authenticated;

-- bank questions that enough different students have reported show
-- "Under review" to everyone, guests included. No reporter is named.
create function public.questions_under_review() returns setof text
language sql stable security definer set search_path = '' as $$
  select r.qid from public.reports r
  where r.status = 'open' and r.qid !~ '^ai-'
  group by r.qid
  having count(distinct r.user_id) >= (select review_threshold from public.ai_settings where id = 1)
$$;

-- ---------------------------------------------------------------------
-- 7. Progress from AI questions: counted, but removable
-- ---------------------------------------------------------------------
alter table public.attempts drop constraint attempts_qid_check;
alter table public.attempts add constraint attempts_qid_check
  check (qid ~ '^([a-z]{2,3}-q[0-9]{4}|ai-[a-z]{2,3}-[a-z0-9]{8})$');

-- an answer to an AI question is kept only while that question is live
-- in the student's own pool. Anything else is dropped without an error,
-- so a browser syncing old answers to a withdrawn question can't bring
-- them back, and one stale row doesn't fail the rest of its batch.
create function public.attempts_ai_guard() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if new.qid like 'ai-%' and not exists (
       select 1 from public.ai_questions q
       where q.id = new.qid and q.user_id = new.user_id and q.status in ('live', 'rechecking')) then
    return null;
  end if;
  return new;
end $$;
create trigger attempts_ai_guard before insert on public.attempts
  for each row execute function public.attempts_ai_guard();

-- when a question leaves the pool (reported, withdrawn), every answer to it goes
create function public.ai_question_left_pool() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if new.status in ('reported', 'withdrawn') and old.status not in ('reported', 'withdrawn') then
    delete from public.attempts where qid = new.id;
    delete from public.flags where qid = new.id;
  end if;
  return new;
end $$;
create trigger ai_question_left_pool after update of status on public.ai_questions
  for each row execute function public.ai_question_left_pool();

-- ---------------------------------------------------------------------
-- 8. Admin
-- ---------------------------------------------------------------------

-- the waiting list and members, with their AI use
create function public.admin_ai_members()
returns table (user_id uuid, email text, name text, status text, joined_at timestamptz, approved_at timestamptz,
               batches_7d bigint, lessons_7d bigint, cost_inr_7d numeric, reports_open bigint, last_used timestamptz)
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  return query
    select m.user_id, p.email, p.name, m.status, m.joined_at, m.approved_at,
      (select count(*) from public.ai_requests r where r.user_id = m.user_id and r.feature = 'questions' and r.ok and r.created_at > now() - interval '7 days'),
      (select count(*) from public.ai_requests r where r.user_id = m.user_id and r.feature = 'lesson_personal' and r.ok and r.created_at > now() - interval '7 days'),
      (select coalesce(sum(r.cost_inr), 0) from public.ai_requests r where r.user_id = m.user_id and r.created_at > now() - interval '7 days'),
      (select count(*) from public.reports x where x.user_id = m.user_id and x.status = 'open'),
      (select max(r.created_at) from public.ai_requests r where r.user_id = m.user_id)
    from public.ai_beta_members m join public.profiles p on p.id = m.user_id
    order by case m.status when 'approved' then 0 when 'waitlist' then 1 else 2 end, m.joined_at;
end $$;

-- approve (within the cap), put back on the waiting list, or remove
create function public.admin_ai_member_set(target uuid, new_status text) returns void
language plpgsql security definer set search_path = '' as $$
declare cap integer; approved integer; cur text;
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  if new_status not in ('approved', 'waitlist', 'removed') then raise exception 'unknown status %', new_status; end if;
  select status into cur from public.ai_beta_members where user_id = target for update;
  if cur is null then raise exception 'not on the waiting list'; end if;
  if new_status = 'approved' and cur <> 'approved' then
    select member_cap into cap from public.ai_settings where id = 1;
    select count(*) into approved from public.ai_beta_members where status = 'approved';
    if approved >= cap then raise exception 'The beta is full (% of %). Remove someone or raise the cap first.', approved, cap; end if;
  end if;
  update public.ai_beta_members set status = new_status, changed_at = now(), changed_by = auth.uid(),
    approved_at = case when new_status = 'approved' then coalesce(approved_at, now()) else approved_at end
  where user_id = target;
end $$;

-- a report's outcome. For an AI question:
--   withdraw  removed for good (answers already gone when it was reported)
--   dismiss   nothing wrong: it goes back into its owner's pool
--   fix       the admin's corrected item replaces it, back in the pool
--   promote   it goes into the bank through a content commit (promoted_id)
-- For a bank question every outcome is a record; fixes ship in the next content release.
create function public.admin_report_resolve(report_id bigint, outcome text, admin_note text default null,
                                            fixed_item jsonb default null, bank_id text default null) returns void
language plpgsql security definer set search_path = '' as $$
declare r public.reports;
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  if outcome not in ('withdrawn', 'fixed', 'dismissed', 'promoted') then raise exception 'unknown outcome %', outcome; end if;
  select * into r from public.reports where id = report_id for update;
  if r.id is null then raise exception 'report not found'; end if;
  if r.qid like 'ai-%' then
    if outcome = 'fixed' and fixed_item is null then raise exception 'a fix needs the corrected question'; end if;
    if outcome = 'promoted' and bank_id is null then raise exception 'promoting needs the new bank ID'; end if;
    update public.ai_questions set
      status = case outcome when 'withdrawn' then 'withdrawn' when 'promoted' then 'promoted' else 'live' end,
      item = coalesce(fixed_item, item),
      promoted_id = coalesce(bank_id, promoted_id),
      status_note = admin_note, changed_at = now()
    where id = r.qid;
  end if;
  -- every open report on the same question gets the same outcome
  update public.reports set status = outcome, resolution = admin_note, resolved_at = now(), resolved_by = auth.uid()
  where qid = r.qid and status = 'open';
end $$;

revoke execute on function
  public.ai_beta_join(integer), public.ai_beta_leave(), public.ai_status(), public.is_ai_member(),
  public.ai_spent_today(), public.admin_ai_members(), public.admin_ai_member_set(uuid, text),
  public.admin_report_resolve(bigint, text, text, jsonb, text)
  from public, anon;
grant execute on function
  public.ai_beta_join(integer), public.ai_beta_leave(), public.ai_status(), public.is_ai_member(),
  public.admin_ai_members(), public.admin_ai_member_set(uuid, text),
  public.admin_report_resolve(bigint, text, text, jsonb, text)
  to authenticated;
-- the Edge Function reads the spend with the service key
revoke execute on function public.ai_spent_today() from authenticated;
-- "Under review" labels are public, like the questions themselves
revoke execute on function public.questions_under_review() from public;
grant execute on function public.questions_under_review() to anon, authenticated;

-- the admin overview gains the beta's headline numbers
create or replace function public.admin_overview() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  return jsonb_build_object(
    'students',      (select count(*) from public.profiles),
    'new_7d',        (select count(*) from public.profiles where created_at > now() - interval '7 days'),
    'active_1d',     (select count(distinct user_id) from public.attempts where at > now() - interval '1 day'),
    'active_7d',     (select count(distinct user_id) from public.attempts where at > now() - interval '7 days'),
    'attempts_7d',   (select count(*) from public.attempts where at > now() - interval '7 days'),
    'attempts_all',  (select count(*) from public.attempts),
    'mocks_7d',      (select count(*) from public.mocks where at > now() - interval '7 days'),
    'suspended',     (select count(*) from public.profiles where suspended),
    'requests_open', (select count(*) from public.privacy_requests where status in ('received', 'in_progress')),
    'ai_approved',   (select count(*) from public.ai_beta_members where status = 'approved'),
    'ai_waitlist',   (select count(*) from public.ai_beta_members where status = 'waitlist'),
    'ai_spent_today',(select coalesce(sum(cost_inr), 0) from public.ai_usage where created_at >= public.ai_day_start()),
    'reports_open',  (select count(*) from public.reports where status = 'open')
  );
end $$;
revoke execute on function public.admin_overview() from public, anon;
grant execute on function public.admin_overview() to authenticated;
