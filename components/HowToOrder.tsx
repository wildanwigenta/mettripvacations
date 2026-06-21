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
    <section id="how-to-order" className="py-20 lg:py-28 bg-white">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mt-3 mb-4">
            Cara Pemesanan
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Hanya 4 langkah mudah untuk memulai petualangan tak terlupakan
            bersama MetTrip Vacations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howToOrderSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || MapPin;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center group"
              >
                {/* Connector line */}
                {index < howToOrderSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-sky-200 to-sky-100" />
                )}

                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl mb-6 group-hover:from-sky-100 group-hover:to-sky-200 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-sky-100 group-hover:-translate-y-1">
                  <Icon className="w-10 h-10 text-sky-500" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-r from-sky-500 to-sky-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
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
