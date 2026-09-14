"use client";

import React from "react";
import SectionReveal from "./SectionReveal";

// Sales Executives Team Data (2x2 Grid — 4 Members, Names Only)
const SALES_EXECUTIVES = [
  { id: "farzan-sales", name: "FARZAN" },
  { id: "arasu-sales", name: "ARASU" },
  { id: "athul-sales", name: "ATHUL" },
  { id: "mithun-sales", name: "MITHUN" },
];

// All 9 Team Members in 1 Single Horizontal Row
const TEAM_MEMBERS = [
  { id: "manosree", name: "MANOSREE", role: "DIGITAL MARKETING EXECUTIVE" },
  { id: "varshini", name: "VARSHINI", role: "WEBPAGE DESIGNER" },
  { id: "yadhu", name: "YADHU", role: "SEO SPECIALIST" },
  { id: "kaviyaras", name: "KAVIYARAS", role: "VIDEO EDITOR" },
  { id: "somya", name: "SOMYA", role: "SENIOR VIDEO EDITOR" },
  { id: "ganesh-pranesh", name: "GANESH,", name2: "PRANESH", role: "WEB DEVELOPMENT" },
  { id: "vignesh-thenmozhi", name: "VIGNESH,", name2: "THENMOZHI", role: "TELECALLING" },
  { id: "shiyama", name: "SHIYAMA", role: "GRAPHIC DESIGNER" },
  { id: "kamaraj", name: "KAMARAJ", role: "TESTING" },
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
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase font-medium">
              // OUR ORGANIZATION
            </span>
            <span className="w-8 h-[2px] bg-[#5B0F18]" />
          </div>

          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.15] mb-4">
            THE TEAM BEHIND <br />
            <span className="text-[#5B0F18]">THE HUB.</span>
          </h2>

          <p className="text-[#6F6261] text-[16px] sm:text-[18px] lg:text-[19px] font-sans font-normal max-w-xl mx-auto">
            A clear leadership and execution structure built for efficient, high-quality digital growth.
          </p>
        </SectionReveal>

        {/* ORGANIZATIONAL FLOWCHART CONTAINER */}
        <div className="flex flex-col items-center">
          
          {/* LEVEL 1 — RIAS (Top Leadership Node) */}
          <SectionReveal className="w-full max-w-2xl">
            <div className="relative rounded-3xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-soft-card p-2 sm:p-2.5">
              {/* INSET RUNNING GRADIENT LINE FRAME */}
              <div className="card-inset-light-lead">
                <div className="inset-surface p-7 sm:p-9 text-center relative overflow-hidden bg-arch-grid rounded-[calc(1.25rem-1.8px)]">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5B0F18]/8 border border-[#5B0F18]/15 text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#5B0F18] font-medium uppercase tracking-widest mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F18]" />
                    // PRINCIPAL LEADERSHIP
                  </div>

                  <h3 className="text-[26px] sm:text-[30px] lg:text-[36px] font-display font-medium text-[#24191A] mb-2 tracking-tight">
                    RIAS
                  </h3>

                  <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#5B0F18] font-medium uppercase tracking-widest mb-4">
                    PRINCIPAL SHAREHOLDER &amp; CHIEF DECISION MAKER
                  </p>

                  <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#6F6261] font-sans leading-relaxed font-normal max-w-xl mx-auto">
                    Rias is the primary decision maker and principal financial backbone of ninetoninehub. Beyond providing visionary financial backing, he shapes the company’s long-term business vision, operational strategy, and future expansion plans. His strategic leadership and decisive direction ensure sustained growth, digital innovation, and long-term success for our clients across the GCC.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* CONNECTOR 1 -> LEVEL 2 (RIAS TO KHISHORE) */}
          <div className="flex flex-col items-center my-1.5">
            <div className="w-[2px] h-7 bg-[#5B0F18]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#5B0F18] border-2 border-[#F8F1E7]" />
          </div>

          {/* LEVEL 2 — KHISHORE (Directly below RIAS) */}
          <SectionReveal className="w-full max-w-2xl" delay={0.06}>
            <div className="relative rounded-3xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-soft-card p-2 sm:p-2.5">
              <div className="card-inset-light-lead">
                <div className="inset-surface p-7 sm:p-9 text-center relative overflow-hidden bg-arch-grid rounded-[calc(1.25rem-1.8px)]">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5B0F18]/8 border border-[#5B0F18]/15 text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#5B0F18] font-medium uppercase tracking-widest mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F18]" />
                    // EXECUTIVE DIRECTION
                  </div>

                  <h3 className="text-[26px] sm:text-[30px] lg:text-[36px] font-display font-medium text-[#24191A] mb-2 tracking-tight">
                    KHISHORE
                  </h3>

                  <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#5B0F18] font-medium uppercase tracking-widest mb-4">
                    OPERATIONS DIRECTOR
                  </p>

                  <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#6F6261] font-sans leading-relaxed font-normal max-w-xl mx-auto">
                    As the Operations Director of ninetoninehub, Khishore leads daily operations, client relationships, and execution teams. His hands-on leadership ensures high-quality delivery, strong partnerships, and business growth across Dubai and the GCC.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* CONNECTOR 2 -> LEVEL 3 (KHISHORE TO ZAINAB + SALES EXECUTIVES) */}
          <div className="flex flex-col items-center my-1.5">
            <div className="w-[2px] h-7 bg-[#5B0F18]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#5B0F18] border-2 border-[#F8F1E7]" />
          </div>

          {/* LEVEL 3 — ZAINAB + SALES EXECUTIVES (SAME HORIZONTAL LEVEL) */}
          <div className="w-full max-w-5xl relative">
            {/* Split Branching Horizontal Bar under KHISHORE */}
            <div className="relative w-full pt-4 mb-2">
              <div className="hidden md:block absolute top-0 left-[25%] right-[25%] h-[2px] bg-[#5B0F18]" />
              <div className="hidden md:block absolute top-[-4px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#5B0F18] border-2 border-[#F8F1E7] z-10" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch w-full">
                
                {/* LEFT SIBLING: ZAINAB */}
                <div className="flex flex-col items-center w-full h-full">
                  <div className="hidden md:block w-[2px] h-4 bg-[#5B0F18] -mt-4 mb-1" />
                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#5B0F18] mb-1.5" />

                  <SectionReveal className="w-full h-full" delay={0.10}>
                    <div className="relative rounded-3xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-soft-card p-2 sm:p-2.5 h-full flex flex-col">
                      <div className="card-inset-light-med h-full flex flex-col flex-1">
                        <div className="inset-surface p-6 sm:p-7 text-center relative overflow-hidden bg-arch-grid rounded-[calc(1.25rem-1.8px)] h-full flex flex-col items-center justify-center flex-1">
                          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5B0F18]/8 border border-[#5B0F18]/15 text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#5B0F18] font-medium uppercase tracking-widest mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F18]" />
                            // ADMINISTRATION
                          </div>

                          <h3 className="text-[26px] sm:text-[30px] lg:text-[36px] font-display font-medium text-[#24191A] mb-1.5 tracking-tight">
                            ZAINAB
                          </h3>

                          <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-sans text-[#5B0F18] font-medium uppercase tracking-widest">
                            ADMIN
                          </p>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                </div>

                {/* RIGHT SIBLING: SALES EXECUTIVES GROUP */}
                <div className="flex flex-col items-center w-full h-full">
                  <div className="hidden md:block w-[2px] h-4 bg-[#5B0F18] -mt-4 mb-1" />
                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#5B0F18] mb-1.5" />

                  <SectionReveal className="w-full h-full" delay={0.14}>
                    <div className="relative rounded-3xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-soft-card p-2 sm:p-2.5 h-full flex flex-col">
                      <div className="card-inset-light-lead h-full flex flex-col flex-1">
                        <div className="inset-surface p-5 sm:p-6 text-center relative overflow-hidden bg-arch-grid rounded-[calc(1.25rem-1.8px)] h-full flex flex-col items-center justify-center flex-1">
                          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5B0F18]/8 border border-[#5B0F18]/15 text-[10px] sm:text-[11px] lg:text-[12px] font-sans text-[#5B0F18] font-medium uppercase tracking-widest mb-3">
                            // SALES EXECUTIVES
                          </div>

                          <h3 className="text-[22px] sm:text-[25px] lg:text-[28px] font-display font-medium text-[#24191A] mb-3 tracking-tight">
                            SALES EXECUTIVES
                          </h3>

                          {/* 4 Grouped Members (FARZAN, ARASU, ATHUL, MITHUN) in 2 x 2 Grid — Compact & Elegant */}
                          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
                            {SALES_EXECUTIVES.map((member) => (
                              <div
                                key={member.id}
                                className="relative rounded-xl sm:rounded-2xl bg-[#F8F1E7]/90 border border-[#5B0F18]/15 py-2 px-2 sm:py-2.5 text-center transition-all duration-300 hover:border-[#5B0F18]/40 hover:shadow-xs flex items-center justify-center min-h-[42px] sm:min-h-[46px]"
                              >
                                <h4 className="text-[14px] sm:text-[16px] lg:text-[17px] font-display font-medium text-[#24191A] leading-tight">
                                  {member.name}
                                </h4>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                </div>

              </div>

              {/* Joining Horizontal Bar below Level 3 connecting ZAINAB + SALES EXECUTIVES down to TEAM */}
              <div className="hidden md:block absolute bottom-0 left-[25%] right-[25%] h-[2px] bg-[#5B0F18] translate-y-2" />
              <div className="hidden md:block absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#5B0F18] border-2 border-[#F8F1E7] z-10 translate-y-2" />
            </div>
          </div>

          {/* CONNECTOR LEVEL 3 -> LEVEL 4 (ZAINAB + SALES EXECUTIVES TO TEAM) */}
          <div className="flex flex-col items-center mt-4 mb-1.5">
            <div className="w-[2px] h-9 bg-[#5B0F18]" />
            <div className="w-2 h-2 rotate-45 border-r-2 border-b-2 border-[#5B0F18] -mt-1.5" />
          </div>

          {/* LEVEL 4 — TEAM (ALL 9 MEMBERS IN 1 SINGLE HORIZONTAL LINE) */}
          <div className="w-full max-w-[1400px] flex flex-col items-center">
            
            {/* SINGLE TEAM HEADER NODE */}
            <SectionReveal className="w-full max-w-xs mb-3 text-center" delay={0.18}>
              <div className="relative rounded-xl bg-[#5B0F18] border border-[#5B0F18] shadow-wine p-1 text-center">
                <div className="card-inset-light-node">
                  <div className="relative z-10 py-2.5 px-6 bg-[#5B0F18] rounded-[calc(0.65rem-1.5px)]">
                    <span className="text-[15px] sm:text-[17px] lg:text-[19px] font-display tracking-wider font-semibold uppercase block text-[#F8F1E7]">
                      TEAM
                    </span>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Drop Line into single horizontal branch line connecting all 9 members */}
            <div className="relative w-full pt-4">
              {/* Single Horizontal Connector Line below TEAM spanning across all 9 columns (center of 9 columns: 5.56% to 94.44%) */}
              <div className="hidden lg:block absolute top-0 left-[5.56%] right-[5.56%] h-[2px] bg-[#5B0F18]" />
              <div className="hidden lg:block absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#5B0F18]" />

              {/* 9 Team Members Row — Single Horizontal Line with identical top/bottom alignment */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-2.5 relative z-10 w-full items-stretch">
                {TEAM_MEMBERS.map((member, idx) => {
                  const isPaired = Boolean(member.name2);
                  return (
                    <SectionReveal key={member.id} delay={0.20 + idx * 0.03} className="h-full flex flex-col">
                      <div className="relative flex flex-col items-center w-full h-full">
                        {/* Short vertical connector dropping from the horizontal line directly into card */}
                        <div className="hidden lg:block w-[2px] h-4 bg-[#5B0F18] -mt-4 mb-1" />
                        <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-[#5B0F18] mb-1" />

                        <div className="relative w-full rounded-2xl bg-[#FFFDF9]/90 border border-[#5B0F18]/15 shadow-sm p-1 sm:p-1.5 h-full flex flex-col">
                          <div className="card-inset-light-team h-full flex flex-col flex-1">
                            <div className="inset-surface p-2 sm:p-2.5 text-center flex flex-col justify-center min-h-[110px] sm:min-h-[118px] relative overflow-hidden bg-arch-grid rounded-[calc(1rem-1.5px)] h-full flex-1">
                              <h4
                                className={`${
                                  member.name === "MANOSHREE"
                                    ? "text-[12.5px] sm:text-[13.5px] lg:text-[14.5px] tracking-tight"
                                    : isPaired
                                    ? "text-[12px] sm:text-[13px] lg:text-[14px]"
                                    : "text-[13px] sm:text-[14.5px] lg:text-[15.5px]"
                                } font-display font-medium text-[#24191A] leading-snug break-words`}
                              >
                                {member.name}
                              </h4>
                              {member.name2 && (
                                <h4 className="text-[12px] sm:text-[13px] lg:text-[14px] font-display font-medium text-[#24191A] leading-snug break-words">
                                  {member.name2}
                                </h4>
                              )}
                              {!member.name2 && <div className="mb-0.5" />}
                              <p className="text-[7.5px] sm:text-[8px] lg:text-[8.5px] font-sans text-[#5B0F18] font-medium uppercase tracking-wider leading-relaxed mt-0.5">
                                {member.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SectionReveal>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
