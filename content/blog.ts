export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  author: string;
  tags: string[];
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: "where-to-start-with-ai-in-your-business",
    title: "Where to start with AI in your business",
    excerpt: "Skip the hype. Here is a simple way to pick your first AI project and prove its value.",
    date: "2026-09-15",
    readMinutes: 4,
    author: "Varunkumar G K",
    tags: ["AI", "Strategy"],
    body: [
      { type: "p", text: "Most businesses do not need an AI strategy document. They need one useful result, quickly. The best first project is boring, frequent and measurable." },
      { type: "h2", text: "Look for tasks with these traits" },
      { type: "ul", items: ["Repeated many times a week", "Based on documents, emails or forms", "Currently done by skilled people who would rather do something else", "Easy to check whether the output is right"] },
      { type: "h2", text: "Run a small pilot" },
      { type: "p", text: "Pick one task, collect 50 to 100 real examples and test an AI approach against them. Measure accuracy and time saved. If it works, expand. If not, you have learned cheaply." },
      { type: "h2", text: "Keep a human in the loop" },
      { type: "p", text: "At the start, let the system suggest and a person approve. As confidence grows, automate the safest cases first and keep reviewing a sample." },
    ],
  },
  {
    slug: "rag-explained-for-business-owners",
    title: "RAG explained for business owners",
    excerpt: "How a chatbot can answer from your own documents, and why it makes up fewer answers.",
    date: "2026-09-28",
    readMinutes: 4,
    author: "Varunkumar G K",
    tags: ["Generative AI", "RAG"],
    body: [
      { type: "p", text: "A general chatbot knows a lot about the world and nothing about your company. Retrieval-augmented generation, or RAG, fixes this by letting the model look things up in your documents before answering." },
      { type: "h2", text: "How it works in plain terms" },
      { type: "ul", items: ["Your documents are split into small passages and indexed", "A question retrieves the most relevant passages", "The model writes an answer using only those passages", "The answer shows which documents it used"] },
      { type: "h2", text: "What makes it trustworthy" },
      { type: "p", text: "Good RAG systems cite sources, respect who is allowed to see which document and admit when the answer is not in the material. Those details matter more than the choice of model." },
    ],
  },
  {
    slug: "automate-the-process-not-the-mess",
    title: "Automate the process, not the mess",
    excerpt: "Why fixing the process first makes automation cheaper, safer and longer-lasting.",
    date: "2026-10-05",
    readMinutes: 3,
    author: "Dinesh Anbalagan",
    tags: ["Process", "Automation"],
    body: [
      { type: "p", text: "Automating a confused process produces confusion faster. Before building anything, spend a few days writing down how the work really happens." },
      { type: "h2", text: "A quick checklist" },
      { type: "ul", items: ["Who starts the process and what triggers it?", "Where do delays and re-work occur?", "Which steps need judgement and which are rules?", "How will you know quality is slipping?"] },
      { type: "h2", text: "Then automate in layers" },
      { type: "p", text: "Remove unnecessary steps first, standardise inputs next and only then automate. You will often find that half the pain disappears before any software is written." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
