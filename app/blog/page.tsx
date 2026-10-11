import Link from "next/link";
import { PageHeader, Section } from "@/components/ui/Section";
import { posts } from "@/content/blog";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Blog", "Practical writing on AI, automation and process for businesses.", "/blog/");

const fmt = (iso: string) => new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });

export default function BlogPage() {
  return (
    <>
      <PageHeader eyebrow="Blog" title="Practical AI and automation" subtitle="Short, plain-language articles for business owners and teams." />
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {[...posts].sort((a, b) => b.date.localeCompare(a.date)).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}/`} className="glass group flex flex-col p-6 transition hover:-translate-y-1 hover:border-accent/50">
              <div className="mb-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs text-accent">{t}</span>
                ))}
              </div>
              <h2 className="text-lg font-semibold group-hover:text-accent">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted">{p.excerpt}</p>
              <p className="mt-4 text-xs text-muted">
                {fmt(p.date)} · {p.readMinutes} min read
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
