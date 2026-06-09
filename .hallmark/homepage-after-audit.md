# Hallmark After Audit - Home Page

Target: `app/page.tsx` and `app/globals.css`

## Findings

### Critical

- None.

### Major

- None.

### Minor

- Tell: Product instrument still uses a bordered panel.
  Where: `app/globals.css`, `.instrument-panel`
  Severity: minor
  Fix: Acceptable in this pass because it is not fake phone chrome and it carries real product state; future polish could use a real app screenshot.

- Tell: Grid-paper background is subtle but visible.
  Where: `app/globals.css`, `.home-page::before`
  Severity: minor
  Fix: Keep because it separates the page from generic white-card LPs without adding decorative blobs.

## Resolved Checks

- Card-stack LP: resolved.
- Generic SaaS gradient: resolved.
- Fake phone frame: resolved.
- Five-card 48h timeline: resolved.
- Hero CTA overload: resolved.
- Mobile H1 orphan line: resolved in 390px and 375px screenshots.
- Horizontal overflow: resolved; CDP captured `scrollWidth` equals viewport width at 1440, 390, and 375.
- CTA IDs: preserved.
- `/legal-review/**`: not restored.

0 critical · 0 major · 2 minor
