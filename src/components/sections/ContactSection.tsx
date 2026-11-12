"use client";

import React, { useState } from "react";
import {
  Send,
  Mail,
  Github,
  Sparkles,
  MessageSquare,
  Check,
  ArrowUpRight,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#a855f7", "#06b6d4", "#ec4899", "#f59e0b"],
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bold Headline & Context (7 cols) */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-violet/20 bg-brand-violet/10 px-3.5 py-1 text-xs font-mono text-brand-violet mb-4">
            <Sparkles className="h-3 w-3" />
            <span>// 05. Let’s Connect</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Let’s build something{" "}
            <span className="bg-gradient-to-r from-brand-violet via-brand-cyan to-brand-fuchsia bg-clip-text text-transparent">
              spectacular
            </span>{" "}
            together.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            Whether you have a bold idea for an interactive web experience,
            require a seasoned full-stack architect to scale your
            infrastructure, or just want to talk creative code.
          </p>

          {/* Direct channels */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-50/60 backdrop-blur-md p-4 text-white hover:border-brand-violet/40 hover:bg-surface-100 transition-all group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-violet/10 text-brand-violet group-hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">
                  Direct Email
                </div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-white">
                  {PERSONAL_INFO.email}
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-500 ml-auto group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-50/60 backdrop-blur-md p-4 text-white hover:border-brand-cyan/40 hover:bg-surface-100 transition-all group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan group-hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">
                  GitHub Profile
                </div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-white">
                  github.com/AbboDev
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-500 ml-auto group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* Right Column: Quick Contact Form (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-surface-50/70 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="h-4 w-4 text-brand-cyan" />
              <h3 className="text-lg font-display font-semibold text-white">
                Send a Quick Message
              </h3>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Message Sent!
                </h4>
                <p className="text-xs text-slate-300">
                  Thanks for reaching out! I’ll get back to you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="Ada Lovelace"
                    className="w-full rounded-xl border border-white/10 bg-surface-100/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-violet focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="ada@example.com"
                    className="w-full rounded-xl border border-white/10 bg-surface-100/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-violet focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell me about your project, timeline, or thoughts..."
                    className="w-full rounded-xl border border-white/10 bg-surface-100/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-violet focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-violet to-brand-cyan py-3.5 text-sm font-semibold text-white shadow-glow-violet transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
