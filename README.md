# AURELIA — Premium Local Business Website (Sales Demo)

A premium, mobile-first, SEO-optimised one-page website built to look like a
₹25,000+ agency build — pure **HTML5 / CSS3 / vanilla JavaScript**, no
frameworks, no build tools. Use it as a client demo, then reskin it in
minutes for whichever local business you're pitching.

---

## 📁 Folder Structure

```
/
├── index.html          # All page content + SEO meta + schema
├── style.css            # All styling (design tokens at the top)
├── script.js             # All interactivity
├── images/               # Placeholder imagery (see below)
│   ├── hero-bg.jpg
│   ├── about.jpg
│   ├── gallery-1.jpg … gallery-8.jpg
│   ├── og-cover.jpg
│   ├── favicon-512.png / favicon-32.png / favicon-16.png
│   └── apple-touch-icon.png
├── favicon.ico
└── README.md
```

## ✨ What's Included

- Sticky glassmorphic navbar with shrink-on-scroll + mobile hamburger menu
- Full-screen hero with background image, gradient overlay, dual CTAs and a
  floating WhatsApp button
- About section with trust badge and stat highlights
- 6 animated service cards (glassmorphism + hover lift)
- Masonry gallery with a keyboard-accessible lightbox (arrow keys + click)
- "Why Choose Us" section with scroll-triggered animated counters
- Testimonials grid styled like Google Reviews
- Accordion FAQ (single-open, animated)
- Contact section with click-to-call, WhatsApp, email, address and an
  embedded Google Map
- Scroll progress bar, back-to-top button, loading screen, and
  IntersectionObserver-based scroll-reveal animations throughout
- Full SEO head: meta title/description, Open Graph, Twitter Card, and a
  `LocalBusiness` JSON-LD schema
- Lazy-loaded images, no external JS dependencies, no build step

> **About the imagery:** because this repo needs to work anywhere with zero
> setup, `images/` contains original abstract navy-and-gold artwork generated
> to match the brand palette — not stock photography. Swap them for the
> client's real photos before you present or deploy (see below).

---

## 🎨 Customising For a Real Client

Everything you need to change lives in a handful of places:

1. **Business identity** — in `index.html`, find/replace:
   - `AURELIA` → the real business name
   - `Where Excellence Meets Elegance` → their tagline
   - `[Your City]`, `[Street Address, Landmark]`, `[Your State]`, `[Postal Code]`
   - `+91 90000 00000` / `+919000000000` (nav, hero, contact cards, footer,
     WhatsApp links, and the `tel:` / `wa.me` hrefs)
   - `hello@yourdomain.com`
   - `https://www.yourdomain.com/` (canonical URL + Open Graph/Twitter URLs)
   - `[Your Agency Name]` in the footer credit line (or remove it)

2. **JSON-LD schema** (bottom of `<head>` in `index.html`) — update `name`,
   `telephone`, `address`, `geo` coordinates, `openingHoursSpecification`,
   `sameAs` (social links) and `aggregateRating` to match the real business.

3. **Google Map** — in the Contact section, replace the `iframe` `src` with
   the business's real location. Easiest method: search the address on
   [Google Maps](https://maps.google.com), click **Share → Embed a map**,
   and paste the `src` URL in.

4. **Images** — drop real photos into `images/` using the same filenames
   (or update the `src` attributes in `index.html`):
   - `hero-bg.jpg` — wide, 1920×1080+ recommended
   - `about.jpg` — portrait, 1200×1500 recommended
   - `gallery-1.jpg` … `gallery-8.jpg` — any aspect ratio (masonry adapts)
   - `og-cover.jpg` — 1200×630, used for social sharing previews
   - Replace `favicon.ico` / `images/favicon-*.png` with the client's logo
     (any favicon generator like [realfavicongenerator.net](https://realfavicongenerator.net) works)

5. **Colours & fonts** — every design token lives at the top of `style.css`
   under `:root`. Change `--c-primary`, `--c-secondary`, `--c-accent`,
   `--c-bg` and the Google Fonts `<link>` in `index.html` to rebrand
   instantly — the whole site inherits from these variables.

6. **Copy** — services, FAQ, testimonials, counters (`data-target` /
   `data-suffix` attributes) and section headings are plain HTML — edit
   directly in `index.html`.

---

## 🚀 Deploy: GitHub → Vercel

### 1. Push the project to GitHub

```bash
cd premium-local-business
git init
git add .
git commit -m "Initial commit — AURELIA premium website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(If you don't have a repo yet, create one first at
[github.com/new](https://github.com/new) — no README/license needed, this
folder already has one.)

### 2. Deploy on Vercel

**Option A — Vercel Dashboard (no CLI needed)**

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Click **Import** next to the repository you just pushed.
3. Framework Preset: choose **Other** (this is a static site — no build
   command or output directory needed).
4. Click **Deploy**. Vercel will give you a live `https://your-project.vercel.app`
   URL within seconds.

**Option B — Vercel CLI**

```bash
npm install -g vercel
cd premium-local-business
vercel        # first deploy — follow the prompts
vercel --prod # promote to production URL
```

### 3. Add a custom domain (optional)

In the Vercel dashboard: **Project → Settings → Domains** → add the client's
domain and follow the DNS instructions (usually one `A` or `CNAME` record).

### 4. After deploying

- Update the canonical URL, Open Graph/Twitter `og:url` tags, and the
  JSON-LD `url`/`@id` in `index.html` to the final live domain.
- Submit the site to [Google Search Console](https://search.google.com/search-console)
  and request indexing.
- Test social previews with the
  [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  and [Twitter Card Validator](https://cards-dev.twitter.com/validator).

---

## ✅ Pre-Launch Checklist

- [ ] Replace all placeholder text in square brackets `[ ]`
- [ ] Replace phone numbers, email, and address everywhere (nav, hero,
      contact, footer, WhatsApp links, JSON-LD)
- [ ] Swap all images in `/images` for real photos
- [ ] Replace the Google Map embed with the real location
- [ ] Update JSON-LD schema fields
- [ ] Replace favicon files with the client's logo
- [ ] Update social links (`sameAs` in schema + footer icons)
- [ ] Test on a real phone (Chrome + Safari) and desktop
- [ ] Run a quick [PageSpeed Insights](https://pagespeed.web.dev/) check
- [ ] Point the real domain to Vercel

---

Built to be presented as-is or fully rebranded in under an hour — good luck
closing the deal. 🤝
