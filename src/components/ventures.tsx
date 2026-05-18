import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "~/config/projects";

const featured = projects.filter((p) => p.featured);

export function Ventures() {
  return (
    <div className="flex flex-col gap-4">
      {featured.map((venture) => (
        <a
          className="group rounded-lg border border-surface-border bg-surface-low p-5 transition-colors duration-300 hover:border-surface-border-strong"
          href={venture.url}
          key={venture.title}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-[10px] text-fg-tertiary uppercase tracking-[0.15em]">
                  {venture.tag}
                </span>
              </div>
              <p className="font-medium text-[15px] text-fg transition-colors group-hover:text-fg">
                {venture.title}
              </p>
              <p className="mt-1.5 text-[13px] text-fg-secondary leading-[1.6]">
                {venture.description}
              </p>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-fg-tertiary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
          </div>
        </a>
      ))}
      <a
        className="group mt-2 flex items-center gap-2 font-mono text-[12px] text-fg-tertiary tracking-wide transition-colors hover:text-fg"
        href="/projects"
      >
        View all projects
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}
