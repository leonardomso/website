import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "~/config/projects";

const featured = projects.filter((p) => p.featured);

export function Ventures() {
  return (
    <div className="flex flex-col gap-4">
      {featured.map((venture) => (
        <a
          key={venture.title}
          href={venture.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-glow group rounded-lg border border-[#161616] bg-[#0a0a0a] p-5 transition-all duration-300 hover:border-[#222] hover:bg-[#0d0d0d]"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#666]">
                  {venture.tag}
                </span>
              </div>
              <p className="text-[15px] font-medium text-[#ededed] transition-colors group-hover:text-white">
                {venture.title}
              </p>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-[#888]">
                {venture.description}
              </p>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#555] transition-all duration-300 group-hover:text-[#888] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </a>
      ))}
      <Link
        href="/projects"
        className="group mt-2 flex items-center gap-2 font-mono text-[12px] tracking-wide text-[#666] transition-colors hover:text-[#ededed]"
      >
        View all projects
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
