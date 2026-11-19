"use client";

import { useState } from "react";
import Link from "next/link";
import ProcessTimelineSection from "@/components/services/ProcessTimelineSection";
import {
  UsersRound,
  MessageSquare,
  TrendingUp,
  Headphones,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Flame,
  Zap,
  ShieldCheck,
  Activity,
  ArrowUpRight,
  PhoneCall,
  Clock,
} from "lucide-react";

export default function CRMSolutionsPage() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      num: "01",
      title: "Omnichannel Engagement",
      tagline: "Unified inbox, WhatsApp, email & customer 360",
      category: "Customer Experience",
      description:
        "Consolidate conversations from WhatsApp Business, email, SMS, live webchat, and telephony into a single real-time stream. Give your agents complete behavioral context before they even say hello.",
      capabilities: [
        "Official WhatsApp Cloud API & Automated Chatbots",
        "Unified Multi-Channel Contact & Activity Timeline",
        "Bi-Directional Telephony Sync & Call Audio Recording",
        "Instant Contextual Customer 360 Lifetime Ledger",
      ],
      icon: MessageSquare,
      metrics: { label: "Response Speed", value: "1.4s Median" },
      techStack: ["Node.js", "WebSockets", "Twilio", "Meta Graph API"],
      href: "/get-a-quote",
    },
    {
      num: "02",
      title: "Automated Sales Pipelines",
      tagline: "Predictive lead scoring & dynamic deal progression",
      category: "Revenue Acceleration",
      description:
        "Supercharge high-velocity sales teams with automated lead assignment, dynamic deal stage routing, quota tracking, and instant commission forecasting to ensure no qualified opportunity slips away.",
      capabilities: [
        "AI-Driven Predictive Lead Scoring & Velocity Ranks",
        "Multi-Stage Deal Progression with SLA Reminders",
        "Automated Round-Robin Rep Quota & Territory Routing",
        "Real-Time Sales Commission & Forecast Telemetry",
      ],
      icon: TrendingUp,
      metrics: { label: "Conversion Lift", value: "+45% Win-Rate" },
      techStack: ["PostgreSQL", "Redis", "Kafka", "Next.js"],
      href: "/get-a-quote",
    },
    {
      num: "03",
      title: "Retention & Churn AI",
      tagline: "Early warning client analytics & automated winback",
      category: "Lifecycle Retention",
      description:
        "Proactively detect client dissatisfaction before churn happens. Machine learning models analyze feature usage, ticket sentiment, and payment cadence to trigger automated retention playbooks.",
      capabilities: [
        "Machine Learning Predictive Churn Warning Alerts",
        "Automated Winback Campaign Triggers & Special Offers",
        "Customer Lifetime Value (LTV) Trajectory Forecaster",
        "Automated NPS, CSAT & Sentiment Feedback Telemetry",
      ],
      icon: Flame,
      metrics: { label: "Churn Reduction", value: "38% Saved" },
      techStack: ["Python", "XGBoost", "Segment CDP", "SendGrid"],
      href: "/get-a-quote",
    },
    {
      num: "04",
      title: "Helpdesk & Service Portals",
      tagline: "AI-assisted ticket triage & self-service knowledge",
      category: "Support Operations",
      description:
        "Enterprise-grade ticketing platform featuring intelligent sentiment-based triage, automated deflection with internal knowledge bases, SLA breach warnings, and client self-service portals.",
      capabilities: [
        "Automated AI Ticket Severity Triage & Skill Tagging",
        "Branded Self-Service Client Portals & Knowledge Base",
        "Real-Time Predictive SLA Breach Prevention Alarms",
        "Omnichannel Live Co-Browsing & Agent Collaboration",
      ],
      icon: Headphones,
      metrics: { label: "First Contact SLA", value: "94% Resolved" },
      techStack: ["Next.js", "GraphQL", "Elasticsearch", "PostgreSQL"],
      href: "/get-a-quote",
    },
  ];

  const benchmarks = [
    {
      label: "First Response Speed",
      value: "1.4s",
      sub: "AI-assisted automated routing & triage",
      icon: Clock,
    },
    {
      label: "Conversion Rate Lift",
      value: "+45%",
      sub: "Average pipeline win-rate improvement",
      icon: TrendingUp,
    },
    {
      label: "Lead Leakage Prevention",
      value: "0.0%",
      sub: "Zero unassigned leads across channels",
      icon: ShieldCheck,
    },
    {
      label: "Customer Profile Depth",
      value: "360°",
      sub: "Unified behavioral & financial timeline",
      icon: Activity,
    },
  ];

  const techBadges = [
    "WhatsApp Cloud API",
    "Twilio Telephony",
    "PostgreSQL",
    "Redis",
    "Next.js",
    "Node.js",
    "Segment CDP",
    "SendGrid API",
    "Elasticsearch",
    "Kafka Streams",
    "HubSpot Sync",
    "Salesforce Bridge",
  ];

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#2D1E14] overflow-hidden">
      {/* ========================================================
          1. HERO HEADER WITH METALLIC GOLD SHIMMER & CTAS
         ======================================================== */}
      <section className="relative w-full pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#E8DCD1] bg-gradient-to-b from-[#FAF6F1] via-[#FAF7F2] to-[#FAF8F5] overflow-hidden">
        {/* Ambient Drifting Orbs */}
        <div
          className="anim-orb-1 pointer-events-none absolute -top-36 -left-20 w-[620px] h-[520px] rounded-full bg-gradient-to-br from-[#F5E6D8]/80 via-[#EEDFD0]/40 to-transparent blur-3xl -z-0"
          aria-hidden="true"
        />
        <div
          className="anim-orb-2 pointer-events-none absolute top-1/2 -right-24 w-[560px] h-[560px] rounded-full bg-gradient-to-tl from-[#F5EAE0]/70 via-[#EBD9CA]/30 to-transparent blur-3xl -z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#94613F] mb-4">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#94613F] to-[#7A4B29]" />
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="eyebrow-shimmer tracking-[0.22em] font-extrabold text-[#7A4B29]">
              CUSTOMER RELATIONSHIP MANAGEMENT (CRM)
            </span>
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1E14] leading-[1.12] tracking-tight mb-5">
            <span>Customer Relationship &amp; </span>
            <span className="gold-text-shimmer">Retention Systems</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#65442F] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Empower your sales, marketing, and support teams with unified CRM architectures engineered to turn initial touchpoints into lifelong customer relationships with automated outreach and churn prevention.
          </p>

          {/* Live Status Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white/85 backdrop-blur-md border border-[#E8DCD1] px-4 py-2 rounded-xl text-xs font-semibold text-[#7A4B29] shadow-xs mb-8 max-w-full">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Customer 360 Telemetry</span>
            <span className="text-[#C89A62] font-mono">•</span>
            <span className="text-[#8C5D38] font-mono">Predictive Churn AI &amp; Zero Lead Leakage</span>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-3.5 w-full xs:w-auto">
            <Link
              href="/get-a-quote"
              className="anim-badge-pulse inline-flex items-center justify-center gap-2 rounded-full bg-[#7A4B29] hover:bg-[#5A3620] text-white px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer w-full xs:w-auto text-center"
            >
              <span>Get Custom CRM Quote</span>
              <ArrowRight className="h-4 w-4 stroke-[2.25]" />
            </Link>
            <Link
              href="/portfolio/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/90 hover:bg-white text-[#2D1E14] border border-[#E8DCD1] px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold transition-all hover:border-[#7A4B29]/40 cursor-pointer shadow-xs w-full xs:w-auto text-center"
            >
              <span>Explore CRM Case Studies</span>
              <ArrowUpRight className="h-4 w-4 text-[#7A4B29]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. ENTERPRISE PERFORMANCE BENCHMARKS (4-Pill Strip)
         ======================================================== */}
      <section className="w-full py-10 bg-white/60 border-b border-[#E8DCD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benchmarks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white border border-[#E8DCD1] p-5 shadow-xs hover:border-[#7A4B29]/50 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF1E8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center group-hover:bg-[#7A4B29] group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-serif font-black text-[#2D1E14]">
                      {item.value}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#2D1E14] mb-0.5">
                    {item.label}
                  </h4>
                  <p className="text-[11px] text-[#785A44] font-medium">
                    {item.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. CORE ARCHITECTURE PILLARS (2x2 Grid with Light Beams)
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E8DCD1]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#94613F] block mb-2">
            CORE CRM ARCHITECTURE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1E14] mb-4">
            Engineered For Lifetime Client Retention
          </h2>
          <p className="text-sm sm:text-base text-[#65442F]">
            Unify your marketing funnels, sales pipelines, WhatsApp channels, and support helpdesk into one friction-free ecosystem with sub-second response times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const floatClass =
              idx % 2 === 0 ? "anim-card-float-1" : "anim-card-float-2";

            return (
              <div
                key={item.title}
                className={`${floatClass} group relative rounded-[32px] bg-white border border-[#E8DCD1] p-8 sm:p-9 shadow-[0_16px_36px_rgba(45,30,20,0.06)] hover:border-[#7A4B29]/70 hover:shadow-[0_24px_50px_rgba(45,30,20,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Luminous Top Light Beam on Hover */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] rounded-t-[32px] overflow-hidden">
                  <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                </div>

                <div>
                  {/* Top Bar: Number + Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-serif font-black text-[#C89A62]">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5D38] bg-[#FAF6F1] px-3 py-1 rounded-full border border-[#E8DCD1]">
                      {item.category}
                    </span>
                  </div>

                  {/* Icon Box with Pulsing Animation */}
                  <div
                    className="anim-icon-pulse w-14 h-14 rounded-2xl bg-[#FAF1E8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center mb-5 shadow-xs group-hover:bg-[#7A4B29] group-hover:text-white transition-all"
                    style={{ animationDelay: `${idx * 0.25}s` }}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.85} />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#94613F] mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#65442F] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="mb-6 pt-5 border-t border-[#F0E6DD]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#94613F] block mb-3.5">
                      Core System Capabilities
                    </span>
                    <ul className="space-y-2.5">
                      {item.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-[#2D1E14]"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SLA Badge & Tech Stack */}
                  <div className="mb-6 p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DCD1] flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-medium text-[#65442F]">
                      Channel Delivery SLA:
                    </span>
                    <span className="text-xs font-mono font-bold text-[#7A4B29] bg-white px-2.5 py-1 rounded-md border border-[#E8DCD1]">
                      {item.metrics.label}: {item.metrics.value}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold text-[#8C5D38] bg-[#FAF6F1] px-2.5 py-1 rounded-md border border-[#E8DCD1]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer: View Service Link */}
                <div className="pt-5 mt-4 border-t border-[#EEE5DC] flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#7A4B29] group-hover:text-[#5A3620] transition-colors"
                  >
                    <span>Request CRM Specification</span>
                    <ArrowRight className="anim-arrow-bounce h-3.5 w-3.5 stroke-[2.25]" />
                  </Link>
                  <span className="text-[11px] font-mono text-[#8C5D38]">
                    Real-Time Telemetry
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          4. MODERN TECH TOOLCHAIN RIBBON
         ======================================================== */}
      <section className="w-full py-12 bg-[#FAF6F1] border-b border-[#E8DCD1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#94613F] block mb-3">
            VERIFIED CRM CHANNELS &amp; MESSAGING INFRASTRUCTURE
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-xl bg-white border border-[#E8DCD1] text-xs font-semibold text-[#2D1E14] shadow-xs hover:border-[#7A4B29]/60 hover:scale-105 transition-all"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. DEVELOPMENT PROCESS (How We Turn Ideas Into Reality)
          Interactive 7-Step Luminous Timeline
         ======================================================== */}
      <ProcessTimelineSection />

      {/* ========================================================
          6. BOTTOM CONSULTATION BANNER
         ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-r from-[#2C1A0F] via-[#432717] to-[#5A3620] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C18D] mb-2">
              <Sparkles className="h-3.5 w-3.5 text-[#E5C18D]" />
              <span>Need a Specialized Enterprise Architecture?</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-snug">
              Talk to Our CRM Architecture Engineers
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E7]/80 leading-relaxed font-normal">
              Scale your sales volume and boost customer retention with automated pipelines and WhatsApp integration. We build tailored blueprints in 48 hours.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3.5 flex-shrink-0 w-full md:w-auto">
            <Link
              href="/get-a-quote"
              className="anim-badge-pulse inline-flex items-center justify-center gap-2 rounded-full bg-[#E5C18D] hover:bg-[#d8b075] text-[#2C1A0F] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer w-full xs:w-auto text-center"
            >
              <span>Get Free CRM Architecture Quote</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer w-full xs:w-auto text-center"
            >
              <span>Talk to Architects</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Styled JSX for Shimmers and Ambient Lighting */}
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

        .eyebrow-shimmer {
          background: linear-gradient(
            90deg,
            #94613f 0%,
            #c89a62 50%,
            #94613f 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmerSweep 4s linear infinite;
        }

        @keyframes textShimmerSweep {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .anim-orb-1 {
          animation: orbDrift1 12s ease-in-out infinite alternate;
        }

        .anim-orb-2 {
          animation: orbDrift2 14s ease-in-out infinite alternate;
        }

        @keyframes orbDrift1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(30px, 20px) scale(1.08);
          }
        }

        @keyframes orbDrift2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-25px, -15px) scale(1.05);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gold-text-shimmer,
          .eyebrow-shimmer,
          .anim-orb-1,
          .anim-orb-2 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
