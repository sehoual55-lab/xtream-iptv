/**
 * Müşteri yorumları — serbestçe düzenlenebilir.
 * Avatarlar pravatar.cc kullanır (yer tutucu). `avatar` alanını kendi
 * görsellerinizle değiştirin: /public/avatars, örn. "/avatars/emre.jpg".
 */

export type Testimonial = {
  name: string;
  city: string;
  avatar: string;
  rating: number;
  text: string;
  plan: string;
  verified: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Emre Yılmaz",
    city: "İstanbul",
    avatar: "https://i.pravatar.cc/160?img=13",
    rating: 5,
    plan: "Gold Paket",
    verified: true,
    text: "Xtream IPTV beni tamamen etkiledi. Xtream Codes bilgilerini Fire TV Stick'e girdim, Süper Lig 4K donmadan aktı. Bugüne kadarki en kararlı sağlayıcı.",
  },
  {
    name: "Zeynep Demir",
    city: "Ankara",
    avatar: "https://i.pravatar.cc/160?img=45",
    rating: 5,
    plan: "Exclusive Paket",
    verified: true,
    text: "Xtream IPTV Player kurulumu beş dakikada bitti. Film ve dizi arşivi devasa, her akşam yeni bir şey izliyoruz. Destek WhatsApp'tan dakikalar içinde yanıtladı.",
  },
  {
    name: "Mert Kaya",
    city: "İzmir",
    avatar: "https://i.pravatar.cc/160?img=33",
    rating: 5,
    plan: "Platinum Paket",
    verified: true,
    text: "Sonunda gerçek 4K sunan ciddi bir sağlayıcı. TV rehberi (EPG) eksiksiz, Xtream kodları sorunsuz çalışıyor. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Elif Şahin",
    city: "Bursa",
    avatar: "https://i.pravatar.cc/160?img=47",
    rating: 5,
    plan: "Gold Paket",
    verified: true,
    text: "Önce tereddüt ettim ama Xtream IPTV gerçekten iş görüyor. Samsung TV'mde xtream code iptv girişi kusursuz çalıştı. Eski sağlayıcımla kıyaslanamaz.",
  },
  {
    name: "Burak Çelik",
    city: "Antalya",
    avatar: "https://i.pravatar.cc/160?img=15",
    rating: 5,
    plan: "Exclusive Paket",
    verified: true,
    text: "130.000 kanal çok geliyor ama gerçek. Spor, uluslararası kanallar ve tüm yayın içerikleri tek yerde. Apple TV'de her şey tereyağı gibi akıyor.",
  },
  {
    name: "Selin Arslan",
    city: "Adana",
    avatar: "https://i.pravatar.cc/160?img=44",
    rating: 5,
    plan: "Bronze Paket",
    verified: true,
    text: "Başlangıç için 12 aylık paketi aldım ve çok memnunum. Görüntü kalitesi harika, Şampiyonlar Ligi akşamı hiç donma yaşamadım. Kesinlikle uzatacağım.",
  },
  {
    name: "Onur Aydın",
    city: "Konya",
    avatar: "https://i.pravatar.cc/160?img=51",
    rating: 5,
    plan: "Platinum Paket",
    verified: true,
    text: "Hızlı destek, uygun fiyat ve devasa kanal listesi. Xtream IPTV APK'yı Android kutuma kurdum, TiviMate ile mükemmel çalıştı. Bildiğim en iyi hizmet.",
  },
  {
    name: "Deniz Koç",
    city: "Gaziantep",
    avatar: "https://i.pravatar.cc/160?img=32",
    rating: 5,
    plan: "Gold Paket",
    verified: true,
    text: "Her şey akıcı, akşamları buffer sorunu yok. Xtream player üzerinden kanallar HD ve 4K'da güvenle çalışıyor. Çok tavsiye ederim.",
  },
];
