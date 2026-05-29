import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Duofit.club" },
      {
        name: "description",
        content:
          "Practical health coaching designed to help individuals and families improve fitness, nutrition, movement and healthier habits in a sustainable and realistic way.",
      },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    title: "Personal Health Coaching",
    desc: "At DUOFIT, we believe health is interconnected. Factors like fat loss, sleep, stress, energy levels, food habits, movement and lifestyle all influence each other. Instead of focusing on one problem in isolation, we take a more holistic approach to understand the root causes and create practical health strategies that fit your everyday life.",
    points: [
      "Personalised nutrition & food guidance",
      "Fitness, movement & activity planning",
      "Support for fat loss, weight management & healthier body composition",
      "Better sleep, recovery & energy levels",
      "Building healthier routines & consistency",
      "Regular guidance, accountability & progress tracking",
    ],
  },
  {
    title: "Family Health & Habits",
    desc: "A family-focused health coaching program designed to help families improve eating habits, routines, activity levels and healthier living together in a practical and sustainable way.",
    points: [
      "Family nutrition & food guidance",
      "Healthier routines for kids & parents",
      "Reducing junk food & unhealthy habits",
      "Encouraging movement & reducing screen time",
      "Practical healthy habits for everyday family life",
      "Building a healthier home environment together",
    ],
  },
];

const steps = [
  {
    n: "01",
    t: "UNDERSTAND",
    d: "Understanding your lifestyle, routines, challenges, health history and goals through discussions, schedules and daily habits.",
  },
  {
    n: "02",
    t: "PLAN",
    d: "Creating practical nutrition, movement and lifestyle strategies based on your goals, routines and root causes.",
  },
  {
    n: "03",
    t: "GUIDE",
    d: "Regular support, accountability and practical guidance to help you stay consistent and sustainable.",
  },
  {
    n: "04",
    t: "TRACK",
    d: "Monitoring progress, routines and overall lifestyle improvements over time.",
  },
  {
    n: "05",
    t: "SUSTAIN",
    d: "Helping healthier habits become part of your long-term lifestyle naturally.",
  },
];

function Programs() {
  return (
    <SiteLayout>
      {/* Intro */}
      <section className="container-editorial pt-12 md:pt-20 lg:pt-24 pb-12 md:pb-16">
        <div className="max-w-4xl">

          <Reveal delay={120}>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95]">
              Health Coaching
              <br />
              Built For{" "}
              <span className="text-primary">Real Life.</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Practical health coaching designed to help individuals and
              families improve fitness, nutrition, movement and healthier
              habits in a sustainable and realistic way.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Program Cards */}
      <section className="container-editorial pb-20 md:pb-28 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-border/60
                  bg-card
                  p-7 md:p-10
                  flex flex-col
                  justify-between
                  min-h-[680px]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                "
              >
                {/* subtle glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent" />

                <div className="relative z-10">
                  {/* label */}
                  <div className="mb-6">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold">
                      DUOFIT PROGRAM
                    </span>
                  </div>

                  {/* title */}
                  <h3 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] leading-[1.05] mb-5 max-w-md">
                    {p.title}
                  </h3>

                  {/* desc */}
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                    {p.desc}
                  </p>

                  {/* divider */}
                  <div className="h-px bg-border mb-8" />

                  {/* points */}
                  <ul className="space-y-4">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-4 text-sm md:text-base text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="relative z-10 pt-10">
                  <Link
                    to="/contact"
                    className="
                      inline-flex
                      items-center
                      gap-3
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-foreground
                      transition-all
                      hover:gap-4
                    "
                  >
                    Start Your Journey
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-16 md:py-24 lg:py-32">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] mb-3">
              How Duofit Works
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-base md:text-lg text-muted-foreground mb-14 md:mb-20 max-w-2xl leading-relaxed">
              A simple and practical approach designed to help people build
              healthier routines step by step.
            </p>
          </Reveal>

          {/* Mobile */}
          <div className="flex flex-col gap-0 md:hidden">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="flex gap-5 pb-8 relative">
                  {i < steps.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-px bg-border" />
                  )}

                  <div className="shrink-0 h-10 w-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-primary">
                      {s.n}
                    </span>
                  </div>

                  <div className="pb-4">
                    <h4 className="text-lg font-bold mb-1">{s.t}</h4>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-5 gap-8 relative">
            <div className="absolute top-5 left-[10%] right-[10%] h-px bg-border" />

            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div>
                  <div className="relative z-10 h-10 w-10 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-5">
                    <span className="text-xs font-bold text-primary">
                      {s.n}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold mb-3">{s.t}</h4>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-20 md:py-28 lg:py-36 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] leading-[1.05] mb-6 max-w-4xl mx-auto">
            Start building a healthier lifestyle today.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Sustainable routines, practical nutrition and healthier habits
            designed around real everyday life.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              bg-foreground
              text-background
              px-8
              py-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              rounded-full
              hover:bg-primary
              hover:text-foreground
              transition-all
              duration-300
              active:scale-95
            "
          >
            Start Your Journey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}