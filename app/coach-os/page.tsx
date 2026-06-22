import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardCheck, Dumbbell, MessageCircle, Users } from "lucide-react";
import { TrackedAnchor } from "@/components/TrackedAnchor";

const siteUrl = "https://formulaxa.com";
const whatsappHref = `https://wa.me/919080939490?text=${encodeURIComponent(
  "Hi FormulaXA, I want to know more about Coach OS pricing and setup.",
)}`;

const features = [
  "Client management",
  "Workout and program builder",
  "Weekly check-ins",
  "Assessments and client notes",
  "Progress tracking",
  "Program templates",
  "Attendance tracking",
  "Client usage pricing slabs",
];

const useCases = [
  {
    title: "Personal trainers",
    copy: "Move client plans, notes, check-ins, and progress out of scattered chats and spreadsheets.",
    icon: Users,
  },
  {
    title: "Online coaches",
    copy: "Deliver programs, review updates, and keep each client journey visible from one coaching workspace.",
    icon: MessageCircle,
  },
  {
    title: "S&C coaches",
    copy: "Use assessment context, training structure, and progress tracking to support more accountable coaching.",
    icon: ClipboardCheck,
  },
];

const faqs = [
  {
    question: "What is Coach OS?",
    answer:
      "Coach OS is FormulaxA's coaching workspace for managing clients, creating workout programs, running check-ins, tracking assessments, and reviewing progress.",
  },
  {
    question: "Who is Coach OS for?",
    answer:
      "It is for personal trainers, online fitness coaches, strength and conditioning coaches, and coaching teams that need a clearer client management system.",
  },
  {
    question: "Does Coach OS replace spreadsheets and chat-only coaching?",
    answer:
      "It is designed to reduce scattered tools by keeping programs, client notes, check-ins, and progress tracking in one connected platform.",
  },
  {
    question: "How do I start Coach OS?",
    answer:
      "Contact FormulaxA on WhatsApp to discuss setup, pricing, client usage, and whether Coach OS fits your coaching workflow.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FormulaxA Coach OS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${siteUrl}/coach-os`,
    description:
      "Fitness coach software for client management, workout programming, assessments, weekly check-ins, and progress tracking.",
    offers: {
      "@type": "Offer",
      price: "299",
      priceCurrency: "INR",
      url: `${siteUrl}/coach-os`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function CoachOsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-carbon-950 text-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <OsNav active="Coach OS" />
      <section className="relative px-4 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_38rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-electric sm:text-sm">Coach OS</p>
            <h1 className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[0.96] sm:text-7xl lg:text-8xl">
              Fitness coach software for connected client delivery.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              FormulaxA Coach OS helps coaches and personal trainers manage clients, build workout
              programs, run weekly check-ins, track assessments, and keep progress visible.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <TrackedAnchor
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-gray-200"
                eventName="whatsapp_click"
                eventParams={{ source: "coach_os_hero", target_product: "coach_os" }}
              >
                Start Coach OS <ArrowRight className="h-4 w-4" />
              </TrackedAnchor>
              <Link
                href="/pricing"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/12 px-7 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/[0.06]"
              >
                View pricing
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_32px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
              <Dumbbell className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-semibold">Coach OS workspace</h2>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Built for coaches who need more structure than chat threads and spreadsheets.
            </p>
            <div className="mt-8 grid gap-3">
              {features.slice(0, 5).map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-gray-200">
                  <BadgeCheck className="h-4 w-4 shrink-0 text-electric" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-carbon-950 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-600">Use cases</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.04] sm:text-6xl">
            One coaching OS for trainers, online coaches, and S&C workflows.
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-3">
          {useCases.map(({ title, copy, icon: Icon }) => (
            <article key={title} className="rounded-3xl border border-black/8 bg-[#F7F8FA] p-6">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-carbon-950 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <FeatureSection title="Manage the whole coaching loop." body="Coach OS connects client management, workout programming, check-ins, assessments, and progress tracking so coaches can scale delivery with less admin." features={features} />
      <FaqSection title="Coach OS questions." faqs={faqs} />
      <FinalCta title="Start Coach OS." body="Ask FormulaxA about setup, pricing, and whether Coach OS fits your coaching workflow." href={whatsappHref} source="coach_os_final_cta" product="coach_os" label="Start Coach OS" />
    </main>
  );
}

function OsNav({ active }: { active: string }) {
  const links = [
    { label: "Platform", href: "/#home" },
    { label: "Fitizen", href: "/fitizen-program" },
    { label: "Coach OS", href: "/coach-os" },
    { label: "Enterprise OS", href: "/enterprise-os" },
  ];

  return (
    <nav className="fixed left-1/2 top-4 z-[60] w-[calc(100%-1rem)] max-w-[48rem] -translate-x-1/2 px-1 sm:top-5">
      <div className="flex h-12 items-center justify-between rounded-full border border-white/12 bg-black/30 px-4 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-5">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-lg font-extrabold tracking-normal text-white sm:text-xl" aria-label="FormulaxA home">
          <Image src="/assets/formulaxa-nav-mark.png" alt="" width={32} height={32} className="h-7 w-7 rounded-full object-contain sm:h-8 sm:w-8" priority />
          <span>FormulaxA</span>
        </Link>
        <div className="flex min-w-0 items-center gap-3 overflow-x-auto text-nowrap sm:gap-5">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className={`text-xs font-medium transition hover:text-white sm:text-sm ${active === link.label ? "text-white" : "text-white/70"}`}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function FeatureSection({ title, body, features }: { title: string; body: string; features: string[] }) {
  return (
    <section className="px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-electric">Features</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.04] sm:text-6xl">{title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400">{body}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 text-sm text-gray-200 backdrop-blur-xl">
              <BadgeCheck className="mb-5 h-5 w-5 text-electric" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection({ title, faqs }: { title: string; faqs: { question: string; answer: string }[] }) {
  return (
    <section className="bg-white px-4 py-20 text-carbon-950 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-600">FAQ</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-6xl">{title}</h2>
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
  );
}

function FinalCta({ title, body, href, source, product, label }: { title: string; body: string; href: string; source: string; product: string; label: string }) {
  return (
    <section className="px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-balance text-5xl font-semibold leading-none sm:text-7xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400">{body}</p>
        <TrackedAnchor
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-gray-200"
          eventName="whatsapp_click"
          eventParams={{ source, target_product: product }}
        >
          {label} <ArrowRight className="h-4 w-4" />
        </TrackedAnchor>
      </div>
    </section>
  );
}
