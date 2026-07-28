import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SeoLanding } from "@/components/seo-landing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Xtream IPTV APK – Android & Fire TV Kurulumu (Güvenli)",
  description:
    "Xtream IPTV APK Android ve Fire TV Stick'e nasıl kurulur? Resmi, güvenli ve crack olmadan xtream iptv player android kurulum rehberi.",
  path: "/xtream-iptv-apk",
  keywords: ["xtream iptv apk", "xtream iptv player android", "xtream iptv"],
});

export default function XtreamApkPage() {
  return (
    <SeoLanding
      breadcrumb={[{ name: "Xtream IPTV APK", path: "/xtream-iptv-apk" }]}
      eyebrow="// XTREAM IPTV APK"
      h1={
        <>
          <span className="text-gold-gradient">Xtream IPTV APK</span> kurulumu – güvenli ve kolay
        </>
      }
      intro="Xtream IPTV APK, Android telefon, Android TV ve Fire TV kutularına kurabileceğiniz oynatıcı uygulamasının kurulum dosyasıdır. Yalnızca resmi uygulamaları kullanın."
      sections={[
        {
          heading: "Android telefona kurulum",
          paragraphs: [
            "Google Play Store'dan bir xtream iptv player android uygulaması (IPTV Smarters veya TiviMate) indirin, açın ve Xtream Codes API ile giriş yapın.",
          ],
          bullets: [
            "IPTV Smarters veya TiviMate indirin",
            "'Xtream Codes API ile giriş' seçin",
            "Kullanıcı adı, şifre ve sunucu URL'sini girin",
            "Kanalları ve EPG'yi yükleyip izleyin",
          ],
        },
        {
          heading: "Fire TV Stick'e kurulum",
          paragraphs: [
            "Önce 'Downloader' uygulamasını kurun, ardından bir Xtream IPTV APK (IPTV Smarters) yükleyin ve Xtream Codes bilgilerinizi girin. Birkaç saniyede 4K yayına hazırsınız.",
          ],
        },
        {
          heading: "Güvenlik: crack yok",
          paragraphs: [
            "Şüpheli kaynaklardan APK indirmeyin ve herhangi bir 'crack' aramayın. Resmi kurulum daha güvenli, daha kararlı ve yasaldır. Cihazınızı ve uygulamaları güncel tutun.",
          ],
        },
      ]}
      faqs={faqs.slice(2, 8)}
      related={[
        { label: "Xtream IPTV Player", href: "/xtream-iptv-player" },
        { label: "Xtream IPTV", href: "/xtream-iptv" },
        { label: "Xtream Codes", href: "/xtream-codes" },
        { label: "Kurulum", href: "/installation" },
      ]}
    />
  );
}
