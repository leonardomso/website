import Link from 'next/link'

const Header = () => {
  return (
    <div className="space-x-2 pt-8 pb-12">
      <Link
        href="/about"
        className="rounded-sm pr-4 text-base font-medium tracking-1 text-gray-900 dark:text-white hover:underline" 
      >
        About
      </Link>

      <Link
        href="/blog"
        className="rounded-sm pr-4 text-base font-medium tracking-1 text-gray-900 dark:text-white hover:underline" 
      >
        Blog
      </Link>

      <Link
        href="/projects"
        className="rounded-sm pr-4 text-base font-medium tracking-1 text-gray-900 dark:text-white hover:underline" 
      >
        Projects
      </Link>
    </div>
  )
}

export default Header
