import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { buildWhatsAppLink } from "@/config/site.config";

export function Cta() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="hud glow-border relative overflow-hidden rounded-4xl px-6 py-14 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-orange/20 blur-[100px]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl md:text-5xl">
                Xtream IPTV&apos;ye <span className="text-gold-gradient">bağlanmaya hazır mısın?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-silver">
                Bugün premium 4K yayına başla. Anında teslimat, kararlı sunucular ve
                7/24 Türkçe destek – Türkiye genelinde binlerce mutlu müşteri.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/preise" className="btn-premium w-full text-base sm:w-auto">
                  Paket Seç <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emerald w-full text-base sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Destek
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
