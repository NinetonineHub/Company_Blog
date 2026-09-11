"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { SERVICES_DATA, Service } from "@/data/services";
import { ArrowUpRight, CheckCircle, X, ExternalLink, Sparkles, Layers, Globe, ShieldCheck, Video } from "lucide-react";

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
      {/* Ambient Glows */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-[#5B0F18]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[450px] h-[450px] bg-[#5B0F18]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionReveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#5B0F18]" />
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase font-medium">
              // OUR SERVICES
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.15]">
              EIGHT DIGITAL <br />
              <span className="text-[#5B0F18]">
                GROWTH SERVICES.
              </span>
            </h2>
            <p className="text-[#6F6261] max-w-md text-[16px] sm:text-[18px] lg:text-[19px] font-sans font-normal leading-relaxed">
              Explore our 8 specialized services engineered to build, position, and scale UAE client brands.
            </p>
          </div>
        </SectionReveal>

        {/* 8 Service Cards Grid (Clean Collapsed View - No Client Chips) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            return (
              <SectionReveal key={service.id} delay={idx * 0.04}>
                <div
                  className="group relative p-6 rounded-2xl bg-white border border-[#5B0F18]/15 hover:border-[#5B0F18]/40 shadow-[0_4px_20px_rgba(91,15,24,0.03)] hover:shadow-[0_10px_30px_rgba(91,15,24,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Top Bar: Number & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-sans font-medium text-[#5B0F18]">
                        {service.number}
                      </span>
                      <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans px-2.5 py-1 rounded-md bg-[#F8F1E7] border border-[#5B0F18]/15 text-[#5B0F18] font-medium tracking-wider">
                        {service.tag}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-display font-semibold text-[#24191A] mb-3 group-hover:text-[#5B0F18] transition-colors leading-[1.25]">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-[15px] sm:text-[16px] text-[#6F6261] leading-relaxed font-sans font-normal">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Premium Wine READ MORE CTA Button sitting naturally closer to description */}
                  <div className="mt-5 pt-4 border-t border-[#5B0F18]/10">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full py-3 px-4 rounded-xl bg-[#5B0F18] text-[#F8F1E7] border border-[#5B0F18] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wider hover:bg-[#430B12] hover:shadow-[0_4px_16px_rgba(91,15,24,0.35)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>READ MORE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F8F1E7] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

      </div>

      {/* EXPANDED READ MORE MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-[#24191A]/60 backdrop-blur-sm z-0"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FFFDF9] border border-[#5B0F18]/20 p-6 sm:p-10 shadow-2xl z-10 my-auto custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close details"
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F8F1E7] border border-[#5B0F18]/20 flex items-center justify-center text-[#24191A] hover:bg-[#5B0F18] hover:text-[#F8F1E7] transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Tag & Number */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-sans font-medium text-[#5B0F18]">
                  {selectedService.number}
                </span>
                <span className="text-xs font-sans tracking-widest px-3 py-1 rounded-md bg-[#F8F1E7] border border-[#5B0F18]/20 text-[#5B0F18] uppercase font-medium">
                  {selectedService.tag}
                </span>
              </div>

              {/* Modal Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-[#24191A] mb-4 leading-tight">
                {selectedService.title}
              </h2>

              {/* Detailed Description */}
              <p className="text-sm sm:text-base lg:text-base text-[#6F6261] leading-relaxed mb-8 font-sans font-normal border-b border-[#5B0F18]/12 pb-6">
                {selectedService.detailedDescription}
              </p>

              {/* DELIVERABLES SECTION */}
              <div className="mb-8">
                <h3 className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans font-medium text-[#5B0F18] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#5B0F18]" />
                  WHAT WE DELIVER
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((del, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#F8F1E7]/50 border border-[#5B0F18]/12 flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-[#5B0F18] shrink-0 mt-0.5" />
                      <span className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#24191A] leading-snug font-sans font-normal">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SPECIAL LAYOUT FOR VIDEO PRODUCTION */}
              {selectedService.id === "video-promotion" && selectedService.clients && (
                <div className="mb-8 pt-6 border-t border-[#5B0F18]/12">
                  <h3 className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans font-medium text-[#5B0F18] uppercase tracking-widest mb-5 flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#5B0F18]" />
                    CLIENT ASSOCIATIONS & VIDEO PROJECTS
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.clients.map((client, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-[#F8F1E7]/40 border border-[#5B0F18]/15 flex flex-col justify-between gap-4 hover:border-[#5B0F18]/30 transition-all"
                      >
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-sans text-[#5B0F18] uppercase tracking-wider block mb-1 font-medium">
                            VIDEO PRODUCTION
                          </span>
                          <h4 className="text-[24px] sm:text-[28px] font-display font-semibold text-[#24191A]">
                            {client.name}
                          </h4>
                        </div>

                        {client.driveUrl && (
                          <div>
                            <a
                              href={client.driveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#5B0F18] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold hover:bg-[#430B12] transition-all shadow-sm group"
                            >
                              <span>VIEW VIDEOS</span>
                              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SPECIAL LAYOUT FOR WEBSITE CREATION */}
              {selectedService.id === "website-creation" && selectedService.websitesCompleted && (
                <div className="mb-8 pt-6 border-t border-[#5B0F18]/12">
                  <h3 className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans font-medium text-[#5B0F18] uppercase tracking-widest mb-5 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#5B0F18]" />
                    WEBSITE PROJECTS & CLIENT ASSOCIATIONS
                  </h3>

                  <div className="space-y-4">
                    {selectedService.websitesCompleted.map((site, i) => (
                      <div
                        key={i}
                        className="p-5 sm:p-6 rounded-2xl bg-[#F8F1E7]/40 border border-[#5B0F18]/15 hover:border-[#5B0F18]/30 transition-all"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-sans text-[#5B0F18] uppercase tracking-wider block mb-1 font-medium">
                              WEBSITE CREATION
                            </span>
                            <h4 className="text-[24px] sm:text-[28px] font-display font-semibold text-[#24191A]">
                              {site.name}
                            </h4>
                          </div>

                          {site.websiteUrl && (
                            <a
                              href={site.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5B0F18] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold hover:bg-[#430B12] transition-all w-max shadow-sm group"
                            >
                              <span>VIEW WEBSITE</span>
                              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                          )}
                        </div>

                        <div className="pt-3 border-t border-[#5B0F18]/10">
                          <span className="text-[10px] sm:text-[11px] font-sans text-[#6F6261] uppercase block mb-2 font-medium tracking-wider">
                            WORK SCOPE:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {site.scope.map((item, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-md bg-white border border-[#5B0F18]/12 text-[12px] text-[#24191A] font-sans font-normal"
                              >
                                {item}
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
              {selectedService.id === "logo-visual-design" && (
                <div className="mb-8 pt-6 border-t border-[#5B0F18]/12">
                  <h3 className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans font-medium text-[#5B0F18] uppercase tracking-widest mb-5 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#5B0F18]" />
                    LOGO DESIGN & BRANDING ASSOCIATIONS
                  </h3>

                  {/* Showcase Grid for Logos */}
                  {selectedService.logoShowcase && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {selectedService.logoShowcase.map((logo, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-2xl bg-[#F8F1E7]/40 border border-[#5B0F18]/15 text-center flex flex-col justify-between"
                        >
                          <div className="relative h-28 w-full rounded-xl bg-white border border-[#5B0F18]/12 flex items-center justify-center p-3 overflow-hidden mb-3">
                            {logo.logoUrl && (
                              <img
                                src={logo.logoUrl}
                                alt={`${logo.name} Logo`}
                                className="max-h-full max-w-full object-contain"
                              />
                            )}
                          </div>
                          <div>
                            <h4 className="text-[24px] font-display font-semibold text-[#24191A] mb-1">
                              {logo.name}
                            </h4>
                            <span className="text-[10px] sm:text-[11px] font-sans text-[#5B0F18] uppercase block font-medium">
                              {logo.scope.join(" • ")}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Additional Branding Clients */}
                  {selectedService.clients && selectedService.clients.length > 0 && (
                    <div className="p-4 rounded-2xl bg-[#F8F1E7]/40 border border-[#5B0F18]/15">
                      <span className="text-[10px] sm:text-[11px] font-sans text-[#5B0F18] uppercase block mb-2 font-medium tracking-wider">
                        BRANDING CLIENTS:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.clients.map((c, i) => (
                          <div
                            key={i}
                            className="px-3 py-2 rounded-xl bg-white border border-[#5B0F18]/12 flex items-center gap-3"
                          >
                            <span className="text-[24px] font-display font-semibold text-[#24191A]">
                              {c.name}
                            </span>
                            <span className="text-[10px] sm:text-[11px] font-sans text-[#5B0F18] px-2 py-0.5 rounded bg-[#F8F1E7] font-medium uppercase">
                              {c.scope.join(" • ")}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* GENERAL CLIENT ASSOCIATIONS FOR OTHER SERVICES (SOCIAL MEDIA, SEO, ETC.) */}
              {selectedService.clients && selectedService.clients.length > 0 && selectedService.id !== "video-promotion" && selectedService.id !== "logo-visual-design" && (
                <div className="mb-8 pt-6 border-t border-[#5B0F18]/12">
                  <h3 className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans font-medium text-[#5B0F18] uppercase tracking-widest mb-5 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#5B0F18]" />
                    CLIENT ASSOCIATIONS & WORK SCOPE
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.clients.map((c, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-[#F8F1E7]/40 border border-[#5B0F18]/15 flex flex-col justify-between gap-2"
                      >
                        <h4 className="text-[24px] font-display font-semibold text-[#24191A]">
                          {c.name}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {c.scope.map((s, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] sm:text-[11px] font-sans text-[#5B0F18] bg-white border border-[#5B0F18]/12 px-2 py-0.5 rounded font-medium"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer CTA */}
              <div className="pt-6 border-t border-[#5B0F18]/12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-sans text-[#6F6261]">
                  DISCUSS THIS SERVICE FOR YOUR UAE BRAND
                </span>
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wider hover:bg-[#430B12] shadow-wine text-center transition-all"
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



