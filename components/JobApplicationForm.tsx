"use client";

import React, { useState } from "react";
import { Send, Check, Upload, AlertCircle } from "lucide-react";
import { INDIA_ROLES, UAE_ROLES } from "@/data/careers";

interface JobApplicationFormProps {
  initialLocation?: "India" | "UAE";
  initialPosition?: string;
  isSpecificRole?: boolean;
}

export default function JobApplicationForm({
  initialLocation = "India",
  initialPosition,
  isSpecificRole = false,
}: JobApplicationFormProps) {
  const [formLocation, setFormLocation] = useState<"India" | "UAE">(initialLocation);
  const defaultPos =
    initialPosition || (initialLocation === "UAE" ? UAE_ROLES[0].title : INDIA_ROLES[0].title);
  const [formPosition, setFormPosition] = useState<string>(defaultPos);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [honeypot, setHoneypot] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const availablePositions = formLocation === "UAE" ? UAE_ROLES : INDIA_ROLES;

  const handleFormLocationChange = (newLoc: "India" | "UAE") => {
    setFormLocation(newLoc);
    const newPositions = newLoc === "UAE" ? UAE_ROLES : INDIA_ROLES;
    setFormPosition(newPositions[0].title);
    if (formErrors.location) {
      setFormErrors((prev) => ({ ...prev, location: "" }));
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
      const validExtensions = [".pdf", ".doc", ".docx"];
      const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

      if (!validExtensions.includes(fileExtension)) {
        setFormErrors((prev) => ({
          ...prev,
          resume: "Invalid file type. Only .pdf, .doc, and .docx formats are accepted.",
        }));
        setResumeFile(null);
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        setFormErrors((prev) => ({ ...prev, resume: "File size exceeds 10MB limit." }));
        setResumeFile(null);
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
      errors.resume = "Please upload your resume (.pdf, .doc, or .docx).";
    }
    if (!formData.message.trim()) {
      errors.message = "Please enter a short introduction.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
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

        // GA4 tracking: Fire generate_lead event on verified successful submission
        if (
          typeof window !== "undefined" &&
          typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function"
        ) {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
            "event",
            "generate_lead",
            {
              event_category: "Career Application",
              event_label: `${formPosition} (${formLocation})`,
            }
          );
        }
      } else {
        setSubmitError(
          result.error ||
            "Something went wrong while submitting your application. Please try again or contact our team directly."
        );
      }
    } catch {
      setSubmitError(
        "Something went wrong while submitting your application. Please try again or contact our team directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="application-form-block" className="p-8 sm:p-12 rounded-3xl bg-white border border-[#5B0F18]/15 shadow-soft-card">
      <span className="text-[11px] sm:text-[12px] font-sans tracking-[0.2em] text-[#5B0F18] uppercase block mb-2 font-semibold">
        // SUBMIT CANDIDACY
      </span>
      <h2 className="text-[26px] sm:text-[32px] font-display font-semibold text-[#24191A] mb-2">
        {isSpecificRole ? `Apply for ${formPosition}` : "Career Application Form"}
      </h2>
      <p className="text-[13px] sm:text-[14px] font-sans text-[#6F6261] mb-8 leading-relaxed">
        Submit your profile directly to Nine to Nine Hub talent acquisition.
      </p>

      {isSubmitted ? (
        <div className="p-8 sm:p-10 rounded-2xl bg-[#FCF9F5] border border-[#5B0F18]/30 text-center py-10">
          <div className="w-12 h-12 rounded-full bg-[#5B0F18]/10 text-[#5B0F18] mx-auto flex items-center justify-center mb-4">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-display font-bold text-[#24191A] mb-2">
            APPLICATION RECEIVED
          </h3>
          <p className="text-[13px] sm:text-[14px] text-[#6F6261] leading-relaxed max-w-md mx-auto font-sans">
            Thank you for applying for the {formPosition} role ({formLocation}). Our team will review your application and contact qualified candidates.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Honeypot field (hidden from users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="career-website-hp">Leave this field blank</label>
            <input
              id="career-website-hp"
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Error Banner */}
          {submitError && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-sans flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider"
              >
                FULL NAME *
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your Full Name"
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
              <label
                htmlFor="email"
                className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider"
              >
                EMAIL ADDRESS *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@example.com"
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
              <label
                htmlFor="phone"
                className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider"
              >
                PHONE NUMBER *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                autoComplete="tel"
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

            <div>
              <label
                htmlFor="location"
                className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider"
              >
                LOCATION *
              </label>
              <select
                id="location"
                value={formLocation}
                onChange={(e) => handleFormLocationChange(e.target.value as "India" | "UAE")}
                className="w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/15 text-[#24191A] text-[13px] sm:text-[14px] font-sans focus:border-[#5B0F18] focus:outline-none transition-colors"
              >
                <option value="India">India</option>
                <option value="UAE">UAE (Dubai)</option>
              </select>
            </div>
          </div>

          {/* Position Selector */}
          <div>
            <label
              htmlFor="position"
              className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider"
            >
              APPLYING FOR * ({formLocation})
            </label>
            <select
              id="position"
              value={formPosition}
              onChange={(e) => {
                setFormPosition(e.target.value);
                if (formErrors.position) setFormErrors((prev) => ({ ...prev, position: "" }));
              }}
              className="w-full px-4 py-3 rounded-xl bg-[#FCF9F5] border border-[#5B0F18]/15 text-[#24191A] text-[13px] sm:text-[14px] font-sans focus:border-[#5B0F18] focus:outline-none transition-colors"
            >
              {availablePositions.map((p) => (
                <option key={p.id} value={p.title} className="bg-white text-[#24191A]">
                  {p.title} ({p.location})
                </option>
              ))}
            </select>
          </div>

          {/* Resume Upload (.pdf, .doc, .docx) */}
          <div>
            <label className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider">
              RESUME * (.PDF, .DOC, .DOCX — MAX 10MB)
            </label>
            <label
              className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-[#FCF9F5] border border-dashed transition-colors cursor-pointer text-center ${
                formErrors.resume ? "border-red-500 bg-red-50" : "border-[#5B0F18]/20 hover:border-[#5B0F18]"
              }`}
            >
              <Upload className="w-6 h-6 text-[#5B0F18] mb-2" />
              <span className="text-xs font-sans text-[#24191A] font-semibold mb-1">
                {resumeFile ? resumeFile.name : "DRAG & DROP YOUR RESUME OR CLICK TO BROWSE"}
              </span>
              <span className="text-[11px] font-sans text-[#6F6261]">
                Accepted formats: .pdf, .doc, .docx (Max: 10MB)
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
            <label
              htmlFor="message"
              className="block text-[11px] sm:text-[12px] font-sans text-[#24191A] mb-2 font-medium uppercase tracking-wider"
            >
              COVER MESSAGE / INTRODUCTION *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Briefly introduce your background, key strengths, and why you would like to join Nine to Nine Hub..."
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
            className="w-full py-4 rounded-xl bg-[#5B0F18] text-[#F8F1E7] font-sans font-semibold text-[13px] sm:text-[14px] tracking-wider shadow-wine flex items-center justify-center gap-2 hover:bg-[#430B12] disabled:opacity-70 transition-all cursor-pointer"
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
          <p className="text-[11px] sm:text-xs font-sans text-[#6F6261] text-center leading-relaxed mt-2">
            We use your personal information and resume solely for talent acquisition and recruitment purposes.
          </p>
        </form>
      )}
    </div>
  );
}

