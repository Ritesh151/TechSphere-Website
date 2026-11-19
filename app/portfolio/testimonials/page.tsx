"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Award,
  Sparkles,
  ArrowRight,
  Building2,
  BadgeCheck,
} from "lucide-react";

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const successStories = [
    {
      id: "smart-erp",
      project: "Smart ERP Management System",
      client: "Apex Manufacturing & Logistics",
      name: "Vikram Singhania",
      role: "VP of Global Supply Chain",
      rating: 5,
      impact: "₹25+ Cr Verified Annual Savings",
      quote:
        "TechSphere unified our 18 disparate warehouse silos into an ultra-fast event-driven ERP platform. Their automated 3-way PO matching and Kafka inventory streaming eliminated stockouts and cut our deadhead freight costs by 42%. They are an indispensable engineering partner.",
      verified: "Verified Enterprise Partner",
    },
    {
      id: "ai-chatbot",
      project: "AI Agent ChatBot Platform",
      client: "OmniCore Enterprises",
      name: "Sarah Jenkins",
      role: "Chief Experience Officer (CXO)",
      rating: 5,
      impact: "-68% Tier-1 Support Overhead",
      quote:
        "We handle over 1.2 million customer interactions monthly. TechSphere's autonomous multi-agent swarm executes deterministic CRM actions and database queries with zero hallucinations and an average response time of 1.4 seconds. The ROI was evident within our first month of production.",
      verified: "Verified SaaS Client",
    },
    {
      id: "ai-itinerary",
      project: "AI Itinerary Planner Engine",
      client: "WanderAI Global",
      name: "Marcus Vance",
      role: "Founder & Chief Executive Officer",
      rating: 5,
      impact: "30s Planning & +45% Checkout Lift",
      quote:
        "TechSphere took our vision of autonomous travel curation and built a production platform that dropped booking curation time from 6 hours down to 30 seconds. Their Next.js 16 and spatial clustering architecture scaled smoothly to 500,000 active travelers without a hiccup.",
      verified: "Verified Founder Review",
    },
    {
      id: "bhagvat-geeta",
      project: "ShreeMad Bhagvat Geeta App",
      client: "Sanatana Heritage Foundation",
      name: "Acharya Raghavan",
      role: "Global Digital Outreach Director",
      rating: 5,
      impact: "350K+ Downloads (4.9 ★ Rating)",
      quote:
        "The reverence, cultural sensitivity, and technical elegance TechSphere brought to the ShreeMad Bhagvat Geeta application was extraordinary. All 700 verses with studio-grade audio streaming and AI philosophical reflections have touched over 350,000 seekers globally.",
      verified: "Verified Heritage Partner",
    },
    {
      id: "factory-management",
      project: "Factory Management App",
      client: "PrecisionTech Industrial",
      name: "Dieter Hoffmann",
      role: "Director of Smart Manufacturing Operations",
      rating: 5,
      impact: "-54% Unplanned Machine Downtime",
      quote:
        "In industrial manufacturing, machine stoppage costs tens of thousands per hour. TechSphere's IoT tablet system connects directly to our CNC controllers and MQTT sensors, warning our maintenance engineers before spindle failures occur. Zero critical breakdowns across 6 plants.",
      verified: "Verified Industrial Client",
    },
  ];

  const recognitions = [
    {
      title: "Clutch Global Leader 2026",
      subtitle: "Top 1% Custom Software & AI Development Pods",
      badge: "Top Rated",
    },
    {
      title: "ISO 27001 & SOC 2 Certified",
      subtitle: "Zero-Trust Data Protection & Compliance Standards",
      badge: "Security Audited",
    },
    {
      title: "Gartner Peer Insights 2025",
      subtitle: "Customer Choice in Enterprise Digital Transformation",
      badge: "Industry Choice",
    },
    {
      title: "Cloud Native Computing Foundation",
      subtitle: "Kubernetes & Distributed Microservices Certified",
      badge: "Certified Partner",
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Stories (5)" },
    { id: "erp", label: "ERP Solutions" },
    { id: "ai", label: "AI & Agents" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "iot", label: "Industrial IoT" },
  ];

  const filteredStories =
    activeFilter === "all"
      ? successStories
      : successStories.filter((s) => {
          if (activeFilter === "erp") return s.id === "smart-erp";
          if (activeFilter === "ai")
            return s.id === "ai-chatbot" || s.id === "ai-itinerary";
          if (activeFilter === "mobile") return s.id === "bhagvat-geeta";
          if (activeFilter === "iot") return s.id === "factory-management";
          return true;
        });

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#2D1E14] overflow-hidden">
      {/* ========================================================
          1. HERO HEADER WITH METALLIC SHIMMER & EXACT TEXT
         ======================================================== */}
      <section className="relative w-full pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#E8DCD1] bg-gradient-to-b from-[#FAF6F1] via-[#FAF7F2] to-[#FAF8F5] overflow-hidden">
        {/* Ambient Glows */}
        <div
          className="anim-orb-1 pointer-events-none absolute -top-36 -left-20 w-[600px] h-[500px] rounded-full bg-gradient-to-br from-[#F5E6D8]/80 via-[#EEDFD0]/40 to-transparent blur-3xl -z-0"
          aria-hidden="true"
        />
        <div
          className="anim-orb-2 pointer-events-none absolute top-1/2 -right-24 w-[540px] h-[540px] rounded-full bg-gradient-to-tl from-[#F5EAE0]/70 via-[#EBD9CA]/30 to-transparent blur-3xl -z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#94613F] mb-4">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#94613F] to-[#7A4B29]" />
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="tracking-[0.22em] font-extrabold text-[#7A4B29]">
              PROVEN ENTERPRISE REPUTATION
            </span>
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1E14] leading-[1.12] tracking-tight mb-4">
            <span>Client </span>
            <span className="gold-text-shimmer">Success Stories</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#65442F] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Verified client testimonials &amp; industry recognition.
          </p>

          {/* Satisfaction Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 border-t border-[#E8DCD1] max-w-2xl mx-auto">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#7A4B29]">4.95 / 5.0</div>
              <div className="text-xs text-[#785A44] font-medium mt-0.5">Average Client Rating</div>
            </div>
            <div className="h-8 w-[1px] bg-[#E8DCD1]" />
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#7A4B29]">94%</div>
              <div className="text-xs text-[#785A44] font-medium mt-0.5">Repeat Engagement Rate</div>
            </div>
            <div className="h-8 w-[1px] bg-[#E8DCD1]" />
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#7A4B29]">50+</div>
              <div className="text-xs text-[#785A44] font-medium mt-0.5">Global Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. INDUSTRY RECOGNITION BADGES
         ======================================================== */}
      <section className="w-full py-10 bg-white border-b border-[#E8DCD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions.map((rec, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DCD1]"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FAF1E8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-[#2D1E14] leading-tight">
                      {rec.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#785A44] leading-snug mt-1 font-medium">
                    {rec.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. VERIFIED TESTIMONIALS GRID
         ======================================================== */}
      <section className="w-full py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#7A4B29] text-white shadow-md shadow-[#7A4B29]/25 scale-105"
                  : "bg-white border border-[#E8DCD1] text-[#6B5E55] hover:text-[#2D1E14] hover:bg-[#FAF3EC]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredStories.map((story, idx) => {
            const floatClass =
              idx % 2 === 0 ? "anim-card-float-1" : "anim-card-float-2";

            return (
              <div
                key={story.id}
                className={`${floatClass} group relative rounded-3xl bg-white border border-[#E8DCD1] hover:border-[#7A4B29]/60 shadow-[0_12px_32px_rgba(45,30,20,0.06)] hover:shadow-[0_20px_45px_rgba(122,75,41,0.14)] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Luminous Top Light Beam on Hover */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl overflow-hidden">
                  <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                </div>
              <div>
                {/* Header Rating & Project Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C89A62]">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A4B29] bg-[#FAF1E8] border border-[#E8DCD1] px-3 py-1 rounded-full">
                    {story.project}
                  </span>
                </div>

                {/* Big Quote Symbol & Content */}
                <Quote className="h-8 w-8 text-[#C89A62]/35 mb-3" />
                <p className="text-sm sm:text-base text-[#2D1E14] leading-relaxed italic mb-6">
                  &ldquo;{story.quote}&rdquo;
                </p>

                {/* Key Impact Card */}
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DCD1] mb-6 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#785A44]">
                    Measured Client Impact:
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#7A4B29]">
                    {story.impact}
                  </span>
                </div>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-[#F0E6DD] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#2D1E14]">
                    {story.name}
                  </h4>
                  <p className="text-xs text-[#785A44] font-medium">
                    {story.role} • {story.client}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  <BadgeCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="hidden sm:inline">{story.verified}</span>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          4. BOTTOM CONSULTATION BANNER
         ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-r from-[#2C1A0F] via-[#432717] to-[#5A3620] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C18D] mb-2">
              <Sparkles className="h-3.5 w-3.5 text-[#E5C18D]" />
              <span>Ready to Write Your Success Story?</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-snug">
              Partner with TechSphere Today
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E7]/80 leading-relaxed font-normal">
              Join over 50 global businesses transforming their operational efficiency with
              our dedicated engineering pods. We deliver your strategic estimate in 24 hours.
            </p>
          </div>

          <Link
            href="/contact"
            className="anim-badge-pulse inline-flex items-center gap-2 rounded-full bg-[#E5C18D] hover:bg-[#d8b075] text-[#2C1A0F] px-8 py-3.5 text-sm font-bold shadow-md transition-all flex-shrink-0"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>

      {/* Styled JSX */}
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
            transform: scale(1.15);
            opacity: 0.85;
          }
        }

        .anim-badge-pulse {
          animation: pulseBadge 3s ease-in-out infinite;
        }

        @keyframes orbFloat1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(15px, 20px);
          }
        }

        @keyframes orbFloat2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-15px, -18px);
          }
        }

        .anim-orb-1 {
          animation: orbFloat1 9s ease-in-out infinite;
        }

        .anim-orb-2 {
          animation: orbFloat2 11s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .gold-text-shimmer,
          .anim-badge-pulse,
          .anim-orb-1,
          .anim-orb-2 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
