import {
  FaExclamationCircle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const healthRisks = [
  "Lung cancer",
  "Heart disease",
  "Stroke",
  "COPD",
  "Emphysema",
  "Chronic bronchitis",
  "Type 2 diabetes",
  "Reduced immune function",
  "Gum disease and tooth loss",
  "Fertility problems",
  "Pregnancy complications",
  "Premature aging",
];

const quitTimeline = [
  {
    time: "Within 20 Minutes",
    title: "Heart rate begins to improve",
    text: "Your heart rate and blood pressure begin to return toward a healthier range.",
  },
  {
    time: "Within 24 Hours",
    title: "Oxygen levels improve",
    text: "Carbon monoxide levels in your blood decrease, allowing more oxygen to reach your organs.",
  },
  {
    time: "Within a Few Weeks",
    title: "Breathing feels easier",
    text: "Circulation improves, lung function may get better, and walking or exercise can feel less difficult.",
  },
  {
    time: "Within One Year",
    title: "Heart disease risk drops",
    text: "Your risk of heart disease becomes significantly lower compared to someone who continues smoking.",
  },
  {
    time: "Over Time",
    title: "Long-term health improves",
    text: "Risks of stroke, lung disease, and several cancers continue to decline while quality of life improves.",
  },
];

const quitTips = [
  {
    number: "01",
    title: "Choose a Quit Date",
    text: "Pick a specific day to stop smoking and prepare for it. Some people quit all at once, while others gradually reduce cigarette use before stopping completely.",
  },
  {
    number: "02",
    title: "Practice Deep Breathing",
    text: "Cravings usually peak for only a few minutes. Slow breathing can help reduce anxiety, calm the body, and shift your focus away from the urge to smoke.",
  },
  {
    number: "03",
    title: "Keep Your Hands Busy",
    text: "Smoking is often connected to routine. A stress ball, journal, game, craft, gardening, drawing, or coloring can help replace the physical habit.",
  },
  {
    number: "04",
    title: "Stay Mentally Engaged",
    text: "Boredom can trigger cravings. Reading, puzzles, hobbies, podcasts, volunteering, or spending time with friends can help keep your mind active.",
  },
  {
    number: "05",
    title: "Find Healthy Alternatives",
    text: "When cravings appear, try sugar-free gum, fresh fruit, carrot sticks, celery, water, or a short walk instead of reaching for a cigarette.",
  },
  {
    number: "06",
    title: "Build a Support System",
    text: "Tell family and friends about your goal. Support can also come from healthcare providers, counselors, support groups, quitlines, or cessation programs.",
  },
];

const withdrawalSymptoms = [
  "Irritability",
  "Restlessness",
  "Difficulty concentrating",
  "Increased appetite",
  "Trouble sleeping",
  "Strong cravings",
];

const protectionPoints = [
  "Asthma attacks",
  "Respiratory infections",
  "Heart disease",
  "Lung cancer in nonsmokers",
  "Sudden Infant Death Syndrome, also known as SIDS",
];

const coverageOptions = [
  "Private PPO Health Plans",
  "Family Coverage",
  "Dental Insurance",
  "Vision Insurance",
  "Medicare Supplement Plans",
];

export default function QuitSmokingPage() {
  return (
    <main className="overflow-hidden bg-[#f8fffb] text-slate-900">
      {/* Hero — dark, editorial */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 pb-24 pt-28 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-48">
        <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[32rem] w-[32rem] rounded-full bg-primary-500/15 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-secondary-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px]" />

        <div className="relative mx-auto ">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
              Health Solutions Consultant
            </span>
          </div>

          {/* Light backdrop panel so Home's navy heading/paragraph colors stay legible on this dark hero */}
          <div className="mt-8 max-w-2xl rounded-3xl  p-6  sm:p-8">
            <h1 className="text-4xl leading-[1.05] tracking-tight text-[#132A4A] sm:text-5xl lg:text-6xl">
              <span className="font-sans font-semibold">Quitting smoking:</span>
              <br />
              <span className="font-serif italic bg-gradient-to-r from-[#2F8F8B] to-[#7FA64A] bg-clip-text text-transparent">
                one of the best decisions for your health.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#334155]">
              Every cigarette you don&apos;t smoke is a step toward a
              healthier future. Quitting smoking can improve your health,
              protect your loved ones, and lower the risk of serious
              long-term disease.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="#quit-tips"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
            >
              View Quit Tips
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Speak With Brenda
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating Intro Cards */}
      <section className="relative px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="-mt-20 grid gap-4 rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-xl shadow-primary-950/5 sm:grid-cols-3">
            <div className="rounded-2xl bg-primary-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
                Quit
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Break the smoking habit
              </h3>
            </div>

            <div className="rounded-2xl bg-primary-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
                Heal
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Support your body&apos;s recovery
              </h3>
            </div>

            <div className="rounded-2xl bg-primary-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
                Protect
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Lower future health risks
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Article Intro */}
      <section className="px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-9xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                Prevention Starts Here
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-4xl">
              <span className="font-sans font-semibold">
                Good health starts
              </span>{" "}
              <span className="font-serif italic">with prevention.</span>
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
            <p className="text-base leading-8 text-slate-600">
              At Breezy Health Solutions, we believe prevention is one of the
              most powerful parts of long-term health. Whether you&apos;re
              trying to reduce your risk of disease, improve your quality of
              life, or protect your family, quitting smoking is one of the
              strongest investments you can make in yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Health Risks */}
      <section className="relative px-6 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-9xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                The Health Risks of Smoking
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">Smoking affects</span>{" "}
              <span className="font-serif italic">
                nearly every organ in the body.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Cigarette smoke contains thousands of chemicals, many of which are
              harmful or cancer-causing. Over time, smoking can increase the
              risk of serious health conditions and reduce overall quality of
              life.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {healthRisks.map((risk) => (
              <div
                key={risk}
                className="group rounded-2xl border border-slate-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition group-hover:bg-primary-600 group-hover:text-white">
                  <FaExclamationCircle className="h-4 w-4" />
                </div>

                <h3 className="text-sm font-semibold text-slate-900">{risk}</h3>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] bg-slate-950 p-7 text-white sm:p-8">
            <h3 className="font-serif text-2xl text-white">
              The good news: your body starts recovering after you quit.
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              No matter how long you&apos;ve smoked, stopping can help your body
              begin repairing itself and reduce future health risks over time.
            </p>
          </div>
        </div>
      </section>

      {/* Quit Timeline */}
      <section className="relative overflow-hidden bg-[#f8fffb] px-6 py-24 lg:px-8">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-secondary-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="rounded-full bg-primary-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-primary-700">
                What Happens When You Quit?
              </span>
              <span className="h-px w-10 bg-primary-500" />
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-950 sm:text-5xl">
              <span className="font-sans font-bold">The benefits begin</span>{" "}
              <span className="font-serif italic text-primary-600">
                sooner than many people realize.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Quitting smoking is not just a future goal. Your body can begin
              responding positively within minutes, days, weeks, and months.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-20">
            {/* Main Vertical Line */}
            <div className="absolute left-6 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-primary-500 via-primary-300 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

            <div className="space-y-12">
              {quitTimeline.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={item.time}
                    className={`relative flex ${
                      isLeft ? "lg:justify-start" : "lg:justify-end"
                    }`}
                  >
                    {/* Mobile Connector Line */}
                    <div className="absolute left-6 top-10 h-px w-10 bg-primary-300 lg:hidden" />

                    {/* Center Dot */}
                    <div className="absolute left-6 top-8 z-20 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-primary-100 lg:left-1/2">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary-500" />
                    </div>

                    {/* Card */}
                    <div
                      className={`group relative ml-16 w-full rounded-[2rem] border border-primary-100 bg-white/90 p-6 shadow-lg shadow-primary-900/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-900/10 sm:p-7 lg:ml-0 lg:w-[44%] ${
                        isLeft ? "lg:mr-auto" : "lg:ml-auto"
                      }`}
                    >
                      {/* Desktop Connector Line */}
                      <div
                        className={`absolute top-10 hidden h-px w-12 bg-gradient-to-r from-primary-300 to-primary-100 lg:block ${
                          isLeft ? "-right-12" : "-left-12"
                        }`}
                      />

                      {/* Number Badge */}
                      <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 text-sm font-black text-white shadow-xl shadow-primary-500/30">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Soft Glow */}
                      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-100 opacity-60 blur-2xl transition duration-300 group-hover:bg-primary-200" />

                      <div className="relative">
                        <span className="inline-flex rounded-full bg-primary-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-primary-700">
                          {item.time}
                        </span>

                        <h3 className="mt-5 text-xl font-black text-slate-950 sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Quit Tips */}
      <section
        id="quit-tips"
        className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:py-24 lg:px-8"
      >
        <div className="pointer-events-none absolute left-[-10%] top-[-15%] h-[28rem] w-[28rem] rounded-full bg-primary-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-12%] h-[30rem] w-[30rem] rounded-full bg-secondary-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-9xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
              Practical Smoking Cessation Tips
            </span>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-white sm:text-5xl">
              <span className="font-sans font-semibold">
                Small actions can help you
              </span>{" "}
              <span className="font-serif italic text-primary-300">
                manage cravings and build momentum.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Quitting smoking is a journey. Different strategies work for
              different people, but these practical steps can help you stay
              focused and prepared.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quitTips.map((tip) => (
              <div
                key={tip.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <span className="font-serif text-3xl text-primary-300/70">
                  {tip.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {tip.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-9xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                Expect Challenges
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">
                Don&apos;t give up
              </span>{" "}
              <span className="font-serif italic">
                if quitting feels difficult.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Nicotine is highly addictive, so withdrawal symptoms are common.
              These symptoms are temporary and usually become less intense with
              time.
            </p>

            <div className="mt-8 rounded-2xl bg-primary-50 p-7">
              <h3 className="text-xl font-semibold text-slate-900">
                A slip is not a failure.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Many people make several attempts before quitting for good. If
                you smoke a cigarette, learn from the moment, recommit to your
                goal, and keep moving forward.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Common withdrawal symptoms may include:
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {withdrawalSymptoms.map((symptom) => (
                <div key={symptom} className="rounded-2xl bg-primary-50 p-5">
                  <div className="mb-3 h-px w-10 bg-primary-400" />
                  <p className="text-sm font-medium text-slate-700">
                    {symptom}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loved Ones */}
      <section className="relative px-6 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-tertiary-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-9xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[1.5rem] bg-slate-950 p-8 text-white sm:p-10">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
                Secondhand Smoke
              </span>

              <h2 className="mt-6 font-serif text-3xl text-white sm:text-4xl">
                Quitting protects your loved ones, too.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Quitting smoking creates a healthier home and a safer
                environment for your family. Secondhand smoke can increase
                health risks for children, adults, and nonsmokers.
              </p>
            </div>

            <div className="grid gap-4">
              {protectionPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                      <FaCheckCircle className="h-4 w-4" />
                    </span>

                    <p className="text-sm font-medium text-slate-700">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Healthcare */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                  Preventive Healthcare
                </span>
              </div>

              <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
                <span className="font-sans font-semibold">
                  Prevention and protection
                </span>{" "}
                <span className="font-serif italic">go hand in hand.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Stopping smoking is one of the most effective ways to reduce
                your risk of chronic disease. Regular wellness visits,
                screenings, and conversations with your healthcare provider are
                also important for long-term health.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Breezy Health Solutions can help you explore:
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {coverageOptions.map((option) => (
                  <div
                    key={option}
                    className="rounded-2xl bg-primary-50 p-5 transition hover:bg-primary-100"
                  >
                    <p className="text-sm font-medium text-slate-900">
                      {option}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Having quality health insurance can make preventive care more
                accessible and give you peace of mind when unexpected health
                needs arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:py-24 lg:px-8"
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute left-[-10%] top-[-15%] h-[28rem] w-[28rem] rounded-full bg-primary-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-secondary-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left Content */}
            <div className="text-left">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
                A Healthier Future Starts Today
              </span>

              <h2 className="mt-7 max-w-3xl text-3xl leading-tight text-white sm:text-5xl">
                <span className="font-sans font-semibold">
                  You don&apos;t have to be perfect.
                </span>{" "}
                <span className="font-serif italic text-primary-300">
                  You just have to take the first step.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                Every day without cigarettes allows your body to heal, lowers
                your risk of serious disease, and improves your overall quality
                of life. If you&apos;re ready to invest in your health, now is
                the perfect time to begin.
              </p>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                {[
                  "Personal guidance",
                  "Affordable coverage options",
                  "Private PPO support",
                  "Clear next steps",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-primary-300" />
                    <span className="text-sm font-semibold text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Contact Card */}
            <div className="relative">
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
                <div className="absolute right-6 top-6 rounded-full border border-primary-300/20 bg-primary-300/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-300">
                  Advisor
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-500/15 text-primary-300 ring-1 ring-white/10">
                  <FaShieldAlt className="h-8 w-8" />
                </div>

                <h3 className="mt-7 font-serif text-3xl text-white">
                  Brenda Ruiz
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
                  Licensed Health Insurance Advisor
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  Helping individuals, families, and small business owners find
                  affordable private PPO health insurance solutions with the
                  freedom to choose their healthcare providers.
                </p>

                <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-300">
                    Direct Phone
                  </p>

                  <a
                    href="tel:+15125579308"
                    className="mt-2 block text-2xl font-black text-white transition hover:text-primary-300"
                  >
                    (512) 557-9308
                  </a>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+15125579308"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-primary-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition hover:-translate-y-0.5 hover:bg-primary-400"
                  >
                    Call Now
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Request Help
                  </a>
                </div>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="font-serif text-lg italic leading-8 text-primary-300">
                    “Better Coverage. Better Protection. Breezy Solutions.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
