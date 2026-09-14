const features = [
  {
    number: "01",
    title: "Smart Nutrition",
    description:
      "Track food, calories, macros, and nutrition without making healthy eating complicated.",
  },
  {
    number: "02",
    title: "Fitness & Workouts",
    description:
      "Stay active, build better habits, and work toward your fitness goals with GrowFit.",
  },
  {
    number: "03",
    title: "Track Your Progress",
    description:
      "Understand your journey with clear progress tracking that keeps you motivated.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06050d] text-white">

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-250px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-purple-700/25 blur-[150px]" />

        <div className="absolute left-[-250px] top-[500px] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-[-250px] top-[800px] h-[550px] w-[550px] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        <a
          href="#"
          className="flex items-center gap-3"
          style={{ color: "#ffffff" }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-lg font-bold backdrop-blur-xl">
            G
          </div>

          <span className="text-xl font-semibold tracking-tight">
            GrowFit
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">

          <a
            href="#features"
            className="text-sm transition hover:text-white"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Features
          </a>

          <a
            href="#about"
            className="text-sm transition hover:text-white"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            About
          </a>

          <a
            href="#download"
            className="text-sm transition hover:text-white"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Download
          </a>

        </div>

        {/* Desktop CTA */}
        <a
          href="#download"
          className="hidden rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur-xl transition hover:bg-white/15 md:block"
          style={{ color: "#ffffff" }}
        >
          Get GrowFit
        </a>

        {/* Mobile CTA */}
        <a
          href="#download"
          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-xl transition hover:bg-white/15 md:hidden"
          style={{ color: "#ffffff" }}
        >
          Get App
        </a>

      </nav>

      {/* ================= HERO ================= */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pt-28">

        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <div
            className="mx-auto inline-flex rounded-full border border-purple-300/20 bg-purple-400/10 px-4 py-2 text-sm backdrop-blur-xl"
            style={{ color: "#ddd6fe" }}
          >
            Your health. Your progress. Your GrowFit.
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
            Build a healthier

            <span className="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              you.
            </span>
          </h1>

          {/* Description */}
          <p
            className="mx-auto mt-7 max-w-2xl text-base leading-7 sm:text-lg"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            GrowFit brings nutrition, fitness, habits, and progress together
            in one beautifully simple experience.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="#download"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold transition hover:scale-[1.02]"
              style={{ color: "#08070e" }}
            >
              Download GrowFit
            </a>

            <a
              href="#features"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold backdrop-blur-xl transition hover:bg-white/10"
              style={{ color: "#ffffff" }}
            >
              Explore features
            </a>

          </div>
        </div>

        {/* ================= APP SHOWCASE ================= */}
        <div className="relative mx-auto mt-24 flex max-w-5xl justify-center">

          <div className="absolute top-20 h-80 w-[600px] rounded-full bg-purple-600/20 blur-[130px]" />

          {/* Phone */}
          <div className="relative z-10 w-[285px] rounded-[42px] border-[7px] border-[#292635] bg-[#0b0a13] p-2 shadow-2xl shadow-purple-950/60">

            <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

            <div className="overflow-hidden rounded-[32px] bg-[#11101c]">

              {/* App Header */}
              <div className="px-5 pb-4 pt-10">

                <p className="text-xs text-white/40">
                  Good morning
                </p>

                <div className="mt-1 flex items-center justify-between">

                  <h3 className="text-lg font-semibold">
                    Your progress
                  </h3>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-cyan-300 text-xs font-bold text-black">
                    G
                  </div>

                </div>
              </div>

              {/* Progress Card */}
              <div className="px-4">

                <div className="rounded-3xl bg-gradient-to-br from-purple-600/80 to-violet-900/80 p-5">

                  <p className="text-xs text-white/65">
                    Daily progress
                  </p>

                  <div className="mt-3 flex items-end justify-between">

                    <div>

                      <p className="text-3xl font-semibold">
                        72%
                      </p>

                      <p className="mt-1 text-xs text-white/60">
                        Keep going
                      </p>

                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/20">

                      <span className="text-xs font-semibold">
                        72%
                      </span>

                    </div>

                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 px-4 py-4">

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">

                  <p className="text-[10px] text-white/40">
                    Calories
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    1,840
                  </p>

                  <p className="mt-1 text-[10px] text-white/35">
                    / 2,200 kcal
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">

                  <p className="text-[10px] text-white/40">
                    Protein
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    96g
                  </p>

                  <p className="mt-1 text-[10px] text-white/35">
                    daily target
                  </p>

                </div>

              </div>

              {/* Activity */}
              <div className="px-4 pb-5">

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[10px] text-white/40">
                        Activity
                      </p>

                      <p className="mt-1 text-lg font-semibold">
                        7,842
                      </p>

                    </div>

                    <span className="text-xs text-cyan-300">
                      steps
                    </span>

                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-purple-400 to-cyan-300" />

                  </div>

                </div>

              </div>

              {/* Bottom Navigation */}
              <div className="grid grid-cols-4 border-t border-white/10 px-3 py-4 text-center text-[9px] text-white/35">

                <span className="text-purple-300">
                  Home
                </span>

                <span>
                  Nutrition
                </span>

                <span>
                  Workout
                </span>

                <span>
                  Progress
                </span>

              </div>

            </div>
          </div>

          {/* Left floating card */}
          <div className="absolute left-0 top-28 hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl lg:block">

            <p className="text-xs text-white/40">
              Nutrition
            </p>

            <p className="mt-2 text-xl font-semibold">
              1,840 kcal
            </p>

            <p className="mt-1 text-xs text-cyan-300">
              83% of goal
            </p>

          </div>

          {/* Right floating card */}
          <div className="absolute right-0 top-48 hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl lg:block">

            <p className="text-xs text-white/40">
              Today's activity
            </p>

            <p className="mt-2 text-xl font-semibold">
              7,842
            </p>

            <p className="mt-1 text-xs text-purple-300">
              steps
            </p>

          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >

        <div className="max-w-2xl">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
            Everything connected
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Your health journey, all in one place.
          </h2>

          <p className="mt-5 leading-7 text-white/50">
            GrowFit makes the important parts of health easier to understand,
            track, and improve.
          </p>

        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {features.map((feature) => (
            <article
              key={feature.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
            >

              <span className="text-sm text-purple-300">
                {feature.number}
              </span>

              <h3 className="mt-14 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                {feature.description}
              </p>

            </article>
          ))}

        </div>
      </section>

     {/* ================= ABOUT ================= */}
<section
  id="about"
  className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10"
>
  <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-purple-500/10 via-white/[0.03] to-cyan-400/5 p-8 sm:p-12 lg:p-16">

    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

      {/* Founder */}
      <div>

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
          Meet the Founder
        </p>

        <h2 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
          Satya
        </h2>

        <p className="mt-3 text-xl font-medium text-white">
          Founder & Creator of GrowFit
        </p>

        <div className="mt-6 h-px w-20 bg-purple-400/50" />

        <p className="mt-6 max-w-lg leading-8 text-white/50">
          Building GrowFit with a simple mission — make health and fitness
          easier for everyone to understand, track, and improve.
        </p>

      </div>

      {/* GrowFit story */}
      <div className="rounded-3xl border border-white/10 bg-black/20 p-8">

        <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
          The GrowFit idea
        </p>

        <h3 className="mt-5 text-3xl font-semibold">
          Health shouldn't feel complicated.
        </h3>

        <p className="mt-5 leading-8 text-white/50">
          GrowFit brings nutrition, fitness, habits, and progress together
          in one simple experience — helping people build healthier habits
          and keep moving forward.
        </p>

      </div>

    </div>
  </div>
</section>

      {/* ================= DOWNLOAD ================= */}
      <section
        id="download"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-purple-600/20 via-white/[0.04] to-cyan-400/10 p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
              Get GrowFit
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Ready to grow?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Start building better habits, understand your progress, and make
              your health journey easier with GrowFit.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold transition hover:scale-[1.02]"
                style={{ color: "#08070e" }}
              >
                Download GrowFit
              </a>

              <span className="rounded-full border border-white/10 bg-black/20 px-6 py-4 text-sm text-white/45">
                Coming soon
              </span>
            </div>

            <p className="mt-5 text-xs text-white/30">
              Android launch coming soon · iOS planned
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-3"
                style={{ color: "#ffffff" }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-sm font-bold">
                  G
                </div>

                <span className="text-lg font-semibold">
                  GrowFit
                </span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
                Your health. Your progress. Your GrowFit.
              </p>

              <p className="mt-3 text-sm text-white/25">
                growfit.store
              </p>
            </div>

            {/* Explore */}
            <div>
              <p className="text-sm font-semibold text-white">
                Explore
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm">
                <a
                  href="#features"
                  className="transition hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Features
                </a>

                <a
                  href="#about"
                  className="transition hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  About
                </a>

                <a
                  href="#download"
                  className="transition hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Download
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <p className="text-sm font-semibold text-white">
                Company
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm">
                <a
                  href="#about"
                  className="transition hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Founder
                </a>

                <a
                  href="#"
                  className="transition hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="transition hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 GrowFit. All rights reserved.</p>
            <p>Built by Satya · Founder & Creator of GrowFit</p>
          </div>
        </div>
      </footer>

      </main>
    );
}
