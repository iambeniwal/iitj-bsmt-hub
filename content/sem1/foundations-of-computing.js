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
     "h": "\n  <div class=\"def\"><b>Input → Process → Output.</b> Universal: it describes a calculator and an AI system equally well.</div>\n  <h4>Traditional vs enterprise view</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Stage</th><th>Traditional (30 yrs ago)</th><th>Enterprise (now)</th></tr></thead><tbody>\n   <tr><td><strong>Input</strong></td><td>Keyboard</td><td>High-volume, high-velocity, high-variety real-time data streams (zettabytes, 10<sup>21</sup> bytes)</td></tr>\n   <tr><td><strong>Process</strong></td><td>CPU calculation</td><td>Automated algorithms on cloud infrastructure, billions of steps/sec, cost near zero</td></tr>\n   <tr><td><strong>Output</strong></td><td>Screen</td><td>Actionable business decisions → revenue growth or cost reduction</td></tr>\n  </tbody></table></div>\n  <h4>The worked examples — know the process step for each</h4>\n  <div class=\"scroller\"><table><thead><tr><th>System</th><th>Process step</th></tr></thead><tbody>\n   <tr><td>Google Search</td><td>Ranks billions of pages on keyword relevance, page speed, mobile friendliness, domain trust</td></tr>\n   <tr><td>UPI</td><td>Verify identity → check balance → debit → credit → confirm. Payer bank → NPCI → payee bank, in 3–4 s</td></tr>\n   <tr><td>Google Maps</td><td>Shortest-path algorithm over hundreds of routes, weighing live traffic and roadblocks</td></tr>\n   <tr><td>YouTube</td><td>Compares your watch/skip behaviour against millions of users — a machine-learning process</td></tr>\n   <tr><td>Autocorrect</td><td>Predicts the next word from your letters plus prior words</td></tr>\n   <tr><td>Weather</td><td>Billions of hourly points from satellites + ground stations through physics and AI models</td></tr>\n   <tr><td><strong>Uber</strong></td><td>Dynamic pricing + route optimisation + matching engine. Balances supply and demand in <strong>under 500 ms</strong></td></tr>\n  </tbody></table></div>"
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
     "h": "\n  <div class=\"def\"><b>Data</b> is any <b>raw, unprocessed fact or observation</b> that can be recorded and stored. By itself it has no meaning.</div>\n  <ul>\n   <li><code>42</code> is just a number. <code>Age = 42</code> is information.</li>\n   <li><code>Mumbai</code> is just a word. <code>Place of birth = Mumbai</code> is information.</li>\n   <li><code>38.5</code> is data. <em>“Patient's temperature is 38.5 °C”</em> is information.</li>\n  </ul>\n  <p style=\"font-size:14.5px\"><strong>Context is what converts data into information.</strong> Data is the raw material of computing — without it there is nothing to process, store or output.</p>\n  <h4>The four pillars</h4>\n  <p style=\"font-size:14.5px\">1 Data · 2 Algorithm · 3 Hardware · 4 Software. <strong>Remove any one and computing fails.</strong> They are equally essential — a favourite MCQ framing.</p>"
    },
    {
     "t": "DIKW — Data → Information → Knowledge → Wisdom",
     "src": "L2 · L9 · slides 47–58",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Layer</th><th>What it adds</th><th>Question it answers</th></tr></thead><tbody>\n   <tr><td><strong>Data</strong></td><td>Raw facts, no context</td><td>—</td></tr>\n   <tr><td><strong>Information</strong></td><td>Context + structure</td><td>Who, what, where, when</td></tr>\n   <tr><td><strong>Knowledge</strong></td><td>Synthesis, pattern recognition</td><td>Why</td></tr>\n   <tr><td><strong>Wisdom</strong></td><td>Strategic action under risk</td><td>What should we do, at what cost</td></tr>\n  </tbody></table></div>\n  <h4>Clinical example</h4>\n  <p style=\"font-size:14.5px\"><strong>Data</strong> 38.5 → <strong>Information</strong> temperature 38.5 °C rising over four days, peaking on day four → <strong>Knowledge</strong> this pattern fits a viral infection, likely to resolve in 3–5 days → <strong>Wisdom</strong> doctor prescribes treatment based on thousands of similar cases.</p>\n  <h4>Netflix case — memorise the numbers</h4>\n  <ul>\n   <li><strong>Data:</strong> raw log — user ID, event PAUSE, content ID, timestamp, timecode 00:42:15.</li>\n   <li><strong>Information:</strong> <strong>3.2 million viewers</strong> paused at exactly 00:42:15.</li>\n   <li><strong>Knowledge:</strong> cross-referencing the script shows the scene introduces a complex subplot without context, causing drop-off.</li>\n   <li><strong>Wisdom:</strong> re-edit pacing for future releases; show contextual recaps to returning viewers.</li>\n  </ul>\n  <h4>Bank loan case — the ethics question</h4>\n  <ul>\n   <li><strong>Information:</strong> applicants from postal codes X, Y, Z default at <strong>3.4×</strong> the rate of others. Confirmed in the data.</li>\n   <li><strong>Knowledge:</strong> those areas have lower income, poorer infrastructure, less formal employment — the default rate is a consequence of structural disadvantage.</li>\n   <li><strong>Wisdom:</strong> do <em>not</em> use the variable. Denying a whole geography credit is <strong>redlining</strong> — illegal in many countries and unethical.</li>\n  </ul>\n  <div class=\"def\">Slide 58 asks this directly: the bank goes wrong by <b>acting at the Information level</b> without climbing to Knowledge and Wisdom.</div>\n  <h4>Telling the rungs apart under time pressure</h4>\n  <p style=\"font-size:14.5px\">Do not ask what the statement is <em>about</em> — ask what it <em>adds</em>:</p>\n  <ul>\n   <li>A bare value or a log line, no context &rarr; <strong>Data</strong></li>\n   <li>Counted, aggregated, given units or a time window &rarr; <strong>Information</strong></li>\n   <li>Explains <em>why</em>, usually by combining two or more sources &rarr; <strong>Knowledge</strong></li>\n   <li>Picks an action and accepts a cost or a risk &rarr; <strong>Wisdom</strong></li>\n  </ul>\n  <div class=\"def\"><b>The trap that actually catches people.</b> Every rung&rsquo;s description sounds like the rung below it.\n   &ldquo;Accumulated information interpreted through pattern recognition&rdquo; is <b>Knowledge</b>, not Wisdom.\n   &ldquo;Millions of users did X at the same second&rdquo; is <b>Information</b>, not Knowledge &mdash; it counts, it does not explain.\n   When a stem names a rung, check whether the option you like is quietly describing the one beneath it.</div>"
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
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Structured</th><th>Semi-structured</th><th>Unstructured</th></tr></thead><tbody>\n   <tr><td><strong>Form</strong></td><td>Rows (records) × columns (fields), each field a defined type</td><td>Organisational markers, key–value pairs, but not tabular</td><td>No predefined format</td></tr>\n   <tr><td><strong>Stored in</strong></td><td>Relational DBs — MySQL, PostgreSQL, Oracle</td><td>NoSQL databases</td><td>Specialised stores</td></tr>\n   <tr><td><strong>Examples</strong></td><td>Bank transactions, student mark sheets, hospital registers, e-commerce order tables, CSV, Excel</td><td>JSON (web APIs), XML, HTML, email (.eml — fixed headers, free-form body)</td><td>Text, images, audio, video, raw IoT sensor streams</td></tr>\n   <tr><td><strong>Share of global data</strong></td><td colspan=\"2\">the minority</td><td><strong>~80%</strong></td></tr>\n  </tbody></table></div>\n  <h4>The business consequence — he drew this twice</h4>\n  <p style=\"font-size:15px\"><strong>Analysis cost:</strong> structured &lt; unstructured. &nbsp;<strong>Capability required:</strong> structured &lt; unstructured.</p>\n  <p style=\"font-size:14.5px;color:var(--ink-2)\">Unstructured data needs specialised tooling — transformers for NLP, computer vision for images.</p>\n  <div class=\"warnbox\"><b>Unstructured sub-types to recognise:</b> Text (emails, WhatsApp chats, news, reviews, social posts) · Images (photos, X-rays, satellite, ID scans) · Audio (calls, podcasts, music, voice notes) · Video (CCTV, YouTube, recorded lectures) · Raw sensor streams.</div>"
    },
    {
     "t": "2 · Across time: cross-sectional / panel / time series",
     "src": "L3 · L9 · slides 78–87",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Type</th><th>Subjects</th><th>Time points</th><th>Canonical example</th></tr></thead><tbody>\n   <tr><td><strong>Cross-sectional</strong></td><td>Many</td><td><strong>One</strong></td><td>500 students in Delhi surveyed on 1 June 2025</td></tr>\n   <tr><td><strong>Panel</strong> (longitudinal)</td><td><strong>Many</strong></td><td><strong>Many</strong></td><td>Monthly marks of 5 students over 6 months</td></tr>\n   <tr><td><strong>Time series</strong></td><td><strong>One</strong></td><td>Many</td><td>Daily closing price of Reliance stock, Jan–Dec 2024</td></tr>\n  </tbody></table></div>\n  <div class=\"def\">The whole distinction is a 2×2: <b>how many subjects × how many time points.</b> Panel is the rich one — it does both, so you can ask “who improved most?”</div>\n  <h4>Other uses he listed</h4>\n  <ul>\n   <li><strong>Cross-sectional:</strong> election polls, consumer surveys, Amazon product feedback, census, medical studies comparing patient groups.</li>\n   <li><strong>Panel:</strong> NREGA employment records, IMF macroeconomic data across countries, clinical drug trials, school performance tracking.</li>\n   <li><strong>Time series:</strong> weather forecasting, ECG readings, website traffic, epidemic case counts, step counter, electricity meter readings.</li>\n  </ul>\n  <p style=\"font-size:14.5px\"><strong>Time series notes:</strong> sequence matters; it reveals trends, cycles and sudden changes; recent data carries more predictive value than old data.</p>"
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
     "h": "\n  <div class=\"def\">An <b>algorithm</b> is a <b>finite, unambiguous, step-by-step procedure</b> for solving a well-defined problem. It takes input, processes it through defined steps, and produces a correct output every time.</div>\n  <ul>\n   <li>The <strong>intellectual core</strong> of computing — Pillar 2.</li>\n   <li>From <strong>Muhammad ibn Musa al-Khwarizmi</strong>, a <strong>9th-century Persian mathematician</strong>. The word <em>algebra</em> comes from his book title too.</li>\n   <li>Algorithms exist <strong>independently of computers</strong>. A computer just executes them fast.</li>\n   <li><strong>Quality of computing depends on quality of the algorithm</strong> — a bad algorithm gives a wrong or slow result no matter how powerful the hardware. 1990s AI research ran on weak machines by optimising algorithms.</li>\n  </ul>\n  <h4>Everyday algorithm: making tea</h4>\n  <p style=\"font-size:14.5px\">Boil water → add tea leaves → wait 3 minutes → add milk and sugar → pour and serve.</p>\n  <h4>Odd-or-even algorithm</h4>\n  <pre>1. Start\n2. Read number n\n3. Divide n by 2, check the remainder\n4. If remainder = 0 → print \"even\"\n5. If remainder ≠ 0 → print \"odd\"\n6. End</pre>\n  <p style=\"font-size:14.5px;color:var(--ink-2)\">Flowcharts represent algorithms visually, with start, stop, decision and process shapes.</p>"
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
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>CPU</th><th>GPU</th></tr></thead><tbody>\n   <tr><td><strong>Cores</strong></td><td><strong>Few but powerful</strong> — 4, 8, 16, up to 24</td><td><strong>Thousands of small, simple</strong> cores</td></tr>\n   <tr><td><strong>Optimised for</strong></td><td>Complex <strong>sequential</strong> tasks, one instruction at a time, very fast</td><td>The <strong>same operation on many data points simultaneously</strong> — mass parallelism</td></tr>\n   <tr><td><strong>Original purpose</strong></td><td>General-purpose brain of the computer</td><td>Rendering graphics — colour and position of millions of pixels at once</td></tr>\n   <tr><td><strong>Modern AI use</strong></td><td>Runs the Python interpreter</td><td>Training neural networks, LLMs, image and video generators</td></tr>\n  </tbody></table></div>\n  <h4>Inside the CPU</h4>\n  <ul>\n   <li><strong>ALU</strong> — Arithmetic Logic Unit. Arithmetic (+ − × ÷) <em>and</em> logic (AND, OR, NOT, comparisons).</li>\n   <li><strong>CU</strong> — Control Unit. Fetches instructions from memory, decodes them, directs the ALU, decides which instruction runs next.</li>\n   <li>Also: data movement — load from memory, store to memory.</li>\n   <li><strong>Speed: 3–5 billion instructions per second (3–5 GHz).</strong></li>\n  </ul>\n  <div class=\"warnbox\"><b>Trap:</b> the ALU does <em>both</em> arithmetic and logic. The Control Unit does neither — it schedules.</div>"
    },
    {
     "t": "Memory: RAM, ROM, secondary storage",
     "src": "L6 · L14 · slides 132–134",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>RAM</th><th>ROM</th><th>Secondary storage</th></tr></thead><tbody>\n   <tr><td><strong>Volatility</strong></td><td><strong>Volatile</strong> — lost when power is cut</td><td><strong>Non-volatile</strong></td><td><strong>Non-volatile</strong></td></tr>\n   <tr><td><strong>Speed</strong></td><td>Fast — nanoseconds</td><td>Fast</td><td>Slower</td></tr>\n   <tr><td><strong>Size</strong></td><td>Phones 6–12 GB · laptops 8–32 GB</td><td>Small</td><td>Large</td></tr>\n   <tr><td><strong>Holds</strong></td><td>Running apps; your Python variables, lists and objects</td><td>Firmware and the <strong>bootloader</strong> — burned in at the factory, unmodifiable</td><td>Files, photos, music, databases, your .py files</td></tr>\n   <tr><td><strong>Type</strong></td><td colspan=\"2\"><strong>Primary memory</strong></td><td>SSD, HDD, cloud, USB, SD card, optical disc</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">RAM is “the desk you study at”. Opening an app loads it from slow storage into fast RAM so the CPU can reach it.</p>\n  <h4>Memory hierarchy — speed vs permanence</h4>\n  <p style=\"font-size:14.5px\">CPU registers (fastest, most temporary) → RAM (very fast, temporary) → ROM (fast, permanent) → secondary storage (slower, permanent).</p>"
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
     "h": "\n  <div class=\"def\"><b>Software</b> is the set of instructions that tells hardware what to do. Without it, a computer is an inert collection of components.</div>\n  <ol style=\"padding-left:20px;font-size:15px\">\n   <li><strong>System software</strong> — manages hardware, provides the platform. The OS.</li>\n   <li><strong>Utility software</strong> — maintains, optimises and protects the system.</li>\n   <li><strong>Application software</strong> — helps the user do a specific task.</li>\n  </ol>"
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
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Interpreter</th><th>Compiler</th></tr></thead><tbody>\n   <tr><td><strong>Languages</strong></td><td><strong>Python</strong>, JavaScript</td><td>C, C++, Java</td></tr>\n   <tr><td><strong>Translation</strong></td><td><strong>Line by line, at runtime</strong></td><td><strong>Entire source to machine code, before running</strong></td></tr>\n   <tr><td><strong>Errors found</strong></td><td>As the program runs — partial output still appears</td><td>At compile time, before running — no output at all if errors exist</td></tr>\n   <tr><td><strong>Speed</strong></td><td>Slower — each line re-translated every time it runs</td><td>Faster — machine code runs directly on the CPU</td></tr>\n   <tr><td><strong>Debugging</strong></td><td>Easier, interactive, immediate feedback</td><td>Harder — all-or-nothing</td></tr>\n  </tbody></table></div>\n  <h4>Editor vs IDE</h4>\n  <ul>\n   <li><strong>Source code editor</strong> — writing and editing only. Notepad++, Sublime Text, VS Code.</li>\n   <li><strong>IDE</strong> — all-in-one: editor + runner + <strong>debugger</strong> + often version control. PyCharm, VS Code with extensions, <strong>Google Colab</strong>.</li>\n  </ul>"
    }
   ]
  },
  {
   "id": "python",
   "title": "Python basics",
   "tag": "Lectures 7, 8, 10, 14",
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
     "h": "\n  <h4>Rules — breaking these is an error</h4>\n  <ul>\n   <li>Only <strong>letters, numbers and underscores</strong>.</li>\n   <li>Must <strong>start with a letter or underscore, never a number</strong>. <code>message_1</code> ✓ &nbsp; <code>1_message</code> ✗</li>\n   <li><strong>No spaces.</strong> <code>greeting_message</code> ✓ &nbsp; <code>greeting message</code> ✗</li>\n   <li>Avoid Python <strong>keywords and built-in function names</strong> — <code>print</code>, <code>if</code>, <code>else</code>, <code>while</code>, <code>return</code>, <code>try</code>.</li>\n  </ul>\n  <h4>Guidelines — these are style, not errors</h4>\n  <ul>\n   <li>Short but descriptive: <code>student_name</code> beats <code>s_n</code>.</li>\n   <li>Careful with lowercase <code>l</code> and uppercase <code>O</code> — they look like <code>1</code> and <code>0</code>.</li>\n   <li>Use lowercase. Uppercase won't error, but avoid it.</li>\n  </ul>\n  <div class=\"warnbox\"><b>NameError</b> is raised when a variable is misspelled or used before it is defined. Python prints a <b>traceback</b> showing where. Variable names are case-sensitive.</div>"
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
    }
   ]
  },
  {
   "id": "lists",
   "title": "Lists, slicing &amp; tuples",
   "tag": "Lectures 11–13, 15, 16",
   "lede": "Five lectures — the largest Python block, and the most recent, so it is fresh in the question-setter's mind too.",
   "topics": [
    {
     "t": "Creating and accessing lists",
     "src": "L11 · slides 174–175",
     "h": "\n  <div class=\"def\">A <b>list</b> is a collection of items in a particular order. Items need not be related or of the same type. Convention: name it in the plural.</div>\n  <pre>bicycles = ['Trek', 'Cannondale', 'Red Line', 'Specialized']\nprint(bicycles)      <span class=\"c\"># ['Trek', 'Cannondale', 'Red Line', 'Specialized']</span>\nprint(bicycles[0])   <span class=\"o\"># Trek</span>\nprint(bicycles[-1])  <span class=\"o\"># Specialized  ← always the last item</span>\nprint(bicycles[0].title())</pre>\n  <ul>\n   <li><strong>Index positions start at 0, not 1.</strong> Second item is <code>[1]</code>.</li>\n   <li><strong>Negative indexing:</strong> <code>[-1]</code> last, <code>[-2]</code> second-to-last. Useful when you don't know the length.</li>\n   <li>String methods apply to accessed elements: <code>bicycles[0].title()</code>.</li>\n   <li>Modify in place: <code>motorcycles[0] = 'Ducati'</code>.</li>\n  </ul>"
    },
    {
     "t": "Adding and removing — the five methods",
     "src": "L11 · high-probability MCQ",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Operation</th><th>Syntax</th><th>Behaviour</th></tr></thead><tbody>\n   <tr><td><strong>append</strong></td><td><code>lst.append(x)</code></td><td>Adds to the <strong>end</strong></td></tr>\n   <tr><td><strong>insert</strong></td><td><code>lst.insert(i, x)</code></td><td>Adds at index <code>i</code>; everything at and after <code>i</code> shifts right</td></tr>\n   <tr><td><strong>del</strong></td><td><code>del lst[i]</code></td><td><strong>Statement, not a method.</strong> Deletes by position. Value is gone for good</td></tr>\n   <tr><td><strong>pop</strong></td><td><code>lst.pop()</code> / <code>lst.pop(i)</code></td><td>Removes <strong>and returns</strong> the item. No argument → removes the <strong>last</strong> one</td></tr>\n   <tr><td><strong>remove</strong></td><td><code>lst.remove(value)</code></td><td>Removes <strong>by value</strong>, not position. Only the <strong>first occurrence</strong></td></tr>\n  </tbody></table></div>\n  <div class=\"def\">Choosing between them: <b>del</b> when you're finished with the value · <b>pop</b> when you still need it · <b>remove</b> when you know the value but not the position.</div>\n  <p style=\"font-size:14.5px\">Think of <code>pop()</code> as taking the top plate off a stack. To remove every occurrence of a repeated value, loop.</p>"
    },
    {
     "t": "Organising: sort, sorted, reverse, len",
     "src": "L12 · exam-critical distinction",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Permanent?</th><th>Syntax</th><th>Returns</th></tr></thead><tbody>\n   <tr><td><code>sort()</code></td><td><strong>Yes — permanent</strong></td><td><code>cars.sort()</code> · <code>cars.sort(reverse=True)</code></td><td>Nothing; changes the list</td></tr>\n   <tr><td><code>sorted()</code></td><td><strong>No — temporary</strong></td><td><code>sorted(cars)</code> · <code>sorted(cars, reverse=True)</code></td><td>A new sorted list; original untouched</td></tr>\n   <tr><td><code>reverse()</code></td><td><strong>Yes — permanent</strong></td><td><code>cars.reverse()</code></td><td>Nothing; inverts order</td></tr>\n   <tr><td><code>len()</code></td><td>—</td><td><code>len(cars)</code></td><td>Number of items</td></tr>\n  </tbody></table></div>\n  <pre>cars = ['BMW', 'Audi', 'Toyota', 'Subaru']\ncars.sort()                  <span class=\"o\"># ['Audi', 'BMW', 'Subaru', 'Toyota']  permanent</span>\ncars.sort(reverse=True)      <span class=\"o\"># ['Toyota', 'Subaru', 'BMW', 'Audi']</span>\nprint(sorted(cars))          <span class=\"o\"># sorted copy — cars itself is unchanged</span>\ncars.reverse()               <span class=\"o\"># just flips the order, no alphabetising</span>\nlen(cars)                    <span class=\"o\"># 4</span></pre>\n  <ul>\n   <li><code>sort</code> and <code>reverse</code> are <strong>methods</strong> (dot notation). <code>sorted</code> and <code>len</code> are <strong>functions</strong> (the list goes in parentheses).</li>\n   <li><code>reverse()</code> does <strong>not</strong> alphabetise — it only inverts. Apply it twice to restore.</li>\n  </ul>\n  <div class=\"warnbox\"><b>IndexError: list index out of range.</b> A list of length 4 has indices <b>0, 1, 2, 3</b> — <code>lst[4]</code> fails. Classic off-by-one. Any index on an empty list errors.</div>"
    },
    {
     "t": "Looping and indentation errors",
     "src": "L13",
     "h": "\n  <pre>for magician in magicians:\n    print(magician.title())\n    print(\"That was a great trick!\")\nprint(\"Thank you, everyone.\")   <span class=\"c\"># runs once, after the loop</span></pre>\n  <p style=\"font-size:14.5px\">Python takes each value in turn, stores it in the loop variable, runs every <strong>indented</strong> line, then moves on. The loop ends automatically.</p>\n  <div class=\"scroller\"><table><thead><tr><th>Mistake</th><th>Result</th></tr></thead><tbody>\n   <tr><td>No indentation after <code>for</code></td><td><strong>Syntax error:</strong> “expected an indented block” — won't run</td></tr>\n   <tr><td>Forgetting to indent an <em>additional</em> line</td><td><strong>Logical error — no error message.</strong> Runs once after the loop, using only the <strong>last</strong> value. Wrong output, silently</td></tr>\n   <tr><td>Unnecessary indentation</td><td><strong>Syntax error:</strong> “unexpected indent”</td></tr>\n   <tr><td>Missing colon after <code>for</code></td><td><strong>Syntax error:</strong> expected colon</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>The one that's tested:</b> of these four, only “forgot to indent an extra line” produces no error. It's a <em>logical</em> error — the program runs and gives the wrong answer.</div>"
    },
    {
     "t": "range(), numerical lists and comprehensions",
     "src": "L15",
     "h": "\n  <pre>for value in range(1, 5):   <span class=\"o\"># 1, 2, 3, 4 — the end value is EXCLUDED</span>\nnumbers = list(range(1, 6))        <span class=\"o\"># [1, 2, 3, 4, 5]</span>\neven = list(range(2, 11, 2))       <span class=\"o\"># [2, 4, 6, 8, 10]  third arg = step</span></pre>\n  <ul>\n   <li><strong><code>range()</code> excludes its end value.</strong> To include 5, write <code>range(1, 6)</code>.</li>\n   <li>Third argument is the <strong>step</strong> — used for odd numbers, multiples of 3, and so on.</li>\n   <li><code>list()</code> converts a range into an actual list.</li>\n  </ul>\n  <h4>Statistics on numerical lists</h4>\n  <pre>digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\nmin(digits)   <span class=\"o\"># 0</span>\nmax(digits)   <span class=\"o\"># 9</span>\nsum(digits)   <span class=\"o\"># 45</span></pre>\n  <h4>List comprehension</h4>\n  <pre><span class=\"c\"># the long way — three lines</span>\nsquares = []\nfor value in range(1, 11):\n    squares.append(value ** 2)\n\n<span class=\"c\"># the comprehension — one line</span>\nsquares = [value ** 2 for value in range(1, 11)]</pre>\n  <p style=\"font-size:14.5px\">Structure: <code>[expression for variable in range()]</code>. The <strong>expression comes first</strong>.</p>\n  <div class=\"warnbox\"><b>No colon</b> at the end of the <code>for</code> in a comprehension — unlike a normal <code>for</code> loop, which requires one. This is the detail most likely to be tested.</div>"
    },
    {
     "t": "Slicing",
     "src": "L15",
     "h": "\n  <pre>players[0:3]   <span class=\"o\"># indices 0, 1, 2 — end is EXCLUDED</span>\nplayers[:3]    <span class=\"o\"># omit start → begins at 0</span>\nplayers[2:]    <span class=\"o\"># omit end → runs to the end</span>\nplayers[:]     <span class=\"o\"># omit both → the whole list</span>\nplayers[-3:]   <span class=\"o\"># the last three</span>\n\nfor player in players[:3]:\n    print(player.title())</pre>\n  <p style=\"font-size:14.5px\"><strong>Start is inclusive, end is exclusive</strong> — the same rule as <code>range()</code>. Slicing doesn't modify the original list.</p>"
    },
    {
     "t": "Copying lists, and tuples — NOT EXAMINABLE",
     "src": "L16 · out of syllabus",
     "h": "\n  <div class=\"warnbox\" style=\"border-left-color:var(--good);background:var(--good-soft)\"><b>Not in the Quiz 1 syllabus.</b> The official list stops at Working with Lists Part 2. Come back to this only once Part 2 is solid.</div>\n\n  <h4>Copy vs reference — the single best MCQ in this chapter</h4>\n  <pre><span class=\"c\"># ✓ a real, independent copy</span>\nfriend_foods = my_foods[:]\n\n<span class=\"c\"># ✗ NOT a copy — a second name for the SAME list</span>\nfriend_foods = my_foods</pre>\n  <p style=\"font-size:14.5px\">With plain assignment, appending to either name changes both, because both variables point at one list. With <code>[:]</code> they are genuinely separate.</p>\n  <div class=\"def\"><b>Tuple</b> = an immutable list. Values cannot be changed, added or removed after creation. Use <b>parentheses</b> <code>()</code> instead of square brackets.</div>\n  <pre>dimensions = (200, 50)\ndimensions[0]          <span class=\"o\"># 200 — reading works exactly like a list</span>\nfor d in dimensions:   <span class=\"o\"># looping works exactly like a list</span>\n\ndimensions[0] = 250    <span class=\"o\"># TypeError: 'tuple' object does not support item assignment</span>\ndimensions = (400, 100) <span class=\"o\"># ✓ allowed — reassigning the whole variable</span></pre>\n  <div class=\"warnbox\"><b>The nuance:</b> you cannot change an <em>element</em> of a tuple, but you <em>can</em> rebind the whole variable to a new tuple. Both halves get tested.</div>\n  <p style=\"font-size:14.5px\">Choose lists for data that changes; tuples for data that must not.</p>"
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
   "topic": "Copying lists, and tuples — NOT EXAMINABLE",
   "term": "Tuple",
   "html": "<b>Tuple</b> = an immutable list. Values cannot be changed, added or removed after creation. Use <b>parentheses</b> <code>()</code> instead of square brackets."
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
   "w": "All four rungs are on offer here, which is the whole difficulty. Option 1 is Information (a count), option 3 is Data, option 4 is Wisdom (an action). Knowledge explains why."
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
   "w": "Wisdom is judgement under uncertainty. Option 1 describes Knowledge and is by far the most common wrong answer; options 3 and 4 are Information and Data."
  },
  {
   "id": "foc-q0033",
   "topic": "DIKW ladder",
   "q": "“The accumulation of information over time, interpreted through pattern recognition” describes which rung?",
   "c": [
    "Information",
    "Knowledge",
    "Wisdom",
    "Data"
   ],
   "a": [
    1
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
   "c": [
    "Information",
    "Knowledge",
    "Wisdom",
    "Data"
   ],
   "a": [
    2
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
   "w": "Line by line, at runtime, with partial output even when errors exist. That last option describes a compiler."
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
  }
 ],
 "briefs": {
  "q1": {
   "scopeShort": "Lectures 1–15",
   "tag": "from the official LMS announcement",
   "lede": "Every figure below is from the official Quiz 1 announcement on the LMS and the syllabus document attached to it — not from lecture audio. Where Dr. Pathak said something different in class, the announcement wins.",
   "html": "<div class=\"grid2\">\n      <div class=\"card\">\n        <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">Confirmed on the official announcement</h4>\n        <div class=\"scroller\"><table><tbody>\n          <tr><td><strong>Date</strong></td><td>Saturday 26 September</td></tr>\n          <tr><td><strong>Window</strong></td><td>5:00–5:20 PM IST · join from <strong>4:45 PM</strong></td></tr>\n          <tr><td><strong>Questions</strong></td><td><strong>60</strong>, for <strong>60 marks</strong></td></tr>\n          <tr><td><strong>Type</strong></td><td>MCQ</td></tr>\n          <tr><td><strong>Weight</strong></td><td>15% · best 2 of 3 quizzes</td></tr>\n          <tr><td><strong>Score release</strong></td><td>By Mon 28 September, 5:00 PM (tentative)</td></tr>\n        </tbody></table></div>\n        <div class=\"warnbox\" style=\"margin-top:12px;border-left-color:var(--bad);background:var(--bad-soft)\">\n          <b>Negative marking.</b> +1 correct, <strong>−0.25 for a wrong answer</strong>, 0 if left blank. This is on the official announcement and was <em>not</em> mentioned in any lecture.\n        </div>\n      </div>\n      <div class=\"card\">\n        <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">Syllabus — settled</h4>\n        <p style=\"font-size:14.5px\">The announcement attaches an official syllabus document listing the examinable lectures explicitly. It stops at <strong>Week 6 — Working with Lists Part 2</strong>.</p>\n        <div class=\"warnbox\" style=\"margin-top:12px;border-left-color:var(--good);background:var(--good-soft)\">\n          <b>Lecture #16 is OUT.</b> <em>Working with Lists Part 3</em> — copying lists and tuples — is <strong>not examinable</strong>. It is still on this page, clearly marked, because it is ten minutes of material and it makes Part 2 easier to hold on to.\n        </div>\n        <div class=\"warnbox\" style=\"margin-top:10px;border-left-color:var(--good);background:var(--good-soft)\">\n          <b>Also out.</b> The shared deck runs on to <code>if</code> statements, dictionaries, <code>while</code> loops and functions. None of it has been lectured. Don't revise it.\n        </div>\n        <p style=\"font-size:13.5px;color:var(--ink-3);margin-top:11px\">In Live Lecture 3 Dr. Pathak said &ldquo;8am&rdquo; and described the scope more loosely. The announcement and its syllabus document supersede both.</p>\n      </div>\n    </div>\n\n    <div class=\"card\" style=\"margin-top:14px;border-left:3px solid var(--clay)\">\n      <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">The two constraints: 20 seconds, and −0.25</h4>\n      <p style=\"font-size:14.5px;color:var(--ink-2)\">60 questions in 20 minutes is pure recall — there is no time to derive anything. And now a wrong answer costs you, which changes what to do with the ones you don't know.</p>\n      <div class=\"scroller\" style=\"margin-top:11px\"><table><thead><tr><th>Situation</th><th>Expected value</th><th>Do</th></tr></thead><tbody>\n        <tr><td>You know it</td><td><strong>+1.00</strong></td><td>Answer</td></tr>\n        <tr><td>You can rule out two of four</td><td><strong>+0.38</strong></td><td>Answer — clearly worth it</td></tr>\n        <tr><td>You can rule out one of four</td><td><strong>+0.17</strong></td><td>Answer</td></tr>\n        <tr><td>Blind guess between four</td><td><strong>+0.06</strong></td><td>Answer, but it gains you next to nothing</td></tr>\n        <tr><td>Leave it blank</td><td><strong>0.00</strong></td><td>Only if you are genuinely lost</td></tr>\n      </tbody></table></div>\n      <ul style=\"margin:11px 0 0;padding-left:19px;font-size:14.5px;line-height:1.7\">\n        <li><strong>Eliminate before you guess.</strong> Ruling out one option nearly triples the value of a guess; ruling out two makes it six times better. Blind guessing is close to worthless.</li>\n        <li><strong>Never re-read a question.</strong> If it isn't there in ~15 seconds, eliminate what you can, commit, move.</li>\n        <li><strong>Drill recognition, not understanding.</strong> Definitions, the four classification schemes, and which Python method does what.</li>\n      </ul>\n    </div>",
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
 }
});
