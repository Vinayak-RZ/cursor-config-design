# Vinayak Remotion Video — Deep Reference

Companion to [SKILL.md](SKILL.md). Read when implementing or debugging a launch trailer.

---

## Content OS launch — final timing map

**FPS:** 30 · **Duration:** 846 frames (28.2s) · **Canvas:** 1920×1080

| Scene | From | To | Duration | Wall clock |
|-------|------|-----|----------|------------|
| flood (opening act) | 0 | 180 | 180f | 6.0s |
| overwhelm (headline) | 80 | 148 | 68f | 2.3s |
| collapse | 144 | 180 | 36f | 1.2s |
| knowledge | 168 | 288 | 120f | 4.0s |
| discovery | 276 | 516 | 240f | 8.0s |
| draft | 504 | 612 | 108f | 3.6s |
| free | 600 | 708 | 108f | 3.6s |
| outro | 696 | 846 | 150f | 5.0s |

Scenes overlap by **12 frames** (`PACING.crossfade`). Scene `from` = previous scene `to - 12`.

### Scrub checkpoints (Studio frame numbers)

| Frame | What to verify |
|-------|----------------|
| 0–50 | Hook visible, rings, stat pills entering |
| 52–95 | Cards flooding on top, hook fading |
| 86–134 | Overwhelm headline readable, cards blurred |
| 144–180 | Magnetic collapse + flash |
| 200 | Knowledge grid centered, lines drawing |
| 350 | Discovery FIND — sources + hub |
| 430 | Discovery RANK — scores, reorder |
| 480 | "What matters to YOU" emphasis |
| 540 | Draft editor, word reveal mid-flight |
| 650 | "COMPLETELY FREE" hero |
| 750–846 | Outro lockup, camera push, no exit fade |

---

## Spring configurations

```ts
// utils/motion.ts — copy verbatim unless scene demands otherwise

springPremium = { damping: 22, stiffness: 140, mass: 0.75, overshootClamping: false }
springSnappy  = { damping: 18, stiffness: 200, mass: 0.6,  overshootClamping: false }
springSoft    = { damping: 28, stiffness: 90,  mass: 1,    overshootClamping: false }

// Usage
sp(frame, fps, delay, config)  // wrapper around Remotion spring()
```

| Spring | Use for |
|--------|---------|
| `springPremium` | Opening hook, card flood, emotional entrances |
| `springSnappy` | Product UI chips, knowledge files, discovery sources |
| `springSoft` | Outro camera push, slow settles |

Always pass `overshootClamping: false` for Remotion 4.x type compatibility unless you explicitly want no overshoot.

---

## Easing curves

```ts
// theme.ts
easing: {
  outExpo: [0.16, 1, 0.3, 1],   // entrances, camera pull-back
  inOut:   [0.77, 0, 0.175, 1], // symmetric fades
  snap:    [0.22, 1, 0.36, 1],  // magnetic collapse
}
```

Use via `bez(frame, [start, end], [from, to], theme.easing.outExpo)`.

---

## Size scale reference

```ts
export const SCALE = 1.3;

export const S = {
  panelW: scaled(960),
  knowledgeCardW: scaled(460),
  knowledgeCardH: scaled(168),
  floatingCardMin: scaled(400),
  headlineOpening: scaled(56),
  headlineScene: scaled(52),
  headlineHero: scaled(96),
  headlineTagline: scaled(42),
  bodySm: scaled(17),
  labelXs: scaled(13),
};
```

**Why 1.3:** Vinayak feedback — elements were too small in export. Always run a still render at 100% scale before signing off.

### Discovery layout anchors

```ts
discoveryLayout = {
  sourceY: scaled(82),
  sourceSpread: scaled(162),
  stackW: scaled(820),
  hubSize: scaled(172),
  hubCy: scaled(248),
  headlineTop: scaled(358),
  topicsTop: scaled(428),
  topicRowGap: scaled(92),
};
```

Hub center X is always **960** (canvas midpoint).

---

## sceneProgress helpers

```ts
export function sceneProgress(frame, scene, fadeFrames = 12): number {
  const { from, to } = scenes[scene];
  if (frame < from || frame > to) return 0;
  const local = frame - from;
  const duration = to - from;
  const enter = Math.min(local / fadeFrames, 1);
  const exitStart = duration - fadeFrames;
  const exit = local > exitStart ? 1 - (local - exitStart) / fadeFrames : 1;
  return Math.min(enter, exit);
}

export function sceneEnterProgress(frame, scene, fadeFrames = 12): number {
  const { from, to } = scenes[scene];
  if (frame < from) return 0;
  if (frame > to) return 1;
  return Math.min((frame - from) / fadeFrames, 1);
}
```

---

## Opening card grid

```ts
// cardLayout.ts
const COLS = 6, ROWS = 4, W = 1920, H = 1080;

// Per card:
x: col * cellW - 48 + jitterX
y: row * cellH - 36 + jitterY
width: S.floatingCardMin + (i % 4) * 36
rotation: -11 + (i % 9) * 2.4
delay: OPENING.cardFloodStart + Math.round(i * OPENING.cardStagger)
flyStrength: 0.32 + (|col - COLS/2| + |row - ROWS/2|) * 0.04
```

24 cards from `copy.floatingCards` — sources: Reddit, HN, GitHub, RSS, X, Browser.

---

## Copy template (Content OS)

Full source: `my-video/src/remotion/content-os-launch/copy.ts`

```ts
scene1: {
  preHook: "The feed never stops.",
  stats: ["47 open tabs", "12 unread newsletters", "100+ signals / day"],
  headline: "Building a personal brand shouldn't start with endless scrolling.",
},
scene4: {
  panelLabel: "YOUR KNOWLEDGE",
  headline: "Grounded in you.",
  subheadline: "Not generic AI.",
  files: [/* Writing Style, Soul, Interests, Thoughts */],
},
scene5: {
  phaseFind: "FIND", phaseFindSub: "Scanning your sources",
  phaseRank: "RANK", phaseRankSub: "Scored against your knowledge",
  headlineEveryone: "What matters to everyone",
  headlineYou: "What matters to YOU",
},
scene6: {
  headline: "Drafts that sound like you.",
  highlight: "In your voice",
  edits: ["Shorter", "Stronger Hook", "More Technical"],
},
scene7: {
  hero: "COMPLETELY FREE",
  items: ["Bring Your Own Keys", "No Subscription", "No Auto Posting", ...],
},
scene8: {
  brand: "Content OS",
  tagline: "Find what's worth saying.",
  taglineLine2: "Draft it in your voice.",
  cta: "content-os.stamped.work",
  caption: "Free Personal Brand Operating System",
},
```

When writing copy for a new product, keep the **same structural slots** — only change nouns and pain points.

---

## PremiumTextReveal pattern

```tsx
const progress = sp(localFrame ?? frame, fps, delay);
const clip = interpolate(progress, [0, 1], [100, 0]);

<div style={{
  clipPath: `inset(0 ${clip}% 0 0)`,
  opacity: progress,
  transform: `translateY(${(1 - progress) * 20}px)`,
}}>
```

Word-by-word variant: split on spaces, stagger delay per word by 3–5 frames.

---

## Magnetic collapse pattern

```tsx
const magnetic = bez(collapseLocal, [dur * 0.12, dur * 0.72], [0, 1], theme.easing.snap);
const collapseX = interpolate(magnetic, [0, 1], [card.x, 960 - 160]);
const collapseY = interpolate(magnetic, [0, 1], [card.y, 540 - 50]);
const collapseScale = interpolate(magnetic, [0, 1], [1, 0.04]);
```

Flash overlay at collapse peak:

```tsx
const flash = interpolate(collapseLocal, [dur*0.52, dur*0.62, dur*0.76, dur*0.88], [0, 1, 1, 0]);
// background: rgba(255,255,255, ${flash * 0.95})
```

---

## Discovery FIND → RANK phase split

Typical ratio inside 240-frame scene:

| Phase | Ratio range | Visual |
|-------|-------------|--------|
| Sources enter | 0–0.15 | Chips spring in from top |
| Lines draw | 0.06–0.22 | SVG stroke dashoffset |
| Pulse travel | 0.18–0.38 | Dot moves along line |
| FIND hold | 0.38–0.48 | Hub shows FIND label |
| Lines fade | 0.48–0.56 | Transition to RANK |
| Scores animate | 0.52–0.72 | Bars fill, cards reorder |
| Headline swap | 0.65–0.85 | everyone → YOU |
| Hold | 0.85–1.0 | Best topic highlighted |

---

## User feedback log (Content OS build)

Direct quotes / paraphrases from iteration — encode in every future video:

| Feedback | Implementation |
|----------|----------------|
| "Make this bigger" | `SCALE = 1.3`, larger card widths |
| "Cards aligned and bigger" | Center grid math, `S.knowledgeCardW/H` bump |
| "Add more motion" | Richer entrances, stagger, line draws, notification bursts |
| "Aligned with centre" | All layouts anchored to 960px center |
| "Smooth motion but once at position should NOT move until removed" | `(1-enter)*offset` pattern, no idle animation |
| "No drift after settle for most cards in entire video" | Audit every component for sin/cos loops |

---

## Iteration history (duration)

The video went through several duration passes during build:

| Version | Frames | Notes |
|---------|--------|-------|
| Initial spec | 900 (~30s) | Original brief |
| Compressed | 780 (~26s) | User wanted tighter |
| Extended opening | 870 (~29s) | More hook energy |
| **Final** | **846 (~28.2s)** | Balanced opening + discovery stretch |

When Vinayak says "tighter" — compress **headline hold** and **inter-scene dead air**, not discovery.

---

## Background image guidelines

- Use brand/marketing asset with **open space** on left/center for text  
- `background-size: cover`, full bleed  
- Radial gradient overlay: lift center-left readability  
- Peach/coral geometry on right works well with Stamped orange accent  
- Path: `public/[project]-launch-bg.png`, load via `staticFile()` in `SceneBackground`

---

## Root.tsx composition registration

```tsx
<Composition
  id="ContentOSLaunch"
  component={ContentOSLaunch}
  durationInFrames={846}  // must match timings.ts DURATION_FRAMES
  fps={30}
  width={1920}
  height={1080}
/>
```

---

## Debugging drift — audit checklist

For each component, search for:

```
Math.sin
Math.cos
frame * 0.0  // any continuous function of frame on settled elements
animate-*    // tailwind — forbidden
transition:  // CSS — forbidden
```

Allowed continuous motion **only during**:
- Active enter spring (`enter < 1`)
- Explicit exit window (`sceneProgress` exit phase)
- Collapse / morph beats
- One-shot bursts (notification pop where `pop` reaches 1 and stays)

---

## Messaging alignment with app

| Surface | Key line |
|---------|----------|
| Landing hero | From discovery to draft, on your terms |
| Video outro | Find what's worth saying. Draft it in your voice. |
| Category | Personal content OS / personal brand workflow |
| NOT | AI writing tool, generic ChatGPT wrapper |
| Audience | Founders & creators (not "technical founders only") |
| Free tier | Free forever, BYOK — supporting beat, not primary hook |

See `docs/LAUNCH_PLAYBOOK.md` for distribution; this skill covers motion trailer only.

---

## New project scaffold

```bash
# From monorepo root — or use existing my-video/
cd my-video
npm run remotion          # Studio
npm run render:launch     # if script exists
npx remotion render ContentOSLaunch out/launch.mp4
```

Copy `content-os-launch/` folder structure as template; rename composition and update `Root.tsx`.
