import { BASE_PATH, SITE_URL } from "@/config/site";

/** Prefix a public asset path (e.g. "/logo.svg") with the base path. next/link does this automatically. */
export const asset = (path: string) => `${BASE_PATH}${path}`;

/** Absolute URL for SEO tags. */
export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

export const whatsappLink = (number: string, text = "Hi, I'd like to discuss a project.") =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
