import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coach OS for Fitness Coaches and Personal Trainers",
  description:
    "FormulaxA Coach OS is fitness coach software for client management, workout programming, assessments, weekly check-ins, and progress tracking.",
  alternates: {
    canonical: "/coach-os",
  },
  openGraph: {
    title: "FormulaxA Coach OS | Fitness Coach Software",
    description:
      "Manage clients, deliver workout programs, run check-ins, and track progress from one connected coaching workspace.",
    url: "/coach-os",
  },
  twitter: {
    card: "summary",
    title: "FormulaxA Coach OS | Fitness Coach Software",
    description:
      "Client management, workout programming, assessments, check-ins, and progress tracking for coaches and personal trainers.",
  },
};

export default function CoachOsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
