import { Inter } from 'next/font/google'

import Header from '~/app/components/Header/Header'
import Analytics from '~/app/components/Analytics/Analytics'

import '~/styles/global.css'
import { cn } from '~/lib/utils'

const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html
      lang="en"
      className={cn('font-sans text-slate-900 antialiased', fontSans.variable)}
    >
      <head />
      <body className="h-full bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}

export default Layout
