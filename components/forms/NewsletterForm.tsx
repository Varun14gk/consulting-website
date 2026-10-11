"use client";

import { useState } from "react";
import { FORMSPREE_ENDPOINT } from "@/config/site";

type Status = "idle" | "sending" | "done" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      if (FORMSPREE_ENDPOINT) {
        const res = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error("failed");
      }
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return <p role="status" className="font-medium">Thanks! You are on the list.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row" noValidate={false}>
      <input type="hidden" name="form" value="newsletter" />
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input id="newsletter-email" name="email" type="email" required placeholder="you@company.com" className="field" />
      <button type="submit" disabled={status === "sending"} className="btn bg-white text-slate-900 hover:bg-white/90 disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Subscribe"}
      </button>
      {status === "error" && <p role="alert" className="text-sm text-red-200">Something went wrong. Please try again.</p>}
    </form>
  );
}
