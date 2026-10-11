"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { Section } from "@/components/ui/Section";
import { sampleClients } from "@/content/home";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % count), 6000);
    return () => clearInterval(t);
  }, [paused, count]);

  const t = testimonials[i];

  return (
    <Section eyebrow="Testimonials" title="What clients will say" subtitle="Sample feedback shown to preview the layout. We will replace it with real client words.">
      <div
        className="glass relative mx-auto max-w-3xl p-8 sm:p-10"
        role="group"
        aria-roledescription="carousel"
        aria-label="Testimonials"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <Quote className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
        <figure aria-live="polite" aria-atomic="true">
          <blockquote className="text-lg leading-relaxed sm:text-xl">&ldquo;{t.quote}&rdquo;</blockquote>
          <figcaption className="mt-6 flex flex-wrap items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand to-accent font-semibold text-white" aria-hidden="true">
              {t.name.split(" ").map((p) => p[0]).join("")}
            </span>
            <span>
              <span className="block font-semibold">{t.name}</span>
              <span className="block text-sm text-muted">{t.role}, {t.company}</span>
            </span>
            <SampleBadge show={t.isPlaceholder} label="Sample feedback" className="ml-auto" />
          </figcaption>
        </figure>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((x, idx) => (
              <button
                key={x.name}
                type="button"
                role="tab"
                aria-selected={idx === i}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2.5 rounded-full transition-all ${idx === i ? "w-6 bg-accent" : "w-2.5 bg-line/30"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous testimonial" onClick={() => setI((i - 1 + count) % count)} className="rounded-lg border border-line/20 p-2 hover:bg-line/10">
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next testimonial" onClick={() => setI((i + 1) % count)} className="rounded-lg border border-line/20 p-2 hover:bg-line/10">
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-muted">
          Sample client wordmarks <SampleBadge show label="Sample logo" />
        </p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-muted/70">
          {sampleClients.map((c) => (
            <li key={c.name} className="text-lg font-bold tracking-tight">{c.name}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
