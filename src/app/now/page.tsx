import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now — Leonardo Maldonado",
  description: "What I'm currently working on and thinking about.",
};

export default function NowPage() {
  return (
    <div>
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] uppercase text-[#666]">
        Now
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-[#ededed]">
        What I&apos;m up to
      </h1>
      <p className="mt-6 max-w-[440px] text-[15px] leading-[1.75] text-[#888]">
        A snapshot of what I&apos;m focused on right now.
        Inspired by{" "}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
        >
          nownownow.com
        </a>
        .
      </p>

      <div className="mt-16 flex flex-col gap-12">
        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[#666]">
            Work
          </h2>
          <div className="flex flex-col gap-4 text-[15px] leading-[1.8] text-[#888]">
            <p>
              Building{" "}
              <a
                href="https://www.spaceship.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
              >
                Spaceship
              </a>{" "}
              at Namecheap — a digital platform helping people bring ideas to
              life. Focused on the Domain Search experience and scaling the
              frontend architecture.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[#666]">
            Side Projects
          </h2>
          <div className="flex flex-col gap-4 text-[15px] leading-[1.8] text-[#888]">
            <p>
              Redesigning this portfolio from scratch with Next.js 16, Tailwind
              CSS v4, and a custom dark minimal aesthetic. Exploring
              markdown-powered blogging and modern web patterns.
            </p>
            <p>
              Continuing to maintain{" "}
              <a
                href="https://github.com/leonardomso/33-js-concepts"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
              >
                33 JavaScript Concepts
              </a>{" "}
              — now at 63k+ stars and translated into 20+ languages.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[#666]">
            Learning
          </h2>
          <div className="flex flex-col gap-4 text-[15px] leading-[1.8] text-[#888]">
            <p>
              Exploring modern React patterns, server components, and the latest
              in the JavaScript ecosystem. Always looking for better ways to build
              for the web.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[#666]">
            Life
          </h2>
          <div className="flex flex-col gap-4 text-[15px] leading-[1.8] text-[#888]">
            <p>
              Born and raised in Brazil, now based in Valencia, Spain. Enjoying
              the Mediterranean pace of life and exploring the city.
            </p>
          </div>
        </section>
      </div>

      <p className="mt-20 text-[13px] text-[#666]">
        Last updated: February 2026
      </p>
    </div>
  );
}
