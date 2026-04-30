import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm currently working on and thinking about.",
};

export default function NowPage() {
  return (
    <div>
      <p className="mb-4 font-mono text-[#666] text-[12px] uppercase tracking-[0.25em]">
        Now
      </p>
      <h1 className="font-semibold text-[#ededed] text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-[-0.03em]">
        What I&apos;m up to
      </h1>
      <p className="mt-6 max-w-[440px] text-[#888] text-[15px] leading-[1.75]">
        A snapshot of what I&apos;m focused on right now. Inspired by{" "}
        <a
          className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          href="https://nownownow.com/about"
          rel="noopener noreferrer"
          target="_blank"
        >
          nownownow.com
        </a>
        .
      </p>

      <div className="mt-16 flex flex-col gap-12">
        <section>
          <h2 className="mb-4 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Work
          </h2>
          <div className="flex flex-col gap-4 text-[#888] text-[15px] leading-[1.8]">
            <p>
              Building{" "}
              <a
                className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
                href="https://www.spaceship.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Spaceship
              </a>{" "}
              at Namecheap — where I was the sole engineer on the Domain Search
              experience for four and a half years, helping the platform sell
              3M+ domains.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Side Projects
          </h2>
          <div className="flex flex-col gap-4 text-[#888] text-[15px] leading-[1.8]">
            <p>
              Redesigning this portfolio from scratch with Next.js 16, Tailwind
              CSS v4, and a custom dark minimal aesthetic. Exploring
              markdown-powered blogging and modern web patterns.
            </p>
            <p>
              Continuing to maintain{" "}
              <a
                className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
                href="https://github.com/leonardomso/33-js-concepts"
                rel="noopener noreferrer"
                target="_blank"
              >
                33 JavaScript Concepts
              </a>{" "}
              — now at 63k+ stars and translated into 20+ languages.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Learning
          </h2>
          <div className="flex flex-col gap-4 text-[#888] text-[15px] leading-[1.8]">
            <p>
              Exploring modern React patterns, server components, and the latest
              in the JavaScript ecosystem. Always looking for better ways to
              build for the web.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Life
          </h2>
          <div className="flex flex-col gap-4 text-[#888] text-[15px] leading-[1.8]">
            <p>
              Born and raised in Brazil, now based in Valencia, Spain. Enjoying
              the Mediterranean pace of life and exploring the city.
            </p>
          </div>
        </section>
      </div>

      <p className="mt-20 text-[#666] text-[13px]">
        Last updated: February 2026
      </p>
    </div>
  );
}
