import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, RotateCcw } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/reality")({
  head: () => ({
    meta: [
      { title: "Reality Check — Duofit.club" },
      {
        name: "description",
        content:
          "Why most health journeys fail — and how DUOFIT is different.",
      },
    ],
  }),
  component: Reality,
});

const cards = [
  {
    front: "Extreme Diets",
    backTitle: "The Biological Backlash",
    backDesc:
      "Hyper-restrictive food tracking triggers systemic stress, fracturing lifestyle continuity. We install automated choices over absolute restriction.",
  },
  {
    front: "Inconsistency",
    backTitle: "The All-Or-Nothing Trap",
    backDesc:
      "Waiting for the perfect routine stops progress. Build reliable minimal behaviours that survive chaotic workweeks.",
  },
  {
    front: "Busy Lifestyles",
    backTitle: "Time Misallocation",
    backDesc:
      "Fitness doesn't need two hours daily. Our design provides maximal results inside targeted, modular time blocks.",
  },
  {
    front: "Lack of Guidance",
    backTitle: "Information Fatigue",
    backDesc:
      "Conflicting generic advice creates friction. Sustainable execution needs custom plans tailored to your unique baseline.",
  },
  {
    front: "Family Health Neglect",
    backTitle: "Isolating Routines",
    backDesc:
      "Forcing separate meals from your family builds friction. We integrate healthy decisions into shared family tables.",
  },
  {
    front: "Quick Fix Mentality",
    backTitle: "The Reset Delusion",
    backDesc:
      "Aggressive multi-week challenges burn out quickly. Sustainable identity shift replaces desperate, temporary sprints.",
  },
];

function FlipCard({ card }: { card: typeof cards[0] }) {
  // clicked = stays flipped after tap/click
  // hovered = flips while mouse is over it
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const flipped = clicked || hovered;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={clicked}
      aria-label={`${card.front} — ${
        flipped ? card.backDesc : "tap or hover to reveal"
      }`}
      className="w-full h-64 md:h-72 [perspective:1000px] cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm active:scale-[0.98] transition-transform"
      onClick={() => setClicked((f) => !f)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) =>
        e.key === "Enter" || e.key === " "
          ? setClicked((f) => !f)
          : null
      }
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white/5 border border-white/10 rounded-sm p-6 md:p-8 flex flex-col justify-between">
          <h3 className="text-xl md:text-2xl font-bold text-background leading-tight">
            {card.front}
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              <span className="md:hidden">Tap to reveal</span>
              <span className="hidden md:inline">
                Hover or click to reveal
              </span>
            </span>

            <RotateCcw className="h-3 w-3 text-primary" />
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-primary rounded-sm p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h4 className="text-base md:text-lg font-bold text-foreground mb-3">
              {card.backTitle}
            </h4>

            <p className="text-sm text-foreground/80 leading-relaxed">
              {card.backDesc}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-widest text-foreground/60">
              <span className="md:hidden">Tap to close</span>

              <span className="hidden md:inline">
                {clicked ? "Click to close" : "Move away to close"}
              </span>
            </span>

            {clicked && (
              <span className="text-[10px] bg-foreground/10 text-foreground px-2 py-0.5 rounded-full uppercase tracking-wide">
                Pinned
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Reality() {
  return (
    <SiteLayout>
      <div className="bg-foreground text-background min-h-screen">
        {/* HERO */}
        <section className="container-editorial pt-16 md:pt-24 pb-12 md:pb-16 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              — Reality Check
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-5 text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-background">
              Why most health
              <br />
              journeys fail.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-5 text-base md:text-lg text-background/60 max-w-xl mx-auto leading-relaxed">
              Health becomes difficult when it is built around shortcuts,
              extreme routines and temporary motivation.
            </p>
          </Reveal>

          {/* Device hint */}
          <Reveal delay={300}>
            <p className="mt-3 text-sm text-primary font-medium md:hidden">
              👆 Tap any card to reveal
            </p>

            <p className="mt-3 text-sm text-primary font-medium hidden md:block">
              Hover or click any card to reveal
            </p>
          </Reveal>
        </section>

        {/* CARDS */}
        <section className="container-editorial pb-16 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {cards.map((card, i) => (
              <Reveal key={i} delay={i * 60}>
                <FlipCard card={card} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* QUOTE */}
        <section className="border-t border-white/10">
          <div className="container-editorial py-16 md:py-24 text-center max-w-3xl mx-auto">
            <Reveal>
              <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-background/80 italic">
                "Healthy routines shouldn't be an auxiliary stress factor. If
                your health design doesn't survive a high-stress month, the
                design itself is broken."
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="container-editorial pb-20 md:pb-32 text-center">
          <Reveal>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-background mb-8">
              So how does DUOFIT help?
            </h3>
          </Reveal>

          <Reveal delay={120}>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-7 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary active:scale-95 active:opacity-80 transition-all rounded-sm min-h-[48px]"
            >
              Explore Programs <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </section>
      </div>
    </SiteLayout>
  );
}

export default Reality;