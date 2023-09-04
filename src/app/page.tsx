import type { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '~/components/ui/button'

import { siteConfig } from '~/config/site'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: [],
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.title,
      images: [`${siteConfig.ogImage}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: [`${siteConfig.ogImage}`],
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
  }
}

const Page = () => {
  return (
    <div className="max-w-1xl flex flex-col gap-20 p-4">
      <header className="flex flex-col justify-between gap-4 sm:flex-row">
        <div>
          <h1 className="text-2xl font-semibold tracking-tighter">
            Leonardo Maldonado
          </h1>
          <p className="whitespace-normal text-sm text-muted-foreground">
            software engineer
          </p>
        </div>

        <div>
          <Button variant="ghost" asChild>
            <Link href="/about">about</Link>
          </Button>

          <Button variant="ghost" asChild>
            <Link href="/projects">projects</Link>
          </Button>
        </div>
      </header>

      <main>
        <h2 className="text-6xl font-semibold tracking-tighter">
          I design apps.
        </h2>
        <p className="mt-4 whitespace-normal text-lg text-muted-foreground">
          I{`'`}m Leo, a passionate creator living in Franca, Brazil. I have
          years of experience with JavaScript, React, Node.js, TypeScript,
          GraphQL, MongoDB, PostgreSQL, Tailwind, etc. I write monthly articles
          related to various technologies.{' '}
        </p>
      </main>

      <div>
        <h2 className="text-1xl font-semibold tracking-tighter">projects</h2>
      </div>
    </div>
  )
}

export default Page
