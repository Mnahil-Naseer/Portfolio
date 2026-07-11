# Mnahil Naseer — Portfolio

A premium, dark-themed developer portfolio built with **React 18 + Vite (JavaScript)**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/       # Navbar, Hero, About, Skills, Projects, Resume, Contact, Footer
    ui/              # Button, Pill, SectionHeading, StatCounter, BrandIcons
  data/              # projects.js, skills.js — edit these to update content
  index.css          # Tailwind layers + design tokens (glass, gradient, grid background)
  App.jsx
  main.jsx
public/
  Mnahil_Naseer_Resume.pdf   # placeholder — replace with your real resume (keep the filename)
  favicon.svg
```

## Customizing

- **Content**: edit `src/data/projects.js` and `src/data/skills.js`, plus the copy directly inside each component in `src/components/`.
- **Colors / fonts**: edit the `theme.extend` block in `tailwind.config.js` (colors: `violet`, `cyan`, `base`, `ink`) and the Google Fonts `<link>` in `index.html` (Space Grotesk / Inter / JetBrains Mono).
- **Resume**: drop your real PDF into `public/` as `Mnahil_Naseer_Resume.pdf`.
- **Contact form**: currently opens the visitor's email client via a `mailto:` link in `src/components/Contact.jsx`. Swap in Formspree/EmailJS/your own API if you want it to submit without leaving the page.

## Notes

- GitHub/LinkedIn icons are hand-drawn SVGs in `src/components/ui/BrandIcons.jsx` since `lucide-react` no longer ships brand/social icons.
- All animations respect `prefers-reduced-motion`.
