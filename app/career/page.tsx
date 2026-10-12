import React from "react";
import CareerSection from "@/components/CareerSection";

export const metadata = {
  title: "Careers & Hiring Opportunities | Nine to Nine Hub",
  description:
    "Explore career opportunities at Nine to Nine Hub in the UAE and India. Join our growing team in marketing, SEO, video editing, design, and web development.",
  alternates: {
    canonical: "https://ninetoninehub.com/career",
  },
};

export default function CareerPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      <CareerSection />
    </div>
  );
}
