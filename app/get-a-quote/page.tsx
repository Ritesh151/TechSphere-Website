"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  BrainCircuit,
  Layers3,
  Cloud,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Send,
  Calculator,
  Lock,
  Clock,
  Check,
  Zap,
  Building2,
  Server,
  FileCheck2,
  Phone,
  Mail,
  User,
} from "lucide-react";

interface RequirementItem {
  id: string;
  num: string;
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  icon: any;
  defaultScopes: string[];
  techStackOptions: string[];
}

export default function ClientRequirementsQuotePage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedReqId, setSelectedReqId] = useState<string>("web");
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    "Next.js 16 & React 19 App Router",
    "Sub-Second Core Web Vitals (99+ Lighthouse)",
  ]);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([
    "Next.js",
    "React",
    "TypeScript",
  ]);
  const [selectedBudget, setSelectedBudget] = useState("₹5 Lakhs - ₹15 Lakhs");
  const [selectedTimeline, setSelectedTimeline] = useState("2 - 3 Months");
  const [submitted, setSubmitted] = useState(false);

  // 7 Client's Requirements as explicitly requested
  const requirements: RequirementItem[] = [
    {
      id: "web",
      num: "01",
      eyebrow: "Full-Stack Web",
      title: "Web Development",
      description: "Custom scopes, tech stack, and dedicated inquiry form.",
      buttonText: "Dedicated Quote",
      icon: Code2,
      defaultScopes: [
        "Next.js 16 & React 19 App Router",
        "Sub-Second Core Web Vitals (99+ Lighthouse)",
        "Headless Commerce & Multi-Currency Checkout",
        "Enterprise SaaS RBAC Dashboard & Real-Time Streams",
        "Sanity/Strapi Headless CMS & Federated GraphQL",
      ],
      techStackOptions: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "GraphQL",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
    },
    {
      id: "mobile",
      num: "02",
      eyebrow: "iOS & Android",
      title: "Mobile Apps",
      description: "Custom scopes, tech stack, and dedicated inquiry form.",
      buttonText: "Dedicated Quote",
      icon: Smartphone,
      defaultScopes: [
        "Native Swift 6 & SwiftUI iOS Engineering",
        "Native Kotlin & Jetpack Compose Android",
        "60/120 FPS Cross-Platform Flutter Engine",
        "React Native & Expo OTA Architecture",
        "Offline-First SQLite Sync & Biometric Security",
      ],
      techStackOptions: [
        "Swift 6",
        "SwiftUI",
        "Kotlin",
        "Jetpack Compose",
        "Flutter",
        "Dart",
        "React Native",
        "Room DB",
      ],
    },
    {
      id: "ai",
      num: "03",
      eyebrow: "GenAI & Agents",
      title: "AI & Automation",
      description: "Custom scopes, tech stack, and dedicated inquiry form.",
      buttonText: "Dedicated Quote",
      icon: BrainCircuit,
      defaultScopes: [
        "Autonomous Multi-Agent Swarm Orchestration",
        "Enterprise Private RAG & Quarantined VPC Vectors",
        "Intelligent Multi-Page Document OCR & Invoice Parsing",
        "Predictive Churn & Supply-Chain ML Pipelines",
        "Zero-Hallucination Guardrails & Deterministic Schemas",
      ],
      techStackOptions: [
        "LangChain",
        "LangGraph",
        "LlamaIndex",
        "pgvector",
        "Pinecone",
        "PyTorch",
        "vLLM",
        "FastAPI",
      ],
    },
    {
      id: "erp",
      num: "04",
      eyebrow: "Enterprise Systems",
      title: "ERP & CRM",
      description: "Custom scopes, tech stack, and dedicated inquiry form.",
      buttonText: "Dedicated Quote",
      icon: Layers3,
      defaultScopes: [
        "Multi-Warehouse Real-Time Inventory & Barcode RFID",
        "Procurement Portal with Automated 3-Way PO Matching",
        "Double-Entry Financial Ledger & Automated GST/Tax Filing",
        "WhatsApp Business Cloud API & Omnichannel Inbox",
        "Predictive Lead Scoring & Automated Quota Routing",
      ],
      techStackOptions: [
        "PostgreSQL",
        "Apache Kafka",
        "Redis",
        "Go Microservices",
        "WhatsApp API",
        "Node.js",
        "Elasticsearch",
        "Next.js",
      ],
    },
    {
      id: "cloud",
      num: "05",
      eyebrow: "AWS & Kubernetes",
      title: "Cloud & DevOps",
      description: "Custom scopes, tech stack, and dedicated inquiry form.",
      buttonText: "Dedicated Quote",
      icon: Cloud,
      defaultScopes: [
        "Production Kubernetes (EKS / GKE) Cluster Orchestration",
        "Infrastructure as Code (Terraform & OpenTofu)",
        "Zero-Downtime Blue/Green CI/CD Pipeline Automation",
        "Cloud FinOps & Infrastructure Cost Optimization (35%+)",
        "Multi-Region High Availability & Automated Failover",
      ],
      techStackOptions: [
        "AWS",
        "Kubernetes",
        "Terraform",
        "Docker",
        "GitHub Actions",
        "ArgoCD",
        "Prometheus",
        "Cloudflare",
      ],
    },
    {
      id: "security",
      num: "06",
      eyebrow: "Audits & SecOps",
      title: "Cyber Security",
      description: "Custom scopes, tech stack, and dedicated inquiry form.",
      buttonText: "Dedicated Quote",
      icon: ShieldCheck,
      defaultScopes: [
        "Full-Scope Web, Cloud & REST/GraphQL API Pentesting",
        "OWASP Top 10 SAST & DAST Code Pipeline Scans",
        "Zero-Trust Architecture & Hardware Secret Vaults",
        "SOC 2 Type II, ISO 27001 & HIPAA Compliance Prep",
        "Enterprise Cloudflare WAF & 24/7 DDoS Incident Defense",
      ],
      techStackOptions: [
        "HashiCorp Vault",
        "Cloudflare WAF",
        "SonarQube",
        "Falco eBPF",
        "OWASP ZAP",
        "AWS KMS",
        "WireGuard mTLS",
        "Trivy",
      ],
    },
    {
      id: "marketing",
      num: "07",
      eyebrow: "SEO & Growth",
      title: "Digital Marketing",
      description: "Custom scopes, tech stack, and dedicated inquiry form.",
      buttonText: "Dedicated Quote",
      icon: TrendingUp,
      defaultScopes: [
        "Programmatic Technical SEO & Sub-Second CWV Ranking",
        "Conversion Rate Optimization (CRO) & A/B Funnels",
        "High-ROAS Google Search, Meta & B2B LinkedIn Ad Ops",
        "Multi-Touch Attribution Modeling & Segment CDP Pipeline",
        "Automated Content Syndication & Dynamic Schema Markup",
      ],
      techStackOptions: [
        "Google Analytics 4",
        "Search Console",
        "Ahrefs",
        "Segment CDP",
        "Mixpanel",
        "Meta Ads API",
        "Next.js SSR",
        "PostHog",
      ],
    },
  ];

  const budgetOptions = [
    "< ₹2 Lakhs",
    "₹2 Lakhs - ₹5 Lakhs",
    "₹5 Lakhs - ₹15 Lakhs",
    "₹15 Lakhs - ₹50 Lakhs+",
  ];

  const timelineOptions = [
    "Urgent (< 1 Month)",
    "2 - 3 Months",
    "3 - 6 Months",
    "Dedicated Engineering Pod",
  ];

  const currentReq =
    requirements.find((r) => r.id === selectedReqId) || requirements[0];

  const handleSelectRequirement = (req: RequirementItem) => {
    setSelectedReqId(req.id);
    setSelectedScopes([req.defaultScopes[0], req.defaultScopes[1]]);
    setSelectedTechs([req.techStackOptions[0], req.techStackOptions[1], req.techStackOptions[2]]);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleScope = (scope: string) => {
    if (selectedScopes.includes(scope)) {
      if (selectedScopes.length > 1) {
        setSelectedScopes(selectedScopes.filter((s) => s !== scope));
      }
    } else {
      setSelectedScopes([...selectedScopes, scope]);
    }
  };

  const toggleTech = (tech: string) => {
    if (selectedTechs.includes(tech)) {
      if (selectedTechs.length > 1) {
        setSelectedTechs(selectedTechs.filter((t) => t !== tech));
      }
    } else {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#2D1E14] overflow-hidden">
      {/* ========================================================
          1. HERO HEADER WITH LUXURY SHIMMER
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
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#94613F] mb-4">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#94613F] to-[#7A4B29]" />
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="eyebrow-shimmer tracking-[0.22em] font-extrabold text-[#7A4B29]">
              CLIENT'S REQUIREMENTS &amp; DEDICATED QUOTE ENGINE
            </span>
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1E14] leading-[1.12] tracking-tight mb-5">
            <span>Client's </span>
            <span className="gold-text-shimmer">Requirements</span>
          </h1>

          <p className="text-base sm:text-lg text-[#65442F] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Select your architectural domain below to customize project scopes, select production tech stacks, and receive a dedicated milestone proposal within 24 hours.
          </p>

          <div className="inline-flex items-center gap-2.5 bg-white/85 backdrop-blur-md border border-[#E8DCD1] px-4 py-2 rounded-xl text-xs font-semibold text-[#7A4B29] shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span>7 Specialized Engineering Domains</span>
            <span className="text-[#C89A62] font-mono">•</span>
            <span className="text-[#8C5D38] font-mono">24-Hour Itemized Milestone Blueprint (INR ₹)</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. THE 7 CLIENT'S REQUIREMENTS CARDS
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E8DCD1]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#94613F] block mb-2">
            SELECT A DOMAIN TO CONFIGURE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1E14] mb-3">
            Choose Your Architecture Pillar
          </h2>
          <p className="text-sm sm:text-base text-[#65442F]">
            Every engagement begins with dedicated technical discovery, verified scope breakdown, and zero vendor lock-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {requirements.map((item, idx) => {
            const Icon = item.icon;
            const isCurrent = selectedReqId === item.id;
            const floatClass =
              idx % 2 === 0 ? "anim-card-float-1" : "anim-card-float-2";

            return (
              <div
                key={item.id}
                className={`${floatClass} group relative rounded-[30px] bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden p-7 ${
                  isCurrent
                    ? "border-[#7A4B29] ring-2 ring-[#7A4B29]/30 shadow-[0_20px_45px_rgba(122,75,41,0.15)]"
                    : "border-[#E8DCD1] shadow-[0_12px_32px_rgba(45,30,20,0.06)] hover:border-[#7A4B29]/70 hover:shadow-[0_20px_45px_rgba(45,30,20,0.12)]"
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Luminous Top Light Beam on Hover */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] rounded-t-[30px] overflow-hidden">
                  <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                </div>

                <div>
                  {/* Top Bar: Number + Eyebrow */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-black text-[#C89A62]">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5D38] bg-[#FAF6F1] px-2.5 py-0.5 rounded-full border border-[#E8DCD1]">
                      {item.eyebrow}
                    </span>
                  </div>

                  {/* Icon Box with Pulsing Animation */}
                  <div
                    className={`anim-icon-pulse w-12 h-12 rounded-2xl border flex items-center justify-center mb-4 transition-all ${
                      isCurrent
                        ? "bg-[#7A4B29] text-white border-[#7A4B29]"
                        : "bg-[#FAF1E8] border-[#E8DCD1] text-[#7A4B29] group-hover:bg-[#7A4B29] group-hover:text-white"
                    }`}
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.85} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Description as explicitly provided */}
                  <p className="text-xs sm:text-[13px] text-[#65442F] leading-relaxed mb-6 font-medium">
                    {item.description}
                  </p>

                  {/* Quick Feature Badges */}
                  <div className="space-y-1.5 pt-3 border-t border-[#F0E6DD] mb-6">
                    <div className="flex items-center gap-2 text-xs text-[#2D1E14]">
                      <Check className="h-3.5 w-3.5 text-[#16A34A] flex-shrink-0" />
                      <span className="truncate">{item.defaultScopes[0]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#2D1E14]">
                      <Check className="h-3.5 w-3.5 text-[#16A34A] flex-shrink-0" />
                      <span className="truncate">{item.defaultScopes[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Dedicated Quote Button */}
                <button
                  type="button"
                  onClick={() => handleSelectRequirement(item)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isCurrent
                      ? "bg-[#7A4B29] text-white shadow-sm"
                      : "bg-[#FAF6F1] hover:bg-[#7A4B29] text-[#7A4B29] hover:text-white border border-[#E8DCD1]"
                  }`}
                >
                  <span>{item.buttonText}</span>
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2.25] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          3. DEDICATED INQUIRY FORM (Interactive Scope & Tech Configurator)
         ======================================================== */}
      <section
        ref={formRef}
        id="dedicated-inquiry-form"
        className="w-full py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E8DCD1]"
      >
        <div className="bg-white rounded-[32px] border border-[#E8DCD1] p-6 sm:p-10 lg:p-12 shadow-[0_16px_45px_rgba(45,30,20,0.08)]">
          {submitted ? (
            <div className="py-16 flex flex-col items-center text-center">
              <div className="w-18 h-18 rounded-full bg-[#FAF1E8] text-[#7A4B29] flex items-center justify-center mb-6 shadow-sm">
                <CheckCircle2 className="h-10 w-10 text-[#16A34A]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#94613F] mb-2">
                INQUIRY REGISTERED
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1E14] mb-3">
                Dedicated Quote Request Received!
              </h3>
              <p className="text-sm sm:text-base text-[#65442F] max-w-lg leading-relaxed mb-8">
                Thank you. Our principal architects for{" "}
                <strong className="text-[#2D1E14]">{currentReq.title}</strong>{" "}
                are assembling your custom scope specification, verified tech
                stack, and milestone investment breakdown (INR ₹). We will email
                your proposal within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-8 py-3.5 rounded-full bg-[#7A4B29] text-white text-xs sm:text-sm font-bold hover:bg-[#5A3620] transition-colors cursor-pointer shadow-md"
              >
                Configure Another Requirement
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Header inside Form */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[#EEE5DC]">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#94613F] mb-1.5">
                    <span>Configuring:</span>
                    <span className="bg-[#FAF6F1] px-2.5 py-0.5 rounded-full border border-[#E8DCD1] text-[#7A4B29]">
                      {currentReq.eyebrow}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1E14]">
                    Dedicated Inquiry for {currentReq.title}
                  </h3>
                </div>

                {/* Domain Switcher Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {requirements.map((r) => (
                    <button
                      type="button"
                      key={r.id}
                      onClick={() => handleSelectRequirement(r)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedReqId === r.id
                          ? "bg-[#7A4B29] text-white shadow-xs"
                          : "bg-[#FAF7F2] text-[#65442F] hover:bg-[#E8DCD1]/60"
                      }`}
                    >
                      {r.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 1: Custom Scopes */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#94613F]">
                    Step 01 &bull; Custom Scopes
                  </span>
                  <span className="text-xs font-mono text-[#8C5D38]">
                    {selectedScopes.length} selected
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#2D1E14] mb-3">
                  Select Architectural Deliverables (Select all that apply)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentReq.defaultScopes.map((scope) => {
                    const isSelected = selectedScopes.includes(scope);
                    return (
                      <button
                        type="button"
                        key={scope}
                        onClick={() => toggleScope(scope)}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#FAF3EC] border-[#7A4B29] text-[#7A4B29] shadow-xs"
                            : "bg-white border-[#E8DCD1] text-[#2D1E14] hover:bg-[#FAF6F1]"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                            isSelected
                              ? "bg-[#7A4B29] border-[#7A4B29] text-white"
                              : "border-[#D4C3B4] bg-white"
                          }`}
                        >
                          {isSelected && <Check className="h-3.5 w-3.5" />}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold leading-snug">
                          {scope}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Preferred Tech Stack */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#94613F]">
                    Step 02 &bull; Preferred Tech Stack
                  </span>
                  <span className="text-xs font-mono text-[#8C5D38]">
                    {selectedTechs.length} selected
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#2D1E14] mb-3">
                  Frameworks &amp; Cloud Tools You Require
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentReq.techStackOptions.map((tech) => {
                    const isSelected = selectedTechs.includes(tech);
                    return (
                      <button
                        type="button"
                        key={tech}
                        onClick={() => toggleTech(tech)}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#7A4B29] text-white border-[#7A4B29] shadow-xs"
                            : "bg-white border-[#E8DCD1] text-[#2D1E14] hover:bg-[#FAF6F1]"
                        }`}
                      >
                        {tech}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Capital Allocation & Delivery Timeline */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 border-t border-[#EEE5DC]">
                {/* Budget */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#94613F] block mb-1">
                    Step 03 &bull; Target Budget
                  </span>
                  <h4 className="text-base font-bold text-[#2D1E14] mb-3">
                    Estimated Capital Allocation (INR ₹)
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setSelectedBudget(b)}
                        className={`p-2.5 xs:p-3 rounded-xl border text-center text-[11px] xs:text-xs font-bold transition-all cursor-pointer break-words ${
                          selectedBudget === b
                            ? "bg-[#7A4B29] text-white border-[#7A4B29] shadow-xs"
                            : "bg-white border-[#E8DCD1] text-[#2D1E14] hover:bg-[#FAF3EC]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#94613F] block mb-1">
                    Step 04 &bull; Delivery Window
                  </span>
                  <h4 className="text-base font-bold text-[#2D1E14] mb-3">
                    Expected Time to Launch
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {timelineOptions.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTimeline(t)}
                        className={`p-2.5 xs:p-3 rounded-xl border text-center text-[11px] xs:text-xs font-bold transition-all cursor-pointer break-words ${
                          selectedTimeline === t
                            ? "bg-[#7A4B29] text-white border-[#7A4B29] shadow-xs"
                            : "bg-white border-[#E8DCD1] text-[#2D1E14] hover:bg-[#FAF3EC]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Contact & Project Specifics */}
              <div className="pt-6 border-t border-[#EEE5DC]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#94613F] block mb-1">
                  Step 05 &bull; Contact Details
                </span>
                <h4 className="text-lg font-bold text-[#2D1E14] mb-4">
                  Where Should We Send Your Dedicated Milestone Quote?
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D1E14] mb-1.5">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 h-4 w-4 text-[#8C5D38]" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Sharma"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8DCD1] bg-[#FAF7F2] text-base sm:text-sm text-[#2D1E14] focus:outline-none focus:ring-2 focus:ring-[#7A4B29]/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2D1E14] mb-1.5">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 h-4 w-4 text-[#8C5D38]" />
                      <input
                        type="email"
                        required
                        placeholder="vikram@enterprise.in"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8DCD1] bg-[#FAF7F2] text-base sm:text-sm text-[#2D1E14] focus:outline-none focus:ring-2 focus:ring-[#7A4B29]/30"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D1E14] mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 h-4 w-4 text-[#8C5D38]" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 96628 73599"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8DCD1] bg-[#FAF7F2] text-base sm:text-sm text-[#2D1E14] focus:outline-none focus:ring-2 focus:ring-[#7A4B29]/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2D1E14] mb-1.5">
                      Company Name / URL
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-3 h-4 w-4 text-[#8C5D38]" />
                      <input
                        type="text"
                        placeholder="TechInnovations Pvt Ltd"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8DCD1] bg-[#FAF7F2] text-base sm:text-sm text-[#2D1E14] focus:outline-none focus:ring-2 focus:ring-[#7A4B29]/30"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D1E14] mb-1.5">
                    Custom Technical Specifications or Architecture Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention any compliance frameworks (SOC 2, GDPR), existing API meshes, migration deadlines, or specific feature targets..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8DCD1] bg-[#FAF7F2] text-base sm:text-sm text-[#2D1E14] focus:outline-none focus:ring-2 focus:ring-[#7A4B29]/30"
                  />
                </div>
              </div>

              {/* Summary Bar & Submit */}
              <div className="pt-6 border-t border-[#EEE5DC] flex flex-col md:flex-row items-center justify-between gap-5 bg-[#FAF7F2] p-5 rounded-2xl border border-[#E8DCD1]">
                <div className="space-y-1 text-center md:text-left">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2D1E14]">
                    <ShieldCheck className="h-4 w-4 text-[#16A34A]" />
                    <span>Non-Disclosure Agreement (NDA) Protected Inquiry</span>
                  </div>
                  <p className="text-[11px] text-[#785A44]">
                    Configured for:{" "}
                    <strong className="text-[#7A4B29]">{currentReq.title}</strong>{" "}
                    ({selectedScopes.length} scopes, {selectedTechs.length} tech
                    tools &bull; {selectedBudget})
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto anim-badge-pulse py-3.5 px-6 sm:px-8 rounded-full bg-[#7A4B29] hover:bg-[#5A3620] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 text-center"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Dedicated Quote Request</span>
                </button>
              </div>
            </form>
          )}
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
              <span>Need Architectural Consultation First?</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-snug">
              Talk to Our Technical Architects
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E7]/80 leading-relaxed font-normal">
              Not sure which tech stack or scoping fits your enterprise roadmap? Schedule an exploratory technical discovery session.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 flex-shrink-0">
            <a
              href="tel:+919662873599"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 text-sm font-semibold transition-all cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              <span>+91 9662873599</span>
            </a>
            <Link
              href="/contact"
              className="anim-badge-pulse inline-flex items-center gap-2 rounded-full bg-[#E5C18D] hover:bg-[#d8b075] text-[#2C1A0F] px-7 py-3.5 text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Contact Architecture Pod</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
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
