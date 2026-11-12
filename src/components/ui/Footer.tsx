"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Terminal, Heart, Code2 } from "lucide-react";

export function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <footer className="relative border-t border-white/10 bg-background/80 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-violet to-brand-cyan text-white shadow-glow-violet">
            <Terminal className="h-4 w-4" />
          </div>
          <div>
            <div className="font-display font-semibold text-white text-sm">
              Thomas Abbondi{" "}
              <span className="text-slate-400 font-mono text-xs">
                (@AbboDev)
              </span>
            </div>
            <div className="text-xs text-slate-400">
              Designed & engineered with Next.js, Tailwind & GSAP
            </div>
          </div>
        </div>

        {/* Center: Tech tags */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
          <span>Hosted on GitHub Pages</span>
        </div>

        {/* Back to top button with circular SVG progress */}
        <button
          onClick={scrollToTop}
          className="group relative flex items-center justify-center h-12 w-12 rounded-full bg-surface-50 border border-white/10 hover:border-brand-violet/40 transition-colors shadow-lg"
          aria-label="Scroll back to top"
        >
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 44 44"
          >
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2.5"
            />
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>
          <ArrowUp className="h-4 w-4 text-slate-300 group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
        </button>
      </div>
    </footer>
  );
}
