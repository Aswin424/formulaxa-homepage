import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { TrackedAnchor } from "@/components/TrackedAnchor";

const whatsappHref = (message: string) =>
  `https://wa.me/919080939490?text=${encodeURIComponent(message)}`;

const primaryWhatsappHref = whatsappHref("Hi FormulaXA, I want to know more about your plans.");
const instagramHref = "https://www.instagram.com/formulaxa/";
const linkedInHref = "https://www.linkedin.com/company/131274186/";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-carbon-950 text-white">
      <ContactNav />
      <section className="relative px-4 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_38rem)]" />
        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-electric sm:text-sm">
            Contact FormulaXA
          </p>
          <h1 className="mx-auto max-w-5xl text-balance text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-8xl">
            Let&apos;s build your fitness system.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Tell us what you are building: a personal transformation, a coaching business, or a full fitness operation.
          </p>
          <TrackedAnchor
            href={primaryWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-14 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-gray-200"
            eventName="whatsapp_click"
            eventParams={{ source: "contact_hero" }}
          >
            WhatsApp FormulaXA <MessageCircle className="h-4 w-4" />
          </TrackedAnchor>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto grid max-w-5xl gap-6 rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-electric">Direct line</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Contact details</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400">
              WhatsApp is the fastest way to reach FormulaXA for plan details, demos, and sales conversations.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-gray-200 sm:grid-cols-2">
              <TrackedAnchor
                href={primaryWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:text-white"
                eventName="whatsapp_click"
                eventParams={{ source: "contact_details_phone" }}
              >
                <Phone className="h-4 w-4 text-electric" />
                +91 9080939490
              </TrackedAnchor>
              <a
                href="mailto:formulaxa@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:text-white"
              >
                <Mail className="h-4 w-4 text-electric" />
                formulaxa@gmail.com
              </a>
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:text-white"
              >
                <Instagram className="h-4 w-4 text-electric" />
                @formulaxa
              </a>
              <a
                href={linkedInHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-electric" />
                LinkedIn
              </a>
            </div>
          </div>
          <TrackedAnchor
            href={primaryWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-gray-200"
            eventName="whatsapp_click"
            eventParams={{ source: "contact_start_chat" }}
          >
            Start Chat <MessageCircle className="h-4 w-4" />
          </TrackedAnchor>
        </div>
      </section>
    </main>
  );
}

function ContactNav() {
  const links = [
    { label: "Platform", href: "/#home", active: false },
    { label: "Pricing", href: "/pricing", active: false },
    { label: "About Us", href: "/company", active: false },
    { label: "Contact", href: "/contact", active: true },
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
