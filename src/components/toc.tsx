"use client";

import { useState } from "react";
import type { Heading } from "~/lib/blog";

interface TocProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TocProps) {
  const [open, setOpen] = useState(false);

  if (headings.length === 0) return null;

  return (
    <nav className="mb-10 rounded-lg border border-[#161616] bg-[#0a0a0a] p-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between"
      >
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#666]">
          Table of Contents
        </span>
        <span className="font-mono text-[11px] text-[#444]">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <ul className="mt-3 flex flex-col gap-1.5 border-t border-[#161616] pt-3">
          {headings.map((h) => (
            <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
              <a
                href={`#${h.id}`}
                className="block text-[13px] leading-relaxed text-[#888] transition-colors hover:text-[#ededed]"
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
