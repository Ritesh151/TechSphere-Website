import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TechSphere - from a small vision to global impact, our mission, vision, core competencies, and core values.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
