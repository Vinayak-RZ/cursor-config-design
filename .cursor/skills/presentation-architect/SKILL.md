---
name: presentation-architect
description: Produces business-presentation-grade slide decks via PPTXGenJS — consulting action titles, investor-quality layout, speaker notes, charts, and QA. Use when building any professional PPTX, after storyline skills, or when user asks for PowerPoint, slides, or presentation files.
---

# Presentation Architect

**Production layer** — turns approved storyline into a polished, editable `.pptx`. Works with `management-consultant-deck`, `pitch-deck-architect`, or raw Markdown.

## Pipeline

```text
Approved outline (from storyline skill or Markdown)
    → Apply business-deck-standards
    → Build PPTXGenJS with deck-theme.ts masters
    → Charts (data → slide charts)
    → Speaker notes per slide
    → QA checklist
    → outputs/.../deck.pptx
```

## Before building

1. **Deck type:** consulting | pitch | business update | sales | training
2. **Brand:** `neutral` | `stampedEnergy` | `contentOs` — see `templates/pptx/deck-theme.ts`
3. Read [business-deck-standards.md](references/business-deck-standards.md)

## PPTXGenJS workflow

```typescript
import { createDeck, addTitleSlide, addInsightSlide, addSectionSlide, writeDeck } from "./deck-theme";

const { pptx, brand } = createDeck("stampedEnergy");
addTitleSlide(pptx, brand, "Insight title on cover", "Subtitle / date");
addSectionSlide(pptx, brand, "Analysis");
addInsightSlide(pptx, brand, "Revenue grew 40% YoY driven by enterprise expansion", [
  "Enterprise ARR up 62%",
  "Net retention 118%",
  "CAC payback 11 months",
], "Source: Company data; Q3 2025");
await writeDeck(pptx, "outputs/deck.pptx");
```

Copy theme from [templates/pptx/deck-theme.ts](../../../templates/pptx/deck-theme.ts) into the working project; `npm install pptxgenjs`.

## Chart slides

```typescript
slide.addChart(pptx.ChartType.bar, chartData, {
  x: 0.5, y: 1.5, w: 9, h: 3.5,
  showTitle: false,
  chartColors: [brand.accent],
});
```

Chart title on slide = insight sentence (not duplicated as chart internal title).

## Layout selection

| Content | Layout |
|---------|--------|
| Section break | `addSectionSlide` |
| Insight + bullets | `addInsightSlide` |
| Insight + chart | action title + `addChart` |
| Comparison | two-column text or 2×2 table |
| Quote | large italic + attribution |

## Speaker notes

Every slide gets notes: **what to say**, transition to next slide, anticipated questions.

```typescript
slide.addNotes("Open with the headline number. Pause. Then walk the three drivers...");
```

## Quality gate (required before delivery)

Run checklist in [business-deck-standards.md](references/business-deck-standards.md):

- Insight titles, font minimums, margins, sources, notes on all slides
- Open output file path and confirm write succeeded

## Outputs

| File | Required |
|------|----------|
| `outputs/<name>/outline.md` | Yes |
| `outputs/<name>/deck.pptx` | Yes |
| `outputs/<name>/speaker-notes.md` | If not embedded in PPTX |
| `outputs/<name>/chart-data.json` | If charts |

## Pair with

| Skill | Role |
|-------|------|
| `management-consultant-deck` | Consulting storyline |
| `pitch-deck-architect` | Investor storyline |
| `impeccable` | Optional HTML proof preview |

## Optional

Remotion export for video — load `demo-video-remotion` + `remotion-best-practices`.
