import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Instagram, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { WHATSAPP_NUMBER } from "@/components/site/WhatsAppFab";

const WA_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Duofit.club" },
      { name: "description", content: "Book your free coaching consultation. We reply personally within 24 hours." },
      { property: "og:title", content: "Contact — Duofit.club" },
      { property: "og:description", content: "Book your free coaching consultation. Calm, personal coaching for the long road." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-16 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal><span className="eyebrow">— Contact</span></Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl md:text-6xl">
              Let's <em className="not-italic text-primary">talk.</em>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
              Share a little about where you are. A coach will reach out within 24 hours — calm, personal, and no pressure to sign up.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 space-y-4">
              <ContactItem icon={MessageCircle} label="WhatsApp" value="Chat with us instantly">
                <a href={WA_URL} target="_blank" rel="noreferrer" className="absolute inset-0" aria-label="Chat on WhatsApp" />
              </ContactItem>
              <ContactItem icon={Mail} label="Email" value="hello@duofit.club">
                <a href="mailto:hello@duofit.club" className="absolute inset-0" />
              </ContactItem>
              <ContactItem icon={Phone} label="Phone" value={WHATSAPP_NUMBER}>
                <a href={`tel:${WHATSAPP_NUMBER}`} className="absolute inset-0" />
              </ContactItem>
              <ContactItem icon={Instagram} label="Instagram" value="@duofit.club">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="absolute inset-0" />
              </ContactItem>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={200}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <Reveal>
          <div className="rounded-[2rem] bg-cream border border-border p-10 md:p-14 grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div><p className="font-display text-3xl">24 hours</p><p className="text-sm text-muted-foreground mt-1">Average response time</p></div>
            <div><p className="font-display text-3xl">Free</p><p className="text-sm text-muted-foreground mt-1">Initial 30-minute consultation</p></div>
            <div><p className="font-display text-3xl">No pressure</p><p className="text-sm text-muted-foreground mt-1">Talk to us before deciding anything</p></div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function ContactItem({
  icon: Icon, label, value, children,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; children: React.ReactNode }) {
  return (
    <div className="relative flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
      <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
        <p className="text-foreground mt-0.5">{value}</p>
      </div>
      {children}
    </div>
  );
}
