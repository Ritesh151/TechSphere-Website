"use client";

import React from "react";

export default function IndustryTicker() {
  const industries = [
    "Startup",
    "Retail",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Hospitality",
    "Finance & Banking",
    "E-Commerce",
    "Logistics",
    "Real Estate",
  ];

  // Duplicate list to achieve a seamless, continuous infinite loop
  const repeatedList = [...industries, ...industries, ...industries];

  return (
    <section className="relative w-full py-6 sm:py-7 bg-[#FAF7F2] border-y border-[#E8DCD1]/70 overflow-hidden select-none">
      {/* Left & Right Subtle Soft Edge Fades for Seamless Infinite Glide */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent z-10"
        aria-hidden="true"
      />

      <div className="w-full flex flex-col items-center">
        {/* Minimal Centered Eyebrow Badge */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#8C5D38] mb-3 sm:mb-4">
          <span className="text-[8px] sm:text-[9px] text-[#C89A62]">◆</span>
          <span>Trusted By Businesses Across Industries</span>
          <span className="text-[8px] sm:text-[9px] text-[#C89A62]">◆</span>
        </div>

        {/* Continuous Horizontal Moving Marquee */}
        <div className="w-full overflow-hidden flex items-center">
          <div className="ticker-track flex items-center whitespace-nowrap">
            {repeatedList.map((item, index) => (
              <div key={`${item}-${index}`} className="inline-flex items-center">
                <span className="font-serif text-xl sm:text-2xl lg:text-[25px] font-semibold text-[#2D1E14] tracking-tight hover:text-[#7A4B29] transition-colors cursor-default">
                  {item}
                </span>
                <span
                  className="text-[#C89A62] text-[10px] sm:text-xs mx-4 sm:mx-6 lg:mx-8 opacity-80"
                  aria-hidden="true"
                >
                  ◆
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pure GPU-accelerated CSS Keyframes for Butter-Smooth Infinite Movement */}
      <style jsx>{`
        .ticker-track {
          display: inline-flex;
          animation: tickerScroll 32s linear infinite;
          will-change: transform;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        @keyframes tickerScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}

