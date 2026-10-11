"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { isEmail, submitForm } from "@/lib/submitForm";

export function CareersForm() {
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!data.name?.trim() || !isEmail(data.email ?? "")) {
      setError("Please enter your name and a valid email address.");
      return;
    }
    setError("");
    setStatus("sending");
    const res = await submitForm({ ...data, form: "careers" });
    if (res.ok) {
      setStatus("done");
      form.reset();
    } else {
      setStatus("idle");
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className="glass flex items-center gap-3 p-6">
        <CheckCircle2 className="h-6 w-6 text-accent" aria-hidden="true" /> Thanks! We have noted your interest and will be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1 block text-sm font-medium">Name *</label>
          <input id="c-name" name="name" className="field" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-1 block text-sm font-medium">Email *</label>
          <input id="c-email" name="email" type="email" className="field" autoComplete="email" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-link" className="mb-1 block text-sm font-medium">LinkedIn / portfolio / CV link</label>
          <input id="c-link" name="link" type="url" className="field" placeholder="https://" />
        </div>
      </div>
      <div>
        <label htmlFor="c-msg" className="mb-1 block text-sm font-medium">Tell us about yourself</label>
        <textarea id="c-msg" name="message" rows={4} className="field" />
      </div>
      {error && <p role="alert" className="text-sm text-red-400">{error}</p>}
      <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Submit application"}
      </button>
    </form>
  );
}
