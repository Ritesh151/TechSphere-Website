"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import HeroBackgroundAnimation from "./HeroBackgroundAnimation";
import AnimatedHeadline from "./AnimatedHeadline";
import HeroVideoShowcase from "./HeroVideoShowcase";
import HeroStats from "./HeroStats";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF6F1] pt-6 pb-14 sm:pt-8 sm:pb-18 lg:pt-10 lg:pb-20 border-b border-[#E8DCD1]">
      {/* ========================================================
          ANIMATION SYSTEM B: CONTINUOUS GOLDEN WAVE BACKGROUND
         ======================================================== */}
      <HeroBackgroundAnimation />

      {/* Warm Ambient Glow Overlays */}
      <div
        className="pointer-events-none absolute -top-40 -left-20 w-[600px] h-[500px] rounded-full bg-gradient-to-br from-[#F5E9DE] via-[#EBD9CA]/40 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 right-0 w-[700px] h-[500px] rounded-full bg-gradient-to-tl from-[#F5E9DE] via-[#EBD9CA]/30 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* ====================================================
              LEFT CONTENT COLUMN
             ==================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-10">
            {/* Eyebrow: • TRUSTED TECHNOLOGY PARTNER ♦ */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F5EAE0] px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#7A4B29] border border-[#E8DCD1] shadow-2xs mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#94613F]" />
              <span>Trusted Technology Partner</span>
              <span className="text-[10px] text-[#94613F]">♦</span>
            </div>

            {/* ANIMATION SYSTEM A: DYNAMIC ROTATING TEXT HEADLINE */}
            <AnimatedHeadline />

            {/* Supporting Description */}
            <p className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg text-[#65442F] leading-relaxed font-normal">
              We empower businesses with cutting-edge digital solutions. From stunning
              websites to complex AI automation, we turn your vision into reality.
            </p>

            {/* Action CTA Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary: Get Free Quote → */}
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7A4B29] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(122,75,41,0.28)] hover:bg-[#633C1F] active:scale-[0.98] transition-all w-full xs:w-auto"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>

              {/* Secondary: ▶ View Our Work */}
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FAF3EC] border border-[#E8DCD1] px-6 py-3.5 text-sm font-semibold text-[#2D1E14] shadow-2xs hover:bg-[#F5ECE2] hover:border-[#B99073]/50 transition-all w-full xs:w-auto"
              >
                <div className="w-6 h-6 rounded-full bg-[#7A4B29] text-white flex items-center justify-center shadow-xs">
                  <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                </div>
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Company Statistics Row */}
            <HeroStats />
          </div>

          {/* ====================================================
              RIGHT SHOWCASE COLUMN - Video & Services Showcase (Larger)
             ==================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end w-full pt-4 sm:pt-6 lg:pt-0 pb-6 sm:pb-8 z-10">
            <HeroVideoShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
