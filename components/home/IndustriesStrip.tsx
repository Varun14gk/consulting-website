import Link from "next/link";
import { industries } from "@/content/industries";
import { Icon } from "@/components/ui/Icon";

export function IndustriesStrip() {
  return (
    <section aria-labelledby="industries-strip" className="border-y border-line/10 bg-surface/30 py-10">
      <div className="container-x">
        <h2 id="industries-strip" className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted">
          Industries we serve
        </h2>
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
          {industries.map((i) => (
            <li key={i.slug}>
              <Link href="/industries/" className="flex flex-col items-center gap-2 rounded-xl p-2 text-center text-xs text-muted transition hover:bg-line/10 hover:text-fg">
                <Icon name={i.icon} className="h-6 w-6 text-accent" />
                {i.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
