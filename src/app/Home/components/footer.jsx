// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaFacebookF,
//   FaXTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaLocationDot,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa6";

// const FOOTER_LINKS = [
//   {
//     heading: "Services",
//     links: [
//       { label: "All Services", href: "/Service" },
//       { label: "Stress Management", href: "/Stressmanagement" },
//       { label: "Quit Smoking", href: "/quietsomking" },
//       { label: "Managing Stress", href: "/Managestress" },
//       { label: "Boost Immune System", href: "/Immuesystem" },
//       { label: "Three Pillars of Health", href: "/pillarhealth" },
//     ],
//   },
//   {
//     heading: "Company",
//     links: [
//       { label: "Home", href: "/" },
//       { label: "Service", href: "/Service" },
//       { label: "About Us", href: "/About" },
//       { label: "Contact", href: "/contact" },
//     ],
//   },
// ];

// const SOCIALS = [
//   { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
//   { icon: FaXTwitter, href: "https://twitter.com", label: "X (Twitter)" },
//   { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
//   { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
// ];

// export default function Footer() {
//   return (
//     <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#061222] via-[#0B1B35] to-[#102B4C] pt-20">
//       <div className="pointer-events-none absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-tertiary-500/10 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-secondary-500/10 blur-3xl" />

//       <div className="relative mx-auto  px-6">
//         <div className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-[1.3fr_2fr]">
//           {/* Brand + newsletter */}
//           <div>
//             <Link href="/" className="block transition-transform ">
//               <Image
//                 src="/BRZ LOGO1.png"
//                 alt="Breezy Health Solutions"
//                 width={150}
//                 height={60}
//                 priority
//                 unoptimized
//                 className="h-40 w-auto object-contain"
//               />
//             </Link>

//             <p className="mt-5 max-w-sm text-sm leading-6 text-primary-100/70">
//               Affordable, human-first health insurance. We help 12,000+ members
//               find plans that fit their life and budget.
//             </p>

//             <form
//               onSubmit={(e) => e.preventDefault()}
//               className="mt-6 flex w-full max-w-sm gap-2"
//             >
//               <input
//                 type="email"
//                 required
//                 placeholder="Your email address"
//                 className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-primary-100/40 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30"
//               />
//               <button
//                 type="submit"
//                 className="shrink-0 rounded-full bg-secondary-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-secondary-400"
//               >
//                 Join
//               </button>
//             </form>

//             <div className="mt-6 flex gap-3">
//               {SOCIALS.map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary-100 transition-all hover:-translate-y-0.5 hover:bg-tertiary-500 hover:text-white"
//                 >
//                   <Icon className="h-3.5 w-3.5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Link columns */}
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
//             {FOOTER_LINKS.map(({ heading, links }) => (
//               <div key={heading}>
//                 <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//                   {heading}
//                 </h3>
//                 <ul className="mt-4 flex flex-col gap-3">
//                   {links.map((link) => (
//                     <li key={link.label}>
//                       <Link
//                         href={link.href}
//                         className="text-sm text-primary-100/70 transition-colors hover:text-primary-300"
//                       >
//                         {link.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Contact strip */}
//         <div className="grid grid-cols-1 gap-6 border-t border-white/10 py-8 sm:grid-cols-3">
//           <div className="flex items-center gap-3">
//             <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-tertiary-400">
//               <FaLocationDot className="h-3.5 w-3.5" />
//             </span>
//             <span className="text-sm text-primary-100/70">
//               500 Wellness Ave, Austin, TX 78701
//             </span>
//           </div>
//           <div className="flex items-center gap-3">
//             <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-secondary-400">
//               <FaPhone className="h-3.5 w-3.5" />
//             </span>
//             <a
//               href="tel:+18005551234"
//               className="text-sm text-primary-100/70 transition-colors hover:text-primary-300"
//             >
//               +1 (800) 555-1234
//             </a>
//           </div>
//           <div className="flex items-center gap-3">
//             <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-tertiary-400">
//               <FaEnvelope className="h-3.5 w-3.5" />
//             </span>
//             <a
//               href="mailto:support@Breezyhealth.com"
//               className="text-sm text-primary-100/70 transition-colors hover:text-primary-300"
//             >
//               support@Breezyhealth.com
//             </a>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="flex flex-col items-center gap-4 border-t border-white/10 py-8 sm:flex-row sm:justify-between">
//           <p className="text-xs text-primary-100/50">
//             &copy; {new Date().getFullYear()} BreezyHealth. All rights reserved.
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-6">
//             <a
//               href="#privacy"
//               className="text-xs text-primary-100/50 transition-colors hover:text-primary-300"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="#terms"
//               className="text-xs text-primary-100/50 transition-colors hover:text-primary-300"
//             >
//               Terms of Service
//             </a>
//             <a
//               href="#accessibility"
//               className="text-xs text-primary-100/50 transition-colors hover:text-primary-300"
//             >
//               Accessibility
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
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
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-full border border-[#CBDDD8] bg-white/80 px-5 py-3 text-sm text-[#132A4A] shadow-sm outline-none placeholder:text-slate-400 focus:border-[#2F8F8B] focus:ring-4 focus:ring-[#2F8F8B]/10"
              />

              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#2F8F8B] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#2F8F8B]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#267A77]"
              >
                Join
              </button>
            </form>

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
              500 Wellness Ave, Austin, TX 78701
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl   p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F3F0] text-[#2F8F8B]">
              <FaPhone className="h-4 w-4" />
            </span>

            <a
              href="tel:+18005551234"
              className="text-sm font-medium text-[#475569] transition-colors hover:text-[#2F8F8B]"
            >
              +1 (800) 555-1234
            </a>
          </div>

          <div className="flex items-center gap-3 rounded-2xl   p-4 sm:col-span-2 lg:col-span-1">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4F3F0] text-[#2F8F8B]">
              <FaEnvelope className="h-4 w-4" />
            </span>

            <a
              href="mailto:support@breezyhealth.com"
              className="break-all text-sm font-medium text-[#475569] transition-colors hover:text-[#2F8F8B]"
            >
              support@breezyhealth.com
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