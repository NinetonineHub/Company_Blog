import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import SectionReveal from "@/components/SectionReveal";
import HeroWireframeBackground from "@/components/HeroWireframeBackground";

const AboutHero3DCanvas = dynamic(() => import("@/components/AboutHero3DCanvas"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ninetoninehub.com"),
  title: "Digital Marketing Team in Dubai | About Nine to Nine Hub",
  description:
    "Meet the digital marketing team in Dubai behind Nine to Nine Hub. Our vision, values and how we grow UAE brands with SEO, social media and video.",
  alternates: {
    canonical: "https://ninetoninehub.com/about",
  },
  openGraph: {
    title: "Digital Marketing Team in Dubai | About Nine to Nine Hub",
    description:
      "Meet the digital marketing team in Dubai behind Nine to Nine Hub. Our vision, values and how we grow UAE brands with SEO, social media and video.",
    url: "https://ninetoninehub.com/about",
    siteName: "Nine to Nine Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Team in Dubai | About Nine to Nine Hub",
    description:
      "Meet the digital marketing team in Dubai behind Nine to Nine Hub. Our vision, values and how we grow UAE brands with SEO, social media and video.",
  },
};

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Digital Marketing Team in Dubai | About Nine to Nine Hub",
    description:
      "Meet the digital marketing team in Dubai behind Nine to Nine Hub. Our vision, values and how we grow UAE brands with SEO, social media and video.",
    url: "https://ninetoninehub.com/about",
    isPartOf: {
      "@type": "WebSite",
      name: "Nine to Nine Hub",
      url: "https://ninetoninehub.com",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nine to Nine Hub",
    url: "https://ninetoninehub.com",
    telephone: "+971 50 128 2100",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Residence - 1072, Block-B, Best Benefit Business Center, Abu Baker Al Siddique St.",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.275608286390266,
      longitude: 55.328580084656615,
    },
    sameAs: [
      "https://www.instagram.com/9to9_hub/?hl=en",
      "https://www.linkedin.com/company/ninetonine-hub/",
      "https://www.facebook.com/profile.php?id=61591326836698",
      "https://youtube.com/@9to9hub?si=Rkyl7-PedmmjZJrT",
    ],
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
        name: "About",
        item: "https://ninetoninehub.com/about",
      },
    ],
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7] overflow-x-hidden w-full">
      {/* Structured Data: AboutPage, ProfessionalService, BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. ABOUT HERO SECTION WITH 3D WIREFRAME ROCKET */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-[#F8F1E7] overflow-hidden border-b border-[#5B0F18]/12 select-none">
        {/* Wireframe Ambient Background Artwork */}
        <HeroWireframeBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Visible Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[12px] sm:text-[13px] font-sans text-[#6F6261] flex-wrap justify-center lg:justify-start">
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
                  href="/about"
                  className="text-[#5B0F18] font-semibold"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Hero Typography & CTA (Col 1 to 7) */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <SectionReveal>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-3 mb-4 justify-center lg:justify-start">
                  <span className="w-6 h-[2px] bg-[#5B0F18]" />
                  <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase font-medium">
                    // ABOUT NINE TO NINE HUB
                  </span>
                </div>

                {/* Main Heading: Exactly One H1 */}
                <h1
                  className="font-display font-semibold text-[#24191A] tracking-tight leading-[1.12] mb-6 select-text"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 4.25rem)",
                    overflowWrap: "normal",
                    wordBreak: "normal",
                    hyphens: "none",
                  }}
                >
                  Digital Marketing Team in Dubai:{" "}
                  <span className="text-[#5B0F18] block sm:inline">
                    Architects of Digital Transformation
                  </span>
                </h1>

                {/* Supporting Description */}
                <p className="text-[#6F6261] text-[16px] sm:text-[18px] lg:text-[19px] max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed mb-8 font-normal">
                  Nine to Nine Hub is a digital marketing team in Dubai, UAE. We
                  bring strategy, creative media, SEO and web development
                  together. We help regional businesses reach more customers and
                  turn engagement into measurable revenue.
                </p>

                {/* Hero CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#team"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wider hover:bg-[#430B12] shadow-wine transition-all"
                  >
                    <span>Meet Our Team</span>
                    <ArrowDown className="w-4 h-4 text-[#F8F1E7]" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white border border-[#5B0F18]/25 text-[#5B0F18] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wider hover:bg-[#5B0F18]/5 transition-all shadow-xs"
                  >
                    <span>Get a Free Proposal</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </SectionReveal>
            </div>

            {/* Right Column: Interactive 3D Digital Wireframe Rocket Canvas (Col 8 to 12) */}
            <div
              className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[560px] w-full relative"
              aria-hidden="true"
            >
              <SectionReveal delay={0.15} className="w-full h-full">
                <AboutHero3DCanvas className="w-full h-full" />
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Sections (Who We Are, Vision & Mission, Core Values, Organizational Flowchart & Final CTA) */}
      <div id="about-content">
        <AboutSection />
      </div>
    </div>
  );
}
