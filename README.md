# Portfolio — Awal Lasisi

A personal developer portfolio: a single-page, dark-themed React site with an animated preloader, custom cursor, magnetic buttons, scroll reveals, an infinite marquee and a project showcase.

Built as a **single self-contained HTML file** — `vite-plugin-singlefile` inlines the JS and CSS into `dist/index.html`, so the build output can be hosted anywhere (GitHub Pages, Netlify, Vercel, or even opened locally) with no server.

## Highlights

- **Preloader → page reveal** — `AnimatePresence` swaps the intro loader for the site once fonts/content are ready.
- **Custom cursor** — a lightweight cursor follower that reacts on hover over interactive elements.
- **Magnetic hover** — buttons and links subtly pull toward the pointer.
- **Scroll reveals** — sections animate in as they enter the viewport.
- **Project cards** — stacked editorial cards with per-project tint, tags and live thumbnails.
- **Film grain overlay** — a fixed, pointer-events-none grain layer over the whole page for texture.
- **Type-led design** — Syne (display), Space Grotesk (body) and JetBrains Mono (accents) via Google Fonts, with a custom Tailwind theme (`ink` / `paper` / accent orange).

## Tech stack

| Layer     | Choice                                        |
| --------- | --------------------------------------------- |
| Framework | React 19 + TypeScript                         |
| Build     | Vite 7 (`@vitejs/plugin-react`)               |
| Styling   | Tailwind CSS 4 (`@tailwindcss/vite`)          |
| Animation | Framer Motion                                 |
| Icons     | lucide-react                                  |
| Utilities | `clsx` + `tailwind-merge` (`src/utils/cn.ts`) |
| Output    | `vite-plugin-singlefile`                      |

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # -> dist/index.html (single file)
npm run preview   # serve the production build locally
```

Requires Node 18+ (Node 20+ recommended).

## Project structure

```
├── index.html                  # fonts, meta, favicon
├── vite.config.ts              # react + tailwind + singlefile plugins, "@" alias
└── src
    ├── main.tsx                # React entry point
    ├── App.tsx                 # layout + preloader state
    ├── data.ts                 # projects, skills, marquee items, social URLs
    ├── index.css               # Tailwind theme, fonts, grain
    ├── components
    │   ├── Preloader.tsx       # animated intro loader
    │   ├── Cursor.tsx          # custom cursor
    │   ├── Navbar.tsx          # sticky navigation
    │   ├── Hero.tsx            # hero section
    │   ├── Marquee.tsx         # infinite skill ticker
    │   ├── Projects.tsx        # project showcase
    │   ├── About.tsx           # about + skills
    │   ├── Contact.tsx         # contact section
    │   ├── Footer.tsx          # footer
    │   ├── Reveal.tsx          # scroll-reveal wrapper
    │   ├── Magnetic.tsx        # magnetic hover wrapper
    │   └── icons.tsx           # inline SVG icons
    └── utils/cn.ts             # class-name merge helper
```

## Customising

Nearly all content lives in **`src/data.ts`**:

- `PROJECTS` — index, title, category, description, tags, live `url`, `screenshot` and accent `tint`
- `SKILLS` — name and level (0–100)
- `MARQUEE_ITEMS` — words shown in the scrolling ticker
- `GITHUB_URL` / `LINKEDIN_URL` — social links

Colours, fonts and the grain texture are defined in `src/index.css`; page title, description and favicon are in `index.html`.

## Featured work

1. **Berserk — The Complete Guide** — interactive editorial
2. **Awal — Landscape Studio** — studio landing page
3. **Ember & Oak** — hospitality website
4. **Mindful Notes** — full-stack blog app (CRUD + search)

## License

Private project — all rights reserved.
