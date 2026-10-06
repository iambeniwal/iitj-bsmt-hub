/* ===================================================================
   Admin analytics: Overview → Activity (the whole cohort) and
   Students → a student (one person's study record). Loaded after
   admin.js, which calls into it.

   Built only from what the hub already stores: answers, flashcards,
   mock papers and AI use. Nothing new is collected for this, and only
   admins can read it (admin_cohort and admin_student_detail check
   is_admin() in the database).
   =================================================================== */
(function () {
"use strict";

const H = window.HUB, CL = H.cloud;
if (!H.ui || !CL || !CL.available) return;
const { esc, link, fmtDay, plural, META, SLUGS, QBY } = H.ui;
const fail = (el, e) => { el.innerHTML = `<div class="empty warnbox"><b>Couldn't load this.</b> ${esc(e.message || e)}</div>`; };
const n = v => Number(v || 0).toLocaleString("en-IN");
const pct = (a, b) => b ? Math.round(a * 100 / b) + "%" : "—";
const dayLabel = d => new Date(d + "T12:00:00+05:30").toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "Asia/Kolkata" });
const istDay = ts => new Date(ts).toLocaleDateString("sv-SE", { timeZone: "Asia/Kolkata" });

/* ---------- a single-series bar chart: one hue, a hover/focus tooltip, a table view ---------- */
function niceMax(v) {
  if (v <= 4) return Math.max(1, v);
  const p = Math.pow(10, Math.floor(Math.log10(v))), f = v / p;
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * p;
}
function chart({ title, sub, points, value, tip, cols }) {
  const max = niceMax(Math.max(0, ...points.map(value)));
  const id = "ch" + Math.random().toString(36).slice(2, 8);
  return `<figure class="chart" id="${id}">
    <figcaption><b>${esc(title)}</b>${sub ? ` <span class="hint">${esc(sub)}</span>` : ""}</figcaption>
    <div class="plot">
      <div class="yaxis" aria-hidden="true"><span>${n(max)}</span><span>0</span></div>
      <div class="cols" role="list">${points.map((p, i) => {
        const v = value(p);
        return `<div class="col" role="listitem" tabindex="0" data-i="${i}" aria-label="${esc(tip(p).replace(/<[^>]+>/g, " "))}">
          ${v ? `<div class="bar" style="height:${(v / max * 100).toFixed(2)}%"></div>` : ""}</div>`; }).join("")}</div>
    </div>
    <div class="xlabels" aria-hidden="true"><span>${esc(points[0].label)}</span><span>${esc(points[points.length - 1].label)}</span></div>
    <div class="ctip" hidden></div>
    <details class="ctable"><summary>Show as a table</summary><div class="scroller"><table><thead><tr>${cols.map(c => `<th>${esc(c[0])}</th>`).join("")}</tr></thead>
      <tbody>${points.slice().reverse().map(p => `<tr>${cols.map(c => `<td>${c[1](p)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></details>
  </figure>`;
}
/* after the chart's HTML is on the page: the tooltip follows the column under the pointer or focus */
function wireCharts(root, all) {
  root.querySelectorAll(".chart").forEach((fig, k) => {
    const spec = all[k], tipEl = fig.querySelector(".ctip"), plot = fig.querySelector(".cols");
    const show = col => {
      const p = spec.points[+col.dataset.i];
      tipEl.innerHTML = spec.tip(p); tipEl.hidden = false;
      const c = col.getBoundingClientRect(), f = fig.getBoundingClientRect();
      const x = Math.min(Math.max(c.left - f.left + c.width / 2, 70), f.width - 70);
      tipEl.style.left = x + "px"; tipEl.style.top = (plot.getBoundingClientRect().top - f.top - 6) + "px";
      fig.querySelectorAll(".col.on").forEach(x => x.classList.remove("on")); col.classList.add("on");
    };
    const hide = () => { tipEl.hidden = true; fig.querySelectorAll(".col.on").forEach(x => x.classList.remove("on")); };
    fig.querySelectorAll(".col").forEach(col => {
      col.addEventListener("mouseenter", () => show(col)); col.addEventListener("focus", () => show(col));
      col.addEventListener("mouseleave", hide); col.addEventListener("blur", hide);
    });
  });
}

/* ================= Overview → Activity ================= */
async function activity(el) {
  try {
    const c = await CL.rpc("admin_cohort", { days: 30 });
    const R = c.retention || {};
    const days = c.daily.map(d => ({ ...d, label: dayLabel(d.day) }));
    const weeks = c.weekly.map(w => ({ ...w, label: "w/c " + dayLabel(w.week) }));
    const specs = [
      { title: "Students active each day", sub: "last 30 days · answered at least one question", points: days, value: p => p.students,
        tip: p => `<b>${esc(p.label)}</b><br>${plural(p.students, "student")} · ${n(p.answers)} answers${p.signups ? `<br>${plural(p.signups, "new sign-up")}` : ""}`,
        cols: [["Day", p => esc(p.label)], ["Students", p => p.students], ["Answers", p => n(p.answers)], ["Sign-ups", p => p.signups || ""]] },
      { title: "Answers each day", sub: "last 30 days", points: days, value: p => p.answers,
        tip: p => `<b>${esc(p.label)}</b><br>${n(p.answers)} answers from ${plural(p.students, "student")}`,
        cols: [["Day", p => esc(p.label)], ["Answers", p => n(p.answers)], ["Students", p => p.students]] },
      { title: "Students active each week", sub: "last 8 weeks, Monday to Sunday", points: weeks, value: p => p.students,
        tip: p => `<b>${esc(p.label)}</b><br>${plural(p.students, "student")}`,
        cols: [["Week", p => esc(p.label)], ["Students", p => p.students]] }
    ];
    el.innerHTML = `<h3 class="subhead">Activity</h3>
      <div class="tiles">
        <div class="tile"><span class="k">Signed up</span><span class="v">${n(c.signed_up)}</span><span class="s">accounts</span></div>
        <div class="tile"><span class="k">Ever answered</span><span class="v">${n(c.ever_answered)}</span><span class="s">${pct(c.ever_answered, c.signed_up)} of accounts</span></div>
        <div class="tile"><span class="k">Came back another day</span><span class="v">${R.eligible ? pct(R.second_day, R.eligible) : "—"}</span><span class="s">${R.eligible ? `${R.second_day} of ${R.eligible} who started a week+ ago` : "nobody started a week ago yet"}</span></div>
        <div class="tile"><span class="k">Still here after week 1</span><span class="v">${R.eligible ? pct(R.after_week, R.eligible) : "—"}</span><span class="s">${R.eligible ? `answered again 7+ days after their first` : "nobody started a week ago yet"}</span></div>
      </div>
      <div class="charts">${specs.map(chart).join("")}</div>
      <p class="hint">Signed-in students only. Hover or tab through a chart for each day's numbers.</p>`;
    wireCharts(el, specs);
  } catch (e) { fail(el, e); }
}

/* ================= Students → one student ================= */
async function student(pane, uid) {
  try {
    const d = await CL.rpc("admin_student_detail", { target: uid });
    if (!d.profile) { pane.innerHTML = `<div class="empty">That account no longer exists.</div>`; return; }
    const P = d.profile, T = d.totals || {}, A = d.ai || {};
    // per course and per topic, from the content files
    const course = {}, topic = {};
    SLUGS.forEach(s => { course[s] = { seen: 0, n: 0, w: 0, mistakes: 0, bank: H.courses[s].questions.length }; });
    let aiAnswers = 0;
    d.questions.forEach(r => {
      const q = QBY[r.q];
      if (!q) { if (r.q.startsWith("ai-")) aiAnswers += r.n; return; }
      const c = course[q.course]; c.seen++; c.n += r.n; c.w += r.w;
      if (r.w > 0 && !(r.last && r.prev)) c.mistakes++;                 // the hub's rule: two right in a row clears a mistake
      const k = q.course + "|" + q.topic, t = topic[k] = topic[k] || { course: q.course, topic: q.topic, n: 0, w: 0 };
      t.n += r.n; t.w += r.w;
    });
    const weakest = Object.values(topic).filter(t => t.n >= 5).sort((a, b) => b.w / b.n - a.w / a.n).slice(0, 6);
    const byDay = Object.fromEntries(d.days.map(x => [x.day, x]));
    const days = [];
    for (let i = 29; i >= 0; i--) { const k = istDay(Date.now() - i * 864e5); const x = byDay[k] || { answers: 0, wrong: 0 }; days.push({ day: k, label: dayLabel(k), answers: x.answers, wrong: x.wrong }); }
    const spec = { title: "Answers each day", sub: "last 30 days", points: days, value: p => p.answers,
      tip: p => `<b>${esc(p.label)}</b><br>${n(p.answers)} answers${p.answers ? ` · ${pct(p.answers - p.wrong, p.answers)} right` : ""}`,
      cols: [["Day", p => esc(p.label)], ["Answers", p => n(p.answers)], ["Right", p => p.answers ? pct(p.answers - p.wrong, p.answers) : ""]] };
    const AIS = { approved: "AI beta member", waitlist: "on the AI waiting list", left: "left the AI beta", removed: "removed from the AI beta" };

    pane.innerHTML = `<p><a class="backlink" href="${link("admin", { tab: "students" })}">← All students</a></p>
      <div class="sechead"><h2>${esc(P.name || P.email)}</h2>${P.role === "admin" ? '<span class="lbl strong">admin</span>' : ""}${P.suspended ? '<span class="lbl weak">suspended</span>' : ""}</div>
      <p class="hint">${esc(P.email)} · joined ${fmtDay(P.created_at)} · last seen ${fmtDay(P.last_seen)}${A.status ? " · " + AIS[A.status] : ""}</p>
      <div class="tiles" style="margin-top:12px">
        <div class="tile"><span class="k">Answers</span><span class="v">${n(T.answers)}</span><span class="s">${T.answers ? pct(T.answers - T.wrong, T.answers) + " right" : "none yet"}</span></div>
        <div class="tile"><span class="k">Active days</span><span class="v">${n(T.active_days_30)}</span><span class="s">in the last 30 · ${n(T.active_days)} in all</span></div>
        <div class="tile"><span class="k">Last answer</span><span class="v">${T.last_at ? fmtDay(T.last_at) : "—"}</span><span class="s">${T.first_at ? "first on " + fmtDay(T.first_at) : ""}</span></div>
        <div class="tile"><span class="k">Mock papers</span><span class="v">${d.mocks.length}</span><span class="s">${d.cards.studied ? `${n(d.cards.studied)} flashcards studied · ${n(d.cards.due)} due` : "no flashcards yet"}</span></div>
        ${A.status ? `<div class="tile"><span class="k">AI</span><span class="v">${A.batches}<small> batches</small></span><span class="s">${plural(A.lessons, "lesson")} · ₹${Number(A.cost_inr).toFixed(2)} · ${A.questions} AI questions${aiAnswers ? ` · ${aiAnswers} answers` : ""}</span></div>` : ""}
      </div>
      <div class="charts">${chart(spec)}</div>

      <h3 class="subhead">By course</h3>
      <div class="scroller"><table><thead><tr><th>Course</th><th>Questions tried</th><th>Answers</th><th>Right</th><th>Open mistakes</th></tr></thead><tbody>
        ${SLUGS.map(s => { const c = course[s]; return `<tr${c.n ? "" : ' class="muted"'}><td>${esc(META[s].name)}</td><td>${c.seen} / ${c.bank}</td><td>${n(c.n)}</td><td>${c.n ? `<b>${pct(c.n - c.w, c.n)}</b>` : "—"}</td><td>${c.mistakes || ""}</td></tr>`; }).join("")}
      </tbody></table></div>

      <h3 class="subhead">Weakest topics <span class="hint">(5+ answers)</span></h3>
      ${weakest.length ? `<div class="scroller"><table><thead><tr><th>Topic</th><th>Course</th><th>Wrong</th><th>Answers</th></tr></thead><tbody>
        ${weakest.map(t => `<tr><td>${esc(t.topic)}</td><td>${esc(META[t.course].short)}</td><td><b>${pct(t.w, t.n)}</b></td><td>${t.n}</td></tr>`).join("")}</tbody></table></div>`
        : `<p class="hint">Not enough answers on any one topic yet.</p>`}

      <h3 class="subhead">Mock papers</h3>
      ${d.mocks.length ? `<div class="scroller"><table><thead><tr><th>Date</th><th>Course</th><th>Paper</th><th>Score</th><th>Right · wrong · blank</th><th>Time</th></tr></thead><tbody>
        ${d.mocks.slice().reverse().map(m => `<tr><td>${fmtDay(m.at)}</td><td>${esc(META[m.course]?.short || m.course)}</td><td>${esc((META[m.course]?.assessments.find(a => a.id === m.assessment) || {}).name || m.assessment)}</td>
          <td><b>${Number(m.score).toFixed(2).replace(/\.?0+$/, "")}</b> / ${m.max} (${pct(Math.max(0, m.score), m.max)})</td><td>${m.right} · ${m.wrong} · ${m.blank}</td><td>${Math.round(m.secs / 60)} min</td></tr>`).join("")}</tbody></table></div>`
        : `<p class="hint">No mock papers yet.</p>`}
      <p class="hint" style="margin-top:14px">From this student's answers, flashcards and mock papers as stored for their account. Guest-mode activity before they signed in is included once it moved into the account.</p>`;
    wireCharts(pane, [spec]);
  } catch (e) { fail(pane, e); }
}

H.adminStats = { activity, student };
})();
