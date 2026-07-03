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
  <section className="relative isolate flex min-h-[92vh] w-full items-center overflow-hidden">
  
    <Image
      src="/home/hero.png"
      alt="Family protected by health insurance"
      fill
      priority
      className="object-cover"
    />

    {/* Overlay for text contrast */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />

    {/* Decorative glow */}
    <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />

<div className="relative z-10 flex w-full flex-col gap-10 px-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
      {/* Text + CTA - LEFT SIDE */}
      <div className="max-w-xl text-white">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300 backdrop-blur-sm">
          <FaShieldHeart className="h-3.5 w-3.5" />
          #1 Rated Coverage Plans
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Health Insurance{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
            That Puts You First
          </span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-200">
          Affordable plans, fast claims, and 24/7 support — get covered in
          minutes and protect what matters most.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <button
            type="button"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 hover:bg-emerald-600 hover:shadow-emerald-500/50"
          >
            Get Started
            <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="h-4 w-4 text-emerald-400" />
              ))}
            </div>
            <span className="text-sm text-zinc-200">
              4.9/5 from 12,000+ members
            </span>
          </div>
        </div>
      </div>

      {/* Quote form - RIGHT SIDE */}
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5 sm:p-8">
        <h2 className="text-xl font-semibold text-zinc-900">
          Get a Free Quote
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          Fill in your details and we&apos;ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-zinc-700"
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
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-1 block text-sm font-medium text-zinc-700"
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
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-zinc-700"
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
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-zinc-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-emerald-500 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-600 hover:shadow-emerald-500/40"
          >
            Get My Quote
          </button>
        </form>
      </div>
    </div>
  </section>
);
}
