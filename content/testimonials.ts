/** SAMPLE testimonials. Fictional people and companies. Replace with real ones and set isPlaceholder to false. */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  isPlaceholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote: "They understood our process before writing a line of code. The result fit how our team actually works.",
    name: "Anita Rao",
    role: "Operations Head",
    company: "Sample Logistics Co.",
    industry: "Logistics",
    isPlaceholder: true,
  },
  {
    quote: "Clear scope, honest estimates and weekly demos. We always knew where the project stood.",
    name: "Rahul Verma",
    role: "Founder",
    company: "Example Retail Pvt. Ltd.",
    industry: "Retail",
    isPlaceholder: true,
  },
  {
    quote: "The assistant answers from our documents and shows its sources. Our staff trust it, which is the whole point.",
    name: "Meera Iyer",
    role: "Head of Compliance",
    company: "Demo Finance Ltd.",
    industry: "Finance",
    isPlaceholder: true,
  },
  {
    quote: "Senior people did the work, not a junior team behind a sales pitch. That made a big difference.",
    name: "Sanjay Kulkarni",
    role: "Director",
    company: "Placeholder Manufacturing Inc.",
    industry: "Manufacturing",
    isPlaceholder: true,
  },
  {
    quote: "Support after launch was prompt and practical. Small fixes were done the same day.",
    name: "Priya Nair",
    role: "Administrator",
    company: "Sample Learning Institute",
    industry: "Education",
    isPlaceholder: true,
  },
  {
    quote: "We went from idea to a working pilot in weeks, with a price we knew upfront.",
    name: "Kiran Shah",
    role: "Managing Partner",
    company: "Fictional Realty Group",
    industry: "Real Estate",
    isPlaceholder: true,
  },
];
