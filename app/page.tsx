import React from "react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import SectionReveal from "@/components/SectionReveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const REAL_CLIENTS = [
  "BEYOND NUMBERS",
  "BLUEMOON",
  "CURRY XPRESS",
  "KANZ AL ARAB",
  "NOOR ALTRHAL",
  "TAZA BIRYANI",
  "TAZA MEAT SHOP",
  "VASANTA BHAVAN",
  "GO BUS TOURISM",
];

export default function HomePage() {
  return (
    <>
      {/* 1. Interactive 3D Canvas Hero Section */}
      <Hero />

      {/* 1.5 TRUSTED BY BUSINESSES ACROSS THE UAE MARQUEE SECTION */}
      <section className="relative py-12 bg-white border-b border-[#5B0F18]/12 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center mb-6">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#5B0F18] uppercase font-bold">
            // TRUSTED BY BUSINESSES ACROSS THE UAE
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs sm:text-sm font-display font-extrabold text-[#24191A]/85 uppercase tracking-wider">
            {REAL_CLIENTS.map((client, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span className="hover:text-[#5B0F18] transition-colors cursor-default">{client}</span>
                {idx < REAL_CLIENTS.length - 1 && (
                  <span className="text-[#5B0F18]/40 font-mono text-xs">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SECTION: WHO WE ARE (Open Composition - Soft Background) */}
      <section className="relative py-28 bg-[#FCF9F5] border-b border-[#5B0F18]/12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <SectionReveal className="max-w-4xl mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-[#5B0F18] uppercase block mb-3 font-bold">
              // WHO WE ARE
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#24191A] tracking-tight leading-tight mb-8">
              WE BUILD THE FUTURE <br />
              <span className="text-[#5B0F18]">
                OF DIGITAL GROWTH.
              </span>
            </h2>
            <p className="text-lg text-[#24191A] font-medium leading-relaxed font-sans mb-6">
              {COMPANY_INFO.positioning.aboutDescription}
            </p>
            <p className="text-base text-[#6F6261] leading-relaxed font-sans">
              Operating at the heart of Dubai&apos;s digital ecosystem, Nine to Nine Hub merges data-driven marketing, cinematic video production, search dominance, and Next.js technology into scalable digital growth engines.
            </p>
          </SectionReveal>

          {/* Open Composition Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#5B0F18]/12">
            <SectionReveal delay={0.1}>
              <div className="space-y-2">
                <span className="text-3xl font-display font-extrabold text-[#24191A]">DUBAI, UAE</span>
                <p className="text-xs font-mono text-[#6F6261] uppercase font-bold">Operational Headquarters</p>
                <p className="text-xs text-[#6F6261] leading-relaxed pt-1">
                  Engineered specifically for competitive GCC and international markets.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="space-y-2">
                <span className="text-3xl font-display font-extrabold text-[#5B0F18]">360°</span>
                <p className="text-xs font-mono text-[#6F6261] uppercase font-bold">Full-Funnel Agency Ecosystem</p>
                <p className="text-xs text-[#6F6261] leading-relaxed pt-1">
                  Unifying creative media reels, SEO, paid ads, and high-speed web apps.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="space-y-2">
                <span className="text-3xl font-display font-extrabold text-[#24191A]">8</span>
                <p className="text-xs font-mono text-[#6F6261] uppercase font-bold">Core Service Offerings</p>
                <p className="text-xs text-[#6F6261] leading-relaxed pt-1">
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
            <span className="text-xs font-mono tracking-[0.25em] text-[#5B0F18] uppercase block mb-3 font-bold">
              // AGENCY DIFFERENTIATORS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#24191A] tracking-tight leading-tight">
              WHY NINE TO NINE HUB?
            </h2>
            <p className="text-[#6F6261] text-base font-sans mt-4">
              We replace vanity metrics with real client revenue growth, high organic search rankings, and cinematic visual dominance.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.pillars.slice(0, 4).map((pillar, idx) => (
              <SectionReveal key={pillar.id} delay={idx * 0.08}>
                <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/12 hover:border-[#5B0F18]/40 transition-all h-full flex flex-col justify-between hover:shadow-soft-card">
                  <div>
                    <span className="text-xs font-mono text-[#5B0F18] font-bold block mb-3">
                      // 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-display font-bold text-[#24191A] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#6F6261] leading-relaxed font-sans">
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
            <span className="text-xs font-mono tracking-[0.25em] text-[#5B0F18] uppercase block mb-3 font-bold">
              // READY TO SCALE YOUR BRAND IN DUBAI?
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#24191A] tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
              LET&apos;S BUILD <br />
              <span className="text-[#5B0F18]">
                WHAT&apos;S NEXT.
              </span>
            </h2>
            <p className="text-[#6F6261] max-w-xl mx-auto text-base font-sans mb-10">
              Partner with Nine to Nine Hub for data-driven social media management, local SEO, commercial video promotion, paid ads, and Next.js web development.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#5B0F18] hover:bg-[#430B12] text-[#F8F1E7] font-mono text-sm font-bold tracking-wider shadow-wine transition-all transform hover:-translate-y-0.5"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              
              <Link
                href="/career"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-[#5B0F18]/25 text-[#5B0F18] font-mono text-sm font-semibold tracking-wider hover:bg-[#5B0F18] hover:text-[#F8F1E7] transition-all shadow-sm"
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
