/** Single source of truth for brand + site-wide settings. Edit here. */
export const COMPANY_NAME = "Nexaro";
export const TAGLINE = "Technology that works for your business.";
export const DESCRIPTION =
  "AI, software, web and automation solutions for businesses in every sector. Senior-led, business-first, built in Bangalore for clients worldwide.";

/** Show "Sample ..." badges on placeholder content. Set false only after real content replaces it. */
export const SHOW_PLACEHOLDER_BADGES = true;

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.github.io";
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "";

export const ANNOUNCEMENT = "Now onboarding our first clients. Book a free consultation.";

export const CONTACT = {
  email: "hello@example.com", // PLACEHOLDER
  phone: "+91 00000 00000", // PLACEHOLDER
  whatsapp: "910000000000", // PLACEHOLDER: country code + number, digits only
  address: "Bangalore, Karnataka, India", // PLACEHOLDER: add full street address
  hours: "Mon to Fri, 10:00 to 18:00 IST",
};

export const SOCIAL = {
  linkedin: "#", // PLACEHOLDER
  github: "#", // PLACEHOLDER
  x: "#", // PLACEHOLDER
};

export const NAV_LINKS = [
  { href: "/services/", label: "Services" },
  { href: "/industries/", label: "Industries" },
  { href: "/solutions/", label: "Solutions" },
  { href: "/process/", label: "Process" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
] as const;
