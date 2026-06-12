---
name: vinayak-remotion-video
description: >-
  Author premium Remotion videos with Vinayak's motion and layout taste — any genre
  (launch trailers, explainers, social clips, title sequences, event recaps,
  personal stories, data viz motion). Covers settle-then-hold motion, center
  anchoring, SCALE for export readability, spring vocabulary, constants-first
  architecture, ratio-based pacing, and intentional transitions. Use alongside
  remotion-best-practices when building Remotion compositions that must feel
  cinematic and premium — not screen recordings, tutorials, or cheap motion.
disable-model-invocation: true
---

# Vinayak Remotion Video — Motion & Layout Playbook

**Invoke in Cursor:** `@vinayak-remotion-video` when building or refining Remotion videos.

Use this skill **with** `remotion-best-practices` (Remotion API, rendering, fonts) and optionally GSAP skills for **non-Remotion** web animation. This skill captures **creative direction, pacing, structure, layout, and motion philosophy** distilled from building premium Remotion compositions.

**Worked example (optional):** Content OS launch trailer at `my-video/src/remotion/content-os-launch/` in the Content-Creation-Automater monorepo. See [reference.md](reference.md) appendix — not the required template for every video.

---

## When to use

| Use this skill | Use remotion-best-practices |
|----------------|----------------------------|
| Motion taste, pacing, layout, narrative structure | Remotion API, `useCurrentFrame`, rendering, fonts |
| Settle-then-hold, center alignment, SCALE | Composition registration, `staticFile`, `<Img>` |
| Spring vocabulary, crossfade architecture | Project scaffold, forbidden CSS transitions |
| Genre-specific pacing decisions | Sequences, audio, video embedding |

**Trigger for:** any Remotion composition where frames must feel intentional — launch trailers, 15s social clips, 60s explainers, title sequences, event recaps, personal stories, kinetic typography, UI motion graphics, data viz animation.

**Do not use for:** marketing-site scroll animation (GSAP skills), non-Remotion video editors, or screen-capture demos without motion craft.

---

## What Vinayak wants (read first)

### Format identity

| This IS | This is NOT |
|---------|-------------|
| Cinematic motion graphics with intentional choreography | Screen recording or click-through tutorial |
| Visual storytelling that works **without voiceover** (when applicable) | PowerPoint transitions or template slideshow |
| Premium UI presentation (Linear, Raycast, Vercel, Stripe energy) | Meme edits, particle spam, ambient float |
| Every frame serves a narrative or emotional beat | Motion for motion's sake |

**Core principle:** the viewer should leave with **one clear takeaway** — emotional, functional, or informational. Every scene earns its duration.

### Vinayak's non-negotiable motion rules

Hard constraints from explicit feedback during real builds. **Treat as non-negotiable.**

1. **Settle-then-hold (no idle drift)**  
   Once an element reaches its final position, scale, and opacity, it **must not move** until it exits or transforms intentionally.  
   - ✅ Entrance via `(1 - enter) * distance` — offset goes to **zero** when spring reaches 1  
   - ✅ Hold at final `left`/`top` with no sine-wave, no perpetual float, no breathing scale  
   - ❌ `Math.sin(frame * 0.05)` wobble on cards at rest  
   - ❌ Infinite pulse on settled UI chrome  

2. **Bigger, center-aligned, readable at export**  
   - Use global `SCALE = 1.3` (see `sizes.ts` pattern) — elements must read on social export, not just in Studio  
   - Anchor layouts to canvas center **(960, 540)** for 1920×1080  
   - Grids and stacks: compute `GRID_X = (1920 - GRID_W) / 2` — never eyeball left offsets  
   - Rows/columns share baseline alignment; paired elements align horizontally when heights match  

3. **More motion during entrances — not after**  
   Rich entrance choreography (stagger, fly-in, magnetic collapse, line draws, score bars) but **static holds** between beats. Motion budget goes to **transitions and reveals**, not ambient looping.

4. **Smooth, premium easing — never snappy-cheap**  
   - Emotional / opening beats: `springPremium` (damping 22, stiffness 140)  
   - UI / content beats: `springSnappy` (damping 18, stiffness 200)  
   - Outro / slow camera: `springSoft` (damping 28, stiffness 90)  
   - Position exits / crossfades: `theme.easing.outExpo` `[0.16, 1, 0.3, 1]`  
   - Magnetic snap: `theme.easing.snap` `[0.22, 1, 0.36, 1]`  

5. **Animations must complete reliably**  
   If an element can get stuck invisible or mid-state, fix the timing math — don't add fallback CSS animations.

6. **Intentional transitions only**  
   No hard cuts between major beats. Scenes crossfade (12 frames @ 30fps default). Objects morph or collapse into the next beat. Brief white flash at magnetic collapse is allowed — one frame peak, not a strobe.

---

## Video types & pacing

Adapt duration, beat count, and motion density to genre. Same motion rules apply to all.

| Type | Typical duration | Beat count | Pacing notes |
|------|------------------|------------|--------------|
| **Social clip** | 15–20s (450–600f @30fps) | 3–4 | Hook in first 2s; one hero moment; hard outro lockup |
| **Launch trailer** | 25–35s (750–1050f) | 5–7 | Problem → hero capability → proof → CTA; longest beat = differentiator |
| **Explainer** | 45–90s | 4–6 | Slower holds; more text; one concept per scene |
| **Title sequence** | 10–30s | 2–4 | Typography-led; minimal UI; dramatic entrances |
| **Event recap** | 30–60s | 5–8 | Montage rhythm; shorter per-beat holds |
| **Personal story** | 30–90s | 4–6 | Emotional opening; photo/text reveals; soft outro |
| **Data viz motion** | 15–45s | 3–5 | Number count-ups settle; bars fill then hold |
| **Kinetic type** | 10–30s | 2–3 | Word stagger; clip-path reveals; no idle drift on settled words |

See [reference.md](reference.md) for frame budgets per type.

---

## Narrative patterns (genre-agnostic)

Use these **structural beats** — swap content per project, not the motion architecture.

### Universal arc

```
HOOK → DEVELOP → CLIMAX → RESOLVE → OUTRO
```

| Beat | Purpose | Motion character |
|------|---------|------------------|
| **Hook** | Grab attention; state tension or promise | Fast entrances, density, optional chaos-then-collapse |
| **Develop** | Build context; introduce elements | Staggered reveals, connection lines, grid emergence |
| **Climax** | Hero moment — the one thing to remember | Longest duration; richest choreography |
| **Resolve** | Payoff, proof, or emotional landing | Typography or UI that locks the message |
| **Outro** | Brand / CTA / credits | Enter-only fade; slow camera push; hold clean |

### Pattern variants

**Problem → solution (launch, product):** Hook shows pain/noise → collapse → product pillars → hero feature → trust beat → lockup.

**Teach one idea (explainer):** Hook question → context cards → diagram or demo → summary headline → URL/title.

**Montage (recap, social):** Rapid hook → 3–5 short vignettes (equal duration) → title card.

**Typography-led (title seq):** Word reveal → subline → logo → hold.

**Rule:** assign the **longest scene duration** to whichever beat is the **single most important message** — not always the same slot across genres.

---

## Technical architecture (Remotion)

### Stack choices

| Choice | Rationale |
|--------|-----------|
| **Remotion `spring()` + `interpolate()` + `Easing.bezier()`** | Frame-perfect, renders correctly — no CSS transitions |
| **No GSAP inside Remotion compositions** | GSAP is for marketing sites, not render pipeline |
| **No Tailwind animation classes in Remotion** | They do not render |
| **Layered scenes with opacity — not `<Sequence>` per scene** | All scenes in one composition; visibility via `sceneProgress()` |
| **Constants-first file split** | `copy.ts`, `timings.ts`, `theme.ts`, `sizes.ts`, `utils/motion.ts`, `utils/sceneMotion.ts` |

### File responsibilities

```
src/remotion/[project-name]/
├── [ProjectName].tsx        # Orchestrator — camera, scene opacities, global acts
├── copy.ts                  # All strings — never inline copy in JSX
├── timings.ts               # FPS, duration, PACING, scene from/to, sceneProgress helpers
├── theme.ts                 # Colors, shadows, fonts, easing curves
├── sizes.ts                 # SCALE, scaled(), layout constants per scene
├── layout.ts                # Precomputed positions (grids, card floods)
├── fonts.ts                 # @remotion/google-fonts or local
├── components/              # One component per visual unit
└── utils/
    ├── motion.ts            # spring configs, sp(), bez(), enterOffset(), cameraPush()
    └── sceneMotion.ts       # Ratio-based timing (sceneRange, sceneStagger)
```

### Scene visibility pattern

```tsx
const developOpacity = sceneProgress(frame, "develop", PACING.fade);

{developOpacity > 0 ? (
  <AbsoluteFill style={{ opacity: developOpacity }}>
    <DevelopScene localFrame={sceneLocalFrame(frame, "develop")} ... />
  </AbsoluteFill>
) : null}
```

- **`sceneProgress`**: enter fade + exit fade (symmetric crossfade between scenes)  
- **`sceneEnterProgress`**: enter only — use for **outro** that holds until end  
- **`sceneLocalFrame`**: always pass to child components so internal animation resets per scene  

### The settle-then-hold code pattern

```tsx
const enter = sp(localFrame, fps, delay, springSnappy);

// Position: offset multiplied by (1 - enter) → 0 at rest
transform: `translate(-50%, -50%) translateY(${(1 - enter) * 16}px) scale(${0.92 + enter * 0.08})`

// NOT at rest:
transform: `translateY(${Math.sin(frame * 0.1) * 4}px)` // ❌ forbidden on settled elements
```

For fly-in from center:

```tsx
const flyX = (960 - x) * flyStrength * (1 - enter);
const flyY = (540 - y) * flyStrength * (1 - enter);
// left: x + flyX  →  x when enter === 1
```

Use `enterOffset(enter, distance)` from `utils/motion.ts` for shared offset logic.

---

## Video spec defaults

| Property | Default | Notes |
|----------|---------|-------|
| Resolution | 1920 × 1080 | 16:9 landscape for social/landing |
| FPS | 30 | Standard; 60 only if source footage requires |
| Duration | Genre-dependent | Define in `timings.ts` first |
| SCALE | 1.3 | Bump UI for export readability |

Always update `DURATION_FRAMES` in `timings.ts` **and** the composition in `Root.tsx` together.

### Pacing constants (starting point)

```ts
PACING = {
  crossfade: 12,        // frames overlap between every scene
  fade: 12,             // enter/exit fade per scene
  shortBeat: 90,        // ~3s — quick vignette
  standardBeat: 108,    // ~3.6s — typical content scene
  slowBeat: 120,        // ~4s — context / setup
  heroBeat: 180,        // ~6s — climax scene (adjust per genre)
  openingEnd: 180,      // ~6s — hook act (launch-style; shorten for social)
}
```

Derive scene `from`/`to` by chaining: `nextFrom = prevTo - PACING.crossfade`.

---

## Layout & spacing system

### Center anchor math

```ts
const CANVAS_W = 1920;
const CANVAS_H = 1080;
const CENTER_X = CANVAS_W / 2;  // 960
const CENTER_Y = CANVAS_H / 2;  // 540

// Horizontal centering for a group of width GRID_W:
const GRID_X = (CANVAS_W - GRID_W) / 2;

// Element centered on a point:
style={{ left: CENTER_X, top: y, transform: "translate(-50%, -50%)" }}
```

### SCALE system

```ts
export const SCALE = 1.3;
export function scaled(n: number): number {
  return Math.round(n * SCALE);
}
```

All typography, card widths, gaps, and radii go through `scaled()`. Design at "logical" sizes (e.g. 17px body) — export renders 30% larger.

### Alignment rules

- **Single headline:** `left: 960`, `translateX(-50%)`, text-align center  
- **Card grid:** compute total width including gaps → `GRID_X`  
- **Paired columns:** equal card heights → align footers/buttons on same baseline  
- **Vertical stacks:** fixed `stackTop` constant; use `gap` via `scaled()`  
- **Hub-and-spoke:** hub center at `(960, hubCy)`; spokes from `utils/layout` precompute  

### Depth & camera

- Global camera wrapper: `transform: scale(${cameraScale})`, `transformOrigin: center center`  
- Opening pull-back + outro push (`cameraPush()` with `springSoft`)  
- Parallax via layered opacities and staggered fly-in strengths — not continuous drift  
- Optional blur during headline beats for depth-of-field feel  

---

## Visual craft

### Theme tokens (per project)

Mirror the source brand in `theme.ts` — never hardcode one product's palette in shared components.

| Token | Typical pattern |
|-------|-----------------|
| Background | Light `#FAFAFA` or dark `#0A0A0A` — match brand |
| Foreground | High-contrast text on background |
| Accent | One saturated brand color for emphasis |
| Card | `#FFFFFF` or glass `rgba(255,255,255,0.72)` + `backdrop-filter: blur(16px)` |
| Border | Low-opacity foreground, e.g. `rgba(0,0,0,0.08)` |
| Shadow | Soft ambient: `0 24px 80px rgba(0,0,0,0.12)` — not Material drop shadow |

### Typography scale (via `sizes.ts`)

```ts
export const S = {
  headlineHero: scaled(96),      // single-word hero moments
  headlineScene: scaled(52),     // scene headlines
  headlineOpening: scaled(56),   // hook act
  headlineTagline: scaled(42),   // outro taglines
  bodySm: scaled(17),
  labelXs: scaled(13),           // uppercase labels, letterSpacing: 0.06em
};
```

Load fonts via `@remotion/google-fonts` or local files in `fonts.ts`. Match the brand — don't default to Inter unless the brand uses it.

### UI card styling

- Border radius: `scaled(16–18)`  
- Labels: uppercase, `letterSpacing: 0.06em`, `S.labelXs`  
- Body: `S.bodySm`, weight 600, `lineHeight: 1.35`  
- Minimum floating card width: `S.floatingCardMin` (= `scaled(400)`)  

### Background treatment

- Full-bleed brand image or gradient via `staticFile()`  
- Radial gradient overlay for text legibility on busy photos  
- `background-size: cover`, optional mesh gradients in `theme.ts`  

---

## Ratio-based scene timing

Inside each scene, use **duration ratios** not absolute frames — keeps beats proportional when duration changes:

```ts
sceneBez(localFrame, duration, 0.48, 0.56, [1, 0])  // fade lines at 48–56% of scene
sceneStagger(duration, index, 0.08, 0.04)             // stagger from 8% + 4% per index
```

Helpers in `utils/sceneMotion.ts`: `sceneRange`, `sceneBez`, `sceneDelay`, `sceneStagger`.

---

## Reusable component patterns

Build per project; reuse architecture across videos:

| Component | Role |
|-----------|------|
| `PremiumTextReveal` | Clip-path + translateY headline reveal |
| `SplitHeadline` | Two-part headline with emphasis word |
| `FloatingCard` | Glass cards with fly-in from center |
| `SceneBackground` | Photo + legibility overlay |
| `LogoLockup` | Outro brand + URL |
| `AnimatedBar` / `AnimatedScore` | Fill-then-hold progress bars |
| `HubDiagram` | Center hub + SVG connection lines |
| `SharedElementTransition` | Optional morph between scenes |
| `NotificationBurst` | One-shot pop — not looping |

---

## Production workflow

### Before coding

1. Define genre, duration, and one-sentence viewer takeaway  
2. Write scene list + frame budget in `timings.ts` first  
3. Write all copy in `copy.ts` — narrative approval before animating  
4. Define `theme.ts` and `sizes.ts` with `SCALE = 1.3`  

### While building

1. Scrub each scene in Remotion Studio at **local frame 0** after every timing change  
2. Render stills at `--frame=` boundaries: hook end, climax midpoint, outro  
3. Verify **no drift**: scrub 30 frames *after* each element's enter completes — pixels must be static  
4. Check center alignment: toggle Studio guide at 960px vertical center  

### Before shipping

```bash
npx remotion still MyComposition out/check-hook.png --frame=120
npx remotion still MyComposition out/check-climax.png --frame=400
npx remotion still MyComposition out/check-outro.png --frame=800
npx remotion render MyComposition out/final.mp4
```

Typecheck: `tsc --noEmit` in the video project.

---

## Anti-patterns (never do)

| Anti-pattern | Why |
|--------------|-----|
| Idle float / breathe on settled elements | Vinayak explicitly rejected — "no drift after settle" |
| Small UI that only reads in Studio | Export to 1080p social — use `SCALE = 1.3` |
| Left-aligned grids without center math | Looks amateur on cinematic compositions |
| Hard cuts between major beats | Breaks continuous-motion brief |
| CSS `transition` / `animation` | Won't render in Remotion |
| GSAP inside Remotion | Wrong tool; use Remotion springs |
| Looping particles / confetti | Cheap — bursts are one-shot only |
| `<Sequence>`-heavy architecture for crossfade style | Opacity-layer pattern gives smoother crossfades |
| Inline copy in components | Breaks iteration — use `copy.ts` |
| Stale duration in docs vs `timings.ts` | Keep in sync |
| Product-launch template forced on non-launch videos | Pick narrative pattern for genre |

---

## Starting a new composition

1. Copy an existing project's **folder structure** (not its narrative) as scaffold  
2. Set genre → pick narrative pattern → assign frame budget per beat  
3. Longest beat = **most important message** for this video  
4. Hook act: chaos/density → optional collapse → first content scene  
5. Outro: `sceneEnterProgress`, `cameraPush`, hold through last frame  

For social clips: compress hook to ~60f, one hero beat ~120f, outro ~90f.

---

## Companion skills

| Skill | When |
|-------|------|
| `remotion-best-practices` | Remotion API, rendering, fonts, sequences |
| `impeccable` | Matching landing page or brand UI |
| GSAP skills | Marketing site scroll animation only — not Remotion |

---

## Deep reference

For spring configs, easing curves, layout formulas, drift audit checklist, video-type pacing tables, and the Content OS launch worked example, see [reference.md](reference.md).
