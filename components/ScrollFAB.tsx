'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

// =============================================================================
// SCROLL FAB - Dual Button Navigation Component
// =============================================================================
// Shows both UP and DOWN buttons based on scroll position
// - At top: only DOWN visible
// - In middle: both UP and DOWN visible
// - At bottom: only UP visible
// =============================================================================

export interface ScrollSection {
  id: string
  label: string
  icon?: string
}

interface ScrollFABProps {
  /** Array of sections to navigate between */
  sections?: ScrollSection[]
  /** Control mode: auto (detect long pages), disabled, forced */
  mode?: 'auto' | 'disabled' | 'forced'
  /** Theme awareness */
  isLight?: boolean
  /** Custom threshold for "long page" detection (default: 4) */
  viewportMultiplier?: number
  /** Minimum sections required for activation (default: 3) */
  minSections?: number
}

export default function ScrollFAB({
  sections = [],
  mode = 'auto',
  isLight = true,
  viewportMultiplier = 4,
  minSections = 3
}: ScrollFABProps) {
  const [showUp, setShowUp] = useState(false)
  const [showDown, setShowDown] = useState(false)
  const [isLongPage, setIsLongPage] = useState(false)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

  // ==========================================================================
  // LONG PAGE DETECTOR
  // ==========================================================================
  useEffect(() => {
    if (mode === 'disabled') {
      setIsLongPage(false)
      return
    }

    if (mode === 'forced') {
      setIsLongPage(true)
      return
    }

    const checkPageLength = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight
      const hasSufficientSections = sections.length >= minSections
      const isLong = scrollHeight > viewportMultiplier * viewportHeight

      setIsLongPage(isLong || (hasSufficientSections && sections.length > 0))
    }

    checkPageLength()
    window.addEventListener('resize', checkPageLength)
    const timeout = setTimeout(checkPageLength, 1000)

    return () => {
      window.removeEventListener('resize', checkPageLength)
      clearTimeout(timeout)
    }
  }, [mode, sections.length, viewportMultiplier, minSections])

  // ==========================================================================
  // SECTION DETECTION - IntersectionObserver
  // ==========================================================================
  useEffect(() => {
    if (!isLongPage || sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex(s => s.id === entry.target.id)
            if (index !== -1) {
              setCurrentSectionIndex(index)
            }
          }
        })
      },
      {
        threshold: 0.4,
        rootMargin: '-20% 0px -40% 0px'
      }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections, isLongPage])

  // ==========================================================================
  // SCROLL POSITION TRACKING
  // ==========================================================================
  useEffect(() => {
    if (!isLongPage) {
      setShowUp(false)
      setShowDown(false)
      return
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight
      const maxScroll = scrollHeight - viewportHeight
      const scrollPercent = (scrollY / maxScroll) * 100

      // Show UP button after scrolling down 150px
      setShowUp(scrollY > 150)
      
      // Show DOWN button when not at bottom (with 100px buffer)
      setShowDown(scrollY < maxScroll - 100)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLongPage])

  // ==========================================================================
  // HAPTIC FEEDBACK
  // ==========================================================================
  const triggerHaptic = useCallback(() => {
    if ('vibrate' in navigator) {
      navigator.vibrate(12)
    }
  }, [])

  // ==========================================================================
  // SCROLL ACTIONS
  // ==========================================================================
  const scrollToTop = useCallback(() => {
    triggerHaptic()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [triggerHaptic])

  const scrollUp = useCallback(() => {
    triggerHaptic()
    
    if (sections.length > 0 && currentSectionIndex > 0) {
      // Go to previous section
      const prevSection = document.getElementById(sections[currentSectionIndex - 1].id)
      if (prevSection) {
        const offset = 100
        const y = prevSection.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top: y, behavior: 'smooth' })
        return
      }
    }
    
    // No sections or at first section - scroll up by 70% viewport
    window.scrollTo({ 
      top: Math.max(0, window.scrollY - window.innerHeight * 0.7), 
      behavior: 'smooth' 
    })
  }, [sections, currentSectionIndex, triggerHaptic])

  const scrollDown = useCallback(() => {
    triggerHaptic()
    
    if (sections.length > 0 && currentSectionIndex < sections.length - 1) {
      // Go to next section
      const nextSection = document.getElementById(sections[currentSectionIndex + 1].id)
      if (nextSection) {
        const offset = 100
        const y = nextSection.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top: y, behavior: 'smooth' })
        return
      }
    }
    
    // No sections or at last section - scroll down by 70% viewport
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo({ 
      top: Math.min(maxScroll, window.scrollY + window.innerHeight * 0.7), 
      behavior: 'smooth' 
    })
  }, [sections, currentSectionIndex, triggerHaptic])

  // ==========================================================================
  // RENDER CONDITIONS
  // ==========================================================================
  if (!isLongPage || (!showUp && !showDown)) {
    return null
  }

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // ==========================================================================
  // STYLES
  // ==========================================================================
  const buttonBase = `w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
    prefersReducedMotion ? '' : 'transition-all duration-200 ease-out'
  } active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2`
  
  const buttonLight = 'bg-slate-800 hover:bg-slate-700 text-white shadow-slate-800/20'
  const buttonDark = 'bg-white hover:bg-slate-100 text-slate-800 shadow-black/30'
  const buttonStyle = isLight ? buttonLight : buttonDark

  return (
    <div 
      className="fixed bottom-6 right-4 z-50 flex flex-col gap-2"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* UP Button */}
      {showUp && (
        <button
          onClick={scrollUp}
          onDoubleClick={scrollToTop}
          aria-label="Scroll up (double-click for top)"
          title="Tap: scroll up | Double-tap: go to top"
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
      )}

      {/* DOWN Button */}
      {showDown && (
        <button
          onClick={scrollDown}
          aria-label="Scroll down"
          title="Scroll down"
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
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      )}
    </div>
  )
}

// =============================================================================
// HOOK: useScrollSections (unchanged)
// =============================================================================
export function useScrollSections(selector: string = 'h2[id], section[id]'): ScrollSection[] {
  const [sections, setSections] = useState<ScrollSection[]>([])

  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    const detected: ScrollSection[] = []

    elements.forEach((el) => {
      const id = el.getAttribute('id')
      if (id) {
        detected.push({
          id,
          label: el.textContent?.trim().slice(0, 50) || id,
          icon: undefined
        })
      }
    })

    setSections(detected)
  }, [selector])

  return sections
}
