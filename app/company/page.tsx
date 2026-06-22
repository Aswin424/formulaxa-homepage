import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, Users, type LucideIcon } from "lucide-react";

const story = [
  "FormulaxA began with a simple belief: fitness works best when it’s personal, measurable, and built on the right systems.",
  "At the centre of that vision is Allen Melito — an athlete, coach, and entrepreneur who has experienced performance from every angle. Before building FormulaxA, Allen competed in archery at both the national level for Tamil Nadu and on the international stage. Those years taught him that success isn’t built on guesswork; it’s built on structure, consistency, and understanding what truly drives progress.",
  "His journey led him to study Sports & Exercise Science, where he developed a deeper understanding of biomechanics, strength and conditioning, and the science behind human performance. Working closely with athletes and individuals, he designed customised programmes aimed at delivering meaningful results.",
  "But one challenge kept appearing: good coaching was often limited by poor systems. Trainers struggled with fragmented tools, gyms lacked integrated management, and clients rarely received the personalised experience they deserved.",
  "Determined to bridge that gap, Allen created the first version of the idea — Formula A. He later stepped away to strengthen his business expertise through a PGDM, returning with a broader vision and a stronger foundation to build FormulaxA.",
  "Today, FormulaxA is more than an app. It’s a platform designed to make fitness more connected, accountable, and effective — enabling meaningful consultations, personalised programming, and progress tracking that demonstrates real outcomes.",
  "And while the vision may have started with one person, FormulaxA is built by a team that shares the same passion for improving how people train, coach, and manage fitness.",
  "Together with Aswin Kumar, Abbas, and Sedhu, the team brings together diverse perspectives, complementary skills, and a shared commitment to creating better experiences for clients, trainers, athletes, and gyms.",
];

const milestones: { title: string; copy: string; icon: LucideIcon }[] = [
  {
    title: "Athlete",
    copy: "Performance experience shaped by structure, consistency, and measurable progress.",
    icon: Award,
  },
  {
    title: "Science",
    copy: "Sports & Exercise Science, biomechanics, strength and conditioning, and real programming.",
    icon: BookOpen,
  },
  {
    title: "Team",
    copy: "Allen Melito, Aswin Kumar, Abbas, and Sedhu building better systems for fitness.",
    icon: Users,
  },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-carbon-950 text-white">
      <CompanyNav />
      <section className="relative px-4 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_38rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-electric sm:text-sm">About</p>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.96] sm:text-7xl">
              <span className="block lg:whitespace-nowrap">Built by people</span>
              <span className="block lg:whitespace-nowrap">who&apos;ve lived it.</span>
            </h1>
            <div className="mt-8 space-y-5 text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.055] p-3 shadow-[0_32px_100px_rgba(0,0,0,0.36)] backdrop-blur-xl lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-black">
                <Image
                  src="/assets/allen-melito-founder-hd.png"
                  alt="Allen Melito, founder of FormulaxA"
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/12 bg-black/45 p-4 backdrop-blur-xl">
                <p className="text-sm font-semibold text-white">Allen Melito</p>
                <p className="mt-1 text-xs leading-5 text-gray-300">Founder, FormulaxA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {milestones.map(({ title, copy, icon: Icon }) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-gray-400">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-carbon-950 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-600">One platform</p>
          <h2 className="mt-5 text-balance text-5xl font-semibold leading-none sm:text-7xl">
            Every fitness journey.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-2xl font-semibold leading-8 text-carbon-950 sm:text-4xl sm:leading-tight">
            Train. Coach. Manage.
          </p>
          <Link
            href="/pricing"
            className="mt-10 inline-flex h-14 items-center gap-2 rounded-full bg-carbon-950 px-7 text-sm font-semibold text-white transition hover:bg-black"
          >
            View Pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function CompanyNav() {
  const links = [
    { label: "Platform", href: "/#home", active: false },
    { label: "Pricing", href: "/pricing", active: false },
    { label: "About Us", href: "/company", active: true },
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
