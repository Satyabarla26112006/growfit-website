"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const nutrients = [
  { key: "protein", title: "Protein", subtitle: "Build & repair", text: "Amino acids support muscle and tissue maintenance, enzymes, hormones and immune function.", color: "violet" },
  { key: "carbs", title: "Carbohydrates", subtitle: "Fuel movement", text: "An important source of energy, especially for the brain and physical activity.", color: "mint" },
  { key: "fats", title: "Fats", subtitle: "Support function", text: "Provide energy, support cell membranes and help the body absorb vitamins A, D, E and K.", color: "lime" },
];

const vitaminsFat = [
  ["A", "Vitamin A", "Vision", "Supports normal vision, immune function and cell development."],
  ["D", "Vitamin D", "Bones", "Helps calcium absorption and supports bones, muscles and immune function."],
  ["E", "Vitamin E", "Protection", "Supports antioxidant protection and immune function."],
  ["K", "Vitamin K", "Clotting", "Supports normal blood clotting and bone-related functions."],
];

const vitaminsWater = [
  ["B1", "Thiamine", "Energy", "Energy metabolism and normal nerve and cell function."],
  ["B2", "Riboflavin", "Metabolism", "Energy metabolism, growth and cellular function."],
  ["B3", "Niacin", "Cell function", "Energy metabolism and normal cell function."],
  ["B5", "Pantothenic", "Energy", "Helps use food for energy and supports fat metabolism."],
  ["B6", "Pyridoxine", "Amino acids", "Amino-acid metabolism, hemoglobin formation and immune function."],
  ["B7", "Biotin", "Metabolism", "Helps enzymes involved in fat, carbohydrate and protein metabolism."],
  ["B9", "Folate", "Cell division", "DNA synthesis, cell division and red blood cell formation."],
  ["B12", "Cobalamin", "Nerves + blood", "Red blood cell formation, DNA synthesis and neurological function."],
  ["C", "Vitamin C", "Collagen", "Collagen formation, wound healing and non-heme iron absorption."],
];

const minerals = [
  ["Fe", "Iron"], ["Ca", "Calcium"], ["Mg", "Magnesium"], ["K", "Potassium"],
  ["Zn", "Zinc"], ["I", "Iodine"], ["Na", "Sodium"], ["P", "Phosphorus"],
  ["Se", "Selenium"], ["Cu", "Copper"], ["Mn", "Manganese"], ["Cl", "Chloride"],
  ["S", "Sulfur"], ["Mo", "Molybdenum"], ["Cr", "Chromium"],
];

const appScreens = [
  { src: "/app/home-main.jpeg", label: "HOME", title: "Your whole day.", text: "Calories, macros, meals, activity, goals and health context." },
  { src: "/app/food.jpeg", label: "FOOD", title: "Every meal has context.", text: "Search food, organise meals and understand what you eat." },
  { src: "/app/progress-overview.jpeg", label: "PROGRESS", title: "Make progress visible.", text: "Track weight, goals, nutrition and consistency over time." },
  { src: "/app/nutrition-insights.jpeg", label: "INSIGHTS", title: "Go beyond one number.", text: "See nutrition patterns, macro breakdown and general guidance." },
  { src: "/app/workouts.jpeg", label: "WORKOUTS", title: "Train with purpose.", text: "Structured plans for gym and home training." },
  { src: "/app/profile-goal.jpeg", label: "PROFILE", title: "Make it personal.", text: "Keep your goals, activity level and daily targets connected." },
];

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`nxp-phone ${className}`}>
      <div className="nxp-phone-side" />
      <div className="nxp-phone-notch" />
      <div className="nxp-phone-screen">
        <Image src={src} alt={alt} fill sizes="340px" className="object-cover object-top" />
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="nxp-label">{children}</div>;
}

function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.1}px,${y * 0.1}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return <a ref={ref} href={href} className="nxp-magnetic" onMouseMove={move} onMouseLeave={reset}>{children}</a>;
}

export default function Home() {
  const [activeNutrient, setActiveNutrient] = useState(0);
  const [activeScreen, setActiveScreen] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const progressRef = useRef(0);

  useEffect(() => {
    const move = (e: PointerEvent) => setCursor({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5,
    });
    const scroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progressRef.current));
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const stageStyle = useMemo(() => ({
    transform: `rotateY(${cursor.x * 7}deg) rotateX(${-cursor.y * 5}deg)`,
  }), [cursor]);

  const nutrient = nutrients[activeNutrient];
  const screen = appScreens[activeScreen];

  return (
    <main className="nxp-site">
      <div className="nxp-progress"><span /></div>
      <div className="nxp-grain" />

      <header className="nxp-nav">
        <div className="nxp-nav-inner">
          <a href="#" className="nxp-brand">
            <span className="nxp-mark">G</span>
            <span><b>GrowFit</b><small>HEALTH · FITNESS · PROGRESS</small></span>
          </a>
          <nav className="nxp-nav-links">
            <a href="#product">Product</a>
            <a href="#nutrition">Nutrition</a>
            <a href="#vitamins">Vitamins</a>
            <a href="#minerals">Minerals</a>
            <a href="#india">India</a>
          </nav>
          <MagneticButton href="#download">Get GrowFit <span>↗</span></MagneticButton>
        </div>
      </header>

      <section className="nxp-hero">
        <div className="nxp-wrap nxp-hero-grid">
          <div className="nxp-hero-copy">
            <div className="nxp-live"><i /> THE HEALTH APP FOR REAL LIFE</div>
            <h1>Know your body.<br /><span>Grow into it.</span></h1>
            <p>Nutrition, movement and progress in one intelligent experience — designed around the person, not the number.</p>
            <div className="nxp-actions">
              <MagneticButton href="#product">Explore the product <span>→</span></MagneticButton>
              <a href="#nutrition" className="nxp-text-link">Why nutrition matters <span>↓</span></a>
            </div>
            <div className="nxp-meta">
              <div><b>01</b><span>LEARN</span></div>
              <div><b>02</b><span>TRACK</span></div>
              <div><b>03</b><span>GROW</span></div>
            </div>
          </div>

          <div className="nxp-hero-stage">
            <div className="nxp-grid" />
            <div className="nxp-stage-glow" />
            <div className="nxp-orbit orbit-a" />
            <div className="nxp-orbit orbit-b" />
            <div className="nxp-device-rig" style={stageStyle}>
              <Phone src="/app/food.jpeg" alt="GrowFit food screen" className="nxp-small left" />
              <Phone src="/app/home-main.jpeg" alt="GrowFit home screen" className="nxp-main" />
              <Phone src="/app/workouts.jpeg" alt="GrowFit workout screen" className="nxp-small right" />
            </div>
            <div className="nxp-stat top"><span>DAILY ENERGY</span><strong>2,214 <em>kcal</em></strong><small>Personal target</small></div>
            <div className="nxp-stat bottom"><span>GOAL PROGRESS</span><strong>+0.5 kg</strong><small>This week</small></div>
          </div>
        </div>
      </section>

      <section className="nxp-ticker">
        <div className="nxp-wrap nxp-ticker-track">
          <span>Nutrition</span><i>✦</i><span>Movement</span><i>✦</i><span>Goals</span><i>✦</i><span>Consistency</span><i>✦</i><span>Progress</span><i>✦</i>
          <span>Nutrition</span><i>✦</i><span>Movement</span><i>✦</i><span>Goals</span><i>✦</i><span>Consistency</span><i>✦</i>
        </div>
      </section>

      <section id="product" className="nxp-section nxp-product">
        <div className="nxp-wrap">
          <div className="nxp-topline"><Label>THE PRODUCT</Label><span>INTERACTIVE APP TOUR</span></div>
          <div className="nxp-heading">
            <h2>Not a concept.<br /><span>A living product.</span></h2>
            <p>Tap through the real GrowFit screens. The website becomes a product demo instead of a static gallery.</p>
          </div>

          <div className="nxp-tour">
            <div className="nxp-tour-copy">
              <div className="nxp-tour-number">0{activeScreen + 1}</div>
              <div className="nxp-tour-label">{screen.label}</div>
              <h3>{screen.title}</h3>
              <p>{screen.text}</p>
              <div className="nxp-tour-controls">
                {appScreens.map((item, index) => (
                  <button key={item.label} type="button" onClick={() => setActiveScreen(index)} className={index === activeScreen ? "active" : ""}>
                    <small>0{index + 1}</small>{item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="nxp-tour-stage">
              <div className="nxp-tour-glow" />
              <Phone src={screen.src} alt={`GrowFit ${screen.label}`} className="nxp-tour-phone" />
              <div className="nxp-chip chip-a">REAL UI</div>
              <div className="nxp-chip chip-b">GROWFIT</div>
            </div>
          </div>
        </div>
      </section>

      <section id="nutrition" className="nxp-section nxp-nutrition">
        <div className="nxp-wrap">
          <div className="nxp-heading nxp-heading-dark">
            <div><Label>NUTRITION 101</Label><h2>Calories are only<br /><span>the beginning.</span></h2></div>
            <p>Your body needs energy and nutrients for normal function, movement, recovery, growth and repair.</p>
          </div>

          <div className="nxp-lab">
            <div className="nxp-lab-wheel">
              <div className="nxp-lab-ring" />
              <div className={`nxp-lab-orbit ${nutrient.color}`} />
              <div className="nxp-lab-core">
                <small>WHAT YOU EAT</small>
                <strong>{nutrient.title}</strong>
                <span>{nutrient.subtitle}</span>
              </div>
              <div className="nxp-wheel-node one" />
              <div className="nxp-wheel-node two" />
              <div className="nxp-wheel-node three" />
            </div>
            <div className="nxp-lab-info">
              <span className="nxp-lab-index">0{activeNutrient + 1}</span>
              <h3>{nutrient.title}</h3>
              <p>{nutrient.text}</p>
              <div className="nxp-nutrient-tabs">
                {nutrients.map((item, index) => (
                  <button key={item.key} type="button" onClick={() => setActiveNutrient(index)} className={index === activeNutrient ? "active" : ""}>
                    <span>{item.title}</span><small>{item.subtitle}</small>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vitamins" className="nxp-section nxp-vitamins">
        <div className="nxp-wrap">
          <div className="nxp-heading">
            <div><Label>MICRONUTRIENTS</Label><h2>13 vitamins.<br /><span>One beautiful system.</span></h2></div>
            <p>Instead of a white wall of cards, vitamins are grouped by type and presented as a clean visual knowledge map.</p>
          </div>

          <div className="nxp-vitamin-hero">
            <div className="nxp-vitamin-core">
              <span>VITAMINS</span>
              <strong>13</strong>
              <small>essential vitamins</small>
            </div>
            <div className="nxp-vitamin-path path-a" />
            <div className="nxp-vitamin-path path-b" />
            <div className="nxp-v-floating fat">
              <b>A · D · E · K</b><span>FAT-SOLUBLE</span><small>Stored more readily by the body</small>
            </div>
            <div className="nxp-v-floating water">
              <b>B1 → B12 · C</b><span>WATER-SOLUBLE</span><small>Regular dietary intake matters</small>
            </div>
          </div>

          <div className="nxp-vitamin-group">
            <div className="nxp-group-title"><div><span>FAT-SOLUBLE</span><h3>A · D · E · K</h3></div><p>Stored more readily by the body.</p></div>
            <div className="nxp-v-cards fat-cards">
              {vitaminsFat.map(([code, name, role, text], i) => (
                <article key={code} className={`v-card v${i + 1}`}><div className="v-card-top"><b>{code}</b><span>{role}</span></div><h4>{name}</h4><p>{text}</p></article>
              ))}
            </div>
          </div>

          <div className="nxp-vitamin-group">
            <div className="nxp-group-title"><div><span>WATER-SOLUBLE</span><h3>B VITAMINS · C</h3></div><p>Regular dietary intake matters; B12 can be stored longer.</p></div>
            <div className="nxp-v-cards water-cards">
              {vitaminsWater.map(([code, name, role, text], i) => (
                <article key={code} className={`v-card v${i + 1}`}><div className="v-card-top"><b>{code}</b><span>{role}</span></div><h4>{name}</h4><p>{text}</p></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="minerals" className="nxp-section nxp-minerals">
        <div className="nxp-wrap">
          <div className="nxp-heading nxp-heading-dark">
            <div><Label>ESSENTIAL MINERALS</Label><h2>Small amounts.<br /><span>Major responsibilities.</span></h2></div>
            <p>From oxygen transport to nerve function, minerals keep essential systems working.</p>
          </div>

          <div className="nxp-mineral-visual">
            <div className="nxp-mineral-center"><span>MINERALS</span><strong>15</strong><small>core nutrients</small></div>
            {minerals.map(([code, name], i) => (
              <div key={`${code}-${i}`} className={`nxp-mineral-node mn${i + 1}`}><b>{code}</b><span>{name}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="india" className="nxp-section nxp-india">
        <div className="nxp-wrap nxp-india-grid">
          <div>
            <Label>INDIA · NUTRITION</Label>
            <h2>One country.<br /><span>Many nutrition challenges.</span></h2>
            <p>India faces multiple nutrition challenges at the same time: undernutrition, micronutrient deficiencies, overweight and obesity, and diet-related chronic disease.</p>
            <div className="nxp-india-note"><b>Malnutrition is bigger than being underweight.</b><span>It can include deficiencies, excesses and imbalances in energy and nutrient intake.</span></div>
          </div>
          <div className="nxp-india-stats">
            <article><strong>67.1%</strong><span>Children 6–59 months with anemia</span><small>NFHS-5 · 2019–21</small></article>
            <article><strong>57.2%</strong><span>Women 15–49 with anemia</span><small>NFHS-5 · 2019–21</small></article>
            <article><strong>35.5%</strong><span>Children under 5 stunted</span><small>NFHS-5 · 2019–21</small></article>
            <article><strong>19.3%</strong><span>Children under 5 wasted</span><small>NFHS-5 · 2019–21</small></article>
          </div>
        </div>
      </section>

      <section className="nxp-section nxp-insights">
        <div className="nxp-wrap nxp-insights-grid">
          <div>
            <Label>MORE OF GROWFIT</Label>
            <h2>Health becomes more useful when the pieces connect.</h2>
            <p>Food, training, health context, goals and progress are easier to understand when they live in one system.</p>
          </div>
          <div className="nxp-insight-phones">
            <Phone src="/app/nutrition-insights.jpeg" alt="GrowFit nutrition insights" />
            <Phone src="/app/profile-goal.jpeg" alt="GrowFit profile goals" className="raised" />
          </div>
        </div>
      </section>

      <section id="download" className="nxp-download">
        <div className="nxp-download-box">
          <div className="download-mesh" />
          <div className="download-glow" />
          <Label>COMING SOON</Label>
          <h2>Ready to<br /><span>grow?</span></h2>
          <p>Nutrition · Fitness · Progress</p>
          <MagneticButton href="#">Android launch coming soon <span>↗</span></MagneticButton>
          <small>iOS planned · growfit.store</small>
        </div>
      </section>

      <footer className="nxp-footer">
        <div className="nxp-wrap nxp-footer-grid">
          <div><a href="#" className="nxp-brand"><span className="nxp-mark">G</span><span><b>GrowFit</b><small>YOUR HEALTH · YOUR PROGRESS</small></span></a><p>Built to make health simpler.</p></div>
          <div><span>FOUNDER</span><strong>Satya</strong><small>Founder &amp; Creator of GrowFit</small></div>
          <div className="nxp-footer-right"><span>growfit.store</span><small>© 2026 GrowFit</small></div>
        </div>
      </footer>
    </main>
  );
}
