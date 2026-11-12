"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowRight,
  Layers,
  Flame,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const horizontalTrackRef = useRef<HTMLDivElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Creative Tech", "Full-Stack", "Experiment"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Desktop: Horizontal Scroll Scrub pinned
    mm.add("(min-width: 1024px)", () => {
      const track = horizontalTrackRef.current;
      const trigger = triggerRef.current;
      if (!track || !trigger) return;

      const totalScroll = track.scrollWidth - window.innerWidth + 120;

      const tween = gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    // Mobile & Tablet: Gentle scroll trigger animations for vertical cards
    mm.add("(max-width: 1023px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".mobile-project-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, [activeCategory]);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 sm:py-32">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-3.5 py-1 text-xs font-mono text-brand-cyan mb-3">
              <Sparkles className="h-3 w-3" />
              <span>// 02. Curated Architecture & Labs</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Featured{" "}
              <span className="bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-fuchsia bg-clip-text text-transparent">
                Works & Experiments
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
              From hardware-accelerated canvas simulations to production
              distributed microservices.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-mono font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-brand-violet to-brand-cyan text-white shadow-glow-violet"
                    : "bg-surface-50 border border-white/5 text-slate-400 hover:text-white hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Scroll Container (pinned on desktop) */}
      <div ref={triggerRef} className="hidden lg:block overflow-hidden">
        <div
          ref={horizontalTrackRef}
          className="flex gap-8 pl-12 sm:pl-20 pr-32 w-max items-center min-h-[580px]"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative w-[480px] shrink-0 rounded-3xl border border-white/10 bg-surface-50/70 backdrop-blur-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:border-white/25 hover:shadow-2xl"
              style={{
                boxShadow: `0 20px 50px -15px ${project.accentColor}25`,
              }}
            >
              {/* Top Accent Gradient Bar */}
              <div
                className="absolute top-0 left-8 right-8 h-1 rounded-b-full opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: project.accentColor }}
              />

              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5"
                    style={{ color: project.accentColor }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    0{index + 1} / 0{filteredProjects.length}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4 line-clamp-1">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics Pill */}
                {project.metrics && (
                  <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-mono text-brand-cyan">
                    <Flame className="h-3.5 w-3.5 text-brand-violet" />
                    <span>{project.metrics}</span>
                  </div>
                )}
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono rounded-md bg-white/5 px-2.5 py-1 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.githubUrl || "https://github.com/AbboDev"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.githubUrl || "https://github.com/AbboDev"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-all hover:gap-2"
                  >
                    <span>View Project</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Vertical Layout (Optimized for touch and smooth scroll) */}
      <div className="block lg:hidden max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="mobile-project-card group relative rounded-3xl border border-white/10 bg-surface-50/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between"
              style={{
                boxShadow: `0 15px 35px -10px ${project.accentColor}20`,
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5"
                    style={{ color: project.accentColor }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-mono text-brand-cyan">
                    <Flame className="h-3.5 w-3.5 text-brand-violet" />
                    <span>{project.metrics}</span>
                  </div>
                )}
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono rounded-md bg-white/5 px-2 py-0.5 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.githubUrl || "https://github.com/AbboDev"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source</span>
                  </a>

                  <a
                    href={project.githubUrl || "https://github.com/AbboDev"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-all"
                  >
                    <span>Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
