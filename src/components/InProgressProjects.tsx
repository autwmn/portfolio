'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const
const viewport = { once: true, margin: '-60px' }

const rise = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay: i * 0.06 },
  }),
}

export default function InProgressProjects() {
  return (
    <section
      id="in-progress"
      className="relative"
      style={{
        backgroundColor: '#b0b4a0',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        paddingTop: '70px',
        paddingBottom: '55px',
      }}
    >
      {/* Torn top edge — cream strip tearing into sage, matching cream Websites section above */}
      <div
        className="torn-bottom absolute inset-x-0 top-0 z-10 h-8"
        style={{ backgroundColor: '#F5F1E8' }}
        aria-hidden="true"
      />

      <div
        className="mx-auto px-5 md:px-8 lg:px-10 relative"
        style={{ maxWidth: 'min(94%, 1600px)' }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[24%_1fr] items-start"
          style={{ gap: '48px' }}
        >
          {/* LEFT — intro column */}
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0}
          >
            <div
              className="inline-block px-2.5 py-1"
              style={{
                backgroundColor: 'rgba(164, 168, 148, 0.28)',
                clipPath: 'polygon(2% 8%, 98% 0%, 100% 90%, 0% 100%)',
                marginBottom: '18px',
              }}
            >
              <span className="text-xs font-medium tracking-widest text-ink/70 uppercase">
                WEB / 03
              </span>
            </div>

            <h2
              className="font-light uppercase"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 4.2vw, 3.6rem)',
                lineHeight: 0.95,
                color: '#F5F1E8',
                letterSpacing: '-0.025em',
                marginBottom: '20px',
              }}
            >
              In Progress
              <br />
              Projects
            </h2>

            <p
              className="font-sans"
              style={{
                color: '#302f2b',
                fontSize: '15px',
                lineHeight: 1.55,
                maxWidth: '280px',
                marginBottom: '22px',
              }}
            >
              current projects in the works.
              <br />
              building, creating, growing.
            </p>

            <div className="inline-block">
              <span
                className="handwritten pencil-underline"
                style={{
                  fontFamily: 'Caveat, cursive',
                  fontSize: '26px',
                  color: '#302f2b',
                  lineHeight: 1,
                  transform: 'rotate(-1deg)',
                  display: 'inline-block',
                }}
              >
                more to come
              </span>
            </div>
          </motion.div>

          {/* RIGHT — future.png + descriptions aligned beneath each note */}
          <div className="in-progress-right flex flex-col">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={1}
              className="w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/future.png"
                alt="In progress projects — Prima Pilates and ClassBlocks App"
                className="w-full h-auto block"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>

            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={2}
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: '32px', marginTop: '20px' }}
            >
              <p
                className="font-sans future-description"
                style={{
                  color: '#302f2b',
                  fontSize: '15px',
                  lineHeight: 1.55,
                  textAlign: 'center',
                  maxWidth: '410px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                a modern Pilates business focused on training dancers through
                strength, control, mobility, and intentional movement.
              </p>
              <p
                className="font-sans future-description"
                style={{
                  color: '#302f2b',
                  fontSize: '15px',
                  lineHeight: 1.55,
                  textAlign: 'center',
                  maxWidth: '410px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                a class-planning app designed for instructors to organize
                exercises, build reusable class blocks, plan teaching
                schedules, and reuse choreography.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
