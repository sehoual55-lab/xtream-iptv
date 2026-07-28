import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { Pricing } from "@/components/sections/pricing";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/sections/cta";
import { JsonLd } from "@/components/jsonld";
import { faqJsonLd } from "@/lib/seo";
import type { FAQ } from "@/data/faqs";

export type SeoSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type RelatedLink = { label: string; href: string };

type Props = {
  breadcrumb: Crumb[];
  eyebrow: string;
  h1: React.ReactNode;
  intro: string;
  sections: SeoSection[];
  faqs: FAQ[];
  related: RelatedLink[];
  showPricing?: boolean;
};

export function SeoLanding({
  breadcrumb,
  eyebrow,
  h1,
  intro,
  sections,
  faqs,
  related,
  showPricing = true,
}: Props) {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs items={breadcrumb} />
      <PageHero eyebrow={eyebrow} title={h1} description={intro} />

      <section className="section pt-6">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-12">
            {sections.map((s, i) => (
              <Reveal key={i} delay={0.03}>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                    {s.heading}
                  </h2>
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="mt-4 leading-relaxed text-slate-300">
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-5 space-y-2.5">
                      {s.bullets.map((b, k) => (
                        <li key={k} className="flex items-start gap-2.5 text-slate-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {showPricing && <Pricing />}

      <section className="section pt-4">
        <div className="container">
          <SectionHeading eyebrow="// SIKÇA SORULAN SORULAR" title="Bilmeniz gerekenler" />
          <div className="mt-12">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Interne Verlinkung */}
      <section className="pb-8">
        <div className="container">
          <div className="glass mx-auto max-w-4xl rounded-3xl p-8">
            <h2 className="font-display text-lg font-semibold text-white">
              İlgili konular
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 transition hover:border-gold/40 hover:text-gold"
                >
                  {r.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
