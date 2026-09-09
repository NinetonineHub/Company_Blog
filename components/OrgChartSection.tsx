"use client";

import React from "react";
import SectionReveal from "./SectionReveal";

// Sales Executives Team Data
const SALES_EXECUTIVES = [
  { id: "arasu-sales", name: "ARASU", role: "SALES EXECUTIVE" },
  { id: "abdul-sales", name: "ABDUL", role: "SALES EXECUTIVE" },
  { id: "mithun-sales", name: "MITHUN", role: "SALES EXECUTIVE" },
];

// Execution Team Data (6 Sibling Members)
const EXECUTION_TEAM = [
  { id: "manoshree", name: "MANOSHREE", role: "DIGITAL MARKETING EXECUTIVE" },
  { id: "varshii", name: "VARSHII", role: "WEBPAGE DESIGNER" },
  { id: "yadhu", name: "YADHU", role: "SEO SPECIALIST" },
  { id: "kaviyaras", name: "KAVIYARAS", role: "VIDEO EDITOR" },
  { id: "somya", name: "SOMYA", role: "SENIOR VIDEO EDITOR" },
  { id: "ganesh-pranesh", name: "GANESH,", name2: "PRANESH", role: "WEB DEVELOPMENT" },
];

export default function OrgChartSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F8F1E7] border-b border-[#5B0F18]/12 overflow-hidden select-none">
      
      {/* STATIC CLEAN BACKGROUND: Faint Architectural Line Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION INTRO */}
        <SectionReveal className="mb-16 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#5B0F18]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#5B0F18] uppercase font-bold">
              // OUR ORGANIZATION
            </span>
            <span className="w-8 h-[2px] bg-[#5B0F18]" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#24191A] tracking-tight leading-tight mb-4">
            THE TEAM BEHIND <br />
            <span className="text-[#5B0F18]">THE HUB.</span>
          </h2>

          <p className="text-[#6F6261] text-base sm:text-lg font-sans max-w-xl mx-auto font-medium">
            A clear leadership and execution structure built for efficient, high-quality digital growth.
          </p>
        </SectionReveal>

        {/* ORGANIZATIONAL FLOWCHART CONTAINER */}
        <div className="flex flex-col items-center">
          
          {/* LEVEL 1 — RIAS (Clean Static Outer Glass Card + INSET Running Line) */}
          <SectionReveal className="w-full max-w-2xl">
            <div className="relative rounded-3xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-soft-card p-2 sm:p-2.5">
              {/* INSET RUNNING GRADIENT LINE FRAME */}
              <div className="card-inset-light-lead">
                <div className="inset-surface p-7 sm:p-9 text-center relative overflow-hidden bg-arch-grid rounded-[calc(1.25rem-1.8px)]">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5B0F18]/8 border border-[#5B0F18]/15 text-[10px] font-mono text-[#5B0F18] font-bold uppercase tracking-widest mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F18]" />
                    // PRINCIPAL LEADERSHIP
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-[#24191A] mb-2 tracking-tight">
                    RIAS
                  </h3>

                  <p className="text-xs font-mono text-[#5B0F18] font-bold uppercase tracking-widest mb-4">
                    PRINCIPAL SHAREHOLDER &amp; CHIEF DECISION MAKER
                  </p>

                  <p className="text-xs sm:text-sm text-[#6F6261] font-sans leading-relaxed font-medium max-w-xl mx-auto">
                    Rias is the primary decision maker and principal financial backbone of ninetoninehub. Beyond providing visionary financial backing, he shapes the company’s long-term business vision, operational strategy, and future expansion plans. His strategic leadership and decisive direction ensure sustained growth, digital innovation, and long-term success for our clients across the GCC.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* STATIC CONNECTOR 1 -> 2 */}
          <div className="flex flex-col items-center my-1.5">
            <div className="w-[2px] h-9 bg-[#5B0F18]" />
            <div className="w-2 h-2 rotate-45 border-r-2 border-b-2 border-[#5B0F18] -mt-1.5" />
          </div>

          {/* LEVEL 2 — KHISHORE */}
          <SectionReveal className="w-full max-w-2xl" delay={0.08}>
            <div className="relative rounded-3xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-soft-card p-2 sm:p-2.5">
              {/* INSET RUNNING GRADIENT LINE FRAME */}
              <div className="card-inset-light-lead">
                <div className="inset-surface p-7 sm:p-9 text-center relative overflow-hidden bg-arch-grid rounded-[calc(1.25rem-1.8px)]">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5B0F18]/8 border border-[#5B0F18]/15 text-[10px] font-mono text-[#5B0F18] font-bold uppercase tracking-widest mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F18]" />
                    // EXECUTIVE DIRECTION
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-[#24191A] mb-2 tracking-tight">
                    KHISHORE
                  </h3>

                  <p className="text-xs font-mono text-[#5B0F18] font-bold uppercase tracking-widest mb-4">
                    FOUNDER &amp; OPERATIONS DIRECTOR
                  </p>

                  <p className="text-xs sm:text-sm text-[#6F6261] font-sans leading-relaxed font-medium max-w-xl mx-auto">
                    As the Founder and Operations Director of ninetoninehub, Khishore is the main driving force behind our daily business operations. He works directly with our clients to understand their needs and build strong partnerships. Leading our execution teams, he ensures every project is delivered with high quality and speed. His hands-on leadership keeps our company focused on real growth and business success across the UAE and the GCC.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* STATIC CONNECTOR 2 -> 3 */}
          <div className="flex flex-col items-center my-1.5">
            <div className="w-[2px] h-9 bg-[#5B0F18]" />
            <div className="w-2 h-2 rotate-45 border-r-2 border-b-2 border-[#5B0F18] -mt-1.5" />
          </div>

          {/* LEVEL 3 — SALES EXECUTIVES (Group Box: Arasu, Abdul, Mithun) */}
          <SectionReveal className="w-full max-w-xl" delay={0.12}>
            <div className="relative rounded-3xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-soft-card p-2 sm:p-2.5">
              <div className="card-inset-light-lead">
                <div className="inset-surface p-6 sm:p-7 text-center relative overflow-hidden bg-arch-grid rounded-[calc(1.25rem-1.8px)]">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5B0F18]/8 border border-[#5B0F18]/15 text-[10px] font-mono text-[#5B0F18] font-bold uppercase tracking-widest mb-4">
                    // SALES EXECUTIVES
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#24191A] mb-4 tracking-tight">
                    SALES EXECUTIVES
                  </h3>

                  {/* 3 Grouped Members */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {SALES_EXECUTIVES.map((member) => (
                      <div
                        key={member.id}
                        className="relative rounded-xl bg-[#F8F1E7]/80 border border-[#5B0F18]/12 p-3 text-center transition-all duration-300 hover:border-[#5B0F18]/30"
                      >
                        <h4 className="text-sm font-display font-extrabold text-[#24191A]">
                          {member.name}
                        </h4>
                        <p className="text-[9px] font-mono text-[#5B0F18] font-bold uppercase tracking-wider mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* STATIC CONNECTOR 3 -> 4 */}
          <div className="flex flex-col items-center my-1.5">
            <div className="w-[2px] h-9 bg-[#5B0F18]" />
            <div className="w-2 h-2 rotate-45 border-r-2 border-b-2 border-[#5B0F18] -mt-1.5" />
          </div>

          {/* LEVEL 4 — ZAINAB */}
          <SectionReveal className="w-full max-w-md" delay={0.16}>
            <div className="relative rounded-3xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-soft-card p-2 sm:p-2">
              <div className="card-inset-light-med">
                <div className="inset-surface p-5 sm:p-6 text-center relative overflow-hidden bg-arch-grid rounded-[calc(1.15rem-1.5px)]">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#5B0F18]/8 border border-[#5B0F18]/15 text-[9px] font-mono text-[#5B0F18] font-bold uppercase tracking-widest mb-2">
                    // ADMINISTRATION
                  </div>

                  <h3 className="text-2xl font-display font-extrabold text-[#24191A] mb-1">
                    ZAINAB
                  </h3>

                  <p className="text-xs font-mono text-[#5B0F18] font-bold uppercase tracking-widest">
                    ADMIN
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* STATIC CONNECTOR 4 -> 5 (VERTICAL DROP FROM ZAINAB TO HORIZONTAL BRANCH BAR) */}
          <div className="flex flex-col items-center my-1.5">
            <div className="w-[2px] h-9 bg-[#5B0F18]" />
            <div className="w-2 h-2 rotate-45 border-r-2 border-b-2 border-[#5B0F18] -mt-1.5" />
          </div>

          {/* LEVEL 5 — PARALLEL SIBLING TEAM GROUPS: EXECUTION TEAM & TELECALLING */}
          
          {/* DESKTOP LAYOUT (lg screens and up) */}
          <div className="hidden lg:block w-full mt-1.5">
            
            {/* Split Branching Horizontal Bar under Zainab */}
            <div className="relative w-full pt-4">
              {/* Horizontal line extending between Execution Team center (37.5%) and Telecalling center (87.5%) */}
              <div className="absolute top-0 left-[37.5%] right-[12.5%] h-[2px] bg-[#5B0F18]" />
              {/* Central junction dot directly under Zainab's connector line */}
              <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#5B0F18] border-2 border-[#F8F1E7] z-10" />

              <div className="grid grid-cols-12 gap-6 items-start">
                
                {/* 1. EXECUTION TEAM GROUP (Spans 9 columns, center at 37.5%) */}
                <div className="col-span-9 flex flex-col items-center">
                  {/* Drop line from horizontal bar */}
                  <div className="w-[2px] h-5 bg-[#5B0F18] -mt-4 mb-1" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B0F18] mb-1.5" />

                  {/* EXECUTION TEAM HEADER NODE */}
                  <SectionReveal className="w-full max-w-xs mb-3" delay={0.20}>
                    <div className="relative rounded-xl bg-[#5B0F18] border border-[#5B0F18] shadow-wine p-1 text-center">
                      <div className="card-inset-light-node">
                        <div className="relative z-10 py-2.5 px-5 bg-[#5B0F18] rounded-[calc(0.65rem-1.5px)]">
                          <span className="text-xs font-mono tracking-[0.25em] font-extrabold uppercase block text-[#F8F1E7]">
                            EXECUTION TEAM
                          </span>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>

                  {/* 6 Execution Team Sibling Members */}
                  <div className="w-full relative pt-4">
                    <div className="absolute top-0 left-[8.33%] right-[8.33%] h-[2px] bg-[#5B0F18]" />
                    <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#5B0F18]" />

                    <div className="grid grid-cols-6 gap-2.5 relative z-10">
                      {EXECUTION_TEAM.map((member, idx) => (
                        <SectionReveal key={member.id} delay={0.22 + idx * 0.03}>
                          <div className="relative flex flex-col items-center">
                            <div className="w-[2px] h-4 bg-[#5B0F18] -mt-4 mb-1" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#5B0F18] mb-1.5" />

                            <div className="relative w-full rounded-2xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-sm p-1.5">
                              <div className="card-inset-light-team">
                                <div className="inset-surface p-3 text-center flex flex-col justify-center min-h-[110px] relative overflow-hidden bg-arch-grid rounded-[calc(1rem-1.5px)]">
                                  <h4 className="text-xs font-display font-extrabold text-[#24191A] leading-snug">
                                    {member.name}
                                  </h4>
                                  {member.name2 && (
                                    <h4 className="text-xs font-display font-extrabold text-[#24191A] leading-snug">
                                      {member.name2}
                                    </h4>
                                  )}
                                  {!member.name2 && <div className="mb-0.5" />}
                                  <p className="text-[9px] font-mono text-[#5B0F18] font-bold uppercase tracking-wider leading-relaxed">
                                    {member.role}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SectionReveal>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. TELECALLING GROUP (Spans 3 columns, center at 87.5%) — SIBLING AT SAME LEVEL */}
                <div className="col-span-3 flex flex-col items-center">
                  {/* Drop line from horizontal bar */}
                  <div className="w-[2px] h-5 bg-[#5B0F18] -mt-4 mb-1" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B0F18] mb-1.5" />

                  {/* TELECALLING HEADER NODE */}
                  <SectionReveal className="w-full max-w-xs mb-3" delay={0.24}>
                    <div className="relative rounded-xl bg-[#5B0F18] border border-[#5B0F18] shadow-wine p-1 text-center">
                      <div className="card-inset-light-node">
                        <div className="relative z-10 py-2.5 px-5 bg-[#5B0F18] rounded-[calc(0.65rem-1.5px)]">
                          <span className="text-xs font-mono tracking-[0.25em] font-extrabold uppercase block text-[#F8F1E7]">
                            TELECALLING
                          </span>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>

                  {/* Single Telecalling Group Card (Vignesh + Thenmozhi together) */}
                  <div className="w-full relative pt-4">
                    <SectionReveal delay={0.26}>
                      <div className="relative flex flex-col items-center w-full">
                        <div className="w-[2px] h-4 bg-[#5B0F18] -mt-4 mb-1" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5B0F18] mb-1.5" />

                        <div className="relative w-full rounded-2xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-sm p-1.5">
                          <div className="card-inset-light-team">
                            <div className="inset-surface p-3.5 text-center flex flex-col justify-center min-h-[110px] relative overflow-hidden bg-arch-grid rounded-[calc(1rem-1.5px)]">
                              <h4 className="text-xs font-display font-extrabold text-[#24191A] leading-snug">
                                VIGNESH, 
                              </h4>
                              <h4 className="text-xs font-display font-extrabold text-[#24191A] mb-1 leading-snug">
                                THENMOZHI
                              </h4>
                              <p className="text-[9px] font-mono text-[#5B0F18] font-bold uppercase tracking-wider leading-relaxed">
                                TELECALLING
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SectionReveal>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RESPONSIVE MOBILE & TABLET LAYOUT (< lg screens) */}
          <div className="lg:hidden w-full max-w-2xl mt-1.5">
            
            {/* Split Branching Horizontal Bar under Zainab */}
            <div className="relative w-full pt-4 mb-6">
              <div className="absolute top-0 left-[25%] right-[25%] h-[2px] bg-[#5B0F18]" />
              <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#5B0F18] border-2 border-[#F8F1E7] z-10" />

              <div className="grid grid-cols-2 gap-4 items-start">
                
                {/* 1. EXECUTION TEAM HEADER NODE */}
                <div className="flex flex-col items-center">
                  <div className="w-[2px] h-4 bg-[#5B0F18] -mt-4 mb-1" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B0F18] mb-1.5" />

                  <SectionReveal className="w-full mb-2" delay={0.20}>
                    <div className="relative rounded-xl bg-[#5B0F18] border border-[#5B0F18] shadow-wine p-1 text-center">
                      <div className="card-inset-light-node">
                        <div className="relative z-10 py-2 px-2.5 bg-[#5B0F18] rounded-[calc(0.65rem-1.5px)]">
                          <span className="text-[10px] sm:text-xs font-mono tracking-[0.15em] font-extrabold uppercase block text-[#F8F1E7]">
                            EXECUTION TEAM
                          </span>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                </div>

                {/* 2. TELECALLING HEADER NODE */}
                <div className="flex flex-col items-center">
                  <div className="w-[2px] h-4 bg-[#5B0F18] -mt-4 mb-1" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B0F18] mb-1.5" />

                  <SectionReveal className="w-full mb-2" delay={0.24}>
                    <div className="relative rounded-xl bg-[#5B0F18] border border-[#5B0F18] shadow-wine p-1 text-center">
                      <div className="card-inset-light-node">
                        <div className="relative z-10 py-2 px-2.5 bg-[#5B0F18] rounded-[calc(0.65rem-1.5px)]">
                          <span className="text-[10px] sm:text-xs font-mono tracking-[0.15em] font-extrabold uppercase block text-[#F8F1E7]">
                            TELECALLING
                          </span>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                </div>

              </div>
            </div>

            {/* Content Cards for Execution Team and Telecalling */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Execution Team Members: 6 Siblings */}
              <div className="md:col-span-8 flex flex-col items-center w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                  {EXECUTION_TEAM.map((member, idx) => (
                    <SectionReveal key={`m-${member.id}`} delay={0.22 + idx * 0.03} className="relative">
                      <div className="relative w-full rounded-2xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-sm p-1.5">
                        <div className="card-inset-light-team">
                          <div className="inset-surface p-3 text-center flex flex-col justify-center min-h-[100px] relative overflow-hidden bg-arch-grid rounded-[calc(1rem-1.5px)]">
                            <h4 className="text-xs font-display font-extrabold text-[#24191A] leading-snug">
                              {member.name}
                            </h4>
                            {member.name2 && (
                              <h4 className="text-xs font-display font-extrabold text-[#24191A] leading-snug">
                                {member.name2}
                              </h4>
                            )}
                            {!member.name2 && <div className="mb-0.5" />}
                            <p className="text-[9px] font-mono text-[#5B0F18] font-bold uppercase tracking-wider leading-relaxed">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>

              {/* Telecalling Single Card */}
              <div className="md:col-span-4 flex flex-col items-center w-full">
                <SectionReveal delay={0.26} className="w-full">
                  <div className="relative w-full rounded-2xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-sm p-1.5">
                    <div className="card-inset-light-team">
                      <div className="inset-surface p-4 text-center flex flex-col justify-center min-h-[100px] relative overflow-hidden bg-arch-grid rounded-[calc(1rem-1.5px)]">
                        <h4 className="text-xs sm:text-sm font-display font-extrabold text-[#24191A] leading-snug">
                          VIGNESH, 
                        </h4>
                        <h4 className="text-xs sm:text-sm font-display font-extrabold text-[#24191A] mb-1 leading-snug">
                          THENMOZHI
                        </h4>
                        <p className="text-[9px] sm:text-[10px] font-mono text-[#5B0F18] font-bold uppercase tracking-wider leading-relaxed">
                          TELECALLING
                        </p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

