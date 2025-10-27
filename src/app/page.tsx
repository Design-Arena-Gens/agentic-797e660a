import Image from "next/image";
import Link from "next/link";
import {
  CalendarClock,
  Heart,
  Leaf,
  MapPin,
  Mail,
  MoveRight,
  Phone,
  Sparkles,
  Star,
  Users,
  Waves,
} from "lucide-react";

const navigation = [
  { name: "Classes", href: "#classes" },
  { name: "Journey", href: "#journey" },
  { name: "Guides", href: "#guides" },
  { name: "Membership", href: "#membership" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Visit", href: "#visit" },
];

const classSchedule = [
  {
    title: "Sunrise Flow",
    focus: "Breath-led vinyasa to awaken the senses",
    time: "Mon & Wed • 6:30 AM",
    guide: "Ava Chen",
    spots: "10 mats left",
  },
  {
    title: "Alchemy Sculpt",
    focus: "Dynamic power flow with mindful strength",
    time: "Tue & Thu • 5:45 PM",
    guide: "Mateo Ruiz",
    spots: "6 mats left",
  },
  {
    title: "Lunar Restore",
    focus: "Slow yin stretches & guided nidra",
    time: "Fri • 7:00 PM",
    guide: "Noor Patel",
    spots: "Open studio",
  },
  {
    title: "Weekend Roots",
    focus: "Alignment-focused fundamentals",
    time: "Sat • 9:30 AM",
    guide: "Sofia Miles",
    spots: "12 mats left",
  },
];

const journeys = [
  {
    icon: Sparkles,
    title: "Mindful Foundations",
    description:
      "Learn breathwork, meditation, and intentional movement to reset the nervous system and invite calm back into daily life.",
  },
  {
    icon: Waves,
    title: "Fluid Strength",
    description:
      "Build stability through spiraling sequences, mobility drills, and playful balance work that respect every body.",
  },
  {
    icon: Heart,
    title: "Community Rituals",
    description:
      "Monthly moon circles, sound baths, and post-class tea conversations keep you grounded in community care.",
  },
];

const guides = [
  {
    name: "Ava Chen",
    role: "Creative Director • E-RYT500",
    story:
      "Ava blends visual art and somatic science to choreograph flows that feel like moving meditations.",
    photo:
      "https://images.unsplash.com/photo-1540202404-1a52558bedd1?auto=format&fit=crop&w=720&q=80",
    specialties: ["Intuitive Sequencing", "Breathwork", "Sound Bath"],
  },
  {
    name: "Mateo Ruiz",
    role: "Strength Specialist • RYT300",
    story:
      "Mateo helps students discover power through joint-safe drills and athletic conditioning woven into vinyasa.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=720&q=80",
    specialties: ["Mobility Training", "Power Vinyasa", "Myofascial Release"],
  },
  {
    name: "Noor Patel",
    role: "Restorative Guide • Yoga Nidra Facilitator",
    story:
      "Noor creates restorative rituals backed by Ayurvedic principles to soften the edges of modern life.",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=720&q=80",
    specialties: ["Yin Yoga", "Yoga Nidra", "Ayurveda"],
  },
];

const testimonials = [
  {
    quote:
      "Every class feels like a conversation with my body. Yoga Hub meets you exactly where you are and still nudges you into growth.",
    name: "Jasmine Lee",
    role: "Product Designer",
  },
  {
    quote:
      "The community is warm, the teachers are intentional, and I've discovered strength I didn't know existed.",
    name: "Marcos Silva",
    role: "Photographer",
  },
  {
    quote:
      "From the curated playlists to the breath coaching, each detail helps me decompress and reconnect.",
    name: "Priya Desai",
    role: "Wellness Strategist",
  },
];

const memberships = [
  {
    tier: "Essential",
    price: "$89",
    cadence: "monthly",
    highlights: [
      "8 in-studio classes",
      "Unlimited live-stream access",
      "Monthly community circle",
    ],
    featured: false,
  },
  {
    tier: "Signature",
    price: "$129",
    cadence: "monthly",
    highlights: [
      "Unlimited classes",
      "Complimentary guest pass x2",
      "Quarterly wellness lab",
      "On-demand library",
    ],
    featured: true,
  },
  {
    tier: "Sanctuary",
    price: "$179",
    cadence: "monthly",
    highlights: [
      "Unlimited classes + workshops",
      "1:1 coaching session monthly",
      "Seasonal retreat discounts",
      "Priority event booking",
    ],
    featured: false,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05060d]/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
          <Link href="#" className="group inline-flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-semibold tracking-widest text-white transition-all group-hover:border-white/40 group-hover:bg-white/10">
              YH
            </span>
            <span className="font-semibold uppercase tracking-[0.3em] text-white/90">
              Yoga Hub
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative transition-colors hover:text-white"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-2 h-px scale-x-0 bg-gradient-to-r from-white/0 via-white to-white/0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <Link
            href="#visit"
            className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium uppercase tracking-wide text-white/80 transition hover:border-white/30 hover:bg-white/20 md:inline-flex"
          >
            Join Class
            <MoveRight className="h-4 w-4" />
          </Link>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden">
            <span className="sr-only">Open navigation</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-4 bg-white/80" />
              <span className="block h-0.5 w-4 bg-white/80" />
              <span className="block h-0.5 w-3 bg-white/80" />
            </div>
          </button>
        </div>
      </header>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-32 px-4 pb-32 pt-20 sm:px-8">
        <section className="relative isolate flex flex-col gap-12 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-6 py-16 shadow-[0_0_120px_rgba(94,85,255,0.15)] sm:px-12">
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,174,94,0.28),_transparent_60%)] blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(94,255,206,0.25),_transparent_60%)] blur-3xl" />
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.4em] text-white/70 backdrop-blur-md">
                <Leaf className="h-4 w-4" />
                Root into presence
              </div>
              <div className="space-y-6">
                <h1 className="text-pretty font-[family:var(--font-playfair)] text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
                  Where mindful movement meets modern wellness.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Yoga Hub is a design-forward studio in the heart of the city,
                  weaving breathwork, functional strength, and ritual to help
                  you feel grounded in every season of life.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <Link
                  href="#membership"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-6 py-3 text-sm uppercase tracking-wide text-[#05060d] shadow-[0_20px_60px_rgba(255,255,255,0.2)] transition hover:-translate-y-0.5 hover:border-white/40"
                >
                  Explore Membership
                  <MoveRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#classes"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-wide text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  View Schedule
                  <CalendarClock className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.35em] text-white/40">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  360° studio experience
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Inclusive for every body
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[36px] border border-white/20 bg-white/10 shadow-[0_40px_120px_rgba(5,6,13,0.45)]">
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#05060d]/30 via-transparent to-white/10" />
                <Image
                  src="https://images.unsplash.com/photo-1544185310-0b3cf5016721?auto=format&fit=crop&w=1200&q=80"
                  alt="Yoga practitioner in serene studio space"
                  width={1200}
                  height={1400}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-10 left-8 w-max rounded-3xl border border-white/15 bg-[#05060d]/80 px-6 py-4 shadow-lg backdrop-blur">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                  Today&apos;s energy
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Fluid Flow x Breath Ritual
                </p>
                <p className="text-sm text-white/60">
                  curated by <span className="text-white">Ava</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="classes" className="space-y-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                Weekly rhythm
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Classes designed for the way you move.
              </h2>
            </div>
            <Link
              href="#visit"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-white/60 transition hover:text-white"
            >
              Reserve your mat
              <MoveRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {classSchedule.map((session) => (
              <article
                key={session.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-8 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.1]"
              >
                <div className="absolute right-6 top-6 h-16 w-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl transition group-hover:border-white/20 group-hover:bg-white/10" />
                <h3 className="text-xl font-semibold text-white">
                  {session.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">{session.focus}</p>
                <div className="mt-6 space-y-2 text-sm text-white/60">
                  <p className="flex items-center gap-2">
                    <CalendarClock className="h-4 w-4" />
                    {session.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Guided by {session.guide}
                  </p>
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/40">
                  {session.spots}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="journey"
          className="grid gap-12 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Ritual in motion
            </p>
            <h2 className="font-[family:var(--font-playfair)] text-3xl leading-snug text-white sm:text-4xl">
              A mindful journey that expands with you.
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              From the moment you step inside, sensory design, curated playlists,
              and lighting rituals tune you back into the present moment. Each
              track is intentionally sequenced to support seasonal energy,
              nervous system balance, and explorative play.
            </p>
            <Link
              href="#membership"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-white/70 transition hover:text-white"
            >
              Discover progression path
              <MoveRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {journeys.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-[#05060d]/70 p-6 transition hover:border-white/20 hover:bg-[#05060d]/50"
              >
                <item.icon className="h-8 w-8 text-white/70 transition group-hover:text-white" />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="guides" className="space-y-12">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Studio guides
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Guided by artists, athletes, and healers.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.name}
                className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <div className="relative">
                  <Image
                    src={guide.photo}
                    alt={guide.name}
                    width={640}
                    height={800}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060d] via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.35em] text-white/60">
                    {guide.role}
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {guide.name}
                  </h3>
                  <p className="text-sm text-white/70">{guide.story}</p>
                  <div className="mt-auto flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
                    {guide.specialties.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/15 px-3 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="membership"
          className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(5,6,13,0.45)]"
        >
          <div className="flex flex-col gap-6 text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Memberships
            </p>
            <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr] lg:items-end">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Memberships that flex with your rhythm.
                </h2>
                <p className="text-sm leading-relaxed text-white/70">
                  All tiers include complimentary mat service, herbal tea bar,
                  access to our digital studio, and priority booking for
                  workshops and pop-up experiences.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-xs uppercase tracking-[0.35em] text-white/50">
                <span className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Intro offer: first class $20
                </span>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {memberships.map((plan) => (
              <div
                key={plan.tier}
                className={`flex flex-col gap-6 rounded-3xl border border-white/15 bg-[#05060d]/70 p-8 transition hover:-translate-y-1 hover:border-white/25 ${
                  plan.featured ? "ring-1 ring-white/40" : ""
                }`}
              >
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                    {plan.tier}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-semibold text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm uppercase tracking-[0.3em] text-white/40">
                      /{plan.cadence}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-white/70">
                  {plan.highlights.map((highlight) => (
                    <li className="flex items-start gap-3" key={highlight}>
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#visit"
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] transition ${
                    plan.featured
                      ? "bg-white text-[#05060d] hover:border-white/40 hover:bg-white/90"
                      : "text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  Become a member
                  <MoveRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section
          id="testimonials"
          className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-10 md:grid-cols-3"
        >
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Voices from the mat
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Humans who move with us.
            </h2>
          </div>
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#05060d]/80 p-6"
            >
              <p className="text-sm leading-relaxed text-white/70">
                “{testimonial.quote}”
              </p>
              <footer className="flex flex-col text-sm">
                <span className="font-medium text-white">
                  {testimonial.name}
                </span>
                <span className="text-white/50">{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </section>

        <section
          id="visit"
          className="grid gap-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Visit yoga hub
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Move with us IRL or on the stream.
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              Our studio is located in the arts district with skylit ceilings,
              infrared heating, and plant-filled quiet lounges. Stream classes
              live or on-demand if you&apos;re moving from home.
            </p>
            <div className="space-y-4 text-sm text-white/70">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-white/60" />
                228 Market Street, Arts District, Portland OR
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-white/60" />
                (503) 555-0188
              </p>
              <p className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-white/60" />
                hello@yogahub.studio
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
              <span className="rounded-full border border-white/20 px-4 py-2">
                Studio open 6A—9P
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                Virtual library 24/7
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#05060d] via-transparent to-transparent" />
            <Image
              src="https://images.unsplash.com/photo-1526402460496-4ae6ee06e1d5?auto=format&fit=crop&w=1200&q=80"
              alt="Yoga studio interior"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-[#05060d]/80 px-5 py-4 text-sm text-white/70 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                Connected amenities
              </p>
              <p className="mt-2">
                Cold plunge lounge • Infrared sauna • Botanical tea bar • Quiet
                co-work nooks
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#05060d]/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Yoga Hub
            </p>
            <p className="text-sm text-white/60">
              Mindful movement for modern bodies. © {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex gap-6 text-xs uppercase tracking-[0.35em] text-white/50">
            <Link href="#classes" className="transition hover:text-white">
              Classes
            </Link>
            <Link href="#membership" className="transition hover:text-white">
              Membership
            </Link>
            <Link href="#visit" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
