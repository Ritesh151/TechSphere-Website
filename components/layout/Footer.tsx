"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Heart,
  ExternalLink,
} from "lucide-react";
import FooterAnimation from "./FooterAnimation";

// Social Media Icons SVGs (clean, accessible, matching Option 5)
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Website Development", href: "/services/web-development" },
  { name: "Mobile Apps", href: "/services/mobile-app-development" },
  { name: "AI Automation", href: "/services/ai-automation" },
  { name: "ERP", href: "/services/erp-solutions" },
  { name: "CRM", href: "/services/crm-solutions" },
  { name: "Cyber Security", href: "/services/cyber-security" },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-[#170E08] text-[#F7F0E7] overflow-hidden border-t border-[#C89A62]/30 mt-auto"
      style={{
        background:
          "linear-gradient(180deg, #1A1009 0%, #170E08 45%, #120A05 100%)",
      }}
      aria-label="Footer"
    >
      {/* ========================================================
          CONTINUOUS GOLDEN PARTICLES & WAVE ANIMATION (Canvas)
         ======================================================== */}
      <FooterAnimation />

      {/* Subtle Warm Top Glow Overlay */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[160px] bg-gradient-to-b from-[#C89A62]/10 via-[#C89A62]/5 to-transparent blur-3xl -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 pt-14 pb-8">
        {/* ========================================================
            SECTION A: MAIN FOOTER (Option 5 Five-Column Layout + Minimap)
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 pb-12">
          {/* ----------------------------------------------------
              Column 1: Company Branding & Description (Col span: 3)
             ---------------------------------------------------- */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              {/* Logo + Tagline */}
              <Link href="/" className="inline-flex items-center gap-3 group focus:outline-none">
                <div className="relative h-11 w-11 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(200,154,98,0.5)]">
                  <Image
                    src="/logo/logo-icon-trimmed.png"
                    alt="TechSphere Logo"
                    width={37}
                    height={44}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-full object-contain"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xl font-bold tracking-tight text-[#F7F0E7] group-hover:text-[#E5C18D] transition-colors leading-tight">
                    TechSphere
                  </span>
                  <span className="text-[11px] font-medium tracking-wide text-[#B9AA99] leading-none mt-1">
                    connecting in a better way
                  </span>
                </div>
              </Link>
            </div>

            {/* Description */}
            <div className="pt-2">
              <p className="text-xs sm:text-[13px] text-[#B9AA99] leading-relaxed max-w-sm">
                Empowering global enterprises with cutting-edge software engineering,
                AI automation, and cloud architectures.
              </p>
            </div>
          </div>

          {/* ----------------------------------------------------
              Column 2: Quick Links (Col span: 2)
             ---------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-[#F7F0E7] uppercase flex items-center gap-2">
              <span>Quick Links</span>
              <span className="h-[2px] w-4 bg-[#C89A62]/60 rounded-full" />
            </h4>
            <ul className="space-y-2 pt-1">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-[#B9AA99] hover:text-[#E5C18D] transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 text-[#C89A62]/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#E5C18D]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ----------------------------------------------------
              Column 3: Services (Col span: 2)
             ---------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-[#F7F0E7] uppercase flex items-center gap-2">
              <span>Services</span>
              <span className="h-[2px] w-4 bg-[#C89A62]/60 rounded-full" />
            </h4>
            <ul className="space-y-2 pt-1">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-[#B9AA99] hover:text-[#E5C18D] transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 text-[#C89A62]/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#E5C18D]" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ----------------------------------------------------
              Column 4: Contact Us & Socials (Col span: 2)
             ---------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-[#F7F0E7] uppercase flex items-center gap-2">
              <span>Contact Us</span>
              <span className="h-[2px] w-4 bg-[#C89A62]/60 rounded-full" />
            </h4>

            <div className="space-y-2.5 pt-1 text-xs sm:text-[13px] text-[#B9AA99]">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#C89A62] flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                <span>Ahmedabad, Gujarat, India</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#C89A62] flex-shrink-0" strokeWidth={1.8} />
                <a
                  href="tel:+919662873599"
                  className="hover:text-[#E5C18D] transition-colors font-medium"
                >
                  +91 9662873599
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#C89A62] flex-shrink-0" strokeWidth={1.8} />
                <a
                  href="mailto:techspheretechnology@gmail.com"
                  className="hover:text-[#E5C18D] transition-colors break-all"
                >
                  techspheretechnology@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Outlined Rounded Buttons */}
            <div className="pt-1 flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TechSphere on GitHub"
                className="flex items-center justify-center h-8 w-8 rounded-lg border border-[#C89A62]/35 bg-[#24160D]/60 text-[#B9AA99] hover:text-[#E5C18D] hover:border-[#E5C18D] hover:bg-[#C89A62]/15 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none"
              >
                <GithubIcon className="h-3.5 w-3.5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TechSphere on LinkedIn"
                className="flex items-center justify-center h-8 w-8 rounded-lg border border-[#C89A62]/35 bg-[#24160D]/60 text-[#B9AA99] hover:text-[#E5C18D] hover:border-[#E5C18D] hover:bg-[#C89A62]/15 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TechSphere on Instagram"
                className="flex items-center justify-center h-8 w-8 rounded-lg border border-[#C89A62]/35 bg-[#24160D]/60 text-[#B9AA99] hover:text-[#E5C18D] hover:border-[#E5C18D] hover:bg-[#C89A62]/15 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TechSphere on YouTube"
                className="flex items-center justify-center h-8 w-8 rounded-lg border border-[#C89A62]/35 bg-[#24160D]/60 text-[#B9AA99] hover:text-[#E5C18D] hover:border-[#E5C18D] hover:bg-[#C89A62]/15 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none"
              >
                <YoutubeIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* ----------------------------------------------------
              Column 5: Interactive Minimap (Col span: 3)
             ---------------------------------------------------- */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-[#F7F0E7] uppercase flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span>Our Location</span>
                <span className="h-[2px] w-4 bg-[#C89A62]/60 rounded-full" />
              </span>
              <a
                href="https://share.google/byPqRK1ST6I6KwrYV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-medium text-[#C89A62] hover:text-[#E5C18D] transition-colors inline-flex items-center gap-1 normal-case tracking-normal"
              >
                <span>Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </h4>

            {/* Embedded Luxury Minimap Card */}
            <div className="relative w-full h-36 rounded-xl overflow-hidden border border-[#C89A62]/35 bg-[#24160D] group shadow-lg transition-all duration-300 hover:border-[#E5C18D] hover:shadow-[0_0_15px_rgba(200,154,98,0.2)]">
              <iframe
                src="https://maps.google.com/maps?q=TechSphere+Technology+Ahmedabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) contrast(88%) brightness(95%)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TechSphere Technology Location Map"
                className="w-full h-full opacity-85 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Floating Interactive Badge linked to Google Maps */}
              <a
                href="https://share.google/byPqRK1ST6I6KwrYV"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-x-2 bottom-2 z-10 flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#170E08]/90 border border-[#C89A62]/50 text-xs font-medium text-[#F7F0E7] shadow-md backdrop-blur-md group-hover:bg-[#C89A62] group-hover:text-[#170E08] transition-all duration-200"
                aria-label="Open TechSphere Technology on Google Maps"
              >
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#E5C18D] group-hover:text-[#170E08] transition-colors" />
                  <span className="font-semibold text-[11px]">TechSphere Technology</span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-90">Open ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            SECTION B: BOTTOM FOOTER (With Animated Golden Accent Line)
           ======================================================== */}
        <div className="relative pt-6 mt-4 border-t border-[#C89A62]/30">
          {/* Subtle Traveling Shimmer Line Highlight */}
          <div
            className="absolute -top-[1px] left-0 right-0 h-[1.5px] overflow-hidden pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#E5C18D] to-transparent animate-[shimmerLine_4s_infinite_linear]"
              style={{
                filter: "drop-shadow(0 0 6px #E5C18D)",
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B9AA99]">
            {/* Left Copyright */}
            <div>
              <p>© 2026 TechSphere. All rights reserved.</p>
            </div>

            {/* Center Policy Links */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
              <Link href="/privacy" className="hover:text-[#E5C18D] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-[#C89A62]/40" aria-hidden="true">|</span>
              <Link href="/terms" className="hover:text-[#E5C18D] transition-colors">
                Terms of Service
              </Link>
              <span className="text-[#C89A62]/40" aria-hidden="true">|</span>
              <Link href="/cookies" className="hover:text-[#E5C18D] transition-colors">
                Cookie Policy
              </Link>
            </div>

            {/* Right Crafted Tag */}
            <div className="inline-flex items-center gap-1.5 text-xs text-[#B9AA99]">
              <span>Crafted with a</span>
              <Heart className="h-3 w-3 text-[#C89A62] fill-[#C89A62]/60 inline animate-pulse" />
              <span>by TechSphere</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
