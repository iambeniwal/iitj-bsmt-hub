// Checks the ai Edge Function's pure parts against the live site, without calling
// any provider or the database:   deno run -A tools/test-ai.ts
Deno.serve = (() => ({})) as unknown as typeof Deno.serve;          // importing the function mustn't start a server
Deno.env.set("SUPABASE_URL", "http://localhost");
const ai = await import("../supabase/functions/ai/index.ts");
let fails = 0;
const check = (name: string, ok: boolean, detail = "") => { if (!ok) fails++; console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? "  — " + detail : ""}`); };

const { program, courses } = await ai.site();
check("loads all six courses from the live site", courses.size === 6, [...courses.keys()].join(", "));
const foc = courses.get("foundations-of-computing")!;
const t = foc.topics[0];
const a = await ai.unitNotes(foc, t.unit), b = await ai.unitNotes(foc, t.unit);
check("a unit's notes become text with a stable fingerprint", a.text.length > 1000 && a.fingerprint === b.fingerprint && a.fingerprint.length === 16, `${a.text.length} chars, ${a.fingerprint}`);
check("the unit's bank questions come along for the duplicate check", a.bank.length > 5, `${a.bank.length}`);

const start = new Date(Date.now() + 2 * 3600_000), end = new Date(Date.now() + 3 * 3600_000);
const ov = [{ course: "foundations-of-computing", aid: "q2", data: { status: "upcoming", start: start.toISOString(), end: end.toISOString() } }];
let q = ai.quizState(program, ov, "foundations-of-computing");
check("2 hours before Quiz 2: its eve, not locked", !q.locked && q.eve?.id === "q2" && q.next?.id === "q2");
q = ai.quizState(program, ov, "foundations-of-computing", start.getTime() + 60_000);
check("during Quiz 2: locked", q.locked?.id === "q2");
q = ai.quizState(program, ov, "foundations-of-computing", end.getTime() + 1);
check("after it ends: unlocked", !q.locked);
q = ai.quizState(program, ov, "statistics-for-managers", start.getTime() + 60_000);
check("another course's quiz doesn't lock this one", !q.locked && !q.eve);

const good = { question: "Which stage of the IPO model turns data into a result?", options: ["Input", "Process", "Output", "Storage"], answer_index: 1, explanation: "Processing transforms the input; output only presents it." };
check("a clean question passes the format checks", ai.formatProblems(good).length === 0, ai.formatProblems(good).join(", "));
check("'the second option' is caught", ai.formatProblems({ ...good, explanation: "The second option is right." }).length > 0);
check("'none of the above' is caught", ai.formatProblems({ ...good, options: ["Input", "Process", "Output", "None of the above"] }).length > 0);
check("duplicate options are caught", ai.formatProblems({ ...good, options: ["Input", "Input", "Output", "Storage"] }).length > 0);
check("a near-copy of a bank question is caught", ai.nearDuplicate(a.bank[0], [a.bank[0].replace(/\.$/, "") + "?"]));
check("an unrelated question isn't", !ai.nearDuplicate(good.question, a.bank.slice(0, 1)));
const ds = new Date(ai.dayStart());
check("the day starts at midnight IST", ds.getUTCHours() === 18 && ds.getUTCMinutes() === 30 && Date.now() - ds.getTime() < 86400_000);

console.log(fails ? `\n${fails} failed` : "\nall passed");
Deno.exit(fails ? 1 : 0);
