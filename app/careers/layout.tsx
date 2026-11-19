import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
};

export default function RootCareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

