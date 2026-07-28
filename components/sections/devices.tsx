"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { BrandLogo, type BrandKey } from "@/lib/brand-logos";
import { cn } from "@/lib/utils";

const brands: { key: BrandKey; label: string }[] = [
  { key: "samsung", label: "Samsung" },
  { key: "lg", label: "LG" },
  { key: "sony", label: "Sony" },
  { key: "amazon", label: "Fire TV" },
  { key: "android", label: "Android" },
  { key: "apple", label: "iPhone / iPad" },
  { key: "appletv", label: "Apple TV" },
  { key: "chromecast", label: "Chromecast" },
  { key: "roku", label: "Roku" },
  { key: "xbox", label: "Xbox" },
  { key: "windows", label: "Windows / Mac" },
  { key: "linux", label: "Linux" },
];

type Setup = { key: BrandKey; title: string; app: string; steps: string[] };

const setups: Setup[] = [
  {
    key: "amazon",
    title: "Amazon Fire TV Stick",
    app: "IPTV Smarters Pro / TiviMate",
    steps: [
      "Im Fire TV nach der App „Downloader“ suchen und installieren",
      "„IPTV Smarters Pro“ oder „TiviMate“ über den Downloader laden",
      "App öffnen und „Login mit Xtream Codes API“ wählen",
      "Zugangsdaten aus deiner Bestell-Nachricht eingeben – fertig",
    ],
  },
  {
    key: "android",
    title: "Android TV, Box & Smartphone",
    app: "TiviMate / IPTV Smarters",
    steps: [
      "TiviMate oder IPTV Smarters aus dem Google Play Store installieren",
      "Neue Playlist hinzufügen und den m3u-Link einfügen",
      "EPG-Quelle aktivieren für das TV-Programm",
      "Favoriten anlegen und in 4K streamen",
    ],
  },
  {
    key: "samsung",
    title: "Samsung Smart TV (Tizen)",
    app: "Smart IPTV / IBO Player",
    steps: [
      "App „Smart IPTV“ oder „IBO Player“ aus dem Samsung App Store installieren",
      "Die angezeigte MAC-Adresse notieren",
      "m3u-Link bzw. Xtream-Codes im Player hinterlegen",
      "Senderliste und EPG synchronisieren – loslegen",
    ],
  },
  {
    key: "lg",
    title: "LG Smart TV (webOS)",
    app: "Smart IPTV / IBO Player",
    steps: [
      "„Smart IPTV“ oder „IBO Player“ aus dem LG Content Store installieren",
      "MAC-Adresse des Geräts notieren, falls verlangt",
      "Zugangsdaten oder m3u-Link eintragen",
      "Kanäle laden und mit dem Streaming starten",
    ],
  },
  {
    key: "apple",
    title: "iPhone, iPad & Apple TV",
    app: "IPTV Smarters Pro",
    steps: [
      "IPTV Smarters Pro aus dem App Store laden",
      "„Login with Xtream Codes API“ auswählen",
      "Benutzername, Passwort und Server-URL eingeben",
      "Auf iPhone, iPad oder Apple TV überall streamen",
    ],
  },
  {
    key: "windows",
    title: "Windows PC & Mac",
    app: "VLC / IPTV Smarters",
    steps: [
      "IPTV Smarters für Windows/Mac oder den VLC Player installieren",
      "In IPTV Smarters die Xtream-Codes eingeben",
      "Alternativ in VLC „Medien → Netzwerkstream öffnen“ und m3u-Link einfügen",
      "Kanäle & VOD direkt am Computer genießen",
    ],
  },
  {
    key: "sony",
    title: "Sony Android TV",
    app: "TiviMate",
    steps: [
      "TiviMate aus dem Google Play Store deines Sony TV installieren",
      "Neue Playlist mit dem m3u-Link hinzufügen",
      "EPG für das TV-Programm aktivieren",
      "Fertig – volle 4K-Wiedergabe auf dem Sony TV",
    ],
  },
  {
    key: "chromecast",
    title: "Chromecast mit Google TV",
    app: "TiviMate / IPTV Smarters",
    steps: [
      "TiviMate oder IPTV Smarters aus dem Play Store installieren",
      "Login mit Xtream Codes oder m3u-Link durchführen",
      "EPG-Quelle einrichten",
      "Streaming direkt über Chromecast starten",
    ],
  },
  {
    key: "roku",
    title: "Roku",
    app: "IPTV Smarters / M3U",
    steps: [
      "Im Roku-Store einen IPTV-Player (z. B. „IPTV Smarters“ bzw. M3U-Player) hinzufügen",
      "Den m3u-Link im Player eintragen",
      "Kanalliste laden lassen",
      "Lieblingssender auswählen und schauen",
    ],
  },
  {
    key: "xbox",
    title: "Xbox",
    app: "MyIPTV Player",
    steps: [
      "Im Microsoft Store der Xbox „MyIPTV Player“ installieren",
      "Neue Playlist über die m3u-URL hinzufügen",
      "Optional EPG-Link für das Programm ergänzen",
      "Kanäle über die Xbox streamen",
    ],
  },
];

export function Devices() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section relative">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-[640px] -translate-x-1/2 rounded-full bg-emerald/5 blur-[120px]" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Kompatible Geräte"
          title={
            <>
              Läuft auf <span className="text-gold-gradient">all deinen Geräten</span>
            </>
          }
          subtitle="Smart TV, Fire TV Stick, Smartphone, Konsole oder PC – unser IPTV funktioniert überall. Unten findest du die Einrichtung für jedes Gerät."
        />

        {/* Logo-Grid */}
        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {brands.map((b, i) => (
            <Reveal key={b.key} delay={(i % 6) * 0.04}>
              <div className="glass group flex h-24 flex-col items-center justify-center gap-2 rounded-2xl p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <BrandLogo
                  brand={b.key}
                  className="h-8 w-8 text-slate-400 transition-colors group-hover:text-gold"
                />
                <span className="text-center text-xs text-slate-500 transition-colors group-hover:text-slate-300">
                  {b.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Einrichtung pro Gerät */}
        <div className="mx-auto mt-14 max-w-3xl">
          <h3 className="mb-6 text-center font-display text-xl font-semibold text-white">
            So richtest du dein Gerät ein
          </h3>
          <div className="space-y-3">
            {setups.map((s, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={s.key}
                  className={cn(
                    "glass overflow-hidden rounded-2xl transition-colors",
                    isOpen && "glow-border"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 p-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.04]">
                      <BrandLogo brand={s.key} className="h-6 w-6 text-gold" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-medium text-white">{s.title}</span>
                      <span className="block text-xs text-slate-400">App: {s.app}</span>
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.04] text-gold transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ol className="space-y-2.5 px-4 pb-5 pl-[4.75rem]">
                          {s.steps.map((step, j) => (
                            <li key={j} className="flex gap-2.5 text-sm text-slate-300">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
