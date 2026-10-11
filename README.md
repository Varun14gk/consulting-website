# Nexaro website

Marketing site for an AI, software and automation company (working name **Nexaro**). Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion. Fully static export, deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run typecheck
npm run build        # static site in ./out
```

Copy `.env.example` to `.env.local` and fill in what you need. Leave `NEXT_PUBLIC_BASE_PATH` empty for local dev.

> On Windows with Git Bash, a value like `/consulting-website` gets rewritten into a Windows path. Use PowerShell (`$env:NEXT_PUBLIC_BASE_PATH="/consulting-website"; npm run build`) or prefix the command with `MSYS_NO_PATHCONV=1`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_BASE_PATH` | Repo name as a path, e.g. `/consulting-website`. Used for links, assets, sitemap, OG tags. |
| `NEXT_PUBLIC_SITE_URL` | Site origin, e.g. `https://<username>.github.io`. |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree form URL. If empty, forms run in demo mode and offer Email and WhatsApp buttons. |
| `NEXT_PUBLIC_BOOKING_URL` | Calendly or Cal.com page for the embed on the contact page. |
| `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Analytics (loaded only after cookie consent). |

On GitHub, set these as **Repository variables** (Settings, Secrets and variables, Actions, Variables) named `FORMSPREE_ENDPOINT`, `BOOKING_URL`, `GA_ID`, `PLAUSIBLE_DOMAIN`. The base path and site URL are set automatically by the workflow.

## How to edit content

All copy lives in plain files. You never need to touch components.

| What | File |
| --- | --- |
| Company name, tagline, contact details, social links, nav, announcement bar, placeholder badge switch | `config/site.ts` |
| Hero, why-us, stats, process steps, tech, engagement models, FAQs | `content/home.ts` |
| The 7 services (each has its own detail page) | `content/services.ts` |
| Industries | `content/industries.ts` |
| Case studies | `content/caseStudies.ts` |
| Testimonials | `content/testimonials.ts` |
| Story, values, founders, roadmap | `content/about.ts` |
| Blog posts | `content/blog.ts` |
| Careers | `content/careers.ts` |
| Privacy and Terms | `content/legal.ts` |
| Quote estimator prices | `content/quote.ts` |

To rename the company, change `COMPANY_NAME` in `config/site.ts`.

## Replacing placeholders with real content

Everything fake is marked `isPlaceholder: true` and shows a visible badge ("Sample feedback", "Sample project", "Sample data", "Sample opening", "Sample logo"). `npm run build` prints a loud warning listing every item still marked.

1. **Testimonials**: `content/testimonials.ts`. Replace each entry with a real one and set `isPlaceholder: false`.
2. **Case studies**: `content/caseStudies.ts`. Replace with real projects (real numbers only) and set `isPlaceholder: false`.
3. **Stats**: `content/home.ts` (`stats`). Use real figures or delete the section from `app/page.tsx`.
4. **Client wordmarks**: `content/home.ts` (`sampleClients`). Only add clients who agreed to be named, otherwise remove the strip in `components/home/Testimonials.tsx`.
5. **Openings**: `content/careers.ts`.
6. **Contact details**: `config/site.ts` (`CONTACT`, `SOCIAL`). The email, phone and WhatsApp number are fake.
7. **Founder photos and LinkedIn**: put photos in `public/team/` and set `photo: "/team/name.jpg"` and `linkedin` in `content/about.ts`.
8. **Legal**: `content/legal.ts` is a generic template. Have a lawyer review it, then clear `LEGAL_NOTICE`.
9. When everything is real, set `SHOW_PLACEHOLDER_BADGES = false` in `config/site.ts` (optional, badges only show while `isPlaceholder` is true).

## Deploy to GitHub Pages (step by step)

1. **Create a repository** on github.com (New repository). The repo name becomes the URL path, e.g. `consulting-website`.
2. **Push the code**:
   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. **Make the repo public.** On a free GitHub account, Pages only works for public repositories (Settings, General, Danger Zone, Change visibility).
4. **Enable Pages**: Settings, Pages, **Build and deployment, Source: GitHub Actions**.
5. **Wait for the workflow**: the Actions tab shows "Deploy to GitHub Pages" running on every push to `main`.
6. **Find your live URL**: Settings, Pages, or the finished workflow run. It looks like `https://<username>.github.io/<repo>/`.
7. **Add a collaborator**: Settings, Collaborators, Add people, enter their GitHub username or email.

A custom domain can be added later (Settings, Pages, Custom domain) but is not needed now. If you add one at the root of a domain, set `NEXT_PUBLIC_BASE_PATH` to empty.

## Notes

- Fully static: no API routes, server actions or middleware. `public/.nojekyll` is copied into `out/`.
- `scripts/postbuild.mjs` copies Next 16 prefetch payloads to the flat file names the browser requests, which avoids 404s on static hosts.
- Forms post to Formspree when configured. Without it they show a demo success state with Email and WhatsApp buttons.
