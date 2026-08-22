'use client'

import { useRef, useEffect } from 'react'

interface WebsiteMonitorProps {
  screenshot?: string
  liveUrl: string
  projectName: string
  projectType: string
  comingSoon?: boolean
  scrollOnHover?: boolean
}

export default function WebsiteMonitor({
  screenshot,
  liveUrl,
  projectName,
  projectType,
  comingSoon,
  scrollOnHover = false,
}: WebsiteMonitorProps) {
  const screenRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!scrollOnHover || comingSoon || !screenshot) return
    const screen = screenRef.current
    const viewport = viewportRef.current
    const image = imgRef.current
    if (!screen || !viewport || !image) return

    const distance = () =>
      Math.max(0, image.scrollHeight - viewport.clientHeight)

    const onEnter = () => {
      const d = distance()
      if (d > 0) {
        image.style.transition = 'transform 14s cubic-bezier(0.22, 1, 0.36, 1)'
        image.style.transform = `translateY(-${d}px)`
      }
    }
    const onLeave = () => {
      image.style.transition = 'transform 3.5s cubic-bezier(0.22, 1, 0.36, 1)'
      image.style.transform = 'translateY(0)'
    }

    screen.addEventListener('mouseenter', onEnter)
    screen.addEventListener('mouseleave', onLeave)
    return () => {
      screen.removeEventListener('mouseenter', onEnter)
      screen.removeEventListener('mouseleave', onLeave)
    }
  }, [scrollOnHover, comingSoon, screenshot])

  return (
    <div className="flex flex-col items-center w-full">
      <a
        href={comingSoon ? '#' : liveUrl}
        target={comingSoon ? undefined : '_blank'}
        rel={comingSoon ? undefined : 'noopener noreferrer'}
        className={`block w-full ${comingSoon ? 'cursor-default' : ''}`}
        aria-label={comingSoon ? `${projectName} — coming soon` : `Visit ${projectName} website`}
      >
        <div
          ref={screenRef}
          className="relative w-full"
          style={{
            aspectRatio: '16 / 10',
            backgroundColor: '#1e1e1e',
            padding: '5px',
            borderRadius: '6px',
            boxShadow: '0 6px 18px rgba(40,42,35,0.18)',
          }}
        >
          <div
            ref={viewportRef}
            className="w-full h-full overflow-hidden"
            style={{
              borderRadius: '2px',
              backgroundColor: comingSoon ? '#f2ecdd' : '#ffffff',
            }}
          >
            {!comingSoon && screenshot && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                ref={imgRef}
                src={screenshot}
                alt={`${projectName} website preview`}
                className="block w-full"
                style={{
                  height: scrollOnHover ? 'auto' : '100%',
                  objectFit: scrollOnHover ? 'unset' : 'cover',
                  objectPosition: 'top center',
                  transform: 'translateY(0)',
                  willChange: 'transform',
                }}
              />
            )}
            {comingSoon && (
              <div className="w-full h-full flex items-center justify-center">
                <p
                  className="uppercase"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 300,
                    fontSize: '15px',
                    letterSpacing: '0.28em',
                    color: 'rgba(58,61,50,0.55)',
                  }}
                >
                  Coming Soon
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            width: '14%',
            height: '10px',
            margin: '0 auto',
            background: 'linear-gradient(to bottom, #cfcfcf, #b8b8b8)',
          }}
        />
        <div
          style={{
            width: '34%',
            height: '4px',
            margin: '0 auto',
            background: '#b8b8b8',
            borderRadius: '2px',
            boxShadow: '0 3px 6px rgba(40,42,35,0.12)',
          }}
        />
      </a>

      <div style={{ marginTop: '14px', width: '100%', textAlign: 'left' }}>
        <p
          className="uppercase"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            fontSize: '20px',
            lineHeight: 1.1,
            color: '#2a2622',
            letterSpacing: '-0.005em',
            marginBottom: '5px',
          }}
        >
          {projectName}
        </p>
        <p
          className="font-sans uppercase"
          style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            color: '#5a5f4a',
            marginBottom: '11px',
          }}
        >
          {projectType}
        </p>
        {comingSoon ? (
          <span
            className="font-sans uppercase inline-block"
            style={{
              fontSize: '11px',
              letterSpacing: '0.14em',
              color: 'rgba(90,95,74,0.55)',
            }}
          >
            COMING SOON
          </span>
        ) : (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans uppercase hover:opacity-70 transition-opacity inline-block"
            style={{
              fontSize: '11px',
              letterSpacing: '0.14em',
              color: '#5a5f4a',
            }}
          >
            VIEW LIVE SITE →
          </a>
        )}
      </div>
    </div>
  )
}
