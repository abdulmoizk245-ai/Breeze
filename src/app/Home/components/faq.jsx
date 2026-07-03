"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const FAQS = [
  {
    q: "How fast can I get covered?",
    a: "Most members are approved and covered within 24-48 hours of submitting an application. Emergency and short-term options can start same-day.",
  },
  {
    q: "Can I keep my current doctor?",
    a: "Yes — our plans use nationwide networks with over a million providers, so there's a strong chance your current doctor is already in-network.",
  },
  {
    q: "What if I need to switch plans later?",
    a: "You can upgrade, downgrade, or switch plans at any renewal period with no penalty. Your personal agent will help you compare options before you commit.",
  },
  {
    q: "Is there a waiting period for pre-existing conditions?",
    a: "It depends on the plan type. Many of our supplemental and Medicare plans have no waiting period, and we'll walk you through the specifics before you enroll.",
  },
  {
    q: "How do I file a claim?",
    a: "Claims can be filed online, through our mobile app, or by calling your dedicated agent. Most claims are processed within 2-3 business days.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 py-24">
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Got Questions?
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Can&apos;t find what you&apos;re looking for? Reach out and a real
            person will get back to you.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
                  isOpen ? "border-emerald-300" : "border-zinc-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-emerald-950">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-emerald-500 text-white"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    <FaPlus className="h-3.5 w-3.5" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-6 text-zinc-500">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
