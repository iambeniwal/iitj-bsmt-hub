/* statistics-for-managers — migrated from iitj-bsmtsem1-quiz1-prep on 2026-10-04.
   IDs are permanent: append new items with the next free number, never renumber. */
HUB.addCourse({
 "slug": "statistics-for-managers",
 "code": "sfm",
 "eyebrow": "IIT Jodhpur · B.S. Management & Technology · Semester 1",
 "heading": "Statistics for Managers<br>Quiz 1 Revision",
 "sub": "Data and descriptive statistics through to Bayes — compressed for a 40-question paper with negative marking. Probability distributions are included but clearly marked as disputed scope.",
 "sources": "Compiled 26 September 2026 from the IITJ LMS: lecture AI-summaries and full transcripts for Statistics for Managers. Timings, question count, marking scheme and the official topic list from the LMS quiz announcement and its attached syllabus document; the wider scope claim is quoted from the Live Lecture 3 recording of 19 September. Topic weightings are an estimate, not an official mark scheme. <strong>This is a student-made study aid, not official IIT Jodhpur or Masai School course material</strong> — always check the LMS for the authoritative syllabus and quiz details.",
 "lectures": [
  [
   1,
   "Week 1 — Data and Statistics 1",
   "Definition, scales of measurement",
   "rec"
  ],
  [
   2,
   "Week 1 — Data and Statistics 2",
   "Sources, population vs sample, analytics",
   "rec"
  ],
  [
   3,
   "Week 1 — Live Lecture 1",
   "Course frame, Excel and R, variable types",
   "live"
  ],
  [
   4,
   "Week 2 — Descriptive Statistics 1",
   "Frequency, bar/pie, histograms, cross-tabulation",
   "rec"
  ],
  [
   5,
   "Week 2 — Descriptive Statistics 2",
   "Scatter, trend lines, measures of location",
   "rec"
  ],
  [
   6,
   "Week 3 — Descriptive Statistics 3",
   "Spread, shape, z-scores, box plots",
   "rec"
  ],
  [
   7,
   "Week 3 — Introduction to Probability 1",
   "Covariance, correlation, experiments, counting",
   "rec"
  ],
  [
   8,
   "Week 3 — Live Lecture 2",
   "Pelican Stores case, Excel practice",
   "live"
  ],
  [
   9,
   "Week 4 — Introduction to Probability 2",
   "Laws, conditional probability, Bayes",
   "rec"
  ],
  [
   10,
   "Week 4 — Discrete Probability Distributions 1",
   "Random variables, expected value",
   "rec"
  ],
  [
   11,
   "Week 5 — Discrete Probability Distributions 2",
   "Binomial, Poisson",
   "rec"
  ],
  [
   12,
   "Week 5 — Continuous Probability Distributions 1",
   "Uniform, normal, standard normal",
   "rec"
  ],
  [
   13,
   "Week 5 — Live Lecture 3",
   "Distributions revision + quiz brief",
   "live"
  ],
  [
   14,
   "Week 6 — Continuous Probability Distributions 2",
   "Normal applications, reorder points, exponential distribution",
   "rec"
  ],
  [
   15,
   "Week 6 — Application of Probability Distributions: Specialty Toys",
   "Normal demand, stockout risk, order quantity",
   "rec"
  ],
  [
   16,
   "Week 7 — Application of Probability Distributions: Go Bananas",
   "Binomial quality-control rule in Excel",
   "rec"
  ],
  [
   17,
   "Week 7 — Sampling and Sampling Distributions 1",
   "Why sample, random samples, point estimators",
   "rec"
  ],
  [
   18,
   "Week 7 — Live Lecture 4",
   "McNeil's Auto Mall case, Excel practice, quiz brief",
   "live"
  ],
  [
   19,
   "Week 8 — Sampling and Sampling Distributions 2",
   "Standard error, CLT, sampling distribution of p̂",
   "rec"
  ],
  [
   20,
   "Week 8 — Sampling and Sampling Distributions 3",
   "Stratified, cluster, systematic, convenience, judgement sampling",
   "rec"
  ]
 ],
 "units": [
  {
   "id": "basics",
   "title": "Statistics &amp; the vocabulary of data",
   "tag": "Topic 1 · Lectures 1, 3",
   "lede": "Four words he defines precisely and then uses constantly — element, variable, observation, dataset. Easy marks if you have them exactly right.",
   "topics": [
    {
     "t": "What statistics is",
     "src": "L#1 · L#3",
     "h": "\n  <div class=\"def\"><b>Statistics</b> is the <b>art and science</b> of <b>collecting, analysing, presenting and interpreting</b> data.</div>\n  <ul>\n   <li>It is a <strong>science</strong> because collection is objective and reproducible — a height in inches is the same whoever measures it.</li>\n   <li>It is an <strong>art</strong> because deciding <em>what</em> to collect requires judgement and expertise.</li>\n   <li>Calculations are objective and fixed; <strong>interpretation varies with context</strong> — 75 kg is lean, normal or heavy depending on the standard you apply.</li>\n  </ul>\n  <h4>Where it is used in business</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Function</th><th>Use</th></tr></thead><tbody>\n   <tr><td><strong>Accounting</strong></td><td><strong>Sampling procedures</strong> for audits</td></tr>\n   <tr><td><strong>Economics</strong></td><td>Forecasting, and analysing the impact of events</td></tr>\n   <tr><td><strong>Finance</strong></td><td>Price-to-earnings, dividend yield, price-to-book, interest rates</td></tr>\n   <tr><td><strong>Marketing</strong></td><td><strong>POS scanner</strong> data on purchase patterns and discount effects</td></tr>\n   <tr><td><strong>Production</strong></td><td><strong>Statistical quality control charts</strong></td></tr>\n   <tr><td><strong>Information systems</strong></td><td>Speed tests, RAM and memory utilisation</td></tr>\n  </tbody></table></div>"
    },
    {
     "t": "Element, variable, observation, dataset",
     "src": "L#1 · L#3 · definitions matter",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Term</th><th>Definition</th><th>In a student marks table</th></tr></thead><tbody>\n   <tr><td><strong>Data</strong></td><td>Facts and figures collected, analysed and summarised</td><td>All the numbers</td></tr>\n   <tr><td><strong>Element</strong></td><td>Each <strong>person or item</strong> data is collected for</td><td>One student</td></tr>\n   <tr><td><strong>Variable</strong></td><td>A <strong>characteristic of interest</strong> that changes from element to element</td><td>Physics marks; Class 12 percentage</td></tr>\n   <tr><td><strong>Observation</strong></td><td>The <strong>complete set of measurements for a single element</strong> — one row</td><td>Everything recorded for Student A</td></tr>\n   <tr><td><strong>Dataset</strong></td><td>All the data collected in the study</td><td>The whole table</td></tr>\n  </tbody></table></div>\n  <div class=\"def\"><b>Total data values = number of elements × number of variables.</b> 100 students × 10 variables = <b>1,000</b> data points. His other worked case: a Wall Street Journal survey with <b>46 questions × 50 respondents = 2,300</b> entries.</div>\n  <p style=\"font-size:14.5px\"><strong>Descriptive statistics</strong> summarises data in <strong>tabular, graphical or numerical</strong> form. <strong>Inferential statistics</strong> uses a sample to draw conclusions about a population.</p><!--viz:sfm-observation-variable--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"A small table of four students and three variables. Bilal's row is highlighted as one observation; the Physics marks column is highlighted as one variable.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Rows are observations, columns are variables</div><div class=\"scroller\"><table><thead><tr><th>Element (student)</th><th style=\"background:var(--clay-soft)\">Physics marks</th><th>Class 12 %</th><th>Home state</th></tr></thead><tbody><tr><td>Asha</td><td style=\"font-family:var(--mono);background:var(--clay-soft)\">78</td><td style=\"font-family:var(--mono)\">91.2</td><td style=\"color:var(--ink)\">Rajasthan</td></tr><tr style=\"background:var(--blue-soft)\"><td>Bilal</td><td style=\"font-family:var(--mono)\">64</td><td style=\"font-family:var(--mono)\">85.0</td><td style=\"color:var(--ink)\">Delhi</td></tr><tr><td>Chen</td><td style=\"font-family:var(--mono);background:var(--clay-soft)\">88</td><td style=\"font-family:var(--mono)\">93.4</td><td style=\"color:var(--ink)\">Assam</td></tr><tr><td>Divya</td><td style=\"font-family:var(--mono);background:var(--clay-soft)\">71</td><td style=\"font-family:var(--mono)\">79.6</td><td style=\"color:var(--ink)\">Kerala</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin-top:8px\"><span style=\"padding:1px 6px;background:var(--blue-soft);border-radius:3px\">row</span> = one observation (everything recorded for Bilal) · <span style=\"padding:1px 6px;background:var(--clay-soft);border-radius:3px\">column</span> = one variable · whole table = the dataset</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">4 elements × 3 variables = 12 data values; count them the same way for any dataset.</figcaption></figure><!--/viz:sfm-observation-variable-->"
    },
    {
     "t": "Textbook: Data and Statistics",
     "src": "Anderson 14e ch1",
     "h": "<p>The chapter separates two meanings of 'statistics': numerical facts such as averages and percentages, and the discipline of collecting, analysing, presenting and interpreting data to support decisions. It builds the vocabulary every later chapter relies on: elements, variables, observations and data sets; the nominal, ordinal, interval and ratio scales; categorical versus quantitative data; and cross-sectional versus time series data. It then explains where data come from (existing records, observational studies, experiments), why time, cost and recording errors matter, and how descriptive statistics differ from statistical inference, where a sample is used to say something about a population. It closes with descriptive, predictive and prescriptive analytics, big data and data mining, and the ethical duty to report all the data honestly. For a manager, the scale of a variable decides which summaries and analyses are even legitimate.</p><p><strong>Two meanings of statistics</strong> — In everyday use, 'statistics' are numerical facts such as an unemployment rate or a quarterly profit. As a subject, statistics is the art and science of collecting, analysing, presenting and interpreting data so that managers can make better-informed decisions.<br><em>e.g.</em> 'Sensex closed 1.2% higher' is a statistic; deciding how to sample shoppers to measure brand recall is statistics the discipline.</p><p><strong>Statistics across business functions</strong> — Auditors sample accounts receivable instead of checking every account; analysts compare a stock's P/E ratio and dividend yield with market averages; brand managers buy point-of-sale scanner data; factories use control charts such as the x-bar chart; economists feed indicators into forecasting models; IT teams track uptime and bandwidth use.<br><em>e.g.</em> A bottling line plots the average fill of each small sample on an x-bar chart and stops only when a point falls outside the control limits.</p><p><strong>Elements, variables, observations, data set</strong> — Elements are the entities data are collected on; a variable is a characteristic of interest for those elements; an observation is the full set of measurements for one element; the data set is everything collected in the study. Because each element gives exactly one observation, the number of observations always equals the number of elements.<br><span style=\"font-family:var(--mono)\">Total data items = number of observations × number of variables</span><br><em>e.g.</em> 60 nations × 5 variables = 300 data items.</p><p><strong>Descriptive statistics</strong> — Tabular, graphical and numerical summaries that make data easy to read: a frequency table, a bar chart or histogram, or a single number such as the mean. Chapters 2 and 3 develop these methods.</p><div class=\"card\"><strong>Case: Bloomberg Businessweek</strong> <em>(Statistics in Practice: Bloomberg Businessweek)</em><p>The business magazine fills its reports with statistical summaries, but also runs a subscriber survey on demographics, reading habits and purchasing roles. Finding that a large share of readers influence computer purchases at work shapes both the articles it commissions and the pitch it makes to computer advertisers.</p><p><em>Lesson:</em> Statistics as numerical facts and as a decision tool inside the same business; descriptive summaries of survey data.</p><p><em>Think:</em> Is the subscriber survey a census or a sample survey, and what is the population the magazine wants to describe?</p></div><div class=\"card\"><strong>Case: Rogers Industries battery study</strong> <em>(Sections 1.5 and 1.9: Rogers Industries solid-state lithium batteries)</em><p>A battery maker tests 200 batteries made with a new technology and uses their mean time to recharge to estimate the mean for all such batteries, reported with a margin of error. The ethics section then asks what happens if management re-runs samples until a hoped-for figure appears, or quietly drops the weakest batteries.</p><p><em>Lesson:</em> Population vs sample, point and interval estimates, and the duty to report all data.</p><p><em>Think:</em> Why is repeating the test until one sample mean exceeds the target misleading even though no data value was falsified?</p></div><div class=\"card\"><strong>Case: Restaurant smoking poll</strong> <em>(Section 1.9: tobacco lobbyist restaurant survey)</em><p>A lobbyist interviews diners only in restaurants that already allow smoking, finds overwhelming support for allowing it, and presents the figure as the view of all restaurant-goers.</p><p><em>Lesson:</em> An unrepresentative sample slants results toward a predetermined outcome.</p><p><em>Think:</em> What population does this sample actually represent, and how would you sample to estimate the opinion of all diners?</p></div><details><summary>Worked problem: Classifying a two-wheeler data set</summary><p>A dealer in Pune records, for each of 12 scooter models: ex-showroom price (₹), fuel type (Petrol / Electric / CNG), safety rating (1 to 5 stars), claimed range per full tank or charge (km) and the showroom city where it is stocked (Pune, Mumbai or Nashik). (a) How many elements, variables and data items are there? (b) Classify each variable as categorical or quantitative and give its scale. (c) Can the dealer meaningfully report the 'average fuel type' if Petrol = 1, Electric = 2, CNG = 3?</p><ol><li>Elements are the 12 scooter models, so there are 12 observations.</li><li>Variables: price, fuel type, safety rating, range, showroom city, so 5 variables.</li><li>Data items = observations × variables = 12 × 5 = 60.</li><li>Price (₹): quantitative, ratio (₹0 means free; ₹1.2 lakh is twice ₹60,000).</li><li>Fuel type: categorical, nominal (labels with no order).</li><li>Safety rating: categorical, ordinal (5 stars beats 4 stars, but the gap between ratings is not a fixed unit).</li><li>Range (km): quantitative, ratio (0 km means no range; ratios are meaningful).</li><li>Showroom city: categorical, nominal (place names with no natural order).</li><li>(c) Fuel-type codes are nominal labels, so averaging them is meaningless; report counts or percentages per fuel type instead.</li></ol><p><strong>Answer:</strong> 12 elements, 5 variables, 60 data items. Price and range are quantitative (ratio); fuel type and showroom city are nominal; safety rating is ordinal. An 'average fuel type' is meaningless.</p></details><details><summary>Worked problem: From a sample to a population estimate</summary><p>An electric-scooter maker in Jaipur tests 150 scooters from its new battery line and finds a mean range of 96.5 km on a full charge. Its statistician reports a margin of ±2.3 km. (a) Identify the population and the sample. (b) Give the point estimate and the interval estimate of the population mean range. (c) Management wants to advertise '100 km range' and proposes testing fresh batches of 150 until one batch averages at least 100 km. Comment.</p><ol><li>Population: all scooters that could be produced with the new battery line. Sample: the 150 scooters actually tested.</li><li>Point estimate of the population mean = sample mean = 96.5 km.</li><li>Interval estimate = 96.5 ± 2.3 = 94.2 km to 98.8 km.</li><li>Repeated batches will vary by chance; if enough batches are tested, one may average 100 km or more purely by luck.</li><li>Advertising that single batch while ignoring the rest breaks the ethical guideline against running repeated tests until a desired result appears.</li></ol><p><strong>Answer:</strong> Point estimate 96.5 km; interval 94.2 km to 98.8 km. Re-testing until a 100 km batch appears would be a misuse of statistics, because the claim would rest on chance rather than on the product.</p></details><div class=\"def\"><b>Book vs lecture — Why statistics is an 'art and science'.</b> Book: Gives the definition (the art and science of collecting, analysing, presenting and interpreting data) and contrasts statistics as numerical facts with statistics as a discipline. It does not explain which part is art and which is science. Lecture: Explains 'science' as objective, reproducible collection and calculation, and 'art' as the judgement about what to collect and how to interpret it in context. <b>The two do not conflict. Quote the four verbs exactly as both sources do; use the lecture's art/science explanation if asked why, and the book's facts-versus-discipline distinction if asked what 'statistics' can mean.</b></div>"
    }
   ]
  },
  {
   "id": "scales",
   "title": "The four scales of measurement",
   "tag": "Topic 1 · Lectures 1, 3",
   "lede": "Nominal, ordinal, interval, ratio — each one inherits everything below it. The hierarchy is the whole question.",
   "topics": [
    {
     "t": "The four scales",
     "src": "L#1 · L#3",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Scale</th><th>Adds</th><th>True zero?</th><th>Examples</th></tr></thead><tbody>\n   <tr><td><strong>Nominal</strong></td><td>Names or labels only. <strong>No order</strong></td><td>—</td><td>Gender · student names · <strong>roll numbers</strong> · school of the university</td></tr>\n   <tr><td><strong>Ordinal</strong></td><td>Everything nominal has, <strong>plus rank or order</strong></td><td>—</td><td>Class rank · first/second/third year · railway class 1, 2, 3</td></tr>\n   <tr><td><strong>Interval</strong></td><td>Everything ordinal has, <strong>plus fixed, meaningful units of difference</strong></td><td><strong>No</strong></td><td><strong>SAT scores</strong> · temperature in °C or °F</td></tr>\n   <tr><td><strong>Ratio</strong></td><td>Everything interval has, <strong>plus a true zero</strong>, so ratios are meaningful</td><td><strong>Yes</strong></td><td>Price · height · weight · distance · age · sales revenue</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>The trap:</b> <b>roll numbers are nominal</b>, not ordinal — they are numeric labels with no ranking. And <b>temperature in Celsius is interval, not ratio</b>, because 0°C does not mean the absence of temperature.</div>\n  <h4>The conversion hierarchy</h4>\n  <p style=\"font-size:15px\"><strong>You can always go down, never up.</strong> Ratio → interval → ordinal → nominal. Nominal cannot be converted to anything else. Ratio is the <strong>richest</strong> scale.</p>\n  <h4>Categorical vs quantitative</h4>\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Categorical (qualitative)</th><th>Quantitative</th></tr></thead><tbody>\n   <tr><td><strong>Scales</strong></td><td><strong>Nominal or ordinal</strong></td><td><strong>Interval or ratio</strong></td></tr>\n   <tr><td><strong>Numeric?</strong></td><td>May be numeric <em>or</em> not — the numbers are labels</td><td><strong>Always numeric</strong></td></tr>\n   <tr><td><strong>Arithmetic</strong></td><td>Not meaningful</td><td>Meaningful</td></tr>\n   <tr><td><strong>Answers</strong></td><td>Which category</td><td>How many, how much</td></tr>\n  </tbody></table></div><!--viz:sfm-scales-ladder--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Four stacked boxes: nominal (labels, equal or not equal), ordinal (adds order), interval (adds equal gaps, so add and subtract), ratio (adds a true zero, so multiply and divide).\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Each scale keeps everything above it and adds one thing</div><div style=\"display:flex;flex-direction:column;gap:4px;font-size:14px\"><div style=\"display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b style=\"min-width:70px\">Nominal</b><span>labels only</span><span style=\"font-family:var(--mono);color:var(--ink-2)\">= ≠</span><span style=\"color:var(--ink-3);font-size:13px\">e.g. roll number, blood group</span></div><div style=\"color:var(--ink-3);padding-left:18px\">↓ adds one property</div><div style=\"display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b style=\"min-width:70px\">Ordinal</b><span>+ order</span><span style=\"font-family:var(--mono);color:var(--ink-2)\">< ></span><span style=\"color:var(--ink-3);font-size:13px\">e.g. class rank, hotel star rating</span></div><div style=\"color:var(--ink-3);padding-left:18px\">↓ adds one property</div><div style=\"display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b style=\"min-width:70px\">Interval</b><span>+ equal gaps between values</span><span style=\"font-family:var(--mono);color:var(--ink-2)\">+ −</span><span style=\"color:var(--ink-3);font-size:13px\">e.g. °C, calendar year</span></div><div style=\"color:var(--ink-3);padding-left:18px\">↓ adds one property</div><div style=\"display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><b style=\"min-width:70px\">Ratio</b><span>+ a true zero</span><span style=\"font-family:var(--mono);color:var(--ink-2)\">× ÷</span><span style=\"color:var(--ink-3);font-size:13px\">e.g. salary, weight, sales</span></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Read down to see what each scale adds; you can always convert down the ladder, never up.</figcaption></figure><!--/viz:sfm-scales-ladder-->"
    },
    {
     "t": "Cross-sectional and time series",
     "src": "L#1",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Cross-sectional</th><th>Time series</th></tr></thead><tbody>\n   <tr><td><strong>Collected</strong></td><td>At the <strong>same, or approximately the same, point in time</strong></td><td>Over <strong>multiple time periods</strong></td></tr>\n   <tr><td><strong>Shows</strong></td><td>Comparison across elements at one moment</td><td>How something changes, so trends can be projected</td></tr>\n   <tr><td><strong>Examples</strong></td><td>Ages of all students in a class this month · building permits issued in one month</td><td>One student's performance over 10 years · petrol price Jan 2009 to Apr 2014</td></tr>\n  </tbody></table></div>"
    },
    {
     "t": "Textbook: Data and Statistics",
     "src": "Anderson 14e ch1",
     "h": "<!--viz:sfm-data-types-tree--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Classification tree: categorical data is nominal (blood group) or ordinal (star rating); quantitative data is discrete (orders a day) or continuous (weight).\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Types of data</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 214\" role=\"img\" aria-label=\"Tree: data splits into categorical (nominal, ordinal) and quantitative (discrete, continuous), with an example under each leaf: blood group, star rating, orders a day, weight.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M220,42 L112,78\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M220,42 L328,78\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M112,110 L58,146\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M112,110 L166,146\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M328,110 L274,146\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M328,110 L382,146\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><rect x=\"177\" y=\"10\" width=\"86\" height=\"32\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"220\" y=\"31\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Data</text><rect x=\"52\" y=\"78\" width=\"120\" height=\"32\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"112\" y=\"99\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Categorical</text><rect x=\"266\" y=\"78\" width=\"124\" height=\"32\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"328\" y=\"99\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Quantitative</text><rect x=\"8\" y=\"146\" width=\"100\" height=\"32\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"58\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Nominal</text><text x=\"58\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-style:italic\">blood group</text><rect x=\"116\" y=\"146\" width=\"100\" height=\"32\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"166\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Ordinal</text><text x=\"166\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-style:italic\">star rating</text><rect x=\"224\" y=\"146\" width=\"100\" height=\"32\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"274\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Discrete</text><text x=\"274\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-style:italic\">orders a day</text><rect x=\"332\" y=\"146\" width=\"100\" height=\"32\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"382\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">Continuous</text><text x=\"382\" y=\"198\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px;font-style:italic\">weight</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Ask what arithmetic makes sense: if averaging the codes is meaningless, the data is categorical even when it is stored as numbers.</figcaption></figure><!--/viz:sfm-data-types-tree--><!--viz:sfm-discrete-continuous--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Discrete data (customers in a queue) takes separate whole values 0 to 6; continuous data (waiting time) can take any value in an interval, such as 2.37 minutes.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Discrete counts, continuous measures</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 170\" role=\"img\" aria-label=\"Two number lines. Discrete: customers waiting can only be 0, 1, 2, 3, 4, 5 or 6, shown as separate dots. Continuous: waiting time can be any value on the line, for example 2.37 minutes, shown as a solid band.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><text x=\"20\" y=\"22\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">Discrete · customers in the queue</text><path d=\"M28,56 L400,56\" style=\"stroke:var(--rule);stroke-width:1.5;fill:none\"/><circle cx=\"40\" cy=\"56\" r=\"6\" style=\"fill:var(--clay);stroke:none\"/><text x=\"40\" y=\"80\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><circle cx=\"98\" cy=\"56\" r=\"6\" style=\"fill:var(--clay);stroke:none\"/><text x=\"98\" y=\"80\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">1</text><circle cx=\"156\" cy=\"56\" r=\"6\" style=\"fill:var(--clay);stroke:none\"/><text x=\"156\" y=\"80\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">2</text><circle cx=\"214\" cy=\"56\" r=\"6\" style=\"fill:var(--clay);stroke:none\"/><text x=\"214\" y=\"80\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">3</text><circle cx=\"272\" cy=\"56\" r=\"6\" style=\"fill:var(--clay);stroke:none\"/><text x=\"272\" y=\"80\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">4</text><circle cx=\"330\" cy=\"56\" r=\"6\" style=\"fill:var(--clay);stroke:none\"/><text x=\"330\" y=\"80\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">5</text><circle cx=\"388\" cy=\"56\" r=\"6\" style=\"fill:var(--clay);stroke:none\"/><text x=\"388\" y=\"80\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">6</text><text x=\"20\" y=\"110\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">Continuous · waiting time in minutes</text><rect x=\"40\" y=\"136\" width=\"348\" height=\"8\" rx=\"3\" style=\"fill:var(--blue);stroke:none\"/><text x=\"40\" y=\"162\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><text x=\"98\" y=\"162\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">1</text><text x=\"156\" y=\"162\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">2</text><text x=\"214\" y=\"162\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">3</text><text x=\"272\" y=\"162\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">4</text><text x=\"330\" y=\"162\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">5</text><text x=\"388\" y=\"162\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">6</text><path d=\"M177.5,132 L172.5,124 L182.5,124 Z\" style=\"fill:var(--ink);stroke:none\"/><text x=\"187.5\" y=\"128\" style=\"fill:var(--ink);font-size:13px\">2.37 is possible</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">If you count it, it is usually discrete; if you measure it, it is continuous.</figcaption></figure><!--/viz:sfm-discrete-continuous--><p><strong>The four scales of measurement</strong> — Nominal data are labels; ordinal data are labels whose order is meaningful; interval data add a fixed unit of measure so differences are meaningful; ratio data add a zero that means 'none of it', so ratios are meaningful. The scale fixes how much information the data carry and which summaries are appropriate.<br><em>e.g.</em> A sovereign credit rating (AAA … F) is ordinal; an SAT score is interval; a car's price is ratio.</p><p><strong>Categorical vs quantitative data</strong> — Categorical data identify a group and use the nominal or ordinal scale; they can be words or numeric codes, but arithmetic on the codes is meaningless, so analysis is limited to counts and proportions. Quantitative data say how much or how many, use the interval or ratio scale, and support arithmetic such as averages.<br><em>e.g.</em> Coding 'member' as 1 and 'observer' as 2 does not make WTO status quantitative.</p><p><strong>Discrete vs continuous quantitative data</strong> — Quantitative data that count how many (calls received in five minutes) are discrete. Data that measure how much (weight, time) are continuous because there is no gap between possible values.<br><em>e.g.</em> Orders per hour is discrete; delivery time in minutes is continuous.</p><p><strong>Cross-sectional vs time series data</strong> — Cross-sectional data are collected at, or about, the same point in time across many elements. Time series data follow a variable over several periods and are used to spot trends and seasonality and to project future values.<br><em>e.g.</em> Per-capita GDP for 60 countries in one year is cross-sectional; monthly petrol prices from 2012 to 2018 are a time series.</p>"
    }
   ]
  },
  {
   "id": "sources",
   "title": "Sources, samples &amp; analytics",
   "tag": "Topic 2 · Lecture 2",
   "lede": "Where data comes from, the population/sample distinction, and the three kinds of analytics.",
   "topics": [
    {
     "t": "Sources and types of collection",
     "src": "L#2",
     "h": "\n  <p style=\"font-size:14.5px\"><strong>Sources:</strong> internal company records (employee, production, inventory, sales, credit) · business database services · <strong>government agencies</strong> (Ministry of Statistics, US Department of Labor) · industry associations · special interest organisations · the internet and AI.</p>\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Observational</th><th>Experimental</th></tr></thead><tbody>\n   <tr><td><strong>Intervention</strong></td><td><strong>None</strong> — no attempt to control or influence variables</td><td>A <strong>treatment is administered</strong> and its effect measured</td></tr>\n   <tr><td><strong>Method</strong></td><td>Observe as it naturally occurs</td><td>Compare pre-treatment and post-treatment</td></tr>\n   <tr><td><strong>Example</strong></td><td>A survey of smokers and non-smokers</td><td>The <strong>1954 polio vaccine trial</strong>, involving <strong>2 million</strong> US children</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">Three considerations before acquiring data: <strong>time</strong> (will it still be useful when it arrives), <strong>cost</strong> (Meta and Facebook are essentially data companies), and <strong>data errors</strong>.</p>"
    },
    {
     "t": "Population, sample and analytics",
     "src": "L#2 · L#5",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>\n   <tr><td><strong>Population</strong></td><td>The <strong>complete set</strong> of all elements of interest</td></tr>\n   <tr><td><strong>Sample</strong></td><td>A <strong>subset</strong> of the population</td></tr>\n   <tr><td><strong>Census</strong></td><td>Collection from the <strong>entire population</strong></td></tr>\n   <tr><td><strong>Sample survey</strong></td><td>Collection from a subset</td></tr>\n   <tr><td><strong>Statistical inference</strong></td><td>Using sample data to estimate population characteristics and test hypotheses</td></tr>\n   <tr><td><strong>Sample statistic</strong></td><td>A measure computed from a <strong>sample</strong> — like tasting a few grains to see if the rice is cooked</td></tr>\n   <tr><td><strong>Population parameter</strong></td><td>A measure computed from <strong>every</strong> element</td></tr>\n   <tr><td><strong>Point estimator</strong></td><td>A sample statistic used to infer the corresponding population parameter</td></tr>\n  </tbody></table></div>\n  <h4>The three analytics</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Type</th><th>Answers</th></tr></thead><tbody>\n   <tr><td><strong>Descriptive</strong></td><td>What happened — describes and summarises the past</td></tr>\n   <tr><td><strong>Predictive</strong></td><td>What will happen — models built on past data</td></tr>\n   <tr><td><strong>Prescriptive</strong></td><td>What we should do — the optimal course of action</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\"><strong>Big data</strong> is characterised by <strong>volume, velocity and variety</strong>. <strong>Data mining</strong> extracts patterns from large datasets; <strong>data warehousing</strong> captures and organises them — Walmart processes <strong>20–30 million transactions a day</strong>. Models should be <strong>reliable</strong>, and data split into <strong>training and testing</strong> sets.</p><!--viz:sfm-sample-population-notation--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table pairing sample notation with population notation: n and N, x-bar and mu, s squared with n minus 1 and sigma squared with N, s and sigma, p-bar and p.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Sample statistic vs population parameter</div><div class=\"scroller\"><table><thead><tr><th>Measure</th><th style=\"background:var(--blue-soft)\">Sample statistic</th><th>Population parameter</th></tr></thead><tbody><tr><td>Size</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">n</td><td style=\"font-family:var(--mono)\">N</td></tr><tr><td>Mean</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">x̄ = Σx / n</td><td style=\"font-family:var(--mono)\">μ = Σx / N</td></tr><tr><td>Variance</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">s² = Σ(x − x̄)² / (n − 1)</td><td style=\"font-family:var(--mono)\">σ² = Σ(x − μ)² / N</td></tr><tr><td>Std deviation</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">s</td><td style=\"font-family:var(--mono)\">σ</td></tr><tr><td>Proportion</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">p̄</td><td style=\"font-family:var(--mono)\">p</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin-top:8px\">Latin letters for samples, Greek for populations. The statistic is what you compute; the parameter is what you want to know.</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Only the sample variance divides by n − 1; every other pair has the same formula.</figcaption></figure><!--/viz:sfm-sample-population-notation-->"
    },
    {
     "t": "Textbook: Data and Statistics",
     "src": "Anderson 14e ch1",
     "h": "<!--viz:sfm-inference-loop--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Flow: a population with an unknown parameter, a sample drawn from it, a sample statistic computed, and an inference back about the population as an estimate plus or minus a margin.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">How statistical inference works</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>Population</b><br><span style=\"font-size:13px;color:var(--ink-2)\">parameter μ unknown</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Draw a sample<br><span style=\"font-size:13px;color:var(--ink-2)\">n of the N elements</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><b>Sample statistic</b><br><span style=\"font-size:13px;color:var(--ink-2)\">x̄ computed</span></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\">Inference<br><span style=\"font-size:13px;color:var(--ink-2)\">μ ≈ x̄ ± margin</span></div><span style=\"color:var(--ink-3)\">↺ conclusion about the population</span></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Descriptive statistics stops at the blue box; inference takes the extra step back to the population, so it always carries uncertainty.</figcaption></figure><!--/viz:sfm-inference-loop--><p><strong>Existing data sources</strong> — Internal records (employees, production, inventory, sales, credit, customer profiles), commercial database firms, industry associations, the internet and social-media APIs, and government agencies already hold large amounts of data. Using them is usually fastest when a decision is needed soon.<br><em>e.g.</em> An HR team pulls salary, age and experience from personnel records instead of running a survey.</p><p><strong>Observational study vs experiment</strong> — In an observational study the researcher records what happens without controlling any variable; surveys and opinion polls are observational. In an experiment the researcher controls one or more variables (for example, the dose a group receives) to see how they affect the variable of interest, which usually yields more informative data.<br><em>e.g.</em> Recording CEO gender and ROE across firms is observational; giving groups different dosages of a drug and measuring blood pressure is an experiment.</p><p><strong>Time, cost and data-acquisition errors</strong> — Collecting new data takes time and money, and the cost of data plus analysis should not exceed the savings from the better decision it enables. Errors arise whenever a recorded value differs from the true value (transposed digits, misread questions); consistency checks and a look at unusually large or small values (outliers) help catch them. Bad data can be worse than no data.<br><em>e.g.</em> A respondent aged 22 claiming 20 years of work experience fails an internal-consistency check.</p><p><strong>Statistical inference</strong> — Because studying every element is often too slow or costly, data are collected from a sample (a subset) and used to estimate or test claims about the population (all elements of interest). A good estimate is reported with its precision: a point estimate plus or minus a margin gives an interval estimate. A census collects data on the entire population; a sample survey on a sample.<br><span style=\"font-family:var(--mono)\">Interval estimate = point estimate ± margin</span><br><em>e.g.</em> A sample mean battery life of 18.84 h ± 0.68 h gives the interval 18.16 h to 19.52 h.</p><p><strong>Descriptive, predictive and prescriptive analytics</strong> — Analytics is the scientific process of turning data into insight for better decisions. Descriptive analytics reports what has happened (queries, dashboards, descriptive statistics); predictive analytics uses models built on past data to forecast or to assess one variable's effect on another (regression, time series forecasting, simulation); prescriptive analytics yields a best course of action (optimisation models, airline revenue management).</p><p><strong>Big data, data warehousing and data mining</strong> — Big data are data sets too large or complex for ordinary software in reasonable time, described by volume, velocity and variety (including text, audio and video). Data warehousing captures, stores and maintains the data; data mining uses statistics and computer science to extract predictive information from them. Reliability is checked by building a model on a training set and testing it on a separate test set, which guards against overfitting.</p><p><strong>Ethical statistical practice</strong> — Unethical practice includes improper sampling, inappropriate analysis, misleading graphs, wrong summary statistics and biased interpretation. The American Statistical Association's guidelines warn against re-running studies until a desired result appears by chance, require accounting for every data value considered (including any discarded), and warn against slanting work toward a predetermined outcome with unrepresentative samples.</p>"
    },
    {
     "t": "Textbook: Sampling and Sampling Distributions",
     "src": "Anderson 14e ch7",
     "h": "<p>Managers rarely measure a whole population, so they draw a sample and use sample statistics — x̄, s and p̄ — as point estimates of μ, σ and p. Because every sample differs, a statistic is itself a random variable with a sampling distribution. The sampling distribution of x̄ is centred on μ, has standard error σ/√n (with a finite population correction when n/N &gt; 0.05), and by the Central Limit Theorem is approximately normal for large samples whatever the population's shape. The sample proportion behaves the same way with standard error √[p(1 − p)/n] when np and n(1 − p) are at least 5. These results let a manager state how likely a sample estimate is to land within a given distance of the truth, and they underpin every confidence interval and hypothesis test that follows. The chapter also compares probability and non-probability sampling methods and warns that huge 'big data' samples shrink sampling error but not nonsampling error.</p><div class=\"card\"><strong>Case: Forest inventory by sample plots</strong> <em>(Statistics in Practice: MeadWestvaco Corporation)</em><p>A paper and packaging company needs reliable figures on the volume and growth of its vast timberlands. It divides the forests into sections by location and tree type, then uses maps and random numbers to choose small sample plots in each section. Field teams measure every tree in the chosen plots, and the data feed planting and harvesting plans.</p><p><em>Lesson:</em> Random sampling within sections (a stratified design) makes a huge physical population measurable.</p><p><em>Think:</em> Why does dividing the forest into sections before sampling usually give more precise estimates than one simple random sample of plots across the whole holding?</p></div><details><summary>Worked problem: Will the sample mean land close to μ?</summary><p>An e-commerce firm's order values have μ = ₹1,800 and σ = ₹600 (very large population). A random sample of 64 orders is taken. Find the standard error of x̄ and the probability that x̄ falls within ₹100 of μ.</p><ol><li>n/N is tiny, so no finite population correction: σx̄ = 600/√64 = 600/8 = ₹75.</li><li>With n = 64 the CLT makes x̄ approximately normal with mean ₹1,800.</li><li>z at x̄ = 1,900: (1,900 − 1,800)/75 = 1.33; at 1,700: −1.33.</li><li>Table: P(z ≤ 1.33) = 0.9082 and P(z ≤ −1.33) = 0.0918.</li><li>P(1,700 ≤ x̄ ≤ 1,900) = 0.9082 − 0.0918 = 0.8164.</li></ol><p><strong>Answer:</strong> Standard error ₹75; probability ≈ 0.816 that x̄ is within ₹100 of μ.</p></details><details><summary>Worked problem: Finite population correction</summary><p>A firm with N = 500 employees samples n = 50 to estimate mean monthly overtime pay. The population standard deviation is ₹8,000. Find the standard error of the mean.</p><ol><li>n/N = 50/500 = 0.10 &gt; 0.05, so apply the correction.</li><li>Uncorrected: σ/√n = 8,000/√50 = ₹1,131.4.</li><li>Correction factor: √[(500 − 50)/(500 − 1)] = √(450/499) = 0.9496.</li><li>σx̄ = 0.9496 × 1,131.4 = ₹1,074.4.</li></ol><p><strong>Answer:</strong> σx̄ ≈ ₹1,074 (about 5% smaller than the uncorrected ₹1,131).</p></details><details><summary>Worked problem: Sample proportion within ±0.05</summary><p>40% of households in a city use UPI autopay for bills. A survey samples 150 households. Find the standard error of p̄ and the probability that p̄ lies between 0.35 and 0.45.</p><ol><li>Check normality: np = 60 ≥ 5 and n(1 − p) = 90 ≥ 5.</li><li>σp̄ = √(0.40 × 0.60 / 150) = √0.0016 = 0.04.</li><li>z at 0.45: (0.45 − 0.40)/0.04 = 1.25; at 0.35: −1.25.</li><li>P = 0.8944 − 0.1056 = 0.7888.</li><li>With n = 600 the standard error halves to 0.02 and the probability rises to about 0.988.</li></ol><p><strong>Answer:</strong> σp̄ = 0.04; P(0.35 ≤ p̄ ≤ 0.45) ≈ 0.789.</p></details><div class=\"def\"><b>Book vs lecture — Number of Vs of big data.</b> Book: Four Vs: volume, variety, veracity and velocity (section 7.9). Lecture: The hub records three: volume, velocity and variety (Lecture 2; question sfm-q0021 marks that triple correct). <b>For the course quiz answer with the lecture's three Vs; if an option includes veracity, recognise it from the textbook. Don't pick a three-V option that drops volume, velocity or variety.</b></div><div class=\"def\"><b>Book vs lecture — Selecting a random sample with software.</b> Book: Uses random-number tables, JMP, and Excel's =RAND() with a sort to shuffle rows. Lecture: The course teaches Excel and R; in R, sample(N, n) draws a simple random sample without replacement. <b>Know the idea (each possible sample equally likely, no repeats) rather than a specific tool's clicks.</b></div>"
    }
   ]
  },
  {
   "id": "summarise",
   "title": "Summarising data",
   "tag": "Topics 3–4 · Lectures 4, 5, 8",
   "lede": "Which table and which chart for which data type. Plus Simpson's paradox, which is the memorable one.",
   "topics": [
    {
     "t": "Tables and charts, by data type",
     "src": "L#4 · L#5 · L#8",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Categorical data</th><th>Quantitative data</th></tr></thead><tbody>\n   <tr><td><strong>Tables</strong></td><td>Frequency, relative frequency, percentage frequency, <strong>cross-tabulation</strong></td><td>Frequency, relative, percentage, <strong>cumulative</strong> frequency</td></tr>\n   <tr><td><strong>Charts</strong></td><td><strong>Bar chart</strong>, <strong>pie chart</strong>, side-by-side bar, stacked bar</td><td><strong>Histogram</strong>, <strong>scatter plot</strong></td></tr>\n  </tbody></table></div>\n  <ul>\n   <li><strong>Frequency distribution:</strong> categories must be <strong>mutually exclusive and non-overlapping</strong>.</li>\n   <li><strong>Relative frequency</strong> = frequency ÷ total. All relative frequencies sum to <strong>1.0</strong>; percentage frequencies to <strong>100%</strong>.</li>\n   <li><strong>Pie chart sector angle</strong> = relative frequency × <strong>360°</strong>. Best kept under <strong>5–6 categories</strong>.</li>\n   <li><strong>Histogram vs bar chart:</strong> a histogram is for continuous quantitative data, so <strong>adjacent classes have no gap between them</strong>.</li>\n   <li><strong>Cumulative frequency</strong> adds up preceding classes; the last class always equals the total, and cumulative percentage always reaches <strong>100%</strong>.</li>\n  </ul>\n  <h4>Distribution shapes</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Shape</th><th>Tail</th><th>His example</th></tr></thead><tbody>\n   <tr><td><strong>Symmetric</strong></td><td>Both sides mirror</td><td>Human heights</td></tr>\n   <tr><td><strong>Left-skewed</strong> (negative)</td><td>Longer tail on the <strong>left</strong></td><td>Exam scores — most cluster high, a few very low</td></tr>\n   <tr><td><strong>Right-skewed</strong> (positive)</td><td>Longer tail on the <strong>right</strong></td><td>Housing prices</td></tr>\n  </tbody></table></div><!--viz:sfm-bar-vs-histogram--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Two charts of the same 42 commuters. A bar chart of commute mode (Metro 18, Bus 12, Car 7, Walk 5) has separated bars; a histogram of commute time in 10-minute classes (4, 11, 14, 9, 4) has touching bars on a number line.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Bar chart or histogram? Look for the gaps</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 200\" role=\"img\" aria-label=\"Left: bar chart of commute mode with gaps between bars (Metro 18, Bus 12, Car 7, Walk 5). Right: histogram of commute minutes in 10-minute classes with bars touching (4, 11, 14, 9, 4).\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><text x=\"105\" y=\"22\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">Bar chart · categories</text><text x=\"325\" y=\"22\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">Histogram · classes</text><rect x=\"22\" y=\"54\" width=\"30\" height=\"106\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"37\" y=\"47\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">18</text><text x=\"37\" y=\"177\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">Metro</text><rect x=\"68\" y=\"89.3\" width=\"30\" height=\"70.7\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"83\" y=\"82.3\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">12</text><text x=\"83\" y=\"177\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">Bus</text><rect x=\"114\" y=\"118.8\" width=\"30\" height=\"41.2\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"129\" y=\"111.8\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">7</text><text x=\"129\" y=\"177\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">Car</text><rect x=\"160\" y=\"130.6\" width=\"30\" height=\"29.4\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"175\" y=\"123.6\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">5</text><text x=\"175\" y=\"177\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">Walk</text><path d=\"M14,160 L200,160\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><rect x=\"245\" y=\"136.4\" width=\"32\" height=\"23.6\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"261\" y=\"129.4\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">4</text><rect x=\"277\" y=\"95.2\" width=\"32\" height=\"64.8\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"293\" y=\"88.2\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">11</text><rect x=\"309\" y=\"77.6\" width=\"32\" height=\"82.4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"325\" y=\"70.6\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">14</text><rect x=\"341\" y=\"107\" width=\"32\" height=\"53\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"357\" y=\"100\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">9</text><rect x=\"373\" y=\"136.4\" width=\"32\" height=\"23.6\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"389\" y=\"129.4\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">4</text><path d=\"M237,160 L413,160\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M245,160 L245,164\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M277,160 L277,164\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M309,160 L309,164\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M341,160 L341,164\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M373,160 L373,164\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M405,160 L405,164\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"245\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><text x=\"309\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">20</text><text x=\"373\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">40</text><text x=\"405\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">50</text><text x=\"341\" y=\"195\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">minutes</text><text x=\"105\" y=\"195\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">gaps: no order or scale</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Categorical data gets separate bars; continuous classes touch because one class ends where the next begins.</figcaption></figure><!--/viz:sfm-bar-vs-histogram-->"
    },
    {
     "t": "Cross-tabulation and Simpson's paradox",
     "src": "L#4",
     "h": "\n  <p style=\"font-size:15px\"><strong>Cross-tabulation</strong> summarises two variables at once, in rows and columns. It works for any combination — categorical with categorical, categorical with quantitative, or quantitative with quantitative.</p>\n  <div class=\"warnbox\"><b>Row vs column percentages.</b> If you sum <em>across</em> rows, you must interpret row-wise. If you sum <em>down</em> columns, interpret column-wise. Mismatching the direction of calculation and interpretation produces wrong conclusions.</div>\n  <div class=\"def\"><b>Simpson's paradox:</b> a conclusion drawn from <b>aggregate</b> data can <b>completely reverse</b> when the data is broken into subgroups.</div>\n  <h4>Scatter diagrams and trend lines</h4>\n  <p style=\"font-size:14.5px\">Two quantitative variables plotted against each other; the <strong>trend line</strong> shows the general direction.</p>\n  <p style=\"font-size:14.5px\"><strong>Positive:</strong> both rise together, slope positive — interceptions vs points scored. <strong>Negative:</strong> y falls as x rises, slope negative — price vs quantity demanded. <strong>None:</strong> slope zero.</p>\n  <p style=\"font-size:14.5px\">A <strong>side-by-side bar chart</strong> compares categories in clusters. A <strong>stacked bar chart</strong> shows proportions inside a total — and with percentage frequencies every bar is the same height, which makes proportions easy to compare.</p><!--viz:sfm-simpson-couriers--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Courier A is on time 90% on city routes and 60% on rural routes, beating Courier B's 85% and 50%, yet overall A is 66% and B is 78%.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Simpson's paradox in one table</div><div class=\"scroller\"><table><thead><tr><th>On time</th><th>City routes</th><th>Rural routes</th><th>All routes</th></tr></thead><tbody><tr><td><b>Courier A</b></td><td style=\"font-family:var(--mono);background:var(--good-soft)\">45/50 = 90%</td><td style=\"font-family:var(--mono);background:var(--good-soft)\">120/200 = 60%</td><td style=\"font-family:var(--mono);background:var(--surface)\">165/250 = 66%</td></tr><tr><td><b>Courier B</b></td><td style=\"font-family:var(--mono);background:var(--surface)\">170/200 = 85%</td><td style=\"font-family:var(--mono);background:var(--surface)\">25/50 = 50%</td><td style=\"font-family:var(--mono);background:var(--clay-soft)\">195/250 = 78%</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin-top:8px\">The hidden variable is route type: 200 of A's 250 deliveries are rural (hard); 200 of B's are city (easy).</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">A wins inside every subgroup but loses in total, because the two couriers carry very different route mixes.</figcaption></figure><!--/viz:sfm-simpson-couriers-->"
    },
    {
     "t": "Textbook: Descriptive Statistics: Tabular and Graphical Displays",
     "src": "Anderson 14e ch2",
     "h": "<p>Raw data are hard to read, so this chapter shows how to condense them into tables and charts that reveal patterns. For one categorical variable it uses frequency, relative frequency and percent frequency distributions with bar and pie charts; for one quantitative variable it adds the rules for choosing classes, plus dot plots, histograms, cumulative distributions and stem-and-leaf displays. For two variables it builds crosstabulations with row and column percentages, warns that aggregated tables can reverse the conclusion of their parts (Simpson's paradox), and introduces scatter diagrams, trendlines, side-by-side and stacked bar charts. It ends with guidelines for clear graphics, choosing a display by purpose, and data dashboards that track key performance indicators. For a manager, the right display is often the fastest route from a spreadsheet to a decision.</p><!--viz:sfm-frequency-to-pie--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Frequency table for 40 coffee orders: Latte 14, Cappuccino 10, Espresso 8, Mocha 5, Tea 3, with relative frequency, percent and pie angle (126, 90, 72, 45 and 27 degrees).\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">From counts to relative frequency to pie angles</div><div class=\"scroller\"><table><thead><tr><th>Order</th><th>Frequency</th><th>Relative</th><th>Percent</th><th>Pie angle</th></tr></thead><tbody><tr><td>Latte</td><td style=\"font-family:var(--mono)\">14</td><td style=\"font-family:var(--mono)\">0.350</td><td style=\"font-family:var(--mono)\">35.0%</td><td style=\"font-family:var(--mono)\">126°</td></tr><tr><td>Cappuccino</td><td style=\"font-family:var(--mono)\">10</td><td style=\"font-family:var(--mono)\">0.250</td><td style=\"font-family:var(--mono)\">25.0%</td><td style=\"font-family:var(--mono)\">90°</td></tr><tr><td>Espresso</td><td style=\"font-family:var(--mono)\">8</td><td style=\"font-family:var(--mono)\">0.200</td><td style=\"font-family:var(--mono)\">20.0%</td><td style=\"font-family:var(--mono)\">72°</td></tr><tr><td>Mocha</td><td style=\"font-family:var(--mono)\">5</td><td style=\"font-family:var(--mono)\">0.125</td><td style=\"font-family:var(--mono)\">12.5%</td><td style=\"font-family:var(--mono)\">45°</td></tr><tr><td>Tea</td><td style=\"font-family:var(--mono)\">3</td><td style=\"font-family:var(--mono)\">0.075</td><td style=\"font-family:var(--mono)\">7.5%</td><td style=\"font-family:var(--mono)\">27°</td></tr><tr style=\"background:var(--blue-soft)\"><td><b>Total</b></td><td style=\"font-family:var(--mono)\">40</td><td style=\"font-family:var(--mono)\">1.000</td><td style=\"font-family:var(--mono)\">100%</td><td style=\"font-family:var(--mono)\">360°</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Divide by n for relative frequency, then multiply by 360° for the pie slice; the totals check your work (1, 100%, 360°).</figcaption></figure><!--/viz:sfm-frequency-to-pie--><!--viz:sfm-ogive--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Ogive of 35 delivery times in classes 10–15, 15–20, 20–25, 25–30, 30–35 minutes with frequencies 4, 9, 12, 7, 3. Cumulative percentages 11.4, 37.1, 71.4, 91.4, 100.0. Reading across from 50% gives about 21.9 minutes.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The ogive: cumulative percent, read sideways</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 240\" role=\"img\" aria-label=\"Ogive of 35 delivery times in classes 10–15, 15–20, 20–25, 25–30, 30–35 minutes with frequencies 4, 9, 12, 7, 3. Cumulative percentages 11.4, 37.1, 71.4, 91.4, 100.0. Reading across from 50% gives about 21.9 minutes.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M52,170 L420,170\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M52,170 L52,22\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"44\" y=\"174\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">0</text><text x=\"44\" y=\"139\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">25</text><path d=\"M52,135 L420,135\" style=\"stroke:var(--rule);stroke-width:1;fill:none\"/><text x=\"44\" y=\"104\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">50</text><path d=\"M52,100 L420,100\" style=\"stroke:var(--rule);stroke-width:1;fill:none\"/><text x=\"44\" y=\"69\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">75</text><path d=\"M52,65 L420,65\" style=\"stroke:var(--rule);stroke-width:1;fill:none\"/><text x=\"44\" y=\"34\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">100</text><path d=\"M52,30 L420,30\" style=\"stroke:var(--rule);stroke-width:1;fill:none\"/><path d=\"M60,170 L60,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"60\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text><path d=\"M128,170 L128,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"128\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">15</text><path d=\"M196,170 L196,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"196\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">20</text><path d=\"M264,170 L264,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"264\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">25</text><path d=\"M332,170 L332,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"332\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">30</text><path d=\"M400,170 L400,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"400\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">35</text><path d=\"M52,100 L221.5,100\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none;stroke-dasharray:4 4\"/><path d=\"M221.5,100 L221.5,170\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none;stroke-dasharray:4 4\"/><path d=\"M60,170 L128,154 L196,118 L264,70 L332,42 L400,30\" style=\"fill:none;stroke:var(--blue);stroke-width:2\"/><circle cx=\"60\" cy=\"170\" r=\"4\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"128\" cy=\"154\" r=\"4\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"196\" cy=\"118\" r=\"4\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"264\" cy=\"70\" r=\"4\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"332\" cy=\"42\" r=\"4\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"400\" cy=\"30\" r=\"4\" style=\"fill:var(--blue);stroke:none\"/><text x=\"60\" y=\"208\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">0%</text><text x=\"128\" y=\"208\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">11.4%</text><text x=\"196\" y=\"208\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">37.1%</text><text x=\"264\" y=\"208\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">71.4%</text><text x=\"332\" y=\"208\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">91.4%</text><text x=\"400\" y=\"208\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">100.0%</text><text x=\"227.5\" y=\"162\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">≈ 21.9</text><text x=\"236\" y=\"230\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">delivery time, minutes (upper class limit)</text><text x=\"60\" y=\"20\" style=\"fill:var(--ink-3);font-size:13px\">cumulative %</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Plot each cumulative % at the class's upper limit; the line always ends at 100%, and reading across from 50% estimates the median.</figcaption></figure><!--/viz:sfm-ogive--><!--viz:sfm-stem-leaf--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Stem-and-leaf display of 21 test scores from 41 to 93. Stems 4 to 9 hold 2, 4, 6, 5, 3 and 1 leaves; the 60s row is the longest.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Stem-and-leaf: a histogram that keeps every value</div><div style=\"font-family:var(--mono);font-size:15px;line-height:1.7;display:inline-block;padding:6px 12px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><div style=\"white-space:pre\">4 │ 1 7</div><div style=\"white-space:pre\">5 │ 2 5 5 8</div><div style=\"background:var(--blue-soft);white-space:pre\">6 │ 1 3 3 4 7 9</div><div style=\"white-space:pre\">7 │ 0 2 2 5 8</div><div style=\"white-space:pre\">8 │ 1 4 6</div><div style=\"white-space:pre\">9 │ 3</div></div><p style=\"font-size:13.5px;color:var(--ink-2);margin-top:8px\">21 test scores · stem = tens digit, leaf = units digit · 6 │ 1 3 3 4 7 9 means 61, 63, 63, 64, 67, 69</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Turn it sideways and the leaf rows are histogram bars, yet every original score can still be read back.</figcaption></figure><!--/viz:sfm-stem-leaf--><p><strong>Frequency, relative and percent frequency distributions</strong> — A frequency distribution counts the observations in each of several non-overlapping classes. Dividing each count by n gives the relative frequency; multiplying that by 100 gives the percent frequency. Frequencies sum to n, relative frequencies to 1.00 and percents to 100, apart from rounding.<br><span style=\"font-family:var(--mono)\">Relative frequency of a class = frequency of the class ÷ n</span><br><em>e.g.</em> 13 of 50 purchases were Pepsi: relative frequency 0.26, percent frequency 26%.</p><p><strong>Bar charts and pie charts</strong> — A bar chart puts category labels on one axis and frequency (or relative or percent frequency) on the other, with separated bars because categories are distinct; sorting bars from tallest to shortest makes rankings obvious. A pie chart splits a circle in proportion to relative frequencies. The book notes that many visualisation experts avoid pie charts because people judge areas poorly, and that a bar chart is usually the better choice. Classes with roughly 5% or less are often merged into an 'Other' class.<br><span style=\"font-family:var(--mono)\">Pie sector angle = relative frequency × 360°</span><br><em>e.g.</em> Relative frequency 0.38 gives a 136.8° sector.</p><p><strong>Choosing classes for quantitative data</strong> — Three decisions: the number of classes (generally 5 to 20, fewer for small data sets), a common class width, and class limits so each value falls in exactly one class. More classes means narrower width, so the two choices go together, and the final choice is a judgement made by trial and error. No single frequency distribution is 'the' correct one.<br><span style=\"font-family:var(--mono)\">Approximate class width = (largest value − smallest value) ÷ number of classes</span><br><em>e.g.</em> Audit times from 12 to 33 days with 5 classes: (33 − 12)/5 = 4.2, rounded up to 5 days.</p><p><strong>Class limits, midpoints and open-end classes</strong> — The lower class limit is the smallest value a class can hold and the upper limit the largest. Class width is the gap between successive lower limits. The class midpoint is halfway between a class's lower and upper limits. Limits follow the precision of the data (10.0–14.9 for data in tenths), and an open-end class such as '35 or more' can absorb a few extreme values.<br><span style=\"font-family:var(--mono)\">Class midpoint = (lower limit + upper limit) ÷ 2</span><br><em>e.g.</em> Classes 10–14, 15–19 have width 5 and midpoints 12 and 17.</p><p><strong>Dot plot</strong> — Each data value is a dot above a horizontal axis covering the range of the data; repeated values stack. It shows every value and is handy for comparing the distributions of two or more variables.</p><p><strong>Histogram and the shape of a distribution</strong> — A histogram draws a rectangle over each class with height equal to its frequency (or relative or percent frequency); adjacent rectangles touch to show that all values across the range are possible. Its main use is to show shape: skewed left (long left tail, e.g. exam scores), symmetric (heights, SAT scores) or skewed right (long right tail, e.g. house prices, salaries, purchase amounts, which are common in business data).</p><p><strong>Cumulative distributions</strong> — A cumulative frequency distribution gives the number of values less than or equal to each class's upper limit; cumulative relative and percent versions divide by n or convert to percentages. The last entry always equals n, 1.00 or 100%.<br><em>e.g.</em> Audit-time frequencies 4, 8, 5, 2, 1 give cumulative frequencies 4, 12, 17, 19, 20.</p><p><strong>Stem-and-leaf display</strong> — Leading digits form the stem to the left of a line; the last digit of each value is a leaf to the right. It shows rank order and shape at once, is easy to build by hand, and unlike a histogram keeps the actual values. A stretched display uses two stems per leading digit (leaves 0–4 and 5–9). A stated leaf unit (100, 10, 1, 0.1 …) tells you how to scale the digits back to approximate data values.</p><p><strong>Crosstabulation with row and column percentages</strong> — A crosstabulation counts observations for every combination of the classes of two variables; either variable may be categorical or quantitative, but a quantitative variable must first be grouped into classes. The margins give each variable's own frequency distribution; the value of the table lies in the interior cells, which show the relationship. Row percentages divide each cell by its row total; column percentages by its column total, and they answer different questions.</p><p><strong>Simpson's paradox and the hidden variable</strong> — Conclusions drawn from separate crosstabulations can reverse when the tables are added together into one aggregate table. The cause is a hidden variable that is spread unevenly across the groups being compared. Before concluding from aggregated data, check whether a subgroup breakdown tells a different story.<br><em>e.g.</em> The book's two judges: one has the higher overall upheld rate, yet the other has the higher rate in each court, because the first heard far more cases in the court where reversals are common.</p><p><strong>Scatter diagram and trendline</strong> — A scatter diagram plots two quantitative variables against each other, one on each axis. A trendline approximates the relationship: upward for a positive relationship, downward for a negative one, and no pattern when there is no apparent relationship. With time on the horizontal axis it becomes a time series plot.</p><p><strong>Side-by-side and stacked bar charts</strong> — Both extend the bar chart to two variables. A side-by-side bar chart places a group of bars for each category so values can be compared within and across groups. A stacked bar chart splits each bar into coloured segments; when built from column percentages every bar reaches 100%, which makes the composition easy to compare, though it can also show raw frequencies.</p><p><strong>Effective graphical displays and choosing one</strong> — Give a clear title, keep it simple (no 3-D when 2-D will do), label axes with units, use distinct colours and place any legend near the data. Choose by purpose: distribution (bar, pie, dot plot, histogram, stem-and-leaf), comparison (side-by-side and stacked bar charts) or relationship (scatter diagram and trendline).</p><p><strong>Data dashboards and KPIs</strong> — A data dashboard gathers visual displays together so managers can monitor key performance indicators (inventory on hand, daily sales, on-time delivery rate) at a glance, at operational, tactical or strategic level. Good dashboards inform rather than overwhelm: little scrolling, sparing colour, no needless 3-D, borders between charts.</p><p><strong>Building these displays in Excel</strong> — The book's Excel appendix uses Recommended Charts, which builds a bar chart and its frequency table (as a PivotTable) in one step for categorical data; a PivotTable/PivotChart to produce a grouped frequency distribution and histogram together; the Data Analysis ToolPak Histogram tool (needs a bin range, and the gap width set to 0% for a true histogram); and the built-in Statistic Chart histogram, which picks its own bins. PivotTables also build crosstabulations.</p><div class=\"card\"><strong>Case: Colgate-Palmolive detergent density</strong> <em>(Statistics in Practice: Colgate-Palmolive Company)</em><p>Cartons are filled by weight, so overly dense powder makes a full carton look underfilled. The company samples powder density regularly and summarises the readings in a frequency distribution and histogram so operators can see whether densities stay below the upper specification limit and act if they drift upward.</p><p><em>Lesson:</em> Frequency distributions and histograms as everyday quality-control tools.</p><p><em>Think:</em> Looking at a histogram of densities, what pattern would tell operators to take corrective action even before any carton breaches the limit?</p></div><div class=\"card\"><strong>Case: Two judges and Simpson's paradox</strong> <em>(Section 2.3: Judges Luckett and Kendall appeal verdicts)</em><p>Combined across both courts, one judge has the higher share of verdicts upheld on appeal. Split by court, the other judge has the higher upheld rate in each court. The reversal arises because the judges heard very different mixes of cases from the court where reversals are frequent.</p><p><em>Lesson:</em> Aggregated crosstabulations can hide a variable that reverses the conclusion.</p><p><em>Think:</em> Which variable is hidden in the aggregated table, and which view, aggregated or by court, should be used to compare the judges?</p></div><div class=\"card\"><strong>Case: Cincinnati Zoo dashboards</strong> <em>(Section 2.5: Data Visualization in Practice, Cincinnati Zoo and Botanical Garden)</em><p>The zoo built real-time dashboards, including a tablet version for managers on the grounds, tracking sales by location, visitor movement, customer spending and attendance against weather. Managers use them for staffing, stocking and advertising decisions, and the system is credited with higher revenue and lower marketing costs.</p><p><em>Lesson:</em> Dashboards turn many KPIs into quick operational decisions.</p><p><em>Think:</em> Name two KPIs a zoo manager would want on a phone-sized dashboard and the chart type you would use for each.</p></div><div class=\"card\"><strong>Case: Pelican Stores promotion</strong> <em>(Case Problem 1: Pelican Stores)</em><p>A women's apparel chain mails discount coupons to customers of its sister stores and records 100 credit-card transactions on one promotion day, noting customer type (promotional or regular), items, net sales, payment method, gender, marital status and age. Management wants tabular and graphical summaries to understand its customers and judge the promotion.</p><p><em>Lesson:</em> Choosing the right table or chart for each variable type, and crosstabulating customer type against other variables.</p><p><em>Think:</em> Which two-variable display would best show whether promotional customers spend more per transaction than regular ones?</p></div><details><summary>Worked problem: Building a frequency distribution for delivery times</summary><p>A Bengaluru cloud kitchen records 24 delivery times (minutes): 18, 22, 25, 31, 27, 19, 35, 42, 23, 28, 26, 33, 21, 29, 38, 24, 30, 27, 46, 25, 32, 20, 28, 36. Using 5 classes, build the frequency, relative frequency and cumulative frequency distributions and give the class midpoints. What share of deliveries took 35 minutes or less?</p><ol><li>Smallest value 18, largest 46. Approximate width = (46 − 18) ÷ 5 = 5.6, rounded up to 6 minutes.</li><li>Start at 18: classes 18–23, 24–29, 30–35, 36–41, 42–47 (each value fits exactly one class).</li><li>Count: 18–23 → 6; 24–29 → 9; 30–35 → 5; 36–41 → 2; 42–47 → 2. Total 24.</li><li>Relative frequencies (÷ 24): 0.250, 0.375, 0.208, 0.083, 0.083 (sum 1.00 allowing for rounding).</li><li>Cumulative frequencies: 6, 15, 20, 22, 24.</li><li>Midpoints: (18 + 23)/2 = 20.5, then 26.5, 32.5, 38.5, 44.5.</li><li>Deliveries ≤ 35 minutes = cumulative frequency of the 30–35 class = 20, so 20/24 = 0.833.</li></ol><p><strong>Answer:</strong> Frequencies 6, 9, 5, 2, 2; cumulative 6, 15, 20, 22, 24; about 83.3% of deliveries took 35 minutes or less. The long right tail (42 and 46 minutes) suggests mild right skew.</p></details><details><summary>Worked problem: Relative frequencies and pie-chart angles</summary><p>A Lucknow kirana store logs the app used for 80 UPI payments in a day: PhonePe 36, Google Pay 28, Paytm 10, others 6. Find each relative frequency, percent frequency and pie-chart sector angle, and say which chart the textbook would prefer for presenting this.</p><ol><li>Relative frequency = count ÷ 80: PhonePe 0.450, Google Pay 0.350, Paytm 0.125, others 0.075 (sum 1.000).</li><li>Percent frequency: 45%, 35%, 12.5%, 7.5%.</li><li>Sector angle = relative frequency × 360°: 0.450 × 360 = 162°; 0.350 × 360 = 126°; 0.125 × 360 = 45°; 0.075 × 360 = 27°. Check: 162 + 126 + 45 + 27 = 360°.</li><li>The book prefers a sorted bar chart (PhonePe, Google Pay, Paytm, others) because differences in bar length are easier to judge than differences in sector area.</li></ol><p><strong>Answer:</strong> Angles 162°, 126°, 45° and 27°; a sorted bar chart is the clearer display.</p></details><details><summary>Worked problem: Spotting Simpson's paradox in sales conversion</summary><p>Two sales executives each worked 200 leads. Asha: SME leads 40 converted out of 50, enterprise leads 30 out of 150. Bhavin: SME leads 120 out of 160, enterprise leads 5 out of 40. Who has the better overall conversion rate, and who is better within each segment? Explain any contradiction.</p><ol><li>Asha overall: (40 + 30)/200 = 70/200 = 35%.</li><li>Bhavin overall: (120 + 5)/200 = 125/200 = 62.5%. Aggregated, Bhavin looks far better.</li><li>SME segment: Asha 40/50 = 80%; Bhavin 120/160 = 75%. Asha is better.</li><li>Enterprise segment: Asha 30/150 = 20%; Bhavin 5/40 = 12.5%. Asha is better again.</li><li>The hidden variable is lead type: enterprise leads convert far less often, and Asha was given 150 of them against Bhavin's 40. Aggregation mixes skill with lead mix.</li></ol><p><strong>Answer:</strong> Bhavin wins on the aggregate (62.5% vs 35%), but Asha converts better in both segments (80% vs 75%, 20% vs 12.5%). This is Simpson's paradox; judge performance segment by segment.</p></details><div class=\"def\"><b>Book vs lecture — Pie charts.</b> Book: Treats the pie chart as a legitimate display for relative or percent frequencies but says many visualisation experts advise against it; a bar chart (ideally sorted) is usually superior, and 3-D pies add nothing. Lecture: Presents the pie chart alongside the bar chart as a standard categorical display, with the sector-angle formula and a rule of thumb to keep it to about 5–6 categories. <b>No conflict on the formula (relative frequency × 360°). If a question asks which display is better for comparing shares, answer with the book: the bar chart.</b></div><div class=\"def\"><b>Book vs lecture — Gaps in histograms.</b> Book: The usual convention is that histogram rectangles touch, because continuous data can take any value between classes; for discrete quantitative data that take only whole numbers, a separation between bars is also appropriate. Lecture: States that histograms have no gaps because the data are continuous, and contrasts this with bar charts, which have gaps. <b>For a quiz question on histogram versus bar chart, use the lecture's rule (no gaps in a histogram). Know the book's exception for discrete counts in case an analyse-level question raises it.</b></div>"
    }
   ]
  },
  {
   "id": "location",
   "title": "Measures of location",
   "tag": "Topic 4 · Lecture 5",
   "lede": "Five averages and two position measures. Knowing <em>when</em> to use each is what gets tested.",
   "topics": [
    {
     "t": "The five averages",
     "src": "L#5",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Measure</th><th>Formula</th><th>Use when</th></tr></thead><tbody>\n   <tr><td><strong>Mean</strong></td><td>x&#772; = &Sigma;x<sub>i</sub> / n</td><td>Data is reasonably symmetric. <strong>Affected by extreme values</strong></td></tr>\n   <tr><td><strong>Median</strong></td><td>Middle value when ordered. Even n → average the two middle values</td><td><strong>Outliers present</strong> or the distribution is skewed — placements, property, income</td></tr>\n   <tr><td><strong>Mode</strong></td><td>The most frequent value</td><td><strong>Categorical data</strong> — often the only measure available. Can be uni-, bi- or multimodal</td></tr>\n   <tr><td><strong>Weighted mean</strong></td><td>x&#772;<sub>w</sub> = &Sigma;(w<sub>i</sub>x<sub>i</sub>) / &Sigma;w<sub>i</sub></td><td>Observations have <strong>different importance</strong> — GPA with credit hours, wages with hours worked</td></tr>\n   <tr><td><strong>Geometric mean</strong></td><td>(x<sub>1</sub> × x<sub>2</sub> × … × x<sub>n</sub>)<sup>1/n</sup></td><td><strong>Rates of change over successive periods</strong> — multiplicative, not additive. Returns, growth rates, bacteria</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>Geometric mean is the one people miss.</b> Use it when each observation <em>depends on the previous one</em> — compounding. Using the arithmetic mean on returns gives a misleading answer.</div>\n  <p style=\"font-size:14.5px\">His worked contrast: apartment rents with a <strong>median of 575 against a mean of 590.8</strong> — the median is the stabler figure because extreme rents drag the mean.</p><!--viz:sfm-mean-pulled--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Dot plot of nine rents (12, 14, 15, 15, 16, 18, 19, 21, 60 thousand rupees). The median stays at 16 while the mean moves to 21.1; the mode is 15.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">One extreme value drags the mean, not the median</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 186\" role=\"img\" aria-label=\"Dot plot of nine monthly rents in thousand rupees: 12, 14, 15, 15, 16, 18, 19, 21, 60. The median is 16; the mean is 21.1, pulled right by the 60.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M22,128 L418,128\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M30,128 L30,133\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"30\" y=\"148\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text><path d=\"M103.1,128 L103.1,133\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"103.1\" y=\"148\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">20</text><path d=\"M176.2,128 L176.2,133\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"176.2\" y=\"148\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">30</text><path d=\"M249.2,128 L249.2,133\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"249.2\" y=\"148\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">40</text><path d=\"M322.3,128 L322.3,133\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"322.3\" y=\"148\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">50</text><path d=\"M395.4,128 L395.4,133\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"395.4\" y=\"148\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">60</text><circle cx=\"44.6\" cy=\"119\" r=\"5\" style=\"fill:var(--ink-2);stroke:none\"/><circle cx=\"59.2\" cy=\"119\" r=\"5\" style=\"fill:var(--ink-2);stroke:none\"/><circle cx=\"66.5\" cy=\"119\" r=\"5\" style=\"fill:var(--ink-2);stroke:none\"/><circle cx=\"66.5\" cy=\"107\" r=\"5\" style=\"fill:var(--ink-2);stroke:none\"/><circle cx=\"73.8\" cy=\"119\" r=\"5\" style=\"fill:var(--ink-2);stroke:none\"/><circle cx=\"88.5\" cy=\"119\" r=\"5\" style=\"fill:var(--ink-2);stroke:none\"/><circle cx=\"95.8\" cy=\"119\" r=\"5\" style=\"fill:var(--ink-2);stroke:none\"/><circle cx=\"110.4\" cy=\"119\" r=\"5\" style=\"fill:var(--ink-2);stroke:none\"/><circle cx=\"395.4\" cy=\"119\" r=\"5\" style=\"fill:var(--ink-2);stroke:none\"/><path d=\"M73.8,46 L73.8,127\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><text x=\"73.8\" y=\"38\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">median 16</text><path d=\"M111.2,74 L111.2,127\" style=\"stroke:var(--clay);stroke-width:2;fill:none;stroke-dasharray:5 4\"/><text x=\"99.2\" y=\"66\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">mean 21.1</text><text x=\"395.4\" y=\"102\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">outlier</text><text x=\"212.7\" y=\"174\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">monthly rent, ₹ thousand</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Remove the 60 and the mean falls to 16.25 while the median barely moves (15.5): use the median for skewed money data.</figcaption></figure><!--/viz:sfm-mean-pulled-->"
    },
    {
     "t": "Percentiles and quartiles",
     "src": "L#5",
     "h": "\n  <div class=\"def\">The <b>p-th percentile</b> is a value such that at least <b>p percent</b> of items are at or below it.</div>\n  <p style=\"font-size:15px\"><strong>Location = (p / 100) × (n + 1)</strong></p>\n  <p style=\"font-size:14.5px\">Worked: for 70 apartment rents, the 80th percentile sits at <strong>(80/100) × 71 = 56.8</strong> — between the 56th and 57th values once sorted.</p>\n  <div class=\"scroller\"><table><thead><tr><th>Quartile</th><th>Equals</th></tr></thead><tbody>\n   <tr><td><strong>Q1</strong></td><td>25th percentile</td></tr>\n   <tr><td><strong>Q2</strong></td><td><strong>50th percentile = the median</strong></td></tr>\n   <tr><td><strong>Q3</strong></td><td>75th percentile</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">At the 99th percentile, only <strong>1%</strong> of values are above you.</p><!--viz:sfm-percentile-strip--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Sorted data 3, 5, 7, 8, 10, 12, 13, 15, 18, 20, 26 in numbered boxes. With n = 11, Q1, Q2 and Q3 fall exactly on positions 3, 6 and 9; the 80th percentile falls at 9.6 and is interpolated to 19.2.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Finding a percentile by its position</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 196\" role=\"img\" aria-label=\"Eleven sorted values in boxes numbered 1 to 11. Q1 is at position 3 (value 7), the median at 6 (12), Q3 at 9 (18). The 80th percentile is at position 9.6, between 18 and 20, so 19.2.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><text x=\"50\" y=\"37\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">1</text><rect x=\"33\" y=\"46\" width=\"34\" height=\"32\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"50\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">3</text><text x=\"84\" y=\"37\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">2</text><rect x=\"67\" y=\"46\" width=\"34\" height=\"32\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"84\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">5</text><text x=\"118\" y=\"37\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">3</text><rect x=\"101\" y=\"46\" width=\"34\" height=\"32\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"118\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">7</text><text x=\"152\" y=\"37\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">4</text><rect x=\"135\" y=\"46\" width=\"34\" height=\"32\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"152\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">8</text><text x=\"186\" y=\"37\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">5</text><rect x=\"169\" y=\"46\" width=\"34\" height=\"32\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"186\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">10</text><text x=\"220\" y=\"37\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">6</text><rect x=\"203\" y=\"46\" width=\"34\" height=\"32\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"220\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">12</text><text x=\"254\" y=\"37\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">7</text><rect x=\"237\" y=\"46\" width=\"34\" height=\"32\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"254\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">13</text><text x=\"288\" y=\"37\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">8</text><rect x=\"271\" y=\"46\" width=\"34\" height=\"32\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"288\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">15</text><text x=\"322\" y=\"37\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">9</text><rect x=\"305\" y=\"46\" width=\"34\" height=\"32\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"322\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">18</text><text x=\"356\" y=\"37\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text><rect x=\"339\" y=\"46\" width=\"34\" height=\"32\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"356\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">20</text><text x=\"390\" y=\"37\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">11</text><rect x=\"373\" y=\"46\" width=\"34\" height=\"32\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"390\" y=\"67\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-family:var(--mono)\">26</text><text x=\"118\" y=\"98\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">Q1</text><text x=\"220\" y=\"98\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">Q2</text><text x=\"322\" y=\"98\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">Q3</text><path d=\"M342.4,80 L342.4,114\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none\"/><path d=\"M338.4,87 L342.4,80 L346.4,87 Z\" style=\"fill:var(--clay);stroke:none\"/><text x=\"342.4\" y=\"132\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">P80 = 19.2</text><text x=\"20\" y=\"162\" style=\"fill:var(--ink-2);font-size:13px\">Lp = (p / 100) × (n + 1), n = 11 → L80 = 9.6</text><text x=\"20\" y=\"184\" style=\"fill:var(--ink-2);font-size:13px\">position 9.6 → 18 + 0.6 × (20 − 18) = 19.2</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">A whole-number position is a data value; a fractional position means go that fraction of the way to the next value.</figcaption></figure><!--/viz:sfm-percentile-strip-->"
    },
    {
     "t": "Textbook: Descriptive Statistics: Numerical Measures",
     "src": "Anderson 14e ch3",
     "h": "<p>This chapter replaces tables and charts with single numbers that summarise a data set. Measures of location (mean, median, mode, weighted mean, geometric mean, percentiles, quartiles) say where the data sit; measures of variability (range, IQR, variance, standard deviation, coefficient of variation) say how spread out they are; skewness describes shape. z-scores, Chebyshev's theorem and the empirical rule use the mean and standard deviation to locate values and flag outliers, alongside the IQR-based fences of the box plot. Covariance and the correlation coefficient then measure the linear association between two variables. For managers, choosing the right summary matters: the median resists extreme incomes, the geometric mean gives honest growth rates, and the standard deviation is often the real business risk.</p><!--viz:sfm-geomean-growth--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"₹100 grows 10%, falls 20%, grows 20%, ending at ₹105.60. The arithmetic mean return of 3.33% would predict ₹110.34; the geometric mean of 1.83% reproduces ₹105.60 exactly.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Why growth rates need the geometric mean</div><div class=\"scroller\"><table><thead><tr><th>Year</th><th>Return</th><th>Growth factor</th><th>Value (₹)</th></tr></thead><tbody><tr><td>start</td><td></td><td></td><td style=\"font-family:var(--mono)\">100.00</td></tr><tr><td>1</td><td style=\"font-family:var(--mono)\">+10%</td><td style=\"font-family:var(--mono)\">1.10</td><td style=\"font-family:var(--mono)\">110.00</td></tr><tr><td>2</td><td style=\"font-family:var(--mono)\">-20%</td><td style=\"font-family:var(--mono)\">0.80</td><td style=\"font-family:var(--mono)\">88.00</td></tr><tr><td>3</td><td style=\"font-family:var(--mono)\">+20%</td><td style=\"font-family:var(--mono)\">1.20</td><td style=\"font-family:var(--mono)\">105.60</td></tr><tr style=\"background:var(--bad-soft)\"><td colspan=\"2\">Arithmetic mean 3.33%</td><td style=\"font-family:var(--mono)\">1.0333³</td><td style=\"font-family:var(--mono)\">110.34 ✗</td></tr><tr style=\"background:var(--good-soft)\"><td colspan=\"2\">Geometric mean 1.83%</td><td style=\"font-family:var(--mono)\">1.0183³</td><td style=\"font-family:var(--mono)\">105.60 ✓</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin-top:8px;font-family:var(--mono)\">x̄g = (1.10 × 0.80 × 1.20)^(1/3) = 1.0183</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Returns compound by multiplying, so average the growth factors by multiplying too.</figcaption></figure><!--/viz:sfm-geomean-growth--><p><strong>Sample statistics vs population parameters</strong> — A measure computed from a sample is a sample statistic; the same measure for a whole population is a population parameter. The notation changes accordingly: x̄, s², s, sxy and rxy for samples; μ, σ², σ, σxy and ρxy for populations. In inference a sample statistic serves as the point estimator of its parameter.</p><p><strong>Mean (and trimmed mean)</strong> — The mean is the sum of the values divided by their number, and acts like the balance point of a dot plot, which is why one extreme value drags it. A trimmed mean drops a set percentage of the smallest and largest values before averaging; for a 5% trimmed mean of 12 values, 0.05 × 12 = 0.6 rounds to 1, so one value is removed from each end.<br><span style=\"font-family:var(--mono)\">x̄ = Σxᵢ / n (sample);  μ = Σxᵢ / N (population)</span><br><em>e.g.</em> Class sizes 46, 54, 42, 46, 32 have mean 44; raising 54 to 114 lifts the mean by 60/5 = 12, to 56.</p><p><strong>Weighted mean</strong> — When observations differ in importance, each is multiplied by a weight and the total divided by the sum of the weights. The weights must reflect the application: credit hours for a GPA, kilograms or rupees for an average purchase price. Using the plain mean in such cases misleads.<br><span style=\"font-family:var(--mono)\">x̄ = Σwᵢxᵢ / Σwᵢ</span><br><em>e.g.</em> Raw material bought at different prices in different quantities: the quantity-weighted mean is the true average cost per kilogram.</p><p><strong>Median and mode</strong> — The median is the middle value of the sorted data (the average of the two middle values when n is even); it ignores extremes and is the usual summary for incomes and property values. The mode is the most frequent value; data can be bimodal or multimodal, and with more than two modes the mode is rarely reported.</p><p><strong>Geometric mean and growth factors</strong> — For a process that compounds (returns, growth rates, population changes) the arithmetic mean of percentage changes overstates the typical rate. Convert each period's change to a growth factor (1 + rate), take the nth root of their product, and subtract 1. It works for periods of any length. Excel: GEOMEAN on the growth factors, or POWER(product, 1/n).<br><span style=\"font-family:var(--mono)\">x̄g = (x₁ × x₂ × … × xₙ)^(1/n)</span><br><em>e.g.</em> Returns of +20% then −20%: growth factors 1.2 and 0.8, x̄g = √0.96 = 0.980, so about −2.0% a year, not 0%.</p><p><strong>Percentiles and quartiles: the book's method</strong> — Sort the data, find the location Lp = (p/100)(n + 1), then interpolate between the values on either side of that position. Quartiles are the 25th, 50th and 75th percentiles. This matches Excel's PERCENTILE.EXC and QUARTILE.EXC (and R's quantile(x, type = 6)); Excel's PERCENTILE.INC/QUARTILE.INC and R's default quantile() use a different location and can give different answers for small samples. Quintiles and deciles are other common percentiles.<br><span style=\"font-family:var(--mono)\">Lp = (p / 100)(n + 1)</span><br><em>e.g.</em> n = 12 salaries, 80th percentile: L = 0.8 × 13 = 10.4, so value 10 plus 0.4 of the gap to value 11.</p><div class=\"card\"><strong>Case: Small Fry Design receivables</strong> <em>(Statistics in Practice: Small Fry Design)</em><p>An infant-toy importer manages cash flow by tracking the age of unpaid invoices. Its targets cap the average invoice age and limit the share of receivables more than 60 days old. A summary giving the mean, median and mode of invoice age, plus the overdue share, shows management the receivables are under control.</p><p><em>Lesson:</em> Mean, median and mode answer different questions about the same data.</p><p><em>Think:</em> The mean invoice age exceeds the median. What does that suggest about the shape of the distribution, and which invoices should the credit team chase first?</p></div><div class=\"card\"><strong>Case: The broker's average return</strong> <em>(Section 3.1: mutual fund returns and the geometric mean)</em><p>Over ten years of mixed gains and losses, the arithmetic mean of a fund's annual returns is about 5%, but compounding the actual growth factors shows the true average growth rate is under 3% a year. A broker quoting the arithmetic figure would badly overstate what an investor actually earned.</p><p><em>Lesson:</em> Use the geometric mean of growth factors for multiplicative processes.</p><p><em>Think:</em> An investor put ₹1 lakh in at the start. Which average, applied for ten years, reproduces the actual closing balance, and why does the other one not?</p></div><div class=\"card\"><strong>Case: Grogan Oil call-centre dashboard</strong> <em>(Section 3.6: Grogan Oil IT call center data dashboard)</em><p>An IT help desk adds summary statistics, box plots by problem type and target lines (a 10-minute mean target, a 15-minute maximum) to its dashboard. Email cases show the widest box and an outlier beyond the limit, pointing the manager to investigate why email problems are so variable.</p><p><em>Lesson:</em> Numerical measures give dashboards benchmarks; box plots reveal variability that means hide.</p><p><em>Think:</em> All three problem types beat the 10-minute mean target. Why is the manager still concerned about email cases?</p></div><details><summary>Worked problem: Quartiles, IQR and outliers in flat rents</summary><p>Monthly rents (₹ thousand) for 10 two-bedroom flats in Pune: 18, 22, 25, 21, 30, 27, 24, 55, 20, 26. Using the textbook's percentile method, find Q1, the median, Q3 and the 90th percentile; then the IQR, the box-plot limits, and whether ₹55k is an outlier by the IQR rule and by the z-score rule (x̄ = 26.8, s = 10.53). What would Excel's QUARTILE.INC report for Q1 and Q3?</p><ol><li>Sort: 18, 20, 21, 22, 24, 25, 26, 27, 30, 55 (n = 10).</li><li>Q1: L = 0.25 × 11 = 2.75 → 20 + 0.75(21 − 20) = 20.75.</li><li>Median: L = 0.50 × 11 = 5.5 → 24 + 0.5(25 − 24) = 24.5.</li><li>Q3: L = 0.75 × 11 = 8.25 → 27 + 0.25(30 − 27) = 27.75.</li><li>90th percentile: L = 0.90 × 11 = 9.9 → 30 + 0.9(55 − 30) = 52.5.</li><li>IQR = 27.75 − 20.75 = 7. Limits: 20.75 − 1.5(7) = 10.25 and 27.75 + 1.5(7) = 38.25.</li><li>55 &gt; 38.25, so ₹55k is an outlier by the IQR rule.</li><li>z = (55 − 26.8)/10.53 ≈ 2.68. Since |z| &lt; 3, it is not an outlier by the z-score rule; the extreme value itself inflates s.</li><li>QUARTILE.INC locates Q1 at 1 + 0.25 × 9 = 3.25 → 21.25 and Q3 at 1 + 0.75 × 9 = 7.75 → 26.75, different from the book's 20.75 and 27.75. QUARTILE.EXC reproduces the book.</li></ol><p><strong>Answer:</strong> Q1 = 20.75, median = 24.5, Q3 = 27.75, P90 = 52.5 (₹ thousand); IQR = 7, limits 10.25 and 38.25. ₹55k is an outlier by the IQR rule but not by |z| &gt; 3. QUARTILE.INC would give 21.25 and 26.75.</p></details><details><summary>Worked problem: Comparing two filling machines</summary><p>Machine A fills 500 ml bottles; a sample gives 498, 502, 500, 497, 503 ml. Machine B fills 1-litre bottles; a sample gives 1004, 995, 1000, 992, 1009 ml. Compute each sample's variance, standard deviation and coefficient of variation. Which machine is more consistent relative to its fill size? What is the z-score of B's 1009 ml bottle?</p><ol><li>A: mean = 2500/5 = 500. Deviations −2, 2, 0, −3, 3 (sum 0). Squares 4, 4, 0, 9, 9 → Σ = 26.</li><li>A: s² = 26/(5 − 1) = 6.5 ml²; s = √6.5 = 2.55 ml; CV = 2.55/500 × 100 = 0.51%.</li><li>B: mean = 5000/5 = 1000. Deviations 4, −5, 0, −8, 9 (sum 0). Squares 16, 25, 0, 64, 81 → Σ = 186.</li><li>B: s² = 186/4 = 46.5 ml²; s = √46.5 = 6.82 ml; CV = 6.82/1000 × 100 = 0.68%.</li><li>B has the larger absolute and relative spread; A is more consistent (lower CV).</li><li>z for 1009 ml = (1009 − 1000)/6.82 = 1.32 standard deviations above B's mean.</li><li>If these five bottles were the entire population, the variances would divide by N = 5: 5.2 and 37.2.</li></ol><p><strong>Answer:</strong> A: s² = 6.5, s = 2.55 ml, CV = 0.51%. B: s² = 46.5, s = 6.82 ml, CV = 0.68%. Machine A is more consistent; B's 1009 ml bottle has z ≈ 1.32.</p></details><details><summary>Worked problem: Weighted average price and compound growth</summary><p>(a) A rice trader buys basmati in three lots: 120 quintals at ₹3,600, 80 quintals at ₹3,900 and 200 quintals at ₹3,450 per quintal. Find the true average price per quintal and compare it with the simple mean of the three prices. (b) A mutual fund returned +18%, −12%, +25% and +6% over four years. Find its mean annual growth rate and the value of ₹1,00,000 at the end.</p><ol><li>(a) Σwᵢxᵢ = 120(3600) + 80(3900) + 200(3450) = 4,32,000 + 3,12,000 + 6,90,000 = 14,34,000.</li><li>Σwᵢ = 120 + 80 + 200 = 400 quintals; weighted mean = 14,34,000/400 = ₹3,585 per quintal.</li><li>Simple mean = (3600 + 3900 + 3450)/3 = ₹3,650, which overstates the cost because the cheapest lot was the largest.</li><li>(b) Growth factors: 1.18, 0.88, 1.25, 1.06. Product = 1.18 × 0.88 × 1.25 × 1.06 = 1.37588.</li><li>Geometric mean = 1.37588^(1/4) = 1.08304, so the mean annual growth rate is 8.30%.</li><li>Final value = 1,00,000 × 1.37588 = ₹1,37,588 (equivalently 1,00,000 × 1.08304⁴).</li><li>The arithmetic mean of the returns, (18 − 12 + 25 + 6)/4 = 9.25%, would wrongly imply 1,00,000 × 1.0925⁴ ≈ ₹1,42,458.</li></ol><p><strong>Answer:</strong> (a) ₹3,585 per quintal (simple mean ₹3,650 is misleading). (b) Mean growth 8.30% a year; ₹1,00,000 grows to ₹1,37,588.</p></details><details><summary>Worked problem: Covariance and correlation for ad spend</summary><p>A Jaipur jewellery shop records weekly social-media ad spend x (₹ thousand) and sales y (₹ lakh) for five weeks: (2, 24), (3, 30), (5, 33), (6, 40), (9, 48). Compute the sample covariance and the correlation coefficient and interpret them.</p><ol><li>x̄ = 25/5 = 5; ȳ = 175/5 = 35.</li><li>x deviations: −3, −2, 0, 1, 4. y deviations: −11, −5, −2, 5, 13.</li><li>Products: 33, 10, 0, 5, 52 → Σ(xᵢ − x̄)(yᵢ − ȳ) = 100.</li><li>sxy = 100/(5 − 1) = 25.</li><li>Σ(xᵢ − x̄)² = 9 + 4 + 0 + 1 + 16 = 30 → sx = √(30/4) = 2.739.</li><li>Σ(yᵢ − ȳ)² = 121 + 25 + 4 + 25 + 169 = 344 → sy = √(344/4) = 9.274.</li><li>r = 25/(2.739 × 9.274) = 25/25.40 = 0.984.</li><li>Interpretation: a very strong positive linear association. It does not prove ads cause sales (festival weeks could drive both).</li></ol><p><strong>Answer:</strong> sxy = 25 (₹ thousand × ₹ lakh), r ≈ 0.98: strong positive linear association, not proof of causation.</p></details><div class=\"def\"><b>Book vs lecture — Coefficient of variation units.</b> Book: CV = (standard deviation ÷ mean) × 100%, reported as a percentage (e.g. 18.2%). Lecture: CV = s / x̄ as a plain ratio; the supplier example gives CVs of 1.0 and 0.2. <b>Same idea, different scaling: 0.2 and 20% are the same CV. Match the form of the answer options; if options are percentages, multiply by 100.</b></div><div class=\"def\"><b>Book vs lecture — Skewness formula.</b> Book: Sample skewness = [n / ((n − 1)(n − 2))] Σ((xᵢ − x̄)/s)³, the version Excel's SKEW uses; the book stresses software computes it. Lecture: Skewness = Σ[(xᵢ − x̄)/s]³ / n. <b>For the quiz, the sign and its link to mean versus median is what matters. If a calculation is required, use the lecture formula; expect small numerical differences from Excel's SKEW.</b></div><div class=\"def\"><b>Book vs lecture — Quartiles computed in Excel and R.</b> Book: Uses Lp = (p/100)(n + 1) and says this matches Excel's PERCENTILE.EXC and QUARTILE.EXC. Lecture: Teaches the same (n + 1) location by hand, and the course uses Excel and R. Excel's QUARTILE.INC/PERCENTILE.INC and R's default quantile() use a different location and give different small-sample answers. <b>Hand calculations: use (n + 1). In Excel use the .EXC functions; in R use quantile(x, probs, type = 6) to match the lecture and book.</b></div><div class=\"def\"><b>Book vs lecture — Third band of the empirical rule.</b> Book: States about 68% and 95% within 1 and 2 standard deviations, and 'almost all' within 3; its figure shows 68.26%, 95.44% and 99.74%. Lecture: Gives 68%, 95% and 99.7% (and 68.26%, 95.44%, 99.72% in the distributions lecture). <b>Use 68–95–99.7 in the quiz; treat 'almost all' and 99.72–99.74% as the same statement.</b></div>"
    }
   ]
  },
  {
   "id": "spread",
   "title": "Measures of spread &amp; distribution shape",
   "tag": "Topic 5 · Lecture 6 · heaviest topic",
   "lede": "Formula-dense and therefore very examinable: variance, CV, z-scores, Chebyshev, the empirical rule, outliers and box plots.",
   "topics": [
    {
     "t": "Measures of spread",
     "src": "L#6 · formula-dense",
     "h": "\n  <p style=\"font-size:15px\">Location tells you the centre but nothing about consistency — and in business, <strong>variability is usually the thing you care about</strong>. Delivery in 10 minutes here and an hour there is a problem even if the average looks fine.</p>\n  <div class=\"scroller\"><table><thead><tr><th>Measure</th><th>Formula</th><th>Note</th></tr></thead><tbody>\n   <tr><td><strong>Range</strong></td><td>Maximum − minimum</td><td>Simple, but <strong>highly sensitive to extremes</strong> and uses only two values</td></tr>\n   <tr><td><strong>Interquartile range</strong></td><td><strong>IQR = Q3 − Q1</strong></td><td>The <strong>middle 50%</strong>. Ignores the bottom and top quarters, so outliers do not distort it</td></tr>\n   <tr><td><strong>Variance</strong> (sample)</td><td>&Sigma;(x<sub>i</sub> − x&#772;)&sup2; / <strong>(n − 1)</strong></td><td>Uses <strong>every</strong> data point</td></tr>\n   <tr><td><strong>Variance</strong> (population)</td><td>&Sigma;(x<sub>i</sub> − μ)&sup2; / <strong>n</strong></td><td>Note the denominator difference</td></tr>\n   <tr><td><strong>Standard deviation</strong></td><td>&radic;variance</td><td>In the <strong>same units as the data</strong>, so more interpretable</td></tr>\n   <tr><td><strong>Coefficient of variation</strong></td><td><strong>CV = s / x&#772;</strong></td><td>Compares variability across datasets with <strong>different means or units</strong>. Lower = more consistent</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>Why square the deviations?</b> Otherwise positive and negative deviations cancel and the variance would be zero even when the data varies. And <b>sample variance divides by n − 1</b>, not n.</div>\n  <p style=\"font-size:14.5px\"><strong>His CV example:</strong> two suppliers both average 5 days. Supplier A has σ = 5, Supplier B has σ = 1. CV of A = <strong>1.0</strong>; CV of B = <strong>0.2</strong>. <strong>B is more reliable</strong>, even though the means are identical.</p><!--viz:sfm-same-mean-spread--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Delivery days for two suppliers with the same mean of 5 (dashed line). Supplier A: 1, 2, 5, 8, 9 (s = 3.54, CV = 0.71). Supplier B: 4, 5, 5, 5, 6 (s = 0.71, CV = 0.14).\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Same average, very different reliability</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 196\" role=\"img\" aria-label=\"Two dot plots of delivery days on the same axis. Supplier A: 1, 2, 5, 8, 9. Supplier B: 4, 5, 5, 5, 6. Both have mean 5; A has s = 3.54, B has s = 0.71.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M220,22 L220,160\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none;stroke-dasharray:4 4\"/><text x=\"20\" y=\"30\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">Supplier A</text><text x=\"420\" y=\"30\" text-anchor=\"end\" style=\"fill:var(--ink-2);font-size:13px\">s = 3.54 · CV = 0.71</text><path d=\"M30,70 L410,70\" style=\"stroke:var(--rule);stroke-width:1.5;fill:none\"/><circle cx=\"68\" cy=\"62\" r=\"5\" style=\"fill:var(--clay);stroke:none\"/><circle cx=\"106\" cy=\"62\" r=\"5\" style=\"fill:var(--clay);stroke:none\"/><circle cx=\"220\" cy=\"62\" r=\"5\" style=\"fill:var(--clay);stroke:none\"/><circle cx=\"334\" cy=\"62\" r=\"5\" style=\"fill:var(--clay);stroke:none\"/><circle cx=\"372\" cy=\"62\" r=\"5\" style=\"fill:var(--clay);stroke:none\"/><text x=\"20\" y=\"96\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">Supplier B</text><text x=\"420\" y=\"96\" text-anchor=\"end\" style=\"fill:var(--ink-2);font-size:13px\">s = 0.71 · CV = 0.14</text><path d=\"M30,136 L410,136\" style=\"stroke:var(--rule);stroke-width:1.5;fill:none\"/><circle cx=\"182\" cy=\"128\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"220\" cy=\"128\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"220\" cy=\"117\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"220\" cy=\"106\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"258\" cy=\"128\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><path d=\"M30,160 L410,160\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M30,160 L30,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"30\" y=\"180\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><path d=\"M68,160 L68,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M106,160 L106,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"106\" y=\"180\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">2</text><path d=\"M144,160 L144,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M182,160 L182,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"182\" y=\"180\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">4</text><path d=\"M220,160 L220,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M258,160 L258,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"258\" y=\"180\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">6</text><path d=\"M296,160 L296,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M334,160 L334,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"334\" y=\"180\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">8</text><path d=\"M372,160 L372,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M410,160 L410,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"410\" y=\"180\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The mean cannot tell these apart; the standard deviation can. Lower CV = more consistent.</figcaption></figure><!--/viz:sfm-same-mean-spread-->"
    },
    {
     "t": "Shape, z-scores and the two rules",
     "src": "L#6",
     "h": "\n  <h4>Skewness</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Skew</th><th>Tail</th><th>Relationship</th></tr></thead><tbody>\n   <tr><td><strong>Negative (left)</strong></td><td>Extends left</td><td><strong>Median &gt; mean</strong></td></tr>\n   <tr><td><strong>Zero</strong></td><td>Symmetric</td><td><strong>Mean = median</strong></td></tr>\n   <tr><td><strong>Positive (right)</strong></td><td>Extends right</td><td><strong>Mean &gt; median</strong></td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">Formula: <strong>&Sigma;[(x<sub>i</sub> − x&#772;)/s]&sup3; / n</strong>. In placement data most students cluster lower with a few very high packages — which is why the <strong>median</strong> is the more representative figure.</p>\n  <h4>Z-score</h4>\n  <div class=\"def\"><b>z = (x<sub>i</sub> − x&#772;) / s</b> — how many standard deviations a value sits from the mean. Also called the <b>standardised value</b>.</div>\n  <p style=\"font-size:14.5px\">z &lt; 0 below the mean, z = 0 at it, z &gt; 0 above. It creates a <strong>common metric</strong>: a rent of 500 where mean = 600 and SD = 100, and a rent of 70 where mean = 120 and SD = 50, both give z = −1 — identically positioned within their own distributions.</p>\n  <h4>Chebyshev's theorem vs the empirical rule</h4>\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Chebyshev</th><th>Empirical rule</th></tr></thead><tbody>\n   <tr><td><strong>Applies to</strong></td><td><strong>Any distribution shape</strong></td><td><strong>Bell-shaped (normal) data only</strong></td></tr>\n   <tr><td><strong>Statement</strong></td><td><strong>At least 1 − 1/z&sup2;</strong> of values lie within z standard deviations, for z &gt; 1</td><td>Fixed percentages</td></tr>\n   <tr><td><strong>±2σ</strong></td><td>At least <strong>75%</strong></td><td>About <strong>95%</strong></td></tr>\n   <tr><td><strong>±3σ</strong></td><td>At least <strong>89%</strong></td><td>About <strong>99.7%</strong></td></tr>\n   <tr><td><strong>±1σ</strong></td><td>— (needs z &gt; 1)</td><td>About <strong>68%</strong></td></tr>\n   <tr><td><strong>±4σ</strong></td><td>At least <strong>94%</strong></td><td>—</td></tr>\n  </tbody></table></div>\n  <div class=\"warnbox\"><b>Chebyshev says &ldquo;at least&rdquo;</b>, so the real figure can be much higher. It is weaker but universal; the empirical rule is sharper but needs normality. <b>Six Sigma</b> quality management works to ±3σ.</div><!--viz:sfm-skew-mean-median--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three curves: a left-skewed and a right-skewed lognormal shape (σ = 0.9) and a symmetric normal. In the right-skewed curve the mean (1.50) lies right of the median (1.00); the left-skewed curve is its mirror image.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Skew pulls the mean toward the tail</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 200\" role=\"img\" aria-label=\"Three density shapes. Left-skewed: the mean sits left of the median. Symmetric: mean equals median. Right-skewed: the mean sits right of the median, toward the long tail.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M14,129.6 L15.9,129.5 L17.7,129.4 L19.6,129.3 L21.4,129.2 L23.3,129 L25.1,128.9 L27,128.8 L28.8,128.6 L30.7,128.4 L32.5,128.3 L34.4,128.1 L36.3,127.9 L38.1,127.7 L40,127.5 L41.8,127.2 L43.7,127 L45.5,126.7 L47.4,126.5 L49.2,126.2 L51.1,125.9 L52.9,125.5 L54.8,125.2 L56.7,124.8 L58.5,124.4 L60.4,124 L62.2,123.5 L64.1,123 L65.9,122.5 L67.8,121.9 L69.6,121.3 L71.5,120.7 L73.4,120 L75.2,119.2 L77.1,118.4 L78.9,117.6 L80.8,116.7 L82.6,115.6 L84.5,114.6 L86.3,113.4 L88.2,112.1 L90,110.8 L91.9,109.3 L93.8,107.7 L95.6,106 L97.5,104.1 L99.3,102 L101.2,99.8 L103,97.4 L104.9,94.8 L106.7,92 L108.6,88.9 L110.4,85.6 L112.3,82.1 L114.2,78.3 L116,74.2 L117.9,69.9 L119.7,65.3 L121.6,60.7 L123.4,56.1 L125.3,51.6 L127.1,47.7 L129,44.9 L130.8,44 L132.7,46.2 L134.6,53.3 L136.4,67.6 L138.3,91.1 L140.1,120.1 L142,132\" style=\"fill:none;stroke:var(--ink);stroke-width:2\"/><path d=\"M12,132 L144,132\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M116.4,132 L116.4,73.3\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><path d=\"M103.6,132 L103.6,96.6\" style=\"stroke:var(--clay);stroke-width:2;fill:none;stroke-dasharray:4 3\"/><text x=\"78\" y=\"24\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">Left-skewed</text><text x=\"78\" y=\"152\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">mean &lt; median</text><path d=\"M156,131.5 L158.2,131.3 L160.3,131 L162.5,130.6 L164.7,130.1 L166.8,129.4 L169,128.6 L171.2,127.5 L173.4,126.2 L175.5,124.6 L177.7,122.6 L179.9,120.2 L182,117.5 L184.2,114.2 L186.4,110.6 L188.5,106.4 L190.7,101.8 L192.9,96.9 L195.1,91.5 L197.2,85.9 L199.4,80.2 L201.6,74.4 L203.7,68.7 L205.9,63.3 L208.1,58.2 L210.2,53.8 L212.4,50 L214.6,47.1 L216.7,45 L218.9,44 L221.1,44 L223.3,45 L225.4,47.1 L227.6,50 L229.8,53.8 L231.9,58.2 L234.1,63.3 L236.3,68.7 L238.4,74.4 L240.6,80.2 L242.8,85.9 L244.9,91.5 L247.1,96.9 L249.3,101.8 L251.5,106.4 L253.6,110.6 L255.8,114.2 L258,117.5 L260.1,120.2 L262.3,122.6 L264.5,124.6 L266.6,126.2 L268.8,127.5 L271,128.6 L273.2,129.4 L275.3,130.1 L277.5,130.6 L279.7,131 L281.8,131.3 L284,131.5\" style=\"fill:none;stroke:var(--ink);stroke-width:2\"/><path d=\"M154,132 L286,132\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M220,132 L220,44\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><path d=\"M220,132 L220,44\" style=\"stroke:var(--clay);stroke-width:2;fill:none;stroke-dasharray:4 3\"/><text x=\"220\" y=\"24\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">Symmetric</text><text x=\"220\" y=\"152\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">mean = median</text><path d=\"M298,132 L299.9,120.1 L301.7,91.1 L303.6,67.6 L305.4,53.3 L307.3,46.2 L309.2,44 L311,44.9 L312.9,47.7 L314.7,51.6 L316.6,56.1 L318.4,60.7 L320.3,65.3 L322.1,69.9 L324,74.2 L325.8,78.3 L327.7,82.1 L329.6,85.6 L331.4,88.9 L333.3,92 L335.1,94.8 L337,97.4 L338.8,99.8 L340.7,102 L342.5,104.1 L344.4,106 L346.2,107.7 L348.1,109.3 L350,110.8 L351.8,112.1 L353.7,113.4 L355.5,114.6 L357.4,115.6 L359.2,116.7 L361.1,117.6 L362.9,118.4 L364.8,119.2 L366.6,120 L368.5,120.7 L370.4,121.3 L372.2,121.9 L374.1,122.5 L375.9,123 L377.8,123.5 L379.6,124 L381.5,124.4 L383.3,124.8 L385.2,125.2 L387.1,125.5 L388.9,125.9 L390.8,126.2 L392.6,126.5 L394.5,126.7 L396.3,127 L398.2,127.2 L400,127.5 L401.9,127.7 L403.7,127.9 L405.6,128.1 L407.5,128.3 L409.3,128.4 L411.2,128.6 L413,128.8 L414.9,128.9 L416.7,129 L418.6,129.2 L420.4,129.3 L422.3,129.4 L424.1,129.5 L426,129.6\" style=\"fill:none;stroke:var(--ink);stroke-width:2\"/><path d=\"M296,132 L428,132\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M323.6,132 L323.6,73.3\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><path d=\"M336.4,132 L336.4,96.6\" style=\"stroke:var(--clay);stroke-width:2;fill:none;stroke-dasharray:4 3\"/><text x=\"362\" y=\"24\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">Right-skewed</text><text x=\"362\" y=\"152\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">mean &gt; median</text><path d=\"M120,180 L142,180\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><text x=\"148\" y=\"184\" style=\"fill:var(--ink-2);font-size:13px\">median</text><path d=\"M230,180 L252,180\" style=\"stroke:var(--clay);stroke-width:2;fill:none;stroke-dasharray:4 3\"/><text x=\"258\" y=\"184\" style=\"fill:var(--ink-2);font-size:13px\">mean</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Find the long tail: the mean sits on that side of the median. Placement packages are right-skewed, so quote the median.</figcaption></figure><!--/viz:sfm-skew-mean-median--><!--viz:sfm-zscore-ruler--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Store A (mean 600, s 100) and Store B (mean 40, s 8) drawn on rulers aligned by z. A's 450 is 1.5 standard deviations below its mean; B's 52 is 1.5 above.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">A z-score puts different scales on one ruler</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 222\" role=\"img\" aria-label=\"Two rulers aligned by z-score. Store A daily sales, mean 600 and s 100: a day of 450 sits at z = −1.5. Store B, mean 40 and s 8: a day of 52 sits at z = +1.5. A common z axis from −3 to +3 runs underneath.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><text x=\"20\" y=\"20\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">Store A · mean 600, s 100</text><path d=\"M40,56 L400,56\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M40,56 L40,61\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"40\" y=\"75\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">300</text><path d=\"M100,56 L100,61\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"100\" y=\"75\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">400</text><path d=\"M160,56 L160,61\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"160\" y=\"75\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">500</text><path d=\"M220,56 L220,61\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"220\" y=\"75\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">600</text><path d=\"M280,56 L280,61\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"280\" y=\"75\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">700</text><path d=\"M340,56 L340,61\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"340\" y=\"75\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">800</text><path d=\"M400,56 L400,61\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"400\" y=\"75\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">900</text><circle cx=\"130\" cy=\"56\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><text x=\"130\" y=\"44\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">450 → z = −1.5</text><text x=\"20\" y=\"104\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">Store B · mean 40, s 8</text><path d=\"M40,140 L400,140\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M40,140 L40,145\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"40\" y=\"159\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">16</text><path d=\"M100,140 L100,145\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"100\" y=\"159\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">24</text><path d=\"M160,140 L160,145\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"160\" y=\"159\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">32</text><path d=\"M220,140 L220,145\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"220\" y=\"159\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">40</text><path d=\"M280,140 L280,145\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"280\" y=\"159\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">48</text><path d=\"M340,140 L340,145\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"340\" y=\"159\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">56</text><path d=\"M400,140 L400,145\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"400\" y=\"159\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">64</text><circle cx=\"310\" cy=\"140\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><text x=\"310\" y=\"128\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">52 → z = +1.5</text><path d=\"M40,186 L400,186\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><path d=\"M40,186 L40,191\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"40\" y=\"206\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">−3</text><path d=\"M100,186 L100,191\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"100\" y=\"206\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">−2</text><path d=\"M160,186 L160,191\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"160\" y=\"206\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">−1</text><path d=\"M220,186 L220,191\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"220\" y=\"206\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">0</text><path d=\"M280,186 L280,191\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"280\" y=\"206\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">+1</text><path d=\"M340,186 L340,191\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"340\" y=\"206\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">+2</text><path d=\"M400,186 L400,191\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"400\" y=\"206\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">+3</text><text x=\"32\" y=\"190\" text-anchor=\"end\" style=\"fill:var(--ink);font-size:13px;font-style:italic\">z</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">z = (x − x̄) / s: the raw numbers 450 and 52 can't be compared, but −1.5 and +1.5 can.</figcaption></figure><!--/viz:sfm-zscore-ruler-->"
    },
    {
     "t": "Outliers, five-number summary and box plots",
     "src": "L#6 · L#7",
     "h": "\n  <div class=\"def\">An <b>outlier</b> is an unusually small or large value. The z-score test: <b>|z| &gt; 3</b> flags one — more than three standard deviations from the mean.</div>\n  <p style=\"font-size:14.5px\"><strong>Three causes:</strong> incorrectly <em>recorded</em> data · incorrectly <em>included</em> data · correctly recorded, genuinely exceptional values.</p>\n  <h4>The five-number summary</h4>\n  <p style=\"font-size:15px\"><strong>Minimum · Q1 · Median (Q2) · Q3 · Maximum</strong></p>\n  <h4>Box plot construction, and the other outlier rule</h4>\n  <ul>\n   <li>The <strong>box</strong> runs from <strong>Q1 to Q3</strong> — the middle 50%.</li>\n   <li>A line inside marks the <strong>median</strong>.</li>\n   <li><strong>Lower limit = Q1 − 1.5 × IQR</strong>. <strong>Upper limit = Q3 + 1.5 × IQR</strong>. Anything beyond is an outlier.</li>\n   <li><strong>Whiskers</strong> extend to the most extreme values <em>inside</em> those limits — not to the outliers.</li>\n  </ul>\n  <p style=\"font-size:14.5px\"><strong>His worked example:</strong> Q1 = 545, Q3 = 625, so <strong>IQR = 80</strong>. Lower limit = 545 − 120 = <strong>425</strong>; upper limit = 625 + 120 = <strong>745</strong>.</p>\n  <div class=\"warnbox\"><b>Two different outlier rules, both examinable:</b> the <b>z-score</b> rule (|z| &gt; 3) and the <b>box plot</b> rule (beyond Q1 − 1.5 IQR or Q3 + 1.5 IQR). Do not mix up the multipliers — 3 for z, 1.5 for IQR.</div><!--viz:sfm-boxplot-anatomy--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Box plot of 15 call times: 4, 6, 7, 7, 8, 9, 10, 11, 12, 12, 13, 14, 15, 17, 31 minutes. Q1 = 7, median = 11, Q3 = 14, IQR = 7; fences at −3.5 and 24.5; whiskers stop at 4 and 17; 31 is an outlier.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Reading a box plot</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 190\" role=\"img\" aria-label=\"Box plot of 15 call times in minutes (4, 6, 7, 7, 8, 9, 10, 11, 12, 12, 13, 14, 15, 17, 31). Box from Q1 = 7 to Q3 = 14 with median 11, whiskers to 4 and 17, upper fence 24.5, and 31 plotted as an outlier.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"106\" y=\"76\" width=\"76\" height=\"28\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><path d=\"M149.4,76 L149.4,104\" style=\"stroke:var(--ink);stroke-width:2;fill:none\"/><path d=\"M73.4,90 L106,90\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/><path d=\"M182,90 L214.6,90\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/><path d=\"M73.4,82 L73.4,98\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/><path d=\"M214.6,82 L214.6,98\" style=\"stroke:var(--ink-2);stroke-width:1.5;fill:none\"/><path d=\"M296,66 L296,152\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none;stroke-dasharray:4 4\"/><circle cx=\"366.6\" cy=\"90\" r=\"5\" style=\"fill:none;stroke:var(--bad);stroke-width:2\"/><text x=\"106\" y=\"60\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">Q1 7</text><path d=\"M106,68 L106,74\" style=\"stroke:var(--rule-2);stroke-width:1;fill:none\"/><text x=\"182\" y=\"60\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-weight:700\">Q3 14</text><path d=\"M182,68 L182,74\" style=\"stroke:var(--rule-2);stroke-width:1;fill:none\"/><text x=\"149.4\" y=\"34\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">median 11</text><path d=\"M149.4,42 L149.4,74\" style=\"stroke:var(--rule-2);stroke-width:1;fill:none\"/><text x=\"296\" y=\"34\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px\">Q3 + 1.5 × IQR = 24.5</text><text x=\"366.6\" y=\"60\" text-anchor=\"middle\" style=\"fill:var(--bad);font-size:13px;font-weight:700\">outlier 31</text><text x=\"144\" y=\"124\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">IQR = 7</text><text x=\"73.4\" y=\"124\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">4</text><text x=\"214.6\" y=\"124\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">17</text><path d=\"M22,152 L418,152\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M30,152 L30,157\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"30\" y=\"172\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><path d=\"M84.3,152 L84.3,157\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"84.3\" y=\"172\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">5</text><path d=\"M138.6,152 L138.6,157\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"138.6\" y=\"172\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text><path d=\"M192.9,152 L192.9,157\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"192.9\" y=\"172\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">15</text><path d=\"M247.1,152 L247.1,157\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"247.1\" y=\"172\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">20</text><path d=\"M301.4,152 L301.4,157\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"301.4\" y=\"172\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">25</text><path d=\"M355.7,152 L355.7,157\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"355.7\" y=\"172\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">30</text><path d=\"M410,152 L410,157\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"410\" y=\"172\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">35</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Whiskers stop at the last value inside the fences, not at the fence; anything beyond is plotted on its own.</figcaption></figure><!--/viz:sfm-boxplot-anatomy-->"
    },
    {
     "t": "Textbook: Descriptive Statistics: Numerical Measures",
     "src": "Anderson 14e ch3",
     "h": "<!--viz:sfm-chebyshev-vs-empirical--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Paired bars for 1.5, 2 and 3 standard deviations. Chebyshev guarantees at least 55.6%, 75.0% and 88.9%; for bell-shaped data the actual shares are 86.6%, 95.4% and 99.7%.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Chebyshev's floor vs the empirical rule</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 214\" role=\"img\" aria-label=\"Paired bars for 1.5, 2 and 3 standard deviations. Chebyshev guarantees at least 55.6%, 75.0% and 88.9%; for bell-shaped data the actual shares are 86.6%, 95.4% and 99.7%.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"96\" y=\"16\" width=\"12\" height=\"12\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"114\" y=\"27\" style=\"fill:var(--ink-2);font-size:13px\">Chebyshev: at least</text><rect x=\"262\" y=\"16\" width=\"12\" height=\"12\" style=\"fill:var(--blue);stroke:none\"/><text x=\"280\" y=\"27\" style=\"fill:var(--ink-2);font-size:13px\">bell-shaped data</text><text x=\"20\" y=\"68\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">±1.5s</text><rect x=\"96\" y=\"48\" width=\"144.4\" height=\"16\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"246.4\" y=\"61\" style=\"fill:var(--clay);font-size:13px\">55.6%</text><rect x=\"96\" y=\"67\" width=\"225.3\" height=\"16\" style=\"fill:var(--blue);stroke:none\"/><text x=\"327.3\" y=\"80\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">86.6%</text><text x=\"20\" y=\"120\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">±2s</text><rect x=\"96\" y=\"100\" width=\"195\" height=\"16\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"297\" y=\"113\" style=\"fill:var(--clay);font-size:13px\">75.0%</text><rect x=\"96\" y=\"119\" width=\"248.2\" height=\"16\" style=\"fill:var(--blue);stroke:none\"/><text x=\"350.2\" y=\"132\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">95.4%</text><text x=\"20\" y=\"172\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">±3s</text><rect x=\"96\" y=\"152\" width=\"231.1\" height=\"16\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"333.1\" y=\"165\" style=\"fill:var(--clay);font-size:13px\">88.9%</text><rect x=\"96\" y=\"171\" width=\"259.3\" height=\"16\" style=\"fill:var(--blue);stroke:none\"/><text x=\"361.3\" y=\"184\" style=\"fill:var(--blue);font-size:13px;font-weight:700\">99.7%</text><path d=\"M96,42 L96,202\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Chebyshev (1 − 1/z²) holds for any shape, so it is a minimum; if the data is bell-shaped the real share is much higher.</figcaption></figure><!--/viz:sfm-chebyshev-vs-empirical--><p><strong>Range and interquartile range</strong> — The range (largest − smallest) is easy but rests on two values, so one extreme distorts it. The interquartile range, Q3 − Q1, is the range of the middle 50% of the data and is not affected by extremes.<br><span style=\"font-family:var(--mono)\">IQR = Q3 − Q1</span></p><p><strong>Variance and standard deviation</strong> — Variance averages the squared deviations about the mean; deviations themselves always sum to zero, so they must be squared. A sample variance divides by n − 1, which makes it an unbiased estimator of the population variance; a population variance divides by N. Variance is in squared units, so the standard deviation, its positive square root, is easier to interpret. Carry at least six significant digits in intermediate steps to avoid rounding error.<br><span style=\"font-family:var(--mono)\">s² = Σ(xᵢ − x̄)² / (n − 1);  σ² = Σ(xᵢ − μ)² / N;  s = √s²</span><br><em>e.g.</em> Class sizes: Σ(xᵢ − x̄)² = 256, so s² = 256/4 = 64 and s = 8 students.</p><p><strong>Coefficient of variation</strong> — A relative measure of spread: the standard deviation as a percentage of the mean. It lets you compare variability of variables with different means or units; the lower it is, the more consistent the data relative to their size.<br><span style=\"font-family:var(--mono)\">CV = (s / x̄ × 100)%</span><br><em>e.g.</em> Mean 44, s = 8: CV = 18.2%.</p><p><strong>Skewness and the mean–median relationship</strong> — Skewness is negative for data skewed left, zero for symmetric data and positive for data skewed right. In a symmetric distribution mean = median; with right skew the mean is usually above the median, with left skew below it. For highly skewed data the median is the preferred measure of location. The book's sample formula (also used by Excel's SKEW) adjusts for sample size.<br><span style=\"font-family:var(--mono)\">Skewness = [n / ((n − 1)(n − 2))] × Σ((xᵢ − x̄)/s)³</span></p><p><strong>z-scores (standardised values)</strong> — A z-score gives the number of standard deviations a value lies above (positive) or below (negative) the mean. Values from different data sets with the same z-score occupy the same relative position.<br><span style=\"font-family:var(--mono)\">zᵢ = (xᵢ − x̄) / s</span><br><em>e.g.</em> Class of 32 students with x̄ = 44, s = 8: z = −1.5.</p><p><strong>Chebyshev's theorem and the empirical rule</strong> — Chebyshev's theorem holds for any data set: at least 1 − 1/z² of values lie within z standard deviations of the mean, for any z &gt; 1 (z need not be a whole number). For bell-shaped data the empirical rule is sharper: about 68% within 1 s, about 95% within 2 s, and almost all within 3 s. Because a bell shape is symmetric, halves of these bands can be combined (for example 34% + 47.5% = 81.5%).<br><span style=\"font-family:var(--mono)\">Chebyshev: proportion within z s.d. ≥ 1 − 1/z²</span><br><em>e.g.</em> Mean 70, s = 5: within 58 to 82 is z = 2.4, so at least 1 − 1/5.76 = 82.6%.</p><p><strong>Outliers, five-number summary and box plot</strong> — Outliers may be recording errors (correct them), wrongly included observations (remove them) or genuine unusual values (keep them). Two screening rules: |z| &gt; 3, or values beyond Q1 − 1.5 IQR and Q3 + 1.5 IQR; they need not flag the same values. The five-number summary (smallest, Q1, median, Q3, largest) drives the box plot: a box from Q1 to Q3, a line at the median, whiskers to the most extreme values inside the limits, and outliers marked individually. Side-by-side box plots compare groups.<br><span style=\"font-family:var(--mono)\">Lower limit = Q1 − 1.5(IQR);  upper limit = Q3 + 1.5(IQR)</span></p><p><strong>Numerical measures in dashboards and in Excel</strong> — Adding means, standard deviations and box plots to a dashboard gives managers benchmarks against which KPIs are judged, such as a 10-minute target mean and a 15-minute maximum for call resolution. In Excel: AVERAGE, MEDIAN, MODE.SNGL, VAR.S/STDEV.S (sample) and VAR.P/STDEV.P (population), COVARIANCE.S/COVARIANCE.P, CORREL, GEOMEAN, PERCENTILE.EXC/QUARTILE.EXC, the Descriptive Statistics tool (static output) and the Box and Whisker chart. In R, var() and sd() use n − 1.</p>"
    }
   ]
  },
  {
   "id": "assoc",
   "title": "Covariance &amp; correlation",
   "tag": "Topic 6 · Lecture 7",
   "lede": "Two measures of linear association, and the one warning he repeated — correlation is not causation.",
   "topics": [
    {
     "t": "Covariance and correlation",
     "src": "L#7",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Covariance</th><th>Correlation coefficient</th></tr></thead><tbody>\n   <tr><td><strong>Measures</strong></td><td>Linear association between two variables</td><td>Linear association, <strong>standardised</strong></td></tr>\n   <tr><td><strong>Formula</strong></td><td>&Sigma;[(x − x&#772;)(y − y&#772;)] / (n − 1) for a sample</td><td><strong>r = covariance / (s<sub>x</sub> × s<sub>y</sub>)</strong></td></tr>\n   <tr><td><strong>Range</strong></td><td>Unbounded — <strong>scale-dependent</strong>, so hard to interpret</td><td><strong>Always between −1 and +1</strong></td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\"><strong>r = +1</strong> strong positive linear relationship · <strong>r = −1</strong> strong negative · <strong>r = 0</strong> weak or none.</p>\n  <div class=\"warnbox\"><b>Correlation is association, not causation.</b> He said it explicitly. Two highly correlated variables need not have any causal link.</div>\n  <p style=\"font-size:14.5px\"><strong>His golf example:</strong> driving distance against score gave covariance <strong>−7.09</strong> and <strong>r = −0.96</strong> — strongly negative, meaning longer drives go with lower (better) scores.</p><!--viz:sfm-scatter-r--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three scatter plots of 20 generated points. Left: r = +0.90, points rise along a tight band. Middle: r = -0.01, a shapeless cloud. Right: r = -0.90, points fall along a tight band.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">What r looks like</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 196\" role=\"img\" aria-label=\"Three scatter plots of 20 generated points. Left: r = +0.90, points rise along a tight band. Middle: r = -0.01, a shapeless cloud. Right: r = -0.90, points fall along a tight band.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"14\" y=\"40\" width=\"128\" height=\"110\" style=\"fill:none;stroke:var(--rule);stroke-width:1.5\"/><circle cx=\"71.7\" cy=\"91.4\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"62.6\" cy=\"127.9\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"87.8\" cy=\"89.7\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"131.7\" cy=\"79.3\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"124.7\" cy=\"67\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"63.3\" cy=\"114.4\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"50\" cy=\"115.2\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"124.1\" cy=\"86.5\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"77.3\" cy=\"106.5\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"100.3\" cy=\"76.8\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"26.8\" cy=\"118.7\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"122\" cy=\"79.2\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"55.6\" cy=\"116.8\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"77.3\" cy=\"113.4\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"41.8\" cy=\"120.2\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"68.4\" cy=\"103.8\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"117.4\" cy=\"79.2\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"117.3\" cy=\"79.3\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"74.8\" cy=\"108.8\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"110.1\" cy=\"82.8\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><text x=\"78\" y=\"26\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">r = +0.90</text><text x=\"78\" y=\"170\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">strong positive</text><rect x=\"156\" y=\"40\" width=\"128\" height=\"110\" style=\"fill:none;stroke:var(--rule);stroke-width:1.5\"/><circle cx=\"240.6\" cy=\"101.1\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"268.6\" cy=\"91.8\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"242.4\" cy=\"110.2\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"199.7\" cy=\"106.2\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"227.9\" cy=\"100.4\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"172\" cy=\"94.5\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"236.9\" cy=\"97.7\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"279.1\" cy=\"87.9\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"247.1\" cy=\"84.5\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"160.6\" cy=\"89.7\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"225.2\" cy=\"105.9\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"174.7\" cy=\"120.5\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"246.9\" cy=\"109.7\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"171.7\" cy=\"106.4\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"244.7\" cy=\"99.6\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"162.2\" cy=\"80.5\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"246.3\" cy=\"96.8\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"235.5\" cy=\"111.3\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"248\" cy=\"117.3\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"253.6\" cy=\"97.8\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><text x=\"220\" y=\"26\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">r = −0.01</text><text x=\"220\" y=\"170\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">no linear link</text><rect x=\"298\" y=\"40\" width=\"128\" height=\"110\" style=\"fill:none;stroke:var(--rule);stroke-width:1.5\"/><circle cx=\"406.4\" cy=\"112.6\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"336.4\" cy=\"78.8\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"374.4\" cy=\"107.6\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"395.3\" cy=\"87.2\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"387.9\" cy=\"102.5\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"411.8\" cy=\"114.7\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"405.2\" cy=\"102.9\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"412.2\" cy=\"118.7\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"305.2\" cy=\"61.3\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"354.5\" cy=\"96.6\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"360.2\" cy=\"86\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"309.8\" cy=\"76.9\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"302.7\" cy=\"79.9\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"401.7\" cy=\"112\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"420\" cy=\"126.3\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"396.2\" cy=\"101.1\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"339.9\" cy=\"81.5\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"386.6\" cy=\"97.4\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"337.9\" cy=\"80.1\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"390.9\" cy=\"105.7\" r=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><text x=\"362\" y=\"26\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">r = −0.90</text><text x=\"362\" y=\"170\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">strong negative</text><text x=\"220\" y=\"188\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">each panel: 20 points, x across, y up</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The sign gives the direction, the size gives how tightly points hug a straight line; r near 0 means no linear pattern, not no pattern at all.</figcaption></figure><!--/viz:sfm-scatter-r-->"
    },
    {
     "t": "Textbook: Descriptive Statistics: Numerical Measures",
     "src": "Anderson 14e ch3",
     "h": "<!--viz:sfm-covariance-quadrants--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Scatter of seven students: hours 2, 3, 4, 5, 6, 8, 10 against scores 50, 58, 66, 55, 70, 72, 85, split into quadrants at x̄ = 5.43 and ȳ = 65.1. Six points sit in the + quadrants, one (4 hours, 66) in a − quadrant. Covariance = 30.60, r = 0.91.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The sign of covariance, quadrant by quadrant</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 230\" role=\"img\" aria-label=\"Scatter of seven students: hours 2, 3, 4, 5, 6, 8, 10 against scores 50, 58, 66, 55, 70, 72, 85, split into quadrants at x̄ = 5.43 and ȳ = 65.1. Six points sit in the + quadrants, one (4 hours, 66) in a − quadrant. Covariance = 30.60, r = 0.91.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M52,186 L420,186\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M52,186 L52,30\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"60\" y=\"204\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><text x=\"120\" y=\"204\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">2</text><text x=\"180\" y=\"204\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">4</text><text x=\"240\" y=\"204\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">6</text><text x=\"300\" y=\"204\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">8</text><text x=\"360\" y=\"204\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text><text x=\"420\" y=\"204\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">12</text><text x=\"44\" y=\"160\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">50</text><text x=\"44\" y=\"100\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">70</text><text x=\"44\" y=\"40\" text-anchor=\"end\" style=\"fill:var(--ink-3);font-size:13px\">90</text><path d=\"M222.9,34 L222.9,186\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none;stroke-dasharray:4 4\"/><path d=\"M52,110.6 L416,110.6\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none;stroke-dasharray:4 4\"/><circle cx=\"120\" cy=\"156\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"150\" cy=\"132\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"180\" cy=\"108\" r=\"5\" style=\"fill:var(--bad);stroke:none\"/><circle cx=\"210\" cy=\"141\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"240\" cy=\"96\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"300\" cy=\"90\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><circle cx=\"360\" cy=\"51\" r=\"5\" style=\"fill:var(--blue);stroke:none\"/><text x=\"400\" y=\"52\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:20px;font-weight:700\">+</text><text x=\"80\" y=\"174\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:20px;font-weight:700\">+</text><text x=\"80\" y=\"52\" text-anchor=\"middle\" style=\"fill:var(--bad);font-size:20px;font-weight:700\">−</text><text x=\"400\" y=\"174\" text-anchor=\"middle\" style=\"fill:var(--bad);font-size:20px;font-weight:700\">−</text><text x=\"228.9\" y=\"26\" style=\"fill:var(--ink-2);font-size:13px\">x̄ = 5.43</text><text x=\"416\" y=\"102.6\" text-anchor=\"end\" style=\"fill:var(--ink-2);font-size:13px\">ȳ = 65.1</text><text x=\"236\" y=\"220\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">hours studied (x) vs test score (y)</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Points top-right and bottom-left add positive products (x − x̄)(y − ȳ); here they dominate, so s_xy = 30.60 and r = 0.91.</figcaption></figure><!--/viz:sfm-covariance-quadrants--><p><strong>Covariance and the correlation coefficient</strong> — Sample covariance averages the products of paired deviations: positive when points fall mostly in the quadrants above-right and below-left of (x̄, ȳ), negative for the other two, near zero when they spread evenly. Its size depends on the units, so it cannot show strength. The Pearson correlation coefficient divides by both standard deviations, is unit-free and lies between −1 and +1; ±1 means all points on a straight line. It measures only linear association, not causation, and can be near zero for a strong curved relationship.<br><span style=\"font-family:var(--mono)\">sxy = Σ(xᵢ − x̄)(yᵢ − ȳ) / (n − 1);  rxy = sxy / (sx sy)</span><br><em>e.g.</em> Commercials and sales: sxy = 11, sx = 1.49, sy = 7.93, r = 0.93.</p>"
    },
    {
     "t": "Textbook: Discrete Probability Distributions",
     "src": "Anderson 14e ch5",
     "h": "<p><strong>Bivariate distributions and covariance (lower priority)</strong> — A bivariate distribution gives a joint probability for each pair of values of two random variables. Covariance and the correlation coefficient measure their linear association; independent variables have zero covariance. The book computes covariance from the variance of the sum.<br><span style=\"font-family:var(--mono)\">σxy = [Var(x + y) − Var(x) − Var(y)] / 2;  ρxy = σxy / (σx σy)</span></p><p><strong>Linear combinations and portfolios (lower priority)</strong> — A portfolio return is a weighted combination of asset returns. Its expected value is the same weighted combination of expected values, but its variance also depends on the covariance. A negative covariance pulls portfolio variance down, which is the statistical basis for diversification.<br><span style=\"font-family:var(--mono)\">E(ax + by) = aE(x) + bE(y);  Var(ax + by) = a²Var(x) + b²Var(y) + 2ab·σxy</span></p>"
    }
   ]
  },
  {
   "id": "prob1",
   "title": "Probability foundations",
   "tag": "Topic 6 · Lecture 7",
   "lede": "Experiments, sample spaces, counting rules, and the three ways to assign a probability.",
   "topics": [
    {
     "t": "Experiments, sample spaces and counting",
     "src": "L#7",
     "h": "\n  <div class=\"def\"><b>Probability</b> is a numerical measure of the likelihood that an event occurs, ranging from <b>0 (impossible) to 1 (certain)</b>.</div>\n  <p style=\"font-size:14.5px\">A <strong>random experiment</strong> is a process whose outcome cannot be predicted with certainty, may differ on repetition, and whose results fall within a defined set.</p>\n  <div class=\"scroller\"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>\n   <tr><td><strong>Sample space</strong></td><td>The set of <strong>all</strong> possible outcomes</td></tr>\n   <tr><td><strong>Sample point</strong></td><td>An <strong>individual</strong> outcome within it</td></tr>\n   <tr><td><strong>Event</strong></td><td>A <strong>collection</strong> of one or more sample points</td></tr>\n  </tbody></table></div>\n  <h4>Counting rules</h4>\n  <ul>\n   <li><strong>Fundamental counting rule:</strong> k sequential steps with N₁, N₂ … Nₖ outcomes give <strong>N₁ × N₂ × … × Nₖ</strong> total outcomes. His investment case: 4 × 2 = <strong>8</strong>.</li>\n   <li><strong>Combinations — order does NOT matter:</strong> <sup>N</sup>C<sub>n</sub> = N! / [n!(N − n)!]</li>\n   <li><strong>Permutations — order DOES matter:</strong> <sup>N</sup>P<sub>n</sub> = N! / (N − n)!</li>\n  </ul>\n  <div class=\"warnbox\"><b>Combination or permutation?</b> If rearranging the same items counts as a different result, it is a <b>permutation</b>. Permutations always give the larger number.</div><!--viz:sfm-perm-vs-comb--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Choosing 2 of the letters A, B, C, D. The 6 combinations are AB, AC, AD, BC, BD, CD. The 12 permutations list each pair in both orders, such as AB and BA.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Choosing 2 of 4: combinations vs permutations</div><div style=\"display:grid;grid-template-columns:1fr;gap:10px;font-size:14px\"><div><b>Combinations</b> <span style=\"color:var(--ink-2)\">· order ignored · ⁴C₂ = 4! / (2! 2!) = 6</span><div style=\"display:flex;flex-wrap:wrap;gap:6px;margin-top:6px\"><span style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:3px 8px;font-family:var(--mono)\">AB</span><span style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:3px 8px;font-family:var(--mono)\">AC</span><span style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:3px 8px;font-family:var(--mono)\">AD</span><span style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:3px 8px;font-family:var(--mono)\">BC</span><span style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:3px 8px;font-family:var(--mono)\">BD</span><span style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);padding:3px 8px;font-family:var(--mono)\">CD</span></div></div><div><b>Permutations</b> <span style=\"color:var(--ink-2)\">· order counts · ⁴P₂ = 4! / 2! = 12</span><div style=\"display:flex;flex-wrap:wrap;gap:6px;margin-top:6px\"><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:3px 8px;font-family:var(--mono)\">AB</span><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:3px 8px;font-family:var(--mono)\">BA</span><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:3px 8px;font-family:var(--mono)\">AC</span><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:3px 8px;font-family:var(--mono)\">CA</span><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:3px 8px;font-family:var(--mono)\">AD</span><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:3px 8px;font-family:var(--mono)\">DA</span><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:3px 8px;font-family:var(--mono)\">BC</span><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:3px 8px;font-family:var(--mono)\">CB</span><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:3px 8px;font-family:var(--mono)\">BD</span><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:3px 8px;font-family:var(--mono)\">DB</span><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:3px 8px;font-family:var(--mono)\">CD</span><span style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft);padding:3px 8px;font-family:var(--mono)\">DC</span></div></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Each combination of 2 items can be ordered 2! = 2 ways, so permutations = 2 × combinations here.</figcaption></figure><!--/viz:sfm-perm-vs-comb-->"
    },
    {
     "t": "The three ways to assign a probability",
     "src": "L#7",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Method</th><th>Basis</th><th>Example</th></tr></thead><tbody>\n   <tr><td><strong>Classical</strong></td><td>All outcomes <strong>equally likely</strong>. P = 1 / number of outcomes</td><td>An unbiased die — <strong>1/6</strong> each</td></tr>\n   <tr><td><strong>Relative frequency</strong></td><td><strong>Historical data.</strong> P = frequency ÷ total observations</td><td>2 scooters rented on 18 of 40 days → <strong>18/40 = 0.45</strong></td></tr>\n   <tr><td><strong>Subjective</strong></td><td><strong>Judgement, experience, intuition</strong> — when no data exists and experiment is impractical</td><td>A new product's chance of success</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\"><strong>Two rules:</strong> all outcome probabilities in an experiment must <strong>sum to 1</strong>, and the probability of an event is the <strong>sum of the probabilities of its sample points</strong>.</p>"
    },
    {
     "t": "Textbook: Introduction to Probability",
     "src": "Anderson 14e ch4",
     "h": "<p>Probability puts a number between 0 and 1 on uncertainty, so managers can weigh outcomes such as a project finishing on time or a bid succeeding. The chapter defines random experiments, sample spaces and sample points, gives counting rules (multiple-step experiments, combinations, permutations) for listing outcomes, and three ways to assign probabilities: classical, relative frequency and subjective. Events are collections of sample points; their probabilities follow from the complement rule, the addition law for unions, conditional probability, and the multiplication law for intersections, with independence as a special case. Joint probability tables organise these calculations. Bayes' theorem then revises prior probabilities into posterior probabilities when new information, such as a test result or a defective part, arrives.</p><!--viz:sfm-counting-tree--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Two-step experiment: choose one of three vendors, then air or road delivery. The tree ends in six sample points.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">A tree diagram lists the sample space</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 232\" role=\"img\" aria-label=\"Tree diagram: a start node branches to three vendors V1, V2, V3, and each vendor branches to Air or Road, giving six sample points from (V1, Air) to (V3, Road).\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"10\" y=\"92\" width=\"54\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"37\" y=\"110\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">Start</text><path d=\"M64,105 L124,36\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><rect x=\"124\" y=\"23\" width=\"44\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"146\" y=\"41\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">V1</text><path d=\"M168,36 L226,20\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><rect x=\"226\" y=\"8\" width=\"56\" height=\"24\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"254\" y=\"25\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">Air</text><text x=\"296\" y=\"25\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">(V1, Air)</text><path d=\"M168,36 L226,52\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><rect x=\"226\" y=\"40\" width=\"56\" height=\"24\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"254\" y=\"57\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">Road</text><text x=\"296\" y=\"57\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">(V1, Road)</text><path d=\"M64,105 L124,105\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><rect x=\"124\" y=\"92\" width=\"44\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"146\" y=\"110\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">V2</text><path d=\"M168,105 L226,89\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><rect x=\"226\" y=\"77\" width=\"56\" height=\"24\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"254\" y=\"94\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">Air</text><text x=\"296\" y=\"94\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">(V2, Air)</text><path d=\"M168,105 L226,121\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><rect x=\"226\" y=\"109\" width=\"56\" height=\"24\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"254\" y=\"126\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">Road</text><text x=\"296\" y=\"126\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">(V2, Road)</text><path d=\"M64,105 L124,174\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><rect x=\"124\" y=\"161\" width=\"44\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"146\" y=\"179\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">V3</text><path d=\"M168,174 L226,158\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><rect x=\"226\" y=\"146\" width=\"56\" height=\"24\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"254\" y=\"163\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">Air</text><text x=\"296\" y=\"163\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">(V3, Air)</text><path d=\"M168,174 L226,190\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><rect x=\"226\" y=\"178\" width=\"56\" height=\"24\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"254\" y=\"195\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">Road</text><text x=\"296\" y=\"195\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">(V3, Road)</text><text x=\"20\" y=\"222\" style=\"fill:var(--ink);font-size:13.5px;font-weight:700\">3 vendors × 2 modes = 6 sample points</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Each path from start to a leaf is one sample point; the counting rule n₁ × n₂ = 3 × 2 counts the leaves without drawing them.</figcaption></figure><!--/viz:sfm-counting-tree--><p><strong>Random experiment, sample space and sample point</strong> — A random experiment produces well-defined outcomes; on any single trial exactly one outcome occurs and which one is decided by chance alone. The sample space S is the set of all experimental outcomes; each outcome is a sample point.<br><em>e.g.</em> Tossing two coins: S = {(H,H), (H,T), (T,H), (T,T)}, four sample points, not three.</p><p><strong>Counting rule for multiple-step experiments and tree diagrams</strong> — If an experiment is a sequence of k steps with n₁ outcomes at step 1, n₂ at step 2 and so on, the total number of outcomes is the product. A tree diagram lays the steps out left to right so every path is one sample point, which prevents mistakes like treating '0, 1 or 2 heads' as three equally likely outcomes.<br><span style=\"font-family:var(--mono)\">Total outcomes = n₁ × n₂ × … × nₖ</span><br><em>e.g.</em> A project with 3 possible design times and 3 possible construction times has 3 × 3 = 9 outcomes.</p><p><strong>Combinations</strong> — Counts the ways to select n objects from N when order does not matter. It also gives how many distinct samples of size n a finite population of size N can yield. By definition 0! = 1.<br><span style=\"font-family:var(--mono)\">C(N, n) = N! / [n!(N − n)!]</span><br><em>e.g.</em> Choosing 2 of 5 parts to inspect: C(5,2) = 10.</p><p><strong>Permutations</strong> — Counts the ordered selections of n objects from N; the same objects in a different order are a different outcome. Every combination can be arranged in n! orders, so permutations always outnumber combinations (for n ≥ 2).<br><span style=\"font-family:var(--mono)\">P(N, n) = n! × C(N, n) = N! / (N − n)!</span><br><em>e.g.</em> Ordered selection of 2 of 5 parts: 20.</p><p><strong>Basic requirements and three methods of assigning probabilities</strong> — Every outcome's probability must lie between 0 and 1 inclusive, and all outcome probabilities must sum to 1. The classical method assigns 1/n to each of n equally likely outcomes; the relative frequency method uses the proportion of times an outcome occurred in data; the subjective method expresses a person's degree of belief, so two people may legitimately differ, but their assignments must still satisfy both requirements. Managers often blend subjective judgement with the other two.</p><p><strong>Events and their probabilities</strong> — An event is a collection of sample points, and its probability is the sum of the probabilities of the sample points it contains. The sample space itself is an event with probability 1. Under the classical method, P(event) = number of outcomes in the event ÷ total number of outcomes.<br><em>e.g.</em> If six of nine project outcomes take 10 months or less and their probabilities sum to 0.70, P(on time) = 0.70.</p><div class=\"card\"><strong>Case: NASA and the Chilean miners</strong> <em>(Statistics in Practice: National Aeronautics and Space Administration)</em><p>When 33 miners were trapped deep underground in Chile, NASA helped design the rescue. With no historical data for such a rescue, its team built subjective probabilities of success for different methods from astronauts' experience of confinement and re-entry, and these guided the choice of a capsule that brought every miner up.</p><p><em>Lesson:</em> The subjective method when outcomes are not equally likely and no relevant data exist.</p><p><em>Think:</em> Why could neither the classical nor the relative frequency method be used here, and what two rules must NASA's subjective probabilities still obey?</p></div><div class=\"card\"><strong>Case: Police promotions</strong> <em>(Section 4.4: promotion status of police officers)</em><p>Female officers argue promotions are unfair; the administration replies that women are simply fewer on the force. Building a joint probability table and comparing the probability of promotion given male versus given female shows men were promoted at twice the rate, which supports, though does not prove, the women's claim.</p><p><em>Lesson:</em> Conditional probabilities, not raw counts or marginals, answer fairness questions.</p><p><em>Think:</em> Why is comparing 288 promoted men with 36 promoted women misleading, and which two numbers should be compared instead?</p></div><div class=\"card\"><strong>Case: Two suppliers and a bad part</strong> <em>(Section 4.5: two-supplier Bayes' theorem example)</em><p>A manufacturer buys most parts from one supplier and the rest from a second with a higher defect rate. After a machine breaks on a bad part, Bayes' theorem shows the bad part more likely came from the smaller supplier, reversing the prior.</p><p><em>Lesson:</em> Prior probabilities revised by new information into posterior probabilities; the tabular method.</p><p><em>Think:</em> If the second supplier halved its defect rate, would the posterior still favour it as the source? Show the revised table.</p></div><details><summary>Worked problem: Counting a hiring shortlist</summary><p>An HR manager in Gurugram has 8 shortlisted candidates. (a) How many different groups of 3 can be called for a final interview? (b) If 3 different roles (analyst, associate, manager) are to be filled from the 8, one person per role, how many assignments are possible? (c) Laptops for the new hires come in 4 models, 3 RAM sizes and 2 colours; how many configurations exist? (d) If the group of 3 is chosen at random, what is the probability that a particular candidate, Meera, is included?</p><ol><li>(a) Order does not matter: C(8,3) = 8!/(3!·5!) = (8 × 7 × 6)/(3 × 2 × 1) = 56.</li><li>(b) Order matters because roles differ: P(8,3) = 8!/5! = 8 × 7 × 6 = 336 (= 3! × 56).</li><li>(c) Multiple-step counting rule: 4 × 3 × 2 = 24 configurations.</li><li>(d) Groups containing Meera: choose the other 2 from the remaining 7, C(7,2) = 21.</li><li>Classical method (all groups equally likely): P = 21/56 = 0.375.</li></ol><p><strong>Answer:</strong> (a) 56 groups; (b) 336 assignments; (c) 24 configurations; (d) P(Meera included) = 0.375.</p></details><details><summary>Worked problem: Joint probability table for online purchases</summary><p>An e-commerce site logs 1,000 sessions: mobile sessions with a purchase 72, mobile without 528, desktop with a purchase 64, desktop without 336. Build the joint probability table, then find P(purchase), P(purchase | mobile), P(purchase | desktop) and P(mobile ∪ purchase). Are device and purchase independent?</p><ol><li>Joint probabilities (÷ 1000): mobile ∩ buy 0.072; mobile ∩ no buy 0.528; desktop ∩ buy 0.064; desktop ∩ no buy 0.336.</li><li>Marginals: P(mobile) = 0.600, P(desktop) = 0.400, P(buy) = 0.072 + 0.064 = 0.136, P(no buy) = 0.864.</li><li>P(buy | mobile) = 0.072/0.600 = 0.12. P(buy | desktop) = 0.064/0.400 = 0.16.</li><li>Addition law: P(mobile ∪ buy) = 0.600 + 0.136 − 0.072 = 0.664. Check by complement: 1 − P(desktop ∩ no buy) = 1 − 0.336 = 0.664.</li><li>Independence test: P(mobile)·P(buy) = 0.600 × 0.136 = 0.0816 ≠ 0.072, and P(buy | mobile) = 0.12 ≠ P(buy) = 0.136.</li></ol><p><strong>Answer:</strong> P(buy) = 0.136; P(buy | mobile) = 0.12; P(buy | desktop) = 0.16; P(mobile ∪ buy) = 0.664. Device and purchase are dependent: desktop visitors convert more often.</p></details><details><summary>Worked problem: Bayes' theorem for defective batteries</summary><p>A phone brand sources batteries from three plants: Chennai supplies 50%, Pune 30% and Noida 20%. Defect rates are 2%, 3% and 5% respectively. A returned phone has a defective battery. Find the probability it came from each plant.</p><ol><li>Events (mutually exclusive, collectively exhaustive): C, P, N with priors 0.50, 0.30, 0.20.</li><li>Conditionals P(D | plant): 0.02, 0.03, 0.05.</li><li>Joint probabilities = prior × conditional: 0.50 × 0.02 = 0.010; 0.30 × 0.03 = 0.009; 0.20 × 0.05 = 0.010.</li><li>P(D) = 0.010 + 0.009 + 0.010 = 0.029.</li><li>Posteriors = joint ÷ 0.029: Chennai 0.010/0.029 = 0.3448; Pune 0.009/0.029 = 0.3103; Noida 0.010/0.029 = 0.3448. They sum to 1.</li></ol><p><strong>Answer:</strong> P(Chennai | D) ≈ 0.345, P(Pune | D) ≈ 0.310, P(Noida | D) ≈ 0.345. Noida supplies only 20% of batteries but accounts for about 34.5% of defectives.</p></details><details><summary>Worked problem: Redundant servers and independence</summary><p>A payments start-up runs two independent servers, each available 98% of the time. Find the probability that (a) both are up, (b) at least one is up, (c) exactly one is up.</p><ol><li>(a) Independent events: P(both up) = 0.98 × 0.98 = 0.9604.</li><li>(b) Complement: P(both down) = 0.02 × 0.02 = 0.0004, so P(at least one up) = 1 − 0.0004 = 0.9996.</li><li>(c) Exactly one up = at least one up − both up = 0.9996 − 0.9604 = 0.0392 (check: 2 × 0.98 × 0.02 = 0.0392).</li></ol><p><strong>Answer:</strong> (a) 0.9604; (b) 0.9996; (c) 0.0392.</p></details><div class=\"def\"><b>Book vs lecture — Notation for the complement.</b> Book: Writes the complement of A as Aᶜ (A with a superscript c). Lecture: Writes the complement as A′ (A prime). <b>They mean the same event. Expect either symbol in the quiz; P(A) + P(Aᶜ) = P(A) + P(A′) = 1.</b></div><div class=\"def\"><b>Book vs lecture — Definition of a random experiment.</b> Book: A process that generates well-defined experimental outcomes; on any single trial exactly one outcome occurs and it is determined completely by chance. Lecture: A process whose outcome cannot be predicted with certainty, may differ when repeated, and falls within a defined set of results. <b>The two are compatible. If an option mentions 'well-defined outcomes' and 'chance', or 'cannot be predicted with certainty', either is a correct description.</b></div><div class=\"def\"><b>Book vs lecture — Bayes' theorem worked example.</b> Book: The 14e text illustrates Bayes with two parts suppliers (priors 0.65 and 0.35, defect rates 2% and 5%; posterior for supplier 1 given a bad part 0.4262). Lecture: Uses the shopping-centre zoning case (priors 0.70 and 0.30; posterior approval given a negative recommendation 0.34). <b>No conflict in method; the lecture's numbers are the ones a quiz is most likely to reuse. Practise the tabular method on both.</b></div>"
    }
   ]
  },
  {
   "id": "prob2",
   "title": "Probability laws &amp; Bayes",
   "tag": "Topic 7 · Lecture 9",
   "lede": "The formulas. Addition law, conditional probability, multiplication law, independence and Bayes.",
   "topics": [
    {
     "t": "The laws",
     "src": "L#9",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th>Concept</th><th>Meaning</th><th>Formula</th></tr></thead><tbody>\n   <tr><td><strong>Complement</strong> A&prime;</td><td>All sample points <strong>not</strong> in A — and never outside the sample space</td><td>Die {1…6}, A = divisible by 3 = {3,6}, so A&prime; = {1,2,4,5}</td></tr>\n   <tr><td><strong>Union</strong> A ∪ B</td><td>In A, <strong>or</strong> B, <strong>or both</strong></td><td>—</td></tr>\n   <tr><td><strong>Intersection</strong> A ∩ B</td><td>In <strong>both</strong> A and B</td><td>—</td></tr>\n   <tr><td><strong>Addition law</strong></td><td>A or B or both</td><td><strong>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</strong></td></tr>\n   <tr><td><strong>Mutually exclusive</strong></td><td><strong>No sample points in common</strong>; if one happens the other cannot</td><td><strong>P(A ∩ B) = 0</strong>, so P(A ∪ B) = P(A) + P(B)</td></tr>\n   <tr><td><strong>Conditional probability</strong></td><td>A given that B has already happened</td><td><strong>P(A|B) = P(A ∩ B) / P(B)</strong></td></tr>\n   <tr><td><strong>Multiplication law</strong></td><td>Joint probability</td><td><strong>P(A ∩ B) = P(A) × P(B|A) = P(B) × P(A|B)</strong></td></tr>\n   <tr><td><strong>Independence</strong></td><td>One event does not affect the other</td><td><strong>P(A ∩ B) = P(A) × P(B)</strong>, and P(A|B) = P(A)</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">Why subtract the intersection in the addition law? Because it is <strong>counted twice</strong>, once in P(A) and once in P(B).</p>\n  <div class=\"warnbox\"><b>Independence and mutual exclusivity are not the same — they are almost opposites.</b> Mutually exclusive events with non-zero probabilities are <b>dependent</b>: if one occurs, the other definitely does not. Independence means one tells you nothing about the other.</div>\n  <p style=\"font-size:14.5px\"><strong>His independence test:</strong> P(M ∩ C) = 0.36, but P(M) × P(C) = 0.7 × 0.48 = <strong>0.336</strong>. They differ, so the two events are <strong>not independent</strong>.</p><!--viz:sfm-venn-laws--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three Venn diagrams. In the union both circles are shaded; in the intersection only the overlap is shaded; mutually exclusive events are drawn as separate circles that never overlap.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Union, intersection, mutually exclusive</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 214\" role=\"img\" aria-label=\"Three Venn diagrams inside sample-space rectangles. Union: both circles shaded. Intersection: only the overlap shaded. Mutually exclusive: two separate circles with no overlap.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"12\" y=\"34\" width=\"136\" height=\"116\" rx=\"4\" style=\"fill:none;stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"80\" y=\"24\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A ∪ B</text><text x=\"80\" y=\"170\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">A or B or both</text><circle cx=\"60\" cy=\"92\" r=\"34\" style=\"fill:var(--blue-soft);stroke:none\"/><circle cx=\"100\" cy=\"92\" r=\"34\" style=\"fill:var(--blue-soft);stroke:none\"/><circle cx=\"60\" cy=\"92\" r=\"34\" style=\"fill:none;stroke:var(--ink-2);stroke-width:1.5\"/><circle cx=\"100\" cy=\"92\" r=\"34\" style=\"fill:none;stroke:var(--ink-2);stroke-width:1.5\"/><text x=\"43\" y=\"97\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A</text><text x=\"117\" y=\"97\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">B</text><rect x=\"154\" y=\"34\" width=\"136\" height=\"116\" rx=\"4\" style=\"fill:none;stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"222\" y=\"24\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A ∩ B</text><text x=\"222\" y=\"170\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">in both A and B</text><path d=\"M222,64.5 A34,34 0 0 1 222,119.5 A34,34 0 0 1 222,64.5 Z\" style=\"fill:var(--blue);opacity:.45;stroke:none\"/><circle cx=\"202\" cy=\"92\" r=\"34\" style=\"fill:none;stroke:var(--ink-2);stroke-width:1.5\"/><circle cx=\"242\" cy=\"92\" r=\"34\" style=\"fill:none;stroke:var(--ink-2);stroke-width:1.5\"/><text x=\"185\" y=\"97\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A</text><text x=\"259\" y=\"97\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">B</text><rect x=\"296\" y=\"34\" width=\"136\" height=\"116\" rx=\"4\" style=\"fill:none;stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"364\" y=\"24\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">Exclusive</text><text x=\"364\" y=\"170\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">P(A ∩ B) = 0</text><circle cx=\"334\" cy=\"92\" r=\"27\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><circle cx=\"394\" cy=\"92\" r=\"27\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"334\" y=\"97\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">A</text><text x=\"394\" y=\"97\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">B</text><text x=\"220\" y=\"202\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px\">P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The overlap is counted once in P(A) and again in P(B), so the addition law subtracts it once; with no overlap there is nothing to subtract.</figcaption></figure><!--/viz:sfm-venn-laws-->"
    },
    {
     "t": "Bayes' theorem",
     "src": "L#9",
     "h": "\n  <div class=\"def\"><b>Prior</b> probabilities come from history or initial knowledge. New information arrives. <b>Posterior</b> probabilities are the revised estimates that combine the two.</div>\n  <p style=\"font-size:15px\"><strong>P(A<sub>i</sub>|B) = [P(A<sub>i</sub>) × P(B|A<sub>i</sub>)] / Σ[P(A<sub>j</sub>) × P(B|A<sub>j</sub>)]</strong></p>\n  <p style=\"font-size:14.5px\">It applies when the events A<sub>i</sub> are <strong>mutually exclusive</strong> and together make up the <strong>whole sample space</strong>.</p>\n  <h4>The shopping centre zoning case — worth knowing the numbers</h4>\n  <div class=\"scroller\"><table><thead><tr><th>Step</th><th>Value</th></tr></thead><tbody>\n   <tr><td>Prior: approval</td><td><strong>0.70</strong></td></tr>\n   <tr><td>Prior: rejection</td><td><strong>0.30</strong></td></tr>\n   <tr><td>P(negative recommendation | approval)</td><td>0.20</td></tr>\n   <tr><td>P(negative recommendation | rejection)</td><td>0.90</td></tr>\n   <tr><td>Joint: approval &amp; negative</td><td>0.70 × 0.20 = <strong>0.14</strong></td></tr>\n   <tr><td>Joint: rejection &amp; negative</td><td>0.30 × 0.90 = <strong>0.27</strong></td></tr>\n   <tr><td><strong>Posterior P(approval | negative)</strong></td><td>0.14 / (0.14 + 0.27) = <strong>0.34</strong></td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\">The owner revises the chance of approval from <strong>70% down to 34%</strong> — which changes the decision entirely.</p>\n  <h4>The tabular method</h4>\n  <p style=\"font-size:14.5px\">List the mutually exclusive events → priors → conditionals → <strong>multiply</strong> for joints → <strong>sum</strong> the joints → <strong>divide</strong> each joint by that sum.</p><!--viz:sfm-bayes-tree--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Probability tree. Supplier S1 provides 60% of parts with a 3% defect rate; S2 provides 40% with an 8% defect rate. Joint probabilities: 0.018 and 0.032 defective. P(defective) = 0.05, so P(S2 given defective) = 0.64.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Bayes on a tree: from prior to posterior</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 272\" role=\"img\" aria-label=\"Probability tree. Supplier S1 provides 60% of parts with a 3% defect rate; S2 provides 40% with an 8% defect rate. Joint probabilities: 0.018 and 0.032 defective. P(defective) = 0.05, so P(S2 given defective) = 0.64.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"10\" y=\"105\" width=\"50\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"35\" y=\"123\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">Part</text><path d=\"M60,118 L126,64\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><text x=\"93\" y=\"64.1\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">0.60</text><rect x=\"126\" y=\"51\" width=\"52\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"152\" y=\"69\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">S1</text><path d=\"M60,118 L126,172\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><text x=\"93\" y=\"176.9\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">0.40</text><rect x=\"126\" y=\"159\" width=\"52\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"152\" y=\"177\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">S2</text><path d=\"M178,64 L250,34\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><text x=\"214\" y=\"30.4\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-family:var(--mono)\">0.03</text><rect x=\"250\" y=\"21\" width=\"84\" height=\"26\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"292\" y=\"39\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">defective</text><text x=\"344\" y=\"39\" style=\"fill:var(--blue);font-size:13.5px;font-weight:700;font-family:var(--mono)\">0.018</text><path d=\"M178,64 L250,94\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><text x=\"214\" y=\"102.6\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">0.97</text><rect x=\"250\" y=\"81\" width=\"84\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"292\" y=\"99\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">OK</text><text x=\"344\" y=\"99\" style=\"fill:var(--ink-2);font-size:13.5px;font-family:var(--mono)\">0.582</text><path d=\"M178,172 L250,144\" style=\"stroke:var(--blue);stroke-width:2;fill:none\"/><text x=\"214\" y=\"140\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px;font-family:var(--mono)\">0.08</text><rect x=\"250\" y=\"131\" width=\"84\" height=\"26\" rx=\"4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"292\" y=\"149\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">defective</text><text x=\"344\" y=\"149\" style=\"fill:var(--blue);font-size:13.5px;font-weight:700;font-family:var(--mono)\">0.032</text><path d=\"M178,172 L250,204\" style=\"stroke:var(--ink-3);stroke-width:1.5;fill:none\"/><text x=\"214\" y=\"212.2\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">0.92</text><rect x=\"250\" y=\"191\" width=\"84\" height=\"26\" rx=\"4\" style=\"fill:var(--surface);stroke:var(--rule-2);stroke-width:1.5\"/><text x=\"292\" y=\"209\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13.5px\">OK</text><text x=\"344\" y=\"209\" style=\"fill:var(--ink-2);font-size:13.5px;font-family:var(--mono)\">0.368</text><text x=\"344\" y=\"14\" style=\"fill:var(--ink-3);font-size:13px\">joint</text><text x=\"20\" y=\"240\" style=\"fill:var(--ink);font-size:13.5px\">P(defective) = 0.018 + 0.032 = 0.050</text><text x=\"20\" y=\"262\" style=\"fill:var(--blue);font-size:13.5px;font-weight:700\">P(S2 | defective) = 0.032 ÷ 0.050 = 0.64</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">S2 supplies only 40% of parts but 64% of the defectives: multiply along each branch, add the joints you care about, divide.</figcaption></figure><!--/viz:sfm-bayes-tree-->"
    },
    {
     "t": "Textbook: Introduction to Probability",
     "src": "Anderson 14e ch4",
     "h": "<!--viz:sfm-joint-table--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Joint probability table of shift by quality: Day and Defect 0.04, Day and OK 0.66, Night and Defect 0.06, Night and OK 0.24. Marginals: Day 0.70, Night 0.30, Defect 0.10, OK 0.90.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Conditional probability from a joint table</div><div class=\"scroller\"><table><thead><tr><th>Shift</th><th>Defect</th><th>OK</th><th>Total</th></tr></thead><tbody><tr><td>Day</td><td style=\"font-family:var(--mono)\">0.04</td><td style=\"font-family:var(--mono)\">0.66</td><td style=\"font-family:var(--mono)\">0.70</td></tr><tr><td>Night</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">0.06</td><td style=\"font-family:var(--mono)\">0.24</td><td style=\"font-family:var(--mono);background:var(--clay-soft)\">0.30</td></tr><tr><td><b>Total</b></td><td style=\"font-family:var(--mono)\">0.10</td><td style=\"font-family:var(--mono)\">0.90</td><td style=\"font-family:var(--mono)\">1.00</td></tr></tbody></table></div><p style=\"font-size:13.5px;color:var(--ink-2);margin-top:8px\">P(Defect | Night) = <span style=\"padding:1px 5px;background:var(--blue-soft)\">0.06</span> ÷ <span style=\"padding:1px 5px;background:var(--clay-soft)\">0.30</span> = <b>0.20</b> · P(Defect | Day) = 0.04 ÷ 0.70 = 0.057</p><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Conditioning on Night shrinks the sample space to the Night row: 0.06 ÷ 0.30 = 0.20. Since P(Defect) × P(Night) = 0.03 ≠ 0.06, shift and defects are not independent.</figcaption></figure><!--/viz:sfm-joint-table--><!--viz:sfm-exclusive-vs-independent--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Comparison of mutually exclusive and independent events on meaning, joint probability, the effect of knowing B, the Venn picture and an example.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Mutually exclusive is not independent</div><div class=\"scroller\"><table><thead><tr><th></th><th>Mutually exclusive</th><th>Independent</th></tr></thead><tbody><tr><td>Meaning</td><td>cannot happen together</td><td>one tells you nothing about the other</td></tr><tr><td>P(A ∩ B)</td><td style=\"font-family:var(--mono);background:var(--clay-soft)\">0</td><td style=\"font-family:var(--mono);background:var(--blue-soft)\">P(A) × P(B)</td></tr><tr><td>If B happens</td><td style=\"font-family:var(--mono)\">P(A | B) = 0</td><td style=\"font-family:var(--mono)\">P(A | B) = P(A)</td></tr><tr><td>Venn picture</td><td>circles apart</td><td>circles overlap (by exactly P(A)P(B))</td></tr><tr><td>Example</td><td>one card is a heart and a spade</td><td>two separate coin tosses both heads</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">If A and B both have positive probability and are mutually exclusive, knowing B happened tells you A did not: that is dependence.</figcaption></figure><!--/viz:sfm-exclusive-vs-independent--><p><strong>Complement rule</strong> — The complement of A (written Aᶜ in the book) is every sample point not in A. Since either A or its complement must occur, their probabilities add to 1, which is often the quickest route to 'at least one' probabilities.<br><span style=\"font-family:var(--mono)\">P(A) = 1 − P(Aᶜ)</span><br><em>e.g.</em> If 80% of sales calls end without a sale, P(sale) = 0.20.</p><p><strong>Union, intersection and the addition law</strong> — The union A ∪ B holds the sample points in A, B or both; the intersection A ∩ B holds those in both. The addition law gives the probability of the union and subtracts the intersection, which would otherwise be counted twice. Venn diagrams show these sets inside a rectangle representing the sample space.<br><span style=\"font-family:var(--mono)\">P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</span><br><em>e.g.</em> Late 0.10, defective 0.12, both 0.04: P(late or defective) = 0.18.</p><p><strong>Mutually exclusive events</strong> — Events with no sample points in common: if one occurs the other cannot, so P(A ∩ B) = 0 and the addition law reduces to P(A) + P(B). An event and its complement are always mutually exclusive.<br><span style=\"font-family:var(--mono)\">P(A ∪ B) = P(A) + P(B) when A ∩ B is empty</span></p><p><strong>Conditional probability and joint probability tables</strong> — P(A | B) is the probability of A once we know B has occurred: the joint probability divided by the probability of the conditioning event. A joint probability table holds joint probabilities (intersections) in its body and marginal probabilities (each event alone) in its margins; marginals are row or column sums of joints.<br><span style=\"font-family:var(--mono)\">P(A | B) = P(A ∩ B) / P(B)</span><br><em>e.g.</em> Promotion data: P(promoted | man) = 0.24/0.80 = 0.30 against P(promoted | woman) = 0.03/0.20 = 0.15.</p><p><strong>Independent events</strong> — A and B are independent when knowing one occurred does not change the probability of the other: P(A | B) = P(A), equivalently P(B | A) = P(B), equivalently P(A ∩ B) = P(A)P(B). Otherwise they are dependent. Mutually exclusive events with non-zero probabilities are always dependent.</p><p><strong>Multiplication law</strong> — Gives the probability of an intersection from a marginal and a conditional probability. For independent events it reduces to multiplying the two probabilities.<br><span style=\"font-family:var(--mono)\">P(A ∩ B) = P(B)P(A | B) = P(A)P(B | A); independent: P(A ∩ B) = P(A)P(B)</span><br><em>e.g.</em> 84% of households have broadband and 75% of those also take cable TV: P(both) = 0.84 × 0.75 = 0.63.</p><p><strong>Bayes' theorem: prior to posterior</strong> — Start with prior probabilities for mutually exclusive, collectively exhaustive events A₁ … Aₙ, observe new information B, and compute posterior probabilities P(Aᵢ | B). The denominator is P(B), the sum of all the joint probabilities. Priors are often subjective; Bayes is widely used in decision analysis.<br><span style=\"font-family:var(--mono)\">P(Aᵢ | B) = P(Aᵢ)P(B | Aᵢ) / [P(A₁)P(B | A₁) + … + P(Aₙ)P(B | Aₙ)]</span><br><em>e.g.</em> Two suppliers with priors 0.65 and 0.35 and defect rates 2% and 5%: a bad part came from supplier 2 with posterior probability 0.5738.</p><p><strong>Probability trees and the tabular method for Bayes</strong> — In a probability tree the first-stage branches carry the priors and the second-stage branches the conditionals; multiplying along a path gives a joint probability. The tabular method lists events, priors and conditionals, multiplies to get joints, sums the joints to get P(B), and divides each joint by that sum to get the posteriors.</p>"
    }
   ]
  },
  {
   "id": "dists",
   "title": "Probability distributions",
   "tag": "Lectures 10–16, 18",
   "lede": "Random variables, the binomial and Poisson, then the normal and exponential, and how a manager uses them to set stock levels, staffing and quality-control rules. Know how to turn a word problem into the right area under the right curve.",
   "topics": [
    {
     "t": "Random variables and expected value",
     "src": "L#10 · L#13",
     "h": "\n  <div class=\"def\"><b>Lectures 10–14.</b> Whether distributions were in Quiz 1 was disputed: the syllabus document stopped at Introduction to Probability 2, while the lecturer said the quiz ran &ldquo;till chapter 6&rdquo;. Either way, they are core course material for later quizzes and the final exam.</div>\n  <div class=\"def\">A <b>random variable</b> is a numerical description of the outcome of a statistical experiment.</div>\n  <p style=\"font-size:14.5px\"><strong>Discrete</strong> — finite, or an infinite sequence with nothing in between. TVs sold: 0, 1, 2, 3, 4. You cannot sell 1.5. <strong>Continuous</strong> — any value in an interval: distance, temperature, height.</p>\n  <p style=\"font-size:14.5px\">A probability distribution needs <strong>P(x) ≥ 0</strong> for every value and <strong>Σf(x) = 1</strong>.</p>\n  <h4>Expected value and variance</h4>\n  <p style=\"font-size:15px\"><strong>E(X) = μ = Σ[x · f(x)]</strong> — a weighted average, with probabilities as weights.<br>\n  <strong>Var(X) = σ&sup2; = Σ[(x − μ)&sup2; · f(x)]</strong></p>\n  <p style=\"font-size:14.5px\"><strong>His TV example:</strong> over 200 days — 0 sold on 80 days (0.40), 1 on 50 (0.25), 2 on 40 (0.20), 3 on 10 (0.05), 4 on 20 (0.10). E(X) = <strong>1.2</strong> TVs a day. Note the expected value need not be a value the variable can actually take.</p>\n  <p style=\"font-size:14.5px\">A <strong>uniform discrete</strong> distribution has all values equally likely: <strong>f(x) = 1/n</strong>.</p><!--viz:sfm-ev-balance--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Bar chart of cars sold per day: f(0) = 0.15, f(1) = 0.30, f(2) = 0.25, f(3) = 0.20, f(4) = 0.10. A triangle under the axis marks the balance point at E(X) = 1.8.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Expected value is the balance point</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 228\" role=\"img\" aria-label=\"Bar chart of cars sold per day: f(0) = 0.15, f(1) = 0.30, f(2) = 0.25, f(3) = 0.20, f(4) = 0.10. A triangle under the axis marks the balance point at E(X) = 1.8.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"50\" y=\"105\" width=\"40\" height=\"55\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"70\" y=\"97\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">0.15</text><rect x=\"125\" y=\"50\" width=\"40\" height=\"110\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"145\" y=\"42\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">0.30</text><rect x=\"200\" y=\"68.3\" width=\"40\" height=\"91.7\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"220\" y=\"60.3\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">0.25</text><rect x=\"275\" y=\"86.7\" width=\"40\" height=\"73.3\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"295\" y=\"78.7\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">0.20</text><rect x=\"350\" y=\"123.3\" width=\"40\" height=\"36.7\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"370\" y=\"115.3\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">0.10</text><path d=\"M30,160 L410,160\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"70\" y=\"194\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">0</text><text x=\"145\" y=\"194\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">1</text><text x=\"220\" y=\"194\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">2</text><text x=\"295\" y=\"194\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">3</text><text x=\"370\" y=\"194\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:13px\">4</text><path d=\"M205,162 L196,177 L214,177 Z\" style=\"fill:var(--clay);stroke:none\"/><text x=\"219\" y=\"175\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">E(X) = 1.8</text><text x=\"220\" y=\"220\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">cars sold in a day, x</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">E(X) = Σ x·f(x) = 1.8 cars, a value X can never take; Var(X) = Σ(x − μ)²·f(x) = 1.46.</figcaption></figure><!--/viz:sfm-ev-balance-->"
    },
    {
     "t": "Binomial, Poisson and the normal",
     "src": "L#11 · L#12",
     "h": "\n  <div class=\"scroller\"><table><thead><tr><th></th><th>Binomial</th><th>Poisson</th></tr></thead><tbody>\n   <tr><td><strong>Conditions</strong></td><td><strong>Four</strong>: n identical trials · two outcomes only · constant p (the <strong>stationarity assumption</strong>) · independent trials</td><td><strong>Two</strong>: equal probability over equal intervals · independent occurrences</td></tr>\n   <tr><td><strong>Parameters</strong></td><td><strong>n and p</strong></td><td><strong>μ only</strong></td></tr>\n   <tr><td><strong>Mean</strong></td><td><strong>np</strong></td><td><strong>μ</strong></td></tr>\n   <tr><td><strong>Variance</strong></td><td><strong>np(1 − p)</strong></td><td><strong>μ</strong> — mean equals variance, unique to Poisson</td></tr>\n   <tr><td><strong>Used for</strong></td><td>A fixed number of trials</td><td><strong>Occurrences in an interval</strong> of time or space</td></tr>\n  </tbody></table></div>\n  <p style=\"font-size:14.5px\"><strong>Binomial:</strong> P(X=x) = [n!/(x!(n−x)!)] · p<sup>x</sup> · (1−p)<sup>n−x</sup>. His case: 10% turnover, 3 employees, exactly 1 leaving → <strong>0.2430</strong>.</p>\n  <p style=\"font-size:14.5px\"><strong>Poisson:</strong> P(X=x) = (μ<sup>x</sup> e<sup>−μ</sup>) / x!. His case: 6 patients an hour, so μ = 3 for half an hour; exactly 4 arrivals → <strong>0.168</strong>.</p>\n  <h4>Continuous: uniform and normal</h4>\n  <p style=\"font-size:14.5px\">For a continuous variable, <strong>probability is the area under the density function</strong> over an interval — you cannot get a probability at a single point.</p>\n  <p style=\"font-size:14.5px\"><strong>Uniform:</strong> f(x) = 1/(B−A) · E(X) = (A+B)/2 · Var(X) = (B−A)&sup2;/12.</p>\n  <p style=\"font-size:14.5px\"><strong>Normal:</strong> mean, median and mode <strong>coincide</strong> at the centre; perfectly symmetric; total area = 1; a larger σ flattens the curve. The <strong>standard normal</strong> has μ = 0 and σ = 1, reached by <strong>z = (x − μ)/σ</strong>. Empirical rule in detail: <strong>68.26% · 95.44% · 99.72%</strong>.</p>\n  <p style=\"font-size:14.5px\"><strong>His PepZone case:</strong> μ = 15, σ = 6, reorder at 20. z = (20−15)/6 = <strong>0.83</strong>; P(Z ≤ 0.83) = 0.7967; so the stockout risk is <strong>1 − 0.7967 = 20.33%</strong>. Tables give P(Z ≤ z), so the upper tail is always 1 minus the table value.</p><!--viz:sfm-binom-vs-poisson--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Grouped bars for x = 0 to 10. Binomial (n = 10, p = 0.3) peaks at x = 3 with 0.267; Poisson (mean 3) has 0.224 at both 2 and 3 and a longer right tail, e.g. P(7) = 0.022 vs 0.009.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Same mean, different spread: binomial vs Poisson</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 214\" role=\"img\" aria-label=\"Grouped bars for x = 0 to 10. Binomial (n = 10, p = 0.3) peaks at x = 3 with 0.267; Poisson (mean 3) has 0.224 at both 2 and 3 and a longer right tail, e.g. P(7) = 0.022 vs 0.009.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M28,168 L424,168\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><rect x=\"27\" y=\"155.9\" width=\"13\" height=\"12.1\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"40\" y=\"146.7\" width=\"13\" height=\"21.3\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"40\" y=\"186\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><rect x=\"63\" y=\"116.1\" width=\"13\" height=\"51.9\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"76\" y=\"104\" width=\"13\" height=\"64\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"76\" y=\"186\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">1</text><rect x=\"99\" y=\"67.9\" width=\"13\" height=\"100.1\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"112\" y=\"72\" width=\"13\" height=\"96\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"112\" y=\"186\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">2</text><rect x=\"135\" y=\"53.6\" width=\"13\" height=\"114.4\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"148\" y=\"72\" width=\"13\" height=\"96\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"148\" y=\"186\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">3</text><rect x=\"171\" y=\"82.2\" width=\"13\" height=\"85.8\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"184\" y=\"96\" width=\"13\" height=\"72\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"184\" y=\"186\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">4</text><rect x=\"207\" y=\"123.9\" width=\"13\" height=\"44.1\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"220\" y=\"124.8\" width=\"13\" height=\"43.2\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"220\" y=\"186\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">5</text><rect x=\"243\" y=\"152.2\" width=\"13\" height=\"15.8\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"256\" y=\"146.4\" width=\"13\" height=\"21.6\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"256\" y=\"186\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">6</text><rect x=\"279\" y=\"164.1\" width=\"13\" height=\"3.9\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"292\" y=\"158.7\" width=\"13\" height=\"9.3\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"292\" y=\"186\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">7</text><rect x=\"315\" y=\"167.4\" width=\"13\" height=\"0.6\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"328\" y=\"164.5\" width=\"13\" height=\"3.5\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"328\" y=\"186\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">8</text><rect x=\"351\" y=\"167.9\" width=\"13\" height=\"0.1\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"364\" y=\"166.8\" width=\"13\" height=\"1.2\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"364\" y=\"186\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">9</text><rect x=\"387\" y=\"168\" width=\"13\" height=\"0\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"400\" y=\"167.7\" width=\"13\" height=\"0.3\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"400\" y=\"186\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text><rect x=\"214\" y=\"18\" width=\"13\" height=\"13\" style=\"fill:var(--blue);stroke:none\"/><text x=\"233\" y=\"29\" style=\"fill:var(--ink-2);font-size:13px\">binomial n = 10, p = 0.3</text><rect x=\"214\" y=\"40\" width=\"13\" height=\"13\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1\"/><text x=\"233\" y=\"51\" style=\"fill:var(--ink-2);font-size:13px\">Poisson μ = 3</text><text x=\"232\" y=\"204\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">x = number of successes / arrivals</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Both have mean 3, but binomial variance is np(1 − p) = 2.1 and Poisson variance is μ = 3, so the Poisson spreads further.</figcaption></figure><!--/viz:sfm-binom-vs-poisson--><!--viz:sfm-normal-tail--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Normal curve with mean 50 and standard deviation 8. The area left of x = 60 (z = 1.25) is 0.8944; the right tail beyond it is 0.1056.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Table value on the left, 1 minus it on the right</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 232\" role=\"img\" aria-label=\"Normal curve with mean 50 and standard deviation 8. The area left of x = 60 (z = 1.25) is 0.8944; the right tail beyond it is 0.1056.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M15.4,168 L15.4,167.4 L20.1,167.3 L24.7,167.1 L29.4,166.9 L34,166.6 L38.7,166.2 L43.3,165.8 L48,165.3 L52.6,164.7 L57.2,163.9 L61.9,163 L66.6,162 L71.2,160.8 L75.9,159.4 L80.5,157.8 L85.2,156 L89.8,153.9 L94.5,151.5 L99.1,148.9 L103.8,145.9 L108.4,142.7 L113.1,139.1 L117.7,135.2 L122.4,131 L127,126.4 L131.7,121.6 L136.3,116.5 L140.9,111.2 L145.6,105.7 L150.2,100 L154.9,94.2 L159.6,88.4 L164.2,82.6 L168.9,76.9 L173.5,71.4 L178.2,66.1 L182.8,61.1 L187.4,56.5 L192.1,52.3 L196.8,48.7 L201.4,45.6 L206,43.2 L210.7,41.4 L215.4,40.4 L220,40 L224.7,40.4 L229.3,41.4 L234,43.2 L238.6,45.6 L243.2,48.7 L247.9,52.3 L252.6,56.5 L257.2,61.1 L261.8,66.1 L266.5,71.4 L271.2,76.9 L275.8,82.6 L280.4,88.4 L285.1,94.2 L289.8,100 L294.4,105.7 L297.5,109.4 L297.5,168 Z\" style=\"fill:var(--blue-soft);stroke:none\"/><path d=\"M297.5,168 L297.5,109.4 L299.1,111.2 L303.7,116.5 L308.4,121.6 L313,126.4 L317.6,131 L322.3,135.2 L326.9,139.1 L331.6,142.7 L336.2,145.9 L340.9,148.9 L345.6,151.5 L350.2,153.9 L354.9,156 L359.5,157.8 L364.1,159.4 L368.8,160.8 L373.4,162 L378.1,163 L382.8,163.9 L387.4,164.7 L392.1,165.3 L396.7,165.8 L401.4,166.2 L406,166.6 L410.6,166.9 L415.3,167.1 L419.9,167.3 L424.6,167.4 L424.6,168 Z\" style=\"fill:var(--clay-soft);stroke:none\"/><path d=\"M15.4,167.4 L20.1,167.3 L24.7,167.1 L29.4,166.9 L34,166.6 L38.7,166.2 L43.3,165.8 L48,165.3 L52.6,164.7 L57.2,163.9 L61.9,163 L66.6,162 L71.2,160.8 L75.9,159.4 L80.5,157.8 L85.2,156 L89.8,153.9 L94.5,151.5 L99.1,148.9 L103.8,145.9 L108.4,142.7 L113.1,139.1 L117.7,135.2 L122.4,131 L127,126.4 L131.7,121.6 L136.3,116.5 L140.9,111.2 L145.6,105.7 L150.2,100 L154.9,94.2 L159.6,88.4 L164.2,82.6 L168.9,76.9 L173.5,71.4 L178.2,66.1 L182.8,61.1 L187.4,56.5 L192.1,52.3 L196.8,48.7 L201.4,45.6 L206,43.2 L210.7,41.4 L215.4,40.4 L220,40 L224.7,40.4 L229.3,41.4 L234,43.2 L238.6,45.6 L243.2,48.7 L247.9,52.3 L252.6,56.5 L257.2,61.1 L261.8,66.1 L266.5,71.4 L271.2,76.9 L275.8,82.6 L280.4,88.4 L285.1,94.2 L289.8,100 L294.4,105.7 L299.1,111.2 L303.7,116.5 L308.4,121.6 L313,126.4 L317.6,131 L322.3,135.2 L326.9,139.1 L331.6,142.7 L336.2,145.9 L340.9,148.9 L345.6,151.5 L350.2,153.9 L354.9,156 L359.5,157.8 L364.1,159.4 L368.8,160.8 L373.4,162 L378.1,163 L382.8,163.9 L387.4,164.7 L392.1,165.3 L396.7,165.8 L401.4,166.2 L406,166.6 L410.6,166.9 L415.3,167.1 L419.9,167.3 L424.6,167.4\" style=\"fill:none;stroke:var(--ink);stroke-width:2\"/><path d=\"M297.5,168 L297.5,109.4\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none\"/><path d=\"M14,168 L426,168\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M34,168 L34,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"34\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">26</text><path d=\"M96,168 L96,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"96\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">34</text><path d=\"M158,168 L158,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"158\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">42</text><path d=\"M220,168 L220,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"220\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">50</text><path d=\"M282,168 L282,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"282\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">58</text><path d=\"M344,168 L344,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"344\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">66</text><path d=\"M406,168 L406,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"406\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">74</text><text x=\"297.5\" y=\"206\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">x = 60 → z = 1.25</text><text x=\"190\" y=\"128\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:16px;font-weight:700\">0.8944</text><text x=\"190\" y=\"146\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">P(Z ≤ 1.25)</text><path d=\"M305,160 L313,121\" style=\"stroke:var(--ink-3);stroke-width:1;fill:none\"/><text x=\"318\" y=\"110\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">tail 0.1056</text><text x=\"20\" y=\"24\" style=\"fill:var(--ink-2);font-size:13px\">μ = 50, σ = 8</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Standardise first: z = (60 − 50) / 8 = 1.25. The table gives the left area 0.8944; the chance of exceeding 60 is 1 − 0.8944 = 0.1056.</figcaption></figure><!--/viz:sfm-normal-tail-->"
    },
    {
     "t": "Normal probabilities in practice",
     "src": "L#14",
     "h": "<div class=\"def\"><b>Three things before any normal probability:</b> the distribution (is it really normal?), its <b>mean μ</b> and its <b>standard deviation σ</b>. With μ and σ you can draw the whole curve and get the probability of any range.</div>\n<h4>Standardise first</h4>\n<p style=\"font-size:14.5px\"><strong>z = (x − μ)/σ</strong> counts how many standard deviations x lies from the mean. Scale does not matter: μ = 150, σ = 60, x = 200 and μ = 1,500, σ = 600, x = 2,000 both give z = 0.83, so both firms face the same probability.</p>\n<p style=\"font-size:14.5px\">The standard normal table gives the <strong>left area P(Z ≤ z)</strong> for z from −3.4 to +3.4: the row is the first decimal, the column the second. For z = 2.456 use 2.45 or round to 2.46. A <strong>negative z</strong> only says the value lies left of the mean; an area can never be negative.</p>\n<h4>The question shapes he worked</h4>\n<div class=\"scroller\"><table><thead><tr><th>Asked</th><th>Do</th><th>His example</th></tr></thead><tbody>\n<tr><td>more than x (x above μ)</td><td>1 − table value</td><td>Football players, μ = 200 lb, σ = 25: P(weight &gt; 250) → z = 2 → 1 − 0.9772 = <strong>0.0228</strong></td></tr>\n<tr><td>at least x (x below μ)</td><td>1 − P(Z ≤ negative z)</td><td>MBA salaries, μ = $40,000, σ = $5,000: P(≥ 30,000) → z = −2 → 1 − 0.0228 = <strong>0.9772</strong></td></tr>\n<tr><td>at least x (x above μ)</td><td>1 − table value</td><td>P(≥ 47,500) → z = 1.5 → 1 − 0.9332 = <strong>0.0668</strong></td></tr>\n<tr><td>between a and b</td><td>P(Z ≤ z₂) − P(Z ≤ z₁)</td><td>P(34,000 to 46,000) → z = ±1.2 → 1 − 2(0.1151) = <strong>0.7698</strong></td></tr>\n</tbody></table></div>\n<p style=\"font-size:14.5px\"><strong>Symmetry:</strong> P(Z ≤ −a) = P(Z ≥ a) = 1 − P(Z ≤ a). So P(Z ≤ −2) = 1 − 0.9772 = 0.0228, and the negative half of the table is just 1 minus the positive half.</p>\n<p style=\"font-size:14.5px\"><strong>His sanity check:</strong> draw the curve and shade the area before calculating. If the shaded region includes everything above a point that is left of the mean, the answer must exceed 0.5; a region wholly right of the mean must come out below 0.5. At x = μ, z = 0 and the area is exactly 0.50.</p>\n<h4>In Excel (and R)</h4>\n<ul>\n<li><code>=NORM.DIST(x, μ, σ, TRUE)</code> returns P(X ≤ x). He typed NORM.DIST(30, 40, 5, TRUE) = 0.0228, dropping the thousands from all three numbers, which changes nothing.</li>\n<li><code>=NORM.S.DIST(z, TRUE)</code> returns P(Z ≤ z): NORM.S.DIST(−2, TRUE) = 0.0228.</li>\n<li>For a probability the last argument is <strong>always TRUE</strong>: a continuous variable has no probability at a single point.</li>\n<li>R: <code>pnorm(30, 40, 5)</code> and <code>pnorm(-2)</code> give the same left areas.</li>\n</ul>\n<div class=\"def\"><b>From the lecture (L#14):</b> use the printed table until you have practised enough, then move to Excel, because the table is what builds the understanding. Draw the normal curve for every question. The remaining salary and weight parts are left as practice and will be discussed in the live session.</div>\n<div class=\"card\"><b>Check the slide table.</b> The table excerpt on the Lecture 14 slides has two misprints: row 0.8, column .04 should read <b>0.7995</b> (P(Z ≤ 0.84)), and row 0.9, column .00 should read <b>0.8159</b> (P(Z ≤ 0.90)). Use the full table at the back of the textbook, or Excel.</div><!--viz:sfm-l14-normal-between--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Normal curve of MBA starting salaries, mean 40,000 and standard deviation 5,000. The band from 34,000 to 46,000 (z = −1.2 to 1.2) holds 0.7698; each tail outside it holds 0.1151.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">A 'between' probability is two left areas subtracted</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 200\" role=\"img\" aria-label=\"Normal curve of MBA starting salaries, mean 40,000 and standard deviation 5,000. The band from 34,000 to 46,000 (z = −1.2 to 1.2) holds 0.7698; each tail outside it holds 0.1151.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M151.4,168 L151.4,105.7 L154.2,102.1 L156.9,98.4 L159.7,94.7 L162.4,91 L165.1,87.3 L167.9,83.6 L170.6,79.9 L173.4,76.2 L176.1,72.7 L178.9,69.2 L181.6,65.9 L184.3,62.6 L187.1,59.6 L189.8,56.7 L192.6,53.9 L195.3,51.4 L198.1,49.1 L200.8,47 L203.5,45.2 L206.3,43.6 L209,42.3 L211.8,41.3 L214.5,40.6 L217.3,40.1 L220,40 L222.7,40.1 L225.5,40.6 L228.2,41.3 L231,42.3 L233.7,43.6 L236.5,45.2 L239.2,47 L241.9,49.1 L244.7,51.4 L247.4,53.9 L250.2,56.7 L252.9,59.6 L255.7,62.6 L258.4,65.9 L261.1,69.2 L263.9,72.7 L266.6,76.2 L269.4,79.9 L272.1,83.6 L274.9,87.3 L277.6,91 L280.3,94.7 L283.1,98.4 L285.8,102.1 L288.6,105.7 L288.6,168 Z\" style=\"fill:var(--blue-soft);stroke:none\"/><path d=\"M20,168 L20,167.7 L22.6,167.7 L25.3,167.6 L27.9,167.6 L30.5,167.5 L33.1,167.4 L35.8,167.3 L38.4,167.2 L41,167.1 L43.7,166.9 L46.3,166.7 L48.9,166.6 L51.5,166.3 L54.2,166.1 L56.8,165.8 L59.4,165.5 L62.1,165.2 L64.7,164.8 L67.3,164.4 L69.9,163.9 L72.6,163.4 L75.2,162.8 L77.8,162.2 L80.5,161.5 L83.1,160.7 L85.7,159.9 L88.3,159 L91,158 L93.6,156.9 L96.2,155.7 L98.9,154.5 L101.5,153.1 L104.1,151.6 L106.7,150 L109.4,148.4 L112,146.5 L114.6,144.6 L117.3,142.6 L119.9,140.4 L122.5,138.1 L125.1,135.7 L127.8,133.2 L130.4,130.6 L133,127.8 L135.7,124.9 L138.3,122 L140.9,118.9 L143.5,115.7 L146.2,112.4 L148.8,109.1 L151.4,105.7 L151.4,168 Z\" style=\"fill:var(--clay-soft);stroke:none\"/><path d=\"M288.6,168 L288.6,105.7 L291.2,109.1 L293.8,112.4 L296.5,115.7 L299.1,118.9 L301.7,122 L304.3,124.9 L307,127.8 L309.6,130.6 L312.2,133.2 L314.9,135.7 L317.5,138.1 L320.1,140.4 L322.7,142.6 L325.4,144.6 L328,146.5 L330.6,148.4 L333.3,150 L335.9,151.6 L338.5,153.1 L341.1,154.5 L343.8,155.7 L346.4,156.9 L349,158 L351.7,159 L354.3,159.9 L356.9,160.7 L359.5,161.5 L362.2,162.2 L364.8,162.8 L367.4,163.4 L370.1,163.9 L372.7,164.4 L375.3,164.8 L377.9,165.2 L380.6,165.5 L383.2,165.8 L385.8,166.1 L388.5,166.3 L391.1,166.6 L393.7,166.7 L396.3,166.9 L399,167.1 L401.6,167.2 L404.2,167.3 L406.9,167.4 L409.5,167.5 L412.1,167.6 L414.7,167.6 L417.4,167.7 L420,167.7 L420,168 Z\" style=\"fill:var(--clay-soft);stroke:none\"/><path d=\"M20,167.7 L24,167.6 L28,167.5 L32,167.4 L36,167.3 L40,167.1 L44,166.9 L48,166.6 L52,166.3 L56,165.9 L60,165.5 L64,164.9 L68,164.3 L72,163.5 L76,162.7 L80,161.6 L84,160.5 L88,159.1 L92,157.6 L96,155.8 L100,153.9 L104,151.7 L108,149.2 L112,146.5 L116,143.6 L120,140.3 L124,136.8 L128,133 L132,128.9 L136,124.6 L140,120 L144,115.1 L148,110.1 L152,104.9 L156,99.6 L160,94.2 L164,88.8 L168,83.4 L172,78.1 L176,72.8 L180,67.8 L184,63 L188,58.6 L192,54.5 L196,50.8 L200,47.6 L204,44.9 L208,42.8 L212,41.2 L216,40.3 L220,40 L224,40.3 L228,41.2 L232,42.8 L236,44.9 L240,47.6 L244,50.8 L248,54.5 L252,58.6 L256,63 L260,67.8 L264,72.8 L268,78.1 L272,83.4 L276,88.8 L280,94.2 L284,99.6 L288,104.9 L292,110.1 L296,115.1 L300,120 L304,124.6 L308,128.9 L312,133 L316,136.8 L320,140.3 L324,143.6 L328,146.5 L332,149.2 L336,151.7 L340,153.9 L344,155.8 L348,157.6 L352,159.1 L356,160.5 L360,161.6 L364,162.7 L368,163.5 L372,164.3 L376,164.9 L380,165.5 L384,165.9 L388,166.3 L392,166.6 L396,166.9 L400,167.1 L404,167.3 L408,167.4 L412,167.5 L416,167.6 L420,167.7\" style=\"fill:none;stroke:var(--ink);stroke-width:2\"/><path d=\"M151.4,168 L151.4,105.7\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/><path d=\"M288.6,168 L288.6,105.7\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/><path d=\"M14,168 L426,168\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M105.7,168 L105.7,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"105.7\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">30k</text><path d=\"M151.4,168 L151.4,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"151.4\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">34k</text><path d=\"M220,168 L220,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"220\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">40k</text><path d=\"M288.6,168 L288.6,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"288.6\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">46k</text><path d=\"M334.3,168 L334.3,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"334.3\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">50k</text><text x=\"220\" y=\"128\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:16px;font-weight:700\">0.7698</text><text x=\"220\" y=\"146\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">P(34k ≤ X ≤ 46k)</text><path d=\"M128,158 L84,112\" style=\"stroke:var(--ink-3);stroke-width:1;fill:none\"/><text x=\"70\" y=\"102\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">0.1151</text><path d=\"M312,158 L356,112\" style=\"stroke:var(--ink-3);stroke-width:1;fill:none\"/><text x=\"370\" y=\"102\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">0.1151</text><text x=\"20\" y=\"24\" text-anchor=\"start\" style=\"fill:var(--ink-2);font-size:13px\">μ = $40,000, σ = $5,000</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">z = ±1.2. The table gives P(Z ≤ −1.2) = 0.1151 for each tail by symmetry, so the band is 1 − 2(0.1151) = 0.7698.</figcaption></figure><!--/viz:sfm-l14-normal-between-->"
    },
    {
     "t": "From a probability back to a value",
     "src": "L#14",
     "h": "<div class=\"def\"><b>Reverse lookup:</b> when the probability is given and the value is wanted, find z first (table in reverse, or <code>NORM.S.INV</code>), then convert back with <b>x = μ + zσ</b>.</div>\n<p style=\"font-size:14.5px\"><strong>Pep Zone again</strong> (lead-time demand normal, μ = 15 gallons, σ = 6). With the reorder point at 20, z = 0.83 and the stockout risk is about 0.20. The manager wants it no higher than 0.05:</p>\n<ol>\n<li>A stockout is the <strong>right</strong> tail, so look up the left area 1 − 0.05 = 0.95: <strong>z = 1.645</strong>.</li>\n<li>x = 15 + 1.645 × 6 = <strong>24.87 gallons</strong>.</li>\n<li>Stock comes in whole units, so round <strong>up</strong> to 25; the risk is then slightly below 0.05.</li>\n</ol>\n<p style=\"font-size:14.5px\">Five more gallons cut the stockout risk from about 20% to 5%, so about 15% more of lead-time demand is met. Guesswork either over-buys (storage cost, capital tied up, spoilage for perishables) or under-buys (lost sales and unhappy customers); the distribution tells you how far to move.</p>\n<p style=\"font-size:14.5px\">Excel: <code>=NORM.S.INV(0.95)</code> = 1.645, or in one step <code>=NORM.INV(0.95, 15, 6)</code> = 24.87. R: <code>qnorm(0.95, 15, 6)</code>.</p><!--viz:sfm-l14-reorder-point--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Normal curve of lead-time demand with mean 15 and standard deviation 6 gallons. Beyond 20 gallons lies about 0.20; beyond 24.87 gallons lies 0.05, so moving the reorder point from 20 to 25 removes about 0.15 of stockout risk.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Raising the reorder point shrinks the stockout tail</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 200\" role=\"img\" aria-label=\"Normal curve of lead-time demand with mean 15 and standard deviation 6 gallons. Beyond 20 gallons lies about 0.20; beyond 24.87 gallons lies 0.05, so moving the reorder point from 20 to 25 removes about 0.15 of stockout risk.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M267.6,168 L267.6,77.5 L268.5,78.8 L269.5,80 L270.4,81.2 L271.3,82.5 L272.3,83.7 L273.2,85 L274.1,86.3 L275,87.5 L276,88.8 L276.9,90 L277.8,91.3 L278.8,92.5 L279.7,93.8 L280.6,95.1 L281.5,96.3 L282.5,97.6 L283.4,98.8 L284.3,100.1 L285.2,101.3 L286.2,102.5 L287.1,103.8 L288,105 L289,106.2 L289.9,107.4 L290.8,108.6 L291.7,109.8 L292.7,111 L293.6,112.1 L294.5,113.3 L295.4,114.5 L296.4,115.6 L297.3,116.7 L298.2,117.9 L299.2,119 L300.1,120.1 L301,121.1 L301.9,122.2 L302.9,123.3 L303.8,124.3 L304.7,125.4 L305.7,126.4 L306.6,127.4 L307.5,128.4 L308.4,129.4 L309.4,130.3 L310.3,131.3 L311.2,132.2 L312.1,133.1 L313.1,134 L314,134.9 L314,168 Z\" style=\"fill:var(--clay-soft);stroke:none\"/><path d=\"M314,168 L314,134.9 L316.1,136.9 L318.2,138.8 L320.4,140.6 L322.5,142.4 L324.6,144 L326.7,145.6 L328.8,147.1 L331,148.6 L333.1,149.9 L335.2,151.2 L337.3,152.4 L339.4,153.6 L341.6,154.7 L343.7,155.7 L345.8,156.7 L347.9,157.6 L350,158.4 L352.2,159.2 L354.3,159.9 L356.4,160.6 L358.5,161.2 L360.6,161.8 L362.8,162.4 L364.9,162.9 L367,163.3 L369.1,163.7 L371.2,164.1 L373.4,164.5 L375.5,164.8 L377.6,165.1 L379.7,165.4 L381.8,165.7 L384,165.9 L386.1,166.1 L388.2,166.3 L390.3,166.5 L392.4,166.7 L394.6,166.8 L396.7,166.9 L398.8,167 L400.9,167.1 L403,167.2 L405.2,167.3 L407.3,167.4 L409.4,167.5 L411.5,167.5 L413.6,167.6 L415.8,167.6 L417.9,167.7 L420,167.7 L420,168 Z\" style=\"fill:var(--clay);opacity:.45;stroke:none\"/><path d=\"M20,167.7 L24,167.6 L28,167.5 L32,167.4 L36,167.3 L40,167.1 L44,166.9 L48,166.6 L52,166.3 L56,165.9 L60,165.5 L64,164.9 L68,164.3 L72,163.5 L76,162.7 L80,161.6 L84,160.5 L88,159.1 L92,157.6 L96,155.8 L100,153.9 L104,151.7 L108,149.2 L112,146.5 L116,143.6 L120,140.3 L124,136.8 L128,133 L132,128.9 L136,124.6 L140,120 L144,115.1 L148,110.1 L152,104.9 L156,99.6 L160,94.2 L164,88.8 L168,83.4 L172,78.1 L176,72.8 L180,67.8 L184,63 L188,58.6 L192,54.5 L196,50.8 L200,47.6 L204,44.9 L208,42.8 L212,41.2 L216,40.3 L220,40 L224,40.3 L228,41.2 L232,42.8 L236,44.9 L240,47.6 L244,50.8 L248,54.5 L252,58.6 L256,63 L260,67.8 L264,72.8 L268,78.1 L272,83.4 L276,88.8 L280,94.2 L284,99.6 L288,104.9 L292,110.1 L296,115.1 L300,120 L304,124.6 L308,128.9 L312,133 L316,136.8 L320,140.3 L324,143.6 L328,146.5 L332,149.2 L336,151.7 L340,153.9 L344,155.8 L348,157.6 L352,159.1 L356,160.5 L360,161.6 L364,162.7 L368,163.5 L372,164.3 L376,164.9 L380,165.5 L384,165.9 L388,166.3 L392,166.6 L396,166.9 L400,167.1 L404,167.3 L408,167.4 L412,167.5 L416,167.6 L420,167.7\" style=\"fill:none;stroke:var(--ink);stroke-width:2\"/><path d=\"M267.6,168 L267.6,77.5\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none\"/><path d=\"M314,168 L314,134.9\" style=\"stroke:var(--clay);stroke-width:1.5;fill:none\"/><path d=\"M14,168 L426,168\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M105.7,168 L105.7,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"105.7\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">3</text><path d=\"M162.9,168 L162.9,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"162.9\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">9</text><path d=\"M220,168 L220,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"220\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">15</text><path d=\"M267.6,168 L267.6,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"267.6\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">20</text><path d=\"M314,168 L314,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"314\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">24.87</text><text x=\"291\" y=\"152\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">0.15</text><path d=\"M328,160 L366,128\" style=\"stroke:var(--ink-3);stroke-width:1;fill:none\"/><text x=\"378\" y=\"120\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">0.05</text><text x=\"430\" y=\"40\" text-anchor=\"end\" style=\"fill:var(--clay);font-size:13px\">reorder 20 → 0.20</text><text x=\"430\" y=\"60\" text-anchor=\"end\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">reorder 25 → 0.05</text><text x=\"20\" y=\"30\" text-anchor=\"start\" style=\"fill:var(--ink-2);font-size:13px\">μ = 15, σ = 6 gallons</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">x = μ + zσ = 15 + 1.645 × 6 = 24.87, rounded up to 25: five more gallons cut the risk from about 20% to 5%.</figcaption></figure><!--/viz:sfm-l14-reorder-point-->"
    },
    {
     "t": "The exponential distribution",
     "src": "L#14",
     "h": "<div class=\"def\">The <b>exponential distribution</b> describes the time or distance <b>between</b> events, or the time taken to finish a task: gaps between vehicles at a toll booth, time to complete a questionnaire, distance between major defects on a highway, service time in a queue.</div>\n<ul>\n<li>f(x) = (1/μ)·e<sup>−x/μ</sup> for x ≥ 0. <strong>μ is both the mean and the standard deviation.</strong></li>\n<li>Skewed to the right, with skewness 2: most gaps are short, a few are very long.</li>\n<li><strong>P(X ≤ x₀) = 1 − e<sup>−x₀/μ</sup></strong>, so you never need to integrate.</li>\n</ul>\n<p style=\"font-size:14.5px\"><strong>His example:</strong> cars reach a full-service petrol pump with a mean gap of 3 minutes. P(the next gap is 2 minutes or less) = 1 − e<sup>−2/3</sup> = <strong>0.4866</strong> (he quoted it as about 48%). The owner can use it to plan staff breaks.</p>\n<h4>Poisson and exponential: two views of one process</h4>\n<p style=\"font-size:14.5px\">The Poisson gives the <strong>number of occurrences in an interval</strong> (how many customers this hour); the exponential gives the <strong>length of the interval between occurrences</strong> (how long until the next customer). From historical averages the pair sizes waiting lines, service stations and hospital desks.</p>\n<p style=\"font-size:14.5px\">Excel: <code>=EXPON.DIST(2, 1/3, TRUE)</code> = 0.4866. The second argument is the rate 1/μ, not the mean. R: <code>pexp(2, rate = 1/3)</code>.</p>\n<div class=\"def\"><b>From the lecture (L#14):</b> this closes the probability-distribution chapters. Most of the course's attention stays on the normal distribution because of its managerial uses; practice questions follow and will be discussed in the live session.</div><!--viz:sfm-l14-poisson-vs-exponential--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Comparison table of the Poisson and exponential distributions: what each measures, discrete versus continuous, parameter, spread, a petrol-pump example and the Excel function.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Poisson counts arrivals; exponential times the gaps</div><div class=\"scroller\"><table><thead><tr><th></th><th>Poisson</th><th>Exponential</th></tr></thead><tbody><tr><td>Measures</td><td>how <b>many</b> arrivals in an interval</td><td style=\"background:var(--blue-soft)\">how <b>long</b> until the next arrival</td></tr><tr><td>Type</td><td>discrete: 0, 1, 2, …</td><td>continuous: any x ≥ 0</td></tr><tr><td>Parameter</td><td>μ = mean count per interval</td><td>μ = mean gap between arrivals</td></tr><tr><td>Spread</td><td>variance = μ</td><td>standard deviation = μ</td></tr><tr><td>Pump with a 3-minute mean gap</td><td>μ = 20 cars per hour</td><td style=\"background:var(--blue-soft)\">P(gap ≤ 2 min) = 1 − e<sup>−2/3</sup> = 0.4866</td></tr><tr><td>Excel</td><td><span style=\"font-family:var(--mono)\">POISSON.DIST(x, μ, TRUE)</span></td><td><span style=\"font-family:var(--mono)\">EXPON.DIST(x, 1/μ, TRUE)</span></td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The same arrival process has both: a mean gap of 3 minutes is the same as a mean of 20 arrivals an hour.</figcaption></figure><!--/viz:sfm-l14-poisson-vs-exponential-->"
    },
    {
     "t": "Case: Specialty Toys — how many to order",
     "src": "L#15",
     "h": "<div class=\"card\"><b>The set-up, in brief.</b> A toy retailer launches a new product each pre-holiday season and has to place a single order with its overseas maker months ahead (June or July, for an October launch). This year it is a talking teddy with a built-in barometer that gives a short weather forecast. Order too few and sales are lost; order too many and the leftovers are cleared at a deep discount after the season. The management team has suggested four very different quantities.</div>\n<div class=\"scroller\"><table><thead><tr><th>Given</th><th>Value</th></tr></thead><tbody>\n<tr><td>Price in season / cost</td><td>$24 / $16 → <strong>+$8</strong> per unit sold</td></tr>\n<tr><td>Clearance price after the season</td><td>$5 → <strong>−$11</strong> per unit left over</td></tr>\n<tr><td>Expected demand</td><td>20,000 units</td></tr>\n<tr><td>Forecast range</td><td>95% chance demand is between 10,000 and 30,000</td></tr>\n<tr><td>Suggested orders</td><td>15,000 · 18,000 · 24,000 · 28,000</td></tr>\n</tbody></table></div>\n<h4>Step 1: turn the forecast into a normal curve</h4>\n<p style=\"font-size:14.5px\">Expected demand is the mean, <strong>μ = 20,000</strong>. \"95% between 10,000 and 30,000\" is a <strong>central</strong> range, so 2.5% lies in each tail and 30,000 sits at the 97.5th percentile: z = <code>NORM.S.INV(0.975)</code> = 1.96. Then <strong>σ = (30,000 − 20,000)/1.96 = 5,102 units</strong>. Draw the curve and mark these numbers first.</p>\n<h4>Step 2: stockout probability for each suggestion</h4>\n<p style=\"font-size:14.5px\">A stockout means demand exceeds the order Q. With z = (Q − 20,000)/5,102, <strong>P(stockout) = 1 − NORM.S.DIST(z, TRUE)</strong> (Excel, unrounded z):</p>\n<div class=\"scroller\"><table><thead><tr><th>Order Q</th><th>z</th><th>P(demand ≤ Q)</th><th>P(stockout)</th></tr></thead><tbody><tr><td>15,000</td><td>−0.98</td><td>0.1635</td><td><strong>0.8365</strong></td></tr><tr><td>18,000</td><td>−0.39</td><td>0.3475</td><td><strong>0.6525</strong></td></tr><tr><td>24,000</td><td>0.78</td><td>0.7835</td><td><strong>0.2165</strong></td></tr><tr><td>28,000</td><td>1.57</td><td>0.9416</td><td><strong>0.0584</strong></td></tr></tbody></table></div>\n<p style=\"font-size:14.5px\">Check: every order below the mean has a stockout risk above 50%, every order above it a risk below 50%. Ordering exactly 20,000 would mean a 50% risk.</p><!--viz:sfm-l15-sigma-from-range--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Normal demand curve with mean 20,000. The central band from 10,000 to 30,000 holds 0.95, leaving 0.025 in each tail; 30,000 sits at z = 1.96, so sigma = 10,000 / 1.96 = 5,102.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Turning a 95% forecast range into σ</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 216\" role=\"img\" aria-label=\"Normal demand curve with mean 20,000. The central band from 10,000 to 30,000 holds 0.95, leaving 0.025 in each tail; 30,000 sits at z = 1.96, so sigma = 10,000 / 1.96 = 5,102.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M108,168 L108,149.2 L112.5,146.2 L117,142.8 L121.4,139.1 L125.9,135 L130.4,130.6 L134.9,125.8 L139.4,120.7 L143.8,115.3 L148.3,109.7 L152.8,103.9 L157.3,97.9 L161.8,91.9 L166.2,85.8 L170.7,79.8 L175.2,73.9 L179.7,68.2 L184.2,62.9 L188.6,57.9 L193.1,53.4 L197.6,49.5 L202.1,46.1 L206.6,43.5 L211,41.6 L215.5,40.4 L220,40 L224.5,40.4 L229,41.6 L233.4,43.5 L237.9,46.1 L242.4,49.5 L246.9,53.4 L251.4,57.9 L255.8,62.9 L260.3,68.2 L264.8,73.9 L269.3,79.8 L273.8,85.8 L278.2,91.9 L282.7,97.9 L287.2,103.9 L291.7,109.7 L296.2,115.3 L300.6,120.7 L305.1,125.8 L309.6,130.6 L314.1,135 L318.6,139.1 L323,142.8 L327.5,146.2 L332,149.2 L332,168 Z\" style=\"fill:var(--blue-soft);stroke:none\"/><path d=\"M20,168 L20,167.7 L21.8,167.7 L23.5,167.7 L25.3,167.6 L27,167.6 L28.8,167.5 L30.6,167.5 L32.3,167.4 L34.1,167.4 L35.8,167.3 L37.6,167.2 L39.4,167.1 L41.1,167 L42.9,167 L44.6,166.8 L46.4,166.7 L48.2,166.6 L49.9,166.5 L51.7,166.3 L53.4,166.2 L55.2,166 L57,165.8 L58.7,165.6 L60.5,165.4 L62.2,165.2 L64,164.9 L65.8,164.6 L67.5,164.4 L69.3,164.1 L71,163.7 L72.8,163.4 L74.6,163 L76.3,162.6 L78.1,162.1 L79.8,161.7 L81.6,161.2 L83.4,160.7 L85.1,160.1 L86.9,159.5 L88.6,158.9 L90.4,158.2 L92.2,157.5 L93.9,156.8 L95.7,156 L97.4,155.2 L99.2,154.3 L101,153.4 L102.7,152.4 L104.5,151.4 L106.2,150.4 L108,149.2 L108,168 Z\" style=\"fill:var(--clay-soft);stroke:none\"/><path d=\"M332,168 L332,149.2 L333.8,150.4 L335.5,151.4 L337.3,152.4 L339,153.4 L340.8,154.3 L342.6,155.2 L344.3,156 L346.1,156.8 L347.8,157.5 L349.6,158.2 L351.4,158.9 L353.1,159.5 L354.9,160.1 L356.6,160.7 L358.4,161.2 L360.2,161.7 L361.9,162.1 L363.7,162.6 L365.4,163 L367.2,163.4 L369,163.7 L370.7,164.1 L372.5,164.4 L374.2,164.6 L376,164.9 L377.8,165.2 L379.5,165.4 L381.3,165.6 L383,165.8 L384.8,166 L386.6,166.2 L388.3,166.3 L390.1,166.5 L391.8,166.6 L393.6,166.7 L395.4,166.8 L397.1,167 L398.9,167 L400.6,167.1 L402.4,167.2 L404.2,167.3 L405.9,167.4 L407.7,167.4 L409.4,167.5 L411.2,167.5 L413,167.6 L414.7,167.6 L416.5,167.7 L418.2,167.7 L420,167.7 L420,168 Z\" style=\"fill:var(--clay-soft);stroke:none\"/><path d=\"M20,167.7 L24,167.6 L28,167.5 L32,167.4 L36,167.3 L40,167.1 L44,166.9 L48,166.6 L52,166.3 L56,165.9 L60,165.5 L64,164.9 L68,164.3 L72,163.5 L76,162.7 L80,161.6 L84,160.5 L88,159.1 L92,157.6 L96,155.8 L100,153.9 L104,151.7 L108,149.2 L112,146.5 L116,143.6 L120,140.3 L124,136.8 L128,133 L132,128.9 L136,124.6 L140,120 L144,115.1 L148,110.1 L152,104.9 L156,99.6 L160,94.2 L164,88.8 L168,83.4 L172,78.1 L176,72.8 L180,67.8 L184,63 L188,58.6 L192,54.5 L196,50.8 L200,47.6 L204,44.9 L208,42.8 L212,41.2 L216,40.3 L220,40 L224,40.3 L228,41.2 L232,42.8 L236,44.9 L240,47.6 L244,50.8 L248,54.5 L252,58.6 L256,63 L260,67.8 L264,72.8 L268,78.1 L272,83.4 L276,88.8 L280,94.2 L284,99.6 L288,104.9 L292,110.1 L296,115.1 L300,120 L304,124.6 L308,128.9 L312,133 L316,136.8 L320,140.3 L324,143.6 L328,146.5 L332,149.2 L336,151.7 L340,153.9 L344,155.8 L348,157.6 L352,159.1 L356,160.5 L360,161.6 L364,162.7 L368,163.5 L372,164.3 L376,164.9 L380,165.5 L384,165.9 L388,166.3 L392,166.6 L396,166.9 L400,167.1 L404,167.3 L408,167.4 L412,167.5 L416,167.6 L420,167.7\" style=\"fill:none;stroke:var(--ink);stroke-width:2\"/><path d=\"M108,168 L108,149.2\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/><path d=\"M332,168 L332,149.2\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/><path d=\"M14,168 L426,168\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M108,168 L108,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"108\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10k</text><path d=\"M164,168 L164,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"164\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">15k</text><path d=\"M220,168 L220,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"220\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">20k</text><path d=\"M276,168 L276,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"276\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">25k</text><path d=\"M332,168 L332,173\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"332\" y=\"187\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">30k</text><text x=\"108\" y=\"207\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">z = −1.96</text><text x=\"332\" y=\"207\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">z = 1.96</text><text x=\"220\" y=\"132\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:16px;font-weight:700\">0.95</text><text x=\"220\" y=\"150\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">demand 10k to 30k</text><path d=\"M96,162 L64,120\" style=\"stroke:var(--ink-3);stroke-width:1;fill:none\"/><text x=\"52\" y=\"112\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">0.025</text><path d=\"M344,162 L376,120\" style=\"stroke:var(--ink-3);stroke-width:1;fill:none\"/><text x=\"388\" y=\"112\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">0.025</text><text x=\"20\" y=\"24\" text-anchor=\"start\" style=\"fill:var(--ink-2);font-size:13px\">μ = 20,000</text><text x=\"430\" y=\"24\" text-anchor=\"end\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">σ = 10,000 / 1.96 = 5,102</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">A central 95% range leaves 2.5% in each tail, so the upper limit is 1.96σ above the mean, not 1.645σ.</figcaption></figure><!--/viz:sfm-l15-sigma-from-range-->"
    },
    {
     "t": "Profit scenarios and the service-level order",
     "src": "L#15",
     "h": "<p style=\"font-size:14.5px\"><strong>Profit = $24 × units sold + $5 × units left over − $16 × units ordered</strong>, where units sold is the smaller of the order and demand. The lecture builds this in Excel for worst (10,000), most likely (20,000) and best (30,000) demand. Exact profits: Q = 22,653 gives −$59,183, $130,817 and $181,224.</p>\n<!--viz:sfm-l15-profit-scenarios--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table of order quantities 15,000, 18,000, 22,653, 24,000 and 28,000 with their stockout probability and profit when demand is 10,000, 20,000 or 30,000; losses shaded red, profits green.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Profit for each order under three demand scenarios</div><div class=\"scroller\"><table><thead><tr><th>Order Q</th><th>Stockout risk</th><th>Demand 10k</th><th>Demand 20k</th><th>Demand 30k</th></tr></thead><tbody><tr><td>15,000</td><td>0.84</td><td style=\"background:var(--good-soft)\">$25k</td><td style=\"background:var(--good-soft)\">$120k</td><td style=\"background:var(--good-soft)\">$120k</td></tr><tr><td>18,000</td><td>0.65</td><td style=\"background:var(--bad-soft)\">−⁠$8k</td><td style=\"background:var(--good-soft)\">$144k</td><td style=\"background:var(--good-soft)\">$144k</td></tr><tr><td>22,653 (70%)</td><td>0.30</td><td style=\"background:var(--bad-soft)\">−⁠$59.2k</td><td style=\"background:var(--good-soft)\">$130.8k</td><td style=\"background:var(--good-soft)\">$181.2k</td></tr><tr><td>24,000</td><td>0.22</td><td style=\"background:var(--bad-soft)\">−⁠$74k</td><td style=\"background:var(--good-soft)\">$116k</td><td style=\"background:var(--good-soft)\">$192k</td></tr><tr><td>28,000</td><td>0.06</td><td style=\"background:var(--bad-soft)\">−⁠$118k</td><td style=\"background:var(--good-soft)\">$72k</td><td style=\"background:var(--good-soft)\">$224k</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">k = thousand dollars. Bigger orders win big when demand is high and lose heavily when it is low; the stockout column shows the price of playing safe.</figcaption></figure><!--/viz:sfm-l15-profit-scenarios-->\n<p style=\"font-size:14.5px\"><strong>The 70% rule.</strong> One manager felt the profit potential justified ordering for a 70% chance of meeting demand, i.e. a 30% stockout risk. <code>NORM.S.INV(0.70)</code> = 0.52, so Q = 20,000 + 0.52 × 5,102 = <strong>22,653 units</strong>. (With the unrounded z = 0.5244, Excel gives 22,676.)</p>\n<p style=\"font-size:14.5px\"><strong>Reading the table:</strong> the bigger the order, the bigger the best-case profit and the deeper the worst-case loss. There is no single correct order. The analysis prices each option's risk and pay-off; which one to choose depends on management's appetite for risk. That is still far better than a guess.</p>\n<div class=\"def\"><b>From the lecture (L#15):</b> two questions were set for the live session: the stockout risk if 40,000 units are ordered, and the order that meets 90% of demand. Worked answers: z = (40,000 − 20,000)/5,102 = 3.92, so the risk is about 0.00004, practically nil, but at the price of huge leftovers. For 90%, z = 1.28 and Q = 20,000 + 1.28 × 5,102 ≈ 26,531 units (26,539 with Excel's unrounded z = 1.2816).</div>\n<div class=\"card\"><b>If you read the LMS auto-summary of this lecture:</b> it gives 16.35% as the stockout risk at 15,000 units, but that is P(demand ≤ 15,000); the risk is 83.65%. Its profits for the 18,000 and 28,000 orders are also wrong. The tables here are recomputed.</div>"
    },
    {
     "t": "Case: Go Bananas — setting a shutdown rule",
     "src": "L#16",
     "h": "<div class=\"card\"><b>The set-up, in brief.</b> A cereal maker (renamed GIG, Great Indian Grains, in the lecture) launches a rice-flake cereal with banana-flavoured marshmallows. Each box should carry between 50 g and 75 g of marshmallows. When the filling process works properly, 8% of boxes still fall outside that range. Each week a random sample of 25 boxes is weighed; if 5 or more are out of spec, production stops for inspection.</div>\n<p style=\"font-size:14.5px\"><strong>Why binomial:</strong> each sampled box is in or out of spec (two outcomes), the 8% chance is the same for every box, boxes are independent, and the number of trials is fixed at 25. So X = boxes out of spec ~ binomial(n = 25, p = 0.08), with a mean of np = 2 per sample.</p>\n<h4>Question 1: how often does a healthy line get stopped?</h4>\n<p style=\"font-size:14.5px\">P(X ≥ 5) = P(5) + P(6) + … + P(25) = 1 − P(X ≤ 4) = <strong>0.0451</strong>. About 4.5% of weeks, the line is stopped although nothing is wrong: a false alarm.</p>\n<h4>Question 2: loosen the rule until false alarms are 1% or less</h4>\n<p style=\"font-size:14.5px\">First decide the direction: to stop less often, the rule must demand <strong>more</strong> failures. ≥ 4 boxes gives 13.5%, ≥ 5 gives 4.5%, ≥ 6 gives 1.2% (still above 1%), ≥ 7 gives <strong>0.28%</strong>. So the rule becomes 7 or more. The catch: the line keeps running even when 7 of 25 boxes (28%) are out of spec, which can hurt the brand.</p>\n<h4>Question 3: keep the 5-box rule and improve the process instead</h4>\n<p style=\"font-size:14.5px\">Change p and recompute P(X ≥ 5): 9% → 6.9%, 8% → 4.5%, 7% → 2.7%, 6% → 1.5%, 5% → <strong>0.72%</strong>. The defect rate must come down to about 5% (strictly, somewhere between 5% and 6%; 5% is the safe answer).</p>\n<p style=\"font-size:14.5px\">His analogy: if 10% of students fail at a 40% pass mark, you can lower the pass mark (relax the rule) or teach better (improve the process). The second is the lasting fix. And no process is 100% error-free, so the goal is a small false-alarm rate, not zero.</p><!--viz:sfm-l16-shutdown-tail--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Bar chart of the binomial distribution with n = 25 and p = 0.08: P(0) = 0.12, P(1) = 0.27, P(2) = 0.28, P(3) = 0.19, P(4) = 0.09, P(5) = 0.03, and tiny bars beyond. The bars from 5 upward are shaded; together they give P(X ≥ 5) = 0.045.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">How often a healthy line trips the 5-box rule</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 222\" role=\"img\" aria-label=\"Bar chart of the binomial distribution with n = 25 and p = 0.08: P(0) = 0.12, P(1) = 0.27, P(2) = 0.28, P(3) = 0.19, P(4) = 0.09, P(5) = 0.03, and tiny bars beyond. The bars from 5 upward are shaded; together they give P(X ≥ 5) = 0.045.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M22,170 L420,170\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><rect x=\"28\" y=\"116.1\" width=\"24\" height=\"53.9\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"40\" y=\"110.1\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">.12</text><text x=\"40\" y=\"188\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><rect x=\"64\" y=\"52.9\" width=\"24\" height=\"117.1\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"76\" y=\"46.9\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">.27</text><text x=\"76\" y=\"188\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">1</text><rect x=\"100\" y=\"47.8\" width=\"24\" height=\"122.2\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"112\" y=\"41.8\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">.28</text><text x=\"112\" y=\"188\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">2</text><rect x=\"136\" y=\"88.5\" width=\"24\" height=\"81.5\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"148\" y=\"82.5\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">.19</text><text x=\"148\" y=\"188\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">3</text><rect x=\"172\" y=\"131\" width=\"24\" height=\"39\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"184\" y=\"125\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">.09</text><text x=\"184\" y=\"188\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">4</text><rect x=\"208\" y=\"155.8\" width=\"24\" height=\"14.2\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"220\" y=\"149.8\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px;font-family:var(--mono)\">.03</text><text x=\"220\" y=\"188\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">5</text><rect x=\"244\" y=\"165.9\" width=\"24\" height=\"4.1\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"256\" y=\"188\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">6</text><rect x=\"280\" y=\"169\" width=\"24\" height=\"1\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"292\" y=\"188\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">7</text><text x=\"328\" y=\"188\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">8</text><text x=\"364\" y=\"188\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">9</text><text x=\"400\" y=\"188\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text><text x=\"310\" y=\"108\" text-anchor=\"middle\" style=\"fill:var(--clay);font-size:13px\">shut down if x ≥ 5</text><text x=\"310\" y=\"128\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">P(X ≥ 5) = 0.045</text><text x=\"220\" y=\"210\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">boxes out of spec in a weekly sample of 25</text><text x=\"20\" y=\"24\" text-anchor=\"start\" style=\"fill:var(--ink-2);font-size:13px\">n = 25, p = 0.08</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Even with the process working properly, about 4.5% of weekly samples land in the shaded tail and stop the line.</figcaption></figure><!--/viz:sfm-l16-shutdown-tail--><!--viz:sfm-l16-two-levers--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Two-lever table. Raising the shutdown rule from 4 to 7 boxes at an 8% defect rate cuts false halts from 13.5% to 0.28%. Keeping the 5-box rule and cutting the defect rate from 8% to 4% cuts them from 4.5% to 0.28%; 5% gives 0.72%.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Two ways to get false halts under 1%</div><div class=\"scroller\"><table><thead><tr><th>Halt rule</th><th>False halts</th><th>Defect rate</th><th>False halts</th></tr></thead><tbody><tr><td>≥ 4 boxes</td><td>13.5%</td><td>8%</td><td>4.5%</td></tr><tr><td>≥ 5 boxes</td><td>4.5%</td><td>7%</td><td>2.7%</td></tr><tr><td>≥ 6 boxes</td><td>1.2%</td><td>6%</td><td>1.5%</td></tr><tr><td>≥ 7 boxes</td><td style=\"background:var(--good-soft)\">0.28%</td><td>5%</td><td style=\"background:var(--good-soft)\">0.72%</td></tr><tr><td></td><td></td><td>4%</td><td style=\"background:var(--good-soft)\">0.28%</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Left: loosen the rule at an 8% defect rate. Right: keep the 5-box rule and cut defects. Both reach the 1% goal (green); the lecture prefers fixing the process.</figcaption></figure><!--/viz:sfm-l16-two-levers--><h4>From the case sheet (attachment to L#15 and L#16)</h4>\n<p style=\"font-size:14.5px\">The sheet the lecturer shared is the course's own Indian version of the case. Details the notes above leave out: the cereal is sold in <strong>16-ounce boxes</strong> while the marshmallow limits are in grams (50 g to 75 g); the weekly 25-box check is proposed by <strong>Priya Sharma, Vice President of Production</strong>, whose team designed the line to run at 8% out of spec; and the 5-box shutdown rule is a management decision taken \"after much debate\". All the figures in the notes above match the sheet.</p>\n<div class=\"scroller\"><table><thead><tr><th>The report asks</th><th>Answer</th></tr></thead><tbody>\n<tr><td>1. P(shutdown) on a properly working line, and a comment on the 5-box policy</td><td>P(X ≥ 5) = 0.0451, plus a comment (see below)</td></tr>\n<tr><td>2. How many failing boxes should trigger a shutdown so a healthy line stops no more than 1% of the time?</td><td>7 or more (0.28%); 6 or more gives 1.23%, just over the goal</td></tr>\n<tr><td>3. Keeping the 5-box rule, to what level must the out-of-spec percentage fall for P(X ≥ 5) ≤ 0.01?</td><td>About <strong>5.4% or lower</strong>; the lecture rounds this to 5%</td></tr>\n</tbody></table></div>\n<h4>Question 3, exactly</h4>\n<p style=\"font-size:14.5px\">Solving P(X ≥ 5) = 0.01 for n = 25 gives p ≈ <strong>0.0542</strong>. Any defect rate at or below about 5.4% meets the goal. 5.5% does not: it gives P(X ≥ 5) = 0.0106, just above 1%. So \"somewhere between 5% and 6%\" means the lower part of that range, and the lecture's 5% (P = 0.0072) is the safe round answer.</p>\n<h4>Commenting on the policy (our own check, not worked in the lecture)</h4>\n<ul>\n<li><strong>Cost of false alarms:</strong> 0.0451 a week over 52 weeks is about <strong>2.3 needless shutdowns a year</strong> on a line that is working properly. With the 7-box rule it is about 0.14 a year, roughly one every seven years.</li>\n<li><strong>The other side of the rule:</strong> a rule must also catch a line that has really gone wrong. If the line slips to 20% out of spec, the 5-box rule stops it in 58% of weekly samples; the 7-box rule in only 22%. That is the number behind the lecture's warning that loosening the rule puts the brand at risk, and why improving the process (lower p, same rule) is the better fix.</li>\n</ul>"
    },
    {
     "t": "Building a probability table in Excel",
     "src": "L#16",
     "h": "<p style=\"font-size:14.5px\">The lecture builds the whole distribution in Excel, then reads every answer off it.</p>\n<ol>\n<li>Put the parameters in cells: n = 25 in F1, p = 0.08 in F2. List x = 0, 1, …, 25 down column A.</li>\n<li>In B3 type <code>=BINOM.DIST(A3, $F$1, $F$2, FALSE)</code>. The arguments are number of successes, trials, probability of success, cumulative.</li>\n<li>Drag the fill handle down. Without the <strong>$</strong> signs F1 would shift to F2, F3, … and return errors. Press <strong>F4</strong> on a cell reference to lock it.</li>\n<li>Sum the rows you need, or use the complement: <code>=1-BINOM.DIST(4, $F$1, $F$2, TRUE)</code> = 0.0451.</li>\n<li>To compare scenarios, copy the results and <strong>Paste Special → Values</strong>, then change F2. Pasted values stay fixed; formulas would recalculate.</li>\n</ol>\n<div class=\"scroller\"><table><thead><tr><th>Last argument</th><th>Returns</th><th>Example (n = 25, p = 0.08)</th></tr></thead><tbody>\n<tr><td><code>FALSE</code></td><td>probability mass: P(X = x) exactly</td><td>P(X = 3) = 0.1881</td></tr>\n<tr><td><code>TRUE</code></td><td>cumulative: P(X ≤ x)</td><td>P(X ≤ 3) = 0.8649, the sum of the first four FALSE values</td></tr>\n</tbody></table></div>\n<p style=\"font-size:14.5px\">Changing F1 or F2 updates the whole table at once: with p = 0.09 the shutdown chance rises to 6.9%; with a sample of 50 and the same 5-box rule it jumps to 37%. R gives the same numbers with <code>dbinom(3, 25, 0.08)</code> (exactly) and <code>1 - pbinom(4, 25, 0.08)</code> (5 or more).</p>\n<div class=\"def\"><b>From the lecture (L#16):</b> before calculating, pause and decide which way the answer should move — should the rule be looser or stricter, should the defect rate go up or down? He also asks students to keep Excel to hand for these table-building cases.</div>"
    },
    {
     "t": "Case: McNeil's Auto Mall — staffing with the Poisson",
     "src": "L#18",
     "h": "<div class=\"card\"><b>The set-up, in brief.</b> A car dealer likes having a few more customers on the lot than her salespeople can serve, because a busy lot signals demand, but too many waiting customers walk away. On Saturday mornings (8 a.m. to noon, the busiest time) customers arrive at random at an average of 6.8 an hour, and a salesperson spends about an hour with each. Her rule of thumb is two more customers than salespeople, and she will accept more than two extra no more than 10% of the time.</div>\n<p style=\"font-size:14.5px\"><strong>Where the numbers come from:</strong> the busiest slot, the 6.8 average and the one hour per customer are all read from the dealer's own historical records and experience. All three are averages, so 6.8 customers is not a contradiction.</p>\n<h4>1 · Which distribution?</h4>\n<p style=\"font-size:14.5px\">Random arrivals at a constant rate, counted over a fixed interval (one hour): <strong>Poisson with μ = 6.8</strong>. One salesperson serves one customer at a time.</p>\n<h4>2 · Five salespeople: is the rule met?</h4>\n<p style=\"font-size:14.5px\">\"More than two beyond 5\" means <strong>more than 7 arrivals</strong>: P(X &gt; 7) = 1 − P(X ≤ 7) = 1 − <code>POISSON.DIST(7, 6.8, TRUE)</code> = <strong>0.3715</strong>. That is far above 10%, so five is too few.</p>\n<p style=\"font-size:14.5px\">A student added P(8) + P(9) + P(10) + P(11) and got about 0.33. The idea was right, but the Poisson has <strong>no upper limit</strong>: there is always some chance of 12, 13, … arrivals. Start from the end you know (zero) and subtract: 1 − P(X ≤ 7).</p>\n<h4>3 · The minimum number of salespeople</h4>\n<p style=\"font-size:14.5px\">Now the probability is fixed and the staffing is unknown. Fill <code>POISSON.DIST(x, 6.8, TRUE)</code> down a column and find where it first reaches 0.90: P(X ≤ 9) = 0.85 is not enough, P(X ≤ 10) = 0.9151 is. So up to 10 customers is acceptable, which means <strong>8 salespeople</strong> (10 − 2), with a crowding risk of 1 − 0.9151 = 8.5%.</p><!--viz:sfm-l18-mcneil-staffing--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Trace table for Poisson arrivals with mean 6.8: with 5 salespeople the crowding risk is 0.3715, 6 gives 0.2452, 7 gives 0.1498, 8 gives 0.0849 and 9 gives 0.0448. Eight is the first staffing level at or below 10%.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Adding salespeople until the risk drops below 10%</div><div class=\"scroller\"><table><thead><tr><th>Salespeople</th><th>Crowded above</th><th>Risk</th><th>Within 10%?</th></tr></thead><tbody><tr><td>5</td><td>7</td><td>0.3715</td><td style=\"background:var(--bad-soft)\">no</td></tr><tr><td>6</td><td>8</td><td>0.2452</td><td style=\"background:var(--bad-soft)\">no</td></tr><tr><td>7</td><td>9</td><td>0.1498</td><td style=\"background:var(--bad-soft)\">no</td></tr><tr><td>8</td><td>10</td><td style=\"background:var(--blue-soft)\">0.0849</td><td style=\"background:var(--good-soft)\">yes</td></tr><tr><td>9</td><td>11</td><td>0.0448</td><td style=\"background:var(--good-soft)\">yes</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Each extra salesperson moves the cut-off one step right; risk = 1 − P(X ≤ s + 2), and eight is the first level where it falls below 0.10.</figcaption></figure><!--/viz:sfm-l18-mcneil-staffing--><!--viz:sfm-l18-poisson-cutoff--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Bar chart of a Poisson distribution with mean 6.8 for 0 to 16 arrivals, peaking at 6. A divider after 10 splits it into P(X ≤ 10) = 0.915 and a shaded right tail of 0.085.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">With 8 salespeople, crowding means 11 or more arrivals</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 224\" role=\"img\" aria-label=\"Bar chart of a Poisson distribution with mean 6.8 for 0 to 16 arrivals, peaking at 6. A divider after 10 splits it into P(X ≤ 10) = 0.915 and a shaded right tail of 0.085.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M16,172 L424,172\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><rect x=\"24\" y=\"171.2\" width=\"16\" height=\"0.8\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"32\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><rect x=\"47.5\" y=\"166.7\" width=\"16\" height=\"5.3\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><rect x=\"71\" y=\"154\" width=\"16\" height=\"18\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"79\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">2</text><rect x=\"94.5\" y=\"131.1\" width=\"16\" height=\"40.9\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><rect x=\"118\" y=\"102.5\" width=\"16\" height=\"69.5\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"126\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">4</text><rect x=\"141.5\" y=\"77.5\" width=\"16\" height=\"94.5\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><rect x=\"165\" y=\"64.9\" width=\"16\" height=\"107.1\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"173\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">6</text><rect x=\"188.5\" y=\"68\" width=\"16\" height=\"104\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><rect x=\"212\" y=\"83.6\" width=\"16\" height=\"88.4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"220\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">8</text><rect x=\"235.5\" y=\"105.2\" width=\"16\" height=\"66.8\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><rect x=\"259\" y=\"126.6\" width=\"16\" height=\"45.4\" style=\"fill:var(--blue-soft);stroke:var(--blue);stroke-width:1.5\"/><text x=\"267\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text><rect x=\"282.5\" y=\"143.9\" width=\"16\" height=\"28.1\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><rect x=\"306\" y=\"156.1\" width=\"16\" height=\"15.9\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"314\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">12</text><rect x=\"329.5\" y=\"163.7\" width=\"16\" height=\"8.3\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><rect x=\"353\" y=\"168\" width=\"16\" height=\"4\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"361\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">14</text><rect x=\"376.5\" y=\"170.2\" width=\"16\" height=\"1.8\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><rect x=\"400\" y=\"171.2\" width=\"16\" height=\"0.8\" style=\"fill:var(--clay-soft);stroke:var(--clay);stroke-width:1.5\"/><text x=\"408\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">16</text><path d=\"M278.8,40 L278.8,172\" style=\"stroke:var(--ink-3);stroke-width:1;fill:none\"/><text x=\"270.8\" y=\"52\" text-anchor=\"end\" style=\"fill:var(--ink);font-size:13px;font-weight:700\">P(X ≤ 10) = 0.915</text><text x=\"286.8\" y=\"52\" text-anchor=\"start\" style=\"fill:var(--clay);font-size:13px;font-weight:700\">0.085</text><text x=\"286.8\" y=\"70\" text-anchor=\"start\" style=\"fill:var(--clay);font-size:13px\">too crowded</text><text x=\"220\" y=\"212\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">customers arriving in an hour (μ = 6.8)</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Read the left block with POISSON.DIST(10, 6.8, TRUE) and take 1 minus it; the tail never ends, so never add it bar by bar.</figcaption></figure><!--/viz:sfm-l18-poisson-cutoff-->"
    },
    {
     "t": "Live Lecture 4: exact vs cumulative, and exam hints",
     "src": "L#18",
     "h": "<h4>Exact or cumulative? Read the wording</h4>\n<div class=\"scroller\"><table><thead><tr><th>Wording</th><th>Excel (discrete)</th><th>McNeil, μ = 6.8</th></tr></thead><tbody>\n<tr><td>exactly x</td><td><code>POISSON.DIST(x, μ, FALSE)</code>, the mass at x</td><td>exactly 2 arrive: 0.0258</td></tr>\n<tr><td>x or fewer, up to x</td><td><code>POISSON.DIST(x, μ, TRUE)</code>, the cumulative</td><td>2 or fewer: 0.0011 + 0.0076 + 0.0258 = 0.0344</td></tr>\n<tr><td>more than x, at least x + 1</td><td><code>1 − POISSON.DIST(x, μ, TRUE)</code></td><td>more than 10: 0.0849</td></tr>\n</tbody></table></div>\n<p style=\"font-size:14.5px\">With 8 salespeople, the chance that <strong>exactly</strong> two customers cannot be served (exactly 10 arrive) is the mass P(X = 10) = 0.0649; the chance of <strong>up to</strong> 10 arriving is the cumulative 0.9151.</p>\n<h4>Continuous distributions have no mass function</h4>\n<p style=\"font-size:14.5px\">His analogy: you can ask for one biscuit from a packet, but not for \"one cake\" out of a whole cake. A continuous variable has no separate pieces, so the probability of one exact value is zero and only cumulative areas make sense. Excel will still return a number for <code>NORM.DIST(10, 10, 10, FALSE)</code> (0.0399), but it is the height of the curve, not a probability; <code>NORM.DIST(10, 10, 10, TRUE)</code> = 0.5 is.</p>\n<p style=\"font-size:14.5px\"><strong>MBA salaries revisited</strong> (μ = $40,000, σ = $5,000): P(at least 30,000) = 1 − NORM.DIST(30000, 40000, 5000, TRUE) = 1 − 0.0228 = 0.977; P(34,000 to 46,000) = 0.8849 − 0.1151 = 0.770. He advises <strong>computing z and using NORM.S.DIST</strong> rather than the NORM.DIST shortcut: z = −1.2 says at once that 34,000 is 1.2 standard deviations below the mean, which a raw value does not.</p>\n<div class=\"def\"><b>From the lecture (L#18), exam hints:</b> the quiz is all objective multiple-choice questions, with no long numericals; if you follow the concepts it should be doable. Of the three quizzes, the best two count. Practice questions are on the LMS module; for more, use the textbook's exercises and solved examples. The recorded sessions plus the slides should be enough for the quizzes and the exams.</div>"
    },
    {
     "t": "Textbook: Discrete Probability Distributions",
     "src": "Anderson 14e ch5",
     "h": "<p>A random variable turns each outcome of an experiment into a number, and its probability distribution says how likely each number is. The chapter builds discrete distributions two ways: as tables (from classical, subjective or relative-frequency probabilities — the last giving an empirical distribution) and as formulas (discrete uniform, binomial, Poisson, hypergeometric). Expected value and variance summarise any distribution, and the binomial and Poisson come with shortcut formulas for both. The binomial counts successes in a fixed number of independent, identical trials; the Poisson counts occurrences in an interval of time or space. For a manager these models turn vague questions — how many sales, how many arrivals, how many defects — into probabilities that can be planned against.</p><!--viz:sfm-binomial-p-shapes--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three binomial distributions with n = 10. p = 0.2 peaks at x = 2 (0.302) with a right tail; p = 0.5 is symmetric about 5 (0.246); p = 0.8 is the mirror image, peaking at 8.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">How p shapes the binomial (n = 10)</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 200\" role=\"img\" aria-label=\"Three binomial distributions with n = 10. p = 0.2 peaks at x = 2 (0.302) with a right tail; p = 0.5 is symmetric about 5 (0.246); p = 0.8 is the mirror image, peaking at 8.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"15\" y=\"115.4\" width=\"9.6\" height=\"34.6\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"26.6\" y=\"63.4\" width=\"9.6\" height=\"86.6\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"38.3\" y=\"52.6\" width=\"9.6\" height=\"97.4\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"49.9\" y=\"85.1\" width=\"9.6\" height=\"64.9\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"61.5\" y=\"121.6\" width=\"9.6\" height=\"28.4\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"73.2\" y=\"141.5\" width=\"9.6\" height=\"8.5\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"84.8\" y=\"148.2\" width=\"9.6\" height=\"1.8\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"96.5\" y=\"149.7\" width=\"9.6\" height=\"0.3\" style=\"fill:var(--blue);stroke:none\"/><path d=\"M12,150 L144,150\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"19.8\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><text x=\"78\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">5</text><text x=\"136.2\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text><text x=\"78\" y=\"26\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">p = 0.2</text><text x=\"78\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">right-skewed</text><rect x=\"157\" y=\"149.7\" width=\"9.6\" height=\"0.3\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"168.6\" y=\"146.8\" width=\"9.6\" height=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"180.3\" y=\"135.8\" width=\"9.6\" height=\"14.2\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"191.9\" y=\"112.2\" width=\"9.6\" height=\"37.8\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"203.5\" y=\"83.8\" width=\"9.6\" height=\"66.2\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"215.2\" y=\"70.6\" width=\"9.6\" height=\"79.4\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"226.8\" y=\"83.8\" width=\"9.6\" height=\"66.2\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"238.5\" y=\"112.2\" width=\"9.6\" height=\"37.8\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"250.1\" y=\"135.8\" width=\"9.6\" height=\"14.2\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"261.7\" y=\"146.8\" width=\"9.6\" height=\"3.2\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"273.4\" y=\"149.7\" width=\"9.6\" height=\"0.3\" style=\"fill:var(--blue);stroke:none\"/><path d=\"M154,150 L286,150\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"161.8\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><text x=\"220\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">5</text><text x=\"278.2\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text><text x=\"220\" y=\"26\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">p = 0.5</text><text x=\"220\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">symmetric</text><rect x=\"333.9\" y=\"149.7\" width=\"9.6\" height=\"0.3\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"345.5\" y=\"148.2\" width=\"9.6\" height=\"1.8\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"357.2\" y=\"141.5\" width=\"9.6\" height=\"8.5\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"368.8\" y=\"121.6\" width=\"9.6\" height=\"28.4\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"380.5\" y=\"85.1\" width=\"9.6\" height=\"64.9\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"392.1\" y=\"52.6\" width=\"9.6\" height=\"97.4\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"403.7\" y=\"63.4\" width=\"9.6\" height=\"86.6\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"415.4\" y=\"115.4\" width=\"9.6\" height=\"34.6\" style=\"fill:var(--blue);stroke:none\"/><path d=\"M296,150 L428,150\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"303.8\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><text x=\"362\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">5</text><text x=\"420.2\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">10</text><text x=\"362\" y=\"26\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">p = 0.8</text><text x=\"362\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">left-skewed</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The peak sits near np (2, 5, 8); the distribution is symmetric only at p = 0.5, and flipping p to 1 − p mirrors it.</figcaption></figure><!--/viz:sfm-binomial-p-shapes--><!--viz:sfm-binomial-cumulative--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Binomial bars for n = 8, p = 0.25. The bars for x = 0, 1, 2 (0.1001, 0.2670, 0.3115) are shaded; together P(X ≤ 2) = 0.6785, so P(X ≥ 3) = 0.3215.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">'At most' means add the bars; 'at least' means 1 minus</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 232\" role=\"img\" aria-label=\"Binomial bars for n = 8, p = 0.25. The bars for x = 0, 1, 2 (0.1001, 0.2670, 0.3115) are shaded; together P(X ≤ 2) = 0.6785, so P(X ≥ 3) = 0.3215.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M26,160 L420,160\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><rect x=\"37\" y=\"125.6\" width=\"30\" height=\"34.4\" style=\"fill:var(--blue);stroke:none\"/><text x=\"52\" y=\"117.6\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">0.1001</text><text x=\"52\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><rect x=\"81\" y=\"68.2\" width=\"30\" height=\"91.8\" style=\"fill:var(--blue);stroke:none\"/><text x=\"96\" y=\"60.2\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">0.2670</text><text x=\"96\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">1</text><rect x=\"125\" y=\"52.9\" width=\"30\" height=\"107.1\" style=\"fill:var(--blue);stroke:none\"/><text x=\"140\" y=\"44.9\" text-anchor=\"middle\" style=\"fill:var(--blue);font-size:13px\">0.3115</text><text x=\"140\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">2</text><rect x=\"169\" y=\"88.6\" width=\"30\" height=\"71.4\" style=\"fill:var(--surface-2);stroke:var(--ink-3);stroke-width:1.5\"/><text x=\"184\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">3</text><rect x=\"213\" y=\"130.3\" width=\"30\" height=\"29.7\" style=\"fill:var(--surface-2);stroke:var(--ink-3);stroke-width:1.5\"/><text x=\"228\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">4</text><rect x=\"257\" y=\"152.1\" width=\"30\" height=\"7.9\" style=\"fill:var(--surface-2);stroke:var(--ink-3);stroke-width:1.5\"/><text x=\"272\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">5</text><rect x=\"301\" y=\"158.7\" width=\"30\" height=\"1.3\" style=\"fill:var(--surface-2);stroke:var(--ink-3);stroke-width:1.5\"/><text x=\"316\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">6</text><rect x=\"345\" y=\"159.9\" width=\"30\" height=\"0.1\" style=\"fill:var(--surface-2);stroke:var(--ink-3);stroke-width:1.5\"/><text x=\"360\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">7</text><rect x=\"389\" y=\"160\" width=\"30\" height=\"0\" style=\"fill:var(--surface-2);stroke:var(--ink-3);stroke-width:1.5\"/><text x=\"404\" y=\"178\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">8</text><text x=\"20\" y=\"200\" style=\"fill:var(--blue);font-size:13.5px;font-weight:700\">P(X ≤ 2) = f(0) + f(1) + f(2) = 0.6785</text><text x=\"20\" y=\"222\" style=\"fill:var(--ink);font-size:13.5px\">P(X ≥ 3) = 1 − 0.6785 = 0.3215</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">In Excel, BINOM.DIST(2, 8, 0.25, TRUE) returns the shaded total; for 'at least 3' take 1 minus it rather than adding six bars.</figcaption></figure><!--/viz:sfm-binomial-cumulative--><!--viz:sfm-poisson-shapes--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Three Poisson distributions. μ = 1 is tallest at 0 and 1 (0.368) with a long right tail; μ = 3 peaks at 2 and 3 (0.224); μ = 7 is wider and nearly symmetric, peaking at 6 and 7 (0.149).\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">As μ grows the Poisson spreads and evens out</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 200\" role=\"img\" aria-label=\"Three Poisson distributions. μ = 1 is tallest at 0 and 1 (0.368) with a long right tail; μ = 3 peaks at 2 and 3 (0.224); μ = 7 is wider and nearly symmetric, peaking at 6 and 7 (0.149).\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"15\" y=\"53.2\" width=\"6.5\" height=\"96.8\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"23.5\" y=\"53.2\" width=\"6.5\" height=\"96.8\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"32.1\" y=\"101.6\" width=\"6.5\" height=\"48.4\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"40.6\" y=\"133.9\" width=\"6.5\" height=\"16.1\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"49.1\" y=\"146\" width=\"6.5\" height=\"4\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"57.7\" y=\"149.2\" width=\"6.5\" height=\"0.8\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"66.2\" y=\"149.9\" width=\"6.5\" height=\"0.1\" style=\"fill:var(--blue);stroke:none\"/><path d=\"M12,150 L144,150\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"18.3\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><text x=\"78\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">7</text><text x=\"137.7\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">14</text><text x=\"78\" y=\"26\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">μ = 1</text><text x=\"78\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">strong right skew</text><rect x=\"157\" y=\"136.9\" width=\"6.5\" height=\"13.1\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"165.5\" y=\"110.7\" width=\"6.5\" height=\"39.3\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"174.1\" y=\"91\" width=\"6.5\" height=\"59\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"182.6\" y=\"91\" width=\"6.5\" height=\"59\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"191.1\" y=\"105.8\" width=\"6.5\" height=\"44.2\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"199.7\" y=\"123.5\" width=\"6.5\" height=\"26.5\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"208.2\" y=\"136.7\" width=\"6.5\" height=\"13.3\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"216.7\" y=\"144.3\" width=\"6.5\" height=\"5.7\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"225.3\" y=\"147.9\" width=\"6.5\" height=\"2.1\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"233.8\" y=\"149.3\" width=\"6.5\" height=\"0.7\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"242.3\" y=\"149.8\" width=\"6.5\" height=\"0.2\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"250.9\" y=\"149.9\" width=\"6.5\" height=\"0.1\" style=\"fill:var(--blue);stroke:none\"/><path d=\"M154,150 L286,150\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"160.3\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><text x=\"220\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">7</text><text x=\"279.7\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">14</text><text x=\"220\" y=\"26\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">μ = 3</text><text x=\"220\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">milder skew</text><rect x=\"299\" y=\"149.8\" width=\"6.5\" height=\"0.2\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"307.5\" y=\"148.3\" width=\"6.5\" height=\"1.7\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"316.1\" y=\"144.1\" width=\"6.5\" height=\"5.9\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"324.6\" y=\"136.3\" width=\"6.5\" height=\"13.7\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"333.1\" y=\"126\" width=\"6.5\" height=\"24\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"341.7\" y=\"116.4\" width=\"6.5\" height=\"33.6\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"350.2\" y=\"110.8\" width=\"6.5\" height=\"39.2\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"358.7\" y=\"110.8\" width=\"6.5\" height=\"39.2\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"367.3\" y=\"115.7\" width=\"6.5\" height=\"34.3\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"375.8\" y=\"123.3\" width=\"6.5\" height=\"26.7\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"384.3\" y=\"131.3\" width=\"6.5\" height=\"18.7\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"392.9\" y=\"138.1\" width=\"6.5\" height=\"11.9\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"401.4\" y=\"143.1\" width=\"6.5\" height=\"6.9\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"409.9\" y=\"146.3\" width=\"6.5\" height=\"3.7\" style=\"fill:var(--blue);stroke:none\"/><rect x=\"418.5\" y=\"148.1\" width=\"6.5\" height=\"1.9\" style=\"fill:var(--blue);stroke:none\"/><path d=\"M296,150 L428,150\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"302.3\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><text x=\"362\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">7</text><text x=\"421.7\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">14</text><text x=\"362\" y=\"26\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:14px;font-weight:700\">μ = 7</text><text x=\"362\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">near symmetric</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Mean and variance are both μ, so a bigger μ moves the peak right and widens it at the same time (σ = √μ).</figcaption></figure><!--/viz:sfm-poisson-shapes--><p><strong>Random variable: discrete or continuous</strong> — A random variable attaches a number to every experimental outcome; even yes/no outcomes can be coded (1 = recalled the ad, 0 = did not). It is discrete if its values can be listed — a finite list or an endless sequence 0, 1, 2, … — and continuous if it can take any value in an interval. Quick test: if every point on the line segment between two possible values is also possible, the variable is continuous.<br><em>e.g.</em> Number of loan applications approved today is discrete; time to approve one application is continuous.</p><p><strong>Probability function and its two conditions</strong> — For a discrete random variable, the probability function f(x) gives the probability of each value. Any valid f(x) must be non-negative for every x and must sum to exactly 1 across all values. Once f(x) is known, probabilities of events such as 'three or more' are found by adding the relevant f(x) values.<br><span style=\"font-family:var(--mono)\">f(x) ≥ 0 for all x;  Σ f(x) = 1</span></p><p><strong>Building a tabular distribution</strong> — The classical method applies when values are equally likely, the subjective method uses an expert's judgement, and the relative-frequency method uses historical counts. Relative frequencies from a large data set give an empirical discrete distribution — increasingly common with scanner, card and app data. The discrete uniform distribution is the simplest formula-based case: every one of n values has probability 1/n.<br><span style=\"font-family:var(--mono)\">Discrete uniform: f(x) = 1/n</span></p><p><strong>Expected value</strong> — The expected value is a probability-weighted average of the values of x and measures the centre of the distribution. It is a long-run average, not a prediction for any single trial, and need not be a value x can actually take. Multiplying by the number of periods turns it into a forecast total.<br><span style=\"font-family:var(--mono)\">E(x) = μ = Σ x·f(x)</span><br><em>e.g.</em> If E(x) = 1.95 scooters a day, a 30-day month is forecast at 30 × 1.95 = 58.5 scooters.</p><p><strong>Variance and standard deviation of a random variable</strong> — Variance is the probability-weighted average of squared deviations from μ; the standard deviation is its positive square root and is in the same units as x, which is why it is easier to interpret. An algebraically equivalent shortcut is E(x²) − μ², handy on a calculator.<br><span style=\"font-family:var(--mono)\">Var(x) = σ² = Σ (x − μ)²·f(x) = Σ x²f(x) − μ²;  σ = √σ²</span></p><p><strong>The binomial experiment</strong> — Four properties: (1) a fixed number n of identical trials; (2) two outcomes per trial, success or failure; (3) the success probability p stays the same on every trial — the stationarity assumption; (4) trials are independent. Properties 2–4 alone describe a Bernoulli process; adding a fixed n makes it a binomial experiment. Stationarity and independence are different: a tiring salesperson whose success rate drops breaks stationarity even if customers decide independently.</p><p><strong>Binomial probability function</strong> — Every particular sequence with x successes and n − x failures has probability pˣ(1 − p)ⁿ⁻ˣ, and the combination term counts how many such sequences exist. Multiplying the two gives the probability of exactly x successes. For 'at least one' it is quicker to compute 1 − f(0).<br><span style=\"font-family:var(--mono)\">f(x) = [n! / (x!(n − x)!)] · pˣ · (1 − p)ⁿ⁻ˣ,  x = 0, 1, …, n</span></p><p><strong>Binomial mean, variance and tables</strong> — For a binomial variable the general formulas collapse to np and np(1 − p). Tables list f(x) for chosen n and p; if a table stops at p = 0.50, find P(x successes) with p &gt; 0.5 by looking up n − x successes at probability 1 − p. With a cumulative table, an individual probability is a difference: f(x) = P(≤ x) − P(≤ x − 1).<br><span style=\"font-family:var(--mono)\">E(x) = np;  Var(x) = np(1 − p)</span><br><em>e.g.</em> 1000 shoppers with p = 0.3: expect 300 buyers, σ = √210 = 14.49.</p><p><strong>Poisson distribution</strong> — Models the number of occurrences in an interval of time or space when any two intervals of equal length carry the same probability of an occurrence and occurrences in separate intervals are independent. There is no upper limit on x. Its only parameter is μ, the mean number of occurrences in the interval — which must first be rescaled to the interval asked about.<br><span style=\"font-family:var(--mono)\">f(x) = μˣ e^(−μ) / x!,  x = 0, 1, 2, …</span><br><em>e.g.</em> 12 ATM customers an hour → μ = 2 for a 10-minute window.</p><p><strong>Poisson mean equals variance</strong> — A Poisson variable has variance equal to its mean, so its standard deviation is √μ. This is a quick check on whether count data might be Poisson: if the observed variance is far from the mean, the model is doubtful.<br><span style=\"font-family:var(--mono)\">E(x) = Var(x) = μ;  σ = √μ</span></p><p><strong>Hypergeometric distribution (lower priority)</strong> — Used when n items are drawn without replacement from a small population of N items, r of which are successes. Because each draw changes what remains, trials are not independent and the success probability changes — so the binomial does not apply. When N is large relative to n, the hypergeometric is well approximated by a binomial with p = r/N.<br><span style=\"font-family:var(--mono)\">f(x) = [C(r, x) · C(N − r, n − x)] / C(N, n);  E(x) = n(r/N);  Var(x) = n(r/N)(1 − r/N)(N − n)/(N − 1)</span></p><p><strong>Excel functions for discrete distributions</strong> — BINOM.DIST(x, n, p, cumulative), POISSON.DIST(x, mean, cumulative) and HYPGEOM.DIST compute these probabilities. The last argument FALSE returns P(exactly x); TRUE returns the cumulative P(x or fewer).<br><em>e.g.</em> =BINOM.DIST(4,10,0.3,FALSE) returns 0.2001.</p><div class=\"card\"><strong>Case: Voter waiting times</strong> <em>(Statistics in Practice: Voter Waiting Times in Elections)</em><p>Researchers modelling queues at US polling stations found that voter arrivals per minute follow a Poisson distribution. Feeding the Poisson arrival probabilities into queueing models let them estimate waiting times and recommend how many voting machines each location needs.</p><p><em>Lesson:</em> Poisson models counts of arrivals per interval; those probabilities feed capacity decisions.</p><p><em>Think:</em> If a booth averages 2 arrivals a minute, what is the mean number of arrivals in 5 minutes, and what are the variance and standard deviation of that count?</p></div><div class=\"card\"><strong>Case: Go Bananas! shutdown rule</strong> <em>(Case Problem 1: Go Bananas! Breakfast Cereal)</em><p>A cereal maker samples a fixed number of boxes each week and counts those whose marshmallow content falls outside the acceptable range. Production stops if too many fail. With a known failure rate when the process works, the binomial distribution shows how often a healthy line would be shut down needlessly.</p><p><em>Lesson:</em> Binomial probabilities let managers set a decision threshold that controls false alarms.</p><p><em>Think:</em> Raising the shutdown threshold from 5 failures to 6 does what to the chance of stopping a healthy line, and what is the cost of that change?</p></div><details><summary>Worked problem: Expected daily sales and spread</summary><p>A two-wheeler showroom in Jaipur records daily scooter sales x with f(0) = 0.10, f(1) = 0.25, f(2) = 0.35, f(3) = 0.20, f(4) = 0.10. Find the expected sales per day, the standard deviation, and P(3 or more sales).</p><ol><li>Check validity: all f(x) ≥ 0 and 0.10 + 0.25 + 0.35 + 0.20 + 0.10 = 1.</li><li>E(x) = 0(0.10) + 1(0.25) + 2(0.35) + 3(0.20) + 4(0.10) = 0 + 0.25 + 0.70 + 0.60 + 0.40 = 1.95.</li><li>E(x²) = 0 + 1(0.25) + 4(0.35) + 9(0.20) + 16(0.10) = 0.25 + 1.40 + 1.80 + 1.60 = 5.05.</li><li>Var(x) = E(x²) − μ² = 5.05 − 1.95² = 5.05 − 3.8025 = 1.2475; σ = √1.2475 = 1.117.</li><li>P(x ≥ 3) = f(3) + f(4) = 0.20 + 0.10 = 0.30.</li></ol><p><strong>Answer:</strong> E(x) = 1.95 scooters a day; σ ≈ 1.12 scooters; P(3 or more) = 0.30.</p></details><details><summary>Worked problem: Cold-call conversions (binomial)</summary><p>At a Bengaluru insurance call centre 20% of cold calls convert, independently. An agent makes 8 calls. Find P(exactly 2 conversions), P(at least 1 conversion), and the mean and standard deviation of conversions.</p><ol><li>Check the four properties: n = 8 fixed trials, convert/not, p = 0.20 constant, independent calls — binomial.</li><li>P(x = 2) = [8!/(2!6!)] (0.2)² (0.8)⁶ = 28 × 0.04 × 0.262144 = 0.2936.</li><li>P(x = 0) = (0.8)⁸ = 0.1678, so P(x ≥ 1) = 1 − 0.1678 = 0.8322.</li><li>E(x) = np = 8 × 0.2 = 1.6; Var(x) = np(1 − p) = 8 × 0.2 × 0.8 = 1.28; σ = √1.28 = 1.131.</li></ol><p><strong>Answer:</strong> P(2) ≈ 0.2936; P(at least 1) ≈ 0.8322; mean 1.6 conversions, σ ≈ 1.13.</p></details><details><summary>Worked problem: ATM arrivals (Poisson with rescaling)</summary><p>A Pune bank ATM averages 12 customers an hour, with arrivals meeting the Poisson conditions. Find P(exactly 2 customers in a 10-minute window), P(no customer in 10 minutes), and P(at least 3 customers in 15 minutes).</p><ol><li>Rescale: 12 per hour = 0.2 per minute, so μ = 2 for 10 minutes and μ = 3 for 15 minutes.</li><li>P(x = 2 | μ = 2) = 2² e⁻² / 2! = 4 × 0.135335 / 2 = 0.2707.</li><li>P(x = 0 | μ = 2) = e⁻² = 0.1353.</li><li>P(x ≤ 2 | μ = 3) = e⁻³(1 + 3 + 9/2) = 0.049787 × 8.5 = 0.4232.</li><li>P(x ≥ 3 | μ = 3) = 1 − 0.4232 = 0.5768.</li></ol><p><strong>Answer:</strong> P(2 in 10 min) ≈ 0.2707; P(none in 10 min) ≈ 0.1353; P(at least 3 in 15 min) ≈ 0.5768.</p></details><div class=\"def\"><b>Book vs lecture — Software for distribution probabilities.</b> Book: Shows JMP and Excel only: BINOM.DIST, POISSON.DIST and HYPGEOM.DIST, last argument FALSE for P(x = k), TRUE for P(x ≤ k). Lecture: The course teaches Excel and R (Live Lecture 1). In R the same probabilities come from dbinom/pbinom and dpois/ppois (d = exactly, p = cumulative). <b>Know the Excel argument order (x, n, p, cumulative) for the quiz; if an R question appears, d… is the exact probability and p… is cumulative ≤ x.</b></div><div class=\"def\"><b>Book vs lecture — Notation for the probability function.</b> Book: Lower-case x for the random variable and f(x) for its probability; requires f(x) ≥ 0 and Σf(x) = 1. Lecture: The hub notes write E(X), P(x) ≥ 0 and Σf(x) = 1, mixing capital X and P(x) with f(x). <b>Same mathematics. Read X/x and P(x)/f(x) as interchangeable in quiz options.</b></div><div class=\"def\"><b>Book vs lecture — Coverage of hypergeometric and bivariate distributions.</b> Book: Sections 5.4 (bivariate distributions, covariance, portfolios) and 5.7 (hypergeometric) are full sections. Lecture: The lecture record for Lectures 10–11 covers random variables, expected value, binomial and Poisson only; the official outline names binomial and Poisson. <b>Prioritise binomial and Poisson. Know only the headline ideas of the hypergeometric and portfolio variance.</b></div>"
    },
    {
     "t": "Textbook: Continuous Probability Distributions",
     "src": "Anderson 14e ch6",
     "h": "<p>For a continuous random variable, probability is area under a density curve, so any single exact value has probability zero and only intervals matter. The uniform distribution spreads probability evenly over an interval; the bell-shaped normal is fixed by its mean and standard deviation, and every normal question is answered by converting to the standard normal z and reading a cumulative table. Working backwards from a probability to a z value lets managers set guarantees, cut-offs and safety stocks. The normal also approximates the binomial when np and n(1 − p) are both at least 5, with a continuity correction. The exponential distribution describes waiting and service times and is the time-between-arrivals partner of the Poisson.</p><!--viz:sfm-uniform-area--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Uniform density from 10 to 30 with height 0.05. The band from 15 to 22 is shaded: width 7 × height 0.05 = 0.35.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Uniform probability is a rectangle's area</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 212\" role=\"img\" aria-label=\"Uniform density from 10 to 30 with height 0.05. The band from 15 to 22 is shaded: width 7 × height 0.05 = 0.35.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><rect x=\"100\" y=\"64\" width=\"240\" height=\"96\" style=\"fill:var(--surface-2);stroke:none\"/><rect x=\"160\" y=\"64\" width=\"84\" height=\"96\" style=\"fill:var(--blue-soft);stroke:none\"/><path d=\"M100,160 L100,64 L340,64 L340,160\" style=\"fill:none;stroke:var(--ink);stroke-width:2\"/><path d=\"M160,64 L160,160\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/><path d=\"M244,64 L244,160\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/><path d=\"M26,160 L414,160\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M100,160 L100,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"100\" y=\"180\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">10</text><path d=\"M160,160 L160,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"160\" y=\"180\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">15</text><path d=\"M244,160 L244,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"244\" y=\"180\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">22</text><path d=\"M340,160 L340,165\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"340\" y=\"180\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">30</text><text x=\"202\" y=\"112\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:17px;font-weight:700\">0.35</text><text x=\"202\" y=\"132\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">7 × 0.05</text><text x=\"100\" y=\"52\" style=\"fill:var(--ink-2);font-size:13px\">f(x) = 1 / (30 − 10) = 0.05</text><text x=\"220\" y=\"202\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">delivery time, minutes · uniform from 10 to 30</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Probability = width × height = (22 − 15) × 1/20 = 0.35; any 7-minute band inside 10–30 gets the same 0.35, and P(X = 22) exactly is 0.</figcaption></figure><!--/viz:sfm-uniform-area--><!--viz:sfm-normal-sigma--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Two normal curves centred on 100, drawn to the same density scale. With σ = 10 the curve is tall and narrow; with σ = 20 it is half as tall and twice as wide. Both enclose an area of 1.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">μ sets the centre, σ sets the width</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 212\" role=\"img\" aria-label=\"Two normal curves centred on 100, drawn to the same density scale. With σ = 10 the curve is tall and narrow; with σ = 20 it is half as tall and twice as wide. Both enclose an area of 1.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M40,169.3 L43.8,169.1 L47.5,169 L51.2,168.8 L55,168.5 L58.8,168.2 L62.5,167.9 L66.2,167.6 L70,167.1 L73.8,166.7 L77.5,166.1 L81.2,165.5 L85,164.8 L88.8,164.1 L92.5,163.2 L96.2,162.3 L100,161.2 L103.8,160.1 L107.5,158.8 L111.2,157.4 L115,155.9 L118.8,154.3 L122.5,152.6 L126.2,150.8 L130,148.9 L133.8,146.9 L137.5,144.7 L141.2,142.5 L145,140.2 L148.8,137.9 L152.5,135.5 L156.2,133 L160,130.6 L163.8,128.1 L167.5,125.7 L171.2,123.3 L175,120.9 L178.8,118.7 L182.5,116.5 L186.2,114.5 L190,112.6 L193.8,110.9 L197.5,109.4 L201.2,108.1 L205,107 L208.8,106.1 L212.5,105.5 L216.2,105.1 L220,105 L223.8,105.1 L227.5,105.5 L231.2,106.1 L235,107 L238.8,108.1 L242.5,109.4 L246.2,110.9 L250,112.6 L253.8,114.5 L257.5,116.5 L261.2,118.7 L265,120.9 L268.8,123.3 L272.5,125.7 L276.2,128.1 L280,130.6 L283.8,133 L287.5,135.5 L291.2,137.9 L295,140.2 L298.8,142.5 L302.5,144.7 L306.2,146.9 L310,148.9 L313.8,150.8 L317.5,152.6 L321.2,154.3 L325,155.9 L328.8,157.4 L332.5,158.8 L336.2,160.1 L340,161.2 L343.8,162.3 L347.5,163.2 L351.2,164.1 L355,164.8 L358.8,165.5 L362.5,166.1 L366.2,166.7 L370,167.1 L373.8,167.6 L377.5,167.9 L381.2,168.2 L385,168.5 L388.8,168.8 L392.5,169 L396.2,169.1 L400,169.3\" style=\"fill:none;stroke:var(--clay);stroke-width:2\"/><path d=\"M40,170 L43.8,170 L47.5,170 L51.2,170 L55,170 L58.8,170 L62.5,170 L66.2,170 L70,170 L73.8,170 L77.5,170 L81.2,170 L85,170 L88.8,170 L92.5,170 L96.2,170 L100,170 L103.8,169.9 L107.5,169.9 L111.2,169.8 L115,169.7 L118.8,169.6 L122.5,169.3 L126.2,169 L130,168.6 L133.8,167.9 L137.5,167 L141.2,165.9 L145,164.3 L148.8,162.3 L152.5,159.7 L156.2,156.4 L160,152.4 L163.8,147.6 L167.5,141.9 L171.2,135.3 L175,127.8 L178.8,119.5 L182.5,110.5 L186.2,101 L190,91.2 L193.8,81.3 L197.5,71.9 L201.2,63.1 L205,55.3 L208.8,48.8 L212.5,44 L216.2,41 L220,40 L223.8,41 L227.5,44 L231.2,48.8 L235,55.3 L238.8,63.1 L242.5,71.9 L246.2,81.3 L250,91.2 L253.8,101 L257.5,110.5 L261.2,119.5 L265,127.8 L268.8,135.3 L272.5,141.9 L276.2,147.6 L280,152.4 L283.8,156.4 L287.5,159.7 L291.2,162.3 L295,164.3 L298.8,165.9 L302.5,167 L306.2,167.9 L310,168.6 L313.8,169 L317.5,169.3 L321.2,169.6 L325,169.7 L328.8,169.8 L332.5,169.9 L336.2,169.9 L340,170 L343.8,170 L347.5,170 L351.2,170 L355,170 L358.8,170 L362.5,170 L366.2,170 L370,170 L373.8,170 L377.5,170 L381.2,170 L385,170 L388.8,170 L392.5,170 L396.2,170 L400,170\" style=\"fill:none;stroke:var(--ink);stroke-width:2\"/><path d=\"M26,170 L414,170\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M40,170 L40,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"40\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">40</text><path d=\"M100,170 L100,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"100\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">60</text><path d=\"M160,170 L160,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"160\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">80</text><path d=\"M220,170 L220,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"220\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">100</text><path d=\"M280,170 L280,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"280\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">120</text><path d=\"M340,170 L340,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"340\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">140</text><path d=\"M400,170 L400,175\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"400\" y=\"190\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">160</text><text x=\"244\" y=\"52\" style=\"fill:var(--ink);font-size:13.5px;font-weight:700\">σ = 10</text><text x=\"304\" y=\"124\" style=\"fill:var(--clay);font-size:13.5px;font-weight:700\">σ = 20</text><text x=\"220\" y=\"206\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">both centred on μ = 100</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Doubling σ halves the peak and doubles the spread, because the total area must stay 1.</figcaption></figure><!--/viz:sfm-normal-sigma--><!--viz:sfm-empirical-rule--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Bell-shaped normal curve. The central band within one standard deviation of the mean holds about 68% of values; within two, about 95%; within three, about 99.7%.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The empirical rule</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 206\" role=\"img\" aria-label=\"Bell-shaped normal curve. About 68% of values lie within one standard deviation of the mean, 95% within two, 99.7% within three.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\">\n<path d=\"M104.7,176 L104.7,156.0 L107.6,153.9 L110.5,151.7 L113.4,149.3 L116.2,146.7 L119.1,144.0 L122.0,141.1 L124.9,138.1 L127.8,134.9 L130.6,131.5 L133.5,128.0 L136.4,124.3 L139.3,120.5 L142.2,116.5 L145.1,112.4 L147.9,108.2 L150.8,104.0 L153.7,99.6 L156.6,95.2 L159.5,90.7 L162.4,86.2 L165.2,81.7 L168.1,77.3 L171.0,72.9 L173.9,68.5 L176.8,64.3 L179.6,60.2 L182.5,56.2 L185.4,52.4 L188.3,48.8 L191.2,45.4 L194.1,42.3 L196.9,39.4 L199.8,36.8 L202.7,34.5 L205.6,32.6 L208.5,30.9 L211.4,29.7 L214.2,28.7 L217.1,28.2 L220.0,28.0 L222.9,28.2 L225.8,28.7 L228.6,29.7 L231.5,30.9 L234.4,32.6 L237.3,34.5 L240.2,36.8 L243.1,39.4 L245.9,42.3 L248.8,45.4 L251.7,48.8 L254.6,52.4 L257.5,56.2 L260.4,60.2 L263.2,64.3 L266.1,68.5 L269.0,72.9 L271.9,77.3 L274.8,81.7 L277.6,86.2 L280.5,90.7 L283.4,95.2 L286.3,99.6 L289.2,104.0 L292.1,108.2 L294.9,112.4 L297.8,116.5 L300.7,120.5 L303.6,124.3 L306.5,128.0 L309.4,131.5 L312.2,134.9 L315.1,138.1 L318.0,141.1 L320.9,144.0 L323.8,146.7 L326.6,149.3 L329.5,151.7 L332.4,153.9 L335.3,156.0 L335.3,176 Z\" style=\"fill:var(--blue-soft);stroke:none\"/>\n<path d=\"M162.4,176 L162.4,86.2 L165.2,81.7 L168.1,77.3 L171.0,72.9 L173.9,68.5 L176.8,64.3 L179.6,60.2 L182.5,56.2 L185.4,52.4 L188.3,48.8 L191.2,45.4 L194.1,42.3 L196.9,39.4 L199.8,36.8 L202.7,34.5 L205.6,32.6 L208.5,30.9 L211.4,29.7 L214.2,28.7 L217.1,28.2 L220.0,28.0 L222.9,28.2 L225.8,28.7 L228.6,29.7 L231.5,30.9 L234.4,32.6 L237.3,34.5 L240.2,36.8 L243.1,39.4 L245.9,42.3 L248.8,45.4 L251.7,48.8 L254.6,52.4 L257.5,56.2 L260.4,60.2 L263.2,64.3 L266.1,68.5 L269.0,72.9 L271.9,77.3 L274.8,81.7 L277.6,86.2 L277.6,176 Z\" style=\"fill:var(--blue);opacity:.28;stroke:none\"/>\n<path d=\"M24.0,175.5 L26.9,175.5 L29.8,175.4 L32.6,175.2 L35.5,175.1 L38.4,175.0 L41.3,174.8 L44.2,174.6 L47.1,174.4 L49.9,174.1 L52.8,173.8 L55.7,173.5 L58.6,173.1 L61.5,172.6 L64.4,172.1 L67.2,171.6 L70.1,171.0 L73.0,170.3 L75.9,169.5 L78.8,168.6 L81.6,167.7 L84.5,166.6 L87.4,165.5 L90.3,164.2 L93.2,162.8 L96.1,161.3 L98.9,159.7 L101.8,157.9 L104.7,156.0 L107.6,153.9 L110.5,151.7 L113.4,149.3 L116.2,146.7 L119.1,144.0 L122.0,141.1 L124.9,138.1 L127.8,134.9 L130.6,131.5 L133.5,128.0 L136.4,124.3 L139.3,120.5 L142.2,116.5 L145.1,112.4 L147.9,108.2 L150.8,104.0 L153.7,99.6 L156.6,95.2 L159.5,90.7 L162.4,86.2 L165.2,81.7 L168.1,77.3 L171.0,72.9 L173.9,68.5 L176.8,64.3 L179.6,60.2 L182.5,56.2 L185.4,52.4 L188.3,48.8 L191.2,45.4 L194.1,42.3 L196.9,39.4 L199.8,36.8 L202.7,34.5 L205.6,32.6 L208.5,30.9 L211.4,29.7 L214.2,28.7 L217.1,28.2 L220.0,28.0 L222.9,28.2 L225.8,28.7 L228.6,29.7 L231.5,30.9 L234.4,32.6 L237.3,34.5 L240.2,36.8 L243.1,39.4 L245.9,42.3 L248.8,45.4 L251.7,48.8 L254.6,52.4 L257.5,56.2 L260.4,60.2 L263.2,64.3 L266.1,68.5 L269.0,72.9 L271.9,77.3 L274.8,81.7 L277.6,86.2 L280.5,90.7 L283.4,95.2 L286.3,99.6 L289.2,104.0 L292.1,108.2 L294.9,112.4 L297.8,116.5 L300.7,120.5 L303.6,124.3 L306.5,128.0 L309.4,131.5 L312.2,134.9 L315.1,138.1 L318.0,141.1 L320.9,144.0 L323.8,146.7 L326.6,149.3 L329.5,151.7 L332.4,153.9 L335.3,156.0 L338.2,157.9 L341.1,159.7 L343.9,161.3 L346.8,162.8 L349.7,164.2 L352.6,165.5 L355.5,166.6 L358.4,167.7 L361.2,168.6 L364.1,169.5 L367.0,170.3 L369.9,171.0 L372.8,171.6 L375.6,172.1 L378.5,172.6 L381.4,173.1 L384.3,173.5 L387.2,173.8 L390.1,174.1 L392.9,174.4 L395.8,174.6 L398.7,174.8 L401.6,175.0 L404.5,175.1 L407.4,175.2 L410.2,175.4 L413.1,175.5 L416.0,175.5\" style=\"fill:none;stroke:var(--ink);stroke-width:2\"/>\n<path d=\"M16,176 L424,176\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M104.7,176 L104.7,181\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"104.7\" y=\"197\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">−2σ</text><path d=\"M162.4,176 L162.4,181\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"162.4\" y=\"197\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">−1σ</text><path d=\"M220.0,176 L220.0,181\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"220.0\" y=\"197\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">μ</text><path d=\"M277.6,176 L277.6,181\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"277.6\" y=\"197\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">+1σ</text><path d=\"M335.3,176 L335.3,181\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"335.3\" y=\"197\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">+2σ</text>\n<text x=\"220.0\" y=\"118\" text-anchor=\"middle\" style=\"fill:var(--ink);font-size:17px;font-weight:700\">68%</text>\n<text x=\"220.0\" y=\"137\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">within ±1σ</text>\n<text x=\"62\" y=\"128\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">95%</text>\n<text x=\"62\" y=\"144\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">±2σ</text>\n<text x=\"378\" y=\"128\" text-anchor=\"middle\" style=\"fill:var(--ink-2);font-size:13px\">99.7%</text>\n<text x=\"378\" y=\"144\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">±3σ</text>\n</svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Exact areas: 68.26%, 95.44%, 99.74%. Only for bell-shaped data; for any shape, use Chebyshev's weaker bound.</figcaption></figure><!--/viz:sfm-empirical-rule--><!--viz:sfm-exponential-area--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Exponential density with mean 4 minutes, highest at 0 and falling away. The area from 0 to 2 minutes is shaded: P(X ≤ 2) = 1 − e^(−0.5) = 0.3935.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Exponential waiting times: short gaps are most likely</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 222\" role=\"img\" aria-label=\"Exponential density with mean 4 minutes, highest at 0 and falling away. The area from 0 to 2 minutes is shaded: P(X ≤ 2) = 1 − e^(−0.5) = 0.3935.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M50,172 L50,42 L54.4,48.3 L58.8,54.4 L63.2,60.1 L67.6,65.6 L72,70.8 L76.4,75.7 L80.8,80.4 L85.2,84.9 L89.6,89.1 L94,93.2 L94,172 Z\" style=\"fill:var(--blue-soft);stroke:none\"/><path d=\"M50,42 L54.4,48.3 L58.8,54.4 L63.2,60.1 L67.6,65.6 L72,70.8 L76.4,75.7 L80.8,80.4 L85.2,84.9 L89.6,89.1 L94,93.2 L98.4,97 L102.8,100.7 L107.2,104.1 L111.6,107.4 L116,110.6 L120.4,113.6 L124.8,116.4 L129.2,119.1 L133.6,121.7 L138,124.2 L142.4,126.5 L146.8,128.7 L151.2,130.8 L155.6,132.8 L160,134.8 L164.4,136.6 L168.8,138.3 L173.2,139.9 L177.6,141.5 L182,143 L186.4,144.4 L190.8,145.8 L195.2,147 L199.6,148.3 L204,149.4 L208.4,150.5 L212.8,151.6 L217.2,152.6 L221.6,153.5 L226,154.4 L230.4,155.3 L234.8,156.1 L239.2,156.9 L243.6,157.6 L248,158.3 L252.4,159 L256.8,159.6 L261.2,160.2 L265.6,160.8 L270,161.3 L274.4,161.8 L278.8,162.3 L283.2,162.8 L287.6,163.3 L292,163.7 L296.4,164.1 L300.8,164.5 L305.2,164.8 L309.6,165.2 L314,165.5 L318.4,165.8 L322.8,166.1 L327.2,166.4 L331.6,166.7 L336,167 L340.4,167.2 L344.8,167.4 L349.2,167.7 L353.6,167.9 L358,168.1 L362.4,168.3 L366.8,168.4 L371.2,168.6 L375.6,168.8 L380,168.9 L384.4,169.1 L388.8,169.2 L393.2,169.4 L397.6,169.5 L402,169.6\" style=\"fill:none;stroke:var(--ink);stroke-width:2\"/><path d=\"M50,172 L50,42\" style=\"stroke:var(--ink);stroke-width:2;fill:none\"/><path d=\"M94,172 L94,93.2\" style=\"stroke:var(--blue);stroke-width:1.5;fill:none\"/><path d=\"M36,172 L414,172\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M50,172 L50,177\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"50\" y=\"192\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><path d=\"M94,172 L94,177\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"94\" y=\"192\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">2</text><path d=\"M138,172 L138,177\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"138\" y=\"192\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">4</text><path d=\"M226,172 L226,177\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"226\" y=\"192\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">8</text><path d=\"M314,172 L314,177\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"314\" y=\"192\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">12</text><path d=\"M402,172 L402,177\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"402\" y=\"192\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">16</text><path d=\"M76.4,150 L166.6,78\" style=\"stroke:var(--ink-3);stroke-width:1;fill:none\"/><text x=\"173.2\" y=\"76\" style=\"fill:var(--blue);font-size:13.5px;font-weight:700\">P(X ≤ 2) = 1 − e^(−2/4) = 0.3935</text><text x=\"142\" y=\"162\" style=\"fill:var(--ink-2);font-size:13px\">μ = 4</text><text x=\"232\" y=\"214\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">minutes between customer arrivals</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Use P(X ≤ x₀) = 1 − e^(−x₀/μ), and remember σ = μ. Even at the mean, P(X ≤ 4) = 0.632, not 0.5, because the long right tail pulls the mean above the median.</figcaption></figure><!--/viz:sfm-exponential-area--><p><strong>Density and area</strong> — A continuous variable has a probability density function f(x), not a probability function. Probability is the area under f(x) over an interval, so P(x = a) = 0 and including or excluding endpoints changes nothing. The height f(x) is not a probability and can exceed 1; the requirements are f(x) ≥ 0 and total area 1.<br><em>e.g.</em> A uniform density on 0 to 0.5 has height 2 — still valid, because the area is 0.5 × 2 = 1.</p><p><strong>Uniform distribution</strong> — Every sub-interval of equal length within [a, b] is equally likely, so probability is just interval width divided by (b − a). Its mean is the midpoint and its variance depends only on the range.<br><span style=\"font-family:var(--mono)\">f(x) = 1/(b − a) for a ≤ x ≤ b;  E(x) = (a + b)/2;  Var(x) = (b − a)²/12</span><br><em>e.g.</em> Uniform 20–50 minutes: P(30 ≤ x ≤ 40) = 10/30 = 0.333; σ = √75 = 8.66 minutes.</p><p><strong>Properties of the normal distribution</strong> — The normal family is fixed by two parameters, μ (location, any real number) and σ (spread). The curve is symmetric with its peak at the mean, which equals the median and mode; skewness is zero. Larger σ gives a wider, flatter curve. The tails extend forever without touching the axis, half the area lies on each side of μ, and the total area is 1.<br><span style=\"font-family:var(--mono)\">f(x) = [1/(σ√(2π))] e^(−(x − μ)²/(2σ²))</span></p><p><strong>Areas within 1, 2 and 3 standard deviations</strong> — About 68.3% of a normal variable's values lie within μ ± σ, 95.4% within μ ± 2σ and 99.7% within μ ± 3σ. These normal-curve areas are the source of the empirical rule used for bell-shaped data.<br><span style=\"font-family:var(--mono)\">P(−1 ≤ z ≤ 1) = 0.6826;  P(−2 ≤ z ≤ 2) = 0.9544;  P(−3 ≤ z ≤ 3) = 0.9974</span></p><p><strong>Standard normal and the cumulative table</strong> — The standard normal z has μ = 0 and σ = 1. The book's table gives cumulative areas P(z ≤ value). Three question types follow: left area = table value; area between two values = difference of two table values; right area = 1 − table value.<br><em>e.g.</em> P(z ≥ 1.58) = 1 − 0.9429 = 0.0571.</p><p><strong>Reverse lookup: from probability to z</strong> — Given an area, find the cumulative probability in the body of the table and read off z. An upper-tail area of α means a cumulative area of 1 − α. Common values: upper 10% → 1.28, upper 5% → 1.645, upper 2.5% → 1.96, upper 1% → 2.33. A lower-tail cut-off uses the negative of these.<br><em>e.g.</em> Upper-tail area 0.10 → cumulative 0.90 → closest table value 0.8997 → z = 1.28.</p><p><strong>Standardising any normal variable</strong> — z measures how many standard deviations x lies from μ, so any normal question becomes a standard-normal question. Reversing the formula converts a z cut-off back into the units of the problem — the step used for guarantees and thresholds.<br><span style=\"font-family:var(--mono)\">z = (x − μ)/σ;  x = μ + zσ</span><br><em>e.g.</em> Tyre life N(58,400 km, 8000): a 10%-eligibility guarantee is 58,400 − 1.28 × 8000 = 48,160 km.</p><p><strong>Normal approximation to the binomial</strong> — When np ≥ 5 and n(1 − p) ≥ 5, a binomial count is approximately normal with μ = np and σ = √[np(1 − p)]. Because a continuous curve stands in for whole-number counts, add or subtract 0.5 — the continuity correction — so that P(x = 12) becomes P(11.5 ≤ x ≤ 12.5) and P(x ≤ 13) becomes P(x ≤ 13.5).<br><span style=\"font-family:var(--mono)\">μ = np;  σ = √[np(1 − p)];  use x ± 0.5</span></p><p><strong>Exponential distribution</strong> — Describes times such as time between arrivals, service time or loading time, and is skewed to the right. Cumulative probabilities have a closed form, so no table is needed. Its mean and standard deviation are equal.<br><span style=\"font-family:var(--mono)\">f(x) = (1/μ) e^(−x/μ), x ≥ 0;  P(x ≤ x₀) = 1 − e^(−x₀/μ);  σ = μ</span><br><em>e.g.</em> Mean loading time 15 min: P(x ≤ 6) = 1 − e^(−0.4) = 0.3297.</p><p><strong>Poisson–exponential link</strong> — If the number of occurrences per interval is Poisson with mean λ per unit time, the time between occurrences is exponential with mean 1/λ. The two models describe the same arrival process: one counts arrivals, the other measures the gaps.<br><em>e.g.</em> 10 patients per hour (Poisson) ↔ mean gap of 0.1 hour = 6 minutes (exponential).</p><p><strong>Excel functions for continuous distributions</strong> — NORM.DIST(x, μ, σ, TRUE) returns P(X ≤ x). NORM.INV(probability, μ, σ) returns the x value with that cumulative area. EXPON.DIST(x, λ, TRUE) returns P(X ≤ x), where λ = 1/μ is the rate, not the mean.<br><em>e.g.</em> =EXPON.DIST(6,1/15,TRUE) returns 0.3297.</p><div class=\"card\"><strong>Case: P&amp;G raw-material risk</strong> <em>(Statistics in Practice: Procter &amp; Gamble)</em><p>P&amp;G's chemicals division weighed expanding fatty-alcohol capacity. Profitability hinged on the future price gap between coconut-oil and petroleum feedstocks, which analysts modelled as continuous random variables using expert input. The resulting distribution of the price difference gave probabilities for key thresholds that fed a sensitivity analysis and a recommendation to management.</p><p><em>Lesson:</em> Continuous distributions turn uncertain future costs into probabilities for decision analysis.</p><p><em>Think:</em> When analysts say there is a 0.90 probability that a cost gap is at or below some value, which percentile of the distribution are they quoting, and why is a percentile more useful to a manager than the mean alone?</p></div><div class=\"card\"><strong>Case: Weather Teddy order quantity</strong> <em>(Case Problem 1: Specialty Toys)</em><p>A toy retailer must place a single pre-season order for a new talking teddy bear. Its forecaster gives an expected demand and a range expected to hold with high probability, which pins down a normal demand distribution. The case asks for stock-out probabilities and profit for several proposed order quantities.</p><p><em>Lesson:</em> Using a stated 95% range to back out σ, then normal probabilities to compare order quantities.</p><p><em>Think:</em> How does a forecaster's statement that demand will fall within a given range with 0.95 probability let you back out σ for a normal model, and why does ordering above the mean cut stock-out risk but raise clearance losses?</p></div><details><summary>Worked problem: Courier delivery times</summary><p>A Delhi courier's same-day delivery times are normal with μ = 42 minutes and σ = 8 minutes. What proportion of deliveries take more than 50 minutes, and what proportion take between 30 and 50 minutes?</p><ol><li>z at 50: (50 − 42)/8 = 1.00. Table: P(z ≤ 1.00) = 0.8413.</li><li>P(x &gt; 50) = 1 − 0.8413 = 0.1587.</li><li>z at 30: (30 − 42)/8 = −1.50. Table: P(z ≤ −1.50) = 0.0668.</li><li>P(30 ≤ x ≤ 50) = 0.8413 − 0.0668 = 0.7745.</li></ol><p><strong>Answer:</strong> About 15.9% take more than 50 minutes; about 77.5% take 30–50 minutes.</p></details><details><summary>Worked problem: Premium-offer cut-off (reverse lookup)</summary><p>Monthly data use of a telecom's prepaid users is normal with μ = 18 GB and σ = 5 GB. The top 5% of users get a premium offer. What usage qualifies?</p><ol><li>Top 5% means an upper-tail area of 0.05, so the cumulative area to the left is 0.95.</li><li>From the table, 0.95 lies midway between z = 1.64 (0.9495) and 1.65 (0.9505): z = 1.645.</li><li>x = μ + zσ = 18 + 1.645 × 5 = 18 + 8.225 = 26.2 GB.</li></ol><p><strong>Answer:</strong> Users above about 26.2 GB a month qualify.</p></details><details><summary>Worked problem: Passport counter service time (exponential)</summary><p>Service time at a passport seva counter is exponential with mean 12 minutes. Find P(service ≤ 6 min), P(service &gt; 20 min) and P(6 ≤ service ≤ 18 min).</p><ol><li>P(x ≤ x₀) = 1 − e^(−x₀/12).</li><li>P(x ≤ 6) = 1 − e^(−0.5) = 1 − 0.6065 = 0.3935.</li><li>P(x &gt; 20) = e^(−20/12) = e^(−1.667) = 0.1889.</li><li>P(6 ≤ x ≤ 18) = e^(−0.5) − e^(−1.5) = 0.6065 − 0.2231 = 0.3834.</li><li>Also σ = μ = 12 minutes.</li></ol><p><strong>Answer:</strong> 0.3935; 0.1889; 0.3834.</p></details><details><summary>Worked problem: Invoice errors (normal approximation to the binomial)</summary><p>8% of a distributor's invoices contain an error. In a sample of 200 invoices, approximate P(20 or fewer contain errors).</p><ol><li>Check: np = 16 ≥ 5 and n(1 − p) = 184 ≥ 5, so the normal approximation is acceptable.</li><li>μ = np = 16; σ = √(200 × 0.08 × 0.92) = √14.72 = 3.837.</li><li>Continuity correction: P(x ≤ 20) → P(x ≤ 20.5).</li><li>z = (20.5 − 16)/3.837 = 1.17; table P(z ≤ 1.17) = 0.8790.</li><li>(The exact binomial value is 0.8775, so the approximation is close.)</li></ol><p><strong>Answer:</strong> P(20 or fewer errors) ≈ 0.879.</p></details><div class=\"def\"><b>Book vs lecture — Percentages within 1, 2 and 3 standard deviations.</b> Book: States 68.3%, 95.4% and 99.7% (and computes 0.6826 for ±1σ from the table). Lecture: The hub records the lecturer's 'empirical rule in detail' as 68.26%, 95.44% and 99.72%. <b>Same areas, different rounding. Pick whichever option matches; both are correct.</b></div><div class=\"def\"><b>Book vs lecture — Exponential distribution coverage.</b> Book: Section 6.4 covers the exponential and its link to the Poisson. Lecture: The hub's Lecture 12 record ('Continuous Probability Distributions 1') covers uniform, normal and standard normal only; the exponential is on the official outline but not yet in the lecture record. <b>Learn P(x ≤ x₀) = 1 − e^(−x₀/μ), σ = μ and the Poisson link — it is on the syllabus even if not yet lectured.</b></div><div class=\"def\"><b>Book vs lecture — Software for normal and exponential probabilities.</b> Book: Excel NORM.DIST, NORM.INV and EXPON.DIST (rate 1/μ), plus JMP. Lecture: The course teaches Excel and R; in R the equivalents are pnorm/qnorm and pexp(x, rate = 1/μ). <b>Both Excel's EXPON.DIST and R's pexp take the rate 1/μ, not the mean — the same trap in both tools.</b></div>"
    }
   ]
  },
  {
   "id": "sampling",
   "title": "Sampling &amp; sampling distributions",
   "tag": "Lectures 17, 19–20 · + textbook",
   "lede": "Why a small sample can stand in for a whole population, how far x̄ and p̂ typically wander from μ and p, and which sampling method to use when a simple random sample is not possible.",
   "topics": [
    {
     "t": "Why we sample",
     "src": "L#17",
     "h": "<p style=\"font-size:14.5px\">We study a sample only to learn about the <strong>population</strong>; there is little business interest in the sample itself. Three everyday samples:</p>\n<ul>\n<li><strong>Blood test</strong>: 5–7 ml gives a near-complete profile of all the blood in the body.</li>\n<li><strong>Cooking rice</strong>: one spoonful tells you whether the whole pot is cooked.</li>\n<li><strong>Tyre testing</strong>: a few tyres are run for the promised distance on a test rig; the rest are sold.</li>\n</ul>\n<div class=\"scroller\"><table><thead><tr><th>Why not test everything?</th><th>Example</th></tr></thead><tbody>\n<tr><td>Sometimes it is <strong>impossible</strong></td><td>You cannot drain all of a patient's blood to test it</td></tr>\n<tr><td>It <strong>saves time</strong></td><td>One spoonful, tasted in a second</td></tr>\n<tr><td>It <strong>reduces cost</strong></td><td>Fewer tests, fewer resources</td></tr>\n<tr><td>It <strong>avoids destruction</strong></td><td>A tyre run for 10,000 km cannot be sold as new</td></tr>\n</tbody></table></div>\n<p style=\"font-size:14.5px\">The test is done on the sample but the <strong>decision is taken for the whole population</strong>: which medicine to give, whether to serve the rice, whether the batch of tyres meets its warranty. That only works if the sample <strong>represents</strong> the population. Rice from one corner or the very bottom of the pot, or a sample full of outliers, gives a distorted picture.</p>"
    },
    {
     "t": "Finite and infinite populations",
     "src": "L#17",
     "h": "<div class=\"def\">A <b>finite population</b> can be listed in full: a membership roster, credit-card account numbers, inventory product numbers, the students in a class. Small <b>n</b> is the sample size, capital <b>N</b> the population size.</div>\n<p style=\"font-size:14.5px\">From a finite population, a <strong>simple random sample</strong> of size n is one in which every possible sample of size n has the same probability of being chosen, like shaking chits in a jar before a lucky draw.</p>\n<ul>\n<li><strong>With replacement</strong>: each element goes back before the next draw, so it can appear more than once.</li>\n<li><strong>Without replacement</strong>: each element can be picked only once. This is what industry and managers normally use, with random numbers to automate it, so that no unit is tested twice and the sample shows enough variety.</li>\n</ul>\n<div class=\"def\">An <b>infinite population</b> is generated by an ongoing process with no upper limit, so no frame can be built: parts coming off a production line, bank transactions, people arriving at a railway or bus station, calls to a technical help desk, customers entering a store.</div>\n<p style=\"font-size:14.5px\">Here a sample counts as random if (1) every element comes from the <strong>population of interest</strong> and (2) each element is selected <strong>independently</strong> of the others.</p>\n<h4>Target population vs sampled population</h4>\n<p style=\"font-size:14.5px\">The <strong>target population</strong> is the one you want conclusions about; the <strong>sampled population</strong> is the one the sample actually came from. They must be in close agreement. Buying behaviour in a festival season differs from the rest of the year, so to learn about festival buying, sample festival shoppers (last year's festival, say), not July shoppers. To judge a pot of rice, take spoonfuls from several places.</p>"
    },
    {
     "t": "Point estimation",
     "src": "L#17",
     "h": "<div class=\"def\"><b>Point estimation</b> uses sample data to compute a <b>sample statistic</b> whose value serves as an estimate of a <b>population parameter</b>.</div>\n<div class=\"scroller\"><table><thead><tr><th>Point estimator</th><th>Estimates</th></tr></thead><tbody>\n<tr><td>x̄, the sample mean</td><td>μ, the population mean</td></tr>\n<tr><td>s, the sample standard deviation</td><td>σ, the population standard deviation</td></tr>\n<tr><td>p̂ (p-hat; the textbook writes p̄), the sample proportion</td><td>p, the population proportion</td></tr>\n</tbody></table></div>\n<p style=\"font-size:14.5px\"><strong>Rice again:</strong> press 50 grains and find 48 cooked. The sample proportion 48/50 = 0.96 is a point estimate that about 96% of the pot is cooked.</p>\n<p style=\"font-size:14.5px\"><strong>His college example:</strong> St Andrew's College has 900 applications, but the data are not yet in the database. The director wants the average SAT score and the share of applicants wanting campus housing now, so a random sample of 30 applications is drawn. When all 900 records are later entered, the sample figures turn out to be close to the true values (see the table). Thirty records instead of 900 saved time and allowed an early decision.</p><!--viz:sfm-l17-estimate-vs-parameter--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table comparing sample statistics from 30 of 900 college applicants with the population values: mean SAT 1,684 versus 1,697, standard deviation 85.2 versus 87.4, proportion wanting housing 0.67 versus 0.72.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Thirty applications stand in for nine hundred</div><div class=\"scroller\"><table><thead><tr><th></th><th>Sample of 30 (statistic)</th><th>All 900 applicants (parameter)</th></tr></thead><tbody><tr><td>Mean SAT score</td><td style=\"background:var(--blue-soft)\">x̄ = 1,684</td><td>μ = 1,697</td></tr><tr><td>Standard deviation</td><td style=\"background:var(--blue-soft)\">s = 85.2</td><td>σ = 87.4</td></tr><tr><td>Want campus housing</td><td style=\"background:var(--blue-soft)\">p̂ = 0.67</td><td>p = 0.72</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Close but not exact: a point estimate always carries some sampling error, and another sample of 30 would give different numbers.</figcaption></figure><!--/viz:sfm-l17-estimate-vs-parameter-->"
    },
    {
     "t": "Drawing a random sample in Excel",
     "src": "L#17",
     "h": "<p style=\"font-size:14.5px\">The data: 2,500 managers, with annual salary and whether each attended a training programme. Goal: estimate the mean salary, its standard deviation and the share trained, from a sample of 50.</p>\n<ol>\n<li>Next to each row type <code>=RANDBETWEEN(1,50)</code> and fill it down all 2,500 rows.</li>\n<li>Copy the column and <strong>Paste Special → Values</strong>. The formula recalculates on every edit, so freeze the numbers before doing anything else.</li>\n<li>Filter or sort by the random column, smallest to largest, and copy the first 50 rows to a new sheet named <em>sample</em>.</li>\n<li>Compute <code>=AVERAGE(…)</code>, <code>=STDEV.S(…)</code> (S because it is a sample) and the share with training. For the full data use <code>=STDEV.P(…)</code>.</li>\n</ol>\n<div class=\"scroller\"><table><thead><tr><th></th><th>Sample of 50</th><th>All 2,500</th></tr></thead><tbody>\n<tr><td>Mean salary</td><td>$72,370</td><td>$71,800</td></tr>\n<tr><td>Standard deviation</td><td>$3,063</td><td>$3,999 ≈ $4,000</td></tr>\n<tr><td>Proportion trained</td><td>30/50 = 0.60</td><td>1,500/2,500 = 0.60</td></tr>\n</tbody></table></div>\n<p style=\"font-size:14.5px\">Your own sample will contain different managers and give slightly different numbers, but they should land close to the population values. That sample-to-sample variation is exactly what the next lecture studies.</p>\n<p style=\"font-size:14.5px\">R: <code>s &lt;- data[sample(2500, 50), ]</code> draws 50 rows without replacement; then <code>mean()</code>, <code>sd()</code> (which divides by n − 1) and <code>mean(s$trained == \"Yes\")</code>.</p>\n<div class=\"def\"><b>From the lecture (L#17):</b> the class will repeat this exercise together in a live session, to show that everyone gets a different sample mean and that all of them sit surprisingly close to the population average.</div><!--viz:sfm-l17-excel-sample-steps--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Flow: put RANDBETWEEN on every row, paste the random numbers as values, sort by them, take the first 50 rows, then compute AVERAGE, STDEV.S and the proportion.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">A random sample in five Excel steps</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>1</b> <code>=RANDBETWEEN(1,50)</code> on every row</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><b>2</b> Copy, <b>Paste Special → Values</b></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>3</b> Sort by the random column</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>4</b> Take the first 50 rows</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>5</b> <code>AVERAGE</code>, <code>STDEV.S</code>, proportion</div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Step 2 is the one people skip: unfrozen random numbers recalculate and reshuffle the sample on every edit.</figcaption></figure><!--/viz:sfm-l17-excel-sample-steps-->"
    },
    {
     "t": "Sampling distribution of x̄ and the standard error",
     "src": "L#19",
     "h": "<p style=\"font-size:14.5px\">If 100 students each draw a random sample of 50 managers, they get 100 different sample means. Plotted together, those means form a distribution of their own, close to a normal curve: the <strong>sampling distribution of x̄</strong>.</p>\n<ul>\n<li>Its expected value, the <strong>grand mean</strong> of all the sample means, equals the population mean: <strong>E(x̄) = μ</strong>. An estimator whose expected value equals the parameter is <strong>unbiased</strong>.</li>\n<li>Its standard deviation σ<sub>x̄</sub> is called the <strong>standard error of the mean</strong>: how far a sample mean typically falls from μ.</li>\n</ul>\n<div class=\"scroller\"><table><thead><tr><th>Population</th><th>Standard error of x̄</th></tr></thead><tbody>\n<tr><td>Finite</td><td>σ<sub>x̄</sub> = √[(N − n)/(N − 1)] × σ/√n</td></tr>\n<tr><td>Infinite, or finite with n/N &lt; 0.05</td><td>σ<sub>x̄</sub> = σ/√n</td></tr>\n</tbody></table></div>\n<p style=\"font-size:14.5px\">√[(N − n)/(N − 1)] is the <strong>finite population correction factor</strong>. Divide top and bottom by N and it becomes √[(1 − n/N)/(1 − 1/N)], which tends to 1 as N grows, leaving σ/√n. The lecture's rule: treat the population as infinite when <strong>n/N &lt; 0.05</strong>. For the 50-of-2,500 manager sample, n/N = 0.02, so σ/√n is enough.</p>\n<p style=\"font-size:14.5px\"><strong>Why the correction makes sense:</strong> in a class of 100, a \"sample\" of all 100 gives the same mean to everyone, so the factor is √0 = 0 and the standard error is zero. The larger n is relative to N, the less sample means can differ.</p>"
    },
    {
     "t": "The central limit theorem",
     "src": "L#19",
     "h": "<div class=\"def\"><b>Central limit theorem:</b> when random samples of size n are drawn from a population, the sampling distribution of the sample mean x̄ can be approximated by a normal distribution as n becomes large, whatever the shape of the population.</div>\n<ul>\n<li>If the population is already normal, x̄ is normal for <strong>any</strong> n.</li>\n<li>Rule of thumb: <strong>n ≥ 30</strong> is usually enough. For highly skewed populations or many outliers, use 50 or more. The larger the better.</li>\n</ul>\n<p style=\"font-size:14.5px\">His picture: three very different populations (uniform, bimodal, exponential). With n = 2 the sampling distributions still look like their parents; by n = 5 they are already rounding into a bell; at n = 30 all three are close to normal.</p>\n<p style=\"font-size:14.5px\"><strong>Be careful:</strong> it is the distribution of the <strong>mean</strong> of many samples that becomes normal. The 30 values inside any one sample still look like the population they came from.</p>"
    },
    {
     "t": "How close is x̄ to μ?",
     "src": "L#19",
     "h": "<p style=\"font-size:14.5px\">The point of the sampling distribution: it tells you how likely your one sample mean is to land close to μ. Convert the margin into z with the <strong>standard error</strong>: z = (x̄ − μ)/σ<sub>x̄</sub>.</p>\n<p style=\"font-size:14.5px\"><strong>St Andrew's College</strong> (N = 900 applicants, μ = 1,697, σ = 87.4). What is the chance that a random sample of 30 gives a mean SAT score within ±10 of μ, i.e. between 1,687 and 1,707?</p>\n<ol>\n<li>n/N = 30/900 = 0.033 &lt; 0.05, so σ<sub>x̄</sub> = 87.4/√30 = 15.96.</li>\n<li>z = 10/15.96 = 0.63 at the top, −0.63 at the bottom.</li>\n<li>P(Z ≤ 0.63) = 0.7357 and P(Z ≤ −0.63) = 0.2643.</li>\n<li>P(1,687 ≤ x̄ ≤ 1,707) = 0.7357 − 0.2643 = <strong>0.4714</strong>.</li>\n</ol>\n<p style=\"font-size:14.5px\"><strong>Now n = 100.</strong> n/N = 0.111 &gt; 0.05, so the correction applies: √(800/899) = 0.9433 and σ<sub>x̄</sub> = 0.9433 × 87.4/√100 = 8.2. z = 10/8.2 = 1.22 and the probability rises to <strong>0.7776</strong>. The standard error has roughly halved (15.96 → 8.2), so the sampling distribution is narrower and more of it lies within ±10.</p>\n<p style=\"font-size:14.5px\">Excel: <code>=NORM.DIST(1707, 1697, 87.4/SQRT(30), TRUE) - NORM.DIST(1687, 1697, 87.4/SQRT(30), TRUE)</code> gives 0.4691; the small gap from 0.4714 comes from rounding z to 0.63 for the table. R: <code>pnorm(1707, 1697, 87.4/sqrt(30)) - pnorm(1687, 1697, 87.4/sqrt(30))</code>.</p>\n<div class=\"def\"><b>From the lecture (L#19):</b> this is the format in which most questions from this chapter will come: find the probability that the sample mean lies between two values around the population mean. Practise it with both the table and Excel.</div><!--viz:sfm-l19-within-margin-steps--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Flow: check n over N to choose the standard error formula, compute the standard error, divide the margin by it to get z, read the table at plus and minus z, subtract.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Five steps to P(x̄ within ± a margin of μ)</div><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:14px\"><div style=\"padding:7px 11px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><b>1</b> n/N &lt; 0.05? use σ/√n · else × √[(N − n)/(N − 1)]</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>2</b> standard error σ<sub>x̄</sub></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>3</b> z = ± margin ÷ σ<sub>x̄</sub></div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>4</b> table areas at +z and −z</div><span style=\"color:var(--ink-3)\">→</span><div style=\"padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>5</b> subtract: P(−z ≤ Z ≤ z)</div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Step 3 is where marks are lost: divide the margin by the standard error, never by σ.</figcaption></figure><!--/viz:sfm-l19-within-margin-steps--><!--viz:sfm-l19-st-andrews-trace--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Trace table for St Andrew's College (N = 900): sample mean within ±10 with n = 30 gives standard error 15.96, z = ±0.63, probability 0.4714; with n = 100 the correction applies, standard error 8.2, z = ±1.22, probability 0.7776; sample proportion within ±0.05 with n = 30 gives standard error 0.0820, z = ±0.61, probability 0.4582.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">St Andrew's, three ways</div><div class=\"scroller\"><table><thead><tr><th>Case</th><th>Std error</th><th>z</th><th>Probability</th></tr></thead><tbody><tr><td>x̄ within ±10, n = 30</td><td>15.96</td><td>±0.63</td><td>0.4714</td></tr><tr><td>x̄ within ±10, n = 100</td><td>8.2 (corrected)</td><td>±1.22</td><td style=\"background:var(--blue-soft)\">0.7776</td></tr><tr><td>p̂ within ±0.05, n = 30</td><td>0.0820</td><td>±0.61</td><td>0.4582</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Only n = 100 needs the finite population correction (100/900 = 0.111 &gt; 0.05). More data, smaller standard error, higher chance of landing close.</figcaption></figure><!--/viz:sfm-l19-st-andrews-trace-->"
    },
    {
     "t": "Sampling distribution of p̂",
     "src": "L#19",
     "h": "<p style=\"font-size:14.5px\">The same machinery works for a <strong>proportion</strong>: if 60 of 100 sampled applicants tick \"yes\" for housing, p̂ = 0.60. Over repeated samples, p̂ has its own sampling distribution:</p>\n<ul>\n<li><strong>E(p̂) = p</strong>, so p̂ is an unbiased estimator of the population proportion.</li>\n<li><strong>Standard error of the proportion:</strong> σ<sub>p̂</sub> = √[p(1 − p)/n], multiplied by the same finite population correction when n/N &gt; 0.05.</li>\n<li>It is approximately normal when <strong>np ≥ 5 and n(1 − p) ≥ 5</strong>, the proportion's counterpart of the n ≥ 30 rule.</li>\n</ul>\n<p style=\"font-size:14.5px\"><strong>St Andrew's again:</strong> 72% of all applicants want campus housing. For a sample of 30, what is P(p̂ within ±0.05 of 0.72)?</p>\n<ol>\n<li>Check: np = 30 × 0.72 = 21.6 and n(1 − p) = 30 × 0.28 = 8.4, both ≥ 5, so the normal applies.</li>\n<li>σ<sub>p̂</sub> = √(0.72 × 0.28/30) = 0.0820.</li>\n<li>z = 0.05/0.0820 = 0.61: P(Z ≤ 0.61) = 0.7291 and P(Z ≤ −0.61) = 0.2709.</li>\n<li>P(0.67 ≤ p̂ ≤ 0.77) = 0.7291 − 0.2709 = <strong>0.4582</strong>.</li>\n</ol>"
    },
    {
     "t": "Stratified, cluster and systematic sampling",
     "src": "L#20",
     "h": "<p style=\"font-size:14.5px\">A simple random sample needs a list of the whole population, which managers often cannot get. Five other methods fill the gap. The goal never changes: learn the population's mean, proportion or preferences cheaply and quickly.</p>\n<h4>Stratified random sampling</h4>\n<p style=\"font-size:14.5px\">Divide the population into <strong>strata</strong> so that each element belongs to exactly one, and make each stratum as <strong>homogeneous</strong> as possible. Take a simple random sample within every stratum and combine them. If the strata really are alike inside, results are precise with a <strong>smaller total sample</strong>, saving time and money. Common bases: gender, age, location, industry, income.</p>\n<p style=\"font-size:14.5px\">His example: a survey for a national policy that simply picks 20 random locations may miss small towns, a whole region or an income group. Stratify first (by region, town size, age, income), then sample randomly inside each stratum, and every segment is represented. A college trying a new initiative would survey department by department.</p>\n<h4>Cluster sampling</h4>\n<p style=\"font-size:14.5px\">Divide the population into <strong>clusters</strong>, each ideally a small-scale version of the population, so <strong>heterogeneous</strong> inside. Pick clusters at random and include <strong>every element</strong> of each chosen cluster. Typical uses: city blocks and other well-defined areas. Elements close together make fieldwork cheap and quick, but the <strong>total sample is usually larger</strong> than with simple random or stratified sampling.</p>\n<h4>Systematic sampling</h4>\n<p style=\"font-size:14.5px\">To take n from N, let k = N/n. Pick one of the first k elements at random, then every k-th element after it: 100 customers from 1,000 means k = 10. If the list or arrival order has <strong>no pattern</strong>, the result behaves like a simple random sample, and it is easier to run because you need a rule, not a full list. Examples: every 100th listing in a telephone directory after a random start; every 20th customer or the 100th caller winning a prize, which nobody can arrange to be.</p><!--viz:sfm-l20-strata-vs-clusters--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Comparison of stratified and cluster sampling: strata are internally alike and every stratum is sampled; clusters are internally mixed and a few whole clusters are taken. Stratified needs a smaller sample and gives precision; cluster needs a larger sample but is cheap and quick.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Stratified vs cluster: opposite kinds of group</div><div class=\"scroller\"><table><thead><tr><th></th><th>Stratified</th><th>Cluster</th></tr></thead><tbody><tr><td>Inside each group</td><td style=\"background:var(--blue-soft)\">members <b>alike</b> (homogeneous)</td><td style=\"background:var(--clay-soft)\">members <b>mixed</b> (heterogeneous): a mini-population</td></tr><tr><td>What you take</td><td style=\"background:var(--blue-soft)\">a random sample from <b>every</b> stratum</td><td style=\"background:var(--clay-soft)\"><b>all</b> elements of a few randomly chosen clusters</td></tr><tr><td>Total sample needed</td><td>smaller than simple random for the same precision</td><td>larger than simple random or stratified</td></tr><tr><td>Main advantage</td><td>precise; every segment is represented</td><td>cheap and quick when elements sit close together</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Strata are alike inside and all of them are sampled; clusters are mixed inside and only some are taken, whole.</figcaption></figure><!--/viz:sfm-l20-strata-vs-clusters-->"
    },
    {
     "t": "Convenience and judgement sampling",
     "src": "L#20",
     "h": "<p style=\"font-size:14.5px\">These are <strong>non-probability</strong> methods: elements enter the sample without known probabilities of selection.</p>\n<div class=\"scroller\"><table><thead><tr><th></th><th>Convenience</th><th>Judgement</th></tr></thead><tbody>\n<tr><td>Who is chosen</td><td>whoever is easiest to reach</td><td>the elements an expert believes are most representative</td></tr>\n<tr><td>Examples</td><td>a professor's student volunteers; asking a friend about a restaurant; researchers surveying firms where they know people</td><td>a reporter interviewing three or four senators to gauge the Senate; a teacher choosing students to represent the class at an Olympiad; studio experts 'reflecting' public opinion</td></tr>\n<tr><td>Advantage</td><td>easy, quick data collection</td><td>easy, quick selection</td></tr>\n<tr><td>Disadvantage</td><td>no way to tell how representative the sample is</td><td>only as good as the selector's judgement; open to bias and misjudgement</td></tr>\n</tbody></table></div>\n<p style=\"font-size:14.5px\">Convenience sampling is used when access to the population is very limited: listing every organisation and getting into a random selection of them is close to impossible, so much organisational research relies on it. But the friend who loved a restaurant may have had a special birthday treatment; their view is not the average diner's.</p>\n<p style=\"font-size:14.5px\"><strong>The lecture's recommendation:</strong> use a probability method (simple random, stratified, cluster or systematic) whenever possible. Only then do formulas tell you how close the sample result is likely to be to the population value. The goodness of a convenience or judgement sample cannot be evaluated.</p>\n<h4>His closing checks</h4>\n<ul>\n<li>Convenience sampling is a <strong>non-probability</strong> method.</li>\n<li>As the sample size grows, the <strong>standard error of the mean falls</strong> (σ/√n). The population's mean and standard deviation are fixed and do not change.</li>\n<li>In point estimation, <strong>sample</strong> data estimate a <strong>population</strong> parameter. If you had the population data, you would not need to estimate.</li>\n</ul>\n<div class=\"def\"><b>From the lecture (L#20):</b> the numerical side of stratified (and other) designs is left to a later research-methods course; here, know what each method is, its advantages and disadvantages, and when to use it. A short case-based question and practice questions follow this lecture.</div><!--viz:sfm-l20-probability-tree--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Tree of sampling methods. Probability methods: simple random, stratified random, cluster and systematic, where each element's chance of selection is known and accuracy can be evaluated. Non-probability methods: convenience and judgement, where it is unknown and accuracy cannot be evaluated.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Which sampling methods let you judge the result?</div><div style=\"font-size:14px\"><div style=\"text-align:center;margin-bottom:6px\"><span style=\"display:inline-block;padding:7px 11px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface)\"><b>Sampling methods</b></span></div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px\"><div style=\"padding:10px;border:1px solid var(--blue);border-radius:4px;background:var(--blue-soft)\"><b>Probability</b><div style=\"margin-top:6px;padding:6px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);font-size:13.5px\">Simple random</div><div style=\"margin-top:6px;padding:6px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);font-size:13.5px\">Stratified random</div><div style=\"margin-top:6px;padding:6px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);font-size:13.5px\">Cluster</div><div style=\"margin-top:6px;padding:6px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);font-size:13.5px\">Systematic</div><div style=\"margin-top:8px;font-size:13px;color:var(--ink-2)\">chance of selection known → accuracy can be evaluated</div></div><div style=\"padding:10px;border:1px solid var(--clay);border-radius:4px;background:var(--clay-soft)\"><b>Non-probability</b><div style=\"margin-top:6px;padding:6px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);font-size:13.5px\">Convenience</div><div style=\"margin-top:6px;padding:6px 9px;border:1px solid var(--rule-2);border-radius:4px;background:var(--surface);font-size:13.5px\">Judgement</div><div style=\"margin-top:8px;font-size:13px;color:var(--ink-2)\">chance of selection unknown → accuracy cannot be evaluated</div></div></div></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The lecture's advice: use a probability method whenever you can, because only then can the closeness of the result be assessed.</figcaption></figure><!--/viz:sfm-l20-probability-tree-->"
    },
    {
     "t": "Practice questions from the lecturer (L#20)",
     "src": "L#20",
     "h": "<p style=\"font-size:14.5px\">The lecturer's own practice set for Chapter 7, shared after L#20 (12 questions). Each one is restated in our words below with a full worked solution; the numbers are the sheet's. The mix is typical of his style: point estimates from raw counts, standard errors, the n ≥ 30 and np ≥ 5 checks, the finite population correction, a ‘within ±k of μ’ probability, one reverse problem, a sample-size calculation and naming the sampling method.</p><div class=\"def\"><b>Notation on the sheet:</b> in its sample-proportion question the sheet prints <b>p</b> where it means the <b>sample proportion</b> p̂ (the textbook writes p̄). ‘The expected value of p’ there means E(p̂), which equals the population p.</div><details><summary>Q1 · Point estimates of proportions (three answer options)</summary><p style=\"font-size:14.5px\">150 people answer a survey question: 75 say Yes, 55 say No and 20 have no opinion. Estimate the population proportions answering Yes and No.</p><ol><li>The sample size is all 150 respondents, including the 20 with no opinion.</li><li>p̂(Yes) = 75/150 = 0.50.</li><li>p̂(No) = 55/150 = 0.367.</li></ol><p style=\"font-size:14.5px\"><strong>Answer:</strong> Yes ≈ 0.50; No ≈ 0.367. (Dividing by 130, the Yes + No total, would be wrong: no-opinion answers are part of the sample.)</p></details><details><summary>Q2 · Point estimates of a mean and standard deviation</summary><p style=\"font-size:14.5px\">Six months of unit sales: 95, 98, 92, 85, 105, 89. Estimate the population mean and standard deviation of monthly units sold. (The sheet's table row is headed ‘Unsold Units’ while the question asks about units sold; the arithmetic is the same either way.)</p><ol><li>x̄ = (95 + 98 + 92 + 85 + 105 + 89)/6 = 564/6 = 94.</li><li>Deviations from 94: 1, 4, −2, −9, 11, −5. Squares: 1, 16, 4, 81, 121, 25; sum = 248.</li><li>s² = 248/(6 − 1) = 49.6, so s = √49.6 = 7.04. Use n − 1 because this is a sample (Excel STDEV.S).</li></ol><p style=\"font-size:14.5px\"><strong>Answer:</strong> Mean ≈ 94 units a month; standard deviation ≈ 7.04 units. (Dividing by n gives 6.43, the population formula, which is not the point estimate.)</p></details><details><summary>Q3 · Sampled population and estimates from a survey</summary><p style=\"font-size:14.5px\">A 2012 US survey asked 426 adults aged 50 and over how important various issues were to their vote. 350 called Social Security and Medicare ‘very important’, 74% said so of education, and 354 said so of job growth. Name the sampled population and estimate the three quantities.</p><ol><li>Sampled population: US adults aged 50 and older (the group the 426 were drawn from).</li><li>Social Security and Medicare: p̂ = 350/426 = 0.822.</li><li>Education: the number of respondents = 0.74 × 426 = 315.24 ≈ 315.</li><li>Job growth: p̂ = 354/426 = 0.831.</li></ol><p style=\"font-size:14.5px\"><strong>Answer:</strong> Sampled population = US adults 50+; 0.822; about 315 respondents; 0.831.</p></details><details><summary>Q4 · Sampling distribution of the sample proportion</summary><p style=\"font-size:14.5px\">A sample of 100 is drawn from a population with p = 0.40. Give E(p̂), the standard error of p̂, the sampling distribution and what it shows.</p><ol><li>E(p̂) = p = 0.40 (p̂ is unbiased).</li><li>σ<sub>p̂</sub> = √[p(1 − p)/n] = √(0.40 × 0.60/100) = √0.0024 = 0.049.</li><li>Normal check: np = 40 and n(1 − p) = 60, both ≥ 5, so p̂ is approximately normal with mean 0.40 and standard error 0.049.</li><li>Meaning: it is the probability distribution of all the p̂ values that samples of 100 could give. About 95% of them would fall within 0.40 ± 1.96 × 0.049, i.e. 0.304 to 0.496.</li></ol><p style=\"font-size:14.5px\"><strong>Answer:</strong> E(p̂) = 0.40; σ<sub>p̂</sub> = 0.049; approximately normal, N(0.40, 0.049); it shows how p̂ varies from sample to sample.</p></details><details><summary>Q5 · When is x̄ approximately normal?</summary><p style=\"font-size:14.5px\">Decide whether the sampling distribution of x̄ is approximately normal: (a) normal population, n = 12; (b) highly right-skewed population, n = 12; (c) highly right-skewed population, n = 45; (d) explain the role of the central limit theorem.</p><ol><li>(a) Yes. A normal population gives a normal x̄ for any sample size.</li><li>(b) No. n = 12 is too small for the CLT to overcome strong skew.</li><li>(c) Yes by the usual n ≥ 30 rule, so this is the expected answer. But note the lecture's caution that a highly skewed population may need about 50: n = 45 is close to that, so the approximation is reasonable rather than excellent.</li><li>(d) The CLT says that for large n the distribution of x̄ is close to normal whatever the population's shape, so the population's shape matters only when n is small.</li></ol><p style=\"font-size:14.5px\"><strong>Answer:</strong> (a) yes; (b) no; (c) yes, approximately (n ≥ 30), with the ‘about 50 for heavy skew’ caution; (d) as above.</p></details><details><summary>Q6 · Probability that x̄ is within ±5 and ±10 of μ</summary><p style=\"font-size:14.5px\">Population μ = 200, σ = 50; a sample of 100 is taken. Find P(x̄ within ±5 of μ) and P(x̄ within ±10 of μ).</p><ol><li>σ<sub>x̄</sub> = 50/√100 = 5 (the population size is not given, so treat it as infinite).</li><li>±5: z = 5/5 = 1. P(−1 ≤ Z ≤ 1) = 0.8413 − 0.1587 = 0.6826.</li><li>±10: z = 10/5 = 2. P(−2 ≤ Z ≤ 2) = 0.9772 − 0.0228 = 0.9544.</li><li>Excel check: <code>=NORM.DIST(205,200,5,TRUE)-NORM.DIST(195,200,5,TRUE)</code> = 0.6827.</li></ol><p style=\"font-size:14.5px\"><strong>Answer:</strong> ≈ 0.683 for ±5 and ≈ 0.954 for ±10.</p></details><details><summary>Q7 · Working backwards to μ and σ</summary><p style=\"font-size:14.5px\">Samples of 30 products are weighed and x̄ is recorded. Over a long period 5% of the x̄ values exceed 2.1 lb and 5% fall below 1.9 lb. Find the population mean and standard deviation.</p><ol><li>The cut-offs are symmetric, so the centre of the sampling distribution is μ = (1.9 + 2.1)/2 = 2.0 lb.</li><li>5% in the upper tail means 2.1 is z = 1.645 standard errors above μ: 0.1 = 1.645 × σ<sub>x̄</sub>, so σ<sub>x̄</sub> = 0.1/1.645 = 0.0608.</li><li>σ<sub>x̄</sub> = σ/√n, so σ = 0.0608 × √30 = 0.333 lb.</li></ol><p style=\"font-size:14.5px\"><strong>Answer:</strong> μ = 2.0 lb; σ ≈ 0.33 lb. (Stopping at 0.0608 gives the standard error, not the population σ.)</p></details><details><summary>Q8 · Standard error for n = 36 and n = 144</summary><p style=\"font-size:14.5px\">σ = 72. Find the standard error of x̄ for samples of 36 and of 144, compare them and say what the comparison shows.</p><ol><li>n = 36: σ<sub>x̄</sub> = 72/√36 = 72/6 = 12.</li><li>n = 144: σ<sub>x̄</sub> = 72/√144 = 72/12 = 6.</li><li>Four times the sample size halves the standard error, because n sits under a square root.</li></ol><p style=\"font-size:14.5px\"><strong>Answer:</strong> 12 and 6. A larger sample makes x̄ less variable, but with diminishing returns: halving the error costs four times the sample.</p></details><details><summary>Q9 · Can p̂ be treated as normal? Four cases</summary><p style=\"font-size:14.5px\">Check np and n(1 − p) for: A (p = 0.02, n = 100), B (p = 0.10, n = 60), C (p = 0.50, n = 8), D (p = 0.80, n = 25).</p><ol><li>Condition: np ≥ 5 and n(1 − p) ≥ 5.</li><li>A: np = 2, n(1 − p) = 98. Fails (np &lt; 5).</li><li>B: np = 6, n(1 − p) = 54. Passes.</li><li>C: np = 4, n(1 − p) = 4. Fails on both.</li><li>D: np = 20, n(1 − p) = 5. Passes, exactly on the boundary (‘at least 5’ includes 5).</li></ol><p style=\"font-size:14.5px\"><strong>Answer:</strong> Normal approximation suitable for B and D; not for A or C.</p></details><details><summary>Q10 · When to use the finite population correction</summary><p style=\"font-size:14.5px\">σ = 30 and n = 48 in both cases. Case A: N = 1,200. Case B: N = 600. Find n/N, decide on the correction, and find each standard error.</p><ol><li>Case A: n/N = 48/1,200 = 0.04 &lt; 0.05, so no correction: σ<sub>x̄</sub> = 30/√48 = 4.33.</li><li>Case B: n/N = 48/600 = 0.08 ≥ 0.05, so apply it: √[(600 − 48)/(600 − 1)] = √(552/599) = 0.960.</li><li>Case B: σ<sub>x̄</sub> = 0.960 × 4.33 = 4.16.</li><li>Why they differ: in B the sample is a larger share of the population, so there is less room for sample means to vary.</li></ol><p style=\"font-size:14.5px\"><strong>Answer:</strong> n/N = 0.04 and 0.08; correction only for B; σ<sub>x̄</sub> ≈ 4.33 (A) and ≈ 4.16 (B).</p></details><details><summary>Q11 · Minimum sample size for a target standard error of p̂</summary><p style=\"font-size:14.5px\">p is believed to be 0.25. How large must the sample be for the standard error of p̂ to be no more than 0.05?</p><ol><li>σ<sub>p̂</sub> = √[p(1 − p)/n].</li><li>Require √(0.25 × 0.75/n) ≤ 0.05, i.e. 0.1875/n ≤ 0.0025, so n ≥ 0.1875/0.0025 = 75.</li><li>Here 75 is a whole number. If the result were, say, 74.2, you would round <strong>up</strong> to 75: rounding down gives a standard error slightly above the target.</li></ol><p style=\"font-size:14.5px\"><strong>Answer:</strong> n = 75. Always round a required sample size up.</p></details><details><summary>Q12 · Name the sampling method</summary><p style=\"font-size:14.5px\">Identify the method: (a) five city blocks chosen at random, every household on them interviewed; (b) students split into undergraduates and postgraduates, a random sample taken from each; (c) shoppers who happen to be outside a mall and willing to talk; (d) 20 companies an industry expert considers representative; (e) a random start in a list of 5,000 customers, then every 50th.</p><ol><li>(a) Cluster sampling: random clusters, everyone inside them.</li><li>(b) Stratified random sampling: every group sampled randomly.</li><li>(c) Convenience sampling.</li><li>(d) Judgement sampling.</li><li>(e) Systematic sampling (k = 50, so the sample has 100 customers).</li></ol><p style=\"font-size:14.5px\"><strong>Answer:</strong> Cluster; stratified; convenience; judgement; systematic.</p></details>"
    },
    {
     "t": "Textbook: Sampling and Sampling Distributions",
     "src": "Anderson 14e ch7",
     "h": "<!--viz:sfm-standard-error-narrowing--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Sampling distributions of the sample mean for a population with mean 50 and standard deviation 12, at n = 4, 16 and 64. The standard errors are 6, 3 and 1.5, so each curve is twice as tall and half as wide as the last.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Bigger samples pin x̄ closer to μ</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 232\" role=\"img\" aria-label=\"Sampling distributions of the sample mean for a population with mean 50 and standard deviation 12, at n = 4, 16 and 64. The standard errors are 6, 3 and 1.5, so each curve is twice as tall and half as wide as the last.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M20,179.9 L24.2,179.8 L28.3,179.8 L32.5,179.7 L36.7,179.7 L40.8,179.6 L45,179.5 L49.2,179.4 L53.3,179.3 L57.5,179.1 L61.7,178.9 L65.8,178.7 L70,178.5 L74.2,178.2 L78.3,177.8 L82.5,177.5 L86.7,177 L90.8,176.6 L95,176 L99.2,175.4 L103.3,174.7 L107.5,174 L111.7,173.1 L115.8,172.2 L120,171.3 L124.2,170.2 L128.3,169.1 L132.5,167.9 L136.7,166.7 L140.8,165.3 L145,164 L149.2,162.6 L153.3,161.1 L157.5,159.7 L161.7,158.2 L165.8,156.7 L170,155.3 L174.2,153.9 L178.3,152.5 L182.5,151.2 L186.7,150 L190.8,148.9 L195,147.9 L199.2,147 L203.3,146.3 L207.5,145.8 L211.7,145.3 L215.8,145.1 L220,145 L224.2,145.1 L228.3,145.3 L232.5,145.8 L236.7,146.3 L240.8,147 L245,147.9 L249.2,148.9 L253.3,150 L257.5,151.2 L261.7,152.5 L265.8,153.9 L270,155.3 L274.2,156.7 L278.3,158.2 L282.5,159.7 L286.7,161.1 L290.8,162.6 L295,164 L299.2,165.3 L303.3,166.7 L307.5,167.9 L311.7,169.1 L315.8,170.2 L320,171.3 L324.2,172.2 L328.3,173.1 L332.5,174 L336.7,174.7 L340.8,175.4 L345,176 L349.2,176.6 L353.3,177 L357.5,177.5 L361.7,177.8 L365.8,178.2 L370,178.5 L374.2,178.7 L378.3,178.9 L382.5,179.1 L386.7,179.3 L390.8,179.4 L395,179.5 L399.2,179.6 L403.3,179.7 L407.5,179.7 L411.7,179.8 L415.8,179.8 L420,179.9\" style=\"fill:none;stroke:var(--ink-3);stroke-width:2\"/><path d=\"M20,180 L24.2,180 L28.3,180 L32.5,180 L36.7,180 L40.8,180 L45,180 L49.2,180 L53.3,180 L57.5,180 L61.7,180 L65.8,180 L70,180 L74.2,180 L78.3,180 L82.5,180 L86.7,180 L90.8,180 L95,180 L99.2,180 L103.3,180 L107.5,179.9 L111.7,179.9 L115.8,179.8 L120,179.7 L124.2,179.6 L128.3,179.3 L132.5,179 L136.7,178.5 L140.8,177.8 L145,176.9 L149.2,175.7 L153.3,174.1 L157.5,172 L161.7,169.4 L165.8,166.3 L170,162.5 L174.2,158.2 L178.3,153.3 L182.5,148 L186.7,142.2 L190.8,136.4 L195,130.5 L199.2,125 L203.3,120 L207.5,115.8 L211.7,112.6 L215.8,110.7 L220,110 L224.2,110.7 L228.3,112.6 L232.5,115.8 L236.7,120 L240.8,125 L245,130.5 L249.2,136.4 L253.3,142.2 L257.5,148 L261.7,153.3 L265.8,158.2 L270,162.5 L274.2,166.3 L278.3,169.4 L282.5,172 L286.7,174.1 L290.8,175.7 L295,176.9 L299.2,177.8 L303.3,178.5 L307.5,179 L311.7,179.3 L315.8,179.6 L320,179.7 L324.2,179.8 L328.3,179.9 L332.5,179.9 L336.7,180 L340.8,180 L345,180 L349.2,180 L353.3,180 L357.5,180 L361.7,180 L365.8,180 L370,180 L374.2,180 L378.3,180 L382.5,180 L386.7,180 L390.8,180 L395,180 L399.2,180 L403.3,180 L407.5,180 L411.7,180 L415.8,180 L420,180\" style=\"fill:none;stroke:var(--clay);stroke-width:2\"/><path d=\"M20,180 L24.2,180 L28.3,180 L32.5,180 L36.7,180 L40.8,180 L45,180 L49.2,180 L53.3,180 L57.5,180 L61.7,180 L65.8,180 L70,180 L74.2,180 L78.3,180 L82.5,180 L86.7,180 L90.8,180 L95,180 L99.2,180 L103.3,180 L107.5,180 L111.7,180 L115.8,180 L120,180 L124.2,180 L128.3,180 L132.5,180 L136.7,180 L140.8,180 L145,180 L149.2,180 L153.3,180 L157.5,180 L161.7,179.9 L165.8,179.8 L170,179.5 L174.2,178.7 L178.3,177 L182.5,173.8 L186.7,168.1 L190.8,158.9 L195,145.1 L199.2,126.6 L203.3,104.5 L207.5,81.1 L211.7,60 L215.8,45.3 L220,40 L224.2,45.3 L228.3,60 L232.5,81.1 L236.7,104.5 L240.8,126.6 L245,145.1 L249.2,158.9 L253.3,168.1 L257.5,173.8 L261.7,177 L265.8,178.7 L270,179.5 L274.2,179.8 L278.3,179.9 L282.5,180 L286.7,180 L290.8,180 L295,180 L299.2,180 L303.3,180 L307.5,180 L311.7,180 L315.8,180 L320,180 L324.2,180 L328.3,180 L332.5,180 L336.7,180 L340.8,180 L345,180 L349.2,180 L353.3,180 L357.5,180 L361.7,180 L365.8,180 L370,180 L374.2,180 L378.3,180 L382.5,180 L386.7,180 L390.8,180 L395,180 L399.2,180 L403.3,180 L407.5,180 L411.7,180 L415.8,180 L420,180\" style=\"fill:none;stroke:var(--blue);stroke-width:2\"/><path d=\"M12,180 L428,180\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M20,180 L20,185\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"20\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">30</text><path d=\"M120,180 L120,185\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"120\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">40</text><path d=\"M220,180 L220,185\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"220\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">50</text><path d=\"M320,180 L320,185\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"320\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">60</text><path d=\"M420,180 L420,185\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"420\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">70</text><text x=\"245\" y=\"50\" style=\"fill:var(--blue);font-size:13.5px;font-weight:700\">n = 64 · SE 1.5</text><text x=\"280\" y=\"122\" style=\"fill:var(--clay);font-size:13.5px;font-weight:700\">n = 16 · SE 3</text><text x=\"325\" y=\"152\" style=\"fill:var(--ink-2);font-size:13.5px;font-weight:700\">n = 4 · SE 6</text><text x=\"20\" y=\"24\" style=\"fill:var(--ink-2);font-size:13px\">σ = 12 · SE = σ / √n</text><text x=\"220\" y=\"224\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">possible values of x̄ (μ = 50)</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Quadrupling n halves the standard error: precision grows with √n, so doubling precision costs four times the sample.</figcaption></figure><!--/viz:sfm-standard-error-narrowing--><!--viz:sfm-clt-skewed-population--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"A right-skewed exponential population with mean 10 (dashed) and the exact sampling distributions of x̄ for n = 5 and n = 30. By n = 30 the curve is a near-symmetric bell centred on 10 with standard error 1.83.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">The central limit theorem from a skewed population</div><div style=\"overflow-x:auto\"><svg viewBox=\"0 0 440 232\" role=\"img\" aria-label=\"A right-skewed exponential population with mean 10 (dashed) and the exact sampling distributions of x̄ for n = 5 and n = 30. By n = 30 the curve is a near-symmetric bell centred on 10 with standard error 1.83.\" style=\"display:block;width:100%;min-width:280px;max-width:440px;margin:0 auto;font-family:var(--body)\"><path d=\"M30,116.8 L33.8,118.7 L37.6,120.5 L41.4,122.2 L45.1,123.9 L48.9,125.6 L52.7,127.2 L56.5,128.8 L60.3,130.3 L64,131.7 L67.8,133.2 L71.6,134.6 L75.4,135.9 L79.2,137.2 L82.9,138.5 L86.7,139.7 L90.5,140.9 L94.3,142 L98.1,143.2 L101.8,144.3 L105.6,145.3 L109.4,146.3 L113.2,147.3 L116.9,148.3 L120.7,149.2 L124.5,150.1 L128.3,151 L132.1,151.9 L135.8,152.7 L139.6,153.5 L143.4,154.3 L147.2,155.1 L151,155.8 L154.7,156.5 L158.5,157.2 L162.3,157.9 L166.1,158.5 L169.9,159.2 L173.6,159.8 L177.4,160.4 L181.2,161 L185,161.5 L188.8,162.1 L192.5,162.6 L196.3,163.1 L200.1,163.6 L203.9,164.1 L207.7,164.6 L211.4,165 L215.2,165.5 L219,165.9 L222.8,166.3 L226.6,166.7 L230.3,167.1 L234.1,167.5 L237.9,167.9 L241.7,168.2 L245.5,168.6 L249.2,168.9 L253,169.2 L256.8,169.6 L260.6,169.9 L264.4,170.2 L268.1,170.4 L271.9,170.7 L275.7,171 L279.5,171.3 L283.3,171.5 L287,171.8 L290.8,172 L294.6,172.3 L298.4,172.5 L302.2,172.7 L305.9,172.9 L309.7,173.1 L313.5,173.3 L317.3,173.5 L321.1,173.7 L324.8,173.9 L328.6,174.1 L332.4,174.3 L336.2,174.4 L340,174.6 L343.7,174.8 L347.5,174.9 L351.3,175.1 L355.1,175.2 L358.9,175.4 L362.6,175.5 L366.4,175.6 L370.2,175.8 L374,175.9 L377.8,176 L381.5,176.1 L385.3,176.2 L389.1,176.3 L392.9,176.5 L396.7,176.6 L400.4,176.7 L404.2,176.8 L408,176.9\" style=\"fill:none;stroke:var(--clay);stroke-width:2;stroke-dasharray:5 4\"/><path d=\"M30,180 L33.8,180 L37.6,179.9 L41.4,179.7 L45.1,179.1 L48.9,178 L52.7,176.5 L56.5,174.4 L60.3,171.8 L64,168.6 L67.8,165.1 L71.6,161.2 L75.4,157.1 L79.2,152.9 L82.9,148.6 L86.7,144.4 L90.5,140.3 L94.3,136.5 L98.1,133 L101.8,129.7 L105.6,126.9 L109.4,124.4 L113.2,122.4 L116.9,120.8 L120.7,119.6 L124.5,118.7 L128.3,118.3 L132.1,118.3 L135.8,118.5 L139.6,119.1 L143.4,120 L147.2,121.1 L151,122.5 L154.7,124 L158.5,125.7 L162.3,127.5 L166.1,129.4 L169.9,131.4 L173.6,133.5 L177.4,135.6 L181.2,137.7 L185,139.8 L188.8,141.9 L192.5,144 L196.3,146 L200.1,148 L203.9,149.9 L207.7,151.8 L211.4,153.6 L215.2,155.3 L219,157 L222.8,158.5 L226.6,160 L230.3,161.4 L234.1,162.8 L237.9,164.1 L241.7,165.3 L245.5,166.4 L249.2,167.4 L253,168.4 L256.8,169.3 L260.6,170.2 L264.4,171 L268.1,171.7 L271.9,172.4 L275.7,173.1 L279.5,173.7 L283.3,174.2 L287,174.7 L290.8,175.2 L294.6,175.6 L298.4,176 L302.2,176.3 L305.9,176.7 L309.7,177 L313.5,177.3 L317.3,177.5 L321.1,177.7 L324.8,178 L328.6,178.1 L332.4,178.3 L336.2,178.5 L340,178.6 L343.7,178.8 L347.5,178.9 L351.3,179 L355.1,179.1 L358.9,179.2 L362.6,179.3 L366.4,179.3 L370.2,179.4 L374,179.5 L377.8,179.5 L381.5,179.6 L385.3,179.6 L389.1,179.6 L392.9,179.7 L396.7,179.7 L400.4,179.7 L404.2,179.8 L408,179.8\" style=\"fill:none;stroke:var(--ink-2);stroke-width:2\"/><path d=\"M30,180 L33.8,180 L37.6,180 L41.4,180 L45.1,180 L48.9,180 L52.7,180 L56.5,180 L60.3,180 L64,180 L67.8,180 L71.6,180 L75.4,180 L79.2,180 L82.9,179.9 L86.7,179.8 L90.5,179.5 L94.3,178.9 L98.1,177.6 L101.8,175.4 L105.6,171.7 L109.4,166.2 L113.2,158.3 L116.9,148 L120.7,135.3 L124.5,120.7 L128.3,104.8 L132.1,88.6 L135.8,73.4 L139.6,60 L143.4,49.7 L147.2,42.9 L151,40 L154.7,41.1 L158.5,45.8 L162.3,53.5 L166.1,63.6 L169.9,75.2 L173.6,87.7 L177.4,100.3 L181.2,112.5 L185,123.8 L188.8,134.1 L192.5,143 L196.3,150.7 L200.1,157.2 L203.9,162.4 L207.7,166.7 L211.4,170 L215.2,172.6 L219,174.6 L222.8,176.1 L226.6,177.2 L230.3,178 L234.1,178.6 L237.9,179.1 L241.7,179.3 L245.5,179.6 L249.2,179.7 L253,179.8 L256.8,179.9 L260.6,179.9 L264.4,179.9 L268.1,180 L271.9,180 L275.7,180 L279.5,180 L283.3,180 L287,180 L290.8,180 L294.6,180 L298.4,180 L302.2,180 L305.9,180 L309.7,180 L313.5,180 L317.3,180 L321.1,180 L324.8,180 L328.6,180 L332.4,180 L336.2,180 L340,180 L343.7,180 L347.5,180 L351.3,180 L355.1,180 L358.9,180 L362.6,180 L366.4,180 L370.2,180 L374,180 L377.8,180 L381.5,180 L385.3,180 L389.1,180 L392.9,180 L396.7,180 L400.4,180 L404.2,180 L408,180\" style=\"fill:none;stroke:var(--blue);stroke-width:2.5\"/><path d=\"M30,180 L30,116.8\" style=\"stroke:var(--clay);stroke-width:2;fill:none;stroke-dasharray:5 4\"/><path d=\"M18,180 L420,180\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><path d=\"M30,180 L30,185\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"30\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">0</text><path d=\"M156,180 L156,185\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"156\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">μ = 10</text><path d=\"M282,180 L282,185\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"282\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">20</text><path d=\"M408,180 L408,185\" style=\"stroke:var(--rule-2);stroke-width:1.5;fill:none\"/><text x=\"408\" y=\"200\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">30</text><path d=\"M234,24 L258,24\" style=\"stroke:var(--clay);stroke-width:2;fill:none;stroke-dasharray:5 4\"/><text x=\"264\" y=\"28\" style=\"fill:var(--ink-2);font-size:13px\">population (one value)</text><path d=\"M234,46 L258,46\" style=\"stroke:var(--ink-2);stroke-width:2;fill:none\"/><text x=\"264\" y=\"50\" style=\"fill:var(--ink-2);font-size:13px\">x̄ with n = 5</text><path d=\"M234,68 L258,68\" style=\"stroke:var(--blue);stroke-width:2.5;fill:none\"/><text x=\"264\" y=\"72\" style=\"fill:var(--ink-2);font-size:13px\">x̄ with n = 30</text><text x=\"220\" y=\"224\" text-anchor=\"middle\" style=\"fill:var(--ink-3);font-size:13px\">waiting time, minutes (exponential population)</text></svg></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">The population never changes shape, but the distribution of x̄ becomes bell-shaped as n grows; n ≥ 30 is the usual rule of thumb.</figcaption></figure><!--/viz:sfm-clt-skewed-population--><!--viz:sfm-sampling-methods--><figure style=\"margin:16px 0;padding:14px 12px 12px;border:1px solid var(--rule);border-radius:4px;background:var(--surface)\" aria-label=\"Table of six sampling methods. Simple random, stratified, cluster and systematic sampling are probability methods; convenience and judgement sampling are not.\"><div style=\"font-family:var(--display);font-weight:700;font-size:14.5px;line-height:1.3;margin-bottom:10px;color:var(--ink)\">Sampling methods at a glance</div><div class=\"scroller\"><table><thead><tr><th>Method</th><th>How the sample is chosen</th><th>Probability?</th></tr></thead><tbody><tr><td><b>Simple random</b></td><td>every sample of size n equally likely</td><td style=\"background:var(--good-soft)\">yes</td></tr><tr><td><b>Stratified</b></td><td>split into similar groups, sample each</td><td style=\"background:var(--good-soft)\">yes</td></tr><tr><td><b>Cluster</b></td><td>pick whole groups at random, survey all in them</td><td style=\"background:var(--good-soft)\">yes</td></tr><tr><td><b>Systematic</b></td><td>random start, then every k-th element</td><td style=\"background:var(--good-soft)\">yes</td></tr><tr><td><b>Convenience</b></td><td>whoever is easy to reach</td><td style=\"background:var(--bad-soft)\">no</td></tr><tr><td><b>Judgement</b></td><td>an expert picks typical elements</td><td style=\"background:var(--bad-soft)\">no</td></tr></tbody></table></div><figcaption style=\"margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-3)\">Only probability samples support standard errors and confidence statements; convenience and judgement samples can be biased in unknown ways.</figcaption></figure><!--/viz:sfm-sampling-methods--><p><strong>Sampled population, target population and frame</strong> — The target population is the one you want conclusions about; the sampled population is the one the sample actually comes from; the frame is the list of elements the sample is drawn from. Inferences are only as good as the match between sampled and target populations — a survey run on one unusual day can describe a very different crowd.<br><em>e.g.</em> Sampling only weekday-morning mall visitors to learn about all city shoppers mismatches the two populations.</p><p><strong>Simple random sample and random sample</strong> — From a finite population of size N, a simple random sample of size n is one where every possible sample of n has the same chance of selection, usually drawn without replacement using random numbers. From an infinite or ongoing process (a production line, arriving customers) no frame exists, so a random sample instead requires that each element comes from the same population and is selected independently.<br><span style=\"font-family:var(--mono)\">Number of possible simple random samples = N! / [n!(N − n)!]</span></p><p><strong>Point estimation</strong> — A point estimator is the sample statistic used to estimate a parameter: x̄ for μ, s for σ, p̄ for p. The number it produces from a particular sample is the point estimate. Different samples give different point estimates, so some estimation error is always expected.<br><em>e.g.</em> x̄ = ₹71,814 from 30 managers is a point estimate of the mean salary μ.</p><p><strong>Sampling distribution</strong> — Because x̄ and p̄ change from sample to sample, each is a random variable whose probability distribution — over all possible samples of size n — is its sampling distribution. In practice only one sample is taken; the sampling distribution is what tells us how far that one estimate is likely to be from the parameter.</p><p><strong>Expected value and standard error of x̄</strong> — The mean of all possible sample means equals μ, so x̄ is unbiased. Its standard deviation, the standard error of the mean, shrinks with the square root of n. For a finite population with n/N &gt; 0.05, multiply by the finite population correction factor; when n/N ≤ 0.05 the factor is close to 1 and is ignored.<br><span style=\"font-family:var(--mono)\">E(x̄) = μ;  σx̄ = σ/√n;  finite: σx̄ = √[(N − n)/(N − 1)] · σ/√n</span><br><em>e.g.</em> σ = ₹4000, n = 30: σx̄ = 4000/√30 = ₹730.3.</p><p><strong>Shape of the sampling distribution of x̄ and the CLT</strong> — If the population is normal, x̄ is normal for any n. If not, the Central Limit Theorem says the sampling distribution of x̄ approaches normal as n grows. In practice n ≥ 30 is usually enough; highly skewed populations or outliers may need n ≥ 50.<br><span style=\"font-family:var(--mono)\">For large n: x̄ ≈ Normal(μ, σ/√n)</span></p><p><strong>Using the sampling distribution of x̄</strong> — To find the probability that x̄ falls within a margin of μ, standardise with the standard error, not σ: z = (x̄ − μ)/σx̄. Larger samples give a smaller standard error and a higher probability of landing close to μ.<br><span style=\"font-family:var(--mono)\">z = (x̄ − μ) / (σ/√n)</span><br><em>e.g.</em> EAI: within ±$500 is 0.5034 with n = 30 but 0.7888 with n = 100.</p><p><strong>Sampling distribution of p̄</strong> — The sample proportion p̄ = x/n is unbiased for p. Its standard error is √[p(1 − p)/n], with the same finite-population correction rule. Because x is binomial, p̄ is approximately normal whenever np ≥ 5 and n(1 − p) ≥ 5.<br><span style=\"font-family:var(--mono)\">E(p̄) = p;  σp̄ = √[p(1 − p)/n]</span></p><p><strong>Properties of good point estimators</strong> — Unbiased: the estimator's expected value equals the parameter (x̄, p̄ and s² are unbiased — the reason s² divides by n − 1). Relative efficiency: of two unbiased estimators, prefer the one with the smaller standard error. Consistency: estimates get closer to the parameter as n increases.<br><span style=\"font-family:var(--mono)\">Unbiased if E(θ̂) = θ</span><br><em>e.g.</em> For a normal population the median's standard error is about 25% larger than the mean's, so the mean is more efficient.</p><p><strong>Other probability sampling methods</strong> — Stratified random sampling splits the population into strata whose members are alike, then samples each stratum — precise with a smaller total n. Cluster sampling splits it into clusters that each look like a mini-population, then samples whole clusters — cheaper fieldwork but usually a larger n. Systematic sampling picks a random start among the first N/n elements and then every (N/n)-th element.</p><p><strong>Non-probability sampling</strong> — Convenience sampling takes whoever is easy to reach; judgement sampling lets an expert choose 'representative' elements. Both can be quick and cheap, but since selection probabilities are unknown, no statistical statement about the quality of the results is possible.</p><p><strong>Sampling error versus nonsampling error</strong> — Sampling error is the random gap between a sample and its population; it shrinks as n grows. Nonsampling error comes from everything else — coverage error (wrong population for the research question), nonresponse error (some groups under- or over-represented), and measurement error (ambiguous or leading questions, poor recall). A huge sample does nothing to fix nonsampling error.</p><p><strong>Big data and standard errors</strong> — Big data sets can be tall (very many observations) or wide (very many variables). With tall data, standard errors become tiny: multiplying n by 100 divides the standard error by 10. That makes estimates very precise — but only about the population the data really came from.</p>"
    }
   ]
  }
 ],
 "topics": [
  {
   "name": "Data basics",
   "unit": "basics"
  },
  {
   "name": "Scales",
   "unit": "scales"
  },
  {
   "name": "Sources & samples",
   "unit": "sources"
  },
  {
   "name": "Summarising",
   "unit": "summarise"
  },
  {
   "name": "Location",
   "unit": "location"
  },
  {
   "name": "Spread & shape",
   "unit": "spread"
  },
  {
   "name": "Association",
   "unit": "assoc"
  },
  {
   "name": "Probability I",
   "unit": "prob1"
  },
  {
   "name": "Probability II",
   "unit": "prob2"
  },
  {
   "name": "Distributions",
   "unit": "dists"
  },
  {
   "name": "Sampling distributions",
   "unit": "sampling"
  },
  {
   "name": "Sampling methods",
   "unit": "sampling"
  },
  {
   "name": "Applying distributions",
   "unit": "dists"
  }
 ],
 "traps": [
  {
   "id": "sfm-t0001",
   "h": "Roll numbers are nominal, not ordinal",
   "p": "They are numeric labels with no ranking. Numeric does not mean quantitative.",
   "f": "numbers can be labels"
  },
  {
   "id": "sfm-t0002",
   "h": "Celsius is interval, not ratio",
   "p": "There is no true zero — 0°C is not the absence of temperature — so ratios are meaningless.",
   "f": "no true zero, no ratio"
  },
  {
   "id": "sfm-t0003",
   "h": "You can convert down the hierarchy, never up",
   "p": "Ratio → interval → ordinal → nominal. Nominal converts to nothing.",
   "f": "downhill only"
  },
  {
   "id": "sfm-t0004",
   "h": "Sample variance divides by n − 1",
   "p": "Population variance divides by n. Getting this backwards is the classic slip.",
   "f": "n−1 for samples"
  },
  {
   "id": "sfm-t0005",
   "h": "Standard deviation is in original units, variance is not",
   "p": "That is the whole reason SD is preferred for interpretation.",
   "f": "SD is interpretable"
  },
  {
   "id": "sfm-t0006",
   "h": "Lower coefficient of variation means more consistent",
   "p": "CV = s / x̄. His suppliers: CV 1.0 versus 0.2 with identical means — the 0.2 supplier is better.",
   "f": "lower CV wins"
  },
  {
   "id": "sfm-t0007",
   "h": "Left-skew means median > mean",
   "p": "Right-skew means mean > median. The mean chases the tail.",
   "f": "the mean follows the tail"
  },
  {
   "id": "sfm-t0008",
   "h": "Chebyshev applies to any shape; the empirical rule needs normality",
   "p": "Chebyshev at ±2σ gives at least 75%; the empirical rule gives about 95%.",
   "f": "any shape vs bell shape"
  },
  {
   "id": "sfm-t0009",
   "h": "Chebyshev says 'at least'",
   "p": "The true proportion can be much higher. It is a lower bound, not an estimate.",
   "f": "a floor, not a figure"
  },
  {
   "id": "sfm-t0010",
   "h": "Two different outlier rules",
   "p": "z-score: |z| > 3. Box plot: beyond Q1 − 1.5·IQR or Q3 + 1.5·IQR. Don't swap the 3 and the 1.5.",
   "f": "3 for z, 1.5 for IQR"
  },
  {
   "id": "sfm-t0011",
   "h": "Whiskers stop at the limits, not at the outliers",
   "p": "They extend to the most extreme values inside Q1 − 1.5 IQR and Q3 + 1.5 IQR.",
   "f": "outliers sit outside the whiskers"
  },
  {
   "id": "sfm-t0012",
   "h": "Q2 is the median",
   "p": "Quartiles are just the 25th, 50th and 75th percentiles.",
   "f": "Q2 = 50th = median"
  },
  {
   "id": "sfm-t0013",
   "h": "Geometric mean is for rates of change",
   "p": "Use it when each period compounds on the last. The arithmetic mean misleads on returns.",
   "f": "compounding needs geometric"
  },
  {
   "id": "sfm-t0014",
   "h": "Correlation is bounded, covariance is not",
   "p": "r always sits between −1 and +1. Covariance is scale-dependent, which is why it is hard to read.",
   "f": "r is standardised"
  },
  {
   "id": "sfm-t0015",
   "h": "Correlation is not causation",
   "p": "He said it explicitly. Highly correlated variables need not be causally linked.",
   "f": "association only"
  },
  {
   "id": "sfm-t0016",
   "h": "Permutations care about order, combinations do not",
   "p": "If rearranging counts as different, it is a permutation — and permutations always give the bigger number.",
   "f": "order = permutation"
  },
  {
   "id": "sfm-t0017",
   "h": "Subtract the intersection in the addition law",
   "p": "P(A∪B) = P(A) + P(B) − P(A∩B), because the overlap is otherwise counted twice.",
   "f": "don't double-count"
  },
  {
   "id": "sfm-t0018",
   "h": "Mutually exclusive events are DEPENDENT",
   "p": "If one occurring means the other cannot, they are maximally informative about each other. Independence is the opposite.",
   "f": "exclusive ≠ independent"
  },
  {
   "id": "sfm-t0019",
   "h": "Test independence with P(A∩B) = P(A)·P(B)",
   "p": "If the two sides differ, the events are dependent. His case: 0.36 versus 0.336.",
   "f": "multiply and compare"
  },
  {
   "id": "sfm-t0020",
   "h": "Histograms have no gaps between bars",
   "p": "Because the data is continuous. Bar charts, for categories, do have gaps.",
   "f": "continuous = no gap"
  },
  {
   "id": "sfm-t0021",
   "h": "Simpson's paradox reverses on disaggregation",
   "p": "An aggregate conclusion can flip entirely once you split the data into subgroups.",
   "f": "aggregate can lie"
  },
  {
   "id": "sfm-t0022",
   "h": "Poisson is the one where mean equals variance",
   "p": "Binomial: mean np, variance np(1−p). Poisson: both equal μ.",
   "f": "Poisson: μ = μ"
  },
  {
   "id": "sfm-t0023",
   "h": "A calculator is allowed",
   "p": "He confirmed this in Live Lecture 3 — unusual among your six papers, so bring one.",
   "f": "bring a calculator"
  },
  {
   "id": "sfm-t0024",
   "h": "Observations = elements, not variables",
   "p": "Each element contributes exactly one observation (one row). The number of variables is the number of columns; the data-item count is the product of the two.",
   "f": "rows are elements",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-t0025",
   "h": "Nominal and ordinal data can be non-numeric; interval and ratio data never are",
   "p": "Categorical data may be words or numeric codes. Interval and ratio data are always numbers, because they need a fixed unit of measure.",
   "f": "interval and ratio are numbers",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-t0026",
   "h": "'How many' is discrete, 'how much' is continuous",
   "p": "Counts such as complaints per day are discrete quantitative data. Measurements such as weight or time are continuous because no gap separates possible values.",
   "f": "count vs measure",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-t0027",
   "h": "A survey is an observational study, not an experiment",
   "p": "What makes a study an experiment is control over variables, not its size or formality. Surveys and opinion polls only record what respondents say.",
   "f": "no control, no experiment",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-t0028",
   "h": "Simulation is predictive analytics, not prescriptive",
   "p": "Only techniques whose output is a best decision (optimisation) are prescriptive. Simulation, regression and forecasting estimate what will happen, so they are predictive.",
   "f": "prescriptive = best decision",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-t0029",
   "h": "Dropping awkward data is unethical even if you have a reason",
   "p": "The book's battery example: even when discarded units really were faulty, the analyst must report every value considered and explain how the final sample was formed.",
   "f": "account for all data",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-t0030",
   "h": "A model that fits its training data is not yet reliable",
   "p": "Reliability is shown only when the model predicts a separate test set well. Huge data sets make overfitting, and false cause-and-effect conclusions, easy.",
   "f": "train, then test",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-t0031",
   "h": "Class width is the gap between lower limits, not upper minus lower",
   "p": "For classes 10–14, 15–19, the width is 15 − 10 = 5. Subtracting 14 − 10 = 4 within one class understates it by one unit.",
   "f": "lower limit to lower limit",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-t0032",
   "h": "Round the class width up, not down",
   "p": "(largest − smallest) ÷ classes is only approximate. Rounding it down can leave the largest value outside the last class; the book rounds 4.2 up to 5.",
   "f": "round up so all fit",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-t0033",
   "h": "Row percentages and column percentages answer different questions",
   "p": "'What share of Premium customers are in the South?' divides by the Premium row total; 'what share of South customers are Premium?' divides by the South column total. The two figures are rarely equal.",
   "f": "divide by the right total",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-t0034",
   "h": "The margins of a crosstab say nothing about the relationship",
   "p": "Row and column totals are just each variable's own frequency distribution. Only the interior cells, or row and column percentages, show how the variables relate.",
   "f": "the insight is inside",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-t0035",
   "h": "Read the leaf unit before reading a stem-and-leaf",
   "p": "With leaf unit 10, stem 23 and leaf 4 means about 2340, not 234. If no leaf unit is shown, it is 1.",
   "f": "scale by the leaf unit",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-t0036",
   "h": "A pie chart is rarely the best chart for comparing shares",
   "p": "The book says people perceive differences in area poorly, so a sorted bar chart usually communicates categorical shares better, and 3-D pies add nothing.",
   "f": "prefer the sorted bar",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-t0037",
   "h": "Percentages from rounded values may not total exactly 100",
   "p": "If each relative frequency is rounded, the column can sum to 0.99 or 1.01. That is rounding, not an error in the counts.",
   "f": "rounding, not a mistake",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-t0038",
   "h": "+20% then −20% is a loss, not break-even",
   "p": "Growth factors 1.2 × 0.8 = 0.96. The geometric mean is √0.96 ≈ 0.980, about −2% a year; the arithmetic mean of the two returns (0%) overstates growth.",
   "f": "multiply factors, don't add rates",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-t0039",
   "h": "Excel's QUARTILE.INC and R's default quantile() do not use the book's method",
   "p": "The book's location (p/100)(n + 1) matches QUARTILE.EXC / PERCENTILE.EXC and R's quantile(x, type = 6). For 12, 15, 18, 20, 22, 25, 28, 40 the book gives Q1 = 15.75 but QUARTILE.INC gives 17.25.",
   "f": "EXC = book, INC ≠ book",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-t0040",
   "h": "Weight by quantity, not by the number of purchases",
   "p": "Averaging five purchase prices treats a 500 kg order like a 2,750 kg order. The book's raw-material example: simple mean $3.07 versus true weighted mean $2.96 per kg.",
   "f": "weights = what was bought",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-t0041",
   "h": "The z-score rule and the IQR rule can disagree",
   "p": "A rent of ₹55,000 among mostly ₹18,000–30,000 rents has z ≈ 2.7 (not an outlier by |z| > 3) yet lies above Q3 + 1.5 IQR (an outlier by the box-plot rule). The book says either or both rules may be used.",
   "f": "two rules, two verdicts",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-t0042",
   "h": "Deviations about the mean always sum to zero",
   "p": "That is why variance squares them first. If your column of (xᵢ − x̄) does not sum to zero, you have an arithmetic or rounding error.",
   "f": "Σ(x − x̄) = 0 always",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-t0043",
   "h": "Chebyshev works for z = 2.4 or 1.5, not only for whole numbers",
   "p": "The only condition is z > 1. Between 58 and 82 with mean 70 and s = 5, z = 2.4 gives at least 82.6%.",
   "f": "any z above 1",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-t0044",
   "h": "Changing units changes covariance but not correlation",
   "p": "Measure height in centimetres instead of metres and the covariance is 100 times larger, yet the relationship is unchanged. Correlation divides out the units.",
   "f": "r is unit-free",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-t0045",
   "h": "r near 0 means no linear relationship, not no relationship",
   "p": "Spending on heating and cooling against outside temperature is U-shaped: r ≈ 0, yet the scatter diagram shows a strong curved pattern. Always look at the plot.",
   "f": "zero r, check for curves",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-t0046",
   "h": "Two coins have four sample points, not three",
   "p": "'0, 1 or 2 heads' are not equally likely: one head arises from (H,T) and (T,H). P(exactly one head) = 2/4 = 0.5, not 1/3. A tree diagram makes this visible.",
   "f": "list the paths",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-t0047",
   "h": "0! equals 1",
   "p": "Needed whenever n = N or n = 0 in the combination or permutation formula, for example C(5,5) = 5!/(5!·0!) = 1.",
   "f": "zero factorial is one",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-t0048",
   "h": "Subjective probabilities can differ between people and still be valid",
   "p": "Two partners may put 0.8 and 0.6 on the same deal closing. Both are legitimate as long as each person's probabilities lie in [0, 1] and sum to 1.",
   "f": "personal but still rule-bound",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-t0049",
   "h": "P(A | B) is not P(B | A)",
   "p": "A fraud filter that flags 90% of frauds does not mean 90% of flagged payments are fraud. Reversing a conditional needs the priors, which is exactly what Bayes' theorem supplies.",
   "f": "reversing needs Bayes",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-t0050",
   "h": "Independence is checked with numbers, not intuition",
   "p": "If P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.7, then P(A ∩ B) = 0.2 = 0.5 × 0.4, so A and B are independent even if they 'feel' related.",
   "f": "compute, then decide",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-t0051",
   "h": "Marginal probabilities alone cannot reveal a relationship",
   "p": "P(promoted) = 0.27 overall says nothing about fairness. Compare the conditional probabilities P(promoted | man) and P(promoted | woman).",
   "f": "compare the conditionals",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-t0052",
   "h": "'At least one' is easiest through the complement",
   "p": "For two independent servers each up 98% of the time, P(at least one up) = 1 − P(both down) = 1 − 0.02² = 0.9996. Adding 0.98 + 0.98 gives an impossible 1.96.",
   "f": "one minus none",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-t0053",
   "h": "Stationarity and independence are two separate binomial conditions",
   "p": "Constant p from trial to trial (stationarity) can fail even when every trial is independent — e.g. a salesperson who tires through the day. Either failure rules out the binomial.",
   "f": "constant p ≠ independent trials",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-t0054",
   "h": "Rescale the Poisson mean to the interval in the question before computing",
   "p": "Ten arrivals per 15 minutes is μ = 2 for 3 minutes. Probabilities do not scale: P(5 in 15 min) is not equal to P(1 in 3 min).",
   "f": "rescale μ first",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-t0055",
   "h": "For a Poisson, the variance equals μ — the standard deviation is √μ",
   "p": "With μ = 9 arrivals, σ² = 9 and σ = 3. Answering 9 for the standard deviation is the usual slip.",
   "f": "σ² = μ, σ = √μ",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-t0056",
   "h": "The binomial formula needs the combination term",
   "p": "pˣ(1 − p)ⁿ⁻ˣ is the probability of one particular order of successes and failures. Multiply by n!/(x!(n − x)!) to count every order.",
   "f": "count the orderings",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-t0057",
   "h": "'At least one' is fastest as 1 − P(none)",
   "p": "Summing f(1) + f(2) + … + f(n) is slow and error-prone; the complement needs one term.",
   "f": "1 − P(0)",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-t0058",
   "h": "Drawing without replacement from a small population is hypergeometric, not binomial",
   "p": "Each draw changes the mix left behind, so p is not constant and trials are dependent. The binomial is only an approximation when N is large relative to n.",
   "f": "small N, no replacement",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-t0059",
   "h": "In BINOM.DIST and POISSON.DIST, TRUE means 'x or fewer'",
   "p": "The final argument FALSE gives P(exactly x); TRUE gives the cumulative P(≤ x). For 'more than x' use 1 minus the TRUE value.",
   "f": "TRUE = cumulative ≤ x",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-t0060",
   "h": "A density's height is not a probability and can exceed 1",
   "p": "Only areas under f(x) are probabilities. A uniform density on [0, 0.5] has height 2 and is perfectly valid.",
   "f": "height ≠ probability",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-t0061",
   "h": "For a continuous variable, < and ≤ give the same probability",
   "p": "A single point has zero area, so P(x < 30) = P(x ≤ 30). This is not true for discrete distributions.",
   "f": "endpoints don't matter",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-t0062",
   "h": "The table gives the LEFT area — subtract from 1 for 'more than'",
   "p": "P(z ≥ 1.5) = 1 − 0.9332 = 0.0668. Reading 0.9332 as the answer is the commonest table slip.",
   "f": "right tail = 1 − table",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-t0063",
   "h": "A lower-tail cut-off uses a negative z",
   "p": "The bottom 10% starts at z = −1.28, so x = μ − 1.28σ. Using +1.28 puts the cut-off at the top 10% instead.",
   "f": "bottom tail → minus z",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-t0064",
   "h": "Continuity correction: widen the event by 0.5 in the direction that includes the boundary value",
   "p": "P(x ≥ 15) → P(x ≥ 14.5); P(x ≤ 13) → P(x ≤ 13.5); P(x = 12) → P(11.5 ≤ x ≤ 12.5). Going the wrong way drops the boundary count.",
   "f": "include the edge value",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-t0065",
   "h": "Exponential: mean = standard deviation. Poisson: mean = variance",
   "p": "An exponential with mean 4 minutes has σ = 4 (variance 16). A Poisson with mean 4 has variance 4 (σ = 2). Don't swap them.",
   "f": "exp σ = μ; Poisson σ² = μ",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-t0066",
   "h": "EXPON.DIST wants the rate λ = 1/μ, not the mean",
   "p": "For mean 15 minutes write =EXPON.DIST(6,1/15,TRUE). Typing 15 as the second argument models a mean of 1/15 minute.",
   "f": "λ = 1/μ in Excel",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-t0067",
   "h": "Normal tails never touch the axis",
   "p": "About 99.7% lies within ±3σ, not 100%. The curve only gets very close to the axis.",
   "f": "±3σ ≈ 99.7%, not all",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-t0068",
   "h": "Standard error is σ/√n, not σ/n",
   "p": "σ = 30 and n = 36 give a standard error of 30/6 = 5, not 30/36 = 0.83.",
   "f": "divide by root n",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-t0069",
   "h": "The CLT is about the distribution of x̄, not of the data",
   "p": "Taking a bigger sample does not make the population or the sample values normal. It makes the sampling distribution of the sample mean approximately normal.",
   "f": "x̄ goes normal, data don't",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-t0070",
   "h": "Use the finite population correction only when n/N > 0.05",
   "p": "30 of 2500 managers is 1.2%, so ignore it. 50 of 500 employees is 10%, so apply √[(N − n)/(N − 1)].",
   "f": "over 5% → correct",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-t0071",
   "h": "To halve the standard error you must quadruple n",
   "p": "Standard error falls with √n, so doubling the sample only cuts it by about 29%.",
   "f": "half the error, 4× the n",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-t0072",
   "h": "When asked about a sample mean, standardise with σ/√n — not σ",
   "p": "P(x̄ > 126) with μ = 120, σ = 24, n = 64 uses z = 6/3 = 2.00. Using σ gives z = 0.25 — the answer for a single observation.",
   "f": "means use SE",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-t0073",
   "h": "Stratified wants alike-within groups; cluster wants mixed-within groups",
   "p": "Strata should be internally homogeneous. Clusters should each be a mini-version of the whole population, i.e. internally heterogeneous.",
   "f": "strata same, clusters mixed",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-t0074",
   "h": "A huge sample cuts sampling error, not nonsampling error",
   "p": "Ten million app-only responses still miss everyone without the app. Precision is not the same as accuracy.",
   "f": "big n ≠ unbiased",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-t0075",
   "h": "Estimator ≠ estimate",
   "p": "The estimator is the statistic or rule (x̄); the estimate is the number it produced for this sample (₹71,814).",
   "f": "rule vs number",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-t0076",
   "h": "Stocking the mean demand still leaves a 50% stockout risk",
   "p": "At x = μ, z = 0 and P(Z ≤ 0) = 0.50, so half of all lead-time demands exceed the mean. Only stock above μ brings the risk down.",
   "f": "stock = mean → 50% risk",
   "lec": 14
  },
  {
   "id": "sfm-t0077",
   "h": "Round a reorder point up, not to the nearest unit",
   "p": "x = μ + zσ is the smallest stock that meets the target. Pep Zone's 24.87 becomes 25. If the formula gave 112.3, stocking 112 would leave the risk above target; stock 113.",
   "f": "always round up",
   "lec": 14
  },
  {
   "id": "sfm-t0078",
   "h": "For any normal probability in Excel, the last argument is TRUE",
   "p": "NORM.DIST(…, TRUE) and NORM.S.DIST(…, TRUE) return the left area. FALSE returns the height of the curve, which is not a probability, since a continuous variable has zero probability at a single point. The lecture's rule: always TRUE.",
   "f": "continuous → TRUE",
   "lec": 14
  },
  {
   "id": "sfm-t0079",
   "h": "A negative z is a position, not a negative probability",
   "p": "z = −0.75 means the value lies 0.75 standard deviations below the mean. Areas are always between 0 and 1.",
   "f": "minus = left of μ",
   "lec": 14
  },
  {
   "id": "sfm-t0080",
   "h": "Table answers and Excel answers can differ in the third decimal",
   "p": "The table method rounds z to two decimals: Pep Zone's z = 0.83 gives a stockout risk of 1 − 0.7967 = 0.2033. NORM.DIST uses the exact z = 0.8333 and gives 0.2023. Both are correct; choose the option that matches your method.",
   "f": "rounded z vs exact z",
   "lec": 14
  },
  {
   "id": "sfm-t0081",
   "h": "The Lecture 14 slide table has two misprints",
   "p": "On the slide excerpt, P(Z ≤ 0.84) should be 0.7995 (printed 0.7795) and P(Z ≤ 0.90) should be 0.8159 (printed 0.8129). Each row of the table must increase from left to right; a dip is a misprint.",
   "f": "rows only go up",
   "lec": 14
  },
  {
   "id": "sfm-t0082",
   "h": "Stockout risk is the area to the RIGHT of the order quantity",
   "p": "NORM.DIST at Q = 15,000 returns 0.1635, the chance that demand stays below 15,000. The stockout risk is 1 − 0.1635 = 0.8365. The LMS auto-summary quotes 16.35%, which is the wrong tail.",
   "f": "stockout = right tail",
   "lec": 15
  },
  {
   "id": "sfm-t0083",
   "h": "A central 95% range means z = 1.96, not 1.645",
   "p": "95% between two limits leaves 2.5% in EACH tail, so the upper limit is the 97.5th percentile (z = 1.96). 1.645 leaves 5% in one tail. Using it would make σ = 6,079 instead of 5,102.",
   "f": "two tails of 2.5%",
   "lec": 15
  },
  {
   "id": "sfm-t0084",
   "h": "You can never sell more than you ordered",
   "p": "Revenue uses the smaller of order and demand. At Q = 15,000 profit is $120,000 whether demand is 20,000 or 30,000; the extra demand is lost sales.",
   "f": "sold = min(Q, demand)",
   "lec": 15
  },
  {
   "id": "sfm-t0085",
   "h": "An unsold unit loses cost minus salvage, not the full cost",
   "p": "Each leftover teddy cost $16 but still fetches $5 in the clearance sale, so it loses $11. Counting the full $16 overstates the downside of a large order.",
   "f": "loss = cost − salvage",
   "lec": 15
  },
  {
   "id": "sfm-t0086",
   "h": "The lecture rounds z to two decimals before converting back",
   "p": "NORM.S.INV(0.70) = 0.5244, used as 0.52: Q = 20,000 + 0.52 × 5,102 = 22,653. Excel with the unrounded z gives 22,676. Expect the lecture's rounded figures in quiz options.",
   "f": "z to 2 dp, then x",
   "lec": 15
  },
  {
   "id": "sfm-t0087",
   "h": "'5 or more' includes 5: use 1 − P(X ≤ 4), not 1 − P(X ≤ 5)",
   "p": "1 − P(X ≤ 5) is P(X ≥ 6) = 0.0123, not the shutdown probability 0.0451. Subtract the cumulative value one below the threshold.",
   "f": "≥ k → 1 − P(≤ k−1)",
   "lec": 16
  },
  {
   "id": "sfm-t0088",
   "h": "A stricter shutdown rule means MORE false alarms, not fewer",
   "p": "Lowering the trigger from 5 boxes to 4 raises false halts from 4.5% to 13.5%. To halt less often you must demand more failures (7 boxes gets 0.28%).",
   "f": "lower bar, more halts",
   "lec": 16
  },
  {
   "id": "sfm-t0089",
   "h": "Lock the parameter cells with $ before dragging the formula",
   "p": "=BINOM.DIST(A3, F1, F2, FALSE) dragged down turns F1 into F2, F3… and gives errors. Use $F$1 and $F$2 (F4 key).",
   "f": "F4 → $F$1",
   "lec": 16
  },
  {
   "id": "sfm-t0090",
   "h": "A bigger sample with the same halt count raises false alarms",
   "p": "With 50 boxes instead of 25 and the rule still '5 or more', a healthy line is stopped 37% of the time, because 50 boxes produce 4 out-of-spec boxes on average. The rule has to grow with the sample.",
   "f": "scale the rule with n",
   "lec": 16
  },
  {
   "id": "sfm-t0091",
   "h": "Freeze the random numbers with Paste Values before you sort",
   "p": "RANDBETWEEN (and RAND) recalculate on every edit or sort, so the sample keeps reshuffling. The lecture uses RANDBETWEEN(1, 50), which gives many ties over 2,500 rows; the textbook uses RAND(), which practically never ties. Either way: paste as values, then sort.",
   "f": "random → values → sort",
   "lec": 17
  },
  {
   "id": "sfm-t0092",
   "h": "STDEV.S for a sample, STDEV.P for the whole population",
   "p": "The lecture uses STDEV.S on the 50 sampled salaries (divides by n − 1) and STDEV.P on all 2,500 (divides by N). R's sd() is the sample version.",
   "f": "S = sample, P = population",
   "lec": 17
  },
  {
   "id": "sfm-t0093",
   "h": "The sampled population must match the target in time as well as place",
   "p": "Shoppers surveyed in July are the wrong population for planning a festival-week promotion, however carefully they are randomised. Sample the season you want to learn about.",
   "f": "same season, same crowd",
   "lec": 17
  },
  {
   "id": "sfm-t0094",
   "h": "p̂ in the lecture and p̄ in the textbook are the same estimator",
   "p": "Both mean the sample proportion x/n, the point estimator of p. Read either symbol the same way in quiz options.",
   "f": "p-hat = p-bar",
   "lec": 17
  },
  {
   "id": "sfm-t0095",
   "h": "Never add a Poisson upper tail bar by bar: it has no end",
   "p": "P(X > 7) for μ = 6.8 is 1 − P(X ≤ 7) = 0.3715. Adding P(8) to P(11) gives only 0.327 because it drops 12, 13, … arrivals. Subtract the cumulative from 1.",
   "f": "upper tail = 1 − cumulative",
   "lec": 18
  },
  {
   "id": "sfm-t0096",
   "h": "'More than two extra' with s salespeople means X > s + 2, not X ≥ s + 2",
   "p": "Five salespeople plus two allowed extras is 7 customers; trouble starts at 8. Use 1 − P(X ≤ 7). Using 1 − P(X ≤ 6) also counts exactly 7, which the rule allows.",
   "f": "> s + 2 → 1 − P(≤ s + 2)",
   "lec": 18
  },
  {
   "id": "sfm-t0097",
   "h": "For a discrete distribution, TRUE is the cumulative P(X ≤ x), whatever it is called",
   "p": "The lecture calls POISSON.DIST(…, TRUE) the 'density function'. For a discrete variable it is the cumulative distribution function: the sum of the masses from 0 to x. FALSE is the mass at x.",
   "f": "TRUE = P(X ≤ x)",
   "lec": 18
  },
  {
   "id": "sfm-t0098",
   "h": "The probability is about x̄ landing near μ, not about μ moving",
   "p": "The lecture sometimes phrases it as the chance that 'the true mean' lies in the range. μ is a fixed number; it is the sample mean x̄ that varies from sample to sample. The 0.4714 is P(1,687 ≤ x̄ ≤ 1,707).",
   "f": "x̄ moves, μ stays",
   "lec": 19
  },
  {
   "id": "sfm-t0099",
   "h": "Lecture answers round z to two decimals before using the table",
   "p": "St Andrew's: z = 0.63 gives 0.4714 (Excel's unrounded z gives 0.4691); n = 100 with σx̄ rounded to 8.2 gives 0.7776 (exact 0.7748). Expect the lecture's figures among the options.",
   "f": "z to 2 dp, then table",
   "lec": 19
  },
  {
   "id": "sfm-t0100",
   "h": "From n = 30 to n = 100 is not 'doubling', and σ/√n alone does not halve",
   "p": "n more than triples, so σ/√n falls by √(100/30) to 8.74, about 55% of 15.96. The finite population correction (0.9433) takes it to 8.2, roughly half. The standard error falls with √n (the lecture once says 'divided by the sample size'; it is the square root).",
   "f": "SE falls with √n",
   "lec": 19
  },
  {
   "id": "sfm-t0101",
   "h": "For p̂, check both np ≥ 5 and n(1 − p) ≥ 5",
   "p": "A large n is not enough on its own. With p = 0.72 and n = 30 the smaller count is n(1 − p) = 8.4; if it fell below 5 the normal approximation would not be safe.",
   "f": "check both counts",
   "lec": 19
  },
  {
   "id": "sfm-t0102",
   "h": "Strata are alike inside; clusters are mixed inside",
   "p": "Stratify into homogeneous groups and sample every one. Cluster into heterogeneous mini-populations and take only some, whole. Swapping the two words is the classic slip.",
   "f": "strata alike, clusters mixed",
   "lec": 20
  },
  {
   "id": "sfm-t0103",
   "h": "Cluster sampling takes whole clusters, not a sample from each",
   "p": "Randomly choose some clusters, then include every element in them. Sampling a few elements from every group is stratified sampling.",
   "f": "few clusters, every member",
   "lec": 20
  },
  {
   "id": "sfm-t0104",
   "h": "Systematic sampling needs a random start",
   "p": "Choose the first element at random among the first k, then every k-th. Always starting at element 1 (or at k) fixes the sample in advance, so it is no longer random.",
   "f": "random start, then every k",
   "lec": 20
  },
  {
   "id": "sfm-t0105",
   "h": "A bigger non-probability sample is still not evaluable",
   "p": "Without known selection probabilities, no formula links the sample to the population, so even thousands of convenience responses give results of unknown accuracy.",
   "f": "unknown chance, unknown accuracy",
   "lec": 20
  },
  {
   "id": "sfm-t0106",
   "h": "A larger sample changes the standard error, not the population",
   "p": "Increasing n lowers σ/√n. The population mean and standard deviation are fixed facts about the population and do not move.",
   "f": "only the SE moves",
   "lec": 20
  },
  {
   "id": "sfm-t0107",
   "h": "'Between 5% and 6%' does not mean 5.5% is good enough",
   "p": "With the 5-box rule, P(X ≥ 5) reaches 1% at a defect rate of about 5.4%. At 5.5% it is 1.06%, which misses the goal. Quote 'about 5.4% or lower' (or the lecture's safe 5%).",
   "f": "break-even ≈ 5.4%",
   "lec": 16
  },
  {
   "id": "sfm-t0108",
   "h": "The 1% goal limits false alarms, not missed problems",
   "p": "'Shut down no more than 1% of the time when the process is working properly' is P(shutdown | line healthy). It says nothing about how often a faulty line is missed; a looser rule lowers the first and raises the second.",
   "f": "1% = healthy-line halts",
   "lec": 16
  },
  {
   "id": "sfm-t0109",
   "h": "On the L#20 practice sheet, 'p' in the proportion question means the sample proportion",
   "p": "The sheet asks for 'the expected value of p' and 'the standard error of p'; read p̂ (p̂). E(p̂) = p = 0.40 and σp̂ = √[p(1 − p)/n]. The population p itself is a fixed number with no standard error.",
   "f": "sheet's p = p̂",
   "lec": 20
  },
  {
   "id": "sfm-t0110",
   "h": "n(1 − p) = 5 exactly passes the normal check",
   "p": "The condition is np ≥ 5 and n(1 − p) ≥ 5. p = 0.80, n = 25 gives n(1 − p) = 5, which qualifies; a value of 4.9 would not.",
   "f": "at least 5 includes 5",
   "lec": 20
  },
  {
   "id": "sfm-t0111",
   "h": "A required sample size is always rounded up",
   "p": "If the formula gives n = 233.3, use 234. Rounding down to 233 leaves the standard error (or margin) just above the target.",
   "f": "sample size: round up",
   "lec": 20
  },
  {
   "id": "sfm-t0112",
   "h": "In a reverse problem, σx̄ is not the answer for σ",
   "p": "Tail cut-offs on x̄ give the standard error (e.g. 0.1/1.645 = 0.0608). The population σ is σx̄ × √n (0.0608 × √30 = 0.333).",
   "f": "σ = σx̄ × √n",
   "lec": 20
  },
  {
   "id": "sfm-t0113",
   "h": "Skewed population, n = 45: the n ≥ 30 rule says yes, but heavy skew asks for more",
   "p": "The expected answer is 'approximately normal' because n ≥ 30. The lecture also warns that a highly skewed population may need about 50, so 45 is acceptable but not comfortable.",
   "f": "30 usual, 50 if skewed",
   "lec": 20
  }
 ],
 "defs": [
  {
   "id": "sfm-d0001",
   "unit": "basics",
   "topic": "What statistics is",
   "term": "Statistics",
   "html": "<b>Statistics</b> is the <b>art and science</b> of <b>collecting, analysing, presenting and interpreting</b> data."
  },
  {
   "id": "sfm-d0002",
   "unit": "basics",
   "topic": "Element, variable, observation, dataset",
   "term": "Total data values = number of elements × number of variables",
   "html": "<b>Total data values = number of elements × number of variables.</b> 100 students × 10 variables = <b>1,000</b> data points. His other worked case: a Wall Street Journal survey with <b>46 questions × 50 respondents = 2,300</b> entries."
  },
  {
   "id": "sfm-d0003",
   "unit": "summarise",
   "topic": "Cross-tabulation and Simpson's paradox",
   "term": "Simpson's paradox",
   "html": "<b>Simpson's paradox:</b> a conclusion drawn from <b>aggregate</b> data can <b>completely reverse</b> when the data is broken into subgroups."
  },
  {
   "id": "sfm-d0004",
   "unit": "location",
   "topic": "Percentiles and quartiles",
   "term": "p-th percentile",
   "html": "The <b>p-th percentile</b> is a value such that at least <b>p percent</b> of items are at or below it."
  },
  {
   "id": "sfm-d0005",
   "unit": "spread",
   "topic": "Shape, z-scores and the two rules",
   "term": "z = (xi − x̄) / s",
   "html": "<b>z = (x<sub>i</sub> − x&#772;) / s</b> — how many standard deviations a value sits from the mean. Also called the <b>standardised value</b>."
  },
  {
   "id": "sfm-d0006",
   "unit": "spread",
   "topic": "Outliers, five-number summary and box plots",
   "term": "outlier",
   "html": "An <b>outlier</b> is an unusually small or large value. The z-score test: <b>|z| &gt; 3</b> flags one — more than three standard deviations from the mean."
  },
  {
   "id": "sfm-d0007",
   "unit": "prob1",
   "topic": "Experiments, sample spaces and counting",
   "term": "Probability",
   "html": "<b>Probability</b> is a numerical measure of the likelihood that an event occurs, ranging from <b>0 (impossible) to 1 (certain)</b>."
  },
  {
   "id": "sfm-d0008",
   "unit": "prob2",
   "topic": "Bayes' theorem",
   "term": "Prior",
   "html": "<b>Prior</b> probabilities come from history or initial knowledge. New information arrives. <b>Posterior</b> probabilities are the revised estimates that combine the two."
  },
  {
   "id": "sfm-d0009",
   "unit": "dists",
   "topic": "Random variables and expected value",
   "term": "random variable",
   "html": "A <b>random variable</b> is a numerical description of the outcome of a statistical experiment."
  },
  {
   "id": "sfm-d0010",
   "unit": "basics",
   "topic": "Element, variable, observation, dataset",
   "term": "Data set",
   "html": "<b>Data set</b>: the full collection of data gathered for a given study. Its size in data items is the number of observations multiplied by the number of variables.",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-d0011",
   "unit": "scales",
   "topic": "The four scales",
   "term": "Nominal scale",
   "html": "<b>Nominal scale</b>: data are labels or names that identify an attribute. They may be words or numeric codes, but the codes carry no order.",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-d0012",
   "unit": "scales",
   "topic": "The four scales",
   "term": "Ordinal scale",
   "html": "<b>Ordinal scale</b>: nominal properties <b>plus a meaningful order or rank</b>, such as a credit rating from AAA down to F. Gaps between ranks are not measured.",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-d0013",
   "unit": "scales",
   "topic": "The four scales",
   "term": "Interval scale",
   "html": "<b>Interval scale</b>: ordinal properties <b>plus a fixed unit of measure</b>, so differences between values are meaningful. Interval data are <b>always numeric</b>.",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-d0014",
   "unit": "scales",
   "topic": "The four scales",
   "term": "Ratio scale",
   "html": "<b>Ratio scale</b>: interval properties <b>plus a zero that means none of the quantity</b>, so the ratio of two values is meaningful (₹30 lakh is twice ₹15 lakh).",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-d0015",
   "unit": "scales",
   "topic": "The four scales",
   "term": "Quantitative data",
   "html": "<b>Quantitative data</b>: numeric values that say <b>how much or how many</b>; they use the interval or ratio scale and support ordinary arithmetic.",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-d0016",
   "unit": "scales",
   "topic": "Cross-sectional and time series",
   "term": "Time series data",
   "html": "<b>Time series data</b>: data collected on a variable <b>over several time periods</b>, used to see trends and project future values.",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-d0017",
   "unit": "sources",
   "topic": "Population, sample and analytics",
   "term": "Census",
   "html": "<b>Census</b>: a survey that collects data on the <b>entire population</b>. A <b>sample survey</b> collects data on a sample only.",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-d0018",
   "unit": "sources",
   "topic": "Population, sample and analytics",
   "term": "Statistical inference",
   "html": "<b>Statistical inference</b>: drawing on <b>sample</b> data to estimate and test hypotheses about the characteristics of the <b>population</b>.",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-d0019",
   "unit": "sources",
   "topic": "Population, sample and analytics",
   "term": "Analytics",
   "html": "<b>Analytics</b>: a scientific process that turns data into insight so that better decisions can be made; split into descriptive, predictive and prescriptive techniques.",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-d0020",
   "unit": "sources",
   "topic": "Population, sample and analytics",
   "term": "Data mining",
   "html": "<b>Data mining</b>: using methods from statistics and computer science to extract useful, often predictive, information from very large databases. <b>Data warehousing</b> is capturing, storing and maintaining those data.",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-d0021",
   "unit": "sources",
   "topic": "Sources and types of collection",
   "term": "Observational study",
   "html": "<b>Observational study</b>: the researcher observes and records variables <b>without controlling</b> any of them. Surveys and opinion polls are observational studies.",
   "bk": "Anderson 14e ch1"
  },
  {
   "id": "sfm-d0022",
   "unit": "summarise",
   "topic": "Tables and charts, by data type",
   "term": "Frequency distribution",
   "html": "<b>Frequency distribution</b>: a table showing the number of observations in each of several <b>non-overlapping</b> classes or categories.",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-d0023",
   "unit": "summarise",
   "topic": "Tables and charts, by data type",
   "term": "Class midpoint",
   "html": "<b>Class midpoint</b>: the value halfway between a class's lower and upper class limits; for 10–14 it is 12.",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-d0024",
   "unit": "summarise",
   "topic": "Tables and charts, by data type",
   "term": "Cumulative frequency distribution",
   "html": "<b>Cumulative frequency distribution</b>: for each class, the count of data values that are <b>at or below its upper class limit</b>.",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-d0025",
   "unit": "summarise",
   "topic": "Tables and charts, by data type",
   "term": "Dot plot",
   "html": "<b>Dot plot</b>: one dot per data value above a horizontal axis spanning the data; repeated values stack up.",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-d0026",
   "unit": "summarise",
   "topic": "Tables and charts, by data type",
   "term": "Stem-and-leaf display",
   "html": "<b>Stem-and-leaf display</b>: leading digits (stems) left of a line, last digits (leaves) to the right, showing <b>rank order and shape</b> together while keeping the actual values.",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-d0027",
   "unit": "summarise",
   "topic": "Tables and charts, by data type",
   "term": "Leaf unit",
   "html": "<b>Leaf unit</b>: the multiplier that turns stem-and-leaf digits back into approximate data values; stem 15, leaf 6 with leaf unit 10 means about <b>1560</b>.",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-d0028",
   "unit": "summarise",
   "topic": "Cross-tabulation and Simpson's paradox",
   "term": "Crosstabulation",
   "html": "<b>Crosstabulation</b>: a table summarising two variables at once, one variable's classes as rows and the other's as columns.",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-d0029",
   "unit": "summarise",
   "topic": "Cross-tabulation and Simpson's paradox",
   "term": "Trendline",
   "html": "<b>Trendline</b>: a line drawn through a <b>scatter diagram</b> to approximate the relationship between two quantitative variables.",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-d0030",
   "unit": "summarise",
   "topic": "Cross-tabulation and Simpson's paradox",
   "term": "Stacked bar chart",
   "html": "<b>Stacked bar chart</b>: a bar chart whose bars are split into coloured segments showing each class's share, similar to a pie chart in bar form.",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-d0031",
   "unit": "summarise",
   "topic": "Tables and charts, by data type",
   "term": "Data dashboard",
   "html": "<b>Data dashboard</b>: a set of visual displays organised to monitor an organisation's <b>key performance indicators (KPIs)</b> in a way that is easy to read and interpret.",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-d0032",
   "unit": "summarise",
   "topic": "Tables and charts, by data type",
   "term": "Data visualization",
   "html": "<b>Data visualization</b>: using graphical displays to summarise and present information about a data set as clearly as possible.",
   "bk": "Anderson 14e ch2"
  },
  {
   "id": "sfm-d0033",
   "unit": "location",
   "topic": "The five averages",
   "term": "Weighted mean",
   "html": "<b>Weighted mean</b> = Σwᵢxᵢ ÷ Σwᵢ: each value counts in proportion to a weight reflecting its importance, such as quantity bought or credit hours.",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-d0034",
   "unit": "location",
   "topic": "The five averages",
   "term": "Growth factor",
   "html": "<b>Growth factor</b> = 1 + the period's rate of change. Below 1 means decline, above 1 means growth; it can never be below 0. A −22.1% year has growth factor 0.779.",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-d0035",
   "unit": "location",
   "topic": "The five averages",
   "term": "Geometric mean",
   "html": "<b>Geometric mean</b>: the nth root of the product of n values; applied to growth factors it gives the true <b>mean rate of change</b> over successive periods.",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-d0036",
   "unit": "location",
   "topic": "Percentiles and quartiles",
   "term": "Location of the pth percentile",
   "html": "<b>Lp = (p/100)(n + 1)</b> on the sorted data; interpolate between neighbouring positions. Same as Excel's <b>PERCENTILE.EXC</b>.",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-d0037",
   "unit": "location",
   "topic": "The five averages",
   "term": "Trimmed mean",
   "html": "<b>Trimmed mean</b>: the mean after removing a stated percentage of the smallest and largest values (e.g. 5% from each end); useful when extremes are present.",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-d0038",
   "unit": "spread",
   "topic": "Measures of spread",
   "term": "Coefficient of variation",
   "html": "<b>Coefficient of variation</b> = (standard deviation ÷ mean) × 100%: a unit-free measure of <b>relative</b> variability.",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-d0039",
   "unit": "spread",
   "topic": "Shape, z-scores and the two rules",
   "term": "Skewness",
   "html": "<b>Skewness</b>: a measure of shape that is <b>negative</b> for left-skewed data, <b>zero</b> for symmetric data and <b>positive</b> for right-skewed data.",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-d0040",
   "unit": "spread",
   "topic": "Shape, z-scores and the two rules",
   "term": "Chebyshev's theorem",
   "html": "<b>Chebyshev's theorem</b>: for <b>any</b> data set, at least <b>1 − 1/z²</b> of the values lie within z standard deviations of the mean, for any z &gt; 1.",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-d0041",
   "unit": "spread",
   "topic": "Shape, z-scores and the two rules",
   "term": "Empirical rule",
   "html": "<b>Empirical rule</b>: for <b>bell-shaped</b> data, about 68% of values lie within 1 s.d. of the mean, about 95% within 2 s.d., and almost all within 3 s.d.",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-d0042",
   "unit": "spread",
   "topic": "Outliers, five-number summary and box plots",
   "term": "Boxplot",
   "html": "<b>Boxplot</b>: a graph of the five-number summary with a box from Q1 to Q3, a line at the median, whiskers to the most extreme values inside Q1 − 1.5 IQR and Q3 + 1.5 IQR, and outliers plotted separately.",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-d0043",
   "unit": "assoc",
   "topic": "Covariance and correlation",
   "term": "Covariance",
   "html": "<b>Covariance</b>: a measure of linear association; <b>sxy = Σ(xᵢ − x̄)(yᵢ − ȳ)/(n − 1)</b>. Positive for a positive relationship, negative for a negative one, but its size depends on the units.",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-d0044",
   "unit": "location",
   "topic": "The five averages",
   "term": "Point estimator",
   "html": "<b>Point estimator</b>: a sample statistic such as x̄, s² or s used to estimate the matching population parameter μ, σ² or σ.",
   "bk": "Anderson 14e ch3"
  },
  {
   "id": "sfm-d0045",
   "unit": "prob1",
   "topic": "Experiments, sample spaces and counting",
   "term": "Random experiment",
   "html": "<b>Random experiment</b>: a process that generates well-defined outcomes, where on any single trial exactly one outcome occurs and <b>chance alone</b> decides which.",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-d0046",
   "unit": "prob1",
   "topic": "Experiments, sample spaces and counting",
   "term": "Tree diagram",
   "html": "<b>Tree diagram</b>: a picture of a multiple-step experiment in which each left-to-right path is one experimental outcome.",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-d0047",
   "unit": "prob1",
   "topic": "Experiments, sample spaces and counting",
   "term": "Combination",
   "html": "<b>Combination</b>: a selection of n objects from N <b>without regard to order</b>; there are <b>N! / [n!(N − n)!]</b> of them.",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-d0048",
   "unit": "prob1",
   "topic": "Experiments, sample spaces and counting",
   "term": "Event",
   "html": "<b>Event</b>: a collection of sample points. <b>P(event)</b> = the sum of the probabilities of its sample points.",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-d0049",
   "unit": "prob1",
   "topic": "The three ways to assign a probability",
   "term": "Relative frequency method",
   "html": "<b>Relative frequency method</b>: assign each outcome the proportion of times it occurred in past data, appropriate when the experiment has been repeated many times.",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-d0050",
   "unit": "prob2",
   "topic": "The laws",
   "term": "Joint probability",
   "html": "<b>Joint probability</b>: the probability that two events both occur, P(A ∩ B); it fills the body of a <b>joint probability table</b>.",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-d0051",
   "unit": "prob2",
   "topic": "The laws",
   "term": "Marginal probability",
   "html": "<b>Marginal probability</b>: the probability of a single event, found in the margins of a joint probability table by summing joint probabilities across a row or down a column.",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-d0052",
   "unit": "prob2",
   "topic": "The laws",
   "term": "Conditional probability",
   "html": "<b>Conditional probability</b>: the probability of A given that B has occurred, found as P(A | B) = P(A ∩ B) ÷ P(B).",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-d0053",
   "unit": "prob2",
   "topic": "The laws",
   "term": "Independent events",
   "html": "<b>Independent events</b>: P(A | B) = P(A), or equivalently P(A ∩ B) = P(A)P(B); knowing one occurred tells you nothing about the other.",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-d0054",
   "unit": "prob2",
   "topic": "Bayes' theorem",
   "term": "Collectively exhaustive",
   "html": "<b>Collectively exhaustive</b> events: their union is the entire sample space. Bayes' theorem needs events that are mutually exclusive <b>and</b> collectively exhaustive.",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-d0055",
   "unit": "prob2",
   "topic": "The laws",
   "term": "Venn diagram",
   "html": "<b>Venn diagram</b>: a rectangle for the sample space with circles for events, used to show complements, unions and intersections.",
   "bk": "Anderson 14e ch4"
  },
  {
   "id": "sfm-d0056",
   "unit": "dists",
   "topic": "Random variables and expected value",
   "term": "Discrete random variable",
   "html": "A <b>discrete random variable</b> takes either a finite number of values or an endless sequence such as 0, 1, 2, … — values you can list, with gaps between them.",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-d0057",
   "unit": "dists",
   "topic": "Random variables and expected value",
   "term": "Continuous random variable",
   "html": "A <b>continuous random variable</b> can take any numerical value in an interval or set of intervals — typically measurements of time, weight, distance or temperature.",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-d0058",
   "unit": "dists",
   "topic": "Random variables and expected value",
   "term": "Probability function",
   "html": "The <b>probability function</b> f(x) gives, for a discrete random variable, the probability that x takes each particular value.",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-d0059",
   "unit": "dists",
   "topic": "Random variables and expected value",
   "term": "Empirical discrete distribution",
   "html": "An <b>empirical discrete distribution</b> is one whose probabilities are relative frequencies taken from observed data.",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-d0060",
   "unit": "dists",
   "topic": "Random variables and expected value",
   "term": "Discrete uniform probability distribution",
   "html": "A <b>discrete uniform distribution</b> gives every one of its n possible values the same probability, <b>f(x) = 1/n</b>.",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-d0061",
   "unit": "dists",
   "topic": "Binomial, Poisson and the normal",
   "term": "Binomial experiment",
   "html": "A <b>binomial experiment</b> has n identical trials, two outcomes per trial, a constant success probability p, and independent trials. The binomial distribution gives the probability of x successes in the n trials.",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-d0062",
   "unit": "dists",
   "topic": "Binomial, Poisson and the normal",
   "term": "Bernoulli process",
   "html": "Trials form a <b>Bernoulli process</b> when they have two outcomes, a constant success probability and independence. Fix the number of trials n and it becomes a <b>binomial experiment</b>.",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-d0063",
   "unit": "dists",
   "topic": "Binomial, Poisson and the normal",
   "term": "Poisson probability distribution",
   "html": "The <b>Poisson distribution</b> gives the probability of x occurrences of an event in a specified interval of time or space, given the mean number μ for that interval.",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-d0064",
   "unit": "dists",
   "topic": "Binomial, Poisson and the normal",
   "term": "Hypergeometric probability distribution",
   "html": "The <b>hypergeometric distribution</b> gives the probability of x successes when n items are drawn <b>without replacement</b> from a population of N items containing r successes.",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-d0065",
   "unit": "assoc",
   "topic": "Covariance and correlation",
   "term": "Bivariate probability distribution",
   "html": "A <b>bivariate probability distribution</b> gives a probability for every pair of values of two random variables, so their relationship can be measured.",
   "bk": "Anderson 14e ch5"
  },
  {
   "id": "sfm-d0066",
   "unit": "dists",
   "topic": "Binomial, Poisson and the normal",
   "term": "Probability density function",
   "html": "A <b>probability density function</b> f(x) describes a continuous random variable; the <b>area</b> under its graph over an interval is the probability of that interval. Its height is not itself a probability.",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-d0067",
   "unit": "dists",
   "topic": "Binomial, Poisson and the normal",
   "term": "Uniform probability distribution",
   "html": "A <b>uniform probability distribution</b> is a continuous distribution in which every interval of equal length within [a, b] has the same probability; f(x) = 1/(b − a).",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-d0068",
   "unit": "dists",
   "topic": "Binomial, Poisson and the normal",
   "term": "Normal probability distribution",
   "html": "The <b>normal distribution</b> is the symmetric, bell-shaped continuous distribution fully determined by its mean <b>μ</b> and standard deviation <b>σ</b>.",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-d0069",
   "unit": "dists",
   "topic": "Binomial, Poisson and the normal",
   "term": "Standard normal probability distribution",
   "html": "The <b>standard normal distribution</b> is the normal distribution with <b>μ = 0 and σ = 1</b>; its variable is written z.",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-d0070",
   "unit": "dists",
   "topic": "Binomial, Poisson and the normal",
   "term": "Continuity correction factor",
   "html": "The <b>continuity correction factor</b> is the <b>0.5</b> added to or subtracted from a whole-number value when a continuous normal curve approximates a discrete binomial.",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-d0071",
   "unit": "dists",
   "topic": "Binomial, Poisson and the normal",
   "term": "Exponential probability distribution",
   "html": "The <b>exponential distribution</b> is a right-skewed continuous distribution for waiting, service and between-arrival times; <b>P(x ≤ x₀) = 1 − e^(−x₀/μ)</b> and its mean equals its standard deviation.",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-d0072",
   "unit": "dists",
   "topic": "Binomial, Poisson and the normal",
   "term": "Cumulative probability (standard normal table)",
   "html": "The standard normal table gives <b>cumulative probabilities</b>: the area to the <b>left</b> of z, P(z ≤ value). Right-tail areas are 1 minus the table value.",
   "bk": "Anderson 14e ch6"
  },
  {
   "id": "sfm-d0073",
   "unit": "sampling",
   "topic": "Sampling methods",
   "term": "Frame",
   "html": "A <b>frame</b> is the list of elements from which a sample is selected.",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-d0074",
   "unit": "sampling",
   "topic": "Sampling methods",
   "term": "Simple random sample (finite population)",
   "html": "A <b>simple random sample</b> of size n drawn from a finite population is chosen in such a way that <b>every possible sample of size n</b> is equally likely to be selected.",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-d0075",
   "unit": "sampling",
   "topic": "Sampling methods",
   "term": "Random sample (infinite population)",
   "html": "A <b>random sample</b> from an infinite population has each element drawn from the <b>same population</b> and selected <b>independently</b>.",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-d0076",
   "unit": "sampling",
   "topic": "Sampling distributions",
   "term": "Point estimator",
   "html": "A <b>point estimator</b> is a sample statistic (x̄, s, p̄) used to estimate a population parameter; the value it gives for one sample is the <b>point estimate</b>.",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-d0077",
   "unit": "sampling",
   "topic": "Sampling distributions",
   "term": "Sampling distribution",
   "html": "A <b>sampling distribution</b> is the probability distribution of a sample statistic over all possible samples of the same size.",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-d0078",
   "unit": "sampling",
   "topic": "Sampling distributions",
   "term": "Standard error",
   "html": "The <b>standard error</b> is the standard deviation of a point estimator. For the mean, <b>σx̄ = σ/√n</b>; for a proportion, <b>σp̄ = √[p(1 − p)/n]</b>.",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-d0079",
   "unit": "sampling",
   "topic": "Sampling distributions",
   "term": "Finite population correction factor",
   "html": "The <b>finite population correction factor</b> <b>√[(N − n)/(N − 1)]</b> multiplies the standard error when sampling more than 5% of a finite population (n/N > 0.05).",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-d0080",
   "unit": "sampling",
   "topic": "Sampling distributions",
   "term": "Central limit theorem",
   "html": "The <b>central limit theorem</b>: for large samples, the sampling distribution of x̄ is approximately normal, whatever the shape of the population.",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-d0081",
   "unit": "sampling",
   "topic": "Sampling distributions",
   "term": "Unbiased estimator",
   "html": "A point estimator is <b>unbiased</b> if its expected value equals the parameter it estimates: <b>E(θ̂) = θ</b>.",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-d0082",
   "unit": "sampling",
   "topic": "Sampling methods",
   "term": "Stratified random sampling",
   "html": "<b>Stratified random sampling</b> divides the population into strata of similar elements and takes a simple random sample from each stratum.",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-d0083",
   "unit": "sampling",
   "topic": "Sampling methods",
   "term": "Cluster sampling",
   "html": "<b>Cluster sampling</b> divides the population into clusters, randomly selects some clusters, and includes every element of the chosen clusters.",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-d0084",
   "unit": "sampling",
   "topic": "Sampling methods",
   "term": "Nonsampling error",
   "html": "<b>Nonsampling error</b> is any deviation of a sample from the population that is not due to random sampling — coverage, nonresponse or measurement error. It does not shrink as n grows.",
   "bk": "Anderson 14e ch7"
  },
  {
   "id": "sfm-d0085",
   "unit": "dists",
   "topic": "From a probability back to a value",
   "term": "Reorder point",
   "html": "<b>Reorder point</b>: the stock level at which a replenishment order is placed. Set it at x = μ + zσ of lead-time demand so that the chance of running out before the order arrives is no more than the chosen tail area.",
   "lec": 14
  },
  {
   "id": "sfm-d0086",
   "unit": "dists",
   "topic": "From a probability back to a value",
   "term": "Stockout probability",
   "html": "<b>Stockout probability</b>: the chance that demand exceeds the stock on hand, P(X &gt; stock) — the <b>right-tail</b> area, i.e. 1 minus the table value.",
   "lec": 14
  },
  {
   "id": "sfm-d0087",
   "unit": "dists",
   "topic": "Normal probabilities in practice",
   "term": "Standardising a normal value",
   "html": "<b>Standardising</b>: converting x to <b>z = (x − μ)/σ</b>, the number of standard deviations x lies from the mean, so that one standard normal table serves every normal distribution.",
   "lec": 14
  },
  {
   "id": "sfm-d0088",
   "unit": "dists",
   "topic": "Normal probabilities in practice",
   "term": "NORM.S.DIST",
   "html": "<b>NORM.S.DIST(z, TRUE)</b>: Excel's standard normal left area P(Z ≤ z). <b>NORM.DIST(x, μ, σ, TRUE)</b> gives the same area without standardising first.",
   "lec": 14
  },
  {
   "id": "sfm-d0089",
   "unit": "dists",
   "topic": "From a probability back to a value",
   "term": "Inverse normal lookup",
   "html": "<b>Inverse normal lookup</b>: going from a probability to a value. Find the z with the required left area (table in reverse, NORM.S.INV, or qnorm in R), then x = μ + zσ.",
   "lec": 14
  },
  {
   "id": "sfm-d0090",
   "unit": "dists",
   "topic": "Case: Specialty Toys — how many to order",
   "term": "Lead time",
   "html": "<b>Lead time</b>: the gap between placing an order and receiving the goods. Demand during the lead time is what the stock on hand must cover.",
   "lec": 15
  },
  {
   "id": "sfm-d0091",
   "unit": "dists",
   "topic": "Case: Specialty Toys — how many to order",
   "term": "Salvage (clearance) value",
   "html": "<b>Salvage value</b>: what a leftover unit fetches after the season. The loss on each unsold unit is <b>cost − salvage</b> ($16 − $5 = $11 in the case).",
   "lec": 15
  },
  {
   "id": "sfm-d0092",
   "unit": "dists",
   "topic": "Profit scenarios and the service-level order",
   "term": "Service level",
   "html": "<b>Service level</b>: the probability that the order meets demand, P(demand ≤ Q) = 1 − P(stockout). A 70% service level accepts a 30% stockout risk; Q = μ + zσ with z = NORM.S.INV(0.70).",
   "lec": 15
  },
  {
   "id": "sfm-d0093",
   "unit": "dists",
   "topic": "Case: Go Bananas — setting a shutdown rule",
   "term": "False alarm (quality control)",
   "html": "<b>False alarm</b>: stopping a process that is in fact working properly, because an in-control sample happened to cross the shutdown rule. Go Bananas: P(X ≥ 5) = 0.045.",
   "lec": 16
  },
  {
   "id": "sfm-d0094",
   "unit": "dists",
   "topic": "Building a probability table in Excel",
   "term": "Absolute cell reference",
   "html": "<b>Absolute cell reference</b>: a reference such as <b>$F$1</b> that stays fixed when a formula is copied or dragged; press F4 to add the $ signs.",
   "lec": 16
  },
  {
   "id": "sfm-d0095",
   "unit": "dists",
   "topic": "Building a probability table in Excel",
   "term": "Probability mass vs cumulative (Excel)",
   "html": "In BINOM.DIST and POISSON.DIST, <b>FALSE</b> returns the probability mass P(X = x); <b>TRUE</b> returns the cumulative P(X ≤ x).",
   "lec": 16
  },
  {
   "id": "sfm-d0096",
   "unit": "sampling",
   "topic": "Finite and infinite populations",
   "term": "Target population",
   "html": "<b>Target population</b>: the population you want to draw conclusions about. The <b>sampled population</b> is the one the sample actually comes from; the two must agree closely, in place and in time.",
   "lec": 17
  },
  {
   "id": "sfm-d0097",
   "unit": "sampling",
   "topic": "Finite and infinite populations",
   "term": "Sampling without replacement",
   "html": "<b>Sampling without replacement</b>: once an element is selected it cannot be selected again. <b>With replacement</b>, it is returned before the next draw and may appear more than once.",
   "lec": 17
  },
  {
   "id": "sfm-d0098",
   "unit": "sampling",
   "topic": "Finite and infinite populations",
   "term": "Infinite population",
   "html": "<b>Infinite population</b>: one generated by an ongoing process with no upper limit (production-line output, help-desk calls, store customers), so no frame can be listed.",
   "lec": 17
  },
  {
   "id": "sfm-d0099",
   "unit": "sampling",
   "topic": "Point estimation",
   "term": "Point estimate",
   "html": "<b>Point estimate</b>: the single number a point estimator gives for one sample, e.g. x̄ = 1,684 as the estimate of the mean SAT score μ.",
   "lec": 17
  },
  {
   "id": "sfm-d0100",
   "unit": "dists",
   "topic": "Live Lecture 4: exact vs cumulative, and exam hints",
   "term": "Cumulative distribution function",
   "html": "<b>Cumulative distribution function</b>: F(x) = P(X ≤ x), the probability of x or fewer. In Excel's distribution functions it is the TRUE option; the lecture sometimes calls it the 'density' function.",
   "lec": 18
  },
  {
   "id": "sfm-d0101",
   "unit": "sampling",
   "topic": "Sampling distribution of x̄ and the standard error",
   "term": "Grand mean",
   "html": "<b>Grand mean</b>: the mean of all the sample means in a sampling distribution. It equals the population mean μ, which is why x̄ is unbiased.",
   "lec": 19
  },
  {
   "id": "sfm-d0102",
   "unit": "sampling",
   "topic": "Sampling distribution of p̂",
   "term": "Standard error of the proportion",
   "html": "<b>Standard error of the proportion</b>: σ<sub>p̂</sub> = √[p(1 − p)/n], the standard deviation of the sample proportion across repeated samples (times the finite population correction when n/N &gt; 0.05).",
   "lec": 19
  },
  {
   "id": "sfm-d0103",
   "unit": "sampling",
   "topic": "Sampling distribution of x̄ and the standard error",
   "term": "Treating a finite population as infinite",
   "html": "A finite population can be <b>treated as infinite</b> when n/N &lt; 0.05: the correction factor is then close to 1 and σ<sub>x̄</sub> = σ/√n is used.",
   "lec": 19
  },
  {
   "id": "sfm-d0104",
   "unit": "sampling",
   "topic": "Stratified, cluster and systematic sampling",
   "term": "Systematic sampling",
   "html": "<b>Systematic sampling</b>: choose one of the first k = N/n elements at random, then every k-th element after it. Close to a simple random sample when the order has no pattern.",
   "lec": 20
  },
  {
   "id": "sfm-d0105",
   "unit": "sampling",
   "topic": "Convenience and judgement sampling",
   "term": "Convenience sampling",
   "html": "<b>Convenience sampling</b>: a non-probability method that includes whichever elements are easiest to reach. Quick and easy, but its representativeness cannot be judged.",
   "lec": 20
  },
  {
   "id": "sfm-d0106",
   "unit": "sampling",
   "topic": "Convenience and judgement sampling",
   "term": "Judgement sampling",
   "html": "<b>Judgement sampling</b>: a non-probability method in which a person knowledgeable about the subject picks the elements he or she thinks most representative. Only as good as that judgement.",
   "lec": 20
  },
  {
   "id": "sfm-d0107",
   "unit": "sampling",
   "topic": "Convenience and judgement sampling",
   "term": "Probability sampling method",
   "html": "<b>Probability sampling method</b>: one in which each element's chance of selection is known (simple random, stratified, cluster, systematic), so the closeness of the results to the population can be evaluated.",
   "lec": 20
  },
  {
   "id": "sfm-d0108",
   "unit": "sampling",
   "topic": "Practice questions from the lecturer (L#20)",
   "term": "Sampling fraction",
   "html": "<b>Sampling fraction</b> = n/N, the share of a finite population that is in the sample. If it is 0.05 or more, multiply σ/√n by the finite population correction √[(N − n)/(N − 1)].",
   "lec": 20
  }
 ],
 "questions": [
  {
   "id": "sfm-q0001",
   "topic": "Data basics",
   "q": "Statistics is defined as the art and science of:",
   "c": [
    "Calculating averages and percentages",
    "Collecting, analysing, presenting and interpreting data",
    "Testing hypotheses about populations",
    "Building predictive models"
   ],
   "a": [
    1
   ],
   "w": "All four verbs. It is a science because collection is objective, and an art because deciding what to collect takes judgement."
  },
  {
   "id": "sfm-q0002",
   "topic": "Data basics",
   "q": "In a dataset, each person or item for whom data is collected is called a(n):",
   "c": [
    "Variable",
    "Element",
    "Observation",
    "Parameter"
   ],
   "a": [
    1
   ],
   "w": "Element. A variable is a characteristic; an observation is all the measurements for one element."
  },
  {
   "id": "sfm-q0003",
   "topic": "Data basics",
   "q": "The complete set of measurements obtained for a single element is a(n):",
   "c": [
    "Dataset",
    "Variable",
    "Observation",
    "Sample"
   ],
   "a": [
    2
   ],
   "w": "One observation — one row of the table."
  },
  {
   "id": "sfm-q0004",
   "topic": "Data basics",
   "q": "Data is collected on 100 students across 10 variables. How many total data values?",
   "c": [
    "110",
    "100",
    "1,000",
    "10"
   ],
   "a": [
    2
   ],
   "w": "Elements × variables = 100 × 10 = 1,000."
  },
  {
   "id": "sfm-q0005",
   "topic": "Data basics",
   "q": "A survey asks 46 questions of 50 respondents. Total data entries:",
   "c": [
    "96",
    "2,300",
    "460",
    "500"
   ],
   "a": [
    1
   ],
   "w": "46 × 50 = 2,300. This was his Wall Street Journal example."
  },
  {
   "id": "sfm-q0006",
   "topic": "Data basics",
   "q": "Summaries of data in tabular, graphical or numerical form are:",
   "c": [
    "Inferential statistics",
    "Descriptive statistics",
    "Predictive analytics",
    "Statistical inference"
   ],
   "a": [
    1
   ],
   "w": "Descriptive statistics presents data as it is, without inferring about a population."
  },
  {
   "id": "sfm-q0007",
   "topic": "Scales",
   "q": "Gender recorded as Male/Female is measured on which scale?",
   "c": [
    "Nominal",
    "Ordinal",
    "Interval",
    "Ratio"
   ],
   "a": [
    0
   ],
   "w": "Labels with no hierarchy or ranking."
  },
  {
   "id": "sfm-q0008",
   "topic": "Scales",
   "q": "Student roll numbers are measured on which scale?",
   "c": [
    "Ratio, because they are numbers",
    "Interval",
    "Ordinal",
    "Nominal"
   ],
   "a": [
    3
   ],
   "w": "Numeric, but purely identifiers with no ranking. Numeric does not mean quantitative."
  },
  {
   "id": "sfm-q0009",
   "topic": "Scales",
   "q": "Which scale has meaningful differences between values but no true zero?",
   "c": [
    "Nominal",
    "Ordinal",
    "Interval",
    "Ratio"
   ],
   "a": [
    2
   ],
   "w": "Interval — SAT scores, temperature in Celsius or Fahrenheit."
  },
  {
   "id": "sfm-q0010",
   "topic": "Scales",
   "q": "Which is the richest scale of measurement?",
   "c": [
    "Nominal",
    "Ordinal",
    "Interval",
    "Ratio"
   ],
   "a": [
    3
   ],
   "w": "Ratio has all the properties of the others plus a true zero, so all arithmetic operations are meaningful."
  },
  {
   "id": "sfm-q0011",
   "topic": "Scales",
   "q": "Temperature measured in Celsius is on which scale?",
   "c": [
    "Ratio",
    "Interval",
    "Ordinal",
    "Nominal"
   ],
   "a": [
    1
   ],
   "w": "0°C is not the absence of temperature, so ratios such as '20°C is twice 10°C' are meaningless."
  },
  {
   "id": "sfm-q0012",
   "topic": "Scales",
   "q": "Which conversion of measurement scales is possible?",
   "c": [
    "Nominal to ratio",
    "Ordinal to interval",
    "Ratio to ordinal",
    "Nominal to ordinal"
   ],
   "a": [
    2
   ],
   "w": "You can always move down the hierarchy — ratio to interval to ordinal to nominal — but never up."
  },
  {
   "id": "sfm-q0013",
   "topic": "Scales",
   "q": "Categorical data uses which scales?",
   "c": [
    "Interval and ratio",
    "Nominal and ordinal",
    "Ordinal and interval",
    "Nominal only"
   ],
   "a": [
    1
   ],
   "w": "Categorical uses nominal or ordinal; quantitative uses interval or ratio."
  },
  {
   "id": "sfm-q0014",
   "topic": "Scales",
   "q": "Ages of all students in a class collected during one month are:",
   "c": [
    "Time series data",
    "Cross-sectional data",
    "Panel data",
    "Experimental data"
   ],
   "a": [
    1
   ],
   "w": "Collected at approximately the same point in time."
  },
  {
   "id": "sfm-q0015",
   "topic": "Scales",
   "q": "Which are examples of ratio scale data? (Select all)",
   "c": [
    "Height",
    "Sales revenue",
    "Age",
    "Class rank"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "Class rank is ordinal — the gaps between ranks are not equal and there is no true zero.",
   "multi": true
  },
  {
   "id": "sfm-q0016",
   "topic": "Sources & samples",
   "q": "A study observing smokers and non-smokers without intervening collects:",
   "c": [
    "Experimental data",
    "Observational data",
    "Time series data",
    "Census data"
   ],
   "a": [
    1
   ],
   "w": "No attempt to control or influence variables — it is observed as it naturally occurs."
  },
  {
   "id": "sfm-q0017",
   "topic": "Sources & samples",
   "q": "The 1954 polio vaccine trial involving 2 million US children is an example of:",
   "c": [
    "Observational data",
    "Experimental data",
    "A census",
    "Subjective probability"
   ],
   "a": [
    1
   ],
   "w": "A treatment was administered and its effect measured."
  },
  {
   "id": "sfm-q0018",
   "topic": "Sources & samples",
   "q": "A subset of a population used to make inferences about it is called a:",
   "c": [
    "Census",
    "Sample",
    "Parameter",
    "Statistic"
   ],
   "a": [
    1
   ],
   "w": "A census collects from the entire population; a sample is a subset."
  },
  {
   "id": "sfm-q0019",
   "topic": "Sources & samples",
   "q": "A numerical measure computed from a sample is a:",
   "c": [
    "Population parameter",
    "Sample statistic",
    "Census value",
    "Point estimate of the sample"
   ],
   "a": [
    1
   ],
   "w": "His analogy: tasting a few grains to judge whether the whole pot of rice is cooked."
  },
  {
   "id": "sfm-q0020",
   "topic": "Sources & samples",
   "q": "Which analytics determines the optimal course of action?",
   "c": [
    "Descriptive",
    "Predictive",
    "Prescriptive",
    "Diagnostic"
   ],
   "a": [
    2
   ],
   "w": "Descriptive describes the past, predictive forecasts, prescriptive recommends."
  },
  {
   "id": "sfm-q0021",
   "topic": "Sources & samples",
   "q": "Big data is characterised by which three properties?",
   "c": [
    "Volume, value, veracity",
    "Volume, velocity, variety",
    "Variety, veracity, validity",
    "Volume, validity, velocity"
   ],
   "a": [
    1
   ],
   "w": "Volume, velocity and variety, as taught."
  },
  {
   "id": "sfm-q0022",
   "topic": "Summarising",
   "q": "In a frequency distribution, categories must be:",
   "c": [
    "Equal in size",
    "Mutually exclusive and non-overlapping",
    "Sorted alphabetically",
    "At least five in number"
   ],
   "a": [
    1
   ],
   "w": "A single observation cannot belong to two categories at once."
  },
  {
   "id": "sfm-q0023",
   "topic": "Summarising",
   "q": "All relative frequencies in a distribution sum to:",
   "c": [
    "100",
    "1.0",
    "The sample size",
    "The number of categories"
   ],
   "a": [
    1
   ],
   "w": "Relative frequencies sum to 1.0; percentage frequencies sum to 100%."
  },
  {
   "id": "sfm-q0024",
   "topic": "Summarising",
   "q": "The angle of a pie chart sector is calculated as:",
   "c": [
    "Relative frequency × 180",
    "Relative frequency × 360",
    "Frequency × 360",
    "Percentage frequency × 360"
   ],
   "a": [
    1
   ],
   "w": "Relative frequency × 360 degrees. Pie charts work best with fewer than 5–6 categories."
  },
  {
   "id": "sfm-q0025",
   "topic": "Summarising",
   "q": "How does a histogram differ from a bar chart?",
   "c": [
    "Histograms are for categorical data",
    "Histograms have no gaps between adjacent classes, because the data is continuous",
    "Histograms cannot show frequency",
    "Bar charts cannot be used for comparison"
   ],
   "a": [
    1
   ],
   "w": "Continuous data means there is no natural separation between adjacent classes."
  },
  {
   "id": "sfm-q0026",
   "topic": "Summarising",
   "q": "In a cumulative frequency distribution, the last class always has a cumulative frequency equal to:",
   "c": [
    "The largest single frequency",
    "The total number of observations",
    "100",
    "The number of classes"
   ],
   "a": [
    1
   ],
   "w": "And the cumulative percentage frequency always reaches 100%."
  },
  {
   "id": "sfm-q0027",
   "topic": "Summarising",
   "q": "Exam scores where most students cluster high with a few very low scores produce a distribution that is:",
   "c": [
    "Symmetric",
    "Left-skewed",
    "Right-skewed",
    "Uniform"
   ],
   "a": [
    1
   ],
   "w": "The longer tail is on the left. Housing prices are his right-skewed example."
  },
  {
   "id": "sfm-q0028",
   "topic": "Summarising",
   "q": "A conclusion from aggregate data that reverses when the data is split into subgroups illustrates:",
   "c": [
    "Sampling error",
    "Simpson's paradox",
    "Skewness",
    "Chebyshev's theorem"
   ],
   "a": [
    1
   ],
   "w": "Which is why cross-tabulations must be read carefully at the right level of aggregation."
  },
  {
   "id": "sfm-q0029",
   "topic": "Summarising",
   "q": "In a scatter diagram showing a negative relationship, the trend line slope is:",
   "c": [
    "Positive",
    "Negative",
    "Zero",
    "Undefined"
   ],
   "a": [
    1
   ],
   "w": "As x rises, y falls — the demand curve is his example."
  },
  {
   "id": "sfm-q0030",
   "topic": "Summarising",
   "q": "Which displays are appropriate for CATEGORICAL data? (Select all)",
   "c": [
    "Bar chart",
    "Pie chart",
    "Cross-tabulation",
    "Histogram"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "Histograms are for quantitative data.",
   "multi": true
  },
  {
   "id": "sfm-q0031",
   "topic": "Location",
   "q": "Which measure of location is most affected by extreme values?",
   "c": [
    "Median",
    "Mode",
    "Mean",
    "Q1"
   ],
   "a": [
    2
   ],
   "w": "Which is exactly why the median is preferred for skewed data such as incomes and placements."
  },
  {
   "id": "sfm-q0032",
   "topic": "Location",
   "q": "For an even number of observations, the median is:",
   "c": [
    "The lower of the two middle values",
    "The average of the two middle values",
    "The most frequent value",
    "Undefined"
   ],
   "a": [
    1
   ],
   "w": "For an odd count it is simply the middle value."
  },
  {
   "id": "sfm-q0033",
   "topic": "Location",
   "q": "Which measure is often the only one available for categorical data?",
   "c": [
    "Mean",
    "Median",
    "Mode",
    "Geometric mean"
   ],
   "a": [
    2
   ],
   "w": "You cannot average a category, but you can count which occurs most often."
  },
  {
   "id": "sfm-q0034",
   "topic": "Location",
   "q": "Which measure should be used for the average rate of return over several years?",
   "c": [
    "Arithmetic mean",
    "Weighted mean",
    "Geometric mean",
    "Median"
   ],
   "a": [
    2
   ],
   "w": "Returns compound, so each period depends on the last. The arithmetic mean misleads."
  },
  {
   "id": "sfm-q0035",
   "topic": "Location",
   "q": "The weighted mean formula is:",
   "c": [
    "Σx / n",
    "Σ(w·x) / Σw",
    "(x₁ × x₂ × … × xₙ)^(1/n)",
    "Σ(x − x̄)² / n"
   ],
   "a": [
    1
   ],
   "w": "Used for GPA with credit hours, or wages with different hours worked."
  },
  {
   "id": "sfm-q0036",
   "topic": "Location",
   "q": "The location of the p-th percentile is found using:",
   "c": [
    "(p/100) × n",
    "(p/100) × (n + 1)",
    "p × n / 2",
    "(n + 1) / p"
   ],
   "a": [
    1
   ],
   "w": "For 70 rents, the 80th percentile sits at (80/100) × 71 = 56.8."
  },
  {
   "id": "sfm-q0037",
   "topic": "Location",
   "q": "The second quartile (Q2) is the same as:",
   "c": [
    "The mean",
    "The median",
    "The mode",
    "The IQR"
   ],
   "a": [
    1
   ],
   "w": "Q2 is the 50th percentile — half the data below, half above."
  },
  {
   "id": "sfm-q0038",
   "topic": "Location",
   "q": "A dataset has a mean of 590.8 and a median of 575. This suggests:",
   "c": [
    "The data is symmetric",
    "Extreme high values are pulling the mean up",
    "The mode equals the median",
    "There are no outliers"
   ],
   "a": [
    1
   ],
   "w": "The mean chases the tail, which is why the median is the stabler figure here."
  },
  {
   "id": "sfm-q0039",
   "topic": "Spread & shape",
   "q": "The interquartile range is calculated as:",
   "c": [
    "Maximum − minimum",
    "Q3 − Q1",
    "Q3 + Q1",
    "Q2 − Q1"
   ],
   "a": [
    1
   ],
   "w": "The middle 50%, which is why extreme values do not distort it."
  },
  {
   "id": "sfm-q0040",
   "topic": "Spread & shape",
   "q": "Sample variance is calculated by dividing the sum of squared deviations by:",
   "c": [
    "n",
    "n − 1",
    "n + 1",
    "n²"
   ],
   "a": [
    1
   ],
   "w": "Population variance divides by n. This is the classic slip."
  },
  {
   "id": "sfm-q0041",
   "topic": "Spread & shape",
   "q": "Why are deviations squared when computing variance?",
   "c": [
    "To make the number larger",
    "To stop positive and negative deviations cancelling each other out",
    "To convert to the original units",
    "To remove outliers"
   ],
   "a": [
    1
   ],
   "w": "Without squaring, the deviations sum to zero however variable the data is."
  },
  {
   "id": "sfm-q0042",
   "topic": "Spread & shape",
   "q": "Standard deviation is preferred over variance for interpretation because:",
   "c": [
    "It is always smaller",
    "It is expressed in the same units as the original data",
    "It ignores outliers",
    "It is easier to compute"
   ],
   "a": [
    1
   ],
   "w": "Variance is in squared units, which have no intuitive meaning."
  },
  {
   "id": "sfm-q0043",
   "topic": "Spread & shape",
   "q": "Two suppliers both average 5 days. Supplier A has σ = 5, Supplier B has σ = 1. Which is more reliable, and what are the CVs?",
   "c": [
    "A; CV 0.2 and 1.0",
    "B; CV 1.0 for A and 0.2 for B",
    "A; both CVs are equal",
    "B; CV 5.0 for A and 1.0 for B"
   ],
   "a": [
    1
   ],
   "w": "CV = s/x̄. Lower CV means more consistency, so B."
  },
  {
   "id": "sfm-q0044",
   "topic": "Spread & shape",
   "q": "In a negatively (left) skewed distribution:",
   "c": [
    "Mean > median",
    "Median > mean",
    "Mean = median",
    "Mode > mean > median"
   ],
   "a": [
    1
   ],
   "w": "The tail extends left and drags the mean below the median."
  },
  {
   "id": "sfm-q0045",
   "topic": "Spread & shape",
   "q": "The z-score formula is:",
   "c": [
    "(x − x̄) / s",
    "(x̄ − x) / n",
    "x / s",
    "(x − s) / x̄"
   ],
   "a": [
    0
   ],
   "w": "It measures how many standard deviations a value sits from the mean."
  },
  {
   "id": "sfm-q0046",
   "topic": "Spread & shape",
   "q": "A rent of 500 where mean = 600 and SD = 100, and a rent of 70 where mean = 120 and SD = 50, both give z = −1. This shows that z-scores:",
   "c": [
    "Are always negative below the mean",
    "Provide a common metric for comparing values from different distributions",
    "Eliminate outliers",
    "Convert data to a ratio scale"
   ],
   "a": [
    1
   ],
   "w": "Standardisation is what makes different distributions comparable."
  },
  {
   "id": "sfm-q0047",
   "topic": "Spread & shape",
   "q": "Chebyshev's theorem states that at least what proportion of values lie within 2 standard deviations?",
   "c": [
    "68%",
    "75%",
    "89%",
    "95%"
   ],
   "a": [
    1
   ],
   "w": "1 − 1/z² = 1 − 1/4 = 75%. At z = 3 it gives at least 89%, at z = 4 at least 94%."
  },
  {
   "id": "sfm-q0048",
   "topic": "Spread & shape",
   "q": "The key difference between Chebyshev's theorem and the empirical rule is that:",
   "c": [
    "Chebyshev is more precise",
    "Chebyshev applies to any distribution; the empirical rule requires approximately bell-shaped data",
    "The empirical rule works only for small samples",
    "They give identical percentages"
   ],
   "a": [
    1
   ],
   "w": "Chebyshev is weaker but universal; the empirical rule is sharper but needs normality."
  },
  {
   "id": "sfm-q0049",
   "topic": "Spread & shape",
   "q": "Under the empirical rule, approximately what percentage lies within ±1σ?",
   "c": [
    "50%",
    "68%",
    "95%",
    "99.7%"
   ],
   "a": [
    1
   ],
   "w": "68% at ±1σ, 95% at ±2σ, 99.7% at ±3σ."
  },
  {
   "id": "sfm-q0050",
   "topic": "Spread & shape",
   "q": "Using the z-score method, a value is flagged as an outlier when:",
   "c": [
    "|z| > 1",
    "|z| > 2",
    "|z| > 3",
    "|z| > 1.5"
   ],
   "a": [
    2
   ],
   "w": "More than three standard deviations from the mean. Don't confuse this with the 1.5 × IQR box plot rule."
  },
  {
   "id": "sfm-q0051",
   "topic": "Spread & shape",
   "q": "In a box plot, the outlier limits are:",
   "c": [
    "Q1 − 3·IQR and Q3 + 3·IQR",
    "Q1 − 1.5·IQR and Q3 + 1.5·IQR",
    "mean ± 3σ",
    "Q1 − IQR and Q3 + IQR"
   ],
   "a": [
    1
   ],
   "w": "1.5 for the box plot rule, 3 for the z-score rule."
  },
  {
   "id": "sfm-q0052",
   "topic": "Spread & shape",
   "q": "With Q1 = 545 and Q3 = 625, what are the box plot outlier limits?",
   "c": [
    "465 and 705",
    "425 and 745",
    "505 and 665",
    "385 and 785"
   ],
   "a": [
    1
   ],
   "w": "IQR = 80. Lower = 545 − 120 = 425; upper = 625 + 120 = 745."
  },
  {
   "id": "sfm-q0053",
   "topic": "Spread & shape",
   "q": "Which five values make up the five-number summary?",
   "c": [
    "Mean, median, mode, min, max",
    "Minimum, Q1, median, Q3, maximum",
    "Mean, SD, variance, min, max",
    "Q1, Q2, Q3, IQR, range"
   ],
   "a": [
    1
   ],
   "w": "And the box plot is drawn from exactly these five."
  },
  {
   "id": "sfm-q0054",
   "topic": "Spread & shape",
   "q": "Which are recognised causes of outliers? (Select all)",
   "c": [
    "Incorrectly recorded data",
    "Data incorrectly included in the set",
    "Genuinely exceptional but correct values",
    "Using the wrong measure of central tendency"
   ],
   "a": [
    0,
    1,
    2
   ],
   "w": "An outlier is a property of the data, not of the statistic you choose.",
   "multi": true
  },
  {
   "id": "sfm-q0055",
   "topic": "Association",
   "q": "The correlation coefficient always lies between:",
   "c": [
    "0 and 1",
    "−1 and +1",
    "−∞ and +∞",
    "0 and 100"
   ],
   "a": [
    1
   ],
   "w": "Covariance, by contrast, is unbounded and scale-dependent."
  },
  {
   "id": "sfm-q0056",
   "topic": "Association",
   "q": "The correlation coefficient is calculated as:",
   "c": [
    "Covariance × sx × sy",
    "Covariance / (sx × sy)",
    "(sx × sy) / covariance",
    "Covariance / n"
   ],
   "a": [
    1
   ],
   "w": "Standardising covariance by the two standard deviations is what bounds it to −1 to +1."
  },
  {
   "id": "sfm-q0057",
   "topic": "Association",
   "q": "A correlation of −0.96 between driving distance and golf score means:",
   "c": [
    "Driving distance causes lower scores",
    "There is a strong negative linear association: longer drives go with lower scores",
    "There is no relationship",
    "The variables are independent"
   ],
   "a": [
    1
   ],
   "w": "Correlation is association, not causation — he stressed this."
  },
  {
   "id": "sfm-q0058",
   "topic": "Association",
   "q": "Why is covariance harder to interpret than correlation?",
   "c": [
    "It can be negative",
    "It is scale-dependent and unbounded",
    "It requires a larger sample",
    "It only works for categorical data"
   ],
   "a": [
    1
   ],
   "w": "Its magnitude depends on the units of the variables, so there is no benchmark."
  },
  {
   "id": "sfm-q0059",
   "topic": "Probability I",
   "q": "Probability is a numerical measure ranging from:",
   "c": [
    "−1 to +1",
    "0 to 1",
    "0 to 100",
    "1 to 10"
   ],
   "a": [
    1
   ],
   "w": "0 means impossible, 1 means certain."
  },
  {
   "id": "sfm-q0060",
   "topic": "Probability I",
   "q": "The set of all possible experimental outcomes is the:",
   "c": [
    "Event",
    "Sample point",
    "Sample space",
    "Population"
   ],
   "a": [
    2
   ],
   "w": "A sample point is one outcome; an event is a collection of sample points."
  },
  {
   "id": "sfm-q0061",
   "topic": "Probability I",
   "q": "An experiment has 4 outcomes at stage one and 2 at stage two. Total outcomes:",
   "c": [
    "6",
    "8",
    "4",
    "2"
   ],
   "a": [
    1
   ],
   "w": "The fundamental counting rule multiplies: 4 × 2 = 8."
  },
  {
   "id": "sfm-q0062",
   "topic": "Probability I",
   "q": "When the ORDER of selection matters, you use:",
   "c": [
    "Combinations",
    "Permutations",
    "The classical method",
    "Bayes' theorem"
   ],
   "a": [
    1
   ],
   "w": "Permutations: N!/(N−n)!. Combinations, where order is irrelevant, use N!/[n!(N−n)!]."
  },
  {
   "id": "sfm-q0063",
   "topic": "Probability I",
   "q": "Rental records show 2 scooters were rented on 18 of 40 days. Assigning P = 0.45 uses which method?",
   "c": [
    "Classical",
    "Relative frequency",
    "Subjective",
    "Bayesian"
   ],
   "a": [
    1
   ],
   "w": "Based on historical data: frequency ÷ total observations."
  },
  {
   "id": "sfm-q0064",
   "topic": "Probability I",
   "q": "Assigning probability 1/6 to each face of an unbiased die uses:",
   "c": [
    "The classical method",
    "The relative frequency method",
    "The subjective method",
    "Bayes' theorem"
   ],
   "a": [
    0
   ],
   "w": "It assumes all outcomes are equally likely."
  },
  {
   "id": "sfm-q0065",
   "topic": "Probability I",
   "q": "When no historical data exists and experimentation is impractical, you use:",
   "c": [
    "The classical method",
    "The relative frequency method",
    "The subjective method",
    "Chebyshev's theorem"
   ],
   "a": [
    2
   ],
   "w": "Judgement, experience and expert knowledge — common for novel situations like a new product launch."
  },
  {
   "id": "sfm-q0066",
   "topic": "Probability II",
   "q": "The addition law is:",
   "c": [
    "P(A∪B) = P(A) + P(B)",
    "P(A∪B) = P(A) + P(B) − P(A∩B)",
    "P(A∪B) = P(A) × P(B)",
    "P(A∪B) = P(A) − P(B)"
   ],
   "a": [
    1
   ],
   "w": "The intersection is subtracted because it is counted in both P(A) and P(B)."
  },
  {
   "id": "sfm-q0067",
   "topic": "Probability II",
   "q": "For mutually exclusive events:",
   "c": [
    "P(A∩B) = 0",
    "P(A∩B) = P(A)·P(B)",
    "P(A|B) = P(A)",
    "P(A∪B) = 0"
   ],
   "a": [
    0
   ],
   "w": "No sample points in common, so the addition law simplifies to P(A) + P(B)."
  },
  {
   "id": "sfm-q0068",
   "topic": "Probability II",
   "q": "The conditional probability formula is:",
   "c": [
    "P(A|B) = P(A) × P(B)",
    "P(A|B) = P(A∩B) / P(B)",
    "P(A|B) = P(A∪B) / P(B)",
    "P(A|B) = P(B) / P(A∩B)"
   ],
   "a": [
    1
   ],
   "w": "Once B has occurred the sample space reduces to B, and you ask how much of that is also A."
  },
  {
   "id": "sfm-q0069",
   "topic": "Probability II",
   "q": "The multiplication law states:",
   "c": [
    "P(A∩B) = P(A) + P(B|A)",
    "P(A∩B) = P(A) × P(B|A)",
    "P(A∩B) = P(A) / P(B)",
    "P(A∩B) = P(A|B) × P(B|A)"
   ],
   "a": [
    1
   ],
   "w": "It follows from rearranging the conditional probability formula."
  },
  {
   "id": "sfm-q0070",
   "topic": "Probability II",
   "q": "The test for independence is:",
   "c": [
    "P(A∩B) = 0",
    "P(A∩B) = P(A) × P(B)",
    "P(A∪B) = P(A) + P(B)",
    "P(A|B) = 0"
   ],
   "a": [
    1
   ],
   "w": "If the equation holds the events are independent. His case failed it: 0.36 versus 0.336."
  },
  {
   "id": "sfm-q0071",
   "topic": "Probability II",
   "q": "Two mutually exclusive events with non-zero probabilities are:",
   "c": [
    "Always independent",
    "Always dependent",
    "Sometimes independent",
    "Impossible"
   ],
   "a": [
    1
   ],
   "w": "If one occurring guarantees the other did not, they are maximally informative about each other — the opposite of independence."
  },
  {
   "id": "sfm-q0072",
   "topic": "Probability II",
   "q": "Rolling a die, if event A is 'divisible by 3', the complement A′ is:",
   "c": [
    "{3, 6}",
    "{1, 2, 4, 5}",
    "{1, 2, 3, 4, 5, 6}",
    "{2, 4, 6}"
   ],
   "a": [
    1
   ],
   "w": "Everything in the sample space that is not in A. The complement never extends beyond the sample space."
  },
  {
   "id": "sfm-q0073",
   "topic": "Probability II",
   "q": "Probabilities revised after new information arrives are called:",
   "c": [
    "Prior probabilities",
    "Posterior probabilities",
    "Joint probabilities",
    "Marginal probabilities"
   ],
   "a": [
    1
   ],
   "w": "Bayes' theorem combines priors with new evidence to produce posteriors."
  },
  {
   "id": "sfm-q0074",
   "topic": "Probability II",
   "q": "In the zoning case, priors are 0.70 approval and 0.30 rejection; a negative recommendation has P = 0.20 given approval and 0.90 given rejection. The posterior probability of approval is:",
   "c": [
    "0.14",
    "0.27",
    "0.34",
    "0.70"
   ],
   "a": [
    2
   ],
   "w": "0.14 / (0.14 + 0.27) = 0.34. The owner revises 70% down to 34%."
  },
  {
   "id": "sfm-q0075",
   "topic": "Probability II",
   "q": "Bayes' theorem requires the events Aᵢ to be:",
   "c": [
    "Independent",
    "Mutually exclusive, and together the whole sample space",
    "Equally likely",
    "Continuous"
   ],
   "a": [
    1
   ],
   "w": "Mutually exclusive and collectively exhaustive."
  },
  {
   "id": "sfm-q0076",
   "topic": "Distributions",
   "q": "Which is a discrete random variable?",
   "c": [
    "The distance from home to the store",
    "The number of TVs sold in a day",
    "The temperature at noon",
    "A person's height"
   ],
   "a": [
    1
   ],
   "w": "You cannot sell 1.5 TVs. The others can take any value in an interval."
  },
  {
   "id": "sfm-q0077",
   "topic": "Distributions",
   "q": "For any discrete probability distribution:",
   "c": [
    "Σf(x) = 0",
    "Σf(x) = 1",
    "Σf(x) = n",
    "f(x) can be negative"
   ],
   "a": [
    1
   ],
   "w": "Every probability is at least 0 and they sum to 1."
  },
  {
   "id": "sfm-q0078",
   "topic": "Distributions",
   "q": "Expected value is calculated as:",
   "c": [
    "Σx / n",
    "Σ[x · f(x)]",
    "Σ[(x − μ)² · f(x)]",
    "√variance"
   ],
   "a": [
    1
   ],
   "w": "A weighted average with probabilities as the weights. Note it need not be a value the variable can actually take."
  },
  {
   "id": "sfm-q0079",
   "topic": "Distributions",
   "q": "Which condition is NOT required for a binomial distribution?",
   "c": [
    "A sequence of n identical trials",
    "Two possible outcomes per trial",
    "Constant probability of success",
    "The mean must equal the variance"
   ],
   "a": [
    3
   ],
   "w": "Mean equals variance is the defining property of the Poisson, not the binomial. The fourth binomial condition is independent trials."
  },
  {
   "id": "sfm-q0080",
   "topic": "Distributions",
   "q": "For a binomial distribution, the mean and variance are:",
   "c": [
    "μ and μ",
    "np and np(1−p)",
    "np(1−p) and np",
    "n and p"
   ],
   "a": [
    1
   ],
   "w": "Poisson is the one where both equal μ."
  },
  {
   "id": "sfm-q0081",
   "topic": "Distributions",
   "q": "The assumption that the probability of success stays constant across trials is called:",
   "c": [
    "The independence assumption",
    "The stationarity assumption",
    "The uniformity assumption",
    "The normality assumption"
   ],
   "a": [
    1
   ],
   "w": "It only holds when the underlying system is stable."
  },
  {
   "id": "sfm-q0082",
   "topic": "Distributions",
   "q": "A Poisson distribution requires how many conditions, and how many parameters?",
   "c": [
    "Four conditions, two parameters",
    "Two conditions, one parameter",
    "Three conditions, two parameters",
    "Two conditions, two parameters"
   ],
   "a": [
    1
   ],
   "w": "Two conditions (equal probability over equal intervals, independent occurrences) and one parameter, μ."
  },
  {
   "id": "sfm-q0083",
   "topic": "Distributions",
   "q": "In a normal distribution:",
   "c": [
    "The mean is greater than the median",
    "The mean, median and mode all coincide",
    "The mode is undefined",
    "The curve is right-skewed"
   ],
   "a": [
    1
   ],
   "w": "Perfectly symmetric about the centre, with total area under the curve equal to 1."
  },
  {
   "id": "sfm-q0084",
   "topic": "Distributions",
   "q": "The standard normal distribution has:",
   "c": [
    "μ = 1 and σ = 0",
    "μ = 0 and σ = 1",
    "μ = 0 and σ = 0",
    "μ and σ equal to the data's"
   ],
   "a": [
    1
   ],
   "w": "Reached by standardising with z = (x − μ)/σ, so pre-computed tables can be used."
  },
  {
   "id": "sfm-q0085",
   "topic": "Distributions",
   "q": "For a continuous uniform distribution on [A, B], the expected value is:",
   "c": [
    "(B − A)/2",
    "(A + B)/2",
    "1/(B − A)",
    "(B − A)²/12"
   ],
   "a": [
    1
   ],
   "w": "The midpoint. The variance is (B − A)²/12 and the density is 1/(B − A)."
  },
  {
   "id": "sfm-q0086",
   "topic": "Distributions",
   "q": "Demand is normal with μ = 15 and σ = 6, and the reorder point is 20. The z-value is:",
   "c": [
    "0.83",
    "1.20",
    "5.00",
    "0.30"
   ],
   "a": [
    0
   ],
   "w": "(20 − 15)/6 = 0.83. P(Z ≤ 0.83) = 0.7967, so the stockout risk is 20.33%."
  },
  {
   "id": "sfm-q0087",
   "topic": "Distributions",
   "q": "For a continuous random variable, probability is found by:",
   "c": [
    "Reading the value of f(x) at a point",
    "Calculating the area under f(x) over an interval",
    "Dividing favourable by total outcomes",
    "Multiplying f(x) by n"
   ],
   "a": [
    1
   ],
   "w": "The probability at any single point is zero — you need an interval."
  },
  {
   "id": "sfm-q0088",
   "topic": "Scales",
   "q": "A bank grades its corporate borrowers AAA, AA, A, BBB, BB and B. On which scale is this grade measured?",
   "c": [
    "Nominal, because the grades are letters",
    "Ordinal",
    "Interval",
    "Ratio"
   ],
   "a": [
    1
   ],
   "w": "The grades are labels that can be ranked from best to worst, which makes them ordinal. They are not merely nominal: letters can still carry order. They are not interval because the 'distance' between AAA and AA is not a fixed unit.",
   "bk": "Anderson 14e ch1",
   "lv": "recall"
  },
  {
   "id": "sfm-q0089",
   "topic": "Scales",
   "q": "A retailer codes its regions North = 1, South = 2, East = 3, West = 4 and reports that the average region code of last month's orders was 2.4. What is wrong with this figure?",
   "c": [
    "Nothing; the mean is valid for any numeric column",
    "It should have been the median code instead",
    "The codes are nominal labels, so arithmetic on them has no meaning",
    "It should be rounded to 2, the South region"
   ],
   "a": [
    2
   ],
   "w": "Region is categorical (nominal) even when stored as numbers, so no average, median or rounding gives a meaningful result. Summarise it with counts or percentages per region. Switching to the median is tempting but the codes have no order either.",
   "bk": "Anderson 14e ch1",
   "lv": "apply"
  },
  {
   "id": "sfm-q0090",
   "topic": "Scales",
   "q": "According to the textbook, which scales of measurement are always numeric?",
   "c": [
    "Nominal and ordinal",
    "Ordinal and interval",
    "Ratio only",
    "Interval and ratio"
   ],
   "a": [
    3
   ],
   "w": "Interval and ratio data need a fixed unit of measure, so they are always numbers. Nominal and ordinal (categorical) data may be numeric codes or words. 'Ratio only' misses that interval data, like SAT scores, are numeric too.",
   "bk": "Anderson 14e ch1",
   "lv": "recall"
  },
  {
   "id": "sfm-q0091",
   "topic": "Scales",
   "q": "The number of customer complaints a call centre receives each hour is best described as:",
   "c": [
    "Quantitative and discrete",
    "Quantitative and continuous",
    "Categorical and ordinal",
    "Categorical and nominal"
   ],
   "a": [
    0
   ],
   "w": "It counts how many, so it is quantitative and discrete: you cannot receive 2.5 complaints. Continuous data measure how much, such as call duration.",
   "bk": "Anderson 14e ch1",
   "lv": "apply"
  },
  {
   "id": "sfm-q0092",
   "topic": "Scales",
   "q": "A property consultant says a flat priced at ₹80 lakh costs twice as much as one priced at ₹40 lakh. Which property of the data makes this statement valid?",
   "c": [
    "Values can be ranked",
    "Differences between values are in a fixed unit",
    "Zero means the complete absence of price, so ratios are meaningful",
    "Values are numeric"
   ],
   "a": [
    2
   ],
   "w": "'Twice as much' is a ratio claim, which needs a ratio scale: a zero that means none of the quantity. A fixed unit of difference alone (interval scale) supports statements about differences, not ratios.",
   "bk": "Anderson 14e ch1",
   "lv": "apply"
  },
  {
   "id": "sfm-q0093",
   "topic": "Scales",
   "q": "India's monthly GST collections from April 2018 to March 2025 form:",
   "c": [
    "Cross-sectional data",
    "Time series data",
    "Experimental data",
    "Categorical data"
   ],
   "a": [
    1
   ],
   "w": "The same variable is followed across many periods, so it is a time series. Cross-sectional data would compare many elements (say, all states) in one month.",
   "bk": "Anderson 14e ch1",
   "lv": "recall"
  },
  {
   "id": "sfm-q0094",
   "topic": "Scales",
   "q": "Which variable is measured on a continuous quantitative scale?",
   "c": [
    "Number of items in a customer's basket",
    "Customer's city of residence",
    "Customer satisfaction rated poor, fair, good or excellent",
    "Time a customer spends at the checkout counter"
   ],
   "a": [
    3
   ],
   "w": "Time measures how much and can take any value in an interval, so it is continuous. Items in a basket are counted, so they are discrete. City and satisfaction are categorical.",
   "bk": "Anderson 14e ch1",
   "lv": "apply"
  },
  {
   "id": "sfm-q0095",
   "topic": "Data basics",
   "q": "A data set contains 270 data items recorded on 9 variables. How many observations does it contain?",
   "c": [
    "9",
    "279",
    "30",
    "2,430"
   ],
   "a": [
    2
   ],
   "w": "Data items = observations × variables, so observations = 270 ÷ 9 = 30. 2,430 multiplies instead of dividing.",
   "bk": "Anderson 14e ch1",
   "lv": "apply"
  },
  {
   "id": "sfm-q0096",
   "topic": "Data basics",
   "q": "In any data set, the number of observations is always equal to the number of:",
   "c": [
    "Elements",
    "Variables",
    "Data items",
    "Scales of measurement used"
   ],
   "a": [
    0
   ],
   "w": "Each element yields one observation (the set of all its measurements). The number of variables is the number of measurements per observation.",
   "bk": "Anderson 14e ch1",
   "lv": "recall"
  },
  {
   "id": "sfm-q0097",
   "topic": "Data basics",
   "q": "Which statement uses 'statistics' in the sense of the discipline rather than numerical facts?",
   "c": [
    "Statistics released today show retail inflation at 4.1%",
    "The company's statistics show quarterly profit of ₹2,700 crore",
    "The cricket board published batting statistics for the season",
    "Statistics is used to design an audit sample and judge whether receivables are fairly stated"
   ],
   "a": [
    3
   ],
   "w": "The inflation, profit and batting examples use 'statistics' to mean numbers such as rates, profits and averages. The audit example describes collecting and analysing data to reach a decision, which is statistics as a field of study.",
   "bk": "Anderson 14e ch1",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0098",
   "topic": "Sources & samples",
   "q": "What is the key difference between an experiment and an observational study?",
   "c": [
    "An experiment always uses a larger sample",
    "In an experiment the researcher controls one or more variables",
    "An observational study cannot use statistical analysis",
    "An experiment uses only existing data sources"
   ],
   "a": [
    1
   ],
   "w": "Control is the defining feature: the researcher sets the variables (for example the dose) and measures the effect. Sample size has nothing to do with it; the largest experiment (the 1954 polio trial) and tiny surveys alike are classified by control.",
   "bk": "Anderson 14e ch1",
   "lv": "recall"
  },
  {
   "id": "sfm-q0099",
   "topic": "Sources & samples",
   "q": "Researchers select 80 listed companies and record each CEO's gender and the company's return on equity. This is:",
   "c": [
    "An experiment, because two variables are measured",
    "A census",
    "An observational study, because the researchers control neither variable",
    "Prescriptive analytics"
   ],
   "a": [
    2
   ],
   "w": "The researchers simply record what already exists; they cannot assign CEO gender or set ROE. Measuring two variables does not make a study an experiment. It is not a census because only a sample of companies is studied.",
   "bk": "Anderson 14e ch1",
   "lv": "apply"
  },
  {
   "id": "sfm-q0100",
   "topic": "Sources & samples",
   "q": "A mobile-app firm randomly shows half its users a new checkout page and half the old one, then compares completed purchases. The data come from:",
   "c": [
    "An experiment",
    "An observational study",
    "An existing internal source",
    "A census"
   ],
   "a": [
    0
   ],
   "w": "The firm controls which page each user sees (the treatment) and measures the effect on purchases, which makes it an experiment. If it merely recorded which page users happened to choose, it would be observational.",
   "bk": "Anderson 14e ch1",
   "lv": "apply"
  },
  {
   "id": "sfm-q0101",
   "topic": "Sources & samples",
   "q": "The textbook's rule for deciding whether new data are worth collecting is that the cost of acquiring and analysing them should not exceed:",
   "c": [
    "The cost of using existing sources",
    "The savings generated by making a better decision with the information",
    "10% of the project budget",
    "The cost of a census"
   ],
   "a": [
    1
   ],
   "w": "Data are judged by their contribution to the decision: acquisition plus analysis should cost less than the benefit of the improved decision. The other options are not stated rules.",
   "bk": "Anderson 14e ch1",
   "lv": "recall"
  },
  {
   "id": "sfm-q0102",
   "topic": "Sources & samples",
   "q": "A survey record shows a respondent aged 23 with 19 years of full-time work experience. Which data-quality practice from the chapter is designed to catch this?",
   "c": [
    "Converting the data to a time series",
    "Increasing the sample size",
    "Checking the data for internal consistency",
    "Recoding the age variable as ordinal"
   ],
   "a": [
    2
   ],
   "w": "Internal-consistency checks flag combinations of values that cannot both be true, such as experience nearly as long as the person's age. A bigger sample would not fix a recording error in this record.",
   "bk": "Anderson 14e ch1",
   "lv": "apply"
  },
  {
   "id": "sfm-q0103",
   "topic": "Sources & samples",
   "q": "Linear regression, time series forecasting and simulation all belong to which category of analytics?",
   "c": [
    "Descriptive",
    "Prescriptive",
    "Diagnostic",
    "Predictive"
   ],
   "a": [
    3
   ],
   "w": "They use models built on past data to predict the future or assess one variable's effect on another, which is predictive analytics. Prescriptive analytics outputs a best decision, as optimisation does; simulation is often wrongly placed there.",
   "bk": "Anderson 14e ch1",
   "lv": "recall"
  },
  {
   "id": "sfm-q0104",
   "topic": "Sources & samples",
   "q": "An airline uses past booking data in a model that recommends the fare for every seat so as to maximise total revenue. This is an example of:",
   "c": [
    "Prescriptive analytics",
    "Descriptive analytics",
    "Predictive analytics",
    "Data warehousing"
   ],
   "a": [
    0
   ],
   "w": "The output is a recommended best course of action (a pricing strategy), which defines prescriptive analytics. Forecasting demand alone would be predictive.",
   "bk": "Anderson 14e ch1",
   "lv": "apply"
  },
  {
   "id": "sfm-q0105",
   "topic": "Sources & samples",
   "q": "Capturing, storing and maintaining very large volumes of transaction data is called:",
   "c": [
    "Data mining",
    "Data warehousing",
    "Statistical inference",
    "Descriptive analytics"
   ],
   "a": [
    1
   ],
   "w": "Data warehousing is the storage side. Data mining is the analysis side: extracting useful, often predictive, information from the warehouse.",
   "bk": "Anderson 14e ch1",
   "lv": "recall"
  },
  {
   "id": "sfm-q0106",
   "topic": "Sources & samples",
   "q": "A data-mining team builds a churn model that predicts its own data almost perfectly. What should it do before calling the model reliable?",
   "c": [
    "Add more variables until the fit is perfect",
    "Check whether the model accurately predicts a separate test data set",
    "Report the model's fit on the same data to management",
    "Replace the sample with a census"
   ],
   "a": [
    1
   ],
   "w": "A model fitted to one data set can overfit it. Splitting the data into a training set and a test set, and checking predictions on the test set, is the standard reliability check. Adding variables makes overfitting worse.",
   "bk": "Anderson 14e ch1",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0107",
   "topic": "Sources & samples",
   "q": "A battery maker tests 200 new batteries and gets a mean life of 18.6 hours. It drops every battery under 18 hours as 'start-up defects', recomputes the mean as 21 hours, and publishes only the 21-hour figure. Which statement is correct?",
   "c": [
    "It is acceptable as long as the dropped batteries really were defective",
    "It is acceptable because outliers should always be removed",
    "It is unethical only if the defects were invented",
    "It is unethical unless the report accounts for all 200 batteries and explains how the final sample was formed"
   ],
   "a": [
    3
   ],
   "w": "Even genuine defects must be disclosed: the guideline is to account for all data considered and explain the sample actually used. Publishing only the 21-hour figure misleads whether or not the defects were real.",
   "bk": "Anderson 14e ch1",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0108",
   "topic": "Sources & samples",
   "q": "A rail operator wants the mean travel time of every train on a route last year and has the full timetable log. Using all those records rather than a subset is a:",
   "c": [
    "Census",
    "Sample survey",
    "Observational experiment",
    "Time series sample"
   ],
   "a": [
    0
   ],
   "w": "Collecting data on every element of the population is a census. A sample survey would use only some of the trains.",
   "bk": "Anderson 14e ch1",
   "lv": "apply"
  },
  {
   "id": "sfm-q0109",
   "topic": "Sources & samples",
   "q": "A firm wants to know what share of all Indian online shoppers would pay for faster delivery, and surveys only its own premium-membership customers. What is the main problem?",
   "c": [
    "The sample is too small to be a census",
    "The data are qualitative, so no percentage can be computed",
    "The sample does not represent the population of interest, so the estimate is likely biased",
    "Surveys cannot be used for statistical inference"
   ],
   "a": [
    2
   ],
   "w": "Premium members already pay for faster service, so they are unrepresentative of all online shoppers, exactly like the restaurant-smoking poll. Percentages of categorical answers are perfectly valid.",
   "bk": "Anderson 14e ch1",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0110",
   "topic": "Summarising",
   "q": "Data on monthly sales range from ₹12 lakh to ₹87 lakh. An analyst wants 6 classes. What is the approximate class width before rounding?",
   "c": [
    "14.5",
    "12.5",
    "15",
    "75"
   ],
   "a": [
    1
   ],
   "w": "Approximate width = (largest − smallest) ÷ number of classes = (87 − 12)/6 = 12.5. In practice it would be rounded up to a convenient value such as 13 or 15, but the question asks for the value before rounding. 75 is the range, not the width.",
   "bk": "Anderson 14e ch2",
   "lv": "apply"
  },
  {
   "id": "sfm-q0111",
   "topic": "Summarising",
   "q": "As a general guideline, how many classes does the textbook recommend for a frequency distribution of quantitative data?",
   "c": [
    "Between 5 and 20",
    "Exactly 10",
    "Between 2 and 5",
    "As many as there are distinct values"
   ],
   "a": [
    0
   ],
   "w": "Between 5 and 20: enough to show variation, but not so many that classes hold only a few items. Small data sets can use as few as five or six classes. One class per distinct value defeats the purpose of summarising.",
   "bk": "Anderson 14e ch2",
   "lv": "recall"
  },
  {
   "id": "sfm-q0112",
   "topic": "Summarising",
   "q": "A frequency distribution uses the classes 20–29, 30–39, 40–49 for whole-number ages. What is the class width, and what is the midpoint of the 30–39 class?",
   "c": [
    "Width 9, midpoint 34.5",
    "Width 10, midpoint 35",
    "Width 10, midpoint 34.5",
    "Width 9, midpoint 35"
   ],
   "a": [
    2
   ],
   "w": "Width is the difference between successive lower limits: 30 − 20 = 10. The midpoint is halfway between the class's own limits: (30 + 39)/2 = 34.5. Taking 39 − 30 = 9 as the width is the classic slip.",
   "bk": "Anderson 14e ch2",
   "lv": "apply"
  },
  {
   "id": "sfm-q0113",
   "topic": "Summarising",
   "q": "Class frequencies for 40 observations are 6, 10, 14, 7 and 3. What is the cumulative relative frequency of the third class?",
   "c": [
    "0.35",
    "0.30",
    "0.85",
    "0.75"
   ],
   "a": [
    3
   ],
   "w": "Cumulative frequency of class 3 = 6 + 10 + 14 = 30; divide by n: 30/40 = 0.75. 0.35 is the third class's own relative frequency (14/40), not the cumulative one.",
   "bk": "Anderson 14e ch2",
   "lv": "apply"
  },
  {
   "id": "sfm-q0114",
   "topic": "Summarising",
   "q": "A stem-and-leaf display of weekly footfall has 'Leaf unit = 10'. One row reads stem 23, leaf 4. The data value it represents is approximately:",
   "c": [
    "234",
    "2,340",
    "23.4",
    "23,400"
   ],
   "a": [
    1
   ],
   "w": "Combine stem and leaf to get 234, then multiply by the leaf unit 10: about 2,340. Reading it as 234 ignores the leaf unit; a leaf unit is used precisely so long numbers can be shown with one-digit leaves.",
   "bk": "Anderson 14e ch2",
   "lv": "apply"
  },
  {
   "id": "sfm-q0115",
   "topic": "Summarising",
   "q": "Compared with a histogram of the same data, a stem-and-leaf display has which advantage?",
   "c": [
    "It works for categorical data",
    "It always uses fewer classes",
    "It shows the actual data values within each class",
    "It shows the relationship between two variables"
   ],
   "a": [
    2
   ],
   "w": "Within each class interval the leaves preserve the actual values, and the display is easy to build by hand. Both displays are for quantitative data and show one variable only.",
   "bk": "Anderson 14e ch2",
   "lv": "recall"
  },
  {
   "id": "sfm-q0116",
   "topic": "Summarising",
   "q": "In a stretched stem-and-leaf display, where the stem 7 appears twice, the first 7 holds the values:",
   "c": [
    "70 to 74",
    "75 to 79",
    "70 to 79",
    "Only the value 70"
   ],
   "a": [
    0
   ],
   "w": "When a stem is listed twice, the first row takes leaves 0–4 and the second takes leaves 5–9, so the first 7 holds 70 to 74.",
   "bk": "Anderson 14e ch2",
   "lv": "recall"
  },
  {
   "id": "sfm-q0117",
   "topic": "Summarising",
   "q": "Which display is designed to show both the rank order and the shape of a quantitative data set at the same time?",
   "c": [
    "Pie chart",
    "Crosstabulation",
    "Stacked bar chart",
    "Stem-and-leaf display"
   ],
   "a": [
    3
   ],
   "w": "The book defines the stem-and-leaf display by exactly these two features: sorted leaves give rank order and the row lengths give shape. A histogram shows shape but not individual ranks.",
   "bk": "Anderson 14e ch2",
   "lv": "recall"
  },
  {
   "id": "sfm-q0118",
   "topic": "Summarising",
   "q": "A gym records each member's subscription plan (Basic or Premium) and city (North or South side). Basic: North 60, South 40. Premium: North 30, South 70. What percentage of Premium members are on the South side, and what percentage of South-side members are on Premium?",
   "c": [
    "70% and 63.6%",
    "63.6% and 70%",
    "70% and 70%",
    "35% and 63.6%"
   ],
   "a": [
    0
   ],
   "w": "Premium members total 30 + 70 = 100, so 70/100 = 70% are South side (a row percentage). South-side members total 40 + 70 = 110, so 70/110 ≈ 63.6% are Premium (a column percentage). Same cell, different denominators. 35% divides by the grand total of 200.",
   "bk": "Anderson 14e ch2",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0119",
   "topic": "Summarising",
   "q": "In a crosstabulation, what do the row totals and column totals in the margins give you?",
   "c": [
    "The strength of the relationship between the two variables",
    "The frequency distribution of each variable on its own",
    "The row percentages",
    "Evidence of Simpson's paradox"
   ],
   "a": [
    1
   ],
   "w": "The margins are each variable's own frequency distribution. They shed no light on the relationship; that comes from the interior cells and from row or column percentages.",
   "bk": "Anderson 14e ch2",
   "lv": "recall"
  },
  {
   "id": "sfm-q0120",
   "topic": "Summarising",
   "q": "An analyst wants to crosstabulate customer region (categorical) against annual spend in rupees (quantitative). What must be done first?",
   "c": [
    "Convert region into numeric codes",
    "Compute the mean spend for each region",
    "Group annual spend into classes",
    "Nothing; crosstabs need two categorical variables, so it cannot be done"
   ],
   "a": [
    2
   ],
   "w": "Crosstabs can mix categorical and quantitative variables, but the quantitative one must be grouped into classes (for example ₹0–9,999, ₹10,000–19,999) so it can serve as row or column categories.",
   "bk": "Anderson 14e ch2",
   "lv": "apply"
  },
  {
   "id": "sfm-q0121",
   "topic": "Summarising",
   "q": "In Simpson's paradox, what produces the reversal when separate crosstabulations are aggregated?",
   "c": [
    "Arithmetic errors in adding the tables",
    "Using row percentages instead of column percentages",
    "Too small a sample in one subgroup",
    "A hidden variable whose categories are spread unevenly across the groups being compared"
   ],
   "a": [
    3
   ],
   "w": "A hidden variable (in the book, the type of court) changes the outcome rate, and the groups have very different mixes of it. Aggregation blends that mix into the comparison. The arithmetic is correct; the comparison is confounded.",
   "bk": "Anderson 14e ch2",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0122",
   "topic": "Summarising",
   "q": "Why does the textbook say a bar chart is usually better than a pie chart for categorical data?",
   "c": [
    "People find it hard to perceive differences in area",
    "Pie charts cannot show percentages",
    "Bar charts need fewer categories",
    "Pie charts are only valid for quantitative data"
   ],
   "a": [
    0
   ],
   "w": "Pie charts can show percentages, and they are a legitimate categorical display, but readers judge area poorly. Bar lengths, especially in a sorted bar chart, are easier to compare.",
   "bk": "Anderson 14e ch2",
   "lv": "recall"
  },
  {
   "id": "sfm-q0123",
   "topic": "Summarising",
   "q": "A manager wants one chart comparing planned and actual sales for each of four regions. Which display fits best?",
   "c": [
    "Pie chart for each region",
    "Side-by-side bar chart",
    "Stem-and-leaf display",
    "Histogram of actual sales"
   ],
   "a": [
    1
   ],
   "w": "Placing planned and actual bars next to each other within each region allows comparison within and across regions at once; this is the book's planned-versus-actual example. A histogram shows one quantitative variable's distribution, not paired comparisons.",
   "bk": "Anderson 14e ch2",
   "lv": "apply"
  },
  {
   "id": "sfm-q0124",
   "topic": "Summarising",
   "q": "Which kind of data does the textbook say most often produces a histogram skewed to the right?",
   "c": [
    "Exam scores out of 100",
    "Adult heights",
    "SAT scores",
    "Salaries and purchase amounts"
   ],
   "a": [
    3
   ],
   "w": "Business data such as house prices, salaries and purchase amounts have a few very large values that stretch the right tail. Exam scores are the book's left-skew example; heights and SAT scores are roughly symmetric.",
   "bk": "Anderson 14e ch2",
   "lv": "recall"
  },
  {
   "id": "sfm-q0125",
   "topic": "Summarising",
   "q": "Audit times are recorded to the nearest tenth of a day and the first class should start at 10 with width 5. How should the first class be written?",
   "c": [
    "10–15",
    "10–14",
    "10.0–14.9",
    "10.0–15.0"
   ],
   "a": [
    2
   ],
   "w": "Class limits follow the precision of the data, so with tenths the first class is 10.0–14.9 and the next starts at 15.0. Writing 10–15 or 10.0–15.0 would let 15.0 fall in two classes.",
   "bk": "Anderson 14e ch2",
   "lv": "apply"
  },
  {
   "id": "sfm-q0126",
   "topic": "Summarising",
   "q": "A frequency table of customer complaints has 25 categories, many with only one or two complaints out of 400. What does the textbook suggest?",
   "c": [
    "Combine categories with about 5% or less into an 'Other' class",
    "Drop the small categories from the table",
    "Use a stem-and-leaf display instead",
    "Convert the counts to cumulative frequencies"
   ],
   "a": [
    0
   ],
   "w": "Small classes are usually merged into an aggregate 'Other' class, often those at 5% or less. Dropping them would make the frequencies stop summing to n.",
   "bk": "Anderson 14e ch2",
   "lv": "recall"
  },
  {
   "id": "sfm-q0127",
   "topic": "Summarising",
   "q": "A college plots the number of courses each student is enrolled in (1 to 6) as a histogram. A colleague says the bars must touch. What does the textbook's note say?",
   "c": [
    "Bars must always touch in any histogram",
    "For discrete data that can take only whole numbers, a gap between bars is also appropriate",
    "Gaps are needed only when the data are skewed",
    "The data are categorical, so a pie chart is required"
   ],
   "a": [
    1
   ],
   "w": "The no-gap convention reflects continuous data, where every value between classes is possible. For discrete quantitative data such as a course count, the book says a separation between bars is also appropriate. The data are quantitative, not categorical.",
   "bk": "Anderson 14e ch2",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0128",
   "topic": "Summarising",
   "q": "To examine whether the number of radio spots a shop buys in a week relates to that week's sales, which display should you start with?",
   "c": [
    "Pie chart of sales",
    "Stacked bar chart",
    "Scatter diagram with a trendline",
    "Cumulative frequency distribution"
   ],
   "a": [
    2
   ],
   "w": "Both variables are quantitative and the question is about their relationship, so a scatter diagram (with a trendline approximating the pattern) is the right display.",
   "bk": "Anderson 14e ch2",
   "lv": "apply"
  },
  {
   "id": "sfm-q0129",
   "topic": "Summarising",
   "q": "Which of these follows the textbook's guidelines for an effective chart?",
   "c": [
    "A 3-D bar chart to make the bars stand out",
    "A legend placed in a far corner to keep the plot area clear",
    "Several similar shades so the chart looks unified",
    "A clear title and labelled axes with units"
   ],
   "a": [
    3
   ],
   "w": "The guidelines are: a clear title, simplicity (no 3-D when 2-D suffices), labelled axes with units, distinct colours, and a legend placed close to the data.",
   "bk": "Anderson 14e ch2",
   "lv": "recall"
  },
  {
   "id": "sfm-q0130",
   "topic": "Summarising",
   "q": "A logistics head reviews a screen showing on-time delivery rate, cost per shipment and fleet utilisation, refreshed daily. This screen is best called:",
   "c": [
    "A crosstabulation",
    "A data dashboard tracking KPIs",
    "A stem-and-leaf display",
    "A frequency distribution"
   ],
   "a": [
    1
   ],
   "w": "A set of visual displays monitoring key performance indicators is a data dashboard. It may contain crosstabs or histograms, but the whole is the dashboard.",
   "bk": "Anderson 14e ch2",
   "lv": "apply"
  },
  {
   "id": "sfm-q0131",
   "topic": "Summarising",
   "q": "Two branches of a bank both show higher loan-approval rates for women than men. When the branches are combined, men show the higher approval rate. Which conclusion is sound?",
   "c": [
    "The combined table is correct, so men are favoured",
    "One of the branch tables must contain an error",
    "Approval rates cannot be compared across genders",
    "Check whether men applied mostly at the branch with the higher overall approval rate before concluding anything"
   ],
   "a": [
    3
   ],
   "w": "This is the pattern of Simpson's paradox: a hidden variable (branch) with very different application mixes can reverse the aggregate. Neither table need be wrong; the branch-level comparison controls for the hidden variable.",
   "bk": "Anderson 14e ch2",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0132",
   "topic": "Location",
   "q": "Using the textbook's method, what is the first quartile of: 12, 15, 18, 20, 22, 25, 28, 40?",
   "c": [
    "17.25",
    "16.5",
    "15.75",
    "15"
   ],
   "a": [
    2
   ],
   "w": "L25 = 0.25 × (8 + 1) = 2.25, so Q1 = 15 + 0.25(18 − 15) = 15.75. 17.25 is what Excel's QUARTILE.INC (and R's default quantile) gives; 16.5 is the median of the lower half, another convention the book does not use.",
   "bk": "Anderson 14e ch3",
   "lv": "apply"
  },
  {
   "id": "sfm-q0133",
   "topic": "Location",
   "q": "Which Excel function reproduces the textbook's percentile procedure, Lp = (p/100)(n + 1)?",
   "c": [
    "PERCENTILE.EXC",
    "PERCENTILE.INC",
    "PERCENTRANK",
    "MEDIAN"
   ],
   "a": [
    0
   ],
   "w": "The book states its method is the one used by PERCENTILE.EXC (and QUARTILE.EXC for quartiles). PERCENTILE.INC uses a different location and can differ for small samples.",
   "bk": "Anderson 14e ch3",
   "lv": "recall"
  },
  {
   "id": "sfm-q0134",
   "topic": "Location",
   "q": "A sorted sample has 19 values. Where does the 60th percentile lie by the textbook's method?",
   "c": [
    "Between the 11th and 12th values",
    "Exactly at the 12th value",
    "Exactly at the 11.4th value",
    "At the 60th value"
   ],
   "a": [
    1
   ],
   "w": "L60 = (60/100)(19 + 1) = 12, a whole number, so the 60th percentile is the 12th value with no interpolation. Using n instead of n + 1 gives 11.4.",
   "bk": "Anderson 14e ch3",
   "lv": "apply"
  },
  {
   "id": "sfm-q0135",
   "topic": "Location",
   "q": "A student's courses carry 4, 3 and 2 credits, with grade points 9, 7 and 8 on a 10-point scale. What is the credit-weighted grade point average?",
   "c": [
    "8.00",
    "8.33",
    "7.67",
    "8.11"
   ],
   "a": [
    3
   ],
   "w": "Weighted mean = (4×9 + 3×7 + 2×8)/(4 + 3 + 2) = 73/9 = 8.11. 8.00 is the unweighted mean of 9, 7 and 8, which ignores that the 4-credit course matters most.",
   "bk": "Anderson 14e ch3",
   "lv": "apply"
  },
  {
   "id": "sfm-q0136",
   "topic": "Location",
   "q": "An investment gains 20% in year 1 and loses 20% in year 2. What is its mean annual growth rate?",
   "c": [
    "0%",
    "About −2.0%",
    "About −4.0%",
    "About +2.0%"
   ],
   "a": [
    1
   ],
   "w": "Growth factors 1.2 and 0.8 multiply to 0.96; the geometric mean is √0.96 = 0.9798, a rate of about −2.0% a year. 0% is the arithmetic mean of the returns; −4% is the total two-year loss, not the annual rate.",
   "bk": "Anderson 14e ch3",
   "lv": "apply"
  },
  {
   "id": "sfm-q0137",
   "topic": "Location",
   "q": "A stock falls 35% in one year. What is that year's growth factor?",
   "c": [
    "0.35",
    "−0.35",
    "0.65",
    "1.35"
   ],
   "a": [
    2
   ],
   "w": "Growth factor = 1 + rate = 1 − 0.35 = 0.65. A growth factor below 1 signals decline and can never be negative.",
   "bk": "Anderson 14e ch3",
   "lv": "recall"
  },
  {
   "id": "sfm-q0138",
   "topic": "Location",
   "q": "To compute a 5% trimmed mean of 20 observations, how many values are removed?",
   "c": [
    "1 smallest and 1 largest",
    "1 value in total",
    "5 smallest and 5 largest",
    "Only values more than 3 standard deviations from the mean"
   ],
   "a": [
    0
   ],
   "w": "0.05 × 20 = 1, so one value is trimmed from each end and the mean of the remaining 18 is taken. Trimming is by percentage, not by an outlier rule.",
   "bk": "Anderson 14e ch3",
   "lv": "recall"
  },
  {
   "id": "sfm-q0139",
   "topic": "Location",
   "q": "In a sample of 8 order values, one value is corrected upward by ₹40. What happens to the sample mean?",
   "c": [
    "It is unchanged",
    "It rises by ₹40",
    "It rises by ₹8",
    "It rises by ₹5"
   ],
   "a": [
    3
   ],
   "w": "The total rises by 40, and the mean is total ÷ 8, so it rises by 40/8 = ₹5. The median might not change at all, which is why the median is more resistant.",
   "bk": "Anderson 14e ch3",
   "lv": "apply"
  },
  {
   "id": "sfm-q0140",
   "topic": "Spread & shape",
   "q": "For the sample 4, 8, 6, 2, what is the sample variance?",
   "c": [
    "5.00",
    "6.67",
    "2.58",
    "20.00"
   ],
   "a": [
    1
   ],
   "w": "Mean = 5; deviations −1, 3, 1, −3; squared deviations sum to 20; s² = 20/(4 − 1) = 6.67. Dividing by n gives 5, the population formula. 2.58 is the standard deviation.",
   "bk": "Anderson 14e ch3",
   "lv": "apply"
  },
  {
   "id": "sfm-q0141",
   "topic": "Spread & shape",
   "q": "Add up every deviation from the mean, Σ(xᵢ − x̄), for any data set at all. The total is always:",
   "c": [
    "The variance",
    "n − 1",
    "Zero",
    "The range"
   ],
   "a": [
    2
   ],
   "w": "Positive and negative deviations always cancel exactly, which is why the variance squares them before adding.",
   "bk": "Anderson 14e ch3",
   "lv": "recall"
  },
  {
   "id": "sfm-q0142",
   "topic": "Spread & shape",
   "q": "Fund P has a mean annual return of 12% with standard deviation 6%. Fund Q has mean 20% with standard deviation 8%. Which statement is correct?",
   "c": [
    "P is less variable because its standard deviation is lower",
    "Both are equally variable relative to their means",
    "Q has the higher coefficient of variation",
    "Q is less variable relative to its mean: CV 40% against 50%"
   ],
   "a": [
    3
   ],
   "w": "CV(P) = 6/12 × 100 = 50%; CV(Q) = 8/20 × 100 = 40%. Q has the larger absolute spread but the smaller relative spread. Comparing standard deviations alone ignores that the means differ.",
   "bk": "Anderson 14e ch3",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0143",
   "topic": "Spread & shape",
   "q": "Monthly salaries have mean ₹40,000 and standard deviation ₹6,000. What is the coefficient of variation as the textbook defines it?",
   "c": [
    "15%",
    "0.15 rupees",
    "6.67%",
    "₹6,000"
   ],
   "a": [
    0
   ],
   "w": "CV = (6,000/40,000) × 100% = 15%. The book expresses CV as a percentage; inverting the ratio gives 6.67%.",
   "bk": "Anderson 14e ch3",
   "lv": "apply"
  },
  {
   "id": "sfm-q0144",
   "topic": "Spread & shape",
   "q": "Test scores have mean 70 and standard deviation 8. A student scores 82. What is the z-score?",
   "c": [
    "1.2",
    "12",
    "0.67",
    "1.5"
   ],
   "a": [
    3
   ],
   "w": "z = (82 − 70)/8 = 1.5: the score is one and a half standard deviations above the mean. 12 is the raw deviation, not standardised.",
   "bk": "Anderson 14e ch3",
   "lv": "apply"
  },
  {
   "id": "sfm-q0145",
   "topic": "Spread & shape",
   "q": "Daily footfall at a store has mean 70 and standard deviation 8, with an unknown distribution shape. By Chebyshev's theorem, at least what percentage of days have footfall between 50 and 90?",
   "c": [
    "84%",
    "95%",
    "75%",
    "60%"
   ],
   "a": [
    0
   ],
   "w": "50 and 90 are 20/8 = 2.5 standard deviations from the mean, so at least 1 − 1/2.5² = 1 − 0.16 = 84%. 95% would need a bell shape (empirical rule, and for ±2 s.d.), and 75% is Chebyshev's figure for z = 2.",
   "bk": "Anderson 14e ch3",
   "lv": "apply"
  },
  {
   "id": "sfm-q0146",
   "topic": "Spread & shape",
   "q": "For data of any shape with mean 70 and standard deviation 8, what can Chebyshev's theorem say about the share of values between 58 and 82?",
   "c": [
    "Nothing, because z must be a whole number",
    "At least 55.6%",
    "About 68%",
    "At least 75%"
   ],
   "a": [
    1
   ],
   "w": "z = 12/8 = 1.5 and Chebyshev only needs z > 1: at least 1 − 1/2.25 = 55.6%. The empirical rule's 68% applies to bell-shaped data within 1 s.d.",
   "bk": "Anderson 14e ch3",
   "lv": "apply"
  },
  {
   "id": "sfm-q0147",
   "topic": "Spread & shape",
   "q": "A bakery's daily sales are bell-shaped with mean ₹500 and standard deviation ₹40. Using the empirical rule, roughly what percentage of days have sales between ₹460 and ₹580?",
   "c": [
    "68%",
    "95%",
    "81.5%",
    "47.5%"
   ],
   "a": [
    2
   ],
   "w": "460 is 1 s.d. below the mean (half of 68% = 34% between 460 and 500) and 580 is 2 s.d. above (half of 95% = 47.5% between 500 and 580). Total 34% + 47.5% = 81.5%.",
   "bk": "Anderson 14e ch3",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0148",
   "topic": "Spread & shape",
   "q": "In a rent data set, Q1 = 20.75, Q3 = 27.75, the mean is 26.8 and s = 10.53. Which statement about a rent of 55 is correct?",
   "c": [
    "It is an outlier by both rules",
    "It is an outlier by neither rule",
    "It is an outlier by the z-score rule only",
    "It is an outlier by the IQR rule but not by the z-score rule"
   ],
   "a": [
    3
   ],
   "w": "Upper limit = 27.75 + 1.5 × 7 = 38.25, and 55 is above it. But z = (55 − 26.8)/10.53 ≈ 2.68, inside ±3. The book notes the two rules need not flag the same values.",
   "bk": "Anderson 14e ch3",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0149",
   "topic": "Spread & shape",
   "q": "Software reports a skewness of +1.62 for daily purchase amounts. Which measure of location should a manager report?",
   "c": [
    "The median, because the data are highly skewed right",
    "The mean, because skewness is positive",
    "The mode, because the data are quantitative",
    "The range, because it captures the tail"
   ],
   "a": [
    0
   ],
   "w": "Positive skewness means a long right tail that pulls the mean upward; the book recommends the median for highly skewed data. The range is a measure of spread, not location.",
   "bk": "Anderson 14e ch3",
   "lv": "apply"
  },
  {
   "id": "sfm-q0150",
   "topic": "Spread & shape",
   "q": "In the textbook's boxplot procedure, where do the whiskers end?",
   "c": [
    "At Q1 − 1.5 IQR and Q3 + 1.5 IQR",
    "At the smallest and largest data values, including outliers",
    "At the most extreme data values that lie inside the outlier limits",
    "At one standard deviation from the median"
   ],
   "a": [
    2
   ],
   "w": "The limits are computed but usually not drawn; whiskers stop at the most extreme actual observations inside them, and anything beyond is plotted as an outlier.",
   "bk": "Anderson 14e ch3",
   "lv": "recall"
  },
  {
   "id": "sfm-q0151",
   "topic": "Association",
   "q": "A researcher re-records height in centimetres instead of metres, leaving weight in kilograms. What happens to the covariance and correlation between height and weight?",
   "c": [
    "Both are unchanged",
    "Covariance is 100 times larger; correlation is unchanged",
    "Both are 100 times larger",
    "Covariance is unchanged; correlation is 100 times larger"
   ],
   "a": [
    1
   ],
   "w": "Each height deviation becomes 100 times larger, so the covariance scales by 100. Correlation divides by the standard deviation of height, which also scales by 100, so it is unchanged. That is why correlation, not covariance, measures strength.",
   "bk": "Anderson 14e ch3",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0152",
   "topic": "Association",
   "q": "A shop's daily heating-and-cooling spend plotted against outside temperature forms a clear U shape, and r = −0.007. What should you conclude?",
   "c": [
    "Temperature has no effect on spending",
    "The data must contain an error",
    "There is a strong negative relationship",
    "There is no linear relationship, but there is a strong nonlinear one"
   ],
   "a": [
    3
   ],
   "w": "r measures only linear association. Spending falls as heating needs drop and then rises with cooling needs, a curve that a correlation near zero cannot detect.",
   "bk": "Anderson 14e ch3",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0153",
   "topic": "Association",
   "q": "Five weeks of data give Σ(xᵢ − x̄)(yᵢ − ȳ) = 100, sx = 2.74 and sy = 9.27. What are the sample covariance and correlation?",
   "c": [
    "Covariance 20, r = 0.79",
    "Covariance 25, r = 0.98",
    "Covariance 100, r = 3.94",
    "Covariance 25, r = 0.25"
   ],
   "a": [
    1
   ],
   "w": "sxy = 100/(5 − 1) = 25 and r = 25/(2.74 × 9.27) = 0.98. Dividing by n gives 20; r can never exceed 1, so 3.94 signals a missing division.",
   "bk": "Anderson 14e ch3",
   "lv": "apply"
  },
  {
   "id": "sfm-q0154",
   "topic": "Association",
   "q": "In Excel, which function returns the sample covariance that matches the textbook's formula with n − 1?",
   "c": [
    "COVARIANCE.P",
    "CORREL",
    "COVARIANCE.S",
    "VAR.S"
   ],
   "a": [
    2
   ],
   "w": "COVARIANCE.S divides by n − 1; COVARIANCE.P divides by N for a population. CORREL returns the correlation coefficient and VAR.S a single variable's variance.",
   "bk": "Anderson 14e ch3",
   "lv": "recall"
  },
  {
   "id": "sfm-q0155",
   "topic": "Location",
   "q": "Which symbol denotes the population standard deviation?",
   "c": [
    "σ",
    "s",
    "μ",
    "ρ"
   ],
   "a": [
    0
   ],
   "w": "σ (sigma) is the population standard deviation and s the sample one. μ is the population mean and ρ the population correlation coefficient.",
   "bk": "Anderson 14e ch3",
   "lv": "recall"
  },
  {
   "id": "sfm-q0156",
   "topic": "Probability I",
   "q": "A company must choose 3 of its 10 regional managers to form a pricing committee in which all members have equal roles. How many different committees are possible?",
   "c": [
    "720",
    "30",
    "120",
    "1,000"
   ],
   "a": [
    2
   ],
   "w": "Order does not matter, so use combinations: C(10,3) = 10!/(3!·7!) = 120. 720 is the permutation count, which would apply only if the three seats were different roles.",
   "bk": "Anderson 14e ch4",
   "lv": "apply"
  },
  {
   "id": "sfm-q0157",
   "topic": "Probability I",
   "q": "From 7 volunteers, a club elects a president, a secretary and a treasurer (one person per post). How many outcomes are possible?",
   "c": [
    "35",
    "210",
    "343",
    "21"
   ],
   "a": [
    1
   ],
   "w": "Posts are distinct, so order matters: P(7,3) = 7!/4! = 7 × 6 × 5 = 210. 35 is C(7,3), which ignores who gets which post; 343 = 7³ wrongly allows one person to hold several posts.",
   "bk": "Anderson 14e ch4",
   "lv": "apply"
  },
  {
   "id": "sfm-q0158",
   "topic": "Probability I",
   "q": "An experiment tosses three coins and then rolls one die. How many experimental outcomes are there?",
   "c": [
    "12",
    "9",
    "18",
    "48"
   ],
   "a": [
    3
   ],
   "w": "By the counting rule for multiple-step experiments: 2 × 2 × 2 × 6 = 48. Adding the step counts (2 + 2 + 2 + 6 = 12) is the common error.",
   "bk": "Anderson 14e ch4",
   "lv": "apply"
  },
  {
   "id": "sfm-q0159",
   "topic": "Probability I",
   "q": "By definition, 0! equals:",
   "c": [
    "1",
    "0",
    "Undefined",
    "Infinity"
   ],
   "a": [
    0
   ],
   "w": "0! = 1 by definition, which keeps formulas such as C(N, N) = 1 working.",
   "bk": "Anderson 14e ch4",
   "lv": "recall"
  },
  {
   "id": "sfm-q0160",
   "topic": "Probability I",
   "q": "A student says: 'Tossing two fair coins gives 0, 1 or 2 heads, so P(exactly one head) = 1/3.' What is wrong?",
   "c": [
    "Nothing; the three outcomes are equally likely",
    "The outcomes are not equally likely: there are four sample points and two give one head, so the probability is 1/2",
    "Coin tosses need the subjective method",
    "The answer should be 1/4"
   ],
   "a": [
    1
   ],
   "w": "The sample space is {HH, HT, TH, TT}. One head occurs at HT and TH, so P = 2/4 = 0.5. The classical method needs equally likely outcomes; '0, 1, 2 heads' are not.",
   "bk": "Anderson 14e ch4",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0161",
   "topic": "Probability I",
   "q": "A project has four sample points with probabilities: (design 2 mo, build 5 mo) 0.20; (2, 6) 0.30; (3, 5) 0.25; (3, 6) 0.25. What is the probability the project takes 8 months or less in total?",
   "c": [
    "0.50",
    "0.45",
    "0.75",
    "0.25"
   ],
   "a": [
    2
   ],
   "w": "Totals: (2,5) = 7, (2,6) = 8, (3,5) = 8, (3,6) = 9. The event '8 months or less' contains the first three, so P = 0.20 + 0.30 + 0.25 = 0.75. An event's probability is the sum of its sample-point probabilities.",
   "bk": "Anderson 14e ch4",
   "lv": "apply"
  },
  {
   "id": "sfm-q0162",
   "topic": "Probability I",
   "q": "An analyst assigns probabilities to the three possible outcomes of a product launch. Which assignment breaks the basic requirements for assigning probabilities?",
   "c": [
    "0.5, 0.3, 0.2",
    "0.6, 0.4, 0.0",
    "1/3, 1/3, 1/3",
    "0.4, 0.4, 0.3"
   ],
   "a": [
    3
   ],
   "w": "Probabilities must each lie in [0, 1] and sum to 1. 0.4 + 0.4 + 0.3 = 1.1. A probability of 0 is allowed; it means the outcome is judged impossible.",
   "bk": "Anderson 14e ch4",
   "lv": "apply"
  },
  {
   "id": "sfm-q0163",
   "topic": "Probability I",
   "q": "Two co-founders estimate the chance that an investor will fund them: one says 0.8, the other 0.6. Which statement fits the textbook?",
   "c": [
    "Both can be valid subjective probabilities, provided each person's assignments meet the basic requirements",
    "Only the average, 0.7, is a valid probability",
    "Subjective probabilities are invalid when two people disagree",
    "They must use the classical method because there are two outcomes"
   ],
   "a": [
    0
   ],
   "w": "Subjective probability expresses personal degree of belief, so different people can assign different values. The classical method would need the two outcomes to be equally likely, which is not given.",
   "bk": "Anderson 14e ch4",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0164",
   "topic": "Probability I",
   "q": "A lottery draws 6 numbers from 1 to 45, order not mattering. What is the probability that one ticket wins?",
   "c": [
    "1 in 270",
    "1 in 8,145,060",
    "6 in 45",
    "1 in 5,864,443,200"
   ],
   "a": [
    1
   ],
   "w": "The number of possible draws is C(45,6) = 8,145,060, each equally likely, so one ticket has a 1 in 8,145,060 chance. 5,864,443,200 is the permutation count, which treats order as mattering.",
   "bk": "Anderson 14e ch4",
   "lv": "apply"
  },
  {
   "id": "sfm-q0165",
   "topic": "Probability I",
   "q": "In a tree diagram for a multiple-step experiment, each complete path from the leftmost node to a right-hand end represents:",
   "c": [
    "One step of the experiment",
    "A conditional probability",
    "One experimental outcome (sample point)",
    "The whole sample space"
   ],
   "a": [
    2
   ],
   "w": "Each path is a unique sequence of step outcomes, that is, one sample point. The full set of end points is the sample space.",
   "bk": "Anderson 14e ch4",
   "lv": "recall"
  },
  {
   "id": "sfm-q0166",
   "topic": "Probability II",
   "q": "At a tea stall, 40% of customers buy tea, 25% buy biscuits and 15% buy both. What is the probability that a customer buys tea or biscuits?",
   "c": [
    "0.65",
    "0.50",
    "0.10",
    "0.80"
   ],
   "a": [
    1
   ],
   "w": "Addition law: 0.40 + 0.25 − 0.15 = 0.50. 0.65 forgets to subtract the overlap, which would count the 15% who buy both twice.",
   "bk": "Anderson 14e ch4",
   "lv": "apply"
  },
  {
   "id": "sfm-q0167",
   "topic": "Probability II",
   "q": "P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.7. Which statement is correct?",
   "c": [
    "A and B are mutually exclusive",
    "A and B are dependent because P(A ∪ B) ≠ 1",
    "A and B are independent, because P(A ∩ B) = 0.2 = P(A)P(B)",
    "Independence cannot be judged without P(A | B) given directly"
   ],
   "a": [
    2
   ],
   "w": "Rearranging the addition law: P(A ∩ B) = 0.5 + 0.4 − 0.7 = 0.2, which equals 0.5 × 0.4, so the events are independent. They are not mutually exclusive since the intersection is not zero.",
   "bk": "Anderson 14e ch4",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0168",
   "topic": "Probability II",
   "q": "Of 800 employees, 200 work in sales. 60 sales staff and 90 non-sales staff received a bonus. What is P(bonus | sales)?",
   "c": [
    "0.30",
    "0.075",
    "0.1875",
    "0.40"
   ],
   "a": [
    0
   ],
   "w": "Condition on the 200 sales staff: 60/200 = 0.30. 0.075 is the joint probability 60/800; 0.1875 is the marginal P(bonus) = 150/800; 0.40 is the share of bonuses that went to sales (60/150), which is P(sales | bonus).",
   "bk": "Anderson 14e ch4",
   "lv": "apply"
  },
  {
   "id": "sfm-q0169",
   "topic": "Probability II",
   "q": "In a joint probability table, how are the marginal probabilities obtained?",
   "c": [
    "By multiplying the row and column totals",
    "By dividing each joint probability by the grand total",
    "By taking the largest value in each row",
    "By summing the joint probabilities across a row or down a column"
   ],
   "a": [
    3
   ],
   "w": "Each marginal probability is the sum of the joint probabilities in its row or column, for example P(promoted) = P(man ∩ promoted) + P(woman ∩ promoted).",
   "bk": "Anderson 14e ch4",
   "lv": "recall"
  },
  {
   "id": "sfm-q0170",
   "topic": "Probability II",
   "q": "A probability of the form P(A ∩ B), the chance that two events both occur, is called a:",
   "c": [
    "Marginal probability",
    "Joint probability",
    "Posterior probability",
    "Conditional probability"
   ],
   "a": [
    1
   ],
   "w": "The probability of an intersection is a joint probability; joint probabilities fill the body of a joint probability table.",
   "bk": "Anderson 14e ch4",
   "lv": "recall"
  },
  {
   "id": "sfm-q0171",
   "topic": "Probability II",
   "q": "A bank's fraud filter flags 90% of fraudulent payments. A manager concludes that 90% of flagged payments are fraudulent. Why is this wrong?",
   "c": [
    "Because the filter's rate should be 1 − 0.90",
    "It confuses P(flagged | fraud) with P(fraud | flagged); the second also depends on how rare fraud is and how often genuine payments are flagged",
    "Because fraud and flagging are mutually exclusive",
    "It is correct whenever the filter is accurate"
   ],
   "a": [
    1
   ],
   "w": "Reversing a conditional needs Bayes' theorem: P(fraud | flagged) = P(fraud)P(flagged | fraud) ÷ P(flagged). With rare fraud, most flagged payments can still be genuine.",
   "bk": "Anderson 14e ch4",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0172",
   "topic": "Probability II",
   "q": "4% of a lender's borrowers default. A late payment occurs for 90% of defaulters and 15% of non-defaulters. A borrower has just paid late. What is the posterior probability that this borrower will default?",
   "c": [
    "0.04",
    "0.90",
    "0.20",
    "0.036"
   ],
   "a": [
    2
   ],
   "w": "Joints: 0.04 × 0.90 = 0.036 and 0.96 × 0.15 = 0.144; P(late) = 0.180. Posterior = 0.036/0.180 = 0.20. 0.036 is the joint, not the posterior; 0.90 is P(late | default).",
   "bk": "Anderson 14e ch4",
   "lv": "apply"
  },
  {
   "id": "sfm-q0173",
   "topic": "Probability II",
   "q": "True or false: an event A and its complement Aᶜ can always serve as the events in Bayes' theorem.",
   "c": [
    "True",
    "False"
   ],
   "a": [
    0
   ],
   "w": "True. A and Aᶜ are mutually exclusive and their union is the whole sample space, which are exactly the conditions Bayes' theorem needs.",
   "bk": "Anderson 14e ch4",
   "lv": "recall"
  },
  {
   "id": "sfm-q0174",
   "topic": "Probability II",
   "q": "70% of households in a city have broadband, and 40% of broadband households also take an OTT streaming bundle. What is the probability that a household has both?",
   "c": [
    "0.28",
    "0.40",
    "0.70",
    "0.57"
   ],
   "a": [
    0
   ],
   "w": "Multiplication law: P(broadband ∩ OTT) = P(broadband) × P(OTT | broadband) = 0.70 × 0.40 = 0.28. 0.57 is 0.40/0.70, a division where a multiplication is needed.",
   "bk": "Anderson 14e ch4",
   "lv": "apply"
  },
  {
   "id": "sfm-q0175",
   "topic": "Probability II",
   "q": "75% of customers at a petrol pump pay by UPI, independently of one another. What is the probability that the next three customers all pay by UPI?",
   "c": [
    "0.75",
    "2.25",
    "0.5625",
    "About 0.42"
   ],
   "a": [
    3
   ],
   "w": "For independent events multiply: 0.75³ = 0.421875 ≈ 0.42. 0.5625 is for two customers; 2.25 adds the probabilities, which can never exceed 1.",
   "bk": "Anderson 14e ch4",
   "lv": "apply"
  },
  {
   "id": "sfm-q0176",
   "topic": "Probability II",
   "q": "Two independent delivery partners each fail to show up on 5% of days. What is the probability that at least one fails to show up on a given day?",
   "c": [
    "0.10",
    "0.0975",
    "0.0025",
    "0.9025"
   ],
   "a": [
    1
   ],
   "w": "P(neither fails) = 0.95 × 0.95 = 0.9025, so P(at least one fails) = 1 − 0.9025 = 0.0975. Adding 0.05 + 0.05 = 0.10 double-counts the days both fail (0.0025).",
   "bk": "Anderson 14e ch4",
   "lv": "apply"
  },
  {
   "id": "sfm-q0177",
   "topic": "Probability II",
   "q": "In a probability tree used for Bayes' theorem, which probabilities sit on the first-stage branches, and how is each end-point probability found?",
   "c": [
    "Posterior probabilities; by adding along the path",
    "Conditional probabilities; by dividing along the path",
    "Prior probabilities; by multiplying the probabilities along the path",
    "Marginal probabilities; by taking the larger branch"
   ],
   "a": [
    2
   ],
   "w": "First-stage branches carry the priors P(Aᵢ), second-stage branches the conditionals P(B | Aᵢ). Multiplying along a path gives the joint probability P(Aᵢ ∩ B); posteriors come later by dividing joints by their sum.",
   "bk": "Anderson 14e ch4",
   "lv": "recall"
  },
  {
   "id": "sfm-q0178",
   "topic": "Probability II",
   "q": "Promotion data show P(promoted) = 0.27, P(promoted | man) = 0.30 and P(promoted | woman) = 0.15. What can be concluded?",
   "c": [
    "Promotion and gender are independent because 0.27 lies between 0.15 and 0.30",
    "Promotion and gender are mutually exclusive",
    "Nothing, because marginal probabilities are needed",
    "Promotion and gender are dependent, since P(promoted | man) ≠ P(promoted)"
   ],
   "a": [
    3
   ],
   "w": "Independence requires P(A | B) = P(A). Here the conditional probabilities differ from 0.27 and from each other, so the events are dependent. The book notes this supports, but does not prove, a discrimination claim.",
   "bk": "Anderson 14e ch4",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0179",
   "topic": "Distributions",
   "q": "A retailer converts five years of daily footfall records into relative frequencies and uses them as probabilities for tomorrow's footfall. The textbook calls the result a(n):",
   "c": [
    "Empirical discrete distribution",
    "Discrete uniform distribution",
    "Subjective probability distribution",
    "Binomial distribution"
   ],
   "a": [
    0
   ],
   "w": "Relative frequencies from observed data give an empirical discrete distribution. It is not uniform, because the days with each footfall level are not equally common, and not subjective, because no one's judgement is involved.",
   "bk": "Anderson 14e ch5",
   "lv": "recall"
  },
  {
   "id": "sfm-q0180",
   "topic": "Distributions",
   "q": "A table gives x = 1, 2, 3 with f(x) = 0.5, 0.6 and −0.1. Is it a valid discrete probability distribution?",
   "c": [
    "Yes — the probabilities add up to 1",
    "Yes — every value of x has a probability listed",
    "No — one probability is negative",
    "No — the x values must start at 0"
   ],
   "a": [
    2
   ],
   "w": "Both conditions must hold: f(x) ≥ 0 for every x and Σf(x) = 1. The sum is 1, which is tempting, but f(3) = −0.1 breaks the first condition. Values of x need not start at 0.",
   "bk": "Anderson 14e ch5",
   "lv": "apply"
  },
  {
   "id": "sfm-q0181",
   "topic": "Distributions",
   "q": "A Jaipur caterer's daily bulk orders x have f(0) = 0.2, f(1) = 0.4, f(2) = 0.3, f(3) = 0.1. What is E(x)?",
   "c": [
    "1.5",
    "1.3",
    "1.0",
    "0.25"
   ],
   "a": [
    1
   ],
   "w": "E(x) = Σx·f(x) = 0 + 0.4 + 0.6 + 0.3 = 1.3. 1.5 is the plain average of the x values (ignores the probabilities); 1.0 is the most likely value, which is the mode, not the mean.",
   "bk": "Anderson 14e ch5",
   "lv": "apply"
  },
  {
   "id": "sfm-q0182",
   "topic": "Distributions",
   "q": "For the same caterer (f(0) = 0.2, f(1) = 0.4, f(2) = 0.3, f(3) = 0.1, mean 1.3), what is the standard deviation of daily orders?",
   "c": [
    "0.81",
    "2.5",
    "1.58",
    "0.9"
   ],
   "a": [
    3
   ],
   "w": "E(x²) = 0 + 0.4 + 1.2 + 0.9 = 2.5, so Var(x) = 2.5 − 1.3² = 0.81 and σ = √0.81 = 0.9. 0.81 is the variance, not the standard deviation; 2.5 is E(x²) before subtracting μ².",
   "bk": "Anderson 14e ch5",
   "lv": "apply"
  },
  {
   "id": "sfm-q0183",
   "topic": "Distributions",
   "q": "Two expansion plans have the same expected annual profit of ₹40 lakh. Plan A has a profit standard deviation of ₹5 lakh, Plan B of ₹18 lakh. Which plan does a risk-averse manager prefer, and why?",
   "c": [
    "Plan A — same expected profit with less variability",
    "Plan B — a larger standard deviation means a larger possible profit",
    "Either — equal expected values make them equivalent",
    "Neither — the expected values must differ before a choice can be made"
   ],
   "a": [
    0
   ],
   "w": "With equal expected values, the standard deviation measures risk, and a risk-averse manager picks the smaller one. Expected value alone ignores dispersion, so the plans are not equivalent.",
   "bk": "Anderson 14e ch5",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0184",
   "topic": "Distributions",
   "q": "Which property is needed for a binomial experiment but NOT for a Bernoulli process?",
   "c": [
    "Two possible outcomes on each trial",
    "A constant probability of success",
    "Independent trials",
    "A fixed number n of identical trials"
   ],
   "a": [
    3
   ],
   "w": "Two outcomes, constant p and independence define a Bernoulli process. Fixing the number of trials n is what turns it into a binomial experiment.",
   "bk": "Anderson 14e ch5",
   "lv": "recall"
  },
  {
   "id": "sfm-q0185",
   "topic": "Distributions",
   "q": "A field agent's chance of selling a policy is 0.10 on the first visit but falls to 0.05 by the tenth as fatigue sets in. Each family still decides independently. Which binomial property fails?",
   "c": [
    "Independence of trials",
    "Constant probability of success (stationarity)",
    "Two outcomes per trial",
    "A fixed number of trials"
   ],
   "a": [
    1
   ],
   "w": "The success probability drifts from trial to trial, so stationarity fails. Independence still holds — the families do not influence each other — which is exactly why the two conditions are easy to confuse.",
   "bk": "Anderson 14e ch5",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0186",
   "topic": "Distributions",
   "q": "10% of shirts from a Surat unit have a stitching defect. In a random sample of 5 shirts, what is P(exactly 1 defective)?",
   "c": [
    "0.0656",
    "0.5905",
    "0.3281",
    "0.4095"
   ],
   "a": [
    2
   ],
   "w": "f(1) = 5 × 0.1 × 0.9⁴ = 5 × 0.06561 = 0.3281. 0.0656 forgets the 5 possible positions of the defective shirt; 0.5905 is P(0) and 0.4095 is P(at least 1).",
   "bk": "Anderson 14e ch5",
   "lv": "apply"
  },
  {
   "id": "sfm-q0187",
   "topic": "Distributions",
   "q": "An auditor finds an error in 25% of expense claims. If 4 claims are checked independently, what is P(at least one has an error)?",
   "c": [
    "0.3164",
    "0.6836",
    "0.4219",
    "1.0000"
   ],
   "a": [
    1
   ],
   "w": "P(at least 1) = 1 − P(0) = 1 − 0.75⁴ = 1 − 0.3164 = 0.6836. 0.4219 is P(exactly 1); adding 0.25 four times to get 1 treats the events as mutually exclusive, which they are not.",
   "bk": "Anderson 14e ch5",
   "lv": "apply"
  },
  {
   "id": "sfm-q0188",
   "topic": "Distributions",
   "q": "Your binomial table only covers p up to 0.50. How do you find P(exactly 7 successes) for n = 10 and p = 0.70?",
   "c": [
    "Read P(3 successes) with n = 10 and p = 0.30",
    "Read P(7 successes) with n = 10 and p = 0.30",
    "Read P(3 successes) with n = 10 and p = 0.70",
    "It cannot be found from that table"
   ],
   "a": [
    0
   ],
   "w": "Seven successes at p = 0.70 is the same event as three failures, and failures occur with probability 0.30. So look up x = 3 at p = 0.30 (both equal 0.2668).",
   "bk": "Anderson 14e ch5",
   "lv": "recall"
  },
  {
   "id": "sfm-q0189",
   "topic": "Distributions",
   "q": "15% of 400 shoppers visiting a store are expected to buy, independently. What is the standard deviation of the number of buyers?",
   "c": [
    "51",
    "60",
    "7.14",
    "2.45"
   ],
   "a": [
    2
   ],
   "w": "σ = √[np(1 − p)] = √(400 × 0.15 × 0.85) = √51 = 7.14. 51 is the variance and 60 is the mean np.",
   "bk": "Anderson 14e ch5",
   "lv": "apply"
  },
  {
   "id": "sfm-q0190",
   "topic": "Distributions",
   "q": "Using a cumulative binomial table that lists P(x ≤ k), the probability of exactly 3 successes is:",
   "c": [
    "The entry for k = 3",
    "The entry for k = 3 minus the entry for k = 2",
    "1 minus the entry for k = 3",
    "The entry for k = 3 minus the entry for k = 4"
   ],
   "a": [
    1
   ],
   "w": "P(x = 3) = P(x ≤ 3) − P(x ≤ 2). The k = 3 entry alone also includes 0, 1 and 2 successes.",
   "bk": "Anderson 14e ch5",
   "lv": "recall"
  },
  {
   "id": "sfm-q0191",
   "topic": "Distributions",
   "q": "Which Excel formula returns P(x ≤ 4) for a binomial variable with n = 12 and p = 0.3?",
   "c": [
    "=BINOM.DIST(4,12,0.3,FALSE)",
    "=BINOM.DIST(12,4,0.3,TRUE)",
    "=POISSON.DIST(4,3.6,TRUE)",
    "=BINOM.DIST(4,12,0.3,TRUE)"
   ],
   "a": [
    3
   ],
   "w": "The argument order is x, n, p, cumulative, and TRUE gives the cumulative P(≤ x). FALSE would return P(exactly 4); the Poisson formula is a different model.",
   "bk": "Anderson 14e ch5",
   "lv": "recall"
  },
  {
   "id": "sfm-q0192",
   "topic": "Distributions",
   "q": "Customer complaints reach a helpdesk at a mean of 6 per hour, meeting the Poisson conditions. What is P(no complaints in a 20-minute window)?",
   "c": [
    "0.1353",
    "0.0025",
    "0.2707",
    "0.3333"
   ],
   "a": [
    0
   ],
   "w": "Rescale first: μ = 6 × (20/60) = 2, so P(0) = e⁻² = 0.1353. Using μ = 6 gives e⁻⁶ = 0.0025, the probability for a whole hour. 0.2707 is P(exactly 1) at μ = 2.",
   "bk": "Anderson 14e ch5",
   "lv": "apply"
  },
  {
   "id": "sfm-q0193",
   "topic": "Distributions",
   "q": "A Poisson variable has mean 4. What is its standard deviation?",
   "c": [
    "4",
    "16",
    "2",
    "1.6"
   ],
   "a": [
    2
   ],
   "w": "For a Poisson the variance equals the mean, so σ² = 4 and σ = √4 = 2. Answering 4 confuses the variance with the standard deviation.",
   "bk": "Anderson 14e ch5",
   "lv": "recall"
  },
  {
   "id": "sfm-q0194",
   "topic": "Distributions",
   "q": "Which variable is better modelled by a Poisson distribution than by a binomial?",
   "c": [
    "The number of 20 surveyed customers who prefer a brand",
    "The number of potholes in a 5 km stretch of road",
    "The number of heads in 10 coin tosses",
    "The number of 12 loan files that contain an error"
   ],
   "a": [
    1
   ],
   "w": "Potholes are occurrences in an interval of space with no fixed number of trials — the Poisson setting. The other three count successes in a fixed number n of trials, which is binomial.",
   "bk": "Anderson 14e ch5",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0195",
   "topic": "Distributions",
   "q": "A dispatch centre receives a mean of 3 urgent orders a day (Poisson). What is P(exactly 2 urgent orders tomorrow)?",
   "c": [
    "0.4232",
    "0.1494",
    "0.0498",
    "0.2240"
   ],
   "a": [
    3
   ],
   "w": "f(2) = 3² e⁻³ / 2! = 9 × 0.049787 / 2 = 0.2240. 0.4232 is P(2 or fewer), 0.1494 is P(exactly 1) and 0.0498 is P(0).",
   "bk": "Anderson 14e ch5",
   "lv": "apply"
  },
  {
   "id": "sfm-q0196",
   "topic": "Distributions",
   "q": "Why does the binomial NOT apply when an inspector draws 4 sarees without replacement from a box of 10?",
   "c": [
    "Because there are more than two possible outcomes",
    "Because each draw changes the mix left, so p changes and the draws are dependent",
    "Because the number of draws is not fixed",
    "Because the binomial needs at least 30 trials"
   ],
   "a": [
    1
   ],
   "w": "Without replacement from a small population, the success probability shifts after every draw and the draws are not independent — that is the hypergeometric setting. The number of draws is fixed and there is no 30-trial rule for the binomial.",
   "bk": "Anderson 14e ch5",
   "lv": "recall"
  },
  {
   "id": "sfm-q0197",
   "topic": "Distributions",
   "q": "A box of 10 sarees contains 3 with a weaving flaw. An inspector picks 4 at random without replacement. What is P(exactly 1 flawed saree)?",
   "c": [
    "0.5000",
    "0.4116",
    "0.1667",
    "0.3000"
   ],
   "a": [
    0
   ],
   "w": "Hypergeometric: C(3,1) × C(7,3) / C(10,4) = 3 × 35 / 210 = 0.5000. 0.4116 is the binomial answer with p = 0.3, which wrongly assumes replacement; 0.1667 is P(0).",
   "bk": "Anderson 14e ch5",
   "lv": "apply"
  },
  {
   "id": "sfm-q0198",
   "topic": "Association",
   "q": "An investor splits money between two funds whose returns have a negative covariance. Compared with two funds of the same variances but zero covariance, the portfolio's variance will be:",
   "c": [
    "Higher",
    "Unchanged",
    "Lower",
    "Equal to the sum of the two variances"
   ],
   "a": [
    2
   ],
   "w": "Var(ax + by) = a²Var(x) + b²Var(y) + 2ab·σxy. With positive weights a and b, a negative σxy makes the last term negative, so variance falls. This is the statistical basis of diversification.",
   "bk": "Anderson 14e ch5",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0199",
   "topic": "Association",
   "q": "An equity fund has expected return 12% and a debt fund 7%. What is the expected return of a portfolio with 60% in equity and 40% in debt?",
   "c": [
    "9.5%",
    "19%",
    "7.2%",
    "10%"
   ],
   "a": [
    3
   ],
   "w": "E(0.6x + 0.4y) = 0.6 × 12 + 0.4 × 7 = 7.2 + 2.8 = 10%. 9.5% is the unweighted average; the covariance affects the portfolio's variance, not its expected value.",
   "bk": "Anderson 14e ch5",
   "lv": "apply"
  },
  {
   "id": "sfm-q0200",
   "topic": "Distributions",
   "q": "A survey records x = 1 if a respondent recalls an advertisement and x = 0 if not. Why is x a legitimate random variable?",
   "c": [
    "Because a random variable only has to attach a number to each outcome — the numbers may be arbitrary",
    "It is not — recall is a qualitative outcome",
    "Because 0 and 1 are the only values a random variable may take",
    "Because recall is measured on a ratio scale"
   ],
   "a": [
    0
   ],
   "w": "A random variable is a numerical description of an experimental outcome. Coding yes/no as 1/0 (or any two numbers) satisfies that definition, even though the underlying outcome is qualitative.",
   "bk": "Anderson 14e ch5",
   "lv": "recall"
  },
  {
   "id": "sfm-q0201",
   "topic": "Distributions",
   "q": "A continuous random variable has density f(x) = 2 for 0 ≤ x ≤ 0.5. Which statement is correct?",
   "c": [
    "It is invalid, because a probability cannot exceed 1",
    "It is valid, because the height is not a probability and the total area is 1",
    "It is invalid, because f(x) must equal 1 on its range",
    "It is valid only if x is discrete"
   ],
   "a": [
    1
   ],
   "w": "Probabilities are areas: 0.5 × 2 = 1, so the density is valid. The height of a density is not a probability, so a value above 1 is allowed.",
   "bk": "Anderson 14e ch6",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0202",
   "topic": "Distributions",
   "q": "Food-delivery times are uniformly distributed between 20 and 50 minutes. What is P(30 ≤ x ≤ 40)?",
   "c": [
    "0.250",
    "0.500",
    "0.333",
    "0.100"
   ],
   "a": [
    2
   ],
   "w": "Width over range: (40 − 30)/(50 − 20) = 10/30 = 0.333. 0.100 forgets to divide by the range; 0.500 halves the range instead.",
   "bk": "Anderson 14e ch6",
   "lv": "apply"
  },
  {
   "id": "sfm-q0203",
   "topic": "Distributions",
   "q": "For the same uniform delivery times (20 to 50 minutes), what is the standard deviation?",
   "c": [
    "75 minutes",
    "35 minutes",
    "8.66 minutes",
    "2.5 minutes"
   ],
   "a": [
    2
   ],
   "w": "Var(x) = (b − a)²/12 = 30²/12 = 75, so σ = √75 = 8.66 minutes. 75 is the variance and 35 is the mean.",
   "bk": "Anderson 14e ch6",
   "lv": "apply"
  },
  {
   "id": "sfm-q0204",
   "topic": "Distributions",
   "q": "For a continuous random variable x, how does P(x < 30) compare with P(x ≤ 30)?",
   "c": [
    "They are equal",
    "P(x ≤ 30) is larger by f(30)",
    "P(x < 30) is always zero",
    "They differ by 0.5"
   ],
   "a": [
    0
   ],
   "w": "The probability of a single point is the area of a zero-width strip, which is 0. So including the endpoint changes nothing for continuous variables, unlike discrete ones.",
   "bk": "Anderson 14e ch6",
   "lv": "recall"
  },
  {
   "id": "sfm-q0205",
   "topic": "Distributions",
   "q": "True or false: the tails of a normal curve meet the horizontal axis at three standard deviations from the mean.",
   "c": [
    "True",
    "False"
   ],
   "a": [
    1
   ],
   "w": "The tails extend to infinity and never touch the axis. Within ±3σ lies about 99.7% of the area, not all of it.",
   "bk": "Anderson 14e ch6",
   "lv": "recall"
  },
  {
   "id": "sfm-q0206",
   "topic": "Distributions",
   "q": "Using the standard normal table, P(z ≥ −1.25) equals:",
   "c": [
    "0.1056",
    "0.3944",
    "0.6056",
    "0.8944"
   ],
   "a": [
    3
   ],
   "w": "P(z ≤ −1.25) = 0.1056, so P(z ≥ −1.25) = 1 − 0.1056 = 0.8944. Reporting 0.1056 gives the left tail instead of the right.",
   "bk": "Anderson 14e ch6",
   "lv": "apply"
  },
  {
   "id": "sfm-q0207",
   "topic": "Distributions",
   "q": "Using the standard normal table, P(−1.20 ≤ z ≤ 0.80) is approximately:",
   "c": [
    "0.6730",
    "0.9032",
    "0.4032",
    "0.3270"
   ],
   "a": [
    0
   ],
   "w": "P(z ≤ 0.80) − P(z ≤ −1.20) = 0.7881 − 0.1151 = 0.6730. 0.9032 adds the two table values; 0.3270 is the area outside the interval.",
   "bk": "Anderson 14e ch6",
   "lv": "apply"
  },
  {
   "id": "sfm-q0208",
   "topic": "Distributions",
   "q": "Which z value has an area of 0.05 in the UPPER tail of the standard normal distribution?",
   "c": [
    "1.96",
    "1.645",
    "−1.645",
    "0.05"
   ],
   "a": [
    1
   ],
   "w": "Cumulative area 0.95 lies midway between 1.64 and 1.65, so z = 1.645. 1.96 leaves 0.025 in each tail (0.05 split across both); −1.645 cuts off 0.05 in the lower tail.",
   "bk": "Anderson 14e ch6",
   "lv": "apply"
  },
  {
   "id": "sfm-q0209",
   "topic": "Distributions",
   "q": "Which z value has an area of 0.20 to its LEFT?",
   "c": [
    "0.84",
    "−0.25",
    "−0.84",
    "0.20"
   ],
   "a": [
    2
   ],
   "w": "Cumulative 0.20 is below 0.5, so z is negative. The closest table value is 0.2005 at z = −0.84 (mirroring 0.7995 at +0.84).",
   "bk": "Anderson 14e ch6",
   "lv": "apply"
  },
  {
   "id": "sfm-q0210",
   "topic": "Distributions",
   "q": "Entrance-test scores are normal with μ = 65 and σ = 10. What proportion of candidates score above 80?",
   "c": [
    "0.9332",
    "0.4332",
    "0.0668",
    "0.1500"
   ],
   "a": [
    2
   ],
   "w": "z = (80 − 65)/10 = 1.5; P(z ≤ 1.5) = 0.9332, so P(z > 1.5) = 1 − 0.9332 = 0.0668. 0.9332 is the proportion below 80 and 0.4332 is the area between the mean and 80.",
   "bk": "Anderson 14e ch6",
   "lv": "apply"
  },
  {
   "id": "sfm-q0211",
   "topic": "Distributions",
   "q": "Packet weights are normal with μ = 500 g and σ = 40 g. The lightest 10% of packets are rejected. What is the cut-off weight?",
   "c": [
    "551.2 g",
    "460.0 g",
    "496.0 g",
    "448.8 g"
   ],
   "a": [
    3
   ],
   "w": "The bottom 10% is below z = −1.28, so x = 500 − 1.28 × 40 = 448.8 g. 551.2 g uses +1.28 and marks the heaviest 10%; 460 g is just one σ below the mean.",
   "bk": "Anderson 14e ch6",
   "lv": "apply"
  },
  {
   "id": "sfm-q0212",
   "topic": "Distributions",
   "q": "Two normal distributions share μ = 100; one has σ = 5, the other σ = 10. Which statement is true?",
   "c": [
    "The σ = 10 curve is wider and flatter, so less of its area lies within 95 to 105",
    "The σ = 10 curve has more total area under it",
    "Both curves have the same proportion of values between 95 and 105",
    "The σ = 5 curve has a higher mean"
   ],
   "a": [
    0
   ],
   "w": "Larger σ spreads the curve out. 95–105 is ±1σ for the σ = 5 curve (about 68%) but only ±0.5σ for the σ = 10 curve (about 38%). Total area is always 1 and both means are 100.",
   "bk": "Anderson 14e ch6",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0213",
   "topic": "Distributions",
   "q": "The textbook's rule for using the normal approximation to a binomial distribution is:",
   "c": [
    "n ≥ 30",
    "np ≥ 5 and n(1 − p) ≥ 5",
    "p = 0.5",
    "n ≥ 100 and p ≤ 0.05"
   ],
   "a": [
    1
   ],
   "w": "Both expected counts, successes np and failures n(1 − p), must be at least 5. 'n ≥ 30' is the central-limit guideline for sample means, not this rule.",
   "bk": "Anderson 14e ch6",
   "lv": "recall"
  },
  {
   "id": "sfm-q0214",
   "topic": "Distributions",
   "q": "To approximate the binomial probability P(x ≥ 15) with a normal curve, which probability should you compute?",
   "c": [
    "P(x ≥ 15.5)",
    "P(x ≥ 15)",
    "P(14.5 ≤ x ≤ 15.5)",
    "P(x ≥ 14.5)"
   ],
   "a": [
    3
   ],
   "w": "The count 15 occupies the strip 14.5 to 15.5, and '15 or more' must include it, so start at 14.5. Starting at 15.5 drops the value 15 entirely; the strip 14.5–15.5 is P(x = 15) only.",
   "bk": "Anderson 14e ch6",
   "lv": "apply"
  },
  {
   "id": "sfm-q0215",
   "topic": "Distributions",
   "q": "Time to resolve a support ticket is exponential with mean 10 minutes. What is P(resolved within 5 minutes)?",
   "c": [
    "0.6065",
    "0.3935",
    "0.5000",
    "0.2231"
   ],
   "a": [
    1
   ],
   "w": "P(x ≤ 5) = 1 − e^(−5/10) = 1 − 0.6065 = 0.3935. 0.6065 is P(x > 5); 0.5 wrongly assumes half the mean gives half the probability.",
   "bk": "Anderson 14e ch6",
   "lv": "apply"
  },
  {
   "id": "sfm-q0216",
   "topic": "Distributions",
   "q": "For the same exponential resolution time (mean 10 minutes), what is P(a ticket takes more than 15 minutes)?",
   "c": [
    "0.7769",
    "0.3935",
    "0.2231",
    "0.1500"
   ],
   "a": [
    2
   ],
   "w": "P(x > 15) = e^(−15/10) = e^(−1.5) = 0.2231. 0.7769 is the cumulative P(x ≤ 15); remember the formula gives 'less than or equal to'.",
   "bk": "Anderson 14e ch6",
   "lv": "apply"
  },
  {
   "id": "sfm-q0217",
   "topic": "Distributions",
   "q": "The time between trucks arriving at a warehouse dock is exponential with mean 4 minutes. What is its standard deviation?",
   "c": [
    "4 minutes",
    "2 minutes",
    "16 minutes",
    "0.25 minutes"
   ],
   "a": [
    0
   ],
   "w": "For the exponential, σ = μ = 4 minutes (variance 16). 2 minutes is √4 — the Poisson logic, where the variance equals the mean.",
   "bk": "Anderson 14e ch6",
   "lv": "recall"
  },
  {
   "id": "sfm-q0218",
   "topic": "Distributions",
   "q": "Calls reach a helpline as a Poisson process averaging 30 calls per hour. The time between successive calls then follows:",
   "c": [
    "A Poisson distribution with mean 2 calls",
    "A normal distribution with mean 2 minutes",
    "A uniform distribution between 0 and 2 minutes",
    "An exponential distribution with mean 2 minutes"
   ],
   "a": [
    3
   ],
   "w": "Poisson counts imply exponential gaps, with mean gap 60/30 = 2 minutes. The Poisson describes the count per interval, not the gap between events.",
   "bk": "Anderson 14e ch6",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0219",
   "topic": "Distributions",
   "q": "In Excel, =EXPON.DIST(x, ?, TRUE) for an exponential variable with mean 20 minutes needs which second argument?",
   "c": [
    "20",
    "1/20",
    "20^2",
    "LN(20)"
   ],
   "a": [
    1
   ],
   "w": "EXPON.DIST takes the rate λ = 1/μ = 1/20. Entering 20 would model a mean of 1/20 minute.",
   "bk": "Anderson 14e ch6",
   "lv": "recall"
  },
  {
   "id": "sfm-q0220",
   "topic": "Distributions",
   "q": "What does =NORM.INV(0.9, 58400, 8000) return?",
   "c": [
    "P(x ≤ 0.9)",
    "The z value with 0.9 to its left",
    "The x value with 90% of the distribution below it",
    "The probability that x exceeds 58,400"
   ],
   "a": [
    2
   ],
   "w": "NORM.INV works backwards: given a cumulative probability, mean and σ, it returns the x value (about 68,652 here). NORM.DIST goes the other way, from x to probability.",
   "bk": "Anderson 14e ch6",
   "lv": "recall"
  },
  {
   "id": "sfm-q0221",
   "topic": "Distributions",
   "q": "Customer waiting times follow an exponential distribution with mean 10 minutes. Which statement about its median is true?",
   "c": [
    "The median equals the mean, 10 minutes",
    "The median exceeds the mean, because the distribution is left-skewed",
    "The median cannot be found for a continuous variable",
    "The median is below the mean, because the distribution is right-skewed"
   ],
   "a": [
    3
   ],
   "w": "The exponential is skewed to the right, so its long upper tail pulls the mean above the median. Solving 1 − e^(−m/10) = 0.5 gives m = 10 ln 2 ≈ 6.9 minutes.",
   "bk": "Anderson 14e ch6",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0222",
   "topic": "Sampling methods",
   "q": "A retailer surveys weekday-morning visitors at one mall to learn about all shoppers in the city. In the textbook's terms, the weekday-morning visitors are the:",
   "c": [
    "Target population",
    "Sampled population",
    "Frame",
    "Census"
   ],
   "a": [
    1
   ],
   "w": "The sampled population is where the sample actually comes from; the target population (all city shoppers) is what the retailer wants to describe. The mismatch between the two is exactly what can make the estimates misleading.",
   "bk": "Anderson 14e ch7",
   "lv": "recall"
  },
  {
   "id": "sfm-q0223",
   "topic": "Sampling methods",
   "q": "Picking a random start among the first 10 names and then every 10th name gives every employee a 1-in-10 chance. Why is this NOT a simple random sample?",
   "c": [
    "Because not every possible sample of that size is equally likely — most combinations can never occur",
    "Because some employees have a higher chance of selection than others",
    "Because simple random samples must be drawn with replacement",
    "Because the sample size is not fixed in advance"
   ],
   "a": [
    0
   ],
   "w": "A simple random sample requires every possible sample of size n to be equally likely. In a systematic sample each person has equal chance, but only 10 distinct samples are possible. Equal individual chances alone are not enough.",
   "bk": "Anderson 14e ch7",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0224",
   "topic": "Sampling methods",
   "q": "A quality inspector samples biscuit packets coming off a running line. Which two conditions make it a random sample from this infinite population?",
   "c": [
    "Every packet is numbered, and random numbers pick the sample",
    "The packets are weighed with a calibrated scale, and n ≥ 30",
    "Each packet comes from the same population, and packets are selected independently",
    "The sample is at least 5% of the day's output, without replacement"
   ],
   "a": [
    2
   ],
   "w": "With an ongoing process there is no frame to number, so the two conditions are same population (e.g., sample at about the same time so the process hasn't changed) and independent selection.",
   "bk": "Anderson 14e ch7",
   "lv": "recall"
  },
  {
   "id": "sfm-q0225",
   "topic": "Sampling distributions",
   "q": "From a sample of 30 managers, the mean salary is ₹71,814. This number is best described as a:",
   "c": [
    "Point estimator",
    "Population parameter",
    "Standard error",
    "Point estimate"
   ],
   "a": [
    3
   ],
   "w": "The numerical value from a particular sample is the point estimate. The point estimator is the statistic x̄ itself, and the parameter is the unknown population mean μ.",
   "bk": "Anderson 14e ch7",
   "lv": "recall"
  },
  {
   "id": "sfm-q0226",
   "topic": "Sampling distributions",
   "q": "A population has μ = 250. What is the mean of the sampling distribution of x̄ for samples of n = 25 and for samples of n = 100?",
   "c": [
    "250 for both",
    "10 and 2.5",
    "250 and 1,000",
    "250 for n = 25, but closer to the sample mean for n = 100"
   ],
   "a": [
    0
   ],
   "w": "E(x̄) = μ regardless of n — x̄ is unbiased. Sample size changes the standard error, not the centre of the sampling distribution.",
   "bk": "Anderson 14e ch7",
   "lv": "apply"
  },
  {
   "id": "sfm-q0227",
   "topic": "Sampling distributions",
   "q": "A population has σ = 30. What is the standard error of the mean for random samples of 36?",
   "c": [
    "0.83",
    "5",
    "30",
    "25"
   ],
   "a": [
    1
   ],
   "w": "σx̄ = σ/√n = 30/6 = 5. 0.83 divides by n instead of √n; 30 is the population standard deviation itself.",
   "bk": "Anderson 14e ch7",
   "lv": "apply"
  },
  {
   "id": "sfm-q0228",
   "topic": "Sampling distributions",
   "q": "A market researcher wants to cut the standard error of a sample mean in half. By what factor must the sample size grow?",
   "c": [
    "2",
    "√2",
    "8",
    "4"
   ],
   "a": [
    3
   ],
   "w": "Standard error ∝ 1/√n, so halving it needs √n to double, i.e. n × 4. Doubling n only divides the standard error by √2 ≈ 1.41.",
   "bk": "Anderson 14e ch7",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0229",
   "topic": "Sampling distributions",
   "q": "An auditor draws 150 invoices from a file of 2,000. Should the finite population correction factor be used for the standard error?",
   "c": [
    "No — the population is finite but large",
    "Yes — n/N = 0.075, which exceeds 0.05",
    "No — the correction is only for proportions",
    "Yes — it must be used whenever the population is finite"
   ],
   "a": [
    1
   ],
   "w": "The book's rule: use the correction when n/N > 0.05. Here 150/2000 = 0.075. Being finite alone is not enough — at 1% sampling the factor is close to 1 and is ignored.",
   "bk": "Anderson 14e ch7",
   "lv": "apply"
  },
  {
   "id": "sfm-q0230",
   "topic": "Sampling distributions",
   "q": "N = 1,000, n = 100 and σ = 20. What is the standard error of x̄ using the finite population correction?",
   "c": [
    "2.00",
    "1.80",
    "1.90",
    "0.63"
   ],
   "a": [
    2
   ],
   "w": "σ/√n = 20/10 = 2; factor √(900/999) = 0.949; corrected SE = 1.90. 2.00 ignores the correction (n/N = 0.10 > 0.05); 1.80 multiplies by 0.9 instead of its square root.",
   "bk": "Anderson 14e ch7",
   "lv": "apply"
  },
  {
   "id": "sfm-q0231",
   "topic": "Sampling distributions",
   "q": "What does the Central Limit Theorem guarantee for large samples from a skewed population?",
   "c": [
    "The population becomes approximately normal",
    "The values in the sample become approximately normal",
    "The sampling distribution of x̄ becomes approximately normal",
    "The sample mean equals the population mean"
   ],
   "a": [
    2
   ],
   "w": "The CLT concerns the distribution of x̄ across repeated samples. The population keeps its shape, and any one sample still reflects that shape; x̄ only equals μ on average.",
   "bk": "Anderson 14e ch7",
   "lv": "recall"
  },
  {
   "id": "sfm-q0232",
   "topic": "Sampling distributions",
   "q": "Packet weights are known to be normally distributed. For random samples of only n = 8, the sampling distribution of x̄ is:",
   "c": [
    "Exactly normal, because the population is normal",
    "Not normal, because n is below 30",
    "Approximately normal only if n/N ≤ 0.05",
    "A t distribution, because n is small"
   ],
   "a": [
    0
   ],
   "w": "When the population is normal, x̄ is normal for any sample size — the CLT is not needed. The n ≥ 30 guideline applies when the population is not normal.",
   "bk": "Anderson 14e ch7",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0233",
   "topic": "Sampling distributions",
   "q": "In the textbook's practical guidance, roughly what sample size is usually enough for x̄ to be approximately normal, and when is more needed?",
   "c": [
    "n ≥ 10; more if the population is symmetric",
    "n ≥ 30; about 50 if the population is highly skewed or has outliers",
    "n ≥ 100 always",
    "n ≥ 5% of the population"
   ],
   "a": [
    1
   ],
   "w": "The book's rule of thumb is n ≥ 30, rising to about 50 for highly skewed populations or outliers. The 5% figure is the finite-population-correction rule, a different question.",
   "bk": "Anderson 14e ch7",
   "lv": "recall"
  },
  {
   "id": "sfm-q0234",
   "topic": "Sampling distributions",
   "q": "30% of a bank's customers use its app daily. For random samples of 84 customers, what is the standard error of p̄?",
   "c": [
    "0.0025",
    "0.21",
    "0.05",
    "0.30"
   ],
   "a": [
    2
   ],
   "w": "σp̄ = √[p(1 − p)/n] = √(0.21/84) = √0.0025 = 0.05. 0.0025 forgets the square root; 0.21 is p(1 − p).",
   "bk": "Anderson 14e ch7",
   "lv": "apply"
  },
  {
   "id": "sfm-q0235",
   "topic": "Sampling distributions",
   "q": "8% of a firm's shipments arrive damaged. Can the sampling distribution of p̄ for samples of 40 shipments be treated as normal?",
   "c": [
    "Yes — n is above 30",
    "Yes — p̄ is always approximately normal",
    "Only if the population is normal",
    "No — np = 3.2 is below 5"
   ],
   "a": [
    3
   ],
   "w": "The condition for p̄ is np ≥ 5 and n(1 − p) ≥ 5. Here np = 40 × 0.08 = 3.2, so the normal approximation is not appropriate. The n ≥ 30 rule is for sample means.",
   "bk": "Anderson 14e ch7",
   "lv": "apply"
  },
  {
   "id": "sfm-q0236",
   "topic": "Sampling distributions",
   "q": "Daily footfall at a store has μ = 120 and σ = 24. For a random sample of 64 days, what is P(x̄ > 126)?",
   "c": [
    "0.4013",
    "0.0228",
    "0.9772",
    "0.4772"
   ],
   "a": [
    1
   ],
   "w": "σx̄ = 24/8 = 3, z = (126 − 120)/3 = 2.00, P(z > 2) = 1 − 0.9772 = 0.0228. 0.4013 standardises with σ instead of the standard error — the answer for a single day, not a mean.",
   "bk": "Anderson 14e ch7",
   "lv": "apply"
  },
  {
   "id": "sfm-q0237",
   "topic": "Sampling distributions",
   "q": "An estimator whose values tend to get closer to the parameter as the sample size grows is called:",
   "c": [
    "Unbiased",
    "Relatively efficient",
    "Consistent",
    "Sufficient"
   ],
   "a": [
    2
   ],
   "w": "That is consistency. Unbiased means E(θ̂) = θ at any sample size; relative efficiency compares the standard errors of two unbiased estimators.",
   "bk": "Anderson 14e ch7",
   "lv": "recall"
  },
  {
   "id": "sfm-q0238",
   "topic": "Sampling distributions",
   "q": "When sampling from a normal population, why is the sample mean preferred to the sample median as an estimator of the centre?",
   "c": [
    "The median is biased",
    "The mean has a smaller standard error, so it is more efficient",
    "The median cannot be computed for large samples",
    "The mean is always closer to μ in every sample"
   ],
   "a": [
    1
   ],
   "w": "Both are centred on μ for a normal population, but the median's standard error is about 25% larger. Smaller standard error means greater relative efficiency — the mean is closer on average, not in every sample.",
   "bk": "Anderson 14e ch7",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0239",
   "topic": "Sampling methods",
   "q": "A bank wants precise estimates using a small total sample and divides customers into groups whose members are as alike as possible. Which method is this?",
   "c": [
    "Cluster sampling",
    "Systematic sampling",
    "Convenience sampling",
    "Stratified random sampling"
   ],
   "a": [
    3
   ],
   "w": "Stratified sampling works best with homogeneous strata. Cluster sampling wants the opposite — each cluster should be a varied mini-population — and is chosen mainly for cheaper fieldwork.",
   "bk": "Anderson 14e ch7",
   "lv": "recall"
  },
  {
   "id": "sfm-q0240",
   "topic": "Sampling methods",
   "q": "A list holds 6,000 policyholders and a systematic sample of 60 is needed. How should it be drawn?",
   "c": [
    "Randomly pick one of the first 100 names, then take every 100th name after it",
    "Take the first 60 names on the list",
    "Pick 60 random numbers between 1 and 6,000",
    "Take every 60th name starting from the first"
   ],
   "a": [
    0
   ],
   "w": "The interval is N/n = 6000/60 = 100, and the start must be random within the first interval. Picking 60 random numbers is simple random sampling, a different method; 'every 60th' uses the wrong interval.",
   "bk": "Anderson 14e ch7",
   "lv": "apply"
  },
  {
   "id": "sfm-q0241",
   "topic": "Sampling methods",
   "q": "A food-delivery app collects ratings from 10 million in-app users to describe all urban diners, including those who never use apps. What is the main problem?",
   "c": [
    "Sampling error — the sample is still too small",
    "The standard error is too large to be useful",
    "Nonsampling (coverage) error that a larger sample cannot fix",
    "The finite population correction was not applied"
   ],
   "a": [
    2
   ],
   "w": "With n this large the standard error is tiny, so sampling error is negligible. The sampled population (app users) does not match the target population (all diners) — a coverage error that more data does not cure.",
   "bk": "Anderson 14e ch7",
   "lv": "analyse"
  },
  {
   "id": "sfm-q0242",
   "topic": "Sampling methods",
   "q": "A questionnaire asks: 'Most customers love our new menu. Do you love it too?' The resulting distortion is an example of:",
   "c": [
    "Sampling error",
    "Coverage error",
    "Nonresponse error",
    "Measurement error"
   ],
   "a": [
    3
   ],
   "w": "A leading question distorts the measured response, which the book classes as measurement error. Nonresponse error arises when some groups are less likely to respond; coverage error when the wrong population is sampled.",
   "bk": "Anderson 14e ch7",
   "lv": "recall"
  },
  {
   "id": "sfm-q0243",
   "topic": "Sampling methods",
   "q": "In the textbook's four attributes of big data, which one refers to the reliability of the data generated?",
   "c": [
    "Volume",
    "Velocity",
    "Veracity",
    "Variety"
   ],
   "a": [
    2
   ],
   "w": "The book lists volume (amount), velocity (speed), variety (types and structures) and veracity (reliability). Note: the lecture taught three Vs — volume, velocity, variety — so for the quiz follow the lecture if veracity is not offered.",
   "bk": "Anderson 14e ch7",
   "lv": "recall"
  },
  {
   "id": "sfm-q0244",
   "topic": "Distributions",
   "q": "Before computing the probability that demand will exceed 20 units, the lecture says you need three things. Which three?",
   "c": [
    "The underlying distribution, its mean and its standard deviation",
    "The sample size, the mean and the median",
    "The mean, the mode and the range",
    "A z-table, the sample size and the sample variance"
   ],
   "a": [
    0
   ],
   "w": "A normal curve is fixed by μ and σ, but only once you know the demand is normally distributed. Sample size, mode and range play no part in a single-value normal probability.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "sfm-q0245",
   "topic": "Distributions",
   "q": "Firm A has demand with μ = 80 and σ = 16 and asks for P(X > 100). Firm B has μ = 800 and σ = 160 and asks for P(X > 1,000). Which statement is true?",
   "c": [
    "Firm B's probability is ten times Firm A's",
    "Firm B's probability is one-tenth of Firm A's",
    "Both give z = 1.25, so the two probabilities are equal",
    "They cannot be compared because the scales differ"
   ],
   "a": [
    2
   ],
   "w": "z = 20/16 = 1.25 and z = 200/160 = 1.25. Standardising removes the scale, so both probabilities are 1 − 0.8944 = 0.1056. Multiplying μ, σ and x by the same factor never changes z.",
   "lec": 14,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0246",
   "topic": "Distributions",
   "q": "In a normal-distribution problem you get z = −0.75. What does the minus sign tell you?",
   "c": [
    "The probability is negative, so there is a mistake",
    "The value lies 0.75 standard deviations below the mean",
    "The population has a negative mean",
    "The value is an outlier"
   ],
   "a": [
    1
   ],
   "w": "z counts standard deviations from μ; negative simply means left of the mean. Probabilities (areas) are never negative, and an outlier needs a far larger |z|.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "sfm-q0247",
   "topic": "Distributions",
   "q": "Daily milk sales at a dairy outlet are normal with μ = 500 litres and σ = 40 litres. What is the probability that sales exceed 570 litres?",
   "c": [
    "0.9599",
    "0.4599",
    "0.0446",
    "0.0401"
   ],
   "a": [
    3
   ],
   "w": "z = 70/40 = 1.75 and the table gives P(Z ≤ 1.75) = 0.9599, so P(X > 570) = 1 − 0.9599 = 0.0401. 0.9599 is the left area, the commonest slip; 0.0446 comes from misreading z as 1.70.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "sfm-q0248",
   "topic": "Distributions",
   "q": "Rice bags are filled with weights that are normal with μ = 25 kg and σ = 0.4 kg. What proportion of bags weigh at least 24.4 kg?",
   "c": [
    "0.0668",
    "0.4332",
    "0.9332",
    "0.8664"
   ],
   "a": [
    2
   ],
   "w": "z = (24.4 − 25)/0.4 = −1.5, so P(X ≥ 24.4) = 1 − P(Z ≤ −1.5) = 1 − 0.0668 = 0.9332. A cut-off below the mean must leave more than half the bags above it, which rules out 0.0668.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "sfm-q0249",
   "topic": "Distributions",
   "q": "Salaries are normal with μ = ₹40,000 and σ = ₹5,000. A student reports P(salary ≥ ₹32,000) = 0.0548. What does the lecture's sanity check say?",
   "c": [
    "It must exceed 0.5 because ₹32,000 is below the mean; 0.0548 is P(salary < ₹32,000), so the answer is 0.9452",
    "It is correct, because z = −1.6 gives 0.0548",
    "It must be below 0.5 because the question says 'at least'",
    "The answer should be 0.5 + 0.0548 = 0.5548"
   ],
   "a": [
    0
   ],
   "w": "z = −8,000/5,000 = −1.6 and the table gives the LEFT area 0.0548. 'At least ₹32,000' is everything to the right of a point below the mean, so it must be above 0.5: 1 − 0.0548 = 0.9452.",
   "lec": 14,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0250",
   "topic": "Distributions",
   "q": "Bolt lengths are normal with μ = 60 mm and σ = 4 mm. What is the probability that a bolt is between 54 mm and 66 mm long?",
   "c": [
    "0.9332",
    "0.4332",
    "0.7698",
    "0.8664"
   ],
   "a": [
    3
   ],
   "w": "z = ±6/4 = ±1.5. By symmetry the band is 2P(Z ≤ 1.5) − 1 = 2(0.9332) − 1 = 0.8664, i.e. 1 minus two tails of 0.0668. 0.9332 is only the area below 66 mm; 0.7698 is the band for z = ±1.2.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "sfm-q0251",
   "topic": "Distributions",
   "q": "Call-handling times are normal with μ = 200 seconds and σ = 20 seconds. What is P(190 ≤ X ≤ 240)?",
   "c": [
    "0.2857",
    "0.6687",
    "0.4772",
    "0.9772"
   ],
   "a": [
    1
   ],
   "w": "z₁ = −0.5 and z₂ = 2, so P = 0.9772 − 0.3085 = 0.6687. Using P(Z ≤ +0.5) = 0.6915 by mistake gives 0.2857; 0.4772 is only the area from the mean to z = 2.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "sfm-q0252",
   "topic": "Distributions",
   "q": "Lead-time demand for printer cartridges is normal with μ = 120 and σ = 15. The store accepts a stockout risk of at most 2.5%. Which reorder point meets the target with the least stock?",
   "c": [
    "150 cartridges",
    "149 cartridges",
    "145 cartridges",
    "120 cartridges"
   ],
   "a": [
    0
   ],
   "w": "A 2.5% right tail means a left area of 0.975, so z = 1.96 and x = 120 + 1.96 × 15 = 149.4. Round up to 150; stocking 149 leaves the risk just above 2.5%. 145 uses the 5% value z = 1.645, and 120 leaves a 50% risk.",
   "lec": 14,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0253",
   "topic": "Distributions",
   "q": "To find the z value that leaves 0.05 in the RIGHT tail, which left-area value do you look up in the standard normal table?",
   "c": [
    "0.05",
    "0.975",
    "0.95",
    "0.025"
   ],
   "a": [
    2
   ],
   "w": "The table lists left areas, so a right tail of 0.05 means a left area of 1 − 0.05 = 0.95, giving z = 1.645. 0.975 is for a two-sided 95% range.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "sfm-q0254",
   "topic": "Distributions",
   "q": "Lead-time demand is normal with μ = 50 units and σ = 10 units. Raising the reorder point from 60 to 70 units changes the stockout probability from about:",
   "c": [
    "0.8413 to 0.9772",
    "0.1587 to 0.0228",
    "0.3413 to 0.4772",
    "0.0228 to 0.1587"
   ],
   "a": [
    1
   ],
   "w": "The stockout is the right tail: at 60, z = 1 and 1 − 0.8413 = 0.1587; at 70, z = 2 and 1 − 0.9772 = 0.0228. Ten more units cut the risk by about 13.6 percentage points. 0.8413 and 0.9772 are the chances of NOT running out.",
   "lec": 14,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0255",
   "topic": "Distributions",
   "q": "What does =NORM.S.DIST(-2, TRUE) return in Excel?",
   "c": [
    "0.9772, the area to the right of z = −2",
    "0.0540, the height of the curve at z = −2",
    "−0.9772",
    "0.0228, the area to the left of z = −2"
   ],
   "a": [
    3
   ],
   "w": "NORM.S.DIST with TRUE gives the cumulative left area P(Z ≤ −2) = 0.0228. The height 0.0540 is what FALSE would return, and no probability is negative.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "sfm-q0256",
   "topic": "Distributions",
   "q": "X is normal with μ = 70 and σ = 12. Which Excel formula gives P(X > 85)?",
   "c": [
    "=NORM.DIST(85,70,12,TRUE)",
    "=1-NORM.DIST(85,70,12,FALSE)",
    "=1-NORM.DIST(85,70,12,TRUE)",
    "=NORM.S.DIST(85,TRUE)"
   ],
   "a": [
    2
   ],
   "w": "NORM.DIST(…, TRUE) returns the left area P(X ≤ 85) = 0.8944, so 'more than' is 1 minus it, 0.1056. FALSE returns a curve height, and NORM.S.DIST expects a z value, not a raw x.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "sfm-q0257",
   "topic": "Distributions",
   "q": "Which pair of properties belongs to the exponential distribution?",
   "c": [
    "Mean equals standard deviation; skewed right with skewness 2",
    "Mean equals variance; symmetric",
    "Mean, median and mode coincide; skewness 0",
    "Mean equals standard deviation; skewed left"
   ],
   "a": [
    0
   ],
   "w": "For the exponential, μ = σ and the long right tail gives a skewness of 2. Mean equals variance is the Poisson, and coinciding mean, median and mode is the normal.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "sfm-q0258",
   "topic": "Distributions",
   "q": "Gaps between customers at a tea stall are exponential with a mean of 5 minutes. What is the probability that the next customer arrives within 3 minutes?",
   "c": [
    "0.5488",
    "0.6000",
    "0.1098",
    "0.4512"
   ],
   "a": [
    3
   ],
   "w": "P(X ≤ 3) = 1 − e^(−3/5) = 1 − 0.5488 = 0.4512. 0.5488 is the chance of waiting longer than 3 minutes, 0.6 treats the gap as uniform, and 0.1098 is the height of the density at 3.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "sfm-q0259",
   "topic": "Distributions",
   "q": "The time to complete a routine KYC check is exponential with a mean of 8 minutes. What is the probability that a check takes MORE than 4 minutes?",
   "c": [
    "0.3935",
    "0.6065",
    "0.5000",
    "0.0758"
   ],
   "a": [
    1
   ],
   "w": "P(X > 4) = e^(−4/8) = e^(−0.5) = 0.6065. 0.3935 is P(X ≤ 4); 0.5 assumes the median is half the mean; 0.0758 is the density height at 4.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "sfm-q0260",
   "topic": "Distributions",
   "q": "A petrol-pump owner asks (i) how many cars will arrive in the next 15 minutes and (ii) how long it will be until the next car arrives. Which distributions fit?",
   "c": [
    "(i) Poisson, (ii) exponential",
    "(i) exponential, (ii) Poisson",
    "Both binomial",
    "(i) normal, (ii) uniform"
   ],
   "a": [
    0
   ],
   "w": "A count of occurrences in an interval is Poisson; the length of the gap between occurrences is exponential. They describe the same arrival process from two angles.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "sfm-q0261",
   "topic": "Distributions",
   "q": "Which of these is described by an exponential rather than a Poisson distribution?",
   "c": [
    "The number of defects in a 5 km stretch of highway",
    "The number of cars reaching a toll booth in a minute",
    "The distance between two major defects on a highway",
    "The number of typing errors on a page"
   ],
   "a": [
    2
   ],
   "w": "A distance or time BETWEEN occurrences is continuous and exponential. The other three count occurrences in a fixed interval of space or time, which is the Poisson's job.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "sfm-q0262",
   "topic": "Distributions",
   "q": "Lead-time demand is normal. If a store keeps stock equal to the mean lead-time demand, its stockout probability is:",
   "c": [
    "0.05",
    "0.50",
    "0",
    "0.6826"
   ],
   "a": [
    1
   ],
   "w": "At x = μ, z = 0 and half the curve lies to the right, so the chance that demand exceeds the stock is 0.50. Stocking the average is a coin toss, not a safe level.",
   "lec": 14,
   "lv": "recall"
  },
  {
   "id": "sfm-q0263",
   "topic": "Distributions",
   "q": "A random variable is uniformly distributed between 3 and 11. What is the height of its density function?",
   "c": [
    "0.25",
    "8",
    "1",
    "0.125"
   ],
   "a": [
    3
   ],
   "w": "f(x) = 1/(b − a) = 1/(11 − 3) = 1/8 = 0.125, so that the rectangle's area is 8 × 0.125 = 1. 8 is the width, not the height.",
   "lec": 14,
   "lv": "apply"
  },
  {
   "id": "sfm-q0264",
   "topic": "Applying distributions",
   "q": "What makes the Specialty Toys order-quantity decision hard?",
   "c": [
    "It is one order placed months before the season, so too few loses sales and too many must be cleared at a loss",
    "The supplier's price changes every week of the season",
    "Demand is known exactly but warehouse space is limited",
    "The toy can be re-ordered at any time, so there are too many options"
   ],
   "a": [
    0
   ],
   "w": "A single order months ahead of uncertain demand creates the two-sided risk: lost sales if demand is high, clearance losses if it is low. With unlimited re-ordering there would be no dilemma.",
   "lec": 15,
   "lv": "recall"
  },
  {
   "id": "sfm-q0265",
   "topic": "Applying distributions",
   "q": "In a one-shot order problem, what does a stockout mean?",
   "c": [
    "Units are left over after the season",
    "The supplier delivers after the season starts",
    "Demand turns out larger than the quantity ordered",
    "Leftover stock is sold at the clearance price"
   ],
   "a": [
    2
   ],
   "w": "A stockout is unmet demand: demand exceeds the stock available. Leftovers sold at clearance are the opposite risk.",
   "lec": 15,
   "lv": "recall"
  },
  {
   "id": "sfm-q0266",
   "topic": "Applying distributions",
   "q": "A Pune retailer forecasts Diwali-lantern demand with mean 8,000 and a 95% chance of lying between 6,040 and 9,960. Treating demand as normal, what is σ?",
   "c": [
    "1,960",
    "1,000",
    "1,191",
    "3,920"
   ],
   "a": [
    1
   ],
   "w": "The central 95% range puts 9,960 at z = 1.96: σ = (9,960 − 8,000)/1.96 = 1,000. Dividing by 1.645 gives 1,191, a one-tailed slip; 1,960 forgets to divide at all.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "sfm-q0267",
   "topic": "Applying distributions",
   "q": "Why does the case use z = 1.96, and not 1.645, to get σ from a 95% forecast range?",
   "c": [
    "1.96 is the z for a one-sided 95% limit",
    "1.645 is only used for small samples",
    "Because the mean demand is as large as 20,000",
    "The 95% is a central range, so 2.5% lies in each tail and z is read at a left area of 0.975"
   ],
   "a": [
    3
   ],
   "w": "Between 10,000 and 30,000 with 95% means 5% outside, split 2.5% per tail. The upper limit is therefore the 97.5th percentile, z = 1.96. The one-sided 95% point is 1.645.",
   "lec": 15,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0268",
   "topic": "Applying distributions",
   "q": "Lantern demand is normal with μ = 8,000 and σ = 1,000. If the retailer orders 9,000 lanterns, what is the probability of a stockout?",
   "c": [
    "0.8413",
    "0.3413",
    "0.1587",
    "0.0228"
   ],
   "a": [
    2
   ],
   "w": "z = (9,000 − 8,000)/1,000 = 1, so P(demand > 9,000) = 1 − 0.8413 = 0.1587. 0.8413 is the chance of meeting demand.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "sfm-q0269",
   "topic": "Applying distributions",
   "q": "With the same lantern demand (μ = 8,000, σ = 1,000), what is the stockout probability for an order of 7,000?",
   "c": [
    "0.8413",
    "0.1587",
    "0.3413",
    "0.5000"
   ],
   "a": [
    0
   ],
   "w": "z = −1 and P(demand ≤ 7,000) = 0.1587, so the stockout risk is 1 − 0.1587 = 0.8413. An order below the mean must carry more than a 50% risk; 0.1587 is the wrong tail.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "sfm-q0270",
   "topic": "Applying distributions",
   "q": "Which Excel formula gives the stockout probability for an order of 8,500 lanterns when demand is normal with μ = 8,000 and σ = 1,000?",
   "c": [
    "=NORM.DIST(8500,8000,1000,TRUE)",
    "=1-NORM.S.DIST(8500,TRUE)",
    "=NORM.INV(0.5,8000,1000)",
    "=1-NORM.DIST(8500,8000,1000,TRUE)"
   ],
   "a": [
    3
   ],
   "w": "NORM.DIST(…, TRUE) gives P(demand ≤ 8,500) = 0.6915; the stockout is the complement, 0.3085. NORM.S.DIST needs a z, not 8,500, and NORM.INV returns a quantity, not a probability.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "sfm-q0271",
   "topic": "Applying distributions",
   "q": "Lanterns cost ₹400, sell for ₹600 before Diwali and for ₹150 afterwards. How much does each unsold lantern cost the retailer?",
   "c": [
    "₹400",
    "₹250",
    "₹200",
    "₹450"
   ],
   "a": [
    1
   ],
   "w": "The lantern cost ₹400 and still fetches ₹150 in the clearance sale, so the loss is ₹400 − ₹150 = ₹250. ₹200 is the profit on a lantern sold in season.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "sfm-q0272",
   "topic": "Applying distributions",
   "q": "Same lanterns (cost ₹400, price ₹600, clearance ₹150). The retailer orders 9,000 and demand is only 6,000. What is the profit?",
   "c": [
    "₹4.5 lakh",
    "₹0",
    "₹12 lakh",
    "₹18 lakh"
   ],
   "a": [
    0
   ],
   "w": "Revenue = 6,000 × 600 + 3,000 × 150 = ₹40.5 lakh; cost = 9,000 × 400 = ₹36 lakh; profit ₹4.5 lakh. Equivalently 6,000 × ₹200 − 3,000 × ₹250. Ignoring the clearance revenue gives ₹0; ignoring the leftovers gives ₹12 lakh.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "sfm-q0273",
   "topic": "Applying distributions",
   "q": "Same lanterns. The retailer orders 9,000 and demand turns out to be 10,000. What is the profit?",
   "c": [
    "₹20 lakh",
    "₹24 lakh",
    "₹18 lakh",
    "₹13.5 lakh"
   ],
   "a": [
    2
   ],
   "w": "Only 9,000 can be sold: 9,000 × ₹600 − 9,000 × ₹400 = ₹18 lakh. Using all 10,000 units of demand (₹20 lakh or ₹24 lakh) counts sales of stock that does not exist.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "sfm-q0274",
   "topic": "Applying distributions",
   "q": "Lantern demand is normal with μ = 8,000 and σ = 1,000. Rounding z to two decimals as the lecture does, what order gives an 80% chance of meeting demand?",
   "c": [
    "9,645",
    "8,840",
    "7,160",
    "8,800"
   ],
   "a": [
    1
   ],
   "w": "NORM.S.INV(0.80) = 0.84, so Q = 8,000 + 0.84 × 1,000 = 8,840. 9,645 uses the 95% value 1.645, 7,160 uses −0.84, and 8,800 treats 0.8 itself as the z.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "sfm-q0275",
   "topic": "Applying distributions",
   "q": "A manager wants a 70% chance of meeting demand. In stockout terms this means:",
   "c": [
    "70% of the units ordered will sell at full price",
    "The order should be 70% of mean demand",
    "Profit will be 70% of its maximum",
    "The order should leave a 30% chance of a stockout"
   ],
   "a": [
    3
   ],
   "w": "The service level is P(demand ≤ Q) = 0.70, so P(stockout) = 0.30. It says nothing about what share of units sells or about profit.",
   "lec": 15,
   "lv": "recall"
  },
  {
   "id": "sfm-q0276",
   "topic": "Applying distributions",
   "q": "Across the four suggested orders in the Specialty Toys profit table, what trade-off appears?",
   "c": [
    "Larger orders raise profit in every demand scenario",
    "Smaller orders earn more in every scenario",
    "Larger orders raise the best-case profit but deepen the worst-case loss",
    "Order size makes no difference because demand is normal"
   ],
   "a": [
    2
   ],
   "w": "At demand 30,000, profit climbs from $120,000 (Q = 15,000) to $224,000 (Q = 28,000); at demand 10,000 it falls from +$25,000 to −$118,000. Neither direction wins in every scenario.",
   "lec": 15,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0277",
   "topic": "Applying distributions",
   "q": "Lantern demand is normal with μ = 8,000 and σ = 1,000. What is the stockout probability if the retailer orders 11,000?",
   "c": [
    "0.0013",
    "0.9987",
    "0.0228",
    "0"
   ],
   "a": [
    0
   ],
   "w": "z = 3 and P(Z ≤ 3) = 0.9987, so the risk is 0.0013: tiny but not zero, since normal tails never end. The cost is a large expected pile of leftovers.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "sfm-q0278",
   "topic": "Applying distributions",
   "q": "Lantern demand is normal with μ = 8,000 and σ = 1,000. Rounding z to two decimals, what order meets demand 90% of the time?",
   "c": [
    "6,720",
    "9,960",
    "9,645",
    "9,280"
   ],
   "a": [
    3
   ],
   "w": "NORM.S.INV(0.90) = 1.28, so Q = 8,000 + 1.28 × 1,000 = 9,280. 6,720 uses −1.28 (a 10% service level); 9,960 is the 97.5th percentile and 9,645 the 95th.",
   "lec": 15,
   "lv": "apply"
  },
  {
   "id": "sfm-q0279",
   "topic": "Applying distributions",
   "q": "Which statement matches the lecture's conclusion on the Specialty Toys case?",
   "c": [
    "Ordering the mean demand is always optimal",
    "There is no single right order: the distribution prices each option's stockout risk and profit range, and the choice depends on management's risk appetite",
    "Always order the largest suggestion, because demand might be high",
    "Always order the smallest suggestion, because losses hurt more than lost sales"
   ],
   "a": [
    1
   ],
   "w": "The lecture stresses that different managers can rationally choose differently. Statistics replaces guesswork with quantified risk; it does not dictate one answer.",
   "lec": 15,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0280",
   "topic": "Applying distributions",
   "q": "The time between placing an order with the manufacturer and receiving the goods is called the:",
   "c": [
    "Lead time",
    "Service level",
    "Salvage period",
    "Reorder point"
   ],
   "a": [
    0
   ],
   "w": "Lead time is the delay between ordering and delivery; Specialty Toys orders in June or July for October. The reorder point is a stock level, not a time.",
   "lec": 15,
   "lv": "recall"
  },
  {
   "id": "sfm-q0281",
   "topic": "Applying distributions",
   "q": "Why does the Go Bananas weekly check fit a binomial distribution?",
   "c": [
    "Each of a fixed 25 boxes is in or out of spec, with the same 8% chance, independently",
    "Marshmallow weights are continuous and normally distributed",
    "Boxes arrive at a constant average rate per hour",
    "The sample is drawn without replacement from a small batch"
   ],
   "a": [
    0
   ],
   "w": "Fixed n, two outcomes, constant p and independent trials are the four binomial conditions. Weights themselves are continuous, but the count of out-of-spec boxes is what is modelled.",
   "lec": 16,
   "lv": "recall"
  },
  {
   "id": "sfm-q0282",
   "topic": "Applying distributions",
   "q": "A pharma line seals blister strips; when it works properly 10% of strips are mis-sealed. Each shift, 20 strips are checked and the line halts if 4 or more are mis-sealed. What is the probability of a false halt?",
   "c": [
    "0.0432",
    "0.8670",
    "0.1330",
    "0.1901"
   ],
   "a": [
    2
   ],
   "w": "P(X ≥ 4) = 1 − P(X ≤ 3) = 1 − 0.8670 = 0.1330 for n = 20, p = 0.10. 0.8670 is the chance of NOT halting, 0.1901 is P(exactly 3) and 0.0432 is P(X ≥ 5).",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "sfm-q0283",
   "topic": "Applying distributions",
   "q": "Which Excel formula gives P(X ≥ 4) for a binomial variable with n = 20 and p = 0.10?",
   "c": [
    "=1-BINOM.DIST(4,20,0.1,TRUE)",
    "=1-BINOM.DIST(3,20,0.1,TRUE)",
    "=BINOM.DIST(4,20,0.1,FALSE)",
    "=BINOM.DIST(3,20,0.1,TRUE)"
   ],
   "a": [
    1
   ],
   "w": "'4 or more' is the complement of '3 or fewer', so subtract the cumulative value at 3. Using 4 gives P(X ≥ 5); FALSE gives only P(X = 4).",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "sfm-q0284",
   "topic": "Applying distributions",
   "q": "For n = 25 and p = 0.08, what does =BINOM.DIST(3, 25, 0.08, FALSE) return?",
   "c": [
    "0.8649, the probability of 3 or fewer",
    "0.3232, the probability of at least 3",
    "0.6768, the probability of fewer than 3",
    "0.1881, the probability of exactly 3 out-of-spec boxes"
   ],
   "a": [
    3
   ],
   "w": "FALSE gives the mass at one value, P(X = 3) = 0.1881. TRUE would give the cumulative P(X ≤ 3) = 0.8649.",
   "lec": 16,
   "lv": "recall"
  },
  {
   "id": "sfm-q0285",
   "topic": "Applying distributions",
   "q": "A plant wants to stop a properly working line less often. Should its shutdown threshold (the number of failed boxes that triggers a halt) go up or down?",
   "c": [
    "Down: a stricter rule catches problems sooner and halts less",
    "Neither: the threshold does not affect false alarms",
    "Up: demanding more failures before halting makes a halt rarer",
    "Down, provided the sample size also falls"
   ],
   "a": [
    2
   ],
   "w": "P(X ≥ k) falls as k rises. Go Bananas: ≥ 4 halts 13.5% of healthy weeks, ≥ 7 only 0.28%. A stricter (lower) trigger produces more false alarms.",
   "lec": 16,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0286",
   "topic": "Applying distributions",
   "q": "Same blister line (20 strips, 10% mis-sealed when working properly). What is the smallest halt threshold that keeps false halts at 2% or less?",
   "c": [
    "6 or more",
    "5 or more",
    "4 or more",
    "7 or more"
   ],
   "a": [
    0
   ],
   "w": "P(X ≥ 4) = 13.3%, P(X ≥ 5) = 4.3%, P(X ≥ 6) = 1.1%. Six is the first threshold under 2%; seven also works but loosens the rule more than needed.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "sfm-q0287",
   "topic": "Applying distributions",
   "q": "The blister line keeps its rule (halt at 4 or more of 20). Which is the highest defect rate, among these, that keeps false halts at 2% or less?",
   "c": [
    "6%",
    "8%",
    "3%",
    "5%"
   ],
   "a": [
    3
   ],
   "w": "P(X ≥ 4) is 7.1% at p = 8%, 2.9% at 6%, 1.6% at 5% and 0.3% at 3%. 5% is the highest rate that meets the goal; 3% also meets it but asks for more improvement than needed.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "sfm-q0288",
   "topic": "Applying distributions",
   "q": "In the Go Bananas case, why does the lecture prefer improving the process to relaxing the rule from 5 to 7 boxes?",
   "c": [
    "Relaxing the rule would raise the false-alarm rate",
    "Waiting for 7 of 25 boxes (28%) to fail before acting risks the brand's quality, while cutting the defect rate to about 5% meets the 1% goal with the strict rule kept",
    "Process improvement costs nothing",
    "BINOM.DIST cannot handle a 7-box rule"
   ],
   "a": [
    1
   ],
   "w": "Both levers hit the 1% target, but loosening the rule lets far more bad boxes through. His pass-mark analogy: teaching better beats lowering the pass mark.",
   "lec": 16,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0289",
   "topic": "Applying distributions",
   "q": "The lecture says a target of never stopping a properly working line is unrealistic. Why?",
   "c": [
    "No process is 100% error-free, so any sensible halt rule will occasionally be crossed by chance",
    "Because the binomial distribution has no upper limit",
    "Because Excel rounds small probabilities to zero",
    "Because random samples are only random when p = 0"
   ],
   "a": [
    0
   ],
   "w": "With a non-zero defect rate, an in-control sample can always produce an unusual count. Management chooses an acceptable false-alarm rate (here 1%) instead of zero.",
   "lec": 16,
   "lv": "recall"
  },
  {
   "id": "sfm-q0290",
   "topic": "Applying distributions",
   "q": "In B3 you type =BINOM.DIST(A3, F1, F2, FALSE), with n in F1 and p in F2, and drag it down. Row 4 shows an error. What fixes it?",
   "c": [
    "Change FALSE to TRUE",
    "Enter n and p as text",
    "Lock the parameters as $F$1 and $F$2 (press F4) so they do not shift when copied",
    "Sort column A first"
   ],
   "a": [
    2
   ],
   "w": "Dragging shifts relative references, so F1 becomes F2 (holding p, not n) and F2 becomes an empty F3. Absolute references keep every row pointing at the same parameters.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "sfm-q0291",
   "topic": "Applying distributions",
   "q": "Why does the lecture paste the probabilities as values before changing p to try another scenario?",
   "c": [
    "To turn probabilities into percentages",
    "So the copied results stay fixed instead of recalculating when the inputs change",
    "Because Excel cannot copy formulas",
    "So that the chart updates automatically"
   ],
   "a": [
    1
   ],
   "w": "A copied formula still depends on F1 and F2, so changing p would overwrite the old scenario. Paste Special → Values freezes the numbers for side-by-side comparison.",
   "lec": 16,
   "lv": "recall"
  },
  {
   "id": "sfm-q0292",
   "topic": "Applying distributions",
   "q": "Go Bananas (n = 25, rule: 5 or more out of spec) has a 4.5% false-alarm rate at p = 0.08. If the defect rate drifts up to 9%, the false-alarm rate:",
   "c": [
    "Falls to about 2.7%",
    "Stays at 4.5% because the rule is unchanged",
    "Rises to exactly 9%",
    "Rises to about 6.9%"
   ],
   "a": [
    3
   ],
   "w": "A higher p shifts the distribution right, so more samples reach 5 failures: P(X ≥ 5) = 0.0686 at p = 0.09. 2.7% is the figure for p = 0.07.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "sfm-q0293",
   "topic": "Applying distributions",
   "q": "Blister line again (p = 0.10). The plant doubles the sample to 40 strips but keeps the rule 'halt at 4 or more'. What happens to false halts?",
   "c": [
    "They halve to about 6.6%",
    "They stay at 13.3%",
    "They jump from about 13% to about 58%",
    "They fall to zero"
   ],
   "a": [
    2
   ],
   "w": "With 40 strips the expected count is np = 4, so 'four or more' happens in P(X ≥ 4) = 0.577 of healthy shifts. A bigger sample needs a bigger trigger count.",
   "lec": 16,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0294",
   "topic": "Applying distributions",
   "q": "The shutdown rule is '5 or more boxes out of spec'. Which expression gives its probability?",
   "c": [
    "1 − P(X ≤ 4)",
    "1 − P(X ≤ 5)",
    "P(X ≤ 5)",
    "P(X = 5)"
   ],
   "a": [
    0
   ],
   "w": "'5 or more' is the complement of '4 or fewer'. 1 − P(X ≤ 5) leaves out x = 5 and gives P(X ≥ 6) = 0.0123 instead of 0.0451.",
   "lec": 16,
   "lv": "recall"
  },
  {
   "id": "sfm-q0295",
   "topic": "Applying distributions",
   "q": "On a properly working Go Bananas line (n = 25, p = 0.08), how many out-of-spec boxes do you expect in a weekly sample?",
   "c": [
    "8",
    "0.08",
    "5",
    "2"
   ],
   "a": [
    3
   ],
   "w": "E(X) = np = 25 × 0.08 = 2. The 5-box rule is set well above this average so that ordinary weeks rarely trigger it.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "sfm-q0296",
   "topic": "Applying distributions",
   "q": "In R, which expression gives P(X ≥ 5) for a binomial with n = 25 and p = 0.08?",
   "c": [
    "1 - dbinom(4, 25, 0.08)",
    "1 - pbinom(4, 25, 0.08)",
    "pbinom(5, 25, 0.08)",
    "dbinom(5, 25, 0.08)"
   ],
   "a": [
    1
   ],
   "w": "pbinom is cumulative P(X ≤ x), like Excel's TRUE; dbinom is the exact probability, like FALSE. '5 or more' = 1 − P(X ≤ 4) = 0.0451.",
   "lec": 16,
   "lv": "recall"
  },
  {
   "id": "sfm-q0297",
   "topic": "Sampling methods",
   "q": "Which of these is NOT one of the reasons for sampling given in the lecture?",
   "c": [
    "A sample always gives the exact population value",
    "Testing the whole population may be impossible",
    "Sampling saves time and cost",
    "Sampling avoids destroying products in testing"
   ],
   "a": [
    0
   ],
   "w": "A sample gives an estimate, not the exact value; the lecture stresses that sample results are close but not identical. Impossibility, time, cost and destruction are the reasons it lists.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "sfm-q0298",
   "topic": "Sampling methods",
   "q": "A tyre maker runs a few tyres for 10,000 km on a test rig instead of testing every tyre. Which reason for sampling does this mainly illustrate?",
   "c": [
    "The population of tyres cannot be listed",
    "Tyres are an infinite population",
    "Testing wears the unit out, so testing everything would leave nothing to sell",
    "A sample of tyres always has a smaller variance"
   ],
   "a": [
    2
   ],
   "w": "This is destructive testing: a tyre run for its full warranty distance cannot be sold as new. A batch of tyres can be listed, so it is not an infinite-population problem.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "sfm-q0299",
   "topic": "Sampling methods",
   "q": "To judge whether a large pot of biryani is cooked, a cook tastes one spoonful taken from the very bottom. What is the main risk?",
   "c": [
    "One spoonful is too large a sample",
    "The spoonful may not represent the pot; spoonfuls from several places would be better",
    "Tasting is a nonprobability method, so no conclusion is possible",
    "The bottom of the pot is the target population"
   ],
   "a": [
    1
   ],
   "w": "A sample from one unusual spot can be biased, like sampling outliers. The lecture's fix is to take small samples from different places so they represent the whole pot.",
   "lec": 17,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0300",
   "topic": "Sampling methods",
   "q": "A college numbers its 900 applications from 1 to 900 and will draw a sample from this list. The numbered list is called the:",
   "c": [
    "Sampled population",
    "Parameter",
    "Point estimator",
    "Frame"
   ],
   "a": [
    3
   ],
   "w": "A frame is the list of elements the sample is selected from. A parameter is a population value such as μ.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "sfm-q0301",
   "topic": "Sampling methods",
   "q": "Which statement defines a simple random sample of size n from a finite population of size N?",
   "c": [
    "Every kth element on the list is selected",
    "The n most typical elements are selected by an expert",
    "Every possible sample of size n has the same chance of being selected",
    "Elements are added until the sample mean equals the population mean"
   ],
   "a": [
    2
   ],
   "w": "It is the equal chance of every possible SAMPLE (not just every element) that defines a simple random sample. Every kth element is systematic sampling; expert choice is judgement sampling.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "sfm-q0302",
   "topic": "Sampling methods",
   "q": "In sampling WITH replacement:",
   "c": [
    "An element can appear in the sample more than once",
    "No element can be chosen twice",
    "The population grows after each draw",
    "Only infinite populations can be sampled"
   ],
   "a": [
    0
   ],
   "w": "Each selected element is returned before the next draw, so it can be drawn again. Industry usually samples without replacement so that no unit is tested twice.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "sfm-q0303",
   "topic": "Sampling methods",
   "q": "Which of these is an infinite population in the lecture's sense?",
   "c": [
    "Students enrolled in a batch",
    "A bank's credit-card account numbers",
    "Product codes in an inventory list",
    "Calls arriving at a technical help desk"
   ],
   "a": [
    3
   ],
   "w": "Help-desk calls come from an ongoing process with no upper limit, so no complete list (frame) exists. The other three can be listed in full.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "sfm-q0304",
   "topic": "Sampling methods",
   "q": "A brand planning its Diwali-week promotion surveys a random sample of shoppers in July. What is the main problem?",
   "c": [
    "July shoppers are an infinite population",
    "The target population (Diwali-week shoppers) and the sampled population (July shoppers) do not agree closely",
    "The sample is too small to be random",
    "There is no problem, because the sample is random"
   ],
   "a": [
    1
   ],
   "w": "Randomness within the wrong population does not help: buying behaviour in a festival season differs from ordinary months. The sampled population must match the target in time as well as place.",
   "lec": 17,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0305",
   "topic": "Sampling distributions",
   "q": "A cook presses 50 grains from a pot of rice and finds 48 cooked. What is 0.96?",
   "c": [
    "A point estimate of the proportion of cooked grains in the pot",
    "The population proportion of cooked grains",
    "The point estimator of p",
    "The sampling error"
   ],
   "a": [
    0
   ],
   "w": "48/50 = 0.96 is the value the sample proportion took for this sample: a point estimate of p. The estimator is the rule (the sample proportion), and the true pot-wide share remains unknown.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "sfm-q0306",
   "topic": "Sampling distributions",
   "q": "Which pairing of point estimator and population parameter is correct?",
   "c": [
    "μ estimates x̄",
    "p̂ estimates s",
    "s estimates σ",
    "σ estimates s"
   ],
   "a": [
    2
   ],
   "w": "Sample statistics estimate population parameters: x̄ → μ, s → σ, p̂ → p. Parameters never estimate statistics.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "sfm-q0307",
   "topic": "Sampling distributions",
   "q": "A random sample of 30 applications gives x̄ = 1,684; the mean of all 900 later turns out to be μ = 1,697. How should the 13-point gap be read?",
   "c": [
    "As proof that the sample was not random",
    "As the normal estimation error of using part of the population, not as proof of bias",
    "As a data-entry error in the population file",
    "As the standard error of the mean"
   ],
   "a": [
    1
   ],
   "w": "Different random samples give different x̄ values, so a small gap is expected; the lecture calls 1,684 very close to 1,697. The standard error is the typical size of such gaps, not this one gap.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "sfm-q0308",
   "topic": "Sampling methods",
   "q": "In the Excel exercise, which function gives the standard deviation of the 50 sampled salaries?",
   "c": [
    "=STDEV.P(range)",
    "=AVERAGE(range)",
    "=RANDBETWEEN(1,50)",
    "=STDEV.S(range)"
   ],
   "a": [
    3
   ],
   "w": "STDEV.S is the sample standard deviation s (dividing by n − 1). The lecture uses STDEV.P only for the full population of 2,500.",
   "lec": 17,
   "lv": "recall"
  },
  {
   "id": "sfm-q0309",
   "topic": "Sampling methods",
   "q": "After filling =RANDBETWEEN(1,50) down 2,500 rows, why does the lecture paste the column as values before sorting?",
   "c": [
    "To convert the numbers into percentages",
    "Because Excel cannot sort formulas",
    "Otherwise the random numbers recalculate on every edit and the sample keeps changing",
    "To remove ties between equal random numbers"
   ],
   "a": [
    2
   ],
   "w": "RANDBETWEEN is volatile: any change to the sheet, including a sort, draws new numbers. Pasting as values freezes one random ordering. It does not remove ties.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "sfm-q0310",
   "topic": "Sampling methods",
   "q": "Which order of steps does the lecture use to draw a random sample of 50 from 2,500 rows in Excel?",
   "c": [
    "Assign random numbers, paste them as values, sort by them, take the first 50 rows",
    "Sort by salary, take the top 50, then assign random numbers",
    "Take the first 50 rows of the file, then assign random numbers",
    "Assign random numbers and keep only the row numbered 50"
   ],
   "a": [
    0
   ],
   "w": "Random numbers decide the order, so they must come first and be frozen; then any 50 rows at the top of the sorted list are a random sample. Taking the first or top-salary rows builds in a pattern.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "sfm-q0311",
   "topic": "Sampling distributions",
   "q": "30 of the 50 sampled managers had attended training. What is the point estimate of the population proportion trained?",
   "c": [
    "30",
    "0.012",
    "0.50",
    "0.60"
   ],
   "a": [
    3
   ],
   "w": "p̂ = 30/50 = 0.60, which here matches the population value 1,500/2,500 exactly. 0.012 divides by the population size instead of the sample size.",
   "lec": 17,
   "lv": "apply"
  },
  {
   "id": "sfm-q0312",
   "topic": "Sampling distributions",
   "q": "The lecture predicts that every student who repeats the 50-manager exercise will get a different x̄, all close to $71,800. Why?",
   "c": [
    "Excel's AVERAGE function is only approximate",
    "Each random sample contains different managers, so x̄ varies from sample to sample around μ",
    "The population mean changes each time the file is opened",
    "Some students will use STDEV.P instead of STDEV.S"
   ],
   "a": [
    1
   ],
   "w": "x̄ is a random variable: its value depends on which elements were drawn. Its spread around μ is the sampling distribution, the subject of the next lecture.",
   "lec": 17,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0313",
   "topic": "Applying distributions",
   "q": "At McNeil's Auto Mall, Saturday-morning customers arrive at random at a constant average rate of 6.8 an hour. Which distribution describes the number arriving in an hour?",
   "c": [
    "Poisson with μ = 6.8",
    "Binomial with n = 6.8",
    "Normal with σ = 6.8",
    "Exponential with a mean of 6.8 customers"
   ],
   "a": [
    0
   ],
   "w": "A count of random occurrences in a fixed interval at a constant rate is Poisson, with its single parameter μ = 6.8. The exponential would describe the time between arrivals, not their number.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "sfm-q0314",
   "topic": "Applying distributions",
   "q": "A bank's loan desk gets walk-ins as a Poisson process with a mean of 5.4 an hour, and each officer spends an hour with one customer. With 4 officers, what is the probability that customers exceed officers by more than two?",
   "c": [
    "0.7017",
    "0.1555",
    "0.2983",
    "0.4539"
   ],
   "a": [
    2
   ],
   "w": "More than 4 + 2 = 6 arrivals: P(X > 6) = 1 − P(X ≤ 6) = 1 − 0.7017 = 0.2983. 0.1555 is P(exactly 6); 0.4539 is P(X > 5), which wrongly counts 6 arrivals as crowding.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "sfm-q0315",
   "topic": "Applying distributions",
   "q": "Same loan desk (Poisson, mean 5.4 an hour). The manager accepts more than two customers beyond the number of officers at most 10% of the time. What is the minimum number of officers?",
   "c": [
    "5",
    "6",
    "7",
    "8"
   ],
   "a": [
    1
   ],
   "w": "Find the smallest s with 1 − P(X ≤ s + 2) ≤ 0.10: s = 5 gives 0.1783, s = 6 gives 0.0973. Seven also works but is not the minimum.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "sfm-q0316",
   "topic": "Applying distributions",
   "q": "For McNeil (μ = 6.8, five salespeople), a student adds P(8) + P(9) + P(10) + P(11) and gets about 0.33 instead of 0.3715. What went wrong?",
   "c": [
    "The binomial should have been used instead",
    "Probabilities above 11 are negative",
    "P(7) should also have been added",
    "The Poisson has no upper limit, so the tail must be found as 1 − P(X ≤ 7)"
   ],
   "a": [
    3
   ],
   "w": "Arrivals of 12, 13, … still have positive probability, so a hand-added tail always falls short. P(7) must not be added: exactly 7 customers is within the 'two extra' allowance.",
   "lec": 18,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0317",
   "topic": "Distributions",
   "q": "Which wording calls for POISSON.DIST(x, μ, FALSE) rather than TRUE?",
   "c": [
    "At most 10 customers arrive",
    "More than 10 customers arrive",
    "Exactly 10 customers arrive",
    "Up to 10 customers arrive"
   ],
   "a": [
    2
   ],
   "w": "FALSE returns the mass at a single value, which is what 'exactly' asks for. 'At most' and 'up to' are cumulative (TRUE); 'more than' is 1 minus the cumulative.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "sfm-q0318",
   "topic": "Applying distributions",
   "q": "McNeil (μ = 6.8) now has 8 salespeople. What is the probability that exactly 10 customers arrive in an hour, i.e. exactly two more than can be served?",
   "c": [
    "0.0649",
    "0.9151",
    "0.0849",
    "0.1498"
   ],
   "a": [
    0
   ],
   "w": "'Exactly' means the mass: POISSON.DIST(10, 6.8, FALSE) = 0.0649. 0.9151 is P(X ≤ 10) and 0.0849 is P(X > 10), the crowding risk.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "sfm-q0319",
   "topic": "Distributions",
   "q": "=NORM.DIST(50, 50, 5, FALSE) returns 0.0798. What is this number?",
   "c": [
    "The probability that X equals exactly 50",
    "The probability that X is at most 50",
    "The standard error of the mean",
    "The height of the normal curve at 50, not a probability"
   ],
   "a": [
    3
   ],
   "w": "For a continuous variable, FALSE gives the density height. P(X = 50) is zero, and P(X ≤ 50) = NORM.DIST(50, 50, 5, TRUE) = 0.5.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "sfm-q0320",
   "topic": "Distributions",
   "q": "Why does the lecturer advise computing z and using NORM.S.DIST rather than going straight to NORM.DIST?",
   "c": [
    "NORM.DIST gives wrong answers",
    "z shows how many standard deviations a value lies from the mean, which makes results easier to interpret and compare",
    "NORM.S.DIST also works for discrete variables",
    "NORM.DIST needs the sample size as an input"
   ],
   "a": [
    1
   ],
   "w": "Both functions return the same probability. The standardised route is preferred for understanding: z = −1.2 immediately says 1.2 standard deviations below the mean.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "sfm-q0321",
   "topic": "Distributions",
   "q": "Graduate salaries are normal with μ = ₹9 lakh and σ = ₹1.5 lakh. What is P(₹6.9 lakh ≤ salary ≤ ₹10.5 lakh)?",
   "c": [
    "0.7606",
    "0.9221",
    "0.8413",
    "0.0808"
   ],
   "a": [
    0
   ],
   "w": "z₁ = −2.1/1.5 = −1.4 and z₂ = 1.5/1.5 = 1, so P = 0.8413 − 0.0808 = 0.7606. Adding the two table values (0.9221) is the classic slip; 0.8413 alone is the area below ₹10.5 lakh.",
   "lec": 18,
   "lv": "apply"
  },
  {
   "id": "sfm-q0322",
   "topic": "Distributions",
   "q": "According to Live Lecture 4, what format and scoring should students expect for the quizzes?",
   "c": [
    "Long numerical answers in a single attempt",
    "Multiple-choice questions, with the average of all three quizzes counting",
    "Objective multiple-choice questions, with the best two of the three quizzes counting",
    "Written case reports, with only the final quiz counting"
   ],
   "a": [
    2
   ],
   "w": "He said there are no long numericals, only objective MCQs, and reassured students that a weak first quiz can be offset because the best two of three count.",
   "lec": 18,
   "lv": "recall"
  },
  {
   "id": "sfm-q0323",
   "topic": "Sampling distributions",
   "q": "100 students each draw a random sample of 50 from the same population and compute x̄. The distribution of those 100 means approximates:",
   "c": [
    "The sampling distribution of x̄",
    "The population distribution",
    "The distribution of the 50 values in one sample",
    "The standard normal table"
   ],
   "a": [
    0
   ],
   "w": "Each sample gives one x̄; the spread of x̄ across many samples is the sampling distribution of the mean. It is narrower than the population distribution.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "sfm-q0324",
   "topic": "Sampling distributions",
   "q": "The mean of all possible sample means (the grand mean) equals the population mean μ. This property makes x̄:",
   "c": [
    "The standard error of μ",
    "A biased but efficient estimator",
    "An unbiased estimator of μ",
    "A parameter rather than a statistic"
   ],
   "a": [
    2
   ],
   "w": "An estimator is unbiased when its expected value equals the parameter: E(x̄) = μ. It remains a statistic, since its value changes from sample to sample.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "sfm-q0325",
   "topic": "Sampling distributions",
   "q": "A population of 1,200 invoices has σ = ₹48. For random samples of 36 invoices, what standard error of the mean should be used?",
   "c": [
    "₹1.33",
    "₹8",
    "₹7.88",
    "₹0.04"
   ],
   "a": [
    1
   ],
   "w": "n/N = 36/1,200 = 0.03 < 0.05, so treat the population as infinite: σx̄ = 48/√36 = 8. Applying the correction anyway gives 7.88, an unnecessary refinement; 48/36 = 1.33 divides by n instead of √n.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "sfm-q0326",
   "topic": "Sampling distributions",
   "q": "N = 500, n = 100 and σ = 30. What is the standard error of x̄?",
   "c": [
    "3.00",
    "2.40",
    "0.30",
    "2.69"
   ],
   "a": [
    3
   ],
   "w": "n/N = 0.2 > 0.05, so apply the correction: √(400/499) = 0.8953, and 0.8953 × 30/√100 = 2.69. 3.00 ignores it; 2.40 forgets the square root on the factor.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "sfm-q0327",
   "topic": "Sampling distributions",
   "q": "According to the lecture, when can a finite population be treated as infinite?",
   "c": [
    "When n is at least 30",
    "When N is at least 1,000",
    "When n/N is less than 0.05",
    "When np and n(1 − p) are both at least 5"
   ],
   "a": [
    2
   ],
   "w": "The correction factor is close to 1 once the sample is under 5% of the population. n ≥ 30 is the CLT rule of thumb, and np ≥ 5 is the condition for p̂ to be normal.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "sfm-q0328",
   "topic": "Sampling distributions",
   "q": "A class has 100 students and every 'sample' includes all 100. Using the finite population correction, the standard error of the mean is:",
   "c": [
    "0, because every sample is the whole class and gives the same mean",
    "σ/10",
    "σ/√99",
    "Undefined, because n/N is above 0.05"
   ],
   "a": [
    0
   ],
   "w": "With n = N the factor is √[(100 − 100)/99] = 0, so σx̄ = 0: there is no sample-to-sample variation when everyone measures the same 100 people.",
   "lec": 19,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0329",
   "topic": "Sampling distributions",
   "q": "A sample of 30 is taken from a heavily right-skewed population of incomes. Which statement is true?",
   "c": [
    "The 30 incomes will be normally distributed",
    "The population becomes normal once n ≥ 30",
    "x̄ cannot be used because the population is skewed",
    "The 30 incomes in the sample still look right-skewed; it is x̄ across many samples that is near normal"
   ],
   "a": [
    3
   ],
   "w": "The CLT is about the sampling distribution of the mean. Individual sample values keep the population's shape, and the population itself never changes. For heavy skew the lecture suggests n of 50 or more.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "sfm-q0330",
   "topic": "Sampling distributions",
   "q": "In the lecture's CLT picture, uniform, bimodal and exponential populations are sampled with n = 2, 5 and 30. What happens?",
   "c": [
    "Only the uniform population ever gives a normal x̄",
    "The sampling distributions of x̄ move toward a bell shape as n grows and look normal for all three by n = 30",
    "The three populations themselves become normal by n = 30",
    "Nothing changes, because the populations have different shapes"
   ],
   "a": [
    1
   ],
   "w": "Whatever the parent shape, the distribution of the sample mean approaches normal as n grows; by n = 30 all three are close. The populations keep their own shapes.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "sfm-q0331",
   "topic": "Sampling distributions",
   "q": "Delivery times have σ = 48 minutes. For a random sample of 36 deliveries from a very large population, what is the probability that x̄ is within ±12 minutes of μ?",
   "c": [
    "0.8664",
    "0.9332",
    "0.1974",
    "0.4332"
   ],
   "a": [
    0
   ],
   "w": "σx̄ = 48/√36 = 8, so z = ±12/8 = ±1.5 and P = 0.9332 − 0.0668 = 0.8664. Dividing by σ instead of the standard error gives z = 0.25 and 0.1974, the answer for a single delivery.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "sfm-q0332",
   "topic": "Sampling distributions",
   "q": "A population has μ = 40 and σ = 12. For a random sample of 36, what is P(x̄ > 43)?",
   "c": [
    "0.4013",
    "0.9332",
    "0.0668",
    "0.1336"
   ],
   "a": [
    2
   ],
   "w": "σx̄ = 12/6 = 2 and z = 3/2 = 1.5, so P(x̄ > 43) = 1 − 0.9332 = 0.0668. 0.4013 uses σ instead of σx̄; 0.1336 counts both tails.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "sfm-q0333",
   "topic": "Sampling distributions",
   "q": "St Andrew's: μ = 1,697, σ = 87.4, samples of 30 (no correction needed). Which Excel formula gives P(x̄ ≤ 1,707)?",
   "c": [
    "=NORM.DIST(1707,1697,87.4,TRUE)",
    "=NORM.DIST(1707,1697,87.4/SQRT(30),TRUE)",
    "=NORM.DIST(1707,1697,87.4/30,TRUE)",
    "=NORM.S.DIST(1707,TRUE)"
   ],
   "a": [
    1
   ],
   "w": "For a sample mean the standard deviation argument is the standard error σ/√n = 15.96. Using 87.4 treats x̄ like one applicant's score; 87.4/30 divides by n; NORM.S.DIST needs a z.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "sfm-q0334",
   "topic": "Sampling distributions",
   "q": "For St Andrew's, P(x̄ within ±10 of μ) rises from about 0.47 with n = 30 to about 0.78 with n = 100. Why?",
   "c": [
    "The population mean moves closer to the sample mean",
    "σ falls as the sample grows",
    "The central limit theorem only applies from n = 100",
    "The standard error falls from 15.96 to 8.2, so the sampling distribution is narrower and more of it lies within ±10"
   ],
   "a": [
    3
   ],
   "w": "σ and μ are fixed population values. A larger n shrinks σx̄, so the same ±10 margin is now ±1.22 standard errors instead of ±0.63.",
   "lec": 19,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0335",
   "topic": "Sampling distributions",
   "q": "For St Andrew's (N = 900), why is the finite population correction applied for n = 100 but not for n = 30?",
   "c": [
    "Because 100 is above the n ≥ 30 rule",
    "Because the population of SAT scores is skewed",
    "n/N is 0.111 for n = 100 but only 0.033 for n = 30; the correction is needed only above 0.05",
    "It is applied to both, giving the same factor 0.9433"
   ],
   "a": [
    2
   ],
   "w": "The rule depends on the sampling fraction n/N, not on n alone. For n = 30 the factor would be √(870/899) = 0.98, close enough to 1 to ignore.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "sfm-q0336",
   "topic": "Sampling distributions",
   "q": "40% of a bank's customers use UPI daily. For random samples of 150 customers, what is P(p̂ is within ±0.08 of 0.40)?",
   "c": [
    "0.9545",
    "0.4772",
    "0.6827",
    "0.9772"
   ],
   "a": [
    0
   ],
   "w": "σp̂ = √(0.40 × 0.60/150) = 0.04, so z = ±0.08/0.04 = ±2 and P = 0.9772 − 0.0228 = 0.9545. 0.9772 is only the area below +2; 0.4772 is one half of the band.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "sfm-q0337",
   "topic": "Sampling distributions",
   "q": "6% of a courier's parcels arrive damaged. Can the sampling distribution of p̂ for samples of 120 parcels be treated as normal?",
   "c": [
    "No: p is below 0.10",
    "No: each category needs at least 30 items",
    "Yes, simply because n is above 30",
    "Yes: np = 7.2 and n(1 − p) = 112.8 are both at least 5"
   ],
   "a": [
    3
   ],
   "w": "Both expected counts must be at least 5: 120 × 0.06 = 7.2 and 120 × 0.94 = 112.8. A sample of 40 would fail (np = 2.4) even though 40 > 30, so n ≥ 30 alone is not the test.",
   "lec": 19,
   "lv": "apply"
  },
  {
   "id": "sfm-q0338",
   "topic": "Sampling distributions",
   "q": "In 'the probability that the sample mean is within ±10 of the population mean', which quantity is random?",
   "c": [
    "The population mean μ",
    "The sample mean x̄; μ is a fixed number",
    "Both μ and x̄",
    "Neither; σ alone fixes the probability"
   ],
   "a": [
    1
   ],
   "w": "μ is a fixed (if unknown) parameter. x̄ changes from sample to sample, and its sampling distribution gives the probability of landing within the margin.",
   "lec": 19,
   "lv": "recall"
  },
  {
   "id": "sfm-q0339",
   "topic": "Sampling distributions",
   "q": "For St Andrew's (n = 30, ±10) the lecture's answer is 0.4714, but NORM.DIST with the exact standard error gives 0.4691. Which is right?",
   "c": [
    "Both: the lecture rounds z to 0.63 for the table, Excel uses z = 0.6267",
    "Only 0.4714, because Excel is approximate",
    "Only 0.4691, because the table method is wrong",
    "Neither: the finite population correction is missing"
   ],
   "a": [
    0
   ],
   "w": "The difference is only the rounding of z. n/N = 0.033, so no correction is needed. In a quiz pick the option that matches the method; the lecture's figures use rounded z.",
   "lec": 19,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0340",
   "topic": "Sampling methods",
   "q": "In stratified random sampling, the population is divided into groups whose members are:",
   "c": [
    "As alike as possible, with each element in exactly one stratum",
    "As mixed as possible, each group a mini-population",
    "Chosen by an expert as typical",
    "Selected at fixed intervals from a list"
   ],
   "a": [
    0
   ],
   "w": "Strata are homogeneous and non-overlapping; a random sample is drawn from each. Mixed mini-populations describe clusters; fixed intervals describe systematic sampling.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "sfm-q0341",
   "topic": "Sampling methods",
   "q": "In cluster sampling, once the clusters have been chosen at random:",
   "c": [
    "A random sample is drawn from every cluster",
    "Only the largest cluster is surveyed",
    "Every element in each chosen cluster is included",
    "Every k-th element of each cluster is surveyed"
   ],
   "a": [
    2
   ],
   "w": "Cluster sampling takes whole clusters. Drawing a random sample from every group is stratified sampling.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "sfm-q0342",
   "topic": "Sampling methods",
   "q": "A ministry surveys citizens about a new policy by picking 20 cities at random, and the sample contains no small towns and no southern states. What would fix this?",
   "c": [
    "Survey whoever is easy to reach in Delhi and Mumbai",
    "Stratify by region and town size, then draw a random sample within each stratum",
    "Treat one large city as a single cluster and survey all of it",
    "Ask officials to name the most typical citizens"
   ],
   "a": [
    1
   ],
   "w": "Stratifying guarantees every segment appears, and random sampling within strata keeps it a probability method. The other options are convenience, a single unrepresentative cluster and judgement.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0343",
   "topic": "Sampling methods",
   "q": "What is the main disadvantage of cluster sampling given in the lecture?",
   "c": [
    "Its results cannot be evaluated statistically",
    "It needs a complete list of every element in the population",
    "It works only for infinite populations",
    "It usually needs a larger total sample than simple random or stratified sampling"
   ],
   "a": [
    3
   ],
   "w": "Taking whole clusters of nearby elements is cheap but less informative per element, so more elements are needed. It is still a probability method, so it can be evaluated.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "sfm-q0344",
   "topic": "Sampling methods",
   "q": "An auditor wants a systematic sample of 40 from 1,200 numbered invoices. Which procedure is correct?",
   "c": [
    "Take every 40th invoice, starting from invoice 40",
    "Take the first 40 invoices",
    "Take every 30th invoice, starting from a randomly chosen one among the first 30",
    "Take every 30th invoice, starting from invoice 1"
   ],
   "a": [
    2
   ],
   "w": "k = N/n = 1,200/40 = 30, and the start must be random within the first 30. Starting at invoice 1 every time fixes the sample in advance; 40 is the sample size, not the interval.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "sfm-q0345",
   "topic": "Sampling methods",
   "q": "A systematic sample behaves much like a simple random sample mainly when:",
   "c": [
    "The list or arrival order has no pattern that lines up with the sampling interval",
    "The sampling interval is a prime number",
    "The population is homogeneous",
    "The sample size is at least 30"
   ],
   "a": [
    0
   ],
   "w": "The lecture's condition is a random ordering with no set pattern. If every 10th row of a roster were, say, a team leader, a k = 10 sample could pick only team leaders.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0346",
   "topic": "Sampling methods",
   "q": "A professor studies the students in her own class because they are easy to reach. Which method is this?",
   "c": [
    "Cluster sampling, because the class is a cluster",
    "Stratified sampling",
    "Simple random sampling",
    "Convenience sampling, a non-probability method"
   ],
   "a": [
    3
   ],
   "w": "Selection is by accessibility, with no known probabilities: convenience sampling. A class would be a cluster only if it had been chosen at random from many classes.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "sfm-q0347",
   "topic": "Sampling methods",
   "q": "A class teacher picks the three students she believes best represent the class's ability to send to an Olympiad. Which method is this?",
   "c": [
    "Convenience sampling",
    "Judgement sampling",
    "Stratified sampling",
    "Systematic sampling"
   ],
   "a": [
    1
   ],
   "w": "A knowledgeable person chooses the elements she judges most representative. The risk is that she misjudges, for example by overlooking a new student who is excellent.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "sfm-q0348",
   "topic": "Sampling methods",
   "q": "Why can the accuracy of a convenience or judgement sample not be evaluated?",
   "c": [
    "The probability of each element being selected is unknown",
    "The samples are always too small",
    "They cannot be drawn in Excel",
    "They work only for finite populations"
   ],
   "a": [
    0
   ],
   "w": "Standard errors and similar formulas rely on known selection probabilities. Without them there is no way to say how close the result is likely to be to the population value.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "sfm-q0349",
   "topic": "Sampling methods",
   "q": "According to the lecture, why does much research on organisations rely on convenience samples?",
   "c": [
    "Convenience samples are more accurate than random ones",
    "Probability samples are not allowed in published research",
    "Listing every organisation and gaining access to a random selection of them is close to impossible",
    "Organisations form an infinite population"
   ],
   "a": [
    2
   ],
   "w": "Access is the constraint: researchers can reach firms where they know people. The price is that representativeness cannot be judged.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0350",
   "topic": "Sampling distributions",
   "q": "A firm doubles the size of its customer survey. Which of these changes?",
   "c": [
    "The population standard deviation falls",
    "The standard error of the mean falls",
    "The population mean rises",
    "The standard error of the mean rises"
   ],
   "a": [
    1
   ],
   "w": "σx̄ = σ/√n shrinks as n grows (doubling n cuts it by about 29%). σ and μ describe the population and are fixed.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "sfm-q0351",
   "topic": "Sampling distributions",
   "q": "In point estimation, data from the ___ are used to estimate the ___.",
   "c": [
    "population; population parameter",
    "sample; sample statistic",
    "population; sample statistic",
    "sample; population parameter"
   ],
   "a": [
    3
   ],
   "w": "We compute a statistic from the sample to estimate an unknown parameter. With the population's data in hand there would be nothing to estimate.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "sfm-q0352",
   "topic": "Sampling methods",
   "q": "A radio station gives a prize to every 100th caller. Which sampling idea does this follow?",
   "c": [
    "Cluster sampling",
    "Judgement sampling",
    "Systematic sampling",
    "Stratified sampling"
   ],
   "a": [
    2
   ],
   "w": "A fixed interval through a stream with no pattern: systematic sampling. Nobody can arrange to be the 100th caller, so the winner is effectively random.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "sfm-q0353",
   "topic": "Sampling methods",
   "q": "An NGO picks 15 villages in a district at random and interviews every household in them. Which method is this?",
   "c": [
    "Cluster sampling",
    "Stratified sampling",
    "Systematic sampling",
    "Convenience sampling"
   ],
   "a": [
    0
   ],
   "w": "Villages are the clusters; some are chosen at random and every element in them is included. Stratified sampling would sample households from every village.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "sfm-q0354",
   "topic": "Sampling methods",
   "q": "A college draws a random sample of students from each of its departments before launching a campus-wide initiative. Which method is this?",
   "c": [
    "Cluster sampling",
    "Judgement sampling",
    "Systematic sampling",
    "Stratified random sampling"
   ],
   "a": [
    3
   ],
   "w": "Departments act as strata: every one is sampled at random, so no department is left out. Cluster sampling would survey a few whole departments only.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "sfm-q0355",
   "topic": "Sampling methods",
   "q": "Which statement correctly contrasts stratified and cluster sampling?",
   "c": [
    "Strata are internally mixed; clusters are internally alike",
    "Strata are internally alike and all are sampled; clusters are internally mixed and only some are taken, in full",
    "Both sample every group, but cluster sampling uses larger groups",
    "Stratified is a non-probability method and cluster is a probability method"
   ],
   "a": [
    1
   ],
   "w": "The two designs are opposites: homogeneous strata, all sampled, versus heterogeneous clusters, a few taken whole. Both are probability methods.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0356",
   "topic": "Sampling methods",
   "q": "Which recommendation does the lecture make for sampling in management decisions?",
   "c": [
    "Use a probability method whenever possible, because its results can be evaluated against the population",
    "Use judgement sampling, because experts know the population best",
    "Use convenience sampling, because it is cheapest",
    "Any method is fine as long as the sample is large"
   ],
   "a": [
    0
   ],
   "w": "Probability methods allow the closeness of results to be assessed with formulas; non-probability methods do not, whatever the sample size.",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "sfm-q0357",
   "topic": "Applying distributions",
   "q": "Go Bananas keeps its rule (shut down if 5 or more of 25 boxes are out of spec). Which of these out-of-spec rates is the highest that keeps false shutdowns at or below 1%?",
   "c": [
    "5.5%",
    "6%",
    "5%",
    "4%"
   ],
   "a": [
    2
   ],
   "w": "P(X ≥ 5) is 0.0072 at 5%, 0.0106 at 5.5% and 0.0150 at 6%. The exact break-even is about 5.4%, so 5.5% just misses; 4% (0.0028) meets the goal but asks for more improvement than needed.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "sfm-q0358",
   "topic": "Applying distributions",
   "q": "A healthy Go Bananas line is stopped in 4.51% of weekly samples under the 5-box rule. Roughly how many needless shutdowns is that over a 52-week year?",
   "c": [
    "About 2.3",
    "About 4.5",
    "About 0.45",
    "About 23"
   ],
   "a": [
    0
   ],
   "w": "Expected shutdowns = 52 × 0.0451 ≈ 2.3 a year. 4.5 confuses the percentage with a count; 23 would need a 45% weekly rate.",
   "lec": 16,
   "lv": "apply"
  },
  {
   "id": "sfm-q0359",
   "topic": "Applying distributions",
   "q": "Suppose the Go Bananas line really does go wrong and 20% of boxes fall out of spec. In a weekly sample of 25, how likely is each rule to stop it?",
   "c": [
    "Both rules stop it about 99% of the time",
    "5-box rule about 22%, 7-box rule about 58%",
    "Both rules stop it about 1% of the time",
    "5-box rule about 58%, 7-box rule about 22%"
   ],
   "a": [
    3
   ],
   "w": "With p = 0.20, P(X ≥ 5) = 0.579 and P(X ≥ 7) = 0.220. Loosening the rule to 7 cuts false alarms but also lets a badly faulty line run in most weeks, which is why the lecture prefers improving the process.",
   "lec": 16,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0360",
   "topic": "Applying distributions",
   "q": "Management wants to shut down Go Bananas production no more than 1% of the time when the process is working properly. Which probability does this goal limit?",
   "c": [
    "P(the line is faulty, given that it was shut down)",
    "P(a single box is out of spec)",
    "P(shutdown, given that the line is working properly)",
    "P(no shutdown, given that the line is faulty)"
   ],
   "a": [
    2
   ],
   "w": "The goal is about false alarms: shutdowns of a healthy line, P(X ≥ 5 | p = 0.08). The chance of missing a faulty line is a different conditional probability that the case does not set a limit on.",
   "lec": 16,
   "lv": "recall"
  },
  {
   "id": "sfm-q0361",
   "topic": "Sampling distributions",
   "q": "240 hotel guests answer a feedback question: 132 say Yes, 84 say No and 24 are undecided. What is the point estimate of the proportion of all guests who would say No?",
   "c": [
    "0.389",
    "0.55",
    "0.35",
    "0.10"
   ],
   "a": [
    2
   ],
   "w": "p̂ = 84/240 = 0.35: the undecided guests are still part of the sample. 0.389 divides by Yes + No only (216); 0.55 is the Yes proportion.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "sfm-q0362",
   "topic": "Sampling distributions",
   "q": "A shop's sales over five weeks are 42, 47, 51, 38 and 52 units. What is the point estimate of the population standard deviation of weekly sales?",
   "c": [
    "5.96 units",
    "5.33 units",
    "35.5 units",
    "28.4 units"
   ],
   "a": [
    0
   ],
   "w": "x̄ = 46; squared deviations sum to 142; s = √(142/4) = 5.96. 5.33 divides by n = 5 (the population formula); 35.5 and 28.4 are the variances, not standard deviations.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "sfm-q0363",
   "topic": "Sampling distributions",
   "q": "A dairy weighs random samples of 36 packets. Over many weeks, 2.5% of the sample means are above 505 g and 2.5% are below 495 g. What is the standard deviation of individual packet weights?",
   "c": [
    "2.55 g",
    "15.3 g",
    "18.2 g",
    "5.0 g"
   ],
   "a": [
    1
   ],
   "w": "μ = 500 and 505 is 1.96 standard errors above it, so σx̄ = 5/1.96 = 2.55 g. Then σ = 2.55 × √36 = 15.3 g. 2.55 g stops at the standard error; 18.2 g wrongly uses z = 1.645, which belongs to a 5% tail.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0364",
   "topic": "Sampling distributions",
   "q": "In which case can the sampling distribution of p̂ NOT be treated as approximately normal?",
   "c": [
    "p = 0.95, n = 100",
    "p = 0.50, n = 12",
    "p = 0.20, n = 40",
    "p = 0.05, n = 80"
   ],
   "a": [
    3
   ],
   "w": "p = 0.05, n = 80 gives np = 4, below 5. p = 0.95, n = 100 gives n(1 − p) = 5 exactly, which passes because the rule is 'at least 5'; the other two give 6 and 6, and 8 and 32.",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "sfm-q0365",
   "topic": "Sampling distributions",
   "q": "A pollster expects about 30% support for a proposal and wants the standard error of p̂ to be at most 0.03. What is the smallest sample size?",
   "c": [
    "233",
    "234",
    "700",
    "24"
   ],
   "a": [
    1
   ],
   "w": "n ≥ p(1 − p)/SE² = 0.21/0.0009 = 233.3, which must be rounded up to 234; 233 leaves the standard error slightly above 0.03. 700 divides by 0.03 instead of 0.03².",
   "lec": 20,
   "lv": "apply"
  },
  {
   "id": "sfm-q0366",
   "topic": "Sampling distributions",
   "q": "σ = 24 and a sample of 60 is taken from each of two populations: A has N = 1,500 and B has N = 900. Using the lecture's n/N rule, what are the standard errors of x̄?",
   "c": [
    "A ≈ 3.10 and B ≈ 3.10",
    "A ≈ 2.99 and B ≈ 3.10",
    "A ≈ 3.04 and B ≈ 2.99",
    "A ≈ 3.10 and B ≈ 2.99"
   ],
   "a": [
    3
   ],
   "w": "A: n/N = 0.04 < 0.05, so σ/√n = 24/√60 = 3.10. B: n/N = 0.067, so apply √(840/899) = 0.967, giving 2.99. Applying the correction to A as well gives 3.04; ignoring it for B gives 3.10.",
   "lec": 20,
   "lv": "analyse"
  },
  {
   "id": "sfm-q0367",
   "topic": "Sampling distributions",
   "q": "For which situation is it NOT reasonable to assume that x̄ is approximately normally distributed?",
   "c": [
    "A normally distributed population, n = 10",
    "A strongly skewed population, n = 12",
    "A strongly skewed population, n = 60",
    "A population of unknown shape, n = 40"
   ],
   "a": [
    1
   ],
   "w": "With strong skew and only 12 observations the CLT has not taken hold. A normal population gives a normal x̄ for any n, and n = 40 or 60 is enough under the n ≥ 30 rule (60 also clears the 'about 50 for heavy skew' caution).",
   "lec": 20,
   "lv": "recall"
  },
  {
   "id": "sfm-q0368",
   "topic": "Sampling distributions",
   "q": "A sample of 200 is drawn from a population with p = 0.30. What are the expected value and the standard error of the sample proportion?",
   "c": [
    "0.30 and 0.0324",
    "60 and 6.48",
    "0.30 and 0.458",
    "0.30 and 0.00105"
   ],
   "a": [
    0
   ],
   "w": "E(p̂) = p = 0.30 and σp̂ = √(0.30 × 0.70/200) = 0.0324. 60 and 6.48 are the mean and standard deviation of the count of successes, not the proportion; 0.00105 is the variance; 0.458 forgets to divide by n.",
   "lec": 20,
   "lv": "apply"
  }
 ],
 "briefs": {
  "q1": {
   "scopeShort": "Topics 1–7",
   "tag": "from the official LMS announcement",
   "lede": "Figures below are from the official Quiz 1 announcement. The scope, however, is the one genuine disagreement across your six courses — read the syllabus box carefully.",
   "html": "\n    <div class=\"grid2\">\n      <div class=\"card\">\n        <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">Confirmed on the official announcement</h4>\n        <div class=\"scroller\"><table><tbody>\n          <tr><td><strong>Date</strong></td><td>Sunday 4 October</td></tr>\n          <tr><td><strong>Window</strong></td><td>12:15–12:35 PM IST · join from <strong>12:00 PM</strong></td></tr>\n          <tr><td><strong>Questions</strong></td><td><strong>40</strong>, for <strong>40 marks</strong></td></tr>\n          <tr><td><strong>Type</strong></td><td>MCQ — he said &ldquo;objective only, no subjective questions&rdquo;</td></tr>\n          <tr><td><strong>Weight</strong></td><td>20% · best 2 of 3 · 40% of the course total</td></tr>\n        </tbody></table></div>\n        <div class=\"warnbox\" style=\"margin-top:12px;border-left-color:var(--bad);background:var(--bad-soft)\">\n          <b>Negative marking.</b> +1 correct, <strong>−0.25 for a wrong answer</strong>, 0 if left blank.\n        </div>\n        <div class=\"warnbox\" style=\"margin-top:10px;border-left-color:var(--good);background:var(--good-soft)\">\n          <b>A calculator is allowed.</b> He confirmed this in Live Lecture 3. It is the only one of your six papers where he said so — bring one.\n        </div>\n      </div>\n      <div class=\"card\">\n        <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">Scope — the two sources disagree</h4>\n        <p style=\"font-size:14.5px\">This is the one course where the official document and the lecturer do not line up, and the gap is large.</p>\n        <div class=\"scroller\" style=\"margin-top:9px\"><table><thead><tr><th>Source</th><th>Says the scope is</th></tr></thead><tbody>\n          <tr><td><strong>Official syllabus document</strong><br><span style=\"color:var(--ink-3);font-size:13px\">attached to the announcement</span></td><td><strong>Topics 1–7 only:</strong> Data and Statistics 1–2, Descriptive Statistics 1–3, Introduction to Probability 1–2. It stops there.</td></tr>\n          <tr><td><strong>Dr. Srivastav, Live Lecture 3</strong></td><td>&ldquo;<strong>till chapter 6</strong> or continuous probability distribution&rdquo; — which would add discrete and continuous distributions.</td></tr>\n        </tbody></table></div>\n        <div class=\"warnbox\" style=\"margin-top:12px\">\n          <b>How this sheet handles it.</b> Topics 1–7 are covered in full — treat them as certain. The distributions section is included and <strong>labelled &ldquo;NOT on the official list&rdquo;</strong>. If you are short of time, do topics 1–7 properly first, then skim distributions for the headline formulas.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\" style=\"margin-top:14px;border-left:3px solid var(--clay)\">\n      <h4 style=\"font-family:var(--display);font-size:16px;margin-bottom:9px\">30 seconds a question, with formulas to recall</h4>\n      <p style=\"font-size:14.5px;color:var(--ink-2)\">40 questions in 20 minutes. This is the most formula-dense of your six papers, so recall speed matters more than calculation speed — even with a calculator.</p>\n      <div class=\"scroller\" style=\"margin-top:11px\"><table><thead><tr><th>Situation</th><th>Expected value</th><th>Do</th></tr></thead><tbody>\n        <tr><td>You know it</td><td><strong>+1.00</strong></td><td>Answer</td></tr>\n        <tr><td>Rule out two of four</td><td><strong>+0.38</strong></td><td>Answer</td></tr>\n        <tr><td>Rule out one of four</td><td><strong>+0.17</strong></td><td>Answer</td></tr>\n        <tr><td>Blind guess</td><td><strong>+0.06</strong></td><td>Answer, but it gains almost nothing</td></tr>\n      </tbody></table></div>\n      <ul style=\"margin:11px 0 0;padding-left:19px;font-size:14.5px;line-height:1.7\">\n        <li><strong>The formulas are the paper.</strong> IQR, sample variance with n−1, CV, z, Chebyshev's 1−1/z&sup2;, the addition law, conditional probability, Bayes. Know them cold.</li>\n        <li><strong>Watch the two outlier rules.</strong> |z| &gt; 3 and Q1 − 1.5·IQR. Swapping the 3 and the 1.5 is the single easiest mark to drop.</li>\n        <li><strong>Scales of measurement come up constantly.</strong> Roll numbers are nominal; Celsius is interval.</li>\n      </ul>\n    </div>",
   "mapLede": "Thirteen lectures from Dr. Deepak Srivastav. Topics 1–7 are the official scope; lectures #10–#12 are the disputed tail.",
   "syllabusNote": "",
   "drillLede": "Questions written from the lectures and transcripts. There is no official practice set. Questions tagged <em>Distributions</em> cover the disputed material — filter them out if you want to drill only the certain scope.",
   "weights": [
    [
     "Spread & shape",
     16
    ],
    [
     "Probability laws & Bayes",
     15
    ],
    [
     "Measures of location",
     14
    ],
    [
     "Scales of measurement",
     12
    ],
    [
     "Summarising data",
     12
    ],
    [
     "Probability foundations",
     11
    ],
    [
     "Statistics & data basics",
     8
    ],
    [
     "Covariance & correlation",
     7
    ],
    [
     "Distributions (flagged)",
     5
    ]
   ]
  }
 },
 "bookPacks": [
  "sbe14-ch01",
  "sbe14-ch02",
  "sbe14-ch03",
  "sbe14-ch04",
  "sbe14-ch05",
  "sbe14-ch06",
  "sbe14-ch07",
  "lec-14",
  "lec-15",
  "lec-16",
  "lec-17",
  "lec-18",
  "lec-19",
  "lec-20",
  "lec-16s",
  "lec-20s"
 ]
});
