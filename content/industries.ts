import type { IconName } from "./types";

export interface Industry {
  slug: string;
  name: string;
  icon: IconName;
  blurb: string;
  help: string[];
}

export const industries: Industry[] = [
  {
    slug: "insurance",
    name: "Insurance",
    icon: "shield",
    blurb: "Faster claims, cleaner underwriting and fewer manual checks.",
    help: ["Claims document extraction and triage", "Policy Q&A assistants for agents", "Fraud-signal scoring and review queues"],
  },
  {
    slug: "banking-finance",
    name: "Banking and Finance",
    icon: "landmark",
    blurb: "Compliance-grade automation for KYC, AML and operations.",
    help: ["KYC and onboarding document checks", "Alert triage for compliance teams", "Audit-ready reporting dashboards"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart-pulse",
    blurb: "Less paperwork for clinicians, better access for patients.",
    help: ["Appointment and intake automation", "Records digitization and search", "Operational dashboards for clinics"],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail and E-commerce",
    icon: "shopping-cart",
    blurb: "Sell more, support faster and stop stock-outs.",
    help: ["Online stores and catalog tools", "Support chatbots grounded in your policies", "Demand forecasting"],
  },
  {
    slug: "education",
    name: "Education",
    icon: "graduation-cap",
    blurb: "Digital learning, simpler admin and smarter student support.",
    help: ["Admissions and fee workflow automation", "Study assistants over course material", "Learner progress analytics"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "truck",
    blurb: "Visibility, document speed and fewer delays across the chain.",
    help: ["Shipping document extraction", "Tracking dashboards and alerts", "System integrations across partners"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "factory",
    blurb: "Quality, uptime and traceability with data and vision.",
    help: ["Visual defect detection", "Production reporting dashboards", "Maintenance prediction"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "building",
    blurb: "Quicker lead handling and paperwork that does not stall deals.",
    help: ["Lead capture and qualification bots", "Property document checks", "Client portals and CRM sync"],
  },
  {
    slug: "startups-smes",
    name: "Startups and SMEs",
    icon: "rocket",
    blurb: "Senior engineering and process help without the big-firm overhead.",
    help: ["MVP builds with clear scope and price", "Automation of founder-led admin", "Part-time technology and process leadership"],
  },
];
