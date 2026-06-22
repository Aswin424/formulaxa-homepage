import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise OS for Gyms and Fitness Businesses",
  description:
    "FormulaxA Enterprise OS is a fitness business operating system for gyms, studios, member management, staff, attendance, payments, CRM, and analytics.",
  alternates: {
    canonical: "/enterprise-os",
  },
  openGraph: {
    title: "FormulaxA Enterprise OS | Fitness Business Operating System",
    description:
      "Run members, staff, attendance, subscriptions, payments, leads, and analytics from one connected fitness business OS.",
    url: "/enterprise-os",
  },
  twitter: {
    card: "summary",
    title: "FormulaxA Enterprise OS | Gym Management Software",
    description:
      "A fitness business operating system for gyms, studios, academies, staff, members, CRM, payments, and analytics.",
  },
};

export default function EnterpriseOsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
