"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Terminal, ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Evolution Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
      gsap.fromTo(
        menuItemsRef.current.filter(Boolean),
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`mx-auto flex items-center justify-between rounded-full border transition-all duration-300 px-4 sm:px-6 py-2.5 ${
              scrolled
                ? "bg-surface-50/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-brand-violet/5"
                : "bg-surface-50/40 backdrop-blur-md border-white/5"
            }`}
          >
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex items-center gap-2.5 text-slate-100 font-display font-semibold tracking-wide text-lg"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-violet to-brand-cyan text-white shadow-glow-violet transition-transform duration-300 group-hover:scale-110">
                <Terminal className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan"></span>
                </span>
              </div>
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-brand-violet group-hover:to-brand-cyan transition-colors">
                AbboDev
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-brand-violet to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </div>

            {/* Right Side: Status Badge & CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for hire
              </div>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-brand-violet to-brand-cyan p-px font-medium text-xs tracking-wide text-white transition-all duration-300 hover:shadow-glow-violet active:scale-95"
              >
                <span className="inline-flex items-center gap-1 rounded-full bg-surface-50 px-4 py-1.5 transition-colors duration-300 group-hover:bg-opacity-0">
                  <Sparkles className="h-3 w-3 text-brand-cyan group-hover:text-white" />
                  <span>Get in Touch</span>
                </span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 flex flex-col justify-between bg-background/95 backdrop-blur-2xl px-6 pt-28 pb-10 md:hidden"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-mono">
              // Navigation
            </p>
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.label}
                  ref={(el) => {
                    menuItemsRef.current[idx] = el;
                  }}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-surface-50/50 p-4 text-lg font-medium text-slate-200 hover:border-brand-violet/40 hover:bg-surface-100 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-5 w-5 text-brand-cyan" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs text-emerald-400 w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for high-impact projects
            </div>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-violet to-brand-cyan py-3.5 font-semibold text-white shadow-glow-violet text-sm"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      )}
    </>
  );
}
