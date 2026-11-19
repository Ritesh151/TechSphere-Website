import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "TechSphere | %s",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

