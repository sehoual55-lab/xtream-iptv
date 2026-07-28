"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play, Radio, ShieldCheck, Zap, ArrowRight, Activity, Signal, Tv, Smartphone, Laptop, MonitorPlay,
} from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/config/site.config";
import type { MediaItem } from "@/lib/tmdb";

const deviceNodes = [
  { icon: Tv, label: "Smart TV", pos: "left-0 top-2" },
  { icon: MonitorPlay, label: "Fire TV", pos: "right-0 top-2" },
  { icon: Smartphone, label: "Telefon", pos: "left-0 bottom-2" },
  { icon: Laptop, label: "Laptop", pos: "right-0 bottom-2" },
];

export function Hero({ posters }: { posters: MediaItem[] }) {
  const strip = posters.slice(0, 8);

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-bg-animated opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/3 h-[440px] w-[620px] -translate-x-1/2 rounded-full bg-orange/15 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-16 h-[400px] w-[400px] rounded-full bg-ice/15 blur-[130px]" />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="eyebrow">
                <span className="status-dot" /> // YAYIN KONTROL MERKEZİ
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-white text-balance sm:text-5xl md:text-6xl"
            >
              Xtream IPTV{" "}
              <span className="text-gold-gradient">Komuta Merkezi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-silver sm:text-xl"
            >
              130.000+ canlı kanal ve 140.000+ film & dizi, gerçek 4K kalitede.
              Xtream Codes girişi, anında aktivasyon ve tüm cihazlarda Xtream IPTV Player desteği —
              binlerce yayını yöneten yüksek teknolojili platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/preise" className="btn-premium text-base">
                Sisteme Bağlan <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost text-base">
                <Play className="h-4 w-4 fill-current" /> WhatsApp Destek
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-silver-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-orange" /> ANINDA AKTİVASYON
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald" /> GÜVENLİ & YASAL
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Signal className="h-4 w-4 text-ice" /> %99,9 UPTIME
              </span>
            </motion.div>
          </div>

          {/* Command console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="hud glow-border overflow-hidden rounded-4xl p-5 shadow-card">
              {/* header */}
              <div className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-ice">
                  <Radio className="h-4 w-4" /> XTREAM_CONSOLE v4.0
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald">
                  <span className="status-dot" /> ÇEVRİMİÇİ
                </div>
              </div>

              {/* live stat tiles */}
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { icon: Activity, label: "AKTİF YAYIN", value: "48.219", color: "text-orange" },
                  { icon: Signal, label: "SİNYAL", value: "%99,9", color: "text-ice" },
                  { icon: MonitorPlay, label: "KALİTE", value: "4K UHD", color: "text-emerald" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-white/[0.06] bg-charcoal-900/60 p-3">
                    <s.icon className={`h-4 w-4 ${s.color}`} />
                    <div className="mt-2 font-display text-lg font-bold text-white">{s.value}</div>
                    <div className="font-mono text-[10px] tracking-wider text-silver-500">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* device signal network */}
              <div className="relative mx-auto my-5 h-36">
                {/* center node */}
                <div className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gold-gradient text-charcoal-950 shadow-glow">
                  <Radio className="h-7 w-7" />
                  <span className="absolute inset-0 animate-ping2 rounded-2xl bg-orange/30" />
                </div>
                {/* connecting lines */}
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  <line x1="12%" y1="20%" x2="50%" y2="50%" stroke="rgba(79,195,247,0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="88%" y1="20%" x2="50%" y2="50%" stroke="rgba(255,122,0,0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="12%" y1="80%" x2="50%" y2="50%" stroke="rgba(255,122,0,0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="88%" y1="80%" x2="50%" y2="50%" stroke="rgba(79,195,247,0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
                {/* device nodes */}
                {deviceNodes.map((d, i) => (
                  <motion.div
                    key={d.label}
                    animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute ${d.pos} flex flex-col items-center gap-1`}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-ice/20 bg-charcoal-800/80 text-ice">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[9px] text-silver-500">{d.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* film scroll */}
              <div className="mb-1 flex items-center gap-2 font-mono text-[10px] text-ice">
                <span className="status-dot" /> // CANLI FİLM AKIŞI
              </div>
              <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-charcoal-800 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-charcoal-800 to-transparent" />
                <div className="flex w-max animate-marquee gap-2">
                  {[...strip, ...strip].map((p, i) => (
                    <div key={i} className="relative aspect-[2/3] w-[52px] shrink-0 overflow-hidden rounded-lg">
                      <Image src={p.poster} alt="Xtream IPTV film & dizi" fill sizes="52px" className="object-cover" priority={i < 4} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* floating chip */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="hud absolute -left-4 bottom-16 hidden items-center gap-2 rounded-2xl px-4 py-2.5 sm:flex"
            >
              <ShieldCheck className="h-5 w-5 text-emerald" />
              <div className="text-left">
                <p className="text-xs font-semibold text-white">Güvenlik Kalkanı</p>
                <p className="font-mono text-[10px] text-silver-500">AKTİF · ŞİFRELİ</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
