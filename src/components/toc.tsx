"use client";

import { useState } from "react";
import type { Heading } from "~/lib/blog";

interface TocProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TocProps) {
  const [open, setOpen] = useState(false);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Table of contents"
      className="mb-10 rounded-lg border border-surface-border bg-surface-low p-4"
    >
      <button
        aria-controls="toc-content"
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="font-mono text-[11px] text-fg-tertiary uppercase tracking-[0.15em]">
          Table of Contents
        </span>
        <span className="font-mono text-[11px] text-fg-disabled">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <ul
          className="mt-3 flex flex-col gap-1.5 border-surface-border border-t pt-3"
          id="toc-content"
        >
          {headings.map((h) => (
            <li className={h.level === 3 ? "ml-4" : ""} key={h.id}>
              <a
                className="block text-[13px] text-fg-secondary leading-relaxed transition-colors hover:text-fg"
                href={`#${h.id}`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
