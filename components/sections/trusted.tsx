"use client";

import { motion } from "framer-motion";
import { Users, ServerCog, CalendarClock, Gauge } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site.config";

export function Trusted() {
  const stats = [
    { icon: Users, value: siteConfig.trust.customersCount, label: "Aktif Kullanıcı", sub: "Türkiye geneli" },
    { icon: ServerCog, value: siteConfig.trust.uptime, label: "Sunucu Çalışma Süresi", sub: "Anti-freeze altyapı" },
    { icon: CalendarClock, value: siteConfig.trust.yearsExperience, label: "Yıl Tecrübe", sub: "Kesintisiz hizmet" },
    { icon: Gauge, value: siteConfig.trust.satisfaction, label: "Memnuniyet Oranı", sub: "Doğrulanmış yorumlar" },
  ];

  return (
    <section className="section relative">
      <div className="container">
        <SectionHeading
          title={
            <>
              Gerçek zamanlı <span className="text-gold-gradient">performans göstergeleri</span>
            </>
          }
          subtitle="Türkiye'de binlerce kullanıcının güvendiği yüksek performanslı yayın altyapısı."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="hud relative overflow-hidden rounded-2xl p-6">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px animate-data-stream bg-gradient-to-r from-transparent via-ice/60 to-transparent" />
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <s.icon className="h-5 w-5" />
                </span>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl"
                >
                  {s.value}
                </motion.div>
                <div className="mt-1 font-medium text-white">{s.label}</div>
                <div className="font-mono text-[11px] tracking-wide text-silver-500">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
