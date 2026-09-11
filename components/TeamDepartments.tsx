"use client";

import React from "react";
import SectionReveal from "./SectionReveal";
import { TEAM_MEMBERS } from "@/data/team";
import { User, Code, Video, Search, Palette, TrendingUp, Briefcase, ShieldCheck } from "lucide-react";

const TEAM_ICONS = [
  Code,
  Video,
  Video,
  Search,
  Palette,
  TrendingUp,
  Briefcase,
  ShieldCheck,
];

export default function TeamDepartments() {
  return (
    <section className="relative py-28 bg-[#F8F1E7] border-t border-[#5B0F18]/12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#5B0F18]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionReveal className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase mb-3 block font-medium">
            // OUR TEAM
          </span>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.15] mb-4">
            EIGHT SPECIALISTS. <br />
            <span className="text-[#6F6261] font-normal">ONE UNIFIED GROWTH ENGINE.</span>
          </h2>
          <p className="text-[#6F6261] text-[15px] sm:text-[16px] lg:text-[17px] font-sans leading-relaxed font-normal">
            Our multi-disciplinary specialists drive strategy, creative media, search optimization, design, and software engineering for UAE brands.
          </p>
        </SectionReveal>

        {/* Elegant 8 Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => {
            const IconComponent = TEAM_ICONS[idx % TEAM_ICONS.length] || User;

            return (
              <SectionReveal key={member.id} delay={idx * 0.05}>
                <div className="group relative p-6 rounded-2xl bg-white border border-[#5B0F18]/12 hover:border-[#5B0F18]/40 transition-all duration-300 hover:shadow-soft-card hover:-translate-y-1 flex flex-col justify-between h-full">
                  {/* Top code tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/15 flex items-center justify-center text-[#5B0F18] group-hover:bg-[#5B0F18] group-hover:text-[#F8F1E7] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-sans text-[#6F6261]">{member.code}</span>
                  </div>

                  <div>
                    <h3 className="text-[24px] sm:text-[28px] font-display font-semibold text-[#24191A] group-hover:text-[#5B0F18] transition-colors mb-1 tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#5B0F18] font-medium uppercase tracking-wider mb-3">
                      {member.role}
                    </p>
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#FCF9F5] border border-[#5B0F18]/10 text-[10px] sm:text-[11px] font-sans text-[#24191A]">
                      {member.department}
                    </span>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
