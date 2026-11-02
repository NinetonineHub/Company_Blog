import type { Metadata } from "next";
import React from "react";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://ninetoninehub.com"),
  title: "Contact Digital Marketing Agency Dubai | Nine to Nine Hub",
  description:
    "Contact our digital marketing agency in Dubai for SEO, social media, video and web projects. Send an inquiry, call or WhatsApp us for a free proposal.",
  alternates: {
    canonical: "https://ninetoninehub.com/contact",
  },
  openGraph: {
    title: "Contact Digital Marketing Agency Dubai | Nine to Nine Hub",
    description:
      "Contact our digital marketing agency in Dubai for SEO, social media, video and web projects. Send an inquiry, call or WhatsApp us for a free proposal.",
    url: "https://ninetoninehub.com/contact",
    siteName: "Nine to Nine Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Digital Marketing Agency Dubai | Nine to Nine Hub",
    description:
      "Contact our digital marketing agency in Dubai for SEO, social media, video and web projects. Send an inquiry, call or WhatsApp us for a free proposal.",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Digital Marketing Agency Dubai | Nine to Nine Hub",
    description:
      "Contact our digital marketing agency in Dubai for SEO, social media, video and web projects. Send an inquiry, call or WhatsApp us for a free proposal.",
    url: "https://ninetoninehub.com/contact",
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
    email: "info@ninetoninehub.com",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasMap: "https://maps.app.goo.gl/p4Ao3gL9KcJm4sEJA",
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
        name: "Contact",
        item: "https://ninetoninehub.com/contact",
      },
    ],
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      {/* Structured Data: ContactPage, ProfessionalService, BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
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

      <ContactSection />
    </div>
  );
}
