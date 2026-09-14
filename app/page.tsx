const nutritionCards = [
  {
    icon: "🥩",
    title: "Protein",
    subtitle: "Build & Repair",
    description:
      "Protein provides amino acids your body uses to build and repair muscles and other tissues.",
    examples: "Eggs · Chicken · Fish · Paneer · Lentils · Beans · Soy",
  },
  {
    icon: "🍚",
    title: "Carbohydrates",
    subtitle: "Fuel Your Body",
    description:
      "Carbohydrates are an important source of energy for your brain and physical activity.",
    examples: "Rice · Roti · Oats · Potatoes · Fruits · Whole grains",
  },
  {
    icon: "🥑",
    title: "Fats",
    subtitle: "Essential Function",
    description:
      "Dietary fats support cells, hormones, the nervous system and absorption of vitamins A, D, E and K.",
    examples: "Nuts · Seeds · Avocado · Olive oil · Eggs · Fish",
  },
  {
    icon: "🍊",
    title: "Vitamins",
    subtitle: "Regulate Processes",
    description:
      "Vitamins are micronutrients that help your body carry out many essential biological processes.",
    examples: "Fruits · Vegetables · Eggs · Dairy · Whole foods",
  },
  {
    icon: "🧂",
    title: "Minerals",
    subtitle: "Keep You Working",
    description:
      "Minerals support important functions including bones, muscles, nerves, fluid balance and oxygen transport.",
    examples: "Calcium · Iron · Magnesium · Potassium · Zinc",
  },
  {
    icon: "🌾",
    title: "Fiber",
    subtitle: "Support Digestion",
    description:
      "Fiber supports normal digestion, bowel function and helps you feel satisfied after meals.",
    examples: "Vegetables · Fruits · Beans · Lentils · Nuts · Seeds",
  },
  {
    icon: "💧",
    title: "Water",
    subtitle: "Hydrate & Perform",
    description:
      "Water helps regulate temperature, transport nutrients, support digestion and maintain normal body function.",
    examples: "Water · Fruits · Vegetables · Soups",
  },
];

const featureCards = [
  {
    number: "01",
    title: "Nutrition",
    description:
      "Track calories, understand your food and keep an eye on the nutrients that matter.",
  },
  {
    number: "02",
    title: "Fitness",
    description:
      "Stay active, track workouts and build a routine that fits your lifestyle.",
  },
  {
    number: "03",
    title: "Habits",
    description:
      "Turn small daily actions into consistent habits that move you toward your goals.",
  },
  {
    number: "04",
    title: "Progress",
    description:
      "See your journey over time and understand how consistency adds up.",
  },
];

function PhoneFrame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="rounded-[40px] border border-white/15 bg-[#111111] p-2 shadow-2xl shadow-black/50">
        <div className="overflow-hidden rounded-[33px] bg-[#f5f5f7]">
          <div className="flex items-center justify-center bg-[#f5f5f7] pt-3">
            <div className="h-5 w-24 rounded-full bg-black" />
          </div>

          <div className="min-h-[500px]">{children}</div>
        </div>
      </div>

      <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
        {label}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/85 px-5 py-3 backdrop-blur-xl">
            <a href="#" className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-black"
                style={{ color: "#050505" }}
              >
                G
              </div>

              <div>
                <p className="text-base font-bold tracking-tight">
                  GrowFit
                </p>

                <p className="hidden text-[10px] uppercase tracking-[0.2em] text-white/35 sm:block">
                  Health · Fitness · Progress
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#showcase"
                className="text-sm text-white/60 transition hover:text-white"
              >
                App
              </a>

              <a
                href="#nutrition"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Nutrition
              </a>

              <a
                href="#features"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Features
              </a>

              <a
                href="#about"
                className="text-sm text-white/60 transition hover:text-white"
              >
                About
              </a>

              <a
                href="#download"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Download
              </a>
            </div>

            <a
              href="#download"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "#050505" }}
            >
              Get GrowFit
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 pb-24 pt-40 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-7 inline-flex rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-2 text-sm text-purple-200">
              Your health. Your progress. Your GrowFit.
            </div>

            <h1 className="text-6xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[110px]">
              Build a healthier
              <span className="block text-purple-400">you.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/55 sm:text-xl">
              GrowFit brings nutrition, fitness, habits and progress together
              in one simple experience designed to help you become better,
              every day.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#download"
                className="rounded-full bg-white px-8 py-4 text-sm font-bold transition hover:scale-[1.02] hover:bg-white/90"
                style={{ color: "#050505" }}
              >
                Download GrowFit
              </a>

              <a
                href="#showcase"
                className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-bold text-white transition hover:border-purple-400/40 hover:bg-purple-500/10"
              >
                Explore the app
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* APP SHOWCASE */}
      <section
        id="showcase"
        className="border-y border-white/10 bg-[#090909] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              Inside GrowFit
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Everything you need.
              <span className="block text-purple-400">
                One place.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/50">
              Your nutrition, activity, habits and progress come together in
              one simple health experience.
            </p>
          </div>

          <div className="mt-20 grid items-start gap-10 lg:grid-cols-3">
            {/* HOME PHONE */}
            <PhoneFrame label="Home">
              <div className="p-5 text-black">
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <p className="text-xs text-black/40">Good morning</p>
                    <h3 className="mt-1 text-xl font-bold">Satya 👋</h3>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-sm font-bold">
                    G
                  </div>
                </div>

                <div className="mt-7 rounded-[26px] bg-black p-5 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-white/45">
                      Daily progress
                    </p>

                    <span className="text-xs text-purple-300">
                      72%
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-purple-500" />
                  </div>

                  <p className="mt-5 text-3xl font-bold">1,840</p>

                  <p className="text-xs text-white/40">
                    of 2,200 kcal
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-[10px] text-black/40">
                      Protein
                    </p>
                    <p className="mt-2 text-lg font-bold">96g</p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-[10px] text-black/40">
                      Steps
                    </p>
                    <p className="mt-2 text-lg font-bold">7,842</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-purple-50 p-4">
                  <p className="text-xs font-semibold text-purple-700">
                    Today's goal
                  </p>

                  <p className="mt-1 text-sm text-black/55">
                    Keep moving and stay consistent.
                  </p>
                </div>
              </div>
            </PhoneFrame>

            {/* NUTRITION PHONE */}
            <PhoneFrame label="Nutrition">
              <div className="p-5 text-black">
                <div className="pt-4">
                  <p className="text-xs text-black/40">
                    Today's nutrition
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    Your intake
                  </h3>
                </div>

                <div className="mt-6 rounded-[26px] bg-purple-600 p-5 text-white">
                  <p className="text-xs text-white/60">
                    Calories
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    1,840
                  </p>

                  <p className="mt-1 text-xs text-white/50">
                    kcal consumed
                  </p>

                  <div className="mt-5 h-2 rounded-full bg-white/20">
                    <div className="h-full w-[84%] rounded-full bg-white" />
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-black/45">
                        Protein
                      </span>

                      <span className="text-xs font-bold">
                        96g / 130g
                      </span>
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-black/5">
                      <div className="h-full w-[74%] rounded-full bg-purple-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-black/45">
                        Carbs
                      </span>

                      <span className="text-xs font-bold">
                        218g
                      </span>
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-black/5">
                      <div className="h-full w-[68%] rounded-full bg-purple-400" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-black/45">
                        Fats
                      </span>

                      <span className="text-xs font-bold">
                        54g
                      </span>
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-black/5">
                      <div className="h-full w-[61%] rounded-full bg-purple-300" />
                    </div>
                  </div>
                </div>
              </div>
            </PhoneFrame>

            {/* PROGRESS PHONE */}
            <PhoneFrame label="Progress">
              <div className="p-5 text-black">
                <div className="pt-4">
                  <p className="text-xs text-black/40">
                    Your journey
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    Progress
                  </h3>
                </div>

                <div className="mt-6 rounded-[26px] bg-black p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/40">
                        Weekly consistency
                      </p>

                      <p className="mt-2 text-3xl font-bold">
                        84%
                      </p>
                    </div>

                    <span className="rounded-full bg-purple-500/15 px-3 py-1 text-xs text-purple-300">
                      +12%
                    </span>
                  </div>

                  <div className="mt-7 flex h-28 items-end gap-2">
                    {[45, 58, 52, 68, 61, 82, 94].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex flex-1 items-end"
                        >
                          <div
                            className="w-full rounded-t-lg bg-purple-500"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-black/40">
                    Current streak
                  </p>

                  <div className="mt-2 flex items-end justify-between">
                    <p className="text-2xl font-bold">12 days</p>

                    <span className="text-xl">🔥</span>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl bg-purple-50 p-4">
                  <p className="text-xs font-semibold text-purple-700">
                    Keep going
                  </p>

                  <p className="mt-1 text-xs text-black/45">
                    Consistency creates progress.
                  </p>
                </div>
              </div>
            </PhoneFrame>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-white/30">
              Real GrowFit app screenshots will be showcased here.
            </p>
          </div>
        </div>
      </section>

      {/* WHY NUTRITION */}
      <section className="border-b border-white/10 bg-[#050505] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              Why nutrition matters
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
              Your body needs more than calories.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-white/55">
              Nutrition is the foundation of energy, recovery, fitness and
              everyday health. Your body needs a balance of nutrients to build
              tissue, produce energy, support your organs and keep essential
              systems working properly.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              A healthy diet isn't about removing one food or following a
              temporary restriction. It is about understanding what your body
              needs and building a balanced pattern of eating.
            </p>
          </div>
        </div>
      </section>

      {/* NUTRITION */}
      <section id="nutrition" className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              Nutrition 101
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Understand what
              <span className="text-purple-400"> fuels you.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
              Every meal is more than a calorie number. Learn what protein,
              carbohydrates, fats, vitamins, minerals, fiber and water do for
              your body.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {nutritionCards.map((card) => (
              <article
                key={card.title}
                className="group rounded-[28px] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/[0.05]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl">
                    {card.icon}
                  </div>

                  <span className="rounded-full border border-purple-400/15 bg-purple-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                    Nutrient
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-purple-300">
                  {card.subtitle}
                </p>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {card.description}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs leading-6 text-white/35">
                    {card.examples}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-purple-400/15 bg-purple-500/[0.06] p-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-bold">
                  The goal isn't perfection.
                </p>

                <p className="mt-1 text-sm leading-6 text-white/45">
                  Build a balanced diet that works with your lifestyle and
                  goals.
                </p>
              </div>

              <a
                href="#download"
                className="w-fit rounded-full bg-purple-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-purple-400"
              >
                Track with GrowFit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="border-y border-white/10 bg-[#090909] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              GrowFit features
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Your health journey,
              <span className="text-purple-400"> simplified.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
              GrowFit brings the most important parts of your health routine
              together without making the experience complicated.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => (
              <article
                key={feature.number}
                className="group rounded-[28px] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30"
              >
                <span className="text-sm font-bold text-purple-400">
                  {feature.number}
                </span>

                <div className="mt-14 h-px w-full bg-white/10 transition group-hover:bg-purple-400/30" />

                <h3 className="mt-7 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FITNESS */}
      <section className="px-6 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              Fitness
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Move your body.
              <span className="block text-purple-400">
                Build your routine.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/50">
              Fitness isn't only about intense workouts. It's about finding
              movement you enjoy and building a routine you can maintain.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Workouts",
                "Activity",
                "Steps",
                "Consistency",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#090909] p-6">
            <div className="rounded-[26px] bg-white/[0.035] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/35">
                    Today's activity
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    7,842
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-xl">
                  🏃
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/[0.04] p-4">
                  <p className="text-[10px] text-white/30">
                    Steps
                  </p>

                  <p className="mt-2 font-bold">7.8K</p>
                </div>

                <div className="rounded-2xl bg-white/[0.04] p-4">
                  <p className="text-[10px] text-white/30">
                    Active
                  </p>

                  <p className="mt-2 font-bold">46m</p>
                </div>

                <div className="rounded-2xl bg-white/[0.04] p-4">
                  <p className="text-[10px] text-white/30">
                    Goal
                  </p>

                  <p className="mt-2 font-bold">82%</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-purple-400/10 bg-purple-500/[0.06] p-5">
                <p className="text-sm font-semibold">
                  Keep moving.
                </p>

                <p className="mt-1 text-xs leading-6 text-white/40">
                  You're making progress toward today's activity goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HABITS */}
      <section className="border-y border-white/10 bg-[#090909] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Habits
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                Small actions.
                <span className="block text-purple-400">
                  Big changes.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-white/50">
                Healthy change is easier when you focus on repeatable actions.
                Build habits that fit your real life.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["🏃", "Exercise", "Completed"],
                ["💧", "Drink Water", "Completed"],
                ["🥗", "Balanced Meal", "Completed"],
                ["😴", "Sleep Routine", "Today"],
              ].map(([icon, title, status]) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/[0.025] p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-xl">
                    {icon}
                  </div>

                  <div className="flex-1">
                    <p className="font-semibold">{title}</p>

                    <p className="mt-1 text-xs text-white/35">
                      {status}
                    </p>
                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/15 text-xs text-purple-300">
                    ✓
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section className="px-6 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              Progress
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              See yourself
              <span className="block text-purple-400">
                getting better.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/50">
              Your progress tells a story. Track your consistency and see how
              small improvements add up over time.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0a0a0a] p-6">
            <div className="rounded-[24px] bg-white/[0.04] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/35">
                    Weekly consistency
                  </p>

                  <p className="mt-2 text-4xl font-bold">
                    84%
                  </p>
                </div>

                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  +12%
                </span>
              </div>

              <div className="mt-10 flex h-48 items-end gap-3">
                {[42, 58, 51, 69, 63, 83, 96].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex flex-1 flex-col items-center gap-3"
                    >
                      <div
                        className="w-full rounded-t-xl bg-purple-500/80"
                        style={{ height: `${height}%` }}
                      />

                      <span className="text-[10px] text-white/25">
                        {["M", "T", "W", "T", "F", "S", "S"][index]}
                      </span>
                    </div>
                  ),
                )}
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/[0.04] p-4">
                  <p className="text-xs text-white/30">
                    Current streak
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    12 days
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.04] p-4">
                  <p className="text-xs text-white/30">
                    Goal progress
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    78%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/10 bg-[#090909] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                About GrowFit
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Built to make health simpler.
              </h2>
            </div>

            <div>
              <p className="text-xl leading-9 text-white/60">
                GrowFit is built around a simple idea: improving your health
                shouldn't feel complicated.
              </p>

              <p className="mt-6 text-base leading-8 text-white/40">
                Nutrition, fitness, habits and progress belong together.
                GrowFit brings these pieces into one experience so you can
                understand your routine, stay consistent and keep moving
                forward.
              </p>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                  Founder
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  Satya
                </h3>

                <p className="mt-1 text-purple-300">
                  Founder & Creator of GrowFit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-purple-400/20 bg-purple-500/[0.07] p-8 text-center sm:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
            Start your journey
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">
            Ready to grow?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/45">
            GrowFit is coming soon. Your health journey deserves a simpler
            place to start.
          </p>

          <div className="mt-9">
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full bg-white px-8 py-4 text-sm font-bold opacity-90"
              style={{ color: "#050505" }}
            >
              Android — Coming Soon
            </button>
          </div>

          <p className="mt-5 text-xs text-white/25">
            iOS planned · More platforms coming
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-black"
                style={{ color: "#050505" }}
              >
                G
              </div>

              <span className="text-xl font-bold">
                GrowFit
              </span>
            </div>

            <p className="mt-4 text-sm text-white/35">
              Your health. Your progress. Your GrowFit.
            </p>

            <p className="mt-2 text-xs text-white/20">
              growfit.store
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="text-sm text-white/35">
              Built by Satya
            </p>

            <p className="mt-1 text-xs text-purple-300">
              Founder & Creator of GrowFit
            </p>

            <p className="mt-5 text-xs text-white/20">
              © 2026 GrowFit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}