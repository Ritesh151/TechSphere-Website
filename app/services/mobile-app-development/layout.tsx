import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development",
};

export default function MobileAppDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

