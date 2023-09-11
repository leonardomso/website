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
        <h2 className="text-6xl font-semibold tracking-tighter">my projects</h2>
        <p className="mt-4 whitespace-normal text-lg text-muted-foreground">
          I like to build projects in my free time. Here are some of them. I
          hope you like it.
        </p>
      </div>

      <Projects />
    </main>
  )
}

export default Page
