"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Home,
  User,
  BookOpen,
  Folder,
  FileText,
  Terminal,
  Clock,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

interface BlogPost {
  title: string;
  slug: string;
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
  { label: "X (Twitter)", href: "https://x.com/leonardomso", icon: ArrowUpRight },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leonardomso/", icon: Linkedin },
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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-start justify-center pt-[20vh]"
      onClick={() => setOpen(false)}
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden
      />
      <div
        className="relative z-10 w-full max-w-[520px] mx-4 overflow-hidden rounded-xl border border-[#161616] bg-[#0a0a0a] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Command
          className="flex flex-col"
          filter={(value, search) => {
            if (value.toLowerCase().includes(search.toLowerCase())) return 1;
            return 0;
          }}
        >
          <Command.Input
            placeholder="Type a command or search..."
            className="w-full border-b border-[#161616] bg-transparent px-4 py-3 text-[15px] text-[#ededed] outline-none placeholder:text-[#444]"
            autoFocus
          />
          <Command.List className="max-h-[320px] overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-[13px] text-[#666]">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Navigation"
              className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.15em] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-[#666]"
            >
              {NAV_ITEMS.map((item) => (
                <Command.Item
                  key={item.href}
                  value={item.label}
                  onSelect={() => navigate(item.href)}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] text-[#888] transition-colors data-[selected=true]:bg-[#111] data-[selected=true]:text-[#ededed]"
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>

            {posts.length > 0 && (
              <Command.Group
                heading="Blog Posts"
                className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.15em] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-[#666]"
              >
                {posts.map((post) => (
                  <Command.Item
                    key={post.slug}
                    value={post.title}
                    onSelect={() => navigate(`/blog/${post.slug}`)}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] text-[#888] transition-colors data-[selected=true]:bg-[#111] data-[selected=true]:text-[#ededed]"
                  >
                    <BookOpen className="h-4 w-4 shrink-0" />
                    {post.title}
                  </Command.Item>
                ))}
              </Command.Group>
            )}

            <Command.Group
              heading="Social"
              className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.15em] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-[#666]"
            >
              {SOCIAL_ITEMS.map((item) => (
                <Command.Item
                  key={item.href}
                  value={item.label}
                  onSelect={() => navigate(item.href)}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] text-[#888] transition-colors data-[selected=true]:bg-[#111] data-[selected=true]:text-[#ededed]"
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.label}
                  <ArrowUpRight className="ml-auto h-3 w-3 text-[#333]" />
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          <div className="flex items-center justify-between border-t border-[#161616] px-4 py-2">
            <span className="font-mono text-[10px] text-[#444]">
              Navigate with ↑↓ · Select with ↵ · Close with Esc
            </span>
            <kbd className="rounded border border-[#222] px-1.5 py-0.5 font-mono text-[10px] text-[#444]">
              ⌘K
            </kbd>
          </div>
        </Command>
      </div>
    </div>
  );
}
