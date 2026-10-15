import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { SearchResults } from "@/components/search-results";

export const metadata: Metadata = {
  title: "Site içi arama",
  description: "Sayfalar, blog yazıları ve sık sorulan sorular içinde arama yapın.",
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Arama", path: "/ara" }]} />
      <PageHero
        eyebrow="// ARAMA"
        title={
          <>
            Ne <span className="text-gold-gradient">arıyorsunuz</span>?
          </>
        }
        description="Kurulum rehberleri, paketler, blog yazıları ve sık sorulan sorular içinde arayın."
      />
      <section className="section pt-4">
        <div className="container">
          <Suspense fallback={<p className="text-center text-slate-400">Yükleniyor…</p>}>
            <SearchResults />
          </Suspense>
        </div>
      </section>
    </>
  );
}
