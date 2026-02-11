import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "~/config/projects";

const featured = projects.filter((p) => p.featured);

export function Ventures() {
  return (
    <div className="flex flex-col gap-4">
      {featured.map((venture) => (
        <a
          className="card-glow group rounded-lg border border-[#161616] bg-[#0a0a0a] p-5 transition-all duration-300 hover:border-[#222] hover:bg-[#0d0d0d]"
          href={venture.url}
          key={venture.title}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-[#666] text-[10px] uppercase tracking-[0.15em]">
                  {venture.tag}
                </span>
              </div>
              <p className="font-medium text-[#ededed] text-[15px] transition-colors group-hover:text-white">
                {venture.title}
              </p>
              <p className="mt-1.5 text-[#888] text-[13px] leading-[1.6]">
                {venture.description}
              </p>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#555] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#888]" />
          </div>
        </a>
      ))}
      <Link
        className="group mt-2 flex items-center gap-2 font-mono text-[#666] text-[12px] tracking-wide transition-colors hover:text-[#ededed]"
        href="/projects"
      >
        View all projects
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
