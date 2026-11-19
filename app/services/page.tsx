"use client";

import Link from "next/link";
import {
  Code2,
  Smartphone,
  BrainCircuit,
  Layers3,
  UsersRound,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Cpu,
  Lock,
  Cloud,
  Check,
  Send,
  Workflow,
  Terminal,
  Server,
  Database,
  BarChart3,
  RefreshCw,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

export default function ServicesPage() {
  const servicePillars = [
    {
      id: "web",
      num: "01",
      title: "Website & Web App Development",
      tagline: "High-concurrency, responsive platforms built for speed and conversion",
      icon: Code2,
      badge: "Web & Microfrontends",
      overview:
        "We build digital web applications and platforms using modern frameworks like Next.js, React, and TypeScript. From customer-facing portals to high-throughput SaaS engines, our architectures deliver sub-second loading times, impeccable Core Web Vitals, and responsive UI across all screen viewports.",
      features: [
        "Server-Driven UI & Edge Rendering with Next.js App Router",
        "Micro-Frontend Architecture for Modular Enterprise Teams",
        "Headless CMS, E-Commerce & GraphQL API Gateway Integrations",
        "Automated Accessibility (WCAG 2.1 AA) & SEO Schema Auditing",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "PostgreSQL", "Docker"],
      metric: {
        value: "<100ms",
        label: "Edge TTFB Latency",
      },
      href: "/services/web-development",
    },
    {
      id: "mobile",
      num: "02",
      title: "Mobile Application Development",
      tagline: "Native and cross-platform mobile apps for iOS and Android",
      icon: Smartphone,
      badge: "iOS & Android",
      overview:
        "Deliver seamless mobile experiences to millions of users. We develop native iOS (Swift) and Android (Kotlin) apps as well as high-performance cross-platform apps with Flutter and React Native. Every build features offline-first local data syncing, biometric security, and fluid 120Hz gesture animations.",
      features: [
        "Cross-Platform Flutter & React Native Codebase Efficiency",
        "Offline-First SQLite / WatermelonDB Local Synchronization",
        "Native Device Hardware Integration (Camera, GPS, BLE, NFC)",
        "App Store & Google Play CI/CD Pipeline Automation",
      ],
      techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "WebSockets", "SQLite", "Fastlane"],
      metric: {
        value: "99.98%",
        label: "Crash-Free Sessions",
      },
      href: "/services/mobile-apps",
    },
    {
      id: "ai",
      num: "03",
      title: "AI Automation & Machine Learning",
      tagline: "Autonomous workflows, custom LLM agents, and predictive data pipelines",
      icon: BrainCircuit,
      badge: "AI & Intelligence",
      overview:
        "Transform routine business operations with custom generative AI and machine learning models. We engineer multi-agent systems, retrieval-augmented generation (RAG) pipelines over proprietary enterprise knowledge bases, computer vision classifiers, and automated intelligent document triage.",
      features: [
        "Autonomous Agentic AI Workflows & Custom LLM Fine-Tuning",
        "RAG Architecture with Vector DBs (Pinecone, Weaviate, pgvector)",
        "Intelligent Document Processing (OCR, Data Extraction, Invoicing)",
        "Predictive Analytics & Real-Time Anomaly Detection Engines",
      ],
      techStack: ["Python", "PyTorch", "LangChain", "OpenAI APIs", "Pinecone", "pgvector", "HuggingFace", "FastAPI"],
      metric: {
        value: "80%",
        label: "Process Automation ROI",
      },
      href: "/services/ai-automation",
    },
    {
      id: "erp",
      num: "04",
      title: "Custom ERP Systems",
      tagline: "Tailored enterprise resource planning connecting all business facets",
      icon: Layers3,
      badge: "Enterprise Operations",
      overview:
        "Replace fragmented off-the-shelf software with a unified, custom ERP platform architected around your exact supply chain, accounting, HR, and inventory workflows. Built with multi-tenant data isolation, role-based access control, and real-time operational dashboards.",
      features: [
        "End-to-End Inventory, Warehouse & Supply Chain Telemetry",
        "Automated Financial Reconciliation & Multi-Currency Ledger",
        "Granular Role-Based Access Control (RBAC) & Audit Trails",
        "Real-Time Executive Dashboards & Operational KPI Reports",
      ],
      techStack: ["Go", "Node.js", "PostgreSQL", "Kafka", "Redis", "Kubernetes", "Next.js", "Apache Airflow"],
      metric: {
        value: "10x",
        label: "Data Throughput Scaling",
      },
      href: "/services/erp-solutions",
    },
    {
      id: "crm",
      num: "05",
      title: "CRM Solutions & Customer Engines",
      tagline: "Customer relationship pipelines designed for lead retention and growth",
      icon: UsersRound,
      badge: "Sales & Retention",
      overview:
        "Empower your sales, marketing, and customer support organizations with a 360-degree customer intelligence system. We build custom CRM platforms that unify omnichannel conversations, automate lead scoring, track revenue lifecycles, and integrate with your existing communication stacks.",
      features: [
        "360° Unified Customer Data Platform (CDP) & Activity Feeds",
        "Automated Multi-Stage Sales Pipelines & Smart Lead Scoring",
        "Omnichannel Messaging (WhatsApp, Email, SMS, VoIP) Integration",
        "Churn Risk Prediction & Customer Lifetime Value Analytics",
      ],
      techStack: ["TypeScript", "React", "PostgreSQL", "Elasticsearch", "Twilio API", "SendGrid", "Redis", "Next.js"],
      metric: {
        value: "45%",
        label: "Faster Deal Velocity",
      },
      href: "/services/crm-solutions",
    },
    {
      id: "cybersecurity",
      num: "06",
      title: "Cyber Security & Cloud Compliance",
      tagline: "Zero-Trust defenses, proactive audits, and regulatory hardening",
      icon: ShieldCheck,
      badge: "Zero-Trust & Audit",
      overview:
        "Protect your enterprise digital assets against zero-day threats, data breaches, and insider vulnerabilities. We implement Zero-Trust cloud network perimeters, perform deep penetration tests, conduct source code security audits, and harden systems for SOC2, HIPAA, and GDPR compliance.",
      features: [
        "Zero-Trust Network Access (ZTNA) & Identity Governance",
        "Automated Vulnerability Scanning & Static Code Analysis (SAST)",
        "End-to-End Data Encryption at Rest (AES-256) & Transit (TLS 1.3)",
        "SOC2 Type II, HIPAA, and GDPR Readiness Compliance Roadmaps",
      ],
      techStack: ["Vault", "WireGuard", "AWS KMS", "Cloudflare", "OpenVAS", "OWASP ZAP", "Terraform", "Docker"],
      metric: {
        value: "Zero",
        label: "Breach Tolerance",
      },
      href: "/services/cyber-security",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategic Discovery & Architecture Blueprint",
      description:
        "We analyze your business objectives, data flows, and concurrency demands to design a comprehensive technical blueprint and technology stack matrix.",
      icon: Workflow,
    },
    {
      number: "02",
      title: "Iterative Prototyping & Agile Sprints",
      description:
        "Our engineering pods develop working functional increments every two weeks, providing continuous staging preview URLs and stakeholder demos.",
      icon: GitBranch,
    },
    {
      number: "03",
      title: "Rigorous QA, Security & Stress Testing",
      description:
        "Every line of code undergoes automated unit tests, integration suites, static security analysis, and simulated load testing up to 100k concurrent users.",
      icon: Terminal,
    },
    {
      number: "04",
      title: "Zero-Downtime Deployment & 24/7 SLA",
      description:
        "We execute blue-green or canary releases onto high-availability cloud infrastructure with real-time telemetry, automated backups, and 24/7 uptime monitoring.",
      icon: Server,
    },
  ];

  return (
    <main className="w-full bg-[#FAF6F1] text-[#2D1E14] overflow-hidden">
      {/* ========================================================
          1. SERVICES HERO SECTION WITH CONTINUOUS AMBIENCE
         ======================================================== */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#E8DCD1] bg-gradient-to-b from-[#FAF6F1] via-[#FAF7F2] to-[#FAF8F5] overflow-hidden">
        {/* Ambient Drifting Orbs */}
        <div
          className="anim-orb-1 pointer-events-none absolute -top-36 -left-20 w-[620px] h-[520px] rounded-full bg-gradient-to-br from-[#F5E6D8]/80 via-[#EEDFD0]/40 to-transparent blur-3xl -z-0"
          aria-hidden="true"
        />
        <div
          className="anim-orb-2 pointer-events-none absolute top-1/2 -right-24 w-[560px] h-[560px] rounded-full bg-gradient-to-tl from-[#F5EAE0]/70 via-[#EBD9CA]/30 to-transparent blur-3xl -z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#94613F] mb-4">
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#94613F] to-[#7A4B29]" />
              <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
              <span className="eyebrow-shimmer tracking-[0.22em] font-extrabold text-[#7A4B29]">
                ENTERPRISE SOFTWARE &amp; DIGITAL CAPABILITIES
              </span>
              <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
              <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2D1E14] leading-[1.12] mb-5">
              <span>Engineering Digital Excellence for </span>
              <span className="gold-text-shimmer">Modern Scale</span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg text-[#65442F] leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
              From resilient cloud microservices and native mobile experiences to
              autonomous AI pipelines and mission-critical ERP systems, we turn complex
              technical challenges into durable competitive advantages.
            </p>

            {/* Quick Service Anchor Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {servicePillars.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#E8DCD1] text-[#2D1E14] hover:border-[#7A4B29] hover:text-[#7A4B29] hover:bg-[#FAF3EC] hover:scale-105 transition-all shadow-2xs"
                >
                  {service.title.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-[#E8DCD1] shadow-[0_12px_32px_rgba(45,30,20,0.06)]">
            <div className="text-center p-3">
              <span className="block text-2xl sm:text-3xl font-serif font-black text-[#7A4B29]">99.98%</span>
              <span className="text-xs font-medium text-[#785A44] mt-1 block">Uptime SLA Guaranteed</span>
            </div>
            <div className="text-center p-3 border-l border-[#E8DCD1]/80">
              <span className="block text-2xl sm:text-3xl font-serif font-black text-[#7A4B29]">250+</span>
              <span className="text-xs font-medium text-[#785A44] mt-1 block">Enterprise Deployments</span>
            </div>
            <div className="text-center p-3 border-l border-[#E8DCD1]/80">
              <span className="block text-2xl sm:text-3xl font-serif font-black text-[#7A4B29]">100%</span>
              <span className="text-xs font-medium text-[#785A44] mt-1 block">Zero-Trust Security</span>
            </div>
            <div className="text-center p-3 border-l border-[#E8DCD1]/80">
              <span className="block text-2xl sm:text-3xl font-serif font-black text-[#7A4B29]">50+</span>
              <span className="text-xs font-medium text-[#785A44] mt-1 block">Senior Architects &amp; Engineers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. DETAILED 6 SERVICE PILLARS (Animated Floating Cards)
         ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">
          {servicePillars.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 1;
            const floatClass = index % 2 === 0 ? "anim-card-float-1" : "anim-card-float-2";

            return (
              <div
                key={service.id}
                id={service.id}
                className={`${floatClass} group relative scroll-mt-28 rounded-[36px] bg-white border border-[#E8DCD1] p-7 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(45,30,20,0.07)] hover:border-[#7A4B29]/70 hover:shadow-[0_28px_60px_rgba(45,30,20,0.14)] transition-all duration-300 overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Luminous Top Light Beam on Hover */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] rounded-t-[36px] overflow-hidden">
                  <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Left / Primary Content Column */}
                  <div className={`lg:col-span-7 flex flex-col items-start ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    {/* Badge + Number */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-serif font-black text-[#C89A62]">
                        {service.num}
                      </span>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF3EC] px-3.5 py-1 text-xs font-bold text-[#7A4B29] border border-[#E8DCD1]">
                        <IconComponent className="h-3.5 w-3.5 text-[#94613F]" />
                        <span>{service.badge}</span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D1E14] tracking-tight leading-tight group-hover:text-[#7A4B29] transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#94613F]">
                      {service.tagline}
                    </p>

                    {/* Paragraph */}
                    <p className="mt-4 text-xs sm:text-sm text-[#65442F] leading-relaxed font-normal">
                      {service.overview}
                    </p>

                    {/* Feature Bullets */}
                    <div className="mt-6 space-y-3 w-full">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#FAF3EC] border border-[#E8DCD1] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#7A4B29]">
                            <Check className="h-3 w-3 stroke-[2.5]" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-[#2D1E14] leading-snug">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="mt-6 pt-6 border-t border-[#E8DCD1] w-full">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#785A44] block mb-2.5">
                        Core Toolchain &amp; Technologies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#FAF6F1] border border-[#E8DCD1] text-[#2D1E14] hover:border-[#7A4B29]/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 rounded-full bg-[#7A4B29] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-[#5A3620] hover:shadow-md transition-all cursor-pointer"
                      >
                        <span>Explore Subpage Blueprint</span>
                        <ArrowRight className="anim-arrow-bounce h-4 w-4 stroke-[2.25]" />
                      </Link>
                      <Link
                        href={`/get-a-quote?service=${service.id}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#7A4B29] hover:text-[#5A3620] transition-colors"
                      >
                        <span>Request Dedicated Quote</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Architectural Highlight Card */}
                  <div className={`lg:col-span-5 w-full ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative rounded-3xl bg-gradient-to-br from-[#FAF3EC] via-[#FAF6F1] to-white p-6 sm:p-8 border border-[#E8DCD1] shadow-sm group-hover:border-[#7A4B29]/40 transition-colors">
                      {/* Top Metric Callout */}
                      <div className="p-5 rounded-2xl bg-white border border-[#E8DCD1] shadow-2xs mb-6 text-center">
                        <span className="text-3xl sm:text-4xl font-serif font-black text-[#7A4B29] block tracking-tight">
                          {service.metric.value}
                        </span>
                        <span className="text-xs font-bold text-[#785A44] uppercase tracking-wider mt-1 block">
                          {service.metric.label}
                        </span>
                      </div>

                      {/* Service Highlights Matrix */}
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8DCD1]/80 text-xs">
                          <span className="text-[#785A44] font-medium">Architecture Model</span>
                          <span className="font-bold text-[#2D1E14]">Cloud-Native Microservices</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8DCD1]/80 text-xs">
                          <span className="text-[#785A44] font-medium">Delivery Model</span>
                          <span className="font-bold text-[#2D1E14]">Dedicated Engineering Pods</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8DCD1]/80 text-xs">
                          <span className="text-[#785A44] font-medium">Code Ownership</span>
                          <span className="font-bold text-[#2D1E14]">100% Client Intellectual Property</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8DCD1]/80 text-xs">
                          <span className="text-[#785A44] font-medium">SLA Support</span>
                          <span className="font-bold text-[#2D1E14]">24/7 Monitoring &amp; Hotfixes</span>
                        </div>
                      </div>

                      {/* Bottom Security Note */}
                      <div className="mt-6 flex items-center gap-2.5 text-xs text-[#785A44] font-medium">
                        <ShieldCheck className="h-4 w-4 text-[#7A4B29] flex-shrink-0" />
                        <span>Hardened with Zero-Trust compliance standards</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          3. OUR ENGINEERING PROCESS (4 STEPS)
         ======================================================== */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E8DCD1]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#94613F] block mb-2">
              Delivery Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1E14] tracking-tight">
              From Blueprint to Production
            </h2>
            <p className="text-sm sm:text-base text-[#65442F] mt-3">
              Our proven engineering lifecycle guarantees predictable velocity, clear milestone visibility, and zero-defect deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-3xl p-6 sm:p-7 bg-[#FAF6F1] border border-[#E8DCD1] hover:border-[#7A4B29]/60 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl sm:text-3xl font-serif font-black text-[#C89A62]">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DCD1] text-[#7A4B29] group-hover:bg-[#7A4B29] group-hover:text-white flex items-center justify-center shadow-2xs transition-colors">
                        <StepIcon className="h-5 w-5" strokeWidth={1.85} />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#2D1E14] leading-snug group-hover:text-[#7A4B29] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#65442F] mt-2.5 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. STRATEGIC CTA SECTION
         ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-r from-[#24160D] via-[#3A2214] to-[#4A2D1B] p-8 sm:p-12 lg:p-16 text-center text-white shadow-[0_24px_60px_rgba(36,22,13,0.24)] border border-[#C89A62]/30">
            {/* Ambient Background Glow */}
            <div
              className="anim-orb-1 pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#C89A62]/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="anim-orb-2 pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#E5C18D]/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold tracking-wider text-[#E5C18D] uppercase border border-white/15 mb-4">
                Enterprise Advisory &amp; Architecture
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Ready to Build Your Next High-Performance Platform?
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-[#FAF0E6]/90 leading-relaxed font-normal">
                Let&apos;s schedule a technical discovery session with our principal engineers to map out your architecture, timelines, and cost models.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/get-a-quote"
                  className="anim-badge-pulse inline-flex items-center gap-2 rounded-full bg-[#E5C18D] px-7 py-3.5 text-sm font-bold text-[#170E08] shadow-md hover:bg-[#d8b075] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Get Free Architecture Quote</span>
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-all cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Contact Our Architects</span>
                </Link>
              </div>
            </div>
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
    </main>
  );
}
