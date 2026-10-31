/* ===================================================================
   Animated diagrams: a small player for figures in the notes.

   An animation is plain markup, written by tools/the books workspace and
   checked like any other visual (no scripts inside it):

     <div class="anim" data-ms="1100">
       <div class="af on" data-cap="Start: five unsorted values">…frame…</div>
       <div class="af" data-cap="Pass 1: 5 > 3, swap">…frame…</div>
       …
     </div>

   Each .af is one frame. Elements carrying the same data-k in consecutive
   frames glide from their old place to their new one, so a bar that swaps
   is seen to move. Without this script only the first frame shows.

   Behaviour: it plays by itself while on screen (a notes topic must be
   open), loops with a longer pause on the last frame, stops when scrolled
   away, and has a pause button. With "reduce motion" switched on in the
   device settings it never plays by itself: it starts on the first frame
   with previous / next buttons instead.
   =================================================================== */
(function () {
"use strict";

const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const GLIDE = 520;                       // ms for a keyed element to travel

function setup(root) {
  if (root.dataset.ready) return;
  root.dataset.ready = "1";
  const frames = [...root.querySelectorAll(":scope > .af")];
  if (frames.length < 2) return;
  const ms = Math.max(500, +root.dataset.ms || 1100);
  let i = Math.max(0, frames.findIndex(f => f.classList.contains("on")));
  let playing = !reduce, visible = false, timer = null;

  const bar = document.createElement("div");
  bar.className = "abar";
  bar.innerHTML = `<button type="button" class="abtn ap" aria-label="Previous step">‹</button>`
    + `<button type="button" class="abtn apause"></button>`
    + `<button type="button" class="abtn an" aria-label="Next step">›</button>`
    + `<span class="acap" aria-live="off"></span><span class="anum"></span>`;
  root.after(bar);
  const [prev, pause, next] = bar.querySelectorAll("button");
  const cap = bar.querySelector(".acap"), num = bar.querySelector(".anum");

  function paintBar() {
    pause.textContent = playing ? "❚❚" : "▶";
    pause.setAttribute("aria-label", playing ? "Pause the animation" : "Play the animation");
    bar.classList.toggle("paused", !playing);
    cap.textContent = frames[i].dataset.cap || "";
    num.textContent = `${i + 1}/${frames.length}`;
  }

  /* move to frame j; keyed elements glide from where they were */
  function show(j) {
    const from = frames[i], to = frames[j];
    const before = new Map();
    if (!reduce && from !== to) from.querySelectorAll("[data-k]").forEach(el => before.set(el.dataset.k, el.getBoundingClientRect()));
    from.classList.remove("on"); to.classList.add("on"); i = j;
    if (before.size) to.querySelectorAll("[data-k]").forEach(el => {
      const a = before.get(el.dataset.k); if (!a) return;
      const b = el.getBoundingClientRect();
      let dx = a.left - b.left, dy = a.top - b.top;
      if (!dx && !dy) return;
      const svg = el.ownerSVGElement;                 // inside an SVG, translate in its own units
      if (svg && svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width) {
        const k = svg.getBoundingClientRect().width / svg.viewBox.baseVal.width || 1;
        dx /= k; dy /= k;
      }
      el.style.transition = "none";
      el.style.transform = `translate(${dx}px,${dy}px)`;
      el.getBoundingClientRect();                     // commit the start position
      requestAnimationFrame(() => {
        el.style.transition = `transform ${GLIDE}ms cubic-bezier(.4,0,.2,1)`;
        el.style.transform = "";
      });
    });
    paintBar();
  }

  function tick() {
    clearTimeout(timer); timer = null;
    if (!playing || !visible || document.hidden) return;
    const last = i === frames.length - 1;
    timer = setTimeout(() => { show(last ? 0 : i + 1); tick(); }, last ? ms * 2.4 : (i === 0 ? ms * 1.4 : ms));
  }
  const setPlaying = on => { playing = on; paintBar(); tick(); };

  pause.addEventListener("click", () => setPlaying(!playing));
  prev.addEventListener("click", () => { setPlaying(false); show((i - 1 + frames.length) % frames.length); });
  next.addEventListener("click", () => { setPlaying(false); show((i + 1) % frames.length); });
  root.addEventListener("click", () => setPlaying(!playing));

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(es => es.forEach(e => { visible = e.isIntersecting && e.intersectionRatio > 0.4; tick(); }),
      { threshold: [0, 0.4, 0.8] }).observe(root);
  } else { visible = true; }
  document.addEventListener("visibilitychange", tick);
  paintBar(); tick();
}

function scan(scope) { (scope || document).querySelectorAll(".anim").forEach(setup); }

/* the notes are drawn by the router, so watch for new figures */
let pending = false;
new MutationObserver(() => {
  if (pending) return; pending = true;
  requestAnimationFrame(() => { pending = false; scan(); });
}).observe(document.documentElement, { childList: true, subtree: true });

window.HUB = window.HUB || {};
window.HUB.anim = { scan };
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => scan()); else scan();
})();
