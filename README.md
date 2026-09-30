# Leather Haven Craft

Frontend prototype of a coded storefront. Pieces are mock data. Scrolling the collection changes the jacket on a mannequin, using the same motion as `Jacket scroll demo.html`.

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS
- Inline SVG, scroll progress, and `requestAnimationFrame`

## Scripts

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The jacket scroller is on the home page. Brand shops live at `/brands/avirex`, `/brands/harley-davidson`, `/brands/pelle-pelle`, `/brands/schott-nyc`, and `/brands/supreme`. Every jacket is listed at `/products`.

## Layout

- `app/` routes, metadata, sitemap, and Open Graph image
- `components/` header, footer, carousel, dots, and caption
- `hooks/` scroll tracking, viewport size, and animation frames
- `data/` mock products and brands
- `lib/` easing, clamps, and constants
- `styles/` page colors and the scroll stage

Set `NEXT_PUBLIC_SITE_URL` when you deploy so canonical URLs, the sitemap, and robots point at the live host. Vercel can host the frontend as-is.
