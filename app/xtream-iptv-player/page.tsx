import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SeoLanding } from "@/components/seo-landing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Xtream IPTV Player – En İyi Xtream Player Uygulamaları",
  description:
    "Xtream IPTV Player nasıl kurulur? IPTV Smarters, TiviMate ve XCIPTV ile Xtream Codes girişi. Android, iOS, Smart TV ve Fire TV için xtream player rehberi.",
  path: "/xtream-iptv-player",
  keywords: ["xtream iptv player", "xtream player", "iptv player xtream", "xtream iptv player android"],
});

export default function XtreamPlayerPage() {
  return (
    <SeoLanding
      breadcrumb={[{ name: "Xtream IPTV Player", path: "/xtream-iptv-player" }]}
      eyebrow="// XTREAM IPTV PLAYER"
      h1={
        <>
          <span className="text-gold-gradient">Xtream IPTV Player</span> ile hemen yayına başla
        </>
      }
      intro="Bir xtream player, Xtream Codes bilgilerinizle giriş yaptığınız oynatıcı uygulamasıdır. Doğru uygulamayı seçin ve dakikalar içinde tüm kanallara erişin."
      sections={[
        {
          heading: "En iyi Xtream player uygulamaları",
          paragraphs: [
            "Bir iptv player xtream seçerken cihazınıza uygun, kararlı bir uygulama tercih etmelisiniz. En popüler seçenekler şunlardır:",
          ],
          bullets: [
            "IPTV Smarters Pro – yeni başlayanlar için ideal",
            "TiviMate – Android TV & Fire TV için en iyi arayüz",
            "XCIPTV – zengin özellikler",
            "Smart IPTV / IBO Player – Samsung & LG için",
          ],
        },
        {
          heading: "Xtream player nasıl kurulur?",
          paragraphs: [
            "Uygulamayı kurun, 'Xtream Codes API ile giriş' seçeneğini seçin ve kullanıcı adı, şifre ve sunucu URL'sini girin. Birkaç saniye içinde tüm kanallar, EPG ve VOD yüklenir.",
          ],
        },
        {
          heading: "Android'de xtream iptv player",
          paragraphs: [
            "Android telefon, Android TV ve Fire TV kutularında bir xtream iptv player android uygulaması (IPTV Smarters veya TiviMate) kurabilirsiniz. Yalnızca resmi mağazalardan indirin.",
          ],
        },
      ]}
      faqs={faqs.slice(1, 7)}
      related={[
        { label: "Xtream IPTV", href: "/xtream-iptv" },
        { label: "Xtream IPTV APK", href: "/xtream-iptv-apk" },
        { label: "Xtream Codes", href: "/xtream-codes" },
        { label: "Kurulum", href: "/installation" },
      ]}
    />
  );
}
