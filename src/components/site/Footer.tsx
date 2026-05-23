import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import duofitLogo from "../../assets/duofit-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-white/5">
      <div className="container-editorial py-20">
        <div className="grid lg:grid-cols-3 gap-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={duofitLogo} alt="Duofit" className="h-10 w-auto brightness-0 invert" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm tracking-widest text-background uppercase">DUOFIT</span>
                <span className="text-[10px] tracking-widest text-background/50 uppercase">Fitness · Nutrition · Healthy Habits</span>
              </div>
            </div>
            <p className="text-sm text-background/50 leading-relaxed max-w-xs">
              Sustainable health transformation engineered seamlessly into high-performance professional and family life.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">Navigation</h5>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/reality", label: "Reality Check" },
                { to: "/programs", label: "Programs" },
                { to: "/results", label: "Results" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Connect" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-background/60 hover:text-background transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">Connect</h5>
            <ul className="space-y-3">
              <li><a href="https://wa.me/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"><MessageCircle className="h-4 w-4" /> WhatsApp</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"><Instagram className="h-4 w-4" /> Instagram</a></li>
              <li><a href="mailto:hello@duofit.club" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"><Mail className="h-4 w-4" /> hello@duofit.club</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/30">
          <span>© {new Date().getFullYear()} DUOFIT. All rights reserved.</span>
          <span>Become Better Everyday</span>
        </div>
      </div>
    </footer>
  );
}