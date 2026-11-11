
import { type FormEvent } from 'react';
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
} from 'lucide-react';

const INPUT_CLASS =
  'w-full rounded-xl border border-[#e8dfce] bg-[#fbfaf7] px-4 py-3.5 text-sm text-[#102b4c] outline-none transition-all placeholder:text-slate-400 focus:border-[#b58b45] focus:bg-white focus:ring-4 focus:ring-[#d6b779]/15';

export default function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const subject = encodeURIComponent(
      `New Property Enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `New Property Enquiry\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Message: ${message || 'Not provided'}`
    );

    window.location.href =
      `mailto:info@roofenclaves.in?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f8f7f4] py-20 sm:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#d6b779]/20" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full border border-[#d6b779]/20" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">

        {/* Contact Information */}
        <div className="pt-3">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#d6b779]/40 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a17b3d]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b58b45]" />
            Get in Touch
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-[1.2] tracking-tight text-[#102b4c] sm:text-4xl lg:text-5xl">
            Let's find the
            <span className="block text-[#b58b45]">
              right home for you.
            </span>
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-[#d6b779]" />

          <p className="mt-7 max-w-lg text-base leading-8 text-slate-600">
            Share a few details and an advisor will call you back
            with curated options that match your budget and timeline.
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-5">

            <a
              href="tel:+919059059757"
              className="group flex items-center gap-5 rounded-2xl border border-[#e8dfce] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b779] hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102b4c] text-[#e7c77d] shadow-md transition-colors group-hover:bg-[#d6b779] group-hover:text-[#102b4c]">
                <Phone className="h-5 w-5" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#a17b3d]">
                  Call Us
                </span>
                <span className="mt-1 block font-bold text-[#102b4c]">
                  +91 905 905 9757
                </span>
              </span>

              <ArrowRight className="h-4 w-4 text-[#b58b45] transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="mailto:info@roofenclaves.in"
              className="group flex items-center gap-5 rounded-2xl border border-[#e8dfce] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b779] hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102b4c] text-[#e7c77d] shadow-md transition-colors group-hover:bg-[#d6b779] group-hover:text-[#102b4c]">
                <Mail className="h-5 w-5" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#a17b3d]">
                  Email Us
                </span>
                <span className="mt-1 block break-all font-bold text-[#102b4c]">
                  info@roofenclaves.in
                </span>
              </span>

              <ArrowRight className="h-4 w-4 text-[#b58b45] transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex items-start gap-5 rounded-2xl border border-[#e8dfce] bg-white p-5 shadow-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102b4c] text-[#e7c77d] shadow-md">
                <MapPin className="h-5 w-5" />
              </span>

              <span>
                <span className="block text-xs font-bold uppercase tracking-widest text-[#a17b3d]">
                  Visit Our Office
                </span>
                <span className="mt-2 block text-sm leading-7 text-slate-600">
                  Office No. 8-101, Pedakurapadu, Palnadu District,
                  Andhra Pradesh 522402
                </span>
              </span>
            </div>

          </div>
        </div>

        {/* Enquiry Form */}
        <div className="relative overflow-hidden rounded-3xl border border-[#e8dfce] bg-white shadow-[0_15px_50px_rgba(15,35,60,0.09)]">

          {/* Form Header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#07182e] via-[#102b4c] to-[#183c5b] px-7 py-8 sm:px-10">
            <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border border-[#d6b779]/20" />
            <div className="absolute -right-4 -top-5 h-24 w-24 rounded-full border border-[#d6b779]/20" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e7c77d]">
                Property Enquiry
              </p>

              <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                Let's get started
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Tell us what you're looking for. Our team is ready to help.
              </p>
            </div>
          </div>

          <div className="p-7 sm:p-10">

            <form onSubmit={handleSubmit} className="grid gap-5">

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-[#102b4c]">
                  Full Name
                  <input
                    required
                    maxLength={200}
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className={INPUT_CLASS}
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-[#102b4c]">
                  Phone Number
                  <input
                    required
                    maxLength={30}
                    type="tel"
                    name="phone"
                    placeholder="+91 00000 00000"
                    className={INPUT_CLASS}
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-[#102b4c]">
                Email Address
                <input
                  required
                  maxLength={320}
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className={INPUT_CLASS}
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-[#102b4c]">
                What are you looking for?
                <textarea
                  rows={4}
                  maxLength={2000}
                  name="message"
                  placeholder="E.g. 3 BHK in Gachibowli under 2 Cr"
                  className={`${INPUT_CLASS} resize-y`}
                />
              </label>

              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl border border-[#b58b45] bg-[#102b4c] px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6b779] hover:text-[#102033] hover:shadow-xl"
              >
                Send Enquiry
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Your enquiry will open in your default email application.
                Please press Send to submit it.
              </p>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
