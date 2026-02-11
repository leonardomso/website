import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { projects } from "~/config/projects";

export const metadata: Metadata = {
  title: "Projects — Leonardo Maldonado",
  description:
    "Open source projects, products, and side projects by Leonardo Maldonado.",
};

export default function ProjectsPage() {
  return (
    <div>
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] uppercase text-[#666]">
        Projects
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-[#ededed]">
        Things I&apos;ve built
      </h1>
      <p className="mt-6 max-w-[440px] text-[15px] leading-[1.75] text-[#888]">
        Open source projects, products, and experiments.
      </p>

      <div className="mt-16 flex flex-col gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glow group rounded-lg border border-[#161616] bg-[#0a0a0a] p-5 transition-all duration-300 hover:border-[#222] hover:bg-[#0d0d0d]"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#666]">
                    {project.tag}
                  </span>
                </div>
                <p className="text-[15px] font-medium text-[#ededed] transition-colors group-hover:text-white">
                  {project.title}
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-[#888]">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-wide text-[#555]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#555] transition-all duration-300 group-hover:text-[#888] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
