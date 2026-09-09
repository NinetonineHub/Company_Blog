import React from "react";
import AboutSection from "@/components/AboutSection";
import SectionReveal from "@/components/SectionReveal";
import AboutHero3DCanvas from "@/components/AboutHero3DCanvas";
import HeroWireframeBackground from "@/components/HeroWireframeBackground";
import { ArrowDown } from "lucide-react";

export const metadata = {
  title: "About Us | Nine to Nine Hub UAE",
  description:
    "Discover Nine to Nine Hub — UAE's visionary digital growth agency bridging strategy, performance marketing, video production, and software development.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      {/* 1. ABOUT HERO SECTION WITH 3D WIREFRAME ROCKET */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-[#F8F1E7] overflow-hidden border-b border-[#5B0F18]/12 select-none">
        
        {/* Wireframe Ambient Background Artwork */}
        <HeroWireframeBackground />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Hero Typography & CTA (Col 1 to 7) */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <SectionReveal>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-3 mb-4 justify-center lg:justify-start">
                  <span className="w-6 h-[2px] bg-[#5B0F18]" />
                  <span className="text-xs font-mono tracking-[0.25em] text-[#5B0F18] uppercase font-bold">
                    // ABOUT NINE TO NINE HUB
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#24191A] tracking-tight leading-[1.08] mb-6">
                  ARCHITECTS OF <br />
                  <span className="text-[#5B0F18]">
                    DIGITAL TRANSFORMATION.
                  </span>
                </h1>

                {/* Supporting Description */}
                <p className="text-[#6F6261] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed mb-8 font-medium">
                  Nine to Nine Hub is a UAE-based digital agency focused on data-driven growth, creative execution and high-performance technology.
                </p>

                {/* CTA Button */}
                <div className="flex items-center justify-center lg:justify-start">
                  <a
                    href="#about-content"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-mono text-xs font-bold tracking-wider hover:bg-[#430B12] shadow-wine transition-all"
                  >
                    <span>EXPLORE AGENCY VISION</span>
                    <ArrowDown className="w-4 h-4 text-[#F8F1E7]" />
                  </a>
                </div>
              </SectionReveal>
            </div>

            {/* Right Column: Interactive 3D Digital Wireframe Rocket Canvas (Col 8 to 12) */}
            <div className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[560px] w-full relative">
              <SectionReveal delay={0.15} className="w-full h-full">
                <AboutHero3DCanvas className="w-full h-full" />
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Main About Sections (Vision & Mission, Core Values, Organizational Flowchart & Final CTA) */}
      <div id="about-content">
        <AboutSection />
      </div>
    </div>
  );
}

