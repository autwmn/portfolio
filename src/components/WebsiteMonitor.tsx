'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

interface WebsiteMonitorProps {
  screenshot: string
  liveUrl: string
  projectName: string
  projectType: string
}

export default function WebsiteMonitor({ screenshot, liveUrl, projectName, projectType }: WebsiteMonitorProps) {
  const screenRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [scrollDist, setScrollDist] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const [tapped, setTapped] = useState(false)

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const recalc = useCallback(() => {
    if (imgRef.current && screenRef.current) {
      const screenH = screenRef.current.clientHeight
      const screenW = screenRef.current.clientWidth
      const ratio = imgRef.current.naturalHeight / imgRef.current.naturalWidth
      setScrollDist(Math.max(0, screenW * ratio - screenH))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', recalc)
    return () => window.removeEventListener('resize', recalc)
  }, [recalc])

  const handleMouseEnter = () => {
    if (!isTouch && !reducedMotion) setIsScrolling(true)
  }

  const handleMouseLeave = () => {
    if (!isTouch) setIsScrolling(false)
  }

  const handleMonitorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isTouch && !tapped && scrollDist > 0 && !reducedMotion) {
      e.preventDefault()
      setTapped(true)
      setIsScrolling(true)
      setTimeout(() => setIsScrolling(false), 5500)
    }
  }

  return (
    <div className="relative">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative group transition-transform duration-500 ease-editorial"
          aria-label={`Visit ${projectName} website`}
          onClick={handleMonitorClick}
          style={{ willChange: 'transform' }}
        >
          {/* Monitor shell — subtle lift on hover */}
          <div className="relative transition-all duration-500 ease-editorial group-hover:-translate-y-[3px] group-hover:drop-shadow-[0_8px_20px_rgba(48,47,43,0.15)]">
            {/* Screen bezel */}
            <div className="bg-[#2a2a2a] rounded-[8px] p-[6px] pb-0">
              {/* Screen area */}
              <div
                ref={screenRef}
                className="relative overflow-hidden bg-cream-100 rounded-t-[4px]"
                style={{ aspectRatio: '16 / 10' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={imgRef}
                  src={screenshot}
                  alt={`${projectName} website preview`}
                  className="w-full h-auto block"
                  style={{
                    transform: isScrolling ? `translateY(-${scrollDist}px)` : 'translateY(0)',
                    transition: reducedMotion
                      ? 'none'
                      : `transform ${isScrolling ? '5s' : '1.5s'} ease-in-out`,
                  }}
                  onLoad={() => { setImageLoaded(true); recalc() }}
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-cream-100 flex items-center justify-center">
                    <p className="eyebrow-xs text-sage-400/60">{projectName}</p>
                  </div>
                )}
              </div>

              {/* Bottom bezel with camera dot */}
              <div className="h-[14px] flex items-center justify-center">
                <div className="w-[4px] h-[4px] rounded-full bg-[#444]" />
              </div>
            </div>

            {/* Stand */}
            <div className="mx-auto w-[35%] h-[18px] bg-[#d4d4d4] rounded-b-[2px]"
              style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }} />
            {/* Base */}
            <div className="mx-auto w-[50%] h-[5px] bg-[#c8c8c8] rounded-b-[3px]" />
          </div>
        </a>
      </div>

      {/* Touch preview hint */}
      {isTouch && !reducedMotion && scrollDist > 0 && (
        <p className="text-center mt-2 text-[11px] font-sans text-cream-200/70 md:hidden">
          {tapped ? 'tap again to visit' : 'tap to preview'}
        </p>
      )}

      {/* Editorial caption — tight to monitor */}
      <div style={{ marginTop: '10px' }}>
        <p className="font-display text-[1.05rem] font-light text-cream-50 tracking-wide uppercase leading-tight">
          {projectName}
        </p>
        <p className="text-[11px] font-sans font-light text-ink/45 uppercase tracking-wider" style={{ marginTop: '2px' }}>
          {projectType}
        </p>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block eyebrow-xs text-cream-200/60 hover:text-cream-50 transition-colors duration-300"
          style={{ marginTop: '5px' }}
        >
          VIEW LIVE SITE →
        </a>
      </div>
    </div>
  )
}
