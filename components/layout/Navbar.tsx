"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/config/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line/10 bg-bg/80 backdrop-blur-lg">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`text-sm transition hover:text-fg ${isActive(l.href) ? "font-semibold text-fg" : "text-muted"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact/" className="btn-primary hidden !px-4 !py-2 sm:inline-flex">
            Book a Call
          </Link>
          <button
            type="button"
            className="rounded-lg border border-line/20 p-2 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line/10 bg-bg lg:hidden">
          <div className="container-x flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 text-muted hover:text-fg">
                {l.label}
              </Link>
            ))}
            <Link href="/contact/" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Book a Call
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
