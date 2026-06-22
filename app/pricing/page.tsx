"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Dumbbell,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { trackNavigationClick, trackPricingCtaClick } from "@/lib/analytics";

const whatsappHref = (message: string) =>
  `https://wa.me/919080939490?text=${encodeURIComponent(message)}`;

const fitizenSalesHref = whatsappHref(
  "Hi FormulaXA, I want to join the Fitizen Program. Please share details about the 6-week plan.",
);
const coachSalesHref = whatsappHref("Hi FormulaXA, I want to know more about Coach OS pricing and setup.");
const enterpriseSalesHref = whatsappHref(
  "Hi FormulaXA, I want to know more about Enterprise OS for my gym or fitness business.",
);
const personalizationSalesHref = whatsappHref(
  "Hi FormulaXA, I want to know more about Personalization for my fitness experience or business.",
);

const plans = [
  {
    name: "Fitizen Program",
    price: {
      sixWeek: "?7,999",
      annual: "?71,991/year",
    },
    description:
      "A personalized 6-week fitness program led by experienced sports scientists and S&C coaches to help you build consistency, improve performance, and achieve measurable results.",
    icon: Dumbbell,
    href: fitizenSalesHref,
    cta: {
      sixWeek: "Join Fitizen",
      annual: "Join Fitizen",
    },
    note: {
      sixWeek: "6-week guided program",
      annual: "Based on 9 guided 6-week cycles",
    },
    slabs: {
      sixWeek: [],
      annual: [],
    },
    features: {
      sixWeek: [
        "6-week structured program",
        "Personalized workout plan",
        "Weekly check-ins",
        "Progress dashboard",
        "Coach guidance and feedback",
        "Lifestyle and habit tracking",
        "App access included",
      ],
      annual: [
        "Long-term coaching structure",
        "Personalized training roadmap",
        "Ongoing check-ins",
        "Progress dashboard",
        "Coach guidance and feedback",
        "Lifestyle and habit tracking",
        "App access included",
      ],
    },
  },
  {
    name: "Coach OS",
    price: {
      sixWeek: "?299 + usage",
      annual: "?3,588/year + usage",
    },
    description: "For personal trainers and coaches scaling delivery from one connected workspace.",
    icon: Users,
    href: coachSalesHref,
    cta: {
      sixWeek: "Start Coach OS",
      annual: "Start Coach OS",
    },
    note: {
      sixWeek: "6-week coach account fee, then client usage by slab",
      annual: "Annualized from ?299/month, then yearly client usage by slab",
    },
    slabs: {
      sixWeek: [
        ["1 client", "Free"],
        ["2-5 clients", "?300/client"],
        ["6-15 clients", "?200/client"],
        ["15+ clients", "?150/client"],
      ],
      annual: [
        ["1 client", "Free"],
        ["2-5 clients", "?3,600/client/year"],
        ["6-15 clients", "?2,400/client/year"],
        ["15+ clients", "?1,800/client/year"],
      ],
    },
    features: {
      sixWeek: [
        "Client management",
        "Workout builder",
        "Weekly check-ins",
        "Progress tracking",
        "Assessments",
        "Client notes",
        "Program templates",
        "Attendance tracking",
      ],
      annual: [
        "Client management",
        "Workout builder",
        "Weekly check-ins",
        "Progress tracking",
        "Assessments",
        "Client notes",
        "Program templates",
        "Attendance tracking",
      ],
    },
  },
  {
    name: "Enterprise OS",
    price: {
      sixWeek: "Contact Sales",
      annual: "Contact Sales",
    },
    description: "For gyms, studios, and fitness businesses running daily operations.",
    icon: Building2,
    href: enterpriseSalesHref,
    cta: {
      sixWeek: "Contact Sales",
      annual: "Contact Sales",
    },
    note: {
      sixWeek: "",
      annual: "",
    },
    slabs: {
      sixWeek: [],
      annual: [],
    },
    features: {
      sixWeek: [
        "Member management",
        "Staff and coach management",
        "Attendance tracking",
        "Subscriptions and plans",
        "Invoices and payments",
        "CRM and leads",
        "WhatsApp automation",
        "Analytics dashboard",
        "Multi-role access",
        "Operations dashboard",
      ],
      annual: [
        "Member management",
        "Staff and coach management",
        "Attendance tracking",
        "Subscriptions and plans",
        "Invoices and payments",
        "CRM and leads",
        "WhatsApp automation",
        "Analytics dashboard",
        "Multi-role access",
        "Operations dashboard",
      ],
    },
  },
];

const platformFeatures = [
  "Goal-based journeys",
  "Personalized workout paths",
  "Progress-based adjustments",
  "Smart check-in insights",
  "Lifestyle tracking",
  "Custom assessments",
  "Role-based dashboards",
  "Automated reminders",
];

const faqs = [
  {
    question: "Can I start with one product?",
    answer: "Yes. Each FormulaXA surface can stand alone, then expand into the wider operating system when you are ready.",
  },
  {
    question: "Is Enterprise OS only for large gyms?",
    answer: "No. It is built for studios, gyms, academies, clubs, and fitness businesses that need operational clarity.",
  },
  {
    question: "How does Personalization work?",
    answer: "Personalization acts as a platform layer that adapts experiences around goals, progress, preferences, and each user journey.",
  },
];

export default function PricingPage() {
  const [billingMode, setBillingMode] = useState<"sixWeek" | "annual">("sixWeek");

  return (
    <main className="min-h-screen overflow-x-hidden bg-carbon-950 text-white">
      <PricingNav />
      <section className="relative px-4 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_36rem)]" />
        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-electric sm:text-sm">
            Pricing
          </p>
          <h1 className="mx-auto max-w-5xl text-balance text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-8xl">
            Simple plans for every level of fitness growth.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Start with the surface you need today, then grow into the full FormulaXA operating system as your journey expands.
          </p>
          <div
            className="mx-auto mt-9 inline-flex rounded-full border border-white/12 bg-white/[0.06] p-1 shadow-[0_16px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            aria-label="Pricing view"
          >
            {[
              { label: "6 Week", value: "sixWeek" as const },
              { label: "Annual", value: "annual" as const },
            ].map((option) => {
              const selected = billingMode === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setBillingMode(option.value)}
                  className={`h-9 rounded-full px-4 text-xs font-semibold transition sm:px-5 sm:text-sm ${
                    selected ? "bg-white text-black" : "text-white/70 hover:text-white"
                  }`}
                  aria-pressed={selected}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const slabs = plan.slabs[billingMode];
            const note = plan.note[billingMode];
            const cta = plan.cta[billingMode];
            const isFeatured = plan.name === "Fitizen Program";
            const orderClassName =
              plan.name === "Coach OS"
                ? "lg:order-1"
                : plan.name === "Fitizen Program"
                  ? "lg:order-2"
                  : "lg:order-3";
            const ctaClassName = `mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold transition ${
              isFeatured
                ? "bg-carbon-950 text-white hover:bg-black"
                : "bg-white text-black hover:bg-gray-200"
            }`;

            return (
              <article
                key={plan.name}
                className={`relative overflow-hidden rounded-2xl border p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-7 ${orderClassName} ${
                  isFeatured
                    ? "border-cyan-300/40 bg-white text-carbon-950"
                    : "border-white/10 bg-white/[0.055] text-white backdrop-blur-xl"
                }`}
              >
                <div className={`mb-8 flex h-12 w-12 items-center justify-center rounded-xl ${isFeatured ? "bg-carbon-950 text-white" : "bg-white text-black"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold">{plan.name}</h2>
                <p className={`mt-4 min-h-20 text-sm leading-6 ${isFeatured ? "text-gray-600" : "text-gray-400"}`}>
                  {plan.description}
                </p>
                <div className="mt-8">
                  {plan.name === "Fitizen Program" && billingMode === "annual" ? (
                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-gray-500 line-through">?71,991</div>
                      <div className="text-3xl font-semibold">?64,999</div>
                    </div>
                  ) : (
                    <div className="text-3xl font-semibold">{plan.price[billingMode]}</div>
                  )}
                </div>
                {note && (
                  <p className={`mt-2 text-sm font-medium ${isFeatured ? "text-cyan-700" : "text-electric"}`}>
                    {note}
                  </p>
                )}
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaClassName}
                  onClick={() => trackPricingCtaClick(plan.name, billingMode)}
                >
                  {cta} <ArrowRight className="h-4 w-4" />
                </a>
                {plan.name === "Fitizen Program" && (
                  <Link
                    href="/fitizen-program"
                    className={`mt-3 inline-flex w-full items-center justify-center gap-2 text-sm font-semibold ${
                      isFeatured ? "text-cyan-700 hover:text-cyan-900" : "text-electric hover:text-white"
                    }`}
                  >
                    View 6-week program details <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                {slabs.length > 0 && (
                  <div className={`mt-6 overflow-hidden rounded-2xl border text-sm ${isFeatured ? "border-black/10" : "border-white/10"}`}>
                    {slabs.map(([range, price]) => (
                      <div
                        key={range}
                        className={`flex items-center justify-between gap-4 border-b px-4 py-3 last:border-b-0 ${
                          isFeatured ? "border-black/10" : "border-white/10"
                        }`}
                      >
                        <span className={isFeatured ? "text-gray-600" : "text-gray-400"}>{range}</span>
                        <span className="font-semibold">{price}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className={`mt-8 h-px ${isFeatured ? "bg-black/10" : "bg-white/10"}`} />
                <ul className="mt-7 space-y-4">
                  {plan.features[billingMode].map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <BadgeCheck className={`mt-0.5 h-4 w-4 shrink-0 ${isFeatured ? "text-cyan-600" : "text-electric"}`} />
                      <span className={isFeatured ? "text-gray-700" : "text-gray-300"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black">
              <SlidersHorizontal className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-electric">Platform layer</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Personalization</h2>
            <p className="mt-5 text-base leading-7 text-gray-400">
              Turn every user&apos;s goals, progress, and behavior into a more personal fitness experience.
            </p>
            <a
              href={personalizationSalesHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-gray-200"
              onClick={() => trackPricingCtaClick("Personalization", billingMode)}
            >
              Contact Sales <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {platformFeatures.map((feature) => (
              <div key={feature} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-gray-200">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-carbon-950 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-cyan-600">FAQ</p>
            <h2 className="text-4xl font-semibold sm:text-6xl">Built to grow with you.</h2>
          </div>
          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-black/8 bg-[#F7F8FA] p-5 sm:p-6">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-5xl font-semibold leading-none sm:text-7xl">Fitness starts here.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400">
            Choose your first FormulaXA surface and expand when you are ready.
          </p>
          <Link
            href="/#home"
            className="mt-10 inline-flex h-14 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Back to Home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function PricingNav() {
  const links = [
    { label: "Platform", href: "/#home", active: false },
    { label: "Pricing", href: "/pricing", active: true },
    { label: "About Us", href: "/company", active: false },
    { label: "Contact", href: "/contact", active: false },
  ];

  return (
    <nav className="fixed left-1/2 top-4 z-[60] w-[calc(100%-1rem)] max-w-[42rem] -translate-x-1/2 px-1 sm:top-5">
      <div className="flex h-12 items-center justify-between rounded-full border border-white/12 bg-black/30 px-4 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-5">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-lg font-extrabold tracking-normal text-white sm:text-xl" aria-label="FormulaxA home">
          <Image
            src="/assets/formulaxa-nav-mark.png"
            alt=""
            width={32}
            height={32}
            className="h-7 w-7 rounded-full object-contain sm:h-8 sm:w-8"
            priority
          />
          <span>FormulaxA</span>
        </Link>
        <div className="flex min-w-0 items-center gap-3 overflow-x-auto text-nowrap sm:gap-5">
          {links.map(({ label, href, active }) => (
            <Link
              key={label}
              href={href}
              onClick={() => trackNavigationClick(label, href)}
              className={`text-xs font-medium transition hover:text-white sm:text-sm ${
                active ? "text-white" : "text-white/70"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
