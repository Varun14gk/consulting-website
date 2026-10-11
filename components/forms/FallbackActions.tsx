import { Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/config/site";
import { whatsappLink } from "@/lib/url";

/** Email + WhatsApp buttons so the form is useful even without a form backend. */
export function FallbackActions({ subject = "Enquiry", body = "" }: { subject?: string; body?: string }) {
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
      <a href={mailto} className="btn-ghost">
        <Mail className="h-4 w-4" aria-hidden="true" /> Email us
      </a>
      <a href={whatsappLink(CONTACT.whatsapp, body || "Hi, I'd like to discuss a project.")} target="_blank" rel="noopener noreferrer" className="btn-ghost">
        <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp us
      </a>
    </div>
  );
}
