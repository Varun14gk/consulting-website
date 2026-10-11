import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHeader, Section } from "@/components/ui/Section";
import { SolutionsFilter } from "@/components/ui/SolutionsFilter";
import { caseStudies } from "@/content/caseStudies";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Solutions and Case Studies", "Sample projects showing how AI, software and process work can solve real business problems.", "/solutions/");

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Sample projects and case studies"
        subtitle="We are a new company. These are illustrative sample projects that show our approach and the kind of results we target, not real client work."
      />
      <Section>
        <SolutionsFilter
          studies={caseStudies}
          industries={industries.map((i) => i.name)}
          services={services.map((s) => ({ slug: s.slug, title: s.title }))}
        />
      </Section>
      <CtaBanner title="Have a similar challenge?" />
    </>
  );
}
