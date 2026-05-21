import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { programs } from "@/lib/programs";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Duofit.club" },
      { name: "description", content: "Personalised coaching programs for nutrition, accountability, beginner fitness and lifestyle transformation." },
      { property: "og:title", content: "Programs — Duofit.club" },
      { property: "og:description", content: "Coaching shaped to your life. Pick the journey that meets you where you are." },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-16 md:pt-24 pb-16">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow">— Programs</span></Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl md:text-7xl">
              Coaching, shaped to <em className="not-italic text-primary">your life</em>.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Four pathways. One coach per member. Every plan personalised, every week reviewed, every habit built to last.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32 space-y-6">
        {programs.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <article id={p.slug} className="scroll-mt-24 rounded-[2rem] border border-border bg-card p-7 md:p-12 grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <p className="text-xs tracking-[0.2em] text-muted-foreground">0{i + 1} — {p.duration}</p>
                <h2 className="mt-4 text-3xl md:text-5xl">{p.title}</h2>
                <p className="mt-4 text-primary">{p.tagline}</p>
                <p className="mt-6 text-muted-foreground leading-relaxed">{p.description}</p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Apply for this program <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-8">
                <Detail label="For" value={p.for} />
                <Detail label="Coaching" value={p.coaching} />
                <Detail label="Nutrition" value={p.nutrition} />
                <Detail label="Accountability" value={p.accountability} />
                <div className="sm:col-span-2">
                  <p className="eyebrow">— What you get</p>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <Reveal>
          <div className="rounded-[2rem] bg-cream border border-border p-10 md:p-16 text-center max-w-3xl mx-auto">
            <span className="eyebrow">— Not sure which?</span>
            <h2 className="mt-5 text-3xl md:text-5xl">Let's figure it out together.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">Book a free 30-minute consultation and we'll help you choose the program that actually fits your life.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors">
              Book a free consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow">— {label}</p>
      <p className="mt-3 text-foreground/90 leading-relaxed">{value}</p>
    </div>
  );
}
