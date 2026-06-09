# Hallmark Redesign - Home Page

Target: `app/page.tsx` and `app/globals.css`

## Pre-flight

- Framework: Next.js App Router.
- Font stack: existing system / SF Pro / Noto Sans JP stack.
- Palette: existing anpitch blue, neutral surface, success, warning tokens.
- Motion: motion-cut; no animation library.
- Scope: homepage only. No `/legal-review/**` route restoration.

## Design Direction

- Genre: modern-minimal.
- Macrostructure: split-studio hero plus narrative rule line.
- Theme: quiet trust, restrained blue accent, grid-paper surface, rule-based sections.
- Audience: younger referrers and older users.
- Use case: understand the app, price, consent rule, and limits before opening the App Store.
- Tone: quiet, explicit, auditable.

## Adopted Changes

- Replaced the old card-stack rhythm with a split hero, rule-based trust strip, continuous 48h flow, full-width referrer band, scope comparison, pricing ledger, and link rail.
- Removed fake phone chrome in favor of a product instrument panel showing OK, two consent states, and the 24h / 30h / 36h / 42h / 48h sequence.
- Kept hero CTAs to two and moved notification samples to the lower link rail.
- Kept the supplied copy, pricing, consent, limitation text, and CTA IDs.
- Scoped Hallmark button overrides to `.home-page` so legal/support pages keep the existing global button behavior.

## Guardrails

- No new production dependency.
- No external image URL.
- No production publish action.
- No route deletion or restoration.
