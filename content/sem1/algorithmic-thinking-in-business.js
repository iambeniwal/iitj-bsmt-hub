/* algorithmic-thinking-in-business — migrated from iitj-bsmtsem1-quiz1-prep on 2026-10-04.
   IDs are permanent: append new items with the next free number, never renumber. */
HUB.addCourse({
 "slug": "algorithmic-thinking-in-business",
 "code": "atb",
 "eyebrow": "IIT Jodhpur · B.S. Management & Technology · Semester 1",
 "heading": "Algorithmic Thinking in Business<br>Quiz 1 Revision",
 "sub": "Modules 1 and 2 — algorithms and linear data structures. The examinable twelve lectures, compressed for a 40-question paper with negative marking.",
 "sources": "Compiled 26 September 2026 from the IITJ LMS: the in-scope lecture AI-summaries and full transcripts for Algorithmic Thinking in Business. Timings, question count, marking scheme and syllabus scope from the official LMS quiz announcement and its attached syllabus document. Topic weightings are an estimate, not an official mark scheme. <strong>This is a student-made study aid, not official IIT Jodhpur or Masai School course material</strong> — always check the LMS for the authoritative syllabus and quiz details.",
 "lectures": [
  [
   1,
   "Week 1 — Introduction to Algorithms",
   "Data, variables, functions, flowcharts",
   "rec"
  ],
  [
   2,
   "Week 1 — Pseudocode Representations",
   "Pseudocode vs code, data types",
   "rec"
  ],
  [
   3,
   "Week 1 — Live Lecture 1",
   "Course frame, algorithm vs code",
   "live"
  ],
  [
   4,
   "Week 2 — Properties of Algorithms Part A",
   "The five core properties",
   "rec"
  ],
  [
   5,
   "Week 2 — Properties of Algorithms Part B",
   "Four execution properties + 3 algorithm types",
   "rec"
  ],
  [
   6,
   "Week 2 — Arrays",
   "Indexing, operations, limits",
   "rec"
  ],
  [
   7,
   "Week 3 — Linked Lists",
   "Nodes, pointers, three variants",
   "rec"
  ],
  [
   8,
   "Week 3 — Live Lecture 2",
   "Properties + arrays and linked lists revision",
   "live"
  ],
  [
   9,
   "Week 4 — Stacks",
   "LIFO, push/pop/peek/size, overflow",
   "rec"
  ],
  [
   10,
   "Week 4 — Queue Fundamentals",
   "FIFO, enqueue/dequeue, static vs dynamic",
   "rec"
  ],
  [
   11,
   "Week 5 — Queue Types and Applications",
   "Linear, circular, priority, deque",
   "rec"
  ],
  [
   12,
   "Week 5 — Trees: Fundamentals",
   "Terms, depth and height, four traversals",
   "rec"
  ],
  [
   13,
   "Week 5 — Live Lecture 3",
   "Stacks and queues revision + quiz brief",
   "live"
  ],
  [
   14,
   "Week 6 — Trees: Types and Applications",
   "General, binary, complete, BST, AVL, heap",
   "rec"
  ],
  [
   15,
   "Week 6 — Graphs: Fundamentals",
   "Relationships, G = (V, E), degree",
   "rec"
  ],
  [
   16,
   "Week 7 — Graphs: Types",
   "Direction, in/out-degree, weight, connectivity, cycles",
   "rec"
  ],
  [
   17,
   "Week 7 — Graph Traversals",
   "DFS with a stack, BFS with a queue",
   "rec"
  ],
  [
   18,
   "Week 7 — Live Lecture 4",
   "Trees and graphs revision + quiz scope",
   "live"
  ],
  [
   19,
   "Week 8 — Hash Data Structures",
   "mod, hash tables, chaining, passwords, integrity",
   "rec"
  ],
  [
   20,
   "Week 8 — Blockchain: Concluding Non-linear Structures",
   "Hash-linked blocks, Merkle trees, consensus, uses",
   "rec"
  ]
 ],
 "units": [
  {
   "id": "basics",
   "title": "What an algorithm is",
   "tag": "Lectures 1, 3 · Module 1",
   "lede": "Four terms he defines and then reuses all semester — data, variable, algorithm, function — plus the flowchart symbols.",
   "topics": [
    {
     "t": "The four terms",
     "src": "L#1 · L#3",
     "h": "\n  <div class=\"def\">An <b>algorithm</b> is a series of organised, step-by-step instructions that converts <b>input data</b> into a <b>desired output</b>.</div>\n  <div class=\"scroller\"><table><thead><tr><th>Term</th><th>Definition</th><th>Tea-making analogy</th></tr></thead><tbody>\n   <tr><td><strong>Data</strong></td><td>The actual values you work with. <strong>Changes with each run</strong> of the algorithm</td><td>How much water and milk, for this many people</td></tr>\n   <tr><td><strong>Variable</strong></td><td>A construct that <strong>holds data</strong> during computation</td><td>The saucepan, the teacup — the vessels</td></tr>\n   <tr><td><strong>Algorithm</strong></td><td>The organised steps that complete the task</td><td>The whole recipe</td></tr>\n   <tr><td><strong>Function</strong></td><td>A <strong>reusable subgroup</strong> of steps, common across algorithms</td><td>&ldquo;Provide heat&rdquo; — the same wherever it appears</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>Why variables and not hard-coded numbers?</b> Hard-coding makes the algorithm work once. Variables let the <em>same</em> algorithm run on different data — that is what makes it reusable.</div>\n  <h4>Flowchart symbols — near-certain exam material</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Shape</th><th>Means</th></tr></thead><tbody>\n   <tr><td><strong>Rounded rectangle</strong></td><td>Start and end</td></tr>\n   <tr><td><strong>Rectangle</strong></td><td>Processing step</td></tr>\n   <tr><td><strong>Trapezoid</strong> (slanted rectangle)</td><td><strong>Input / output</strong></td></tr>\n   <tr><td><strong>Diamond</strong></td><td><strong>Decision</strong> — branching, yes/no</td></tr>\n   <tr><td><strong>Arrow</strong></td><td>Flow of logic</td></tr>\n   <tr><td>Rectangle with <strong>double vertical lines</strong></td><td>A <strong>function</strong> call</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\"><strong>One diamond gives you only yes/no.</strong> Multiple conditions need diamonds in sequence.</p><!--viz:atb-flowchart-symbols--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Legend of six flowchart symbols with a small example inside each: Start in a rounded rectangle, sum = a + b in a rectangle, Read amount in a slanted rectangle (the lecture calls it a trapezoid), PIN OK? in a diamond, an arrow, and average() in a rectangle with double vertical side lines.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Flowchart symbols at a glance</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 232\" role=\"img\" aria-label=\"Six flowchart symbols drawn as shapes: rounded rectangle for start and end, rectangle for a process, slanted rectangle for input or output, diamond for a decision, arrow for flow, and a rectangle with double side lines for a function call.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<rect x=\"23\" y=\"26\" width=\"104\" height=\"36\" rx=\"18.0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"75\" y=\"48.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Start</text>\n<rect x=\"158\" y=\"26\" width=\"124\" height=\"36\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"220\" y=\"48.5\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">sum = a + b</text>\n<path d=\"M321,26 L421,26 L409,62 L309,62 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"365\" y=\"48.5\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">Read amount</text>\n<path d=\"M75,122 L131,150 L75,178 L19,150 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"75\" y=\"154.6\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">PIN OK?</text>\n<path d=\"M174,150 L258,150\" style=\"stroke:var(--ink);stroke-width:1.5;fill:none\"/>\n<path d=\"M266,150 L258,154 L258,146 Z\" style=\"fill:var(--ink);stroke:none\"/>\n<rect x=\"307\" y=\"132\" width=\"116\" height=\"36\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<path d=\"M316,132 L316,168\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/>\n<path d=\"M414,132 L414,168\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/>\n<text x=\"365\" y=\"154.6\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">average()</text>\n<text x=\"75\" y=\"88\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-weight:700\">Start / end</text>\n<text x=\"220\" y=\"88\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-weight:700\">Process step</text>\n<text x=\"365\" y=\"88\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-weight:700\">Input / output</text>\n<text x=\"75\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-weight:700\">Decision</text>\n<text x=\"220\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-weight:700\">Flow of logic</text>\n<text x=\"365\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-weight:700\">Function call</text>\n<text x=\"75\" y=\"106\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">rounded rectangle</text>\n<text x=\"220\" y=\"106\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">rectangle</text>\n<text x=\"365\" y=\"106\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">trapezoid (slanted)</text>\n<text x=\"75\" y=\"216\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">diamond: yes / no</text>\n<text x=\"220\" y=\"216\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">arrow</text>\n<text x=\"365\" y=\"216\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">double side lines</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The shape tells you what the step does: a diamond answers only yes or no, and double side lines mean a function call.</figcaption></figure><!--/viz:atb-flowchart-symbols-->"
    },
    {
     "t": "The ATM example, and why algorithms grow",
     "src": "L#1 · L#3",
     "h": "\n  <h4>ATM cash dispensing — his worked business algorithm</h4>\n  <p style=\"font-size:14.5px\">Read card (input) → request PIN (input) → <strong>verify PIN (decision)</strong> → if wrong, end → request amount (input) → <strong>check balance (decision)</strong> → if insufficient, end → <strong>release cash (function)</strong> → end.</p>\n  <div class=\"def\">The observation he wanted: <b>not all paths run in a single execution.</b> Each run takes one route through the decisions; the others are skipped.</div>\n  <ul>\n   <li>All algorithms are <strong>simplifications</strong> of the real process. &ldquo;Add water&rdquo; silently includes finding the water, the container, and filling it.</li>\n   <li>They start simple and <strong>grow</strong> as checks, conditions and details are added — which is why good software gets frequent updates.</li>\n   <li><strong>Business systems are deterministic and calculation-based</strong>, so they are easier to algorithmise than physical systems like robotics or self-driving cars, which decide in real time.</li>\n  </ul>\n  <div class=\"warnbox\"><b>Algorithm vs code.</b> The algorithm is the logic and is <b>language-independent</b>. Code is one language's implementation of it. The same algorithm can be written in C, Java or Python and remain the same algorithm.</div><!--viz:atb-atm-flowchart--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Vertical flowchart: Start, Read card, Request PIN, decision PIN correct (No goes to End), Request amount, decision Balance OK (No goes to End), Release cash as a function, End. The all-Yes path is drawn in blue.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The ATM algorithm as a flowchart</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 500\" role=\"img\" aria-label=\"Flowchart of ATM cash withdrawal: start, read card, request PIN, PIN correct decision, request amount, balance enough decision, release cash function, end. A No at either decision leads to its own End.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<rect x=\"115\" y=\"8\" width=\"100\" height=\"32\" rx=\"16.0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"165\" y=\"28.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Start</text>\n<path d=\"M102,61 L240,61 L228,95 L90,95 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"165\" y=\"82.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Read card</text>\n<path d=\"M102,115 L240,115 L228,149 L90,149 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"165\" y=\"136.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Request PIN</text>\n<path d=\"M165,168 L247,200 L165,232 L83,200 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"165\" y=\"204.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">PIN correct?</text>\n<path d=\"M97,259 L245,259 L233,293 L85,293 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"165\" y=\"280.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Request amount</text>\n<path d=\"M165,320 L247,352 L165,384 L83,352 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"165\" y=\"356.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Balance OK?</text>\n<rect x=\"90\" y=\"407\" width=\"150\" height=\"34\" rx=\"2\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<path d=\"M99,407 L99,441\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/>\n<path d=\"M231,407 L231,441\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/>\n<text x=\"165\" y=\"428.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Release cash</text>\n<rect x=\"115\" y=\"462\" width=\"100\" height=\"32\" rx=\"16.0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"165\" y=\"482.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">End</text>\n<path d=\"M165,40 L165,53\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/>\n<path d=\"M165,61 L161,53 L169,53 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<path d=\"M165,95 L165,107\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/>\n<path d=\"M165,115 L161,107 L169,107 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<path d=\"M165,149 L165,160\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/>\n<path d=\"M165,168 L161,160 L169,160 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<path d=\"M165,232 L165,251\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/>\n<path d=\"M165,259 L161,251 L169,251 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<path d=\"M165,293 L165,312\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/>\n<path d=\"M165,320 L161,312 L169,312 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<path d=\"M165,384 L165,399\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/>\n<path d=\"M165,407 L161,399 L169,399 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<path d=\"M165,441 L165,454\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/>\n<path d=\"M165,462 L161,454 L169,454 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<text x=\"175\" y=\"247\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">Yes</text>\n<path d=\"M247,200 L314,200\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M322,200 L314,204 L314,196 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<text x=\"281\" y=\"192\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-weight:700\">No</text>\n<rect x=\"322\" y=\"184\" width=\"86\" height=\"32\" rx=\"16.0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"365\" y=\"204.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">End</text>\n<text x=\"175\" y=\"399\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">Yes</text>\n<path d=\"M247,352 L314,352\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M322,352 L314,356 L314,348 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<text x=\"281\" y=\"344\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-weight:700\">No</text>\n<rect x=\"322\" y=\"336\" width=\"86\" height=\"32\" rx=\"16.0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"365\" y=\"356.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">End</text>\n<text x=\"365\" y=\"234\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">wrong PIN</text>\n<text x=\"365\" y=\"386\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">too little money</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">A single run takes one route: the blue all-Yes path here, so the two side exits are skipped.</figcaption></figure><!--/viz:atb-atm-flowchart-->"
    },
    {
     "t": "Textbook: Intro to DSA, Types, and Big O",
     "src": "Codeless DSA ch1",
     "h": "<p>The chapter separates two ideas people often blur: a data structure organises and stores data, while an algorithm is the ordered procedure that works on that data. It introduces the four primitive (atomic) data types, the difference between mathematical and programming functions, and the twin repetition tools of recursion and iteration. It then names the three classic design approaches — divide and conquer, greedy and dynamic programming — and closes with how algorithms are judged: time and space complexity, best/worst/average case, and Big O growth classes from constant to factorial. For a manager, Big O is the language for asking whether a system that works for 1,000 customers will still work for 10 lakh.</p><!--viz:atb-recursion-unwind--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Trace of fact(4), the number of ways to arrange 4 products on a shelf: fact(4) needs fact(3), down to fact(1), the base case, which returns 1; results return up as 2, 6 and 24.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Recursion: down to the base case, back up with answers</div><div class=\"scroller\"><table><thead><tr><th>Call</th><th>Needs</th><th>Returns</th></tr></thead><tbody><tr><td style=\"font-family:var(--mono)\"><span style=\"font-family:var(--mono)\">fact(4)</span></td><td><span style=\"font-family:var(--mono)\">4 × fact(3)</span></td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">24</td></tr><tr><td style=\"font-family:var(--mono)\"><span style=\"font-family:var(--mono)\">fact(3)</span></td><td><span style=\"font-family:var(--mono)\">3 × fact(2)</span></td><td style=\"font-family:var(--mono)\">6</td></tr><tr><td style=\"font-family:var(--mono)\"><span style=\"font-family:var(--mono)\">fact(2)</span></td><td><span style=\"font-family:var(--mono)\">2 × fact(1)</span></td><td style=\"font-family:var(--mono)\">2</td></tr><tr><td style=\"font-family:var(--mono);background:var(--good-soft)\"><span style=\"font-family:var(--mono)\">fact(1)</span></td><td>base case: stop calling</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">1</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin:8px 0 0\">fact(4) counts the ways to arrange 4 products on a shelf. Calls go <b>down</b> the table until the base case; answers come back <b>up</b>: 1 → 2 → 6 → 24. Iteration gets the same 24 with a loop: start at 1, multiply by 2, 3, 4.</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Without the base case the calls never stop and the machine runs out of memory: recursion needs an exit just as a loop does.</figcaption></figure><!--/viz:atb-recursion-unwind--><!--viz:atb-ds-plus-algo--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Flow: data (raw sales records) goes into a data structure that organises it, an algorithm processes it, and the output is information (top 10 products).\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Data structures and algorithms work in tandem</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\"><b>Data</b><br><span style=\"color:var(--ink-2);font-size:13px\">raw sales records</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--clay);background:var(--clay-soft);border-radius:4px\"><b>Data structure</b><br><span style=\"color:var(--ink-2);font-size:13px\">organises and stores them</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--blue);background:var(--blue-soft);border-radius:4px\"><b>Algorithm</b><br><span style=\"color:var(--ink-2);font-size:13px\">ordered steps that process them</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--good);background:var(--good-soft);border-radius:4px\"><b>Information</b><br><span style=\"color:var(--ink-2);font-size:13px\">top 10 products this month</span></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The structure holds the pieces, the algorithm works on them: a good algorithm still stalls on badly organised data.</figcaption></figure><!--/viz:atb-ds-plus-algo--><p><strong>Data vs information</strong> — In the book, data is anything stored on or handled by a machine. Information is data after it has been processed into something useful. Developers often use the two words loosely, but the distinction matters when you ask what an algorithm actually produces.<br><em>e.g.</em> A list of 50,000 raw billing records is data; 'the Pune branch's dues rose 12% this quarter' is information.</p><p><strong>Data structure</strong> — A data structure is a way of organising and storing data so that items can be identified and their relationships are visible. The simplest mental model is a labelled container: once items carry identifiers, you can ask for 'the item at position 2' instead of guessing what 'second' means.<br><em>e.g.</em> Numbering the shelves in a warehouse so a picker can be sent to shelf 14 rather than 'the one near the back'.</p><p><strong>Algorithm</strong> — An algorithm is an ordered sequence of steps that reliably solves the class of problem it was designed for. The book stresses that a good algorithm is simple, precise and unambiguous, and that it can be written in plain English, pseudocode or any programming language.<br><em>e.g.</em> A fixed refund-approval checklist that every support agent follows in the same order.</p><p><strong>Algorithms and data structures work in tandem</strong> — The two are separate but complementary: the structure holds and organises the pieces, the algorithm takes them in, processes them and outputs useful information. A sound algorithm can still get stuck if the data it needs is not organised for the decision it must make.<br><em>e.g.</em> A sorting robot that cannot decide whether a tomato is fruit until it is given a reference collection of known fruits to check against.</p><p><strong>Mathematical vs programming functions</strong> — A mathematical function maps every input in its domain to exactly one output in its range, like a black box. A programming function is a saved, reusable block of steps that takes parameters (arguments) and may or may not return a value; one that returns nothing is called void in C-style languages.<br><em>e.g.</em> calculateGST(amount) returns a number; printReceipt(order) may just print and return nothing.</p><p><strong>Functions, methods, procedures, subroutines</strong> — These four words name the same idea — a subprogram called from a larger program. 'Method' is used for a function that lives inside a class in object-oriented languages; some programmers reserve 'procedure' for a function that returns no value.<br><em>e.g.</em> A 'generateInvoice' block reused by the billing, returns and audit modules.</p><p><strong>Recursion and iteration</strong> — Recursion is defining something in terms of itself: a recursive function calls itself until a stopping condition is met. Iteration repeats a block of steps until a condition set by the designer is met. Both need a clear exit condition; without one, the finite memory of a real machine causes errors — for runaway recursion, a stack overflow.<br><em>e.g.</em> Allowing three PIN attempts before locking an account is iteration with two exit conditions: correct PIN, or attempts exhausted.</p><div class=\"card\"><strong>Case: The fruit-plating robot</strong> <em>(Chapter 1 running example: putting fruit on a plate)</em><p>A robot is given step-by-step instructions to fetch a plate and put fruit on it. It first leaves the cupboard open, so a step is added; then it freezes when it meets a tomato, because nothing tells it what counts as fruit. The book's fix is a reference collection of known fruits to check against.</p><p><em>Lesson:</em> Algorithms grow as gaps appear, and they depend on well-organised data structures to make decisions.</p><p><em>Think:</em> Which property of a good algorithm did the robot's first version fail, and why does a data structure, rather than a longer rule, fix the tomato problem?</p></div><div class=\"card\"><strong>Case: The travelling salesperson</strong> <em>(Chapter 1, greedy algorithms and Big O sections)</em><p>A salesperson must visit a set of cities by the shortest total route. Checking every possible order explodes factorially as cities are added. A greedy shortcut — always go to the nearest unvisited city next — produces a decent route quickly but does not guarantee the shortest one.</p><p><em>Lesson:</em> Greedy heuristics trade optimality for speed when exact solutions grow at O(n!).</p><p><em>Think:</em> A courier firm adds 10 more stops to a 20-stop route. Why would checking every ordering become impractical, and what does a greedy rule give up?</p></div><details><summary>Worked problem: How far does each growth class scale?</summary><p>An analytics team compares algorithms on n = 1,000 customer records. Estimate the number of basic steps for O(1), O(log₂ n), O(n), O(n log₂ n) and O(n²).</p><ol><li>O(1): a fixed number of steps regardless of n — call it 1.</li><li>O(log₂ n): log₂ 1,000 ≈ 10, because 2¹⁰ = 1,024.</li><li>O(n): 1,000 steps.</li><li>O(n log₂ n): 1,000 × 10 ≈ 10,000 steps.</li><li>O(n²): 1,000 × 1,000 = 1,000,000 steps.</li></ol><p><strong>Answer:</strong> About 1, 10, 1,000, 10,000 and 1,000,000 steps respectively — the quadratic option is 100 times slower than n log n at this size.</p></details><details><summary>Worked problem: Projecting run time when the data doubles</summary><p>A month-end reconciliation job takes 2 minutes for 1,000 records. Estimate its time for 2,000 records if it is (a) O(n), (b) O(n²), (c) O(log₂ n).</p><ol><li>(a) Linear: time scales with n, so 2× the records → 2 × 2 = 4 minutes.</li><li>(b) Quadratic: time scales with n², so 2× the records → 2² = 4× the time → 8 minutes.</li><li>(c) Logarithmic: log₂ 2,000 ≈ 11.0 versus log₂ 1,000 ≈ 10.0, a ratio of about 1.1 → roughly 2.2 minutes.</li></ol><p><strong>Answer:</strong> About 4 minutes (linear), 8 minutes (quadratic), and about 2.2 minutes (logarithmic).</p></details><div class=\"def\"><b>Book vs lecture — Meaning of dynamic programming.</b> Book: Dynamic programming considers several sub-solutions, computes and stores them, then recalls them for reuse; it weighs future implications while considering past results, and it optimises where greedy approximates. Lecture: Dynamic programming = deciding for the future from analysis of past (historical) data, e.g. inventory reordering from three years of demand. <b>For the quiz use the lecture discriminator (past data → dynamic programming). Know the book's sense too: the 'past results' are stored sub-problem answers, not business history. If a question mentions storing and reusing partial results, that is also dynamic programming.</b></div><div class=\"def\"><b>Book vs lecture — Big O and complexity coverage.</b> Book: Big O describes the worst-case (maximum) running time; Omega the minimum; Theta both. Lists O(1) through O(n!). Lecture: The hub's lecture record for Modules 1–2 has no Big O content; lectures describe costs informally ('instantaneous', 'slow', 'cost depends on position'). <b>Map the lecture words onto the notation: instantaneous ≈ O(1), linear search ≈ O(n). Strictly, Big O is an upper bound on growth that is usually quoted for the worst case; the book's equation of the two is a common simplification and is safe for this course.</b></div><div class=\"def\"><b>Book vs lecture — Description of O(log n).</b> Book: Says that for logarithmic algorithms 'more elements will take less time'. Lecture: Not covered in the lecture record. <b>Read it as: time grows very slowly — doubling the input adds roughly one step. Total time never falls as input grows. Answer quiz questions on that basis.</b></div><div class=\"def\"><b>Book vs lecture — What a function is.</b> Book: Separates a mathematical function (each input maps to exactly one output) from a programming function (reusable block that takes parameters and may return nothing); treats function, method, procedure and subroutine as synonyms. Lecture: A function is a reusable subgroup of steps common across algorithms, shown in a flowchart as a rectangle with double vertical lines. <b>The lecture definition is the one to quote. The book's extra detail (void functions, methods) is consistent with it and useful for 'which statement is true' items.</b></div>"
    },
    {
     "t": "Textbook: Algorithm Planning and Design",
     "src": "Codeless DSA ch12",
     "h": "<p>The closing chapter argues that good programs are planned before they are coded: an abstract, language-independent design can be implemented anywhere and outlives any particular language. Every algorithm has three stages — input, processing and output. Flowcharts express the design visually with a small set of symbols (arrows, start/end terminators, input/output, process, decision and predefined process), and recurring patterns are named: the sequence, the selection structures (if-then, if-then-else, switch) and the loop structures (while, do-while). The chapter assembles these into a flowchart for linear search and ends with pseudocode, English-like logic free of any language's syntax. For a manager or business analyst, these are the tools for specifying a process precisely enough that developers build exactly what the business needs.</p><!--viz:atb-ipo-payroll--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Flow of three boxes: input (40 hours at 250 rupees an hour), processing (pay = hours × rate = 10,000 rupees), output (a payslip and a bank file).\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Input, processing, output: a payroll run</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\"><b>Input</b><br><span style=\"color:var(--ink-2);font-size:13px\">hours worked = 40, hourly rate = ₹250</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--blue);background:var(--blue-soft);border-radius:4px\"><b>Processing</b><br><span style=\"color:var(--ink-2);font-size:13px\">pay = hours × rate = ₹10,000</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--good);background:var(--good-soft);border-radius:4px\"><b>Output</b><br><span style=\"color:var(--ink-2);font-size:13px\">payslip on screen, file for the bank</span></div></div><p style=\"font-size:13.5px;color:var(--ink-2);margin:8px 0 0\">The output can be the input of the next program: the bank file feeds the bank's own payment algorithm.</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Every algorithm has these three stages; naming them first is the start of planning before coding.</figcaption></figure><!--/viz:atb-ipo-payroll--><!--viz:atb-while-vs-dowhile--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Left flowchart: a while loop tests 'items left?' before the body 'process next item' and loops back after it; No exits. Right flowchart: a do-while runs 'ask for PIN' first and then tests 'PIN wrong?'; Yes loops back to the body; No exits.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">While vs do-while: where the test sits</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 246\" role=\"img\" aria-label=\"Two loop flowcharts. While loop: the test 'items left?' comes first; yes runs 'process next item' and loops back; no exits. Do-while loop: 'ask for PIN' runs first, then the test 'PIN wrong?'; yes loops back; no exits.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<path d=\"M110,8 L110,25\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M110,33 L106,25 L114,25 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M110,34 L185,66 L110,98 L35,66 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"110\" y=\"70.5\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">items left?</text>\n<path d=\"M110,98 L110,119\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M110,127 L106,119 L114,119 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<text x=\"118\" y=\"117\" style=\"fill:var(--ink-3);font-size:13px;font-weight:700\">Yes</text>\n<rect x=\"35\" y=\"128\" width=\"150\" height=\"34\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"110\" y=\"149.6\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">process next item</text>\n<path d=\"M35,145 L20,145 L20,66\" style=\"fill:none;stroke:var(--ink-3);stroke-width:1.5\"/>\n<path d=\"M20,66 L26,66\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M34,66 L26,70 L26,62 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M185,66 L204,66\" style=\"fill:none;stroke:var(--ink-3);stroke-width:1.5\"/>\n<path d=\"M204,66 L204,174\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M204,182 L200,174 L208,174 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<text x=\"196\" y=\"58\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-weight:700\">No</text>\n<text x=\"204\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">exit</text>\n<text x=\"110\" y=\"218\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700;font-family:var(--mono)\">while</text>\n<text x=\"110\" y=\"236\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">test first: may run 0 times</text>\n<path d=\"M330,8 L330,21\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M330,29 L326,21 L334,21 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<rect x=\"255\" y=\"30\" width=\"150\" height=\"34\" rx=\"2\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"330\" y=\"51.5\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">ask for PIN</text>\n<path d=\"M330,64 L330,83\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M330,91 L326,83 L334,83 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M330,92 L405,124 L330,156 L255,124 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"330\" y=\"128.6\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">PIN wrong?</text>\n<path d=\"M255,124 L240,124 L240,47\" style=\"fill:none;stroke:var(--ink-3);stroke-width:1.5\"/>\n<path d=\"M240,47 L246,47\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M254,47 L246,51 L246,43 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<text x=\"234\" y=\"116\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px;font-weight:700\">Yes</text>\n<path d=\"M330,156 L330,174\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M330,182 L326,174 L334,174 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<text x=\"338\" y=\"174\" style=\"fill:var(--ink-3);font-size:13px;font-weight:700\">No</text>\n<text x=\"330\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">exit</text>\n<text x=\"330\" y=\"218\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700;font-family:var(--mono)\">do-while</text>\n<text x=\"330\" y=\"236\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">body first: runs 1+ times</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">A PIN prompt must appear at least once, so it is a do-while; an empty item list should do nothing, so that is a while.</figcaption></figure><!--/viz:atb-while-vs-dowhile--><!--viz:atb-switch-structure--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"A switch on membership tier branches to Gold (20% discount), Silver (10%), Bronze (5%), and a default branch (no discount) for any other value.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">A switch picks one branch by value</div><div style=\"font-size:14px;display:flex;flex-direction:column;gap:6px\"><div style=\"padding:7px 11px;border:1px solid var(--blue);background:var(--blue-soft);border-radius:4px;align-self:flex-start\">switch on <b>membership tier</b></div><div style=\"border-left:2px solid var(--rule-2);margin-left:14px;padding-left:12px;display:flex;flex-direction:column;gap:6px\"><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">case Gold</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">20% discount</div></div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">case Silver</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">10% discount</div></div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">case Bronze</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">5% discount</div></div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px\"><div style=\"padding:7px 11px;border:1px solid var(--clay);background:var(--clay-soft);border-radius:4px\">default</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">no discount</div></div></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">One value, many exits: this replaces a chain of if-then-else diamonds, and the default catches anything unexpected.</figcaption></figure><!--/viz:atb-switch-structure--><p><strong>Plan before you code</strong> — Typing code straight away tends to produce badly structured programs that others struggle to read; coding is not the same as programming. Designing the algorithm first, abstractly, makes it modular and implementable in any language — which is why core ideas such as finite-state machines and time complexity have outlasted many languages.<br><em>e.g.</em> A business analyst's flowchart for refund approval can be built in Java today and re-built in Python later without redesign.</p><p><strong>Input, processing, output</strong> — Every algorithm takes input (from a device, sensor or other software, in a form it can process), processes it (calculating, searching, sorting, transforming), and produces output for a screen, a device or another piece of software that may use it as its own input.<br><em>e.g.</em> Read PAN and income (input) → compute tax (processing) → display tax due (output).</p><p><strong>Flowchart symbols</strong> — Arrows show the flow of logic. Terminators mark start and end; an algorithm has one start but may have several ends. A parallelogram marks input or output, a rectangle a process step, a diamond a yes/no decision, and the predefined-process symbol a module of steps defined elsewhere, which keeps large charts readable.<br><em>e.g.</em> An EMI calculator: Start → input loan details → process 'calculate EMI' → output EMI → End.</p><p><strong>Why flowcharts help</strong> — Flowcharts need no programming language, give a simple pictorial view of the logic, let designers iterate quickly and make logical flaws easy to spot. Their logic transfers to any modern programming language.<br><em>e.g.</em> A missing 'insufficient balance' branch is obvious on a drawn ATM flowchart.</p><p><strong>Sequence structure</strong> — The simplest structure: a start, a series of process steps executed in order, and an end, with no decisions or repetition.<br><em>e.g.</em> Generate an invoice: fetch order → add tax → print.</p><p><strong>Selection structures</strong> — If-then makes a single decision: if true, do the action; if false, skip it. If-then-else does one set of actions when the condition is true and another when it is false. Switch branches to one of several blocks according to the value of an expression, with a default block when no case matches.<br><em>e.g.</em> Delivery fee by zone A/B/C/D with a default rate for unlisted zones is a switch.</p><p><strong>Loop structures</strong> — A while loop tests its condition first and repeats the body as long as it is true — so it may run zero times. A do-while loop runs the body first and then tests, so it always runs at least once. Both need an exit condition; otherwise the result is an infinite loop.<br><em>e.g.</em> Ask for an OTP at least once and repeat while it is wrong (do-while); process orders while the pending queue is not empty (while).</p><p><strong>A linear-search flowchart</strong> — The book combines the pieces: a decision 'are there more items?', a process to check the next item, a decision 'is this the one?', returning the item if found and looping back if not; when no items remain, the search reports not found. It contains a loop and two decisions.<br><em>e.g.</em> Looking for a GSTIN in a list of 3 vendors that does not contain it: 'more items?' is asked 4 times (3 yes, 1 no).</p><div class=\"card\"><strong>Case: Linear search as a flowchart</strong> <em>(Chapter 12, Example Algorithm: Linear Search (Figure 12-18))</em><p>The book draws linear search as a flowchart: it repeatedly asks whether more items remain, checks the next one, returns it if it matches, and otherwise loops back; once no items remain, it reports that the item was not found. The example combines terminators, decisions, a process and a loop.</p><p><em>Lesson:</em> Control structures compose into a complete, language-independent algorithm.</p><p><em>Think:</em> Where in that flowchart would you add a step to count how many items were checked, and which symbol would you use?</p></div><details><summary>Worked problem: Counting decisions in a search flowchart</summary><p>Using the book-style linear-search flowchart ('Are there more items?' → check next item → 'Is it the target?'), search the vendor list [K, M, P]. How many times is each decision evaluated (a) when searching for P, (b) when searching for Z, which is absent?</p><ol><li>(a) More items? yes → K? no → more? yes → M? no → more? yes → P? yes → return.</li><li>'More items?' asked 3 times; 'Is it the target?' asked 3 times.</li><li>(b) Three rounds of 'more? yes' and 'target? no', then a fourth 'more items?' answers no → not found.</li><li>'More items?' asked 4 times; 'Is it the target?' asked 3 times.</li></ol><p><strong>Answer:</strong> (a) 3 and 3; (b) 4 and 3 — the extra 'no' is what ends the loop.</p></details><details><summary>Worked problem: Tracing pseudocode</summary><p>Trace this pseudocode with price = 250 and qty = 5:\nRead price\nRead qty\ntotal = price × qty\nIf total &gt; 1000 then total = total × 0.9\nDisplay total</p><ol><li>Input stage: price = 250, qty = 5.</li><li>Processing: total = 250 × 5 = 1,250.</li><li>Decision: 1,250 &gt; 1,000 is true, so total = 1,250 × 0.9 = 1,125.</li><li>Output stage: display 1,125.</li></ol><p><strong>Answer:</strong> 1,125 (a 10% discount applied because the order exceeded ₹1,000).</p></details><div class=\"def\"><b>Book vs lecture — Name of the input/output symbol.</b> Book: Calls the input/output symbol a parallelogram. Lecture: Called it a trapezoid (slanted rectangle). <b>Same slanted box, same meaning. In the quiz, recognise either word as input/output; the lecture's word is trapezoid.</b></div><div class=\"def\"><b>Book vs lecture — The function / predefined-process symbol.</b> Book: Uses the predefined-process symbol to stand for a separate module of steps. Lecture: Rectangle with double vertical lines = a function call. <b>They are the same symbol. Answer 'function' if asked in lecture terms.</b></div><div class=\"def\"><b>Book vs lecture — Flowchart vs pseudocode emphasis.</b> Book: Presents flowcharts as the preferred design tool for learners — quick to iterate, flaws easy to see — and pseudocode as the programmer's favourite. Lecture: Pseudocode is the bridge from flowchart to code; it is easier to convert to real code, and flowcharts become unmanageable with many conditions and loops. <b>Both views can be true together: flowcharts suit simple logic and visual review; pseudocode scales better for complex logic. For 'which is easier to convert into code', answer pseudocode as the lecture did.</b></div><div class=\"def\"><b>Book vs lecture — Do-while wording.</b> Book: One sentence says the do-while loop, 'like the while loop', executes its block at least once, before clarifying that the while loop runs only if its condition is true. Lecture: Loop structures not named in the lecture record. <b>Only do-while guarantees at least one run; a while loop can run zero times.</b></div>"
    }
   ]
  },
  {
   "id": "pseudo",
   "title": "Pseudocode &amp; data types",
   "tag": "Lectures 2, 3 · Module 1",
   "lede": "The middle layer between plain English and real code, and the four data types you pick between.",
   "topics": [
    {
     "t": "Pseudocode",
     "src": "L#2 · L#3",
     "h": "\n  <div class=\"def\"><b>Pseudocode</b> is plain English written in a structured, code-like way. It is understandable to a programmer <b>without being tied to any language's syntax</b>.</div>\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Pseudocode</th><th>Code</th></tr></thead><tbody>\n   <tr><td><strong>Language</strong></td><td>None — universal</td><td>Specific, with its own syntax and keywords</td></tr>\n   <tr><td><strong>Audience</strong></td><td>Programmers <em>and</em> non-programmers</td><td>The compiler or interpreter</td></tr>\n   <tr><td><strong>Role</strong></td><td>The bridge from flowchart to code</td><td>The implementation</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">It is easier to convert to real code than a flowchart is, and flowcharts become unmanageable once you have several conditions and loops.</p>\n  <h4>The worked example — average of five marks</h4>\n  <pre>Define S1, S2, S3, S4, S5 as integer\nDefine sum as integer\nDefine AVG as float\nInput S1 to S5\nsum = S1 + S2 + S3 + S4 + S5      <span class=\"o\">// 60+65+70+55+60 = 310</span>\nAVG = sum / 5                      <span class=\"o\">// 62.0</span>\nIf AVG &gt; 60, output \"First Class\"\nEnd</pre>\n  <p style=\"font-size:14.5px\">With a function it collapses to one line: <code>AVG = average(S1, S2, S3, S4, S5)</code>. Format is <code>variable = function_name(parameters)</code>.</p><!--viz:atb-marks-flowchart--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Flowchart: Start, Input S1 to S5, sum = S1 + ... + S5, AVG = sum / 5, decision AVG &gt; 60; Yes leads to Output First Class and then End, No leads straight to End.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The marks pseudocode as a flowchart</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 366\" role=\"img\" aria-label=\"Flowchart of the average-of-five-marks pseudocode: input five marks, compute sum, compute average, decide whether average is above 60, output First Class if yes, then end.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<rect x=\"90\" y=\"8\" width=\"100\" height=\"32\" rx=\"16.0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"140\" y=\"28.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Start</text>\n<path d=\"M67,63 L225,63 L213,97 L55,97 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"140\" y=\"84.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Input S1 … S5</text>\n<rect x=\"40\" y=\"119\" width=\"200\" height=\"34\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"140\" y=\"140.6\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">sum = S1 + … + S5</text>\n<rect x=\"40\" y=\"175\" width=\"200\" height=\"34\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"140\" y=\"196.6\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">AVG = sum / 5</text>\n<path d=\"M140,230 L215,262 L140,294 L65,262 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"140\" y=\"266.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">AVG &gt; 60?</text>\n<rect x=\"90\" y=\"324\" width=\"100\" height=\"32\" rx=\"16.0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"140\" y=\"344.9\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">End</text>\n<path d=\"M140,40 L140,55\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M140,63 L136,55 L144,55 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M140,97 L140,111\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M140,119 L136,111 L144,111 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M140,153 L140,167\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M140,175 L136,167 L144,167 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M140,209 L140,222\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M140,230 L136,222 L144,222 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M140,294 L140,315\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M140,323 L136,315 L144,315 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<text x=\"150\" y=\"312\" style=\"fill:var(--ink-3);font-size:13px;font-weight:700\">No</text>\n<path d=\"M215,262 L260,262\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M268,262 L260,266 L260,258 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<text x=\"240\" y=\"254\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-weight:700\">Yes</text>\n<path d=\"M280,237 L422,237 L410,287 L268,287 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"345\" y=\"257\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Output</text>\n<text x=\"345\" y=\"276\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">“First Class”</text>\n<path d=\"M345,287 L345,340\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M345,340 L199,340\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M191,340 L199,336 L199,344 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Same logic, two notations: each pseudocode line becomes one box and the If becomes one diamond.</figcaption></figure><!--/viz:atb-marks-flowchart-->"
    },
    {
     "t": "The four data types",
     "src": "L#2 · L#3",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Type</th><th>Holds</th><th>Example</th></tr></thead><tbody>\n   <tr><td><strong>Integer</strong></td><td>Whole numbers only</td><td>Marks (60, 65), number of students</td></tr>\n   <tr><td><strong>Float</strong></td><td>Decimal numbers</td><td>Temperature, interest rate, CGPA, 62.5</td></tr>\n   <tr><td><strong>Boolean</strong></td><td><strong>Two values only</strong> — 0/1, yes/no, true/false</td><td>Eligible or not, pass or fail</td></tr>\n   <tr><td><strong>Character</strong> / text</td><td>Text and letters</td><td>Names, addresses, subject names</td></tr>\n  </tbody></table></div>\n  <h4>Why declare a type at all</h4>\n  <ul>\n   <li><strong>Optimises memory</strong> — a smaller type for a smaller need.</li>\n   <li><strong>Prevents errors</strong> by rejecting invalid input.</li>\n   <li>Classical languages <strong>require</strong> it; modern ones such as Python can infer it.</li>\n  </ul>\n  <div class=\"warnbox\"><b>Two he tested directly.</b> A customer ID containing letters and numbers must be stored as <b>text</b>, not a number. And a true/false value should be <b>Boolean, not integer</b> — it uses less memory and blocks invalid values.</div>\n  <p style=\"font-size:14.5px\">Choosing types is a business question as much as a technical one — it comes from talking to end-users and domain experts. That is the <strong>business analyst's</strong> job: gather requirements, write the <strong>Software Requirement Specification (SRS)</strong>, and bridge business and developers.</p><!--viz:atb-type-picker--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Decision list: if only two values, Boolean; else if any letters, character or text; else if a decimal part is possible, float; otherwise integer.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Choosing a data type: ask in this order</div><div style=\"font-size:14px\"><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">Only two possible values? <span style=\"color:var(--ink-2)\">(eligible or not, pass or fail)</span></div><span style=\"color:var(--ink-3)\">yes →</span><div style=\"padding:7px 11px;border:1px solid var(--blue);background:var(--blue-soft);border-radius:4px\"><b>Boolean</b></div></div><div style=\"color:var(--ink-3);padding:2px 0 2px 14px\">no ↓</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">Any letters, even mixed with digits? <span style=\"color:var(--ink-2)\">(customer ID C1023)</span></div><span style=\"color:var(--ink-3)\">yes →</span><div style=\"padding:7px 11px;border:1px solid var(--blue);background:var(--blue-soft);border-radius:4px\"><b>Character / text</b></div></div><div style=\"color:var(--ink-3);padding:2px 0 2px 14px\">no ↓</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">Can it have a decimal part? <span style=\"color:var(--ink-2)\">(CGPA 8.25, interest rate)</span></div><span style=\"color:var(--ink-3)\">yes →</span><div style=\"padding:7px 11px;border:1px solid var(--blue);background:var(--blue-soft);border-radius:4px\"><b>Float</b></div></div><div style=\"color:var(--ink-3);padding:2px 0 2px 14px\">no ↓</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">Whole numbers only <span style=\"color:var(--ink-2)\">(marks 65, headcount)</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--blue);background:var(--blue-soft);border-radius:4px\"><b>Integer</b></div></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Ask the letters question before the number questions: an ID like C1023 is text even though it holds digits.</figcaption></figure><!--/viz:atb-type-picker-->"
    },
    {
     "t": "Textbook: Intro to DSA, Types, and Big O",
     "src": "Codeless DSA ch1",
     "h": "<p><strong>Primitive (atomic) data types</strong> — Primitive types are the most basic data types, usually built into a language, and cannot be broken into anything lower-level — hence 'atomic'. The book's 'Big Four' are Boolean, character, integer and floating-point number; everything else is built from them. Strings, for example, are sequences of characters.<br><em>e.g.</em> A GSTIN is stored as characters, a quantity as an integer, a unit price as a floating-point number, and 'invoice paid?' as a Boolean.</p><p><strong>Good data can still give garbage out</strong> — Garbage in, garbage out is only half the story. Because a computer processes data before outputting it, correct data can still produce nonsense in two ways: the algorithm itself is faulty, or the computer was never told what type of data it is handling.<br><em>e.g.</em> Prices read as text get concatenated ('100' + '50' = '10050') instead of added.</p><p><strong>Floating-point precision</strong> — Floating-point numbers carry a fractional part; the radix point 'floats' to represent the value. Single precision uses a 32-bit word (a float), double precision a 64-bit word (a double), and some languages offer 128-bit decimals for higher precision.<br><em>e.g.</em> An interest rate of 7.25% needs a floating-point type; the more precision a calculation needs, the wider the type.</p>"
    },
    {
     "t": "Textbook: Algorithm Planning and Design",
     "src": "Codeless DSA ch12",
     "h": "<p><strong>Pseudocode</strong> — Pseudocode describes logic in structured English without the syntax of any one language, so it can be implemented in any language; in languages like Python the translation is almost line for line. Programmers often prefer it to flowcharts for this reason.<br><em>e.g.</em> Read firstNumber; read secondNumber; result = firstNumber + secondNumber; display result.</p>"
    }
   ]
  },
  {
   "id": "props",
   "title": "Properties of a good algorithm",
   "tag": "Lectures 4, 5, 8 · heaviest topic",
   "lede": "Nine properties in two groups. He drilled these across two recorded lectures and a live session, with a worked good/bad example for each.",
   "topics": [
    {
     "t": "The five core technical properties",
     "src": "L#4 · L#8",
     "h": "\n  <p style=\"font-size:15px\">These describe the algorithm itself, whichever way you write it down.</p>\n  <div class=\"scroller\"><table><thead><tr><th>#</th><th>Property</th><th>Means</th><th>His failing example</th></tr></thead><tbody>\n   <tr><td>1</td><td><strong>Finiteness</strong></td><td>Terminates after a <strong>countable, finite</strong> number of steps</td><td>A shop customer-counter that loops back to &ldquo;has anyone entered?&rdquo; forever. <strong>Fix:</strong> reset the counter at midnight</td></tr>\n   <tr><td>2</td><td><strong>Definiteness</strong></td><td>Each step has <strong>exactly one</strong> interpretation</td><td>&ldquo;Take some tea leaves, add a little milk, boil for a while&rdquo;. Fix: <strong>250 ml of milk</strong></td></tr>\n   <tr><td>3</td><td><strong>Well-defined inputs</strong></td><td>External data is <strong>explicitly</strong> specified</td><td>&ldquo;Input the required value&rdquo;. Good: <strong>length and width</strong> for a rectangle's area</td></tr>\n   <tr><td>4</td><td><strong>Well-defined outputs</strong></td><td><strong>At least one</strong> clear result, whatever the path</td><td>Loan process that displays &ldquo;Processing complete&rdquo;. Good: <strong>&ldquo;Approved&rdquo; or &ldquo;Rejected&rdquo;</strong></td></tr>\n   <tr><td>5</td><td><strong>Effectiveness</strong></td><td>Solves it <strong>practically</strong> — within useful time and resources</td><td>&ldquo;Order more items whenever stock looks low&rdquo;. Good: <strong>if stock &lt; 50, order 200</strong></td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>Effectiveness is about practicality, not just correctness.</b> A loan algorithm that takes three hours is <em>correct</em> and still ineffective, because the business needs the answer now.</div>"
    },
    {
     "t": "The four execution and design properties",
     "src": "L#5 · L#8",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Property</th><th>Means</th><th>Fails when</th></tr></thead><tbody>\n   <tr><td><strong>Language independence</strong></td><td>Logic is generic, not tied to one language</td><td>The steps are written in Python-specific syntax</td></tr>\n   <tr><td><strong>Determinism</strong></td><td><strong>Same input → same output</strong>, every time</td><td>A discount <strong>randomly</strong> chosen between 5% and 20%. Also: <strong>visa approval</strong>, which turns on an officer's judgement</td></tr>\n   <tr><td><strong>Feasibility</strong></td><td>Implementable within real memory, processing power and time</td><td>&ldquo;Determine the customer's true intention&rdquo;. Also: loading <em>every</em> employee record into memory at once instead of one at a time</td></tr>\n   <tr><td><strong>Generality</strong></td><td>Handles <strong>all valid instances</strong>, no special cases</td><td>&ldquo;Give the bonus to employees named Rahul&rdquo;</td></tr>\n  </tbody></table></div>\n  <h4>Feasibility changes over time — his two examples</h4>\n  <ul>\n   <li><strong>Cloud computing</strong> existed in the 1990s but was infeasible on slow, expensive internet. It became feasible when bandwidth got cheap.</li>\n   <li><strong>Machine learning</strong> algorithms date from the 1970s and became feasible only with cheap compute, abundant data and bigger memory.</li>\n  </ul>\n  <div class=\"def\">Nine properties total: <b>five core</b> (finiteness, definiteness, well-defined inputs, well-defined outputs, effectiveness) and <b>four execution</b> (language independence, determinism, feasibility, generality).</div><!--viz:atb-nine-properties--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Tree: a good algorithm has five core properties (finiteness, definiteness, well-defined inputs, well-defined outputs, effectiveness) and four execution and design properties (language independence, determinism, feasibility, generality), each with a one-line test question.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The nine properties as nine questions</div><div style=\"font-size:14px\"><div style=\"text-align:center;margin-bottom:8px\"><div style=\"padding:7px 11px;border:1px solid var(--blue);background:var(--blue-soft);border-radius:4px;display:inline-block\"><b>A good algorithm</b>: 9 properties</div></div><div style=\"display:flex;flex-wrap:wrap;gap:12px\"><div style=\"flex:1 1 200px;min-width:0\"><div style=\"font-weight:700;margin-bottom:6px\">5 core (the algorithm itself)</div><div style=\"display:flex;flex-direction:column;gap:5px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\"><b>Finiteness</b><br><span style=\"color:var(--ink-2);font-size:13px\">Does it stop?</span></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\"><b>Definiteness</b><br><span style=\"color:var(--ink-2);font-size:13px\">One meaning per step?</span></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\"><b>Well-defined inputs</b><br><span style=\"color:var(--ink-2);font-size:13px\">Exactly what goes in?</span></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\"><b>Well-defined outputs</b><br><span style=\"color:var(--ink-2);font-size:13px\">A clear result on every path?</span></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\"><b>Effectiveness</b><br><span style=\"color:var(--ink-2);font-size:13px\">Practical in time and resources?</span></div></div></div><div style=\"flex:1 1 200px;min-width:0\"><div style=\"font-weight:700;margin-bottom:6px\">4 execution and design</div><div style=\"display:flex;flex-direction:column;gap:5px\"><div style=\"padding:7px 11px;border:1px solid var(--clay);background:var(--clay-soft);border-radius:4px\"><b>Language independence</b><br><span style=\"color:var(--ink-2);font-size:13px\">Could it be written in any language?</span></div><div style=\"padding:7px 11px;border:1px solid var(--clay);background:var(--clay-soft);border-radius:4px\"><b>Determinism</b><br><span style=\"color:var(--ink-2);font-size:13px\">Same input, same output?</span></div><div style=\"padding:7px 11px;border:1px solid var(--clay);background:var(--clay-soft);border-radius:4px\"><b>Feasibility</b><br><span style=\"color:var(--ink-2);font-size:13px\">Possible with today's memory and compute?</span></div><div style=\"padding:7px 11px;border:1px solid var(--clay);background:var(--clay-soft);border-radius:4px\"><b>Generality</b><br><span style=\"color:var(--ink-2);font-size:13px\">Works for every valid case?</span></div></div></div></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">To name the property an example breaks, find the question it answers with no.</figcaption></figure><!--/viz:atb-nine-properties-->"
    },
    {
     "t": "Textbook: Algorithm Planning and Design",
     "src": "Codeless DSA ch12",
     "h": "<p><strong>Design structures and algorithm properties</strong> — The structures link to the properties taught in lectures: a loop without an exit condition breaks finiteness; a design free of any language's syntax shows language independence; each decision diamond needs a precise yes/no test to satisfy definiteness.<br><em>e.g.</em> 'While stock looks low, reorder' is both indefinite and potentially non-terminating.</p>"
    }
   ]
  },
  {
   "id": "types",
   "title": "Three types of algorithm",
   "tag": "Lectures 5, 8",
   "lede": "Divide and conquer, greedy, dynamic programming — each with a business scenario. Expect a match-the-scenario question.",
   "topics": [
    {
     "t": "Divide and conquer, greedy, dynamic programming",
     "src": "L#5 · L#8",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Type</th><th>Core idea</th><th>His business example</th></tr></thead><tbody>\n   <tr><td><strong>Divide and conquer</strong></td><td>Split a big problem into sub-problems, solve each <strong>independently</strong>, combine the results</td><td>A company <strong>audit</strong> split across regional offices, then merged into one report. Also a national sales report built from regional ones</td></tr>\n   <tr><td><strong>Greedy</strong></td><td>Take the <strong>best option available right now</strong> — locally optimal, not necessarily globally</td><td><strong>Making change:</strong> ₹350 as one 200 + one 100 + one 50, largest notes first, rather than 35 tens</td></tr>\n   <tr><td><strong>Dynamic programming</strong></td><td>Decide for the future using <strong>analysis of past data</strong></td><td><strong>Inventory reordering</strong> from three years of demand history. Air coolers: stock up before March, cut back before the rains</td></tr>\n  </tbody></table></div>\n  <h4>The match-the-scenario exercise he ran</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Scenario</th><th>Answer</th></tr></thead><tbody>\n   <tr><td>Manufacturer sets monthly output from current inventory, past production and expected demand</td><td><strong>Dynamic programming</strong></td></tr>\n   <tr><td>Retail chain has each region prepare a report; head office combines them</td><td><strong>Divide and conquer</strong></td></tr>\n   <tr><td>Investor with a limited budget takes the highest immediate return first</td><td><strong>Greedy</strong></td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>The discriminator:</b> past data → dynamic programming. Split and recombine → divide and conquer. Best-right-now → greedy.</div><!--viz:atb-three-approaches--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three cards. Divide and conquer: split an audit by region, solve each, merge. Greedy: pay 350 rupees by taking the largest note that fits each time, 200, 100, 50. Dynamic programming: use stored demand history to plan stock.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Three approaches, three shapes of thinking</div><div style=\"display:flex;flex-wrap:wrap;gap:8px;font-size:14px\"><div style=\"flex:1 1 180px;min-width:0;padding:9px;border:1px solid var(--rule);border-top:3px solid var(--blue);border-radius:4px;background:var(--surface-2)\"><div style=\"font-weight:700;margin-bottom:6px\">Divide and conquer</div><div style=\"display:flex;flex-direction:column;align-items:flex-start;gap:3px;font-size:13.5px\"><div style=\"padding:5px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Company audit</div><span style=\"color:var(--ink-3)\">↓</span><div style=\"padding:5px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Split: North · South · East · West</div><span style=\"color:var(--ink-3)\">↓</span><div style=\"padding:5px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Each region audited on its own</div><span style=\"color:var(--ink-3)\">↓</span><div style=\"padding:5px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Merge into one report</div></div></div><div style=\"flex:1 1 180px;min-width:0;padding:9px;border:1px solid var(--rule);border-top:3px solid var(--clay);border-radius:4px;background:var(--surface-2)\"><div style=\"font-weight:700;margin-bottom:6px\">Greedy</div><div style=\"display:flex;flex-direction:column;align-items:flex-start;gap:3px;font-size:13.5px\"><div style=\"padding:5px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Pay ₹350 in notes</div><span style=\"color:var(--ink-3)\">↓</span><div style=\"padding:5px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Take the largest that fits: 200 (150 left)</div><span style=\"color:var(--ink-3)\">↓</span><div style=\"padding:5px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Again: 100 (50 left)</div><span style=\"color:var(--ink-3)\">↓</span><div style=\"padding:5px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Again: 50 (0 left) → 3 notes</div></div></div><div style=\"flex:1 1 180px;min-width:0;padding:9px;border:1px solid var(--rule);border-top:3px solid var(--good);border-radius:4px;background:var(--surface-2)\"><div style=\"font-weight:700;margin-bottom:6px\">Dynamic programming</div><div style=\"display:flex;flex-direction:column;align-items:flex-start;gap:3px;font-size:13.5px\"><div style=\"padding:5px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">3 years of demand history</div><span style=\"color:var(--ink-3)\">↓</span><div style=\"padding:5px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Store what each season taught</div><span style=\"color:var(--ink-3)\">↓</span><div style=\"padding:5px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Reuse it for the next decision</div><span style=\"color:var(--ink-3)\">↓</span><div style=\"padding:5px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Stock air coolers before March</div></div></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Split and merge, best-right-now, or learn from stored past results: the shape of the steps names the approach.</figcaption></figure><!--/viz:atb-three-approaches--><!--viz:atb-greedy-miss--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Trace: making 6 from tokens worth 1, 3 and 4. Greedy takes 4 then 1 then 1, three tokens; the best answer is 3 plus 3, two tokens.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">When greedy is not the best</div><p style=\"font-size:13.5px;color:var(--ink-2);margin:0 0 8px\">Make a total of 6 with tokens worth 1, 3 and 4 (an invented token system), using as few tokens as possible.</p><div class=\"scroller\"><table><thead><tr><th>Method</th><th>Picks</th><th>Left after each</th><th>Tokens</th></tr></thead><tbody><tr><td>Greedy (largest first)</td><td style=\"font-family:var(--mono)\"><span style=\"font-family:var(--mono)\">4, 1, 1</span></td><td style=\"font-family:var(--mono)\"><span style=\"font-family:var(--mono)\">2 → 1 → 0</span></td><td style=\"font-family:var(--mono);background:var(--bad-soft)\">3</td></tr><tr><td>Best possible</td><td style=\"font-family:var(--mono)\"><span style=\"font-family:var(--mono)\">3, 3</span></td><td style=\"font-family:var(--mono)\"><span style=\"font-family:var(--mono)\">3 → 0</span></td><td style=\"font-family:var(--mono);background:var(--good-soft)\">2</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Greedy took the biggest token first and was locked out of 3 + 3; with ₹200/100/50 notes it happens to be optimal.</figcaption></figure><!--/viz:atb-greedy-miss-->"
    },
    {
     "t": "Textbook: Intro to DSA, Types, and Big O",
     "src": "Codeless DSA ch1",
     "h": "<p><strong>Three algorithm design approaches</strong> — Divide and conquer splits a big problem into smaller ones and combines their results. Greedy takes the best-looking choice at each moment, whether or not it is best overall. Dynamic programming considers several sub-solutions, stores them and reuses them, weighing future implications against past results. The book's shorthand: greedy approximates, dynamic optimises.<br><em>e.g.</em> Nearest-next-city routing for a sales rep is greedy; storing the best cost to every intermediate depot and reusing it is dynamic programming.</p>"
    }
   ]
  },
  {
   "id": "arrays",
   "title": "Arrays",
   "tag": "Lectures 6, 8 · Module 2",
   "lede": "The first linear data structure. Know the five operations and, more importantly, which of them are instant and which are slow.",
   "topics": [
    {
     "t": "What an array is",
     "src": "L#6 · L#8",
     "h": "\n  <div class=\"def\">A <b>linear data structure</b> arranges elements <b>sequentially</b>, so that reaching one element lets you find its neighbours through a defined relationship.</div>\n  <h4>Four defining properties of an array</h4>\n  <ul>\n   <li><strong>Homogeneous</strong> — every element is the <strong>same data type</strong>. You cannot mix.</li>\n   <li><strong>Indexed</strong> — elements are reached by index number, without reading through the others.</li>\n   <li><strong>Indexing starts at 0.</strong> The first element is <code>[0]</code>, and a size-<em>n</em> array runs to <code>[n−1]</code>.</li>\n   <li><strong>Contiguous memory</strong> — stored in one continuous block.</li>\n  </ul>\n  <pre>C / C++:  int sub[5] = {60, 65, 70, 50, 60};   <span class=\"o\">// type and size required</span>\nPython:   sub = [60, 65, 70, 50, 60]          <span class=\"o\">// type inferred</span></pre>\n  <p style=\"font-size:14.5px\"><strong>Two-dimensional arrays</strong> use <code>array[i][j]</code>, i the row and j the column — a 7&times;5 array holds marks for 7 students across 5 subjects. Arrays can have n dimensions, but beyond two it gets impractical.</p><!--viz:atb-array-indexed--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Five array cells side by side with indices 0 to 4, values 60, 65, 70, 50, 60, and consecutive memory addresses 1000 to 1016 in steps of 4. The address of sub[3] is 1000 + 3 × 4 = 1012.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Why reading by index is instant</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 150\" role=\"img\" aria-label=\"Array sub holding 60, 65, 70, 50, 60 at indices 0 to 4 in one contiguous block of memory at addresses 1000, 1004, 1008, 1012, 1016; sub[3] is highlighted and its address is computed directly.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<text x=\"14\" y=\"30\" style=\"fill:var(--ink-3);font-size:13px\">index</text>\n<text x=\"14\" y=\"66\" style=\"fill:var(--ink-3);font-size:13px\">value</text>\n<text x=\"14\" y=\"104\" style=\"fill:var(--ink-3);font-size:13px\">address</text>\n<text x=\"117\" y=\"30\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">[0]</text>\n<rect x=\"84\" y=\"42\" width=\"66\" height=\"36\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"117\" y=\"65\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-family:var(--mono)\">60</text>\n<text x=\"117\" y=\"104\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">1000</text>\n<text x=\"183\" y=\"30\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">[1]</text>\n<rect x=\"150\" y=\"42\" width=\"66\" height=\"36\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"183\" y=\"65\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-family:var(--mono)\">65</text>\n<text x=\"183\" y=\"104\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">1004</text>\n<text x=\"249\" y=\"30\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">[2]</text>\n<rect x=\"216\" y=\"42\" width=\"66\" height=\"36\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"249\" y=\"65\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-family:var(--mono)\">70</text>\n<text x=\"249\" y=\"104\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">1008</text>\n<text x=\"315\" y=\"30\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-family:var(--mono)\">[3]</text>\n<rect x=\"282\" y=\"42\" width=\"66\" height=\"36\" rx=\"0\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"315\" y=\"65\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700;font-family:var(--mono)\">50</text>\n<text x=\"315\" y=\"104\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">1012</text>\n<text x=\"381\" y=\"30\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">[4]</text>\n<rect x=\"348\" y=\"42\" width=\"66\" height=\"36\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"381\" y=\"65\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-family:var(--mono)\">60</text>\n<text x=\"381\" y=\"104\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">1016</text>\n<text x=\"220\" y=\"136\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">address of sub[3] = 1000 + 3 × 4 = 1012</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Contiguous, same-type cells (4-byte integers here) let the computer calculate any element's address in one step, with no walking.</figcaption></figure><!--/viz:atb-array-indexed-->"
    },
    {
     "t": "The five operations, and their cost",
     "src": "L#6 · L#8",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Operation</th><th>Index known</th><th>Index unknown</th></tr></thead><tbody>\n   <tr><td><strong>Read / access</strong></td><td><strong>Instantaneous</strong></td><td>Read sequentially</td></tr>\n   <tr><td><strong>Search</strong></td><td>Instantaneous</td><td><strong>Linear search</strong> from index 0 — cost depends on position</td></tr>\n   <tr><td><strong>Insert</strong></td><td>Easy <strong>at the end</strong> if there is space</td><td><strong>Slow</strong> at the start or middle — every later element must shift</td></tr>\n   <tr><td><strong>Update</strong></td><td>Instantaneous</td><td>Search first, then update</td></tr>\n   <tr><td><strong>Delete</strong></td><td>Instantaneous — sets the slot to <strong>null</strong></td><td>Search first, then delete</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>Deleting does not free the memory.</b> The slot is set to null — &ldquo;nothing stored&rdquo;, which is not the same as zero — and the space stays allocated.</div>\n  <h4>Advantages and limitations</h4>\n  <div class=\"grid2\">\n   <div class=\"card\" style=\"border-left:3px solid var(--good)\"><p style=\"font-size:14px\">Simple · memory-efficient for a known fixed size · <strong>instant direct access</strong> by index · the foundation other structures are built on · ideal for predictable datasets</p></div>\n   <div class=\"card\" style=\"border-left:3px solid var(--bad)\"><p style=\"font-size:14px\"><strong>Fixed length</strong> · hard to size correctly · resizing means a new array and a full copy · needs <strong>contiguous</strong> memory · poor for frequent insert/delete · sequential search degrades as it grows</p></div>\n  </div><!--viz:atb-array-insert-shift--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Before: 60, 65, 70, 50 and a free slot. Arrows show 50, 70 and 65 each moving one place right. After: 60, 55, 65, 70, 50 with the new 55 at index 1.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Inserting into the middle means shifting</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 200\" role=\"img\" aria-label=\"Inserting 55 at index 1 of an array 60, 65, 70, 50 with one free slot: 50, 70 and 65 each shift one place right, then 55 is written at index 1.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<text x=\"14\" y=\"50\" style=\"fill:var(--ink-3);font-size:13px\">before</text>\n<text x=\"14\" y=\"140\" style=\"fill:var(--ink-3);font-size:13px\">after</text>\n<text x=\"121\" y=\"18\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">[0]</text>\n<rect x=\"90\" y=\"28\" width=\"62\" height=\"34\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"121\" y=\"50\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-family:var(--mono)\">60</text>\n<rect x=\"90\" y=\"118\" width=\"62\" height=\"34\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"121\" y=\"140\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-family:var(--mono)\">60</text>\n<text x=\"183\" y=\"18\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">[1]</text>\n<rect x=\"152\" y=\"28\" width=\"62\" height=\"34\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"183\" y=\"50\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-family:var(--mono)\">65</text>\n<rect x=\"152\" y=\"118\" width=\"62\" height=\"34\" rx=\"0\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"183\" y=\"140\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700;font-family:var(--mono)\">55</text>\n<text x=\"245\" y=\"18\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">[2]</text>\n<rect x=\"214\" y=\"28\" width=\"62\" height=\"34\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"245\" y=\"50\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-family:var(--mono)\">70</text>\n<rect x=\"214\" y=\"118\" width=\"62\" height=\"34\" rx=\"0\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/>\n<text x=\"245\" y=\"140\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-family:var(--mono)\">65</text>\n<text x=\"307\" y=\"18\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">[3]</text>\n<rect x=\"276\" y=\"28\" width=\"62\" height=\"34\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"307\" y=\"50\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-family:var(--mono)\">50</text>\n<rect x=\"276\" y=\"118\" width=\"62\" height=\"34\" rx=\"0\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/>\n<text x=\"307\" y=\"140\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-family:var(--mono)\">70</text>\n<text x=\"369\" y=\"18\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">[4]</text>\n<rect x=\"338\" y=\"28\" width=\"62\" height=\"34\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"369\" y=\"50\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">free</text>\n<rect x=\"338\" y=\"118\" width=\"62\" height=\"34\" rx=\"0\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/>\n<text x=\"369\" y=\"140\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-family:var(--mono)\">50</text>\n<path d=\"M307,66 L358.8,108.9\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none\"/>\n<path d=\"M365,114 L356.3,112 L361.4,105.8 Z\" style=\"fill:var(--clay);stroke:none\"/>\n<path d=\"M245,66 L296.8,108.9\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none\"/>\n<path d=\"M303,114 L294.3,112 L299.4,105.8 Z\" style=\"fill:var(--clay);stroke:none\"/>\n<path d=\"M183,66 L234.8,108.9\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none\"/>\n<path d=\"M241,114 L232.3,112 L237.4,105.8 Z\" style=\"fill:var(--clay);stroke:none\"/>\n<text x=\"220\" y=\"180\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">insert 55 at [1]: 3 shifts first (inserting at the end: 0)</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Shift from the back first, or values get overwritten; the earlier the insert position, the more elements move.</figcaption></figure><!--/viz:atb-array-insert-shift-->"
    },
    {
     "t": "Textbook: Linear Data Structures",
     "src": "Codeless DSA ch2",
     "h": "<p>Before any structure, the chapter explains computer memory: a hierarchy running from large, slow disk storage through RAM and cache to tiny, very fast registers, with virtual memory letting the operating system hand programs more address space than physically exists. It then presents the linear 'workhorse' structures from which most others are built. Arrays keep same-type elements side by side, so reading by index is fast but inserting and deleting are slow; linked lists scatter nodes in memory and chain them with pointers, in singly, doubly and circular forms. Stacks (LIFO) and queues (FIFO) are defined by how data enters and leaves, can be static or dynamic, and the priority queue extends the queue by serving higher-priority items first. For a manager, the lesson is that the shape of access — by position, in order of arrival, or most-recent-first — should decide the structure.</p><!--viz:atb-2d-array--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Grid of quarterly sales for three stores: rows are stores 0 to 2, columns are quarters 0 to 3. The cell at row 1, column 2 (Pune, Q3, value 410) is highlighted.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">A two-dimensional array is a grid</div><div class=\"scroller\"><table><thead><tr><th>sales[store][quarter]</th><th>[0] Q1</th><th>[1] Q2</th><th>[2] Q3</th><th>[3] Q4</th></tr></thead><tbody><tr><td>[0] Jaipur</td><td style=\"font-family:var(--mono)\">320</td><td style=\"font-family:var(--mono)\">340</td><td style=\"font-family:var(--mono)\">365</td><td style=\"font-family:var(--mono)\">390</td></tr><tr><td>[1] Pune</td><td style=\"font-family:var(--mono)\">280</td><td style=\"font-family:var(--mono)\">300</td><td style=\"font-family:var(--mono);background:var(--blue-soft);font-weight:700\">410</td><td style=\"font-family:var(--mono)\">355</td></tr><tr><td>[2] Kochi</td><td style=\"font-family:var(--mono)\">150</td><td style=\"font-family:var(--mono)\">170</td><td style=\"font-family:var(--mono)\">160</td><td style=\"font-family:var(--mono)\">205</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin:8px 0 0\"><span style=\"font-family:var(--mono)\">sales[1][2] = 410</span>: row 1 (Pune), column 2 (Q3). Both indices start at 0.</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">First index picks the row, second the column; a 3 × 4 array holds 12 values of one type.</figcaption></figure><!--/viz:atb-2d-array--><p><strong>Linear data structures</strong> — In a linear structure, elements are ordered one after another and each is connected to its neighbour. Arrays and lists are the two 'workhorses' because nearly every other structure is built on them or uses them.<br><em>e.g.</em> A row of numbered lockers, or a chain of linked train coaches.</p><p><strong>Arrays</strong> — An array stores elements of one data type in sequence, numbered from index 0. Because elements sit consecutively, any element can be read directly by its index, but adding or removing elements is slow because others must move. Many languages require the size to be reserved before the program runs; some manage this automatically.<br><em>e.g.</em> Prices of a fixed list of 50 index stocks, read thousands of times a second by position.</p><p><strong>Multidimensional arrays</strong> — A multidimensional array is an array of arrays. The common case, the two-dimensional array, is a grid of rows and columns; data stored this way is called a matrix.<br><em>e.g.</em> Sales for 12 stores across 7 weekdays in a 12 × 7 grid.</p><div class=\"card\"><strong>Case: Textbook vs notebook</strong> <em>(Chapter 2, Computer Memory section: the cache analogy)</em><p>The book compares cache to a student's notes: a short summary of the parts of a long textbook you will actually use is quick to consult. Copy the whole textbook into the notebook and the notes lose their advantage — just as an oversized cache loses its speed.</p><p><em>Lesson:</em> Fast access comes from keeping a small, well-chosen subset close at hand.</p><p><em>Think:</em> A sales team keeps a 'top 200 accounts' sheet alongside the full CRM. When does adding more accounts to the sheet stop helping?</p></div><details><summary>Worked problem: Tracing a loading-bay stack</summary><p>A truck is loaded as a stack (last pallet in is the first out). Starting empty: push P1, push P2, pop, push P3, push P4, pop. Which pallet is on top at the end, and which pallets were removed?</p><ol><li>push P1 → [P1]</li><li>push P2 → [P1, P2]</li><li>pop removes P2 (the most recent) → [P1]</li><li>push P3 → [P1, P3]; push P4 → [P1, P3, P4]</li><li>pop removes P4 → [P1, P3]</li></ol><p><strong>Answer:</strong> P3 is on top; two pallets (P1, P3) remain; P2 then P4 were removed.</p></details><details><summary>Worked problem: Dispatch order in a priority queue</summary><p>An ambulance service uses a priority queue in which a higher number means more urgent. Calls arrive in this order: A (priority 2), B (5), C (5), D (1). In what order are they dispatched?</p><ol><li>Highest priority first: B and C both have 5.</li><li>Tie-break by order in the queue: B arrived before C, so B then C.</li><li>Next highest is A (2), then D (1).</li></ol><p><strong>Answer:</strong> B, C, A, D.</p></details><div class=\"def\"><b>Book vs lecture — What a queue is.</b> Book: Opens the queue section by saying a queue assigns a priority to each element and that elements added first are placed at the end of the queue, before describing standard FIFO behaviour. Lecture: A queue adds at the rear and removes from the front — pure FIFO. Priority belongs only to the priority queue, with ties falling back to FIFO. <b>Use the lecture definition. The book's opening sentence is loosely worded; its own diagram and later text describe ordinary FIFO, enqueue at the rear and dequeue at the front.</b></div><div class=\"def\"><b>Book vs lecture — Where a stack adds data.</b> Book: Says data pushed onto a stack is placed in the lowest available memory location. Lecture: A stack adds and removes elements only at the top. <b>Say 'top' in the quiz. The book is describing one possible memory layout, not the abstract behaviour, which is always top-only and LIFO.</b></div><div class=\"def\"><b>Book vs lecture — Linked lists and memory efficiency.</b> Book: Describes a list as a special type of array whose scattered storage lets it use memory more effectively. Lecture: Linked lists are a distinct structure contrasted with arrays: no contiguous block needed and dynamic size, but extra memory per node for pointers and no random access. <b>Use the lecture's trade-off. Flexible use of fragmented memory is a real advantage; the per-node pointer overhead is a real cost. Do not call a linked list 'a type of array' in an answer.</b></div><div class=\"def\"><b>Book vs lecture — Applications of stacks.</b> Book: Lists function calls, scheduling, interrupt mechanisms, string reversal and backtracking as stack uses. Lecture: Stacks: undo/redo, function calls, expression evaluation, depth-first search, browser history. Scheduling is presented as a queue application (round-robin, priority). <b>In a which-structure question about scheduling, answer queue (circular or priority) as the lecture did. Function calls and backtracking are safe stack answers in both sources.</b></div>"
    },
    {
     "t": "Textbook: Linear and Binary Search",
     "src": "Codeless DSA ch6",
     "h": "<p>The chapter turns from data structures to algorithms with the two classic ways of finding an item. Linear search checks elements one by one; it works on any data, sorted or not, but its running time grows in direct proportion to the size of the list — O(n) — and a lucky early hit should not fool anyone into thinking it is fast. Binary search repeatedly checks the middle of a sorted list and throws away the half that cannot contain the target, so its running time grows only logarithmically — O(log n), second only to constant time. A short maths primer explains why: a logarithm is the inverse of an exponent, so the number of halvings needed grows very slowly as the list grows. For a manager, the trade-off is simple: binary search is dramatically faster at scale but only works if the data is kept sorted.</p><div class=\"card\"><strong>Case: The fooled tester</strong> <em>(Chapter 6, Linear Search: the reordered list example)</em><p>The book shows a linear search that finds its target instantly because the target happens to sit first in the list, tempting the programmer to think the algorithm is constant-time. Swapping that item to the end forces a full scan, exposing the true linear behaviour.</p><p><em>Lesson:</em> Judge an algorithm by how its cost grows in the worst case, not by one convenient test.</p><p><em>Think:</em> A vendor's demo searches a 1-lakh-row customer file and returns in milliseconds. What should you ask before believing it will stay fast for any customer?</p></div><details><summary>Worked problem: Binary search trace</summary><p>A sorted list of cheque numbers is [3, 8, 12, 19, 24, 31, 40, 47, 55] (indices 0–8). Using middle index = ⌊(low + high) ÷ 2⌋, trace a search for 12.</p><ol><li>low = 0, high = 8 → middle = 4 → value 24. 12 &lt; 24, so discard indices 4–8: high = 3.</li><li>low = 0, high = 3 → middle = 1 → value 8. 12 &gt; 8, so discard indices 0–1: low = 2.</li><li>low = 2, high = 3 → middle = 2 → value 12. Match.</li></ol><p><strong>Answer:</strong> Found at index 2 after 3 comparisons (24, 8, 12). Linear search would also need 3 here, but for 55 it would need 9 against binary search's 4.</p></details><details><summary>Worked problem: Worst-case comparisons at scale</summary><p>A bank's account master has 1 crore (10,000,000) sorted records. Compare the worst-case number of comparisons for linear and binary search, and say what happens if the master doubles.</p><ol><li>Linear search worst case: check every record = 10,000,000 comparisons.</li><li>Binary search worst case ≈ ⌊log₂ 10,000,000⌋ + 1. Since 2²³ ≈ 84 lakh and 2²⁴ ≈ 1.68 crore, ⌊log₂ n⌋ = 23, so 24 comparisons.</li><li>Doubling to 2 crore: linear rises to 20,000,000; binary rises by one halving to 25.</li></ol><p><strong>Answer:</strong> 1 crore vs 24 comparisons; after doubling, 2 crore vs 25.</p></details><details><summary>Worked problem: Searching for something that is not there</summary><p>Sorted list [2, 4, 6, 8, 10, 12, 14], indices 0–6, middle = ⌊(low + high) ÷ 2⌋. Search for 9.</p><ol><li>low 0, high 6 → middle 3 → 8. 9 &gt; 8 → low = 4.</li><li>low 4, high 6 → middle 5 → 12. 9 &lt; 12 → high = 4.</li><li>low 4, high 4 → middle 4 → 10. 9 &lt; 10 → high = 3.</li><li>low (4) &gt; high (3): nothing left to search.</li></ol><p><strong>Answer:</strong> Not found, after 3 comparisons (8, 12, 10). Linear search would need all 7 to prove absence.</p></details><div class=\"def\"><b>Book vs lecture — Cost of linear search.</b> Book: Insists linear search is O(n) even when the target is found on the first try, treating the instant hit as misleading. Lecture: Linear search from index 0 when the index is unknown; its cost depends on the element's position. <b>Both are right: best case (item first) is one comparison, worst case (last or absent) is n, and Big O is quoted for the worst case, so O(n). If a quiz asks what the cost depends on, say position.</b></div><div class=\"def\"><b>Book vs lecture — Binary search not in the lecture record.</b> Book: Presents binary search as the efficient O(log n) alternative for sorted arrays. Lecture: The Module 2 lectures mention only linear search for arrays; binary search appears in the hub only as a distractor. <b>Learn it for later assessments. For Quiz 1-style items on arrays with an unknown index and no mention of sorting, the expected answer is linear search.</b></div><div class=\"def\"><b>Book vs lecture — Base of the logarithm.</b> Book: Introduces exponents and logarithms using e, the base of natural logarithms. Lecture: Not covered. <b>Binary search's O(log n) counts halvings, i.e. base-2 logarithms. In Big O the base does not change the class, but any comparison-counting question should use log₂.</b></div>"
    }
   ]
  },
  {
   "id": "linked",
   "title": "Linked lists",
   "tag": "Lectures 7, 8 · Module 2",
   "lede": "What arrays cannot do. Three variants, and a clean contrast table against arrays that is very likely to be tested.",
   "topics": [
    {
     "t": "Linked lists",
     "src": "L#7 · L#8",
     "h": "\n  <div class=\"def\">A <b>linked list</b> chains elements with <b>pointers</b>. Each <b>node</b> holds data plus the address of the next node. It begins at the <b>head</b>, and the last node points to <b>null</b>.</div>\n  <ul>\n   <li>Elements are <strong>not contiguous</strong> — they can sit anywhere in memory. The <em>links</em> create the order, not physical proximity.</li>\n   <li><strong>Insert and delete only rearrange pointers.</strong> Nothing shifts, unlike an array.</li>\n   <li><strong>Reshuffling</strong> (a playlist shuffle) moves no data at all — only the pointers change.</li>\n   <li>A deleted node stays in memory; it is simply no longer linked.</li>\n  </ul>\n  <h4>Three variants</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Type</th><th>Links</th><th>Used for</th></tr></thead><tbody>\n   <tr><td><strong>Singly linked</strong></td><td>Forward only</td><td>Sequential playback — &ldquo;play next&rdquo;</td></tr>\n   <tr><td><strong>Doubly linked</strong></td><td>Forward <strong>and backward</strong></td><td>&ldquo;Play previous&rdquo;; often implements a deque</td></tr>\n   <tr><td><strong>Circular</strong></td><td>Last node points <strong>back to the head</strong> instead of null</td><td>Repeat and shuffle, menu systems</td></tr>\n  </tbody></table></div>\n  <h4>Array vs linked list — the contrast to memorise</h4>\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Array</th><th>Linked list</th></tr></thead><tbody>\n   <tr><td><strong>Size</strong></td><td>Fixed at creation</td><td><strong>Dynamic</strong></td></tr>\n   <tr><td><strong>Memory</strong></td><td><strong>Contiguous</strong> block</td><td>Scattered; extra memory for the pointers</td></tr>\n   <tr><td><strong>Access</strong></td><td><strong>Direct</strong> by index — instant</td><td><strong>No random access</strong> — follow links from the head</td></tr>\n   <tr><td><strong>Insert / delete</strong></td><td>Slow — requires shifting</td><td><strong>Fast</strong> — just repoint</td></tr>\n   <tr><td><strong>Use when</strong></td><td>Size known, access frequent</td><td>Size unknown, changes frequent</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\"><strong>Nested linked lists</strong> handle hierarchies of varying size. His worked contrast: 8 semesters &times; 6 fixed courses → <strong>2D array</strong>; varying semesters with varying courses, retakes and deferrals → <strong>linked list of linked lists</strong>.</p><!--viz:atb-linked-insert--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Nodes A, B and D, each a data box plus a pointer box, chained from head to null. A new node C sits below; B now points to C and C points to D, replacing the dashed old link from B to D.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Inserting into a linked list: repoint, don't shift</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 196\" role=\"img\" aria-label=\"Linked list A, B, D ending in null, with a new node C inserted between B and D by repointing B to C and C to D; the old link from B to D is dashed.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<rect x=\"50\" y=\"40\" width=\"44\" height=\"34\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"94\" y=\"40\" width=\"22\" height=\"34\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"72\" y=\"62\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">A</text>\n<circle cx=\"105\" cy=\"57\" r=\"3\" style=\"fill:var(--ink-3);stroke:var(--ink-3);stroke-width:1\"/>\n<rect x=\"150\" y=\"40\" width=\"44\" height=\"34\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"194\" y=\"40\" width=\"22\" height=\"34\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"172\" y=\"62\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">B</text>\n<circle cx=\"205\" cy=\"57\" r=\"3\" style=\"fill:var(--ink-3);stroke:var(--ink-3);stroke-width:1\"/>\n<rect x=\"300\" y=\"40\" width=\"44\" height=\"34\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"344\" y=\"40\" width=\"22\" height=\"34\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"322\" y=\"62\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">D</text>\n<circle cx=\"355\" cy=\"57\" r=\"3\" style=\"fill:var(--ink-3);stroke:var(--ink-3);stroke-width:1\"/>\n<rect x=\"200\" y=\"122\" width=\"44\" height=\"34\" rx=\"2\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<rect x=\"244\" y=\"122\" width=\"22\" height=\"34\" rx=\"2\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"222\" y=\"144\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">C</text>\n<circle cx=\"255\" cy=\"139\" r=\"3\" style=\"fill:var(--ink-3);stroke:var(--ink-3);stroke-width:1\"/>\n<text x=\"72\" y=\"18\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">head</text>\n<path d=\"M72,26 L72,31\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M72,39 L68,31 L76,31 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M108,57 L141,57\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M149,57 L141,61 L141,53 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M208,57 L290,57\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none;stroke-dasharray:4 3\"/>\n<text x=\"250\" y=\"48\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px\">old link</text>\n<path d=\"M205,62 L216.3,112.2\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/>\n<path d=\"M218,120 L212.3,113.1 L220.2,111.3 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<path d=\"M262,136 L306.9,82.1\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/>\n<path d=\"M312,76 L310,84.7 L303.8,79.6 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<path d=\"M358,57 L378,57\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M386,57 L378,61 L378,53 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<text x=\"410\" y=\"62\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-family:var(--mono)\">null</text>\n<text x=\"220\" y=\"182\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">new node C: two pointers change, nothing shifts</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Compare the array insert: there every later element moves; here only B's pointer and C's pointer are written.</figcaption></figure><!--/viz:atb-linked-insert-->"
    },
    {
     "t": "Textbook: Linear Data Structures",
     "src": "Codeless DSA ch2",
     "h": "<!--viz:atb-linked-variants--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three rows of nodes A, B, C. Singly linked: forward arrows ending at null. Doubly linked: forward arrows plus backward arrows. Circular: forward arrows and a line from C back to A, with no null.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Singly, doubly and circular linked lists</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 220\" role=\"img\" aria-label=\"Three linked lists of A, B, C. Singly linked: arrows forward ending in null. Doubly linked: arrows forward and backward. Circular: the last node links back to the first.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<text x=\"14\" y=\"42\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Singly</text>\n<rect x=\"120\" y=\"22\" width=\"44\" height=\"30\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"142\" y=\"42\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">A</text>\n<rect x=\"210\" y=\"22\" width=\"44\" height=\"30\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"232\" y=\"42\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">B</text>\n<rect x=\"300\" y=\"22\" width=\"44\" height=\"30\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"322\" y=\"42\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">C</text>\n<text x=\"14\" y=\"104\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Doubly</text>\n<rect x=\"120\" y=\"84\" width=\"44\" height=\"30\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"142\" y=\"104\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">A</text>\n<rect x=\"210\" y=\"84\" width=\"44\" height=\"30\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"232\" y=\"104\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">B</text>\n<rect x=\"300\" y=\"84\" width=\"44\" height=\"30\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"322\" y=\"104\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">C</text>\n<text x=\"14\" y=\"166\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Circular</text>\n<rect x=\"120\" y=\"146\" width=\"44\" height=\"30\" rx=\"2\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"142\" y=\"166\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">A</text>\n<rect x=\"210\" y=\"146\" width=\"44\" height=\"30\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"232\" y=\"166\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">B</text>\n<rect x=\"300\" y=\"146\" width=\"44\" height=\"30\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"322\" y=\"166\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">C</text>\n<path d=\"M166,37 L200,37\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M208,37 L200,41 L200,33 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M256,37 L290,37\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M298,37 L290,41 L290,33 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M346,37 L364,37\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M372,37 L364,41 L364,33 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<text x=\"394\" y=\"42\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">null</text>\n<path d=\"M166,93 L200,93\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M208,93 L200,97 L200,89 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M208,105 L174,105\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none\"/>\n<path d=\"M166,105 L174,101 L174,109 Z\" style=\"fill:var(--clay);stroke:none\"/>\n<path d=\"M256,93 L290,93\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M298,93 L290,97 L290,89 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M298,105 L264,105\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none\"/>\n<path d=\"M256,105 L264,101 L264,109 Z\" style=\"fill:var(--clay);stroke:none\"/>\n<path d=\"M346,93 L364,93\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M372,93 L364,97 L364,89 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<text x=\"394\" y=\"98\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">null</text>\n<path d=\"M166,161 L200,161\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M208,161 L200,165 L200,157 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M256,161 L290,161\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M298,161 L290,165 L290,157 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M344,161 L372,161 L372,192 L142,192\" style=\"fill:none;stroke:var(--blue);stroke-width:1.5\"/>\n<path d=\"M142,192 L142,186\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/>\n<path d=\"M142,178 L146,186 L138,186 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<text x=\"260\" y=\"207\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">back to the head</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Doubly linked lets you step back (and delete more easily); circular has no null, so you can loop for ever.</figcaption></figure><!--/viz:atb-linked-variants--><p><strong>Linked lists and nodes</strong> — A linked list stores its data scattered through memory. Each node pairs a data element with a pointer to the next node; access starts at the head and follows pointers. In a singly linked list the last node holds null.<br><em>e.g.</em> A chain of approval steps where each step only knows which step comes next.</p><p><strong>Doubly and circular linked lists</strong> — A doubly linked list adds a pointer to the previous node, allowing travel in both directions and making deletion more efficient. In a circular linked list the last node links back to the first, so there is no null; its links can be single or double. Circular lists suit buffering and can be used to build queues.<br><em>e.g.</em> A rotating on-call roster that wraps from the last engineer back to the first.</p>"
    }
   ]
  },
  {
   "id": "stacks",
   "title": "Stacks",
   "tag": "Lectures 9, 13 · Module 2",
   "lede": "LIFO. Four operations, two errors, and the static/dynamic split — with the Photoshop and Excel numbers he quoted.",
   "topics": [
    {
     "t": "Stacks — LIFO",
     "src": "L#9 · L#13",
     "h": "\n  <div class=\"def\">A <b>stack</b> adds and removes elements <b>only at the top</b>. The last element in is the first out — <b>LIFO</b>.</div>\n  <h4>The four operations</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Operation</th><th>Does</th><th>Takes a value?</th></tr></thead><tbody>\n   <tr><td><strong>push(x)</strong></td><td>Adds x to the top</td><td><strong>Yes</strong></td></tr>\n   <tr><td><strong>pop()</strong></td><td><strong>Removes and returns</strong> the top element</td><td>No — it takes whatever is on top</td></tr>\n   <tr><td><strong>peek()</strong></td><td>Reads the top <strong>without removing</strong> it</td><td>No</td></tr>\n   <tr><td><strong>size()</strong></td><td>Number of elements</td><td>No</td></tr>\n  </tbody></table></div>\n  <h4>Static vs dynamic — with his numbers</h4>\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Static stack</th><th>Dynamic stack</th></tr></thead><tbody>\n   <tr><td><strong>Size</strong></td><td>Fixed at creation</td><td>Grows as needed</td></tr>\n   <tr><td><strong>Built on</strong></td><td><strong>Arrays</strong></td><td><strong>Linked lists</strong></td></tr>\n   <tr><td><strong>Examples</strong></td><td><strong>Adobe Photoshop: 50</strong> undos · <strong>Microsoft Excel: 100</strong> undos</td><td><strong>Microsoft Word</strong> — limited only by RAM</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>Overflow vs underflow.</b> <b>Overflow</b> = pushing onto a <em>full</em> stack (too many browser tabs). <b>Underflow</b> = popping from an <em>empty</em> stack (pressing Back with no history).</div>\n  <p style=\"font-size:14.5px\"><strong>Applications:</strong> undo/redo, function call management, expression evaluation, depth-first search, browser history. A <strong>stack of stacks</strong> models browser windows each holding tabs.</p><!--viz:atb-stack-trace--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Stack snapshots: after push Type, push Bold and push Crop the stack holds Type, Bold, Crop with Crop on top. pop removes Crop; peek then reads Bold and leaves the stack unchanged.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">An undo stack, step by step</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 156\" role=\"img\" aria-label=\"Five snapshots of an undo stack: push Type, push Bold, push Crop, then pop removes Crop, then peek reads Bold without removing it.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<text x=\"50\" y=\"20\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">push(Type)</text>\n<path d=\"M16,34 L16,122 L84,122 L84,34\" style=\"fill:none;stroke:var(--ink-3);stroke-width:1.5\"/>\n<rect x=\"21\" y=\"92\" width=\"58\" height=\"24\" rx=\"2\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"50\" y=\"109\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Type</text>\n<text x=\"135\" y=\"20\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">push(Bold)</text>\n<path d=\"M101,34 L101,122 L169,122 L169,34\" style=\"fill:none;stroke:var(--ink-3);stroke-width:1.5\"/>\n<rect x=\"106\" y=\"92\" width=\"58\" height=\"24\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"135\" y=\"109\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Type</text>\n<rect x=\"106\" y=\"66\" width=\"58\" height=\"24\" rx=\"2\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"135\" y=\"83\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Bold</text>\n<text x=\"220\" y=\"20\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">push(Crop)</text>\n<path d=\"M186,34 L186,122 L254,122 L254,34\" style=\"fill:none;stroke:var(--ink-3);stroke-width:1.5\"/>\n<rect x=\"191\" y=\"92\" width=\"58\" height=\"24\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"220\" y=\"109\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Type</text>\n<rect x=\"191\" y=\"66\" width=\"58\" height=\"24\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"220\" y=\"83\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Bold</text>\n<rect x=\"191\" y=\"40\" width=\"58\" height=\"24\" rx=\"2\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"220\" y=\"57\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Crop</text>\n<text x=\"305\" y=\"20\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">pop()</text>\n<path d=\"M271,34 L271,122 L339,122 L339,34\" style=\"fill:none;stroke:var(--ink-3);stroke-width:1.5\"/>\n<rect x=\"276\" y=\"92\" width=\"58\" height=\"24\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"305\" y=\"109\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Type</text>\n<rect x=\"276\" y=\"66\" width=\"58\" height=\"24\" rx=\"2\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"305\" y=\"83\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Bold</text>\n<text x=\"305\" y=\"142\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">out: Crop</text>\n<text x=\"390\" y=\"20\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">peek()</text>\n<path d=\"M356,34 L356,122 L424,122 L424,34\" style=\"fill:none;stroke:var(--ink-3);stroke-width:1.5\"/>\n<rect x=\"361\" y=\"92\" width=\"58\" height=\"24\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"390\" y=\"109\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Type</text>\n<rect x=\"361\" y=\"66\" width=\"58\" height=\"24\" rx=\"2\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"390\" y=\"83\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Bold</text>\n<text x=\"390\" y=\"142\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">read: Bold</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The top (blue) is the only reachable item: pop removes it and returns it (Undo), peek only reads it.</figcaption></figure><!--/viz:atb-stack-trace-->"
    },
    {
     "t": "Textbook: Linear Data Structures",
     "src": "Codeless DSA ch2",
     "h": "<p><strong>Stacks</strong> — A stack is a LIFO structure: push adds an element and pop removes the one added most recently. Only the top is reachable, which is its main weakness when you need an arbitrary element, but it is ideal for reversing sequences and backtracking. Static stacks have fixed capacity (built on arrays); dynamic stacks grow at run time (built on a singly linked list that keeps a reference to the top).<br><em>e.g.</em> Retracing your steps through a decision tree to the most recent fork.</p>"
    }
   ]
  },
  {
   "id": "queues",
   "title": "Queues",
   "tag": "Lectures 10, 11, 13 · Module 2 · largest block",
   "lede": "FIFO, then four types of queue. The richest unit in named business applications.",
   "topics": [
    {
     "t": "Queues — FIFO",
     "src": "L#10 · L#13",
     "h": "\n  <div class=\"def\">A <b>queue</b> adds at the <b>rear</b> and removes from the <b>front</b>. First in, first out — <b>FIFO</b>, or first come first served.</div>\n  <div class=\"scroller\"><table><thead><tr><th>Operation</th><th>Does</th></tr></thead><tbody>\n   <tr><td><strong>enqueue(x)</strong> / NQ</td><td>Adds at the <strong>rear</strong>. The rear pointer advances; the front does not move</td></tr>\n   <tr><td><strong>dequeue()</strong> / DQ</td><td>Removes and returns the <strong>front</strong>. The front pointer advances; the rear does not move. Takes no parameter</td></tr>\n   <tr><td><strong>peek() / front()</strong></td><td>Reads the front without removing</td></tr>\n   <tr><td><strong>rear() / back()</strong></td><td>Reads the most recently added element</td></tr>\n   <tr><td><strong>size()</strong></td><td>Number of elements</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">On an empty queue, the first element inserted occupies <strong>both</strong> the front and rear positions.</p>\n  <div class=\"warnbox\"><b>Which pointer moves?</b> Enqueue moves the <b>rear</b>. Dequeue moves the <b>front</b>. He made a point of this, so expect it.</div>\n  <h4>Stack vs queue</h4>\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Stack</th><th>Queue</th></tr></thead><tbody>\n   <tr><td>Order</td><td><strong>LIFO</strong></td><td><strong>FIFO</strong></td></tr>\n   <tr><td>Insert at</td><td>Top (push)</td><td>Rear (enqueue)</td></tr>\n   <tr><td>Remove from</td><td>Top (pop)</td><td>Front (dequeue)</td></tr>\n   <tr><td>Used for</td><td>Undo/redo, function calls</td><td>Scheduling, buffering</td></tr>\n  </tbody></table></div>\n  <h4>Static vs dynamic queues</h4>\n  <p style=\"font-size:14.5px\"><strong>Static</strong> (arrays, fixed): Wi-Fi router packet queues — congestion drops packets by <strong>tail drop</strong> · keyboard and mouse buffers, typically <strong>16–64 bytes</strong> · vending machines · network printer buffers.<br>\n  <strong>Dynamic</strong> (linked lists, growing): WhatsApp holding typed messages offline and sending them in order · Netflix, Spotify and Prime buffering segments · food-delivery apps at peak demand.</p>\n  <p style=\"font-size:14.5px\"><strong>Overflow:</strong> enqueueing into a full static queue — IRCTC under load. <strong>Underflow:</strong> dequeueing from an empty queue — a stream freezing when the buffer empties.</p><!--viz:atb-queue-pointers--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three rows of a six-slot queue. Enqueue A, B, C: front at slot 0, rear at slot 2. Dequeue removes A: front moves to slot 1, rear stays. Enqueue D: rear moves to slot 3, front stays.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Which pointer moves?</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 224\" role=\"img\" aria-label=\"A six-slot array queue in three states: after enqueue A, B, C the front is at 0 and rear at 2; after dequeue A the front moves to 1; after enqueue D the rear moves to 3.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<text x=\"14\" y=\"27\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">enqueue</text>\n<text x=\"14\" y=\"43\" style=\"fill:var(--ink-3);font-size:13px\">A, B, C</text>\n<rect x=\"110\" y=\"12\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"134\" y=\"34\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">A</text>\n<rect x=\"158\" y=\"12\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"182\" y=\"34\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">B</text>\n<rect x=\"206\" y=\"12\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"230\" y=\"34\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">C</text>\n<rect x=\"254\" y=\"12\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"302\" y=\"12\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"350\" y=\"12\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<path d=\"M134,48 L129,56 L139,56 Z\" style=\"fill:var(--clay);stroke:none\"/>\n<text x=\"134\" y=\"70\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px\">front</text>\n<path d=\"M230,48 L225,56 L235,56 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<text x=\"230\" y=\"70\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">rear</text>\n<text x=\"14\" y=\"97\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">dequeue()</text>\n<text x=\"14\" y=\"113\" style=\"fill:var(--ink-3);font-size:13px\">A leaves</text>\n<rect x=\"110\" y=\"82\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"158\" y=\"82\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"182\" y=\"104\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">B</text>\n<rect x=\"206\" y=\"82\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"230\" y=\"104\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">C</text>\n<rect x=\"254\" y=\"82\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"302\" y=\"82\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"350\" y=\"82\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<path d=\"M182,118 L177,126 L187,126 Z\" style=\"fill:var(--clay);stroke:none\"/>\n<text x=\"182\" y=\"140\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">front</text>\n<path d=\"M230,118 L225,126 L235,126 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<text x=\"230\" y=\"140\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">rear</text>\n<text x=\"14\" y=\"167\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">enqueue</text>\n<text x=\"14\" y=\"183\" style=\"fill:var(--ink-3);font-size:13px\">D joins</text>\n<rect x=\"110\" y=\"152\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"158\" y=\"152\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"182\" y=\"174\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">B</text>\n<rect x=\"206\" y=\"152\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"230\" y=\"174\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">C</text>\n<rect x=\"254\" y=\"152\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"278\" y=\"174\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">D</text>\n<rect x=\"302\" y=\"152\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"350\" y=\"152\" width=\"48\" height=\"32\" rx=\"0\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<path d=\"M182,188 L177,196 L187,196 Z\" style=\"fill:var(--clay);stroke:none\"/>\n<text x=\"182\" y=\"210\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px\">front</text>\n<path d=\"M278,188 L273,196 L283,196 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<text x=\"278\" y=\"210\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">rear</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Enqueue moves only the rear; dequeue moves only the front (the pointer that just moved is in bold).</figcaption></figure><!--/viz:atb-queue-pointers-->"
    },
    {
     "t": "The four types of queue",
     "src": "L#11 · L#13",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Type</th><th>Behaviour</th><th>Applications he named</th></tr></thead><tbody>\n   <tr><td><strong>Linear</strong></td><td>Plain FIFO. <strong>Wastes memory</strong> — once the rear hits the end of the array, nothing more fits even though dequeues freed space at the front</td><td>A normal line</td></tr>\n   <tr><td><strong>Circular</strong></td><td>The last position <strong>links back to the first</strong>, so freed space is reused. Can run indefinitely</td><td><strong>Traffic lights</strong> (red→green→yellow→red) · turn-based multiplayer (Ludo) · looping playlists · <strong>round-robin CPU scheduling</strong></td></tr>\n   <tr><td><strong>Priority</strong></td><td>Served by <strong>priority, not arrival order</strong>. Equal priority falls back to FIFO</td><td><strong>Hospital triage</strong> · air traffic control (low-fuel long-haul first) · Rajdhani and Shatabdi getting green signals · system over application tasks · <strong>Tatkal</strong> · disaster rescue</td></tr>\n   <tr><td><strong>Deque</strong> (double-ended)</td><td>Insert <strong>and</strong> delete at <strong>both ends</strong> — combines FIFO and LIFO. Four operations: insert front, insert rear, delete front, delete rear</td><td><strong>Browser back and forward</strong> · undo and redo · train coaches added at either end · usually built on a <strong>doubly linked list</strong></td></tr>\n  </tbody></table></div>\n  <div class=\"def\">His one-line summary: <b>linear</b> = a regular line · <b>circular</b> = a ring that reuses space · <b>priority</b> = a VIP line · <b>deque</b> = open at both ends.</div>\n  <h4>Queue of queues</h4>\n  <p style=\"font-size:14.5px\">A main queue whose elements are themselves queues. Netflix: the main queue holds upcoming <strong>scene segments</strong>, each sub-queue holds the <strong>frames</strong>. When the connection drops, progress in the main queue survives but the interrupted sub-queue restarts — which is why video resumes slightly <em>before</em> where it stopped.</p><!--viz:atb-circular-queue--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Six slots arranged in a ring with arrows from each slot to the next and from slot 5 back to slot 0. E is at the front in slot 4, F in slot 5, G at the rear in slot 0; slots 1, 2 and 3 are free.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">A circular queue reuses freed space</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 252\" role=\"img\" aria-label=\"Circular queue with six slots in a ring. Slots 4, 5 and 0 hold E, F and G; slots 1 to 3 are free. Front is at slot 4 and the rear has wrapped round to slot 0.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<path d=\"M143.7,70.5 L153.2,76\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M159.2,79.5 L151.4,79 L154.9,73 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M180.9,117 L180.9,128\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M180.9,135 L177.4,128 L184.4,128 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M159.2,172.5 L149.7,178\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M143.7,181.5 L148,175 L151.5,181 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M100.3,181.5 L90.8,176\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M84.8,172.5 L92.6,173 L89.1,179 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M63.1,135 L63.1,124\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M63.1,117 L66.6,124 L59.6,124 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<path d=\"M84.8,79.5 L94.3,74\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/>\n<path d=\"M100.3,70.5 L96,77 L92.5,71 Z\" style=\"fill:var(--blue);stroke:none\"/>\n<circle cx=\"122\" cy=\"58\" r=\"21\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"122\" y=\"63\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">G</text>\n<text x=\"122\" y=\"23\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">[0]</text>\n<circle cx=\"180.9\" cy=\"92\" r=\"21\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"180.9\" y=\"97\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">free</text>\n<text x=\"215.5\" y=\"77\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">[1]</text>\n<circle cx=\"180.9\" cy=\"160\" r=\"21\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"180.9\" y=\"165\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">free</text>\n<text x=\"215.5\" y=\"185\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">[2]</text>\n<circle cx=\"122\" cy=\"194\" r=\"21\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"122\" y=\"199\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">free</text>\n<text x=\"122\" y=\"239\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">[3]</text>\n<circle cx=\"63.1\" cy=\"160\" r=\"21\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/>\n<text x=\"63.1\" y=\"165\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">E</text>\n<text x=\"28.5\" y=\"185\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">[4]</text>\n<circle cx=\"63.1\" cy=\"92\" r=\"21\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"63.1\" y=\"97\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">F</text>\n<text x=\"28.5\" y=\"77\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">[5]</text>\n<text x=\"250\" y=\"66\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">front = slot 4</text>\n<text x=\"250\" y=\"88\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">rear = slot 0 (wrapped)</text>\n<text x=\"250\" y=\"110\" style=\"fill:var(--ink-2);font-size:13px\">next enqueue goes to</text>\n<text x=\"250\" y=\"132\" style=\"fill:var(--ink);font-size:13px\">(0 + 1) mod 6 = slot 1</text>\n<text x=\"250\" y=\"166\" style=\"fill:var(--ink-2);font-size:13px\">space freed by dequeues</text>\n<text x=\"250\" y=\"188\" style=\"fill:var(--ink-2);font-size:13px\">is reused, not wasted</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">In a linear queue the rear would be stuck at the last slot; the ring lets it wrap to slot 0 and use space that dequeues freed.</figcaption></figure><!--/viz:atb-circular-queue--><!--viz:atb-deque-ends--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three cells B, C, D. On the left an arrow inserts at the front and another deletes from the front; on the right an arrow inserts at the rear and another deletes from the rear.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">A deque is open at both ends</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 124\" role=\"img\" aria-label=\"A deque holding B, C, D with arrows at both ends: insert front and delete front on the left, insert rear and delete rear on the right.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<rect x=\"145\" y=\"42\" width=\"50\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"170\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">B</text>\n<rect x=\"195\" y=\"42\" width=\"50\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"220\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">C</text>\n<rect x=\"245\" y=\"42\" width=\"50\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"270\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">D</text>\n<text x=\"170\" y=\"104\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">front</text>\n<text x=\"270\" y=\"104\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">rear</text>\n<path d=\"M30,52 L129,52\" style=\"stroke:var(--good);stroke-width:2;fill:none\"/>\n<path d=\"M137,52 L129,56 L129,48 Z\" style=\"fill:var(--good);stroke:none\"/>\n<path d=\"M137,74 L38,74\" style=\"stroke:var(--bad);stroke-width:2;fill:none\"/>\n<path d=\"M30,74 L38,70 L38,78 Z\" style=\"fill:var(--bad);stroke:none\"/>\n<path d=\"M410,52 L311,52\" style=\"stroke:var(--good);stroke-width:2;fill:none\"/>\n<path d=\"M303,52 L311,48 L311,56 Z\" style=\"fill:var(--good);stroke:none\"/>\n<path d=\"M303,74 L402,74\" style=\"stroke:var(--bad);stroke-width:2;fill:none\"/>\n<path d=\"M410,74 L402,78 L402,70 Z\" style=\"fill:var(--bad);stroke:none\"/>\n<text x=\"84\" y=\"40\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">insert front</text>\n<text x=\"84\" y=\"94\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">delete front</text>\n<text x=\"356\" y=\"40\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">insert rear</text>\n<text x=\"356\" y=\"94\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">delete rear</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Use one end only and it behaves like a stack (LIFO); insert at one end and delete at the other and it is a queue (FIFO).</figcaption></figure><!--/viz:atb-deque-ends-->"
    },
    {
     "t": "Textbook: Linear Data Structures",
     "src": "Codeless DSA ch2",
     "h": "<p><strong>Queues</strong> — A queue is FIFO: enqueue adds at the rear and dequeue removes from the front, so the element that has waited longest leaves first. The book notes that combining stacks and queues produces powerful structures, and that some queue variants are not strictly linear.<br><em>e.g.</em> Cheques cleared strictly in deposit order.</p><p><strong>Priority queues</strong> — A priority queue attaches a priority (a key) to every item, and higher-priority items are dequeued first; items with equal priority leave in their order in the queue. Typical operations add, delete, fetch the highest-priority item and check whether the queue is full. They can be built from arrays or linked lists, and the choice affects their behaviour.<br><em>e.g.</em> Ambulance calls ranked by severity, with equal-severity calls taken in arrival order.</p>"
    }
   ]
  },
  {
   "id": "complexity",
   "title": "Algorithm analysis &amp; Big O",
   "tag": "From the textbook",
   "lede": "",
   "topics": [
    {
     "t": "Textbook: Intro to DSA, Types, and Big O",
     "src": "Codeless DSA ch1",
     "h": "<!--viz:atb-bigo-growth--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Line chart for n from 1 to 20: log n rises to only about 4 steps, n to 20, n log n to about 86, while n squared passes 100 steps by n = 10.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">How the growth classes pull apart</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 228\" role=\"img\" aria-label=\"Line chart of steps against input size n from 1 to 20 for log n, n, n log n and n squared. n squared passes 100 steps by n = 10; log n stays almost flat.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<path d=\"M52,180 L352,180\" style=\"stroke:var(--rule);stroke-width:1;fill:none\"/>\n<text x=\"44\" y=\"184.5\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">0</text>\n<path d=\"M52,105 L352,105\" style=\"stroke:var(--rule);stroke-width:1;fill:none\"/>\n<text x=\"44\" y=\"109.5\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">50</text>\n<path d=\"M52,30 L352,30\" style=\"stroke:var(--rule);stroke-width:1;fill:none\"/>\n<text x=\"44\" y=\"34.5\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">100</text>\n<text x=\"52\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text>\n<text x=\"127\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">5</text>\n<text x=\"202\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text>\n<text x=\"277\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">15</text>\n<text x=\"352\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">20</text>\n<path d=\"M52,180 L352,180\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/>\n<path d=\"M52,180 L52,30\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/>\n<text x=\"202\" y=\"218\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">input size n</text>\n<text x=\"52\" y=\"18\" style=\"fill:var(--ink-3);font-size:13px\">steps</text>\n<path d=\"M67,180 L70.8,179.5 L74.5,179.1 L78.2,178.8 L82,178.5 L85.8,178.2 L89.5,178 L93.2,177.8 L97,177.6 L100.8,177.4 L104.5,177.3 L108.2,177.1 L112,177 L115.8,176.9 L119.5,176.7 L123.2,176.6 L127,176.5 L130.8,176.4 L134.5,176.3 L138.2,176.2 L142,176.1 L145.8,176 L149.5,175.9 L153.2,175.9 L157,175.8 L160.8,175.7 L164.5,175.6 L168.2,175.6 L172,175.5 L175.8,175.4 L179.5,175.4 L183.2,175.3 L187,175.2 L190.8,175.2 L194.5,175.1 L198.2,175.1 L202,175 L205.8,175 L209.5,174.9 L213.2,174.9 L217,174.8 L220.8,174.8 L224.5,174.7 L228.2,174.7 L232,174.6 L235.8,174.6 L239.5,174.5 L243.2,174.5 L247,174.4 L250.8,174.4 L254.5,174.4 L258.2,174.3 L262,174.3 L265.8,174.3 L269.5,174.2 L273.2,174.2 L277,174.1 L280.8,174.1 L284.5,174.1 L288.2,174 L292,174 L295.8,174 L299.5,173.9 L303.2,173.9 L307,173.9 L310.8,173.8 L314.5,173.8 L318.2,173.8 L322,173.7 L325.8,173.7 L329.5,173.7 L333.2,173.7 L337,173.6 L340.8,173.6 L344.5,173.6 L348.2,173.5 L352,173.5\" style=\"fill:none;stroke:var(--good);stroke-width:2\"/>\n<text x=\"360\" y=\"178.5\" style=\"fill:var(--good);font-size:14px;font-weight:700\">log n</text>\n<path d=\"M67,178.5 L70.8,178.1 L74.5,177.8 L78.2,177.4 L82,177 L85.8,176.6 L89.5,176.2 L93.2,175.9 L97,175.5 L100.8,175.1 L104.5,174.8 L108.2,174.4 L112,174 L115.8,173.6 L119.5,173.2 L123.2,172.9 L127,172.5 L130.8,172.1 L134.5,171.8 L138.2,171.4 L142,171 L145.8,170.6 L149.5,170.2 L153.2,169.9 L157,169.5 L160.8,169.1 L164.5,168.8 L168.2,168.4 L172,168 L175.8,167.6 L179.5,167.2 L183.2,166.9 L187,166.5 L190.8,166.1 L194.5,165.8 L198.2,165.4 L202,165 L205.8,164.6 L209.5,164.2 L213.2,163.9 L217,163.5 L220.8,163.1 L224.5,162.8 L228.2,162.4 L232,162 L235.8,161.6 L239.5,161.2 L243.2,160.9 L247,160.5 L250.8,160.1 L254.5,159.8 L258.2,159.4 L262,159 L265.8,158.6 L269.5,158.2 L273.2,157.9 L277,157.5 L280.8,157.1 L284.5,156.8 L288.2,156.4 L292,156 L295.8,155.6 L299.5,155.2 L303.2,154.9 L307,154.5 L310.8,154.1 L314.5,153.8 L318.2,153.4 L322,153 L325.8,152.6 L329.5,152.2 L333.2,151.9 L337,151.5 L340.8,151.1 L344.5,150.8 L348.2,150.4 L352,150\" style=\"fill:none;stroke:var(--blue);stroke-width:2\"/>\n<text x=\"360\" y=\"155\" style=\"fill:var(--blue);font-size:14px;font-weight:700\">n</text>\n<path d=\"M67,180 L70.8,179.4 L74.5,178.7 L78.2,177.9 L82,177 L85.8,176.1 L89.5,175 L93.2,174 L97,172.9 L100.8,171.7 L104.5,170.5 L108.2,169.3 L112,168 L115.8,166.7 L119.5,165.4 L123.2,164 L127,162.6 L130.8,161.2 L134.5,159.7 L138.2,158.2 L142,156.7 L145.8,155.2 L149.5,153.7 L153.2,152.1 L157,150.5 L160.8,148.9 L164.5,147.3 L168.2,145.7 L172,144 L175.8,142.3 L179.5,140.6 L183.2,138.9 L187,137.2 L190.8,135.5 L194.5,133.7 L198.2,132 L202,130.2 L205.8,128.4 L209.5,126.6 L213.2,124.8 L217,122.9 L220.8,121.1 L224.5,119.2 L228.2,117.4 L232,115.5 L235.8,113.6 L239.5,111.7 L243.2,109.8 L247,107.8 L250.8,105.9 L254.5,104 L258.2,102 L262,100 L265.8,98.1 L269.5,96.1 L273.2,94.1 L277,92.1 L280.8,90.1 L284.5,88.1 L288.2,86 L292,84 L295.8,82 L299.5,79.9 L303.2,77.8 L307,75.8 L310.8,73.7 L314.5,71.6 L318.2,69.5 L322,67.4 L325.8,65.3 L329.5,63.2 L333.2,61.1 L337,58.9 L340.8,56.8 L344.5,54.7 L348.2,52.5 L352,50.3\" style=\"fill:none;stroke:var(--clay);stroke-width:2\"/>\n<text x=\"360\" y=\"55.3\" style=\"fill:var(--clay);font-size:14px;font-weight:700\">n log n</text>\n<path d=\"M67,178.5 L70.8,177.7 L74.5,176.6 L78.2,175.4 L82,174 L85.8,172.4 L89.5,170.6 L93.2,168.7 L97,166.5 L100.8,164.2 L104.5,161.6 L108.2,158.9 L112,156 L115.8,152.9 L119.5,149.6 L123.2,146.2 L127,142.5 L130.8,138.7 L134.5,134.6 L138.2,130.4 L142,126 L145.8,121.4 L149.5,116.6 L153.2,111.7 L157,106.5 L160.8,101.2 L164.5,95.6 L168.2,89.9 L172,84 L175.8,77.9 L179.5,71.6 L183.2,65.2 L187,58.5 L190.8,51.7 L194.5,44.6 L198.2,37.4 L202,30\" style=\"fill:none;stroke:var(--bad);stroke-width:2\"/>\n<text x=\"210\" y=\"40\" style=\"fill:var(--bad);font-size:15px;font-weight:700\">n²</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Doubling n adds one step to log n, doubles n, and quadruples n²: the curve's shape matters more than any single timing.</figcaption></figure><!--/viz:atb-bigo-growth--><!--viz:atb-bigo-ladder--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table of seven Big O classes from O(1) to O(n!) with the number of steps at n = 20 and a typical business task for each.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Growth classes from best to worst</div><div class=\"scroller\"><table><thead><tr><th>Class</th><th>Name</th><th>Steps at n = 20</th><th>Typical task</th></tr></thead><tbody><tr><td style=\"font-family:var(--mono);background:var(--good-soft)\">O(1)</td><td>constant</td><td style=\"font-family:var(--mono)\">1</td><td>read an array element by its index</td></tr><tr><td style=\"font-family:var(--mono);background:var(--good-soft)\">O(log n)</td><td>logarithmic</td><td style=\"font-family:var(--mono)\">≈ 4.3</td><td>binary search a sorted customer list</td></tr><tr><td style=\"font-family:var(--mono);background:var(--good-soft)\">O(n)</td><td>linear</td><td style=\"font-family:var(--mono)\">20</td><td>scan every invoice once</td></tr><tr><td style=\"font-family:var(--mono);\">O(n log n)</td><td>n log n</td><td style=\"font-family:var(--mono)\">≈ 86</td><td>an efficient sort (e.g. merge sort)</td></tr><tr><td style=\"font-family:var(--mono);\">O(n²)</td><td>quadratic</td><td style=\"font-family:var(--mono)\">400</td><td>compare every customer with every other</td></tr><tr><td style=\"font-family:var(--mono);background:var(--bad-soft)\">O(2ⁿ)</td><td>exponential</td><td style=\"font-family:var(--mono)\">1,048,576</td><td>try every subset of 20 projects to fund</td></tr><tr><td style=\"font-family:var(--mono);background:var(--bad-soft)\">O(n!)</td><td>factorial</td><td style=\"font-family:var(--mono)\">≈ 2.4 × 10¹⁸</td><td>try every order of 20 delivery stops</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">At only 20 items, exponential and factorial are already out of reach; that is why the class matters more than the hardware.</figcaption></figure><!--/viz:atb-bigo-ladder--><p><strong>Time and space complexity</strong> — Time complexity is how long an algorithm takes as a function of its input size; space complexity is how much memory it needs. Time is the measure used most often, but space matters on resource-constrained systems such as embedded devices.<br><em>e.g.</em> A fraud check that is fast but needs the entire transaction history in memory may be time-efficient and space-hungry.</p><p><strong>Asymptotic analysis and cases</strong> — Timing an algorithm on sample inputs is tedious, inaccurate and limited in scope, so analysts describe its limiting behaviour mathematically as the input grows — asymptotic analysis. One can look at the worst case (longest run), the best case (shortest), or the average case (what usually happens).<br><em>e.g.</em> Searching a list where the item happens to be first is the best case; where it is last or missing is the worst case.</p><p><strong>Big O growth classes</strong> — Big O is the most widely used asymptotic notation; the book uses it to describe worst-case running time. Common classes, from best to worst: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n), O(n²) quadratic, O(2ⁿ) exponential and O(n!) factorial. Omega describes the minimum time and Theta pins down both bounds.<br><span style=\"font-family:var(--mono)\">O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ) &lt; O(n!)</span><br><em>e.g.</em> Doubling the input doubles O(n) work, quadruples O(n²) work, and adds just one step to O(log₂ n) work.</p>"
    },
    {
     "t": "Textbook: Linear and Binary Search",
     "src": "Codeless DSA ch6",
     "h": "<p><strong>Linearity</strong> — Something is linear when its graph is a straight line: double the input, double the output. A linear algorithm's running time rises in direct proportion to the input size.<br><em>e.g.</em> Checking 2,000 invoices one by one takes about twice as long as checking 1,000.</p><p><strong>Exponents and logarithms</strong> — An exponent raises a base to a power; a logarithm is its inverse — it asks what power the base must be raised to. In search analysis the base is usually 2, so log₂ n counts how many times n can be halved before reaching 1.<br><span style=\"font-family:var(--mono)\">2ˣ = n  ⇔  x = log₂ n</span><br><em>e.g.</em> 2¹⁰ = 1,024, so log₂ 1,024 = 10.</p>"
    }
   ]
  },
  {
   "id": "memory",
   "title": "Computer memory basics",
   "tag": "From the textbook",
   "lede": "",
   "topics": [
    {
     "t": "Textbook: Linear Data Structures",
     "src": "Codeless DSA ch2",
     "h": "<!--viz:atb-memory-pyramid--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Pyramid of four layers, from the narrow top: registers, cache (L1, L2, L3), RAM (main memory), disk storage (HDD or SSD). An arrow on the left points up to faster; an arrow on the right points down to larger.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The memory hierarchy</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 212\" role=\"img\" aria-label=\"Memory hierarchy pyramid: registers at the top, then cache, then RAM, then disk storage at the base; levels get faster towards the top and larger towards the bottom.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<path d=\"M170,28 L270,28 L300,68 L140,68 Z\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"220\" y=\"53\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Registers</text>\n<path d=\"M140,68 L300,68 L330,108 L110,108 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"220\" y=\"93\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Cache (L1, L2, L3)</text>\n<path d=\"M110,108 L330,108 L360,148 L80,148 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"220\" y=\"133\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">RAM (main memory)</text>\n<path d=\"M80,148 L360,148 L390,188 L50,188 Z\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"220\" y=\"173\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Disk storage (HDD / SSD)</text>\n<path d=\"M30,186 L30,40\" style=\"stroke:var(--good);stroke-width:2;fill:none\"/>\n<path d=\"M30,32 L34,40 L26,40 Z\" style=\"fill:var(--good);stroke:none\"/>\n<text x=\"30\" y=\"20\" text-anchor=\"middle\" style=\"fill:var(--good);font-size:13px;font-weight:700\">faster</text>\n<path d=\"M410,32 L410,174\" style=\"stroke:var(--clay);stroke-width:2;fill:none\"/>\n<path d=\"M410,182 L406,174 L414,174 Z\" style=\"fill:var(--clay);stroke:none\"/>\n<text x=\"410\" y=\"202\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">larger</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Programs load from disk into RAM; the CPU works from cache and registers. Each step up is smaller and faster.</figcaption></figure><!--/viz:atb-memory-pyramid--><p><strong>Memory as the resource data structures manage</strong> — Memory is the computer's workspace for data it is using or has used. Much of data-structure design is about using that finite resource well, which is why the book starts here.<br><em>e.g.</em> Choosing a structure that avoids reserving a 1-lakh-slot block for a list that usually holds 200 items.</p><p><strong>The memory hierarchy</strong> — Memory is arranged like a pyramid: large, slow disk storage (HDD or SSD) at the base, then RAM (main memory), then small on-chip cache (L1, L2, sometimes L3), and at the top a handful of registers inside the processor. Moving up, each level is smaller and faster; programs are loaded from disk into RAM to run.<br><em>e.g.</em> Opening a spreadsheet app copies it from the SSD into RAM; the figures the CPU is crunching right now sit in cache and registers.</p><p><strong>Why cache must stay small</strong> — Cache speeds things up by holding the data the CPU is most likely to need next, and part of its speed comes from being small enough to search quickly. Make it too large and it starts to behave like RAM, losing its advantage.<br><em>e.g.</em> A one-page cheat sheet beats rewriting the whole textbook into your notebook.</p><p><strong>Binary vs decimal memory prefixes</strong> — In everyday metric usage kilo means 1,000, but computer memory has traditionally used kilo for 1,024 (2¹⁰). To remove the ambiguity, IEC binary prefixes — kibibyte (KiB), mebibyte (MiB), gibibyte (GiB) — denote the powers of 1,024.<br><span style=\"font-family:var(--mono)\">1 KiB = 1,024 bytes; 1 MiB = 1,024 KiB</span><br><em>e.g.</em> A 4 KiB memory page holds 4,096 bytes, not 4,000.</p><p><strong>Physical and virtual memory</strong> — Physical addresses are the real memory locations. The operating system gives each program virtual addresses, organised in pages, and a page table translates them to physical ones. This gives programs the illusion of more memory and lets the OS manage the finite real supply; if no slot can be found, the program errors.<br><em>e.g.</em> Several apps each believe they own a large, continuous memory space while the OS juggles where their pages really live.</p>"
    }
   ]
  },
  {
   "id": "trees",
   "title": "Trees",
   "tag": "Lectures 12, 14, 18 · Module 3 · + textbook",
   "lede": "The first non-linear structure. Vocabulary, depth and height, four traversals, then six named types of tree — the lecture's definitions win over the textbook block below.",
   "topics": [
    {
     "t": "Trees — the vocabulary",
     "src": "L#12 · L#18",
     "h": "\n  <div class=\"def\">A <b>tree</b> arranges elements <b>hierarchically</b> rather than in sequence. In a linear structure the next element is always fixed (next index, next link, next pop, next dequeue); in a <b>non-linear</b> structure there can be <b>several paths</b> onward from an element. Trees are the first non-linear structure of Module 3.</div>\n  <div class=\"scroller\"><table><thead><tr><th>Term</th><th>Meaning in the lecture</th></tr></thead><tbody>\n   <tr><td><strong>Node</strong></td><td>Each unit or element of the tree</td></tr>\n   <tr><td><strong>Root node</strong></td><td>The first element, drawn at the top. It has no parent</td></tr>\n   <tr><td><strong>Parent / child</strong></td><td>A node hanging below another is its <strong>child</strong>; the node above is its <strong>parent</strong>. A parent can have many children</td></tr>\n   <tr><td><strong>Leaf</strong></td><td>A node with <strong>no children</strong> — the end of any pathway, at whatever level it sits</td></tr>\n   <tr><td><strong>Edge</strong></td><td>The line connecting a parent to a child. Not \"the end of something\" — the end nodes are leaves</td></tr>\n   <tr><td><strong>Subtree</strong></td><td>Any section that hangs below a node. Zoom in on a big branch of a real tree and it looks like a small tree</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>The one rule that makes it a tree.</b> A node can have many children, but <strong>a child can have only one parent</strong>. Draw two parents joined to the same child and it is no longer a tree — that structure is a <strong>graph</strong> (Lecture 15).</div>\n  <h4>Why the tree is drawn upside down</h4>\n  <p style=\"font-size:14.5px\">He linked it to the inverted tree of the Bhagavad Gita: the roots at the top are the source, and the branches below are what grows from it. In memory there is no \"top\" or \"bottom\" — only memory cells; up and down are how we draw it.</p>\n  <h4>His family-tree exercise</h4>\n  <p style=\"font-size:14.5px\">Grandfather (<strong>GF</strong>) is the root with three children: sons <strong>SA</strong> and <strong>SB</strong> and a daughter <strong>D</strong>. SA has a daughter <strong>D1</strong>; D has two sons <strong>S1</strong> and <strong>S2</strong>; SB has no children. Leaves: <strong>D1, SB, S1, S2</strong> — SB is a leaf one level higher than the others, simply because nothing hangs below him.</p>\n  <h4>Where simple trees are used</h4>\n  <ul style=\"font-size:14.5px\">\n   <li><strong>Folder structure</strong> — BS program → Semester 1…8 → six courses → Presentations, Assignments. A subfolder belongs to only one folder</li>\n   <li><strong>Corporate hierarchy</strong> — CEO → managers → team leaders → workers</li>\n   <li><strong>Library classification</strong> — language → genre → sub-genre → author → title</li>\n   <li><strong>Biological classification</strong> — animal → vertebrate → mammal → dog</li>\n   <li><strong>Family tree</strong> — only if you follow <strong>one side</strong> (e.g. the father's side, as in many patrilineal societies); both sides would give a child two parents</li>\n  </ul>\n  <h4>Live Lecture 4 additions</h4>\n  <div class=\"def\"><b>From the lecture (L#18):</b> asked in the chat, he confirmed that <b>trees and graphs were not in Quiz 1</b> — that quiz covered algorithms and linear data structures up to stacks and queues, as MCQs with one correct answer. Module 3 (trees, graphs, hashing) is new material for later assessments.</div>\n  <p style=\"font-size:14.5px\"><strong>Linear vs non-linear, as a life choice.</strong> Taking one person's advice and following it step by step is linear: one path. Comparing at every stage — online or offline, which institute, BS in Management and Technology or BS in AI and Data Science — is non-linear: several options at each node, and you pick one.</p>\n  <p style=\"font-size:14.5px\"><strong>Biology as a near-perfect tree.</strong> Classification runs kingdom → phylum → class → order → family → genus → species, and each species sits under one group. It follows genetic and evolutionary properties rather than everyday habit: a tomato is cooked as a vegetable but is biologically a fruit, and a penguin is a bird even though it does not fly.</p><h4>From the L#18 slides</h4><p style=\"font-size:14.5px\">The deck starts from a family: you could store every relative in an <strong>array</strong>, but an array only lists them. It cannot show who depends on whom. A tree keeps the same people and adds that <strong>hierarchy</strong>. The use-case slide words two of the L#12 examples a little differently: folders as Semester 1 → Algorithmic Thinking → Presentations, and book classification as genre → author → book title.</p>"
    },
    {
     "t": "Depth and height",
     "src": "L#12 · L#18",
     "h": "\n  <div class=\"def\"><b>Depth (d)</b> of a node = the number of <b>edges</b> between it and the root — \"how many jumps\", one edge at a time. The root has <b>d = 0</b>. <b>Every node has its own depth.</b></div>\n  <div class=\"def\"><b>Height (h)</b> of a tree = the <b>maximum depth</b> in the tree = how far the root is from its <b>deepest leaf</b>, counted in edges. It is <b>one number for the whole tree</b>.</div>\n  <div class=\"scroller\"><table><thead><tr><th>Family tree (Lecture 12)</th><th>Depth</th><th>Why</th></tr></thead><tbody>\n   <tr><td><strong>GF</strong></td><td style=\"font-family:var(--mono)\">0</td><td>It is the root — no jump needed</td></tr>\n   <tr><td><strong>SA, SB, D</strong></td><td style=\"font-family:var(--mono)\">1</td><td>One edge up to GF</td></tr>\n   <tr><td><strong>D1, S1, S2</strong></td><td style=\"font-family:var(--mono)\">2</td><td>Two edges up to GF</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">So this tree has <strong>h = 2</strong>. In his extended version of the exercise he added three more family members (O1, O2, P1) one level further down, each three edges from the root — so the extended tree has <strong>h = 3</strong>.</p>\n  <div class=\"warnbox\"><b>Count edges, not nodes.</b> A path GF → D → S1 touches three nodes but crosses <strong>two</strong> edges, so S1 has d = 2. Depth belongs to a node; height belongs to the tree.</div><!--viz:atb-family-depth--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Family tree with GF as root, SA, SB and D at depth 1, D1, S1 and S2 at depth 2. The four leaves are highlighted, including SB at depth 1. Height is 2.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Depth per node, height per tree</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 250\" role=\"img\" aria-label=\"Family tree: GF at depth 0; SA, SB and D at depth 1; D1, S1 and S2 at depth 2. Leaves D1, SB, S1, S2 are highlighted. Height is 2.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M180,40 L60,115\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M180,40 L180,115\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M180,40 L300,115\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M60,115 L60,190\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M300,115 L260,190\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M300,115 L340,190\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><circle cx=\"180\" cy=\"40\" r=\"17\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"180\" y=\"44.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">GF</text><circle cx=\"60\" cy=\"115\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"60\" y=\"119.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">SA</text><circle cx=\"180\" cy=\"115\" r=\"17\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"180\" y=\"119.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">SB</text><circle cx=\"300\" cy=\"115\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"300\" y=\"119.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">D</text><circle cx=\"60\" cy=\"190\" r=\"17\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"60\" y=\"194.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">D1</text><circle cx=\"260\" cy=\"190\" r=\"17\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"260\" y=\"194.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">S1</text><circle cx=\"340\" cy=\"190\" r=\"17\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"340\" y=\"194.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">S2</text><text x=\"430\" y=\"45\" text-anchor=\"end\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">d = 0</text><text x=\"430\" y=\"120\" text-anchor=\"end\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">d = 1</text><text x=\"430\" y=\"195\" text-anchor=\"end\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">d = 2</text><text x=\"220\" y=\"236\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">height h = 2: deepest leaves are 2 edges from the root</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">SB is a leaf at depth 1: a leaf is any node with no children, at any level.</figcaption></figure><!--/viz:atb-family-depth-->\n  <h4>Correction in Live Lecture 4</h4>\n  <p style=\"font-size:14.5px\">He corrected a slide from the recorded lecture on the spot. The definitions to use: <strong>depth</strong> = edges from the root to a node; <strong>height</strong> = the maximum depth, i.e. how far the <strong>root</strong> is from its <strong>deepest leaf</strong>. His example tree had leaves at d = 3, so h = 3.</p><h4>Subtrees on the L#18 slide</h4><p style=\"font-size:14.5px\">The slide defines a <strong>subtree</strong> as a section that hangs from another node, meaning a child together with everything below it. Its diagram draws a box around each of the root's two subtrees. The left one goes down to <strong>d = 3</strong>; the right one stops at <strong>d = 2</strong>. So the leaves sit at two different depths, and the height comes from the deepest one: <strong>h = 3</strong>. The subtree that reaches lowest sets the height of the whole tree.</p><!--viz:atb-subtree-height--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Tree with root A. Child B heads subtree 1: B has children D and E, and E has child F at depth 3. Child C heads subtree 2: C has one child G at depth 2. Height is 3.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Each child of the root heads a subtree</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 294\" role=\"img\" aria-label=\"Tree with root A. Child B heads subtree 1: B has children D and E, and E has child F at depth 3. Child C heads subtree 2: C has one child G at depth 2. Height is 3.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"28\" y=\"74\" width=\"170\" height=\"186\" rx=\"6\" style=\"fill:none;stroke:var(--blue);stroke-width:1.5;stroke-dasharray:5 4\"/><rect x=\"258\" y=\"74\" width=\"84\" height=\"134\" rx=\"6\" style=\"fill:none;stroke:var(--clay);stroke-width:1.5;stroke-dasharray:5 4\"/><path d=\"M200,36 L110,100\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><path d=\"M200,36 L300,100\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M110,100 L60,164\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M110,100 L160,164\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><path d=\"M160,164 L160,228\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><path d=\"M300,100 L300,164\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><circle cx=\"200\" cy=\"36\" r=\"16\" style=\"fill:var(--surface-2);stroke:var(--ink-3);stroke-width:1.5\"/><text x=\"200\" y=\"41\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A</text><circle cx=\"110\" cy=\"100\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"110\" y=\"105\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">B</text><circle cx=\"300\" cy=\"100\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"300\" y=\"105\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">C</text><circle cx=\"60\" cy=\"164\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"60\" y=\"169\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">D</text><circle cx=\"160\" cy=\"164\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"160\" y=\"169\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">E</text><circle cx=\"300\" cy=\"164\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"300\" y=\"169\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">G</text><circle cx=\"160\" cy=\"228\" r=\"16\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"160\" y=\"233\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">F</text><text x=\"432\" y=\"41\" text-anchor=\"end\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">d = 0</text><text x=\"432\" y=\"105\" text-anchor=\"end\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">d = 1</text><text x=\"432\" y=\"169\" text-anchor=\"end\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">d = 2</text><text x=\"432\" y=\"233\" text-anchor=\"end\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">d = 3</text><text x=\"40\" y=\"252\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">Subtree 1</text><text x=\"300\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">Subtree 2</text><text x=\"220\" y=\"282\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">h = 3: the deepest leaf, F, sits in subtree 1</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Leaves can sit at different depths; the height comes from whichever subtree reaches lowest.</figcaption></figure><!--/viz:atb-subtree-height-->"
    },
    {
     "t": "Tree traversals",
     "src": "L#12 · L#18",
     "h": "\n  <div class=\"def\"><b>Tree traversal</b> = reading or visiting every node of the tree. Because a tree is non-linear — from A, do you go to B or to C first? — there are several valid algorithms.</div>\n  <h4>Depth-first: the root's position names the order</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Traversal</th><th>Rule at every node</th><th>Tree A → (B → D, E), C</th></tr></thead><tbody>\n   <tr><td><strong>Pre-order</strong></td><td><strong>Root</strong>, left, right</td><td style=\"font-family:var(--mono)\">A B D E C</td></tr>\n   <tr><td><strong>In-order</strong></td><td>Left, <strong>root</strong>, right</td><td style=\"font-family:var(--mono)\">D B E A C</td></tr>\n   <tr><td><strong>Post-order</strong></td><td>Left, right, <strong>root</strong></td><td style=\"font-family:var(--mono)\">D E B C A</td></tr>\n  </tbody></table></div>\n  <div class=\"def\">His two rules: in every traversal <b>left always comes before right</b>; only the <b>position of the root</b> changes. All three are <b>depth-first</b>: you follow the rule down to the farthest leaf before coming back up, applying it again at every subtree.</div>\n  <h4>Breadth-first: level-order</h4>\n  <p style=\"font-size:14.5px\">Start at the root's level, then the next level, then the next — <strong>top to bottom</strong>, and <strong>left to right</strong> within a level. For the same tree: <span style=\"font-family:var(--mono)\">A B C D E</span>. The order comes from the positions, not from the letters — the labels could be any data.</p>\n  <h4>The exercise with a catch</h4>\n  <p style=\"font-size:14.5px\">Tree: A has three children P, Q, R; P has one child X; R has children Y and Z. He warned that one of the four answers \"is not clear\":</p>\n  <ul style=\"font-size:14.5px\">\n   <li><strong>Pre-order:</strong> <span style=\"font-family:var(--mono)\">A P X Q R Y Z</span></li>\n   <li><strong>Post-order:</strong> <span style=\"font-family:var(--mono)\">X P Q Y Z R A</span></li>\n   <li><strong>Level-order:</strong> <span style=\"font-family:var(--mono)\">A P Q R X Y Z</span></li>\n   <li><strong>In-order: cannot be defined.</strong> Q is right of P but left of R, and a tree has no \"middle\" — so the algorithm cannot decide where Q, and therefore the root A, goes. In-order is clear only when every node has <strong>at most two children</strong></li>\n  </ul>\n  <p style=\"font-size:14.5px\">A node with a <strong>single child</strong> (P → X) treats it as the <strong>left</strong> child by convention.</p><!--viz:atb-three-child-traversal--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Tree A with children P, Q, R, then X under P and Y, Z under R, followed by a table: pre-order A P X Q R Y Z, in-order not defined, post-order X P Q Y Z R A, level-order A P Q R X Y Z.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Four traversals of one tree — and the one that fails</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 236\" role=\"img\" aria-label=\"Tree with root A and three children P, Q, R; P has child X; R has children Y and Z.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M220,36 L100,106\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M220,36 L220,106\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M220,36 L340,106\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M100,106 L100,176\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M340,106 L300,176\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M340,106 L380,176\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><circle cx=\"220\" cy=\"36\" r=\"17\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"220\" y=\"41\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A</text><circle cx=\"100\" cy=\"106\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"100\" y=\"111\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">P</text><circle cx=\"220\" cy=\"106\" r=\"17\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"220\" y=\"111\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Q</text><circle cx=\"340\" cy=\"106\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"340\" y=\"111\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">R</text><circle cx=\"100\" cy=\"176\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"100\" y=\"181\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">X</text><circle cx=\"300\" cy=\"176\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"300\" y=\"181\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Y</text><circle cx=\"380\" cy=\"176\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"380\" y=\"181\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Z</text><text x=\"220\" y=\"222\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">Q is right of P but left of R: no middle slot for A</text></svg></div><div class=\"scroller\"><table><thead><tr><th>Traversal</th><th>Rule</th><th>Visits</th></tr></thead><tbody><tr><td>Pre-order</td><td>root, left, right</td><td style=\"font-family:var(--mono)\">A P X Q R Y Z</td></tr><tr><td>In-order</td><td>left, root, right</td><td style=\"font-family:var(--mono);background:var(--bad-soft)\">not defined: A has three children</td></tr><tr><td>Post-order</td><td>left, right, root</td><td style=\"font-family:var(--mono)\">X P Q Y Z R A</td></tr><tr><td>Level-order</td><td>level by level, left to right</td><td style=\"font-family:var(--mono)\">A P Q R X Y Z</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Pre, post and level order work for any tree; in-order needs at most two children per node.</figcaption></figure><!--/viz:atb-three-child-traversal--><h4>The L#18 slides' warm-up tree</h4><p style=\"font-size:14.5px\">Before the five-node tree, the slides start with the smallest case: A with left child B and right child C. That gives pre-order <span style=\"font-family:var(--mono)\">A B C</span>, in-order <span style=\"font-family:var(--mono)\">B A C</span> and post-order <span style=\"font-family:var(--mono)\">B C A</span>. Level-order is also <span style=\"font-family:var(--mono)\">A B C</span> here. On a tree this small, pre-order and level-order look identical. You need a deeper tree to tell them apart: on the five-node tree they give <span style=\"font-family:var(--mono)\">A B D E C</span> and <span style=\"font-family:var(--mono)\">A B C D E</span>.</p>"
    },
    {
     "t": "Six types of tree",
     "src": "L#14",
     "h": "\n  <p style=\"font-size:14.5px\">Most tree types evolved to meet computer-science needs. He covered six, each a narrower version of the one before it, and said these are <strong>sufficient for this course</strong>.</p>\n  <div class=\"scroller\"><table><thead><tr><th>Type</th><th>Children per node</th><th>Do the values matter?</th><th>Applications he named</th></tr></thead><tbody>\n   <tr><td><strong>General tree</strong></td><td>Any number — no minimum, no maximum</td><td>No</td><td>Folder structure · one-side family tree · organisation structure · biological taxonomy</td></tr>\n   <tr><td><strong>Binary tree</strong></td><td><strong>At most two</strong>: 0, 1 or 2</td><td>No</td><td><strong>Knockout tournaments</strong> (World Cup quarter-finals → semis → final) · yes/no <strong>decision trees and flowcharts</strong> (the tea and ATM examples)</td></tr>\n   <tr><td><strong>Complete binary tree</strong></td><td>Exactly two on every level <strong>except the last</strong>; the last level is filled <strong>left to right</strong></td><td>No — structure only</td><td>The shape a heap must have</td></tr>\n   <tr><td><strong>Binary search tree (BST)</strong></td><td>At most two</td><td><strong>Yes</strong>: left subtree &lt; parent &lt; right subtree</td><td>Dictionary search · database look-ups such as student IDs</td></tr>\n   <tr><td><strong>AVL tree</strong></td><td>At most two</td><td>Yes (it is a BST)</td><td>In-memory indexing in databases · library catalogues</td></tr>\n   <tr><td><strong>Heap</strong></td><td>Complete binary tree</td><td>Yes, parent against children only</td><td><strong>Priority queues</strong></td></tr>\n  </tbody></table></div>\n  <h4>Binary: \"at most\" two</h4>\n  <p style=\"font-size:14.5px\">The maximum is fixed, the minimum is not. Remove a leaf and it is still binary; give any node a third child and it stops being binary. Even a flowchart with <strong>no decision at all</strong> (a single path) is a binary tree, because one child is within \"at most two\". A decision with <strong>three</strong> possible outcomes is not.</p>\n  <h4>Complete binary tree: full, then left to right</h4>\n  <p style=\"font-size:14.5px\">Every node above the last level has <strong>exactly two</strong> children. On the last level gaps are allowed only on the <strong>right</strong>: a node with one child must have its <strong>left</strong> child, and all left positions are filled before any to their right. Add a right child somewhere while a left position before it is empty, and it is no longer complete.</p>\n  <div class=\"def\"><b>From the lecture (L#14):</b> his \"which tree is this?\" exercises ask for the <b>most specific</b> category. Every tree is a general tree, so \"general tree\" is only right when a node has three or more children; a full-shaped binary tree should be called a <b>complete binary tree</b>.</div><!--viz:atb-tree-type-picker--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Decision list: more than two children means general tree; otherwise binary, then complete binary if full except a left-filled last level, BST if left smaller and right larger, AVL if also balanced, heap if complete with parent at least (or at most) its children.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Naming a tree: the most specific category</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px;margin-bottom:8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Does any node have <b>more than two</b> children?</div><span style=\"color:var(--ink-3)\">yes →</span><div style=\"padding:7px 11px;border:1px solid var(--clay);border-radius:4px;background:var(--clay-soft)\"><b>General tree</b></div></div><p style=\"font-size:13px;color:var(--ink-3);margin:0 0 8px\">no → it is a <b>binary tree</b>; keep narrowing</p><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px;margin-bottom:8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Full on every level except the last, last level filled <b>left to right</b>?</div><span style=\"color:var(--ink-3)\">yes →</span><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><b>Complete binary tree</b></div></div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px;margin-bottom:8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Left subtree <b>&lt;</b> node <b>&lt;</b> right subtree, at every node?</div><span style=\"color:var(--ink-3)\">yes →</span><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><b>BST</b></div></div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px;margin-bottom:8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">A BST whose subtrees differ in height by <b>at most 1</b> at every node?</div><span style=\"color:var(--ink-3)\">yes →</span><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><b>AVL tree</b></div></div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px;margin-bottom:8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Complete, and every parent <b>≥</b> (or <b>≤</b>) its children?</div><span style=\"color:var(--ink-3)\">yes →</span><div style=\"padding:7px 11px;border:1px solid var(--good);border-radius:4px;background:var(--good-soft)\"><b>Max (min) heap</b></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Shape questions (children, completeness) and value questions (BST, heap) are separate tests.</figcaption></figure><!--/viz:atb-tree-type-picker-->"
    },
    {
     "t": "Binary search trees and AVL balancing",
     "src": "L#14",
     "h": "\n  <div class=\"def\">A <b>binary search tree (BST)</b> is a binary tree in which every value in a node's <b>left subtree is smaller</b> than the node and every value in its <b>right subtree is larger</b> — at the root and at every subtree.</div>\n  <p style=\"font-size:14.5px\">His example: 50 at the root, 30 (with 20 and 40) on the left, 70 (with 60 and 80) on the right. Check the rule at 50, then again at 30 and at 70.</p>\n  <h4>Where the smallest and largest values are</h4>\n  <ul style=\"font-size:14.5px\">\n   <li><strong>Minimum:</strong> keep going <strong>left</strong> from the root until there is no left child</li>\n   <li><strong>Maximum:</strong> keep going <strong>right</strong> until there is no right child. If that node has only a <em>left</em> child, stop there — going left would only find smaller values (remove 80 from his tree and the maximum is 70)</li>\n  </ul>\n  <h4>Why it is fast, and where it is used</h4>\n  <p style=\"font-size:14.5px\">Each comparison sends you left or right, so the whole other subtree is skipped. A paper <strong>dictionary</strong> works the same way: open near L, land on M, flip back, land on K, flip forward. Databases use the idea for <strong>student IDs</strong> that follow a template (B26 + department code + serial number) instead of scanning records one by one.</p>\n  <div class=\"warnbox\"><b>The weakness: sorted input.</b> Roll numbers 001, 002, 003… each go to the right of the last one, so the tree becomes a long chain — <strong>increasing order leans right, decreasing order leans left</strong>. The tree is <strong>unbalanced</strong> and searching becomes sequential, like a linked list or array.</div>\n  <h4>AVL trees: self-balancing BSTs</h4>\n  <div class=\"def\">An <b>AVL tree</b> is a BST that keeps itself balanced: for <b>every node</b>, the heights of its left and right subtrees may differ by <b>at most one</b>. When an insertion breaks this, the tree performs a <b>rotation</b>.</div>\n  <p style=\"font-size:14.5px\">His picture of a rotation: balls on a string hanging from a nail. Hang the string from the middle ball instead, and the first ball drops down to one side. In the tree, the <strong>middle node is pulled up</strong> and its neighbours rearranged, without breaking the BST rule. With the same increasing values 20, 30, 50, 70, 80 that made a chain, the AVL tree rotates twice and ends with 30 at the root, 20 on the left, and 70 (holding 50 and 80) on the right — fewer hops for every search.</p>\n  <p style=\"font-size:14.5px\"><strong>Uses:</strong> <strong>in-memory indexing</strong> in databases, and <strong>library catalogues</strong>, where a new sub-discipline (computer science → IT → AI…) gets a number slotted between existing ones instead of reorganising the whole catalogue. The name comes from its inventors; he said you do not need to know them.</p><!--viz:atb-avl-rotation--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Comparison of a chain-shaped plain BST and a balanced AVL tree built from 20, 30, 50, 70, 80, with a table of the two rotations: 30 pulled up after inserting 50, and 70 pulled up after inserting 80.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Same increasing values: plain BST vs AVL</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 250\" role=\"img\" aria-label=\"Left: the values 20, 30, 50, 70, 80 inserted into a plain BST form a chain leaning right. Right: the same values in an AVL tree, with 30 at the root, 20 left, 70 right holding 50 and 80.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M30,32 L72,72\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M72,72 L114,112\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M114,112 L156,152\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M156,152 L198,192\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><circle cx=\"30\" cy=\"32\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"30\" y=\"36.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">20</text><circle cx=\"72\" cy=\"72\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"72\" y=\"76.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">30</text><circle cx=\"114\" cy=\"112\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"114\" y=\"116.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">50</text><circle cx=\"156\" cy=\"152\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"156\" y=\"156.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">70</text><circle cx=\"198\" cy=\"192\" r=\"16\" style=\"fill:var(--bad-soft);stroke:var(--bad);stroke-width:1.5\"/><text x=\"198\" y=\"196.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">80</text><path d=\"M318,52 L268,120\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M318,52 L368,120\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M368,120 L326,188\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M368,120 L410,188\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><circle cx=\"318\" cy=\"52\" r=\"16\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"318\" y=\"56.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">30</text><circle cx=\"268\" cy=\"120\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"268\" y=\"124.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">20</text><circle cx=\"368\" cy=\"120\" r=\"16\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"368\" y=\"124.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">70</text><circle cx=\"326\" cy=\"188\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"326\" y=\"192.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">50</text><circle cx=\"410\" cy=\"188\" r=\"16\" style=\"fill:var(--good-soft);stroke:var(--good);stroke-width:1.5\"/><text x=\"410\" y=\"192.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">80</text><text x=\"112\" y=\"236\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">plain BST: 80 is 4 edges down</text><text x=\"336\" y=\"236\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">AVL: 80 is 2 edges down</text></svg></div><div class=\"scroller\"><table><thead><tr><th>Insert</th><th>What happens</th><th>Tree after</th></tr></thead><tbody><tr><td style=\"font-family:var(--mono)\">20</td><td>first node</td><td style=\"font-family:var(--mono)\">20</td></tr><tr><td style=\"font-family:var(--mono)\">30</td><td>goes right; sides differ by 1</td><td style=\"font-family:var(--mono)\">20 (–, 30)</td></tr><tr><td style=\"font-family:var(--mono)\">50</td><td style=\"background:var(--bad-soft)\">right side 2 deeper → pull 30 up</td><td style=\"font-family:var(--mono)\">30 (20, 50)</td></tr><tr><td style=\"font-family:var(--mono)\">70</td><td>goes right of 50; differ by 1</td><td style=\"font-family:var(--mono)\">30 (20, 50 (–, 70))</td></tr><tr><td style=\"font-family:var(--mono)\">80</td><td style=\"background:var(--bad-soft)\">unbalanced at 50 → pull 70 up</td><td style=\"font-family:var(--mono)\">30 (20, 70 (50, 80))</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Each rotation lifts the middle of three nodes in a row; the BST order is never broken.</figcaption></figure><!--/viz:atb-avl-rotation-->"
    },
    {
     "t": "Heaps and priority queues",
     "src": "L#14",
     "h": "\n  <div class=\"def\">A <b>heap</b> is a <b>complete binary tree</b> with an ordering rule between each <b>parent and its children</b>. It is <b>not</b> a binary search tree: nothing requires left to be smaller than right.</div>\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Max heap</th><th>Min heap</th></tr></thead><tbody>\n   <tr><td><strong>Rule at every node</strong></td><td>Parent <strong>≥</strong> each child</td><td>Parent <strong>≤</strong> each child</td></tr>\n   <tr><td><strong>Root holds</strong></td><td>The largest value</td><td>The smallest value</td></tr>\n   <tr><td><strong>Equal values</strong></td><td>Allowed (≥)</td><td>Allowed (≤): his min heap had a 25 under a 25</td></tr>\n   <tr><td><strong>Priority queue use</strong></td><td>Higher number = served first</td><td>Priority 1 served before 2, then 3…</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">On every insertion the values are rearranged so the tree stays complete and the heap rule holds — just as an AVL tree rearranges itself to stay balanced.</p>\n  <h4>Back to priority queues (Lecture 11)</h4>\n  <p style=\"font-size:14.5px\">The priority queue from Module 2 — the accident victim seen before the patient with a headache, system tasks before your music or game — is <strong>typically implemented with a heap</strong>.</p>\n  <h4>His BST-or-heap exercise</h4>\n  <ul style=\"font-size:14.5px\">\n   <li><strong>65 → 60 (55, 63), 70 (67, 75)</strong> is a <strong>BST</strong>: at every node, left is smaller and right is larger</li>\n   <li><strong>65 → 60 (45, 53), 55 (49, 52)</strong> is a <strong>max heap</strong>: every parent is larger than its children, even though the right child 55 is smaller than the left child 60</li>\n  </ul><!--viz:atb-bst-vs-heap--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Left tree is a BST rooted at 65 with children 60 and 70; right tree is a max heap rooted at 65 with children 60 and 55, whose right child is smaller than its left.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">BST or heap? Same shape, different rule</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 240\" role=\"img\" aria-label=\"Two complete binary trees. Left, a BST: 65 with 60 (55, 63) and 70 (67, 75). Right, a max heap: 65 with 60 (45, 53) and 55 (49, 52).\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M108,44 L56,110\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M108,44 L160,110\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M56,110 L30,178\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M56,110 L82,178\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M160,110 L134,178\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M160,110 L186,178\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><circle cx=\"108\" cy=\"44\" r=\"17\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"108\" y=\"49\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">65</text><circle cx=\"56\" cy=\"110\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"56\" y=\"115\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">60</text><circle cx=\"160\" cy=\"110\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"160\" y=\"115\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">70</text><circle cx=\"30\" cy=\"178\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"30\" y=\"183\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">55</text><circle cx=\"82\" cy=\"178\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"82\" y=\"183\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">63</text><circle cx=\"134\" cy=\"178\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"134\" y=\"183\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">67</text><circle cx=\"186\" cy=\"178\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"186\" y=\"183\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">75</text><path d=\"M332,44 L280,110\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M332,44 L384,110\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M280,110 L254,178\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M280,110 L306,178\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M384,110 L358,178\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M384,110 L410,178\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><circle cx=\"332\" cy=\"44\" r=\"17\" style=\"fill:var(--good-soft);stroke:var(--good);stroke-width:1.5\"/><text x=\"332\" y=\"49\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">65</text><circle cx=\"280\" cy=\"110\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"280\" y=\"115\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">60</text><circle cx=\"384\" cy=\"110\" r=\"17\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"384\" y=\"115\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">55</text><circle cx=\"254\" cy=\"178\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"254\" y=\"183\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">45</text><circle cx=\"306\" cy=\"178\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"306\" y=\"183\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">53</text><circle cx=\"358\" cy=\"178\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"358\" y=\"183\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">49</text><circle cx=\"410\" cy=\"178\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"410\" y=\"183\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">52</text><text x=\"108\" y=\"226\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">BST: left &lt; parent &lt; right</text><text x=\"332\" y=\"226\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">max heap: parent ≥ children</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">A heap only compares parent with child, so its right child (55) may be smaller than its left (60).</figcaption></figure><!--/viz:atb-bst-vs-heap-->"
    },
    {
     "t": "Textbook: Tree Data Structures",
     "src": "Codeless DSA ch3",
     "h": "<p>Where earlier structures line data up in sequence, a tree arranges it in a hierarchy: a single root at the top, parents linked to children by edges, and leaves at the bottom with no children. The chapter's workhorse is the binary search tree, which keeps keys in sorted order — smaller keys to the left, larger to the right — so adding, deleting and finding keys is efficient as long as the tree stays balanced. Self-balancing variants (AVL and red-black trees) fix lopsided trees automatically through rotations; B-trees let a parent have many children and underpin databases and file systems; heaps give instant access to the largest or smallest item and are the usual engine behind priority queues. For a manager, trees are how org charts, product catalogues, folder systems and database indexes stay searchable at scale.</p><!--viz:atb-tree-anatomy--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Binary search tree: root 45; 20 is its left child and the parent of 10 and 30; 60 is its right child with left child 55. The leaves 10, 30 and 55 have no children.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Parts of a tree, on a small BST</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 226\" role=\"img\" aria-label=\"Binary search tree built from 45, 20, 60, 10, 30, 55: root 45, children 20 and 60, 20 has children 10 and 30, 60 has left child 55. Root, parent, child, edge and leaf are labelled.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<path d=\"M204.8,49.7 L135.2,94.3\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M235.2,49.7 L304.8,94.3\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M109.1,118.3 L80.9,155.7\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M130.9,118.3 L159.1,155.7\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M309.1,118.3 L280.9,155.7\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<circle cx=\"220\" cy=\"40\" r=\"18\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"220\" y=\"45\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700;font-family:var(--mono)\">45</text>\n<circle cx=\"120\" cy=\"104\" r=\"18\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"120\" y=\"109\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700;font-family:var(--mono)\">20</text>\n<circle cx=\"320\" cy=\"104\" r=\"18\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"320\" y=\"109\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700;font-family:var(--mono)\">60</text>\n<circle cx=\"70\" cy=\"170\" r=\"18\" style=\"fill:var(--good-soft);stroke:var(--good);stroke-width:1.5\"/>\n<text x=\"70\" y=\"175\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700;font-family:var(--mono)\">10</text>\n<circle cx=\"170\" cy=\"170\" r=\"18\" style=\"fill:var(--good-soft);stroke:var(--good);stroke-width:1.5\"/>\n<text x=\"170\" y=\"175\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700;font-family:var(--mono)\">30</text>\n<circle cx=\"270\" cy=\"170\" r=\"18\" style=\"fill:var(--good-soft);stroke:var(--good);stroke-width:1.5\"/>\n<text x=\"270\" y=\"175\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700;font-family:var(--mono)\">55</text>\n<text x=\"250\" y=\"45\" style=\"fill:var(--blue);font-size:14px;font-weight:700\">root</text>\n<text x=\"92\" y=\"100\" text-anchor=\"end\" style=\"fill:var(--ink-2);font-size:13px\">parent</text>\n<text x=\"92\" y=\"118\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">of 10, 30</text>\n<text x=\"296\" y=\"64\" style=\"fill:var(--ink-3);font-size:13px\">edge</text>\n<text x=\"350\" y=\"107\" style=\"fill:var(--ink-2);font-size:13px\">right child</text>\n<text x=\"350\" y=\"125\" style=\"fill:var(--ink-3);font-size:13px\">of 45</text>\n<text x=\"70\" y=\"210\" text-anchor=\"middle\" style=\"fill:var(--good);font-size:13px;font-weight:700\">leaf</text>\n<text x=\"170\" y=\"210\" text-anchor=\"middle\" style=\"fill:var(--good);font-size:13px;font-weight:700\">leaf</text>\n<text x=\"270\" y=\"210\" text-anchor=\"middle\" style=\"fill:var(--good);font-size:13px;font-weight:700\">leaf</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Smaller keys hang left, larger right; every node has exactly one parent except the root, which has none.</figcaption></figure><!--/viz:atb-tree-anatomy--><!--viz:atb-bst-skew--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Left: keys inserted in sorted order make a chain of five nodes leaning right, so finding 60 takes five comparisons. Right: inserting 36, 24, 48, 12, 60 makes a tree three levels deep, so 60 takes three.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Same keys, different insert order</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 216\" role=\"img\" aria-label=\"Two binary search trees of the same five keys. Inserted in sorted order 12, 24, 36, 48, 60 they form a five-level chain; inserted as 36, 24, 48, 12, 60 they form a three-level tree.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<path d=\"M52.3,37.7 L65.7,50.3\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M90.3,73.7 L103.7,86.3\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M128.3,109.7 L141.7,122.3\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M166.3,145.7 L179.7,158.3\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<circle cx=\"40\" cy=\"26\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"40\" y=\"31\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">12</text>\n<circle cx=\"78\" cy=\"62\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"78\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">24</text>\n<circle cx=\"116\" cy=\"98\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"116\" y=\"103\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">36</text>\n<circle cx=\"154\" cy=\"134\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"154\" y=\"139\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">48</text>\n<circle cx=\"192\" cy=\"170\" r=\"17\" style=\"fill:var(--bad-soft);stroke:var(--bad);stroke-width:1.5\"/>\n<text x=\"192\" y=\"175\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">60</text>\n<path d=\"M319.1,39.1 L290.9,72.9\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M340.9,39.1 L369.1,72.9\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M272.4,101.2 L257.6,130.8\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M387.6,101.2 L402.4,130.8\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<circle cx=\"330\" cy=\"26\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"330\" y=\"31\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">36</text>\n<circle cx=\"280\" cy=\"86\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"280\" y=\"91\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">24</text>\n<circle cx=\"380\" cy=\"86\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"380\" y=\"91\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">48</text>\n<circle cx=\"250\" cy=\"146\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"250\" y=\"151\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">12</text>\n<circle cx=\"410\" cy=\"146\" r=\"17\" style=\"fill:var(--good-soft);stroke:var(--good);stroke-width:1.5\"/>\n<text x=\"410\" y=\"151\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">60</text>\n<text x=\"110\" y=\"206\" text-anchor=\"middle\" style=\"fill:var(--bad);font-size:13px;font-weight:700\">sorted: 5 looks for 60</text>\n<text x=\"330\" y=\"206\" text-anchor=\"middle\" style=\"fill:var(--good);font-size:13px;font-weight:700\">mixed: 3 looks for 60</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Sorted input turns a BST into a linked list; self-balancing trees (AVL, red-black) rotate nodes to keep the height near log₂ n.</figcaption></figure><!--/viz:atb-bst-skew--><!--viz:atb-tree-traversals--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table of four traversal orders on the BST with root 45: pre-order 45 20 10 30 60 55; in-order 10 20 30 45 55 60; post-order 10 30 20 55 60 45; level-order 45 20 60 10 30 55.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Four ways to traverse the same tree</div><div class=\"scroller\"><table><thead><tr><th>Order</th><th>Rule at every node</th><th>Visits (tree above: 45, 20, 60, 10, 30, 55)</th></tr></thead><tbody><tr><td>Pre-order</td><td>node, then left, then right</td><td style=\"font-family:var(--mono)\"><span style=\"font-family:var(--mono)\">45 20 10 30 60 55</span></td></tr><tr><td style=\"background:var(--blue-soft)\">In-order</td><td>left, then node, then right</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">10 20 30 45 55 60</span></td></tr><tr><td>Post-order</td><td>left, then right, then node</td><td style=\"font-family:var(--mono)\"><span style=\"font-family:var(--mono)\">10 30 20 55 60 45</span></td></tr><tr><td>Level-order</td><td>top level first, left to right</td><td style=\"font-family:var(--mono)\"><span style=\"font-family:var(--mono)\">45 20 60 10 30 55</span></td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">In-order on a BST always comes out sorted (highlighted): a quick check that a tree really is a BST.</figcaption></figure><!--/viz:atb-tree-traversals--><!--viz:atb-heaps--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Max heap: 90 at the root, children 70 and 80, then 30, 50 under 70 and 60 under 80; every parent is at least as large as its children. Min heap of the same values: 30 at the root, 50 and 60, then 70, 80 and 90; every parent is no larger than its children.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Max heap and min heap</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 196\" role=\"img\" aria-label=\"Two heaps of the same six values. Max heap: 90 at the root with children 70 and 80. Min heap: 30 at the root with children 50 and 60.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<path d=\"M98.7,42.7 L71.3,73.3\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M121.3,42.7 L148.7,73.3\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M53.1,101.5 L41.9,126.5\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M66.9,101.5 L78.1,126.5\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M153.1,101.5 L141.9,126.5\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<circle cx=\"110\" cy=\"30\" r=\"17\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"110\" y=\"35\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">90</text>\n<circle cx=\"60\" cy=\"86\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"60\" y=\"91\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">70</text>\n<circle cx=\"160\" cy=\"86\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"160\" y=\"91\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">80</text>\n<circle cx=\"35\" cy=\"142\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"35\" y=\"147\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">30</text>\n<circle cx=\"85\" cy=\"142\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"85\" y=\"147\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">50</text>\n<circle cx=\"135\" cy=\"142\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"135\" y=\"147\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">60</text>\n<path d=\"M318.7,42.7 L291.3,73.3\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M341.3,42.7 L368.7,73.3\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M273.1,101.5 L261.9,126.5\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M286.9,101.5 L298.1,126.5\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M373.1,101.5 L361.9,126.5\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<circle cx=\"330\" cy=\"30\" r=\"17\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"330\" y=\"35\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">30</text>\n<circle cx=\"280\" cy=\"86\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"280\" y=\"91\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">50</text>\n<circle cx=\"380\" cy=\"86\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"380\" y=\"91\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">60</text>\n<circle cx=\"255\" cy=\"142\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"255\" y=\"147\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">70</text>\n<circle cx=\"305\" cy=\"142\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"305\" y=\"147\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">80</text>\n<circle cx=\"355\" cy=\"142\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"355\" y=\"147\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700;font-family:var(--mono)\">90</text>\n<text x=\"110\" y=\"184\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">max heap: root is largest</text>\n<text x=\"330\" y=\"184\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">min heap: root is smallest</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">A heap only orders parent against child, not left against right, so it is not a BST; it just keeps the max (or min) on top.</figcaption></figure><!--/viz:atb-heaps--><p><strong>Hierarchy instead of sequence</strong> — Linear structures place each element next to the one before it. A tree instead organises data as a hierarchy, drawn upside down with its root at the top, so each element can lead to several below it.<br><em>e.g.</em> A company org chart: CEO, then division heads, then their teams.</p><p><strong>Root, parent, child, leaf</strong> — The root is the starting node from which the rest of the tree grows. A node linked away from the root is a child; the node it hangs from is its parent. A parent may have several children, but every child has exactly one parent. Leaves are the end nodes with no children.<br><em>e.g.</em> In a product catalogue, 'Electronics' is a parent of 'Mobiles'; an individual SKU page with nothing beneath it is a leaf.</p><p><strong>One parent per child — otherwise it is a graph</strong> — The book draws a sharp line: once any node has more than one parent, the structure is no longer a tree but a graph, the subject of a later chapter.<br><em>e.g.</em> A matrix organisation where an analyst reports to both a regional head and a product head cannot be drawn as a pure tree.</p><p><strong>Edges, subtrees, key-value nodes and traversal</strong> — Edges are the links between nodes. A subtree is the smaller tree hanging below any node. Each node usually stores a key that identifies it and a value holding its data. Moving through the nodes of a tree is called traversal.<br><em>e.g.</em> Key = employee ID, value = the employee's record.</p><p><strong>Binary trees</strong> — In a binary tree each parent links to at most two children, conventionally called left and right. The book calls it the most used tree structure.<br><em>e.g.</em> A yes/no decision tree for loan screening.</p><p><strong>Binary search trees (BST)</strong> — A BST keeps its keys sorted: every key in a node's left subtree is smaller than the node, and every key in its right subtree is larger. The smallest key is reached by following left links from the root as far as possible, the largest by following right links. The three core operations are insert, delete and search.<br><em>e.g.</em> Searching for invoice 55 in a BST rooted at 45: go right (55 &gt; 45), then left at 60 (55 &lt; 60) — found in three comparisons.</p><p><strong>Unbalanced trees</strong> — If many nodes have only one child, the tree degenerates into a long chain. Search then loses its advantage and behaves much like walking a linked list. Inserting keys that are already in sorted order is the classic way this happens.<br><em>e.g.</em> Adding customer IDs 1001, 1002, 1003… in order to a plain BST builds a one-sided chain.</p><p><strong>Balancing and self-balancing trees</strong> — Balancing reshapes a tree to the smallest height possible while keeping its ordering rules. Self-balancing trees do this on their own: an AVL tree, on finding that the heights of a node's two child subtrees differ too much, applies rotations that lift one node and lower another. Balanced trees keep operations around O(log n).<br><em>e.g.</em> A balanced tree of 1 million keys needs only about 20 levels, so about 20 comparisons per search.</p><p><strong>Red-black trees</strong> — A red-black tree is another self-balancing BST. Each node carries a bit read as red or black; the root is usually black and a red node's children are black. The book notes it needs fewer rotations than an AVL tree, which makes it more efficient to rebalance; it is also O(log n).<br><em>e.g.</em> Many language libraries use red-black trees for their sorted map structures.</p><p><strong>B-trees</strong> — A B-tree is a self-balancing tree in which a parent may have more than two children. That suits storage systems: databases and file systems use B-trees so that a folder (node) can hold many subfolders and files, each name associated with an object.<br><em>e.g.</em> A drive's folder structure: 'Finance' holding 'FY25', 'FY26' and 'Audit' as three children.</p><p><strong>Heaps</strong> — A heap is a binary-tree structure that gives quick access to the maximum or minimum item. In a max heap the root holds the largest value and every node is no larger than its parent; in a min heap the root holds the smallest value and every node is no smaller than its parent. Heaps are the usual way to implement priority queues. Neither form is better — the application decides.<br><em>e.g.</em> A max heap of bids lets an auction platform read the highest bid instantly.</p><p><strong>Heap data structure vs heap memory</strong> — The heap data structure and the area of computer memory called 'the heap' share a name but are implemented completely differently. Mixing them up is a common beginner mistake.<br><em>e.g.</em> A max heap of orders is a data structure; 'heap memory' is where a program allocates objects at run time.</p><div class=\"card\"><strong>Case: Folders as a B-tree</strong> <em>(Chapter 3, B-trees section: file systems)</em><p>The book explains why file systems favour B-trees: a folder can contain many folders and files, so a node needs more than two children, and the key-value nodes let each folder or file name point to the object it stands for. Self-balancing keeps lookups fast as the drive fills.</p><p><em>Lesson:</em> Choose the tree shape that matches the branching of the real data.</p><p><em>Think:</em> Why would a binary search tree be a poor model for a shared company drive with hundreds of subfolders per department?</p></div><details><summary>Worked problem: Building and searching a BST</summary><p>Invoice numbers arrive in this order: 45, 20, 60, 10, 30, 55. Insert them into an empty binary search tree. Which nodes are leaves, what is the parent of 30, and how many comparisons does a search for 55 take?</p><ol><li>45 becomes the root.</li><li>20 &lt; 45 → left child of 45. 60 &gt; 45 → right child of 45.</li><li>10 &lt; 45, then 10 &lt; 20 → left child of 20.</li><li>30 &lt; 45, then 30 &gt; 20 → right child of 20.</li><li>55 &gt; 45, then 55 &lt; 60 → left child of 60.</li><li>Leaves (no children): 10, 30, 55.</li><li>Search 55: compare with 45 (go right), 60 (go left), 55 (found) = 3 comparisons.</li></ol><p><strong>Answer:</strong> Leaves are 10, 30 and 55; the parent of 30 is 20; finding 55 takes 3 comparisons.</p></details><details><summary>Worked problem: What sorted input does to a BST</summary><p>Customer IDs 10, 20, 30, 40, 50 are inserted into an empty BST in that order. How many comparisons does a search for 50 take? Compare with inserting them as 30, 20, 40, 10, 50.</p><ol><li>Sorted order: each new key is larger than every earlier one, so it goes right every time — the tree is a chain 10 → 20 → 30 → 40 → 50.</li><li>Searching 50 visits every node: 5 comparisons.</li><li>Order 30, 20, 40, 10, 50: root 30, left 20 (with left child 10), right 40 (with right child 50).</li><li>Searching 50: 30 → 40 → 50 = 3 comparisons.</li></ol><p><strong>Answer:</strong> 5 comparisons for the chain versus 3 for the balanced shape; the gap widens dramatically as the number of keys grows.</p></details><div class=\"def\"><b>Book vs lecture — Trees not yet in the lecture record.</b> Book: Covers trees, BSTs, AVL, red-black, B-trees and heaps. Lecture: Lectures #12 (Trees — Fundamentals) and #14 (Tree Types) exist but their content is not in the hub's lecture record yet. <b>Check terms (e.g. whether 'level', 'depth', 'height' and 'degree' are defined) against the #12 and #14 transcripts before relying on this pack for Quiz 2; the lecture wins on definitions.</b></div><div class=\"def\"><b>Book vs lecture — Wording of the binary tree definition.</b> Book: Says each parent can be linked to only two child nodes. Lecture: Not yet recorded. <b>The standard definition is at most two children; leaves have none and some nodes have one. Answer 'at most two'.</b></div><div class=\"def\"><b>Book vs lecture — Benefit of balancing.</b> Book: Says balancing matters because a balanced tree allows more efficient memory usage. Lecture: Not yet recorded. <b>The main benefit usually tested is speed: a balanced tree keeps height small, so search, insert and delete stay around O(log n). Give that reason first.</b></div><div class=\"def\"><b>Book vs lecture — Heap and priority queue.</b> Book: States that the heap implements a priority queue. Lecture: The priority queue was taught in Module 2 as a queue type served by priority, ties falling back to FIFO, with no reference to heaps. <b>Both are compatible: the priority queue is the behaviour, a heap is the usual way to build it. Note that a plain heap does not itself guarantee FIFO among equal priorities.</b></div>"
    }
   ]
  },
  {
   "id": "hashing",
   "title": "Hashing &amp; hash tables",
   "tag": "Lecture 19 · Module 3 · + textbook",
   "lede": "Fixed-length outputs: mod as a simple hash, hash tables with chaining for fast look-up, and the stricter rules hashing must meet for passwords and integrity checks.",
   "topics": [
    {
     "t": "Hash functions and mod",
     "src": "L#19",
     "h": "\n  <p style=\"font-size:14.5px\">Hashing is the <strong>last non-linear data structure</strong> of the module. Older textbooks barely mention it; newer ones do, because it has become so important.</p>\n  <h4>From functions to hash functions</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Function</th><th>Example</th><th>Output length</th></tr></thead><tbody>\n   <tr><td><strong>square(x)</strong></td><td>2 → 4 · 10 → 100</td><td><strong>Varies</strong> with the input</td></tr>\n   <tr><td><strong>uppercase(s)</strong></td><td>abc → ABC</td><td>Fixed, but <strong>set by the input</strong>: 5 characters in, 5 out</td></tr>\n   <tr><td><strong>hash(s)</strong></td><td>3 characters or 100 characters in</td><td><strong>Always the same fixed length</strong>, whatever the input</td></tr>\n  </tbody></table></div>\n  <div class=\"def\">A <b>hash function</b> applies (usually complex) mathematical operations to an input and always returns a <b>fixed-length output</b>, mostly <b>alphanumeric</b>. That output is also called a <b>digest</b> or <b>message digest</b>. A series of characters given as input is a <b>string</b>.</div>\n  <h4>mod: the one operation he explained</h4>\n  <div class=\"def\"><b>number mod X</b> divides the number by X and returns the <b>remainder</b>. Some textbooks write it as <b>%</b>.</div>\n  <div class=\"scroller\"><table><thead><tr><th>Calculation</th><th>Working</th><th>Result</th></tr></thead><tbody>\n   <tr><td style=\"font-family:var(--mono)\">101 mod 10</td><td>10 × 10 = 100, remainder 1</td><td style=\"font-family:var(--mono)\">1</td></tr>\n   <tr><td style=\"font-family:var(--mono)\">27 mod 5</td><td>5 × 5 = 25, remainder 2</td><td style=\"font-family:var(--mono)\">2</td></tr>\n   <tr><td style=\"font-family:var(--mono)\">25 mod 5</td><td>divides exactly</td><td style=\"font-family:var(--mono)\">0 (some algorithms use X instead; zero is \"tricky business\")</td></tr>\n  </tbody></table></div>\n  <ul style=\"font-size:14.5px\">\n   <li><strong>Choosing X:</strong> X = the number of unique hash values you want. mod 10 gives 10 values, <strong>0 to 9</strong>; mod 100 gives 100</li>\n   <li><strong>mod 10 picks the last digit</strong> of a number, and mod 100 the last two — this is how a system extracts digits from a number it stores as one value</li>\n  </ul>\n  <p style=\"font-size:14.5px\"><strong>His exercise (mod 10):</strong> 115 → 5 · 118 → 8 · 125 → 5 · 167 → 7 · 188 → 8. Two pairs land on the same value (115 and 125, 118 and 188) — a <strong>hash collision</strong>. With only 10 values, collisions are unavoidable once you store more than 10 numbers.</p>"
    },
    {
     "t": "Hash tables, collisions and chaining",
     "src": "L#19",
     "h": "\n  <div class=\"def\">A <b>hash table</b> stores <b>key–value pairs</b> — technically <b>index–key–value</b>. The <b>key</b> uniquely identifies a record (a roll number), the <b>value</b> is the data linked to it (name, programme, date of birth…), and the <b>index</b> is the key's <b>hash value</b>, pointing to where the search should start.</div>\n  <p style=\"font-size:14.5px\"><strong>His roll-number example.</strong> IIT Jodhpur roll numbers start with B, M or P (bachelor's, master's, PhD), then two digits for the year (B26…), then a department code (SME, ME, ELE…), then a serial number; PhD numbers add a digit for the July or January intake. Lengths vary, and students who joined in different years sit in different memory locations, so searching record by record is slow. With mod 10 on the serial, every roll number ending in 2 starts its search at index 2.</p>\n  <h4>Collisions and chaining</h4>\n  <div class=\"def\">A <b>hash collision</b> happens when the hash function gives the <b>same hash for two different inputs</b> — B26SME001 and B26SME011 both map to 1 under mod 10. <b>Hash chaining</b> resolves it with a <b>linked list</b>: the new record is linked after the last record already chained at that index.</div>\n  <p style=\"font-size:14.5px\">Other collision-resolution methods exist, but he said knowing chaining is <strong>sufficient for this first-year course</strong>.</p>\n  <h4>What makes a good hash function for indexing</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Property</th><th>Why</th></tr></thead><tbody>\n   <tr><td><strong>Fast to calculate</strong></td><td>If computing the index is slow, the search is slow</td></tr>\n   <tr><td><strong>Consistent</strong></td><td>The same key always gives the same index — which is why mathematical functions are used</td></tr>\n   <tr><td><strong>Even distribution</strong></td><td>Keys should spread across all positions. Hashing words by their <strong>first letter</strong> is skewed: far more words start with A, P or R than with Q or X</td></tr>\n   <tr><td><strong>Fewer collisions</strong></td><td>Some are inevitable. But a unique index for every key defeats the purpose — you would search the index just as you search the keys</td></tr>\n   <tr><td><strong>Effective use of the key</strong></td><td>Use the information in the key so that the search is efficient</td></tr>\n  </tbody></table></div><!--viz:atb-rollno-chaining--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Index column 0 to 4 with linked chains of roll numbers: three at index 1, two at index 2, one at index 4, none at 0 and 3.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Roll numbers hashed with mod 10, collisions chained</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 236\" role=\"img\" aria-label=\"Hash table indexes 0 to 4. Index 1 chains B26SME001, B26SME011 and B26SME021; index 2 chains M24ME012 and B25SME022; index 4 holds P25ELE004; indexes 0 and 3 are empty.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"10\" y=\"14\" width=\"36\" height=\"28\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"28\" y=\"33\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">0</text><text x=\"64\" y=\"33\" text-anchor=\"start\" style=\"fill:var(--ink-3);font-size:13px\">empty</text><rect x=\"10\" y=\"54\" width=\"36\" height=\"28\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"28\" y=\"73\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">1</text><path d=\"M46,68 L60,68\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M66,68 L60,71 L60,65 Z\" style=\"fill:var(--ink-3);stroke:none\"/><rect x=\"66\" y=\"54\" width=\"84\" height=\"28\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"108\" y=\"73\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">B26SME001</text><path d=\"M150,68 L164,68\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M170,68 L164,71 L164,65 Z\" style=\"fill:var(--ink-3);stroke:none\"/><rect x=\"170\" y=\"54\" width=\"84\" height=\"28\" rx=\"4\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"212\" y=\"73\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">B26SME011</text><path d=\"M254,68 L268,68\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M274,68 L268,71 L268,65 Z\" style=\"fill:var(--ink-3);stroke:none\"/><rect x=\"274\" y=\"54\" width=\"84\" height=\"28\" rx=\"4\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"316\" y=\"73\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">B26SME021</text><rect x=\"10\" y=\"94\" width=\"36\" height=\"28\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"28\" y=\"113\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">2</text><path d=\"M46,108 L60,108\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M66,108 L60,111 L60,105 Z\" style=\"fill:var(--ink-3);stroke:none\"/><rect x=\"66\" y=\"94\" width=\"84\" height=\"28\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"108\" y=\"113\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">M24ME012</text><path d=\"M150,108 L164,108\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M170,108 L164,111 L164,105 Z\" style=\"fill:var(--ink-3);stroke:none\"/><rect x=\"170\" y=\"94\" width=\"84\" height=\"28\" rx=\"4\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"212\" y=\"113\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">B25SME022</text><rect x=\"10\" y=\"134\" width=\"36\" height=\"28\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"28\" y=\"153\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">3</text><text x=\"64\" y=\"153\" text-anchor=\"start\" style=\"fill:var(--ink-3);font-size:13px\">empty</text><rect x=\"10\" y=\"174\" width=\"36\" height=\"28\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"28\" y=\"193\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">4</text><path d=\"M46,188 L60,188\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M66,188 L60,191 L60,185 Z\" style=\"fill:var(--ink-3);stroke:none\"/><rect x=\"66\" y=\"174\" width=\"84\" height=\"28\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"108\" y=\"193\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">P25ELE004</text><text x=\"10\" y=\"224\" text-anchor=\"start\" style=\"fill:var(--ink-2);font-size:13px\">index = serial number mod 10 (its last digit)</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Collisions (shaded) are linked after the last record at their index; a search starts at the index and walks its chain.</figcaption></figure><!--/viz:atb-rollno-chaining-->"
    },
    {
     "t": "Hashing for security: passwords and integrity",
     "src": "L#19",
     "h": "\n  <h4>The extra properties security needs</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Property</th><th>Meaning</th></tr></thead><tbody>\n   <tr><td><strong>Deterministic</strong></td><td>The same input always produces the same hash</td></tr>\n   <tr><td><strong>Fixed-length output</strong></td><td>As for every hash function</td></tr>\n   <tr><td><strong>One-way</strong></td><td>From the hash you cannot recalculate the original input</td></tr>\n   <tr><td><strong>Avalanche effect</strong></td><td>Changing even one digit of the input gives a <strong>completely different</strong> hash, so similar hashes cannot be used to guess the input</td></tr>\n   <tr><td><strong>Collision resistance</strong></td><td>Ideally every unique input gets its own hash — no collisions</td></tr>\n   <tr><td><strong>Computing speed — depends on the use</strong></td><td><strong>Fast</strong> for integrity checks; <strong>deliberately slow</strong> for passwords, so cracking them is slow and difficult; <strong>very fast</strong> for indexing</td></tr>\n  </tbody></table></div>\n  <div class=\"card\" style=\"font-size:13.5px\"><b>Avalanche effect, for real.</b> Using SHA-256, a widely used hash function (not one named in the lecture), changing one digit gives an unrelated output of the same 64-character length:<br><span style=\"font-family:var(--mono)\">\"Pay Rs 5000 to Asha\" → 907344c2693fbb88…<br>\"Pay Rs 6000 to Asha\" → 5854ea3dd2324057…</span></div>\n  <h4>Password storage</h4>\n  <ul style=\"font-size:14.5px\">\n   <li>Your IITJ ERP account, your bank, your UPI app: the user ID may be stored as it is, but the <strong>password never is</strong>. The system stores the <strong>hash</strong> of the password</li>\n   <li>At login, the typed password is hashed and the result is compared with the stored hash. An extra space, or a capital letter where there should be a small one, gives a different hash and an \"incorrect password\"</li>\n   <li>That is why \"forgot password\" lets you <strong>reset</strong> but nobody can <strong>tell</strong> you your password: the system does not have it, and the hash is one-way</li>\n  </ul>\n  <h4>Integrity checks</h4>\n  <p style=\"font-size:14.5px\">To check that a file sent (say over WhatsApp) has not been tampered with or corrupted: the sender's system calculates a hash of the data, packs <strong>data + hash</strong> together and sends the package. The receiver separates the two, <strong>recalculates</strong> the hash from the data it received, and compares it with the hash that came with it. Same → integrity intact. Different → the file is deemed corrupted and is ignored or not opened.</p>\n  <div class=\"def\"><b>His summary (L#19):</b> indexing uses <b>simpler</b> hash functions and can live with collisions, resolved by chaining; cybersecurity uses <b>complex</b> hash functions that deliberately avoid collisions — quick for integrity checks, slow for passwords.</div><!--viz:atb-hash-by-use--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table comparing hash requirements for indexing, password storage and integrity checks: speed, collisions, kind of function and example.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">One idea, three sets of requirements</div><div class=\"scroller\"><table><thead><tr><th></th><th>Indexing</th><th>Password storage</th><th>Integrity check</th></tr></thead><tbody><tr><td><b>Speed</b></td><td>Very fast</td><td style=\"background:var(--clay-soft)\"><b>Deliberately slow</b></td><td>Fast</td></tr><tr><td><b>Collisions</b></td><td>Tolerated, resolved by chaining</td><td>Must be avoided</td><td>Must be avoided</td></tr><tr><td><b>Kind of function</b></td><td>Simple (e.g. mod 10)</td><td>Complex</td><td>Complex</td></tr><tr><td><b>His example</b></td><td>Roll-number search</td><td>ERP, bank, UPI logins</td><td>A file sent over WhatsApp</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Speed is a virtue everywhere except passwords, where a slow hash slows down anyone trying to crack them.</figcaption></figure><!--/viz:atb-hash-by-use--><!--viz:atb-integrity-check--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Flow: the sender hashes the file and sends file plus hash; the receiver unpacks, recalculates the hash from the file and compares it with the received hash. Same means intact, different means corrupted.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">How an integrity check works</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Original file</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">hash calculated</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\">package: <b>file + hash</b></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">received and unpacked</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><b>recalculate</b> hash from file</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">compare with received hash</div></div><div style=\"display:flex;flex-wrap:wrap;gap:6px 8px;font-size:14px;margin-top:8px\"><div style=\"padding:7px 11px;border:1px solid var(--good);border-radius:4px;background:var(--good-soft)\"><b>same</b> → integrity intact</div><div style=\"padding:7px 11px;border:1px solid var(--bad);border-radius:4px;background:var(--bad-soft)\"><b>different</b> → deemed corrupted, not opened</div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The receiver never trusts the file alone: it recomputes the hash and checks it against the one that travelled with it.</figcaption></figure><!--/viz:atb-integrity-check-->"
    },
    {
     "t": "Textbook: Hash Data Structures",
     "src": "Codeless DSA ch4",
     "h": "<p>A hash function is a black box that turns any input — one letter or a whole document — into a fixed-size hash value, and even a tiny change to the input produces a very different output. A hash table uses that value to compute where a key's value lives in an array, giving near-instant O(1) lookup; when two keys land on the same slot (a collision), chaining stores them together in a linked list at that slot, at the cost of slower lookups as chains grow. The second half places hashing in computer security: hashing is one-way while encryption is two-way, shared-key systems struggle with distributing the key, public-key systems separate the encrypting and decrypting keys, and hashes underpin digital signatures, password storage and error-detecting checksums such as CRC. For a manager, hashing explains both why lookups in large systems feel instant and why a well-run company never stores customers' passwords in readable form.</p><!--viz:atb-hash-chaining--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Seven-slot table. 15 mod 7 = 1, 40 mod 7 = 5, 31 mod 7 = 3, 22 mod 7 = 1, 9 mod 7 = 2. Slot 1 holds a chain 15 then 22; slots 2, 3 and 5 hold one key each; slots 0, 4 and 6 are empty.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Hashing keys into buckets, with one collision chained</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 224\" role=\"img\" aria-label=\"Hash table with seven slots using index = key mod 7. Keys 15 and 22 both go to slot 1 and are chained; 9 goes to slot 2, 31 to slot 3, 40 to slot 5.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<text x=\"14\" y=\"24\" style=\"fill:var(--ink);font-size:13px;font-weight:700;font-family:var(--mono)\">index = key mod 7</text>\n<text x=\"14\" y=\"52\" style=\"fill:var(--clay);font-size:13px;font-family:var(--mono)\">15 mod 7 = 1</text>\n<text x=\"14\" y=\"76\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">40 mod 7 = 5</text>\n<text x=\"14\" y=\"100\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">31 mod 7 = 3</text>\n<text x=\"14\" y=\"124\" style=\"fill:var(--clay);font-size:13px;font-family:var(--mono)\">22 mod 7 = 1</text>\n<text x=\"14\" y=\"148\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">9 mod 7 = 2</text>\n<rect x=\"196\" y=\"14\" width=\"36\" height=\"26\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"186\" y=\"32\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">0</text>\n<rect x=\"196\" y=\"40\" width=\"36\" height=\"26\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"186\" y=\"58\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">1</text>\n<path d=\"M214,53 L238,53\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M246,53 L238,57 L238,49 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<rect x=\"248\" y=\"42\" width=\"40\" height=\"22\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"268\" y=\"57\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700;font-family:var(--mono)\">15</text>\n<path d=\"M288,53 L298,53\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none\"/>\n<path d=\"M306,53 L298,57 L298,49 Z\" style=\"fill:var(--clay);stroke:none\"/>\n<rect x=\"308\" y=\"42\" width=\"40\" height=\"22\" rx=\"2\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/>\n<text x=\"328\" y=\"57\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700;font-family:var(--mono)\">22</text>\n<circle cx=\"214\" cy=\"53\" r=\"2.5\" style=\"fill:var(--ink-3);stroke:var(--ink-3);stroke-width:1\"/>\n<rect x=\"196\" y=\"66\" width=\"36\" height=\"26\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"186\" y=\"84\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">2</text>\n<path d=\"M214,79 L238,79\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M246,79 L238,83 L238,75 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<rect x=\"248\" y=\"68\" width=\"40\" height=\"22\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"268\" y=\"83\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700;font-family:var(--mono)\">9</text>\n<circle cx=\"214\" cy=\"79\" r=\"2.5\" style=\"fill:var(--ink-3);stroke:var(--ink-3);stroke-width:1\"/>\n<rect x=\"196\" y=\"92\" width=\"36\" height=\"26\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"186\" y=\"110\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">3</text>\n<path d=\"M214,105 L238,105\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M246,105 L238,109 L238,101 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<rect x=\"248\" y=\"94\" width=\"40\" height=\"22\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"268\" y=\"109\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700;font-family:var(--mono)\">31</text>\n<circle cx=\"214\" cy=\"105\" r=\"2.5\" style=\"fill:var(--ink-3);stroke:var(--ink-3);stroke-width:1\"/>\n<rect x=\"196\" y=\"118\" width=\"36\" height=\"26\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"186\" y=\"136\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">4</text>\n<rect x=\"196\" y=\"144\" width=\"36\" height=\"26\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"186\" y=\"162\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">5</text>\n<path d=\"M214,157 L238,157\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M246,157 L238,161 L238,153 Z\" style=\"fill:var(--ink-3);stroke:none\"/>\n<rect x=\"248\" y=\"146\" width=\"40\" height=\"22\" rx=\"2\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"268\" y=\"161\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700;font-family:var(--mono)\">40</text>\n<circle cx=\"214\" cy=\"157\" r=\"2.5\" style=\"fill:var(--ink-3);stroke:var(--ink-3);stroke-width:1\"/>\n<rect x=\"196\" y=\"170\" width=\"36\" height=\"26\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"186\" y=\"188\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">6</text>\n<text x=\"354\" y=\"57\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">collision</text>\n<text x=\"220\" y=\"214\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">find 22: slot 1, then walk 15 → 22 (2 comparisons)</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Most lookups take one jump; a collision adds a short walk along the chain, and long chains erode the O(1) advantage.</figcaption></figure><!--/viz:atb-hash-chaining--><!--viz:atb-hash-vs-encrypt--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Two flows. Encryption: plaintext is encrypted with a key into ciphertext and decrypted with a key back into plaintext. Hashing: a password goes through a hash function to a fixed-length hash value, with no way back.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Encryption goes both ways; hashing goes one way</div><div style=\"display:flex;flex-direction:column;gap:10px;font-size:14px\"><div><div style=\"font-weight:700;margin-bottom:4px\">Encryption: two-way</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">Plaintext</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--clay);background:var(--clay-soft);border-radius:4px\">encrypt with key</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">Ciphertext</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--clay);background:var(--clay-soft);border-radius:4px\">decrypt with key</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--good);background:var(--good-soft);border-radius:4px\">Plaintext again</div></div></div><div><div style=\"font-weight:700;margin-bottom:4px\">Hashing: one-way</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">Password</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--blue);background:var(--blue-soft);border-radius:4px\">hash function</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">Fixed-length hash value</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--bad);background:var(--bad-soft);border-radius:4px\">no way back to the password</div></div></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Use encryption when the data must be read again; use hashing when you only need to check a match.</figcaption></figure><!--/viz:atb-hash-vs-encrypt--><!--viz:atb-password-hash--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Sign-up: the chosen password is hashed and only the hash is stored. Login: the typed password is hashed and compared with the stored hash; a match lets the user in, otherwise the login is rejected.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">How a login checks a password it never stored</div><div style=\"display:flex;flex-direction:column;gap:10px;font-size:14px\"><div><div style=\"font-weight:700;margin-bottom:4px\">Sign-up</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">password chosen</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--blue);background:var(--blue-soft);border-radius:4px\">hash</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">store <b>only the hash</b></div></div></div><div><div style=\"font-weight:700;margin-bottom:4px\">Login</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">password typed</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--blue);background:var(--blue-soft);border-radius:4px\">hash</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);background:var(--surface);border-radius:4px\">same as stored hash?</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--good);background:var(--good-soft);border-radius:4px\">yes: let in</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--bad);background:var(--bad-soft);border-radius:4px\">no: reject</div></div></div></div><p style=\"font-size:13.5px;color:var(--ink-2);margin:8px 0 0\">If the database leaks, attackers get hashes, not readable passwords.</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The system compares hashes, never passwords, which works because the same input always gives the same hash.</figcaption></figure><!--/viz:atb-password-hash--><p><strong>Hash function</strong> — A hash function converts an input into an output called a hash value. Whatever the input's length, the hash value has the same fixed size, and common hash functions output it as a hexadecimal string.<br><em>e.g.</em> Hashing the single word 'invoice' and a 300-page contract both yield outputs of identical length.</p><p><strong>Collisions and sensitivity to change</strong> — Unlike a mathematical function, a hash function can occasionally give two different inputs the same hash value — a collision. Collisions are rare because changing even one bit of input usually changes the output drastically. Good hash functions are quick to compute and keep collisions to a minimum.<br><em>e.g.</em> Changing one digit in a bank statement produces a completely different hash.</p><p><strong>Hash table as key-value lookup</strong> — At heart a hash table is a key-value lookup system: every key has an associated value. The key is hashed, the hash value is mapped to an array index, and the value is stored or found at that index, which makes typical lookups O(1).<br><em>e.g.</em> Look up a customer's plan from their mobile number without scanning crores of records.</p><p><strong>Chaining to resolve collisions</strong> — Because many keys can map to the same index, a basic hash table stores at each array slot a linked list rather than a single element. Colliding keys are chained together at their shared index. The trade-off: as chains lengthen, lookups slow down.<br><em>e.g.</em> Three order numbers that all map to slot 0 sit in one short list at that slot.</p><p><strong>Why hashing beats lists for heavy lookup</strong> — Search engines, compilers and databases perform huge numbers of time-critical lookups. Walking a linked list for each one cannot keep up, whereas a hash table's constant-time lookup can.<br><em>e.g.</em> A payment gateway checking whether a merchant ID is blacklisted on every transaction.</p><p><strong>Cryptosystems: plaintext, ciphertext, keys</strong> — A cryptosystem is a set of algorithms that turns readable plaintext into unreadable ciphertext (encryption) and back again (decryption), using a key. Encryption protects data in transit against eavesdropping and against spoofing, where someone pretends to be someone else.<br><em>e.g.</em> Internet banking encrypts account details so an interceptor sees only gibberish.</p><p><strong>Shared-key vs public-key systems</strong> — A shared-key system uses one key both to encrypt and to decrypt, so the key itself must be sent to the receiver — and can be intercepted. This key-distribution problem led to public-key systems, which use a public key to encrypt and a separate secret key to decrypt; the public key can travel openly because it cannot decrypt.<br><em>e.g.</em> A supplier publishes a public key; anyone can encrypt a quote to it, but only the supplier can read the quotes.</p><p><strong>Hashing vs encryption</strong> — Encryption is a two-way process: a cipher scrambles data so that someone with the key can recover it. Hashing is one-way: it produces a fixed-length output with no intention of getting the original back.<br><em>e.g.</em> Encrypt a contract you need to send and read later; hash a contract to prove later that nobody altered it.</p><p><strong>Hashes in digital signatures</strong> — A digital signature lets a receiver verify that data really came from the claimed sender; it is created by the holder of the private key. RSA can be used for both signatures and encryption, DSA only for signatures; both rely on hashing, RSA hashing the data before signing and DSA using a SHA-based hash.<br><em>e.g.</em> A digitally signed e-invoice that the buyer's system can verify as genuinely from the vendor.</p><p><strong>Hashes for password storage</strong> — Systems should store the hash of each password, not the password itself. At login, the typed password is hashed and compared with the stored hash. If the database is breached, attackers see hashes rather than readable passwords.<br><em>e.g.</em> A retailer's breached user table reveals only hash strings, not customers' passwords.</p><p><strong>Cyclic redundancy check (CRC)</strong> — A CRC detects errors in transmitted data. The sender attaches a fixed-size checksum computed from the message; the receiver recomputes it, and if the values differ the data is probably corrupted and can be discarded or re-requested. CRC modules are common in embedded and IoT devices sending data over Ethernet or Wi-Fi.<br><em>e.g.</em> A smart electricity meter's reading arrives with a mismatched CRC, so the utility asks for it again.</p><div class=\"card\"><strong>Case: Breached password database</strong> <em>(Chapter 4, Role of Hashes in Computer Security: user authentication)</em><p>The book walks through a login system whose database is breached. If passwords were saved as plain text, the attacker reads them all. If only their hashes were saved, the attacker gets strings that cannot be turned back into passwords, while the system can still verify logins by hashing and comparing.</p><p><em>Lesson:</em> Hashing protects stored credentials because it is one-way yet consistent.</p><p><em>Think:</em> A start-up's CTO argues that encrypting passwords is as good as hashing them. What is the extra risk if the encryption key is stolen along with the database?</p></div><details><summary>Worked problem: A toy hash table with chaining</summary><p>A distributor stores order numbers in a 7-slot hash table using the hash rule index = order number mod 7 (the remainder after dividing by 7), with chaining for collisions. Insert 1050, 2013, 3021, 4116, 1057. Which slots are used, and how many comparisons does a lookup for 1057 need?</p><ol><li>1050 ÷ 7 = 150 remainder 0 → slot 0.</li><li>2013 ÷ 7 = 287 remainder 4 → slot 4.</li><li>3021 ÷ 7 = 431 remainder 4 → slot 4 (collision with 2013; chain it).</li><li>4116 ÷ 7 = 588 remainder 0 → slot 0 (collision; chain).</li><li>1057 ÷ 7 = 151 remainder 0 → slot 0 (chain grows to three).</li><li>Lookup 1057: hash to slot 0, then walk the chain 1050 → 4116 → 1057 = 3 comparisons.</li></ol><p><strong>Answer:</strong> Slot 0 holds 1050, 4116, 1057; slot 4 holds 2013, 3021; slots 1, 2, 3, 5, 6 are empty. Finding 1057 takes 3 comparisons — longer chains mean slower lookups.</p></details><div class=\"def\"><b>Book vs lecture — Hashing not yet in the lecture record.</b> Book: Treats hash functions, hash tables, chaining and security uses of hashing. Lecture: No hashing lecture appears in the hub's record (Modules 1–2 plus the post-cut-off tree and graph lectures). <b>Use this pack as preparation; check terminology against the hashing lecture once released.</b></div><div class=\"def\"><b>Book vs lecture — Are hashes one-to-one?.</b> Book: In the password section calls hashes 'one-way and 1:1', yet earlier admits two inputs can collide. Lecture: Not covered. <b>Answer that hashes are one-way and consistent (same input → same hash) but not strictly one-to-one, since collisions are possible.</b></div><div class=\"def\"><b>Book vs lecture — What a CRC proves.</b> Book: Says CRC uses a hash function to verify the authenticity of data. Lecture: Not covered. <b>A CRC detects accidental corruption in transmission; it is not a security control and does not prove who sent the data — that is a digital signature's job.</b></div><div class=\"def\"><b>Book vs lecture — Hash table time complexity.</b> Book: States hash-table search is O(1), then notes lookup worsens as chains grow. Lecture: Not covered. <b>Say 'O(1) on average/typically'; with heavy collisions it degrades toward O(n).</b></div>"
    }
   ]
  },
  {
   "id": "graphs",
   "title": "Graphs",
   "tag": "Lectures 15–18 · Module 3 · + textbook",
   "lede": "Relationships instead of hierarchy: G = (V, E), degree, four pairs of graph types, and the two traversals — DFS on a stack, BFS on a queue.",
   "topics": [
    {
     "t": "Graphs vs trees",
     "src": "L#15",
     "h": "\n  <div class=\"def\">A <b>graph</b> is a data structure that captures the <b>relationships</b> between nodes. A tree shows <b>hierarchy</b>; in a graph the nodes are treated as more or less <b>equal</b>, and any node can be connected to <b>any number</b> of others.</div>\n  <h4>Why trees are not enough: the two-sided family</h4>\n  <p style=\"font-size:14.5px\">A family tree works only if you follow one side. Take three families: A with children P and Q, C with child S, and B with child R. So far these are three separate trees. Now S marries P and they have a child X; Q marries R and they have a child Y. X now has <strong>two parents</strong> (S and P), and so does Y — the single-parent rule is broken, so the structure is <strong>a graph</strong>. Graphs can also carry relationships a tree cannot: <strong>spouse of</strong> (S–P, Q–R) and <strong>cousin of</strong> (X–Y).</p>\n  <h4>His tree-or-graph exercise</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Case</th><th>Use</th><th>Why</th></tr></thead><tbody>\n   <tr><td>People and designations in a company, each person in one function</td><td><strong>Tree</strong></td><td>Clear reporting line: everyone except the CEO has one boss</td></tr>\n   <tr><td>Companies in a corporate group (Tata Steel, Tata Motors, TCS…)</td><td><strong>Graph</strong></td><td>Legally independent companies with some links (TCS IT services, Tata Steel supplying Tata Motors)</td></tr>\n   <tr><td>Institutes of National Importance (IITs, IIMs, NITs…) and their research collaborations</td><td><strong>Graph</strong></td><td>Each institute is autonomous; collaborations criss-cross</td></tr>\n   <tr><td>Departments → research groups → faculty within IIT Jodhpur</td><td><strong>Tree</strong></td><td>A hierarchy inside one institute — the same kind of case as the company</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">Social media is the everyday example: on Instagram or Facebook <strong>each user is a vertex</strong>, and the connections between users are edges.</p><!--viz:atb-tree-vs-graph-lecture--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table comparing trees and graphs on what they show, parents, starting point, vocabulary, notation and examples.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Tree or graph?</div><div class=\"scroller\"><table><thead><tr><th></th><th>Tree</th><th>Graph</th></tr></thead><tbody><tr><td><b>Shows</b></td><td>Hierarchy</td><td>Relationships between more or less equal nodes</td></tr><tr><td><b>Parents</b></td><td>Exactly one per node (none for the root)</td><td style=\"background:var(--blue-soft)\">A node can link to any number of nodes — X has two parents</td></tr><tr><td><b>Starting point</b></td><td>A root</td><td>No root: start from any vertex</td></tr><tr><td><b>Words</b></td><td>Node, parent, child, leaf</td><td>Vertex, edge, neighbour</td></tr><tr><td><b>Written as</b></td><td>A drawing of levels</td><td>G = (V, E): a set of vertices and a set of edges</td></tr><tr><td><b>Example</b></td><td>Company designations · IITJ departments</td><td>Tata group companies · INI research collaborations</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Ask whether every node has exactly one parent: if not, you need a graph.</figcaption></figure><!--/viz:atb-tree-vs-graph-lecture-->"
    },
    {
     "t": "G = (V, E) and degree",
     "src": "L#15 · L#18",
     "h": "\n  <div class=\"def\">A graph is written <b>G = (V, E)</b>. <b>V</b> is the set of <b>vertices</b> (singular <i>vertex</i>: each object or entity; \"node\" in tree language) and <b>E</b> is the set of <b>edges</b>, the connections between vertices. The sets use <b>curly braces</b> — he corrected his own slide, which had used parentheses.</div>\n  <p style=\"font-size:14.5px\">For the family graph:</p>\n  <div class=\"card\" style=\"font-family:var(--mono);font-size:13.5px\">V = {A, B, C, P, Q, R, S, X, Y}<br>E = {(C,S), (A,P), (A,Q), (B,R), (S,P), (Q,R), (S,X), (P,X), (Q,Y), (R,Y), (X,Y)}</div>\n  <ul style=\"font-size:14.5px\">\n   <li><strong>Any listing order</strong> works — top to bottom, left to right, bottom to top — as long as every vertex and every edge is covered</li>\n   <li><strong>Only edges that exist</strong> go into E. There is no edge between C and A, or A and B, so (C,A) and (A,B) are not written</li>\n   <li>It works both ways: given V and E, you can draw the graph. Positions on paper may differ; the connections may not</li>\n  </ul>\n  <h4>Degree of a vertex</h4>\n  <div class=\"def\">The <b>degree</b> of a vertex is the number of <b>edges directly connected</b> to it. P is joined to A, S and X, so <b>degree(P) = 3</b>.</div>\n  <div class=\"scroller\"><table><thead><tr><th>Vertex</th><th>Degree</th><th>Edges</th></tr></thead><tbody>\n   <tr><td><strong>A</strong></td><td style=\"font-family:var(--mono)\">2</td><td>P, Q</td></tr>\n   <tr><td><strong>B, C</strong></td><td style=\"font-family:var(--mono)\">1 each</td><td>B–R · C–S</td></tr>\n   <tr><td><strong>P, Q, R, S, X, Y</strong></td><td style=\"font-family:var(--mono)\">3 each</td><td>e.g. X: S, P (parents) and Y (cousin)</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">Degree counts edges of <strong>every kind</strong>: X's cousin edge counts just as its parent edges do. Edges can carry labels such as \"spouse of\" or \"cousin of\", usually read left to right (\"Q is a spouse of R\").</p>\n  <p style=\"font-size:13.5px;color:var(--ink-3)\">Quick check (standard arithmetic, not from the lecture): every edge adds 1 to the degree of both its ends, so the degrees add up to twice the number of edges — here 2 + 1 + 1 + 6 × 3 = 22 = 2 × 11.</p><!--viz:atb-family-graph--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Family graph with vertices A, B, C, P, Q, R, S, X, Y and eleven edges: parent links, two spouse links and one cousin link. Degrees are A 2, B 1, C 1 and 3 for the rest.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The two-sided family as a graph</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 260\" role=\"img\" aria-label=\"Graph of nine people: A, B, C on top; S, P, Q, R in the middle; X and Y at the bottom. Parent edges, spouse edges S-P and Q-R, and a cousin edge X-Y. P is highlighted with degree 3.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M60,44 L60,124\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M220,44 L165,124\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M220,44 L275,124\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M380,44 L380,124\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M60,124 L112,204\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M165,124 L112,204\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M275,124 L328,204\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M380,124 L328,204\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M60,124 L165,124\" style=\"stroke:var(--clay);stroke-width:2;fill:none\"/><path d=\"M275,124 L380,124\" style=\"stroke:var(--clay);stroke-width:2;fill:none\"/><path d=\"M112,204 L328,204\" style=\"stroke:var(--blue);stroke-width:2;fill:none;stroke-dasharray:5 4\"/><circle cx=\"60\" cy=\"44\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"60\" y=\"49\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">C</text><circle cx=\"220\" cy=\"44\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"220\" y=\"49\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A</text><circle cx=\"380\" cy=\"44\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"380\" y=\"49\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">B</text><circle cx=\"60\" cy=\"124\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"60\" y=\"129\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">S</text><circle cx=\"165\" cy=\"124\" r=\"17\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"165\" y=\"129\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">P</text><circle cx=\"275\" cy=\"124\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"275\" y=\"129\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Q</text><circle cx=\"380\" cy=\"124\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"380\" y=\"129\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">R</text><circle cx=\"112\" cy=\"204\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"112\" y=\"209\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">X</text><circle cx=\"328\" cy=\"204\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"328\" y=\"209\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Y</text><text x=\"112\" y=\"113\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px\">spouse</text><text x=\"328\" y=\"113\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px\">spouse</text><text x=\"220\" y=\"194\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">cousin</text><text x=\"220\" y=\"246\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">degree: A 2 · B 1 · C 1 · all others 3</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">X and Y each have two parents, so this cannot be a tree; P (highlighted) has degree 3.</figcaption></figure><!--/viz:atb-family-graph--><h4>Reading the L#18 slides</h4><ul style=\"font-size:14.5px\"><li>The slide writes each edge as two letters (CS, AP, AQ …). That is shorthand for (C,S), (A,P), (A,Q). The graph is undirected, so CS and SC are the same edge</li><li>In the deck, the V line still opens with a curly brace and closes with a round bracket. This is left over from the slip he corrected in L#15. Use curly braces at both ends</li><li>The slides draw the family graph <strong>twice</strong>. The \"Graph\" slide shows only the <strong>8 parent–child edges</strong>. The \"Graph Terminology\" slide adds the spouse edges S–P and Q–R and the cousin edge X–Y, giving the <strong>11-edge</strong> E above. Degree(P) = 3 belongs to the 11-edge version; with parent edges only, P has degree 2. The DFS and BFS slides go back to the 8-edge version</li></ul>"
    },
    {
     "t": "Directed graphs and in/out-degree",
     "src": "L#16 · L#18",
     "h": "\n  <div class=\"def\">In an <b>undirected</b> graph a relationship holds <b>both ways</b>: \"A is a cousin of B\" means B is also a cousin of A. In a <b>directed</b> graph a relationship runs <b>one way only</b>: \"A is a son of B\" does not make B a son of A.</div>\n  <p style=\"font-size:14.5px\">B is A's father or mother, but that is a <strong>different relationship</strong>. You can draw a second arrow from B to A labelled \"father of\", and the graph treats the two arrows as two separate edges. Use a directed graph when the direction matters; an undirected one when only the connection matters.</p>\n  <div class=\"scroller\"><table><thead><tr><th>Platform feature</th><th>Graph</th><th>Why</th></tr></thead><tbody>\n   <tr><td><strong>Facebook friendship</strong></td><td>Undirected</td><td>Once the request is accepted, both are friends of each other</td></tr>\n   <tr><td><strong>Instagram follow</strong></td><td>Directed</td><td>You can follow a public figure who does not follow you back</td></tr>\n   <tr><td><strong>LinkedIn</strong></td><td><strong>Both</strong></td><td>Accepted connections are undirected; the <strong>follow</strong> feature is directed</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">Social-media analysis relies heavily on this kind of graph-level analysis.</p>\n  <h4>In-degree and out-degree</h4>\n  <div class=\"def\">In a directed graph, plain \"degree\" is not enough. <b>In-degree</b> = number of edges <b>coming into</b> a vertex; <b>out-degree</b> = number of edges <b>going out</b> of it. For an undirected graph you just count the edges (Lecture 15).</div>\n  <p style=\"font-size:14.5px\">On Instagram, with you as the vertex: <strong>in-degree</strong> = the users or pages that <strong>follow you</strong>; <strong>out-degree</strong> = the users or pages <strong>you follow</strong>.</p>\n  <div class=\"card\"><b>Influencer marketing.</b> A brand hiring an Instagram influencer cares about <strong>in-degree</strong>: if 10,000 accounts follow you, every post reaches a guaranteed audience. Following 10,000 accounts (out-degree) is immaterial to the marketing firm.</div><!--viz:atb-in-out-degree--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"You at the centre with two incoming arrows from followers (in-degree 2) and three outgoing arrows to accounts you follow (out-degree 3).\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">In-degree and out-degree on Instagram</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 236\" role=\"img\" aria-label=\"Directed graph: two accounts, Asha and Dev, point arrows into you; you point arrows out to three accounts, brand, news and chef. In-degree 2, out-degree 3.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M86,60 L190.2,100.4\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><path d=\"M196.7,103 L188.9,103.7 L191.4,97.2 Z\" style=\"fill:var(--blue);stroke:none\"/><path d=\"M86,164 L190.2,123.6\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><path d=\"M196.7,121 L191.4,126.8 L188.9,120.3 Z\" style=\"fill:var(--blue);stroke:none\"/><path d=\"M242.3,100.7 L347.8,47.2\" style=\"stroke:var(--clay);stroke-width:2;fill:none\"/><path d=\"M354,44 L349.3,50.3 L346.2,44 Z\" style=\"fill:var(--clay);stroke:none\"/><path d=\"M245,112 L347,112\" style=\"stroke:var(--clay);stroke-width:2;fill:none\"/><path d=\"M354,112 L347,115.5 L347,108.5 Z\" style=\"fill:var(--clay);stroke:none\"/><path d=\"M242.3,123.3 L347.8,176.8\" style=\"stroke:var(--clay);stroke-width:2;fill:none\"/><path d=\"M354,180 L346.2,180 L349.3,173.7 Z\" style=\"fill:var(--clay);stroke:none\"/><rect x=\"20\" y=\"46\" width=\"66\" height=\"28\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"53\" y=\"64.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">Asha</text><rect x=\"20\" y=\"150\" width=\"66\" height=\"28\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"53\" y=\"168.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">Dev</text><rect x=\"354\" y=\"30\" width=\"66\" height=\"28\" rx=\"4\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"387\" y=\"48.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">brand</text><rect x=\"354\" y=\"98\" width=\"66\" height=\"28\" rx=\"4\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"387\" y=\"116.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">news</text><rect x=\"354\" y=\"166\" width=\"66\" height=\"28\" rx=\"4\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"387\" y=\"184.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">chef</text><circle cx=\"220\" cy=\"112\" r=\"25\" style=\"fill:var(--surface);stroke:var(--ink);stroke-width:2\"/><text x=\"220\" y=\"117\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">you</text><text x=\"53\" y=\"222\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">in-degree 2</text><text x=\"387\" y=\"222\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">out-degree 3</text><text x=\"220\" y=\"222\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">followers vs following</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">A brand choosing an influencer looks at in-degree: arrows coming in are the audience.</figcaption></figure><!--/viz:atb-in-out-degree-->\n  <h4>Live Lecture 4 additions</h4>\n  <ul style=\"font-size:14.5px\">\n   <li><strong>Roads.</strong> A two-way road is an undirected edge: A to B is the same distance as B to A. A <strong>one-way</strong> road is a directed edge, and the trip back may need a longer route — so in a weighted graph the weight A → B can differ from B → A. Properties combine: a graph can be directed <em>and</em> weighted</li>\n   <li><strong>Choosing an influencer is more than degree.</strong> Follower count (in-degree) is the key variable, but the followers must also be the <strong>relevant</strong> audience — to promote a degree programme you want a study or guidance influencer, not a beauty or finance one — and you must weigh what the influencer <strong>charges</strong></li>\n   <li><strong>Web pages</strong> link to each other and back to the main page, which no tree can show — another everyday graph</li>\n  </ul>"
    },
    {
     "t": "Weighted, connected and cyclic graphs",
     "src": "L#16 · L#18",
     "h": "\n  <h4>Weighted vs unweighted</h4>\n  <div class=\"def\">In an <b>unweighted</b> graph every connection counts the same (\"A knows B\"). In a <b>weighted</b> graph each edge carries a <b>strength value</b>, worked out from the context. Weight is <b>independent of direction</b>: a graph can be both directed and weighted.</div>\n  <ul style=\"font-size:14.5px\">\n   <li><strong>Family:</strong> siblings have a stronger link than distant cousins; a colleague or batchmate is weaker still</li>\n   <li><strong>Air routes:</strong> the number of flights between two cities — Delhi–Mumbai carries far more flights than Delhi to a smaller city</li>\n   <li><strong>Recommender systems:</strong> a YouTube channel you subscribe to and watch every time has a <strong>high</strong> weight, so its new videos keep being recommended; a channel shown to you for the first time (perhaps through paid promotion) has a <strong>low</strong> weight. The more you watch a kind of content, the stronger that link becomes</li>\n  </ul>\n  <h4>Connected vs disconnected</h4>\n  <div class=\"def\">In a <b>connected</b> graph every vertex can be reached from every other vertex — by a short path or a long one. In a <b>disconnected</b> graph some sections or subgraphs are isolated from the rest.</div>\n  <p style=\"font-size:14.5px\">By <strong>road only</strong>: Ahmedabad (Gujarat) to Silchar (Assam) is <strong>connected</strong> — far apart, but you can drive. Ahmedabad to Port Blair (Andaman and Nicobar Islands) is <strong>disconnected</strong>: there is sea in between. Whether a graph is connected depends on which edges you include.</p>\n  <h4>Cyclic vs acyclic</h4>\n  <div class=\"def\">A <b>cyclic</b> graph lets you return to the starting vertex <b>without retracing</b> the path you came by (A → B → C → A). In an <b>acyclic</b> graph the only way back is to retrace your steps.</div>\n  <div class=\"scroller\"><table><thead><tr><th>Example</th><th>Type</th><th>Why</th></tr></thead><tbody>\n   <tr><td>A is friends with B and C, and B is friends with C</td><td>Cyclic</td><td>A → B → C → A returns without retracing</td></tr>\n   <tr><td>A and B are parents of C</td><td>Acyclic</td><td>Moving forward from a parent, you cannot come back</td></tr>\n   <tr><td>Airports where every flight has a return flight</td><td>Cyclic</td><td>There are always onward and return routes</td></tr>\n   <tr><td>A metro line network with terminal stations, no retracing allowed</td><td>Acyclic</td><td>At a terminal the only way back is the way you came</td></tr>\n  </tbody></table></div>\n  <div class=\"def\"><b>Summary (L#16):</b> any graph can be described on four independent properties: <b>directed or undirected</b>, <b>weighted or unweighted</b>, <b>connected or disconnected</b>, <b>cyclic or acyclic</b>.</div><!--viz:atb-graph-property-pairs--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table of four graph properties with the lecture's examples: undirected or directed, unweighted or weighted, connected or disconnected, cyclic or acyclic.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Four independent ways to describe a graph</div><div class=\"scroller\"><table><thead><tr><th>Property</th><th>One kind</th><th>The other kind</th></tr></thead><tbody><tr><td><b>Direction</b></td><td><b>Undirected</b> · Facebook friends, two-way roads</td><td><b>Directed</b> · Instagram follows, one-way roads</td></tr><tr><td><b>Weight</b></td><td><b>Unweighted</b> · 'A knows B'</td><td><b>Weighted</b> · flights per route, watch history</td></tr><tr><td><b>Connectivity</b></td><td><b>Connected</b> · Ahmedabad to Silchar by road</td><td><b>Disconnected</b> · Ahmedabad to Port Blair by road</td></tr><tr><td><b>Cycles</b></td><td><b>Cyclic</b> · airports with return flights</td><td><b>Acyclic</b> · a metro line with terminal stations</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Each row is a separate question: one graph can be directed, weighted, connected and cyclic at once.</figcaption></figure><!--/viz:atb-graph-property-pairs-->\n  <h4>Live Lecture 4 additions</h4>\n  <p style=\"font-size:14.5px\">By road, Guwahati to Kanyakumari is <strong>connected</strong>. The Andaman Islands are <strong>disconnected</strong> from the mainland by road, yet the road network <em>within</em> one island is connected. Switch to flights and only the places with airports join the network. The answer depends on which network you are describing.</p><h4>From the L#18 slides</h4><ul style=\"font-size:14.5px\"><li><strong>Weight shown as thickness.</strong> The weighted-graph slide has no numbers. It draws a brother/sister edge thicker than a cousin edge to show the stronger link. A weight measures strength, and a diagram can show it with a thicker line as well as with a number</li><li><strong>The slides' connectivity examples.</strong> Connected: people of one community in India, where everyone can reach everyone else through some chain of links. Disconnected: a native Indian and a native Chinese person, treated as two groups with no chain of links between them, so some vertices or groups are isolated</li><li><strong>The slide's cycle wording is looser than the lecture's.</strong> The slide says a cyclic graph has a path that returns to the starting vertex. Keep the lecture's qualifier, <em>without retracing</em>. In any undirected graph you can go A → B → A along the same edge, so without the qualifier every graph with an edge would count as cyclic. The slide's acyclic example, A and B both joined to C, is acyclic for exactly this reason: the only way back is the way you came</li><li><strong>Two parents is not a cycle.</strong> The parents-only family graph has 9 vertices and 8 edges and is connected, yet it has no cycle at all: there is exactly one route between any two people. It counts as a graph rather than a tree because X and Y each have two parents. Each extra edge on the next slide closes a cycle: S–P gives S → P → X → S, Q–R gives Q → R → Y → Q, and X–Y gives A → P → X → Y → Q → A</li></ul>"
    },
    {
     "t": "Depth-first search (DFS) on a stack",
     "src": "L#17 · L#18",
     "h": "\n  <div class=\"def\"><b>Traversal</b> and <b>search</b> are used interchangeably for graphs: you traverse in order to search for something. There are two major types — <b>depth-first</b> and <b>breadth-first</b>. Trees needed pre-, in- and post-order because they have left and right children and one parent per node; graphs have neither.</div>\n  <p style=\"font-size:14.5px\">His traversal graph uses the same nine people as the Lecture 15 family graph, keeping only the parent–child links (no spouse or cousin edges):</p>\n  <div class=\"card\" style=\"font-family:var(--mono);font-size:13.5px\">V = {A, B, C, P, Q, R, S, X, Y}<br>E = {(A,P), (A,Q), (P,X), (X,S), (S,C), (Q,Y), (Y,R), (R,B)}</div>\n  <ul style=\"font-size:14.5px\">\n   <li><strong>No root.</strong> The starting vertex is given to the algorithm in advance; any vertex can be the start</li>\n   <li><strong>No left or right.</strong> When a vertex has two unvisited neighbours, either may go first, so <strong>more than one answer is correct</strong></li>\n  </ul>\n  <h4>Depth-first search</h4>\n  <div class=\"def\"><b>DFS</b> goes <b>as far as possible along one path</b> before backtracking: visit the first unvisited neighbour, keep going until there are no unexplored connections, then back up one level and repeat.</div>\n  <p style=\"font-size:14.5px\"><strong>Use:</strong> to find whether <strong>any connection exists</strong> between two nodes. Before accepting a friend request, DFS can follow friend → friend of friend → … to see whether the sender is somewhere in your network at all; if DFS cannot reach them, they are outside it.</p>\n  <div class=\"scroller\"><table><thead><tr><th>Start</th><th>First neighbour taken</th><th>DFS visit order</th></tr></thead><tbody>\n   <tr><td><strong>A</strong></td><td>P</td><td style=\"font-family:var(--mono)\">A P X S C · Q Y R B</td></tr>\n   <tr><td><strong>A</strong></td><td>Q</td><td style=\"font-family:var(--mono)\">A Q Y R B · P X S C</td></tr>\n   <tr><td><strong>X</strong> (his exercise)</td><td>S</td><td style=\"font-family:var(--mono)\">X S C · P A Q Y R B</td></tr>\n   <tr><td><strong>X</strong> (his exercise)</td><td>P</td><td style=\"font-family:var(--mono)\">X P A Q Y R B · S C</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">The dot marks the backtrack: from C, nothing is unvisited at S, X or P, so DFS climbs back to A and takes the other branch.</p>\n  <div class=\"def\"><b>From the lecture (L#17):</b> when a start vertex has two unvisited neighbours, both DFS paths are correct, and a <b>complete answer gives both possibilities</b>. Either one alone is correct in itself.</div>\n  <h4>Implementing DFS with a stack</h4>\n  <ol style=\"font-size:14.5px\">\n   <li><strong>Push</strong> the starting node onto the stack</li>\n   <li><strong>Pop</strong> the top node and mark it <strong>visited</strong></li>\n   <li>Find all connected <strong>unvisited</strong> neighbours of the popped node and <strong>push</strong> them</li>\n   <li>Go to step 2 <strong>until the stack is empty</strong></li>\n  </ol>\n  <p style=\"font-size:14.5px\">In his demonstration A's neighbours were pushed <strong>Q first, then P</strong>, so P sat on top and was popped next — giving A P X S C Q Y R B. The empty stack is how the algorithm knows every node has been visited. This is the stack application promised back in Lecture 9.</p><!--viz:atb-dfs-stack-trace--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Trace table of depth-first search from A using a stack: pop A and push Q then P; pop P, X, S, C in turn; Q is still waiting; pop Q, Y, R, B; the stack is then empty.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">DFS from A, one stack operation at a time</div><div class=\"scroller\"><table><thead><tr><th>Step</th><th>Pop + visit</th><th>Push</th><th>Stack (bottom → top)</th></tr></thead><tbody><tr><td style=\"font-family:var(--mono)\">0</td><td style=\"font-family:var(--mono)\">—</td><td style=\"font-family:var(--mono)\">A</td><td style=\"font-family:var(--mono)\">A</td></tr><tr><td style=\"font-family:var(--mono)\">1</td><td style=\"font-family:var(--mono)\">A</td><td style=\"font-family:var(--mono)\">Q, P</td><td style=\"font-family:var(--mono)\">Q P</td></tr><tr><td style=\"font-family:var(--mono)\">2</td><td style=\"font-family:var(--mono)\">P</td><td style=\"font-family:var(--mono)\">X</td><td style=\"font-family:var(--mono)\">Q X</td></tr><tr><td style=\"font-family:var(--mono)\">3</td><td style=\"font-family:var(--mono)\">X</td><td style=\"font-family:var(--mono)\">S</td><td style=\"font-family:var(--mono)\">Q S</td></tr><tr><td style=\"font-family:var(--mono)\">4</td><td style=\"font-family:var(--mono)\">S</td><td style=\"font-family:var(--mono)\">C</td><td style=\"font-family:var(--mono)\">Q C</td></tr><tr><td style=\"font-family:var(--mono)\">5</td><td style=\"font-family:var(--mono)\">C</td><td style=\"font-family:var(--mono)\">—</td><td style=\"font-family:var(--mono);background:var(--clay-soft)\">Q</td></tr><tr><td style=\"font-family:var(--mono)\">6</td><td style=\"font-family:var(--mono)\">Q</td><td style=\"font-family:var(--mono)\">Y</td><td style=\"font-family:var(--mono)\">Y</td></tr><tr><td style=\"font-family:var(--mono)\">7</td><td style=\"font-family:var(--mono)\">Y</td><td style=\"font-family:var(--mono)\">R</td><td style=\"font-family:var(--mono)\">R</td></tr><tr><td style=\"font-family:var(--mono)\">8</td><td style=\"font-family:var(--mono)\">R</td><td style=\"font-family:var(--mono)\">B</td><td style=\"font-family:var(--mono)\">B</td></tr><tr><td style=\"font-family:var(--mono)\">9</td><td style=\"font-family:var(--mono)\">B</td><td style=\"font-family:var(--mono)\">—</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">empty: stop</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin-top:8px;font-family:var(--mono)\">visited: A P X S C Q Y R B</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Q waits at the bottom of the stack the whole time the P branch is explored: that waiting is the backtrack.</figcaption></figure><!--/viz:atb-dfs-stack-trace-->\n  <h4>Live Lecture 4 additions</h4>\n  <ul style=\"font-size:14.5px\">\n   <li><strong>Graph vocabulary:</strong> in a graph he speaks of <strong>neighbours</strong>, not parents and children — everyone is at the same level</li>\n   <li><strong>DFS and BFS in real life:</strong> setting off on a bike in one direction to the far corner of the city is depth-first; arriving somewhere new and exploring the nearby market first, then the outer areas, is breadth-first</li>\n   <li><strong>Trees use the same two ideas.</strong> Pre-, in- and post-order are the depth-first family; level-order is breadth-first</li>\n   <li><strong>Coming later in the course:</strong> blockchain and Google's PageRank as business applications of these structures</li>\n  </ul>\n  <div class=\"def\"><b>From the lecture (L#18):</b> if a traversal question <b>does not name the starting vertex</b>, you must assume one — state it, then traverse from there.</div><!--viz:atb-traversal-families--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table: trees have three depth-first orders and level-order; graphs have DFS on a stack and BFS on a queue; real-life analogies of biking far versus exploring nearby.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">One idea, two structures: depth-first and breadth-first</div><div class=\"scroller\"><table><thead><tr><th></th><th>Depth-first</th><th>Breadth-first</th><th>Order rule</th></tr></thead><tbody><tr><td><b>Tree</b></td><td>Pre-, in-, post-order (named by the root's position)</td><td>Level-order</td><td>Left always before right</td></tr><tr><td><b>Graph</b></td><td style=\"background:var(--blue-soft)\">DFS, built on a <b>stack</b></td><td style=\"background:var(--blue-soft)\">BFS, built on a <b>queue</b></td><td>Any neighbour first, applied consistently</td></tr><tr><td><b>Real life</b></td><td>Biking to the far corner of the city</td><td>Exploring the nearby market first</td><td>—</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Trees fix left-before-right; graphs have no left or right, so the neighbour order is a free but consistent choice.</figcaption></figure><!--/viz:atb-traversal-families--><h4>A step the slides leave implicit</h4><p style=\"font-size:14.5px\">The four-step stack and queue recipes on the slides run cleanly on their traversal graph because that graph has no cycles. On a graph with cycles, a vertex can go onto the stack (or queue) twice before it is visited. On the 11-edge family graph, for example, X is pushed once when P is popped and again when S is popped. Followed word for word, the steps would then visit X a second time. The usual fix, which is not on the slides: when you pop or dequeue a vertex that is already visited, throw it away and carry on. Alternatively, mark a vertex as seen when you push it, so it never goes in twice.</p>"
    },
    {
     "t": "Breadth-first search (BFS) on a queue",
     "src": "L#17 · L#18",
     "h": "\n  <div class=\"def\"><b>BFS</b> visits <b>all nodes at the current level</b> before moving to the next: start at the given vertex (level 0), visit all its unvisited neighbours (level 1), then their neighbours (level 2), and so on outwards.</div>\n  <p style=\"font-size:14.5px\"><strong>Use:</strong> once you know two people are connected, BFS tells you the <strong>degree of separation</strong> — after how many hops you reach them. He tied it to the saying that everyone in the world is linked through a few degrees of separation, and to <em>Vasudhaiva Kutumbakam</em> (\"the whole earth is one family\").</p>\n  <div class=\"warnbox\"><b>Levels come from edges, not from the drawing.</b> In his diagram C, A and B are drawn on one row, but there is no edge between C and B. Measured in hops from A the levels are: <strong>0</strong> A · <strong>1</strong> P, Q · <strong>2</strong> X, Y · <strong>3</strong> S, R · <strong>4</strong> C, B.</div>\n  <div class=\"scroller\"><table><thead><tr><th>Start</th><th>Order at level 1</th><th>BFS visit order</th></tr></thead><tbody>\n   <tr><td><strong>A</strong></td><td>P, then Q</td><td style=\"font-family:var(--mono)\">A · P Q · X Y · S R · C B</td></tr>\n   <tr><td><strong>A</strong></td><td>Q, then P</td><td style=\"font-family:var(--mono)\">A · Q P · Y X · R S · B C</td></tr>\n   <tr><td><strong>X</strong> (his exercise)</td><td>S, then P</td><td style=\"font-family:var(--mono)\">X · S P · C A · Q · Y · R · B</td></tr>\n   <tr><td><strong>X</strong> (his exercise)</td><td>P, then S</td><td style=\"font-family:var(--mono)\">X · P S · A C · Q · Y · R · B</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">Either order within a level is correct, but the algorithm must apply its choice <strong>consistently</strong> — visiting Q before P means Q's neighbour Y comes before P's neighbour X.</p>\n  <h4>Implementing BFS with a queue</h4>\n  <ol style=\"font-size:14.5px\">\n   <li><strong>Enqueue</strong> the starting node</li>\n   <li><strong>Dequeue</strong> the front node and mark it <strong>visited</strong></li>\n   <li>Find all <strong>unvisited</strong> neighbours of the removed node and <strong>enqueue</strong> them</li>\n   <li>Go to step 2 <strong>until the queue is empty</strong></li>\n  </ol>\n  <div class=\"scroller\"><table><thead><tr><th></th><th>DFS</th><th>BFS</th></tr></thead><tbody>\n   <tr><td><strong>Strategy</strong></td><td>Go deep along one path, then backtrack</td><td>Finish each level before going deeper</td></tr>\n   <tr><td><strong>Built on</strong></td><td><strong>Stack</strong> (push, pop from the top)</td><td><strong>Queue</strong> (enqueue at the rear, dequeue from the front)</td></tr>\n   <tr><td><strong>Answers</strong></td><td>Is there <strong>any</strong> connection?</td><td><strong>How many hops</strong> away? (degree of separation)</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">If the stack and queue steps feel abstract, his advice was to rewatch Lectures 9–10 on push, pop, enqueue and dequeue.</p><!--viz:atb-bfs-levels--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"The traversal graph with each vertex labelled by its distance in hops from A. C and B are drawn on the top row beside A but are four hops away.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">BFS levels are hops, not rows on the page</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 262\" role=\"img\" aria-label=\"Graph of nine vertices drawn in three rows. Edges A-P, A-Q, P-X, X-S, S-C, Q-Y, Y-R, R-B. Hop counts from A: A 0, P and Q 1, X and Y 2, S and R 3, C and B 4.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M220,44 L165,124\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M220,44 L275,124\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M165,124 L112,204\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M112,204 L60,124\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M60,124 L60,44\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M275,124 L328,204\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M328,204 L380,124\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M380,124 L380,44\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><circle cx=\"60\" cy=\"44\" r=\"17\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"60\" y=\"49\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">C</text><circle cx=\"220\" cy=\"44\" r=\"17\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"220\" y=\"49\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A</text><circle cx=\"380\" cy=\"44\" r=\"17\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"380\" y=\"49\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">B</text><circle cx=\"60\" cy=\"124\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"60\" y=\"129\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">S</text><circle cx=\"165\" cy=\"124\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"165\" y=\"129\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">P</text><circle cx=\"275\" cy=\"124\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"275\" y=\"129\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Q</text><circle cx=\"380\" cy=\"124\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"380\" y=\"129\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">R</text><circle cx=\"112\" cy=\"204\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"112\" y=\"209\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">X</text><circle cx=\"328\" cy=\"204\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"328\" y=\"209\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Y</text><text x=\"220\" y=\"248\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">levels from A: 0 A · 1 P, Q · 2 X, Y · 3 S, R · 4 C, B</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">C and B sit on A's row in the drawing, yet BFS reaches them last: level 4.</figcaption></figure><!--/viz:atb-bfs-levels--><!--viz:atb-bfs-queue-trace--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Trace table of breadth-first search from A using a queue: dequeue A and enqueue P and Q; then dequeue P, Q, X, Y, S, R, C, B in turn, each enqueuing its unvisited neighbour, until the queue is empty.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">BFS from A, one queue operation at a time</div><div class=\"scroller\"><table><thead><tr><th>Step</th><th>Dequeue + visit</th><th>Enqueue</th><th>Queue (front → rear)</th></tr></thead><tbody><tr><td style=\"font-family:var(--mono)\">0</td><td style=\"font-family:var(--mono)\">—</td><td style=\"font-family:var(--mono)\">A</td><td style=\"font-family:var(--mono)\">A</td></tr><tr><td style=\"font-family:var(--mono)\">1</td><td style=\"font-family:var(--mono)\">A</td><td style=\"font-family:var(--mono)\">P, Q</td><td style=\"font-family:var(--mono)\">P Q</td></tr><tr><td style=\"font-family:var(--mono)\">2</td><td style=\"font-family:var(--mono)\">P</td><td style=\"font-family:var(--mono)\">X</td><td style=\"font-family:var(--mono)\">Q X</td></tr><tr><td style=\"font-family:var(--mono)\">3</td><td style=\"font-family:var(--mono)\">Q</td><td style=\"font-family:var(--mono)\">Y</td><td style=\"font-family:var(--mono)\">X Y</td></tr><tr><td style=\"font-family:var(--mono)\">4</td><td style=\"font-family:var(--mono)\">X</td><td style=\"font-family:var(--mono)\">S</td><td style=\"font-family:var(--mono)\">Y S</td></tr><tr><td style=\"font-family:var(--mono)\">5</td><td style=\"font-family:var(--mono)\">Y</td><td style=\"font-family:var(--mono)\">R</td><td style=\"font-family:var(--mono)\">S R</td></tr><tr><td style=\"font-family:var(--mono)\">6</td><td style=\"font-family:var(--mono)\">S</td><td style=\"font-family:var(--mono)\">C</td><td style=\"font-family:var(--mono)\">R C</td></tr><tr><td style=\"font-family:var(--mono)\">7</td><td style=\"font-family:var(--mono)\">R</td><td style=\"font-family:var(--mono)\">B</td><td style=\"font-family:var(--mono)\">C B</td></tr><tr><td style=\"font-family:var(--mono)\">8</td><td style=\"font-family:var(--mono)\">C</td><td style=\"font-family:var(--mono)\">—</td><td style=\"font-family:var(--mono)\">B</td></tr><tr><td style=\"font-family:var(--mono)\">9</td><td style=\"font-family:var(--mono)\">B</td><td style=\"font-family:var(--mono)\">—</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">empty: stop</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin-top:8px;font-family:var(--mono)\">visited: A P Q X Y S R C B</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">New nodes join at the rear, so a whole level is served before the next one starts.</figcaption></figure><!--/viz:atb-bfs-queue-trace--><h4>\"Minimum\" degree of separation (L#18 slides)</h4><p style=\"font-size:14.5px\">The slide is precise here. BFS finds the <strong>minimum</strong> degree of separation, meaning the fewest hops. BFS finishes every vertex 1 hop away before it touches any vertex 2 hops away, so the level where a vertex first appears is its shortest distance from the start. DFS makes no such promise, and the route it happens to follow can be much longer.</p><div class=\"card\">Worked check on the 11-edge family graph (with the spouse and cousin edges), starting at A and taking neighbours alphabetically. DFS visits <span style=\"font-family:var(--mono)\">A P S C X Y Q R B</span> and first reaches Q along A → P → S → X → Y → Q, which is five edges. But A–Q is an edge, so Q is only 1 hop away. BFS visits <span style=\"font-family:var(--mono)\">A P Q S X R Y C B</span> and puts Q at level 1. On the slides' 8-edge traversal graph the two never disagree on distance, because there is only one route between any two vertices.</div>"
    },
    {
     "t": "Textbook: Graphs",
     "src": "Codeless DSA ch5",
     "h": "<p>A graph is a set of nodes (vertices) joined by links (edges), used to show how things are connected. Compared with a tree, a graph has no root and no parent-child roles, nodes can have many connections, and cycles are allowed — a tree is effectively a graph with no cycles. Edges can be directed (one-way, drawn as arrows) or undirected (two-way), and they can carry weights such as distance, cost or time. The chapter ties this to two business applications: social networks, where profiles are nodes and friendships are edges, and graph databases, which store relationships directly to avoid the heavy table-joining that slows relational databases at scale. For a manager, graphs are the natural model for route networks, supply chains, referral webs and fraud rings.</p><!--viz:atb-graph-kinds--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three triangles of nodes A, B, C. Undirected: plain lines, travel either way. Directed: arrows A to B, B to C, C to A, travel one way only. Weighted: edges labelled 5, 3 and 7.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Undirected, directed and weighted graphs</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 176\" role=\"img\" aria-label=\"Three small graphs on nodes A, B, C: undirected with plain lines, directed with arrows, and weighted with numbers on the edges.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<path d=\"M65.3,48 L35.7,102\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/>\n<path d=\"M80.7,48 L110.3,102\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/>\n<path d=\"M44,116 L102,116\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/>\n<circle cx=\"73\" cy=\"34\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"73\" y=\"39\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A</text>\n<circle cx=\"28\" cy=\"116\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"28\" y=\"121\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">B</text>\n<circle cx=\"118\" cy=\"116\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"118\" y=\"121\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">C</text>\n<text x=\"73\" y=\"164\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-weight:700\">Undirected</text>\n<path d=\"M211.8,48.9 L187.5,93.2\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/>\n<path d=\"M183.7,100.2 L184,91.3 L191,95.1 Z\" style=\"fill:var(--ink-2);stroke:none\"/>\n<path d=\"M192,116 L239,116\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/>\n<path d=\"M247,116 L239,120 L239,112 Z\" style=\"fill:var(--ink-2);stroke:none\"/>\n<path d=\"M256.8,101.1 L232.5,56.8\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/>\n<path d=\"M228.7,49.8 L236,54.9 L229,58.7 Z\" style=\"fill:var(--ink-2);stroke:none\"/>\n<circle cx=\"220\" cy=\"34\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"220\" y=\"39\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A</text>\n<circle cx=\"175\" cy=\"116\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"175\" y=\"121\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">B</text>\n<circle cx=\"265\" cy=\"116\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"265\" y=\"121\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">C</text>\n<text x=\"220\" y=\"164\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-weight:700\">Directed</text>\n<path d=\"M359.3,48 L329.7,102\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/>\n<path d=\"M374.7,48 L404.3,102\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/>\n<path d=\"M338,116 L396,116\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/>\n<text x=\"331\" y=\"72\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:14px;font-weight:700;font-family:var(--mono)\">5</text>\n<text x=\"404\" y=\"72\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:14px;font-weight:700;font-family:var(--mono)\">3</text>\n<text x=\"367\" y=\"136\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:14px;font-weight:700;font-family:var(--mono)\">7</text>\n<circle cx=\"367\" cy=\"34\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"367\" y=\"39\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A</text>\n<circle cx=\"322\" cy=\"116\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"322\" y=\"121\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">B</text>\n<circle cx=\"412\" cy=\"116\" r=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"412\" y=\"121\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">C</text>\n<text x=\"367\" y=\"164\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-weight:700\">Weighted</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Direction says which way you may travel; weight says what each step costs (distance, time, money).</figcaption></figure><!--/viz:atb-graph-kinds--><!--viz:atb-tree-vs-graph--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Left: tree with root A, children B and C, and D under B. Right: the same four nodes plus an edge from C to D, drawn in clay, which forms the cycle A to B to D to C and back to A.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">One extra edge turns a tree into a graph</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 210\" role=\"img\" aria-label=\"Left: a tree with root A, children B and C, and D under B. Right: the same nodes with an extra edge C to D, which gives D two connections upward and creates the cycle A, B, D, C.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<path d=\"M99.7,43.6 L70.3,82.4\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M120.3,43.6 L149.7,82.4\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<path d=\"M60,113 L60,143\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<circle cx=\"110\" cy=\"30\" r=\"17\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"110\" y=\"35\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A</text>\n<circle cx=\"60\" cy=\"96\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"60\" y=\"101\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">B</text>\n<circle cx=\"160\" cy=\"96\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"160\" y=\"101\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">C</text>\n<circle cx=\"60\" cy=\"160\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"60\" y=\"165\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">D</text>\n<path d=\"M319.7,43.6 L290.3,82.4\" style=\"stroke:var(--clay);stroke-width:2;fill:none\"/>\n<path d=\"M340.3,43.6 L369.7,82.4\" style=\"stroke:var(--clay);stroke-width:2;fill:none\"/>\n<path d=\"M280,113 L280,143\" style=\"stroke:var(--clay);stroke-width:2;fill:none\"/>\n<path d=\"M365.7,105.2 L294.3,150.8\" style=\"stroke:var(--clay);stroke-width:2;fill:none\"/>\n<circle cx=\"330\" cy=\"30\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"330\" y=\"35\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A</text>\n<circle cx=\"280\" cy=\"96\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"280\" y=\"101\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">B</text>\n<circle cx=\"380\" cy=\"96\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"380\" y=\"101\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">C</text>\n<circle cx=\"280\" cy=\"160\" r=\"17\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"280\" y=\"165\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">D</text>\n<text x=\"150\" y=\"35\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">root</text>\n<text x=\"110\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">tree: one parent each</text>\n<text x=\"330\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">graph: cycle allowed</text>\n<text x=\"304\" y=\"172\" style=\"fill:var(--clay);font-size:13px\">D: 2 parents</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">A tree is a graph with no cycles; once a node has two parents there is no single root, so it is just a graph.</figcaption></figure><!--/viz:atb-tree-vs-graph--><!--viz:atb-cheapest-path--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Network: W–X 4, W–Y 2, X–Y 1, X–S 5, Y–Z 8, Z–S 3. The highlighted path W, Y, X, S costs 8; the shorter-looking path W, X, S costs 9; W, Y, Z, S costs 13.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">In a weighted graph, cheapest is not fewest steps</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 250\" role=\"img\" aria-label=\"Weighted delivery network from warehouse W to store S through hubs X, Y and Z. The cheapest route W to Y to X to S costs 8 and is highlighted; the route W to X to S has fewer edges but costs 9.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<path d=\"M56.3,102.4 L173.7,47.6\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<text x=\"106\" y=\"64\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-weight:700;font-family:var(--mono)\">4</text>\n<path d=\"M56.3,117.6 L173.7,172.4\" style=\"stroke:var(--blue);stroke-width:2.5;fill:none\"/>\n<text x=\"106\" y=\"164\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:14px;font-weight:700;font-family:var(--mono)\">2</text>\n<path d=\"M190,58 L190,162\" style=\"stroke:var(--blue);stroke-width:2.5;fill:none\"/>\n<text x=\"204\" y=\"115\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:14px;font-weight:700;font-family:var(--mono)\">1</text>\n<path d=\"M207.5,44.2 L382.5,85.8\" style=\"stroke:var(--blue);stroke-width:2.5;fill:none\"/>\n<text x=\"300\" y=\"52\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:14px;font-weight:700;font-family:var(--mono)\">5</text>\n<path d=\"M208,180 L302,180\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<text x=\"255\" y=\"172\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-weight:700;font-family:var(--mono)\">8</text>\n<path d=\"M332,166.5 L388,103.5\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/>\n<text x=\"372\" y=\"146\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:14px;font-weight:700;font-family:var(--mono)\">3</text>\n<circle cx=\"40\" cy=\"110\" r=\"18\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"40\" y=\"115\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">W</text>\n<circle cx=\"190\" cy=\"40\" r=\"18\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"190\" y=\"45\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">X</text>\n<circle cx=\"190\" cy=\"180\" r=\"18\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"190\" y=\"185\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">Y</text>\n<circle cx=\"320\" cy=\"180\" r=\"18\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/>\n<text x=\"320\" y=\"185\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">Z</text>\n<circle cx=\"400\" cy=\"90\" r=\"18\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/>\n<text x=\"400\" y=\"95\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">S</text>\n<text x=\"14\" y=\"240\" style=\"fill:var(--blue);font-size:13px;font-family:var(--mono)\">W→Y→X→S = 2 + 1 + 5 = 8 (cheapest)</text>\n<text x=\"14\" y=\"222\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">W→X→S = 4 + 5 = 9 (fewer edges)</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Add the weights along each path: route-finding tools compare total cost, not the number of hops.</figcaption></figure><!--/viz:atb-cheapest-path--><p><strong>Graphs show connections</strong> — A graph models connections: nodes stand for objects and edges for the links between them. Its value is that relationships become visible and can be analysed, which is why many search algorithms are built on graphs.<br><em>e.g.</em> Warehouses as nodes and truck routes as edges.</p><p><strong>Vertices, edges and adjacency</strong> — Nodes of a graph are also called vertices (or objects); the links between them are edges. Two vertices joined by an edge are adjacent.<br><em>e.g.</em> In a supplier network, a factory is adjacent to every supplier it buys from directly.</p><p><strong>Graphs vs trees</strong> — A tree has a root and strict parent-child roles, with one parent per child. A graph has no root and no parents or children, and a node can link to many others in any pattern, so it models messy real-world relationships better. A tree can be seen as a minimalist graph — one without cycles — so most graph algorithms also work on trees.<br><em>e.g.</em> An org chart is a tree; the web of who emails whom inside the company is a graph.</p><p><strong>Directed and undirected graphs</strong> — In an undirected graph, edges have no direction and can be travelled either way. In a directed graph (digraph), each edge has a direction, drawn as an arrow, and can be travelled only that way.<br><em>e.g.</em> Mutual connections on a professional network are undirected; 'follows' on a social app are directed.</p><p><strong>Paths, loops and subgraphs</strong> — A path is the route of edges followed to get from one vertex to another. A loop is an edge that starts and ends at the same vertex. A subgraph is a graph contained within a larger graph.<br><em>e.g.</em> The route Delhi → Jaipur → Ahmedabad is a path; the northern-region routes form a subgraph of the national network.</p><p><strong>Weighted graphs</strong> — When each edge carries a number — distance, time, cost, capacity — the graph is weighted. Weighted graphs may be directed or undirected, and many important algorithms, such as route finding, depend on them.<br><em>e.g.</em> Road links labelled with travel minutes for a delivery-routing engine.</p><p><strong>Social networks as graphs</strong> — Each profile is a node; each friendship is an edge. As people connect, the graph grows and circles of friends emerge, and variants of this simple model sit at the core of real social platforms.<br><em>e.g.</em> Suggesting 'people you may know' by looking at friends of friends.</p><p><strong>File systems vs relational databases</strong> — Storing data in plain files is limited in what you can do, inconsistent in format, prone to duplication and weak on security. A relational database (RDBMS) stores data in tables of rows and columns described by a schema, and links tables through keys: each table has a primary key, and foreign keys set up relationships between tables.<br><em>e.g.</em> An Orders table holds CustomerID as a foreign key pointing to the Customers table's primary key.</p><p><strong>Graph databases</strong> — In a relational database, operations across many connected tables become very computing-intensive as data grows. A graph database stores data as a graph, keeping the relationships themselves as first-class data, which avoids much of that cost for highly connected data.<br><em>e.g.</em> Tracing a fraud ring through accounts that share phone numbers, devices and addresses several hops apart.</p><div class=\"card\"><strong>Case: The growing friend circle</strong> <em>(Chapter 5, Graphs and Social Networking Applications)</em><p>The book builds a social network one person at a time: a lone profile is just a page, two school friends form the first edge, and further meetings at work and at a dinner add nodes and edges until a small, interlinked circle appears — the basic model behind real social platforms.</p><p><em>Lesson:</em> Profiles are nodes, relationships are edges; value grows with the connections.</p><p><em>Think:</em> Should 'follows' on a creator platform and 'friends' on a mutual-connection platform be modelled with the same kind of edge? Why or why not?</p></div><div class=\"card\"><strong>Case: Relational vs graph databases</strong> <em>(Chapter 5, The Graph Database)</em><p>The book traces data storage from plain files (duplication, inconsistent formats, weak security) to relational databases with tables, schemas and primary/foreign keys, then notes that queries across many connected tables become expensive at scale. Graph databases address this by storing the relationships as a graph.</p><p><em>Lesson:</em> Highly connected data favours storing the connections themselves.</p><p><em>Think:</em> Which business questions — monthly sales totals or 'who is linked to whom within three steps' — favour a graph database, and why?</p></div><details><summary>Worked problem: Reading a small referral network</summary><p>A referral programme records mutual connections: Priya–Arjun, Arjun–Meera, Arjun–Kabir, Kabir–Priya. Who is adjacent to Arjun, how many edges are there, is there a cycle, and what is the shortest path from Meera to Priya?</p><ol><li>Connections are mutual, so the graph is undirected.</li><li>Edges touching Arjun: Priya, Meera, Kabir → all three are adjacent to Arjun.</li><li>Count the listed links: 4 edges.</li><li>Priya → Arjun → Kabir → Priya returns to the start, so there is a cycle — this network is not a tree.</li><li>Meera's only neighbour is Arjun, and Arjun is adjacent to Priya: Meera → Arjun → Priya.</li></ol><p><strong>Answer:</strong> Arjun is adjacent to Priya, Meera and Kabir; 4 edges; yes, a cycle (Priya–Arjun–Kabir); shortest path Meera → Arjun → Priya, 2 edges.</p></details><div class=\"def\"><b>Book vs lecture — Graphs not yet in the lecture record.</b> Book: Covers graph vocabulary, directed/weighted graphs, social networks and graph databases at a high level. Lecture: Lecture #15 (Graphs) was released after the Quiz 1 cut-off; its content is not in the hub's record. <b>Check definitions (especially loop vs cycle, path, degree) against lecture #15 before Quiz 2; the lecture wins on terms.</b></div><div class=\"def\"><b>Book vs lecture — Paths in trees vs graphs.</b> Book: Contains a garbled line saying trees can represent multiple paths between only two nodes. Lecture: Not yet recorded. <b>Standard fact: in a tree there is exactly one path between any two nodes; graphs can have many, because they allow cycles. Use that.</b></div><div class=\"def\"><b>Book vs lecture — Vertex introduced from geometry.</b> Book: Introduces a vertex as the point where two lines meet, via dimensions, points and lines. Lecture: Not yet recorded. <b>In data structures a vertex is simply a node of a graph; the geometry is only an analogy.</b></div>"
    }
   ]
  },
  {
   "id": "searching",
   "title": "Searching algorithms",
   "tag": "From the textbook",
   "lede": "",
   "topics": [
    {
     "t": "Textbook: Linear and Binary Search",
     "src": "Codeless DSA ch6",
     "h": "<!--viz:atb-binary-halving--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three rows of the sorted list 5 to 75. Look 1: whole list, middle index 5 holds 33, less than 67, keep the right half. Look 2: indices 6 to 10, middle 8 holds 52, keep the right. Look 3: indices 9 to 10, middle 9 holds 67, found.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Binary search throws away half each look</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 212\" role=\"img\" aria-label=\"Binary search for 67 in eleven sorted values. Look 1 checks index 5 (33), look 2 checks index 8 (52), look 3 checks index 9 and finds 67. Discarded cells are greyed out each time.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<g style=\"font-size:13px;font-family:var(--mono);fill:var(--ink-3)\"><text x=\"82.5\" y=\"18\" text-anchor=\"middle\">0</text><text x=\"115.5\" y=\"18\" text-anchor=\"middle\">1</text><text x=\"148.5\" y=\"18\" text-anchor=\"middle\">2</text><text x=\"181.5\" y=\"18\" text-anchor=\"middle\">3</text><text x=\"214.5\" y=\"18\" text-anchor=\"middle\">4</text><text x=\"247.5\" y=\"18\" text-anchor=\"middle\">5</text><text x=\"280.5\" y=\"18\" text-anchor=\"middle\">6</text><text x=\"313.5\" y=\"18\" text-anchor=\"middle\">7</text><text x=\"346.5\" y=\"18\" text-anchor=\"middle\">8</text><text x=\"379.5\" y=\"18\" text-anchor=\"middle\">9</text><text x=\"412.5\" y=\"18\" text-anchor=\"middle\">10</text></g>\n<text x=\"14\" y=\"48\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">look 1</text>\n<rect x=\"66\" y=\"28\" width=\"363\" height=\"30\" style=\"fill:var(--surface-2);stroke:none\"/>\n<rect x=\"66\" y=\"28\" width=\"363\" height=\"30\" style=\"fill:var(--surface);stroke:none\"/>\n<path d=\"M99,28 L99,58 M132,28 L132,58 M165,28 L165,58 M198,28 L198,58 M231,28 L231,58 M264,28 L264,58 M297,28 L297,58 M330,28 L330,58 M363,28 L363,58 M396,28 L396,58\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/>\n<rect x=\"66\" y=\"28\" width=\"363\" height=\"30\" rx=\"0\" style=\"fill:none;stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"231\" y=\"28\" width=\"33\" height=\"30\" rx=\"0\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:2\"/>\n<g style=\"font-size:13px;font-family:var(--mono);fill:var(--ink)\"><text x=\"82.5\" y=\"48\" text-anchor=\"middle\">5</text><text x=\"115.5\" y=\"48\" text-anchor=\"middle\">9</text><text x=\"148.5\" y=\"48\" text-anchor=\"middle\">14</text><text x=\"181.5\" y=\"48\" text-anchor=\"middle\">21</text><text x=\"214.5\" y=\"48\" text-anchor=\"middle\">28</text><text x=\"280.5\" y=\"48\" text-anchor=\"middle\">40</text><text x=\"313.5\" y=\"48\" text-anchor=\"middle\">46</text><text x=\"346.5\" y=\"48\" text-anchor=\"middle\">52</text><text x=\"379.5\" y=\"48\" text-anchor=\"middle\">67</text><text x=\"412.5\" y=\"48\" text-anchor=\"middle\">75</text></g>\n<g style=\"font-size:13px;font-family:var(--mono);fill:var(--ink-3)\"></g>\n<g style=\"font-size:13px;font-family:var(--mono);fill:var(--ink);font-weight:700\"><text x=\"247.5\" y=\"48\" text-anchor=\"middle\">33</text></g>\n<text x=\"66\" y=\"76\" style=\"fill:var(--ink-2);font-size:13px\">33 &lt; 67: keep right half, low = 6</text>\n<text x=\"14\" y=\"110\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">look 2</text>\n<rect x=\"66\" y=\"90\" width=\"363\" height=\"30\" style=\"fill:var(--surface-2);stroke:none\"/>\n<rect x=\"264\" y=\"90\" width=\"165\" height=\"30\" style=\"fill:var(--surface);stroke:none\"/>\n<path d=\"M99,90 L99,120 M132,90 L132,120 M165,90 L165,120 M198,90 L198,120 M231,90 L231,120 M264,90 L264,120 M297,90 L297,120 M330,90 L330,120 M363,90 L363,120 M396,90 L396,120\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/>\n<rect x=\"66\" y=\"90\" width=\"363\" height=\"30\" rx=\"0\" style=\"fill:none;stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"330\" y=\"90\" width=\"33\" height=\"30\" rx=\"0\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:2\"/>\n<g style=\"font-size:13px;font-family:var(--mono);fill:var(--ink)\"><text x=\"280.5\" y=\"110\" text-anchor=\"middle\">40</text><text x=\"313.5\" y=\"110\" text-anchor=\"middle\">46</text><text x=\"379.5\" y=\"110\" text-anchor=\"middle\">67</text><text x=\"412.5\" y=\"110\" text-anchor=\"middle\">75</text></g>\n<g style=\"font-size:13px;font-family:var(--mono);fill:var(--ink-3)\"><text x=\"82.5\" y=\"110\" text-anchor=\"middle\">5</text><text x=\"115.5\" y=\"110\" text-anchor=\"middle\">9</text><text x=\"148.5\" y=\"110\" text-anchor=\"middle\">14</text><text x=\"181.5\" y=\"110\" text-anchor=\"middle\">21</text><text x=\"214.5\" y=\"110\" text-anchor=\"middle\">28</text><text x=\"247.5\" y=\"110\" text-anchor=\"middle\">33</text></g>\n<g style=\"font-size:13px;font-family:var(--mono);fill:var(--ink);font-weight:700\"><text x=\"346.5\" y=\"110\" text-anchor=\"middle\">52</text></g>\n<text x=\"66\" y=\"138\" style=\"fill:var(--ink-2);font-size:13px\">52 &lt; 67: keep right half, low = 9</text>\n<text x=\"14\" y=\"172\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">look 3</text>\n<rect x=\"66\" y=\"152\" width=\"363\" height=\"30\" style=\"fill:var(--surface-2);stroke:none\"/>\n<rect x=\"363\" y=\"152\" width=\"66\" height=\"30\" style=\"fill:var(--surface);stroke:none\"/>\n<path d=\"M99,152 L99,182 M132,152 L132,182 M165,152 L165,182 M198,152 L198,182 M231,152 L231,182 M264,152 L264,182 M297,152 L297,182 M330,152 L330,182 M363,152 L363,182 M396,152 L396,182\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/>\n<rect x=\"66\" y=\"152\" width=\"363\" height=\"30\" rx=\"0\" style=\"fill:none;stroke:var(--rule-2);stroke-width:1.5\"/>\n<rect x=\"363\" y=\"152\" width=\"33\" height=\"30\" rx=\"0\" style=\"fill:var(--good-soft);stroke:var(--good);stroke-width:2\"/>\n<g style=\"font-size:13px;font-family:var(--mono);fill:var(--ink)\"><text x=\"412.5\" y=\"172\" text-anchor=\"middle\">75</text></g>\n<g style=\"font-size:13px;font-family:var(--mono);fill:var(--ink-3)\"><text x=\"82.5\" y=\"172\" text-anchor=\"middle\">5</text><text x=\"115.5\" y=\"172\" text-anchor=\"middle\">9</text><text x=\"148.5\" y=\"172\" text-anchor=\"middle\">14</text><text x=\"181.5\" y=\"172\" text-anchor=\"middle\">21</text><text x=\"214.5\" y=\"172\" text-anchor=\"middle\">28</text><text x=\"247.5\" y=\"172\" text-anchor=\"middle\">33</text><text x=\"280.5\" y=\"172\" text-anchor=\"middle\">40</text><text x=\"313.5\" y=\"172\" text-anchor=\"middle\">46</text><text x=\"346.5\" y=\"172\" text-anchor=\"middle\">52</text></g>\n<g style=\"font-size:13px;font-family:var(--mono);fill:var(--ink);font-weight:700\"><text x=\"379.5\" y=\"172\" text-anchor=\"middle\">67</text></g>\n<text x=\"66\" y=\"200\" style=\"fill:var(--good);font-size:13px\">67 = 67: found at index 9</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Eleven items, three looks; linear search would have needed ten. The greyed cells are never checked again.</figcaption></figure><!--/viz:atb-binary-halving--><!--viz:atb-search-scaling--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table: for 10, 100, 1,000, 1 lakh and 1 crore records, linear search needs up to 10, 100, 1,000, 1 lakh and 1 crore comparisons, binary search up to 4, 7, 10, 17 and 24.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Worst-case comparisons as the data grows</div><div class=\"scroller\"><table><thead><tr><th>Records n</th><th>Linear search (worst)</th><th>Binary search (worst)</th></tr></thead><tbody><tr><td style=\"font-family:var(--mono)\">10</td><td style=\"font-family:var(--mono);background:var(--bad-soft)\">10</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">4</td></tr><tr><td style=\"font-family:var(--mono)\">100</td><td style=\"font-family:var(--mono);background:var(--bad-soft)\">100</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">7</td></tr><tr><td style=\"font-family:var(--mono)\">1,000</td><td style=\"font-family:var(--mono);background:var(--bad-soft)\">1,000</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">10</td></tr><tr><td style=\"font-family:var(--mono)\">1,00,000 (1 lakh)</td><td style=\"font-family:var(--mono);background:var(--bad-soft)\">1,00,000</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">17</td></tr><tr><td style=\"font-family:var(--mono)\">1,00,00,000 (1 crore)</td><td style=\"font-family:var(--mono);background:var(--bad-soft)\">1,00,00,000</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">24</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin:8px 0 0\">Binary worst case = <span style=\"font-family:var(--mono)\">⌊log₂ n⌋ + 1</span> comparisons; the list must be sorted.</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Multiply the data by 10 and linear search does 10 times the work; binary search adds only 3 or 4 comparisons.</figcaption></figure><!--/viz:atb-search-scaling--><!--viz:atb-unsorted-fails--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Trace of binary search for 25 in the unsorted list 40, 15, 70, 25, 90: it checks 70, discards the right half, checks 40, discards again, and reports not found although 25 is at index 3.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Binary search on unsorted data gives a wrong answer</div><p style=\"font-size:13.5px;color:var(--ink-2);margin:0 0 8px\"><span style=\"font-family:var(--mono)\">a = [40, 15, 70, 25, 90]</span> (not sorted) · target 25 · <span style=\"font-family:var(--mono)\">mid = (low + high) // 2</span></p><div class=\"scroller\"><table><thead><tr><th>Look</th><th>low, high</th><th>mid</th><th>a[mid]</th><th>Decision</th></tr></thead><tbody><tr><td>1</td><td style=\"font-family:var(--mono)\"><span style=\"font-family:var(--mono)\">0, 4</span></td><td style=\"font-family:var(--mono)\">2</td><td style=\"font-family:var(--mono)\">70</td><td>25 &lt; 70 → keep left: high = 1</td></tr><tr><td>2</td><td style=\"font-family:var(--mono)\"><span style=\"font-family:var(--mono)\">0, 1</span></td><td style=\"font-family:var(--mono)\">0</td><td style=\"font-family:var(--mono)\">40</td><td>25 &lt; 40 → keep left: high = −1</td></tr><tr><td>3</td><td>—</td><td>—</td><td>—</td><td style=\"background:var(--bad-soft)\">low &gt; high → “not found”, yet 25 sits at index 3</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Discarding a half is only safe when the data is sorted; otherwise use linear search or sort first.</figcaption></figure><!--/viz:atb-unsorted-fails--><p><strong>Linear search</strong> — Linear search compares the target with each element in turn from the start, returning the position when it matches. It works on any type of data and does not need the data sorted, but in the worst case it must look at every element: O(n).<br><em>e.g.</em> Scanning an unsorted list of 500 vendor names for 'Shree Packaging'.</p><p><strong>Lucky hits do not change the complexity</strong> — If the target happens to be first, linear search finishes immediately, which can fool a tester into thinking it is O(1). Swap the item to the end and it must scan everything again. The algorithm is still linear: its cost depends on where the item sits, and the worst case grows with n.<br><em>e.g.</em> A demo that always searches for the first SKU in the file looks instant; production searches will not.</p><p><strong>Binary search</strong> — Binary search works on sorted data. It compares the target with the middle element; if the middle is smaller, everything up to and including it is discarded, if larger, everything from it onward is discarded, and the process repeats on the remaining half until the target is found or nothing is left.<br><em>e.g.</em> Finding cheque number 40 in a sorted bundle by opening at the middle and discarding the wrong half each time.</p><p><strong>Why binary search is O(log n)</strong> — Each comparison halves the remaining list, so the number of comparisons is about the number of halvings needed to get down to one item — log₂ n. Doubling the list adds only one comparison. The book ranks this as second only to constant time.<br><span style=\"font-family:var(--mono)\">worst-case comparisons ≈ ⌊log₂ n⌋ + 1</span><br><em>e.g.</em> A sorted list of 10 lakh records needs at most 20 comparisons; linear search could need 10 lakh.</p><p><strong>The sorting precondition</strong> — Binary search's only caveat — and it is a big one — is that the data must already be sorted. On unsorted data, discarding half the list can throw away the very item you are looking for.<br><em>e.g.</em> Binary search on a customer list in sign-up order can wrongly report that an existing customer is missing.</p><p><strong>Choosing between linear and binary search</strong> — For small lists the difference is negligible and linear search's simplicity and lack of preconditions win. As data grows into lakhs and crores of records, the gap becomes enormous, and keeping data sorted to enable binary search pays off.<br><em>e.g.</em> A 30-row supplier sheet: linear search is fine. A 1-crore account master queried constantly: binary search (or an index) is essential.</p>"
    }
   ]
  },
  {
   "id": "blockchain",
   "title": "Blockchain",
   "tag": "Lecture 20 · Module 3 finale",
   "lede": "Where the module's structures meet: linked-list-style blocks joined by hashes, a Merkle tree per block, and a network of nodes that out-votes tampering.",
   "topics": [
    {
     "t": "Blocks, hashes and the chain",
     "src": "L#20",
     "h": "\n  <div class=\"def\">A <b>blockchain</b> stores data in <b>blocks</b>, always adding a new block to the <b>end</b>, and links each block to the previous one by storing the previous block's <b>hash</b>. It borrows ideas from linked lists, hashing, trees and graphs — but he stressed it is <b>much more</b> than any one of them, not a direct implementation.</div>\n  <h4>The two ideas it builds on</h4>\n  <ul style=\"font-size:14.5px\">\n   <li><strong>Linked list</strong> (Lecture 7): starts at a head node, each node points to the <strong>memory address</strong> of the next — like a music playlist</li>\n   <li><strong>Cryptographic hash</strong> (Lecture 19): variable-length input, fixed-length output that is <strong>collision-free</strong> (unique input → unique output) and <strong>cannot be reversed</strong>; change one bit and the output changes completely</li>\n  </ul>\n  <h4>Inside one block</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Part</th><th>Holds</th></tr></thead><tbody>\n   <tr><td><strong>Header</strong></td><td>Hash of the <strong>previous</strong> block · hash of <strong>this</strong> block · the <strong>Merkle root</strong> (next topic)</td></tr>\n   <tr><td><strong>Transactions</strong></td><td>The operations being recorded, in time order — deposits, withdrawals, UPI payments</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\"><strong>The bank-passbook analogy.</strong> A passbook lists transactions one after another and never edits an old line: if ₹10,000 was deposited and ₹5,000 withdrawn, both entries stay and the balance is updated. When the pages run out, you get a new passbook. Likewise a block holds a set number of transactions (grouped by timestamp), then a new block is added; old blocks are never edited or deleted.</p>\n  <h4>Building the chain</h4>\n  <ul style=\"font-size:14.5px\">\n   <li>The first block is the <strong>genesis block</strong> — the blockchain's head node. Its previous-hash field is <strong>null</strong>: not zero, not blank, but an explicit \"points nowhere\"</li>\n   <li>Block 2 stores its own hash H2 and the previous hash H1; block 3 stores H3 and H2; and so on</li>\n   <li>Blocks are <strong>stored forwards</strong> from the genesis block but <strong>read backwards</strong>, starting from the newest block and following the previous-hash links</li>\n  </ul>\n  <h4>What tampering does</h4>\n  <p style=\"font-size:14.5px\">Change any transaction in block 2 and its hash is no longer H2 — call it H2'. Block 3 still says \"my previous block is H2\", and no such block exists: <strong>the chain is broken</strong>, so tampering is detected and the faulty block can be pinpointed. But detection is only step one. Someone could rebuild the block with a fresh hash, so blockchain adds two more safeguards: the Merkle tree and decentralisation.</p><!--viz:atb-blockchain-links--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Two rows of three blocks. In the intact chain each block's previous-hash field matches the block before it. After block 2 is edited its hash changes to H2' and block 3's previous hash, H2, no longer matches any block.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Blocks linked by hashes, and what an edit breaks</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 286\" role=\"img\" aria-label=\"Top row: genesis block with previous hash null and own hash H1, block 2 with H1 and H2, block 3 with H2 and H3, each pointing back. Bottom row: block 2 edited so its hash becomes H2', and block 3's link to H2 is broken.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><text x=\"12\" y=\"16\" text-anchor=\"start\" style=\"fill:var(--ink-2);font-size:13px\">Intact: each block stores the previous block's hash</text><rect x=\"12\" y=\"26\" width=\"120\" height=\"92\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"72\" y=\"46\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">Genesis</text><text x=\"72\" y=\"68\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">prev: null</text><text x=\"72\" y=\"88\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">own: H1</text><text x=\"72\" y=\"108\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">transactions</text><rect x=\"160\" y=\"26\" width=\"120\" height=\"92\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"220\" y=\"46\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">Block 2</text><text x=\"220\" y=\"68\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">prev: H1</text><text x=\"220\" y=\"88\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">own: H2</text><text x=\"220\" y=\"108\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">transactions</text><rect x=\"308\" y=\"26\" width=\"120\" height=\"92\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"368\" y=\"46\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">Block 3</text><text x=\"368\" y=\"68\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">prev: H2</text><text x=\"368\" y=\"88\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">own: H3</text><text x=\"368\" y=\"108\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">transactions</text><path d=\"M160,72 L139,72\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M132,72 L139,68.5 L139,75.5 Z\" style=\"fill:var(--ink-3);stroke:none\"/><path d=\"M308,72 L287,72\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M280,72 L287,68.5 L287,75.5 Z\" style=\"fill:var(--ink-3);stroke:none\"/><text x=\"12\" y=\"148\" text-anchor=\"start\" style=\"fill:var(--ink-2);font-size:13px\">Tampered: block 2 edited, so its hash changes</text><rect x=\"12\" y=\"158\" width=\"120\" height=\"92\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"72\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">Genesis</text><text x=\"72\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">prev: null</text><text x=\"72\" y=\"220\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">own: H1</text><text x=\"72\" y=\"240\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">transactions</text><rect x=\"160\" y=\"158\" width=\"120\" height=\"92\" rx=\"4\" style=\"fill:var(--bad-soft);stroke:var(--bad);stroke-width:1.5\"/><text x=\"220\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">Block 2 (edited)</text><text x=\"220\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">prev: H1</text><text x=\"220\" y=\"220\" text-anchor=\"middle\" style=\"fill:var(--bad);font-size:13px;font-family:var(--mono)\">own: H2'</text><text x=\"220\" y=\"240\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">transactions</text><rect x=\"308\" y=\"158\" width=\"120\" height=\"92\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"368\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">Block 3</text><text x=\"368\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--bad);font-size:13px;font-family:var(--mono)\">prev: H2</text><text x=\"368\" y=\"220\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">own: H3</text><text x=\"368\" y=\"240\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">transactions</text><path d=\"M160,204 L139,204\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M132,204 L139,200.5 L139,207.5 Z\" style=\"fill:var(--ink-3);stroke:none\"/><path d=\"M308,204 L288,204\" style=\"stroke:var(--bad);stroke-width:2;fill:none;stroke-dasharray:5 4\"/><text x=\"220\" y=\"272\" text-anchor=\"middle\" style=\"fill:var(--bad);font-size:13px\">block 3 points to H2, but no block has H2 any more</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The arrows point backwards: a blockchain is read from the newest block to the genesis block.</figcaption></figure><!--/viz:atb-blockchain-links--><!--viz:atb-list-vs-blockchain--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table comparing a linked list and a blockchain on how elements link, reading direction, where new elements go, where they are stored, and the first element.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Linked list vs blockchain</div><div class=\"scroller\"><table><thead><tr><th></th><th>Linked list</th><th>Blockchain</th></tr></thead><tbody><tr><td><b>Link</b></td><td>Pointer to the <b>next</b> node's memory address</td><td><b>Hash</b> of the <b>previous</b> block</td></tr><tr><td><b>Reading</b></td><td>Forwards from the head node</td><td><b>Backwards</b> from the newest block</td></tr><tr><td><b>Adding</b></td><td>Anywhere, even mid-list (a playlist)</td><td><b>Only at the end</b></td></tr><tr><td><b>Stored on</b></td><td>Typically one computer</td><td style=\"background:var(--blue-soft)\"><b>Many nodes</b> of a network</td></tr><tr><td><b>First element</b></td><td>Head node</td><td>Genesis block (previous hash = null)</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Decentralised storage is the biggest difference: it is what turns tamper detection into tamper resistance.</figcaption></figure><!--/viz:atb-list-vs-blockchain-->"
    },
    {
     "t": "Merkle trees and decentralisation",
     "src": "L#20",
     "h": "\n  <h4>The Merkle tree: protecting the transactions</h4>\n  <div class=\"def\">A <b>Merkle tree</b> hashes every transaction (H1…H6), then hashes groups of those hashes, and repeats until one hash remains: the <b>Merkle root</b>, stored in the block header.</div>\n  <ul style=\"font-size:14.5px\">\n   <li>His example grouped six transaction hashes in <strong>threes</strong> (H1–H3 and H4–H6) — a general tree. Some blockchain protocols insist on a <strong>binary</strong> tree (pairs); others accept a general tree</li>\n   <li>Change transaction 5 and H5 changes, so H456 changes, so the <strong>root</strong> changes. Recompute the tree from the block's transactions, compare with the stored root, and any edit shows</li>\n   <li>The block stores the <strong>transactions as well as</strong> the root, because a hash is one-way: the root alone could never give the transactions back</li>\n  </ul>\n  <h4>Decentralisation: copies everywhere</h4>\n  <p style=\"font-size:14.5px\">A linked list typically lives on one computer. A blockchain's blocks are stored on many <strong>nodes of a network</strong>, several nodes holding copies of each block. His analogy: classmates copy an assignment and one person makes an error; you compare notebooks and trust the answer most of them agree on. If one node's copy of a block disagrees with the copies that agree with each other, it is discarded — and no data is lost, because the block lives elsewhere too.</p>\n  <ul style=\"font-size:14.5px\">\n   <li><strong>Consensus mechanism:</strong> the protocol nodes use to agree on which copy is authentic (the details are beyond this course)</li>\n   <li><strong>To succeed, an attacker</strong> would need to change at least <strong>51% of the copies</strong> of a block, all at the same moment, because everything is timestamped to the millisecond. That is why blockchains are considered <strong>practically</strong> tamper-proof</li>\n  </ul>\n  <div class=\"scroller\"><table><thead><tr><th>Who may join</th><th>How</th></tr></thead><tbody>\n   <tr><td><strong>Permissioned blockchain</strong></td><td>Run by an organisation, which designates the systems that act as nodes</td></tr>\n   <tr><td><strong>Public blockchain</strong> (Bitcoin, many cryptocurrencies)</td><td>Any node can join if it follows the protocol — for example by <strong>proof of work</strong> (solving computational problems) or <strong>proof of stake</strong></td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:13.5px;color:var(--ink-3)\">He described proof of stake as providing resources such as storage or processing capability. In standard usage, proof of stake means locking up (\"staking\") some of the network's own tokens as a guarantee of good behaviour.</p>\n  <h4>Where trees and graphs come in, and what a node does</h4>\n  <p style=\"font-size:14.5px\"><strong>Trees</strong> appear as Merkle trees. <strong>Graphs</strong> appear in the network: graph-traversal algorithms can check whether a node is part of the blockchain network. A blockchain node <strong>follows the protocol</strong>, <strong>connects</strong> to other nodes, uses cryptographic <strong>keys and hashes</strong> for identity, <strong>validates</strong> blocks, <strong>stores</strong> valid blocks, and <strong>broadcasts</strong> valid blocks and transactions so every node keeps the same copy.</p><!--viz:atb-merkle-tree--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Merkle tree with transactions at the bottom, their hashes above, two group hashes H123 and H456, and the Merkle root at the top. Editing T5 changes H5, H456 and the root.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">A Merkle tree over six transactions</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 256\" role=\"img\" aria-label=\"Six transactions T1 to T6 are hashed to H1 to H6. H1 to H3 are hashed together into H123 and H4 to H6 into H456; those two are hashed into the Merkle root. The path from T5 up to the root is highlighted.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M45,196 L45,166\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M45,140 L115,106\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M115,196 L115,166\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M115,140 L115,106\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M185,196 L185,166\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M185,140 L115,106\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M255,196 L255,166\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M255,140 L325,106\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M325,196 L325,166\" style=\"stroke:var(--bad);stroke-width:2;fill:none\"/><path d=\"M325,140 L325,106\" style=\"stroke:var(--bad);stroke-width:2;fill:none\"/><path d=\"M395,196 L395,166\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M395,140 L325,106\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M115,80 L220,52\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M325,80 L220,52\" style=\"stroke:var(--bad);stroke-width:2;fill:none\"/><rect x=\"23\" y=\"196\" width=\"44\" height=\"26\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"45\" y=\"213.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">T1</text><rect x=\"21\" y=\"140\" width=\"48\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"45\" y=\"157.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">H1</text><rect x=\"93\" y=\"196\" width=\"44\" height=\"26\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"115\" y=\"213.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">T2</text><rect x=\"91\" y=\"140\" width=\"48\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"115\" y=\"157.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">H2</text><rect x=\"163\" y=\"196\" width=\"44\" height=\"26\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"185\" y=\"213.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">T3</text><rect x=\"161\" y=\"140\" width=\"48\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"185\" y=\"157.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">H3</text><rect x=\"233\" y=\"196\" width=\"44\" height=\"26\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"255\" y=\"213.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">T4</text><rect x=\"231\" y=\"140\" width=\"48\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"255\" y=\"157.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">H4</text><rect x=\"303\" y=\"196\" width=\"44\" height=\"26\" rx=\"4\" style=\"fill:var(--bad-soft);stroke:var(--bad);stroke-width:1.5\"/><text x=\"325\" y=\"213.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">T5</text><rect x=\"301\" y=\"140\" width=\"48\" height=\"26\" rx=\"4\" style=\"fill:var(--bad-soft);stroke:var(--bad);stroke-width:1.5\"/><text x=\"325\" y=\"157.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">H5</text><rect x=\"373\" y=\"196\" width=\"44\" height=\"26\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"395\" y=\"213.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">T6</text><rect x=\"371\" y=\"140\" width=\"48\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"395\" y=\"157.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">H6</text><rect x=\"83\" y=\"80\" width=\"64\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"115\" y=\"97.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">H123</text><rect x=\"293\" y=\"80\" width=\"64\" height=\"26\" rx=\"4\" style=\"fill:var(--bad-soft);stroke:var(--bad);stroke-width:1.5\"/><text x=\"325\" y=\"97.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">H456</text><rect x=\"160\" y=\"26\" width=\"120\" height=\"26\" rx=\"4\" style=\"fill:var(--bad-soft);stroke:var(--bad);stroke-width:1.5\"/><text x=\"220\" y=\"43.7\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">Merkle root</text><text x=\"220\" y=\"16\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">stored in the block header</text><text x=\"220\" y=\"244\" text-anchor=\"middle\" style=\"fill:var(--bad);font-size:13px\">edit T5: H5, H456 and the root all change</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">One edited transaction changes every hash on its path to the root, so comparing roots exposes it.</figcaption></figure><!--/viz:atb-merkle-tree-->"
    },
    {
     "t": "Blockchain applications and limits",
     "src": "L#20",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Application</th><th>What he said</th></tr></thead><tbody>\n   <tr><td><strong>Cryptocurrencies</strong> (Bitcoin and others)</td><td>The best-known use. Technically <strong>not currencies</strong>: a currency is issued by a central bank (in India, the Reserve Bank of India, which now also issues digital currency). Cryptos are <strong>tokens</strong> stored on a blockchain network, whose value rests on the community's agreement</td></tr>\n   <tr><td><strong>Smart contracts</strong></td><td>The contract's conditions are built in and the relevant clause executes when its condition is met — e.g. a penalty if a construction project runs six months late. Stored on a blockchain, it cannot easily be altered, which saves heavy legal fees for drafting, evaluating and enforcing contracts</td></tr>\n   <tr><td><strong>Revenue records</strong></td><td>Land registries in some Indian states are on blockchain</td></tr>\n   <tr><td><strong>Health records</strong></td><td>India's National Health Mission envisages electronic health records, as in many European countries; on a blockchain, past data cannot be altered — new entries are added as new transactions</td></tr>\n   <tr><td><strong>Supply chain</strong></td><td>Named among the other applications</td></tr>\n  </tbody></table></div>\n  <h4>The manager's question: is it worth it?</h4>\n  <p style=\"font-size:14.5px\">Cryptocurrencies and smart contracts usually run on public blockchains. Revenue and health records need a blockchain run by an organisation, and <strong>implementation is costly</strong>, so most are still <strong>pilots</strong>. A robust technology is not automatically a good investment: if it does not deliver enough return or benefit, it will not be adopted. Smart contracts save lawyers' fees; a tamper-proof land register must justify its cost. Blockchain will spread widely only when implementation costs fall.</p>"
    }
   ]
  }
 ],
 "topics": [
  {
   "name": "Basics",
   "unit": "basics"
  },
  {
   "name": "Pseudocode",
   "unit": "pseudo"
  },
  {
   "name": "Properties",
   "unit": "props"
  },
  {
   "name": "Algorithm types",
   "unit": "types"
  },
  {
   "name": "Arrays",
   "unit": "arrays"
  },
  {
   "name": "Linked lists",
   "unit": "linked"
  },
  {
   "name": "Stacks",
   "unit": "stacks"
  },
  {
   "name": "Queues",
   "unit": "queues"
  },
  {
   "name": "Complexity",
   "unit": "complexity"
  },
  {
   "name": "Recursion & iteration",
   "unit": "basics"
  },
  {
   "name": "Computer memory",
   "unit": "memory"
  },
  {
   "name": "Trees",
   "unit": "trees"
  },
  {
   "name": "Hashing",
   "unit": "hashing"
  },
  {
   "name": "Graphs",
   "unit": "graphs"
  },
  {
   "name": "Searching",
   "unit": "searching"
  },
  {
   "name": "Blockchain",
   "unit": "blockchain"
  }
 ],
 "traps": [
  {
   "id": "atb-t0001",
   "h": "Quiz 1 was linear data structures only — trees and graphs came after",
   "p": "Quiz 1 stopped at Queue Types and Live Lecture 3, so trees and graphs were not in it. They have been taught since (Lectures 12–20: trees, graphs, traversals, hashing, blockchain) and should be expected from Quiz 2 on, unless its announcement says otherwise.",
   "f": "Quiz 1 linear; later quizzes add trees"
  },
  {
   "id": "atb-t0002",
   "h": "Trapezoid is input/output, diamond is decision",
   "p": "Rounded rectangle = start/end, plain rectangle = process, trapezoid = input/output, diamond = decision.",
   "f": "trapezoid = I/O"
  },
  {
   "id": "atb-t0003",
   "h": "Five core properties, four execution properties",
   "p": "Core: finiteness, definiteness, well-defined inputs, well-defined outputs, effectiveness. Execution: language independence, determinism, feasibility, generality.",
   "f": "5 + 4 = 9"
  },
  {
   "id": "atb-t0004",
   "h": "Determinism is about randomness, feasibility is about resources",
   "p": "A random discount fails determinism. Reading a customer's true intention fails feasibility.",
   "f": "random = determinism"
  },
  {
   "id": "atb-t0005",
   "h": "Effectiveness means practical, not just correct",
   "p": "A correct algorithm that takes three hours to approve a loan is ineffective.",
   "f": "correct but useless = ineffective"
  },
  {
   "id": "atb-t0006",
   "h": "Generality fails on hard-coded special cases",
   "p": "Giving the bonus only to employees named Rahul is the example he used.",
   "f": "no special cases"
  },
  {
   "id": "atb-t0007",
   "h": "Greedy is now, dynamic programming is the past",
   "p": "Greedy takes the best option available at this moment. Dynamic programming decides from historical data.",
   "f": "now vs history"
  },
  {
   "id": "atb-t0008",
   "h": "Array indexing starts at 0",
   "p": "A five-element array runs from index 0 to index 4.",
   "f": "0 to n-1"
  },
  {
   "id": "atb-t0009",
   "h": "Arrays are homogeneous and contiguous",
   "p": "One data type throughout, stored in a single continuous memory block.",
   "f": "same type, one block"
  },
  {
   "id": "atb-t0010",
   "h": "Deleting from an array does not free memory",
   "p": "It sets the slot to null — which is not zero — and the space stays allocated.",
   "f": "null, not freed, not zero"
  },
  {
   "id": "atb-t0011",
   "h": "Array insert at the end is easy, in the middle is slow",
   "p": "Inserting anywhere but the end shifts every later element.",
   "f": "the shift is the cost"
  },
  {
   "id": "atb-t0012",
   "h": "Linked lists have no random access",
   "p": "You cannot jump to the fifth node. You follow links from the head. That is the price of the flexibility.",
   "f": "follow the chain"
  },
  {
   "id": "atb-t0013",
   "h": "Circular linked list points to the head, not null",
   "p": "In a singly linked list the last node points to null. In a circular one it points back to the head.",
   "f": "null vs head"
  },
  {
   "id": "atb-t0014",
   "h": "Shuffling a linked list moves no data",
   "p": "Only the pointers are rearranged; the elements stay where they are in memory.",
   "f": "repoint, don't move"
  },
  {
   "id": "atb-t0015",
   "h": "push takes a value, pop does not",
   "p": "push(x) needs the value. pop() just takes whatever is on top. Same for enqueue versus dequeue.",
   "f": "add needs a value, remove doesn't"
  },
  {
   "id": "atb-t0016",
   "h": "Overflow is pushing to full, underflow is popping from empty",
   "p": "True for both stacks and queues. Too many tabs = overflow; Back with no history = underflow.",
   "f": "full/push, empty/pop"
  },
  {
   "id": "atb-t0017",
   "h": "Static uses arrays, dynamic uses linked lists",
   "p": "True for both stacks and queues. Photoshop 50 undos and Excel 100 undos are static; Word is dynamic.",
   "f": "array = fixed, list = growing"
  },
  {
   "id": "atb-t0018",
   "h": "Enqueue moves rear, dequeue moves front",
   "p": "Each operation moves only its own pointer. The other one stays put.",
   "f": "one pointer each"
  },
  {
   "id": "atb-t0019",
   "h": "A linear queue wastes memory; a circular one fixes it",
   "p": "Once the rear reaches the end of the array, a linear queue is full even if dequeues freed space at the front.",
   "f": "circular reuses the gap"
  },
  {
   "id": "atb-t0020",
   "h": "Priority queue falls back to FIFO on a tie",
   "p": "Priority decides the order; equal priorities are served in arrival order.",
   "f": "tie = FIFO"
  },
  {
   "id": "atb-t0021",
   "h": "A deque is both a stack and a queue",
   "p": "Insert and delete at both ends. Browser back/forward is the example.",
   "f": "both ends"
  },
  {
   "id": "atb-t0022",
   "h": "Algorithm is language-independent; code is not",
   "p": "The same algorithm can be written in C, Java or Python and remain the same algorithm.",
   "f": "logic vs implementation"
  },
  {
   "id": "atb-t0023",
   "h": "Big O is the worst case; Omega is the best case",
   "p": "In the book, Big O describes the maximum running time, Omega the minimum, and Theta both. Do not swap Big O and Omega.",
   "f": "O = ceiling, Ω = floor",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-t0024",
   "h": "O(log n) still grows — just very slowly",
   "p": "Logarithmic time does not mean more data takes less time. It means each doubling of the input adds only about one extra step, so it scales far better than O(n).",
   "f": "double n, add one step",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-t0025",
   "h": "Doubling the input quadruples O(n²) work, not doubles it",
   "p": "Quadratic time is proportional to n squared, so 2n gives 4 times the work. Only linear O(n) doubles when the input doubles.",
   "f": "square the multiplier",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-t0026",
   "h": "Runaway recursion causes stack overflow, not underflow",
   "p": "Each self-call uses memory. With no stopping condition the machine runs out and reports a stack overflow because the maximum recursion depth is exceeded.",
   "f": "too deep = overflow",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-t0027",
   "h": "Greedy approximates; dynamic programming optimises",
   "p": "Nearest-next-city routing is greedy and gives a reasonable route, but not necessarily the shortest. Dynamic programming stores and reuses sub-solutions to reach the best answer.",
   "f": "greedy ≈, DP = best",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-t0028",
   "h": "A string is not one of the Big Four primitive types",
   "p": "The four primitives are Boolean, character, integer and floating-point. A string is built from characters.",
   "f": "string = many characters",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-t0029",
   "h": "Good data can still produce garbage output",
   "p": "GIGO is incomplete: a faulty algorithm, or data of the wrong declared type, turns correct input into wrong output.",
   "f": "good in, garbage out",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-t0030",
   "h": "1 KiB is 1,024 bytes, not 1,000",
   "p": "Memory sizes are powers of two. The IEC kibibyte (KiB) makes this explicit; the decimal kilobyte is 1,000 bytes.",
   "f": "kibi = 2¹⁰",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-t0031",
   "h": "A bigger cache is not automatically a faster one",
   "p": "Cache is fast partly because it is small. If it grows too large it behaves like RAM and the speed benefit shrinks.",
   "f": "small is the point",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-t0032",
   "h": "Registers are the fastest memory; disk is the slowest",
   "p": "Speed and size run in opposite directions: registers (tiny, fastest) → cache → RAM → disk (largest, slowest).",
   "f": "smaller = faster",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-t0033",
   "h": "A stack is poor at fetching an arbitrary element",
   "p": "Only the top is reachable, so getting at something deep inside means popping everything above it. Its strength is reversing and backtracking, not lookup.",
   "f": "top only",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-t0034",
   "h": "Only a priority queue orders by priority; a plain queue orders by arrival",
   "p": "A regular queue serves the longest-waiting element first. Priority ordering — with arrival order breaking ties — belongs to the priority queue.",
   "f": "plain queue = arrival order",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-t0035",
   "h": "A circular linked list can be singly or doubly linked",
   "p": "Circular describes the last node linking back to the first, with no null. The links themselves may run one way or both ways.",
   "f": "circular ≠ doubly",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-t0036",
   "h": "A node with two parents means it is no longer a tree",
   "p": "A parent can have many children, but a child has exactly one parent. Multiple parents make the structure a graph.",
   "f": "two parents = graph",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-t0037",
   "h": "The root is at the top of a computer-science tree",
   "p": "Unlike a real tree, a data-structure tree is drawn upside down: root at the top, leaves at the bottom.",
   "f": "root up, leaves down",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-t0038",
   "h": "Binary means at most two children — not exactly two",
   "p": "Leaves have zero children and some nodes have one. The limit is two.",
   "f": "two is a ceiling",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-t0039",
   "h": "Inserting already-sorted keys makes a BST unbalanced",
   "p": "Each new key is larger than the last, so it always goes right, building a chain. Searches then become as slow as walking a list.",
   "f": "sorted input → chain",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-t0040",
   "h": "A max heap's root is the largest; a min heap's root is the smallest",
   "p": "Pick the form by what you need instantly: highest bid → max heap; earliest deadline → min heap.",
   "f": "root = the extreme",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-t0041",
   "h": "Heap the data structure is not heap memory",
   "p": "Same word, different things. The data structure is a tree; heap memory is a region where programs allocate objects at run time.",
   "f": "same name, different thing",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-t0042",
   "h": "A BST's smallest key is far left, its largest is far right",
   "p": "Follow left links from the root to the end for the minimum; right links for the maximum. The root itself is neither unless one side is empty.",
   "f": "min left, max right",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-t0043",
   "h": "Hashing is one-way; encryption is two-way",
   "p": "Encrypted data is meant to be decrypted with a key. A hash is not meant to be reversed — you compare hashes instead.",
   "f": "hash: no way back",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-t0044",
   "h": "Hash tables are O(1) typically, not always",
   "p": "Collisions are chained in linked lists; as chains grow, lookup has to walk them and slows down.",
   "f": "long chains, slow lookups",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-t0045",
   "h": "A hash's length does not depend on the input's length",
   "p": "One character or a whole book — the hash value is the same fixed size.",
   "f": "any in, fixed out",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-t0046",
   "h": "Passwords are checked by comparing hashes, not by decrypting",
   "p": "The system hashes what you type and compares it with the stored hash. Nothing is decrypted, because a hash cannot be.",
   "f": "hash and compare",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-t0047",
   "h": "Shared key: one key for both directions; public key: two different keys",
   "p": "Shared-key systems must send the single key to the receiver, which is their weakness. Public-key systems encrypt with a public key and decrypt with a secret key.",
   "f": "one key vs key pair",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-t0048",
   "h": "DSA signs only; RSA signs and encrypts",
   "p": "Both are digital-signature methods that use hashing, but only RSA can also encrypt data.",
   "f": "RSA does both",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-t0049",
   "h": "A tree is a graph without cycles — not the other way round",
   "p": "Every tree is a (minimal) graph, but most graphs are not trees: they may have cycles, no root, and nodes with many connections.",
   "f": "tree ⊂ graph",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-t0050",
   "h": "A graph has no root and no parents or children",
   "p": "Root, parent, child and leaf are tree words. In a graph, nodes are simply vertices, linked or not.",
   "f": "no root, no family",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-t0051",
   "h": "A one-way relationship needs a directed graph",
   "p": "If A can relate to B without B relating to A (follows, one-way streets, payments), use directed edges. Mutual relationships use undirected edges.",
   "f": "one-way = arrows",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-t0052",
   "h": "Weighted is independent of directed",
   "p": "Weights are values on edges; direction is whether edges are one-way. A graph can be weighted and directed, weighted and undirected, or neither.",
   "f": "weight ≠ direction",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-t0053",
   "h": "A loop is an edge from a vertex to itself, not any cycle",
   "p": "In the book, a loop starts and ends at the same vertex using a single edge. A route through several vertices back to the start is a cycle.",
   "f": "loop = self-edge",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-t0054",
   "h": "Binary search needs sorted data",
   "p": "On unsorted data the half it throws away may contain the target, so it can miss items that are present.",
   "f": "sort first, then halve",
   "bk": "Codeless DSA ch6"
  },
  {
   "id": "atb-t0055",
   "h": "A first-try hit does not make linear search O(1)",
   "p": "That is just the best case. Move the item to the end and every element must be checked; the algorithm is still O(n).",
   "f": "lucky ≠ fast",
   "bk": "Codeless DSA ch6"
  },
  {
   "id": "atb-t0056",
   "h": "Doubling the data adds only one comparison to binary search",
   "p": "Each comparison halves the list, so 2n items need just one more halving than n items. Linear search, by contrast, doubles its worst case.",
   "f": "2× data, +1 step",
   "bk": "Codeless DSA ch6"
  },
  {
   "id": "atb-t0057",
   "h": "O(log n) does not mean bigger lists are faster to search",
   "p": "The book's wording suggests more elements take less time. Total time still rises with n — just extremely slowly.",
   "f": "slow growth, not shrinkage",
   "bk": "Codeless DSA ch6"
  },
  {
   "id": "atb-t0058",
   "h": "Binary search discards the middle element too",
   "p": "Once the middle has been compared and is not the target, it is eliminated along with the wrong half.",
   "f": "middle goes too",
   "bk": "Codeless DSA ch6"
  },
  {
   "id": "atb-t0059",
   "h": "Search logarithms are base 2, not base e",
   "p": "The book introduces e and natural logs, but halving algorithms count in powers of 2: log₂ 1,024 = 10.",
   "f": "halving = log₂",
   "bk": "Codeless DSA ch6"
  },
  {
   "id": "atb-t0060",
   "h": "A while loop can run zero times; a do-while runs at least once",
   "p": "While tests before the body; do-while tests after it. If the condition is false from the start, only the do-while body executes, once.",
   "f": "test first vs act first",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-t0061",
   "h": "Switch is a selection structure, not a loop",
   "p": "Selection: if-then, if-then-else, switch. Loops: while, do-while. Sequence stands alone.",
   "f": "switch selects, while repeats",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-t0062",
   "h": "One start, but possibly several ends",
   "p": "A flowchart has a single entry point, yet different branches may terminate separately — like the ATM chart ending on a wrong PIN or low balance.",
   "f": "one door in, many out",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-t0063",
   "h": "Book says parallelogram, lecture says trapezoid — both mean input/output",
   "p": "The book calls the slanted input/output box a parallelogram; the lecture called it a trapezoid or slanted rectangle. Same symbol, same meaning.",
   "f": "slanted box = I/O",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-t0064",
   "h": "A loop with no exit condition breaks finiteness",
   "p": "Without an exit, the loop never ends — exactly the shop-counter example from the properties lecture.",
   "f": "no exit, no finish",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-t0065",
   "h": "If-then with a false condition skips the action — it has no else branch",
   "p": "Only if-then-else runs alternative steps when the condition is false.",
   "f": "no else, just skip",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-t0066",
   "h": "Depth counts edges, so the root's depth is 0",
   "p": "Depth is the number of jumps (edges) to the root, not the number of nodes on the path. Root = 0, its children = 1.",
   "f": "edges, not nodes",
   "lec": 12
  },
  {
   "id": "atb-t0067",
   "h": "Depth is per node; height is one number for the tree",
   "p": "Each node has its own depth. The height of the tree is the largest of those depths — the distance from the root to the deepest leaf.",
   "f": "height = max depth",
   "lec": 12
  },
  {
   "id": "atb-t0068",
   "h": "In-order is undefined when a node has three children",
   "p": "Lecture 12: with children P, Q, R there is no single 'middle' slot for the root, so in-order cannot be determined. Pre-order, post-order and level-order still work. The textbook block only shows in-order on binary trees and never says this.",
   "f": "in-order needs ≤ 2 children",
   "lec": 12
  },
  {
   "id": "atb-t0069",
   "h": "Left always comes before right — only the root moves",
   "p": "Pre, in and post differ only in where the root is placed relative to its left and right subtrees. Right before left is never one of the three.",
   "f": "root position names it",
   "lec": 12
  },
  {
   "id": "atb-t0070",
   "h": "A leaf can sit at any level",
   "p": "A leaf is any node with no children. In the family tree, SB is a leaf at depth 1 while D1, S1 and S2 are leaves at depth 2.",
   "f": "no children = leaf",
   "lec": 12
  },
  {
   "id": "atb-t0071",
   "h": "Level-order is breadth-first, the other three are depth-first",
   "p": "Pre-, in- and post-order go down to the farthest leaf before coming back; level-order finishes each level before going down. The textbook block lists all four side by side without this split.",
   "f": "three deep, one wide",
   "lec": 12
  },
  {
   "id": "atb-t0072",
   "h": "A heap must be a complete binary tree",
   "p": "Lecture 14 defines a heap as a complete binary tree plus the parent–child ordering. The textbook block only calls it a binary-tree structure. Use the lecture's definition.",
   "f": "heap = complete + order",
   "lec": 14
  },
  {
   "id": "atb-t0073",
   "h": "A heap is not a BST",
   "p": "A heap compares each parent only with its children. Its right child can be smaller than its left (65 → 60, 55), which a BST would never allow.",
   "f": "parent vs child only",
   "lec": 14
  },
  {
   "id": "atb-t0074",
   "h": "Balancing is about fewer hops, not memory",
   "p": "The lecture's reason for AVL trees: a balanced tree needs fewer hops per search. The textbook block says balancing gives more efficient memory use; give the speed reason.",
   "f": "balance = fewer hops",
   "lec": 14
  },
  {
   "id": "atb-t0075",
   "h": "A one-path flowchart is still a binary tree",
   "p": "Binary means at most two children, so a node with one child qualifies. A decision with three outcomes does not.",
   "f": "at most, not exactly",
   "lec": 14
  },
  {
   "id": "atb-t0076",
   "h": "Complete binary trees fill the last level from the left",
   "p": "Gaps are allowed only on the right of the last level. A missing left child next to a present right child breaks completeness.",
   "f": "left before right",
   "lec": 14
  },
  {
   "id": "atb-t0077",
   "h": "Red-black trees and B-trees are textbook-only",
   "p": "Lecture 14 covers six types (general, binary, complete binary, BST, AVL, heap) and says they are sufficient for this course. Red-black trees and B-trees appear only in the textbook block.",
   "f": "six types in lecture",
   "lec": 14
  },
  {
   "id": "atb-t0078",
   "h": "In a graph a node may have two 'parents'",
   "p": "Lecture 15 builds the full family as a graph precisely because X has two parents, S and P. The textbook block says a graph has no parents or children at all; the two agree that tree rules stop applying. In graph language he calls connected nodes neighbours.",
   "f": "two parents → graph",
   "lec": 15
  },
  {
   "id": "atb-t0079",
   "h": "E lists only the edges that exist",
   "p": "Vertices with no connection (C and A, A and B) do not appear as pairs in E. The order in which you list edges does not matter, as long as all are covered.",
   "f": "no edge, no pair",
   "lec": 15
  },
  {
   "id": "atb-t0080",
   "h": "V and E are sets: curly braces",
   "p": "He corrected his own slide: V = {A, B, C, …}, not V = (A, B, C, …). G = (V, E) itself keeps round brackets.",
   "f": "sets in { }",
   "lec": 15
  },
  {
   "id": "atb-t0081",
   "h": "Degree counts every edge, whatever its label",
   "p": "A cousin edge, a spouse edge and a parent edge each add one. X has degree 3: two parents and one cousin.",
   "f": "all edges count",
   "lec": 15
  },
  {
   "id": "atb-t0082",
   "h": "Hierarchy inside one organisation is still a tree",
   "p": "In his exercise, the company's designations and IIT Jodhpur's departments are trees; only independent entities with cross-links (group companies, INI collaborations) need a graph.",
   "f": "one boss each → tree",
   "lec": 15
  },
  {
   "id": "atb-t0083",
   "h": "Influencers are chosen on in-degree, not out-degree",
   "p": "In-degree counts who follows the account: that is the audience a post reaches. Out-degree counts whom the account follows, which a marketing firm ignores.",
   "f": "followers = in-degree",
   "lec": 16
  },
  {
   "id": "atb-t0084",
   "h": "'Son of' and 'father of' are two different edges",
   "p": "In a directed graph a reverse arrow is a separate relationship, not the same edge read backwards.",
   "f": "reverse = new edge",
   "lec": 16
  },
  {
   "id": "atb-t0085",
   "h": "A metro line with terminals is acyclic — but a loop line is cyclic",
   "p": "Lecture 16 calls a metro network with terminal stations acyclic, because at a terminal you can only retrace your path. The textbook question in this unit uses a metro where A → B → C → A, which is cyclic. Decide from the edges, not from the word 'metro'.",
   "f": "check the edges",
   "lec": 16
  },
  {
   "id": "atb-t0086",
   "h": "Connectivity depends on which edges you include",
   "p": "Ahmedabad to Port Blair is disconnected by road only; add flights or ferries and it is connected. State the network (road, air) before you classify.",
   "f": "road-only = disconnected",
   "lec": 16
  },
  {
   "id": "atb-t0087",
   "h": "LinkedIn is both directed and undirected",
   "p": "Connections, once accepted, are undirected; follows are directed. One platform can need both kinds of edge.",
   "f": "connect ≠ follow",
   "lec": 16
  },
  {
   "id": "atb-t0088",
   "h": "DFS uses a stack; BFS uses a queue",
   "p": "DFS keeps the branch it is not exploring at the bottom of a stack and comes back to it last. BFS adds new neighbours at the rear of a queue, so a whole level is served first.",
   "f": "Depth–stack, Breadth–queue",
   "lec": 17
  },
  {
   "id": "atb-t0089",
   "h": "A graph traversal can have more than one correct answer",
   "p": "Graphs have no left or right, so either unvisited neighbour may go first. From A, both A P X S C Q Y R B and A Q Y R B P X S C are correct DFS orders; a complete answer gives both.",
   "f": "no left or right",
   "lec": 17
  },
  {
   "id": "atb-t0090",
   "h": "BFS levels are hops from the start, not rows in the drawing",
   "p": "C and B are drawn beside A but are four hops away. Count edges from the start vertex to find the level.",
   "f": "count hops",
   "lec": 17
  },
  {
   "id": "atb-t0091",
   "h": "DFS answers 'connected at all?'; BFS answers 'how far?'",
   "p": "DFS keeps following friend of friend until it finds the person or runs out; BFS works outward level by level, so the level where the person appears is the degree of separation.",
   "f": "any path vs how many hops",
   "lec": 17
  },
  {
   "id": "atb-t0092",
   "h": "Within a level, the order must stay consistent",
   "p": "If BFS visits Q before P, Q's neighbour Y is enqueued before P's neighbour X. Mixing orders across levels gives a sequence the queue could never produce.",
   "f": "queue order carries on",
   "lec": 17
  },
  {
   "id": "atb-t0093",
   "h": "Height is measured from the root to the deepest leaf",
   "p": "Live Lecture 4 corrected a slide: height is the maximum depth, i.e. how far the root is from its deepest leaf, in edges. Depth is measured per node, from the root down to that node.",
   "f": "root → deepest leaf",
   "lec": 18
  },
  {
   "id": "atb-t0094",
   "h": "On one-way roads, A → B and B → A can carry different weights",
   "p": "A one-way street makes the edge directed, and the way back may be a longer route, so the two directions need separate weights. Two-way roads have the same weight both ways.",
   "f": "one-way = two weights",
   "lec": 18
  },
  {
   "id": "atb-t0095",
   "h": "The most-followed influencer is not automatically the right one",
   "p": "In-degree is the key number, but he added two filters: are the followers your target audience, and what does the influencer charge?",
   "f": "reach × relevance × cost",
   "lec": 18
  },
  {
   "id": "atb-t0096",
   "h": "Password hashes should be slow on purpose",
   "p": "Lecture 19: speed depends on the use. Indexing wants very fast hashing and integrity checks fast, but password storage wants a deliberately slow hash so cracking is slow. The textbook block's 'quick to compute' rule does not apply to passwords.",
   "f": "passwords: slow is good",
   "lec": 19
  },
  {
   "id": "atb-t0097",
   "h": "Indexing hashes allow collisions; security hashes must resist them",
   "p": "mod 10 is fine for an index because chaining handles collisions. Security hashes are expected to be collision resistant. The textbook block's 'one-way and 1:1' line is right only for the security case, and even there only ideally.",
   "f": "index tolerates, security resists",
   "lec": 19
  },
  {
   "id": "atb-t0098",
   "h": "mod 10 gives 0 to 9, not 1 to 10",
   "p": "The remainder after dividing by 10 can be 0 (e.g. 2640 mod 10 = 0), so the ten values run 0–9.",
   "f": "remainders start at 0",
   "lec": 19
  },
  {
   "id": "atb-t0099",
   "h": "Uppercase has a fixed-length output, but it is not a hash",
   "p": "Uppercase output length is fixed by the input (5 characters in, 5 out). A hash gives the same length whatever the input length.",
   "f": "fixed by input ≠ fixed always",
   "lec": 19
  },
  {
   "id": "atb-t0100",
   "h": "A forgotten password can be reset, not revealed",
   "p": "Systems store only the password's hash, and the hash is one-way, so nobody — not even the administrator — can tell you the old password.",
   "f": "reset, never retrieve",
   "lec": 19
  },
  {
   "id": "atb-t0101",
   "h": "A unique index for every key is not the goal",
   "p": "Collisions should be few, but if every key got its own index you would search the index exactly as slowly as the keys themselves.",
   "f": "index must group",
   "lec": 19
  },
  {
   "id": "atb-t0102",
   "h": "A blockchain is read backwards",
   "p": "Blocks are stored forwards from the genesis block, but each block points to the previous one, so reading starts at the newest block and follows the hashes back. A linked list is usually read forwards from the head.",
   "f": "store forward, read back",
   "lec": 20
  },
  {
   "id": "atb-t0103",
   "h": "Blocks link by hash, not by memory address",
   "p": "A linked list's pointer holds the next node's memory address. A block holds the previous block's hash, which is also what exposes tampering.",
   "f": "hash, not address",
   "lec": 20
  },
  {
   "id": "atb-t0104",
   "h": "Detecting tampering is not the same as being tamper-proof",
   "p": "A broken hash link shows that a block was edited, but an attacker could recompute hashes. Copies on many nodes, a consensus mechanism and the 51% hurdle are what make it practically tamper-proof.",
   "f": "detect ≠ prevent",
   "lec": 20
  },
  {
   "id": "atb-t0105",
   "h": "51% of the copies of a block, not 51% of the nodes",
   "p": "Not every node holds the whole chain. An attacker must alter a majority of the copies of the block in question, and do it simultaneously.",
   "f": "majority of copies",
   "lec": 20
  },
  {
   "id": "atb-t0106",
   "h": "Bitcoin is technically a token, not a currency",
   "p": "A currency is issued by a central bank (in India, the RBI). Cryptocurrencies are tokens on a blockchain whose value the community agrees on.",
   "f": "no central bank, no currency",
   "lec": 20
  },
  {
   "id": "atb-t0107",
   "h": "Proof of stake: his wording vs the usual meaning",
   "p": "He described proof of stake as providing storage or processing capability. The standard meaning is locking up ('staking') the network's own tokens. Proof of work, solving computational problems, matches both.",
   "f": "know both readings",
   "lec": 20
  },
  {
   "id": "atb-t0108",
   "h": "Going back along the same edge is not a cycle",
   "p": "The L#18 slide says a cyclic graph has a path back to the start. But in an undirected graph you can always get back with A → B → A, so the return has to avoid retracing. A–B–C in a line is acyclic.",
   "f": "no retracing",
   "lec": 18
  },
  {
   "id": "atb-t0109",
   "h": "The route DFS follows is not the shortest route",
   "p": "DFS can reach a vertex the long way round. On the 11-edge family graph it first reaches Q via A → P → S → X → Y → Q, yet Q is A's direct neighbour. The fewest hops come from the BFS level, which is why the slides say BFS finds the minimum degree of separation.",
   "f": "fewest hops = BFS level",
   "lec": 18
  },
  {
   "id": "atb-t0110",
   "h": "On a graph with cycles, skip vertices already visited",
   "p": "With cycles, a vertex can be pushed or enqueued twice before it is visited. The slides' four steps do not say what to do with the second copy. Discard it when it comes off the stack or queue, or mark vertices when you push them.",
   "f": "visited? discard",
   "lec": 18
  }
 ],
 "defs": [
  {
   "id": "atb-d0001",
   "unit": "basics",
   "topic": "The four terms",
   "term": "algorithm",
   "html": "An <b>algorithm</b> is a series of organised, step-by-step instructions that converts <b>input data</b> into a <b>desired output</b>."
  },
  {
   "id": "atb-d0002",
   "unit": "basics",
   "topic": "The ATM example, and why algorithms grow",
   "term": "not all paths run in a single execution",
   "html": "The observation he wanted: <b>not all paths run in a single execution.</b> Each run takes one route through the decisions; the others are skipped."
  },
  {
   "id": "atb-d0003",
   "unit": "pseudo",
   "topic": "Pseudocode",
   "term": "Pseudocode",
   "html": "<b>Pseudocode</b> is plain English written in a structured, code-like way. It is understandable to a programmer <b>without being tied to any language's syntax</b>."
  },
  {
   "id": "atb-d0004",
   "unit": "props",
   "topic": "The four execution and design properties",
   "term": "five core",
   "html": "Nine properties total: <b>five core</b> (finiteness, definiteness, well-defined inputs, well-defined outputs, effectiveness) and <b>four execution</b> (language independence, determinism, feasibility, generality)."
  },
  {
   "id": "atb-d0005",
   "unit": "arrays",
   "topic": "What an array is",
   "term": "linear data structure",
   "html": "A <b>linear data structure</b> arranges elements <b>sequentially</b>, so that reaching one element lets you find its neighbours through a defined relationship."
  },
  {
   "id": "atb-d0006",
   "unit": "linked",
   "topic": "Linked lists",
   "term": "linked list",
   "html": "A <b>linked list</b> chains elements with <b>pointers</b>. Each <b>node</b> holds data plus the address of the next node. It begins at the <b>head</b>, and the last node points to <b>null</b>."
  },
  {
   "id": "atb-d0007",
   "unit": "stacks",
   "topic": "Stacks — LIFO",
   "term": "stack",
   "html": "A <b>stack</b> adds and removes elements <b>only at the top</b>. The last element in is the first out — <b>LIFO</b>."
  },
  {
   "id": "atb-d0008",
   "unit": "queues",
   "topic": "Queues — FIFO",
   "term": "queue",
   "html": "A <b>queue</b> adds at the <b>rear</b> and removes from the <b>front</b>. First in, first out — <b>FIFO</b>, or first come first served."
  },
  {
   "id": "atb-d0009",
   "unit": "queues",
   "topic": "The four types of queue",
   "term": "linear",
   "html": "His one-line summary: <b>linear</b> = a regular line · <b>circular</b> = a ring that reuses space · <b>priority</b> = a VIP line · <b>deque</b> = open at both ends."
  },
  {
   "id": "atb-d0010",
   "unit": "basics",
   "topic": "Basics",
   "term": "Data structure",
   "html": "<b>Data structure</b>: a way of organising and storing data so that each item can be identified and the relationships between items are clear — in short, a container for data.",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-d0011",
   "unit": "basics",
   "topic": "Basics",
   "term": "Algorithm (book definition)",
   "html": "<b>Algorithm</b>: an ordered sequence of steps that always solves the type of problem it was designed for. It should be simple, precise and unambiguous.",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-d0012",
   "unit": "pseudo",
   "topic": "Pseudocode",
   "term": "Primitive data type",
   "html": "<b>Primitive (atomic) data type</b>: the most basic data type, built into the language and impossible to split further. The book's Big Four: <b>Boolean, character, integer, floating-point</b>.",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-d0013",
   "unit": "basics",
   "topic": "Recursion & iteration",
   "term": "Recursion",
   "html": "<b>Recursion</b>: defining something in terms of itself. A recursive function calls itself until a stopping condition is met.",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-d0014",
   "unit": "basics",
   "topic": "Recursion & iteration",
   "term": "Iteration",
   "html": "<b>Iteration</b>: repeating a block of steps until a condition chosen by the designer is met.",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-d0015",
   "unit": "basics",
   "topic": "Basics",
   "term": "Method",
   "html": "<b>Method</b>: a function that belongs to a class in an object-oriented language. Function, method, procedure and subroutine all name a callable subprogram.",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-d0016",
   "unit": "complexity",
   "topic": "Complexity",
   "term": "Time complexity",
   "html": "<b>Time complexity</b>: how the running time of an algorithm grows with the size of its input. The most common efficiency measure.",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-d0017",
   "unit": "complexity",
   "topic": "Complexity",
   "term": "Space complexity",
   "html": "<b>Space complexity</b>: how much memory an algorithm needs as its input grows. Critical on resource-constrained systems.",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-d0018",
   "unit": "complexity",
   "topic": "Complexity",
   "term": "Asymptotic analysis",
   "html": "<b>Asymptotic analysis</b>: describing an algorithm's limiting behaviour mathematically as the input grows, instead of timing it on sample runs.",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-d0019",
   "unit": "complexity",
   "topic": "Complexity",
   "term": "Big O notation",
   "html": "<b>Big O</b>: notation for the order of growth of an algorithm's running time; the book uses it for the <b>worst case</b>. Omega = minimum time, Theta = both bounds.",
   "bk": "Codeless DSA ch1"
  },
  {
   "id": "atb-d0020",
   "unit": "memory",
   "topic": "Computer memory",
   "term": "Memory hierarchy",
   "html": "<b>Memory hierarchy</b>: the ranking of storage from <b>disk</b> (largest, slowest) through <b>RAM</b> and <b>cache</b> to <b>registers</b> (smallest, fastest).",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-d0021",
   "unit": "memory",
   "topic": "Computer memory",
   "term": "Cache",
   "html": "<b>Cache</b>: small, fast on-chip memory (L1, L2, sometimes L3) holding the data the CPU is most likely to use next.",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-d0022",
   "unit": "memory",
   "topic": "Computer memory",
   "term": "Virtual memory",
   "html": "<b>Virtual memory</b>: addresses the operating system gives a program, mapped to real physical addresses through a <b>page table</b>, so programs appear to have more memory than physically exists.",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-d0023",
   "unit": "memory",
   "topic": "Computer memory",
   "term": "Kibibyte (KiB)",
   "html": "<b>Kibibyte (KiB)</b>: the IEC binary unit equal to <b>1,024 bytes</b>, used to avoid confusion with the decimal kilobyte of 1,000 bytes.",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-d0024",
   "unit": "arrays",
   "topic": "Arrays",
   "term": "Multidimensional array",
   "html": "<b>Multidimensional array</b>: an array of arrays. A two-dimensional one is a grid of rows and columns, and data stored this way is a <b>matrix</b>.",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-d0025",
   "unit": "linked",
   "topic": "Linked lists",
   "term": "Node",
   "html": "<b>Node</b>: the building block of a linked list — one data element paired with a pointer to the next node (and, in a doubly linked list, to the previous one).",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-d0026",
   "unit": "linked",
   "topic": "Linked lists",
   "term": "Doubly linked list",
   "html": "<b>Doubly linked list</b>: each node points both to the next and to the previous node, allowing two-way traversal and easier deletion.",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-d0027",
   "unit": "stacks",
   "topic": "Stacks",
   "term": "Dynamic stack",
   "html": "<b>Dynamic stack</b>: a stack whose capacity can grow while the program runs; it is usually built as a singly linked list that keeps a pointer to the <b>top</b> node. A static stack, by contrast, has a fixed capacity and is usually backed by an array.",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-d0028",
   "unit": "queues",
   "topic": "Queues",
   "term": "Priority queue",
   "html": "<b>Priority queue</b>: a queue in which every item carries a priority (its key); higher priority leaves first, and equal priorities leave in queue order.",
   "bk": "Codeless DSA ch2"
  },
  {
   "id": "atb-d0029",
   "unit": "trees",
   "topic": "Trees",
   "term": "Tree",
   "html": "<b>Tree</b>: a non-linear structure that organises data as a hierarchy, starting from a single <b>root</b>, where each child has exactly one parent.",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-d0030",
   "unit": "trees",
   "topic": "Trees",
   "term": "Root node",
   "html": "<b>Root</b>: the initial node of a tree, drawn at the top, from which all other nodes descend.",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-d0031",
   "unit": "trees",
   "topic": "Trees",
   "term": "Leaf node",
   "html": "<b>Leaf</b>: a node with no children — an end point of the tree.",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-d0032",
   "unit": "trees",
   "topic": "Trees",
   "term": "Edge and subtree",
   "html": "<b>Edge</b>: a link between two nodes. <b>Subtree</b>: the tree formed by any node's child and everything below it.",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-d0033",
   "unit": "trees",
   "topic": "Trees",
   "term": "Traversal",
   "html": "<b>Traversal</b>: the process of navigating through the nodes of a tree.",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-d0034",
   "unit": "trees",
   "topic": "Trees",
   "term": "Binary search tree",
   "html": "<b>Binary search tree</b>: a binary tree that keeps keys sorted — smaller keys in the <b>left</b> subtree, larger keys in the <b>right</b> subtree of every node.",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-d0035",
   "unit": "trees",
   "topic": "Trees",
   "term": "Tree rotation",
   "html": "<b>Tree rotation</b>: the rebalancing move used by self-balancing trees such as AVL trees — one node moves up and another moves down.",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-d0036",
   "unit": "trees",
   "topic": "Trees",
   "term": "B-tree",
   "html": "<b>B-tree</b>: a self-balancing tree whose nodes can have <b>more than two children</b>; widely used in databases and file systems.",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-d0037",
   "unit": "trees",
   "topic": "Trees",
   "term": "Max heap / min heap",
   "html": "<b>Max heap</b>: root holds the largest value; each node ≤ its parent. <b>Min heap</b>: root holds the smallest value; each node ≥ its parent.",
   "bk": "Codeless DSA ch3"
  },
  {
   "id": "atb-d0038",
   "unit": "hashing",
   "topic": "Hashing",
   "term": "Hash value",
   "html": "<b>Hash value</b>: the fixed-size output a hash function produces from an input of any size.",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-d0039",
   "unit": "hashing",
   "topic": "Hashing",
   "term": "Hash collision",
   "html": "<b>Hash collision</b>: two different inputs producing the same hash value.",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-d0040",
   "unit": "hashing",
   "topic": "Hashing",
   "term": "Hash table",
   "html": "<b>Hash table</b>: a key-value lookup structure that hashes each key to an array index, giving typical lookup in <b>O(1)</b> time.",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-d0041",
   "unit": "hashing",
   "topic": "Hashing",
   "term": "Chaining",
   "html": "<b>Chaining</b>: resolving collisions by storing a <b>linked list</b> at each array slot, so keys with the same hash share that slot.",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-d0042",
   "unit": "hashing",
   "topic": "Hashing",
   "term": "Encryption / decryption",
   "html": "<b>Encryption</b>: converting plaintext into ciphertext with a key. <b>Decryption</b>: converting ciphertext back to plaintext.",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-d0043",
   "unit": "hashing",
   "topic": "Hashing",
   "term": "Public-key cryptosystem",
   "html": "<b>Public-key cryptosystem</b>: uses a <b>public key</b> to encrypt and a different <b>secret key</b> to decrypt, solving the shared-key distribution problem.",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-d0044",
   "unit": "hashing",
   "topic": "Hashing",
   "term": "Spoofing",
   "html": "<b>Spoofing</b>: pretending to be someone else in a data exchange.",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-d0045",
   "unit": "hashing",
   "topic": "Hashing",
   "term": "Cyclic redundancy check",
   "html": "<b>CRC</b>: an error-detection method that attaches a checksum to a message so the receiver can detect corrupted data.",
   "bk": "Codeless DSA ch4"
  },
  {
   "id": "atb-d0046",
   "unit": "graphs",
   "topic": "Graphs",
   "term": "Graph",
   "html": "<b>Graph</b>: a set of nodes (<b>vertices</b>) connected by links (<b>edges</b>) that shows how objects relate, with no root and no parent-child roles.",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-d0047",
   "unit": "graphs",
   "topic": "Graphs",
   "term": "Adjacent vertices",
   "html": "<b>Adjacent</b>: two vertices directly connected by an edge.",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-d0048",
   "unit": "graphs",
   "topic": "Graphs",
   "term": "Directed graph (digraph)",
   "html": "<b>Directed graph</b>: a graph whose edges each have a direction (arrows) and can be travelled only that way. In an <b>undirected graph</b>, edges work both ways.",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-d0049",
   "unit": "graphs",
   "topic": "Graphs",
   "term": "Weighted graph",
   "html": "<b>Weighted graph</b>: a graph whose edges carry values such as distance, cost or time. It may be directed or undirected.",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-d0050",
   "unit": "graphs",
   "topic": "Graphs",
   "term": "Path",
   "html": "<b>Path</b>: the sequence of edges followed to get from one vertex to another.",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-d0051",
   "unit": "graphs",
   "topic": "Graphs",
   "term": "Loop",
   "html": "<b>Loop</b>: an edge that connects a vertex to itself, so its start and end coincide.",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-d0052",
   "unit": "graphs",
   "topic": "Graphs",
   "term": "Subgraph",
   "html": "<b>Subgraph</b>: a graph that sits within a larger graph.",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-d0053",
   "unit": "graphs",
   "topic": "Graphs",
   "term": "Primary key / foreign key",
   "html": "<b>Primary key</b>: the field that uniquely identifies each row of a table. <b>Foreign key</b>: a field in one table that refers to another table's primary key, creating a relationship.",
   "bk": "Codeless DSA ch5"
  },
  {
   "id": "atb-d0054",
   "unit": "searching",
   "topic": "Searching",
   "term": "Linear search",
   "html": "<b>Linear search</b>: comparing the target with each element in turn from the start until it is found or the list ends. Time complexity <b>O(n)</b>; no sorting needed.",
   "bk": "Codeless DSA ch6"
  },
  {
   "id": "atb-d0055",
   "unit": "searching",
   "topic": "Searching",
   "term": "Binary search",
   "html": "<b>Binary search</b>: on <b>sorted</b> data, repeatedly compare the target with the middle element and discard the half that cannot contain it. Time complexity <b>O(log n)</b>.",
   "bk": "Codeless DSA ch6"
  },
  {
   "id": "atb-d0056",
   "unit": "complexity",
   "topic": "Complexity",
   "term": "Logarithm",
   "html": "<b>Logarithm</b>: the inverse of an exponent — the power a base must be raised to in order to give a number. log₂ 32 = 5 because 2⁵ = 32.",
   "bk": "Codeless DSA ch6"
  },
  {
   "id": "atb-d0057",
   "unit": "complexity",
   "topic": "Complexity",
   "term": "Linear (growth)",
   "html": "<b>Linear</b>: representable as a straight line; an O(n) algorithm's time grows in direct proportion to the input.",
   "bk": "Codeless DSA ch6"
  },
  {
   "id": "atb-d0058",
   "unit": "searching",
   "topic": "Searching",
   "term": "Elimination (halving) step",
   "html": "<b>Elimination step</b>: in binary search, discarding the middle element and the half on the wrong side of it after one comparison.",
   "bk": "Codeless DSA ch6"
  },
  {
   "id": "atb-d0059",
   "unit": "complexity",
   "topic": "Complexity",
   "term": "Euler's number e",
   "html": "<b>e</b> (≈ 2.718): the base of <b>natural logarithms</b>, used in growth, decay and finance. Search analysis uses base-2 logarithms instead.",
   "bk": "Codeless DSA ch6"
  },
  {
   "id": "atb-d0060",
   "unit": "basics",
   "topic": "Basics",
   "term": "Terminator symbol",
   "html": "<b>Terminator</b>: the flowchart symbol for <b>Start</b> and <b>End</b>. One start; there may be several ends.",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-d0061",
   "unit": "basics",
   "topic": "Basics",
   "term": "Predefined process",
   "html": "<b>Predefined process</b>: a flowchart symbol for a module of steps defined elsewhere — the lecture's function-call box with double vertical lines.",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-d0062",
   "unit": "basics",
   "topic": "Basics",
   "term": "Selection structures",
   "html": "<b>Selection (decision) structures</b>: <b>if-then</b>, <b>if-then-else</b> and <b>switch</b> — they choose which steps run.",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-d0063",
   "unit": "basics",
   "topic": "Basics",
   "term": "Loop structures",
   "html": "<b>Loop structures</b>: <b>while</b> (test first, may run zero times) and <b>do-while</b> (run first, at least once).",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-d0064",
   "unit": "basics",
   "topic": "Basics",
   "term": "Infinite loop",
   "html": "<b>Infinite loop</b>: a loop whose exit condition never becomes true, so it runs forever — a failure of finiteness.",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-d0065",
   "unit": "basics",
   "topic": "Basics",
   "term": "Switch structure",
   "html": "<b>Switch</b>: branches to one of several blocks depending on the value of an expression, with a <b>default</b> block if no case matches.",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-d0066",
   "unit": "basics",
   "topic": "Basics",
   "term": "Three stages of an algorithm",
   "html": "<b>Input → processing → output</b>: data is loaded in a usable form, worked on (calculated, searched, sorted), and sent to a device or other software.",
   "bk": "Codeless DSA ch12"
  },
  {
   "id": "atb-d0067",
   "unit": "trees",
   "topic": "Trees — the vocabulary",
   "term": "Non-linear data structure",
   "html": "A <b>non-linear data structure</b> allows <b>several paths</b> onward from an element, so the next element is not fixed. Trees and graphs are non-linear; arrays, linked lists, stacks and queues are linear.",
   "lec": 12
  },
  {
   "id": "atb-d0068",
   "unit": "trees",
   "topic": "Depth and height",
   "term": "Depth of a node (d)",
   "html": "<b>Depth (d)</b> = the number of <b>edges</b> from a node to the root. The root has d = 0, and every node has its own depth.",
   "lec": 12
  },
  {
   "id": "atb-d0069",
   "unit": "trees",
   "topic": "Depth and height",
   "term": "Height of a tree (h)",
   "html": "<b>Height (h)</b> = the <b>maximum depth</b> in the tree, i.e. the number of edges from the root to its deepest leaf. One value for the whole tree.",
   "lec": 12
  },
  {
   "id": "atb-d0070",
   "unit": "trees",
   "topic": "Tree traversals",
   "term": "Pre-order, in-order, post-order",
   "html": "The three <b>depth-first</b> traversals, named by where the root goes: <b>pre</b> = root, left, right · <b>in</b> = left, root, right · <b>post</b> = left, right, root. Left always comes before right.",
   "lec": 12
  },
  {
   "id": "atb-d0071",
   "unit": "trees",
   "topic": "Tree traversals",
   "term": "Level-order traversal",
   "html": "<b>Level-order</b> (breadth-first) traversal visits the tree <b>level by level, top to bottom</b>, and <b>left to right</b> within each level.",
   "lec": 12
  },
  {
   "id": "atb-d0072",
   "unit": "trees",
   "topic": "Tree traversals",
   "term": "Single-child convention",
   "html": "When a node has only <b>one child</b>, the lecture treats it as the <b>left</b> child when traversing.",
   "lec": 12
  },
  {
   "id": "atb-d0073",
   "unit": "trees",
   "topic": "Six types of tree",
   "term": "General tree",
   "html": "A <b>general tree</b> places no limit on the number of children a node may have — no minimum, no maximum.",
   "lec": 14
  },
  {
   "id": "atb-d0074",
   "unit": "trees",
   "topic": "Six types of tree",
   "term": "Complete binary tree",
   "html": "A <b>complete binary tree</b> is a binary tree in which every level except the last has nodes with exactly two children, and the last level is filled <b>from left to right</b>.",
   "lec": 14
  },
  {
   "id": "atb-d0075",
   "unit": "trees",
   "topic": "Binary search trees and AVL balancing",
   "term": "AVL tree",
   "html": "An <b>AVL tree</b> is a self-balancing BST: at every node the heights of the left and right subtrees differ by <b>at most one</b>, restored by <b>rotation</b> after an insertion.",
   "lec": 14
  },
  {
   "id": "atb-d0076",
   "unit": "trees",
   "topic": "Binary search trees and AVL balancing",
   "term": "Unbalanced tree",
   "html": "An <b>unbalanced</b> BST leans to one side — e.g. after sorted input — so searching becomes sequential, like walking a linked list.",
   "lec": 14
  },
  {
   "id": "atb-d0077",
   "unit": "trees",
   "topic": "Heaps and priority queues",
   "term": "Heap (lecture definition)",
   "html": "A <b>heap</b> is a <b>complete binary tree</b> in which every parent is ≥ its children (<b>max heap</b>, largest at the root) or ≤ its children (<b>min heap</b>, smallest at the root). It is not a BST.",
   "lec": 14
  },
  {
   "id": "atb-d0078",
   "unit": "graphs",
   "topic": "Graphs vs trees",
   "term": "Graph (lecture definition)",
   "html": "A <b>graph</b> captures the <b>relationships</b> between nodes rather than a hierarchy; any node can be connected to any number of others.",
   "lec": 15
  },
  {
   "id": "atb-d0079",
   "unit": "graphs",
   "topic": "G = (V, E) and degree",
   "term": "G = (V, E)",
   "html": "A graph is written <b>G = (V, E)</b>: <b>V</b> is the set of vertices and <b>E</b> the set of edges that exist, each written as a pair such as (A, P). Sets take curly braces.",
   "lec": 15
  },
  {
   "id": "atb-d0080",
   "unit": "graphs",
   "topic": "G = (V, E) and degree",
   "term": "Vertex / vertices",
   "html": "A <b>vertex</b> (plural <b>vertices</b>) is an object or entity in a graph — e.g. each user on a social network. It is what a tree calls a node.",
   "lec": 15
  },
  {
   "id": "atb-d0081",
   "unit": "graphs",
   "topic": "G = (V, E) and degree",
   "term": "Degree of a vertex",
   "html": "The <b>degree</b> of a vertex is the number of edges directly connected to it.",
   "lec": 15
  },
  {
   "id": "atb-d0082",
   "unit": "graphs",
   "topic": "Directed graphs and in/out-degree",
   "term": "Undirected graph",
   "html": "An <b>undirected graph</b> has edges with no direction: if the relationship holds one way it holds both ways (cousin of, Facebook friend).",
   "lec": 16
  },
  {
   "id": "atb-d0083",
   "unit": "graphs",
   "topic": "Directed graphs and in/out-degree",
   "term": "In-degree / out-degree",
   "html": "In a directed graph, <b>in-degree</b> = edges coming into a vertex (your followers) and <b>out-degree</b> = edges going out of it (accounts you follow).",
   "lec": 16
  },
  {
   "id": "atb-d0084",
   "unit": "graphs",
   "topic": "Weighted, connected and cyclic graphs",
   "term": "Connected / disconnected graph",
   "html": "A graph is <b>connected</b> if every vertex can be reached from every other vertex, and <b>disconnected</b> if some part is isolated.",
   "lec": 16
  },
  {
   "id": "atb-d0085",
   "unit": "graphs",
   "topic": "Weighted, connected and cyclic graphs",
   "term": "Cyclic / acyclic graph",
   "html": "A graph is <b>cyclic</b> if you can return to the starting vertex without retracing your path, and <b>acyclic</b> if the only way back is to retrace it.",
   "lec": 16
  },
  {
   "id": "atb-d0086",
   "unit": "graphs",
   "topic": "Depth-first search (DFS) on a stack",
   "term": "Depth-first search (DFS)",
   "html": "<b>DFS</b> explores a graph by going as far as possible along one path before <b>backtracking</b>. It is implemented with a <b>stack</b> and used to check whether any connection exists.",
   "lec": 17
  },
  {
   "id": "atb-d0087",
   "unit": "graphs",
   "topic": "Breadth-first search (BFS) on a queue",
   "term": "Breadth-first search (BFS)",
   "html": "<b>BFS</b> visits every node at the current level before moving to the next level. It is implemented with a <b>queue</b> and used to find the degree of separation (number of hops).",
   "lec": 17
  },
  {
   "id": "atb-d0088",
   "unit": "graphs",
   "topic": "Depth-first search (DFS) on a stack",
   "term": "Backtracking",
   "html": "<b>Backtracking</b>: in DFS, when a node has no unvisited neighbours, step back one level and continue from the last node that still has one.",
   "lec": 17
  },
  {
   "id": "atb-d0089",
   "unit": "graphs",
   "topic": "Breadth-first search (BFS) on a queue",
   "term": "Degree of separation",
   "html": "The <b>degree of separation</b> between two people is the number of hops (edges) on the shortest connection between them, which BFS finds level by level.",
   "lec": 17
  },
  {
   "id": "atb-d0090",
   "unit": "graphs",
   "topic": "Depth-first search (DFS) on a stack",
   "term": "Neighbour (graph)",
   "html": "In a graph, vertices joined by an edge are <b>neighbours</b>. Graphs avoid the tree words parent and child, because no vertex is above another.",
   "lec": 18
  },
  {
   "id": "atb-d0091",
   "unit": "hashing",
   "topic": "Hash functions and mod",
   "term": "Digest (message digest)",
   "html": "The <b>digest</b> or <b>message digest</b> is the fixed-length, usually alphanumeric output of a hash function.",
   "lec": 19
  },
  {
   "id": "atb-d0092",
   "unit": "hashing",
   "topic": "Hash functions and mod",
   "term": "mod (modulo)",
   "html": "<b>n mod X</b> = the <b>remainder</b> when n is divided by X. mod X gives X possible values, 0 to X − 1; mod 10 returns a number's last digit.",
   "lec": 19
  },
  {
   "id": "atb-d0093",
   "unit": "hashing",
   "topic": "Hash tables, collisions and chaining",
   "term": "Index–key–value",
   "html": "A hash table entry: the <b>key</b> identifies the record (roll number), the <b>value</b> is its data (name), and the <b>index</b> is the key's hash, where the search starts.",
   "lec": 19
  },
  {
   "id": "atb-d0094",
   "unit": "hashing",
   "topic": "Hash tables, collisions and chaining",
   "term": "Hash chaining",
   "html": "<b>Hash chaining</b> resolves collisions by linking records with the same index into a <b>linked list</b> at that index.",
   "lec": 19
  },
  {
   "id": "atb-d0095",
   "unit": "hashing",
   "topic": "Hashing for security: passwords and integrity",
   "term": "Avalanche effect",
   "html": "The <b>avalanche effect</b>: changing even one character of the input produces a completely different hash.",
   "lec": 19
  },
  {
   "id": "atb-d0096",
   "unit": "hashing",
   "topic": "Hashing for security: passwords and integrity",
   "term": "Collision resistance",
   "html": "<b>Collision resistance</b>: ideally, no two different inputs give the same hash. Required for security hashes; indexing hashes can tolerate collisions.",
   "lec": 19
  },
  {
   "id": "atb-d0097",
   "unit": "hashing",
   "topic": "Hashing for security: passwords and integrity",
   "term": "Integrity check",
   "html": "An <b>integrity check</b> sends data with its hash; the receiver recomputes the hash from the data and compares. A mismatch means the data was altered or corrupted.",
   "lec": 19
  },
  {
   "id": "atb-d0098",
   "unit": "blockchain",
   "topic": "Blocks, hashes and the chain",
   "term": "Blockchain",
   "html": "A <b>blockchain</b> stores transactions in <b>blocks</b> added only at the end, each storing the <b>hash of the previous block</b>, with copies kept on many nodes of a network.",
   "lec": 20
  },
  {
   "id": "atb-d0099",
   "unit": "blockchain",
   "topic": "Blocks, hashes and the chain",
   "term": "Genesis block",
   "html": "The <b>genesis block</b> is the first block of a blockchain — its head node. Its previous-hash field is <b>null</b>.",
   "lec": 20
  },
  {
   "id": "atb-d0100",
   "unit": "blockchain",
   "topic": "Merkle trees and decentralisation",
   "term": "Merkle root",
   "html": "The <b>Merkle root</b> is the single hash at the top of a <b>Merkle tree</b> built by hashing each transaction and then hashing groups of hashes. It is stored in the block header.",
   "lec": 20
  },
  {
   "id": "atb-d0101",
   "unit": "blockchain",
   "topic": "Merkle trees and decentralisation",
   "term": "Consensus mechanism",
   "html": "A <b>consensus mechanism</b> is the protocol blockchain nodes use to agree on the authentic copy of each block.",
   "lec": 20
  },
  {
   "id": "atb-d0102",
   "unit": "blockchain",
   "topic": "Merkle trees and decentralisation",
   "term": "Permissioned vs public blockchain",
   "html": "A <b>permissioned</b> blockchain's nodes are designated by the organisation running it; a <b>public</b> blockchain (e.g. Bitcoin) lets any node join that follows the protocol, e.g. via proof of work.",
   "lec": 20
  },
  {
   "id": "atb-d0103",
   "unit": "blockchain",
   "topic": "Blockchain applications and limits",
   "term": "Smart contract",
   "html": "A <b>smart contract</b> has its conditions built in and executes the relevant clause automatically when a condition is met; stored on a blockchain, it is hard to tamper with.",
   "lec": 20
  },
  {
   "id": "atb-d0104",
   "unit": "trees",
   "topic": "Depth and height",
   "term": "Subtree",
   "html": "A <b>subtree</b> is a child of some node together with everything below it. Each child of the root heads one subtree, and the deepest of them sets the tree's height (L#18 slides).",
   "lec": 18
  }
 ],
 "questions": [
  {
   "id": "atb-q0001",
   "topic": "Basics",
   "q": "An algorithm is best defined as:",
   "c": [
    "A program written in a specific language",
    "A series of organised steps converting input data into a desired output",
    "A flowchart of a business process",
    "A reusable block of code"
   ],
   "a": [
    1
   ],
   "w": "The definition is deliberately language-free — the logic, not the implementation."
  },
  {
   "id": "atb-q0002",
   "topic": "Basics",
   "q": "In algorithm terminology, what changes with each run?",
   "c": [
    "The variables",
    "The data",
    "The functions",
    "The algorithm"
   ],
   "a": [
    1
   ],
   "w": "Data is the actual values, which differ each execution. Variables are the containers that hold them."
  },
  {
   "id": "atb-q0003",
   "topic": "Basics",
   "q": "A reusable subgroup of organised steps within a larger algorithm is a:",
   "c": [
    "Variable",
    "Function",
    "Module",
    "Loop"
   ],
   "a": [
    1
   ],
   "w": "A function — 'provide heat' in the tea analogy, the same wherever it appears."
  },
  {
   "id": "atb-q0004",
   "topic": "Basics",
   "q": "In a flowchart, which shape represents input or output?",
   "c": [
    "Rectangle",
    "Diamond",
    "Trapezoid",
    "Rounded rectangle"
   ],
   "a": [
    2
   ],
   "w": "Trapezoid (slanted rectangle) = input/output. Rectangle = process, diamond = decision, rounded rectangle = start/end."
  },
  {
   "id": "atb-q0005",
   "topic": "Basics",
   "q": "Which flowchart shape represents a decision?",
   "c": [
    "Diamond",
    "Trapezoid",
    "Rectangle with double vertical lines",
    "Arrow"
   ],
   "a": [
    0
   ],
   "w": "Diamond. The rectangle with double vertical lines is a function call."
  },
  {
   "id": "atb-q0006",
   "topic": "Basics",
   "q": "In a single execution of an algorithm with decision points:",
   "c": [
    "Every path is executed",
    "Only one path is taken, determined by the decision outcomes",
    "All paths run in parallel",
    "Paths execute in the order they were written"
   ],
   "a": [
    1
   ],
   "w": "His key observation from the ATM example — each run takes one route and skips the others."
  },
  {
   "id": "atb-q0007",
   "topic": "Basics",
   "q": "Why use variables instead of hard-coding values?",
   "c": [
    "Variables run faster",
    "Variables make the same algorithm reusable with different data",
    "Variables use less memory",
    "Variables are required by all programming languages"
   ],
   "a": [
    1
   ],
   "w": "Hard-coded values make the algorithm work once. Variables let it run on any dataset."
  },
  {
   "id": "atb-q0008",
   "topic": "Basics",
   "q": "Why are business systems easier to algorithmise than robotics?",
   "c": [
    "They process less data",
    "They are deterministic and calculation-based, with less real-time physical decision-making",
    "They use simpler programming languages",
    "They have fewer users"
   ],
   "a": [
    1
   ],
   "w": "Physical systems must make real-time decisions about movement; business systems are largely calculation."
  },
  {
   "id": "atb-q0009",
   "topic": "Pseudocode",
   "q": "Pseudocode is:",
   "c": [
    "A simplified programming language with its own compiler",
    "Plain English written in a structured, code-like way, not tied to any language",
    "A type of flowchart",
    "Machine code"
   ],
   "a": [
    1
   ],
   "w": "It is the bridge between flowchart and real code, readable by programmers and non-programmers alike."
  },
  {
   "id": "atb-q0010",
   "topic": "Pseudocode",
   "q": "Which data type stores only two possible values?",
   "c": [
    "Integer",
    "Float",
    "Boolean",
    "Character"
   ],
   "a": [
    2
   ],
   "w": "Boolean — 0/1, yes/no, true/false."
  },
  {
   "id": "atb-q0011",
   "topic": "Pseudocode",
   "q": "A student's CGPA of 8.75 should be stored as:",
   "c": [
    "Integer",
    "Float",
    "Boolean",
    "Character"
   ],
   "a": [
    1
   ],
   "w": "Float, because it has a decimal component."
  },
  {
   "id": "atb-q0012",
   "topic": "Pseudocode",
   "q": "A customer ID containing both letters and numbers must be stored as:",
   "c": [
    "Integer",
    "Float",
    "Character/text",
    "Boolean"
   ],
   "a": [
    2
   ],
   "w": "Text. He flagged this specifically — it looks like a number but isn't one."
  },
  {
   "id": "atb-q0013",
   "topic": "Pseudocode",
   "q": "Why is Boolean preferred over integer for a pass/fail value?",
   "c": [
    "It is faster to type",
    "It uses less memory and prevents invalid values",
    "Integers cannot store 0 and 1",
    "It is required by Python"
   ],
   "a": [
    1
   ],
   "w": "Memory efficiency plus error prevention — an integer would allow 7, which is meaningless here."
  },
  {
   "id": "atb-q0014",
   "topic": "Pseudocode",
   "q": "What is the correct notation for calling a function in pseudocode?",
   "c": [
    "function_name = variable(parameters)",
    "variable = function_name(parameters)",
    "call function_name with variable",
    "function_name -> variable"
   ],
   "a": [
    1
   ],
   "w": "variable = function_name(parameters), e.g. AVG = average(S1, S2, S3, S4, S5)."
  },
  {
   "id": "atb-q0015",
   "topic": "Pseudocode",
   "q": "Which are benefits of using functions? (Select all)",
   "c": [
    "Reduces the number of lines",
    "Enables reuse across programs",
    "Makes algorithms easier to maintain",
    "Removes the need for variables"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "Functions do not replace variables — they still take parameters and return values into variables.",
   "multi": true
  },
  {
   "id": "atb-q0016",
   "topic": "Pseudocode",
   "q": "Who writes the Software Requirement Specification, bridging business and developers?",
   "c": [
    "The developer",
    "The business analyst",
    "The end user",
    "The project sponsor"
   ],
   "a": [
    1
   ],
   "w": "The business analyst gathers requirements from domain experts and converts them into technical requirements."
  },
  {
   "id": "atb-q0017",
   "topic": "Properties",
   "q": "How many core technical properties of an algorithm did he list?",
   "c": [
    "Three",
    "Four",
    "Five",
    "Nine"
   ],
   "a": [
    2
   ],
   "w": "Five core: finiteness, definiteness, well-defined inputs, well-defined outputs, effectiveness. Plus four execution properties, making nine in total."
  },
  {
   "id": "atb-q0018",
   "topic": "Properties",
   "q": "A retail counter algorithm that loops back to 'has a customer entered?' forever violates:",
   "c": [
    "Definiteness",
    "Finiteness",
    "Generality",
    "Feasibility"
   ],
   "a": [
    1
   ],
   "w": "Finiteness. His fix was to add a reset condition — reset the counter at midnight."
  },
  {
   "id": "atb-q0019",
   "topic": "Properties",
   "q": "'Take some tea leaves, add a little milk, boil for a while' violates:",
   "c": [
    "Finiteness",
    "Definiteness",
    "Effectiveness",
    "Determinism"
   ],
   "a": [
    1
   ],
   "w": "Definiteness — 'some', 'a little' and 'a while' each have multiple interpretations."
  },
  {
   "id": "atb-q0020",
   "topic": "Properties",
   "q": "A loan algorithm that outputs only 'Processing complete' violates:",
   "c": [
    "Well-defined inputs",
    "Well-defined outputs",
    "Finiteness",
    "Feasibility"
   ],
   "a": [
    1
   ],
   "w": "The user cannot tell whether they were approved or rejected. Good output is 'Approved' or 'Rejected'."
  },
  {
   "id": "atb-q0021",
   "topic": "Properties",
   "q": "'Order more items whenever stock looks low' violates effectiveness because:",
   "c": [
    "It never terminates",
    "'Low' and 'more' are undefined, so different managers act differently and costs become inconsistent",
    "It requires too much memory",
    "It only works for one product"
   ],
   "a": [
    1
   ],
   "w": "His effective version: if stock < 50 units, raise a purchase order for 200 units."
  },
  {
   "id": "atb-q0022",
   "topic": "Properties",
   "q": "An algorithm that randomly chooses a discount between 5% and 20% violates:",
   "c": [
    "Finiteness",
    "Determinism",
    "Generality",
    "Definiteness"
   ],
   "a": [
    1
   ],
   "w": "Determinism requires the same input to produce the same output every time."
  },
  {
   "id": "atb-q0023",
   "topic": "Properties",
   "q": "'Determine the customer's true intention' as an algorithm step violates:",
   "c": [
    "Determinism",
    "Feasibility",
    "Finiteness",
    "Generality"
   ],
   "a": [
    1
   ],
   "w": "It is not strictly executable by a standard computing system without disproportionately complex AI."
  },
  {
   "id": "atb-q0024",
   "topic": "Properties",
   "q": "Giving a bonus only to employees named 'Rahul' violates:",
   "c": [
    "Generality",
    "Determinism",
    "Finiteness",
    "Effectiveness"
   ],
   "a": [
    0
   ],
   "w": "Generality requires the algorithm to handle all valid instances, not one special case."
  },
  {
   "id": "atb-q0025",
   "topic": "Properties",
   "q": "Visa approval is a classic example of a process that is NOT:",
   "c": [
    "Finite",
    "Deterministic",
    "General",
    "Feasible"
   ],
   "a": [
    1
   ],
   "w": "It depends on an officer's subjective judgement, so the same application can produce different outcomes."
  },
  {
   "id": "atb-q0026",
   "topic": "Properties",
   "q": "Why was cloud computing infeasible in the 1990s despite the technology existing?",
   "c": [
    "The algorithms had not been invented",
    "Internet speeds were slow and infrastructure expensive",
    "There was no business demand",
    "Security standards did not exist"
   ],
   "a": [
    1
   ],
   "w": "Feasibility is relative to available resources, and it changes over time. Machine learning is his other example — 1970s algorithms, recent feasibility."
  },
  {
   "id": "atb-q0027",
   "topic": "Properties",
   "q": "Which are execution and design properties rather than core technical ones? (Select all)",
   "c": [
    "Language independence",
    "Determinism",
    "Feasibility",
    "Finiteness"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "Finiteness is a core technical property. The fourth execution property is generality.",
   "multi": true
  },
  {
   "id": "atb-q0028",
   "topic": "Properties",
   "q": "Loading every employee's record into memory at once rather than one at a time fails:",
   "c": [
    "Generality",
    "Feasibility",
    "Definiteness",
    "Finiteness"
   ],
   "a": [
    1
   ],
   "w": "It is costly and impractical for a normal computing system — a resource constraint, so feasibility."
  },
  {
   "id": "atb-q0029",
   "topic": "Algorithm types",
   "q": "Splitting a company audit across regional offices and combining the reports is:",
   "c": [
    "Greedy",
    "Divide and conquer",
    "Dynamic programming",
    "Linear search"
   ],
   "a": [
    1
   ],
   "w": "Divide into sub-problems, solve independently, recombine."
  },
  {
   "id": "atb-q0030",
   "topic": "Algorithm types",
   "q": "A cashier giving ₹350 change as one ₹200, one ₹100 and one ₹50 note is using:",
   "c": [
    "Divide and conquer",
    "A greedy algorithm",
    "Dynamic programming",
    "A priority queue"
   ],
   "a": [
    1
   ],
   "w": "Largest denomination first — the locally optimal choice at each step."
  },
  {
   "id": "atb-q0031",
   "topic": "Algorithm types",
   "q": "Planning inventory from three years of demand history is:",
   "c": [
    "Greedy",
    "Divide and conquer",
    "Dynamic programming",
    "Deterministic search"
   ],
   "a": [
    2
   ],
   "w": "Dynamic programming decides for the future from analysis of past data."
  },
  {
   "id": "atb-q0032",
   "topic": "Algorithm types",
   "q": "A manufacturer setting monthly output from current inventory, past production and expected demand uses:",
   "c": [
    "Divide and conquer",
    "Greedy",
    "Dynamic programming",
    "Generality"
   ],
   "a": [
    2
   ],
   "w": "Past data driving a future decision."
  },
  {
   "id": "atb-q0033",
   "topic": "Algorithm types",
   "q": "An investor with a limited budget taking the highest immediate return first is using:",
   "c": [
    "Greedy",
    "Dynamic programming",
    "Divide and conquer",
    "Priority scheduling"
   ],
   "a": [
    0
   ],
   "w": "Best available now, not necessarily globally optimal."
  },
  {
   "id": "atb-q0034",
   "topic": "Arrays",
   "q": "A linear data structure is one where:",
   "c": [
    "Elements are sorted",
    "Elements are arranged sequentially, so reaching one lets you find its neighbours",
    "All elements are the same type",
    "Access is always instant"
   ],
   "a": [
    1
   ],
   "w": "Sequential arrangement with a defined relationship between positions."
  },
  {
   "id": "atb-q0035",
   "topic": "Arrays",
   "q": "Which is NOT a property of an array?",
   "c": [
    "All elements share one data type",
    "Elements are stored in contiguous memory",
    "Elements are accessed by index",
    "Size can grow freely as elements are added"
   ],
   "a": [
    3
   ],
   "w": "Fixed length is an array's defining limitation. Growing means creating a new array and copying."
  },
  {
   "id": "atb-q0036",
   "topic": "Arrays",
   "q": "In an array of five elements, the valid index range is:",
   "c": [
    "1 to 5",
    "0 to 5",
    "0 to 4",
    "1 to 4"
   ],
   "a": [
    2
   ],
   "w": "Indexing starts at 0, so a size-n array runs 0 to n−1."
  },
  {
   "id": "atb-q0037",
   "topic": "Arrays",
   "q": "In a 2D array written array[i][j], what do i and j represent?",
   "c": [
    "i = column, j = row",
    "i = row, j = column",
    "i = size, j = type",
    "i = start, j = end"
   ],
   "a": [
    1
   ],
   "w": "Row first, then column. A 7×5 array holds 7 students × 5 subjects."
  },
  {
   "id": "atb-q0038",
   "topic": "Arrays",
   "q": "Inserting an element at index 0 of a full-ish array requires:",
   "c": [
    "Nothing special — it is instant",
    "Shifting every subsequent element forward by one position",
    "Creating a new array",
    "Converting to a linked list"
   ],
   "a": [
    1
   ],
   "w": "Element 4 moves to 5, 3 to 4, and so on. This is why middle and front insertion is slow."
  },
  {
   "id": "atb-q0039",
   "topic": "Arrays",
   "q": "When you delete an element from an array at a known index:",
   "c": [
    "The memory is freed and returned to the system",
    "The slot is set to null and the space remains allocated",
    "All later elements shift back automatically",
    "The array shrinks by one"
   ],
   "a": [
    1
   ],
   "w": "Null means 'nothing stored' — which is not the same as zero — and the allocation stays."
  },
  {
   "id": "atb-q0040",
   "topic": "Arrays",
   "q": "Searching an array when you do not know the index uses:",
   "c": [
    "Binary search",
    "Linear search from index 0",
    "Hash lookup",
    "Direct access"
   ],
   "a": [
    1
   ],
   "w": "Start at 0 and compare each element in turn, so cost depends on where the element sits."
  },
  {
   "id": "atb-q0041",
   "topic": "Arrays",
   "q": "Which are genuine limitations of arrays? (Select all)",
   "c": [
    "Fixed length set at creation",
    "Requires contiguous memory",
    "Insertion in the middle requires shifting",
    "Cannot store numbers"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "Arrays store numbers perfectly well — they just have to all be the same type.",
   "multi": true
  },
  {
   "id": "atb-q0042",
   "topic": "Arrays",
   "q": "Arrays are the better choice when:",
   "c": [
    "The number of elements changes constantly",
    "The size is known in advance and fast direct access matters",
    "Elements must be reordered frequently",
    "Memory is heavily fragmented"
   ],
   "a": [
    1
   ],
   "w": "Predictable, fixed-size datasets with frequent indexed access."
  },
  {
   "id": "atb-q0043",
   "topic": "Linked lists",
   "q": "In a singly linked list, the last node points to:",
   "c": [
    "The head",
    "Null",
    "Itself",
    "The second-last node"
   ],
   "a": [
    1
   ],
   "w": "Null marks the end. A circular linked list is the one that points back to the head."
  },
  {
   "id": "atb-q0044",
   "topic": "Linked lists",
   "q": "The entry point of a linked list is called the:",
   "c": [
    "Root",
    "Head",
    "Front",
    "Index"
   ],
   "a": [
    1
   ],
   "w": "The head. Front and rear belong to queues; root belongs to trees."
  },
  {
   "id": "atb-q0045",
   "topic": "Linked lists",
   "q": "Which linked list allows movement both forward and backward?",
   "c": [
    "Singly linked",
    "Doubly linked",
    "Circular",
    "Nested"
   ],
   "a": [
    1
   ],
   "w": "Doubly linked — it implements 'play previous', and often underlies a deque."
  },
  {
   "id": "atb-q0046",
   "topic": "Linked lists",
   "q": "Shuffling a music playlist implemented as a linked list works by:",
   "c": [
    "Copying the songs into a new order",
    "Rearranging only the pointer connections",
    "Sorting the array of songs",
    "Rebuilding the list from scratch"
   ],
   "a": [
    1
   ],
   "w": "The data stays where it is in memory; only the links change."
  },
  {
   "id": "atb-q0047",
   "topic": "Linked lists",
   "q": "Compared with an array, a linked list:",
   "c": [
    "Uses less memory per element",
    "Allows direct access by index",
    "Requires contiguous memory",
    "Does not require contiguous memory"
   ],
   "a": [
    3
   ],
   "w": "Nodes can sit anywhere. The trade-offs are extra memory for pointers and no random access."
  },
  {
   "id": "atb-q0048",
   "topic": "Linked lists",
   "q": "What is the main disadvantage of a linked list?",
   "c": [
    "It cannot grow",
    "No random access — you must follow links from the head",
    "It can only store one data type",
    "It cannot be reordered"
   ],
   "a": [
    1
   ],
   "w": "You cannot jump to the fifth element; you walk the chain."
  },
  {
   "id": "atb-q0049",
   "topic": "Linked lists",
   "q": "A programme with a varying number of semesters, each with a varying number of courses, is best modelled as:",
   "c": [
    "A 2D array",
    "A linked list of linked lists",
    "A circular queue",
    "A stack of arrays"
   ],
   "a": [
    1
   ],
   "w": "Fixed 8 semesters × 6 courses would suit a 2D array; variability at both levels calls for nested linked lists."
  },
  {
   "id": "atb-q0050",
   "topic": "Linked lists",
   "q": "Deleting a node from a linked list:",
   "c": [
    "Frees its memory immediately",
    "Only adjusts pointers; the node remains in memory but is unlinked",
    "Shifts all subsequent nodes",
    "Requires rebuilding the list"
   ],
   "a": [
    1
   ],
   "w": "The previous node is redirected past it. Efficient compared with array deletion."
  },
  {
   "id": "atb-q0051",
   "topic": "Stacks",
   "q": "A stack follows which principle?",
   "c": [
    "FIFO",
    "LIFO",
    "FCFS",
    "Priority"
   ],
   "a": [
    1
   ],
   "w": "Last In, First Out. Elements enter and leave only at the top."
  },
  {
   "id": "atb-q0052",
   "topic": "Stacks",
   "q": "Which stack operation removes and returns the top element?",
   "c": [
    "push()",
    "pop()",
    "peek()",
    "size()"
   ],
   "a": [
    1
   ],
   "w": "pop() takes no argument — it removes whatever is on top."
  },
  {
   "id": "atb-q0053",
   "topic": "Stacks",
   "q": "Which operation reads the top element without removing it?",
   "c": [
    "pop()",
    "peek()",
    "size()",
    "push()"
   ],
   "a": [
    1
   ],
   "w": "peek() — useful for checking before deciding whether to pop."
  },
  {
   "id": "atb-q0054",
   "topic": "Stacks",
   "q": "Stack overflow occurs when you:",
   "c": [
    "Pop from an empty stack",
    "Push onto a full stack",
    "Peek at an empty stack",
    "Call size() on a full stack"
   ],
   "a": [
    1
   ],
   "w": "Overflow is pushing to full. Popping from empty is underflow."
  },
  {
   "id": "atb-q0055",
   "topic": "Stacks",
   "q": "Clicking the browser Back button with no history left is an example of:",
   "c": [
    "Stack overflow",
    "Stack underflow",
    "Queue underflow",
    "A deque operation"
   ],
   "a": [
    1
   ],
   "w": "Underflow — attempting to pop from an empty stack."
  },
  {
   "id": "atb-q0056",
   "topic": "Stacks",
   "q": "Static stacks are typically implemented using ___, and dynamic stacks using ___.",
   "c": [
    "linked lists; arrays",
    "arrays; linked lists",
    "arrays; arrays",
    "linked lists; linked lists"
   ],
   "a": [
    1
   ],
   "w": "Arrays give a fixed size; linked lists grow."
  },
  {
   "id": "atb-q0057",
   "topic": "Stacks",
   "q": "Which application did he cite as having a default limit of 100 undo operations?",
   "c": [
    "Adobe Photoshop",
    "Microsoft Excel",
    "Microsoft Word",
    "Google Docs"
   ],
   "a": [
    1
   ],
   "w": "Excel 100, Photoshop 50. Word is dynamic and limited only by RAM."
  },
  {
   "id": "atb-q0058",
   "topic": "Stacks",
   "q": "Which are standard applications of stacks? (Select all)",
   "c": [
    "Undo/redo functionality",
    "Function call management",
    "Browser navigation history",
    "CPU round-robin scheduling"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "Round-robin scheduling is a circular queue application, not a stack one.",
   "multi": true
  },
  {
   "id": "atb-q0059",
   "topic": "Queues",
   "q": "A queue follows which principle?",
   "c": [
    "LIFO",
    "FIFO",
    "Priority always",
    "Random access"
   ],
   "a": [
    1
   ],
   "w": "First In, First Out — also described as first come, first served."
  },
  {
   "id": "atb-q0060",
   "topic": "Queues",
   "q": "In a queue, elements are added at the ___ and removed from the ___.",
   "c": [
    "front; rear",
    "rear; front",
    "top; top",
    "front; front"
   ],
   "a": [
    1
   ],
   "w": "Enqueue at the rear, dequeue from the front."
  },
  {
   "id": "atb-q0061",
   "topic": "Queues",
   "q": "Which pointer moves during an enqueue operation?",
   "c": [
    "The front pointer",
    "The rear pointer",
    "Both",
    "Neither"
   ],
   "a": [
    1
   ],
   "w": "Enqueue moves the rear. Dequeue moves the front. Each operation moves only its own pointer."
  },
  {
   "id": "atb-q0062",
   "topic": "Queues",
   "q": "When the first element is added to an empty queue, it occupies:",
   "c": [
    "The front position only",
    "The rear position only",
    "Both the front and rear positions",
    "Neither until a second element arrives"
   ],
   "a": [
    2
   ],
   "w": "With one element, front and rear are the same position."
  },
  {
   "id": "atb-q0063",
   "topic": "Queues",
   "q": "What is the main limitation of a linear queue?",
   "c": [
    "It cannot be searched",
    "Once the rear reaches the end of the array, no more can be added even if dequeues freed space at the front",
    "It cannot store duplicates",
    "It requires a linked list"
   ],
   "a": [
    1
   ],
   "w": "Memory wastage — exactly the problem the circular queue solves."
  },
  {
   "id": "atb-q0064",
   "topic": "Queues",
   "q": "A circular queue solves the linear queue's problem by:",
   "c": [
    "Sorting the elements",
    "Connecting the last position back to the first so freed space is reused",
    "Doubling the array size",
    "Using two front pointers"
   ],
   "a": [
    1
   ],
   "w": "It can theoretically be used indefinitely for insertion and deletion."
  },
  {
   "id": "atb-q0065",
   "topic": "Queues",
   "q": "Traffic lights cycling red → green → yellow → red are an example of:",
   "c": [
    "A priority queue",
    "A circular queue",
    "A deque",
    "A stack"
   ],
   "a": [
    1
   ],
   "w": "The cycle returns to the start — circular. Round-robin CPU scheduling and turn-based multiplayer games are the same pattern."
  },
  {
   "id": "atb-q0066",
   "topic": "Queues",
   "q": "In a priority queue, what happens when two elements have the same priority?",
   "c": [
    "The later one is served first",
    "Standard FIFO order applies",
    "One is discarded",
    "They are merged"
   ],
   "a": [
    1
   ],
   "w": "Priority decides the order; ties fall back to arrival order."
  },
  {
   "id": "atb-q0067",
   "topic": "Queues",
   "q": "Hospital emergency triage is an example of:",
   "c": [
    "A linear queue",
    "A circular queue",
    "A priority queue",
    "A deque"
   ],
   "a": [
    2
   ],
   "w": "Served by urgency, not arrival time. Tatkal bookings and air traffic control were his other examples."
  },
  {
   "id": "atb-q0068",
   "topic": "Queues",
   "q": "A double-ended queue (deque) allows:",
   "c": [
    "Insertion at both ends but deletion only at the front",
    "Insertion and deletion at both the front and the rear",
    "Insertion only at the rear but deletion at both ends",
    "Priority-based service"
   ],
   "a": [
    1
   ],
   "w": "Four operations: insert front, insert rear, delete front, delete rear. It combines FIFO and LIFO."
  },
  {
   "id": "atb-q0069",
   "topic": "Queues",
   "q": "Browser back and forward buttons are best modelled by a:",
   "c": [
    "Circular queue",
    "Priority queue",
    "Deque",
    "Linear queue"
   ],
   "a": [
    2
   ],
   "w": "Movement through history in both directions. Undo/redo is the same shape, and a deque is usually built on a doubly linked list."
  },
  {
   "id": "atb-q0070",
   "topic": "Queues",
   "q": "Which are dynamic queue applications? (Select all)",
   "c": [
    "WhatsApp holding messages while offline",
    "Netflix buffering video segments",
    "Food delivery apps at peak demand",
    "Keyboard input buffers"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "Keyboard buffers are static — typically 16–64 bytes, which is why fast typing can drop keystrokes.",
   "multi": true
  },
  {
   "id": "atb-q0071",
   "topic": "Queues",
   "q": "A Wi-Fi router dropping packets when its queue is full uses which mechanism?",
   "c": [
    "Round robin",
    "Tail drop",
    "Priority pre-emption",
    "Circular overwrite"
   ],
   "a": [
    1
   ],
   "w": "Tail drop — the static packet queue overflows and new arrivals are discarded."
  },
  {
   "id": "atb-q0072",
   "topic": "Queues",
   "q": "Why does a video restart slightly before the interruption point after a connection drop?",
   "c": [
    "The player rewinds deliberately",
    "Progress in the main queue survives but the interrupted sub-queue restarts from its beginning",
    "The buffer is cleared entirely",
    "Frames are re-downloaded in reverse"
   ],
   "a": [
    1
   ],
   "w": "Queue of queues: the main queue holds scene segments, each sub-queue holds frames."
  },
  {
   "id": "atb-q0073",
   "topic": "Queues",
   "q": "Queue underflow occurs when:",
   "c": [
    "A static queue is full",
    "You dequeue from an empty queue",
    "The rear pointer reaches the array end",
    "Two elements share a priority"
   ],
   "a": [
    1
   ],
   "w": "Nothing to remove. A stream freezing when the buffer empties is his example."
  },
  {
   "id": "atb-q0074",
   "topic": "Queues",
   "q": "CPU round-robin scheduling, where each task gets a time slice in turn, is an application of:",
   "c": [
    "A stack",
    "A circular queue",
    "A priority queue",
    "A deque"
   ],
   "a": [
    1
   ],
   "w": "Tasks cycle round and return to the first — circular. Note that priority queues also appear in CPU scheduling, for system versus application tasks."
  },
  {
   "id": "atb-q0075",
   "topic": "Basics",
   "q": "According to the book, how does a data structure differ from an algorithm?",
   "c": [
    "A data structure organises and stores data; an algorithm is the sequence of steps that works on it",
    "They are two names for the same thing",
    "A data structure is the code; an algorithm is the plan for it",
    "An algorithm stores data; a data structure processes it"
   ],
   "a": [
    0
   ],
   "w": "The book stresses they are separate but complementary: structures hold and organise, algorithms process. Calling them interchangeable is exactly the confusion the chapter warns against.",
   "bk": "Codeless DSA ch1",
   "lv": "recall"
  },
  {
   "id": "atb-q0076",
   "topic": "Basics",
   "q": "In the book's terms, information is:",
   "c": [
    "Any value stored on the machine",
    "Data that has been processed into something useful",
    "Data entered by a human rather than a sensor",
    "Data of Boolean type"
   ],
   "a": [
    1
   ],
   "w": "Data is whatever the machine stores or handles; information is data after processing. 'Any stored value' is the book's description of data, not information.",
   "bk": "Codeless DSA ch1",
   "lv": "recall"
  },
  {
   "id": "atb-q0077",
   "topic": "Pseudocode",
   "q": "Which of these is NOT one of the book's four primitive ('Big Four') data types?",
   "c": [
    "Boolean",
    "Character",
    "String",
    "Floating-point number"
   ],
   "a": [
    2
   ],
   "w": "The Big Four are Boolean, character, integer and floating-point. A string is a sequence of characters, so it is built on a primitive rather than being one.",
   "bk": "Codeless DSA ch1",
   "lv": "recall"
  },
  {
   "id": "atb-q0078",
   "topic": "Pseudocode",
   "q": "Why does the book also call primitive data types 'atomic'?",
   "c": [
    "They take up the least memory",
    "They are used in quantum computers",
    "They are the only types a compiler can check",
    "They cannot be broken down into any lower-level type"
   ],
   "a": [
    3
   ],
   "w": "Atomic means indivisible: a primitive is as low as a data type goes. Small memory use is often true but is not the reason for the name.",
   "bk": "Codeless DSA ch1",
   "lv": "recall"
  },
  {
   "id": "atb-q0079",
   "topic": "Pseudocode",
   "q": "A clean, correct sales file is fed into a well-designed totalling algorithm, yet the totals come out wrong because prices were read as text. Which point from the chapter does this illustrate?",
   "c": [
    "Good data can still produce garbage output if the computer is not told the right data type",
    "Garbage in, garbage out — the input file must have been bad",
    "The algorithm fails finiteness",
    "Prices should always be stored as integers"
   ],
   "a": [
    0
   ],
   "w": "The book extends GIGO: even good input gives garbage when the data type is wrong. Blaming the input is tempting but the file was correct. Integers would also be wrong for prices with paise.",
   "bk": "Codeless DSA ch1",
   "lv": "apply"
  },
  {
   "id": "atb-q0080",
   "topic": "Pseudocode",
   "q": "In the book's description of floating-point numbers, a 'double' is:",
   "c": [
    "A 32-bit single-precision number",
    "An integer that can hold twice the usual range",
    "A 64-bit double-precision floating-point number",
    "A 128-bit decimal"
   ],
   "a": [
    2
   ],
   "w": "Single precision (32-bit) is a float; double precision (64-bit) is a double; 128-bit forms are called decimals.",
   "bk": "Codeless DSA ch1",
   "lv": "recall"
  },
  {
   "id": "atb-q0081",
   "topic": "Basics",
   "q": "In a mathematical function, each element of the domain maps to:",
   "c": [
    "At least two elements of the range",
    "Exactly one element of the range",
    "Every element of the range",
    "Any number of elements of the range, including none"
   ],
   "a": [
    1
   ],
   "w": "One input, one output. That predictability is why the book compares a function to a black box.",
   "bk": "Codeless DSA ch1",
   "lv": "recall"
  },
  {
   "id": "atb-q0082",
   "topic": "Basics",
   "q": "Which feature of a programming function has no counterpart in a mathematical function, according to the book?",
   "c": [
    "It takes input values",
    "Its output depends on its input",
    "It may return no value at all",
    "It can be described as a black box"
   ],
   "a": [
    2
   ],
   "w": "A void function performs a task and returns nothing; a mathematical function always yields an output. Taking inputs and being a black box are shared by both.",
   "bk": "Codeless DSA ch1",
   "lv": "analyse"
  },
  {
   "id": "atb-q0083",
   "topic": "Basics",
   "q": "In an object-oriented language, a function that lives inside a class is usually called a:",
   "c": [
    "Procedure",
    "Subroutine",
    "Parameter",
    "Method"
   ],
   "a": [
    3
   ],
   "w": "Method is the OOP name. Procedure and subroutine are other names for functions in general; a parameter is an input to one.",
   "bk": "Codeless DSA ch1",
   "lv": "recall"
  },
  {
   "id": "atb-q0084",
   "topic": "Recursion & iteration",
   "q": "A recursive function is one that:",
   "c": [
    "Calls itself as part of its own operation",
    "Repeats a block a fixed number of times",
    "Runs two tasks in parallel",
    "Returns the same output for the same input"
   ],
   "a": [
    0
   ],
   "w": "Recursion is self-reference. Repeating a block until a condition is met is iteration, the option most often confused with it.",
   "bk": "Codeless DSA ch1",
   "lv": "recall"
  },
  {
   "id": "atb-q0085",
   "topic": "Recursion & iteration",
   "q": "A developer writes a recursive function but forgets the stopping condition. On a real machine, what does the book say will eventually happen?",
   "c": [
    "It loops forever harmlessly",
    "A stack underflow, because nothing is left to remove",
    "A stack overflow error, because memory runs out as the recursion depth grows",
    "It returns null and exits"
   ],
   "a": [
    2
   ],
   "w": "Every call consumes memory, so unlimited depth exhausts it: stack overflow. Underflow is removing from an empty stack — the opposite situation.",
   "bk": "Codeless DSA ch1",
   "lv": "apply"
  },
  {
   "id": "atb-q0086",
   "topic": "Recursion & iteration",
   "q": "A UPI app gives the user three attempts to enter the correct PIN, then locks the account. Which concept best describes this design?",
   "c": [
    "Recursion",
    "Iteration with exit conditions",
    "Divide and conquer",
    "Dynamic programming"
   ],
   "a": [
    1
   ],
   "w": "A block (ask for PIN) repeats until a designer-set condition is met: correct PIN, or three failures. Nothing calls itself, so it is not recursion.",
   "bk": "Codeless DSA ch1",
   "lv": "apply"
  },
  {
   "id": "atb-q0087",
   "topic": "Algorithm types",
   "q": "A delivery rider in Jaipur always heads to the nearest unvisited drop-off next. Based on the chapter, what is true of this approach?",
   "c": [
    "It is a greedy approach that gives a reasonable route but may miss the shortest one",
    "It guarantees the shortest total route",
    "It is dynamic programming because it uses distances already travelled",
    "It is divide and conquer because the city is split into stops"
   ],
   "a": [
    0
   ],
   "w": "This is the book's greedy answer to the travelling salesperson problem: a good approximation, not a guaranteed optimum. Assuming 'best each step' means 'best overall' is the classic trap.",
   "bk": "Codeless DSA ch1",
   "lv": "analyse"
  },
  {
   "id": "atb-q0088",
   "topic": "Algorithm types",
   "q": "A freight-pricing engine works out the cheapest cost to each intermediate warehouse once, saves it in a table, and reuses it whenever a longer route passes through that warehouse. In the book's terms this is:",
   "c": [
    "Greedy",
    "Divide and conquer",
    "Iteration",
    "Dynamic programming"
   ],
   "a": [
    3
   ],
   "w": "Computing sub-solutions, storing them and recalling them for reuse is the book's description of the dynamic approach. Greedy would just pick the cheapest next hop without storing anything.",
   "bk": "Codeless DSA ch1",
   "lv": "apply"
  },
  {
   "id": "atb-q0089",
   "topic": "Algorithm types",
   "q": "Which one-line contrast does the book draw between the greedy and dynamic approaches?",
   "c": [
    "Greedy is slower; dynamic is faster",
    "Greedy approximates; dynamic optimises",
    "Greedy uses past data; dynamic uses present data",
    "Greedy splits the problem; dynamic merges it"
   ],
   "a": [
    1
   ],
   "w": "Greedy takes the best option now and may only approximate; dynamic compares stored sub-solutions to optimise. Splitting and merging describes divide and conquer.",
   "bk": "Codeless DSA ch1",
   "lv": "recall"
  },
  {
   "id": "atb-q0090",
   "topic": "Complexity",
   "q": "Space complexity measures:",
   "c": [
    "How long an algorithm takes",
    "How many lines of code it needs",
    "How much memory it needs as the input grows",
    "How many users it can serve at once"
   ],
   "a": [
    2
   ],
   "w": "Space = memory; time = running time. The book notes time complexity is used more often, but space matters on constrained devices.",
   "bk": "Codeless DSA ch1",
   "lv": "recall"
  },
  {
   "id": "atb-q0091",
   "topic": "Complexity",
   "q": "Why does the book prefer asymptotic (mathematical) analysis over simply timing a program on test inputs?",
   "c": [
    "Timing requires a faster computer",
    "Timing is tedious, inaccurate and limited to the inputs you happened to try",
    "Asymptotic analysis gives the exact run time in seconds",
    "Timing only measures space, not time"
   ],
   "a": [
    1
   ],
   "w": "Practical timing depends on the machine and sample, so it generalises badly. Asymptotic analysis describes growth, not exact seconds — that option overstates what it gives.",
   "bk": "Codeless DSA ch1",
   "lv": "analyse"
  },
  {
   "id": "atb-q0092",
   "topic": "Complexity",
   "q": "Which notation does the book use to describe the minimum time an algorithm will take?",
   "c": [
    "Big O",
    "Theta",
    "Little o",
    "Omega"
   ],
   "a": [
    3
   ],
   "w": "Omega is the minimum (best case), Big O the maximum (worst case), Theta both. Students often assume Big O covers everything.",
   "bk": "Codeless DSA ch1",
   "lv": "recall"
  },
  {
   "id": "atb-q0093",
   "topic": "Complexity",
   "q": "Fetching the price stored at a known position in an array takes the same time whether the catalogue has 100 items or 10 lakh. Its time complexity is:",
   "c": [
    "O(1)",
    "O(log n)",
    "O(n)",
    "O(n²)"
   ],
   "a": [
    0
   ],
   "w": "Time independent of input size is constant, O(1). O(n) would apply if you had to scan for the item instead.",
   "bk": "Codeless DSA ch1",
   "lv": "apply"
  },
  {
   "id": "atb-q0094",
   "topic": "Complexity",
   "q": "An auditor checks each of n invoices exactly once for a missing GSTIN. The work grows as:",
   "c": [
    "O(1)",
    "O(n)",
    "O(log n)",
    "O(2ⁿ)"
   ],
   "a": [
    1
   ],
   "w": "One check per invoice means work proportional to n — linear. O(log n) would need the pile to be halved at each step, which a one-by-one check does not do.",
   "bk": "Codeless DSA ch1",
   "lv": "apply"
  },
  {
   "id": "atb-q0095",
   "topic": "Complexity",
   "q": "Which ordering runs from the best (slowest-growing) to the worst (fastest-growing) time complexity?",
   "c": [
    "O(1), O(n), O(log n), O(n²), O(n!)",
    "O(log n), O(1), O(n log n), O(n), O(2ⁿ)",
    "O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ), O(n!)",
    "O(1), O(log n), O(n), O(n²), O(n log n), O(n!), O(2ⁿ)"
   ],
   "a": [
    2
   ],
   "w": "Constant beats logarithmic beats linear beats n log n beats quadratic beats exponential beats factorial. The ordering that runs O(1), O(n), O(log n) wrongly puts log n after n.",
   "bk": "Codeless DSA ch1",
   "lv": "recall"
  },
  {
   "id": "atb-q0096",
   "topic": "Complexity",
   "q": "A quadratic O(n²) report takes 3 minutes for 5,000 customers. Roughly how long should it take for 10,000 customers?",
   "c": [
    "6 minutes",
    "12 minutes",
    "9 minutes",
    "About 3.3 minutes"
   ],
   "a": [
    1
   ],
   "w": "Doubling n multiplies n² by 4, so 3 × 4 = 12 minutes. Six minutes is what linear thinking gives — the trap.",
   "bk": "Codeless DSA ch1",
   "lv": "apply"
  },
  {
   "id": "atb-q0097",
   "topic": "Complexity",
   "q": "An O(2ⁿ) optimisation takes 1 second when there are 20 items. About how long will it take with 21 items?",
   "c": [
    "About 1.05 seconds",
    "21 seconds",
    "4 seconds",
    "2 seconds"
   ],
   "a": [
    3
   ],
   "w": "Exponential time doubles with each extra element: 2²¹ / 2²⁰ = 2. Treating it as a 5% increase (1.05 s) is linear thinking.",
   "bk": "Codeless DSA ch1",
   "lv": "apply"
  },
  {
   "id": "atb-q0098",
   "topic": "Complexity",
   "q": "A retailer expects its customer base to grow from 1 lakh to 1 crore. Vendor A's matching engine is O(n log n); Vendor B's is O(n²). Both perform equally well in today's demo. What should the manager conclude?",
   "c": [
    "B, since equal demo performance means equal scaling",
    "Either, since Big O ignores real data",
    "A, because its work grows far more slowly as n rises a hundredfold",
    "B, because quadratic algorithms are more thorough"
   ],
   "a": [
    2
   ],
   "w": "At 100× the customers, n log n work rises roughly 140×, while n² work rises 10,000×. A demo on today's data hides how each one scales, which is exactly what Big O exposes.",
   "bk": "Codeless DSA ch1",
   "lv": "analyse"
  },
  {
   "id": "atb-q0099",
   "topic": "Computer memory",
   "q": "Which level of the memory hierarchy is the fastest?",
   "c": [
    "RAM",
    "L2 cache",
    "CPU registers",
    "Solid-state drive"
   ],
   "a": [
    2
   ],
   "w": "Registers are built into the processor: the smallest and fastest memory. L2 cache is fast but slower than L1 and registers; an SSD is the slow base of the pyramid.",
   "bk": "Codeless DSA ch2",
   "lv": "recall"
  },
  {
   "id": "atb-q0100",
   "topic": "Computer memory",
   "q": "An accountant launches a billing program stored on the laptop's SSD. Where is the program loaded so that it can run?",
   "c": [
    "Into RAM, the main memory",
    "Directly into the CPU registers",
    "Permanently into the L3 cache",
    "Nowhere — it runs straight from the SSD"
   ],
   "a": [
    0
   ],
   "w": "Programs move from disk storage into RAM when launched; cache and registers then hold the small pieces the CPU is using at that instant. Registers are far too small to hold a whole program.",
   "bk": "Codeless DSA ch2",
   "lv": "apply"
  },
  {
   "id": "atb-q0101",
   "topic": "Computer memory",
   "q": "A hardware vendor proposes making a server's CPU cache as large as its RAM 'for maximum speed'. Based on the chapter, what is the flaw?",
   "c": [
    "Cache cannot store data, only instructions",
    "RAM is faster than cache, so nothing changes",
    "Cache is slower than disk",
    "Part of cache's speed comes from being small; a cache that large would behave like RAM"
   ],
   "a": [
    3
   ],
   "w": "The book's point is that a small cache is quick to search; oversized, it loses that edge. Saying RAM is faster than cache reverses the hierarchy.",
   "bk": "Codeless DSA ch2",
   "lv": "analyse"
  },
  {
   "id": "atb-q0102",
   "topic": "Computer memory",
   "q": "A configuration file is exactly 4 KiB. How many bytes is that?",
   "c": [
    "4,000",
    "4,096",
    "4,024",
    "32,768"
   ],
   "a": [
    1
   ],
   "w": "1 KiB = 1,024 bytes, so 4 × 1,024 = 4,096. 4,000 uses the decimal kilo — the trap the IEC prefixes were introduced to avoid. 32,768 is the number of bits.",
   "bk": "Codeless DSA ch2",
   "lv": "apply"
  },
  {
   "id": "atb-q0103",
   "topic": "Computer memory",
   "q": "What does virtual memory let the operating system do?",
   "c": [
    "Store data permanently without a disk",
    "Make RAM faster than cache",
    "Give programs virtual addresses, mapped to physical ones through a page table, so they appear to have more memory",
    "Remove the need for memory addresses altogether"
   ],
   "a": [
    2
   ],
   "w": "Virtual addresses are translated page by page to physical addresses. It creates the illusion of more memory; it does not make any memory faster.",
   "bk": "Codeless DSA ch2",
   "lv": "recall"
  },
  {
   "id": "atb-q0104",
   "topic": "Arrays",
   "q": "Why does the book call arrays and lists the two 'workhorse' data structures?",
   "c": [
    "They are the fastest structures for every task",
    "Almost every other data structure is built from them or uses them",
    "They are the only structures that need no memory",
    "They are the only structures that allow sorting"
   ],
   "a": [
    1
   ],
   "w": "Stacks, queues, trees, hash tables and more are typically implemented on arrays or linked lists. Neither is fastest for everything — each has clear weaknesses.",
   "bk": "Codeless DSA ch2",
   "lv": "recall"
  },
  {
   "id": "atb-q0105",
   "topic": "Arrays",
   "q": "In the book's terms, a two-dimensional array is best described as:",
   "c": [
    "An array of arrays forming a grid; data stored this way is a matrix",
    "Two separate arrays of different data types",
    "An array whose index starts at 1 instead of 0",
    "A linked list with two pointers per node"
   ],
   "a": [
    0
   ],
   "w": "A multidimensional array is an array of arrays; in two dimensions it is a grid of rows and columns, a matrix. Two pointers per node describes a doubly linked list.",
   "bk": "Codeless DSA ch2",
   "lv": "recall"
  },
  {
   "id": "atb-q0106",
   "topic": "Arrays",
   "q": "Arrays allow fast reading by position but slow insertion and deletion. What single feature explains both?",
   "c": [
    "Elements must all be Boolean",
    "Elements are stored sequentially, side by side",
    "Arrays have no index",
    "Arrays store a pointer with every element"
   ],
   "a": [
    1
   ],
   "w": "Consecutive storage lets you compute where any index lives (fast reads), and also forces neighbours to shift when something is added or removed (slow changes). Pointers per element describe linked lists.",
   "bk": "Codeless DSA ch2",
   "lv": "analyse"
  },
  {
   "id": "atb-q0107",
   "topic": "Linked lists",
   "q": "In a linked list, a node consists of:",
   "c": [
    "An index number and a data type",
    "A data element and a pointer to the next node",
    "Only a pointer, with data kept in a separate array",
    "The head and the tail of the list"
   ],
   "a": [
    1
   ],
   "w": "Data plus a pointer to the next node (plus one to the previous node in a doubly linked list). Index numbers belong to arrays.",
   "bk": "Codeless DSA ch2",
   "lv": "recall"
  },
  {
   "id": "atb-q0108",
   "topic": "Linked lists",
   "q": "Why is deleting a given node usually easier in a doubly linked list than in a singly linked list?",
   "c": [
    "Doubly linked lists store nodes contiguously",
    "Doubly linked lists never contain null",
    "Each node already points to its predecessor, so it can be bypassed without walking from the head to find the node before it",
    "Deleted nodes are automatically copied to a backup"
   ],
   "a": [
    2
   ],
   "w": "To unlink a node you must redirect the node before it. A singly linked list has to walk from the head to find that predecessor; a doubly linked list already holds a pointer to it. Contiguous storage describes arrays.",
   "bk": "Codeless DSA ch2",
   "lv": "analyse"
  },
  {
   "id": "atb-q0109",
   "topic": "Linked lists",
   "q": "Which statement about circular linked lists is correct?",
   "c": [
    "They must be doubly linked",
    "The last node holds null to mark the end",
    "They can be singly or doubly linked; the last node connects back to the first",
    "They store elements in one contiguous block"
   ],
   "a": [
    2
   ],
   "w": "Circular means no null at the end — the last node leads back to the first — and the links may run one way or both. Assuming circular implies doubly linked is the trap.",
   "bk": "Codeless DSA ch2",
   "lv": "recall"
  },
  {
   "id": "atb-q0110",
   "topic": "Stacks",
   "q": "A loading bay is managed as a stack. Starting empty: push P1, push P2, pop, push P3, push P4, pop. Which pallet is now on top, and how many pallets remain?",
   "c": [
    "P4, with 3 remaining",
    "P2, with 2 remaining",
    "P1, with 1 remaining",
    "P3, with 2 remaining"
   ],
   "a": [
    3
   ],
   "w": "After P1, P2 the pop removes P2. Then P3, P4 are pushed and the pop removes P4, leaving P1 and P3 with P3 on top. P4 on top would ignore the final pop.",
   "bk": "Codeless DSA ch2",
   "lv": "apply"
  },
  {
   "id": "atb-q0111",
   "topic": "Queues",
   "q": "A support desk uses a queue. Starting empty: enqueue T1, enqueue T2, enqueue T3, dequeue, enqueue T4, dequeue. Which ticket is now at the front?",
   "c": [
    "T1",
    "T2",
    "T3",
    "T4"
   ],
   "a": [
    2
   ],
   "w": "The two dequeues remove T1 then T2 (oldest first), leaving T3, T4 with T3 at the front. Answering T4 treats the queue like a stack.",
   "bk": "Codeless DSA ch2",
   "lv": "apply"
  },
  {
   "id": "atb-q0112",
   "topic": "Stacks",
   "q": "The letters R, A, I, L are pushed onto an empty stack in that order, then all four are popped. In what order do they come out?",
   "c": [
    "R, A, I, L",
    "A, L, I, R",
    "R, L, I, A",
    "L, I, A, R"
   ],
   "a": [
    3
   ],
   "w": "LIFO reverses the sequence: L, I, A, R. This is the string-reversal use the book mentions. R, A, I, L is what a queue would give.",
   "bk": "Codeless DSA ch2",
   "lv": "apply"
  },
  {
   "id": "atb-q0113",
   "topic": "Stacks",
   "q": "What does the book single out as the key weakness of a stack?",
   "c": [
    "Data can be added or removed only at the top, which slows retrieval of an arbitrary element",
    "It cannot be implemented with arrays",
    "It cannot grow beyond 100 elements",
    "It removes the oldest element first"
   ],
   "a": [
    0
   ],
   "w": "Top-only access is both its simplicity and its weakness. Removing the oldest element first describes a queue, and stack size limits depend on the implementation.",
   "bk": "Codeless DSA ch2",
   "lv": "recall"
  },
  {
   "id": "atb-q0114",
   "topic": "Stacks",
   "q": "A warehouse robot exploring aisles records every junction it passes so that, at a dead end, it can return to the most recent junction and try another path. Which structure fits best?",
   "c": [
    "A queue",
    "A stack",
    "A priority queue",
    "A two-dimensional array"
   ],
   "a": [
    1
   ],
   "w": "Returning to the most recent choice point first is backtracking, a LIFO pattern. A queue would send it back to the oldest junction instead.",
   "bk": "Codeless DSA ch2",
   "lv": "apply"
  },
  {
   "id": "atb-q0115",
   "topic": "Stacks",
   "q": "According to the book, how is a dynamic stack typically built?",
   "c": [
    "As a singly linked list holding a reference to the top element",
    "As a fixed-size array",
    "As a two-dimensional array",
    "As a circular doubly linked list with no top"
   ],
   "a": [
    0
   ],
   "w": "Dynamic means capacity grows at run time, which a linked list provides; it tracks the top so push and pop stay quick. A fixed-size array gives a static stack.",
   "bk": "Codeless DSA ch2",
   "lv": "recall"
  },
  {
   "id": "atb-q0116",
   "topic": "Queues",
   "q": "An ambulance service uses a priority queue where a higher number means more urgent. Calls arrive in this order: A (2), B (5), C (5), D (1). In what order are they dispatched?",
   "c": [
    "C, B, A, D",
    "A, B, C, D",
    "B, C, A, D",
    "D, A, B, C"
   ],
   "a": [
    2
   ],
   "w": "Highest priority first, and equal priorities leave in queue order, so B (arrived first) beats C. Arrival order alone (A, B, C, D) ignores priority; D, A, B, C serves the lowest first.",
   "bk": "Codeless DSA ch2",
   "lv": "apply"
  },
  {
   "id": "atb-q0117",
   "topic": "Queues",
   "q": "In the book's key-value description of a priority queue, what acts as the key?",
   "c": [
    "The position of the item in memory",
    "The item's priority",
    "The time the queue was created",
    "The size of the queue"
   ],
   "a": [
    1
   ],
   "w": "Each item's priority is its key, which decides the dequeue order. Memory position matters only as a tie-breaker via queue order.",
   "bk": "Codeless DSA ch2",
   "lv": "recall"
  },
  {
   "id": "atb-q0118",
   "topic": "Queues",
   "q": "A complaints desk receives a steady stream of new complaints and always handles the most recent one first. What is the main business risk of this design?",
   "c": [
    "The desk will run out of memory immediately",
    "New complaints will never be handled",
    "Complaints will be handled in random order",
    "Old complaints can wait indefinitely while newer ones keep arriving"
   ],
   "a": [
    3
   ],
   "w": "Most-recent-first is LIFO, a stack. Under constant inflow the oldest items at the bottom may never surface. A FIFO queue guarantees the longest-waiting complaint is served next.",
   "bk": "Codeless DSA ch2",
   "lv": "analyse"
  },
  {
   "id": "atb-q0119",
   "topic": "Arrays",
   "q": "A trading screen shows a fixed list of 50 index stocks and looks up each stock's price by its position thousands of times a second. Which structure suits this best?",
   "c": [
    "A linked list, because it is dynamic",
    "A stack, because the latest price matters most",
    "An array, because the size is fixed and reads by position are direct",
    "A queue, because prices arrive over time"
   ],
   "a": [
    2
   ],
   "w": "A fixed size with constant reading by position is exactly where arrays excel. A linked list would have to walk from the head for every lookup.",
   "bk": "Codeless DSA ch2",
   "lv": "analyse"
  },
  {
   "id": "atb-q0120",
   "topic": "Trees",
   "q": "What is the essential difference between a tree and the structures in the previous chapter (arrays, lists, stacks, queues)?",
   "c": [
    "A tree can hold only numbers",
    "A tree organises data in a hierarchy rather than a sequence",
    "A tree must be stored in contiguous memory",
    "A tree allows access only at one end"
   ],
   "a": [
    1
   ],
   "w": "Arrays, lists, stacks and queues are linear; a tree is hierarchical, with each node able to lead to several others. Access at only one end describes a stack.",
   "bk": "Codeless DSA ch3",
   "lv": "recall"
  },
  {
   "id": "atb-q0121",
   "topic": "Trees",
   "q": "In a tree data structure, the root is:",
   "c": [
    "Any node with no children",
    "The node with the largest key",
    "The initial node at the top from which every other node descends",
    "The last node added"
   ],
   "a": [
    2
   ],
   "w": "The root is the starting node, drawn at the top. A node with no children is a leaf — the most common mix-up.",
   "bk": "Codeless DSA ch3",
   "lv": "recall"
  },
  {
   "id": "atb-q0122",
   "topic": "Trees",
   "q": "A company models reporting lines as a tree. After a reorganisation, one analyst reports to both a regional head and a product head. What happens to the structure?",
   "c": [
    "It is still a tree, just a wider one",
    "It becomes a binary search tree",
    "It becomes a heap",
    "It is no longer a tree; a node with two parents makes it a graph"
   ],
   "a": [
    3
   ],
   "w": "In a tree every child has exactly one parent. Allowing multiple parents is precisely what the book says turns a tree into a graph. Wider trees still have one parent per node.",
   "bk": "Codeless DSA ch3",
   "lv": "apply"
  },
  {
   "id": "atb-q0123",
   "topic": "Trees",
   "q": "The links that connect nodes in a tree are called:",
   "c": [
    "Edges",
    "Leaves",
    "Keys",
    "Indexes"
   ],
   "a": [
    0
   ],
   "w": "Edges link nodes. Keys identify the data in a node; leaves are end nodes; indexes belong to arrays.",
   "bk": "Codeless DSA ch3",
   "lv": "recall"
  },
  {
   "id": "atb-q0124",
   "topic": "Trees",
   "q": "In a binary tree, each parent node can have:",
   "c": [
    "Exactly two children",
    "At most two children",
    "Any number of children",
    "Exactly one child"
   ],
   "a": [
    1
   ],
   "w": "Binary sets a ceiling of two. Leaves have none and some nodes have one, so 'exactly two' is wrong. Any number of children describes trees in general, such as B-trees.",
   "bk": "Codeless DSA ch3",
   "lv": "recall"
  },
  {
   "id": "atb-q0125",
   "topic": "Trees",
   "q": "In a binary search tree, where are keys smaller than a given node stored?",
   "c": [
    "In its right subtree",
    "Always at the root",
    "In its left subtree",
    "In the leaves only"
   ],
   "a": [
    2
   ],
   "w": "Left subtree holds smaller keys, right subtree larger ones. That ordering is what makes search efficient.",
   "bk": "Codeless DSA ch3",
   "lv": "recall"
  },
  {
   "id": "atb-q0126",
   "topic": "Trees",
   "q": "Invoice numbers 45, 20, 60, 10, 30, 55 are inserted in that order into an empty binary search tree. Which node is the parent of 30?",
   "c": [
    "45",
    "10",
    "60",
    "20"
   ],
   "a": [
    3
   ],
   "w": "30 < 45 sends it left to 20; 30 > 20 makes it 20's right child. Choosing 45 forgets to continue down the tree after the first comparison.",
   "bk": "Codeless DSA ch3",
   "lv": "apply"
  },
  {
   "id": "atb-q0127",
   "topic": "Trees",
   "q": "Using the same tree (inserted in order 45, 20, 60, 10, 30, 55), which keys are leaves?",
   "c": [
    "10, 30 and 55",
    "10 and 55 only",
    "20 and 60",
    "45 only"
   ],
   "a": [
    0
   ],
   "w": "10 and 30 hang below 20; 55 hangs below 60; none of these has children. 20 and 60 are parents, and 45 is the root.",
   "bk": "Codeless DSA ch3",
   "lv": "apply"
  },
  {
   "id": "atb-q0128",
   "topic": "Trees",
   "q": "Using the same tree (inserted in order 45, 20, 60, 10, 30, 55), how many key comparisons does a search for 55 make, counting the final match?",
   "c": [
    "2",
    "6",
    "3",
    "1"
   ],
   "a": [
    2
   ],
   "w": "45 (go right), 60 (go left), 55 (match) = 3. Six would be scanning every key as in a linear search, which a BST avoids.",
   "bk": "Codeless DSA ch3",
   "lv": "apply"
  },
  {
   "id": "atb-q0129",
   "topic": "Trees",
   "q": "How do you find the smallest key in a binary search tree?",
   "c": [
    "Read the root",
    "Follow left links from the root until there are no more",
    "Follow right links from the root until there are no more",
    "Check every leaf and compare"
   ],
   "a": [
    1
   ],
   "w": "Smaller keys always sit to the left, so the minimum is at the end of the leftmost path. Following right links gives the maximum.",
   "bk": "Codeless DSA ch3",
   "lv": "apply"
  },
  {
   "id": "atb-q0130",
   "topic": "Trees",
   "q": "A CRM inserts customer IDs into a plain binary search tree in increasing order (1001, 1002, 1003…). What happens to search performance as the base grows?",
   "c": [
    "It improves, because sorted data is always faster",
    "It stays the same, because BSTs always halve the search",
    "It degrades: the tree becomes a one-sided chain and searching behaves like walking a list",
    "Searching becomes impossible"
   ],
   "a": [
    2
   ],
   "w": "Each new ID is larger than all before, so it always goes right, producing an unbalanced chain. A BST halves the work only when it is balanced — that is why self-balancing trees exist.",
   "bk": "Codeless DSA ch3",
   "lv": "analyse"
  },
  {
   "id": "atb-q0131",
   "topic": "Trees",
   "q": "What does balancing a tree aim to achieve?",
   "c": [
    "The smallest possible height while keeping the tree's ordering rules",
    "Exactly two children at every node",
    "Equal numbers of red and black nodes",
    "Moving the largest key to the root"
   ],
   "a": [
    0
   ],
   "w": "Balancing minimises height without breaking the structure's rules, keeping operations fast. Moving the largest key to the root describes a max heap.",
   "bk": "Codeless DSA ch3",
   "lv": "recall"
  },
  {
   "id": "atb-q0132",
   "topic": "Trees",
   "q": "What does an AVL tree do when it detects a height difference between two child subtrees?",
   "c": [
    "It deletes the taller subtree",
    "It converts itself into a B-tree",
    "It recolours nodes red and black",
    "It performs a rotation, moving one node up and another down"
   ],
   "a": [
    3
   ],
   "w": "Rotations are how AVL trees rebalance. Red/black colouring belongs to red-black trees.",
   "bk": "Codeless DSA ch3",
   "lv": "recall"
  },
  {
   "id": "atb-q0133",
   "topic": "Trees",
   "q": "According to the book, why is a red-black tree more efficient to keep balanced than an AVL tree?",
   "c": [
    "It is not self-balancing",
    "It performs fewer rotations to rebalance",
    "It has a time complexity of O(1)",
    "It allows nodes to have many children"
   ],
   "a": [
    1
   ],
   "w": "Both are self-balancing with O(log n) behaviour; the book credits red-black trees with needing fewer rotations. Many children per node describes B-trees.",
   "bk": "Codeless DSA ch3",
   "lv": "recall"
  },
  {
   "id": "atb-q0134",
   "topic": "Trees",
   "q": "Which arrangement would break the red-black colouring rules described in the book?",
   "c": [
    "A black root",
    "A black node with two black children",
    "A red node with a red child",
    "A red node with two black children"
   ],
   "a": [
    2
   ],
   "w": "The book's rules: the root is usually black and a red node's children are black. A red parent with a red child violates that.",
   "bk": "Codeless DSA ch3",
   "lv": "apply"
  },
  {
   "id": "atb-q0135",
   "topic": "Trees",
   "q": "A document-management system must store folders that each contain dozens of subfolders and files, and stay fast as the archive grows. Which tree does the book associate with this use?",
   "c": [
    "B-tree",
    "Binary search tree",
    "Min heap",
    "Unbalanced binary tree"
   ],
   "a": [
    0
   ],
   "w": "B-tree nodes can have more than two children and self-balance, which suits file systems and databases. A binary tree would force folders into two-way splits.",
   "bk": "Codeless DSA ch3",
   "lv": "apply"
  },
  {
   "id": "atb-q0136",
   "topic": "Trees",
   "q": "An auction platform must always be able to show the current highest bid instantly as new bids arrive. Which structure fits?",
   "c": [
    "A min heap",
    "A stack",
    "A queue",
    "A max heap"
   ],
   "a": [
    3
   ],
   "w": "A max heap keeps the largest value at the root. A min heap keeps the smallest there — the reverse of what is needed.",
   "bk": "Codeless DSA ch3",
   "lv": "apply"
  },
  {
   "id": "atb-q0137",
   "topic": "Trees",
   "q": "A logistics firm repeatedly needs the pending shipment with the earliest deadline. Which structure gives that item at its root?",
   "c": [
    "A max heap ordered by deadline",
    "A min heap ordered by deadline",
    "A B-tree",
    "A stack of shipments"
   ],
   "a": [
    1
   ],
   "w": "Earliest deadline = smallest date value, so a min heap puts it at the root. A max heap would surface the latest deadline.",
   "bk": "Codeless DSA ch3",
   "lv": "apply"
  },
  {
   "id": "atb-q0138",
   "topic": "Trees",
   "q": "According to the chapter, which structure does a heap typically implement?",
   "c": [
    "A stack",
    "A priority queue",
    "A circular linked list",
    "A two-dimensional array"
   ],
   "a": [
    1
   ],
   "w": "Quick access to the maximum or minimum is exactly what a priority queue needs, so heaps are its usual engine.",
   "bk": "Codeless DSA ch3",
   "lv": "recall"
  },
  {
   "id": "atb-q0139",
   "topic": "Trees",
   "q": "A colleague says, 'Our app ran out of heap, so we should switch our max-heap structure to a min heap.' What is wrong with this reasoning?",
   "c": [
    "Min heaps use twice as much memory",
    "Heaps cannot store numbers",
    "Heap memory and the heap data structure are different things; changing the structure's ordering does not address memory",
    "Max heaps are always faster"
   ],
   "a": [
    2
   ],
   "w": "The book warns that heap memory is implemented completely differently from the heap data structure. Max and min heaps also use the same memory; neither is superior.",
   "bk": "Codeless DSA ch3",
   "lv": "analyse"
  },
  {
   "id": "atb-q0140",
   "topic": "Trees",
   "q": "A retailer keeps its product codes sorted for fast lookup, and adds new codes daily. Why might a balanced binary search tree serve better than a sorted array?",
   "c": [
    "A BST uses no memory for links",
    "A BST supports direct access by index",
    "An array cannot be searched",
    "A new code can be added as a leaf without shifting every later element, while lookup stays fast"
   ],
   "a": [
    3
   ],
   "w": "Inserting into a sorted array means shifting everything after the insertion point; a balanced BST adds a leaf and keeps searches near O(log n). Direct index access is the array's strength, not the BST's.",
   "bk": "Codeless DSA ch3",
   "lv": "analyse"
  },
  {
   "id": "atb-q0141",
   "topic": "Hashing",
   "q": "Which statement about the output of a hash function is correct?",
   "c": [
    "Its length grows with the length of the input",
    "It has the same fixed size whatever the input",
    "It is always a single digit",
    "It is identical to the input for short inputs"
   ],
   "a": [
    1
   ],
   "w": "A hash value has a fixed size: one letter or a whole document gives an output of the same length. Assuming longer input gives longer output is the usual slip.",
   "bk": "Codeless DSA ch4",
   "lv": "recall"
  },
  {
   "id": "atb-q0142",
   "topic": "Hashing",
   "q": "A hash collision occurs when:",
   "c": [
    "A hash table runs out of memory",
    "The same input gives two different hash values",
    "Two different inputs produce the same hash value",
    "A hash is decrypted by an attacker"
   ],
   "a": [
    2
   ],
   "w": "Different inputs, same output. The same input always gives the same hash — that consistency is what makes hashes useful for comparison.",
   "bk": "Codeless DSA ch4",
   "lv": "recall"
  },
  {
   "id": "atb-q0143",
   "topic": "Hashing",
   "q": "An auditor hashes a 200-page contract. A clerk later changes a single comma, and the auditor hashes it again. What should the auditor expect?",
   "c": [
    "A completely different hash value of the same length",
    "The same hash value, since the change is tiny",
    "A hash value that differs only in its last character",
    "A longer hash value"
   ],
   "a": [
    0
   ],
   "w": "Even a one-bit change usually changes the output drastically, while the length stays fixed. That is why hashes reveal tampering. Expecting a near-identical hash is the trap.",
   "bk": "Codeless DSA ch4",
   "lv": "apply"
  },
  {
   "id": "atb-q0144",
   "topic": "Hashing",
   "q": "According to the book, what two qualities mark a good hash function?",
   "c": [
    "Reversible and variable-length",
    "Slow to compute and secret",
    "Easy to compute and avoids collisions",
    "Outputs longer than its inputs"
   ],
   "a": [
    2
   ],
   "w": "Quick computation and few collisions. Reversibility is a property of encryption, not hashing.",
   "bk": "Codeless DSA ch4",
   "lv": "recall"
  },
  {
   "id": "atb-q0145",
   "topic": "Hashing",
   "q": "A telecom company stores 40 crore subscribers in a hash table keyed by mobile number. What is the typical time to look up one subscriber's plan?",
   "c": [
    "O(n), since it must check each subscriber",
    "O(1), essentially constant regardless of the number of subscribers",
    "O(log n), since it halves the data each step",
    "O(n²), since keys are compared in pairs"
   ],
   "a": [
    1
   ],
   "w": "The key is hashed straight to an array index, so typical lookup is constant time. O(log n) describes a balanced search tree or binary search.",
   "bk": "Codeless DSA ch4",
   "lv": "apply"
  },
  {
   "id": "atb-q0146",
   "topic": "Hashing",
   "q": "A 7-slot hash table uses index = key mod 7. In which slot is key 3021 stored?",
   "c": [
    "Slot 3",
    "Slot 1",
    "Slot 0",
    "Slot 4"
   ],
   "a": [
    3
   ],
   "w": "3021 = 7 × 431 + 4, so the remainder is 4. Slot 3 or 1 come from arithmetic slips; slot 0 would need 3021 to be a multiple of 7.",
   "bk": "Codeless DSA ch4",
   "lv": "apply"
  },
  {
   "id": "atb-q0147",
   "topic": "Hashing",
   "q": "Using index = key mod 7, which pair of order numbers collides?",
   "c": [
    "1050 and 4116",
    "1050 and 2013",
    "2013 and 4116",
    "3021 and 1057"
   ],
   "a": [
    0
   ],
   "w": "1050 and 4116 are both exact multiples of 7 (7 × 150 and 7 × 588), so both map to slot 0. 2013 and 3021 map to slot 4 and 1057 to slot 0, so the other pairs differ.",
   "bk": "Codeless DSA ch4",
   "lv": "apply"
  },
  {
   "id": "atb-q0148",
   "topic": "Hashing",
   "q": "How does chaining resolve hash collisions?",
   "c": [
    "It doubles the size of the array",
    "Each array slot holds a linked list, and colliding keys are added to the list at their shared slot",
    "It rejects the second key",
    "It rehashes the key with a different function until it finds an empty slot"
   ],
   "a": [
    1
   ],
   "w": "Chaining keeps an array of linked lists. Trying other slots until one is empty is a different technique (open addressing) that the book does not describe.",
   "bk": "Codeless DSA ch4",
   "lv": "recall"
  },
  {
   "id": "atb-q0149",
   "topic": "Hashing",
   "q": "A loyalty programme's hash table has grown so that most slots now hold long chains of customers. What happens to lookup performance, and why?",
   "c": [
    "It stays O(1), because hashing is always constant time",
    "It improves, because chains keep related customers together",
    "It worsens, because each lookup must walk a long linked list at its slot",
    "It is unaffected, because chains are stored in contiguous memory"
   ],
   "a": [
    2
   ],
   "w": "The book warns that lookup worsens as chains lengthen; in the extreme it approaches walking one long list. O(1) is the typical case, not a guarantee.",
   "bk": "Codeless DSA ch4",
   "lv": "analyse"
  },
  {
   "id": "atb-q0150",
   "topic": "Hashing",
   "q": "Why does the book say search engines, compilers and databases rely on hashing for their lookups?",
   "c": [
    "Hashes make data unreadable to attackers",
    "Hash tables sort data automatically",
    "Hashing removes the need for memory",
    "Their lookups are time-critical, and walking a list is too slow compared with constant-time hash lookup"
   ],
   "a": [
    3
   ],
   "w": "Huge numbers of time-critical lookups need constant time, which plain linked lists cannot deliver. Making data unreadable is encryption's purpose, not the reason here.",
   "bk": "Codeless DSA ch4",
   "lv": "recall"
  },
  {
   "id": "atb-q0151",
   "topic": "Hashing",
   "q": "The key difference between hashing and encryption is that:",
   "c": [
    "Hashing is one-way, while encryption is two-way and meant to be reversed with a key",
    "Hashing needs a key, while encryption does not",
    "Encryption produces a fixed-length output, while hashing does not",
    "They are the same process under different names"
   ],
   "a": [
    0
   ],
   "w": "Encryption expects decryption; hashing does not intend recovery of the original. The book warns specifically against confusing the two.",
   "bk": "Codeless DSA ch4",
   "lv": "recall"
  },
  {
   "id": "atb-q0152",
   "topic": "Hashing",
   "q": "A shopping site stores only the hashes of customers' passwords. When a customer logs in, how does it check the password?",
   "c": [
    "It decrypts the stored hash and compares it with the typed password",
    "It emails the stored password to the customer for confirmation",
    "It hashes the typed password and compares the result with the stored hash",
    "It cannot check passwords without storing them in plain text"
   ],
   "a": [
    2
   ],
   "w": "Hashes are consistent, so the same password always yields the same hash. Decrypting a hash is impossible by design — that option is the trap.",
   "bk": "Codeless DSA ch4",
   "lv": "apply"
  },
  {
   "id": "atb-q0153",
   "topic": "Hashing",
   "q": "Two branch offices protect files with a shared-key system and send each other the key by email. What is the main weakness, according to the book?",
   "c": [
    "Shared keys cannot encrypt large files",
    "The key can be intercepted in transit, letting a third party decrypt everything",
    "Shared-key encryption is one-way",
    "The ciphertext is longer than the plaintext"
   ],
   "a": [
    1
   ],
   "w": "This is the key-distribution problem that motivated public-key systems. Shared-key encryption is two-way, so the 'one-way' option confuses it with hashing.",
   "bk": "Codeless DSA ch4",
   "lv": "apply"
  },
  {
   "id": "atb-q0154",
   "topic": "Hashing",
   "q": "In a public-key cryptosystem, which key is used to decrypt?",
   "c": [
    "The secret key",
    "The public key",
    "Either key",
    "A copy of the public key sent with the message"
   ],
   "a": [
    0
   ],
   "w": "The public key encrypts; the separate secret key decrypts. That is why the public key can be shared openly.",
   "bk": "Codeless DSA ch4",
   "lv": "recall"
  },
  {
   "id": "atb-q0155",
   "topic": "Hashing",
   "q": "In computer security, spoofing means:",
   "c": [
    "Encrypting data twice",
    "Hashing a password",
    "Detecting errors in a transmission",
    "Pretending to be someone else in a data exchange"
   ],
   "a": [
    3
   ],
   "w": "Spoofing is impersonation. Detecting transmission errors is what a CRC does.",
   "bk": "Codeless DSA ch4",
   "lv": "recall"
  },
  {
   "id": "atb-q0156",
   "topic": "Hashing",
   "q": "A bank wants one method that can both digitally sign documents and encrypt data. Based on the chapter, which should it choose?",
   "c": [
    "DSA",
    "CRC",
    "RSA",
    "Chaining"
   ],
   "a": [
    2
   ],
   "w": "RSA supports signatures and encryption; DSA supports only signatures. CRC detects errors and chaining resolves hash-table collisions.",
   "bk": "Codeless DSA ch4",
   "lv": "apply"
  },
  {
   "id": "atb-q0157",
   "topic": "Hashing",
   "q": "A vendor sends a digitally signed e-invoice. What does the signature mainly allow the buyer to verify?",
   "c": [
    "That nobody else could have read the invoice",
    "That the invoice is stored in a hash table",
    "That the invoice amount is correct",
    "That the invoice really came from the vendor"
   ],
   "a": [
    3
   ],
   "w": "The book describes digital signatures as validating that data came from who it claims to. Keeping it unreadable is encryption's job, a common confusion.",
   "bk": "Codeless DSA ch4",
   "lv": "apply"
  },
  {
   "id": "atb-q0158",
   "topic": "Hashing",
   "q": "A smart meter sends a reading with a CRC checksum. The utility's server recomputes the CRC and it does not match. What is the sensible conclusion?",
   "c": [
    "The meter has been hacked by a known attacker",
    "The reading was probably corrupted in transmission and should be discarded or re-sent",
    "The reading is correct but the CRC is wrong, so accept it",
    "The utility should decrypt the reading"
   ],
   "a": [
    1
   ],
   "w": "A mismatch signals likely corruption; the designer can ignore the data or ask for it again. A CRC detects errors — it does not identify attackers or involve decryption.",
   "bk": "Codeless DSA ch4",
   "lv": "apply"
  },
  {
   "id": "atb-q0159",
   "topic": "Hashing",
   "q": "Hash functions turn inputs of unlimited variety into outputs of one fixed size. What follows necessarily from this?",
   "c": [
    "Collisions must be possible, so a hash is not strictly one-to-one",
    "Every input has a unique hash value",
    "Hashes can always be reversed",
    "Hash tables never need chaining"
   ],
   "a": [
    0
   ],
   "w": "There are more possible inputs than fixed-size outputs, so some inputs must share a hash. That is why the book discusses collisions and chaining, even though it elsewhere loosely calls hashes 1:1.",
   "bk": "Codeless DSA ch4",
   "lv": "analyse"
  },
  {
   "id": "atb-q0160",
   "topic": "Hashing",
   "q": "A finance team must later prove that an archived ledger file has not been altered, but never needs to hide its contents. Which tool fits best?",
   "c": [
    "Shared-key encryption",
    "Public-key encryption",
    "A stored hash of the file, recomputed and compared later",
    "A circular queue"
   ],
   "a": [
    2
   ],
   "w": "The goal is integrity, not secrecy, and hashing is one-way and change-sensitive: any edit changes the hash. Encryption addresses confidentiality, which is not required here.",
   "bk": "Codeless DSA ch4",
   "lv": "analyse"
  },
  {
   "id": "atb-q0161",
   "topic": "Graphs",
   "q": "In graph terminology, the nodes of a graph are also called:",
   "c": [
    "Edges",
    "Vertices",
    "Weights",
    "Keys"
   ],
   "a": [
    1
   ],
   "w": "Nodes are vertices (or objects); the links between them are edges. Weights are values on edges.",
   "bk": "Codeless DSA ch5",
   "lv": "recall"
  },
  {
   "id": "atb-q0162",
   "topic": "Graphs",
   "q": "Two vertices are described as adjacent when:",
   "c": [
    "They have the same weight",
    "They are in the same subgraph",
    "They are directly connected by an edge",
    "They are both leaves"
   ],
   "a": [
    2
   ],
   "w": "Adjacency means a direct edge between them. Being in the same subgraph does not require a direct link, and 'leaf' is a tree term.",
   "bk": "Codeless DSA ch5",
   "lv": "recall"
  },
  {
   "id": "atb-q0163",
   "topic": "Graphs",
   "q": "On a creator platform, a user can follow a brand without the brand following back. Which kind of graph models 'follows'?",
   "c": [
    "A directed graph",
    "An undirected graph",
    "A tree",
    "A weighted undirected graph"
   ],
   "a": [
    0
   ],
   "w": "A one-way relationship needs edges with direction. An undirected edge would wrongly imply the brand follows the user too.",
   "bk": "Codeless DSA ch5",
   "lv": "apply"
  },
  {
   "id": "atb-q0164",
   "topic": "Graphs",
   "q": "On a professional networking site, a connection exists only once both people accept, and then it works both ways. Which model fits?",
   "c": [
    "A directed graph with one arrow per connection",
    "A binary search tree",
    "An undirected graph",
    "A max heap"
   ],
   "a": [
    2
   ],
   "w": "Mutual, two-way relationships are undirected edges. A single arrow would capture only one direction.",
   "bk": "Codeless DSA ch5",
   "lv": "apply"
  },
  {
   "id": "atb-q0165",
   "topic": "Graphs",
   "q": "A courier company labels every road link between its hubs with the average travel time. This makes the network a:",
   "c": [
    "Subgraph",
    "Tree",
    "Directed graph necessarily",
    "Weighted graph"
   ],
   "a": [
    3
   ],
   "w": "Values on edges make a graph weighted. Weighting says nothing about direction, so 'directed necessarily' is wrong.",
   "bk": "Codeless DSA ch5",
   "lv": "apply"
  },
  {
   "id": "atb-q0166",
   "topic": "Graphs",
   "q": "In a graph, a loop is:",
   "c": [
    "An edge that connects a vertex to itself",
    "Any path that visits every vertex",
    "A graph inside a larger graph",
    "An edge with no weight"
   ],
   "a": [
    0
   ],
   "w": "A loop starts and ends at the same vertex. A graph inside a larger graph is a subgraph.",
   "bk": "Codeless DSA ch5",
   "lv": "recall"
  },
  {
   "id": "atb-q0167",
   "topic": "Graphs",
   "q": "The northern-region routes of a national airline network, considered on their own, form a:",
   "c": [
    "Loop",
    "Subgraph",
    "Leaf",
    "Digraph by definition"
   ],
   "a": [
    1
   ],
   "w": "A graph contained within a larger graph is a subgraph. Whether it is a digraph depends on whether its routes have direction.",
   "bk": "Codeless DSA ch5",
   "lv": "apply"
  },
  {
   "id": "atb-q0168",
   "topic": "Graphs",
   "q": "Why does the book describe a tree as a 'minimalist' graph?",
   "c": [
    "Because trees have weighted edges",
    "Because trees have fewer nodes than graphs",
    "Because a tree is a graph with no cycles, so most graph algorithms also work on trees",
    "Because trees have no edges"
   ],
   "a": [
    2
   ],
   "w": "Removing cycles (and adding a root and parent-child roles) gives a tree. Node count has nothing to do with it.",
   "bk": "Codeless DSA ch5",
   "lv": "recall"
  },
  {
   "id": "atb-q0169",
   "topic": "Graphs",
   "q": "Which feature belongs to a tree but NOT to a general graph?",
   "c": [
    "Edges linking nodes",
    "Nodes that can be adjacent",
    "A designated root with parent-child roles",
    "The possibility of being directed"
   ],
   "a": [
    2
   ],
   "w": "The book describes a graph as having no root and no identifiable parents or children. Edges and adjacency are shared by both.",
   "bk": "Codeless DSA ch5",
   "lv": "recall"
  },
  {
   "id": "atb-q0170",
   "topic": "Graphs",
   "q": "A metro operator draws its network: Station A connects to B, B to C, and C back to A. Can this network be stored as a tree?",
   "c": [
    "Yes, with A as root",
    "Yes, because every station has a connection",
    "No, because metro networks cannot be graphs",
    "No, because A → B → C → A forms a cycle, which a tree cannot contain"
   ],
   "a": [
    3
   ],
   "w": "Trees are graphs without cycles. Choosing A as root does not help: C would then need two parents (B and A).",
   "bk": "Codeless DSA ch5",
   "lv": "apply"
  },
  {
   "id": "atb-q0171",
   "topic": "Graphs",
   "q": "A referral graph has mutual links Priya–Arjun, Arjun–Meera, Arjun–Kabir and Kabir–Priya. Which people are adjacent to Arjun?",
   "c": [
    "Meera only",
    "Priya, Meera and Kabir",
    "Priya and Kabir only",
    "Everyone, including Arjun"
   ],
   "a": [
    1
   ],
   "w": "Three edges touch Arjun: to Priya, Meera and Kabir. Arjun is not adjacent to himself because there is no loop.",
   "bk": "Codeless DSA ch5",
   "lv": "apply"
  },
  {
   "id": "atb-q0172",
   "topic": "Graphs",
   "q": "In the same referral graph (Priya–Arjun, Arjun–Meera, Arjun–Kabir, Kabir–Priya), what is the shortest path from Meera to Priya?",
   "c": [
    "Meera → Arjun → Priya",
    "Meera → Kabir → Priya",
    "Meera → Priya directly",
    "Meera → Arjun → Kabir → Priya"
   ],
   "a": [
    0
   ],
   "w": "Meera connects only to Arjun, and Arjun connects directly to Priya — two edges. There is no Meera–Kabir or Meera–Priya edge; the four-vertex route works but is longer.",
   "bk": "Codeless DSA ch5",
   "lv": "apply"
  },
  {
   "id": "atb-q0173",
   "topic": "Graphs",
   "q": "Directed graphs are also called:",
   "c": [
    "Subgraphs",
    "Weighted graphs",
    "Digraphs",
    "Binary graphs"
   ],
   "a": [
    2
   ],
   "w": "Digraph is short for directed graph; its directed edges are sometimes called arrows.",
   "bk": "Codeless DSA ch5",
   "lv": "recall"
  },
  {
   "id": "atb-q0174",
   "topic": "Graphs",
   "q": "In a relational database, an Orders table stores a CustomerID that refers to the Customers table. In the Orders table, CustomerID is a:",
   "c": [
    "Primary key",
    "Foreign key",
    "Schema",
    "Weighted edge"
   ],
   "a": [
    1
   ],
   "w": "A foreign key refers to another table's primary key, creating the relationship. In the Customers table, CustomerID is the primary key.",
   "bk": "Codeless DSA ch5",
   "lv": "apply"
  },
  {
   "id": "atb-q0175",
   "topic": "Graphs",
   "q": "Which of these is NOT one of the drawbacks of plain file-system storage listed in the book?",
   "c": [
    "Data duplication",
    "Lack of a uniform format",
    "It requires a schema describing the data",
    "Weak security"
   ],
   "a": [
    2
   ],
   "w": "A schema is a feature of relational databases, introduced to fix file-system problems. Duplication, inconsistent formats, limited operations and weak security are the drawbacks.",
   "bk": "Codeless DSA ch5",
   "lv": "recall"
  },
  {
   "id": "atb-q0176",
   "topic": "Graphs",
   "q": "A bank's fraud team needs to trace chains of accounts linked by shared phone numbers and devices, five or six hops deep, across crores of accounts. Why might a graph database suit this better than a relational one?",
   "c": [
    "Graph databases do not need to store any keys",
    "Relational databases cannot store phone numbers",
    "Graph databases encrypt every record",
    "Following many relationships across connected tables is computing-intensive in a relational system, whereas a graph database stores the relationships directly"
   ],
   "a": [
    3
   ],
   "w": "The book's point is that operations across connected tables get expensive at scale, which graph databases avoid. Relational databases store phone numbers fine — the cost is in chaining the joins.",
   "bk": "Codeless DSA ch5",
   "lv": "analyse"
  },
  {
   "id": "atb-q0177",
   "topic": "Graphs",
   "q": "A car maker maps its supply chain: each component can come from several suppliers and goes into several models. Why is a graph a better model than a tree here?",
   "c": [
    "A component would need several parents, which a tree forbids but a graph allows",
    "Trees cannot store names",
    "Graphs always use less memory",
    "Trees cannot have more than two levels"
   ],
   "a": [
    0
   ],
   "w": "Multiple parents break the one-parent rule of trees; graphs have no such rule. Memory use is not the deciding factor.",
   "bk": "Codeless DSA ch5",
   "lv": "analyse"
  },
  {
   "id": "atb-q0178",
   "topic": "Graphs",
   "q": "A city's one-way streets are mapped with travel times on each street. Which description is most complete?",
   "c": [
    "An undirected weighted graph",
    "A directed unweighted graph",
    "A tree with weights",
    "A directed weighted graph"
   ],
   "a": [
    3
   ],
   "w": "One-way streets need direction; travel times are weights. Either property alone misses half the picture.",
   "bk": "Codeless DSA ch5",
   "lv": "analyse"
  },
  {
   "id": "atb-q0179",
   "topic": "Searching",
   "q": "What is the time complexity of linear search?",
   "c": [
    "O(1)",
    "O(log n)",
    "O(n²)",
    "O(n)"
   ],
   "a": [
    3
   ],
   "w": "Its running time grows in direct proportion to the number of elements. O(log n) belongs to binary search.",
   "bk": "Codeless DSA ch6",
   "lv": "recall"
  },
  {
   "id": "atb-q0180",
   "topic": "Searching",
   "q": "In testing, a linear search for a product code returns on the very first comparison because that code happens to be first in the file. What should you conclude?",
   "c": [
    "The search is O(1) and will stay instant",
    "The data must be sorted",
    "This was a lucky best case; the algorithm is still O(n) and slows as the file grows",
    "Linear search has become binary search"
   ],
   "a": [
    2
   ],
   "w": "The book warns against exactly this: move the item to the end and every element must be checked. Concluding O(1) from one lucky test is the trap.",
   "bk": "Codeless DSA ch6",
   "lv": "apply"
  },
  {
   "id": "atb-q0181",
   "topic": "Searching",
   "q": "Linear search for the value 8 in the unsorted list [4, 9, 2, 6, 10, 1, 5, 8, 3, 7] makes how many comparisons, counting the match?",
   "c": [
    "8",
    "1",
    "4",
    "10"
   ],
   "a": [
    0
   ],
   "w": "8 sits at the eighth position (index 7), so eight comparisons. Four would be a binary-search guess, which cannot be used on unsorted data.",
   "bk": "Codeless DSA ch6",
   "lv": "apply"
  },
  {
   "id": "atb-q0182",
   "topic": "Searching",
   "q": "A linear search looks for a GSTIN that is not in a list of 500 vendors. How many comparisons are made before it concludes the GSTIN is absent?",
   "c": [
    "1",
    "250",
    "500",
    "9"
   ],
   "a": [
    2
   ],
   "w": "To prove absence, linear search must check every element: 500. 250 is the average for items that are present; 9 is roughly binary search's worst case on sorted data.",
   "bk": "Codeless DSA ch6",
   "lv": "apply"
  },
  {
   "id": "atb-q0183",
   "topic": "Searching",
   "q": "What must be true of the data before binary search can be used?",
   "c": [
    "It must be sorted",
    "It must contain only numbers",
    "It must have an even number of elements",
    "It must be stored in a linked list"
   ],
   "a": [
    0
   ],
   "w": "Sorted order is binary search's one caveat. It works on any comparable data (names too), and on odd or even lengths.",
   "bk": "Codeless DSA ch6",
   "lv": "recall"
  },
  {
   "id": "atb-q0184",
   "topic": "Searching",
   "q": "A developer runs binary search on a customer list stored in sign-up order (not sorted by name). What is the risk?",
   "c": [
    "It will be slower than linear search but still correct",
    "It may discard the half that contains the customer and wrongly report them missing",
    "It will sort the list automatically first",
    "There is no risk; binary search works on any list"
   ],
   "a": [
    1
   ],
   "w": "Binary search assumes everything on one side of the middle is smaller. On unsorted data that assumption fails and the target can be thrown away. It does not sort the data for you.",
   "bk": "Codeless DSA ch6",
   "lv": "apply"
  },
  {
   "id": "atb-q0185",
   "topic": "Searching",
   "q": "Binary search for 40 in the sorted list [3, 8, 12, 19, 24, 31, 40, 47, 55], using middle index = ⌊(low + high) ÷ 2⌋, compares the target with which values, in order?",
   "c": [
    "24, 47, 40",
    "3, 8, 12, 19, 24, 31, 40",
    "24, 40",
    "31, 40"
   ],
   "a": [
    2
   ],
   "w": "Middle of indices 0–8 is index 4 (24); 40 > 24, so search indices 5–8, whose middle is index 6 (40) — found. Listing every value is linear search.",
   "bk": "Codeless DSA ch6",
   "lv": "apply"
  },
  {
   "id": "atb-q0186",
   "topic": "Searching",
   "q": "Using the same sorted list [3, 8, 12, 19, 24, 31, 40, 47, 55] and middle = ⌊(low + high) ÷ 2⌋, how many comparisons does binary search need to find 55?",
   "c": [
    "1",
    "4",
    "9",
    "2"
   ],
   "a": [
    1
   ],
   "w": "Compares 24 (indices 0–8), then 40 (5–8), then 47 (7–8), then 55 (8–8): four. Nine is what linear search would need.",
   "bk": "Codeless DSA ch6",
   "lv": "apply"
  },
  {
   "id": "atb-q0187",
   "topic": "Searching",
   "q": "Binary search looks for 9 in the sorted list [2, 4, 6, 8, 10, 12, 14] with middle = ⌊(low + high) ÷ 2⌋. Which values are compared before it concludes 9 is absent?",
   "c": [
    "8 only",
    "2, 4, 6, 8, 10",
    "8, 10, 12",
    "8, 12, 10"
   ],
   "a": [
    3
   ],
   "w": "Middle of 0–6 is 8 → go right (4–6); middle 12 → go left (4–4); middle 10 → go left; nothing remains. The order 8, 10, 12 mixes up which half is kept after comparing 12.",
   "bk": "Codeless DSA ch6",
   "lv": "apply"
  },
  {
   "id": "atb-q0188",
   "topic": "Searching",
   "q": "Roughly how many comparisons does binary search need, at most, to find an item in a sorted list of 10 lakh (1,000,000) records?",
   "c": [
    "About 20",
    "About 1,000",
    "About 5 lakh",
    "About 10 lakh"
   ],
   "a": [
    0
   ],
   "w": "2²⁰ ≈ 10.5 lakh, so about 20 halvings suffice. 5 lakh is linear search's average; 10 lakh its worst case.",
   "bk": "Codeless DSA ch6",
   "lv": "apply"
  },
  {
   "id": "atb-q0189",
   "topic": "Searching",
   "q": "A sorted product catalogue doubles from 50,000 to 1,00,000 items. How does binary search's worst-case number of comparisons change?",
   "c": [
    "It doubles",
    "It rises by about one",
    "It is unchanged",
    "It quadruples"
   ],
   "a": [
    1
   ],
   "w": "One extra halving covers twice the data: ⌊log₂ n⌋ + 1 goes from 16 to 17. Doubling is what happens to linear search.",
   "bk": "Codeless DSA ch6",
   "lv": "apply"
  },
  {
   "id": "atb-q0190",
   "topic": "Complexity",
   "q": "Since 2⁶ = 64, what is log₂ 64?",
   "c": [
    "32",
    "8",
    "6",
    "128"
   ],
   "a": [
    2
   ],
   "w": "A logarithm is the inverse of an exponent: the power to which 2 must be raised to get 64 is 6. 32 is 64 ÷ 2; 8 is the square root.",
   "bk": "Codeless DSA ch6",
   "lv": "recall"
  },
  {
   "id": "atb-q0191",
   "topic": "Complexity",
   "q": "In the book's terms, what does it mean for something to be linear?",
   "c": [
    "It can be drawn as a straight line on a graph",
    "It always halves",
    "It grows by doubling",
    "It never changes"
   ],
   "a": [
    0
   ],
   "w": "Linear means a straight-line graph; for algorithms, time proportional to input. Doubling growth is exponential, halving is logarithmic.",
   "bk": "Codeless DSA ch6",
   "lv": "recall"
  },
  {
   "id": "atb-q0192",
   "topic": "Searching",
   "q": "In binary search, after comparing the target with the middle element and finding the middle is smaller, what is discarded?",
   "c": [
    "Only the middle element",
    "Everything to the right of the middle",
    "The middle element and everything to its left",
    "Nothing; the search restarts from the beginning"
   ],
   "a": [
    2
   ],
   "w": "If the middle is smaller than the target, it and all smaller values cannot be the target, so they go. Discarding the right side is the mirror-image error.",
   "bk": "Codeless DSA ch6",
   "lv": "recall"
  },
  {
   "id": "atb-q0193",
   "topic": "Searching",
   "q": "Which advantage does linear search have over binary search?",
   "c": [
    "It is O(log n)",
    "It works on unsorted data",
    "It always needs fewer comparisons",
    "It only works on numbers"
   ],
   "a": [
    1
   ],
   "w": "Linear search has no sorting precondition and works on any data type — names, images, audio. It does not need fewer comparisons; on large sorted data it needs far more.",
   "bk": "Codeless DSA ch6",
   "lv": "recall"
  },
  {
   "id": "atb-q0194",
   "topic": "Searching",
   "q": "According to the book, where does O(log n) rank among common time complexities?",
   "c": [
    "Worst, behind O(n!)",
    "Equal to O(n)",
    "Behind O(n log n)",
    "Second best, behind only O(1)"
   ],
   "a": [
    3
   ],
   "w": "Constant time is fastest, then logarithmic. O(n) and O(n log n) grow faster than O(log n), so they rank below it.",
   "bk": "Codeless DSA ch6",
   "lv": "recall"
  },
  {
   "id": "atb-q0195",
   "topic": "Searching",
   "q": "A kirana store owner searches an unsorted handwritten list of 30 suppliers about once a month. Is it worth organising the data to use binary search?",
   "c": [
    "Yes — binary search is always the right choice",
    "Yes — linear search cannot handle 30 items",
    "No — binary search does not work on names",
    "No — for a tiny list searched rarely, linear search is simple and fast enough, and binary search would require keeping the list sorted"
   ],
   "a": [
    3
   ],
   "w": "The book notes linear search's slowness only bites as size grows; at 30 items it barely matters, while binary search adds the burden of maintaining sorted order. Binary search does work on names if they are sorted.",
   "bk": "Codeless DSA ch6",
   "lv": "analyse"
  },
  {
   "id": "atb-q0196",
   "topic": "Searching",
   "q": "A vendor claims, 'Our binary-search lookup actually gets faster as your catalogue grows.' How should a manager assess this?",
   "c": [
    "Correct — logarithmic algorithms speed up with more data",
    "Incorrect — binary search becomes O(n) on large data",
    "Misleading — time still increases with catalogue size, just very slowly (about one extra comparison per doubling)",
    "Correct — because the catalogue is sorted"
   ],
   "a": [
    2
   ],
   "w": "O(log n) grows slowly but does grow. The book's own phrase that more elements take less time is loose wording; total time never falls as n rises.",
   "bk": "Codeless DSA ch6",
   "lv": "analyse"
  },
  {
   "id": "atb-q0197",
   "topic": "Searching",
   "q": "A payments firm keeps 1 crore merchant IDs sorted and performs thousands of lookups per second. Why is binary search worth the cost of keeping the IDs sorted?",
   "c": [
    "Each lookup needs at most about 24 comparisons instead of up to 1 crore",
    "Sorted data uses less memory",
    "Binary search also encrypts the IDs",
    "Linear search cannot run on numbers"
   ],
   "a": [
    0
   ],
   "w": "log₂ of 1 crore is about 23.3, so at most 24 comparisons per lookup versus up to 1 crore — at thousands of lookups a second, that gap decides whether the system keeps up. Sorting does not save memory.",
   "bk": "Codeless DSA ch6",
   "lv": "analyse"
  },
  {
   "id": "atb-q0198",
   "topic": "Basics",
   "q": "According to the book, what are the three stages of every algorithm?",
   "c": [
    "Plan, code, test",
    "Input, processing, output",
    "Start, decision, end",
    "Search, sort, store"
   ],
   "a": [
    1
   ],
   "w": "Data comes in, is worked on, and goes out. Start, decision and end are flowchart symbols, not stages.",
   "bk": "Codeless DSA ch12",
   "lv": "recall"
  },
  {
   "id": "atb-q0199",
   "topic": "Basics",
   "q": "In a GST billing algorithm, 'calculate tax as 18% of the taxable value' belongs to which stage?",
   "c": [
    "Input",
    "Output",
    "Processing",
    "Termination"
   ],
   "a": [
    2
   ],
   "w": "Calculating with data already loaded is processing. Reading the taxable value would be input; printing the bill output.",
   "bk": "Codeless DSA ch12",
   "lv": "apply"
  },
  {
   "id": "atb-q0200",
   "topic": "Basics",
   "q": "Which statement about terminator symbols in a flowchart is correct?",
   "c": [
    "A flowchart must have exactly one end",
    "Terminators mark decisions",
    "Terminators are optional",
    "A flowchart has one start but may have several ends"
   ],
   "a": [
    3
   ],
   "w": "One entry point; different branches may end separately (think of the ATM chart ending on a wrong PIN). Decisions use the diamond.",
   "bk": "Codeless DSA ch12",
   "lv": "recall"
  },
  {
   "id": "atb-q0201",
   "topic": "Basics",
   "q": "A large payroll flowchart becomes hard to follow. Which symbol lets you replace a block of detailed steps, such as 'compute PF deductions', with one box defined elsewhere?",
   "c": [
    "Predefined process",
    "Decision",
    "Terminator",
    "Input/output"
   ],
   "a": [
    0
   ],
   "w": "The predefined-process symbol stands for a module of steps — the lecture's function-call box with double vertical lines. A decision diamond only branches.",
   "bk": "Codeless DSA ch12",
   "lv": "apply"
  },
  {
   "id": "atb-q0202",
   "topic": "Basics",
   "q": "Which of these is a selection (decision) structure?",
   "c": [
    "While",
    "Do-while",
    "Sequence",
    "Switch"
   ],
   "a": [
    3
   ],
   "w": "Selection structures are if-then, if-then-else and switch. While and do-while are loops; sequence stands alone.",
   "bk": "Codeless DSA ch12",
   "lv": "recall"
  },
  {
   "id": "atb-q0203",
   "topic": "Basics",
   "q": "A courier charges ₹40 for zone A, ₹60 for B, ₹80 for C, ₹100 for D, and ₹150 for any other zone. Which structure fits most naturally?",
   "c": [
    "Switch, with a default case for other zones",
    "While loop",
    "Sequence",
    "If-then with no else"
   ],
   "a": [
    0
   ],
   "w": "Branching on the value of one expression across several cases, with a fallback, is exactly switch with default. A single if-then can only make one yes/no choice.",
   "bk": "Codeless DSA ch12",
   "lv": "apply"
  },
  {
   "id": "atb-q0204",
   "topic": "Basics",
   "q": "Rule: 'If the cart value is at least ₹500, waive the delivery fee; otherwise charge ₹40.' Which structure is this?",
   "c": [
    "If-then",
    "If-then-else",
    "Do-while",
    "Switch with no default"
   ],
   "a": [
    1
   ],
   "w": "Two alternative actions for true and false is if-then-else. If-then would have no 'otherwise' branch.",
   "bk": "Codeless DSA ch12",
   "lv": "apply"
  },
  {
   "id": "atb-q0205",
   "topic": "Basics",
   "q": "Rule: 'If this is the customer's first order, add a welcome coupon.' Nothing happens otherwise. Which structure is this?",
   "c": [
    "If-then-else",
    "Switch",
    "If-then",
    "While"
   ],
   "a": [
    2
   ],
   "w": "One decision with an action only on 'yes' is if-then. Calling it if-then-else adds an else branch that does not exist.",
   "bk": "Codeless DSA ch12",
   "lv": "apply"
  },
  {
   "id": "atb-q0206",
   "topic": "Basics",
   "q": "A banking app must ask for the OTP at least once, and keep asking while the OTP entered is wrong. Which loop fits best?",
   "c": [
    "Do-while",
    "While",
    "Switch",
    "Sequence"
   ],
   "a": [
    0
   ],
   "w": "The body (ask for OTP) must run at least once before the condition is tested — do-while. A while loop tests first and could skip asking altogether.",
   "bk": "Codeless DSA ch12",
   "lv": "apply"
  },
  {
   "id": "atb-q0207",
   "topic": "Basics",
   "q": "A warehouse system should 'process the next order while the pending-orders queue is not empty'. Some mornings the queue starts empty. Which loop fits, and how many times does its body run on such a morning?",
   "c": [
    "Do-while; once",
    "While; zero times",
    "While; once",
    "Do-while; zero times"
   ],
   "a": [
    1
   ],
   "w": "A while loop tests before running, so with an empty queue its body never runs — correct here, since there is nothing to process. A do-while would wrongly try to process one order.",
   "bk": "Codeless DSA ch12",
   "lv": "analyse"
  },
  {
   "id": "atb-q0208",
   "topic": "Properties",
   "q": "A flowchart loop reads 'while stock > 0, display stock level', but nothing inside the loop ever changes the stock. Which algorithm property does this violate?",
   "c": [
    "Generality",
    "Determinism",
    "Finiteness",
    "Language independence"
   ],
   "a": [
    2
   ],
   "w": "With stock above zero the condition never becomes false, so the loop runs forever — an infinite loop fails finiteness. It is still deterministic: the same input gives the same (endless) behaviour.",
   "bk": "Codeless DSA ch12",
   "lv": "apply"
  },
  {
   "id": "atb-q0209",
   "topic": "Basics",
   "q": "A book-style linear-search flowchart asks 'Are there more items?' before checking each item. Searching a list of 3 vendors for one that is not in it, how many times is 'Are there more items?' evaluated?",
   "c": [
    "3",
    "1",
    "6",
    "4"
   ],
   "a": [
    3
   ],
   "w": "It answers yes three times (once before each item) and then no once, which ends the loop: 4. Answering 3 forgets the final 'no'.",
   "bk": "Codeless DSA ch12",
   "lv": "analyse"
  },
  {
   "id": "atb-q0210",
   "topic": "Basics",
   "q": "Why does the book insist on designing an algorithm before writing code?",
   "c": [
    "Because flowcharts run faster than code",
    "Because a planned, abstract design is modular, readable and implementable in any language",
    "Because compilers require a flowchart",
    "Because coding and programming are the same thing"
   ],
   "a": [
    1
   ],
   "w": "Planning gives structure and language independence; the book stresses that coding is not the same as programming. Flowcharts do not execute at all.",
   "bk": "Codeless DSA ch12",
   "lv": "recall"
  },
  {
   "id": "atb-q0211",
   "topic": "Basics",
   "q": "Which advantage of flowcharts does the book emphasise for people learning to design algorithms?",
   "c": [
    "They contain the exact syntax of every language",
    "They remove the need for decisions",
    "They give a simple picture of the logic, so designs can be iterated quickly and logical flaws spotted",
    "They guarantee O(1) performance"
   ],
   "a": [
    2
   ],
   "w": "The visual form speeds iteration and makes flaws visible. Flowcharts are deliberately free of any language's syntax.",
   "bk": "Codeless DSA ch12",
   "lv": "recall"
  },
  {
   "id": "atb-q0212",
   "topic": "Pseudocode",
   "q": "Trace this pseudocode with price = 250 and qty = 5:\nRead price\nRead qty\ntotal = price × qty\nIf total > 1000 then total = total × 0.9\nDisplay total\nWhat is displayed?",
   "c": [
    "1250",
    "1125",
    "225",
    "1000"
   ],
   "a": [
    1
   ],
   "w": "250 × 5 = 1,250, which exceeds 1,000, so the discount applies: 1,250 × 0.9 = 1,125. Displaying 1,250 skips the if-then.",
   "bk": "Codeless DSA ch12",
   "lv": "apply"
  },
  {
   "id": "atb-q0213",
   "topic": "Pseudocode",
   "q": "How does the book describe pseudocode?",
   "c": [
    "English-like logic that avoids any one language's syntax, so it can be implemented in any language",
    "A programming language with its own compiler",
    "A flowchart drawn in text boxes",
    "Machine instructions written in binary"
   ],
   "a": [
    0
   ],
   "w": "It resembles code but follows no language's syntax; in Python the translation is almost direct. It is not itself executable.",
   "bk": "Codeless DSA ch12",
   "lv": "recall"
  },
  {
   "id": "atb-q0214",
   "topic": "Basics",
   "q": "In a switch structure, what happens if the value being tested matches none of the listed cases?",
   "c": [
    "The algorithm crashes",
    "The first case runs",
    "The default case runs",
    "The switch repeats until a case matches"
   ],
   "a": [
    2
   ],
   "w": "The default block handles unmatched values. Repeating would make it a loop, which switch is not.",
   "bk": "Codeless DSA ch12",
   "lv": "recall"
  },
  {
   "id": "atb-q0215",
   "topic": "Basics",
   "q": "Which flowchart symbol represents the step 'calculate the EMI from principal, rate and tenure'?",
   "c": [
    "Diamond",
    "Parallelogram/trapezoid",
    "Terminator",
    "Rectangle (process)"
   ],
   "a": [
    3
   ],
   "w": "Calculation is an action step — the process rectangle. The slanted box is for entering the principal, rate and tenure (input) or showing the EMI (output).",
   "bk": "Codeless DSA ch12",
   "lv": "apply"
  },
  {
   "id": "atb-q0216",
   "topic": "Basics",
   "q": "The book notes that concepts like finite-state machines and time complexity have outlived many programming languages. Which lecture property does this support?",
   "c": [
    "Determinism",
    "Language independence",
    "Effectiveness",
    "Well-defined inputs"
   ],
   "a": [
    1
   ],
   "w": "Abstract designs do not depend on any language, so they survive as languages change — language independence. Determinism concerns identical outputs for identical inputs.",
   "bk": "Codeless DSA ch12",
   "lv": "analyse"
  },
  {
   "id": "atb-q0217",
   "topic": "Basics",
   "q": "A business analyst draws a flowchart for loan pre-screening. Which pairing of structure and example is correct?",
   "c": [
    "Sequence — 'repeat until all documents are uploaded'",
    "While — 'record the application date'",
    "If-then-else — 'if CIBIL score ≥ 750 then fast-track, else send to manual review'",
    "Switch — 'add 1 to the attempts counter'"
   ],
   "a": [
    2
   ],
   "w": "Two alternative paths on a condition is if-then-else. Repeating until uploads finish is a loop; recording a date or incrementing a counter is a single process step.",
   "bk": "Codeless DSA ch12",
   "lv": "analyse"
  },
  {
   "id": "atb-q0218",
   "topic": "Trees",
   "q": "Why does the lecture call a tree a non-linear data structure?",
   "c": [
    "From an element there can be several paths onward, so the next element is not fixed",
    "Its elements are scattered randomly across memory",
    "It cannot be stored in a computer's memory as cells",
    "Its elements can only be read from the bottom up"
   ],
   "a": [
    0
   ],
   "w": "Linear structures always have a determined next element (next index, next link, next pop or dequeue). In a tree you must choose where to go next. Memory layout is irrelevant: he stresses memory is just cells whatever the structure.",
   "lec": 12,
   "lv": "recall"
  },
  {
   "id": "atb-q0219",
   "topic": "Trees",
   "q": "Using the lecture's definition, what is the depth of the root node?",
   "c": [
    "1",
    "Equal to the height of the tree",
    "0",
    "Undefined, because the root has no parent"
   ],
   "a": [
    2
   ],
   "w": "Depth counts edges between a node and the root, and the root needs no jumps, so d = 0. Answering 1 counts nodes instead of edges.",
   "lec": 12,
   "lv": "recall"
  },
  {
   "id": "atb-q0220",
   "topic": "Trees",
   "q": "A company tree: CEO has children CFO, CTO and COO; CFO has child Tax; CTO has children Apps and Data; Data has child AI. What is the depth of AI?",
   "c": [
    "2",
    "4",
    "1",
    "3"
   ],
   "a": [
    3
   ],
   "w": "Count edges from AI up to the CEO: AI → Data → CTO → CEO is 3 edges. Counting the four nodes on that path gives the tempting wrong answer 4.",
   "lec": 12,
   "lv": "apply"
  },
  {
   "id": "atb-q0221",
   "topic": "Trees",
   "q": "In the same company tree (CEO → CFO, CTO, COO; CFO → Tax; CTO → Apps, Data; Data → AI), which nodes are leaves?",
   "c": [
    "Tax, Apps, AI and COO",
    "Tax, Apps and AI only",
    "AI only, because it is the deepest node",
    "CFO, CTO and COO"
   ],
   "a": [
    0
   ],
   "w": "A leaf is any node with no children. COO has none, so it is a leaf even though it sits at depth 1. Leaving COO out assumes leaves must be on the bottom level.",
   "lec": 12,
   "lv": "apply"
  },
  {
   "id": "atb-q0222",
   "topic": "Trees",
   "q": "Which statement matches the lecture's definition of the height of a tree?",
   "c": [
    "The number of nodes on the longest path from root to leaf",
    "The maximum depth in the tree: edges from the root to its deepest leaf",
    "The depth of whichever leaf was added most recently",
    "The number of children the root has"
   ],
   "a": [
    1
   ],
   "w": "Height is the largest depth value, counted in edges, and it is one number for the tree. Counting nodes on the longest path overstates it by one.",
   "lec": 12,
   "lv": "recall"
  },
  {
   "id": "atb-q0223",
   "topic": "Trees",
   "q": "Binary tree: M has children K (left) and T (right); K has children F (left) and H (right); T has a single child R. What is the pre-order traversal?",
   "c": [
    "F K H M R T",
    "M K T F H R",
    "M K F H T R",
    "F H K R T M"
   ],
   "a": [
    2
   ],
   "w": "Pre-order is root, left, right at every node: M, then the whole left subtree K F H, then the right subtree T R. M K T F H R is level-order.",
   "lec": 12,
   "lv": "apply"
  },
  {
   "id": "atb-q0224",
   "topic": "Trees",
   "q": "Same binary tree (M → K, T; K → F, H; T → R as its only child). What is the in-order traversal?",
   "c": [
    "F K H M R T",
    "F H K R T M",
    "M K F H T R",
    "F K H M T R"
   ],
   "a": [
    0
   ],
   "w": "In-order is left, root, right: F K H for the left subtree, then M, then the right subtree. R is T's only child, so it counts as the left child and comes before T. Writing T R puts the root before its left child.",
   "lec": 12,
   "lv": "apply"
  },
  {
   "id": "atb-q0225",
   "topic": "Trees",
   "q": "Same binary tree (M → K, T; K → F, H; T → R). What is the post-order traversal?",
   "c": [
    "F K H R T M",
    "M K F H T R",
    "F H K R T M",
    "R T F H K M"
   ],
   "a": [
    2
   ],
   "w": "Post-order is left, right, root: F H K for the left subtree, R T for the right subtree, and M last. Visiting the right subtree first breaks the rule that left comes before right.",
   "lec": 12,
   "lv": "apply"
  },
  {
   "id": "atb-q0226",
   "topic": "Trees",
   "q": "Same binary tree (M → K, T; K → F, H; T → R). What is the level-order traversal?",
   "c": [
    "M K F H T R",
    "M T K R H F",
    "F H R K T M",
    "M K T F H R"
   ],
   "a": [
    3
   ],
   "w": "Level-order reads top to bottom and left to right within each level: M; then K, T; then F, H, R. M K F H T R is pre-order, which goes deep before finishing a level.",
   "lec": 12,
   "lv": "apply"
  },
  {
   "id": "atb-q0227",
   "topic": "Trees",
   "q": "A tree has root A with three children P, Q and R. A student is asked for its in-order traversal. What is the correct response?",
   "c": [
    "P A Q R, treating Q as part of the right side",
    "In-order cannot be determined, because A has three children and there is no single middle position",
    "P Q A R, putting the root after the middle child",
    "The same as pre-order, because in-order always starts at the root"
   ],
   "a": [
    1
   ],
   "w": "Lecture 12's exercise: Q is right of P but left of R, so neither 'left' nor 'right' fits and the root's place is undefined. Guessing a position for Q is exactly the confusion he warned about.",
   "lec": 12,
   "lv": "analyse"
  },
  {
   "id": "atb-q0228",
   "topic": "Trees",
   "q": "Which tree traversal is breadth-first rather than depth-first?",
   "c": [
    "Pre-order",
    "In-order",
    "Post-order",
    "Level-order"
   ],
   "a": [
    3
   ],
   "w": "Level-order finishes each level before moving down. Pre-, in- and post-order all follow their rule down to the farthest leaf first, which is what makes them depth-first.",
   "lec": 12,
   "lv": "recall"
  },
  {
   "id": "atb-q0229",
   "topic": "Trees",
   "q": "According to the lecture, what decides whether a depth-first traversal is called pre-order, in-order or post-order?",
   "c": [
    "The position of the root relative to its left and right subtrees",
    "Whether the tree is traversed right to left or left to right",
    "Whether the traversal starts at the root or at a leaf",
    "The number of levels in the tree"
   ],
   "a": [
    0
   ],
   "w": "Left always comes before right in all three. Root first is pre-order, root in the middle is in-order, root last is post-order. Direction never changes.",
   "lec": 12,
   "lv": "recall"
  },
  {
   "id": "atb-q0230",
   "topic": "Trees",
   "q": "Two different traversals of the same tree both list the root first. Which pair could they be?",
   "c": [
    "In-order and post-order",
    "Pre-order and level-order",
    "Post-order and level-order",
    "In-order and level-order"
   ],
   "a": [
    1
   ],
   "w": "Pre-order visits the root first by definition, and level-order starts at the top level, which is the root. Post-order always lists the root last; in-order lists it after the whole left subtree.",
   "lec": 12,
   "lv": "analyse"
  },
  {
   "id": "atb-q0231",
   "topic": "Trees",
   "q": "Why did the lecture's family tree follow only one side of the family (for example the father's side)?",
   "c": [
    "Because a tree cannot have more than three levels",
    "Because a parent may have only one child in a tree",
    "Because including both sides would give a child two parents, which a tree does not allow",
    "Because the mother's side would need a binary tree"
   ],
   "a": [
    2
   ],
   "w": "Each node may have only one parent. Many children per parent are fine; it is the second parent that breaks the tree and turns it into a graph.",
   "lec": 12,
   "lv": "recall"
  },
  {
   "id": "atb-q0232",
   "topic": "Trees",
   "q": "Folders on a laptop: BSMT → Semester 1 → Algorithmic Thinking → Assignments. With BSMT as the root, what is the depth of the Assignments folder?",
   "c": [
    "4",
    "3",
    "2",
    "1"
   ],
   "a": [
    1
   ],
   "w": "Three edges separate Assignments from the root (Assignments → Algorithmic Thinking → Semester 1 → BSMT). Four is the number of folders on the path, not the number of edges.",
   "lec": 12,
   "lv": "apply"
  },
  {
   "id": "atb-q0233",
   "topic": "Trees",
   "q": "In the lecture, what is a subtree?",
   "c": [
    "A section of the tree that hangs below a node and is itself shaped like a tree",
    "Any single leaf node",
    "The edges that connect the root to its children",
    "The part of the tree above the root"
   ],
   "a": [
    0
   ],
   "w": "Like a big branch that looks like a small tree when you zoom in, a subtree is any section below a node. A single leaf is the smallest possible subtree, but a subtree is not limited to leaves.",
   "lec": 12,
   "lv": "recall"
  },
  {
   "id": "atb-q0234",
   "topic": "Trees",
   "q": "In the family tree, Son B (SB) has no children and sits at depth 1, while the other leaves sit at depth 2. True or false: SB is a leaf.",
   "c": [
    "True",
    "False"
   ],
   "a": [
    0
   ],
   "w": "A leaf is any node with no children, whatever its depth. He pointed this out himself: SB is one level up but still a leaf.",
   "lec": 12,
   "lv": "recall"
  },
  {
   "id": "atb-q0235",
   "topic": "Trees",
   "q": "A tree has a root with 3 children, and each of those children has exactly 2 children, which have none. What are its height and number of leaves?",
   "c": [
    "Height 3, 6 leaves",
    "Height 2, 9 leaves",
    "Height 2, 6 leaves",
    "Height 3, 10 leaves"
   ],
   "a": [
    2
   ],
   "w": "The deepest leaves are two edges from the root, so h = 2, and there are 3 × 2 = 6 leaves. Height 3 counts the three levels of nodes instead of the edges between them.",
   "lec": 12,
   "lv": "analyse"
  },
  {
   "id": "atb-q0236",
   "topic": "Trees",
   "q": "During a traversal, node P has only one child, X. How does the lecture treat X?",
   "c": [
    "As the right child",
    "As a second root",
    "As both a left and a right child",
    "As the left child"
   ],
   "a": [
    3
   ],
   "w": "By convention a single child is taken as the left child, with the right side blank. For pre-order the choice makes no difference, which he also noted.",
   "lec": 12,
   "lv": "recall"
  },
  {
   "id": "atb-q0237",
   "topic": "Trees",
   "q": "In the lecture's definition, a binary tree is one in which each node has:",
   "c": [
    "Exactly two children",
    "At most two children: zero, one or two",
    "At least two children",
    "Exactly two children except the root"
   ],
   "a": [
    1
   ],
   "w": "The maximum is fixed at two and the minimum is not, so leaves (zero) and single-child nodes are fine. 'Exactly two' describes the upper levels of a complete binary tree, not a binary tree.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "atb-q0238",
   "topic": "Trees",
   "q": "A process flowchart has no decision boxes at all, just one step after another. Is it a binary tree?",
   "c": [
    "No, because a binary tree needs a yes/no split at every node",
    "No, because it is a linked list, not a tree",
    "Yes, because every node has at most two children; one is enough",
    "Only if it has an even number of steps"
   ],
   "a": [
    2
   ],
   "w": "He made this point directly: a single path still satisfies 'at most two children'. A yes/no split is allowed, not required.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "atb-q0239",
   "topic": "Trees",
   "q": "A loan-approval rule has one decision with three outcomes: approve, reject or refer to a manager. How should this decision tree be classified?",
   "c": [
    "As a general tree, because one node has three children",
    "As a binary tree, because each outcome is a yes or a no",
    "As a complete binary tree",
    "As a binary search tree"
   ],
   "a": [
    0
   ],
   "w": "A node with three children breaks the binary limit of two, so the most specific correct category is a general tree. Rewording the outcomes as yes/no questions would change the tree, not this one.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "atb-q0240",
   "topic": "Trees",
   "q": "Which knockout format did the lecture use as an example of a binary tree?",
   "c": [
    "A league where every team plays every other team",
    "A World Cup knockout: two teams per match, the winner moves up a level",
    "An IPL points table",
    "A round-robin group stage"
   ],
   "a": [
    1
   ],
   "w": "Each match has two teams feeding one winner, so each node has two children. He set IPL aside because its structure is different.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "atb-q0241",
   "topic": "Trees",
   "q": "Which description matches a complete binary tree?",
   "c": [
    "Every node, including those on the last level, has exactly two children",
    "Every node has at most two children, in any arrangement",
    "Left subtree values are smaller than the parent and right subtree values are larger",
    "Every level except the last has two children per node, and the last level is filled from left to right"
   ],
   "a": [
    3
   ],
   "w": "Completeness is about shape only: full upper levels and a left-filled last level. Requiring two children everywhere is too strict; the BST rule is about values, not shape.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "atb-q0242",
   "topic": "Trees",
   "q": "Root A has children B and C. B has children D and E. C has only a right child, F. Is this a complete binary tree?",
   "c": [
    "Yes, because every node has at most two children",
    "Yes, because the last level has three nodes",
    "No, because C's left position is empty while its right position is filled",
    "No, because a complete binary tree cannot have a node with one child"
   ],
   "a": [
    2
   ],
   "w": "On the last level positions must fill from left to right, so a single child must be a left child. A single left child would have been fine; a single right child is not.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "atb-q0243",
   "topic": "Trees",
   "q": "Root A has children B and C. B has children D and E. C has only a left child, F. What is the most specific category for this tree?",
   "c": [
    "General tree",
    "Complete binary tree",
    "Binary search tree",
    "Not a tree"
   ],
   "a": [
    1
   ],
   "w": "Every level above the last is full, and the last level is filled from the left with no gaps before F. 'General tree' is true of every tree, but the lecture wants the most specific name. Nothing is said about values, so it cannot be called a BST.",
   "lec": 14,
   "lv": "analyse"
  },
  {
   "id": "atb-q0244",
   "topic": "Trees",
   "q": "Which rule defines a binary search tree?",
   "c": [
    "Every parent is greater than or equal to its children",
    "Every level is full except the last",
    "Values in a node's left subtree are smaller than the node, and values in its right subtree are larger, at every node",
    "The left and right subtrees of every node differ in height by at most one"
   ],
   "a": [
    2
   ],
   "w": "The BST rule is about values on each side of every node. Parent ≥ children is the max-heap rule; the height rule is what an AVL tree adds on top of a BST.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "atb-q0245",
   "topic": "Trees",
   "q": "The keys 40, 25, 60, 30, 70, 10 are inserted in that order into an empty BST. Where does 30 end up?",
   "c": [
    "Right child of 25",
    "Left child of 40",
    "Left child of 60",
    "Right child of 10"
   ],
   "a": [
    0
   ],
   "w": "30 < 40, so go left to 25; 30 > 25, so it becomes 25's right child. Placing it under 60 forgets that 30 is smaller than the root.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "atb-q0246",
   "topic": "Trees",
   "q": "A BST has 50 at the root, 30 (with children 20 and 40) on the left, and 70 on the right. 70 has only a left child, 60. Where is the maximum value?",
   "c": [
    "At 60, because the maximum is always a leaf",
    "At 70: go right until there is no right child, then stop",
    "At 40, the rightmost leaf of the left subtree",
    "At 50, the root"
   ],
   "a": [
    1
   ],
   "w": "From 70 there is no right child, and its left child 60 is smaller by the BST rule, so 70 is the maximum. 'The maximum is always a leaf' is the trap he walked through.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "atb-q0247",
   "topic": "Trees",
   "q": "A college inserts roll numbers into a plain BST in decreasing order: 2050, 2040, 2030, 2020. What shape results, and why does it matter?",
   "c": [
    "A balanced tree with 2035 at the root",
    "A complete binary tree, because the values are evenly spaced",
    "A chain leaning right, because larger values always go right",
    "A chain leaning left, which makes searching sequential like a linked list"
   ],
   "a": [
    3
   ],
   "w": "Each new value is smaller than the last, so it always goes left. He noted that increasing order leans right and decreasing order leans left; either way the tree is unbalanced and searching becomes sequential.",
   "lec": 14,
   "lv": "analyse"
  },
  {
   "id": "atb-q0248",
   "topic": "Trees",
   "q": "What balance condition does an AVL tree maintain?",
   "c": [
    "Every node has exactly two children",
    "The root holds the median of all values",
    "At every node, the heights of the left and right subtrees differ by at most one",
    "The tree's height never exceeds three"
   ],
   "a": [
    2
   ],
   "w": "The AVL rule compares subtree heights at every node and allows a difference of 0 or 1. Two children everywhere describes the full levels of a complete tree, not balance.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "atb-q0249",
   "topic": "Trees",
   "q": "The keys 15, 25, 35 are inserted in that order into an empty AVL tree. What does the tree look like after the third insertion?",
   "c": [
    "25 at the root, with 15 on the left and 35 on the right",
    "15 at the root, with 25 to its right and 35 to the right of 25",
    "35 at the root, with 25 and 15 below it on the left",
    "15 at the root, with 25 on the left and 35 on the right"
   ],
   "a": [
    0
   ],
   "w": "After 35 the chain 15 → 25 → 35 has a height difference of 2 at 15, so 25, the middle node, is pulled up. The chain is what a plain BST would keep; 15 with 25 on its left breaks the BST rule.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "atb-q0250",
   "topic": "Trees",
   "q": "The keys 60, 50, 40 are inserted in that order into an empty AVL tree. Which key ends up at the root?",
   "c": [
    "60",
    "40",
    "50",
    "None: an AVL tree rejects decreasing input"
   ],
   "a": [
    2
   ],
   "w": "Decreasing input makes a left-leaning chain 60 → 50 → 40. The rotation pulls the middle node, 50, up, leaving 40 on its left and 60 on its right.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "atb-q0251",
   "topic": "Trees",
   "q": "In the lecture's AVL example, 20, 30, 50, 70, 80 are inserted in that order. After the final rotation, which node is the parent of 50?",
   "c": [
    "30",
    "70",
    "20",
    "80"
   ],
   "a": [
    1
   ],
   "w": "Inserting 80 unbalances the 50 → 70 → 80 chain, so 70 is pulled up with 50 on its left and 80 on its right, under the root 30. Answering 30 describes the tree before the second rotation.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "atb-q0252",
   "topic": "Trees",
   "q": "Which statement about a heap is correct, according to the lecture?",
   "c": [
    "It is a binary search tree with the largest value at the root",
    "It can have any shape as long as the root is the largest value",
    "Its left child must always be smaller than its right child",
    "It is a complete binary tree, and only parent-versus-child order matters"
   ],
   "a": [
    3
   ],
   "w": "A heap has two requirements: the complete-binary-tree shape and the parent–child rule. It is explicitly not a BST, and nothing compares the left child with the right.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "atb-q0253",
   "topic": "Trees",
   "q": "A complete binary tree has 90 at the root, children 70 and 80, then 30 and 50 under 70, and 60 under 80. What is it?",
   "c": [
    "A binary search tree",
    "A min heap",
    "A max heap",
    "Neither a heap nor a BST, because 80 is larger than 70"
   ],
   "a": [
    2
   ],
   "w": "Every parent is larger than its children (90 > 70, 80; 70 > 30, 50; 80 > 60), so it is a max heap. It cannot be a BST: 80 sits in 90's right subtree although it is smaller than 90, and a heap never compares left with right.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "atb-q0254",
   "topic": "Trees",
   "q": "A hospital system gives the most urgent cases priority number 1, then 2, then 3. Which heap would serve the next patient from its root?",
   "c": [
    "A max heap, because urgent cases have the highest priority",
    "A min heap, because the smallest number must be at the top",
    "A binary search tree, because patients must be kept in sorted order",
    "An AVL tree, because it stays balanced"
   ],
   "a": [
    1
   ],
   "w": "When a lower number means higher priority, the smallest value must come out first, which a min heap keeps at its root. A max heap fits systems where a higher number means more urgent.",
   "lec": 14,
   "lv": "analyse"
  },
  {
   "id": "atb-q0255",
   "topic": "Trees",
   "q": "In a min heap, a parent holds 25 and one of its children also holds 25. Is that allowed?",
   "c": [
    "Yes, because the rule is parent ≤ child, so equal values are fine",
    "No, because every child must be strictly larger than its parent",
    "No, because duplicate values break the complete-tree shape",
    "Only if the equal child is the right child"
   ],
   "a": [
    0
   ],
   "w": "The min-heap rule is 'less than or equal to'. His own min heap had a 25 directly under a 25.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "atb-q0256",
   "topic": "Trees",
   "q": "Which application did the lecture give for AVL (balanced) trees?",
   "c": [
    "Knockout tournament brackets",
    "Undo and redo in a word processor",
    "Round-robin CPU scheduling",
    "In-memory indexing in databases, and library catalogues that slot new subjects in"
   ],
   "a": [
    3
   ],
   "w": "Balanced trees keep searches short, which suits database indexes; library numbering that inserts new sub-disciplines between existing numbers was his analogy for rotation. Brackets are his binary-tree example; undo and scheduling belong to stacks and circular queues.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "atb-q0257",
   "topic": "Graphs",
   "q": "Why does the lecture switch from a tree to a graph when mapping a family on both the father's and the mother's side?",
   "c": [
    "Because a family has more than three generations",
    "Because a tree cannot store people's names",
    "Because siblings would need to be at the same level",
    "Because each child would have two parents, which a tree does not allow"
   ],
   "a": [
    3
   ],
   "w": "In a tree a node has exactly one parent. A child of S and P has two, so the structure becomes a graph. Many generations or siblings at one level are no problem for a tree.",
   "lec": 15,
   "lv": "recall"
  },
  {
   "id": "atb-q0258",
   "topic": "Graphs",
   "q": "In the notation G = (V, E), what does V stand for?",
   "c": [
    "The set of vertices",
    "The number of edges",
    "The value stored at each edge",
    "The set of visited nodes"
   ],
   "a": [
    0
   ],
   "w": "V lists the vertices (objects or entities) and E lists the edges between them. Visited nodes belong to traversal, a later lecture.",
   "lec": 15,
   "lv": "recall"
  },
  {
   "id": "atb-q0259",
   "topic": "Graphs",
   "q": "A conglomerate wants to map its group companies, which are legally independent but buy services from one another. Which structure did the lecture recommend for this kind of case?",
   "c": [
    "A tree, with the holding company as the root",
    "A graph, because the companies are independent entities with cross-connections",
    "A binary tree, because each company has at most two links",
    "A queue, because the companies were founded in order"
   ],
   "a": [
    1
   ],
   "w": "His Tata example: even with a holding company, each firm is independent and the links between them criss-cross, so a graph fits. A tree would wrongly impose a single reporting line.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "atb-q0260",
   "topic": "Graphs",
   "q": "A university wants to show its departments, the research groups inside each department, and the faculty in each group. What did the lecture recommend?",
   "c": [
    "A graph, because faculty collaborate",
    "A disconnected graph",
    "A tree, because there is a clear hierarchy inside one institute",
    "A heap, because departments differ in size"
   ],
   "a": [
    2
   ],
   "w": "Department → research group → faculty is a hierarchy within one institution, the same kind of case as a company's designations. A graph fits the collaborations between institutes, not this.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "atb-q0261",
   "topic": "Graphs",
   "q": "In the lecture's family graph, E = {(C,S), (A,P), (A,Q), (B,R), (S,P), (Q,R), (S,X), (P,X), (Q,Y), (R,Y), (X,Y)}. What is the degree of P?",
   "c": [
    "2",
    "4",
    "1",
    "3"
   ],
   "a": [
    3
   ],
   "w": "P appears in (A,P), (S,P) and (P,X): three edges. Counting only parent–child edges and forgetting the spouse edge S–P gives 2.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "atb-q0262",
   "topic": "Graphs",
   "q": "Using the same family graph edge set, what is the degree of A?",
   "c": [
    "2",
    "3",
    "1",
    "0, because A is at the top"
   ],
   "a": [
    0
   ],
   "w": "A appears in (A,P) and (A,Q), so its degree is 2. Being drawn at the top means nothing in a graph, which has no root.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "atb-q0263",
   "topic": "Graphs",
   "q": "Using the same family graph edge set, which vertices have degree 1?",
   "c": [
    "X and Y",
    "B and C",
    "A and B",
    "S and R"
   ],
   "a": [
    1
   ],
   "w": "B appears only in (B,R) and C only in (C,S). X and Y each have three edges: two parents and their cousin edge.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "atb-q0264",
   "topic": "Graphs",
   "q": "A graph has V = {K, L, M, N} and E = {(K,L), (K,M), (L,M), (M,N)}. What is the degree of M?",
   "c": [
    "2",
    "4",
    "3",
    "1"
   ],
   "a": [
    2
   ],
   "w": "M appears in (K,M), (L,M) and (M,N). Four is the number of vertices or edges in the whole graph, not M's degree.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "atb-q0265",
   "topic": "Graphs",
   "q": "In the same graph (V = {K, L, M, N}, E = {(K,L), (K,M), (L,M), (M,N)}), which vertex has the lowest degree?",
   "c": [
    "K",
    "L",
    "M",
    "N"
   ],
   "a": [
    3
   ],
   "w": "N appears in only one edge, (M,N). K and L have degree 2 and M has degree 3.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "atb-q0266",
   "topic": "Graphs",
   "q": "Four vertices A, B, C, D are connected in a ring: A to B, B to C, C to D and D to A. Which edge set is correct?",
   "c": [
    "E = {(A,B), (B,C), (C,D), (D,A)}",
    "E = {(A,B), (B,C), (C,D), (D,A), (A,C)}",
    "E = {(A,B), (B,C), (C,D)}",
    "E = {(A,B), (A,C), (A,D), (B,C), (B,D), (C,D)}"
   ],
   "a": [
    0
   ],
   "w": "E lists exactly the edges that exist, no more and no fewer. Adding (A,C) invents a connection; dropping (D,A) breaks the ring; the six-pair set connects everyone to everyone.",
   "lec": 15,
   "lv": "analyse"
  },
  {
   "id": "atb-q0267",
   "topic": "Graphs",
   "q": "When writing the edge set E, does the order in which you list the edges matter?",
   "c": [
    "Yes, edges must be listed alphabetically",
    "Yes, they must be listed top to bottom",
    "No, any order is fine as long as every edge is included",
    "Yes, the first edge listed becomes the root"
   ],
   "a": [
    2
   ],
   "w": "He used a top-to-bottom order but said left-to-right or bottom-to-top is equally fine. What matters is covering all edges; a graph has no root.",
   "lec": 15,
   "lv": "recall"
  },
  {
   "id": "atb-q0268",
   "topic": "Graphs",
   "q": "True or false: when two vertices are not connected, the edge set E records the pair as an absent edge.",
   "c": [
    "True",
    "False"
   ],
   "a": [
    1
   ],
   "w": "Pairs without a connection, such as C and A in the family graph, are simply not written. E contains only edges that exist.",
   "lec": 15,
   "lv": "recall"
  },
  {
   "id": "atb-q0269",
   "topic": "Graphs",
   "q": "What is the main difference in purpose between a tree and a graph, as the lecture frames it?",
   "c": [
    "A tree is for numbers, a graph for text",
    "A tree shows hierarchy; a graph shows relationships between more or less equal nodes",
    "A tree is stored in memory, a graph is only drawn on paper",
    "A tree is linear, a graph is non-linear"
   ],
   "a": [
    1
   ],
   "w": "Trees encode who is above whom; graphs encode who is connected to whom. Both trees and graphs are non-linear structures.",
   "lec": 15,
   "lv": "recall"
  },
  {
   "id": "atb-q0270",
   "topic": "Graphs",
   "q": "In the family graph, X is joined to its parents S and P and to its cousin Y. A student says X's degree is 2, 'because only parents count'. What is the right answer?",
   "c": [
    "2: relationship edges such as cousin of are not counted",
    "3: degree counts every edge connected to the vertex, whatever relationship it shows",
    "1: only the cousin edge is a true graph edge",
    "4: degree also counts X itself"
   ],
   "a": [
    1
   ],
   "w": "Degree is simply the number of edges at a vertex. The labels (parent, spouse, cousin) describe the relationship but do not change the count.",
   "lec": 15,
   "lv": "analyse"
  },
  {
   "id": "atb-q0271",
   "topic": "Graphs",
   "q": "How should the vertex set of a graph be written, following the lecture's correction of his own slide?",
   "c": [
    "V = (A, B, C)",
    "V = [A, B, C]",
    "V = {A, B, C}",
    "V = <A, B, C>"
   ],
   "a": [
    2
   ],
   "w": "V and E are sets, which take curly braces. His slide used round brackets for V and he corrected it; the round brackets belong to G = (V, E).",
   "lec": 15,
   "lv": "recall"
  },
  {
   "id": "atb-q0272",
   "topic": "Graphs",
   "q": "On a social network, what does the lecture model as a vertex?",
   "c": [
    "Each friendship",
    "Each post",
    "Each user",
    "Each like"
   ],
   "a": [
    2
   ],
   "w": "Each person or user is a vertex; the connections between users are the edges.",
   "lec": 15,
   "lv": "recall"
  },
  {
   "id": "atb-q0273",
   "topic": "Graphs",
   "q": "Three separate families are each drawn as a tree. Then a child from the first family marries a child from the second, and they have a child. What happens to the overall structure?",
   "c": [
    "It stays three trees, one per family",
    "It becomes one tree, rooted at the oldest grandparent",
    "It becomes a binary tree, because every child has two parents",
    "It becomes a graph, because the new child has two parents from different trees"
   ],
   "a": [
    3
   ],
   "w": "The new child is connected to two parents, breaking the one-parent rule, so the structure becomes a graph. 'Two parents' has nothing to do with the at-most-two-children rule of a binary tree.",
   "lec": 15,
   "lv": "analyse"
  },
  {
   "id": "atb-q0274",
   "topic": "Graphs",
   "q": "What makes a graph directed, in the lecture's terms?",
   "c": [
    "Its edges carry numbers such as distance or cost",
    "Each relationship runs one way only, and the reverse is not automatically true",
    "Every vertex can be reached from every other vertex",
    "It has a starting vertex chosen in advance"
   ],
   "a": [
    1
   ],
   "w": "Direction is about whether the relationship is one-way. Numbers on edges make a graph weighted, and reachability makes it connected; those are separate properties.",
   "lec": 16,
   "lv": "recall"
  },
  {
   "id": "atb-q0275",
   "topic": "Graphs",
   "q": "A family database records 'A is a son of B'. Which kind of edge models this relationship?",
   "c": [
    "An undirected edge, because family ties are mutual",
    "A weighted edge, because blood relations are strong",
    "A directed edge, because B is not a son of A",
    "No edge, because a son is a child in a tree"
   ],
   "a": [
    2
   ],
   "w": "The relationship is one-way, so the edge needs a direction. 'Father of' would be a second, separate directed edge from B to A.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "atb-q0276",
   "topic": "Graphs",
   "q": "On LinkedIn you can connect with people (they accept) or simply follow them. How did the lecture classify these two features?",
   "c": [
    "Connections are undirected; follows are directed",
    "Both are directed",
    "Both are undirected",
    "Connections are directed; follows are undirected"
   ],
   "a": [
    0
   ],
   "w": "An accepted connection works both ways, while following someone does not make them follow you. That is why he called LinkedIn an example where both kinds of graph come together.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "atb-q0277",
   "topic": "Graphs",
   "q": "In a directed graph, the in-degree of a vertex is:",
   "c": [
    "The total number of edges in the graph",
    "The number of edges going out of the vertex",
    "The number of vertices it can reach",
    "The number of edges coming into the vertex"
   ],
   "a": [
    3
   ],
   "w": "In-degree counts incoming edges and out-degree counts outgoing ones. 'Vertices it can reach' is about paths, not degree.",
   "lec": 16,
   "lv": "recall"
  },
  {
   "id": "atb-q0278",
   "topic": "Graphs",
   "q": "Treat yourself as a vertex on Instagram. What is your in-degree?",
   "c": [
    "The number of accounts that follow you",
    "The number of accounts you follow",
    "The number of posts you have made",
    "The number of mutual follows only"
   ],
   "a": [
    0
   ],
   "w": "Edges point from follower to followed, so arrows coming in are your followers. The accounts you follow are your out-degree.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "atb-q0279",
   "topic": "Graphs",
   "q": "A brand compares two Instagram accounts. Account P follows 9,000 accounts and is followed by 1,200. Account Q follows 300 and is followed by 45,000. Using the lecture's reasoning, which should it hire and why?",
   "c": [
    "P, because its out-degree is higher",
    "P, because its total degree is closer to balanced",
    "Q, because its in-degree (followers) is far higher",
    "Either, because the two have similar total degree"
   ],
   "a": [
    2
   ],
   "w": "A post reaches the account's followers, which is its in-degree: 45,000 against 1,200. P's large out-degree is exactly the number he called immaterial to a marketing firm.",
   "lec": 16,
   "lv": "analyse"
  },
  {
   "id": "atb-q0280",
   "topic": "Graphs",
   "q": "A directed graph has the edges A → B, A → C, B → C, C → A and D → C. What are the in-degree and out-degree of C?",
   "c": [
    "In-degree 1, out-degree 3",
    "In-degree 3, out-degree 1",
    "In-degree 2, out-degree 2",
    "In-degree 4, out-degree 0"
   ],
   "a": [
    1
   ],
   "w": "Arrows into C come from A, B and D (3); the only arrow out of C goes to A (1). Swapping the two mixes up which end of the arrow each count uses.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "atb-q0281",
   "topic": "Graphs",
   "q": "Which description fits an unweighted graph?",
   "c": [
    "Every connection has the same value",
    "Edges have no direction",
    "Some vertices cannot be reached",
    "There are no cycles"
   ],
   "a": [
    0
   ],
   "w": "Unweighted means all edges count equally ('A knows B'). No direction describes an undirected graph, unreachable vertices a disconnected one, and no cycles an acyclic one.",
   "lec": 16,
   "lv": "recall"
  },
  {
   "id": "atb-q0282",
   "topic": "Graphs",
   "q": "You subscribe to a stand-up comedian's YouTube channel and watch every new video. A channel you have never watched appears in your feed for the first time through paid promotion. How would a recommender system weight these two links?",
   "c": [
    "Both low, because neither link has a numeric distance",
    "Both equal, because a recommendation is a recommendation",
    "The new channel high, because it is fresh content",
    "The subscribed channel high and the new channel low"
   ],
   "a": [
    3
   ],
   "w": "Weight reflects strength built up through history: frequent watching makes the link strong, a first-time promotion has no history behind it. That is why your favourite creator's new upload keeps reappearing.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "atb-q0283",
   "topic": "Graphs",
   "q": "An airline-network graph uses the number of daily flights between two cities as each edge's value. What kind of graph is this?",
   "c": [
    "A disconnected graph",
    "An acyclic graph",
    "A weighted graph",
    "An undirected graph, because flights have numbers"
   ],
   "a": [
    2
   ],
   "w": "Putting a value on each edge — here flight frequency, so Delhi–Mumbai outweighs a route to a smaller city — makes it weighted. Numbers say nothing about direction.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "atb-q0284",
   "topic": "Graphs",
   "q": "When is a graph connected?",
   "c": [
    "When every vertex can be reached from every other vertex, by a short or long path",
    "When every vertex is joined directly to every other vertex",
    "When it contains at least one cycle",
    "When all of its edges are directed"
   ],
   "a": [
    0
   ],
   "w": "Connected needs some path between every pair, not a direct edge. Direct edges between every pair would be far stronger than he required; paths 'may be smaller, may be longer'.",
   "lec": 16,
   "lv": "recall"
  },
  {
   "id": "atb-q0285",
   "topic": "Graphs",
   "q": "Considering the road network only, how should the routes Ahmedabad–Silchar and Ahmedabad–Port Blair be classified?",
   "c": [
    "Both connected, because both cities are in India",
    "Ahmedabad–Silchar connected; Ahmedabad–Port Blair disconnected",
    "Both disconnected, because they are too far apart",
    "Ahmedabad–Silchar disconnected; Ahmedabad–Port Blair connected"
   ],
   "a": [
    1
   ],
   "w": "You can drive from Gujarat to Assam however far it is, but there is sea between the mainland and the Andaman Islands. Distance does not decide connectivity; the existence of a path does.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "atb-q0286",
   "topic": "Graphs",
   "q": "What makes a graph cyclic, as the lecture defines it?",
   "c": [
    "It is drawn in a circle",
    "Every edge has a return edge",
    "You can get back to the starting vertex without retracing the path you came by",
    "Its vertices are visited in a fixed order"
   ],
   "a": [
    2
   ],
   "w": "A → B → C → A returns to A along new edges. Return edges on every route are one way to get cycles, as in his airport example, but the definition is about returning without retracing.",
   "lec": 16,
   "lv": "recall"
  },
  {
   "id": "atb-q0287",
   "topic": "Graphs",
   "q": "An airport network has a return flight for every route (Jodhpur–Mumbai and Mumbai–Jodhpur, Pune–Mumbai and Mumbai–Pune, and so on). Which kind of graph did the lecture say models it best?",
   "c": [
    "Acyclic",
    "Disconnected",
    "Cyclic",
    "Unweighted, so neither cyclic nor acyclic"
   ],
   "a": [
    2
   ],
   "w": "With onward and return flights and links to other cities, you can return to where you started, so the graph is cyclic. Cyclic vs acyclic is a separate question from weight.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "atb-q0288",
   "topic": "Graphs",
   "q": "A city's metro network has terminal stations, and a rider may not use the same stretch of track twice. How did the lecture classify it?",
   "c": [
    "Cyclic, because metro trains run in both directions",
    "Disconnected, because terminal stations are dead ends",
    "Cyclic, because every metro network is a loop",
    "Acyclic, because at a terminal the only way back is to retrace the path"
   ],
   "a": [
    3
   ],
   "w": "His metro example ends in terminal stations, so without retracing you cannot return. A metro with a genuine loop line would be cyclic, so judge from the edges, not the word 'metro'.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "atb-q0289",
   "topic": "Graphs",
   "q": "A and B are the parents of C, drawn as directed edges A → C and B → C. Is this graph cyclic or acyclic?",
   "c": [
    "Acyclic, because following the edges forward you can never return to a parent",
    "Cyclic, because C has two parents",
    "Cyclic, because A and B are connected through C",
    "Neither, because it has only three vertices"
   ],
   "a": [
    0
   ],
   "w": "Moving forward from A or B leads to C and stops; there is no way back without retracing. Having two parents makes it a graph rather than a tree, but not a cyclic one.",
   "lec": 16,
   "lv": "analyse"
  },
  {
   "id": "atb-q0290",
   "topic": "Graphs",
   "q": "A is friends with B and with C, and B is also friends with C. Is this friendship graph cyclic?",
   "c": [
    "No, because friendship is undirected",
    "Yes: A → B → C → A returns to A without retracing",
    "No, because there are only three people",
    "Only if the friendships are weighted"
   ],
   "a": [
    1
   ],
   "w": "This is his friends example of a cyclic graph. Undirected edges can still form a cycle, and size or weight is irrelevant.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "atb-q0291",
   "topic": "Graphs",
   "q": "Why does the lecture say you cannot simply quote 'the degree' of a vertex in a directed graph?",
   "c": [
    "Because directed graphs have no edges at vertices",
    "Because degree only exists in trees",
    "Because incoming and outgoing edges mean different things, so in-degree and out-degree are counted separately",
    "Because degree in a directed graph is always zero"
   ],
   "a": [
    2
   ],
   "w": "Followers and following are different quantities, so a single total hides the information an analyst needs. In an undirected graph one count is enough.",
   "lec": 16,
   "lv": "analyse"
  },
  {
   "id": "atb-q0292",
   "topic": "Graphs",
   "q": "Which pairing of traversal and data structure did the lecture use?",
   "c": [
    "DFS with a queue, BFS with a stack",
    "DFS with a stack, BFS with a queue",
    "Both with a stack",
    "Both with a queue"
   ],
   "a": [
    1
   ],
   "w": "DFS pops the most recently pushed neighbour, which sends it deeper (stack, LIFO). BFS serves neighbours in the order they were found, level by level (queue, FIFO).",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "atb-q0293",
   "topic": "Graphs",
   "q": "According to the lecture, what is DFS typically used to find out?",
   "c": [
    "The exact number of hops between two people",
    "Whether any connection at all exists between two nodes",
    "The vertex with the highest degree",
    "The weight of every edge"
   ],
   "a": [
    1
   ],
   "w": "DFS follows a path as far as it goes, which is enough to learn whether someone can be reached at all. The number of hops is the BFS question.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "atb-q0294",
   "topic": "Graphs",
   "q": "A recruiter already knows a candidate is somewhere in her professional network and now wants to know how many introductions separate them. Which traversal fits?",
   "c": [
    "DFS, because it goes deepest first",
    "Pre-order traversal",
    "In-order traversal",
    "BFS, because it explores level by level, so the level gives the number of hops"
   ],
   "a": [
    3
   ],
   "w": "Once a connection is known to exist, BFS gives the degree of separation: the level at which the person appears. Pre- and in-order are tree traversals.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "atb-q0295",
   "topic": "Graphs",
   "q": "Lecture graph E = {(A,P), (A,Q), (P,X), (X,S), (S,C), (Q,Y), (Y,R), (R,B)}. Starting from A and taking P before Q, what is the DFS order?",
   "c": [
    "A P Q X Y S R C B",
    "A Q Y R B P X S C",
    "A P X S C Q Y R B",
    "A P X Q Y S R C B"
   ],
   "a": [
    2
   ],
   "w": "DFS goes A → P → X → S → C as deep as possible, backtracks to A, then takes Q → Y → R → B. A P Q X Y S R C B is the BFS order.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "atb-q0296",
   "topic": "Graphs",
   "q": "Same graph (A–P, A–Q, P–X, X–S, S–C, Q–Y, Y–R, R–B). Starting from A but taking Q before P, what is the DFS order?",
   "c": [
    "A Q Y R B P X S C",
    "A Q P Y X R S B C",
    "A P X S C Q Y R B",
    "B R Y Q A P X S C"
   ],
   "a": [
    0
   ],
   "w": "Going via Q first, DFS reaches B before backtracking to A and exploring P → X → S → C. A Q P Y X R S B C is BFS with Q first, and B R Y Q… starts from B, not A.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "atb-q0297",
   "topic": "Graphs",
   "q": "Same graph (A–P, A–Q, P–X, X–S, S–C, Q–Y, Y–R, R–B). Starting from A with P before Q, what is the BFS order?",
   "c": [
    "A P X S C Q Y R B",
    "A P Q X Y R S B C",
    "A P Q S R X Y C B",
    "A P Q X Y S R C B"
   ],
   "a": [
    3
   ],
   "w": "Level by level: A; P, Q; then P's neighbour X before Q's neighbour Y; then S (from X) before R (from Y); then C before B. Swapping S and R breaks the queue's order.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "atb-q0298",
   "topic": "Graphs",
   "q": "Same graph (A–P, A–Q, P–X, X–S, S–C, Q–Y, Y–R, R–B). Which of these is a valid BFS order starting from A?",
   "c": [
    "A Q P Y X R S B C",
    "A P X S C Q Y R B",
    "A P Q Y X S R C B",
    "A Q P X Y R S B C"
   ],
   "a": [
    0
   ],
   "w": "Visiting Q before P is allowed, but then Q's neighbour Y must come before P's neighbour X, and so on down the levels. A P X S C… is DFS; the other two mix the level-1 order with a different order below it, which a queue cannot produce.",
   "lec": 17,
   "lv": "analyse"
  },
  {
   "id": "atb-q0299",
   "topic": "Graphs",
   "q": "In his exercise, DFS starts from X and goes to S first (graph: A–P, A–Q, P–X, X–S, S–C, Q–Y, Y–R, R–B). What is the DFS order?",
   "c": [
    "X S P C A Q Y R B",
    "X S C P A Q Y R B",
    "X P A Q Y R B S C",
    "X S C A P Q Y R B"
   ],
   "a": [
    1
   ],
   "w": "X → S → C reaches a dead end, so DFS backtracks to X and takes P → A → Q → Y → R → B. X S P C A… is the BFS order; X P A Q… takes P first; jumping from C to A skips the backtrack through X and P.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "atb-q0300",
   "topic": "Graphs",
   "q": "Same exercise, but BFS from X taking S before P. What is the BFS order?",
   "c": [
    "X S C P A Q Y R B",
    "X P S A C Q Y R B",
    "X S P A C Q Y R B",
    "X S P C A Q Y R B"
   ],
   "a": [
    3
   ],
   "w": "Level 1 is S then P; their neighbours follow in the same order, C (from S) then A (from P); then Q, Y, R, B one level each. X S C P… is DFS, and putting A before C contradicts having served S first.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "atb-q0301",
   "topic": "Graphs",
   "q": "In the lecture graph, B is drawn on the same row as A. How many hops (its BFS level) is B from A?",
   "c": [
    "4",
    "0",
    "1",
    "2"
   ],
   "a": [
    0
   ],
   "w": "A → Q → Y → R → B is four edges. The drawing puts B beside A, but there is no edge between them; levels are measured in hops.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "atb-q0302",
   "topic": "Graphs",
   "q": "DFS on a stack starts by pushing A and popping it. A's unvisited neighbours are pushed Q first, then P. Which node is popped next?",
   "c": [
    "Q, because it was pushed first",
    "P, because the last item pushed is on top",
    "A again, because it is the start",
    "X, because it is P's neighbour"
   ],
   "a": [
    1
   ],
   "w": "A stack is last in, first out, so P — pushed last — is on top and is popped next. Q stays underneath until the whole P branch has been explored.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "atb-q0303",
   "topic": "Graphs",
   "q": "BFS on a queue from A: A is dequeued (P and Q enqueued), then P is dequeued (X enqueued), then Q is dequeued (Y enqueued). What does the queue hold now, front to rear?",
   "c": [
    "Y, X",
    "X only",
    "X, Y",
    "P, Q, X, Y"
   ],
   "a": [
    2
   ],
   "w": "X joined the rear before Y, and a queue serves its front first, so X is at the front. P and Q have already been dequeued and visited.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "atb-q0304",
   "topic": "Graphs",
   "q": "Why can two students give different DFS orders for the same graph and starting vertex, and both be correct?",
   "c": [
    "Because DFS is a random algorithm",
    "Because a graph has no left or right, so either unvisited neighbour can be taken first",
    "Because DFS may skip some vertices",
    "Because DFS starts from a different root each time"
   ],
   "a": [
    1
   ],
   "w": "Trees fix the order with left before right; graph neighbours have no such order. DFS still visits every reachable vertex, and the start is fixed in advance.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "atb-q0305",
   "topic": "Graphs",
   "q": "A graph has edges R–S, R–T, S–U, T–V, U–W. Starting from R and always taking neighbours in alphabetical order, what is the DFS order?",
   "c": [
    "R S T U V W",
    "R S U W T V",
    "R T V S U W",
    "R S U T V W"
   ],
   "a": [
    1
   ],
   "w": "From R take S, then U, then W, which is a dead end; backtrack to R and take T, then V. R S T U V W is the BFS order.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "atb-q0306",
   "topic": "Graphs",
   "q": "Same graph (R–S, R–T, S–U, T–V, U–W), starting from R with neighbours taken alphabetically. What is the BFS order, and how many hops is W from R?",
   "c": [
    "R S T U V W; W is 3 hops away",
    "R S U W T V; W is 3 hops away",
    "R S T U V W; W is 5 hops away",
    "R S T U V W; W is 2 hops away"
   ],
   "a": [
    0
   ],
   "w": "Levels: R (0); S, T (1); U, V (2); W (3, via R → S → U → W). Five is W's position in the visit list, not its distance.",
   "lec": 17,
   "lv": "analyse"
  },
  {
   "id": "atb-q0307",
   "topic": "Graphs",
   "q": "In the lecture's stack algorithm for DFS, what happens in the step after a node is pushed?",
   "c": [
    "The bottom node of the stack is removed",
    "All nodes in the stack are marked visited",
    "The top node is popped and marked visited",
    "The stack is emptied and refilled"
   ],
   "a": [
    2
   ],
   "w": "Step 2 pops the top node and marks it visited; step 3 pushes its unvisited neighbours; step 4 repeats until the stack is empty. Only the top of a stack is ever removed.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "atb-q0308",
   "topic": "Graphs",
   "q": "Where does a graph traversal start, according to the lecture?",
   "c": [
    "At the root of the graph",
    "At the vertex with the highest degree",
    "Always at the vertex drawn top-left",
    "At a starting vertex given in advance; any vertex can be the start"
   ],
   "a": [
    3
   ],
   "w": "Graphs have no root, so the algorithm is told where to start, and any vertex will do. Degree and drawing position play no part.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "atb-q0309",
   "topic": "Graphs",
   "q": "A user receives a follow request and wants to check whether the sender is connected to her network in any way before accepting. Which traversal and data structure fit?",
   "c": [
    "DFS on a stack, following friend of friend until the sender is found or no paths remain",
    "BFS on a stack",
    "Level-order on a heap",
    "DFS on a queue"
   ],
   "a": [
    0
   ],
   "w": "This is his DFS use case: is there any connection at all? DFS is built on a stack. BFS would also find the sender, but it answers how far, and it runs on a queue, not a stack.",
   "lec": 17,
   "lv": "analyse"
  },
  {
   "id": "atb-q0310",
   "topic": "Trees",
   "q": "A student picks a degree by comparing options at every stage: online or offline, which institute, then which BS programme. In the live lecture's analogy, what kind of path is this?",
   "c": [
    "Non-linear, because there are several options at each stage and one is chosen",
    "Linear, because the student ends up in one programme",
    "Linear, because the stages come one after another",
    "A stack, because the last decision is made first"
   ],
   "a": [
    0
   ],
   "w": "His contrast: following one person's advice step by step is linear, while weighing multiple options at every node is non-linear, like a tree or graph. Ending in one place does not make the path linear.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "atb-q0311",
   "topic": "Trees",
   "q": "Why did the live lecture call biological classification a nearly perfect example of a tree?",
   "c": [
    "Because every species has exactly two sub-species",
    "Because it is based on how we use things, such as cooking a tomato as a vegetable",
    "Because each species sits under one group at every level, decided by genetic and evolutionary properties",
    "Because animals can belong to several families at once"
   ],
   "a": [
    2
   ],
   "w": "One parent group per member is the tree rule, and the grouping follows biology, not everyday habit — which is why a tomato is a fruit and a penguin a bird. Belonging to several families would make it a graph.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "atb-q0312",
   "topic": "Trees",
   "q": "The live lecture corrected a slide on tree height. Which definition should you use?",
   "c": [
    "The number of edges from a node up to the root",
    "How far the root is from its deepest leaf, i.e. the maximum depth",
    "How far each node is from its own deepest leaf",
    "The number of levels counted as nodes, including the root"
   ],
   "a": [
    1
   ],
   "w": "Height is one value for the tree: the largest depth, measured from the root to the deepest leaf in edges. Edges from a node up to the root is that node's depth.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "atb-q0313",
   "topic": "Graphs",
   "q": "An ed-tech company is promoting an online degree. Influencer A has 20 lakh followers and posts about beauty; influencer B has 1.5 lakh followers and posts study guidance. Applying the live lecture's reasoning, what should the company weigh?",
   "c": [
    "Only in-degree, so A wins outright",
    "Only out-degree, so whoever follows more accounts",
    "Neither: influencer choice cannot be modelled as a graph",
    "In-degree, but also whether the followers are the relevant audience and what each influencer charges, which may favour B"
   ],
   "a": [
    3
   ],
   "w": "Follower count (in-degree) is the key variable, but he added relevance — students interested in study guidance — and the influencer's fee. A large but irrelevant audience can be the worse buy.",
   "lec": 18,
   "lv": "analyse"
  },
  {
   "id": "atb-q0314",
   "topic": "Graphs",
   "q": "From A to B there is a 2 km one-way road; coming back from B to A you must take a 5 km route. How should the two directions appear in a graph?",
   "c": [
    "One undirected edge with weight 2",
    "Two directed edges, A → B with weight 2 and B → A with weight 5",
    "One undirected edge with the average weight 3.5",
    "No edge, because the road is one-way"
   ],
   "a": [
    1
   ],
   "w": "A one-way road makes the edge directed, and the return trip has its own distance, so each direction gets its own weight. An undirected edge would claim the same distance both ways.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "atb-q0315",
   "topic": "Graphs",
   "q": "Considering roads only, which statement matches the live lecture?",
   "c": [
    "The road network within a single Andaman island is connected, but India's road network including the islands is disconnected",
    "The whole of India's road network, islands included, is connected",
    "Every island road network is disconnected",
    "Guwahati and Kanyakumari are disconnected because they are far apart"
   ],
   "a": [
    0
   ],
   "w": "Inside one island you can drive anywhere, so that network is connected; the sea separates the islands from the mainland, so the national road graph is disconnected. Distance alone never disconnects a graph.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "atb-q0316",
   "topic": "Graphs",
   "q": "A student arrives in a new city and first explores the market near the hostel, then the streets a little farther out, and so on. Which traversal does this resemble?",
   "c": [
    "Depth-first, because the student keeps walking",
    "In-order, because the hostel is in the middle",
    "Breadth-first, because nearby places are covered before farther ones",
    "Post-order, because the hostel is visited last"
   ],
   "a": [
    2
   ],
   "w": "Covering the immediate neighbourhood before moving outward is level-by-level, i.e. breadth-first. Riding off in one direction to the far corner of the city was his depth-first example.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "atb-q0317",
   "topic": "Graphs",
   "q": "A graph-traversal question gives the graph but does not say which vertex to start from. What did the live lecture advise?",
   "c": [
    "Leave the question blank, because the traversal is undefined",
    "Always start from the vertex with the highest degree",
    "Always start from the alphabetically first vertex, because that is the root",
    "Assume a starting vertex, state it, and traverse from there"
   ],
   "a": [
    3
   ],
   "w": "Graphs have no root, so if the start is not given you must assume one. Neither degree nor alphabetical order makes a vertex a root.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "atb-q0318",
   "topic": "Graphs",
   "q": "In the live lecture, which word did he use for vertices that are directly connected in a graph?",
   "c": [
    "Parent and child",
    "Root and leaf",
    "Neighbours",
    "Siblings"
   ],
   "a": [
    2
   ],
   "w": "He switched from the tree words parent and child to neighbour, because in a graph no vertex is above another.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "atb-q0319",
   "topic": "Hashing",
   "q": "What distinguishes a hash function from a standard function such as square or uppercase, according to the lecture?",
   "c": [
    "It always gives a fixed-length output, whatever the length of the input",
    "It always gives an output the same length as its input",
    "It only accepts numbers as input",
    "Its output is always a single digit"
   ],
   "a": [
    0
   ],
   "w": "Square gives variable-length outputs and uppercase gives an output as long as its input. A hash's output length is fixed by the function itself.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "atb-q0320",
   "topic": "Hashing",
   "q": "Some textbooks call the output of a hash function a:",
   "c": [
    "Key",
    "Digest (message digest)",
    "Pointer",
    "Node"
   ],
   "a": [
    1
   ],
   "w": "He flagged the term so you are not confused: digest or message digest is simply the fixed-length hash output. The key is the input you hash.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "atb-q0321",
   "topic": "Hashing",
   "q": "What is 48 mod 5?",
   "c": [
    "9",
    "3",
    "8",
    "0"
   ],
   "a": [
    1
   ],
   "w": "5 × 9 = 45 and 48 − 45 = 3, so the remainder is 3. Nine is the quotient, not the remainder, and 8 is the last digit, which is what mod 10 would give.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "atb-q0322",
   "topic": "Hashing",
   "q": "What is 70 mod 5?",
   "c": [
    "14",
    "5",
    "0",
    "7"
   ],
   "a": [
    2
   ],
   "w": "5 divides 70 exactly (5 × 14), so nothing remains. He noted some algorithms substitute X (here 5) for a zero remainder, but the mod result itself is 0.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "atb-q0323",
   "topic": "Hashing",
   "q": "A system stores the number 24517. What does 24517 mod 100 return?",
   "c": [
    "245",
    "7",
    "24",
    "17"
   ],
   "a": [
    3
   ],
   "w": "Dividing by 100 leaves a remainder of 17: mod 100 picks the last two digits, as mod 10 picks the last one.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "atb-q0324",
   "topic": "Hashing",
   "q": "A database designer wants exactly 100 unique hash values for an index. Which modulo should she use?",
   "c": [
    "mod 100",
    "mod 10",
    "mod 99",
    "mod 1000"
   ],
   "a": [
    0
   ],
   "w": "X is the number of unique hash values wanted: mod 100 gives the remainders 0 to 99. mod 99 gives only 99 values.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "atb-q0325",
   "topic": "Hashing",
   "q": "Which set of values can n mod 10 produce?",
   "c": [
    "1 to 10",
    "0 to 10",
    "0 to 9",
    "1 to 9"
   ],
   "a": [
    2
   ],
   "w": "A remainder after dividing by 10 can be 0 (for 2640) up to 9, giving ten values. 10 itself is impossible, because 10 divides into 10 exactly.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "atb-q0326",
   "topic": "Hashing",
   "q": "Serial numbers 2611, 2604, 2621, 2618, 2634 and 2608 are hashed with mod 10. Which keys share index 4?",
   "c": [
    "2604 and 2634",
    "2611 and 2621",
    "2618 and 2608",
    "2604 only"
   ],
   "a": [
    0
   ],
   "w": "Each key's index is its last digit: 2604 → 4 and 2634 → 4, a collision. 2611 and 2621 share index 1, and 2618 and 2608 share index 8.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "atb-q0327",
   "topic": "Hashing",
   "q": "With mod 10 and chaining, 2611 is inserted, then 2621. A user searches for 2621. What happens?",
   "c": [
    "The search scans every record from index 0 onwards",
    "It goes to index 1 and walks the chain: 2611, then 2621",
    "It goes straight to 2621, because chaining removes collisions",
    "It fails, because index 1 is already taken by 2611"
   ],
   "a": [
    1
   ],
   "w": "The hash says where to start (index 1); within that index the linked list is walked in order. Chaining does not remove collisions, it stores them, and nothing is rejected.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "atb-q0328",
   "topic": "Hashing",
   "q": "In the lecture's student-records hash table, which is the key and which is the value?",
   "c": [
    "The name is the key, the roll number is the value",
    "The hash index is the key, the name is the value",
    "The roll number is the key, the name and other details are the value",
    "The department code is the key, the year is the value"
   ],
   "a": [
    2
   ],
   "w": "The key uniquely identifies a record (the roll number); the value is the data attached to it. The hash index is a third part — that is why he called it index–key–value.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "atb-q0329",
   "topic": "Hashing",
   "q": "A library indexes book titles by their first letter, giving 26 hash values. Why does the lecture consider this a poor hash function for indexing?",
   "c": [
    "It is too slow to calculate",
    "It is not consistent: the same title can get different letters",
    "It produces too many unique values",
    "The distribution is uneven: many titles start with letters like A or P and very few with Q or X"
   ],
   "a": [
    3
   ],
   "w": "This is his dictionary point: first letters are skewed, so some indexes hold huge chains and others almost nothing. It is fast and consistent; the failure is even distribution.",
   "lec": 19,
   "lv": "analyse"
  },
  {
   "id": "atb-q0330",
   "topic": "Hashing",
   "q": "A developer suggests giving every roll number its own unique index so there are no collisions at all. What did the lecture say about this?",
   "c": [
    "It is ideal, because collisions must be zero for indexing",
    "It defeats the purpose: you would search the index just as slowly as the keys themselves",
    "It is required, because chaining is not allowed in databases",
    "It only works with mod 10"
   ],
   "a": [
    1
   ],
   "w": "Indexing wants fewer collisions, not none; an index is useful because it groups many keys under few starting points. Zero collisions is the goal for security hashes, not indexes.",
   "lec": 19,
   "lv": "analyse"
  },
  {
   "id": "atb-q0331",
   "topic": "Hashing",
   "q": "What is the avalanche effect in hashing?",
   "c": [
    "A small change in the input produces a completely different hash",
    "Collisions multiply as the table fills",
    "The hash gets longer as the input gets longer",
    "A slow hash function slows the whole system"
   ],
   "a": [
    0
   ],
   "w": "Even one changed digit should scramble the output, so similar hashes cannot be used to guess the input. Hash length never grows with the input.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "atb-q0332",
   "topic": "Hashing",
   "q": "For which use did the lecture say hash calculation should be deliberately slow?",
   "c": [
    "Database indexing",
    "Integrity checks on files",
    "Password storage",
    "Extracting the last digit of a number"
   ],
   "a": [
    2
   ],
   "w": "A slow password hash makes cracking slow and difficult. Indexing needs very fast hashing, and integrity checks fast hashing.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "atb-q0333",
   "topic": "Hashing",
   "q": "A student forgets her ERP password and asks the administrator to tell her what it was. Why can the administrator only offer a reset?",
   "c": [
    "Because of the institute's privacy policy, although the password is on file",
    "Because the password is encrypted with a key the administrator lacks",
    "Because passwords are deleted after every login",
    "Because the system stores only the password's hash, and a hash cannot be turned back into the password"
   ],
   "a": [
    3
   ],
   "w": "Good systems never store the password itself, and hashing is one-way, so there is nothing to look up. This is hashing, not encryption: no key would bring it back.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "atb-q0334",
   "topic": "Hashing",
   "q": "A user types their correct password but with an extra space at the end. The login fails. Which property explains this?",
   "c": [
    "Collision resistance",
    "The avalanche effect: the tiny change gives a completely different hash, which does not match the stored one",
    "Chaining",
    "Even distribution"
   ],
   "a": [
    1
   ],
   "w": "The system compares hashes, and any change, even a space or a capital letter, produces a different hash. Collision resistance is about different inputs not sharing a hash, not about this mismatch.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "atb-q0335",
   "topic": "Hashing",
   "q": "In an integrity check, what does the receiver do with the package of data and hash it receives?",
   "c": [
    "Opens the data and trusts it, since a hash was attached",
    "Sends the hash back to the sender to be decrypted",
    "Recalculates the hash from the received data and compares it with the hash that came in the package",
    "Replaces the data with the hash"
   ],
   "a": [
    2
   ],
   "w": "The receiver separates the two, recomputes the hash from the data and compares. A hash cannot be decrypted, and an attached hash proves nothing until it is checked.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "atb-q0336",
   "topic": "Hashing",
   "q": "A sales report arrives with its hash. The receiver's recalculated hash does not match the received one. What is the right conclusion, following the lecture?",
   "c": [
    "The file is deemed corrupted or tampered with, and is ignored or not opened",
    "The hash function is faulty and should be replaced",
    "The file is fine; hashes often differ slightly",
    "The sender's password was wrong"
   ],
   "a": [
    0
   ],
   "w": "Matching hashes confirm integrity; a mismatch means the data changed on the way. Because of the avalanche effect, an intact file never produces a 'slightly different' hash.",
   "lec": 19,
   "lv": "analyse"
  },
  {
   "id": "atb-q0337",
   "topic": "Hashing",
   "q": "Which statement matches the lecture's summary about collisions?",
   "c": [
    "Every hash function must be collision-free",
    "Collisions only happen with mod 10",
    "Indexing hashes can tolerate collisions, handled by chaining; cybersecurity hashes should be collision resistant",
    "Cybersecurity hashes tolerate collisions; indexing hashes must avoid them"
   ],
   "a": [
    2
   ],
   "w": "Simple indexing hashes accept collisions because chaining stores them; complex security hashes deliberately avoid them. The reversed pairing is the trap.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "atb-q0338",
   "topic": "Hashing",
   "q": "Why did the lecture describe a hash table as index–key–value rather than just key–value?",
   "c": [
    "Because every key needs two values",
    "Because the index is the position of the record in the original table",
    "Because the index replaces the key",
    "Because the hash of the key acts as an index pointing to where the record's search starts"
   ],
   "a": [
    3
   ],
   "w": "Any table can be written as key–value; the hash table adds the index, the key's hash value, which points to the starting address. The records themselves may sit in different places in memory.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "atb-q0339",
   "topic": "Blockchain",
   "q": "How does a block in a blockchain link to the block before it?",
   "c": [
    "It stores the previous block's memory address",
    "It stores the previous block's hash",
    "It stores the next block's hash",
    "It stores a copy of the previous block's transactions"
   ],
   "a": [
    1
   ],
   "w": "Each header holds the previous block's hash (and its own). A memory-address pointer to the next node is how a linked list links.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "atb-q0340",
   "topic": "Blockchain",
   "q": "What is the first block of a blockchain called, and what is in its previous-hash field?",
   "c": [
    "The genesis block; null",
    "The head block; zero",
    "The root block; its own hash",
    "The genesis block; blank"
   ],
   "a": [
    0
   ],
   "w": "The genesis block plays the role of a linked list's head node, and with no block before it, it stores null. He stressed that null is neither zero nor blank.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "atb-q0341",
   "topic": "Blockchain",
   "q": "In algorithmic terms, what does the null in the genesis block's previous-hash field mean?",
   "c": [
    "The value zero",
    "An empty space left to fill in later",
    "An explicit statement that the field points nowhere",
    "An error in the block"
   ],
   "a": [
    2
   ],
   "w": "Null is the algorithmic way of saying 'there is nothing to point to'. Zero is a value and blank is an absence; null is neither.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "atb-q0342",
   "topic": "Blockchain",
   "q": "An auditor wants to read a blockchain. Where does reading start?",
   "c": [
    "At the genesis block, moving forwards",
    "At a random block",
    "At the block with the most transactions",
    "At the newest block, following previous-block hashes backwards"
   ],
   "a": [
    3
   ],
   "w": "Blocks are stored forwards but each points back to its predecessor, so reading starts at the latest block. Reading forwards from the head is the linked-list habit.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "atb-q0343",
   "topic": "Blockchain",
   "q": "Someone edits a transaction in block 2 of a five-block chain. What happens?",
   "c": [
    "Nothing visible, because only the transaction changed",
    "Block 2's hash changes, so block 3's stored previous hash no longer matches any block and the chain breaks",
    "Block 1's hash changes",
    "All five blocks are deleted automatically"
   ],
   "a": [
    1
   ],
   "w": "A cryptographic hash changes completely on any edit. Block 3 still points to the old H2, which no longer exists, so the break shows where tampering happened. Block 1 is untouched, because hashes link backwards.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "atb-q0344",
   "topic": "Blockchain",
   "q": "If a broken hash link already reveals tampering, why does a blockchain also need decentralised copies?",
   "c": [
    "Because detection alone does not stop an attacker, who could rebuild the block with new hashes; comparing copies across nodes identifies and discards the bad copy",
    "Because hashes stop working after a few blocks",
    "Because the genesis block cannot be hashed",
    "Because decentralised copies make the chain faster to read"
   ],
   "a": [
    0
   ],
   "w": "He split tamper-proofing into two steps: identify tampering (hashes, Merkle root) and recover the authentic data (copies on many nodes, consensus). Detection alone would not prevent a rebuilt fake block.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "atb-q0345",
   "topic": "Blockchain",
   "q": "Where is the Merkle root stored?",
   "c": [
    "In the genesis block only",
    "In a separate central server",
    "In the block header, alongside the previous and current block hashes",
    "Inside each transaction"
   ],
   "a": [
    2
   ],
   "w": "The header carries the previous block's hash, the block's own hash and the Merkle root. There is no central server: blockchain is decentralised.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "atb-q0346",
   "topic": "Blockchain",
   "q": "In his Merkle tree, T1–T3 are hashed (H1–H3) and combined into H123, T4–T6 into H456, and H123 with H456 into the root. If T5 is edited, which hashes change?",
   "c": [
    "Only H5",
    "H5 and H456 only",
    "Every hash in the tree",
    "H5, H456 and the Merkle root"
   ],
   "a": [
    3
   ],
   "w": "A change travels up its own path: H5 changes, so H456 changes, so the root changes. H1–H4, H6 and H123 are on other paths and stay the same.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "atb-q0347",
   "topic": "Blockchain",
   "q": "Why does a block store its actual transactions and not only the Merkle root?",
   "c": [
    "Because the root is too long to store",
    "Because hashing is one-way, so the transactions could never be recovered from the root",
    "Because the root changes every second",
    "Because the transactions are needed to compute the previous block's hash"
   ],
   "a": [
    1
   ],
   "w": "A cryptographic hash cannot be reversed, and the system ultimately needs to read the transactions. The root is there to check them, not to replace them.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "atb-q0348",
   "topic": "Blockchain",
   "q": "Where can a new block be added to a blockchain?",
   "c": [
    "Only at the end",
    "Anywhere, like a song inserted into a playlist",
    "Only at the start, before the genesis block",
    "In the middle, if the consensus mechanism agrees"
   ],
   "a": [
    0
   ],
   "w": "Blockchain makes adding at the end mandatory; old blocks are never edited. Inserting mid-list is allowed in a linked list such as a playlist.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "atb-q0349",
   "topic": "Blockchain",
   "q": "Which difference between a linked list and a blockchain did the lecture call the major one?",
   "c": [
    "A blockchain has no first element",
    "A linked list cannot store transactions",
    "A linked list is typically stored on one computer; a blockchain's blocks are stored on many nodes of a network",
    "A blockchain uses arrays instead of nodes"
   ],
   "a": [
    2
   ],
   "w": "Decentralised storage is what lets the network out-vote a tampered copy. A blockchain does have a first element, the genesis block.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "atb-q0350",
   "topic": "Blockchain",
   "q": "A block is stored as 100 copies across a network. An attacker manages to alter 30 of them. What happens, following the lecture?",
   "c": [
    "The 30 altered copies become the authentic version",
    "The block is deleted from every node",
    "The network splits into two equal chains",
    "The 30 copies disagree with the 70 that agree with each other, so they are discarded"
   ],
   "a": [
    3
   ],
   "w": "The copy most nodes agree on is treated as authentic. To win, the attacker would need at least 51 of the 100 copies, changed simultaneously.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "atb-q0351",
   "topic": "Blockchain",
   "q": "What is a consensus mechanism in a blockchain?",
   "c": [
    "The rule that blocks are added at the end",
    "The protocol nodes use to agree on which copy of a block is authentic",
    "The method for building a Merkle tree",
    "The fee paid to join a public blockchain"
   ],
   "a": [
    1
   ],
   "w": "Nodes need an agreed procedure for comparing copies and accepting the authentic one; that is the consensus mechanism. Its computational details were beyond the course.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "atb-q0352",
   "topic": "Blockchain",
   "q": "A bank runs a blockchain on which only systems it designates may act as nodes. What kind of blockchain is this?",
   "c": [
    "Public",
    "Disconnected",
    "Permissioned",
    "Genesis"
   ],
   "a": [
    2
   ],
   "w": "You need the operator's permission to be a node, hence permissioned. A public blockchain such as Bitcoin lets any node join that follows the protocol.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "atb-q0353",
   "topic": "Blockchain",
   "q": "On a public blockchain such as Bitcoin, what is proof of work?",
   "c": [
    "Solving computational problems in order to take part as a node",
    "Showing an identity document to the network operator",
    "Uploading every past transaction again",
    "Proving that you own a bank account"
   ],
   "a": [
    0
   ],
   "w": "Public blockchains let anyone join, but only by following the protocol, such as solving computational problems (proof of work). Identity checks by an operator belong to a permissioned setting.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "atb-q0354",
   "topic": "Blockchain",
   "q": "Why did the lecture say Bitcoin is technically not a currency?",
   "c": [
    "Because it cannot be stored digitally",
    "Because it has no value at all",
    "Because it is stored on a single server",
    "Because a currency is issued by a central bank, such as the RBI; Bitcoin is a token whose value the community agrees on"
   ],
   "a": [
    3
   ],
   "w": "Issuance by a central bank is what makes a currency; the RBI even issues digital currency now. Cryptocurrencies are tokens on a decentralised network.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "atb-q0355",
   "topic": "Blockchain",
   "q": "A construction contract says the builder pays a penalty if the project is more than six months late. How would a smart contract handle this?",
   "c": [
    "A lawyer reads the contract each month and decides",
    "The condition is built in, so the penalty clause executes automatically when the delay occurs, and the stored contract is hard to alter",
    "The contract is stored as a PDF that both parties can edit",
    "The penalty is decided by a majority vote of the builders"
   ],
   "a": [
    1
   ],
   "w": "Smart contracts carry their conditions in code and run the relevant clause when it is met; being on a blockchain protects them from tampering, which saves heavy legal fees. A digital document can still be altered.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "atb-q0356",
   "topic": "Blockchain",
   "q": "A state government is considering moving its land records to a blockchain. According to the lecture, what is the main reason such projects are mostly still pilots?",
   "c": [
    "Blockchains cannot store property records",
    "Blockchains are easy to tamper with",
    "Implementation is costly, so the benefits must justify the investment",
    "Land records must be stored in a single central database by law"
   ],
   "a": [
    2
   ],
   "w": "He framed it as a management question: robust technology still needs a sufficient return on investment, and right now implementation cost is high. Some states already have land registries on blockchain, so it is possible.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "atb-q0357",
   "topic": "Blockchain",
   "q": "How do trees and graphs appear in a blockchain, according to the lecture?",
   "c": [
    "Trees as Merkle trees; graphs in traversal algorithms that check whether a node is part of the network",
    "Trees as the chain of blocks; graphs as the transactions",
    "Trees for proof of work; graphs for smart contracts",
    "Neither: blockchain uses only linked lists and hashes"
   ],
   "a": [
    0
   ],
   "w": "The Merkle tree is the tree; the network of nodes is the graph, where traversal can confirm membership. The chain of blocks itself is the linked-list idea.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "atb-q0358",
   "topic": "Blockchain",
   "q": "Using the lecture's bank-passbook analogy, how is a mistaken entry handled on a blockchain?",
   "c": [
    "The old entry is erased and rewritten",
    "The whole block is deleted and rebuilt",
    "The genesis block is edited",
    "A new transaction is added that corrects it; the old entry stays"
   ],
   "a": [
    3
   ],
   "w": "Like a passbook, a blockchain never edits past entries; changes appear as new transactions in new blocks. Editing an old block would change its hash and break the chain.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "atb-q0359",
   "topic": "Graphs",
   "q": "In the 11-edge family graph from the L#18 slides (E = {CS, AP, AQ, BR, SP, QR, SX, PX, QY, RY, XY}), a DFS from A that takes neighbours alphabetically first reaches Q along A → P → S → X → Y → Q. What is Q's degree of separation from A?",
   "c": [
    "5, the length of the route DFS used",
    "2, because DFS reached Q straight after Y",
    "1, because A and Q share an edge, so BFS places Q at level 1",
    "It cannot be measured, because the graph has cycles"
   ],
   "a": [
    2
   ],
   "w": "The L#18 slides say BFS finds the minimum degree of separation. A–Q is an edge, so Q is one hop away and BFS lists it at level 1. DFS goes deep along whichever route it meets first; the five-edge route is real, but it is not the shortest. Cycles do not stop BFS from measuring hops.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "atb-q0360",
   "topic": "Graphs",
   "q": "The L#18 slides draw the nine-person family graph twice: first with only the 8 parent–child edges (CS, AP, AQ, BR, SX, PX, QY, RY), then with the spouse edges SP and QR and the cousin edge XY added. Which statement is correct?",
   "c": [
    "Both versions are cyclic, because X and Y each have two parents",
    "The first version is acyclic; the second is cyclic, for example S → P → X → S",
    "The first version is cyclic and the second acyclic, because the added edges are undirected",
    "Neither version is cyclic, because family relationships cannot loop back"
   ],
   "a": [
    1
   ],
   "w": "Two parents break the tree rule but do not create a loop. The parents-only version has 9 vertices, 8 edges and exactly one route between any two people. Adding SP closes S → P → X → S, and QR and XY close cycles too (Q → R → Y → Q; A → P → X → Y → Q → A), so the second version is cyclic.",
   "lec": 18,
   "lv": "analyse"
  },
  {
   "id": "atb-q0361",
   "topic": "Graphs",
   "q": "An undirected graph has only the edges A–B and B–C. A student goes by the slide's short wording ('a path that returns to the starting vertex') and calls it cyclic, because A → B → A gets back to A. What is the right verdict?",
   "c": [
    "Cyclic, because A can be reached again",
    "Cyclic, because B has two neighbours",
    "Disconnected, because A and C are not joined directly",
    "Acyclic, because A → B → A only retraces the same edge, and a cycle must return without retracing"
   ],
   "a": [
    3
   ],
   "w": "The lecture's definition requires getting back without retracing the path. Going A → B → A reuses one edge, which you can do in any undirected graph, so it proves nothing. A–B–C is a simple line with no cycle. It is connected, too: A reaches C through B, and a direct edge is not needed.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "atb-q0362",
   "topic": "Graphs",
   "q": "The L#18 slides give people of one community in India as an example of a connected graph, and a native Indian and a native Chinese person as an example of a disconnected one. In graph terms, what makes the second case disconnected?",
   "c": [
    "No chain of edges links the two, so at least one vertex or group is isolated from the rest",
    "They live far apart, so the path between them is too long",
    "Their relationship runs in one direction only",
    "The edge between them carries a low weight"
   ],
   "a": [
    0
   ],
   "w": "Connected means every vertex can be reached from every other by some path, short or long, so distance alone never disconnects a graph (Ahmedabad–Silchar by road is far apart but connected). Direction and weight are separate properties. If there were any edge between them, even a weak one, they would be connected.",
   "lec": 18,
   "lv": "apply"
  }
 ],
 "briefs": {
  "q1": {
   "scopeShort": "Modules 1–2",
   "tag": "from the official LMS announcement",
   "lede": "Figures below are from the official Quiz 1 announcement and its attached syllabus document. Dr. Saxena also gave the scope directly in Live Lecture 3, and the two agree.",
   "html": "\n    <div class=\"grid2\">\n      <div class=\"card\">\n        <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">Confirmed on the official announcement</h4>\n        <div class=\"scroller\"><table><tbody>\n          <tr><td><strong>Date</strong></td><td>Saturday 3 October</td></tr>\n          <tr><td><strong>Window</strong></td><td>4:45–5:05 PM IST · join from <strong>4:30 PM</strong></td></tr>\n          <tr><td><strong>Questions</strong></td><td><strong>40</strong>, for <strong>40 marks</strong></td></tr>\n          <tr><td><strong>Type</strong></td><td>MCQ</td></tr>\n          <tr><td><strong>Weight</strong></td><td>20% · best 2 of 3 · 40% of the course total</td></tr>\n        </tbody></table></div>\n        <div class=\"warnbox\" style=\"margin-top:12px;border-left-color:var(--bad);background:var(--bad-soft)\">\n          <b>Negative marking.</b> +1 correct, <strong>−0.25 for a wrong answer</strong>, 0 if left blank.\n        </div>\n        <p style=\"font-size:13.5px;color:var(--ink-3);margin-top:11px\">In Live Lecture 3 he described the format more loosely as &ldquo;MCQ, short answer, true/false or matching&rdquo;. The announcement says MCQ.</p>\n      </div>\n      <div class=\"card\">\n        <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">Scope — narrower than you might assume</h4>\n        <p style=\"font-size:14.5px\">He said it plainly: <em>&ldquo;the quiz will only be on the fundamentals, so module one and module two, which is linear data structures&hellip; whatever videos are released next, for example tree, that will not be part of the quiz.&rdquo;</em> The official syllabus document agrees — it lists <strong>#1 to #11 plus Live Lecture 3</strong>, and stops.</p>\n        <div class=\"warnbox\" style=\"margin-top:12px;border-left-color:var(--good);background:var(--good-soft)\">\n          <b>Trees and graphs were not in Quiz 1.</b> Lectures #12 (Trees — Fundamentals), #14 (Tree Types) and #15 (Graphs) were not in Quiz 1, even though #12 was released before the cut-off date. Trees and graphs are non-linear structures, and the paper is linear structures only.\n        </div>\n        <p style=\"font-size:14.5px;margin-top:11px\">So: algorithm basics, pseudocode, the nine properties, three algorithm types, and then <strong>arrays, linked lists, stacks and queues</strong>.</p>\n      </div>\n    </div>\n\n    <div class=\"card\" style=\"margin-top:14px;border-left:3px solid var(--clay)\">\n      <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">The two constraints: 30 seconds, and −0.25</h4>\n      <p style=\"font-size:14.5px;color:var(--ink-2)\">40 questions in 20 minutes is <strong>30 seconds each</strong> — more breathing room than most of your other papers, but still recall-paced.</p>\n      <div class=\"scroller\" style=\"margin-top:11px\"><table><thead><tr><th>Situation</th><th>Expected value</th><th>Do</th></tr></thead><tbody>\n        <tr><td>You know it</td><td><strong>+1.00</strong></td><td>Answer</td></tr>\n        <tr><td>Rule out two of four</td><td><strong>+0.38</strong></td><td>Answer — clearly worth it</td></tr>\n        <tr><td>Rule out one of four</td><td><strong>+0.17</strong></td><td>Answer</td></tr>\n        <tr><td>Blind guess</td><td><strong>+0.06</strong></td><td>Answer, but it gains you next to nothing</td></tr>\n        <tr><td>Leave blank</td><td><strong>0.00</strong></td><td>Only if genuinely lost</td></tr>\n      </tbody></table></div>\n      <ul style=\"margin:11px 0 0;padding-left:19px;font-size:14.5px;line-height:1.7\">\n        <li><strong>Most of this paper is contrast pairs.</strong> LIFO vs FIFO, array vs linked list, static vs dynamic, overflow vs underflow, greedy vs dynamic programming. Learn them as pairs and the distractors give themselves away.</li>\n        <li><strong>The properties are the other half.</strong> Nine of them, each with a memorable failing example. If you can name the failure, you can name the property.</li>\n      </ul>\n    </div>",
   "mapLede": "Twelve examinable lectures from Dr. Deepak Kumar Saxena, taught no-code — the logic, not the syntax. Lectures #12, #14 and #15 are shown on the LMS but are outside this quiz.",
   "syllabusNote": "",
   "drillLede": "Questions written from the lectures and transcripts. There is no official practice set for this course. Turn the pacer on to rehearse the real 30-second tempo.",
   "weights": [
    [
     "Queues",
     18
    ],
    [
     "Properties of algorithms",
     16
    ],
    [
     "Arrays",
     14
    ],
    [
     "Stacks",
     14
    ],
    [
     "Linked lists",
     13
    ],
    [
     "Types of algorithms",
     9
    ],
    [
     "Pseudocode & data types",
     8
    ],
    [
     "Algorithm basics",
     8
    ]
   ]
  }
 },
 "bookPacks": [
  "cdsa-ch01",
  "cdsa-ch02",
  "cdsa-ch03",
  "cdsa-ch04",
  "cdsa-ch05",
  "cdsa-ch06",
  "cdsa-ch12",
  "lec-12",
  "lec-14",
  "lec-15",
  "lec-16",
  "lec-17",
  "lec-18",
  "lec-19",
  "lec-20",
  "lec-18s"
 ]
});
