# ANITRAM — EPK Website

Luxury black & gold multi-page EPK site built with Next.js + Tailwind.

## Run locally
1. Install Node.js (LTS)
2. In this folder:
   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

## Edit content (no coding)
Open `lib/site.json` and change:
- links
- embeds
- booking email
- shop items (paste Stripe Payment Links)
- gallery images (filenames)

## Deploy free forever
### Vercel (recommended)
1. Create a GitHub repo and push this code
2. In Vercel: New Project → Import from GitHub → Deploy
3. Add your .com in Vercel → Settings → Domains

### GitHub Pages
Not recommended for Next.js multi-page apps. Use Vercel.

## Stripe shop (free)
Stripe has no monthly fee; it takes a processing fee per sale.
Use Stripe Payment Links and paste them into `lib/site.json`.
