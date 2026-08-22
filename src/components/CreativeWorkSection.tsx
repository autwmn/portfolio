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

export default function CreativeWorkSection() {
  return (
    <section id="projects">
      {/* ================================================================
          SOCIAL / CAROUSELS — sage background
          ================================================================ */}
      <div
        className="relative"
        style={{
          backgroundColor: '#b0b4a0',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      >
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
                  stroke="#F5F1E8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.7"
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
            fill="#b0b4a0"
          />
        </svg>
      </div>

      {/* ================================================================
          WEBSITES — cream background
          ================================================================ */}
      <div
        className="relative"
        style={{
          backgroundColor: '#F5F1E8',
          paddingTop: '80px',
          paddingBottom: '48px',
        }}
      >
        <div
          className="mx-auto"
          style={{ width: 'min(94%, 1440px)' }}
        >
          <div
            className="grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.75fr_1.35fr_1.35fr_1.35fr]"
            style={{ gap: '34px' }}
          >
            {/* Left editorial intro column */}
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0}
            >
              <div
                className="inline-block px-2.5 py-1 mb-2"
                style={{
                  backgroundColor: 'rgba(214,205,189,0.45)',
                  clipPath: 'polygon(2% 8%, 98% 0%, 100% 90%, 0% 100%)',
                }}
              >
                <span className="text-xs font-medium tracking-widest text-ink/60 uppercase">
                  WEB / 02
                </span>
              </div>

              <h2
                className="font-light uppercase"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '52px',
                  lineHeight: 1,
                  color: '#616757',
                  letterSpacing: '-0.02em',
                  marginBottom: '10px',
                }}
              >
                Websites
              </h2>

              <p
                className="handwritten"
                style={{
                  fontFamily: 'Caveat, cursive',
                  fontSize: '26px',
                  lineHeight: 1.15,
                  color: '#302f2b',
                  marginBottom: '18px',
                  maxWidth: '220px',
                  transform: 'rotate(-1.5deg)',
                  transformOrigin: 'left top',
                }}
              >
                brands brought to life online.
              </p>
            </motion.div>

            {/* Three monitors */}
            {webProjects.map((project, i) => (
              <motion.div
                key={project.projectName}
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                custom={i + 1}
                className="relative"
                style={{ maxWidth: '360px', width: '100%', justifySelf: 'center' }}
              >
                {/* "hover to scroll through" annotation — single line above Perfect Pointe */}
                {i === 0 && (
                  <div
                    className="absolute hidden md:flex items-center gap-1.5 pointer-events-none whitespace-nowrap"
                    style={{
                      top: '-30px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 20,
                    }}
                  >
                    <span
                      className="handwritten"
                      style={{
                        fontSize: '15px',
                        color: 'rgba(48,47,43,0.7)',
                        lineHeight: 1,
                      }}
                    >
                      hover to scroll through
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 1 L7 12 M7 12 L3 8 M7 12 L11 8"
                        fill="none"
                        stroke="rgba(48,47,43,0.65)"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                <WebsiteMonitor
                  screenshot={project.screenshot}
                  liveUrl={project.liveUrl}
                  projectName={project.projectName}
                  projectType={project.projectType}
                  comingSoon={project.comingSoon}
                  scrollOnHover={project.scrollOnHover}
                />

                {/* Strategy note clipped to top-right of the third (Prima) monitor */}
                {i === 2 && (
                  <div
                    className="absolute hidden md:block pointer-events-none"
                    style={{
                      top: '-26px',
                      right: '-32px',
                      width: '150px',
                      transform: 'rotate(6deg)',
                      zIndex: 30,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/scrapbook/mininote.png"
                      alt="strategy meets creativity, meets results."
                      className="drop-shadow-[0_3px_10px_rgba(48,47,43,0.12)]"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
