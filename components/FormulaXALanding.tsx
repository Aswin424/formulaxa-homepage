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
import { AnalyticsEvents } from "@/lib/analytics";

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

  // Scroll depth tracking
  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    const reached = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);

      milestones.forEach((m) => {
        if (percent >= m && !reached.has(m)) {
          reached.add(m);
          AnalyticsEvents.scrollDepth(`${m}%`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
        const isDesktopStory = window.matchMedia("(min-width: 1024px)").matches;

        ScrollTrigger.create({
          trigger: problemRef.current,
          start: "top top",
          end: isDesktopStory ? "+=2600" : "bottom bottom",
          pin: isDesktopStory,
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
    <main ref={mainRef} className="relative overflow-x-hidden bg-carbon-950 text-white">
      <div ref={progressRef} className="fixed left-0 top-0 z-50 h-1 w-full origin-left scale-x-0 bg-primary-gradient" />
      <div className="noise" />
      <FloatingNav />
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

function FloatingNav() {
  const links = [
    ["Home", "#home"],
    ["Pricing", "#pricing"],
    ["Company", "#company"],
  ];

  return (
    <nav className="fixed left-1/2 top-4 z-[60] w-[calc(100%-1rem)] max-w-[34rem] -translate-x-1/2 px-1 sm:top-5">
      <div className="flex h-12 items-center justify-between rounded-full border border-white/12 bg-black/30 px-4 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-5">
        <a href="#home" className="shrink-0 text-sm font-semibold tracking-normal text-white sm:text-base">
          FormulaXA
        </a>
        <div className="flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.04] p-1">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-2.5 py-1.5 text-xs font-medium text-white/82 transition hover:bg-white/10 hover:text-white sm:px-3 sm:text-sm"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
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
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center px-4 py-20 sm:px-8 sm:py-28">
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
          className="mb-6 inline-flex max-w-[21rem] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-center text-xs leading-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:mb-7 sm:max-w-none sm:text-sm"
        >
          <Sparkles className="h-4 w-4 text-electric" />
          The operating system for the entire fitness industry
        </motion.div>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl text-balance text-[3.65rem] font-semibold leading-[0.9] tracking-normal text-white [text-shadow:_0_3px_28px_rgb(0_0_0_/_0.42)] min-[390px]:text-[4rem] sm:text-7xl md:text-8xl lg:text-[7.4rem] xl:text-[8.4rem]"
        >
          One Platform. Every Level.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-[22rem] text-balance text-base leading-7 text-white [text-shadow:_0_2px_18px_rgb(0_0_0_/_0.42)] sm:mt-8 sm:max-w-3xl sm:text-xl sm:leading-8"
        >
          From your first workout to running an entire fitness business, FormulaXA powers every stage of the fitness journey.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex w-full max-w-xs flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4"
        >
          <a
            href="#pricing"
            onClick={() => AnalyticsEvents.clickStartFree()}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Start Free <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#vision"
            onClick={() => AnalyticsEvents.clickWatchDemo()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-black/20 px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/24 hover:bg-black/30"
          >
            <Play className="h-4 w-4 fill-white" /> Watch Demo
          </a>
        </motion.div>
      </motion.div>
      <ChevronDown className="absolute bottom-6 h-6 w-6 animate-bounce text-white/70 sm:bottom-8" />
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
  const activeLine = lines[active] ?? lines[0];
  const stateColor = isSolution ? "text-sky-300" : "text-[#FF1F1F]";
  const [isMobileSceneActive, setIsMobileSceneActive] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateMobileScene = () => {
      const section = refEl.current;
      if (!section || window.matchMedia("(min-width: 1024px)").matches) {
        setIsMobileSceneActive(false);
        frame = window.requestAnimationFrame(updateMobileScene);
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const nextActive = rect.top <= viewportHeight * 0.42 && rect.bottom >= viewportHeight * 0.58;

      setIsMobileSceneActive((current) => (current === nextActive ? current : nextActive));
      frame = window.requestAnimationFrame(updateMobileScene);
    };

    frame = window.requestAnimationFrame(updateMobileScene);

    return () => window.cancelAnimationFrame(frame);
  }, [refEl]);

  return (
    <section
      ref={refEl}
      className="relative h-[720svh] overflow-visible border-y border-white/5 bg-carbon-900 px-4 sm:px-8 lg:flex lg:h-auto lg:min-h-screen lg:items-center lg:overflow-hidden lg:py-28"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isSolution ? "solution-glow" : "problem-glow"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65 }}
          className={`absolute inset-0 ${
            isSolution
              ? "bg-[radial-gradient(circle_at_72%_50%,rgba(56,189,248,0.18),transparent_30rem)]"
              : "bg-[radial-gradient(circle_at_72%_50%,rgba(255,31,31,0.16),transparent_30rem)]"
          }`}
        />
      </AnimatePresence>
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-carbon-950 to-transparent" />

      <AnimatePresence>
        {isMobileSceneActive ? (
          <motion.div
            key="mobile-problem-fixed-scene"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.98 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed left-4 right-4 top-0 z-40 flex h-[100dvh] items-center justify-center lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-md flex-col justify-center gap-6 min-[390px]:gap-7">
              <ProblemStateCard active={active} isSolution={isSolution} lines={lines} />
              <ProblemStoryHeadline activeLine={activeLine} stateColor={stateColor} mobile />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="sticky top-0 z-10 mx-auto flex h-[100dvh] w-full max-w-md flex-col justify-center gap-6 opacity-0 min-[390px]:gap-7 lg:hidden" aria-hidden="true">
        <ProblemStateCard active={active} isSolution={isSolution} lines={lines} />
        <ProblemStoryHeadline activeLine={activeLine} stateColor={stateColor} mobile />
      </div>

      <div className="relative z-10 mx-auto hidden w-full max-w-7xl gap-12 lg:grid lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <ProblemStateCard active={active} isSolution={isSolution} lines={lines} variant="desktop" />
        <ProblemStoryHeadline activeLine={activeLine} stateColor={stateColor} />
      </div>
    </section>
  );
}

function ProblemStateCard({
  active,
  isSolution,
  lines,
  variant = "mobile",
}: {
  active: number;
  isSolution: boolean;
  lines: string[];
  variant?: "mobile" | "desktop";
}) {
  const isDesktop = variant === "desktop";

  return (
    <motion.div
      animate={{
        borderColor: isDesktop ? "rgba(255,255,255,0)" : isSolution ? "rgba(56,189,248,0.28)" : "rgba(255,31,31,0.28)",
        boxShadow: isDesktop ? "0 0 0 rgba(0,0,0,0)" : isSolution ? "0 24px 80px rgba(56,189,248,0.08)" : "0 24px 80px rgba(255,31,31,0.07)",
      }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={
        isDesktop
          ? "relative z-10"
          : "relative z-10 rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl min-[390px]:p-5 sm:p-6"
      }
    >
      <motion.p
        key={isSolution ? "solution-label" : "problem-label"}
        initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`mb-5 text-sm font-medium uppercase tracking-[0.34em] ${isSolution ? "text-sky-400" : "text-[#FF1F1F]"}`}
      >
        {isSolution ? "The solution" : "The problem"}
      </motion.p>
      <p className={`${isDesktop ? "max-w-sm text-lg leading-8" : "max-w-sm text-sm leading-6 min-[390px]:text-base min-[390px]:leading-7 sm:text-lg sm:leading-8"} text-white`}>
        {isSolution
          ? "One connected operating system where athletes, trainers, gyms, and brands grow from the same foundation."
          : "Fitness has moved online, but the infrastructure stayed split across isolated apps, spreadsheets, and subscriptions."}
      </p>
      <div className={`${isDesktop ? "mt-8" : "mt-5 sm:mt-7"} flex gap-2`}>
        {lines.map((line, index) => (
          <motion.span
            key={line}
            animate={{
              width: active === index ? 28 : 8,
              opacity: active === index ? 1 : 0.32,
              backgroundColor: index === lines.length - 1 ? "#38BDF8" : "#FF1F1F",
            }}
            transition={{ duration: 0.35 }}
            className="h-1.5 rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
}

function ProblemStoryHeadline({
  activeLine,
  stateColor,
  mobile = false,
}: {
  activeLine: string;
  stateColor: string;
  mobile?: boolean;
}) {
  return (
    <div className={`${mobile ? "h-[8.75rem] min-[390px]:h-[9.75rem]" : "min-h-[360px]"} relative overflow-hidden`}>
      <motion.div
        key={`${activeLine}-ghost`}
        initial={{ opacity: 0, scale: 0.96, filter: "blur(24px)" }}
        animate={{ opacity: 0.16, scale: 1, filter: "blur(18px)" }}
        transition={{ duration: 0.6 }}
        className={`absolute inset-0 flex text-balance font-semibold leading-[1.02] ${mobile ? "items-start text-5xl" : "items-center text-8xl"} ${stateColor}`}
      >
        {activeLine}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.h2
          key={activeLine}
          initial={{ opacity: 0, y: 42, scale: 0.97, filter: "blur(18px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -42, scale: 0.98, filter: "blur(18px)" }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-0 flex text-balance font-semibold leading-[1.02] ${mobile ? "items-start text-[2.1rem] min-[390px]:text-[2.45rem]" : "items-center text-8xl"} ${stateColor}`}
        >
          {activeLine}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}

function EcosystemSection() {
  return (
    <section className="relative bg-white px-4 py-20 text-carbon-950 sm:px-8 sm:py-28 lg:py-40">
      <SectionHeader eyebrow="The ecosystem" title="Built for everyone in fitness." body="Athletes, trainers, gyms, and brands share one connected foundation, so every relationship compounds instead of resetting." />
      <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:mt-16 md:grid-cols-2 xl:grid-cols-4">
        {ecosystem.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="group h-full rounded-2xl border border-white/10 bg-carbon-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-[0_30px_90px_rgba(14,165,233,0.18)] sm:p-7">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black sm:mb-10">
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
    <section ref={refEl} className="relative overflow-hidden bg-carbon-850 px-4 py-20 sm:px-8 sm:py-28 lg:py-40">
      <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/5 sm:block" />
      <SectionHeader eyebrow="Growth journey" title="Grow without changing platforms." body="FormulaXA follows the user from their first tracked workout to an entire business, community, and brand ecosystem." />
      <div className="relative mx-auto mt-12 max-w-3xl sm:mt-20">
        <div className="absolute left-5 top-0 h-full w-px origin-top bg-white/10 sm:left-1/2">
          <div className="timeline-line-fill h-full w-full origin-top bg-gradient-to-b from-sky-500 via-cyan-300 to-white" />
        </div>
        {steps.map((step, index) => (
          <Reveal key={step} delay={index * 0.08}>
            <div className={`relative mb-12 flex items-center gap-8 sm:mb-16 ${index % 2 ? "sm:flex-row-reverse" : ""}`}>
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-carbon-950 shadow-cyan sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                <span className="h-3 w-3 rounded-full bg-electric" />
              </div>
              <div className="glass w-full rounded-2xl p-5 sm:w-[42%] sm:p-6">
                <div className="text-sm text-gray-500">Level {index + 1}</div>
                <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{step}</h3>
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
    <section className="bg-white px-4 py-20 text-carbon-950 sm:px-8 sm:py-28 lg:py-40">
      <SectionHeader eyebrow="Products" title="One ecosystem. Five product surfaces." body="Each product can stand alone, but together they become an operating layer for fitness growth." />
      <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
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
    <section className="relative bg-carbon-900 px-4 py-20 sm:px-8 sm:py-28 lg:py-40">
      <SectionHeader eyebrow="Why FormulaXA" title="The category needs a system, not another tool." body="FormulaXA replaces the fragmented stack with one connected account, data graph, and growth path." />
      <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:mt-16 lg:grid-cols-2">
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
    <div className={`glass rounded-2xl p-5 sm:p-7 ${negative ? "opacity-75" : "shadow-glow"}`}>
      <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
      <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-4 sm:gap-4">
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
    <section ref={sectionRef} id="vision" className="relative h-[340vh] bg-white px-4 text-carbon-950 sm:h-[420vh] sm:px-8">
      <div className="absolute inset-x-0 top-0 z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-5 text-center sm:px-8">
        {isPinned ? (
          <div className="fixed left-1/2 top-1/2 z-30 w-[min(72rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2">
            <AnimatePresence mode="wait">
            <motion.h2
              key={lines[activeLine]}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-4xl font-semibold leading-[1.05] text-black sm:text-6xl lg:text-8xl"
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
    <section className="bg-carbon-850 px-4 py-20 sm:px-8 sm:py-28 lg:py-40">
      <SectionHeader eyebrow="Social proof" title="Built for every role in the journey." body="A connected platform changes the experience for athletes, operators, and everyone building around them." />
      <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:mt-16 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.08}>
            <figure className="glass h-full rounded-2xl p-5 sm:p-7">
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
    <section id="pricing" className="relative overflow-hidden bg-white px-4 py-20 text-carbon-950 sm:px-8 sm:py-28 lg:py-44">
      <Reveal>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.34em] text-electric">FormulaXA</p>
          <h2 className="text-balance text-5xl font-semibold leading-[1] sm:text-7xl lg:text-8xl">
            Fitness Starts Here.
            <span className="block text-gray-600">Businesses Scale Here.</span>
          </h2>
          <a
            href="#"
            onClick={() => AnalyticsEvents.clickJoinWaitlist()}
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
    <footer id="company" className="border-t border-white/8 bg-carbon-950 px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div className="text-xl font-semibold">FormulaXA</div>
        <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-400 sm:flex sm:flex-wrap">
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
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-electric sm:mb-5 sm:text-sm sm:tracking-[0.34em]">{eyebrow}</p>
        <h2 className="text-balance text-4xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:mt-7 sm:text-lg sm:leading-8">{body}</p>
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
