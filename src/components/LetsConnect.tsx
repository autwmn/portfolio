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

const EMAIL = 'autumnjoyner06@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/autumnjoyner'
const LINKEDIN_HANDLE = 'linkedin.com/in/autumnjoyner'
const INSTAGRAM_URL = 'https://instagram.com/autumnjoyner'
const INSTAGRAM_HANDLE = '@autumnjoyner'
const GITHUB_URL = 'https://github.com/autwmn'
const GITHUB_HANDLE = 'github.com/autwmn'
const LOCATION = 'San Diego, California'
const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=San+Diego%2C+California'

type Row = {
  label: string
  value: string
  cta: string
  href: string
  external?: boolean
  icon: React.ReactNode
}

const IconWrap = ({ children }: { children: React.ReactNode }) => (
  <div
    className="flex items-center justify-center shrink-0"
    style={{
      width: '44px',
      height: '44px',
      borderRadius: '10px',
      border: '1px solid rgba(97, 103, 87, 0.28)',
      backgroundColor: 'rgba(245, 241, 232, 0.6)',
      color: '#3F4438',
    }}
  >
    {children}
  </div>
)

const rows: Row[] = [
  {
    label: 'EMAIL',
    value: EMAIL,
    cta: 'SEND EMAIL',
    href: `mailto:${EMAIL}`,
    icon: (
      <IconWrap>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      </IconWrap>
    ),
  },
  {
    label: 'LINKEDIN',
    value: LINKEDIN_HANDLE,
    cta: 'VIEW PROFILE',
    href: LINKEDIN_URL,
    external: true,
    icon: (
      <IconWrap>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10v7" />
          <circle cx="8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
          <path d="M12 17v-4a2.5 2.5 0 0 1 5 0v4" />
          <path d="M12 10v7" />
        </svg>
      </IconWrap>
    ),
  },
  {
    label: 'GITHUB',
    value: GITHUB_HANDLE,
    cta: 'VIEW GITHUB',
    href: GITHUB_URL,
    external: true,
    icon: (
      <IconWrap>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-4 1.5-4-2-6-2m12 5v-3.5a3.4 3.4 0 0 0-.9-2.6c3.1-.35 6.3-1.5 6.3-7A5.4 5.4 0 0 0 18.9 5a5 5 0 0 0-.1-3.8s-1.2-.35-3.8 1.4a13 13 0 0 0-7 0C5.4.8 4.2 1.15 4.2 1.15A5 5 0 0 0 4.1 5a5.4 5.4 0 0 0-1.5 3.9c0 5.5 3.2 6.65 6.3 7A3.4 3.4 0 0 0 8 18.5V22" />
        </svg>
      </IconWrap>
    ),
  },
  {
    label: 'INSTAGRAM',
    value: INSTAGRAM_HANDLE,
    cta: 'VISIT INSTAGRAM',
    href: INSTAGRAM_URL,
    external: true,
    icon: (
      <IconWrap>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      </IconWrap>
    ),
  },
  {
    label: 'BASED IN',
    value: LOCATION,
    cta: 'VIEW ON MAP',
    href: MAP_URL,
    external: true,
    icon: (
      <IconWrap>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
      </IconWrap>
    ),
  },
]

const pillStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0 20px',
  height: '40px',
  borderRadius: '999px',
  backgroundColor: '#8e907c',
  color: '#F5F1E8',
  fontFamily: 'DM Sans, system-ui, sans-serif',
  fontWeight: 500,
  fontSize: '11px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
}

export default function LetsConnect() {
  return (
    <section
      id="connect"
      className="relative"
      style={{
        backgroundColor: '#F5F1E8',
        paddingTop: '75px',
        paddingBottom: '65px',
      }}
    >
      {/* Torn top edge — sage strip tearing into cream, matching sage InProgressProjects above */}
      <div
        className="torn-bottom absolute inset-x-0 top-0 z-10 h-8"
        style={{ backgroundColor: '#b0b4a0' }}
        aria-hidden="true"
      />

      <div
        className="mx-auto px-5 md:px-8 lg:px-10 relative"
        style={{ maxWidth: 'min(94%, 1600px)' }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[30%_38%_32%] items-start"
          style={{ gap: '40px' }}
        >
          {/* LEFT — title + copy */}
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
                WEB / 04
              </span>
            </div>

            <h2
              className="font-light uppercase"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 4.2vw, 3.6rem)',
                lineHeight: 0.95,
                color: '#616757',
                letterSpacing: '-0.025em',
                marginBottom: '22px',
              }}
            >
              Let&apos;s Connect
            </h2>

            <p
              className="font-sans"
              style={{
                color: '#302f2b',
                fontSize: '15px',
                lineHeight: 1.6,
                maxWidth: '340px',
                marginBottom: '18px',
              }}
            >
              I&apos;m always open to new opportunities, collaborations, and
              creative conversations.
            </p>

            <div className="inline-flex items-center gap-2">
              <span
                className="handwritten"
                style={{
                  fontFamily: 'Caveat, cursive',
                  fontSize: '24px',
                  color: '#302f2b',
                  lineHeight: 1.1,
                  transform: 'rotate(-1deg)',
                  display: 'inline-block',
                }}
              >
                let&apos;s bring ideas to life together.
              </span>
              <svg width="18" height="16" viewBox="0 0 18 16" aria-hidden="true">
                <path
                  d="M9 14 C 2 9, 2 3, 5 2 C 7 1.4, 9 3, 9 4 C 9 3, 11 1.4, 13 2 C 16 3, 16 9, 9 14 Z"
                  fill="none"
                  stroke="#616757"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* CENTER — contact CTA rows */}
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={1}
            className="w-full"
          >
            <ul className="w-full">
              {rows.map((row, i) => (
                <li
                  key={row.label}
                  className="grid grid-cols-[auto_1fr_auto] items-center"
                  style={{
                    gap: '18px',
                    padding: '18px 0',
                    borderTop:
                      i === 0 ? '1px solid rgba(97, 103, 87, 0.2)' : 'none',
                    borderBottom: '1px solid rgba(97, 103, 87, 0.2)',
                  }}
                >
                  {row.icon}
                  <div className="min-w-0">
                    <p
                      className="font-sans"
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: '#616757',
                        fontWeight: 500,
                        marginBottom: '4px',
                      }}
                    >
                      {row.label}
                    </p>
                    <p
                      className="font-sans truncate"
                      style={{
                        fontSize: '15px',
                        color: '#302f2b',
                      }}
                    >
                      {row.value}
                    </p>
                  </div>
                  <a
                    href={row.href}
                    {...(row.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    style={pillStyle}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        '#616757'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        '#8e907c'
                    }}
                  >
                    {row.cta}
                    <span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — cta.png scrapbook graphic */}
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={2}
            className="flex justify-center lg:justify-end"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/cta.png"
              alt="let's create something meaningful together."
              className="h-auto"
              style={{
                objectFit: 'contain',
                display: 'block',
                width: '100%',
                maxWidth: '340px',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
