"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { DESTINATIONS, getWhatsAppLink } from "@/lib/data";

export default function Destinations() {
  return (
    <section id="destinasi" className="py-20 lg:py-28 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-sky-500 uppercase tracking-wider">
            Destinasi Populer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-sky-800 mt-3 mb-4">
            Pilih Petualanganmu
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Jelajahi destinasi-destinasi terbaik dunia dengan paket wisata
            terpercaya dari NusaWander.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 hover:-translate-y-2 border border-sky-100"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent z-10" />
                {dest.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        dest.badge === "Terlaris"
                          ? "bg-amber-400 text-amber-900"
                          : "bg-emerald-400 text-emerald-900"
                      }`}
                    >
                      {dest.badge}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 bg-sky-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {dest.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-sky-800 mb-1 group-hover:text-sky-600 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{dest.tagline}</p>

                {/* Includes (First 3) */}
                <div className="space-y-2 mb-6">
                  {dest.includes.slice(0, 3).map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-sky-50">
                  <div>
                    <span className="text-xs text-gray-400">Harga mulai</span>
                    <div className="text-lg font-bold text-sky-600">
                      {dest.priceFrom}
                    </div>
                  </div>
                  <a
                    href={getWhatsAppLink(
                      `Halo NusaWander, saya tertarik dengan paket wisata ${dest.name}. Boleh minta detailnya?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-full hover:bg-sky-600 transition-all shadow-md shadow-sky-200"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
