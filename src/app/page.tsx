import type { Metadata } from "next";
import { Contact } from "~/components/contact";
import { Experience } from "~/components/experience";
import { Stack } from "~/components/stack";
import { Ventures } from "~/components/ventures";
import { Writing } from "~/components/writing";

export const metadata: Metadata = {
  title: { absolute: "Leonardo Maldonado — Software Engineer" },
  description:
    "Software engineer based in Valencia, Spain. Built Spaceship's domain search platform at Namecheap. Creator of 33 JavaScript Concepts (63k+ stars).",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
        {children}
      </span>
      <div className="section-divider flex-1" />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section className="relative mb-32">
        <div className="hero-glow" />
        <p className="mb-4 font-mono text-[#666] text-[12px] uppercase tracking-[0.25em]">
          Software Engineer · Valencia, Spain
        </p>
        <h1 className="font-semibold text-[#ededed] text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.035em]">
          Leonardo
          <br />
          Maldonado
        </h1>
        <p className="mt-8 max-w-[480px] text-[#888] text-[15px] leading-[1.75]">
          Software engineer at{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://www.spaceship.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Namecheap
          </a>
          , where I built Spaceship&apos;s{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://www.spaceship.com/domain-search/"
            rel="noopener noreferrer"
            target="_blank"
          >
            domain search platform
          </a>{" "}
          from scratch. Passionate about building fast, polished web
          experiences.
        </p>
      </section>

      <section className="mb-28">
        <SectionLabel>Experience</SectionLabel>
        <Experience />
      </section>

      <section className="mb-28">
        <SectionLabel>Writing</SectionLabel>
        <Writing />
      </section>

      <section className="mb-28">
        <SectionLabel>Stack</SectionLabel>
        <Stack />
      </section>

      <section className="mb-28">
        <SectionLabel>Ventures</SectionLabel>
        <Ventures />
      </section>

      <section>
        <SectionLabel>Contact</SectionLabel>
        <Contact />
      </section>
    </div>
  );
}
