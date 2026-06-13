# Public Page Hero P0 Generation Prompts

Last checked: 2026-06-12

Purpose: prompt pack for generating only the `replacement priority = P0` public
page hero photos from `docs/design/public-page-hero-shot-plan-v2.md`.

This document is prompt planning only. Do not generate images, add assets,
delete assets, move assets, change implementation files, deploy, use Vercel,
commit, or push as part of this document.

## P0 Target Pages

The P0 pages are the pages that currently cause the clearest duplication or
meaning drift in the lower-page hero system:

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

## Global Negative Prompt

Apply this to every P0 generation prompt:

No repeated wooden desk flat lay. No paper + pen + smartphone + tea template.
No generic stock photo feeling. No readable text. No readable numbers. No app
logo. No real names, phone numbers, addresses, account IDs, transaction IDs, or
provider UI. No medical, rescue, security, elder-care, nursing-care, public
agency dispatch, emergency, danger-detection, location-tracking, guaranteed
safety, guaranteed delivery, or 24-hour monitoring impression. No police,
ambulance, hospital, fire department, siren, panic, red alert, life-saving, or
surveillance mood. Do not imply extra charges, per-notification billing,
one-contact activation, or guaranteed notification arrival.

## Prompt Format Notes

- Generate photography-style hero images, not illustrations.
- Keep the top page's quiet residential anchor in mind, but do not copy its
  night apartment exterior.
- For each target page, create a desktop hero and a mobile crop from the same
  shot concept unless a later asset review decides otherwise.
- All UI or message surfaces must be abstract or blurred enough to avoid
  readable text and readable numbers.
- After generation, compare all P0 images side by side before implementation.

## P0 Prompts

### `/pricing`

- target page: `/pricing`
- replacement priority: P0
- visual group: Product Mechanics
- page role: Explain the monthly subscription and what is included without
  making pricing feel scary or sales-driven.
- hero concept: A calm user-facing subscription clarity moment, shown as a
  simple in-app subscription confirmation context rather than paperwork.
- main subject: A hand-held phone with an abstract subscription state or price
  card, no readable text or numbers.
- scene/location: Bright kitchen counter or small daily-use shelf area, not an
  office desk.
- camera angle: Close 3/4 angle from hand height.
- composition: Phone is dominant in the right or center third; background is
  soft and practical with one neutral household object at most.
- lighting/mood: Bright, low-friction, practical daylight.
- must avoid: Credit cards, cash, receipts, ledger, contract, wooden desk,
  paper, pen, tea, discount/sale cues, urgency, readable price.
- similarity risk: Can become too close to `/tokushoho` if it looks like formal
  billing disclosure; can become too close to `/before-you-start` if it becomes
  a checklist.
- should not look like: `/tokushoho` formal transaction disclosure, `/terms`
  contract reading, or the old subscription desk still life.
- output filename: `public/page-heroes/anpittchi-pricing-hero-subscription-clarity-v2.webp`
- mobile output filename: `public/page-heroes/mobile/anpittchi-pricing-mobile-hero-v2.webp`
- generation prompt: Photo-realistic calm product hero for a Japanese iPhone
  app pricing page. Show a hand holding a phone near a bright kitchen counter
  or simple daily-use shelf. The phone shows an abstract subscription confirmation
  or price-card style interface, but all text and numbers are unreadable. The
  scene feels practical and transparent, not promotional. Use natural daylight,
  shallow depth of field, clean negative space for page copy, and a warm but not
  brown-dominant palette. No wooden desk flat lay, no papers, no pen, no tea,
  no credit cards, no cash, no receipt, no app logo, no readable text, no
  readable numbers.
- comparison notes: Compare against `/tokushoho` and `/terms`; this image must
  feel like user-facing pricing clarity, not legal or transaction paperwork.

### `/notification-samples`

- target page: `/notification-samples`
- replacement priority: P0
- visual group: Product Mechanics
- page role: Show examples of possible SMS and app notifications before use.
- hero concept: A controlled preview library of message examples.
- main subject: Abstract layered message sample cards or device message preview,
  with no readable text or numbers.
- scene/location: Neutral studio-like product surface or clean device-only
  background, not a physical desk.
- camera angle: Front-facing or slight overhead, explicitly not a top-down
  flat lay.
- composition: Organized rows of sample cards; clear page-copy space; no
  scattered props.
- lighting/mood: Clear, instructional, readable, calm.
- must avoid: Real phone numbers, real names, readable message content, panic
  alert design, emergency red, paper cards, tea, wood desk.
- similarity risk: High with `/for-contacts` and `/how-it-works`; this page is
  a sample catalog, not a recipient consent scene or timeline.
- should not look like: `/for-contacts` consent moment, `/help/stop` command
  reply thread, or `/how-it-works` time ladder.
- output filename: `public/page-heroes/anpittchi-notification-samples-hero-message-library-v2.webp`
- mobile output filename: `public/page-heroes/mobile/anpittchi-notification-samples-mobile-hero-v2.webp`
- generation prompt: Photo-realistic product hero showing an organized preview
  library of abstract SMS/app notification samples. Use a clean neutral
  background with floating or device-contained message cards arranged in tidy
  rows. All text and numbers must be unreadable placeholder shapes. The image
  should feel instructional, calm, and transparent, with clear negative space
  for page copy. No wooden desk, no paper, no pen, no tea, no real message
  content, no app logo, no emergency red, no panic mood, no generic stock-photo
  people.
- comparison notes: Compare next to `/for-contacts`; `/notification-samples`
  should read as a preview catalog, while `/for-contacts` should read as a real
  person deciding whether to consent.

### `/for-family`

- target page: `/for-family`
- replacement priority: P0
- visual group: Relationship / Introduction
- page role: Explain how family or partners can respectfully introduce the app
  to the user.
- hero concept: A consentful conversation before introduction.
- main subject: Two adults in a calm explanation moment; phone is secondary.
- scene/location: Living room, kitchen edge, or video-call-like domestic
  setting.
- camera angle: Medium eye-level human shot.
- composition: People are the main subject; phone is visible but not dominant;
  leave safe negative space for copy.
- lighting/mood: Warm daylight, open, gentle, consentful.
- must avoid: Monitoring posture, controlling family member, secret setup,
  paperwork desk, rescue implication, emergency mood, surveillance framing.
- similarity risk: High with `/share-message`; this page must be conversation
  centered, not template drafting.
- should not look like: `/share-message` phone draft scene, `/for-contacts`
  recipient consent scene, or a caregiver/medical consultation.
- output filename: `public/page-heroes/anpittchi-for-family-hero-respectful-conversation-v2.webp`
- mobile output filename: `public/page-heroes/mobile/anpittchi-for-family-mobile-hero-v2.webp`
- generation prompt: Photo-realistic hero image for a respectful family
  introduction page. Show two adults in a calm domestic conversation in a living
  room or kitchen-edge setting. One phone may be visible as a secondary object,
  but the human conversation is the subject. Use warm natural daylight and a
  relaxed composition that suggests explanation and consent, not control. Faces
  may be partial or softly framed, with no identifiable personal data. No
  medical, rescue, security, care-service, surveillance, or emergency mood. No
  wooden desk flat lay, no paper, no pen, no tea, no readable text, no app logo.
- comparison notes: Compare against `/share-message`; this image should be
  person-to-person conversation, while `/share-message` should be phone draft
  composition.

### `/for-contacts`

- target page: `/for-contacts`
- replacement priority: P0
- visual group: Relationship / Introduction
- page role: Explain what it means to be a registered contact and how SMS
  consent works.
- hero concept: A contact person receives and considers a consent request.
- main subject: Hand holding a phone with an abstract consent/SMS preview.
- scene/location: Entryway, sofa, train platform bench, or everyday waiting
  space.
- camera angle: Over-shoulder or close hand-held angle.
- composition: Phone is readable as a consent context but text is not legible;
  surroundings show personal choice and everyday context.
- lighting/mood: Neutral, self-directed, no pressure.
- must avoid: Alarmed face, obligation cues, emergency response, sample-card
  catalog layout, STOP/HELP command thread, readable text or numbers.
- similarity risk: High with `/notification-samples` and `/help/stop`; this is
  first consent, not a sample library or command reply.
- should not look like: `/notification-samples` catalog, `/help/stop` SMS
  command screen, or `/for-family` two-person conversation.
- output filename: `public/page-heroes/anpittchi-for-contacts-hero-consent-choice-v2.webp`
- mobile output filename: `public/page-heroes/mobile/anpittchi-for-contacts-mobile-hero-v2.webp`
- generation prompt: Photo-realistic hero image of a person calmly considering
  a contact consent request on a phone in an everyday setting such as an
  entryway, sofa, or public waiting bench. Use an over-shoulder or close
  hand-held angle. The phone shows an abstract SMS/consent preview with no
  readable text or numbers. The mood is neutral and self-directed, showing
  choice without pressure. No emergency mood, no obligation, no rescue, no
  medical or security impression, no wooden desk, no paper, no pen, no tea, no
  app logo.
- comparison notes: Compare against `/help/stop`; `/for-contacts` is consent
  before participation, while `/help/stop` is control after receiving SMS.

### `/before-you-start`

- target page: `/before-you-start`
- replacement priority: P0
- visual group: Decision / Preparation
- page role: Help users check fit, prerequisites, and expectations before
  starting.
- hero concept: A pre-start readiness check before committing.
- main subject: Phone checklist/readiness screen with optional hand.
- scene/location: Morning entryway, kitchen counter, or quiet pre-use moment.
- camera angle: Slight 3/4 top angle from standing height.
- composition: Vertical checklist/device emphasis; background suggests
  practical preparation, not paperwork.
- lighting/mood: Clean morning light, grounded, practical.
- must avoid: Full paper checklist, pen, wood desk, tea, medical screening,
  urgency, support/help desk mood.
- similarity risk: Medium with `/support`; this is pre-decision readiness, not
  post-problem help.
- should not look like: `/support` help hub, `/pricing` subscription decision,
  or old guidance-desk still life.
- output filename: `public/page-heroes/anpittchi-before-you-start-hero-readiness-check-v2.webp`
- mobile output filename: `public/page-heroes/mobile/anpittchi-before-you-start-mobile-hero-v2.webp`
- generation prompt: Photo-realistic hero image for a pre-start checklist page.
  Show a phone with an abstract readiness checklist interface in a morning
  entryway or quiet kitchen-counter moment. The checklist is visual only with no
  readable text or numbers. The scene should feel practical and grounded, like
  preparing before starting, not asking support for help. Use clean morning
  daylight and a vertical device-focused composition. No wooden desk, no paper,
  no pen, no tea, no medical screening, no urgency, no app logo, no readable
  text.
- comparison notes: Compare against `/support`; this image should feel like
  self-check before setup, while `/support` should feel like a general help hub.

### `/how-it-works`

- target page: `/how-it-works`
- replacement priority: P0
- visual group: Product Mechanics
- page role: Explain the 24h / 30h / 36h / 42h / 48h notification rule.
- hero concept: A calm time ladder showing the staged rule.
- main subject: Timeline markers and a simple device/app state.
- scene/location: Minimal product-mechanics scene with clock or calendar cue,
  not a desk.
- camera angle: Slight diagonal or straight-on timeline view.
- composition: Clear left-to-right or top-to-bottom progression with one focal
  timeline.
- lighting/mood: Precise, systematic, calm.
- must avoid: Countdown panic, red alarm, emergency dispatch, sample SMS cards,
  readable text/numbers, wood desk, paper, pen, tea.
- similarity risk: High with `/delivery-status`; this is future flow, not
  after-the-fact log evidence.
- should not look like: `/delivery-status` log rows, `/notification-samples`
  message catalog, or emergency countdown.
- output filename: `public/page-heroes/anpittchi-how-it-works-hero-time-ladder-v2.webp`
- mobile output filename: `public/page-heroes/mobile/anpittchi-how-it-works-mobile-hero-v2.webp`
- generation prompt: Photo-realistic product-mechanics hero showing a calm time
  ladder concept for staged notifications. Use abstract timeline markers and a
  simple device/app state with no readable text or numbers. Include a subtle
  clock or calendar cue if useful, but avoid alarm imagery. The composition
  should clearly progress left-to-right or top-to-bottom and feel precise,
  transparent, and calm. No emergency countdown, no red alert, no rescue
  imagery, no SMS sample catalog, no wooden desk, no paper, no pen, no tea, no
  app logo.
- comparison notes: Compare against `/delivery-status`; `/how-it-works` should
  look forward-looking and procedural, while `/delivery-status` should look
  retrospective and evidence-based.

### `/trust`

- target page: `/trust`
- replacement priority: P0
- visual group: Decision / Preparation
- page role: Explain what the product can and cannot do.
- hero concept: Transparent boundary-setting without fear or legal cliches.
- main subject: Person reviewing a clear abstract can/cannot boundary on phone
  or tablet.
- scene/location: Quiet indoor decision setting, not a legal desk.
- camera angle: Eye-level or slightly over-shoulder.
- composition: Balanced split or boundary metaphor; human context plus simple
  interface; negative space for copy.
- lighting/mood: Honest, steady, non-alarming.
- must avoid: Shield guarantee, lock cliche, emergency services, legal
  contract, surveillance camera, hospital, police, security product mood.
- similarity risk: High with `/privacy`; this is service limits and
  expectations, not data handling policy.
- should not look like: `/privacy` policy surface, `/terms` agreement page, or
  a safety guarantee campaign.
- output filename: `public/page-heroes/anpittchi-trust-hero-boundary-setting-v2.webp`
- mobile output filename: `public/page-heroes/mobile/anpittchi-trust-mobile-hero-v2.webp`
- generation prompt: Photo-realistic hero for a product trust and limitations
  page. Show a person calmly reviewing a simple abstract can/cannot boundary on
  a phone or tablet in a quiet indoor setting. No readable text or numbers. The
  scene should feel honest and steady, making boundaries clear without fear or
  legal drama. Use balanced composition and soft natural light. No shield
  guarantee, no lock cliche, no emergency services, no surveillance camera, no
  medical/rescue/security/care-service impression, no wooden desk, no paper, no
  pen, no tea, no app logo.
- comparison notes: Compare against `/privacy`; `/trust` should explain product
  limits, while `/privacy` should later explain information handling.

### `/delivery-status`

- target page: `/delivery-status`
- replacement priority: P0
- visual group: Product Mechanics
- page role: Explain notification history, delivery status, and what logs do
  or do not mean.
- hero concept: Reading a notification history/log with uncertainty.
- main subject: App-like delivery status rows: sent, possible delivery, failed,
  stopped, not yet consented, all abstract and unreadable.
- scene/location: Plain hand-held phone or clean interface surface.
- camera angle: Close screen-led angle.
- composition: Status rows are the hero subject; avoid all-green success
  dominance.
- lighting/mood: Analytical, transparent, calm.
- must avoid: Read receipt guarantee, green all-success state, settings toggle
  metaphor, timeline ladder, readable text/numbers, desk/paper/tea.
- similarity risk: High with `/how-it-works`; this is retrospective log
  reading, not future timeline.
- should not look like: `/how-it-works` timeline, `/privacy-choices` settings
  controls, or a guaranteed delivery dashboard.
- output filename: `public/page-heroes/anpittchi-delivery-status-hero-log-review-v2.webp`
- mobile output filename: `public/page-heroes/mobile/anpittchi-delivery-status-mobile-hero-v2.webp`
- generation prompt: Photo-realistic product hero showing a phone or clean
  interface surface with abstract delivery-status log rows. The rows suggest
  multiple states such as sent, possible delivery, failed, stopped, and not yet
  consented, but all text and numbers are unreadable. The mood is analytical
  and transparent, with no guarantee of success. Avoid all-green success,
  checkmark victory, read receipt guarantee, settings toggles, timeline ladder,
  emergency mood, wooden desk, paper, pen, tea, app logo.
- comparison notes: Compare against `/how-it-works` and `/privacy-choices`;
  this image must read as log interpretation, not timing flow or data-control
  settings.

### `/help/stop`

- target page: `/help/stop`
- replacement priority: P0
- visual group: Support / Manual
- page role: Explain STOP / HELP / START commands and SMS stopping.
- hero concept: A contact controls SMS receipt by replying STOP or HELP.
- main subject: Phone SMS thread with fake STOP/HELP/START context, all text
  unreadable except abstract command-like blocks if needed.
- scene/location: Everyday recipient setting, separate from office support.
- camera angle: Tight hand-held phone crop.
- composition: Command message is focal; surroundings minimal and personal.
- lighting/mood: Reassuring, simple, non-judgmental.
- must avoid: Panic button, emergency stop, legal paper, support desk, real
  message details, consent-request scene.
- similarity risk: High with `/for-contacts`; this is after receiving SMS, not
  initial consent.
- should not look like: `/for-contacts` consent choice, `/support` help hub, or
  emergency stop control.
- output filename: `public/page-heroes/anpittchi-help-stop-hero-sms-control-v2.webp`
- mobile output filename: `public/page-heroes/mobile/anpittchi-help-stop-mobile-hero-v2.webp`
- generation prompt: Photo-realistic hero showing a hand-held phone with an
  abstract SMS thread about command control, implying STOP / HELP / START
  without readable message text or numbers. The scene is everyday and personal,
  not an office support desk. Use a tight phone crop, calm light, and a simple
  reassuring mood. No panic button, no emergency stop, no legal paperwork, no
  real SMS content, no readable text, no app logo, no medical/rescue/security
  impression, no wooden desk, no paper, no pen, no tea.
- comparison notes: Compare against `/for-contacts`; `/help/stop` should be
  command control after SMS, while `/for-contacts` should be consent choice.

### `/share-message`

- target page: `/share-message`
- replacement priority: P0
- visual group: Relationship / Introduction
- page role: Provide message templates for family or partner to propose the app
  to the user.
- hero concept: Drafting a respectful message before sending.
- main subject: Phone message draft or template, no real names or numbers.
- scene/location: Sofa, quiet corner, or personal phone-in-hand scene.
- camera angle: Close 3/4 hand-held angle.
- composition: Draft is foreground; human context is softer and more private
  than `/for-family`.
- lighting/mood: Thoughtful, gentle, conversational.
- must avoid: Paper letter, clipboard, pressure-sale framing, surveillance
  wording, two-person conversation as main subject, readable text/numbers.
- similarity risk: High with `/for-family`; this is draft-centered, not
  conversation-centered.
- should not look like: `/for-family` in-person discussion, `/notification-samples`
  message catalog, or marketing copywriting stock photo.
- output filename: `public/page-heroes/anpittchi-share-message-hero-respectful-draft-v2.webp`
- mobile output filename: `public/page-heroes/mobile/anpittchi-share-message-mobile-hero-v2.webp`
- generation prompt: Photo-realistic hero for a message-template page. Show a
  person quietly drafting a respectful phone message in a sofa or private
  corner setting. The phone message draft is visible as abstract unreadable
  lines, with no real names, numbers, or app logo. The mood is gentle and
  thoughtful, not promotional. Use close 3/4 hand-held composition and soft
  light. No paper letter, no clipboard, no sales pitch, no surveillance feel,
  no two-person conversation as the main subject, no wooden desk, no pen, no
  tea.
- comparison notes: Compare against `/for-family`; this image should center a
  private draft, while `/for-family` should center a respectful conversation.

### `/support`

- target page: `/support`
- replacement priority: P0
- visual group: Support / Manual
- page role: Provide support contact and supportable topics.
- hero concept: General support hub and next-step guidance.
- main subject: Help topic list or support inbox-style interface with generic
  labels, no readable text.
- scene/location: Clean help-center-like device or laptop/phone scene, not
  paperwork.
- camera angle: Straight-on or slight 3/4 device view.
- composition: Centered support interface with topic categories; no intimate
  SMS thread.
- lighting/mood: Organized, calm, serviceable.
- must avoid: Call-center stock photo, headset, ticket panic, legal desk, real
  email content, STOP/HELP thread, wooden desk flat lay.
- similarity risk: Medium with `/manual/faq`; this is contact/process support,
  not self-serve FAQ browsing.
- should not look like: `/manual/faq` question directory, `/help/stop` SMS
  command thread, or a generic customer support stock image.
- output filename: `public/page-heroes/anpittchi-support-hero-help-hub-v2.webp`
- mobile output filename: `public/page-heroes/mobile/anpittchi-support-mobile-hero-v2.webp`
- generation prompt: Photo-realistic hero for a support hub page. Show a clean
  device or laptop/phone scene with an abstract help topic list or support
  inbox-style interface. All labels, text, and numbers are unreadable. The
  scene feels organized, calm, and serviceable, with a centered interface and
  clear negative space. No call-center headset, no generic stock support agent,
  no ticket panic, no legal paperwork, no STOP/HELP SMS thread, no wooden desk,
  no paper, no pen, no tea, no app logo.
- comparison notes: Compare against `/manual/faq` and `/help/stop`; `/support`
  should be a general help hub, not FAQ browsing and not SMS command control.

## P0 Batch Comparison Checklist

- `/notification-samples`, `/for-contacts`, and `/help/stop` must use three
  different message meanings: sample catalog, consent choice, command control.
- `/how-it-works` and `/delivery-status` must not both become dashboards:
  timeline flow versus retrospective log evidence must be visible.
- `/for-family` and `/share-message` must separate conversation from drafted
  message.
- `/before-you-start` and `/support` must separate pre-start readiness from
  support process.
- `/pricing` must stay user-facing and simple, not legal or transaction-ledger
  like `/tokushoho`.
- `/trust` must feel like expectation-setting, not privacy policy, legal terms,
  or a safety guarantee.
