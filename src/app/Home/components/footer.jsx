"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const FOOTER_LINKS = [
  {
    heading: "Services",
    links: [
      { label: "All Services", href: "/Service" },
      { label: "Stress Management", href: "/Stressmanagement" },
      { label: "Quit Smoking", href: "/quietsomking" },
      { label: "Managing Stress", href: "/Managestress" },
      { label: "Boost Immune System", href: "/Immuesystem" },
      { label: "Three Pillars of Health", href: "/pillarhealth" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/Service" },
      { label: "About Us", href: "/About" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const SOCIALS = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaXTwitter, href: "https://twitter.com", label: "X (Twitter)" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleNewsletterSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#F8FFFB] via-[#F1F8F6] to-[#EAF5F2] pt-16 sm:pt-20">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-[#2F8F8B]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#7FA64A]/10 blur-3xl" />

      <div className="relative mx-auto w-full  px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 pb-14 lg:grid-cols-[1.3fr_2fr] lg:gap-16">
          {/* Brand + Newsletter */}
          <div>
            <Link
              href="/"
              className="inline-flex transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/BRZ LOGO1.png"
                alt="Breezy Health Solutions"
                width={180}
                height={90}
                priority
                unoptimized
                className="h-28 w-auto object-contain sm:h-32"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#475569]">
              Affordable, human-first health insurance. We help members find
              coverage that fits their lifestyle, needs, and budget.
            </p>

            {/* Newsletter */}
            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-full border border-[#CBDDD8] bg-white/80 px-5 py-3 text-sm text-[#132A4A] shadow-sm outline-none placeholder:text-slate-400 focus:border-[#2F8F8B] focus:ring-4 focus:ring-[#2F8F8B]/10"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="shrink-0 rounded-full bg-[#2F8F8B] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#2F8F8B]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#267A77] disabled:pointer-events-none disabled:opacity-70"
              >
                {status === "sending" ? "Joining..." : "Join"}
              </button>
            </form>
            {status === "success" && (
              <p className="mt-2 text-xs font-medium text-[#2F8F8B]">
                Thanks for subscribing!
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-xs font-medium text-primary-500">
                Something went wrong. Please try again.
              </p>
            )}

            {/* Socials */}
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D3E4DF] bg-white/80 text-[#132A4A] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2F8F8B] hover:bg-[#2F8F8B] hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            {FOOTER_LINKS.map(({ heading, links }) => (
              <div key={heading}>
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-[#2F8F8B]" />

                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#132A4A] sm:text-sm">
                    {heading}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex text-sm font-medium text-[#475569] transition-all duration-300 hover:translate-x-1 hover:text-[#2F8F8B]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 gap-4 border-t border-[#D7E7E2] py-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl   p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F3F0] text-[#2F8F8B]">
              <FaLocationDot className="h-4 w-4" />
            </span>

            <span className="text-sm leading-6 text-[#475569]">
              5900 Balcones Drive, Suite 100 Austin, TX 78731-4298
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl   p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F3F0] text-[#2F8F8B]">
              <FaPhone className="h-4 w-4" />
            </span>

            <a
              href="tel:+1888879-1872"
              className="text-sm font-medium text-[#475569] transition-colors hover:text-[#2F8F8B]"
            >
              +1 (888) 879-1872
            </a>
          </div>

          <div className="flex items-center gap-3 rounded-2xl   p-4 sm:col-span-2 lg:col-span-1">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F3F0] text-[#2F8F8B]">
              <FaEnvelope className="h-4 w-4" />
            </span>

            <a
              href="mailto:info@breezyhealthsolutions.com"
              className="break-all text-sm font-medium text-[#475569] transition-colors hover:text-[#2F8F8B]"
            >
              info@breezyhealthsolutions.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center gap-4 border-t border-[#D7E7E2] py-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-[#64748B]">
            &copy; {new Date().getFullYear()} Breezy Health. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a
              href="#privacy"
              className="text-xs font-medium text-[#64748B] transition-colors hover:text-[#2F8F8B]"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="text-xs font-medium text-[#64748B] transition-colors hover:text-[#2F8F8B]"
            >
              Terms of Service
            </a>

            <a
              href="#accessibility"
              className="text-xs font-medium text-[#64748B] transition-colors hover:text-[#2F8F8B]"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
