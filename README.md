# Shrihari Pote — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS, set up in shadcn's
folder convention (`components/ui`, `lib/utils.ts`, `components.json`) so
you can drop in more shadcn components later with `npx shadcn@latest add <name>`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — the portfolio page (hero + projects + services + footer)
- `app/layout.tsx` — root layout, metadata
- `app/globals.css` — Tailwind + shadcn CSS variables
- `components/ui/sakura-editorial-poster.tsx` — the scroll-driven hero component
- `lib/utils.ts` — the `cn()` helper shadcn components expect
- `components.json` — shadcn CLI config

## Notes

- The hero (`SakuraEditorialPoster`) is a full scroll-jacked section — scroll
  down to see the title characters and copy panel animate in. It's already
  wired up with your name, chai-brewing venture, and services in `app/page.tsx`.
- Placeholder background/foreground images are pulled from the original
  component's asset host (`design-layer.com`). Swap `sceneSrc` /
  `foregroundSrc` props for your own images whenever you're ready —
  just drop files into `public/` and reference them as `/your-image.jpg`.
- Project card links (`#`) are placeholders — point them at live URLs or
  case study pages once you have them.
- Deploy for free on Vercel: `npx vercel` from this folder, or connect the
  GitHub repo at vercel.com/new.
