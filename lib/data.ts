// ============================================================
// lib/data.ts — Central data store for NusaWander Travel
// ============================================================

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  priceFrom: string;
  duration: string;
  includes: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  destination: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface HowToOrderStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  whatsappNumber: string;
  whatsappMessage: string;
}

// --- Navigation Links ---
export const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Destinasi", href: "#destinasi" },
  { label: "Cara Pesan", href: "#cara-pesan" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

// --- Company Info ---
export const COMPANY_INFO: CompanyInfo = {
  name: "Mettrip Vacations",
  tagline: "Jelajahi Dunia, Ceritakan Keindahannya",
  whatsappNumber: "6281234567890",
  whatsappMessage: "Halo, saya ingin konsultasi paket wisata",
};

// --- Destinations ---
export const DESTINATIONS: Destination[] = [
  {
    id: "jepang",
    name: "Jepang",
    tagline: "Negeri Sakura yang Memukau",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    priceFrom: "Rp 18.500.000",
    duration: "7 Hari 6 Malam",
    includes: [
      "Hotel Bintang 4",
      "Tour Guide Berbahasa Indonesia",
      "Transportasi Lokal",
      "Makan 3x Sehari",
      "Tiket Wisata",
    ],
    badge: "Terlaris",
  },
  {
    id: "hongkong",
    name: "Hongkong",
    tagline: "Kota Seribu Gemerlap",
    image:
      "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
    priceFrom: "Rp 12.800.000",
    duration: "5 Hari 4 Malam",
    includes: [
      "Hotel Bintang 3",
      "City Tour Lengkap",
      "Disneyland Pass",
      "Makan 3x Sehari",
      "Airport Transfer",
    ],
  },
  {
    id: "macau",
    name: "Macau",
    tagline: "Perpaduan Budaya Timur & Barat",
    image:
      "https://images.unsplash.com/photo-1555217851-6141535bd771?w=800&q=80",
    priceFrom: "Rp 11.200.000",
    duration: "4 Hari 3 Malam",
    includes: [
      "Hotel Bintang 4",
      "Tur Heritage Macau",
      "Gondola Venetian",
      "Makan 2x Sehari",
      "Guide Lokal",
    ],
    badge: "Promo",
  },
  {
    id: "kazakhstan",
    name: "Kazakhstan",
    tagline: "Pesona Asia Tengah yang Eksotis",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    priceFrom: "Rp 15.900.000",
    duration: "6 Hari 5 Malam",
    includes: [
      "Hotel Bintang 4",
      "Almaty City Tour",
      "Charyn Canyon Trip",
      "Makan 3x Sehari",
      "Visa Assistance",
    ],
  },
  {
    id: "korea-selatan",
    name: "Korea Selatan",
    tagline: "Negeri K-Pop & Tradisi",
    image:
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
    priceFrom: "Rp 14.500.000",
    duration: "6 Hari 5 Malam",
    includes: [
      "Hotel Bintang 4",
      "Nami Island Tour",
      "Hanbok Experience",
      "Makan 3x Sehari",
      "T-Money Card",
    ],
    badge: "Terlaris",
  },
  {
    id: "dubai",
    name: "Dubai",
    tagline: "Kemewahan di Tengah Gurun",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    priceFrom: "Rp 19.900.000",
    duration: "6 Hari 5 Malam",
    includes: [
      "Hotel Bintang 5",
      "Desert Safari",
      "Burj Khalifa Ticket",
      "Makan 3x Sehari",
      "Dhow Cruise Dinner",
    ],
  },
  {
    id: "turki",
    name: "Turki",
    tagline: "Jembatan Dua Benua",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80",
    priceFrom: "Rp 21.500.000",
    duration: "8 Hari 7 Malam",
    includes: [
      "Hotel Bintang 4",
      "Cappadocia Hot Air Balloon",
      "Bosphorus Cruise",
      "Makan 3x Sehari",
      "Domestic Flight",
    ],
    badge: "Promo",
  },
];

// --- How to Order Steps ---
export const howToOrderSteps: HowToOrderStep[] = [
  {
    id: "step-1",
    step: 1,
    title: "Pilih Paket",
    description:
      "Telusuri berbagai paket wisata kami dan pilih destinasi impian Anda.",
    icon: "MapPin",
  },
  {
    id: "step-2",
    step: 2,
    title: "Chat WA",
    description:
      "Konsultasikan pilihan Anda melalui WhatsApp untuk detail dan ketersediaan.",
    icon: "MessageCircle",
  },
  {
    id: "step-3",
    step: 3,
    title: "Bayar DP",
    description:
      "Lakukan pembayaran DP untuk mengamankan slot perjalanan Anda.",
    icon: "CreditCard",
  },
  {
    id: "step-4",
    step: 4,
    title: "Berangkat!",
    description:
      "Siapkan koper Anda dan nikmati liburan tak terlupakan bersama NusaWander.",
    icon: "Plane",
  },
];

// --- Testimonials ---
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Rina Kartika",
    destination: "Jepang",
    rating: 5,
    comment:
      "Trip ke Jepang bareng NusaWander bener-bener unforgettable! Guide-nya ramah, itinerary-nya detail, dan hotel-nya strategis banget. Pasti repeat order!",
    avatar: "https://i.pravatar.cc/100?img=1",
    date: "15 Mei 2026",
  },
  {
    id: "testi-2",
    name: "Fajar Nugroho",
    destination: "Korea Selatan",
    rating: 5,
    comment:
      "Korea trip-nya seru banget! Nami Island-nya cantik, makanannya enak semua, dan guide-nya asik. Worth every penny. Terima kasih NusaWander!",
    avatar: "https://i.pravatar.cc/100?img=3",
    date: "2 Juni 2026",
  },
  {
    id: "testi-3",
    name: "Siti Aisyah",
    destination: "Turki",
    rating: 4,
    comment:
      "Cappadocia & Istanbul luar biasa indah. Hot air balloon-nya dreamy banget. Pelayanan NusaWander sangat profesional dari awal sampai akhir.",
    avatar: "https://i.pravatar.cc/100?img=5",
    date: "20 April 2026",
  },
  {
    id: "testi-4",
    name: "Denny Pratama",
    destination: "Dubai",
    rating: 5,
    comment:
      "Desert safari-nya epic! Hotel bintang 5 dan Burj Khalifa experience bikin liburan terasa super mewah. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=8",
    date: "10 Maret 2026",
  },
];

// --- FAQ ---
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah harga paket sudah termasuk visa?",
    answer:
      "Untuk beberapa destinasi, harga sudah termasuk visa assistance. Namun untuk negara tertentu seperti Jepang dan Korea Selatan, biaya visa diurus terpisah. Tim kami akan membantu proses pengajuan visa Anda dari awal hingga selesai.",
  },
  {
    id: "faq-2",
    question: "Bisa custom itinerary sesuai keinginan?",
    answer:
      "Tentu bisa! Kami menyediakan layanan private trip dengan itinerary yang bisa disesuaikan sepenuhnya. Mulai dari destinasi, durasi, pilihan hotel, hingga aktivitas spesifik yang Anda inginkan.",
  },
  {
    id: "faq-3",
    question: "Apakah tersedia opsi DP atau cicilan?",
    answer:
      "Ya, kami menyediakan opsi pembayaran DP minimal 30% dari total harga paket. Sisa pembayaran bisa dilunasi paling lambat H-14 sebelum keberangkatan. Kami juga bekerja sama dengan beberapa platform cicilan.",
  },
  {
    id: "faq-4",
    question: "Berapa minimal peserta untuk open trip?",
    answer:
      "Untuk open trip, minimal keberangkatan adalah 10 peserta. Jika kuota belum terpenuhi, kami akan menginformasikan paling lambat H-21. Untuk private trip, minimal 2 orang sudah bisa berangkat.",
  },
  {
    id: "faq-5",
    question: "Bagaimana jika terjadi pembatalan perjalanan?",
    answer:
      "Pembatalan H-30 mendapatkan refund 90%, H-14 refund 50%, dan kurang dari H-7 tidak dapat di-refund. Namun, booking bisa dipindahkan ke jadwal keberangkatan lain dengan syarat dan ketentuan berlaku.",
  },
];

// --- Helper: Build WhatsApp Link ---
export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || COMPANY_INFO.whatsappMessage;
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
