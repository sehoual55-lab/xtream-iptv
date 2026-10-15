import type { Metadata } from "next";
import { siteConfig, buildWhatsAppLink } from "@/config/site.config";

type SeoParams = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

/** Baut vollständige Next.js-Metadaten inkl. OG & Twitter Cards. */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  image,
}: SeoParams): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.seo.ogImage;

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.seo.keywords],
    alternates: { canonical: url, languages: { tr: url, "tr-TR": url, "x-default": url } },
    openGraph: {
      type: "website",
      locale: siteConfig.locale.ogLocale,
      url,
      siteName: siteConfig.brand.name,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.seo.twitterHandle,
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

/** Gerçek sosyal profil bağlantıları (site.config.ts içinde "#" olmayanlar). */
function socialLinks(): string[] {
  return Object.values(siteConfig.social).filter((u) => typeof u === "string" && u.startsWith("http"));
}

/** JSON-LD: Organisation */
export function organizationJsonLd() {
  const sameAs = socialLinks();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.brand.name,
    legalName: siteConfig.brand.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    image: `${siteConfig.url}${siteConfig.seo.ogImage}`,
    email: siteConfig.contact.email,
    telephone: `+${siteConfig.contact.phoneRaw}`,
    foundingDate: siteConfig.dates.published,
    areaServed: { "@type": "Country", name: siteConfig.locale.countryName },
    ...(sameAs.length ? { sameAs } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: buildWhatsAppLink(),
      areaServed: siteConfig.locale.country,
      availableLanguage: ["Turkish"],
    },
  };
}

/** JSON-LD: Website */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.brand.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locale.language,
    datePublished: siteConfig.dates.published,
    dateModified: siteConfig.dates.updated,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/ara?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

/** JSON-LD: WebPage (tarihli) — her sayfanın yayın/güncelleme tarihini AI ve Google'a bildirir. */
export function webPageJsonLd(opts: { title: string; description: string; path: string; published?: string; modified?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.title,
    description: opts.description,
    url: `${siteConfig.url}${opts.path}`,
    inLanguage: siteConfig.locale.language,
    datePublished: opts.published ?? siteConfig.dates.published,
    dateModified: opts.modified ?? siteConfig.dates.updated,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
  };
}

/** JSON-LD: FAQPage */
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** JSON-LD: Produkt/Angebot */
export function productJsonLd(plan: {
  name: string;
  price: number;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${plan.name} IPTV Paket`,
    description: plan.description,
    image: `${siteConfig.url}${siteConfig.seo.ogImage}`,
    brand: { "@type": "Brand", name: siteConfig.brand.name },
    offers: {
      "@type": "Offer",
      price: plan.price.toFixed(2),
      priceCurrency: siteConfig.locale.currency,
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/preise`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.trust.rating.replace(",", "."),
      reviewCount: siteConfig.trust.reviewCount,
    },
  };
}

/** JSON-LD: Breadcrumbs */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/** JSON-LD: Artikel (Blog) */
export function articleJsonLd(post: {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: siteConfig.locale.language,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/hakkimizda#editor`,
      name: post.author,
      url: `${siteConfig.url}/hakkimizda`,
      worksFor: { "@id": `${siteConfig.url}/#organization` },
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brand.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/images/logo.png` },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };
}

/** JSON-LD: Yazar (Person) — editör ekibini temsil eden kalıcı kimlik. */
export function authorJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/hakkimizda#editor`,
    name: siteConfig.brand.editorName,
    jobTitle: "İçerik Editörü",
    url: `${siteConfig.url}/hakkimizda`,
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    knowsAbout: ["IPTV", "Xtream Codes", "Smart TV kurulumu", "Android TV", "Yayın teknolojileri"],
  };
}

/** JSON-LD: Ana sayfadaki son yazılar (BlogPosting listesi, dateModified ile). */
export function latestPostsJsonLd(posts: { title: string; description: string; date: string; slug: string; image: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Son rehberler",
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "BlogPosting",
        "@id": `${siteConfig.url}/blog/${p.slug}`,
        headline: p.title,
        description: p.description,
        url: `${siteConfig.url}/blog/${p.slug}`,
        image: `${siteConfig.url}${p.image}`,
        datePublished: p.date,
        dateModified: p.date,
        inLanguage: siteConfig.locale.language,
        author: { "@id": `${siteConfig.url}/hakkimizda#editor` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    })),
  };
}

/** JSON-LD: WebApplication — site içi arama ve sipariş akışı. */
export function webAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${siteConfig.url}/#webapp`,
    name: `${siteConfig.brand.name} Portal`,
    url: siteConfig.url,
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Web, Android, iOS, Smart TV",
    browserRequirements: "Requires JavaScript",
    inLanguage: siteConfig.locale.language,
    offers: { "@type": "Offer", price: "39.99", priceCurrency: siteConfig.locale.currency, url: `${siteConfig.url}/preise` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}
