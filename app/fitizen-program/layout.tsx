import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "6-Week Personalized Fitness Program in India",
  description:
    "Join FormulaxA Fitizen, a 6-week personalized fitness program with consultation, assessment, workouts, weekly check-ins, and progress tracking.",
  alternates: {
    canonical: "/fitizen-program",
  },
  openGraph: {
    title: "FormulaxA Fitizen | 6-Week Personalized Fitness Program",
    description:
      "A sports science-led fitness program with assessment, personalized workouts, weekly check-ins, and measurable progress tracking.",
    url: "/fitizen-program",
  },
  twitter: {
    card: "summary",
    title: "FormulaxA Fitizen | 6-Week Personalized Fitness Program",
    description:
      "Personalized fitness programming, weekly check-ins, and progress tracking for Fitizens in India.",
  },
};

export default function FitizenProgramLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
