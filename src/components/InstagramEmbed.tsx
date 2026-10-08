'use client'

import { useEffect, useRef, useState } from 'react'

interface InstagramEmbedProps {
  shortcode: string
  kind: 'carousel' | 'reel'
  title: string
}

const fallbackAspect = { carousel: 1, reel: 9 / 16 }

const chrome = {
  carousel: { top: 56, bottom: 150 },
  reel: { top: 56, bottom: 160 },
}

const zoom = { carousel: 1, reel: 1.8 }

const maxVisible = { carousel: 600, reel: 430 }

export default function InstagramEmbed({ shortcode, kind, title }: InstagramEmbedProps) {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [frameHeight, setFrameHeight] = useState<number | null>(null)
  const [frameWidth, setFrameWidth] = useState<number>(0)

  useEffect(() => {
    if (!wrapRef.current) return
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width
      if (w) setFrameWidth(w)
    })
    ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!e.origin.endsWith('instagram.com')) return
      if (e.source !== frameRef.current?.contentWindow) return
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data
        const h = data?.details?.height
        if (data?.type === 'MEASURE' && typeof h === 'number' && h > 0) setFrameHeight(h)
      } catch {
        
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  const path = kind === 'reel' ? 'reel' : 'p'
  const { top, bottom } = chrome[kind]
  const scale = zoom[kind]

  const iframeHeight =
    frameHeight ?? Math.round(frameWidth / fallbackAspect[kind]) + top + bottom
  const visibleHeight = Math.min(
    Math.max((iframeHeight - top - bottom) * scale, 240),
    maxVisible[kind],
  )

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: `${visibleHeight}px` }}
    >
      <iframe
        ref={frameRef}
        src={`https://www.instagram.com/${path}/${shortcode}/embed/`}
        title={title}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        scrolling="no"
        className="absolute border-0"
        style={{
          top: 0,
          left: '50%',
          width: '100%',
          height: `${iframeHeight}px`,
          transformOrigin: '50% 0',
          transform: `translate(-50%, -${top * scale}px) scale(${scale})`,
        }}
      />
    </div>
  )
}
