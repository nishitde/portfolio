export const site = {
  name: "Nishit De",
  role: "Software Development Engineer",
  location: "Nashville, TN",
  timezone: "UTC−6",
  url: "https://nishitde.com",
  tagline: "Five years of shipping software that behaves itself.",
  /* Rendered joined by "·". Each part stays on one line, so the string only
     ever breaks at a separator rather than orphaning a word. */
  heroSub: ["Software development engineer", "backend & platform", "Nashville, TN"],
  description:
    "Nishit De is a software development engineer working on backend and platform systems in Nashville, TN.",
  resume: {
    // Drop the PDF at public/resume.pdf. Both résumé buttons point here.
    href: "/resume.pdf",
    updated: "September 2026",
  },
} as const;

export type SectionId = "top" | "timeline" | "resume" | "contact";

export const sections: { id: SectionId; label: string }[] = [
  { id: "top", label: "Intro" },
  { id: "timeline", label: "Timeline" },
  { id: "resume", label: "Résumé" },
  { id: "contact", label: "Contact" },
];
