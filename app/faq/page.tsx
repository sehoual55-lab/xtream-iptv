import type { Metadata } from "next";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Cta } from "@/components/sections/cta";
import { JsonLd } from "@/components/jsonld";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "SSS – Xtream IPTV Hakkında Sık Sorulan Sorular",
  description:
    "Xtream IPTV hakkında sık sorulan sorular: teslimat, cihazlar, Xtream Codes, bağlantılar, sunucu kararlılığı ve destek. Tüm önemli bilgiler tek bakışta.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs items={[{ name: "SSS", path: "/faq" }]} />

      <PageHero
        eyebrow="// SIKÇA SORULAN SORULAR"
        title={
          <>
            <span className="text-gold-gradient">Xtream IPTV</span> hakkında sık sorulanlar
          </>
        }
        description="En çok sorulan soruların yanıtlarını burada bulabilirsiniz. Sorunuz yok mu? Bize her zaman WhatsApp'tan yazabilirsiniz."
      />

      <section className="section pt-8">
        <div className="container">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <Cta />
    </>
  );
}
