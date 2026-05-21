import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import founderImg from "@/assets/founder.jpg";
import lifestyleImg from "@/assets/lifestyle.jpg";
import coachingImg from "@/assets/coaching.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Duofit.club" },
      { name: "description", content: "The story, mission, and coaching philosophy behind Duofit — a calmer, more human way to transform." },
      { property: "og:title", content: "About — Duofit.club" },
      { property: "og:description", content: "A calmer, more human way to transform — built on habits, nutrition and real coaching." },
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

function About() {
  return (
    <SiteLayout>
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

      <section className="container-editorial pb-24">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] aspect-[16/8] bg-muted">
            <img src={lifestyleImg} alt="" className="h-full w-full object-cover" loading="lazy" width={1280} height={640} />
          </div>
        </Reveal>
      </section>

      <section className="container-editorial pb-24 md:pb-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal><span className="eyebrow">— Our story</span></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 text-4xl md:text-5xl">From burnout to balance.</h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <Reveal delay={150}>
            <p>Duofit began with a simple frustration: most fitness coaching treats people like projects. Plans get handed down. Numbers get chased. Lives get bent around a workout.</p>
          </Reveal>
          <Reveal delay={250}>
            <p>We wanted the opposite. A coaching practice that starts with your week — your work, your meals, your sleep, your stress — and gently rebuilds the rhythm from there.</p>
          </Reveal>
          <Reveal delay={350}>
            <p>Today, Duofit coaches members across India and beyond — quietly, personally, and one habit at a time.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream/70 border-y border-border">
        <div className="container-editorial py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] aspect-[4/5] bg-muted">
              <img src={founderImg} alt="Founder" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280} />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal><span className="eyebrow">— The founder</span></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 text-4xl md:text-5xl">Meet your coach.</h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
                With over a decade in nutrition and behavioural coaching, our founder has guided hundreds of members through the slow, real work of changing their lives — not by adding pressure, but by removing it.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                "I'm not interested in transformations that don't last. I want you to find a way of living that feels like yours — and to keep it for the next twenty years."
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32">
        <div className="max-w-2xl mb-14">
          <Reveal><span className="eyebrow">— What we believe</span></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 text-4xl md:text-5xl">Four values, every plan.</h2>
          </Reveal>
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
