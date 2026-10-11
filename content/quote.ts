/** Indicative ranges in INR for the quote estimator. Adjust to your real pricing. */
export const projectSizes = [
  { id: "pilot", label: "Pilot / proof of concept", hint: "2 to 6 weeks", multiplier: 1 },
  { id: "standard", label: "Standard project", hint: "6 to 12 weeks", multiplier: 2.5 },
  { id: "large", label: "Large / multi-phase", hint: "3 months and above", multiplier: 6 },
] as const;

export const timelines = [
  { id: "flex", label: "Flexible", factor: 0.9 },
  { id: "normal", label: "Normal", factor: 1 },
  { id: "urgent", label: "Urgent (under 4 weeks)", factor: 1.3 },
] as const;

/** Base price per service for a pilot, in INR. */
export const serviceBasePrices: Record<string, number> = {
  "ai-agents-workflow-automation": 250000,
  "generative-ai-chatbots-rag": 200000,
  "document-computer-vision-ai": 250000,
  "custom-web-mobile-applications": 300000,
  "data-analytics-machine-learning": 200000,
  "cloud-devops-integrations": 150000,
  "business-process-consulting": 150000,
};

export const budgetRanges = ["Under 1 lakh", "1 to 3 lakh", "3 to 10 lakh", "10 to 25 lakh", "25 lakh and above", "Not sure yet"];
