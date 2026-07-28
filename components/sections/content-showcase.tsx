import Image from "next/image";
import { Star } from "lucide-react";
import { getShowcase } from "@/lib/tmdb";
import { SectionHeading } from "@/components/section-heading";

export async function ContentShowcase() {
  const items = await getShowcase();
  // Zwei Reihen für den Marquee-Effekt
  const row = [...items, ...items];

  return (
    <section className="section relative overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Filme & Serien"
          title={
            <>
              140.000+ <span className="text-emerald-gradient">Filme &amp; Serien</span> on demand
            </>
          }
          subtitle="Aktuelle Blockbuster, Serien-Highlights und internationale Inhalte – inklusive Titel von Netflix, Prime Video, Disney+ und mehr. Alles in einer App."
        />
      </div>

      <div className="relative mt-14 flex flex-col gap-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-charcoal-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-charcoal-950 to-transparent" />

        <div className="flex w-max animate-marquee gap-6">
          {row.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="group relative h-80 w-56 shrink-0 overflow-hidden rounded-3xl border border-white/[0.06] bg-charcoal-800 shadow-card sm:h-96 sm:w-64"
            >
              <Image
                src={item.poster}
                alt={item.title ? `${item.title} – Film/Serie im IPTV Angebot` : "Film & Serie im IPTV Angebot"}
                fill
                sizes="(max-width: 640px) 224px, 256px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <div className="flex items-center gap-1 text-xs text-gold">
                  <Star className="h-3 w-3 fill-gold" /> {item.rating.toFixed(1)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
