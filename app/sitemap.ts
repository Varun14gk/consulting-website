import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { caseStudies } from "@/content/caseStudies";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/url";

export const dynamic = "force-static";

const staticPaths = ["/", "/services/", "/industries/", "/solutions/", "/about/", "/process/", "/blog/", "/careers/", "/contact/", "/quote/", "/privacy/", "/terms/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...services.map((s) => `/services/${s.slug}/`),
    ...caseStudies.map((c) => `/solutions/${c.slug}/`),
    ...posts.map((p) => `/blog/${p.slug}/`),
  ];
  return paths.map((p) => ({ url: absoluteUrl(p), changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
