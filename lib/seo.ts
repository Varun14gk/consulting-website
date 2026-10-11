import type { Metadata } from "next";
import { COMPANY_NAME, DESCRIPTION, SITE_URL } from "@/config/site";

/** Per-page metadata with canonical URL and Open Graph tags. `path` must start and end with "/". */
export function pageMeta(title: string, description: string = DESCRIPTION, path = "/"): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | ${COMPANY_NAME}`, description, url, siteName: COMPANY_NAME, type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: `${title} | ${COMPANY_NAME}`, description },
  };
}
