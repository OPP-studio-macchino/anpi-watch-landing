# Hallmark Before Audit - Home Page

Target: `app/page.tsx` and `app/globals.css`

## Findings

### Major

- Tell: The 3-column feature grid
  Where: `app/page.tsx`, facts section
  Severity: major
  Fix: Replace equal white cards with a compact trust strip that reads as facts, not feature marketing.

- Tell: Re-drawn UI chrome
  Where: `app/page.tsx`, phone mock; `app/globals.css`, `.phone-mock`
  Severity: major
  Fix: Replace the fake phone frame with a product instrument panel that shows OK, consent, and steps without toy chrome.

- Tell: Icon-tile/card-stack feature rhythm
  Where: `app/page.tsx`, repeated section blocks
  Severity: major
  Fix: Use distinct section treatments: hero split, fact strip, rule flow, referrer band, scope comparison, pricing ledger, link rail.

- Tell: 5-card timeline
  Where: `app/page.tsx`, 48h timeline
  Severity: major
  Fix: Convert to a continuous stepped rule line so the escalation reads as a sequence.

- Tell: CTA overload
  Where: `app/page.tsx`, hero actions
  Severity: major
  Fix: Keep two hero CTAs and move notification samples to the lower link rail.

### Minor

- Tell: Section rhythm sameness
  Where: `app/globals.css`, `.home-section`, `.home-card`, `.home-referrer`, `.home-pricing`
  Severity: minor
  Fix: Vary alignment, density, background, and rule language without changing copy.

- Tell: Mobile risk
  Where: `app/globals.css`, `.home-hero h1`
  Severity: minor
  Fix: Use explicit line wrappers so mobile renders the requested three-line H1.

0 critical · 5 major · 2 minor
