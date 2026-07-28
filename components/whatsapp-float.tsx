"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppLink, siteConfig } from "@/config/site.config";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 1200);
    const t2 = setTimeout(() => setBubble(true), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {bubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass-strong relative max-w-[220px] rounded-2xl rounded-br-sm p-4 pr-8 text-sm text-slate-200"
          >
            <button
              onClick={() => setBubble(false)}
              className="absolute right-2 top-2 text-slate-400 hover:text-white"
              aria-label="Schließen"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="font-medium text-white">Xtream IPTV hakkında soru?</p>
            <p className="mt-1 text-silver-500">Bize yazın – hemen yanıtlıyoruz. 🇹🇷</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`WhatsApp Chat mit ${siteConfig.brand.name}`}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-gradient shadow-glow-emerald"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald/40" />
        <MessageCircle className="relative h-7 w-7 text-white" fill="currentColor" />
      </motion.a>
    </div>
  );
}
