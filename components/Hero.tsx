"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { getWhatsAppLink } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 to-sky-500"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
          alt="Travel Background"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6"
          >
            Jelajahi Dunia Tanpa Batas
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-sky-50 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md"
          >
            NusaWander Travel menghadirkan pengalaman perjalanan tak terlupakan ke berbagai belahan dunia. Mari ciptakan cerita indah Anda bersama kami.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#destinasi"
              className="group px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:shadow-xl hover:shadow-sky-500/30 transition-all hover:-translate-y-1 flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Lihat Paket
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-sky-600/80 backdrop-blur-sm text-white font-semibold rounded-full border border-sky-400/50 hover:bg-sky-500 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              Chat WA
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto"
          >
            {[
              { value: "500+", label: "Traveler" },
              { value: "15+", label: "Destinasi" },
              { value: "5 Tahun", label: "Pengalaman" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold font-heading text-white drop-shadow-md">
                  {stat.value}
                </div>
                <div className="text-sm text-sky-100 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
