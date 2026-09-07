export type TimelineEntry = {
  period: string;
  /** Compact form used by the stacked card layout on narrow screens. */
  years: string;
  length: string;
  place: string;
  city: string;
  role: string;
  stack: string;
  note: string;
};

/** Newest last — the final entry renders as the current role. */
export const timeline: TimelineEntry[] = [
  {
    period: "Jul 2015 — May 2019",
    years: "’15–’19",
    length: "3 yr 11 mo",
    place: "University of Mumbai",
    city: "Mumbai, India",
    role: "B.E., Computer Engineering",
    stack: "C++, Java",
    note: "Computer engineering, and the first taste of building systems.",
  },
  {
    period: "Sep 2019 — Jun 2021",
    years: "’19–’21",
    length: "1 yr 10 mo",
    place: "Drexel University",
    city: "Philadelphia, PA",
    role: "M.S., Computer Science",
    stack: "Python, Algorithms",
    note: "Master’s in computer science, with a distributed-systems bent.",
  },
  {
    period: "Jan 2022 — Jun 2024",
    years: "’22–’24",
    length: "2 yr 6 mo",
    place: "Checkr, Inc.",
    city: "San Francisco, CA",
    role: "Software Engineer II",
    stack: "Ruby, Go, React",
    note: "Launched two screening products worth ~$4.3M in new annual revenue.",
  },
  {
    period: "Oct 2024 — Sep 2025",
    years: "’24–’25",
    length: "1 yr",
    place: "Atelio by FIS",
    city: "Seattle, WA",
    role: "SDE, Platform",
    stack: "Spring Boot, Kinesis",
    note: "Bootstrapped Case Manager; 88M+ transactions a month at 75 TPS peak.",
  },
  {
    period: "Oct 2025 — present",
    years: "’25–now",
    length: "11 mo",
    place: "Oracle",
    city: "Nashville, TN",
    role: "Senior Member of Technical Staff",
    stack: "Terraform, OCI",
    note: "Lifecycle of millions of VM and bare-metal instances across OCI regions.",
  },
];
