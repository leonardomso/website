import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

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
    <main className="flex flex-col gap-10">
      <div>
        <h2 className="text-6xl font-semibold tracking-tighter">about me</h2>
        <p className="mt-4 whitespace-normal text-lg text-muted-foreground">
          I am a software engineer who works with powerful technologies. I have
          years of experience with JavaScript, React, Node.js, TypeScript,
          GraphQL, MongoDB, PostgreSQL, Tailwind, etc.
        </p>

        <p className="mt-4 whitespace-normal text-lg text-muted-foreground">
          <Link
            href="https://github.blog/2018-12-13-new-open-source-projects/#top-projects-of-2018"
            target="_blank"
            className="font-semibold hover:underline"
          >
            I created an open-source project considered by GitHub one of the top
            projects in 2018.
          </Link>{' '}
          The project was{' '}
          <Link
            href="https://github.com/leonardomso/33-js-concepts"
            target="_blank"
            className="font-semibold hover:underline"
          >
            33 JavaScript Concepts
          </Link>{' '}
          and it lists a ton of content for JavaScript developers who want to
          master their skills.
        </p>

        <p className="mt-4 whitespace-normal text-lg text-muted-foreground">
          I write monthly articles for{' '}
          <Link
            href="https://www.telerik.com/blogs/author/leonardo-maldonado"
            target="_blank"
            className="font-semibold hover:underline"
          >
            Telerik
          </Link>{' '}
          related to various technologies such as JavaScript, React, GraphQL,
          TypeScript, databases, etc.
        </p>
      </div>
    </main>
  )
}

export default Page
