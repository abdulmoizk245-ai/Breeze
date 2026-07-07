import Link from "next/link";
import {
  FaBrain,
  FaSmoking,
  FaLeaf,
  FaApple,
  FaShield,
  FaHeartPulse,
  FaArrowRight,
} from "react-icons/fa6";

const services = [
  {
    title: "Stress Management",
    description:
      "Learn practical ways to reduce pressure, calm your mind, and build emotional balance.",
    icon: FaBrain,
    color: "from-primary-500 to-primary-500",
    href: "/Stressmanagement",
  },
  {
    title: "Quit Smoking",
    description:
      "Get guided support to break smoking habits and move toward a healthier lifestyle.",
    icon: FaSmoking,
    color: "from-secondary-500 to-secondary-500",
    href: "/quietsomking",
  },
  {
    title: "Managing Stress",
    description:
      "Build simple daily routines that help you stay focused, relaxed, and in control.",
    icon: FaLeaf,
    color: "from-primary-500 to-primary-500",
    href: "/Managestress",
  },
  {
    title: "Improve Gut Health",
    description:
      "Support digestion, energy, and wellness with better lifestyle and nutrition choices.",
    icon: FaApple,
    color: "from-primary-500 to-primary-500",
    href: "/contact",
  },
  {
    title: "Immune System",
    description:
      "Strengthen your body’s natural defense with healthy habits and wellness guidance.",
    icon: FaShield,
    color: "from-secondary-500 to-secondary-500",
    href: "/contact",
  },
  {
    title: "3 Pillars of Health",
    description:
      "Focus on nutrition, movement, and mindset — the foundation of long-term wellness.",
    icon: FaHeartPulse,
    color: "from-secondary-500 to-secondary-500",
    href: "/contact",
  },
];

export default function ServiceCards() {
  return (
    <section className="relative overflow-hidden bg-[#f8fffb] px-6 py-20 sm:py-24 lg:px-8">
      {/* Background Decoration */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
            Our Wellness Services
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Simple Steps Toward a Healthier, Happier You
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Explore personalized wellness support designed to improve your
            lifestyle, reduce stress, and help you build lasting healthy habits.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-[2rem] border border-primary-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-900/10"
              >
                {/* Top Glow */}
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${service.color} opacity-10 transition duration-300 group-hover:scale-125 group-hover:opacity-20`}
                />

                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="relative mt-6 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="relative mt-6 flex items-center gap-2 text-sm font-bold text-primary-700">
                  Learn More
                  <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Bottom Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.color} transition-all duration-300 group-hover:w-full`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
