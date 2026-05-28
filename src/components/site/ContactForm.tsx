import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(100),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(20),
  goal: z.string().trim().min(1, "Pick a goal").max(80),
  message: z.string().trim().max(1000).optional(),
});

const goals = [
  "Lifestyle transformation",
  "Nutrition coaching",
  "Build consistent habits",
  "Beginner fitness",
  "Just exploring",
];

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      goal: fd.get("goal"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setDone(true);
    toast.success("We personally respond to every message");
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center">
        <p className="eyebrow">Thank you</p>
        <h3 className="font-display text-3xl mt-3">Your message is in.</h3>
        <p className="mt-3 text-muted-foreground">A coach will reach out within 24 hours to schedule your free consultation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 md:p-10 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Name" name="name" placeholder="Your name" />
        <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." />
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Goal</label>
        <select name="goal" defaultValue="" className="mt-2 w-full bg-transparent border border-input rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring/40">
          <option value="" disabled>What would you like help with?</option>
          {goals.map((g) => <option key={g}>{g}</option>)}
        </select>
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</label>
        <textarea name="message" rows={4} placeholder="Tell us a little about where you are right now…" className="mt-2 w-full bg-transparent border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none" />
      </div>
      <button
        disabled={loading}
        className="w-full rounded-full bg-foreground text-background py-4 text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-60"
      >
        {loading ? "Sending…" : "START THE CONVERSATION"}
      </button>
      <p className="text-xs text-muted-foreground text-center">We reply personally within 24 hours.</p>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border border-input rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
