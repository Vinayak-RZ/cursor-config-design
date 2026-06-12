---
name: carousel-architect
description: Creates LinkedIn, Instagram, and X carousels from articles or Markdown — hook, slide sequence, 1080x1350 (or platform) layouts, visual hierarchy, PNG/SVG export via Satori and Resvg, optional Remotion motion. Use for social carousels, thread-style decks, and marketing slide strips.
---

# Carousel Architect

## Pipeline

```text
Article / Markdown
    → Hook slide (pattern interrupt, ≤12 words)
    → 5–10 slide sequence (one idea per slide)
    → Visual hierarchy per slide
    → Layout 1080×1350 (LinkedIn/IG) or 1080×1080 (square)
    → Render:
        Satori (HTML+CSS → SVG)
        → Resvg → PNG
    → Optional: Remotion for animated carousel video
```

## Platform specs

| Platform | Size | Slides |
|----------|------|--------|
| LinkedIn | 1080×1350 or 1080×1080 | 5–10 |
| Instagram | 1080×1350 | 5–10 |
| X/Twitter | 1200×675 or 1080×1080 | 4–8 |

## Slide anatomy

1. **Hook** — bold claim or question
2. **Problem** — pain the reader feels
3. **Insights** — 3–5 teaching slides
4. **Proof** — metric, quote, or mini case
5. **CTA** — one action

## Satori + Resvg stack

```text
React/Tailwind component per slide
    → satori(element, { width: 1080, height: 1350, fonts })
    → SVG string
    → @resvg/resvg-js → PNG buffer
    → outputs/carousel/slide-01.png
```

- Embed fonts (woff) for consistent render
- Use brand tokens from [design-systems/](../../../design-systems/) when on-brand

## Brand selection

| Brand | Design doc |
|-------|------------|
| Stamped Energy | `design-systems/stamped-energy-main-website.md` |
| Content OS | `design-systems/content-os.md` |
| Generic | Tailwind neutral + one accent |

## Outputs

- `outputs/carousel/outline.md`
- `outputs/carousel/slide-NN.png`
- Optional: `outputs/carousel.zip`
- Optional: Remotion `CarouselComposition` for video export

## Pair with

- `presentation-architect` when same content also needs PPTX
- `impeccable` for layout/spacing audit before export
