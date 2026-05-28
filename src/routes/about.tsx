import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import founderAfter from "@/assets/founder-after.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Duofit.club" },
      {
        name: "description",
        content:
          "DUOFIT was built to help people build healthier lifestyles in a more practical, realistic and sustainable way.",
      },
    ],
  }),
  component: About,
});

const beliefs = [
  {
    front: "BUILT FOR REAL LIFE",
    back: "Health should fit alongside work, stress, family life and busy schedules.",
  },
  {
    front: "MORE THAN WEIGHT LOSS",
    back: "Sleep, movement, eating habits, stress and consistency all affect long-term health.",
  },
  {
    front: "CONSISTENCY OVER EXTREMES",
    back: "Extreme routines rarely last. Small realistic habits create better long-term results.",
  },
  {
    front: "FAMILY & ENVIRONMENT MATTER",
    back: "Health becomes easier when routines and habits improve together at home.",
  },
];

const values = [
  "Healthy living should not feel like punishment.",
  "Consistency matters more than perfection.",
  "Prevention is easier than recovery.",
  "Health should support life, not interrupt it.",
  "Families become healthier when habits improve together.",
];

const forWho = [
  "Busy professionals struggling with unhealthy routines and inconsistency",
  "Parents trying to create healthier lifestyles for their families",
  "Individuals restarting their health journey after previous failures",
  "People looking for realistic fat loss and lifestyle improvement",
  "Families wanting healthier habits together",
];

function BeliefCard({ card }: { card: typeof beliefs[0] }) {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const flipped = clicked || hovered;

  return (
    <div
      role="button"
      tabIndex={0}
      className="h-44 md:h-52 [perspective:1000px] cursor-pointer select-none focus:outline-none"
      onClick={() => setClicked((f) => !f)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && setClicked((f) => !f)
      }
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] border border-border bg-card rounded-sm p-6 flex flex-col justify-between">
          <div className="h-0.5 w-6 bg-primary rounded-full" />
          <h4 className="text-lg font-bold text-foreground">{card.front}</h4>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="md:hidden">Tap to reveal</span>
            <span className="hidden md:inline">Hover or click</span>
          </span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-primary/30 bg-primary/5 rounded-sm p-6 flex items-center justify-center">
          <p className="text-sm md:text-base text-foreground font-medium leading-relaxed text-center">
            {card.back}
          </p>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <SiteLayout>

      {/* ── ORIGIN STORY ── */}
      <section className="container-editorial pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <Reveal>
  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
    — About Duofit
  </span>
</Reveal>
<Reveal delay={60}>
  <div className="h-0.5 w-12 bg-primary mt-6 mb-8" />
</Reveal>
<Reveal delay={80}>
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
    Healthy living should fit real life.
  </h1>
</Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg md:text-xl font-semibold text-foreground leading-relaxed max-w-2xl">
              DUOFIT started from a simple observation.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Most people are not struggling because they don't care about
              health. They struggle because modern life makes consistency
              difficult. Busy schedules, stress, poor routines, outside food,
              screen time and unrealistic expectations slowly affect health over
              time.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              We created DUOFIT to help people build healthier lifestyles in a
              more practical, realistic and sustainable way.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── OUR JOURNEY — staggered ── */}
      <section className="border-t border-border">
        <div className="container-editorial py-16 md:py-24">

          {/* ✅ Section heading — was missing */}
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              — Our journey
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 md:mb-16">
              Why doufit started
            </h2>
          </Reveal>

          <div className="max-w-3xl space-y-10">
            {[
              "Over the years, we saw many people repeatedly start and stop their health journeys. Strict diets, temporary motivation, random online advice and extreme routines often worked only for a short time before real life took over again.",
              "We experienced many of these struggles ourselves while balancing work, routines, family responsibilities and health. Improving our own lifestyle and seeing positive changes within our family made us realise that healthy living does not need to feel extreme or overwhelming.",
              "DUOFIT was built to create a simpler approach — one focused on practical nutrition, movement, healthier routines and long-term consistency instead of short-term pressure.",
            ].map((para, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="grid grid-cols-[28px_1fr] md:grid-cols-[32px_1fr] gap-4 md:gap-5 items-start">
                  <div className="h-0.5 w-6 bg-primary mt-3 shrink-0" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE BELIEFS — 2x2 flip cards ── */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-16 md:py-24">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              — What we believe
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-10 md:mb-14">
              what makes duofit different.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:gap-5 max-w-2xl">
            {beliefs.map((b, i) => (
              <Reveal key={b.front} delay={i * 80}>
                <BeliefCard card={b} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE FOUNDERS ── */}
      <section className="container-editorial py-16 md:py-24">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            — Meet the founders
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-10 md:mb-14">
            The people behind DUOFIT.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image — ✅ src fixed */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-sm aspect-[4/5] bg-muted">
              <img
                // src={founderAfter}
                alt="Nitesh and Nikitha — DUOFIT Founders"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Content */}
          <div className="space-y-6">
            <Reveal delay={150}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                DUOFIT is led by{" "}
                <span className="text-foreground font-semibold">
                  Nitesh and Nikitha
                </span>
                , a couple passionate about helping people improve health
                through practical nutrition, movement and healthier daily
                routines.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Their combined experiences around fitness, family health,
                discipline, consistency and lifestyle management helped shape
                the foundation of DUOFIT and its practical approach to healthy
                living.
              </p>
            </Reveal>

            {/* Individual profiles */}
            <div className="space-y-5 pt-2">
              {[
                {
                  name: "Nitesh",
                  bio: "ICF-accredited coach and pursuing a diploma in Nutrition and Fitness from INFS — bringing together coaching, nutrition and lifestyle guidance into the DUOFIT approach.",
                },
                {
                  name: "Nikitha",
                  bio: "Two-time national bronze medalist whose experience in athletics brings strong values of discipline, consistency and long-term fitness into DUOFIT.",
                },
              ].map((founder, i) => (
                <Reveal key={founder.name} delay={280 + i * 100}>
                  <div className="border-l-2 border-primary pl-5 py-1">
                    <h4 className="font-bold text-foreground mb-1">
                      {founder.name}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES — typography strips ── */}
      <section className="border-t border-border">
        <div className="container-editorial py-10 md:py-14">

          {/* ✅ Section heading — was missing */}
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              — Our values
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold tracking-tight mb-8 md:mb-10">
              What we BELIEVE
            </h2>
          </Reveal>

          {values.map((v, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className={`py-5 md:py-7 border-b border-border flex items-center gap-5 md:gap-6 ${
                  i % 2 === 1
                    ? "bg-cream/40 -mx-6 px-6 md:-mx-10 md:px-10"
                    : ""
                }`}
              >
                <div className="h-0.5 w-8 bg-primary shrink-0" />
                <p className="text-base md:text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                  {v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── WHO IS DUOFIT FOR ── */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-16 md:py-24">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              — Who we help
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Who is DUOFIT for?
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              DUOFIT is designed for people looking for a more practical and
              sustainable approach to health and fitness.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-0">
            {forWho.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 py-4 border-b border-border/60">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="container-editorial py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">

          {/* ✅ Section heading — was missing */}
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              — Our mission
            </span>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-0.5 w-8 bg-primary mx-auto mb-8" />
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We want to help more people move away from extreme health trends
              and build healthier lifestyles that can realistically be sustained
              for years, not just weeks. Our goal is to make practical health
              guidance more approachable for individuals, parents and families
              trying to live healthier in today's world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary/5 border-t border-primary/20">
        <div className="container-editorial py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Start building a healthier lifestyle today.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-foreground active:scale-95 transition-all rounded-sm min-h-[48px]"
            >
              GET STARTED <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

    </SiteLayout>
  );
}