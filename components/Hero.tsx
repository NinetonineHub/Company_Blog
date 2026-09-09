"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Hero3DCanvas from "./Hero3DCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#FCF9F5] pt-28 pb-16 lg:pt-32 lg:pb-24 border-b border-[#5B0F18]/12 overflow-hidden flex flex-col justify-between select-none">
      {/* Ambient Radial Wine Glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_50%_50%,rgba(91,15,24,0.08)_0%,rgba(248,241,231,0)_70%)] pointer-events-none z-0" />

      {/* Fine Tech Grid Overlay Texture */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full flex-grow flex flex-col justify-between items-center text-center">
        
        {/* TOP: EYEBROW BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white border border-[#5B0F18]/18 text-[#5B0F18] font-mono text-xs font-bold tracking-widest uppercase shadow-xs mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#5B0F18] animate-pulse" />
          <span>// UAE-BASED DIGITAL GROWTH AGENCY</span>
        </motion.div>

        {/* MIDDLE LAYER: LARGE ART-DIRECTED TYPOGRAPHY & OVERLAPPING MEDIUM-SIZED 3D CORE */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center my-2">
          
          {/* BACKGROUND TYPOGRAPHY */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl lg:text-9xl font-display font-extrabold text-[#24191A] tracking-tighter leading-[0.9] text-center uppercase relative z-10"
          >
            WE ENGINEER <br />
            <span className="text-[#5B0F18]">DIGITAL GROWTH.</span>
          </motion.h1>

          {/* FRONT 3D OBJECT CANVAS (Medium Scale Composition, Fully Contained) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full -mt-20 sm:-mt-28 lg:-mt-36 relative z-20 pointer-events-auto flex items-center justify-center"
          >
            <Hero3DCanvas className="h-[420px] sm:h-[540px] lg:h-[640px] max-w-5xl mx-auto px-4" />
          </motion.div>

        </div>

        {/* BOTTOM LAYER: SUPPORTING DESCRIPTION & CTAS */}
        <div className="relative z-30 max-w-2xl mx-auto mt-2 sm:mt-4 flex flex-col items-center">
          
          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[#6F6261] font-sans leading-relaxed mb-8 text-center"
          >
            UAE-based digital growth solutions built around strategy, creativity, technology and measurable results.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#5B0F18] hover:bg-[#430B12] text-[#F8F1E7] font-mono text-xs font-bold tracking-wider shadow-wine transition-all transform hover:-translate-y-0.5"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white border border-[#5B0F18]/30 text-[#5B0F18] hover:bg-[#5B0F18] hover:text-[#F8F1E7] font-mono text-xs font-semibold tracking-wider transition-all shadow-xs"
            >
              <span>EXPLORE SERVICES</span>
            </Link>
          </motion.div>

        </div>

      </div>

      {/* SOFT INTENTIONAL VISUAL TRANSITION ELEMENT */}
      <div className="w-full flex items-center justify-center pt-6 border-t border-[#5B0F18]/12 bg-[#FCF9F5]">
        <div className="flex items-center gap-3 text-[11px] font-mono text-[#6F6261] tracking-widest uppercase font-semibold">
          <span className="w-6 h-[1px] bg-[#5B0F18]" />
          <span>NINE TO NINE HUB // UAE</span>
          <span className="w-6 h-[1px] bg-[#5B0F18]" />
        </div>
      </div>
    </section>
  );
}
