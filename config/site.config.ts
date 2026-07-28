/**
 * ============================================================================
 *  MERKEZİ YAPILANDIRMA — xtream-iptv.store
 * ============================================================================
 *  HER ŞEYİ tek yerden düzenle: Alan adı, telefon, WhatsApp, SEO anahtar
 *  kelimeleri, ülke, dil, hero istatistikleri ve müşteri yorumları.
 *
 *  Her değişiklikten sonra: kaydet → otomatik güncellenir.
 * ============================================================================
 */

export const siteConfig = {
  // ── Marka ────────────────────────────────────────────────────────────────
  brand: {
    name: "Xtream IPTV",
    legalName: "Xtream-IPTV.store",
    tagline: "Premium Xtream IPTV Kontrol Merkezi",
    slogan: "Yayın operasyon merkezine hoş geldiniz.",
  },

  // ── Alan adı & URL'ler ─────────────────────────────────────────────────────
  domain: "xtream-iptv.store",
  url: "https://xtream-iptv.store",

  // ── İletişim ───────────────────────────────────────────────────────────────
  contact: {
    // Telefon (uluslararası, ülke koduyla)
    phone: "+33 7 56 75 73 87",
    // Bağlantılar / WhatsApp için: yalnızca rakamlar, + ve boşluk olmadan
    phoneRaw: "33756757387",
    // WhatsApp numarası (genellikle telefon ile aynı)
    whatsapp: "33756757387",
    email: "destek@xtream-iptv.store",
    // WhatsApp sohbetinde önceden doldurulan varsayılan mesaj
    whatsappDefaultMessage:
      "Merhaba! Xtream IPTV aboneliği ile ilgileniyorum. Bana yardımcı olabilir misiniz?",
  },

  // ── Ülke & Dil ─────────────────────────────────────────────────────────────
  locale: {
    language: "tr",
    country: "TR",
    countryName: "Türkiye",
    currency: "USD", // Fiyatlar USD olarak gösterilir (önceki sürümdeki gibi)
    currencySymbol: "$",
    ogLocale: "tr_TR",
  },

  // ── Hero istatistikleri (serbestçe düzenlenebilir) ──────────────────────────
  heroStats: [
    { value: "130.000+", label: "Canlı Kanal" },
    { value: "140.000+", label: "Film & Dizi" },
    { value: "%99,9", label: "Sunucu Çalışma Süresi" },
    { value: "7/24", label: "Türkçe Destek" },
  ],

  // ── Güven göstergeleri ──────────────────────────────────────────────────────
  trust: {
    rating: "4,9",
    reviewCount: 3450,
    customersLabel: "Türkiye'de mutlu müşteri",
    customersCount: "48.000+",
    uptime: "%99,9",
    yearsExperience: "8+",
    satisfaction: "%98",
  },

  // ── Sosyal ağlar (opsiyonel) ────────────────────────────────────────────────
  social: {
    facebook: "#",
    instagram: "#",
    telegram: "#",
    youtube: "#",
  },

  // ── TMDB (Film & Dizi afişleri) ─────────────────────────────────────────────
  // TMDB API anahtarın (v3). Derleme sırasında gerçek afişleri yüklemek için kullanılır.
  // Ücretsiz anahtar: https://www.themoviedb.org/settings/api
  // TMDB_API_KEY ortam değişkeni ile de geçersiz kılınabilir.
  tmdb: {
    apiKey: "eb88f8554c5c594b1b82a59672ee98f4",
  },

  // ── SEO ─────────────────────────────────────────────────────────────────────
  seo: {
    defaultTitle: "Xtream IPTV | Premium Xtream Codes Yayın Platformu 2026",
    titleTemplate: "%s | Xtream IPTV",
    defaultDescription:
      "Xtream IPTV: 130.000+ kanal ve 140.000+ film & dizi 4K kalitede. Xtream Codes girişi, tüm cihazlarda Xtream IPTV Player desteği, anında aktivasyon ve 7/24 destek.",
    primaryKeyword: "xtream iptv",
    keywords: [
      "xtream iptv",
      "xtream iptv player",
      "xtream iptv player android",
      "xtream iptv apk",
      "xtream iptv kodları",
      "iptv xtream",
      "xtream code iptv",
      "xtream player",
      "iptv player xtream",
      "xtream codes",
    ],
    ogImage: "/images/og-image.jpg",
    twitterHandle: "@xtreamiptv",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** İsteğe bağlı mesajla bir WhatsApp bağlantısı oluşturur. */
export function buildWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(
    message ?? siteConfig.contact.whatsappDefaultMessage
  );
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
}

/** Telefon bağlantısı (tel:) */
export function buildPhoneLink(): string {
  return `tel:+${siteConfig.contact.phoneRaw}`;
}
