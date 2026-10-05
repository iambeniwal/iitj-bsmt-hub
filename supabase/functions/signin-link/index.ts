// =====================================================================
// signin-link: a one-time sign-in link for a student whose Google
// sign-in is blocked (an IITJ device rule, say) but who can still be
// reached directly. Admin only.
//
// POST { email, name? }  →  { link, kind }
//   email must be an @iitj.ac.in address. If the student has no account
//   yet, one is created (the sign-up hook still checks the domain).
//   No email is sent: the admin passes the link on. It works once and
//   expires with Supabase's OTP expiry (one hour by default). Opening
//   it signs that browser in as the student, so it goes only to them.
// =====================================================================
import { createClient } from "npm:@supabase/supabase-js@2.117.2";

const SITE = "https://iambeniwal.github.io/iitj-bsmt-hub/";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const PUBLISHABLE_KEY = "sb_publishable_6D3-SW5iw-YDoeWmkvPaag_c5Y150nq";   // public by design
/* the platform provides the service key; newer projects provide it as SUPABASE_SECRET_KEYS */
function secretKey(): string {
  const legacy = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (legacy) return legacy;
  try { return String(Object.values(JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") ?? "{}"))[0] ?? ""); } catch { return ""; }
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  const auth = req.headers.get("Authorization") ?? "";
  const db = createClient(SUPABASE_URL, PUBLISHABLE_KEY, { global: { headers: { Authorization: auth } }, auth: { persistSession: false } });
  const { data: isAdmin, error: adminErr } = await db.rpc("is_admin");
  if (adminErr || isAdmin !== true) return json({ error: "admin only" }, 403);

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return json({ error: "bad JSON" }, 400); }
  const email = String(body.email ?? "").trim().toLowerCase();
  const name = String(body.name ?? "").trim().slice(0, 80);
  if (!/^[a-z0-9._%+-]+@iitj\.ac\.in$/.test(email)) return json({ error: "Enter an @iitj.ac.in address." }, 400);

  const key = secretKey();
  if (!key) return json({ error: "service key unavailable" }, 500);
  const admin = createClient(SUPABASE_URL, key, { auth: { persistSession: false, autoRefreshToken: false } });

  // an existing account gets a magic link; a new one is created by an invite
  let res = await admin.auth.admin.generateLink({ type: "magiclink", email });
  if (res.error) res = await admin.auth.admin.generateLink({ type: "invite", email, options: { data: name ? { full_name: name } : {} } });
  if (res.error) return json({ error: res.error.message }, 400);

  const p = res.data.properties;
  const link = `${SITE}?signin=${encodeURIComponent(p.hashed_token)}&kind=${encodeURIComponent(p.verification_type)}`;
  return json({ link, kind: p.verification_type, created: p.verification_type === "invite" });
});
