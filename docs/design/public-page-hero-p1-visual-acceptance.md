# Public Page Hero P1 Visual Acceptance

Date: 2026-06-13

Purpose: review the 4 regenerated P1 Legal / Policy mobile hero images before
moving to P2. This is an art-direction acceptance gate only. No image
generation, implementation change, commit, push, deploy, or Vercel operation was
performed as part of this review.

## Scope

Reviewed P1 pages:

- `/privacy`
- `/terms`
- `/privacy-choices`
- `/tokushoho`

Comparison context:

- P0 accepted set from `docs/design/public-page-hero-p0-visual-acceptance.md`
- P1 redo roles from `docs/design/hero-image-inventory.md`
- Current mobile hero WebP files under `public/page-heroes/mobile/`
- Current local page rendering at 390px and 375px mobile widths

## Overall Verdict

`ACCEPT`

The P1 Legal / Policy redo set is acceptable for moving to P2. All 4 pages have
a distinct enough concept, subject, and page role:

- `/privacy`: respectful separation through a translucent boundary
- `/terms`: service rules as a calm, clear path
- `/privacy-choices`: active user choice through opening / closing
- `/tokushoho`: organized purchase conditions through separated compartments

The set does not return to the rejected repeated patterns:

- wooden desk + paper + smartphone + pen + tea
- wall + window + booklet + shelf + information card replacement
- generic legal-paper still life
- payment-pressure imagery
- medical, rescue, security, care-service, emergency, or guaranteed-safety mood

## Page Verdicts

| Page | Verdict | Acceptance rationale | Watchpoints |
| --- | --- | --- | --- |
| `/privacy` | `ACCEPT` | The translucent curtain / divider reads as a soft boundary and respectful separation. It does not read as surveillance, cybersecurity, storage admin, hospital curtain, or isolation. | Similar warm home / window tone to `/privacy-choices`, but the subject is passive separation rather than active control. |
| `/terms` | `ACCEPT` | The corridor and handrail create a clear path metaphor for service rules. It does not read as a legal office, courtroom, contract signing, or safety guarantee. | The handrail can lightly suggest accessibility if viewed without page context. Keep it accepted because the scene is a warm home corridor, not a hospital or care facility. Do not reuse handrail/corridor motifs in later batches. |
| `/privacy-choices` | `ACCEPT` | The hand opening the sliding panel clearly adds user action and control, separating it from `/privacy`. It does not read as surveillance, emergency exit, security, or a warning UI. | Shares Japanese interior and window light with `/privacy`; keep future privacy-related pages away from screens/curtains/sliding-panel motifs. |
| `/tokushoho` | `ACCEPT` | The separated wall compartments communicate organized purchase conditions without credit cards, cash, invoices, receipts, yen symbols, discount mood, or payment pressure. | Mild organization/compartment similarity with `/support`, but `/support` is guide-card help and `/tokushoho` is structured disclosure. Avoid more wall organizer / compartment concepts in later batches. |

## Similarity Checks

| Pair | Result | Notes |
| --- | --- | --- |
| `/privacy` vs `/privacy-choices` | acceptable | Both are bright Japanese interiors, but `/privacy` is a static translucent boundary while `/privacy-choices` includes a visible hand action and open/closed contrast. |
| `/terms` vs `/trust` | acceptable | `/terms` is a corridor/path image. `/trust` is an abstract tray / boundary composition. The page meanings do not collapse. |
| `/tokushoho` vs `/pricing` | acceptable | `/pricing` uses a device-led plan overview. `/tokushoho` uses physical compartments and has no payment UI, card, receipt, or sale cue. |
| `/tokushoho` vs `/support` | mild similarity, accepted | Both use calm organizing objects, but `/support` reads as guide-card help while `/tokushoho` reads as separated conditions. This is a watchpoint, not a blocker. |
| `/privacy` vs `/support` | acceptable | `/privacy` is fabric boundary / private space; `/support` is wall guide organization. The main subject differs. |

## Prohibited Pattern Check

- Repeated wooden desk flat lay: not present.
- Paper + pen + smartphone + tea template: not present.
- Wall + window + booklet + shelf + information-card replacement: not present as a repeated set. `/tokushoho` has wall compartments, but no booklet, shelf cards, or information stand.
- Generic warm interior with no page meaning: not accepted as a blocker; each page has a distinct metaphor.
- Readable text / readable numbers / logo inside image: not observed in contact sheet or screenshots.
- Medical / rescue / security / care-service impression: not observed as a blocker.
- Emergency / warning / guaranteed safety impression: not observed.
- Legal intimidation: not observed.
- Payment pressure / credit card / receipt / invoice / yen symbol: not observed.

## Rendering Evidence

Local route checks:

- `/privacy` => 200
- `/terms` => 200
- `/privacy-choices` => 200
- `/tokushoho` => 200
- `/legal-review` => 404
- `/legal-review/privacy` => 404
- `/legal-review/terms` => 404
- `/legal-review/specified-commercial-transactions` => 404
- `/legal-review/privacy-choices` => 404

WebP delivery:

- `/page-heroes/mobile/anpittchi-privacy-mobile-hero.webp` => 200 `image/webp`
- `/page-heroes/mobile/anpittchi-terms-mobile-hero.webp` => 200 `image/webp`
- `/page-heroes/mobile/anpittchi-privacy-choices-mobile-hero.webp` => 200 `image/webp`
- `/page-heroes/mobile/anpittchi-tokushoho-mobile-hero.webp` => 200 `image/webp`

Desktop currentSrc remained the existing PC hero for each page:

- `/privacy`: `/page-heroes/anpittchi-privacy-hero-private-desk.webp`
- `/terms`: `/page-heroes/anpittchi-terms-hero-documents-desk.webp`
- `/privacy-choices`: `/page-heroes/anpittchi-privacy-choices-hero-settings-control.webp`
- `/tokushoho`: `/page-heroes/anpittchi-tokushoho-hero-transaction-ledger.webp`

Mobile currentSrc used the P1 redo mobile hero for each page at 390px and 375px:

- `/privacy`: `/page-heroes/mobile/anpittchi-privacy-mobile-hero.webp`
- `/terms`: `/page-heroes/mobile/anpittchi-terms-mobile-hero.webp`
- `/privacy-choices`: `/page-heroes/mobile/anpittchi-privacy-choices-mobile-hero.webp`
- `/tokushoho`: `/page-heroes/mobile/anpittchi-tokushoho-mobile-hero.webp`

Mobile rendering checks:

- 390px: no horizontal overflow on all 4 pages.
- 375px: no horizontal overflow on all 4 pages.
- Hero copy background: transparent, not a white opaque card, on all 4 pages.

## Artifacts

- P1 contact sheet:
  `/tmp/anpi-watch-landing-p1-visual-acceptance-20260613/p1-visual-acceptance-contact-sheet.jpg`
- P0 + P1 combined contact sheet:
  `/tmp/anpi-watch-landing-p1-visual-acceptance-20260613/p0-plus-p1-visual-acceptance-contact-sheet.jpg`
- P1 mobile screenshot sheet:
  `/tmp/anpi-watch-landing-p1-visual-acceptance-20260613/p1-mobile-screenshot-sheet.jpg`
- CDP currentSrc diagnostics:
  `/tmp/anpi-watch-landing-p1-visual-acceptance-20260613/screenshots/cdp-current-src-results.json`

## Next Step

Proceed to P2 hero planning or generation. Do not regenerate P1 before P2 unless
human review specifically rejects the `/terms` handrail watchpoint or the
`/tokushoho` organizer similarity watchpoint.
