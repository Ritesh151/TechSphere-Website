"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  X,
  Code2,
  Cpu,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export interface ProjectItem {
  id: string;
  num: string;
  category: "all" | "ai" | "erp" | "mobile" | "iot";
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  client: string;
  year: string;
  metric: { label: string; value: string };
  highlights: string[];
  techStack: string[];
  liveStatus: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "ai-itinerary-planner",
    num: "01",
    category: "ai",
    categoryLabel: "AI & Travel Tech",
    title: "AI Itinerary Planner",
    subtitle: "Autonomous Multi-City Route & Schedule Engine",
    description:
      "A generative travel planning engine that synthesizes flight schedules, boutique hotel availability, localized weather forecasts, and dynamic budget constraints into personalized, day-by-day interactive route maps.",
    image: "/images/projects/itinerary-planner.jpg",
    client: "WanderAI Global",
    year: "2026",
    metric: { label: "Planning Time", value: "30s vs 6 Hours" },
    highlights: [
      "Dynamic multi-city flight and transit route optimization",
      "Interactive 3D route map with offline GPX export",
      "Budget-aware day-by-day activity scheduling",
      "Real-time weather and crowd-density adjustments",
    ],
    techStack: ["Next.js 16", "LangChain", "Gemini API", "Google Maps SDK", "PostgreSQL"],
    liveStatus: "Live Enterprise Deployment",
  },
  {
    id: "ai-agent-chatbot",
    num: "02",
    category: "ai",
    categoryLabel: "Autonomous AI Swarms",
    title: "AI Agent ChatBot",
    subtitle: "Conversational Multi-Agent Enterprise Intelligence",
    description:
      "A high-concurrency enterprise conversational system with multi-agent orchestration, deterministic tool calling, database querying, and zero-hallucination semantic retrieval over private corporate knowledge vaults.",
    image: "/images/projects/ai-agent-chatbot.jpg",
    client: "OmniCore Enterprises",
    year: "2026",
    metric: { label: "Support Overhead", value: "-68% Saved" },
    highlights: [
      "Multi-agent swarm for triage, routing & execution",
      "Deterministic tool calling (SQL, Email, CRM sync)",
      "Zero-hallucination enterprise vector memory (pgvector)",
      "Omnichannel connectivity: Web, WhatsApp & Slack",
    ],
    techStack: ["Python FastAPI", "LangGraph", "pgvector", "WebSockets", "Docker"],
    liveStatus: "1.2M Queries / Month",
  },
  {
    id: "smart-erp-system",
    num: "03",
    category: "erp",
    categoryLabel: "Enterprise ERP",
    title: "Smart ERP Management System",
    subtitle: "Intelligent Multi-Department Resource Planning",
    description:
      "A distributed, cloud-native ERP platform integrating real-time multi-depot inventory telemetry, automated 3-way invoice matching, dynamic replenishment algorithms, and executive decision-support dashboards.",
    image: "/images/projects/smart-erp.jpg",
    client: "Apex Manufacturing & Logistics",
    year: "2025",
    metric: { label: "Operational Waste", value: "-42% Reduction" },
    highlights: [
      "Real-time multi-location warehouse synchronization",
      "Automated 3-way invoice matching & PO generation",
      "Predictive inventory stockout prevention",
      "Role-based granular permission hierarchies (RBAC)",
    ],
    techStack: ["React 19", "Node.js", "PostgreSQL", "Kafka", "Kubernetes", "Redis"],
    liveStatus: "Active in 18 Fulfillment Hubs",
  },
  {
    id: "shreemad-bhagvat-geeta",
    num: "04",
    category: "mobile",
    categoryLabel: "Mobile Applications",
    title: "ShreeMad Bhagvat Geeta App",
    subtitle: "Immersive Multilingual Shloka Audio & Sadhana Companion",
    description:
      "A sacred digital experience delivering all 700 verses of the Bhagavad Gita with studio-recorded Sanskrit audio streaming, word-by-word grammatical breakdowns, and an AI guide for modern philosophical reflections.",
    image: "/images/projects/bhagvat-geeta.jpg",
    client: "Sanatana Heritage Foundation",
    year: "2025",
    metric: { label: "Active Seekers", value: "350K+ Downloads" },
    highlights: [
      "Full 18 Chapters with high-fidelity studio shloka audio",
      "AI Vedic Guide answering philosophical dilemmas",
      "Sanskrit word-by-word meaning & transliteration",
      "Offline reading mode with customizable audio player",
    ],
    techStack: ["Flutter 3", "Dart", "SQLite (Offline-First)", "Cloudflare R2", "Riverpod"],
    liveStatus: "App Store & Play Store (4.9 ★)",
  },
  {
    id: "factory-management-app",
    num: "05",
    category: "iot",
    categoryLabel: "Industrial IoT & Ops",
    title: "Factory Management App",
    subtitle: "Real-Time Shop-Floor Telemetry & Equipment Maintenance",
    description:
      "An industrial edge tablet and mobile platform streaming live PLC vibration and temperature sensor data over MQTT to prevent unscheduled machine failures and optimize assembly line shifts in real time.",
    image: "/images/projects/factory-management.jpg",
    client: "PrecisionTech Industrial",
    year: "2026",
    metric: { label: "Unplanned Downtime", value: "-54% Drop" },
    highlights: [
      "Live PLC/IoT machine vibration & temperature monitoring",
      "Automated preventative maintenance alerts & runbooks",
      "Assembly line RFID part verification & speed telemetry",
      "Offline-capable floor tablets with instant sync",
    ],
    techStack: ["Flutter", "Golang", "MQTT Broker", "InfluxDB", "Grafana", "Docker"],
    liveStatus: "Deployed Across 6 Plants",
  },
];

export default function OurProjectsPage() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

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
          PROJECTS SHOWCASE (Clean, Direct, Minimal & Animated)
         ======================================================== */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-24 sm:pb-32 space-y-16 sm:space-y-24">
        {projectsData.map((project, index) => {
          const isReverse = index % 2 === 1;

          return (
            <article
              key={project.id}
              className="group relative rounded-[32px] bg-white/70 hover:bg-white backdrop-blur-md border border-[#E8DCD1] hover:border-[#7A4B29]/40 p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(45,30,20,0.04)] hover:shadow-[0_24px_60px_rgba(122,75,41,0.12)] transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-14 ${
                  isReverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image Preview Column */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#2D1E14] shadow-[0_12px_32px_rgba(45,30,20,0.08)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      priority={index < 2}
                    />

                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D1E14]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Top Floating Glass Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#2D1E14]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Live Status Pill */}
                    <div className="absolute bottom-3.5 left-3.5 z-10 flex items-center gap-1.5 text-[11px] font-medium text-[#FAF8F5] bg-black/55 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{project.liveStatus}</span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between text-left">
                  <div>
                    {/* Index Counter & Client Tag */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-sm font-bold text-[#C89A62]">
                        {project.num}
                      </span>
                      <span className="w-8 h-[1px] bg-[#E8DCD1]" />
                      <span className="text-xs font-semibold text-[#8C5D38] tracking-wider uppercase">
                        {project.client} • {project.year}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors leading-[1.18] mb-2">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-[#8C5D38] mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#65442F] leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Minimal Key Metric Pill */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#FAF1E8] border border-[#E8DCD1] mb-6">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C5D38]">
                        {project.metric.label}:
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#7A4B29]">
                        {project.metric.value}
                      </span>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium text-[#65442F] bg-white border border-[#E8DCD1] px-2.5 py-0.5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[#F0E6DD]">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#7A4B29] hover:text-[#5A3620] cursor-pointer group/link"
                    >
                      <span>Explore Technical Highlights</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>

                    <Link
                      href={`/contact?project=${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C5D38] hover:text-[#2D1E14] ml-auto transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ========================================================
          3. MINIMAL TECHNICAL HIGHLIGHTS MODAL (Smooth Backdrop)
         ======================================================== */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-[#2D1E14]/60 backdrop-blur-sm transition-all"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#E8DCD1] p-5 sm:p-8 shadow-2xl overflow-hidden max-h-[90dvh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-[#785A44] hover:text-[#2D1E14] hover:bg-[#FAF1E8] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A4B29] bg-[#FAF1E8] px-2.5 py-0.5 rounded-full border border-[#E8DCD1]">
                {activeModalProject.categoryLabel}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#2D1E14] mt-2">
                {activeModalProject.title}
              </h3>
              <p className="text-xs text-[#8C5D38] font-medium mt-0.5">
                {activeModalProject.client} • {activeModalProject.year}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A4B29]">
                Core Architecture Deliverables:
              </h4>
              <ul className="space-y-2">
                {activeModalProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#432717]">
                    <CheckCircle2 className="h-4 w-4 text-[#C89A62] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="pt-4 border-t border-[#F0E6DD] mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#785A44] mb-2">
                Technology Stack:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-[#7A4B29] bg-[#FAF1E8] border border-[#E8DCD1] px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#F0E6DD]">
              <span className="text-xs text-[#785A44] font-medium text-center sm:text-left">
                SLA &amp; Code Ownership Guaranteed
              </span>
              <Link
                href={`/contact?project=${activeModalProject.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#7A4B29] hover:bg-[#5A3620] text-white px-5 py-2.5 text-xs font-bold shadow-sm transition-all"
              >
                <span>Request Architecture Review</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          4. MINIMAL BOTTOM ECOSYSTEM LINK BAR
         ======================================================== */}
      <section className="relative z-10 w-full py-12 border-t border-[#E8DCD1] bg-white/60 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#94613F] block">
              CONTINUE EXPLORING
            </span>
            <p className="font-serif text-lg font-bold text-[#2D1E14]">
              Deep Technical Assets &amp; Proof of Delivery
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/portfolio/case-studies"
              className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#E8DCD1] hover:border-[#7A4B29] text-xs font-bold text-[#7A4B29] transition-all"
            >
              Case Studies →
            </Link>
            <Link
              href="/portfolio/technologies"
              className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#E8DCD1] hover:border-[#7A4B29] text-xs font-bold text-[#7A4B29] transition-all"
            >
              Technologies →
            </Link>
            <Link
              href="/portfolio/testimonials"
              className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#E8DCD1] hover:border-[#7A4B29] text-xs font-bold text-[#7A4B29] transition-all"
            >
              Client Success Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* Styled JSX for Shimmers and Ambient Animation Physics */}
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
            opacity: 0.8;
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
