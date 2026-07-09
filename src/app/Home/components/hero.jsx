"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar, FaArrowRight, FaShieldHeart } from "react-icons/fa6";

export default function Hero() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Quote request:", form);
  }

  return (
    <section className="relative isolate flex min-h-[92vh] w-full items-center overflow-hidden W">
      <Image
        src="/Home/heroo.png"
        alt="Family protected by health insurance"
        fill
        priority
        className="object-cover"
      />

      {/* Navy Overlay - Black removed */}
      <div className="absolute inset-0 " />

      {/* Logo Theme Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#6EC7C2]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#7FA64A]/20 blur-3xl" />

      <div className="relative z-10 flex w-full flex-col gap-10 px-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        {/* Text + CTA - LEFT SIDE */}
        {/* <div className="max-w-xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#6EC7C2]/30 bg-[#6EC7C2]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#A7E7E3] backdrop-blur-sm">
            <FaShieldHeart className="h-3.5 w-3.5" />
            #1 Rated Coverage Plans
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Health Insurance{" "}
            <span className="bg-gradient-to-r from-[#6EC7C2] to-[#A8C96A] bg-clip-text text-transparent">
              That Puts You First
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-200">
            Affordable plans, fast claims, and 24/7 support — get covered in
            minutes and protect what matters most.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button
              type="button"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#6EC7C2] px-8 py-3.5 text-base font-semibold text-[#061222] shadow-lg shadow-[#6EC7C2]/30 transition-all hover:scale-105 hover:bg-[#A8C96A] hover:shadow-[#A8C96A]/40"
            >
              Get Started
              <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="h-4 w-4 text-[#A8C96A]" />
                ))}
              </div>
              <span className="text-sm text-slate-200">
                4.9/5 from 12,000+ members
              </span>
            </div>
          </div>
        </div> */}
        {/* Text + CTA - LEFT SIDE */}
        <div className="max-w-xl text-[#132A4A]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#6EC7C2]/40 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#132A4A] backdrop-blur-sm">
            <FaShieldHeart className="h-3.5 w-3.5 text-[#6EC7C2]" />
            #1 Rated Coverage Plans
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#132A4A] sm:text-5xl lg:text-6xl">
            Health Insurance{" "}
            <span className="bg-gradient-to-r from-[#2F8F8B] to-[#7FA64A] bg-clip-text text-transparent">
              That Puts You First
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#334155]">
            Affordable plans, fast claims, and 24/7 support — get covered in
            minutes and protect what matters most.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button
              type="button"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#132A4A] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#132A4A]/25 transition-all hover:scale-105 hover:bg-[#2F8F8B]"
            >
              Get Started
              <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="h-4 w-4 text-[#7FA64A]" />
                ))}
              </div>
              <span className="text-sm font-medium text-[#334155]">
                4.9/5 from 12,000+ members
              </span>
            </div>
          </div>
        </div>

        {/* Quote form - RIGHT SIDE */}
        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/10 sm:p-8">
          <h2 className="text-xl font-bold text-[#061222]">Get a Free Quote</h2>

          <p className="mt-1 text-sm text-slate-500">
            Fill in your details and we&apos;ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-900 outline-none focus:border-[#6EC7C2] focus:ring-2 focus:ring-[#6EC7C2]/30"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-900 outline-none focus:border-[#6EC7C2] focus:ring-2 focus:ring-[#6EC7C2]/30"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-900 outline-none focus:border-[#6EC7C2] focus:ring-2 focus:ring-[#6EC7C2]/30"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#6EC7C2] to-[#A8C96A] px-4 py-3 text-base font-bold text-[#061222] shadow-lg shadow-[#6EC7C2]/20 transition-all hover:-translate-y-0.5 hover:shadow-[#6EC7C2]/40"
            >
              Get My Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
