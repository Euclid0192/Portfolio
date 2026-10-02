# Nam Nguyen's portfolio

A React 18 / Vite portfolio using Tailwind CSS and self-hosted Excalifont.

## Development

```sh
npm ci
npm run dev
```

The development server runs on port 3000. `npm run build` creates the production site in `dist`; `npm run preview` serves that build locally.

## Pages

The shared sticky navigation links to Home (`/`), About (`/about`), Languages (`/languages`), Projects (`/projects`), Experience (`/experience`), and Contacts (`/contacts`). On small screens, the current section appears beside the Menu button. Page headings remain available to screen readers without duplicating the navigation visually.

Home includes an interactive terminal supporting `ls`, `ls Projects`, `ls Experiences`, `cd <section>`, `whoami`, `help`, and `clear`, with arrow-key command history. Folder names are case-insensitive and accept a trailing slash; `cd Experiences` also opens the Experience page. Project and experience lists share their data with the corresponding pages.

About uses a Polaroid photo frame and updated biography. Projects features Treverse first with a star badge. Experience displays seven roles on a timeline with scroll-reveal cards and a radiating first dot. Contacts includes Email, Messenger, and LinkedIn alongside the existing message form. Cards use transparent glass hover effects.

Old section links still work: `/#about`, `/#experience`, `/#portfolio`, and `/#contact` resolve to their corresponding pages; the old Experience hash resolves to Languages because it previously contained skills.

## Styling and font

Use Tailwind utilities for all presentation. Shared layout, heading, button, and card primitives live in `src/components/ui.jsx`. `src/index.css` contains only Tailwind's import and theme tokens plus the required font-face declaration. The footer is converted to Tailwind but remains disabled.

The technology galaxy displays 60 technologies on five rings using Tailwind's 3D transforms and built-in spin animation, with a data-driven angle variable distributing the logos along each ring. Counter-rotation keeps logos upright. Category filters isolate and enlarge a ring; logos respond to hover, tap, and keyboard focus while continuing to orbit. The speed slider adjusts rotation from 0.25× to 3×, defaulting to 2×, and the pause control stops motion. The center sun has a pulsing glow and expanding heat rings. Reduced-motion preferences disable rotation and heat motion. Logos are served locally from `public/technology`; source URLs, licenses, and the four generic symbol substitutions are recorded alongside the assets.

Excalifont is served from `public/fonts/Excalifont-Regular.woff2`, the official Excalidraw Latin subset (`Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2`). Other glyphs fall back to the system sans-serif font. Copyright (c) 2024 Excalidraw; distributed under the SIL Open Font License 1.1. The full license is in `public/fonts/OFL.txt`.

Source: https://github.com/excalidraw/excalidraw/tree/master/packages/excalidraw/fonts/Excalifont

## Render deployment

Keep the existing Render service and its deployment from `main`. Build command: `npm ci && npm run build`. Publish directory: `dist`.

Before merging `feat/redesign`, verify this rule under the existing static site's **Redirects/Rewrites** settings:

| Source | Destination | Action |
| --- | --- | --- |
| `/*` | `/index.html` | Rewrite |

Render serves existing assets normally. The rewrite enables direct requests and refreshes for browser routes such as `/projects`. This dashboard setting is not configured by merging this repository. If the service already has the rule, no change is needed.

After deployment, directly open and refresh all six routes and verify that fonts and images load. See https://render.com/docs/redirects-rewrites.

The existing EmailJS service, template, field names, and submission behavior are preserved.
