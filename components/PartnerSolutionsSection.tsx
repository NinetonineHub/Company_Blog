"use client";

import React from "react";
import SectionReveal from "./SectionReveal";

interface SolutionCard {
  number: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  partner: string;
}

const PARTNER_SOLUTIONS: SolutionCard[] = [
  {
    number: "01",
    category: "ERP & OPERATIONS",
    title: "ERP",
    description: "Run inventory, stock and daily operations from one system, with fewer manual errors.",
    deliverables: [
      "Inventory management",
      "Warehouse barcode scanning",
      "Sales & purchase tracking",
      "Reports & dashboards",
    ],
    partner: "Eyakkar Technologies",
  },
  {
    number: "02",
    category: "POINT OF SALE",
    title: "POS",
    description: "Fast billing and order management for shops, cafes, laundries and service businesses.",
    deliverables: [
      "Billing & invoicing",
      "Laundry POS (WashSlots)",
      "Customer & order tracking",
      "Daily sales reports",
    ],
    partner: "Eyakkar Technologies",
  },
  {
    number: "03",
    category: "AI AUTOMATION",
    title: "Automation",
    description: "Replace repetitive manual work with AI-powered workflows that save time.",
    deliverables: [
      "Workflow automation",
      "AI invoice processing (IDP)",
      "Fewer manual errors",
      "Integration with your tools",
    ],
    partner: "Eyakkar Technologies",
  },
  {
    number: "04",
    category: "FORMS & DATA",
    title: "Forms",
    description: "Smart forms and datasheets that collect clean, organised business data.",
    deliverables: [
      "Custom online forms",
      "A4 datasheet maker",
      "Digital records & storage",
      "Easy data export",
    ],
    partner: "Eyakkar Technologies",
  },
  {
    number: "05",
    category: "DOCUMENT TOOLS",
    title: "PDF Tools",
    description: "Handle PDFs and invoices quickly, without switching between multiple tools.",
    deliverables: [
      "Convert & edit PDFs",
      "Merge & split documents",
      "Extract data from invoices",
      "Print-ready documents",
    ],
    partner: "Eyakkar Technologies",
  },
];

export default function PartnerSolutionsSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#F8F1E7] border-t border-[#5B0F18]/12 overflow-hidden select-none">
      {/* Subtle Ambient Wine Depth Glow */}
      <div className="absolute right-1/4 top-1/3 w-[600px] h-[500px] bg-[#5B0F18]/4 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/3 w-[500px] h-[400px] bg-[#5B0F18]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionReveal className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#5B0F18]" />
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase font-medium">
              // PARTNER SOLUTIONS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.12]">
              AI-POWERED BUSINESS <br />
              <span className="text-[#5B0F18]">SOFTWARE.</span>
            </h2>
            <p className="text-[#6F6261] max-w-md text-[14px] sm:text-[15px] lg:text-[16px] font-sans font-normal leading-relaxed">
              Practical software solutions from our partner Eyakkar Technologies, built to simplify operations, automate workflows and cut manual errors. Backed by our digital marketing services.
            </p>
          </div>
        </SectionReveal>

        {/* Five Equal-Width Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-5 items-stretch mb-8 sm:mb-10">
          {PARTNER_SOLUTIONS.map((card, idx) => (
            <SectionReveal
              key={card.number}
              delay={idx * 0.06}
              className={idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="p-5 xl:p-6 rounded-2xl bg-white border border-[#5B0F18]/12 hover:border-[#5B0F18]/40 shadow-soft-card hover:shadow-[0_8px_24px_rgba(91,15,24,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  {/* Top Row: Number & Category Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[13px] sm:text-[14px] font-sans font-medium text-[#6F6261]">
                      {card.number}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-sans px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#5B0F18]/15 text-[#6F6261] font-medium tracking-wider uppercase whitespace-nowrap">
                      {card.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] sm:text-[25px] xl:text-[28px] font-display font-semibold text-[#24191A] mb-2 leading-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] text-[#6F6261] leading-relaxed font-sans font-normal mb-4 min-h-[48px]">
                    {card.description}
                  </p>

                  {/* Thin Divider */}
                  <div className="border-t border-[#5B0F18]/10 my-4" />

                  {/* Key Deliverables */}
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-sans text-[#24191A] uppercase tracking-wider font-semibold block mb-2.5">
                      KEY DELIVERABLES:
                    </span>
                    <ul className="space-y-2 mb-4">
                      {card.deliverables.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2 text-[12px] sm:text-[13px] text-[#24191A] font-sans leading-snug"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5B0F18] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Thin Divider */}
                  <div className="border-t border-[#5B0F18]/10 my-4" />

                  {/* Partner Info */}
                  <div className="mb-5">
                    <span className="text-[10px] sm:text-[11px] font-sans text-[#24191A] uppercase tracking-wider font-semibold block mb-1">
                      PARTNER:
                    </span>
                    <p className="text-[12px] sm:text-[13px] font-sans text-[#6F6261] font-normal">
                      {card.partner}
                    </p>
                  </div>
                </div>

                {/* Full-width Wine ENQUIRE NOW Button */}
                <div className="pt-2">
                  <a
                    href="https://eyakkar.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#5B0F18] hover:bg-[#430B12] text-[#F8F1E7] font-sans text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase text-center transition-all duration-300 shadow-wine hover:shadow-wine-lg transform hover:-translate-y-0.5 block"
                  >
                    ENQUIRE NOW
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Full-width Partner CTA Container Below the Five Cards */}
        <SectionReveal delay={0.2}>
          <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#5B0F18]/12 p-6 sm:p-8 lg:p-10 shadow-soft-card flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] sm:text-[11px] font-sans tracking-widest text-[#6F6261] uppercase font-medium block mb-2">
                NOT SURE WHICH SOFTWARE FITS?
              </span>
              <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-display font-semibold text-[#24191A] leading-snug">
                Tell us about your business and we will connect you with the right solution.
              </h3>
            </div>

            <a
              href="https://ninetoninehub.com/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#5B0F18] hover:bg-[#430B12] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 shadow-wine hover:shadow-wine-lg shrink-0 transform hover:-translate-y-0.5"
            >
              TALK TO OUR TEAM
            </a>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
