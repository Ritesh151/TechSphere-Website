"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  Award,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  BrainCircuit,
  Code2,
  Crown,
  CheckCircle2,
  Terminal,
  Zap,
  Briefcase,
  Layers,
  Mail,
} from "lucide-react";

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<"all" | "leadership" | "developers">("all");

  const founders = [
    {
      id: "devansh",
      category: "leadership",
      name: "Devansh Raval",
      role: "CEO & Founder",
      badge: "Executive Leadership",
      badgeColor: "bg-[#FAF1E8] text-[#7A4B29] border-[#E8DCD1]",
      avatarBg: "from-[#2C1A0F] to-[#5A3620] text-[#E5C18D]",
      avatar: "DR",
      specialty: "Executive Leadership & Global Strategy",
      bio: "Guides TechSphere's global vision, enterprise partnerships, and technology innovation roadmap to deliver transformative digital solutions across Fortune 500 and high-growth businesses.",
      skills: ["Enterprise Strategy", "Product Vision", "Global Growth", "Strategic Scaling"],
      experience: "Visionary & Chief Architect",
      quote: "Technology must serve business outcomes, compounding real measurable value at scale.",
    },
    {
      id: "vishvraj",
      category: "leadership",
      name: "Vishvraj Rajput",
      role: "Co-Founder",
      badge: "Operations & Growth",
      badgeColor: "bg-[#FAF1E8] text-[#7A4B29] border-[#E8DCD1]",
      avatarBg: "from-[#3D2516] to-[#7A4B29] text-[#FAF6F1]",
      avatar: "VR",
      specialty: "Operations & Enterprise Client Growth",
      bio: "Oversees business development, client engagement lifecycle, and cross-functional operational excellence, ensuring flawless delivery across global markets and complex enterprise engagements.",
      skills: ["Client Retention", "Agile Operations", "Resource Governance", "Market Expansion"],
      experience: "Operations & Partnership Lead",
      quote: "Flawless execution and radical transparency form the bedrock of long-term client trust.",
    },
    {
      id: "dev-patel",
      category: "leadership",
      name: "Dev Patel",
      role: "Co-Founder",
      badge: "Product & Architecture",
      badgeColor: "bg-[#FAF1E8] text-[#7A4B29] border-[#E8DCD1]",
      avatarBg: "from-[#4A2D1B] to-[#8C5D38] text-[#FAF6F1]",
      avatar: "DP",
      specialty: "Technology & Product Architecture",
      bio: "Drives product strategy, technical innovation, and enterprise software engineering standards, architecting resilient multi-cloud infrastructures built for millions of concurrent transactions.",
      skills: ["System Architecture", "Cloud Infrastructure", "Scalable Systems", "Security Standards"],
      experience: "Principal Systems Architect",
      quote: "Build for resilience on day one, and scalability becomes an inevitable superpower.",
    },
  ];

  const developers = [
    {
      id: "hardik",
      category: "developers",
      name: "Hardik Thakor",
      role: "Software Developer",
      badge: "Full-Stack Software",
      badgeColor: "bg-[#FAF3EC] text-[#7A4B29] border-[#E8DCD1]",
      avatarBg: "from-[#24150C] to-[#5A3620] text-[#E5C18D]",
      avatar: "HT",
      specialty: "Full-Stack Software Engineering",
      bio: "Expert in building high-throughput backend APIs, responsive Next.js web applications, complex ERP data models, and resilient cloud-native architectures that withstand enterprise workloads.",
      skills: ["Next.js & React 19", "TypeScript & Node.js", "PostgreSQL & Redis", "Docker & Kubernetes", "Microservices Architecture"],
      experience: "Senior Software Architect",
      terminalCommand: "pnpm run deploy:cluster --zero-downtime",
    },
  ];

  const metrics = [
    { value: "100%", label: "In-House Engineering", subtext: "Zero outsourced code" },
    { value: "50+", label: "Global Deployments", subtext: "Across US, EU & Asia" },
    { value: "99.9%", label: "On-Time Sprint SLA", subtext: "Agile weekly milestones" },
    { value: "24/7", label: "Dedicated Pod Coverage", subtext: "Mission-critical support" },
  ];

  const showFounders = activeTab === "all" || activeTab === "leadership";
  const showDevelopers = activeTab === "all" || activeTab === "developers";

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#2D1E14] overflow-hidden">
      {/* ========================================================
          HERO HEADER WITH CONTINUOUS LUXURY AMBIENCE
         ======================================================== */}
      <section className="relative w-full pt-10 pb-14 sm:pt-14 sm:pb-18 border-b border-[#E8DCD1] bg-gradient-to-b from-[#FAF6F1] via-[#FAF7F2] to-[#FAF8F5] overflow-hidden">
        {/* Ambient Glow Orbs */}
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
              OUR TEAM &amp; ARCHITECTS
            </span>
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1E14] leading-[1.14] tracking-tight mb-4">
            <span>Meet the Minds Behind </span>
            <span className="gold-text-shimmer">TechSphere</span>
          </h1>

          <p className="text-base sm:text-lg text-[#65442F] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            The visionary founders and dedicated engineering architects building intelligent AI agent workflows, resilient software, and scalable digital ecosystems.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap sm:inline-flex items-center justify-center p-1.5 rounded-2xl bg-white border border-[#E8DCD1] shadow-[0_4px_16px_rgba(45,30,20,0.06)] gap-1 max-w-full">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#7A4B29] text-white shadow-xs"
                  : "text-[#785A44] hover:text-[#2D1E14] hover:bg-[#FAF6F1]"
              }`}
            >
              All Team ({founders.length + developers.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("leadership")}
              className={`px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === "leadership"
                  ? "bg-[#7A4B29] text-white shadow-xs"
                  : "text-[#785A44] hover:text-[#2D1E14] hover:bg-[#FAF6F1]"
              }`}
            >
              Founders &amp; Leadership ({founders.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("developers")}
              className={`px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === "developers"
                  ? "bg-[#7A4B29] text-white shadow-xs"
                  : "text-[#785A44] hover:text-[#2D1E14] hover:bg-[#FAF6F1]"
              }`}
            >
              Developers &amp; Engineering ({developers.length})
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          CREDIBILITY & STATS STRIP
         ======================================================== */}
      <section className="relative w-full border-b border-[#E8DCD1] bg-white/70 backdrop-blur-md py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 divide-[#E8DCD1] sm:divide-x divide-y-0">
            {metrics.map((m) => (
              <div key={m.label} className="text-center px-2 sm:px-4 py-2 sm:py-0">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#2D1E14] tracking-tight block">
                  {m.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#7A4B29] mt-0.5 block">
                  {m.label}
                </span>
                <span className="text-[11px] text-[#785A44] font-medium block mt-0.5">
                  {m.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          1. FOUNDERS & EXECUTIVE LEADERSHIP SECTION
         ======================================================== */}
      {showFounders && (
        <section className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E8DCD1]">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#94613F] mb-2.5">
              <Crown className="h-4 w-4 text-[#C89A62]" />
              <span className="tracking-[0.2em]">EXECUTIVE LEADERSHIP</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1E14]">
              CEO &amp; Founders
            </h2>
            <p className="text-sm text-[#785A44] mt-2 leading-relaxed">
              Steering TechSphere&apos;s strategic vision, architectural rigor, and enterprise client relationships worldwide.
            </p>
          </div>

          {/* 3 Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {founders.map((member, idx) => {
              const floatClass = idx === 1 ? "anim-card-float-2" : "anim-card-float-1";

              return (
                <div
                  key={member.name}
                  className={`${floatClass} group relative rounded-[32px] bg-white border border-[#E8DCD1] p-7 sm:p-9 shadow-[0_16px_36px_rgba(45,30,20,0.06)] hover:border-[#7A4B29]/70 hover:shadow-[0_24px_50px_rgba(45,30,20,0.14)] transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                  style={{ animationDelay: `${idx * 0.25}s` }}
                >
                  {/* Luminous Top Light Beam on Hover */}
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] rounded-t-[32px] overflow-hidden">
                    <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                  </div>

                  <div>
                    {/* Header: Monogram Portrait Container + Status Indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        <div
                          className={`w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${member.avatarBg} border-2 border-white flex items-center justify-center font-serif font-black text-2xl shadow-[0_8px_20px_rgba(45,30,20,0.18)] transition-transform duration-300 group-hover:scale-105`}
                        >
                          {member.avatar}
                        </div>
                        {/* Live Status Indicator */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-xs border border-[#E8DCD1]">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
                        </div>
                      </div>

                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs ${member.badgeColor}`}
                      >
                        {member.badge}
                      </span>
                    </div>

                    {/* Member Name & Role */}
                    <h3 className="text-2xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors leading-tight">
                      {member.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-1 mb-4">
                      <span className="text-sm font-extrabold text-[#7A4B29]">
                        {member.role}
                      </span>
                      <span className="text-xs text-[#C89A62]">♦</span>
                      <span className="text-xs font-medium text-[#785A44]">
                        {member.experience}
                      </span>
                    </div>

                    {/* Bio */}
                    <p className="text-xs sm:text-[13.5px] text-[#65442F] leading-relaxed mb-6 font-normal">
                      {member.bio}
                    </p>

                    {/* Focus Skills Pills */}
                    <div className="mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94613F] block mb-2">
                        Core Competencies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-semibold text-[#7A4B29] bg-[#FAF6F1] border border-[#E8DCD1] px-2.5 py-1 rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Leadership Quote Snippet */}
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DCD1]/80 text-xs italic text-[#785A44] leading-relaxed mb-4">
                      &ldquo;{member.quote}&rdquo;
                    </div>
                  </div>

                  {/* Card Footer: Verified Badge & Connect Action */}
                  <div className="pt-4 border-t border-[#EEE5DC] flex items-center justify-between text-xs text-[#785A44]">
                    <div className="flex items-center gap-1.5 font-bold text-[#7A4B29]">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                      <span>Founding Partner</span>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 font-semibold text-[#7A4B29] hover:text-[#5A3620] hover:underline transition-all"
                    >
                      <span>Connect</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ========================================================
          2. CORE ENGINEERING / DEVELOPERS SECTION
         ======================================================== */}
      {showDevelopers && (
        <section className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-b border-[#E8DCD1]">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#94613F] mb-2.5">
              <BrainCircuit className="h-4 w-4 text-[#C89A62]" />
              <span className="tracking-[0.2em]">ACTIVE ENGINEERING POD</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1E14]">
              Core Developers
            </h2>
            <p className="text-sm text-[#785A44] mt-2 leading-relaxed">
              The hands-on technical architects engineering next-generation AI agents, high-concurrency backends, and full-stack software.
            </p>
          </div>

          {/* Developers Grid */}
          <div
            className={`grid grid-cols-1 ${
              developers.length > 1 ? "md:grid-cols-2 max-w-5xl" : "max-w-2xl"
            } gap-8 mx-auto`}
          >
            {developers.map((member, idx) => {
              const floatClass = idx === 0 ? "anim-card-float-1" : "anim-card-float-2";

              return (
                <div
                  key={member.name}
                  className={`${floatClass} group relative rounded-[32px] bg-white border border-[#E8DCD1] p-8 sm:p-10 shadow-[0_16px_36px_rgba(45,30,20,0.06)] hover:border-[#7A4B29]/70 hover:shadow-[0_24px_50px_rgba(45,30,20,0.14)] transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                  style={{ animationDelay: `${idx * 0.3}s` }}
                >
                  {/* Top Light Beam */}
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] rounded-t-[32px] overflow-hidden">
                    <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                  </div>

                  <div>
                    {/* Header: Monogram Avatar + Domain Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        <div
                          className={`w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${member.avatarBg} border-2 border-white flex items-center justify-center font-serif font-black text-2xl shadow-[0_8px_20px_rgba(45,30,20,0.18)] transition-transform duration-300 group-hover:scale-105`}
                        >
                          {member.avatar}
                        </div>
                        {/* Live Status Indicator */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-xs border border-[#E8DCD1]">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
                        </div>
                      </div>

                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border shadow-2xs ${member.badgeColor}`}
                      >
                        {member.badge}
                      </span>
                    </div>

                    {/* Member Name & Role */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors leading-tight">
                      {member.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-1 mb-4">
                      <span className="text-sm font-extrabold text-[#7A4B29]">
                        {member.role}
                      </span>
                      <span className="text-xs text-[#C89A62]">♦</span>
                      <span className="text-xs font-medium text-[#785A44]">
                        {member.experience}
                      </span>
                    </div>

                    {/* Bio */}
                    <p className="text-xs sm:text-[14px] text-[#65442F] leading-relaxed mb-6 font-normal">
                      {member.bio}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94613F] block mb-2">
                        Battle-Tested Toolchain
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-semibold text-[#7A4B29] bg-[#FAF6F1] border border-[#E8DCD1] px-2.5 py-1 rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Terminal Code Snippet */}
                    <div className="rounded-xl bg-[#1A1009] p-3 border border-[#3D2516] flex items-center gap-2 text-xs font-mono text-[#E5C18D] shadow-inner mb-4 overflow-x-auto max-w-full">
                      <Terminal className="h-3.5 w-3.5 text-[#C89A62] flex-shrink-0" />
                      <span className="text-[#8C5D38] select-none flex-shrink-0">$</span>
                      <span className="break-all sm:whitespace-nowrap">{member.terminalCommand}</span>
                    </div>
                  </div>

                  {/* Card Footer: Verified Engineer Status & Action */}
                  <div className="pt-4 border-t border-[#EEE5DC] flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 text-xs text-[#785A44]">
                    <div className="flex items-center gap-1.5 font-bold text-[#7A4B29]">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A] flex-shrink-0" />
                      <span>Verified Senior Pod Engineer</span>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 font-semibold text-[#7A4B29] hover:text-[#5A3620] hover:underline transition-all"
                    >
                      <span>Request Pod</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ========================================================
          BOTTOM CTA & CAREERS SECTION
         ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-r from-[#2C1A0F] via-[#432717] to-[#5A3620] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E5C18D] block mb-2">
              Want to Build With Our Pod?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Partner With TechSphere&apos;s Engineering Team
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E7]/80 leading-relaxed font-normal">
              Whether you need autonomous AI agents, enterprise ERP modernizations, or high-performance web systems, our senior architects are ready.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3.5 flex-shrink-0 w-full md:w-auto">
            <Link
              href="/get-a-quote"
              className="anim-badge-pulse inline-flex items-center justify-center gap-2 rounded-full bg-[#E5C18D] hover:bg-[#d8b075] text-[#2C1A0F] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer w-full xs:w-auto text-center"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer w-full xs:w-auto text-center"
            >
              <span>Join the Team</span>
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
