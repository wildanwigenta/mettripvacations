"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  CreditCard,
  Plane,
} from "lucide-react";
import { howToOrderSteps } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  MessageCircle,
  CreditCard,
  Plane,
};

export default function HowToOrder() {
  return (
    <section id="cara-pesan" className="py-20 lg:py-28 bg-white">
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
            Mudah & Cepat
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-sky-800 mt-3 mb-4">
            Cara Pesan
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Hanya 4 langkah mudah untuk memulai petualangan tak terlupakan
            bersama NusaWander Travel.
          </p>
        </motion.div>

        {/* Horizontal Steps */}
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 lg:gap-8">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-sky-100 z-0" />

          {howToOrderSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || MapPin;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center flex-1 w-full"
              >
                {/* Icon */}
                <div className="w-24 h-24 bg-white border-4 border-sky-50 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-sky-100 relative group transition-transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-sky-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity" />
                  <Icon className="w-10 h-10 text-sky-500" />
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-sky-600 text-white font-bold rounded-full flex items-center justify-center shadow-md">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-sky-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
