"use client";

import Image from "next/image";
import { Zap, Users, Monitor, CircleDollarSign } from "lucide-react";

export default function WhyTrustUsSection() {
  const trustPoints = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Agile methodologies ensuring rapid deployment without compromising on quality.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Industry veterans with deep technical knowledge and proven track records.",
    },
    {
      icon: Monitor,
      title: "Modern Technologies",
      description:
        "Leveraging the latest stacks like Next.js, React, and AI-driven tools.",
    },
    {
      icon: CircleDollarSign,
      title: "Affordable Pricing",
      description:
        "Transparent, value-driven pricing models suited for businesses of all sizes.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] overflow-hidden border-b border-[#E8DCD1]">
      {/* Background Ambient Warm Lighting */}
      <div
        className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-gradient-to-bl from-[#EEDFD0]/50 to-transparent rounded-full blur-3xl pointer-events-none continuous-ambient-orb"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* ========================================================
              LEFT COLUMN: HEADLINE, SUBTITLE & 4 TRUST PILLARS
             ======================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-[#2D1E14] leading-[1.15] tracking-tight mb-4">
              <span>Why Businesses Trust </span>
              <br className="hidden sm:inline" />
              <span className="heading-trust-accent">Us</span>
            </h2>

            {/* Description Subtitle */}
            <p className="text-sm sm:text-base text-[#6B5E55] leading-relaxed mb-8 max-w-xl font-normal">
              We combine deep engineering expertise with a client-first mindset to
              deliver solutions that outperform expectations.
            </p>

            {/* 4 Feature List Items */}
            <div className="w-full flex flex-col">
              {trustPoints.map((point, index) => {
                const IconComp = point.icon;
                return (
                  <div
                    key={point.title}
                    className="relative flex items-start gap-4 sm:gap-5 py-4 border-b border-[#E8DCD1]/70 last:border-0 group cursor-default transition-all duration-200"
                  >
                    {/* Continuous Moving Line Sparkle */}
                    <span
                      className="point-line-sparkle pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-24 bg-gradient-to-r from-transparent via-[#C89A62] to-transparent"
                      style={{ animationDelay: `${index * 0.7}s` }}
                      aria-hidden="true"
                    />

                    {/* Icon Box */}
                    <div
                      className="point-icon-box w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F0E6DC] text-[#7A4B29] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#7A4B29] group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_4px_12px_rgba(122,75,41,0.25)] mt-0.5"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <IconComp className="h-5 w-5" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors leading-snug">
                        {point.title}
                      </h3>
                      <p className="text-xs sm:text-[13.5px] text-[#6B5E55] leading-relaxed mt-1">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: SLEEK CODE IMAGE WITH 3 DIAMONDS
             ======================================================== */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center">
            {/* Top 3 Diamonds Accent aligned to the right corner */}
            <div className="flex items-center gap-2 mb-3 self-end pr-2" aria-hidden="true">
              <span className="diamond-star diamond-1 w-2 h-2 rotate-45 border border-[#94613F]/70" />
              <span className="diamond-star diamond-2 w-2.5 h-2.5 rotate-45 bg-[#94613F] shadow-[0_0_10px_rgba(200,154,98,0.7)]" />
              <span className="diamond-star diamond-3 w-2 h-2 rotate-45 border border-[#94613F]/70" />
            </div>

            {/* Code Image Container with Smooth Floating */}
            <div className="code-float-card relative w-full max-w-[540px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-white/70 p-2 sm:p-2.5 border border-[#E8DCD1] shadow-[0_22px_55px_rgba(45,30,20,0.12)]">
              {/* Dynamic Breathing Shadow */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-[#2D1E14]/15 via-[#7A4B29]/10 to-transparent blur-2xl -z-10 translate-y-6" />

              <div className="relative rounded-[20px] sm:rounded-[22px] overflow-hidden bg-[#1E140F] group aspect-[16/12]">
                <Image
                  src="/images/why-us-code-retina.jpg"
                  alt="TechSphere modern software architecture clean code"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
                  priority
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Continuous Diagonal Glass Sheen */}
                <div
                  className="code-light-sweep pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  aria-hidden="true"
                />

                {/* Subtle Inner Gradient Border Vignette */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[20px] sm:rounded-[22px] border border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          CSS KEYFRAMES FOR CONTINUOUS SMOOTH 60FPS ANIMATIONS
         ======================================================== */}
      <style jsx>{`
        /* Continuous Floating Code Card */
        .code-float-card {
          animation: floatCard 6s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        /* Continuous Diagonal Glass Sheen */
        .code-light-sweep {
          animation: sweepLight 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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

        /* Continuous 3 Diamonds Twinkle */
        .diamond-star {
          animation: diamondTwinkle 2.8s ease-in-out infinite;
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

        @keyframes diamondTwinkle {
          0%,
          100% {
            transform: rotate(45deg) scale(1);
            opacity: 0.65;
          }
          50% {
            transform: rotate(45deg) scale(1.2);
            opacity: 1;
            box-shadow: 0 0 6px rgba(200, 154, 98, 0.7);
          }
        }

        /* Continuous Heading Accent */
        .heading-trust-accent {
          color: #7a4b29;
          position: relative;
          display: inline-block;
          animation: goldBreathe 4s ease-in-out infinite;
        }

        @keyframes goldBreathe {
          0%,
          100% {
            color: #7a4b29;
          }
          50% {
            color: #5a3620;
            text-shadow: 0 0 16px rgba(200, 154, 98, 0.35);
          }
        }

        /* Continuous Line Sparkle */
        .point-line-sparkle {
          animation: lineSparkle 4.5s ease-in-out infinite;
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

        /* Continuous Pulse on Icon Box */
        .point-icon-box {
          animation: iconBoxPulse 4s ease-in-out infinite;
        }

        @keyframes iconBoxPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .code-float-card,
          .code-light-sweep,
          .diamond-star,
          .heading-trust-accent,
          .point-line-sparkle,
          .point-icon-box {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

