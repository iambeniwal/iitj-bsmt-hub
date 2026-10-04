/* ===================================================================
   Programme registry — IIT Jodhpur B.S. in Management & Technology
   (off-campus), batch 382.

   The single source of truth for dates, weightings and assessment
   facts. Course content files (content/semN/<slug>.js) hold notes and
   questions only, so a date can never disagree between two pages.

   Quiz 1 facts are from each course's official "Quiz 1 | <Course>"
   LMS announcement, read 26 September 2026. Where a lecturer said
   something different in class, the announcement wins.
   =================================================================== */
window.HUB = window.HUB || { courses: {} };
HUB.addCourse = c => { HUB.courses[c.slug] = c; };

HUB.program = {
  name: "B.S. in Management & Technology",
  institute: "IIT Jodhpur",
  batch: "382",
  marking: { correct: 1, incorrect: -0.25, blank: 0,
    note: "+1 correct · −0.25 wrong · 0 blank" }
};

/* status: "done" | "upcoming" | "tba" (date not announced yet).
   scope: notes-unit ids the assessment covers; "all" = every unit. */
HUB.semesters = [
  { n: 1, label: "Semester 1", term: "Jul–Dec 2026", courses: [
    {
      slug: "foundations-of-computing", short: "FoC", name: "Foundations of Computing",
      lecturer: "Dr. Aman Pathak", sectionId: 10690,
      grading: { quizPct: 15, quizzes: 3, bestOf: 2, participationPct: 10, finalPct: 60,
        finalNote: "offline, pen and paper — includes writing Python by hand" },
      assessments: [
        { id: "q1", name: "Quiz 1", status: "done",
          start: "2026-09-26T17:00:00+05:30", end: "2026-09-26T17:20:00+05:30", join: "2026-09-26T16:45:00+05:30",
          durationMin: 20, questions: 60, marks: 60, types: "MCQ",
          scope: "all", scopeText: "Lectures 1–15, to Working with Lists Part 2" },
        { id: "q2", name: "Quiz 2", status: "tba" },
        { id: "q3", name: "Quiz 3", status: "tba" },
        { id: "end", name: "End-term exam", status: "tba" }
      ]
    },
    {
      slug: "economic-business-history", short: "EBH", name: "Economic & Business History",
      lecturer: "Dr. Manu Kanchan", sectionId: 10697,
      grading: { quizPct: 20, quizzes: 3, bestOf: 2, participationPct: 0, finalPct: 60 },
      assessments: [
        { id: "q1", name: "Quiz 1", status: "done",
          start: "2026-09-27T12:15:00+05:30", end: "2026-09-27T12:30:00+05:30", join: "2026-09-27T12:00:00+05:30",
          durationMin: 15, questions: 40, marks: 40, types: "MCQ",
          scope: "all", scopeText: "Lectures 1–14, to Live Lecture 3" },
        { id: "q2", name: "Quiz 2", status: "tba" },
        { id: "q3", name: "Quiz 3", status: "tba" },
        { id: "end", name: "End-term exam", status: "tba" }
      ]
    },
    {
      slug: "algorithmic-thinking-in-business", short: "ATB", name: "Algorithmic Thinking in Business",
      lecturer: "Dr. Deepak Kumar Saxena", sectionId: 10687,
      grading: { quizPct: 20, quizzes: 3, bestOf: 2, participationPct: 0, finalPct: 60 },
      assessments: [
        { id: "q1", name: "Quiz 1", status: "done",
          start: "2026-10-03T16:45:00+05:30", end: "2026-10-03T17:05:00+05:30", join: "2026-10-03T16:30:00+05:30",
          durationMin: 20, questions: 40, marks: 40, types: "MCQ",
          scope: "all", scopeText: "Lectures 1–11 + Live 3 — linear data structures only" },
        { id: "q2", name: "Quiz 2", status: "tba" },
        { id: "q3", name: "Quiz 3", status: "tba" },
        { id: "end", name: "End-term exam", status: "tba" }
      ]
    },
    {
      slug: "financial-accounting", short: "FA", name: "Financial Accounting",
      lecturer: "Dr. Manisha Yadav", sectionId: 10689,
      grading: { quizPct: 20, quizzes: 3, bestOf: 2, participationPct: 0, finalPct: 60 },
      assessments: [
        { id: "q1", name: "Quiz 1", status: "done",
          start: "2026-10-03T17:30:00+05:30", end: "2026-10-03T18:00:00+05:30", join: "2026-10-03T17:15:00+05:30",
          durationMin: 30, questions: 40, marks: 40, types: "MCQ, True/False",
          scope: "all", scopeText: "Lectures 1–15, to Trial Balance Part 2" },
        { id: "q2", name: "Quiz 2", status: "tba" },
        { id: "q3", name: "Quiz 3", status: "tba" },
        { id: "end", name: "End-term exam", status: "tba" }
      ]
    },
    {
      slug: "statistics-for-managers", short: "SfM", name: "Statistics for Managers",
      lecturer: "Dr. Deepak Srivastav", sectionId: 10688,
      grading: { quizPct: 20, quizzes: 3, bestOf: 2, participationPct: 0, finalPct: 60 },
      assessments: [
        { id: "q1", name: "Quiz 1", status: "done",
          start: "2026-10-04T12:15:00+05:30", end: "2026-10-04T12:35:00+05:30", join: "2026-10-04T12:00:00+05:30",
          durationMin: 20, questions: 40, marks: 40, types: "MCQ",
          scope: "all", scopeText: "Topics 1–7, to Introduction to Probability 2" },
        { id: "q2", name: "Quiz 2", status: "tba" },
        { id: "q3", name: "Quiz 3", status: "tba" },
        { id: "end", name: "End-term exam", status: "tba" }
      ]
    },
    {
      slug: "principles-of-marketing", short: "PoM", name: "Principles of Marketing",
      lecturer: "Dr. Anuj Pal Kapoor", sectionId: 10696,
      grading: { quizPct: 20, quizzes: 3, bestOf: 2, participationPct: 0, finalPct: 60 },
      assessments: [
        { id: "q1", name: "Quiz 1", status: "done",
          start: "2026-10-04T13:00:00+05:30", end: "2026-10-04T13:30:00+05:30", join: "2026-10-04T12:45:00+05:30",
          durationMin: 30, questions: 20, marks: 20, types: "MCQ",
          scope: "all", scopeText: "All topics covered to 27 September 2026" },
        { id: "q2", name: "Quiz 2", status: "tba" },
        { id: "q3", name: "Quiz 3", status: "tba" },
        { id: "end", name: "End-term exam", status: "tba" }
      ]
    }
  ]}
];
