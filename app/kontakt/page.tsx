import type { Metadata } from "next";
import { MessageCircle, Clock, Zap } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { buildWhatsAppLink } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  title: "İletişim – Destek & Danışma",
  description:
    "Xtream IPTV ile iletişime geçin: WhatsApp üzerinden 7/24 Türkçe destek. Xtream IPTV hakkında memnuniyetle yardımcı oluruz.",
  path: "/kontakt",
});

export default function KontaktPage() {
  const channels = [
    {
      icon: MessageCircle,
      title: "WhatsApp Destek",
      value: "Anında sohbet · hızlı yanıt",
      href: buildWhatsAppLink(),
      accent: "emerald" as const,
    },
    {
      icon: Zap,
      title: "Anında Teslimat",
      value: "Dakikalar içinde Xtream Codes",
      href: buildWhatsAppLink("Merhaba! Xtream IPTV sipariş etmek istiyorum. Lütfen sonraki adımları iletin."),
      accent: "gold" as const,
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ name: "İletişim", path: "/kontakt" }]} />

      <PageHero
        eyebrow="// İLETİŞİM"
        title={
          <>
            Her zaman <span className="text-gold-gradient">yanınızdayız</span>
          </>
        }
        description="Xtream IPTV, kurulum veya aboneliğiniz hakkında sorular mı var? Türkçe ekibimiz size 7/24 yardımcı olur."
      />

      <section className="section pt-8">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="grid gap-4 sm:grid-cols-1">
                {channels.map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="hud flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        c.accent === "emerald" ? "bg-emerald/10 text-emerald" : "bg-orange/10 text-orange"
                      }`}
                    >
                      <c.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{c.title}</p>
                      <p className="text-sm text-silver-500">{c.value}</p>
                    </div>
                  </a>
                ))}
                <div className="hud flex items-center gap-4 rounded-2xl p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] text-silver">
                    <Clock className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">Erişilebilirlik</p>
                    <p className="text-sm text-silver-500">24 saat · haftanın 7 günü</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
