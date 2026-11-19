"use client";

import { useState, useEffect } from "react";

const rotateItems = [
  "ERP Systems",
  "Websites",
  "Mobile Apps",
  "AI Automation",
  "Custom Software",
  "CRM Solutions",
  "Digital Solutions",
  "Cloud Solutions",
];

export default function AnimatedHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState<"visible" | "exiting" | "entering">("visible");

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      // 1. Slide upward and fade out
      setAnimationState("exiting");

      setTimeout(() => {
        // 2. Next item jumps to bottom (invisible)
        setCurrentIndex((prev) => (prev + 1) % rotateItems.length);
        setAnimationState("entering");

        // 3. Next frame slides up into view
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimationState("visible");
          });
        });
      }, 420); // exit duration
    }, 3000); // 3-second display duration

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className="text-3xl xs:text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-[#2D1E14] leading-[1.15] text-left"
      aria-label={`We Build ${rotateItems[currentIndex]} That Grow Businesses`}
    >
      {/* Line 1: We Build */}
      <span className="block font-serif">We Build</span>

      {/* Line 2: Dynamic Rotating Text (ERP Systems, Websites, etc.) */}
      <span className="relative block h-[1.32em] overflow-hidden my-0.5 sm:my-1">
        <span
          className={`inline-flex items-center font-serif italic text-[#94613F] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            animationState === "exiting"
              ? "-translate-y-full opacity-0"
              : animationState === "entering"
              ? "translate-y-full opacity-0 duration-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          {rotateItems[currentIndex]}

          {/* Champagne Vertical Blinking Cursor Accent */}
          <span
            className="inline-block w-[2.5px] sm:w-[3px] h-[0.75em] bg-[#94613F] ml-2 sm:ml-2.5 animate-[pulse_1s_infinite] align-middle opacity-85"
            aria-hidden="true"
          />
        </span>
      </span>

      {/* Line 3: That Grow Businesses */}
      <span className="block font-serif">
        That Grow{" "}
        <span className="italic font-serif font-normal text-[#94613F]">
          Businesses
        </span>
      </span>
    </h1>
  );
}
