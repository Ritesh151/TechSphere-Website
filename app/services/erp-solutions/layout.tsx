import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP Solutions",
};

export default function ERPSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

