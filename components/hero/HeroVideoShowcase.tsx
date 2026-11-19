"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Star,
  ArrowUpRight,
  Globe,
  Smartphone,
  Monitor,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const showcaseServices = [
  {
    id: "web",
    number: "01",
    title: "Website Development",
    description: "Responsive, blazing-fast web platforms",
    icon: Globe,
    href: "/services/web-development",
  },
  {
    id: "mobile",
    number: "02",
    title: "Mobile Application",
    description: "Native & cross-platform mobile apps",
    icon: Smartphone,
    href: "/services/mobile-app-development",
  },
  {
    id: "software",
    number: "03",
    title: "Custom Software",
    description: "Tailored software for your business",
    icon: Monitor,
    href: "/services/erp-solutions",
  },
  {
    id: "ai",
    number: "04",
    title: "AI Automation",
    description: "Intelligent workflows powered by AI",
    icon: BrainCircuit,
    href: "/services/ai-automation",
  },
];

export default function HeroVideoShowcase() {
  const [viewMode, setViewMode] = useState<"video" | "services">("video");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [viewMode]);

  return (
    <div className="relative w-full max-w-[560px] lg:max-w-[620px] xl:max-w-[670px] mx-auto pb-8 sm:pb-10">
      {/* Main Glass Panel (overflow-visible so floating rating badge is never clipped) */}
      <div className="relative rounded-[32px] bg-white/95 backdrop-blur-md p-5 sm:p-7 shadow-[0_28px_70px_rgba(45,30,20,0.12),0_8px_24px_rgba(45,30,20,0.06)] border border-[#E8DCD1] transition-all duration-300">
        {/* Top Border Light Beam Container (clipped to rounded top) */}
        <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[32px] overflow-hidden pointer-events-none">
          <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
        </div>

        {/* Panel Header with Mode Switcher */}
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 pb-5 border-b border-[#F0E6DD]">
          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="anim-icon-pulse w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#FAF3EC] border border-[#E8DCD1] text-[#94613F] flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Sparkles className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-[#C89A62]" strokeWidth={1.85} />
            </div>
            <div>
              <h3 className="hero-showcase-title text-sm sm:text-base md:text-lg font-bold text-[#2D1E14] leading-tight">
                {viewMode === "video" ? (
                  <span>TechSphere 3D Experience</span>
                ) : (
                  <span className="hero-gradient-text">End to end Digital Solutions</span>
                )}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#785A44] font-medium mt-0.5">
                {viewMode === "video"
                  ? "Your Brand. Our Sphere. The World Notices."
                  : "for Modern Start-Up & Enterprise"}
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-[#FAF3EC] border border-[#E8DCD1] shadow-2xs self-end xs:self-auto flex-shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("video")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                viewMode === "video"
                  ? "bg-[#7A4B29] text-white shadow-xs"
                  : "text-[#785A44] hover:text-[#2D1E14]"
              }`}
            >
              Video
            </button>
            <button
              type="button"
              onClick={() => setViewMode("services")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                viewMode === "services"
                  ? "bg-[#7A4B29] text-white shadow-xs"
                  : "text-[#785A44] hover:text-[#2D1E14]"
              }`}
            >
              Services
            </button>
          </div>
        </div>

        {/* View Mode 1: Clean, Uninterrupted Muted Video Player with Taller Height */}
        {viewMode === "video" && (
          <div className="pt-5">
            <div className="relative aspect-[16/11.5] min-h-[320px] sm:min-h-[380px] lg:min-h-[410px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8DCD1] bg-[#170E08] shadow-inner">
              <video
                ref={videoRef}
                src="/video/Video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Clean bottom caption */}
            <div className="flex items-center justify-end pt-3.5 pr-1">
              <p className="text-xs text-[#785A44] font-medium text-right flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89A62] animate-ping" />
                <span>3D Sphere Architecture &bull; Official Brand Film</span>
              </p>
            </div>
          </div>
        )}

        {/* View Mode 2: Services List with Continuous Animations */}
        {viewMode === "services" && (
          <div className="space-y-3 pt-4">
            {showcaseServices.map((service, idx) => {
              const IconComp = service.icon;
              const floatClass = idx % 2 === 0 ? "anim-card-float-1" : "anim-card-float-2";

              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className={`${floatClass} group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#FAF6F1]/90 hover:bg-[#FAF3EC] border border-[#E8DCD1] hover:border-[#7A4B29]/60 transition-all shadow-2xs overflow-hidden`}
                  style={{ animationDelay: `${idx * 0.35}s` }}
                >
                  {/* Continuous Moving Line Sparkle */}
                  <span
                    className="service-row-sparkle pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-24 bg-gradient-to-r from-transparent via-[#C89A62] to-transparent"
                    style={{ animationDelay: `${idx * 0.6}s` }}
                    aria-hidden="true"
                  />

                  <div className="flex items-center gap-3.5">
                    {/* Continuous Pulsing Icon Box */}
                    <div
                      className="anim-icon-pulse w-10 h-10 rounded-xl bg-white border border-[#E8DCD1] text-[#94613F] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A4B29] group-hover:text-white transition-all shadow-2xs"
                      style={{ animationDelay: `${idx * 0.4}s` }}
                    >
                      <IconComp className="h-4.5 w-4.5" strokeWidth={1.85} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm sm:text-[15px] font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-xs text-[#785A44] leading-tight mt-0.5">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pl-2">
                    {/* Continuous Bouncing Action Arrow */}
                    <div className="w-7 h-7 rounded-full bg-white border border-[#E8DCD1] flex items-center justify-center text-[#785A44] group-hover:bg-[#7A4B29] group-hover:text-white transition-all shadow-2xs">
                      <ArrowRight className="anim-arrow-bounce h-3.5 w-3.5 stroke-[2.25]" />
                    </div>

                    {/* Continuous Pulsing Number Badge */}
                    <span
                      className="anim-badge-pulse text-xs font-mono font-bold text-[#7A4B29] bg-white border border-[#E8DCD1] px-2 py-0.5 rounded-md"
                      style={{ animationDelay: `${idx * 0.5}s` }}
                    >
                      {service.number}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Floating 4.9 Rating & Verified Trust Badge (Clean, Never Clipped, High-End UX) */}
        <div className="badge-continuous-float absolute -bottom-5 left-3 sm:left-6 max-w-[calc(100%-1.5rem)] bg-white/95 backdrop-blur-md rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-[0_16px_36px_rgba(45,30,20,0.14)] border border-[#E8DCD1] flex items-center gap-2.5 sm:gap-3.5 z-30 select-none">
          {/* Glowing Amber Award Tile */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FAF1E8] to-[#F5E6D8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center shadow-xs flex-shrink-0">
            <Star className="h-4.5 w-4.5 sm:h-5 sm:w-5 fill-[#D97706] text-[#D97706]" />
          </div>

          {/* Typography: 4.9 / 5.0, 5 Stars & Review Count */}
          <div className="flex flex-col text-left pr-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-[17px] font-black text-[#2D1E14] tracking-tight leading-none">
                4.9 / 5.0
              </span>
              <div className="flex items-center text-[#D97706] text-xs gap-0.5 tracking-tighter" aria-label="5 out of 5 stars">
                {"★★★★★"}
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse flex-shrink-0" />
              <p className="text-[10px] sm:text-[11px] font-semibold text-[#785A44] leading-none truncate">
                120+ Verified Client Reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Styled JSX for Showcase Title Shimmer & Line Sparkle */}
      <style jsx>{`
        .hero-gradient-text {
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
          animation: textPan 5s linear infinite;
        }

        @keyframes textPan {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .service-row-sparkle {
          animation: rowSparkle 3.8s ease-in-out infinite;
        }

        @keyframes rowSparkle {
          0% {
            left: -30%;
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

        @media (prefers-reduced-motion: reduce) {
          .hero-gradient-text,
          .service-row-sparkle {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
