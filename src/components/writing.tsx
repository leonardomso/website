import { ArrowUpRight } from "lucide-react";

const publications = [
  {
    name: "Progress / Telerik",
    url: "https://www.telerik.com/blogs/author/leonardo-maldonado",
  },
  {
    name: "LogRocket",
    url: "https://blog.logrocket.com/author/leonardomaldonado/",
  },
  { name: "Medium", url: "https://medium.com/@leonardomso" },
  { name: "dev.to", url: "https://dev.to/leonardomso" },
];

export function Writing() {
  return (
    <div>
      <p className="mb-8 max-w-[440px] text-[#888] text-[15px] leading-[1.75]">
        90+ articles published across JavaScript, React, TypeScript, Node.js,
        GraphQL, and modern web development. Over 1 million views total.
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {publications.map((pub) => (
          <a
            className="card-glow group flex flex-col justify-between rounded-lg border border-[#161616] bg-[#0a0a0a] px-4 py-4 transition-all duration-300 hover:border-[#222] hover:bg-[#0d0d0d]"
            href={pub.url}
            key={pub.name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="font-medium text-[#a0a0a0] text-[13px] transition-colors group-hover:text-[#ededed]">
              {pub.name}
            </span>
            <ArrowUpRight className="mt-4 h-3.5 w-3.5 text-[#555] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#888]" />
          </a>
        ))}
      </div>
    </div>
  );
}
