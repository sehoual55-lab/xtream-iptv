import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SeoLanding } from "@/components/seo-landing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Xtream Codes – Xtream Code IPTV Girişi Nasıl Yapılır?",
  description:
    "Xtream Codes nedir, xtream code iptv girişi nasıl yapılır? Kullanıcı adı, şifre ve sunucu URL'si ile kolay kurulum. Tüm cihazlar için rehber.",
  path: "/xtream-codes",
  keywords: ["xtream codes", "xtream code iptv", "xtream iptv"],
});

export default function XtreamCodesPage() {
  return (
    <SeoLanding
      breadcrumb={[{ name: "Xtream Codes", path: "/xtream-codes" }]}
      eyebrow="// XTREAM CODES"
      h1={
        <>
          <span className="text-gold-gradient">Xtream Codes</span> ile giriş nasıl yapılır?
        </>
      }
      intro="Xtream Codes, IPTV hizmetine giriş yapmak için kullanılan bir kimlik doğrulama sistemidir. Üç bilgiden oluşur: kullanıcı adı, şifre ve sunucu URL'si."
      sections={[
        {
          heading: "Xtream code iptv nedir?",
          paragraphs: [
            "Bir xtream code iptv girişi, bu üç bilgiyi bir oynatıcıya girmek anlamına gelir. Uygulama daha sonra tüm kanalları, EPG'yi ve VOD içeriğini otomatik olarak yükler.",
          ],
          bullets: [
            "Kullanıcı adı + şifre + sunucu URL'si",
            "EPG ve VOD için idealdir",
            "Tüm popüler uygulamalarda çalışır",
          ],
        },
        {
          heading: "Xtream Codes nasıl girilir?",
          paragraphs: [
            "IPTV Smarters veya TiviMate gibi bir uygulama kurun, 'Xtream Codes API ile giriş' seçin ve bilgilerinizi girin. Birkaç saniye içinde tüm içerik yüklenir.",
          ],
        },
        {
          heading: "m3u bağlantısı ile fark",
          paragraphs: [
            "Xtream Codes, kullanıcı adı-şifre-URL üçlüsüdür ve EPG için idealdir. m3u bağlantısı ise tek bir URL'dir ve çoğu uygulama için pratiktir. Her ikisi de aynı içeriği sunar.",
          ],
        },
      ]}
      faqs={faqs.slice(1, 7)}
      related={[
        { label: "Xtream IPTV", href: "/xtream-iptv" },
        { label: "Xtream IPTV Player", href: "/xtream-iptv-player" },
        { label: "Xtream IPTV Kodları", href: "/xtream-iptv-kodlari" },
        { label: "Kurulum", href: "/installation" },
      ]}
    />
  );
}
