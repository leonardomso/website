import Link from 'next/link'
import { Twitter, Linkedin, Github } from 'lucide-react'

import { Button } from '~/components/ui/button'

const Footer = () => {
  return (
    <footer className="flex items-center justify-center">
      <div className="flex w-auto gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://github.com/leonardomso" target="_blank">
            <Github className="h-5 w-5" />
          </Link>
        </Button>

        <Button variant="ghost" size="icon" asChild>
          <Link href="https://twitter.com/leonardomso" target="_blank">
            <Twitter className="h-5 w-5" />
          </Link>
        </Button>

        <Button variant="ghost" size="icon" asChild>
          <Link href="https://www.linkedin.com/in/leonardomso/" target="_blank">
            <Linkedin className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
