"use client";

import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { navLinks, COMPANY_INFO, getWhatsAppLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4 group">
              <Globe className="w-8 h-8 text-sky-400 group-hover:text-sky-300 transition-colors" />
              <span className="text-xl font-bold font-heading text-white">
                {COMPANY_INFO.name}
              </span>
            </a>
            <p className="text-sky-200/80 leading-relaxed mb-6 max-w-sm">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sky-200/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm group"
                >
                  <Phone className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                  <span className="text-sky-200/80 group-hover:text-white transition-colors">
                    +{COMPANY_INFO.whatsappNumber}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@nusawander.com"
                  className="flex items-start gap-3 text-sm group"
                >
                  <Mail className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                  <span className="text-sky-200/80 group-hover:text-white transition-colors">
                    hello@nusawander.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-sky-200/80">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sky-800 mt-12 pt-8 text-center">
          <p className="text-sky-200/60 text-sm">
            &copy; 2025 NusaWander Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
