"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence, motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  Dumbbell,
  Play,
  Sparkles,
  Store,
  Users,
  X,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ecosystem = [
  {
    title: "Athletes",
    icon: Dumbbell,
    points: ["Track workouts", "Join challenges", "Build consistency"],
  },
  {
    title: "Trainers",
    icon: Users,
    points: ["Manage clients", "Deliver programs", "Scale coaching"],
  },
  {
    title: "Gyms",
    icon: Building2,
    points: ["Members", "Attendance", "Operations", "Revenue"],
  },
  {
    title: "Brands",
    icon: Store,
    points: ["Campaigns", "Partnerships", "Communities"],
  },
];

const products = [
  ["FormulaXA Core", "The athlete app for workouts, challenges, habits, and progress.", Dumbbell],
  ["FormulaXA Coach", "Programming, client delivery, check-ins, and scalable coaching systems.", Users],
  ["FormulaXA Gym", "Membership, attendance, operations, revenue, and team visibility.", Building2],
  ["FormulaXA Commerce", "Sell programs, memberships, campaigns, and brand partnerships.", CircleDollarSign],
  ["FormulaXA AI", "An intelligence layer for coaching, retention, insights, and growth.", Bot],
] as const;

const testimonials = [
  {
    role: "Athlete",
    name: "Maya R.",
    quote:
      "FormulaXA finally made my training feel connected. Challenges, progress, and coaching all live in one place.",
    gradient: "from-sky-400 to-cyan-200",
  },
  {
    role: "Trainer",
    name: "Arjun S.",
    quote:
      "I went from scattered messages and sheets to one system my clients actually enjoy using every week.",
    gradient: "from-cyan-300 to-white",
  },
  {
    role: "Gym Owner",
    name: "Nisha K.",
    quote:
      "It gives us the operational clarity of SaaS with the community feel fitness businesses need.",
    gradient: "from-white to-cyan-300",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function FormulaXALanding() {
  const mainRef = useRef<HTMLElement | null>(null);
  const problemRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.24], [0, -160]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [activeProblem, setActiveProblem] = useState(0);

  const problemLines = useMemo(
    () => [
      "The fitness industry is fragmented.",
      "Athletes use one app.",
      "Trainers use another.",
      "Gyms use spreadsheets.",
      "Brands use disconnected tools.",
      "FormulaXA changes that.",
    ],
    [],
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    const tick = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2,
          },
        });
      }

      if (problemRef.current) {
        ScrollTrigger.create({
          trigger: problemRef.current,
          start: "top top",
          end: "+=2600",
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            setActiveProblem(Math.min(problemLines.length - 1, Math.floor(self.progress * problemLines.length)));
          },
        });
      }

      if (timelineRef.current) {
        gsap.fromTo(
          ".timeline-line-fill",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 70%",
              end: "bottom 45%",
              scrub: true,
            },
          },
        );
      }
    }, mainRef);

    return () => ctx.revert();
  }, [problemLines.length]);

  return (
    <main ref={mainRef} className="relative overflow-hidden bg-carbon-950 text-white">
      <div ref={progressRef} className="fixed left-0 top-0 z-50 h-1 w-full origin-left scale-x-0 bg-primary-gradient" />
      <div className="noise" />
      <Hero y={heroY} opacity={heroOpacity} />
      <ProblemSection lines={problemLines} active={activeProblem} refEl={problemRef} />
      <EcosystemSection />
      <GrowthJourney refEl={timelineRef} />
      <ProductsSection />
      <ComparisonSection />
      <VisionSection />
      <SocialProofSection />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Hero({
  y,
  opacity,
}: {
  y: MotionValue<number>;
  opacity: MotionValue<number>;
}) {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-5 py-28 sm:px-8">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/formulaxa.mp4" type="video/mp4" />
      </video>
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-gray-300 backdrop-blur-xl"
        >
          <Sparkles className="h-4 w-4 text-electric" />
          The operating system for the entire fitness industry
        </motion.div>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl text-balance text-6xl font-semibold leading-[0.93] tracking-normal text-white sm:text-7xl md:text-8xl lg:text-[7.4rem] xl:text-[8.4rem]"
        >
          One Platform. Every Level.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-3xl text-balance text-lg leading-8 text-gray-300 sm:text-xl"
        >
          From your first workout to running an entire fitness business, FormulaXA powers every stage of the fitness journey.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Start Free <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#vision"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/24 hover:bg-white/[0.1]"
          >
            <Play className="h-4 w-4 fill-white" /> Watch Demo
          </a>
        </motion.div>
      </motion.div>
      <ChevronDown className="absolute bottom-8 h-6 w-6 animate-bounce text-white/50" />
    </section>
  );
}

function ProblemSection({
  lines,
  active,
  refEl,
}: {
  lines: string[];
  active: number;
  refEl: React.RefObject<HTMLDivElement | null>;
}) {
  const isSolution = active === lines.length - 1;

  return (
    <section ref={refEl} className="relative flex min-h-screen items-center overflow-hidden border-y border-white/5 bg-carbon-900 px-5 py-28 sm:px-8">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-carbon-950 to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <motion.p
            key={isSolution ? "solution-label" : "problem-label"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`mb-5 text-sm font-medium uppercase tracking-[0.34em] ${isSolution ? "text-sky-400" : "text-[#FF1F1F]"}`}
          >
            {isSolution ? "The solution" : "The problem"}
          </motion.p>
          <motion.p
            key={isSolution ? "solution-copy" : "problem-copy"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-sm text-lg leading-8 text-white"
          >
            {isSolution
              ? "One connected operating system where athletes, trainers, gyms, and brands grow from the same foundation."
              : "Fitness has moved online, but the infrastructure stayed split across isolated apps, spreadsheets, and subscriptions."}
          </motion.p>
        </div>
        <div className="relative min-h-[360px]">
          {lines.map((line, index) => (
            <motion.h2
              key={line}
              animate={{ opacity: active === index ? 1 : 0.12, y: active === index ? 0 : 28, filter: active === index ? "blur(0px)" : "blur(2px)" }}
              transition={{ duration: 0.55 }}
              className={`absolute inset-0 flex items-center text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-8xl ${
                index === lines.length - 1 ? "text-sky-300" : "text-[#FF1F1F]"
              }`}
            >
              {line}
            </motion.h2>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <section className="relative bg-white px-5 py-28 text-carbon-950 sm:px-8 lg:py-40">
      <SectionHeader eyebrow="The ecosystem" title="Built for everyone in fitness." body="Athletes, trainers, gyms, and brands share one connected foundation, so every relationship compounds instead of resetting." />
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
        {ecosystem.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="group h-full rounded-2xl border border-white/10 bg-carbon-950 p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-[0_30px_90px_rgba(14,165,233,0.18)]">
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <ul className="mt-6 space-y-3 text-gray-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-electric" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function GrowthJourney({ refEl }: { refEl: React.RefObject<HTMLDivElement | null> }) {
  const steps = ["Athlete", "Trainer", "Coach", "Gym Owner", "Fitness Brand"];
  return (
    <section ref={refEl} className="relative overflow-hidden bg-carbon-850 px-5 py-28 sm:px-8 lg:py-40">
      <div className="absolute left-1/2 top-0 h-full w-px bg-white/5" />
      <SectionHeader eyebrow="Growth journey" title="Grow without changing platforms." body="FormulaXA follows the user from their first tracked workout to an entire business, community, and brand ecosystem." />
      <div className="relative mx-auto mt-20 max-w-3xl">
        <div className="absolute left-5 top-0 h-full w-px origin-top bg-white/10 sm:left-1/2">
          <div className="timeline-line-fill h-full w-full origin-top bg-gradient-to-b from-sky-500 via-cyan-300 to-white" />
        </div>
        {steps.map((step, index) => (
          <Reveal key={step} delay={index * 0.08}>
            <div className={`relative mb-12 flex items-center gap-8 sm:mb-16 ${index % 2 ? "sm:flex-row-reverse" : ""}`}>
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-carbon-950 shadow-cyan sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                <span className="h-3 w-3 rounded-full bg-electric" />
              </div>
              <div className="glass w-full rounded-2xl p-6 sm:w-[42%]">
                <div className="text-sm text-gray-500">Level {index + 1}</div>
                <h3 className="mt-2 text-3xl font-semibold">{step}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="bg-white px-5 py-28 text-carbon-950 sm:px-8 lg:py-40">
      <SectionHeader eyebrow="Products" title="One ecosystem. Five product surfaces." body="Each product can stand alone, but together they become an operating layer for fitness growth." />
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 lg:grid-cols-5">
        {products.map(([title, body, Icon], index) => (
          <Reveal key={title} delay={index * 0.07}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-carbon-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-[0_30px_90px_rgba(14,165,233,0.18)]">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-gradient opacity-15 blur-2xl transition group-hover:opacity-30" />
              <Icon className="mb-8 h-7 w-7 text-electric" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-300">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ComparisonSection() {
  const traditional = ["Point Solutions", "Multiple Subscriptions", "Data Silos", "Limited Growth"];
  const formula = ["Unified Ecosystem", "One Account", "Connected Data", "Infinite Growth Path"];
  return (
    <section className="relative bg-carbon-900 px-5 py-28 sm:px-8 lg:py-40">
      <SectionHeader eyebrow="Why FormulaXA" title="The category needs a system, not another tool." body="FormulaXA replaces the fragmented stack with one connected account, data graph, and growth path." />
      <div className="mx-auto mt-16 grid max-w-6xl gap-5 lg:grid-cols-2">
        <Reveal>
          <ComparisonCard title="Traditional Fitness Software" items={traditional} negative />
        </Reveal>
        <Reveal delay={0.12}>
          <ComparisonCard title="FormulaXA" items={formula} />
        </Reveal>
      </div>
    </section>
  );
}

function ComparisonCard({ title, items, negative = false }: { title: string; items: string[]; negative?: boolean }) {
  return (
    <div className={`glass rounded-2xl p-7 ${negative ? "opacity-75" : "shadow-glow"}`}>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.035] p-4">
            {negative ? <X className="h-5 w-5 text-red-300" /> : <BadgeCheck className="h-5 w-5 text-electric" />}
            <span className="text-gray-200">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisionSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lines = [
    "We believe fitness should not be fragmented.",
    "We believe growth should not require switching platforms.",
    "We are building the operating system for fitness.",
  ];
  const [activeLine, setActiveLine] = useState(0);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    let frame = 0;
    const updateFromScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const isSectionCentered = rect.top <= viewportCenter && rect.bottom >= viewportCenter;
      const progress = Math.min(1, Math.max(0, (viewportCenter - rect.top) / rect.height));
      const nextLine = Math.min(lines.length - 1, Math.floor(progress * lines.length));

      setIsPinned(isSectionCentered);
      setActiveLine((current) => (current === nextLine ? current : nextLine));

      frame = window.requestAnimationFrame(updateFromScroll);
    };

    frame = window.requestAnimationFrame(updateFromScroll);

    return () => window.cancelAnimationFrame(frame);
  }, [lines.length]);

  return (
    <section ref={sectionRef} id="vision" className="relative h-[420vh] bg-white px-5 text-carbon-950 sm:px-8">
      <div className="absolute inset-x-0 top-0 z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-5 text-center sm:px-8">
        {isPinned ? (
          <div className="fixed left-1/2 top-1/2 z-30 w-[min(72rem,calc(100vw-2.5rem))] -translate-x-1/2 -translate-y-1/2">
            <AnimatePresence mode="wait">
            <motion.h2
              key={lines[activeLine]}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-5xl font-semibold leading-[1.05] text-black sm:text-6xl lg:text-8xl"
            >
              {lines[activeLine]}
            </motion.h2>
            </AnimatePresence>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="bg-carbon-850 px-5 py-28 sm:px-8 lg:py-40">
      <SectionHeader eyebrow="Social proof" title="Built for every role in the journey." body="A connected platform changes the experience for athletes, operators, and everyone building around them." />
      <div className="mx-auto mt-16 grid max-w-6xl gap-5 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.08}>
            <figure className="glass h-full rounded-2xl p-7">
              <div className={`mb-7 h-14 w-14 rounded-full bg-gradient-to-br ${item.gradient} p-[2px]`}>
                <div className="flex h-full w-full items-center justify-center rounded-full bg-carbon-950 text-sm font-semibold">{item.name.slice(0, 2)}</div>
              </div>
              <blockquote className="text-lg leading-8 text-gray-200">&ldquo;{item.quote}&rdquo;</blockquote>
              <figcaption className="mt-8">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">{item.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden bg-white px-5 py-28 text-carbon-950 sm:px-8 lg:py-44">
      <Reveal>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.34em] text-electric">FormulaXA</p>
          <h2 className="text-balance text-6xl font-semibold leading-[1] sm:text-7xl lg:text-8xl">
            Fitness Starts Here.
            <span className="block text-gray-600">Businesses Scale Here.</span>
          </h2>
          <a
            href="#"
            className="mt-12 inline-flex h-14 items-center gap-2 rounded-full bg-carbon-950 px-7 text-sm font-semibold text-white transition hover:bg-black"
          >
            Join FormulaXA <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const links = ["Platform", "Products", "Pricing", "Resources", "Company"];
  return (
    <footer className="border-t border-white/8 bg-carbon-950 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="text-xl font-semibold">FormulaXA</div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
          {links.map((link) => (
            <a key={link} href="#" className="transition hover:text-white">
              {link}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          {[BarChart3, Sparkles, Zap].map((Icon, index) => (
            <a key={index} href="#" aria-label={`Social link ${index + 1}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:text-white">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <Reveal>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.34em] text-electric">{eyebrow}</p>
        <h2 className="text-balance text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">{title}</h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">{body}</p>
      </div>
    </Reveal>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
