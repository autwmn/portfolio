'use client'

import { useEffect, useState } from 'react'

type Variant = 'paper' | 'figure' | 'screen'

interface EditorialImageProps {
  
  src: string
  alt: string
  
  className?: string
  
  imgClassName?: string
  
  label?: string
  
  hint?: string
  variant?: Variant
}

export default function EditorialImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  label,
  hint,
  variant = 'paper',
}: EditorialImageProps) {

  const [status, setStatus] = useState<'probing' | 'found' | 'missing'>('probing')

  useEffect(() => {
    let cancelled = false
    const probe = new window.Image()
    probe.onload = () => !cancelled && setStatus('found')
    probe.onerror = () => !cancelled && setStatus('missing')
    probe.src = src
    return () => {
      cancelled = true
    }
  }, [src])

  if (status === 'found') {
    return (
      <div className={className}>
        {}
        <img src={src} alt={alt} className={`h-full w-full ${imgClassName}`} />
      </div>
    )
  }

  if (variant === 'figure') {
    return (
      <div className={className} role="img" aria-label={alt}>
        <svg
          viewBox="0 0 300 720"
          preserveAspectRatio="xMidYMax meet"
          className="h-full w-full"
        >
          {}
          <g fill="none" stroke="#616757" strokeWidth="1.6" opacity="0.42">
            <ellipse cx="152" cy="58" rx="29" ry="38" />
            <path d="M152 96c-3 12-11 17-11 17l-24 9c-19 8-29 22-31 42l-8 84c-1 9 4 15 11 16s13-4 14-13l10-64 4 58-7 174c-1 12 4 20 14 21s17-6 18-18l14-134 12 134c1 12 8 19 18 18s15-9 14-21l-8-174 4-58 10 64c1 9 7 14 14 13s12-7 11-16l-8-84c-2-20-12-34-31-42l-24-9s-8-5-11-17z" />
          </g>
          <path
            d="M152 96c-3 12-11 17-11 17l-24 9c-19 8-29 22-31 42l-8 84c-1 9 4 15 11 16s13-4 14-13l10-64 4 58-7 174c-1 12 4 20 14 21s17-6 18-18l14-134 12 134c1 12 8 19 18 18s15-9 14-21l-8-174 4-58 10 64c1 9 7 14 14 13s12-7 11-16l-8-84c-2-20-12-34-31-42l-24-9s-8-5-11-17z"
            fill="#8E907C"
            opacity="0.16"
          />
          <ellipse cx="152" cy="58" rx="29" ry="38" fill="#8E907C" opacity="0.16" />
        </svg>
        {label && (
          <span className="eyebrow-xs absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sage-700/70">
            {label}
          </span>
        )}
      </div>
    )
  }

  return (
    <div
      className={`${className} flex flex-col items-center justify-center gap-1 ${
        variant === 'screen' ? 'bg-cream-100' : 'paper'
      }`}
      role="img"
      aria-label={alt}
    >
      {label && (
        <span className="eyebrow-xs relative z-10 px-3 text-center text-sage-700/80">
          {label}
        </span>
      )}
      {hint && (
        <span className="handwritten relative z-10 text-base text-sage-600/80">{hint}</span>
      )}
    </div>
  )
}
