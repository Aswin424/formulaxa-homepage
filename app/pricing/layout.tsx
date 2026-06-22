import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing for Fitizen, Coach OS, and Enterprise OS",
  description:
    "Explore FormulaxA pricing for the Fitizen 6-week personalized fitness program, Coach OS, Enterprise OS, and personalization for fitness businesses.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "FormulaxA Pricing",
    description:
      "Plans for personalized fitness programs, fitness coach software, gym management, and connected fitness business growth.",
    url: "/pricing",
  },
};

export default function PricingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
