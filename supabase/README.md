# Database setup

The hub's database is a free Supabase project (`wrzxexhincklabhadhmk`). Everything it
needs is in `migrations/`. Apply each file once, in order.

## First-time setup

1. **Run the migration.** Supabase dashboard → **SQL Editor** → **New query** → paste
   `migrations/20261005000000_v2_core.sql` → **Run**. You should see "Success. No rows returned".
2. **Switch on the sign-up gate.** **Authentication → Hooks** → **Before User Created** →
   type *Postgres* → schema `public`, function `hook_before_user_created` → enable. This stops
   any non-`@iitj.ac.in` account from being created. (Row-level security already locks such
   accounts out of every table; the hook stops the account existing at all.)
3. **Turn off email sign-in.** **Authentication → Sign In / Providers → Email** → disable.
   Google is the only way in.
4. **Sign in once on the site** with your own `@iitj.ac.in` account, then make yourself
   admin in the SQL Editor:

   ```sql
   update public.profiles set role = 'admin' where email = 'your.id@iitj.ac.in';
   ```

   The **Admin** tab appears after you reload the page.

## Security model

- Row-level security is on for every table. A student reads and writes only their own
  rows, and only while signed in with a non-suspended `@iitj.ac.in` account.
- `profiles.role` can't be changed by any student: the table has no UPDATE grant. Admin
  actions go through `admin_*` functions that check `is_admin()` themselves.
- Announcements and quiz-date overrides are public to read, admin-only to write.
- `delete_my_account()` deletes the account; every progress row cascades with it.

`npm run test:db` replays all of this against an in-memory Postgres and tries every access
path as a guest, two students, an outsider with a Gmail account, and an admin (42 checks).
Run it after changing any migration.

## Keys

The **publishable** key in `assets/cloud.js` and the keep-alive workflow is public by design.
The **secret / service_role** key, the database password and the Google client secret stay
in their dashboards. They are never needed in this repo.
