import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CommandPalette } from "~/components/command-palette";
import { JsonLd, personSchema, websiteSchema } from "~/components/json-ld";
import { getAllPosts } from "~/lib/blog";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://leonardomso.com"),
  title: {
    default: "Leonardo Maldonado",
    template: "%s — Leonardo Maldonado",
  },
  description:
    "Software engineer based in Valencia, Spain. Sole engineer on Spaceship's domain search at Namecheap — helped sell 3M+ domains. Creator of 33 JavaScript Concepts (66k+ stars).",
  authors: [{ name: "Leonardo Maldonado", url: "https://leonardomso.com" }],
  creator: "Leonardo Maldonado",
  openGraph: {
    title: "Leonardo Maldonado",
    description:
      "Software engineer based in Valencia, Spain. Sole engineer on Spaceship's domain search at Namecheap — helped sell 3M+ domains. Creator of 33 JavaScript Concepts (66k+ stars).",
    url: "https://leonardomso.com",
    siteName: "Leonardo Maldonado",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Maldonado",
    creator: "@leonardomso",
    description:
      "Software engineer based in Valencia, Spain. Sole engineer on Spaceship's domain search at Namecheap — helped sell 3M+ domains.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://leonardomso.com",
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
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body className="antialiased">
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
        <CommandPalette posts={cmdkPosts} />
        <div className="relative mx-auto w-full max-w-[680px] px-6 pt-16 pb-24 md:px-0">
          <header className="mb-20 flex items-center justify-between">
            <Link
              className="link-hover font-mono text-[#a0a0a0] text-[13px] uppercase tracking-wide transition-colors hover:text-[#ededed]"
              href="/"
            >
              Leonardo Maldonado
            </Link>
            <nav className="flex gap-6">
              <Link
                className="link-hover text-[#666] text-[13px] uppercase tracking-wide transition-colors hover:text-[#ededed]"
                href="/about"
              >
                About
              </Link>
              <Link
                className="link-hover text-[#666] text-[13px] uppercase tracking-wide transition-colors hover:text-[#ededed]"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="link-hover text-[#666] text-[13px] uppercase tracking-wide transition-colors hover:text-[#ededed]"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="link-hover text-[#666] text-[13px] uppercase tracking-wide transition-colors hover:text-[#ededed]"
                href="/resume"
              >
                Resume
              </Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="mt-32 flex items-center justify-between border-[#161616] border-t pt-8">
            <p className="font-mono text-[#666] text-[11px] tracking-wider">
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
                  className="link-hover text-[#666] text-[12px] tracking-wide transition-colors hover:text-[#ededed]"
                  href={link.href}
                  key={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
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
