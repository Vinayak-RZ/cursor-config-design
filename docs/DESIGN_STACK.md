# Design & deliverables stack

Recommended libraries for Cursor-generated presentations, carousels, and video.

## Content pipeline

```text
Input: Markdown (brief, article, notes)
        ↓
Cursor skills: storyline + structure
        ↓
Layout + design tokens (Tailwind / brand docs)
        ↓
Outputs:
  • deck.pptx      (PPTXGenJS)
  • slide-NN.png   (Satori → Resvg)
  • demo.mp4       (Remotion)
  • speaker-notes.md
```

## Libraries

### PPTXGenJS — real PowerPoint

**When:** Client wants `presentation.pptx` editable in PowerPoint or Google Slides.

```bash
npm install pptxgenjs
```

```typescript
import pptxgen from "pptxgenjs";
const pptx = new pptxgen();
const slide = pptx.addSlide();
slide.addText("Revenue Growth", { x: 1, y: 1, w: 5, h: 1 });
await pptx.writeFile({ fileName: "deck.pptx" });
```

### Remotion — demo video

**When:** MP4/WebM, motion graphics, animated walkthroughs.

Skill: `remotion-best-practices` (pre-installed).

```bash
npx create-video@latest --yes --blank my-demo
```

### Tailwind + shadcn/ui

**When:** Consistent spacing, typography, cards, pricing tables in HTML-based slides or Remotion.

### Recharts / Tremor

| Library | Best for |
|---------|----------|
| Recharts | Startup metrics, growth charts |
| Tremor | SaaS dashboards, investor KPI slides |

### Satori + Resvg — social carousels

```text
Markdown → React slide component (Tailwind)
    → satori → SVG
    → @resvg/resvg-js → PNG
```

Sizes: 1080×1350 (LinkedIn/IG), 1080×1080 (square).

## One-year default stack

If choosing only one integrated stack:

| Layer | Choice |
|-------|--------|
| Video | Remotion |
| PowerPoint | PPTXGenJS |
| Styling | Tailwind |
| Charts | Recharts |

Covers: pitch decks, carousels, demos, investor updates, educational content, editable PPTX, PDF export (via print or LibreOffice).

## Personal brand docs

See [design-systems/](../design-systems/) for Stamped Energy and Content OS tokens.
