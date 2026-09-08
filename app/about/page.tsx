import React from "react";
import AboutSection from "@/components/AboutSection";
import SectionReveal from "@/components/SectionReveal";
import HeroWireframeBackground from "@/components/HeroWireframeBackground";
import { ArrowDown } from "lucide-react";

export const metadata = {
  title: "About Us | Nine to Nine Hub Dubai",
  description:
    "Discover Nine to Nine Hub — Dubai's visionary digital growth agency bridging strategy, performance marketing, video production, and software development.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      {/* 1. ABOUT HERO SECTION (Centered with Subtle Wireframe Hands Background) */}
      <section className="relative py-28 sm:py-36 bg-[#F8F1E7] overflow-hidden border-b border-[#5B0F18]/12">
        
        {/* Wireframe Hands Background Artwork */}
        <HeroWireframeBackground />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <SectionReveal className="max-w-4xl mx-auto">
            {/* Eyebrow */}
            <span className="text-xs font-mono tracking-[0.25em] text-[#5B0F18] uppercase block mb-4 font-bold">
              // ABOUT NINE TO NINE HUB
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#24191A] tracking-tight leading-[1.08] mb-6">
              ARCHITECTS OF <br />
              <span className="text-[#5B0F18]">
                DIGITAL TRANSFORMATION.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-[#6F6261] text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed mb-8 font-medium">
              Nine to Nine Hub is a Dubai-based digital agency focused on data-driven growth, creative execution, and high-performance technology.
            </p>

            {/* Centered CTA Button */}
            <a
              href="#about-content"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-mono text-xs font-bold tracking-wider hover:bg-[#430B12] shadow-wine transition-all"
            >
              <span>EXPLORE AGENCY VISION</span>
              <ArrowDown className="w-4 h-4 text-[#F8F1E7]" />
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Main About Sections (Vision & Mission, Core Values, Leadership, Team Directory & Final CTA) */}
      <div id="about-content">
        <AboutSection />
      </div>
    </div>
  );
}
