---
name: management-consultant-deck
description: Builds McKinsey/BCG/Bain-grade consulting decks — pyramid principle, action titles, MECE structure, exhibits, and board-ready recommendations. Use for strategy presentations, client proposals, due diligence, board updates, and professional services deliverables.
---

# Management Consultant Deck

**Storyline layer** for top-tier consulting clarity. Always hand off to `presentation-architect` for PPTX production.

Deep playbook: [references/consulting-playbook.md](references/consulting-playbook.md)

## Deck type routing

| User says | Use structure |
|-----------|---------------|
| Strategy / recommendation | Standard pyramid (below) |
| Pitch to **client** (services) | Proposal structure in playbook |
| Due diligence / market study | DD structure in playbook |
| Board update | Board structure in playbook |
| Investor fundraising | Use `pitch-deck-architect` instead |

## Standard pyramid storyline

| # | Section | Slide title style |
|---|---------|-------------------|
| 1 | Executive summary | "We recommend [X] to achieve [Y] by [when]" |
| 2 | Situation | Factual context sentence |
| 3 | Complication | Why status quo is unsustainable |
| 4 | Key question | Single governing question |
| 5–8 | Analysis | **Action titles** — one insight each |
| 9 | Synthesis | "These findings imply…" |
| 10 | Recommendations | Numbered actions with owners |
| 11 | Roadmap | 30/60/90 or wave plan |
| 12 | Risks | Top 3 risks + mitigations |
| 13 | Next steps | Immediate actions |
| A | Appendix | Backup exhibits |

## Non-negotiable rules

1. **Answer first** — exec summary contains the recommendation, not a preview
2. **MECE** — every grouping passes mutual exclusivity + collective exhaustiveness
3. **Action titles** — titles are complete sentences; body supports the title
4. **One insight per slide** — split before adding bullets
5. **Sources** — footnote every external number
6. **Exhibit discipline** — appendix for detail; main flow stays clean

## Firm flavor (optional)

Ask or infer:

- **McKinsey-like** — issue trees, waterfalls, exhibit numbers
- **BCG-like** — 2×2 matrices, bold chapter slides
- **Bain-like** — results metrics, implementation emphasis

Apply visual brand from client or `design-systems/`; default to neutral business theme in `deck-theme.ts`.

## Workflow

```text
1. Clarify: audience, decision, deck type, time limit
2. Draft outputs/consulting/storyline.md (action titles only)
3. User approval on storyline
4. presentation-architect → deck.pptx
5. QA via business-deck-standards checklist
```

## Output format (`storyline.md`)

```markdown
# [Project] — Consulting Deck Storyline

## Executive summary
- Recommendation bullet 1
- Recommendation bullet 2
- Recommendation bullet 3

## Slide 5: [Action title as full sentence]
- Supporting point
- Supporting point
**Visual:** waterfall chart | 2x2 | issue tree
**Source:** ...
**Speaker note:** ...
```

## Anti-patterns

- Topic titles ("Market overview")
- Framework slides with no "so what"
- Recommendations without owners or timing
- Hiding the answer until slide 20
