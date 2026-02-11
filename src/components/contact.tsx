const links = [
  {
    label: "Email",
    value: "leonardomso11@gmail.com",
    href: "mailto:leonardomso11@gmail.com",
  },
  {
    label: "X",
    value: "@leonardomso",
    href: "https://x.com/leonardomso",
  },
  {
    label: "GitHub",
    value: "@leonardomso",
    href: "https://github.com/leonardomso",
  },
  {
    label: "LinkedIn",
    value: "/in/leonardomso",
    href: "https://www.linkedin.com/in/leonardomso/",
  },
];

export function Contact() {
  return (
    <div>
      <p className="mb-8 max-w-[400px] text-[#888] text-[15px] leading-[1.75]">
        Have something in mind? Reach out.
      </p>
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <a
            className="group flex items-baseline justify-between border-[#111] border-b pb-4 transition-colors hover:border-[#222]"
            href={link.href}
            key={link.label}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="font-mono text-[#666] text-[11px] uppercase tracking-wider transition-colors group-hover:text-[#a0a0a0]">
              {link.label}
            </span>
            <span className="text-[#a0a0a0] text-[14px] transition-colors group-hover:text-[#ededed]">
              {link.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
