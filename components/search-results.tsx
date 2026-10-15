"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { faqs } from "@/data/faqs";

const PAGES = [
  { title: "Xtream IPTV nedir?", href: "/xtream-iptv", text: "Hizmetin tanıtımı, özellikler ve nasıl çalıştığı" },
  { title: "Fiyatlar ve paketler", href: "/preise", text: "Bronze, Gold, Platinum ve Exclusive paketleri, süreler ve fiyatlar" },
  { title: "Player uygulamaları", href: "/xtream-iptv-player", text: "Cihaza göre önerilen oynatıcı uygulamaları" },
  { title: "Android APK kurulumu", href: "/xtream-iptv-apk", text: "Android ve Fire TV kurulumu adım adım" },
  { title: "Codes ile giriş", href: "/xtream-codes", text: "Sunucu adresi, kullanıcı adı ve şifre ile giriş" },
  { title: "Giriş kodları", href: "/xtream-iptv-kodlari", text: "Güvenli ve kararlı giriş bilgileri" },
  { title: "Kurulum rehberi", href: "/installation", text: "Smart TV, Android, iOS, Fire TV ve bilgisayar" },
  { title: "Sıkça sorulan sorular", href: "/faq", text: "Teslimat, cihazlar, süre ve destek" },
  { title: "Hakkımızda", href: "/hakkimizda", text: "Ekip, altyapı ve destek anlayışımız" },
  { title: "İletişim", href: "/kontakt", text: "WhatsApp ve e-posta ile 7/24 destek" },
];

function norm(s: string) {
  return s.toLocaleLowerCase("tr-TR").replace(/[ıi̇]/g, "i");
}

export function SearchResults() {
  const params = useSearchParams();
  const q = (params.get("q") ?? "").trim();
  const terms = norm(q).split(/\s+/).filter((t) => t.length > 1);
  const hit = (s: string) => terms.length > 0 && terms.every((t) => norm(s).includes(t));

  const posts = blogPosts.filter((p) => hit(p.title + " " + p.description + " " + p.content));
  const pages = PAGES.filter((p) => hit(p.title + " " + p.text));
  const answers = faqs.filter((f) => hit(f.question + " " + f.answer));
  const total = posts.length + pages.length + answers.length;

  return (
    <div className="mx-auto max-w-3xl">
      <form action="/ara" method="get" role="search" aria-label="Site içi arama" className="glass flex items-center gap-3 rounded-2xl p-2 pl-4">
        <Search className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
        <label htmlFor="q" className="sr-only">
          Ne aramak istiyorsunuz?
        </label>
        <input
          id="q"
          name="q"
          type="search"
          defaultValue={q}
          placeholder="Örn. firestick kurulumu, fiyat, kodlar…"
          className="w-full bg-transparent py-2 text-white placeholder:text-silver-500 focus:outline-none"
        />
        <button type="submit" className="btn-premium text-sm">
          Ara
        </button>
      </form>

      {q && (
        <p className="mt-6 text-sm text-slate-400">
          “{q}” için <strong className="text-white">{total}</strong> sonuç
        </p>
      )}

      {pages.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 font-display text-lg font-semibold text-white">Sayfalar</h2>
          <ul className="space-y-2">
            {pages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="glass flex items-center justify-between gap-4 rounded-2xl p-4 transition hover:bg-white/[0.04]">
                  <span>
                    <span className="font-medium text-white">{p.title}</span>
                    <span className="block text-sm text-slate-400">{p.text}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gold" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {posts.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 font-display text-lg font-semibold text-white">Blog yazıları</h2>
          <ul className="space-y-2">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="glass block rounded-2xl p-4 transition hover:bg-white/[0.04]">
                  <span className="font-medium text-white">{p.title}</span>
                  <span className="mt-1 block text-sm text-slate-400">{p.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {answers.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 font-display text-lg font-semibold text-white">Sıkça sorulan sorular</h2>
          <ul className="space-y-2">
            {answers.map((f) => (
              <li key={f.question} className="glass rounded-2xl p-4">
                <p className="font-medium text-white">{f.question}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{f.answer}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {q && total === 0 && (
        <div className="glass mt-8 rounded-2xl p-6 text-center text-slate-400">
          Sonuç bulunamadı. Farklı bir kelime deneyin veya{" "}
          <Link href="/kontakt" className="text-gold underline underline-offset-4">
            bize yazın
          </Link>
          .
        </div>
      )}
    </div>
  );
}
