---
title: "Building a Modern Portfolio with Next.js"
description: "A deep dive into how I rebuilt my portfolio using Next.js 16, Tailwind CSS v4, and a headless CMS — from architecture decisions to the final pixel."
date: "2025-02-10"
tags: ["Next.js", "React", "Portfolio", "Web Development"]
---

I recently rebuilt my personal website from scratch. The previous version was built with Framer — it looked good, but I wanted full control over every detail. Here's how I approached it.

## Why I moved away from Framer

Framer is great for prototyping and quick landing pages, but I kept running into limitations:

- **No code ownership** — everything lives in their platform
- **Limited blog support** — I wanted full markdown with syntax highlighting
- **Performance** — I wanted static generation and edge caching
- **Customization ceiling** — when you want something Framer doesn't support, you're stuck

The new stack is **Next.js 16** with the App Router, **Tailwind CSS v4**, and **Basehub** as the headless CMS for blog content.

## The tech stack

| Technology | Purpose |
|-----------|---------|
| Next.js 16 | Framework (App Router, RSC, Turbopack) |
| React 19 | UI library |
| Tailwind CSS v4 | Styling (CSS-first config) |
| TypeScript 5.9 | Type safety |
| Basehub | Headless CMS for blog posts |
| Vercel | Deployment & edge network |

## Architecture decisions

The site follows a simple structure. One page for the portfolio, one for the blog:

```
src/
├── app/
│   ├── layout.tsx        # Root layout with Geist font
│   ├── page.tsx          # Home — all portfolio sections
│   └── blog/
│       ├── page.tsx      # Blog listing
│       └── [slug]/
│           └── page.tsx  # Individual posts
├── components/           # Shared UI components
├── content/              # Local markdown (pre-CMS)
└── lib/                  # Utilities
```

### Server Components by default

One of the best things about the App Router is that **every component is a Server Component by default**. This means:

- Zero JavaScript shipped for static content
- Data fetching happens on the server
- No loading spinners for blog posts

```tsx
export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <article className="prose">
      <h1>{post.title}</h1>
      <Markdown content={post.content} />
    </article>
  );
}
```

No `"use client"`, no `useEffect`, no loading states. The HTML is generated at build time and served from the edge.

### Tailwind CSS v4 — the CSS-first approach

Tailwind v4 is a major shift. There's **no `tailwind.config.js`** anymore. Everything is configured in CSS:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, monospace;
}
```

This is cleaner and means your design tokens live where they belong — in CSS, not JavaScript.

## Design principles

I wanted the site to feel **quiet but intentional**. A few rules I followed:

1. **No bright colors** — a grey scale palette from `#050505` to `#ededed`
2. **Typography over decoration** — let the text breathe with generous spacing
3. **Subtle interactions** — underlines that animate on hover, dots that light up on the timeline
4. **Monospace for metadata** — dates, labels, and section headings use `Geist Mono` at small sizes

> The best interfaces don't demand attention. They get out of the way and let content speak.

### The noise texture trick

One thing that makes a flat dark background feel more premium is a **subtle noise overlay**:

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,...");
}
```

At `0.025` opacity it's barely visible, but it adds just enough texture to avoid the "flat digital" feel. The key is that `pointer-events: none` ensures it doesn't interfere with any interactions.

## Syntax highlighting with Shiki

For code blocks, I'm using [Shiki](https://shiki.style) through `rehype-pretty-code`. It generates HTML with inline styles at **build time** — no client-side JavaScript needed for highlighting.

Here's a more complex TypeScript example:

```typescript
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

async function getAllPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(CONTENT_DIR);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const content = await fs.readFile(
          path.join(CONTENT_DIR, file),
          "utf-8"
        );
        const { data, content: body } = matter(content);

        return {
          slug: file.replace(".md", ""),
          title: data.title,
          description: data.description,
          date: data.date,
          content: body,
        };
      })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
```

## What's next

A few things I'm still working on:

- **Basehub integration** — moving blog content from local markdown to a proper CMS
- **RSS feed** — so people can subscribe
- **OG image generation** — dynamic social images for each blog post
- **View transitions** — smooth page navigations with the View Transitions API

---

If you're building your own portfolio, my advice is simple: **own your platform**. Hosted tools are convenient, but there's nothing like having full control over your own corner of the internet.
