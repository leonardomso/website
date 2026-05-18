---
name: Leonardo Maldonado
description: Personal portfolio. Quiet, monochrome, mono-flavored.
colors:
  bg: "#050505"
  surface-low: "#0a0a0a"
  surface-border: "#161616"
  surface-border-strong: "#222222"
  fg: "#ededed"
  fg-muted: "#a0a0a0"
  fg-secondary: "#888888"
  fg-tertiary: "#7a7a7a"
  fg-quaternary: "#666666"
  fg-disabled: "#444444"
  selection-bg: "#ededed"
  selection-fg: "#050505"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.75"
    letterSpacing: "normal"
  meta:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "0.05em"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "0.25em"
rounded:
  none: "0"
  sm: "2px"
  md: "6px"
  lg: "8px"
spacing:
  edge: "24px"
  block: "16px"
  section: "64px"
  page-max: "680px"
components:
  link:
    textColor: "{colors.fg}"
    typography: "{typography.body}"
  link-muted:
    textColor: "{colors.fg-tertiary}"
    typography: "{typography.meta}"
  divider:
    backgroundColor: "{colors.surface-border}"
    height: "1px"
  card-quiet:
    backgroundColor: "transparent"
    rounded: "{rounded.lg}"
    padding: "16px"
  card-quiet-hover:
    backgroundColor: "{colors.surface-low}"
  tag:
    textColor: "{colors.fg-tertiary}"
    typography: "{typography.meta}"
    rounded: "{rounded.md}"
    padding: "2px 10px"
  focus-ring:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
---

## 1. Overview

A single-column reading column, 680px max, on a near-black field. The site is a personal portfolio for a software engineer; the design is the work sample. Every page is restrained, monochrome, and visibly considered. Visitors should feel they've landed on something hand-set rather than templated.

The grid is one column. Horizontal rhythm is built from a small set of internal indents (`-mx-3` / `px-3`) on hoverable list rows; vertical rhythm comes from a single section spacing scale plus a 1px low-contrast divider. There is no card-on-card nesting and no decorative chrome. A subtle SVG noise overlay (2.5% opacity) and a small radial glow behind the hero are the only background flourishes.

## 2. Colors

A monochrome neutral scale anchored at `#050505` background and `#ededed` foreground. All neutrals are *true* gray; this is intentional for the register but is documented as a deliberate choice — they are not tinted toward a brand hue.

| Role | Hex | Usage |
|---|---|---|
| `bg` | `#050505` | Page background. Never `#000`. |
| `surface-low` | `#0a0a0a` | Hover background for list rows and cards. |
| `surface-border` | `#161616` | Default 1px borders on cards, pills, dividers. |
| `surface-border-strong` | `#222222` | Borders on hover, table cell borders. |
| `fg` | `#ededed` | Primary text, headings, focus ring. |
| `fg-muted` | `#a0a0a0` | Body copy in secondary blocks (e.g. previous-post titles). |
| `fg-secondary` | `#888888` | Lede paragraphs, post descriptions. |
| `fg-tertiary` | `#7a7a7a` | Tag chips, dates, monospace labels. Meets WCAG AA 4.5:1 on `bg`. |
| `fg-quaternary` | `#666666` | Decorative metadata (aria-hidden only), reading-time hints. Below 4.5:1; never use for content. |
| `fg-disabled` | `#444444` | Inert separators between metadata items. |

Selection inverts: `#ededed` on `#050505`. There is no accent color: emphasis is built through weight, size, and position, never color.

## 3. Typography

Two families: **Geist** (sans, body and headings) and **Geist Mono** (mono, all metadata, labels, and tag chips). The split is enforced — labels and timestamps are *always* mono; running prose is *always* sans. The contrast between the two families is the site's primary expressive lever.

The display scale uses `clamp()` so headings flow from mobile to desktop without a step. Body sits at 15px with 1.75 line-height — generous for reading column length. Mono UI labels are tracked open (`0.25em`) and uppercased on navigation chrome.

| Style | Family | Size | Weight | Tracking | Purpose |
|---|---|---|---|---|---|
| Display | Geist | `clamp(2rem, 5vw, 3rem)` | 600 | -0.03em | Page H1 (Blog hub, About lede) |
| Heading | Geist | `clamp(1.75rem, 4vw, 2.5rem)` | 600 | -0.03em | Blog post H1 |
| Body | Geist | 15px | 400 | normal | Long-form copy |
| Body small | Geist | 13px | 400 | normal | Post descriptions, secondary copy |
| Meta | Geist Mono | 11px | 400 | 0.05em | Dates, reading time, tag chips |
| Label | Geist Mono | 12px | 400 | 0.25em | Section labels, nav (uppercased) |

Headings never use color for emphasis. They lean on size + weight + the `-0.03em` tracking to feel set, not typed.

## 4. Elevation

Flat. There is no shadow vocabulary; depth is tonal. The page reads in two layers:

1. **Field**: `#050505` with the 2.5% SVG noise overlay and a single radial glow (`rgba(255,255,255,0.03)`) behind the home hero.
2. **Surface**: a hover-revealed `#0a0a0a` rectangle on list rows. Cards on the blog adjacent-post nav use a 1px `#161616` border and the same surface tint on hover (`#222`).

No drop shadows. No inset shadows. No backdrop blur. No glow on focusable elements beyond the focus ring described in Components. If a design idea requires elevation to read, the layout is wrong — fix hierarchy with spacing and type instead.

## 5. Components

**Link.** Underlined-on-hover via the project's `.link-hover` class. Default color is `fg-tertiary` for nav and meta links, `fg` for in-prose links. Color does not change on hover; the underline does the work.

**List row (blog index, projects).** Row spans the full column with a -12px horizontal indent on hover (`-mx-3 px-3`), revealing `surface-low` and rounding to `rounded-lg`. Typography stays static; the surface change carries the affordance.

**Card (adjacent-post nav).** 1px `surface-border` with `rounded-lg` and `padding: 16px`. On hover, border deepens to `surface-border-strong` and background fills with `surface-low`. Used sparingly — only where a navigation choice genuinely needs to be bounded.

**Tag chip.** Mono 10–11px, `fg-tertiary` text, no background by default. Inside the post header, chips gain a 1px `surface-border` and `rounded-md` to read as bounded objects against the title.

**Section divider.** A 1px `surface-border` rule with no color shift on hover. Used to separate hero from content and content from footer-style metadata. Always 1px, always the same color.

**Focus ring.** `outline: 2px solid #ededed` with `outline-offset: 2px` and a `border-radius: 2px`. Visible on every focusable element. Contrast against `bg` is 17:1 — well above the WCAG 3:1 non-text threshold.

**Skip link.** Hidden until focused. When visible, it sits top-left with `bg = fg` and `text = bg` — the only inverted surface on the site.

**Command palette.** `cmdk`-driven. Rendered client-side from the `BaseLayout`. Out of scope for the static-page critique; treat as a separate surface.

## 6. Do's and Don'ts

**Do**

- Use Geist Mono for any short, fixed-width metadata: dates, durations, tags, section labels. The mono/sans switch is the site's signature.
- Treat 680px as a hard reading column. Anything that wants to be wider needs an explicit reason.
- Vary block spacing for rhythm: the gap between hero and first content (≈64px), between content and adjacent-post nav (≈32px), and between paragraphs (≈16px) are different on purpose.
- Use the 1px `surface-border` divider when two semantic blocks need separation. One line is enough; do not stack two.
- Hover-reveal surfaces (`surface-low`) for affordance. Don't change text color to signal hover.
- Respect `prefers-reduced-motion`: the project already disables animations universally under the media query. Keep new motion behind the same gate.

**Don't**

- **No new accent color.** Do not introduce blue, green, or any saturated hue. Emphasis is type and position, never color.
- **No card-on-card nesting.** A card inside a card is always wrong on this site. If a section needs internal grouping, use spacing or a single divider line.
- **No gradient text or gradient backgrounds.** The site is monochrome on purpose. `background-clip: text` is banned.
- **No drop shadows or backdrop blur.** Elevation is flat.
- **No Inter substitution.** Geist is the brand; replacing it with Inter erases the type identity.
- **No icon tile above every heading.** The rounded-square-icon-with-heading SaaS pattern is the loudest tell of templated design.
- **No em dashes.** Use commas, colons, semicolons, periods, or parentheses. Also no `--`.
- **No "Hi, I'm Leonardo" hero.** The home page leads with the name and one line of copy, full stop.
