import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormulaXA | The Operating System for Fitness",
  description:
    "FormulaXA connects athletes, trainers, coaches, gyms, and fitness brands in one operating system for the fitness industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
