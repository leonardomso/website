import type { Metadata } from "next";
import { JsonLd, profilePageSchema } from "~/components/json-ld";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer based in Valencia, Spain. Built Spaceship's domain search platform at Namecheap. Creator of 33 JavaScript Concepts (66K+ stars).",
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
          I&apos;m Leonardo. I grew up in{" "}
          <span className="text-[#a0a0a0]">Franca, Brazil</span> and moved to{" "}
          <span className="text-[#a0a0a0]">Valencia, Spain</span> a few years
          ago. I wanted to be closer to the European tech scene and, honestly, I
          just really like it here. The weather, the food, the pace of life.
        </p>

        <p>
          I&apos;ve been writing code for about 7 years now. Most of that time
          was spent at{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://www.namecheap.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Namecheap
          </a>
          , where I was the sole engineer on{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://www.spaceship.com/domain-search/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Spaceship&apos;s domain search
          </a>
          . I built the whole thing from zero: the architecture, the real-time
          pricing over WebSocket, bulk search, multi-currency support across 30+
          currencies. Four and a half years of owning a product end to end. I
          left in April 2026.
        </p>

        <p>
          Before that, I was at startups in Brazil building mobile apps with
          React Native, including a food delivery app in LA and banking apps
          that needed to be airtight on security. That&apos;s where I learned to
          care about the details that matter.
        </p>

        <p>
          On the side, I&apos;ve built a few things I&apos;m proud of.{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://www.getshopwyse.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Shopwyse
          </a>{" "}
          is a retail ERP I built full-stack with TanStack Start and PostgreSQL.{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://www.trypolyglot.ai"
            rel="noopener noreferrer"
            target="_blank"
          >
            Polyglot
          </a>{" "}
          is an AI writing tool that interviews you before drafting anything.{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://otisfinance.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Otis Finance
          </a>{" "}
          is a stock market API. I also write CLI tools in Go and Rust when I
          want to learn something new by solving a real problem.
        </p>

        <p>
          In 2018, I made{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://github.com/leonardomso/33-js-concepts"
            rel="noopener noreferrer"
            target="_blank"
          >
            33 JavaScript Concepts
          </a>
          . It was supposed to be a personal study guide, but it took off. 66K+
          stars now, translated into 40+ languages.{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://github.blog/2018-12-13-new-open-source-projects/#top-projects-of-2018"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub named it a top project of 2018
          </a>
          . I still maintain it.
        </p>

        <p>
          I also spent a few years writing for{" "}
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
          . 100+ articles on JavaScript, TypeScript, React, Node.js, GraphQL.
          Over a million views total. I like explaining things clearly and
          helping other developers learn.
        </p>

        <p>
          My main stack is TypeScript, React, and Node.js, but I don&apos;t
          treat tools like an identity. I pick whatever gets the job done. Go
          and Rust for side projects, PostgreSQL for data, whatever framework
          makes sense for the problem.
        </p>

        <p>
          When I&apos;m not coding, I&apos;m probably walking around Valencia,
          reading, or tinkering with a side project that may or may not ship. I
          speak Portuguese, English, and Spanish.
        </p>

        <p>
          If you want to chat, I&apos;m always up for it.{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="mailto:leonardomso11@gmail.com"
          >
            Send me an email
          </a>{" "}
          or find me on{" "}
          <a
            className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            href="https://x.com/leonardomso"
            rel="noopener noreferrer"
            target="_blank"
          >
            X
          </a>
          .
        </p>
      </div>
    </div>
  );
}
