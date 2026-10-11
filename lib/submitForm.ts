import { FORMSPREE_ENDPOINT } from "@/config/site";

export type SubmitResult = { ok: true; demo: boolean } | { ok: false };

/**
 * Posts to Formspree when FORMSPREE_ENDPOINT is set. Otherwise resolves in "demo" mode
 * so the success state still works (nothing is sent).
 */
export async function submitForm(data: Record<string, string>): Promise<SubmitResult> {
  if (!FORMSPREE_ENDPOINT) return { ok: true, demo: true };
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok ? { ok: true, demo: false } : { ok: false };
  } catch {
    return { ok: false };
  }
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
