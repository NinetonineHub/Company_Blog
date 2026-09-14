"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { INDIA_ROLES, UAE_ROLES, TEAM_MEMBERS, COMPANY_VALUES, JobPosition } from "@/data/careers";
import { Send, Check, Upload, ArrowDown, MapPin, AlertCircle, Users, Briefcase } from "lucide-react";

export default function CareerSection() {
  const [activeLocation, setActiveLocation] = useState<"India" | "UAE">("India");
  const [formLocation, setFormLocation] = useState<"India" | "UAE">("India");
  const [formPosition, setFormPosition] = useState<string>(INDIA_ROLES[0].title);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Active roles based on selected location filter toggle
  const activeRoles = activeLocation === "India" ? INDIA_ROLES : UAE_ROLES;

  // Available positions based on selected form location dropdown
  const availableFormPositions = formLocation === "UAE" ? UAE_ROLES : INDIA_ROLES;

  const handleLocationToggle = (loc: "India" | "UAE") => {
    setActiveLocation(loc);
  };

  const handleFormLocationChange = (newLocation: "India" | "UAE") => {
    setFormLocation(newLocation);
    const newPositions = newLocation === "UAE" ? UAE_ROLES : INDIA_ROLES;
    setFormPosition(newPositions[0].title);
    if (formErrors.location) {
      setFormErrors((prev) => ({ ...prev, location: "" }));
    }
  };

  const handleApplyNowClick = (roleTitle: string, roleLocation: "India" | "UAE") => {
    setFormLocation(roleLocation);
    setFormPosition(roleTitle);

    // Clear errors if any
    setFormErrors((prev) => ({ ...prev, location: "", position: "" }));

    // Smooth scroll to form
    const formElement = document.getElementById("application-form-block");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (file.size > 10 * 1024 * 1024) {
        setFormErrors((prev) => ({ ...prev, resume: "File size exceeds 10MB limit." }));
        return;
      }

      setResumeFile(file);
      if (formErrors.resume) {
        setFormErrors((prev) => ({ ...prev, resume: "" }));
      }
      if (submitError) {
        setSubmitError(null);
      }
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Please enter your phone number.";
    }
    if (!formLocation) {
      errors.location = "Please select a location.";
    }
    if (!formPosition) {
      errors.position = "Please select a position.";
    }
    if (!resumeFile) {
      errors.resume = "Please upload your resume.";
    }
    if (!formData.message.trim()) {
      errors.message = "Please enter a short introduction.";
    }

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
        body: JSON.stringify({
          type: "career",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formLocation,
          position: formPosition,
          resume: resumeFile ? resumeFile.name : "Attached File",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(
          result.error ||
            "Something went wrong while submitting your application. Please try again or contact our team directly."
        );
      }
    } catch (err) {
      setSubmitError(
        "Something went wrong while submitting your application. Please try again or contact our team directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-28 bg-[#FCF9F5] border-t border-[#5B0F18]/12 overflow-hidden">
      {/* Background Ambient Wine Glows */}
      <div className="absolute left-1/4 top-1/4 w-[500px] h-[500px] bg-[#5B0F18]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] bg-[#5B0F18]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* CAREER HERO INTRO */}
        <SectionReveal className="mb-16 text-center max-w-4xl mx-auto">
          <span className="text-[11px] sm:text-[12px] font-sans tracking-[0.25em] text-[#5B0F18] uppercase mb-3 block font-semibold">
            // JOIN OUR TEAM
          </span>
          <h1 className="text-[42px] sm:text-[62px] lg:text-[80px] xl:text-[84px] font-display font-semibold text-[#24191A] tracking-tight leading-[1.1] mb-6">
            BUILD YOUR <br />
            <span className="text-[#5B0F18]">
              NEXT CHAPTER WITH US.
            </span>
          </h1>
          <p className="text-[#6F6261] text-[16px] sm:text-[18px] max-w-2xl mx-auto leading-relaxed font-sans font-normal">
            Join Nine to Nine Hub and grow with a team working across digital marketing, SEO, social media, content, design, video and business development.
          </p>
        </SectionReveal>

        {/* WHAT WE VALUE */}
        <SectionReveal className="mb-20">
          <div className="text-[11px] sm:text-[12px] font-sans text-[#5B0F18] uppercase tracking-widest mb-8 text-center font-semibold">
            // WHAT WE VALUE
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#5B0F18]/12 backdrop-blur-md hover:border-[#5B0F18]/30 transition-all hover:shadow-soft-card"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5B0F18]/10 border border-[#5B0F18]/25 flex items-center justify-center text-[#5B0F18] mb-4 font-sans font-semibold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-[20px] sm:text-[24px] font-display font-semibold text-[#24191A] mb-2">
                  {val.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#6F6261] leading-relaxed font-sans font-normal">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* JOB OPPORTUNITY SECTION WITH LOCATION FILTER TOGGLE */}
        <div className="mb-24">
          <SectionReveal className="mb-10 text-center">
            <span className="text-[11px] sm:text-[12px] font-sans tracking-[0.2em] text-[#5B0F18] uppercase block mb-3 font-semibold">
              // CAREER OPPORTUNITIES
            </span>
            
            {/* LOCATION SELECTOR / TOGGLE: [ INDIA ] [ UAE ] */}
            <div className="flex items-center justify-center gap-3 p-2 rounded-2xl bg-white border border-[#5B0F18]/15 w-max mx-auto mb-6 shadow-sm">
              <button
                onClick={() => handleLocationToggle("India")}
                className={`relative px-8 py-3 rounded-xl text-[12px] sm:text-[13px] font-sans font-semibold tracking-wider transition-all duration-300 ${
                  activeLocation === "India"
                    ? "bg-[#5B0F18] text-[#F8F1E7] shadow-wine"
                    : "bg-transparent text-[#24191A] hover:text-[#5B0F18]"
                }`}
              >
                <span>INDIA</span>
              </button>
              
              <button
                onClick={() => handleLocationToggle("UAE")}
                className={`relative px-8 py-3 rounded-xl text-[12px] sm:text-[13px] font-sans font-semibold tracking-wider transition-all duration-300 ${
                  activeLocation === "UAE"
                    ? "bg-[#5B0F18] text-[#F8F1E7] shadow-wine"
                    : "bg-transparent text-[#24191A] hover:text-[#5B0F18]"
                }`}
              >
                <span>UAE</span>
              </button>
            </div>

            {/* OPEN ROLE COUNT INDICATOR */}
            <div className="flex items-center justify-center gap-2 text-xs font-sans text-[#6F6261]">
              <MapPin className="w-4 h-4 text-[#5B0F18]" />
              <span className="font-semibold text-[#24191A] uppercase">{activeLocation}</span>
              <span className="text-[#6F6261]">•</span>
              <span className="px-3 py-1 rounded-full bg-white border border-[#5B0F18]/15 font-semibold text-[#5B0F18] shadow-sm">
                0{activeRoles.length} OPEN ROLES
              </span>
            </div>
          </SectionReveal>

          {/* DYNAMICALLY ANIMATED CARDS GRID */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLocation}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className={`grid grid-cols-1 ${
                activeLocation === "UAE"
                  ? "sm:grid-cols-3 max-w-4xl mx-auto"
                  : "sm:grid-cols-2 lg:grid-cols-3"
              } gap-6`}
            >
              {activeRoles.map((role) => (
                <div
                  key={role.id}
                  className="group p-6 rounded-2xl bg-white border border-[#5B0F18]/12 hover:border-[#5B0F18]/40 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-soft-card"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-sans px-2.5 py-1 rounded bg-[#F8F1E7] border border-[#5B0F18]/10 text-[#5B0F18] font-medium">
                        LOCATION: {role.location}
                      </span>
                      <span className="text-[11px] font-sans px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-300 text-emerald-700 font-medium">
                        {role.status}
                      </span>
                    </div>

                    <h3 className="text-[24px] sm:text-[28px] font-display font-semibold text-[#24191A] mb-6 leading-tight group-hover:text-[#5B0F18] transition-colors">
                      {role.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => handleApplyNowClick(role.title, role.location)}
                    className="w-full py-2.5 rounded-xl bg-[#F8F1E7] border border-[#5B0F18]/20 text-[12px] sm:text-[13px] font-sans font-semibold text-[#5B0F18] hover:bg-[#5B0F18] hover:text-[#F8F1E7] hover:border-[#5B0F18] transition-all text-center flex items-center justify-center gap-2 group-button shadow-sm"
                  >
                    <span>APPLY NOW</span>
                    <ArrowDown className="w-3.5 h-3.5 group-button-hover:translate-y-0.5 transition-transform" />
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CAREER APPLICATION FORM */}
        <div id="application-form-block" className="max-w-3xl mx-auto pt-6 mb-24">
          <SectionReveal>
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#5B0F18]/15 backdrop-blur-2xl shadow-soft-card">
              <span className="text-[11px] sm:text-[12px] font-sans tracking-[0.2em] text-[#5B0F18] uppercase block mb-2 font-semibold">
                // SUBMIT CANDIDACY
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-display font-semibold text-[#24191A] mb-2">
                CAREER APPLICATION FORM
              </h2>
              <p className="text-[13px] sm:text-[14px] font-sans text-[#6F6261] mb-8">
                Submit your profile directly to Nine to Nine Hub talent acquisition.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#FCF9F5] border border-[#5B0F18]/30 text-center py-10">
                  <div className="w-12 h-12 rounded-full bg-[#5B0F18]/10 text-[#5B0F18] mx-auto flex items-center justify-center mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#24191A] mb-2">
                    APPLICATION TRANSMITTED
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#6F6261] leading-relaxed max-w-md mx-auto font-sans">
                    Thank you. Our talent acquisition division will review your profile and contact qualified candidates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Error Banner if submission fails */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-sans flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border text-[#24191A] text-[13px] sm:text-[14px] font-sans focus:outline-none transition-colors ${
                          formErrors.fullName ? "border-red-500" : "border-[#5B0F18]/15 focus:border-[#5B0F18]"
                        }`}
                      />
                      {formErrors.fullName && (
                        <span className="text-[11px] font-sans text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {formErrors.fullName}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border text-[#24191A] text-[13px] sm:text-[14px] font-sans focus:outline-none transition-colors ${
                          formErrors.email ? "border-red-500" : "border-[#5B0F18]/15 focus:border-[#5B0F18]"
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-[11px] font-sans text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {formErrors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Phone & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+971 50 128 2100"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border text-[#24191A] text-[13px] sm:text-[14px] font-sans focus:outline-none transition-colors ${
                          formErrors.phone ? "border-red-500" : "border-[#5B0F18]/15 focus:border-[#5B0F18]"
                        }`}
                      />
                      {formErrors.phone && (
                        <span className="text-[11px] font-sans text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {formErrors.phone}
                        </span>
                      )}
                    </div>

                    {/* LOCATION DROPDOWN (India / UAE) */}
                    <div>
                      <label className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                        LOCATION *
                      </label>
                      <select
                        value={formLocation}
                        onChange={(e) => handleFormLocationChange(e.target.value as "India" | "UAE")}
                        className="w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/15 text-[#24191A] text-[13px] sm:text-[14px] font-sans focus:border-[#5B0F18] focus:outline-none transition-colors"
                      >
                        <option value="India">India</option>
                        <option value="UAE">UAE</option>
                      </select>
                      {formErrors.location && (
                        <span className="text-[11px] font-sans text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {formErrors.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* APPLYING FOR DROPDOWN (DYNAMICALLY FILTERED) */}
                  <div>
                    <label className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                      APPLYING FOR * ({formLocation})
                    </label>
                    <select
                      value={formPosition}
                      onChange={(e) => {
                        setFormPosition(e.target.value);
                        if (formErrors.position) setFormErrors((prev) => ({ ...prev, position: "" }));
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/15 text-[#24191A] text-[13px] sm:text-[14px] font-sans focus:border-[#5B0F18] focus:outline-none transition-colors"
                    >
                      {availableFormPositions.map((p) => (
                        <option key={p.id} value={p.title} className="bg-white text-[#24191A]">
                          {p.title} ({p.location})
                        </option>
                      ))}
                    </select>
                    {formErrors.position && (
                      <span className="text-[11px] font-sans text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {formErrors.position}
                      </span>
                    )}
                  </div>

                  {/* RESUME UPLOAD — REQUIRED */}
                  <div>
                    <label className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                      RESUME * (.PDF, .DOC, .DOCX)
                    </label>
                    <label
                      className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-[#FCF9F5] border border-dashed transition-colors cursor-pointer text-center ${
                        formErrors.resume ? "border-red-500 bg-red-50" : "border-[#5B0F18]/20 hover:border-[#5B0F18]"
                      }`}
                    >
                      <Upload className="w-6 h-6 text-[#5B0F18] mb-2" />
                      <span className="text-xs font-sans text-[#24191A] font-semibold mb-1">
                        {resumeFile ? resumeFile.name : "DRAG & DROP YOUR RESUME OR CLICK TO UPLOAD"}
                      </span>
                      <span className="text-[11px] font-sans text-[#6F6261]">
                        Max file size: 10MB
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    {formErrors.resume && (
                      <span className="text-[11px] font-sans text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {formErrors.resume}
                      </span>
                    )}
                  </div>

                  {/* Cover Message */}
                  <div>
                    <label className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
                      COVER MESSAGE / INTRO *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly introduce your background..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border text-[#24191A] text-[13px] sm:text-[14px] font-sans focus:outline-none transition-colors ${
                        formErrors.message ? "border-red-500" : "border-[#5B0F18]/15 focus:border-[#5B0F18]"
                      }`}
                    />
                    {formErrors.message && (
                      <span className="text-[11px] font-sans text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {formErrors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#5B0F18] text-[#F8F1E7] font-sans font-semibold text-[13px] sm:text-[14px] tracking-wider shadow-wine flex items-center justify-center gap-2 hover:bg-[#430B12] transition-all"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SUBMIT APPLICATION</span>
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
    </section>
  );
}
