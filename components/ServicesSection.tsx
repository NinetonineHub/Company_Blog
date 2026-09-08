"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { SERVICES_DATA, Service, ClientWork } from "@/data/services";
import { ArrowUpRight, CheckCircle, X, ExternalLink, Sparkles, Layers, Globe, ShieldCheck } from "lucide-react";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedService]);

  return (
    <section className="relative py-28 bg-[#FCF9F5] border-t border-[#5B0F18]/12 overflow-hidden">
      {/* Subtle Wine Atmospheric Background Ambient Glow */}
      <div className="absolute right-0 top-1/4 w-[700px] h-[700px] bg-[#5B0F18]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-[#5B0F18]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionReveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#5B0F18]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#5B0F18] uppercase font-bold">
              // OUR SERVICES
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#24191A] tracking-tight leading-tight">
              EIGHT DIGITAL <br />
              <span className="text-[#5B0F18]">
                GROWTH SERVICES.
              </span>
            </h2>
            <p className="text-[#6F6261] max-w-md text-sm sm:text-base leading-relaxed font-sans">
              Explore our 8 specialized services engineered to build, position, and scale Dubai client brands.
            </p>
          </div>
        </SectionReveal>

        {/* 8 Service Cards Grid (Desktop 4/2 cols, Tablet 2 cols, Mobile 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <SectionReveal key={service.id} delay={idx * 0.04}>
              <div
                className="group relative p-6 rounded-2xl bg-white border border-[#5B0F18]/12 hover:border-[#5B0F18]/40 transition-all duration-300 hover:shadow-soft-card hover:-translate-y-1.5 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Bar: Number & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-mono font-bold text-[#5B0F18] group-hover:scale-110 transition-transform">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#F8F1E7] border border-[#5B0F18]/10 text-[#5B0F18] font-semibold">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-[#24191A] mb-3 group-hover:text-[#5B0F18] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#6F6261] leading-relaxed mb-6 font-sans">
                    {service.shortDescription}
                  </p>
                </div>

                {/* READ MORE Button */}
                <div className="pt-4 border-t border-[#5B0F18]/12">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#F8F1E7] border border-[#5B0F18]/20 text-xs font-mono font-bold text-[#5B0F18] hover:bg-[#5B0F18] hover:text-[#F8F1E7] hover:border-[#5B0F18] transition-all flex items-center justify-center gap-2"
                  >
                    <span>READ MORE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>

      {/* READ MORE DETAILED MODAL PANEL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-[#24191A]/60 backdrop-blur-md z-0"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-[#5B0F18]/25 p-6 sm:p-10 shadow-wine-lg z-10 my-auto custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close details"
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#FCF9F5] border border-[#5B0F18]/15 flex items-center justify-center text-[#24191A] hover:bg-[#5B0F18] hover:text-[#F8F1E7] transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-mono font-bold text-[#5B0F18]">
                  {selectedService.number}
                </span>
                <span className="text-xs font-mono tracking-widest px-3 py-1 rounded-full bg-[#5B0F18]/10 border border-[#5B0F18]/25 text-[#5B0F18] uppercase font-bold">
                  {selectedService.tag}
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#24191A] mb-6 leading-tight">
                {selectedService.title}
              </h2>

              <p className="text-base sm:text-lg text-[#6F6261] leading-relaxed mb-8 font-sans border-b border-[#5B0F18]/12 pb-6">
                {selectedService.detailedDescription}
              </p>

              {/* WHAT WE DELIVER SECTION */}
              <div className="mb-10">
                <h3 className="text-xs font-mono text-[#5B0F18] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#5B0F18]" />
                  WHAT WE DELIVER
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((del, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/10 flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-[#5B0F18] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#24191A] leading-snug font-sans">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SPECIAL LAYOUT FOR WEBSITE CREATION */}
              {selectedService.id === "website-creation" && selectedService.websitesCompleted && (
                <div className="mb-8 pt-6 border-t border-[#5B0F18]/12">
                  <h3 className="text-xs font-mono text-[#5B0F18] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#5B0F18]" />
                    WEBSITES WE HAVE COMPLETED
                  </h3>

                  <div className="space-y-6">
                    {selectedService.websitesCompleted.map((site, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-2xl bg-[#FCF9F5] border border-[#5B0F18]/12 hover:border-[#5B0F18]/30 transition-all"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div>
                            <span className="text-xs font-mono text-[#6F6261] block mb-1">
                              CLIENT 0{i + 1}
                            </span>
                            <h4 className="text-2xl font-display font-bold text-[#24191A]">
                              {site.name}
                            </h4>
                          </div>

                          {site.websiteUrl && (
                            <a
                              href={site.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5B0F18] text-[#F8F1E7] font-mono text-xs font-bold hover:bg-[#430B12] transition-all w-max shadow-sm"
                            >
                              <span>VIEW WEBSITE</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>

                        <div className="pt-3 border-t border-[#5B0F18]/12">
                          <span className="text-[10px] font-mono text-[#6F6261] uppercase block mb-2 font-bold">
                            COMPLETED WORK SCOPE:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {site.scope.map((item, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-md bg-white border border-[#5B0F18]/12 text-xs text-[#24191A] font-mono"
                              >
                                • {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SPECIAL LAYOUT FOR LOGO & VISUAL DESIGN */}
              {selectedService.id === "logo-visual-design" && selectedService.logoShowcase && (
                <div className="mb-8 pt-6 border-t border-[#5B0F18]/12">
                  <h3 className="text-xs font-mono text-[#5B0F18] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#5B0F18]" />
                    LOGO & VISUAL BRAND SHOWCASE
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {selectedService.logoShowcase.map((logo, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-[#FCF9F5] border border-[#5B0F18]/12 text-center flex flex-col justify-between"
                      >
                        <div className="relative h-36 w-full rounded-xl bg-white border border-[#5B0F18]/12 flex items-center justify-center p-4 overflow-hidden mb-4">
                          {logo.logoUrl && (
                            <img
                              src={logo.logoUrl}
                              alt={`${logo.name} Logo`}
                              className="max-h-full max-w-full object-contain"
                            />
                          )}
                        </div>
                        <div>
                          <h4 className="text-base font-display font-bold text-[#24191A] mb-1">
                            {logo.name}
                          </h4>
                          <span className="text-[10px] font-mono text-[#6F6261] uppercase block">
                            {logo.scope.join(" • ")}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* GENERAL CLIENTS COMPLETED WORK LIST FOR OTHER SERVICES */}
              {selectedService.clients && selectedService.clients.length > 0 && selectedService.id !== "website-creation" && (
                <div className="mb-8 pt-6 border-t border-[#5B0F18]/12">
                  <h3 className="text-xs font-mono text-[#24191A] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#5B0F18]" />
                    CLIENTS & COMPLETED WORK
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.clients.map((c, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/12 flex items-center justify-between"
                      >
                        <div>
                          <h4 className="text-sm font-display font-bold text-[#24191A]">
                            {c.name}
                          </h4>
                          <span className="text-[10px] font-mono text-[#6F6261] uppercase">
                            {c.scope.join(" • ")}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#5B0F18]/10 border border-[#5B0F18]/25 text-[#5B0F18]">
                          COMPLETED
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer CTA */}
              <div className="pt-6 border-t border-[#5B0F18]/12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#6F6261]">
                  DISCUSS THIS SERVICE FOR YOUR DUBAI BRAND
                </span>
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-mono text-xs font-bold tracking-wider hover:bg-[#430B12] shadow-wine text-center transition-all"
                >
                  START A PROJECT FOR THIS SERVICE
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
