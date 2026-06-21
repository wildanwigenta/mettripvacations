import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MetTrip Vacations - Paket Wisata Terbaik",
  description:
    "MetTrip Vacations menyediakan paket wisata terbaik ke berbagai destinasi populer dengan harga terjangkau dan pelayanan terbaik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
