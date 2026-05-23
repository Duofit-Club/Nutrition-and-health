import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Duofit.club" },
      { name: "description", content: "Architectures of consistency — coaching programs built for real life." },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    title: "DUOFIT Transformation",
    desc: "Comprehensive body recomposition tracking for high-performance individuals.",
    points: ["Biometric body tracking metrics", "Precision macronutrient coaching", "High-yield fitness protocols", "Daily personal accountability loops"],
  },
  {
    title: "DUOFIT Lifestyle",
    desc: "Deliberate structural engineering of daily performance habits and routines.",
    points: ["Stress response modulation", "Circadian and sleep design", "Micro-habit building methods", "Long-term identity integration"],
  },
  {
    title: "DUOFIT Family Health",
    desc: "Shared lifestyle architecture to implement health across the household.",
    points: ["Unified dietary layout mapping", "Shared healthy routine structures", "Parent wellness maintenance", "Frictionless kitchen organisation"],
  },
  {
    title: "DUOFIT Active Kids",
    desc: "Fun, natural health exploration focused on building confidence in kids.",
    points: ["Natural movement mechanics", "Intuitive wellness foundations", "Device-free activity tracking", "Confidence building blocks"],
  },
];

const steps = [
  { n: "01", t: "Assess", d: "Complete multi-point biomarker, daily behaviour, and household schedule analysis." },
  { n: "02", t: "Plan", d: "Develop bespoke parameters that fit seamlessly into your weekly calendar." },
  { n: "03", t: "Coach", d: "Engage in collaborative optimisation calls to adjust strategies to real-world friction." },
  { n: "04", t: "Track", d: "Monitor clear data trends to confirm body composition shifts without obsession." },
  { n: "05", t: "Sustain", d: "Transition tracking mechanisms into long-term, subconscious lifestyle automation." },
];

function Programs() {
  return (
    <SiteLayout>

      {/* Intro */}
      <section className="container-editorial pt-16 md:pt-24 pb-16">
        <div className="max-w-3xl">
          <Reveal><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Programs</span></Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Architectures of<br /><span className="text-primary">consistency.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Commercially clear blueprints engineered to build functional accountability, structural habit evolution, and biometric stability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Program Cards */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="border border-border bg-card rounded-sm p-10 flex flex-col justify-between min-h-[400px] hover:-translate-y-2 hover:border-primary/50 transition-all duration-500">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <ul className="space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-primary font-bold mt-0.5">—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact"
                  className="mt-8 inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium uppercase tracking-widest hover:bg-foreground hover:text-background hover:border-foreground transition-colors rounded-sm">
                  Request Blueprint <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-24 md:py-32">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">The Operational Roadmap</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-muted-foreground text-lg mb-16 max-w-xl">The structured sequence that drives sustainable behavioural results.</p>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Connecting line — desktop only */}
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-border hidden md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative z-10 h-12 w-12 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{s.n}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{s.t}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-24 md:py-32 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Start building healthier routines today.</h2>
        </Reveal>
        <Reveal delay={120}>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors rounded-sm">
            Start Your Journey <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

    </SiteLayout>
  );
}