'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ScrollToTop() {
  const { isLight } = useCityContext()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const buttonBase = `w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
    prefersReducedMotion ? '' : 'transition-all duration-200 ease-out'
  } active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2`

  const buttonStyle = isLight
    ? 'bg-slate-800 hover:bg-slate-700 text-white shadow-slate-800/20'
    : 'bg-white hover:bg-slate-100 text-slate-800 shadow-black/30'

  return (
    <div
      className="fixed bottom-6 right-4 z-50"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        title="Scroll to top"
        className={`${buttonBase} ${buttonStyle}`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  )
}
