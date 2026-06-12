---
name: presentation-architect
description: Transforms Markdown into structured slide decks with titles, speaker notes, visual hierarchy, chart suggestions, and deliverables via PPTXGenJS and/or Remotion. Use when creating pitch decks, client presentations, investor updates, or any slide-based output from written content.
---

# Presentation Architect

## Pipeline

```text
Markdown input
    → Extract key ideas (1 idea per slide max)
    → Slide outline (titles + bullets)
    → Visual hierarchy + layout notes
    → Chart suggestions (Recharts/Tremor data shapes)
    → Speaker notes
    → Deliverables:
        • presentation.pptx (PPTXGenJS) — editable in PowerPoint/Slides
        • optional Remotion composition — motion/video export
```

## Before generating

1. Ask which **brand** applies — read [design-systems/](../../../design-systems/) if Stamped Energy or Content OS
2. Confirm output: **PPTX only**, **Remotion only**, or **both**
3. Confirm audience: investor, client, internal, educational

## Slide structure rules

- **One message per slide** — if two ideas, split
- Title: outcome-oriented, not topic label ("Revenue grew 40%" not "Revenue")
- Body: 3–5 bullets max; use sub-slides before shrinking font
- Speaker notes: what to say, not what's on the slide
- Visual suggestion: chart type, icon, diagram, or full-bleed image per slide

## PPTXGenJS (default for .pptx)

```typescript
import pptxgen from "pptxgenjs";

const pptx = new pptxgen();
pptx.layout = "LAYOUT_16x9";

const slide = pptx.addSlide();
slide.addText("Title", { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 28, bold: true });
// Use brand hex from design-systems when applicable

await pptx.writeFile({ fileName: "outputs/deck.pptx" });
```

- Use inches for `x,y,w,h` (PPTXGenJS default)
- Map brand colors from design doc tokens
- Export to `outputs/` unless user specifies path

## Design system defaults

| Layer | Library |
|-------|---------|
| Layout tokens | Tailwind CSS (in Remotion/web previews) |
| Components | shadcn/ui patterns for cards, pricing, testimonials |
| Charts | Recharts (startup metrics) or Tremor (SaaS dashboards) |

## Remotion (when video/motion export needed)

Load skill `remotion-best-practices`. One composition per deck or per chapter.

## Output checklist

- [ ] `outputs/outline.md` — slide map
- [ ] `outputs/speaker-notes.md` or embedded in PPTX
- [ ] `outputs/deck.pptx` and/or Remotion project files
- [ ] Chart data as JSON/CSV if charts suggested

## Pair with

- `management-consultant-deck` — McKinsey/BCG-style storyline
- `impeccable` — visual polish pass on HTML previews
