import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutHero() {
  return (
    <section className="relative isolate flex min-h-[95vh] w-full items-center overflow-hidden bg-slate-950">
      {/* Background Image */}
      <Image
        src="/about/hero.png"
        alt="Brenda Ruiz health insurance advisor"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/20" />

      <div className="relative z-10 w-full px-6 py-24 sm:py-28 lg:px-16 lg:py-32">
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
              Meet Brenda Ruiz
            </span>
          </div>

          {/* Light backdrop panel so Home's navy heading/paragraph colors stay legible on this dark hero */}
          <div className="mt-8 rounded-3xl  p-6  sm:p-8">
            <h1 className="text-4xl leading-[1.05] tracking-tight text-[#132A4A] sm:text-5xl lg:text-6xl">
              <span className="font-sans font-semibold">
                Health insurance guidance,
              </span>
              <br />
              <span className="font-serif italic bg-gradient-to-r from-[#2F8F8B] to-[#7FA64A] bg-clip-text text-transparent">
                made simple.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#334155]">
              Finding the right health insurance shouldn&apos;t be confusing
              or overwhelming. Brenda makes the process simple, educational,
              and personalized so you can choose coverage with confidence.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-8">
            <div>
              <p className="font-serif text-3xl text-white">20+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                Years in healthcare
              </p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <p className="font-serif text-3xl text-white">EN / ES</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                Bilingual service
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
            >
              Get a Free Quote
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Book a Consultation
              <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
