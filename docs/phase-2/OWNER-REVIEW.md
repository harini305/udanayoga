# Phase 2 — items for the owner to confirm

Built 2026-10-19. The frontend uses only verified content from `docs/source-audit/`. Where the original site contradicts itself or a fact is missing, the new site uses neutral wording, leaves the item out, or labels it, as described below. Answering these questions lets the remaining placeholders be replaced in `src/data/site.js`.

## A. Factual conflicts (audit 08 §A)

| # | Topic | Conflict on the current site | How the new site handles it |
|---|---|---|---|
| A1 | 100-hour length | "12 Days" vs "Two Week" | Shows "12 days", with the note "also described on the current site as 'two weeks'" |
| A2 | 200-hour length | "25 Nights, 26 Days" vs "Three Week" | Shows "25 nights, 26 days" (matches the listed date ranges), with the "three weeks" note |
| A3 | 200-hour location | "Retreat Resort in East Bali" vs schedule tab "Udana Jimbaran Shala" | Both formats shown: retreat resort (English & Spanish) and Jimbaran Shala (English & Indonesian) |
| A4 | 100-hour dates & price | None published | "Dates and price not listed — contact us" note. Nothing invented |
| A5 | Standard 50-hour course | Linked everywhere, but the page was a 404 | New page `/50-hours-yoga-teacher-training/` using only the original card description. Dates, price, location and trainer marked "not yet published" / "to be confirmed". **Is this course still offered?** |
| A6 | 200-hour curriculum | Identical to the 100-hour curriculum | 200-hour page lists only its own focus topics and states that the published module list matches the 100-hour one (linked). **Please supply the 200-hour syllabus if it differs.** |
| A7 | Shala class time | Info box "09.00 am" vs timetable 7:00–17:00 | Info-box time dropped; timetable used |
| A8 | Slow Sky Flow (Tue) | 7:00 am (grid) vs 7:15 am (detail page) | Shown as "7:00 / 7:15 am · Time to be confirmed" with a footnote |
| A9 | Scoliosis class end time | 17:00–18:30 vs 5:00–6:00 pm | Start time "from 5:00 pm" only; end time flagged as unconfirmed |
| A10 | Phone / WhatsApp | 0812 3807 345 vs +62 813 3815 2370 | **No number is presented as confirmed.** The contact page shows both with their original roles under "Number awaiting confirmation"; email is the primary contact. No floating WhatsApp button; booking CTAs go to the contact page. Set `business.phones.confirmed` once answered |
| A11 | Experience claims | "more than a decade", "since 2014", "more than decades" | Kept "for more than a decade" and "Yoga Alliance registered school since 2014"; "millions of international students" removed from the bio (likely overstated) |
| A12 | "1,000+ Happy Students" | No source | Not shown |
| A13 | "5.0 rating, 96 reviews" | Widget claim, unverified | Not shown; only the seven review texts appear |
| A14 | Schedule freshness | Several 2026 dates have passed | Only future start dates are shown, filtered against today's date (19 Oct 2026 build: aerial 1–7 Nov 2026; 200-hour Shala 16 Nov–12 Dec 2026). The retreat format currently shows "no upcoming dates". **Please provide 2027 dates** |
| A15 | 200-hour Shala price | "Contact us for special Early Bird price before 1 month — Rp.16.500.000" | Price shown as Rp 16.500.000, with the original wording quoted beneath. **Is this the normal or the early-bird price?** |
| A16 | Workshop details | Day/time blank, Book Now dead | "Dates & times: not yet announced", CTA to contact page |
| A17 | Scoliosis trainer | "Certified Scoliosis" (incomplete) | "Certified scoliosis therapy teacher" — please confirm the name/title |
| A18 | Home "Quantum healing" slide | Doesn't match the workshop page; stray "L" | Quantum-healing wording omitted (medical-sounding claim, unclear if still offered) |

## B. Content and claim decisions to review

- **Scoliosis therapy.** The six goals are kept, introduced as "the aims of the therapy, as described by Udana Yoga". The method is described as Udana Yoga's own "non-surgical option" rather than a treatment, and a short "does not replace medical care; no outcome is guaranteed" note was added. Nothing was strengthened. Please confirm the wording, particularly "decrease the Cobb angle" and "minimise the need for a back brace".
- **X-ray image** (`Scoliosis-compare.jpg`). Not used: it shows a patient's first name. If you want it back, provide a consented, anonymised version.
- **"Cakra checking … by using a dozer"** (workshop page). Omitted because the meaning is unclear.
- **"Over 70% of our graduates already have their own classes"** (aerial page). Kept as the academy's own statement. Please confirm.
- **Reviews.** All seven Google reviews are reproduced verbatim: three on the home page, all seven on About. Please confirm you are happy to republish them (audit Q).
- **Power Vinyasa / Wheel Yoga descriptions.** These cite Baron Baptiste and Sri Dharma Mittra (1978) as in the original. Keep or drop?
- **Typos fixed** (meaning unchanged): Udaya → Udana, Metod → Method, Philosopy, Adjusment, Serie → Series, Yogui → yogic purification, Contradictions → contraindications, Pubic Speech → public speaking, Aeriel, Sky Flowl, Slow Sky FLow, Vegitarian, accomodation, Availablitiy, "practic e", "they're breathing", and the duplicated sentence in Tomoko's bio.

## C. Assets

- **Used:** 26 genuine Udana photographs, the three accreditation badges and the original logo artwork. The white logo was recoloured to brand brown for the light header; the shape is unchanged. Favicon generated from the orange brand symbol.
- **Deliberately not used:**
  - Envato and template-kit stock: hand-mudra hero, rice terraces, the "therapy" spine graphic, `yoga-private-1/2/3` mat close-ups, the sunset silhouette, the temple-gate image and all illustrations.
  - Circle-cropped duplicates of photos already used.
  - The scoliosis X-ray.
- **Missing:**
  - No SVG logo exists. Please supply one if available.
  - No dedicated photo exists for the scoliosis or standard 50-hour pages; studio class photos are used with neutral alt text.
  - No YouTube URL exists, so the dead YouTube icon was removed.
- **Captions.** Only the four labels the original site used (Graduation, Culture, Water Blessing, Teacher Training) appear as captions. Other photos have descriptive alt text only.

## D. Open questions (audit 08 §G)

1. Confirm the durations of the 100 h, 200 h and 50 h courses, and whether the non-aerial 50 h course is still offered.
2. Provide 100 h dates and prices, 2027 dates for 200 h and aerial, and clarify the Rp 16.500.000 wording.
3. Confirm the correct phone and WhatsApp number.
4. Confirm the Shala timetable times, and whether it is still current.
5. Workshops: current offerings, dates and prices, or keep "contact us"?
6. YouTube channel URL (the icon is removed until one is provided).
7. The gallery now uses local photos instead of the broken Instagram feed. OK?
8. Licence for any Envato image you want reused; consent for the X-ray.
9. Keep the "1,000+ happy students" figure? (Currently omitted.)
10. Indonesian site: the footer links to id.udanayoga.com. Keep, or plan EN/ID on one site?
11. Should the 200 h curriculum differ from the 100 h one?
12. Contact-form delivery: which inbox, and which service, when a backend is approved?
