import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Services",
    template: "TechSphere | %s",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

