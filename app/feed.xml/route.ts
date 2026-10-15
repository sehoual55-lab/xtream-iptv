import { siteConfig } from "@/config/site.config";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** /feed.xml — blog yazıları için RSS 2.0 akışı. */
export function GET() {
  const base = siteConfig.url;
  const items = [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${base}/blog/${p.slug}</link>
      <guid isPermaLink="true">${base}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.description)}</description>
      <enclosure url="${p.cover.startsWith("http") ? p.cover : base + p.cover}" type="image/jpeg" length="0" />
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(siteConfig.brand.name)} Blog</title>
    <link>${base}/blog</link>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${esc(siteConfig.seo.defaultDescription)}</description>
    <language>${siteConfig.locale.language}</language>
    <lastBuildDate>${new Date(siteConfig.dates.updated).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
