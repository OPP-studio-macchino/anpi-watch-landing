# Public Page Hero Global Visual Acceptance Final

Date: 2026-06-13

Purpose: final cross-page review of the public 19-page desktop and mobile hero
photo system after the desktop-only regeneration pass. This is a visual
acceptance gate only. It does not generate images, replace images, change
implementation, deploy, use Vercel, commit, or push.

## Scope

Target pages:

- `/`
- `/pricing`
- `/notification-samples`
- `/for-family`
- `/for-contacts`
- `/before-you-start`
- `/how-it-works`
- `/trust`
- `/delivery-status`
- `/help/stop`
- `/share-message`
- `/support`
- `/privacy`
- `/terms`
- `/privacy-choices`
- `/tokushoho`
- `/manual`
- `/manual/faq`
- `/manual/tutorial`

Review sources:

- `docs/design/hero-image-inventory.md`
- `docs/design/public-page-hero-art-direction-spec.md`
- `docs/design/public-page-hero-shot-plan-v2.md`
- `docs/design/public-page-hero-p0-visual-acceptance.md`
- `docs/design/public-page-hero-p1-visual-acceptance.md`
- `docs/design/public-page-hero-global-visual-acceptance.md`
- Current local rendering on `http://localhost:3026`
- Current public WebP files under `public/` and `public/page-heroes/`

## Overall Gate Result

`ACCEPT`

The final desktop + mobile hero system is acceptable as a coordinated public
page set. The previous desktop-only blockers are resolved by dedicated desktop
heroes for:

- `/for-contacts`
- `/before-you-start`
- `/how-it-works`
- `/trust`
- `/delivery-status`
- `/help/stop`
- `/share-message`
- `/support`
- `/terms`

No page requires regeneration before proceeding. No page requires human review
as a blocking condition.

## Page Decisions

| Page | Final decision | Desktop | Mobile | Rationale | Watchpoint |
| --- | --- | --- | --- | --- | --- |
| `/` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The home night-apartment hero remains the brand anchor and should not be judged by the same lower-page still-life rules. It supports the daily OK premise through page copy without rescue, monitoring, or emergency promise. | Do not reuse the night apartment mood for lower pages. |
| `/pricing` | `ACCEPT` | `ACCEPT` | `ACCEPT` | Pricing remains user-facing monthly clarity. It avoids credit cards, receipts, invoices, yen symbols, discounts, and payment pressure. | Desktop remains older and desk-led, but it is not a blocker now that `/tokushoho` and support pages are separated. |
| `/notification-samples` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The page clearly reads as sample message preview. It no longer shares desktop meaning with `/for-contacts` or `/how-it-works`. | Keep this as the only message-preview desktop concept. |
| `/for-family` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The page reads as respectful introduction before use and does not imply control or monitoring. `/share-message` now has its own drafting desktop hero. | Person-with-phone appears elsewhere, but roles and crops are separated. |
| `/for-contacts` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The new desktop hero and accepted mobile hero both read as calm contact consent review. They do not read as notification samples, emergency SMS, or family referrer scenes. | None blocking. |
| `/before-you-start` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The new desktop entryway scene and accepted mobile hero read as readiness before starting, not support guidance or pricing. | Similar entryway/wall warmth appears elsewhere, but the checklist/readiness role is distinct. |
| `/how-it-works` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The new desktop hero and accepted mobile hero read as staged rule flow, separate from message samples and delivery logs. | The cards are an abstract flow cue, not a literal full timeline; accepted because page copy/table carries exact timing. |
| `/trust` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The new desktop boundary compartments and accepted mobile corner/boundary image communicate service limits without legal pressure, privacy storage, or safety guarantee. | None blocking. |
| `/delivery-status` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The new desktop record holder and accepted mobile record station separate later record review from message preview and do not imply guaranteed read/response. | Record cards are close to other card motifs but the holder/notebook context keeps it retrospective. |
| `/help/stop` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The new desktop tray/phone scene and accepted mobile phone scene communicate SMS receiving control without warning, error, emergency, or support-center mood. | Avoid future reuse of phone-in-tray control imagery. |
| `/share-message` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The new desktop laptop/hands scene and accepted mobile hero read as thoughtful wording preparation, separate from `/for-family` conversation. | None blocking. |
| `/support` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The new desktop organizer and accepted mobile organizer read as calm support guidance, not pricing, STOP instruction, call center, or emergency support. | Mild organizer relation to `/manual/faq`, accepted because support is guidance while FAQ is question index. |
| `/privacy` | `ACCEPT` | `ACCEPT` | `ACCEPT` | Privacy reads as respectful separation and does not look like surveillance, security, storage admin, hospital curtain, or isolation. | Desktop remains older, but `/trust` has moved away from privacy-desk overlap. |
| `/terms` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The new desktop and accepted mobile corridor/handrail concept read as service rules through a clear path, not legal paperwork. It does not read as a hospital, care facility, elderly facility, or safety guarantee in context. | Keep future manual/legal pages away from additional clear-path/handrail concepts. |
| `/privacy-choices` | `ACCEPT` | `ACCEPT` | `ACCEPT` | Privacy Choices remains active user control through opening/closing and settings context, separate from privacy boundary and delivery-status logs. | None blocking. |
| `/tokushoho` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The page reads as organized purchase conditions and avoids retail shelf, invoice archive, payment pressure, discount/sale, finance, or credit-card cues. | Desktop remains more ledger-like than the mobile compartments, but not a blocker. |
| `/manual` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The manual guide-entry hero communicates broad guide entrance and is separated from `/manual/tutorial` by subject and action level. | It is close to `/terms` through clear-path language, but phone-on-stand guide context separates it. |
| `/manual/faq` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The FAQ wall-card system reads as organized questions / answer index. It is separate from support guidance and staged rule flow. | Avoid adding more wall-card index concepts to future support/mechanics pages. |
| `/manual/tutorial` | `ACCEPT` | `ACCEPT` | `ACCEPT` | The tactile guide rail and phone context read as step-by-step practice, not generic manual document, FAQ index, or support guidance. | None blocking. |

## ACCEPT Pages

All 19 target pages are accepted for both desktop and mobile:

- `/`
- `/pricing`
- `/notification-samples`
- `/for-family`
- `/for-contacts`
- `/before-you-start`
- `/how-it-works`
- `/trust`
- `/delivery-status`
- `/help/stop`
- `/share-message`
- `/support`
- `/privacy`
- `/terms`
- `/privacy-choices`
- `/tokushoho`
- `/manual`
- `/manual/faq`
- `/manual/tutorial`

## REGENERATE Pages

None.

## NEEDS_HUMAN_REVIEW Pages

None.

## Desktop-only Regeneration Final Result

| Page | Previous desktop issue | Final result |
| --- | --- | --- |
| `/for-contacts` | Reused notification-samples desktop. | `ACCEPT`: calm consent review with person and phone, separate from message samples. |
| `/before-you-start` | Reused support desk / paper / pen desktop. | `ACCEPT`: entryway readiness scene, separate from support and pricing. |
| `/how-it-works` | Reused notification-samples desktop. | `ACCEPT`: staged board flow, separate from message previews and records. |
| `/trust` | Reused privacy-desk desktop. | `ACCEPT`: two-compartment service-boundary scene, separate from privacy. |
| `/delivery-status` | Reused privacy-choices/settings desktop. | `ACCEPT`: record holder / notebook scene, separate from settings choices. |
| `/help/stop` | Reused support desk / paper / pen desktop. | `ACCEPT`: SMS receiving control tray, separate from broad support. |
| `/share-message` | Reused family/referrer desktop. | `ACCEPT`: laptop/hands message preparation, separate from family conversation. |
| `/support` | Reused support desk / paper / pen desktop. | `ACCEPT`: wall organizer guidance scene, separate from STOP control and pricing. |
| `/terms` | Legal documents / phone / pen desktop. | `ACCEPT`: clear path / rules corridor, separate from legal paperwork. |

## Similarity Review

| Pair / cluster | Final result | Notes |
| --- | --- | --- |
| `/manual` vs `/terms` | accepted | Both use path/guide metaphors, but `/manual` is guide entrance with phone-on-stand while `/terms` is service rules through a corridor/handrail. |
| `/manual/faq` vs `/support` | accepted | Both are organized help surfaces, but FAQ is a blank question index while support is a guidance organizer with cloth/plant context. |
| `/manual/faq` vs `/how-it-works` | accepted | Both use cards, but FAQ is a static question index while `/how-it-works` is a staged diagonal flow. |
| `/privacy` vs `/privacy-choices` | accepted | Privacy is a soft boundary. Privacy Choices is active opening/closing or settings control. |
| `/tokushoho` vs `/pricing` | accepted | Pricing is user-facing monthly clarity. Tokushoho is formal purchase-condition organization. No payment pressure or finance mood. |
| `/delivery-status` vs `/notification-samples` | accepted | Delivery Status is retrospective record review. Notification Samples is forward preview of message examples. |
| `/for-family` vs `/for-contacts` | accepted | Family is referrer introduction. Contacts is recipient consent review. People/phone vocabulary is not duplicated in meaning. |
| `/for-family` vs `/share-message` | accepted | Family is person/referrer context. Share Message is laptop/hands wording preparation. |
| `/help/stop` vs `/support` | accepted | Help/stop is SMS receiving control with phone/tray. Support is broad guidance organizer without device screen. |
| Legal / support / trust / pricing | accepted | The final system separates money, legal rules, service boundaries, privacy, and support guidance. |
| Product mechanics cluster | accepted | Notification samples, staged flow, delivery status, and STOP control now have separate desktop/mobile subjects. |

## Prohibited Pattern Review

- `wooden desk + paper + smartphone + pen + tea` repetition: not present as a
  mass-produced hero pattern in the final system.
- People looking at smartphones only: present in limited relationship/contact
  contexts, but not repeated as a generic solution across pages.
- Tablet / shelf repetition: not a blocker. Pricing remains a subscription
  decision image, while support and tokushoho have distinct organizer/condition
  metaphors.
- Notification card / SMS UI repetition: resolved. Message preview, consent,
  staged flow, delivery records, and STOP control are visually separated.
- Record/log and message sample confusion: resolved.
- Legal / support / trust / pricing meaning overlap: resolved enough for final
  acceptance.
- Manual / terms path confusion: accepted as a watchpoint, not a blocker.
- Medical / rescue / security / emergency / guaranteed safety impression: not
  observed.
- Care facility / hospital corridor / elderly facility impression: not observed
  as a blocker. `/terms` uses a home corridor / handrail metaphor in context,
  without hospital or care-facility cues.
- Payment pressure / credit card / receipt / invoice / yen symbol: not observed.
- Readable text / readable numbers / logo / app name inside image assets: not
  observed in contact sheets or screenshots.

## Rendering Evidence

Artifacts:

- Global final desktop contact sheet:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-final-20260613/global-final-desktop-contact-sheet.jpg`
- Global final mobile contact sheet:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-final-20260613/global-final-mobile-contact-sheet.jpg`
- Global final desktop screenshot sheet:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-final-20260613/global-final-desktop-screenshot-sheet.jpg`
- Global final mobile screenshot sheet:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-final-20260613/global-final-mobile-screenshot-sheet.jpg`
- HTTP status:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-final-20260613/http-status.json`
- WebP delivery:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-final-20260613/webp-delivery.json`
- CDP currentSrc diagnostics:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-final-20260613/current-src-results.json`
- Page-to-hero path map:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-final-20260613/page-hero-path-map.json`
- Visual acceptance JSON:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-final-20260613/global-final-visual-acceptance-decisions.json`

Local HTTP on `http://localhost:3026`:

- All 19 target pages returned `200`.
- Draft legal-review routes returned `404`:
  `/legal-review`, `/legal-review/privacy`, `/legal-review/terms`,
  `/legal-review/specified-commercial-transactions`,
  `/legal-review/privacy-choices`.

WebP delivery:

- All 38 referenced desktop/mobile hero WebP paths returned `200` with
  `Content-Type: image/webp`.

CDP/browser:

- 57 currentSrc checks completed: 19 pages at desktop 1440px, mobile 390px, and
  mobile 375px.
- All desktop currentSrc values matched the expected desktop hero path.
- All mobile currentSrc values matched the expected accepted mobile hero path at
  both 390px and 375px.
- No horizontal overflow was found.
- Hero copy backgrounds were transparent or translucent. No white opaque card
  was found.

Prohibited expression check:

- The source scan found only existing negative/disclaimer contexts for rescue,
  police, fire, emergency, guaranteed notification, or similar claims.
- No new prohibited positive claim was introduced by this review.

Draft route text check:

- No `legal-review`, legal draft notice, TODO/TBD, or draft-label references
  were found under `app` or `components`.

## Conclusion

The final public page hero system passes the Global Visual Acceptance Gate.
There are no pages that should be regenerated before the next step.

This is a local visual acceptance result only. Production deployment and
production URL verification remain separate work.
