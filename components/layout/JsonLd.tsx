import { COMPANY_NAME, CONTACT, DESCRIPTION, SITE_URL, SOCIAL } from "@/config/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: SITE_URL,
    description: DESCRIPTION,
    email: CONTACT.email,
    address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
    sameAs: Object.values(SOCIAL).filter((u) => u.startsWith("http")),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
