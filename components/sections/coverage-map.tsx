"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";

// Yaklaşık nokta konumları (yüzde) — dünya kapsama noktaları
const points = [
  { x: 30, y: 38, label: "Avrupa" },
  { x: 52, y: 44, label: "Türkiye" },
  { x: 20, y: 46, label: "Amerika" },
  { x: 62, y: 40, label: "Orta Doğu" },
  { x: 74, y: 52, label: "Asya" },
  { x: 48, y: 66, label: "Afrika" },
  { x: 82, y: 70, label: "Okyanusya" },
];

export function CoverageMap() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="container relative">
        <SectionHeading
          eyebrow="// KÜRESEL AĞ KAPSAMI"
          title={
            <>
              50+ ülkede <span className="text-gold-gradient">canlı yayın kapsamı</span>
            </>
          }
          subtitle="Dünya genelinde dağıtılmış sunucular, nerede olursanız olun kesintisiz ve hızlı bir Xtream IPTV deneyimi sunar."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="hud relative aspect-[2/1] overflow-hidden rounded-4xl p-4">
            {/* radar sweep */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 animate-radar rounded-full" style={{
                background: "conic-gradient(from 0deg, rgba(79,195,247,0.18) 0deg, transparent 60deg)",
              }} />
            </div>
            {/* radar rings */}
            {[0.3, 0.55, 0.8].map((r, i) => (
              <div
                key={i}
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ice/15"
                style={{ width: `${r * 100}%`, height: `${r * 100}%` }}
              />
            ))}
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-ice/10" />
            <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-ice/10" />

            {/* coverage points */}
            {points.map((p, i) => (
              <div key={p.label} className="absolute" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                <span className="relative flex h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-orange"
                    animate={{ scale: [1, 2.6], opacity: [0.6, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
                  />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange shadow-glow" />
                </span>
                <span className="absolute left-2 top-1 whitespace-nowrap font-mono text-[9px] text-silver-400">
                  {p.label}
                </span>
              </div>
            ))}

            {/* HUD corner labels */}
            <div className="absolute left-4 top-3 font-mono text-[10px] text-ice">LAT 39.9 · LON 32.8</div>
            <div className="absolute bottom-3 right-4 font-mono text-[10px] text-emerald">● 7 BÖLGE AKTİF</div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[
              { v: "50+", l: "Ülke" },
              { v: "7", l: "Bölge Sunucusu" },
              { v: "%99,9", l: "Erişilebilirlik" },
            ].map((s) => (
              <div key={s.l} className="hud rounded-2xl p-4">
                <div className="font-display text-2xl font-bold text-white">{s.v}</div>
                <div className="font-mono text-[10px] tracking-wider text-silver-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
