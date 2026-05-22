import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import lifestyleImg from "@/assets/lifestyle.jpg";
import coachingImg from "@/assets/coaching.jpg";
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

const values = [
  { t: "Human first", d: "You'll never talk to a chatbot. Every plan is shaped by a coach who knows your story." },
  { t: "Sustainable", d: "We design for years, not weeks. Quiet wins compound louder than sprints." },
  { t: "Honest", d: "No miracle promises. No shame tactics. Just clear coaching and steady work." },
  { t: "Personalised", d: "Your culture, your schedule, your body. Plans bend around you, not the other way around." },
];

const stats = [
  { value: "9+", label: "Months of consistency" },
  { value: "~9 kg", label: "Overall weight reduction" },
  { value: "5.3%", label: "Body fat reduction" },
  { value: "+6 kg", label: "Lean mass gained" },
];

const timeline = [
  {
    date: "SEP 18, 2024",
    weight: "81.2 kg",
    bf: null,
    title: "The Decision",
    desc: "Decided to take control of my health. No more postponing.",
    milestone: true,
  },
  {
    date: "SEP 30, 2024",
    weight: "77.5 kg",
    bf: null,
    title: "Early Results",
    desc: "Early results through consistency and effort. The habit was forming.",
    milestone: false,
  },
  {
    date: "NOV 09, 2024",
    weight: "76.4 kg",
    bf: null,
    title: "Building Momentum",
    desc: "Learning, staying consistent and building momentum week by week.",
    milestone: false,
  },
  {
    date: "MAR 23, 2025",
    weight: "75.0 kg",
    bf: null,
    title: "Growing Stronger",
    desc: "Strength improving. Confidence growing. The shift was real.",
    milestone: true,
  },
  {
    date: "JUN 19, 2025",
    weight: "74.5 kg",
    bf: "23.8%",
    title: "Tracking Composition",
    desc: "Started tracking body composition to measure real progress beyond the scale.",
    milestone: false,
  },
  {
    date: "JUL 31, 2025",
    weight: "73.6 kg",
    bf: "22.0%",
    title: "Focused on Strength",
    desc: "Focused on getting stronger and improving body composition.",
    milestone: false,
  },
  {
    date: "AUG 26, 2025",
    weight: "75.1 kg",
    bf: "24.8%",
    title: "Staying Committed",
    desc: "Fluctuations happened, but I stayed committed to the process.",
    milestone: false,
  },
  {
    date: "SEP 10, 2025",
    weight: "75.6 kg",
    bf: "24.3%",
    title: "Accountability",
    desc: "Held myself accountable and kept showing up every single day.",
    milestone: false,
  },
  {
    date: "MAY 04, 2026",
    weight: "73.85 kg",
    bf: "20%",
    title: "Results Showing",
    desc: "All the hard work started to show in numbers.",
    milestone: true,
  },
  {
    date: "MAY 19, 2026",
    weight: "72.25 kg",
    bf: "19%",
    title: "A New Lifestyle",
    desc: "A lifestyle built on discipline, not motivation.",
    milestone: true,
  },
];

function About() {
  return (
    <SiteLayout>

      {/* Hero */}
      <section className="container-editorial pt-16 md:pt-24 pb-20">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow">— About</span></Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl md:text-7xl">
              Health, the <em className="not-italic text-primary">quiet</em> way.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Duofit was built for the people who are tired of being shouted at by the fitness world — and who want a calmer, more thoughtful way back to themselves.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Wide image */}
      <section className="container-editorial pb-24">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] aspect-[16/8] bg-muted">
            <img src={lifestyleImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* Our story */}
      <section className="container-editorial pb-24 md:pb-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal><span className="eyebrow">— Our story</span></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 text-4xl md:text-5xl">From burnout to balance.</h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <Reveal delay={150}><p>Duofit began with a simple frustration: most fitness coaching treats people like projects. Plans get handed down. Numbers get chased. Lives get bent around a workout.</p></Reveal>
          <Reveal delay={250}><p>We wanted the opposite. A coaching practice that starts with your week — your work, your meals, your sleep, your stress — and gently rebuilds the rhythm from there.</p></Reveal>
          <Reveal delay={350}><p>Today, Duofit coaches members across India and beyond — quietly, personally, and one habit at a time.</p></Reveal>
        </div>
      </section>

      {/* ── MEET THE FOUNDER ── */}
      <section className="bg-cream/70 border-y border-border">
        <div className="container-editorial py-24 md:py-32">

          <div className="mb-14">
            <Reveal><span className="eyebrow">— Meet the founder</span></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 text-4xl md:text-5xl max-w-xl">
                Built from <em className="not-italic text-primary">real</em> experience.
              </h2>
            </Reveal>
          </div>

          {/* Three progress photos */}
          <Reveal delay={160}>
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-16">
              {[
                { src: founderBefore, label: "Sep 2024 · Starting Point", sub: "81.2 kg" },
                { src: founderMid,    label: "Mar 2025 · Visible Progress", sub: "75.0 kg" },
                { src: founderAfter,  label: "May 2026 · Stronger Every Day", sub: "72.25 kg · 19% BF" },
              ].map((photo, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl aspect-[3/4] bg-muted">
                    <img src={photo.src} alt={photo.label} className="h-full w-full object-cover object-top" loading="lazy" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-primary uppercase">{photo.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{photo.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <p className="text-3xl font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── TIMELINE ── */}
          <div className="mb-20">
            <Reveal>
              <div className="mb-10">
                <span className="eyebrow">— Journey timeline</span>
                <h3 className="mt-4 text-3xl md:text-4xl">Every step, tracked.</h3>
              </div>
            </Reveal>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              <div className="space-y-0">
                {timeline.map((item, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <Reveal key={i} delay={i * 60}>
                      <div className={`relative flex items-start gap-6 md:gap-0 pb-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>

                        {/* Content card */}
                        <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                          <div className={`inline-block rounded-2xl border bg-card p-5 w-full ${item.milestone ? "border-primary/40 bg-primary/5" : "border-border"}`}>
                            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-1">{item.date}</p>
                            <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                              <span className="text-xl font-bold text-foreground">{item.weight}</span>
                              {item.bf && (
                                <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{item.bf} BF</span>
                              )}
                            </div>
                            <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                          </div>
                        </div>

                        {/* Dot on line */}
                        <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 mt-5 flex items-center justify-center">
                          <div className={`rounded-full border-2 border-background shadow ${item.milestone ? "h-4 w-4 bg-primary" : "h-3 w-3 bg-muted-foreground/40"}`} />
                        </div>

                        {/* Empty side for desktop */}
                        <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Story text */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <Reveal>
                <h3 className="text-3xl md:text-4xl leading-snug">
                  My<br /><span className="text-primary">Journey.</span>
                </h3>
              </Reveal>
            </div>
            <div className="lg:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <Reveal delay={100}><p>For a long time, health was something I kept postponing. Work, stress, inconsistency, unhealthy eating habits, and lack of routine slowly started affecting my energy, confidence, and overall lifestyle.</p></Reveal>
              <Reveal delay={180}><p>I had multiple failed attempts, phases where I stopped midway, and moments where progress felt too slow to continue. But eventually, I realised that transformation is not built through motivation — it is built through consistency.</p></Reveal>
              <Reveal delay={260}><p>What started with small daily changes gradually became a complete lifestyle shift through better nutrition, structured training, and sustainable habits. Over time, the changes became visible not just physically, but mentally — more strength, more discipline, and a healthier relationship with fitness.</p></Reveal>
              <Reveal delay={340}><p className="text-foreground font-medium">That personal journey became the foundation of DUOFIT: helping people build realistic, sustainable health habits and become better every day.</p></Reveal>
            </div>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="container-editorial py-24 md:py-32">
        <div className="max-w-2xl mb-14">
          <Reveal><span className="eyebrow">— What we believe</span></Reveal>
          <Reveal delay={120}><h2 className="mt-5 text-4xl md:text-5xl">Four values, every plan.</h2></Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 100}>
              <div className="rounded-3xl border border-border bg-card p-8 h-full">
                <h3 className="text-2xl">{v.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial pb-24 md:pb-32">
        <Reveal>
          <div className="rounded-[2rem] bg-foreground text-background p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-primary-foreground/70">— Coaching</span>
              <h2 className="mt-4 text-3xl md:text-5xl text-background">Curious if Duofit is right for you?</h2>
              <p className="mt-5 text-background/70 max-w-md leading-relaxed">A free 30-minute consultation — no script, no pressure.</p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-medium hover:bg-background/90 transition-colors">
                Start your journey <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <img src={coachingImg} alt="" className="hidden" />
          </div>
        </Reveal>
      </section>

    </SiteLayout>
  );
}