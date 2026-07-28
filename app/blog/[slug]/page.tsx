import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { buildMetadata, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Markdown } from "@/components/markdown";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/sections/cta";
import { JsonLd } from "@/components/jsonld";
import { blogPosts, getPost } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [post.keyword],
    image: post.cover,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const formattedDate = new Date(post.date).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: post.title,
            description: post.description,
            date: post.date,
            author: post.author,
            slug: post.slug,
            image: post.cover,
          }),
          breadcrumbJsonLd([
            { name: "Start", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.category, path: "/blog" },
        ]}
      />

      <article className="section pt-8">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">{post.category}</span>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {formattedDate}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readingTime}
              </span>
              <span>{post.author}</span>
            </div>
          </div>

          <Reveal>
            <div className="relative mx-auto mt-8 aspect-[16/9] max-w-4xl overflow-hidden rounded-4xl">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <div className="mx-auto mt-12 max-w-3xl">
            <Markdown content={post.content} />

            <div className="glass mt-12 rounded-3xl p-8 text-center">
              <h2 className="font-display text-xl font-semibold text-white">
                Xtream IPTV ile hemen başla
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-slate-400">
                4K premium yayın, 130.000+ kanal ve anında teslimat.
                Paketini seç ve bugün başla.
              </p>
              <Link href="/preise" className="btn-premium mt-6">
                Paketleri gör <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Related */}
          <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="mb-6 font-display text-2xl font-bold text-white">
              Diğer yazılar
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="glass group flex flex-col overflow-hidden rounded-3xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.cover}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold text-white">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Cta />
    </>
  );
}
