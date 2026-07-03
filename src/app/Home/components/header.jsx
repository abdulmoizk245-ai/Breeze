"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Plans", href: "#plans" },
  { label: "Coverage", href: "#coverage" },
  { label: "Claims", href: "#claims" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="relative inline-block h-11 w-32 shrink-0 transition-transform hover:scale-105 sm:h-12 sm:w-36">
          <Image
    src="/logo.png"
    alt="Breezy Health Solutions"
    fill
    priority
    sizes="160px"
    className="object-contain"
  />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-zinc-200 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-emerald-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+18005551234"
            className="text-sm font-semibold text-white"
          >
            +1 (800) 555-1234
          </a>
          <a
            href="#quote"
            className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 hover:bg-emerald-600 hover:shadow-emerald-500/50"
          >
            Get a Quote
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav panel */}
      {open && (
        <div className="border-t border-white/10 bg-black/90 px-6 py-6 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+18005551234"
              className="text-base font-semibold text-white"
            >
              +1 (800) 555-1234
            </a>
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-colors hover:bg-emerald-600"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
