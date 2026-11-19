"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Cpu,
  Cloud,
  Database,
  Lock,
  Smartphone,
  BrainCircuit,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Zap,
  Activity,
  Terminal,
} from "lucide-react";

export default function TechnologiesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const techCategories = [
    {
      id: "ai",
      category: "Artificial Intelligence & Multi-Agent Swarms",
      icon: BrainCircuit,
      description:
        "Deterministic agentic workflows, private document vector indexes, and zero-hallucination semantic intelligence.",
      stacks: [
        { name: "LangChain & LangGraph", desc: "Multi-agent swarm coordination", tag: "Agentic AI", status: "Active Pod" },
        { name: "OpenAI & Gemini 3.8", desc: "Multimodal frontier LLMs", tag: "Frontier Models", status: "Sub-100ms" },
        { name: "pgvector & Pinecone", desc: "Sub-millisecond vector indexing", tag: "Vector RAG", status: "Zero Drift" },
        { name: "LlamaIndex", desc: "Private knowledge graph orchestration", tag: "Semantic Graph", status: "Enterprise" },
        { name: "PyTorch & HuggingFace", desc: "Domain-specific model fine-tuning", tag: "Deep Learning", status: "GPU Clustered" },
      ],
    },
    {
      id: "web",
      category: "Frontend & Modern Web Architectures",
      icon: Code2,
      description:
        "Sub-100ms edge rendering, micro-frontends, and strict TypeScript component architectures.",
      stacks: [
        { name: "Next.js 16 (Turbopack)", desc: "Server Components & Edge Caching", tag: "Framework", status: "Edge Ready" },
        { name: "React 19", desc: "Actions, Transitions & Concurrent Mode", tag: "Core UI", status: "Concurrent" },
        { name: "TypeScript 5.x", desc: "Strict end-to-end type safety", tag: "Language", status: "100% Strict" },
        { name: "Tailwind CSS v4", desc: "Zero-runtime high-performance CSS", tag: "Styling", status: "Zero Runtime" },
        { name: "GraphQL & Apollo", desc: "Type-safe federated data graphs", tag: "API Layer", status: "Federated" },
      ],
    },
    {
      id: "mobile",
      category: "Mobile & Cross-Platform Engineering",
      icon: Smartphone,
      description:
        "60fps native-speed iOS & Android applications with offline-first SQLite synchronization.",
      stacks: [
        { name: "Flutter 3.x", desc: "High-speed cross-platform engine", tag: "Cross-Platform", status: "60 FPS" },
        { name: "Dart", desc: "Strongly-typed AOT compiled language", tag: "Language", status: "AOT Compiled" },
        { name: "Swift & SwiftUI", desc: "Native iOS polished experiences", tag: "Apple Native", status: "iOS 18+" },
        { name: "Kotlin & Jetpack Compose", desc: "Modern declarative Android apps", tag: "Android Native", status: "Material 3" },
        { name: "SQLite & Riverpod", desc: "Offline-first reactive state cache", tag: "Local DB", status: "Offline First" },
      ],
    },
    {
      id: "backend",
      category: "Backend & Distributed Microservices",
      icon: Cpu,
      description:
        "High-throughput event-driven microservices engineered for millions of concurrent requests.",
      stacks: [
        { name: "Python / FastAPI", desc: "Asynchronous high-concurrency APIs", tag: "Microservices", status: "Async Core" },
        { name: "Go (Golang)", desc: "Low-memory lightning-fast daemons", tag: "Systems", status: "Microsecond" },
        { name: "Node.js & NestJS", desc: "Enterprise modular TypeScript backends", tag: "Enterprise API", status: "Modular" },
        { name: "Apache Kafka", desc: "Distributed real-time event streaming", tag: "Event Bus", status: "Partitioned" },
        { name: "gRPC & Protocol Buffers", desc: "Sub-10ms inter-service RPC", tag: "Low Latency", status: "Binary Stream" },
      ],
    },
    {
      id: "cloud",
      category: "Cloud Infrastructure, DevOps & Containers",
      icon: Cloud,
      description:
        "Elastic auto-healing infrastructure with multi-region failover and GitOps automated CI/CD.",
      stacks: [
        { name: "Kubernetes (K8s)", desc: "Automated container orchestration", tag: "Orchestration", status: "Auto Scale" },
        { name: "Docker", desc: "Lightweight isolated application containers", tag: "Containerization", status: "OCI Compliant" },
        { name: "Amazon Web Services (AWS)", desc: "EKS, RDS, S3, CloudFront & Lambda", tag: "Cloud Provider", status: "Multi Region" },
        { name: "Google Cloud Platform (GCP)", desc: "GKE, BigQuery, Vertex AI & Cloud Run", tag: "AI Cloud", status: "Enterprise" },
        { name: "Terraform", desc: "Immutable Infrastructure as Code (IaC)", tag: "DevOps", status: "GitOps Automated" },
      ],
    },
    {
      id: "data-iot",
      category: "Databases, Industrial IoT & Zero-Trust",
      icon: Database,
      description:
        "ACID-compliant relational clusters, real-time IoT time-series telemetry, and military-grade vaults.",
      stacks: [
        { name: "PostgreSQL", desc: "Mission-critical ACID relational database", tag: "Relational", status: "ACID Tier 1" },
        { name: "Redis", desc: "Sub-millisecond in-memory caching", tag: "Cache", status: "Sub-1ms" },
        { name: "InfluxDB & MQTT", desc: "Industrial shop-floor telemetry ingestion", tag: "IoT Telemetry", status: "10K Events/s" },
        { name: "HashiCorp Vault", desc: "Dynamic secrets & HSM key management", tag: "Zero-Trust", status: "HSM Backed" },
        { name: "Cloudflare Enterprise", desc: "Layer 3/4/7 DDoS Shield & Global WAF", tag: "Perimeter Shield", status: "DDoS Protected" },
      ],
    },
  ];

  const marqueeTechnologies = [
    "Next.js 16",
    "React 19",
    "LangGraph",
    "pgvector",
    "Flutter 3",
    "Python FastAPI",
    "Golang",
    "Kubernetes",
    "Apache Kafka",
    "PostgreSQL",
    "Redis",
    "Docker",
    "InfluxDB",
    "GraphQL",
    "AWS EKS",
    "Google Cloud",
    "Terraform",
    "HashiCorp Vault",
    "TypeScript",
    "MQTT Broker",
  ];

  const filterTabs = [
    { id: "all", label: "All Stacks (6 Domains)" },
    { id: "ai", label: "AI & Agents" },
    { id: "web", label: "Web Architecture" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "backend", label: "Backend & Systems" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "data-iot", label: "Databases & IoT" },
  ];

  const filteredCategories =
    activeFilter === "all"
      ? techCategories
      : techCategories.filter((c) => c.id === activeFilter);

  return (
    <div className="relative w-full bg-[#FAF8F5] text-[#2D1E14] overflow-hidden selection:bg-[#C89A62]/20">
      {/* Background Continuous Ambient Lighting & Glowing Matrix Orbs */}
      <div
        className="anim-orb-1 pointer-events-none absolute -top-40 left-1/4 w-[750px] h-[550px] rounded-full bg-gradient-to-tr from-[#F5E6D8]/50 via-[#EEDFD0]/25 to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />
      <div
        className="anim-orb-2 pointer-events-none absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#F5EAE0]/60 via-[#EBD9CA]/20 to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />
      <div
        className="anim-orb-3 pointer-events-none absolute bottom-1/4 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#FAF0E6]/70 to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />

      {/* ========================================================
          1. HERO HEADER WITH METALLIC SHIMMER & ANIMATED BADGES
         ======================================================== */}
      <section className="relative z-10 w-full pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 text-center max-w-5xl mx-auto px-4 sm:px-6">
        {/* Animated Eyebrow */}
        <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.24em] text-[#94613F] mb-4">
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#94613F] to-[#7A4B29]" />
          <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
          <span>ENTERPRISE-GRADE TOOLCHAIN</span>
          <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
          <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
        </div>

        {/* Heading with continuous metallic gold shimmer sweep */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1E14] leading-[1.12] tracking-tight mb-4">
          <span>Modern </span>
          <span className="gold-text-shimmer">Technologies</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#65442F] max-w-xl mx-auto leading-relaxed font-normal mb-8">
          Modern tech stack, frameworks &amp; cloud platforms.
        </p>

        {/* Live Metrics Bar with Pulsing Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 border-t border-[#E8DCD1] max-w-2xl mx-auto">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-black text-[#7A4B29]">30+ Frameworks</div>
              <div className="text-[11px] text-[#785A44] font-medium">Production Deployed</div>
            </div>
          </div>

          <div className="hidden sm:block h-7 w-[1px] bg-[#E8DCD1]" />

          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[#C89A62] animate-pulse" />
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-black text-[#7A4B29]">100% Type-Safe</div>
              <div className="text-[11px] text-[#785A44] font-medium">Strict Code Standards</div>
            </div>
          </div>

          <div className="hidden sm:block h-7 w-[1px] bg-[#E8DCD1]" />

          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-black text-[#7A4B29]">Sub-100ms</div>
              <div className="text-[11px] text-[#785A44] font-medium">Edge SLA Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CONTINUOUS INFINITE TECH MARQUEE RIBBON
         ======================================================== */}
      <div className="relative w-full py-4 bg-white/70 backdrop-blur-md border-y border-[#E8DCD1] overflow-hidden mb-12">
        <div className="flex w-max animate-marquee space-x-6 items-center">
          {marqueeTechnologies.concat(marqueeTechnologies).map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6F1] border border-[#E8DCD1] text-xs font-bold text-[#7A4B29] whitespace-nowrap shadow-2xs hover:scale-105 transition-transform"
            >
              <span className="text-[#C89A62] text-[10px]">♦</span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          3. FILTER TABS & ANIMATED TECH CARDS
         ======================================================== */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#7A4B29] text-white shadow-md shadow-[#7A4B29]/25 scale-105"
                  : "bg-white border border-[#E8DCD1] text-[#6B5E55] hover:text-[#2D1E14] hover:bg-[#FAF3EC]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Technology Domain Animated Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredCategories.map((domain, idx) => {
            const Icon = domain.icon;
            const floatClass =
              idx % 3 === 0
                ? "anim-card-float-1"
                : idx % 3 === 1
                ? "anim-card-float-2"
                : "anim-card-float-3";

            return (
              <div
                key={domain.id}
                className={`${floatClass} group relative rounded-[32px] bg-white/80 hover:bg-white backdrop-blur-md border border-[#E8DCD1] hover:border-[#7A4B29]/60 shadow-[0_12px_36px_rgba(45,30,20,0.05)] hover:shadow-[0_24px_55px_rgba(122,75,41,0.15)] transition-all duration-500 hover:-translate-y-1.5 p-6 sm:p-8 lg:p-9 flex flex-col justify-between overflow-hidden`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Luminous Animated Beam Across Top Border */}
                <div className="card-light-beam absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C89A62] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Header Row */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="anim-icon-pulse relative w-14 h-14 rounded-2xl bg-[#FAF1E8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A4B29] group-hover:text-white transition-all shadow-xs">
                      <Icon className="h-7 w-7 stroke-[1.85]" />
                      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                    </div>

                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors leading-snug">
                        {domain.category}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#65442F] leading-relaxed mt-1 font-normal">
                        {domain.description}
                      </p>
                    </div>
                  </div>

                  {/* Stacks List with Live Signals */}
                  <div className="space-y-3 pt-2">
                    {domain.stacks.map((stack, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/item flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E8DCD1]/80 hover:border-[#7A4B29]/40 hover:bg-white transition-all hover:shadow-xs gap-2"
                      >
                        <div className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-[#C89A62] group-hover/item:scale-125 transition-transform" />
                          <div>
                            <span className="text-xs sm:text-sm font-bold text-[#2D1E14] block leading-tight group-hover/item:text-[#7A4B29] transition-colors">
                              {stack.name}
                            </span>
                            <span className="text-[11px] text-[#785A44] font-medium">
                              {stack.desc}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {stack.status}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5D38] bg-white border border-[#E8DCD1] px-2.5 py-0.5 rounded-md">
                            {stack.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Consultation Link */}
                <div className="pt-6 mt-6 border-t border-[#F0E6DD] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#8C5D38] font-semibold">
                    <Activity className="h-3.5 w-3.5 text-emerald-600 animate-pulse" />
                    <span>Production Verified &amp; Monitored</span>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 font-bold text-[#7A4B29] hover:text-[#5A3620] group/link"
                  >
                    <span>Request Stack Audit</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          4. ARCHITECTURE MIGRATION AUDIT CTA BANNER
         ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-r from-[#2C1A0F] via-[#432717] to-[#5A3620] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C18D] mb-2">
              <Sparkles className="h-3.5 w-3.5 text-[#E5C18D] animate-spin" style={{ animationDuration: "8s" }} />
              <span>Modernizing Your Legacy Tech Stack?</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-snug">
              Get an Architecture Migration Blueprint
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E7]/80 leading-relaxed font-normal">
              Our principal engineers audit your current tech stack for latency bottlenecks, security vulnerabilities,
              and scaling limits. We deliver an actionable 12-month modernization roadmap in 48 hours.
            </p>
          </div>

          <Link
            href="/contact"
            className="anim-badge-pulse inline-flex items-center gap-2 rounded-full bg-[#E5C18D] hover:bg-[#d8b075] text-[#2C1A0F] px-8 py-3.5 text-sm font-bold shadow-md hover:shadow-lg transition-all flex-shrink-0"
          >
            <span>Request Architecture Audit</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>

      {/* Styled JSX for Smooth Physics & Continuous Keyframe Animations */}
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

        @keyframes orbFloat3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(15px, -18px);
          }
        }

        .anim-orb-1 {
          animation: orbFloat1 10s ease-in-out infinite;
        }

        .anim-orb-2 {
          animation: orbFloat2 12s ease-in-out infinite;
        }

        .anim-orb-3 {
          animation: orbFloat3 14s ease-in-out infinite;
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

        @keyframes cardFloat3 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .anim-card-float-1 {
          animation: cardFloat1 7s ease-in-out infinite;
        }

        .anim-card-float-2 {
          animation: cardFloat2 8s ease-in-out infinite;
        }

        .anim-card-float-3 {
          animation: cardFloat3 9s ease-in-out infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marqueeScroll 28s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
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
          .anim-orb-3,
          .anim-card-float-1,
          .anim-card-float-2,
          .anim-card-float-3,
          .animate-marquee,
          .card-light-beam {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
