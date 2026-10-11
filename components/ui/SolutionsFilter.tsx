"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import type { CaseStudy } from "@/content/caseStudies";
import { CaseStudyCard } from "./CaseStudyCard";

interface Props {
  studies: CaseStudy[];
  industries: string[];
  services: { slug: string; title: string }[];
}

const noop = () => () => {};
const getSearch = () => window.location.search;

export function SolutionsFilter({ studies, industries, services }: Props) {
  // Deep links like /solutions/?industry=Insurance preselect a filter. Server snapshot is "" (no filter).
  const search = useSyncExternalStore(noop, getSearch, () => "");
  const params = new URLSearchParams(search);
  const urlIndustry = params.get("industry") ?? "";
  const urlService = params.get("service") ?? "";

  const [picked, setPicked] = useState<{ industry?: string; service?: string }>({});
  const industry = picked.industry ?? (industries.includes(urlIndustry) ? urlIndustry : "");
  const service = picked.service ?? (services.some((s) => s.slug === urlService) ? urlService : "");

  const filtered = useMemo(
    () => studies.filter((c) => (!industry || c.industry === industry) && (!service || c.serviceSlug === service)),
    [studies, industry, service],
  );

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="f-industry" className="mb-1 block text-sm font-medium">Industry</label>
          <select id="f-industry" value={industry} onChange={(e) => setPicked({ ...picked, industry: e.target.value })} className="field">
            <option value="">All industries</option>
            {industries.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="f-service" className="mb-1 block text-sm font-medium">Service</label>
          <select id="f-service" value={service} onChange={(e) => setPicked({ ...picked, service: e.target.value })} className="field">
            <option value="">All services</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>
      <p className="mb-4 text-sm text-muted" role="status" aria-live="polite">
        Showing {filtered.length} of {studies.length} projects
      </p>
      {filtered.length === 0 ? (
        <p className="glass p-8 text-center text-muted">No projects match these filters yet.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CaseStudyCard key={c.slug} study={c} />
          ))}
        </div>
      )}
    </>
  );
}
