import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ClipboardCheck,
  Dumbbell,
  MessageCircle,
  Sparkles,
  Target,
} from "lucide-react";
import { TrackedAnchor } from "@/components/TrackedAnchor";

const siteUrl = "https://formulaxa.com";

const whatsappHref = (message: string) =>
  `https://wa.me/919080939490?text=${encodeURIComponent(message)}`;

const fitizenWhatsappHref = whatsappHref(
  "Hi FormulaXA, I want to join the Fitizen Program. Please share details about the 6-week personalized fitness program.",
);

const programSteps = [
  {
    title: "Consultation",
    copy: "Start with your goals, training history, schedule, and current constraints so the program has the right context.",
    icon: MessageCircle,
  },
  {
    title: "Assessment",
    copy: "Capture baseline movement, fitness, lifestyle, and readiness inputs before the exercise plan is built.",
    icon: ClipboardCheck,
  },
  {
    title: "Exercise program",
    copy: "Follow a structured training plan designed around your goal, ability level, and weekly availability.",
    icon: Dumbbell,
  },
  {
    title: "Weekly check-ins",
    copy: "Review adherence, feedback, and progress each week so the plan stays practical and accountable.",
    icon: CalendarCheck,
  },
];

const included = [
  "6-week structured fitness program",
  "Personalized workout plan",
  "Sports science and S&C coaching lens",
  "Weekly check-ins and coach feedback",
  "Progress dashboard and habit tracking",
  "App access included",
];

const outcomes = [
  "Build a consistent training routine",
  "Understand your baseline before increasing intensity",
  "Track progress beyond just body weight",
  "Train with a clear weekly structure",
  "Get feedback instead of guessing alone",
  "Prepare for longer-term fitness habits",
];

const faqs = [
  {
    question: "Who is the Fitizen Program for?",
    answer:
      "It is for people who want a structured, guided 6-week fitness program instead of a generic workout plan. It can support beginners, returning trainees, and people who want a clearer training routine.",
  },
  {
    question: "Is this an online fitness program?",
    answer:
      "Yes. The program is designed for guided online delivery with consultation, assessment, weekly check-ins, and progress tracking through the FormulaxA experience.",
  },
  {
    question: "What does sports science-led mean here?",
    answer:
      "It means the plan starts with assessment and uses principles from exercise science, strength and conditioning, progress tracking, and practical coaching. It does not replace medical advice.",
  },
  {
    question: "How much does the 6-week Fitizen Program cost?",
    answer:
      "The current 6-week Fitizen Program price shown on the FormulaxA pricing page is INR 7,999.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "FormulaxA Fitizen Program",
    serviceType: "6-week personalized fitness program",
    provider: {
      "@type": "Organization",
      name: "FormulaxA",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description:
      "A 6-week personalized fitness program with consultation, assessment, exercise programming, weekly check-ins, and progress tracking.",
    offers: {
      "@type": "Offer",
      price: "7999",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/fitizen-program`,
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

export default function FitizenProgramPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-carbon-950 text-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FitizenNav />
      <section className="relative px-4 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_40rem)]" />
        <div className="absolute inset-x-0 top-32 mx-auto h-72 max-w-5xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_28rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-xl sm:text-sm">
              <Sparkles className="h-4 w-4 text-electric" />
              Sports science-led fitness program
            </div>
            <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-normal sm:text-7xl lg:text-8xl">
              6-week personalized fitness program.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Fitizen is a personalized fitness program in India built around consultation, assessment,
              exercise programming, weekly check-ins, and progress tracking inside the FormulaxA platform.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <TrackedAnchor
                href={fitizenWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-gray-200"
                eventName="whatsapp_click"
                eventParams={{ source: "fitizen_hero", target_product: "fitizen" }}
              >
                Join Fitizen <ArrowRight className="h-4 w-4" />
              </TrackedAnchor>
              <Link
                href="/pricing"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/12 px-7 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/[0.06]"
              >
                View pricing
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_32px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl">
              <div className="rounded-[1.45rem] bg-carbon-900 p-6 sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-electric">Fitizen Program</p>
                <div className="mt-8">
                  <div className="text-5xl font-semibold">INR 7,999</div>
                  <p className="mt-2 text-sm text-gray-400">6-week guided program</p>
                </div>
                <div className="mt-8 grid gap-3">
                  {included.slice(0, 4).map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-gray-200">
                      <BadgeCheck className="h-4 w-4 shrink-0 text-electric" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-carbon-950 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-600">How it works</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.04] sm:text-6xl">
            A clear process from first call to weekly progress.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            The program is designed to replace guesswork with a practical coaching loop: understand,
            assess, program, check in, and adjust.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {programSteps.map(({ title, copy, icon: Icon }) => (
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

      <section className="px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-electric">What is included</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.04] sm:text-6xl">
              Personalized programming with accountability built in.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              Fitizen is for people who want more than a downloaded workout plan. It combines a
              structured 6-week plan, coaching feedback, and progress visibility so each week has a
              clear focus.
            </p>
            <TrackedAnchor
              href={fitizenWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-gray-200"
              eventName="whatsapp_click"
              eventParams={{ source: "fitizen_included", target_product: "fitizen" }}
            >
              Ask about Fitizen <MessageCircle className="h-4 w-4" />
            </TrackedAnchor>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 text-sm text-gray-200 backdrop-blur-xl">
                <BadgeCheck className="mb-5 h-5 w-5 text-electric" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-carbon-900 px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-3 shadow-[0_32px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem] bg-black">
              <Image
                src="/assets/allen-melito-founder-hd.png"
                alt="FormulaxA sports science and coaching leadership"
                fill
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-electric">Sports science approach</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.04] sm:text-6xl">
              Assessment first. Program second. Progress every week.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              The Fitizen Program uses a sports science and strength and conditioning lens to make
              fitness more structured, measurable, and personal. Each plan starts with context first,
              then turns that context into a practical training path you can follow week by week.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-gray-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-carbon-950 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-600">FAQ</p>
            <h2 className="mt-5 text-4xl font-semibold sm:text-6xl">Fitizen Program questions.</h2>
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
          <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="text-balance text-5xl font-semibold leading-none sm:text-7xl">
            Start your 6-week program.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400">
            Share your goal with FormulaXA and get the Fitizen Program details on WhatsApp.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedAnchor
              href={fitizenWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-gray-200"
              eventName="whatsapp_click"
              eventParams={{ source: "fitizen_final_cta", target_product: "fitizen" }}
            >
              Join Fitizen <ArrowRight className="h-4 w-4" />
            </TrackedAnchor>
            <Link
              href="/company"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/12 px-7 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/[0.06]"
            >
              About FormulaxA
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FitizenNav() {
  const links = [
    { label: "Platform", href: "/#home", active: false },
    { label: "Pricing", href: "/pricing", active: false },
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
