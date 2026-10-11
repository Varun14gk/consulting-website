import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/content/services";

export function ServicesOverview() {
  // Six cards on the home page; the full list of seven lives on /services/.
  const featured = services.slice(0, 6);
  return (
    <Section eyebrow="What we do" title="Solutions across AI, software and process" subtitle="From first idea to live system, we cover the full stack of modern business technology.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center">
        <Link href="/services/" className="btn-ghost">See all 7 services</Link>
      </p>
    </Section>
  );
}
