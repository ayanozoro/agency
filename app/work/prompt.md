# Agency Work Section Prompt

## Overview
The Work section is a dedicated portfolio route (`/work`) that showcases the agency's best projects. It features a dark, immersive layout with smooth transitions and a featured case-study page for the Orbis.Nft landing page.

## Routes
- `/work` — Main portfolio grid
- `/work/orbis-nft` — Full Orbis.Nft landing page case study

## Design System
- **Background**: `black` (main portfolio), `#010828` (Orbis.Nft)
- **Text**: White / white/85, white/35 for secondary
- **Accent**: `#ef4d23` (agency brand), `#6FFF00` neon (Orbis.Nft)
- **Max width**: `max-w-6xl` for portfolio, `max-w-[1831px]` for Orbis.Nft
- **Fonts**: Inter (body), Anton (Orbis headings), Condiment (Orbis accents), monospace (Orbis body)

## Portfolio Page (`/work`)

### Hero
- Full-viewport or large hero with "selected work" label
- Large headline: "work that speaks for itself."
- Subtitle describing the agency's project approach

### Project Grid
- 1–2 column responsive grid
- Each card: background image, gradient overlay, project metadata
- Hover: image scales down slightly, opacity increases
- Tags, year, category, outcome stats
- Featured project (Orbis.Nft) gets prominent placement

### Data Structure
Each project includes:
- `id`, `client`, `title`, `category`, `description`
- `result`, `year`, `tags[]`, `image`, `color`, `slug`

## Orbis.Nft Case Study (`/work/orbis-nft`)

### Theme
Dark space theme with deep navy background (`#010828`), cream text (`#EFF4FF`), and neon green accents (`#6FFF00`).

### Fonts
- **Anton** — Headings, navigation (Tailwind: `font-anton`)
- **Condiment** — Cursive accent text (Tailwind: `font-condiment`)
- **Monospace** — Body/description paragraphs (Tailwind: `font-mono`)

### Liquid Glass UI
Applied via `.liquid-glass` class:
- Navbar, social buttons, NFT cards, card overlays
- Uses `backdrop-filter: blur(4px)` with gradient border pseudo-element

### Sections
1. **Hero** — Full-viewport looping video background, liquid-glass nav, large Anton heading with Condiment accent, social icons
2. **About / Intro** — Full-viewport looping video, heading + decorative paragraphs
3. **NFT Collection Grid** — Solid background, liquid-glass cards with square video containers, rarity score overlays, purple gradient CTA buttons
4. **CTA / Final** — Full-width video (native aspect ratio), absolute-positioned text overlay, bottom-left social icons

### Videos
All videos are served from CloudFront with `autoPlay loop muted
