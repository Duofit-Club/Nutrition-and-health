import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import duofitLogo from "../../assets/duofit-logo.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-cream">
      <div className="container-editorial py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <img src={duofitLogo} alt="Duofit" className="h-12 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base tracking-widest text-foreground uppercase">DUOFIT</span>
              <span className="text-[10px] tracking-widest text-muted-foreground uppercase font-medium">Fitness · Nutrition · Healthy Habits</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Sustainable coaching for nutrition, movement, and the long, quiet work of building a healthier life.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Explore</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/programs" className="hover:text-primary">Programs</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Connect</p>
          <ul className="space-y-3 text-sm">
            <li><a href="mailto:hello@duofit.club" className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> hello@duofit.club</a></li>
            <li><a href="https://instagram.com" className="inline-flex items-center gap-2 hover:text-primary"><Instagram className="h-4 w-4" /> @duofit.club</a></li>
          </ul>
        </div>
      </div>
      <div className="container-editorial pb-10 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Duofit.club — Built with care.</p>
        <p>Sustainable fitness for real life.</p>
      </div>
    </footer>
  );
}