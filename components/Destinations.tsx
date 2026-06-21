"use client";

import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { destinations } from "@/lib/data";

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 lg:py-28">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mt-3 mb-4">
            Pilih Petualanganmu
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Jelajahi destinasi-destinasi terindah di Indonesia dengan paket wisata
            terbaik dari MetTrip Vacations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 hover:-translate-y-2 border border-sky-50"
            >
              {/* Image Placeholder */}
              <div className="relative h-52 bg-gradient-to-br from-sky-200 to-sky-400 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-white/30" />
                </div>
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-gray-700">
                      {dest.rating}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-sky-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {dest.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-1 group-hover:text-sky-600 transition-colors">
                  {dest.title}
                </h3>
                <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {dest.location}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-sky-50">
                  <div>
                    <span className="text-xs text-gray-400">Mulai dari</span>
                    <div className="text-lg font-bold text-sky-600">
                      {dest.price}
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/6281234567890?text=Halo! Saya tertarik dengan paket ${dest.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-sky-50 text-sky-600 text-sm font-semibold rounded-full hover:bg-sky-500 hover:text-white transition-all"
                  >
                    Pesan
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
