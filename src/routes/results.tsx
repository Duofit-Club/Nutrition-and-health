import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Duofit.club" },
      { name: "description", content: "Real stories. Sustainable results. Proof built over months and years." },
    ],
  }),
  component: Results,
});

const testimonials = [
  { quote: "The single greatest shift was removing intense gym pressure. DUOFIT built my fitness structure straight around my business travel schedule.", name: "Sarah L.", role: "Operations VP" },
  { quote: "The kids' movement strategies fit perfectly. My children now actively join in on outdoor weekend routines without argument.", name: "Marc T.", role: "Software Architect" },
  { quote: "I stopped chasing motivation. The routine carries me now. Eight months in and I've never felt more consistent.", name: "Aanya K.", role: "Marketing Director" },
];

function Results() {
  return (
    <SiteLayout>

      {/* Hero */}
      <section className="container-editorial pt-16 md:pt-24 pb-16">
        <div className="max-w-3xl">
          <Reveal><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Results</span></Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Real Stories.<br /><span className="text-primary">Sustainable Results.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Proof built over months and years — not weeks. Verifiable transformations from active professionals and families.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="container-editorial pb-24 md:pb-32 space-y-20">

        {[
          { name: "David K.", role: "Executive & Father", quote: "DUOFIT helped me balance high business demands with family needs. I dropped body fat while increasing overall energy for my kids.", metrics: [{ v: "-9 kg", l: "Total Mass Change" }, { v: "9+ Months", l: "Sustained Habit Timeline" }, { v: "5.3%", l: "Body Fat Reduction" }, { v: "+6 kg", l: "Lean Mass Gained" }] },
          { name: "The Sharma Family", role: "Family Coaching", quote: "Instead of following isolated lifestyle paths, we optimised our kitchen structure together. Our family meals became simple, balanced, and stress-free.", metrics: [{ v: "100%", l: "Household Alignment" }, { v: "Zero", l: "Isolated Tracking" }, { v: "6 mo.", l: "To Full Habit Stack" }, { v: "3", l: "Family Members Coached" }] },
        ].map((story, i) => (
          <Reveal key={story.name} delay={i * 100}>
            <div className="grid lg:grid-cols-3 gap-10 items-center border border-border rounded-sm p-10 md:p-14 bg-card">
              {/* Before / After placeholder */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-muted rounded-sm flex items-center justify-center">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Before</span>
                </div>
                <div className="aspect-[3/4] bg-primary/10 rounded-sm flex items-center justify-center">
                  <span className="text-xs uppercase tracking-widest text-primary">After</span>
                </div>
              </div>
              {/* Story */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold tracking-tight mb-1">{story.name}</h3>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{story.role}</span>
                <p className="mt-5 text-muted-foreground leading-relaxed italic text-lg">"{story.quote}"</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  {story.metrics.map((m) => (
                    <div key={m.l}>
                      <span className="text-2xl font-bold text-primary block">{m.v}</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">{m.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Testimonials */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-24 md:py-32">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Client Experiences</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="bg-background border border-border rounded-sm p-8 h-full flex flex-col justify-between">
                  <p className="text-muted-foreground leading-relaxed italic">"{t.quote}"</p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{t.name[0]}</span>
                    </div>
                    <div>
                      <span className="block font-semibold text-sm">{t.name}</span>
                      <span className="text-xs text-muted-foreground">{t.role}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-24 md:py-32 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to start your own transformation?</h2>
        </Reveal>
        <Reveal delay={120}>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors rounded-sm">
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

    </SiteLayout>
  );
}