# WillHughesX — Website (Version 2)

A fully coded homepage for the WillHughesX landing-page design business, built with plain HTML, CSS and vanilla JavaScript. No frameworks, no build step — just upload and go.

## Files

```
index.html      → the homepage
thank-you.html  → shown after someone submits the enquiry form
styles.css      → all styling (dark / blue / premium theme)
script.js       → mobile nav, FAQ accordion, scroll-reveal animations
README.md       → this file
```

## What you need to replace before launch

Everything below is also marked with an HTML comment (`<!-- REPLACE: ... -->`) at the relevant spot in `index.html`, so you can find it quickly by searching for "REPLACE".

| What | Where | Notes |
|---|---|---|
| **Project screenshots** | `assets/images/grant-screenshot.jpg`, `solar-screenshot.jpg`, `stronger-screenshot.jpg` | ✅ Already in place with your real screenshots. To update later, just replace the file with the same name — no HTML changes needed. |
| **Project links** | Each `<a class="link-arrow">` | Currently point to the real live project URLs — update if any project moves. |
| **Automation video** | `assets/videos/automation-walkthrough.mp4` | ✅ Your trimmed video is already in place and self-hosted (no Loom account needed for visitors to view it). To update later, replace the file with the same name. |
| **Testimonial** | `.testimonial__quote` and `.testimonial__author` | Swap in new wording any time — never invent one. |
| **Email address** | Footer `mailto:` link | Currently `willhughes.eng@gmail.com`. Netlify Forms submissions land in your Netlify account's **Forms** tab by default — see notes below on getting them emailed to you directly. |
| **Social links** | Footer `.footer__socials` | Currently placeholders (`#`) except X — fill in real profile URLs. |
| **Logo assets** | `.nav__logo` (currently text: `WILLHUGHESX`) | If you want an image logo instead of text, replace the `<a class="nav__logo">` markup with an `<img>` tag. |
| **Pricing** | Not included in V1 | See "About the Services section" below. |

## About the Services section

At your request, this version does **not** publish fixed pricing. Instead there's a "What Your Project Can Include" section listing what's on offer, plus an FAQ answer that explains pricing is scope-dependent and quoted after a brief. If you want to reintroduce pricing later, add a new `<section class="pricing">` between Services and Process, following the same card/grid pattern used elsewhere.

## Deploying (GitHub + Netlify)

1. Create a new GitHub repository and push these files to it (keep them all in the root, or in one folder — no subfolders needed).
2. In Netlify: **Add new site → Import an existing project → connect to your GitHub repo.**
3. Build settings: leave the build command **blank** and set the publish directory to the repo root (`/` or `.`). This is a static site, so no build step is needed.
4. Deploy. Netlify will automatically detect the form in `index.html` (because of the `data-netlify="true"` attribute) and start collecting submissions.

## Getting form submissions emailed to you

By default, Netlify Forms submissions show up in your Netlify dashboard under **Forms**, not your inbox. To get them emailed to `willhughes.eng@gmail.com` automatically:

1. In Netlify: go to **Site settings → Forms → Form notifications.**
2. Click **Add notification → Email notification.**
3. Enter `willhughes.eng@gmail.com` and save.

Every enquiry will then land in your inbox as well as your Netlify dashboard.

## Editing content

- All page copy lives directly in `index.html` — no CMS, no data files. Search for the text you want to change and edit it in place.
- Colours, fonts, and spacing are controlled by CSS variables at the top of `styles.css` (under `:root`). Changing `--color-accent` there, for example, updates every blue accent across the whole site in one place.
- The FAQ, nav menu, and scroll animations are handled in `script.js` — you shouldn't need to touch this unless you're adding new interactive sections.

## Adding an image logo later

Currently the nav and footer use a styled text logo (`WILLHUGHESX`). To swap in an image:

```html
<a href="#top" class="nav__logo">
  <img src="assets/images/logo.svg" alt="WillHughesX" style="height: 24px;">
</a>
```

## Notes on this version

- No headshot or personal photo, per your instruction — can be added later (e.g. near the testimonial) if you want a more personal touch in a future version.
- No pricing section, per your instruction — replaced with a scope-based "What Your Project Can Include" section and a supporting FAQ answer.
- Real screenshots for all three projects (Grant Chiasson, Solar Wrexham, Stronger Every Week) and your trimmed automation walkthrough video are already included in `assets/`. If any image fails to load for any reason, a labeled placeholder shows instead so the layout never breaks.
- The automation video is self-hosted (served directly from `assets/videos/`) rather than embedded via Loom, so visitors don't need a Loom account and the page doesn't depend on Loom's servers staying up.
