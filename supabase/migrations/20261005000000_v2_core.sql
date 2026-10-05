-- =====================================================================
-- BSMT Study Hub — v2.0 core schema
--
-- Run once in the Supabase dashboard: SQL Editor → New query → paste →
-- Run. It is safe to run on an empty project; it is not written to be
-- re-run on top of itself.
--
-- Security model, in one paragraph: every table has row-level security
-- on. A student can read and write only their own rows, and only while
-- signed in with an @iitj.ac.in Google account that isn't suspended.
-- Announcements and assessment dates are readable by anyone (guests
-- included) and writable only by an admin. Admin rights live in
-- profiles.role, which no student can change: profiles has no UPDATE
-- grant at all, and every admin action goes through a function that
-- checks is_admin() itself.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. Profiles: one row per account, created automatically on sign-up
-- ---------------------------------------------------------------------
create table public.profiles (
  id         uuid primary key references auth.users on delete cascade,
  email      text not null,
  name       text,
  role       text not null default 'student' check (role in ('student', 'admin')),
  suspended  boolean not null default false,
  created_at timestamptz not null default now(),
  last_seen  timestamptz not null default now()
);
alter table public.profiles enable row level security;

create function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, lower(new.email),
          coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'));
  return new;
end $$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------
-- 2. Who counts as a member, and who is an admin
-- ---------------------------------------------------------------------
create function public.is_member() returns boolean
language sql stable security definer set search_path = '' as $$
  select coalesce(lower(auth.jwt() ->> 'email') like '%@iitj.ac.in', false)
     and exists (select 1 from public.profiles p where p.id = auth.uid() and not p.suspended)
$$;

create function public.is_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select public.is_member()
     and exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
$$;

create policy "own profile, or admin" on public.profiles
  for select to authenticated using (id = auth.uid() or public.is_admin());
revoke insert, update, delete on public.profiles from anon, authenticated;

-- ---------------------------------------------------------------------
-- 3. Progress: attempts, flashcard schedule, flags, mock papers
--    IDs (qid, card_id) are the hub's permanent content IDs.
-- ---------------------------------------------------------------------
create table public.attempts (
  id      bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  qid     text not null check (qid ~ '^[a-z]{2,3}-q[0-9]{4}$'),
  ok      boolean not null,
  mode    text not null default 'practice' check (mode in ('practice', 'mock', 'quiz')),
  at      timestamptz not null default now(),
  unique (user_id, qid, at)
);
create index attempts_at on public.attempts (at);

create table public.card_state (
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  card_id text not null check (card_id ~ '^[a-z]{2,3}-[td][0-9]{4}$'),
  due     timestamptz not null,
  ivl     real not null,
  ef      real not null,
  reps    integer not null,
  lapses  integer not null,
  upd     timestamptz not null default now(),
  primary key (user_id, card_id)
);

create table public.flags (
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  qid     text not null,
  primary key (user_id, qid)
);

create table public.mocks (
  id         bigint generated always as identity primary key,
  user_id    uuid not null default auth.uid() references auth.users on delete cascade,
  course     text not null,
  assessment text not null,
  at         timestamptz not null,
  lean       boolean not null default false,
  n          integer not null,
  right_n    integer not null,
  wrong_n    integer not null,
  blank_n    integer not null,
  score      real not null,
  max        real not null,
  secs       integer not null,
  ids        text[] not null,
  picks      jsonb not null,
  unique (user_id, at)
);

alter table public.attempts   enable row level security;
alter table public.card_state enable row level security;
alter table public.flags      enable row level security;
alter table public.mocks      enable row level security;

-- a student sees and writes only their own rows; an admin can read everything
create policy "read own" on public.attempts   for select to authenticated using ((user_id = auth.uid() and public.is_member()) or public.is_admin());
create policy "add own"  on public.attempts   for insert to authenticated with check (user_id = auth.uid() and public.is_member());
create policy "drop own" on public.attempts   for delete to authenticated using (user_id = auth.uid() and public.is_member());

create policy "read own"   on public.card_state for select to authenticated using ((user_id = auth.uid() and public.is_member()) or public.is_admin());
create policy "add own"    on public.card_state for insert to authenticated with check (user_id = auth.uid() and public.is_member());
create policy "change own" on public.card_state for update to authenticated using (user_id = auth.uid() and public.is_member()) with check (user_id = auth.uid());
create policy "drop own"   on public.card_state for delete to authenticated using (user_id = auth.uid() and public.is_member());

create policy "read own" on public.flags for select to authenticated using (user_id = auth.uid() and public.is_member());
create policy "add own"  on public.flags for insert to authenticated with check (user_id = auth.uid() and public.is_member());
create policy "drop own" on public.flags for delete to authenticated using (user_id = auth.uid() and public.is_member());

create policy "read own" on public.mocks for select to authenticated using ((user_id = auth.uid() and public.is_member()) or public.is_admin());
create policy "add own"  on public.mocks for insert to authenticated with check (user_id = auth.uid() and public.is_member());
create policy "drop own" on public.mocks for delete to authenticated using (user_id = auth.uid() and public.is_member());

-- nobody signed out touches progress tables at all
revoke all on public.attempts, public.card_state, public.flags, public.mocks from anon;

-- ---------------------------------------------------------------------
-- 4. Announcements — public to read, admin to write
-- ---------------------------------------------------------------------
create table public.announcements (
  id           bigint generated always as identity primary key,
  title        text not null check (length(title) between 1 and 160),
  body         text not null default '' check (length(body) <= 5000),
  course       text,                                -- null = everyone
  pinned       boolean not null default false,
  published_at timestamptz not null default now(),
  expires_at   timestamptz,
  created_by   uuid default auth.uid() references auth.users on delete set null,
  created_at   timestamptz not null default now()
);
alter table public.announcements enable row level security;

create policy "anyone reads live ones" on public.announcements
  for select to anon, authenticated
  using ((published_at <= now() and (expires_at is null or expires_at > now())) or public.is_admin());
create policy "admin writes" on public.announcements
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create table public.announcement_reads (
  user_id         uuid not null default auth.uid() references auth.users on delete cascade,
  announcement_id bigint not null references public.announcements on delete cascade,
  read_at         timestamptz not null default now(),
  primary key (user_id, announcement_id)
);
alter table public.announcement_reads enable row level security;
create policy "own reads" on public.announcement_reads
  for all to authenticated using (user_id = auth.uid() and public.is_member()) with check (user_id = auth.uid() and public.is_member());
revoke all on public.announcement_reads from anon;

-- ---------------------------------------------------------------------
-- 5. Assessment dates set from the admin panel (override program.js)
-- ---------------------------------------------------------------------
create table public.assessment_overrides (
  course     text not null,
  aid        text not null,          -- q1, q2, q3, end
  data       jsonb not null,         -- {status, start, end, join, durationMin, questions, marks, types, scopeText}
  updated_at timestamptz not null default now(),
  updated_by uuid default auth.uid() references auth.users on delete set null,
  primary key (course, aid)
);
alter table public.assessment_overrides enable row level security;
create policy "anyone reads" on public.assessment_overrides for select to anon, authenticated using (true);
create policy "admin writes" on public.assessment_overrides
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- ---------------------------------------------------------------------
-- 6. Functions the app calls
-- ---------------------------------------------------------------------

-- record that a student was here (profiles has no UPDATE grant)
create function public.touch_profile() returns void
language sql security definer set search_path = '' as $$
  update public.profiles set last_seen = now() where id = auth.uid()
$$;

-- a student deletes their own account; every progress row cascades
create function public.delete_my_account() returns void
language plpgsql security definer set search_path = '' as $$
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  delete from auth.users where id = auth.uid();
end $$;

-- admin: headline numbers
create function public.admin_overview() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  return jsonb_build_object(
    'students',     (select count(*) from public.profiles),
    'new_7d',       (select count(*) from public.profiles where created_at > now() - interval '7 days'),
    'active_1d',    (select count(distinct user_id) from public.attempts where at > now() - interval '1 day'),
    'active_7d',    (select count(distinct user_id) from public.attempts where at > now() - interval '7 days'),
    'attempts_7d',  (select count(*) from public.attempts where at > now() - interval '7 days'),
    'attempts_all', (select count(*) from public.attempts),
    'mocks_7d',     (select count(*) from public.mocks where at > now() - interval '7 days'),
    'suspended',    (select count(*) from public.profiles where suspended)
  );
end $$;

-- admin: how the whole cohort does on each question since a date
create function public.admin_question_stats(since timestamptz default now() - interval '30 days')
returns table (qid text, attempts bigint, wrong bigint, students bigint)
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  return query
    select a.qid, count(*), count(*) filter (where not a.ok), count(distinct a.user_id)
    from public.attempts a where a.at >= since group by a.qid;
end $$;

-- admin: the student list
create function public.admin_students()
returns table (id uuid, email text, name text, role text, suspended boolean,
               created_at timestamptz, last_seen timestamptz, attempts bigint, last_attempt timestamptz)
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  return query
    select p.id, p.email, p.name, p.role, p.suspended, p.created_at, p.last_seen,
           (select count(*) from public.attempts a where a.user_id = p.id),
           (select max(a.at) from public.attempts a where a.user_id = p.id)
    from public.profiles p order by p.last_seen desc;
end $$;

create function public.admin_set_suspended(target uuid, value boolean) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  if target = auth.uid() then raise exception 'you cannot suspend yourself'; end if;
  update public.profiles set suspended = value where id = target;
end $$;

create function public.admin_delete_user(target uuid) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  if target = auth.uid() then raise exception 'use delete_my_account for your own account'; end if;
  delete from auth.users where id = target;
end $$;

revoke execute on function
  public.touch_profile(), public.delete_my_account(), public.admin_overview(),
  public.admin_question_stats(timestamptz), public.admin_students(),
  public.admin_set_suspended(uuid, boolean), public.admin_delete_user(uuid)
  from public, anon;
grant execute on function
  public.touch_profile(), public.delete_my_account(), public.admin_overview(),
  public.admin_question_stats(timestamptz), public.admin_students(),
  public.admin_set_suspended(uuid, boolean), public.admin_delete_user(uuid)
  to authenticated;

-- ---------------------------------------------------------------------
-- 7. Sign-up gate: only @iitj.ac.in accounts may be created at all.
--    After running this file, switch it on in the dashboard:
--    Authentication → Hooks → "Before User Created" → Postgres →
--    public.hook_before_user_created. (The row-level rules above already
--    lock non-IITJ accounts out of every table; this stops the account
--    being created in the first place.)
-- ---------------------------------------------------------------------
create function public.hook_before_user_created(event jsonb) returns jsonb
language plpgsql as $$
begin
  if coalesce(lower(event -> 'user' ->> 'email'), '') like '%@iitj.ac.in' then
    return '{}'::jsonb;
  end if;
  return jsonb_build_object('error', jsonb_build_object(
    'http_code', 403,
    'message', 'Only @iitj.ac.in Google accounts can sign in to the BSMT Study Hub.'));
end $$;

grant execute on function public.hook_before_user_created(jsonb) to supabase_auth_admin;
revoke execute on function public.hook_before_user_created(jsonb) from public, anon, authenticated;
