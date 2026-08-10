'use client'

import { motion } from 'framer-motion'
import EditorialImage from './EditorialImage'

const ease = [0.22, 1, 0.36, 1] as const
const viewport = { once: true, margin: '-60px' }

const rise = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay: i * 0.08 },
  }),
}

/* Identity labels — tiny handwritten annotations around the portrait */
/* Placed in the gaps around her — clear of the extended leg and the tambourine arm */
const labels = [
  { text: 'engineer', className: 'left-[20%] top-[17%] -rotate-[6deg]' },
  { text: 'dancer', className: 'left-[-3%] top-[56%] -rotate-[3deg]' },
  { text: 'teacher', className: 'left-[17%] top-[86%] rotate-[2deg]' },
  { text: 'problem solver', className: 'right-[-4%] top-[42%] rotate-[4deg]' },
  { text: 'entrepreneur', className: 'right-[-4%] top-[62%] rotate-[2deg]' },
]

export default function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-sage-400">
      {/* Torn paper transitions into the ivory sections above and below */}
      <div
        className="torn-bottom absolute inset-x-0 top-0 z-10 h-10 bg-cream-50"
        aria-hidden="true"
      />
      <div
        className="torn-bottom absolute inset-x-0 bottom-0 z-10 h-9 rotate-180 bg-cream-50"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-8 py-24 md:px-12 lg:grid-cols-[2.3fr_0.72fr_1fr_0.85fr] lg:gap-10 lg:py-24">
        {/* ---------- Portrait ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 1, ease }}
          className="relative z-20 mx-auto w-[62%] max-w-[240px] lg:mx-0 lg:w-full lg:max-w-none"
        >
          {/* organic layer behind the portrait */}
          <div
            className="blob-b absolute -inset-x-[14%] -top-[6%] bottom-[4%] z-0 bg-cream-200/45"
            aria-hidden="true"
          />
          <span className="tape left-1/2 top-[-14px] z-30 -translate-x-1/2 -rotate-[5deg]" />
          {/* aspect matches the trimmed portrait (1053×1327) so object-contain
              leaves no dead space around her */}
          <EditorialImage
            src="/images/portrait.png"
            alt="Autumn Joyner in arabesque"
            className="relative z-20 aspect-[4/5] w-full"
            imgClassName="object-contain object-bottom"
            variant="figure"
            label="portrait cutout · png"
          />

          {/* handwritten identity labels */}
          <div className="absolute inset-0 z-30 hidden lg:block" aria-hidden="true">
            {labels.map((label) => (
              <span
                key={label.text}
                className={`handwritten absolute whitespace-nowrap text-[1.3rem] leading-none text-ink/70 ${label.className}`}
              >
                {label.text}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ---------- Name ---------- */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={1}
          className="relative z-20 lg:text-right"
        >
          <p className="eyebrow text-ink/70">Hey there, I&apos;m</p>
          {/* Sized with utilities rather than .display-section — globals.css loads
              after Tailwind, so the class's font-size would win over any override. */}
          <h2 className="mt-4 font-display text-[clamp(3rem,5.5vw,5rem)] font-light leading-[0.9] tracking-[-0.035em] text-cream-50">
            AUTUMN
          </h2>
          <svg
            viewBox="0 0 180 14"
            fill="none"
            className="mt-3 h-3 w-[62%] lg:ml-auto"
            aria-hidden="true"
          >
            <path
              d="M3 6c34 6 62-4 96 1s48 4 78-1"
              stroke="#F5F1E8"
              strokeOpacity="0.7"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* ---------- Copy ---------- */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={2}
          className="relative z-20 space-y-5 text-[0.95rem] leading-[1.8] text-ink/85"
        >
          <p>
            I&apos;m a Computer Science student with a minor in Marketing interested in the
            intersection of technology, data, creativity, and business.
          </p>
          <p>
            Outside of tech, I&apos;m also a dancer, teacher, Pilates instructor, and
            entrepreneur — experiences that have shaped how I communicate, solve problems,
            and build for real people.
          </p>
        </motion.div>

        {/* ---------- Thinking / Building ---------- */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={3}
          className="relative z-20 space-y-7"
        >
          <div className="border-t border-sage-800/25 pt-5">
            <p className="eyebrow-xs text-sage-800">Thinking</p>
            <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink/70">
              Systems thinking, user-centered design, data literacy, and problem solving.
            </p>
          </div>
          <div className="border-t border-sage-800/25 pt-5">
            <p className="eyebrow-xs text-sage-800">Building</p>
            <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink/70">
              Full-stack software, data projects, digital experiences, and strategy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
