"use client";

import Script from "next/script";
import { GA_ID, PLAUSIBLE_DOMAIN } from "@/config/site";
import { useConsent } from "@/lib/useConsent";

/** Loads analytics only if an ID/domain is configured AND the visitor accepted cookies. */
export function Analytics() {
  const consent = useConsent();
  if (consent !== "accepted") return null;

  return (
    <>
      {PLAUSIBLE_DOMAIN && <Script defer data-domain={PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js" strategy="afterInteractive" />}
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
    </>
  );
}
