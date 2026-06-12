---
name: demo-video-remotion
description: Plans and builds product demo videos, explainers, and motion graphics using Remotion and React. Use when the deliverable is MP4/WebM video, animated walkthrough, or motion version of a deck or carousel.
---

# Demo Video (Remotion)

## When to use

- Product demo videos
- Animated explainers from slide content
- Social video from carousel frames
- Investor teaser clips

## Workflow

1. **Script** — `outputs/video/script.md` (scenes, voiceover, on-screen text)
2. **Storyboard** — scene list with duration per scene (fps × seconds)
3. **Composition** — Remotion project or folder in workspace
4. **Render** — `npx remotion render`

Load skills **`vinayak-remotion-video`** (motion taste, pacing, layout) and **`remotion-best-practices`** (Remotion API, rendering, fonts).

**Stack:** `demo-video-remotion` → script/storyboard → `vinayak-remotion-video` → `remotion-best-practices` → render.

## Scene structure

```text
Intro (logo + hook)     3–5s
Problem                 5–8s
Product demo            15–45s
Proof / metrics         5–10s
CTA                     3–5s
```

## Design

- Use brand from `design-systems/` for colors and type
- Tailwind in Remotion when `remotion-best-practices` tailwind rules apply
- Charts: Recharts inside compositions or pre-rendered assets
- Respect `prefers-reduced-motion` — offer static export variant

## Audio

- Voiceover: separate track; use `remotion-best-practices` audio/voiceover rules
- Captions: SRT import per remotion skill

## Outputs

- `outputs/video/` — script, assets, render commands
- Final: `outputs/video/demo.mp4`

## Scaffold new project

```bash
npx create-video@latest --yes --blank my-demo
```

Prefer adding compositions to an existing Remotion repo when one exists in the workspace.
