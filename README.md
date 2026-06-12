# cursor-config-design

A version-controlled **Cursor AI configuration** for design and deliverables: **business-presentation-grade decks** (investor pitches, McKinsey-style consulting, sales/board updates), social carousels, Remotion demo videos, and brand-consistent visual work.

**Local path:** `D:\Startups\cursor-config-design`

**Sibling configs:**

- [cursor-config-coding](https://github.com/Vinayak-RZ/cursor-config-coding) — engineering
- [cursor-config-buisness](https://github.com/Vinayak-RZ/cursor-config-buisness) — PM/GTM/research

---

## Table of contents

1. [What this is](#what-this-is)
2. [Specifications](#specifications)
3. [Design systems (your brands)](#design-systems-your-brands)
4. [Skills](#skills)
5. [Recommended stack](#recommended-stack)
6. [Content pipeline](#content-pipeline)
7. [How to use](#how-to-use)
8. [Example prompts](#example-prompts)
9. [Outputs](#outputs)
10. [Linking to a project](#linking-to-a-project)
11. [Quick reference](#quick-reference)

---

## What this is

| Aspect | Value |
|--------|-------|
| **Mode** | Design & deliverables — not backend engineering |
| **Custom skills** | 5 (pitch, presentation, consulting, carousel, demo video) |
| **Vendored skills** | 6 (Remotion, impeccable, GSAP, etc.) |
| **Brand docs** | Stamped Energy + Content OS in `design-systems/` |
| **Default outputs** | `outputs/` (pptx, png, mp4, outlines) |

Open this repo in Cursor when you want to:

- Build **investor pitch decks** with fundraising narrative discipline
- Produce **McKinsey/BCG/Bain-grade consulting decks** (pyramid, action titles, MECE)
- Turn approved storylines into **editable, business-quality PowerPoint** (PPTXGenJS)
- Build **LinkedIn/Instagram carousels** (Satori → PNG)
- Produce **demo videos** (Remotion)
- Stay on-brand using your **personal design docs**

---

## Specifications

| Item | Count / detail |
|------|----------------|
| Pre-installed skills | **11** |
| Rules | **4** (`design-mode`, `design-stack`, `skill-routing`, `presentation-quality-gates`) |
| Design system files | **3** + README |
| Presentation playbook | [docs/PRESENTATION_PLAYBOOK.md](docs/PRESENTATION_PLAYBOOK.md) |
| PPTX theme template | [templates/pptx/deck-theme.ts](templates/pptx/deck-theme.ts) |
| Stack doc | [docs/DESIGN_STACK.md](docs/DESIGN_STACK.md) |
| Brief template | [templates/brief-input.md](templates/brief-input.md) |

---

## Design systems (your brands)

Copied into [design-systems/](design-systems/) for agent context:

| File | Brand |
|------|-------|
| [stamped-energy-main-website.md](design-systems/stamped-energy-main-website.md) | Forge Industrial v2.0 — Stamped Energy site |
| [stamped-energy-how-it-works-dock.md](design-systems/stamped-energy-how-it-works-dock.md) | Stamped Energy — How It Works section |
| [content-os.md](design-systems/content-os.md) | Content OS app — Forest Night + Stamped Orange |

**Sync from source projects** when tokens change (paths in [design-systems/README.md](design-systems/README.md)).

Tell the agent: *"Use Stamped Energy brand from design-systems"* or *"Content OS tokens"*.

---

## Skills

### Custom (built for this config)

| Skill | Purpose |
|-------|---------|
| `pitch-deck-architect` | Investor/fundraising storyline — problem, traction, ask |
| `management-consultant-deck` | McKinsey/BCG/Bain pyramid storyline — action titles, MECE, exhibits |
| `presentation-architect` | Business-grade PPTXGenJS build — charts, speaker notes, visual QA |
| `carousel-architect` | Article → hook + slides → 1080×1350 PNG (Satori/Resvg) |
| `demo-video-remotion` | Script → storyboard → Remotion MP4 |

### Pre-installed (vendored)

| Skill | Purpose |
|-------|---------|
| `remotion-best-practices` | Remotion implementation depth |
| `impeccable` | UI polish and design audit |
| `emil-design-eng` | Motion/UI craft philosophy |
| `gsap-framer-scroll-animation` | Scroll motion for web previews |
| `graphify` | Map design docs / content folders |
| `find-skills` | Discover more skills |

Full manifest: [skills-manifest.json](skills-manifest.json)

---

## Recommended stack

| Deliverable | Library |
|-------------|---------|
| **PowerPoint** | [PPTXGenJS](https://gitbrent.github.io/PptxGenJS/) |
| **Demo video** | [Remotion](https://www.remotion.dev/) |
| **Carousel PNG** | [Satori](https://github.com/vercel/satori) + [Resvg](https://github.com/RazrFalcon/resvg) |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Charts** | Recharts or Tremor |

Details: [docs/DESIGN_STACK.md](docs/DESIGN_STACK.md)

**One-year default:** Remotion + PPTXGenJS + Tailwind + Recharts

---

## Content pipeline

### Presentations (pitch & consulting)

```text
Brief / Markdown
    ↓
pitch-deck-architect  OR  management-consultant-deck  (storyline + approval)
    ↓
presentation-architect  (PPTXGenJS + deck-theme.ts + business-deck-standards)
    ↓
presentation-quality-gates checklist
    ↓
outputs/pitch/deck.pptx  OR  outputs/consulting/deck.pptx
```

### Other deliverables

```text
carousel-architect → outputs/carousel/*.png
demo-video-remotion → outputs/video/demo.mp4
```

The bottleneck is not slide generation — it is **content → structure → layout → design**. Skills enforce that order. Full guide: [docs/PRESENTATION_PLAYBOOK.md](docs/PRESENTATION_PLAYBOOK.md).

---

## How to use

### Method 1: Open as workspace (recommended)

```powershell
cd D:\Startups\cursor-config-design
cursor .
```

Start from [templates/brief-input.md](templates/brief-input.md) or paste your Markdown in chat.

### Method 2: Link into a deck/video project

```powershell
.\scripts\link-to-project.ps1 -Target "D:\Startups\MyPitchDeck"
```

### Method 3: Three-window workflow

| Window | Config |
|--------|--------|
| Design | This repo |
| Code | cursor-config-coding (linked to app repo) |
| Business | cursor-config-buisness |

---

## Example prompts

### Investor pitch (PPTX)

```text
Use pitch-deck-architect for storyline, then presentation-architect for PPTX.
Seed stage, 12 slides, Stamped Energy brand. Real traction: [metrics].
Output: outputs/pitch/deck.pptx with speaker notes. Flag [TBD] where data missing.
```

### Consulting deck

```text
Use management-consultant-deck for storyline, then presentation-architect for PPTX.
Topic: market entry for B2B solar in Texas. McKinsey-style action titles as full sentences.
Deliver outputs/consulting/storyline.md first; build PPTX after I approve.
```

### Board / sales update

```text
Use presentation-architect. 8 slides, neutral brand from deck-theme.ts.
Insight titles, one chart per data slide, speaker notes on every slide.
```

### LinkedIn carousel

```text
Use carousel-architect. Turn this article into 8 slides at 1080×1350.
Content OS brand. Export PNGs to outputs/carousel/.
```

### Product demo video

```text
Use demo-video-remotion + remotion-best-practices.
60-second walkthrough of Content OS discovery → draft flow. Stamped Orange accent.
```

---

## Outputs

| Asset | Typical path |
|-------|----------------|
| PowerPoint | `outputs/deck.pptx` |
| Storyline | `outputs/storyline.md` |
| Speaker notes | `outputs/speaker-notes.md` |
| Carousel PNGs | `outputs/carousel/slide-NN.png` |
| Video | `outputs/video/demo.mp4` |

Contents of `outputs/` are gitignored by default.

---

## Linking to a project

```powershell
.\scripts\link-to-project.ps1 -Target "C:\path\to\remotion-or-deck-repo"
```

Requires Windows junction support (Developer Mode or Admin).

---

## Quick reference

| I want… | Skill / action |
|---------|----------------|
| Investor pitch | `pitch-deck-architect` → `presentation-architect` |
| Consulting / strategy deck | `management-consultant-deck` → `presentation-architect` |
| Business PowerPoint | `presentation-architect` + `deck-theme.ts` |
| Presentation quality bar | `business-deck-standards.md` + `presentation-quality-gates` |
| Instagram/LinkedIn carousel | `carousel-architect` |
| Demo MP4 | `demo-video-remotion` |
| Stamped Energy colors | `design-systems/stamped-energy-main-website.md` |
| Content OS UI look | `design-systems/content-os.md` |
| Polish layout | `impeccable` |
| Remotion details | `remotion-best-practices` |

---

## Push to GitHub

```powershell
cd D:\Startups\cursor-config-design
git init   # if not already
git remote add origin https://github.com/YOUR_USER/cursor-config-design.git
git add -A && git commit -m "feat: initial design cursor config"
git push -u origin main
```
