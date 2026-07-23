"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import QuoteModal from "@/app/components/QuoteModal";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Service/health-hero.jpg"
          alt="Family reviewing health insurance options"
          fill
          priority
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-primary-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(131,169,53,0.28),transparent_35%)]" />
      </div>

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[32rem] w-[32rem] rounded-full bg-primary-500/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-secondary-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px]" />

      <div className="relative mx-auto grid min-h-[92vh]  items-center gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Left Content */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mt-20 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-primary-100 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-primary-400" />
            Licensed Health, Accident & Life Insurance Advisor
          </div>

          {/* Light backdrop panel so Home's navy heading/paragraph colors stay legible on this dark hero */}
          <div className="mt-7 max-w-2xl rounded-3xl p-6  sm:p-8">
            <h1 className="text-4xl font-bold tracking-tight text-[#132A4A] sm:text-5xl lg:text-6xl">
              Health Insurance
              <span className="block bg-gradient-to-r from-[#2F8F8B] to-[#7FA64A] bg-clip-text text-transparent">
                Made Clear, Simple & Personal.
              </span>
            </h1>

            <p className="mt-6 text-base leading-8 text-[#334155] sm:text-lg">
              Explore affordable health coverage options for individuals,
              families, self-employed professionals, and small business
              owners — with guidance that helps you choose confidently.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-primary-500/25 transition hover:-translate-y-1 hover:bg-primary-400"
            >
              Get a Free Quote
              <span className="ml-2">→</span>
            </button>

            {showNumber ? (
              <a
                href="tel:+18888791872"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
              >
                <FaPhoneAlt className="h-3.5 w-3.5" />
                +1 (888) 879-1872
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setShowNumber(true)}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
              >
                Speak With Brenda
              </button>
            )}
          </div>

          {/* Trust Points */}
          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {["No Obligation", "Clear Plan Options", "Personal Guidance"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary-400/15 text-primary-300">
                    ✓
                  </div>
                  <p className="text-sm font-semibold text-white">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Right Creative Card Area */}
        <div className="relative hidden lg:block">
          <div className="relative ml-auto h-[560px] max-w-[470px]">
            {/* Main Glass Card */}
            <div className="absolute inset-x-0 top-16 rounded-[2rem] border border-white/20 bg-white/15 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Coverage Review
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-slate-950">
                      Find Your Best Fit
                    </h3>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-2xl">
                    🛡️
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {[
                    ["Private PPO Plans", "Popular option"],
                    ["Dental & Vision", "Add-on coverage"],
                    ["Life Insurance", "Family protection"],
                  ].map(([title, label]) => (
                    <div
                      key={title}
                      className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <div>
                        <p className="font-bold text-slate-900">{title}</p>
                        <p className="mt-1 text-xs font-medium text-slate-500">
                          {label}
                        </p>
                      </div>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-bold text-primary-700">
                        Check
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-slate-950 p-5">
                  <p className="text-sm font-medium text-slate-300">
                    Most quote reviews take
                  </p>
                  <p className="mt-1 text-3xl font-bold text-white">
                    10–15 Minutes
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-10 top-0 rounded-3xl border border-white/20 bg-white/90 p-5 shadow-2xl backdrop-blur-xl">
              <p className="text-sm font-semibold text-slate-500">
                Clients Guided
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-950">20+ yrs</p>
              <p className="mt-1 text-xs font-medium text-primary-700">
                Healthcare experience
              </p>
            </div>

            {/* Floating Card 2 */}
            {/* <div className="absolute -right-6 bottom-20 rounded-3xl border border-white/20 bg-white/90 p-5 shadow-2xl backdrop-blur-xl">
              <p className="text-sm font-semibold text-slate-500">
                Plan Support
              </p>
              <div className="mt-3 flex -space-x-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  H
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-100 text-sm font-bold text-secondary-700">
                  D
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-100 text-sm font-bold text-secondary-700">
                  L
                </span>
              </div>
              <p className="mt-3 text-xs font-medium text-slate-500">
                Health · Dental · Life
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-t from-[#f8fffb] to-transparent" /> */}

      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
