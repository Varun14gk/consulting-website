import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/content/home";

export function ProcessTimeline({ steps = processSteps.slice(0, 5), showDeliverables = false }: { steps?: typeof processSteps; showDeliverables?: boolean }) {
  return (
    <ol className="relative mx-auto max-w-3xl space-y-8 border-l-2 border-gradient border-brand/40 pl-8">
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <span className="absolute -left-[3.05rem] grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-accent text-white shadow-lg shadow-brand/30">
            <Icon name={s.icon} className="h-5 w-5" />
          </span>
          <Reveal delay={i * 0.05}>
            <div className="glass p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.text}</p>
              {showDeliverables && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="rounded-full border border-line/15 px-3 py-1 text-xs text-muted">{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function HowWeWork() {
  return (
    <Section eyebrow="How we work" title="A simple, transparent path from idea to impact" className="bg-surface/30">
      <ProcessTimeline />
    </Section>
  );
}
