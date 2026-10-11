import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { getPost, posts } from "@/content/blog";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  return p ? pageMeta(p.title, p.excerpt, `/blog/${p.slug}/`) : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="container-x max-w-3xl py-16 sm:py-24">
        <Link href="/blog/" className="text-sm text-accent">&larr; All posts</Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">{post.title}</h1>
        <p className="mt-3 text-sm text-muted">
          By {post.author} · {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })} · {post.readMinutes} min read
        </p>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
          {post.body.map((b, i) => {
            if (b.type === "h2") return <h2 key={i} className="pt-4 text-2xl font-semibold text-fg">{b.text}</h2>;
            if (b.type === "ul")
              return (
                <ul key={i} className="list-disc space-y-2 pl-6">
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            return <p key={i}>{b.text}</p>;
          })}
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
