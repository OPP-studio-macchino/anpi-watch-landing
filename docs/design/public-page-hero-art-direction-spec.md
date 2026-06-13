# Public Page Hero Art Direction Spec

Last checked: 2026-06-12

This spec defines the cross-page hero photo direction for the public
`anpi-watch-landing` pages before any image generation or implementation work.
It is based on the current route source in `app/**`, shared page components in
`components/**`, and the current hero inventory in
`docs/design/hero-image-inventory.md`.

No image generation, asset movement, UI implementation, deployment, Vercel
operation, commit, or push is part of this spec.

## Target Pages

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

## Findings

- The home page already has a stronger role split than the lower pages: the
  night apartment hero establishes the product premise, while the supporting
  visuals separately explain daily OK, the 48h rule, and referrer context.
- Several lower pages currently use the same desktop hero image or the same
  object language. This makes different pages read as variants of one desk
  scene instead of different decisions, relationships, mechanics, policies, and
  help states.
- The highest similarity clusters are:
  - `/notification-samples`, `/for-contacts`, and `/how-it-works`: message-card
    or notification-card imagery is shared across distinct page roles.
  - `/support`, `/before-you-start`, and `/help/stop`: guidance-desk imagery is
    shared across preparation, support, and SMS command explanation.
  - `/privacy` and `/trust`: private-desk imagery is shared between legal data
    handling and product limitation/trust education.
  - `/for-family` and `/share-message`: referrer-guide imagery is shared across
    relationship education and message-template work.
- The design problem is not lack of tone consistency. The problem is weak
  semantic separation and repeated still-life assets.

## Visual Groups

Use these groups to separate page meaning before choosing a subject, room, crop,
or prop set.

| Visual group | Role in the site | Pages |
| --- | --- | --- |
| Relationship / Introduction | Show people deciding, explaining, receiving, or introducing the product without implying surveillance or guaranteed rescue. | `/`, `/for-family`, `/for-contacts`, `/share-message` |
| Product Mechanics | Make timing, notification state, logs, and subscription mechanics legible without turning every page into the same phone-on-desk still life. | `/pricing`, `/notification-samples`, `/how-it-works`, `/delivery-status` |
| Decision / Preparation | Help a user or family decide whether the service fits before starting. | `/before-you-start`, `/trust` |
| Legal / Policy | Communicate formal data, terms, privacy, and transaction disclosure pages without generic paperwork repetition. | `/privacy`, `/terms`, `/privacy-choices`, `/tokushoho` |
| Support / Manual | Show guided help, step-by-step usage, FAQ, and tutorial contexts clearly and calmly. | `/help/stop`, `/support`, `/manual`, `/manual/faq`, `/manual/tutorial` |

## Repetition Prevention Rules

- Do not solve lower-page heroes by repeating the same desk / paper / pen /
  smartphone repetition. A phone may appear when the page is about app or SMS
  mechanics, but the phone must not be paired with the same top-down wooden
  desk, document sheet, pen, and small prop arrangement across pages.
- Each page must start from a semantic role, not an object list. First define
  what the page helps the visitor understand, then choose subject, scene, crop,
  and light.
- One desktop hero asset must not carry more than one page role unless a future
  design review explicitly approves that reuse.
- Pages in the same visual group must differ by at least two of: main subject,
  location, camera angle, focal distance, or time of day.
- Legal / Policy pages may use structured documents, settings controls, or
  records, but no more than one Legal / Policy hero should read as a paper
  document on a desk.
- Product Mechanics pages should use interface state, timing, message flow, or
  log status as the primary meaning. Avoid generic notification cards when the
  page is specifically about timeline, history, or consent.
- Relationship / Introduction pages should show consentful explanation and
  choice. Avoid imagery that implies monitoring, tracking, medical care, rescue,
  emergency dispatch, or family control over the user.
- Support / Manual pages should feel like guided help, not a legal help desk or
  customer-service stock photo. Prefer clear steps, app screen context, and
  calm problem-solving.
- Do not include readable real personal data, phone numbers, names, addresses,
  account details, transaction IDs, or provider UI that could be mistaken for a
  real user record.
- Mobile heroes may crop or simplify the desktop concept, but they should not
  introduce a different page meaning.

## Page-Level Hero Direction

| Page path | Page role | Current hero issue | Visual group | Hero concept | Main subject | Scene/location | Composition | Mood/light | Must avoid | Similarity risk with other pages |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Product promise and first explanation: daily OK, long non-response, chosen contacts. | Current night apartment hero is differentiated and should remain the site anchor rather than becoming a template for lower pages. | Relationship / Introduction | Quiet distance and readiness: a lived-in home exterior at night, with the app promise carried by copy, not props. | Apartment windows or residential exterior with a small sense of life inside. | Exterior residential night scene. | Wide establishing frame with enough dark area for hero copy and a hint of next content below the fold. | Quiet, warm window light, calm night, not dramatic. | Emergency imagery, hospital/police cues, fearful isolation, desk still life. | Risk is making lower pages copy the same moody home exterior; reserve this tone for the top page only. |
| `/pricing` | Explain monthly subscription and what is included. | Current desktop direction is a subscription desk with notebook/card, too close to legal/support desk scenes. | Product Mechanics | Clear subscription decision without finance anxiety: a simple in-app subscription confirmation context. | Phone showing an abstract subscription/payment state, with no real provider data. | Neutral counter or hand-held context near a daily-use space, not a desk. | Tight 3/4 crop, device dominant, secondary background minimal. | Bright, practical, low-friction. | Credit-card glamour, cash, receipts pile, wood desk, pen, scare pricing, discounts not in source. | Can become too close to `/tokushoho`; keep `/pricing` user-facing and simple, while `/tokushoho` stays formal disclosure. |
| `/notification-samples` | Show examples of SMS and app notifications before use. | Shares message-card imagery with `/for-contacts` and `/how-it-works`, flattening sample copy into general mechanics. | Product Mechanics | Message examples as a controlled preview library. | Layered SMS/app notification samples with timing labels, using fake placeholders only. | Clean device or floating cards on a neutral background, not a physical desk. | Front-facing or slight angle; message samples organized in rows, not scattered. | Clear, readable, instructional. | Real phone numbers, real names, alert panic, emergency-red palette, generic paper cards. | High risk with `/for-contacts`; this page should look like a sample catalog, while `/for-contacts` should show the recipient context. |
| `/for-family` | Explain how family or partners can introduce the app to the user. | Current referrer-guide asset is also used by `/share-message`, so relationship education and template-writing blur together. | Relationship / Introduction | A respectful conversation before introduction. | Two adults or a caller/receiver context where one person is explaining, not controlling. | Home living room, kitchen edge, or video-call-like domestic scene. | Medium human-centered crop with phone secondary; faces can be partial or non-identifying. | Warm, open, consentful. | Monitoring posture, hovering over someone, secret setup, rescue drama, paperwork desk. | Risk with `/share-message`; keep this page conversational and person-to-person, not text-template focused. |
| `/for-contacts` | Explain what it means to be a registered contact and how SMS consent works. | Reuses notification sample imagery, so the recipient's role and consent choice are not visually distinct. | Relationship / Introduction | Recipient receives and evaluates a consent request. | Contact person's hand holding a phone with a simple consent/SMS preview. | Everyday personal setting such as entryway, sofa, or transit waiting area. | Over-shoulder or hand-held crop; phone readable enough as a generic consent moment. | Neutral, self-directed, no pressure. | Alarmed recipient, emergency response, obligation cues, same notification-card layout as `/notification-samples`. | Risk with `/notification-samples` and `/help/stop`; make this about first consent choice, not command replies or sample library. |
| `/before-you-start` | Checklist for fit, prerequisites, and expectations before starting. | Uses the support guidance-desk asset, making preparation look like generic help content. | Decision / Preparation | Pre-start self-check before committing. | A phone checklist or simple readiness UI, with human hand optional. | Morning entryway, kitchen counter, or quiet pre-use moment. | Vertical checklist/device emphasis; background should signal preparation, not office paperwork. | Clear morning light, practical, grounded. | Full paper checklist, pen, generic support desk, urgency or medical screening. | Risk with `/support`; this page is pre-decision readiness, while support is post-problem help. |
| `/how-it-works` | Explain the 24h / 30h / 36h / 42h / 48h rule. | Reuses notification-sample cards, so timing logic reads as message copy rather than process. | Product Mechanics | Time-based escalation as a visual timeline. | 48h timeline with state markers and simple device/app context. | Abstract product-mechanics scene or device beside a clock/calendar cue. | Horizontal or diagonal timeline; strong left-to-right or top-to-bottom progression. | Precise, calm, systematic. | Same SMS cards as `/notification-samples`, emergency countdown, red alarm clock, rescue implication. | Risk with `/delivery-status`; this page is forward-looking timing, while `/delivery-status` is after-the-fact log interpretation. |
| `/trust` | Explain what the product can and cannot do. | Shares privacy-desk imagery, so product limitations look like data policy. | Decision / Preparation | Transparent boundary-setting: clear separation between possible and not promised. | Two-column can/cannot visual, or a person reviewing product boundaries on device. | Neutral indoor decision setting, not legal paperwork. | Balanced split composition with visible negative space and clear boundary metaphor. | Honest, steady, non-alarming. | Shield/guarantee imagery, emergency services, legal contract mood, data-lock privacy metaphor. | Risk with `/privacy`; keep `/trust` about service limits and expectations, not information handling. |
| `/delivery-status` | Explain notification history, delivery status, and what logs do or do not mean. | Uses privacy-choices/settings-control imagery, blurring log interpretation with data choice settings. | Product Mechanics | Reading a delivery log with uncertainty clearly represented. | Notification history screen with status markers such as sent, possible delivery, failed, stopped, not yet consented. | App interface context with a plain background; optional hand-held phone. | Screen-led composition; status rows are the hero subject. | Analytical, calm, transparent. | Green success guarantee, read receipt guarantee, settings toggle metaphor, privacy-control image reuse. | Risk with `/how-it-works`; this is retrospective evidence, not the timing ladder. |
| `/help/stop` | Explain STOP / HELP / START commands and SMS stopping. | Uses support desk imagery, making command-specific SMS help indistinct from general support. | Support / Manual | A contact controls SMS receipt by replying STOP or HELP. | Phone SMS thread showing fake STOP/HELP interaction. | Recipient's everyday setting, separate from support center and consent scene. | Tight phone/message crop with clear command focus. | Reassuring, simple, non-judgmental. | Emergency-stop imagery, panic button, legal paperwork, same support desk as `/support`. | Risk with `/for-contacts`; `/help/stop` is command control after receiving SMS, not first consent education. |
| `/share-message` | Provide message templates for family/partner to propose the app to the user. | Shares referrer-guide imagery with `/for-family`, so template drafting looks like the same intro page. | Relationship / Introduction | Drafting a respectful message before sending. | Messaging draft or template being reviewed, with no real names or numbers. | Personal phone-in-hand scene, possibly sofa or quiet corner. | Phone/message draft in foreground; human context softer than `/for-family`. | Thoughtful, gentle, conversational. | Paper letter, clipboard, pressure-sale framing, surveillance language, same two-person conversation as `/for-family`. | Risk with `/for-family`; keep this page text/draft-centered, while `/for-family` is conversation-centered. |
| `/support` | Provide support contact and supportable topics. | Uses guidance-desk imagery also used by preparation and STOP/HELP pages. | Support / Manual | General support hub and next step guidance. | Help inbox or support topic list, with support address represented generically. | Clean help-center-like device screen or laptop/phone pairing, not paperwork. | Centered support interface with topic categories; less intimate than `/help/stop`. | Calm, organized, serviceable. | Call-center stock photo, ticket panic, legal desk, real email contents, same command SMS as `/help/stop`. | Risk with `/manual/faq`; support is contact-and-process guidance, FAQ is self-serve question browsing. |
| `/privacy` | Explain what information is handled and why. | Uses private desk imagery; overlaps with `/trust` and other legal still-life assets. | Legal / Policy | Data handling boundaries without generic lock-and-paper visuals. | Abstracted data categories or privacy settings with clear boundaries. | Minimal product-policy scene, possibly device with privacy section, no real user data. | Clean layered panels or device plus boundary line; avoid top-down desk. | Formal, restrained, trustworthy. | Lock cliche, paper policy stack, surveillance camera, real personal data, fear-based privacy imagery. | Risk with `/privacy-choices`; `/privacy` explains policy, while `/privacy-choices` should show user actions/requests. |
| `/terms` | Explain service conditions. | Current terms hero is organized documents on a desk, part of the repeated legal paper pattern. | Legal / Policy | Conditions as structured agreement, not paperwork pile. | Terms sections or agreement structure shown abstractly. | Neutral formal surface or device reading mode, distinct from privacy and tokushoho. | Structured vertical blocks; document feel allowed but not physical paper-on-desk. | Clear, formal, low-drama. | Signature pen, contract signing, legal threat mood, same paper/desk setup as `/privacy` or `/tokushoho`. | Risk with `/tokushoho`; terms should feel like service rules, not transaction disclosure. |
| `/privacy-choices` | Explain deletion, account, data, STOP, and subscription choices. | Current settings-control imagery is close to `/delivery-status` and generic settings. | Legal / Policy | User-controlled data choices and requests. | Choice controls or request cards for account deletion, data request, STOP, subscription management. | Device settings/action screen, isolated and readable, not desk. | Multiple choice modules with a clear selected/available state. | Empowering, calm, procedural. | Generic settings toggles only, read-receipt/log status imagery, scary data deletion warning. | Risk with `/delivery-status`; choices are user actions, delivery-status is system log interpretation. |
| `/tokushoho` | Present transaction-law disclosure for App Store subscription. | Current ledger/transaction image is more distinct than other legal pages, but still part of document/desk language. | Legal / Policy | Formal subscription disclosure tied to App Store billing context. | Minimal ledger/disclosure panel with subscription terms, not a receipt pile. | Clean formal disclosure layout, possibly a device with App Store subscription context. | Symmetrical, official, sparse; fewer lifestyle cues than `/pricing`. | Neutral, formal, exact. | Cash register, paper ledger on wood desk, discount/sale cues, credit-card anxiety. | Risk with `/pricing`; `/pricing` should feel user-friendly, `/tokushoho` should feel formal disclosure. |
| `/manual` | Full user manual and step-by-step guide. | Current manual hero is interface/card based, not a photo hero; it is differentiated but not aligned to page-photo planning yet. | Support / Manual | Guided use from setup to daily OK. | App screen previews and step cards, with a user learning the flow. | Device-in-use learning context, not office documentation. | Split between concise guide headline and practical app preview. | Patient, instructional, accessible. | Dense manual book, paper binder, developer screenshot clutter, stock support agent. | Risk with `/manual/tutorial`; manual is broad reference, tutorial is short first-run course. |
| `/manual/faq` | Answer common questions and route users to the right explanation. | Current FAQ hero is card/interface based with no page photo; it may read close to manual if future assets are not separated. | Support / Manual | Self-serve answer directory. | Question categories and answer cards, not a person at a desk. | Help-center browsing context or simplified FAQ interface. | Grid/list of question groups with clear hierarchy. | Clear, light, searchable. | Paper FAQ sheet, customer-service headset, legal document look, same guide hero as `/manual`. | Risk with `/support`; FAQ is self-serve browsing, support is contact and request handling. |
| `/manual/tutorial` | Teach a first 3-minute OK flow. | Current tutorial uses UI preview cards and a course metaphor; future photo direction should stay action-specific. | Support / Manual | One short practice path: open home, press OK, check time, view record. | Phone showing OK action and next step preview. | Hand-held phone in a simple daily routine setting. | Action-forward crop; OK button or step preview is the focal point. | Encouraging, practical, low cognitive load. | Broad manual overview, paperwork, complex setup, emergency or failure state. | Risk with `/manual`; tutorial must be narrower and more action-oriented than the full manual. |

## Approval Checklist Before Image Generation

- Confirm each target page still exists in `app/**` and still has the same role.
- Confirm each generated prompt maps to one page row and one visual group.
- Confirm no generated batch reintroduces same desk / paper / pen /
  smartphone repetition across lower pages.
- Confirm no prompt adds product capabilities, pricing, notification timing,
  consent behavior, legal claim, guarantee, or public-safety implication not
  already present in source.
- Confirm all visible names, phone numbers, message contents, transaction
  details, and account data are fictional placeholders or visually abstracted.
- Confirm desktop and mobile crops preserve the same page meaning.

## Remaining Risks

- This spec does not verify the currently deployed production pages. It is
  grounded in the local landing repo sources listed above.
- The current working tree already contains unrelated uncommitted changes in
  `app/terms/page.tsx`, `public/**`, and `docs/design/hero-image-inventory.md`.
  Those are not part of this spec.
- Future image generation still needs separate review for factual safety,
  accessibility, cropping, and mobile/desktop fit before implementation.
