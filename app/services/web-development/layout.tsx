import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development",
};

export default function WebDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

