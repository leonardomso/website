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
      <ul className="flex flex-col gap-1">
        {publications.map((pub) => (
          <li key={pub.name}>
            <a
              className="group -mx-3 flex items-baseline justify-between gap-4 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#0a0a0a]"
              href={pub.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-[#ededed] text-[15px]">{pub.name}</span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 text-[#7a7a7a] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
