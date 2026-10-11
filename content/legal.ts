export const LEGAL_NOTICE = "Generic template. Review with a lawyer before launch.";

export interface LegalSection {
  heading: string;
  text: string;
}

export const privacy: LegalSection[] = [
  { heading: "1. Who we are", text: "This website is operated by the company named in the site header ('we', 'us'), based in Bangalore, India." },
  { heading: "2. Information we collect", text: "Information you submit through our forms (name, email, phone, company, message), and basic technical data such as browser type and pages visited if analytics is enabled." },
  { heading: "3. How we use it", text: "To respond to enquiries, provide quotes and services, improve the website and meet legal obligations. We do not sell personal information." },
  { heading: "4. Third-party services", text: "Form submissions may be processed by our form provider. If enabled, analytics providers may set cookies. Each has its own privacy policy." },
  { heading: "5. Cookies", text: "We use cookies only for essential functions and, with your consent, analytics. You can change your choice at any time by clearing site data." },
  { heading: "6. Retention and security", text: "We keep enquiry data only as long as needed for the purpose collected and use reasonable measures to protect it." },
  { heading: "7. Your rights", text: "You may request access, correction or deletion of your personal data by contacting us at the email on the contact page." },
  { heading: "8. Changes", text: "We may update this policy. The latest version will always be on this page." },
];

export const terms: LegalSection[] = [
  { heading: "1. Use of this website", text: "The content is provided for general information. You agree to use the site lawfully and not to attempt to disrupt it." },
  { heading: "2. No professional advice", text: "Information on this site is not a binding offer. Services are provided only under a written agreement." },
  { heading: "3. Intellectual property", text: "Site content and design belong to us or our licensors. You may not copy it without permission." },
  { heading: "4. Sample content", text: "Some case studies, testimonials and figures on this site are labelled samples and are illustrative only." },
  { heading: "5. Limitation of liability", text: "To the extent permitted by law, we are not liable for losses arising from use of this website." },
  { heading: "6. Governing law", text: "These terms are governed by the laws of India. Courts in Bangalore have jurisdiction." },
  { heading: "7. Changes", text: "We may revise these terms at any time by updating this page." },
];
