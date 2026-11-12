"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function MorphingBlobBackground() {
  const blob1Ref = useRef<SVGSVGElement | null>(null);
  const blob2Ref = useRef<SVGSVGElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle organic float animation for top-right blob
      if (blob1Ref.current) {
        gsap.to(blob1Ref.current, {
          x: "+=25",
          y: "+=20",
          rotation: 8,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Subtle organic float animation for bottom-left blob
      if (blob2Ref.current) {
        gsap.to(blob2Ref.current, {
          x: "-=30",
          y: "-=25",
          rotation: -10,
          duration: 11,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Ambient pulsing glow
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.15,
          opacity: 0.65,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Central Ambient Glow */}
      <div
        ref={glowRef}
        className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-violet/20 via-brand-cyan/20 to-brand-fuchsia/15 blur-[130px] opacity-40 will-change-transform"
      />

      {/* Top Right Multi-Layer Organic SVG Blob */}
      <svg
        ref={blob1Ref}
        className="absolute -top-24 -right-24 w-[380px] sm:w-[540px] md:w-[700px] opacity-35 filter blur-[1px] will-change-transform"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad-blob-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f88f4a" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#d55e64" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4d345e" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="grad-blob-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#96446e" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#131f37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M685 180C750 256 790 357 775 458C760 559 690 660 592 706C494 752 368 743 268 693C168 643 94 552 64 445C34 338 48 215 116 137C184 59 306 26 424 38C542 50 620 104 685 180Z"
          fill="url(#grad-blob-1)"
        />
        <path
          d="M620 220C675 285 710 370 690 455C670 540 595 625 505 660C415 695 310 680 225 635C140 590 75 515 50 420C25 325 40 210 105 140C170 70 285 45 390 55C495 65 565 155 620 220Z"
          fill="url(#grad-blob-2)"
          opacity="0.7"
        />
      </svg>

      {/* Bottom Left Multi-Layer Organic SVG Blob */}
      <svg
        ref={blob2Ref}
        className="absolute -bottom-28 -left-28 w-[360px] sm:w-[500px] md:w-[680px] opacity-35 filter blur-[1px] will-change-transform"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad-blob-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#131f37" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#4d345e" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M125 620C65 540 25 440 45 340C65 240 145 140 240 95C335 50 445 60 540 110C635 160 715 250 740 355C765 460 735 580 660 655C585 730 465 760 355 750C245 740 185 700 125 620Z"
          fill="url(#grad-blob-3)"
        />
      </svg>
    </div>
  );
}
