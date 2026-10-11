/**
 * SAMPLE case studies. Every item is fictional and marked isPlaceholder: true.
 * Replace with real projects (and set isPlaceholder to false) before launch.
 */
export interface CaseStudy {
  slug: string;
  title: string;
  industry: string; // matches Industry.name
  serviceSlug: string; // matches Service.slug
  summary: string;
  problem: string;
  approach: string;
  solution: string;
  tech: string[];
  results: { value: string; label: string }[];
  isPlaceholder: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "claims-document-automation",
    title: "Claims document automation for a mid-size insurer",
    industry: "Insurance",
    serviceSlug: "document-computer-vision-ai",
    summary: "Extracting and validating claim documents in minutes instead of days.",
    problem: "Adjusters re-typed data from claim forms, bills and photos, causing delays and frequent errors.",
    approach: "We sampled historic claims, defined the fields that mattered and built validation rules with the claims team.",
    solution: "A pipeline that reads each document, extracts fields with confidence scores, validates them and sends exceptions to a review queue.",
    tech: ["Python", "OpenCV", "FastAPI", "Azure"],
    results: [
      { value: "70%", label: "less manual entry (sample)" },
      { value: "3x", label: "faster first review (sample)" },
      { value: "95%", label: "field accuracy (sample)" },
    ],
    isPlaceholder: true,
  },
  {
    slug: "policy-knowledge-assistant",
    title: "Policy knowledge assistant for a finance operations team",
    industry: "Banking and Finance",
    serviceSlug: "generative-ai-chatbots-rag",
    summary: "A cited answer engine over hundreds of internal procedures.",
    problem: "Staff searched shared drives for the right procedure and often applied outdated versions.",
    approach: "We ingested current documents, tuned retrieval on real questions and added strict citation rules.",
    solution: "A chat assistant that answers from approved documents only, shows the source clause and logs every query for audit.",
    tech: ["Python", "Azure AI Search", "Azure OpenAI", "Next.js"],
    results: [
      { value: "60%", label: "less time finding answers (sample)" },
      { value: "100%", label: "answers with citations (sample)" },
      { value: "2 wks", label: "to pilot (sample)" },
    ],
    isPlaceholder: true,
  },
  {
    slug: "shipment-tracking-dashboard",
    title: "Shipment visibility dashboard for a logistics provider",
    industry: "Logistics",
    serviceSlug: "data-analytics-machine-learning",
    summary: "One live view across carriers, with delay alerts.",
    problem: "Operations staff checked five carrier portals each morning to answer 'where is my shipment?'.",
    approach: "We connected carrier data, modelled shipment events and agreed alert rules with the operations lead.",
    solution: "A dashboard with live status, delay prediction and automatic customer notifications.",
    tech: ["Python", "PostgreSQL", "Next.js", "Power BI"],
    results: [
      { value: "5 to 1", label: "portals replaced (sample)" },
      { value: "40%", label: "fewer status calls (sample)" },
      { value: "24/7", label: "alerting (sample)" },
    ],
    isPlaceholder: true,
  },
  {
    slug: "support-triage-agent",
    title: "Support triage agent for an online retailer",
    industry: "Retail and E-commerce",
    serviceSlug: "ai-agents-workflow-automation",
    summary: "Tickets classified, answered or routed automatically.",
    problem: "Seasonal spikes overwhelmed a small support team and response times slipped.",
    approach: "We analysed past tickets, built an evaluation set and shipped the agent in assist mode before enabling auto-reply.",
    solution: "An agent that checks order status, drafts replies from policy and escalates sensitive cases to humans.",
    tech: ["LangGraph", "FastAPI", "PostgreSQL", "Docker"],
    results: [
      { value: "55%", label: "tickets auto-resolved (sample)" },
      { value: "-65%", label: "first response time (sample)" },
      { value: "0", label: "unapproved refunds (sample)" },
    ],
    isPlaceholder: true,
  },
  {
    slug: "admissions-workflow-portal",
    title: "Admissions workflow portal for a training institute",
    industry: "Education",
    serviceSlug: "custom-web-mobile-applications",
    summary: "From spreadsheets to a self-service admissions portal.",
    problem: "Applications arrived by email and were tracked in spreadsheets, so follow-ups were missed.",
    approach: "We mapped the admissions journey with staff and launched a focused first version in six weeks.",
    solution: "A web portal for applicants and an admin console with status tracking, reminders and reports.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    results: [
      { value: "6 wks", label: "to launch (sample)" },
      { value: "80%", label: "fewer follow-up emails (sample)" },
      { value: "1", label: "source of truth (sample)" },
    ],
    isPlaceholder: true,
  },
  {
    slug: "compliance-process-redesign",
    title: "Compliance process redesign for a growing fintech",
    industry: "Startups and SMEs",
    serviceSlug: "business-process-consulting",
    summary: "A scalable review process with clear SOPs and quality checks.",
    problem: "Reviews depended on two senior people and quality varied from case to case.",
    approach: "We documented current practice, designed a tiered review model and piloted it with one team.",
    solution: "New SOPs, a QA sampling plan, tool configuration and a KPI dashboard to track throughput and quality.",
    tech: ["Process mapping", "Jira", "Power BI"],
    results: [
      { value: "2x", label: "review throughput (sample)" },
      { value: "-30%", label: "rework (sample)" },
      { value: "4 wks", label: "to roll out (sample)" },
    ],
    isPlaceholder: true,
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
