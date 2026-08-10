'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { experience } from '@/data/experience'

const ExperienceCard = ({
  exp,
  index,
}: {
  exp: (typeof experience)[0]
  index: number
}) => {
  const typeColors = {
    tech: 'bg-sage-100 text-sage-800',
    marketing: 'bg-cream-100 text-cream-800',
    teaching: 'bg-sage-50 text-sage-700',
    business: 'bg-cream-50 text-sage-800',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="p-8 md:p-10 bg-white border border-sage-200 rounded-lg hover:border-sage-400 transition-colors"
    >
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-sage-900 mb-2">
              {exp.role}
            </h3>
            <p className="text-base font-medium text-sage-700">
              {exp.company}
            </p>
          </div>
          <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${typeColors[exp.type]}`}>
            {exp.type.replace('_', ' ')}
          </span>
        </div>

        <p className="text-sm text-sage-600">
          {exp.startDate} — {exp.endDate === 'Present' ? <span className="font-medium">Present</span> : exp.endDate}
        </p>
      </div>

      <p className="text-base text-sage-700 mb-4 leading-relaxed">
        {exp.description}
      </p>

      <div className="mb-6 pb-6 border-t border-sage-200">
        <p className="text-sm font-medium text-sage-600 mb-2">IMPACT</p>
        <p className="text-base text-sage-700">
          {exp.impact}
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest text-sage-600 font-medium mb-3">
          Skills
        </p>
        <div className="flex flex-wrap gap-2">
          {exp.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-sage-50 text-sage-800 text-xs font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs md:text-sm uppercase tracking-widest text-sage-600 font-medium mb-4">
            Background
          </p>
          <div className="flex items-baseline justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-sage-900">
              Experience That Shapes
              <br />
              How I Think.
            </h2>
            <a
              href="/resume.pdf"
              className="text-sm font-medium text-sage-700 hover:text-sage-900 whitespace-nowrap hidden md:block"
            >
              VIEW RESUME ↗
            </a>
          </div>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
