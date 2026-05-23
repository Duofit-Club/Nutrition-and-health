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
  { icon: MessageCircle, title: "WhatsApp", desc: "Direct access to lifestyle assistance.", href: WA_URL },
  { icon: Instagram, title: "Instagram", desc: "Real-world updates and strategy examples.", href: "https://instagram.com" },
  { icon: Mail, title: "Email", desc: "hello@duofit.club", href: "mailto:hello@duofit.club" },
];

function Contact() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Form side */}
          <div className="lg:col-span-7">
            <Reveal><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">— Connect</span></Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Let's start<br /><span className="text-primary">your journey.</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                Health transformation begins with intentional decisions. Complete the form below and a coach will reach out within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>

          {/* Channels side */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-5">
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <a href={c.href} target="_blank" rel="noreferrer"
                  className="flex items-start gap-5 border border-border bg-card rounded-sm p-7 hover:border-primary/50 hover:translate-x-1 transition-all duration-300">
                  <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{c.title}</h4>
                    <span className="text-sm text-muted-foreground">{c.desc}</span>
                  </div>
                </a>
              </Reveal>
            ))}

            {/* Stats */}
            <Reveal delay={320}>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {[
                  { v: "24h", l: "Response time" },
                  { v: "Free", l: "Consultation" },
                  { v: "No pressure", l: "Just a conversation" },
                ].map((s) => (
                  <div key={s.l} className="text-center border border-border rounded-sm p-4 bg-card">
                    <span className="block text-lg font-bold text-primary">{s.v}</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</span>
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