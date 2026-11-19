import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Automation",
};

export default function AIAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

