import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/data/blog";

export function BlogLatest() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="// SON REHBERLER"
          title={
            <>
              Son <span className="text-gold-gradient">rehberler & ipuçları</span>
            </>
          }
          subtitle="Xtream IPTV, Xtream Codes ve yayın hakkında rehberler, kurulum anlatımları ve ipuçları."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-silver-500">
                    <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-cyan">{post.category}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readingTime}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-silver-500">{post.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cyan">
                    Devamını oku <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="btn-ghost">
            Tüm yazıları gör <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
