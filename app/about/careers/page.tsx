"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Award,
  Zap,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Full-Stack Architect (Next.js / Node.js)",
      department: "Web & Microservices",
      type: "Full-Time",
      location: "Ahmedabad, India / Hybrid",
      experience: "5+ Years",
      compensation: "₹18 Lakhs - ₹32 Lakhs",
      tags: ["Next.js 16", "TypeScript", "GraphQL", "PostgreSQL"],
    },
    {
      title: "Lead AI / ML Research Engineer",
      department: "AI Automation Labs",
      type: "Full-Time",
      location: "Ahmedabad, India / Remote",
      experience: "4+ Years",
      compensation: "₹22 Lakhs - ₹38 Lakhs",
      tags: ["LangGraph", "PyTorch", "pgvector", "vLLM"],
    },
    {
      title: "Senior Mobile Engineer (Flutter / iOS / Android)",
      department: "Mobile Engineering",
      type: "Full-Time",
      location: "Ahmedabad, India / Hybrid",
      experience: "4+ Years",
      compensation: "₹16 Lakhs - ₹28 Lakhs",
      tags: ["Flutter 3.x", "Dart", "Swift", "Kotlin"],
    },
    {
      title: "DevOps & Cloud Security Specialist (AWS / Kubernetes)",
      department: "Infrastructure Pod",
      type: "Full-Time",
      location: "Ahmedabad, India / Remote",
      experience: "5+ Years",
      compensation: "₹20 Lakhs - ₹35 Lakhs",
      tags: ["Kubernetes", "Terraform", "Cloudflare WAF", "Vault"],
    },
  ];

  const perks = [
    {
      title: "Top-Tier Compensation",
      desc: "Benchmark salary packages in INR, performance bonuses & equity options.",
      icon: Award,
    },
    {
      title: "High-Autonomy Culture",
      desc: "Zero micromanagement. You own architecture and sprint decisions.",
      icon: Zap,
    },
    {
      title: "Continuous Learning Fund",
      desc: "Annual budget for cloud certifications, tech conferences & research books.",
      icon: GraduationCap,
    },
    {
      title: "Comprehensive Wellness",
      desc: "Premium family health insurance, mental health support & gym allowance.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#2D1E14] overflow-hidden">
      {/* ========================================================
          1. CAREERS HERO SECTION WITH METALLIC AMBIENCE
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
              JOIN OUR ENGINEERING SQUADS
            </span>
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1E14] leading-[1.12] tracking-tight mb-5">
            <span>Build Systems That Impact </span>
            <span className="gold-text-shimmer">Global Enterprises</span>
          </h1>

          <p className="text-base sm:text-lg text-[#65442F] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Work alongside elite engineers building next-generation cloud architectures, autonomous AI workflows, and mission-critical software for industry leaders.
          </p>

          <div className="inline-flex items-center gap-2.5 bg-white/85 backdrop-blur-md border border-[#E8DCD1] px-4 py-2 rounded-xl text-xs font-semibold text-[#7A4B29] shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Currently Hiring Across 4 Core Engineering Squads</span>
            <span className="text-[#C89A62] font-mono">•</span>
            <span className="text-[#8C5D38] font-mono">Hybrid &amp; Remote Flexibility</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. WHY ENGINEERS THRIVE AT TECHSPHERE (4 Perks Strip)
         ======================================================== */}
      <section className="w-full py-12 bg-white/70 border-b border-[#E8DCD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="p-5 rounded-2xl bg-white border border-[#E8DCD1] shadow-2xs hover:border-[#7A4B29]/60 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF1E8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center mb-3 group-hover:bg-[#7A4B29] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" strokeWidth={1.85} />
                  </div>
                  <h4 className="text-sm font-bold text-[#2D1E14] mb-1">
                    {perk.title}
                  </h4>
                  <p className="text-xs text-[#785A44] leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ACTIVE ENGINEERING OPENINGS (Animated Floating Cards)
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E8DCD1]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#94613F] block mb-2">
            CURRENT VACANCIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1E14] mb-3">
            Open Architecture &amp; Engineering Roles
          </h2>
          <p className="text-sm text-[#65442F]">
            We value clean code, deep curiosity, and a bias for production shipping over boardroom bureaucracy.
          </p>
        </div>

        <div className="space-y-5">
          {openings.map((job, idx) => {
            const floatClass =
              idx % 2 === 0 ? "anim-card-float-1" : "anim-card-float-2";

            return (
              <div
                key={job.title}
                className={`${floatClass} group relative p-6 sm:p-8 rounded-[28px] bg-white border border-[#E8DCD1] hover:border-[#7A4B29]/70 shadow-[0_12px_32px_rgba(45,30,20,0.06)] hover:shadow-[0_20px_45px_rgba(45,30,20,0.12)] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Luminous Top Light Beam on Hover */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] rounded-t-[28px] overflow-hidden">
                  <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A4B29] bg-[#FAF1E8] px-3 py-1 rounded-full border border-[#E8DCD1]">
                      {job.department}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#8C5D38] bg-[#FAF6F1] px-2.5 py-0.5 rounded-md border border-[#E8DCD1]">
                      {job.compensation}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors leading-snug mb-3">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#785A44] mb-4">
                    <span className="flex items-center gap-1.5 font-medium">
                      <MapPin className="h-4 w-4 text-[#7A4B29]" />
                      {job.location}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="h-4 w-4 text-[#7A4B29]" />
                      {job.type}
                    </span>
                    <span>&bull;</span>
                    <span className="font-semibold text-[#2D1E14]">
                      Exp: {job.experience}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold text-[#8C5D38] bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#E8DCD1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Link
                    href="/contact"
                    className="anim-badge-pulse inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#7A4B29] hover:bg-[#5A3620] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="h-4 w-4 stroke-[2.25]" />
                  </Link>
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C18D] mb-2">
              <Sparkles className="h-3.5 w-3.5 text-[#E5C18D]" />
              <span>Don't See Your Exact Role?</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-snug">
              Send an Open Engineering Application
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F0E7]/80 leading-relaxed font-normal">
              Exceptional builders always have a place at TechSphere. Share your GitHub profile, open-source commits, or past architectures.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E5C18D] hover:bg-[#d8b075] text-[#2C1A0F] px-7 py-3.5 text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Submit General Profile</span>
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
