import { Counter } from "@/components/ui/Counter";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { Section } from "@/components/ui/Section";
import { stats } from "@/content/home";

export function Stats() {
  return (
    <Section>
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass p-6 text-center">
            <dd className="gradient-text text-4xl font-extrabold">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
            <dt className="mt-2 text-sm text-muted">{s.label}</dt>
            <SampleBadge show={s.isPlaceholder} label="Sample data" className="mt-3" />
          </div>
        ))}
      </dl>
    </Section>
  );
}
