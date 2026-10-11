"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "@/content/types";

export function Accordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="glass overflow-hidden">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${base}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {item.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-accent transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
            </h3>
            <div id={`${base}-${i}`} role="region" hidden={!isOpen} className="px-5 pb-5 text-muted">
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
