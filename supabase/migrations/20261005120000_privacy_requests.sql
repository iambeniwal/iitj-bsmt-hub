-- =====================================================================
-- BSMT Study Hub — privacy requests (grievance redressal without a
-- published email address)
--
-- Run once, after 20261005000000_v2_core.sql: SQL Editor → New query →
-- paste → Run.
--
-- A signed-in student files a request (see my data, correct it, delete
-- it, or a complaint). It goes into the admin's queue and the student
-- sees its status and the reply on their account page.
--
-- Suspended students can still file one: a grievance route has to stay
-- open to exactly the people most likely to have a grievance. The
-- requester's email is copied onto the request, so the record of how
-- it was handled survives even if the account is later deleted.
-- =====================================================================

-- signed in with an @iitj.ac.in account, suspended or not
create function public.is_iitj() returns boolean
language sql stable security definer set search_path = '' as $$
  select coalesce(lower(auth.jwt() ->> 'email') like '%@iitj.ac.in', false)
     and exists (select 1 from public.profiles p where p.id = auth.uid())
$$;

create table public.privacy_requests (
  id          bigint generated always as identity primary key,
  user_id     uuid references auth.users on delete set null,
  email       text not null,
  kind        text not null check (kind in ('access', 'correct', 'delete', 'grievance', 'other')),
  message     text not null check (length(message) between 1 and 4000),
  status      text not null default 'received' check (status in ('received', 'in_progress', 'resolved', 'declined')),
  response    text check (length(response) <= 4000),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  resolved_at timestamptz
);
create index privacy_requests_open on public.privacy_requests (status, created_at);
alter table public.privacy_requests enable row level security;

-- whatever the client sends, a new request is stamped with the caller's
-- own id and email and starts as "received"; at most 5 open at a time
create function public.privacy_request_stamp() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  new.user_id     := auth.uid();
  new.email       := lower(auth.jwt() ->> 'email');
  new.status      := 'received';
  new.response    := null;
  new.created_at  := now();
  new.updated_at  := now();
  new.resolved_at := null;
  if (select count(*) from public.privacy_requests r
      where r.user_id = auth.uid() and r.status in ('received', 'in_progress')) >= 5 then
    raise exception 'You already have 5 open requests. Please wait for a reply.';
  end if;
  return new;
end $$;
create trigger privacy_request_stamp before insert on public.privacy_requests
  for each row execute function public.privacy_request_stamp();

-- an admin's reply keeps its own timestamps honest
create function public.privacy_request_touch() returns trigger
language plpgsql set search_path = '' as $$
begin
  new.updated_at := now();
  new.resolved_at := case when new.status in ('resolved', 'declined')
                          then coalesce(old.resolved_at, now()) else null end;
  -- the request itself is the student's words: an admin can't rewrite it
  -- user_id may only be cleared, which is what deleting the account does
  if new.user_id is not null then new.user_id := old.user_id; end if;
  new.email := old.email; new.kind := old.kind;
  new.message := old.message; new.created_at := old.created_at;
  return new;
end $$;
create trigger privacy_request_touch before update on public.privacy_requests
  for each row execute function public.privacy_request_touch();

create policy "own requests, or admin" on public.privacy_requests
  for select to authenticated using (user_id = auth.uid() or public.is_admin());
create policy "file a request" on public.privacy_requests
  for insert to authenticated with check (public.is_iitj());
create policy "admin replies" on public.privacy_requests
  for update to authenticated using (public.is_admin()) with check (public.is_admin());
-- no delete policy: requests are a record of how each one was handled
revoke all on public.privacy_requests from anon;
revoke delete on public.privacy_requests from authenticated;

-- the admin overview also counts open requests
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
    'requests_open', (select count(*) from public.privacy_requests where status in ('received', 'in_progress'))
  );
end $$;
revoke execute on function public.admin_overview() from public, anon;
grant execute on function public.admin_overview() to authenticated;
