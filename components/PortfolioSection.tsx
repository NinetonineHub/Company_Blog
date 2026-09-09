"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES, PortfolioProject } from "@/data/portfolio";
import { ExternalLink, Tag } from "lucide-react";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredProjects =
    selectedCategory === "ALL"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative py-28 bg-[#FCF9F5] border-t border-[#5B0F18]/12 overflow-hidden">
      {/* Ambient Radial Wine Glow */}
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-[#5B0F18]/4 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-[500px] h-[500px] bg-[#5B0F18]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionReveal className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#5B0F18]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#5B0F18] uppercase font-bold">
              // CLIENT PORTFOLIO & CASE STUDIES
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#24191A] tracking-tight leading-tight">
              SELECTED UAE <br />
              <span className="text-[#5B0F18]">
                CLIENT ENGAGEMENTS.
              </span>
            </h2>
            <p className="text-[#6F6261] max-w-md text-sm sm:text-base leading-relaxed font-sans">
              Explore our real client engagements across tax advisory, construction, dining, and travel in the UAE.
            </p>
          </div>
        </SectionReveal>

        {/* Category Filter Buttons */}
        <SectionReveal className="mb-12">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-2 rounded-2xl bg-white border border-[#5B0F18]/12 backdrop-blur-md shadow-sm w-max max-w-full">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 ${
                    isActive ? "text-[#F8F1E7] font-bold" : "text-[#24191A] hover:text-[#5B0F18]"
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-[#5B0F18] rounded-xl shadow-sm z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </SectionReveal>

        {/* 3-Column Responsive Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project: PortfolioProject) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl bg-white border border-[#5B0F18]/12 overflow-hidden flex flex-col justify-between hover:border-[#5B0F18]/35 transition-all duration-500 hover:shadow-soft-card hover:-translate-y-1"
              >
                {/* 1. TOP FULL-COVER IMAGE CONTAINER (Edge-to-Edge, object-fit: cover, subtle scale 1.04 hover zoom) */}
                <div className="relative h-64 sm:h-72 w-full bg-[#FCF9F5] border-b border-[#5B0F18]/10 overflow-hidden select-none">
                  
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/90 border border-[#5B0F18]/15 text-[10px] font-mono text-[#5B0F18] font-bold tracking-widest backdrop-blur-md shadow-xs">
                      {project.number} // {project.category}
                    </span>
                  </div>

                  {/* Full-Cover Prepared Image */}
                  <img
                    src={project.image}
                    alt={project.altText}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                {/* 2. CARD CONTENT DETAILS */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Industry */}
                    <span className="text-[11px] font-mono text-[#6F6261] uppercase tracking-wider font-bold block mb-1">
                      {project.industry}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-extrabold text-[#24191A] group-hover:text-[#5B0F18] transition-colors leading-tight mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#6F6261] leading-relaxed font-sans mb-5">
                      {project.description}
                    </p>

                    {/* Work Scope Service Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.workTags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FCF9F5] border border-[#5B0F18]/12 text-[10px] font-mono text-[#24191A] font-medium"
                        >
                          <Tag className="w-2.5 h-2.5 text-[#5B0F18]" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Website Link or Client Status */}
                  <div className="pt-4 border-t border-[#5B0F18]/12 flex items-center justify-between">
                    {project.websiteUrl ? (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#5B0F18] text-[#F8F1E7] font-mono text-xs font-bold hover:bg-[#430B12] transition-colors shadow-xs"
                      >
                        <span>VISIT WEBSITE</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-[#5B0F18] bg-[#F8F1E7] px-3 py-1.5 rounded-lg border border-[#5B0F18]/12 font-bold uppercase">
                        CLIENT CASE STUDY
                      </span>
                    )}

                    <span className="text-[10px] font-mono text-[#6F6261]">
                      UAE
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
