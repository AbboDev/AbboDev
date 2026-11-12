"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowDown,
  Sparkles,
  Terminal,
  Code2,
  Rocket,
  Layers,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -25, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.4"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          actionsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          statsRef.current?.children
            ? Array.from(statsRef.current.children)
            : [],
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        );

      // Bouncing scroll arrow
      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          y: 8,
          repeat: -1,
          yoyo: true,
          duration: 1.4,
          ease: "power1.inOut",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Floating Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 rounded-full border border-brand-violet/30 bg-surface-50/60 backdrop-blur-xl px-4 py-1.5 text-xs font-mono text-slate-300 shadow-glow-violet mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
          <span className="text-white font-medium">{PERSONAL_INFO.name}</span>
          <span className="text-slate-500">•</span>
          <span className="bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent font-semibold">
            {PERSONAL_INFO.handle}
          </span>
        </div>

        {/* Hero Title */}
        <h1
          ref={titleRef}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
        >
          Crafting{" "}
          <span className="bg-gradient-to-r from-brand-violet via-fuchsia-400 to-brand-cyan bg-clip-text text-transparent underline decoration-brand-cyan/30 underline-offset-8">
            Kinetic Motion
          </span>{" "}
          & Resilient Architectures.
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-10"
        >
          {PERSONAL_INFO.bio}
        </p>

        {/* Action Buttons */}
        <div
          ref={actionsRef}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-16"
        >
          <button
            onClick={() => handleScrollTo("#projects")}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-violet to-brand-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-glow-violet transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span>Explore Featured Work</span>
          </button>

          <button
            onClick={() => handleScrollTo("#lab")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-surface-50/70 backdrop-blur-md px-6 py-3.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-brand-violet/40 hover:bg-surface-100 hover:text-white"
          >
            <Layers className="h-4 w-4 text-brand-violet" />
            <span>Kinetic Blob Lab</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/5 bg-surface-50/40 backdrop-blur-md p-4 transition-all duration-300 hover:border-brand-violet/30 hover:bg-surface-100/60"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent group-hover:from-brand-violet group-hover:to-brand-cyan transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          ref={scrollIndicatorRef}
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("#about");
          }}
          className="mt-14 inline-flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <span>Scroll to explore</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <ArrowDown className="h-4 w-4 text-brand-cyan" />
          </div>
        </a>
      </div>
    </section>
  );
}
