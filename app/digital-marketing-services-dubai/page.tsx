import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ServicesSection from "@/components/ServicesSection";
import PartnerSolutionsSection from "@/components/PartnerSolutionsSection";
import GrowthPackagesSection from "@/components/GrowthPackagesSection";
import SectionReveal from "@/components/SectionReveal";
import HeroWireframeBackground from "@/components/HeroWireframeBackground";
import { COMPANY_INFO } from "@/data/company";

const ServicesHero3DCanvas = dynamic(() => import("@/components/ServicesHero3DCanvas"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

export const metadata: Metadata = {
  title: "Digital Marketing Services in Dubai: 8 Proven Solutions | Nine to Nine Hub",
  description:
    "Digital marketing services in Dubai from Nine to Nine Hub: SEO, social media, video production, web development & paid ads. Get a free quote today.",
  alternates: {
    canonical: "https://ninetoninehub.com/digital-marketing-services-dubai",
  },
  openGraph: {
    title: "Digital Marketing Services in Dubai: 8 Proven Solutions | Nine to Nine Hub",
    description:
      "Digital marketing services in Dubai from Nine to Nine Hub: SEO, social media, video production, web development & paid ads. Get a free quote today.",
    url: "https://ninetoninehub.com/digital-marketing-services-dubai",
    siteName: "Nine to Nine Hub",
    type: "website",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nine to Nine Hub",
  url: "https://ninetoninehub.com/digital-marketing-services-dubai",
  logo: "https://ninetoninehub.com/icon.png",
  image: "https://ninetoninehub.com/icon.png",
  description:
    "Digital marketing services in Dubai from Nine to Nine Hub: SEO, social media, video production, web development & paid ads. Get a free quote today.",
  telephone: COMPANY_INFO.phone,
  email: "info@ninetoninehub.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Residence - 1072, Block-B, Best Benefit Business Center, Abu Baker Al Siddique St.",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.2697",
    longitude: "55.3340",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "21:00",
  },
  sameAs: [
    COMPANY_INFO.socials.instagram,
    COMPANY_INFO.socials.linkedin,
    COMPANY_INFO.socials.facebook,
    COMPANY_INFO.socials.youtube,
  ],
  priceRange: "$$",
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digital Marketing Services in Dubai",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Social Media Management in Dubai",
      url: "https://ninetoninehub.com/digital-marketing-services-dubai#our-services",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "SEO Services in UAE",
      url: "https://ninetoninehub.com/digital-marketing-services-dubai#our-services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Google Business Profile Management",
      url: "https://ninetoninehub.com/digital-marketing-services-dubai#our-services",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Video Production & Reels",
      url: "https://ninetoninehub.com/digital-marketing-services-dubai#our-services",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Website Development in Dubai",
      url: "https://ninetoninehub.com/digital-marketing-services-dubai#our-services",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Logo & Brand Design",
      url: "https://ninetoninehub.com/digital-marketing-services-dubai#our-services",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Paid Ads Management",
      url: "https://ninetoninehub.com/digital-marketing-services-dubai#our-services",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Lead Generation",
      url: "https://ninetoninehub.com/digital-marketing-services-dubai#our-services",
    },
  ],
};

const breadcrumbJsonLd = {
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
      name: "Services",
      item: "https://ninetoninehub.com/digital-marketing-services-dubai",
    },
  ],
};

const TOC_LINKS = [
  { name: "Our Services", href: "#our-services" },
  { name: "Business Software", href: "#business-software" },
  { name: "Packages", href: "#packages" },
  { name: "Additional Services", href: "#additional-services" },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. SERVICES HERO SECTION WITH 3D MAGIC CUBE */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-[#F8F1E7] overflow-hidden border-b border-[#5B0F18]/12 select-none">
        {/* Wireframe Ambient Background Artwork */}
        <HeroWireframeBackground />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Hero Typography & CTA (Col 1 to 7) */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <SectionReveal>
                {/* Eyebrow Label (Plain text, not a heading) */}
                <div className="inline-flex items-center gap-3 mb-4 justify-center lg:justify-start">
                  <span className="w-6 h-[2px] bg-[#5B0F18]" />
                  <span className="text-[11px] sm:text-[12px] font-sans tracking-[0.25em] text-[#5B0F18] uppercase font-semibold">
                    // DIGITAL MARKETING SERVICES &amp; PACKAGES
                  </span>
                </div>

                {/* Main Heading (The only H1 on the page) */}
                <h1 className="text-[38px] sm:text-[54px] lg:text-[70px] xl:text-[76px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.1] mb-6">
                  Digital Marketing Services in Dubai: <br />
                  <span className="text-[#5B0F18]">
                    Integrated Solutions for Brand Scaling
                  </span>
                </h1>

                {/* Supporting Description (Concise, 3 lines, keyword at start) */}
                <p className="text-[#6F6261] text-[16px] sm:text-[18px] max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed mb-8 font-normal">
                  Digital marketing services in Dubai from Nine to Nine Hub for UAE and GCC businesses. We provide performance SEO, social media, video production, custom web applications and paid advertising. Each service is built to maximize your return on investment.
                </p>

                {/* CTA Buttons: Two real accessible links */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#our-services"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] font-semibold tracking-wider hover:bg-[#430B12] shadow-wine transition-all"
                  >
                    <span>Explore Services &amp; Packages</span>
                    <ArrowDown className="w-4 h-4 text-[#F8F1E7]" />
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white border border-[#5B0F18]/30 text-[#5B0F18] hover:bg-[#5B0F18] hover:text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] font-semibold tracking-wider transition-all shadow-xs"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </SectionReveal>
            </div>

            {/* Right Column: Interactive 3D Magic Cube Canvas (Col 8 to 12) */}
            <div
              className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[560px] w-full relative"
              aria-hidden="true"
            >
              <SectionReveal delay={0.15} className="w-full h-full">
                <ServicesHero3DCanvas className="w-full h-full" />
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TABLE OF CONTENTS SECTION */}
      <section className="relative py-6 bg-[#FAF6F0] border-b border-[#5B0F18]/12 select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-4 h-[2px] bg-[#5B0F18]" />
              <span className="text-[11px] sm:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase font-semibold">
                // ON THIS PAGE
              </span>
            </div>

            <nav
              aria-label="Table of Contents"
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            >
              {TOC_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full bg-white border border-[#5B0F18]/18 text-[#24191A] hover:text-[#5B0F18] hover:border-[#5B0F18] font-sans text-[11px] sm:text-[12px] font-medium tracking-wide transition-all shadow-xs"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* 3. Main 8-Card Interactive Services Section */}
      <ServicesSection />

      {/* 4. Partner Solutions Section (Eyakkar Technologies) */}
      <PartnerSolutionsSection />

      {/* 5. Premium Growth Packages & Additional Services Section */}
      <GrowthPackagesSection />
    </div>
  );
}
