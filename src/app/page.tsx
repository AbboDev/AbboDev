"use client";

import React from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { InteractiveCanvas } from "@/components/ui/InteractiveCanvas";
import { MorphingBlobBackground } from "@/components/ui/MorphingBlobBackground";
import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { BlobPlayground } from "@/components/sections/BlobPlayground";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/ui/Footer";

export default function HomePage() {
  // Initialize Lenis smooth scroll and synchronize with GSAP ScrollTrigger
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Ambience & Canvas Particles */}
      <MorphingBlobBackground />
      <InteractiveCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <BlobPlayground />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
