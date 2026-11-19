"use client";

import Link from "next/link";
import {
  Target,
  Compass,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Lock,
  Cpu,
  Workflow,
  Eye,
  HeartHandshake,
  Lightbulb,
  Globe2,
  Layers,
  Flame,
} from "lucide-react";

export default function MissionPage() {
  const missionCommitments = [
    {
      title: "Zero Technical Debt",
      desc: "We write clean, strictly typed, test-covered code that scales gracefully without costly refactors.",
    },
    {
      title: "Measurable Business ROI",
      desc: "Every architectural decision is evaluated against your operational efficiency and bottom-line revenue.",
    },
    {
      title: "Autonomous Intelligence",
      desc: "Embedding self-learning AI agent workflows that automate manual workloads and eliminate bottlenecks.",
    },
    {
      title: "Radical Transparency",
      desc: "Direct daily access to repositories, sprint burndowns, staging environments, and senior engineers.",
    },
  ];

  const visionMilestones = [
    {
      title: "Autonomous Enterprise Software",
      desc: "Pioneering self-healing microservices and predictive data pipelines that optimize without human intervention.",
    },
    {
      title: "Global Impact & Scale",
      desc: "Empowering 500+ enterprises across North America, Europe, and Asia with mission-critical digital platforms.",
    },
    {
      title: "Ethical AI Governance",
      desc: "Establishing strict guardrails, zero-hallucination LLM validation, and complete enterprise data privacy.",
    },
    {
      title: "100% Client Ownership",
      desc: "Championing open architectures with zero vendor lock-in, ensuring you always own your intellectual property.",
    },
  ];

  const architecturalPrinciples = [
    {
      num: "01",
      title: "Security by Design (Zero-Trust)",
      desc: "We never take security as an afterthought. Every transaction, API route, and database query is authenticated, encrypted in transit and at rest, and auditable for SOC 2, HIPAA, and PCI-DSS compliance.",
      icon: Lock,
      highlight: "Bank-Grade Encryption",
    },
    {
      num: "02",
      title: "Resilient & Scalable by Default",
      desc: "Engineered from day one with containerized microservices, horizontal auto-scaling, and event-driven message brokers (Kafka/RabbitMQ) built to handle millions of concurrent transactions with 99.99% uptime.",
      icon: Cpu,
      highlight: "High-Concurrency Scale",
    },
    {
      num: "03",
      title: "Sub-100ms Edge Performance",
      desc: "Speed is a core feature. We optimize Core Web Vitals, implement intelligent edge-caching with Next.js App Router, and fine-tune database indexes to guarantee instant page loads and real-time responsiveness.",
      icon: Zap,
      highlight: "Blazing Edge Latency",
    },
    {
      num: "04",
      title: "AI-First Autonomous Workflows",
      desc: "We build beyond static software. Our architectures natively integrate custom LLM agents, vector embeddings, and real-time anomaly detection that transform static data into proactive business action.",
      icon: Workflow,
      highlight: "Next-Gen AI Agents",
    },
    {
      num: "05",
      title: "Radical Visibility & IP Ownership",
      desc: "You retain 100% intellectual property, commercial copyright, source code, and deployment credentials. Through open git repos, automated CI/CD logs, and daily updates, you have zero blind spots.",
      icon: Eye,
      highlight: "100% Source Ownership",
    },
    {
      num: "06",
      title: "True Long-Term Partnership",
      desc: "We succeed only when your business scales. We partner for the long haul with continuous performance audits, feature sprints, and dedicated SLA pods committed to compounding your market lead.",
      icon: HeartHandshake,
      highlight: "Long-Term Growth Ally",
    },
  ];

  const executionSteps = [
    {
      step: "01",
      title: "Architectural Blueprint",
      desc: "Deep-dive technical discovery, requirements isolation, security threat modeling, and milestone scoping.",
    },
    {
      step: "02",
      title: "Rapid Agile Sprints",
      desc: "Weekly sprint cycles, daily asynchronous updates, and continuous staging previews for instant feedback.",
    },
    {
      step: "03",
      title: "Rigorous QA & Audit",
      desc: "Automated unit/integration testing, penetration testing, load testing, and accessibility WCAG compliance.",
    },
    {
      step: "04",
      title: "Zero-Downtime Launch & SLA",
      desc: "Seamless cutover, blue-green deployment, 24/7 telemetry monitoring, and proactive post-launch maintenance.",
    },
  ];

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#2D1E14] overflow-hidden">
      {/* ========================================================
          1. HERO SECTION WITH AMBIENT GLOW & METALLIC SHIMMER
         ======================================================== */}
      <section className="relative w-full pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-[#E8DCD1] bg-gradient-to-b from-[#FAF6F1] via-[#FAF7F2] to-[#FAF8F5] overflow-hidden">
        {/* Background Ambient Orbs */}
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
            <span className="eyebrow-shimmer tracking-[0.22em] font-extrabold text-[#7A4B29]">
              OUR PURPOSE &amp; CREED
            </span>
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1E14] leading-[1.14] tracking-tight mb-5">
            <span>Engineering Architecture That </span>
            <span className="gold-text-shimmer">Augments Potential</span>
          </h1>

          <p className="text-base sm:text-lg text-[#65442F] max-w-3xl mx-auto leading-relaxed font-normal mb-8">
            We exist to eliminate the friction between bold business ambitions and complex digital execution. Through test-driven software engineering, autonomous AI workflows, and radical transparency, we build the technological foundation for tomorrow&apos;s market leaders.
          </p>

          {/* Quick Metrics Strip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-2 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E8DCD1] shadow-[0_4px_16px_rgba(45,30,20,0.05)]">
            <div className="flex items-center gap-2 px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs font-bold text-[#2D1E14]">100% In-House Code</span>
            </div>
            <span className="text-xs text-[#E8DCD1]">|</span>
            <div className="flex items-center gap-2 px-3 py-1">
              <ShieldCheck className="h-4 w-4 text-[#7A4B29]" />
              <span className="text-xs font-bold text-[#2D1E14]">Zero-Trust Security</span>
            </div>
            <span className="text-xs text-[#E8DCD1]">|</span>
            <div className="flex items-center gap-2 px-3 py-1">
              <Zap className="h-4 w-4 text-[#C89A62]" />
              <span className="text-xs font-bold text-[#2D1E14]">Sub-100ms Edge Speed</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. THE DUAL PILLARS: MISSION & VISION
         ======================================================== */}
      <section className="w-full py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E8DCD1]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="anim-card-float-1 group relative rounded-[32px] bg-white border border-[#E8DCD1] p-8 sm:p-11 shadow-[0_16px_40px_rgba(45,30,20,0.06)] hover:border-[#7A4B29]/70 hover:shadow-[0_24px_50px_rgba(45,30,20,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top Light Beam */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] rounded-t-[32px] overflow-hidden">
              <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="anim-icon-pulse w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FAF1E8] to-[#F5E6D8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center shadow-xs group-hover:bg-[#7A4B29] group-hover:text-white transition-all">
                  <Target className="h-7 w-7" strokeWidth={1.85} />
                </div>
                <span className="text-xs font-mono font-bold text-[#7A4B29] bg-[#FAF1E8] border border-[#E8DCD1] px-3 py-1 rounded-full">
                  PILLAR 01
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#94613F] block mb-2">
                What We Do Every Day
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors mb-4">
                Our Mission
              </h2>

              <p className="text-base sm:text-lg text-[#65442F] leading-relaxed mb-8 font-normal">
                To empower businesses through innovative, scalable, and intelligent digital solutions. We strive to simplify complex technology, delivering products that enhance operational efficiency and create extraordinary user experiences.
              </p>

              {/* 4 Core Commitments */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D1E14] block">
                  Core Execution Commitments:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {missionCommitments.map((item) => (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DCD1] flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <CheckCircle2 className="h-4 w-4 text-[#7A4B29] flex-shrink-0" />
                        <span className="text-xs font-bold text-[#2D1E14]">{item.title}</span>
                      </div>
                      <p className="text-[11px] text-[#785A44] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0E6DD] flex items-center justify-between text-xs text-[#785A44]">
              <span className="font-bold text-[#7A4B29] flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#C89A62]" />
                <span>Simplicity. Scalability. Impact.</span>
              </span>
              <span className="font-mono text-[11px] text-[#8C5D38]">0 Technical Debt</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="anim-card-float-2 group relative rounded-[32px] bg-white border border-[#E8DCD1] p-8 sm:p-11 shadow-[0_16px_40px_rgba(45,30,20,0.06)] hover:border-[#7A4B29]/70 hover:shadow-[0_24px_50px_rgba(45,30,20,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top Light Beam */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] rounded-t-[32px] overflow-hidden">
              <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" style={{ animationDelay: "1.5s" }} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="anim-icon-pulse w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FAF1E8] to-[#F5E6D8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center shadow-xs group-hover:bg-[#7A4B29] group-hover:text-white transition-all" style={{ animationDelay: "1s" }}>
                  <Compass className="h-7 w-7" strokeWidth={1.85} />
                </div>
                <span className="text-xs font-mono font-bold text-[#7A4B29] bg-[#FAF1E8] border border-[#E8DCD1] px-3 py-1 rounded-full">
                  PILLAR 02
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#94613F] block mb-2">
                Where We Are Heading
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors mb-4">
                Our Vision
              </h2>

              <p className="text-base sm:text-lg text-[#65442F] leading-relaxed mb-8 font-normal">
                To be the global benchmark in digital transformation and AI integration. We envision a future where technology seamlessly augments human potential, fostering a smarter, more connected, and highly efficient business ecosystem.
              </p>

              {/* 4 Vision Milestones */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D1E14] block">
                  Strategic Horizon Targets:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {visionMilestones.map((item) => (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DCD1] flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Sparkles className="h-4 w-4 text-[#C89A62] flex-shrink-0" />
                        <span className="text-xs font-bold text-[#2D1E14]">{item.title}</span>
                      </div>
                      <p className="text-[11px] text-[#785A44] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0E6DD] flex items-center justify-between text-xs text-[#785A44]">
              <span className="font-bold text-[#7A4B29] flex items-center gap-1.5">
                <Globe2 className="h-3.5 w-3.5 text-[#C89A62]" />
                <span>Augmenting Human &amp; Enterprise Potential</span>
              </span>
              <span className="font-mono text-[11px] text-[#8C5D38]">Global Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ARCHITECTURAL PRINCIPLES (The Engineering Creed)
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-b border-[#E8DCD1]">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#94613F] mb-3">
            <span className="w-5 h-[1px] bg-[#94613F]/50" />
            <span className="anim-badge-pulse text-[9px] text-[#C89A62]">◆</span>
            <span className="tracking-[0.2em]">ENGINEERING STANDARDS</span>
            <span className="anim-badge-pulse text-[9px] text-[#C89A62]">◆</span>
            <span className="w-5 h-[1px] bg-[#94613F]/50" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1E14] tracking-tight mb-4">
            <span>Our 6 Core </span>
            <span className="gold-text-shimmer">Architectural Principles</span>
          </h2>

          <p className="text-sm sm:text-base text-[#785A44] leading-relaxed">
            The non-negotiable engineering standards that govern every repository, database index, microservice, and deployment we build.
          </p>
        </div>

        {/* 6 Architectural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {architecturalPrinciples.map((principle, idx) => {
            const Icon = principle.icon;
            const floatAnimation =
              idx % 3 === 0
                ? "anim-card-float-1"
                : idx % 3 === 1
                ? "anim-card-float-2"
                : "anim-card-float-3";

            return (
              <div
                key={principle.title}
                className={`${floatAnimation} group relative rounded-[28px] bg-white border border-[#E8DCD1] p-7 sm:p-8 shadow-[0_16px_36px_rgba(45,30,20,0.06)] hover:border-[#7A4B29]/70 hover:shadow-[0_24px_50px_rgba(45,30,20,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Top Border Light Beam on Hover */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="anim-icon-pulse w-12 h-12 rounded-xl bg-[#FAF1E8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center group-hover:bg-[#7A4B29] group-hover:text-white transition-all shadow-2xs" style={{ animationDelay: `${idx * 0.25}s` }}>
                      <Icon className="h-6 w-6" strokeWidth={1.85} />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#8C5D38] bg-[#FAF6F1] px-2.5 py-0.5 rounded-md border border-[#E8DCD1]">
                      {principle.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors mb-2.5 leading-snug">
                    {principle.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-[#65442F] leading-relaxed font-normal">
                    {principle.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#F0E6DD] flex items-center justify-between text-[11px] font-semibold text-[#8C5D38]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                    <span>{principle.highlight}</span>
                  </div>
                  <span className="text-[10px] text-[#C89A62]">♦</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          4. HOW WE DELIVER (4-Step Execution Lifecycle)
         ======================================================== */}
      <section className="w-full py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E8DCD1]">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#94613F] mb-3">
            <span className="w-5 h-[1px] bg-[#94613F]/50" />
            <span className="anim-badge-pulse text-[9px] text-[#C89A62]">◆</span>
            <span className="tracking-[0.2em]">MISSION IN ACTION</span>
            <span className="anim-badge-pulse text-[9px] text-[#C89A62]">◆</span>
            <span className="w-5 h-[1px] bg-[#94613F]/50" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1E14]">
            How We Translate Vision Into Reality
          </h2>
          <p className="text-sm text-[#785A44] mt-2">
            A battle-tested 4-stage engineering lifecycle designed for speed, precision, and zero downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executionSteps.map((step, i) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white border border-[#E8DCD1] shadow-2xs hover:border-[#7A4B29]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-serif font-black text-[#C89A62] block mb-2">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-[#2D1E14] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-[13px] text-[#65442F] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F0E6DD] text-[11px] font-bold text-[#7A4B29] flex items-center justify-between">
                <span>Phase {i + 1}</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. BOTTOM CONSULTATION BANNER
         ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-r from-[#2C1A0F] via-[#432717] to-[#5A3620] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C18D] mb-2">
              <Sparkles className="h-3.5 w-3.5 text-[#E5C18D]" />
              <span>Ready to Scale Your Digital Architecture?</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-snug">
              Partner With TechSphere Today
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E7]/80 leading-relaxed font-normal">
              Schedule a confidential discovery session with our principal solutions architects. We deliver your custom roadmap in 48 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 flex-shrink-0">
            <Link
              href="/get-a-quote"
              className="anim-badge-pulse inline-flex items-center gap-2 rounded-full bg-[#E5C18D] hover:bg-[#d8b075] text-[#2C1A0F] px-7 py-3.5 text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Get Free Architecture Quote</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 text-sm font-semibold transition-all cursor-pointer"
            >
              <span>Contact Us</span>
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
