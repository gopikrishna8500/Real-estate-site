
import { ArrowRight, MapPin, Building2 } from 'lucide-react';
import {
  CITY_TILES,
  HYDERABAD_LOCALITIES,
  LOCALITIES
} from '@/data/directory';

// Famous landmark images for each city
const CITY_VISUALS: Record<string, { image: string; landmark: string }> = {
  hyderabad: {
    image: 'https://images.unsplash.com/photo-1657981630164-769503f3a9a8?auto=format&fit=crop&w=900&q=85',
    landmark: 'Charminar',
  },
  mumbai: {
    image: 'https://images.unsplash.com/photo-1758706603493-b9a8b1a3a731?auto=format&fit=crop&w=900&q=85',
    landmark: 'Gateway of India',
  },
  delhi: {
    image: 'https://images.unsplash.com/photo-1743136648410-a73d5c9dbaab?auto=format&fit=crop&w=900&q=85',
    landmark: 'India Gate',
  },
  bangalore: {
    image: 'https://images.unsplash.com/photo-1687158267344-0e2c97ac9b17?auto=format&fit=crop&w=900&q=85',
    landmark: 'Vidhana Soudha',
  },
  bengaluru: {
    image: 'https://images.unsplash.com/photo-1687158267344-0e2c97ac9b17?auto=format&fit=crop&w=900&q=85',
    landmark: 'Vidhana Soudha',
  },
  chennai: {
    image: 'https://images.unsplash.com/photo-1732793080226-48c07917cb27?auto=format&fit=crop&w=900&q=85',
    landmark: 'Marina Beach',
  },
  kolkata: {
    image: 'https://images.unsplash.com/photo-1749834776348-7cf1b8a13e75?auto=format&fit=crop&w=900&q=85',
    landmark: 'Victoria Memorial',
  },
  pune: {
    image: 'https://images.unsplash.com/photo-1666865824095-b744c8c09be8?auto=format&fit=crop&w=900&q=85',
    landmark: 'Shaniwar Wada',
  },
};

const DEFAULT_CITY_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85';

export default function Localities() {
  return (
    <section
      id="localities"
      className="relative overflow-hidden bg-[#f7f8fa] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b18b4b]">
              Top Localities
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#10233e] sm:text-4xl">
              Where Growth Is Happening
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-[#c6a568]" />
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600">
            Compare average prices per square foot and discover new projects
            launching in India's fastest-growing neighbourhoods.
          </p>
        </div>

        {/* Premium Locality Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LOCALITIES.map((locality) => (
            <article
              key={locality.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8e4dc] bg-white shadow-[0_5px_25px_rgba(16,35,62,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c6a568]/60 hover:shadow-[0_15px_35px_rgba(16,35,62,0.12)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={locality.image}
                  alt={locality.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07182e]/85 via-[#07182e]/10 to-transparent" />

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="text-lg font-bold tracking-wide">
                    {locality.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-200">
                    Avg price{' '}
                    <span className="font-bold text-[#e7c77d]">
                      {locality.pricePerSqFt}
                    </span>{' '}
                    per sq.ft.
                  </p>
                </div>
              </div>

              <a
                href="#projects"
                className="mt-auto flex items-center justify-between border-t border-[#eeeae2] px-5 py-4 text-sm font-semibold text-[#10233e] transition-colors hover:bg-[#10233e] hover:text-white"
              >
                {locality.newProjects} new projects

                <ArrowRight className="h-4 w-4 text-[#b18b4b] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>

        {/* Popular Cities */}
        <div className="mt-28">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b18b4b]">
              Popular Cities
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#10233e] sm:text-4xl">
              Explore Real Estate in India
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#c6a568]" />

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Discover exceptional properties and premium investment
              opportunities across India's leading cities.
            </p>
          </div>

          {/* Premium City Image Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CITY_TILES.map(({ name }) => {
              const city = CITY_VISUALS[name.toLowerCase()] || {
                image: DEFAULT_CITY_IMAGE,
                landmark: 'Explore the city',
              };

              return (
                <a
                  key={name}
                  href="#projects"
                  className="group relative h-64 overflow-hidden rounded-2xl border border-[#c6a568]/20 bg-[#10233e] shadow-[0_8px_25px_rgba(16,35,62,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(16,35,62,0.22)]"
                >
                  <img
                    src={city.image}
                    alt={`${name} - ${city.landmark}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Premium Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07182e]/95 via-[#07182e]/25 to-transparent transition-all duration-500 group-hover:from-[#07182e]/90" />

                  {/* Gold Top Accent */}
                  <div className="absolute left-5 top-5 h-[3px] w-10 rounded-full bg-[#e7c77d] transition-all duration-300 group-hover:w-16" />

                  {/* City Details */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">

                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e7c77d]">
                        Explore Properties
                      </p>

                      <h3 className="text-2xl font-extrabold tracking-wide text-white">
                        {name}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-slate-200">
                        {city.landmark}
                      </p>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e7c77d]/70 bg-[#10233e]/50 text-[#e7c77d] backdrop-blur-md transition-all duration-300 group-hover:border-[#e7c77d] group-hover:bg-[#e7c77d] group-hover:text-[#10233e]">
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>

                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Premium Hyderabad Localities Panel */}
        <div className="relative mt-28 overflow-hidden rounded-3xl border border-[#c6a568]/30 bg-white shadow-[0_12px_40px_rgba(16,35,62,0.08)]">

          {/* Header */}
          <div className="relative overflow-hidden bg-[#10233e] px-8 py-9 sm:px-12">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-[#e7c77d]/10" />
            <div className="absolute -right-5 -top-12 h-48 w-48 rounded-full border border-[#e7c77d]/15" />

            <div className="relative flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#e7c77d]/40 bg-white/10 text-[#e7c77d]">
                <MapPin className="h-6 w-6" />
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e7c77d]">
                  Hyderabad Property Guide
                </p>

                <h2 className="mt-2 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  Properties in Hyderabad for Sale
                </h2>
              </div>
            </div>
          </div>

          {/* Locality Links */}
          <div className="p-8 sm:p-12">
            <div className="mb-7 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#b18b4b]" />

              <p className="text-xs font-bold uppercase tracking-widest text-[#10233e]">
                Explore Popular Neighbourhoods
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {HYDERABAD_LOCALITIES.map((area) => (
                <li key={area}>
                  <a
                    href="#projects"
                    className="group flex items-center justify-between gap-2 rounded-lg border border-slate-100 bg-[#f8f9fb] px-3 py-3 text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-[#c6a568]/50 hover:bg-[#10233e] hover:text-white sm:text-sm"
                  >
                    <span>Property in {area}</span>

                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#b18b4b] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
