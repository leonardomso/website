"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const article = document.querySelector("article");
      if (!article) {
        return;
      }

      const { top, height } = article.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrolled = Math.max(0, -top);
      const total = height - viewportHeight;
      const pct = total > 0 ? Math.min(1, scrolled / total) : 0;

      setProgress(pct);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (progress <= 0) {
    return null;
  }

  return (
    <div
      aria-label="Reading progress"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={Math.round(progress * 100)}
      className="fixed top-0 left-0 z-[10000] h-[2px] bg-[#ededed] opacity-80 transition-[width] duration-100"
      role="progressbar"
      style={{ width: `${progress * 100}%` }}
    />
  );
}
