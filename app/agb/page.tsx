import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Kullanım Şartları",
  description:
    "Xtream IPTV Kullanım Şartları: hizmetler, fiyatlar, teslimat, kullanım ve sorumluluk.",
  path: "/agb",
});

const sections = [
  {
    title: "1. Kapsam",
    body: "Bu kullanım şartları, web sitesi üzerinden verilen tüm siparişler ve sözleşmeler için geçerlidir. Siparişinizle bu şartları kabul etmiş sayılırsınız.",
  },
  {
    title: "2. Hizmetler",
    body: "Canlı TV kanallarına, film ve dizilere erişim sağlayan bir Xtream IPTV yayın erişimi sunuyoruz. Kapsam seçtiğiniz pakete göre değişir. Kullanım için kararlı bir internet bağlantısı ve uyumlu bir cihaz gereklidir.",
  },
  {
    title: "3. Fiyatlar & Ödeme",
    body: "Sipariş anında belirtilen fiyatlar geçerlidir. Ödeme ve sipariş işlemi, sipariş sürecinde sunulan kanallar üzerinden gerçekleştirilir.",
  },
  {
    title: "4. Teslimat & Aktivasyon",
    body: "Başarılı ödeme sonrası Xtream Codes bilgilerinizi genellikle birkaç dakika içinde alırsınız. Teslimat dijital olarak (ör. WhatsApp) yapılır.",
  },
  {
    title: "5. Süre",
    body: "Süre, seçtiğiniz pakete göre belirlenir. Süre bitiminde erişim, yeniden ödeme ile uzatılabilir. Otomatik yenileme yoktur.",
  },
  {
    title: "6. Kullanım",
    body: "Erişim yalnızca özel kullanım içindir. Giriş bilgilerinin üçüncü kişilerle paylaşılması veya ticari kullanımı yasaktır.",
  },
  {
    title: "7. Erişilebilirlik",
    body: "Mümkün olan en yüksek erişilebilirliği hedefliyoruz (%99,9). Ancak bakım veya teknik arızalar nedeniyle kısa süreli kesintiler tamamen dışlanamaz.",
  },
  {
    title: "8. Sorumluluk",
    body: "Kontrolümüz dışındaki kesintilerden, özellikle müşterinin internet bağlantısı veya üçüncü taraf cihazlarındaki sorunlardan sorumlu değiliz.",
  },
  {
    title: "9. Destek",
    body: "Türkçe destek ekibimiz, kurulum ve kullanımda yardımcı olmak için WhatsApp üzerinden 7/24 hizmetinizdedir.",
  },
  {
    title: "10. İletişim",
    body: "Bu şartlarla ilgili sorularınız için WhatsApp destek hattımızdan bize ulaşabilirsiniz.",
  },
];

export default function AgbPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Kullanım Şartları", path: "/agb" }]} />
      <PageHero eyebrow="// YASAL" title="Kullanım Şartları" />

      <section className="section pt-8">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-8 text-silver">
            <p className="text-sm text-silver-500">Son güncelleme: Temmuz 2026</p>
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl font-semibold text-white">{s.title}</h2>
                <p className="mt-2 leading-relaxed">{s.body}</p>
              </div>
            ))}
            <p className="text-sm text-silver-500">
              Not: Bu şartlar genel bir şablondur ve bireysel hukuki danışmanlığın yerine geçmez.
              Lütfen kendi koşullarınıza göre uyarlayın.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
