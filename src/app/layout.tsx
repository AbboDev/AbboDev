import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thomas Abbondi (@AbboDev) — Creative Full-Stack Architect",
  description:
    "Portfolio of Thomas Abbondi (AbboDev). Kinetic motion experiences, resilient full-stack architectures, Next.js, GSAP, and creative web engineering.",
  keywords: [
    "Thomas Abbondi",
    "AbboDev",
    "Full-Stack Developer",
    "Creative Technologist",
    "GSAP",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Three.js",
    "Docker",
  ],
  authors: [{ name: "Thomas Abbondi", url: "https://github.com/AbboDev" }],
  creator: "Thomas Abbondi",
  openGraph: {
    title: "Thomas Abbondi (@AbboDev) — Creative Full-Stack Architect",
    description:
      "Kinetic motion design, resilient distributed systems, and modern creative web applications.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#040711",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-background font-sans text-slate-100 antialiased selection:bg-brand-violet/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
