"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionReveal from "./SectionReveal";
import { INDIA_ROLES, UAE_ROLES, COMPANY_VALUES } from "@/data/careers";
import {
  MapPin,
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import JobApplicationForm from "./JobApplicationForm";

export default function CareerSection() {
  const [activeLocation, setActiveLocation] = useState<"India" | "UAE">("India");

  const handleLocationToggle = (loc: "India" | "UAE") => {
    setActiveLocation(loc);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#FCF9F5] border-t border-[#5B0F18]/12 overflow-hidden">
      {/* Background Ambient Wine Glows */}
      <div className="absolute left-1/4 top-1/4 w-[500px] h-[500px] bg-[#5B0F18]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] bg-[#5B0F18]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* 1. VISIBLE BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center justify-center gap-2 text-xs font-sans text-[#6F6261]">
            <li>
              <Link href="/" className="hover:text-[#5B0F18] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#5B0F18]/40">
              /
            </li>
            <li>
              <span className="text-[#5B0F18] font-semibold" aria-current="page">
                Careers
              </span>
            </li>
          </ol>
        </nav>

        {/* 2. CAREER HERO INTRO */}
        <SectionReveal className="mb-16 sm:mb-20 text-center max-w-4xl mx-auto">
          <span className="text-[11px] sm:text-[12px] font-sans tracking-[0.25em] text-[#5B0F18] uppercase mb-3 block font-semibold">
            // JOIN OUR TEAM
          </span>
          <h1
            className="font-display font-semibold text-[#24191A] tracking-tight leading-[1.1] mb-6 select-text"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4.25rem)",
              overflowWrap: "normal",
              wordBreak: "normal",
              hyphens: "none",
            }}
          >
            Digital Marketing Careers in{" "}
            <span className="text-[#5B0F18]">Dubai & India</span>
          </h1>
          <p className="text-[#6F6261] text-[16px] sm:text-[18px] max-w-2xl mx-auto leading-relaxed font-sans font-normal mb-8">
            Nine to Nine Hub is hiring for open digital marketing and creative positions.
            We have active opportunities across our Dubai headquarters and our India
            production teams. Explore our open roles in SEO, social media, design, video
            editing and administration. Learn more{" "}
            <Link
              href="/about"
              className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12]"
            >
              About Nine to Nine Hub
            </Link>
            , explore{" "}
            <Link
              href="/services"
              className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12]"
            >
              Our Services
            </Link>
            , or view{" "}
            <Link
              href="/portfolio"
              className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12]"
            >
              Our Work
            </Link>{" "}
            to see what we build.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#open-positions"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-sans text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#430B12] shadow-wine transition-all"
            >
              <span>Explore Open Positions</span>
              <ArrowDown className="w-4 h-4 text-[#F8F1E7]" />
            </a>
            <a
              href="#application-form-block"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white border border-[#5B0F18]/25 text-[#5B0F18] font-sans text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#5B0F18]/5 transition-all shadow-xs"
            >
              <span>Submit Application</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </SectionReveal>

        {/* 3. WHAT WE VALUE SECTION */}
        <section className="mb-20">
          <SectionReveal className="text-center mb-10 max-w-2xl mx-auto">
            <span className="text-[11px] sm:text-[12px] font-sans text-[#5B0F18] uppercase tracking-widest block mb-2 font-semibold">
              // OUR CULTURE
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-display font-semibold text-[#24191A] tracking-tight">
              Our Core Workplace Values
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#5B0F18]/12 backdrop-blur-md hover:border-[#5B0F18]/30 transition-all hover:shadow-soft-card"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5B0F18]/10 border border-[#5B0F18]/25 flex items-center justify-center text-[#5B0F18] mb-4 font-sans font-semibold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-[20px] sm:text-[24px] font-display font-semibold text-[#24191A] mb-2">
                  {val.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#6F6261] leading-relaxed font-sans font-normal">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. WHY WORK WITH US SECTION */}
        <section className="mb-20 pt-12 border-t border-[#5B0F18]/10">
          <div className="max-w-4xl mx-auto">
            <SectionReveal className="text-center mb-8">
              <span className="text-[11px] sm:text-[12px] font-sans text-[#5B0F18] uppercase tracking-widest block mb-2 font-semibold">
                // TEAM EXPERIENCE
              </span>
              <h2 className="text-[28px] sm:text-[36px] font-display font-semibold text-[#24191A] tracking-tight">
                Why Work With Us?
              </h2>
            </SectionReveal>

            <SectionReveal>
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card space-y-4 text-[15px] sm:text-[16px] text-[#6F6261] font-sans leading-relaxed">
                <p>
                  Nine to Nine Hub brings commercial strategy, creative storytelling,
                  search engine marketing, and modern web development together. Working
                  with our team means contributing directly to real client campaigns
                  across Dubai, Abu Dhabi, and the wider GCC region.
                </p>
                <p>
                  Our work environment emphasizes practical skill development and direct
                  execution. Rather than isolated tasks, team members collaborate across
                  SEO, social media management, graphic design, video editing, and software
                  engineering.
                </p>
                <p>
                  You work on varied projects spanning restaurants, hospitality brands,
                  travel agencies, construction firms, and corporate advisory clients. We
                  value transparent communication, mutual accountability, and continuous
                  learning through collective teamwork.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* 5. HOW TO APPLY SECTION */}
        <section className="mb-20 pt-12 border-t border-[#5B0F18]/10">
          <SectionReveal className="text-center mb-10 max-w-2xl mx-auto">
            <span className="text-[11px] sm:text-[12px] font-sans text-[#5B0F18] uppercase tracking-widest block mb-2 font-semibold">
              // RECRUITMENT STEPS
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-display font-semibold text-[#24191A] tracking-tight">
              How to Apply
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/12 shadow-soft-card">
              <div className="w-8 h-8 rounded-lg bg-[#5B0F18]/10 text-[#5B0F18] flex items-center justify-center font-bold text-xs mb-3 font-sans">
                01
              </div>
              <h3 className="text-base font-display font-semibold text-[#24191A] mb-2">
                Explore Open Roles
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                Review active vacancies across our Dubai and India locations to find an opening that aligns with your professional background.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/12 shadow-soft-card">
              <div className="w-8 h-8 rounded-lg bg-[#5B0F18]/10 text-[#5B0F18] flex items-center justify-center font-bold text-xs mb-3 font-sans">
                02
              </div>
              <h3 className="text-base font-display font-semibold text-[#24191A] mb-2">
                Review Role Details
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                Visit the specific job page to review responsibilities, required technical skills, and everyday expectations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/12 shadow-soft-card">
              <div className="w-8 h-8 rounded-lg bg-[#5B0F18]/10 text-[#5B0F18] flex items-center justify-center font-bold text-xs mb-3 font-sans">
                03
              </div>
              <h3 className="text-base font-display font-semibold text-[#24191A] mb-2">
                Submit Your Resume
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                Fill out the application form with your contact details, resume (.pdf, .doc, .docx), and an introductory cover note.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/12 shadow-soft-card">
              <div className="w-8 h-8 rounded-lg bg-[#5B0F18]/10 text-[#5B0F18] flex items-center justify-center font-bold text-xs mb-3 font-sans">
                04
              </div>
              <h3 className="text-base font-display font-semibold text-[#24191A] mb-2">
                Profile Review
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                Our talent acquisition team evaluates candidate qualifications and reaches out to shortlisted candidates for discovery meetings.
              </p>
            </div>
          </div>
        </section>

        {/* 6. JOB OPPORTUNITIES SECTION (BOTH TABS SERVER-RENDERED IN HTML) */}
        <section id="open-positions" className="mb-24 pt-12 border-t border-[#5B0F18]/10 scroll-mt-24">
          <SectionReveal className="mb-10 text-center">
            <span className="text-[11px] sm:text-[12px] font-sans tracking-[0.2em] text-[#5B0F18] uppercase block mb-3 font-semibold">
              // CAREER OPPORTUNITIES
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-display font-semibold text-[#24191A] tracking-tight mb-6">
              Open Positions in Dubai & India
            </h2>

            {/* LOCATION SELECTOR / TOGGLE: [ INDIA ] [ UAE ] */}
            <div className="flex items-center justify-center gap-3 p-2 rounded-2xl bg-white border border-[#5B0F18]/15 w-max mx-auto mb-6 shadow-sm">
              <button
                type="button"
                onClick={() => handleLocationToggle("India")}
                className={`relative px-8 py-3 rounded-xl text-[12px] sm:text-[13px] font-sans font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  activeLocation === "India"
                    ? "bg-[#5B0F18] text-[#F8F1E7] shadow-wine"
                    : "bg-transparent text-[#24191A] hover:text-[#5B0F18]"
                }`}
              >
                <span>INDIA ({INDIA_ROLES.length})</span>
              </button>

              <button
                type="button"
                onClick={() => handleLocationToggle("UAE")}
                className={`relative px-8 py-3 rounded-xl text-[12px] sm:text-[13px] font-sans font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  activeLocation === "UAE"
                    ? "bg-[#5B0F18] text-[#F8F1E7] shadow-wine"
                    : "bg-transparent text-[#24191A] hover:text-[#5B0F18]"
                }`}
              >
                <span>UAE / DUBAI ({UAE_ROLES.length})</span>
              </button>
            </div>

            {/* Indicator */}
            <div className="flex items-center justify-center gap-2 text-xs font-sans text-[#6F6261]">
              <MapPin className="w-4 h-4 text-[#5B0F18]" />
              <span className="font-semibold text-[#24191A] uppercase">
                {activeLocation === "UAE" ? "Dubai, UAE" : "India"}
              </span>
              <span className="text-[#6F6261]">•</span>
              <span className="px-3 py-1 rounded-full bg-white border border-[#5B0F18]/15 font-semibold text-[#5B0F18] shadow-sm">
                {activeLocation === "UAE" ? UAE_ROLES.length : INDIA_ROLES.length} OPEN ROLES
              </span>
            </div>
          </SectionReveal>

          {/* CRITICAL SEO REQUIREMENT: BOTH INDIA AND UAE JOB CARDS EXIST IN SERVER-RENDERED HTML */}
          {/* INDIA ROLES PANEL */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
              activeLocation === "India" ? "block" : "hidden"
            }`}
          >
            {INDIA_ROLES.map((role) => (
              <div
                key={role.id}
                className="group p-6 rounded-2xl bg-white border border-[#5B0F18]/12 hover:border-[#5B0F18]/40 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-soft-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-sans px-2.5 py-1 rounded bg-[#F8F1E7] border border-[#5B0F18]/10 text-[#5B0F18] font-medium">
                      Location: {role.city}, {role.country}
                    </span>
                    <span className="text-[11px] font-sans px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-300 text-emerald-700 font-medium">
                      {role.status}
                    </span>
                  </div>

                  <h3 className="text-[22px] sm:text-[24px] font-display font-semibold text-[#24191A] mb-2 leading-tight group-hover:text-[#5B0F18] transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-[11px] font-sans text-[#5B0F18] uppercase tracking-wider mb-3 font-medium">
                    Department: {role.department}
                  </p>
                  <p className="text-[13px] font-sans text-[#6F6261] leading-relaxed mb-6 line-clamp-3">
                    {role.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#5B0F18]/10">
                  <Link
                    href={`/career/${role.slug}`}
                    className="w-full py-2.5 rounded-xl bg-[#5B0F18] text-[#F8F1E7] hover:bg-[#430B12] text-[12px] sm:text-[13px] font-sans font-semibold transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Apply for {role.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* UAE / DUBAI ROLES PANEL */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-6 ${
              activeLocation === "UAE" ? "block" : "hidden"
            }`}
          >
            {UAE_ROLES.map((role) => (
              <div
                key={role.id}
                className="group p-6 rounded-2xl bg-white border border-[#5B0F18]/12 hover:border-[#5B0F18]/40 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-soft-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-sans px-2.5 py-1 rounded bg-[#F8F1E7] border border-[#5B0F18]/10 text-[#5B0F18] font-medium">
                      Location: {role.city}, {role.country}
                    </span>
                    <span className="text-[11px] font-sans px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-300 text-emerald-700 font-medium">
                      {role.status}
                    </span>
                  </div>

                  <h3 className="text-[22px] sm:text-[24px] font-display font-semibold text-[#24191A] mb-2 leading-tight group-hover:text-[#5B0F18] transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-[11px] font-sans text-[#5B0F18] uppercase tracking-wider mb-3 font-medium">
                    Department: {role.department}
                  </p>
                  <p className="text-[13px] font-sans text-[#6F6261] leading-relaxed mb-6 line-clamp-3">
                    {role.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#5B0F18]/10">
                  <Link
                    href={`/career/${role.slug}`}
                    className="w-full py-2.5 rounded-xl bg-[#5B0F18] text-[#F8F1E7] hover:bg-[#430B12] text-[12px] sm:text-[13px] font-sans font-semibold transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Apply for {role.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. CAREER APPLICATION FORM */}
        <section className="max-w-3xl mx-auto pt-6 mb-24">
          <SectionReveal>
            <JobApplicationForm />
          </SectionReveal>
        </section>

        {/* 8. QUESTIONS ABOUT WORKING WITH US (FAQ SECTION) */}
        <section className="pt-12 border-t border-[#5B0F18]/10">
          <SectionReveal className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-[11px] sm:text-[12px] font-sans text-[#5B0F18] uppercase tracking-widest block mb-2 font-semibold">
              // FAQ
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-display font-semibold text-[#24191A] tracking-tight">
              Questions About Working With Us
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
              <h3 className="text-base sm:text-lg font-display font-semibold text-[#24191A] mb-2.5">
                How can I apply for a job at Nine to Nine Hub?
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                Select your preferred position on this page or visit the individual role listing. Fill out the application form with your contact details, resume, and introductory message.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
              <h3 className="text-base sm:text-lg font-display font-semibold text-[#24191A] mb-2.5">
                Which locations currently have open positions?
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                We currently have active openings across our Dubai headquarters (UAE) as well as our India operational divisions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
              <h3 className="text-base sm:text-lg font-display font-semibold text-[#24191A] mb-2.5">
                Can I apply for more than one position?
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                Yes. If your skills bridge multiple disciplines (for example, video editing and motion design), you may submit an application outlining your multidisciplinary background.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
              <h3 className="text-base sm:text-lg font-display font-semibold text-[#24191A] mb-2.5">
                What file formats are accepted for resumes?
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                Our application form securely accepts .pdf, .doc, and .docx formats up to 10MB in file size.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/15 shadow-soft-card md:col-span-2">
              <h3 className="text-base sm:text-lg font-display font-semibold text-[#24191A] mb-2.5">
                How can I contact the recruitment team?
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                For recruitment questions or follow-ups, visit our{" "}
                <Link
                  href="/contact"
                  className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12]"
                >
                  Contact Page
                </Link>{" "}
                to connect with our Dubai office by email, phone, or WhatsApp.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
