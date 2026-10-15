import { siteConfig } from "@/config/site.config";

export const dynamic = "force-static";

/** /ai/summary.json — AI motorları için kısa site özeti. */
export function GET() {
  const data = {
    name: siteConfig.brand.name,
    legalName: siteConfig.brand.legalName,
    url: siteConfig.url,
    description: siteConfig.seo.defaultDescription,
    language: siteConfig.locale.language,
    country: siteConfig.locale.country,
    category: "IPTV subscription service",
    topics: [...siteConfig.seo.keywords],
    contact: { whatsapp: `https://wa.me/${siteConfig.contact.whatsapp}`, email: siteConfig.contact.email, phone: siteConfig.contact.phone },
    resources: {
      llms: `${siteConfig.url}/llms.txt`,
      faq: `${siteConfig.url}/ai/faq.json`,
      service: `${siteConfig.url}/ai/service.json`,
      sitemap: `${siteConfig.url}/sitemap.xml`,
      rss: `${siteConfig.url}/feed.xml`,
    },
    datePublished: siteConfig.dates.published,
    lastModified: siteConfig.dates.updated,
  };
  return Response.json(data, { headers: { "Cache-Control": "public, max-age=3600" } });
}
