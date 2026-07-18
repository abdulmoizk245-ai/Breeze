"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  // { label: "All Services", href: "/Service" },
  { label: "Stress Management", href: "/Stressmanagement" },
  { label: "Quit Smoking", href: "/quietsomking" },
  { label: "Managing Stress", href: "/Managestress" },
  { label: "Boost Immune System", href: "/Immuesystem" },
  { label: "Three Pillars of Health", href: "/pillarhealth" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <nav className="mx-auto flex items-start justify-between px-4 sm:px-6 lg:items-center">
        {/* <Link
          href="/"
          className="relative inline-flex h-20 w-52 shrink-0 items-center transition-transform duration-300 hover:scale-105 sm:h-31 sm:w-60"
        >
          <Image
            src="/BRZ LOGO1.png"
            alt="Breezy Health Solutions"
            fill
            priority
            sizes="(max-width: 640px) 176px, 208px"
            className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
          />
        </Link> */}
        <Link
          href="/"
          className="relative inline-flex h-16 w-36 shrink-0 items-center justify-start transition-transform duration-300 hover:scale-105 sm:h-20 sm:w-48 lg:h-31 lg:w-60"
        >
          <Image
            src="/BRZ LOGO1.png"
            alt="Breezy Health Solutions"
            fill
            priority
            sizes="(max-width: 640px) 144px, 208px"
            className="object-contain object-left drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
          />
        </Link>

        {/* Desktop nav */}
        {/* <div className="hidden items-center rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-xl shadow-black/10 backdrop-blur-md lg:flex"> */}
        <div className="fixed bottom-6 left-1/2 z-[999] hidden -translate-x-1/2 items-center rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-xl lg:flex">
          {/* Services Dropdown */}
          <div className="group relative">
            <Link
              href="/Service"
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/25"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25 12 15.75 4.5 8.25"
                />
              </svg>
            </Link>
            <div className="invisible absolute bottom-full left-1/2 z-50 mb-5 w-80 -translate-x-1/2 translate-y-3 rounded-3xl border border-white/20 bg-white/95 p-3 opacity-0 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="absolute -bottom-5 left-0 h-5 w-full" />

              {/* <div className="mb-2 rounded-2xl bg-primary-500/10 px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600">
                  Our Services
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  Explore wellness and health support services
                </p>
              </div> */}

              <div className="space-y-1">
                {SERVICE_LINKS.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group/item flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-primary-500 hover:text-white"
                  >
                    <span>{service.label}</span>

                    <span className="translate-x-[-4px] text-tertiary-500 opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:text-white group-hover/item:opacity-100">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition-all duration-300 hover:bg-white/15 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-start gap-3 lg:flex">
          <a
            href="tel:+18005551234"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-primary-300"
          >
            +1 (800) 555-1234
          </a>

          <a
            href="/contact"
            className="group relative overflow-hidden rounded-full bg-primary-500 px-6 py-3 text-sm font-bold tracking-wide text-white shadow-xl shadow-primary-500/35 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-400 hover:shadow-primary-500/50 active:translate-y-0 active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10">Get a Quote</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-7 w-7"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav overlay */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile nav panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-primary-950 px-6 py-6 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-end">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {/* Mobile Services Dropdown */}
          <div className="border-b border-white/10 pb-2">
            <button
              type="button"
              onClick={() => setServiceOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold text-primary-300 transition-all hover:bg-white/10 hover:text-white"
            >
              <span>Services</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`h-4 w-4 transition-transform duration-300 ${
                  serviceOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25 12 15.75 4.5 8.25"
                />
              </svg>
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                serviceOpen
                  ? "mt-2 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              {/* <div className="min-h-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
                {SERVICE_LINKS.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => {
                      setOpen(false);
                      setServiceOpen(false);
                    }}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:bg-primary-500 hover:text-white"
                  >
                    {service.label}
                  </Link>
                ))}
              </div> */}
              <div className="min-h-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
                {/* All Services Button */}
                <Link
                  href="/Service"
                  onClick={() => {
                    setOpen(false);
                    setServiceOpen(false);
                  }}
                  className="mb-2 flex items-center justify-between rounded-xl bg-primary-500 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-primary-400"
                >
                  <span>All Services</span>
                  <span>→</span>
                </Link>

                {/* Individual Services */}
                {SERVICE_LINKS.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => {
                      setOpen(false);
                      setServiceOpen(false);
                    }}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:bg-primary-500 hover:text-white"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Main Links */}
          <div className="border-b border-white/10 py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-semibold text-primary-300 transition-all hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Contact */}
          <div className="pt-4">
            <a
              href="tel:+18005551234"
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              +1 (800) 555-1234
            </a>

            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="animate-quote-pulse mt-3 flex items-center justify-center rounded-full bg-primary-500 px-5 py-3 text-center text-sm font-bold tracking-wide text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-400 active:scale-95 active:bg-primary-700"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
