import { AlertTriangle } from "lucide-react";
import { LEGAL_NOTICE, type LegalSection } from "@/content/legal";
import { PageHeader } from "./Section";

export function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHeader title={title} />
      <div className="container-x max-w-3xl py-12">
        <p className="mb-8 flex items-center gap-2 rounded-xl border border-amber-400/50 bg-amber-400/10 p-4 text-sm text-amber-700 dark:text-amber-300">
          <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" /> {LEGAL_NOTICE}
        </p>
        <div className="space-y-6">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-semibold">{s.heading}</h2>
              <p className="mt-2 text-muted">{s.text}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
