"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ShieldCheck, Zap, ArrowRight, Signal } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/config/site.config";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-bg-animated opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[460px] w-[720px] -translate-x-1/2 rounded-full bg-orange/15 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 top-24 h-[360px] w-[360px] rounded-full bg-ice/12 blur-[130px]" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-white text-balance sm:text-6xl md:text-7xl"
          >
            Xtream IPTV{" "}
            <span className="text-gold-gradient">Komuta Merkezi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-silver sm:text-xl"
          >
            130.000+ canlı kanal ve 140.000+ film &amp; dizi, gerçek 4K kalitede.
            Xtream Codes girişi, anında aktivasyon ve tüm cihazlarda Xtream IPTV Player desteği —
            binlerce yayını yöneten yüksek teknolojili platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/preise" className="btn-premium w-full text-base sm:w-auto">
              Sisteme Bağlan <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full text-base sm:w-auto"
            >
              <Play className="h-4 w-4 fill-current" /> WhatsApp Destek
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-silver-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-orange" /> ANINDA AKTİVASYON
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald" /> GÜVENLİ &amp; YASAL
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Signal className="h-4 w-4 text-ice" /> %99,9 UPTIME
            </span>
          </motion.div>
        </div>

        {/* Merkezi istatistik çubuğu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="hud mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-4xl md:grid-cols-4"
        >
          {siteConfig.heroStats.map((s) => (
            <div key={s.label} className="bg-charcoal-800/30 px-6 py-7 text-center">
              <div className="font-display text-2xl font-bold text-white md:text-3xl">{s.value}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-silver-500 md:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
