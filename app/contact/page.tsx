import React from "react";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact HQ | Nine to Nine Hub Dubai",
  description:
    "Connect with Nine to Nine Hub headquarters in Dubai. Submit project inquiries, request marketing strategy proposals, or trigger instant WhatsApp communication.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F8F1E7]">
      <ContactSection />
    </div>
  );
}
