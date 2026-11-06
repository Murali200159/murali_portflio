# Murali Krishna — Personal Developer Portfolio

A minimal, quiet, and confident developer portfolio designed with an editorial aesthetic. Built with React, TypeScript, Vite, and Tailwind CSS.

---

## ✦ Table of Contents

- [Overview](#overview)
- [How to Edit Your Content](#how-to-edit-your-content)
- [Setting Up the Contact Form](#setting-up-the-contact-form)
- [Updating Your Profile Photo & Resume](#updating-your-profile-photo--resume)
- [Local Development](#local-development)
- [Building for Production](#building-for-production)
- [Deploying to GitHub Pages, Vercel, or Netlify](#deploying-to-github-pages-vercel-or-netlify)
- [Design Tokens & Customization](#design-tokens--customization)

---

## ✦ Overview

This portfolio is handcrafted to prioritize content clarity, typography, and accessibility without relying on flashy templates, glassmorphism, or heavy animation libraries.

- **Fast & Lightweight**: Under 65 kB total gzipped bundle size.
- **Single Source of Truth**: All text, projects, links, skills, and dates are editable from one file (`src/data/content.ts`).
- **Accessible (WCAG AA)**: Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`), keyboard skip links, focus traps, and high-contrast color ratios.
- **Editorial Layouts**: Asymmetric 12-column grids, typographic project placeholders, and responsive breakpoints.

---

## ✦ How to Edit Your Content

You never need to edit JSX components to update your information. **All content is strictly consolidated inside `src/data/content.ts`**.

Open `src/data/content.ts` in your code editor:

```typescript
export const content: PortfolioContent = {
  meta: { ... },         // SEO title, meta description, and canonical URL
  navigation: { ... },   // Monogram ("MK") and section navigation items
  hero: { ... },         // Hero greeting, name, role badges, bio tagline, and location
  about: { ... },        // 2–3 editorial paragraphs describing your background
  skills: { ... },       // Categorized technical skill lists (Programming, AI/ML, etc.)
  experience: { ... },   // Professional experience, company name, dates, bullet points
  projects: { ... },     // Featured projects (Problem, Solution, Contributions, Tech)
  education: { ... },    // Academic degrees, universities, and graduation years
  contact: { ... },      // Email, LinkedIn, GitHub, and contact form endpoint
  footer: { ... },       // Name and copyright year
};
```

### Hiding or Showing Project Links
- If a project's `demoUrl` or `githubUrl` is empty or starts with `"TODO"`, the action button will automatically be hidden.
- When you are ready to publish a project, replace `"TODO: add live demo URL"` with your real URL (e.g., `"https://ai-assistant.demo.com"`). The button will appear automatically.
- No buttons ever link to dead `#` anchors.

---

## ✦ Setting Up the Contact Form

The contact form is wired to send real messages through [Formspree](https://formspree.io) without requiring a backend server:

1. Create a free account at [Formspree](https://formspree.io).
2. Click **+ New Form**, give it a name (e.g. "Portfolio Contact"), and copy your Form endpoint URL (e.g., `https://formspree.io/f/mqkenyzp`).
3. Open `src/data/content.ts` and locate the `contact` block:
   ```typescript
   contact: {
     ...
     formEndpoint: "https://formspree.io/f/YOUR_ACTUAL_FORMSPREE_ID",
   }
   ```
4. Save the file. Any submissions will immediately be routed directly to your email with built-in spam honeypot filtering.

---

## ✦ Updating Your Profile Photo & Resume

### Profile Photo
1. Place your portrait photo inside the `public/` folder (e.g., `public/profile.jpg` or `public/profile.webp`).
2. In `src/data/content.ts`, update `hero.photo.src`:
   ```typescript
   photo: {
     src: "/profile.jpg",
     alt: "Murali Krishna - Python & AI/ML Engineer",
   }
   ```

### Resume PDF
1. Place your actual resume file in the `public/` directory named `resume.pdf`.
2. When visitors click **Download Resume**, the browser will automatically download your file.

---

## ✦ Local Development

To run the site locally in development mode:

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the local Vite server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## ✦ Building for Production

To create an optimized, production-ready build:

```bash
npm run build
```

This compiles your TypeScript and bundles the CSS and JavaScript into the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## ✦ Deploying to GitHub Pages, Vercel, or Netlify

### Deploy to Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework preset: **Vite**.
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/<your-repo-name>/'` (if not using a custom domain).
2. Run `npm run build` and deploy the contents of `dist/` to the `gh-pages` branch.

---

## ✦ Design Tokens & Customization

The color scheme and typography are controlled by design tokens in `src/index.css` and `tailwind.config.js`:

- **Canvas Background**: `#F6F3EE` (warm off-white)
- **Surface**: `#EFECE5` (subtle stone)
- **Text Primary**: `#1C1C1A` (charcoal, 14.8:1 contrast)
- **Text Muted**: `#585753` (slate, 6.2:1 contrast)
- **Accent**: `#B84A39` (muted terracotta)

