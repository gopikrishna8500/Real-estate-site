
import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { FAQS } from '@/data/directory';

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-[#f8f7f4] py-20 sm:py-24"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#d6b779]/20" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full border border-[#d6b779]/20" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6b779]/50 bg-[#102b4c] text-[#e7c77d] shadow-lg">
            <MessageCircleQuestion className="h-7 w-7" />
          </span>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-[#a17b3d]">
            Help Centre
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#102b4c] sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#d6b779]" />

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Find answers to common questions about buying, selling and investing in properties with Roof Enclaves.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-14 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#d6b779] bg-white shadow-[0_12px_30px_rgba(15,35,60,0.08)]'
                    : 'border-[#e8dfce] bg-white shadow-[0_4px_18px_rgba(15,35,60,0.03)] hover:border-[#d6b779]/70 hover:shadow-md'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#102b4c] text-[#e7c77d]'
                          : 'bg-[#f8f7f4] text-[#a17b3d] group-hover:bg-[#102b4c] group-hover:text-[#e7c77d]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span
                      className={`text-sm font-bold leading-6 transition-colors duration-300 sm:text-base ${
                        isOpen ? 'text-[#a17b3d]' : 'text-[#102b4c]'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 border-[#d6b779] bg-[#102b4c] text-[#e7c77d]'
                        : 'border-[#e8dfce] bg-white text-[#102b4c] group-hover:border-[#d6b779]'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="animate-in fade-in slide-in-from-top-1 duration-300"
                  >
                    <div className="mx-5 border-t border-[#e8dfce] sm:mx-7" />

                    <div className="flex gap-4 px-5 pb-6 pt-5 sm:px-7">
                      <span className="mt-1 h-5 w-1 shrink-0 rounded-full bg-[#d6b779]" />

                      <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Still have questions?
            <a
              href="#contact"
              className="ml-2 font-bold text-[#a17b3d] transition-colors hover:text-[#102b4c]"
            >
              Talk to our team →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
