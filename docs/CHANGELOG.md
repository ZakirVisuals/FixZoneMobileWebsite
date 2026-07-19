# Changelog

## [Unreleased]
- Prices in `data/pricing.json` still placeholders — add real prices
- Web3Forms access key still placeholder in `booking.html` / `contact.html`
- Gallery/Testimonials/Blog still have placeholder content

## [1.0.0] — Restructure
- Rebuilt entire site from a flat single-folder structure into an organized
  `assets/css` (ITCSS-style: base/layout/components/pages/responsive) + `assets/js` + `data` structure
- Added mobile sidebar navigation (hamburger, left-side slide-in)
- Added Gallery, Pricing, Testimonials, Book Appointment, Blog, and 404 pages
- Converted Services, Pricing, and FAQ content to JSON (`data/`) so they can be edited without touching code
- Replaced Formspree contact form with Web3Forms (ajax submission, no page reload)
- Fixed a broken cross-folder script/image reference left over from an old site name
- Removed a duplicate WhatsApp button bug caused by two scripts both injecting it
