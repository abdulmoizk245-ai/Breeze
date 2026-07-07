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

const seoKeywords = [
  "How to quit smoking",
  "Benefits of quitting smoking",
  "Smoking cessation tips",
  "Quit smoking naturally",
  "Health risks of smoking",
  "Preventive healthcare",
  "Private PPO health insurance",
  "Affordable health insurance",
  "Health insurance for families",
  "Small business health insurance",
  "Breezy Health Solutions",
];

export default function QuitSmokingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 lg:px-8">
        <div className="absolute left-[-12%] top-[-18%] h-[36rem] w-[36rem] rounded-full bg-primary-500/20 blur-[130px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary-400/20 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />

        <div className="relative mx-auto grid  items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-300/20 bg-primary-300/10 px-5 py-2 text-sm font-bold text-primary-200">
              <span className="h-2 w-2 rounded-full bg-primary-300 shadow-[0_0_22px_rgba(194,220,142,0.9)]" />
              Health Solutions Consultant
            </span>

            <h1 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Quitting Smoking:
              <span className="mt-2 block bg-gradient-to-r from-primary-300 via-primary-200 to-primary-200 bg-clip-text text-transparent">
                One of the Best Decisions for Your Health
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Every cigarette you don&apos;t smoke is a step toward a healthier
              future. Quitting smoking can improve your health, protect your
              loved ones, and lower the risk of serious long-term disease.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#quit-tips"
                className="rounded-full bg-primary-300 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-primary-500/25 transition hover:scale-105 hover:bg-primary-200"
              >
                View Quit Tips
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Speak With Brenda
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          {/* <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary-400/20 to-primary-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="rounded-[2rem] bg-gradient-to-br from-primary-300 via-primary-200 to-primary-200 p-1">
                <div className="rounded-[1.8rem] bg-slate-950 p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary-200">
                        Fresh Start
                      </p>
                      <h2 className="mt-3 text-3xl font-black text-white">
                        Your body starts healing sooner than you think.
                      </h2>
                    </div>

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-primary-300 text-2xl font-black text-slate-950">
                      ✓
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {[
                      "Better Breathing",
                      "Heart Protection",
                      "More Energy",
                      "Healthier Future",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-200">
                            {item}
                          </span>
                          <span className="text-xs font-black text-primary-200">
                            0{index + 1}
                          </span>
                        </div>

                        <div className="mt-3 h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-primary-300 to-primary-300"
                            style={{ width: `${58 + index * 10}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-sm leading-7 text-slate-300">
                Prevention, support, and the right health coverage can help you
                protect your future.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Floating Intro Cards */}
      <section className="relative px-6 py-10 lg:px-8">
        <div className="mx-auto ">
          <div className="-mt-20 grid gap-4 rounded-[2rem] border border-slate-100 bg-white p-5 shadow-2xl shadow-primary-950/10 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-primary-50 p-6">
              <p className="text-sm font-black uppercase tracking-widest text-primary-700">
                Quit
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                Break the smoking habit
              </h3>
            </div>

            <div className="rounded-[1.5rem] bg-primary-50 p-6">
              <p className="text-sm font-black uppercase tracking-widest text-primary-700">
                Heal
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                Support your body&apos;s recovery
              </h3>
            </div>

            <div className="rounded-[1.5rem] bg-primary-50 p-6">
              <p className="text-sm font-black uppercase tracking-widest text-primary-700">
                Protect
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                Lower future health risks
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Article Intro */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid  gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
              Prevention Starts Here
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Good health starts with prevention.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-7 shadow-xl shadow-slate-200/60">
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
      <section className="relative   px-6 py-24 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary-200/50 blur-3xl" />

        <div className="relative mx-auto ">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
              The Health Risks of Smoking
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Smoking affects nearly every organ in the body.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
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
                className="group rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-950/10"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-lg font-black text-primary-700 transition group-hover:bg-primary-300 group-hover:text-slate-950">
                  !
                </div>

                <h3 className="text-base font-black text-slate-950">{risk}</h3>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-300/60">
            <h3 className="text-2xl font-black">
              The good news: your body starts recovering after you quit.
            </h3>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
              No matter how long you&apos;ve smoked, stopping can help your body
              begin repairing itself and reduce future health risks over time.
            </p>
          </div>
        </div>
      </section>

      {/* Quit Timeline */}
      <section className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:px-8">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary-100 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-primary-700">
              What Happens When You Quit?
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              The benefits begin sooner than many people realize.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Quitting smoking is not just a future goal. Your body can begin
              responding positively within minutes, days, weeks, and months.
            </p>
          </div>

          <div className="relative mt-20">
            {/* Center Road Line */}
            <div className="absolute left-5 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-primary-300 via-primary-400 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

            <div className="space-y-14">
              {quitTimeline.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={item.time}
                    className={`relative flex ${
                      isLeft ? "lg:justify-start" : "lg:justify-end"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-5 top-8 z-20 h-6 w-6 -translate-x-1/2 rounded-full border-[5px] border-white bg-primary-500 shadow-[0_0_0_8px_rgba(167,204,92,0.18)] lg:left-1/2" />

                    {/* Card */}
                    <div
                      className={`group relative ml-12 w-full rounded-[2rem] border border-white bg-white p-6 shadow-xl shadow-slate-200/80 transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-2xl sm:p-8 lg:ml-0 lg:w-[43%] ${
                        isLeft ? "lg:mr-auto" : "lg:ml-auto"
                      }`}
                    >
                      {/* Connector Line */}
                      <div
                        className={`absolute top-10 hidden h-[3px] w-16 bg-primary-300 lg:block ${
                          isLeft ? "-right-16" : "-left-16"
                        }`}
                      />

                      {/* Arrow */}
                      <div
                        className={`absolute top-8 hidden h-5 w-5 rotate-45 border bg-white lg:block ${
                          isLeft
                            ? "-right-2 border-b-0 border-l-0 border-slate-100"
                            : "-left-2 border-r-0 border-t-0 border-slate-100"
                        }`}
                      />

                      <span className="absolute right-6 top-5 text-6xl font-black leading-none text-slate-100 transition group-hover:text-primary-100">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="relative z-10 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-black text-primary-700">
                        {item.time}
                      </span>

                      <h3 className="relative z-10 mt-5 text-2xl font-black text-slate-950">
                        {item.title}
                      </h3>

                      <p className="relative z-10 mt-3 text-sm leading-7 text-slate-600">
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
        className="relative overflow-hidden bg-slate-950 px-6 py-24 lg:px-8"
      >
        <div className="absolute left-[-10%] top-[-15%] h-[32rem] w-[32rem] rounded-full bg-primary-500/20 blur-[120px]" />
        <div className="absolute right-[-12%] bottom-[-20%] h-[34rem] w-[34rem] rounded-full bg-primary-400/20 blur-[120px]" />

        <div className="relative mx-auto ">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-primary-200">
              Practical Smoking Cessation Tips
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Small actions can help you manage cravings and build momentum.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Quitting smoking is a journey. Different strategies work for
              different people, but these practical steps can help you stay
              focused and prepared.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quitTips.map((tip) => (
              <div
                key={tip.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/[0.12]"
              >
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-primary-400/20 blur-3xl transition duration-500 group-hover:scale-150" />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-300 via-primary-300 to-primary-200 text-lg font-black text-slate-950 shadow-xl shadow-primary-500/25">
                  {tip.number}
                </div>

                <h3 className="relative mt-7 text-2xl font-black text-white">
                  {tip.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-300">
                  {tip.text}
                </p>

                <div className="relative mt-7 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary-300 to-primary-300 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid  gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
              Expect Challenges
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Don&apos;t give up if quitting feels difficult.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Nicotine is highly addictive, so withdrawal symptoms are common.
              These symptoms are temporary and usually become less intense with
              time.
            </p>

            <div className="mt-8 rounded-[2rem] bg-primary-50 p-7">
              <h3 className="text-2xl font-black text-slate-950">
                A slip is not a failure.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Many people make several attempts before quitting for good. If
                you smoke a cigarette, learn from the moment, recommit to your
                goal, and keep moving forward.
              </p>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-6 shadow-2xl shadow-slate-200/70">
            <h3 className="text-2xl font-black text-slate-950">
              Common withdrawal symptoms may include:
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {withdrawalSymptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="rounded-2xl bg-white p-5 shadow-md shadow-slate-200/60"
                >
                  <div className="mb-3 h-2 w-12 rounded-full bg-primary-400" />
                  <p className="font-bold text-slate-700">{symptom}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loved Ones */}
      <section className="relative   px-6 py-24 lg:px-8">
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />

        <div className="relative mx-auto ">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/70 sm:p-10">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-primary-200">
                Secondhand Smoke
              </span>

              <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
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
                  className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-lg shadow-slate-200/70"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-100 text-sm font-black text-primary-700">
                      ✓
                    </span>

                    <p className="font-bold text-slate-700">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Healthcare */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto ">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
                Preventive Healthcare
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Prevention and protection go hand in hand.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Stopping smoking is one of the most effective ways to reduce
                your risk of chronic disease. Regular wellness visits,
                screenings, and conversations with your healthcare provider are
                also important for long-term health.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-slate-100 bg-white p-7 shadow-2xl shadow-slate-200/70">
              <h3 className="text-2xl font-black text-slate-950">
                Breezy Health Solutions can help you explore:
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {coverageOptions.map((option) => (
                  <div
                    key={option}
                    className="rounded-2xl bg-primary-50 p-5 transition hover:bg-primary-100"
                  >
                    <p className="font-black text-slate-950">{option}</p>
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
        className="relative overflow-hidden bg-slate-950 px-6 py-24 lg:px-8"
      >
        <div className="absolute left-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-primary-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[34rem] w-[34rem] rounded-full bg-primary-400/20 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-primary-200">
            A Healthier Future Starts Today
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
            You don&apos;t have to be perfect. You just have to take the first
            step.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300">
            Every day without cigarettes allows your body to heal, lowers your
            risk of serious disease, and improves your overall quality of life.
            If you&apos;re ready to invest in your health, now is the perfect
            time to begin.
          </p>

          <div className="mt-10 rounded-[2.5rem] border border-white/10 bg-white/[0.08] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <h3 className="text-3xl font-black text-white">Brenda Ruiz</h3>

            <p className="mt-2 text-sm font-bold uppercase tracking-[0.25em] text-primary-200">
              Licensed Health Insurance Advisor
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              Helping individuals, families, and small business owners find
              affordable private PPO health insurance solutions with the freedom
              to choose their healthcare providers.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:5125579308"
                className="rounded-full bg-primary-300 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-primary-500/25 transition hover:scale-105 hover:bg-primary-200"
              >
                Call (512) 557-9308
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Request Health Coverage Help
              </a>
            </div>

            <p className="mt-8 text-lg font-black text-primary-200">
              “Better Coverage. Better Protection. Breezy Solutions.”
            </p>
          </div>
        </div>
      </section>

      {/* SEO Keywords */}
      {/* <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto ">
          <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-7">
            <h2 className="text-2xl font-black text-slate-950">
              Helpful Topics Covered
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              This educational article supports visitors searching for smoking
              cessation guidance, preventive healthcare information, and
              affordable health insurance support.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {seoKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
