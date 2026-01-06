'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

// =============================================================================
// SCROLL FAB - Global Context-Aware Navigation Component
// =============================================================================
// UX Intent: Reduce scroll effort, decrease bounce rate, minimize perceived complexity
// Pattern: Morphing FAB that changes action based on scroll position
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

type FABState = 'skip-intro' | 'next-section' | 'back-to-top' | 'hidden'

export default function ScrollFAB({
  sections = [],
  mode = 'auto',
  isLight = true,
  viewportMultiplier = 4,
  minSections = 3
}: ScrollFABProps) {
  const [fabState, setFabState] = useState<FABState>('hidden')
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [showLabel, setShowLabel] = useState(false)
  const [isLongPage, setIsLongPage] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const labelTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const hasSeenFAB = useRef(false)

  // ==========================================================================
  // LONG PAGE DETECTOR
  // ==========================================================================
  // Trigger: scrollHeight > 4 * viewportHeight && sectionCount >= minSections
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

      setIsLongPage(isLong && (hasSufficientSections || sections.length === 0))
    }

    checkPageLength()
    window.addEventListener('resize', checkPageLength)
    
    // Re-check after content might have loaded
    const timeout = setTimeout(checkPageLength, 1000)

    return () => {
      window.removeEventListener('resize', checkPageLength)
      clearTimeout(timeout)
    }
  }, [mode, sections.length, viewportMultiplier, minSections])

  // ==========================================================================
  // SECTION DETECTION - IntersectionObserver
  // ==========================================================================
  // UX-optimal settings:
  // - threshold: 0.4 (section 40% visible)
  // - rootMargin: -20% 0px -40% 0px (focus zone in upper-middle viewport)
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
  // SCROLL POSITION TRACKING & STATE DETERMINATION
  // ==========================================================================
  useEffect(() => {
    if (!isLongPage) {
      setIsVisible(false)
      return
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight
      const scrollPercent = (scrollY / (scrollHeight - viewportHeight)) * 100

      // Hide FAB at very top (< 200px scroll) - no need for navigation yet
      if (scrollY < 200) {
        setIsVisible(false)
        setFabState('hidden')
        return
      }

      setIsVisible(true)

      // Determine FAB state based on scroll position
      // Skip "skip-intro" state entirely if no sections - go straight to next/top logic
      if (scrollPercent < 15 && sections.length > 0) {
        // Only show "skip intro" if we have defined sections to skip to
        setFabState('skip-intro')
      } else if (scrollPercent < 80) {
        // Show "next section" or just "scroll down" if no sections
        setFabState('next-section')
      } else {
        // Near bottom - always show back to top
        setFabState('back-to-top')
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLongPage, sections.length])

  // ==========================================================================
  // FIRST-TIME LABEL LOGIC
  // ==========================================================================
  // Rule: Teach, but don't shout
  // - Only first 1-2 interactions
  // - Auto-dismiss after 3s
  // - Max width: 160px
  // ==========================================================================
  useEffect(() => {
    if (!isVisible || hasSeenFAB.current) return

    const seenCount = parseInt(localStorage.getItem('scrollFabSeenCount') || '0', 10)
    
    if (seenCount < 2) {
      setShowLabel(true)
      
      labelTimeoutRef.current = setTimeout(() => {
        setShowLabel(false)
        localStorage.setItem('scrollFabSeenCount', String(seenCount + 1))
        hasSeenFAB.current = true
      }, 3000)
    } else {
      hasSeenFAB.current = true
    }

    return () => {
      if (labelTimeoutRef.current) {
        clearTimeout(labelTimeoutRef.current)
      }
    }
  }, [isVisible])

  // ==========================================================================
  // HAPTIC FEEDBACK
  // ==========================================================================
  // Rules:
  // - Only on section jump or top jump (not every tap)
  // - iOS: light impact / Android: 10-15ms vibration
  // - Excessive haptic = toy feel = trust loss
  // ==========================================================================
  const triggerHaptic = useCallback(() => {
    if ('vibrate' in navigator) {
      navigator.vibrate(12) // 12ms - subtle
    }
  }, [])

  // ==========================================================================
  // SCROLL ACTIONS
  // ==========================================================================
  const scrollToTop = useCallback(() => {
    triggerHaptic()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [triggerHaptic])

  const scrollToFirstSection = useCallback(() => {
    if (sections.length > 0) {
      triggerHaptic()
      const firstSection = document.getElementById(sections[0].id)
      if (firstSection) {
        const offset = 100
        const y = firstSection.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    } else {
      // No sections defined - scroll down by viewport height
      triggerHaptic()
      window.scrollTo({ 
        top: window.innerHeight * 0.8, 
        behavior: 'smooth' 
      })
    }
  }, [sections, triggerHaptic])

  const scrollToNextSection = useCallback(() => {
    if (sections.length === 0) {
      // No sections - scroll down by half viewport
      triggerHaptic()
      window.scrollTo({ 
        top: window.scrollY + window.innerHeight * 0.7, 
        behavior: 'smooth' 
      })
      return
    }

    const nextIndex = Math.min(currentSectionIndex + 1, sections.length - 1)
    const nextSection = document.getElementById(sections[nextIndex].id)
    
    if (nextSection) {
      triggerHaptic()
      const offset = 100
      const y = nextSection.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [sections, currentSectionIndex, triggerHaptic])

  // ==========================================================================
  // ACTION HANDLER
  // ==========================================================================
  const handleClick = useCallback(() => {
    // Hide label on any click
    setShowLabel(false)
    
    switch (fabState) {
      case 'skip-intro':
        scrollToFirstSection()
        break
      case 'next-section':
        scrollToNextSection()
        break
      case 'back-to-top':
        scrollToTop()
        break
    }
  }, [fabState, scrollToFirstSection, scrollToNextSection, scrollToTop])

  // ==========================================================================
  // ACCESSIBILITY - Dynamic aria-label
  // ==========================================================================
  const getAriaLabel = (): string => {
    switch (fabState) {
      case 'skip-intro':
        return 'Skip introduction, scroll to main content'
      case 'next-section':
        return sections[currentSectionIndex + 1]
          ? `Go to next section: ${sections[currentSectionIndex + 1].label}`
          : 'Scroll to next section'
      case 'back-to-top':
        return 'Back to top of page'
      default:
        return 'Scroll navigation'
    }
  }

  const getLabel = (): string => {
    switch (fabState) {
      case 'skip-intro':
        return 'Skip intro'
      case 'next-section':
        return 'Next'
      case 'back-to-top':
        return 'Top'
      default:
        return ''
    }
  }

  // ==========================================================================
  // RENDER CONDITIONS
  // ==========================================================================
  if (!isLongPage || !isVisible || fabState === 'hidden') {
    return null
  }

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // ==========================================================================
  // STYLES
  // ==========================================================================
  const bgColor = isLight 
    ? 'bg-slate-800 hover:bg-slate-700 text-white' 
    : 'bg-white hover:bg-slate-100 text-slate-800'
  
  const shadowColor = isLight
    ? 'shadow-lg shadow-slate-800/20'
    : 'shadow-lg shadow-black/30'

  const labelBg = isLight
    ? 'bg-slate-800 text-white'
    : 'bg-white text-slate-800'

  return (
    <>
      {/* FAB Container */}
      <div 
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
        style={{ 
          // Thumb zone positioning for mobile
          marginBottom: 'env(safe-area-inset-bottom, 0px)' 
        }}
      >
        {/* First-time Label */}
        {showLabel && (
          <div 
            className={`
              ${labelBg} px-3 py-1.5 rounded-full text-sm font-medium
              max-w-[160px] truncate
              ${prefersReducedMotion ? '' : 'animate-fade-in'}
            `}
            role="tooltip"
          >
            {getLabel()}
          </div>
        )}

        {/* FAB Button */}
        <button
          onClick={handleClick}
          aria-label={getAriaLabel()}
          className={`
            w-14 h-14 rounded-full ${bgColor} ${shadowColor}
            flex items-center justify-center
            ${prefersReducedMotion ? '' : 'transition-all duration-200 ease-out'}
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
          `}
        >
          {/* Morphing Icon */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={prefersReducedMotion ? '' : 'transition-transform duration-200'}
            style={{
              transform: fabState === 'back-to-top' ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          >
            {/* Chevron Down (morphs to Up via rotation) */}
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      {/* Inline styles for animation (avoiding globals.css dependency) */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  )
}

// =============================================================================
// HOOK: useScrollSections
// =============================================================================
// Helper hook to automatically detect sections from page headings
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
