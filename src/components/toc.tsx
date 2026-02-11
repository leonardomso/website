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
    <nav className="mb-10 rounded-lg border border-[#161616] bg-[#0a0a0a] p-4">
      <button
        className="flex w-full cursor-pointer items-center justify-between"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="font-mono text-[#666] text-[11px] uppercase tracking-[0.15em]">
          Table of Contents
        </span>
        <span className="font-mono text-[#444] text-[11px]">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <ul className="mt-3 flex flex-col gap-1.5 border-[#161616] border-t pt-3">
          {headings.map((h) => (
            <li className={h.level === 3 ? "ml-4" : ""} key={h.id}>
              <a
                className="block text-[#888] text-[13px] leading-relaxed transition-colors hover:text-[#ededed]"
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
