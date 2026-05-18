"use client";

import { Check, Link2 } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

const SHARE_TARGETS = [
  {
    label: "X",
    buildUrl: (title: string, url: string) =>
      `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  {
    label: "LinkedIn",
    buildUrl: (_title: string, url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    label: "Facebook",
    buildUrl: (_title: string, url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
];

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[11px] text-fg-tertiary uppercase tracking-wider">
        Share
      </span>

      {SHARE_TARGETS.map((target) => (
        <a
          className="link-hover py-1.5 text-[12px] text-fg-tertiary tracking-wide transition-colors hover:text-fg"
          href={target.buildUrl(title, url)}
          key={target.label}
          rel="noopener noreferrer"
          target="_blank"
        >
          {target.label}
        </a>
      ))}

      <button
        className="flex cursor-pointer items-center gap-1.5 py-1.5 text-[12px] text-fg-tertiary tracking-wide transition-colors hover:text-fg"
        onClick={handleCopy}
        type="button"
      >
        {copied ? (
          <>
            <Check className="h-3 w-3" />
            <span>Copied</span>
          </>
        ) : (
          <>
            <Link2 className="h-3 w-3" />
            <span>Copy link</span>
          </>
        )}
      </button>
    </div>
  );
}
