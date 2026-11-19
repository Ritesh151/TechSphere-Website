import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Security",
};

export default function CyberSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

