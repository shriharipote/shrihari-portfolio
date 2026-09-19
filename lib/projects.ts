export type Project = {
  slug: string;
  name: string;
  tag: string;
  status: "Shipped" | "In progress";
  summary: string;
  details: string[];
  stack: string[];
  link: string;
  cover: string;
  coverImage?: string;
};

export const projects: Project[] = [
  {
    slug: "expense-tracker",
    name: "Expense Tracker",
    tag: "Python · Flask",
    status: "Shipped",
    summary:
      "A dual-interface (CLI + Flask web UI) expense tracker — add/delete entries, monthly summaries, category-wise bar charts, and CSV export.",
    details: [
      "A personal finance management tool with two ways in: a command-line interface for quick entries, and a Flask-powered web UI for a fuller view.",
      "Covers four core features — adding and deleting entries, generating monthly summaries, category-wise bar-chart visualizations, and CSV export for record-keeping.",
      "The backend is built in Python and Flask, with chart visualization and CSV I/O wired in directly rather than bolted on afterward.",
    ],
    stack: ["Python", "Flask", "HTML/CSS", "CSV"],
    link: "https://github.com/shriharipote/expense-tracker",
    cover: "from-[#2b3b34] to-[#0f1512]",
    coverImage: "/projects/expense-tracker.jpg",
  },
  {
    slug: "conversion-funnel-dashboard",
    name: "Conversion Funnel Dashboard",
    tag: "JavaScript · HTML/CSS",
    status: "Shipped",
    summary:
      "An interactive single-page analytics dashboard visualizing multi-stage user conversion funnels, with a built-in chatbot interface — vanilla JS front end.",
    details: [
      "A single-page analytics dashboard that visualizes multi-stage user conversion funnels, built to make drop-off points obvious at a glance.",
      "Includes a built-in chatbot interface alongside the funnel visualizations.",
      "The entire front end — layout, interactivity, and charting — is structured in vanilla JavaScript, HTML, and CSS, with no framework dependency.",
    ],
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/shriharipote/conversion-funnel-dashboard",
    cover: "from-[#2a2e42] to-[#11121c]",
    coverImage: "/projects/conversion-funnel-dashboard.jpg",
  },
  {
    slug: "bugfinder",
    name: "BugFinder",
    tag: "Python",
    status: "Shipped",
    summary:
      "A command-line tool that parses application error logs and flags likely bug patterns using rule-based text parsing and pattern matching.",
    details: [
      "A Python command-line tool built to speed up log triage — it parses application error logs and flags patterns likely to indicate real bugs.",
      "Uses rule-based text parsing and pattern-matching logic rather than a trained model, keeping it lightweight and predictable.",
    ],
    stack: ["Python"],
    link: "https://github.com/shriharipote/bugfinder",
    cover: "from-[#3b2b2b] to-[#160f0f]",
    coverImage: "/projects/bugfinder.jpg",
  },
  {
    slug: "careerpath-ai",
    name: "CareerPath AI",
    tag: "Python",
    status: "Shipped",
    summary:
      "A career-guidance tool that generates personalized career-path suggestions from user input, using rule-based decision logic.",
    details: [
      "A career guidance recommendation tool that takes a user's answers to a set of questions and maps them to personalized career-path suggestions.",
      "Built on rule-based decision logic that connects specific inputs to specific recommended paths.",
    ],
    stack: ["Python"],
    link: "https://github.com/shriharipote/careerpath-ai",
    cover: "from-[#333047] to-[#131220]",
    coverImage: "/projects/careerpath-ai.jpg",
  },
  {
    slug: "designflow",
    name: "DesignFlow",
    tag: "React · NestJS · PostgreSQL",
    status: "In progress",
    summary:
      "A web platform for product design consultancies. React front end, NestJS backend with JWT auth, PostgreSQL, and Docker.",
    details: [
      "A web platform built for product design consultancies, currently in active development.",
      "The backend has JWT authentication and a Clients module scaffolded out, running on NestJS with PostgreSQL, containerized with Docker.",
      "The frontend is React, following a phased roadmap toward a full client-management workflow.",
    ],
    stack: ["React", "NestJS", "PostgreSQL", "Docker"],
    link: "#",
    cover: "from-[#2b3a3f] to-[#0f1618]",
    coverImage: "/projects/designflow.jpg",
  },
  {
    slug: "vectorium",
    name: "Vectorium",
    tag: "Electron · MediaPipe",
    status: "In progress",
    summary:
      "A holographic 3D CAD viewer with MediaPipe hand-gesture control, packaged as a Windows desktop app (Electron + NSIS installer).",
    details: [
      "A holographic 3D CAD viewer that responds to hand gestures instead of a mouse, using MediaPipe for gesture tracking.",
      "Packaged as a Windows desktop application via Electron, with an NSIS installer for distribution.",
    ],
    stack: ["Electron", "MediaPipe", "JavaScript"],
    link: "#",
    cover: "from-[#3a2f47] to-[#150f1c]",
    coverImage: "/projects/vectorium.jpg",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
