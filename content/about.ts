import type { IconName } from "./types";

export const story = {
  title: "Built by an operator and an engineer",
  paragraphs: [
    "Too many technology projects fail not because the code is bad, but because the process underneath was never understood. Others stall because the people who understand the business cannot speak to the people building the system.",
    "We started this company to close that gap. One founder has spent 15+ years designing, running and fixing business processes. The other builds production AI systems. Together we turn real business problems into working solutions.",
    "We are a young company, starting small and scaling deliberately. That means you get senior attention, honest advice and a team that cares about your outcome.",
  ],
  mission: "Make practical AI and software accessible to every business, with the care of people who have run operations themselves.",
  vision: "To be the trusted technology partner for growing businesses in every sector.",
};

export const values: { icon: IconName; title: string; text: string }[] = [
  { icon: "eye", title: "Honesty", text: "We tell you what will work, what will not and what it will cost." },
  { icon: "target", title: "Outcomes over output", text: "Success is measured by your results, not our hours." },
  { icon: "users", title: "Partnership", text: "We work with your team, not around it." },
  { icon: "shield", title: "Responsibility", text: "We handle your data and your trust with care." },
];

export interface Founder {
  name: string;
  initials: string;
  role: string;
  location?: string;
  bio: string[];
  highlights: string[];
  linkedin: string;
  photo?: string; // e.g. "/team/dinesh.jpg" placed in /public/team
}

export const founders: Founder[] = [
  {
    name: "Dinesh Anbalagan",
    initials: "DA",
    role: "Co-Founder, Business and Operations",
    location: "Bangalore",
    bio: [
      "Dinesh brings 15+ years in process transformation, compliance (AML/KYC), fraud investigation and quality. He has set up new processes from scratch, led application rollouts and managed teams of 15 to 20+ people.",
      "With a strong business network and Six Sigma certification, he leads client relationships and delivery planning, making sure every project is grounded in how the business really runs.",
    ],
    highlights: ["Process transformation", "AML/KYC and compliance", "Fraud investigation", "Quality and Six Sigma", "Team leadership"],
    linkedin: "#", // PLACEHOLDER
  },
  {
    name: "Varunkumar G K",
    initials: "VK",
    role: "Co-Founder, Technology and AI",
    bio: [
      "Varunkumar is an AI engineer with 2.5+ years of experience building production generative AI systems, including multi-agent workflows (LangGraph, MCP, A2A), RAG and knowledge graphs, and computer vision and NLP pipelines.",
      "He works in Python and FastAPI on Azure with CI/CD, and is a graduate of NITK Surathkal. He leads architecture and engineering.",
    ],
    highlights: ["Multi-agent systems", "RAG and knowledge graphs", "Computer vision and NLP", "Python, FastAPI, Azure", "CI/CD"],
    linkedin: "#", // PLACEHOLDER
  },
];

export const duo = [
  { title: "Business sense meets engineering depth", text: "Every solution is shaped by someone who has run the process and built by someone who can automate it." },
  { title: "Fewer hand-offs, fewer misunderstandings", text: "Requirements go directly from the person who understands them to the person who builds them." },
  { title: "Realistic about change", text: "We plan for training, adoption and quality checks, because software alone does not change how teams work." },
];

export const roadmap: { phase: string; title: string; text: string; status: "now" | "next" | "later" }[] = [
  { phase: "Now", title: "Onboarding first clients", text: "Working closely with a small group of early clients to deliver pilots and learn fast.", status: "now" },
  { phase: "Next", title: "Repeatable solution kits", text: "Packaging proven patterns, such as document pipelines and knowledge assistants, for faster delivery.", status: "next" },
  { phase: "Then", title: "Grow the team", text: "Hiring engineers and analysts who share our values, while keeping senior-led delivery.", status: "next" },
  { phase: "Later", title: "Industry-focused offerings", text: "Deeper solutions for the sectors where we see the strongest results.", status: "later" },
];
