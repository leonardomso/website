import { Inter } from 'next/font/google'

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
      <body className="selection:bg-accent selection:text-accent-foreground">
        <div className="mx-auto max-w-2xl px-4">{children}</div>
      </body>
    </html>
  )
}

export default Layout
