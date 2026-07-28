# Deutsch IPTV — Premium IPTV Website (deutsch-iptv.store)

Eine komplett neu gestaltete, hochwertige IPTV-Streaming-Website für den **deutschen Markt**, optimiert für das Keyword **„iptv kaufen“** und verwandte Suchbegriffe.

Gebaut mit **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion** und **Shadcn/UI-Stilprinzipien**. Dunkles Charcoal-Design mit Gold- und Emerald-Akzenten, Glassmorphism, sanften Glows und Premium-Mikrointeraktionen.

---

## 🚀 Schnellstart

```bash
npm install
cp .env.example .env.local   # optional: TMDB-Key eintragen
npm run dev                  # Entwicklung → http://localhost:3000
npm run build && npm run start   # Produktion
```

Deployment: optimal auf **Vercel** (Next.js nativer Host). Repo importieren → Umgebungsvariablen setzen → deploy.

---

## ⚙️ Alles an EINER Stelle bearbeiten

### `config/site.config.ts`
Domain, Telefonnummer, WhatsApp, E-Mail, SEO-Keywords, Land, Sprache, Hero-Statistiken, Vertrauens-Kennzahlen und Standard-WhatsApp-Nachricht.

```ts
contact: {
  phone: "+33 7 56 75 73 87",
  phoneRaw: "33756757387",   // nur Ziffern
  whatsapp: "33756757387",
}
```

### `config/pricing.config.ts`
Die **Preis-Pakete** (Bronze, Gold, Platinum, Exclusive) — Namen, Preise, Laufzeiten, Features, Reihenfolge und das **+ / − Verbindungssystem**. Unverändert wie vorgegeben. Der Preis wird live berechnet (`calcPrice`).

### `data/testimonials.ts`
Kundenbewertungen (Name, Stadt, Avatar, Text, Paket). Eigene Fotos: in `/public/avatars` ablegen und Pfad eintragen.

### `data/faqs.ts` & `data/blog.ts`
FAQ-Einträge und Blog-Artikel (SEO-Content).

---

## 🎬 Film- & Serien-Inhalte (TMDB)

Die Startseite zeigt aktuelle Filme & Serien über die **TMDB API**.

1. Kostenlosen Key holen: https://www.themoviedb.org/settings/api
2. In `.env.local` eintragen: `TMDB_API_KEY=dein_key`

Ohne Key werden automatisch hochwertige Fallback-Poster angezeigt — die Seite funktioniert also immer.

---

## 💬 Checkout über WhatsApp

Jeder „kaufen“-Button öffnet WhatsApp mit einer vorausgefüllten Bestellnachricht (Paket, Laufzeit, Verbindungen, Preis). Nummer wird aus `site.config.ts` gezogen.

---

## 🔍 SEO

- Primär-Keyword: **iptv kaufen** — plus 10 Sekundär-Keywords, natürlich in Titeln, H1–H3, Meta, URLs, Alt-Texten, FAQ & Body integriert.
- **Pillar-Seite:** `/iptv-kaufen` · **Supporting-Seiten:** `/beste-iptv-anbieter`, `/iptv-anbieter`, `/iptv-box-kaufen`, `/iptv-line-kaufen`, `/iptv-m3u-deutsch`
- **Blog:** 6 Artikel rund um die Keywords
- Technisch: Metadata, Open Graph, Twitter Cards, **Schema.org** (Organization, Website, FAQPage, Product, Article, BreadcrumbList), Canonical-URLs, `sitemap.xml`, `robots.txt`, Breadcrumbs, interne Verlinkung, `next/image` mit Lazy-Loading, Core-Web-Vitals-freundlich (statisch prerendered).

---

## 📄 Seiten

Start · IPTV kaufen · Preise · Installation · Blog (+ Artikel) · FAQ · Kontakt · Datenschutz · AGB · SEO-Landingpages · 404.

---

## 🗂️ Struktur

```
app/                 # Seiten (App Router) + sitemap/robots/manifest
components/           # Header, Footer, Sektionen, UI
components/sections/  # Hero, Pricing, Testimonials, FAQ, TMDB-Showcase …
config/               # site.config.ts & pricing.config.ts  ← HIER bearbeiten
data/                 # testimonials, faqs, blog
lib/                  # tmdb, seo, utils, navigation
public/               # favicon, OG-Bild, Avatare
```

> Hinweis: Datenschutz & AGB sind allgemeine Vorlagen und ersetzen keine Rechtsberatung.
