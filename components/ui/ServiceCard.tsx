import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/content/services";
import { Icon } from "./Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="glass group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-brand/10"
    >
      <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-accent/20 text-accent">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{service.short}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
