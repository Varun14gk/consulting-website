"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT } from "@/config/site";
import { whatsappLink } from "@/lib/url";

/** Floating WhatsApp button and back-to-top button. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-center gap-3">
      {showTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-full border border-line/20 bg-surface p-3 shadow-lg transition hover:bg-line/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
      <a
        href={whatsappLink(CONTACT.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="rounded-full bg-[#25D366] p-3.5 text-white shadow-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
