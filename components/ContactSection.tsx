"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionReveal from "./SectionReveal";
import { COMPANY_INFO } from "@/data/company";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowDown,
  ExternalLink,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const SERVICE_OPTIONS = [
  "Social Media Management",
  "SEO Services",
  "Google Business Profile",
  "Video Production",
  "Website Development",
  "Logo & Branding",
  "Paid Ads",
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

  const [honeypot, setHoneypot] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const scrollToForm = () => {
    const formElem = document.getElementById("inquiry");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    if (!formData.phone.trim())
      errors.phone = "Please enter your phone/WhatsApp number.";
    if (!formData.serviceInterested.trim())
      errors.serviceInterested = "Please select a service interest.";
    if (!formData.message.trim())
      errors.message = "Please enter your project brief or objectives.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (honeypot) {
      setIsSubmitted(true);
      return;
    }

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

        // Send GA4 generate_lead event only on successful submission
        if (
          typeof window !== "undefined" &&
          typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function"
        ) {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
            "event",
            "generate_lead",
            {
              event_category: "Contact Form",
              event_label: formData.serviceInterested,
            }
          );
        }
      } else {
        setSubmitError(
          result.error ||
            "Something went wrong while sending your enquiry. Please try again or contact our support team."
        );
      }
    } catch {
      setSubmitError(
        "Something went wrong while sending your enquiry. Please try again or contact our support team."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#F8F1E7] border-t border-[#5B0F18]/12 overflow-hidden">
      {/* Subtle Wine Atmospheric Radial Ambient Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[500px] bg-[#5B0F18]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* 1. VISIBLE BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center justify-center gap-2 text-xs font-sans text-[#6F6261]">
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
                href="/contact"
                className="text-[#5B0F18] font-semibold"
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ol>
        </nav>

        {/* 2. CONTACT CTA HERO SECTION */}
        <SectionReveal className="mb-16 sm:mb-20 text-center max-w-4xl mx-auto">
          {/* Eyebrow Label (Plain Text, not a heading) */}
          <span className="text-xs font-sans tracking-[0.25em] text-[#5B0F18] uppercase font-medium mb-4 block">
            READY TO SCALE YOUR BRAND? // LET&apos;S TALK GROWTH
          </span>

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
            Contact Our Digital Marketing Agency in{" "}
            <span className="text-[#5B0F18]">Dubai</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-[#6F6261] text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-sans font-normal leading-relaxed mb-8">
            Contact our{" "}
            <Link
              href="/about"
              className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12] transition-colors"
            >
              digital marketing agency in Dubai
            </Link>
            . Tell us your goals in the form below and we will reply with a free
            proposal within 24 business hours. Explore our{" "}
            <Link
              href="/services"
              className="text-[#5B0F18] font-semibold underline underline-offset-4 hover:text-[#430B12] transition-colors"
            >
              services
            </Link>{" "}
            to learn how we accelerate brand growth across the UAE.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#inquiry"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5B0F18] text-[#F8F1E7] font-sans text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#430B12] shadow-wine transition-all"
            >
              <span>Send Your Inquiry</span>
              <ArrowDown className="w-4 h-4 text-[#F8F1E7]" />
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white border border-[#5B0F18]/25 text-[#5B0F18] font-sans text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#5B0F18]/5 transition-all shadow-xs"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionReveal>

        {/* 3. TWO-COLUMN LAYOUT: OFFICE & FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: Office Information & Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Office Contact Info Card */}
            <SectionReveal>
              <div className="p-8 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-display font-semibold text-[#24191A] mb-6">
                  Our Dubai Office
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/12 flex items-center justify-center text-[#5B0F18] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-sans text-[#6F6261] uppercase tracking-wider block mb-1 font-medium">
                        ADDRESS
                      </span>
                      <address className="not-italic text-[#24191A] font-sans text-xs sm:text-sm leading-snug font-medium whitespace-pre-line">
                        Residence - 1072, Block-B,{"\n"}
                        Best Benefit Business Center,{"\n"}
                        Abu Baker Al Siddique St., Dubai, UAE.
                      </address>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/12 flex items-center justify-center text-[#5B0F18] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-sans text-[#6F6261] uppercase tracking-wider block mb-1 font-medium">
                        EMAIL
                      </span>
                      <a
                        href="mailto:info@ninetoninehub.com"
                        className="text-[#24191A] hover:text-[#5B0F18] transition-colors font-sans text-xs sm:text-sm font-medium block"
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
                      <span className="text-xs font-sans text-[#6F6261] uppercase tracking-wider block mb-1 font-medium">
                        PHONE
                      </span>
                      <a
                        href="tel:+971501282100"
                        className="text-[#24191A] hover:text-[#5B0F18] transition-colors font-sans text-xs sm:text-sm font-medium block"
                      >
                        +971 50 128 2100
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4 pt-4 border-t border-[#5B0F18]/10">
                    <div className="w-10 h-10 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/12 flex items-center justify-center text-[#5B0F18] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-sans text-[#6F6261] uppercase tracking-wider block mb-1 font-medium">
                        BUSINESS HOURS
                      </span>
                      <p className="text-[#24191A] font-sans text-xs sm:text-sm font-medium leading-snug">
                        Monday – Friday: 9:00 AM – 6:00 PM (GST)
                      </p>
                      <p className="text-[#6F6261] font-sans text-xs mt-0.5">
                        Saturday – Sunday: Closed (Client emergency support active)
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="pt-4 border-t border-[#5B0F18]/10">
                    <a
                      href={COMPANY_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                      <span>Chat on WhatsApp (+971 50 128 2100)</span>
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Google Map Location Card */}
            <SectionReveal delay={0.1}>
              <div className="rounded-3xl bg-white border border-[#5B0F18]/15 overflow-hidden shadow-soft-card group relative">
                <a
                  href={COMPANY_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-72 w-full overflow-hidden"
                  title="Open Nine to Nine Hub on Google Maps"
                >
                  <iframe
                    title="Nine to Nine Hub office map in Dubai"
                    src={COMPANY_INFO.mapCoordinates.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, pointerEvents: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 bg-[#5B0F18]/0 group-hover:bg-[#5B0F18]/10 transition-colors flex items-center justify-center pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#5B0F18]/15 text-xs font-sans text-[#24191A] flex items-center justify-between shadow-sm">
                    <span className="font-medium text-[#5B0F18] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Nine to Nine Hub Dubai
                    </span>
                    <span className="text-[#6F6261] font-medium flex items-center gap-1 group-hover:text-[#5B0F18] transition-colors">
                      Open Nine to Nine Hub on Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              </div>
            </SectionReveal>

            {/* Process Card */}
            <SectionReveal delay={0.15}>
              <div className="p-8 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
                <span className="text-[10px] sm:text-[11px] font-sans tracking-widest text-[#5B0F18] uppercase font-semibold block mb-2">
                  // OUR CONSULTATION PROCESS
                </span>
                <h2 className="text-[20px] sm:text-[24px] font-display font-semibold text-[#24191A] mb-6">
                  What Happens After You Contact Us?
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-[#5B0F18]/10 text-[#5B0F18] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 font-sans">
                      01
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-sans font-semibold text-[#24191A]">
                        Review Within 24 Business Hours
                      </h3>
                      <p className="text-xs font-sans text-[#6F6261] leading-relaxed mt-1">
                        Our leadership reviews your business goals, target
                        audience, and current digital footprint.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-[#5B0F18]/10 text-[#5B0F18] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 font-sans">
                      02
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-sans font-semibold text-[#24191A]">
                        30-Minute Discovery Session
                      </h3>
                      <p className="text-xs font-sans text-[#6F6261] leading-relaxed mt-1">
                        We arrange an introductory call or meeting to clarify
                        scope, deliverables, and commercial targets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-[#5B0F18]/10 text-[#5B0F18] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 font-sans">
                      03
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-sans font-semibold text-[#24191A]">
                        Action Plan & Proposal
                      </h3>
                      <p className="text-xs font-sans text-[#6F6261] leading-relaxed mt-1">
                        You receive a tailored proposal outlining transparent
                        milestones, deliverables, and commercial terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* RIGHT COLUMN: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <SectionReveal delay={0.1}>
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
                {/* Form Title */}
                <h2
                  id="inquiry"
                  className="text-[24px] sm:text-[28px] lg:text-[32px] font-display font-semibold text-[#24191A] mb-8 scroll-mt-28"
                >
                  Send Us Your Project Inquiry
                </h2>

                {/* Success State */}
                {isSubmitted ? (
                  <div className="p-8 sm:p-10 rounded-2xl bg-[#FCF9F5] border border-[#5B0F18]/20 text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#5B0F18]/10 text-[#5B0F18] mx-auto flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-[#24191A] mb-3">
                      THANK YOU FOR REACHING OUT.
                    </h3>
                    <p className="text-sm font-sans font-normal text-[#6F6261] leading-relaxed max-w-md mx-auto">
                      Your inquiry has been received. Our Dubai team will review
                      your details and get back to you with a free proposal within
                      24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Spam Honeypot Field (hidden from genuine users) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website-hp">Leave this field blank</label>
                      <input
                        id="website-hp"
                        type="text"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Error Banner if submit fails */}
                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-sans flex items-start gap-3">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          name="name"
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Full Name"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#FCF9F5] border text-[#24191A] text-xs sm:text-sm font-sans font-normal focus:outline-none transition-colors ${
                            formErrors.name
                              ? "border-red-500"
                              : "border-[#5B0F18]/15 focus:border-[#5B0F18]"
                          }`}
                        />
                        {formErrors.name && (
                          <span className="text-[11px] font-sans text-red-600 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            {formErrors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                          COMPANY / BRAND
                        </label>
                        <input
                          type="text"
                          name="company"
                          autoComplete="organization"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Organization Name"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/15 text-[#24191A] text-xs sm:text-sm font-sans font-normal focus:border-[#5B0F18] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          name="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="info@company.com"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#FCF9F5] border text-[#24191A] text-xs sm:text-sm font-sans font-normal focus:outline-none transition-colors ${
                            formErrors.email
                              ? "border-red-500"
                              : "border-[#5B0F18]/15 focus:border-[#5B0F18]"
                          }`}
                        />
                        {formErrors.email && (
                          <span className="text-[11px] font-sans text-red-600 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            {formErrors.email}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                          PHONE / WHATSAPP *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+971 50 128 2100"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#FCF9F5] border text-[#24191A] text-xs sm:text-sm font-sans font-normal focus:outline-none transition-colors ${
                            formErrors.phone
                              ? "border-red-500"
                              : "border-[#5B0F18]/15 focus:border-[#5B0F18]"
                          }`}
                        />
                        {formErrors.phone && (
                          <span className="text-[11px] font-sans text-red-600 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            {formErrors.phone}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs sm:text-sm font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                        PRIMARY SERVICE INTEREST
                      </label>
                      <select
                        name="serviceInterested"
                        value={formData.serviceInterested}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/15 text-[#24191A] text-xs sm:text-sm font-sans font-normal focus:border-[#5B0F18] focus:outline-none transition-colors"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option
                            key={opt}
                            value={opt}
                            className="bg-white text-[#24191A]"
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Brief */}
                    <div>
                      <label className="block text-xs sm:text-sm font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                        PROJECT BRIEF / OBJECTIVES *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your brand goals, target scope, or growth objectives..."
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#FCF9F5] border text-[#24191A] text-xs sm:text-sm font-sans font-normal focus:outline-none transition-colors ${
                          formErrors.message
                            ? "border-red-500"
                            : "border-[#5B0F18]/15 focus:border-[#5B0F18]"
                        }`}
                      />
                      {formErrors.message && (
                        <span className="text-[11px] font-sans text-red-600 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {formErrors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button & Subtext */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-[#5B0F18] text-[#F8F1E7] font-sans font-semibold text-xs sm:text-sm tracking-wider shadow-wine flex items-center justify-center gap-2 hover:bg-[#430B12] disabled:opacity-70 transition-all cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>SENDING...</span>
                        ) : (
                          <>
                            <span>Send Inquiry</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-[11px] sm:text-xs font-sans text-[#6F6261] text-center mt-3 leading-relaxed">
                        We reply within 24 business hours. We use your details only to answer your inquiry.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* 4. NEW FAQ SECTION (Addresses Screaming Frog Low Content Pages Issue) */}
        <section className="mt-20 pt-16 border-t border-[#5B0F18]/12">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-sans tracking-[0.25em] text-[#5B0F18] uppercase font-medium mb-3 block">
              // COMMON QUESTIONS
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-display font-semibold text-[#24191A] tracking-tight leading-snug">
              Frequently Asked Questions about Contacting Nine to Nine Hub
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Q1 */}
            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
              <h3 className="text-base sm:text-lg font-display font-semibold text-[#24191A] mb-2.5">
                How quickly will you reply?
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                We review every inquiry within 24 business hours. Our team will
                contact you by email, phone, or WhatsApp to discuss your project
                requirements and arrange the next steps.
              </p>
            </div>

            {/* Q2 */}
            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
              <h3 className="text-base sm:text-lg font-display font-semibold text-[#24191A] mb-2.5">
                What happens after I send the form?
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                Our leadership reviews your goals and arranges a 30-minute
                discovery session. Afterwards, you receive an action plan and
                tailored proposal with transparent milestones and costs.
              </p>
            </div>

            {/* Q3 */}
            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
              <h3 className="text-base sm:text-lg font-display font-semibold text-[#24191A] mb-2.5">
                Which services can I ask about?
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                You can inquire about{" "}
                <Link
                  href="/services"
                  className="text-[#5B0F18] underline font-medium hover:text-[#430B12]"
                >
                  SEO services
                </Link>
                ,{" "}
                <Link
                  href="/services"
                  className="text-[#5B0F18] underline font-medium hover:text-[#430B12]"
                >
                  social media management
                </Link>
                , video production,{" "}
                <Link
                  href="/services"
                  className="text-[#5B0F18] underline font-medium hover:text-[#430B12]"
                >
                  website development
                </Link>
                , Google Business Profile optimization, and paid advertising.
              </p>
            </div>

            {/* Q4 */}
            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
              <h3 className="text-base sm:text-lg font-display font-semibold text-[#24191A] mb-2.5">
                Do you only work in Dubai?
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                We are based in Dubai and serve clients across Dubai, Abu Dhabi,
                Sharjah, and the wider GCC region.
              </p>
            </div>

            {/* Q5 */}
            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
              <h3 className="text-base sm:text-lg font-display font-semibold text-[#24191A] mb-2.5">
                When is the office open?
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                Our Dubai office is open Monday to Friday, 9:00 AM to 6:00 PM
                (GST). You can also reach our team via WhatsApp for timely
                assistance.
              </p>
            </div>

            {/* Q6 */}
            <div className="p-6 rounded-2xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
              <h3 className="text-base sm:text-lg font-display font-semibold text-[#24191A] mb-2.5">
                Can I see your previous work?
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#6F6261] leading-relaxed">
                Yes. Visit our{" "}
                <Link
                  href="/portfolio"
                  className="text-[#5B0F18] underline font-medium hover:text-[#430B12]"
                >
                  client portfolio
                </Link>{" "}
                to see recent case studies across restaurants, travel, and corporate
                brands.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
