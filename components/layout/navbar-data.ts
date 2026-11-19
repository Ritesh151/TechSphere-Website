import {
  Building2,
  Users,
  Target,
  BriefcaseBusiness,
  ShieldCheck,
  Code2,
  Smartphone,
  BrainCircuit,
  Layers3,
  UsersRound,
  FolderKanban,
  FileText,
  Cpu,
  Award,
  type LucideIcon,
} from "lucide-react";

export interface MegaMenuCardItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export const aboutMegaMenuItems: MegaMenuCardItem[] = [
  {
    title: "About TechSphere",
    description: "Learn about our journey, vision and leadership story.",
    href: "/about",
    icon: Building2,
  },
  {
    title: "Our Team",
    description: "Meet the senior engineers and architects behind our success.",
    href: "/about/team",
    icon: Users,
  },
  {
    title: "Our Mission",
    description: "The core principles, vision, and architectural values that drive us.",
    href: "/about/mission",
    icon: Target,
  },
  {
    title: "Privacy Policy",
    description: "How we protect and govern your enterprise data and privacy.",
    href: "/privacy",
    icon: ShieldCheck,
  },
];

export const servicesMegaMenuItems: MegaMenuCardItem[] = [
  {
    title: "Website Development",
    description: "Modern responsive web apps & digital portals.",
    href: "/services/web-development",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description: "Native iOS & Android cross-platform solutions.",
    href: "/services/mobile-apps",
    icon: Smartphone,
  },
  {
    title: "AI Automation",
    description: "Smart machine learning & workflow automation.",
    href: "/services/ai-automation",
    icon: BrainCircuit,
  },
  {
    title: "ERP Solutions",
    description: "Enterprise resource planning & data operations.",
    href: "/services/erp-solutions",
    icon: Layers3,
  },
  {
    title: "CRM Solutions",
    description: "Customer relationship & retention systems.",
    href: "/services/crm-solutions",
    icon: UsersRound,
  },
  {
    title: "Cyber Security",
    description: "Proactive defense, audit & data compliance.",
    href: "/services/cyber-security",
    icon: ShieldCheck,
  },
];

export const portfolioMegaMenuItems: MegaMenuCardItem[] = [
  {
    title: "Our Projects",
    description: "Browse our featured client deliverables & launches.",
    href: "/portfolio/projects",
    icon: FolderKanban,
  },
  {
    title: "Case Studies",
    description: "In-depth ROI & technical architecture breakdowns.",
    href: "/portfolio/case-studies",
    icon: FileText,
  },
  {
    title: "Technologies",
    description: "Modern tech stack, frameworks & cloud platforms.",
    href: "/portfolio/technologies",
    icon: Cpu,
  },
  {
    title: "Client Success Stories",
    description: "Verified client testimonials & industry recognition.",
    href: "/portfolio/testimonials",
    icon: Award,
  },
];
