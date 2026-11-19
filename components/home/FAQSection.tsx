"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare, Sparkles } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: "How does TechSphere ensure project timelines and on-time delivery?",
      answer:
        "We operate with strict agile sprint cycles, clear weekly milestones, and dedicated full-stack engineering pods. You receive transparent dashboard visibility, daily asynchronous updates, and continuous staging releases so you always have real-time access to your evolving product.",
    },
    {
      question: "What modern technology stacks and frameworks do you specialize in?",
      answer:
        "Our engineering teams specialize in full-stack cloud architectures including Next.js, React 19, Node.js, Python, Flutter, PostgreSQL, Redis, Kubernetes, Docker, and Zero-Trust cybersecurity frameworks, alongside custom AI automation workflows and enterprise ERP/CRM systems.",
    },
    {
      question: "Who retains ownership of the source code and intellectual property?",
      answer:
        "You retain 100% intellectual property (IP) and commercial ownership of all source code, design assets, databases, and deployment keys. All deliverables are transferred seamlessly to your internal repositories upon milestone completion.",
    },
    {
      question: "Do you provide post-launch maintenance, SLAs, and technical support?",
      answer:
        "Yes, every enterprise deployment includes comprehensive 24/7 uptime monitoring, critical security patching, performance optimization, and flexible SLA maintenance tiers tailored to your traffic volume and operational needs.",
    },
    {
      question: "Can TechSphere modernize or refactor our existing legacy software?",
      answer:
        "Absolutely. Our principal architects perform a rigorous code and infrastructure audit, isolate technical debt, and execute a zero-downtime microservices modernization strategy to improve performance without disrupting active daily operations.",
    },
    {
      question: "How do we get started and what is the typical onboarding timeline?",
      answer:
        "Getting started begins with an initial technical discovery session. Within 48 hours, we deliver a detailed architectural proposal and milestone roadmap. Once approved, our dedicated senior engineers can begin sprint execution immediately.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] overflow-hidden border-b border-[#E8DCD1]">
      {/* Background Ambient Warm Lighting with Drift */}
      <div
        className="ambient-orb-1 absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#EEDFD0]/60 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="ambient-orb-2 absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#FAF0E6]/70 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            HEADER: CONTINUOUS ANIMATED HEADLINE & EYEBROW
           ======================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Badge with Continuous Gold Shimmer & Pulsing Diamonds */}
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-3.5">
            <span className="eyebrow-line h-[1.5px] bg-gradient-to-r from-transparent via-[#94613F] to-[#7A4B29]" />
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="eyebrow-shimmer-text tracking-[0.22em] font-extrabold">
              GOT QUESTIONS?
            </span>
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="eyebrow-line h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#2D1E14] leading-[1.15] tracking-tight mb-4">
            <span>Frequently </span>
            <span className="heading-cap-shimmer">Asked Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6B5E55] leading-relaxed font-normal">
            Everything you need to know about partnering with TechSphere, our
            development lifecycle, and delivery standards.
          </p>
        </div>

        {/* ========================================================
            ACCORDION FAQS LIST WITH CONTINUOUS ANIMATIONS
           ======================================================== */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const floatClass = index % 2 === 0 ? "anim-card-float-1" : "anim-card-float-2";

            return (
              <div
                key={faq.question}
                className={`${floatClass} relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#7A4B29]/60 shadow-[0_12px_36px_rgba(122,75,41,0.12)]"
                    : "bg-white/80 hover:bg-white border-[#E8DCD1] hover:border-[#7A4B29]/40 shadow-xs"
                }`}
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                {/* Continuous Glowing Top Border Beam */}
                <div
                  className="anim-border-beam absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C89A62] to-transparent pointer-events-none"
                  style={{ animationDelay: `${(index % 3) * 0.9}s` }}
                  aria-hidden="true"
                />

                {/* Active Left Indicator Bar */}
                {isOpen && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#7A4B29] via-[#C89A62] to-[#7A4B29]"
                    aria-hidden="true"
                  />
                )}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                    {/* Continuous Pulsing Icon */}
                    <span
                      className={`anim-icon-pulse w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors shadow-xs ${
                        isOpen
                          ? "bg-[#7A4B29] text-white shadow-[0_2px_10px_rgba(122,75,41,0.3)]"
                          : "bg-[#FAF1E8] text-[#7A4B29]"
                      }`}
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <HelpCircle className="h-4.5 w-4.5" strokeWidth={2.2} />
                    </span>

                    <span
                      className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                        isOpen ? "text-[#7A4B29]" : "text-[#2D1E14]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#FAF1E8] text-[#7A4B29] rotate-180 shadow-xs"
                        : "bg-[#FAF6F1] text-[#78695F]"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                </button>

                {/* Animated Dropdown Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-[15px] text-[#6B5E55] leading-relaxed pl-4 sm:pl-16 border-t border-[#EEE5DC]/60 mt-1 pt-3.5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            BOTTOM HELP CARD WITH CONTINUOUS LEVITATION & PULSE
           ======================================================== */}
        <div className="anim-card-float-1 mt-12 sm:mt-16 rounded-2xl bg-white/95 border border-[#E8DCD1] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_8px_30px_rgba(45,30,20,0.06)] relative overflow-hidden">
          {/* Top subtle golden shimmer border */}
          <div
            className="anim-border-beam absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C89A62] to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="flex items-center gap-4 text-left">
            <div className="anim-icon-pulse w-12 h-12 rounded-xl bg-[#FAF1E8] text-[#7A4B29] flex items-center justify-center flex-shrink-0 shadow-xs">
              <MessageSquare className="h-6 w-6" strokeWidth={1.9} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base sm:text-lg font-bold text-[#2D1E14]">
                  Still have questions?
                </h4>
                <Sparkles className="w-4 h-4 text-[#C89A62] animate-spin-slow" />
              </div>
              <p className="text-xs sm:text-sm text-[#6B5E55] mt-0.5">
                Our principal technical architects are available for a confidential consultation.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl bg-[#7A4B29] hover:bg-[#5A3620] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(122,75,41,0.25)] hover:shadow-[0_8px_24px_rgba(122,75,41,0.35)] transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap group focus:outline-none w-full sm:w-auto"
          >
            {/* Button Shimmer */}
            <span
              className="btn-continuous-shimmer pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
              aria-hidden="true"
            />
            <span className="relative z-10">Contact Us</span>
            <ArrowRight className="anim-arrow-bounce relative z-10 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ========================================================
          CSS KEYFRAMES: HEADLINE METALLIC PAN & SHIMMER
         ======================================================== */}
      <style jsx>{`
        .eyebrow-shimmer-text {
          background: linear-gradient(
            90deg,
            #7a4b29 0%,
            #c89a62 30%,
            #e5c18d 50%,
            #c89a62 70%,
            #7a4b29 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerText 4.5s linear infinite;
        }

        @keyframes shimmerText {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .eyebrow-line {
          width: 28px;
          animation: expandLine 3.5s ease-in-out infinite;
        }

        @keyframes expandLine {
          0%,
          100% {
            width: 22px;
            opacity: 0.5;
          }
          50% {
            width: 42px;
            opacity: 0.9;
          }
        }

        .heading-cap-shimmer {
          background: linear-gradient(
            90deg,
            #2d1e14 0%,
            #7a4b29 25%,
            #c89a62 50%,
            #7a4b29 75%,
            #2d1e14 100%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: headingPan 6s linear infinite;
          display: inline-block;
        }

        @keyframes headingPan {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 250% center;
          }
        }

        .btn-continuous-shimmer {
          animation: btnContinuousShine 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes btnContinuousShine {
          0%,
          50% {
            transform: translateX(-100%);
          }
          80%,
          100% {
            transform: translateX(100%);
          }
        }

        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }

        @keyframes spinSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .eyebrow-shimmer-text,
          .eyebrow-line,
          .heading-cap-shimmer,
          .btn-continuous-shimmer,
          .animate-spin-slow {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
