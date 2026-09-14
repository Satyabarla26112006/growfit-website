import Image from "next/image";

const features = [
  ["01", "NUTRITION", "Know what you eat.", "Track calories, protein, carbs, fats, fiber and meals in one clear view."],
  ["02", "FITNESS", "Train with purpose.", "Follow structured workouts and keep training connected to your goals."],
  ["03", "PROGRESS", "See yourself grow.", "Track weight, nutrition, goals and consistency over time."],
  ["04", "HEALTH", "Understand the bigger picture.", "Review health readings, vitamins, minerals and nutrition guidance."],
  ["05", "GOALS", "Stay focused.", "Keep your current weight, target weight and weekly target visible."],
  ["06", "HABITS", "Build consistency.", "Turn small daily actions into routines that support long-term progress."],
];

const nutrients = [
  ["Protein", "Supports muscle growth and repair and helps maintain lean body tissue.", "Dal, beans, eggs, dairy, fish, chicken, soy and nuts."],
  ["Carbohydrates", "A major source of energy for everyday activity and exercise.", "Rice, oats, potatoes, fruits, vegetables and whole grains."],
  ["Fats", "Provide energy and help the body absorb fat-soluble vitamins.", "Nuts, seeds, oils, avocado, eggs and fatty fish."],
  ["Vitamins", "Micronutrients that support normal body functions and overall health.", "A varied diet with fruits, vegetables, dairy, eggs and legumes."],
  ["Minerals", "Essential nutrients involved in bones, muscles, fluid balance and other processes.", "Leafy greens, dairy, legumes, nuts, seeds and whole foods."],
  ["Fiber & Water", "Fiber supports digestive health and water is essential for normal body function.", "Vegetables, fruits, whole grains, legumes and regular water intake."],
];

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative rounded-[2.5rem] border-[6px] border-[#202936] bg-[#07111c] p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.55)] ${className}`}>
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="relative aspect-[9/20] overflow-hidden rounded-[2rem] bg-[#07111c]">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 78vw, 330px" className="object-cover object-top" priority={src.includes("home-main")} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05080d] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#05080d]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-black text-[#05080d]">G</div>
            <div><p className="text-lg font-semibold leading-none">GrowFit</p><p className="mt-1 text-[9px] tracking-[0.18em] text-white/35">HEALTH · FITNESS · PROGRESS</p></div>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#nutrition" className="text-sm text-white/60 hover:text-white">Nutrition</a>
            <a href="#features" className="text-sm text-white/60 hover:text-white">Features</a>
            <a href="#app" className="text-sm text-white/60 hover:text-white">App</a>
            <a href="#about" className="text-sm text-white/60 hover:text-white">About</a>
          </div>
          <a href="#download" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#05080d]">Get GrowFit</a>
        </div>
      </nav>

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-32 lg:pt-28">
          <div>
            <span className="inline-flex rounded-full border border-violet-400/25 bg-violet-400/[0.06] px-4 py-2 text-xs text-violet-200">Your health. Your progress. Your GrowFit.</span>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-8xl">Build a healthier <span className="text-violet-300">you.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">GrowFit brings nutrition, fitness, habits, goals and progress together in one simple health experience.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#app" className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#05080d]">Explore the app</a>
              <a href="#nutrition" className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold">Learn about nutrition</a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/[0.08] py-5">
              <div><p className="text-lg font-semibold">Calories</p><p className="mt-1 text-xs text-white/35">Daily tracking</p></div>
              <div className="border-l border-white/[0.08] pl-5"><p className="text-lg font-semibold">Macros</p><p className="mt-1 text-xs text-white/35">Protein · Carbs · Fat</p></div>
              <div className="border-l border-white/[0.08] pl-5"><p className="text-lg font-semibold">Progress</p><p className="mt-1 text-xs text-white/35">Goals & consistency</p></div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[360px]"><Phone src="/app/home-main.jpeg" alt="Real GrowFit home dashboard" /></div>
        </div>
      </section>

      <section id="app" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">REAL GROWFIT APP</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Built around your real health journey.</h2><p className="mt-6 leading-8 text-white/45 sm:text-lg">Real screens from GrowFit — not concept mockups. Nutrition, workouts, progress and personal goals work together.</p></div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1"><p className="text-sm text-violet-300">01 / Daily dashboard</p><h3 className="mt-4 text-3xl font-semibold sm:text-4xl">See your day at a glance.</h3><p className="mt-5 max-w-xl leading-8 text-white/45">Calories, macros, meals, health readings, weight goals, water and activity are organized into one dashboard.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{["Calories & targets","Protein, carbs & fats","Blood pressure & glucose","Weight & activity"].map(x => <div key={x} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 text-sm text-white/55">{x}</div>)}</div></div>
          <div className="order-1 flex justify-center lg:order-2"><Phone src="/app/home-main.jpeg" alt="GrowFit home dashboard" className="w-[280px] sm:w-[310px]" /></div>
        </div>

        <div className="mt-28 grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center"><Phone src="/app/food.jpeg" alt="GrowFit food tracking" className="w-[280px] sm:w-[310px]" /></div>
          <div><p className="text-sm text-cyan-300">02 / Nutrition</p><h3 className="mt-4 text-3xl font-semibold sm:text-4xl">Track what you eat without the complexity.</h3><p className="mt-5 max-w-xl leading-8 text-white/45">Search food, choose a meal, log portions and see how your meals contribute to your daily nutrition targets.</p></div>
        </div>

        <div className="mt-28 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1"><p className="text-sm text-violet-300">03 / Progress</p><h3 className="mt-4 text-3xl font-semibold sm:text-4xl">Turn numbers into visible progress.</h3><p className="mt-5 max-w-xl leading-8 text-white/45">Track weight changes, goal progress and daily nutrition so your effort becomes easier to understand over time.</p></div>
          <div className="order-1 flex justify-center lg:order-2"><Phone src="/app/progress-overview.jpeg" alt="GrowFit progress dashboard" className="w-[280px] sm:w-[310px]" /></div>
        </div>

        <div className="mt-28 grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center"><Phone src="/app/workouts.jpeg" alt="GrowFit workouts" className="w-[280px] sm:w-[310px]" /></div>
          <div><p className="text-sm text-cyan-300">04 / Fitness</p><h3 className="mt-4 text-3xl font-semibold sm:text-4xl">Train with purpose.</h3><p className="mt-5 max-w-xl leading-8 text-white/45">Browse structured workout plans by focus, difficulty and duration, then keep training connected to your goals.</p></div>
        </div>
      </section>

      <section id="features" className="border-y border-white/[0.06] bg-[#07101a]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">FEATURES</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">Everything you need to grow.</h2><p className="mt-6 max-w-2xl leading-8 text-white/45">The important pieces of your health journey, brought into one experience.</p>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{features.map(([n,l,t,d]) => <article key={n} className="min-h-[250px] rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-violet-300/20"><div className="flex justify-between"><span className="text-xs font-semibold text-violet-300">{l}</span><span className="text-xs text-white/20">{n}</span></div><h3 className="mt-14 text-2xl font-semibold">{t}</h3><p className="mt-4 leading-7 text-white/40">{d}</p></article>)}</div>
        </div>
      </section>

      <section id="nutrition" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">NUTRITION 101</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Why nutrition matters.</h2><p className="mt-6 leading-8 text-white/45">Food supplies energy and nutrients your body needs for everyday function, activity, recovery and growth. A balanced eating pattern matters more than obsessing over one number.</p><div className="mt-8 rounded-3xl border border-violet-400/15 bg-violet-400/[0.04] p-6"><p className="font-semibold">GrowFit makes nutrition easier to understand.</p><p className="mt-2 text-sm leading-7 text-white/40">Learn what you eat, understand your targets and use the information to make better decisions consistently.</p></div></div>
          <div className="grid gap-4 sm:grid-cols-2">{nutrients.map(([name,text,examples],i) => <article key={name} className={`rounded-[1.8rem] border p-6 ${i%2===0 ? "border-violet-400/15 bg-violet-400/[0.04]" : "border-cyan-400/15 bg-cyan-400/[0.035]"}`}><span className="text-xs text-white/25">0{i+1}</span><h3 className="mt-10 text-2xl font-semibold">{name}</h3><p className="mt-4 text-sm leading-7 text-white/55">{text}</p><p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-white/35">Examples: {examples}</p></article>)}</div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#07101a]"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-10 lg:py-32"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">NUTRITION INSIGHTS</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Go beyond calories.</h2><p className="mt-6 max-w-xl leading-8 text-white/45">GrowFit gives you a broader view of macro balance, fiber, sugar and displayed vitamin and mineral coverage from your logged foods.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Macro breakdown","Heart & blood sugar guidance","Vitamins & minerals","Daily nutrition targets"].map(x => <div key={x} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 text-sm text-white/55">{x}</div>)}</div></div><div className="flex justify-center"><Phone src="/app/nutrition-insights.jpeg" alt="GrowFit nutrition insights" className="w-[280px] sm:w-[310px]" /></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"><div className="grid gap-5 lg:grid-cols-2"><div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10"><p className="text-xs uppercase tracking-[0.2em] text-cyan-300">HEALTH</p><h3 className="mt-4 text-3xl font-semibold">Keep health readings in context.</h3><p className="mt-5 leading-8 text-white/40">See entered blood pressure, blood glucose and BMI alongside your broader progress.</p><div className="mt-8 flex justify-center"><Phone src="/app/progress-health.jpeg" alt="GrowFit health readings" className="w-[220px]" /></div></div><div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10"><p className="text-xs uppercase tracking-[0.2em] text-violet-300">PERSONAL</p><h3 className="mt-4 text-3xl font-semibold">Your goals stay personal.</h3><p className="mt-5 leading-8 text-white/40">Keep your activity level, nutrition targets, goal and personal details organized in your profile.</p><div className="mt-8 flex justify-center"><Phone src="/app/profile-goal.jpeg" alt="GrowFit profile and goal" className="w-[220px]" /></div></div></div></section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"><div className="rounded-[2.5rem] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-12 lg:p-16"><div className="grid gap-12 lg:grid-cols-2 lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">MEET THE FOUNDER</p><h2 className="mt-4 text-5xl font-semibold sm:text-6xl">Satya</h2><p className="mt-3 text-xl font-medium">Founder &amp; Creator of GrowFit</p><div className="mt-6 h-px w-20 bg-violet-400/60"/><p className="mt-6 max-w-xl leading-8 text-white/45">GrowFit is being built with a simple mission: make health and fitness easier to understand, track and improve.</p></div><div className="rounded-3xl border border-white/[0.08] bg-[#05080d] p-8"><p className="text-xs uppercase tracking-[0.2em] text-cyan-300">THE GROWFIT IDEA</p><h3 className="mt-4 text-3xl font-semibold">Health shouldn&apos;t feel complicated.</h3><p className="mt-5 leading-8 text-white/40">Put the important pieces in one place: what you eat, how you train, what your goals are and how you are progressing.</p></div></div></div></section>

      <section id="download" className="mx-auto max-w-7xl px-5 pb-24 lg:px-10 lg:pb-32"><div className="rounded-[2.5rem] border border-violet-400/15 bg-violet-400/[0.05] p-8 text-center sm:p-12 lg:p-16"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">GET GROWFIT</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">Ready to grow?</h2><p className="mx-auto mt-6 max-w-2xl leading-8 text-white/45">Start building better habits, understand your nutrition and track your progress with GrowFit.</p><div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"><span className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#05080d]">Android launch coming soon</span><span className="rounded-full border border-white/10 px-7 py-4 text-sm text-white/45">iOS planned</span></div></div></section>

      <footer className="border-t border-white/[0.07]"><div className="mx-auto max-w-7xl px-5 py-12 lg:px-10"><div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]"><div><a href="#" className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-black text-[#05080d]">G</div><span className="text-lg font-semibold">GrowFit</span></a><p className="mt-5 text-sm text-white/35">Your health. Your progress. Your GrowFit.</p><p className="mt-3 text-sm text-white/25">growfit.store</p></div><div><p className="text-sm font-semibold">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/40"><a href="#app">App</a><a href="#features">Features</a><a href="#nutrition">Nutrition</a><a href="#about">About</a></div></div><div><p className="text-sm font-semibold">Company</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/40"><a href="#about">Founder</a><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div></div></div><div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-xs text-white/25 sm:flex-row sm:justify-between"><p>© 2026 GrowFit. All rights reserved.</p><p>Built by Satya · Founder &amp; Creator of GrowFit</p></div></div></footer>
    </main>
  );
}
