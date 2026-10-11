# Claude Code Prompt: IT Solutions Company Website

Paste everything below into Claude Code in an empty folder.

---

## ROLE
You are a senior full-stack engineer and UI designer. Build a complete, production-quality, feature-rich marketing website for a new IT solutions and services company. Work autonomously: plan first, then scaffold, build, test, and finish with a README and deployment steps.

## COMPANY
- **Name:** [COMPANY_NAME] (working name "Nexaro". Keep the name in ONE config constant so it can be changed in one place.)
- **Tagline idea:** "Technology that works for your business."
- **What we do:** AI, software, web and automation solutions for businesses in ALL sectors. We are a young company starting small and scaling.
- **Founders:**
  1. **Dinesh Anbalagan, Co-Founder, Business and Operations.** 15+ years in process transformation, compliance (AML/KYC), fraud investigation and quality. Has set up new processes from scratch, led application rollouts and managed teams of 15 to 20+. Strong business network. Leads client relationships and delivery planning. Six Sigma certified. Based in Bangalore.
  2. **Varunkumar G K, Co-Founder, Technology and AI.** AI Engineer with 2.5+ years' experience building production GenAI systems: multi-agent workflows (LangGraph, MCP, A2A), RAG and knowledge graphs, computer vision and NLP pipelines, Python/FastAPI on Azure with CI/CD. NITK Surathkal graduate. Leads architecture and engineering.
- **Rules for founder bios:** Do NOT mention any current or past employer names, and no client names. Use neutral phrasing like "a global consulting firm." Use initials-based avatar placeholders (no real photos) with a clear spot to drop in photos later.
- **Location:** Bangalore, India. Serve clients globally.

## TECH STACK
- Next.js (App Router) + TypeScript + Tailwind CSS
- Framer Motion for animation, lucide-react for icons
- All copy and data in `/content/*.ts` (or JSON) files so non-developers can edit text without touching components
- **Deployment target: GitHub Pages only (free, no custom domain).** The site will live at `https://<github-username>.github.io/<repo-name>/`.
  - Configure Next.js for fully static export: `output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true`.
  - Set `basePath` and `assetPrefix` from an env var `NEXT_PUBLIC_BASE_PATH` (the repo name, e.g. `/company-site`), so links, images and assets work under the sub-path. Use it everywhere (links, images, sitemap, OG tags).
  - NO server-side features: no API routes, no server actions, no middleware, no runtime SSR. Everything must be statically generated.
  - Add a `.github/workflows/deploy.yml` GitHub Actions workflow that builds and deploys to GitHub Pages on every push to `main` (using the official `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`). Include a `.nojekyll` file in the output.
- **Contact form (static-friendly):** submit to Formspree (endpoint in config var `FORMSPREE_ENDPOINT`). If it is not set, show a friendly success state and also offer "Email us" (mailto) and WhatsApp click-to-chat buttons so the demo still works.
- No database for now
- Provide `.env.example`

## DESIGN DIRECTION
- Heavy, rich, premium look with lots of content, but still clean and fast
- Dark/light theme toggle (default dark), modern gradients, glassmorphism cards, subtle animated background (grid or particles, lightweight)
- Smooth scroll-reveal animations, hover effects, animated counters
- Fully responsive (mobile first), accessible (semantic HTML, contrast, keyboard nav, alt text), Lighthouse 90+
- Sticky navbar with a "Book a Call" button, back-to-top button, announcement bar at the top ("Now onboarding our first clients")

## PAGES AND SECTIONS

### Home
1. Hero: headline, subheadline, 2 CTAs (Book a Free Consultation / View Services), animated visual
2. Trust strip: "Industries we serve" icon row
3. Services overview (6 cards linking to detail pages)
4. Why choose us (6 to 8 points: business-first thinking, fast delivery, transparent pricing, senior-led team, AI-native, post-launch support)
5. Stats counters (clearly sample values, see placeholder rules)
6. How we work (4 to 5 step animated timeline)
7. Featured projects (3 sample case study cards)
8. Technologies we use (logo/icon grid)
9. Testimonials carousel (placeholders, see rules)
10. Engagement models (Fixed Project / Dedicated Team / Monthly Retainer)
11. FAQ accordion (8+ questions)
12. Final CTA banner + newsletter signup UI

### Services (index + one detail page per service, each with: overview, problems we solve, what you get, process, tech used, sample use cases, FAQ, CTA)
1. **AI Agents and Workflow Automation** (multi-agent systems, internal copilots, task automation)
2. **Generative AI, Chatbots and RAG** (chat over your documents, knowledge search, customer support bots)
3. **Document and Computer Vision AI** (OCR, data extraction, compliance and quality checks on documents, images, video)
4. **Custom Web and Mobile Applications** (portals, dashboards, SaaS, e-commerce)
5. **Data, Analytics and Machine Learning** (dashboards, prediction, classification, scoring)
6. **Cloud, DevOps and Integrations** (Azure/AWS deployment, CI/CD, API integrations)
7. **Business Process Consulting and Digital Transformation** (process design, SOPs, tool rollouts, quality and reporting)

### Industries (page with cards): Insurance, Banking and Finance, Healthcare, Retail and E-commerce, Education, Logistics, Manufacturing, Real Estate, Startups and SMEs. Each gets a short "how we help" blurb.

### Solutions / Case Studies
- Listing page with filter by industry and service
- 4 to 6 SAMPLE case studies, each with: problem, approach, solution, tech, result metrics, and a visible "Sample project" badge
- Detail page template for each

### About
- Our story and mission, vision, values
- Founders section with full bios (see above), LinkedIn link placeholders
- "Why a business and tech duo" section
- Roadmap/timeline of where we are going

### Process / How We Work
- Discovery, Proposal, Prototype, Build, Launch, Support, with deliverables at each step

### Blog (MDX or content files)
- Listing + post template + 3 starter posts about practical AI and automation for businesses (written originally, short)

### Careers (simple page: "We're growing", general application form UI, 2 sample openings marked as sample)

### Contact
- Form: name, email, phone, company, service interested in (dropdown), budget range, message
- Validation and success/error states
- Email, phone, WhatsApp click-to-chat button, address placeholders in config
- Calendly/Cal.com embed placeholder (config variable)
- Map placeholder

### Legal
- Privacy Policy and Terms pages (generic templates, marked "review with a lawyer before launch")

### Extras
- Custom 404 page
- Pricing/"Get a Quote" page with a simple multi-step quote estimator (service, size, timeline, then contact)
- Floating WhatsApp button
- Cookie consent banner (simple)
- SEO: metadata per page, Open Graph, sitemap.xml, robots.txt, JSON-LD Organization schema
- Analytics-ready (a placeholder component where Google Analytics or Plausible can be added)

## PLACEHOLDER RULES (IMPORTANT)
We have no real clients or projects yet. Use clearly fake sample content, built so it is honest and easy to replace:

1. **Testimonials:** Create 6 sample testimonials with fictional people, fictional company names, designations, and fictional industries (e.g., "Anita Rao, Operations Head, Sample Logistics Co."). Every testimonial object has `isPlaceholder: true`.
2. **Visible labelling:** While `isPlaceholder` is true, the UI shows a small "Sample feedback" badge on each card. Add a global config flag `SHOW_PLACEHOLDER_BADGES = true`. Same for case studies ("Sample project") and stats ("Sample data").
3. **Fictional client logos:** use text-only wordmarks of obviously fictional names. Never use real company logos or real brand names as clients.
4. **Build-time warning:** add a script that runs on `npm run build` and prints a loud warning listing every item still marked `isPlaceholder: true`, so nothing fake goes live unnoticed.
5. **Replacement guide:** README section "Replacing placeholders with real content" listing the exact files to edit.
6. Do not invent awards, certifications, partnerships or numbers of clients served for the company.

## QUALITY BAR
- Reusable components, clean folder structure, no unused code
- Images: use gradients, SVG illustrations and icons (no copyrighted images). Add placeholder spots for real photos.
- Run lint, type-check and build; fix all errors
- Test responsive layout at 375px, 768px and 1440px
- Final output: README with run instructions, env vars, how to edit content, and a beginner-friendly step-by-step guide to deploy on GitHub Pages (create repo, push code, enable Pages with "GitHub Actions" as the source, find the live URL, add a collaborator). Mention that on a free GitHub account Pages needs a public repository, and that a custom domain can be added later but is not needed now.
- Verify that `npm run build` produces the static `out/` folder and that the site works when served under the sub-path (test with the base path set).

## WORKING STYLE
1. First write a short plan and the file structure, then proceed without waiting for approval.
2. Build in this order: config and content files, layout and theme, shared components, home page, service pages, other pages, extras, SEO, QA.
3. At the end, give me a checklist of everything I must replace or decide (company name, contact details, photos, real testimonials, legal review, domain).
