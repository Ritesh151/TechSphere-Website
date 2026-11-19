"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Award, Sparkles } from "lucide-react";

export default function AboutCompanySection() {
  const column1 = [
    { title: "Website Development", href: "/services/web-development" },
    { title: "Custom Software", href: "/services/erp-solutions" },
    { title: "Cyber Security", href: "/services/cyber-security" },
    { title: "CRM Solutions", href: "/services/crm-solutions" },
  ];

  const column2 = [
    { title: "Mobile Apps", href: "/services/mobile-app-development" },
    { title: "AI Automation", href: "/services/ai-automation" },
    { title: "ERP Solutions", href: "/services/erp-solutions" },
    { title: "Digital Marketing", href: "/services" },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] overflow-hidden border-b border-[#E8DCD1]">
      {/* ========================================================
          BACKGROUND AMBIENT GOLDEN LIGHTING & PULSING ORBS
         ======================================================== */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[540px] h-[540px] bg-gradient-to-tr from-[#EEDFD0]/60 to-[#FAF0E6]/30 rounded-full blur-3xl pointer-events-none continuous-ambient-orb"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 right-10 w-96 h-96 bg-[#FAF0E6]/70 rounded-full blur-3xl pointer-events-none continuous-ambient-orb-2"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* ========================================================
              LEFT COLUMN: CONTINUOUSLY FLOATING ARCHED PICTURE FRAME
             ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Top 3 Diamond Accents with Sequential Continuous Shimmer Twinkle */}
            <div className="flex items-center justify-center gap-2 mb-3.5" aria-hidden="true">
              <span className="diamond-star diamond-1 w-2 h-2 rotate-45 border border-[#94613F]/70" />
              <span className="diamond-star diamond-2 w-2.5 h-2.5 rotate-45 bg-[#94613F] shadow-[0_0_10px_rgba(200,154,98,0.7)]" />
              <span className="diamond-star diamond-3 w-2 h-2 rotate-45 border border-[#94613F]/70" />
            </div>

            {/* Arched Picture Container with Continuous Floating & Breathing */}
            <div className="arch-float-wrapper relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] lg:max-w-[400px]">
              {/* Dynamic Breathing Ambient Shadow */}
              <div className="arch-shadow absolute inset-0 rounded-t-[180px] sm:rounded-t-[200px] rounded-b-[28px] bg-gradient-to-b from-[#2D1E14]/20 via-[#7A4B29]/15 to-transparent blur-2xl -z-10 translate-y-6" />

              {/* Arched Border Frame with Pulsing Golden Border Glow */}
              <div className="arch-border-glow relative rounded-t-[180px] sm:rounded-t-[200px] rounded-b-[28px] overflow-hidden bg-white/70 p-2 sm:p-2.5 border border-[#E8DCD1] shadow-[0_22px_55px_rgba(45,30,20,0.12)]">
                {/* Inner Arch Content */}
                <div className="relative rounded-t-[170px] sm:rounded-t-[190px] rounded-b-[22px] overflow-hidden bg-[#FAF6F1] group aspect-[4/4.8] w-full">
                  <Image
                    src="/images/about-team-new.jpg"
                    alt="TechSphere engineering team collaborating on enterprise digital solutions"
                    fill
                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 400px"
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Continuous Diagonal Luxury Glass Light Sweep */}
                  <div
                    className="arch-light-sweep pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Continuous Floating Trust Badge (100% Delivery • Enterprise Quality) */}
              <div className="badge-continuous-float absolute -bottom-4 right-0 sm:-bottom-5 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#E8DCD1] rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-[0_12px_32px_rgba(45,30,20,0.14)] flex items-center gap-2.5 sm:gap-3 z-20 max-w-[calc(100%-1rem)]">
                {/* Badge Icon with Continuous Glow Pulse */}
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#7A4B29] to-[#432717] text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(122,75,41,0.3)]">
                  <Award className="badge-icon-pulse w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#E5C18D]" strokeWidth={2.2} />
                  {/* Subtle live indicator pulse dot */}
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C18D] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C89A62]" />
                  </span>
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-xs sm:text-[13px] font-bold text-[#2D1E14] leading-tight tracking-tight truncate">
                    100% Delivery
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-medium text-[#78695F] leading-tight mt-0.5 truncate">
                    Enterprise Quality
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: CONTINUOUSLY ANIMATED EDITORIAL & CHECKLIST
             ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* 1. Continuous Animated Eyebrow Badge: ◆ ABOUT COMPANY ◆ */}
            <div className="eyebrow-container inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-4">
              <span className="eyebrow-line h-[1.5px] bg-gradient-to-r from-transparent via-[#94613F] to-[#7A4B29]" />
              <span className="eyebrow-diamond text-[10px] text-[#C89A62]">◆</span>
              <span className="eyebrow-text tracking-[0.2em] font-extrabold">
                ABOUT COMPANY
              </span>
              <span className="eyebrow-diamond text-[10px] text-[#C89A62]">◆</span>
            </div>

            {/* 2. Continuous Animated Main Heading */}
            <h2 className="heading-animated font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-[#2D1E14] leading-[1.16] tracking-tight mb-5">
              <span>Building </span>
              <span className="heading-gradient-shimmer">Smart Digital Solutions</span>
              <br className="hidden sm:inline" />
              <span> For </span>
              <span className="heading-gold-accent">Growing Businesses</span>
            </h2>

            {/* 3. Description Paragraph with Continuous Soft Ambient Clarity */}
            <p className="description-ambient text-sm sm:text-base text-[#6B5E55] leading-relaxed mb-8 max-w-2xl font-normal">
              At TechSphere, we blend creativity with cutting-edge technology to
              build enterprise-grade software that drives results. We don&apos;t just
              write code; we engineer scalable solutions tailored to elevate
              your business operations and accelerate your digital transformation
              journey.
            </p>

            {/* 4. Continuous Sequential Waves Checklist (8 items) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 mb-8">
              {/* Column 1 */}
              <div className="flex flex-col">
                {column1.map((item, idx) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="check-item-row relative flex items-center gap-3 py-3 border-b border-[#E8DCD1]/70 group cursor-pointer overflow-hidden transition-all duration-200"
                    style={{ animationDelay: `${idx * 0.4}s` }}
                  >
                    {/* Continuous Moving Light Sparkle on Line */}
                    <span
                      className="check-line-sparkle pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-20 bg-gradient-to-r from-transparent via-[#C89A62] to-transparent"
                      style={{ animationDelay: `${idx * 0.6}s` }}
                      aria-hidden="true"
                    />

                    {/* Continuous Pulsing Checkmark Badge */}
                    <span
                      className="check-box-pulse w-5 h-5 rounded-[4px] bg-[#F0E6DC] text-[#7A4B29] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#7A4B29] group-hover:text-white group-hover:scale-110"
                      style={{ animationDelay: `${idx * 0.45}s` }}
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>

                    {/* Label with Continuous Subtle Depth */}
                    <span className="text-sm sm:text-[15px] font-medium text-[#2D1E14] transition-all duration-200 group-hover:text-[#7A4B29] group-hover:translate-x-1">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col">
                {column2.map((item, idx) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="check-item-row relative flex items-center gap-3 py-3 border-b border-[#E8DCD1]/70 group cursor-pointer overflow-hidden transition-all duration-200"
                    style={{ animationDelay: `${(idx + 4) * 0.4}s` }}
                  >
                    {/* Continuous Moving Light Sparkle on Line */}
                    <span
                      className="check-line-sparkle pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-20 bg-gradient-to-r from-transparent via-[#C89A62] to-transparent"
                      style={{ animationDelay: `${(idx + 4) * 0.6}s` }}
                      aria-hidden="true"
                    />

                    {/* Continuous Pulsing Checkmark Badge */}
                    <span
                      className="check-box-pulse w-5 h-5 rounded-[4px] bg-[#F0E6DC] text-[#7A4B29] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#7A4B29] group-hover:text-white group-hover:scale-110"
                      style={{ animationDelay: `${(idx + 4) * 0.45}s` }}
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>

                    {/* Label with Continuous Subtle Depth */}
                    <span className="text-sm sm:text-[15px] font-medium text-[#2D1E14] transition-all duration-200 group-hover:text-[#7A4B29] group-hover:translate-x-1">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 5. Continuous Animated CTA Button: Know More → */}
            <Link
              href="/about"
              className="cta-continuous-btn relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#7A4B29] hover:bg-[#5A3620] px-7 py-3.5 text-sm sm:text-[15px] font-semibold text-white transition-all active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A4B29] w-full xs:w-auto"
            >
              {/* Continuous Button Shimmer Light Pass */}
              <span
                className="btn-continuous-shimmer pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                aria-hidden="true"
              />

              <span className="relative z-10 flex items-center gap-1.5">
                <span>Know More</span>
                <Sparkles className="w-3.5 h-3.5 text-[#E5C18D] animate-spin-slow opacity-90" />
              </span>
              <ArrowRight className="cta-arrow-bounce relative z-10 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================
          CSS KEYFRAMES: CONTINUOUS 60FPS HARDWARE-ACCELERATED ANIMATIONS
         ======================================================== */}
      <style jsx>{`
        /* 1. Continuous Floating Arch Frame */
        .arch-float-wrapper {
          animation: continuousFloat 6s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes continuousFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        /* Continuous Breathing Shadow */
        .arch-shadow {
          animation: continuousShadow 6s ease-in-out infinite;
        }

        @keyframes continuousShadow {
          0%,
          100% {
            transform: translateY(24px) scale(0.96);
            opacity: 0.55;
          }
          50% {
            transform: translateY(34px) scale(1.03);
            opacity: 0.85;
          }
        }

        /* Continuous Border Glow Pulse */
        .arch-border-glow {
          animation: borderGlowPulse 5s ease-in-out infinite;
        }

        @keyframes borderGlowPulse {
          0%,
          100% {
            border-color: #e8dcd1;
          }
          50% {
            border-color: #d1b498;
          }
        }

        /* Continuous Arch Glass Sheen Sweep */
        .arch-light-sweep {
          animation: sweepLight 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes sweepLight {
          0%,
          45% {
            transform: translateX(-100%) skewX(-20deg);
          }
          75%,
          100% {
            transform: translateX(220%) skewX(-20deg);
          }
        }

        /* Continuous 3 Diamond Sparkles */
        .diamond-star {
          animation: continuousTwinkle 2.8s ease-in-out infinite;
        }

        .diamond-1 {
          animation-delay: 0s;
        }
        .diamond-2 {
          animation-delay: 0.4s;
        }
        .diamond-3 {
          animation-delay: 0.8s;
        }

        @keyframes continuousTwinkle {
          0%,
          100% {
            transform: rotate(45deg) scale(1);
            opacity: 0.65;
          }
          50% {
            transform: rotate(45deg) scale(1.3);
            opacity: 1;
            filter: drop-shadow(0 0 4px #c89a62);
          }
        }

        /* 2. Continuous Badge Floating with Counter-Phase */
        .badge-continuous-float {
          animation: badgeLevitate 5s ease-in-out infinite;
        }

        @keyframes badgeLevitate {
          0%,
          100% {
            transform: translateY(0px);
            box-shadow: 0 12px 32px rgba(45, 30, 20, 0.14);
          }
          50% {
            transform: translateY(-6px);
            box-shadow: 0 18px 40px rgba(122, 75, 41, 0.22);
          }
        }

        .badge-icon-pulse {
          animation: iconPulse 3s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.12);
          }
        }

        /* 3. Continuous Animated Eyebrow: ◆ ABOUT COMPANY ◆ */
        .eyebrow-text {
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
            width: 24px;
            opacity: 0.5;
          }
          50% {
            width: 44px;
            opacity: 0.9;
          }
        }

        .eyebrow-diamond {
          animation: diamondSpin 4s ease-in-out infinite;
        }

        @keyframes diamondSpin {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.25);
            opacity: 1;
            filter: drop-shadow(0 0 3px #c89a62);
          }
        }

        /* 4. Continuous Animated Heading: Building Smart Digital Solutions For Growing Businesses */
        .heading-gradient-shimmer {
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

        .heading-gold-accent {
          color: #7a4b29;
          position: relative;
          display: inline-block;
          animation: goldAccentBreathe 4s ease-in-out infinite;
        }

        @keyframes goldAccentBreathe {
          0%,
          100% {
            color: #7a4b29;
          }
          50% {
            color: #5a3620;
            text-shadow: 0 0 16px rgba(200, 154, 98, 0.35);
          }
        }

        /* 5. Continuous Sequential Waves Checklist Animation */
        .check-box-pulse {
          animation: checkPulse 3.5s ease-in-out infinite;
        }

        @keyframes checkPulse {
          0%,
          100% {
            transform: scale(1);
            background-color: #f0e6dc;
            color: #7a4b29;
          }
          45%,
          55% {
            transform: scale(1.14);
            background-color: #e6d3c2;
            color: #5a3620;
            box-shadow: 0 2px 10px rgba(122, 75, 41, 0.22);
          }
        }

        .check-line-sparkle {
          animation: lineSparkle 4s ease-in-out infinite;
        }

        @keyframes lineSparkle {
          0% {
            left: -20%;
            opacity: 0;
          }
          30% {
            opacity: 0.8;
          }
          70% {
            opacity: 0.8;
          }
          100% {
            left: 110%;
            opacity: 0;
          }
        }

        /* 6. Continuous CTA Button Animation: Know More → */
        .cta-continuous-btn {
          animation: btnPulseGlow 3.5s ease-in-out infinite;
        }

        @keyframes btnPulseGlow {
          0%,
          100% {
            box-shadow: 0 4px 16px rgba(122, 75, 41, 0.25);
            transform: translateY(0);
          }
          50% {
            box-shadow: 0 10px 28px rgba(122, 75, 41, 0.42), 0 0 15px rgba(200, 154, 98, 0.3);
            transform: translateY(-2px);
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

        .cta-arrow-bounce {
          animation: arrowBounce 2s ease-in-out infinite;
        }

        @keyframes arrowBounce {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
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

        /* Continuous Ambient Orbs in Background */
        .continuous-ambient-orb {
          animation: orbDrift 9s ease-in-out infinite alternate;
          will-change: transform;
          transform: translateZ(0);
        }

        @keyframes orbDrift {
          0% {
            transform: translateY(-50%) scale(1) translateZ(0);
            opacity: 0.45;
          }
          100% {
            transform: translateY(-46%) scale(1.08) translateZ(0);
            opacity: 0.65;
          }
        }

        .continuous-ambient-orb-2 {
          animation: orbDrift2 11s ease-in-out infinite alternate;
          will-change: transform;
          transform: translateZ(0);
        }

        @keyframes orbDrift2 {
          0% {
            transform: scale(0.96) translateZ(0);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.08) translateZ(0);
            opacity: 0.75;
          }
        }

        /* Accessibility: Pause on reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .arch-float-wrapper,
          .arch-shadow,
          .arch-border-glow,
          .arch-light-sweep,
          .diamond-star,
          .badge-continuous-float,
          .badge-icon-pulse,
          .eyebrow-text,
          .eyebrow-line,
          .eyebrow-diamond,
          .heading-gradient-shimmer,
          .heading-gold-accent,
          .check-box-pulse,
          .check-line-sparkle,
          .cta-continuous-btn,
          .btn-continuous-shimmer,
          .cta-arrow-bounce,
          .animate-spin-slow,
          .continuous-ambient-orb,
          .continuous-ambient-orb-2 {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
