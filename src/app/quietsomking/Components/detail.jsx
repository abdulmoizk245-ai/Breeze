import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";

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
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 pb-24 pt-40 lg:px-16 lg:pb-32 lg:pt-48">
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

          <h1 className="mt-8 text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="font-sans font-semibold">Quitting smoking:</span>
            <br />
            <span className="font-serif italic text-primary-300">
              one of the best decisions for your health.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
            Every cigarette you don&apos;t smoke is a step toward a healthier
            future. Quitting smoking can improve your health, protect your
            loved ones, and lower the risk of serious long-term disease.
          </p>

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
              <span className="font-sans font-semibold">
                Smoking affects
              </span>{" "}
              <span className="font-serif italic">
                nearly every organ in the body.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Cigarette smoke contains thousands of chemicals, many of which
              are harmful or cancer-causing. Over time, smoking can increase
              the risk of serious health conditions and reduce overall
              quality of life.
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

                <h3 className="text-sm font-semibold text-slate-900">
                  {risk}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] bg-slate-950 p-7 text-white sm:p-8">
            <h3 className="font-serif text-2xl text-white">
              The good news: your body starts recovering after you quit.
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              No matter how long you&apos;ve smoked, stopping can help your
              body begin repairing itself and reduce future health risks
              over time.
            </p>
          </div>
        </div>
      </section>

      {/* Quit Timeline */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                What Happens When You Quit?
              </span>
              <span className="h-px w-10 bg-primary-500" />
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">
                The benefits begin
              </span>{" "}
              <span className="font-serif italic">
                sooner than many people realize.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Quitting smoking is not just a future goal. Your body can
              begin responding positively within minutes, days, weeks, and
              months.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary-300 via-primary-200 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

            <div className="space-y-10">
              {quitTimeline.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={item.time}
                    className={`relative flex ${
                      isLeft ? "lg:justify-start" : "lg:justify-end"
                    }`}
                  >
                    <div className="absolute left-5 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-primary-500 lg:left-1/2" />

                    <div
                      className={`group relative ml-12 w-full rounded-2xl border border-slate-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl sm:p-7 lg:ml-0 lg:w-[45%] ${
                        isLeft ? "lg:mr-auto" : "lg:ml-auto"
                      }`}
                    >
                      <span className="inline-flex rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-700">
                        {item.time}
                      </span>

                      <h3 className="mt-4 text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
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
              Nicotine is highly addictive, so withdrawal symptoms are
              common. These symptoms are temporary and usually become less
              intense with time.
            </p>

            <div className="mt-8 rounded-2xl bg-primary-50 p-7">
              <h3 className="text-xl font-semibold text-slate-900">
                A slip is not a failure.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Many people make several attempts before quitting for good.
                If you smoke a cigarette, learn from the moment, recommit to
                your goal, and keep moving forward.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Common withdrawal symptoms may include:
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {withdrawalSymptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="rounded-2xl bg-primary-50 p-5"
                >
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
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl" />

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
                screenings, and conversations with your healthcare provider
                are also important for long-term health.
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
                Having quality health insurance can make preventive care
                more accessible and give you peace of mind when unexpected
                health needs arise.
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
        <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-secondary-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
            A Healthier Future Starts Today
          </span>

          <h2 className="mx-auto mt-7 max-w-3xl text-3xl leading-tight text-white sm:text-5xl">
            <span className="font-sans font-semibold">
              You don&apos;t have to be perfect.
            </span>{" "}
            <span className="font-serif italic text-primary-300">
              You just have to take the first step.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Every day without cigarettes allows your body to heal, lowers
            your risk of serious disease, and improves your overall quality
            of life. If you&apos;re ready to invest in your health, now is
            the perfect time to begin.
          </p>

          <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/5 p-8">
            <h3 className="font-serif text-2xl text-white">Brenda Ruiz</h3>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
              Licensed Health Insurance Advisor
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              Helping individuals, families, and small business owners find
              affordable private PPO health insurance solutions with the
              freedom to choose their healthcare providers.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:5125579308"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-400"
              >
                Call (512) 557-9308
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Health Coverage Help
              </a>
            </div>

            <p className="mt-8 font-serif text-lg italic text-primary-300">
              “Better Coverage. Better Protection. Breezy Solutions.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
