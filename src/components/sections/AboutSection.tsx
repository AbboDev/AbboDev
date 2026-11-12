"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Clock,
  MapPin,
  Sparkles,
  Copy,
  Check,
  Github,
  Zap,
  ShieldCheck,
  Cpu,
  Flame,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Live ticking time for Europe/Paris (CET)
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/Paris",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".bento-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-violet/20 bg-brand-violet/10 px-3.5 py-1 text-xs font-mono text-brand-violet mb-3">
          <Sparkles className="h-3 w-3" />
          <span>// 01. Origin & Philosophy</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Engineering with Purpose,{" "}
          <span className="bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent">
            Designing with Soul.
          </span>
        </h2>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          I bridge the gap between creative visual artistry and robust,
          production-grade software engineering.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card 1: Main Story (2 cols) */}
        <div className="bento-card md:col-span-2 lg:col-span-2 rounded-3xl border border-white/10 bg-surface-50/50 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-violet/30 transition-all duration-300 group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-cyan">
                Identity & Vision
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-violet/10 text-brand-violet">
                <Flame className="h-4 w-4" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3">
              Full-Stack Developer obsessed with kinetic precision
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Hi, I’m Thomas Abbondi (widely known as{" "}
              <span className="text-brand-cyan font-mono font-medium">
                @AbboDev
              </span>
              ). My journey started with experimenting on procedural SVG shapes
              and morphing paths, which evolved into orchestrating full-scale
              distributed microservices, Dockerized architectures, and cinematic
              web experiences.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Whether building resilient backend APIs or crafting buttery-smooth
              GSAP ScrollTrigger choreographies, I focus on zero-compromise
              performance, clean code patterns, and delightful touch
              responsiveness.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
            {[
              "Clean Architecture",
              "Zero-Jank Motion",
              "Type-Safety",
              "Developer Experience",
            ].map((pill) => (
              <span
                key={pill}
                className="text-xs font-mono rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-slate-300"
              >
                #{pill}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Live Time & Location */}
        <div className="bento-card rounded-3xl border border-white/10 bg-surface-50/50 backdrop-blur-xl p-6 flex flex-col justify-between hover:border-brand-cyan/30 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Location & Time
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-cyan">
                <MapPin className="h-4 w-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
              Paris, France
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Central European Time (UTC+1)
            </p>
          </div>

          <div className="rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-cyan animate-pulse" />
              <span className="text-xs font-mono text-slate-300">
                Local Time
              </span>
            </div>
            <span className="font-mono text-base font-bold text-brand-cyan">
              {time || "--:--:--"}
            </span>
          </div>
        </div>

        {/* Card 3: Quick Connect & Email */}
        <div className="bento-card rounded-3xl border border-white/10 bg-surface-50/50 backdrop-blur-xl p-6 flex flex-col justify-between hover:border-brand-violet/30 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Direct Contact
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                title="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
            <div className="text-lg font-semibold text-white mb-2">
              Have an idea or need an architect?
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Available for freelance consulting, full-stack builds, and
              creative motion engineering.
            </p>
          </div>

          <button
            onClick={handleCopyEmail}
            className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200 hover:border-brand-violet/40 hover:bg-white/10 transition-all active:scale-95"
          >
            <span className="font-mono truncate">{PERSONAL_INFO.email}</span>
            <span className="flex items-center gap-1 text-brand-violet font-semibold shrink-0">
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </span>
          </button>
        </div>

        {/* Card 4: Architecture Core Pillars (Full Width across 4 cols on lg) */}
        <div className="bento-card md:col-span-3 lg:col-span-4 rounded-3xl border border-white/10 bg-surface-50/40 backdrop-blur-xl p-6 sm:p-8">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
            // Core Engineering Pillars
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-violet/10 text-brand-violet border border-brand-violet/20">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white mb-1">
                  Kinetic Experience
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Smooth 60/120fps motion design powered by GSAP and Lenis.
                  Animations feel natural, purposeful, and never obstruct user
                  intent.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white mb-1">
                  Full-Stack Scalability
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Modern Node.js & Next.js backbones, optimized SQL schemas,
                  Docker orchestration, and Redis caching built to handle real
                  traffic.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-fuchsia/10 text-brand-fuchsia border border-brand-fuchsia/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white mb-1">
                  Battle-Tested Quality
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Strict TypeScript type safety, automated Cypress end-to-end
                  testing, and automated GitHub CI/CD workflows from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
