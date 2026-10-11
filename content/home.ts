import type { Faq, IconName } from "./types";

export const hero = {
  eyebrow: "AI, software and automation for every sector",
  titleStart: "Technology that",
  titleAccent: "works for your business.",
  subtitle:
    "We combine 15+ years of operations expertise with hands-on AI engineering to build solutions that save time, cut errors and scale with you.",
  primaryCta: { label: "Book a Free Consultation", href: "/contact/" },
  secondaryCta: { label: "View Services", href: "/services/" },
  badges: ["Senior-led team", "Transparent pricing", "Post-launch support"],
};

export const whyUs: { icon: IconName; title: string; text: string }[] = [
  { icon: "target", title: "Business-first thinking", text: "We start with your goals and process, then choose the technology. Not the other way around." },
  { icon: "zap", title: "Fast delivery", text: "Small, focused releases so you see working software in weeks, not quarters." },
  { icon: "badge-check", title: "Transparent pricing", text: "Clear scope and estimates upfront. No surprise invoices." },
  { icon: "users", title: "Senior-led team", text: "The people you meet in the first call are the people who do the work." },
  { icon: "brain", title: "AI-native", text: "Production experience with agents, RAG and vision, not slideware." },
  { icon: "life-buoy", title: "Post-launch support", text: "We stay after go-live with monitoring, fixes and improvements." },
  { icon: "shield", title: "Security and privacy aware", text: "Sensible access control, data minimisation and enterprise-grade AI endpoints." },
  { icon: "handshake", title: "Plain-language partnership", text: "No jargon walls. You always know what is happening and why." },
];

/** SAMPLE values for display only. Replace with real figures once you have them. */
export const stats: { value: number; suffix: string; label: string; isPlaceholder: boolean }[] = [
  { value: 40, suffix: "%", label: "Typical time saved on automated tasks", isPlaceholder: true },
  { value: 6, suffix: " wks", label: "Typical time to a first pilot", isPlaceholder: true },
  { value: 7, suffix: "", label: "Service areas", isPlaceholder: true },
  { value: 24, suffix: "h", label: "Target response time on enquiries", isPlaceholder: true },
];

export const processSteps: { icon: IconName; title: string; text: string; deliverables: string[] }[] = [
  { icon: "search", title: "Discovery", text: "We learn your process, data and goals through focused workshops.", deliverables: ["Requirements summary", "Process map", "Feasibility notes"] },
  { icon: "file-text", title: "Proposal", text: "A clear scope, timeline and fixed or capped price.", deliverables: ["Scope document", "Timeline", "Price and terms"] },
  { icon: "pen-tool", title: "Prototype", text: "A clickable or working prototype to validate the idea early.", deliverables: ["Prototype", "Feedback session", "Refined backlog"] },
  { icon: "code", title: "Build", text: "Iterative sprints with weekly demos and tested releases.", deliverables: ["Working software", "Test reports", "Sprint demos"] },
  { icon: "flag", title: "Launch", text: "Careful deployment, data migration and team training.", deliverables: ["Production release", "User training", "Runbook"] },
  { icon: "life-buoy", title: "Support", text: "Monitoring, fixes and continuous improvement.", deliverables: ["Support plan", "Monthly review", "Improvement roadmap"] },
];

export const techGroups: { group: string; items: string[] }[] = [
  { group: "AI and Data", items: ["Python", "LangGraph", "MCP", "RAG", "PyTorch", "OpenCV", "Azure OpenAI", "scikit-learn"] },
  { group: "Web and Mobile", items: ["Next.js", "React", "TypeScript", "React Native", "Node.js", "FastAPI", "Tailwind CSS"] },
  { group: "Cloud and DevOps", items: ["Azure", "AWS", "Docker", "GitHub Actions", "Terraform", "PostgreSQL", "Power BI"] },
];

export const engagementModels: { title: string; icon: IconName; text: string; bestFor: string; points: string[] }[] = [
  {
    title: "Fixed Project",
    icon: "target",
    text: "Defined scope, timeline and price.",
    bestFor: "Best for clear, well-bounded goals.",
    points: ["Milestone-based payments", "Fixed deliverables", "Change requests handled transparently"],
  },
  {
    title: "Dedicated Team",
    icon: "users",
    text: "A team that works as an extension of yours.",
    bestFor: "Best for long roadmaps and evolving needs.",
    points: ["Monthly team fee", "Flexible priorities", "Scale up or down with notice"],
  },
  {
    title: "Monthly Retainer",
    icon: "repeat",
    text: "Reserved hours for support and improvements.",
    bestFor: "Best for running and improving live systems.",
    points: ["Agreed response times", "Hours bank each month", "Priority access to the team"],
  },
];

export const homeFaqs: Faq[] = [
  { q: "What kinds of companies do you work with?", a: "Businesses of every size and sector, from startups to established firms. We focus on practical problems where technology or better process clearly helps." },
  { q: "We are new to AI. Where do we start?", a: "With a short discovery conversation. We help you pick one high-value, low-risk use case, then prove it with a pilot before you invest further." },
  { q: "How much does a project cost?", a: "It depends on scope. We give a clear estimate after discovery, and the quote estimator on our site gives an early ballpark." },
  { q: "How long does a project take?", a: "Pilots typically take four to eight weeks. Larger builds are delivered in phases so you see value early." },
  { q: "Who owns the code and the data?", a: "You do. We hand over source code, documentation and access on completion." },
  { q: "Is our data safe with AI tools?", a: "We use enterprise AI endpoints that do not train on your data, apply least-privilege access and can deploy within your cloud environment." },
  { q: "Do you work with clients outside India?", a: "Yes. We are based in Bangalore and work with clients across time zones, using clear communication and regular demos." },
  { q: "Will you support the solution after launch?", a: "Yes. Every project includes a support window, and monthly retainers are available for ongoing needs." },
  { q: "Can you work with our existing team and tools?", a: "Yes. We integrate with your systems and collaborate with your staff, so what we build fits your way of working." },
];

/** SAMPLE fictional wordmarks to show the strip layout. Never use real brands here. */
export const sampleClients: { name: string; isPlaceholder: boolean }[] = [
  { name: "Sample Logistics Co.", isPlaceholder: true },
  { name: "Example Retail", isPlaceholder: true },
  { name: "Demo Finance", isPlaceholder: true },
  { name: "Placeholder Mfg.", isPlaceholder: true },
  { name: "Fictional Realty", isPlaceholder: true },
  { name: "Sample Learning", isPlaceholder: true },
];
