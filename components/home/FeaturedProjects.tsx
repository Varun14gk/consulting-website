import Link from "next/link";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/content/caseStudies";

export function FeaturedProjects() {
  return (
    <Section eyebrow="Featured projects" title="What we can build for you" subtitle="Illustrative sample projects showing the kind of results we aim for.">
      <div className="grid gap-5 md:grid-cols-3">
        {caseStudies.slice(0, 3).map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.08}>
            <CaseStudyCard study={c} />
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center">
        <Link href="/solutions/" className="btn-ghost">View all solutions</Link>
      </p>
    </Section>
  );
}
