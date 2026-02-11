import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import Script from "next/script";
import { JsonLd, personSchema, websiteSchema } from "~/components/json-ld";
import { CommandPalette } from "~/components/command-palette";
import { getAllPosts } from "~/lib/blog";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://leonardomso.com"),
  title: "Leonardo Maldonado",
  description:
    "Software engineer based in Valencia, Spain. Building web experiences at Namecheap and passionate about programming, web development, and building products.",
  openGraph: {
    title: "Leonardo Maldonado",
    description:
      "Software engineer based in Valencia, Spain. Building web experiences at Namecheap and passionate about programming, web development, and building products.",
    url: "https://leonardomso.com",
    siteName: "Leonardo Maldonado",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Maldonado",
    description:
      "Software engineer based in Valencia, Spain. Building web experiences at Namecheap.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://leonardomso.com/feed.xml",
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getAllPosts();
  const cmdkPosts = posts.map((p) => ({ title: p.title, slug: p.slug }));

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
        <CommandPalette posts={cmdkPosts} />
        <div className="relative mx-auto w-full max-w-[680px] px-6 pt-16 pb-24 md:px-0">
          <header className="mb-20 flex items-center justify-between">
            <Link
              href="/"
              className="link-hover font-mono text-[13px] tracking-wide uppercase text-[#a0a0a0] transition-colors hover:text-[#ededed]"
            >
              Leonardo Maldonado
            </Link>
            <nav className="flex gap-6">
              <Link
                href="/about"
                className="link-hover text-[13px] tracking-wide uppercase text-[#666] transition-colors hover:text-[#ededed]"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="link-hover text-[13px] tracking-wide uppercase text-[#666] transition-colors hover:text-[#ededed]"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="link-hover text-[13px] tracking-wide uppercase text-[#666] transition-colors hover:text-[#ededed]"
              >
                Blog
              </Link>
              <Link
                href="/resume"
                className="link-hover text-[13px] tracking-wide uppercase text-[#666] transition-colors hover:text-[#ededed]"
              >
                Resume
              </Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="mt-32 flex items-center justify-between border-t border-[#161616] pt-8">
            <p className="font-mono text-[11px] tracking-wider text-[#666]">
              © 2026
            </p>
            <div className="flex gap-6">
              {[
                { label: "GitHub", href: "https://github.com/leonardomso" },
                { label: "X", href: "https://x.com/leonardomso" },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/leonardomso/",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover text-[12px] tracking-wide text-[#666] transition-colors hover:text-[#ededed]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </footer>
        </div>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
