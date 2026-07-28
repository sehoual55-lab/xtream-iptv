"use client";

import { motion } from "framer-motion";
import { Tv, HardDrive, Check, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { BrandLogo, type BrandKey } from "@/lib/brand-logos";

type Guide = {
  title: string;
  app: string;
  logo?: BrandKey;
  icon?: LucideIcon;
  steps: string[];
};

const guides: Guide[] = [
  {
    title: "Smart TV",
    app: "Smart IPTV / IBO Player",
    icon: Tv,
    steps: ["TV mağazasından uygulamayı kurun", "m3u bağlantısını veya Xtream Codes girin", "Kanal listesi & EPG yükleyin"],
  },
  {
    title: "Fire TV Stick",
    app: "IPTV Smarters / TiviMate",
    logo: "amazon",
    steps: ["Downloader'ı kurun", "IPTV Smarters'ı yükleyin", "Xtream Codes ile giriş yapın"],
  },
  {
    title: "Android TV",
    app: "TiviMate",
    logo: "android",
    steps: ["Play Store'dan TiviMate indirin", "m3u bağlantısı ile liste ekleyin", "EPG'yi açın & yayına başlayın"],
  },
  {
    title: "MAG Box",
    app: "Portal / Stalker",
    icon: HardDrive,
    steps: ["Menüde Portal URL girin", "MAC adresini iletin", "Yeniden başlatın & izleyin"],
  },
  {
    title: "Apple TV",
    app: "IPTV Smarters Pro",
    logo: "appletv",
    steps: ["App Store'dan IPTV Smarters indirin", "Xtream Codes API ile giriş yapın", "4K'da yayın izleyin"],
  },
  {
    title: "Windows",
    app: "VLC / IPTV Smarters",
    logo: "windows",
    steps: ["IPTV Smarters veya VLC kurun", "m3u bağlantısını açın", "Kanalları & VOD'u izleyin"],
  },
  {
    title: "macOS",
    app: "IPTV Smarters / VLC",
    logo: "apple",
    steps: ["Uygulamayı kurun", "Xtream Codes veya m3u girin", "Mac'te yayın izleyin"],
  },
  {
    title: "iPhone & iPad",
    app: "IPTV Smarters Pro",
    logo: "apple",
    steps: ["App Store'dan uygulamayı indirin", "Xtream Codes API ile giriş yapın", "Her yerde izleyin"],
  },
  {
    title: "Android",
    app: "IPTV Smarters / TiviMate",
    logo: "android",
    steps: ["Play Store'dan uygulamayı indirin", "m3u listesi ekleyin", "Hemen başlayın"],
  },
];

export function InstallationGuides() {
  return (
    <section className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="// KURULUM MERKEZİ"
          title={
            <>
              Her cihaz için <span className="text-gold-gradient">kurulum</span>
            </>
          }
          subtitle="Yasal ve crack olmadan: cihazınızı seçin ve kısa adımları izleyin. Birkaç dakikada yayına hazırsınız."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="glass group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-charcoal-900/60 ring-1 ring-white/[0.06]">
                  {g.logo ? (
                    <BrandLogo brand={g.logo} className="h-6 w-6 text-cyan" />
                  ) : g.icon ? (
                    <g.icon className="h-6 w-6 text-cyan" />
                  ) : null}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{g.title}</h3>
                  <p className="text-xs text-silver-500">App: {g.app}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5">
                {g.steps.map((s, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-silver">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/installation" className="btn-ghost">
            Ausführliche Anleitungen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
