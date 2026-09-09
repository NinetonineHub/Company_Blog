"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";
import { ArrowUp, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#5B0F18] text-[#F8F1E7] pt-20 pb-12 overflow-hidden z-10">
      {/* Background subtle radial accent */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-7xl h-48 bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F8F1E7]/15">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/images/websites/9-9logo.png"
                alt="Nine to Nine Hub Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs font-mono text-[#F8F1E7]/90 tracking-[0.2em] uppercase font-bold pt-1">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-xs text-[#F8F1E7]/80 leading-relaxed max-w-sm font-sans">
              A UAE-based digital growth agency combining strategy, creative media, performance marketing, SEO, and web technology.
            </p>

            <div className="flex items-center gap-3 pt-3">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#F8F1E7]/10 border border-[#F8F1E7]/20 flex items-center justify-center text-[#F8F1E7] hover:bg-[#F8F1E7] hover:text-[#5B0F18] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#F8F1E7]/10 border border-[#F8F1E7]/20 flex items-center justify-center text-[#F8F1E7] hover:bg-[#F8F1E7] hover:text-[#5B0F18] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#F8F1E7]/10 border border-[#F8F1E7]/20 flex items-center justify-center text-[#F8F1E7] hover:bg-[#F8F1E7] hover:text-[#5B0F18] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#F8F1E7]/10 border border-[#F8F1E7]/20 flex items-center justify-center text-[#F8F1E7] hover:bg-[#F8F1E7] hover:text-[#5B0F18] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-[#F8F1E7] tracking-widest uppercase mb-4 font-bold">
              // NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/" className="text-[#F8F1E7]/80 hover:text-white transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#F8F1E7]/80 hover:text-white transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#F8F1E7]/80 hover:text-white transition-colors">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[#F8F1E7]/80 hover:text-white transition-colors">
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-[#F8F1E7]/80 hover:text-white transition-colors">
                  CAREER
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#F8F1E7]/80 hover:text-white transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-[#F8F1E7] tracking-widest uppercase mb-4 font-bold">
              // UAE OPERATIONAL HQ
            </h4>
            <p className="text-xs text-[#F8F1E7]/85 font-mono leading-relaxed">
              {COMPANY_INFO.address}
            </p>
            <p className="text-xs text-[#F8F1E7]/80 font-mono pt-1">
              TEL: <span className="text-white font-bold">{COMPANY_INFO.phone}</span>
            </p>
            <p className="text-xs text-[#F8F1E7]/80 font-mono">
              MAIL: <span className="text-white font-bold">{COMPANY_INFO.email}</span>
            </p>
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono px-3.5 py-1.5 rounded-full bg-[#F8F1E7]/10 border border-[#F8F1E7]/20 text-[#F8F1E7] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                ACCEPTING NEW UAE CLIENT BRANDS
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F8F1E7]/70">
          <span>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. ALL RIGHTS RESERVED.
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#F8F1E7] hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <div className="w-8 h-8 rounded-full bg-[#F8F1E7]/10 border border-[#F8F1E7]/25 flex items-center justify-center text-[#F8F1E7]">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
