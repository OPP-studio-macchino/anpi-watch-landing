# Public Page Hero P0 Visual Acceptance

Last checked: 2026-06-12

Purpose: review the 11 regenerated P0 mobile hero images before moving to P1.
This is a visual acceptance gate only. It does not generate images, replace
assets, change implementation, deploy, use Vercel, commit, or push.

## Review Inputs

- Shot plan: `docs/design/public-page-hero-shot-plan-v2.md`
- Prompt pack: `docs/design/public-page-hero-p0-generation-prompts.md`
- Inventory: `docs/design/hero-image-inventory.md`
- P0 mobile assets under `public/page-heroes/mobile/`

Review artifacts:

- P0 contact sheet:
  `/tmp/anpi-watch-landing-p0-visual-acceptance-20260612125002/p0-contact-sheet.jpg`
- P0 mobile screenshot sheet:
  `/tmp/anpi-watch-landing-p0-visual-acceptance-20260612125002/p0-mobile-screenshot-sheet.jpg`
- CDP currentSrc diagnostics:
  `/tmp/anpi-watch-landing-p0-visual-acceptance-20260612125002/browser-3014/p0-current-src-results.json`
- HTTP status log:
  `/tmp/anpi-watch-landing-p0-visual-acceptance-20260612125002/http-status.txt`
- WebP delivery log:
  `/tmp/anpi-watch-landing-p0-visual-acceptance-20260612125002/webp-delivery.txt`

## Overall Gate Result

`ACCEPT`

The P0 mobile hero set is acceptable for moving to P1. All 11 P0 pages have a
page-specific visual role, and no page requires immediate regeneration before
P1.

The set still shares a deliberately warm, bright Japanese-home tone. That
shared tone is acceptable because the main subjects and page meanings are
separated enough across the P0 pages. The strongest prior concern, `/pricing`
versus `/support`, is resolved after the `/support` regeneration.

## Page Decisions

| Page | Decision | Acceptance reason | Similarity / watch note |
| --- | --- | --- | --- |
| `/pricing` | `ACCEPT` | Tablet plan overview reads as monthly pricing clarity without cash, bill, receipt, discount, or payment pressure. | Mild device-near-window overlap with `/notification-samples`, but pricing is a plan overview while notification samples are message previews. |
| `/notification-samples` | `ACCEPT` | Upright phone and abstract message cards read as sample message preview. No emergency-alert mood. | Shares device vocabulary with `/pricing`, `/for-contacts`, and `/help/stop`, but the floating sample-card treatment keeps the role distinct. |
| `/for-family` | `ACCEPT` | Seated adult looking toward an empty chair supports respectful introduction before use. It does not read as monitoring or control. | Shares people-and-phone vocabulary with `/for-contacts`, but the seated conversation setup is distinct. |
| `/for-contacts` | `ACCEPT` | Mature adult calmly checking a phone supports contact consent review. It does not read as emergency SMS or family referrer conversation. | The person-with-phone motif is acceptable because only `/for-family` is adjacent and uses a different posture and intent. |
| `/before-you-start` | `ACCEPT` | Entryway shelf, checklist tiles, bag, and going-out objects read as readiness before starting. | Mild blank-card overlap with `/how-it-works`, but the entryway/readiness setting is distinct from the process-flow board. |
| `/how-it-works` | `ACCEPT` | Wall sequence of cards reads as staged rule flow. It does not read as message samples or delivery logs. | Keep an eye on blank-card repetition in later P1 work; do not add more wall-card scenes nearby. |
| `/trust` | `ACCEPT` | Separated tray/shelf composition reads as service boundaries and does not look like legal pressure, privacy storage, or guaranteed safety. | Quiet abstract boundary metaphor is distinct from `/pricing`, `/support`, and `/before-you-start`. |
| `/delivery-status` | `ACCEPT` | Card holder plus phone reads as later record review rather than sample messaging. It avoids all-success/read-guarantee cues. | Shares cards/device language with `/notification-samples`, but the record-holder arrangement separates retrospective status from preview samples. |
| `/help/stop` | `ACCEPT` | Phone-in-tray composition supports SMS receiving control when paired with page heading and CTAs. It does not read as warning, error, emergency, or support center. | The asset alone is more abstract than the page role, but page context makes it acceptable. Avoid another phone-in-tray shot in P1. |
| `/share-message` | `ACCEPT` | Laptop and hands read as thoughtful message preparation. It does not look like family conversation, support, or notification UI. | Distinct from `/for-family` because the subject is drafting, not interpersonal discussion. |
| `/support` | `ACCEPT` | Regenerated wall organizer, blank guide cards, plant, and cloth read as calm support guidance without device screen or pricing tablet. | The `/pricing` similarity concern is resolved. Do not return support to tablet/shelf imagery. |

## REGENERATE Pages

None.

## NEEDS_HUMAN_REVIEW Pages

None required before P1.

Optional human attention: `/help/stop` is acceptable in-context, but the image is
more abstract than the STOP/HELP page role when viewed without copy. If a later
review wants stricter literalness, regenerate only that page with a non-readable
SMS-control cue.

## Similarity Review

- `wooden desk + paper + smartphone + pen + tea`: no P0 image returns to this
  repeated template.
- People looking at phones: limited to `/for-family` and `/for-contacts`, with
  different posture, setting, and page role.
- Tablet / shelf repetition: `/pricing` remains tablet-led, while `/support`
  was regenerated away from device screens. No blocker remains.
- Notification card / SMS UI repetition: `/notification-samples`, `/help/stop`,
  and `/delivery-status` remain close in product-mechanics vocabulary, but each
  has a different visual role: preview cards, SMS control, and record review.
- Record/log versus message sample: acceptable separation through
  `/delivery-status` record-holder composition versus `/notification-samples`
  preview-device composition.
- Legal / support / trust / pricing meaning overlap: acceptable separation.
  `/trust` is boundary/empty-vs-included, `/support` is guide-card organizer,
  and `/pricing` is tablet plan overview.

## Prohibited Pattern Review

- No medical, rescue, security, emergency, public-agency dispatch, or guaranteed
  safety impression found in the P0 hero images.
- No readable in-image text, readable numbers, logo, app name, real names,
  phone numbers, or provider records found by visual review.
- Page screenshots contain normal page copy and CTAs, but the image assets do
  not add readable claims.
- No red warning UI, sirens, hospital, police, ambulance, surveillance camera,
  call center, or headset operator imagery found.

## Technical Acceptance

Local HTTP on `http://localhost:3014`:

- P0 pages returned `200`: `/pricing`, `/notification-samples`,
  `/for-family`, `/for-contacts`, `/before-you-start`, `/how-it-works`,
  `/trust`, `/delivery-status`, `/help/stop`, `/share-message`, `/support`.
- Legal review draft routes returned `404`: `/legal-review`,
  `/legal-review/privacy`, `/legal-review/terms`,
  `/legal-review/specified-commercial-transactions`,
  `/legal-review/privacy-choices`.

WebP delivery:

- All 11 P0 mobile WebP paths returned `200` with `Content-Type: image/webp`.

CDP/browser:

- Desktop `currentSrc` remained the configured PC hero for every P0 page.
- Mobile 390px and 375px `currentSrc` used the P0 mobile hero for every P0 page.
- Mobile 390px and 375px screenshots were captured for every P0 page.
- No horizontal overflow was found.
- Hero copy background was transparent, not a white opaque card.

## Acceptance Conclusion

P0 mobile hero visual acceptance passes. Proceed to P1 planning or generation
without regenerating any additional P0 image first.
