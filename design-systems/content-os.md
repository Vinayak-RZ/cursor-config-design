# Content OS - Design System

Living reference for the Content OS web app (`content-os/`). Tokens live in CSS variables; components consume them via Tailwind.

**Source of truth files**

| File | Role |
|------|------|
| `content-os/app/globals.css` | CSS variables, utilities, base styles |
| `content-os/tailwind.config.ts` | Tailwind theme extensions |
| `content-os/lib/design-tokens.ts` | Brand hex + high-level notes |
| `content-os/app/layout.tsx` | Font loading (Next.js `next/font`) |
| `content-os/components/ui/*` | Primitives (Button, Badge, Card, Input, …) |

---

## 1. Brand identity

**Product name:** Content OS  
**Tagline (marketing):** Thinking amplification for founders & creators  
**Positioning:** Personal-brand workflow - discovery → ranked topics → drafts in your voice. BYOK, no auto-posting.

**Visual personality**

- Warm, calm, professional - not a loud SaaS gradient stack
- **Forest Night** anchor (deep green-black text and secondary surfaces)
- **Stamped Orange** accent (energy on CTAs, pills, focus rings, status)
- White cards on a light grey canvas - depth through borders and soft shadows, not heavy chrome
- Inspired by clean productivity tools (Tavily-like layout sensibility; orange replaces green as accent)

**Logo**

- Mark: `content-os/public/brand/logo-mark.png`
- Wordmark: **Content OS** in `font-heading`, semibold, tight tracking
- Component: `components/brand/logo.tsx`
- Sizes: `sm` (28px mark), `md` (32px), `lg` (40px)

---

## 2. Design principles

Use these when adding UI. They match what the current codebase already does.

### Clarity over decoration

One primary action per block. Labels in plain language. Muted text for supporting copy only.

### Tonal layering

Background → card → interactive highlight. Use `bg-background`, `bg-card`, `bg-muted`, and `bg-brand-muted` - not arbitrary greys.

### Accent with restraint

Orange is for **action, focus, and live status** - not every heading or icon. Forest green-black is for **secondary CTAs** and **inverted footer bands**.

### Depth without noise

`border-subtle` + `shadow-ambient` on cards. `shadow-pill` on buttons, nav active states, and chips. Avoid stacked heavy shadows.

### Typography hierarchy

- **Display (serif):** hero and closing CTA headlines only
- **Heading (Jost):** nav, section titles, card titles, badges, UI labels
- **Body (Source Sans 3):** paragraphs, form text, descriptions

### Accessible motion

GSAP scroll/hero animations on landing **only when** `prefers-reduced-motion` is not set. Global CSS short-circuits transitions for reduced motion.

### Mobile-first app shell

Sidebar collapses to drawer on `< lg`. Sticky mobile header with hamburger. Page content uses `page-x` horizontal padding.

---

## 3. Color system

All semantic colors are **HSL components** in `:root` (no `hsl()` wrapper in the variable). Tailwind uses `hsl(var(--token))`.

### Brand - Stamped Orange

| Token | HSL | Hex (approx.) | Usage |
|-------|-----|---------------|--------|
| `--brand` | `8 92% 61%` | `#F75440` | Primary buttons, links, focus ring, active step nodes |
| `--brand-foreground` | `0 0% 100%` | `#FFFFFF` | Text on brand fills |
| `--brand-muted` | `8 85% 96%` | light peach wash | Badge backgrounds, banners, selected persona cards |
| `--brand-border` | `8 70% 88%` | soft orange border | Brand outline buttons, brand badges |

Tailwind: `bg-brand`, `text-brand`, `border-brand/25`, `bg-brand-muted`, `border-brand-border`, etc.

### Forest Night (secondary anchor)

| Token | HSL | Usage |
|-------|-----|--------|
| `--forest` | `160 100% 4%` | Secondary buttons, published status, footer CTA band (`.surface-forest`) |
| `--forest-foreground` | `0 0% 100%` | Text on forest surfaces |

Tailwind: `bg-forest`, `text-forest-foreground`, `surface-forest` utility.

### Surfaces & text

| Token | HSL | Role |
|-------|-----|------|
| `--background` | `0 0% 98%` | Page canvas (~ `#FAFAFA`) |
| `--foreground` | `160 100% 4%` | Primary text (~ `#00160D` family) |
| `--sidebar` | `0 0% 98%` | App sidebar background |
| `--card` | `0 0% 100%` | Cards, elevated panels |
| `--card-foreground` | `160 100% 4%` | Text on cards |
| `--muted` | `0 0% 96%` | Subtle fills, input backgrounds, section alternates |
| `--muted-foreground` | `0 0% 40%` | Secondary text, placeholders |
| `--accent` | `152 18% 92%` | Feature icon wells on landing |
| `--accent-foreground` | `152 22% 28%` | Icon color on accent wells |

### UI roles (shadcn-compatible)

| Token | Maps to |
|-------|---------|
| `--primary` | Same as brand |
| `--secondary` | Same as forest |
| `--border` | `160 8% 88%` |
| `--input` | `0 0% 96%` |
| `--ring` | Brand (focus rings) |
| `--destructive` | `0 72% 42%` |

### Borders

Prefer **`border-subtle`** utility: `hsl(var(--forest) / 0.08)` - softer than raw `--border` for cards and dividers.

### Semantic colors outside tokens (use sparingly)

Topic score badges in `topic-card.tsx`:

| Score | Classes |
|-------|---------|
| ≥ 7.5 | `border-emerald-500/40 bg-emerald-500/10 text-emerald-700` |
| ≥ 5 | `border-amber-500/40 bg-amber-500/10 text-amber-800` |
| &lt; 5 | `border-border bg-muted text-muted-foreground` |

### Theme color (browser UI)

From `app/layout.tsx` viewport:

- Light: `#FAF9F7`
- Dark meta hint: `#001410` (app UI is **light-mode only** today; no `.dark` theme block in CSS)

---

## 4. Typography

### Font families

Loaded in `app/layout.tsx` via `next/font/google`:

| Role | Family | CSS variable | Tailwind class | Use for |
|------|--------|--------------|----------------|---------|
| Body | **Source Sans 3** | `--font-body` | `font-sans` (default on `body`) | Paragraphs, inputs, descriptions |
| Heading | **Jost** | `--font-heading` | `font-heading` | Nav, h1–h6 (base style), badges, table headers, step labels |
| Display | **Playfair Display** | `--font-display` | `font-display` | Landing hero h1, footer CTA h2, decorative step numbers |

All fonts: `display: swap`, Latin subset.

### Base heading behavior

From `globals.css`:

```css
h1–h6 { font-heading; tracking-tight; color: inherit; }
```

### Type scale (Tailwind extensions)

| Class | Size / line-height | Typical use |
|-------|-------------------|-------------|
| `text-display-hero` | 4.5rem / 1.15, −0.02em tracking | Landing hero (lg+) |
| `text-headline-lg` | 2.5rem / 1.3, −0.01em | Section titles (large) |
| `text-headline-md` | 1.5rem / 1.35 | Section titles (default) |
| `text-body-lg` | 1.125rem / 1.55 | Hero subcopy |
| `text-xl`–`text-3xl` | Tailwind defaults | App page titles, card titles |
| `text-sm` | Default body secondary | Descriptions, form help |
| `text-xs` | Meta, breadcrumbs, uppercase labels |

### Common text patterns

| Pattern | Classes |
|---------|---------|
| Eyebrow / kicker | `font-heading text-xs font-semibold uppercase tracking-[0.12em] text-brand` |
| Page breadcrumb | `font-heading text-xs font-semibold uppercase tracking-wide text-muted-foreground` |
| App page title | `font-heading text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl` |
| Section title (app) | `font-heading text-xl font-semibold tracking-tight` |
| Section title (marketing) | `font-heading text-headline-md font-semibold sm:text-headline-lg` |
| Hero headline | `font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-display-hero` |
| Muted body | `text-sm leading-relaxed text-muted-foreground` |
| Balanced wrap | `text-balance` utility |

### Font features

`body`: `font-feature-settings: "kern" 1, "liga" 1` + `antialiased`

---

## 5. Spacing & layout

### Container

| Utility / token | Value |
|-----------------|-------|
| `--container-max` | `75rem` (1200px) |
| `.container-stamped` | `mx-auto max-w-[var(--container-max)] px-4 sm:px-6` |
| `.page-x` | `px-4 sm:px-6 lg:px-8` - dashboard page horizontal padding |

### Section spacing

| Token / class | Value |
|---------------|-------|
| `--section-padding` | `5rem` |
| `py-section` | Vertical padding for marketing sections |

### App shell

| Element | Spec |
|---------|------|
| Sidebar width | `w-60` (240px) |
| Mobile drawer | `min(18rem, 85vw)` |
| Mobile header height | `h-14` |
| Card padding | `p-6 sm:p-8` (CardHeader / CardContent) |

### Grids (recurring)

- Feature grid: `sm:grid-cols-2`, gap `6` / `8`
- Persona picker: `sm:grid-cols-2`, gap `2`
- Topic preview mock: `sm:grid-cols-3`

---

## 6. Radius

| Token | Value | Tailwind |
|-------|-------|----------|
| `--radius` | `0.5rem` (8px) | `rounded-md` |
| `--radius-lg` | `0.75rem` | `rounded-lg` |
| `--radius-xl` | `1rem` | `rounded-xl` |
| - | `calc(--radius-xl + 4px)` | `rounded-2xl` |

**Convention**

- **Cards & panels:** `rounded-xl`
- **Buttons & inputs:** `rounded-md`
- **Pills & badges:** `rounded-full` (or `rounded-md` for draft status)
- **Icon wells:** `rounded-md` with `size-10`

---

## 7. Shadows & elevation

| Token / class | Value |
|---------------|-------|
| `--shadow-ambient` | `0 4px 20px rgb(0 22 13 / 0.04)` |
| `--shadow-card` | Same as ambient |
| `--shadow-pill` | `0 1px 2px rgb(0 22 13 / 0.04)` |

| Class | Use |
|-------|-----|
| `shadow-ambient` | Cards, mobile drawer, product preview |
| `shadow-card` | Alias of ambient |
| `shadow-pill` | Buttons, active nav item, persona cards, compact draft cards |

**Mesh gradient** (landing hero background): `.mesh-gradient` - three radial gradients using brand and accent at low opacity.

---

## 8. Motion & easing

| Token | Value |
|-------|-------|
| `--ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` |
| `--ease-in-out` | `cubic-bezier(0.77, 0, 0.175, 1)` |

Tailwind: `ease-out`, `duration-150`, `duration-200` on interactive elements.

**Button press:** `active:scale-[0.97]`  
**Landing (GSAP):** hero fade-up stagger; feature cards on scroll - disabled when `prefers-reduced-motion: reduce`.

---

## 9. Components

Built on **shadcn/ui** (`style: new-york`, `components.json`) + **class-variance-authority** + **Lucide** icons (`strokeWidth: 1.75` in nav).

### Button (`components/ui/button.tsx`)

Base: `text-sm font-medium`, `duration-150 ease-out`, focus ring `ring-2 ring-ring ring-offset-2`.

| Variant | Appearance |
|---------|------------|
| `default` | Brand fill, white text, `shadow-pill` |
| `secondary` | Forest fill, white text |
| `tertiary` | Muted-foreground fill |
| `outline` | Card bg, `border-subtle` |
| `brandOutline` | `bg-brand-muted`, `border-brand-border`, `text-brand` |
| `ghost` | Transparent, subtle border optional |
| `destructive` | Red destructive token |

| Size | Height |
|------|--------|
| `default` | `h-10` |
| `sm` | `h-8`, `text-xs` |
| `lg` | `h-11` |
| `pill` | `h-9 px-5` |

**CTA copy:** Primary auth CTA is **“Get started”** (not “Start free”).

### Badge (`components/ui/badge.tsx`)

`rounded-full`, `font-heading`, `text-[11px]`, `font-semibold`, `uppercase`, `tracking-wide`.

| Variant | Style |
|---------|-------|
| `default` | Card bg, subtle border |
| `brand` | Brand muted bg + brand text |
| `brandSolid` | Solid brand |
| `muted` | Muted fill |
| `forest` | Forest fill |

Optional `dot` prop: small `bg-brand` circle (e.g. AppHeader “Live” badge).

### Card (`components/ui/card.tsx`)

`rounded-xl border-subtle bg-card shadow-ambient`

- **CardTitle:** `font-heading text-xl font-semibold sm:text-2xl`
- **CardDescription:** `text-sm leading-relaxed text-muted-foreground`

### Form controls

**Input & Textarea**

- Height `h-10` (input), `min-h-[140px]` (textarea default)
- `border-subtle bg-input rounded-md text-sm`
- Focus: `border-brand ring-[3px] ring-brand/10`
- Placeholder: `text-muted-foreground`

**Label:** `text-sm font-medium` (shadcn Label)

**Selection (persona picker):** `rounded-xl border px-4 py-3 shadow-pill`; selected → `border-brand bg-brand/5 ring-1 ring-brand`

### Draft status (`components/ui/draft-status-badge.tsx`)

| Status | Visual |
|--------|--------|
| Draft | Muted |
| Approved | Brand muted |
| Published | Forest solid |

Uses `rounded-md` + `normal-case` (exception to pill badge rule).

### Copy button, API key field

Follow same border/focus patterns as Input; ghost/outline buttons for secondary actions.

---

## 10. Layout patterns

### Marketing landing (`components/landing/landing-page.tsx`)

```
[Header: sticky, blur, border-subtle]
  container-stamped · Logo · nav links · auth buttons

[Hero: mesh-gradient overlay]
  eyebrow (brand) → display headline → body-lg subcopy
  primary CTA + ghost secondary
  product preview card (mock topic board)

[Features: bg-muted/30, py-section]
  2-col feature cards with accent icon wells

[How it works: LandingStepsFlow]
  desktop: GSAP timeline; mobile: static list

[FAQ: bg-muted/30]
  accordion details in single card

[Feature request panel]

[CTA: surface-forest]
  display headline, forest-foreground/80 body

[Footer: border-top, Logo + meta links]
```

### App shell (`components/app-shell.tsx`)

- Left sidebar (desktop): logo, nav, sign out
- Main column: optional mobile header + `{children}`
- Nav active state: `bg-card shadow-pill text-foreground`
- Nav idle: `text-muted-foreground hover:bg-muted/60`

### Page header (`components/app-header.tsx`)

Breadcrumb → h1 title → optional description + brand “Live” badge with dot.

### Knowledge builder panel

Highlighted panel: `border-brand/25 bg-card shadow-ambient`  
Callout strip: `border-brand/20 bg-brand/5`  
Empty knowledge banner: `border-brand/35 bg-brand-muted`

---

## 11. Icons

- **Library:** Lucide React (`lucide-react`)
- **Nav / UI default:** `size-4` or `size-5`, `strokeWidth={1.75}` where specified
- **Feature wells:** `size-5` on `size-10` container
- **GitHub icon:** inline SVG in `feature-request-panel.tsx` (Lucide `Github` not available in pinned version)

---

## 12. Accessibility

- Focus visible on buttons and inputs (`focus-visible:ring-*`)
- `aria-label` on icon-only menu buttons
- `aria-current="page"` on active nav links
- FAQ uses native `<details>` / `<summary>` with hidden default marker
- Reduced motion respected globally and in GSAP hooks
- Logo mark: decorative (`alt=""`, `aria-hidden`); wordmark text provides name

---

## 13. Utilities cheat sheet

| Class | Purpose |
|-------|---------|
| `.page-x` | Standard horizontal page padding |
| `.container-stamped` | Centered marketing container |
| `.border-subtle` | Soft forest-tinted border |
| `.mesh-gradient` | Landing background wash |
| `.surface-forest` | Inverted forest band + inherited heading colors |
| `.text-balance` | Balanced headline wrapping |
| `.shadow-ambient` / `.shadow-pill` | Elevation |

---

## 14. Do & don’t

### Do

- Use semantic tokens (`text-muted-foreground`, `bg-card`) instead of raw hex
- Use `font-heading` for UI chrome and `font-display` only for marketing hero moments
- Keep primary actions as `Button` default (brand) or `secondary` (forest) on dark bands
- Use `rounded-xl` + `border-subtle` for new panels to match existing cards
- Match landing section rhythm: `py-section`, `container-stamped`, `border-t border-subtle`

### Don’t

- Introduce new accent colors without updating `globals.css` tokens
- Use display serif for dashboard UI - breaks app/marketing boundary
- Rely on dark mode classes - not implemented in CSS yet
- Add heavy box shadows or saturated gradients; keep the calm stamped look
- Use jargon-heavy microcopy in forms - plain language is a product principle

---

## 15. Extending the system

When adding a new color or size:

1. Add CSS variable in `app/globals.css` `:root`
2. Map in `tailwind.config.ts` `theme.extend`
3. Optionally document hex in `lib/design-tokens.ts`
4. Build or extend a `components/ui/*` primitive - avoid one-off styling in feature code

When adding marketing sections, copy structure from `landing-page.tsx`: section id, `container-stamped`, headline scale, muted supporting line, then content grid.

---

*Last synced with codebase: Content OS app in `content-os/` (Stamped Orange + Forest Night, Source Sans 3 / Jost / Playfair Display).*
