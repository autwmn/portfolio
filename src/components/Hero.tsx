'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import EditorialImage from './EditorialImage'
import { specialties } from '@/data/specialties'

const ease = [0.22, 1, 0.36, 1] as const

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease, delay: 0.12 + i * 0.08 },
  }),
}

const settle = {
  hidden: { opacity: 0, y: 16, scale: 0.99 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.05, ease, delay: 0.4 + i * 0.1 },
  }),
}

/* A springy lift on hover (desktop) or tap (touch) — the objects sit still
   until you reach for them. Wraps the object *inside* its entrance wrapper so
   the two animations never fight over the same transform. Honours
   prefers-reduced-motion. */
function Bobble({
  children,
  y = 12,
  rotate = 0,
}: {
  children: React.ReactNode
  y?: number
  rotate?: number
}) {
  const reduced = useReducedMotion()
  if (reduced) return <>{children}</>

  return (
    <motion.div
      whileHover={{ y: -y, rotate }}
      whileTap={{ y: -y * 0.6, rotate: rotate * 0.6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 9, mass: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

/* --- Supporting visuals ---
   The laptop and dashboard are transparent PNGs that carry their own physical
   form, so they are placed bare: no card, border, frame or shadow. --- */

function Laptop() {
  return (
    <EditorialImage
      src="/images/laptop.png"
      alt="Code editor open on a laptop"
      className="relative aspect-[653/523] w-full"
      imgClassName="object-contain"
      variant="paper"
    />
  )
}

function Analytics() {
  return (
    <EditorialImage
      src="/images/analytics.png"
      alt="Analytics dashboard showing growth channels"
      className="relative aspect-[716/563] w-full"
      imgClassName="object-contain"
      variant="paper"
    />
  )
}

/* Already a physical print with its own border, tape and tilt — placed bare */
function Polaroid() {
  return (
    <EditorialImage
      src="/images/poloroid.png"
      alt="Autumn at the barre"
      className="relative aspect-[386/473] w-full"
      imgClassName="object-contain"
      variant="paper"
    />
  )
}

/* --------------------------------------------------------------------- */

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-cream-50">
      {/* Mobile stacks text → cluster → scroll cue; on desktop the cluster spans
          both rows so the cue lands at the lower left of the hero. */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 pb-20 pt-28 md:px-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:grid-rows-[1fr_auto] lg:gap-x-8 lg:gap-y-10 lg:pb-24 lg:pt-32">
        {/* ---------- Text column ---------- */}
        <div className="relative z-40 lg:col-start-1 lg:row-start-1 lg:self-center">
          <motion.p
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={0}
            className="eyebrow text-sage-700"
          >
            Computer Science + Marketing
          </motion.p>

          <motion.h1
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={1}
            className="display-hero mt-5 text-ink"
          >
            AUTUMN
            <br />
            JOYNER
          </motion.h1>

          {/* Specialties — the hero's second focal point */}
          <motion.ul
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-10 space-y-3.5 border-t border-sage-400/60 pt-8"
          >
            {specialties.map((specialty) => (
              <li
                key={specialty}
                className="text-[clamp(1rem,1.35vw,1.35rem)] font-light uppercase leading-none tracking-[0.2em] text-ink"
              >
                {specialty}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-11 flex flex-wrap items-center gap-3"
          >
            <Link href="#projects" className="pill pill-solid">
              View my work <span aria-hidden="true">→</span>
            </Link>
            <Link href="#contact" className="pill pill-ghost">
              Let&apos;s connect
            </Link>
          </motion.div>

        </div>

        {/* ---------- One curated visual cluster ----------
            Layered and overlapping from md up; below that it unfolds into a
            simple row so nothing crowds anything else on a phone. */}
        <div className="relative w-full md:aspect-[6/5] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          {/* z-order: backdrop 0 · laptop 10 · analytics 15 · polaroid 18 · dancer 20.
              The backdrop and the dancer stay still; the three objects around
              her bobble on hover or tap. */}

          {/* 1 · sage background shape — the foundation for the whole cluster.
              The watercolour PNG carries its own botanical sprig. */}
          <img
            src="/images/backdrop.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[12%] top-0 z-0 hidden w-[72%] md:block"
          />

          {/* 2 · laptop — tucked behind and above-right of the dancer */}
          <motion.div
            variants={settle}
            initial="hidden"
            animate="visible"
            custom={0}
            className="hidden md:absolute md:right-[-4%] md:top-0 md:z-10 md:block md:w-[39%] md:-rotate-[3deg]"
          >
            <Bobble y={14} rotate={1.5}>
              <Laptop />
            </Bobble>
          </motion.div>

          {/* 3 · analytics — in front of the laptop, bridging down toward her */}
          <motion.div
            variants={settle}
            initial="hidden"
            animate="visible"
            custom={1}
            className="hidden md:absolute md:right-[-5%] md:top-[40%] md:z-[15] md:block md:w-[33%] md:rotate-[2deg]"
          >
            <Bobble y={12} rotate={-1.5}>
              <Analytics />
            </Bobble>
          </motion.div>

          {/* 4 · the dancer — largest, and reading over the supporting graphics.
              Her layer spans the whole cluster, so it must be click-through or
              it swallows hover for the objects behind her. */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.25, ease }}
            className="pointer-events-none relative z-20 aspect-[4/3] w-full md:absolute md:left-[-2%] md:top-[1%] md:aspect-auto md:h-[98%] md:w-[100%]"
          >
            {/* the sage shape travels with her on small screens */}
            <img
              src="/images/backdrop.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-[12%] top-[2%] w-[64%] md:hidden"
            />
            <EditorialImage
              src="/images/heroimage.png"
              alt="Autumn Joyner mid-leap in a ballet performance"
              className="relative h-full w-full"
              imgClassName="object-contain object-center"
              variant="figure"
              label="portrait cutout · png"
            />
          </motion.div>

          {/* 5 · polaroid — sits just above her front knee, its right corner
              tucking behind her skirt (z below the dancer) */}
          <motion.div
            variants={settle}
            initial="hidden"
            animate="visible"
            custom={3}
            className="hidden md:absolute md:left-[11%] md:top-[45%] md:z-[18] md:block md:w-[19%]"
          >
            <Bobble y={10} rotate={2}>
              <Polaroid />
            </Bobble>
          </motion.div>

          {/* Mobile: same hierarchy, minimal overlap, no rotation */}
          <div className="mt-6 grid grid-cols-[1.2fr_1fr_0.55fr] items-center gap-4 md:hidden">
            <Bobble y={10} rotate={1.5}>
              <Laptop />
            </Bobble>
            <Bobble y={9} rotate={-1.5}>
              <Analytics />
            </Bobble>
            <Bobble y={8} rotate={2}>
              <Polaroid />
            </Bobble>
          </div>
        </div>

        {/* ---------- Scroll cue ---------- */}
        <motion.div
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={4}
          className="relative z-40 flex items-center gap-4 lg:col-start-1 lg:row-start-2"
        >
          <span className="handwritten text-[1.5rem] leading-none text-sage-700">
            scroll to see what I&apos;ve been building
          </span>
          <motion.svg
            width="18"
            height="42"
            viewBox="0 0 18 42"
            fill="none"
            aria-hidden="true"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M9 1v36" stroke="#767963" strokeWidth="1.4" strokeLinecap="round" />
            <path
              d="M2 31c3 4 6 7 7 9 1-2 4-5 7-9"
              stroke="#767963"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  )
}
