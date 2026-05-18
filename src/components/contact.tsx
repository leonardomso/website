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
      <p className="mb-8 max-w-[400px] text-[15px] text-fg-secondary leading-[1.75]">
        Have something in mind? Reach out.
      </p>
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <a
            className="group flex items-baseline justify-between border-surface-border border-b pb-4 transition-colors hover:border-surface-border-strong"
            href={link.href}
            key={link.label}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="font-mono text-[11px] text-fg-tertiary uppercase tracking-wider transition-colors group-hover:text-fg-muted">
              {link.label}
            </span>
            <span className="text-[14px] text-fg-muted transition-colors group-hover:text-fg">
              {link.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
