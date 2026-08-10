'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { primaPilatesCase } from '@/data/prima-pilates'

const BeyondTechCard = ({
  title,
  subtitle,
  description,
  image,
  content,
  index,
  isPrimaPilates = false,
}: {
  title: string
  subtitle?: string
  description: string
  image: string
  content: React.ReactNode
  index: number
  isPrimaPilates?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-white rounded-lg overflow-hidden border border-sage-200"
    >
      {/* Image */}
      <div className="relative h-96 bg-sage-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-200 via-sage-100 to-cream-100 flex items-center justify-center">
          <p className="text-sage-400 text-center">{image}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-10">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-sage-600 font-medium mb-2">
            {subtitle}
          </p>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-sage-900 mb-4">
            {title}
          </h3>
          <p className="text-base text-sage-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Detailed Content */}
        <div className="border-t border-sage-200 pt-6">
          {content}
        </div>

        {isPrimaPilates && (
          <Link
            href="#prima-case-study"
            className="inline-block mt-6 text-sm font-medium text-sage-800 border-b border-sage-800 hover:opacity-70 transition-opacity"
          >
            VIEW FULL CASE STUDY →
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default function BeyondTech() {
  return (
    <section id="beyond-tech" className="section-padding bg-cream-50">
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
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-sage-900 mb-6">
            Beyond the Screen.
          </h2>
          <p className="text-lg text-sage-700 max-w-2xl leading-relaxed">
            My work doesn't stop behind a computer. My background in professional dance, teaching, movement, and entrepreneurship has shaped how I communicate, create, lead, and solve problems.
          </p>
        </motion.div>

        {/* Three Main Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-20 md:mb-32">
          {/* Dance */}
          <BeyondTechCard
            index={0}
            title="Dance"
            subtitle="Professional Dancer + Teacher"
            description="Years of high-level training, teaching, and performance"
            image="💃 Ballet Imagery"
            content={
              <div className="space-y-4">
                <p className="text-sm text-sage-700">
                  Professional dance training developed:
                </p>
                <ul className="space-y-2">
                  {[
                    'Discipline and precision',
                    'Attention to technical detail',
                    'Creativity and artistic expression',
                    'Adaptability and quick learning',
                    'Communication through movement',
                    'Performance under pressure',
                  ].map((item) => (
                    <li key={item} className="text-sm text-sage-700 flex items-start gap-2">
                      <span className="text-sage-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />

          {/* Pilates */}
          <BeyondTechCard
            index={1}
            title="Pilates"
            subtitle="Movement + Instruction"
            description="Comprehensive Pilates instructor serving the movement community"
            image="🧘 Pilates"
            content={
              <div className="space-y-4">
                <p className="text-sm text-sage-700">
                  Teaching Pilates developed:
                </p>
                <ul className="space-y-2">
                  {[
                    'Communication of complex concepts',
                    'Anatomical and biomechanical thinking',
                    'Client-centered problem solving',
                    'Leadership and instruction',
                    'Adapting information for different people',
                    'Building community and trust',
                  ].map((item) => (
                    <li key={item} className="text-sm text-sage-700 flex items-start gap-2">
                      <span className="text-sage-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />

          {/* Prima Pilates */}
          <BeyondTechCard
            index={2}
            title="Prima Pilates"
            subtitle="Founder + Entrepreneur"
            description={primaPilatesCase.idea}
            image="🏢 Prima Pilates"
            content={
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-sage-600 font-medium mb-1">
                      Clients
                    </p>
                    <p className="text-2xl font-bold text-sage-900">{primaPilatesCase.data.clientsServed}+</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-sage-600 font-medium mb-1">
                      Following
                    </p>
                    <p className="text-2xl font-bold text-sage-900">{primaPilatesCase.data.socialFollowers.toLocaleString()}+</p>
                  </div>
                </div>
                <p className="text-sm text-sage-700 pt-4 border-t border-sage-200">
                  A real business lab for applying marketing, technology, and strategy. Profitability achieved year 1.
                </p>
              </div>
            }
            isPrimaPilates={true}
          />
        </div>

        {/* Connection Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="bg-white p-8 md:p-16 rounded-lg border border-sage-200 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-sage-900 mb-8 leading-tight">
            Different Disciplines.
            <br />
            Same Way of Thinking.
          </h3>

          <div className="space-y-4 max-w-2xl mx-auto text-base md:text-lg text-sage-700 leading-relaxed">
            <p>
              <span className="font-medium text-sage-900">Software</span> taught me how to build systems.
            </p>
            <p>
              <span className="font-medium text-sage-900">Data</span> taught me how to find patterns.
            </p>
            <p>
              <span className="font-medium text-sage-900">Marketing</span> taught me how to understand people.
            </p>
            <p>
              <span className="font-medium text-sage-900">Dance</span> taught me discipline and creativity.
            </p>
            <p>
              <span className="font-medium text-sage-900">Entrepreneurship</span> taught me how to put it all into practice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
