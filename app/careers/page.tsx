import { MapPin } from "lucide-react";
import { CareersForm } from "@/components/forms/CareersForm";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { PageHeader, Section } from "@/components/ui/Section";
import { careersIntro, openings } from "@/content/careers";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Careers", "Join a small, senior, friendly team building practical AI and software for businesses.", "/careers/");

export default function CareersPage() {
  return (
    <>
      <PageHeader eyebrow="Careers" title={careersIntro.title} subtitle={careersIntro.text} />
      <Section title="Open roles">
        <div className="mx-auto grid max-w-4xl gap-4">
          {openings.map((o) => (
            <article key={o.title} className="glass p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold">{o.title}</h3>
                <SampleBadge show={o.isPlaceholder} label="Sample opening" />
              </div>
              <p className="mt-1 flex flex-wrap items-center gap-x-4 text-sm text-muted">
                <span>{o.type}</span>
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" aria-hidden="true" />{o.location}</span>
              </p>
              <p className="mt-3 text-muted">{o.summary}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Apply" title="General application" subtitle="Don't see the right role? Tell us how you could help." className="bg-surface/30">
        <div className="mx-auto max-w-2xl">
          <CareersForm />
        </div>
      </Section>
    </>
  );
}
