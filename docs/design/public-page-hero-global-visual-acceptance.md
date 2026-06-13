# Public Page Hero Global Visual Acceptance

Date: 2026-06-13

Purpose: review the public 19-page hero photo system across desktop and mobile
before any further image generation or implementation. This is a visual
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
- Current local rendering on `http://localhost:3024`
- Current public WebP files under `public/` and `public/page-heroes/`

## Overall Gate Result

`REGENERATE`

The mobile hero system is acceptable as a coordinated 19-page set. P0 and P1
mobile pages remain accepted, and the P2 Manual Suite is accepted in the global
context.

The full desktop + mobile system is not globally acceptable yet because several
desktop heroes still reuse the older shared lower-page images. This is a
desktop-only blocker for the affected pages. It does not require regenerating
the accepted P0/P1/P2 mobile assets.

No page is marked `NEEDS_HUMAN_REVIEW` before the next image-generation step.
The next practical step is to regenerate only the flagged desktop heroes.

## Page Decisions

| Page | Decision | Mobile result | Desktop result | Rationale | Required next direction |
| --- | --- | --- | --- | --- | --- |
| `/` | `ACCEPT` | Accept | Accept | The home night-apartment hero remains the site anchor and is visually distinct from lower pages. It communicates the daily OK premise through copy without rescue, monitoring, or emergency promise. | Keep as-is. Do not turn lower pages into night-apartment variants. |
| `/pricing` | `ACCEPT` | Accept | Accept with watchpoint | The mobile phone-on-shelf image clearly reads as monthly pricing clarity. The desktop subscription desk is older and desk-led, but it does not show bills, credit cards, receipts, yen symbols, discounts, or payment pressure. | Keep for now. If desktop is refreshed later, move away from brown desk still life and keep a simple user-facing subscription context. |
| `/notification-samples` | `ACCEPT` | Accept | Accept as source concept | The sample-message role is clear on mobile and desktop. The desktop asset becomes a problem when reused by `/for-contacts` and `/how-it-works`, not because this page's concept is wrong. | Keep this page's sample-preview direction. Do not reuse its desktop asset on other mechanics pages. |
| `/for-family` | `ACCEPT` | Accept | Accept with watchpoint | The page still reads as relationship / introduction and does not imply monitoring or control. Desktop is shared with `/share-message`, so the system needs `/share-message` to separate. | Keep for now. A future desktop refresh could make the conversation concept more explicit, but it is not the blocking duplicate. |
| `/for-contacts` | `REGENERATE` | Accept | Regenerate desktop | Mobile clearly reads as calm contact consent review. Desktop currently reuses `/notification-samples`, so recipient consent collapses into sample-message preview. | Desktop-only regeneration: everyday recipient context with a phone consent/SMS preview, not floating sample cards or emergency SMS. |
| `/before-you-start` | `REGENERATE` | Accept | Regenerate desktop | Mobile communicates pre-start readiness. Desktop reuses support desk / paper / pen imagery and makes preparation look like generic support paperwork. | Desktop-only regeneration: morning entryway or pre-use readiness scene, no paper checklist, pen, tea, or support-desk setup. |
| `/how-it-works` | `REGENERATE` | Accept | Regenerate desktop | Mobile communicates staged rule flow. Desktop reuses `/notification-samples`, so timing mechanics read as message samples. | Desktop-only regeneration: calm 24h-to-48h timeline / rule-flow scene, not notification sample cards or emergency countdown. |
| `/trust` | `REGENERATE` | Accept | Regenerate desktop | Mobile communicates boundaries and service limitations. Desktop reuses privacy desk imagery, making trust look like privacy handling. | Desktop-only regeneration: can/cannot or boundary-setting metaphor, no lock, legal desk, privacy still life, or safety guarantee. |
| `/delivery-status` | `REGENERATE` | Accept | Regenerate desktop | Mobile communicates later record review. Desktop reuses the privacy-choices settings phone, blurring status logs with user choice controls. | Desktop-only regeneration: retrospective delivery/log review with uncertainty, no read/response guarantee and no settings-toggle metaphor. |
| `/help/stop` | `REGENERATE` | Accept | Regenerate desktop | Mobile stays acceptable in context. Desktop reuses support desk / paper / pen imagery, so STOP/HELP control is not distinct from general support. | Desktop-only regeneration: SMS receiving control / STOP-HELP context with non-readable placeholders, not warning, panic, or support desk. |
| `/share-message` | `REGENERATE` | Accept | Regenerate desktop | Mobile communicates thoughtful message preparation. Desktop reuses `/for-family`, so template drafting collapses into the family introduction page. | Desktop-only regeneration: message draft preparation, phone or laptop foreground, no real text, no two-person conversation duplicate. |
| `/support` | `REGENERATE` | Accept | Regenerate desktop | Mobile support guidance is distinct after regeneration. Desktop still uses the older paper / pen support-desk hero shared with `/before-you-start` and `/help/stop`. | Desktop-only regeneration: calm support guidance hub, no call-center, emergency help, ticket panic, or paper-desk template. |
| `/privacy` | `ACCEPT` | Accept | Accept with watchpoint | Mobile communicates respectful privacy separation. Desktop is an older private-desk scene and overlaps with `/trust`, but `/trust` is the page that needs to move away from this shared meaning. | Keep for now. If refreshed later, avoid lock cliches, surveillance, and generic paperwork. |
| `/terms` | `REGENERATE` | Accept | Regenerate desktop | Mobile communicates service rules as a clear path. Desktop still uses documents, phone, and pen on a desk, returning to the rejected legal paperwork pattern. | Desktop-only regeneration: structured service rules / clear path concept, no contract-signing, pen, desk-paper stack, or legal threat mood. |
| `/privacy-choices` | `ACCEPT` | Accept | Accept with watchpoint | Mobile clearly adds user action and control through opening / closing. Desktop settings-control imagery is acceptable for this page once `/delivery-status` moves away from the same asset. | Keep for now. Avoid reusing this image for logs or delivery status. |
| `/tokushoho` | `ACCEPT` | Accept | Accept with watchpoint | Mobile communicates organized purchase conditions. Desktop is a formal transaction-ledger still life, but it avoids credit cards, receipts, invoice piles, yen symbols, sale cues, and payment pressure. | Keep for now. If refreshed later, make it more formal-disclosure than retail, finance, or pricing. |
| `/manual` | `ACCEPT` | Accept | Accept | The P2 guide-entry hero reads as manual entrance. It is near `/terms` through the bright-path metaphor, but the phone-on-stand learning context separates it enough. | Keep as-is. Do not reuse the clear-path interior again. |
| `/manual/faq` | `ACCEPT` | Accept | Accept | The P2 blank question-index board reads as self-serve FAQ browsing. It is related to `/support` and `/how-it-works`, but the no-device wall index keeps the page role distinct. | Keep as-is. Do not add more wall-card index scenes to support/mechanics pages. |
| `/manual/tutorial` | `ACCEPT` | Accept | Accept | The P2 hand-and-bead guide rail reads as step-by-step practice. It avoids generic manual documents and separates from broad `/manual` reference. | Keep as-is. |

## ACCEPT Pages

- `/`
- `/pricing`
- `/notification-samples`
- `/for-family`
- `/privacy`
- `/privacy-choices`
- `/tokushoho`
- `/manual`
- `/manual/faq`
- `/manual/tutorial`

## REGENERATE Pages

All regeneration recommendations below are desktop-only:

- `/for-contacts`: replace reused notification-sample desktop with a consent
  review scene.
- `/before-you-start`: replace support desk / paper / pen desktop with a
  readiness scene.
- `/how-it-works`: replace reused notification-sample desktop with a rule-flow
  timeline scene.
- `/trust`: replace privacy-desk desktop with a service-boundary scene.
- `/delivery-status`: replace privacy-choices/settings desktop with a
  retrospective log-review scene.
- `/help/stop`: replace support desk / paper / pen desktop with SMS receiving
  control.
- `/share-message`: replace reused family/referrer desktop with message-draft
  preparation.
- `/support`: replace support desk / paper / pen desktop with a general support
  hub scene.
- `/terms`: replace documents / phone / pen desktop with a clearer service-rule
  concept.

## NEEDS_HUMAN_REVIEW Pages

None.

## Similarity Review

| Pair / cluster | Result | Notes |
| --- | --- | --- |
| `/manual` vs `/terms` | accepted for mobile, desktop `/terms` regenerate | Both use a path / clarity metaphor on mobile, but `/manual` adds a phone-on-stand guide entrance while `/terms` is a rule path. The desktop `/terms` image is still old legal paperwork and should be replaced. |
| `/manual/faq` vs `/support` | accepted for mobile, desktop `/support` regenerate | `/manual/faq` is a blank wall-card answer index. `/support` mobile is a cloth guide organizer. Desktop `/support` is still the old desk/paper guidance scene and should move away. |
| `/manual/faq` vs `/how-it-works` | accepted for mobile, desktop `/how-it-works` regenerate | Both use ordered cards, but FAQ is a static self-serve index while `/how-it-works` mobile is a time ladder. Desktop `/how-it-works` still reuses message samples. |
| `/privacy` vs `/privacy-choices` | accepted | Mobile separation works: privacy is a translucent boundary, privacy choices is an active sliding-panel action. |
| `/tokushoho` vs `/pricing` | accepted | Mobile separation works: pricing is user-facing subscription clarity, tokushoho is organized purchase conditions. Neither uses credit cards, receipts, invoices, yen symbols, or payment pressure. |
| `/delivery-status` vs `/notification-samples` | accepted for mobile, desktop `/delivery-status` regenerate | Mobile separates record review from sample preview. Desktop `/delivery-status` still uses the privacy-choices settings asset and should become a log-review scene. |
| `/for-family` vs `/for-contacts` | accepted | Mobile separates family introduction from contact consent review through different people, posture, and framing. |
| `/for-family` vs `/share-message` | accepted for mobile, desktop `/share-message` regenerate | Mobile separates conversation context from drafting context. Desktop currently reuses the same referrer image, so `/share-message` needs a desktop replacement. |
| `/help/stop` vs `/support` | accepted for mobile, both desktop regenerate | Mobile distinguishes phone receiving control from support organizer. Desktop still shares support-desk imagery and should be replaced for both pages. |
| Desktop reused notification sample cluster | regenerate affected pages | `/notification-samples` can keep the sample-preview desktop. `/for-contacts` and `/how-it-works` should not reuse it. |
| Desktop reused support desk cluster | regenerate affected pages | `/before-you-start`, `/help/stop`, and `/support` share the old paper / pen desk scene. This is the strongest remaining desktop repetition blocker. |
| Desktop reused referrer cluster | regenerate `/share-message` | `/for-family` and `/share-message` share the same desktop image. `/share-message` needs a message-draft concept. |
| Desktop privacy/settings reuse | regenerate affected pages | `/trust` should not reuse `/privacy`; `/delivery-status` should not reuse `/privacy-choices`. |

## Prohibited Pattern Review

- `wooden desk + paper + smartphone + pen + tea` repetition: not present in the
  accepted mobile set, but still partly present in legacy desktop heroes such as
  `/before-you-start`, `/help/stop`, `/support`, and `/terms`. These are marked
  for desktop regeneration.
- People looking at smartphones only: present in a controlled way on
  `/for-family` and `/for-contacts`; accepted because the page roles and crops
  differ on mobile.
- Tablet / shelf repetition: not a blocker in the mobile set. Desktop
  `/pricing` remains a watchpoint, not a blocker.
- Notification card / SMS UI repetition: acceptable on mobile after separating
  sample preview, consent, STOP/HELP control, and delivery status. Desktop
  `/for-contacts` and `/how-it-works` still need replacements.
- Record/log and message sample confusion: resolved on mobile; desktop
  `/delivery-status` still needs replacement.
- Legal / support / trust / pricing meaning overlap: resolved enough on mobile;
  desktop `/trust`, `/support`, and `/terms` need replacements.
- Manual / terms path confusion: accepted as a watchpoint. `/manual` adds guide
  entrance and phone context; `/terms` mobile is a clear path.
- Medical / rescue / security / emergency / guaranteed safety impression: not
  observed in the hero images.
- Care facility / hospital corridor / elderly facility impression: not observed
  as a blocker. `/terms` mobile handrail remains a watchpoint but does not read
  as a hospital or care facility in context.
- Payment pressure / credit card / receipt / invoice / yen symbol: not observed.
- Readable text / readable numbers / logo / app name inside image assets: not
  observed in contact sheets or screenshots.

## Rendering Evidence

Artifacts:

- Global desktop contact sheet:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-20260613/global-desktop-contact-sheet.jpg`
- Global mobile contact sheet:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-20260613/global-mobile-contact-sheet.jpg`
- Global mobile screenshot sheet:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-20260613/global-mobile-screenshot-sheet.jpg`
- HTTP status:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-20260613/http-status.json`
- WebP delivery:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-20260613/webp-delivery.json`
- CDP currentSrc diagnostics:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-20260613/current-src-results.json`
- Page-to-hero path map:
  `/tmp/anpi-watch-landing-global-hero-visual-acceptance-20260613/page-hero-path-map.json`

Local HTTP on `http://localhost:3024`:

- All 19 target pages returned `200`.
- Draft legal-review routes returned `404`:
  `/legal-review`, `/legal-review/privacy`, `/legal-review/terms`,
  `/legal-review/specified-commercial-transactions`,
  `/legal-review/privacy-choices`.

WebP delivery:

- All 31 referenced desktop/mobile hero WebP paths returned `200` with
  `Content-Type: image/webp`.

CDP/browser:

- 57 currentSrc checks completed: 19 pages at desktop 1440px, mobile 390px, and
  mobile 375px.
- All desktop currentSrc values matched the expected desktop hero path.
- All mobile currentSrc values matched the expected mobile hero path at both
  390px and 375px.
- No horizontal overflow was found.
- Hero copy backgrounds were transparent or translucent. No white opaque card
  was found. The Manual Suite uses a translucent white overlay for readability,
  not an opaque card.

Prohibited expression check:

- The source scan found only existing negative/disclaimer contexts for rescue,
  police, fire, emergency, guaranteed notification, or similar claims.
- No new prohibited positive claim was introduced by this review.

Draft route text check:

- No `legal-review`, legal draft notice, TODO/TBD, or draft-label references
  were found under `app` or `components`.

## Conclusion

The accepted mobile hero set can remain the basis for public use. The global
hero system should not be considered fully accepted until the nine flagged
desktop heroes are regenerated or intentionally approved as legacy desktop
exceptions.

Do not regenerate mobile P0/P1/P2 assets before addressing the desktop-only
blockers listed above.
