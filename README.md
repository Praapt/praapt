# Praapt Donor Site

Static marketing + donor portal for [Praapt](https://praapt.org) — a prepaid meal entitlement platform for India. Every meal is biometrically verified and cryptographically traceable.

## Stack

- **React 18** + TypeScript
- **Vite 5**
- **Tailwind CSS v4** (via `@tailwindcss/vite`, no PostCSS config needed)
- **React Router v7**
- **lucide-react** for icons
- **Google Fonts** — Inter

## Prerequisites

- Node.js ≥ 18
- [pnpm](https://pnpm.io) — `npm install -g pnpm`

## Setup

```bash
# Clone and install
git clone <repo-url>
cd praapt_org
pnpm install
```

## Dev server

```bash
pnpm dev
# → http://localhost:5173
```

## Build

```bash
pnpm build
# Output: dist/
```

## Preview production build

```bash
pnpm preview
# → http://localhost:4173
```

## Project structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Router setup
├── index.css             # Design tokens (CSS variables) + Tailwind
├── layouts/
│   ├── PublicLayout.tsx  # Sticky nav + footer (marketing pages)
│   └── DashboardLayout.tsx  # Indigo sidebar (donor dashboard)
├── components/
│   ├── Nav.tsx           # Top navigation bar
│   ├── Footer.tsx        # Site footer
│   └── LiveTicker.tsx    # Pulsing live stats bar
└── pages/
    ├── Home.tsx          # Landing page
    ├── HowItWorks.tsx    # 5-step process
    ├── Impact.tsx        # Programme metrics
    ├── Team.tsx          # Team bios
    ├── Nutrition.tsx     # Meal catalogue
    ├── Login.tsx         # Magic-link sign in
    ├── Give.tsx          # 5-step donation form
    ├── YourImpact.tsx    # Donor dashboard + redemption ledger
    ├── Receipts.tsx      # Form 10BE / FCRA tax receipts
    ├── Account.tsx       # Donor profile settings
    └── ComingSoon.tsx    # 404 / placeholder
```

## Routes

| Path | Page | Layout |
|------|------|--------|
| `/` | Home | Public |
| `/how-it-works` | How It Works | Public |
| `/impact` | Impact | Public |
| `/team` | Team | Public |
| `/nutrition` | Meal Catalogue | Public |
| `/login` | Login | Public |
| `/give` | Fund a Pool (5-step form) | Dashboard |
| `/your-impact` | Donor Dashboard | Dashboard |
| `/receipts` | Tax Receipts | Dashboard |
| `/account` | Account Settings | Dashboard |

## Design tokens

Defined as CSS custom properties in `src/index.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--indigo` | `#243b6b` | Primary brand, nav, buttons |
| `--amber` | `#b7791f` | Eyebrow labels, accents |
| `--teal` | `#1f7a77` | Live indicators, success states |
| `--charcoal` | `#1d232e` | Headings, body text |
| `--gray` | `#6b7280` | Secondary text |
| `--canvas` | `#f6f1e8` | Page background |
| `--canvas-alt` | `#ede8df` | Alternating section background |

## Deployment

The build output in `dist/` is a standard SPA — deploy to any static host:

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --dir=dist --prod

# GitHub Pages (with base path)
# Set base: '/repo-name/' in vite.config.ts first
```

For SPA routing to work, configure your host to serve `index.html` for all routes (e.g. Netlify `_redirects`: `/* /index.html 200`).
