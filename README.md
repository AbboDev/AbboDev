# Thomas Abbondi (@AbboDev) — Portfolio

> Spectacular, kinetic portfolio engineered with **Next.js 14**, **Tailwind CSS**, **GSAP 3 (ScrollTrigger)**, and **Lenis Smooth Scroll**, fully responsive and optimized for mobile and desktop.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![GSAP](https://img.shields.io/badge/GSAP-3.12-green?style=for-the-badge&logo=greensock)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=for-the-badge&logo=typescript)

---

## ⚡ Features & Motion Architecture

- **Lenis + GSAP Scroll Synchronization**: Smooth momentum scrolling with Lenis tethered directly to the GSAP animation ticker and `ScrollTrigger.update()`.
- **Spectacular Hero Section**: Multi-layer organic morphing SVG gradients (the modern evolution of the original morphing blob) with interactive particle constellation canvas.
- **ScrollTrigger Pinned Showcase**: Pinned horizontal scrub showcase on desktop, seamlessly adapting to a touch-optimized stacked card layout on mobile devices via `ScrollTrigger.matchMedia`.
- **Interactive Bento Grid**: Dynamic Europe/Paris (CET) live ticking clock, architecture pillars, and one-click email copy.
- **Parametric Kinetic Blob Evolution Lab**: Real-time interactive SVG morphing sandbox with controllable transition period, 4 radiant color themes, pause/resume, and instant SVG snippet export.
- **Celebratory Interactive Contact Form**: Responsive contact module featuring celebratory confetti bursts (`canvas-confetti`) and direct social connections.
- **Mobile-First Touch Architecture**: Custom GSAP mobile drawer menu, non-blocking touch gestures, zero-jank 60/120fps animations.

---

## 🛠️ Local Development

```bash
# Use the pinned Node.js version (via nvm)
nvm use

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site in your browser.

---

## 🚀 Building & GitHub Pages Deployment

The project is preconfigured for static export (`output: 'export'`) in `next.config.mjs` and includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Automatic Deployment (GitHub Actions)

1. Push your changes to `main` or `master`.
2. In your GitHub repository settings, go to **Settings > Pages > Build and deployment**.
3. Under **Source**, select **GitHub Actions**.
4. GitHub Actions will automatically build the project and deploy the static site to GitHub Pages!

### Manual Build

```bash
pnpm build
```

The static HTML, CSS, and JS bundles will be generated in the `out/` directory with `.nojekyll` included.
