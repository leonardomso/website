import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Leonardo Maldonado",
  description:
    "Software Engineer based in Valencia, Spain. Building web experiences at Namecheap.",
};

export default function AboutPage() {
  return (
    <div>
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] uppercase text-[#666]">
        About
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-[#ededed]">
        Leonardo Maldonado
      </h1>

      <div className="mt-12 flex flex-col gap-6 text-[15px] leading-[1.8] text-[#888]">
        <p>
          Hey — I&apos;m Leonardo, a software engineer based in{" "}
          <span className="text-[#a0a0a0]">Valencia, Spain</span>. Born in 1997 in
          Franca, Brazil. I moved to Spain to work on things I care about and be
          closer to the European tech scene.
        </p>

        <p>
          I currently work at{" "}
          <a
            href="https://www.namecheap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          >
            Namecheap
          </a>
          , where I&apos;ve been building{" "}
          <a
            href="https://www.spaceship.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          >
            Spaceship
          </a>{" "}
          — a digital platform that helps people bring ideas to life. I built
          the Domain Search feature from scratch and helped it reach 1 million
          domains sold in its first year.
        </p>

        <p>
          Before that, I worked at startups in Brazil building React and React
          Native apps, and spent several years writing technical content for
          companies like{" "}
          <a
            href="https://www.telerik.com/blogs/author/leonardo-maldonado"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          >
            Progress
          </a>{" "}
          and{" "}
          <a
            href="https://blog.logrocket.com/author/leonardomaldonado/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          >
            LogRocket
          </a>
          . I have over 90 articles published and 1 million+ views.
        </p>

        <p>
          In 2018, I created{" "}
          <a
            href="https://github.com/leonardomso/33-js-concepts"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          >
            33 JavaScript Concepts
          </a>
          , an open-source project that GitHub recognized as one of the{" "}
          <a
            href="https://github.blog/2018-12-13-new-open-source-projects/#top-projects-of-2018"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          >
            top projects of 2018
          </a>
          . It&apos;s helped thousands of developers deepen their understanding
          of JavaScript fundamentals.
        </p>

        <p>
          I&apos;m passionate about the craft of building software — from
          architecture decisions to the last pixel. I work primarily with
          TypeScript, React, Next.js, Node.js, and PostgreSQL.
        </p>

        <p>
          Outside of work, I enjoy exploring Valencia, reading, and working on
          side projects. I&apos;m always open to interesting conversations — feel
          free to{" "}
          <a
            href="mailto:leonardomso11@gmail.com"
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          >
            reach out
          </a>
          .
        </p>
      </div>
    </div>
  );
}
