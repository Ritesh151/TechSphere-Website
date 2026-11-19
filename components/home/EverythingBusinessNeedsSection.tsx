"use client";

import Link from "next/link";
import {
  Code2,
  Smartphone,
  Cpu,
  Layers3,
  Users,
  BrainCircuit,
  Cloud,
  Palette,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function EverythingBusinessNeedsSection() {
  const services = [
    {
      num: "01",
      title: "Website Development",
      description:
        "Custom, responsive websites built with modern frameworks for optimal performance.",
      icon: Code2,
      href: "/services/web-development",
    },
    {
      num: "02",
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      icon: Smartphone,
      href: "/services/mobile-app-development",
    },
    {
      num: "03",
      title: "Custom Software",
      description:
        "Tailored software solutions designed specifically for your unique business needs.",
      icon: Cpu,
      href: "/services/erp-solutions",
    },
    {
      num: "04",
      title: "ERP Solutions",
      description:
        "Enterprise Resource Planning systems to streamline your business operations.",
      icon: Layers3,
      href: "/services/erp-solutions",
    },
    {
      num: "05",
      title: "CRM Development",
      description:
        "Customer Relationship Management tools to enhance client engagement.",
      icon: Users,
      href: "/services/crm-solutions",
    },
    {
      num: "06",
      title: "AI Automation",
      description:
        "Intelligent automation workflows powered by cutting-edge AI technologies.",
      icon: BrainCircuit,
      href: "/services/ai-automation",
    },
    {
      num: "07",
      title: "Cloud Deployment",
      description:
        "Secure and scalable cloud infrastructure setup and migration services.",
      icon: Cloud,
      href: "/services/cyber-security",
    },
    {
      num: "08",
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive, and user-centric interfaces that drive engagement.",
      icon: Palette,
      href: "/services/web-development",
    },
    {
      num: "09",
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to accelerate your online growth.",
      icon: TrendingUp,
      href: "/services",
    },
    {
      num: "10",
      title: "Cyber Security",
      description:
        "Comprehensive security solutions to protect your digital assets and sensitive data.",
      icon: ShieldCheck,
      href: "/services/cyber-security",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] overflow-hidden border-b border-[#E8DCD1]">
      <div className="relative w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            MINIMAL HEADER
           ======================================================== */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#94613F] mb-3">
            <span className="w-5 h-[1px] bg-[#94613F]/50" />
            <span className="text-[9px] text-[#C89A62]">◆</span>
            <span className="tracking-[0.2em]">OUR FULL CAPABILITIES</span>
            <span className="text-[9px] text-[#C89A62]">◆</span>
            <span className="w-5 h-[1px] bg-[#94613F]/50" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#2D1E14] leading-[1.16] tracking-tight mb-3.5">
            Everything Your Business Needs
          </h2>

          <p className="text-sm sm:text-[15px] text-[#6B5E55] leading-relaxed font-normal">
            From strategy to launch, our full-stack expertise covers every layer
            of your digital product.
          </p>
        </div>

        {/* ========================================================
            12 SERVICES MINIMAL GRID (5 Cards Per Row on Large Screens)
           ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.num}
                className="group relative rounded-2xl p-5 bg-white/70 hover:bg-white border border-[#E8DCD1] hover:border-[#7A4B29]/35 shadow-[0_2px_12px_rgba(45,30,20,0.03)] hover:shadow-[0_8px_24px_rgba(45,30,20,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header: Icon + Clean Minimal Number */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF1E8] border border-[#E8DCD1]/80 text-[#7A4B29] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#7A4B29] group-hover:text-white">
                      <IconComponent className="h-4.5 w-4.5" strokeWidth={1.85} />
                    </div>

                    <span className="text-xs font-mono font-bold tracking-widest text-[#94613F]/80">
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-[15.5px] font-bold text-[#2D1E14] group-hover:text-[#7A4B29] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#6B5E55] leading-relaxed mt-1.5 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Minimal Footer Action */}
                <div className="pt-3.5 mt-4 border-t border-[#EEE5DC]/70 flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A4B29] hover:text-[#5A3620] group-hover:gap-2 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
