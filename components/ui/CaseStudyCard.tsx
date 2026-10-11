import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";
import { SampleBadge } from "./SampleBadge";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/solutions/${study.slug}/`} className="glass group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:border-accent/50">
      {/* Placeholder spot for a real project image: replace this gradient with an <img> later */}
      <div className="h-32 bg-gradient-to-br from-brand/40 via-accent/20 to-transparent" aria-hidden="true" />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">{study.industry}</span>
          <SampleBadge show={study.isPlaceholder} label="Sample project" />
        </div>
        <h3 className="font-semibold">{study.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{study.summary}</p>
        <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-line/10 pt-4 text-center">
          {study.results.map((r) => (
            <div key={r.label}>
              <dt className="sr-only">{r.label}</dt>
              <dd className="gradient-text text-lg font-bold">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Link>
  );
}
