import { Inter } from 'next/font/google'
import Link from 'next/link'

import { Button } from '~/components/ui/button'

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
      suppressHydrationWarning
      lang="en"
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
      )}
    >
      <head />
      <body className="mx-auto flex max-w-2xl flex-col gap-20 p-4 px-4">
        <header className="max-w-1xl flex flex-col justify-between gap-4 sm:flex-row">
          <div>
            <Link href="/">
              <h1 className="text-2xl font-semibold tracking-tighter">
                Leonardo Maldonado
              </h1>
              <p className="whitespace-normal text-sm text-muted-foreground">
                software engineer
              </p>
            </Link>
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
        {children}
      </body>
    </html>
  )
}

export default Layout
