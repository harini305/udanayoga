# Udana Yoga Academy — Phase 2 frontend

A frontend-only rebuild of [udanayoga.com](https://udanayoga.com/) using Next.js (App Router, JavaScript), GSAP + ScrollTrigger and plain CSS / CSS Modules. All content and images come from the Phase 1 audit of the original site.

> The Phase 1 audit folder (`docs/source-audit/`) is kept out of this public repository: it contains the unpublished WordPress media library (including a patient X-ray and stock images of unknown licence), screenshots and crawl data. The optimised images the site uses are committed in `public/images/`.

There is no backend. The contact form validates on the client and shows a clearly labelled **demo-only** confirmation; nothing is sent anywhere.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev          # development server → http://localhost:3000
npm run build        # production build
npm run start        # serve the production build → http://localhost:3000
```

Re-generating the optimised images (only needed if the selection changes) needs the local audit folder and Python 3 with Pillow ≥ 11.3:

```bash
npm run images       # python scripts/optimize-images.py
```

## Project layout

| Path | Purpose |
|---|---|
| `src/app/` | Routes (one folder per page), `layout.js`, `globals.css`, 404, sitemap, robots |
| `src/components/` | Header, footer, picture, schedule tabs, timetable, gallery viewer, contact form, reviews, GSAP motion |
| `src/data/site.js` | **All page content, prices, dates and timetable** — edit here, not in the layouts |
| `src/data/reviews.js` | The seven Google reviews, verbatim |
| `src/data/images.js` | Alt text for every image; `image-manifest.json` is generated |
| `public/images/` | Optimised AVIF + WebP derivatives (originals kept in the local, unpublished audit folder) |
| `scripts/optimize-images.py` | Image pipeline: resize, convert, recolour the genuine logo, build the manifest |
| `docs/phase-2/OWNER-REVIEW.md` | Unresolved factual conflicts and questions for the owner |

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about-us/` | About, trainers, all seven reviews |
| `/gallery/` | Photo gallery with viewer |
| `/yoga-teacher-training-programs/` | Teacher-training overview and comparison |
| `/50-hours-yoga-teacher-training/` | Standard 50-hour course (previously a broken link) |
| `/yoga-teacher-training/` | 100-hour YTTC |
| `/200-hours-yoga-teacher-training/` | 200-hour YTTC with schedule |
| `/50-hours-aerial-course/` | 50-hour Sky Flow Aerial YTTC with schedule |
| `/workshop/` | Workshops |
| `/udana-shala-class/` | Class timetable, styles, prices |
| `/private-yoga-session-in-bali/` | Private sessions |
| `/scoliosis-therapy/` | Scoliosis therapy |
| `/contact/` | Contact details and demo form |

Redirects (in `next.config.mjs`): `/contact-us-2/` → `/contact/`, `/?page_id=1274` → 50-hour page, `/timetable/*` → Shala page, `/etn/*` → 200-hour page.

## Updating dates and prices

Course dates live in `src/data/site.js` (`programmes.yttc200.schedule`, `programmes.aerial50.schedule`). The schedule shows only dates that start after the visitor's current date, so past intakes disappear automatically. It is a static listing, not a booking calendar.
