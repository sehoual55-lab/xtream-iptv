"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { BrandLogo, type BrandKey } from "@/lib/brand-logos";

const devices: { key: BrandKey; label: string; note: string }[] = [
  { key: "samsung", label: "Samsung TV", note: "Tizen App" },
  { key: "lg", label: "LG Smart TV", note: "webOS App" },
  { key: "sony", label: "Sony TV", note: "Android TV" },
  { key: "amazon", label: "Fire TV Stick", note: "IPTV Smarters" },
  { key: "appletv", label: "Apple TV", note: "IPTV Smarters" },
  { key: "apple", label: "iPhone & iPad", note: "iOS App" },
  { key: "android", label: "Android", note: "TiviMate" },
  { key: "chromecast", label: "Google TV", note: "Chromecast" },
  { key: "roku", label: "Roku", note: "M3U Player" },
  { key: "xbox", label: "Xbox", note: "MyIPTV" },
  { key: "windows", label: "Windows & Mac", note: "VLC / Smarters" },
  { key: "linux", label: "Linux", note: "VLC / Kodi" },
];

export function SupportedDevices() {
  return (
    <section className="section relative">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[120px]" />
      <div className="container relative">
        <SectionHeading
          title={
            <>
              Her cihazda <span className="text-gold-gradient">yayında</span>
            </>
          }
          subtitle="Tek abonelik, tüm ekranlar. Xtream IPTV; Smart TV, yayın çubukları, konsollar, telefonlar ve bilgisayarlarda çalışır."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {devices.map((d, i) => (
            <motion.div
              key={d.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass group relative flex flex-col items-center gap-3 overflow-hidden rounded-3xl p-6 text-center transition-shadow duration-300 hover:shadow-card-hover"
            >
              <span className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-32 w-32 rounded-full bg-cyan/0 blur-2xl transition-all duration-500 group-hover:bg-cyan/20" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-charcoal-900/60 ring-1 ring-white/[0.06] transition-colors group-hover:ring-cyan/30">
                <BrandLogo brand={d.key} className="h-8 w-8 text-silver transition-colors group-hover:text-cyan" />
              </span>
              <div className="relative">
                <p className="font-semibold text-white">{d.label}</p>
                <p className="text-xs text-silver-500">{d.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
