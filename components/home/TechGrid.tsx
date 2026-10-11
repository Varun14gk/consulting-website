import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { techGroups } from "@/content/home";

export function TechGrid() {
  return (
    <Section eyebrow="Technologies" title="Modern, proven tools" className="bg-surface/30">
      <div className="grid gap-5 md:grid-cols-3">
        {techGroups.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.08}>
            <div className="glass h-full p-6">
              <h3 className="mb-4 font-semibold">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li key={t} className="rounded-lg border border-line/15 bg-bg/40 px-3 py-1.5 text-sm text-muted">{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
