// =====================================================================
// ai: the AI beta (specs/ai-beta.md). Separate from ai-pilot, which
// stays as the harness for re-testing a model.
//
// Student actions (approved beta members):
//   { action: "questions", course, topic }
//       A batch of new questions on one topic, written from its unit's
//       notes. Every question passes format checks, near-duplicate checks
//       against the bank and the student's own pool, and a blind re-solve
//       by a referee from a different provider. Only passes are kept, in
//       that student's pool.
//   { action: "lesson", course, topic, kind: "simpler" | "example" }
//       Shared: written once per topic and notes version, then served
//       to everyone free.
//   { action: "lesson", course, topic, kind: "confusion", wrong: [qid…], picks?: {qid: option} }
//       Personal: built from this student's own wrong answers.
//
// Admin actions:
//   { action: "recheck", course }      notes changed: re-solve that course's AI questions, withdraw failures
//   { action: "pregenerate", course }  shared lessons for every topic in the next quiz's scope (a few per call)
//
// Before any provider call: signed in, an approved member (or admin),
// AI switched on, under today's ₹ budget and the student's own limits,
// and not inside a quiz for that course. Providers get the notes and,
// for personal lessons, the text of the student's wrong questions;
// never a name, email or account ID. Usage is logged per call; raw
// prompts are not stored.
// =====================================================================
import Anthropic from "npm:@anthropic-ai/sdk@0.131.0";
import { zodOutputFormat } from "npm:@anthropic-ai/sdk@0.131.0/helpers/zod";
import { z } from "npm:zod@4";
import { createClient, type SupabaseClient } from "npm:@supabase/supabase-js@2.117.2";

const SITE = "https://iambeniwal.github.io/iitj-bsmt-hub";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const PUBLISHABLE_KEY = "sb_publishable_6D3-SW5iw-YDoeWmkvPaag_c5Y150nq";   // public by design
function secretKey(): string {
  const legacy = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (legacy) return legacy;
  try { return String(Object.values(JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") ?? "{}"))[0] ?? ""); } catch { return ""; }
}

/* USD per million tokens, checked 5 Oct 2026. Gemini 3.8 Flash is a promotional rate
   until 31 Dec 2026; it doubles after (update this table then). */
type Provider = "anthropic" | "google";
const MODELS: Record<string, { provider: Provider; id: string; price: [number, number] }> = {
  "opus":         { provider: "anthropic", id: "claude-opus-5",          price: [5, 25] },
  "sonnet":       { provider: "anthropic", id: "claude-sonnet-5",        price: [2, 10] },
  "gemini-pro":   { provider: "google",    id: "gemini-3.1-pro-preview", price: [2, 12] },
  "gemini-flash": { provider: "google",    id: "gemini-3.8-flash",       price: [0.75, 3.75] },
};
/* when Claude refuses, the same job goes to a model of the other provider that
   passed the model test; the stored row names the model that actually answered */
const REFUSAL_FALLBACK: Record<string, string> = { opus: "gemini-pro", sonnet: "gemini-pro" };
/* a referee must come from a different provider than the writer */
const OTHER_PROVIDER: Record<Provider, string> = { anthropic: "gemini-pro", google: "sonnet" };

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });
/* a refusal the student sees: code for the client, message in plain words */
class Stop extends Error { constructor(public code: string, message: string, public status = 400) { super(message); } }

/* ---------------- the live site: programme dates and notes ---------------- */
type Q = { id: string; topic: string; q: string; c: string[]; a: number[]; w: string };
type Course = { slug: string; code: string; units: { id: string; title: string; lede: string; topics: { t: string; h: string }[] }[];
  topics: { name: string; unit: string }[]; questions: Q[] };
type Assessment = { id: string; name: string; status: string; start?: string; end?: string; scope?: string | string[] };
type Program = { semesters: { courses: { slug: string; name: string; short: string; assessments: Assessment[] }[] }[] };

let cache: { at: number; program: Program; courses: Map<string, Course> } | null = null;
async function site() {
  if (cache && Date.now() - cache.at < 10 * 60_000) return cache;     // a content push shows up within 10 minutes
  const get = async (p: string) => { const r = await fetch(`${SITE}/${p}?t=${Date.now()}`); if (!r.ok) throw new Error(`couldn't load ${p}: ${r.status}`); return r.text(); };
  const w: Record<string, unknown> = {};
  const courses: Record<string, Course> = {};
  const HUB: Record<string, unknown> = { courses, addCourse(c: Course) { courses[c.slug] = c; } };
  w.HUB = HUB;
  new Function("window", "HUB", await get("content/program.js"))(w, HUB);     // our own published files
  const program = { semesters: HUB.semesters } as Program;
  const slugs = program.semesters.flatMap((s) => s.courses.map((c) => c.slug));
  const index = await get("index.html");
  for (const slug of slugs) {
    const m = index.match(new RegExp(`content/(sem\\d+)/${slug}\\.js`));
    if (m) new Function("window", "HUB", await get(`content/${m[1]}/${slug}.js`))(w, HUB);
  }
  cache = { at: Date.now(), program, courses: new Map(Object.entries(HUB.courses as Record<string, Course>)) };
  return cache;
}

const ENT: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', nbsp: " ", mdash: "—", ndash: "–", rarr: "→", larr: "←", times: "×", minus: "−", middot: "·", hellip: "…", ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’" };
const decode = (s: string) => s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&([a-z]+);/g, (m, n) => ENT[n] ?? m);
function htmlToText(h: string): string {
  // code blocks keep their whitespace exactly: in Python the indentation is the meaning
  const pres: string[] = [];
  h = h.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, body: string) => {
    pres.push(decode(body.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "")).replace(/^\n+|\s+$/g, ""));
    return `\n\u0000${pres.length - 1}\u0000\n`;
  });
  return h
    .replace(/<(svg|script|style)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|h[1-6]|li|tr|pre|figcaption)>/gi, "\n")
    .replace(/<li[^>]*>/gi, "- ")
    .replace(/<\/(td|th)>/gi, " | ")
    .replace(/<[^>]+>/g, "")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&([a-z]+);/g, (m, n) => ENT[n] ?? m)
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n+/g, "\n")
    .replace(/\u0000(\d+)\u0000/g, (_, i) => "```\n" + pres[+i] + "\n```")
    .trim();
}
async function sha(s: string) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 16);
}
async function unitNotes(c: Course, unitId: string) {
  const u = c.units.find((x) => x.id === unitId);
  if (!u) throw new Stop("bad_request", `No unit ${unitId} in this course.`);
  const text = [`# ${htmlToText(u.title)}`, htmlToText(u.lede || ""),
    ...u.topics.map((t) => `## ${htmlToText(t.t)}\n${htmlToText(t.h)}`)].join("\n\n");
  const topicNames = new Set(c.topics.filter((t) => t.unit === unitId).map((t) => t.name));
  return { id: unitId, title: htmlToText(u.title), text, fingerprint: await sha(text),
    bank: c.questions.filter((q) => topicNames.has(q.topic)).map((q) => htmlToText(q.q)) };
}

/* ---------------- prompts ---------------- */
const COURSE_NAMES: Record<string, string> = {
  "foundations-of-computing": "Foundations of Computing", "economic-business-history": "Economic & Business History",
  "algorithmic-thinking-in-business": "Algorithmic Thinking in Business", "financial-accounting": "Financial Accounting",
  "statistics-for-managers": "Statistics for Managers", "principles-of-marketing": "Principles of Marketing",
};
/* identical to the model test's writer prompt, so the test's verdict still applies */
const genSystem = (course: string) => `You write multiple-choice practice questions for first-semester students on IIT Jodhpur's B.S. in Management & Technology, course: ${COURSE_NAMES[course]}. The quizzes are marked +1 for a correct answer and −0.25 for a wrong one, so a question with a wrong key or two defensible answers costs students real marks.

Rules:
- Use only the course notes in the request. Every answer must follow from them; don't bring in outside facts.
- Each question has exactly 4 options and exactly one correct answer.
- Wrong options must be plausible: the mistakes a student who half-knows the topic would make. Keep all four similar in length and style.
- Never write "all of the above", "none of the above", or refer to options by letter or position. Don't write "according to the notes".
- Where the notes support it, mix recall with application and, for numerical or code topics, calculation or tracing. Work out every number or output yourself and put the working in the explanation.
- explanation: at most 60 words. Say why the answer is right and why the most tempting wrong option is wrong, naming options by their content.
- source_quote: a short exact excerpt (at most 25 words) copied from the notes that supports the answer.
- kind: recall, application or calculation.
- Don't repeat questions the notes' existing bank already asks; they're listed for you.`;

const genUser = (title: string, notes: string, topic: string, avoid: string[], n: number) =>
  `Notes unit: ${title}\n\n<notes>\n${notes}\n</notes>\n\n<existing_bank_questions>\n${avoid.slice(0, 160).map((q) => "- " + q).join("\n")}\n</existing_bank_questions>\n\n`
  + `Write ${n} new questions on the topic "${topic}". Vary the situations and numbers: don't reuse the notes' worked examples with small changes.`;

const refSystem = `You are checking multiple-choice practice questions before students see them. Answer each question using only the course notes provided. You are not told the intended answer.
For each question give: the option index you choose (0-based), your confidence (high, medium or low), whether more than one option could reasonably be defended (ambiguous), and a one-line note.`;
const refUser = (notes: string, qs: { question: string; options: string[] }[]) =>
  `<notes>\n${notes}\n</notes>\n\n` + qs.map((q, i) =>
    `Question ${i}: ${q.question}\n${q.options.map((o, k) => `  [${k}] ${o}`).join("\n")}`).join("\n\n");

const LESSON_FOCUS: Record<string, string> = {
  simpler: "The student found the notes hard going. Explain the topic more simply than the notes do: plain words, short sentences, one everyday analogy. Keep every fact consistent with the notes.",
  example: "The student wants to see the topic in use. Lead with a fully worked example in a new situation (not one of the notes' own examples), showing every step, then explain the idea behind it.",
  confusion: "The student keeps getting this topic wrong. Their wrong answers are listed. Work out what they are mixing up, name it plainly, and contrast the two ideas side by side so the difference sticks. Don't scold.",
};
const lessonSystem = (course: string) => `You write short revision lessons for first-semester students on IIT Jodhpur's B.S. in Management & Technology, course: ${COURSE_NAMES[course]}.
Use only the course notes in the request; don't bring in outside facts. Write for a student revising shortly before a quiz: clear, specific, no padding.
Return:
- explanation: 120–220 words.
- example: a worked example, 60–180 words, with every number or output worked out.
- confusion: the mix-up students most often make on this topic, and how to tell the two apart, 40–120 words.
- checks: exactly 3 multiple-choice questions to check understanding, each with 4 options, exactly one correct answer, and a one-sentence explanation. Never use "all/none of the above" or refer to options by position.
Plain text only; for code, use the same layout as the notes.`;
const lessonUser = (title: string, notes: string, topic: string, kind: string, wrong: string[]) =>
  `Notes unit: ${title}\n\n<notes>\n${notes}\n</notes>\n\nTopic: "${topic}"\n\n${LESSON_FOCUS[kind]}`
  + (wrong.length ? `\n\n<wrong_answers>\n${wrong.join("\n\n")}\n</wrong_answers>` : "");

/* ---------------- output schemas ---------------- */
const GenSchema = z.object({ questions: z.array(z.object({
  question: z.string(), options: z.array(z.string()), answer_index: z.number().int(),
  explanation: z.string(), source_quote: z.string(), kind: z.enum(["recall", "application", "calculation"]),
})) });
const RefSchema = z.object({ answers: z.array(z.object({
  index: z.number().int(), choice: z.number().int(), confidence: z.enum(["high", "medium", "low"]),
  ambiguous: z.boolean(), note: z.string(),
})) });
const LessonSchema = z.object({
  explanation: z.string(), example: z.string(), confusion: z.string(),
  checks: z.array(z.object({ question: z.string(), options: z.array(z.string()), answer_index: z.number().int(), explanation: z.string() })),
});
/* the same shapes as plain JSON Schema, for Gemini's responseJsonSchema */
const S = { type: "string" }, I = { type: "integer" }, B = { type: "boolean" };
const obj = (properties: Record<string, unknown>) => ({ type: "object", properties, required: Object.keys(properties) });
const GEN_JSON = obj({ questions: { type: "array", items: obj({ question: S, options: { type: "array", items: S }, answer_index: I,
  explanation: S, source_quote: S, kind: { type: "string", enum: ["recall", "application", "calculation"] } }) } });
const REF_JSON = obj({ answers: { type: "array", items: obj({ index: I, choice: I,
  confidence: { type: "string", enum: ["high", "medium", "low"] }, ambiguous: B, note: S }) } });
const LESSON_JSON = obj({ explanation: S, example: S, confusion: S,
  checks: { type: "array", items: obj({ question: S, options: { type: "array", items: S }, answer_index: I, explanation: S }) } });

/* ---------------- providers ---------------- */
type Out<T> = { data: T; input: number; output: number; ms: number; model: string };
const anthropic = new Anthropic({ apiKey: Deno.env.get("ANTHROPIC_API_KEY"), maxRetries: 1, timeout: 120_000 });
class Refused extends Error {}

async function callAnthropic<T>(model: string, system: string, user: string, schema: z.ZodType<T>, ref: string): Promise<Omit<Out<T>, "model">> {
  const t0 = Date.now();
  const r = await anthropic.messages.parse({
    model, max_tokens: 16000, system,
    messages: [{ role: "user", content: user }],
    metadata: { user_id: ref },                    // a random per-request reference, never the student's ID
    output_config: { format: zodOutputFormat(schema) },
  });
  if (r.stop_reason === "refusal") throw new Refused(`refused (${r.stop_details?.category ?? "no category"})`);
  if (r.stop_reason === "max_tokens") throw new Error("hit max_tokens");
  if (!r.parsed_output) throw new Error("output did not match the schema");
  const u = r.usage;
  return { data: r.parsed_output as T, ms: Date.now() - t0,
    input: (u.input_tokens ?? 0) + (u.cache_creation_input_tokens ?? 0) + (u.cache_read_input_tokens ?? 0), output: u.output_tokens ?? 0 };
}

async function callGemini<T>(model: string, system: string, user: string, schema: z.ZodType<T>, jsonSchema: unknown): Promise<Omit<Out<T>, "model">> {
  const t0 = Date.now();
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": Deno.env.get("GEMINI_API_KEY") ?? "" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ role: "user", parts: [{ text: user }] }],
      generationConfig: { responseMimeType: "application/json", responseJsonSchema: jsonSchema, maxOutputTokens: 16000 },
    }),
    signal: AbortSignal.timeout(120_000),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(`gemini ${res.status}: ${body?.error?.message ?? "error"}`);
  const cand = body.candidates?.[0];
  if (!cand || cand.finishReason !== "STOP") throw new Error(`gemini finished with ${cand?.finishReason ?? "no candidate"}`);
  const text = (cand.content?.parts ?? []).filter((p: { text?: string; thought?: boolean }) => p.text && !p.thought).map((p: { text: string }) => p.text).join("");
  const parsed = schema.safeParse(JSON.parse(text));
  if (!parsed.success) throw new Error("output did not match the schema");
  const u = body.usageMetadata ?? {};
  return { data: parsed.data, ms: Date.now() - t0, input: u.promptTokenCount ?? 0,
    output: (u.candidatesTokenCount ?? 0) + (u.thoughtsTokenCount ?? 0) };   // thinking is billed as output
}

/* ---------------- automatic checks (as in the model test) ---------------- */
const ORDINAL = /\b(first|second|third|fourth|last) (option|answer|choice)\b|\b(all|none) of the above\b/i;
const LETTERED = /\boptions? \(?([A-D]|[1-6])\)?(?![\w.])/g;
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const words = (s: string) => new Set(norm(s).split(" ").filter((w) => w.length > 2));
function jaccard(a: Set<string>, b: Set<string>) {
  let i = 0; a.forEach((w) => { if (b.has(w)) i++; });
  return i / Math.max(1, a.size + b.size - i);
}
type Gen = z.infer<typeof GenSchema>["questions"][number];
function formatProblems(q: { question: string; options: string[]; answer_index: number; explanation: string }) {
  const problems: string[] = [];
  if (q.options.length !== 4) problems.push(`${q.options.length} options`);
  if (new Set(q.options.map((o) => o.trim())).size !== q.options.length) problems.push("duplicate options");
  if (q.options.some((o) => !o.trim())) problems.push("empty option");
  if (!(q.answer_index >= 0 && q.answer_index < q.options.length)) problems.push("answer index out of range");
  const prose = q.question + " " + q.explanation;
  const lettered = [...prose.matchAll(LETTERED)].some((m) => !q.options.some((o) => o.trim().startsWith(m[1])));
  if (ORDINAL.test(prose + " " + q.options.join(" ")) || lettered) problems.push("positional wording");
  if (q.question.length < 15 || q.question.length > 500) problems.push("question length");
  if (q.options.some((o) => o.length > 220)) problems.push("option too long");
  if (q.explanation.split(/\s+/).length > 90) problems.push("explanation too long");
  return problems;
}
/* near-duplicates of the bank, of the student's own pool, and of each other in this batch:
   models like to re-use the notes' worked examples (four metro-fare variants in one test sample) */
function nearDuplicate(q: string, against: string[]) {
  const qw = words(q);
  return against.some((b) => jaccard(qw, words(b)) >= 0.7);
}

/* ---------------- quiz windows ---------------- */
function quizState(program: Program, overrides: { course: string; aid: string; data: Partial<Assessment> }[], course: string, now = Date.now()) {
  const c = program.semesters.flatMap((s) => s.courses).find((x) => x.slug === course);
  if (!c) throw new Stop("bad_request", "Unknown course.");
  const list = c.assessments.map((a) => Object.assign({}, a, overrides.find((o) => o.course === course && o.aid === a.id)?.data ?? {}));
  let locked: Assessment | null = null, eve: Assessment | null = null, next: Assessment | null = null;
  for (const a of list) {
    if (!a.start || !a.end) continue;
    const s = Date.parse(a.start), e = Date.parse(a.end);
    if (now >= s && now < e) locked = a;                          // the quiz itself: AI off for this course
    if (now >= s - 24 * 3600_000 && now < s) eve = a;              // its eve: limits multiply
    if (s > now && (!next || s < Date.parse(next.start!))) next = a;
  }
  return { course: c, locked, eve, next };
}

/* ---------------- request handling ---------------- */
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  const auth = req.headers.get("Authorization") ?? "";
  const asUser = createClient(SUPABASE_URL, PUBLISHABLE_KEY, { global: { headers: { Authorization: auth } }, auth: { persistSession: false } });
  const svc = createClient(SUPABASE_URL, secretKey(), { auth: { persistSession: false, autoRefreshToken: false } });

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return json({ error: "bad JSON", code: "bad_request" }, 400); }
  const action = String(body.action ?? "");
  let requestId: string | null = null;

  try {
    const { data: userData } = await asUser.auth.getUser(auth.replace(/^Bearer\s+/i, ""));
    const user = userData?.user;
    if (!user) throw new Stop("signed_out", "Sign in with your IITJ account to use the AI features.", 401);
    const [{ data: isAdmin }, { data: isMember }] = await Promise.all([asUser.rpc("is_admin"), asUser.rpc("is_ai_member")]);
    if (["recheck", "pregenerate"].includes(action)) {
      if (isAdmin !== true) throw new Stop("forbidden", "Admins only.", 403);
    } else if (isMember !== true && isAdmin !== true) {
      throw new Stop("not_member", "The AI features are in a closed beta. Join the waiting list from your account page.", 403);
    }

    const { data: settings, error: sErr } = await svc.from("ai_settings").select("*").eq("id", 1).single();
    if (sErr) throw sErr;
    if (!settings.enabled && isAdmin !== true) throw new Stop("off", "The AI features are switched off right now. Everything else in the hub works as usual.", 503);

    const course = String(body.course ?? "");
    const { program, courses } = await site();
    const C = courses.get(course);
    if (!C) throw new Stop("bad_request", "Unknown course.");
    const { data: overrides } = await svc.from("assessment_overrides").select("course, aid, data");
    const quiz = quizState(program, overrides ?? [], course);
    if (quiz.locked) throw new Stop("quiz_lock", `AI is off for ${quiz.course.name} while ${quiz.locked.name} is running. It comes back when the quiz ends.`, 423);

    const { data: spent } = await svc.rpc("ai_spent_today");
    if (Number(spent) >= Number(settings.daily_budget_inr))
      throw new Stop("budget", "The AI has used today's budget and is paused until midnight. Everything else in the hub works as usual.", 429);

    const usdInr = Number(settings.usd_inr);
    const costOf = (key: string, inp: number, out: number) => (inp * MODELS[key].price[0] + out * MODELS[key].price[1]) / 1e6;
    const logCall = async (key: string, role: string, o: { input: number; output: number; ms: number } | null, err?: string) => {
      const usd = o ? costOf(key, o.input, o.output) : 0;
      await svc.from("ai_usage").insert({ request_id: requestId, model: key, role, ok: !err, error: err?.slice(0, 500) ?? null,
        input_tokens: o?.input ?? 0, output_tokens: o?.output ?? 0, cost_usd: usd, cost_inr: usd * usdInr, ms: o?.ms ?? 0 });
      return usd * usdInr;
    };
    /* one provider call, logged; a Claude refusal is retried once on the other provider */
    async function call<T>(key: string, role: string, system: string, user: string, schema: z.ZodType<T>, jsonSchema: unknown): Promise<Out<T>> {
      const m = MODELS[key];
      try {
        const o = m.provider === "anthropic" ? await callAnthropic(m.id, system, user, schema, requestId ?? crypto.randomUUID())
                                             : await callGemini(m.id, system, user, schema, jsonSchema);
        await logCall(key, role, o);
        return { ...o, model: key };
      } catch (e) {
        await logCall(key, role, null, String((e as Error).message ?? e));
        if (e instanceof Refused && REFUSAL_FALLBACK[key]) return call(REFUSAL_FALLBACK[key], role, system, user, schema, jsonSchema);
        throw e;
      }
    }
    const startRequest = async (feature: string, unit: string | null, topic: string | null, uid: string | null) => {
      const { data, error } = await svc.from("ai_requests").insert({ user_id: uid, feature, course, unit, topic }).select("id").single();
      if (error) throw error;
      requestId = data.id;
    };
    const finish = async (patch: Record<string, unknown>) => {
      const { data: calls } = await svc.from("ai_usage").select("cost_inr").eq("request_id", requestId);
      const cost = (calls ?? []).reduce((s, r) => s + Number(r.cost_inr), 0);
      await svc.from("ai_requests").update({ ...patch, cost_inr: cost, finished_at: new Date().toISOString() }).eq("id", requestId);
      return cost;
    };
    /* the student's daily allowance. The request row is written first and counted with the
       others, so two requests fired together can't both slip under the limit. */
    const withinLimit = async (feature: string, perDay: number) => {
      const allowed = Math.floor(perDay * (quiz.eve ? Number(settings.eve_multiplier) : 1));
      const { count } = await svc.from("ai_requests").select("id", { count: "exact", head: true })
        .eq("user_id", user.id).eq("feature", feature).gte("created_at", dayStart())
        .or("ok.eq.true,finished_at.is.null");
      if ((count ?? 0) > allowed) {
        await finish({ ok: false, error: "daily limit" });
        throw new Stop("limit", quiz.eve
          ? `You've used today's ${allowed} (doubled for ${quiz.eve.name} tomorrow). They reset at midnight.`
          : `You've used today's ${allowed}. They reset at midnight.`, 429);
      }
    };
    const topicOf = (name: string) => {
      const t = C.topics.find((x) => x.name === name);
      if (!t) throw new Stop("bad_request", "Unknown topic.");
      return t;
    };
    const writerFor = () => {
      const pick = (settings.models ?? {})[course] ?? {};
      const writer = MODELS[pick.writer] ? pick.writer : "sonnet";
      let referee = MODELS[pick.referee] ? pick.referee : OTHER_PROVIDER[MODELS[writer].provider];
      if (MODELS[referee].provider === MODELS[writer].provider) referee = OTHER_PROVIDER[MODELS[writer].provider];
      return { writer, referee };
    };
    const refereeAgainst = (writerKey: string, configured: string) =>
      MODELS[configured].provider === MODELS[writerKey].provider ? OTHER_PROVIDER[MODELS[writerKey].provider] : configured;

    /* ---------- a batch of questions ---------- */
    if (action === "questions") {
      const t = topicOf(String(body.topic ?? ""));
      await startRequest("questions", t.unit, t.name, user.id);
      await withinLimit("questions", Number(settings.batches_per_day));
      const notes = await unitNotes(C, t.unit);
      const { data: pool } = await svc.from("ai_questions").select("item").eq("user_id", user.id).eq("course", course).neq("status", "withdrawn");
      const mine = (pool ?? []).map((r) => String(r.item?.q ?? ""));
      const n = Number(settings.batch_size) || 10;
      const { writer, referee } = writerFor();

      const gen = await call(writer, "write", genSystem(course), genUser(notes.title, notes.text, t.name, [...notes.bank, ...mine], n), GenSchema, GEN_JSON);
      const seen = [...notes.bank, ...mine];
      const candidates: Gen[] = [];
      for (const q of gen.data.questions.slice(0, n)) {
        if (formatProblems(q).length || nearDuplicate(q.question, seen)) continue;
        candidates.push(q); seen.push(q.question);
      }
      let kept: Gen[] = [];
      let refUsed = refereeAgainst(gen.model, referee);
      if (candidates.length) {
        const ref = await call(refUsed, "referee", refSystem, refUser(notes.text, candidates.map((q) => ({ question: q.question, options: q.options }))), RefSchema, REF_JSON);
        refUsed = ref.model;
        const verdict = new Map(ref.data.answers.map((a) => [a.index, a]));
        kept = candidates.filter((q, i) => { const a = verdict.get(i); return !!a && a.choice === q.answer_index && !a.ambiguous; });
      }
      const rows = kept.map((q) => ({
        id: `ai-${C.code}-${crypto.randomUUID().replace(/-/g, "").slice(0, 8)}`,
        user_id: user.id, course, unit: t.unit, topic: t.name, fingerprint: notes.fingerprint,
        writer: gen.model, referee: refUsed, request_id: requestId,
        item: { q: q.question, c: q.options, a: [q.answer_index], w: q.explanation, cite: q.source_quote, kind: q.kind },
      }));
      if (rows.length) { const { error } = await svc.from("ai_questions").insert(rows); if (error) throw error; }
      // a batch that kept nothing doesn't use up one of the student's batches
      const cost = await finish({ ok: rows.length > 0, asked: gen.data.questions.length, kept: rows.length,
        error: rows.length ? null : "no question passed the checks" });
      if (!rows.length) throw new Stop("none_kept", "None of the new questions passed our checks this time, so nothing was added and it doesn't count against today's limit. Try again.", 200);
      return json({ ok: true, questions: rows.map((r) => ({ id: r.id, topic: r.topic, unit: r.unit, ...r.item })),
        asked: gen.data.questions.length, kept: rows.length, cost_inr: +cost.toFixed(2) });
    }

    /* ---------- a lesson ---------- */
    if (action === "lesson") {
      const kind = String(body.kind ?? "");
      if (!LESSON_FOCUS[kind]) throw new Stop("bad_request", "Unknown lesson kind.");
      const t = topicOf(String(body.topic ?? ""));
      const notes = await unitNotes(C, t.unit);
      const { writer } = writerFor();
      const shared = kind !== "confusion";

      if (shared) {   // written once per topic and notes version
        const { data: have } = await svc.from("ai_lessons").select("id, kind, topic, body, created_at").is("user_id", null)
          .eq("course", course).eq("topic", t.name).eq("kind", kind).eq("fingerprint", notes.fingerprint).eq("status", "live").maybeSingle();
        if (have) return json({ ok: true, lesson: have, cached: true });
      }
      await startRequest(shared ? "lesson_shared" : "lesson_personal", t.unit, t.name, user.id);
      if (!shared) await withinLimit("lesson_personal", Number(settings.lessons_per_day));

      /* the student's own wrong answers on this topic: only questions they really got wrong */
      let wrong: string[] = [];
      if (!shared) {
        const asked = (Array.isArray(body.wrong) ? body.wrong : []).map(String).slice(0, 12);
        const { data: att } = await svc.from("attempts").select("qid").eq("user_id", user.id).eq("ok", false).in("qid", asked.length ? asked : ["-"]);
        const really = new Set((att ?? []).map((a) => a.qid));
        const picks = (body.picks ?? {}) as Record<string, string>;
        const { data: aiq } = await svc.from("ai_questions").select("id, item, topic").eq("user_id", user.id).in("id", [...really].filter((x) => x.startsWith("ai-")).concat("-"));
        const byId = new Map<string, { id: string; q: string; c: string[]; a: number[]; topic: string }>([
          ...C.questions.map((q) => [q.id, q] as const),
          ...(aiq ?? []).map((r) => [r.id, { ...r.item, id: r.id, topic: r.topic }] as const)]);
        wrong = [...really].map((id) => byId.get(id)).filter((q): q is NonNullable<typeof q> => !!q && q.topic === t.name).map((q) => {
          const picked = q.c.find((o) => htmlToText(o) === picks[q.id]);
          return `Question: ${htmlToText(q.q)}\nOptions: ${q.c.map(htmlToText).join(" | ")}\nCorrect: ${q.a.map((i) => htmlToText(q.c[i])).join(" | ")}`
            + (picked ? `\nThey picked: ${htmlToText(picked)}` : "");
        });
        if (!wrong.length) { await finish({ ok: false, error: "no wrong answers" }); throw new Stop("bad_request", "Get a question on this topic wrong first, and this lesson will work from your mistakes."); }
      }

      const out = await call(writer, "lesson", lessonSystem(course), lessonUser(notes.title, notes.text, t.name, kind, wrong), LessonSchema, LESSON_JSON);
      const checks = out.data.checks.filter((q) => !formatProblems(q).length).slice(0, 3)
        .map((q) => ({ q: q.question, c: q.options, a: [q.answer_index], w: q.explanation }));
      const lesson = { explanation: out.data.explanation, example: out.data.example, confusion: out.data.confusion, checks };
      const { data: row, error } = await svc.from("ai_lessons").insert({ user_id: shared ? null : user.id, kind, course, unit: t.unit, topic: t.name,
        fingerprint: notes.fingerprint, model: out.model, body: lesson, request_id: requestId }).select("id, kind, topic, body, created_at").single();
      if (error) {
        // two students asked for the same shared lesson at once: serve the one that landed first
        if (shared && error.code === "23505") {
          const { data: have } = await svc.from("ai_lessons").select("id, kind, topic, body, created_at").is("user_id", null).eq("course", course)
            .eq("topic", t.name).eq("kind", kind).eq("fingerprint", notes.fingerprint).eq("status", "live").single();
          await finish({ ok: true });
          return json({ ok: true, lesson: have, cached: true });
        }
        throw error;
      }
      await finish({ ok: true });
      return json({ ok: true, lesson: row, cached: false });
    }

    /* ---------- admin: notes changed, re-solve AI questions blind against the new notes ---------- */
    if (action === "recheck") {
      await startRequest("recheck", null, null, null);
      const { data: live } = await svc.from("ai_questions").select("id, unit, item, referee, writer, fingerprint, status")
        .eq("course", course).in("status", ["live", "rechecking", "promoted"]);
      let checked = 0, passed = 0, withdrawn = 0, queued = 0, stale = 0, more = false;
      const byUnit = new Map<string, typeof live>();
      for (const q of live ?? []) { const a = byUnit.get(q.unit) ?? []; a.push(q); byUnit.set(q.unit, a); }
      const started = Date.now();
      for (const [unit, qs] of byUnit) {
        if (Date.now() - started > 90_000) { more = true; break; }   // stay inside the function's time limit; run again for the rest
        const notes = await unitNotes(C, unit).catch(() => null);
        const due = (qs ?? []).filter((q) => !notes || q.fingerprint !== notes.fingerprint);
        if (!due.length) continue;
        if (!notes) {   // the unit is gone from the notes
          for (const q of due) {
            if (q.status === "promoted") { queued++; continue; }
            await svc.from("ai_questions").update({ status: "withdrawn", status_note: "its notes unit was removed", changed_at: new Date().toISOString() }).eq("id", q.id);
            withdrawn++;
          }
          continue;
        }
        for (let i = 0; i < due.length; i += 10) {
          const part = due.slice(i, i + 10);
          const refKey = refereeAgainst(part[0].writer in MODELS ? part[0].writer : "gemini-flash", writerFor().referee);
          const ref = await call(refKey, "recheck", refSystem, refUser(notes.text, part.map((q) => ({ question: q.item.q, options: q.item.c }))), RefSchema, REF_JSON);
          const verdict = new Map(ref.data.answers.map((a) => [a.index, a]));
          for (const [k, q] of part.entries()) {
            checked++;
            const a = verdict.get(k);
            const ok = !!a && a.choice === q.item.a[0] && !a.ambiguous;
            const now = new Date().toISOString();
            if (ok) { passed++; await svc.from("ai_questions").update({ fingerprint: notes.fingerprint, status: q.status === "promoted" ? "promoted" : "live", changed_at: now }).eq("id", q.id); }
            else if (q.status === "promoted") { queued++; await svc.from("ai_questions").update({ status_note: `failed the re-check after a notes change (${now.slice(0, 10)}): review its bank copy`, changed_at: now }).eq("id", q.id); }
            else { withdrawn++; await svc.from("ai_questions").update({ status: "withdrawn", status_note: "failed the re-check after a notes change", changed_at: now }).eq("id", q.id); }
          }
        }
      }
      // stored lessons written from old notes are retired; the next request writes fresh ones
      const fps = new Map<string, string>();
      for (const u of C.units) fps.set(u.id, (await unitNotes(C, u.id)).fingerprint);
      const { data: lessons } = await svc.from("ai_lessons").select("id, unit, fingerprint").eq("course", course).eq("status", "live");
      for (const l of lessons ?? []) if (fps.get(l.unit) !== l.fingerprint) { stale++; await svc.from("ai_lessons").update({ status: "stale" }).eq("id", l.id); }
      await finish({ ok: true, asked: checked, kept: passed });
      return json({ ok: true, checked, passed, withdrawn, queued, lessons_retired: stale, done: !more });
    }

    /* ---------- admin: shared lessons for the next quiz's syllabus, a few per call ---------- */
    if (action === "pregenerate") {
      const a = quiz.next;
      if (!a) return json({ ok: true, done: true, made: 0, note: "No upcoming quiz with a date for this course." });
      const scope = a.scope === "all" || !a.scope ? C.units.map((u) => u.id) : ([] as string[]).concat(a.scope);
      const topics = C.topics.filter((t) => scope.includes(t.unit));
      const { writer } = writerFor();
      let made = 0;
      const started = Date.now();
      await startRequest("pregenerate", null, null, null);
      for (const t of topics) {
        const notes = await unitNotes(C, t.unit);
        for (const kind of ["simpler", "example"]) {
          const { data: have } = await svc.from("ai_lessons").select("id").is("user_id", null).eq("course", course).eq("topic", t.name)
            .eq("kind", kind).eq("fingerprint", notes.fingerprint).eq("status", "live").maybeSingle();
          if (have) continue;
          if (Date.now() - started > 80_000) {
            await finish({ ok: true, kept: made });
            return json({ ok: true, done: false, made, for: a.name });
          }
          const out = await call(writer, "lesson", lessonSystem(course), lessonUser(notes.title, notes.text, t.name, kind, []), LessonSchema, LESSON_JSON);
          const checks = out.data.checks.filter((q) => !formatProblems(q).length).slice(0, 3)
            .map((q) => ({ q: q.question, c: q.options, a: [q.answer_index], w: q.explanation }));
          const { error } = await svc.from("ai_lessons").insert({ user_id: null, kind, course, unit: t.unit, topic: t.name, fingerprint: notes.fingerprint,
            model: out.model, request_id: requestId, body: { explanation: out.data.explanation, example: out.data.example, confusion: out.data.confusion, checks } });
          if (error && error.code !== "23505") throw error;
          made++;
        }
      }
      await finish({ ok: true, kept: made });
      return json({ ok: true, done: true, made, for: a.name });
    }

    throw new Stop("bad_request", "Unknown action.");
  } catch (e) {
    if (e instanceof Stop) return json({ ok: false, code: e.code, error: e.message }, e.status);
    const msg = String((e as Error)?.message ?? e).slice(0, 500);
    if (requestId) await svc.from("ai_requests").update({ ok: false, error: msg, finished_at: new Date().toISOString() }).eq("id", requestId);
    console.error(e);
    return json({ ok: false, code: "failed", error: "Something went wrong writing that. Nothing was charged to your daily limit; try again in a minute." }, 500);
  }
});

/* the start of today in India, as an ISO string (daily limits reset at midnight IST) */
function dayStart() {
  const ist = new Date(Date.now() + 5.5 * 3600_000);
  return new Date(Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate()) - 5.5 * 3600_000).toISOString();
}

/* for tools/test-ai.ts: the pure parts, checked without calling a provider */
export { site, unitNotes, quizState, formatProblems, nearDuplicate, dayStart };
