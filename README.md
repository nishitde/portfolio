# nishitde.com

Personal site — a single scrolling page built to read like a deck: four
full-height sections, keyboard paging, and scroll-triggered reveals.

Next.js (App Router) · TypeScript · CSS Modules · statically exported.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

## Checks

```bash
npm run lint         # eslint, including jsx-a11y
npm run typecheck    # tsc --noEmit
npm run format       # prettier --write .
npm run build        # production build + static export to out/
```

## Editing content

Everything on the page comes from `content/`. Adding a role or changing a
link is a data edit, not a JSX edit:

| File                  | What it holds                                      |
| --------------------- | -------------------------------------------------- |
| `content/site.ts`     | Name, tagline, location, résumé link, section list |
| `content/timeline.ts` | Education and work history (last entry = current)  |
| `content/socials.ts`  | GitHub / LinkedIn / email rows                     |

The résumé buttons point at `public/resume.pdf`. Drop the PDF there.

## Design tokens

`app/globals.css` holds the palette, the fluid type scale, spacing, and the
motion easing as custom properties. `components/deck.module.css` is the one
stylesheet the deck and all four sections share. Changing the accent colour
or section padding is a one-line edit at the top of `globals.css`.

## Motion

`lib/useDeckMotion.ts` drives active-section tracking, arrow-key paging
between sections, the scroll reveals, and the hero parallax. Everything it
does is additive: with JavaScript disabled the page is a plain, fully
readable scrolling document, and it all switches off under
`prefers-reduced-motion: reduce`.

## Deploying

`npm run build` produces a fully static `out/` directory, so the site runs
on any static host. On **Vercel**, import the repo — no configuration
needed.
