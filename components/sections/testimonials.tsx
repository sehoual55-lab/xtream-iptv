import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/config/site.config";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section className="section relative">
      <div className="pointer-events-none absolute right-1/4 top-20 h-72 w-72 rounded-full bg-emerald/5 blur-[120px]" />
      <div className="container relative">
        <SectionHeading
          eyebrow="// MÜŞTERİ YORUMLARI"
          title={
            <>
              {siteConfig.trust.customersCount} mutlu{" "}
              <span className="text-gold-gradient">Türkiye'deki müşteri</span>
            </>
          }
          subtitle={`${siteConfig.trust.reviewCount.toLocaleString("tr-TR")} doğrulanmış yorumdan ortalama ${siteConfig.trust.rating} / 5 yıldız.`}
        />
      </div>

      {/* Horizontaler Scroll */}
      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-charcoal-950 to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-charcoal-950 to-transparent md:w-24" />

        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-4 md:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="glass flex w-[300px] shrink-0 snap-start flex-col rounded-3xl p-6 sm:w-[360px]"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-300">
                &bdquo;{t.text}&ldquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={`${t.name} aus ${t.city}`}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
                    {t.name}
                    {t.verified && <BadgeCheck className="h-4 w-4 text-emerald" />}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.city} · {t.plan}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-3 text-center text-xs text-slate-500">
          ← Kaydırarak göz atın →
        </p>
      </div>
    </section>
  );
}
