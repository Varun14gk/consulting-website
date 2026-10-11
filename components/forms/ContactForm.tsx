"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { FORMSPREE_ENDPOINT } from "@/config/site";
import { budgetRanges } from "@/content/quote";
import { services } from "@/content/services";
import { isEmail, submitForm } from "@/lib/submitForm";
import { FallbackActions } from "./FallbackActions";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [summary, setSummary] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const next: Errors = {};
    if (!data.name?.trim()) next.name = "Please enter your name.";
    if (!isEmail(data.email ?? "")) next.email = "Please enter a valid email address.";
    if (!data.message?.trim() || data.message.trim().length < 10) next.message = "Please tell us a little more (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    // Honeypot: real users never fill this hidden field.
    if (data.website) {
      setStatus("done");
      return;
    }

    setStatus("sending");
    const res = await submitForm({ ...data, form: "contact" });
    if (res.ok) {
      setSummary(`Hi, I'm ${data.name}${data.company ? ` from ${data.company}` : ""}. ${data.message}`);
      setStatus("done");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="glass p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-bold">Thank you!</h2>
        <p className="mt-2 text-muted">
          {FORMSPREE_ENDPOINT
            ? "Your message has been sent. We will reply within one working day."
            : "Demo mode: the form backend is not connected yet, so nothing was sent. Please use the buttons below to reach us directly."}
        </p>
        <div className="flex justify-center">
          <FallbackActions subject="Project enquiry" body={summary} />
        </div>
      </div>
    );
  }

  const err = (k: keyof Errors) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-err` } : {});
  const msg = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-err`} role="alert" className="mt-1 text-sm text-red-400">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="glass space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">Name *</label>
          <input id="name" name="name" autoComplete="name" className="field" {...err("name")} />
          {msg("name")}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">Email *</label>
          <input id="email" name="email" type="email" autoComplete="email" className="field" {...err("email")} />
          {msg("email")}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" />
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium">Company</label>
          <input id="company" name="company" autoComplete="organization" className="field" />
        </div>
        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-medium">Service interested in</label>
          <select id="service" name="service" defaultValue={defaultService} className="field">
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1 block text-sm font-medium">Budget range</label>
          <select id="budget" name="budget" className="field" defaultValue="">
            <option value="">Select a range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">How can we help? *</label>
        <textarea id="message" name="message" rows={5} className="field" {...err("message")} />
        {msg("message")}
      </div>
      <div className="hidden" aria-hidden="true">
        <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {status === "error" && (
        <p role="alert" className="rounded-lg border border-red-400/40 bg-red-400/10 p-3 text-sm text-red-400">
          Sorry, something went wrong sending your message. Please try again, or email or WhatsApp us directly.
        </p>
      )}
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
