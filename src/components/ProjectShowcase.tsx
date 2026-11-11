
import { useMemo, useState } from 'react';
import {
  MapPin,
  Phone,
  Search,
  ChevronDown,
  SearchX
} from 'lucide-react';

import {
  CITIES,
  PROJECTS,
  PROPERTY_TYPES,
  type City,
  type PropertyType,
  type ProjectStatus
} from '@/data/projects';

type TypeFilter = 'All Types' | PropertyType;

const STATUS_STYLES: Record<ProjectStatus, string> = {
  'Ready to Move': 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  'Under Construction': 'bg-[#fff8e9] text-[#a87924] ring-[#d6b779]/40',
  'New Launch': 'bg-[#edf2fa] text-[#17385f] ring-[#17385f]/20',
};

export default function ProjectShowcase() {
  const [city, setCity] = useState<City>('Hyderabad');
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('All Types');

  const projects = useMemo(() => {
    const term = query.trim().toLowerCase();

    return PROJECTS.filter(
      (p) =>
        p.city === city &&
        (typeFilter === 'All Types' || p.type === typeFilter) &&
        (term === '' ||
          p.locality.toLowerCase().includes(term) ||
          p.name.toLowerCase().includes(term)),
    );
  }, [city, query, typeFilter]);

  return (
    <section id="projects" className="bg-[#f7f8fa] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a98545]">
            Explore Projects
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-[1.2] tracking-tight text-[#102b4c] sm:text-4xl">
            Hot Selling Real Estate Projects in India
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Discover premium residential and commercial properties
            across India's fastest-growing cities.
          </p>
        </div>

        {/* City Tabs */}
        <div
          role="tablist"
          aria-label="Cities"
          className="mt-10 flex gap-2 overflow-x-auto pb-3 sm:justify-center"
        >
          {CITIES.map((c) => {
            const active = c === city;

            return (
              <button
                key={c}
                role="tab"
                aria-selected={active}
                onClick={() => setCity(c)}
                className={`whitespace-nowrap rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? 'border-[#d6b779] bg-[#102b4c] text-[#f0d69e] shadow-lg shadow-[#102b4c]/20'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-[#d6b779] hover:text-[#102b4c]'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Search and Filter */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_8px_30px_rgba(16,43,76,0.07)] sm:grid-cols-[1fr_200px]">

          <label className="flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 transition-all focus-within:border-[#d6b779] focus-within:bg-[#faf9f6]">
            <Search className="h-5 w-5 text-[#a98545]" />

            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search area in ${city} (e.g. Kokapet, Whitefield)`}
              className="w-full bg-transparent text-sm text-[#102b4c] placeholder:text-slate-400 outline-none"
            />
          </label>

          <div className="relative">
            <select
              value={typeFilter}
              onChange={(e) =>
                setTypeFilter(e.target.value as TypeFilter)
              }
              aria-label="Property type"
              className="h-full w-full appearance-none rounded-xl border border-slate-100 bg-[#f8f8f7] px-4 py-3 pr-10 text-sm font-semibold text-[#102b4c] outline-none focus:border-[#d6b779] focus:ring-2 focus:ring-[#d6b779]/20"
            >
              <option>All Types</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a98545]" />
          </div>
        </div>

        {/* Empty Search Results */}
        {projects.length === 0 ? (
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
            <SearchX className="h-10 w-10 text-[#a98545]" />

            <h3 className="mt-4 text-lg font-bold text-[#102b4c]">
              No projects match your search
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Try another locality or clear the filters to see every listing in {city}.
            </p>

            <button
              type="button"
              onClick={() => {
                setQuery('');
                setTypeFilter('All Types');
              }}
              className="mt-6 rounded-lg bg-[#102b4c] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#d6b779] hover:text-[#102b4c]"
            >
              Clear filters
            </button>
          </div>
        ) : (

          /* Project Cards */
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_5px_25px_rgba(16,43,76,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d6b779]/50 hover:shadow-[0_15px_35px_rgba(16,43,76,0.13)]"
              >
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07182e]/30 to-transparent" />

                  <span
                    className={`absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold shadow-sm ring-1 backdrop-blur ${STATUS_STYLES[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project Details */}
                <div className="flex flex-1 flex-col p-6">

                  <h3 className="text-lg font-extrabold leading-snug text-[#102b4c] transition-colors group-hover:text-[#a98545]">
                    {project.name}
                  </h3>

                  <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                    <MapPin className="h-4 w-4 shrink-0 text-[#b18b4c]" />
                    {project.locality}, {project.city}
                  </p>

                  <div className="mt-4">
                    <span className="inline-flex rounded-md border border-[#d6b779]/30 bg-[#fbf8f0] px-3 py-1.5 text-xs font-semibold text-[#98743b]">
                      {project.badge}
                    </span>
                  </div>

                  <p className="mt-5 text-lg font-extrabold text-[#102b4c]">
                    {project.priceRange}
                  </p>

                  <div className="mb-4 mt-4 h-px w-full bg-slate-100" />

                  {/* Call Now */}
                  <a
                    href="tel:+919059059757"
                    className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-[#102b4c] bg-[#102b4c] px-4 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:border-[#d6b779] hover:bg-[#d6b779] hover:text-[#102b4c] hover:shadow-md"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
