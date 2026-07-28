"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus, Plus, Crown, Sparkles } from "lucide-react";
import { plans, calcPrice, calcFullPrice, formatPrice, connectionConfig, type Plan } from "@/config/pricing.config";
import { siteConfig, buildWhatsAppLink } from "@/config/site.config";
import { cn } from "@/lib/utils";

function ConnectionSelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-charcoal-900/60 p-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(connectionConfig.min, value - 1))}
        disabled={value <= connectionConfig.min}
        aria-label="Bağlantı azalt"
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] text-white transition hover:bg-white/10 disabled:opacity-30"
      >
        <Minus className="h-4 w-4" />
      </button>
      <div className="text-center">
        <span className="font-display text-lg font-bold text-white">{value}</span>
        <span className="ml-1.5 text-xs text-silver-500">
          {value === 1 ? "Bağlantı" : "Bağlantı"}
        </span>
      </div>
      <button
        type="button"
        onClick={() => onChange(Math.min(connectionConfig.max, value + 1))}
        disabled={value >= connectionConfig.max}
        aria-label="Bağlantı ekle"
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-gold transition hover:bg-gold/25 disabled:opacity-30"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const [connections, setConnections] = useState(plan.connections);
  const total = calcPrice(plan.price, connections);
  const fullPrice = calcFullPrice(plan.price, connections);
  const savings = Math.round((fullPrice - total) * 100) / 100;
  const hasDiscount = connections > 1 && savings > 0;
  const isPopular = plan.badge === "En Popüler";
  const isValue = plan.badge === "En İyi Değer";

  const orderMessage = `Merhaba! ${plan.name} paketini (${plan.duration}${
    plan.bonus ? " " + plan.bonus : ""
  }) ${connections} bağlantı ile ${formatPrice(
    total,
    siteConfig.locale.currencySymbol
  )} karşılığında almak istiyorum. Lütfen sonraki adımları iletin.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "relative flex flex-col rounded-3xl p-6 md:p-7",
        plan.badge && "pt-9 md:pt-10",
        plan.highlight
          ? "glass-strong glow-border shadow-glow"
          : "glass"
      )}
    >
      {plan.badge && (
        <div
          className={cn(
            "absolute -top-3.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide shadow-lg",
            isPopular && "bg-gold-gradient text-charcoal-950",
            isValue && "bg-emerald-gradient text-charcoal-950"
          )}
        >
          {isPopular && <Crown className="h-3.5 w-3.5" />}
          {isValue && <Sparkles className="h-3.5 w-3.5" />}
          {plan.badge}
        </div>
      )}

      <div className="mb-5">
        <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
        <p className="mt-1 text-sm text-slate-400">
          {plan.duration}
          {plan.bonus && (
            <span className="ml-1.5 font-medium text-emerald">{plan.bonus}</span>
          )}
        </p>
      </div>

      <div className="mb-1.5 flex items-end gap-1.5">
        <span className="font-display text-4xl font-extrabold leading-none text-white">
          {formatPrice(total, siteConfig.locale.currencySymbol)}
        </span>
        <span className="mb-0.5 whitespace-nowrap text-sm text-slate-400">
          / {plan.duration}
        </span>
      </div>

      <div className="mb-4 flex min-h-[1.5rem] flex-wrap items-center gap-2">
        {hasDiscount && (
          <>
            <span className="text-sm text-slate-500 line-through">
              {formatPrice(fullPrice, siteConfig.locale.currencySymbol)}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald/10 px-2.5 py-0.5 text-xs font-medium text-emerald">
              −%15 · {formatPrice(savings, siteConfig.locale.currencySymbol)} tasarruf
            </span>
          </>
        )}
      </div>

      <div className="mb-5">
        <ConnectionSelector value={connections} onChange={setConnections} />
        <p className="mt-2 text-center text-xs text-silver-500">
          İlk bağlantı normal fiyat · her ek bağlantı <span className="text-emerald">%15 daha ucuz</span>
        </p>
      </div>

      <ul className="mb-6 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                plan.highlight ? "text-gold" : "text-emerald"
              )}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={buildWhatsAppLink(orderMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-auto flex w-full items-center justify-center rounded-full px-6 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-0.5",
          plan.highlight
            ? "bg-gold-gradient text-charcoal-950 shadow-glow"
            : isValue
              ? "bg-emerald-gradient text-charcoal-950 shadow-glow-emerald"
              : "border border-white/10 bg-white/[0.04] text-white hover:bg-white/10"
        )}
      >
        Hemen Sipariş Ver
      </a>
    </motion.div>
  );
}

export function Pricing({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="preise" className="section relative">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />
      <div className="container relative">
        {showHeading && (
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl md:text-5xl">
              Paketini seç ve <span className="text-gold-gradient">sisteme bağlan</span>
            </h2>
            <p className="mt-5 text-lg text-silver-500">
              Şeffaf fiyatlar, gizli ücret yok. + / − seçici ile eşzamanlı bağlantı
              sayısını belirle – fiyat otomatik olarak güncellenir.
            </p>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-silver-500">
          Sipariş güvenli ve kolayca WhatsApp üzerinden tamamlanır. Ödeme sonrası
          Xtream Codes bilgileriniz anında teslim edilir.
        </p>
      </div>
    </section>
  );
}
