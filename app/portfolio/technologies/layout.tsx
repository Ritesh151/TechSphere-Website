import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies",
};

export default function TechnologiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

