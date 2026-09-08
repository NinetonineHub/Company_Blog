"use client";

import React, { useState } from "react";
import SectionReveal from "./SectionReveal";
import { COMPANY_INFO } from "@/data/company";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowDown,
  ExternalLink,
} from "lucide-react";

const SERVICE_OPTIONS = [
  "Social Media Management",
  "SEO",
  "Google My Business",
  "Video Promotion",
  "Website Creation",
  "Logo & Visual Design",
  "Ads Management",
  "Lead Generation",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceInterested: SERVICE_OPTIONS[0],
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const scrollToForm = () => {
    const formElem = document.getElementById("contact-inquiry-form");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Please enter your name.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Please enter a valid email address.";
    if (!formData.phone.trim()) errors.phone = "Please enter your phone/WhatsApp number.";
    if (!formData.serviceInterested.trim()) errors.serviceInterested = "Please select a service interest.";
    if (!formData.message.trim()) errors.message = "Please enter your project brief or objectives.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(
          result.error ||
            "Something went wrong while sending your enquiry. Please try again or contact us directly at info@ninetoninehub.com"
        );
      }
    } catch (err) {
      setSubmitError(
        "Something went wrong while sending your enquiry. Please try again or contact us directly at info@ninetoninehub.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 sm:py-28 bg-[#F8F1E7] border-t border-[#5B0F18]/12 overflow-hidden">
      {/* Subtle Wine Atmospheric Radial Ambient Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[500px] bg-[#5B0F18]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* 1. CONTACT CTA HERO SECTION */}
        <SectionReveal className="mb-20 sm:mb-24 text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <span className="text-xs font-mono tracking-[0.25em] text-[#5B0F18] uppercase font-bold mb-4 block">
            LET&apos;S TALK GROWTH
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#24191A] tracking-tight leading-[1.08] mb-6">
            READY TO SCALE YOUR <br />
            <span className="text-[#5B0F18]">
              BRAND?
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-[#6F6261] text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed mb-8">
            Fill out the form below to start a conversation with our team. We&apos;ll understand your business goals and create a digital growth strategy tailored to your brand.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-mono text-xs font-bold tracking-wider hover:bg-[#430B12] shadow-wine transition-all"
          >
            <span>LET&apos;S TALK GROWTH</span>
            <ArrowDown className="w-4 h-4 text-[#F8F1E7]" />
          </button>
        </SectionReveal>

        {/* 2 & 10. CONTACT PAGE LAYOUT */}
        {/* Desktop: LEFT (Office Info + Map), RIGHT (Inquiry Form) */}
        {/* Mobile: Office Info -> Map -> Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Dubai Office Information & Google Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Dubai Office Contact Info Card */}
            <SectionReveal>
              <div className="p-8 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
                <h2 className="text-2xl font-display font-bold text-[#24191A] mb-6">
                  Dubai Office
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/12 flex items-center justify-center text-[#5B0F18] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#6F6261] uppercase tracking-wider block mb-1 font-bold">
                        ADDRESS
                      </span>
                      <p className="text-[#24191A] font-sans text-sm leading-snug font-semibold whitespace-pre-line">
                        Residence - 1072, Block-B,{"\n"}
                        Best Benefit Business Center,{"\n"}
                        Abu Baker Al Siddique St. UAE
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/12 flex items-center justify-center text-[#5B0F18] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#6F6261] uppercase tracking-wider block mb-1 font-bold">
                        EMAIL
                      </span>
                      <a
                        href="mailto:info@ninetoninehub.com"
                        className="text-[#24191A] hover:text-[#5B0F18] transition-colors font-sans text-sm font-semibold block"
                      >
                        info@ninetoninehub.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/12 flex items-center justify-center text-[#5B0F18] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#6F6261] uppercase tracking-wider block mb-1 font-bold">
                        PHONE
                      </span>
                      <a
                        href="tel:+971501282100"
                        className="text-[#24191A] hover:text-[#5B0F18] transition-colors font-sans text-sm font-semibold block"
                      >
                        +971 50 128 2100
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* 3. GOOGLE MAP LOCATION CONTAINER */}
            <SectionReveal delay={0.1}>
              <div className="rounded-3xl bg-white border border-[#5B0F18]/15 overflow-hidden shadow-soft-card group relative">
                {/* Clickable Map Link opening in new tab */}
                <a
                  href={COMPANY_INFO.mapUrl || "https://maps.app.goo.gl/p4Ao3gL9KcJm4sEJA"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-72 w-full overflow-hidden"
                  title="Open Google Maps Location in New Tab"
                >
                  <iframe
                    title="Dubai Office Location Map"
                    src={COMPANY_INFO.mapCoordinates.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, pointerEvents: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  
                  {/* Subtle click overlay bar */}
                  <div className="absolute inset-0 bg-[#5B0F18]/0 group-hover:bg-[#5B0F18]/10 transition-colors flex items-center justify-center pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#5B0F18]/15 text-xs font-mono text-[#24191A] flex items-center justify-between shadow-sm">
                    <span className="font-bold text-[#5B0F18] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      DUBAI OFFICE MAP
                    </span>
                    <span className="text-[#6F6261] font-bold flex items-center gap-1 group-hover:text-[#5B0F18] transition-colors">
                      OPEN MAP
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              </div>
            </SectionReveal>

          </div>

          {/* RIGHT COLUMN: Project Inquiry Form */}
          <div id="contact-inquiry-form" className="lg:col-span-7">
            <SectionReveal delay={0.1}>
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
                
                {/* Form Title */}
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#24191A] mb-8">
                  PROJECT INQUIRY FORM
                </h3>

                {/* Success State */}
                {isSubmitted ? (
                  <div className="p-8 sm:p-10 rounded-2xl bg-[#FCF9F5] border border-[#5B0F18]/20 text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#5B0F18]/10 text-[#5B0F18] mx-auto flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-display font-extrabold text-[#24191A] mb-3">
                      THANK YOU FOR REACHING OUT.
                    </h4>
                    <p className="text-sm text-[#6F6261] leading-relaxed max-w-md mx-auto font-sans font-medium">
                      Your enquiry has been received. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    
                    {/* Error Banner if submit fails */}
                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-start gap-3">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono text-[#24191A] mb-2 font-bold uppercase tracking-wider">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Full Name"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#FCF9F5] border text-[#24191A] text-sm focus:outline-none transition-colors ${
                            formErrors.name ? "border-red-500" : "border-[#5B0F18]/15 focus:border-[#5B0F18]"
                          }`}
                        />
                        {formErrors.name && (
                          <span className="text-[11px] font-mono text-red-600 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            {formErrors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#24191A] mb-2 font-bold uppercase tracking-wider">
                          COMPANY / BRAND
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Organization Name"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/15 text-[#24191A] text-sm focus:border-[#5B0F18] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono text-[#24191A] mb-2 font-bold uppercase tracking-wider">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="info@company.com"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#FCF9F5] border text-[#24191A] text-sm focus:outline-none transition-colors ${
                            formErrors.email ? "border-red-500" : "border-[#5B0F18]/15 focus:border-[#5B0F18]"
                          }`}
                        />
                        {formErrors.email && (
                          <span className="text-[11px] font-mono text-red-600 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            {formErrors.email}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#24191A] mb-2 font-bold uppercase tracking-wider">
                          PHONE / WHATSAPP *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+971 50 128 2100"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#FCF9F5] border text-[#24191A] text-sm focus:outline-none transition-colors ${
                            formErrors.phone ? "border-red-500" : "border-[#5B0F18]/15 focus:border-[#5B0F18]"
                          }`}
                        />
                        {formErrors.phone && (
                          <span className="text-[11px] font-mono text-red-600 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            {formErrors.phone}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 5. SERVICE DROPDOWN */}
                    <div>
                      <label className="block text-xs font-mono text-[#24191A] mb-2 font-bold uppercase tracking-wider">
                        PRIMARY SERVICE INTEREST
                      </label>
                      <select
                        name="serviceInterested"
                        value={formData.serviceInterested}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/15 text-[#24191A] text-sm focus:border-[#5B0F18] focus:outline-none transition-colors"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-[#24191A]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Brief */}
                    <div>
                      <label className="block text-xs font-mono text-[#24191A] mb-2 font-bold uppercase tracking-wider">
                        PROJECT BRIEF / OBJECTIVES *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your brand goals, target scope, or growth objectives..."
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#FCF9F5] border text-[#24191A] text-sm focus:outline-none transition-colors ${
                          formErrors.message ? "border-red-500" : "border-[#5B0F18]/15 focus:border-[#5B0F18]"
                        }`}
                      />
                      {formErrors.message && (
                        <span className="text-[11px] font-mono text-red-600 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {formErrors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#5B0F18] text-[#F8F1E7] font-mono font-bold text-sm tracking-wider shadow-wine flex items-center justify-center gap-2 hover:bg-[#430B12] disabled:opacity-70 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>SENDING...</span>
                      ) : (
                        <>
                          <span>START A CONVERSATION</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </SectionReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
