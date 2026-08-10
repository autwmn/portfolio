'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const
const viewport = { once: true, margin: '-60px' }

const rise = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.07 },
  }),
}

/* Minimal line marks, 20px inside a 46px sage ring. No fills, no gradients. */
const icons = {
  build: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 8.5 5 12l3.5 3.5M15.5 8.5 19 12l-3.5 3.5M13.4 6.6l-2.8 10.8" />
    </svg>
  ),
  analyze: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" strokeLinecap="round">
      <path d="M5 19h14M8 19v-5M12 19V8M16 19v-8" />
    </svg>
  ),
  grow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-5 w-5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 16.5 10 11l3.2 3.2L19 8" />
      <path d="M15.2 8H19v3.8" />
    </svg>
  ),
}

const disciplines = [
  {
    label: 'Build',
    name: 'Software Engineering',
    copy: 'I build functional, user-focused digital products and experiences.',
    skills: ['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'AWS', 'Git'],
    icon: icons.build,
  },
  {
    label: 'Analyze',
    name: 'Data + Analytics',
    copy: 'I turn raw data into insights that support better decisions.',
    skills: ['Python', 'SQL', 'Pandas', 'Statistics', 'Tableau'],
    icon: icons.analyze,
  },
  {
    label: 'Grow',
    name: 'Marketing',
    copy: 'I combine technology, consumer behavior, analytics, and storytelling to help ideas grow.',
    skills: ['Digital Strategy', 'Social Media', 'Branding', 'Analytics', 'Content'],
    icon: icons.grow,
  },
]

export default function Intersection() {
  return (
    <section className="w-full bg-cream-50">
      <div className="mx-auto max-w-[1300px] px-6 py-12 md:px-[70px] lg:py-[46px]">
        <motion.h2
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0}
          className="text-center font-display text-[clamp(1.75rem,2.4vw,2.25rem)] font-light uppercase leading-none tracking-[0.08em] text-ink"
        >
          I work at the intersection of
        </motion.h2>

        {/* Three disciplines — thin rules between them, no containers */}
        <div className="mt-10 grid grid-cols-1 lg:mt-10 lg:grid-cols-3">
          {disciplines.map((d, i) => (
            <motion.div
              key={d.label}
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={i + 1}
              className={
                i === 0
                  ? 'lg:pr-10'
                  : 'mt-8 border-t border-ink/15 pt-8 lg:mt-0 lg:border-l lg:border-t-0 lg:px-10 lg:pt-0'
              }
            >
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-sage-500/55 text-sage-700">
                {d.icon}
              </span>

              <h3 className="mt-5 font-display text-[clamp(1.65rem,2.1vw,1.95rem)] font-normal leading-none tracking-[0.01em] text-ink">
                {d.label}
              </h3>

              <p className="mt-2 text-[0.95rem] font-normal leading-snug text-sage-700">
                {d.name}
              </p>

              <p className="mt-3 max-w-[24rem] text-[0.9rem] font-light leading-[1.65] text-ink/75">
                {d.copy}
              </p>

              <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
                {d.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-ink/15 px-2.5 py-[3px] text-[0.7rem] font-normal text-ink/60"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
