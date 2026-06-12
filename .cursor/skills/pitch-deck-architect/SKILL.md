---
name: pitch-deck-architect
description: Builds investor and startup pitch decks — problem, solution, market, traction, team, ask — with business-presentation visual quality via PPTXGenJS. Use for seed/Series A pitches, demo days, accelerator applications, and fundraising narratives.
---

# Pitch Deck Architect

For **fundraising and startup storytelling**. Pair with `presentation-architect` for PPTX production and `business-deck-standards` references for visual quality.

## Before starting

1. **Stage:** pre-seed, seed, Series A, strategic partner pitch
2. **Time:** 3-min teaser vs 10-min full vs leave-behind PDF/PPTX
3. **Brand:** Stamped Energy / Content OS / neutral startup
4. **Data:** real metrics only — flag placeholders clearly as `[TBD]`

## Standard pitch arc (10–14 slides)

| # | Slide | Title pattern (insight, not label) |
|---|-------|-------------------------------------|
| 1 | Cover | Company + one-line promise |
| 2 | Problem | "[Audience] loses $X because [pain]" |
| 3 | Solution | "We [verb] so customers [outcome]" |
| 4 | Why now | Market shift / regulation / tech inflection |
| 5 | Product | 1 screenshot or diagram — minimal text |
| 6 | Market | TAM/SAM/SOM with credible methodology |
| 7 | Traction | Metrics that prove pull (revenue, users, growth %) |
| 8 | Business model | How you make money — simple |
| 9 | Competition | 2×2 or landscape — your wedge |
| 10 | GTM | Beachhead + expansion motion |
| 11 | Team | Why **this** team wins |
| 12 | Financials / plan | 12–18 month milestones (optional early stage) |
| 13 | The ask | Amount, use of funds, 3 bullets |
| 14 | Contact / appendix pointer | Clean close |

**Teaser (6 slides):** Cover → Problem → Solution → Traction → Ask → Contact

## Narrative rules

- **Investors bet on problems, traction, and team** — not feature lists
- One metric per traction slide; chart > table
- Competition slide shows **honest** landscape + differentiated wedge
- No jargon without definition on first use
- Speaker notes: founder story beats, not slide repetition

## Visual standards

Apply [business-deck-standards.md](../presentation-architect/references/business-deck-standards.md):

- 16:9, generous margins, max 2 font families
- Title 28–32pt, body 16–20pt minimum
- One accent color for highlights and charts
- Use `templates/pptx/deck-theme.ts` for consistent PPTXGenJS master

## Outputs

1. `outputs/pitch/outline.md` — slide map with insight titles
2. `outputs/pitch/speaker-notes.md`
3. `outputs/pitch/data/` — JSON for charts if needed
4. `outputs/pitch/deck.pptx` — **required final deliverable**

## Handoff

```text
pitch-deck-architect (story + data)
    → presentation-architect (PPTXGenJS build + QA)
    → impeccable (optional HTML preview polish)
```

## Anti-patterns

- 20 slides of features with no traction
- "We have no competitors"
- Vanity metrics without retention/revenue context
- Wall of text on product slide
