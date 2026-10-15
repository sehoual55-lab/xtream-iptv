import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Zap, Headphones, Tv, ArrowRight, MessageCircle } from "lucide-react";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/sections/cta";
import { JsonLd } from "@/components/jsonld";
import { siteConfig, buildWhatsAppLink } from "@/config/site.config";

const TITLE = "Hakkımızda – Xtream IPTV Ekibi ve Hizmetimiz";
const DESCRIPTION =
  "Xtream IPTV kimdir, ne sunar ve nasıl çalışır? Ekibimiz, altyapımız, destek anlayışımız ve Türkiye'deki kullanıcılarımıza verdiğimiz sözler.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/hakkimizda" });

export default function AboutPage() {
  const values = [
    { icon: ShieldCheck, title: "Kararlı altyapı", text: `%99,9 çalışma süresi hedefiyle çalışan sunucular; yoğun maç saatlerinde bile akıcı yayın.` },
    { icon: Zap, title: "Anında teslimat", text: "Ödeme sonrası Xtream Codes bilgileriniz dakikalar içinde WhatsApp üzerinden iletilir." },
    { icon: Headphones, title: "7/24 Türkçe destek", text: "Kurulum, cihaz uyumu veya yayın sorunlarında gerçek bir ekip her saat yanınızda." },
    { icon: Tv, title: "Tüm cihazlar", text: "Smart TV, Android, iPhone, Fire TV, MAG ve bilgisayar: aynı hesap, her ekran." },
  ];

  return (
    <>
      <JsonLd data={webPageJsonLd({ title: TITLE, description: DESCRIPTION, path: "/hakkimizda" })} />
      <Breadcrumbs items={[{ name: "Hakkımızda", path: "/hakkimizda" }]} />

      <PageHero
        eyebrow="// HAKKIMIZDA"
        title={
          <>
            Biz <span className="text-gold-gradient">kimiz</span>?
          </>
        }
        description="Xtream IPTV, Türkiye'deki kullanıcılar için premium IPTV aboneliği sunan bir yayın hizmetidir. Amacımız basit: kesintisiz yayın, dürüst fiyat ve her an ulaşabileceğiniz bir destek ekibi."
      />

      <section id="about" className="section pt-4">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-slate-300">
            <Reveal>
              <p>
                <strong className="text-white">{siteConfig.brand.name}</strong> ({siteConfig.brand.legalName}), Xtream Codes
                altyapısıyla çalışan bir IPTV abonelik hizmetidir. {siteConfig.trust.yearsExperience} yılı aşkın sektör
                deneyimine sahip ekibimiz; sunucu kararlılığı, içerik kalitesi ve müşteri desteğini tek bir hizmette
                birleştirmek için çalışır.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Aboneliğinizde 25.000'den fazla TV kanalı, 100.000'den fazla film ve dizi, 4K / FHD / HD görüntü
                kalitesi ve TV rehberi (EPG) bulunur. Giriş bilgileriniz yalnızca size aittir ve seçtiğiniz paket süresi
                boyunca değişmez. Paketlerimizi{" "}
                <Link href="/preise" className="font-medium text-gold underline underline-offset-4">
                  fiyatlar sayfasında
                </Link>
                , kurulum adımlarını ise{" "}
                <Link href="/installation" className="font-medium text-gold underline underline-offset-4">
                  kurulum rehberinde
                </Link>{" "}
                bulabilirsiniz.
              </p>
            </Reveal>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.05 * i}>
                <div className="glass flex h-full gap-4 rounded-3xl p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-semibold text-white">{v.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{v.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="hud mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-4xl md:grid-cols-4">
              {[
                { value: siteConfig.trust.customersCount, label: siteConfig.trust.customersLabel },
                { value: siteConfig.trust.uptime, label: "Sunucu çalışma süresi" },
                { value: `${siteConfig.trust.rating} / 5`, label: `${siteConfig.trust.reviewCount.toLocaleString("tr-TR")} değerlendirme` },
                { value: "7/24", label: "Türkçe destek" },
              ].map((s) => (
                <div key={s.label} className="bg-charcoal-800/30 px-6 py-7 text-center">
                  <div className="font-display text-2xl font-bold text-white md:text-3xl">{s.value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-silver-500 md:text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl space-y-5 text-slate-300">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-white">Sözümüz</h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Gizli ücret yok: ödediğiniz fiyat, paketin tüm süresi için geçerlidir.",
                  "Her hesap tek kullanıcılıdır; bilgileriniz üçüncü kişilerle paylaşılmaz.",
                  "Sorun yaşarsanız dakikalar içinde gerçek bir kişi yanıt verir; otomatik mesaj yok.",
                  "Yalnızca resmî uygulama mağazalarındaki oynatıcıları öneririz; güvensiz APK'lar yoktur.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="pt-4 font-display text-2xl font-bold text-white">İletişim</h2>
              <p className="mt-3">
                E-posta: <a href={`mailto:${siteConfig.contact.email}`} className="text-gold underline underline-offset-4">{siteConfig.contact.email}</a>
                <br />
                WhatsApp: {siteConfig.contact.phone} (7/24)
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-emerald">
                  <MessageCircle className="h-4 w-4" /> WhatsApp'tan yazın
                </a>
                <Link href="/kontakt" className="btn-ghost">
                  İletişim sayfası <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
