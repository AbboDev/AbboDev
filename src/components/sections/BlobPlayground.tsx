"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Sliders,
  RefreshCw,
  Copy,
  Check,
  Play,
  Pause,
} from "lucide-react";
import gsap from "gsap";

const BLOB_PATHS = [
  "M77.9 -94C106.7 -49 139.8 -24.5 142.6 2.7C145.3 29.9 117.5 59.9 88.7 81.9C59.9 103.9 29.9 117.9 3 114.9C-23.9 111.9 -47.7 91.7 -91.4 69.7C-135.1 47.7 -198.5 23.9 -211.6 -13.1C-224.6 -50 -187.3 -99.9 -143.6 -144.9C-99.9 -189.9 -50 -230 -12.7 -217.2C24.5 -204.5 49 -139 77.9 -94",
  "M125.7 -150.3C169.5 -113 216.2 -79.7 220.2 -41.2C224.1 -2.7 185.2 40.9 153.7 82.3C122.1 123.7 97.8 162.9 63.3 176.7C28.7 190.4 -16.1 178.9 -59.4 163.1C-102.7 147.3 -144.4 127.4 -166.8 93.8C-189.1 60.2 -192.1 12.9 -175.5 -22.2C-158.9 -57.4 -122.9 -80.4 -90.4 -119.7C-57.9 -158.9 -28.9 -214.5 6 -221.6C40.9 -228.8 81.8 -187.5 125.7 -150.3",
  "M157.4 -150.3C187.6 -127.3 184.3 -63.6 182.2 -2.1C180.1 59.4 179.1 118.8 149 130C118.8 141.3 59.4 104.4 4.9 99.5C-49.5 94.5 -99 121.5 -116 110.2C-133 99 -117.5 49.5 -103.9 13.6C-90.4 -22.4 -78.8 -44.8 -61.8 -67.8C-44.8 -90.8 -22.4 -114.4 20.6 -135C63.6 -155.6 127.3 -173.3 157.4 -150.3",
  "M187.1 -87.1C211.3 13.7 178.3 106.7 101.1 170.1C23.9 233.5 -97.4 267.2 -137.6 228.7C-177.9 190.2 -137.1 79.5 -100.6 -38.2C-64.2 -155.9 -32.1 -280.4 24.7 -288.5C81.5 -296.5 162.9 -187.9 187.1 -87.1",
];

const THEMES = [
  { name: "Neon Cyber", colors: ["#a855f7", "#06b6d4", "#ec4899"] },
  { name: "Sunset Fusion", colors: ["#f88f4a", "#d55e64", "#96446e"] },
  { name: "Solar Flame", colors: ["#f7770f", "#f7b10f", "#A7233A"] },
  { name: "Emerald Matrix", colors: ["#10b981", "#06b6d4", "#3b82f6"] },
];

export function BlobPlayground() {
  const [currentPathIdx, setCurrentPathIdx] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [speed, setSpeed] = useState(4);
  const [isPlaying, setIsPlaying] = useState(true);
  const [copied, setCopied] = useState(false);

  const pathRef = useRef<SVGPathElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Rotation and morph loop
  useEffect(() => {
    if (!isPlaying || !pathRef.current) return;

    const interval = setInterval(() => {
      setCurrentPathIdx((prev) => (prev + 1) % BLOB_PATHS.length);
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  useEffect(() => {
    if (pathRef.current) {
      gsap.to(pathRef.current, {
        attr: { d: BLOB_PATHS[currentPathIdx] },
        duration: speed * 0.8,
        ease: "power2.inOut",
      });
    }
  }, [currentPathIdx, speed]);

  useEffect(() => {
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        rotation: 360,
        duration: speed * 6,
        repeat: -1,
        ease: "none",
      });
    }
  }, [speed]);

  const handleCopyCode = () => {
    const codeSnippet = `<path d="${BLOB_PATHS[currentPathIdx]}" fill="url(#dynamicGrad)" />`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRandomize = () => {
    const nextIdx =
      (currentPathIdx +
        1 +
        Math.floor(Math.random() * (BLOB_PATHS.length - 1))) %
      BLOB_PATHS.length;
    setCurrentPathIdx(nextIdx);

    if (svgRef.current) {
      gsap.fromTo(
        svgRef.current,
        { scale: 0.9 },
        { scale: 1, duration: 0.5, ease: "back.out(2)" }
      );
    }
  };

  const currentColors = THEMES[selectedTheme].colors;

  return (
    <section
      id="lab"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-fuchsia/20 bg-brand-fuchsia/10 px-3.5 py-1 text-xs font-mono text-brand-fuchsia mb-3">
          <Sparkles className="h-3 w-3" />
          <span>// 04. Heritage & Evolution Lab</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Interactive{" "}
          <span className="bg-gradient-to-r from-brand-fuchsia via-brand-violet to-brand-cyan bg-clip-text text-transparent">
            Kinetic Blob Engine
          </span>
        </h2>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          An homage to the original SVG morph experiments of @AbboDev, rebuilt
          with modern GSAP interpolations, live gradient blending, and tactile
          controls.
        </p>
      </div>

      {/* Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-white/10 bg-surface-50/70 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
        {/* Blob Canvas Stage (Left 7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px] relative rounded-2xl bg-background/50 border border-white/5 overflow-hidden p-4">
          {/* Ambient stage glow */}
          <div
            className="absolute h-64 w-64 rounded-full blur-[90px] opacity-35 transition-colors duration-700"
            style={{ backgroundColor: currentColors[0] }}
          />

          <svg
            ref={svgRef}
            viewBox="0 0 600 600"
            className="w-full max-w-[340px] sm:max-w-[420px] aspect-square relative z-10 transition-transform"
          >
            <defs>
              <linearGradient
                id="blobLabGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={currentColors[0]} />
                <stop offset="50%" stopColor={currentColors[1]} />
                <stop offset="100%" stopColor={currentColors[2]} />
              </linearGradient>
              <filter
                id="glowFilter"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <g transform="translate(300, 300)">
              <path
                ref={pathRef}
                d={BLOB_PATHS[currentPathIdx]}
                fill="url(#blobLabGrad)"
                filter="url(#glowFilter)"
              />
            </g>
          </svg>

          {/* Morph status indicator */}
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full bg-surface-100/80 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-slate-300 border border-white/10">
            <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
            <span>
              Path Keyframe: 0{currentPathIdx + 1} / 0{BLOB_PATHS.length}
            </span>
          </div>
        </div>

        {/* Controls Panel (Right 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              <Sliders className="h-4 w-4 text-brand-cyan" />
              <span>Fluid Kinematics Control</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Real-Time Parametric Tweener
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Customize morph duration, cycling states, and dynamic gradient
              palettes.
            </p>
          </div>

          {/* Theme Palette Buttons */}
          <div>
            <label className="text-xs font-mono text-slate-300 block mb-2">
              Select Color Palette:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {THEMES.map((theme, idx) => (
                <button
                  key={theme.name}
                  onClick={() => setSelectedTheme(idx)}
                  className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-xs font-medium transition-all ${
                    selectedTheme === idx
                      ? "border-brand-violet bg-brand-violet/15 text-white"
                      : "border-white/5 bg-surface-100/40 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="flex -space-x-1">
                    {theme.colors.map((c, i) => (
                      <span
                        key={i}
                        className="h-3.5 w-3.5 rounded-full border border-background"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <span className="truncate">{theme.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Speed Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono text-slate-300 mb-2">
              <span>Transition Period:</span>
              <span className="text-brand-cyan font-bold">{speed}s</span>
            </div>
            <input
              type="range"
              min="1.5"
              max="7"
              step="0.5"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="w-full accent-brand-violet cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
          </div>

          {/* Play/Pause & Randomize Actions */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-all active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3.5 w-3.5 text-brand-amber" />
                  <span>Pause Motion</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 text-brand-emerald" />
                  <span>Resume Motion</span>
                </>
              )}
            </button>

            <button
              onClick={handleRandomize}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-violet to-brand-cyan py-2.5 text-xs font-semibold text-white shadow-glow-violet transition-all hover:scale-105 active:scale-95"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Morph Next</span>
            </button>
          </div>

          {/* Copy SVG Snippet */}
          <button
            onClick={handleCopyCode}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-surface-100/50 p-3 text-xs text-slate-300 hover:border-brand-violet/40 transition-colors"
          >
            <span className="font-mono text-slate-400">Copy SVG Element</span>
            <span className="flex items-center gap-1.5 text-brand-cyan font-semibold">
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
