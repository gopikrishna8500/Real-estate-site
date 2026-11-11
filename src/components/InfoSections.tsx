
import {
  Paintbrush,
  Landmark,
  Warehouse,
  KeyRound,
  ShieldCheck,
  Handshake,
  Wallet,
  Clock,
  ArrowRight,
} from 'lucide-react';

const SERVICES = [
  {
    title: 'Interior Design',
    text: 'Turn your new home into a space you love with our in-house design team.',
    icon: Paintbrush,
  },
  {
    title: 'Plot & Land',
    text: 'Verified plots in fast-growing corridors with clear titles and transparent pricing.',
    icon: Landmark,
  },
  {
    title: 'Commercial Spaces',
    text: 'Offices, retail and warehouses curated for businesses that are scaling up.',
    icon: Warehouse,
  },
  {
    title: 'Resale & Rentals',
    text: 'Sell, buy or lease pre-owned homes with end-to-end paperwork support.',
    icon: KeyRound,
  },
];

const WHY_US = [
  {
    title: 'Zero Brokerage',
    text: 'Keep more of your money. We never charge buyers a brokerage fee.',
    icon: Wallet,
  },
  {
    title: 'Verified Listings',
    text: 'Every project is checked for legal approvals before it reaches you.',
    icon: ShieldCheck,
  },
  {
    title: 'Trusted Partners',
    text: 'Direct tie-ups with leading builders for honest, competitive deals.',
    icon: Handshake,
  },
  {
    title: 'Faster Closures',
    text: 'Our team handles documentation so your purchase moves without delays.',
    icon: Clock,
  },
];

const STATS = [
  { value: '100+', label: 'Properties sold' },
  { value: '100Cr+', label: 'Worth of deals closed' },
  { value: '0%', label: 'Brokerage for buyers' },
  { value: '5', label: 'Cities across India' },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f8f7f4] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

        {/* About Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d6b779]/40 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a17b3d]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b58b45]" />
            About Us
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-[1.2] tracking-tight text-[#102b4c] sm:text-4xl lg:text-5xl">
            Where your trust
            <span className="block text-[#b58b45]">matters most.</span>
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-[#d6b779]" />

          <p className="mt-7 text-base leading-8 text-slate-600">
            Roof Enclaves was founded with a simple belief: buying a home should feel exciting, not stressful. We
            guide families and investors across India through every step, from the first site visit to the keys in
            your hand.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            With more than 100 properties sold, our focus stays on transparency, honest advice and long-term
            relationships.
          </p>

          <a
            href="#services"
            className="group mt-8 inline-flex items-center gap-3 rounded-lg border border-[#b58b45] bg-[#102b4c] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6b779] hover:text-[#102033]"
          >
            Explore Our Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Statistics */}
        <div className="relative">
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-[#d6b779]/30" />

          <div className="relative grid grid-cols-2 gap-5">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-[#e8dfce] bg-white p-7 shadow-[0_5px_25px_rgba(15,35,60,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b779] hover:shadow-[0_15px_30px_rgba(15,35,60,0.10)] sm:p-9"
              >
                <span className="mb-5 block h-1 w-10 rounded-full bg-[#d6b779] transition-all duration-300 group-hover:w-16" />

                <p className={`text-3xl font-extrabold tracking-tight ${index === 2 ? 'text-[#b58b45]' : 'text-[#102b4c]'} sm:text-4xl`}>
                  {stat.value}
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17b3d]">
            What We Offer
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-[1.2] tracking-tight text-[#102b4c] sm:text-4xl">
            Everything you need
            <span className="block text-[#b58b45]">under one roof.</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#d6b779]" />

          <p className="mt-5 text-base leading-7 text-slate-500">
            From finding the right property to designing your dream home, we bring every essential service together.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-[#e8dfce] bg-[#fbfaf7] p-8 shadow-[0_5px_25px_rgba(15,35,60,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#d6b779] hover:bg-white hover:shadow-[0_15px_35px_rgba(15,35,60,0.10)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6b779]/40 bg-[#102b4c] text-[#e7c77d] shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-[#d6b779] group-hover:text-[#102b4c]">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-7 text-lg font-bold text-[#102b4c] transition-colors group-hover:text-[#a17b3d]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {text}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-[#d6b779] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-gradient-to-br from-[#07182e] via-[#102b4c] to-[#183c5b] py-20 text-white sm:py-24">

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#d6b779]/10" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#d6b779]/10" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-[#d6b779]/10" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e7c77d]">
            The Roof Enclaves Advantage
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl">
            Built on honesty
            <span className="block text-[#e7c77d]">and real results.</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#d6b779]" />

          <p className="mt-5 text-base leading-7 text-slate-300">
            Your property journey deserves transparency, expertise and a team that puts your interests first.
          </p>
        </div>

        {/* Why Choose Us Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#d6b779]/50 hover:bg-white/[0.08] hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#d6b779]/40 bg-[#d6b779]/10 text-[#e7c77d] transition-all duration-300 group-hover:bg-[#d6b779] group-hover:text-[#102b4c]">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {text}
              </p>

              <div className="mt-6 h-px w-10 bg-[#d6b779] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
