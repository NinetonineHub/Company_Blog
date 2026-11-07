import type { Metadata } from "next";
import React from "react";
import CareerSection from "@/components/CareerSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://ninetoninehub.com"),
  title: "Digital Marketing Careers Dubai & India | Nine to Nine Hub",
  description:
    "Join Nine to Nine Hub: digital marketing careers in Dubai and India. Open roles in SEO, social media, design and video. Apply online today.",
  alternates: {
    canonical: "https://ninetoninehub.com/career",
  },
  openGraph: {
    title: "Digital Marketing Careers Dubai & India | Nine to Nine Hub",
    description:
      "Join Nine to Nine Hub: digital marketing careers in Dubai and India. Open roles in SEO, social media, design and video. Apply online today.",
    url: "https://ninetoninehub.com/career",
    siteName: "Nine to Nine Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Careers Dubai & India | Nine to Nine Hub",
    description:
      "Join Nine to Nine Hub: digital marketing careers in Dubai and India. Open roles in SEO, social media, design and video. Apply online today.",
  },
};

export default function CareerPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Digital Marketing Careers Dubai & India | Nine to Nine Hub",
    description:
      "Join Nine to Nine Hub: digital marketing careers in Dubai and India. Open roles in SEO, social media, design and video. Apply online today.",
    url: "https://ninetoninehub.com/career",
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
        name: "Careers",
        item: "https://ninetoninehub.com/career",
      },
    ],
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      {/* Structured Data: WebPage & BreadcrumbList (NO JobPosting schema on listing page) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <CareerSection />
    </div>
  );
}
