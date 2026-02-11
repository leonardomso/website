import { Experience } from "~/components/experience";
import { Writing } from "~/components/writing";
import { Stack } from "~/components/stack";
import { Ventures } from "~/components/ventures";
import { Contact } from "~/components/contact";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#666]">
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
        <p className="mb-4 font-mono text-[12px] tracking-[0.25em] uppercase text-[#666]">
          Software Engineer · Valencia, Spain
        </p>
        <h1 className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-[#ededed]">
          Leonardo
          <br />
          Maldonado
        </h1>
        <p className="mt-8 max-w-[480px] text-[15px] leading-[1.75] text-[#888]">
          Software engineer at{" "}
          <a
            href="https://www.spaceship.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          >
            Namecheap
          </a>
          , building web experiences and passionate about programming, web
          development, and building products.
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
