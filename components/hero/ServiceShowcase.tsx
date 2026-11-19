"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Globe,
  Smartphone,
  Monitor,
  BrainCircuit,
  ArrowRight,
  ArrowUpRight,
  Star,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: typeof Globe;
  href: string;
}

const showcaseServices: ServiceItem[] = [
  {
    id: "web",
    number: "01",
    title: "Website Development",
    description: "Responsive, blazing-fast web experiences",
    icon: Globe,
    href: "/services#web",
  },
  {
    id: "mobile",
    number: "02",
    title: "Mobile Application",
    description: "Native & cross-platform mobile solutions",
    icon: Smartphone,
    href: "/services#mobile",
  },
  {
    id: "software",
    number: "03",
    title: "Custom Software",
    description: "Tailored software for your business needs",
    icon: Monitor,
    href: "/services#software",
  },
  {
    id: "ai",
    number: "04",
    title: "AI Automation",
    description: "Intelligent automation powered by AI",
    icon: BrainCircuit,
    href: "/services#ai",
  },
];

export default function ServiceShowcase() {
  return (
    <div className="relative w-full max-w-[500px] lg:max-w-[540px] xl:max-w-[560px] mx-auto">
      {/* Main Glass Panel */}
      <div className="relative rounded-[28px] bg-white/95 backdrop-blur-md p-5 sm:p-7 shadow-[0_24px_60px_rgba(45,30,20,0.08),0_6px_20px_rgba(45,30,20,0.04)] border border-[#E8DCD1] transition-all duration-300">
        {/* Panel Header */}
        <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#F0E6DD]">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#FAF3EC] border border-[#E8DCD1] text-[#94613F] flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Sparkles className="h-5 w-5" strokeWidth={1.85} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#2D1E14] leading-tight">
                End to end Digital Solutions
              </h3>
              <p className="text-[11px] sm:text-xs text-[#785A44] font-medium mt-0.5">
                for Modern Start-Up &amp; Enterprise
              </p>
            </div>
          </div>

          {/* Architecture building photo in top-right */}
          <div className="relative w-20 h-12 rounded-xl overflow-hidden border border-[#E8DCD1] flex-shrink-0 shadow-xs hidden sm:block">
            <Image
              src="/images/building.jpg"
              alt="Modern Enterprise Architecture"
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        </div>

        {/* 4 Service Rows */}
        <div className="space-y-2.5 pt-4">
          {showcaseServices.map((service) => {
            const IconComp = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-[#FDFBF9] border border-[#EFE5DB] hover:bg-[#FAF4EE] hover:border-[#B99073]/50 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  {/* Icon Container */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF1E8] border border-[#E8DCD1] text-[#94613F] flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[#94613F] group-hover:text-white">
                    <IconComp className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.85} />
                  </div>

                  {/* Title & Description */}
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-[#2D1E14] group-hover:text-[#94613F] transition-colors truncate">
                      {service.title}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-[#785A44] truncate mt-0.5">
                      {service.description}
                    </div>
                  </div>
                </div>

                {/* Right Arrow & Number */}
                <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#E8DCD1] bg-white text-[#94613F] flex items-center justify-center transition-all duration-200 group-hover:bg-[#94613F] group-hover:text-white group-hover:translate-x-0.5 shadow-2xs">
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="font-serif text-[#C4AC99] font-bold text-xs sm:text-sm tracking-wider">
                    {service.number}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Floating 4.9 Client Rating Badge (Overlapping Bottom-Left) */}
      <div className="absolute -bottom-5 left-2 sm:left-4 z-20 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white shadow-[0_12px_28px_rgba(45,30,20,0.1)] border border-[#E8DCD1] backdrop-blur-md">
        <div className="w-8 h-8 rounded-xl bg-[#FAF1E8] text-[#94613F] flex items-center justify-center font-bold shadow-2xs">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1 font-extrabold text-sm text-[#2D1E14] leading-none">
            <span>4.9</span>
            <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500 inline -mt-0.5" />
          </div>
          <span className="text-[10px] font-semibold text-[#785A44] leading-tight mt-0.5">
            Client Rating
          </span>
        </div>
      </div>
    </div>
  );
}

