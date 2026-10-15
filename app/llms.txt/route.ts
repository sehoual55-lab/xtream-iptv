import { siteConfig } from "@/config/site.config";
import { blogPosts } from "@/data/blog";
import { plans } from "@/config/pricing.config";

export const dynamic = "force-static";

/** /llms.txt — AI arama motorları için site özeti (llmstxt.org biçimi). */
export function GET() {
  const base = siteConfig.url;
  const pages = [
    ["Xtream IPTV nedir", "/xtream-iptv", "Hizmetin tanıtımı, özellikler ve nasıl çalıştığı"],
    ["Fiyatlar ve paketler", "/preise", "Bronze, Gold, Platinum ve Exclusive paketleri; süre ve fiyatlar"],
    ["Xtream IPTV Player", "/xtream-iptv-player", "Cihaza göre önerilen oynatıcı uygulamaları"],
    ["Xtream IPTV APK", "/xtream-iptv-apk", "Android ve Fire TV kurulumu"],
    ["Xtream Codes girişi", "/xtream-codes", "Sunucu adresi, kullanıcı adı ve şifre ile giriş"],
    ["Xtream IPTV kodları", "/xtream-iptv-kodlari", "Güvenli ve kararlı giriş bilgileri hakkında"],
    ["Kurulum rehberi", "/installation", "Smart TV, Android, iOS, Fire TV ve bilgisayar için adımlar"],
    ["Sıkça sorulan sorular", "/faq", "Teslimat, cihazlar, süre ve destek hakkında yanıtlar"],
    ["Hakkımızda", "/hakkimizda", "Ekip, altyapı ve destek anlayışı"],
    ["İletişim", "/kontakt", "WhatsApp ve e-posta ile 7/24 Türkçe destek"],
  ];
  const planLines = plans.map(
    (p) => `- ${p.name}: ${p.duration}${p.bonus ? ` ${p.bonus}` : ""}, $${p.price.toFixed(2)}, ${p.connections} bağlantı, ${p.channels} kanal, ${p.movies} film & dizi`
  );
  const posts = blogPosts.map((p) => `- [${p.title}](${base}/blog/${p.slug}): ${p.description}`);

  const text = `# ${siteConfig.brand.name}

> ${siteConfig.seo.defaultDescription}

${siteConfig.brand.name} (${siteConfig.brand.legalName}), Türkiye'deki kullanıcılar için Xtream Codes altyapısıyla çalışan bir IPTV abonelik hizmetidir. Dil: Türkçe. Para birimi: USD. Destek: 7/24 WhatsApp (${siteConfig.contact.phone}) ve e-posta (${siteConfig.contact.email}). Son güncelleme: ${siteConfig.dates.updated}.

## Ana sayfalar

${pages.map(([t, p, d]) => `- [${t}](${base}${p}): ${d}`).join("\n")}

## Paketler ve fiyatlar

${planLines.join("\n")}
- Tüm paketlerde: 4K / FHD / HD kalite, TV rehberi (EPG), tüm cihaz desteği, anında teslimat, 7/24 Türkçe destek. Her ek eşzamanlı bağlantı %15 daha ucuzdur.

## Blog ve rehberler

${posts.join("\n")}

## Diğer kaynaklar

- [Site haritası](${base}/sitemap.xml)
- [RSS akışı](${base}/feed.xml)
- [AI özeti (JSON)](${base}/ai/summary.json)
- [SSS (JSON)](${base}/ai/faq.json)
- [Hizmet bilgisi (JSON)](${base}/ai/service.json)
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
