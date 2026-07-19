# FixZone Website

Mobile repair service business website — Jacobabad, Pakistan.

## Folder Structure

```
FixZone/
├── index.html               (ONLY this HTML file stays at root)
│
├── pages/
│   ├── about.html, services.html, pricing.html, booking.html,
│   │   faq.html, contact.html, 404.html,
│   │   gallery.html, testimonials.html, blog.html
│
├── assets/
│   ├── css/
│   │   ├── 01-base/         (colors, reset, fonts, base page rules)
│   │   ├── 02-layout/       (header, navbar/sidebar, footer, grid)
│   │   ├── 03-components/   (buttons, cards, forms, whatsapp, etc.)
│   │   ├── 04-pages/        (one file per page, only what's unique)
│   │   ├── 05-responsive/   (mobile / tablet / laptop / desktop)
│   │   └── main.css         (imports everything — link THIS in HTML)
│   │
│   ├── js/                  (one file per feature)
│   ├── images/, videos/, fonts/, icons/
│
├── data/                    (services.json, pricing.json, faq.json)
├── docs/                    (this file, CHANGELOG, LICENSE)
├── sitemap.xml, robots.txt, manifest.webmanifest
```

## ⚠️ Important: root-relative paths

Every CSS/JS/image link and every nav link in every HTML file starts with `/`
(e.g. `/assets/css/main.css`, `/pages/about.html`). This makes links work
correctly whether the page is at the root (`index.html`) or one level deep
inside `pages/`. It means the site **will not work by double-clicking an
HTML file directly** (`file://...`) — it needs to be opened through a local
server (e.g. VS Code's "Live Server" extension, or `python -m http.server`)
or uploaded to real hosting, where the hosting root = this folder's root.

## How to edit content

- **Services / Prices / FAQs** → edit the matching file in `data/`, no HTML/JS touch needed.
- **Colors / fonts / spacing** → edit `assets/css/01-base/variables.css` only.
- **Gallery photos, Testimonials, Blog posts** → edit directly inside their HTML file (marked with comments showing what to change).

## Before going live

1. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `pages/booking.html` and `pages/contact.html`.
2. Replace placeholder prices in `data/pricing.json`.
3. Add real photos to `assets/images/gallery/` and update `pages/gallery.html`.
4. Replace placeholder domain in `sitemap.xml` and `manifest.webmanifest` with the real domain.
5. Add real icon files to `assets/icons/`.
