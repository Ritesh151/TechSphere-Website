"use client";

import Link from "next/link";
import {
  Sparkles,
  Target,
  Compass,
  ArrowRight,
  Code2,
  BrainCircuit,
  Layers3,
  UsersRound,
  Cloud,
  Smartphone,
  BriefcaseBusiness,
  Lightbulb,
  Eye,
  ShieldCheck,
  HeartHandshake,
  UserCheck,
  CheckCircle2,
  GraduationCap,
  TrendingUp,
  Globe2,
  Award,
} from "lucide-react";

export default function AboutPageContent() {
  const competencies = [
    { title: "Website Development", icon: Code2, href: "/services/web-development", tag: "Next.js & Web" },
    { title: "AI Automation", icon: BrainCircuit, href: "/services/ai-automation", tag: "LLMs & Workflows" },
    { title: "ERP Systems", icon: Layers3, href: "/services/erp-solutions", tag: "Enterprise Ops" },
    { title: "CRM Solutions", icon: UsersRound, href: "/services/crm-solutions", tag: "Customer 360" },
    { title: "Cloud Infrastructure", icon: Cloud, href: "/services/cyber-security", tag: "Zero-Trust Cloud" },
    { title: "Mobile Apps", icon: Smartphone, href: "/services/mobile-app-development", tag: "iOS & Android" },
    { title: "Business Consulting", icon: BriefcaseBusiness, href: "/contact", tag: "Digital Strategy" },
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "Constantly pushing boundaries to build next-generation solutions.",
      icon: Lightbulb,
      highlight: "Next-Gen Tech",
    },
    {
      title: "Transparency",
      description: "Open, honest communication at every step of the development cycle.",
      icon: Eye,
      highlight: "Open Visibility",
    },
    {
      title: "Quality",
      description: "Uncompromising standards in code structure, security, and performance.",
      icon: ShieldCheck,
      highlight: "Zero Compromise",
    },
    {
      title: "Commitment",
      description: "Dedicated to the long-term success and growth of our partners.",
      icon: HeartHandshake,
      highlight: "Long-Term Ally",
    },
    {
      title: "Customer First",
      description: "Every decision is driven by what creates the most value for our clients.",
      icon: UserCheck,
      highlight: "Client Centric",
    },
    {
      title: "Integrity",
      description: "Doing the right thing, even when no one is watching.",
      icon: CheckCircle2,
      highlight: "Ethical Standards",
    },
    {
      title: "Continuous Learning",
      description: "Always adapting and mastering the latest technological advancements.",
      icon: GraduationCap,
      highlight: "Constant Growth",
    },
    {
      title: "Growth Mindset",
      description: "Embracing challenges as opportunities to learn and evolve.",
      icon: TrendingUp,
      highlight: "Forward Moving",
    },
  ];

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#2D1E14] overflow-hidden">
      {/* ========================================================
          1. COMPANY STORY HERO SECTION (Continuous Floating Ambience)
         ======================================================== */}
      <section className="relative w-full pt-8 pb-14 sm:pt-10 sm:pb-18 lg:pt-12 lg:pb-20 border-b border-[#E8DCD1] bg-gradient-to-b from-[#FAF6F1] via-[#FAF7F2] to-[#FAF8F5] overflow-hidden">
        {/* Animated Background Ambience */}
        <div
          className="anim-orb-1 pointer-events-none absolute -top-32 -left-20 w-[580px] h-[480px] rounded-full bg-gradient-to-br from-[#F5E6D8]/70 via-[#EEDFD0]/40 to-transparent blur-3xl -z-0"
          aria-hidden="true"
        />
        <div
          className="anim-orb-2 pointer-events-none absolute top-1/2 -right-24 w-[520px] h-[520px] rounded-full bg-gradient-to-tl from-[#F5EAE0]/80 via-[#EBD9CA]/30 to-transparent blur-3xl -z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow with Continuous Shimmer & Pulsing Diamonds */}
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#94613F] mb-4">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#94613F] to-[#7A4B29]" />
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="eyebrow-shimmer tracking-[0.22em] font-extrabold">
              Company Story
            </span>
            <span className="anim-badge-pulse text-[10px] text-[#C89A62]">◆</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#94613F] to-[#7A4B29]" />
          </div>

          {/* Heading with Continuous Golden Shimmer */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1E14] leading-[1.14] tracking-tight mb-8">
            <span>From a Small Vision to </span>
            <span className="gold-text-shimmer">Global Impact</span>
          </h1>

          {/* Story Container Card with Animated Light Beam & Floating Effect */}
          <div className="relative anim-card-float-1 rounded-[32px] bg-white/90 backdrop-blur-md p-7 sm:p-11 border border-[#E8DCD1] shadow-[0_24px_60px_rgba(45,30,20,0.08),0_4px_16px_rgba(45,30,20,0.03)] text-left overflow-hidden">
            {/* Top Border Light Beam */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[32px] overflow-hidden pointer-events-none">
              <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
            </div>

            <div className="space-y-6 text-base sm:text-lg text-[#65442F] leading-relaxed">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[#7A4B29] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                TechSphere began with a simple yet ambitious goal: to bridge the gap between complex enterprise technology and growing businesses. Founded by a group of passionate engineers, we realized that many companies struggled to adapt to the rapid pace of digital transformation.
              </p>
              <p>
                What started as a small consultancy has now blossomed into a full-service technology partner. Over the years, we&apos;ve remained true to our core belief that technology should empower people, streamline processes, and ultimately drive sustainable business growth.
              </p>
              <div className="pt-4 mt-2 border-t border-[#F0E6DD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="font-medium text-[#2D1E14] sm:max-w-2xl leading-relaxed">
                  Today, we stand proud as a trusted partner to over 50 businesses globally, consistently delivering cutting-edge web, mobile, and AI solutions that push the boundaries of innovation.
                </p>

                {/* Floating Trust Pill */}
                <div className="anim-badge-pulse inline-flex items-center gap-2 bg-[#FAF1E8] border border-[#E8DCD1] px-4 py-2 rounded-xl flex-shrink-0 self-start sm:self-auto shadow-2xs">
                  <Globe2 className="h-4 w-4 text-[#7A4B29]" />
                  <span className="text-xs font-bold text-[#7A4B29]">50+ Global Partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. PURPOSE: OUR MISSION & VISION (Animated Dual Cards)
         ======================================================== */}
      <section className="relative w-full py-18 sm:py-24 lg:py-28 border-b border-[#E8DCD1] bg-[#FAF8F5]">
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#94613F] mb-3">
              <span className="w-5 h-[1px] bg-[#94613F]/50" />
              <span className="anim-badge-pulse text-[9px] text-[#C89A62]">◆</span>
              <span className="tracking-[0.2em]">Purpose</span>
              <span className="anim-badge-pulse text-[9px] text-[#C89A62]">◆</span>
              <span className="w-5 h-[1px] bg-[#94613F]/50" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1E14] tracking-tight mb-4">
              <span>Our Mission &amp; </span>
              <span className="gold-text-shimmer">Vision</span>
            </h2>

            <p className="text-sm sm:text-base text-[#785A44] leading-relaxed">
              The guiding principles that shape every solution we build and every partnership we forge.
            </p>
          </div>

          {/* Dual Mission & Vision Grid with Opposing Continuous Float */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Our Mission Card */}
            <div className="anim-card-float-1 group relative p-8 sm:p-11 rounded-[30px] bg-white border border-[#E8DCD1] shadow-[0_16px_40px_rgba(45,30,20,0.06)] hover:border-[#7A4B29]/60 hover:shadow-[0_24px_60px_rgba(45,30,20,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              {/* Bottom Sparkle Glow Beam */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2.5px] overflow-hidden">
                <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
              </div>

              <div>
                <div className="anim-icon-pulse w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FAF1E8] to-[#F5E6D8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center mb-6 shadow-xs group-hover:bg-[#7A4B29] group-hover:text-white transition-all">
                  <Target className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#94613F] block mb-2">
                  Driving Every Solution
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors mb-4">
                  Our Mission
                </h3>
                <p className="text-base sm:text-[17px] text-[#65442F] leading-relaxed font-normal">
                  To empower businesses through innovative, scalable, and intelligent digital solutions. We strive to simplify complex technology, delivering products that enhance operational efficiency and create extraordinary user experiences.
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#F0E6DD] flex items-center justify-between text-xs font-bold text-[#7A4B29]">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#C89A62] animate-pulse" />
                  <span>Simplify. Scale. Empower.</span>
                </div>
                <span className="text-[11px] font-mono bg-[#FAF1E8] px-2 py-0.5 rounded-md border border-[#E8DCD1]">
                  Pillar 01
                </span>
              </div>
            </div>

            {/* Our Vision Card */}
            <div className="anim-card-float-2 group relative p-8 sm:p-11 rounded-[30px] bg-white border border-[#E8DCD1] shadow-[0_16px_40px_rgba(45,30,20,0.06)] hover:border-[#7A4B29]/60 hover:shadow-[0_24px_60px_rgba(45,30,20,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              {/* Bottom Sparkle Glow Beam */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2.5px] overflow-hidden">
                <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" style={{ animationDelay: "1.6s" }} />
              </div>

              <div>
                <div className="anim-icon-pulse w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FAF1E8] to-[#F5E6D8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center mb-6 shadow-xs group-hover:bg-[#7A4B29] group-hover:text-white transition-all" style={{ animationDelay: "1s" }}>
                  <Compass className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#94613F] block mb-2">
                  Shaping The Horizon
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors mb-4">
                  Our Vision
                </h3>
                <p className="text-base sm:text-[17px] text-[#65442F] leading-relaxed font-normal">
                  To be the global benchmark in digital transformation and AI integration. We envision a future where technology seamlessly augments human potential, fostering a smarter, more connected, and highly efficient business ecosystem.
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#F0E6DD] flex items-center justify-between text-xs font-bold text-[#7A4B29]">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#C89A62] animate-pulse" />
                  <span>Transform. Augment. Pioneer.</span>
                </div>
                <span className="text-[11px] font-mono bg-[#FAF1E8] px-2 py-0.5 rounded-md border border-[#E8DCD1]">
                  Pillar 02
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. WHO WE ARE & CORE COMPETENCIES (Interactive Floating Deck)
         ======================================================== */}
      <section className="relative w-full py-18 sm:py-24 lg:py-28 border-b border-[#E8DCD1] bg-[#FAF7F2]">
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Who We Are Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#94613F] mb-3">
                <span className="w-5 h-[1px] bg-[#94613F]/50" />
                <span className="anim-badge-pulse text-[9px] text-[#C89A62]">◆</span>
                <span className="tracking-[0.2em]">Who We Are</span>
                <span className="anim-badge-pulse text-[9px] text-[#C89A62]">◆</span>
                <span className="w-5 h-[1px] bg-[#94613F]/50" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2D1E14] leading-[1.16] tracking-tight mb-6">
                <span>Architects of Your </span>
                <span className="gold-text-shimmer">Digital Future</span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#65442F] leading-relaxed mb-8">
                <p>
                  At TechSphere, we don&apos;t just write code; we solve complex business problems. We are a collective of forward-thinking technologists, designers, and strategists who believe that the right technology can fundamentally transform how a business operates.
                </p>
                <p>
                  Our approach is highly collaborative. We partner with our clients to deeply understand their unique challenges, architecting bespoke solutions that are not just functional, but scalable, secure, and ready for the future.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="anim-badge-pulse inline-flex items-center gap-2.5 rounded-full bg-[#7A4B29] hover:bg-[#5A3620] text-white px-7 py-3.5 text-sm font-semibold shadow-[0_8px_24px_rgba(122,75,41,0.28)] transition-all cursor-pointer group"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="anim-arrow-bounce h-4 w-4 stroke-[2.25]" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FAF3EC] border border-[#E8DCD1] hover:bg-[#F5ECE2] text-[#2D1E14] px-6 py-3.5 text-sm font-semibold transition-all cursor-pointer"
                >
                  <span>Explore Capabilities</span>
                </Link>
              </div>
            </div>

            {/* Right Column: 7 Core Competencies Interactive Deck */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[32px] bg-white border border-[#E8DCD1] p-6 sm:p-8 shadow-[0_20px_50px_rgba(45,30,20,0.08)] overflow-hidden">
                {/* Top Border Glow */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-[32px] overflow-hidden pointer-events-none">
                  <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                </div>

                <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#F0E6DD]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#94613F]">
                      Enterprise Engineering
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#2D1E14] mt-0.5">
                      Our Core Competencies
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#7A4B29] bg-[#FAF1E8] border border-[#E8DCD1] px-3 py-1 rounded-lg shadow-2xs">
                    07 Domains
                  </span>
                </div>

                <div className="space-y-2.5">
                  {competencies.map((comp, idx) => {
                    const Icon = comp.icon;
                    const floatClass = idx % 2 === 0 ? "anim-card-float-1" : "anim-card-float-2";

                    return (
                      <Link
                        key={comp.title}
                        href={comp.href}
                        className={`${floatClass} group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DCD1] hover:bg-[#FAF3EC] hover:border-[#7A4B29]/60 transition-all shadow-2xs overflow-hidden`}
                        style={{ animationDelay: `${idx * 0.25}s` }}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="anim-icon-pulse w-10 h-10 rounded-xl bg-white border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A4B29] group-hover:text-white transition-all shadow-2xs" style={{ animationDelay: `${idx * 0.3}s` }}>
                            <Icon className="h-5 w-5" strokeWidth={1.85} />
                          </div>
                          <div className="text-left min-w-0">
                            <span className="text-sm sm:text-[15px] font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors block truncate">
                              {comp.title}
                            </span>
                            <span className="text-[11px] font-medium text-[#785A44] leading-tight block">
                              {comp.tag}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pl-2 flex-shrink-0">
                          <span className="hidden sm:inline-block text-[11px] font-semibold text-[#8C5D38] bg-white border border-[#E8DCD1] px-2 py-0.5 rounded-md">
                            0{idx + 1}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-white border border-[#E8DCD1] flex items-center justify-center text-[#785A44] group-hover:bg-[#7A4B29] group-hover:text-white transition-all">
                            <ArrowRight className="anim-arrow-bounce h-3.5 w-3.5 stroke-[2.25]" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. OUR CORE VALUES (Staggered Floating Cards Grid)
         ======================================================== */}
      <section className="relative w-full py-18 sm:py-24 lg:py-28 bg-[#FAF8F5]">
        {/* Ambient Orb */}
        <div
          className="anim-orb-1 pointer-events-none absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-[#FAF0E6]/60 blur-3xl -z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#94613F] mb-3">
              <span className="w-5 h-[1px] bg-[#94613F]/50" />
              <span className="anim-badge-pulse text-[9px] text-[#C89A62]">◆</span>
              <span className="tracking-[0.2em]">Our Core Values</span>
              <span className="anim-badge-pulse text-[9px] text-[#C89A62]">◆</span>
              <span className="w-5 h-[1px] bg-[#94613F]/50" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1E14] tracking-tight mb-4">
              <span>What Drives Us </span>
              <span className="gold-text-shimmer">Forward</span>
            </h2>

            <p className="text-sm sm:text-base text-[#785A44] leading-relaxed">
              The principles that shape our culture and guide every decision we make.
            </p>
          </div>

          {/* 8 Core Values Cards Grid (4 Columns on Desktop with Staggered Continuous Floats) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              const floatAnimation =
                idx % 3 === 0
                  ? "anim-card-float-1"
                  : idx % 3 === 1
                  ? "anim-card-float-2"
                  : "anim-card-float-3";

              return (
                <div
                  key={val.title}
                  className={`${floatAnimation} group relative p-6 sm:p-7 rounded-[26px] bg-white border border-[#E8DCD1] hover:border-[#7A4B29]/60 hover:shadow-[0_16px_36px_rgba(45,30,20,0.1)] transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  {/* Subtle Top Accent Beam */}
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#C89A62] to-transparent" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="anim-icon-pulse w-11 h-11 rounded-xl bg-[#FAF1E8] border border-[#E8DCD1] text-[#7A4B29] flex items-center justify-center group-hover:bg-[#7A4B29] group-hover:text-white transition-all shadow-2xs" style={{ animationDelay: `${idx * 0.3}s` }}>
                        <Icon className="h-5 w-5" strokeWidth={1.85} />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#8C5D38] bg-[#FAF6F1] px-2.5 py-0.5 rounded-md border border-[#E8DCD1]">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors mb-2">
                      {val.title}
                    </h3>

                    <p className="text-xs sm:text-[13.5px] text-[#65442F] leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[#F0E6DD]/80 flex items-center justify-between text-[11px] font-semibold text-[#8C5D38]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                      <span>{val.highlight}</span>
                    </div>
                    <span className="text-[10px] text-[#C89A62]">♦</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom High-Impact Consultation Banner */}
          <div className="relative mt-16 sm:mt-20 rounded-[32px] bg-gradient-to-r from-[#2C1A0F] via-[#432717] to-[#5A3620] text-white p-8 sm:p-12 lg:p-14 shadow-[0_24px_60px_rgba(45,30,20,0.2)] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Top Light Line */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] overflow-hidden pointer-events-none">
              <div className="anim-border-beam w-full h-full bg-gradient-to-r from-transparent via-[#E5C18D] to-transparent" />
            </div>

            <div className="text-left max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C18D] mb-3">
                <span className="w-4 h-[1px] bg-[#E5C18D]" />
                <Sparkles className="h-3.5 w-3.5 text-[#E5C18D]" />
                <span>Ready to Accelerate Your Vision?</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-snug">
                Build Your Next Milestone With TechSphere
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F0E7]/80 leading-relaxed font-normal">
                Connect with our principal architects for a confidential discovery call and custom architectural blueprint tailored to your enterprise roadmap.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 flex-shrink-0">
              <Link
                href="/get-a-quote"
                className="anim-badge-pulse inline-flex items-center gap-2 rounded-full bg-[#E5C18D] hover:bg-[#d8b075] text-[#2C1A0F] px-7 py-3.5 text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                <span>Get a Free Quote</span>
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

