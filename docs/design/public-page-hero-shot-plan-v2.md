# Public Page Hero Shot Plan v2

Last checked: 2026-06-12

Purpose: define the next photo hero replacement plan for the 19 public pages
before image generation, asset work, or implementation. This plan uses
`docs/design/public-page-hero-art-direction-spec.md` as the source direction and
keeps `docs/design/hero-image-inventory.md` as the current asset inventory.

This is a planning document only. Do not generate images, add assets, remove
assets, change `app/**`, change `components/**`, deploy, use Vercel, commit, or
push as part of this plan.

## Global Shot Rules

- Photo heroes continue. The goal is not to remove photography; the goal is to
  make each page's photo carry a different meaning.
- The home page remains the anchor: quiet residential night exterior, daily OK
  premise, and enough negative space for copy. Lower pages must feel related in
  calmness and trust, but must not imitate the home hero's night apartment shot.
- Prohibited repetition pattern: do not mass-produce `wooden desk + paper +
  smartphone + pen + tea` scenes. Also avoid same desk, same paper stack, same
  pen placement, same tea cup, same brown tabletop, same top-down crop, or the
  same still-life repetition with minor prop swaps.
- Every page must differ from its nearest neighbor by at least two of: main
  subject, scene/location, camera angle, composition, time of day, or depth of
  field.
- Use real-looking but non-identifying people, hands, devices, and spaces. No
  readable real names, phone numbers, addresses, transaction IDs, support
  tickets, customer records, or provider account UI.
- Do not make the product look like a medical, rescue, security, care-service,
  public-agency dispatch, danger-detection, location-tracking, or 24-hour
  monitoring service.
- Do not imply guaranteed notification delivery, guaranteed rescue, guaranteed
  discovery, guaranteed recipient action, or guaranteed safety.
- Do not contradict the product facts: monthly 300 yen, no extra contact
  notification charge, two-contact URL consent before contact notifications,
  and no notification delivery guarantee.

## Replacement Priority Key

- `P0`: replace first; current concept is highly duplicated or risks the wrong
  meaning.
- `P1`: replace in the main batch; current concept is serviceable but needs
  stronger separation.
- `P2`: preserve or replace last; current direction is already differentiated
  or page uses a non-photo/interface hero that needs a future photo decision.

## Page Shot Plan

| Page path | Current problem | New hero concept | Main subject | Scene/location | Camera angle | Composition | Lighting/mood | Must avoid | Similarity risk | Replacement priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Current hero is strong and differentiated; risk is making lower pages copy its night-residential mood. | Keep as the top-level promise: a quiet home at night where the app's role is explained by page copy, not props. | Residential exterior with a few warm windows. | Apartment or small residential building exterior. | Wide eye-level or slightly low exterior shot. | Large negative space for copy, building offset, next section hinted below. | Calm night, warm window light, no drama. | Desk, paper, pen, smartphone, tea, emergency vehicle, hospital, police, isolated fear. | Lower pages must not become more night-apartment variants. | P2 |
| `/pricing` | Existing subscription desk reads like the same brown-table paperwork family as legal/support pages. | User-friendly subscription clarity without finance anxiety. | Abstract in-app subscription confirmation or price card on a phone. | Bright kitchen counter or hand-held phone near a daily-use shelf, not a work desk. | Close 3/4 angle from hand height. | Phone dominant, background soft, one clean supporting object at most. | Bright, practical, low-friction. | Credit cards, cash, receipt pile, desk, paper, pen, tea, discounts, urgency. | Too close to `/tokushoho` if it becomes formal billing paperwork. | P0 |
| `/notification-samples` | Shares message-card imagery with `/for-contacts` and `/how-it-works`; page role looks generic. | A preview library of possible SMS/app notification examples. | Fake message sample cards arranged as a clean product preview. | Neutral studio-like background or device-only product surface. | Front-facing or slight overhead, not top-down desk. | Organized rows/cards, enough space for page copy, no scattered paper. | Clear, instructional, readable. | Real names, real phone numbers, panic alerts, red emergency palette, paper cards, tea. | High with `/for-contacts`; this must be sample catalog, not recipient consent. | P0 |
| `/for-family` | Shares referrer imagery with `/share-message`; family education and template drafting blur together. | A respectful conversation before introducing the app. | Two adults in a calm explanation moment, phone secondary. | Living room, kitchen edge, or video-call-like domestic setting. | Medium eye-level human shot. | People are the subject; phone is visible but not dominant. | Warm daylight, open, consentful. | Surveillance posture, controlling family member, secret setup, paperwork desk, rescue implication. | High with `/share-message`; keep this conversation-centered. | P0 |
| `/for-contacts` | Reuses notification-sample imagery; recipient role and consent choice are missing. | A contact person receives and considers a consent request. | Hand holding a phone with abstract consent/SMS preview. | Entryway, sofa, train platform bench, or everyday waiting space. | Over-shoulder or close hand-held angle. | Phone readable as consent context; surrounding environment shows personal choice. | Neutral, self-directed, no pressure. | Alarmed face, obligation cues, emergency response, same message-card catalog as `/notification-samples`. | High with `/help/stop`; this is first consent, not command reply. | P0 |
| `/before-you-start` | Guidance-desk image makes preparation look like generic support content. | A pre-start readiness check before committing. | Phone checklist/readiness screen with optional hand. | Morning entryway, kitchen counter, or quiet pre-use moment. | Slight 3/4 top angle from standing height. | Checklist/device vertical emphasis; background signals preparation, not paperwork. | Clean morning light, practical, grounded. | Full paper checklist, pen, wood desk, tea, medical screening, urgency. | Medium with `/support`; this is pre-decision, not post-problem help. | P0 |
| `/how-it-works` | Reuses notification-sample cards; timing logic reads like message copy rather than process. | The 24h to 48h rule as a calm time ladder. | Timeline markers and simple device/app state. | Minimal product-mechanics scene with clock/calendar cue, not a desk. | Slight diagonal or straight-on timeline view. | Strong left-to-right or top-to-bottom progression, one focal timeline. | Precise, systematic, calm. | Countdown panic, red alarm, emergency dispatch, same SMS cards as `/notification-samples`. | High with `/delivery-status`; this is future flow, not history/log evidence. | P0 |
| `/trust` | Shares privacy-desk imagery; product limitations look like privacy policy instead of expectation setting. | Transparent boundary-setting: what the app can and cannot promise. | Person reviewing a clear can/cannot boundary on a phone or tablet. | Quiet indoor decision setting, no legal desk. | Eye-level or slightly over-shoulder. | Balanced split or boundary metaphor; human context plus simple interface. | Honest, steady, non-alarming. | Shield guarantee, lock cliche, emergency services, legal contract, surveillance camera. | High with `/privacy`; keep this about service limits, not data handling. | P0 |
| `/delivery-status` | Current settings-control image blurs delivery history with privacy choices. | Reading a notification history/log with uncertainty. | App-like delivery status rows: sent, possible delivery, failed, stopped, not consented. | Plain hand-held phone or clean interface surface. | Close screen-led angle. | Status rows are the hero subject; no success guarantee color dominance. | Analytical, transparent, calm. | Read-receipt guarantee, green all-success state, settings toggle metaphor, desk/paper/tea. | High with `/how-it-works`; this is retrospective log reading. | P0 |
| `/help/stop` | Support desk image makes STOP/HELP command guidance indistinct from general support. | A contact controls SMS receipt by replying STOP or HELP. | Phone SMS thread with fake STOP/HELP/START context. | Everyday recipient setting, separate from office support. | Tight hand-held phone crop. | Command message is focal, surroundings minimal. | Reassuring, simple, non-judgmental. | Panic button, emergency stop, legal paper, support desk, real message details. | High with `/for-contacts`; this is after receiving SMS, not first consent. | P0 |
| `/share-message` | Shares referrer imagery with `/for-family`; template work looks like the same family intro page. | Drafting a respectful message before sending. | Phone message draft/template, no real names or numbers. | Sofa, quiet corner, or personal phone-in-hand scene. | Close 3/4 hand-held angle. | Draft in foreground; human context softer and more private than `/for-family`. | Thoughtful, gentle, conversational. | Paper letter, clipboard, sales pitch, surveillance wording, same two-person conversation as `/for-family`. | High with `/for-family`; keep this draft-centered. | P0 |
| `/support` | Guidance-desk image is shared with preparation and STOP/HELP pages. | General support hub and next-step guidance. | Help topic list or support inbox-style interface with generic labels. | Clean help-center-like device/laptop scene, not paperwork. | Straight-on or slight 3/4 device view. | Centered support interface with categories; no intimate SMS thread. | Organized, calm, serviceable. | Call-center stock photo, headset, ticket panic, legal desk, real email content. | Medium with `/manual/faq`; support is contact/process, FAQ is self-serve browsing. | P0 |
| `/privacy` | Private-desk still life overlaps with `/trust` and other legal pages. | Data handling boundaries without lock-and-paper cliches. | Abstract data-category panels or privacy section on a device. | Minimal policy/product scene, no real records. | Straight-on device or shallow 3/4 angle. | Clean layered panels with a visible boundary or grouping concept. | Formal, restrained, trustworthy. | Lock icon cliche as main subject, surveillance camera, paper policy stack, wood desk, tea. | High with `/privacy-choices`; privacy explains policy, choices shows user actions. | P1 |
| `/terms` | Organized documents on desk is part of the repeated legal paper pattern. | Structured service conditions without contract-signing drama. | Terms section blocks in a reading interface or abstract agreement layout. | Neutral formal surface or device reading mode. | Straight-on or slight top angle, not top-down desk. | Vertical structured blocks, sparse surroundings. | Clear, formal, low-drama. | Signature pen, contract signing, legal threat, same paper/desk/tea setup. | High with `/tokushoho`; terms are service rules, not transaction disclosure. | P1 |
| `/privacy-choices` | Settings-control imagery is close to `/delivery-status` and generic settings. | User-controlled data choices and request paths. | Choice/request cards for deletion, data request, STOP, subscription guidance. | Device settings/action screen in a clean personal context. | Close screen-led angle. | Multiple choice modules with one clear action state; not log rows. | Empowering, calm, procedural. | Generic toggles only, deletion scare warning, delivery/read status rows, real account data. | High with `/delivery-status`; choices are user actions, not system logs. | P1 |
| `/tokushoho` | Transaction ledger is more distinct but still part of document/desk language. | Formal subscription disclosure tied to App Store billing context. | Sparse disclosure panel or abstract App Store subscription terms. | Clean official-feeling product/legal surface. | Symmetrical straight-on or slight 3/4. | Sparse, official, fewer lifestyle cues than `/pricing`. | Neutral, exact, formal. | Cash register, paper ledger, receipt pile, credit-card anxiety, sale imagery. | High with `/pricing`; keep this formal disclosure, not user pricing. | P1 |
| `/manual` | Current manual hero is interface/card based, differentiated but not yet a photo direction. | Guided broad reference from setup to daily OK. | User learning with phone plus step cards/app preview. | Quiet learning context, table-free if possible; standing or seated device-in-use. | Medium 3/4 human-and-device angle. | Guide headline area plus practical preview; broader than tutorial. | Patient, accessible, instructional. | Binder/manual book, developer screenshots, stock support agent, desk/paper/pen/tea. | Medium with `/manual/tutorial`; manual is broad reference. | P2 |
| `/manual/faq` | FAQ hero is interface/card based and can blur with support/manual if photographed generically. | Self-serve answer directory. | Question category cards or FAQ browsing interface. | Help-center browsing context, possibly tablet/phone. | Straight-on interface-led angle. | Grid/list hierarchy is the subject; no support contact emphasis. | Light, searchable, clear. | Paper FAQ sheet, headset support, legal document look, same guide scene as `/manual`. | Medium with `/support`; FAQ is self-serve, support is contact/process. | P2 |
| `/manual/tutorial` | Tutorial uses UI preview cards; future photo must stay action-specific, not broad manual. | A short first OK practice path. | Hand pressing or about to press OK on the phone. | Daily routine setting, such as morning counter, hallway, or bedside edge. | Close action-forward hand-held angle. | OK action is focal; next-step preview secondary. | Encouraging, practical, low cognitive load. | Complex setup, failure state, paperwork, emergency implication, broad manual overview. | Medium with `/manual`; tutorial is narrow action practice. | P2 |

## Batch Guidance For Image Generation

- Start with `P0` pages because they cause most current duplication. Generate
  them as a coordinated set, not one isolated hero at a time.
- Hold `/` as the reference anchor. Do not regenerate it unless a later review
  explicitly asks for home hero replacement.
- For each generated page, produce desktop and mobile crops from the same shot
  concept. The mobile crop may simplify the subject, but it must not change the
  page meaning.
- Avoid brown/tea/wood dominance across the batch. Use varied locations:
  residential exterior, living room, entryway, phone-in-hand, clean interface
  surface, support hub, formal policy surface, and daily routine context.
- Keep legal/policy pages visually quieter than relationship pages, and keep
  product-mechanics pages more interface-led than relationship pages.
- Before implementation, compare neighboring pages for similarity risk:
  `/notification-samples` vs `/for-contacts`, `/how-it-works` vs
  `/delivery-status`, `/for-family` vs `/share-message`, `/privacy` vs
  `/privacy-choices`, `/pricing` vs `/tokushoho`, `/support` vs `/manual/faq`,
  and `/manual` vs `/manual/tutorial`.

## Pre-Generation Checklist

- Each of the 19 target pages has a page-specific photo concept.
- The plan keeps photo heroes and preserves the top page's quiet residential
  anchor.
- No page depends on the repeated `wooden desk + paper + smartphone + pen +
  tea` pattern.
- No shot implies medical care, rescue, security, elder-care service, public
  agency dispatch, danger detection, location tracking, guaranteed delivery, or
  24-hour monitoring.
- No shot adds claims beyond monthly 300 yen, no extra contact notification
  charge, two-contact URL consent, and non-guaranteed notification delivery.
- No real personal data or provider records appear in any image direction.
