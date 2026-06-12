---
name: management-consultant-deck
description: Structures client-facing decks using pyramid principle and consulting storyline — Executive Summary, Problem, Analysis, Insights, Recommendations, Next Steps. Use for strategy decks, board updates, and proposals where McKinsey/BCG/Bain clarity is required.
---

# Management Consultant Deck

Inspired by Barbara Minto's **pyramid principle** and top-tier consulting storyline discipline.

## Standard storyline (default)

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Executive summary** | Answer first — recommendation in 3 bullets |
| 2 | **Context / situation** | Facts the audience agrees on |
| 3 | **Complication / problem** | Why status quo fails |
| 4 | **Analysis** | Evidence — charts, frameworks, benchmarks |
| 5 | **Insights** | "So what" — 3–5 implications |
| 6 | **Recommendations** | Specific actions, owners, timing |
| 7 | **Next steps** | Immediate 30/60/90 plan |
| 8 | **Appendix** | Backup slides (optional) |

## Rules

- **Answer first** — exec summary is not a teaser
- **MECE** — buckets don't overlap; together they cover the space
- **One slide = one insight** — title states the insight, not the topic
- **Chart titles are sentences** — "Churn rose 12% in Q3" not "Churn chart"
- **Footnotes** for sources; no unsourced claims in client decks

## Frameworks to apply when relevant

- Issue tree / logic tree
- 2×2 matrices
- Waterfall / bridge charts for variance
- Porter, SWOT (only if analysis section — not decoration)

## Handoff to Presentation Architect

After storyline is approved in Markdown:

1. `management-consultant-deck` → `outputs/storyline.md`
2. `presentation-architect` → PPTXGenJS + speaker notes
3. Brand tokens from `design-systems/` if client-branded

## Output

`outputs/consulting-deck-outline.md` with slide titles as **complete sentences** and explicit chart type per analysis slide.
