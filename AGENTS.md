# Ginkgo Yoga Studio — Repository Notes

## Stack
- Next.js 14 (App Router), React 19, TypeScript, Tailwind CSS 3
- `next build` produces a static export (single `/` route + `_not-found`)
- UI: Radix UI primitives, lucide-react icons, next-themes, @vercel/analytics

## Build / Install
- `npm install` requires `--legacy-peer-deps` (React 19 vs Next 14 peer dep)
- `critters` must be installed (Next 14 needs it for static HTML optimization)
- `npm run build` → static export to `.next/`; first-load JS ~173 KB
- `eslint` is not installed; `npm run lint` fails (harmless)

## Architecture
- `app/layout.tsx` — root layout, metadata, SEO, Google Fonts via `<link>`
- `app/page.tsx` — single monolithic client page (~3400 lines), all sections inline
- `app/globals.css` — global Tailwind + custom keyframes
- Team member data + translations: `teamMembers` array at top of `app/page.tsx`
- Events data: `events` array at top of `app/page.tsx`
- Language context: `LanguageContext` / `LanguageProvider` defined in page.tsx

## Performance History (2026-09)
- Fixed `useIntersectionObserver` recreating observer every render (options new-ref)
- Memoized `FloatingOrbs` random positions (was `Math.random()` each render)
- Moved Google Fonts from `@import` in style block to `<link>` + preconnect in layout
- Optimized images: yulia.png 8 MB → 95 KB, total image payload ~36 MB → 2.4 MB
- Added `useMemo` for repeated event filters in `EventsModal`

## Conventions
- Team member images in `public/images/` are `.jpg` (converted from `.png`), max ~600px on long side
- Use `useMemo`/`useCallback` for data that doesn't change between renders
