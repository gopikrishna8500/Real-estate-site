
import {
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from 'lucide-react';

const SERVICE_LINKS = [
  'Builder Services',
  'Broker Services',
  'Loan Services',
];

const COMPANY_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Careers', href: '#contact' },
  { label: 'Blog', href: '#faqs' },
  { label: 'Testimonials', href: '#about' },
];

const SOCIAL = [
  { label: 'Facebook', icon: Facebook },
  { label: 'Instagram', icon: Instagram },
  { label: 'X', icon: Twitter },
  { label: 'LinkedIn', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#061426] via-[#0b2039] to-[#102b4c] text-slate-300">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#d6b779]/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#d6b779]/10" />

      {/* Main Footer */}
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-20">

        {/* Brand Section */}
        <div>
          <a href="#home" className="group inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d6b779]/50 bg-[#d6b779]/10 text-[#e7c77d] shadow-lg transition-all duration-300 group-hover:bg-[#d6b779] group-hover:text-[#102b4c]">
              <Building2 className="h-6 w-6" />
            </span>

            <span className="text-xl font-extrabold tracking-tight text-white">
              Roof <span className="text-[#e7c77d]">Enclaves</span>
            </span>
          </a>

          <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
            Where every property choice is backed by trust and expert insight.
            Your journey to the perfect property starts with us.
          </p>

          {/* Social Links */}
          <div className="mt-7 flex gap-3">
            {SOCIAL.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b779]/60 hover:bg-[#d6b779] hover:text-[#102b4c]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e7c77d]">
            Our Services
            <span className="h-px w-8 bg-[#d6b779]/50" />
          </h3>

          <ul className="mt-7 space-y-4 text-sm">
            {SERVICE_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#e7c77d]"
                >
                  <span className="h-1 w-1 rounded-full bg-[#b58b45] transition-all group-hover:w-3" />
                  {label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e7c77d]">
            Know Us
            <span className="h-px w-8 bg-[#d6b779]/50" />
          </h3>

          <ul className="mt-7 space-y-4 text-sm">
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#e7c77d]"
                >
                  <span className="h-1 w-1 rounded-full bg-[#b58b45] transition-all group-hover:w-3" />
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e7c77d]">
            Reach Us
            <span className="h-px w-8 bg-[#d6b779]/50" />
          </h3>

          <ul className="mt-7 space-y-5 text-sm">

            <li>
              <a
                href="mailto:info@roofenclaves.in"
                className="group flex items-center gap-3 transition-colors hover:text-[#e7c77d]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#d6b779]/30 bg-[#d6b779]/10 text-[#e7c77d] transition-colors group-hover:bg-[#d6b779] group-hover:text-[#102b4c]">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="break-all">info@roofenclaves.in</span>
              </a>
            </li>

            <li>
              <a
                href="tel:+919059059757"
                className="group flex items-center gap-3 transition-colors hover:text-[#e7c77d]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#d6b779]/30 bg-[#d6b779]/10 text-[#e7c77d] transition-colors group-hover:bg-[#d6b779] group-hover:text-[#102b4c]">
                  <Phone className="h-4 w-4" />
                </span>
                +91 905 905 9757
              </a>
            </li>

            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#d6b779]/30 bg-[#d6b779]/10 text-[#e7c77d]">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="leading-6 text-slate-400">
                Office No. 8-101, Pedakurapadu, Palnadu District, Andhra Pradesh 522402
              </span>
            </li>

          </ul>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#d6b779]/50 to-transparent" />
      </div>

      {/* Back to Top */}
      <div className="relative mx-auto max-w-7xl px-6 py-6">
        <div className="flex justify-center lg:justify-end">
          <a
            href="#home"
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 rounded-lg border border-[#d6b779]/40 px-4 py-2.5 text-xs font-semibold text-[#e7c77d] transition-all duration-300 hover:bg-[#d6b779] hover:text-[#102b4c]"
          >
            Back to Top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </a>
        </div>
      </div>

      {/* Small Footer Bottom */}
      <div className="border-t border-white/10 bg-[#061426]">
        <div className="mx-auto max-w-7xl px-5 py-5">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-[11px] text-slate-400 md:flex-row md:text-left">

            <div className="space-y-1">
              <p>
                <span className="font-semibold text-[#d6b779]">RERA No:</span>{" "}
                A02500003931
              </p>
              <p>
                <span className="font-semibold text-[#d6b779]">Corporate Office:</span>{" "}
                Office No. 8-101, Pedakurapadu, Palnadu District, Andhra Pradesh - 522402
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <a href="#privacy-policy" className="transition hover:text-[#e7c77d]">
                Privacy Policy
              </a>
              <a href="#user-agreement" className="transition hover:text-[#e7c77d]">
                User Agreement
              </a>
              <a href="#disclaimer" className="transition hover:text-[#e7c77d]">
                Disclaimer
              </a>
            </div>

          </div>

          <div className="mt-4 border-t border-white/10 pt-4 text-center text-[11px] text-slate-500">
            © 2026 Roof Enclaves Pvt. Ltd. All Rights Reserved.
            <span className="mx-1 hidden sm:inline">|</span>
            <span className="block sm:inline">
              Designed &amp; Developed by{" "}
              <span className="font-semibold text-[#d6b779]">
                Ideal Path Software Solutions
              </span>
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
