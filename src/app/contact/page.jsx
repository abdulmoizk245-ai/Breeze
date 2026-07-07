import Link from "next/link";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaHeartbeat,
  FaShieldAlt,
  FaUserMd,
  FaClock,
  FaPaperPlane,
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
        <Header/>
      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#d1fae5,transparent_35%),radial-gradient(circle_at_bottom_right,#e0f2fe,transparent_35%)]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
              Health Solutions Consultant
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Let’s Find Health Coverage That Gives You Peace of Mind
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Healthy habits protect your future, but the right health insurance
              helps protect you when life becomes unexpected. Brenda Ruiz at
              Breezy Health Solutions is here to help you explore affordable,
              reliable coverage options for your needs, budget, and lifestyle.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+15125579308"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-600/25 transition hover:-translate-y-1 hover:bg-emerald-700"
              >
                <FaPhoneAlt className="h-4 w-4" />
                Call (512) 557-9308
              </a>

              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-900 shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:ring-emerald-200"
              >
                Request a Free Consultation
                <FaArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact Card */}
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-emerald-200 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-cyan-200 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="rounded-3xl bg-slate-950 p-7 text-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                  <FaUserMd className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-2xl font-black">
                  Speak with Brenda Ruiz
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Licensed Health Insurance Advisor helping you compare coverage
                  options clearly and confidently.
                </p>

                <div className="mt-6 rounded-2xl bg-white/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                    Direct Phone
                  </p>
                  <a
                    href="tel:+15125579308"
                    className="mt-2 block text-2xl font-black text-white"
                  >
                    (512) 557-9308
                  </a>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-emerald-50 p-5">
                  <FaHeartbeat className="h-6 w-6 text-emerald-600" />
                  <h3 className="mt-3 font-bold text-slate-950">
                    Preventive Care
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Plans that support wellness visits, screenings, and early
                    treatment.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-cyan-50 p-5">
                  <FaShieldAlt className="h-6 w-6 text-cyan-600" />
                  <h3 className="mt-3 font-bold text-slate-950">
                    Better Protection
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Coverage options designed around real life and real needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="px-6 py-20 lg:px-8 bg-[#f8fffb]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-emerald-600">
              How We Can Help
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Coverage Options Built Around Your Life
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Whether you need coverage for yourself, your family, or your small
              business, Breezy Health Solutions helps you understand your options
              without confusion or pressure.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coverageOptions.map((item) => (
              <div
                key={item}
                className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <FaCheckCircle className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-950">
                  {item}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Get clear guidance and personalized support to explore a plan
                  that fits your healthcare needs and monthly budget.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact-form"
        className="relative px-6 py-24 lg:px-8 bg-[#f8fffb]"
      >
        <div className="absolute inset-0 -z-10 bg-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.25),transparent_35%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">
              Get In Touch
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-black sm:text-5xl">
              Ready to Compare Your Health Insurance Options?
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Send your information and Brenda Ruiz will help you review options
              for private PPO plans, family coverage, dental and vision, Medicare
              supplements, and more.
            </p>

            <div className="mt-8 space-y-4">
              {trustPoints.map((item) => (
                <div key={item} className="flex gap-3">
                  <FaCheckCircle className="mt-1 h-5 w-5 flex-none text-emerald-400" />
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                  <FaClock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Healthy Habits + Quality Coverage
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    A smart way to protect your long-term health.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-bold text-slate-800">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-slate-800">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-slate-800">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-slate-800">
                  Coverage Interest
                </label>
                <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100">
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
                <label className="text-sm font-bold text-slate-800">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us what kind of coverage you are looking for..."
                  className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-emerald-600/25 transition hover:-translate-y-1 hover:bg-emerald-700"
            >
              Send Message
              <FaPaperPlane className="h-4 w-4" />
            </button>

            <p className="mt-4 text-center text-xs leading-6 text-slate-500">
              By submitting this form, you agree to be contacted about health
              insurance options that may fit your needs.
            </p>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-emerald-600 to-cyan-600 p-8 text-center shadow-2xl shadow-emerald-600/20 sm:p-12">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Better Coverage. Better Protection. Breezy Solutions.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-emerald-50">
            Take care of your health today and protect your tomorrow with
            coverage that gives you confidence.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+15125579308"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black text-emerald-700 transition hover:-translate-y-1 hover:bg-emerald-50"
            >
              <FaPhoneAlt className="h-4 w-4" />
              Call Brenda Ruiz
            </a>

            <Link
              href="/plans"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-slate-900"
            >
              View Coverage Options
              <FaArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}