"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

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
      <span className="font-mono text-[11px] tracking-wider uppercase text-[#666]">
        Share
      </span>

      {SHARE_TARGETS.map((target) => (
        <a
          key={target.label}
          href={target.buildUrl(title, url)}
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover text-[12px] tracking-wide text-[#666] transition-colors hover:text-[#ededed]"
        >
          {target.label}
        </a>
      ))}

      <button
        onClick={handleCopy}
        className="flex cursor-pointer items-center gap-1.5 text-[12px] tracking-wide text-[#666] transition-colors hover:text-[#ededed]"
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
