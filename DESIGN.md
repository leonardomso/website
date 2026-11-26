---
name: Leonardo Maldonado
description: Personal site. Minimal and typographic, led by one large statement.
colors:
  light:
    bg: "#ffffff"
    fg: "#111111"
    mute: "#6b6b6b"
    underline: "#c4c4c4"
    line: "#ebebeb"
    surface: "#f6f6f6"
  dark:
    bg: "#0a0a0a"
    fg: "#ededed"
    mute: "#8f8f8f"
    underline: "#4a4a4a"
    line: "#1f1f1f"
    surface: "#131313"
typography:
  family: "Inter Variable, Inter, system-ui, sans-serif"
  display: { fontSize: "clamp(1.875rem, 5vw, 3rem)", lineHeight: "1.12", letterSpacing: "-0.035em", fontWeight: 500 }
  page-title: { fontSize: "clamp(1.875rem, 4.5vw, 2.75rem)", lineHeight: "1.12", letterSpacing: "-0.035em", fontWeight: 500 }
  title-lg: { fontSize: "24px", letterSpacing: "-0.025em", fontWeight: 500 }
  body: { fontSize: "15px", lineHeight: "1.6", fontWeight: 400 }
spacing:
  frame: "44rem"
  measure: "36rem"
  gutter: "24px"
  header-to-content: "clamp(56px, 12vh, 120px)"
  section: "56px, separated by a 1px line"
  paragraph: "16px"
  list-row: "12px"
---

## Overview

A 44rem frame with running text held to a 36rem measure. Light by default, dark when the system asks for it. Everything is set in Inter.

The home page leads with one large sentence (`.display`): what I do in black, what I'm doing now in grey. Everything after it is quieter. Every other page opens with a large title (`.page-title`) and then the same body size as the rest of the site.

Every page shares the same frame: name on the left, About, Projects and Resume on the right, the page content, then a quiet footer with Now and Uses. Sections are separated by a hairline with a grey label above the content.

## Colors

Defined once as CSS variables in `src/styles/globals.css` and exposed to Tailwind as `bg`, `fg`, `mute`, `line` and `surface`. `mute` meets WCAG AA on `bg` in both themes. There is no accent color.

## Typography

- Inter everywhere.
- Three large sizes, all weight 500 with tight tracking: the home statement, page titles, and project titles (24px). Everything else is 15px.
- Section labels (`.section h2`) are body size in `mute`.
- Hierarchy beyond those sizes comes from weight and colour, not more sizes.

## Components

- **List** (`.list`): name in a 9rem column, description in `mute`, optional years on the right with tabular numbers.
- **Entries** (`.entries`): a heading line with meta on the right and a `mute` description under it. Used by projects and resume.
- **Links**: plain until hover, where they underline. Links in running text (`.text a`) are always underlined with the `underline` color.
- **Disclosure** (`.disclosure`): hairline rows with a +/− marker. Used for the About FAQ.
- **Linked titles**: large title with a small ↗ that nudges up and right on hover (200ms, ease-out).
- **Focus**: 2px outline in `currentColor`, 3px offset.

## Don'ts

- No cards, shadows, gradients, blur or noise.
- No new font sizes beyond the three large ones; no uppercase labels.
- No icons where a word works.
- No em dashes in copy. Use commas, colons or periods.
