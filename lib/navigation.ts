/** Merkezi navigasyon & bağlantı yapısı. */

export const mainNav = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Xtream IPTV", href: "/xtream-iptv" },
  { label: "Fiyatlar", href: "/preise" },
  { label: "Kurulum", href: "/installation" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/faq" },
  { label: "İletişim", href: "/kontakt" },
];

export const footerNav = {
  produkt: {
    title: "Ürün",
    links: [
      { label: "Xtream IPTV", href: "/xtream-iptv" },
      { label: "Fiyatlar & Paketler", href: "/preise" },
      { label: "Player Uygulamaları", href: "/xtream-iptv-player" },
      { label: "Android APK Kurulumu", href: "/xtream-iptv-apk" },
      { label: "Codes ile Giriş", href: "/xtream-codes" },
    ],
  },
  anbieter: {
    title: "Bilgi",
    links: [
      { label: "Giriş Kodları", href: "/xtream-iptv-kodlari" },
      { label: "Kurulum Rehberi", href: "/installation" },
      { label: "Blog", href: "/blog" },
      { label: "SSS", href: "/faq" },
    ],
  },
  unternehmen: {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "İletişim", href: "/kontakt" },
      { label: "Gizlilik Politikası", href: "/datenschutz" },
      { label: "Kullanım Şartları", href: "/agb" },
    ],
  },
};
