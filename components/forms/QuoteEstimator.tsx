"use client";

import { CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";
import { projectSizes, serviceBasePrices, timelines } from "@/content/quote";
import { services } from "@/content/services";
import { isEmail, submitForm } from "@/lib/submitForm";
import { FallbackActions } from "./FallbackActions";

const STEPS = ["Service", "Size", "Timeline", "Contact"] as const;

const inr = (n: number) => `₹${(Math.round(n / 5000) * 5000).toLocaleString("en-IN")}`;

export function QuoteEstimator() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [size, setSize] = useState("");
  const [timeline, setTimeline] = useState("");
  const [contact, setContact] = useState({ name: "", email: "", phone: "", notes: "" });
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const estimate = useMemo(() => {
    const s = projectSizes.find((x) => x.id === size);
    const t = timelines.find((x) => x.id === timeline);
    if (!service || !s || !t) return null;
    const mid = serviceBasePrices[service] * s.multiplier * t.factor;
    return { low: mid * 0.8, high: mid * 1.2 };
  }, [service, size, timeline]);

  const canNext = [service, size, timeline][step] !== "";
  const serviceTitle = services.find((s) => s.slug === service)?.title ?? "";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!contact.name.trim() || !isEmail(contact.email)) {
      setError("Please enter your name and a valid email address.");
      return;
    }
    setError("");
    setStatus("sending");
    const res = await submitForm({
      form: "quote",
      ...contact,
      service: serviceTitle,
      size,
      timeline,
      estimate: estimate ? `${inr(estimate.low)} - ${inr(estimate.high)}` : "",
    });
    if (res.ok) setStatus("done");
    else {
      setStatus("idle");
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  const option = (selected: boolean) =>
    `glass block w-full cursor-pointer p-4 text-left transition hover:border-accent/60 focus-within:ring-2 focus-within:ring-accent ${selected ? "!border-accent bg-accent/10" : ""}`;

  if (status === "done") {
    return (
      <div role="status" className="glass p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-bold">Request received</h2>
        <p className="mt-2 text-muted">We will review your details and send a tailored quote within two working days.</p>
        <div className="flex justify-center">
          <FallbackActions subject={`Quote request: ${serviceTitle}`} body={`Hi, I just requested a quote for ${serviceTitle}.`} />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="glass p-6 sm:p-8">
      <ol className="mb-8 flex items-center gap-2 text-xs sm:text-sm" aria-label="Progress">
        {STEPS.map((s, i) => (
          <li key={s} aria-current={i === step ? "step" : undefined} className={`flex-1 border-t-4 pt-2 ${i <= step ? "border-accent text-fg" : "border-line/15 text-muted"}`}>
            {i + 1}. {s}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <fieldset>
          <legend className="mb-4 text-lg font-semibold">What do you need?</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <label key={s.slug} className={option(service === s.slug)}>
                <input type="radio" name="service" className="sr-only" checked={service === s.slug} onChange={() => setService(s.slug)} />
                <span className="font-medium">{s.title}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset>
          <legend className="mb-4 text-lg font-semibold">How big is the project?</legend>
          <div className="grid gap-3">
            {projectSizes.map((s) => (
              <label key={s.id} className={option(size === s.id)}>
                <input type="radio" name="size" className="sr-only" checked={size === s.id} onChange={() => setSize(s.id)} />
                <span className="font-medium">{s.label}</span> <span className="text-sm text-muted">({s.hint})</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend className="mb-4 text-lg font-semibold">When do you need it?</legend>
          <div className="grid gap-3">
            {timelines.map((t) => (
              <label key={t.id} className={option(timeline === t.id)}>
                <input type="radio" name="timeline" className="sr-only" checked={timeline === t.id} onChange={() => setTimeline(t.id)} />
                <span className="font-medium">{t.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <div className="space-y-4">
          {estimate && (
            <div className="rounded-xl border border-accent/40 bg-accent/10 p-4">
              <p className="text-sm text-muted">Indicative estimate for {serviceTitle}</p>
              <p className="gradient-text text-2xl font-extrabold">{inr(estimate.low)} to {inr(estimate.high)}</p>
              <p className="mt-1 text-xs text-muted">A rough guide only, not a quote. Final pricing follows a short discovery conversation.</p>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="q-name" className="mb-1 block text-sm font-medium">Name *</label>
              <input id="q-name" className="field" autoComplete="name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="q-email" className="mb-1 block text-sm font-medium">Email *</label>
              <input id="q-email" type="email" className="field" autoComplete="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="q-phone" className="mb-1 block text-sm font-medium">Phone</label>
              <input id="q-phone" type="tel" className="field" autoComplete="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="q-notes" className="mb-1 block text-sm font-medium">Anything else we should know?</label>
              <textarea id="q-notes" rows={3} className="field" value={contact.notes} onChange={(e) => setContact({ ...contact, notes: e.target.value })} />
            </div>
          </div>
        </div>
      )}

      {error && <p role="alert" className="mt-4 text-sm text-red-400">{error}</p>}

      <div className="mt-8 flex justify-between gap-3">
        <button type="button" className="btn-ghost" onClick={() => setStep(step - 1)} disabled={step === 0}>
          Back
        </button>
        {step < 3 ? (
          <button type="button" className="btn-primary disabled:opacity-50" onClick={() => setStep(step + 1)} disabled={!canNext}>
            Next
          </button>
        ) : (
          <button type="submit" className="btn-primary disabled:opacity-60" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Request my quote"}
          </button>
        )}
      </div>
    </form>
  );
}
