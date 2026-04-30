import type { Metadata } from "next";
import { JsonLd, profilePageSchema } from "~/components/json-ld";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer based in Valencia, Spain. Sole engineer on Spaceship's domain search at Namecheap — helped sell 3M+ domains. Creator of 33 JavaScript Concepts (66k+ stars).",
};

export default function AboutPage() {
  return (
    <div>
      <JsonLd data={profilePageSchema} />
      <p className="mb-4 font-mono text-[#666] text-[12px] uppercase tracking-[0.25em]">
        About
      </p>
      <h1 className="font-semibold text-[#ededed] text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-[-0.03em]">
        Leonardo Maldonado
      </h1>

      <div className="mt-12 flex flex-col gap-6 text-[#888] text-[15px] leading-[1.8]">
        <p>
          Hey — I&apos;m Leonardo, a software engineer based in{" "}
          <span className="text-[#a0a0a0]">Valencia, Spain</span>. Born and
          raised in Franca, Brazil. I moved to Spain to work on things I care
          about and be closer to the European tech scene.
        </p>

        <p>
          I currently work at{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://www.namecheap.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Namecheap
          </a>
          , where I built{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://www.spaceship.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Spaceship
          </a>
          &apos;s{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://www.spaceship.com/domain-search/"
            rel="noopener noreferrer"
            target="_blank"
          >
            domain search platform
          </a>{" "}
          for four and a half years as the sole engineer — helping the platform
          sell 3M+ domains. I designed the entire frontend architecture with
          React, TypeScript, and Zustand — building features like Beast Mode
          bulk search, a real-time WebSocket pricing system, and a
          multi-currency engine supporting 30+ currencies across 500+ TLDs.
        </p>

        <p>
          Before Namecheap, I built mobile apps at startups in Brazil —
          including a food delivery app for LA and frontend solutions for
          Brazilian banking projects. I also spent several years writing
          technical content for companies like{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://www.telerik.com/blogs/author/leonardo-maldonado"
            rel="noopener noreferrer"
            target="_blank"
          >
            Progress
          </a>{" "}
          and{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://blog.logrocket.com/author/leonardomaldonado/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LogRocket
          </a>
          . I have over 100 articles published across JavaScript, TypeScript,
          React, GraphQL, Node.js, and more — with over 1 million views.
        </p>

        <p>
          In 2018, I created{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://github.com/leonardomso/33-js-concepts"
            rel="noopener noreferrer"
            target="_blank"
          >
            33 JavaScript Concepts
          </a>
          , an open-source project that GitHub recognized as one of the{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://github.blog/2018-12-13-new-open-source-projects/#top-projects-of-2018"
            rel="noopener noreferrer"
            target="_blank"
          >
            top projects of 2018
          </a>
          . It now has 66,000+ stars and has been translated into 20+ languages.
        </p>

        <p>
          I spend most of my time building web experiences and I&apos;m
          passionate about programming, web development, and building products.
          I work primarily with TypeScript, React, Zustand, TanStack Query,
          Next.js, and Node.js.
        </p>

        <p>
          Outside of work, I enjoy exploring Valencia, reading, and working on
          side projects. Always open to interesting conversations — feel free to{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="mailto:leonardomso11@gmail.com"
          >
            reach out
          </a>
          .
        </p>
      </div>
    </div>
  );
}
