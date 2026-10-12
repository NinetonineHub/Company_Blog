import React from "react";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact HQ | Nine to Nine Hub UAE",
  description:
    "Connect with Nine to Nine Hub headquarters in Dubai, UAE. Submit project inquiries, request custom growth proposals, or chat with us on WhatsApp.",
  alternates: {
    canonical: "https://ninetoninehub.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      <ContactSection />
    </div>
  );
}
