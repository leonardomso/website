import type { Metadata } from 'next'

import { siteConfig } from '~/config/site'

import Projects from '~/app/components/Projects/Projects'

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
        <h2 className="text-6xl font-semibold tracking-tighter">
          I build apps.
        </h2>
        <p className="mt-4 whitespace-normal text-lg text-muted-foreground">
          I{`'`}m Leo, a passionate creator living in Franca, Brazil. I have
          years of experience with JavaScript, React, Node.js, TypeScript,
          GraphQL, MongoDB, PostgreSQL, Tailwind, etc. I write monthly articles
          related to various technologies.{' '}
        </p>
      </div>

      <Projects />
    </main>
  )
}

export default Page
