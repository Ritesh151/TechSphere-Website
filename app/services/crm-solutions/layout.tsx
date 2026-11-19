import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Solutions",
};

export default function CRMSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

