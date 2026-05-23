import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppLink } from "@/components/site/WhatsAppFab";
import heroImg from "@/assets/hero-lifestyle.jpg";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DUOFIT — Sustainable Health & Lifestyle Coaching" },
      { name: "description", content: "Sustainable health transformation engineered into your real life and family routines." },
    ],
  }),
  component: Home,
});

const highlights = [
  { t: "Nutrition Architecture", d: "Practical eating frameworks built around your household and schedule." },
  { t: "Functional Fitness", d: "Efficient movement designed to match busy professional and family timelines." },
  { t: "Habit Design", d: "Habit compounding that builds frictionless consistency over time." },
  { t: "Household Integration", d: "Shared wellness frameworks that elevate health across every generation." },
];

function Home() {
  return (
    <SiteLayout>

      {/* HERO */}
      <section className="container-editorial py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Coaching, the human way</span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Real People.<br />Real Life.<br />
                <span className="text-primary">Real Results.</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-lg">
                Sustainable health transformation engineered seamlessly into your real life and family routines.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors rounded-sm">
                  Start Your Journey <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/reality"
                  className="inline-flex items-center gap-2 border border-border bg-transparent text-foreground px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-cream transition-colors rounded-sm">
                  Learn More
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <div className="overflow-hidden rounded-sm aspect-[4/5] bg-muted">
              <img src={heroImg} alt="Lifestyle" className="h-full w-full object-cover" loading="eager" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY DUOFIT */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                  Sustainable wellness<br />designed for longevity.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  We reject transient trends and high-pressure gym culture. DUOFIT structures realistic micro-habits that protect and cultivate long-term personal and family vitality.
                </p>
              </Reveal>
              <div className="mt-12 grid grid-cols-2 gap-8">
                {highlights.map((h, i) => (
                  <Reveal key={h.t} delay={i * 80}>
                    <div>
                      <div className="h-1 w-8 bg-primary mb-4 rounded-full" />
                      <h4 className="font-semibold text-foreground mb-2">{h.t}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{h.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={150}>
              <div className="overflow-hidden rounded-sm aspect-square bg-muted">
                <img src={founderImg} alt="Coaching" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REALITY TEASER — dark */}
      <section className="bg-foreground text-background py-32 md:py-40 text-center">
        <div className="container-editorial">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-light max-w-2xl mx-auto leading-relaxed text-background/90">
              Do you want to know why most health journeys fail?
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/reality"
              className="mt-12 inline-flex items-center gap-2 text-primary font-medium uppercase tracking-widest text-sm hover:gap-4 transition-all">
              Explore Reality Check <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MEET COACH — compact */}
      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center border border-border rounded-sm p-10 md:p-14 bg-card">
            <div className="overflow-hidden rounded-sm aspect-[4/3] bg-muted">
              <img src={founderImg} alt="Coach" className="h-full w-full object-cover object-top" loading="lazy" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Expert Guidance</span>
              <h3 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">Grounded, expert guidance.</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                No filters, no performance aesthetics. Just clean metrics, proven methodology, and real operational strategy for busy lifestyles.
              </p>
              <div className="flex gap-6 mt-6 text-xs font-semibold uppercase tracking-widest text-primary">
                <span>Nutrition</span>
                <span>·</span>
                <span>Fitness</span>
                <span>·</span>
                <span>Healthy Habits</span>
              </div>
              <div className="flex gap-4 mt-8">
                <Link to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                  Learn More About DUOFIT <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-4">
                <WhatsAppLink className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </SiteLayout>
  );
}