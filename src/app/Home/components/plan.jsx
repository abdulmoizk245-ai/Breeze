"use client";

import { useState } from "react";
import { FaCheck, FaStar } from "react-icons/fa6";

const PLANS = [
  {
    name: "Essential",
    tagline: "Solid coverage for individuals",
    monthly: 89,
    yearly: 79,
    features: [
      "Primary care visits",
      "Emergency coverage",
      "Generic prescriptions",
      "24/7 telehealth",
    ],
  },
  {
    name: "Complete",
    tagline: "Our most popular family plan",
    monthly: 159,
    yearly: 139,
    featured: true,
    features: [
      "Everything in Essential",
      "Specialist & dental visits",
      "Brand-name prescriptions",
      "Low deductible",
      "Dedicated personal agent",
    ],
  },
  {
    name: "Premium",
    tagline: "Maximum protection, zero worry",
    monthly: 229,
    yearly: 199,
    features: [
      "Everything in Complete",
      "Vision & mental health care",
      "Nationwide top-tier network",
      "Zero-cost preventive care",
      "Priority claims processing",
    ],
  },
];

export default function Plan() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="plans" className="relative w-full overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-emerald-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Simple Pricing
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
            Plans that fit your budget
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            No hidden fees, no surprises — cancel or switch plans anytime.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 p-1 sm:gap-3 sm:p-1.5">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors sm:px-5 sm:py-2 sm:text-sm ${
                !yearly ? "bg-emerald-500 text-white shadow" : "text-zinc-500"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors sm:gap-2 sm:px-5 sm:py-2 sm:text-sm ${
                yearly ? "bg-emerald-500 text-white shadow" : "text-zinc-500"
              }`}
            >
              Yearly
              <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700 sm:px-2 sm:text-[10px]">
                SAVE 12%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                plan.featured
                  ? "bg-gradient-to-br from-emerald-600 to-emerald-800 shadow-2xl shadow-emerald-900/20 lg:-translate-y-4"
                  : "border border-zinc-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/5"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700 shadow-lg">
                  <FaStar className="h-3 w-3 text-emerald-500" />
                  Most Popular
                </span>
              )}

              <h3
                className={`text-xl font-bold ${plan.featured ? "text-white" : "text-emerald-950"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm ${plan.featured ? "text-emerald-100/80" : "text-zinc-500"}`}
              >
                {plan.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-emerald-950"}`}
                >
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                <span
                  className={`text-sm ${plan.featured ? "text-emerald-100/80" : "text-zinc-500"}`}
                >
                  /month
                </span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 text-sm ${plan.featured ? "text-emerald-50" : "text-zinc-600"}`}
                  >
                    <FaCheck
                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${plan.featured ? "text-emerald-300" : "text-emerald-500"}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#quote"
                className={`mt-8 w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition-all hover:scale-105 ${
                  plan.featured
                    ? "bg-white text-emerald-700 shadow-lg hover:bg-emerald-50"
                    : "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600"
                }`}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
