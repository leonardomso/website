"use client";

import { Command } from "cmdk";
import {
  ArrowUpRight,
  BookOpen,
  Clock,
  FileText,
  Folder,
  Home,
  Mail,
  Terminal,
  User,
} from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={24}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={24}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect height="12" width="4" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface BlogPost {
  slug: string;
  title: string;
}

interface CommandPaletteProps {
  posts: BlogPost[];
}

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Projects", href: "/projects", icon: Folder },
  { label: "Resume", href: "/resume", icon: FileText },
  { label: "Uses", href: "/uses", icon: Terminal },
  { label: "Now", href: "/now", icon: Clock },
];

const SOCIAL_ITEMS = [
  { label: "GitHub", href: "https://github.com/leonardomso", icon: Github },
  {
    label: "X (Twitter)",
    href: "https://x.com/leonardomso",
    icon: ArrowUpRight,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leonardomso/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:leonardomso11@gmail.com", icon: Mail },
];

export function CommandPalette({ posts }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      if (href.startsWith("http") || href.startsWith("mailto:")) {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        router.push(href);
      }
    },
    [router]
  );

  if (!open) {
    return null;
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: modal backdrop dismiss
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: modal backdrop dismiss
    // biome-ignore lint/a11y/useKeyWithClickEvents: Escape key handled via useEffect
    <div
      className="fixed inset-0 z-[10001] flex items-start justify-center pt-[20vh]"
      onClick={() => setOpen(false)}
    >
      <div aria-hidden className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      {/* biome-ignore lint/a11y/noStaticElementInteractions: modal content wrapper */}
      {/* biome-ignore lint/a11y/noNoninteractiveElementInteractions: modal content wrapper */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: stopPropagation only */}
      <div
        className="relative z-10 mx-4 w-full max-w-[520px] overflow-hidden rounded-xl border border-[#161616] bg-[#0a0a0a] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Command
          className="flex flex-col"
          filter={(value, search) => {
            if (value.toLowerCase().includes(search.toLowerCase())) {
              return 1;
            }
            return 0;
          }}
        >
          <Command.Input
            autoFocus
            className="w-full border-[#161616] border-b bg-transparent px-4 py-3 text-[#ededed] text-[15px] outline-none placeholder:text-[#444]"
            placeholder="Type a command or search..."
          />
          <Command.List className="max-h-[320px] overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-[#666] text-[13px]">
              No results found.
            </Command.Empty>

            <Command.Group
              className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[#666] [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.15em]"
              heading="Navigation"
            >
              {NAV_ITEMS.map((item) => (
                <Command.Item
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-[#888] text-[14px] transition-colors data-[selected=true]:bg-[#111] data-[selected=true]:text-[#ededed]"
                  key={item.href}
                  onSelect={() => navigate(item.href)}
                  value={item.label}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>

            {posts.length > 0 && (
              <Command.Group
                className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[#666] [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.15em]"
                heading="Blog Posts"
              >
                {posts.map((post) => (
                  <Command.Item
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-[#888] text-[14px] transition-colors data-[selected=true]:bg-[#111] data-[selected=true]:text-[#ededed]"
                    key={post.slug}
                    onSelect={() => navigate(`/blog/${post.slug}`)}
                    value={post.title}
                  >
                    <BookOpen className="h-4 w-4 shrink-0" />
                    {post.title}
                  </Command.Item>
                ))}
              </Command.Group>
            )}

            <Command.Group
              className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[#666] [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.15em]"
              heading="Social"
            >
              {SOCIAL_ITEMS.map((item) => (
                <Command.Item
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-[#888] text-[14px] transition-colors data-[selected=true]:bg-[#111] data-[selected=true]:text-[#ededed]"
                  key={item.href}
                  onSelect={() => navigate(item.href)}
                  value={item.label}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.label}
                  <ArrowUpRight className="ml-auto h-3 w-3 text-[#333]" />
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          <div className="flex items-center justify-between border-[#161616] border-t px-4 py-2">
            <span className="font-mono text-[#444] text-[10px]">
              Navigate with ↑↓ · Select with ↵ · Close with Esc
            </span>
            <kbd className="rounded border border-[#222] px-1.5 py-0.5 font-mono text-[#444] text-[10px]">
              ⌘K
            </kbd>
          </div>
        </Command>
      </div>
    </div>
  );
}
