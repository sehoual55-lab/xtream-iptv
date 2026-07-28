import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/sections/cta";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = buildMetadata({
  title: "Xtream IPTV Blog – Rehberler, Anlatımlar & İpuçları",
  description:
    "Xtream IPTV Blog: Xtream Codes, Xtream IPTV Player kurulumu, kurulum anlatımları ve 4K yayın ipuçları.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />

      <PageHero
        eyebrow="// BLOG & REHBERLER"
        title={
          <>
            <span className="text-gold-gradient">Xtream IPTV</span> hakkında her şey
          </>
        }
        description="Rehberler, kurulum anlatımları ve uzman ipuçları: Xtream IPTV'den en iyi şekilde yararlanın."
      />

      <section className="section pt-8">
        <div className="container">
          {/* Featured post */}
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="glass group grid overflow-hidden rounded-4xl md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] md:aspect-auto">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="eyebrow w-fit">{featured.category}</span>
                <h2 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-slate-400">{featured.description}</p>
                <div className="mt-5 flex items-center gap-2 font-medium text-gold">
                  Devamını oku <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="glass group flex h-full flex-col overflow-hidden rounded-3xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="rounded-full bg-white/[0.04] px-2.5 py-1 text-gold">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readingTime}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-white">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-slate-400">{post.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                      Oku <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
