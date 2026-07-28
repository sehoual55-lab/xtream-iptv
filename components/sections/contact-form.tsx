"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { buildWhatsAppLink } from "@/config/site.config";

export function ContactForm() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("Genel Soru");
  const [message, setMessage] = useState("");

  const composed = `Merhaba, adım ${name || "[Ad]"}.\nKonu: ${topic}\n\n${message}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(buildWhatsAppLink(composed), "_blank", "noopener,noreferrer");
      }}
      className="hud rounded-3xl p-7 md:p-8"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-silver">
            Ad
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Adınız"
            className="w-full rounded-xl border border-white/10 bg-charcoal-900/60 px-4 py-3 text-white placeholder:text-silver-500 focus:border-orange/50 focus:outline-none focus:ring-1 focus:ring-orange/30"
          />
        </div>

        <div>
          <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-silver">
            Konu
          </label>
          <select
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-charcoal-900/60 px-4 py-3 text-white focus:border-orange/50 focus:outline-none focus:ring-1 focus:ring-orange/30"
          >
            <option>Genel Soru</option>
            <option>Xtream IPTV / Sipariş</option>
            <option>Kurulum Yardımı</option>
            <option>Teknik Sorun</option>
            <option>Uzatma / Yükseltme</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-silver">
            Mesaj
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Size nasıl yardımcı olabiliriz?"
            className="w-full resize-none rounded-xl border border-white/10 bg-charcoal-900/60 px-4 py-3 text-white placeholder:text-silver-500 focus:border-orange/50 focus:outline-none focus:ring-1 focus:ring-orange/30"
          />
        </div>

        <button type="submit" className="btn-emerald w-full">
          <Send className="h-4 w-4" /> WhatsApp ile gönder
        </button>
        <p className="text-center text-xs text-silver-500">
          Gönderdiğinizde, mesajınız önceden doldurulmuş şekilde WhatsApp açılır.
        </p>
      </div>
    </form>
  );
}
