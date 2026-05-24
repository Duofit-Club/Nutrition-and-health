import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import lifestyleImg from "@/assets/lifestyle.jpg";
import founderBefore from "@/assets/founder-before.jpeg";
import founderMid from "@/assets/founder-mid.jpeg";
import founderAfter from "@/assets/founder-after.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Duofit.club" },
      { name: "description", content: "The story, mission, and coaching philosophy behind Duofit." },
    ],
  }),
  component: About,
});

const stats = [
  { value: "9+", label: "Months of consistency" },
  { value: "~9 kg", label: "Overall weight reduction" },
  { value: "5.3%", label: "Body fat reduction" },
  { value: "+6 kg", label: "Lean mass gained" },
];

const timeline = [
  { date: "Sep 2024", weight: "81.2 kg", bf: null, label: "The Start" },
  { date: "Nov 2024", weight: "76.4 kg", bf: null, label: "Momentum" },
  { date: "Mar 2025", weight: "75.0 kg", bf: null, label: "Stronger" },
  { date: "Jun 2025", weight: "74.5 kg", bf: "23.8%", label: "Tracking" },
  { date: "Aug 2025", weight: "75.1 kg", bf: "24.8%", label: "Committed" },
  { date: "May 2026", weight: "72.25 kg", bf: "19%", label: "Lifestyle" },
];

const values = [
  { t: "Human first", d: "Every plan is shaped by a coach who knows your story — never a chatbot." },
  { t: "Sustainable", d: "We design for years, not weeks. Quiet wins compound louder than sprints." },
  { t: "Honest", d: "No miracle promises. No shame tactics. Just clear coaching and steady work." },
  { t: "Personalised", d: "Your culture, your schedule, your body. Plans bend around you." },
];

function About() {
  return (
    <SiteLayout>

      {/* Hero */}
      <section className="container-editorial pt-12 md:pt-20 lg:pt-24 pb-10 md:pb-16">
        <div className="max-w-3xl">
          <Reveal><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— About</span></Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Health, the <span className="text-primary">quiet</span> way.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Duofit was built for people who want a calmer, more thoughtful way back to themselves.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Wide image */}
      <section className="container-editorial pb-12 md:pb-20">
        <Reveal>
          <div className="overflow-hidden rounded-sm aspect-[16/7] md:aspect-[16/8] bg-muted">
            <img src={lifestyleImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* Our story */}
      <section className="container-editorial pb-14 md:pb-24 lg:pb-32 grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Our story</span></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">From burnout to balance.</h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          <Reveal delay={150}><p>Duofit began with a simple frustration: most fitness coaching treats people like projects. Plans get handed down. Numbers get chased. Lives get bent around a workout.</p></Reveal>
          <Reveal delay={230}><p>We wanted the opposite — a coaching practice that starts with your week, your meals, your sleep, your stress — and gently rebuilds the rhythm from there.</p></Reveal>
          <Reveal delay={310}><p>Today, Duofit coaches members across India and beyond — quietly, personally, and one habit at a time.</p></Reveal>
        </div>
      </section>

      {/* ── MEET THE FOUNDER — 2 halves ── */}
      <section className="bg-cream/70 border-y border-border">
        <div className="container-editorial py-14 md:py-24 lg:py-32">

          <div className="mb-10 md:mb-14">
            <Reveal><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Meet the founder</span></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Built from <span className="text-primary">real</span> experience.
              </h2>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 lg:gap-20 items-start">

            {/* LEFT: Story */}
            <div className="space-y-5">
              <Reveal delay={100}><p className="text-base md:text-lg text-muted-foreground leading-relaxed">For a long time, health was something I kept postponing. Work, stress, inconsistency, unhealthy eating habits, and lack of routine slowly started affecting my energy, confidence, and overall lifestyle.</p></Reveal>
              <Reveal delay={180}><p className="text-base md:text-lg text-muted-foreground leading-relaxed">I had multiple failed attempts, phases where I stopped midway, and moments where progress felt too slow to continue. But eventually, I realised that transformation is not built through motivation — it is built through <span className="text-foreground font-medium">consistency</span>.</p></Reveal>
              <Reveal delay={260}><p className="text-base md:text-lg text-muted-foreground leading-relaxed">What started with small daily changes gradually became a complete lifestyle shift through better nutrition, structured training, and sustainable habits.</p></Reveal>
              <Reveal delay={340}>
                <div className="rounded-sm border border-primary/30 bg-primary/5 p-5 md:p-6">
                  <p className="text-sm md:text-base font-medium text-foreground leading-relaxed">
                    "That personal journey became the foundation of DUOFIT: helping people build realistic, sustainable health habits and become better every day."
                  </p>
                </div>
              </Reveal>
            </div>

            {/* RIGHT: Photos + Timeline + Stats */}
            <div className="space-y-8">
              {/* 3 photos */}
              <Reveal delay={140}>
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {[
                    { src: founderBefore, label: "Sep 2024", sub: "81.2 kg" },
                    { src: founderMid, label: "Mar 2025", sub: "75.0 kg" },
                    { src: founderAfter, label: "May 2026", sub: "72.25 kg" },
                  ].map((photo, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="overflow-hidden rounded-sm aspect-[3/4] bg-muted">
                        <img src={photo.src} alt={photo.label} className="h-full w-full object-cover object-top" loading="lazy" />
                      </div>
                      <div className="text-center">
                        <p className="text-[9px] md:text-[10px] font-semibold tracking-widest text-primary uppercase">{photo.label}</p>
                        <p className="text-[9px] md:text-xs text-muted-foreground">{photo.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Horizontal timeline — scrollable on mobile */}
              <Reveal delay={200}>
                <div className="overflow-x-auto pb-3 -mx-1 px-1">
                  <div className="relative min-w-[480px]">
                    <div className="absolute top-[18px] left-4 right-4 h-px bg-border" />
                    <div className="relative flex justify-between">
                      {timeline.map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 w-[72px]">
                          <div className={`relative z-10 rounded-full border-2 border-background shadow-sm ${i === 0 || i === timeline.length - 1 ? "h-5 w-5 bg-primary" : "h-3.5 w-3.5 bg-muted-foreground/50"}`} />
                          <div className="text-center">
                            <p className="text-[8px] font-semibold tracking-wider text-primary uppercase leading-tight">{item.date}</p>
                            <p className="text-[10px] font-bold text-foreground mt-0.5">{item.weight}</p>
                            {item.bf && <p className="text-[8px] text-muted-foreground">{item.bf} BF</p>}
                            <p className="text-[8px] text-muted-foreground mt-0.5">{item.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Stats */}
              <Reveal delay={260}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-sm border border-border bg-card p-4 text-center">
                      <p className="text-lg md:text-xl font-bold text-primary">{s.value}</p>
                      <p className="text-[9px] md:text-[10px] text-muted-foreground mt-0.5 leading-tight uppercase tracking-wide">{s.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-editorial py-14 md:py-24 lg:py-32">
        <div className="max-w-2xl mb-10 md:mb-14">
          <Reveal><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— What we believe</span></Reveal>
          <Reveal delay={120}><h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">Four values, every plan.</h2></Reveal>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 100}>
              <div className="rounded-sm border border-border bg-card p-6 md:p-8 h-full">
                <h3 className="text-lg md:text-2xl font-bold mb-3">{v.t}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial pb-14 md:pb-24 lg:pb-32">
        <Reveal>
          <div className="rounded-sm bg-foreground text-background p-7 md:p-12 lg:p-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-primary">— Coaching</span>
              <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl text-background">Curious if Duofit is right for you?</h2>
              <p className="mt-4 text-background/70 leading-relaxed text-sm md:text-base">A free 30-minute consultation — no script, no pressure.</p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-background text-foreground px-6 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary transition-colors min-h-[48px]">
                Start your journey <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}