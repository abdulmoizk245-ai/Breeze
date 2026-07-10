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

const THEMES = {
  primary: {
    gradient: "from-primary-500 to-primary-600",
    glow: "bg-primary-400",
    cardHoverBg: "group-hover:bg-primary-500",
    cardHoverBorder: "group-hover:border-primary-500",
    iconHoverBg: "group-hover:bg-none group-hover:bg-white",
    iconHoverText: "group-hover:text-primary-600",
    titleHover: "group-hover:text-white",
    descHover: "group-hover:text-white/80",
    linkHover: "group-hover:text-white",
    accentHover: "group-hover:bg-none group-hover:bg-white/50",
  },
  secondary: {
    gradient: "from-secondary-500 to-secondary-600",
    glow: "bg-secondary-400",
    cardHoverBg: "group-hover:bg-secondary-500",
    cardHoverBorder: "group-hover:border-secondary-500",
    iconHoverBg: "group-hover:bg-none group-hover:bg-white",
    iconHoverText: "group-hover:text-secondary-600",
    titleHover: "group-hover:text-white",
    descHover: "group-hover:text-white/80",
    linkHover: "group-hover:text-white",
    accentHover: "group-hover:bg-none group-hover:bg-white/50",
  },
};

const services = [
  {
    title: "Stress Management",
    description:
      "Learn practical ways to reduce pressure, calm your mind, and build emotional balance.",
    icon: FaBrain,
    theme: "primary",
    href: "/Stressmanagement",
  },
  {
    title: "Quit Smoking",
    description:
      "Get guided support to break smoking habits and move toward a healthier lifestyle.",
    icon: FaSmoking,
    theme: "secondary",
    href: "/quietsomking",
  },
  {
    title: "Managing Stress",
    description:
      "Build simple daily routines that help you stay focused, relaxed, and in control.",
    icon: FaLeaf,
    theme: "primary",
    href: "/Managestress",
  },
  {
    title: "Improve Gut Health",
    description:
      "Support digestion, energy, and wellness with better lifestyle and nutrition choices.",
    icon: FaApple,
    theme: "primary",
    href: "/contact",
  },
  {
    title: "Immune System",
    description:
      "Strengthen your body’s natural defense with healthy habits and wellness guidance.",
    icon: FaShield,
    theme: "secondary",
    href: "/contact",
  },
  {
    title: "3 Pillars of Health",
    description:
      "Focus on nutrition, movement, and mindset — the foundation of long-term wellness.",
    icon: FaHeartPulse,
    theme: "secondary",
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
            const theme = THEMES[service.theme];

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-[2rem] border border-primary-100 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-900/10"
              >
                {/* Top Glow — continuous subtle pulse */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full ${theme.glow} animate-card-glow-pulse transition-opacity duration-500 group-hover:opacity-0`}
                />

                {/* Dark Gradient Hover Background */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-slate-950 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.gradient} text-white shadow-lg transition-colors duration-500 group-hover:bg-none group-hover:bg-white/15`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="relative mt-6 text-xl font-bold text-slate-950 transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-600 transition-colors duration-500 group-hover:text-white/80">
                  {service.description}
                </p>

                <div className="relative mt-6 flex items-center gap-2 text-sm font-bold text-primary-700 transition-colors duration-500 group-hover:text-white">
                  Learn More
                  <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 z-10 h-1 w-0 bg-gradient-to-r from-white/70 to-white/40 transition-all duration-500 group-hover:w-full" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
