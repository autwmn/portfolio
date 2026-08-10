'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto text-center space-y-12"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-sage-900">
              Let's Make
              <br />
              Something Good.
            </h2>
            <p className="text-lg text-sage-700">
              Have a project, opportunity, or idea? I'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 py-8 border-t border-b border-sage-200"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-sage-600 font-medium mb-2">
                Email
              </p>
              <a
                href="mailto:autumnjoyner06@gmail.com"
                className="text-xl md:text-2xl font-medium text-sage-900 hover:opacity-70 transition-opacity"
              >
                autumnjoyner06@gmail.com
              </a>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-xs uppercase tracking-widest text-sage-600 font-medium">
                Also On
              </p>
              <div className="flex items-center justify-center gap-6 md:gap-10">
                <a
                  href="https://linkedin.com/in/autumnjoyner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-sage-800 hover:text-sage-600 transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/autumnjoyner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-sage-800 hover:text-sage-600 transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://instagram.com/autumnjoyner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-sage-800 hover:text-sage-600 transition-colors"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <a
              href="mailto:autumnjoyner06@gmail.com"
              className="inline-flex items-center justify-center px-10 py-4 bg-sage-800 text-cream-50 font-medium text-lg hover:bg-sage-900 transition-colors"
            >
              GET IN TOUCH
            </a>
          </motion.div>

          {/* Resume Download */}
          <motion.div variants={itemVariants}>
            <a
              href="/resume.pdf"
              className="inline-block text-sm font-medium text-sage-700 border-b border-sage-700 hover:text-sage-900 hover:border-sage-900 transition-colors"
            >
              DOWNLOAD RESUME ↗
            </a>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="pt-8 text-xs text-sage-600"
          >
            <p>© 2024 Autumn Joyner. All rights reserved.</p>
            <p>
              Designed & built with{' '}
              <span className="text-sage-900">intention</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
