import { AlertCircle, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { PageHeader, Section } from "@/components/ui/Section";
import { caseStudies } from "@/content/caseStudies";
import { getService, services } from "@/content/services";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  return s ? pageMeta(s.title, s.short, `/services/${s.slug}/`) : {};
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const related = caseStudies.filter((c) => c.serviceSlug === s.slug);

  return (
    <>
      <PageHeader eyebrow="Service" title={s.title} subtitle={s.short} />

      <Section title="Overview" className="!pb-8">
        <div className="mx-auto flex max-w-3xl gap-5">
          <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand/20 to-accent/20 text-accent sm:grid">
            <Icon name={s.icon} className="h-7 w-7" />
          </span>
          <p className="text-lg text-muted">{s.overview}</p>
        </div>
      </Section>

      <Section title="Problems we solve" className="!py-8">
        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {s.problems.map((p) => (
            <li key={p} className="glass flex gap-3 p-5">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What you get" className="!py-8">
        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {s.deliverables.map((d) => (
            <li key={d} className="glass flex gap-3 p-5">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Our process" className="!py-8">
        <ol className="mx-auto grid max-w-5xl gap-4 md:grid-cols-4">
          {s.process.map((p, i) => (
            <li key={p.title} className="glass p-5">
              <span className="gradient-text text-3xl font-extrabold">{i + 1}</span>
              <h3 className="mt-1 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Technology used" className="!py-8">
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
          {s.tech.map((t) => (
            <li key={t} className="rounded-lg border border-line/15 bg-surface/60 px-3 py-1.5 text-sm">{t}</li>
          ))}
        </ul>
      </Section>

      <Section title="Sample use cases" className="!py-8">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {s.useCases.map((u) => (
            <div key={u.title} className="glass p-5">
              <h3 className="font-semibold">{u.title}</h3>
              <p className="mt-2 text-sm text-muted">{u.text}</p>
            </div>
          ))}
        </div>
        {related.length > 0 && (
          <p className="mt-6 text-center text-sm text-muted">
            Related sample project:{" "}
            {related.map((c) => (
              <Link key={c.slug} href={`/solutions/${c.slug}/`} className="text-accent underline">{c.title}</Link>
            ))}
          </p>
        )}
      </Section>

      <Section title="Frequently asked questions" className="!py-8">
        <div className="mx-auto max-w-3xl">
          <Accordion items={s.faqs} />
        </div>
      </Section>

      <CtaBanner title={`Interested in ${s.title}?`} />
    </>
  );
}
