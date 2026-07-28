"use client";

import {
  Tv2, Film, Zap, ShieldCheck, Headphones, Smartphone, Trophy, ListVideo, BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    icon: Tv2,
    title: "130.000+ Kanäle",
    text: "Live-TV aus aller Welt: Sport, Nachrichten, Kinder-, Doku- und internationale Sender in einer App.",
  },
  {
    icon: Film,
    title: "140.000+ Filme & Serien",
    text: "Riesige VOD-Bibliothek mit Inhalten von Netflix, Prime Video, Disney+ und mehr – immer aktuell.",
  },
  {
    icon: ListVideo,
    title: "Deutsche IPTV Playlist",
    text: "Top gepflegte iptv playlist deutsch (m3u) mit vollständigem EPG – sofort einsatzbereit in jeder App.",
  },
  {
    icon: Zap,
    title: "Sofortige Lieferung",
    text: "Nach der Bestellung erhältst du deine Zugangsdaten und m3u Listen innerhalb weniger Minuten.",
  },
  {
    icon: ShieldCheck,
    title: "Legal & sicher",
    text: "Einrichtung über offizielle IPTV-Apps – ganz ohne Crack. IP TV ist legal, wir zeigen dir wie.",
  },
  {
    icon: BadgeCheck,
    title: "Echtes 4K / FHD / HD",
    text: "Gestochen scharfe Bildqualität ohne Buffering – dank Anti-Freeze-Technologie und starken Servern.",
  },
  {
    icon: Headphones,
    title: "24/7 deutscher Support",
    text: "Unser Team hilft dir rund um die Uhr per WhatsApp – bei Einrichtung, Fragen und mehr.",
  },
  {
    icon: Smartphone,
    title: "Alle Geräte kompatibel",
    text: "Smart TV, Fire TV Stick, Apple TV, MAG, Smartphone, Konsole und PC – überall einsatzbereit.",
  },
  {
    icon: Trophy,
    title: "Live-Sport in 4K",
    text: "Bundesliga, Champions League, Formel 1 und US-Sport – kein Spiel mehr verpassen.",
  },
];

export function Features() {
  return (
    <section className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="Warum Deutsch IPTV"
          title={
            <>
              Der <span className="text-gold-gradient">beste IPTV Anbieter</span> für Deutschland
            </>
          }
          subtitle="Premium-Qualität, faire Preise und ein Service, der begeistert. Das erwartet dich bei Deutsch IPTV."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="glass group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <motion.span
                whileHover={{ rotate: -8, scale: 1.08 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan/20"
              >
                <f.icon className="h-6 w-6" />
              </motion.span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-500">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
