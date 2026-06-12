# Hero Image Inventory

Last checked: 2026-06-12

This inventory records the hero images that are intentionally public. It is
based on references found in `app/`, `components/`, and non-image files under
`public/`.

Post-cleanup counts:

- `public/` files: 38
- `public/` image files: 36
- `public/page-heroes/` WebP files: 22

## Rules

- Keep desktop page hero images in `public/page-heroes/`.
- Keep mobile page hero images in `public/page-heroes/mobile/`.
- Keep only home-specific `anpittchi-*.webp` images in `public/`.
- Do not reintroduce root-level copies of page hero images.
- Do not keep rejected catalog, draft, duplicate, or AppleDouble `._*` files in
  `public/`.

## Adopted Home Images

- `public/anpittchi-hero-night-apartment-desktop.webp`
- `public/anpittchi-hero-night-apartment-mobile.webp`
- `public/anpittchi-daily-ok-checkin-lifestyle.webp`
- `public/anpittchi-48h-notification-rule-infographic.webp`
- `public/anpittchi-referrer-check-before-introduction.webp`

## Adopted Desktop Page Heroes

- `public/page-heroes/anpittchi-pricing-hero-subscription-desk.webp`
- `public/page-heroes/anpittchi-notification-samples-hero-message-cards.webp`
- `public/page-heroes/anpittchi-referrer-guide-hero-reviewing-app.webp`
- `public/page-heroes/anpittchi-support-hero-guidance-desk.webp`
- `public/page-heroes/anpittchi-privacy-hero-private-desk.webp`
- `public/page-heroes/anpittchi-terms-hero-documents-desk.webp`
- `public/page-heroes/anpittchi-privacy-choices-hero-settings-control.webp`
- `public/page-heroes/anpittchi-tokushoho-hero-transaction-ledger.webp`

## Adopted Mobile Page Heroes

- `public/page-heroes/mobile/anpittchi-for-family-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-for-contacts-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-notification-samples-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-delivery-status-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-privacy-choices-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-help-stop-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-share-message-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-before-you-start-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-how-it-works-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-pricing-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-support-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-trust-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-privacy-mobile-hero.webp`
- `public/page-heroes/mobile/anpittchi-terms-mobile-hero.webp`

## Pending Or Absent Mobile Heroes

This file was listed as a pending candidate, but it is not present in `public/`
and is not referenced by the app at this check:

- `public/page-heroes/mobile/anpittchi-tokushoho-mobile-hero.webp`

## Removed From Public

The following root-level page hero copies were unreferenced and had identical
SHA-256 hashes to the adopted files under `public/page-heroes/`:

- `public/anpittchi-notification-samples-hero-message-cards.webp`
- `public/anpittchi-pricing-hero-subscription-desk.webp`
- `public/anpittchi-privacy-choices-hero-settings-control.webp`
- `public/anpittchi-privacy-hero-private-desk.webp`
- `public/anpittchi-referrer-guide-hero-reviewing-app.webp`
- `public/anpittchi-support-hero-guidance-desk.webp`
- `public/anpittchi-terms-hero-documents-desk.webp`
- `public/anpittchi-tokushoho-hero-transaction-ledger.webp`

## Needs Manual Decision

None in `public/` after this cleanup.

## Why The Rejected Files Remained

The stale files found in this cleanup were duplicate page hero images left at
the `public/` root after the adopted page hero paths moved to
`public/page-heroes/`. Keeping both copies made it possible for future work to
pick the wrong path even though the app no longer referenced the root copies.
