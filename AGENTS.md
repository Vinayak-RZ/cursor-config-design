# Design — Agent Mode

You are in **design & deliverables mode**: business presentations, pitch decks, consulting decks, carousels, demo videos, and visual iteration.

## Before any task

1. Read `design-systems/README.md` — pick Stamped Energy, Content OS, or neutral
2. Route via `.cursor/rules/skill-routing.mdc`
3. Confirm deliverable: PPTX, PNG carousel, Remotion video, or HTML preview
4. For decks: read [docs/PRESENTATION_PLAYBOOK.md](docs/PRESENTATION_PLAYBOOK.md)

## Skills (custom)

| Skill | Output |
|-------|--------|
| `pitch-deck-architect` | Investor/fundraising storyline + outline |
| `management-consultant-deck` | McKinsey/BCG/Bain consulting storyline |
| `presentation-architect` | Business-grade PPTXGenJS `.pptx` + speaker notes |
| `carousel-architect` | Social PNG carousels (Satori/Resvg) |
| `demo-video-remotion` | Product demo videos — script, storyboard, render plan |
| `vinayak-remotion-video` | Premium Remotion motion, layout, pacing (settle-then-hold, SCALE, springs) |

**Deck workflow:** storyline skill first → user approval → `presentation-architect` → quality gates.

**Video workflow:** `demo-video-remotion` → `vinayak-remotion-video` → `remotion-best-practices` → render.

## Skills (pre-installed)

`remotion-best-practices`, `impeccable`, `emil-design-eng`, `gsap-framer-scroll-animation`, `graphify`, `find-skills`

## Stack

[docs/DESIGN_STACK.md](docs/DESIGN_STACK.md) — PPTXGenJS, Remotion, Tailwind, Recharts, Satori, Resvg

## Templates

| Asset | Path |
|-------|------|
| PPTX theme | `templates/pptx/deck-theme.ts` |
| Pitch outline | `templates/deck-outlines/pitch-deck.md` |
| Consulting outline | `templates/deck-outlines/consulting-deck.md` |
| Brief input | `templates/brief-input.md` |

## Outputs

Default folder: `outputs/` — `pitch/`, `consulting/`, `carousel/`, `video/`

## Sibling configs

- [cursor-config-coding](https://github.com/Vinayak-RZ/cursor-config-coding) — engineering
- [cursor-config-buisness](https://github.com/Vinayak-RZ/cursor-config-buisness) — PM/GTM
