import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

import { projects } from '~/config/projects'

const Projects = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-1xl text-sm font-medium">projects</h2>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col gap-4">
            <Image
              src={project.image}
              className="h-70 w-full rounded-md"
              alt="Project image"
            />
            <div className="flex flex-col gap-1">
              <Link
                href={project.url}
                target="_blank"
                className="flex flex-row items-center gap-2 text-2xl font-semibold tracking-tighter hover:underline"
              >
                {project.title}
                <ExternalLink className="h-4 w-4" />
              </Link>
              <p className="whitespace-normal text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>
            <p className="text-md whitespace-normal text-muted-foreground">
              {project.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
