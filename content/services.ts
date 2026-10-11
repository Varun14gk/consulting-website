import type { Faq, IconName } from "./types";

export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: IconName;
  overview: string;
  problems: string[];
  deliverables: string[];
  process: { title: string; text: string }[];
  tech: string[];
  useCases: { title: string; text: string }[];
  faqs: Faq[];
}

const standardProcess = (build: string): Service["process"] => [
  { title: "Discover", text: "We map your workflow, data and goals, and agree what success looks like." },
  { title: "Design", text: "A clear scope, architecture and a working prototype you can react to." },
  { title: "Build", text: build },
  { title: "Launch & support", text: "Deployment, training, monitoring and a post-launch support window." },
];

export const services: Service[] = [
  {
    slug: "ai-agents-workflow-automation",
    title: "AI Agents and Workflow Automation",
    short: "Multi-agent systems, internal copilots and task automation that take repetitive work off your team.",
    icon: "bot",
    overview:
      "We design AI agents that do real work: reading requests, calling your tools and systems, checking their own output and handing off to a human when it matters. From a single copilot for your support team to multi-agent workflows that span departments, we build with guardrails, logging and clear fallbacks so you can trust them.",
    problems: [
      "Skilled people spend hours on copy-paste, triage and status chasing.",
      "Processes span several tools that do not talk to each other.",
      "Past automation broke whenever an input looked slightly different.",
      "Leadership wants AI but has no safe, measurable starting point.",
    ],
    deliverables: [
      "Agent or copilot tailored to one clearly scoped workflow",
      "Integrations with your existing tools and data sources",
      "Human-in-the-loop approval steps and audit logs",
      "Evaluation set and quality dashboard",
      "Documentation and team training",
    ],
    process: standardProcess("Iterative sprints with weekly demos, evaluation runs and guardrail testing."),
    tech: ["Python", "LangGraph", "MCP", "A2A", "FastAPI", "Azure OpenAI", "PostgreSQL", "Docker"],
    useCases: [
      { title: "Support triage agent", text: "Reads incoming tickets, classifies them, drafts replies and routes edge cases to humans." },
      { title: "Back-office copilot", text: "Answers staff questions and completes routine steps across internal systems." },
      { title: "Report assembly", text: "Collects data from several sources and produces a checked weekly report." },
    ],
    faqs: [
      { q: "Will an agent act without approval?", a: "Only where you allow it. We define which actions are automatic, which need approval and which are blocked." },
      { q: "How do you measure quality?", a: "We build an evaluation set from your real examples and track accuracy before and after every change." },
      { q: "Can it work with our current software?", a: "Usually yes, through APIs, database access or file exchange. We confirm this during discovery." },
    ],
  },
  {
    slug: "generative-ai-chatbots-rag",
    title: "Generative AI, Chatbots and RAG",
    short: "Chat over your own documents, smart knowledge search and customer support bots grounded in your content.",
    icon: "message-square",
    overview:
      "Retrieval-augmented generation lets language models answer from your documents instead of guessing. We build chat and search experiences that cite their sources, respect access rules and say 'I do not know' when the answer is not there.",
    problems: [
      "Answers are buried across PDFs, wikis, emails and shared drives.",
      "Support teams answer the same questions repeatedly.",
      "Generic chatbots hallucinate and damage trust.",
      "New hires take months to learn where things are.",
    ],
    deliverables: [
      "Knowledge assistant with source citations",
      "Ingestion pipeline for your documents and data",
      "Access control aware retrieval",
      "Web chat widget or internal app interface",
      "Evaluation report on answer accuracy",
    ],
    process: standardProcess("Ingestion, retrieval tuning and answer evaluation in short cycles."),
    tech: ["Python", "FastAPI", "Azure AI Search", "Vector databases", "Knowledge graphs", "Next.js", "Azure OpenAI"],
    useCases: [
      { title: "Policy assistant", text: "Staff ask questions in plain language and get answers with the exact clause cited." },
      { title: "Customer support bot", text: "Answers common questions 24/7 and escalates the rest with full context." },
      { title: "Sales enablement search", text: "Find the right case, spec or price sheet in seconds." },
    ],
    faqs: [
      { q: "Is our data used to train public models?", a: "No. We choose enterprise endpoints and configurations where your data is not used for training." },
      { q: "How do you reduce wrong answers?", a: "Grounded retrieval, citations, confidence thresholds and a tested fallback to a human." },
      { q: "Which document types are supported?", a: "PDFs, Word, spreadsheets, web pages, emails and databases, including scanned files via OCR." },
    ],
  },
  {
    slug: "document-computer-vision-ai",
    title: "Document and Computer Vision AI",
    short: "OCR, data extraction, and compliance or quality checks on documents, images and video.",
    icon: "scan-eye",
    overview:
      "We turn unstructured files into structured, verified data. Our pipelines read documents and images, extract the fields you need, validate them against rules and flag exceptions for review, with accuracy you can measure.",
    problems: [
      "Manual data entry from forms, invoices and IDs is slow and error-prone.",
      "Compliance checks on documents depend on individual reviewers.",
      "Visual quality inspection does not scale with volume.",
      "Existing OCR struggles with real-world scans and layouts.",
    ],
    deliverables: [
      "Extraction pipeline with field-level confidence scores",
      "Validation rules and exception queue for reviewers",
      "Review interface for corrections that improve the model",
      "Export or API into your system of record",
      "Accuracy benchmark on your real samples",
    ],
    process: standardProcess("Model selection, rule building and accuracy tuning against your sample set."),
    tech: ["Python", "OpenCV", "PyTorch", "Document intelligence services", "NLP", "FastAPI", "Azure"],
    useCases: [
      { title: "KYC document check", text: "Extract identity details, cross-check them and flag mismatches." },
      { title: "Invoice processing", text: "Capture line items and match to purchase orders automatically." },
      { title: "Visual quality control", text: "Detect defects or missing items in photos or video streams." },
    ],
    faqs: [
      { q: "How accurate is extraction?", a: "It depends on document quality. We measure on your samples and design review steps for low-confidence fields." },
      { q: "Can it handle handwriting or poor scans?", a: "Often, with preprocessing. We test feasibility on your files first." },
      { q: "Can we keep data in our region?", a: "Yes. We can deploy in the cloud region or environment you require." },
    ],
  },
  {
    slug: "custom-web-mobile-applications",
    title: "Custom Web and Mobile Applications",
    short: "Portals, dashboards, SaaS products and e-commerce, built fast and built to grow.",
    icon: "layout",
    overview:
      "We build modern web and mobile applications around your workflow, not a template. From a customer portal to a full SaaS product, we focus on clean UX, solid engineering and a roadmap that lets you launch quickly and expand later.",
    problems: [
      "Spreadsheets and email are running a process that has outgrown them.",
      "Off-the-shelf software does not fit how you work.",
      "An old system is slow, insecure or impossible to change.",
      "You have an idea but need a team to turn it into a product.",
    ],
    deliverables: [
      "Responsive web app and/or mobile app",
      "Admin panel and role-based access",
      "Clean, documented codebase you own",
      "Automated tests and CI/CD pipeline",
      "Launch support and handover",
    ],
    process: standardProcess("Two-week sprints with working software demoed at the end of each."),
    tech: ["Next.js", "React", "TypeScript", "React Native", "Node.js", "Python", "PostgreSQL", "Tailwind CSS"],
    useCases: [
      { title: "Customer portal", text: "Clients track orders, documents and invoices in one place." },
      { title: "Operations dashboard", text: "A live view of work in progress, SLAs and exceptions." },
      { title: "Online store", text: "Catalogue, checkout, inventory sync and order management." },
    ],
    faqs: [
      { q: "Who owns the code?", a: "You do. All source code and assets are handed over on payment." },
      { q: "Can you start with an MVP?", a: "Yes, and we recommend it. Launch a focused first version, learn, then expand." },
      { q: "Do you build native mobile apps?", a: "We build cross-platform apps with React Native, and native where the use case demands it." },
    ],
  },
  {
    slug: "data-analytics-machine-learning",
    title: "Data, Analytics and Machine Learning",
    short: "Dashboards, prediction, classification and scoring that turn your data into decisions.",
    icon: "bar-chart",
    overview:
      "We help you see what is happening and predict what comes next. That starts with clean, connected data and clear dashboards, and extends to machine learning models for forecasting, classification and scoring where they add measurable value.",
    problems: [
      "Reports are manual, late and disagree with each other.",
      "Data lives in silos with no single view.",
      "You suspect patterns in your data but cannot act on them.",
      "Decisions rely on instinct where evidence is available.",
    ],
    deliverables: [
      "Data pipeline and cleaned data model",
      "Interactive dashboards for each stakeholder group",
      "Predictive or scoring model with documented performance",
      "Monitoring for data and model drift",
      "Handover session for your team",
    ],
    process: standardProcess("Data modelling, dashboard iterations and model training with validation."),
    tech: ["Python", "SQL", "Pandas", "scikit-learn", "PyTorch", "Power BI", "Azure Data Factory", "PostgreSQL"],
    useCases: [
      { title: "Demand forecast", text: "Predict volumes to plan stock, staffing or capacity." },
      { title: "Lead or risk scoring", text: "Rank leads, claims or applications by likelihood or risk." },
      { title: "Executive dashboard", text: "One trusted view of revenue, operations and quality." },
    ],
    faqs: [
      { q: "How much data do we need?", a: "Less than you think for dashboards, more for machine learning. We assess feasibility upfront." },
      { q: "Do you use our BI tool?", a: "Yes. We work with Power BI and similar tools, or build custom dashboards." },
      { q: "How is model quality tracked?", a: "We set metrics with you, validate on held-out data and monitor after launch." },
    ],
  },
  {
    slug: "cloud-devops-integrations",
    title: "Cloud, DevOps and Integrations",
    short: "Azure and AWS deployment, CI/CD pipelines and API integrations that connect your systems.",
    icon: "cloud",
    overview:
      "We make your software reliable to ship and easy to run. That means cloud architecture, automated pipelines, monitoring, and integrations that connect your CRM, ERP, payment and messaging tools without brittle workarounds.",
    problems: [
      "Deployments are manual, slow and stressful.",
      "Systems do not exchange data, so people re-key it.",
      "Cloud costs are rising with no clear owner.",
      "Outages are discovered by customers first.",
    ],
    deliverables: [
      "Cloud architecture and infrastructure as code",
      "CI/CD pipelines with automated tests",
      "Monitoring, alerting and runbooks",
      "API integrations with error handling and retries",
      "Cost review and optimization suggestions",
    ],
    process: standardProcess("Infrastructure and pipelines are built incrementally and tested with real releases."),
    tech: ["Azure", "AWS", "Docker", "GitHub Actions", "Terraform", "REST APIs", "Webhooks", "Linux"],
    useCases: [
      { title: "Zero-touch releases", text: "Merge code and see it tested and deployed automatically." },
      { title: "CRM to accounting sync", text: "Orders and invoices flow between systems without re-entry." },
      { title: "Cloud migration", text: "Move an on-premise app to the cloud with minimal downtime." },
    ],
    faqs: [
      { q: "Azure or AWS?", a: "We are cloud-agnostic and recommend what fits your needs, team skills and budget." },
      { q: "Can you take over existing infrastructure?", a: "Yes. We start with an audit and then stabilise and improve." },
      { q: "Do you provide ongoing support?", a: "Yes, through monthly retainers with agreed response times." },
    ],
  },
  {
    slug: "business-process-consulting",
    title: "Business Process Consulting and Digital Transformation",
    short: "Process design, SOPs, tool rollouts, quality and reporting from people who have run operations.",
    icon: "workflow",
    overview:
      "Technology only pays off when the process underneath it is sound. Our consulting practice draws on 15+ years of operations, compliance and quality experience to design processes, write SOPs, roll out tools and set up the reporting that keeps them healthy.",
    problems: [
      "Work depends on individuals rather than documented processes.",
      "A new tool was bought but adoption is low.",
      "Quality and compliance checks are inconsistent.",
      "Leaders lack reliable metrics on how work is going.",
    ],
    deliverables: [
      "Current-state process map and improvement plan",
      "Future-state design with roles and controls",
      "SOPs, checklists and training material",
      "Tool rollout plan and change management",
      "KPI framework and reporting cadence",
    ],
    process: standardProcess("Pilot with one team, refine, then scale with training and tracking."),
    tech: ["Process mapping", "Six Sigma methods", "Jira", "Power BI", "Excel", "Workflow tools"],
    useCases: [
      { title: "New process set-up", text: "Stand up a new operations or compliance function from scratch." },
      { title: "Application rollout", text: "Plan, pilot and train a team on a new business application." },
      { title: "Quality framework", text: "Define checks, sampling and reporting to lift quality." },
    ],
    faqs: [
      { q: "Do you only do consulting, or build too?", a: "Both. Many clients start with process design and continue into automation and software." },
      { q: "Can you work alongside our team?", a: "Yes. We work with your managers and staff so changes stick." },
      { q: "How long does a typical engagement take?", a: "From two-week assessments to multi-month transformations, depending on scope." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
