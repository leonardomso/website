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
        <h2 className="text-6xl font-semibold tracking-tighter">articles</h2>
        <p className="mt-4 whitespace-normal text-lg text-muted-foreground">
          I have been actively writing article since 2018. My first article was
          called{' '}
          <Link
            href="https://productoversee.com/entendendo-o-dom-document-object-model/"
            target="_blank"
            className="font-semibold hover:underline"
          >
            Understand the DOM (Document Object Model)
          </Link>
          .
        </p>

        <p className="mt-4 whitespace-normal text-lg text-muted-foreground">
          I have <strong>over 90 articles published</strong> across a variety of
          technologies such as JavaScript, React, Node.js, TypeScript, GraphQL,
          MongoDB, PostgreSQL, Tailwind, etc. I have over 1 million views on my
          articles.
        </p>

        <p className="mt-4 whitespace-normal text-lg text-muted-foreground">
          You can check all my articles in the following links:{' '}
        </p>

        <ul className="mt-4 flex flex-row gap-4 whitespace-normal text-lg text-muted-foreground">
          <li>
            <Link
              href="https://www.telerik.com/blogs/author/leonardo-maldonado"
              target="_blank"
              className="flex flex-row items-center gap-1 text-lg font-semibold tracking-tighter hover:underline"
            >
              Telerik
              <ExternalLink className="h-4 w-4" />
            </Link>
          </li>
          /
          <li>
            <Link
              href="https://medium.com/@leonardomso"
              target="_blank"
              className="flex flex-row items-center gap-1 text-lg font-semibold tracking-tighter hover:underline"
            >
              Medium
              <ExternalLink className="h-4 w-4" />
            </Link>
          </li>
          /
          <li>
            <Link
              href="https://blog.logrocket.com/author/leonardomaldonado/"
              target="_blank"
              className="flex flex-row items-center gap-1 text-lg font-semibold tracking-tighter hover:underline"
            >
              LogRocket
              <ExternalLink className="h-4 w-4" />
            </Link>
          </li>
          /
          <li>
            <Link
              href="https://dev.to/leonardomso"
              target="_blank"
              className="flex flex-row items-center gap-1 text-lg font-semibold tracking-tighter hover:underline"
            >
              dev.to
              <ExternalLink className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Page
