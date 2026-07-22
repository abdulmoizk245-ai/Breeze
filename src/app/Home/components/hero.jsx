"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaStar,
  FaArrowRight,
  FaShieldHeart,
  FaCircleCheck,
  FaCircleExclamation,
  FaXmark,
} from "react-icons/fa6";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your full name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name looks too short.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!PHONE_RE.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onClose, 4500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const isSuccess = toast.type === "success";

  return (
    <div className="pointer-events-none fixed inset-x-0 top-6 z-[100] flex justify-center px-4 sm:justify-end sm:px-6">
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border p-4 shadow-2xl backdrop-blur-md ${
          isSuccess
            ? "border-secondary-200 bg-secondary-50/95 text-secondary-900"
            : "border-primary-200 bg-white/95 text-primary-900"
        }`}
      >
        {isSuccess ? (
          <FaCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-secondary-600" />
        ) : (
          <FaCircleExclamation className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
        )}
        <div className="flex-1">
          <p className="text-sm font-semibold">{toast.title}</p>
          <p className="mt-0.5 text-sm leading-6 opacity-80">
            {toast.message}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss notification"
          className="shrink-0 rounded-full p-1 opacity-60 transition hover:opacity-100"
        >
          <FaXmark className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function Hero() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setToast({
        type: "error",
        title: "Please fix the highlighted fields",
        message:
          "A few details still need your attention before we can send your quote.",
      });
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setToast({
        type: "success",
        title: "Quote request sent",
        message: "Thanks! We'll get back to you shortly.",
      });
      setForm({ name: "", phone: "", email: "" });
      setErrors({});
    } catch {
      setToast({
        type: "error",
        title: "Request not sent",
        message: "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="relative isolate flex min-h-[92vh] w-full items-center overflow-hidden W">
      <Toast toast={toast} onClose={() => setToast(null)} />

      <Image
        src="/Home/herooo.png"
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
        <div className="max-w-xl text-[#132A4A] relative z-10 pt-24 sm:pt-28 lg:pt-0">
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
            {/* <button
              type="button"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#132A4A] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#132A4A]/25 transition-all hover:scale-105 hover:bg-[#2F8F8B]"
            >
              Get Started
              <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button> */}
            <a
  href="mailto:Info@breezyhealthsolutions.com"
  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#132A4A] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#132A4A]/25 transition-all hover:scale-105 hover:bg-[#2F8F8B]"
>
  <span>Get Started</span>
  <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
</a>
   
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
        <div
          id="quote"
          className="w-full max-w-md scroll-mt-28 rounded-3xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/10 sm:p-8"
        >
          <h2 className="text-xl font-bold text-[#061222]">Get a Free Quote</h2>

          <p className="mt-1 text-sm text-slate-500">
            Fill in your details and we&apos;ll get back to you.
          </p>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-4"
          >
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
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                aria-invalid={Boolean(errors.name)}
                className={`w-full rounded-xl border px-4 py-2.5 text-slate-900 outline-none focus:ring-2 ${
                  errors.name
                    ? "border-primary-400 focus:border-primary-400 focus:ring-primary-100"
                    : "border-slate-300 focus:border-[#6EC7C2] focus:ring-[#6EC7C2]/30"
                }`}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs font-medium text-primary-500">
                  {errors.name}
                </p>
              )}
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
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                aria-invalid={Boolean(errors.phone)}
                className={`w-full rounded-xl border px-4 py-2.5 text-slate-900 outline-none focus:ring-2 ${
                  errors.phone
                    ? "border-primary-400 focus:border-primary-400 focus:ring-primary-100"
                    : "border-slate-300 focus:border-[#6EC7C2] focus:ring-[#6EC7C2]/30"
                }`}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs font-medium text-primary-500">
                  {errors.phone}
                </p>
              )}
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
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                className={`w-full rounded-xl border px-4 py-2.5 text-slate-900 outline-none focus:ring-2 ${
                  errors.email
                    ? "border-primary-400 focus:border-primary-400 focus:ring-primary-100"
                    : "border-slate-300 focus:border-[#6EC7C2] focus:ring-[#6EC7C2]/30"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-primary-500">
                  {errors.email}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#6EC7C2] to-[#A8C96A] px-4 py-3 text-base font-bold text-[#061222] shadow-lg shadow-[#6EC7C2]/20 transition-all hover:-translate-y-0.5 hover:shadow-[#6EC7C2]/40 disabled:pointer-events-none disabled:opacity-70"
            >
              {submitting ? "Sending..." : "Get My Quote"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
