"use client";

import React from "react";
import Link from "next/link";
import SectionReveal from "./SectionReveal";
import { ArrowUpRight, Sparkles, Video, Search, Globe, Palette, Zap } from "lucide-react";

const PACKAGES = [
  {
    id: "starter",
    number: "01",
    label: "01 // STARTER GROWTH",
    title: "STARTER",
    isRecommended: false,
    features: [
      {
        title: "ACCOUNT HANDLING",
        value: "3 Accounts: Instagram, Facebook, Google My Business (GMB)",
      },
      {
        title: "CONTENT DELIVERABLES",
        value: "8 High-Quality Posters + 6 Professionally Edited Reels",
      },
      {
        title: "VIDEO PRODUCTION",
        value: "1 Day Professional On-Site Video Shoot",
      },
      {
        title: "CONTENT STRATEGY",
        value: "Monthly Content Calendar & Strategic Planning",
      },
      {
        title: "PAID ADS MANAGEMENT",
        value: "Included",
        subtext: "Ad spend is handled separately by the client",
      },
      {
        title: "LEAD GENERATION",
        value: "Included",
        subtext: "Sales Funnel & Target Lead Strategy",
      },
      {
        title: "COMMUNITY MANAGEMENT",
        value: "DM Handling & Active Audience Engagement",
      },
      {
        title: "ON-SITE SUPPORT",
        value: "Weekly Once In-Person Client Visit",
      },
    ],
  },
  {
    id: "business-scale",
    number: "02",
    label: "02 // BUSINESS SCALE",
    title: "BUSINESS SCALE",
    isRecommended: true,
    badge: "RECOMMENDED FOR GROWING BRANDS",
    features: [
      {
        title: "ACCOUNT HANDLING",
        value: "4 Accounts: Instagram, Facebook, Google My Business (GMB), YouTube",
      },
      {
        title: "CONTENT DELIVERABLES",
        value: "10 High-Quality Posters + 8 Professionally Edited Reels",
      },
      {
        title: "VIDEO PRODUCTION",
        value: "2 Days Professional On-Site Video Shoot",
      },
      {
        title: "CONTENT STRATEGY",
        value: "Monthly Content Calendar & Strategic Planning",
      },
      {
        title: "PAID ADS MANAGEMENT",
        value: "Included",
        subtext: "Ad spend is handled separately by the client",
      },
      {
        title: "LEAD GENERATION",
        value: "Included",
        subtext: "Sales Funnel & Target Lead Strategy",
      },
      {
        title: "COMMUNITY MANAGEMENT",
        value: "DM Handling & Active Audience Engagement",
      },
      {
        title: "ON-SITE SUPPORT",
        value: "Weekly Once In-Person Client Visit",
      },
    ],
  },
  {
    id: "ultimate-enterprise",
    number: "03",
    label: "03 // ULTIMATE ENTERPRISE",
    title: "ULTIMATE ENTERPRISE",
    isRecommended: false,
    features: [
      {
        title: "ACCOUNT HANDLING",
        value: "5 Accounts: Instagram, Facebook, Google My Business (GMB), LinkedIn, YouTube",
      },
      {
        title: "CONTENT DELIVERABLES",
        value: "12 High-Quality Posters + 12 Professionally Edited Reels",
      },
      {
        title: "VIDEO PRODUCTION",
        value: "2 Days Professional On-Site Video Shoot",
      },
      {
        title: "CONTENT STRATEGY",
        value: "Monthly Content Calendar & Strategic Planning",
      },
      {
        title: "PAID ADS MANAGEMENT",
        value: "Included",
        subtext: "Ad spend is handled separately by the client",
      },
      {
        title: "LEAD GENERATION",
        value: "Included",
        subtext: "Sales Funnel & Target Lead Strategy",
      },
      {
        title: "COMMUNITY MANAGEMENT",
        value: "DM Handling & Active Audience Engagement",
      },
      {
        title: "ON-SITE SUPPORT",
        value: "Weekly Once In-Person Client Visit",
      },
    ],
  },
];

const ADDITIONAL_SERVICES = [
  {
    icon: Video,
    title: "VIDEO PROMOTION & SHOOT",
    description: "Raw shooting, concept direction & professional equipment.",
  },
  {
    icon: Search,
    title: "SEO — BASIC",
    description: "Essential search engine optimization & local keyword strategy.",
  },
  {
    icon: Zap,
    title: "SEO — ADVANCE",
    description: "Comprehensive technical SEO, backlink strategy & ranking acceleration.",
  },
  {
    icon: Globe,
    title: "WEBSITE CREATION",
    description: "Custom responsive website layout built for mobile and conversion.",
  },
  {
    icon: Palette,
    title: "LOGO & VISUAL DESIGN",
    description: "Professional vector logo design, branding assets & color identity.",
  },
];

export default function GrowthPackagesSection() {
  return (
    <section id="packages" className="relative py-24 sm:py-28 bg-[#F8F1E7] border-t border-[#5B0F18]/12 overflow-hidden select-none">
      {/* Background Ambient Wine Glow Blur Effect */}
      <div className="absolute right-1/3 top-1/4 w-[600px] h-[600px] bg-[#5B0F18]/4 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 w-[500px] h-[500px] bg-[#5B0F18]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Title Header */}
        <SectionReveal className="mb-16 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#5B0F18]" />
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase font-medium">
              // GROWTH PACKAGES
            </span>
            <span className="w-8 h-[2px] bg-[#5B0F18]" />
          </div>

          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.08] mb-6">
            PACKAGES BUILT <br />
            <span className="text-[#5B0F18]">TO SCALE.</span>
          </h2>

          <p className="text-[#6F6261] text-[16px] sm:text-[18px] lg:text-[19px] max-w-2xl mx-auto font-sans font-normal leading-relaxed">
            Choose the level of digital growth support that fits your business. Every package combines strategy, creative execution, performance marketing, and ongoing digital support.
          </p>
        </SectionReveal>

        {/* 3 Main Package Cards Grid (Desktop 3 Cols, Mobile/Tablet Stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <SectionReveal key={pkg.id} delay={idx * 0.08} className="h-full">
              <div className={`wine-glow-card h-full flex flex-col ${pkg.isRecommended ? 'ring-2 ring-[#5B0F18]/40' : ''}`}>
                <div className="wine-glow-card-inner p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    {/* Header Label & Recommended Accent */}
                    <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                      <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] font-medium uppercase">
                        {pkg.label}
                      </span>

                      {pkg.isRecommended && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5B0F18] text-[#F8F1E7] text-[10px] sm:text-[11px] lg:text-[12px] font-sans font-semibold tracking-wider uppercase shadow-sm">
                          <Sparkles className="w-3 h-3 text-[#F8F1E7]" />
                          RECOMMENDED FOR GROWING BRANDS
                        </span>
                      )}
                    </div>

                    {/* Card Title */}
                    <h3 className="text-[25px] sm:text-[30px] lg:text-[34px] font-display font-semibold text-[#24191A] mb-6 pb-3 border-b border-[#5B0F18]/15 tracking-tight">
                      {pkg.title}
                    </h3>

                    {/* Compact Seamless Feature List without Horizontal Dividers */}
                    <div className="space-y-3.5 mb-8">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="feature-item">
                          <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-wider text-[#5B0F18] uppercase font-medium block mb-0.5">
                            {feat.title}
                          </span>

                          <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-sans font-normal text-[#24191A] leading-snug">
                            {feat.value}
                          </p>

                          {feat.subtext && (
                            <span className="block text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#6F6261] mt-0.5 italic">
                              ({feat.subtext})
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* GET A QUOTE Button */}
                  <div className="pt-5 border-t border-[#5B0F18]/12">
                    <Link
                      href="/contact"
                      className="group/btn w-full py-3.5 px-6 rounded-xl bg-[#5B0F18] hover:bg-[#430B12] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wider transition-all duration-300 shadow-wine flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                    >
                      <span>GET A QUOTE</span>
                      <ArrowUpRight className="w-4 h-4 text-[#F8F1E7] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* PACKAGE 04 — ADDITIONAL SERVICES (Spans Full Width Below Grid) */}
        <SectionReveal delay={0.25} className="mb-16">
          <div className="wine-glow-card">
            <div className="wine-glow-card-inner p-7 sm:p-9">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 mb-6 border-b border-[#5B0F18]/12 gap-4">
                <div>
                  <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] font-medium uppercase block mb-1">
                    04 // STANDALONE SOLUTIONS
                  </span>
                  <h3 className="text-[25px] sm:text-[30px] lg:text-[34px] font-display font-semibold text-[#24191A]">
                    ADDITIONAL SERVICES
                  </h3>
                </div>

                <Link
                  href="/contact"
                  className="group/btn inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#5B0F18] hover:bg-[#430B12] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wider transition-all shadow-wine w-max transform hover:-translate-y-0.5 shrink-0"
                >
                  <span>GET A QUOTE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F8F1E7] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* 5 Standalone Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {ADDITIONAL_SERVICES.map((serv, sIdx) => {
                  const Icon = serv.icon;
                  return (
                    <div
                      key={sIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-[#FCF9F5] border border-[#5B0F18]/10 hover:border-[#5B0F18]/30 transition-all duration-300 flex items-start gap-4 hover:-translate-y-1 hover:shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#5B0F18]/10 border border-[#5B0F18]/20 flex items-center justify-center text-[#5B0F18] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <h4 className="text-[24px] font-display font-semibold text-[#24191A] mb-1 leading-snug">
                          {serv.title}
                        </h4>
                        <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-sans font-normal text-[#6F6261] leading-relaxed">
                          {serv.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* BOTTOM CTA SECTION */}
        <SectionReveal delay={0.3}>
          <div className="rounded-3xl bg-white border border-[#5B0F18]/15 p-8 sm:p-12 text-center shadow-soft-card max-w-4xl mx-auto relative overflow-hidden">
            {/* Ambient Wine Accent Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5B0F18]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase font-medium block mb-3">
                NOT SURE WHICH PACKAGE FITS?
              </span>

              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-display font-semibold text-[#24191A] mb-6">
                Let&apos;s build the right growth system for your business.
              </h3>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-[#5B0F18] hover:bg-[#430B12] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wider shadow-wine transition-all transform hover:-translate-y-0.5"
              >
                <span>LET&apos;S TALK GROWTH</span>
                <ArrowUpRight className="w-4 h-4 text-[#F8F1E7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
