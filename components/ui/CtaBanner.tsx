import Link from "next/link";

export function CtaBanner({ title = "Let's talk about your project", text = "Book a free consultation and get clear, practical next steps." }: { title?: string; text?: string }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-x">
        <div className="glass flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 text-muted">{text}</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact/" className="btn-primary">Book a Free Consultation</Link>
            <Link href="/quote/" className="btn-ghost">Get a Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
