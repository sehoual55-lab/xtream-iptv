import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SeoLanding } from "@/components/seo-landing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Xtream IPTV Kodları – Güvenli & Kararlı Kodlar 2026",
  description:
    "Güvenli ve kararlı xtream iptv kodları nasıl alınır? Ücretsiz kodların riskleri ve premium Xtream Codes avantajları. Anında teslimat.",
  path: "/xtream-iptv-kodlari",
  keywords: ["xtream iptv kodları", "xtream codes", "xtream iptv"],
});

export default function XtreamKodlariPage() {
  return (
    <SeoLanding
      breadcrumb={[{ name: "Xtream IPTV Kodları", path: "/xtream-iptv-kodlari" }]}
      eyebrow="// XTREAM IPTV KODLARI"
      h1={
        <>
          <span className="text-gold-gradient">Xtream IPTV Kodları</span> – güvenli ve kararlı
        </>
      }
      intro="Xtream IPTV kodları, hizmete giriş yapmanızı sağlayan kişisel Xtream Codes bilgilerinizdir. Kararlı bir deneyim için premium kodlar tercih edilmelidir."
      sections={[
        {
          heading: "Ücretsiz kodların riskleri",
          paragraphs: [
            "İnternette dolaşan ücretsiz xtream iptv kodları genellikle çalışmaz, sürekli kesilir veya güvenlik riski taşır. Güvenilir bir deneyim için premium kodlar gerekir.",
          ],
        },
        {
          heading: "Premium kodların avantajları",
          paragraphs: [
            "Premium Xtream Codes ile kararlı, kesintisiz bir yayın deneyimi elde edersiniz:",
          ],
          bullets: [
            "%99,9 çalışma süresine sahip kararlı sunucular",
            "Gerçek 4K / FHD / HD kalite",
            "İyi bakımlı, güncel kanal listesi",
            "7/24 Türkçe destek",
          ],
        },
        {
          heading: "Kodlarımı nasıl alırım?",
          paragraphs: [
            "Paketinizi seçin ve WhatsApp üzerinden siparişi tamamlayın. Xtream IPTV kodlarınızı (kullanıcı adı, şifre, sunucu URL'si) dakikalar içinde alır ve hemen izlemeye başlarsınız.",
          ],
        },
      ]}
      faqs={faqs.slice(2, 8)}
      related={[
        { label: "Xtream Codes", href: "/xtream-codes" },
        { label: "Xtream IPTV", href: "/xtream-iptv" },
        { label: "Xtream IPTV Player", href: "/xtream-iptv-player" },
        { label: "Fiyatlar", href: "/preise" },
      ]}
    />
  );
}
