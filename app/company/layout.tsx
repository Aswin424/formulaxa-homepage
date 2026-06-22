import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about FormulaxA, the fitness operating system built by athletes, coaches, and founders focused on personalized programs, consultation, assessment, and measurable progress.",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "About FormulaxA",
    description:
      "The founder-led story behind FormulaxA and its mission to make fitness more connected, accountable, and effective.",
    url: "/company",
  },
};

export default function CompanyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
