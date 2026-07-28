import type { Metadata } from "next";
import { buildMetadata, faqJsonLd, productJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { Pricing } from "@/components/sections/pricing";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import { Cta } from "@/components/sections/cta";
import { JsonLd } from "@/components/jsonld";
import { faqs } from "@/data/faqs";
import { plans } from "@/config/pricing.config";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Xtream IPTV Fiyatları & Paketler | $39.99'dan başlayan",
  description:
    "Xtream IPTV $39.99'dan: Bronze, Gold, Platinum & Exclusive. 25.000–130.000+ kanal, 4K kalite, anında teslimat. Bağlantı sayını + / − seçici ile belirle.",
  path: "/preise",
});

const priceFaqs = faqs.slice(0, 5);

export default function PreisePage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(priceFaqs),
          ...plans.map((p) =>
            productJsonLd({ name: p.name, price: p.price, description: `${p.name} Xtream IPTV Paketi – ${p.duration}` })
          ),
        ]}
      />
      <Breadcrumbs items={[{ name: "Fiyatlar", path: "/preise" }]} />

      <PageHero
        eyebrow="// ERİŞİM KARTLARI"
        title={
          <>
            Xtream IPTV <span className="text-gold-gradient">uygun fiyatlarla</span>
          </>
        }
        description="Şeffaf paketler, gizli ücret yok. Tüm fiyatlara 4K yayın, devasa kanal arşivi ve 7/24 Türkçe destek dahildir."
      />

      <Pricing showHeading={false} />

      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="// SİPARİŞ SORULARI"
            title="Fiyatlar & sipariş hakkında sık sorulanlar"
          />
          <div className="mt-12">
            <FaqAccordion items={priceFaqs} />
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
