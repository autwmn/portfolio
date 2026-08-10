'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        !isEven ? 'lg:grid-cols-2' : ''
      }`}
    >
      {/* Image */}
      <motion.div
        className={`relative h-80 md:h-96 lg:h-96 rounded-lg overflow-hidden bg-sage-200 ${
          !isEven ? 'lg:order-last' : ''
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sage-200 via-sage-100 to-cream-100 flex items-center justify-center">
          <p className="text-sage-400 text-center text-sm">{project.title}</p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-sage-600 font-medium mb-3">
            {project.category}
          </p>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-3">
            {project.title}
          </h3>
          <p className="text-base text-sage-700">
            {project.shortDescription}
          </p>
        </div>

        {/* Technologies */}
        <div>
          <p className="text-xs uppercase tracking-widest text-sage-600 font-medium mb-3">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-sage-50 text-sage-800 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 px-6 py-2 bg-sage-800 text-cream-50 font-medium hover:bg-sage-900 transition-colors text-sm"
          >
            VIEW CASE STUDY →
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 border border-sage-800 text-sage-800 font-medium hover:bg-sage-50 transition-colors text-sm"
            >
              GITHUB ↗
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 border border-sage-800 text-sage-800 font-medium hover:bg-sage-50 transition-colors text-sm"
            >
              LIVE ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="section-padding bg-cream-50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs md:text-sm uppercase tracking-widest text-sage-600 font-medium mb-4">
            Portfolio
          </p>
          <div className="flex items-baseline justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-sage-900">
              Things I've Built.
            </h2>
            <Link
              href="#"
              className="text-sm font-medium text-sage-700 hover:text-sage-900 whitespace-nowrap hidden md:block"
            >
              VIEW ALL →
            </Link>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20 md:space-y-32">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
