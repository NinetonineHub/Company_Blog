"use client";

import React from "react";
import SectionReveal from "./SectionReveal";
import OrgChartSection from "./OrgChartSection";
import Link from "next/link";
import { ArrowUpRight, Target, Eye } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="bg-[#F8F1E7]">
      
      {/* 1. VISION + MISSION SECTION (Solid Wine #5B0F18 Containers with Cream #F8F1E7 Text) */}
      <section className="relative py-20 sm:py-28 border-b border-[#5B0F18]/12 bg-[#FCF9F5]">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#5B0F18]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <SectionReveal className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase font-medium block mb-3">
              // OUR PURPOSE
            </span>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.15]">
              VISION & MISSION
            </h2>
          </SectionReveal>

          {/* Two-Column Solid Wine #5B0F18 Editorial Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* COMPANY VISION (Entire Container Solid Wine #5B0F18) */}
            <SectionReveal>
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#5B0F18] text-[#F8F1E7] border border-[#5B0F18] shadow-wine-lg flex flex-col justify-between group transition-all">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#F8F1E7]/80 font-medium uppercase tracking-widest">
                      COMPANY VISION
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F8F1E7]/15 border border-[#F8F1E7]/20 flex items-center justify-center text-[#F8F1E7]">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-display font-semibold text-[#F8F1E7] mb-4">
                    OUR VISION
                  </h3>

                  <p className="text-[16px] sm:text-[18px] lg:text-[19px] text-[#F8F1E7] font-sans leading-relaxed font-normal">
                    &ldquo;To be the premier ROI-driven digital growth partner for SMEs and enterprises in the UAE.&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F8F1E7]/20 text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#F8F1E7]/80 flex items-center gap-2 font-medium tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#F8F1E7]" />
                  ARCHITECTING UAE DIGITAL FUTURES
                </div>
              </div>
            </SectionReveal>

            {/* OUR MISSION (Entire Container Solid Wine #5B0F18) */}
            <SectionReveal delay={0.1}>
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#5B0F18] text-[#F8F1E7] border border-[#5B0F18] shadow-wine-lg flex flex-col justify-between group transition-all">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#F8F1E7]/80 font-medium uppercase tracking-widest">
                      OUR MISSION
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F8F1E7]/15 border border-[#F8F1E7]/20 flex items-center justify-center text-[#F8F1E7]">
                      <Target className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-display font-semibold text-[#F8F1E7] mb-4">
                    OUR MISSION
                  </h3>

                  <p className="text-[16px] sm:text-[18px] lg:text-[19px] text-[#F8F1E7] font-sans leading-relaxed font-normal">
                    &ldquo;To deliver measurable revenue growth through transparent, high-performance marketing execution.&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F8F1E7]/20 text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#F8F1E7]/80 flex items-center gap-2 font-medium tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#F8F1E7]" />
                  MEASURABLE REVENUE & PERFORMANCE
                </div>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* 2. CORE VALUES SECTION */}
      <section className="relative py-20 sm:py-28 border-b border-[#5B0F18]/12 bg-[#F8F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <SectionReveal className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase font-medium block mb-3">
              // WHAT WE STAND FOR
            </span>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.15]">
              CORE VALUES
            </h2>
          </SectionReveal>

          {/* Exactly 3 Core Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 01: ABSOLUTE TRANSPARENCY */}
            <SectionReveal>
              <div className="group h-full p-8 sm:p-10 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card hover:border-[#5B0F18]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-[32px] sm:text-[36px] lg:text-[40px] font-display font-medium text-[#5B0F18] block mb-6">
                    01
                  </span>

                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-display font-semibold text-[#24191A] mb-4 group-hover:text-[#5B0F18] transition-colors leading-snug">
                    ABSOLUTE TRANSPARENCY
                  </h3>

                  <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#6F6261] leading-relaxed font-sans font-normal">
                    &ldquo;We believe in clear reporting and honest communication. You will always know exactly where your budget is going and the exact ROI it generates.&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#5B0F18]/10 text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#5B0F18] font-medium tracking-widest uppercase">
                  // CLEAR REPORTING & HONEST ROI
                </div>
              </div>
            </SectionReveal>

            {/* CARD 02: RELENTLESS INNOVATION */}
            <SectionReveal delay={0.1}>
              <div className="group h-full p-8 sm:p-10 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card hover:border-[#5B0F18]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-[32px] sm:text-[36px] lg:text-[40px] font-display font-medium text-[#5B0F18] block mb-6">
                    02
                  </span>

                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-display font-semibold text-[#24191A] mb-4 group-hover:text-[#5B0F18] transition-colors leading-snug">
                    RELENTLESS INNOVATION
                  </h3>

                  <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#6F6261] leading-relaxed font-sans font-normal">
                    &ldquo;The digital landscape evolves daily. We stay ahead of the curve, utilizing the latest tools and strategies to ensure your brand never falls behind.&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#5B0F18]/10 text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#5B0F18] font-medium tracking-widest uppercase">
                  // CUTTING-EDGE DIGITAL STRATEGIES
                </div>
              </div>
            </SectionReveal>

            {/* CARD 03: CLIENT-CENTRIC GROWTH */}
            <SectionReveal delay={0.2}>
              <div className="group h-full p-8 sm:p-10 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card hover:border-[#5B0F18]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-[32px] sm:text-[36px] lg:text-[40px] font-display font-medium text-[#5B0F18] block mb-6">
                    03
                  </span>

                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-display font-semibold text-[#24191A] mb-4 group-hover:text-[#5B0F18] transition-colors leading-snug">
                    CLIENT-CENTRIC GROWTH
                  </h3>

                  <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#6F6261] leading-relaxed font-sans font-normal">
                    &ldquo;Your success is our success. We treat your business like our own, dedicating ourselves to custom strategies that deliver tangible, long-term expansion.&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#5B0F18]/10 text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#5B0F18] font-medium tracking-widest uppercase">
                  // DEDICATED PARTNERSHIP FOR SCALING
                </div>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* 3. COMBINED ORGANIZATIONAL FLOWCHART SECTION */}
      <OrgChartSection />

      {/* 4. FINAL CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-[34px] sm:text-[42px] font-display font-semibold text-[#24191A] mb-4">
              READY TO BUILD WHAT&apos;S NEXT?
            </h2>
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#6F6261] mb-8 font-sans max-w-xl mx-auto font-normal">
              Let&apos;s create a digital growth strategy built around your business goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wider shadow-wine hover:bg-[#430B12] transition-all"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>

    </div>
  );
}

