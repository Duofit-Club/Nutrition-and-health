import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import duofitLogo from "../../assets/duofit-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/reality", label: "Reality Check" },
  { to: "/programs", label: "Programs" },
  { to: "/results", label: "Results" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Connect" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="container-editorial flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={duofitLogo} alt="Duofit" className="h-12 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-base tracking-widest text-foreground uppercase">DUOFIT</span>
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase font-medium">Fitness · Nutrition · Healthy Habits</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors"
              activeProps={{ className: "text-sm font-medium uppercase tracking-widest text-foreground border-b-2 border-primary pb-0.5" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-sm bg-foreground text-background px-6 py-2.5 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors"
        >
          Start Journey
        </Link>

        <button aria-label="Toggle menu" className="md:hidden p-2" onClick={() => setOpen(v => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-editorial py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="text-base font-medium uppercase tracking-widest text-foreground/70 hover:text-foreground">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-sm bg-foreground text-background px-5 py-3 text-sm font-medium uppercase tracking-widest">
              Start Journey
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}