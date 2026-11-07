import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";
import { MapPin, Briefcase, Building, CheckCircle2, ArrowLeft } from "lucide-react";
import { getAllJobs, getJobBySlug } from "@/data/careers";
import SectionReveal from "@/components/SectionReveal";
import JobApplicationForm from "@/components/JobApplicationForm";

interface RolePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const jobs = getAllJobs();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({
  params,
}: RolePageProps): Promise<Metadata> {
  const job = getJobBySlug(params.slug);
  if (!job) {
    return {
      title: "Career Opportunity | Nine to Nine Hub",
    };
  }

  const locationDisplay = job.location === "UAE" ? "Dubai, UAE" : "India";
  const title = `${job.title} (${locationDisplay}) | Careers at Nine to Nine Hub`;
  const description = `${job.title} role in ${locationDisplay} at Nine to Nine Hub. ${job.description.substring(
    0,
    140
  )} Apply online today.`;
  const canonicalUrl = `https://ninetoninehub.com/career/${job.slug}`;

  return {
    metadataBase: new URL("https://ninetoninehub.com"),
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Nine to Nine Hub",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function JobRolePage({ params }: RolePageProps) {
  const job = getJobBySlug(params.slug);

  if (!job) {
    notFound();
  }

  const locationDisplay = job.location === "UAE" ? "Dubai, UAE" : "India";

  // Google for Jobs JobPosting Schema
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `<h3>Role Overview</h3><p>${job.description}</p><h3>Key Responsibilities</h3><ul>${job.responsibilities
      .map((r) => `<li>${r}</li>`)
      .join("")}</ul><h3>Required Skills</h3><ul>${job.skills
      .map((s) => `<li>${s}</li>`)
      .join("")}</ul>`,
    datePosted: job.datePosted,
    validThrough: "2027-09-09",
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Nine to Nine Hub",
      sameAs: "https://ninetoninehub.com",
      logo: "https://ninetoninehub.com/images/logo/9-9logo.webp",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.city,
        addressCountry: job.countryCode,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ninetoninehub.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Careers",
        item: "https://ninetoninehub.com/career",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: job.title,
        item: `https://ninetoninehub.com/career/${job.slug}`,
      },
    ],
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      {/* Structured Data: JobPosting & BreadcrumbList for individual role */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative py-16 sm:py-24 bg-[#FCF9F5] border-t border-[#5B0F18]/12 overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute left-1/4 top-1/4 w-[500px] h-[500px] bg-[#5B0F18]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Visible Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-sans text-[#6F6261]">
              <li>
                <Link href="/" className="hover:text-[#5B0F18] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#5B0F18]/40">
                /
              </li>
              <li>
                <Link
                  href="/career"
                  className="hover:text-[#5B0F18] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#5B0F18]/40">
                /
              </li>
              <li>
                <span className="text-[#5B0F18] font-semibold" aria-current="page">
                  {job.title}
                </span>
              </li>
            </ol>
          </nav>

          <div className="mb-6">
            <Link
              href="/career"
              className="inline-flex items-center gap-2 text-xs font-sans text-[#5B0F18] hover:text-[#430B12] font-semibold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all open positions</span>
            </Link>
          </div>

          {/* Role Header */}
          <SectionReveal className="mb-12">
            <span className="text-[11px] sm:text-[12px] font-sans tracking-[0.25em] text-[#5B0F18] uppercase mb-3 block font-semibold">
              // CAREER OPPORTUNITY // {job.department.toUpperCase()}
            </span>
            <h1
              className="font-display font-semibold text-[#24191A] tracking-tight leading-[1.12] mb-6 select-text"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.75rem)",
                overflowWrap: "normal",
                wordBreak: "normal",
                hyphens: "none",
              }}
            >
              {job.title} —{" "}
              <span className="text-[#5B0F18]">{locationDisplay}</span>
            </h1>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#5B0F18]/15 text-[#24191A] font-medium shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#5B0F18]" />
                {job.city}, {job.country}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#5B0F18]/15 text-[#24191A] font-medium shadow-xs">
                <Building className="w-3.5 h-3.5 text-[#5B0F18]" />
                {job.department}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#5B0F18]/15 text-[#24191A] font-medium shadow-xs">
                <Briefcase className="w-3.5 h-3.5 text-[#5B0F18]" />
                Full-time
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 font-semibold text-[11px]">
                {job.status}
              </span>
            </div>
          </SectionReveal>

          {/* Role Details Cards */}
          <div className="space-y-8 mb-16">
            {/* Overview */}
            <SectionReveal>
              <div className="p-8 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
                <h2 className="text-[20px] sm:text-[24px] font-display font-semibold text-[#24191A] mb-4">
                  Role Overview
                </h2>
                <p className="text-[#6F6261] text-[15px] sm:text-[16px] font-sans leading-relaxed">
                  {job.description}
                </p>
              </div>
            </SectionReveal>

            {/* Responsibilities */}
            <SectionReveal>
              <div className="p-8 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
                <h2 className="text-[20px] sm:text-[24px] font-display font-semibold text-[#24191A] mb-4">
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[#6F6261] text-[14px] sm:text-[15px] font-sans leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#5B0F18] shrink-0 mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            {/* Skills & Qualifications */}
            <SectionReveal>
              <div className="p-8 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
                <h2 className="text-[20px] sm:text-[24px] font-display font-semibold text-[#24191A] mb-4">
                  Required Skills & Qualifications
                </h2>
                <ul className="space-y-3">
                  {job.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[#6F6261] text-[14px] sm:text-[15px] font-sans leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#5B0F18] shrink-0 mt-1" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            {/* Why Join */}
            <SectionReveal>
              <div className="p-8 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
                <h2 className="text-[20px] sm:text-[24px] font-display font-semibold text-[#24191A] mb-4">
                  Why Join Nine to Nine Hub?
                </h2>
                <p className="text-[#6F6261] text-[15px] sm:text-[16px] font-sans leading-relaxed mb-4">
                  At Nine to Nine Hub, our team connects strategy, media creation,
                  and software engineering under one unified standard. We deliver
                  meaningful marketing solutions for real clients across Dubai,
                  the UAE, and the wider GCC region.
                </p>
                <p className="text-[#6F6261] text-[15px] sm:text-[16px] font-sans leading-relaxed">
                  Learn more{" "}
                  <Link
                    href="/about"
                    className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12]"
                  >
                    about our company culture
                  </Link>
                  , explore{" "}
                  <Link
                    href="/services"
                    className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12]"
                  >
                    our services
                  </Link>
                  , or see{" "}
                  <Link
                    href="/portfolio"
                    className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12]"
                  >
                    our client work
                  </Link>
                  .
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Embedded Application Form for this Role */}
          <SectionReveal>
            <JobApplicationForm
              initialLocation={job.location}
              initialPosition={job.title}
              isSpecificRole={true}
            />
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}

