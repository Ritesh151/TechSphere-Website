"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Building2,
  Headphones,
  Zap,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Development",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#2D1E14] overflow-hidden">
      {/* ========================================================
          1. CONTACT HERO HEADER WITH METALLIC AMBIENCE
         ======================================================== */}
      <section className="relative w-full pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#E8DCD1] bg-gradient-to-b from-[#FAF6F1] via-[#FAF7F2] to-[#FAF8F5] overflow-hidden">
        {/* Ambient Drifting Orbs */}
        <div
          className="anim-orb-1 pointer-events-none absolute -top-36 -left-20 w-[620px] h-[520px] rounded-full bg-gradient-to-br from-[#F5E6D8]/80 via-[#EEDFD0]/40 to-transparent blur-3xl -z-0"
          aria-hidden="true"
        />
        <div
          className="anim-orb-2 pointer-events-none absolute top-1/2 -right-24 w-[560px] h-[560px] rounded-full bg-gradient-to-tl from-[#F5EAE0]/70 via-[#EBD9CA]/30 to-transparent blur-3xl -z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#94613F] mb-4">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#94613F] to-[#7A4B29]" />
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="eyebrow-shimmer tracking-[0.22em] font-extrabold text-[#7A4B29]">
              START A CONVERSATION &bull; DIRECT CHANNELS
            </span>
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1E14] leading-[1.12] tracking-tight mb-5">
            <span>Let&apos;s Build Your Next </span>
            <span className="gold-text-shimmer">Digital Advantage</span>
          </h1>

          <p className="text-base sm:text-lg text-[#65442F] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Have a project in mind, need an architectural consultation, or exploring an enterprise technology partnership? Connect with our principal engineering pod.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white/85 backdrop-blur-md border border-[#E8DCD1] px-3.5 py-2 rounded-xl text-xs font-semibold text-[#7A4B29] shadow-xs max-w-full">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span>2-Hour Median SLA Response</span>
            <span className="text-[#C89A62] font-mono">•</span>
            <span className="text-[#8C5D38] font-mono">Confidentiality Protected Under Mutual NDA</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CONTACT DETAILS & INTERACTIVE FORM GRID
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E8DCD1]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#94613F] mb-2 block">
                DIRECT COMMUNICATIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1E14] mb-6">
                Connect Directly with Leadership &amp; Engineering Pods
              </h2>

              <div className="space-y-4 mb-8">
                {/* Phone */}
                <a
                  href="tel:+919662873599"
                  className="anim-card-float-1 group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8DCD1] hover:border-[#7A4B29]/70 hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl overflow-hidden">
                    <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF1E8] text-[#7A4B29] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A4B29] group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <div>
                    <span className="text-xs text-[#785A44] font-medium block">Architecture Hotline (India)</span>
                    <h4 className="text-base font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors">
                      +91 9662873599
                    </h4>
                    <span className="text-[11px] text-[#16A34A] font-semibold mt-0.5 inline-block">
                      Available Mon–Sat, 9AM–8PM IST
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:techspheretechnology@gmail.com"
                  className="anim-card-float-2 group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8DCD1] hover:border-[#7A4B29]/70 hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl overflow-hidden">
                    <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF1E8] text-[#7A4B29] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A4B29] group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <div>
                    <span className="text-xs text-[#785A44] font-medium block">Enterprise Inquiries &amp; RFPs</span>
                    <h4 className="text-sm xs:text-base font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors break-all">
                      techspheretechnology@gmail.com
                    </h4>
                    <span className="text-[11px] text-[#8C5D38] font-medium mt-0.5 inline-block">
                      Response within 2 hours
                    </span>
                  </div>
                </a>

                {/* Headquarters */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8DCD1] shadow-2xs">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF1E8] text-[#7A4B29] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <div>
                    <span className="text-xs text-[#785A44] font-medium block">Global Headquarters</span>
                    <h4 className="text-sm font-bold text-[#2D1E14] leading-snug mt-0.5">
                      TechSphere IT Solutions Tower, SG Highway, Ahmedabad, Gujarat, India &ndash; 380054
                    </h4>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8DCD1] shadow-2xs">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF1E8] text-[#7A4B29] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <div>
                    <span className="text-xs text-[#785A44] font-medium block">Operating Schedule</span>
                    <h4 className="text-sm font-bold text-[#2D1E14] mt-0.5">
                      Monday &ndash; Friday: 9:00 AM &ndash; 7:00 PM IST
                    </h4>
                    <span className="text-[11px] text-[#8C5D38] block mt-0.5">
                      (24/7 SLA Engineering Pods Active for Production Support)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Guarantee Box */}
            <div className="p-6 rounded-[24px] bg-[#F5EAE0] border border-[#E8DCD1] shadow-2xs">
              <div className="flex items-center gap-2.5 text-[#7A4B29] font-bold text-sm mb-2">
                <ShieldCheck className="h-5 w-5 text-[#16A34A]" />
                <span>Strict NDA &amp; Data Privacy Guarantee</span>
              </div>
              <p className="text-xs text-[#6B5E55] leading-relaxed">
                Every technical specification and business concept you share is legally protected under mutual non-disclosure agreements before our review starts.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-[32px] border border-[#E8DCD1] p-7 sm:p-10 shadow-[0_16px_45px_rgba(45,30,20,0.08)]">
            {submitted ? (
              <div className="py-16 flex flex-col items-center text-center">
                <div className="w-18 h-18 rounded-full bg-[#FAF1E8] text-[#7A4B29] flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 className="h-10 w-10 text-[#16A34A]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#94613F] mb-2">
                  MESSAGE TRANSMITTED
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1E14] mb-3">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-sm sm:text-base text-[#65442F] max-w-md leading-relaxed mb-8">
                  Thank you, <strong className="text-[#2D1E14]">{formData.name}</strong>. Our principal architects have received your requirements for <strong className="text-[#7A4B29]">{formData.service}</strong> and will contact you via <strong className="text-[#2D1E14]">{formData.email}</strong> within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 rounded-full bg-[#7A4B29] text-white text-xs sm:text-sm font-bold hover:bg-[#5A3620] transition-colors cursor-pointer shadow-md"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#94613F] block mb-1">
                    FAST DISCOVERY DISPATCH
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1E14]">
                    Schedule an Architecture Discovery Call
                  </h3>
                  <p className="text-xs sm:text-sm text-[#785A44] mt-1">
                    Fill in your project parameters and our principal engineering pod will reach out with a tailored roadmap.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D1E14] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8DCD1] bg-[#FAF7F2] text-base sm:text-sm text-[#2D1E14] placeholder-[#A08F83] focus:outline-none focus:ring-2 focus:ring-[#7A4B29]/30 focus:border-[#7A4B29]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D1E14] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8DCD1] bg-[#FAF7F2] text-base sm:text-sm text-[#2D1E14] placeholder-[#A08F83] focus:outline-none focus:ring-2 focus:ring-[#7A4B29]/30 focus:border-[#7A4B29]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D1E14] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 96628 73599"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8DCD1] bg-[#FAF7F2] text-base sm:text-sm text-[#2D1E14] placeholder-[#A08F83] focus:outline-none focus:ring-2 focus:ring-[#7A4B29]/30 focus:border-[#7A4B29]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D1E14] mb-1.5">
                      Company Name / URL
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8DCD1] bg-[#FAF7F2] text-base sm:text-sm text-[#2D1E14] placeholder-[#A08F83] focus:outline-none focus:ring-2 focus:ring-[#7A4B29]/30 focus:border-[#7A4B29]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D1E14] mb-1.5">
                    Service Area of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8DCD1] bg-[#FAF7F2] text-base sm:text-sm text-[#2D1E14] focus:outline-none focus:ring-2 focus:ring-[#7A4B29]/30 focus:border-[#7A4B29]"
                  >
                    <option value="Web Development">Website &amp; Portal Development</option>
                    <option value="Mobile App Development">Mobile App (iOS &amp; Android)</option>
                    <option value="AI Automation">AI Workflows &amp; Machine Learning</option>
                    <option value="ERP Solutions">ERP Solutions &amp; System Architecture</option>
                    <option value="CRM Development">CRM Platform &amp; Retention</option>
                    <option value="Cyber Security">Cyber Security Audit &amp; Defense</option>
                    <option value="Cloud Deployment">Cloud Architecture &amp; Kubernetes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D1E14] mb-1.5">
                    Project Overview, Scopes &amp; Desired Timeline *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your objectives, current stack, and desired deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8DCD1] bg-[#FAF7F2] text-base sm:text-sm text-[#2D1E14] placeholder-[#A08F83] focus:outline-none focus:ring-2 focus:ring-[#7A4B29]/30 focus:border-[#7A4B29]"
                  />
                </div>

                <button
                  type="submit"
                  className="anim-badge-pulse w-full py-3.5 sm:py-4 px-4 sm:px-8 rounded-full bg-[#7A4B29] hover:bg-[#5A3620] text-white font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(122,75,41,0.25)] hover:shadow-[0_8px_24px_rgba(122,75,41,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] text-center"
                >
                  <Send className="h-4 w-4 flex-shrink-0" />
                  <span>Submit Inquiry &amp; Schedule Discovery Call</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Styled JSX for Shimmers and Ambient Lighting */}
      <style jsx>{`
        .gold-text-shimmer {
          background: linear-gradient(
            90deg,
            #2d1e14 0%,
            #7a4b29 25%,
            #c89a62 50%,
            #7a4b29 75%,
            #2d1e14 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmerSweep 5s linear infinite;
        }

        .eyebrow-shimmer {
          background: linear-gradient(
            90deg,
            #94613f 0%,
            #c89a62 50%,
            #94613f 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmerSweep 4s linear infinite;
        }

        @keyframes textShimmerSweep {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .anim-orb-1 {
          animation: orbDrift1 12s ease-in-out infinite alternate;
        }

        .anim-orb-2 {
          animation: orbDrift2 14s ease-in-out infinite alternate;
        }

        @keyframes orbDrift1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(30px, 20px) scale(1.08);
          }
        }

        @keyframes orbDrift2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-25px, -15px) scale(1.05);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gold-text-shimmer,
          .eyebrow-shimmer,
          .anim-orb-1,
          .anim-orb-2 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
