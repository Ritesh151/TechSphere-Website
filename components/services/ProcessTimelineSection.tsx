"use client";

import { useState } from "react";
import {
  Search,
  Calendar,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  Wrench,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export interface ProcessStep {
  num: string;
  phase: string;
  title: string;
  desc: string;
  icon: typeof Search;
}

const steps: ProcessStep[] = [
  {
    num: "01",
    phase: "Phase 01",
    title: "Discovery",
    desc: "Understanding goals.",
    icon: Search,
  },
  {
    num: "02",
    phase: "Phase 02",
    title: "Planning",
    desc: "Technical roadmap.",
    icon: Calendar,
  },
  {
    num: "03",
    phase: "Phase 03",
    title: "UI Design",
    desc: "Visual prototyping.",
    icon: Palette,
  },
  {
    num: "04",
    phase: "Phase 04",
    title: "Development",
    desc: "Agile coding.",
    icon: Code2,
  },
  {
    num: "05",
    phase: "Phase 05",
    title: "Testing",
    desc: "Rigorous QA.",
    icon: ShieldCheck,
  },
  {
    num: "06",
    phase: "Phase 06",
    title: "Deployment",
    desc: "Go live securely.",
    icon: Rocket,
  },
  {
    num: "07",
    phase: "Phase 07",
    title: "Maintenance",
    desc: "Ongoing support.",
    icon: Wrench,
  },
];

export default function ProcessTimelineSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const currentActive = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] overflow-hidden border-b border-[#E8DCD1]">
      {/* Background Ambient Lighting & Noise Texture */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full bg-gradient-to-tr from-[#F5E6D8]/60 via-[#EBD9CA]/30 to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#FAF0E6]/80 to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            HEADER: HEADLINE & EXACT DESCRIPTION
           ======================================================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1E14] tracking-tight mb-4 leading-[1.15]">
            <span>How We Turn </span>
            <span className="gold-text-shimmer">Ideas Into Reality</span>
          </h2>

          <p className="text-base sm:text-lg text-[#65442F] leading-relaxed max-w-2xl font-normal">
            A battle-tested delivery framework that keeps projects on time, on budget, and beyond expectations.
          </p>
        </div>

        {/* ========================================================
            DESKTOP TIMELINE (Large Screens >= 1024px)
            Continuous 7-Stage Connected Visual Journey with Alternating Wave Flow
           ======================================================== */}
        <div className="hidden lg:block relative py-8">
          {/* Main Continuous Connecting Track Line (Horizontal Spine) */}
          <div className="absolute top-1/2 left-4 right-4 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#E8DCD1] to-transparent z-0">
            {/* Luminous Animated Beam Traveling Continuously Across the Path */}
            <div className="timeline-spine-beam w-48 h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
          </div>

          {/* 7 Interactive Process Columns */}
          <div className="grid grid-cols-7 gap-3 xl:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 1; // 0, 2, 4, 6 (Odd steps) on Top; 1, 3, 5 (Even steps) on Bottom
              const isCurrent = currentActive === idx;

              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(idx)}
                  className="group relative flex flex-col items-center cursor-pointer transition-all duration-300"
                >
                  {/* ====================================================
                      TOP ROW CONTENT (Steps 01, 03, 05, 07)
                     ==================================================== */}
                  <div
                    className={`w-full min-h-[220px] flex flex-col justify-end pb-7 transition-all duration-300 ${
                      !isEven
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 pointer-events-none select-none"
                    }`}
                  >
                    {!isEven && (
                      <div
                        className={`relative rounded-3xl p-5 sm:p-5.5 border transition-all duration-300 ${
                          isCurrent
                            ? "bg-white border-[#7A4B29] shadow-[0_20px_45px_rgba(122,75,41,0.18)] -translate-y-2"
                            : "bg-white/85 backdrop-blur-md border-[#E8DCD1] hover:border-[#7A4B29]/50 shadow-[0_10px_28px_rgba(45,30,20,0.05)] hover:-translate-y-1"
                        }`}
                      >
                        {/* Elegant Watermark Number */}
                        <span
                          className={`absolute top-2 right-3 font-serif font-black text-4xl select-none transition-colors duration-300 ${
                            isCurrent ? "text-[#C89A62]/35" : "text-[#E8DCD1]/60"
                          }`}
                        >
                          {step.num}
                        </span>

                        {/* Top: Phase Pill */}
                        <div className="flex items-center gap-1.5 mb-3">
                          <span
                            className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-colors ${
                              isCurrent
                                ? "bg-[#7A4B29] text-white border-[#7A4B29]"
                                : "bg-[#FAF1E8] text-[#8C5D38] border-[#E8DCD1]"
                            }`}
                          >
                            {step.phase}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`font-serif text-lg font-bold tracking-tight transition-colors mb-1 ${
                            isCurrent ? "text-[#7A4B29]" : "text-[#2D1E14]"
                          }`}
                        >
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-[#65442F] leading-relaxed font-medium">
                          {step.desc}
                        </p>

                        {/* Subtle Card Down Arrow Connector */}
                        <div
                          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-r border-b transition-colors ${
                            isCurrent
                              ? "bg-white border-[#7A4B29]"
                              : "bg-white border-[#E8DCD1]"
                          }`}
                        />
                      </div>
                    )}
                  </div>

                  {/* ====================================================
                      CENTER CONNECTOR NODE (On the Track)
                     ==================================================== */}
                  <div className="relative my-2 flex items-center justify-center">
                    {/* Outer Pulsing Beacon Halo */}
                    <div
                      className={`absolute w-12 h-12 rounded-full transition-all duration-300 ${
                        isCurrent
                          ? "bg-[#C89A62]/25 scale-125 animate-ping"
                          : "bg-transparent scale-100"
                      }`}
                    />

                    {/* Node Core Button */}
                    <div
                      className={`relative z-20 w-11 h-11 rounded-2xl flex items-center justify-center font-serif font-bold text-sm transition-all duration-300 border shadow-md ${
                        isCurrent
                          ? "bg-[#7A4B29] text-white border-[#5A3620] scale-110 shadow-[0_0_20px_rgba(200,154,98,0.5)]"
                          : "bg-white text-[#7A4B29] border-[#E8DCD1] hover:border-[#7A4B29] hover:scale-105"
                      }`}
                    >
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                  </div>

                  {/* ====================================================
                      BOTTOM ROW CONTENT (Steps 02, 04, 06)
                     ==================================================== */}
                  <div
                    className={`w-full min-h-[220px] flex flex-col justify-start pt-7 transition-all duration-300 ${
                      isEven
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 pointer-events-none select-none"
                    }`}
                  >
                    {isEven && (
                      <div
                        className={`relative rounded-3xl p-5 sm:p-5.5 border transition-all duration-300 ${
                          isCurrent
                            ? "bg-white border-[#7A4B29] shadow-[0_20px_45px_rgba(122,75,41,0.18)] translate-y-2"
                            : "bg-white/85 backdrop-blur-md border-[#E8DCD1] hover:border-[#7A4B29]/50 shadow-[0_10px_28px_rgba(45,30,20,0.05)] hover:translate-y-1"
                        }`}
                      >
                        {/* Subtle Card Up Arrow Connector */}
                        <div
                          className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-l border-t transition-colors ${
                            isCurrent
                              ? "bg-white border-[#7A4B29]"
                              : "bg-white border-[#E8DCD1]"
                          }`}
                        />

                        {/* Elegant Watermark Number */}
                        <span
                          className={`absolute top-2 right-3 font-serif font-black text-4xl select-none transition-colors duration-300 ${
                            isCurrent ? "text-[#C89A62]/35" : "text-[#E8DCD1]/60"
                          }`}
                        >
                          {step.num}
                        </span>

                        {/* Phase Pill */}
                        <div className="flex items-center gap-1.5 mb-3">
                          <span
                            className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-colors ${
                              isCurrent
                                ? "bg-[#7A4B29] text-white border-[#7A4B29]"
                                : "bg-[#FAF1E8] text-[#8C5D38] border-[#E8DCD1]"
                            }`}
                          >
                            {step.phase}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`font-serif text-lg font-bold tracking-tight transition-colors mb-1 ${
                            isCurrent ? "text-[#7A4B29]" : "text-[#2D1E14]"
                          }`}
                        >
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-[#65442F] leading-relaxed font-medium">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            MOBILE & TABLET TIMELINE (Screens < 1024px)
            Sleek Connected Vertical Path with Continuous Glowing Line
           ======================================================== */}
        <div className="block lg:hidden relative max-w-xl mx-auto pl-6 sm:pl-8">
          {/* Continuous Vertical Glowing Line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-[2px] bg-gradient-to-b from-[#C89A62] via-[#7A4B29] to-[#E8DCD1] -translate-x-1/2">
            {/* Luminous Animated Beam Traveling Down the Track */}
            <div className="timeline-vertical-beam w-full h-24 bg-gradient-to-b from-transparent via-white to-transparent" />
          </div>

          {/* 7 Vertical Step Nodes */}
          <div className="space-y-6 sm:space-y-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = currentActive === idx;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className="group relative flex items-start gap-4 sm:gap-6 cursor-pointer"
                >
                  {/* Left Beacon Node */}
                  <div className="relative -ml-6 sm:-ml-8 flex items-center justify-center flex-shrink-0">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-serif font-bold text-sm transition-all duration-300 border shadow-md ${
                        isCurrent
                          ? "bg-[#7A4B29] text-white border-[#5A3620] scale-110 shadow-[0_0_18px_rgba(200,154,98,0.5)]"
                          : "bg-white text-[#7A4B29] border-[#E8DCD1] group-hover:border-[#7A4B29]"
                      }`}
                    >
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                  </div>

                  {/* Right Content Card */}
                  <div
                    className={`flex-1 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border transition-all duration-300 ${
                      isCurrent
                        ? "bg-white border-[#7A4B29] shadow-[0_16px_36px_rgba(122,75,41,0.14)] translate-x-1"
                        : "bg-white/90 border-[#E8DCD1] hover:border-[#7A4B29]/50 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                          isCurrent
                            ? "bg-[#7A4B29] text-white border-[#7A4B29]"
                            : "bg-[#FAF1E8] text-[#8C5D38] border-[#E8DCD1]"
                        }`}
                      >
                        {step.phase}
                      </span>
                      <span className="font-serif font-black text-2xl text-[#C89A62]/40">
                        {step.num}
                      </span>
                    </div>

                    <h3
                      className={`font-serif text-lg sm:text-xl font-bold mb-1 transition-colors ${
                        isCurrent ? "text-[#7A4B29]" : "text-[#2D1E14]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#65442F] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Styled JSX for Continuous Keyframe Animations */}
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

        @keyframes textShimmerSweep {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .timeline-spine-beam {
          animation: timelineSpineMove 4.5s ease-in-out infinite;
        }

        @keyframes timelineSpineMove {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(800%);
            opacity: 0;
          }
        }

        .timeline-vertical-beam {
          animation: timelineVerticalMove 3.5s ease-in-out infinite;
        }

        @keyframes timelineVerticalMove {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(800%);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gold-text-shimmer,
          .timeline-spine-beam,
          .timeline-vertical-beam {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

