"use client";

import { motion } from "framer-motion";
import {
  Trophy, Clapperboard, MonitorPlay, Baby, Globe2, Newspaper, Sparkles, GraduationCap,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const categories = [
  { icon: Trophy, title: "Spor", desc: "Süper Lig, Şampiyonlar Ligi, Formula 1 & daha fazlası", count: "6.000+ kanal" },
  { icon: Clapperboard, title: "Filmler", desc: "Güncel gişe filmleri & klasikler 4K", count: "90.000+ başlık" },
  { icon: MonitorPlay, title: "Diziler", desc: "Tüm sezonlar, anında erişilebilir", count: "50.000+ bölüm" },
  { icon: Baby, title: "Çocuk", desc: "Küçükler için güvenli eğlence", count: "3.000+ kanal" },
  { icon: Globe2, title: "Uluslararası", desc: "50'den fazla ülkeden kanallar", count: "40.000+ kanal" },
  { icon: Newspaper, title: "Haber", desc: "7/24 güncel haberler", count: "2.500+ kanal" },
  { icon: Sparkles, title: "Eğlence", desc: "Programlar, müzik & yaşam", count: "12.000+ kanal" },
  { icon: GraduationCap, title: "Belgeseller", desc: "Bilim, doğa & tarih", count: "4.000+ kanal" },
];

export function Categories() {
  return (
    <section className="section relative">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[120px]" />
      <div className="container relative">
        <SectionHeading
          title={
            <>
              İzlemek istediğin her şey –{" "}
              <span className="text-gold-gradient">tek merkezde</span>
            </>
          }
          subtitle="Canlı spordan belgesellere: Xtream IPTV her kategoriyi tek ve şık bir uygulamada toplar."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition-shadow duration-300 hover:shadow-card-hover"
            >
              <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan/0 blur-2xl transition-all duration-500 group-hover:bg-cyan/20" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan transition-transform duration-300 group-hover:scale-110">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-semibold text-white">{c.title}</h3>
              <p className="relative mt-1.5 text-sm text-silver-500">{c.desc}</p>
              <p className="relative mt-3 text-xs font-medium text-cyan">{c.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
