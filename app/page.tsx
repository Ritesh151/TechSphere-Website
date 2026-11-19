import HeroSection from "@/components/hero/HeroSection";
import IndustryTicker from "@/components/home/IndustryTicker";
import AboutCompanySection from "@/components/home/AboutCompanySection";
import WhyTrustUsSection from "@/components/home/WhyTrustUsSection";
import EverythingBusinessNeedsSection from "@/components/home/EverythingBusinessNeedsSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden w-full">
      {/* ========================================================
          1. APPROVED HERO SECTION: DYNAMIC HEADLINE + VIDEO SHOWCASE
         ======================================================== */}
      <HeroSection />

      {/* ========================================================
          2. CONTINUOUS MOVING MINIMAL INDUSTRY TICKER
         ======================================================== */}
      <IndustryTicker />

      {/* ========================================================
          3. ABOUT COMPANY SECTION (ANIMATED ARCH & CHECKLIST)
         ======================================================== */}
      <AboutCompanySection />

      {/* ========================================================
          4. WHY BUSINESSES TRUST US SECTION (CODE IMAGE & 4 PILLARS)
         ======================================================== */}
      <WhyTrustUsSection />

      {/* ========================================================
          5. EVERYTHING YOUR BUSINESS NEEDS SECTION (12 SERVICES GRID)
         ======================================================== */}
      <EverythingBusinessNeedsSection />

      {/* ========================================================
          6. FREQUENTLY ASKED QUESTIONS (ACCORDION SECTION)
         ======================================================== */}
      <FAQSection />
    </div>
  );
}
