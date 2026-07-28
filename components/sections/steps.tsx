"use client";

import { motion } from "framer-motion";
import { ListChecks, ShieldCheck, PlayCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    icon: ListChecks,
    title: "Paket wählen",
    text: "Wähle das passende Paket und lege mit dem + / − Regler die Anzahl deiner Verbindungen fest.",
  },
  {
    icon: ShieldCheck,
    title: "Sicher bezahlen",
    text: "Schließe deine Bestellung sicher über WhatsApp ab. Unser Team begleitet dich bei jedem Schritt.",
  },
  {
    icon: PlayCircle,
    title: "Loslegen & schauen",
    text: "Erhalte deine Zugangsdaten sofort, binde die m3u-Playlist ein und streame in 4K auf jedem Gerät.",
  },
];

export function Steps() {
  return (
    <section className="section relative">
      <div className="pointer-events-none absolute right-1/4 top-10 h-64 w-64 rounded-full bg-silver/5 blur-[120px]" />
      <div className="container relative">
        <SectionHeading
          eyebrow="So funktioniert's"
          title={
            <>
              In 3 Schritten zum <span className="text-gold-gradient">Premium-Streaming</span>
            </>
          }
          subtitle="Von der Auswahl bis zum ersten Stream vergehen oft nur wenige Minuten."
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient text-charcoal-950 shadow-glow">
                <s.icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal-800 text-xs font-bold text-cyan ring-1 ring-cyan/30">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-silver-500">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
