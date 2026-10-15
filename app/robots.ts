import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export const dynamic = "force-static";

/** AI arama / alıntı botları — açıkça izin verilir (GEO). */
const AI_BOTS = [
  "Googlebot",
  "Applebot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Bingbot",
  "DuckAssistBot",
  "YouBot",
  "Amazonbot",
  "Google-Extended",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/api/"] })),
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
