import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHeader, Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/content/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Services", "AI agents, generative AI, document AI, web and mobile apps, data and ML, cloud and DevOps, and business process consulting.", "/services/");

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="End-to-end technology and process services" subtitle="Seven focused service areas, delivered by a senior team that understands both the business and the build." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
