import Link from "next/link";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-accent p-8 text-white sm:p-14">
          <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Ready to put technology to work?</h2>
              <p className="mt-3 text-white/90">Tell us about your challenge. We will reply within one working day with honest next steps.</p>
              <Link href="/contact/" className="btn mt-6 bg-white text-slate-900 hover:bg-white/90">Book a Free Consultation</Link>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Get practical AI and automation tips</h3>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
