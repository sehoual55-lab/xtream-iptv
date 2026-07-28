import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { InstallationGuides } from "@/components/sections/installation-guides";
import { Cta } from "@/components/sections/cta";
import { buildWhatsAppLink } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Xtream IPTV Kurulum Rehberi – Tüm Cihazlarda",
  description:
    "Xtream IPTV kurulum rehberi: Fire TV Stick, Smart TV, Android, iOS, MAG ve PC. Xtream Codes ile birkaç dakikada yayına başlayın.",
  path: "/installation",
});

export default function InstallationPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Kurulum", path: "/installation" }]} />

      <PageHero
        eyebrow="// KURULUM MERKEZİ"
        title={
          <>
            Xtream IPTV&apos;yi <span className="text-gold-gradient">dakikalar içinde</span> kur
          </>
        }
        description="Satın alma sonrası Xtream Codes bilgilerinizi ve m3u bağlantınızı alırsınız. Aşağıdan cihazınızı seçin ve adımları izleyin."
      />

      <InstallationGuides />

      <section className="pb-4">
        <div className="container">
          <div className="hud mx-auto max-w-3xl rounded-3xl p-8 text-center">
            <h2 className="font-display text-xl font-semibold text-white">
              Kurulumda yardıma mı ihtiyacın var?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-silver-500">
              Türkçe destek ekibimiz 7/24 WhatsApp üzerinden yardımcı olur –
              her şey çalışana kadar adım adım.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={buildWhatsAppLink("Merhaba! Xtream IPTV kurulumunda yardıma ihtiyacım var.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald"
              >
                WhatsApp Destek
              </a>
              <Link href="/preise" className="btn-ghost">
                Fiyatlara Git <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
