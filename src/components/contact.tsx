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
      <p className="mb-8 max-w-[400px] text-[15px] leading-[1.75] text-[#888]">
        Have something in mind? Reach out.
      </p>
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-baseline justify-between border-b border-[#111] pb-4 transition-colors hover:border-[#222]"
          >
            <span className="font-mono text-[11px] tracking-wider uppercase text-[#666] transition-colors group-hover:text-[#a0a0a0]">
              {link.label}
            </span>
            <span className="text-[14px] text-[#a0a0a0] transition-colors group-hover:text-[#ededed]">
              {link.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
