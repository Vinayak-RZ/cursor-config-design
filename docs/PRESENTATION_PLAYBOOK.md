# Presentation playbook

How to produce **business-presentation-grade** decks in this config.

## Choose your path

```text
                    What are you building?
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
   Consulting            Investor pitch         Business update
        │                     │                     │
 management-            pitch-deck-          presentation-
 consultant-deck         architect            architect
        │                     │                     │
        └─────────────────────┴─────────────────────┘
                              │
                    presentation-architect
                              │
                    outputs/.../deck.pptx
```

## Skill responsibilities

| Skill | Owns |
|-------|------|
| `management-consultant-deck` | Pyramid storyline, MECE, action titles, McKinsey/BCG/Bain patterns |
| `pitch-deck-architect` | Fundraising arc, traction, ask, investor narrative |
| `presentation-architect` | PPTXGenJS build, charts, notes, visual QA |
| `carousel-architect` | Social PNG (not PPTX) |
| `demo-video-remotion` | MP4 from deck content |

## Quality bar

All PPTX decks must pass [business-deck-standards.md](../.cursor/skills/presentation-architect/references/business-deck-standards.md).

## Templates

| Template | Path |
|----------|------|
| PPTX theme code | [templates/pptx/deck-theme.ts](../templates/pptx/deck-theme.ts) |
| Pitch outline | [templates/deck-outlines/pitch-deck.md](../templates/deck-outlines/pitch-deck.md) |
| Consulting outline | [templates/deck-outlines/consulting-deck.md](../templates/deck-outlines/consulting-deck.md) |
| Brief input | [templates/brief-input.md](../templates/brief-input.md) |

## Example end-to-end (consulting)

1. User pastes brief → `management-consultant-deck` drafts `outputs/consulting/storyline.md`
2. User approves storyline
3. `presentation-architect` copies `deck-theme.ts`, runs PPTXGenJS build
4. `presentation-quality-gates` checklist
5. Deliver `outputs/consulting/deck.pptx`

## Example end-to-end (pitch)

1. `pitch-deck-architect` → `outputs/pitch/outline.md`
2. User fills `[TBD]` metrics
3. `presentation-architect` → `outputs/pitch/deck.pptx`

## Dependencies (in target project)

```bash
npm install pptxgenjs
# optional: recharts for chart screenshots, satori for carousel
```

This config repo does not require `npm install` at root — install in the project where you generate the deck.
