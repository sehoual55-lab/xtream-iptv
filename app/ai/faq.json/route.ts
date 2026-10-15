import { siteConfig } from "@/config/site.config";
import { faqs } from "@/data/faqs";

export const dynamic = "force-static";

/** /ai/faq.json — yapılandırılmış SSS (AI arama görünürlüğü için). */
export function GET() {
  return Response.json(
    {
      site: siteConfig.url,
      language: siteConfig.locale.language,
      lastModified: siteConfig.dates.updated,
      faqs: faqs.map((f) => ({ question: f.question, answer: f.answer })),
    },
    { headers: { "Cache-Control": "public, max-age=3600" } }
  );
}
