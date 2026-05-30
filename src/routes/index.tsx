import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-lifestyle.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DUOFIT — Sustainable Health & Lifestyle Coaching" },
      { name: "description", content: "Helping people stay healthy through practical Nutrition, Movement and Healthy Habits that fit everyday life." },
    ],
  }),
  component: Home,
});

const highlights = [
  { t: "Nutrition", d: "Simple food choices that work with your routine and availability.", corner: "tl" },
  { t: "Fitness & Movement", d: "Helping your body move consistently instead of extreme routines.", corner: "tr" },
  { t: "Healthy Habits", d: "Small sustainable changes that become easier to maintain.", corner: "bl" },
  { t: "Family Health", d: "Helping families build healthier routines together.", corner: "br" },
];

function VennDiagram() {
  const [active, setActive] = useState<number | null>(null);

  const items = [
    {
      t: "Nutrition",
      d: "Simple food choices that work with your routine and availability.",
      pos: "top-0 left-0",
      base: "bg-emerald-100/70 border-emerald-400/50",
      on:   "bg-emerald-200/90 border-emerald-500",
      text: "text-emerald-900",
    },
    {
      t: "Fitness & Movement",
      d: "Helping your body move consistently instead of extreme routines.",
      pos: "top-0 right-0",
      base: "bg-orange-100/70 border-orange-400/50",
      on:   "bg-orange-200/90 border-orange-500",
      text: "text-orange-900",
    },
    {
      t: "Healthy Habits",
      d: "Small sustainable changes that become easier to maintain.",
      pos: "bottom-0 left-0",
      base: "bg-sky-100/70 border-sky-400/50",
      on:   "bg-sky-200/90 border-sky-500",
      text: "text-sky-900",
    },
    {
      t: "Family Health",
      d: "Helping families build healthier routines together.",
      pos: "bottom-0 right-0",
      base: "bg-violet-100/70 border-violet-400/50",
      on:   "bg-violet-200/90 border-violet-500",
      text: "text-violet-900",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">

      {/* Venn diagram */}
      <div className="relative w-full max-w-[340px] md:max-w-[420px] aspect-square select-none">

        {items.map((item, i) => {
          const isActive = active === i;
          return (
            <div
              key={item.t}
              className={`
                absolute w-[63%] h-[63%] rounded-full border-2 cursor-pointer
                flex items-center justify-center
                transition-all duration-300
                ${item.pos}
                ${isActive ? item.on : item.base}
                ${isActive ? "z-10 scale-[1.05]" : "z-0"}
              `}
              onClick={() => setActive(active === i ? null : i)}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <p
  className={`
    absolute font-bold text-[11px] md:text-xs uppercase tracking-wide
    text-center leading-tight
    transition-opacity duration-300
    ${item.text}
    ${isActive ? "opacity-100" : "opacity-75"}
  `}
  style={{
    top:
      i === 0 ? "28%" :
      i === 1 ? "28%" :
      i === 2 ? "68%" :
      "68%",
    left:
      i === 0 ? "42%" :
      i === 1 ? "58%" :
      i === 2 ? "42%" :
      "58%",
    transform: "translate(-50%, -50%)",
    width: i === 1 ? "140px" : "120px",
  }}
>
  {item.t}
</p>
            </div>
          );
        })}

        {/* Centre — intersection goal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <div className={`
            rounded-full border-2 flex flex-col items-center justify-center
            w-[70px] h-[70px] md:w-[84px] md:h-[84px]
            bg-background transition-all duration-300
            ${active !== null ? "border-foreground/40 shadow-lg" : "border-border"}
          `}>
            <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5 text-center">
  Health
</p>
          </div>
        </div>

      </div>

      {/* Info panel */}
      <div className="mt-5 w-full max-w-[340px] md:max-w-[420px] min-h-[64px]">
        {active !== null ? (
          <div className={`rounded-sm p-4 text-center border transition-all duration-200
            ${[
              "bg-emerald-50 border-emerald-200",
              "bg-orange-50 border-orange-200",
              "bg-sky-50 border-sky-200",
              "bg-violet-50 border-violet-200",
            ][active]}
          `}>
            <p className={`text-[10px] font-bold uppercase tracking-widest mb-1
              ${items[active].text}
            `}>
              {items[active].t}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {items[active].d}
            </p>
          </div>
        ) : (
          <p className="text-center text-xs text-muted-foreground/50 italic">
            <span className="md:hidden">Tap</span>
            <span className="hidden md:inline">Hover</span>
            {" "}each circle to explore
          </p>
        )}
      </div>

    </div>
  );
}

function Home() {
  return (
    <SiteLayout>

      {/* HERO */}
      <section className="container-editorial pt-4 md:pt-8 lg:pt-12 pb-12 md:pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[0.08em] uppercase">
                <span className="block text-primary">Built</span>
                <span className="block mt-2 text-primary">Around</span>
                <span className="block mt-2 text-foreground">Your Life</span>
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-foreground active:scale-95 transition-all rounded-sm min-h-[48px]"
                >
                  Start Your Journey <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-2xl text-base md:text-lg leading-[1.9] text-muted-foreground">
                Helping people stay healthy through practical<br />
                <span className="text-foreground font-medium"> Nutrition</span>,
                <span className="text-foreground font-medium"> Movement</span> and
                <span className="text-foreground font-medium"> Healthy Habits</span>.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-sm aspect-[4/3] md:aspect-[4/5] bg-muted">
              <img
                src={heroImg}
                alt="Real people, real results"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* REALITY TEASER */}
      <section className="bg-foreground text-background py-20 md:py-32 lg:py-40 text-center">
        <div className="container-editorial">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light max-w-2xl mx-auto leading-relaxed text-background/90">
              Do you want to know why most health journeys fail?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-background/60 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
              Health becomes difficult when it is built around shortcuts, extreme routines and temporary motivation.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/reality"
              className="mt-10 inline-flex items-center gap-2 text-primary font-medium uppercase tracking-widest text-sm py-2 hover:gap-4 active:opacity-70 transition-all min-h-[44px]"
            >
              Explore Reality Check <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY DUOFIT */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-14 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Reveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  Health should work with your life, not against it.
                </h2>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  Duofit focuses on helping people build healthier habits that are realistic and sustainable. Most people struggle not because of information or motivation — their routines don't fit their schedules, responsibilities and lifestyle.
                </p>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <VennDiagram />
            </Reveal>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}