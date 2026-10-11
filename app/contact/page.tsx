import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader, Section } from "@/components/ui/Section";
import { BOOKING_URL, CONTACT } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { whatsappLink } from "@/lib/url";

export const metadata = pageMeta("Contact", "Book a free consultation or send us a message. We reply within one working day.", "/contact/");

export default function ContactPage() {
  const items = [
    { Icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { Icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { Icon: MapPin, label: "Address", value: CONTACT.address },
    { Icon: Clock, label: "Hours", value: CONTACT.hours },
  ];

  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk about your project" subtitle="Tell us what you are trying to achieve. We will reply within one working day with honest next steps." />
      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <aside className="space-y-4 lg:col-span-2" aria-label="Contact details">
            <ul className="glass space-y-4 p-6">
              {items.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">{label}</p>
                    {href ? <a href={href} className="hover:text-accent">{value}</a> : <p>{value}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <a href={whatsappLink(CONTACT.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn w-full bg-[#25D366] text-white hover:brightness-110">
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> Chat on WhatsApp
            </a>

            {/* Map placeholder: replace with a Google Maps / OpenStreetMap embed iframe when you have an address */}
            <div className="glass grid h-44 place-items-center text-center text-sm text-muted">
              <span>
                <MapPin className="mx-auto mb-2 h-6 w-6" aria-hidden="true" />
                Map placeholder
                <br />
                Bangalore, India
              </span>
            </div>
          </aside>
        </div>
      </Section>

      <Section eyebrow="Book a call" title="Pick a time that suits you" className="bg-surface/30">
        {BOOKING_URL ? (
          <iframe src={BOOKING_URL} title="Book a call" className="mx-auto h-[700px] w-full max-w-4xl rounded-2xl border border-line/10" loading="lazy" />
        ) : (
          <div className="glass mx-auto max-w-2xl p-8 text-center text-muted">
            <p>Calendly / Cal.com booking embed placeholder.</p>
            <p className="mt-2 text-sm">Set <code>NEXT_PUBLIC_BOOKING_URL</code> in your environment to show your booking page here.</p>
          </div>
        )}
      </Section>
    </>
  );
}
