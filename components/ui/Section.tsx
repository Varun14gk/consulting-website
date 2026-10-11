import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="container-x">
        {title && (
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <header className="relative overflow-hidden border-b border-line/10 pb-14 pt-16 sm:pt-24">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="container-x relative max-w-3xl">
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
      </div>
    </header>
  );
}
