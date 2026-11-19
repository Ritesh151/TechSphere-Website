import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Apps",
};

export default function MobileAppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

