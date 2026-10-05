/* ===================================================================
   Cloud: sign-in, progress sync, announcements, quiz-date overrides.

   Supabase does three jobs here:
     · Google sign-in, @iitj.ac.in accounts only. The database enforces
       the domain itself (sign-up hook + row-level security); the check
       below only gives a friendly message sooner.
     · Mirroring progress. store.js stays the source the app reads;
       every change it emits is queued in an outbox (kept in
       localStorage, so nothing is lost offline) and pushed in batches.
       On sign-in the account's rows are pulled and merged with this
       browser's copy, including any guest progress, which then moves
       into the account.
     · Public data anyone can read: announcements, and quiz dates set
       from the admin panel, which override content/program.js.

   The publishable key below is meant to be public. What protects data
   is the row-level security in supabase/migrations/.

   No network, or the offline file? Everything still works in guest
   mode; this file just stays quiet.
   =================================================================== */
(function () {
"use strict";

const H = window.HUB, store = H.store;
const CFG = {
  url: "https://wrzxexhincklabhadhmk.supabase.co",
  key: "sb_publishable_6D3-SW5iw-YDoeWmkvPaag_c5Y150nq",
  domain: "iitj.ac.in"
};
const LS = {
  ann: "bsmt-hub:ann-cache", read: "bsmt-hub:ann-read", over: "bsmt-hub:overrides",
  ret: "bsmt-hub:return", outbox: uid => "bsmt-hub:outbox:" + uid, user: uid => "bsmt-hub:u:" + uid
};
const get = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
const put = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
const iso = ms => new Date(ms).toISOString();

const subs = [];
const changed = what => subs.forEach(fn => { try { fn(what); } catch (e) { console.error(e); } });

const cloud = {
  available: false,
  status: "guest",            // guest · signing-in · syncing · synced · offline · unavailable
  user: null, profile: null,
  error: "", note: "",
  announcements: get(LS.ann, []),
  onChange(fn) { subs.push(fn); },
  isAdmin() { return !!(this.profile && this.profile.role === "admin" && !this.profile.suspended); },
  pending() { return this.user ? get(LS.outbox(this.user.id), []).length : 0; },
  dismiss() { this.error = ""; this.note = ""; changed("auth"); },
  unread() { const r = new Set(get(LS.read, [])); return this.announcements.filter(a => !r.has(a.id)); },
  markRead(ids) {
    const r = new Set(get(LS.read, [])), fresh = ids.filter(id => !r.has(id));
    if (!fresh.length) return;
    fresh.forEach(id => r.add(id)); put(LS.read, [...r]);
    if (this.user) fresh.forEach(id => enqueue({ t: "read", id }));
    changed("ann");
  }
};
H.cloud = cloud;

/* quiz dates set by an admin: apply the cached copy now, before the
   first render, so pages never flash the old date */
function applyOverrides(rows) {
  rows.forEach(row => H.semesters.forEach(sem => sem.courses.forEach(c => {
    if (c.slug !== row.course) return;
    const a = c.assessments.find(x => x.id === row.aid);
    if (!a) return;
    if (!a._orig) a._orig = Object.assign({}, a);
    Object.assign(a, a._orig, row.data);
  })));
}
applyOverrides(get(LS.over, []));

if (location.protocol === "file:" || !window.supabase) { cloud.status = "unavailable"; return; }

const sb = window.supabase.createClient(CFG.url, CFG.key, {
  auth: { flowType: "pkce", persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storageKey: "bsmt-hub:auth" }
});
cloud.available = true;
cloud.sb = sb;

/* ---------------- public data ---------------- */
async function loadPublic() {
  const [ann, over] = await Promise.all([
    sb.from("announcements").select("id,title,body,course,pinned,published_at,expires_at")
      .order("pinned", { ascending: false }).order("published_at", { ascending: false }).limit(50),
    sb.from("assessment_overrides").select("course,aid,data")
  ]);
  if (!ann.error) { cloud.announcements = ann.data; put(LS.ann, ann.data); }
  if (!over.error) { put(LS.over, over.data); applyOverrides(over.data); }
  changed("public");
}
cloud.reloadPublic = loadPublic;

/* ---------------- sign-in ---------------- */
cloud.signIn = async function () {
  try { sessionStorage.setItem(LS.ret, location.hash || "#/"); } catch (e) {}
  cloud.status = "signing-in"; cloud.error = ""; changed("auth");
  const { error } = await sb.auth.signInWithOAuth({ provider: "google", options: {
    redirectTo: location.origin + location.pathname,
    queryParams: { hd: CFG.domain, prompt: "select_account" } } });
  if (error) { cloud.status = "guest"; cloud.error = "Sign-in couldn't start: " + error.message; changed("auth"); }
};

/* Google or the sign-up hook can send the browser back with an error */
(function readReturnError() {
  const q = new URLSearchParams(location.search), h = new URLSearchParams(location.hash.replace(/^#\/?/, "").split("?").pop());
  const msg = q.get("error_description") || h.get("error_description");
  if (!msg) return;
  cloud.error = /iitj/i.test(msg) ? msg.replace(/\+/g, " ")
    : "Sign-in didn't complete: " + msg.replace(/\+/g, " ") + ". Use your @" + CFG.domain + " Google account.";
  history.replaceState(null, "", location.pathname + "#/");
})();

/* a one-time sign-in link from Admin → Students, for a student whose
   Google sign-in is blocked: ?signin=<token hash>&kind=<type> */
(async function linkSignIn() {
  const q = new URLSearchParams(location.search), th = q.get("signin");
  if (!th) return;
  history.replaceState(null, "", location.pathname + "#/");
  const { data } = await sb.auth.getSession();
  if (data.session) { cloud.note = "You're already signed in on this browser, so the sign-in link wasn't used."; changed("auth"); return; }
  cloud.status = "signing-in"; changed("auth");
  const { error } = await sb.auth.verifyOtp({ token_hash: th, type: q.get("kind") || "magiclink" });
  if (error) {
    cloud.status = "guest";
    cloud.error = "That sign-in link didn't work (" + error.message + "). Each link works once and expires after an hour, so ask for a new one.";
    changed("auth");
  }
})();

async function onSession(session) {
  const email = (session.user.email || "").toLowerCase();
  if (!email.endsWith("@" + CFG.domain)) {
    await sb.auth.signOut();
    cloud.error = `Only @${CFG.domain} Google accounts can sign in. You chose ${email}.`;
    cloud.status = "guest"; changed("auth"); return;
  }
  const uid = session.user.id;
  cloud.user = session.user;
  cloud.status = "syncing";
  store.use(LS.user(uid));
  changed("auth");
  try {
    const prof = await sb.from("profiles").select("*").eq("id", uid).maybeSingle();
    if (prof.error) throw prof.error;
    if (!prof.data) throw new Error("profile missing");
    if (prof.data.suspended) {
      cloud.error = "This account has been suspended. Message Rahul Beniwal if you think that's a mistake.";
      await finishSignOut(); return;
    }
    cloud.profile = prof.data;
    await pullAndMerge(uid);
    sb.rpc("touch_profile").then(() => {}, () => {});
    cloud.status = "synced";
  } catch (e) {
    console.warn("sync", e);
    cloud.status = "offline";
  }
  changed("auth");
  flush();
  // back to the page they signed in from
  try {
    const ret = sessionStorage.getItem(LS.ret);
    if (ret) { sessionStorage.removeItem(LS.ret); if (ret !== location.hash) location.hash = ret; }
  } catch (e) {}
}

sb.auth.onAuthStateChange((event, session) => {
  // supabase-js asks that its own calls not run inside this callback
  setTimeout(() => {
    if (session && !cloud.user && (event === "INITIAL_SESSION" || event === "SIGNED_IN")) onSession(session);
    if (event === "SIGNED_OUT" && cloud.user) finishSignOut();
    if (location.search.includes("code=")) history.replaceState(null, "", location.pathname + location.hash);
  }, 0);
});

/* ---------------- pull & merge ---------------- */
async function pageAll(q) {
  const out = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await q().range(from, from + 999);
    if (error) throw error;
    out.push(...data);
    if (data.length < 1000) return out;
  }
}

async function pullAndMerge(uid) {
  const [att, cards, flags, mocks, reads] = await Promise.all([
    pageAll(() => sb.from("attempts").select("qid,ok,mode,at").eq("user_id", uid).order("at")),
    pageAll(() => sb.from("card_state").select("card_id,due,ivl,ef,reps,lapses,upd").eq("user_id", uid)),
    pageAll(() => sb.from("flags").select("qid").eq("user_id", uid)),
    pageAll(() => sb.from("mocks").select("*").eq("user_id", uid).order("at")),
    pageAll(() => sb.from("announcement_reads").select("announcement_id").eq("user_id", uid))
  ]);
  const remote = {
    att: att.map(r => [r.qid, Date.parse(r.at), r.ok ? 1 : 0, r.mode]),
    cards: Object.fromEntries(cards.map(r => [r.card_id, { due: Date.parse(r.due), ivl: r.ivl, ef: r.ef, reps: r.reps, lapses: r.lapses, upd: Date.parse(r.upd) }])),
    flags: flags.map(r => r.qid),
    mocks: mocks.map(r => ({ c: r.course, a: r.assessment, at: Date.parse(r.at), lean: r.lean, n: r.n, right: r.right_n, wrong: r.wrong_n,
      blank: r.blank_n, score: r.score, max: r.max, secs: r.secs, ids: r.ids, picks: r.picks }))
  };
  // a "reset everything" still waiting in the outbox means the server copy is about to be wiped: don't resurrect it
  if (get(LS.outbox(uid), []).some(o => o.t === "reset")) { remote.att = []; remote.cards = {}; remote.flags = []; remote.mocks = []; }
  const guest = store.peek(store.guestKey);
  const guestHas = Object.keys(guest.att).length || Object.keys(guest.cards).length || guest.mocks.length || Object.keys(guest.flags).length;
  const { state, ops, added } = H.cloudMerge(remote, store.snapshot(), guestHas ? guest : null);
  store.replace(state);
  ops.forEach(enqueue);
  if (guestHas) {
    store.drop(store.guestKey);
    cloud.note = `Your guest progress (${added.att} answers, ${added.cards} flashcards, ${added.mocks} mock papers) is now in your account.`;
  }
  const r = new Set(get(LS.read, []));
  reads.forEach(x => r.add(x.announcement_id));
  put(LS.read, [...r]);
}

/* ---------------- outbox ---------------- */
let flushTimer = null, flushing = false;
function enqueue(op) {
  if (!cloud.user) return;
  const k = LS.outbox(cloud.user.id), box = get(k, []);
  box.push(op); put(k, box);
  clearTimeout(flushTimer); flushTimer = setTimeout(flush, 1500);
}
store.on(ev => {
  if (!cloud.user || store.key !== LS.user(cloud.user.id)) return;
  if (ev.t === "att") enqueue({ t: "att", qid: ev.qid, ok: ev.ok, mode: ev.mode, at: ev.at });
  else if (ev.t === "card") enqueue({ t: "card", id: ev.id, c: ev.c });
  else if (ev.t === "flag") enqueue({ t: "flag", qid: ev.qid, on: ev.on });
  else if (ev.t === "mock") enqueue({ t: "mock", m: ev.m });
  else if (ev.t === "reset") enqueue({ t: "reset" });
});

async function send(t, ops, uid) {
  if (t === "att") return sb.from("attempts").upsert(ops.map(o => ({ qid: o.qid, ok: o.ok, mode: o.mode, at: iso(o.at) })),
    { onConflict: "user_id,qid,at", ignoreDuplicates: true });
  if (t === "card") {
    const last = {}; ops.forEach(o => { last[o.id] = o.c; });
    return sb.from("card_state").upsert(Object.entries(last).map(([id, c]) => ({ card_id: id, due: iso(c.due), ivl: c.ivl, ef: c.ef,
      reps: c.reps, lapses: c.lapses, upd: iso(c.upd || Date.now()) })), { onConflict: "user_id,card_id" });
  }
  if (t === "flag") {
    for (const o of ops) {
      const r = o.on ? await sb.from("flags").upsert({ qid: o.qid }, { onConflict: "user_id,qid", ignoreDuplicates: true })
                     : await sb.from("flags").delete().eq("user_id", uid).eq("qid", o.qid);
      if (r.error) return r;
    }
    return {};
  }
  if (t === "mock") return sb.from("mocks").upsert(ops.map(({ m }) => ({ course: m.c, assessment: m.a, at: iso(m.at), lean: !!m.lean, n: m.n,
    right_n: m.right, wrong_n: m.wrong, blank_n: m.blank, score: m.score, max: m.max, secs: m.secs, ids: m.ids, picks: m.picks })),
    { onConflict: "user_id,at", ignoreDuplicates: true });
  if (t === "read") return sb.from("announcement_reads").upsert(ops.map(o => ({ announcement_id: o.id })),
    { onConflict: "user_id,announcement_id", ignoreDuplicates: true });
  if (t === "reset") {
    for (const tbl of ["attempts", "card_state", "flags", "mocks"]) {
      const r = await sb.from(tbl).delete().eq("user_id", uid);
      if (r.error) return r;
    }
    return {};
  }
  return {};
}

async function flush() {
  if (!cloud.user || flushing) return;
  const uid = cloud.user.id, k = LS.outbox(uid);
  let box = get(k, []);
  if (!box.length) return;
  flushing = true;
  try {
    while (box.length) {
      // send runs of the same kind together, in order
      let n = 1; while (n < box.length && box[n].t === box[0].t) n++;
      const run = box.slice(0, n);
      const r = await send(run[0].t, run, uid);
      if (r && r.error) throw r.error;
      box = get(k, []).slice(n); put(k, box);     // re-read: new ops may have arrived meanwhile
    }
    if (cloud.status === "offline") { cloud.status = "synced"; changed("auth"); }
  } catch (e) {
    console.warn("sync failed, will retry", e);
    if (cloud.status !== "offline") { cloud.status = "offline"; changed("auth"); }
    clearTimeout(flushTimer); flushTimer = setTimeout(flush, 30000);
  } finally { flushing = false; }
}
window.addEventListener("online", () => flush());
cloud.flush = flush;

/* ---------------- sign-out & deletion ---------------- */
async function finishSignOut() {
  const uid = cloud.user && cloud.user.id;
  try { await sb.auth.signOut(); } catch (e) {}
  if (uid) { store.drop(LS.user(uid)); store.drop(LS.outbox(uid)); }   // shared computers: leave nothing behind
  store.use(store.guestKey);
  cloud.user = null; cloud.profile = null; cloud.status = "guest";
  changed("auth");
}
cloud.signOut = async function () {
  await Promise.race([flush(), new Promise(r => setTimeout(r, 4000))]);
  await finishSignOut();
};
cloud.deleteAccount = async function () {
  const { error } = await sb.rpc("delete_my_account");
  if (error) throw error;
  await finishSignOut();
  cloud.note = "Your account and all of its progress have been deleted.";
  changed("auth");
};

/* admin helpers: thin wrappers that throw on error */
cloud.rpc = async (fn, args) => { const { data, error } = await sb.rpc(fn, args); if (error) throw error; return data; };
cloud.table = name => sb.from(name);

loadPublic().catch(() => {});
})();
