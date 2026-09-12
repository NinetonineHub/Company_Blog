import React from "react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import SectionReveal from "@/components/SectionReveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const CLIENT_LOGOS = [
  // Top Tier: Go Bus Tourism, Taza Meat Shop, Noor Altrhal
  { id: "gobus", name: "Go Bus Tourism", logo: "/images/portfolio/logo (9).webp", animClass: "animate-float-1", offset: "lg:-translate-y-3" },
  { id: "tazameat", name: "Taza Meat Shop", logo: "/images/portfolio/logo (7).webp", animClass: "animate-float-2", offset: "lg:translate-y-4" },
  { id: "noor", name: "Noor Altrhal", logo: "/images/portfolio/logo (6).webp", animClass: "animate-float-3", offset: "lg:-translate-y-2" },
  
  // Middle Tier: Taza Biryani, Curry Xpress (flanking Center Card)
  { id: "tazabiryani", name: "Taza Biryani", logo: "/images/portfolio/logo (5).webp", animClass: "animate-float-2", offset: "lg:translate-y-3" },
  { id: "curryxpress", name: "Curry Xpress", logo: "/images/portfolio/logo (3).webp", animClass: "animate-float-1", offset: "lg:-translate-y-4" },
  
  // Bottom Tier: BlueMoon, Beyond Numbers, Kanz Al Arab, Vasanta Bhavan
  { id: "bluemoon", name: "BlueMoon", logo: "/images/portfolio/logo (2).webp", animClass: "animate-float-3", offset: "lg:translate-y-2" },
  { id: "beyond", name: "Beyond Numbers", logo: "/images/portfolio/logo (1).webp", animClass: "animate-float-1", offset: "lg:-translate-y-2" },
  { id: "kanz", name: "Kanz Al Arab", logo: "/images/portfolio/logo (4).webp", animClass: "animate-float-2", offset: "lg:translate-y-4" },
  { id: "vasanta", name: "Vasanta Bhavan", logo: "/images/portfolio/logo (8).webp", animClass: "animate-float-3", offset: "lg:-translate-y-3" },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Interactive 3D Canvas Hero Section */}
      <Hero />

      {/* 1.5 TRUSTED BY BUSINESSES ACROSS THE UAE — CINEMATIC FLOATING LOGO SHOWCASE */}
      <section className="relative py-20 sm:py-28 bg-[#F8F1E7] border-b border-[#5B0F18]/12 overflow-hidden select-none">
        {/* Subtle Ambient Wine Depth Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#5B0F18]/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Section Heading */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center mb-12 sm:mb-16 relative z-10">
          <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase font-medium block mb-3">
            // SELECTED CLIENTS
          </span>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.15]">
            TRUSTED BY BUSINESSES ACROSS THE UAE
          </h2>
        </div>

        {/* Desktop Orbital Floating Layout (lg+) */}
        <div className="hidden lg:block max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Top Tier (Go Bus Tourism, Taza Meat Shop, Noor Altrhal) */}
          <div className="flex items-center justify-center gap-12 xl:gap-16 mb-12">
            {CLIENT_LOGOS.slice(0, 3).map((client) => (
              <div key={client.id} className={`${client.animClass} ${client.offset}`}>
                <div className="group relative p-1 sm:p-1.5 rounded-[20px] border border-[#5B0F18]/35 hover:border-[#5B0F18] bg-transparent hover:shadow-[0_0_0_1px_rgba(91,15,24,0.25),0_0_25px_rgba(91,15,24,0.28),0_0_50px_rgba(91,15,24,0.12)] hover:scale-[1.05] transition-all duration-400 ease-out flex items-center justify-center cursor-pointer">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-16 sm:h-20 lg:h-24 w-auto max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] object-contain rounded-[18px]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Middle Tier (Taza Biryani — CENTER STATEMENT — Curry Xpress) */}
          <div className="flex items-center justify-center gap-12 xl:gap-16 mb-12">
            {/* Taza Biryani */}
            <div className={`${CLIENT_LOGOS[3].animClass} ${CLIENT_LOGOS[3].offset}`}>
              <div className="group relative p-1 sm:p-1.5 rounded-[20px] border border-[#5B0F18]/35 hover:border-[#5B0F18] bg-transparent hover:shadow-[0_0_0_1px_rgba(91,15,24,0.25),0_0_25px_rgba(91,15,24,0.28),0_0_50px_rgba(91,15,24,0.12)] hover:scale-[1.05] transition-all duration-400 ease-out flex items-center justify-center cursor-pointer">
                <img
                  src={CLIENT_LOGOS[3].logo}
                  alt={`${CLIENT_LOGOS[3].name} logo`}
                  className="h-16 sm:h-20 lg:h-24 w-auto max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] object-contain rounded-[18px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Center Statement Focal Card */}
            <div className="relative px-12 xl:px-16 py-8 rounded-3xl bg-white/80 backdrop-blur-md border border-[#5B0F18]/20 shadow-soft-card text-center min-w-[320px] transform hover:scale-[1.02] transition-transform duration-300">
              <div className="w-10 h-1 bg-[#5B0F18] mx-auto mb-3 rounded-full" />
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-display font-semibold text-[#24191A] tracking-tight leading-tight">
                REAL BRANDS. <br />
                <span className="text-[#5B0F18]">REAL GROWTH.</span>
              </h3>
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#6F6261] uppercase tracking-widest block mt-2 font-medium">
                // UAE PORTFOLIO IMPACT
              </span>
            </div>

            {/* Curry Xpress */}
            <div className={`${CLIENT_LOGOS[4].animClass} ${CLIENT_LOGOS[4].offset}`}>
              <div className="group relative p-1 sm:p-1.5 rounded-[20px] border border-[#5B0F18]/35 hover:border-[#5B0F18] bg-transparent hover:shadow-[0_0_0_1px_rgba(91,15,24,0.25),0_0_25px_rgba(91,15,24,0.28),0_0_50px_rgba(91,15,24,0.12)] hover:scale-[1.05] transition-all duration-400 ease-out flex items-center justify-center cursor-pointer">
                <img
                  src={CLIENT_LOGOS[4].logo}
                  alt={`${CLIENT_LOGOS[4].name} logo`}
                  className="h-16 sm:h-20 lg:h-24 w-auto max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] object-contain rounded-[18px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Bottom Tier (BlueMoon, Beyond Numbers, Kanz Al Arab, Vasanta Bhavan) */}
          <div className="flex items-center justify-center gap-10 xl:gap-14">
            {CLIENT_LOGOS.slice(5, 9).map((client) => (
              <div key={client.id} className={`${client.animClass} ${client.offset}`}>
                <div className="group relative p-1 sm:p-1.5 rounded-[20px] border border-[#5B0F18]/35 hover:border-[#5B0F18] bg-transparent hover:shadow-[0_0_0_1px_rgba(91,15,24,0.25),0_0_25px_rgba(91,15,24,0.28),0_0_50px_rgba(91,15,24,0.12)] hover:scale-[1.05] transition-all duration-400 ease-out flex items-center justify-center cursor-pointer">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-16 sm:h-20 lg:h-24 w-auto max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] object-contain rounded-[18px]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Floating Composition (< lg) */}
        <div className="lg:hidden max-w-5xl mx-auto px-6 sm:px-8 relative z-10 space-y-10">
          {/* Mobile Center Statement */}
          <div className="relative px-8 py-6 rounded-3xl bg-white/80 backdrop-blur-md border border-[#5B0F18]/20 shadow-soft-card text-center max-w-sm mx-auto">
            <div className="w-8 h-1 bg-[#5B0F18] mx-auto mb-2 rounded-full" />
            <h3 className="text-[24px] sm:text-[28px] font-display font-semibold text-[#24191A] tracking-tight leading-tight">
              REAL BRANDS. <br />
              <span className="text-[#5B0F18]">REAL GROWTH.</span>
            </h3>
          </div>

          {/* Mobile Floating Grid of all 9 logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {CLIENT_LOGOS.map((client) => (
              <div key={`m-${client.id}`} className={`${client.animClass}`}>
                <div className="group relative p-1 rounded-[20px] border border-[#5B0F18]/35 hover:border-[#5B0F18] bg-transparent hover:shadow-[0_0_0_1px_rgba(91,15,24,0.25),0_0_25px_rgba(91,15,24,0.28),0_0_50px_rgba(91,15,24,0.12)] hover:scale-[1.05] transition-all duration-400 ease-out flex items-center justify-center h-24 sm:h-28">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-14 sm:h-18 w-auto max-w-full object-contain rounded-[16px]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SECTION: WHO WE ARE (Open Composition - Soft Background) */}
      <section className="relative py-28 bg-[#FCF9F5] border-b border-[#5B0F18]/12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <SectionReveal className="max-w-4xl mb-16">
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase block mb-3 font-medium">
              // WHO WE ARE
            </span>
            <h2 className="text-[38px] sm:text-[54px] lg:text-[68px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.12] mb-8">
              WE BUILD THE FUTURE <br />
              <span className="text-[#5B0F18]">
                OF DIGITAL GROWTH.
              </span>
            </h2>
            <p className="text-[16px] sm:text-[18px] lg:text-[19px] text-[#24191A] font-normal leading-relaxed font-sans mb-6">
              {COMPANY_INFO.positioning.aboutDescription}
            </p>
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#6F6261] leading-relaxed font-sans font-normal">
              Operating at the heart of UAE&apos;s digital ecosystem, Nine to Nine Hub merges data-driven marketing, cinematic video production, search dominance, and Next.js technology into scalable digital growth engines.
            </p>
          </SectionReveal>

          {/* Open Composition Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#5B0F18]/12">
            <SectionReveal delay={0.1}>
              <div className="space-y-2">
                <span className="text-[32px] sm:text-[36px] lg:text-[40px] font-display font-medium text-[#24191A]">UAE</span>
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#6F6261] uppercase font-medium">Operational Headquarters</p>
                <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#6F6261] leading-relaxed pt-1 font-sans font-normal">
                  Engineered specifically for competitive GCC and international markets.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="space-y-2">
                <span className="text-[32px] sm:text-[36px] lg:text-[40px] font-display font-medium text-[#5B0F18]">360°</span>
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#6F6261] uppercase font-medium">Full-Funnel Agency Ecosystem</p>
                <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#6F6261] leading-relaxed pt-1 font-sans font-normal">
                  Unifying creative media reels, SEO, paid ads, and high-speed web apps.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="space-y-2">
                <span className="text-[32px] sm:text-[36px] lg:text-[40px] font-display font-medium text-[#24191A]">8</span>
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#6F6261] uppercase font-medium">Core Service Offerings</p>
                <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#6F6261] leading-relaxed pt-1 font-sans font-normal">
                  Social media management, SEO, GMB, video promotion, web creation, branding, ads & leads.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 3. SECTION: WHAT WE DO (8 Official Services) */}
      <ServicesSection />

      {/* 4. SECTION: SELECTED UAE PROJECTS (9 Real Clients) */}
      <PortfolioSection />

      {/* 5. SECTION: WHY NINE TO NINE HUB */}
      <section className="relative py-28 bg-[#F8F1E7] border-t border-[#5B0F18]/12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <SectionReveal className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase block mb-3 font-medium">
              // AGENCY DIFFERENTIATORS
            </span>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.15]">
              WHY NINE TO NINE HUB?
            </h2>
            <p className="text-[#6F6261] text-[15px] sm:text-[16px] lg:text-[17px] font-sans font-normal mt-4">
              We replace vanity metrics with real client revenue growth, high organic search rankings, and cinematic visual dominance.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.pillars.slice(0, 4).map((pillar, idx) => (
              <SectionReveal key={pillar.id} delay={idx * 0.08}>
                <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/12 hover:border-[#5B0F18]/40 transition-all h-full flex flex-col justify-between hover:shadow-soft-card">
                  <div>
                    <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#5B0F18] font-medium block mb-3 uppercase">
                      // 0{idx + 1}
                    </span>
                    <h3 className="text-[24px] sm:text-[26px] font-display font-semibold text-[#24191A] mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-[#6F6261] leading-relaxed font-sans font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION: LET'S BUILD WHAT'S NEXT CTA Banner */}
      <section className="relative py-28 bg-[#FCF9F5] border-t border-[#5B0F18]/12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <SectionReveal>
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase block mb-3 font-medium">
              // READY TO SCALE YOUR BRAND IN THE UAE?
            </span>
            <h2 className="text-[38px] sm:text-[54px] lg:text-[68px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
              LET&apos;S BUILD <br />
              <span className="text-[#5B0F18]">
                WHAT&apos;S NEXT.
              </span>
            </h2>
            <p className="text-[#6F6261] max-w-xl mx-auto text-[15px] sm:text-[16px] lg:text-[17px] font-sans font-normal mb-10">
              Partner with Nine to Nine Hub for data-driven social media management, local SEO, commercial video promotion, paid ads, and Next.js web development.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#5B0F18] hover:bg-[#430B12] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wider shadow-wine transition-all transform hover:-translate-y-0.5"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              
              <Link
                href="/career"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-[#5B0F18]/25 text-[#5B0F18] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wider hover:bg-[#5B0F18] hover:text-[#F8F1E7] transition-all shadow-sm"
              >
                <span>JOIN OUR TEAM</span>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
