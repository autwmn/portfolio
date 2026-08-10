'use client'

import { useState, useCallback } from 'react'

interface InstagramCarouselProps {
  slides: string[]
  postUrl: string
  title: string
}

export default function InstagramCarousel({ slides, postUrl, title }: InstagramCarouselProps) {
  const [current, setCurrent] = useState(0)
  const total = slides.length

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + total) % total)
  }, [total])

  return (
    <div
      className="bg-white shadow-[0_2px_8px_rgba(48,47,43,0.06)]"
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') prev()
        if (e.key === 'ArrowRight') next()
      }}
    >
      {/* Instagram header */}
      <div className="flex items-center gap-2.5 px-3 py-2.5">
        <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center shrink-0">
          <span className="text-[9px] text-cream-50 font-sans font-medium tracking-wide">AJ</span>
        </div>
        <span className="text-[13px] font-sans font-medium text-ink">autumnjoyner</span>
        <svg className="ml-auto" width="16" height="4" viewBox="0 0 16 4" fill="#302F2B">
          <circle cx="2" cy="2" r="1.5" />
          <circle cx="8" cy="2" r="1.5" />
          <circle cx="14" cy="2" r="1.5" />
        </svg>
      </div>

      {/* Artwork — square */}
      <div className="relative aspect-square overflow-hidden bg-sage-100">
        {/* Link layer — clicking artwork opens Instagram */}
        <a
          href={postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-0"
          aria-label={`View "${title}" on Instagram`}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{ opacity: i === current ? 1 : 0, transition: 'opacity 300ms ease' }}
              aria-hidden={i !== current}
            >
              {/* Placeholder behind image */}
              <div className="absolute inset-0 bg-sage-100 flex items-center justify-center p-6 z-0">
                <p className="text-center font-display text-sage-400/50 text-[15px] leading-relaxed italic">
                  {title}
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide}
                alt={`${title} — slide ${i + 1} of ${total}`}
                className="absolute inset-0 w-full h-full object-cover z-[1]"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          ))}
        </a>

        {/* Carousel arrows — prevent link propagation */}
        {total > 1 && (
          <>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev() }}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-[26px] h-[26px] rounded-full bg-white/90 shadow-sm flex items-center justify-center text-ink/70 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-1"
              aria-label="Previous slide"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 1.5 3 5l3.5 3.5" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); next() }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-[26px] h-[26px] rounded-full bg-white/90 shadow-sm flex items-center justify-center text-ink/70 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-1"
              aria-label="Next slide"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.5 1.5 7 5l-3.5 3.5" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Action bar */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-3.5">
          {/* Heart */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#302F2B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {/* Comment */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#302F2B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {/* Share */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#302F2B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
        {/* Bookmark */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#302F2B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      {/* Dot indicators */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-[5px] pb-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              className={`rounded-full transition-all duration-200 focus:outline-none ${
                i === current ? 'w-[6px] h-[6px] bg-sage-600' : 'w-[5px] h-[5px] bg-sage-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </div>
  )
}
