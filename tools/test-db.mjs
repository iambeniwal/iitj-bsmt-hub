// Database security test. Applies every migration to an in-memory Postgres
// (PGlite) with a stand-in for Supabase auth, then tries each access path as a
// guest, two students, a non-IITJ Google account and an admin.
//     npm install      (once)
//     npm run test:db
// Applies the v2 migration to PGlite with a minimal Supabase auth stub,
// then tries every access path as anon, students, an outsider and an admin.
import { PGlite } from "@electric-sql/pglite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const db = new PGlite();
const MIG = fs.readdirSync(path.join(ROOT, "supabase/migrations")).sort().map(f => fs.readFileSync(path.join(ROOT, "supabase/migrations", f), "utf8")).join("\n");

await db.exec(`
  create role anon nologin; create role authenticated nologin; create role supabase_auth_admin nologin;
  create schema auth;
  create table auth.users (id uuid primary key default gen_random_uuid(), email text, raw_user_meta_data jsonb default '{}');
  create function auth.uid() returns uuid language sql stable as $$ select nullif(coalesce(nullif(current_setting('request.jwt.claims', true), ''), '{}')::jsonb ->> 'sub', '')::uuid $$;
  create function auth.jwt() returns jsonb language sql stable as $$ select coalesce(nullif(current_setting('request.jwt.claims', true), ''), '{}')::jsonb $$;
  grant usage on schema public, auth to anon, authenticated;
  grant execute on all functions in schema auth to anon, authenticated;
  alter default privileges in schema public grant all on tables to anon, authenticated;
  alter default privileges in schema public grant all on sequences to anon, authenticated;
  alter default privileges in schema public grant execute on functions to anon, authenticated;
`);
await db.exec(MIG);
console.log("migration applied");

const results = [];
const check = (name, pass, detail = "") => { results.push(pass); console.log(`${pass ? "PASS" : "FAIL"}  ${name}${detail ? "  — " + detail : ""}`); };

const users = {};
for (const [k, email] of [["alice", "alice@iitj.ac.in"], ["bob", "bob@iitj.ac.in"], ["eve", "eve@gmail.com"], ["rahul", "rahul@iitj.ac.in"]]) {
  const r = await db.query(`insert into auth.users (email, raw_user_meta_data) values ($1, '{"full_name":"Test"}') returning id`, [email]);
  users[k] = { id: r.rows[0].id, email };
}
await db.exec(`update public.profiles set role = 'admin' where email = 'rahul@iitj.ac.in'`);

// run SQL as a given identity; returns {rows} or {error}
async function as(who, sql, params = []) {
  try {
    await db.exec("reset role");
    if (who === "anon") { await db.query(`select set_config('request.jwt.claims', '', false)`); await db.exec("set role anon"); }
    else {
      const u = users[who];
      await db.query(`select set_config('request.jwt.claims', $1, false)`, [JSON.stringify({ sub: u.id, email: u.email, role: "authenticated" })]);
      await db.exec("set role authenticated");
    }
    const r = await db.query(sql, params);
    return { rows: r.rows };
  } catch (e) { return { error: e.message }; }
  finally { await db.exec("reset role"); }
}

let r = await as("anon", "select count(*) from public.profiles"); check("profiles created by trigger", (await db.query("select count(*)::int n from public.profiles")).rows[0].n === 4);

// --- anon
r = await as("anon", "select * from public.attempts"); check("anon cannot read attempts", !!r.error, r.error);
r = await as("anon", "insert into public.announcements (title) values ('x')"); check("anon cannot post announcements", !!r.error, r.error);
r = await as("anon", "select * from public.announcements"); check("anon can read announcements", !r.error);
r = await as("anon", "select * from public.profiles"); check("anon sees no profiles", r.error || r.rows.length === 0, r.error || `${r.rows.length} rows`);
r = await as("anon", "select public.admin_overview()"); check("anon cannot call admin_overview", !!r.error, r.error);

// --- students
r = await as("alice", "insert into public.attempts (qid, ok) values ('foc-q0001', false), ('foc-q0002', true)"); check("alice records attempts", !r.error, r.error);
r = await as("bob", "insert into public.attempts (qid, ok) values ('ebh-q0005', true)"); check("bob records attempts", !r.error, r.error);
r = await as("alice", "select qid from public.attempts"); check("alice sees only her own attempts", !r.error && r.rows.length === 2 && r.rows.every(x => x.qid.startsWith("foc")), JSON.stringify(r.rows || r.error));
r = await as("bob", `select * from public.attempts where user_id = '${users.alice.id}'`); check("bob cannot read alice's attempts", !r.error && r.rows.length === 0);
r = await as("alice", `insert into public.attempts (user_id, qid, ok) values ('${users.bob.id}', 'foc-q0003', true)`); check("alice cannot write as bob", !!r.error, r.error);
r = await as("alice", "insert into public.attempts (qid, ok) values ('not-an-id', true)"); check("malformed question id rejected", !!r.error, r.error);
r = await as("alice", "update public.profiles set role = 'admin' where id = auth.uid()"); check("alice cannot make herself admin", !!r.error || (await db.query(`select role from public.profiles where email='alice@iitj.ac.in'`)).rows[0].role === "student", r.error);
r = await as("alice", "select * from public.profiles"); check("alice sees only her own profile", !r.error && r.rows.length === 1);
r = await as("alice", "select public.admin_overview()"); check("alice cannot call admin_overview", !!r.error, r.error);
r = await as("alice", "insert into public.announcements (title) values ('fake news')"); check("alice cannot post announcements", !!r.error, r.error);
r = await as("alice", "insert into public.card_state (card_id, due, ivl, ef, reps, lapses) values ('foc-t0001', now(), 1, 2.5, 1, 0)"); check("alice saves a flashcard state", !r.error, r.error);
r = await as("alice", "update public.card_state set reps = 2 where card_id = 'foc-t0001'"); check("alice updates her card", !r.error, r.error);
r = await as("alice", `insert into public.mocks (course, assessment, at, n, right_n, wrong_n, blank_n, score, max, secs, ids, picks) values ('foundations-of-computing','q1', now(), 60, 50, 8, 2, 48, 60, 1100, '{foc-q0001}', '[[1]]')`); check("alice saves a mock", !r.error, r.error);
r = await as("alice", "select public.touch_profile()"); check("alice touches last_seen", !r.error, r.error);

// --- outsider with a valid Supabase session but a non-IITJ email
r = await as("eve", "insert into public.attempts (qid, ok) values ('foc-q0001', true)"); check("gmail account cannot write", !!r.error, r.error);
r = await as("eve", "select * from public.attempts"); check("gmail account reads nothing", !r.error && r.rows.length === 0);

// --- sign-up hook
r = await db.query(`select public.hook_before_user_created('{"user":{"email":"eve@gmail.com"}}')::text h`); check("hook rejects gmail", r.rows[0].h.includes("403"), r.rows[0].h.slice(0, 60));
r = await db.query(`select public.hook_before_user_created('{"user":{"email":"Carol@IITJ.ac.in"}}')::text h`); check("hook accepts iitj (any case)", r.rows[0].h === "{}");
r = await db.query(`select public.hook_before_user_created('{"user":{"email":"x@iitj.ac.in.evil.com"}}')::text h`); check("hook rejects look-alike domain", r.rows[0].h.includes("403"));

// --- admin
r = await as("rahul", "select public.admin_overview() o"); check("admin overview", !r.error && r.rows[0].o.students === 4, JSON.stringify(r.rows?.[0]?.o || r.error));
r = await as("rahul", "select * from public.admin_question_stats()"); check("admin question stats", !r.error && r.rows.length === 3, `${r.rows?.length} qids`);
r = await as("rahul", "select * from public.admin_question_reach()"); check("admin sees who answered what", !r.error && r.rows.length === 3, r.error);
r = await as("alice", "select * from public.admin_question_reach()"); check("a student can't", !!r.error, r.error);
r = await as("rahul", "select * from public.admin_students()"); check("admin student list", !r.error && r.rows.length === 4);
r = await as("rahul", "select count(*)::int n from public.attempts"); check("admin reads all attempts", !r.error && r.rows[0].n === 3);
r = await as("rahul", "insert into public.announcements (title, body, pinned) values ('Quiz 2 dates are out', 'See the LMS.', true)"); check("admin posts announcement", !r.error, r.error);
r = await as("rahul", "insert into public.announcements (title, published_at) values ('Later', now() + interval '1 day')"); check("admin schedules announcement", !r.error, r.error);
r = await as("anon", "select title from public.announcements"); check("anon sees only published announcements", !r.error && r.rows.length === 1 && r.rows[0].title.startsWith("Quiz 2"), JSON.stringify(r.rows));
r = await as("rahul", `insert into public.assessment_overrides (course, aid, data) values ('statistics-for-managers', 'q2', '{"status":"upcoming"}')`); check("admin sets a quiz date", !r.error, r.error);
r = await as("anon", "select * from public.assessment_overrides"); check("anon reads quiz dates", !r.error && r.rows.length === 1);
r = await as("alice", `insert into public.assessment_overrides (course, aid, data) values ('x', 'q9', '{}')`); check("student cannot set quiz dates", !!r.error, r.error);

// suspension
r = await as("rahul", `select public.admin_set_suspended('${users.bob.id}', true)`); check("admin suspends bob", !r.error, r.error);
r = await as("bob", "insert into public.attempts (qid, ok) values ('ebh-q0006', true)"); check("suspended bob cannot write", !!r.error, r.error);
r = await as("rahul", `select public.admin_set_suspended('${users.rahul.id}', true)`); check("admin cannot suspend self", !!r.error, r.error);
await as("rahul", `select public.admin_set_suspended('${users.bob.id}', false)`);

// privacy requests
r = await as("alice", `insert into public.privacy_requests (kind, message, email, status, response) values ('access', 'What do you hold about me?', 'spoof@evil.com', 'resolved', 'fake reply') returning email, status, response`);
check("alice files a request; email/status/reply are stamped, not taken from her", !r.error && r.rows[0].email === "alice@iitj.ac.in" && r.rows[0].status === "received" && r.rows[0].response === null, JSON.stringify(r.rows?.[0] || r.error));
r = await as("bob", "select * from public.privacy_requests"); check("bob can't see alice's request", !r.error && r.rows.length === 0);
r = await as("alice", "update public.privacy_requests set status = 'resolved'"); check("alice can't change her request's status", !r.error && (await db.query("select status from public.privacy_requests")).rows[0].status === "received");
r = await as("alice", "delete from public.privacy_requests"); check("alice can't delete requests", !!r.error || (await db.query("select count(*)::int n from public.privacy_requests")).rows[0].n === 1, r.error);
r = await as("eve", "insert into public.privacy_requests (kind, message) values ('other', 'hi')"); check("gmail account can't file", !!r.error, r.error);
r = await as("anon", "select * from public.privacy_requests"); check("anon can't read requests", !!r.error, r.error);
await as("rahul", `select public.admin_set_suspended('${users.bob.id}', true)`);
r = await as("bob", "insert into public.privacy_requests (kind, message) values ('grievance', 'Why was I suspended?')"); check("suspended bob can still file a grievance", !r.error, r.error);
await as("rahul", `select public.admin_set_suspended('${users.bob.id}', false)`);
r = await as("rahul", "update public.privacy_requests set status = 'resolved', response = 'Here is your data.', message = 'tampered' where email = 'alice@iitj.ac.in' returning status, resolved_at, message");
check("admin resolves; resolved_at set; message can't be rewritten", !r.error && r.rows[0].resolved_at && r.rows[0].message === "What do you hold about me?", JSON.stringify(r.rows?.[0] || r.error));
r = await as("alice", "select status, response from public.privacy_requests"); check("alice sees the reply", !r.error && r.rows[0].response === "Here is your data.");
r = await as("rahul", "select public.admin_overview() o"); check("overview counts open requests", !r.error && r.rows[0].o.requests_open === 1, JSON.stringify(r.rows?.[0]?.o?.requests_open));
for (let i = 0; i < 5; i++) await as("alice", "insert into public.privacy_requests (kind, message) values ('other', 'x')");
r = await as("alice", "insert into public.privacy_requests (kind, message) values ('other', 'sixth')"); check("a 6th open request is refused", !!r.error, r.error);

// read receipts
r = await as("alice", "insert into public.announcement_reads (announcement_id) select id from public.announcements limit 1"); check("alice marks announcement read", !r.error, r.error);

// --- AI beta (specs/ai-beta.md)
// "service" = the ai Edge Function with the service key: plain db.query here (bypasses RLS like the service role)
const svc = (sql, params = []) => db.query(sql, params);
for (const [k, email] of [["carol", "carol@iitj.ac.in"], ["dave", "dave@iitj.ac.in"]]) {
  const x = await db.query(`insert into auth.users (email) values ($1) returning id`, [email]);
  users[k] = { id: x.rows[0].id, email };
}
r = await as("anon", "select * from public.ai_settings"); check("anon can't read AI settings", !!r.error || r.rows.length === 0, r.error);
r = await as("alice", "select enabled, batches_per_day from public.ai_settings"); check("a member reads AI settings (off by default)", !r.error && r.rows[0].enabled === false && r.rows[0].batches_per_day === 3);
r = await as("alice", "update public.ai_settings set enabled = true"); check("a student can't switch AI on", !r.error && (await db.query("select enabled from public.ai_settings")).rows[0].enabled === false, r.error);
r = await as("alice", "select public.ai_beta_join(99)"); check("joining with an old notice is refused", !!r.error, r.error);
r = await as("alice", "insert into public.ai_beta_members (user_id, status, notice_version) values (auth.uid(), 'approved', 1)"); check("a student can't approve herself", !!r.error, r.error);
r = await as("alice", "select public.ai_beta_join(1) s"); check("alice joins the waiting list", !r.error && r.rows[0].s === "waitlist", r.error);
r = await as("bob", "select public.ai_beta_join(1) s"); check("bob joins after her", !r.error && r.rows[0].s === "waitlist", r.error);
r = await as("bob", "select public.ai_status() s"); check("bob is 2nd in the queue", !r.error && r.rows[0].s.status === "waitlist" && r.rows[0].s.position === 2, JSON.stringify(r.rows?.[0]?.s || r.error));
r = await as("eve", "select public.ai_beta_join(1)"); check("a gmail account can't join", !!r.error, r.error);
r = await as("alice", "select public.is_ai_member() m"); check("waiting isn't membership", !r.error && r.rows[0].m === false);
r = await as("alice", `select public.admin_ai_member_set('${users.alice.id}', 'approved')`); check("a student can't approve anyone", !!r.error, r.error);
await svc("update public.ai_settings set member_cap = 1");
r = await as("rahul", `select public.admin_ai_member_set('${users.alice.id}', 'approved')`); check("admin approves alice", !r.error, r.error);
r = await as("rahul", `select public.admin_ai_member_set('${users.bob.id}', 'approved')`); check("the cap stops a second approval", !!r.error && /full/.test(r.error), r.error);
await svc("update public.ai_settings set member_cap = 50");
r = await as("rahul", `select public.admin_ai_member_set('${users.bob.id}', 'approved')`); check("raising the cap lets bob in", !r.error, r.error);
r = await as("alice", "select public.is_ai_member() m"); check("alice is now a member", !r.error && r.rows[0].m === true);
r = await as("rahul", "select * from public.admin_ai_members()"); check("admin sees the member list", !r.error && r.rows.length === 2 && r.rows.every(x => x.status === "approved"), r.error);
r = await as("alice", "select * from public.ai_beta_members"); check("alice sees only her own membership", !r.error && r.rows.length === 1);

// questions: written by the service, read by their owner only
const item = JSON.stringify({ q: "Which model…?", o: ["IPO", "OSI", "MVC", "ACID"], a: 0, w: "Input, process, output.", cite: "Unit 1" });
await svc(`insert into public.ai_questions (id, user_id, course, unit, topic, item, fingerprint, writer, referee) values
  ('ai-foc-aaaa1111', $1, 'foundations-of-computing', 'ipo', 'The IPO model', $3, 'fp1', 'gemini-flash', 'sonnet'),
  ('ai-foc-bbbb2222', $1, 'foundations-of-computing', 'ipo', 'The IPO model', $3, 'fp1', 'gemini-flash', 'sonnet'),
  ('ai-foc-cccc3333', $2, 'foundations-of-computing', 'ipo', 'The IPO model', $3, 'fp1', 'gemini-flash', 'sonnet')`, [users.alice.id, users.bob.id, item]);
r = await as("alice", "select id from public.ai_questions order by id"); check("alice sees only her own AI questions", !r.error && r.rows.length === 2 && r.rows.every(x => x.id !== "ai-foc-cccc3333"), JSON.stringify(r.rows || r.error));
r = await as("alice", `insert into public.ai_questions (id, user_id, course, unit, topic, item, fingerprint, writer, referee) values ('ai-foc-zzzz9999', auth.uid(), 'x', 'x', 'x', '{}', 'x', 'x', 'x')`); check("a student can't write AI questions", !!r.error, r.error);
r = await as("alice", "update public.ai_questions set status = 'promoted'"); check("a student can't change AI questions", !!r.error || (await db.query("select count(*)::int n from public.ai_questions where status = 'promoted'")).rows[0].n === 0, r.error);
r = await as("alice", "insert into public.ai_usage (model, role, ok) values ('x', 'write', true)"); check("a student can't write usage", !!r.error, r.error);

// answers to AI questions: counted while live in your own pool, dropped otherwise
r = await as("alice", "insert into public.attempts (qid, ok, at) values ('ai-foc-aaaa1111', false, now()), ('ai-foc-bbbb2222', true, now())"); check("alice answers her AI questions", !r.error, r.error);
r = await as("alice", "insert into public.attempts (qid, ok) values ('ai-foc-cccc3333', true)"); check("an answer to someone else's AI question is dropped", !r.error && (await db.query("select count(*)::int n from public.attempts where qid = 'ai-foc-cccc3333'")).rows[0].n === 0, r.error);
r = await as("alice", "insert into public.attempts (qid, ok) values ('ai-foc-AAAA', true)"); check("a malformed AI id is never stored", (await db.query("select count(*)::int n from public.attempts where qid = 'ai-foc-AAAA'")).rows[0].n === 0, r.error);

// reports
r = await as("alice", "insert into public.reports (qid, reason, note, status, user_id) values ('ai-foc-aaaa1111', 'wrong_key', 'B is also right', 'fixed', $1) returning status, user_id", [users.bob.id]);
check("alice reports her AI question; stamped as hers and open", !r.error && r.rows[0].status === "open" && r.rows[0].user_id === users.alice.id, JSON.stringify(r.rows?.[0] || r.error));
const hidden = (await db.query("select q.status, (select count(*)::int from public.attempts a where a.qid = q.id) n from public.ai_questions q where id = 'ai-foc-aaaa1111'")).rows[0];
check("reporting hides it and removes her answers", hidden.status === "reported" && hidden.n === 0, JSON.stringify(hidden));
r = await as("alice", "insert into public.attempts (qid, ok) values ('ai-foc-aaaa1111', true)"); check("an old answer synced later doesn't come back", !r.error && (await db.query("select count(*)::int n from public.attempts where qid = 'ai-foc-aaaa1111'")).rows[0].n === 0, r.error);
r = await as("bob", "insert into public.reports (qid, reason) values ('ai-foc-aaaa1111', 'unclear')"); check("bob can't report alice's AI question", !!r.error, r.error);
r = await as("alice", "insert into public.reports (qid, reason) values ('ai-foc-aaaa1111', 'other')"); check("one report per question per student", !!r.error, r.error);
for (const who of ["alice", "bob"]) await as(who, "insert into public.reports (qid, reason) values ('sfm-q0042', 'multiple_correct')");
r = await as("anon", "select * from public.questions_under_review() q"); check("2 reporters: not under review yet", !r.error && r.rows.length === 0, r.error);
await as("carol", "insert into public.reports (qid, reason) values ('sfm-q0042', 'wrong_key')");
r = await as("anon", "select * from public.questions_under_review() q"); check("3 reporters: under review, visible to guests", !r.error && r.rows.length === 1 && r.rows[0].q === "sfm-q0042", JSON.stringify(r.rows || r.error));
r = await as("bob", "select qid from public.reports"); check("bob sees only his own reports", !r.error && r.rows.length === 1 && r.rows[0].qid === "sfm-q0042");
r = await as("eve", "insert into public.reports (qid, reason) values ('sfm-q0042', 'other')"); check("a gmail account can't report", !!r.error, r.error);
await svc("update public.ai_settings set reports_per_day = 3");
await as("dave", "insert into public.reports (qid, reason) values ('foc-q0001', 'other'), ('foc-q0002', 'other'), ('foc-q0003', 'other')");
r = await as("dave", "insert into public.reports (qid, reason) values ('foc-q0004', 'other')"); check("the daily report limit holds", !!r.error && /limit/.test(r.error), r.error);
await svc("update public.ai_settings set reports_per_day = 20");
r = await as("alice", "select (public.ai_status()) s"); check("ai_status counts her reports today", !r.error && r.rows[0].s.reports_today === 2, JSON.stringify(r.rows?.[0]?.s?.reports_today));

// review outcomes
const rep = id => db.query("select id from public.reports where qid = $1 limit 1", [id]).then(x => x.rows[0].id);
r = await as("alice", `select public.admin_report_resolve(${await rep("ai-foc-aaaa1111")}, 'dismissed')`); check("a student can't resolve reports", !!r.error, r.error);
r = await as("rahul", `select public.admin_report_resolve(${await rep("ai-foc-aaaa1111")}, 'fixed', 'Clarified the stem')`); check("a fix needs the corrected question", !!r.error, r.error);
const fixed = JSON.stringify({ q: "Which model describes computing?", o: ["IPO", "OSI", "MVC", "ACID"], a: 0, w: "Input, process, output.", cite: "Unit 1" });
r = await as("rahul", `select public.admin_report_resolve(${await rep("ai-foc-aaaa1111")}, 'fixed', 'Clarified the stem', $1::jsonb)`, [fixed]);
const back = (await db.query("select status, item->>'q' q from public.ai_questions where id = 'ai-foc-aaaa1111'")).rows[0];
check("fix and keep: back in alice's pool with the new wording", !r.error && back.status === "live" && back.q.startsWith("Which model describes"), r.error || JSON.stringify(back));
await as("alice", "insert into public.attempts (qid, ok) values ('ai-foc-bbbb2222', false)");
await svc("update public.ai_questions set status = 'withdrawn' where id = 'ai-foc-bbbb2222'");
r = (await db.query("select count(*)::int n from public.attempts where qid = 'ai-foc-bbbb2222'")).rows[0];
check("withdrawing a question removes every answer to it", r.n === 0, JSON.stringify(r));
r = await as("rahul", `select public.admin_report_resolve(${await rep("sfm-q0042")}, 'dismissed', 'Only one option fits')`);
r = (await db.query("select count(*)::int n from public.reports where qid = 'sfm-q0042' and status = 'open'")).rows[0];
check("resolving closes every report on that question", r.n === 0);
r = await as("anon", "select * from public.questions_under_review()"); check("a dismissed question is no longer under review", !r.error && r.rows.length === 0);

// lessons
await svc(`insert into public.ai_lessons (user_id, kind, course, unit, topic, fingerprint, model, body) values
  (null, 'simpler', 'foundations-of-computing', 'ipo', 'The IPO model', 'fp1', 'gemini-flash', '{"explanation":"…"}'),
  ($1, 'confusion', 'foundations-of-computing', 'ipo', 'The IPO model', 'fp1', 'sonnet', '{"explanation":"…"}')`, [users.alice.id]);
r = await as("bob", "select kind from public.ai_lessons"); check("bob reads the shared lesson, not alice's personal one", !r.error && r.rows.length === 1 && r.rows[0].kind === "simpler", JSON.stringify(r.rows || r.error));
r = await as("alice", "select kind from public.ai_lessons"); check("alice reads both", !r.error && r.rows.length === 2);
r = await as("anon", "select * from public.ai_lessons"); check("guests can't read lessons", !!r.error || r.rows.length === 0, r.error);
r = await svc(`insert into public.ai_lessons (user_id, kind, course, unit, topic, fingerprint, model, body) values (null, 'confusion', 'x', 'x', 'x', 'x', 'x', '{}')`).catch(e => ({ error: e.message }));
check("a personal-only kind can't be shared", !!r.error, r.error);

// usage, limits and the budget
const req = (await svc(`insert into public.ai_requests (user_id, feature, course, ok, kept, asked, cost_inr) values ($1, 'questions', 'foundations-of-computing', true, 9, 10, 8.5) returning id`, [users.alice.id])).rows[0].id;
await svc(`insert into public.ai_usage (request_id, model, role, input_tokens, output_tokens, cost_usd, cost_inr, ok) values ($1, 'gemini-flash', 'write', 9000, 3000, 0.018, 1.6, true), ($1, 'sonnet', 'referee', 9000, 1500, 0.033, 2.9, true)`, [req]);
r = await as("alice", "select (public.ai_status()) s"); check("ai_status counts today's batches", !r.error && r.rows[0].s.used.batches === 1 && r.rows[0].s.limits.batches === 3, JSON.stringify(r.rows?.[0]?.s?.used));
r = await as("alice", "select * from public.ai_usage"); check("students can't read provider usage", !r.error && r.rows.length === 0);
r = await as("alice", "select public.ai_spent_today()"); check("students can't read the spend", !!r.error, r.error);
r = (await svc("select public.ai_spent_today()::float s")).rows[0]; check("the spend today adds up every call", Math.abs(r.s - 4.5) < 1e-9, JSON.stringify(r));
r = await as("rahul", "select public.admin_overview() o"); check("overview shows the beta", !r.error && r.rows[0].o.ai_approved === 2 && Number(r.rows[0].o.ai_spent_today) === 4.5, JSON.stringify(r.rows?.[0]?.o));
r = await as("rahul", "update public.ai_settings set enabled = true, daily_budget_inr = 300 returning updated_by"); check("admin switches AI on", !r.error && r.rows[0].updated_by === users.rahul.id, r.error);

// leaving
r = await as("alice", "select public.ai_beta_leave()"); check("alice leaves the beta", !r.error && (await db.query("select status from public.ai_beta_members where user_id = $1", [users.alice.id])).rows[0].status === "left");
r = await as("rahul", `select public.admin_ai_member_set('${users.carol.id}', 'approved')`); check("can't approve someone who never joined", !!r.error, r.error);

// deletion
r = await as("bob", "select public.delete_my_account()"); check("bob deletes his account", !r.error, r.error);
const left = (await db.query(`select (select count(*) from public.attempts where user_id='${users.bob.id}')::int a, (select count(*) from public.profiles where id='${users.bob.id}')::int p`)).rows[0];
check("bob's rows are gone", left.a === 0 && left.p === 0, JSON.stringify(left));
const aiLeft = (await db.query(`select (select count(*) from public.ai_questions where user_id='${users.bob.id}')::int q, (select count(*) from public.ai_beta_members where user_id='${users.bob.id}')::int m, (select count(*) from public.reports where user_id='${users.bob.id}')::int r`)).rows[0];
check("bob's AI questions, membership and reports go too", aiLeft.q === 0 && aiLeft.m === 0 && aiLeft.r === 0, JSON.stringify(aiLeft));
r = (await db.query("select user_id, email from public.privacy_requests where email = 'bob@iitj.ac.in'")).rows;
check("bob's grievance record survives his account deletion", r.length === 1 && r[0].user_id === null, JSON.stringify(r));
r = await as("alice", `select public.admin_delete_user('${users.rahul.id}')`); check("student cannot delete others", !!r.error, r.error);

console.log(`\n${results.filter(Boolean).length}/${results.length} passed`);
process.exit(results.every(Boolean) ? 0 : 1);
