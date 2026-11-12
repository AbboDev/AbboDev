"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Zap,
  Server,
  CheckCircle2,
  Boxes,
  Code2,
  Layers,
  Palette,
  Database,
  Container,
  Network,
  Cpu,
  GitBranch,
  Gamepad2,
  Gauge,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate progress bars as they come into view
      const bars = gsap.utils.toArray<HTMLElement>(".skill-progress-bar");
      bars.forEach((bar) => {
        const targetWidth = bar.getAttribute("data-level") || "80%";
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: targetWidth,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategoryIdx]);

  const activeCategory = SKILL_CATEGORIES[selectedCategoryIdx];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-violet/20 bg-brand-violet/10 px-3.5 py-1 text-xs font-mono text-brand-violet mb-3">
          <Sparkles className="h-3 w-3" />
          <span>// 03. Technical Ecosystem</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Tools, Technologies &{" "}
          <span className="bg-gradient-to-r from-brand-violet via-brand-cyan to-emerald-400 bg-clip-text text-transparent">
            Superpowers
          </span>
        </h2>
        <p className="mt-4 text-slate-400 text-sm sm:text-base">
          A deeply rounded skill set refined for robust production software and
          fluid kinetic user experiences.
        </p>

        {/* Category Switcher Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategoryIdx(idx)}
              className={`rounded-xl px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategoryIdx === idx
                  ? "bg-gradient-to-r from-brand-violet to-brand-cyan text-white shadow-glow-violet scale-105"
                  : "bg-surface-50 border border-white/5 text-slate-400 hover:text-white hover:border-white/15"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Category Display */}
      <div className="rounded-3xl border border-white/10 bg-surface-50/60 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
        <div className="mb-8 pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              {activeCategory.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {activeCategory.description}
            </p>
          </div>
          <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full w-fit">
            {activeCategory.skills.length} Core Competencies
          </span>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-white/5 bg-surface-100/40 p-5 transition-all duration-300 hover:border-brand-violet/30 hover:bg-surface-100/70"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-brand-cyan group-hover:scale-110 group-hover:text-white transition-all">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      {skill.highlight}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-brand-violet">
                    {skill.level}%
                  </span>
                  {skill.badge && (
                    <div className="text-[10px] font-mono text-emerald-400">
                      [{skill.badge}]
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-800/80 mt-3">
                <div
                  className="skill-progress-bar h-full rounded-full bg-gradient-to-r from-brand-violet via-brand-cyan to-brand-fuchsia"
                  data-level={`${skill.level}%`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
