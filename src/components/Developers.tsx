
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Hammer
} from 'lucide-react';

import { DEVELOPERS, type Developer } from '@/data/directory';

const EXCLUSIVE_SERVICES = [
  {
    title: 'Join as a',
    subtitle: 'Syndicate Broker',
    icon: 'https://roofenclaves.in/exclusive-syndicate.svg',
  },
  {
    title: 'Partner with Us',
    subtitle: 'as an Affiliate',
    icon: 'https://roofenclaves.in/exclusive-affiliate.svg',
  },
  {
    title: 'Get Instant',
    subtitle: 'Home Loan Approval',
    icon: 'https://roofenclaves.in/exclusive-home-loans-icici.svg',
  },
  {
    title: 'Home Inspection -',
    subtitle: 'PropCheck',
    icon: 'https://roofenclaves.in/exclusive-property-check.svg',
  },
  {
    title: 'List Your Property',
    subtitle: 'with Confidence',
    icon: 'https://roofenclaves.in/exclusive-property.svg',
  },
];

function RoofExclusiveSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Roof Exclusive Branding */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <img
            src="https://roofenclaves.in/small%20tree%201.png"
            alt=""
            className="h-9 w-9 object-contain"
          />

          <h2 className="text-2xl font-extrabold tracking-tight text-[#102b4c] sm:text-3xl">
            Roof
            <span className="text-[#b58b45]">Exclusive</span>
          </h2>

          <img
            src="https://roofenclaves.in/small%20tree%202.png"
            alt=""
            className="h-9 w-9 object-contain"
          />
        </div>

        {/* Exclusive Services */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {EXCLUSIVE_SERVICES.map((service) => (
            <a
              key={service.subtitle}
              href="#contact"
              className="group flex min-h-[190px] flex-col items-center justify-center rounded-2xl border border-[#e8dfce] bg-[#fbfaf7] px-4 py-7 text-center shadow-[0_5px_20px_rgba(15,35,60,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b779] hover:bg-white hover:shadow-[0_14px_30px_rgba(15,35,60,0.10)]"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6b779]/40 bg-white shadow-sm transition-all duration-300 group-hover:border-[#d6b779] group-hover:shadow-md">
                <img
                  src={service.icon}
                  alt=""
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>

              <h3 className="text-sm font-semibold leading-6 text-[#102b4c] transition-colors group-hover:text-[#a17b3d]">
                {service.title}
                <span className="block font-bold">
                  {service.subtitle}
                </span>
              </h3>

              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#a17b3d] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                Explore
                <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATUS_ROWS = [
  {
    label: 'Ready to Move',
    key: 'readyToMove',
    icon: CheckCircle2,
    tone: 'text-emerald-600',
  },
  {
    label: 'Under Construction',
    key: 'underConstruction',
    icon: Hammer,
    tone: 'text-[#b58b45]',
  },
  {
    label: 'New Launch',
    key: 'newLaunch',
    icon: Clock,
    tone: 'text-blue-700',
  },
] as const;

function DeveloperCard({ developer }: { developer: Developer }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8dfce] bg-white shadow-[0_5px_25px_rgba(15,35,60,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b779] hover:shadow-[0_15px_35px_rgba(15,35,60,0.12)]">

      {/* Premium Developer Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#07182e] via-[#102b4c] to-[#183c5b] p-6">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#d6b779]/20" />
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-[#d6b779]/20" />

        <div className="relative flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#d6b779]/50 bg-white/10 text-lg font-extrabold text-[#e7c77d] shadow-lg">
            {developer.initials}
          </span>

          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-white">
              {developer.name}
            </h3>

            <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-[#e7c77d]">
              <Building2 className="h-3 w-3" />
              Real Estate Developer
            </span>
          </div>
        </div>

        {/* Developer Statistics */}
        <div className="relative mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-4">
          <div>
            <strong className="block text-2xl font-extrabold text-white">
              {developer.totalProjects}
            </strong>
            <span className="text-xs text-slate-300">Total Projects</span>
          </div>

          <div>
            <strong className="block text-2xl font-extrabold text-[#e7c77d]">
              {developer.experienceYears} yrs
            </strong>
            <span className="text-xs text-slate-300">Experience</span>
          </div>
        </div>
      </div>

      {/* Project Status */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#9b7840]">
          Project Availability
        </p>

        <ul className="divide-y divide-slate-100 border-t border-slate-100">
          {STATUS_ROWS.map(({ label, key, icon: Icon, tone }) => (
            <li key={key}>
              <a
                href="#projects"
                className="group/link flex items-center justify-between py-4 text-sm font-medium text-slate-700 transition-colors hover:text-[#9b7840]"
              >
                <span className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${tone}`} />
                  {label}
                  <span className="text-slate-400">
                    ({developer[key]})
                  </span>
                </span>

                <ArrowRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-[#b58b45]" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 w-0 bg-[#d6b779] transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

export default function Developers() {
  return (
    <>
      {/* Roof Exclusive - Above Developers */}
      <RoofExclusiveSection />

      <section id="developers" className="relative overflow-hidden bg-[#f8f7f4] py-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6b779]/50 bg-[#102b4c] text-[#e7c77d] shadow-lg">
              <Building2 className="h-7 w-7" />
            </span>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#a17b3d]">
              Trusted Real Estate Partners
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#102b4c] sm:text-4xl">
              Top Developers in India
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#d6b779]" />

            <p className="mt-5 text-base leading-[1.7] text-slate-600">
              Trusted builders with a proven record of timely delivery, offering ready-to-move homes, projects under construction and new launches.
            </p>
          </div>

          {/* Developer Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {DEVELOPERS.map((developer) => (
              <DeveloperCard
                key={developer.id}
                developer={developer}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-12 text-center">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-lg border border-[#b58b45] bg-[#102b4c] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6b779] hover:text-[#102033] hover:shadow-lg"
            >
              View all developers in India

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
