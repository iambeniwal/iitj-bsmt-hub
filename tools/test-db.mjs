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

// read receipts
r = await as("alice", "insert into public.announcement_reads (announcement_id) select id from public.announcements limit 1"); check("alice marks announcement read", !r.error, r.error);

// deletion
r = await as("bob", "select public.delete_my_account()"); check("bob deletes his account", !r.error, r.error);
const left = (await db.query(`select (select count(*) from public.attempts where user_id='${users.bob.id}')::int a, (select count(*) from public.profiles where id='${users.bob.id}')::int p`)).rows[0];
check("bob's rows are gone", left.a === 0 && left.p === 0, JSON.stringify(left));
r = await as("alice", `select public.admin_delete_user('${users.rahul.id}')`); check("student cannot delete others", !!r.error, r.error);

console.log(`\n${results.filter(Boolean).length}/${results.length} passed`);
process.exit(results.every(Boolean) ? 0 : 1);
