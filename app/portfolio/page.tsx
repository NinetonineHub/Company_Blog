import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import PortfolioSection from "@/components/PortfolioSection";
import SectionReveal from "@/components/SectionReveal";
import HeroWireframeBackground from "@/components/HeroWireframeBackground";

const PortfolioHero3DCanvas = dynamic(() => import("@/components/PortfolioHero3DCanvas"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ninetoninehub.com"),
  title: "Digital Marketing Portfolio Dubai | Nine to Nine Hub",
  description:
    "See our digital marketing portfolio in Dubai: SEO, social media, video and web work for UAE restaurant, travel and construction brands. Get a quote.",
  alternates: {
    canonical: "https://ninetoninehub.com/portfolio",
  },
  openGraph: {
    title: "Digital Marketing Portfolio Dubai | Nine to Nine Hub",
    description:
      "See our digital marketing portfolio in Dubai: SEO, social media, video and web work for UAE restaurant, travel and construction brands. Get a quote.",
    url: "https://ninetoninehub.com/portfolio",
    siteName: "Nine to Nine Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Portfolio Dubai | Nine to Nine Hub",
    description:
      "See our digital marketing portfolio in Dubai: SEO, social media, video and web work for UAE restaurant, travel and construction brands. Get a quote.",
  },
};

export default function PortfolioPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Digital Marketing Portfolio Dubai | Nine to Nine Hub",
    description:
      "See our digital marketing portfolio in Dubai: SEO, social media, video and web work for UAE restaurant, travel and construction brands. Get a quote.",
    url: "https://ninetoninehub.com/portfolio",
    isPartOf: {
      "@type": "WebSite",
      name: "Nine to Nine Hub",
      url: "https://ninetoninehub.com",
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
        name: "Portfolio",
        item: "https://ninetoninehub.com/portfolio",
      },
    ],
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      {/* Structured Data: CollectionPage and BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 3. PORTFOLIO HERO SECTION WITH 3D DIGITAL LIGHT BULB / EARTH */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-[#F8F1E7] overflow-hidden border-b border-[#5B0F18]/12 select-none">
        {/* Wireframe Ambient Background Artwork */}
        <HeroWireframeBackground />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Visible Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[12px] sm:text-[13px] font-sans text-[#6F6261] flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#5B0F18] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#5B0F18]/40">/</li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-[#5B0F18] font-semibold"
                  aria-current="page"
                >
                  Portfolio
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
                    // CASE STUDIES & WORK
                  </span>
                </div>

                {/* Main Heading: Exactly One H1 */}
                <h1 className="text-[42px] sm:text-[62px] lg:text-[76px] xl:text-[80px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.08] mb-6">
                  Digital Marketing <br />
                  <span className="text-[#5B0F18]">Portfolio Dubai</span>
                </h1>

                {/* Supporting Description */}
                <p className="text-[#6F6261] text-[16px] sm:text-[18px] lg:text-[19px] max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed mb-8 font-normal">
                  Explore the digital marketing portfolio Dubai brands rely on for measurable growth. We deliver social media, SEO, video production, and web development for restaurant, travel, construction, and corporate brands across the UAE.
                </p>

                {/* Hero CTA Button linking to #client-work */}
                <div className="flex items-center justify-center lg:justify-start">
                  <a
                    href="#client-work"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wider hover:bg-[#430B12] shadow-wine transition-all"
                  >
                    <span>Explore Client Work</span>
                    <ArrowDown className="w-4 h-4 text-[#F8F1E7]" />
                  </a>
                </div>
              </SectionReveal>
            </div>

            {/* Right Column: Interactive 3D Canvas (Col 8 to 12) */}
            <div className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[560px] w-full relative">
              <SectionReveal delay={0.15} className="w-full h-full">
                <PortfolioHero3DCanvas className="w-full h-full" />
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portfolio Interactive Grid Section with ID */}
      <div id="portfolio-grid">
        <PortfolioSection />
      </div>

      {/* 8. NEW SEO CONTENT SECTION (200-300 words) */}
      <section className="py-20 lg:py-24 bg-[#F8F1E7] border-t border-[#5B0F18]/12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
          <SectionReveal>
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#5B0F18]" />
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-sans tracking-widest text-[#5B0F18] uppercase font-medium">
                // OUR EXPERIENCE
              </span>
            </div>

            {/* H2 Heading */}
            <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.18] mb-8">
              Digital Marketing Portfolio Dubai: Real Client Work Across the UAE
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-[15px] sm:text-[16px] lg:text-[17px] text-[#6F6261] font-sans leading-relaxed">
              <p>
                Nine to Nine Hub delivers focused digital marketing campaigns for ambitious businesses across the UAE. Our team combines strategic insight, creative media production, and modern technical execution. We turn online channels into measurable business growth. Discover more{" "}
                <Link
                  href="/about"
                  className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12] transition-colors"
                >
                  about our agency and growth approach
                </Link>
                .
              </p>

              <p>
                As part of our social media management portfolio, Dubai eateries gain mouth-watering short-form reels, menu photography, and promotional campaigns. Our tailored{" "}
                <Link
                  href="/services"
                  className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12] transition-colors"
                >
                  social media management and content creation
                </Link>{" "}
                helps UAE restaurants engage food enthusiasts and increase repeat visits.
              </p>

              <p>
                Travel and tourism brands require steady customer inquiries and international bookings. We build connected digital ecosystems for tour operators and charter services. With comprehensive{" "}
                <Link
                  href="/services"
                  className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12] transition-colors"
                >
                  SEO and digital marketing services
                </Link>
                , we improve organic search rankings, boost Google Maps visibility, and drive qualified leads.
              </p>

              <p>
                For construction contractors and corporate firms, professional positioning is vital. Our video production portfolio Dubai enterprises rely on showcases commercial capability through crisp corporate reels and site walkthroughs. Our custom{" "}
                <Link
                  href="/services"
                  className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12] transition-colors"
                >
                  website creation and video production
                </Link>{" "}
                builds trust with high-value commercial partners.
              </p>

              <p>
                These digital marketing case studies UAE businesses review illustrate our commitment to transparent results. We align every creative reel, carousel post, and search campaign with commercial goals. Explore our client work to see how we help UAE brands grow sustainably in competitive markets.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Page Bottom Final CTA Section */}
      <section className="py-20 bg-white border-t border-[#5B0F18]/12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-[34px] sm:text-[42px] font-display font-semibold text-[#24191A] mb-4">
              Want Results Like These for Your Brand?
            </h2>
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#6F6261] mb-8 font-sans font-normal max-w-2xl mx-auto">
              Tell us your goals and we will send a free proposal for social media, SEO, video production or web development in Dubai.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-sans text-[12px] sm:text-[13px] lg:text-[14px] font-semibold tracking-wider shadow-wine hover:bg-[#430B12] transition-all"
            >
              <span>Get a Free Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
