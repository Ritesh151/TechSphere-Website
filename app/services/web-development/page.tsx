"use client";

import { useState } from "react";
import Link from "next/link";
import ProcessTimelineSection from "@/components/services/ProcessTimelineSection";
import {
  Code2,
  Globe,
  ShoppingBag,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Cpu,
  ShieldCheck,
  Activity,
  ArrowUpRight,
  Server,
  Database,
  Terminal,
} from "lucide-react";

export default function WebDevelopmentPage() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      num: "01",
      title: "Next.js & React 19 Apps",
      tagline: "Sub-100ms edge rendering & server components",
      category: "High-Performance Web",
      description:
        "Engineered for sub-second Core Web Vitals with App Router streaming, hybrid ISR/SSR, and global edge CDN caching for maximum Google Search indexing and ultra-smooth user experience.",
      capabilities: [
        "React 19 Server Actions & Streaming SSR",
        "Edge Compute & Micro-Second Global Caching",
        "Sub-Second Core Web Vitals (99+ Lighthouse)",
        "Strict TypeScript & Component Modularity",
      ],
      icon: Code2,
      metrics: { label: "Edge TTFB", value: "< 45ms" },
      techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"],
    },
    {
      num: "02",
      title: "High-Scale E-Commerce",
      tagline: "Conversion-optimized headless storefronts",
      category: "Commerce Infrastructure",
      description:
        "Frictionless, omnichannel headless commerce engines integrated with multi-currency payment gateways, real-time inventory synchronization, and automated abandoned-cart recovery.",
      capabilities: [
        "Headless Shopify & Custom Cart Architecture",
        "Multi-Currency Automated Gateway Sync (UPI, Cards)",
        "Real-Time Multi-Warehouse Inventory Telemetry",
        "1-Click Sub-Second Checkout Optimization",
      ],
      icon: ShoppingBag,
      metrics: { label: "Checkout Speed", value: "3.2x Faster" },
      techStack: ["Shopify Storefront API", "Stripe", "Redis", "GraphQL"],
    },
    {
      num: "03",
      title: "Enterprise SaaS Portals",
      tagline: "Multi-tenant cloud platforms & dashboards",
      category: "Enterprise Portals",
      description:
        "Secure, high-concurrency cloud applications featuring granular role-based access control, interactive real-time data visualizations, live WebSocket streams, and automated audit logging.",
      capabilities: [
        "Granular Role-Based Access Control (RBAC)",
        "Real-Time Telemetry & Metric Visualizations",
        "Bi-Directional WebSocket Streaming Pipelines",
        "Automated Export & Compliance Audit Reports",
      ],
      icon: Layers,
      metrics: { label: "Concurrency SLA", value: "50K+ Users" },
      techStack: ["PostgreSQL", "Kafka", "WebSockets", "Docker"],
    },
    {
      num: "04",
      title: "Headless CMS & Microservices",
      tagline: "Decoupled omnichannel content & API federation",
      category: "API & Data Layers",
      description:
        "Future-proof decoupled content architectures connecting unified GraphQL federation with Sanity, Strapi, and Contentful, alongside microservice backends engineered for zero downtime.",
      capabilities: [
        "Sanity, Strapi & Contentful Live Sync",
        "Federated GraphQL & Apollo Gateway Federation",
        "Microservices & REST API Mesh Architecture",
        "Automated SEO Schema & Meta Generation",
      ],
      icon: Globe,
      metrics: { label: "Content Deploy", value: "Instant Edge" },
      techStack: ["Sanity.io", "GraphQL", "Node.js", "Cloudflare"],
    },
  ];

  const benchmarks = [
    {
      label: "Average Page Load Speed",
      value: "0.48s",
      sub: "Lighthouse Performance 99+",
      icon: Zap,
    },
    {
      label: "Production Uptime SLA",
      value: "99.99%",
      sub: "High-Availability Multi-Region",
      icon: ShieldCheck,
    },
    {
      label: "Codebase Integrity",
      value: "100%",
      sub: "Strict TypeScript Type-Safety",
      icon: Code2,
    },
    {
      label: "Global CDN Edge Nodes",
      value: "300+",
      sub: "Sub-50ms Global Response",
      icon: Server,
    },
  ];

  const techBadges = [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "GraphQL",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS CloudFront",
    "Sanity.io",
    "WebSockets",
  ];

  return (
    <div className="relative w-full bg-[#FAF8F5] text-[#2D1E14] overflow-hidden selection:bg-[#C89A62]/20">
      {/* Background Continuous Ambient Lighting */}
      <div
        className="anim-orb-1 pointer-events-none absolute -top-40 left-1/4 w-[750px] h-[550px] rounded-full bg-gradient-to-tr from-[#F5E6D8]/50 via-[#EEDFD0]/25 to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />
      <div
        className="anim-orb-2 pointer-events-none absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#F5EAE0]/60 via-[#EBD9CA]/20 to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />

      {/* ========================================================
          1. HERO SECTION (Cinematic, Modern, Animated)
         ======================================================== */}
      <section className="relative z-10 w-full pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-18 border-b border-[#E8DCD1] text-center max-w-5xl mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.24em] text-[#94613F] mb-4">
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#94613F] to-[#7A4B29]" />
          <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
          <span>WEBSITE &amp; DIGITAL PORTAL ENGINEERING</span>
          <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
          <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1E14] leading-[1.12] tracking-tight mb-5">
          <span>Modern Responsive Web Apps &amp; </span>
          <span className="gold-text-shimmer">Digital Portals</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#65442F] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
          High-concurrency, ultra-responsive web platforms engineered with Next.js, React 19, and scalable cloud architectures built for speed, conversion, and enterprise reliability.
        </p>

        {/* Live SLA & Metrics Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white/80 backdrop-blur-md border border-[#E8DCD1] px-5 py-2.5 rounded-2xl shadow-xs text-xs font-semibold text-[#7A4B29] mb-8">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[#2D1E14]">Sub-100ms Edge TTFB</span>
          </span>
          <span className="text-[#E8DCD1]">•</span>
          <span>Core Web Vitals 99+</span>
          <span className="text-[#E8DCD1]">•</span>
          <span>Zero Legacy Deprecations</span>
        </div>

        {/* Dual Actions */}
        <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            href="/get-a-quote"
            className="anim-badge-pulse inline-flex items-center justify-center gap-2 rounded-full bg-[#7A4B29] hover:bg-[#5A3620] text-white px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all w-full xs:w-auto text-center"
          >
            <span>Get Web Architecture Estimate</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-[#FAF3EC] text-[#2D1E14] border border-[#E8DCD1] px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold transition-all shadow-xs w-full xs:w-auto text-center"
          >
            <span>Speak With Solution Architects</span>
            <ArrowUpRight className="h-4 w-4 text-[#8C5D38]" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          2. ENTERPRISE PERFORMANCE BENCHMARKS (4-Pill Strip)
         ======================================================== */}
      <section className="relative z-10 w-full py-10 bg-white/70 backdrop-blur-md border-b border-[#E8DCD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {benchmarks.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF1E8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-black text-[#2D1E14] tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-xs font-bold text-[#7A4B29] mt-0.5">{item.label}</div>
                    <div className="text-[11px] text-[#785A44] font-medium">{item.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. CORE ARCHITECTURE PILLARS (Interactive 4-Card Grid)
         ======================================================== */}
      <section className="relative z-10 w-full py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E8DCD1]">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#94613F] block mb-2">
            SPECIALIZED ENGINEERING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1E14]">
            Four Core Web Pillars We Deliver
          </h2>
          <p className="text-sm text-[#65442F] mt-2">
            Engineered from ground up without bloated templates or legacy technical debt.
          </p>
        </div>

        {/* 4 Pillars Grid with Floating Animation & Top Light Beam */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const floatClass = idx % 2 === 0 ? "anim-card-float-1" : "anim-card-float-2";

            return (
              <div
                key={item.title}
                className={`${floatClass} group relative rounded-[32px] bg-white/85 hover:bg-white backdrop-blur-md border border-[#E8DCD1] hover:border-[#7A4B29]/60 p-7 sm:p-9 shadow-[0_12px_36px_rgba(45,30,20,0.05)] hover:shadow-[0_24px_55px_rgba(122,75,41,0.14)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden`}
                style={{ animationDelay: `${idx * 0.25}s` }}
              >
                {/* Luminous Light Beam on Top Border */}
                <div className="card-light-beam absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C89A62] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Row: Serif Number & Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-3xl font-black text-[#C89A62]/70 group-hover:text-[#7A4B29] transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5D38] bg-[#FAF3EC] px-3 py-1 rounded-full border border-[#E8DCD1]">
                      {item.category}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="anim-icon-pulse w-13 h-13 rounded-2xl bg-[#FAF1E8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A4B29] group-hover:text-white transition-all shadow-xs">
                      <Icon className="h-6 w-6 stroke-[1.9]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#8C5D38] mt-0.5">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#65442F] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-[#F0E6DD]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#94613F] block">
                      Core Engineering Deliverables
                    </span>
                    {item.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5 text-xs font-semibold text-[#2D1E14]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Key Metric Badge & Tech Stack */}
                <div className="pt-5 border-t border-[#F0E6DD]">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#785A44]">
                      <span>Performance SLA:</span>
                      <span className="font-bold text-[#7A4B29] bg-[#FAF1E8] px-2.5 py-0.5 rounded-md border border-[#E8DCD1]">
                        {item.metrics.value}
                      </span>
                    </div>

                    <Link
                      href="/get-a-quote"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#7A4B29] hover:text-[#5A3620] transition-colors"
                    >
                      <span>Get Scope &amp; Pricing</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium text-[#65442F] bg-[#FAF8F5] border border-[#E8DCD1] px-2.5 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          4. DEVELOPMENT PROCESS (How We Turn Ideas Into Reality)
          Interactive 7-Step Luminous Timeline
         ======================================================== */}
      <ProcessTimelineSection />

      {/* ========================================================
          5. MODERN TECH TOOLCHAIN RIBBON
         ======================================================== */}
      <section className="relative z-10 w-full py-12 bg-white/70 backdrop-blur-md border-b border-[#E8DCD1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94613F] block mb-4">
            PRODUCTION TOOLCHAIN &amp; FRAMEWORKS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8DCD1] text-xs font-bold text-[#7A4B29] shadow-2xs hover:scale-105 transition-transform"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. BOTTOM CONSULTATION BANNER (Luxury Warm Espresso)
         ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-r from-[#2C1A0F] via-[#432717] to-[#5A3620] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C18D] mb-2">
              <Sparkles className="h-3.5 w-3.5 text-[#E5C18D] animate-spin" style={{ animationDuration: "8s" }} />
              <span>Need a Specialized Enterprise Architecture?</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-snug">
              Talk to Our Technical Architects
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E7]/80 leading-relaxed font-normal">
              From headless e-commerce to enterprise web portals, schedule a technical discovery session today. We deliver your custom roadmap in 48 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 flex-shrink-0">
            <Link
              href="/get-a-quote"
              className="anim-badge-pulse inline-flex items-center gap-2 rounded-full bg-[#E5C18D] hover:bg-[#d8b075] text-[#2C1A0F] px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span>Get Free Web Architecture Quote</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 text-xs sm:text-sm font-semibold transition-all"
            >
              <span>Talk to Architects</span>
            </Link>
          </div>
        </div>
      </section>

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

        @keyframes pulseBadge {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.18);
            opacity: 0.85;
          }
        }

        .anim-badge-pulse {
          animation: pulseBadge 3s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        .anim-icon-pulse {
          animation: iconPulse 4s ease-in-out infinite;
        }

        @keyframes orbFloat1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, 25px);
          }
        }

        @keyframes orbFloat2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, -22px);
          }
        }

        .anim-orb-1 {
          animation: orbFloat1 10s ease-in-out infinite;
        }

        .anim-orb-2 {
          animation: orbFloat2 12s ease-in-out infinite;
        }

        @keyframes cardFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes cardFloat2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        .anim-card-float-1 {
          animation: cardFloat1 7s ease-in-out infinite;
        }

        .anim-card-float-2 {
          animation: cardFloat2 8s ease-in-out infinite;
        }

        @keyframes lightBeamMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .card-light-beam {
          animation: lightBeamMove 3s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .gold-text-shimmer,
          .anim-badge-pulse,
          .anim-icon-pulse,
          .anim-orb-1,
          .anim-orb-2,
          .anim-card-float-1,
          .anim-card-float-2,
          .card-light-beam {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
