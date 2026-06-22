import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download the FormulaXA app for Android. iOS app coming soon.",
  openGraph: {
    title: "Download FormulaXA App",
    description:
      "Get FormulaXA on Android. iOS app coming soon.",
    images: [
      {
        url: "/assets/formulaxa-nav-mark.png",
        width: 256,
        height: 202,
        alt: "FormulaXA logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export { default } from "./page";
