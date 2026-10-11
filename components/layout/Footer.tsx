import Link from "next/link";
import { COMPANY_NAME, CONTACT, NAV_LINKS, TAGLINE } from "@/config/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line/10 bg-surface/40">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm text-muted">{TAGLINE}</p>
          <p className="text-sm text-muted">{CONTACT.address}</p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold">Services</h2>
          <ul className="space-y-2 text-sm text-muted">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="hover:text-fg">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold">Company</h2>
          <ul className="space-y-2 text-sm text-muted">
            {NAV_LINKS.filter((l) => l.href !== "/services/").map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/careers/" className="hover:text-fg">Careers</Link>
            </li>
            <li>
              <Link href="/quote/" className="hover:text-fg">Get a Quote</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold">Contact</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li><a href={`mailto:${CONTACT.email}`} className="hover:text-fg">{CONTACT.email}</a></li>
            <li><a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-fg">{CONTACT.phone}</a></li>
            <li>{CONTACT.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line/10 py-5">
        <div className="container-x flex flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="flex gap-4">
            <Link href="/privacy/" className="hover:text-fg">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-fg">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
