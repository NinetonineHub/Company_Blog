import React from "react";
import CareerSection from "@/components/CareerSection";

export const metadata = {
  title: "Careers & Hiring Opportunities | Nine to Nine Hub",
  description:
    "Explore current hiring opportunities at Nine to Nine Hub across India (Sales Executive, Digital Marketing Executive, SEO Specialist, Social Media Manager, Content Writer, Graphic Designer, Video Editor, Telecalling, Admin) and UAE (Admin, Sales Executive, Videography).",
};

export default function CareerPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      <CareerSection />
    </div>
  );
}
