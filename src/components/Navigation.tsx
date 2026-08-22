'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'IN PROGRESS', href: '#in-progress' },
  { label: 'CONNECT', href: '#connect' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-[1600px] items-start justify-between px-5 pt-5 md:px-10 md:pt-8">
        {/* Monogram */}
        <Link href="/" className="group relative shrink-0" aria-label="Autumn Joyner — home">
          <span className="fashion block text-[1.9rem] leading-none text-ink md:text-[2.3rem]">
            AJ
          </span>
          <span className="handwritten absolute -bottom-4 left-0 whitespace-nowrap text-base text-sage-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            hi there
          </span>
        </Link>

        {/* Desktop pills */}
        <div className="hidden items-center gap-1.5 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="pill pill-solid">
              {item.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            className="pill pill-ghost ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="pill pill-solid md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile panel — torn paper sheet, not a dropdown bar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="paper paper-shadow torn-bottom mx-5 mt-3 px-7 pb-12 pt-8 md:hidden"
          >
            <p className="eyebrow-xs mb-5 text-sage-600">Index</p>
            <ul className="space-y-3">
              {navItems.map((item, i) => (
                <li key={item.href} style={{ marginLeft: `${(i % 3) * 14}px` }}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="display-sub block text-ink"
                  >
                    {item.label.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="/resume.pdf"
              className="pill pill-ghost mt-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
