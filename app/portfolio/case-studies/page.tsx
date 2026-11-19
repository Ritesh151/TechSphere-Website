"use client";

import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  Bot,
  Factory,
  BookOpen,
  MapPin,
  ChevronDown,
  Building2,
  Calendar,
  ExternalLink,
} from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "smart-erp",
      category: "erp",
      title: "Smart ERP Management System",
      client: "Apex Manufacturing & Logistics",
      industry: "Supply Chain & Industrial Operations",
      metric: "-42% Operational Waste (₹25+ Cr Annual Savings)",
      metricLabel: "Measured Impact",
      challenge:
        "Fragmented legacy ERP databases across 18 regional fulfillment hubs led to uncoordinated multi-depot inventory imbalances, rampant stockouts, and over ₹40 Crores in annual deadhead shipping waste.",
      solution:
        "Architected an event-driven distributed ERP powered by Kafka streaming, automated 3-way invoice matching, dynamic replenishment algorithms, and sub-50ms inventory telemetry across all facilities.",
      impact:
        "₹25+ Crores verified annual cost savings, 99.8% on-time order fulfillment rate, and zero data discrepancies between warehouse floor scanners and central ERP accounting.",
      techStack: ["React 19", "Node.js", "PostgreSQL", "Kafka", "Kubernetes", "Redis"],
      timeline: "5 Months Scoping to Global Rollout",
    },
    {
      id: "ai-chatbot",
      category: "ai",
      title: "AI Agent ChatBot Platform",
      client: "OmniCore Enterprises",
      industry: "Enterprise SaaS & Customer Operations",
      metric: "-68% Support Overhead (1.2M Queries/mo)",
      metricLabel: "Cost Reduction",
      challenge:
        "Tier-1 support ticket queues were overwhelming customer success teams, leading to 4-hour average response times, rising operational costs, and high customer churn.",
      solution:
        "Engineered a multi-agent autonomous swarm using LangGraph and pgvector private document embeddings. Capable of executing deterministic tool calls: querying database schemas, dispatching emails, and updating CRM records without human intervention.",
      impact:
        "1.2M monthly customer inquiries resolved with an average latency of 1.4 seconds, zero hallucination incidents, and 68% reduction in support staffing costs.",
      techStack: ["Python FastAPI", "LangGraph", "pgvector", "WebSockets", "Docker", "Next.js 16"],
      timeline: "8 Weeks MVP to High-Volume Production",
    },
    {
      id: "ai-itinerary",
      category: "ai",
      title: "AI Itinerary Planner Engine",
      client: "WanderAI Global",
      industry: "Travel Tech & Consumer SaaS",
      metric: "30s vs 6 Hours Booking Cycle (+45% Conversion)",
      metricLabel: "Conversion Lift",
      challenge:
        "Modern travelers spent an average of 6 hours across 12 different booking portals attempting to synchronize flight timings, boutique hotel check-ins, local transport, and curated activity schedules.",
      solution:
        "Built a generative travel planner utilizing multimodal AI, live airline/hotel API aggregations, and Google Maps spatial clustering to generate day-by-day interactive itineraries with automated budget and weather guardrails.",
      impact:
        "Trip planning duration dropped from hours to under 30 seconds, platform checkout conversion increased by 45%, and mobile app retention surged by 3.8x.",
      techStack: ["Next.js 16", "LangChain", "Gemini API", "Google Maps SDK", "PostgreSQL"],
      timeline: "10 Weeks Architecture & Launch",
    },
    {
      id: "bhagvat-geeta",
      category: "mobile",
      title: "ShreeMad Bhagvat Geeta App",
      client: "Sanatana Heritage Foundation",
      industry: "Mobile Applications & Digital Heritage",
      metric: "350K+ Active Seekers (4.9/5 Rating)",
      metricLabel: "Community Adoption",
      challenge:
        "Existing spiritual applications featured low-bitrate compressed audio, illegible Sanskrit scripts, intrusive ads, and no intuitive modern tools for young professionals seeking Vedic philosophical clarity.",
      solution:
        "Engineered an offline-first Flutter 3 mobile companion featuring studio-recorded Sanskrit audio streamed via Cloudflare R2, interactive grammatical breakdown of all 700 verses, and an AI reflection guide.",
      impact:
        "Over 350,000 active global downloads across 42 countries, 4.9/5 rating on both App Store & Google Play, and average daily active engagement time exceeding 24 minutes per seeker.",
      techStack: ["Flutter 3", "Dart", "SQLite", "Cloudflare R2 CDN", "Riverpod", "Clean Architecture"],
      timeline: "12 Weeks Native App Delivery",
    },
    {
      id: "factory-management",
      category: "iot",
      title: "Factory Management App",
      client: "PrecisionTech Industrial",
      industry: "Smart Manufacturing & Industrial IoT",
      metric: "-54% Unplanned Machine Downtime (Zero Failures)",
      metricLabel: "Reliability Uptime",
      challenge:
        "Catastrophic unscheduled CNC motor and hydraulic pump breakdowns were costing manufacturing plants up to ₹70 Lakhs per hour in idle assembly line downtime.",
      solution:
        "Designed an edge-computing industrial tablet and mobile app connecting to shop-floor machinery via MQTT protocols, streaming real-time temperature, vibration, and duty cycle telemetry to predictive ML models.",
      impact:
        "54% drop in unplanned machine downtime across 6 manufacturing plants, saving over ₹15 Crores in emergency repair costs, with 100% shift schedule compliance.",
      techStack: ["Flutter Mobile & Tablet", "Golang", "MQTT Broker", "InfluxDB", "Grafana", "Docker"],
      timeline: "14 Weeks Hardware Integration & Floor Deployment",
    },
  ];

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#2D1E14] overflow-hidden">
      {/* Ambient Glows */}
      <div
        className="anim-orb-1 pointer-events-none absolute -top-36 -left-20 w-[600px] h-[500px] rounded-full bg-gradient-to-br from-[#F5E6D8]/80 via-[#EEDFD0]/40 to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />
      <div
        className="anim-orb-2 pointer-events-none absolute top-1/2 -right-24 w-[540px] h-[540px] rounded-full bg-gradient-to-tl from-[#F5EAE0]/70 via-[#EBD9CA]/30 to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />

      {/* ========================================================
          CASE STUDIES DEEP-DIVE LIST (Direct, Clean & Minimal)
         ======================================================== */}
      <section className="relative z-10 w-full pt-10 sm:pt-14 lg:pt-16 pb-24 sm:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Deep Architectural Breakdown Cards */}
        <div className="space-y-10 sm:space-y-12">
          {caseStudies.map((cs, idx) => {
            const floatClass =
              idx % 2 === 0 ? "anim-card-float-1" : "anim-card-float-2";

            return (
              <article
                key={cs.id}
                className={`${floatClass} group relative rounded-3xl bg-white border border-[#E8DCD1] hover:border-[#7A4B29]/60 shadow-[0_12px_32px_rgba(45,30,20,0.06)] hover:shadow-[0_20px_45px_rgba(122,75,41,0.14)] transition-all duration-300 p-6 sm:p-8 lg:p-10 overflow-hidden`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Luminous Top Light Beam on Hover */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl overflow-hidden">
                  <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                </div>
              {/* Top Banner Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#F0E6DD]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A4B29] bg-[#FAF1E8] border border-[#E8DCD1] px-3 py-1 rounded-full">
                      {cs.industry}
                    </span>
                    <span className="text-xs text-[#8C5D38] font-semibold">
                      Client: {cs.client}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors">
                    {cs.title}
                  </h2>
                </div>

                {/* Big Metric Box */}
                <div className="flex-shrink-0 bg-gradient-to-br from-[#FAF3EC] to-[#F5E8DC] border border-[#E8DCD1] rounded-2xl p-4 sm:p-5 flex flex-col justify-center text-left lg:text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5D38] mb-1">
                    {cs.metricLabel}
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#7A4B29] leading-snug">
                    {cs.metric}
                  </span>
                  <span className="text-[11px] text-[#785A44] font-medium mt-1">
                    {cs.timeline}
                  </span>
                </div>
              </div>

              {/* 3-Column Challenge / Solution / Impact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 py-8 border-b border-[#F0E6DD]">
                {/* 1. Challenge */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DCD1]/80">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A64B2A] mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#A64B2A]" />
                    <span>01. The Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#65442F] leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                {/* 2. Solution */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DCD1]/80">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A4B29] mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#7A4B29]" />
                    <span>02. Architecture &amp; Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#65442F] leading-relaxed">
                    {cs.solution}
                  </p>
                </div>

                {/* 3. Quantified Impact */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DCD1]/80">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>03. Quantified ROI Impact</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#432717] leading-relaxed font-medium">
                    {cs.impact}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Tech Stack Pills & Contact Link */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C5D38] mr-1">
                    Tech Stack:
                  </span>
                  {cs.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold text-[#65442F] bg-[#FAF3EC] border border-[#E8DCD1] px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contact?case=${cs.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#7A4B29] hover:text-[#5A3620] group/link flex-shrink-0"
                >
                  <span>Request Full Technical Specs</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          BOTTOM CTA BANNER
         ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-r from-[#2C1A0F] via-[#432717] to-[#5A3620] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C18D] mb-2">
              <Sparkles className="h-3.5 w-3.5 text-[#E5C18D]" />
              <span>Have a Complex Engineering Problem?</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-snug">
              Let&apos;s Architect Your Custom Solution
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E7]/80 leading-relaxed font-normal">
              Book a 45-minute technical discovery session with our senior solution architects.
              We diagnose your friction points and present an actionable delivery roadmap.
            </p>
          </div>

          <Link
            href="/contact"
            className="anim-badge-pulse inline-flex items-center gap-2 rounded-full bg-[#E5C18D] hover:bg-[#d8b075] text-[#2C1A0F] px-8 py-3.5 text-sm font-bold shadow-md transition-all flex-shrink-0"
          >
            <span>Talk to Our Architects</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>

      {/* Keyframe Styles */}
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
