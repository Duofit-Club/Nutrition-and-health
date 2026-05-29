import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
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
  { t: "Nutrition", d: "Simple food choices that work with your routine and availability." },
  { t: "Fitness & Movement", d: "Helping your body move consistently instead of extreme routines." },
  { t: "Healthy Habits", d: "Small sustainable changes that become easier to maintain." },
  { t: "Family Health", d: "Helping families build healthier routines together." },
];

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
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <Reveal key={h.t} delay={i * 80}>
                  <div className="border border-border bg-card rounded-sm p-5 md:p-6 h-full">
                    <h4 className="font-bold text-sm md:text-base text-foreground mb-2">{h.t}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{h.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* MEET COACH
      <section className="container-editorial py-14 md:py-24 lg:py-32">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center border border-border rounded-sm p-6 md:p-10 lg:p-14 bg-card">
            <div className="overflow-hidden rounded-sm aspect-[4/3] bg-muted">
              <img
                src={founderImg}
                alt="DUOFIT Founder"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                Built From Real Experience.
              </h3>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                DUOFIT was built through our own journey of improving health, consistency and lifestyle habits as a family. Together, we focus on practical guidance, accountability and sustainable routines that fit real life.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-6 mt-5 text-xs font-semibold uppercase tracking-widest text-primary">
                <span>Nutrition</span><span>·</span><span>Fitness</span><span>·</span><span>Healthy Habits</span>
              </div>
              <div className="mt-7">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground hover:text-primary active:opacity-70 transition-colors min-h-[44px]"
                >
                  About DUOFIT <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section> */}

    </SiteLayout>
  );
}