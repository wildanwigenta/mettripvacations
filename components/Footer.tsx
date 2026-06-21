"use client";

import { Palmtree, Mail, Phone, AtSign, MapPin } from "lucide-react";
import { navLinks, companyInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <Palmtree className="w-8 h-8 text-sky-400" />
              <span className="text-xl font-bold font-heading text-white">
                MetTrip
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              {companyInfo.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`https://instagram.com/${companyInfo.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <AtSign className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="w-10 h-10 bg-gray-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="w-10 h-10 bg-gray-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
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
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{companyInfo.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{companyInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{companyInfo.email}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <AtSign className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{companyInfo.instagram}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
