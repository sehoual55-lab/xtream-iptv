import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date("2026-07-27");

  const staticRoutes: { path: string; priority: number; freq: "weekly" | "monthly" | "daily" }[] = [
    { path: "/", priority: 1.0, freq: "daily" },
    { path: "/xtream-iptv", priority: 0.95, freq: "weekly" },
    { path: "/preise", priority: 0.9, freq: "weekly" },
    { path: "/xtream-iptv-player", priority: 0.85, freq: "weekly" },
    { path: "/xtream-iptv-apk", priority: 0.85, freq: "weekly" },
    { path: "/xtream-codes", priority: 0.85, freq: "weekly" },
    { path: "/xtream-iptv-kodlari", priority: 0.8, freq: "weekly" },
    { path: "/installation", priority: 0.7, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/faq", priority: 0.7, freq: "monthly" },
    { path: "/kontakt", priority: 0.6, freq: "monthly" },
    { path: "/datenschutz", priority: 0.3, freq: "monthly" },
    { path: "/agb", priority: 0.3, freq: "monthly" },
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
