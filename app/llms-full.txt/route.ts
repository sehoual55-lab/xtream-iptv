import { siteConfig } from "@/config/site.config";
import { blogPosts } from "@/data/blog";
import { plans } from "@/config/pricing.config";
import { faqs } from "@/data/faqs";

export const dynamic = "force-static";

/** /llms-full.txt — AI motorları için tüm içerik tek Markdown dosyasında. */
export function GET() {
  const base = siteConfig.url;
  const planLines = plans.map(
    (p) =>
      `- **${p.name}**: ${p.duration}${p.bonus ? ` ${p.bonus}` : ""}, $${p.price.toFixed(2)}, ${p.connections} bağlantı, ${p.channels} kanal, ${p.movies} film & dizi`
  );
  const faqLines = faqs.map((f) => `### ${f.question}\n\n${f.answer}`);
  const posts = blogPosts.map((p) => {
    const faq = p.faqs?.length ? `\n\n#### Sık sorulan sorular\n\n${p.faqs.map((f) => `**${f.question}**\n\n${f.answer}`).join("\n\n")}` : "";
    return `## ${p.title}\n\nURL: ${base}/blog/${p.slug}\nTarih: ${p.date} · Yazar: ${p.author} · Kategori: ${p.category}\n\n${p.description}\n\n${p.content.trim()}${faq}`;
  });

  const text = `# ${siteConfig.brand.name} — tam içerik

> ${siteConfig.seo.defaultDescription}

Site: ${base} · Dil: Türkçe · Para birimi: USD · Son güncelleme: ${siteConfig.dates.updated}
Destek: WhatsApp ${siteConfig.contact.phone} · ${siteConfig.contact.email}

## Paketler ve fiyatlar

${planLines.join("\n")}

Tüm paketlerde: 4K / FHD / HD kalite, TV rehberi (EPG), tüm cihaz desteği, anında teslimat, 7/24 Türkçe destek.

## Sıkça sorulan sorular

${faqLines.join("\n\n")}

# Blog ve rehberler

${posts.join("\n\n---\n\n")}
`;
  return new Response(text, { headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
