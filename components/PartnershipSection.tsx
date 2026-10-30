"use client";

import React from "react";
import SectionReveal from "./SectionReveal";

export default function PartnershipSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#FCF9F5] border-t border-[#5B0F18]/12 overflow-hidden">
      {/* Subtle Ambient Wine Depth Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#5B0F18]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionReveal>
          {/* Large rounded outer container with subtle thin border and warm cream background */}
          <div className="rounded-3xl sm:rounded-[36px] border border-[#5B0F18]/15 bg-[#FAF7F2] p-6 sm:p-10 lg:p-12 xl:p-14 shadow-soft-card">
            
            {/* Centered Top Heading and Subtitle */}
            <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#6F6261] uppercase font-medium block mb-3">
                // NEW PARTNERSHIP
              </span>
              <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.15] uppercase mb-3">
                AI-POWERED SOLUTIONS<br />
                <span className="text-[#5B0F18]">FOR EVERY BUSINESS.</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-sans text-[#6F6261] font-normal">
                Nine to Nine Hub x Eyakkar Technologies
              </p>
            </div>

            {/* Two equal-height cards displayed side by side on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              
              {/* LEFT CARD — EYAKKAR BRAND CARD */}
              <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#5B0F18]/12 shadow-soft-card overflow-hidden flex flex-col justify-between hover:border-[#5B0F18]/30 transition-all duration-300">
                {/* Logo Area on Top */}
                <div className="py-8 sm:py-10 px-6 flex flex-col items-center justify-center bg-white min-h-[160px] sm:min-h-[180px]">
                  <img
                    src="/images/portfolio/Elogo.png"
                    alt="Eyakkar Technologies"
                    width={200}
                    height={80}
                    className="h-14 sm:h-16 w-auto object-contain max-w-[180px]"
                    loading="lazy"
                  />
                  <div className="mt-3 text-center select-none">
                    <span className="block font-sans font-bold text-[18px] sm:text-[20px] tracking-[0.2em] text-[#0284c7] uppercase">
                      EYAKKAR
                    </span>
                    <span className="block font-sans text-[10px] sm:text-[11px] tracking-[0.25em] text-[#64748b] uppercase font-semibold mt-0.5">
                      TECHNOLOGIES
                    </span>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-[#5B0F18]/10" />

                {/* Company Information, Feature Tags and Bottom Badge */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] sm:text-[12px] font-sans text-[#6F6261] tracking-wider uppercase font-medium block mb-1.5">
                      TECHNOLOGY / AI SOFTWARE
                    </span>
                    <h3 className="text-[24px] sm:text-[28px] font-display font-semibold text-[#24191A] mb-3 leading-snug">
                      Eyakkar Technologies
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[#6F6261] leading-relaxed font-sans mb-6">
                      AI-powered business software covering ERP, POS, automation, forms and PDF tools, backed by our digital marketing services.
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["ERP", "POS", "Automation", "PDF Tools"].map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 py-1.5 rounded-lg border border-[#5B0F18]/15 bg-[#FAF7F2] text-[12px] sm:text-[13px] text-[#24191A] font-medium font-sans shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Divider and STRATEGIC PARTNER Badge */}
                  <div className="border-t border-[#5B0F18]/10 pt-4 flex justify-end">
                    <span className="px-5 py-2 rounded-full bg-[#5B0F18] text-[#F8F1E7] text-[11px] sm:text-[12px] font-sans font-bold tracking-wider uppercase inline-flex items-center shadow-sm">
                      STRATEGIC PARTNER
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD — PARTNERSHIP DESCRIPTION */}
              <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#5B0F18]/12 shadow-soft-card p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between hover:border-[#5B0F18]/30 transition-all duration-300">
                <div>
                  <span className="text-[11px] sm:text-[12px] font-sans text-[#6F6261] tracking-wider uppercase font-medium block mb-4">
                    // TECHNOLOGY PARTNER
                  </span>
                  <h3 className="text-[28px] sm:text-[34px] lg:text-[38px] xl:text-[42px] font-display font-semibold text-[#24191A] leading-[1.2] mb-6 tracking-tight">
                    Software that runs your business. Marketing that grows it.
                  </h3>
                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#6F6261] leading-relaxed font-sans mb-8">
                    We have partnered with Eyakkar Technologies to bring AI-powered business software to UAE companies. ERP, POS, automation, forms and PDF tools, backed by our digital marketing services.
                  </p>
                </div>

                {/* CTA Buttons Row */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-auto pt-4">
                  <a
                    href="https://eyakkar.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#5B0F18] hover:bg-[#430B12] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 shadow-wine hover:shadow-wine-lg transform hover:-translate-y-0.5"
                  >
                    VISIT EYAKKAR
                  </a>
                  <a
                    href="https://eyakkar.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#5B0F18]/25 hover:border-[#5B0F18] text-[#24191A] font-sans text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow transform hover:-translate-y-0.5"
                  >
                    START A PROJECT
                  </a>
                </div>
              </div>

            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
