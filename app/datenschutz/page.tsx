import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Gizlilik Politikası",
  description:
    "Xtream IPTV Gizlilik Politikası. Verilerinizi nasıl işlediğimizi ve haklarınızı öğrenin.",
  path: "/datenschutz",
});

const sections = [
  {
    t: "1. Veri Sorumlusu",
    b: `Bu web sitesindeki veri işlemeden ${siteConfig.domain} işletmecisi sorumludur. Gizlilikle ilgili sorularınız için WhatsApp destek hattımızdan bize ulaşabilirsiniz.`,
  },
  {
    t: "2. Verilerin Toplanması",
    b: "Kişisel verilerinizi yalnızca WhatsApp üzerinden iletişim gibi durumlarda gönüllü olarak paylaştığınızda toplarız. Siteyi ziyaret ettiğinizde, sayfanın sunulmasını sağlamak için teknik olarak gerekli veriler (ör. IP adresi, tarayıcı türü) işlenir.",
  },
  {
    t: "3. İşleme Amacı",
    b: "Verilerinizi yalnızca talebinizi yanıtlamak, siparişinizi işlemek ve destek sağlamak için kullanırız. Sözleşmenin ifası için gerekli olmadıkça veya yasal olarak zorunlu olmadıkça verileriniz üçüncü taraflarla paylaşılmaz.",
  },
  {
    t: "4. WhatsApp İletişimi",
    b: "Bizimle WhatsApp üzerinden iletişime geçtiğinizde ayrıca WhatsApp'ın gizlilik koşulları geçerlidir. Gönderdiğiniz mesajları ve telefon numaranızı iletişim ve sipariş işlemleri için işleriz.",
  },
  {
    t: "5. Çerezler & Analiz",
    b: "Bu web sitesi teknik olarak gerekli çerezleri kullanır. Analiz veya pazarlama araçları kullanılırsa bu yalnızca istediğiniz zaman geri alabileceğiniz onayınızla gerçekleşir.",
  },
  {
    t: "6. Haklarınız",
    b: "Verilerinize erişim, düzeltme, silme ve işlemenin kısıtlanması ile veri taşınabilirliği ve itiraz hakkına sahipsiniz. Haklarınızı kullanmak için WhatsApp destek hattımızdan bize ulaşın.",
  },
  {
    t: "7. Saklama Süresi",
    b: "Kişisel verileri yalnızca belirtilen amaçlar veya yasal saklama süreleri için gerekli olduğu sürece saklarız.",
  },
];

export default function DatenschutzPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Gizlilik Politikası", path: "/datenschutz" }]} />
      <PageHero eyebrow="// YASAL" title="Gizlilik Politikası" />

      <section className="section pt-8">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-8 text-silver">
            <p className="text-sm text-silver-500">Son güncelleme: Temmuz 2026</p>
            {sections.map((s) => (
              <div key={s.t}>
                <h2 className="font-display text-xl font-semibold text-white">{s.t}</h2>
                <p className="mt-2 leading-relaxed">{s.b}</p>
              </div>
            ))}
            <p className="text-sm text-silver-500">
              Not: Bu gizlilik politikası genel bir şablondur ve bireysel hukuki danışmanlığın yerine
              geçmez. Lütfen kendi koşullarınıza göre uyarlayın.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
