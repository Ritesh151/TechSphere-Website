"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  FileCheck2,
  Eye,
  CheckCircle2,
  Server,
  KeyRound,
  FileText,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Download,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string>("scope");

  const complianceBadges = [
    { title: "SOC 2 Type II", desc: "Audit-ready controls & process governance", icon: FileCheck2 },
    { title: "ISO/IEC 27001", desc: "Information security management systems", icon: ShieldCheck },
    { title: "GDPR & DPDP 2023", desc: "Global & Indian data protection compliance", icon: Lock },
    { title: "AES-256 & TLS 1.3", desc: "Bank-grade data encryption in transit & at rest", icon: KeyRound },
  ];

  const sections = [
    { id: "scope", title: "1. Scope & Core Commitments" },
    { id: "collection", title: "2. Data We Collect & Process" },
    { id: "zerotrust", title: "3. Zero-Trust Security Architecture" },
    { id: "nda", title: "4. Confidentiality & Strict NDA" },
    { id: "ownership", title: "5. Source Code & IP Ownership" },
    { id: "retention", title: "6. Data Retention & Erasure" },
    { id: "contact", title: "7. Data Protection Officer (DPO)" },
  ];

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#2D1E14] overflow-hidden">
      {/* ========================================================
          HERO HEADER WITH CONTINUOUS LUXURY AMBIENCE
         ======================================================== */}
      <section className="relative w-full pt-10 pb-14 sm:pt-14 sm:pb-18 border-b border-[#E8DCD1] bg-gradient-to-b from-[#FAF6F1] via-[#FAF7F2] to-[#FAF8F5] overflow-hidden">
        {/* Ambient Glow */}
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
              ENTERPRISE DATA GOVERNANCE
            </span>
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1E14] leading-[1.14] tracking-tight mb-4">
            <span>Privacy &amp; Data </span>
            <span className="gold-text-shimmer">Protection Policy</span>
          </h1>

          <p className="text-base sm:text-lg text-[#65442F] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            How TechSphere IT Solutions safeguards confidential enterprise intellectual property, manages telemetry, and enforces zero-trust protocols across all engineering pods.
          </p>

          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-[#E8DCD1] px-4 py-2 rounded-xl text-xs font-semibold text-[#7A4B29] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Effective 2026 Edition &bull; TechSphere IT Solutions Compliance V2.4</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          COMPLIANCE STRIP (4 Floating Badges)
         ======================================================== */}
      <section className="w-full py-8 border-b border-[#E8DCD1] bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {complianceBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.title}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DCD1] shadow-2xs hover:border-[#7A4B29]/60 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Icon className="h-5 w-5" strokeWidth={1.85} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2D1E14]">{badge.title}</h4>
                    <p className="text-[11px] text-[#785A44] leading-tight mt-0.5">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          MAIN CONTENT & QUICK NAVIGATION
         ======================================================== */}
      <section className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Quick Index Sidebar (Sticky Desktop) */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="rounded-[28px] bg-white border border-[#E8DCD1] p-6 shadow-[0_12px_32px_rgba(45,30,20,0.06)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94613F] block mb-3">
                Table of Contents
              </span>
              <nav className="space-y-1.5" aria-label="Privacy sections">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={() => setActiveSection(sec.id)}
                    className={`block px-3 py-2 text-xs sm:text-[13px] font-semibold rounded-xl transition-all ${
                      activeSection === sec.id
                        ? "bg-[#FAF1E8] text-[#7A4B29] border border-[#E8DCD1]"
                        : "text-[#65442F] hover:text-[#2D1E14] hover:bg-[#FAF8F5]"
                    }`}
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-5 mt-5 border-t border-[#F0E6DD]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#7A4B29]">
                  <ShieldCheck className="h-4 w-4 text-[#16A34A]" />
                  <span>Enforced Across All Engineering Pods</span>
                </div>
              </div>
            </div>

            {/* NDA Guarantee Callout Box */}
            <div className="anim-card-float-1 rounded-[28px] bg-gradient-to-br from-[#FAF1E8] to-[#F5E6D8] border border-[#E8DCD1] p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center mb-3.5 shadow-2xs">
                <FileText className="h-5 w-5" strokeWidth={1.85} />
              </div>
              <h4 className="text-base font-bold text-[#2D1E14] mb-1.5">
                Need a Custom Enterprise NDA?
              </h4>
              <p className="text-xs text-[#65442F] leading-relaxed mb-4">
                We sign bilateral non-disclosure agreements before reviewing proprietary code, architectures, or datasets.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A4B29] hover:text-[#5A3620] hover:underline"
              >
                <span>Request Signed NDA</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Detailed Policy Sections */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Scope & Commitments */}
            <div
              id="scope"
              className="scroll-mt-24 rounded-[30px] bg-white border border-[#E8DCD1] p-7 sm:p-9 shadow-sm"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#7A4B29]" />
                <h2 className="font-serif text-2xl font-bold text-[#2D1E14]">
                  1. Scope &amp; Core Commitments
                </h2>
              </div>
              <p className="text-sm text-[#65442F] leading-relaxed mb-4">
                TechSphere IT Solutions (&ldquo;TechSphere&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides high-performance custom web development, native mobile applications, enterprise ERP/CRM architectures, and AI automation systems.
              </p>
              <p className="text-sm text-[#65442F] leading-relaxed mb-4">
                This Privacy &amp; Data Governance Policy applies to all interactions with our engineering team, client portals, staging infrastructure, code repositories, and consulting sessions. We operate under three fundamental data guarantees:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DCD1]">
                  <span className="text-xs font-bold text-[#7A4B29] block mb-1">Zero Monetization</span>
                  <p className="text-[11px] text-[#785A44] leading-tight">We never sell, rent, or lease client data to any third party.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DCD1]">
                  <span className="text-xs font-bold text-[#7A4B29] block mb-1">100% IP Ownership</span>
                  <p className="text-[11px] text-[#785A44] leading-tight">You retain total ownership of all written code and assets.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DCD1]">
                  <span className="text-xs font-bold text-[#7A4B29] block mb-1">Encrypted Pipelines</span>
                  <p className="text-[11px] text-[#785A44] leading-tight">Bank-grade encryption in transit (TLS 1.3) and at rest (AES-256).</p>
                </div>
              </div>
            </div>

            {/* 2. Data We Collect & Process */}
            <div
              id="collection"
              className="scroll-mt-24 rounded-[30px] bg-white border border-[#E8DCD1] p-7 sm:p-9 shadow-sm"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#7A4B29]" />
                <h2 className="font-serif text-2xl font-bold text-[#2D1E14]">
                  2. Data We Collect &amp; Process
                </h2>
              </div>
              <p className="text-sm text-[#65442F] leading-relaxed mb-4">
                We adhere strictly to the principle of data minimization: we only request and process information that is strictly indispensable to delivering your project:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-[#65442F] leading-relaxed mb-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#7A4B29] flex-shrink-0 mt-0.5" />
                  <span><strong>Business Consultation Details:</strong> Name, professional email address, organization name, phone number, and architectural scope shared during discovery calls.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#7A4B29] flex-shrink-0 mt-0.5" />
                  <span><strong>Project Engineering Telemetry:</strong> Anonymized application logs, build pipeline timings, performance metrics, and error stack traces generated within authorized staging environments.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#7A4B29] flex-shrink-0 mt-0.5" />
                  <span><strong>AI Fine-Tuning &amp; Vector Datasets:</strong> For custom LLM/AI automation clients, domain data provided for embeddings is quarantined in dedicated private vector instances and is never used to train global external models.</span>
                </li>
              </ul>
            </div>

            {/* 3. Zero-Trust Security Architecture */}
            <div
              id="zerotrust"
              className="scroll-mt-24 rounded-[30px] bg-white border border-[#E8DCD1] p-7 sm:p-9 shadow-sm"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#7A4B29]" />
                <h2 className="font-serif text-2xl font-bold text-[#2D1E14]">
                  3. Zero-Trust Security Architecture
                </h2>
              </div>
              <p className="text-sm text-[#65442F] leading-relaxed mb-4">
                TechSphere enforces a strict Zero-Trust philosophy across our entire development lifecycle: &ldquo;Never trust, always verify.&rdquo;
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DCD1]">
                  <h4 className="text-xs font-bold text-[#2D1E14] mb-1">Encrypted Secrets &amp; Credentials:</h4>
                  <p className="text-xs text-[#65442F] leading-relaxed">
                    Database passwords, AWS/GCP keys, and third-party API tokens are stored in hardware-isolated key vaults (HashiCorp Vault / AWS Secrets Manager) with automatic rotation. No credentials exist in plain text or commit logs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DCD1]">
                  <h4 className="text-xs font-bold text-[#2D1E14] mb-1">Role-Based Access Control (RBAC):</h4>
                  <p className="text-xs text-[#65442F] leading-relaxed">
                    Access to source repositories and production infrastructure requires biometric MFA, VPN whitelisting, and strict least-privilege scoping.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Confidentiality & Strict NDA */}
            <div
              id="nda"
              className="scroll-mt-24 rounded-[30px] bg-white border border-[#E8DCD1] p-7 sm:p-9 shadow-sm"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#7A4B29]" />
                <h2 className="font-serif text-2xl font-bold text-[#2D1E14]">
                  4. Confidentiality &amp; Strict NDA
                </h2>
              </div>
              <p className="text-sm text-[#65442F] leading-relaxed mb-4">
                Every developer, architect, and executive at TechSphere is bound by perpetual confidentiality agreements. We routinely execute bilateral non-disclosure agreements with enterprise clients prior to technical discovery.
              </p>
              <p className="text-sm text-[#65442F] leading-relaxed">
                Client proprietary logic, architectural diagrams, market strategies, and algorithms remain strictly confidential during and after contract completion.
              </p>
            </div>

            {/* 5. Source Code & IP Ownership */}
            <div
              id="ownership"
              className="scroll-mt-24 rounded-[30px] bg-white border border-[#E8DCD1] p-7 sm:p-9 shadow-sm"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#7A4B29]" />
                <h2 className="font-serif text-2xl font-bold text-[#2D1E14]">
                  5. Source Code &amp; IP Ownership
                </h2>
              </div>
              <p className="text-sm text-[#65442F] leading-relaxed mb-4">
                Unlike agencies that employ proprietary lock-in models, TechSphere operates on full client sovereignty:
              </p>
              <div className="p-4 rounded-xl bg-[#FAF1E8] border border-[#E8DCD1] text-xs font-semibold text-[#7A4B29] leading-relaxed">
                &ldquo;Upon milestone settlement, 100% of the custom source code, database architectures, graphics, documentation, and deployment scripts belong exclusively to you, with zero ongoing licensing fees or vendor lock-in.&rdquo;
              </div>
            </div>

            {/* 6. Data Retention & Erasure */}
            <div
              id="retention"
              className="scroll-mt-24 rounded-[30px] bg-white border border-[#E8DCD1] p-7 sm:p-9 shadow-sm"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#7A4B29]" />
                <h2 className="font-serif text-2xl font-bold text-[#2D1E14]">
                  6. Data Retention &amp; Erasure Protocols
                </h2>
              </div>
              <p className="text-sm text-[#65442F] leading-relaxed mb-4">
                Clients may request the complete deletion of staging databases, test telemetry, and project working files at any time following project launch. Upon receipt of an official erasure request, our Data Protection Officer will execute certified cryptographic erasure within 14 business days.
              </p>
            </div>

            {/* 7. DPO Contact & Inquiries */}
            <div
              id="contact"
              className="scroll-mt-24 rounded-[32px] bg-gradient-to-br from-[#2C1A0F] via-[#432717] to-[#5A3620] text-white p-8 sm:p-10 shadow-lg relative overflow-hidden"
            >
              {/* Luminous Top Light Beam */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2.5px] overflow-hidden">
                <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#E5C18D] to-transparent" />
              </div>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C18D] mb-3">
                <Sparkles className="h-4 w-4 text-[#E5C18D]" />
                <span>7. Compliance &amp; Legal Inquiries</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                Data Protection Officer (DPO) Contact
              </h2>

              <p className="text-xs sm:text-sm text-[#F7F0E7]/80 leading-relaxed mb-6 font-normal">
                If you have questions regarding this Privacy Policy, wish to execute an NDA, or require formal security audit documentation, our compliance team is available:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <a
                  href="mailto:techspheretechnology@gmail.com"
                  className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-left group"
                >
                  <Mail className="h-5 w-5 text-[#E5C18D] mb-2" />
                  <span className="text-[11px] uppercase tracking-wider text-[#E5C18D] font-bold block">Email DPO</span>
                  <span className="text-xs font-semibold text-white group-hover:underline break-all">techspheretechnology@gmail.com</span>
                </a>

                <a
                  href="tel:+919662873599"
                  className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-left group"
                >
                  <Phone className="h-5 w-5 text-[#E5C18D] mb-2" />
                  <span className="text-[11px] uppercase tracking-wider text-[#E5C18D] font-bold block">Hotline</span>
                  <span className="text-xs font-semibold text-white group-hover:underline">+91 9662873599</span>
                </a>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-left">
                  <MapPin className="h-5 w-5 text-[#E5C18D] mb-2" />
                  <span className="text-[11px] uppercase tracking-wider text-[#E5C18D] font-bold block">Headquarters</span>
                  <span className="text-xs font-semibold text-white">Ahmedabad, Gujarat, India</span>
                </div>
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
    </div>
  );
}
