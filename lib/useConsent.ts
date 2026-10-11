"use client";

import { useSyncExternalStore } from "react";

export const CONSENT_KEY = "cookie-consent";
export const CONSENT_EVENT = "cookie-consent-changed";

export type Consent = "accepted" | "declined" | "unset";

function subscribe(cb: () => void) {
  window.addEventListener(CONSENT_EVENT, cb);
  return () => window.removeEventListener(CONSENT_EVENT, cb);
}

function read(): Consent {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "declined" ? v : "unset";
  } catch {
    return "unset";
  }
}

/** Server snapshot is "declined" so neither the banner nor analytics render during static generation. */
export function useConsent(): Consent {
  return useSyncExternalStore(subscribe, read, () => "declined" as Consent);
}

export function setConsent(value: "accepted" | "declined") {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
