-- =====================================================================
-- BSMT Study Hub: per-student and cohort analytics for Admin.
--
-- Built only from what the hub already stores (answers, flashcards,
-- mock papers, AI use), so the privacy notice's "the admin can see
-- progress data to manage the hub" still covers it. Nothing new is
-- collected. Days are counted in India time.
--
-- Run once: SQL Editor → New query → paste → Run.
-- =====================================================================

-- one student, for Admin → Students → (a name)
create function public.admin_student_detail(target uuid) returns jsonb
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  return jsonb_build_object(
    'profile', (select jsonb_build_object('id', p.id, 'email', p.email, 'name', p.name, 'role', p.role,
                  'suspended', p.suspended, 'created_at', p.created_at, 'last_seen', p.last_seen)
                from public.profiles p where p.id = target),
    'totals', (select jsonb_build_object('answers', count(*), 'wrong', count(*) filter (where not a.ok),
                  'first_at', min(a.at), 'last_at', max(a.at),
                  'active_days', count(distinct (a.at at time zone 'Asia/Kolkata')::date),
                  'active_days_30', count(distinct (a.at at time zone 'Asia/Kolkata')::date) filter (where a.at > now() - interval '30 days'))
               from public.attempts a where a.user_id = target),
    -- the last 30 days, one row per day with answers
    'days', (select coalesce(jsonb_agg(jsonb_build_object('day', d, 'answers', n, 'wrong', w) order by d), '[]')
             from (select (a.at at time zone 'Asia/Kolkata')::date d, count(*) n, count(*) filter (where not a.ok) w
                   from public.attempts a where a.user_id = target and a.at > now() - interval '30 days' group by 1) x),
    -- per question: the panel maps IDs to courses and topics from the content files
    'questions', (select coalesce(jsonb_agg(jsonb_build_object('q', qid, 'n', n, 'w', w, 'last', last_ok, 'prev', prev_ok)), '[]')
                  from (select a.qid, count(*) n, count(*) filter (where not a.ok) w,
                               (array_agg(a.ok order by a.at desc))[1] last_ok, (array_agg(a.ok order by a.at desc))[2] prev_ok
                        from public.attempts a where a.user_id = target group by a.qid) x),
    'mocks', (select coalesce(jsonb_agg(jsonb_build_object('course', m.course, 'assessment', m.assessment, 'at', m.at, 'score', m.score,
                  'max', m.max, 'n', m.n, 'right', m.right_n, 'wrong', m.wrong_n, 'blank', m.blank_n, 'secs', m.secs) order by m.at), '[]')
              from public.mocks m where m.user_id = target),
    'cards', (select jsonb_build_object('studied', count(*), 'due', count(*) filter (where c.due <= now()),
                  'last', max(c.upd)) from public.card_state c where c.user_id = target),
    'ai', jsonb_build_object(
      'status', (select m.status from public.ai_beta_members m where m.user_id = target),
      'batches', (select count(*) from public.ai_requests r where r.user_id = target and r.feature = 'questions' and r.ok),
      'lessons', (select count(*) from public.ai_requests r where r.user_id = target and r.feature like 'lesson%' and r.ok),
      'cost_inr', (select coalesce(sum(r.cost_inr), 0) from public.ai_requests r where r.user_id = target),
      'questions', (select count(*) from public.ai_questions q where q.user_id = target and q.status = 'live')),
    'reports', (select count(*) from public.reports r where r.user_id = target)
  );
end $$;

-- the whole cohort, for Admin → Overview → Activity
create function public.admin_cohort(days integer default 30) returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare today date := (now() at time zone 'Asia/Kolkata')::date;
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  days := least(greatest(days, 7), 180);
  return jsonb_build_object(
    -- every day in the window, including quiet ones
    'daily', (select jsonb_agg(jsonb_build_object('day', g.d,
                 'students', (select count(distinct a.user_id) from public.attempts a where (a.at at time zone 'Asia/Kolkata')::date = g.d),
                 'answers',  (select count(*) from public.attempts a where (a.at at time zone 'Asia/Kolkata')::date = g.d),
                 'signups',  (select count(*) from public.profiles p where (p.created_at at time zone 'Asia/Kolkata')::date = g.d)) order by g.d)
              from (select s::date d from generate_series(today - (days - 1), today, interval '1 day') s) g),
    -- weekly active students, Monday-based weeks, last 8
    'weekly', (select jsonb_agg(jsonb_build_object('week', w.wk, 'students',
                 (select count(distinct a.user_id) from public.attempts a
                  where date_trunc('week', a.at at time zone 'Asia/Kolkata')::date = w.wk)) order by w.wk)
               from (select (date_trunc('week', today::timestamp)::date - (7 * k))::date wk from generate_series(0, 7) k) w),
    -- does anyone come back? Among students whose first answer was at least a week ago
    'retention', (select jsonb_build_object(
                    'eligible', count(*),
                    'second_day', count(*) filter (where f.days >= 2),
                    'after_week', count(*) filter (where f.last_at >= f.first_at + interval '7 days'))
                  from (select a.user_id, min(a.at) first_at, max(a.at) last_at,
                               count(distinct (a.at at time zone 'Asia/Kolkata')::date) days
                        from public.attempts a group by a.user_id
                        having min(a.at) <= now() - interval '7 days') f),
    'signed_up', (select count(*) from public.profiles),
    'ever_answered', (select count(distinct a.user_id) from public.attempts a)
  );
end $$;

-- the Students count on Cohort weak spots (also in the ai_beta migration's
-- last section; "or replace" so this runs whether or not that part ran)
create or replace function public.admin_question_reach(since timestamptz default now() - interval '30 days')
returns table (qid text, user_id uuid)
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  return query select distinct a.qid, a.user_id from public.attempts a where a.at >= since;
end $$;

revoke execute on function public.admin_student_detail(uuid), public.admin_cohort(integer), public.admin_question_reach(timestamptz) from public, anon;
grant execute on function public.admin_student_detail(uuid), public.admin_cohort(integer), public.admin_question_reach(timestamptz) to authenticated;
