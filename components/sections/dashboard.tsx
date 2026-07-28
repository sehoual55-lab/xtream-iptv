"use client";

import { motion } from "framer-motion";
import {
  ServerCog, MonitorPlay, Database, Film, RefreshCw, Globe2, ShieldCheck, Zap, Headphones,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    icon: ServerCog,
    title: "%99,9 Kararlı Sunucular",
    text: "Anti-freeze altyapı ve yedekli sunucularla yoğun saatlerde bile kesintisiz yayın.",
  },
  {
    icon: MonitorPlay,
    title: "Gerçek 4K / FHD / HD",
    text: "Buffer olmadan, gerçek 4K kalitede kristal netliğinde görüntü deneyimi.",
  },
  {
    icon: Database,
    title: "130.000+ Canlı Kanal",
    text: "Spor, haber, çocuk, belgesel ve uluslararası kanallar tek uygulamada.",
  },
  {
    icon: Film,
    title: "140.000+ Film & Dizi",
    text: "Netflix, Prime Video, Disney+ içerikleriyle devasa ve güncel VOD kütüphanesi.",
  },
  {
    icon: Zap,
    title: "Anında Aktivasyon",
    text: "Sipariş sonrası Xtream Codes bilgileriniz dakikalar içinde teslim edilir.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli & Yasal",
    text: "Kurulum resmi Xtream player uygulamalarıyla yapılır – crack gerektirmez.",
  },
  {
    icon: RefreshCw,
    title: "Tüm Cihazlarda Senkron",
    text: "Smart TV, Fire TV, Apple TV, telefon ve bilgisayarda aynı hesapla yayın.",
  },
  {
    icon: Globe2,
    title: "50+ Ülke Kapsamı",
    text: "Dünya genelinde dağıtılmış sunucularla her yerde hızlı ve stabil erişim.",
  },
  {
    icon: Headphones,
    title: "7/24 Türkçe Destek",
    text: "Kurulumdan sorularınıza kadar ekibimiz WhatsApp üzerinden her zaman yanınızda.",
  },
];

export function Dashboard() {
  return (
    <section className="section relative">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-orange/5 blur-[120px]" />
      <div className="container relative">
        <SectionHeading
          title={
            <>
              Neden <span className="text-gold-gradient">Xtream IPTV?</span>
            </>
          }
          subtitle="Premium kalite, adil fiyat ve gerçekten çalışan bir hizmet. Xtream IPTV ile sizi bekleyenler."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="hud group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 text-orange transition-colors group-hover:bg-orange/20">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-500">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
