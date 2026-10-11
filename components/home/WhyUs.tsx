import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { whyUs } from "@/content/home";

export function WhyUs() {
  return (
    <Section eyebrow="Why choose us" title="A different way to work with a tech partner" className="bg-surface/30">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((w, i) => (
          <Reveal key={w.title} delay={(i % 4) * 0.06}>
            <div className="glass h-full p-5">
              <Icon name={w.icon} className="mb-3 h-6 w-6 text-accent" />
              <h3 className="font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted">{w.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
