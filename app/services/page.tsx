import React from "react";
import ServicesSection from "@/components/ServicesSection";
import SectionReveal from "@/components/SectionReveal";
import HeroWireframeBackground from "@/components/HeroWireframeBackground";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export const metadata = {
  title: "Services System | Nine to Nine Hub Dubai",
  description:
    "Explore Nine to Nine Hub's 8 digital growth services: Social Media Management, SEO, Google My Business, Video Promotion, Website Creation, Logo & Visual Design, Ads Management & Lead Generation.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      {/* 2. SERVICES HERO SECTION (Centered with Subtle Wireframe Hands Background) */}
      <section className="relative py-28 sm:py-36 bg-[#F8F1E7] overflow-hidden border-b border-[#5B0F18]/12">
        
        {/* Wireframe Hands Background Artwork */}
        <HeroWireframeBackground />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <SectionReveal className="max-w-4xl mx-auto">
            {/* Eyebrow */}
            <span className="text-xs font-mono tracking-[0.25em] text-[#5B0F18] uppercase block mb-4 font-bold">
              // SERVICES
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#24191A] tracking-tight leading-[1.08] mb-6">
              INTEGRATED SOLUTIONS <br />
              <span className="text-[#5B0F18]">
                FOR BRAND SCALING.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-[#6F6261] text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed mb-8 font-medium">
              Explore our core digital growth capabilities built specifically for businesses operating in Dubai and the GCC.
            </p>

            {/* Centered CTA */}
            <a
              href="#services-list"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-mono text-xs font-bold tracking-wider hover:bg-[#430B12] shadow-wine transition-all"
            >
              <span>EXPLORE 8 SERVICES</span>
              <ArrowDown className="w-4 h-4 text-[#F8F1E7]" />
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Main 8-Card Interactive Services Section */}
      <div id="services-list">
        <ServicesSection />
      </div>

      {/* Page Bottom CTA */}
      <section className="py-20 bg-white border-t border-[#5B0F18]/12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-extrabold text-[#24191A] mb-4">
            NEED A CUSTOM PLAYBOOK FOR YOUR BRAND?
          </h2>
          <p className="text-sm text-[#6F6261] mb-8 font-sans">
            Contact our Dubai strategy team to build a tailored proposal mapped to your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-mono text-sm font-bold tracking-wider shadow-wine hover:bg-[#430B12] transition-all"
          >
            <span>DISCUSS YOUR PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
