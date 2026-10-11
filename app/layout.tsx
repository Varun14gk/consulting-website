import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@/components/layout/Analytics";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/layout/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { COMPANY_NAME, DESCRIPTION, SITE_URL, TAGLINE } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${COMPANY_NAME} | ${TAGLINE}`, template: `%s | ${COMPANY_NAME}` },
  description: DESCRIPTION,
  openGraph: { siteName: COMPANY_NAME, type: "website", title: `${COMPANY_NAME} | ${TAGLINE}`, description: DESCRIPTION },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#070a14" };

// Runs before first paint so there is no flash. Default theme is dark.
const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",t==="light"?"light":"dark")}catch(e){document.documentElement.setAttribute("data-theme","dark")}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <OrganizationJsonLd />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <AnnouncementBar />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
