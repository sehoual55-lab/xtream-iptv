import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 pt-24">
      <div className="text-center">
        <p className="font-display text-7xl font-extrabold text-gold-gradient md:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
          Sayfa bulunamadı
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-400">
          Aradığınız sayfa mevcut değil ya da taşınmış olabilir. Ana sayfaya dönün veya
          IPTV paketlerimizi keşfedin.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-premium">
            <Home className="h-4 w-4" /> Ana Sayfa
          </Link>
          <Link href="/preise" className="btn-ghost">
            Fiyatlara Git <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
