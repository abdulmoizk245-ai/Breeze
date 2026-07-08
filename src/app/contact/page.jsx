import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaCheck,
  FaCheckCircle,
  FaArrowRight,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";
import Footer from "../Home/components/footer";
import Header from "../Home/components/header";

const coverageOptions = [
  "Private PPO Health Plans",
  "Family Health Coverage",
  "Dental & Vision Insurance",
  "Medicare Supplement Plans",
  "Individual Health Insurance",
  "Small Business Owner Coverage",
];

const trustPoints = [
  "Personal guidance from a licensed health insurance advisor",
  "Affordable options based on your needs and budget",
  "Support for individuals, families, and business owners",
  "Simple explanations so you can choose with confidence",
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#f8fffb]">
      <Header />

      {/* Hero Section — dark, editorial */}
      <section className="relative isolate flex min-h-[92vh] w-full items-center overflow-hidden bg-slate-950">
        <Image
          src="/contact/hero.png"
          alt="Brenda Ruiz, licensed health insurance advisor"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-15%] left-[15%] h-80 w-80 rounded-full bg-secondary-500/10 blur-3xl" />

        <div className="relative z-10 w-full px-6 py-28 sm:py-32 lg:px-16">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
                Get In Touch
              </span>
            </div>

            <h1 className="mt-8 text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="font-sans font-semibold">
                Health coverage that helps
              </span>
              <br />
              <span className="font-serif italic text-primary-300">
                you feel protected.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
              Healthy habits protect your future, but the right health
              insurance protects you when life becomes unexpected. Brenda
              Ruiz at Breezy Health Solutions helps you explore affordable,
              reliable coverage built around your needs, budget, and
              lifestyle.
            </p>

            {/* Trust points */}
            <div className="mt-9 grid max-w-xl gap-x-8 gap-y-4 border-t border-white/10 pt-8 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FaCheck className="mt-1 h-3 w-3 shrink-0 text-primary-400" />
                  <p className="text-sm leading-6 text-zinc-300">{item}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="tel:+15125579308"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
              >
                <FaPhoneAlt className="h-3.5 w-3.5" />
                Call (512) 557-9308
              </a>

              <a
                href="#contact-form"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Request Free Consultation
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-8">
              <div>
                <p className="font-serif text-3xl text-white">20+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Years in healthcare
                </p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-serif text-3xl text-white">1:1</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Personal guidance
                </p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-serif text-3xl text-white">Free</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Consultation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating direct-line card */}
        {/* <div className="absolute bottom-12 right-12 z-10 hidden max-w-xs rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:block">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">
            Direct Line
          </span>
          <a
            href="tel:+15125579308"
            className="mt-3 block font-serif text-2xl text-white transition hover:text-primary-300"
          >
            (512) 557-9308
          </a>
          <p className="mt-2 text-sm text-zinc-400">
            Brenda Ruiz &middot; Licensed Advisor
          </p>
        </div> */}
      </section>

      {/* Coverage Options */}
      <section className="bg-[#f8fffb] px-6 py-24 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                How We Can Help
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">
                Coverage options
              </span>{" "}
              <span className="font-serif italic">
                built around your life.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Whether you need coverage for yourself, your family, or your
              small business, Breezy Health Solutions helps you understand
              your options without confusion or pressure.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coverageOptions.map((item) => (
              <div
                key={item}
                className="group rounded-3xl border border-slate-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                  <FaCheckCircle className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Get clear guidance and personalized support to explore a
                  plan that fits your healthcare needs and monthly budget.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact-form"
        className="relative bg-slate-950 px-6 py-24 sm:py-28 lg:px-8"
      >
        <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-9xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
                Request a Consultation
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-white sm:text-4xl">
              <span className="font-sans font-semibold">
                Ready to compare
              </span>{" "}
              <span className="font-serif italic text-primary-300">
                your options?
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Send your information and Brenda Ruiz will help you review
              options for private PPO plans, family coverage, dental and
              vision, Medicare supplements, and more.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
              {trustPoints.map((item) => (
                <div key={item} className="flex gap-3">
                  <FaCheck className="mt-1 h-3 w-3 flex-none text-primary-400" />
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <FaClock className="mt-1 h-5 w-5 shrink-0 text-primary-300" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Healthy habits + quality coverage
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  A smart way to protect your long-term health.
                </p>
              </div>
            </div>
          </div>

          <form className="rounded-[1.75rem] bg-white p-6 shadow-2xl sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-slate-800">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-100"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-100"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-100"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">
                  Coverage Interest
                </label>
                <select className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-100">
                  <option>Select an option</option>
                  <option>Private PPO Health Plan</option>
                  <option>Family Coverage</option>
                  <option>Dental & Vision</option>
                  <option>Medicare Supplement Plan</option>
                  <option>Small Business Coverage</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-slate-800">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us what kind of coverage you are looking for..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-primary-600/20 transition hover:-translate-y-0.5 hover:bg-primary-500"
            >
              Send Message
              <FaPaperPlane className="h-3.5 w-3.5" />
            </button>

            <p className="mt-4 text-center text-xs leading-6 text-slate-500">
              By submitting this form, you agree to be contacted about health
              insurance options that may fit your needs.
            </p>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#f8fffb] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-9xl rounded-[1.5rem] bg-slate-950 px-6 py-14 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
                  Trusted Guidance
                </span>
              </div>

              <h2 className="mt-6 text-3xl leading-tight text-white sm:text-4xl">
                <span className="font-sans font-semibold">
                  Better coverage. Better protection.
                </span>
                <br />
                <span className="font-serif italic text-primary-300">
                  Breezy Solutions.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Take care of your health today and protect your tomorrow with
                coverage that gives you confidence.
              </p>
            </div>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a
                href="tel:+15125579308"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-400"
              >
                <FaPhoneAlt className="h-3.5 w-3.5" />
                Call Brenda Ruiz
              </a>

              <Link
                href="/plans"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
              >
                View Coverage Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
