// ============================================================
// lib/data.ts — Central data store for MetTrip Vacations
// ============================================================

export interface Destination {
  id: string;
  title: string;
  location: string;
  price: string;
  duration: string;
  rating: number;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  destination: string;
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

// --- Navigation Links ---
export const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Destinasi", href: "#destinations" },
  { label: "Cara Pesan", href: "#how-to-order" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

// --- Destinations ---
export const destinations: Destination[] = [
  {
    id: "bali",
    title: "Bali Paradise",
    location: "Bali, Indonesia",
    price: "Rp 3.500.000",
    duration: "4 Hari 3 Malam",
    rating: 4.9,
    image: "/images/bali.jpg",
    description:
      "Nikmati keindahan Pulau Dewata dengan pantai eksotis, pura megah, dan budaya yang memukau.",
  },
  {
    id: "raja-ampat",
    title: "Raja Ampat Explorer",
    location: "Papua Barat, Indonesia",
    price: "Rp 8.500.000",
    duration: "5 Hari 4 Malam",
    rating: 5.0,
    image: "/images/raja-ampat.jpg",
    description:
      "Jelajahi surga bawah laut dengan terumbu karang terbaik di dunia dan pemandangan yang menakjubkan.",
  },
  {
    id: "labuan-bajo",
    title: "Labuan Bajo Adventure",
    location: "NTT, Indonesia",
    price: "Rp 5.200.000",
    duration: "4 Hari 3 Malam",
    rating: 4.8,
    image: "/images/labuan-bajo.jpg",
    description:
      "Bertemu Komodo, snorkeling di Pulau Padar, dan saksikan sunset terbaik di Indonesia.",
  },
  {
    id: "bromo",
    title: "Bromo Sunrise",
    location: "Jawa Timur, Indonesia",
    price: "Rp 2.800.000",
    duration: "3 Hari 2 Malam",
    rating: 4.7,
    image: "/images/bromo.jpg",
    description:
      "Saksikan matahari terbit yang spektakuler di atas lautan pasir Gunung Bromo.",
  },
  {
    id: "lombok",
    title: "Lombok Getaway",
    location: "Lombok, Indonesia",
    price: "Rp 4.100.000",
    duration: "4 Hari 3 Malam",
    rating: 4.8,
    image: "/images/lombok.jpg",
    description:
      "Pantai berpasir putih, Gili Trawangan, dan pesona alam yang belum banyak terjamah.",
  },
  {
    id: "yogyakarta",
    title: "Jogja Heritage",
    location: "Yogyakarta, Indonesia",
    price: "Rp 2.500.000",
    duration: "3 Hari 2 Malam",
    rating: 4.6,
    image: "/images/yogyakarta.jpg",
    description:
      "Eksplorasi Candi Borobudur, Prambanan, dan kekayaan budaya Jawa yang tiada tara.",
  },
];

// --- How to Order Steps ---
export const howToOrderSteps: HowToOrderStep[] = [
  {
    id: "step-1",
    step: 1,
    title: "Pilih Destinasi",
    description:
      "Telusuri berbagai paket wisata kami dan pilih destinasi impian Anda.",
    icon: "MapPin",
  },
  {
    id: "step-2",
    step: 2,
    title: "Hubungi Kami",
    description:
      "Konsultasikan pilihan Anda melalui WhatsApp untuk detail dan ketersediaan.",
    icon: "MessageCircle",
  },
  {
    id: "step-3",
    step: 3,
    title: "Konfirmasi & Bayar",
    description:
      "Lakukan pembayaran DP untuk mengamankan slot perjalanan Anda.",
    icon: "CreditCard",
  },
  {
    id: "step-4",
    step: 4,
    title: "Berangkat!",
    description:
      "Siapkan koper Anda dan nikmati liburan tak terlupakan bersama MetTrip.",
    icon: "Plane",
  },
];

// --- Testimonials ---
export const testimonials: Testimonial[] = [
  {
    id: "testi-1",
    name: "Sarah Putri",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
    comment:
      "Perjalanan ke Raja Ampat bersama MetTrip benar-benar luar biasa! Semua terorganisir dengan baik dan guide-nya sangat ramah.",
    destination: "Raja Ampat",
  },
  {
    id: "testi-2",
    name: "Ahmad Rizki",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
    comment:
      "Sudah 3 kali pakai MetTrip dan selalu puas. Harga bersaing dengan kualitas pelayanan bintang lima!",
    destination: "Bali",
  },
  {
    id: "testi-3",
    name: "Dewi Anggraini",
    avatar: "/images/avatar-3.jpg",
    rating: 5,
    comment:
      "Labuan Bajo trip-nya seru banget! Sunset di Padar Island bikin speechless. Terima kasih MetTrip!",
    destination: "Labuan Bajo",
  },
  {
    id: "testi-4",
    name: "Budi Santoso",
    avatar: "/images/avatar-4.jpg",
    rating: 4,
    comment:
      "Pengalaman sunrise di Bromo sangat memukau. Akomodasi nyaman dan transportasi lancar. Recommended!",
    destination: "Bromo",
  },
];

// --- FAQ ---
export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Bagaimana cara memesan paket wisata?",
    answer:
      "Anda bisa memesan langsung melalui WhatsApp kami. Pilih destinasi yang diinginkan, konsultasikan jadwal Anda, lalu lakukan pembayaran DP untuk konfirmasi booking.",
  },
  {
    id: "faq-2",
    question: "Apakah harga sudah termasuk tiket pesawat?",
    answer:
      "Harga paket kami belum termasuk tiket pesawat. Namun, kami bisa membantu Anda untuk pemesanan tiket pesawat dengan harga terbaik.",
  },
  {
    id: "faq-3",
    question: "Berapa minimal peserta untuk trip?",
    answer:
      "Untuk open trip, minimal peserta adalah 2 orang. Untuk private trip, bisa disesuaikan dengan kebutuhan Anda.",
  },
  {
    id: "faq-4",
    question: "Apakah bisa custom itinerary?",
    answer:
      "Tentu! Kami menyediakan layanan private trip dengan itinerary yang bisa disesuaikan sepenuhnya dengan keinginan Anda.",
  },
  {
    id: "faq-5",
    question: "Bagaimana kebijakan pembatalan?",
    answer:
      "Pembatalan H-14 mendapatkan refund 100%, H-7 refund 50%, dan kurang dari H-7 tidak dapat di-refund. Namun, booking bisa dipindahkan ke jadwal lain.",
  },
];

// --- WhatsApp Config ---
export const whatsappConfig = {
  phoneNumber: "6281234567890",
  defaultMessage: "Halo MetTrip! Saya tertarik dengan paket wisata Anda. Bisa info lebih lanjut?",
};

// --- Company Info ---
export const companyInfo = {
  name: "MetTrip Vacations",
  tagline: "Jelajahi Indonesia, Ciptakan Kenangan",
  description:
    "MetTrip Vacations adalah partner perjalanan terpercaya yang menghadirkan pengalaman wisata terbaik ke destinasi-destinasi terindah di Indonesia.",
  email: "hello@mettripvacations.com",
  phone: "+62 812-3456-7890",
  instagram: "@mettripvacations",
  address: "Jakarta, Indonesia",
};
