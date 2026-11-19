import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission & Vision",
};

export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

