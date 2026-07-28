import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SeoLanding } from "@/components/seo-landing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Xtream IPTV – Premium Xtream Codes Yayın Platformu 2026",
  description:
    "Xtream IPTV: 130.000+ kanal ve 140.000+ film & dizi 4K kalitede. Xtream Codes girişi, tüm cihazlarda Xtream IPTV Player desteği, anında aktivasyon ve 7/24 destek.",
  path: "/xtream-iptv",
  keywords: ["xtream iptv", "iptv xtream", "xtream codes"],
});

export default function XtreamIptvPage() {
  return (
    <SeoLanding
      breadcrumb={[{ name: "Xtream IPTV", path: "/xtream-iptv" }]}
      eyebrow="// XTREAM IPTV"
      h1={
        <>
          Xtream IPTV – <span className="text-gold-gradient">130.000+ kanala</span> premium erişim
        </>
      }
      intro="Xtream IPTV; canlı TV, spor, film ve dizileri gerçek 4K kalitede tek bir Xtream Codes girişiyle sunar. Kararlı, uygun ve anında aktif."
      sections={[
        {
          heading: "Xtream IPTV nedir?",
          paragraphs: [
            "Xtream IPTV, televizyonu internet üzerinden izlemenizi sağlayan modern bir yayın teknolojisidir. Kablo veya uydu yerine, Xtream Codes tabanlı bir sistem ile on binlerce kanala ve devasa bir arşive tek bağlantıdan erişirsiniz.",
            "Premium bir iptv xtream hizmeti olarak kararlı sunucular, gerçek 4K kalite ve 7/24 Türkçe destek sunuyoruz.",
          ],
          bullets: [
            "130.000+ canlı TV kanalı",
            "140.000+ film & dizi (VOD)",
            "Xtream Codes + m3u bağlantısı",
            "Anında teslimat, %99,9 çalışma süresi",
            "Smart TV, Fire TV, Apple TV, Android & PC uyumu",
          ],
        },
        {
          heading: "Xtream Codes ile nasıl başlarım?",
          paragraphs: [
            "Paketinizi seçin, bağlantı sayısını belirleyin ve siparişi WhatsApp üzerinden güvenle tamamlayın. Ardından kullanıcı adı, şifre ve sunucu URL'sinden oluşan Xtream Codes bilgilerinizi dakikalar içinde alırsınız.",
          ],
        },
        {
          heading: "Neden Xtream IPTV en iyi seçenek?",
          paragraphs: [
            "Premium kaliteyi uygun fiyatla birleştiriyoruz: gerçek 4K yayınlar, %99,9 erişilebilirlik, iyi bakımlı kanal listesi ve gerçekten yardımcı olan bir destek.",
          ],
          bullets: [
            "Anti-freeze teknolojisiyle %99,9 sunucu süresi",
            "Yasal ve güvenli – crack gerektirmez",
            "WhatsApp üzerinden 7/24 Türkçe destek",
          ],
        },
      ]}
      faqs={faqs.slice(0, 6)}
      related={[
        { label: "Xtream IPTV Player", href: "/xtream-iptv-player" },
        { label: "Xtream IPTV APK", href: "/xtream-iptv-apk" },
        { label: "Xtream Codes", href: "/xtream-codes" },
        { label: "Xtream IPTV Kodları", href: "/xtream-iptv-kodlari" },
        { label: "Fiyatlar", href: "/preise" },
      ]}
    />
  );
}
