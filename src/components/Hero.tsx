
import {
  Building2,
  MapPin,
  Warehouse,
  UserRound,
  Paintbrush
} from 'lucide-react';

const HERO_IMAGE = 'https://oporvrvwdcxmfhjhpbdn.supabase.co/storage/v1/object/public/column-images/columns/1771310609914-06yo79.jpg';

// const HERO_IMAGE = 'https://www.dubaipropertycapital.com/images/downtown.png';

const QUICK_LINKS = [
  { label: 'Interior Design', icon: Paintbrush, href: '#services' },
  { label: 'Plot & Land', icon: MapPin, href: '#projects' },
  { label: 'Commercial', icon: Warehouse, href: '#projects' },
  { label: 'Agents', icon: UserRound, href: '#contact' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[480px] items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={HERO_IMAGE}
        alt="Luxury Dubai skyline with Burj Khalifa and modern skyscrapers"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      {/* Premium Navy Blue Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07182e]/65 via-[#0b2340]/40 to-[#102b45]/25" />

      {/* Hero Content */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-20 text-center">

        <h1 className="max-w-4xl text-xl font-extrabold uppercase leading-tight tracking-tight text-white drop-shadow-lg sm:text-2xl">
          Your Home Buying Journey Starts Here
        </h1>

        <p className="mt-4 text-sm font-medium text-white drop-shadow-md sm:text-base">
          Over 100+ Properties Worth 100Cr Sold With{' '}
          <span className="font-bold text-[#e7c77d]">
            0% Brokerage
          </span>
        </p>

        {/* Premium Quick Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {QUICK_LINKS.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              className="group inline-flex min-w-[140px] items-center justify-center gap-2 rounded-lg border border-[#d6b779]/60 bg-[#102b4c]/90 px-5 py-4 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e7c77d] hover:bg-[#d6b779] hover:text-[#102033] hover:shadow-[0_8px_25px_rgba(214,183,121,0.3)]"
            >
              <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              {label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
