import Link from "next/link";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader, Section } from "@/components/ui/Section";
import { industries } from "@/content/industries";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Industries", "How we help insurance, banking, healthcare, retail, education, logistics, manufacturing, real estate and startups.", "/industries/");

export default function IndustriesPage() {
  return (
    <>
      <PageHeader eyebrow="Industries" title="Built for every sector" subtitle="Different industries, similar problems: too much manual work, scattered data and slow decisions. Here is how we help." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i, idx) => (
            <Reveal key={i.slug} delay={(idx % 3) * 0.06}>
              <article className="glass h-full p-6">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-accent/20 text-accent">
                  <Icon name={i.icon} className="h-6 w-6" />
                </span>
                <h2 className="text-lg font-semibold">{i.name}</h2>
                <p className="mt-2 text-sm text-muted">{i.blurb}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent">How we help</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                  {i.help.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <Link href={`/solutions/?industry=${encodeURIComponent(i.name)}`} className="mt-4 inline-block text-sm font-medium text-accent">
                  See related projects
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBanner title="Don't see your industry?" text="We work across sectors. Tell us about your business and we will tell you honestly how we can help." />
    </>
  );
}
