// =====================================================================
// ai-pilot: the AI model test (specs/ai-beta.md §6). Admin only.
//
// POST { action: "generate", run, model, course, unit, n }
//   One model writes n questions from one notes unit. Every question
//   gets automatic checks and is stored in ai_pilot_items.
// POST { action: "referee", run, ids: [...] }
//   The fixed referee (Claude Opus 5) answers those questions blind,
//   without seeing the key, from the same notes.
//
// The provider keys live only in this function's secrets
// (ANTHROPIC_API_KEY, GEMINI_API_KEY); the browser never sees them.
// The notes come from the live site, never from the request, so a
// caller can't change what the models are grounded in.
//
// Refusal fallbacks are deliberately OFF here: a fallback would let a
// different model answer under this model's name and spoil the
// comparison. A refusal is recorded as a failed call instead.
// =====================================================================
import Anthropic from "npm:@anthropic-ai/sdk@0.131.0";
import { zodOutputFormat } from "npm:@anthropic-ai/sdk@0.131.0/helpers/zod";
import { z } from "npm:zod@4";
import { createClient } from "npm:@supabase/supabase-js@2.117.2";

const SITE = "https://iambeniwal.github.io/iitj-bsmt-hub";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const PUBLISHABLE_KEY = "sb_publishable_6D3-SW5iw-YDoeWmkvPaag_c5Y150nq";   // public by design

/* USD per million tokens, checked 5 Oct 2026 (Anthropic and Google price pages).
   Gemini 3.8 Flash is a promotional rate until 31 Dec 2026; it doubles after. */
const MODELS: Record<string, { provider: "anthropic" | "google"; id: string; price: [number, number] }> = {
  "opus":         { provider: "anthropic", id: "claude-opus-5",          price: [5, 25] },
  "sonnet":       { provider: "anthropic", id: "claude-sonnet-5",        price: [2, 10] },
  "gemini-pro":   { provider: "google",    id: "gemini-3.1-pro-preview", price: [2, 12] },
  "gemini-flash": { provider: "google",    id: "gemini-3.8-flash",       price: [0.75, 3.75] },
};
const REFEREE = "opus";
const COURSES = ["foundations-of-computing", "economic-business-history", "algorithmic-thinking-in-business",
  "financial-accounting", "statistics-for-managers", "principles-of-marketing"];
/* stop well before the $10 provider limits, so a test never fails half-way on a hard cap */
const RUN_CAP_USD = { anthropic: 9, google: 9 };

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

/* ---------------- notes, straight from the live site ---------------- */
type Course = { slug: string; units: { id: string; title: string; lede: string; topics: { t: string; h: string }[] }[];
  topics: { name: string; unit: string }[]; questions: { id: string; topic: string; q: string }[] };
const courseCache = new Map<string, Course>();
async function loadCourse(slug: string): Promise<Course> {
  if (courseCache.has(slug)) return courseCache.get(slug)!;
  const res = await fetch(`${SITE}/content/sem1/${slug}.js`);
  if (!res.ok) throw new Error(`couldn't load ${slug}: ${res.status}`);
  const HUB = { courses: {} as Record<string, Course>, addCourse(c: Course) { this.courses[c.slug] = c; } };
  new Function("HUB", await res.text())(HUB);          // our own published content file
  const c = HUB.courses[slug];
  if (!c) throw new Error(`${slug} did not register`);
  courseCache.set(slug, c);
  return c;
}

const ENT: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', nbsp: " ", mdash: "—", ndash: "–", rarr: "→", larr: "←", times: "×", minus: "−", middot: "·", hellip: "…", ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’" };
function htmlToText(h: string): string {
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
    .trim();
}
function unitNotes(c: Course, unitId: string) {
  const u = c.units.find((x) => x.id === unitId);
  if (!u) throw new Error(`no unit ${unitId} in ${c.slug}`);
  const text = [`# ${htmlToText(u.title)}`, htmlToText(u.lede || ""),
    ...u.topics.map((t) => `## ${htmlToText(t.t)}\n${htmlToText(t.h)}`)].join("\n\n");
  const topicNames = new Set(c.topics.filter((t) => t.unit === unitId).map((t) => t.name));
  const bank = c.questions.filter((q) => topicNames.has(q.topic)).map((q) => q.q);
  return { title: htmlToText(u.title), text, bank };
}

/* ---------------- prompts (identical for every model) ---------------- */
const COURSE_NAMES: Record<string, string> = {
  "foundations-of-computing": "Foundations of Computing", "economic-business-history": "Economic & Business History",
  "algorithmic-thinking-in-business": "Algorithmic Thinking in Business", "financial-accounting": "Financial Accounting",
  "statistics-for-managers": "Statistics for Managers", "principles-of-marketing": "Principles of Marketing",
};
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

const genUser = (title: string, notes: string, bank: string[], n: number) =>
  `Notes unit: ${title}\n\n<notes>\n${notes}\n</notes>\n\n<existing_bank_questions>\n${bank.slice(0, 120).map((q) => "- " + q).join("\n")}\n</existing_bank_questions>\n\nWrite ${n} new questions.`;

const refSystem = `You are checking multiple-choice practice questions before students see them. Answer each question using only the course notes provided. You are not told the intended answer.
For each question give: the option index you choose (0-based), your confidence (high, medium or low), whether more than one option could reasonably be defended (ambiguous), and a one-line note.`;

const refUser = (notes: string, qs: { question: string; options: string[] }[]) =>
  `<notes>\n${notes}\n</notes>\n\n` + qs.map((q, i) =>
    `Question ${i}: ${q.question}\n${q.options.map((o, k) => `  [${k}] ${o}`).join("\n")}`).join("\n\n");

/* ---------------- output schemas ---------------- */
const GenSchema = z.object({ questions: z.array(z.object({
  question: z.string(), options: z.array(z.string()), answer_index: z.number().int(),
  explanation: z.string(), source_quote: z.string(), kind: z.enum(["recall", "application", "calculation"]),
})) });
const RefSchema = z.object({ answers: z.array(z.object({
  index: z.number().int(), choice: z.number().int(), confidence: z.enum(["high", "medium", "low"]),
  ambiguous: z.boolean(), note: z.string(),
})) });
/* the same shapes as plain JSON Schema, for Gemini's responseJsonSchema */
const GEN_JSON = { type: "object", properties: { questions: { type: "array", items: { type: "object", properties: {
  question: { type: "string" }, options: { type: "array", items: { type: "string" } }, answer_index: { type: "integer" },
  explanation: { type: "string" }, source_quote: { type: "string" }, kind: { type: "string", enum: ["recall", "application", "calculation"] },
}, required: ["question", "options", "answer_index", "explanation", "source_quote", "kind"] } } }, required: ["questions"] };

/* ---------------- providers ---------------- */
type Out<T> = { data: T; input: number; output: number; ms: number };
const anthropic = new Anthropic({ apiKey: Deno.env.get("ANTHROPIC_API_KEY"), maxRetries: 1, timeout: 140_000 });

async function callAnthropic<T>(model: string, system: string, user: string, schema: z.ZodType<T>): Promise<Out<T>> {
  const t0 = Date.now();
  const r = await anthropic.messages.parse({
    model, max_tokens: 16000, system,
    messages: [{ role: "user", content: user }],
    output_config: { format: zodOutputFormat(schema) },
  });
  if (r.stop_reason === "refusal") throw new Error(`refused (${r.stop_details?.category ?? "no category"})`);
  if (r.stop_reason === "max_tokens") throw new Error("hit max_tokens");
  if (!r.parsed_output) throw new Error("output did not match the schema");
  const u = r.usage;
  return { data: r.parsed_output as T, ms: Date.now() - t0,
    input: (u.input_tokens ?? 0) + (u.cache_creation_input_tokens ?? 0) + (u.cache_read_input_tokens ?? 0), output: u.output_tokens ?? 0 };
}

async function callGemini<T>(model: string, system: string, user: string, schema: z.ZodType<T>, jsonSchema: unknown): Promise<Out<T>> {
  const t0 = Date.now();
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": Deno.env.get("GEMINI_API_KEY") ?? "" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ role: "user", parts: [{ text: user }] }],
      generationConfig: { responseMimeType: "application/json", responseJsonSchema: jsonSchema, maxOutputTokens: 16000 },
    }),
    signal: AbortSignal.timeout(140_000),
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

/* ---------------- automatic checks ---------------- */
const POSREF = /\boptions? ?[1-6A-D]\b|\b(first|second|third|fourth|last) (option|answer|choice)|\b(all|none) of the above\b/i;
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const words = (s: string) => new Set(norm(s).split(" ").filter((w) => w.length > 2));
function jaccard(a: Set<string>, b: Set<string>) {
  let i = 0; a.forEach((w) => { if (b.has(w)) i++; });
  return i / Math.max(1, a.size + b.size - i);
}
type Item = z.infer<typeof GenSchema>["questions"][number];
function checkItem(q: Item, notes: string, bank: string[]) {
  const problems: string[] = [];
  if (q.options.length !== 4) problems.push(`${q.options.length} options`);
  if (new Set(q.options.map(norm)).size !== q.options.length) problems.push("duplicate options");
  if (q.options.some((o) => !o.trim())) problems.push("empty option");
  if (!(q.answer_index >= 0 && q.answer_index < q.options.length)) problems.push("answer index out of range");
  if (POSREF.test(q.question + " " + q.explanation + " " + q.options.join(" "))) problems.push("positional or all/none-of-the-above wording");
  if (q.question.length < 15 || q.question.length > 500) problems.push("question length");
  if (q.options.some((o) => o.length > 220)) problems.push("option too long");
  if (q.explanation.split(/\s+/).length > 90) problems.push("explanation too long");
  const quote = norm(q.source_quote);
  const quote_found = quote.length >= 8 && norm(notes).includes(quote);
  const qw = words(q.question);
  let near = null as null | string, best = 0;
  for (const b of bank) { const j = jaccard(qw, words(b)); if (j > best) { best = j; near = b; } }
  return { format_ok: problems.length === 0, problems, quote_found, near_duplicate_of: best >= 0.7 ? near : null, similarity: +best.toFixed(2) };
}

/* ---------------- request handling ---------------- */
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  // act as the signed-in caller, so every read and write goes through row-level security
  const auth = req.headers.get("Authorization") ?? "";
  const db = createClient(SUPABASE_URL, PUBLISHABLE_KEY, { global: { headers: { Authorization: auth } }, auth: { persistSession: false } });
  const { data: isAdmin, error: adminErr } = await db.rpc("is_admin");
  if (adminErr || isAdmin !== true) return json({ error: "admin only" }, 403);

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return json({ error: "bad JSON" }, 400); }
  const run = String(body.run ?? "");
  if (!/^[a-z0-9-]{3,40}$/.test(run)) return json({ error: "bad run id" }, 400);

  // the spend guard: total for this run, per provider, from our own call log
  const spent = async (provider: "anthropic" | "google") => {
    const names = Object.entries(MODELS).filter(([, m]) => m.provider === provider).map(([k]) => k);
    const { data } = await db.from("ai_pilot_calls").select("cost_usd").eq("run", run).in("model", names);
    return (data ?? []).reduce((s, r) => s + Number(r.cost_usd), 0);
  };
  const logCall = async (row: Record<string, unknown>) => {
    const { data, error } = await db.from("ai_pilot_calls").insert(row).select("id").single();
    if (error) throw error;
    return data.id as string;
  };
  const costOf = (key: string, input: number, output: number) => (input * MODELS[key].price[0] + output * MODELS[key].price[1]) / 1e6;

  try {
    if (body.action === "generate") {
      const key = String(body.model), course = String(body.course), unit = String(body.unit);
      const n = Math.min(10, Math.max(1, Number(body.n) || 5));
      if (!MODELS[key] || !COURSES.includes(course)) return json({ error: "unknown model or course" }, 400);
      const m = MODELS[key];
      if (await spent(m.provider) >= RUN_CAP_USD[m.provider]) return json({ error: `spend cap reached for ${m.provider}` }, 429);

      const notes = unitNotes(await loadCourse(course), unit);
      const sys = genSystem(course), user = genUser(notes.title, notes.text, notes.bank, n);
      let out: Out<z.infer<typeof GenSchema>>;
      try {
        out = m.provider === "anthropic" ? await callAnthropic(m.id, sys, user, GenSchema)
                                         : await callGemini(m.id, sys, user, GenSchema, GEN_JSON);
      } catch (e) {
        await logCall({ run, model: key, role: "generate", course, unit, ok: false, error: String((e as Error).message ?? e).slice(0, 500) });
        return json({ ok: false, error: String((e as Error).message ?? e) });
      }
      const callId = await logCall({ run, model: key, role: "generate", course, unit, ok: true,
        input_tokens: out.input, output_tokens: out.output, cost_usd: costOf(key, out.input, out.output), ms: out.ms });
      const rows = out.data.questions.map((q) => ({ run, model: key, course, unit, item: q, checks: checkItem(q, notes.text, notes.bank), call_id: callId }));
      const { data: ins, error } = await db.from("ai_pilot_items").insert(rows).select("id");
      if (error) throw error;
      return json({ ok: true, ids: ins.map((r) => r.id), count: rows.length, cost_usd: costOf(key, out.input, out.output), ms: out.ms });
    }

    if (body.action === "referee") {
      const ids = (Array.isArray(body.ids) ? body.ids : []).map(Number).filter(Number.isFinite).slice(0, 10);
      if (!ids.length) return json({ error: "no ids" }, 400);
      if (await spent("anthropic") >= RUN_CAP_USD.anthropic) return json({ error: "spend cap reached for anthropic" }, 429);
      const { data: items, error } = await db.from("ai_pilot_items").select("id, course, unit, item").in("id", ids).eq("run", run).order("id");
      if (error) throw error;
      if (!items.length) return json({ error: "no such items" }, 404);
      const { course, unit } = items[0];
      if (items.some((i) => i.course !== course || i.unit !== unit)) return json({ error: "one unit per referee call" }, 400);
      const notes = unitNotes(await loadCourse(course), unit);
      const qs = items.map((i) => ({ question: i.item.question as string, options: i.item.options as string[] }));
      let out: Out<z.infer<typeof RefSchema>>;
      try {
        out = await callAnthropic(MODELS[REFEREE].id, refSystem, refUser(notes.text, qs), RefSchema);
      } catch (e) {
        await logCall({ run, model: REFEREE, role: "referee", course, unit, ok: false, error: String((e as Error).message ?? e).slice(0, 500) });
        return json({ ok: false, error: String((e as Error).message ?? e) });
      }
      await logCall({ run, model: REFEREE, role: "referee", course, unit, ok: true,
        input_tokens: out.input, output_tokens: out.output, cost_usd: costOf(REFEREE, out.input, out.output), ms: out.ms });
      for (const a of out.data.answers) {
        const it = items[a.index];
        if (!it) continue;
        const referee = { choice: a.choice, confidence: a.confidence, ambiguous: a.ambiguous, note: a.note, agrees: a.choice === it.item.answer_index };
        const { error: upErr } = await db.from("ai_pilot_items").update({ referee }).eq("id", it.id);
        if (upErr) throw upErr;
      }
      return json({ ok: true, judged: out.data.answers.length, cost_usd: costOf(REFEREE, out.input, out.output), ms: out.ms });
    }

    if (body.action === "preview") {   // the exact notes text a unit sends, for checking; costs nothing
      const notes = unitNotes(await loadCourse(String(body.course)), String(body.unit));
      return json({ ok: true, title: notes.title, chars: notes.text.length, bank: notes.bank.length, text: notes.text.slice(0, 4000) });
    }
    return json({ error: "unknown action" }, 400);
  } catch (e) {
    console.error(e);
    return json({ error: String((e as Error).message ?? e) }, 500);
  }
});
