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

## P0 Batch A Regenerated Mobile Heroes

Regenerated on 2026-06-12 with the completed prompts from the P0 Batch A
generation request. Converted from generated PNG sources to WebP with
`cwebp -q 82 -m 6 -metadata none`.

- `public/page-heroes/mobile/anpittchi-notification-samples-mobile-hero.webp`
  - role: sample message preview
- `public/page-heroes/mobile/anpittchi-how-it-works-mobile-hero.webp`
  - role: staged rule flow
- `public/page-heroes/mobile/anpittchi-delivery-status-mobile-hero.webp`
  - role: record review
- `public/page-heroes/mobile/anpittchi-help-stop-mobile-hero.webp`
  - role: SMS receiving control / instruction

## P0 Batch B Regenerated Mobile Heroes

Regenerated on 2026-06-12 with the completed prompts from the P0 Batch B
generation request. Converted from generated PNG sources to WebP with
`cwebp -q 82 -m 6 -metadata none`.

- `public/page-heroes/mobile/anpittchi-for-family-mobile-hero.webp`
  - role: respectful introduction before use
- `public/page-heroes/mobile/anpittchi-for-contacts-mobile-hero.webp`
  - role: contact consent review
- `public/page-heroes/mobile/anpittchi-share-message-mobile-hero.webp`
  - role: thoughtful message preparation
- `public/page-heroes/mobile/anpittchi-support-mobile-hero.webp`
  - role: calm support guidance
  - note: regenerated again on 2026-06-12 because the first Batch B support
    image was too similar to `/pricing`; the replacement avoids device screens
    and uses a wall organizer / blank guide cards scene.

## P0 Batch C Regenerated Mobile Heroes

Regenerated on 2026-06-12 with the completed prompts from the P0 Batch C
generation request. Converted from generated PNG sources to WebP with
`cwebp -q 82 -m 6 -metadata none`.

- `public/page-heroes/mobile/anpittchi-pricing-mobile-hero.webp`
  - role: monthly pricing clarity
- `public/page-heroes/mobile/anpittchi-before-you-start-mobile-hero.webp`
  - role: calm readiness before starting
- `public/page-heroes/mobile/anpittchi-trust-mobile-hero.webp`
  - role: service boundaries

## P1 Legal / Policy Redo Mobile Heroes

Regenerated again on 2026-06-12 with the completed prompts from the P1 Legal /
Policy redo request. This replaces the first P1 set because it still leaned too
much on bright-room wall / window / booklet / shelf still life. Converted from
generated PNG sources to WebP with `cwebp -q 82 -m 6 -metadata none`.

- `public/page-heroes/mobile/anpittchi-privacy-mobile-hero.webp`
  - role: privacy as respectful separation through a translucent boundary
- `public/page-heroes/mobile/anpittchi-terms-mobile-hero.webp`
  - role: service rules as a calm, clear path
- `public/page-heroes/mobile/anpittchi-privacy-choices-mobile-hero.webp`
  - role: active user choice through a physical sliding panel
- `public/page-heroes/mobile/anpittchi-tokushoho-mobile-hero.webp`
  - role: organized subscription purchase conditions through separated compartments

Comparison notes:

- P1 redo contact sheet:
  `/tmp/anpi-watch-landing-p1-legal-policy-redo-20260612/p1-legal-policy-redo-contact-sheet.jpg`
- P0 + P1 redo contact sheet:
  `/tmp/anpi-watch-landing-p1-legal-policy-redo-20260612/p0-plus-p1-redo-mobile-hero-contact-sheet.jpg`
- The redo set keeps the same warm Japanese home tone as the site, but separates
  the main subject and metaphor per page: boundary, path, hand-controlled
  sliding panel, and compartments.
- Remaining watchpoint: the set still uses bright interiors and natural light,
  so future P2/P3 work should avoid adding more wall / window / shelf still
  lifes unless a page-specific concept requires it.

## P2 Manual Suite Generated Heroes

Generated on 2026-06-13 with the completed prompts from the P2 Manual Suite
generation request. Converted from generated PNG sources to WebP with
`cwebp -q 82 -m 6 -metadata none`.

- `public/page-heroes/anpittchi-manual-hero-guide-entry.webp`
  - role: manual landing guide entrance
- `public/page-heroes/mobile/anpittchi-manual-mobile-hero.webp`
  - role: manual landing guide entrance, mobile crop
- `public/page-heroes/anpittchi-manual-faq-hero-question-index.webp`
  - role: FAQ question index / self-serve answer directory
- `public/page-heroes/mobile/anpittchi-manual-faq-mobile-hero.webp`
  - role: FAQ question index / self-serve answer directory, mobile crop
- `public/page-heroes/anpittchi-manual-tutorial-hero-step-guide.webp`
  - role: step-by-step practice path
- `public/page-heroes/mobile/anpittchi-manual-tutorial-mobile-hero.webp`
  - role: step-by-step practice path, mobile crop

Comparison notes:

- P2 Manual contact sheet:
  `/tmp/anpi-watch-landing-p2-manual-hero-generation-20260613/p2-manual-suite-contact-sheet.jpg`
- P0 + P1 + P2 combined mobile contact sheet:
  `/tmp/anpi-watch-landing-p2-manual-hero-generation-20260613/p0-p1-p2-combined-mobile-hero-contact-sheet.jpg`
- The manual suite separates the three page roles as guide entrance, question
  index, and tactile step practice.
- The generated set avoids the rejected desk / paper / pen / smartphone / tea
  flat-lay pattern and does not read as medical, rescue, security, care-service,
  emergency, or guaranteed-safety imagery.
- Watchpoints: `/manual` uses a clear-path interior and should not be repeated
  near `/terms`; `/manual/faq` uses blank wall cards and should not be repeated
  near `/support` or `/how-it-works`.

## Desktop-only Global Gate Regenerated Heroes

Generated on 2026-06-13 for the 9 desktop-only `REGENERATE` pages identified in
`docs/design/public-page-hero-global-visual-acceptance.md`. Converted from
generated PNG sources to WebP with `cwebp -q 82 -m 6 -metadata none`.

Mobile heroes were not regenerated and `public/page-heroes/mobile/**` was not
updated as part of this desktop-only pass.

- `public/page-heroes/anpittchi-for-contacts-hero-contact-consent-review.webp`
  - role: calm contact consent review
  - note: selected from a regeneration because the first candidate included a
    cup-like object too close to the rejected tea/still-life pattern.
- `public/page-heroes/anpittchi-before-you-start-hero-readiness-entryway.webp`
  - role: calm readiness before starting
- `public/page-heroes/anpittchi-how-it-works-hero-staged-rule-flow.webp`
  - role: staged rule flow
  - note: selected from the clearest staged-flow regeneration candidate; it
    moves the page away from the reused notification sample desktop hero.
- `public/page-heroes/anpittchi-trust-hero-service-boundaries.webp`
  - role: service boundaries / included vs not included
- `public/page-heroes/anpittchi-delivery-status-hero-record-review.webp`
  - role: later record review, not read/response guarantee
- `public/page-heroes/anpittchi-help-stop-hero-sms-control-guidance.webp`
  - role: calm SMS receiving control
- `public/page-heroes/anpittchi-share-message-hero-message-preparation.webp`
  - role: thoughtful message preparation
- `public/page-heroes/anpittchi-support-hero-guidance-organizer.webp`
  - role: calm support guidance organizer
- `public/page-heroes/anpittchi-terms-hero-clear-path-rules.webp`
  - role: service rules as a clear path

Comparison notes:

- Desktop regeneration candidate sheet:
  `/tmp/anpi-watch-landing-desktop-hero-regeneration-20260613/generation-candidates-contact-sheet.jpg`
- Final 9-page desktop regeneration contact sheet:
  `/tmp/anpi-watch-landing-desktop-hero-regeneration-20260613/desktop-regenerated-9-contact-sheet.jpg`
- Final all-19 desktop contact sheet:
  `/tmp/anpi-watch-landing-desktop-hero-regeneration-20260613/desktop-all-19-contact-sheet.jpg`
- Final all-19 mobile contact sheet:
  `/tmp/anpi-watch-landing-desktop-hero-regeneration-20260613/mobile-all-19-contact-sheet.jpg`
- The regenerated desktop set removes the previous repeated desktop clusters:
  notification-sample reuse on `/for-contacts` and `/how-it-works`; support
  desk reuse on `/before-you-start`, `/help/stop`, and `/support`; referrer
  reuse on `/share-message`; privacy/settings reuse on `/trust` and
  `/delivery-status`; and legal paperwork reuse on `/terms`.
- The regenerated desktop set avoids the rejected desk / paper / pen /
  smartphone / tea flat-lay pattern and does not read as medical, rescue,
  security, care-service, emergency, or guaranteed-safety imagery.

## Pending Or Absent Mobile Heroes

None in `public/page-heroes/mobile/` after the P2 Manual Suite generation.

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
