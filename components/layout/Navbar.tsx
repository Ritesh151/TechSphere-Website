"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  House,
  Users,
  Layers,
  Grid2X2,
  Mail,
  Phone,
  Send,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import {
  aboutMegaMenuItems,
  servicesMegaMenuItems,
  portfolioMegaMenuItems,
  type MegaMenuCardItem,
} from "./navbar-data";
import NavbarBrandingAnimation from "./NavbarBrandingAnimation";

interface NavItem {
  name: string;
  href: string;
  icon: typeof House;
  hasDropdown?: boolean;
  dropdownType?: "about" | "services" | "portfolio";
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: House,
  },
  {
    name: "About",
    href: "/about",
    icon: Users,
    hasDropdown: true,
    dropdownType: "about",
  },
  {
    name: "Services",
    href: "/services",
    icon: Layers,
    hasDropdown: true,
    dropdownType: "services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: Grid2X2,
    hasDropdown: true,
    dropdownType: "portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileAccordion(null);
  }, [pathname]);

  // Handle outside click to close dropdown
  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (
      navContainerRef.current &&
      !navContainerRef.current.contains(e.target as Node)
    ) {
      setActiveDropdown(null);
    }
  }, []);

  // Handle Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleOutsideClick, handleKeyDown]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileAccordion = (name: string) => {
    setMobileAccordion((prev) => (prev === name ? null : name));
  };

  // Render individual Mega Menu Card
  const renderCard = (card: MegaMenuCardItem, index: number, isSpanTwo = false) => {
    const IconComp = card.icon;
    return (
      <Link
        key={`${card.title}-${index}`}
        href={card.href}
        onClick={() => setActiveDropdown(null)}
        className={`group flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EEE5DC] hover:border-[#5A3620]/60 hover:bg-[#FAF3EC] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 ease-out ${isSpanTwo ? "md:col-span-2" : ""
          }`}
      >
        {/* Card Icon Container */}
        <div className="w-11 h-11 rounded-xl bg-[#5A3620] text-white flex items-center justify-center flex-shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#432717]">
          <IconComp className="h-5 w-5" strokeWidth={1.85} />
        </div>

        {/* Card Text Content */}
        <div className="flex-1 min-w-0 text-left">
          <div className="flex items-center justify-between gap-1">
            <h4 className="text-sm font-bold text-[#2D1E14] group-hover:text-[#5A3620] transition-colors leading-snug">
              {card.title}
            </h4>
            <ArrowRight
              className="h-3.5 w-3.5 text-[#5A3620] opacity-80 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
              strokeWidth={2.5}
            />
          </div>
          <p className="text-xs text-[#78695F] leading-relaxed mt-1 line-clamp-2">
            {card.description}
          </p>
        </div>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-[100] w-full">
      {/* Sticky Navbar Background with Glass Effect (separated to avoid creating containing block) */}
      <div className="absolute inset-0 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8DCD1] shadow-[0_4px_20px_rgba(45,30,20,0.05)] pointer-events-none -z-10" />
      <div ref={navContainerRef} className="relative w-full">
        {/* Full-width rectangular navbar */}
        <nav
          className="w-full flex items-center justify-between bg-transparent h-[64px] sm:h-[70px] lg:h-[72px]"
          aria-label="Global Navigation"
        >
          {/* ========================================================
              A. LEFT BRANDING SECTION (Hero Warm Obsidian & Gold Theme)
              Full height, rectangular, flush to the left edge
             ======================================================== */}
          <div className="relative flex items-center h-full flex-shrink-0 pl-3 xs:pl-5 sm:pl-8 lg:pl-10 pr-9 sm:pr-14 lg:pr-16 min-w-[170px] xs:min-w-[190px] sm:min-w-[245px] lg:min-w-[275px] xl:min-w-[290px] z-10 overflow-hidden">
            {/* Balanced Warm Espresso & Dark Chestnut Bronze Gradient */}
            <div className="absolute inset-y-0 left-0 right-6 sm:right-10 lg:right-12 bg-gradient-to-r from-[#2C1A0F] via-[#432717] to-[#5A3620]" />

            {/* Right Angled/Curved Transition Cap (Seamless SVG) */}
            <div className="absolute inset-y-0 right-0 w-6 sm:w-10 lg:w-12 h-full pointer-events-none">
              <svg
                viewBox="0 0 32 72"
                preserveAspectRatio="none"
                className="w-full h-full block"
                aria-hidden="true"
              >
                <path
                  d="M0,0 L14,0 C24,0 30,8 28,20 L14,56 C11,66 5,72 0,72 Z"
                  fill="#5A3620"
                />
              </svg>
            </div>

            {/* Continuous Golden Particle, Wave & Network Animation */}
            <NavbarBrandingAnimation />

            {/* Logo & Company Branding Content */}
            <Link
              href="/"
              className="relative z-10 flex items-center gap-3 sm:gap-3.5 group focus:outline-none"
              aria-label="TechSphere Home"
            >
              <div className="relative h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/logo/logo-icon-trimmed.png"
                  alt="TechSphere Logo"
                  width={30}
                  height={36}
                  style={{ width: "auto", height: "auto" }}
                  className="max-h-full object-contain brightness-0 invert drop-shadow-[0_2px_8px_rgba(200,154,98,0.45)] transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-[16px] sm:text-[18px] font-bold text-white tracking-tight leading-none">
                  TechSphere
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-[#E5C18D] uppercase leading-none mt-1">
                  IT Solutions
                </span>
              </div>
            </Link>
          </div>

          {/* ========================================================
              B. CENTER NAVIGATION SECTION (Desktop) - Mathematically Centered
             ======================================================== */}
          <div className="hidden lg:flex items-center justify-center gap-1.5 xl:gap-3 absolute left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const isDropdownOpen = activeDropdown === item.name;
              const IconComponent = item.icon;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.name)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleDropdown(item.name);
                        }
                      }}
                      className={`relative inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3620] cursor-pointer ${active || isDropdownOpen
                        ? "text-[#5A3620] font-semibold"
                        : "text-[#2D1E14] hover:text-[#5A3620]"
                        }`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                    >
                      <IconComponent
                        className={`h-[18px] w-[18px] transition-colors ${active || isDropdownOpen
                          ? "text-[#5A3620]"
                          : "text-[#78695F] group-hover:text-[#5A3620]"
                          }`}
                        strokeWidth={1.85}
                      />
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isDropdownOpen
                          ? "rotate-180 text-[#5A3620]"
                          : "text-[#78695F]"
                          }`}
                        strokeWidth={2}
                      />

                      {/* Active Bronze Underline Indicator */}
                      {active && (
                        <span
                          className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#5A3620] rounded-full"
                          aria-hidden="true"
                        />
                      )}
                    </button>

                    {/* ====================================================
                        PREMIUM MEGA MENU DROPDOWN PANEL (Ultra-Smooth Animation)
                       ==================================================== */}
                    <div
                      className={`absolute top-full pt-3 z-[110] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isDropdownOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto visible"
                        : "opacity-0 -translate-y-2.5 scale-[0.97] pointer-events-none invisible"
                        } ${item.dropdownType === "services"
                          ? "left-1/2 -translate-x-1/2 w-[820px] max-w-[calc(100vw-2rem)]"
                          : "left-1/2 -translate-x-1/2 w-[620px] max-w-[calc(100vw-2rem)]"
                        }`}
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Dropdown Container */}
                      <div className="relative rounded-[24px] bg-white p-5 sm:p-6 shadow-[0_24px_60px_rgba(45,30,20,0.14),0_8px_24px_rgba(45,30,20,0.06)] border border-[#E8DCD1] transition-transform duration-300">
                        {/* Centered Small Pointer Triangle */}
                        <div
                          className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-t border-l border-[#E8DCD1] z-20 shadow-[-2px_-2px_4px_rgba(45,30,20,0.03)]"
                          aria-hidden="true"
                        />

                        {/* A. About Mega Menu (Two columns - 2x2 balanced grid) */}
                        {item.dropdownType === "about" && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                            {aboutMegaMenuItems.map((card, i) =>
                              renderCard(card, i, false)
                            )}
                          </div>
                        )}

                        {/* B. Services Mega Menu (Three columns) */}
                        {item.dropdownType === "services" && (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                            {servicesMegaMenuItems.map((card, i) =>
                              renderCard(card, i)
                            )}
                          </div>
                        )}

                        {/* C. Portfolio Mega Menu (Two columns) */}
                        {item.dropdownType === "portfolio" && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                            {portfolioMegaMenuItems.map((card, i) =>
                              renderCard(card, i)
                            )}
                          </div>
                        )}

                        {/* Bottom Action Footer for Services Dropdown */}
                        {item.dropdownType === "services" && (
                          <div className="mt-4 pt-4 border-t border-[#EEE5DC] flex items-center justify-between text-xs text-[#78695F]">
                            <span>Need a specialized enterprise architecture?</span>
                            <Link
                              href="/contact"
                              onClick={() => setActiveDropdown(null)}
                              className="font-semibold text-[#5A3620] hover:text-[#432717] inline-flex items-center gap-1 group/link"
                            >
                              <span>Talk to our technical architects</span>
                              <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              // Simple non-dropdown nav link (Home, Contact)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3620] ${active
                    ? "text-[#5A3620] font-semibold"
                    : "text-[#2D1E14] hover:text-[#5A3620]"
                    }`}
                >
                  <IconComponent
                    className={`h-[18px] w-[18px] transition-colors ${active ? "text-[#5A3620]" : "text-[#78695F]"
                      }`}
                    strokeWidth={1.85}
                  />
                  <span>{item.name}</span>

                  {/* Active Bronze Underline Indicator */}
                  {active && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#5A3620] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ========================================================
              C. RIGHT CONTACT & CTA SECTION (Hero Theme)
             ======================================================== */}
          <div className="ml-auto hidden lg:flex items-center gap-3 xl:gap-4 pr-5 sm:pr-8 lg:pr-10 flex-shrink-0 z-10">
            {/* Vertical Separator */}
            <div className="h-6 w-[1px] bg-[#E8DCD1] mr-1" aria-hidden="true" />

            {/* Phone Contact */}
            <a
              href="tel:+919662873599"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D1E14] hover:text-[#5A3620] transition-colors group focus:outline-none"
              aria-label="Call TechSphere at +91 9662873599"
            >
              <Phone
                className="h-[18px] w-[18px] text-[#5A3620] transition-transform duration-200 group-hover:scale-110"
                strokeWidth={2}
              />
              <span className="whitespace-nowrap tracking-tight font-medium text-[13px] xl:text-sm">
                +91 9662873599
              </span>
            </a>

            {/* Outlined Bronze CTA Button */}
            <Link
              href="/get-a-quote"
              className="group inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#5A3620] bg-white px-5 py-2 text-sm font-semibold text-[#5A3620] shadow-xs transition-all duration-200 hover:bg-[#5A3620] hover:text-white active:scale-[0.98] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3620]"
            >
              <Send
                className="h-4 w-4 text-[#5A3620] transition-colors duration-200 group-hover:text-white"
                strokeWidth={2}
              />
              <span>Get a Quote</span>
            </Link>
          </div>

          {/* ========================================================
              MOBILE HAMBURGER TOGGLE BUTTON (Accessible & Smooth Morph)
             ======================================================== */}
          <div className="ml-auto flex lg:hidden pr-2 sm:pr-4 items-center z-50">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="relative inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl text-[#2D1E14] hover:bg-[#FAF3EC] hover:text-[#5A3620] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3620] transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {/* Animated 3-line hamburger morphing to X */}
              <div className="w-5 h-4 relative flex flex-col justify-between pointer-events-none" aria-hidden="true">
                <span
                  className={`h-[2px] w-full bg-current rounded-full transition-all duration-300 transform origin-left ${
                    mobileMenuOpen ? "rotate-45 translate-x-0.5 -translate-y-0.5" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full bg-current rounded-full transition-all duration-200 ${
                    mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-[2px] w-full bg-current rounded-full transition-all duration-300 transform origin-left ${
                    mobileMenuOpen ? "-rotate-45 translate-x-0.5 translate-y-0.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* ========================================================
            ACCESSIBLE BACKDROP OVERLAY
           ======================================================== */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[64px] sm:top-[70px] bg-black/50 z-[105] lg:hidden anim-mobile-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* ========================================================
            MOBILE ACCORDION-STYLE NAVIGATION DRAWER (Fully Animated & Accessible)
           ======================================================== */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="fixed inset-x-0 top-[64px] sm:top-[70px] bottom-0 z-[110] lg:hidden border-t border-[#E8DCD1] bg-[#FAF8F5] px-4 sm:px-6 py-5 shadow-2xl overflow-y-auto anim-mobile-drawer"
            style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                const IconComponent = item.icon;
                const isExpanded = mobileAccordion === item.name;

                if (item.hasDropdown) {
                  let subCards: MegaMenuCardItem[] = [];
                  if (item.dropdownType === "about") subCards = aboutMegaMenuItems;
                  if (item.dropdownType === "services") subCards = servicesMegaMenuItems;
                  if (item.dropdownType === "portfolio") subCards = portfolioMegaMenuItems;

                  return (
                    <div
                      key={item.name}
                      style={{ animationDelay: `${index * 50}ms` }}
                      className="anim-mobile-item rounded-2xl bg-white border border-[#E8DCD1] shadow-2xs overflow-hidden transition-colors"
                    >
                      {/* Entire header toggles the accordion for effortless mobile tapping */}
                      <button
                        type="button"
                        onClick={() => toggleMobileAccordion(item.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors cursor-pointer ${
                          active || isExpanded
                            ? "bg-[#FAF3EC] text-[#5A3620]"
                            : "bg-white text-[#2D1E14] hover:bg-[#FAF6F1]"
                        }`}
                        aria-expanded={isExpanded}
                        aria-label={`Toggle ${item.name} submenu`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent
                            className={`h-[18px] w-[18px] ${
                              active || isExpanded ? "text-[#5A3620]" : "text-[#78695F]"
                            }`}
                            strokeWidth={1.85}
                          />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isExpanded ? "rotate-180 text-[#5A3620]" : "text-[#78695F]"
                          }`}
                        />
                      </button>

                      {/* Accordion Expansion (Clean mount so no ghost touch collisions) */}
                      {isExpanded && (
                        <div className="p-2.5 space-y-2 bg-[#FAF7F2] border-t border-[#EEE5DC]">
                          {/* Quick 'Explore All' link */}
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#FAF3EC] hover:bg-[#F3E7DC] text-[#5A3620] text-xs font-bold transition-colors cursor-pointer active:scale-[0.99]"
                          >
                            <span>Explore all {item.name}</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>

                          {subCards.map((card, i) => {
                            const CardIcon = card.icon;
                            return (
                              <Link
                                key={`${card.title}-${i}`}
                                href={card.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl bg-white border border-[#EEE5DC] hover:border-[#5A3620]/60 hover:bg-[#FAF3EC] transition-all group active:scale-[0.99] cursor-pointer"
                              >
                                <div className="w-9 h-9 rounded-lg bg-[#5A3620] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                                  <CardIcon className="h-4 w-4" strokeWidth={1.85} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-bold text-[#2D1E14] group-hover:text-[#5A3620] transition-colors flex items-center justify-between">
                                    <span>{card.title}</span>
                                    <ArrowRight className="h-3 w-3 text-[#5A3620] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                                  </div>
                                  <p className="text-[11px] text-[#78695F] leading-tight mt-0.5">
                                    {card.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`anim-mobile-item flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold border transition-all cursor-pointer ${
                      active
                        ? "bg-[#FAF3EC] text-[#5A3620] border-[#5A3620]/40 shadow-xs"
                        : "bg-white text-[#2D1E14] border-[#E8DCD1] hover:bg-[#FAF6F1]"
                    }`}
                  >
                    <IconComponent
                      className={`h-[18px] w-[18px] ${
                        active ? "text-[#5A3620]" : "text-[#78695F]"
                      }`}
                      strokeWidth={1.85}
                    />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* Mobile Contact & CTA Section */}
              <div
                style={{ animationDelay: "280ms" }}
                className="anim-mobile-item pt-4 border-t border-[#E8DCD1] mt-2 space-y-3"
              >
                <a
                  href="tel:+919662873599"
                  className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl bg-white border border-[#E8DCD1] text-sm font-bold text-[#2D1E14] hover:border-[#5A3620] hover:text-[#5A3620] shadow-2xs transition-all active:scale-[0.98] cursor-pointer"
                  aria-label="Call TechSphere at +91 9662873599"
                >
                  <div className="w-7 h-7 rounded-full bg-[#FAF3EC] text-[#5A3620] flex items-center justify-center">
                    <Phone className="h-3.5 w-3.5" strokeWidth={2} />
                  </div>
                  <span>+91 9662873599</span>
                </a>

                <Link
                  href="/get-a-quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="anim-badge-pulse flex items-center justify-center gap-2 rounded-full bg-[#5A3620] hover:bg-[#432717] py-3.5 px-6 text-sm font-bold text-white shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Send className="h-4 w-4 text-white" strokeWidth={2} />
                  <span>Get a Dedicated Quote</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header >
  );
}
