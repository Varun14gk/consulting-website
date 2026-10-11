import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { PageHeader, Section } from "@/components/ui/Section";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { getService } from "@/content/services";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  return c ? pageMeta(c.title, c.summary, `/solutions/${c.slug}/`) : {};
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();
  const service = getService(c.serviceSlug);

  const blocks = [
    { title: "The problem", text: c.problem },
    { title: "Our approach", text: c.approach },
    { title: "The solution", text: c.solution },
  ];

  return (
    <>
      <PageHeader eyebrow={c.industry} title={c.title} subtitle={c.summary} />
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <SampleBadge show={c.isPlaceholder} label="Sample project" />
            {service && (
              <Link href={`/services/${service.slug}/`} className="text-sm text-accent underline">{service.title}</Link>
            )}
          </div>
          <div className="space-y-6">
            {blocks.map((b) => (
              <div key={b.title} className="glass p-6">
                <h2 className="text-xl font-semibold">{b.title}</h2>
                <p className="mt-2 text-muted">{b.text}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-4 mt-10 text-xl font-semibold">Results</h2>
          <dl className="grid gap-4 sm:grid-cols-3">
            {c.results.map((r) => (
              <div key={r.label} className="glass p-6 text-center">
                <dd className="gradient-text text-3xl font-extrabold">{r.value}</dd>
                <dt className="mt-1 text-sm text-muted">{r.label}</dt>
              </div>
            ))}
          </dl>

          <h2 className="mb-3 mt-10 text-xl font-semibold">Technology</h2>
          <ul className="flex flex-wrap gap-2">
            {c.tech.map((t) => (
              <li key={t} className="rounded-lg border border-line/15 bg-surface/60 px-3 py-1.5 text-sm">{t}</li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-muted">This is a fictional sample project created to illustrate our approach.</p>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
