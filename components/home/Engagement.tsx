import { Check } from "lucide-react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { engagementModels } from "@/content/home";

export function Engagement() {
  return (
    <Section eyebrow="Engagement models" title="Work with us the way that suits you" className="bg-surface/30">
      <div className="grid gap-5 md:grid-cols-3">
        {engagementModels.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.08}>
            <div className="glass flex h-full flex-col p-6">
              <Icon name={m.icon} className="mb-3 h-7 w-7 text-accent" />
              <h3 className="text-xl font-semibold">{m.title}</h3>
              <p className="mt-1 text-muted">{m.text}</p>
              <p className="mt-1 text-sm font-medium text-accent">{m.bestFor}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link href="/quote/" className="btn-ghost mt-6">Get a quote</Link>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
