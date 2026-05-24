import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { WHATSAPP_NUMBER } from "@/components/site/WhatsAppFab";

const WA_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Connect — Duofit.club" },
      { name: "description", content: "Start your journey. Book a free consultation with DUOFIT." },
    ],
  }),
  component: Contact,
});

const channels = [
  { icon: MessageCircle, title: "WhatsApp", desc: "Direct access — chat with us instantly.", href: WA_URL },
  { icon: Instagram, title: "Instagram", desc: "Real-world updates and strategy examples.", href: "https://instagram.com" },
  { icon: Mail, title: "Email", desc: "hello@duofit.club", href: "mailto:hello@duofit.club" },
];

function Contact() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-12 md:pt-20 lg:pt-24 pb-16 md:pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 lg:gap-20">

          {/* Form side */}
          <div className="lg:col-span-7">
            <Reveal><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Connect</span></Reveal>
            <Reveal delay={120}>
              <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Let's start<br /><span className="text-primary">your journey.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Health transformation begins with intentional decisions. Complete the form below and a coach will reach out within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>

          {/* Channels side */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-4">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Or reach us directly</p>
            </Reveal>
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <a href={c.href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 border border-border bg-card rounded-sm p-5 hover:border-primary/50 active:bg-muted transition-all min-h-[72px]">
                  <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm md:text-base">{c.title}</h4>
                    <span className="text-xs md:text-sm text-muted-foreground">{c.desc}</span>
                  </div>
                </a>
              </Reveal>
            ))}

            {/* Stats */}
            <Reveal delay={350}>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[
                  { v: "24h", l: "Response" },
                  { v: "Free", l: "Consultation" },
                  { v: "0 pressure", l: "Just talk" },
                ].map((s) => (
                  <div key={s.l} className="text-center border border-border rounded-sm p-3 md:p-4 bg-card">
                    <span className="block text-base md:text-lg font-bold text-primary">{s.v}</span>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}