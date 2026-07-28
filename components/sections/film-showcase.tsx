import Image from "next/image";
import { Star } from "lucide-react";
import type { MediaItem } from "@/lib/tmdb";
import { SectionHeading } from "@/components/section-heading";

export function FilmShowcase({ posters }: { posters: MediaItem[] }) {
  // İki sıra için afişleri çoğalt (sonsuz kayan şerit)
  const row = [...posters, ...posters];

  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-orange/5 blur-[120px]" />
      <div className="container relative">
        <SectionHeading
          eyebrow="// BU HAFTA YENİ"
          title={
            <>
              Kütüphanende <span className="text-gold-gradient">yeni içerikler</span>
            </>
          }
          subtitle="Xtream IPTV'deki en popüler içeriklerden dönüşümlü bir seçki – her hafta güncellenir, her zaman 4K kalitede."
        />
      </div>

      <div className="relative mt-14 flex flex-col gap-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-charcoal-900 to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-charcoal-900 to-transparent md:w-32" />

        <div className="flex w-max animate-marquee gap-5">
          {row.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="group relative h-72 w-48 shrink-0 overflow-hidden rounded-3xl border border-white/[0.06] bg-charcoal-800 shadow-card sm:h-96 sm:w-64"
            >
              <Image
                src={item.poster}
                alt={item.title ? `${item.title} – Xtream IPTV film & dizi` : "Xtream IPTV film & dizi"}
                fill
                sizes="(max-width: 640px) 192px, 256px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal-950/90 to-transparent p-3">
                <div className="flex items-center gap-1 font-mono text-xs text-orange">
                  <Star className="h-3 w-3 fill-orange" /> {item.rating.toFixed(1)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
