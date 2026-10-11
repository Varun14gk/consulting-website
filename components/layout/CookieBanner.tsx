"use client";

import Link from "next/link";
import { setConsent, useConsent } from "@/lib/useConsent";

export function CookieBanner() {
  const consent = useConsent();
  if (consent !== "unset") return null;

  return (
    <div role="dialog" aria-label="Cookie consent" className="glass fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl p-4 shadow-2xl">
      <p className="text-sm text-muted">
        We use essential cookies and, with your consent, analytics to improve this site. See our{" "}
        <Link href="/privacy/" className="text-accent underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" className="btn-primary !px-4 !py-2" onClick={() => setConsent("accepted")}>
          Accept
        </button>
        <button type="button" className="btn-ghost !px-4 !py-2" onClick={() => setConsent("declined")}>
          Decline
        </button>
      </div>
    </div>
  );
}
