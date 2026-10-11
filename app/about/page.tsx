import { Link2, MapPin } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader, Section } from "@/components/ui/Section";
import { duo, founders, roadmap, story, values } from "@/content/about";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("About Us", "A business-and-technology founding team: 15+ years of operations expertise paired with hands-on AI engineering.", "/about/");

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={story.title} subtitle="A young company with senior experience, building technology the way a business owner would want it built." />

      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-lg text-muted">
          {story.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
          <div className="glass p-6">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Mission</h2>
            <p>{story.mission}</p>
          </div>
          <div className="glass p-6">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Vision</h2>
            <p>{story.vision}</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Values" title="What we stand for" className="bg-surface/30">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="glass p-5">
              <Icon name={v.icon} className="mb-3 h-6 w-6 text-accent" />
              <h3 className="font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Founders" title="Meet the founders">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          {founders.map((f) => (
            <Reveal key={f.name}>
              <article className="glass h-full p-6">
                <div className="flex items-center gap-5">
                  <Avatar initials={f.initials} photo={f.photo} name={f.name} />
                  <div>
                    <h3 className="text-xl font-bold">{f.name}</h3>
                    <p className="text-accent">{f.role}</p>
                    {f.location && (
                      <p className="mt-1 flex items-center gap-1 text-sm text-muted">
                        <MapPin className="h-4 w-4" aria-hidden="true" /> {f.location}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-muted">
                  {f.bio.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {f.highlights.map((h) => (
                    <li key={h} className="rounded-full border border-line/15 px-3 py-1 text-xs text-muted">{h}</li>
                  ))}
                </ul>
                <a href={f.linkedin} aria-label={`${f.name} on LinkedIn`} className="mt-5 inline-flex items-center gap-2 text-sm text-accent hover:underline">
                  <Link2 className="h-4 w-4" aria-hidden="true" /> LinkedIn
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why us" title="Why a business and tech duo?" className="bg-surface/30">
        <div className="grid gap-5 md:grid-cols-3">
          {duo.map((d) => (
            <div key={d.title} className="glass p-6">
              <h3 className="font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-muted">{d.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Roadmap" title="Where we are going">
        <ol className="mx-auto max-w-3xl space-y-4">
          {roadmap.map((r) => (
            <li key={r.title} className="glass flex gap-4 p-5">
              <span className={`h-fit rounded-full px-3 py-1 text-xs font-semibold ${r.status === "now" ? "bg-accent text-slate-900" : "border border-line/20 text-muted"}`}>
                {r.phase}
              </span>
              <div>
                <h3 className="font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm text-muted">{r.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBanner />
    </>
  );
}
