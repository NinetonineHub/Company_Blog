"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const NAV_ITEMS = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "PORTFOLIO", path: "/portfolio" },
  { name: "CAREER", path: "/career" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#F8F1E7]/90 backdrop-blur-xl border-b border-[#5B0F18]/12 shadow-[0_4px_20px_rgba(91,15,24,0.06)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo Asset 9-9logo.png */}
          <Link href="/" className="group flex items-center gap-3 z-50">
            <img
              src="/images/websites/9-9logo.png"
              alt="Nine to Nine Hub Logo"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#FCF9F5]/80 border border-[#5B0F18]/12 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-1.5 text-[12px] sm:text-[13px] lg:text-[14px] tracking-wide font-sans uppercase transition-colors ${
                    isActive ? "text-[#5B0F18] font-semibold" : "text-[#24191A] font-medium hover:text-[#5B0F18]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#5B0F18]/10 border border-[#5B0F18]/30 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#5B0F18] hover:bg-[#430B12] text-[#F8F1E7] text-[12px] sm:text-[13px] lg:text-[14px] font-sans font-semibold tracking-wider shadow-[0_4px_14px_rgba(91,15,24,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-10 h-10 rounded-full bg-[#FCF9F5] border border-[#5B0F18]/15 flex items-center justify-center text-[#24191A] z-50 hover:border-[#5B0F18] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#5B0F18]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#F8F1E7]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between p-8 pt-28"
          >
            {/* Background grid */}
            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

            <div className="flex flex-col gap-6 z-10">
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase font-medium">
                // NAVIGATION MENU
              </span>
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-[24px] sm:text-[28px] lg:text-[30px] font-display font-semibold tracking-tight flex items-center justify-between py-2 border-b border-[#5B0F18]/12 ${
                          isActive ? "text-[#5B0F18]" : "text-[#24191A] hover:text-[#5B0F18]"
                        }`}
                      >
                        <span>{item.name}</span>
                        <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-sans text-[#6F6261]">0{idx + 1}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="z-10 pt-6 flex flex-col gap-4 border-t border-[#5B0F18]/12">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] text-center font-sans font-semibold text-[12px] sm:text-[13px] lg:text-[14px] tracking-wider shadow-wine flex items-center justify-center gap-2"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="flex justify-between text-[12px] sm:text-[13px] lg:text-[14px] text-[#6F6261] font-sans pt-2">
                <span>UAE</span>
                <span>{COMPANY_INFO.phone}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
