// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const NAV_LINKS = [
//   { label: "Plans", href: "/#plans" },
//   { label: "Services", href: "/Service" },
//   { label: "Claims", href: "#claims" },
//   { label: "About", href: "/About" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="absolute inset-x-0 top-0 z-50 w-full">
//       <nav className="mx-auto flex  items-center justify-between px-6 ">
//         <Link
//           href="/"
//           className="relative inline-block h-20 w-56 shrink-0 transition-transform hover:scale-105 sm:h-24 sm:w-64"
//         >
//           <Image
//             src="/BRZ LOGO.png"
//             alt="Breezy Health Solutions"
//             fill
//             priority
//             sizes="(max-width: 640px) 176px, 208px"
//             className="object-contain"
//           />
//         </Link>

//         {/* Desktop nav */}
//         <div className="hidden items-center gap-8 lg:flex">
//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="group relative rounded-full px-3 py-1.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-primary-500 hover:text-white"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         <div className="hidden items-center gap-4 lg:flex">
//           <a
//             href="tel:+18005551234"
//             className="text-sm font-semibold text-white"
//           >
//             +1 (800) 555-1234
//           </a>
//           <a
//             href="#quote"
//             className="animate-quote-pulse rounded-full bg-primary-500 px-5 py-2.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-primary-500/30 transition-all hover:scale-105 hover:bg-primary-400 hover:shadow-primary-500/50 active:scale-95 active:bg-primary-700"
//           >
//             Get a Quote
//           </a>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           type="button"
//           onClick={() => setOpen((prev) => !prev)}
//           className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
//           aria-label="Toggle menu"
//           aria-expanded={open}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.8}
//             stroke="currentColor"
//             className="h-7 w-7"
//           >
//             {open ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
//               />
//             )}
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile nav panel */}
//       {open && (
//         <div className="border-t border-white/10 bg-black/90 px-6 py-6 backdrop-blur-md lg:hidden">
//           <div className="flex flex-col gap-4">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className="rounded-lg px-3 py-2 text-base font-medium text-zinc-200 transition-colors hover:bg-primary-500 hover:text-white"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <a
//               href="tel:+18005551234"
//               className="text-base font-semibold text-white"
//             >
//               +1 (800) 555-1234
//             </a>
//             <a
//               href="#quote"
//               onClick={() => setOpen(false)}
//               className="animate-quote-pulse mt-2 rounded-full bg-primary-500 px-5 py-3 text-center text-sm font-bold tracking-wide text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-400 active:scale-95 active:bg-primary-700"
//             >
//               Get a Quote
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Plans", href: "/#plans" },
  { label: "Claims", href: "#claims" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "Private PPO Health Plans", href: "/Service#ppo" },
  { label: "Family Coverage", href: "/Service#family" },
  { label: "Dental & Vision Insurance", href: "/Service#dental-vision" },
  { label: "Medicare Supplement Plans", href: "/Service#medicare" },
  { label: "Small Business Coverage", href: "/Service#business" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <nav className="mx-auto flex items-center justify-between px-6">
        <Link
          href="/"
          className="relative inline-block h-20 w-56 shrink-0 transition-transform hover:scale-105 sm:h-24 sm:w-64"
        >
          <Image
            src="/BRZ LOGO.png"
            alt="Breezy Health Solutions"
            fill
            priority
            sizes="(max-width: 640px) 176px, 208px"
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/#plans"
            className="group relative rounded-full px-3 py-1.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-primary-500 hover:text-white"
          >
            Plans
          </Link>

          {/* Services Dropdown */}
          <div className="group relative">
            <Link
              href="/Service"
              className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-primary-500 hover:text-white"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4 transition-transform group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25 12 15.75 4.5 8.25"
                />
              </svg>
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-white p-3 opacity-0 shadow-2xl shadow-black/20 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="absolute -top-3 left-0 h-3 w-full" />

              {SERVICE_LINKS.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-primary-50 hover:text-primary-600"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-3 py-1.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-primary-500 hover:text-white"
            >
              {link.label}
            </Link>
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
            className="animate-quote-pulse rounded-full bg-primary-500 px-5 py-2.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-primary-500/30 transition-all hover:scale-105 hover:bg-primary-400 hover:shadow-primary-500/50 active:scale-95 active:bg-primary-700"
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

      {/* Mobile nav panel */}
      {open && (
        <div className="border-t border-white/10 bg-black/90 px-6 py-6 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/#plans"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-zinc-200 transition-colors hover:bg-primary-500 hover:text-white"
            >
              Plans
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setServiceOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-medium text-zinc-200 transition-colors hover:bg-primary-500 hover:text-white"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`h-4 w-4 transition-transform ${
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

              {serviceOpen && (
                <div className="mt-2 space-y-2 rounded-2xl bg-white/10 p-3">
                  {SERVICE_LINKS.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => {
                        setOpen(false);
                        setServiceOpen(false);
                      }}
                      className="block rounded-xl px-4 py-2 text-sm font-medium text-zinc-200 transition hover:bg-primary-500 hover:text-white"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-zinc-200 transition-colors hover:bg-primary-500 hover:text-white"
              >
                {link.label}
              </Link>
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
              className="animate-quote-pulse mt-2 rounded-full bg-primary-500 px-5 py-3 text-center text-sm font-bold tracking-wide text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-400 active:scale-95 active:bg-primary-700"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}