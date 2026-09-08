import React from "react";
import PortfolioSection from "@/components/PortfolioSection";
import SectionReveal from "@/components/SectionReveal";
import HeroWireframeBackground from "@/components/HeroWireframeBackground";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export const metadata = {
  title: "Portfolio & Case Studies | Nine to Nine Hub Dubai",
  description:
    "Explore Nine to Nine Hub's portfolio across Hospitality, Interior Design, Corporate Real Estate, and Specialized Sectors in Dubai and the GCC.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      {/* 3. PORTFOLIO HERO SECTION (Centered with Subtle Wireframe Hands Background) */}
      <section className="relative py-28 sm:py-36 bg-[#F8F1E7] overflow-hidden border-b border-[#5B0F18]/12">
        
        {/* Wireframe Hands Background Artwork */}
        <HeroWireframeBackground />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <SectionReveal className="max-w-4xl mx-auto">
            {/* Eyebrow */}
            <span className="text-xs font-mono tracking-[0.25em] text-[#5B0F18] uppercase block mb-4 font-bold">
              // CASE STUDIES & WORK
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#24191A] tracking-tight leading-[1.08] mb-6">
              PROOF OF EXCELLENCE <br />
              <span className="text-[#5B0F18]">
                ACROSS SECTORS.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-[#6F6261] text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed mb-8 font-medium">
              Explore our strategic work across Dubai&apos;s luxury hospitality, interior design, corporate real estate, and specialized enterprise markets.
            </p>

            {/* Centered CTA */}
            <a
              href="#portfolio-grid"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-mono text-xs font-bold tracking-wider hover:bg-[#430B12] shadow-wine transition-all"
            >
              <span>EXPLORE CASE STUDIES</span>
              <ArrowDown className="w-4 h-4 text-[#F8F1E7]" />
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Main Portfolio Interactive Grid */}
      <div id="portfolio-grid">
        <PortfolioSection />
      </div>

      {/* Page Bottom CTA */}
      <section className="py-20 bg-white border-t border-[#5B0F18]/12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-extrabold text-[#24191A] mb-4">
            HAVE A PROJECT THAT DEMANDS EXCELLENCE?
          </h2>
          <p className="text-sm text-[#6F6261] mb-8 font-sans">
            Explore how Nine to Nine Hub can transform your brand&apos;s digital presence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-mono text-sm font-bold tracking-wider shadow-wine hover:bg-[#430B12] transition-all"
          >
            <span>START A CASE STUDY DIALOGUE</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
