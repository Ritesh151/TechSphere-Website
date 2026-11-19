import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote",
};

export default function GetAQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

