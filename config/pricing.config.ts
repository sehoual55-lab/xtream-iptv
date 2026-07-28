/**
 * ============================================================================
 *  FİYAT PAKETLERİ — DEĞİŞTİRMEDEN KORUYUN
 * ============================================================================
 *  İsimler, fiyatlar, süreler, özellikler, sıralama ve bağlantı sistemi
 *  tam olarak verildiği gibidir. Yalnızca görünüm yeniden tasarlandı ve
 *  Türkçeye çevrildi.
 * ============================================================================
 */

export type Plan = {
  id: string;
  name: string;
  price: number;
  /** Süre görüntü metni */
  duration: string;
  /** Bonus aylar (opsiyonel) */
  bonus?: string;
  connections: number;
  channels: string;
  movies: string;
  badge?: "En Popüler" | "En İyi Değer";
  highlight?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "bronze",
    name: "Bronze",
    price: 39.99,
    duration: "12 Ay",
    connections: 1,
    channels: "25.000+",
    movies: "100.000+",
    features: [
      "25.000+ TV Kanalı",
      "100.000+ Film & Dizi",
      "4K / FHD / HD Kalite",
      "Tüm ABD & uluslararası kanallar",
      "Tüm cihazlarla uyumlu",
      "TV Rehberi (EPG)",
      "Netflix, Prime Video & daha fazlası",
      "%100 kararlı sunucular",
      "7/24 teknik destek",
      "Anında teslimat",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: 49.99,
    duration: "15 Ay",
    bonus: "+3 Ay Ücretsiz",
    connections: 1,
    channels: "25.000+",
    movies: "100.000+",
    badge: "En Popüler",
    highlight: true,
    features: [
      "25.000+ TV Kanalı",
      "100.000+ Film & Dizi",
      "4K / FHD / HD Kalite",
      "Tüm ABD & uluslararası kanallar",
      "Tüm cihazlarla uyumlu",
      "TV Rehberi (EPG)",
      "Netflix, Prime Video & daha fazlası",
      "%100 kararlı sunucular",
      "7/24 teknik destek",
      "Anında teslimat",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    price: 59.99,
    duration: "15 Ay",
    bonus: "+3 Ay Ücretsiz",
    connections: 1,
    channels: "25.000+",
    movies: "100.000+",
    features: [
      "25.000+ TV Kanalı",
      "100.000+ Film & Dizi",
      "4K / FHD / HD Kalite",
      "Tüm ABD & uluslararası kanallar",
      "Tüm cihazlarla uyumlu",
      "TV Rehberi (EPG)",
      "Netflix, Prime Video & daha fazlası",
      "%100 kararlı sunucular",
      "7/24 teknik destek",
      "Anında teslimat",
    ],
  },
  {
    id: "exclusive",
    name: "Exclusive",
    price: 84.99,
    duration: "24 Ay",
    bonus: "+3 Ay Ücretsiz",
    connections: 1,
    channels: "130.000+",
    movies: "140.000+",
    badge: "En İyi Değer",
    features: [
      "130.000+ TV Kanalı",
      "140.000+ Film & Dizi",
      "4K / FHD / HD Kalite",
      "Tüm uluslararası kanallar",
      "Tüm cihazlarla uyumlu",
      "TV Rehberi (EPG)",
      "Netflix, Prime Video & daha fazlası",
      "%100 kararlı sunucular",
      "7/24 teknik destek",
      "Anında teslimat",
    ],
  },
];

/**
 * Bağlantı sistemi (+ / −):
 * İlk bağlantı normal taban fiyatındadır.
 * Her EK eşzamanlı bağlantı taban fiyat üzerinden %15 indirim alır.
 */
export const connectionConfig = {
  min: 1,
  max: 5,
  /** Her ek bağlantıya uygulanan indirim (0.15 = %15) */
  additionalDiscount: 0.15,
};

/**
 * Toplam fiyat: ilk bağlantı normal, her ek bağlantı %15 daha ucuz.
 */
export function calcPrice(basePrice: number, connections: number): number {
  const c = Math.max(connectionConfig.min, Math.min(connectionConfig.max, connections));
  const additional = (c - 1) * basePrice * (1 - connectionConfig.additionalDiscount);
  const total = basePrice + additional;
  return Math.round(total * 100) / 100;
}

/** İndirimsiz fiyat (taban fiyat × bağlantı) – tasarruf göstergesi için. */
export function calcFullPrice(basePrice: number, connections: number): number {
  const c = Math.max(connectionConfig.min, Math.min(connectionConfig.max, connections));
  return Math.round(basePrice * c * 100) / 100;
}

export function formatPrice(price: number, symbol = "$"): string {
  return `${symbol}${price.toFixed(2)}`;
}
