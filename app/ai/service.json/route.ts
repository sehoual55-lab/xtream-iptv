import { siteConfig, buildWhatsAppLink } from "@/config/site.config";
import { plans, connectionConfig } from "@/config/pricing.config";

export const dynamic = "force-static";

/** /ai/service.json — hizmetin ve paketlerin makine tarafından okunabilir açıklaması. */
export function GET() {
  const data = {
    name: siteConfig.brand.name,
    url: siteConfig.url,
    serviceType: "IPTV subscription (Xtream Codes API)",
    language: siteConfig.locale.language,
    country: siteConfig.locale.country,
    currency: siteConfig.locale.currency,
    capabilities: [
      "Live TV channels (25,000+)",
      "Video on demand: movies and series (100,000+)",
      "4K / FHD / HD quality",
      "Electronic program guide (EPG)",
      "Xtream Codes API login and M3U playlist",
      "All devices: Smart TV, Android, iOS, Fire TV, MAG, Windows, macOS",
      "Instant delivery after payment",
      "24/7 Turkish support via WhatsApp",
    ],
    plans: plans.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      currency: siteConfig.locale.currency,
      duration: p.duration,
      bonus: p.bonus ?? null,
      connections: p.connections,
      channels: p.channels,
      movies: p.movies,
      features: p.features,
      orderUrl: `${siteConfig.url}/preise`,
    })),
    additionalConnectionDiscount: connectionConfig.additionalDiscount,
    howToOrder: ["Choose a plan on /preise", "Send the order via WhatsApp", "Receive Xtream Codes login details within minutes", "Enter them in any Xtream Codes compatible player"],
    support: { whatsapp: buildWhatsAppLink(), email: siteConfig.contact.email, hours: "24/7", languages: ["tr"] },
    lastModified: siteConfig.dates.updated,
  };
  return Response.json(data, { headers: { "Cache-Control": "public, max-age=3600" } });
}
