
import { useEffect, useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Developers', href: '#developers' },
  { label: 'Localities', href: '#localities' },
  { label: 'Services', href: '#services' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-slate-100 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto grid h-[68px] max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 sm:px-7">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 justify-self-start">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700 text-white">
            <Building2 className="h-5 w-5" />
          </span>

          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
              ROOF ENCLAVES
            </span>
            <span className="block text-[7px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[8px]">
              Where Your Trust Matters Most
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:bg-[#f5f1e9] hover:text-slate-900 ${
                index === 0
                  ? 'bg-[#f5f1e9] text-blue-900'
                  : 'text-slate-700'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="flex items-center justify-self-end">
          <a
            href="#contact"
            className="hidden rounded border border-slate-500 px-5 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-900 hover:text-white sm:inline-block"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="border-t border-slate-100 bg-white px-5 py-3 shadow-lg lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}
