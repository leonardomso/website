import type { Metadata } from 'next'

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
    <div className="max-w-2xl">
      <h1 className="tracking-3 text-4xl font-semibold text-gray-900 dark:text-white">
        Software engineer, philosophy student, and entrepreneur.
      </h1>
      <p className="tracking-1 mt-6 text-base text-gray-500 dark:text-gray-400">
        I’m Leonardo Maldonado, a software engineer working at{' '}
        <a
          className="tracking-1 text-base font-medium text-gray-900 hover:underline dark:text-white"
          href="https://www.namecheap.com/"
          target="_blank"
        >
          Namecheap
        </a>
        I am passionate about building software that helps people and businesses
        succeed. I like to write and read about software, philosophy,
        entrepreneurship, and more.
      </p>
    </div>
  )
}

export default Page
