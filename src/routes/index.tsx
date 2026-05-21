import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles, Heart, Compass, Clock, Apple, Users, LineChart, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ProgramCard } from "@/components/site/ProgramCard";
import { Faq } from "@/components/site/Faq";
import { ContactForm } from "@/components/site/ContactForm";
import { WhatsAppLink } from "@/components/site/WhatsAppFab";
import { programs } from "@/lib/programs";
import heroImg from "@/assets/hero-lifestyle.jpg";
import nutritionImg from "@/assets/nutrition.jpg";
import lifestyleImg from "@/assets/lifestyle.jpg";
import coachingImg from "@/assets/coaching.jpg";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Duofit.club — Sustainable fitness for real life" },
      { name: "description", content: "Personalised coaching for nutrition, accountability, movement and long-term lifestyle change." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-background" />
        <div className="absolute -top-32 -right-32 -z-10 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
        <div className="container-editorial pt-16 md:pt-24 pb-20 md:pb-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">— Coaching, the human way</span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl">
                Sustainable fitness <br />
                <em className="not-italic text-primary">for real life.</em>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
                Personalised coaching for nutrition, accountability, movement and long-term lifestyle change — built for the way you actually live.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Start your journey <ArrowRight className="h-4 w-4" />
                </Link>
                <WhatsAppLink className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium hover:border-primary/50 transition-colors">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Talk on WhatsApp
                </WhatsAppLink>
              </div>
            </Reveal>
            <Reveal delay={480}>
              <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[founderImg, coachingImg, lifestyleImg].map((src, i) => (
                    <img key={i} src={src} alt="" className="h-9 w-9 rounded-full object-cover border-2 border-background" />
                  ))}
                </div>
                <p>500+ members coached towards calmer, healthier weeks.</p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-muted">
                  <img
                    src={heroImg}
                    alt="A calm morning stretch by a sunlit window"
                    className="h-full w-full object-cover animate-slow-zoom"
                    width={1080}
                    height={1350}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-background rounded-2xl shadow-lg shadow-black/5 border border-border px-5 py-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">This week</p>
                    <p className="text-sm font-medium">5/6 habits on track</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-cream/60">
        <div className="container-editorial py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { icon: Users, k: "500+", v: "Members coached" },
            { icon: Heart, k: "94%", v: "Stay 6+ months" },
            { icon: Clock, k: "<24h", v: "Coach response" },
            { icon: LineChart, k: "1:1", v: "Always human" },
          ].map(({ icon: Icon, k, v }) => (
            <Reveal key={k} className="text-center md:text-left">
              <Icon className="h-5 w-5 text-primary mb-3 mx-auto md:mx-0" />
              <p className="font-display text-3xl md:text-4xl">{k}</p>
              <p className="text-sm text-muted-foreground mt-1">{v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT IS DUOFIT */}
      <section className="container-editorial py-24 md:py-32">
        <div className="max-w-2xl">
          <Reveal><span className="eyebrow">— Our philosophy</span></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 text-4xl md:text-5xl">
              A calmer, more human way to change your life.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              No 30-day shocks. No punishing protocols. Duofit is built on small, daily habits — and a coach who actually knows you.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-24">
          <AltBlock
            eyebrow="Habit-based transformation"
            title="We change behaviour, not just bodies."
            text="Lasting change happens when the small things stop being a struggle. We build your routine in layers — one habit at a time — so the rest of your life can keep up."
            image={lifestyleImg}
            icon={Compass}
          />
          <AltBlock
            reverse
            eyebrow="Nutrition support"
            title="Food that fits your culture, schedule, and taste."
            text="Flexible nutrition plans — never diets. Real meals, family-friendly, restaurant-friendly, travel-friendly. Built around how you actually eat."
            image={nutritionImg}
            icon={Apple}
          />
          <AltBlock
            eyebrow="Human coaching"
            title="One coach. One conversation. Yours."
            text="You won't be passed between teams or buried in app notifications. You get a single coach who knows your week, your goals, and your story."
            image={coachingImg}
            icon={Heart}
          />
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="bg-cream/70 border-y border-border">
        <div className="container-editorial py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <Reveal><span className="eyebrow">— Real change</span></Reveal>
              <Reveal delay={120}>
                <h2 className="mt-5 text-4xl md:text-5xl">Quiet wins that compound.</h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <p className="text-muted-foreground max-w-md">
                The transformations we're proudest of don't look like before/after photos. They look like better sleep, calmer mornings and a stronger week.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { k: "More energy", v: "“I stopped crashing every afternoon. I just feel awake now.”", who: "Aanya, 31" },
              { k: "Quiet confidence", v: "“I'm not chasing motivation anymore — the routine carries me.”", who: "Rohan, 38" },
              { k: "Consistent body change", v: "“Eight kilos down over five months. Nothing dramatic — just steady.”", who: "Priya, 29" },
            ].map((t, i) => (
              <Reveal key={t.k} delay={i * 120}>
                <div className="h-full rounded-3xl bg-background border border-border p-8">
                  <p className="eyebrow">{t.k}</p>
                  <p className="mt-5 font-display text-2xl leading-snug">{t.v}</p>
                  <p className="mt-8 text-sm text-muted-foreground">{t.who}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="container-editorial py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <Reveal><span className="eyebrow">— Programs</span></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 text-4xl md:text-5xl">Coaching, shaped to your life.</h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              See all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProgramCard program={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-foreground text-background">
        <div className="container-editorial py-24 md:py-32">
          <div className="max-w-2xl">
            <Reveal><span className="text-xs font-medium tracking-[0.18em] uppercase text-primary-foreground/70">— How it works</span></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 text-4xl md:text-5xl text-background">Four steps. One coach. A whole new rhythm.</h2>
            </Reveal>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 rounded-3xl overflow-hidden">
            {[
              { n: "01", t: "Consultation", d: "A free 30-minute call to understand your goals, your week and what's tripped you up before." },
              { n: "02", t: "Personalised plan", d: "Your coach designs a movement, nutrition and habit plan that fits — not the other way around." },
              { n: "03", t: "Coaching & accountability", d: "Weekly sessions, daily check-ins, and a coach who actually remembers your story." },
              { n: "04", t: "Sustainable progress", d: "We measure energy, mood and consistency — not just the scale. The change compounds." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="h-full bg-foreground p-8 md:p-10">
                  <p className="font-display text-5xl text-primary/80">{s.n}</p>
                  <h3 className="mt-8 text-2xl text-background">{s.t}</h3>
                  <p className="mt-3 text-sm text-background/70 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-editorial py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] aspect-[4/5] bg-muted">
              <img src={founderImg} alt="Founder portrait" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280} />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal><span className="eyebrow">— Behind Duofit</span></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 text-4xl md:text-5xl">Built by coaches who've lived the long road, too.</h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
                Duofit started with a single belief: real health isn't loud. It looks like sleeping better, walking more, eating with ease and not needing to be perfect on Mondays. We coach the way we wish we'd been coached — patiently, personally, and without the noise.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <Link to="/about" className="mt-9 inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                Read our story <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-editorial py-24 md:py-32">
        <div className="max-w-2xl mb-12">
          <Reveal><span className="eyebrow">— FAQ</span></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 text-4xl md:text-5xl">The honest answers.</h2>
          </Reveal>
        </div>
        <Faq />
      </section>

      {/* CTA / CONTACT */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="rounded-[2rem] bg-cream border border-border p-8 md:p-14 lg:p-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal><span className="eyebrow">— Begin</span></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 text-4xl md:text-5xl">
                Let's build the version of your week that feels <em className="not-italic text-primary">lighter.</em>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
                Tell us a little about where you are. A coach will reach out within 24 hours — no pressure, no script, just a conversation.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-8 space-y-3 text-sm">
                {["Free 30-minute consultation", "No long-term lock-in", "Cancel any time"].map((l) => (
                  <li key={l} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />{l}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function AltBlock({
  eyebrow, title, text, image, icon: Icon, reverse,
}: { eyebrow: string; title: string; text: string; image: string; icon: React.ComponentType<{ className?: string }>; reverse?: boolean }) {
  return (
    <div className={`grid lg:grid-cols-12 gap-10 items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
      <Reveal className="lg:col-span-6">
        <div className="overflow-hidden rounded-[2rem] aspect-[5/4] bg-muted">
          <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" width={1280} height={1024} />
        </div>
      </Reveal>
      <Reveal delay={150} className="lg:col-span-6 lg:px-4">
        <Icon className="h-6 w-6 text-primary" />
        <p className="eyebrow mt-4">— {eyebrow}</p>
        <h3 className="mt-4 text-3xl md:text-4xl">{title}</h3>
        <p className="mt-5 text-muted-foreground leading-relaxed text-lg">{text}</p>
      </Reveal>
    </div>
  );
}
