'use client'

import { motion } from 'framer-motion'
import InstagramCarousel from './InstagramCarousel'
import WebsiteMonitor from './WebsiteMonitor'
import { carouselPosts, webProjects } from '@/data/creative-work'

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

const carouselRotations = [-0.5, 0.5, -0.25]
const monitorOffsets = [0, 12, -4]

export default function CreativeWorkSection() {
  return (
    <section id="projects">
      {/* ================================================================
          SOCIAL / CAROUSELS — cream background, compact
          ================================================================ */}
      <div className="relative bg-cream-50">
        <div
          className="mx-auto px-5 md:px-8 lg:px-10"
          style={{ maxWidth: 'min(94%, 1600px)', paddingTop: '65px', paddingBottom: '65px' }}
        >
          {/* Heading row — tight bottom margin */}
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0}
            className="flex items-end justify-between"
            style={{ marginBottom: '30px' }}
          >
            <div>
              <h3 className="font-sans text-[15px] font-medium tracking-[0.14em] text-ink/70 uppercase">
                Social / Carousels
              </h3>
              <svg width="130" height="6" viewBox="0 0 130 6" className="mt-1" aria-hidden="true">
                <path
                  d="M2 4 C 20 1, 45 5, 70 3 S 110 1, 128 3.5"
                  fill="none"
                  stroke="#A4A894"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
          </motion.div>

          {/* One horizontal composition: note + 3 carousels */}
          <div className="relative">
            {/* "click through" annotation — above the third carousel area */}
            <div className="absolute -top-6 hidden md:block z-10" style={{ right: '5%' }}>
              <span className="handwritten text-[1.1rem] text-ink/38 inline-flex items-center gap-1.5">
                click through
                <span className="text-ink/25">→</span>
              </span>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[280px_1fr_1fr_1fr] items-center"
              style={{ gap: '24px' }}
            >
              {/* Scrapbook note PNG */}
              <motion.div
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                custom={1}
                className="flex justify-center lg:justify-start"
              >
                <div style={{ transform: 'rotate(-1.5deg)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/scrapbook/note.png"
                    alt="A few of my favorite carousels I've designed for brands and clients. Content that connects and converts."
                    className="w-full h-auto object-contain drop-shadow-[0_4px_12px_rgba(48,47,43,0.08)]"
                    style={{ maxWidth: '300px' }}
                  />
                </div>
              </motion.div>

              {/* 3 Instagram carousels */}
              {carouselPosts.map((post, i) => (
                <motion.div
                  key={post.title}
                  variants={rise}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  custom={i + 2}
                  style={{ transform: `rotate(${carouselRotations[i]}deg)` }}
                >
                  <InstagramCarousel
                    slides={post.slides}
                    postUrl={post.postUrl}
                    title={post.title}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================
          TORN PAPER DIVIDER — subtle irregular edge, cream over sage
          ================================================================ */}
      <div className="relative z-10 -mb-[1px]" aria-hidden="true">
        <svg
          viewBox="0 0 1440 28"
          preserveAspectRatio="none"
          className="block w-full h-[18px] md:h-[24px]"
        >
          <path
            d="M0,0 L1440,0 L1440,8
              C1410,18 1385,6 1355,14 C1325,22 1300,5 1270,12
              C1240,19 1215,4 1185,11 C1155,18 1130,6 1100,13
              C1070,20 1045,5 1015,12 C985,19 960,4 930,11
              C900,18 875,6 845,13 C815,20 790,5 760,12
              C730,19 705,4 675,11 C645,18 620,6 590,13
              C560,20 535,5 505,12 C475,19 450,4 420,11
              C390,18 365,6 335,13 C305,20 280,5 250,12
              C220,19 195,4 165,11 C135,18 110,6 80,13
              C50,20 25,5 0,11 Z"
            fill="#F5F1E8"
          />
        </svg>
      </div>

      {/* ================================================================
          WEBSITES — sage scrapbook paper with texture, editorial layout
          ================================================================ */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor: '#b0b4a0',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")`,
        }}
      >
        <div
          className="mx-auto px-5 md:px-8 lg:px-10 relative"
          style={{ maxWidth: 'min(94%, 1600px)', paddingTop: '75px', paddingBottom: '50px' }}
        >
          {/* Pressed botanical accent — behind left editorial area, peeking out */}
          <div className="absolute hidden lg:block" style={{ left: '12%', top: '40px', opacity: 0.18, transform: 'rotate(-25deg)' }} aria-hidden="true">
            <svg width="60" height="140" viewBox="0 0 60 140" fill="none">
              <path d="M30 140 C30 140, 30 80, 30 10" stroke="#5a5f4a" strokeWidth="1.2" strokeLinecap="round" />
              <ellipse cx="20" cy="35" rx="14" ry="8" transform="rotate(-30 20 35)" stroke="#5a5f4a" strokeWidth="0.8" fill="none" />
              <ellipse cx="40" cy="55" rx="14" ry="8" transform="rotate(25 40 55)" stroke="#5a5f4a" strokeWidth="0.8" fill="none" />
              <ellipse cx="22" cy="75" rx="12" ry="7" transform="rotate(-20 22 75)" stroke="#5a5f4a" strokeWidth="0.8" fill="none" />
              <ellipse cx="38" cy="95" rx="11" ry="6" transform="rotate(30 38 95)" stroke="#5a5f4a" strokeWidth="0.8" fill="none" />
            </svg>
          </div>

          {/* Main composition: editorial margin left + monitors right */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[18%_1fr] items-start"
            style={{ gap: '30px' }}
          >
            {/* ---------- Left: editorial margin ---------- */}
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0}
              className="relative z-10"
            >
              {/* WEB / 02 paper label */}
              <div
                className="inline-block px-2.5 py-1"
                style={{
                  backgroundColor: 'rgba(214,205,189,0.45)',
                  clipPath: 'polygon(2% 8%, 98% 0%, 100% 90%, 0% 100%)',
                  marginBottom: '10px',
                }}
              >
                <span className="eyebrow-xs text-ink/60">WEB / 02</span>
              </div>

              <h3 className="font-display text-[clamp(2.75rem,5vw,3.75rem)] font-light text-cream-50 leading-[0.88] tracking-[-0.03em] uppercase">
                Web&shy;sites
              </h3>

              <p className="font-sans text-[13px] font-light text-ink/50 leading-relaxed" style={{ marginTop: '14px' }}>
                brands brought to life
                <br />
                online.
              </p>

              <div className="hidden lg:block" style={{ marginTop: '20px' }}>
                <p className="handwritten text-[1.05rem] text-cream-100/50 leading-[1.3]">
                  hover to
                  <br />
                  scroll
                  <br />
                  through
                </p>
                {/* Arrow curving toward the first monitor */}
                <svg width="55" height="45" viewBox="0 0 55 45" className="mt-1" style={{ marginLeft: '40px' }} aria-hidden="true">
                  <path d="M4 6 C 15 20, 30 32, 50 36" fill="none" stroke="rgba(240,235,223,0.35)" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M42 30 L50 36 L44 40" fill="none" stroke="rgba(240,235,223,0.35)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Polaroid — part of the left column, overlapping into monitor area */}
              <motion.div
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                custom={4}
                className="relative z-20 hidden lg:block"
                style={{ marginTop: '14px', marginLeft: '-5px', transform: 'rotate(-4deg)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/poloroid.png"
                  alt="Autumn at the barre"
                  className="object-contain drop-shadow-[0_4px_12px_rgba(48,47,43,0.1)]"
                  style={{ width: '130px' }}
                />
              </motion.div>
            </motion.div>

            {/* ---------- Right: monitors composition ---------- */}
            <div className="relative">
              {/* Monitors — subtle positional variation */}
              <div
                className="grid grid-cols-1 md:grid-cols-3"
                style={{ gap: '28px' }}
              >
                {webProjects.map((project, i) => (
                  <motion.div
                    key={project.projectName}
                    variants={rise}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    custom={i + 1}
                    className="relative"
                    style={{ marginTop: `${[8, -4, 14][i]}px` }}
                  >
                    <WebsiteMonitor
                      screenshot={project.screenshot}
                      liveUrl={project.liveUrl}
                      projectName={project.projectName}
                      projectType={project.projectType}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Loose paperclip — between monitor 2 and 3, slightly overlapping */}
              <div
                className="absolute hidden lg:block z-30"
                style={{ right: '34%', top: '-8px', transform: 'rotate(22deg)' }}
                aria-hidden="true"
              >
                <svg width="16" height="42" viewBox="0 0 16 42" fill="none">
                  <path
                    d="M8 2 C4 2, 2 5, 2 8 L2 34 C2 37, 4 40, 8 40 C12 40, 14 37, 14 34 L14 10 C14 7, 12 5, 8 5 C6 5, 4 7, 4 9 L4 30"
                    stroke="#8a8e7a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </div>

              {/* Strategy note — tucked beside third monitor caption */}
              <motion.div
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                custom={5}
                className="flex justify-end relative z-20"
                style={{ marginTop: '8px', marginRight: '-10px' }}
              >
                <div style={{ transform: 'rotate(2.5deg)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/scrapbook/mininote.png"
                    alt="strategy meets creativity, meets results."
                    className="h-auto object-contain drop-shadow-[0_3px_10px_rgba(48,47,43,0.08)]"
                    style={{ width: '200px' }}
                  />
                </div>
              </motion.div>

              {/* Tiny torn paper scrap — between monitors 1 and 2, mid-height */}
              <div
                className="absolute hidden lg:block"
                style={{ left: '30%', bottom: '35%', transform: 'rotate(6deg)', opacity: 0.35 }}
                aria-hidden="true"
              >
                <div
                  style={{
                    width: '38px',
                    height: '22px',
                    backgroundColor: 'rgba(240,235,223,0.5)',
                    clipPath: 'polygon(5% 10%, 95% 0%, 100% 85%, 3% 100%)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile-only Polaroid */}
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={4}
            className="lg:hidden mt-5 flex justify-start"
          >
            <div style={{ transform: 'rotate(-3deg)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/poloroid.png"
                alt="Autumn at the barre"
                className="object-contain drop-shadow-[0_4px_10px_rgba(48,47,43,0.08)]"
                style={{ width: '110px' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
