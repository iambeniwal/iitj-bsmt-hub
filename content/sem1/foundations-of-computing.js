/* foundations-of-computing — migrated from iitj-bsmtsem1-quiz1-prep on 2026-10-04.
   IDs are permanent: append new items with the next free number, never renumber. */
HUB.addCourse({
 "slug": "foundations-of-computing",
 "code": "foc",
 "eyebrow": "IIT Jodhpur · B.S. Management & Technology · Semester 1",
 "heading": "Foundations of Computing<br>Quiz 1 Revision",
 "sub": "The examinable 15 lectures, compressed for a 20-minute, 60-question sprint with negative marking. Built from the lecture summaries, full transcripts and the 267-slide course deck.",
 "sources": "Compiled 22 September 2026 from the IITJ LMS: 16 lecture AI-summaries, 16 full transcripts (512,000 characters) and the shared 267-slide deck. Quiz logistics from the official exam schedule (timings) and the Live Lecture 3 recording of 19 September (format and syllabus); timings, question count, marking scheme and syllabus scope taken from the official LMS quiz announcement and its attached syllabus document, read 26 September. Topic weightings are an estimate, not an official mark scheme. <strong>This is a student-made study aid, not official IIT Jodhpur or Masai School course material</strong> — always check the LMS for the authoritative syllabus and quiz details.",
 "lectures": [
  [
   1,
   "Introduction — Foundations of Computing",
   "Course aims, why Python",
   "rec"
  ],
  [
   2,
   "Introduction to Computing: IPO model and Data",
   "Computing vs computer, 4 pillars, DIKW",
   "rec"
  ],
  [
   3,
   "Introduction to Computing: Classifications of Data",
   "Structured/time/quant/qual",
   "rec"
  ],
  [
   4,
   "Live Lecture 1",
   "Why program in the LLM era, enterprise IPO",
   "live"
  ],
  [
   5,
   "Introduction to Computing: Basics of Algorithm",
   "Primary/secondary/metadata, 5 properties",
   "rec"
  ],
  [
   6,
   "Introduction to Computing: Hardware & Software",
   "CPU, GPU, memory, OS, utilities",
   "rec"
  ],
  [
   7,
   "Transition from computing to Programming",
   "Application software, interpreter vs compiler",
   "rec"
  ],
  [
   8,
   "Introduction to Python & Google Colab",
   "Variables, naming rules, strings",
   "rec"
  ],
  [
   9,
   "Live Lecture 2",
   "Knight Capital, Netflix & bank DIKW cases",
   "live"
  ],
  [
   10,
   "Python: Numbers & Comments",
   "Arithmetic, floats, str(), comments",
   "rec"
  ],
  [
   11,
   "Python: Intro to Lists Part 1",
   "Indexing, append, insert, del, pop, remove",
   "rec"
  ],
  [
   12,
   "Python: Intro to Lists Part 2",
   "sort, sorted, reverse, len, IndexError",
   "rec"
  ],
  [
   13,
   "Python: Working with Lists Part 1",
   "for loops, indentation errors",
   "rec"
  ],
  [
   14,
   "Live Lecture 3",
   "Revision + quiz announcement",
   "live"
  ],
  [
   15,
   "Python: Working with Lists Part 2",
   "range, list comprehensions, slicing",
   "rec"
  ],
  [
   16,
   "Python: Working with Lists Part 3",
   "Copying lists, tuples",
   "rec"
  ],
  [
   17,
   "Week 7 — Python: If Statements Part 1",
   "Conditional tests: ==, !=, and, or, in",
   "rec"
  ],
  [
   18,
   "Week 7 — Python: If Statements Part 2",
   "if, if-else, elif chains, independent ifs",
   "rec"
  ],
  [
   19,
   "Week 7 — Live Lecture 4",
   "Exam format, coding drills on strings and lists",
   "live"
  ],
  [
   20,
   "Week 8 — Python: If Statements Part 3",
   "ifs with lists: special items, empty lists",
   "rec"
  ],
  [
   21,
   "Week 8 — Python: Dictionaries Part 1",
   "Key-value pairs: access, add, modify, delete",
   "rec"
  ]
 ],
 "units": [
  {
   "id": "computing",
   "title": "Computing &amp; the IPO model",
   "tag": "Lectures 1, 2, 4, 9",
   "lede": "The single most repeated idea in the course. He said explicitly: when asked to define computing, <em>do not mention computers</em>.",
   "topics": [
    {
     "t": "What computing actually is",
     "src": "L2 · L4 · slides 21–24",
     "h": "\n  <div class=\"def\"><b>Computing</b> is the process of using <b>well-defined steps</b> to solve problems by collecting information, processing it, and producing a useful result.</div>\n  <p style=\"font-size:14.5px;color:var(--ink-2)\">ACM's definition, also on the slide: “any goal-oriented activity requiring, benefiting from, or creating computers.”</p>\n  <h4>Computing vs computer</h4>\n  <ul>\n   <li><strong>Computing</strong> = the abstract method. Thousands of years old. Doable with pen, paper, or an abacus.</li>\n   <li><strong>Computer</strong> = the physical tool that executes it fast. The intelligence lives in the human-designed algorithm.</li>\n  </ul>\n  <div class=\"warnbox\"><b>His explicit instruction:</b> if asked to define computing, don't mention computers. Definitions that lead with “a machine that…” are the wrong answer.</div>\n  <h4>The three historical proofs</h4>\n  <ul>\n   <li><strong>Abacus, ~3000 BC</strong> — merchants adding and subtracting.</li>\n   <li><strong>Navigation tables, 1600s–1800s</strong> — sailors fixing position at sea.</li>\n   <li><strong>WWII “computers”</strong> — teams of women calculating artillery trajectories. <em>The job title came before the machine.</em></li>\n  </ul>"
    },
    {
     "t": "The IPO model",
     "src": "L2 · L4 · slides 25–34",
     "h": "\n  <div class=\"def\"><b>Input → Process → Output.</b> Universal: it describes a calculator and an AI system equally well.</div>\n  <h4>Traditional vs enterprise view</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Stage</th><th>Traditional (30 yrs ago)</th><th>Enterprise (now)</th></tr></thead><tbody>\n   <tr><td><strong>Input</strong></td><td>Keyboard</td><td>High-volume, high-velocity, high-variety real-time data streams (zettabytes, 10<sup>21</sup> bytes)</td></tr>\n   <tr><td><strong>Process</strong></td><td>CPU calculation</td><td>Automated algorithms on cloud infrastructure, billions of steps/sec, cost near zero</td></tr>\n   <tr><td><strong>Output</strong></td><td>Screen</td><td>Actionable business decisions → revenue growth or cost reduction</td></tr>\n  </tbody></table></div>\n  <h4>The worked examples — know the process step for each</h4>\n  <div class=\"scroller\"><table><thead><tr><th>System</th><th>Process step</th></tr></thead><tbody>\n   <tr><td>Google Search</td><td>Ranks billions of pages on keyword relevance, page speed, mobile friendliness, domain trust</td></tr>\n   <tr><td>UPI</td><td>Verify identity → check balance → debit → credit → confirm. Payer bank → NPCI → payee bank, in 3–4 s</td></tr>\n   <tr><td>Google Maps</td><td>Shortest-path algorithm over hundreds of routes, weighing live traffic and roadblocks</td></tr>\n   <tr><td>YouTube</td><td>Compares your watch/skip behaviour against millions of users — a machine-learning process</td></tr>\n   <tr><td>Autocorrect</td><td>Predicts the next word from your letters plus prior words</td></tr>\n   <tr><td>Weather</td><td>Billions of hourly points from satellites + ground stations through physics and AI models</td></tr>\n   <tr><td><strong>Uber</strong></td><td>Dynamic pricing + route optimisation + matching engine. Balances supply and demand in <strong>under 500 ms</strong></td></tr>\n  </tbody></table></div><!--viz:foc-ipo-upi--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Flow of a UPI payment: input is payee, amount and PIN; process verifies the PIN, checks the balance, debits and credits; output is the confirmation on both phones.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">One UPI payment as Input → Process → Output</div><div style=\"display:flex;flex-wrap:wrap;align-items:stretch;gap:6px 8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><div style=\"font-size:12.5px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.06em\">Input</div>Payee, ₹500, UPI PIN</div><span style=\"color:var(--ink-3);align-self:center\">→</span><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><div style=\"font-size:12.5px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.06em\">Process</div>verify PIN → check balance → debit payer → credit payee</div><span style=\"color:var(--ink-3);align-self:center\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><div style=\"font-size:12.5px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.06em\">Output</div>“₹500 sent” on both phones, in seconds</div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The algorithm lives in the Process box; that is the step exam questions ask you to name.</figcaption></figure><!--/viz:foc-ipo-upi-->"
    },
    {
     "t": "Knight Capital — the cost of bad computing",
     "src": "L9 · slides 35–37",
     "h": "\n  <ul>\n   <li>American trading firm, <strong>2012</strong>. Deployed a new autonomous trading algorithm with a bug.</li>\n   <li><strong>45 minutes. 4 million trades. $440 million lost.</strong> The firm went bankrupt.</li>\n   <li>Cause: incorrectly coded, with no adequate guardrails or human oversight.</li>\n   <li><strong>Lesson:</strong> correctness beats speed. Speed of execution <em>amplifies</em> errors.</li>\n  </ul>\n  <div class=\"warnbox\"><b>Likely MCQ:</b> the numbers 2012 / 45 minutes / $440 million / 4 million trades are exactly the sort of detail a recall quiz uses. Memorise all four.</div>"
    },
    {
     "t": "Computing in non-tech industries",
     "src": "L9 · slides 38–41",
     "h": "\n  <ul>\n   <li><strong>Agriculture (AgroStar):</strong> soil sensors + satellite imagery + weather history → what to plant, when, how much water.</li>\n   <li><strong>Healthcare (ECG):</strong> electrical heart activity measured ~100 times per second → classification algorithm → detects atrial fibrillation, heart block.</li>\n   <li><strong>Fashion (Zara):</strong> global sales data every 24 hours → detects fast and slow sellers → plans production <strong>6 months ahead</strong>.</li>\n  </ul>\n  <div class=\"def\">Zara is a set-piece question, asked on slide 41. <b>Most critical IPO step: Process</b> (the algorithmic analysis). <b>Data type: time series.</b></div>"
    },
    {
     "t": "Why learn to program in the LLM era",
     "src": "L4 · slides 10–17",
     "h": "\n  <ul>\n   <li>Vibe coding fails on: <strong>debugging</strong> (easy to generate, hard to fix), <strong>token cost</strong>, <strong>spaghetti code</strong>, security holes, hallucinated library imports, production failures.</li>\n   <li><strong>“The LLM is the junior builder; you are the architect.”</strong> LLMs handle simple code and ~80% of prototype work; they struggle with architecture and legacy integration.</li>\n   <li><strong>Accountability stops with you.</strong> RBI, SEBI and IRDAI penalise code failures regardless of who — or what — wrote the code. Paytm was cited for data-security mismanagement.</li>\n   <li>Google, Meta and OpenAI have been <strong>rehiring engineers</strong> after AI-driven layoffs.</li>\n  </ul>"
    }
   ]
  },
  {
   "id": "data",
   "title": "Data &amp; the DIKW chain",
   "tag": "Lectures 2, 9",
   "lede": "Pillar 1 of computing, plus the four-layer ladder he taught twice with two full case studies.",
   "topics": [
    {
     "t": "Data — the definition",
     "src": "L2 · slides 43–46",
     "h": "\n  <div class=\"def\"><b>Data</b> is any <b>raw, unprocessed fact or observation</b> that can be recorded and stored. By itself it has no meaning.</div>\n  <ul>\n   <li><code>42</code> is just a number. <code>Age = 42</code> is information.</li>\n   <li><code>Mumbai</code> is just a word. <code>Place of birth = Mumbai</code> is information.</li>\n   <li><code>38.5</code> is data. <em>“Patient's temperature is 38.5 °C”</em> is information.</li>\n  </ul>\n  <p style=\"font-size:14.5px\"><strong>Context is what converts data into information.</strong> Data is the raw material of computing — without it there is nothing to process, store or output.</p>\n  <h4>The four pillars</h4>\n  <p style=\"font-size:14.5px\">1 Data · 2 Algorithm · 3 Hardware · 4 Software. <strong>Remove any one and computing fails.</strong> They are equally essential — a favourite MCQ framing.</p><!--viz:foc-four-pillars--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Computing sits on four equal pillars: data, algorithm, hardware and software.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The four pillars of computing</div><div style=\"font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);text-align:center;font-weight:700;margin-bottom:6px\">Computing</div><div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:6px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);text-align:center\"><b>1 · Data</b><br><span style=\"color:var(--ink-2);font-size:13px\">the raw facts to work on</span></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);text-align:center\"><b>2 · Algorithm</b><br><span style=\"color:var(--ink-2);font-size:13px\">the exact steps</span></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);text-align:center\"><b>3 · Hardware</b><br><span style=\"color:var(--ink-2);font-size:13px\">the machine that runs the steps</span></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);text-align:center\"><b>4 · Software</b><br><span style=\"color:var(--ink-2);font-size:13px\">the instructions that drive the machine</span></div></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Remove any one pillar and computing fails; none ranks above the others.</figcaption></figure><!--/viz:foc-four-pillars-->"
    },
    {
     "t": "DIKW — Data → Information → Knowledge → Wisdom",
     "src": "L2 · L9 · slides 47–58",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Layer</th><th>What it adds</th><th>Question it answers</th></tr></thead><tbody>\n   <tr><td><strong>Data</strong></td><td>Raw facts, no context</td><td>—</td></tr>\n   <tr><td><strong>Information</strong></td><td>Context + structure</td><td>Who, what, where, when</td></tr>\n   <tr><td><strong>Knowledge</strong></td><td>Synthesis, pattern recognition</td><td>Why</td></tr>\n   <tr><td><strong>Wisdom</strong></td><td>Strategic action under risk</td><td>What should we do, at what cost</td></tr>\n  </tbody></table></div>\n  <h4>Clinical example</h4>\n  <p style=\"font-size:14.5px\"><strong>Data</strong> 38.5 → <strong>Information</strong> temperature 38.5 °C rising over four days, peaking on day four → <strong>Knowledge</strong> this pattern fits a viral infection, likely to resolve in 3–5 days → <strong>Wisdom</strong> doctor prescribes treatment based on thousands of similar cases.</p>\n  <h4>Netflix case — memorise the numbers</h4>\n  <ul>\n   <li><strong>Data:</strong> raw log — user ID, event PAUSE, content ID, timestamp, timecode 00:42:15.</li>\n   <li><strong>Information:</strong> <strong>3.2 million viewers</strong> paused at exactly 00:42:15.</li>\n   <li><strong>Knowledge:</strong> cross-referencing the script shows the scene introduces a complex subplot without context, causing drop-off.</li>\n   <li><strong>Wisdom:</strong> re-edit pacing for future releases; show contextual recaps to returning viewers.</li>\n  </ul>\n  <h4>Bank loan case — the ethics question</h4>\n  <ul>\n   <li><strong>Information:</strong> applicants from postal codes X, Y, Z default at <strong>3.4×</strong> the rate of others. Confirmed in the data.</li>\n   <li><strong>Knowledge:</strong> those areas have lower income, poorer infrastructure, less formal employment — the default rate is a consequence of structural disadvantage.</li>\n   <li><strong>Wisdom:</strong> do <em>not</em> use the variable. Denying a whole geography credit is <strong>redlining</strong> — illegal in many countries and unethical.</li>\n  </ul>\n  <div class=\"def\">Slide 58 asks this directly: the bank goes wrong by <b>acting at the Information level</b> without climbing to Knowledge and Wisdom.</div>\n  <h4>Telling the rungs apart under time pressure</h4>\n  <p style=\"font-size:14.5px\">Do not ask what the statement is <em>about</em> — ask what it <em>adds</em>:</p>\n  <ul>\n   <li>A bare value or a log line, no context &rarr; <strong>Data</strong></li>\n   <li>Counted, aggregated, given units or a time window &rarr; <strong>Information</strong></li>\n   <li>Explains <em>why</em>, usually by combining two or more sources &rarr; <strong>Knowledge</strong></li>\n   <li>Picks an action and accepts a cost or a risk &rarr; <strong>Wisdom</strong></li>\n  </ul>\n  <div class=\"def\"><b>The trap that actually catches people.</b> Every rung&rsquo;s description sounds like the rung below it.\n   &ldquo;Accumulated information interpreted through pattern recognition&rdquo; is <b>Knowledge</b>, not Wisdom.\n   &ldquo;Millions of users did X at the same second&rdquo; is <b>Information</b>, not Knowledge &mdash; it counts, it does not explain.\n   When a stem names a rung, check whether the option you like is quietly describing the one beneath it.</div><!--viz:foc-dikw-ladder--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Four-step staircase from a raw pause log (data) to a count of viewers (information), a reason (knowledge) and an editing decision (wisdom).\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Climbing the DIKW ladder: the Netflix pause</div><div style=\"font-size:14px\"><div style=\"margin-left:42px;display:flex;gap:8px;align-items:stretch;margin-bottom:5px\"><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);flex:0 0 104px\"><b>Wisdom</b><br><span style=\"color:var(--ink-3);font-size:13px\">what should we do?</span></div><div style=\"padding:7px 4px;color:var(--ink-2);font-size:13.5px;align-self:center\">Re-cut the pacing of future releases; show returning viewers a short recap.</div></div><div style=\"margin-left:28px;display:flex;gap:8px;align-items:stretch;margin-bottom:5px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);flex:0 0 104px\"><b>Knowledge</b><br><span style=\"color:var(--ink-3);font-size:13px\">why?</span></div><div style=\"padding:7px 4px;color:var(--ink-2);font-size:13.5px;align-self:center\">That scene opens a subplot with no set-up, so viewers lose the thread.</div></div><div style=\"margin-left:14px;display:flex;gap:8px;align-items:stretch;margin-bottom:5px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);flex:0 0 104px\"><b>Information</b><br><span style=\"color:var(--ink-3);font-size:13px\">what, when, how many?</span></div><div style=\"padding:7px 4px;color:var(--ink-2);font-size:13.5px;align-self:center\">3.2 million viewers paused at exactly 00:42:15.</div></div><div style=\"margin-left:0px;display:flex;gap:8px;align-items:stretch;margin-bottom:5px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);flex:0 0 104px\"><b>Data</b><br><span style=\"color:var(--ink-3);font-size:13px\">no context</span></div><div style=\"padding:7px 4px;color:var(--ink-2);font-size:13.5px;align-self:center\"><span style=\"font-family:var(--mono)\">u_88213 · PAUSE · c_4471 · 00:42:15</span></div></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Each rung adds something: a count makes Information, a reason makes Knowledge, a chosen action makes Wisdom.</figcaption></figure><!--/viz:foc-dikw-ladder-->"
    }
   ]
  },
  {
   "id": "classify",
   "title": "Data classification",
   "tag": "Lectures 3, 5, 9, 14 · heaviest topic",
   "lede": "Four independent classification schemes. Every one of the nine official practice MCQs in the deck comes from this section — treat that as a strong hint.",
   "topics": [
    {
     "t": "1 · By structure: structured / unstructured / semi-structured",
     "src": "L3 · L9 · slides 59–77",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Structured</th><th>Semi-structured</th><th>Unstructured</th></tr></thead><tbody>\n   <tr><td><strong>Form</strong></td><td>Rows (records) × columns (fields), each field a defined type</td><td>Organisational markers, key–value pairs, but not tabular</td><td>No predefined format</td></tr>\n   <tr><td><strong>Stored in</strong></td><td>Relational DBs — MySQL, PostgreSQL, Oracle</td><td>NoSQL databases</td><td>Specialised stores</td></tr>\n   <tr><td><strong>Examples</strong></td><td>Bank transactions, student mark sheets, hospital registers, e-commerce order tables, CSV, Excel</td><td>JSON (web APIs), XML, HTML, email (.eml — fixed headers, free-form body)</td><td>Text, images, audio, video, raw IoT sensor streams</td></tr>\n   <tr><td><strong>Share of global data</strong></td><td colspan=\"2\">the minority</td><td><strong>~80%</strong></td></tr>\n  </tbody></table></div>\n  <h4>The business consequence — he drew this twice</h4>\n  <p style=\"font-size:15px\"><strong>Analysis cost:</strong> structured &lt; unstructured. &nbsp;<strong>Capability required:</strong> structured &lt; unstructured.</p>\n  <p style=\"font-size:14.5px;color:var(--ink-2)\">Unstructured data needs specialised tooling — transformers for NLP, computer vision for images.</p>\n  <div class=\"warnbox\"><b>Unstructured sub-types to recognise:</b> Text (emails, WhatsApp chats, news, reviews, social posts) · Images (photos, X-rays, satellite, ID scans) · Audio (calls, podcasts, music, voice notes) · Video (CCTV, YouTube, recorded lectures) · Raw sensor streams.</div><!--viz:foc-structure-spectrum--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three cards: a CSV row (structured), a JSON object (semi-structured) and media such as voice notes and X-rays (unstructured), with analysis cost rising left to right.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">From table to free form</div><div style=\"font-size:14px\"><div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(125px,1fr));gap:6px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:10px 12px\"><div style=\"font-weight:700;margin-bottom:6px\">Structured</div><span style=\"font-family:var(--mono);font-size:13px\">roll,name,marks<br>101,Asha,88</span><div style=\"color:var(--ink-2);font-size:13px;margin-top:6px\">rows × columns · SQL tables, Excel, CSV</div></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:10px 12px\"><div style=\"font-weight:700;margin-bottom:6px\">Semi-structured</div><span style=\"font-family:var(--mono);font-size:13px\">{\"roll\": 101,<br>&nbsp;\"name\": \"Asha\"}</span><div style=\"color:var(--ink-2);font-size:13px;margin-top:6px\">keys and tags, no fixed table · JSON, XML, email</div></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:10px 12px;border-color:var(--clay)\"><div style=\"font-weight:700;margin-bottom:6px\">Unstructured</div><span style=\"font-size:13.5px\">voice note · X-ray · CCTV clip · WhatsApp chat</span><div style=\"color:var(--ink-2);font-size:13px;margin-top:6px\">no predefined format · about 80% of all data</div></div></div><div style=\"display:flex;justify-content:space-between;gap:8px;margin-top:8px;padding-top:5px;border-top:2px solid var(--clay);font-size:13px;color:var(--ink-3)\"><span>cheaper, simpler tools</span><span>costlier, needs NLP or vision models →</span></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Analysis cost and the skill needed both rise as structure falls away.</figcaption></figure><!--/viz:foc-structure-spectrum-->"
    },
    {
     "t": "2 · Across time: cross-sectional / panel / time series",
     "src": "L3 · L9 · slides 78–87",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Type</th><th>Subjects</th><th>Time points</th><th>Canonical example</th></tr></thead><tbody>\n   <tr><td><strong>Cross-sectional</strong></td><td>Many</td><td><strong>One</strong></td><td>500 students in Delhi surveyed on 1 June 2025</td></tr>\n   <tr><td><strong>Panel</strong> (longitudinal)</td><td><strong>Many</strong></td><td><strong>Many</strong></td><td>Monthly marks of 5 students over 6 months</td></tr>\n   <tr><td><strong>Time series</strong></td><td><strong>One</strong></td><td>Many</td><td>Daily closing price of Reliance stock, Jan–Dec 2024</td></tr>\n  </tbody></table></div>\n  <div class=\"def\">The whole distinction is a 2×2: <b>how many subjects × how many time points.</b> Panel is the rich one — it does both, so you can ask “who improved most?”</div>\n  <h4>Other uses he listed</h4>\n  <ul>\n   <li><strong>Cross-sectional:</strong> election polls, consumer surveys, Amazon product feedback, census, medical studies comparing patient groups.</li>\n   <li><strong>Panel:</strong> NREGA employment records, IMF macroeconomic data across countries, clinical drug trials, school performance tracking.</li>\n   <li><strong>Time series:</strong> weather forecasting, ECG readings, website traffic, epidemic case counts, step counter, electricity meter readings.</li>\n  </ul>\n  <p style=\"font-size:14.5px\"><strong>Time series notes:</strong> sequence matters; it reveals trends, cycles and sudden changes; recent data carries more predictive value than old data.</p><!--viz:foc-time-matrix--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Two-by-two grid: many subjects at one time point is cross-sectional, many subjects over many time points is panel, one subject over many time points is time series.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Subjects × time points</div><div style=\"display:grid;grid-template-columns:auto 1fr 1fr;gap:4px;font-size:14px\"><div></div><div style=\"padding:6px 8px;color:var(--ink-3);font-size:12.5px;text-align:center;align-self:center\">One time point</div><div style=\"padding:6px 8px;color:var(--ink-3);font-size:12.5px;text-align:center;align-self:center\">Many time points</div><div style=\"padding:6px 8px;color:var(--ink-3);font-size:12.5px;text-align:center;align-self:center;writing-mode:vertical-rl;transform:rotate(180deg)\">Many subjects</div><div style=\"padding:10px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>Cross-sectional</b><br><span style=\"color:var(--ink-2);font-size:13px\">500 shoppers surveyed on one day</span></div><div style=\"padding:10px;border:1px solid var(--rule-2);border-radius:4px;background:var(--blue-soft)\"><b>Panel</b><br><span style=\"color:var(--ink-2);font-size:13px\">marks of 40 students, every month for a year</span></div><div style=\"padding:6px 8px;color:var(--ink-3);font-size:12.5px;text-align:center;align-self:center;writing-mode:vertical-rl;transform:rotate(180deg)\">One subject</div><div style=\"padding:10px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface-2)\"><b>One observation</b><br><span style=\"color:var(--ink-2);font-size:13px\">a single reading; not a dataset type</span></div><div style=\"padding:10px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>Time series</b><br><span style=\"color:var(--ink-2);font-size:13px\">one city's daily rainfall for a year</span></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Count the subjects, count the time points, and the cell names the type.</figcaption></figure><!--/viz:foc-time-matrix-->"
    },
    {
     "t": "3 · By nature: quantitative / qualitative",
     "src": "L3 · L14 · slides 91–100",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Quantitative</th><th>Qualitative</th></tr></thead><tbody>\n   <tr><td><strong>Nature</strong></td><td>Numerical, measurable on a scale</td><td>Categorical, descriptive, from perception and opinion</td></tr>\n   <tr><td><strong>Sub-types</strong></td><td><strong>Discrete</strong> — countable whole numbers (30 students, 3 goals, 47 apps)<br><strong>Continuous</strong> — any value in a range (172.4 cm, 36.8 °C, 9.58 s)</td><td><strong>Nominal</strong> — no natural order (blood group, city of birth, phone brand, colour)<br><strong>Ordinal</strong> — meaningful order, unequal gaps (1★–5★, Class 10 &lt; 12 &lt; Graduate, Poor/Fair/Good/Excellent)</td></tr>\n   <tr><td><strong>Operations</strong></td><td>Addition, subtraction, mean, median, standard deviation, correlation</td><td><strong>Mode, frequency count, chi-square</strong> — no mean or median</td></tr>\n   <tr><td><strong>Collected by</strong></td><td>Surveys</td><td>Interviews</td></tr>\n   <tr><td><strong>Answers</strong></td><td>What, how often, how many, how much</td><td>How, why</td></tr>\n   <tr><td><strong>Trade-off</strong></td><td>Fast to analyse, less bias, generalisable with good sampling</td><td>Deep and contextual, but subjective and prone to researcher bias</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>The point of the whole classification:</b> the data type determines which operations are <em>valid</em>. Averaging “city of birth” produces nothing meaningful. You cannot take a mean or median of nominal or ordinal data.</div>\n  <p style=\"font-size:14.5px;color:var(--ink-2)\">Context matters: house area in square feet and house price are <strong>continuous</strong>, because they fall in a range rather than being countable units.</p>"
    },
    {
     "t": "4 · By origin: primary / secondary / metadata",
     "src": "L5 · L14 · slides 101–108",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Primary</th><th>Secondary</th></tr></thead><tbody>\n   <tr><td><strong>Definition</strong></td><td>Collected first-hand by you, for a specific purpose. Original, not previously published.</td><td>Collected by someone else for a different purpose, reused for your analysis.</td></tr>\n   <tr><td><strong>Sources</strong></td><td>Surveys (Google Forms), experiments, IoT sensor readings, Arduino/MKR boards, weather stations, interviews</td><td>NSSO, SEBI, IRDAI, WHO, World Bank, IMF, Bloomberg, census, Wikidata</td></tr>\n   <tr><td><strong>Advantages</strong></td><td>Tailored to the exact question; you know how it was collected; reliable</td><td>Large scale, already available, often free and authoritative</td></tr>\n   <tr><td><strong>Disadvantages</strong></td><td>Time-consuming, expensive, small sample size</td><td>May not match your question; quality depends on the original collector</td></tr>\n  </tbody></table></div>\n  <div class=\"def\"><b>Metadata</b> = data about data. It describes data without being the data itself.</div>\n  <ul>\n   <li><strong>Photo:</strong> the pixels are the data; filename, size, date taken, GPS location, camera model and resolution are the metadata.</li>\n   <li><strong>Database:</strong> column names, data types, primary keys, foreign keys, row and column counts.</li>\n   <li><strong>A library catalogue</strong> is metadata about books.</li>\n   <li><strong>WhatsApp:</strong> sender ID, recipient ID, timestamp, read receipt, device type — revealing a great deal even without the message content.</li>\n  </ul>"
    }
   ]
  },
  {
   "id": "algo",
   "title": "Algorithms",
   "tag": "Lectures 5, 14",
   "lede": "Pillar 2. The five properties are near-certain exam material — he listed them in both the recorded lecture and the live revision.",
   "topics": [
    {
     "t": "Definition and origin",
     "src": "L5 · L14 · slides 112–116",
     "h": "\n  <div class=\"def\">An <b>algorithm</b> is a <b>finite, unambiguous, step-by-step procedure</b> for solving a well-defined problem. It takes input, processes it through defined steps, and produces a correct output every time.</div>\n  <ul>\n   <li>The <strong>intellectual core</strong> of computing — Pillar 2.</li>\n   <li>From <strong>Muhammad ibn Musa al-Khwarizmi</strong>, a <strong>9th-century Persian mathematician</strong>. The word <em>algebra</em> comes from his book title too.</li>\n   <li>Algorithms exist <strong>independently of computers</strong>. A computer just executes them fast.</li>\n   <li><strong>Quality of computing depends on quality of the algorithm</strong> — a bad algorithm gives a wrong or slow result no matter how powerful the hardware. 1990s AI research ran on weak machines by optimising algorithms.</li>\n  </ul>\n  <h4>Everyday algorithm: making tea</h4>\n  <p style=\"font-size:14.5px\">Boil water → add tea leaves → wait 3 minutes → add milk and sugar → pour and serve.</p>\n  <h4>Odd-or-even algorithm</h4>\n  <pre>1. Start\n2. Read number n\n3. Divide n by 2, check the remainder\n4. If remainder = 0 → print \"even\"\n5. If remainder ≠ 0 → print \"odd\"\n6. End</pre>\n  <p style=\"font-size:14.5px;color:var(--ink-2)\">Flowcharts represent algorithms visually, with start, stop, decision and process shapes.</p><!--viz:foc-odd-even-flowchart--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Flowchart: Start, read n, compute r as the remainder of n divided by 2, a diamond asks whether r equals 0, yes prints even, no prints odd, both reach End.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The odd-or-even algorithm as a flowchart</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 360\" role=\"img\" aria-label=\"Flowchart: start, read n, compute the remainder of n divided by 2, decide whether it is 0, print even or odd, end.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"180\" y=\"10\" width=\"80\" height=\"32\" rx=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"220\" y=\"31\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Start</text><text x=\"168\" y=\"31\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">start / stop</text><path d=\"M220,42 L220,54\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M220,62 L215.5,54 L224.5,54 Z\" style=\"fill:var(--ink-3)\"/><path d=\"M180,62 L280,62 L260,94 L160,94 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"220\" y=\"83\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">read n</text><text x=\"292\" y=\"83\" text-anchor=\"start\" style=\"fill:var(--ink-3);font-size:13px\">input / output</text><path d=\"M220,94 L220,104\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M220,112 L215.5,104 L224.5,104 Z\" style=\"fill:var(--ink-3)\"/><rect x=\"110\" y=\"112\" width=\"220\" height=\"32\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"220\" y=\"133\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">r = remainder of n ÷ 2</text><text x=\"342\" y=\"133\" text-anchor=\"start\" style=\"fill:var(--ink-3);font-size:13px\">process</text><path d=\"M220,144 L220,154\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M220,162 L215.5,154 L224.5,154 Z\" style=\"fill:var(--ink-3)\"/><path d=\"M220,162 L310,196 L220,230 L130,196 Z\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"220\" y=\"201\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">r == 0 ?</text><text x=\"300\" y=\"172\" text-anchor=\"start\" style=\"fill:var(--ink-3);font-size:13px\">decision</text><path d=\"M130,196 L85,196 L85,248\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M85,256 L80.5,248 L89.5,248 Z\" style=\"fill:var(--ink-3)\"/><text x=\"107\" y=\"214\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">yes</text><path d=\"M310,196 L355,196 L355,248\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M355,256 L350.5,248 L359.5,248 Z\" style=\"fill:var(--ink-3)\"/><text x=\"333\" y=\"214\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">no</text><path d=\"M34,256 L160,256 L136,288 L10,288 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"85\" y=\"277\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">print \"even\"</text><path d=\"M304,256 L430,256 L406,288 L280,288 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"355\" y=\"277\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">print \"odd\"</text><path d=\"M85,288 L85,330 L172,330\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M180,330 L172,334.5 L172,325.5 Z\" style=\"fill:var(--ink-3)\"/><path d=\"M355,288 L355,330 L268,330\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M260,330 L268,325.5 L268,334.5 Z\" style=\"fill:var(--ink-3)\"/><rect x=\"180\" y=\"314\" width=\"80\" height=\"32\" rx=\"16\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"220\" y=\"335\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">End</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Ovals start and stop, parallelograms read or print, rectangles calculate, diamonds decide.</figcaption></figure><!--/viz:foc-odd-even-flowchart-->"
    },
    {
     "t": "The five essential properties",
     "src": "L5 · L14 · slides 118–124 · near-certain exam material",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>#</th><th>Property</th><th>Rule</th><th>Violation he gave</th></tr></thead><tbody>\n   <tr><td>1</td><td><strong>Finiteness</strong></td><td>Must terminate after a finite number of steps</td><td>“Keep dividing N by 2 until you reach exactly 0” — gets smaller forever, never reaches 0</td></tr>\n   <tr><td>2</td><td><strong>Definiteness</strong><br>(unambiguity)</td><td>Every step precisely defined; same step, same result, every time</td><td>“Add a little bit of salt” ✗ &nbsp;→&nbsp; “Add exactly 5 grams of salt” ✓</td></tr>\n   <tr><td>3</td><td><strong>Input</strong></td><td><strong>Zero or more</strong> inputs</td><td>“Hello World” has <strong>zero</strong> inputs — and is still a valid algorithm</td></tr>\n   <tr><td>4</td><td><strong>Output</strong></td><td><strong>At least one</strong> output</td><td>An algorithm with no output is pointless</td></tr>\n   <tr><td>5</td><td><strong>Effectiveness</strong></td><td>Every step basic enough to be done, in principle, with pen and paper. No infinite resources.</td><td>“Find the largest prime number” ✗ · “Ask 1 billion users simultaneously” ✗ · “Compare A with B, output the larger” ✓</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>The classic trap:</b> input is <em>zero or more</em>, output is <em>at least one</em>. They are not symmetric. An MCQ offering “an algorithm must have at least one input” is testing exactly this.</div>\n  <h4>A finite algorithm, for contrast</h4>\n  <pre>Step 1: Start with N = 100\nStep 2: Divide N by 2\nStep 3: If N &lt; 1, stop. Else go to Step 2.\n<span class=\"c\">→ 100, 50, 25, 12.5, 6.25, 3.125, 1.5625, 0.78… stop.</span></pre>\n  <p style=\"font-size:14.5px\">Common structures named in the lecture: <strong>if-else</strong>, <strong>while loop</strong> (checks condition, then executes), <strong>do-while loop</strong> (executes, then checks).</p>"
    }
   ]
  },
  {
   "id": "hardware",
   "title": "Hardware",
   "tag": "Lectures 6, 14",
   "lede": "Pillar 3. Know the CPU/GPU contrast and the volatile/non-volatile memory split — those are the two comparisons he kept returning to.",
   "topics": [
    {
     "t": "Why hardware matters, and the GPU story",
     "src": "L6 · slides 126–127",
     "h": "\n  <p style=\"font-size:15px\">Understanding hardware answers three questions: why memory management matters, why loops that run a billion times are slow, and why files persist after power-off.</p>\n  <ul>\n   <li>AI research began in the <strong>1990s</strong> but stalled on insufficient computing power.</li>\n   <li>The AI explosion was a <strong>hardware</strong> triumph, not only a software one — the <strong>GPU</strong> is at its centre.</li>\n   <li><strong>2012:</strong> <strong>AlexNet</strong> for computer vision, trained on GPUs, proved it to the world.</li>\n   <li><strong>NVIDIA</strong> leads via <strong>CUDA</strong> (Compute Unified Device Architecture). <strong>PyTorch</strong> (Meta) and <strong>TensorFlow</strong> (Google) let you write GPU-accelerated Python.</li>\n  </ul>"
    },
    {
     "t": "CPU vs GPU",
     "src": "L6 · L14 · slides 130–131",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>CPU</th><th>GPU</th></tr></thead><tbody>\n   <tr><td><strong>Cores</strong></td><td><strong>Few but powerful</strong> — 4, 8, 16, up to 24</td><td><strong>Thousands of small, simple</strong> cores</td></tr>\n   <tr><td><strong>Optimised for</strong></td><td>Complex <strong>sequential</strong> tasks, one instruction at a time, very fast</td><td>The <strong>same operation on many data points simultaneously</strong> — mass parallelism</td></tr>\n   <tr><td><strong>Original purpose</strong></td><td>General-purpose brain of the computer</td><td>Rendering graphics — colour and position of millions of pixels at once</td></tr>\n   <tr><td><strong>Modern AI use</strong></td><td>Runs the Python interpreter</td><td>Training neural networks, LLMs, image and video generators</td></tr>\n  </tbody></table></div>\n  <h4>Inside the CPU</h4>\n  <ul>\n   <li><strong>ALU</strong> — Arithmetic Logic Unit. Arithmetic (+ − × ÷) <em>and</em> logic (AND, OR, NOT, comparisons).</li>\n   <li><strong>CU</strong> — Control Unit. Fetches instructions from memory, decodes them, directs the ALU, decides which instruction runs next.</li>\n   <li>Also: data movement — load from memory, store to memory.</li>\n   <li><strong>Speed: 3–5 billion instructions per second (3–5 GHz).</strong></li>\n  </ul>\n  <div class=\"warnbox\"><b>Trap:</b> the ALU does <em>both</em> arithmetic and logic. The Control Unit does neither — it schedules.</div><!--viz:foc-cpu-gpu-cores--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"A CPU chip with four large cores beside a GPU chip filled with a grid of many small cores.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Few strong cores vs thousands of small ones</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 212\" role=\"img\" aria-label=\"Left chip: a CPU with four large cores. Right chip: a GPU drawn as a grid of many small cores.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><text x=\"110\" y=\"22\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">CPU</text><text x=\"330\" y=\"22\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:15px;font-weight:700\">GPU</text><rect x=\"20\" y=\"30\" width=\"180\" height=\"130\" rx=\"6\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><rect x=\"240\" y=\"30\" width=\"180\" height=\"130\" rx=\"6\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><rect x=\"36\" y=\"48\" width=\"64\" height=\"46\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"68\" y=\"76\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">core</text><rect x=\"36\" y=\"104\" width=\"64\" height=\"46\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"68\" y=\"132\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">core</text><rect x=\"120\" y=\"48\" width=\"64\" height=\"46\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"152\" y=\"76\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">core</text><rect x=\"120\" y=\"104\" width=\"64\" height=\"46\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"152\" y=\"132\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">core</text><path d=\"M248,40.5 h11 v11 h-11 Z M262,40.5 h11 v11 h-11 Z M276,40.5 h11 v11 h-11 Z M290,40.5 h11 v11 h-11 Z M304,40.5 h11 v11 h-11 Z M318,40.5 h11 v11 h-11 Z M332,40.5 h11 v11 h-11 Z M346,40.5 h11 v11 h-11 Z M360,40.5 h11 v11 h-11 Z M374,40.5 h11 v11 h-11 Z M388,40.5 h11 v11 h-11 Z M402,40.5 h11 v11 h-11 Z M248,54.5 h11 v11 h-11 Z M262,54.5 h11 v11 h-11 Z M276,54.5 h11 v11 h-11 Z M290,54.5 h11 v11 h-11 Z M304,54.5 h11 v11 h-11 Z M318,54.5 h11 v11 h-11 Z M332,54.5 h11 v11 h-11 Z M346,54.5 h11 v11 h-11 Z M360,54.5 h11 v11 h-11 Z M374,54.5 h11 v11 h-11 Z M388,54.5 h11 v11 h-11 Z M402,54.5 h11 v11 h-11 Z M248,68.5 h11 v11 h-11 Z M262,68.5 h11 v11 h-11 Z M276,68.5 h11 v11 h-11 Z M290,68.5 h11 v11 h-11 Z M304,68.5 h11 v11 h-11 Z M318,68.5 h11 v11 h-11 Z M332,68.5 h11 v11 h-11 Z M346,68.5 h11 v11 h-11 Z M360,68.5 h11 v11 h-11 Z M374,68.5 h11 v11 h-11 Z M388,68.5 h11 v11 h-11 Z M402,68.5 h11 v11 h-11 Z M248,82.5 h11 v11 h-11 Z M262,82.5 h11 v11 h-11 Z M276,82.5 h11 v11 h-11 Z M290,82.5 h11 v11 h-11 Z M304,82.5 h11 v11 h-11 Z M318,82.5 h11 v11 h-11 Z M332,82.5 h11 v11 h-11 Z M346,82.5 h11 v11 h-11 Z M360,82.5 h11 v11 h-11 Z M374,82.5 h11 v11 h-11 Z M388,82.5 h11 v11 h-11 Z M402,82.5 h11 v11 h-11 Z M248,96.5 h11 v11 h-11 Z M262,96.5 h11 v11 h-11 Z M276,96.5 h11 v11 h-11 Z M290,96.5 h11 v11 h-11 Z M304,96.5 h11 v11 h-11 Z M318,96.5 h11 v11 h-11 Z M332,96.5 h11 v11 h-11 Z M346,96.5 h11 v11 h-11 Z M360,96.5 h11 v11 h-11 Z M374,96.5 h11 v11 h-11 Z M388,96.5 h11 v11 h-11 Z M402,96.5 h11 v11 h-11 Z M248,110.5 h11 v11 h-11 Z M262,110.5 h11 v11 h-11 Z M276,110.5 h11 v11 h-11 Z M290,110.5 h11 v11 h-11 Z M304,110.5 h11 v11 h-11 Z M318,110.5 h11 v11 h-11 Z M332,110.5 h11 v11 h-11 Z M346,110.5 h11 v11 h-11 Z M360,110.5 h11 v11 h-11 Z M374,110.5 h11 v11 h-11 Z M388,110.5 h11 v11 h-11 Z M402,110.5 h11 v11 h-11 Z M248,124.5 h11 v11 h-11 Z M262,124.5 h11 v11 h-11 Z M276,124.5 h11 v11 h-11 Z M290,124.5 h11 v11 h-11 Z M304,124.5 h11 v11 h-11 Z M318,124.5 h11 v11 h-11 Z M332,124.5 h11 v11 h-11 Z M346,124.5 h11 v11 h-11 Z M360,124.5 h11 v11 h-11 Z M374,124.5 h11 v11 h-11 Z M388,124.5 h11 v11 h-11 Z M402,124.5 h11 v11 h-11 Z M248,138.5 h11 v11 h-11 Z M262,138.5 h11 v11 h-11 Z M276,138.5 h11 v11 h-11 Z M290,138.5 h11 v11 h-11 Z M304,138.5 h11 v11 h-11 Z M318,138.5 h11 v11 h-11 Z M332,138.5 h11 v11 h-11 Z M346,138.5 h11 v11 h-11 Z M360,138.5 h11 v11 h-11 Z M374,138.5 h11 v11 h-11 Z M388,138.5 h11 v11 h-11 Z M402,138.5 h11 v11 h-11 Z\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"110\" y=\"182\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">4 to 24 powerful cores</text><text x=\"110\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">tough steps in sequence</text><text x=\"330\" y=\"182\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">thousands of tiny cores</text><text x=\"330\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">one step on many values</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Not to scale: a real GPU has thousands of cores, which is why it trains neural networks fast.</figcaption></figure><!--/viz:foc-cpu-gpu-cores-->"
    },
    {
     "t": "Memory: RAM, ROM, secondary storage",
     "src": "L6 · L14 · slides 132–134",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>RAM</th><th>ROM</th><th>Secondary storage</th></tr></thead><tbody>\n   <tr><td><strong>Volatility</strong></td><td><strong>Volatile</strong> — lost when power is cut</td><td><strong>Non-volatile</strong></td><td><strong>Non-volatile</strong></td></tr>\n   <tr><td><strong>Speed</strong></td><td>Fast — nanoseconds</td><td>Fast</td><td>Slower</td></tr>\n   <tr><td><strong>Size</strong></td><td>Phones 6–12 GB · laptops 8–32 GB</td><td>Small</td><td>Large</td></tr>\n   <tr><td><strong>Holds</strong></td><td>Running apps; your Python variables, lists and objects</td><td>Firmware and the <strong>bootloader</strong> — burned in at the factory, unmodifiable</td><td>Files, photos, music, databases, your .py files</td></tr>\n   <tr><td><strong>Type</strong></td><td colspan=\"2\"><strong>Primary memory</strong></td><td>SSD, HDD, cloud, USB, SD card, optical disc</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">RAM is “the desk you study at”. Opening an app loads it from slow storage into fast RAM so the CPU can reach it.</p>\n  <h4>Memory hierarchy — speed vs permanence</h4>\n  <p style=\"font-size:14.5px\">CPU registers (fastest, most temporary) → RAM (very fast, temporary) → ROM (fast, permanent) → secondary storage (slower, permanent).</p><!--viz:foc-memory-power-cut--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"A .py file is loaded from the SSD into RAM, where the CPU works on it; after a power cut RAM is wiped while the SSD file and the ROM bootloader survive.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Where a running program lives</div><div style=\"font-size:14px\"><div style=\"display:flex;flex-wrap:wrap;align-items:stretch;gap:6px 8px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><div style=\"font-size:12.5px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.06em\">Secondary storage</div><span style=\"font-family:var(--mono)\">marks.py</span> saved on SSD · permanent</div><span style=\"color:var(--ink-3);align-self:center\">→ load →</span><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><div style=\"font-size:12.5px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.06em\">RAM</div>the running program, its variables and lists · volatile</div><span style=\"color:var(--ink-3);align-self:center\">⇄</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><div style=\"font-size:12.5px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.06em\">CPU</div>fetch, decode, execute</div></div><div style=\"display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:10px\"><b style=\"font-size:13.5px\">Power cut:</b><span style=\"padding:4px 9px;border-radius:4px;background:var(--bad-soft);font-size:13.5px\">RAM wiped ✗</span><span style=\"padding:4px 9px;border-radius:4px;background:var(--good-soft);font-size:13.5px\">SSD file still there ✓</span><span style=\"padding:4px 9px;border-radius:4px;background:var(--good-soft);font-size:13.5px\">ROM bootloader intact ✓</span></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Unsaved work lives only in RAM, so it is the one thing a power cut destroys.</figcaption></figure><!--/viz:foc-memory-power-cut-->"
    },
    {
     "t": "Input and output devices",
     "src": "L6 · slides 128–135",
     "h": "\n  <p style=\"font-size:15px\"><strong>Input devices</strong> translate the real world into digital signals. <strong>Output devices</strong> translate results back into a form humans can use.</p>\n  <h4>Sensors — know what each one does</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Sensor</th><th>Detects</th><th>Used for</th></tr></thead><tbody>\n   <tr><td><strong>Accelerometer</strong></td><td>Movement and orientation</td><td>Screen rotation, step counting (Google Fit, Strava)</td></tr>\n   <tr><td><strong>GPS</strong></td><td>Satellite signals → precise location</td><td>Maps, Uber, Ola, Swiggy, Zomato</td></tr>\n   <tr><td><strong>Gyroscope</strong></td><td><strong>Rotational</strong> movement</td><td>Racing games, navigation, camera stabilisation</td></tr>\n   <tr><td><strong>Fingerprint</strong></td><td>Biometric data</td><td>Authentication, device locking</td></tr>\n   <tr><td><strong>Barometer</strong></td><td>Air pressure</td><td>Altitude, weather apps</td></tr>\n   <tr><td><strong>Temperature</strong></td><td>Device heat</td><td>Overheating warnings</td></tr>\n   <tr><td><strong>Light sensor</strong></td><td>Ambient light</td><td>Automatic screen brightness</td></tr>\n   <tr><td><strong>Proximity</strong></td><td>Phone near your ear</td><td>Turns the touchscreen off during calls</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>Trap:</b> accelerometer = linear movement and orientation. Gyroscope = <em>rotation</em>. Both show up as distractors for each other.</div>\n  <p style=\"font-size:14.5px\"><strong>Output devices:</strong> monitor, printer, speakers, <strong>haptic feedback</strong> (keyboard vibration), actuators and motors.</p>"
    }
   ]
  },
  {
   "id": "software",
   "title": "Software, OS &amp; utilities",
   "tag": "Lectures 6, 7, 14",
   "lede": "Pillar 4, in three layers: system → utility → application. Plus the interpreter/compiler split that leads into Python.",
   "topics": [
    {
     "t": "The three layers of software",
     "src": "L6 · L7 · slides 137–151",
     "h": "\n  <div class=\"def\"><b>Software</b> is the set of instructions that tells hardware what to do. Without it, a computer is an inert collection of components.</div>\n  <ol style=\"padding-left:20px;font-size:15px\">\n   <li><strong>System software</strong> — manages hardware, provides the platform. The OS.</li>\n   <li><strong>Utility software</strong> — maintains, optimises and protects the system.</li>\n   <li><strong>Application software</strong> — helps the user do a specific task.</li>\n  </ol><!--viz:foc-software-layers--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Stack: the user on top, application and utility software side by side, the operating system beneath them, and hardware at the bottom.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Who talks to the hardware</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:5px;font-size:14px\"><div style=\"grid-column:1/-1;text-align:center;color:var(--ink-3);font-size:13px\">you, the user</div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>Application software</b><br><span style=\"color:var(--ink-2);font-size:13px\">Colab, WhatsApp, Excel</span></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>Utility software</b><br><span style=\"color:var(--ink-2);font-size:13px\">antivirus, Disk Cleanup, ZIP</span></div><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);grid-column:1/-1;text-align:center\"><b>System software: the operating system</b><br><span style=\"color:var(--ink-2);font-size:13px\">processes · memory · files · drivers · security · UI</span></div><div style=\"grid-column:1/-1;text-align:center;padding:7px 11px;border:1px dashed var(--rule-2);border-radius:4px;background:var(--surface-2)\">Hardware: CPU, RAM, disk, screen</div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Apps and utilities never touch hardware directly: print() asks the OS, and the OS drives the screen.</figcaption></figure><!--/viz:foc-software-layers-->"
    },
    {
     "t": "Operating systems",
     "src": "L6 · slides 138–141",
     "h": "\n  <p style=\"font-size:15px\">The OS is <strong>the master program: it starts first, runs always, and never stops until shutdown.</strong></p>\n  <div class=\"scroller\"><table><thead><tr><th>OS</th><th>Use</th><th>Kernel</th><th>Key fact</th></tr></thead><tbody>\n   <tr><td>Windows 11</td><td>PCs</td><td>NT</td><td>Most widely used desktop OS; dominates enterprise</td></tr>\n   <tr><td>macOS Sequoia</td><td>Apple computers</td><td>XNU (Unix)</td><td>Tight hardware–software integration</td></tr>\n   <tr><td><strong>Linux</strong></td><td>Servers, IoT</td><td>Linux</td><td>Open source; runs <strong>~96% of the world's web servers</strong></td></tr>\n   <tr><td><strong>Android</strong></td><td>Smartphones</td><td>Linux</td><td><strong>~72% global smartphone market share</strong></td></tr>\n   <tr><td>iOS</td><td>Apple phones/tablets</td><td>XNU (Unix)</td><td>Closed ecosystem; security and performance</td></tr>\n   <tr><td>Chrome OS</td><td>Chromebooks</td><td>Linux</td><td>Cloud-first; runs Android apps</td></tr>\n  </tbody></table></div>\n  <h4>The six responsibilities of an OS</h4>\n  <ul>\n   <li><strong>Process management</strong> — which program runs on the CPU and for how long; schedules dozens of processes in milliseconds.</li>\n   <li><strong>Memory management</strong> — allocates RAM, stops programs interfering, reclaims memory on close.</li>\n   <li><strong>File system</strong> — organises storage into files and folders, independent of the underlying hardware.</li>\n   <li><strong>Device drivers</strong> — translate generic OS instructions into specific hardware commands. Why your phone works with thousands of peripherals.</li>\n   <li><strong>Security</strong> — controls who accesses what; stops one app reading another's private data.</li>\n   <li><strong>User interface</strong> — GUI (icons, windows, touch) or CLI (terminal).</li>\n  </ul>\n  <div class=\"def\">When your Python program reads a file or prints to screen, <b>it asks the OS to do it.</b> The OS is the intermediary between your code and the hardware.</div>"
    },
    {
     "t": "Utility software",
     "src": "L6 · slides 142–146",
     "h": "\n  <ul>\n   <li><strong>File management</strong> — Windows Explorer, macOS Finder. CLI equivalents: <code>ls cp mv rm</code> (Linux/macOS), <code>dir copy move</code> (Windows).</li>\n   <li><strong>Disk management</strong> — Disk Cleanup (temp files, caches, old installers) · <strong>Defragmentation</strong> (reorganises fragmented files on an HDD — <strong>not needed for SSDs</strong>) · partitioning · disk checking for bad sectors.</li>\n   <li><strong>Security</strong> — Antivirus (signature databases + heuristics) · Firewall (monitors incoming and outgoing traffic) · Encryption: <strong>BitLocker</strong> (Windows), <strong>FileVault</strong> (macOS) · VPN clients (encrypt traffic, mask IP).</li>\n  </ul>\n  <h4>Compression — the exam's favourite pairing</h4>\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Lossless</th><th>Lossy</th></tr></thead><tbody>\n   <tr><td><strong>Formats</strong></td><td>ZIP, 7-Zip, WinRAR, TAR</td><td><strong>JPEG</strong> (images), <strong>MP3</strong> (audio)</td></tr>\n   <tr><td><strong>Data</strong></td><td>Identical data can be restored</td><td>Permanently discarded — inaudible frequencies, invisible pixel variations</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>Trap:</b> the slide says defragmentation is for HDDs and <em>not</em> needed on SSDs. One lecture summary garbled this as “on SSDs” — trust the slide.</div>"
    },
    {
     "t": "Application software",
     "src": "L6 · L7 · slides 147–151",
     "h": "\n  <ul>\n   <li><strong>Productivity</strong> — Word/Docs · Excel/Sheets (<em>every formula is an algorithm</em>) · PowerPoint/Slides · MySQL Workbench.</li>\n   <li><strong>Communication</strong> — Email over <strong>SMTP/IMAP</strong> · WhatsApp, Telegram, Slack with end-to-end encryption · Zoom, Google Meet.</li>\n   <li><strong>Browsers</strong> — parse <strong>HTML</strong> (structure), <strong>CSS</strong> (styling), <strong>JavaScript</strong> (behaviour); manage many simultaneous connections.</li>\n   <li><strong>Entertainment</strong> — VLC, Spotify (decode MP3, AAC, H.264, H.265) · games (among the most computationally intensive: physics, 3D rendering, NPC AI, network sync) · Netflix, YouTube.</li>\n  </ul>\n  <h4>Specialised software by domain</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Domain</th><th>Software</th><th>Python libraries</th></tr></thead><tbody>\n   <tr><td>Data science</td><td>Jupyter Notebook, Tableau</td><td>pandas, numpy, matplotlib</td></tr>\n   <tr><td>Design / CAD</td><td>AutoCAD, Figma, Photoshop</td><td>PIL/Pillow, cairo</td></tr>\n   <tr><td>Healthcare</td><td>Hospital info systems, PACS imaging</td><td>scikit-learn, OpenCV</td></tr>\n   <tr><td>Finance</td><td>Bloomberg Terminal, trading platforms</td><td>pandas, statsmodels</td></tr>\n   <tr><td>Engineering</td><td>MATLAB, SolidWorks</td><td>NumPy, SciPy</td></tr>\n  </tbody></table></div>"
    },
    {
     "t": "Interpreter vs compiler",
     "src": "L7 · L14 · slide 153 · high-probability MCQ",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Interpreter</th><th>Compiler</th></tr></thead><tbody>\n   <tr><td><strong>Languages</strong></td><td><strong>Python</strong>, JavaScript</td><td>C, C++, Java</td></tr>\n   <tr><td><strong>Translation</strong></td><td><strong>Line by line, at runtime</strong></td><td><strong>Entire source to machine code, before running</strong></td></tr>\n   <tr><td><strong>Errors found</strong></td><td>As the program runs — partial output still appears</td><td>At compile time, before running — no output at all if errors exist</td></tr>\n   <tr><td><strong>Speed</strong></td><td>Slower — each line re-translated every time it runs</td><td>Faster — machine code runs directly on the CPU</td></tr>\n   <tr><td><strong>Debugging</strong></td><td>Easier, interactive, immediate feedback</td><td>Harder — all-or-nothing</td></tr>\n  </tbody></table></div>\n  <h4>Editor vs IDE</h4>\n  <ul>\n   <li><strong>Source code editor</strong> — writing and editing only. Notepad++, Sublime Text, VS Code.</li>\n   <li><strong>IDE</strong> — all-in-one: editor + runner + <strong>debugger</strong> + often version control. PyCharm, VS Code with extensions, <strong>Google Colab</strong>.</li>\n  </ul><!--viz:foc-interpreter-vs-compiler--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"A three-line program whose third line uses a misspelt name: the interpreter prints the first two lines then a NameError; a compiler rejects the program before any output.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Same bug, two translators</div><div style=\"font-size:14px\"><pre style=\"margin:0;font-size:13px\">print(\"line 1 ran\")\nprint(\"line 2 ran\")\nprint(totl)   <span class=\"c\"># misspelt name</span></pre><div style=\"height:8px\"></div><div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:10px 12px\"><div style=\"font-weight:700;margin-bottom:6px\">Interpreter (Python)</div><div style=\"color:var(--ink-2);font-size:13px;margin-bottom:6px\">translates and runs one line at a time</div><pre style=\"margin:0;font-size:13px\">line 1 ran\nline 2 ran\n<span class=\"o\">NameError: name 'totl' is not defined</span></pre></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:10px 12px\"><div style=\"font-weight:700;margin-bottom:6px\">Compiler (C, C++)</div><div style=\"color:var(--ink-2);font-size:13px;margin-bottom:6px\">translates the whole program first</div><pre style=\"margin:0;font-size:13px\"><span class=\"o\">compile error: undeclared name</span>\n<span class=\"c\">(nothing runs, no output)</span></pre></div></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">One exception: Python checks syntax for the whole file first, so a SyntaxError on line 3 means lines 1 and 2 never run either.</figcaption></figure><!--/viz:foc-interpreter-vs-compiler-->"
    },
    {
     "t": "Textbook: Getting Started",
     "src": "Python Crash Course ch1",
     "h": "<p><strong>Running a program from a terminal</strong> — Use cd (change directory) to move into the folder holding the file, list the folder's contents to check the file is there (ls on Linux/macOS, dir on Windows), then run python3 filename.py. This is how you run a program without opening it in an editor.<br><em>e.g.</em> cd Desktop/python_work then python3 hello_world.py</p>"
    }
   ]
  },
  {
   "id": "python",
   "title": "Python basics",
   "tag": "Lectures 7, 8, 10, 14, 19",
   "lede": "Variables, strings, numbers, comments and Colab. Syntax questions here are the easiest marks on the paper.",
   "topics": [
    {
     "t": "Python and Google Colab",
     "src": "L7 · L8 · L14 · slides 157–161",
     "h": "\n  <div class=\"def\"><b>Python</b> — high-level, general-purpose, designed by <b>Guido van Rossum</b>, first released in <b>1991</b>.</div>\n  <p style=\"font-size:14.5px\"><strong>Five advantages:</strong> readable (reads like English) · fast to start (no setup) · universal (web, AI, data science, automation, research) · cross-platform (Windows, macOS, Linux) · huge community.</p>\n  <h4>Why Colab — the five reasons on the slide</h4>\n  <ol style=\"padding-left:20px;font-size:14.5px\">\n   <li><strong>Zero setup</strong> — runs in the browser; needs only a Google account and internet.</li>\n   <li><strong>Cell-by-cell execution</strong> — run one cell, see output underneath; a break is isolated to that cell.</li>\n   <li><strong>Integrated Gemini AI</strong> assistant.</li>\n   <li><strong>Pre-installed libraries</strong> — Pandas, NumPy, Matplotlib ready to import.</li>\n   <li><strong>Sharing</strong> — saves to Google Drive, shareable link, real-time collaborative editing.</li>\n  </ol>\n  <p style=\"font-size:14.5px\">Also: free access to <strong>CPUs, GPUs and TPUs</strong>. Notebook file extension is <strong>.ipynb</strong> (IPython Notebook); can also download as <code>.py</code>.</p>\n  <h4>Computing → programming</h4>\n  <p style=\"font-size:14.5px\">Problem → Algorithm → Python code → Execution → Solution. <em>Computing gives the concepts; programming gives the tool.</em></p>"
    },
    {
     "t": "Variables and naming rules",
     "src": "L8 · L14 · slides 162–164",
     "h": "\n  <h4>Rules — breaking these is an error</h4>\n  <ul>\n   <li>Only <strong>letters, numbers and underscores</strong>.</li>\n   <li>Must <strong>start with a letter or underscore, never a number</strong>. <code>message_1</code> ✓ &nbsp; <code>1_message</code> ✗</li>\n   <li><strong>No spaces.</strong> <code>greeting_message</code> ✓ &nbsp; <code>greeting message</code> ✗</li>\n   <li><strong>Not a Python keyword</strong> — <code>if</code>, <code>else</code>, <code>while</code>, <code>return</code>, <code>try</code>, <code>True</code>. <code>if = 5</code> is a <strong>SyntaxError</strong>.</li>\n  </ul>\n  <h4>Guidelines — these are style, not errors</h4>\n  <ul>\n   <li>Don’t reuse <strong>built-in function names</strong> such as <code>print</code>, <code>input</code>, <code>list</code> or <code>len</code>. <code>print = 5</code> is legal, but it hides the built-in, so the next <code>print(\"hi\")</code> fails with a <strong>TypeError</strong> (an int is not callable).</li>\n   <li>Short but descriptive: <code>student_name</code> beats <code>s_n</code>.</li>\n   <li>Careful with lowercase <code>l</code> and uppercase <code>O</code> — they look like <code>1</code> and <code>0</code>.</li>\n   <li>Use lowercase. Uppercase won't error, but avoid it.</li>\n  </ul>\n  <div class=\"warnbox\"><b>NameError</b> is raised when a variable is misspelled or used before it is defined. Python prints a <b>traceback</b> showing where. Variable names are case-sensitive.</div><!--viz:foc-variable-label--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Two panels: first the name city points at the string Jodhpur; after reassignment the same name points at Jaipur and the old value has no label.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">A variable is a label, not a box</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 188\" role=\"img\" aria-label=\"Step 1: the label city points at the value Jodhpur. Step 2: after city = Jaipur the label points at Jaipur and Jodhpur is left unlabelled.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M220,10 L220,178\" style=\"stroke:var(--rule);stroke-width:1.5;fill:none;stroke-dasharray:4 4\"/><text x=\"112\" y=\"28\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">city = \"Jodhpur\"</text><rect x=\"22\" y=\"70\" width=\"58\" height=\"30\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--ink-3);stroke-width:1.5\"/><text x=\"51\" y=\"90\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">city</text><path d=\"M80,85 L112,85\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M120,85 L112,89.5 L112,80.5 Z\" style=\"fill:var(--ink-3)\"/><rect x=\"120\" y=\"66\" width=\"90\" height=\"38\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"165\" y=\"90\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">'Jodhpur'</text><text x=\"112\" y=\"160\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">print(city) → Jodhpur</text><text x=\"327\" y=\"28\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">city = \"Jaipur\"</text><rect x=\"237\" y=\"60\" width=\"58\" height=\"30\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--ink-3);stroke-width:1.5\"/><text x=\"266\" y=\"80\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">city</text><path d=\"M295,75 L327,75\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M335,75 L327,79.5 L327,70.5 Z\" style=\"fill:var(--ink-3)\"/><rect x=\"335\" y=\"56\" width=\"90\" height=\"38\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"380\" y=\"80\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">'Jaipur'</text><rect x=\"335\" y=\"106\" width=\"90\" height=\"34\" rx=\"4\" style=\"fill:none;stroke:var(--rule-2);stroke-width:1.5;stroke-dasharray:5 4\"/><text x=\"380\" y=\"128\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">'Jodhpur'</text><text x=\"325\" y=\"128\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">no label</text><text x=\"327\" y=\"160\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">print(city) → Jaipur</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Assignment moves the label; the variable always gives the value it points at right now.</figcaption></figure><!--/viz:foc-variable-label-->"
    },
    {
     "t": "Strings",
     "src": "L8 · L10 · slides 167–169",
     "h": "\n  <div class=\"def\">A <b>string</b> is a series of characters. Anything inside quotes is a string — single or double.</div>\n  <p style=\"font-size:14.5px\">Mixing quote types lets you include quotes inside: <code>'He said \"Hello\"'</code> or <code>\"Python's strength\"</code>.</p>\n  <div class=\"scroller\"><table><thead><tr><th>Method</th><th>Does</th><th>Example</th></tr></thead><tbody>\n   <tr><td><code>.title()</code></td><td>Title Case</td><td><code>\"ada lovelace\".title()</code> → <code>Ada Lovelace</code></td></tr>\n   <tr><td><code>.upper()</code></td><td>UPPERCASE</td><td><code>→ ADA LOVELACE</code></td></tr>\n   <tr><td><code>.lower()</code></td><td>lowercase</td><td><code>→ ada lovelace</code></td></tr>\n   <tr><td><code>.lstrip()</code></td><td>Strips whitespace from the <strong>left</strong></td><td></td></tr>\n   <tr><td><code>.rstrip()</code></td><td>Strips whitespace from the <strong>right</strong></td><td></td></tr>\n   <tr><td><code>.strip()</code></td><td>Strips <strong>both</strong> sides</td><td></td></tr>\n  </tbody></table></div>\n  <ul>\n   <li><strong>Concatenation</strong> with <code>+</code>. Spaces must be quoted: <code>first_name + \" \" + last_name</code>.</li>\n   <li><strong>Whitespace characters:</strong> <code>\\t</code> tab, <code>\\n</code> newline.</li>\n   <li><strong>Method</strong> = an action Python performs on data, via dot notation. Always followed by parentheses, which may hold <strong>arguments</strong>.</li>\n  </ul>"
    },
    {
     "t": "Numbers, type conversion, comments",
     "src": "L10 · slides 170–173",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Operator</th><th>Operation</th><th>Example</th></tr></thead><tbody>\n   <tr><td><code>+ - *</code></td><td>Add, subtract, multiply</td><td><code>2 * 3</code> → <code>6</code></td></tr>\n   <tr><td><code>/</code></td><td>Division — <strong>always gives a float</strong></td><td><code>3 / 2</code> → <code>1.5</code></td></tr>\n   <tr><td><code>**</code></td><td><strong>Exponentiation</strong></td><td><code>3 ** 2</code> → <code>9</code> · cube of 2 is <code>2 ** 3</code></td></tr>\n  </tbody></table></div>\n  <ul>\n   <li><strong>Order of operations</strong> follows PEMDAS/BODMAS. Parentheses override: <code>(2 + 3) * 4</code> → <code>20</code>.</li>\n   <li><strong>Float</strong> = any number with a decimal point.</li>\n   <li><strong>Float precision:</strong> <code>0.2 + 0.1</code> can display as <code>0.30000000000000004</code>. This happens in <em>all</em> programming languages, from how computers represent numbers internally.</li>\n  </ul>\n  <div class=\"warnbox\"><b>TypeError.</b> <code>\"happy\" + 23 + \"rd birthday\"</code> fails — Python won't concatenate a string with an integer. Fix with <code>str()</code>: <code>\"happy\" + str(23) + \"rd birthday\"</code>. Using <code>\"23\"</code> also works but loses the number for arithmetic elsewhere.</div>\n  <h4>Comments</h4>\n  <p style=\"font-size:14.5px\">The <strong><code>#</code></strong> symbol. Everything after it on that line is ignored by the interpreter. Used to write notes in plain English — essential for collaborative work.</p>"
    },
    {
     "t": "Live Lecture 4: strings, numbers and errors",
     "src": "L#19",
     "h": "\n<div class=\"def\"><b>From the lecture (L19): the final exam.</b> The final has Python questions you <b>write with pen and paper</b>, of the same kind as the in-class exercises. He said they are not complex enough for syntax to trip you up: <b>syntax is not what's being tested; how you use the functions and keywords is</b>. About the seven-step list exercise below he said he will ask \"such type of questions\" in the final. Quiz 1 scores: he hadn't received them either; ask your Masai point of contact.</div>\n<h4>Why learn this when an LLM can write code?</h4>\n<p style=\"font-size:14.5px\">He encourages using LLMs, but compares it to a class-4 child asking why learn the alphabet if an LLM writes essays. Without the basics you can't write a good prompt, can't tell whether the output is what you wanted, and can't make a small change yourself without regenerating the whole program. The goal is to be able to <em>read</em> a program: how input comes in, how it is processed, how output is shown.</p>\n<h4>Read the traceback</h4>\n<p style=\"font-size:14.5px\">When code fails, Python prints a <strong>traceback</strong>, a plain-English error report. His advice: read every line of it. A misspelt variable gives a <code>NameError</code>:</p>\n<pre>message = \"Hello Python world!\"\nprint(mesage)\n<span class=\"c\"># last line of the traceback:</span>\n<span class=\"o\">NameError: name 'mesage' is not defined. Did you mean: 'message'?</span></pre>\n<h4>Function or method?</h4>\n<p style=\"font-size:14.5px\">He uses the two words interchangeably in this course. Rule of thumb: <strong>a name followed by parentheses is a function</strong> (<code>print()</code>, <code>str()</code>, <code>name.title()</code>). Strictly, \"method\" is used for functions that belong to a class or module, called with a dot. <code>del</code> has no parentheses: it is a statement.</p>\n<h4>Exercise: fix a message in one line</h4>\n<p style=\"font-size:14.5px\">Strip the extra spaces, join the pieces with <code>+</code>, and apply title case, all inside one <code>print</code>:</p>\n<pre>language = \"  python  \"\nstatus = \"is fun\"\nprint((\"error: \" + language.strip() + \" \" + status + \"!\").title())\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Error: Python Is Fun!</span></pre>\n<p style=\"font-size:14.5px\"><code>strip()</code> removes spaces at both ends, <code>rstrip()</code> only on the right, <code>lstrip()</code> only on the left. <code>.title()</code> on the whole string capitalises <em>every</em> word, including <em>Is</em>.</p>\n<h4>Numbers: powers and order of operations</h4>\n<pre>print(2 ** 8)\nprint(3 ** 3)\nprint(10 ** 6)\nprint(3 * 4 + 2)\nprint((2 + 3) * 4)\n<span class=\"c\"># prints:</span>\n<span class=\"o\">256</span>\n<span class=\"o\">27</span>\n<span class=\"o\">1000000</span>\n<span class=\"o\">14</span>\n<span class=\"o\">20</span></pre>\n<p style=\"font-size:14.5px\"><code>**</code> is \"to the power of\". BODMAS applies: multiplication before addition unless brackets say otherwise.</p>\n<h4>Floats: formatting the display</h4>\n<p style=\"font-size:14.5px\">Float results can carry many decimal places (and tiny representation errors such as <code>0.30000000000000004</code>). He showed how to fix the number of decimals when displaying a value, with a format specifier in curly braces:</p>\n<pre>num1 = 5.6789\nnum2 = 3.4567\nresult = num1 * num2\nprint(result)\nprint(\"{:.3f}\".format(result))\nprint(f\"{result:.3f}\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">19.63025363</span>\n<span class=\"o\">19.630</span>\n<span class=\"o\">19.630</span></pre>\n<p style=\"font-size:14.5px\"><code>.3f</code> means three digits after the decimal point. The last two lines are two spellings of the same format; formatting changes only how the number is shown, not the value stored in <code>result</code>.</p>\n<h4>Exercise: is 0.1 + 0.2 equal to 0.3?</h4>\n<pre>x = 0.1\ny = 0.2\nz = 0.3\nequal_check = (x + y == z)\nprint(\"Is x + y equal to z?\", equal_check)\nprint(x + y)\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Is x + y equal to z? False</span>\n<span class=\"o\">0.30000000000000004</span></pre>\n<p style=\"font-size:14.5px\">The sum is stored as 0.30000000000000004 because of how computers hold decimals in binary, so <code>==</code> gives <code>False</code>. The second part asked for \"x to the power 2 plus y to the power 2 divided by z\" to five decimal places, and the wording can be read two ways:</p>\n<pre>x, y, z = 0.1, 0.2, 0.3\nprint(\"{:.5f}\".format((x**2 + y**2) / z))\nprint(\"{:.5f}\".format(x**2 + y**2 / z))\n<span class=\"c\"># prints:</span>\n<span class=\"o\">0.16667</span>\n<span class=\"o\">0.14333</span></pre>\n<p style=\"font-size:14.5px\">Division happens before addition, so without brackets only <code>y**2</code> is divided by <code>z</code>. If you mean the whole sum, write the brackets.</p>\n<h4>TypeError: the message depends on what comes first</h4>\n<pre>age = 23\nprint(\"Happy \" + age + \"rd Birthday!\")\n<span class=\"c\"># error:</span>\n<span class=\"o\">TypeError: can only concatenate str (not \"int\") to str</span></pre>\n<pre>age = 23\nprint(age + \" Happy\")\n<span class=\"c\"># error:</span>\n<span class=\"o\">TypeError: unsupported operand type(s) for +: 'int' and 'str'</span></pre>\n<p style=\"font-size:14.5px\">Both are TypeErrors, but when the string comes first Python assumes you meant concatenation; when the number comes first it assumes addition. The fix is the same: <code>\"Happy \" + str(age) + \"rd Birthday!\"</code>.</p>\n<h4>Comments</h4>\n<p style=\"font-size:14.5px\">On a five-line script comments look unnecessary. On 10,000 to 15,000 lines written by someone else they decide whether the code can be understood and debugged at all. He said firms such as Google, Microsoft and Siemens have written rules for how comments must be written. A good comment says what the code is supposed to do and how it does it.</p>\n"
    },
    {
     "t": "Textbook: Getting Started",
     "src": "Python Crash Course ch1",
     "h": "<p>The chapter gets a working Python 3 environment onto Linux, macOS or Windows and runs a one-line Hello World program as a smoke test: if that works, any program should. It separates two ways of running code: typing snippets at the interactive &gt;&gt;&gt; prompt, and saving a .py file in a text editor and running the whole file. It shows how to run a saved program from a terminal with cd plus python filename.py, and how to read a failure: Python's traceback, and the reminder that one wrong capital, quote, colon or bracket stops a program. For this course the practical takeaway is the vocabulary (interpreter, prompt, script, traceback, cross-platform), since lectures use Colab rather than a local install.</p><!--viz:foc-pcc1-session-vs-script--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Two panels: at the &gt;&gt;&gt; prompt both 2 + 3 and print show a result; the same two lines saved in hello.py print only hi.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The &gt;&gt;&gt; prompt vs a .py file</div><div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:10px 12px\"><div style=\"font-weight:700;margin-bottom:6px\">Interactive session</div><div style=\"color:var(--ink-2);font-size:13px;margin-bottom:6px\">each line runs when you press Enter; nothing is saved</div><pre style=\"margin:0;font-size:13px\">&gt;&gt;&gt; 2 + 3\n<span class=\"o\">5</span>\n&gt;&gt;&gt; print(\"hi\")\n<span class=\"o\">hi</span></pre></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:10px 12px\"><div style=\"font-weight:700;margin-bottom:6px\">Script file hello.py</div><div style=\"color:var(--ink-2);font-size:13px;margin-bottom:6px\">saved; the whole file runs top to bottom</div><pre style=\"margin:0;font-size:13px\">2 + 3\nprint(\"hi\")</pre><div style=\"font-size:13px;color:var(--ink-3);margin:6px 0 4px\">output</div><pre style=\"margin:0;font-size:13px\"><span class=\"o\">hi</span></pre></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">A bare expression echoes only at the &gt;&gt;&gt; prompt; in a script, only print() shows anything.</figcaption></figure><!--/viz:foc-pcc1-session-vs-script--><!--viz:foc-pcc1-traceback--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"A traceback from a two-line script that misspells a variable, with the file and line number, the failing line with carets, and the NameError message labelled.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Reading a traceback</div><p style=\"font-size:13.5px;margin:0 0 6px\">greet.py: <span style=\"font-family:var(--mono)\">name = \"Asha\"</span> then <span style=\"font-family:var(--mono)\">print(nmae)</span></p><pre style=\"margin:0;font-size:13px\">Traceback (most recent call last):\n  File \".../greet.py\", <b>line 2</b>, in &lt;module&gt;   <span style=\"color:var(--blue)\">①</span>\n    print(nmae)   <span style=\"color:var(--blue)\">②</span>\n          ^^^^\n<span class=\"o\">NameError: name 'nmae' is not defined</span>   <span style=\"color:var(--blue)\">③</span></pre><div style=\"font-size:13.5px;margin-top:8px;display:grid;gap:3px\"><div><b style=\"color:var(--blue)\">①</b> where: the file and the line number</div><div><b style=\"color:var(--blue)\">②</b> the line that failed; the carets point at the culprit</div><div><b style=\"color:var(--blue)\">③</b> what went wrong: error type, then a message. Read this first.</div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Read a traceback bottom-up: the last line says what, the File line says where. Wording varies a little between Python versions.</figcaption></figure><!--/viz:foc-pcc1-traceback--><p><strong>Interactive interpreter (terminal session)</strong> — Typing python3 in a terminal starts an interactive session marked by the &gt;&gt;&gt; prompt. Each line you type is run at once and its result is shown straight away, which makes it ideal for trying out a single idea. You leave with exit() (or Ctrl-D on Linux/macOS, Ctrl-Z then Enter on Windows).<br><em>e.g.</em> &gt;&gt;&gt; 2 + 3 shows 5 immediately.</p><p><strong>Script file (.py)</strong> — Real programs are saved as files ending in .py and run as a whole. The extension tells the editor the file holds Python, so it can colour the syntax and knows how to run it. In a script, a bare expression such as 2 + 3 is evaluated but nothing appears unless you print it.<br><em>e.g.</em> hello_world.py containing print(\"Hello Python world!\")</p><p><strong>Hello World as a smoke test</strong> — Printing a single greeting is the traditional first program. Its real job is to prove the toolchain works end to end: if one print call runs, the interpreter, editor and file setup are all correct.</p><p><strong>Exact syntax and the traceback</strong> — Python expects precise syntax: print must be lowercase, quotes and brackets must pair up, and a missing colon can stop a program. When something serious goes wrong Python prints a traceback, a report that points to the file, line and kind of error. Read it from the bottom line up.<br><em>e.g.</em> Print(\"Hi\") ends with NameError: name 'Print' is not defined.</p><p><strong>Cross-platform language</strong> — Python runs on all the major operating systems, so a program written on one machine runs on any other with Python installed. Only the installation and setup steps differ between Windows, macOS and Linux.</p><p><strong>Python 2 versus Python 3 (background)</strong> — The book was written while both versions were in use and tells readers to prefer Python 3. Python 2 is now retired; everything in this course is Python 3. The visible difference you may meet in old code is print written without parentheses, which is a SyntaxError in Python 3.</p><div class=\"def\"><b>Book vs lecture — Where you write and run Python.</b> Book: Install Python 3 locally, add it to PATH on Windows, write code in a text editor (Geany or Sublime Text) and run .py files or the &gt;&gt;&gt; terminal session. Lecture: The course uses Google Colab: zero setup, runs in the browser, code runs cell by cell, and notebooks are saved as .ipynb in Google Drive. <b>For quizzes, answer setup questions with the Colab facts from the lecture. Keep from the book only the general ideas (interpreter prompt, .py scripts, tracebacks).</b></div><div class=\"def\"><b>Book vs lecture — Editor vs IDE.</b> Book: Calls Geany and Sublime Text simple text editors that also run your code. Lecture: Separates a source code editor (writing and editing only) from an IDE (editor + runner + debugger), and lists Colab as an IDE. <b>If asked to classify a tool, use the lecture's editor vs IDE split. Don't infer from the book that any editor that runs code is 'just an editor'.</b></div>"
    },
    {
     "t": "Textbook: Variables and Simple Data Types",
     "src": "Python Crash Course ch2",
     "h": "<p>A variable is a name attached to a value, and the value can be replaced at any time; Python always uses the current one. The chapter sets the naming rules (letters, digits, underscores, no leading digit, no spaces, avoid keywords) and shows how to read the two errors beginners hit first: NameError for an unknown or misspelled name, and SyntaxError for code Python can't parse, such as an apostrophe inside single quotes. It introduces strings and their methods (title, upper, lower, the three strips), building text with + and str(), and laying out output with \\t and \\n. Numbers come next: integers and floats, ** for powers, order of operations, why / always returns a float, and why 0.1-style decimals can show tiny rounding noise. It closes with # comments and the Zen of Python's preference for simple, readable code, which matters for anyone who will later read or review code that others, or an LLM, have written.</p><!--viz:foc-pcc1-strip--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table: lstrip removes the spaces on the left of '  chai  ', rstrip those on the right, strip both; s itself keeps its spaces until reassigned.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Which side does each strip remove?</div><p style=\"font-size:13.5px;margin:0 0 6px\"><span style=\"font-family:var(--mono)\">s = \"  chai  \"</span>   <span style=\"color:var(--ink-3)\">shaded = a space</span></p><div class=\"scroller\"><table><thead><tr><th>Call</th><th>Result</th></tr></thead><tbody><tr><td><span style=\"font-family:var(--mono)\">s.lstrip()</span></td><td><span style=\"font-family:var(--mono)\">'chai<span style=\"background:var(--clay-soft);border-radius:3px\">&nbsp;&nbsp;</span>'</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">s.rstrip()</span></td><td><span style=\"font-family:var(--mono)\">'<span style=\"background:var(--clay-soft);border-radius:3px\">&nbsp;&nbsp;</span>chai'</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">s.strip()</span></td><td><span style=\"font-family:var(--mono)\">'chai'</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">s</span> afterwards</td><td style=\"background:var(--surface-2)\"><span style=\"font-family:var(--mono)\">'<span style=\"background:var(--clay-soft);border-radius:3px\">&nbsp;&nbsp;</span>chai<span style=\"background:var(--clay-soft);border-radius:3px\">&nbsp;&nbsp;</span>'</span> unchanged</td></tr><tr><td><span style=\"font-family:var(--mono)\">s = s.strip()</span></td><td style=\"background:var(--good-soft)\"><span style=\"font-family:var(--mono)\">'chai'</span> now kept</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Strip methods return a new string; s keeps its spaces until you write s = s.strip().</figcaption></figure><!--/viz:foc-pcc1-strip--><!--viz:foc-pcc1-int-float--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table of seven expressions with results and types: / always gives a float, // between ints gives an int, mixing an int with a float gives a float, and 0.1 + 0.2 shows a rounding tail.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">When does Python give a float?</div><div class=\"scroller\"><table><thead><tr><th>Expression</th><th>Result</th><th>Type</th></tr></thead><tbody><tr><td><span style=\"font-family:var(--mono)\">7 / 2</span></td><td><span style=\"font-family:var(--mono)\">3.5</span></td><td style=\"background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">float</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">8 / 2</span></td><td><span style=\"font-family:var(--mono)\">4.0</span></td><td style=\"background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">float</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">7 // 2</span></td><td><span style=\"font-family:var(--mono)\">3</span></td><td style=\"\"><span style=\"font-family:var(--mono)\">int</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">2 + 3</span></td><td><span style=\"font-family:var(--mono)\">5</span></td><td style=\"\"><span style=\"font-family:var(--mono)\">int</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">2 + 3.0</span></td><td><span style=\"font-family:var(--mono)\">5.0</span></td><td style=\"background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">float</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">2 * 3.5</span></td><td><span style=\"font-family:var(--mono)\">7.0</span></td><td style=\"background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">float</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">0.1 + 0.2</span></td><td><span style=\"font-family:var(--mono)\">0.30000000000000004</span></td><td style=\"background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">float</span></td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">/ always returns a float, even 8 / 2; one float anywhere makes the answer a float.</figcaption></figure><!--/viz:foc-pcc1-int-float--><!--viz:foc-pcc1-str-concat--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three attempts to join a string with the integer 21: plus fails with a TypeError, while str(age) and an f-string both give Asha turns 21.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Joining text and a number</div><p style=\"font-size:13.5px;margin:0 0 6px\"><span style=\"font-family:var(--mono)\">age = 21</span></p><div style=\"font-size:14px\"><div style=\"display:flex;flex-wrap:wrap;gap:4px 10px;align-items:baseline;padding:7px 10px;border-left:3px solid var(--bad);background:var(--bad-soft);border-radius:0 4px 4px 0;margin-bottom:5px\"><b>✗</b><span style=\"font-family:var(--mono);font-size:13.5px\">\"Asha turns \" + age</span><span style=\"color:var(--ink-3)\">→</span><span style=\"font-family:var(--mono);font-size:13px\">TypeError: can only concatenate str (not \"int\") to str</span></div><div style=\"display:flex;flex-wrap:wrap;gap:4px 10px;align-items:baseline;padding:7px 10px;border-left:3px solid var(--good);background:var(--good-soft);border-radius:0 4px 4px 0;margin-bottom:5px\"><b>✓</b><span style=\"font-family:var(--mono);font-size:13.5px\">\"Asha turns \" + str(age)</span><span style=\"color:var(--ink-3)\">→</span><span style=\"font-family:var(--mono);font-size:13px\">Asha turns 21</span></div><div style=\"display:flex;flex-wrap:wrap;gap:4px 10px;align-items:baseline;padding:7px 10px;border-left:3px solid var(--good);background:var(--good-soft);border-radius:0 4px 4px 0;margin-bottom:5px\"><b>✓</b><span style=\"font-family:var(--mono);font-size:13.5px\">f\"Asha turns {age}\"</span><span style=\"color:var(--ink-3)\">→</span><span style=\"font-family:var(--mono);font-size:13px\">Asha turns 21</span></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">+ only joins str to str; convert with str() or let an f-string do it for you.</figcaption></figure><!--/viz:foc-pcc1-str-concat--><p><strong>Variable as a label for a value</strong> — An assignment such as fee = 500 links the name fee to the value 500. Assigning again replaces the value, and every later line sees the newest one. Python runs top to bottom, so a name must be assigned before the line that uses it.<br><em>e.g.</em> fee = 500 then fee = fee + 50 leaves fee holding 550.</p><p><strong>Naming rules vs naming guidelines</strong> — Rules: only letters, digits and underscores; must not start with a digit; no spaces; keywords such as if or while are rejected outright. Guidelines: short but descriptive names, lowercase, and avoid l and O, which look like 1 and 0. Breaking a rule gives an error; ignoring a guideline only makes code harder to read.</p><p><strong>NameError and the traceback</strong> — When Python meets a name it has never seen, it stops with NameError and a traceback giving the file, the line and the bad name. It usually means a typo or a variable used before it was assigned. Python checks that names match, not that they are spelled correctly in English.</p><p><strong>Strings and quote choice</strong> — A string is any sequence of characters inside single or double quotes. Choose the outer quote so it doesn't clash with the text: double quotes around text with an apostrophe, single quotes around text containing double quotes.<br><em>e.g.</em> \"Asha's laptop\" works; 'Asha's laptop' is a SyntaxError.</p><p><strong>String methods and dot notation</strong> — A method is an action attached to a value, called with a dot and brackets: name.title(). title() capitalises the first letter of each word, upper() and lower() change the whole string. lower() is handy for storing user input in one consistent form. These methods return a new string; they never change the original variable.</p><p><strong>Concatenation with +</strong> — + joins strings end to end with nothing added in between, so any spaces or punctuation must be included as strings. Building a message in a variable first keeps the final print line short.<br><em>e.g.</em> first + \" \" + last</p><p><strong>Whitespace characters \\t and \\n</strong> — Whitespace means characters that print as blank space: spaces, tabs and line breaks. Inside a string \\t inserts a tab and \\n starts a new line, so one print call can produce several neatly indented lines.</p><p><strong>Stripping whitespace</strong> — rstrip() removes whitespace on the right, lstrip() on the left, strip() on both sides. To a program 'python' and 'python ' are different strings, which matters when comparing usernames. The result must be stored back (x = x.strip()) for the change to last.</p><p><strong>SyntaxError</strong> — A SyntaxError means Python can't parse a line as valid code: an unmatched quote, a missing bracket, a keyword used as a name. It is the least specific kind of error, so check the line indicated and the one before it.</p><p><strong>Integer arithmetic and order of operations</strong> — +, -, * and / work as usual and ** raises to a power. Python follows the usual precedence: powers first, then * and /, then + and -. Brackets override that order. Spaces around operators don't change the result.<br><em>e.g.</em> 2 + 3 * 4 is 14; (2 + 3) * 4 is 20.</p><p><strong>Floats and division</strong> — Any number written with a decimal point is a float. In Python 3, / always returns a float, even when the division is exact (8 / 4 gives 2.0). Some decimal results show tiny noise such as 0.30000000000000004 because of how computers store fractions in binary. This happens in every language.</p><p><strong>str() to avoid TypeError</strong> — + cannot join a string and an integer; Python raises TypeError instead of guessing. Wrap the number in str() to turn it into text first.<br><em>e.g.</em> \"Seat \" + str(14)</p><p><strong>Comments</strong> — Everything after # on a line is ignored by the interpreter. Comments explain what the code is meant to do and why a particular approach was chosen, for your future self and for teammates. The book's advice: if you had to think about several approaches, write a comment.</p><p><strong>The Zen of Python</strong> — Typing import this prints Tim Peters's short list of Python design principles. The ones the chapter stresses: beautiful over ugly, simple over complex, readability counts, one obvious way to do it, and now is better than never.</p><div class=\"card\"><strong>Case: The birthday message</strong> <em>(birthday.py, section 'Avoiding Type Errors with the str() Function')</em><p>A program tries to build a birthday greeting by joining text with an age stored as an integer. Python refuses with a TypeError because it won't guess whether the number should be treated as a number or as characters. Wrapping the age in str() fixes it.</p><p><em>Lesson:</em> Strings and numbers are different types; convert explicitly with str() before concatenating.</p><p><em>Think:</em> Rewrite the faulty line so it prints a greeting for a 19th birthday, then explain why Python doesn't convert the integer automatically.</p></div><div class=\"card\"><strong>Case: The Zen of Python</strong> <em>(Section 'The Zen of Python' (import this))</em><p>The book contrasts Perl's 'more than one way to do it' culture, flexible but hard to maintain on big projects, with Python's guiding principles by Tim Peters. It picks out a handful: beauty, simplicity, readability, one obvious way, and getting working code done now.</p><p><em>Lesson:</em> Readable, simple code is easier to maintain and review, especially in team projects.</p><p><em>Think:</em> Give one example where 'simple is better than complex' would change how you write a short Python program.</p></div><details><summary>Worked problem: Clean up and greet a user</summary><p>A form stores a name as '   priya sharma ' (spaces at both ends). Write code that stores a cleaned version back in the same variable and prints: Welcome, Priya Sharma!</p><ol><li>Start with name = '   priya sharma '.</li><li>Remove spaces at both ends and store the result back: name = name.strip().</li><li>Build the message with concatenation and title case: message = \"Welcome, \" + name.title() + \"!\".</li><li>print(message).</li></ol><p><strong>Answer:</strong> Output: Welcome, Priya Sharma!</p></details><details><summary>Worked problem: Mix numbers into a message</summary><p>A canteen thali costs ₹85 and a student buys 3. Store both numbers in variables and print: Total: ₹255</p><ol><li>price = 85 and qty = 3.</li><li>total = price * qty gives the integer 255.</li><li>\"Total: ₹\" + total would raise TypeError, so convert first: \"Total: ₹\" + str(total).</li><li>print(\"Total: ₹\" + str(total)).</li></ol><p><strong>Answer:</strong> Output: Total: ₹255</p></details><div class=\"def\"><b>Book vs lecture — Using print (or another built-in name) as a variable.</b> Book: Says to avoid keywords and function names such as print, saying only that breaking 'some' of these rules causes errors. Lecture: The hub lists print alongside if, else, while, return and try under 'Rules — breaking these is an error'. <b>For an MCQ that asks what you should avoid, both say the same: don't use them. If a question asks exactly what happens: a keyword (if, while, return, try, else) is a SyntaxError immediately, while a built-in name like print is accepted and only breaks when print() is next called (TypeError). Verified in Python 3.</b></div><div class=\"def\"><b>Book vs lecture — TypeError message wording.</b> Book: Shows the old message: Can't convert 'int' object to str implicitly. Lecture: Lecture just calls it a TypeError fixed with str(). <b>Modern Python 3 prints: can only concatenate str (not \"int\") to str. Either way the error type, TypeError, is what gets tested.</b></div>"
    }
   ]
  },
  {
   "id": "lists",
   "title": "Lists, slicing &amp; tuples",
   "tag": "Lectures 11–13, 15, 16, 19",
   "lede": "Five lectures — the largest Python block, and the most recent, so it is fresh in the question-setter's mind too.",
   "topics": [
    {
     "t": "Creating and accessing lists",
     "src": "L11 · slides 174–175",
     "h": "\n  <div class=\"def\">A <b>list</b> is a collection of items in a particular order. Items need not be related or of the same type. Convention: name it in the plural.</div>\n  <pre>bicycles = ['Trek', 'Cannondale', 'Red Line', 'Specialized']\nprint(bicycles)      <span class=\"c\"># ['Trek', 'Cannondale', 'Red Line', 'Specialized']</span>\nprint(bicycles[0])   <span class=\"o\"># Trek</span>\nprint(bicycles[-1])  <span class=\"o\"># Specialized  ← always the last item</span>\nprint(bicycles[0].title())</pre>\n  <ul>\n   <li><strong>Index positions start at 0, not 1.</strong> Second item is <code>[1]</code>.</li>\n   <li><strong>Negative indexing:</strong> <code>[-1]</code> last, <code>[-2]</code> second-to-last. Useful when you don't know the length.</li>\n   <li>String methods apply to accessed elements: <code>bicycles[0].title()</code>.</li>\n   <li>Modify in place: <code>motorcycles[0] = 'Ducati'</code>.</li>\n  </ul><!--viz:foc-list-indices--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"A five-item list drawn as boxes, with indices 0 to 4 above and -5 to -1 below, plus example lookups and the IndexError for index 5.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Every item has two addresses</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 214\" role=\"img\" aria-label=\"Five boxes for goa, pune, agra, delhi, surat with positive indices 0 to 4 above and negative indices -5 to -1 below.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><text x=\"20\" y=\"22\" text-anchor=\"start\" style=\"fill:var(--blue);font-size:13px\">positive: count from the front, starting at 0</text><rect x=\"20\" y=\"50\" width=\"80\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"60\" y=\"75\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'goa'</text><text x=\"60\" y=\"42\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-family:var(--mono);font-weight:700\">0</text><text x=\"60\" y=\"108\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-family:var(--mono);font-weight:700\">−5</text><rect x=\"100\" y=\"50\" width=\"80\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"140\" y=\"75\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'pune'</text><text x=\"140\" y=\"42\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-family:var(--mono);font-weight:700\">1</text><text x=\"140\" y=\"108\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-family:var(--mono);font-weight:700\">−4</text><rect x=\"180\" y=\"50\" width=\"80\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"220\" y=\"75\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'agra'</text><text x=\"220\" y=\"42\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-family:var(--mono);font-weight:700\">2</text><text x=\"220\" y=\"108\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-family:var(--mono);font-weight:700\">−3</text><rect x=\"260\" y=\"50\" width=\"80\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"300\" y=\"75\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'delhi'</text><text x=\"300\" y=\"42\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-family:var(--mono);font-weight:700\">3</text><text x=\"300\" y=\"108\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-family:var(--mono);font-weight:700\">−2</text><rect x=\"340\" y=\"50\" width=\"80\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"380\" y=\"75\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'surat'</text><text x=\"380\" y=\"42\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-family:var(--mono);font-weight:700\">4</text><text x=\"380\" y=\"108\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-family:var(--mono);font-weight:700\">−1</text><text x=\"20\" y=\"130\" text-anchor=\"start\" style=\"fill:var(--clay);font-size:13px\">negative: count from the back, starting at −1</text><text x=\"20\" y=\"160\" text-anchor=\"start\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">cities[0] → 'goa'</text><text x=\"230\" y=\"160\" text-anchor=\"start\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">cities[-1] → 'surat'</text><text x=\"20\" y=\"180\" text-anchor=\"start\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">cities[2] → 'agra'</text><text x=\"230\" y=\"180\" text-anchor=\"start\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">cities[-2] → 'delhi'</text><text x=\"20\" y=\"200\" text-anchor=\"start\" style=\"fill:var(--bad);font-size:13px;font-family:var(--mono)\">cities[5] → IndexError: list index out of range</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">A list of 5 items ends at index 4, so [5] is out of range; [-1] is always the last item.</figcaption></figure><!--/viz:foc-list-indices-->"
    },
    {
     "t": "Adding and removing — the five methods",
     "src": "L11 · high-probability MCQ",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Operation</th><th>Syntax</th><th>Behaviour</th></tr></thead><tbody>\n   <tr><td><strong>append</strong></td><td><code>lst.append(x)</code></td><td>Adds to the <strong>end</strong></td></tr>\n   <tr><td><strong>insert</strong></td><td><code>lst.insert(i, x)</code></td><td>Adds at index <code>i</code>; everything at and after <code>i</code> shifts right</td></tr>\n   <tr><td><strong>del</strong></td><td><code>del lst[i]</code></td><td><strong>Statement, not a method.</strong> Deletes by position. Value is gone for good</td></tr>\n   <tr><td><strong>pop</strong></td><td><code>lst.pop()</code> / <code>lst.pop(i)</code></td><td>Removes <strong>and returns</strong> the item. No argument → removes the <strong>last</strong> one</td></tr>\n   <tr><td><strong>remove</strong></td><td><code>lst.remove(value)</code></td><td>Removes <strong>by value</strong>, not position. Only the <strong>first occurrence</strong></td></tr>\n  </tbody></table></div>\n  <div class=\"def\">Choosing between them: <b>del</b> when you're finished with the value · <b>pop</b> when you still need it · <b>remove</b> when you know the value but not the position.</div>\n  <p style=\"font-size:14.5px\">Think of <code>pop()</code> as taking the top plate off a stack. To remove every occurrence of a repeated value, loop.</p><!--viz:foc-five-methods--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table applying append, insert, del, pop with and without an index, and remove to the list a, b, c, b, showing the list afterwards and what each returns.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The five operations on one list</div><p style=\"font-size:13.5px;margin:0 0 6px;font-family:var(--mono)\">s = ['a', 'b', 'c', 'b']   <span style=\"color:var(--ink-3)\">← every row starts from this</span></p><div class=\"scroller\"><table><thead><tr><th>Operation</th><th>s afterwards</th><th>Returns</th></tr></thead><tbody><tr><td><span style=\"font-family:var(--mono)\">s.append('d')</span></td><td><span style=\"font-family:var(--mono)\">['a', 'b', 'c', 'b', <span style=\"background:var(--good-soft);border-radius:3px\">'d'</span>]</span></td><td><span style=\"font-family:var(--mono)\">None</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">s.insert(1, 'd')</span></td><td><span style=\"font-family:var(--mono)\">['a', <span style=\"background:var(--good-soft);border-radius:3px\">'d'</span>, 'b', 'c', 'b']</span></td><td><span style=\"font-family:var(--mono)\">None</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">del s[1]</span></td><td><span style=\"font-family:var(--mono)\">['a', 'c', 'b']</span></td><td>— (a statement)</td></tr><tr><td><span style=\"font-family:var(--mono)\">s.pop()</span></td><td><span style=\"font-family:var(--mono)\">['a', 'b', 'c']</span></td><td style=\"background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">'b'</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">s.pop(1)</span></td><td><span style=\"font-family:var(--mono)\">['a', 'c', 'b']</span></td><td style=\"background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">'b'</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">s.remove('b')</span></td><td><span style=\"font-family:var(--mono)\">['a', 'c', 'b']</span></td><td><span style=\"font-family:var(--mono)\">None</span></td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">del s[1], s.pop(1) and s.remove('b') leave the same list here; only pop hands the value back, and remove matched the first 'b'.</figcaption></figure><!--/viz:foc-five-methods-->"
    },
    {
     "t": "Organising: sort, sorted, reverse, len",
     "src": "L12 · exam-critical distinction",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Permanent?</th><th>Syntax</th><th>Returns</th></tr></thead><tbody>\n   <tr><td><code>sort()</code></td><td><strong>Yes — permanent</strong></td><td><code>cars.sort()</code> · <code>cars.sort(reverse=True)</code></td><td>Nothing; changes the list</td></tr>\n   <tr><td><code>sorted()</code></td><td><strong>No — temporary</strong></td><td><code>sorted(cars)</code> · <code>sorted(cars, reverse=True)</code></td><td>A new sorted list; original untouched</td></tr>\n   <tr><td><code>reverse()</code></td><td><strong>Yes — permanent</strong></td><td><code>cars.reverse()</code></td><td>Nothing; inverts order</td></tr>\n   <tr><td><code>len()</code></td><td>—</td><td><code>len(cars)</code></td><td>Number of items</td></tr>\n  </tbody></table></div>\n  <pre>cars = ['BMW', 'Audi', 'Toyota', 'Subaru']\ncars.sort()                  <span class=\"o\"># ['Audi', 'BMW', 'Subaru', 'Toyota']  permanent</span>\ncars.sort(reverse=True)      <span class=\"o\"># ['Toyota', 'Subaru', 'BMW', 'Audi']</span>\nprint(sorted(cars))          <span class=\"o\"># sorted copy — cars itself is unchanged</span>\ncars.reverse()               <span class=\"o\"># just flips the order, no alphabetising</span>\nlen(cars)                    <span class=\"o\"># 4</span></pre>\n  <ul>\n   <li><code>sort</code> and <code>reverse</code> are <strong>methods</strong> (dot notation). <code>sorted</code> and <code>len</code> are <strong>functions</strong> (the list goes in parentheses).</li>\n   <li><code>reverse()</code> does <strong>not</strong> alphabetise — it only inverts. Apply it twice to restore.</li>\n  </ul>\n  <div class=\"warnbox\"><b>IndexError: list index out of range.</b> A list of length 4 has indices <b>0, 1, 2, 3</b> — <code>lst[4]</code> fails. Classic off-by-one. Any index on an empty list errors.</div>"
    },
    {
     "t": "Looping and indentation errors",
     "src": "L13",
     "h": "\n  <pre>for magician in magicians:\n    print(magician.title())\n    print(\"That was a great trick!\")\nprint(\"Thank you, everyone.\")   <span class=\"c\"># runs once, after the loop</span></pre>\n  <p style=\"font-size:14.5px\">Python takes each value in turn, stores it in the loop variable, runs every <strong>indented</strong> line, then moves on. The loop ends automatically.</p>\n  <div class=\"scroller\"><table><thead><tr><th>Mistake</th><th>Result</th></tr></thead><tbody>\n   <tr><td>No indentation after <code>for</code></td><td><strong>Syntax error:</strong> “expected an indented block” — won't run</td></tr>\n   <tr><td>Forgetting to indent an <em>additional</em> line</td><td><strong>Logical error — no error message.</strong> Runs once after the loop, using only the <strong>last</strong> value. Wrong output, silently</td></tr>\n   <tr><td>Unnecessary indentation</td><td><strong>Syntax error:</strong> “unexpected indent”</td></tr>\n   <tr><td>Missing colon after <code>for</code></td><td><strong>Syntax error:</strong> expected colon</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>The one that's tested:</b> of these four, only “forgot to indent an extra line” produces no error. It's a <em>logical</em> error — the program runs and gives the wrong answer.</div><!--viz:foc-error-types--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table of SyntaxError, IndentationError, NameError, TypeError and IndexError, each with a one- or two-line trigger, plus a logical error that gives no message.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Five errors, one trigger each</div><div class=\"scroller\"><table><thead><tr><th>Error</th><th>Smallest trigger</th><th>What it means</th></tr></thead><tbody><tr><td><b style=\"font-family:var(--mono);font-size:13.5px\">SyntaxError</b></td><td><span style=\"font-family:var(--mono)\">print(\"hi\"</span></td><td>grammar broken (bracket never closed); nothing runs</td></tr><tr><td><b style=\"font-family:var(--mono);font-size:13.5px\">IndentationError</b></td><td><span style=\"font-family:var(--mono)\">for x in [1, 2]:<br>print(x)</span></td><td>loop body not indented; a kind of SyntaxError</td></tr><tr><td><b style=\"font-family:var(--mono);font-size:13.5px\">NameError</b></td><td><span style=\"font-family:var(--mono)\">print(totl)</span></td><td>name never defined, or misspelt</td></tr><tr><td><b style=\"font-family:var(--mono);font-size:13.5px\">TypeError</b></td><td><span style=\"font-family:var(--mono)\">\"Age: \" + 21</span></td><td>operation on the wrong types: str + int</td></tr><tr><td><b style=\"font-family:var(--mono);font-size:13.5px\">IndexError</b></td><td><span style=\"font-family:var(--mono)\">nums = [1, 2, 3]<br>nums[3]</span></td><td>position past the end; the last index is 2</td></tr><tr><td style=\"background:var(--clay-soft)\"><b style=\"font-family:var(--mono);font-size:13.5px\">no error</b></td><td><span style=\"font-family:var(--mono)\">for x in [1, 2]:<br>&nbsp;&nbsp;&nbsp;&nbsp;y = x * 10<br>print(y)</span></td><td>logical error: runs and prints 20, the last value only</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Read the last line of a traceback first: it names the error. Logical errors give no message at all.</figcaption></figure><!--/viz:foc-error-types-->"
    },
    {
     "t": "range(), numerical lists and comprehensions",
     "src": "L15",
     "h": "\n  <pre>for value in range(1, 5):   <span class=\"o\"># 1, 2, 3, 4 — the end value is EXCLUDED</span>\nnumbers = list(range(1, 6))        <span class=\"o\"># [1, 2, 3, 4, 5]</span>\neven = list(range(2, 11, 2))       <span class=\"o\"># [2, 4, 6, 8, 10]  third arg = step</span></pre>\n  <ul>\n   <li><strong><code>range()</code> excludes its end value.</strong> To include 5, write <code>range(1, 6)</code>.</li>\n   <li>Third argument is the <strong>step</strong> — used for odd numbers, multiples of 3, and so on.</li>\n   <li><code>list()</code> converts a range into an actual list.</li>\n  </ul>\n  <h4>Statistics on numerical lists</h4>\n  <pre>digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\nmin(digits)   <span class=\"o\"># 0</span>\nmax(digits)   <span class=\"o\"># 9</span>\nsum(digits)   <span class=\"o\"># 45</span></pre>\n  <h4>List comprehension</h4>\n  <pre><span class=\"c\"># the long way — three lines</span>\nsquares = []\nfor value in range(1, 11):\n    squares.append(value ** 2)\n\n<span class=\"c\"># the comprehension — one line</span>\nsquares = [value ** 2 for value in range(1, 11)]</pre>\n  <p style=\"font-size:14.5px\">Structure: <code>[expression for variable in range()]</code>. The <strong>expression comes first</strong>.</p>\n  <div class=\"warnbox\"><b>No colon</b> at the end of the <code>for</code> in a comprehension — unlike a normal <code>for</code> loop, which requires one. This is the detail most likely to be tested.</div><!--viz:foc-range-steps--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Number line from 0 to 10: range(1, 10, 2) starts at 1 and hops by 2 to 3, 5, 7 and 9; 10 is the stop and is not included.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">range(start, stop, step) on a number line</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 196\" role=\"img\" aria-label=\"Number line 0 to 10 with 1, 3, 5, 7 and 9 highlighted and hops of plus 2 between them; 10 is marked as the excluded stop.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><text x=\"20\" y=\"24\" text-anchor=\"start\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono);font-weight:700\">range(1, 10, 2)</text><path d=\"M14,112 L426,112\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><circle cx=\"30\" cy=\"112\" r=\"13\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"30\" y=\"117\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">0</text><circle cx=\"68\" cy=\"112\" r=\"13\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"68\" y=\"117\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono);font-weight:700\">1</text><circle cx=\"106\" cy=\"112\" r=\"13\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"106\" y=\"117\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">2</text><circle cx=\"144\" cy=\"112\" r=\"13\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"144\" y=\"117\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono);font-weight:700\">3</text><circle cx=\"182\" cy=\"112\" r=\"13\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"182\" y=\"117\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">4</text><circle cx=\"220\" cy=\"112\" r=\"13\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"220\" y=\"117\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono);font-weight:700\">5</text><circle cx=\"258\" cy=\"112\" r=\"13\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"258\" y=\"117\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">6</text><circle cx=\"296\" cy=\"112\" r=\"13\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"296\" y=\"117\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono);font-weight:700\">7</text><circle cx=\"334\" cy=\"112\" r=\"13\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"334\" y=\"117\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">8</text><circle cx=\"372\" cy=\"112\" r=\"13\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"372\" y=\"117\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono);font-weight:700\">9</text><circle cx=\"410\" cy=\"112\" r=\"13\" style=\"fill:var(--surface);stroke:var(--clay);stroke-dasharray:3 3;stroke-width:1.5\"/><text x=\"410\" y=\"117\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">10</text><path d=\"M68,97 Q106.0,62 142,95\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/><path d=\"M138,88 L146,90 L141,97 Z\" style=\"fill:var(--blue)\"/><text x=\"106.0\" y=\"68\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">+2</text><path d=\"M144,97 Q182.0,62 218,95\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/><path d=\"M214,88 L222,90 L217,97 Z\" style=\"fill:var(--blue)\"/><text x=\"182.0\" y=\"68\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">+2</text><path d=\"M220,97 Q258.0,62 294,95\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/><path d=\"M290,88 L298,90 L293,97 Z\" style=\"fill:var(--blue)\"/><text x=\"258.0\" y=\"68\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">+2</text><path d=\"M296,97 Q334.0,62 370,95\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/><path d=\"M366,88 L374,90 L369,97 Z\" style=\"fill:var(--blue)\"/><text x=\"334.0\" y=\"68\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">+2</text><text x=\"68\" y=\"146\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">start 1</text><text x=\"428\" y=\"146\" text-anchor=\"end\" style=\"fill:var(--clay);font-size:13px\">stop 10: excluded</text><text x=\"20\" y=\"180\" text-anchor=\"start\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">list(range(1, 10, 2)) → [1, 3, 5, 7, 9]</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Start is included, stop never is; the step is the size of each hop.</figcaption></figure><!--/viz:foc-range-steps-->"
    },
    {
     "t": "Slicing",
     "src": "L15",
     "h": "\n  <pre>players[0:3]   <span class=\"o\"># indices 0, 1, 2 — end is EXCLUDED</span>\nplayers[:3]    <span class=\"o\"># omit start → begins at 0</span>\nplayers[2:]    <span class=\"o\"># omit end → runs to the end</span>\nplayers[:]     <span class=\"o\"># omit both → the whole list</span>\nplayers[-3:]   <span class=\"o\"># the last three</span>\n\nfor player in players[:3]:\n    print(player.title())</pre>\n  <p style=\"font-size:14.5px\"><strong>Start is inclusive, end is exclusive</strong> — the same rule as <code>range()</code>. Slicing doesn't modify the original list.</p><!--viz:foc-slicing-cuts--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Six boxes a to f with cut positions 0 to 6 on the edges; cuts 1 and 4 are highlighted and the slice keeps b, c and d.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Slicing: cut between the items</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 190\" role=\"img\" aria-label=\"Six boxes a to f with cut numbers 0 to 6 on the edges between them; the slice 1 to 4 keeps b, c and d.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><text x=\"40\" y=\"22\" text-anchor=\"start\" style=\"fill:var(--ink-3);font-size:13px\">slice numbers are cuts between items</text><rect x=\"40\" y=\"60\" width=\"60\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"70\" y=\"86\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'a'</text><rect x=\"100\" y=\"60\" width=\"60\" height=\"40\" rx=\"0\" style=\"fill:var(--blue-soft);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"130\" y=\"86\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'b'</text><rect x=\"160\" y=\"60\" width=\"60\" height=\"40\" rx=\"0\" style=\"fill:var(--blue-soft);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"190\" y=\"86\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'c'</text><rect x=\"220\" y=\"60\" width=\"60\" height=\"40\" rx=\"0\" style=\"fill:var(--blue-soft);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"250\" y=\"86\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'d'</text><rect x=\"280\" y=\"60\" width=\"60\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"310\" y=\"86\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'e'</text><rect x=\"340\" y=\"60\" width=\"60\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"370\" y=\"86\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'f'</text><text x=\"40\" y=\"46\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">0</text><text x=\"100\" y=\"46\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-family:var(--mono);font-weight:700\">1</text><path d=\"M100,54 L100,108\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><text x=\"160\" y=\"46\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">2</text><text x=\"220\" y=\"46\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">3</text><text x=\"280\" y=\"46\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-family:var(--mono);font-weight:700\">4</text><path d=\"M280,54 L280,108\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><text x=\"340\" y=\"46\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">5</text><text x=\"400\" y=\"46\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">6</text><path d=\"M100,112 L100,118 L280,118 L280,112\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/><text x=\"190\" y=\"142\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono);font-weight:700\">team[1:4] → ['b', 'c', 'd']</text><text x=\"40\" y=\"172\" text-anchor=\"start\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">team[:2] → ['a', 'b']</text><text x=\"240\" y=\"172\" text-anchor=\"start\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">team[-2:] → ['e', 'f']</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">[1:4] keeps what lies between cut 1 and cut 4, which is why the stop item is never included.</figcaption></figure><!--/viz:foc-slicing-cuts-->"
    },
    {
     "t": "Copying lists, and tuples",
     "src": "L16",
     "h": "\n  <div class=\"def\"><b>Lecture 16.</b> Taught just after the Quiz 1 cut-off (Working with Lists Part 2), so it wasn't in Quiz 1. It is core course material: expect it in later quizzes and the final exam.</div>\n\n  <h4>Copy vs reference — the single best MCQ in this chapter</h4>\n  <pre><span class=\"c\"># ✓ a real, independent copy</span>\nfriend_foods = my_foods[:]\n\n<span class=\"c\"># ✗ NOT a copy — a second name for the SAME list</span>\nfriend_foods = my_foods</pre>\n  <p style=\"font-size:14.5px\">With plain assignment, appending to either name changes both, because both variables point at one list. With <code>[:]</code> they are genuinely separate.</p>\n  <div class=\"def\"><b>Tuple</b> = an immutable list. Values cannot be changed, added or removed after creation. Use <b>parentheses</b> <code>()</code> instead of square brackets.</div>\n  <pre>dimensions = (200, 50)\ndimensions[0]          <span class=\"o\"># 200 — reading works exactly like a list</span>\nfor d in dimensions:   <span class=\"o\"># looping works exactly like a list</span>\n\ndimensions[0] = 250    <span class=\"o\"># TypeError: 'tuple' object does not support item assignment</span>\ndimensions = (400, 100) <span class=\"o\"># ✓ allowed — reassigning the whole variable</span></pre>\n  <div class=\"warnbox\"><b>The nuance:</b> you cannot change an <em>element</em> of a tuple, but you <em>can</em> rebind the whole variable to a new tuple. Both halves get tested.</div>\n  <p style=\"font-size:14.5px\">Choose lists for data that changes; tuples for data that must not.</p>"
    },
    {
     "t": "Live Lecture 4: list operations worked through",
     "src": "L#19",
     "h": "\n<h4>Which bracket makes what</h4>\n<div class=\"scroller\"><table><thead><tr><th>After <code>=</code> you open…</th><th>Python makes a…</th><th>Empty one</th></tr></thead><tbody>\n<tr><td>square brackets <code>[ ]</code></td><td>list</td><td><code>bicycles = []</code></td></tr>\n<tr><td>curly braces <code>{ }</code></td><td>dictionary (L21)</td><td><code>alien = {}</code></td></tr>\n<tr><td>parentheses <code>( )</code></td><td>tuple</td><td><code>dims = ()</code></td></tr>\n</tbody></table></div>\n<h4>Assigning to an index replaces; it does not insert</h4>\n<pre>motorcycles = ['honda', 'yamaha', 'suzuki']\nmotorcycles[0] = 'ducati'\nprint(motorcycles)\n<span class=\"c\"># prints:</span>\n<span class=\"o\">['ducati', 'yamaha', 'suzuki']</span></pre>\n<p style=\"font-size:14.5px\">He asked the class what this gives, and the trap is to expect Ducati to be added in front. Position 0 now <em>points to</em> a different value, so Honda is gone. To add without losing anything, use <code>append()</code> (end) or <code>insert()</code> (any position).</p>\n<h4>The insert poll</h4>\n<pre>motorcycles = ['honda', 'yamaha', 'suzuki']\nmotorcycles.insert(1, 'ducati')\nprint(motorcycles)\nmotorcycles = ['honda', 'yamaha', 'suzuki']\nmotorcycles.insert(0, 'ducati')\nprint(motorcycles)\n<span class=\"c\"># prints:</span>\n<span class=\"o\">['honda', 'ducati', 'yamaha', 'suzuki']</span>\n<span class=\"o\">['ducati', 'honda', 'yamaha', 'suzuki']</span></pre>\n<p style=\"font-size:14.5px\">To put Ducati <em>first</em> you need index 0, because indexes start at 0. Several students answered 1 in class.</p>\n<h4>del vs pop: do you still need the value?</h4>\n<pre>motorcycles = ['honda', 'yamaha', 'suzuki']\nfirst_owned = motorcycles.pop(1)\nprint(motorcycles)\nprint(\"The first motorcycle I owned was a \" + first_owned.title() + \".\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">['honda', 'suzuki']</span>\n<span class=\"o\">The first motorcycle I owned was a Yamaha.</span></pre>\n<p style=\"font-size:14.5px\"><code>del</code> deletes and keeps nothing. <code>pop()</code> removes the last item (or the one at the index you give) and hands it back so you can store it.</p>\n<h4>Removing every copy of a value</h4>\n<p style=\"font-size:14.5px\"><code>remove()</code> deletes only the <strong>first</strong> occurrence. To remove all five Rahuls from a class list of 800, he said you need a loop. Be careful which loop: removing items from a list <em>while a for loop walks over that same list</em> makes it skip the item that slides into the gap:</p>\n<pre>names = ['rahul', 'rahul', 'amit']\nfor name in names:\n    if name == 'rahul':\n        names.remove(name)\nprint(names)\n<span class=\"c\"># prints:</span>\n<span class=\"o\">['rahul', 'amit']</span></pre>\n<p style=\"font-size:14.5px\">One Rahul survives. A safe version repeats <code>remove()</code> for as long as the value is still there:</p>\n<pre>names = ['rahul', 'rahul', 'amit']\nwhile 'rahul' in names:\n    names.remove('rahul')\nprint(names)\n<span class=\"c\"># prints:</span>\n<span class=\"o\">['amit']</span></pre>\n<h4>Exercise: the seven-step shipment list</h4>\n<p style=\"font-size:14.5px\">His exam-style exercise, solved and run. Each step changes the list the next step works on:</p>\n<pre>starting_inventory = ['router', 'switch', 'firewall', 'server', 'cable']\nstarting_inventory.remove('server')            # 1 faulty server out\nstarting_inventory.insert(0, 'fiber optic')    # 2 new item at the very front\nstarting_inventory[-1] = 'usb hub'             # 3 replace the last item\nallocated_device = starting_inventory.pop(1)   # 4 pop the second item\nstarting_inventory.append('rack mount')        # 5 add to the end\ndel starting_inventory[2]                      # 6 delete index 2\nprint(starting_inventory)                      # 7 verify\nprint(allocated_device)\n<span class=\"c\"># prints:</span>\n<span class=\"o\">['fiber optic', 'switch', 'usb hub', 'rack mount']</span>\n<span class=\"o\">router</span></pre>\n<p style=\"font-size:14.5px\">Step 4 pops <code>'router'</code>, not <code>'switch'</code>: after step 2 put fiber optic at the front, every item moved one place right, so the second item is now the router.</p>\n<!--viz:foc-inventory-steps--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Trace of the seven-step inventory exercise showing the list after remove, insert at 0, replacing the last item, pop(1) which returns router, append and del at index 2.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The shipment list, step by step</div><div class=\"scroller\"><table><thead><tr><th>Step</th><th>Operation</th><th>List afterwards</th></tr></thead><tbody><tr><td style=\"font-family:var(--mono)\">0</td><td style=\"font-family:var(--mono)\">start</td><td style=\"font-family:var(--mono)\">router, switch, firewall, server, cable</td></tr><tr><td style=\"font-family:var(--mono)\">1</td><td style=\"font-family:var(--mono)\">remove('server')</td><td style=\"font-family:var(--mono)\">router, switch, firewall, cable</td></tr><tr><td style=\"font-family:var(--mono)\">2</td><td style=\"font-family:var(--mono)\">insert(0, 'fiber optic')</td><td style=\"font-family:var(--mono)\">fiber optic, router, switch, firewall, cable</td></tr><tr><td style=\"font-family:var(--mono)\">3</td><td style=\"font-family:var(--mono)\">[-1] = 'usb hub'</td><td style=\"font-family:var(--mono)\">fiber optic, router, switch, firewall, usb hub</td></tr><tr><td style=\"font-family:var(--mono)\">4</td><td style=\"font-family:var(--mono)\">pop(1)</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">fiber optic, switch, firewall, usb hub · returns router</td></tr><tr><td style=\"font-family:var(--mono)\">5</td><td style=\"font-family:var(--mono)\">append('rack mount')</td><td style=\"font-family:var(--mono)\">fiber optic, switch, firewall, usb hub, rack mount</td></tr><tr><td style=\"font-family:var(--mono)\">6</td><td style=\"font-family:var(--mono)\">del [2]</td><td style=\"font-family:var(--mono)\">fiber optic, switch, usb hub, rack mount</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Each step works on the list the previous step left, so positions keep shifting.</figcaption></figure><!--/viz:foc-inventory-steps-->"
    },
    {
     "t": "Textbook: Introducing Lists",
     "src": "Python Crash Course ch3",
     "h": "<p>A list stores many values, in order, under one name. Items are reached by position, counting from 0, and negative indices count back from the end, so [-1] is always the last item. The chapter treats lists as dynamic: change an item by assigning to its index; add items with append() (end) or insert() (any position); remove them with del (by position, value discarded), pop() (by position, value returned) or remove() (by value, first match only). It separates permanent reordering (sort(), reverse()) from temporary display (sorted()), counts items with len(), and explains the off-by-one IndexError. Choosing the right operation, and knowing which ones change the list and which only return something, is the core skill.</p><!--viz:foc-pcc1-sort-vs-sorted--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Two cards: scores.sort() reorders scores itself and returns None; sorted(scores) returns a new sorted list and leaves scores in its original order.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">sort() changes the list; sorted() makes a new one</div><p style=\"font-size:13.5px;margin:0 0 6px\"><span style=\"font-family:var(--mono)\">scores = [72, 95, 58, 81]</span></p><div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:10px 12px\"><div style=\"font-weight:700;margin-bottom:6px\"><span style=\"font-family:var(--mono)\">scores.sort()</span></div><div style=\"font-size:13px;color:var(--ink-3);margin-top:6px\">scores afterwards</div><div style=\"font-family:var(--mono);font-size:13.5px;background:var(--clay-soft);border-radius:3px;padding:1px 4px\">[58, 72, 81, 95]</div><div style=\"font-size:13px;color:var(--ink-3);margin-top:6px\">returns</div><div style=\"font-family:var(--mono);font-size:13.5px\">None</div><div style=\"font-size:13px;color:var(--ink-3);margin-top:6px\">so print(scores.sort()) prints</div><div style=\"font-family:var(--mono);font-size:13.5px\">None</div></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:10px 12px\"><div style=\"font-weight:700;margin-bottom:6px\"><span style=\"font-family:var(--mono)\">new = sorted(scores)</span></div><div style=\"font-size:13px;color:var(--ink-3);margin-top:6px\">new</div><div style=\"font-family:var(--mono);font-size:13.5px;background:var(--blue-soft);border-radius:3px;padding:1px 4px\">[58, 72, 81, 95]</div><div style=\"font-size:13px;color:var(--ink-3);margin-top:6px\">scores afterwards</div><div style=\"font-family:var(--mono);font-size:13.5px;background:var(--good-soft);border-radius:3px;padding:1px 4px\">[72, 95, 58, 81]</div><div style=\"font-size:13px;color:var(--ink-3);margin-top:6px\">returns</div><div style=\"font-family:var(--mono);font-size:13.5px\">a new sorted list</div></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">sort() is permanent and returns None, so never write scores = scores.sort().</figcaption></figure><!--/viz:foc-pcc1-sort-vs-sorted--><!--viz:foc-pcc1-del-pop-remove--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Decision flow: if you know only the value use remove; if you know the position and still need the item use pop; otherwise use del.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">del, pop() or remove()?</div><div style=\"font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);font-weight:700\">Do you know the item's position?</div><div style=\"display:flex;flex-wrap:wrap;gap:4px 8px;align-items:center;margin:5px 0 0 18px\"><span style=\"color:var(--ink-3)\">No, only its value →</span><span style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);font-family:var(--mono);font-size:13.5px\">lst.remove(value)</span><span style=\"color:var(--ink-2);font-size:13px\">deletes the first match only</span></div><div style=\"margin:6px 0 0 18px\"><span style=\"color:var(--ink-3)\">Yes →</span></div><div style=\"margin:4px 0 0 18px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);font-weight:700\">Will you use the item afterwards?</div><div style=\"display:flex;flex-wrap:wrap;gap:4px 8px;align-items:center;margin:5px 0 0 18px\"><span style=\"color:var(--ink-3)\">Yes →</span><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);font-family:var(--mono);font-size:13.5px\">x = lst.pop(i)</span><span style=\"color:var(--ink-2);font-size:13px\">removes and hands it back; no i means the last item</span></div><div style=\"display:flex;flex-wrap:wrap;gap:4px 8px;align-items:center;margin:5px 0 0 18px\"><span style=\"color:var(--ink-3)\">No →</span><span style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);font-family:var(--mono);font-size:13.5px\">del lst[i]</span><span style=\"color:var(--ink-2);font-size:13px\">removes it for good</span></div></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Two questions pick the tool: position or value, then keep it or not.</figcaption></figure><!--/viz:foc-pcc1-del-pop-remove--><!--viz:foc-pcc1-reverse-vs-sort--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table: reverse() on m, z, a, k gives k, a, z, m, simply flipped; sort(reverse=True) gives z, m, k, a in descending order.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">reverse() is not sort(reverse=True)</div><p style=\"font-size:13.5px;margin:0 0 6px\"><span style=\"font-family:var(--mono)\">letters = ['m', 'z', 'a', 'k']</span></p><div class=\"scroller\"><table><thead><tr><th>Call</th><th>letters afterwards</th><th>What it did</th></tr></thead><tbody><tr><td><span style=\"font-family:var(--mono)\">letters.reverse()</span></td><td><span style=\"font-family:var(--mono)\">['k', 'a', 'z', 'm']</span></td><td>flipped the current order; no sorting</td></tr><tr><td><span style=\"font-family:var(--mono)\">letters.sort(reverse=True)</span></td><td style=\"background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">['z', 'm', 'k', 'a']</span></td><td>sorted Z to A</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">reverse() only flips; call it twice and you are back where you started.</figcaption></figure><!--/viz:foc-pcc1-reverse-vs-sort--><p><strong>List</strong> — A list is an ordered collection written in square brackets with commas between items. The items need not be related or even the same type. Lists are usually given plural names because they hold several things.<br><em>e.g.</em> cities = ['jodhpur', 'pune', 'kochi']</p><p><strong>Printing a list vs printing an item</strong> — print(cities) shows Python's representation, with brackets and quotes: fine for checking, ugly for users. print(cities[0]) shows just the value, jodhpur, with no brackets or quotes.</p><p><strong>Zero-based indexing</strong> — The first item is at index 0, so the nth item is at index n − 1. A list of length n has valid indices 0 to n − 1. Most programming languages count this way because of how lists are stored in memory.</p><p><strong>Negative indexing</strong> — Index -1 is the last item, -2 the second-to-last, and so on. lst[-1] keeps working even if the list grows or shrinks, so you don't need to know its length. It fails only on an empty list.</p><p><strong>Using list items like variables</strong> — An indexed item is an ordinary value: you can call string methods on it or concatenate it into a message.<br><em>e.g.</em> \"Next stop: \" + cities[1].title()</p><p><strong>Modifying an item</strong> — Assigning to an index replaces that item and leaves everything else in place. The list stays the same length.<br><em>e.g.</em> cities[0] = 'udaipur'</p><p><strong>append() and building from empty</strong> — append(x) adds x at the end. A very common pattern is to start with an empty list [] and append values as they arrive while the program runs, because you often don't know the data in advance.</p><p><strong>insert()</strong> — insert(i, x) puts x at index i and shifts every item from i onwards one place to the right, so their indices each go up by one.</p><p><strong>del, pop() and remove()</strong> — del lst[i] removes by position and the value is gone. lst.pop() removes the last item and returns it; lst.pop(i) does the same for position i. lst.remove(value) deletes the first matching value. Rule of thumb: need the value afterwards? pop. Know only the value? remove. Done with it? del.</p><p><strong>Stack view of pop()</strong> — Picture the list as a stack of plates whose top is the end of the list. pop() with no argument takes the top plate, the most recently appended item.</p><p><strong>sort() vs sorted()</strong> — lst.sort() rearranges the list itself permanently and returns None. sorted(lst) returns a new sorted list and leaves the original untouched. Both accept reverse=True for descending order.</p><p><strong>reverse()</strong> — reverse() flips the current order permanently. It does not sort anything. Calling it a second time restores the original order.</p><p><strong>len()</strong> — len(lst) gives the number of items, counting from one. The last valid index is therefore len(lst) − 1.</p><p><strong>IndexError and debugging it</strong> — Asking for a position that doesn't exist raises IndexError: list index out of range. It is usually an off-by-one mistake. When stuck, print the list or its length; it may not hold what you expect.</p><div class=\"card\"><strong>Case: The motorcycle history list</strong> <em>(motorcycles.py examples, sections on pop() and remove())</em><p>The book keeps a list of motorcycles in the order they were owned. Popping the end gives the most recent bike, popping index 0 gives the first, and remove() drops a model by name while a separate variable keeps the name so a message can explain why it was removed.</p><p><em>Lesson:</em> Pick the removal tool by whether you know the position or the value, and whether you still need the item.</p><p><em>Think:</em> A list holds orders in arrival order. Which call serves the oldest order and gives you its details to print, and why not del?</p></div><details><summary>Worked problem: Trace a queue of list operations</summary><p>Start with drinks = ['tea', 'coffee', 'juice']. Run, in order: drinks.append('lassi'); drinks.insert(0, 'water'); del drinks[2]. What are print(drinks) and len(drinks)?</p><ol><li>After append: ['tea', 'coffee', 'juice', 'lassi'].</li><li>insert(0, 'water') shifts everything right: ['water', 'tea', 'coffee', 'juice', 'lassi'].</li><li>del drinks[2] removes index 2, which is now 'coffee' (not 'juice'): ['water', 'tea', 'juice', 'lassi'].</li><li>Four items remain.</li></ol><p><strong>Answer:</strong> ['water', 'tea', 'juice', 'lassi'] and 4</p></details><details><summary>Worked problem: Serve and announce</summary><p>waiting = ['meera', 'kabir', 'tara'] holds students in arrival order. Write code that removes the first arrival, keeps the name, and prints: Now serving Meera. Then print how many are still waiting.</p><ol><li>Use pop(0) because you need the value: current = waiting.pop(0).</li><li>Build the message: print(\"Now serving \" + current.title() + \".\").</li><li>Count the rest: print(len(waiting)) shows 2.</li></ol><p><strong>Answer:</strong> Output: Now serving Meera. followed by 2</p></details>"
    },
    {
     "t": "Textbook: Working with Lists",
     "src": "Python Crash Course ch4",
     "h": "<p>A for loop runs the same block once for every item in a list, whatever its length. Python decides what belongs inside the loop purely from indentation. That makes indentation mistakes either loud (IndentationError, SyntaxError) or silent: the program runs but does the wrong thing. The chapter then builds numeric lists with range(), which stops before its end value and takes an optional step, plus list(), min(), max(), sum() and one-line list comprehensions. Slices ([start:end], end excluded) work on part of a list, and [:] makes a genuine copy, unlike plain assignment, which just gives the same list a second name. Tuples are lists that can't be changed after creation. The chapter closes with PEP 8 style: four-space indents, lines under 80 characters, and blank lines used sparingly.</p><!--viz:foc-pcc1-loop-trace--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Code that adds three prices in a loop, with a trace table of each pass: price, running total and printed line, then the final Bill: 125 after the loop.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Tracing a for loop, pass by pass</div><pre style=\"margin:0;font-size:13px\">total = 0\nfor price in [40, 25, 60]:\n    total = total + price\n    print(price, total)\nprint(\"Bill:\", total)</pre><div style=\"height:8px\"></div><div class=\"scroller\"><table><thead><tr><th>Pass</th><th>price</th><th>total after</th><th>Printed</th></tr></thead><tbody><tr><td>1</td><td><span style=\"font-family:var(--mono)\">40</span></td><td><span style=\"font-family:var(--mono)\">0 + 40 = 40</span></td><td><span style=\"font-family:var(--mono)\">40 40</span></td></tr><tr><td>2</td><td><span style=\"font-family:var(--mono)\">25</span></td><td><span style=\"font-family:var(--mono)\">40 + 25 = 65</span></td><td><span style=\"font-family:var(--mono)\">25 65</span></td></tr><tr><td>3</td><td><span style=\"font-family:var(--mono)\">60</span></td><td><span style=\"font-family:var(--mono)\">65 + 60 = 125</span></td><td><span style=\"font-family:var(--mono)\">60 125</span></td></tr><tr><td style=\"color:var(--ink-3)\">after loop</td><td><span style=\"font-family:var(--mono)\">60</span></td><td><span style=\"font-family:var(--mono)\">125</span></td><td style=\"background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">Bill: 125</span></td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The indented lines run once per item; the unindented print runs once, after the loop, and price still holds 60.</figcaption></figure><!--/viz:foc-pcc1-loop-trace--><!--viz:foc-pcc1-silent-indent--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"The same loop twice: with both prints indented, each city gets a Visited line; with the second print unindented, it runs once after the loop for pune only.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">One missing indent, no error message</div><div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:10px 12px\"><div style=\"font-weight:700;margin-bottom:6px\">Indented</div><pre style=\"margin:0;font-size:13px\">for city in ['agra', 'pune']:\n    print(city.title())\n    print('Visited', city)</pre><div style=\"font-size:13px;color:var(--ink-3);margin:6px 0 4px\">output</div><pre style=\"margin:0;font-size:13px\"><span class=\"o\">Agra\nVisited agra\nPune\nVisited pune</span></pre></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:10px 12px\"><div style=\"font-weight:700;margin-bottom:6px\">Second print not indented</div><pre style=\"margin:0;font-size:13px\">for city in ['agra', 'pune']:\n    print(city.title())\n<span style=\"background:var(--clay-soft);border-radius:3px\">print('Visited', city)</span></pre><div style=\"font-size:13px;color:var(--ink-3);margin:6px 0 4px\">output</div><pre style=\"margin:0;font-size:13px\"><span class=\"o\">Agra\nPune\nVisited pune</span></pre></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">No traceback appears: this is a logical error, and only the output gives it away.</figcaption></figure><!--/viz:foc-pcc1-silent-indent--><!--viz:foc-pcc1-comprehension-map--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"A loop that appends n cubed for n in range(1, 5), and the equivalent list comprehension, with the expression and the for clause shaded to show where each part moves.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Folding a loop into a comprehension</div><div style=\"font-size:13px;color:var(--ink-3);margin-bottom:4px\">three-line loop</div><pre style=\"margin:0;font-size:13px\">cubes = []\n<span style=\"background:var(--clay-soft);border-radius:3px\">for n in range(1, 5)</span>:\n    cubes.append(<span style=\"background:var(--blue-soft);border-radius:3px\">n ** 3</span>)</pre><div style=\"font-size:13px;color:var(--ink-3);margin:8px 0 4px\">one-line comprehension: expression first, then the for, no colon</div><pre style=\"margin:0;font-size:13px\">cubes = [<span style=\"background:var(--blue-soft);border-radius:3px\">n ** 3</span> <span style=\"background:var(--clay-soft);border-radius:3px\">for n in range(1, 5)</span>]</pre><p style=\"font-size:13.5px;margin:8px 0 0\">both give <span style=\"font-family:var(--mono)\">[1, 8, 27, 64]</span></p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The appended expression moves to the front; the for clause follows it, without its colon.</figcaption></figure><!--/viz:foc-pcc1-comprehension-map--><!--viz:foc-pcc1-copy-vs-alias--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Box-and-pointer diagram: names a and b point at the same list, which gains z when a.append runs; c points at a separate copy that stays x, y.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">b = a shares; c = a[:] copies</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 176\" role=\"img\" aria-label=\"Names a and b both point to one list x, y, z; name c points to a separate list x, y.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"20\" y=\"30\" width=\"40\" height=\"30\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--ink-3);stroke-width:1.5\"/><text x=\"40\" y=\"50\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">a</text><rect x=\"20\" y=\"76\" width=\"40\" height=\"30\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--ink-3);stroke-width:1.5\"/><text x=\"40\" y=\"96\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">b</text><rect x=\"20\" y=\"132\" width=\"40\" height=\"30\" rx=\"4\" style=\"fill:var(--surface-2);stroke:var(--ink-3);stroke-width:1.5\"/><text x=\"40\" y=\"152\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">c</text><rect x=\"150\" y=\"46\" width=\"56\" height=\"40\" rx=\"0\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"178\" y=\"71\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'x'</text><rect x=\"206\" y=\"46\" width=\"56\" height=\"40\" rx=\"0\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"234\" y=\"71\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'y'</text><rect x=\"262\" y=\"46\" width=\"56\" height=\"40\" rx=\"0\" style=\"fill:var(--clay-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"290\" y=\"71\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'z'</text><rect x=\"150\" y=\"128\" width=\"56\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"178\" y=\"153\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'x'</text><rect x=\"206\" y=\"128\" width=\"56\" height=\"40\" rx=\"0\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"234\" y=\"153\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">'y'</text><path d=\"M60,45 L142.1,58.7\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M150,60 L141.4,63.1 L142.8,54.2 Z\" style=\"fill:var(--ink-3)\"/><path d=\"M60,91 L142.1,75.5\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M150,74 L143,79.9 L141.3,71.1 Z\" style=\"fill:var(--ink-3)\"/><path d=\"M60,147 L142,147.9\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M150,148 L142,152.4 L142.1,143.4 Z\" style=\"fill:var(--ink-3)\"/><text x=\"330\" y=\"62\" text-anchor=\"start\" style=\"fill:var(--ink-2);font-size:13px\">one list,</text><text x=\"330\" y=\"83\" text-anchor=\"start\" style=\"fill:var(--ink-2);font-size:13px\">two names</text><text x=\"274\" y=\"153\" text-anchor=\"start\" style=\"fill:var(--ink-2);font-size:13px\">separate copy</text></svg></div><div style=\"height:6px\"></div><pre style=\"margin:0;font-size:13px\">a = ['x', 'y']\nb = a        <span class=\"c\"># second name, same list</span>\nc = a[:]     <span class=\"c\"># new list, copied</span>\na.append('z')\nprint(b)     <span class=\"o\"># ['x', 'y', 'z']</span>\nprint(c)     <span class=\"o\"># ['x', 'y']</span></pre><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Plain = never copies a list; slice it with [:] to get an independent one.</figcaption></figure><!--/viz:foc-pcc1-copy-vs-alias--><p><strong>The for loop</strong> — for item in items: takes each value in turn, stores it in the loop variable and runs the indented block. When the list runs out, Python continues with the first unindented line. A singular loop variable for a plural list (for city in cities) keeps it clear which is which.<br><em>e.g.</em> for city in cities:\n    print(city.title())</p><p><strong>Indentation defines the loop body</strong> — Every indented line after the for line runs once per item; the first unindented line runs once, after the loop ends. Python reads horizontal indentation as structure but ignores blank lines.</p><p><strong>Loud indentation errors</strong> — Nothing indented after the for line gives IndentationError: expected an indented block. Indenting a line for no reason gives IndentationError: unexpected indent. Leaving out the colon on the for line gives a SyntaxError. Python refuses to run in all three cases.</p><p><strong>Silent (logical) indentation errors</strong> — Two mistakes run without any message. Forget to indent a line that belongs in the loop, and it runs once afterwards with the last value. Indent a line that should come after the loop, and it repeats every pass. The code is valid; the logic is wrong.</p><p><strong>The loop variable after the loop</strong> — When a for loop ends, the loop variable still holds the last item. That's why an unindented line that mentions it uses only the final value.</p><p><strong>range()</strong> — range(start, stop) counts from start up to, but not including, stop. An optional third argument sets the step. Off-by-one again: to include n, stop at n + 1.<br><em>e.g.</em> range(1, 21) gives 1–20; range(1, 20, 2) gives the odd numbers 1–19.</p><p><strong>list(range()) and building numeric lists</strong> — Wrapping range() in list() turns the numbers into a real list. Alternatively, start with an empty list and append a computed value on each pass; a temporary variable inside the loop is optional.</p><p><strong>min(), max(), sum()</strong> — Built-in functions that return the smallest value, the largest value and the total of a list of numbers. They work the same on a list of five items or five million.</p><p><strong>List comprehension</strong> — Packs the loop and the append into one expression: [expression for variable in iterable]. The expression comes first, the for clause follows, and there is no colon. Worth using once the three-line version feels repetitive.<br><em>e.g.</em> [n * 5 for n in range(1, 6)] → [5, 10, 15, 20, 25]</p><p><strong>Slicing</strong> — lst[a:b] returns a NEW list of the items from index a up to but not including b. Leave out a to start at the beginning, leave out b to run to the end, and use negatives to count from the end (lst[-3:] is the last three). You can loop over a slice to process just part of a list.</p><p><strong>Copying with [:] vs assignment</strong> — new = old[:] builds a separate list with the same items. new = old just makes a second name for the SAME list, so a change through either name shows up in both.</p><p><strong>Tuple</strong> — A tuple is an immutable list written with parentheses. You can index it and loop over it, but assigning to an item raises TypeError. You can still rebind the variable to a whole new tuple. Use tuples for values that must not change during a run, such as fixed dimensions.</p><p><strong>PEP 8 style basics</strong> — PEP 8 is Python's official style guide, written because code is read far more often than it is written. Key points: four spaces per indentation level (and don't mix tabs and spaces), lines under 80 characters (comments under 72), and blank lines used sparingly to separate sections.</p><div class=\"card\"><strong>Case: The magic show</strong> <em>(magicians.py, sections 'Looping Through an Entire List' to 'Forgetting the Colon')</em><p>A list of magicians is looped over to print a personal compliment and a follow-up line for each, then a single group thank-you. The book then breaks the program on purpose, one indentation mistake at a time, showing which mistakes Python reports and which silently produce the wrong output.</p><p><em>Lesson:</em> Indentation is Python's block structure; some indentation mistakes are syntax errors, others are logical errors.</p><p><em>Think:</em> For each of the four ways to break the indentation, say whether Python reports an error and describe the output.</p></div><div class=\"card\"><strong>Case: My foods, my friend's foods</strong> <em>(foods.py, section 'Copying a List')</em><p>Two people's favourite-food lists start identical. Copied with a full slice, each list can then gain its own new item independently. Copied by plain assignment, both names refer to one list, so both new foods appear in both.</p><p><em>Lesson:</em> Assignment shares a list; [:] copies it.</p><p><em>Think:</em> Predict both printed lists if the copy line is changed from [:] to plain =.</p></div><details><summary>Worked problem: Average of the top three scores</summary><p>scores = [55, 91, 78, 99, 64]. Write code that finds the three highest scores and prints their average.</p><ol><li>Sort high to low in place: scores.sort(reverse=True) → [99, 91, 78, 64, 55].</li><li>Take the first three with a slice: top = scores[:3] → [99, 91, 78].</li><li>Average = sum(top) / len(top) = 268 / 3.</li><li>print(sum(top) / len(top)).</li></ol><p><strong>Answer:</strong> 89.33333333333333 (a float, because / always returns one)</p></details><details><summary>Worked problem: Count the lines a loop prints</summary><p>team = ['anu', 'bilal', 'chen']. A loop prints 'Welcome' + name and 'Kit issued' (both indented), then an unindented print('All set'). How many lines of output, and in what pattern?</p><ol><li>Two indented lines × 3 names = 6 lines inside the loop.</li><li>The unindented line runs once after the loop: +1.</li><li>Pattern: Welcome Anu / Kit issued / Welcome Bilal / Kit issued / Welcome Chen / Kit issued / All set.</li></ol><p><strong>Answer:</strong> 7 lines, with All set printed once at the end</p></details><div class=\"def\"><b>Book vs lecture — How many indentation mistakes are silent.</b> Book: Two indentation mistakes produce logical errors with no message: forgetting to indent an extra line inside the loop, and accidentally indenting a line that should run after the loop (it repeats every pass). Lecture: The hub's lecture table lists four mistakes and says only 'forgot to indent an additional line' produces no error. <b>If an MCQ offers only the lecture's four options, answer 'forgot to indent an additional line'. But know the book's fifth case. In a 'what does this print' question, an over-indented summary line runs once per item with no error.</b></div><div class=\"def\"><b>Book vs lecture — Name of the indentation error.</b> Book: Shows IndentationError: expected an indented block / unexpected indent. Lecture: Calls both 'Syntax error: …'. <b>Both are right: IndentationError is a subclass of SyntaxError (verified in Python 3). Use IndentationError when asked for the exact error, and 'syntax error' when the choice is syntax vs logical.</b></div><div class=\"def\"><b>Book vs lecture — Copying lists and tuples in scope.</b> Book: Copying with [:] and tuples are ordinary sections of this chapter. Lecture: Lecture 16 taught copying with [:] and tuples just after the Quiz 1 cut-off (Working with Lists Part 2), so they weren't in Quiz 1. <b>They are core course material: expect them in later quizzes and the final exam.</b></div>"
    }
   ]
  },
  {
   "id": "ifs",
   "title": "Conditional tests &amp; if statements",
   "tag": "Lectures 17, 18, 20 · + textbook",
   "lede": "Conditional tests, the three if structures and ifs inside loops. The final exam asks for short Python by hand, and if statements are the core of that.",
   "topics": [
    {
     "t": "Conditional tests: equality and comparisons",
     "src": "L#17",
     "h": "\n<p style=\"font-size:14.5px\">The if-statements chapter has three parts, one lecture each: <strong>conditional tests</strong> (this lecture), <strong>if statements</strong> (L18) and <strong>if statements with lists</strong> (L20).</p>\n<h4>The opening example</h4>\n<p style=\"font-size:14.5px\">Print car names in title case, except BMW, which must be all capitals. A <code>for</code> loop visits each car; an <code>if</code> inside it picks out the special one.</p>\n<pre>cars = ['audi', 'bmw', 'subaru', 'toyota']\nfor car in cars:\n    if car == 'bmw':\n        print(car.upper())\n    else:\n        print(car.title())\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Audi</span>\n<span class=\"o\">BMW</span>\n<span class=\"o\">Subaru</span>\n<span class=\"o\">Toyota</span></pre>\n<p style=\"font-size:14.5px\">Indentation works exactly as in a <code>for</code> loop: the indented lines under <code>if</code> belong to the if; the indented lines under <code>else</code> belong to the else.</p>\n<div class=\"def\"><b>Conditional test</b>: the expression at the heart of every if statement. Python evaluates it to <code>True</code> or <code>False</code>. True → the indented block runs. False → the block is skipped (and Python moves to an <code>else</code>, if there is one).</div>\n<h4>= assigns, == asks</h4>\n<div class=\"scroller\"><table><thead><tr><th>You write</th><th>Meaning</th><th>Result</th></tr></thead><tbody>\n<tr><td><code>car = 'bmw'</code></td><td>Assignment: store 'bmw' in <code>car</code></td><td>No value; it is a statement</td></tr>\n<tr><td><code>car == 'bmw'</code></td><td>Comparison: is <code>car</code> equal to 'bmw'?</td><td><code>True</code></td></tr>\n<tr><td><code>car == 'audi'</code></td><td>Same question with a different value</td><td><code>False</code></td></tr>\n</tbody></table></div>\n<h4>Ignoring case</h4>\n<p style=\"font-size:14.5px\">Equality is <strong>case-sensitive</strong>: <code>'Audi'</code> and <code>'audi'</code> are different values to Python. When case shouldn't matter, compare a lowercase version.</p>\n<pre>car = 'Audi'\nprint(car == 'audi')\nprint(car.lower() == 'audi')\nprint(car)\n<span class=\"c\"># prints:</span>\n<span class=\"o\">False</span>\n<span class=\"o\">True</span>\n<span class=\"o\">Audi</span></pre>\n<p style=\"font-size:14.5px\"><code>lower()</code> only produces a lowercase copy for the comparison. The value stored in <code>car</code> is unchanged, which is why the last line still prints <code>Audi</code>. His real-world use: a website lowercases every new username and compares it with lowercase versions of existing ones, so <em>John</em> is refused if <em>john</em> is taken.</p>\n<h4>Inequality: !=</h4>\n<p style=\"font-size:14.5px\">The <code>!</code> stands for <em>not</em>. <code>!=</code> is True when the two values <strong>differ</strong> and False when they match.</p>\n<pre>requested_topping = 'mushrooms'\nif requested_topping != 'anchovies':\n    print(\"Hold the anchovies!\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Hold the anchovies!</span></pre>\n<h4>Numerical comparisons</h4>\n<div class=\"scroller\"><table><thead><tr><th>Operator</th><th>Meaning</th><th>With <code>age = 19</code></th></tr></thead><tbody>\n<tr><td><code>==</code></td><td>equal to</td><td><code>age == 19</code> → True</td></tr>\n<tr><td><code>!=</code></td><td>not equal to</td><td><code>age != 19</code> → False</td></tr>\n<tr><td><code>&lt;</code></td><td>less than</td><td><code>age &lt; 21</code> → True</td></tr>\n<tr><td><code>&lt;=</code></td><td>less than or equal to</td><td><code>age &lt;= 21</code> → True</td></tr>\n<tr><td><code>&gt;</code></td><td>greater than</td><td><code>age &gt; 21</code> → False</td></tr>\n<tr><td><code>&gt;=</code></td><td>greater than or equal to</td><td><code>age &gt;= 21</code> → False</td></tr>\n</tbody></table></div>\n<pre>answer = 17\nif answer != 42:\n    print(\"That is not the correct answer. Please try again!\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">That is not the correct answer. Please try again!</span></pre>\n<p style=\"font-size:14.5px\">Change <code>answer</code> to 42 and the test is False. There is no <code>else</code>, so the program prints <strong>nothing at all</strong>, and that is not an error.</p>\n<!--viz:foc-lower-copy--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Flow: car = 'Audi'; car.lower() makes the copy 'audi', which equals 'audi', so the test is True; print(car) still shows Audi.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">lower() compares a copy</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px\">\n<div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><span style=\"font-family:var(--mono)\">car = 'Audi'</span></div><span style=\"color:var(--ink-3)\">→</span>\n<div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><span style=\"font-family:var(--mono)\">car.lower()</span> makes a copy: <span style=\"font-family:var(--mono)\">'audi'</span></div><span style=\"color:var(--ink-3)\">→</span>\n<div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">'audi' == 'audi'</span> → <b>True</b></div>\n</div>\n<div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px;margin-top:10px\">\n<div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><span style=\"font-family:var(--mono)\">print(car)</span></div><span style=\"color:var(--ink-3)\">→</span>\n<div style=\"padding:7px 11px;border:1px solid var(--clay);border-radius:4px;background:var(--clay-soft)\"><span style=\"font-family:var(--mono)\">Audi</span>: the stored value never changed</div>\n</div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The test uses a lowercase copy; the variable keeps its original capitals.</figcaption></figure><!--/viz:foc-lower-copy-->"
    },
    {
     "t": "Combining tests: and, or, in, not in, Booleans",
     "src": "L#17",
     "h": "\n<h4>and: both tests must pass</h4>\n<pre>age_0 = 22\nage_1 = 18\nprint((age_0 &gt;= 21) and (age_1 &gt;= 21))\nage_1 = 22\nprint((age_0 &gt;= 21) and (age_1 &gt;= 21))\n<span class=\"c\"># prints:</span>\n<span class=\"o\">False</span>\n<span class=\"o\">True</span></pre>\n<p style=\"font-size:14.5px\">One False is enough to make the whole <code>and</code> expression False. The brackets around each test are optional; he recommended them because they make each condition easier to read.</p>\n<h4>or: at least one test must pass</h4>\n<pre>age_0 = 22\nage_1 = 18\nprint((age_0 &gt;= 21) or (age_1 &gt;= 21))\nage_0 = 18\nprint((age_0 &gt;= 21) or (age_1 &gt;= 21))\n<span class=\"c\"># prints:</span>\n<span class=\"o\">True</span>\n<span class=\"o\">False</span></pre>\n<p style=\"font-size:14.5px\"><code>or</code> fails only when <strong>every</strong> test fails.</p>\n<h4>in and not in: checking a list</h4>\n<pre>requested_toppings = ['mushrooms', 'onions', 'pineapple']\nprint('mushrooms' in requested_toppings)\nprint('pepperoni' in requested_toppings)\n<span class=\"c\"># prints:</span>\n<span class=\"o\">True</span>\n<span class=\"o\">False</span></pre>\n<p style=\"font-size:14.5px\">Uses he gave: is a new username already registered; is a location already in a mapping list; is a requested topping on offer. <code>not in</code> checks for <strong>absence</strong>, for example whether a user is banned before they may comment:</p>\n<pre>banned_users = ['andrew', 'carolina', 'david']\nuser = 'marie'\nif user not in banned_users:\n    print(user.title() + \", you can post a response if you wish.\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Marie, you can post a response if you wish.</span></pre>\n<h4>Boolean expressions and Boolean values</h4>\n<div class=\"def\"><b>Boolean expression</b> is just another name for a conditional test. A <b>Boolean value</b> is <code>True</code> or <code>False</code>. Both are Python keywords and must be capitalised.</div>\n<pre>game_active = True\ncan_edit = False\nif game_active:\n    print(\"Game is running\")\nif can_edit:\n    print(\"You can edit this page\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Game is running</span></pre>\n<p style=\"font-size:14.5px\">Boolean variables track the state of a program: whether a game is still running, whether a user may edit some content. <code>if can_edit:</code> reads as <em>if False</em>, so its block is skipped and, with no else, nothing prints.</p>\n<div class=\"card\"><b>Practice set from the lecture.</b> Write at least 10 conditional tests, at least 5 True and 5 False. Print a line describing each test with your predicted result before running it. Cover: string <code>==</code> and <code>!=</code>, a test using <code>lower()</code>, all six numeric comparisons, <code>and</code>, <code>or</code>, <code>in</code> and <code>not in</code>.</div>\n<!--viz:foc-and-or-grid--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Two-by-two grid of test A (True, False) against test B (True, False). and is True only when both are True; or is False only when both are False.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">and vs or for two tests</div><div style=\"display:grid;grid-template-columns:auto 1fr 1fr;gap:4px;font-size:14px;min-width:0\">\n<div></div>\n<div style=\"padding:6px 8px;color:var(--ink-3);font-size:12.5px;text-align:center;align-self:center\">Test B is True</div>\n<div style=\"padding:6px 8px;color:var(--ink-3);font-size:12.5px;text-align:center;align-self:center\">Test B is False</div>\n<div style=\"padding:6px 8px;color:var(--ink-3);font-size:12.5px;text-align:center;writing-mode:vertical-rl;transform:rotate(180deg);align-self:center\">Test A True</div>\n<div style=\"padding:10px;border:1px solid var(--good);border-radius:4px;background:var(--good-soft)\"><b style=\"font-family:var(--mono)\">and → True</b><br><b style=\"font-family:var(--mono)\">or → True</b><br><span style=\"color:var(--ink-2);font-size:13px\">the only cell where and passes</span></div>\n<div style=\"padding:10px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><span style=\"font-family:var(--mono)\">and → False</span><br><b style=\"font-family:var(--mono)\">or → True</b><br><span style=\"color:var(--ink-2);font-size:13px\">22 ≥ 21 but 18 ≥ 21 fails</span></div>\n<div style=\"padding:6px 8px;color:var(--ink-3);font-size:12.5px;text-align:center;writing-mode:vertical-rl;transform:rotate(180deg);align-self:center\">Test A False</div>\n<div style=\"padding:10px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><span style=\"font-family:var(--mono)\">and → False</span><br><b style=\"font-family:var(--mono)\">or → True</b><br><span style=\"color:var(--ink-2);font-size:13px\">one pass is enough for or</span></div>\n<div style=\"padding:10px;border:1px solid var(--bad);border-radius:4px;background:var(--bad-soft)\"><span style=\"font-family:var(--mono)\">and → False</span><br><span style=\"font-family:var(--mono)\">or → False</span><br><span style=\"color:var(--ink-2);font-size:13px\">the only cell where or fails</span></div>\n</div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">and needs every test to pass; or fails only when every test fails.</figcaption></figure><!--/viz:foc-and-or-grid-->"
    },
    {
     "t": "if, if-else and if-elif-else",
     "src": "L#18",
     "h": "\n<h4>Simple if</h4>\n<p style=\"font-size:14.5px\">One test, one action. Every indented line under the <code>if</code> belongs to it, and there can be as many as you need.</p>\n<pre>age = 19\nif age &gt;= 18:\n    print(\"You are old enough to vote!\")\n    print(\"Have you registered to vote yet?\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">You are old enough to vote!</span>\n<span class=\"o\">Have you registered to vote yet?</span></pre>\n<p style=\"font-size:14.5px\">Set <code>age = 17</code> and the test is False: both lines are skipped and, with no else, nothing prints.</p>\n<h4>if-else: one action or the other</h4>\n<pre>age = 17\nif age &gt;= 18:\n    print(\"You are old enough to vote!\")\nelse:\n    print(\"Sorry, you are too young to vote.\")\n    print(\"Please register to vote as soon as you turn 18!\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Sorry, you are too young to vote.</span>\n<span class=\"o\">Please register to vote as soon as you turn 18!</span></pre>\n<p style=\"font-size:14.5px\">The <code>else</code> block runs in <em>all other cases</em>, whenever the test fails. Exactly one of the two blocks runs.</p>\n<h4>if-elif-else: more than two situations</h4>\n<p style=\"font-size:14.5px\">His amusement-park prices: under 4 free, 4 to 17 pay $5, 18 and over pay $10. Python runs the tests <strong>in order</strong>; the first one that passes has its block run, and <strong>the rest of the chain is skipped</strong>.</p>\n<pre>age = 12\nif age &lt; 4:\n    print(\"Your admission cost is $0.\")\nelif age &lt; 18:\n    print(\"Your admission cost is $5.\")\nelse:\n    print(\"Your admission cost is $10.\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Your admission cost is $5.</span></pre>\n<p style=\"font-size:14.5px\">For age 12, <code>age &lt; 4</code> is False, <code>age &lt; 18</code> is True, so $5 prints and the else is never reached. Because the chain only gets to <code>elif age &lt; 18</code> when <code>age &lt; 4</code> has already failed, that test really means \"4 to 17\".</p>\n<h4>Set a value in the chain, print once after it</h4>\n<p style=\"font-size:14.5px\">Three print lines that differ only in the number are repetitive. He rewrote the chain to set <code>price</code> in each branch, with one <code>print</code> after the chain. To change the message you now edit one line, not three. A senior band was added with a second <code>elif</code>, and you can use as many <code>elif</code> blocks as you need:</p>\n<pre>age = 12\nif age &lt; 4:\n    price = 0\nelif age &lt; 18:\n    price = 5\nelif age &lt; 65:\n    price = 10\nelse:\n    price = 3\nprint(\"Your admission cost is $\" + str(price) + \".\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Your admission cost is $5.</span></pre>\n<p style=\"font-size:14.5px\">The <code>print</code> is lined up with <code>if</code>, <code>elif</code> and <code>else</code>, so it is <strong>outside</strong> the chain and runs every time. <code>str(price)</code> is needed because <code>price</code> is a number being joined to strings. With age 65 the program prints $3; with 61 it prints $10.</p>\n<div class=\"card\"><b>Practice set from the lecture.</b> (1) alien_color: print a 5-point message only if it is green (one version passes, one prints nothing). (2) The same with an else worth 10 points. (3) A chain: green 5, yellow 10, red 15 points. (4) Life stages by age: baby under 2, toddler under 4, kid under 13, teenager under 20, adult under 65, elder 65+. (5) favourite_fruits with five independent if statements, one per fruit.</div>\n<!--viz:foc-elif-bands-trace--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Trace table of the four-band price chain for ages 3, 12, 40 and 70. For each age the first True test is highlighted and every later test is marked skipped; prices 0, 5, 10 and 3.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Which branch fires, age by age</div><div class=\"scroller\"><table><thead><tr><th>age</th><th>age &lt; 4</th><th>age &lt; 18</th><th>age &lt; 65</th><th>else</th><th>price</th></tr></thead><tbody><tr><td style=\"font-family:var(--mono)\">3</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">True</td><td>skipped</td><td>skipped</td><td>skipped</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">$0</td></tr><tr><td style=\"font-family:var(--mono)\">12</td><td style=\"font-family:var(--mono)\">False</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">True</td><td>skipped</td><td>skipped</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">$5</td></tr><tr><td style=\"font-family:var(--mono)\">40</td><td style=\"font-family:var(--mono)\">False</td><td style=\"font-family:var(--mono)\">False</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">True</td><td>skipped</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">$10</td></tr><tr><td style=\"font-family:var(--mono)\">70</td><td style=\"font-family:var(--mono)\">False</td><td style=\"font-family:var(--mono)\">False</td><td style=\"font-family:var(--mono)\">False</td><td style=\"background:var(--good-soft)\">runs</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">$3</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin-top:8px\">Chain: if age &lt; 4 → 0 · elif age &lt; 18 → 5 · elif age &lt; 65 → 10 · else → 3</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Python stops at the first True; the later tests are never evaluated.</figcaption></figure><!--/viz:foc-elif-bands-trace-->"
    },
    {
     "t": "Omitting else, and independent ifs",
     "src": "L#18",
     "h": "\n<h4>else is optional</h4>\n<p style=\"font-size:14.5px\">Python doesn't require an <code>else</code> at the end of a chain. An <code>else</code> is a catch-all: it matches anything no earlier test matched, and that can include <strong>invalid or even malicious data</strong>. A final <code>elif</code> with its own condition (<code>elif age &gt;= 65:</code>) runs only when that condition holds.</p>\n<p style=\"font-size:14.5px\">His safer version starts <code>price</code> at <code>None</code> (a keyword meaning no value yet), tests explicit ranges with <code>and</code>, has no else, and prints only if a price was actually set:</p>\n<pre>age = 12\nprice = None\nif age &gt;= 0 and age &lt; 4:\n    price = 0\nelif age &gt;= 0 and age &lt; 18:\n    price = 5\nelif age &gt;= 0 and age &lt; 65:\n    price = 10\nelif age &gt;= 65:\n    price = 3\nif price is not None:\n    print(\"Your admission cost is $\" + str(price) + \".\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Your admission cost is $5.</span></pre>\n<p style=\"font-size:14.5px\">The ranges overlap: 12 satisfies both the \"under 18\" and the \"under 65\" tests. Because this is one chain, only the <strong>first</strong> passing branch runs, so the price is 5, not 10. With <code>age = -20</code> no branch matches, <code>price</code> stays <code>None</code>, and nothing is printed instead of a wrong price.</p>\n<div class=\"warnbox\"><b>Correction to L18.</b> While tracing this example the lecturer said that Python \"checks all the statements\" in the chain and the price \"remains unchanged\" at 5. The answer is right but the reason is wrong: once a test passes, Python <b>does not evaluate</b> the remaining elif tests at all. He states the correct rule himself later in the same lecture, and the textbook agrees.</div>\n<h4>Testing multiple conditions: separate ifs</h4>\n<p style=\"font-size:14.5px\">A chain is right when exactly one test should pass. When several conditions can be true and each needs its own action, write a series of independent <code>if</code> statements with no elif or else. Every one is tested.</p>\n<pre>requested_toppings = ['mushrooms', 'extra cheese']\nif 'mushrooms' in requested_toppings:\n    print(\"Adding mushrooms.\")\nif 'pepperoni' in requested_toppings:\n    print(\"Adding pepperoni.\")\nif 'extra cheese' in requested_toppings:\n    print(\"Adding extra cheese.\")\nprint(\"Finished making your pizza!\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Adding mushrooms.</span>\n<span class=\"o\">Adding extra cheese.</span>\n<span class=\"o\">Finished making your pizza!</span></pre>\n<p style=\"font-size:14.5px\">Rewrite the second and third <code>if</code> as <code>elif</code> and the pizza loses its cheese:</p>\n<pre>requested_toppings = ['mushrooms', 'extra cheese']\nif 'mushrooms' in requested_toppings:\n    print(\"Adding mushrooms.\")\nelif 'pepperoni' in requested_toppings:\n    print(\"Adding pepperoni.\")\nelif 'extra cheese' in requested_toppings:\n    print(\"Adding extra cheese.\")\nprint(\"Finished making your pizza!\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Adding mushrooms.</span>\n<span class=\"o\">Finished making your pizza!</span></pre>\n<div class=\"def\"><b>His summary:</b> if you want only one block of code to run, use an if-elif-else chain. If more than one block may need to run, use a series of independent if statements.</div>\n<div class=\"warnbox\"><b>Correction to L18.</b> In the separate-ifs price demo (age = -20) he said that once the first if is True, Python \"will not check other conditions\" and exits. That describes a chain, not separate ifs. Every independent if is tested. Price bands written as separate ifs overwrite each other:</div>\n<pre>age = 12\nif age &lt; 0:\n    print(\"Invalid age\")\nif age &lt; 4:\n    price = 0\nif age &lt; 18:\n    price = 5\nif age &lt; 65:\n    price = 10\nif age &gt;= 65:\n    price = 3\nif age &gt;= 0:\n    print(\"Your admission cost is $\" + str(price) + \".\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Your admission cost is $10.</span></pre>\n<p style=\"font-size:14.5px\">12 passes <code>age &lt; 18</code> (price 5) <em>and</em> <code>age &lt; 65</code> (price becomes 10), so a child is charged the adult price. For age -20 the program prints only <code>Invalid age</code>, but that is because the final <code>if age &gt;= 0:</code> fails, not because Python stopped early. Price bands belong in one chain.</p>\n<!--viz:foc-separate-ifs-overwrite--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Trace of five independent if statements for age 12: age &lt; 18 sets price to 5, then age &lt; 65 overwrites it to 10, so the final price is 10.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Separate ifs overwrite each other</div><div class=\"scroller\"><table><thead><tr><th>Line</th><th>Test</th><th>Action</th><th>price after</th></tr></thead><tbody><tr><td style=\"font-family:var(--mono)\">if age &lt; 0</td><td style=\"font-family:var(--mono)\">False</td><td>skipped</td><td style=\"font-family:var(--mono)\">None</td></tr><tr><td style=\"font-family:var(--mono)\">if age &lt; 4</td><td style=\"font-family:var(--mono)\">False</td><td>skipped</td><td style=\"font-family:var(--mono)\">None</td></tr><tr><td style=\"font-family:var(--mono)\">if age &lt; 18</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">True</td><td>price = 5</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">5</td></tr><tr><td style=\"font-family:var(--mono)\">if age &lt; 65</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">True</td><td>price = 10</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">10</td></tr><tr><td style=\"font-family:var(--mono)\">if age &gt;= 65</td><td style=\"font-family:var(--mono)\">False</td><td>skipped</td><td style=\"font-family:var(--mono)\">10</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin-top:8px\">age = 12 · every if is tested · last line prints: Your admission cost is $10.</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Every independent if runs its test, so a later match replaces an earlier one.</figcaption></figure><!--/viz:foc-separate-ifs-overwrite-->"
    },
    {
     "t": "if statements with lists",
     "src": "L#20",
     "h": "\n<p style=\"font-size:14.5px\">The third part of the chapter combines ifs with lists in three ways: picking out special items, checking that a list isn't empty, and checking one list against another.</p>\n<h4>1 · Checking for special items: an if inside the for loop</h4>\n<pre>requested_toppings = ['mushrooms', 'green peppers', 'extra cheese']\nfor requested_topping in requested_toppings:\n    if requested_topping == 'green peppers':\n        print(\"Sorry, we are out of green peppers right now.\")\n    else:\n        print(\"Adding \" + requested_topping + \".\")\nprint(\"Finished making your pizza!\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Adding mushrooms.</span>\n<span class=\"o\">Sorry, we are out of green peppers right now.</span>\n<span class=\"o\">Adding extra cheese.</span>\n<span class=\"o\">Finished making your pizza!</span></pre>\n<p style=\"font-size:14.5px\">The loop gives every item the normal treatment; the if inside it catches the one that needs different handling (an ingredient that ran out during the shift). The last print is not indented, so it runs once, after the loop.</p>\n<h4>2 · Checking that a list is not empty: the for loop inside an if</h4>\n<p style=\"font-size:14.5px\">When users supply the list, you can't assume it has anything in it. He flagged this as the important statement of the lecture:</p>\n<div class=\"def\">When the <b>name of a list</b> is used as the test of an if, it is <b>True if the list holds at least one item</b> and <b>False if it is empty</b>.</div>\n<pre>requested_toppings = []\nif requested_toppings:\n    for requested_topping in requested_toppings:\n        print(\"Adding \" + requested_topping + \".\")\n    print(\"Finished making your pizza!\")\nelse:\n    print(\"Are you sure you want a plain pizza?\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Are you sure you want a plain pizza?</span></pre>\n<p style=\"font-size:14.5px\">Put <code>'cheese'</code> in the list and the same code prints <code>Adding cheese.</code> and <code>Finished making your pizza!</code>. Compare the two shapes: in part 1 the <code>if</code> sits inside the loop and tests <em>each item</em>; here the loop sits inside the <code>if</code>, and the test looks at <em>the whole list once</em>.</p>\n<div class=\"warnbox\"><b>Watch the indentation (from his own demo).</b> When he added more toppings, <em>Finished making your pizza!</em> printed after every topping, because that line was indented inside the for loop. He pointed out why, and it is the logical error from L13: no error message, wrong output.</div>\n<pre>requested_toppings = ['cheese', 'onions']\nfor requested_topping in requested_toppings:\n    print(\"Adding \" + requested_topping + \".\")\n    print(\"Finished making your pizza!\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Adding cheese.</span>\n<span class=\"o\">Finished making your pizza!</span>\n<span class=\"o\">Adding onions.</span>\n<span class=\"o\">Finished making your pizza!</span></pre>\n<h4>3 · Using multiple lists: validate requests against what's allowed</h4>\n<p style=\"font-size:14.5px\">Customers ask for anything, french fries included. Check each request against a list of what the pizzeria actually has before acting on it:</p>\n<pre>available_toppings = ['mushrooms', 'olives', 'green peppers',\n                      'pepperoni', 'pineapple', 'extra cheese']\nrequested_toppings = ['mushrooms', 'french fries', 'extra cheese']\n\nfor requested_topping in requested_toppings:\n    if requested_topping in available_toppings:\n        print(\"Adding \" + requested_topping + \".\")\n    else:\n        print(\"Sorry, we don't have \" + requested_topping + \".\")\nprint(\"Finished making your pizza!\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Adding mushrooms.</span>\n<span class=\"o\">Sorry, we don't have french fries.</span>\n<span class=\"o\">Adding extra cheese.</span>\n<span class=\"o\">Finished making your pizza!</span></pre>\n<p style=\"font-size:14.5px\">The <code>for</code> line takes the requested items one at a time; the <code>in</code> inside the if does the checking against the whole available list. No second loop is needed.</p>\n<h4>Chapter takeaways (his summary)</h4>\n<ul>\n<li>Conditional tests always evaluate to True or False.</li>\n<li>Simple if, if-else and if-elif-else chains each suit a different number of outcomes.</li>\n<li>These structures let a program spot a particular condition and know when it has been met.</li>\n<li>An if inside a loop handles certain items differently while the loop keeps the code efficient.</li>\n</ul>\n<p style=\"font-size:14.5px\">Next: dictionaries, which connect related pieces of information (L21).</p>\n<h4>Practice set from the lecture, two solved</h4>\n<ol>\n<li><b>Hello admin:</b> five or more usernames including admin; give admin a special greeting (status report) and everyone else a generic one.</li>\n<li><b>No users:</b> add an if so an empty list prints <em>We need to find some users!</em>; then remove all the names and check that message appears.</li>\n<li><b>Checking usernames:</b> current_users and new_users (with one or two overlaps); tell each new user whether the name is taken.</li>\n<li><b>Ordinal numbers:</b> 1 to 9 in a list, an if-elif-else chain inside the loop, one result per line.</li>\n</ol>\n<div class=\"warnbox\"><b>\"Case sensitive\" in exercise 3 means the opposite.</b> He read the step as \"make sure your comparison is case sensitive\", then explained it as: if John has been used, JOHN must not be accepted. That behaviour is a <b>case-insensitive</b> check, and it is what the textbook block asks for. Lowercase both sides before comparing.</div>\n<pre>current_users = ['ravi', 'Meera', 'john', 'asha', 'kabir']\nnew_users = ['JOHN', 'neha', 'meera', 'tara', 'dev']\n\ncurrent_lower = [user.lower() for user in current_users]\nfor new_user in new_users:\n    if new_user.lower() in current_lower:\n        print(new_user + \" is taken. Please enter a new username.\")\n    else:\n        print(new_user + \" is available.\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">JOHN is taken. Please enter a new username.</span>\n<span class=\"o\">neha is available.</span>\n<span class=\"o\">meera is taken. Please enter a new username.</span>\n<span class=\"o\">tara is available.</span>\n<span class=\"o\">dev is available.</span></pre>\n<pre>numbers = list(range(1, 10))\nfor number in numbers:\n    if number == 1:\n        print(\"1st\")\n    elif number == 2:\n        print(\"2nd\")\n    elif number == 3:\n        print(\"3rd\")\n    else:\n        print(str(number) + \"th\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">1st</span>\n<span class=\"o\">2nd</span>\n<span class=\"o\">3rd</span>\n<span class=\"o\">4th</span>\n<span class=\"o\">5th</span>\n<span class=\"o\">6th</span>\n<span class=\"o\">7th</span>\n<span class=\"o\">8th</span>\n<span class=\"o\">9th</span></pre>\n<!--viz:foc-empty-list-check--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Decision flow: if requested_toppings is True (one or more items) the for loop adds each topping and then the finished message prints; if False (empty list) the else asks whether the customer wants a plain pizza.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Check the list before you loop</div><div style=\"display:flex;flex-direction:column;gap:8px;font-size:14px\">\n<div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px\"><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><b style=\"font-family:var(--mono)\">if requested_toppings:</b></div><span style=\"color:var(--ink-3)\">is the list empty?</span></div>\n<div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;padding-left:14px\"><span style=\"color:var(--good);font-weight:700\">True</span><span style=\"color:var(--ink-3)\">(1+ items)</span><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><span style=\"font-family:var(--mono)\">for</span> each topping: Adding …</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Finished making your pizza!</div></div>\n<div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;padding-left:14px\"><span style=\"color:var(--bad);font-weight:700\">False</span><span style=\"color:var(--ink-3)\">([ ])</span><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--clay);border-radius:4px;background:var(--clay-soft)\"><span style=\"font-family:var(--mono)\">else</span>: Are you sure you want a plain pizza?</div></div>\n</div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The list's name as a test is True with one or more items and False when it is empty.</figcaption></figure><!--/viz:foc-empty-list-check--><!--viz:foc-two-lists-check--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Trace of three requested toppings checked with in against the available list: mushrooms True, french fries False, extra cheese True, with the message each one prints.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Each request checked against the menu</div><div class=\"scroller\"><table><thead><tr><th>requested_topping</th><th>in available_toppings?</th><th>prints</th></tr></thead><tbody><tr><td style=\"font-family:var(--mono)\">mushrooms</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">True</td><td style=\"font-family:var(--mono)\">Adding mushrooms.</td></tr><tr><td style=\"font-family:var(--mono)\">french fries</td><td style=\"font-family:var(--mono);background:var(--bad-soft)\">False</td><td style=\"font-family:var(--mono)\">Sorry, we don't have french fries.</td></tr><tr><td style=\"font-family:var(--mono)\">extra cheese</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">True</td><td style=\"font-family:var(--mono)\">Adding extra cheese.</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin-top:8px\">available_toppings = mushrooms, olives, green peppers, pepperoni, pineapple, extra cheese</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The for loop supplies one request at a time; in does the search through the other list.</figcaption></figure><!--/viz:foc-two-lists-check-->"
    },
    {
     "t": "Textbook: if Statements",
     "src": "Python Crash Course ch5",
     "h": "<p>Every if statement rests on a conditional test, an expression that evaluates to True or False. The chapter covers the tests: == and != (case-sensitive for strings, with lower() for case-insensitive checks), the numeric comparisons &lt; &lt;= &gt; &gt;=, combining tests with and and or, and checking membership with in and not in. It then builds up the structures: a simple if, if-else when exactly one of two actions must happen, and if-elif-else chains, which run only the first block whose test passes. A final else is optional, and an explicit elif can be safer than a catch-all. A series of independent ifs is the right tool when several conditions may all be true at once. Inside loops, ifs pick out special items, an empty list counts as False, and a second list can validate requests.</p><!--viz:foc-pcc1-elif-flow--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Flowchart of an if-elif-else grade chain with marks = 82: the first test is False, the second True, so only grade = B runs before print(grade).\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">if-elif-else: the first True wins</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 344\" role=\"img\" aria-label=\"Flowchart for marks = 82: marks >= 90 is False, marks >= 75 is True, so grade = B runs; the A and C branches are skipped; then print(grade) outputs B.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><text x=\"120\" y=\"22\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono);font-weight:700\">marks = 82</text><path d=\"M120,30 L120,40\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M120,48 L115.5,40 L124.5,40 Z\" style=\"fill:var(--ink-3)\"/><path d=\"M120,48 L215,76 L120,104 L25,76 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"120\" y=\"81\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">marks &gt;= 90</text><path d=\"M215,76 L262,76\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M270,76 L262,80.5 L262,71.5 Z\" style=\"fill:var(--ink-3)\"/><text x=\"242\" y=\"66\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">True</text><rect x=\"270\" y=\"60\" width=\"150\" height=\"32\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5;stroke-dasharray:5 4\"/><text x=\"345\" y=\"81\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">grade = 'A'</text><path d=\"M120,104 L120,124\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><path d=\"M120,132 L115.5,124 L124.5,124 Z\" style=\"fill:var(--blue)\"/><text x=\"130\" y=\"122\" text-anchor=\"start\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">False</text><path d=\"M120,132 L215,160 L120,188 L25,160 Z\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"120\" y=\"165\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">marks &gt;= 75</text><path d=\"M215,160 L262,160\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><path d=\"M270,160 L262,164.5 L262,155.5 Z\" style=\"fill:var(--blue)\"/><text x=\"242\" y=\"150\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">True</text><rect x=\"270\" y=\"144\" width=\"150\" height=\"32\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"345\" y=\"165\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono);font-weight:700\">grade = 'B'</text><path d=\"M120,188 L120,208\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M120,216 L115.5,208 L124.5,208 Z\" style=\"fill:var(--ink-3)\"/><text x=\"130\" y=\"206\" text-anchor=\"start\" style=\"fill:var(--ink-3);font-size:13px\">False</text><rect x=\"45\" y=\"216\" width=\"150\" height=\"32\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5;stroke-dasharray:5 4\"/><text x=\"120\" y=\"237\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-family:var(--mono)\">grade = 'C'</text><path d=\"M420,76 L430,76 L430,160\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M420,160 L430,160 L430,290 L338,290\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><path d=\"M330,290 L338,285.5 L338,294.5 Z\" style=\"fill:var(--blue)\"/><path d=\"M195,232 L430,232\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><rect x=\"170\" y=\"274\" width=\"160\" height=\"32\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"250\" y=\"295\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-family:var(--mono)\">print(grade)</text><text x=\"250\" y=\"330\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono);font-weight:700\">output: B</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Python tests top-down and stops at the first True; every other branch is skipped.</figcaption></figure><!--/viz:foc-pcc1-elif-flow--><!--viz:foc-pcc1-chain-vs-ifs--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"The same two tests written as an if-elif chain print only A for marks = 92, while two independent if statements print A and then B.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">One chain vs separate ifs</div><p style=\"font-size:13.5px;margin:0 0 6px\"><span style=\"font-family:var(--mono)\">marks = 92</span>: both tests are True</p><div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:10px 12px\"><div style=\"font-weight:700;margin-bottom:6px\">if / elif chain</div><pre style=\"margin:0;font-size:13px\">if marks &gt;= 90:\n    print('A')\n<span style=\"background:var(--blue-soft);border-radius:3px\">elif</span> marks &gt;= 75:\n    print('B')</pre><div style=\"font-size:13px;color:var(--ink-3);margin:6px 0 4px\">output</div><pre style=\"margin:0;font-size:13px\"><span class=\"o\">A</span></pre></div><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:10px 12px\"><div style=\"font-weight:700;margin-bottom:6px\">two separate ifs</div><pre style=\"margin:0;font-size:13px\">if marks &gt;= 90:\n    print('A')\n<span style=\"background:var(--clay-soft);border-radius:3px\">if</span> marks &gt;= 75:\n    print('B')</pre><div style=\"font-size:13px;color:var(--ink-3);margin:6px 0 4px\">output</div><pre style=\"margin:0;font-size:13px\"><span class=\"o\">A\nB</span></pre></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Use one chain when exactly one outcome should happen; separate ifs when several may.</figcaption></figure><!--/viz:foc-pcc1-chain-vs-ifs--><!--viz:foc-pcc1-conditional-tests--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table of eight conditional tests on city = Pune and age = 19, covering case-sensitive equality, !=, and, or, in, not in and an empty list, each with its True or False value.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Conditional tests and what they return</div><p style=\"font-size:13.5px;margin:0 0 6px\"><span style=\"font-family:var(--mono)\">city = 'Pune'</span> · <span style=\"font-family:var(--mono)\">age = 19</span></p><div class=\"scroller\"><table><thead><tr><th>Test</th><th>Value</th></tr></thead><tbody><tr><td><span style=\"font-family:var(--mono)\">city == 'pune'</span></td><td style=\"background:var(--bad-soft)\"><span style=\"font-family:var(--mono)\">False</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">city.lower() == 'pune'</span></td><td style=\"background:var(--good-soft)\"><span style=\"font-family:var(--mono)\">True</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">city != 'Agra'</span></td><td style=\"background:var(--good-soft)\"><span style=\"font-family:var(--mono)\">True</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">age &gt;= 18 and age &lt; 21</span></td><td style=\"background:var(--good-soft)\"><span style=\"font-family:var(--mono)\">True</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">age &lt; 18 or age &gt; 60</span></td><td style=\"background:var(--bad-soft)\"><span style=\"font-family:var(--mono)\">False</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">'Goa' in ['Agra', 'Pune']</span></td><td style=\"background:var(--bad-soft)\"><span style=\"font-family:var(--mono)\">False</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">'Goa' not in ['Agra', 'Pune']</span></td><td style=\"background:var(--good-soft)\"><span style=\"font-family:var(--mono)\">True</span></td></tr><tr><td><span style=\"font-family:var(--mono)\">bool([])</span></td><td style=\"background:var(--bad-soft)\"><span style=\"font-family:var(--mono)\">False</span></td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Every test is just True or False; == is case-sensitive, and an empty list counts as False.</figcaption></figure><!--/viz:foc-pcc1-conditional-tests--><p><strong>Conditional test</strong> — An expression that Python evaluates to True or False, such as age &gt;= 18. If it is True the indented block runs; if False the block is skipped. Also called a Boolean expression.</p><p><strong>= versus ==</strong> — A single = is an assignment statement: 'make this name refer to this value'. == is a question: 'are these two values equal?' Using = inside an if is a SyntaxError.<br><em>e.g.</em> city = 'pune' sets; city == 'pune' asks.</p><p><strong>Case-sensitive equality</strong> — 'Audi' == 'audi' is False because capitalisation counts. For a case-insensitive check compare lowercase versions: car.lower() == 'audi'. lower() returns a new string, so the stored value keeps its original case. Websites use this to stop 'John' registering when 'john' already exists.</p><p><strong>Inequality and numeric comparisons</strong> — != is True when the values differ. Numbers can also be compared with &lt;, &lt;=, &gt; and &gt;=. PEP 8 suggests one space either side of each comparison operator for readability.</p><p><strong>and / or</strong> — and is True only when both tests are True. or is True when at least one is True, and False only when both fail. Brackets around each test are optional but can make the expression easier to read.<br><em>e.g.</em> (age_a &gt;= 21) and (age_b &gt;= 21)</p><p><strong>in / not in</strong> — value in some_list is True if the value appears in the list; not in is the reverse. Typical uses: checking whether a username is already taken, or whether a user is banned.</p><p><strong>Boolean values</strong> — True and False (capitalised) are values in their own right. They are often stored in variables, such as game_active = True, to track the state of a program.</p><p><strong>Simple if and if-else</strong> — A simple if runs its block only when its test passes, so it may produce no output at all. if-else guarantees exactly one of two blocks runs. Indentation marks the blocks, just as in for loops.</p><p><strong>if-elif-else chain</strong> — Python checks the tests from the top and runs only the FIRST block whose test passes, skipping all the rest. Because of that, order matters: each elif can assume every earlier test failed. Setting a value inside the chain and printing once afterwards keeps the code shorter and easier to change.</p><p><strong>Omitting else</strong> — else is optional. It catches everything not matched so far, which can include invalid data. A final explicit elif (e.g. elif age &gt;= 65) runs only under a stated condition, which can make code safer. Without an else, a chain might run no block at all.</p><p><strong>Independent ifs vs one chain</strong> — Use if-elif-else when exactly one outcome should happen. Use a series of separate if statements when several conditions can be true and each needs its own action, as with a pizza that has more than one topping.</p><p><strong>if inside a for loop</strong> — Putting an if inside a loop lets most items follow the normal path while special items get different treatment, for example an out-of-stock topping, or an 'admin' user who gets a different greeting.</p><p><strong>Empty list is False</strong> — Writing a list's name as the test (if orders:) is True when the list has at least one item and False when it is empty. Checking this before looping lets you handle 'nothing requested' separately.</p><p><strong>Validating against a second list</strong> — Loop over the requested items and test each one with in against a list of allowed items, accepting matches and politely rejecting the rest. If the allowed list never changes, it could be a tuple.</p><div class=\"card\"><strong>Case: The pizzeria toppings</strong> <em>(toppings.py examples, sections 'Testing Multiple Conditions' and 'Using if Statements with Lists')</em><p>A pizzeria program checks a customer's requested toppings. Independent ifs add every requested topping, while an elif chain wrongly stops after the first. Later versions handle an out-of-stock topping inside a loop, ask before making a plain pizza when the list is empty, and reject requests that aren't on an available-toppings list.</p><p><em>Lesson:</em> Choose separate ifs vs a chain by whether several conditions can be true, and validate input against an allowed list.</p><p><em>Think:</em> Rewrite the topping check so 'olives' is announced as unavailable while every other requested topping is added.</p></div><div class=\"card\"><strong>Case: Amusement park pricing</strong> <em>(amusement_park.py, section 'The if-elif-else Chain')</em><p>Ticket prices depend on age bands: free for small children, a reduced price for minors, full price for adults, and later a senior discount. The chain sets a price variable and prints one message afterwards, and the book shows replacing the final else with a specific elif.</p><p><em>Lesson:</em> Order tests from most specific to least, and separate deciding a value from displaying it.</p><p><em>Think:</em> Why must the senior test come after age &lt; 65 is checked, or be written as age &gt;= 65, for the chain to price correctly?</p></div><details><summary>Worked problem: Metro fare by age</summary><p>A metro charges ₹0 under age 5, ₹20 from 5 to 17, ₹40 from 18 to 59, and ₹20 at 60 or over. Write an if-elif-else chain that sets fare for age = 63, then prints: Fare: ₹20</p><ol><li>Test the youngest band first: if age &lt; 5: fare = 0.</li><li>elif age &lt; 18: fare = 20 (we already know age ≥ 5).</li><li>elif age &lt; 60: fare = 40.</li><li>else: fare = 20 (only 60+ reaches here).</li><li>After the chain: print(\"Fare: ₹\" + str(fare)). For 63 every test fails until else.</li></ol><p><strong>Answer:</strong> Fare: ₹20</p></details><details><summary>Worked problem: Case-insensitive username check</summary><p>taken = ['ravi', 'meera', 'john']. For new_users = ['Meera', 'Kabir'], print whether each name is available, ignoring case.</p><ol><li>Loop: for name in new_users:</li><li>Compare a lowercase version: if name.lower() in taken:</li><li>print(name + \" is taken, choose another.\")</li><li>else: print(name + \" is available.\")</li></ol><p><strong>Answer:</strong> Meera is taken, choose another. / Kabir is available.</p></details>"
    }
   ]
  },
  {
   "id": "dicts",
   "title": "Dictionaries &amp; nesting",
   "tag": "Lecture 21",
   "lede": "Key-value pairs: the structure for connecting pieces of information. Part 1 covers creating, reading, adding, changing and deleting pairs.",
   "topics": [
    {
     "t": "Working with dictionaries",
     "src": "L#21",
     "h": "\n<p style=\"font-size:14.5px\">The dictionaries chapter has three parts: <strong>working with dictionaries</strong> (this lecture), <strong>looping through a dictionary</strong> (next) and <strong>nesting</strong>. A dictionary lets you model a real-world thing more fully, for example a person with a name, age, city and profession, or pair up two kinds of information: words and meanings, people and favourite numbers, mountains and elevations.</p>\n<h4>A simple dictionary</h4>\n<pre>alien_0 = {'color': 'green', 'points': 5}\nprint(alien_0['color'])\nprint(alien_0['points'])\n<span class=\"c\"># prints:</span>\n<span class=\"o\">green</span>\n<span class=\"o\">5</span></pre>\n<div class=\"def\">A <b>dictionary</b> is a collection of <b>key-value pairs</b> inside <b>curly braces</b>. Each <b>key</b> (<code>'color'</code>) is joined to its <b>value</b> (<code>'green'</code>) by a <b>colon</b>; pairs are separated by <b>commas</b>. You use the key to get its value.</div>\n<ul>\n<li>Lists use square brackets; dictionaries use curly braces.</li>\n<li>A value can be a number, a string, a list or even another dictionary: any object Python can make.</li>\n<li>There's no limit to how many pairs one dictionary can hold.</li>\n</ul>\n<p style=\"font-size:14.5px\">His class example mixes value types in one dictionary:</p>\n<pre>student_0 = {'program': 'BSMT', 'module': 'Foundations of Computing', 'roll_number': 12}\nprint(student_0['program'])\nprint(student_0['module'])\nprint(student_0['roll_number'])\n<span class=\"c\"># prints:</span>\n<span class=\"o\">BSMT</span>\n<span class=\"o\">Foundations of Computing</span>\n<span class=\"o\">12</span></pre>\n<h4>Accessing a value</h4>\n<p style=\"font-size:14.5px\">Name of the dictionary, then the key in square brackets. A number taken out of a dictionary still needs <code>str()</code> before it can be joined to text:</p>\n<pre>alien_0 = {'color': 'green', 'points': 5}\nnew_points = alien_0['points']\nprint(\"You just earned \" + str(new_points) + \" points!\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">You just earned 5 points!</span></pre>\n<h4>Adding new key-value pairs</h4>\n<p style=\"font-size:14.5px\">Dictionaries are dynamic. Assign to a key that isn't there yet and the pair is added. Here the alien gets screen coordinates:</p>\n<pre>alien_0 = {'color': 'green', 'points': 5}\nprint(alien_0)\nalien_0['x_position'] = 0\nalien_0['y_position'] = 25\nprint(alien_0)\n<span class=\"c\"># prints:</span>\n<span class=\"o\">{'color': 'green', 'points': 5}</span>\n<span class=\"o\">{'color': 'green', 'points': 5, 'x_position': 0, 'y_position': 25}</span></pre>\n<p style=\"font-size:14.5px\">On Colab (Python 3.7 and later) the pairs come back in the order they were added, as in his output. The textbook says dictionaries keep no order; that statement is out of date.</p>\n<h4>Starting with an empty dictionary</h4>\n<pre>alien_0 = {}\nalien_0['color'] = 'green'\nalien_0['points'] = 5\nprint(alien_0)\n<span class=\"c\"># prints:</span>\n<span class=\"o\">{'color': 'green', 'points': 5}</span></pre>\n<p style=\"font-size:14.5px\">An empty pair of braces is an empty dictionary. You typically start this way when users supply the data, or when code generates many pairs automatically.</p>\n<h4>Modifying a value</h4>\n<pre>alien_0 = {'color': 'green'}\nprint(\"The alien is \" + alien_0['color'] + \".\")\nalien_0['color'] = 'yellow'\nprint(\"The alien is now \" + alien_0['color'] + \".\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">The alien is green.</span>\n<span class=\"o\">The alien is now yellow.</span></pre>\n<p style=\"font-size:14.5px\">Same syntax as adding: if the key exists, its value is overwritten.</p>\n<h4>Worked example: an alien that moves at different speeds</h4>\n<p style=\"font-size:14.5px\">An if-elif-else chain reads one value from the dictionary to decide how far to move, then writes the new position back:</p>\n<pre>alien_0 = {'x_position': 0, 'y_position': 25, 'speed': 'medium'}\nprint(\"Original x-position: \" + str(alien_0['x_position']))\n\n# Move the alien right, by an amount that depends on its speed\nif alien_0['speed'] == 'slow':\n    x_increment = 1\nelif alien_0['speed'] == 'medium':\n    x_increment = 2\nelse:\n    x_increment = 3\n\nalien_0['x_position'] = alien_0['x_position'] + x_increment\nprint(\"New x-position: \" + str(alien_0['x_position']))\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Original x-position: 0</span>\n<span class=\"o\">New x-position: 2</span></pre>\n<p style=\"font-size:14.5px\">Medium speed means an increment of 2, so x goes from 0 to 2. Set <code>alien_0['speed'] = 'fast'</code> in the starting dictionary and the else branch moves it 3 instead.</p>\n<h4>Removing a key-value pair</h4>\n<pre>alien_0 = {'color': 'green', 'points': 5}\nprint(alien_0)\ndel alien_0['points']\nprint(alien_0)\n<span class=\"c\"># prints:</span>\n<span class=\"o\">{'color': 'green', 'points': 5}</span>\n<span class=\"o\">{'color': 'green'}</span></pre>\n<p style=\"font-size:14.5px\"><code>del</code> takes the dictionary name and the key, and removes the key <em>and</em> its value <strong>permanently</strong>; the pair no longer exists for the rest of the program.</p>\n<!--viz:foc-dict-keys-values--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"The alien_0 dictionary drawn as four keys (color, points, x_position, y_position), each with an arrow to its value (green, 5, 0, 25); alien_0['points'] gives 5.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Keys point to values</div><div style=\"font-size:14px\">\n<p style=\"margin:0 0 8px;font-family:var(--mono);font-size:13.5px\">alien_0 = {'color': 'green', 'points': 5, 'x_position': 0, 'y_position': 25}</p>\n<div style=\"display:grid;grid-template-columns:auto auto 1fr;gap:6px 8px;align-items:center;max-width:360px\">\n<div style=\"color:var(--ink-3);font-size:12.5px\">key</div><div></div><div style=\"color:var(--ink-3);font-size:12.5px\">value</div>\n<div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">'color'</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><span style=\"font-family:var(--mono)\">'green'</span></div>\n<div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">'points'</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><span style=\"font-family:var(--mono)\">5</span></div>\n<div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">'x_position'</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><span style=\"font-family:var(--mono)\">0</span></div>\n<div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><span style=\"font-family:var(--mono)\">'y_position'</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><span style=\"font-family:var(--mono)\">25</span></div>\n</div>\n<p style=\"margin:10px 0 0;font-family:var(--mono);font-size:13.5px\">alien_0['points'] <span style=\"color:var(--ink-3)\">→</span> 5</p>\n</div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">You reach a value through its key, never through a position number.</figcaption></figure><!--/viz:foc-dict-keys-values--><!--viz:foc-dict-step-trace--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Trace of alien_0 from an empty dictionary: color and points are added, color is overwritten to yellow, and del removes points, leaving only color: yellow.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">One dictionary, five statements</div><div class=\"scroller\"><table><thead><tr><th>Statement</th><th>alien_0 afterwards</th><th>What happened</th></tr></thead><tbody><tr><td style=\"font-family:var(--mono)\">alien_0 = {}</td><td style=\"font-family:var(--mono)\">{}</td><td>start empty</td></tr><tr><td style=\"font-family:var(--mono)\">alien_0['color'] = 'green'</td><td style=\"font-family:var(--mono)\">{'color': 'green'}</td><td>new key: added</td></tr><tr><td style=\"font-family:var(--mono)\">alien_0['points'] = 5</td><td style=\"font-family:var(--mono)\">{'color': 'green', 'points': 5}</td><td>new key: added</td></tr><tr><td style=\"font-family:var(--mono)\">alien_0['color'] = 'yellow'</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">{'color': 'yellow', 'points': 5}</td><td>existing key: overwritten</td></tr><tr><td style=\"font-family:var(--mono)\">del alien_0['points']</td><td style=\"font-family:var(--mono)\">{'color': 'yellow'}</td><td>pair removed for good</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Assigning to a new key adds a pair; assigning to an existing key overwrites it.</figcaption></figure><!--/viz:foc-dict-step-trace--><!--viz:foc-list-vs-dict--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Comparison table of a list and a dictionary: brackets, what each entry is, how to look up, add, change and remove an entry.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">List vs dictionary, operation by operation</div><div class=\"scroller\"><table><thead><tr><th></th><th>List</th><th>Dictionary</th></tr></thead><tbody><tr><td>Brackets</td><td style=\"font-family:var(--mono)\">[ ]</td><td style=\"font-family:var(--mono)\">{ }</td></tr><tr><td>Each entry</td><td>a value</td><td>a key: value pair</td></tr><tr><td>Look up by</td><td style=\"font-family:var(--mono)\">bikes[0]</td><td style=\"font-family:var(--mono)\">alien_0['color']</td></tr><tr><td>Add</td><td style=\"font-family:var(--mono)\">bikes.append('trek')</td><td style=\"font-family:var(--mono)\">alien_0['speed'] = 'slow'</td></tr><tr><td>Change</td><td style=\"font-family:var(--mono)\">bikes[0] = 'trek'</td><td style=\"font-family:var(--mono)\">alien_0['color'] = 'red'</td></tr><tr><td>Remove</td><td style=\"font-family:var(--mono)\">del bikes[0]</td><td style=\"font-family:var(--mono)\">del alien_0['color']</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">A list is looked up by position; a dictionary by key, and adding is plain assignment.</figcaption></figure><!--/viz:foc-list-vs-dict-->"
    },
    {
     "t": "A dictionary of similar objects",
     "src": "L#21",
     "h": "\n<p style=\"font-size:14.5px\">The alien dictionary holds many kinds of information about <em>one</em> object. A dictionary can also hold <em>one</em> kind of information about <em>many</em> objects, such as the results of a poll:</p>\n<pre>favorite_languages = {\n    'jen': 'python',\n    'sarah': 'c',\n    'edward': 'ruby',\n    'phil': 'python',\n    }\nprint(\"Sarah's favorite language is \" +\n    favorite_languages['sarah'].title() +\n    \".\")\n<span class=\"c\"># prints:</span>\n<span class=\"o\">Sarah's favorite language is C.</span></pre>\n<ul>\n<li>A long dictionary can be split over lines: open the brace, press Enter, put one pair per line with a comma after each, close the brace on its own line.</li>\n<li>A long <code>print</code> can be split after a <code>+</code> too. Python keeps reading until the opening parenthesis is matched by its closing one, the same way it reads to the closing brace of a dictionary.</li>\n<li>Keys must be different from each other; values can repeat (jen and phil both chose python).</li>\n</ul>\n<div class=\"card\"><b>Practice set from the lecture.</b> (1) <b>Person:</b> store first_name, last_name, age and city for someone you know and print each. (2) <b>Favourite numbers:</b> five names as keys, a favourite number for each; he suggested polling real friends, which makes it <em>primary data</em> (L5). (3) <b>Glossary:</b> five programming words you have learnt (append, insert…) as keys and their meanings as values; print each word and meaning neatly, using <code>\\n</code> for a blank line between entries.</div>\n<pre>glossary = {\n    'append': 'adds an item to the end of a list',\n    'insert': 'adds an item at a chosen position in a list',\n    }\nprint(\"append:\\n\\t\" + glossary['append'] + \"\\n\")\nprint(\"insert:\\n\\t\" + glossary['insert'])\n<span class=\"c\"># prints:</span>\n<span class=\"o\">append:</span>\n<span class=\"o\">\tadds an item to the end of a list</span>\n<span class=\"o\"></span>\n<span class=\"o\">insert:</span>\n<span class=\"o\">\tadds an item at a chosen position in a list</span></pre>\n"
    }
   ]
  }
 ],
 "topics": [
  {
   "name": "Data classification",
   "unit": "classify"
  },
  {
   "name": "Computing & IPO",
   "unit": "computing"
  },
  {
   "name": "Data & DIKW",
   "unit": "data"
  },
  {
   "name": "DIKW ladder",
   "unit": "data"
  },
  {
   "name": "Algorithms",
   "unit": "algo"
  },
  {
   "name": "Hardware",
   "unit": "hardware"
  },
  {
   "name": "Software & OS",
   "unit": "software"
  },
  {
   "name": "Python basics",
   "unit": "python"
  },
  {
   "name": "Lists & tuples",
   "unit": "lists"
  },
  {
   "name": "if statements",
   "unit": "ifs"
  },
  {
   "name": "Dictionaries",
   "unit": "dicts"
  }
 ],
 "traps": [
  {
   "id": "foc-t0001",
   "h": "Computing ≠ computer",
   "p": "Computing is the abstract method of solving problems in defined steps. He said outright: don't mention computers when defining it.",
   "f": "Computing is older than the machine"
  },
  {
   "id": "foc-t0002",
   "h": "Input: zero or more. Output: at least one.",
   "p": "The two algorithm properties are not symmetric. “Hello World” has zero inputs and is still valid.",
   "f": "0+ in, 1+ out"
  },
  {
   "id": "foc-t0003",
   "h": "Index starts at 0",
   "p": "A list of length 4 has indices 0–3. lst[4] raises IndexError: list index out of range.",
   "f": "len 4 → max index 3"
  },
  {
   "id": "foc-t0004",
   "h": "range() and slices exclude the end",
   "p": "range(1,5) gives 1,2,3,4. players[0:3] gives indices 0,1,2.",
   "f": "start inclusive, end exclusive"
  },
  {
   "id": "foc-t0005",
   "h": "sort() vs sorted()",
   "p": "sort() is a method and changes the list permanently. sorted() is a function and returns a new list, leaving the original alone.",
   "f": "method = permanent, function = copy"
  },
  {
   "id": "foc-t0006",
   "h": "reverse() doesn't alphabetise",
   "p": "It only inverts the current order. Reverse-alphabetical needs sort(reverse=True).",
   "f": "reverse ≠ sort"
  },
  {
   "id": "foc-t0007",
   "h": "del vs pop vs remove",
   "p": "del = by position, value lost. pop = by position, value returned. remove = by value, first occurrence only.",
   "f": "position / position+keep / value"
  },
  {
   "id": "foc-t0008",
   "h": "Copying: [:] not =",
   "p": "friend = my_list makes a second name for the same list. friend = my_list[:] makes a real copy.",
   "f": "brackets or it's not a copy"
  },
  {
   "id": "foc-t0009",
   "h": "Tuple: element no, whole tuple yes",
   "p": "dimensions[0] = 250 raises TypeError. dimensions = (400,100) is fine — that rebinds the variable.",
   "f": "immutable elements, mutable name"
  },
  {
   "id": "foc-t0010",
   "h": "No colon in a comprehension",
   "p": "[value**2 for value in range(1,11)] has no trailing colon, unlike a real for loop.",
   "f": "comprehension = no colon"
  },
  {
   "id": "foc-t0011",
   "h": "The silent indentation error",
   "p": "Forgetting to indent an extra line inside a loop gives NO error. It runs once after the loop with the last value. The other three indentation mistakes are syntax errors.",
   "f": "logical error, not syntax"
  },
  {
   "id": "foc-t0012",
   "h": "Defragmentation is for HDDs",
   "p": "The slide says defrag reorganises fragmented files on an HDD and is not needed for SSDs.",
   "f": "HDD only"
  },
  {
   "id": "foc-t0013",
   "h": "ALU does arithmetic AND logic",
   "p": "The Control Unit fetches, decodes and schedules — it doesn't calculate.",
   "f": "ALU computes, CU directs"
  },
  {
   "id": "foc-t0014",
   "h": "Accelerometer vs gyroscope",
   "p": "Accelerometer: movement and orientation (screen rotation, step count). Gyroscope: rotational movement (gaming, stabilisation).",
   "f": "gyro = rotation"
  },
  {
   "id": "foc-t0015",
   "h": "Panel vs time series",
   "p": "Time series = ONE subject, many time points. Panel = MANY subjects, many time points.",
   "f": "count the subjects"
  },
  {
   "id": "foc-t0016",
   "h": "Nominal vs ordinal",
   "p": "Nominal has no natural order (blood group, city). Ordinal has order with unequal gaps (1★–5★, Poor/Fair/Good).",
   "f": "order? then ordinal"
  },
  {
   "id": "foc-t0017",
   "h": "Division always returns a float",
   "p": "3 / 2 gives 1.5, not 1. And ** is exponentiation, not *.",
   "f": "/ → float, ** → power"
  },
  {
   "id": "foc-t0018",
   "h": "str() for concatenation",
   "p": "Writing ‘happy’ + 23 raises TypeError. Wrap the number: ‘happy’ + str(23).",
   "f": "TypeError, fix with str()"
  },
  {
   "id": "foc-t0019",
   "h": "print must be lowercase",
   "p": "Python is case-sensitive. Print(\"Hi\") is not a typo Python forgives: it raises NameError because no name Print exists.",
   "f": "Print ≠ print",
   "bk": "Python Crash Course ch1"
  },
  {
   "id": "foc-t0020",
   "h": "A typo inside the quotes raises no error",
   "p": "print(\"Helo world\") runs fine and prints the misspelling. Python only checks code, not the text inside a string. Typos in the code itself (print, brackets, quotes) do raise errors.",
   "f": "strings aren't spell-checked",
   "bk": "Python Crash Course ch1"
  },
  {
   "id": "foc-t0021",
   "h": "The >>> prompt echoes values; a .py script does not",
   "p": "Typing 2 + 3 at >>> shows 5. The same line in a saved script is computed and thrown away, so nothing appears. In a script, use print() to see a value.",
   "f": "script → print it",
   "bk": "Python Crash Course ch1"
  },
  {
   "id": "foc-t0022",
   "h": "dir on Windows, ls on Linux/macOS",
   "p": "Both list the files in the current folder. cd (change directory) works on all three systems.",
   "f": "Windows says dir",
   "bk": "Python Crash Course ch1"
  },
  {
   "id": "foc-t0023",
   "h": "String methods don't change the variable",
   "p": "name.upper() or lang.strip() on its own line computes a new string and throws it away. The variable keeps its old value unless you write name = name.upper().",
   "f": "store it back",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-t0024",
   "h": "+ adds no space between strings",
   "p": "\"ravi\" + \"kumar\" gives ravikumar. Put the space in yourself: first + \" \" + last.",
   "f": "+ glues, never spaces",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-t0025",
   "h": "A consistent misspelling is not an error",
   "p": "If you write mesage in both the assignment and the print, the program runs. Python only checks that names match each other, not English spelling.",
   "f": "consistent ≠ correct",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-t0026",
   "h": "Apostrophe inside single quotes is a SyntaxError",
   "p": "In 'Asha's pen' the string ends at the apostrophe and the rest is read as code. Use double quotes around text containing an apostrophe.",
   "f": "apostrophe → double quotes",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-t0027",
   "h": "Even exact division gives a float",
   "p": "8 / 4 is 2.0, not 2. In Python 3, / always produces a float, whatever the operands.",
   "f": "/ always .0",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-t0028",
   "h": "Naming a variable print isn't an error until you call print",
   "p": "print = \"hi\" is accepted, but the next print(...) fails with TypeError: 'str' object is not callable. Real keywords such as if or while fail immediately with SyntaxError.",
   "f": "keyword fails now, built-in fails later",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-t0029",
   "h": "Python 2 integer division (background)",
   "p": "The book notes that Python 2 gave 3 / 2 = 1, dropping the remainder. Python 3, the only version used in this course, gives 1.5.",
   "f": "Py2 truncates, Py3 floats",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-t0030",
   "h": "print(lst.sort()) prints None",
   "p": "sort() changes the list in place and returns None. So print(lst.sort()) shows None, and lst = lst.sort() destroys your list. Sort first, then print lst, or use sorted(lst).",
   "f": "sort() returns None",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-t0031",
   "h": "lst[-1] fails on an empty list",
   "p": "Negative indexing still needs at least one item. On [] both lst[0] and lst[-1] raise IndexError.",
   "f": "empty list, no last item",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-t0032",
   "h": "insert() shifts the indices of later items",
   "p": "After lst.insert(0, x), the old first item is now at index 1, and every later item moves up one too. Any index you saved earlier now points at a different item.",
   "f": "insert shifts right",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-t0033",
   "h": "lst[i] = x replaces; it doesn't insert",
   "p": "Assigning to an index overwrites the item there and the length stays the same. To add without losing anything, use insert() or append().",
   "f": "assign overwrites",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-t0034",
   "h": "Capital letters sort before all lowercase",
   "p": "sorted(['mango', 'apple', 'Banana']) gives ['Banana', 'apple', 'mango'], because uppercase letters come before lowercase in Python's character order. The book warns that mixed-case sorting is 'more complicated'; keep the case consistent if you want true alphabetical order.",
   "f": "Z before a",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-t0035",
   "h": "The last index is len − 1, not len",
   "p": "lst[len(lst)] is always an IndexError. The last item is lst[len(lst) - 1], or simply lst[-1].",
   "f": "len counts from 1",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-t0036",
   "h": "Indenting the after-loop line is ALSO a silent error",
   "p": "A summary line accidentally indented into the loop prints once per item instead of once at the end. No error message; the book classes it as a logical error, just like forgetting to indent.",
   "f": "two silent indentation bugs",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-t0037",
   "h": "The loop variable survives the loop",
   "p": "After for n in [3, 8, 5]:, n is still 5. An unindented line using n sees only the final value.",
   "f": "loop var = last item",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-t0038",
   "h": "range(2, 10, 2) stops at 8",
   "p": "The stop value is never included, even when the step would land on it exactly. To get 10, stop at 11 (or any value above 10).",
   "f": "stop is never reached",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-t0039",
   "h": "A slice is a new list",
   "p": "part = lst[1:3] copies those items. Appending to part doesn't touch lst, and slicing never changes the original.",
   "f": "slice = fresh list",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-t0040",
   "h": "Comprehension: expression first, then for",
   "p": "[n * 2 for n in nums] is right; [for n in nums: n * 2] is a SyntaxError. The value to store comes first, and there's no colon.",
   "f": "what, then where from",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-t0041",
   "h": "Don't mix tabs and spaces",
   "p": "Python can't reliably match indentation levels when tabs and spaces are mixed. Set the editor to insert four spaces when you press Tab.",
   "f": "Tab key → 4 spaces",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-t0042",
   "h": "= assigns, == compares",
   "p": "if x = 5: is a SyntaxError. A condition needs ==. Read = as 'set to' and == as 'is it equal to?'.",
   "f": "one sets, two asks",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-t0043",
   "h": "'Audi' == 'audi' is False",
   "p": "String comparison is case-sensitive. Compare lowercase versions (car.lower() == 'audi') when case shouldn't matter; the variable itself is unchanged.",
   "f": "lower() both sides",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-t0044",
   "h": "An elif chain stops at the first True test",
   "p": "Once one test passes, Python skips every later elif and the else, even if they would also be True. Put the narrowest conditions first (age < 4 before age < 18).",
   "f": "first True wins",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-t0045",
   "h": "Several things can be true? Use separate ifs",
   "p": "With elif, a two-topping order only gets the first topping. Independent if statements check every condition.",
   "f": "many true → many ifs",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-t0046",
   "h": "An empty list counts as False",
   "p": "if orders: runs its block only when the list has at least one item. [] fails the test and goes to else.",
   "f": "[] is False",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-t0047",
   "h": "A simple if can produce no output",
   "p": "With no else, a failing test just skips the block. There is no error and no message.",
   "f": "no else, maybe nothing",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-t0048",
   "h": "and needs both; or needs one",
   "p": "22 >= 21 and 18 >= 21 is False, because one side fails. The same tests joined by or give True. or is False only when every part is False.",
   "f": "and = all, or = any",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-t0049",
   "h": "lower() in a test does not change the variable",
   "p": "car.lower() == 'audi' compares a lowercase copy. Printing car afterwards still shows Audi; only car = car.lower() would change it.",
   "f": "lower() copies, never edits",
   "lec": 17
  },
  {
   "id": "foc-t0050",
   "h": "!= is True when the values differ",
   "p": "'mushrooms' != 'anchovies' is True, so the if block runs. It is False only when the two values are the same.",
   "f": "! means not",
   "lec": 17
  },
  {
   "id": "foc-t0051",
   "h": "<= and >= include the boundary",
   "p": "With age = 21, age >= 21 and age <= 21 are both True, while age > 21 is False. Boundary values are where most wrong answers come from.",
   "f": "= side counts equality",
   "lec": 17
  },
  {
   "id": "foc-t0052",
   "h": "True and False must be capitalised",
   "p": "They are keywords. game_active = true raises a NameError, because Python reads true as an undefined variable name.",
   "f": "Capital T, capital F",
   "lec": 17
  },
  {
   "id": "foc-t0053",
   "h": "in matches whole list items, not parts of them",
   "p": "'mush' in ['mushrooms', 'onions'] is False. A list membership test compares the value with each complete item.",
   "f": "Whole items only",
   "lec": 17
  },
  {
   "id": "foc-t0054",
   "h": "L18's 'Python checks all the statements' remark was a slip",
   "p": "Tracing a chain, the lecturer said Python keeps checking the later elifs. It doesn't: once one test passes, the rest of the chain is skipped. He gave the correct rule later in the lecture, and the textbook block agrees.",
   "f": "chain: first True, then exit",
   "lec": 18
  },
  {
   "id": "foc-t0055",
   "h": "Separate ifs never exit early",
   "p": "In the age = -20 demo he said Python stops after the first True if. With independent ifs every test runs; the demo printed only Invalid age because the final if age >= 0 failed.",
   "f": "every if gets tested",
   "lec": 18
  },
  {
   "id": "foc-t0056",
   "h": "Price bands as separate ifs overwrite each other",
   "p": "With separate ifs, age 12 passes age < 18 (price 5) and then age < 65 (price 10), so the child pays $10. Use one if-elif chain when exactly one band should apply.",
   "f": "bands → one chain",
   "lec": 18
  },
  {
   "id": "foc-t0057",
   "h": "A print lined up with if is outside the chain",
   "p": "Indentation decides membership. The single print after the price chain is at the same level as if/elif/else, so it runs once, every time, whichever branch set the price.",
   "f": "same level = outside",
   "lec": 18
  },
  {
   "id": "foc-t0058",
   "h": "Test order matters, list order doesn't",
   "p": "In an if-elif chain over requested toppings, the first test written that passes wins, wherever that topping sits in the list.",
   "f": "chain order decides",
   "lec": 18
  },
  {
   "id": "foc-t0059",
   "h": "motorcycles[0] = 'ducati' replaces Honda; it does not add Ducati",
   "p": "Assigning to an index points that position at a new value, so the old one is gone and the list stays the same length. Adding needs insert() or append().",
   "f": "= on an index replaces",
   "lec": 19
  },
  {
   "id": "foc-t0060",
   "h": "Never test floats with ==",
   "p": "0.1 + 0.2 is stored as 0.30000000000000004, so 0.1 + 0.2 == 0.3 is False. Format the result for display (:.3f) and compare floats with care.",
   "f": "0.1 + 0.2 ≠ 0.3",
   "lec": 19
  },
  {
   "id": "foc-t0061",
   "h": "Two TypeError messages for one mistake",
   "p": "'Happy ' + 23 says can only concatenate str (not \"int\") to str; 23 + ' Happy' says unsupported operand type(s) for +. Same cause, same fix: str(23).",
   "f": "who comes first sets the message",
   "lec": 19
  },
  {
   "id": "foc-t0062",
   "h": "Removing during a for loop over the same list skips items",
   "p": "The lecture said to loop to remove every copy of a value. A for loop over the list being shrunk skips the next item, so one copy can survive. Use while value in lst: lst.remove(value).",
   "f": "while ... in, then remove",
   "lec": 19
  },
  {
   "id": "foc-t0063",
   "h": ".title() on a whole sentence capitalises every word",
   "p": "('error: python is fun!').title() gives Error: Python Is Fun!, with a capital I on is. Apply title() only to the part that should be in title case.",
   "f": "title() hits every word",
   "lec": 19
  },
  {
   "id": "foc-t0064",
   "h": "'Make it case sensitive' in the username exercise means case-insensitive",
   "p": "The lecture's wording says case sensitive, but the stated goal (refuse JOHN when John exists) needs a case-insensitive check: lowercase both sides. The textbook block says case-insensitive, and that is the behaviour to code.",
   "f": "JOHN = john → lower() both",
   "lec": 20
  },
  {
   "id": "foc-t0065",
   "h": "The 'Finished' line goes after the loop, not inside it",
   "p": "In his demo the closing message printed after every topping because it was indented under for. One level out, it prints once. No error is raised either way.",
   "f": "dedent the closing line",
   "lec": 20
  },
  {
   "id": "foc-t0066",
   "h": "in already searches the second list",
   "p": "To check requests against available items you need one for loop over the requests and an in test. You don't need a nested loop over the available list.",
   "f": "one loop + in",
   "lec": 20
  },
  {
   "id": "foc-t0067",
   "h": "A list holding an empty string is not empty",
   "p": "if ['']: is True, because the list has one item (the empty string). Only [] itself counts as False.",
   "f": "[] is False; [''] is True",
   "lec": 20
  },
  {
   "id": "foc-t0068",
   "h": "An if inside the loop tests items; an if around it tests the list",
   "p": "if topping == 'green peppers' inside the loop runs once per item. if requested_toppings: around the loop runs once, on the whole list.",
   "f": "inside = each, around = once",
   "lec": 20
  },
  {
   "id": "foc-t0069",
   "h": "Dictionaries have no append(); assignment adds a pair",
   "p": "alien_0['x_position'] = 0 adds the pair when the key is new. append() and insert() are list methods.",
   "f": "new key + = → added",
   "lec": 21
  },
  {
   "id": "foc-t0070",
   "h": "A key must be in quotes",
   "p": "alien_0[color] makes Python look for a variable called color and raises a NameError. Write alien_0['color'].",
   "f": "keys are strings: quote them",
   "lec": 21
  },
  {
   "id": "foc-t0071",
   "h": "A number from a dictionary still needs str() before +",
   "p": "'Roll ' + student_0['roll_number'] raises a TypeError because the value is the int 12. Write 'Roll ' + str(student_0['roll_number']).",
   "f": "int out → str() it",
   "lec": 21
  },
  {
   "id": "foc-t0072",
   "h": "Dictionary order: the lecture output is right, the book is out of date",
   "p": "Python 3.7+ (Colab) keeps pairs in the order they were added, which is what his printed dictionaries show. The textbook's claim that order isn't kept predates that.",
   "f": "insertion order on Colab",
   "lec": 21
  },
  {
   "id": "foc-t0073",
   "h": "A repeated key keeps only its last value",
   "p": "Keys are unique. {'a': 1, 'a': 2} becomes {'a': 2}: the second value overwrites the first, so you get one pair, not two.",
   "f": "one key, one value",
   "lec": 21
  }
 ],
 "defs": [
  {
   "id": "foc-d0001",
   "unit": "computing",
   "topic": "What computing actually is",
   "term": "Computing",
   "html": "<b>Computing</b> is the process of using <b>well-defined steps</b> to solve problems by collecting information, processing it, and producing a useful result."
  },
  {
   "id": "foc-d0002",
   "unit": "computing",
   "topic": "The IPO model",
   "term": "Input → Process → Output",
   "html": "<b>Input → Process → Output.</b> Universal: it describes a calculator and an AI system equally well."
  },
  {
   "id": "foc-d0003",
   "unit": "computing",
   "topic": "Computing in non-tech industries",
   "term": "Most critical IPO step: Process",
   "html": "Zara is a set-piece question, asked on slide 41. <b>Most critical IPO step: Process</b> (the algorithmic analysis). <b>Data type: time series.</b>"
  },
  {
   "id": "foc-d0004",
   "unit": "data",
   "topic": "Data — the definition",
   "term": "Data",
   "html": "<b>Data</b> is any <b>raw, unprocessed fact or observation</b> that can be recorded and stored. By itself it has no meaning."
  },
  {
   "id": "foc-d0005",
   "unit": "data",
   "topic": "DIKW — Data → Information → Knowledge → Wisdom",
   "term": "acting at the Information level",
   "html": "Slide 58 asks this directly: the bank goes wrong by <b>acting at the Information level</b> without climbing to Knowledge and Wisdom."
  },
  {
   "id": "foc-d0006",
   "unit": "data",
   "topic": "DIKW — Data → Information → Knowledge → Wisdom",
   "term": "The trap that actually catches people",
   "html": "<b>The trap that actually catches people.</b> Every rung&rsquo;s description sounds like the rung below it.\n   &ldquo;Accumulated information interpreted through pattern recognition&rdquo; is <b>Knowledge</b>, not Wisdom.\n   &ldquo;Millions of users did X at the same second&rdquo; is <b>Information</b>, not Knowledge &mdash; it counts, it does not explain.\n   When a stem names a rung, check whether the option you like is quietly describing the one beneath it."
  },
  {
   "id": "foc-d0007",
   "unit": "classify",
   "topic": "2 · Across time: cross-sectional / panel / time series",
   "term": "how many subjects × how many time points",
   "html": "The whole distinction is a 2×2: <b>how many subjects × how many time points.</b> Panel is the rich one — it does both, so you can ask “who improved most?”"
  },
  {
   "id": "foc-d0008",
   "unit": "classify",
   "topic": "4 · By origin: primary / secondary / metadata",
   "term": "Metadata",
   "html": "<b>Metadata</b> = data about data. It describes data without being the data itself."
  },
  {
   "id": "foc-d0009",
   "unit": "algo",
   "topic": "Definition and origin",
   "term": "algorithm",
   "html": "An <b>algorithm</b> is a <b>finite, unambiguous, step-by-step procedure</b> for solving a well-defined problem. It takes input, processes it through defined steps, and produces a correct output every time."
  },
  {
   "id": "foc-d0010",
   "unit": "software",
   "topic": "The three layers of software",
   "term": "Software",
   "html": "<b>Software</b> is the set of instructions that tells hardware what to do. Without it, a computer is an inert collection of components."
  },
  {
   "id": "foc-d0011",
   "unit": "software",
   "topic": "Operating systems",
   "term": "it asks the OS to do it",
   "html": "When your Python program reads a file or prints to screen, <b>it asks the OS to do it.</b> The OS is the intermediary between your code and the hardware."
  },
  {
   "id": "foc-d0012",
   "unit": "python",
   "topic": "Python and Google Colab",
   "term": "Python",
   "html": "<b>Python</b> — high-level, general-purpose, designed by <b>Guido van Rossum</b>, first released in <b>1991</b>."
  },
  {
   "id": "foc-d0013",
   "unit": "python",
   "topic": "Strings",
   "term": "string",
   "html": "A <b>string</b> is a series of characters. Anything inside quotes is a string — single or double."
  },
  {
   "id": "foc-d0014",
   "unit": "lists",
   "topic": "Creating and accessing lists",
   "term": "list",
   "html": "A <b>list</b> is a collection of items in a particular order. Items need not be related or of the same type. Convention: name it in the plural."
  },
  {
   "id": "foc-d0015",
   "unit": "lists",
   "topic": "Adding and removing — the five methods",
   "term": "del",
   "html": "Choosing between them: <b>del</b> when you're finished with the value · <b>pop</b> when you still need it · <b>remove</b> when you know the value but not the position."
  },
  {
   "id": "foc-d0016",
   "unit": "lists",
   "topic": "Copying lists, and tuples",
   "term": "Tuple",
   "html": "<b>Tuple</b> = an immutable list. Values cannot be changed, added or removed after creation. Use <b>parentheses</b> <code>()</code> instead of square brackets."
  },
  {
   "id": "foc-d0017",
   "unit": "python",
   "topic": "Python and Google Colab",
   "term": "Interactive prompt (>>>)",
   "html": "The <b>>>> prompt</b> means you are in a live Python session: each line runs as soon as you press Enter and any value is echoed back.",
   "bk": "Python Crash Course ch1"
  },
  {
   "id": "foc-d0018",
   "unit": "python",
   "topic": "Variables and naming rules",
   "term": "Traceback",
   "html": "A <b>traceback</b> is the error report Python prints when a program fails. It names the file, the line and the error type (NameError, SyntaxError…).",
   "bk": "Python Crash Course ch1"
  },
  {
   "id": "foc-d0019",
   "unit": "software",
   "topic": "Interpreter vs compiler",
   "term": "Text editor with syntax highlighting",
   "html": "A <b>text editor</b> for code colours keywords, strings and comments differently (<b>syntax highlighting</b>) so the structure of a program is easy to see. The book uses Geany or Sublime Text; the course uses Colab.",
   "bk": "Python Crash Course ch1"
  },
  {
   "id": "foc-d0020",
   "unit": "python",
   "topic": "Python and Google Colab",
   "term": "Cross-platform",
   "html": "<b>Cross-platform</b>: the same Python program runs on Windows, macOS and Linux. Only the setup steps differ.",
   "bk": "Python Crash Course ch1"
  },
  {
   "id": "foc-d0021",
   "unit": "python",
   "topic": "Python and Google Colab",
   "term": ".py file",
   "html": "A <b>.py</b> file is a plain Python script. A Colab notebook is a different format, <b>.ipynb</b>, though Colab can download a notebook as .py.",
   "bk": "Python Crash Course ch1"
  },
  {
   "id": "foc-d0022",
   "unit": "python",
   "topic": "Variables and naming rules",
   "term": "Variable",
   "html": "A <b>variable</b> is a name that refers to a value. Assigning to it again replaces the value; Python always uses the current one.",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-d0023",
   "unit": "python",
   "topic": "Variables and naming rules",
   "term": "NameError",
   "html": "<b>NameError</b>: Python met a name it doesn't know, usually a typo or a variable used before it was assigned.",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-d0024",
   "unit": "python",
   "topic": "Strings",
   "term": "SyntaxError",
   "html": "<b>SyntaxError</b>: a line is not valid Python, e.g. an apostrophe inside single quotes or an unclosed bracket. The program doesn't start at all.",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-d0025",
   "unit": "python",
   "topic": "Strings",
   "term": "Method",
   "html": "A <b>method</b> is an action Python performs on a value, written with a dot and brackets: <b>name.upper()</b>. The brackets carry any extra information it needs.",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-d0026",
   "unit": "python",
   "topic": "Strings",
   "term": "Concatenation",
   "html": "<b>Concatenation</b> joins strings with <b>+</b>. Nothing is added between the pieces, so include spaces yourself.",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-d0027",
   "unit": "python",
   "topic": "Strings",
   "term": "Whitespace",
   "html": "<b>Whitespace</b> = characters that print as blank space: spaces, tabs (<b>\\t</b>) and newlines (<b>\\n</b>).",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-d0028",
   "unit": "python",
   "topic": "Numbers, type conversion, comments",
   "term": "Float",
   "html": "A <b>float</b> is any number with a decimal point. Dividing with <b>/</b> always gives a float, e.g. 8 / 4 → 2.0.",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-d0029",
   "unit": "python",
   "topic": "Numbers, type conversion, comments",
   "term": "TypeError",
   "html": "<b>TypeError</b>: an operation was used on the wrong kind of value, e.g. joining a string and an int with +. Fix with <b>str()</b>.",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-d0030",
   "unit": "python",
   "topic": "Numbers, type conversion, comments",
   "term": "Comment",
   "html": "A <b>comment</b> starts with <b>#</b>. The interpreter ignores the rest of that line; it is written for human readers.",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-d0031",
   "unit": "python",
   "topic": "Python and Google Colab",
   "term": "Zen of Python",
   "html": "The <b>Zen of Python</b> (shown by <b>import this</b>) lists Python's design principles: simple over complex, readability counts.",
   "bk": "Python Crash Course ch2"
  },
  {
   "id": "foc-d0032",
   "unit": "lists",
   "topic": "Creating and accessing lists",
   "term": "Index",
   "html": "An <b>index</b> is an item's position in a list, counted from <b>0</b>. Negative indices count from the end: <b>-1</b> is the last item.",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-d0033",
   "unit": "lists",
   "topic": "Adding and removing — the five methods",
   "term": "append()",
   "html": "<b>append(x)</b> adds x to the <b>end</b> of a list without disturbing the other items.",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-d0034",
   "unit": "lists",
   "topic": "Adding and removing — the five methods",
   "term": "insert()",
   "html": "<b>insert(i, x)</b> places x at index i; items already at i and beyond shift one place right.",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-d0035",
   "unit": "lists",
   "topic": "Adding and removing — the five methods",
   "term": "pop()",
   "html": "<b>pop()</b> removes the last item <b>and returns it</b>; <b>pop(i)</b> does the same for index i.",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-d0036",
   "unit": "lists",
   "topic": "Adding and removing — the five methods",
   "term": "remove()",
   "html": "<b>remove(value)</b> deletes the <b>first</b> item equal to value. Use it when you know the value but not its position.",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-d0037",
   "unit": "lists",
   "topic": "Organising: sort, sorted, reverse, len",
   "term": "sorted()",
   "html": "<b>sorted(lst)</b> is a function that returns a <b>new</b> sorted list; the original keeps its order.",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-d0038",
   "unit": "lists",
   "topic": "Organising: sort, sorted, reverse, len",
   "term": "len()",
   "html": "<b>len(lst)</b> returns the number of items. Last valid index = len(lst) − 1.",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-d0039",
   "unit": "lists",
   "topic": "Organising: sort, sorted, reverse, len",
   "term": "IndexError",
   "html": "<b>IndexError: list index out of range</b>: you asked for a position the list doesn't have, e.g. lst[3] on a 3-item list, or lst[-1] on an empty one.",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-d0040",
   "unit": "lists",
   "topic": "Adding and removing — the five methods",
   "term": "Dynamic list",
   "html": "A <b>dynamic</b> list grows and shrinks as the program runs: items are appended, inserted and removed along the way.",
   "bk": "Python Crash Course ch3"
  },
  {
   "id": "foc-d0041",
   "unit": "lists",
   "topic": "Looping and indentation errors",
   "term": "for loop",
   "html": "A <b>for loop</b> repeats its indented block once for each item in a sequence, storing the current item in the loop variable.",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-d0042",
   "unit": "lists",
   "topic": "Looping and indentation errors",
   "term": "Logical error",
   "html": "A <b>logical error</b>: the code is valid Python and runs, but gives the wrong result, e.g. a line indented into, or left out of, a loop by mistake.",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-d0043",
   "unit": "lists",
   "topic": "Looping and indentation errors",
   "term": "IndentationError",
   "html": "<b>IndentationError</b> (a kind of SyntaxError): <b>expected an indented block</b> (nothing indented after a for line) or <b>unexpected indent</b> (indented for no reason).",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-d0044",
   "unit": "lists",
   "topic": "range(), numerical lists and comprehensions",
   "term": "range()",
   "html": "<b>range(start, stop, step)</b> generates numbers from start up to but <b>not including</b> stop, in jumps of step.",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-d0045",
   "unit": "lists",
   "topic": "range(), numerical lists and comprehensions",
   "term": "List comprehension",
   "html": "A <b>list comprehension</b> builds a list in one line: <b>[expression for item in iterable]</b>. No colon.",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-d0046",
   "unit": "lists",
   "topic": "Slicing",
   "term": "Slice",
   "html": "A <b>slice</b> <b>lst[a:b]</b> is a new list of items a to b − 1. Omitting a starts at 0; omitting b runs to the end.",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-d0047",
   "unit": "lists",
   "topic": "Copying lists, and tuples",
   "term": "Immutable",
   "html": "<b>Immutable</b> = cannot be changed after it is created. A tuple is an immutable list.",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-d0048",
   "unit": "lists",
   "topic": "Looping and indentation errors",
   "term": "PEP 8",
   "html": "<b>PEP 8</b> is Python's style guide: 4-space indents, lines under 80 characters, sparing blank lines. A <b>PEP</b> is a Python Enhancement Proposal.",
   "bk": "Python Crash Course ch4"
  },
  {
   "id": "foc-d0049",
   "unit": "ifs",
   "topic": "if statements",
   "term": "Conditional test",
   "html": "A <b>conditional test</b> (Boolean expression) is an expression that evaluates to <b>True</b> or <b>False</b>; it decides whether an if block runs.",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-d0050",
   "unit": "ifs",
   "topic": "if statements",
   "term": "Equality operator ==",
   "html": "<b>==</b> asks whether two values are equal and gives True/False. A single <b>=</b> assigns a value.",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-d0051",
   "unit": "ifs",
   "topic": "if statements",
   "term": "Inequality operator !=",
   "html": "<b>!=</b> is True when two values are <b>not</b> equal. The ! stands for 'not'.",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-d0052",
   "unit": "ifs",
   "topic": "if statements",
   "term": "Boolean value",
   "html": "A <b>Boolean value</b> is either <b>True</b> or <b>False</b>, often stored to track state: <b>game_active = True</b>.",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-d0053",
   "unit": "ifs",
   "topic": "if statements",
   "term": "if-elif-else chain",
   "html": "An <b>if-elif-else chain</b> runs exactly the <b>first</b> block whose test passes (or else, if none do), then skips the rest.",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-d0054",
   "unit": "ifs",
   "topic": "if statements",
   "term": "in / not in",
   "html": "<b>in</b> tests whether a value is in a list; <b>not in</b> tests that it isn't.",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-d0055",
   "unit": "ifs",
   "topic": "if statements",
   "term": "else block",
   "html": "The <b>else</b> block is a catch-all that runs when no earlier test passed. It is optional.",
   "bk": "Python Crash Course ch5"
  },
  {
   "id": "foc-d0056",
   "unit": "ifs",
   "topic": "Combining tests: and, or, in, not in, Booleans",
   "term": "Boolean expression",
   "html": "<b>Boolean expression</b>: another name for a conditional test. It always evaluates to <b>True</b> or <b>False</b>.",
   "lec": 17
  },
  {
   "id": "foc-d0057",
   "unit": "ifs",
   "topic": "Conditional tests: equality and comparisons",
   "term": "Comparison operators",
   "html": "<b>Comparison operators</b>: == (equal), != (not equal), &lt;, &lt;=, &gt;, &gt;=. Each returns True or False.",
   "lec": 17
  },
  {
   "id": "foc-d0058",
   "unit": "ifs",
   "topic": "Combining tests: and, or, in, not in, Booleans",
   "term": "and",
   "html": "<b>and</b> joins two tests. The whole expression is True only when <b>both</b> tests are True.",
   "lec": 17
  },
  {
   "id": "foc-d0059",
   "unit": "ifs",
   "topic": "Combining tests: and, or, in, not in, Booleans",
   "term": "or",
   "html": "<b>or</b> joins two tests. The whole expression is True when <b>at least one</b> test is True, and False only when both fail.",
   "lec": 17
  },
  {
   "id": "foc-d0060",
   "unit": "ifs",
   "topic": "Conditional tests: equality and comparisons",
   "term": "Case-insensitive comparison",
   "html": "<b>Case-insensitive comparison</b>: compare lowercase versions, as in name.lower() == 'john'. The stored value keeps its capitals.",
   "lec": 17
  },
  {
   "id": "foc-d0061",
   "unit": "ifs",
   "topic": "if, if-else and if-elif-else",
   "term": "if-else statement",
   "html": "<b>if-else</b>: one block runs when the test passes, the other <b>in all other cases</b>. Exactly one of the two runs.",
   "lec": 18
  },
  {
   "id": "foc-d0062",
   "unit": "ifs",
   "topic": "if, if-else and if-elif-else",
   "term": "elif",
   "html": "<b>elif</b> (else if) adds another test to a chain. It is checked only if every test above it failed. A chain can have as many elifs as needed.",
   "lec": 18
  },
  {
   "id": "foc-d0063",
   "unit": "ifs",
   "topic": "Omitting else, and independent ifs",
   "term": "None",
   "html": "<b>None</b>: a Python keyword meaning <b>no value</b>. price = None marks a variable that has not been given a real value yet.",
   "lec": 18
  },
  {
   "id": "foc-d0064",
   "unit": "ifs",
   "topic": "Omitting else, and independent ifs",
   "term": "Independent if statements",
   "html": "<b>Independent ifs</b>: a series of separate if statements with no elif or else. <b>Every</b> test is checked, so several blocks can run.",
   "lec": 18
  },
  {
   "id": "foc-d0065",
   "unit": "ifs",
   "topic": "Omitting else, and independent ifs",
   "term": "Catch-all else",
   "html": "<b>else</b> matches anything no earlier test matched, which can include invalid data. A final <b>elif</b> with a condition is the stricter alternative.",
   "lec": 18
  },
  {
   "id": "foc-d0066",
   "unit": "python",
   "topic": "Live Lecture 4: strings, numbers and errors",
   "term": "Traceback",
   "html": "<b>Traceback</b>: the error report Python prints when code fails. It names the error type (NameError, TypeError, IndexError…) and the line that caused it. Read every line.",
   "lec": 19
  },
  {
   "id": "foc-d0067",
   "unit": "python",
   "topic": "Live Lecture 4: strings, numbers and errors",
   "term": "Format specifier :.3f",
   "html": "<b>:.3f</b> inside curly braces, as in \"{:.3f}\".format(x), displays a float with exactly <b>3 decimal places</b>. Only the display changes, not the stored value.",
   "lec": 19
  },
  {
   "id": "foc-d0068",
   "unit": "lists",
   "topic": "Live Lecture 4: list operations worked through",
   "term": "Replacing by index",
   "html": "<b>lst[i] = value</b> <b>replaces</b> the item at position i. It never inserts; use insert(i, value) or append(value) to add.",
   "lec": 19
  },
  {
   "id": "foc-d0069",
   "unit": "ifs",
   "topic": "if statements with lists",
   "term": "Empty list as a test",
   "html": "<b>if my_list:</b> is <b>True</b> when the list holds at least one item and <b>False</b> when it is empty, [].",
   "lec": 20
  },
  {
   "id": "foc-d0070",
   "unit": "ifs",
   "topic": "if statements with lists",
   "term": "if inside a for loop",
   "html": "<b>if inside a for loop</b>: the test runs <b>once per item</b>, so special items can be treated differently from the rest.",
   "lec": 20
  },
  {
   "id": "foc-d0071",
   "unit": "ifs",
   "topic": "if statements with lists",
   "term": "for loop inside an if",
   "html": "<b>for loop inside an if</b>: the if checks the <b>whole list once</b> (for example, that it isn't empty) before any looping happens.",
   "lec": 20
  },
  {
   "id": "foc-d0072",
   "unit": "ifs",
   "topic": "if statements with lists",
   "term": "Validating against a list",
   "html": "<b>Validating against a list</b>: test each requested item with <b>in</b> against a list of allowed values; accept matches and reject the rest.",
   "lec": 20
  },
  {
   "id": "foc-d0073",
   "unit": "dicts",
   "topic": "Working with dictionaries",
   "term": "Key",
   "html": "<b>Key</b>: the label in a key-value pair, such as 'color'. You put it in square brackets to get its value: alien_0['color']. Keys in one dictionary are all different.",
   "lec": 21
  },
  {
   "id": "foc-d0074",
   "unit": "dicts",
   "topic": "Working with dictionaries",
   "term": "Value",
   "html": "<b>Value</b>: the data a key points to. It can be a number, a string, a list or <b>another dictionary</b>.",
   "lec": 21
  },
  {
   "id": "foc-d0075",
   "unit": "dicts",
   "topic": "Working with dictionaries",
   "term": "Empty dictionary",
   "html": "<b>{}</b>: an empty dictionary. Pairs are then added one per line, as in alien_0['color'] = 'green'. Used for user-supplied or generated data.",
   "lec": 21
  },
  {
   "id": "foc-d0076",
   "unit": "dicts",
   "topic": "Working with dictionaries",
   "term": "Modifying a dictionary value",
   "html": "<b>dict[key] = new_value</b> on an <b>existing</b> key replaces its old value; on a <b>new</b> key it adds a pair.",
   "lec": 21
  },
  {
   "id": "foc-d0077",
   "unit": "dicts",
   "topic": "Working with dictionaries",
   "term": "del with a dictionary",
   "html": "<b>del alien_0['points']</b> removes the key <b>and</b> its value permanently. Give the dictionary name and the key.",
   "lec": 21
  },
  {
   "id": "foc-d0078",
   "unit": "dicts",
   "topic": "A dictionary of similar objects",
   "term": "Dictionary of similar objects",
   "html": "<b>Dictionary of similar objects</b>: one kind of information about many things, such as each person's favourite language in a poll.",
   "lec": 21
  }
 ],
 "questions": [
  {
   "id": "foc-q0001",
   "topic": "Data classification",
   "q": "Which of the following is an example of structured data?",
   "c": [
    "A WhatsApp voice note",
    "A student mark sheet stored in a database table",
    "A collection of customer complaint emails",
    "A CCTV surveillance video"
   ],
   "a": [
    1
   ],
   "w": "Structured data lives in rows and columns with defined field types — a database table is the textbook case. Voice notes, emails and video are all unstructured.",
   "o": true
  },
  {
   "id": "foc-q0002",
   "topic": "Data classification",
   "q": "Approximately what percentage of all data generated globally is unstructured?",
   "c": [
    "20%",
    "40%",
    "60%",
    "80%"
   ],
   "a": [
    3
   ],
   "w": "~80%. Structured data is the minority of global data.",
   "o": true
  },
  {
   "id": "foc-q0003",
   "topic": "Data classification",
   "q": "A JSON file with fixed fields like 'order_id' but a variable-length 'items' list is classified as:",
   "c": [
    "Structured data",
    "Unstructured data",
    "Semi-structured data",
    "Primary data"
   ],
   "a": [
    2
   ],
   "w": "Semi-structured: it has organisational markers and key–value pairs, but not rigid rows and columns. JSON, XML, HTML and email are the examples he listed.",
   "o": true
  },
  {
   "id": "foc-q0004",
   "topic": "Data classification",
   "q": "A survey of 500 students conducted on a single day recording phone usage, age and brand — with no follow-up across time — is an example of:",
   "c": [
    "Time series data",
    "Panel data",
    "Cross-sectional data",
    "Longitudinal data"
   ],
   "a": [
    2
   ],
   "w": "Many subjects, one point in time = cross-sectional. Note that 'longitudinal' is just another name for panel data, so it's a distractor here.",
   "o": true
  },
  {
   "id": "foc-q0005",
   "topic": "Data classification",
   "q": "Daily closing prices of a stock recorded from January to December of a single year represent:",
   "c": [
    "Time series data",
    "Panel data",
    "Cross-sectional data",
    "Longitudinal data"
   ],
   "a": [
    0
   ],
   "w": "One subject (the stock), many time points = time series.",
   "o": true
  },
  {
   "id": "foc-q0006",
   "topic": "Data classification",
   "q": "Monthly marks of 30 students tracked over 6 months, allowing analysis of which student improved most over time, is an example of:",
   "c": [
    "Time series data",
    "Structured qualitative data",
    "Cross-sectional data",
    "Panel (longitudinal) data"
   ],
   "a": [
    3
   ],
   "w": "Many subjects × many time points = panel. The giveaway phrase is 'which student improved most' — that needs both dimensions.",
   "o": true
  },
  {
   "id": "foc-q0007",
   "topic": "Data classification",
   "q": "Which of the following is an example of continuous quantitative data?",
   "c": [
    "Number of students in a class",
    "Blood group of a patient",
    "A patient's body temperature (36.8 °C)",
    "Customer satisfaction rating (1 to 5 stars)"
   ],
   "a": [
    2
   ],
   "w": "Temperature takes any value in a range → continuous. Student count is discrete, blood group is nominal, star rating is ordinal.",
   "o": true
  },
  {
   "id": "foc-q0008",
   "topic": "Data classification",
   "q": "Which data type has a natural order between categories, but the gaps between them are not necessarily equal?",
   "c": [
    "Nominal",
    "Continuous",
    "Discrete",
    "Ordinal"
   ],
   "a": [
    3
   ],
   "w": "Ordinal — star ratings, education level, Poor/Fair/Good/Excellent.",
   "o": true
  },
  {
   "id": "foc-q0009",
   "topic": "Data classification",
   "q": "City of birth (Delhi, Mumbai, Chennai) is an example of which type of data?",
   "c": [
    "Time series data",
    "Structured qualitative data",
    "Cross-sectional data",
    "Panel (longitudinal) data"
   ],
   "a": [
    1
   ],
   "w": "Qualitative, specifically nominal — categories with no natural order. (The deck's option set here is a little loose; 'structured qualitative' is the intended answer.)",
   "o": true
  },
  {
   "id": "foc-q0010",
   "topic": "Computing & IPO",
   "q": "Which best defines computing?",
   "c": [
    "A machine that processes data electronically",
    "The process of using well-defined steps to solve problems by collecting, processing and producing results",
    "The study of computer hardware architecture",
    "Any activity performed using a computer"
   ],
   "a": [
    1
   ],
   "w": "He was explicit: define computing without mentioning computers. It's the method, not the machine."
  },
  {
   "id": "foc-q0011",
   "topic": "Computing & IPO",
   "q": "During World War II, the word 'computer' referred to:",
   "c": [
    "Early vacuum-tube machines",
    "People, mostly women, who performed arithmetic calculations by hand",
    "Artillery targeting devices",
    "Punch-card tabulators"
   ],
   "a": [
    1
   ],
   "w": "Teams of women calculating artillery trajectories. The job title came before the machine."
  },
  {
   "id": "foc-q0012",
   "topic": "Computing & IPO",
   "q": "Which is the correct order of the IPO model?",
   "c": [
    "Input → Output → Process",
    "Process → Input → Output",
    "Input → Process → Output",
    "Output → Process → Input"
   ],
   "a": [
    2
   ],
   "w": "Input → Process → Output. Universal across every computing system."
  },
  {
   "id": "foc-q0013",
   "topic": "Computing & IPO",
   "q": "In the Uber case study, the matching engine balances supply and demand in under:",
   "c": [
    "50 ms",
    "500 ms",
    "5 seconds",
    "30 seconds"
   ],
   "a": [
    1
   ],
   "w": "Under 500 milliseconds, per the slide."
  },
  {
   "id": "foc-q0014",
   "topic": "Computing & IPO",
   "q": "The Knight Capital algorithm failure of 2012 resulted in a loss of:",
   "c": [
    "$44 million in 45 minutes",
    "$440 million in 45 minutes",
    "$440 million in 45 seconds",
    "$4.4 billion in 45 minutes"
   ],
   "a": [
    1
   ],
   "w": "$440 million in 45 minutes, across 4 million automated trades. The firm went bankrupt."
  },
  {
   "id": "foc-q0015",
   "topic": "Computing & IPO",
   "q": "What is the key lesson from Knight Capital?",
   "c": [
    "Faster algorithms produce better returns",
    "Correctness of transactions matters more than speed",
    "Trading should never be automated",
    "Hardware failures cause most losses"
   ],
   "a": [
    1
   ],
   "w": "Speed amplifies errors. Without guardrails and human oversight, automation creates exponential risk."
  },
  {
   "id": "foc-q0016",
   "topic": "Computing & IPO",
   "q": "In Zara's use of computing, which IPO step gives them competitive advantage, and what data type do they use?",
   "c": [
    "Input; cross-sectional data",
    "Process; time series data",
    "Output; panel data",
    "Input; unstructured data"
   ],
   "a": [
    1
   ],
   "w": "The Process step — the algorithmic analysis of which designs sell — using time series sales data. This is a set-piece question from slide 41."
  },
  {
   "id": "foc-q0017",
   "topic": "Computing & IPO",
   "q": "A UPI transaction typically completes in:",
   "c": [
    "Under 1 second",
    "3–4 seconds",
    "10–15 seconds",
    "1 minute"
   ],
   "a": [
    1
   ],
   "w": "3–4 seconds, routed payer bank → NPCI → payee bank."
  },
  {
   "id": "foc-q0018",
   "topic": "Computing & IPO",
   "q": "Which of these are listed as reasons that relying solely on 'vibe coding' is risky? (Select all)",
   "c": [
    "Debugging becomes very difficult without programming knowledge",
    "LLM tokens are expensive",
    "LLMs may import non-existent libraries",
    "LLMs cannot generate any working code"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "All except the last — LLMs are good at simple code and around 80% of prototype work. The problems are debugging, cost, spaghetti code, security holes and hallucinated imports.",
   "multi": true
  },
  {
   "id": "foc-q0019",
   "topic": "Computing & IPO",
   "q": "Which regulators were named as imposing penalties for code failures in Indian finance?",
   "c": [
    "SEBI, RBI and IRDAI",
    "NPCI and UIDAI",
    "TRAI and MeitY",
    "CCI and NCLT"
   ],
   "a": [
    0
   ],
   "w": "RBI for banking, SEBI for markets, IRDAI for insurance. Accountability stops with the developer, not the LLM."
  },
  {
   "id": "foc-q0020",
   "topic": "Data & DIKW",
   "q": "Which correctly orders the DIKW chain?",
   "c": [
    "Data → Knowledge → Information → Wisdom",
    "Data → Information → Knowledge → Wisdom",
    "Information → Data → Wisdom → Knowledge",
    "Knowledge → Data → Information → Wisdom"
   ],
   "a": [
    1
   ],
   "w": "Data → Information → Knowledge → Wisdom."
  },
  {
   "id": "foc-q0021",
   "topic": "Data & DIKW",
   "q": "Which DIKW level answers the question 'why'?",
   "keep": true,
   "c": [
    "Data",
    "Information",
    "Knowledge",
    "Wisdom"
   ],
   "a": [
    2
   ],
   "w": "Information answers who/what/where/when. Knowledge answers why. Wisdom answers what should we do."
  },
  {
   "id": "foc-q0022",
   "topic": "Data & DIKW",
   "q": "In the Netflix case, how many viewers paused at timecode 00:42:15?",
   "c": [
    "320,000",
    "3.2 million",
    "32 million",
    "1.2 million"
   ],
   "a": [
    1
   ],
   "w": "3.2 million — that aggregation is the Information layer."
  },
  {
   "id": "foc-q0023",
   "topic": "Data & DIKW",
   "q": "In the bank case, applicants from certain postal codes defaulted at what rate relative to others?",
   "c": [
    "1.4 times",
    "2.4 times",
    "3.4 times",
    "4.3 times"
   ],
   "a": [
    2
   ],
   "w": "3.4 times. Acting on that Information alone, without climbing to Knowledge and Wisdom, produces redlining."
  },
  {
   "id": "foc-q0024",
   "topic": "Data & DIKW",
   "q": "Denying loans to everyone in a geographic area based on default statistics is called:",
   "c": [
    "Profiling",
    "Redlining",
    "Segmentation",
    "Underwriting"
   ],
   "a": [
    1
   ],
   "w": "Redlining — illegal in many countries and deeply unethical. The wise decision is not to use the variable."
  },
  {
   "id": "foc-q0025",
   "topic": "Data & DIKW",
   "q": "Which are the four pillars of computing? (Select all)",
   "c": [
    "Data",
    "Algorithm",
    "Hardware",
    "Software"
   ],
   "a": [
    0,
    1,
    2,
    3
   ],
   "w": "All four, and they are equally essential — remove any one and computing fails.",
   "multi": true
  },
  {
   "id": "foc-q0026",
   "topic": "Data & DIKW",
   "q": "'38.5' on its own is:",
   "c": [
    "Information",
    "Data",
    "Knowledge",
    "Metadata"
   ],
   "a": [
    1
   ],
   "w": "Raw data. 'The patient's temperature is 38.5 °C' adds context and becomes information."
  },
  {
   "id": "foc-q0027",
   "topic": "DIKW ladder",
   "q": "Which rung? — A log line reading: user 88213, event PAUSE, content 5512, timecode 00:42:15.",
   "keep": true,
   "c": [
    "Data",
    "Information",
    "Knowledge",
    "Wisdom"
   ],
   "a": [
    0
   ],
   "w": "An uncontextualised record is Data. It becomes Information only once it is counted or given a time window."
  },
  {
   "id": "foc-q0028",
   "topic": "DIKW ladder",
   "q": "Which rung? — 3.2 million viewers paused at exactly 00:42:15.",
   "keep": true,
   "c": [
    "Data",
    "Information",
    "Knowledge",
    "Wisdom"
   ],
   "a": [
    1
   ],
   "w": "Counting raw events adds context, which is Information. It says what happened, not why — so it is not Knowledge."
  },
  {
   "id": "foc-q0029",
   "topic": "DIKW ladder",
   "q": "Which rung? — Cross-referencing the pause spike against the script shows the scene introduces a subplot with no setup, and that is what drives the drop-off.",
   "keep": true,
   "c": [
    "Data",
    "Information",
    "Knowledge",
    "Wisdom"
   ],
   "a": [
    2
   ],
   "w": "It explains why, by combining two sources. That is Knowledge."
  },
  {
   "id": "foc-q0030",
   "topic": "DIKW ladder",
   "q": "Which rung? — Re-edit the pacing of future releases and show returning viewers a contextual recap.",
   "keep": true,
   "c": [
    "Data",
    "Information",
    "Knowledge",
    "Wisdom"
   ],
   "a": [
    3
   ],
   "w": "It chooses an action and accepts its cost. Wisdom."
  },
  {
   "id": "foc-q0031",
   "topic": "DIKW ladder",
   "q": "In the Netflix DIKW example, what does Knowledge allow the enterprise to understand?",
   "c": [
    "That millions of users interrupt playback at the same second",
    "The root cause of the friction, by combining streaming data with script and demographic analytics",
    "The raw timecode at which each individual pause event was recorded",
    "Which re-edit to commission for the next release"
   ],
   "a": [
    1
   ],
   "w": "All four rungs are on offer here, which is the whole difficulty. Millions pausing at the same second is Information (a count), the raw timecode of each pause is Data, and choosing which re-edit to commission is Wisdom (an action). Knowledge explains why."
  },
  {
   "id": "foc-q0032",
   "topic": "DIKW ladder",
   "q": "Which of these is a characteristic of Wisdom?",
   "c": [
    "It is the accumulation of information over time, interpreted through pattern recognition",
    "It involves making good decisions under uncertainty, with incomplete information",
    "It adds units, context and a time window to raw values",
    "It is the unprocessed output of a sensor or a log"
   ],
   "a": [
    1
   ],
   "w": "Wisdom is judgement under uncertainty. “Accumulated information interpreted through pattern recognition” describes Knowledge and is by far the most common wrong answer; adding units, context and a time window is Information, and raw sensor or log output is Data."
  },
  {
   "id": "foc-q0033",
   "topic": "DIKW ladder",
   "q": "“The accumulation of information over time, interpreted through pattern recognition” describes which rung?",
   "keep": true,
   "c": [
    "Data",
    "Information",
    "Knowledge",
    "Wisdom"
   ],
   "a": [
    2
   ],
   "w": "Knowledge. Drill this one in both directions: once you can name it as Knowledge on sight, you stop picking it when a question asks about Wisdom."
  },
  {
   "id": "foc-q0034",
   "topic": "DIKW ladder",
   "q": "What turns Data into Information?",
   "c": [
    "Adding context — units, aggregation, a time window",
    "Explaining the underlying cause",
    "Choosing an action and accepting its cost",
    "Storing it in a database"
   ],
   "a": [
    0
   ],
   "w": "Context. Storage changes nothing about the rung: a database full of bare values is still Data."
  },
  {
   "id": "foc-q0035",
   "topic": "DIKW ladder",
   "q": "What turns Information into Knowledge?",
   "c": [
    "Counting it more accurately",
    "Explaining why, usually by combining more than one source",
    "Acting on it",
    "Visualising it on a dashboard"
   ],
   "a": [
    1
   ],
   "w": "Explanation. A dashboard is still Information, however good it looks, and acting on it jumps to Wisdom."
  },
  {
   "id": "foc-q0036",
   "topic": "DIKW ladder",
   "q": "Which rung? — Applicants from postal codes X, Y and Z default at 3.4 times the rate of others, confirmed in the data.",
   "keep": true,
   "c": [
    "Data",
    "Information",
    "Knowledge",
    "Wisdom"
   ],
   "a": [
    1
   ],
   "w": "A confirmed count, so Information. The bank’s failure in the case is acting at exactly this rung without climbing any higher."
  },
  {
   "id": "foc-q0037",
   "topic": "DIKW ladder",
   "q": "Which rung? — Those areas have lower incomes, weaker infrastructure and less formal employment, so the default rate reflects structural disadvantage.",
   "keep": true,
   "c": [
    "Data",
    "Information",
    "Knowledge",
    "Wisdom"
   ],
   "a": [
    2
   ],
   "w": "It supplies the cause behind the number. Knowledge."
  },
  {
   "id": "foc-q0038",
   "topic": "DIKW ladder",
   "q": "In the bank loan case, what is the wise decision?",
   "c": [
    "Weight the postal-code variable lower rather than dropping it",
    "Do not use the postal-code variable at all",
    "Use it, but disclose it to applicants",
    "Use it only for applicants above a certain loan size"
   ],
   "a": [
    1
   ],
   "w": "Refuse to use it. Denying a whole geography credit is redlining, illegal in many countries. Note that Wisdom here is a decision NOT to act on the information."
  },
  {
   "id": "foc-q0039",
   "topic": "DIKW ladder",
   "q": "At which rung do cost, risk and ethics first enter?",
   "keep": true,
   "c": [
    "Data",
    "Information",
    "Knowledge",
    "Wisdom"
   ],
   "a": [
    3
   ],
   "w": "Data, Information and Knowledge are all descriptive. Wisdom is the only rung that weighs what should be done."
  },
  {
   "id": "foc-q0040",
   "topic": "DIKW ladder",
   "q": "How does the Enterprise View of computing differ from the Traditional View?",
   "c": [
    "It shifts from screen output to automated action and revenue generation",
    "It relies exclusively on structured data rather than unstructured data",
    "It replaces the IPO model with a different model altogether",
    "It removes the need for algorithms"
   ],
   "a": [
    0
   ],
   "w": "The IPO model still holds — what changes is what each stage looks like. Output moves from a screen to an automated business decision that grows revenue or cuts cost. The enterprise view consumes far MORE unstructured data, not less."
  },
  {
   "id": "foc-q0041",
   "topic": "Data classification",
   "q": "Which is an example of semi-structured data?",
   "c": [
    "An Excel spreadsheet",
    "A JSON file from a web API",
    "A podcast recording",
    "A relational database table"
   ],
   "a": [
    1
   ],
   "w": "JSON, XML, HTML and email (.eml) are semi-structured."
  },
  {
   "id": "foc-q0042",
   "topic": "Data classification",
   "q": "Compared with structured data, unstructured data has:",
   "c": [
    "Lower analysis cost and lower capability requirement",
    "Higher analysis cost and higher capability requirement",
    "Higher analysis cost but lower capability requirement",
    "The same cost and capability requirement"
   ],
   "a": [
    1
   ],
   "w": "Both are higher. It needs specialised tooling — NLP transformers, computer vision."
  },
  {
   "id": "foc-q0043",
   "topic": "Data classification",
   "q": "Which operations are valid on nominal data? (Select all)",
   "c": [
    "Mode",
    "Frequency count",
    "Chi-square test",
    "Mean"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "Mode, frequency count and chi-square. You cannot take a mean or median of nominal data — averaging 'city of birth' is meaningless.",
   "multi": true
  },
  {
   "id": "foc-q0044",
   "topic": "Data classification",
   "q": "The number of apps on a phone (47) is:",
   "c": [
    "Continuous quantitative",
    "Discrete quantitative",
    "Ordinal qualitative",
    "Nominal qualitative"
   ],
   "a": [
    1
   ],
   "w": "Countable whole numbers → discrete."
  },
  {
   "id": "foc-q0045",
   "topic": "Data classification",
   "q": "Qualitative data is typically collected through ___ and answers ___.",
   "c": [
    "Surveys; how many",
    "Interviews; how and why",
    "Sensors; how much",
    "Experiments; what"
   ],
   "a": [
    1
   ],
   "w": "Qualitative: interviews, answering how and why. Quantitative: surveys, answering what/how often/how many/how much."
  },
  {
   "id": "foc-q0046",
   "topic": "Data classification",
   "q": "Sensor readings you collect from an IoT device you deployed yourself are:",
   "c": [
    "Secondary data",
    "Primary data",
    "Metadata",
    "Semi-structured data only"
   ],
   "a": [
    1
   ],
   "w": "Primary — collected first-hand for your specific purpose."
  },
  {
   "id": "foc-q0047",
   "topic": "Data classification",
   "q": "Which are disadvantages of primary data? (Select all)",
   "c": [
    "Time-consuming",
    "Expensive",
    "Often a small sample size",
    "Quality depends on someone else's collection method"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "The last one is a disadvantage of SECONDARY data — you don't control how it was collected.",
   "multi": true
  },
  {
   "id": "foc-q0048",
   "topic": "Data classification",
   "q": "NSSO household income data used in your own research project is:",
   "c": [
    "Primary data",
    "Secondary data",
    "Metadata",
    "Panel data by definition"
   ],
   "a": [
    1
   ],
   "w": "Secondary — collected by someone else, for a different purpose, and reused."
  },
  {
   "id": "foc-q0049",
   "topic": "Data classification",
   "q": "Which of these is metadata for a photograph?",
   "c": [
    "The image pixels",
    "The GPS location and camera model",
    "The subject of the photo",
    "The visual resolution as perceived by a viewer"
   ],
   "a": [
    1
   ],
   "w": "Metadata describes data without being it: filename, size, date taken, GPS, camera model, resolution. The pixels are the data."
  },
  {
   "id": "foc-q0050",
   "topic": "Data classification",
   "q": "ECG heartbeat readings over time for one patient are:",
   "c": [
    "Cross-sectional data",
    "Panel data",
    "Time series data",
    "Nominal data"
   ],
   "a": [
    2
   ],
   "w": "One subject, many time points."
  },
  {
   "id": "foc-q0051",
   "topic": "Algorithms",
   "q": "The word 'algorithm' derives from the name of:",
   "c": [
    "Al-Kindi, a 9th-century philosopher",
    "Muhammad ibn Musa al-Khwarizmi, a 9th-century Persian mathematician",
    "Euclid of Alexandria",
    "Charles Babbage"
   ],
   "a": [
    1
   ],
   "w": "Al-Khwarizmi. The word 'algebra' comes from his book title too."
  },
  {
   "id": "foc-q0052",
   "topic": "Algorithms",
   "q": "How many inputs may a valid algorithm have?",
   "c": [
    "Exactly one",
    "At least one",
    "Zero or more",
    "At least two"
   ],
   "a": [
    2
   ],
   "w": "Zero or more. 'Hello World' takes zero inputs and is perfectly valid."
  },
  {
   "id": "foc-q0053",
   "topic": "Algorithms",
   "q": "How many outputs must a valid algorithm produce?",
   "c": [
    "Zero or more",
    "At least one",
    "Exactly one",
    "Exactly as many as its inputs"
   ],
   "a": [
    1
   ],
   "w": "At least one. An algorithm with no output is pointless. Note the asymmetry with input."
  },
  {
   "id": "foc-q0054",
   "topic": "Algorithms",
   "q": "'Keep dividing N by 2 until you reach exactly 0' violates which property?",
   "c": [
    "Definiteness",
    "Finiteness",
    "Effectiveness",
    "Output"
   ],
   "a": [
    1
   ],
   "w": "Finiteness — the number shrinks forever but never reaches zero, so it never terminates."
  },
  {
   "id": "foc-q0055",
   "topic": "Algorithms",
   "q": "'Add a little bit of salt' violates which property?",
   "c": [
    "Finiteness",
    "Definiteness",
    "Input",
    "Output"
   ],
   "a": [
    1
   ],
   "w": "Definiteness — every step must be precise and unambiguous. 'Add exactly 5 grams of salt' is definite."
  },
  {
   "id": "foc-q0056",
   "topic": "Algorithms",
   "q": "'Find the largest prime number' violates which property?",
   "c": [
    "Definiteness",
    "Input",
    "Effectiveness",
    "Output"
   ],
   "a": [
    2
   ],
   "w": "Effectiveness — no step may require infinite resources or be impossible. There is no largest prime."
  },
  {
   "id": "foc-q0057",
   "topic": "Algorithms",
   "q": "Which are the five essential properties of an algorithm? (Select all)",
   "c": [
    "Finiteness",
    "Definiteness",
    "Input and Output",
    "Effectiveness"
   ],
   "a": [
    0,
    1,
    2,
    3
   ],
   "w": "Finiteness, Definiteness, Input, Output, Effectiveness.",
   "multi": true
  },
  {
   "id": "foc-q0058",
   "topic": "Algorithms",
   "q": "If hardware is very powerful but the algorithm is poorly designed, the result will be:",
   "c": [
    "Fast and correct anyway",
    "Wrong or slow regardless of the hardware",
    "Correct but expensive",
    "Identical to a good algorithm"
   ],
   "a": [
    1
   ],
   "w": "The quality of computing depends on the quality of the algorithm. 1990s AI ran on weak machines by optimising algorithms."
  },
  {
   "id": "foc-q0059",
   "topic": "Algorithms",
   "q": "Which loop structure checks its condition BEFORE executing the code?",
   "c": [
    "do-while loop",
    "while loop",
    "for-each loop",
    "repeat loop"
   ],
   "a": [
    1
   ],
   "w": "A while loop checks first, then executes. A do-while executes first, then checks."
  },
  {
   "id": "foc-q0060",
   "topic": "Hardware",
   "q": "Which component performs both arithmetic and logical operations?",
   "c": [
    "Control Unit",
    "ALU",
    "GPU",
    "RAM"
   ],
   "a": [
    1
   ],
   "w": "The Arithmetic Logic Unit does arithmetic (+ − × ÷) and logic (AND, OR, NOT, comparisons). The Control Unit schedules."
  },
  {
   "id": "foc-q0061",
   "topic": "Hardware",
   "q": "A modern CPU executes roughly how many instructions per second?",
   "c": [
    "3–5 million",
    "3–5 billion",
    "3–5 trillion",
    "300–500 million"
   ],
   "a": [
    1
   ],
   "w": "3–5 billion instructions per second, i.e. 3–5 GHz."
  },
  {
   "id": "foc-q0062",
   "topic": "Hardware",
   "q": "Which correctly contrasts CPU and GPU?",
   "c": [
    "CPU: thousands of simple cores. GPU: a few powerful cores",
    "CPU: a few powerful cores for sequential tasks. GPU: thousands of simple cores for parallel tasks",
    "Both have identical architectures",
    "GPU handles only display output and cannot compute"
   ],
   "a": [
    1
   ],
   "w": "CPU 4–24 powerful cores for complex sequential work; GPU thousands of small cores doing the same operation on many data points at once."
  },
  {
   "id": "foc-q0063",
   "topic": "Hardware",
   "q": "Which memory is volatile?",
   "c": [
    "ROM",
    "RAM",
    "SSD",
    "HDD"
   ],
   "a": [
    1
   ],
   "w": "RAM loses its contents when power is cut. ROM and secondary storage are non-volatile."
  },
  {
   "id": "foc-q0064",
   "topic": "Hardware",
   "q": "Where does a phone's bootloader live?",
   "c": [
    "RAM",
    "ROM",
    "SSD",
    "Cloud storage"
   ],
   "a": [
    1
   ],
   "w": "ROM — firmware burned in at the factory, non-volatile, unmodifiable in normal operation."
  },
  {
   "id": "foc-q0065",
   "topic": "Hardware",
   "q": "When you run a Python script, your variables and lists live in:",
   "c": [
    "ROM",
    "RAM",
    "The hard disk",
    "The CPU cache only"
   ],
   "a": [
    1
   ],
   "w": "RAM, for the duration of the program. They are cleared when it closes."
  },
  {
   "id": "foc-q0066",
   "topic": "Hardware",
   "q": "Which sensor detects rotational movement?",
   "c": [
    "Accelerometer",
    "Gyroscope",
    "Barometer",
    "Proximity sensor"
   ],
   "a": [
    1
   ],
   "w": "Gyroscope — used in racing games, navigation and camera stabilisation. The accelerometer handles movement and orientation."
  },
  {
   "id": "foc-q0067",
   "topic": "Hardware",
   "q": "Which sensor turns the touchscreen off during a phone call?",
   "c": [
    "Light sensor",
    "Proximity sensor",
    "Accelerometer",
    "Temperature sensor"
   ],
   "a": [
    1
   ],
   "w": "The proximity sensor detects the phone near your ear."
  },
  {
   "id": "foc-q0068",
   "topic": "Hardware",
   "q": "The 2012 breakthrough that demonstrated GPU power for computer vision was:",
   "c": [
    "AlphaGo",
    "AlexNet",
    "ImageNet's founding",
    "ResNet"
   ],
   "a": [
    1
   ],
   "w": "AlexNet, trained on GPUs."
  },
  {
   "id": "foc-q0069",
   "topic": "Hardware",
   "q": "NVIDIA's platform for GPU-accelerated computing is called:",
   "c": [
    "CUDA",
    "TensorFlow",
    "PyTorch",
    "OpenCL"
   ],
   "a": [
    0
   ],
   "w": "CUDA — Compute Unified Device Architecture. PyTorch (Meta) and TensorFlow (Google) are the Python libraries that use it."
  },
  {
   "id": "foc-q0070",
   "topic": "Hardware",
   "q": "Which is an output device?",
   "c": [
    "Microphone",
    "Haptic feedback motor",
    "Barometer",
    "Touchscreen input layer"
   ],
   "a": [
    1
   ],
   "w": "Haptic feedback — the vibration you feel when tapping a keyboard — is output. Monitor, printer, speakers and actuators are the others."
  },
  {
   "id": "foc-q0071",
   "topic": "Software & OS",
   "q": "Which operating system uses the NT kernel and dominates the enterprise market?",
   "c": [
    "Linux",
    "Windows 11",
    "macOS",
    "Android"
   ],
   "a": [
    1
   ],
   "w": "Windows, on the NT kernel. Linux is the reflex answer and it is right about SERVERS — but the enterprise desktop is Windows. Read which of the two the stem is asking about."
  },
  {
   "id": "foc-q0072",
   "topic": "Software & OS",
   "q": "Which statement about the operating system is correct?",
   "c": [
    "It starts last and stops first",
    "It starts first, runs always, and never stops until shutdown",
    "It only runs when an application requests it",
    "It is a type of utility software"
   ],
   "a": [
    1
   ],
   "w": "The OS is the master program — system software, not utility software."
  },
  {
   "id": "foc-q0073",
   "topic": "Software & OS",
   "q": "Linux runs approximately what share of the world's web servers?",
   "c": [
    "46%",
    "66%",
    "86%",
    "96%"
   ],
   "a": [
    3
   ],
   "w": "~96%, per the slide. Android holds ~72% of the global smartphone market."
  },
  {
   "id": "foc-q0074",
   "topic": "Software & OS",
   "q": "Which OS responsibility stops one app from reading another app's private data?",
   "c": [
    "Process management",
    "Memory management",
    "Security",
    "File system"
   ],
   "a": [
    2
   ],
   "w": "Security — controlling which programs and users access which resources."
  },
  {
   "id": "foc-q0075",
   "topic": "Software & OS",
   "q": "What translates generic OS instructions into commands for specific hardware?",
   "c": [
    "The kernel",
    "Device drivers",
    "The file system",
    "The shell"
   ],
   "a": [
    1
   ],
   "w": "Device drivers — why your phone works with thousands of different peripherals."
  },
  {
   "id": "foc-q0076",
   "topic": "Software & OS",
   "q": "Which are lossless compression formats? (Select all)",
   "c": [
    "ZIP",
    "7-Zip",
    "JPEG",
    "MP3"
   ],
   "a": [
    0,
    1
   ],
   "w": "ZIP and 7-Zip restore identical data. JPEG and MP3 are lossy — they permanently discard invisible pixel variations and inaudible frequencies.",
   "multi": true
  },
  {
   "id": "foc-q0077",
   "topic": "Software & OS",
   "q": "Defragmentation is:",
   "c": [
    "Required regularly on SSDs",
    "Used to reorganise fragmented files on an HDD, and not needed for SSDs",
    "A form of lossy compression",
    "A security utility"
   ],
   "a": [
    1
   ],
   "w": "HDD only, per the slide."
  },
  {
   "id": "foc-q0078",
   "topic": "Software & OS",
   "q": "BitLocker and FileVault are examples of:",
   "c": [
    "Antivirus software",
    "Encryption tools",
    "Firewalls",
    "Compression utilities"
   ],
   "a": [
    1
   ],
   "w": "Full-drive encryption — BitLocker on Windows, FileVault on macOS."
  },
  {
   "id": "foc-q0079",
   "topic": "Software & OS",
   "q": "Which protocols do email clients use?",
   "c": [
    "HTTP and HTTPS",
    "SMTP and IMAP",
    "FTP and SSH",
    "TCP and UDP only"
   ],
   "a": [
    1
   ],
   "w": "SMTP and IMAP."
  },
  {
   "id": "foc-q0080",
   "topic": "Software & OS",
   "q": "A web browser parses which three things?",
   "c": [
    "HTML, CSS and JavaScript",
    "HTML, SQL and Python",
    "XML, JSON and CSS",
    "HTTP, HTML and TCP"
   ],
   "a": [
    0
   ],
   "w": "HTML for structure, CSS for styling, JavaScript for behaviour."
  },
  {
   "id": "foc-q0081",
   "topic": "Software & OS",
   "q": "Which best distinguishes an IDE from a source code editor?",
   "c": [
    "An IDE can only run code, not edit it",
    "An IDE combines an editor, a runner, a debugger and often version control",
    "A source code editor includes a debugger",
    "They are the same thing"
   ],
   "a": [
    1
   ],
   "w": "IDE = all-in-one. PyCharm, VS Code with extensions, Google Colab. Notepad++ and Sublime Text are plain editors."
  },
  {
   "id": "foc-q0082",
   "topic": "Python basics",
   "q": "Which is true of an interpreter?",
   "c": [
    "It translates the entire source code before running",
    "It translates line by line at runtime and shows errors as the program runs",
    "It always produces faster execution than a compiler",
    "It produces no output if any error exists"
   ],
   "a": [
    1
   ],
   "w": "Line by line, at runtime, with partial output even when errors exist. Translating everything first and producing no output when any error exists describes a compiler."
  },
  {
   "id": "foc-q0083",
   "topic": "Python basics",
   "q": "Which languages were given as compiled?",
   "c": [
    "Python and JavaScript",
    "C, C++ and Java",
    "Python and C",
    "JavaScript and Java only"
   ],
   "a": [
    1
   ],
   "w": "C, C++ and Java compile. Python and JavaScript are interpreted."
  },
  {
   "id": "foc-q0084",
   "topic": "Python basics",
   "q": "Python was designed by ___ and first released in ___.",
   "c": [
    "Guido van Rossum; 1991",
    "Guido van Rossum; 2001",
    "Dennis Ritchie; 1991",
    "James Gosling; 1995"
   ],
   "a": [
    0
   ],
   "w": "Guido van Rossum, 1991."
  },
  {
   "id": "foc-q0085",
   "topic": "Python basics",
   "q": "What is the file extension for a Google Colab notebook?",
   "c": [
    ".py",
    ".ipynb",
    ".colab",
    ".pynb"
   ],
   "a": [
    1
   ],
   "w": ".ipynb — IPython Notebook. You can also download as .py."
  },
  {
   "id": "foc-q0086",
   "topic": "Python basics",
   "q": "Which variable names are valid? (Select all)",
   "c": [
    "message_1",
    "_total",
    "1_message",
    "greeting message"
   ],
   "a": [
    0,
    1
   ],
   "w": "Names may contain only letters, numbers and underscores, and must start with a letter or underscore. No spaces, no leading digit.",
   "multi": true
  },
  {
   "id": "foc-q0087",
   "topic": "Python basics",
   "q": "Using a variable before defining it, or misspelling it, raises:",
   "c": [
    "TypeError",
    "NameError",
    "IndexError",
    "SyntaxError"
   ],
   "a": [
    1
   ],
   "w": "NameError, with a traceback showing where it happened."
  },
  {
   "id": "foc-q0088",
   "topic": "Python basics",
   "q": "What does print(3 / 2) output?",
   "c": [
    "1",
    "1.5",
    "2",
    "TypeError"
   ],
   "a": [
    1
   ],
   "w": "1.5 — division always returns a float."
  },
  {
   "id": "foc-q0089",
   "topic": "Python basics",
   "q": "What does 3 ** 2 evaluate to?",
   "c": [
    "6",
    "9",
    "32",
    "1.5"
   ],
   "a": [
    1
   ],
   "w": "9 — ** is exponentiation. The cube of 2 is written 2 ** 3."
  },
  {
   "id": "foc-q0090",
   "topic": "Python basics",
   "q": "What is the result of \"happy\" + 23 + \"rd birthday\"?",
   "c": [
    "happy23rd birthday",
    "A TypeError",
    "happy 23 rd birthday",
    "happyrd birthday"
   ],
   "a": [
    1
   ],
   "w": "TypeError — Python won't concatenate a string with an integer. Fix with str(23)."
  },
  {
   "id": "foc-q0091",
   "topic": "Python basics",
   "q": "Why might 0.2 + 0.1 display as 0.30000000000000004?",
   "c": [
    "A bug unique to Python",
    "How computers internally represent floating-point numbers — it happens in all languages",
    "Because Colab rounds incorrectly",
    "Because 0.2 is stored as a string"
   ],
   "a": [
    1
   ],
   "w": "A universal floating-point representation issue, and generally of little concern."
  },
  {
   "id": "foc-q0092",
   "topic": "Python basics",
   "q": "Which symbol starts a comment in Python?",
   "c": [
    "//",
    "#",
    "/*",
    "--"
   ],
   "a": [
    1
   ],
   "w": "The hash. Everything after it on that line is ignored by the interpreter."
  },
  {
   "id": "foc-q0093",
   "topic": "Python basics",
   "q": "What does \"ada lovelace\".title() return?",
   "c": [
    "ADA LOVELACE",
    "ada lovelace",
    "Ada Lovelace",
    "Ada lovelace"
   ],
   "a": [
    2
   ],
   "w": "Title case capitalises the first letter of each word."
  },
  {
   "id": "foc-q0094",
   "topic": "Python basics",
   "q": "Which method removes whitespace from only the right-hand side of a string?",
   "c": [
    ".lstrip()",
    ".rstrip()",
    ".strip()",
    ".trim()"
   ],
   "a": [
    1
   ],
   "w": "rstrip() right, lstrip() left, strip() both. There is no .trim() in Python."
  },
  {
   "id": "foc-q0095",
   "topic": "Python basics",
   "q": "What does \\n produce?",
   "c": [
    "A tab",
    "A newline",
    "A backslash",
    "A null character"
   ],
   "a": [
    1
   ],
   "w": "\\n is newline, \\t is tab."
  },
  {
   "id": "foc-q0096",
   "topic": "Python basics",
   "q": "Which are reasons Colab was chosen for this course? (Select all)",
   "c": [
    "Zero setup — runs in the browser",
    "Cell-by-cell execution makes debugging easier",
    "Free access to GPUs and TPUs",
    "It compiles Python to machine code for speed"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "The last is false — Python is interpreted. The five stated reasons are zero setup, cell-by-cell execution, Gemini AI assistance, pre-installed libraries, and easy sharing.",
   "multi": true
  },
  {
   "id": "foc-q0097",
   "topic": "Lists & tuples",
   "q": "In Python, the first element of a list is at index:",
   "c": [
    "1",
    "0",
    "-1",
    "Depends on the list"
   ],
   "a": [
    1
   ],
   "w": "0. A list of length 4 has indices 0, 1, 2, 3."
  },
  {
   "id": "foc-q0098",
   "topic": "Lists & tuples",
   "q": "What does bicycles[-1] return?",
   "c": [
    "An error",
    "The first element",
    "The last element",
    "The second-to-last element"
   ],
   "a": [
    2
   ],
   "w": "Negative indexing counts from the end. [-1] is always the last item."
  },
  {
   "id": "foc-q0099",
   "topic": "Lists & tuples",
   "q": "Which method adds an element at the END of a list?",
   "c": [
    "insert()",
    "append()",
    "add()",
    "extend() only"
   ],
   "a": [
    1
   ],
   "w": "append(). insert(i, x) places at a specific index."
  },
  {
   "id": "foc-q0100",
   "topic": "Lists & tuples",
   "q": "Which removes an element AND lets you keep using its value?",
   "c": [
    "del",
    "pop()",
    "remove()",
    "clear()"
   ],
   "a": [
    1
   ],
   "w": "pop() removes and returns. del discards. remove() deletes by value."
  },
  {
   "id": "foc-q0101",
   "topic": "Lists & tuples",
   "q": "motorcycles.remove('Ducati') when 'Ducati' appears three times will:",
   "c": [
    "Remove all three",
    "Remove only the first occurrence",
    "Raise an error",
    "Remove the last occurrence"
   ],
   "a": [
    1
   ],
   "w": "Only the first. Use a loop to remove every occurrence."
  },
  {
   "id": "foc-q0102",
   "topic": "Lists & tuples",
   "q": "Which permanently sorts a list?",
   "c": [
    "sorted(cars)",
    "cars.sort()",
    "cars.sorted()",
    "sort(cars)"
   ],
   "a": [
    1
   ],
   "w": "sort() is a method and changes the list permanently. sorted() is a function returning a new list."
  },
  {
   "id": "foc-q0103",
   "topic": "Lists & tuples",
   "q": "After print(sorted(cars)), what happens to the original list?",
   "c": [
    "It is permanently sorted",
    "It is unchanged",
    "It is reversed",
    "It is emptied"
   ],
   "a": [
    1
   ],
   "w": "sorted() is temporary — it returns a sorted copy and leaves the original alone."
  },
  {
   "id": "foc-q0104",
   "topic": "Lists & tuples",
   "q": "cars.reverse() does what?",
   "c": [
    "Sorts in reverse alphabetical order",
    "Inverts the current order of the list, permanently",
    "Returns a reversed copy",
    "Sorts alphabetically then reverses"
   ],
   "a": [
    1
   ],
   "w": "It only inverts the order — no alphabetising. For reverse-alphabetical use sort(reverse=True)."
  },
  {
   "id": "foc-q0105",
   "topic": "Lists & tuples",
   "q": "A list has four items. What does lst[4] do?",
   "c": [
    "Returns the last item",
    "Returns None",
    "Raises IndexError: list index out of range",
    "Adds a new empty item"
   ],
   "a": [
    2
   ],
   "w": "Valid indices are 0–3. Classic off-by-one."
  },
  {
   "id": "foc-q0106",
   "topic": "Lists & tuples",
   "q": "What does list(range(2, 11, 2)) produce?",
   "c": [
    "[2, 4, 6, 8, 10]",
    "[2, 4, 6, 8, 10, 12]",
    "[2, 3, 4, 5, 6, 7, 8, 9, 10]",
    "[1, 3, 5, 7, 9]"
   ],
   "a": [
    0
   ],
   "w": "Start 2, step 2, stop before 11 → [2,4,6,8,10]."
  },
  {
   "id": "foc-q0107",
   "topic": "Lists & tuples",
   "q": "range(1, 5) generates:",
   "c": [
    "1, 2, 3, 4, 5",
    "1, 2, 3, 4",
    "0, 1, 2, 3, 4",
    "2, 3, 4, 5"
   ],
   "a": [
    1
   ],
   "w": "The end value is excluded. For 1–5 you'd write range(1, 6)."
  },
  {
   "id": "foc-q0108",
   "topic": "Lists & tuples",
   "q": "For digits = [1,2,3,4,5,6,7,8,9,0], what does sum(digits) return?",
   "c": [
    "44",
    "45",
    "50",
    "0"
   ],
   "a": [
    1
   ],
   "w": "45. min() gives 0 and max() gives 9."
  },
  {
   "id": "foc-q0109",
   "topic": "Lists & tuples",
   "q": "Which is the correct list comprehension for the first ten squares?",
   "c": [
    "[for value in range(1,11): value ** 2]",
    "[value ** 2 for value in range(1, 11)]",
    "[value ** 2 for value in range(1, 11):]",
    "squares.append(value ** 2 for value in range(1,11))"
   ],
   "a": [
    1
   ],
   "w": "Expression first, then the for clause, and NO colon at the end."
  },
  {
   "id": "foc-q0110",
   "topic": "Lists & tuples",
   "q": "What does players[0:3] return?",
   "c": [
    "Items at indices 0, 1, 2, 3",
    "Items at indices 0, 1, 2",
    "Items at indices 1, 2, 3",
    "The first and third items"
   ],
   "a": [
    1
   ],
   "w": "Start inclusive, end exclusive — the same rule as range()."
  },
  {
   "id": "foc-q0111",
   "topic": "Lists & tuples",
   "q": "What does players[-3:] return?",
   "c": [
    "The first three items",
    "The last three items",
    "Everything except the last three",
    "An error"
   ],
   "a": [
    1
   ],
   "w": "Negative start, omitted end → the last three."
  },
  {
   "id": "foc-q0112",
   "topic": "Lists & tuples",
   "q": "Which correctly makes an INDEPENDENT copy of a list?",
   "c": [
    "friend_foods = my_foods",
    "friend_foods = my_foods[:]",
    "friend_foods == my_foods",
    "friend_foods = my_foods[0]"
   ],
   "a": [
    1
   ],
   "w": "The [:] slice. Plain assignment creates a second name for the same list, so changes through either name affect both."
  },
  {
   "id": "foc-q0113",
   "topic": "Lists & tuples",
   "q": "friend_foods = my_foods, then my_foods.append('cannoli'). What is in friend_foods?",
   "c": [
    "The original items only",
    "The original items plus 'cannoli'",
    "An empty list",
    "An error is raised"
   ],
   "a": [
    1
   ],
   "w": "Both variables point at the same list object, so 'cannoli' appears in both."
  },
  {
   "id": "foc-q0114",
   "topic": "Lists & tuples",
   "q": "A tuple is defined with:",
   "c": [
    "Square brackets []",
    "Parentheses ()",
    "Curly braces {}",
    "Angle brackets <>"
   ],
   "a": [
    1
   ],
   "w": "Parentheses. A tuple is an immutable list."
  },
  {
   "id": "foc-q0115",
   "topic": "Lists & tuples",
   "q": "dimensions = (200, 50). What does dimensions[0] = 250 do?",
   "c": [
    "Changes the first value to 250",
    "Raises a TypeError",
    "Creates a new tuple",
    "Appends 250"
   ],
   "a": [
    1
   ],
   "w": "TypeError: 'tuple' object does not support item assignment."
  },
  {
   "id": "foc-q0116",
   "topic": "Lists & tuples",
   "q": "Which operations on a tuple are allowed? (Select all)",
   "c": [
    "Reading an element by index",
    "Looping through it with a for loop",
    "Reassigning the whole variable to a new tuple",
    "Changing one element in place"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "Everything but changing an element. You can rebind the variable — dimensions = (400, 100) is fine.",
   "multi": true
  },
  {
   "id": "foc-q0117",
   "topic": "Lists & tuples",
   "q": "Which statement about for loops and indentation is TRUE?",
   "c": [
    "Forgetting the colon after 'for' produces a logical error with no message",
    "Forgetting to indent an additional line produces no error message but wrong output",
    "Unnecessary indentation runs fine",
    "Missing indentation after 'for' produces correct output"
   ],
   "a": [
    1
   ],
   "w": "That's the silent one — the unindented line runs once after the loop, using the last value. The other three are syntax errors that stop the program."
  },
  {
   "id": "foc-q0118",
   "topic": "Lists & tuples",
   "q": "In a for loop, non-indented lines that follow the loop body execute:",
   "c": [
    "Once per iteration",
    "Once, after the loop completes",
    "Never",
    "Before the loop starts"
   ],
   "a": [
    1
   ],
   "w": "Indentation alone determines what's inside the loop."
  },
  {
   "id": "foc-q0119",
   "topic": "Lists & tuples",
   "q": "Which are FUNCTIONS rather than list methods? (Select all)",
   "c": [
    "len()",
    "sorted()",
    "sort()",
    "reverse()"
   ],
   "a": [
    0,
    1
   ],
   "w": "len() and sorted() are functions — the list goes in the parentheses. sort() and reverse() are methods, called with dot notation.",
   "multi": true
  },
  {
   "id": "foc-q0120",
   "topic": "Python basics",
   "q": "You see the symbol >>> at the start of a line in a terminal. What does it tell you?",
   "c": [
    "You are inside an interactive Python session and can type a line to run it",
    "The previous line contained a syntax error",
    "Python is compiling the whole file before running it",
    "The line below is a comment"
   ],
   "a": [
    0
   ],
   "w": ">>> is the interactive interpreter's prompt: each line runs as soon as you press Enter. It has nothing to do with errors, and Python doesn't compile the whole file first. That's how a compiled language works, not an interpreter.",
   "bk": "Python Crash Course ch1",
   "lv": "recall"
  },
  {
   "id": "foc-q0121",
   "topic": "Python basics",
   "q": "What happens when this line is run in Python 3?\n\nPrint(\"Hello world!\")",
   "c": [
    "It prints Hello world!",
    "It prints Print(\"Hello world!\")",
    "NameError, because Python does not recognise Print with a capital P",
    "SyntaxError, because the quotes are wrong"
   ],
   "a": [
    2
   ],
   "w": "Python is case-sensitive, so Print is an unknown name and you get NameError: name 'Print' is not defined. The quotes are fine, which is why it is not a SyntaxError. Python never silently treats Print as print.",
   "bk": "Python Crash Course ch1",
   "lv": "apply"
  },
  {
   "id": "foc-q0122",
   "topic": "Python basics",
   "q": "Which of these lines runs WITHOUT any error, even though it contains a typo?",
   "c": [
    "prnt(\"Welcome to IIT Jodhpur\")",
    "print(\"Welcome to IIT Jodhpur\"",
    "print(Welcome to IIT Jodhpur)",
    "print(\"Welcom to IIT Jodhpur\")"
   ],
   "a": [
    3
   ],
   "w": "A misspelling inside quotes is just text, so Python prints it as written. prnt is an unknown name (NameError), the unclosed bracket is a SyntaxError, and text without quotes is read as code, which is also a SyntaxError.",
   "bk": "Python Crash Course ch1",
   "lv": "analyse"
  },
  {
   "id": "foc-q0123",
   "topic": "Python basics",
   "q": "A file marks.py contains exactly these two lines and is run as a script:\n\ntotal = 45 + 38\ntotal\n\nWhat appears on the screen?",
   "c": [
    "83",
    "total",
    "Nothing",
    "45 + 38"
   ],
   "a": [
    2
   ],
   "w": "In a saved script a bare expression is evaluated and discarded, so nothing is shown. You need print(total). People pick 83 because at the >>> prompt (and as the last line of a Colab cell) a bare expression is echoed. A script doesn't do that.",
   "bk": "Python Crash Course ch1",
   "lv": "analyse"
  },
  {
   "id": "foc-q0124",
   "topic": "Python basics",
   "q": "When a program fails with a serious error, the report Python prints, showing the file, line number and error type, is called a:",
   "c": [
    "Compile log",
    "Traceback",
    "Prompt",
    "Build command"
   ],
   "a": [
    1
   ],
   "w": "It is a traceback. Read its last line first: that is the error type and message. Python is interpreted, so there is no separate compile log; the prompt is just >>>.",
   "bk": "Python Crash Course ch1",
   "lv": "recall"
  },
  {
   "id": "foc-q0125",
   "topic": "Python basics",
   "q": "Which command safely ends an interactive Python session on Windows, macOS and Linux alike?",
   "c": [
    "exit()",
    "Ctrl-C",
    "quit Python",
    "Ctrl-Z on every system"
   ],
   "a": [
    0
   ],
   "w": "exit() works everywhere. The key shortcut differs by system: Ctrl-D on Linux/macOS, Ctrl-Z then Enter on Windows, so Ctrl-Z isn't universal. Ctrl-C interrupts a running command but leaves the session open.",
   "bk": "Python Crash Course ch1",
   "lv": "recall"
  },
  {
   "id": "foc-q0126",
   "topic": "Software & OS",
   "q": "You are in a Windows command window inside your project folder. Which command lists the files in that folder?",
   "c": [
    "ls",
    "cd",
    "dir",
    "python dir"
   ],
   "a": [
    2
   ],
   "w": "On Windows it is dir. ls does the same job on Linux and macOS, which makes it the tempting wrong answer. cd changes folder; it doesn't list anything.",
   "bk": "Python Crash Course ch1",
   "lv": "apply"
  },
  {
   "id": "foc-q0127",
   "topic": "Software & OS",
   "q": "A script hello.py is saved in Desktop/python_work. From a terminal that is currently in your home folder, which sequence runs it on macOS or Linux?",
   "c": [
    "python3 hello.py, then cd Desktop/python_work",
    "cd Desktop/python_work, then python3 hello.py",
    "ls Desktop/python_work, then hello.py",
    "cd hello.py, then python3"
   ],
   "a": [
    1
   ],
   "w": "First move into the folder with cd, then hand the file to the interpreter with python3 hello.py. Running python3 first fails because the file isn't in the current folder. ls only lists files, and cd takes a folder, not a file.",
   "bk": "Python Crash Course ch1",
   "lv": "apply"
  },
  {
   "id": "foc-q0128",
   "topic": "Python basics",
   "q": "Why does the book suggest a one-line Hello World program as the very first thing to run?",
   "c": [
    "It is the shortest program Python can compile",
    "Hello World is a reserved keyword that tests the interpreter",
    "It teaches the print function's optional arguments",
    "If it runs, the whole setup (interpreter, editor, file) works, so later programs should too"
   ],
   "a": [
    3
   ],
   "w": "Its value is as a smoke test of the environment. Hello World is not a keyword, and Python is interpreted rather than compiled, so 'the shortest program Python can compile' is wrong twice.",
   "bk": "Python Crash Course ch1",
   "lv": "recall"
  },
  {
   "id": "foc-q0129",
   "topic": "Python basics",
   "q": "An old tutorial contains the line print \"Done\" (no brackets). What happens if you run it in Python 3?",
   "c": [
    "SyntaxError: print needs parentheses in Python 3",
    "It prints Done",
    "It prints \"Done\" with the quotes",
    "NameError: Done is not defined"
   ],
   "a": [
    0
   ],
   "w": "In Python 2 print was a statement, so that line worked. In Python 3 print is a function and must be called with brackets: print(\"Done\"). Without them you get a SyntaxError (background only; the course uses Python 3 throughout).",
   "bk": "Python Crash Course ch1",
   "lv": "apply"
  },
  {
   "id": "foc-q0130",
   "topic": "Python basics",
   "q": "Python is called cross-platform. What does that mean?",
   "c": [
    "It can be mixed with C and Java in one file",
    "The same program runs on Windows, macOS and Linux; only the setup steps differ",
    "It runs only inside a web browser",
    "It converts programs into each operating system's machine code before running"
   ],
   "a": [
    1
   ],
   "w": "Cross-platform means one program runs on every major OS that has Python installed. Running in a browser describes Colab, not Python. Converting everything to machine code before running is what a compiler does.",
   "bk": "Python Crash Course ch1",
   "lv": "recall"
  },
  {
   "id": "foc-q0131",
   "topic": "Python basics",
   "q": "Which file name follows the book's naming advice and will be recognised as a Python script?",
   "c": [
    "Hello World.py",
    "hello_world.ipynb",
    "hello-world.txt",
    "hello_world.py"
   ],
   "a": [
    3
   ],
   "w": "Use lowercase letters, underscores instead of spaces, and the .py extension. .ipynb is a notebook (Colab's format), not a plain script, and .txt won't be treated as Python at all.",
   "bk": "Python Crash Course ch1",
   "lv": "apply"
  },
  {
   "id": "foc-q0132",
   "topic": "Python basics",
   "q": "What does this code print?\n\nx = 5\nx = x + 3\nprint(x)",
   "c": [
    "5",
    "8",
    "x + 3",
    "NameError"
   ],
   "a": [
    1
   ],
   "w": "The second line reads the current value (5), adds 3 and stores 8 back in x. Picking 5 assumes the first assignment is fixed, but a variable always holds its most recent value.",
   "bk": "Python Crash Course ch2",
   "lv": "apply"
  },
  {
   "id": "foc-q0133",
   "topic": "Python basics",
   "q": "Which statement about this program is correct?\n\nmesage = \"Lab opens at 9\"\nprint(mesage)",
   "c": [
    "It raises NameError because mesage is misspelled",
    "It raises SyntaxError on line 1",
    "It prints Lab opens at 9",
    "It prints mesage"
   ],
   "a": [
    2
   ],
   "w": "The name is spelled the same way in both lines, so Python is satisfied and prints the text. Python checks that names are consistent, not that they are correct English. NameError only appears when the two spellings differ.",
   "bk": "Python Crash Course ch2",
   "lv": "analyse"
  },
  {
   "id": "foc-q0134",
   "topic": "Python basics",
   "q": "Which line raises an error?\n\nline 1: course = \"Foundations of Computing\"\nline 2: code = \"FoC\"\nline 3: print(Course)\nline 4: print(code)",
   "c": [
    "line 1",
    "line 2",
    "line 4",
    "line 3"
   ],
   "a": [
    3
   ],
   "w": "Names are case-sensitive: Course with a capital C was never assigned, so line 3 raises NameError and line 4 never runs. Lines 1 and 2 are ordinary assignments.",
   "bk": "Python Crash Course ch2",
   "lv": "apply"
  },
  {
   "id": "foc-q0135",
   "topic": "Python basics",
   "q": "Which of these lines is valid Python?",
   "c": [
    "note = 'Asha's notebook'",
    "note = \"Asha's notebook\"",
    "note = \"Asha's notebook'",
    "note = Asha's notebook"
   ],
   "a": [
    1
   ],
   "w": "Double quotes around text containing an apostrophe work. In the all-single-quote version the string ends at the apostrophe, leaving stray text, so it's a SyntaxError. The version opening with \" and closing with ' mixes quote types, and the unquoted one has no quotes at all.",
   "bk": "Python Crash Course ch2",
   "lv": "apply"
  },
  {
   "id": "foc-q0136",
   "topic": "Python basics",
   "q": "What does this code print?\n\nlang = ' rust '\nlang.strip()\nprint('[' + lang + ']')",
   "c": [
    "[rust]",
    "[ rust]",
    "[rust ]",
    "[ rust ]"
   ],
   "a": [
    3
   ],
   "w": "strip() returns a cleaned copy, but line 2 throws that copy away. lang itself still has both spaces. To keep the change you must write lang = lang.strip(); this is the most common string-method mistake.",
   "bk": "Python Crash Course ch2",
   "lv": "analyse"
  },
  {
   "id": "foc-q0137",
   "topic": "Python basics",
   "q": "What does this code print?\n\ncity = '  jodhpur  '\nprint('[' + city.lstrip() + ']')",
   "c": [
    "[jodhpur  ]",
    "[  jodhpur]",
    "[jodhpur]",
    "[  jodhpur  ]"
   ],
   "a": [
    0
   ],
   "w": "lstrip() removes whitespace from the LEFT only, so the trailing spaces stay. [  jodhpur] is what rstrip() would give; [jodhpur] needs strip().",
   "bk": "Python Crash Course ch2",
   "lv": "apply"
  },
  {
   "id": "foc-q0138",
   "topic": "Python basics",
   "q": "What does this code print?\n\nname = \"Ravi Kumar\"\nname.upper()\nprint(name)",
   "c": [
    "RAVI KUMAR",
    "Ravi Kumar",
    "ravi kumar",
    "None"
   ],
   "a": [
    1
   ],
   "w": "upper() returns a new uppercase string, but nothing stores it, so name is unchanged. Strings are never modified in place by these methods.",
   "bk": "Python Crash Course ch2",
   "lv": "apply"
  },
  {
   "id": "foc-q0139",
   "topic": "Python basics",
   "q": "What does this code print?\n\nfirst = \"ravi\"\nlast = \"kumar\"\nprint(first + last)",
   "c": [
    "ravi kumar",
    "Ravi Kumar",
    "ravikumar",
    "first + last"
   ],
   "a": [
    2
   ],
   "w": "+ joins strings with nothing in between. To get a space, concatenate it explicitly: first + \" \" + last.",
   "bk": "Python Crash Course ch2",
   "lv": "recall"
  },
  {
   "id": "foc-q0140",
   "topic": "Python basics",
   "q": "What does print(4 / 2) output in Python 3?",
   "c": [
    "2",
    "2.0",
    "2.00",
    "1"
   ],
   "a": [
    1
   ],
   "w": "/ always returns a float in Python 3, even when the division is exact, so the result is 2.0. Answering 2 assumes exact division gives an int, which it doesn't.",
   "bk": "Python Crash Course ch2",
   "lv": "recall"
  },
  {
   "id": "foc-q0141",
   "topic": "Python basics",
   "q": "What does print(2 + 3 * 4 ** 2) output?",
   "c": [
    "400",
    "50",
    "80",
    "196"
   ],
   "a": [
    1
   ],
   "w": "Powers first: 4 ** 2 = 16. Then multiplication: 3 * 16 = 48. Then addition: 2 + 48 = 50. 400 comes from working left to right ((2+3)*4 = 20, then squared), which ignores precedence.",
   "bk": "Python Crash Course ch2",
   "lv": "apply"
  },
  {
   "id": "foc-q0142",
   "topic": "Python basics",
   "q": "What does print((1 + 2) ** 2 * 2) output?",
   "c": [
    "18",
    "36",
    "12",
    "81"
   ],
   "a": [
    0
   ],
   "w": "Brackets first (3), then the power (9), then multiply by 2 = 18. 81 would need the power applied to 2 * 2 first, i.e. 3 ** (2 * 2), which isn't what is written.",
   "bk": "Python Crash Course ch2",
   "lv": "apply"
  },
  {
   "id": "foc-q0143",
   "topic": "Python basics",
   "q": "Which of these expressions produce a float? (Select all)",
   "c": [
    "10 / 2",
    "10 * 2",
    "2 ** 3",
    "0.5 * 4"
   ],
   "a": [
    0,
    3
   ],
   "w": "/ always gives a float (5.0), and any arithmetic that involves a float gives a float (2.0). 10 * 2 and 2 ** 3 use only integers and no division, so they stay integers (20 and 8).",
   "bk": "Python Crash Course ch2",
   "lv": "analyse",
   "multi": true
  },
  {
   "id": "foc-q0144",
   "topic": "Python basics",
   "q": "seats = 120. Which line prints Seats left: 120 without an error?",
   "c": [
    "print(\"Seats left: \" + seats)",
    "print(\"Seats left: \" + \"seats\")",
    "print(\"Seats left: \" + int(seats))",
    "print(\"Seats left: \" + str(seats))"
   ],
   "a": [
    3
   ],
   "w": "str() turns the integer into text so + can join it. Joining seats directly raises TypeError (str + int). Putting seats in quotes prints the word seats, not the number. int() leaves it a number, so it is still a TypeError.",
   "bk": "Python Crash Course ch2",
   "lv": "apply"
  },
  {
   "id": "foc-q0145",
   "topic": "Python basics",
   "q": "In Python 3, this program stops with an error. Which error type is it?\n\nage = 19\nmsg = \"Happy \" + age + \"th birthday\"",
   "c": [
    "NameError",
    "SyntaxError",
    "TypeError",
    "ValueError"
   ],
   "a": [
    2
   ],
   "w": "The code is grammatically valid and every name exists, so it is not a SyntaxError or NameError. The problem is mixing types: Python 3 reports TypeError: can only concatenate str (not \"int\") to str. (The book shows an older wording of the same error.)",
   "bk": "Python Crash Course ch2",
   "lv": "recall"
  },
  {
   "id": "foc-q0146",
   "topic": "Python basics",
   "q": "How many lines of output does this produce?\n\nprint(\"Menu:\\n\\tTea\\n\\tCoffee\")",
   "c": [
    "1",
    "2",
    "4",
    "3"
   ],
   "a": [
    3
   ],
   "w": "There are two \\n characters, so the text is split into three lines: Menu:, then an indented Tea, then an indented Coffee. \\t adds a tab at the start of a line; it doesn't create a new one.",
   "bk": "Python Crash Course ch2",
   "lv": "apply"
  },
  {
   "id": "foc-q0147",
   "topic": "Python basics",
   "q": "What does this code print?\n\nprint(\"Start\")  # print(\"Middle\")\nprint(\"End\")",
   "c": [
    "Start then End",
    "Start, Middle, End",
    "Start only",
    "SyntaxError"
   ],
   "a": [
    0
   ],
   "w": "Everything after # on a line is ignored, including the second print call written there. The first print on that line still runs because it comes before the #.",
   "bk": "Python Crash Course ch2",
   "lv": "apply"
  },
  {
   "id": "foc-q0148",
   "topic": "Python basics",
   "q": "Which of these names is LEGAL but breaks a naming guideline from the book?",
   "c": [
    "total_marks",
    "Total_Marks",
    "2nd_round",
    "total marks"
   ],
   "a": [
    1
   ],
   "w": "Uppercase letters are allowed, so Total_Marks runs, but the guideline is to keep variable names lowercase. 2nd_round starts with a digit and total marks contains a space; both are errors, not style issues. total_marks follows every rule and guideline.",
   "bk": "Python Crash Course ch2",
   "lv": "analyse"
  },
  {
   "id": "foc-q0149",
   "topic": "Python basics",
   "q": "A student writes:\n\nprint = \"Results\"\nprint(print)\n\nWhat happens?",
   "c": [
    "It prints Results",
    "SyntaxError on line 1, because print is reserved",
    "TypeError on line 2, because print now refers to a string, which can't be called",
    "It prints print"
   ],
   "a": [
    2
   ],
   "w": "print is a built-in function, not a keyword, so line 1 is accepted and silently replaces it with a string. Line 2 then tries to call a string and fails with TypeError: 'str' object is not callable. True keywords such as if do give a SyntaxError on assignment.",
   "bk": "Python Crash Course ch2",
   "lv": "analyse"
  },
  {
   "id": "foc-q0150",
   "topic": "Python basics",
   "q": "In the expression name.title(), what is the role of the dot?",
   "c": [
    "It applies the title() method to the value stored in name",
    "It multiplies name by title()",
    "It marks the end of a statement",
    "It joins name and title() into one string"
   ],
   "a": [
    0
   ],
   "w": "Dot notation calls a method on a value: name.title() means 'run title() on name'. Python doesn't use the dot to end statements or join strings; + joins strings.",
   "bk": "Python Crash Course ch2",
   "lv": "recall"
  },
  {
   "id": "foc-q0151",
   "topic": "Python basics",
   "q": "Which line starts the interpreter's display of the Zen of Python?",
   "c": [
    "print(zen)",
    "help(python)",
    "import this",
    "zen()"
   ],
   "a": [
    2
   ],
   "w": "Typing import this at the >>> prompt prints Tim Peters's list of Python principles. The other lines refer to names that don't exist and would raise NameError.",
   "bk": "Python Crash Course ch2",
   "lv": "recall"
  },
  {
   "id": "foc-q0152",
   "topic": "Python basics",
   "q": "According to the book, why does lower() matter when storing data typed by users?",
   "c": [
    "It removes spaces users accidentally add",
    "It converts numbers typed as text into integers",
    "It makes the program run faster",
    "Users capitalise inconsistently, so storing one case lets 'ASHA', 'Asha' and 'asha' be treated as the same"
   ],
   "a": [
    3
   ],
   "w": "lower() normalises case so different capitalisations of the same name match. Removing spaces is strip()'s job, and turning text into numbers is int()'s job, not lower()'s.",
   "bk": "Python Crash Course ch2",
   "lv": "recall"
  },
  {
   "id": "foc-q0153",
   "topic": "Python basics",
   "q": "What does this code print?\n\nfirst_name = \"asha\"\nlast_name = \"verma\"\nfull = first_name + \" \" + last_name\nprint(\"Welcome, \" + full.title() + \"!\")",
   "c": [
    "Welcome, asha verma!",
    "Welcome, Asha Verma!",
    "Welcome, Asha verma!",
    "Welcome,Asha Verma!"
   ],
   "a": [
    1
   ],
   "w": "full is 'asha verma'; title() capitalises the first letter of EACH word, giving Asha Verma, and the space after the comma is inside the literal \"Welcome, \". Asha verma would be the result of capitalize(), not title().",
   "bk": "Python Crash Course ch2",
   "lv": "apply"
  },
  {
   "id": "foc-q0154",
   "topic": "Python basics",
   "q": "Which kind of error does the book describe as the least specific, and therefore often the hardest to pin down?",
   "c": [
    "NameError",
    "TypeError",
    "IndexError",
    "SyntaxError"
   ],
   "a": [
    3
   ],
   "w": "A SyntaxError only says Python couldn't parse the line, so you have to hunt for the bad quote, bracket or colon. NameError and TypeError name the exact problem (an unknown name, a type clash).",
   "bk": "Python Crash Course ch2",
   "lv": "recall"
  },
  {
   "id": "foc-q0155",
   "topic": "Lists & tuples",
   "q": "What does this code print?\n\nl = ['a', 'b', 'c']\nl.insert(1, 'x')\nprint(l)",
   "c": [
    "['x', 'a', 'b', 'c']",
    "['a', 'x', 'b', 'c']",
    "['a', 'x', 'c']",
    "['a', 'b', 'x', 'c']"
   ],
   "a": [
    1
   ],
   "w": "insert(1, 'x') puts 'x' at index 1 and shifts 'b' and 'c' right. Nothing is overwritten, so the ['a', 'x', 'c'] answer is what l[1] = 'x' would do.",
   "bk": "Python Crash Course ch3",
   "lv": "apply"
  },
  {
   "id": "foc-q0156",
   "topic": "Lists & tuples",
   "q": "What does this code print?\n\nstack = ['ravi', 'meena', 'arjun']\np = stack.pop()\nprint(stack)\nprint(p)",
   "c": [
    "['meena', 'arjun'] then ravi",
    "['ravi', 'meena', 'arjun'] then arjun",
    "['ravi', 'meena'] then arjun",
    "['ravi', 'meena'] then None"
   ],
   "a": [
    2
   ],
   "w": "pop() with no argument removes the LAST item and returns it, so stack loses 'arjun' and p holds 'arjun'. Removing 'ravi' would need pop(0).",
   "bk": "Python Crash Course ch3",
   "lv": "apply"
  },
  {
   "id": "foc-q0157",
   "topic": "Lists & tuples",
   "q": "What does this code print?\n\nq = ['ravi', 'meena', 'arjun']\nprint(q.pop(0))\nprint(q)",
   "c": [
    "ravi then ['meena', 'arjun']",
    "arjun then ['ravi', 'meena']",
    "0 then ['meena', 'arjun']",
    "ravi then ['ravi', 'meena', 'arjun']"
   ],
   "a": [
    0
   ],
   "w": "pop(0) removes the item at index 0 and returns it, so 'ravi' is printed and is no longer in the list. pop always shrinks the list, which rules out the answer that still shows all three names.",
   "bk": "Python Crash Course ch3",
   "lv": "apply"
  },
  {
   "id": "foc-q0158",
   "topic": "Lists & tuples",
   "q": "What does this code print?\n\ndrinks = ['tea', 'coffee', 'juice']\ndrinks.append('lassi')\ndrinks.insert(0, 'water')\ndel drinks[2]\nprint(drinks)",
   "c": [
    "['water', 'tea', 'coffee', 'lassi']",
    "['tea', 'coffee', 'lassi']",
    "['water', 'coffee', 'juice', 'lassi']",
    "['water', 'tea', 'juice', 'lassi']"
   ],
   "a": [
    3
   ],
   "w": "After the insert the list is ['water', 'tea', 'coffee', 'juice', 'lassi'], so index 2 is now 'coffee'. Deleting 'juice' means using index 2 from BEFORE the insert, which forgets that insert shifted everything right.",
   "bk": "Python Crash Course ch3",
   "lv": "analyse"
  },
  {
   "id": "foc-q0159",
   "topic": "Lists & tuples",
   "q": "What does this code print?\n\ncars = ['kia', 'bmw', 'audi']\nprint(cars.sort())",
   "c": [
    "['audi', 'bmw', 'kia']",
    "['kia', 'bmw', 'audi']",
    "None",
    "An error, because sort() needs an argument"
   ],
   "a": [
    2
   ],
   "w": "sort() sorts the list in place and returns None, and print shows that return value. The list IS now sorted, so print(cars) on the next line would show ['audi', 'bmw', 'kia'].",
   "bk": "Python Crash Course ch3",
   "lv": "analyse"
  },
  {
   "id": "foc-q0160",
   "topic": "Lists & tuples",
   "q": "Two lists start as ['bmw', 'audi', 'toyota']. List a gets a.reverse(); list b gets b.sort(reverse=True). What are they now?",
   "c": [
    "a = ['toyota', 'audi', 'bmw'], b = ['toyota', 'bmw', 'audi']",
    "Both are ['toyota', 'bmw', 'audi']",
    "a = ['toyota', 'bmw', 'audi'], b = ['toyota', 'audi', 'bmw']",
    "Both are ['toyota', 'audi', 'bmw']"
   ],
   "a": [
    0
   ],
   "w": "reverse() just flips the existing order (bmw, audi, toyota → toyota, audi, bmw). sort(reverse=True) sorts into reverse alphabetical order (toyota, bmw, audi). They coincide only by luck.",
   "bk": "Python Crash Course ch3",
   "lv": "analyse"
  },
  {
   "id": "foc-q0161",
   "topic": "Lists & tuples",
   "q": "cities = ['pune', 'delhi', 'jaipur', 'surat']. What is cities[-2]?",
   "c": [
    "'delhi'",
    "'surat'",
    "'pune'",
    "'jaipur'"
   ],
   "a": [
    3
   ],
   "w": "-1 is the last item ('surat'), so -2 is the one before it: 'jaipur'. 'delhi' is index 1 counting from the front, which is the mix-up to avoid.",
   "bk": "Python Crash Course ch3",
   "lv": "apply"
  },
  {
   "id": "foc-q0162",
   "topic": "Lists & tuples",
   "q": "What happens here?\n\nmotorcycles = []\nprint(motorcycles[-1])",
   "c": [
    "It prints []",
    "It prints None",
    "IndexError: list index out of range",
    "It prints an empty line"
   ],
   "a": [
    2
   ],
   "w": "-1 means 'the last item', and an empty list has no items, so this raises IndexError. It is the one case where [-1] fails.",
   "bk": "Python Crash Course ch3",
   "lv": "apply"
  },
  {
   "id": "foc-q0163",
   "topic": "Lists & tuples",
   "q": "What does this code print?\n\nd = ['x', 'y', 'z']\nd.append('w')\nd.pop(0)\nprint(len(d))",
   "c": [
    "4",
    "3",
    "2",
    "5"
   ],
   "a": [
    1
   ],
   "w": "3 items + 1 appended = 4, then pop(0) removes one = 3. The popped value is discarded here because nothing stores it, but the list still shrinks.",
   "bk": "Python Crash Course ch3",
   "lv": "apply"
  },
  {
   "id": "foc-q0164",
   "topic": "Lists & tuples",
   "q": "colours = ['red', 'green', 'blue']. After colours[1] = 'black', what is colours?",
   "c": [
    "['red', 'black', 'blue']",
    "['red', 'black', 'green', 'blue']",
    "['black', 'green', 'blue']",
    "['red', 'green', 'black']"
   ],
   "a": [
    0
   ],
   "w": "Assigning to an index replaces that item; the length stays 3. The four-item option is what insert(1, 'black') would produce.",
   "bk": "Python Crash Course ch3",
   "lv": "recall"
  },
  {
   "id": "foc-q0165",
   "topic": "Lists & tuples",
   "q": "Which expression ALWAYS gives the last item of a non-empty list, even after items have been added?",
   "c": [
    "lst[len(lst)]",
    "lst[-0]",
    "lst[-1]",
    "lst[last]"
   ],
   "a": [
    2
   ],
   "w": "lst[-1] always means the last item. lst[len(lst)] is one past the end, so it's an IndexError. -0 is just 0, the first item. last is an undefined name.",
   "bk": "Python Crash Course ch3",
   "lv": "recall"
  },
  {
   "id": "foc-q0166",
   "topic": "Lists & tuples",
   "q": "What is printed by print(names) when names = ['asha', 'vikram']?",
   "c": [
    "asha vikram",
    "['asha', 'vikram']",
    "asha, vikram",
    "Asha Vikram"
   ],
   "a": [
    1
   ],
   "w": "Printing a whole list shows Python's representation, with brackets, quotes and commas. To show clean values you print individual items (or loop, as in the next chapter).",
   "bk": "Python Crash Course ch3",
   "lv": "recall"
  },
  {
   "id": "foc-q0167",
   "topic": "Lists & tuples",
   "q": "What does this code print?\n\nprint(sorted(['mango', 'apple', 'Banana']))",
   "c": [
    "['apple', 'Banana', 'mango']",
    "['mango', 'apple', 'Banana']",
    "['apple', 'mango', 'Banana']",
    "['Banana', 'apple', 'mango']"
   ],
   "a": [
    3
   ],
   "w": "Python compares character codes, and every uppercase letter comes before every lowercase one, so 'Banana' goes first. 'Dictionary order' (apple, Banana, mango) needs all items in the same case, which is the complication the book's note warns about.",
   "bk": "Python Crash Course ch3",
   "lv": "analyse"
  },
  {
   "id": "foc-q0168",
   "topic": "Lists & tuples",
   "q": "What does this code print?\n\nnames = ['asha', 'vikram', 'zoya']\nprint(names[1].upper())",
   "c": [
    "ASHA",
    "VIKRAM",
    "Vikram",
    "['VIKRAM']"
   ],
   "a": [
    1
   ],
   "w": "names[1] is the second item, 'vikram', and upper() makes it VIKRAM. An item pulled from a list is a plain string, so it prints without brackets or quotes.",
   "bk": "Python Crash Course ch3",
   "lv": "apply"
  },
  {
   "id": "foc-q0169",
   "topic": "Lists & tuples",
   "q": "What does this code print?\n\nnums = [42, 7, 19]\nx = sorted(nums)\nprint(nums)\nprint(x)",
   "c": [
    "[7, 19, 42] then [7, 19, 42]",
    "[42, 7, 19] then None",
    "[42, 7, 19] then [7, 19, 42]",
    "[7, 19, 42] then None"
   ],
   "a": [
    2
   ],
   "w": "sorted() builds and returns a new sorted list; nums keeps its order. The None options belong to sort(), which works in place and returns None.",
   "bk": "Python Crash Course ch3",
   "lv": "apply"
  },
  {
   "id": "foc-q0170",
   "topic": "Lists & tuples",
   "q": "What does this code print?\n\nbikes = ['hero', 'bajaj']\nprint(\"My first bike was a \" + bikes[0].title() + \".\")",
   "c": [
    "My first bike was a Hero.",
    "My first bike was a hero.",
    "My first bike was a ['hero'].",
    "TypeError: can't concatenate a list"
   ],
   "a": [
    0
   ],
   "w": "bikes[0] is the string 'hero', so it concatenates like any string, and title() capitalises it. The TypeError would only happen with the whole list (bikes), not one of its items.",
   "bk": "Python Crash Course ch3",
   "lv": "apply"
  },
  {
   "id": "foc-q0171",
   "topic": "Lists & tuples",
   "q": "What does this code print?\n\nm = ['honda', 'yamaha', 'ducati']\nt = 'ducati'\nm.remove(t)\nprint(t)",
   "c": [
    "Nothing, because t was removed too",
    "None",
    "NameError: t is not defined",
    "ducati"
   ],
   "a": [
    3
   ],
   "w": "remove() deletes the matching item from the LIST only. The separate variable t still holds 'ducati', which is why the book can still print a message about the removed item.",
   "bk": "Python Crash Course ch3",
   "lv": "analyse"
  },
  {
   "id": "foc-q0172",
   "topic": "Lists & tuples",
   "q": "f = ['a', 'b', 'c', 'd']. After f.insert(2, 'Z'), at which index is 'c'?",
   "c": [
    "2",
    "4",
    "1",
    "3"
   ],
   "a": [
    3
   ],
   "w": "'Z' takes index 2 and pushes 'c' (and 'd') one place right, so 'c' moves from 2 to 3. Answering 2 forgets the shift.",
   "bk": "Python Crash Course ch3",
   "lv": "apply"
  },
  {
   "id": "foc-q0173",
   "topic": "Lists & tuples",
   "q": "An app knows a user's ID string 'guest42' but not where it sits in active_users. Which call removes it?",
   "c": [
    "del active_users['guest42']",
    "active_users.pop('guest42')",
    "active_users.remove('guest42')",
    "active_users.delete('guest42')"
   ],
   "a": [
    2
   ],
   "w": "remove() works by value. del and pop() both need a numeric position, so passing a string to them is an error, and lists have no delete() method.",
   "bk": "Python Crash Course ch3",
   "lv": "apply"
  },
  {
   "id": "foc-q0174",
   "topic": "Lists & tuples",
   "q": "Why does the book recommend starting with an empty list and calling append() as the program runs?",
   "c": [
    "Because you often don't know the data (e.g. what users will enter) until the program is running",
    "Because append() is faster than defining the list in one line",
    "Because Python lists must start empty",
    "Because append() sorts the list as it goes"
   ],
   "a": [
    0
   ],
   "w": "Data such as user registrations arrives while the program runs, so you build the list as it comes in. Lists can be defined with items up front, and append() never sorts.",
   "bk": "Python Crash Course ch3",
   "lv": "recall"
  },
  {
   "id": "foc-q0175",
   "topic": "Lists & tuples",
   "q": "What does this code print?\n\ng = ['p', 'q', 'r']\ndel g[-1]\ng.append('s')\nprint(g)",
   "c": [
    "['p', 'q', 'r', 's']",
    "['q', 'r', 's']",
    "['p', 'q', 's']",
    "['s', 'p', 'q']"
   ],
   "a": [
    2
   ],
   "w": "del g[-1] removes the last item 'r'; append then adds 's' at the end. Negative indices work with del just as they do for reading.",
   "bk": "Python Crash Course ch3",
   "lv": "apply"
  },
  {
   "id": "foc-q0176",
   "topic": "Lists & tuples",
   "q": "A list has 3 items. A student writes lst[len(lst)] to get the last one. What is the fix, and why?",
   "c": [
    "lst[len(lst) + 1], because len counts from 0",
    "lst[len(lst) - 1], because len counts items from 1 but indices start at 0",
    "lst[len(lst)] is already correct",
    "lst[3], because there are 3 items"
   ],
   "a": [
    1
   ],
   "w": "len gives 3, but the valid indices are 0, 1, 2, so the last is len − 1 = 2 (or just -1). lst[3] makes the same off-by-one mistake.",
   "bk": "Python Crash Course ch3",
   "lv": "analyse"
  },
  {
   "id": "foc-q0177",
   "topic": "Lists & tuples",
   "q": "How many lines does this print?\n\nteam = ['anu', 'bilal', 'chen']\nfor t in team:\n    print(\"Welcome \" + t.title())\n    print(\"Kit issued\")\nprint(\"All set\")",
   "c": [
    "3",
    "4",
    "9",
    "7"
   ],
   "a": [
    3
   ],
   "w": "Two indented lines run for each of 3 names (6 lines), and the unindented line runs once afterwards: 7. 9 would mean All set was also inside the loop.",
   "bk": "Python Crash Course ch4",
   "lv": "apply"
  },
  {
   "id": "foc-q0178",
   "topic": "Lists & tuples",
   "q": "What is the output?\n\nteam = ['anu', 'bilal', 'chen']\nfor t in team:\n    print(\"Hi \" + t)\n    print(\"Done\")",
   "c": [
    "Hi anu, Hi bilal, Hi chen, then Done once",
    "Hi anu, Done, Hi bilal, Done, Hi chen, Done",
    "Hi anu, Done only",
    "An IndentationError"
   ],
   "a": [
    1
   ],
   "w": "print(\"Done\") is indented, so it belongs to the loop and runs on every pass, in step with each greeting. That's the book's 'indented the after-loop line by mistake' error: no message, just repeated output. 'Done once' is what you'd get if it were unindented.",
   "bk": "Python Crash Course ch4",
   "lv": "analyse"
  },
  {
   "id": "foc-q0179",
   "topic": "Lists & tuples",
   "q": "What is the LAST line printed?\n\nteam = ['anu', 'bilal', 'chen']\nfor t in team:\n    print(\"Great match, \" + t.title())\nprint(\"See you next week, \" + t.title())",
   "c": [
    "See you next week, Chen",
    "See you next week, Anu",
    "Great match, Chen",
    "NameError: t is not defined"
   ],
   "a": [
    0
   ],
   "w": "The second print is outside the loop, so it runs once. By then t still holds the last item, 'chen'. The loop variable doesn't disappear when the loop ends, so there's no NameError.",
   "bk": "Python Crash Course ch4",
   "lv": "analyse"
  },
  {
   "id": "foc-q0180",
   "topic": "Lists & tuples",
   "q": "What does this print?\n\nfor n in [3, 8, 5]:\n    total = n\nprint(n)",
   "c": [
    "3",
    "8",
    "5",
    "16"
   ],
   "a": [
    2
   ],
   "w": "The loop variable keeps the value from the final pass, 5. Nothing here adds the numbers up, so 16 is a distractor.",
   "bk": "Python Crash Course ch4",
   "lv": "apply"
  },
  {
   "id": "foc-q0181",
   "topic": "Lists & tuples",
   "q": "Running this file gives which error?\n\nfor x in [1, 2]:\nprint(x)",
   "c": [
    "IndentationError: expected an indented block",
    "IndentationError: unexpected indent",
    "NameError: x is not defined",
    "No error; it prints 1 and 2"
   ],
   "a": [
    0
   ],
   "w": "A for line must be followed by at least one indented line. 'unexpected indent' is the opposite mistake, a line indented when it shouldn't be.",
   "bk": "Python Crash Course ch4",
   "lv": "recall"
  },
  {
   "id": "foc-q0182",
   "topic": "Lists & tuples",
   "q": "Running this file gives which error?\n\nx = 1\n    print(x)",
   "c": [
    "SyntaxError: expected ':'",
    "IndentationError: unexpected indent",
    "IndentationError: expected an indented block",
    "No error; it prints 1"
   ],
   "a": [
    1
   ],
   "w": "print(x) isn't inside any block, so indenting it is unexpected. You only indent lines that belong to a for (or, later, an if, a def…).",
   "bk": "Python Crash Course ch4",
   "lv": "apply"
  },
  {
   "id": "foc-q0183",
   "topic": "Lists & tuples",
   "q": "What does list(range(1, 10, 3)) produce?",
   "c": [
    "[1, 4, 7, 10]",
    "[3, 6, 9]",
    "[1, 3, 6, 9]",
    "[1, 4, 7]"
   ],
   "a": [
    3
   ],
   "w": "Start at 1 and add 3 each time: 1, 4, 7. The next value would be 10, which is not less than the stop value, so it is excluded.",
   "bk": "Python Crash Course ch4",
   "lv": "apply"
  },
  {
   "id": "foc-q0184",
   "topic": "Lists & tuples",
   "q": "Which call produces exactly the odd numbers from 1 to 19?",
   "c": [
    "list(range(1, 19, 2))",
    "list(range(1, 20, 2))",
    "list(range(2, 20, 2))",
    "list(range(0, 19, 2))"
   ],
   "a": [
    1
   ],
   "w": "The stop value is excluded, so it must be above 19: range(1, 20, 2) ends at 19. range(1, 19, 2) stops at 17. range(2, 20, 2) and range(0, 19, 2) start on an even number, so they produce even numbers.",
   "bk": "Python Crash Course ch4",
   "lv": "analyse"
  },
  {
   "id": "foc-q0185",
   "topic": "Lists & tuples",
   "q": "You want a loop to print 1 to 20 inclusive. Which header is correct?",
   "c": [
    "for v in range(1, 21):",
    "for v in range(1, 20):",
    "for v in range(0, 20):",
    "for v in range(20):"
   ],
   "a": [
    0
   ],
   "w": "range stops before its second argument, so to include 20 you stop at 21. range(1, 20) ends at 19; the other two start at 0.",
   "bk": "Python Crash Course ch4",
   "lv": "apply"
  },
  {
   "id": "foc-q0186",
   "topic": "Lists & tuples",
   "q": "What does [n * 2 for n in range(1, 4)] evaluate to?",
   "c": [
    "[2, 4, 6, 8]",
    "[1, 2, 3]",
    "[2, 4, 6]",
    "[1, 4, 9]"
   ],
   "a": [
    2
   ],
   "w": "range(1, 4) feeds 1, 2, 3 into n * 2. The four-item answer wrongly includes 4; [1, 4, 9] would be n ** 2.",
   "bk": "Python Crash Course ch4",
   "lv": "apply"
  },
  {
   "id": "foc-q0187",
   "topic": "Lists & tuples",
   "q": "Which loop builds the same list as cubes = [x ** 3 for x in range(1, 6)]?",
   "c": [
    "cubes = []\nfor x in range(1, 6):\n    cubes = x ** 3",
    "cubes = []\nfor x in range(1, 5):\n    cubes.append(x ** 3)",
    "cubes = []\nfor x in range(1, 6):\ncubes.append(x ** 3)",
    "cubes = []\nfor x in range(1, 6):\n    cubes.append(x ** 3)"
   ],
   "a": [
    3
   ],
   "w": "The comprehension means: start empty, loop over 1–5, append each cube. The loop with cubes = x ** 3 overwrites cubes with a number each pass. The range(1, 5) loop stops at 4. The one with an unindented append is an IndentationError.",
   "bk": "Python Crash Course ch4",
   "lv": "analyse"
  },
  {
   "id": "foc-q0188",
   "topic": "Lists & tuples",
   "q": "scores = [72, 95, 88, 60]. What does print(max(scores) - min(scores)) output?",
   "c": [
    "35",
    "23",
    "315",
    "12"
   ],
   "a": [
    0
   ],
   "w": "max is 95 and min is 60, so the range is 35. 315 is sum(scores), and 23 is the first item minus the last.",
   "bk": "Python Crash Course ch4",
   "lv": "apply"
  },
  {
   "id": "foc-q0189",
   "topic": "Lists & tuples",
   "q": "p = ['kiran', 'dev', 'isha', 'om', 'ria']. What is p[1:4]?",
   "c": [
    "['kiran', 'dev', 'isha', 'om']",
    "['dev', 'isha', 'om', 'ria']",
    "['dev', 'isha', 'om']",
    "['dev', 'isha']"
   ],
   "a": [
    2
   ],
   "w": "Start at index 1 ('dev') and stop before index 4, giving indices 1, 2, 3. Including 'ria' would mean the end index is included, which it never is.",
   "bk": "Python Crash Course ch4",
   "lv": "apply"
  },
  {
   "id": "foc-q0190",
   "topic": "Lists & tuples",
   "q": "p = ['kiran', 'dev', 'isha', 'om', 'ria']. Which slice gives ['isha', 'om', 'ria']?",
   "c": [
    "p[3:]",
    "p[2:]",
    "p[:3]",
    "p[2:4]"
   ],
   "a": [
    1
   ],
   "w": "Leaving out the end runs to the end of the list, so p[2:] starts at 'isha'. p[:3] is the first three; p[2:4] stops before 'ria'. p[-3:] would also work.",
   "bk": "Python Crash Course ch4",
   "lv": "apply"
  },
  {
   "id": "foc-q0191",
   "topic": "Lists & tuples",
   "q": "What does this print?\n\nlst = [1, 2, 3, 4]\npart = lst[1:3]\npart.append(99)\nprint(lst)",
   "c": [
    "[1, 2, 3, 4]",
    "[1, 2, 3, 99, 4]",
    "[2, 3, 99]",
    "[1, 2, 3, 4, 99]"
   ],
   "a": [
    0
   ],
   "w": "A slice is a new list holding copies of those items, so changing part leaves lst alone. Slicing never modifies the original.",
   "bk": "Python Crash Course ch4",
   "lv": "analyse"
  },
  {
   "id": "foc-q0192",
   "topic": "Lists & tuples",
   "q": "What does this print?\n\ns = [55, 91, 78, 99, 64]\ns.sort(reverse=True)\nprint(s[:3])",
   "c": [
    "[55, 91, 78]",
    "[55, 64, 78]",
    "[99, 91, 78]",
    "[78, 91, 99]"
   ],
   "a": [
    2
   ],
   "w": "After sorting high to low, the first three items are the top three scores, the use the book suggests for slices. [55, 91, 78] ignores the sort; [55, 64, 78] is an ascending sort.",
   "bk": "Python Crash Course ch4",
   "lv": "apply"
  },
  {
   "id": "foc-q0193",
   "topic": "Lists & tuples",
   "q": "After these lines, what are b and c?\n\na = [1, 2]\nb = a\nc = a[:]\na.append(3)",
   "c": [
    "b = [1, 2], c = [1, 2]",
    "b = [1, 2, 3], c = [1, 2, 3]",
    "b = [1, 2], c = [1, 2, 3]",
    "b = [1, 2, 3], c = [1, 2]"
   ],
   "a": [
    3
   ],
   "w": "b is just another name for the same list as a, so it sees the append. c was made with [:], so it is a separate copy and keeps [1, 2]. The two lines look alike, but only [:] copies.",
   "bk": "Python Crash Course ch4",
   "lv": "analyse"
  },
  {
   "id": "foc-q0194",
   "topic": "Lists & tuples",
   "q": "What does this print?\n\ndims = (200, 50)\ndims = (400, 100)\nprint(dims[0])",
   "c": [
    "200",
    "400",
    "TypeError: tuples cannot be changed",
    "(400, 100)"
   ],
   "a": [
    1
   ],
   "w": "The tuple itself isn't modified; the variable is pointed at a brand-new tuple, which is allowed. Only item assignment like dims[0] = 400 raises TypeError.",
   "bk": "Python Crash Course ch4",
   "lv": "apply"
  },
  {
   "id": "foc-q0195",
   "topic": "Lists & tuples",
   "q": "What does this print?\n\nplayers = ['kiran', 'dev', 'isha']\nfor p in players[:2]:\n    print(p.title())",
   "c": [
    "Kiran, Dev, Isha",
    "Kiran and Dev",
    "Dev and Isha",
    "['Kiran', 'Dev']"
   ],
   "a": [
    1
   ],
   "w": "The loop runs over the slice players[:2] (indices 0 and 1), printing each name on its own line in title case. It prints strings one at a time, not a list.",
   "bk": "Python Crash Course ch4",
   "lv": "apply"
  },
  {
   "id": "foc-q0196",
   "topic": "Lists & tuples",
   "q": "According to PEP 8, how should each indentation level be written?",
   "c": [
    "One tab character",
    "Four spaces",
    "Two spaces",
    "Any amount, as long as it is consistent within the file"
   ],
   "a": [
    1
   ],
   "w": "PEP 8 says four spaces, and set the Tab key to insert spaces. Python itself only needs consistency, which is why 'any amount, as long as it is consistent' is tempting, but the question asks what PEP 8 recommends.",
   "bk": "Python Crash Course ch4",
   "lv": "recall"
  },
  {
   "id": "foc-q0197",
   "topic": "Lists & tuples",
   "q": "Which statement about blank lines in a Python program is correct?",
   "c": [
    "A blank line ends a for loop's body",
    "Python ignores blank lines; they only help readability, and PEP 8 says use them sparingly",
    "Two blank lines inside a loop raise IndentationError",
    "Blank lines are required between every statement"
   ],
   "a": [
    1
   ],
   "w": "Python uses horizontal indentation for structure and ignores vertical spacing. The loop body ends at the first unindented line, not at a blank line.",
   "bk": "Python Crash Course ch4",
   "lv": "recall"
  },
  {
   "id": "foc-q0198",
   "topic": "Lists & tuples",
   "q": "Why does PEP 8 suggest keeping lines under 80 characters, even on wide modern screens?",
   "c": [
    "Python truncates longer lines",
    "Long lines run slower",
    "So several files can be read side by side, and because code is read far more often than written",
    "Lines over 79 characters raise a SyntaxError"
   ],
   "a": [
    2
   ],
   "w": "The limit is about readability: viewing two or three files side by side, and shared team conventions. Python runs longer lines without complaint, so the 'error' and 'slower' options are false.",
   "bk": "Python Crash Course ch4",
   "lv": "recall"
  },
  {
   "id": "foc-q0199",
   "topic": "if statements",
   "q": "What does this print?\n\ncar = 'Audi'\nprint(car == 'audi')\nprint(car.lower() == 'audi')\nprint(car)",
   "c": [
    "True, True, audi",
    "False, True, audi",
    "False, False, Audi",
    "False, True, Audi"
   ],
   "a": [
    3
   ],
   "w": "== is case-sensitive, so the first test is False. lower() makes a lowercase copy for the second test, which is True. The variable still holds 'Audi', because lower() doesn't modify it.",
   "bk": "Python Crash Course ch5",
   "lv": "apply"
  },
  {
   "id": "foc-q0200",
   "topic": "if statements",
   "q": "What happens when this runs?\n\nx = 5\nif x = 5:\n    print(\"five\")",
   "c": [
    "It prints five",
    "SyntaxError: a single = cannot be used as a condition",
    "It prints nothing",
    "NameError"
   ],
   "a": [
    1
   ],
   "w": "= is assignment, which isn't allowed as an if condition; the test needs ==. Python stops before running anything, so nothing is printed.",
   "bk": "Python Crash Course ch5",
   "lv": "recall"
  },
  {
   "id": "foc-q0201",
   "topic": "if statements",
   "q": "What does this print?\n\nage = 70\nif age < 18:\n    price = 50\nelif age < 65:\n    price = 100\nelse:\n    price = 60\nprint(price)",
   "c": [
    "60",
    "50",
    "100",
    "50, 100, 60"
   ],
   "a": [
    0
   ],
   "w": "70 fails age < 18 and fails age < 65, so the else runs: 60. A chain runs exactly one block, so the multi-value answer is impossible.",
   "bk": "Python Crash Course ch5",
   "lv": "apply"
  },
  {
   "id": "foc-q0202",
   "topic": "if statements",
   "q": "This chain is meant to charge children (under 18) ₹50. What does it print for age = 10, and why?\n\nif age < 65:\n    price = 100\nelif age < 18:\n    price = 50\nelse:\n    price = 60\nprint(price)",
   "c": [
    "50, because 10 < 18",
    "60, because the else always runs last",
    "100, because the first passing test wins and 10 < 65 is checked first",
    "An error, because two tests are both True"
   ],
   "a": [
    2
   ],
   "w": "Only the first True test runs. 10 < 65 is True, so price = 100 and the elif is never checked. The tests are in the wrong order: the narrower condition (< 18) must come first.",
   "bk": "Python Crash Course ch5",
   "lv": "analyse"
  },
  {
   "id": "foc-q0203",
   "topic": "if statements",
   "q": "What does this print?\n\norder = ['paneer', 'onion']\nif 'paneer' in order:\n    print(\"Adding paneer.\")\nelif 'corn' in order:\n    print(\"Adding corn.\")\nelif 'onion' in order:\n    print(\"Adding onion.\")",
   "c": [
    "Adding paneer. then Adding onion.",
    "Adding onion.",
    "Nothing",
    "Adding paneer."
   ],
   "a": [
    3
   ],
   "w": "The first test passes, so the rest of the chain is skipped and onion is never checked. To add every requested topping, use separate if statements.",
   "bk": "Python Crash Course ch5",
   "lv": "analyse"
  },
  {
   "id": "foc-q0204",
   "topic": "if statements",
   "q": "A customer can request any number of toppings, and each requested topping must be announced. Which structure does the book recommend?",
   "c": [
    "One if-elif-else chain",
    "A series of independent if statements",
    "A single if with else",
    "An elif chain with no else"
   ],
   "a": [
    1
   ],
   "w": "Independent ifs are each checked, so every true condition gets its action. Any elif chain stops after the first match, which drops the other toppings.",
   "bk": "Python Crash Course ch5",
   "lv": "recall"
  },
  {
   "id": "foc-q0205",
   "topic": "if statements",
   "q": "a0 = 22 and a1 = 18. What do a0 >= 21 and a1 >= 21, and a0 >= 21 or a1 >= 21, evaluate to?",
   "c": [
    "True, True",
    "False, False",
    "False, True",
    "True, False"
   ],
   "a": [
    2
   ],
   "w": "and needs both sides True; a1 fails, so it's False. or needs just one; a0 passes, so it's True.",
   "bk": "Python Crash Course ch5",
   "lv": "apply"
  },
  {
   "id": "foc-q0206",
   "topic": "if statements",
   "q": "What does this print?\n\nitems = []\nif items:\n    print(\"Have items\")\nelse:\n    print(\"Empty\")",
   "c": [
    "Empty",
    "Have items",
    "An error, because a list can't be a condition",
    "Nothing"
   ],
   "a": [
    0
   ],
   "w": "A list used as a condition is True only if it contains at least one item; an empty list is False, so the else runs. Using a list this way is valid, and the book recommends it before looping over user-supplied lists.",
   "bk": "Python Crash Course ch5",
   "lv": "apply"
  },
  {
   "id": "foc-q0207",
   "topic": "if statements",
   "q": "banned = ['x', 'y'] and user = 'Y'. What are user not in banned and user.lower() not in banned?",
   "c": [
    "True, True",
    "False, False",
    "False, True",
    "True, False"
   ],
   "a": [
    3
   ],
   "w": "'Y' (capital) isn't in the list, so the first test is True and the banned user slips through. After lower() it becomes 'y', which is in the list, so the second is False. The mismatched case is the bug that lower() fixes.",
   "bk": "Python Crash Course ch5",
   "lv": "analyse"
  },
  {
   "id": "foc-q0208",
   "topic": "if statements",
   "q": "What does this print?\n\nmarks = [35, 82, 49, 90]\nfor m in marks:\n    if m >= 50:\n        print(\"pass\")\n    else:\n        print(\"fail\")",
   "c": [
    "fail, pass, fail, pass",
    "pass, pass, pass, pass",
    "fail, pass, pass, pass",
    "pass, fail, pass, fail"
   ],
   "a": [
    0
   ],
   "w": "Each mark is tested separately: 35 fail, 82 pass, 49 fail (49 is not ≥ 50), 90 pass. The answer fail, pass, pass, pass treats 49 as a pass.",
   "bk": "Python Crash Course ch5",
   "lv": "apply"
  },
  {
   "id": "foc-q0209",
   "topic": "if statements",
   "q": "What does this print?\n\nx = 7\nif x > 5:\n    print(\"big\")\nif x > 3:\n    print(\"medium\")\nelse:\n    print(\"small\")",
   "c": [
    "big only",
    "big then medium",
    "medium only",
    "big, medium, small"
   ],
   "a": [
    1
   ],
   "w": "These are two separate if statements, not one chain, so both are checked. 7 > 5 prints big; 7 > 3 prints medium; that else belongs only to the second if, so it's skipped.",
   "bk": "Python Crash Course ch5",
   "lv": "analyse"
  },
  {
   "id": "foc-q0210",
   "topic": "if statements",
   "q": "What does this print?\n\ntemp = 30\nif temp > 35:\n    print(\"hot\")\nelif temp > 25:\n    print(\"warm\")\nelif temp > 15:\n    print(\"mild\")\nprint(\"end\")",
   "c": [
    "warm, mild, end",
    "hot, end",
    "warm, end",
    "end"
   ],
   "a": [
    2
   ],
   "w": "30 > 35 fails, 30 > 25 passes, so warm prints and the rest of the chain (including > 15, also true) is skipped. print(\"end\") isn't part of the chain, so it always runs.",
   "bk": "Python Crash Course ch5",
   "lv": "apply"
  },
  {
   "id": "foc-q0211",
   "topic": "if statements",
   "q": "Which header line is written correctly?",
   "c": [
    "if score >= 40",
    "if score >= 40:",
    "if (score => 40):",
    "if score >= 40 then:"
   ],
   "a": [
    1
   ],
   "w": "An if line needs a comparison operator and a colon at the end. The version without a colon is a SyntaxError. => is not an operator; it's >=. Python has no then keyword.",
   "bk": "Python Crash Course ch5",
   "lv": "recall"
  },
  {
   "id": "foc-q0212",
   "topic": "if statements",
   "q": "What is the type of the value stored by game_active = True?",
   "c": [
    "str",
    "int",
    "bool (a Boolean value)",
    "NoneType"
   ],
   "a": [
    2
   ],
   "w": "True and False are Boolean values (type bool). Without quotes, True is not a string. Writing \"True\" in quotes would make it one.",
   "bk": "Python Crash Course ch5",
   "lv": "recall"
  },
  {
   "id": "foc-q0213",
   "topic": "if statements",
   "q": "What does this print?\n\navail = ['tea', 'coffee']\nreq = ['tea', 'soda']\nfor r in req:\n    if r in avail:\n        print(\"Serving \" + r)\n    else:\n        print(\"No \" + r)",
   "c": [
    "Serving tea, Serving coffee",
    "Serving tea, No soda",
    "Serving tea",
    "No tea, Serving soda"
   ],
   "a": [
    1
   ],
   "w": "The loop runs over the REQUESTED items and checks each one against the available list: tea is available, soda is not. coffee is never mentioned because nobody asked for it.",
   "bk": "Python Crash Course ch5",
   "lv": "apply"
  },
  {
   "id": "foc-q0214",
   "topic": "if statements",
   "q": "What does this print?\n\ns = 0\nfor v in [3, 10, 6, 12]:\n    if v > 5:\n        s = s + v\nprint(s)",
   "c": [
    "31",
    "28",
    "22",
    "12"
   ],
   "a": [
    1
   ],
   "w": "Only values over 5 are added: 10 + 6 + 12 = 28. 31 adds everything, including 3; 22 forgets 6.",
   "bk": "Python Crash Course ch5",
   "lv": "apply"
  },
  {
   "id": "foc-q0215",
   "topic": "if statements",
   "q": "Why does the book suggest a final elif age >= 65: in place of a plain else: in a pricing chain?",
   "c": [
    "else is not allowed after elif",
    "elif runs faster than else",
    "Python requires every chain to end in elif",
    "else catches anything not yet matched, including invalid data; an explicit elif runs only under the intended condition"
   ],
   "a": [
    3
   ],
   "w": "The point is safety and clarity: a catch-all can accept unexpected values. else IS allowed after elif and is optional, and speed has nothing to do with it.",
   "bk": "Python Crash Course ch5",
   "lv": "analyse"
  },
  {
   "id": "foc-q0216",
   "topic": "if statements",
   "q": "age = 19. Which of these tests is False?",
   "c": [
    "age < 21",
    "age <= 19",
    "age != 18",
    "age >= 21"
   ],
   "a": [
    3
   ],
   "w": "19 is not greater than or equal to 21. The others are True: 19 < 21, 19 <= 19 (equal counts), and 19 is not 18.",
   "bk": "Python Crash Course ch5",
   "lv": "recall"
  },
  {
   "id": "foc-q0217",
   "topic": "if statements",
   "q": "In an if-else statement (no elif), how many of the two blocks run?",
   "c": [
    "Exactly one, always",
    "Zero or one",
    "Both, if the test is True",
    "It depends on how many lines each block has"
   ],
   "a": [
    0
   ],
   "w": "if-else always runs exactly one of its two blocks. 'Zero or one' describes a simple if with no else, which can skip its block and print nothing.",
   "bk": "Python Crash Course ch5",
   "lv": "recall"
  },
  {
   "id": "foc-q0218",
   "topic": "if statements",
   "q": "users = ['admin', 'ravi']. What does this print?\n\nfor u in users:\n    if u == 'admin':\n        print(\"Status report ready\")\n    else:\n        print(\"Welcome back, \" + u.title())",
   "c": [
    "Welcome back, Admin then Welcome back, Ravi",
    "Status report ready then Welcome back, Ravi",
    "Status report ready only",
    "Status report ready then Welcome back, ravi"
   ],
   "a": [
    1
   ],
   "w": "The if inside the loop treats the special item 'admin' differently; every other user gets the else greeting with title() applied, so Ravi is capitalised.",
   "bk": "Python Crash Course ch5",
   "lv": "apply"
  },
  {
   "id": "foc-q0219",
   "topic": "if statements",
   "q": "Which spacing does PEP 8 recommend for comparisons?",
   "c": [
    "if age<4:",
    "if age <4:",
    "if age < 4:",
    "if  age  <  4  :"
   ],
   "a": [
    2
   ],
   "w": "One space on each side of a comparison operator. Python runs all four the same way; the spacing is only for readability.",
   "bk": "Python Crash Course ch5",
   "lv": "recall"
  },
  {
   "id": "foc-q0220",
   "topic": "if statements",
   "q": "In Python, a conditional test always evaluates to which of these?",
   "c": [
    "A number, 0 or 1",
    "The text of the indented block",
    "True or False",
    "None unless an else is present"
   ],
   "a": [
    2
   ],
   "w": "Every conditional test (Boolean expression) evaluates to True or False; Python uses that value to decide whether to run the if block. None is a different value, and the result does not depend on whether there is an else.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "foc-q0221",
   "topic": "if statements",
   "q": "What does this print?\n\ncars = ['honda', 'bmw', 'kia']\nfor car in cars:\n    if car == 'bmw':\n        print(car.upper())\n    else:\n        print(car.title())",
   "c": [
    "Honda / BMW / Kia",
    "HONDA / bmw / KIA",
    "Honda / Bmw / Kia",
    "BMW"
   ],
   "a": [
    0
   ],
   "w": "The if picks out 'bmw' and prints it with upper(); every other car goes to the else and gets title(). title() on 'bmw' would give Bmw, but bmw never reaches the else.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "foc-q0222",
   "topic": "if statements",
   "q": "What does this print?\n\nuser = 'Riya'\nprint(user.lower() == 'riya')\nprint(user)",
   "c": [
    "True / riya",
    "False / Riya",
    "False / riya",
    "True / Riya"
   ],
   "a": [
    3
   ],
   "w": "user.lower() makes the lowercase copy 'riya', so the comparison is True. lower() does not change user, so the second line still prints Riya.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "foc-q0223",
   "topic": "if statements",
   "q": "Which of these asks whether score is 50, rather than setting it?",
   "c": [
    "score = 50",
    "score == 50",
    "score =! 50",
    "50 = score"
   ],
   "a": [
    1
   ],
   "w": "Two equals signs compare and give True or False. One equals sign assigns a value; 50 = score is a SyntaxError and =! is not a Python operator.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "foc-q0224",
   "topic": "if statements",
   "q": "What does this print?\n\nanswer = 42\nif answer != 42:\n    print(\"Try again\")",
   "c": [
    "Try again",
    "Nothing",
    "False",
    "An error, because there is no else"
   ],
   "a": [
    1
   ],
   "w": "answer != 42 is False because answer is 42, so the block is skipped. With no else there is nothing else to run; a skipped if is not an error.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "foc-q0225",
   "topic": "if statements",
   "q": "age = 21. Which of these tests is False?",
   "c": [
    "age >= 21",
    "age <= 21",
    "age == 21",
    "age > 21"
   ],
   "a": [
    3
   ],
   "w": "21 is not greater than 21, so age > 21 is False. The tests with an = sign include the boundary, so >= 21 and <= 21 are both True, as is == 21.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "foc-q0226",
   "topic": "if statements",
   "q": "Which pair of values makes (x > 10) or (y > 10) evaluate to False?",
   "c": [
    "x = 3, y = 9",
    "x = 5, y = 20",
    "x = 11, y = 2",
    "x = 12, y = 12"
   ],
   "a": [
    0
   ],
   "w": "or is False only when both tests fail; with 3 and 9 neither is above 10. Each other pair has at least one value above 10, which is enough for or.",
   "lec": 17,
   "lv": "analyse"
  },
  {
   "id": "foc-q0227",
   "topic": "if statements",
   "q": "What does this print?\n\nbanned = ['andrew', 'carolina']\nuser = 'meera'\nif user not in banned:\n    print(user.title() + \", you can post.\")",
   "c": [
    "meera, you can post.",
    "Nothing",
    "Meera, you can post.",
    "Andrew, you can post."
   ],
   "a": [
    2
   ],
   "w": "'meera' is not in banned, so user not in banned is True and the block runs. title() capitalises the name in the message.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "foc-q0228",
   "topic": "if statements",
   "q": "In the lecture, what is a Boolean expression?",
   "c": [
    "A variable whose name starts with bool",
    "Any line that contains print",
    "A list that holds only True values",
    "Another name for a conditional test"
   ],
   "a": [
    3
   ],
   "w": "He defined a Boolean expression as just another name for a conditional test: something that evaluates to True or False.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "foc-q0229",
   "topic": "if statements",
   "q": "What does this print?\n\ngame_active = True\ncan_edit = False\nif game_active:\n    print(\"Running\")\nif can_edit:\n    print(\"Editing\")",
   "c": [
    "Running / Editing",
    "Editing",
    "Running",
    "Nothing"
   ],
   "a": [
    2
   ],
   "w": "if game_active: reads as if True, so Running prints. if can_edit: reads as if False, so that block is skipped and there is no else.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "foc-q0230",
   "topic": "if statements",
   "q": "What happens when this line runs?\n\ngame_over = true",
   "c": [
    "game_over now holds True",
    "NameError: true is not defined",
    "game_over now holds the string 'true'",
    "Nothing; Python ignores the line"
   ],
   "a": [
    1
   ],
   "w": "True and False are capitalised keywords. Lowercase true is treated as a variable name that was never defined, so Python raises a NameError.",
   "lec": 17,
   "lv": "analyse"
  },
  {
   "id": "foc-q0231",
   "topic": "if statements",
   "q": "What does print('mush' in ['mushrooms', 'onions']) print?",
   "c": [
    "False",
    "True",
    "mushrooms",
    "An error"
   ],
   "a": [
    0
   ],
   "w": "in on a list compares the value with each whole item. 'mush' is not equal to 'mushrooms' or 'onions', so the result is False, even though it is part of a word.",
   "lec": 17,
   "lv": "analyse"
  },
  {
   "id": "foc-q0232",
   "topic": "if statements",
   "q": "What does this print?\n\ntoppings = ['Onions', 'corn']\nprint('onions' in toppings)",
   "c": [
    "False",
    "True",
    "Onions",
    "onions"
   ],
   "a": [
    0
   ],
   "w": "Membership tests are case-sensitive like ==. The list holds 'Onions' with a capital O, so 'onions' is not found.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "foc-q0233",
   "topic": "if statements",
   "q": "Existing usernames are stored in lowercase in usernames. A new user types new. Which test refuses JOHN when john is already taken?",
   "c": [
    "new in usernames",
    "new.lower() in usernames",
    "new.upper() in usernames",
    "new == usernames"
   ],
   "a": [
    1
   ],
   "w": "Lowercasing the new name before checking makes the test ignore case, which is how he said websites stop variations of the same name. new in usernames is case-sensitive, so JOHN would get through.",
   "lec": 17,
   "lv": "analyse"
  },
  {
   "id": "foc-q0234",
   "topic": "if statements",
   "q": "What did the lecturer say about brackets around each test, as in (age_0 >= 21) and (age_1 >= 21)?",
   "c": [
    "Required, or Python raises a SyntaxError",
    "They change the result of and",
    "Optional, but they make each condition easier to read",
    "Allowed with or but not with and"
   ],
   "a": [
    2
   ],
   "w": "The brackets don't change the result; Python evaluates the same tests either way. He recommended them as a readability habit.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "foc-q0235",
   "topic": "if statements",
   "q": "What does this print?\n\nx = 7\nprint(x != 7, x != 8)",
   "c": [
    "True False",
    "False False",
    "True True",
    "False True"
   ],
   "a": [
    3
   ],
   "w": "x is 7, so x != 7 is False (they are equal) and x != 8 is True (they differ). print separates the two values with a space.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "foc-q0236",
   "topic": "if statements",
   "q": "Which operator means less than or equal to in Python?",
   "c": [
    "=<",
    "≤",
    "<=",
    "<<"
   ],
   "a": [
    2
   ],
   "w": "Python writes it <=, with the less-than sign first. =< is a SyntaxError, the single ≤ symbol is not a Python operator, and << is a different (bit-shift) operator.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "foc-q0237",
   "topic": "if statements",
   "q": "What does this print?\n\nage = 17\nif age >= 18:\n    print(\"Can vote\")\n    print(\"Registered?\")",
   "c": [
    "Can vote",
    "Registered?",
    "Nothing",
    "Can vote / Registered?"
   ],
   "a": [
    2
   ],
   "w": "17 >= 18 is False, so both indented lines are skipped together, and there is no else to fall back on.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "foc-q0238",
   "topic": "if statements",
   "q": "What does this print?\n\nage = 16\nif age >= 18:\n    print(\"Old enough\")\nelse:\n    print(\"Too young\")\n    print(\"Register at 18\")",
   "c": [
    "Too young / Register at 18",
    "Too young",
    "Old enough",
    "Old enough / Too young / Register at 18"
   ],
   "a": [
    0
   ],
   "w": "16 >= 18 is False, so the whole else block runs, and both of its indented lines print. Only one of the two blocks ever runs.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "foc-q0239",
   "topic": "if statements",
   "q": "What does this print?\n\nage = 4\nif age < 4:\n    price = 0\nelif age < 18:\n    price = 5\nelif age < 65:\n    price = 10\nelse:\n    price = 3\nprint(\"Your admission cost is $\" + str(price) + \".\")",
   "c": [
    "Your admission cost is $0.",
    "Your admission cost is $10.",
    "Your admission cost is $3.",
    "Your admission cost is $5."
   ],
   "a": [
    3
   ],
   "w": "4 < 4 is False, so the free band is missed; 4 < 18 is True, so price is 5 and the chain stops. Boundary ages are where off-by-one mistakes happen.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "foc-q0240",
   "topic": "if statements",
   "q": "What does this print?\n\nage = 65\nif age < 4:\n    price = 0\nelif age < 18:\n    price = 5\nelif age < 65:\n    price = 10\nelse:\n    price = 3\nprint(\"Your admission cost is $\" + str(price) + \".\")",
   "c": [
    "Your admission cost is $10.",
    "Your admission cost is $3.",
    "Your admission cost is $5.",
    "Nothing, because no test is True"
   ],
   "a": [
    1
   ],
   "w": "65 fails age < 4, age < 18 and age < 65 (65 is not less than 65), so the else runs and sets price to 3.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "foc-q0241",
   "topic": "if statements",
   "q": "An if-elif-else chain that ends with an else. How many of its blocks run each time?",
   "c": [
    "At least two",
    "Exactly one",
    "Every block whose test is True",
    "None, if the if test fails"
   ],
   "a": [
    1
   ],
   "w": "Python runs the first block whose test passes and skips the rest; if none passes, the else runs. Either way exactly one block runs.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "foc-q0242",
   "topic": "if statements",
   "q": "An if-elif chain has no else. What is the smallest number of its blocks that can run?",
   "c": [
    "1",
    "2",
    "It depends on how many elifs there are",
    "0"
   ],
   "a": [
    3
   ],
   "w": "Without an else there is no catch-all. If every test fails, no block runs, which is how his None example prints nothing for an invalid age.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "foc-q0243",
   "topic": "if statements",
   "q": "Why did he change the price chain to set price in each branch and print once after the chain?",
   "c": [
    "The message is then written once, so changing it means editing one line",
    "Python runs a chain faster when it contains no print",
    "print is not allowed inside an elif block",
    "Without it Python raises an IndentationError"
   ],
   "a": [
    0
   ],
   "w": "It is a design choice: one print instead of three means one place to change the wording. Prints inside elif blocks are perfectly legal.",
   "lec": 18,
   "lv": "analyse"
  },
  {
   "id": "foc-q0244",
   "topic": "if statements",
   "q": "What does this print?\n\nage = -5\nprice = None\nif age >= 0 and age < 4:\n    price = 0\nelif age >= 0 and age < 18:\n    price = 5\nelif age >= 0 and age < 65:\n    price = 10\nelif age >= 65:\n    price = 3\nif price is not None:\n    print(\"Your admission cost is $\" + str(price) + \".\")",
   "c": [
    "Your admission cost is $0.",
    "Your admission cost is $None.",
    "Nothing",
    "An error"
   ],
   "a": [
    2
   ],
   "w": "-5 fails every range, so price stays None and the final if price is not None: is False. Nothing is printed instead of a wrong price; that was the point of omitting else.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "foc-q0245",
   "topic": "if statements",
   "q": "What does this print? (Both the second and third tests are True for 12.)\n\nage = 12\nprice = None\nif age >= 0 and age < 4:\n    price = 0\nelif age >= 0 and age < 18:\n    price = 5\nelif age >= 0 and age < 65:\n    price = 10\nelif age >= 65:\n    price = 3\nif price is not None:\n    print(\"Your admission cost is $\" + str(price) + \".\")",
   "c": [
    "Your admission cost is $10.",
    "Your admission cost is $5. / Your admission cost is $10.",
    "Nothing",
    "Your admission cost is $5."
   ],
   "a": [
    3
   ],
   "w": "In a chain only the first passing branch runs, so price is set to 5 and the age < 65 branch is skipped. The lecturer wavered between 10 and 5 here; 5 is correct.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "foc-q0246",
   "topic": "if statements",
   "q": "These are separate if statements, not a chain. What does this print?\n\nage = 12\nif age < 0:\n    print(\"Invalid age\")\nif age < 4:\n    price = 0\nif age < 18:\n    price = 5\nif age < 65:\n    price = 10\nif age >= 65:\n    price = 3\nif age >= 0:\n    print(\"Your admission cost is $\" + str(price) + \".\")",
   "c": [
    "Your admission cost is $5.",
    "Invalid age",
    "Your admission cost is $10.",
    "Your admission cost is $3."
   ],
   "a": [
    2
   ],
   "w": "Separate ifs are all tested: age < 18 sets 5, then age < 65 overwrites it with 10. Python does not stop at the first True when there is no elif.",
   "lec": 18,
   "lv": "analyse"
  },
  {
   "id": "foc-q0247",
   "topic": "if statements",
   "q": "What does this print?\n\nrequested = ['extra cheese', 'mushrooms']\nif 'mushrooms' in requested:\n    print(\"Adding mushrooms.\")\nelif 'pepperoni' in requested:\n    print(\"Adding pepperoni.\")\nelif 'extra cheese' in requested:\n    print(\"Adding extra cheese.\")\nprint(\"Finished!\")",
   "c": [
    "Adding extra cheese. / Finished!",
    "Adding mushrooms. / Finished!",
    "Adding mushrooms. / Adding extra cheese. / Finished!",
    "Adding extra cheese. / Adding mushrooms. / Finished!"
   ],
   "a": [
    1
   ],
   "w": "The chain tests mushrooms first and that passes, so the other tests are skipped. Extra cheese being earlier in the list doesn't matter; the order of the tests does.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "foc-q0248",
   "topic": "if statements",
   "q": "For his favourite-fruits exercise you must print a line for every fruit in your list that matches one of five fruits. Which structure fits?",
   "c": [
    "Five independent if statements",
    "One if followed by four elif blocks",
    "One if-else with the five fruits in the if",
    "An if-elif-else chain ending in else"
   ],
   "a": [
    0
   ],
   "w": "Several fruits can be in the list at once and each needs its own message, so every test must run. A chain would stop at the first match.",
   "lec": 18,
   "lv": "analyse"
  },
  {
   "id": "foc-q0249",
   "topic": "if statements",
   "q": "Using his life-stage bands (baby under 2, toddler under 4, kid under 13, teenager under 20, adult under 65, else elder) as an if-elif-else chain, what prints for age = 13?\n\nage = 13\nif age < 2:\n    print(\"baby\")\nelif age < 4:\n    print(\"toddler\")\nelif age < 13:\n    print(\"kid\")\nelif age < 20:\n    print(\"teenager\")\nelif age < 65:\n    print(\"adult\")\nelse:\n    print(\"elder\")",
   "c": [
    "teenager",
    "kid",
    "kid / teenager",
    "adult"
   ],
   "a": [
    0
   ],
   "w": "13 < 13 is False, so kid is skipped; 13 < 20 is True, so teenager prints and the chain stops. 13 is the first teenage year.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "foc-q0250",
   "topic": "if statements",
   "q": "Which keyword adds a further test to an if chain in Python?",
   "c": [
    "elseif",
    "elif",
    "else if",
    "elsif"
   ],
   "a": [
    1
   ],
   "w": "Python's keyword is elif. Writing else if on one line is a SyntaxError; elseif and elsif come from other languages.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "foc-q0251",
   "topic": "if statements",
   "q": "What does this print?\n\nalien_color = 'red'\nif alien_color == 'green':\n    print(\"You earned 5 points\")\nelif alien_color == 'yellow':\n    print(\"You earned 10 points\")\nelif alien_color == 'red':\n    print(\"You earned 15 points\")",
   "c": [
    "You earned 5 points",
    "You earned 10 points",
    "You earned 15 points",
    "Nothing"
   ],
   "a": [
    2
   ],
   "w": "'red' fails the green and yellow tests and matches the third, so 15 is printed, as in his three-colour alien exercise.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "foc-q0252",
   "topic": "if statements",
   "q": "Why did the lecturer warn about ending a chain with a plain else?",
   "c": [
    "else runs before any of the elif tests",
    "A chain with an else can run two blocks",
    "else is checked only when the first if is True",
    "It catches every case not matched above, which can include invalid or malicious data"
   ],
   "a": [
    3
   ],
   "w": "else is a catch-all, so bad input such as a negative age falls into it. A final elif with an explicit condition runs only when that condition holds.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "foc-q0253",
   "topic": "if statements",
   "q": "What does this print?\n\nage = 12\nif age < 18:\n    price = 5\nelse:\n    price = 10\n    print(\"Cost: $\" + str(price))",
   "c": [
    "Cost: $5",
    "Cost: $10",
    "Nothing",
    "An error, because price is never printed"
   ],
   "a": [
    2
   ],
   "w": "The print is indented under else, so it belongs to the else block. For age 12 the if runs instead, so nothing is printed. It is a logical slip, not an error.",
   "lec": 18,
   "lv": "analyse"
  },
  {
   "id": "foc-q0254",
   "topic": "Python basics",
   "q": "What error message does this produce?\n\nage = 23\nprint(age + \" Happy\")",
   "c": [
    "TypeError: can only concatenate str (not \"int\") to str",
    "NameError: name 'Happy' is not defined",
    "TypeError: unsupported operand type(s) for +: 'int' and 'str'",
    "It prints 23 Happy"
   ],
   "a": [
    2
   ],
   "w": "With the number first, Python treats + as addition and complains about adding an int and a str. The can-only-concatenate message appears when the string comes first.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "foc-q0255",
   "topic": "Python basics",
   "q": "What does this print?\n\nresult = 5.6789 * 3.4567\nprint(\"{:.3f}\".format(result))",
   "c": [
    "19.630",
    "19.63",
    "19.6302536",
    "{:.3f}"
   ],
   "a": [
    0
   ],
   "w": "5.6789 × 3.4567 = 19.63025…, and :.3f always shows exactly three decimals, keeping the trailing zero, so 19.630.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "foc-q0256",
   "topic": "Python basics",
   "q": "What does this print?\n\nx = 0.1\ny = 0.2\nz = 0.3\nprint(x + y == z)",
   "c": [
    "True",
    "0.3",
    "An error",
    "False"
   ],
   "a": [
    3
   ],
   "w": "0.1 + 0.2 is stored as 0.30000000000000004, which is not exactly 0.3, so == gives False. This was the point of his second exercise.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "foc-q0257",
   "topic": "Python basics",
   "q": "With x, y, z = 0.1, 0.2, 0.3, which line prints 0.16667?",
   "c": [
    "print(\"{:.5f}\".format(x**2 + y**2 / z))",
    "print(\"{:.5f}\".format((x**2 + y**2) / z))",
    "print(\"{:.5f}\".format(x**2 + (y**2 / z)))",
    "print(\"{:.5f}\".format(x*2 + y*2 / z))"
   ],
   "a": [
    1
   ],
   "w": "(0.01 + 0.04) / 0.3 = 0.16667. Without brackets, division comes before addition, so only y**2 is divided: 0.01 + 0.1333 = 0.14333.",
   "lec": 19,
   "lv": "analyse"
  },
  {
   "id": "foc-q0258",
   "topic": "Python basics",
   "q": "What does print(2 ** 3 * 2 + 1) print?\n\nprint(2 ** 3 * 2 + 1)",
   "c": [
    "65",
    "17",
    "13",
    "24"
   ],
   "a": [
    1
   ],
   "w": "Powers first: 2 ** 3 = 8; then 8 * 2 = 16; then + 1 = 17. 65 would need the exponent to be 3 * 2.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "foc-q0259",
   "topic": "Python basics",
   "q": "What does this print?\n\nlanguage = \"  python  \"\nstatus = \"is fun\"\nprint((\"error: \" + language.strip() + \" \" + status + \"!\").title())",
   "c": [
    "Error: Python is fun!",
    "Error:   Python   Is Fun!",
    "error: python is fun!",
    "Error: Python Is Fun!"
   ],
   "a": [
    3
   ],
   "w": "strip() removes the spaces around python, and title() applied to the whole joined string capitalises every word, including is.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "foc-q0260",
   "topic": "Lists & tuples",
   "q": "What does this print?\n\nmotorcycles = ['honda', 'yamaha', 'suzuki']\nmotorcycles[0] = 'ducati'\nprint(motorcycles)",
   "c": [
    "['ducati', 'yamaha', 'suzuki']",
    "['ducati', 'honda', 'yamaha', 'suzuki']",
    "['honda', 'ducati', 'yamaha', 'suzuki']",
    "['honda', 'yamaha', 'suzuki', 'ducati']"
   ],
   "a": [
    0
   ],
   "w": "Assigning to index 0 replaces the item there; it does not insert. Honda is overwritten and the list keeps three items.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "foc-q0261",
   "topic": "Lists & tuples",
   "q": "What does this print?\n\nmotorcycles = ['honda', 'yamaha', 'suzuki']\nmotorcycles.insert(1, 'ducati')\nprint(motorcycles)",
   "c": [
    "['ducati', 'honda', 'yamaha', 'suzuki']",
    "['honda', 'ducati', 'suzuki']",
    "['honda', 'ducati', 'yamaha', 'suzuki']",
    "['ducati', 'yamaha', 'suzuki']"
   ],
   "a": [
    2
   ],
   "w": "insert(1, …) puts the new item at index 1, the second place, and shifts the rest right. To put it first you need insert(0, …), the answer he was fishing for in class.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "foc-q0262",
   "topic": "Lists & tuples",
   "q": "After running his seven-step shipment exercise, what is stored in allocated_device?\n\nstarting_inventory = ['router', 'switch', 'firewall', 'server', 'cable']\nstarting_inventory.remove('server')            # 1 faulty server out\nstarting_inventory.insert(0, 'fiber optic')    # 2 new item at the very front\nstarting_inventory[-1] = 'usb hub'             # 3 replace the last item\nallocated_device = starting_inventory.pop(1)   # 4 pop the second item\nstarting_inventory.append('rack mount')        # 5 add to the end\ndel starting_inventory[2]                      # 6 delete index 2\nprint(starting_inventory)                      # 7 verify\nprint(allocated_device)",
   "c": [
    "switch",
    "firewall",
    "fiber optic",
    "router"
   ],
   "a": [
    3
   ],
   "w": "Step 2 inserts fiber optic at index 0, which pushes router to index 1. So pop(1) in step 4 returns router, not the switch that was second in the starting list.",
   "lec": 19,
   "lv": "analyse"
  },
  {
   "id": "foc-q0263",
   "topic": "Lists & tuples",
   "q": "What does this print?\n\nnames = ['rahul', 'rahul', 'amit']\nfor name in names:\n    if name == 'rahul':\n        names.remove(name)\nprint(names)",
   "c": [
    "['amit']",
    "['rahul', 'rahul', 'amit']",
    "['rahul', 'amit']",
    "An error"
   ],
   "a": [
    2
   ],
   "w": "Removing the first 'rahul' shifts the second one into index 0, and the loop moves on to index 1, so the second copy is never checked. Use while 'rahul' in names: names.remove('rahul').",
   "lec": 19,
   "lv": "analyse"
  },
  {
   "id": "foc-q0264",
   "topic": "Python basics",
   "q": "By the lecturer's rule of thumb, why is del not a function, while print and len are?",
   "c": [
    "del cannot take a list",
    "del is not followed by parentheses",
    "del is only used inside loops",
    "del returns the deleted value"
   ],
   "a": [
    1
   ],
   "w": "He said any name followed by parentheses is a function or method; del is a statement written without them. It also returns nothing, unlike pop().",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "foc-q0265",
   "topic": "Python basics",
   "q": "In the lecture, what does Python create when the value after = starts with curly braces, as in alien = {}?",
   "c": [
    "A dictionary",
    "A list",
    "A tuple",
    "A string"
   ],
   "a": [
    0
   ],
   "w": "Square brackets start a list, curly braces a dictionary, parentheses a tuple. Dictionaries were the next chapter after if statements.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "foc-q0266",
   "topic": "if statements",
   "q": "What does this print?\n\nrequested = ['paneer', 'corn', 'olives']\nfor item in requested:\n    if item == 'corn':\n        print(\"Sorry, we are out of corn right now.\")\n    else:\n        print(\"Adding \" + item + \".\")\nprint(\"Finished making your pizza!\")",
   "c": [
    "Adding paneer. / Adding corn. / Adding olives. / Finished making your pizza!",
    "Sorry, we are out of corn right now. / Finished making your pizza!",
    "Adding paneer. / Sorry, we are out of corn right now. / Adding olives. / Finished making your pizza!",
    "Adding paneer. / Sorry, we are out of corn right now. / Finished making your pizza!"
   ],
   "a": [
    2
   ],
   "w": "The if inside the loop catches only corn; every other item gets the else. The loop keeps going after corn, so olives is still added.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "foc-q0267",
   "topic": "if statements",
   "q": "What does this print?\n\nrequested_toppings = []\nif requested_toppings:\n    for t in requested_toppings:\n        print(\"Adding \" + t + \".\")\n    print(\"Finished making your pizza!\")\nelse:\n    print(\"Are you sure you want a plain pizza?\")",
   "c": [
    "Are you sure you want a plain pizza?",
    "Finished making your pizza!",
    "Nothing",
    "An error, because the list is empty"
   ],
   "a": [
    0
   ],
   "w": "An empty list used as the test is False, so the loop is never reached and the else runs. Looping over an empty list would not be an error either; it just does nothing.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "foc-q0268",
   "topic": "if statements",
   "q": "When a list's name is used as the test of an if, when is the test True?",
   "c": [
    "Only when every item in the list is True",
    "Only when the list holds more than one item",
    "Whenever the list variable has been created",
    "When the list holds at least one item"
   ],
   "a": [
    3
   ],
   "w": "He stressed this: a list with one or more items is True and an empty list is False. The values inside don't matter, only whether there are any.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "foc-q0269",
   "topic": "if statements",
   "q": "What does this print?\n\nitems = ['']\nif items:\n    print(\"yes\")\nelse:\n    print(\"no\")",
   "c": [
    "no",
    "yes",
    "Nothing",
    "An error"
   ],
   "a": [
    1
   ],
   "w": "[''] is a list with one item, the empty string, so it is not empty and the test is True. Only [] counts as False.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "foc-q0270",
   "topic": "if statements",
   "q": "What does this print?\n\ntoppings = ['cheese', 'onions']\nfor t in toppings:\n    print(\"Adding \" + t + \".\")\n    print(\"Finished making your pizza!\")",
   "c": [
    "Adding cheese. / Adding onions. / Finished making your pizza!",
    "Adding cheese. / Finished making your pizza! / Adding onions. / Finished making your pizza!",
    "Adding cheese. / Finished making your pizza!",
    "An IndentationError"
   ],
   "a": [
    1
   ],
   "w": "The second print is indented under for, so it runs on every pass: the slip from his demo. Moving it one level out makes it print once. Python raises no error for this.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "foc-q0271",
   "topic": "if statements",
   "q": "What does this print?\n\navailable_toppings = ['mushrooms', 'olives', 'green peppers',\n                      'pepperoni', 'pineapple', 'extra cheese']\nrequested_toppings = ['mushrooms', 'french fries', 'extra cheese']\n\nfor requested_topping in requested_toppings:\n    if requested_topping in available_toppings:\n        print(\"Adding \" + requested_topping + \".\")\n    else:\n        print(\"Sorry, we don't have \" + requested_topping + \".\")\nprint(\"Finished making your pizza!\")",
   "c": [
    "Adding mushrooms. / Adding french fries. / Adding extra cheese. / Finished making your pizza!",
    "Sorry, we don't have french fries. / Finished making your pizza!",
    "Adding mushrooms. / Sorry, we don't have french fries. / Finished making your pizza!",
    "Adding mushrooms. / Sorry, we don't have french fries. / Adding extra cheese. / Finished making your pizza!"
   ],
   "a": [
    3
   ],
   "w": "Each request is checked with in against the available list; only french fries is missing, and the loop carries on to extra cheese.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "foc-q0272",
   "topic": "if statements",
   "q": "You want to print 'Are you sure you want a plain pizza?' when requested_toppings is empty, and otherwise add each topping. Which structure does that?",
   "c": [
    "An if on the list's name, with the for loop inside it and an else",
    "A for loop with an if on the list's name inside it",
    "Two separate for loops",
    "A for loop followed by an else"
   ],
   "a": [
    0
   ],
   "w": "The emptiness check is about the whole list, so it must come first and wrap the loop. An if inside the loop would never run for an empty list, because the loop body runs zero times.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "foc-q0273",
   "topic": "if statements",
   "q": "What does this print?\n\ncurrent = ['john', 'asha']\nnew = 'John'\nprint(new in current, new.lower() in current)",
   "c": [
    "True True",
    "False False",
    "False True",
    "True False"
   ],
   "a": [
    2
   ],
   "w": "'John' in current is False because the stored name is lowercase and in is case-sensitive. Lowercasing first gives 'john', which is found.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "foc-q0274",
   "topic": "if statements",
   "q": "current_users = ['Ravi', 'John']. A new user types JOHN, and it must be refused. Which test does that?",
   "c": [
    "new in current_users",
    "new.lower() in current_users",
    "new.title() in new_users",
    "new.lower() in [u.lower() for u in current_users]"
   ],
   "a": [
    3
   ],
   "w": "Both sides must be lowercased: current_users stores John with a capital J, so new.lower() in current_users compares 'john' with 'John' and fails. This is the case-insensitive check the exercise needs.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "foc-q0275",
   "topic": "if statements",
   "q": "What does this print?\n\nfor number in [1, 3, 4]:\n    if number == 1:\n        print(\"1st\")\n    elif number == 2:\n        print(\"2nd\")\n    elif number == 3:\n        print(\"3rd\")\n    else:\n        print(str(number) + \"th\")",
   "c": [
    "1th / 3th / 4th",
    "1st / 3st / 4st",
    "1st / 3rd / 4th",
    "1st / 3rd / 4rd"
   ],
   "a": [
    2
   ],
   "w": "1 and 3 match their own branches; 4 matches none and falls to the else, which adds th. This is his ordinal-numbers exercise.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "foc-q0276",
   "topic": "if statements",
   "q": "What does this print?\n\nusers = ['admin']\nusers.remove('admin')\nif users:\n    for user in users:\n        print(\"Hello \" + user)\nelse:\n    print(\"We need to find some users!\")",
   "c": [
    "Hello admin",
    "We need to find some users!",
    "Hello admin / We need to find some users!",
    "An error, because users is empty"
   ],
   "a": [
    1
   ],
   "w": "After remove('admin') the list is empty, so if users: is False and the else runs. This is his second exercise: empty the list and check the right message appears.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "foc-q0277",
   "topic": "if statements",
   "q": "In this code, what job does in do on each line?\n\nfor t in requested:\n    if t in available:",
   "c": [
    "for line: hand over each item in turn; if line: test whether t is in available",
    "Both lines test membership and give True or False",
    "Both lines loop through their lists",
    "for line: test membership; if line: loop through available"
   ],
   "a": [
    0
   ],
   "w": "The same keyword does two jobs. After for, in supplies the items one by one; inside an if it is a membership test that returns True or False.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "foc-q0278",
   "topic": "if statements",
   "q": "What does this print?\n\navailable = ['tea', 'coffee']\norders = ['tea', 'juice', 'soda', 'coffee']\nrejected = 0\nfor o in orders:\n    if o not in available:\n        rejected = rejected + 1\nprint(rejected)",
   "c": [
    "2",
    "1",
    "3",
    "4"
   ],
   "a": [
    0
   ],
   "w": "juice and soda are not in available, so the counter goes up twice; tea and coffee are found and skipped.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "foc-q0279",
   "topic": "if statements",
   "q": "In the special-items example, where does the if go, and how often does its test run?",
   "c": [
    "Before the for loop; once in total",
    "Inside the for loop; once for every requested topping",
    "After the for loop; once in total",
    "Inside the for loop; only for the first topping"
   ],
   "a": [
    1
   ],
   "w": "To treat one item differently, every item has to be tested, so the if sits inside the loop and runs on every pass.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "foc-q0280",
   "topic": "if statements",
   "q": "Without the if requested_toppings: check, what would the pizza code do for an empty list?\n\nrequested_toppings = []\nfor t in requested_toppings:\n    print(\"Adding \" + t + \".\")\nprint(\"Finished making your pizza!\")",
   "c": [
    "Raise an error because the list is empty",
    "Ask whether the customer wants a plain pizza",
    "Skip the loop and print 'Finished making your pizza!' for a pizza with nothing on it",
    "Loop forever"
   ],
   "a": [
    2
   ],
   "w": "A for loop over [] simply runs zero times, then the closing message prints. Nothing tells the user their pizza is plain; the check is what makes the program ask.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "foc-q0281",
   "topic": "Dictionaries",
   "q": "Which line creates a dictionary?",
   "c": [
    "city = ['name': 'Pune']",
    "city = ('name', 'Pune')",
    "city = {'name': 'Pune'}",
    "city = ['name', 'Pune']"
   ],
   "a": [
    2
   ],
   "w": "Curly braces with key: value pairs make a dictionary. Square brackets with a colon inside are a SyntaxError, parentheses make a tuple, and square brackets without colons make a list.",
   "lec": 21,
   "lv": "recall"
  },
  {
   "id": "foc-q0282",
   "topic": "Dictionaries",
   "q": "What does this print?\n\nstudent_0 = {'program': 'BSMT', 'module': 'Foundations of Computing', 'roll_number': 12}\nprint(student_0['module'])",
   "c": [
    "Foundations of Computing",
    "module",
    "BSMT",
    "12"
   ],
   "a": [
    0
   ],
   "w": "Square brackets with a key return that key's value. 'module' is the key; Foundations of Computing is its value.",
   "lec": 21,
   "lv": "apply"
  },
  {
   "id": "foc-q0283",
   "topic": "Dictionaries",
   "q": "What happens when this runs?\n\nstudent_0 = {'program': 'BSMT', 'roll_number': 12}\nprint(\"Roll number: \" + student_0['roll_number'])",
   "c": [
    "It prints Roll number: 12",
    "KeyError",
    "NameError",
    "TypeError"
   ],
   "a": [
    3
   ],
   "w": "The value stored under 'roll_number' is the integer 12, and + cannot join a str and an int. Wrap it in str(), as he did with new_points.",
   "lec": 21,
   "lv": "apply"
  },
  {
   "id": "foc-q0284",
   "topic": "Dictionaries",
   "q": "What does this print?\n\nalien_0 = {'color': 'green', 'points': 5}\nalien_0['x_position'] = 0\nalien_0['y_position'] = 25\nprint(alien_0)",
   "c": [
    "{'color': 'green', 'points': 5}",
    "{'color': 'green', 'points': 5, 'x_position': 0, 'y_position': 25}",
    "{'x_position': 0, 'y_position': 25, 'color': 'green', 'points': 5}",
    "{'color': 'green', 'points': 5, 'x_position': 25}"
   ],
   "a": [
    1
   ],
   "w": "Assigning to new keys adds two pairs. On Colab's Python they appear after the existing ones, in the order they were added.",
   "lec": 21,
   "lv": "apply"
  },
  {
   "id": "foc-q0285",
   "topic": "Dictionaries",
   "q": "What does this print?\n\nalien_0 = {'color': 'green'}\nalien_0['color'] = 'yellow'\nprint(\"The alien is now \" + alien_0['color'] + \".\")",
   "c": [
    "The alien is now green.",
    "The alien is now yellow.",
    "The alien is now green yellow.",
    "An error, because color already exists"
   ],
   "a": [
    1
   ],
   "w": "Assigning to an existing key replaces its value, so green is overwritten by yellow. Only one value per key is kept.",
   "lec": 21,
   "lv": "apply"
  },
  {
   "id": "foc-q0286",
   "topic": "Dictionaries",
   "q": "What does this print?\n\nalien = {'x_position': 4, 'speed': 'fast'}\nif alien['speed'] == 'slow':\n    inc = 1\nelif alien['speed'] == 'medium':\n    inc = 2\nelse:\n    inc = 3\nalien['x_position'] = alien['x_position'] + inc\nprint(alien['x_position'])",
   "c": [
    "5",
    "6",
    "4",
    "7"
   ],
   "a": [
    3
   ],
   "w": "speed is 'fast', which fails the slow and medium tests, so the else sets the increment to 3 and x becomes 4 + 3 = 7.",
   "lec": 21,
   "lv": "apply"
  },
  {
   "id": "foc-q0287",
   "topic": "Dictionaries",
   "q": "What does this print?\n\nalien_0 = {'color': 'green', 'points': 5}\ndel alien_0['points']\nprint(alien_0)",
   "c": [
    "{'color': 'green'}",
    "{'color': 'green', 'points': None}",
    "{'color': 'green', 'points': 5}",
    "{'points': 5}"
   ],
   "a": [
    0
   ],
   "w": "del removes the key and its value together, permanently, so only the color pair is left.",
   "lec": 21,
   "lv": "apply"
  },
  {
   "id": "foc-q0288",
   "topic": "Dictionaries",
   "q": "In alien_0 = {'color': 'green'}, what is 'color'?",
   "c": [
    "The value",
    "The index",
    "The key",
    "The dictionary's name"
   ],
   "a": [
    2
   ],
   "w": "In a key-value pair the key comes before the colon and is used to look up the value after it. alien_0 is the dictionary's name.",
   "lec": 21,
   "lv": "recall"
  },
  {
   "id": "foc-q0289",
   "topic": "Dictionaries",
   "q": "In a dictionary, what joins a key to its value, and what separates one pair from the next?",
   "c": [
    "A comma joins; a colon separates",
    "An equals sign joins; a semicolon separates",
    "A colon joins; a semicolon separates",
    "A colon joins; a comma separates"
   ],
   "a": [
    3
   ],
   "w": "He described it as: every key is connected to its value by a colon, and individual pairs are separated by commas.",
   "lec": 21,
   "lv": "recall"
  },
  {
   "id": "foc-q0290",
   "topic": "Dictionaries",
   "q": "What happens when this runs?\n\nalien_0 = {'color': 'green'}\nprint(alien_0[color])",
   "c": [
    "It prints green",
    "KeyError",
    "NameError",
    "SyntaxError"
   ],
   "a": [
    2
   ],
   "w": "Without quotes, color is read as a variable name, and no such variable exists, so Python raises a NameError before it even looks in the dictionary.",
   "lec": 21,
   "lv": "analyse"
  },
  {
   "id": "foc-q0291",
   "topic": "Dictionaries",
   "q": "What does this print?\n\nstudent = {}\nstudent['name'] = 'Asha'\nstudent['age'] = 19\nprint(student)",
   "c": [
    "{}",
    "{'name': 'Asha', 'age': 19}",
    "['Asha', 19]",
    "{'Asha': 'name', 19: 'age'}"
   ],
   "a": [
    1
   ],
   "w": "Starting from {} and assigning to two new keys adds two pairs, in that order. The key goes in the brackets and the value after the equals sign.",
   "lec": 21,
   "lv": "apply"
  },
  {
   "id": "foc-q0292",
   "topic": "Dictionaries",
   "q": "A program must look up a student's name from their roll number, many times. Which structure fits best?",
   "c": [
    "A dictionary with roll numbers as keys and names as values",
    "A list of names in roll-number order",
    "A single string holding every name",
    "A tuple of roll numbers"
   ],
   "a": [
    0
   ],
   "w": "A dictionary connects two pieces of information and lets you jump straight to a value by its key. A list would rely on positions lining up with roll numbers.",
   "lec": 21,
   "lv": "analyse"
  },
  {
   "id": "foc-q0293",
   "topic": "Dictionaries",
   "q": "What does this print?\n\nd = {'a': 1, 'a': 2}\nprint(d)",
   "c": [
    "{'a': 2}",
    "{'a': 1, 'a': 2}",
    "{'a': 1}",
    "An error"
   ],
   "a": [
    0
   ],
   "w": "Keys must be unique. When the same key appears twice, the later value overwrites the earlier one and only one pair remains.",
   "lec": 21,
   "lv": "analyse"
  },
  {
   "id": "foc-q0294",
   "topic": "Dictionaries",
   "q": "When did the lecturer say it is useful to start with an empty dictionary?",
   "c": [
    "Only when every value is a string",
    "When users supply the data, or code generates many pairs automatically",
    "When the dictionary must never change",
    "When you need the pairs to be sorted"
   ],
   "a": [
    1
   ],
   "w": "He named two cases: storing user-supplied data and generating a large number of key-value pairs in code. An empty dictionary can still hold any type of value.",
   "lec": 21,
   "lv": "recall"
  },
  {
   "id": "foc-q0295",
   "topic": "Dictionaries",
   "q": "What does this print?\n\nfavorite_languages = {\n    'arjun': 'java',\n    'divya': 'r',\n    }\nprint(\"Divya's favorite language is \" +\n    favorite_languages['divya'].title() +\n    \".\")",
   "c": [
    "Divya's favorite language is r.",
    "SyntaxError, because the print is split across lines",
    "Divya's favorite language is R.",
    "Divya's favorite language is R"
   ],
   "a": [
    2
   ],
   "w": "A statement can continue onto the next line while its parentheses are still open, so the split print is fine. title() turns 'r' into R, and the final string adds the full stop.",
   "lec": 21,
   "lv": "apply"
  },
  {
   "id": "foc-q0296",
   "topic": "Dictionaries",
   "q": "According to the lecture, what kind of object can a dictionary value be?",
   "c": [
    "Only a string or a number",
    "Only a string",
    "Anything except another dictionary",
    "A number, a string, a list or even another dictionary"
   ],
   "a": [
    3
   ],
   "w": "He said any object you can create in Python can be a value, including lists and other dictionaries, which leads to nesting later in the chapter.",
   "lec": 21,
   "lv": "recall"
  }
 ],
 "briefs": {
  "q1": {
   "scopeShort": "Lectures 1–15",
   "tag": "from the official LMS announcement",
   "lede": "Every figure below is from the official Quiz 1 announcement on the LMS and the syllabus document attached to it — not from lecture audio. Where Dr. Pathak said something different in class, the announcement wins.",
   "html": "<div class=\"grid2\">\n      <div class=\"card\">\n        <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">Confirmed on the official announcement</h4>\n        <div class=\"scroller\"><table><tbody>\n          <tr><td><strong>Date</strong></td><td>Saturday 26 September</td></tr>\n          <tr><td><strong>Window</strong></td><td>5:00–5:20 PM IST · join from <strong>4:45 PM</strong></td></tr>\n          <tr><td><strong>Questions</strong></td><td><strong>60</strong>, for <strong>60 marks</strong></td></tr>\n          <tr><td><strong>Type</strong></td><td>MCQ</td></tr>\n          <tr><td><strong>Weight</strong></td><td>15% · best 2 of 3 quizzes</td></tr>\n          <tr><td><strong>Score release</strong></td><td>By Mon 28 September, 5:00 PM (tentative)</td></tr>\n        </tbody></table></div>\n        <div class=\"warnbox\" style=\"margin-top:12px;border-left-color:var(--bad);background:var(--bad-soft)\">\n          <b>Negative marking.</b> +1 correct, <strong>−0.25 for a wrong answer</strong>, 0 if left blank. This is on the official announcement and was <em>not</em> mentioned in any lecture.\n        </div>\n      </div>\n      <div class=\"card\">\n        <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">Syllabus — settled</h4>\n        <p style=\"font-size:14.5px\">The announcement attaches an official syllabus document listing the examinable lectures explicitly. It stops at <strong>Week 6 — Working with Lists Part 2</strong>.</p>\n        <div class=\"warnbox\" style=\"margin-top:12px;border-left-color:var(--good);background:var(--good-soft)\">\n          <b>Lecture #16 was not in Quiz 1.</b> <em>Working with Lists Part 3</em> — copying lists and tuples — was not in Quiz 1. It is still on this page, clearly marked, because it is ten minutes of material and it makes Part 2 easier to hold on to.\n        </div>\n        <div class=\"warnbox\" style=\"margin-top:10px;border-left-color:var(--good);background:var(--good-soft)\">\n          <b>Also out.</b> The shared deck runs on to <code>if</code> statements, dictionaries, <code>while</code> loops and functions. None of it has been lectured. Don't revise it.\n        </div>\n        <p style=\"font-size:13.5px;color:var(--ink-3);margin-top:11px\">In Live Lecture 3 Dr. Pathak said &ldquo;8am&rdquo; and described the scope more loosely. The announcement and its syllabus document supersede both.</p>\n      </div>\n    </div>\n\n    <div class=\"card\" style=\"margin-top:14px;border-left:3px solid var(--clay)\">\n      <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">The two constraints: 20 seconds, and −0.25</h4>\n      <p style=\"font-size:14.5px;color:var(--ink-2)\">60 questions in 20 minutes is pure recall — there is no time to derive anything. And now a wrong answer costs you, which changes what to do with the ones you don't know.</p>\n      <div class=\"scroller\" style=\"margin-top:11px\"><table><thead><tr><th>Situation</th><th>Expected value</th><th>Do</th></tr></thead><tbody>\n        <tr><td>You know it</td><td><strong>+1.00</strong></td><td>Answer</td></tr>\n        <tr><td>You can rule out two of four</td><td><strong>+0.38</strong></td><td>Answer — clearly worth it</td></tr>\n        <tr><td>You can rule out one of four</td><td><strong>+0.17</strong></td><td>Answer</td></tr>\n        <tr><td>Blind guess between four</td><td><strong>+0.06</strong></td><td>Answer, but it gains you next to nothing</td></tr>\n        <tr><td>Leave it blank</td><td><strong>0.00</strong></td><td>Only if you are genuinely lost</td></tr>\n      </tbody></table></div>\n      <ul style=\"margin:11px 0 0;padding-left:19px;font-size:14.5px;line-height:1.7\">\n        <li><strong>Eliminate before you guess.</strong> Ruling out one option nearly triples the value of a guess; ruling out two makes it six times better. Blind guessing is close to worthless.</li>\n        <li><strong>Never re-read a question.</strong> If it isn't there in ~15 seconds, eliminate what you can, commit, move.</li>\n        <li><strong>Drill recognition, not understanding.</strong> Definitions, the four classification schemes, and which Python method does what.</li>\n      </ul>\n    </div>",
   "mapLede": "All 16 lectures in scope. The three live sessions largely re-teach the recorded ones, which is a useful signal: material repeated across both is what he thinks matters.",
   "syllabusNote": "everything to 20 Sep",
   "drillLede": "Nine of these are the actual “Test your knowledge” questions from the course deck — marked <span style=\"font-family:var(--mono);font-size:11px;background:var(--clay-soft);color:var(--clay);padding:1px 7px;border-radius:99px\">FROM DECK</span>. The rest are written from the lectures. Turn the pacer on to rehearse the real 20-second clock.",
   "weights": [
    [
     "Data classification",
     22
    ],
    [
     "Lists, slicing & tuples",
     18
    ],
    [
     "Software, OS & utilities",
     13
    ],
    [
     "Hardware",
     12
    ],
    [
     "Algorithms",
     11
    ],
    [
     "Computing & IPO",
     10
    ],
    [
     "Python basics",
     9
    ],
    [
     "Data & DIKW",
     5
    ]
   ]
  }
 },
 "bookPacks": [
  "pcc1-ch01",
  "pcc1-ch02",
  "pcc1-ch03",
  "pcc1-ch04",
  "pcc1-ch05",
  "lec-17",
  "lec-18",
  "lec-19",
  "lec-20",
  "lec-21"
 ]
});
