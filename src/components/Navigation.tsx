'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONNECT', href: '#connect' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backgroundColor: scrolled ? 'rgba(245, 241, 232, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(1.1) blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(1.1) blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(97, 103, 87, 0.14)' : '1px solid transparent',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="mx-auto flex max-w-[1600px] items-start justify-between px-5 pt-5 pb-3 md:px-10 md:pt-6 md:pb-4">
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
