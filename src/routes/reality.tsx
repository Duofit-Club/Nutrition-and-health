import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/reality")({
  head: () => ({
    meta: [
      { title: "Reality Check — Duofit.club" },
      { name: "description", content: "Why most health journeys fail — and how DUOFIT is different." },
    ],
  }),
  component: Reality,
});

const cards = [
  { front: "Extreme Diets", backTitle: "The Biological Backlash", backDesc: "Hyper-restrictive food tracking triggers systemic stress, ultimately fracturing lifestyle continuity. We install automated choices over absolute restriction." },
  { front: "Inconsistency", backTitle: "The All-Or-Nothing Trap", backDesc: "Waiting for the perfect routine stops progress. The solution lies in building reliable minimal behaviours that survive chaotic workweeks." },
  { front: "Busy Lifestyles", backTitle: "Time Misallocation", backDesc: "Thinking fitness demands two daily hours is false. Our design provides maximal metabolic yields inside targeted, modular time blocks." },
  { front: "Lack of Guidance", backTitle: "Information Fatigue", backDesc: "Conflicting generic advice causes friction. Sustainable execution demands custom plans tailored to your unique lifestyle baseline." },
  { front: "Family Health Neglect", backTitle: "Isolating Routines", backDesc: "Forcing separate meals from your family builds friction. We integrate healthy decisions straight into shared family tables." },
  { front: "Quick Fix Mentality", backTitle: "The Reset Delusion", backDesc: "Aggressive multi-week challenges burn out quickly. Sustainable identity shift replaces desperate, temporary sprints." },
];

function Reality() {
  return (
    <SiteLayout>
      <div className="bg-foreground text-background min-h-screen">

        {/* Hero */}
        <section className="container-editorial pt-24 pb-16 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Reality Check</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-background">
              Why most health<br />journeys fail.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 text-lg text-background/60 max-w-xl mx-auto leading-relaxed">
              True transformation requires leaving standard optimization myths behind. Hover the core lifestyle paradoxes below.
            </p>
          </Reveal>
        </section>

        {/* Flip Cards */}
        <section className="container-editorial pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group h-72 [perspective:1000px] cursor-pointer">
                  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* Front */}
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-white/5 border border-white/10 rounded-sm p-10 flex flex-col justify-between">
                      <h3 className="text-2xl font-bold text-background">{card.front}</h3>
                      <span className="text-xs font-medium uppercase tracking-widest text-primary">Hover to reveal →</span>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-primary rounded-sm p-10 flex flex-col justify-center">
                      <h4 className="text-lg font-bold text-foreground mb-3">{card.backTitle}</h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">{card.backDesc}</p>
                    </div>

                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="border-t border-white/10">
          <div className="container-editorial py-24 text-center max-w-3xl mx-auto">
            <Reveal>
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-background/80 italic">
                "Healthy routines shouldn't be an auxiliary stress factor. If your health design doesn't easily survive a high-stress month, the design itself is broken."
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="container-editorial pb-32 text-center">
          <Reveal>
            <h3 className="text-3xl md:text-5xl font-bold text-background mb-10">So how does DUOFIT help?</h3>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/programs"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary transition-colors rounded-sm">
              Explore Programs <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </section>

      </div>
    </SiteLayout>
  );
}