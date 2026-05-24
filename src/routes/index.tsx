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
      { name: "description", content: "Helping people stay healthy through practical Nutrition, Movement and Healthy Habits that fit everyday life." },
    ],
  }),
  component: Home,
});

const highlights = [
  { t: "Nutrition Architecture", d: "Practical eating frameworks built around your household and schedule.", sub: "Simple food choices that work with your routine and availability." },
  { t: "Functional Fitness", d: "Efficient movement designed to match busy professional and family timelines.", sub: "Helping your body move consistently instead of extreme routines." },
  { t: "Habit Design", d: "Habit compounding that builds frictionless consistency over time.", sub: "Small sustainable changes that become easier to maintain." },
  { t: "Household Integration", d: "Shared wellness frameworks that elevate health across every generation.", sub: "Helping families build healthier routines together." },
];

function Home() {
  return (
    <SiteLayout>

      {/* HERO */}
      <section className="container-editorial py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Coaching, the human way</span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Real People.<br />Real Life.<br />
                <span className="text-primary">Real Results.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Helping people stay healthy through practical Nutrition, Movement and Healthy Habits that fit everyday life.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/contact"
                  className="flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors rounded-sm min-h-[48px]">
                  Start Your Journey <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/reality"
                  className="flex items-center justify-center gap-2 border border-border text-foreground px-6 py-4 text-sm font-medium uppercase tracking-widest hover:bg-cream transition-colors rounded-sm min-h-[48px]">
                  Learn More
                </Link>
              </div>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-4">
                <WhatsAppLink className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2">
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </WhatsAppLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-sm aspect-[4/3] md:aspect-[4/5] bg-muted">
              <img src={heroImg} alt="Real people, real results" className="h-full w-full object-cover" loading="eager" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY DUOFIT */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-14 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Why Duofit</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  Sustainable wellness designed for longevity.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-3 text-sm md:text-base font-semibold text-foreground uppercase tracking-wide">
                  Health should work with your life, not against it.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  We reject transient trends and high-pressure gym culture. DUOFIT structures realistic micro-habits that protect and cultivate long-term personal and family vitality.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Most people don't struggle because they lack information or motivation — they struggle because their routines don't fit their schedules, responsibilities or lifestyle.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <Reveal key={h.t} delay={i * 80}>
                  <div className="border border-border bg-card rounded-sm p-5 md:p-6 h-full">
                    <div className="h-1 w-8 bg-primary mb-3 rounded-full" />
                    <h4 className="font-bold text-sm md:text-base text-foreground mb-2">{h.t}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-1">{h.d}</p>
                    <p className="text-xs text-muted-foreground/70 leading-relaxed">{h.sub}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
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
            <Link to="/reality"
              className="mt-10 inline-flex items-center gap-2 text-primary font-medium uppercase tracking-widest text-sm py-2 hover:gap-4 transition-all min-h-[44px]">
              Explore Reality Check <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MEET COACH */}
      <section className="container-editorial py-14 md:py-24 lg:py-32">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center border border-border rounded-sm p-6 md:p-10 lg:p-14 bg-card">
            <div className="overflow-hidden rounded-sm aspect-[4/3] bg-muted">
              <img src={founderImg} alt="DUOFIT Founder" className="h-full w-full object-cover object-top" loading="lazy" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Expert Guidance</span>
              <h3 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Grounded, expert guidance.</h3>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                No filters, no performance aesthetics. Just clean metrics, proven methodology, and real operational strategy for busy lifestyles.
              </p>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                DUOFIT was built through our own journey of improving health, consistency and lifestyle habits as a family. Together, we focus on practical guidance, accountability and sustainable routines that fit real life.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-6 mt-5 text-xs font-semibold uppercase tracking-widest text-primary">
                <span>Nutrition</span><span>·</span><span>Fitness</span><span>·</span><span>Healthy Habits</span>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-7">
                <Link to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors min-h-[44px]">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
                <WhatsAppLink className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors min-h-[44px]">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </SiteLayout>
  );
}