export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: "Full-Stack" | "Creative Tech" | "Open Source" | "Experiment";
  featured: boolean;
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage
    icon: string;
    badge?: string;
    highlight?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Thomas Abbondi",
  handle: "@AbboDev",
  role: "Full-Stack Architect & Creative Technologist",
  location: "Paris Timezone (CET / UTC+1)",
  availability: "Open for high-impact projects & collaborations",
  email: "abbodev@gmail.com",
  github: "https://github.com/AbboDev",
  bio: "Passionate developer crafting modern, high-performance web experiences. Merging clean backend architecture with fluid, kinetic frontend interfaces powered by Next.js, GSAP, and creative web technologies.",
  status: "Crafting digital experiences & exploring WebGL",
  stats: [
    {
      label: "Animation FPS Target",
      value: "60/120",
      sub: "Silky smooth motion",
    },
    {
      label: "Responsive Design",
      value: "100%",
      sub: "Mobile-first perfection",
    },
    { label: "Core Web Vitals", value: "99+", sub: "Speed & SEO prioritized" },
    { label: "Modern Stack", value: "Next.js", sub: "React 18 & TypeScript" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "kinetic-canvas-lab",
    title: "Kinetic Canvas & Fluid Dynamics",
    tagline: "GPU-accelerated interactive particle & generative art engine",
    description:
      "A real-time WebGL & Canvas physics playground with interactive particle fields, morphing organic contours, dynamic gravity wells, and GSAP-driven responsive tweens.",
    tags: ["GSAP", "HTML5 Canvas", "TypeScript", "WebGL", "Math Physics"],
    category: "Creative Tech",
    featured: true,
    metrics: "10,000+ particles at 60fps",
    githubUrl: "https://github.com/AbboDev",
    accentColor: "#a855f7",
  },
  {
    id: "cloud-scale-arch",
    title: "Full-Stack Microservices Suite",
    tagline: "High-throughput Node.js microservices with Docker orchestration",
    description:
      "Production-grade distributed system featuring event-driven architecture, resilient Redis caching, automated end-to-end Cypress pipelines, and containerized Docker environments.",
    tags: ["Node.js", "Docker", "PostgreSQL", "Redis", "Cypress", "Next.js"],
    category: "Full-Stack",
    featured: true,
    metrics: "<25ms p99 latency",
    githubUrl: "https://github.com/AbboDev",
    accentColor: "#06b6d4",
  },
  {
    id: "phaser-arcade-voyager",
    title: "Phaser 3 Odyssey Engine",
    tagline:
      "Hardware-accelerated web arcade and interactive spatial exploration",
    description:
      "Interactive 2D browser adventure powered by Phaser 3 and custom shader filters. Features collision physics, procedural level generation, and smooth mobile touch controls.",
    tags: ["Phaser 3", "JavaScript", "Game Dev", "Web Audio API", "Canvas"],
    category: "Experiment",
    featured: true,
    metrics: "Cross-platform mobile & desktop",
    githubUrl: "https://github.com/AbboDev",
    accentColor: "#ec4899",
  },
  {
    id: "threejs-spatial-showcase",
    title: "Three.js 3D Interactive Spatial Viewer",
    tagline:
      "Immersive 3D scene renderer with custom PBR lighting and post-processing",
    description:
      "Spatial 3D web experience experimenting with dynamic GLTF model loading, custom vertex shaders, bloom post-processing passes, and scroll-linked camera paths.",
    tags: ["Three.js", "React Three Fiber", "GLSL Shaders", "Vite", "Tailwind"],
    category: "Creative Tech",
    featured: true,
    metrics: "Smooth mobile WebGL fallback",
    githubUrl: "https://github.com/AbboDev",
    accentColor: "#f59e0b",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & Motion",
    description: "Kinetic, accessible, and ultra-responsive user interfaces",
    skills: [
      {
        name: "React & Next.js",
        level: 95,
        icon: "Atom",
        badge: "Expert",
        highlight: "App Router & SSR",
      },
      {
        name: "GSAP & ScrollTrigger",
        level: 92,
        icon: "Zap",
        badge: "Core",
        highlight: "Kinetic Choreography",
      },
      {
        name: "TypeScript",
        level: 90,
        icon: "Code2",
        badge: "Strong",
        highlight: "Strict Type Safety",
      },
      {
        name: "Tailwind CSS",
        level: 94,
        icon: "Palette",
        badge: "Fluid",
        highlight: "Glassmorphism & Utilities",
      },
      {
        name: "Three.js & Canvas API",
        level: 85,
        icon: "Boxes",
        badge: "Creative",
        highlight: "WebGL & Shader Math",
      },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Scalable APIs, database schemas, and microservice backbones",
    skills: [
      {
        name: "Node.js & Express/Nest",
        level: 92,
        icon: "Server",
        badge: "Core",
        highlight: "RESTful & Realtime",
      },
      {
        name: "PostgreSQL & Databases",
        level: 88,
        icon: "Database",
        badge: "Solid",
        highlight: "Optimized Queries",
      },
      {
        name: "Docker & Containers",
        level: 85,
        icon: "Container",
        badge: "Modern",
        highlight: "Multi-stage builds",
      },
      {
        name: "REST & GraphQL APIs",
        level: 90,
        icon: "Network",
        badge: "Standard",
        highlight: "High-throughput contracts",
      },
      {
        name: "Redis Caching",
        level: 82,
        icon: "Cpu",
        badge: "Fast",
        highlight: "Pub/Sub & Low latency",
      },
    ],
  },
  {
    title: "Quality, DevSecOps & Tools",
    description:
      "Automated testing, continuous delivery, and developer tooling",
    skills: [
      {
        name: "Cypress & E2E Testing",
        level: 88,
        icon: "CheckCircle2",
        badge: "Reliable",
        highlight: "Automated Test Suites",
      },
      {
        name: "Git & GitHub Workflows",
        level: 94,
        icon: "GitBranch",
        badge: "Seamless",
        highlight: "CI/CD Pipelines",
      },
      {
        name: "Phaser 3 Game Engine",
        level: 80,
        icon: "Gamepad2",
        badge: "Playful",
        highlight: "Arcade Physics",
      },
      {
        name: "Performance & Lighthouse",
        level: 95,
        icon: "Gauge",
        badge: "Optimum",
        highlight: "100 Web Vitals",
      },
    ],
  },
];

export const TIMELINE = [
  {
    period: "Present",
    title: "Full-Stack Developer & Creative Engineer",
    company: "AbboDev Lab",
    description:
      "Engineering high-performance web applications, interactive visual installations, and modern full-stack web platforms using Next.js, Node.js, and GSAP.",
  },
  {
    period: "Exploration & Growth",
    title: "Deepening Creative & Infrastructure Mastery",
    company: "Continuous Learning",
    description:
      "Expanded expertise into container orchestration with Docker, automated end-to-end testing with Cypress, and 3D web environments with Three.js and Phaser 3.",
  },
  {
    period: "Foundations",
    title: "Frontend & Modern Web Standards",
    company: "Web Crafting",
    description:
      "Mastered vanilla JavaScript, DOM performance optimization, SVG procedural morphing, and modern CSS architecture.",
  },
];
