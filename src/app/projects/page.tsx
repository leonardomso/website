import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { projects } from "~/config/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open source projects, products, and side projects by Leonardo Maldonado.",
};

export default function ProjectsPage() {
  return (
    <div>
      <p className="mb-4 font-mono text-[#666] text-[12px] uppercase tracking-[0.25em]">
        Projects
      </p>
      <h1 className="font-semibold text-[#ededed] text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-[-0.03em]">
        Things I&apos;ve built
      </h1>
      <p className="mt-6 max-w-[440px] text-[#888] text-[15px] leading-[1.75]">
        Open source projects, products, and experiments.
      </p>

      <div className="mt-16 flex flex-col gap-4">
        {projects.map((project) => (
          <a
            className="card-glow group rounded-lg border border-[#161616] bg-[#0a0a0a] p-5 transition-all duration-300 hover:border-[#222] hover:bg-[#0d0d0d]"
            href={project.url}
            key={project.title}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-mono text-[#666] text-[10px] uppercase tracking-[0.15em]">
                    {project.tag}
                  </span>
                </div>
                <p className="font-medium text-[#ededed] text-[15px] transition-colors group-hover:text-white">
                  {project.title}
                </p>
                <p className="mt-1.5 text-[#888] text-[13px] leading-[1.6]">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      className="font-mono text-[#555] text-[10px] tracking-wide"
                      key={t}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#555] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#888]" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
