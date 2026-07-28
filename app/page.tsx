import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { FilmShowcase } from "@/components/sections/film-showcase";
import { Dashboard } from "@/components/sections/dashboard";
import { Trusted } from "@/components/sections/trusted";
import { SupportedDevices } from "@/components/sections/supported-devices";
import { Categories } from "@/components/sections/categories";
import { Pricing } from "@/components/sections/pricing";
import { InstallationGuides } from "@/components/sections/installation-guides";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { BlogLatest } from "@/components/sections/blog-latest";
import { Cta } from "@/components/sections/cta";
import { SectionHeading } from "@/components/section-heading";
import { JsonLd } from "@/components/jsonld";
import { faqJsonLd, productJsonLd } from "@/lib/seo";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/config/site.config";
import { getShowcase } from "@/lib/tmdb";

export default async function HomePage() {
  const posters = await getShowcase();
  const homeFaqs = faqs.slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(homeFaqs),
          productJsonLd({
            name: "Gold",
            price: 49.99,
            description: siteConfig.seo.defaultDescription,
          }),
        ]}
      />

      {/* 1. Hero Command Center */}
      <Hero />
      {/* Film vitrini (büyük afişler) */}
      <FilmShowcase posters={posters} />
      {/* 2. Live Streaming Dashboard */}
      <Dashboard />
      {/* 3. Server Performance Statistics */}
      <Trusted />
      {/* 4. Supported Devices */}
      <SupportedDevices />
      {/* 5. Streaming Categories */}
      <Categories />
      {/* 6. Access Plans */}
      <Pricing />
      {/* 8. Installation Center */}
      <InstallationGuides />
      {/* 9. Customer Reviews */}
      <Testimonials />

      {/* 10. FAQ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="// SIKÇA SORULAN SORULAR"
            title={
              <>
                Xtream IPTV hakkında <span className="text-gold-gradient">her şey</span>
              </>
            }
            subtitle="En önemli yanıtlar tek bakışta. Başka sorunuz mu var? Destek ekibimiz her zaman yardıma hazır."
          />
          <div className="mt-12">
            <FaqAccordion items={homeFaqs} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="btn-ghost">
              Tüm SSS <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Latest Guides */}
      <BlogLatest />
      {/* 12. Premium CTA */}
      <Cta />
    </>
  );
}
