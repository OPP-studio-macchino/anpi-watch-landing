# Hallmark Redesign Notes - Quiet Luxury Trust

Target: `app/page.tsx`, `app/globals.css`

## Direction Chosen

Quiet Luxury Trust: a warm editorial product sheet, halfway between a premium public-service brochure and a restrained financial SaaS page.

Luxury definition used here:

- precise spacing and hierarchy
- warm off-white surfaces instead of generic white/blue cards
- hairline rules, ledgers, and document-like sequencing
- crafted CSS-only product artifact
- large but readable Japanese headline
- no fashion luxury, no black/gold, no marble, no external fonts, no stock imagery

## Direction Rejected

Rejected: dark luxury, gold accents, serif display typography, phone mockups, and generic SaaS card stacks. Those would either weaken readability for older users or make the product feel like an unrelated brand imitation.

## Implementation Summary

- Hero rebuilt as an editorial lead with a masthead-style brand lockup, fixed three-line headline, two CTAs, and adjacent rule object.
- Product visual rebuilt as `hm-rule-object`: a rule plaque showing 今日のOK, OK, 2名同意済み, 次の目安, and the 24/30/36/42/48h sequence without fake phone chrome.
- Trust strip rebuilt as `hm-trust-ledger`, a ledger-style summary instead of three stacked cards.
- 48h rule rebuilt as `hm-signature-rule`, one continuous staged object instead of a plain line/circle timeline or five cards.
- Referrer section rebuilt as a full-width premium band.
- Can/Cannot rebuilt as one dossier with disciplined contrast, not a legal table.
- Pricing rebuilt as a contract-like block; 月額300円 stays visible without discount-store treatment.
- Lower links rebuilt as `hm-document-shelf`, an indexed document shelf.

## Copy and Safety

Preserved exact meaning for:

- center copy
- support copy
- monthly price
- download-free plus subscription-required wording
- no extra notification charge
- two-contact consent rule
- limitation text
- CTA IDs

No new rescue, medical, security, emergency, guarantee, or public-agency notification claims were added.
