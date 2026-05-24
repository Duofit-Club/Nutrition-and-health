import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Duofit.club" },
      { name: "description", content: "Coaching programs built for real life — nutrition, fitness, habits and family health." },
    ],
  }),
  component: Programs,
});

const programs = [
  { title: "DUOFIT Transformation", desc: "Comprehensive body recomposition tracking for high-performance individuals.", points: ["Biometric body tracking metrics", "Precision macronutrient coaching", "High-yield fitness protocols", "Daily personal accountability loops"] },
  { title: "DUOFIT Lifestyle", desc: "Deliberate structural engineering of daily performance habits and routines.", points: ["Stress response modulation", "Circadian and sleep design", "Micro-habit building methods", "Long-term identity integration"] },
  { title: "DUOFIT Family Health", desc: "Shared lifestyle architecture to implement health across the household.", points: ["Unified dietary layout mapping", "Shared healthy routine structures", "Parent wellness maintenance", "Frictionless kitchen organisation"] },
  { title: "DUOFIT Active Kids", desc: "Fun, natural health exploration focused on building confidence in kids.", points: ["Natural movement mechanics", "Intuitive wellness foundations", "Device-free activity tracking", "Confidence building blocks"] },
];

const steps = [
  { n: "01", t: "Assess", d: "Complete multi-point analysis of your biomarkers, daily behaviour and household schedule." },
  { n: "02", t: "Plan", d: "Develop bespoke parameters that fit seamlessly into your weekly calendar." },
  { n: "03", t: "Coach", d: "Collaborative optimisation calls to adjust strategies to real-world friction." },
  { n: "04", t: "Track", d: "Monitor clear data trends to confirm body composition shifts." },
  { n: "05", t: "Sustain", d: "Transition tracking into long-term, subconscious lifestyle automation." },
];

function Programs() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-12 md:pt-20 lg:pt-24 pb-10 md:pb-16">
        <div className="max-w-3xl">
          <Reveal><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Programs</span></Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Architectures of<br /><span className="text-primary">consistency.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Clear blueprints engineered to build functional accountability, structural habit evolution, and biometric stability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Program Cards */}
      <section className="container-editorial pb-16 md:pb-24 lg:pb-32">
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="border border-border bg-card rounded-sm p-6 md:p-10 flex flex-col justify-between min-h-[360px] md:min-h-[400px] hover:-translate-y-1 hover:border-primary/50 transition-all duration-500">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">{p.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                  <ul className="space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-primary font-bold mt-0.5 shrink-0">—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact"
                  className="mt-7 inline-flex items-center justify-center gap-2 border border-border px-5 py-3.5 text-sm font-medium uppercase tracking-widest hover:bg-foreground hover:text-background hover:border-foreground transition-colors rounded-sm min-h-[48px]">
                  Request Blueprint <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-14 md:py-24 lg:py-32">
          <Reveal>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">The Operational Roadmap</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base text-muted-foreground mb-12 md:mb-16 max-w-xl">The structured sequence that drives sustainable behavioural results.</p>
          </Reveal>

          {/* Mobile: vertical stack */}
          <div className="flex flex-col gap-0 md:hidden">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="flex gap-5 pb-8 relative">
                  {/* vertical line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-px bg-border" />
                  )}
                  <div className="shrink-0 h-10 w-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-primary">{s.n}</span>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-lg font-bold mb-2">{s.t}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Desktop: horizontal */}
          <div className="hidden md:grid md:grid-cols-5 gap-6 relative">
            <div className="absolute top-5 left-[10%] right-[10%] h-px bg-border" />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div>
                  <div className="relative z-10 h-10 w-10 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-5">
                    <span className="text-xs font-bold text-primary">{s.n}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{s.t}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-16 md:py-24 lg:py-32 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Start building healthier routines today.</h2>
        </Reveal>
        <Reveal delay={120}>
          <Link to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-7 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors rounded-sm min-h-[48px]">
            Start Your Journey <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}