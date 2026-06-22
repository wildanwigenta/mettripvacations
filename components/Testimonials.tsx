"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-sky-50/50">
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
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-sky-800 mt-3 mb-4">
            Kata Mereka
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Dengarkan pengalaman nyata dari para traveler yang sudah mempercayakan
            perjalanan mereka kepada NusaWander.
          </p>
        </motion.div>

        {/* Testimonial Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 border border-sky-100 flex flex-col h-full"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-sky-50" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testi.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 leading-relaxed mb-8 italic flex-grow">
                &ldquo;{testi.comment}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-sky-100"
                />
                <div>
                  <h4 className="font-semibold text-sky-900">{testi.name}</h4>
                  <span className="text-sm text-sky-500 font-medium">
                    {testi.destination}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
