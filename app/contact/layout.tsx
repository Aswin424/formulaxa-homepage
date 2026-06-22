import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact FormulaxA for Fitizen, Coach OS, Enterprise OS, personalization, online fitness coaching, and gym management software inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact FormulaxA",
    description:
      "Talk to FormulaxA about personalized fitness programs, coach software, and fitness business management.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
