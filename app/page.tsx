import Image from "next/image";

type Card = {
  title: string;
  role?: string;
  body: string;
  sources: string;
};

const macronutrients: Card[] = [
  {
    title: "Protein",
    role: "Build & repair",
    body: "Protein supplies amino acids used to build and repair muscles and other tissues. It also contributes to enzymes, hormones and immune functions.",
    sources: "Eggs, dairy, paneer, fish, chicken, lentils, beans, soy, nuts and seeds.",
  },
  {
    title: "Carbohydrates",
    role: "Fuel",
    body: "Carbohydrates are an important source of energy, particularly for the brain and physical activity.",
    sources: "Rice, roti, oats, potatoes, fruits, vegetables and whole grains.",
  },
  {
    title: "Fats",
    role: "Essential function",
    body: "Dietary fats provide energy, support cell membranes and help the body absorb fat-soluble vitamins A, D, E and K.",
    sources: "Nuts, seeds, vegetable oils, avocado, eggs and fatty fish.",
  },
];

const fatSoluble: Card[] = [
  {
    title: "Vitamin A",
    role: "Fat-soluble",
    body: "Supports normal vision, immune function, growth and cell development.",
    sources: "Carrots, leafy greens, eggs, dairy and animal foods.",
  },
  {
    title: "Vitamin D",
    role: "Fat-soluble",
    body: "Helps the body absorb calcium and supports bones, muscles and immune function.",
    sources: "Sun exposure, fatty fish, egg yolk and fortified foods.",
  },
  {
    title: "Vitamin E",
    role: "Fat-soluble",
    body: "Acts as an antioxidant and supports immune function.",
    sources: "Nuts, seeds, vegetable oils and some green vegetables.",
  },
  {
    title: "Vitamin K",
    role: "Fat-soluble",
    body: "Supports normal blood clotting and proteins involved in bone-related functions.",
    sources: "Spinach, methi, broccoli, cabbage and other leafy vegetables.",
  },
];

const waterSoluble: Card[] = [
  {
    title: "Vitamin B1 — Thiamine",
    role: "Water-soluble",
    body: "Helps convert food into energy and supports normal nerve and cell function.",
    sources: "Whole grains, legumes, nuts, seeds, meat and fish.",
  },
  {
    title: "Vitamin B2 — Riboflavin",
    role: "Water-soluble",
    body: "Supports energy metabolism, growth and normal cellular function.",
    sources: "Milk, eggs, meat, fish and green vegetables.",
  },
  {
    title: "Vitamin B3 — Niacin",
    role: "Water-soluble",
    body: "Supports energy metabolism and normal cell, skin and nervous-system function.",
    sources: "Meat, fish, poultry, groundnuts, whole grains and legumes.",
  },
  {
    title: "Vitamin B5 — Pantothenic acid",
    role: "Water-soluble",
    body: "Helps the body use food for energy and is involved in fat metabolism.",
    sources: "Meat, eggs, milk, mushrooms, whole grains and legumes.",
  },
  {
    title: "Vitamin B6 — Pyridoxine",
    role: "Water-soluble",
    body: "Important for amino-acid metabolism, neurotransmitter synthesis, hemoglobin formation and immune function.",
    sources: "Fish, chicken, potatoes, bananas, chickpeas and fortified foods.",
  },
  {
    title: "Vitamin B7 — Biotin",
    role: "Water-soluble",
    body: "Helps enzymes involved in fat, carbohydrate and protein metabolism.",
    sources: "Eggs, nuts, seeds, legumes, meat and fish.",
  },
  {
    title: "Vitamin B9 — Folate",
    role: "Water-soluble",
    body: "Supports DNA synthesis, cell division, red blood cell formation and normal fetal development.",
    sources: "Leafy greens, beans, lentils, peas, citrus fruits and fortified foods.",
  },
  {
    title: "Vitamin B12 — Cobalamin",
    role: "Water-soluble",
    body: "Supports red blood cell formation, DNA synthesis and normal neurological function.",
    sources: "Milk, eggs, fish, meat, poultry and fortified foods.",
  },
  {
    title: "Vitamin C",
    role: "Water-soluble",
    body: "Supports collagen formation, wound healing, immune function and absorption of non-heme iron.",
    sources: "Amla, guava, citrus fruits, tomatoes, peppers and vegetables.",
  },
];

const majorMinerals: Card[] = [
  {
    title: "Calcium",
    body: "Supports bones and teeth, muscle contraction, nerve function and blood clotting.",
    sources: "Milk, curd, paneer, ragi, sesame and leafy greens.",
  },
  {
    title: "Phosphorus",
    body: "Important for bones and teeth, energy metabolism, DNA/RNA and cell membranes.",
    sources: "Dairy, pulses, meat, fish, nuts and seeds.",
  },
  {
    title: "Magnesium",
    body: "Supports muscle and nerve function, energy metabolism and many enzyme reactions.",
    sources: "Nuts, seeds, pulses, whole grains and leafy greens.",
  },
  {
    title: "Sodium",
    body: "Helps maintain fluid balance and supports nerve and muscle function. Excessive intake can contribute to high blood pressure.",
    sources: "Salt and many packaged and natural foods.",
  },
  {
    title: "Potassium",
    body: "Supports nerve function, muscle contraction and fluid balance.",
    sources: "Bananas, potatoes, beans, tomatoes, fruits and vegetables.",
  },
  {
    title: "Chloride",
    body: "Helps maintain fluid and electrolyte balance and is used to make stomach acid.",
    sources: "Salt and many foods.",
  },
  {
    title: "Sulfur",
    body: "Forms part of sulfur-containing amino acids and proteins.",
    sources: "Eggs, legumes, meat and other protein-rich foods.",
  },
];

const traceMinerals: Card[] = [
  {
    title: "Iron",
    body: "Needed for hemoglobin and oxygen transport and is important for normal energy metabolism.",
    sources: "Meat, fish, eggs, lentils, beans, leafy vegetables and fortified foods.",
  },
  {
    title: "Zinc",
    body: "Supports immune function, growth, DNA and protein synthesis and wound healing.",
    sources: "Meat, dairy, beans, nuts, seeds and whole grains.",
  },
  {
    title: "Copper",
    body: "Supports iron metabolism, connective tissue, nervous-system function and energy production.",
    sources: "Nuts, seeds, legumes, whole grains and seafood.",
  },
  {
    title: "Iodine",
    body: "Needed to make thyroid hormones, which regulate metabolism and support normal growth and brain development.",
    sources: "Iodized salt, seafood, dairy and eggs.",
  },
  {
    title: "Selenium",
    body: "Supports antioxidant systems, thyroid-hormone metabolism and immune function.",
    sources: "Seafood, meat, eggs and grains; levels vary with soil and food source.",
  },
  {
    title: "Manganese",
    body: "Involved in metabolism, bone formation and enzyme function.",
    sources: "Whole grains, legumes, nuts and seeds.",
  },
  {
    title: "Molybdenum",
    body: "Required for several enzymes involved in metabolism.",
    sources: "Legumes, grains, nuts and other foods.",
  },
  {
    title: "Chromium",
    body: "Present in foods and may influence metabolism, but it should not be presented as a universal diabetes-prevention nutrient.",
    sources: "Whole grains, meats, vegetables and other foods.",
  },
];

function InfoCard({ item, tone = "violet" }: { item: Card; tone?: "violet" | "cyan" }) {
  return (
    <article
      className={`rounded-[1.8rem] border p-6 ${
        tone === "violet"
          ? "border-violet-400/20 bg-violet-400/[0.05]"
          : "border-cyan-400/20 bg-cyan-400/[0.045]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        {item.role ? (
          <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/35">
            {item.role}
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-7 text-white/60">{item.body}</p>
      <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-white/35">
        Food sources: {item.sources}
      </p>
    </article>
  );
}

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-[245px] rounded-[2.4rem] border-[6px] border-[#202b38] bg-[#07111c] p-1.5 shadow-[0_28px_75px_rgba(0,0,0,0.55)] sm:w-[275px]">
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="relative aspect-[9/20] overflow-hidden rounded-[2rem]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="275px"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05080d] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#05080d]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-black text-[#05080d]">
              G
            </div>
            <div>
              <p className="text-lg font-semibold">GrowFit</p>
              <p className="text-[9px] tracking-[0.18em] text-white/30">
                HEALTH · FITNESS · PROGRESS
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#app" className="text-sm text-white/60 hover:text-white">App</a>
            <a href="#nutrition" className="text-sm text-white/60 hover:text-white">Nutrition</a>
            <a href="#vitamins" className="text-sm text-white/60 hover:text-white">Vitamins</a>
            <a href="#minerals" className="text-sm text-white/60 hover:text-white">Minerals</a>
            <a href="#india" className="text-sm text-white/60 hover:text-white">India</a>
          </div>

          <a href="#download" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold" style={{ color: "#05080d" }}>
            Get GrowFit
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="border-b border-white/[0.07]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-32 lg:pt-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
              GrowFit Nutrition Guide
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Eat with
              <span className="block text-violet-300">understanding.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
              Learn how nutrition supports energy, growth, recovery and everyday
              health — from macronutrients to every major vitamin and mineral.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#nutrition" className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold" style={{ color: "#05080d" }}>
                Start learning
              </a>
              <a href="#app" className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white">
                See GrowFit
              </a>
            </div>
          </div>

          <div className="mx-auto">
            <Phone src="/app/home-main.jpeg" alt="GrowFit home dashboard" />
          </div>
        </div>
      </section>

      {/* WHY NUTRITION */}
      <section id="nutrition" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              01 · The foundation
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Why nutrition matters.
            </h2>
            <p className="mt-6 leading-8 text-white/45">
              Food supplies energy and nutrients your body uses for normal
              function, activity, repair and growth. A balanced eating pattern
              is more useful than focusing on calories alone.
            </p>

            <div className="mt-8 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6">
              <p className="font-semibold">Think beyond calories.</p>
              <p className="mt-2 text-sm leading-7 text-white/40">
                Calories measure energy. Nutrition is the bigger picture:
                protein, carbohydrates, fats, vitamins, minerals, fiber and
                water all matter.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {macronutrients.map((item, index) => (
              <InfoCard key={item.title} item={item} tone={index === 1 ? "cyan" : "violet"} />
            ))}
          </div>
        </div>
      </section>

      {/* REAL APP */}
      <section id="app" className="border-y border-white/[0.07] bg-[#07101a]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                02 · Inside GrowFit
              </p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                Track what you eat.
                <span className="block text-violet-300">Understand your day.</span>
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-white/45">
                Your real GrowFit app combines food logging, calories, macros,
                health readings, goals and progress in one experience.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["Calories", "Daily energy target and intake"],
                  ["Macros", "Protein, carbs and fats"],
                  ["Food", "Meals, portions and recent foods"],
                  ["Progress", "Weight, goals and consistency"],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                    <p className="font-semibold">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/40">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Phone src="/app/food.jpeg" alt="GrowFit food tracking app screen" />
            </div>
          </div>
        </div>
      </section>

      {/* VITAMINS */}
      <section id="vitamins" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
            03 · Vitamins
          </p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Every vitamin has a job.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/45">
            Vitamins are micronutrients required in small amounts for many
            essential body processes. They are commonly grouped by how the body
            handles them.
          </p>
        </div>

        <div className="mt-16">
          <div className="mb-7 border-b border-white/[0.08] pb-5">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Fat-soluble vitamins</p>
            <h3 className="mt-2 text-2xl font-semibold">A · D · E · K</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/35">
              These vitamins can be stored in the body. Food intake and high-dose
              supplementation are not the same thing.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {fatSoluble.map((item) => (
              <InfoCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-7 border-b border-white/[0.08] pb-5">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Water-soluble vitamins</p>
            <h3 className="mt-2 text-2xl font-semibold">B vitamins · C</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/35">
              Regular dietary intake matters. Vitamin B12 is a notable exception
              because the body can store it for longer periods.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {waterSoluble.map((item) => (
              <InfoCard key={item.title} item={item} tone="cyan" />
            ))}
          </div>
        </div>
      </section>

      {/* APP NUTRITION INSIGHTS */}
      <section className="border-y border-white/[0.07] bg-[#07101a]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Nutrition insights
              </p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                Go beyond the macro numbers.
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-white/45">
                GrowFit can surface macro breakdown, general nutrition guidance
                and displayed vitamin/mineral coverage from logged foods.
              </p>
            </div>

            <div className="flex justify-center gap-5">
              <Phone src="/app/nutrition-insights.jpeg" alt="GrowFit nutrition insights" />
              <div className="hidden translate-y-10 sm:block">
                <Phone src="/app/progress-health.jpeg" alt="GrowFit health readings and nutrition" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINERALS */}
      <section id="minerals" className="border-b border-white/[0.07] bg-[#07101a]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              04 · Minerals
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Minerals keep systems working.
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/45">
              Minerals are inorganic nutrients involved in bones, blood, nerves,
              muscles, fluid balance, oxygen transport and enzyme systems.
            </p>
          </div>

          <div className="mt-16">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Major minerals
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {majorMinerals.map((item) => (
                <InfoCard key={item.title} item={item} tone="cyan" />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Trace minerals
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {traceMinerals.map((item) => (
                <InfoCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDIA */}
      <section id="india" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
              05 · India
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Why nutrition education matters in India.
            </h2>
            <p className="mt-5 leading-8 text-white/45">
              Nutrition challenges can exist on multiple sides at once:
              undernutrition, micronutrient deficiencies, overweight and obesity,
              and diet-related chronic disease.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["67.1%", "Children 6–59 months", "Anemia reported in NFHS-5 (2019–21)."],
              ["57.2%", "Women 15–49 years", "Anemia reported in NFHS-5 (2019–21)."],
              ["35.5%", "Children under 5", "Stunting reported in NFHS-5 (2019–21)."],
              ["19.3%", "Children under 5", "Wasting reported in NFHS-5 (2019–21)."],
            ].map(([number, title, body]) => (
              <div key={`${number}-${title}`} className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.025] p-7">
                <p className="text-3xl font-semibold text-violet-300">{number}</p>
                <p className="mt-3 font-semibold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/40">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-violet-400/15 bg-violet-400/[0.045] p-8 sm:p-10">
          <h3 className="text-2xl font-semibold">Malnutrition is not just being underweight.</h3>
          <p className="mt-4 max-w-4xl leading-8 text-white/45">
            Malnutrition includes deficiencies, excesses or imbalances in energy
            and nutrient intake. It can include undernutrition, micronutrient
            deficiencies, overweight and obesity. A person can consume enough
            calories and still have a diet that is poor in important nutrients.
          </p>
        </div>

        <div className="mt-5 text-xs leading-6 text-white/25">
          Sources: NFHS-5 (2019–21), WHO nutrition guidance and ICMR-NIN Dietary
          Guidelines for Indians 2024.
        </div>
      </section>

      {/* PROGRESS / WORKOUTS */}
      <section className="border-y border-white/[0.07] bg-[#07101a]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 grid gap-8 sm:grid-cols-2">
              <div className="flex justify-center">
                <Phone src="/app/workouts.jpeg" alt="GrowFit workout plans" />
              </div>
              <div className="flex justify-center sm:translate-y-12">
                <Phone src="/app/progress-overview.jpeg" alt="GrowFit progress tracking" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                06 · The full journey
              </p>
              <h2 className="mt-4 text-4xl font-semibold">
                Nutrition and fitness belong together.
              </h2>
              <p className="mt-6 leading-8 text-white/45">
                Eat with awareness. Train with purpose. Track your progress.
                Build routines you can actually maintain.
              </p>

              <div className="mt-8 space-y-3">
                {["Food tracking", "Workout plans", "Weight progress", "Consistency"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 text-sm text-white/60">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Health context</p>
            <h3 className="mt-4 text-3xl font-semibold">Keep useful readings together.</h3>
            <p className="mt-5 leading-8 text-white/40">
              GrowFit can display entered blood pressure, blood glucose and BMI
              alongside other health information. These readings are for tracking
              and context, not diagnosis.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Personal goals</p>
            <h3 className="mt-4 text-3xl font-semibold">Make the journey yours.</h3>
            <p className="mt-5 leading-8 text-white/40">
              Set a goal, track your target weight, choose your activity level
              and keep your daily nutrition targets visible.
            </p>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="border-y border-white/[0.07] bg-[#07101a]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
              Important
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Education is not diagnosis.</h2>
            <p className="mt-4 max-w-4xl leading-8 text-white/40">
              GrowFit nutrition information is general education. A food log
              cannot by itself prove a vitamin or mineral deficiency, and app
              readings should not be treated as a medical diagnosis. Suspected
              deficiencies or concerning health readings should be discussed with
              a qualified healthcare professional.
            </p>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="rounded-[2.5rem] border border-violet-400/15 bg-violet-400/[0.05] p-8 text-center sm:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
            Get GrowFit
          </p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Ready to grow?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/45">
            Learn about your nutrition, track your routine and see your progress
            come together in one app.
          </p>
          <div className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold" style={{ color: "#05080d" }}>
            Android launch coming soon
          </div>
          <p className="mt-4 text-xs text-white/25">iOS planned</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                Founder
              </p>
              <h2 className="mt-4 text-5xl font-semibold">Satya</h2>
              <p className="mt-3 text-xl text-white">Founder &amp; Creator of GrowFit</p>
              <p className="mt-6 max-w-xl leading-8 text-white/40">
                Building GrowFit around a simple idea: make health and fitness
                easier to understand, track and improve.
              </p>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">The idea</p>
              <h3 className="mt-4 text-3xl font-semibold">Health shouldn&apos;t feel complicated.</h3>
              <p className="mt-5 leading-8 text-white/40">
                Know what you eat. Move your body. Build better habits. Watch
                your progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="font-semibold">GrowFit</p>
            <p className="mt-2 text-sm text-white/30">growfit.store</p>
          </div>
          <p className="text-xs text-white/25">© 2026 GrowFit · Satya, Founder &amp; Creator</p>
        </div>
      </footer>
    </main>
  );
}
