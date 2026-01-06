'use client'

import { useEffect, useState } from 'react'
import { useCityContext } from '@/lib/CityContext'
import ScrollFAB, { ScrollSection } from './ScrollFAB'

// =============================================================================
// GLOBAL SCROLL FAB WRAPPER
// =============================================================================
// Automatically integrates with CityContext theme and detects page sections
// Add this component once in layout.tsx for platform-wide scroll navigation
// =============================================================================

interface GlobalScrollFABProps {
  /** Override automatic section detection with custom sections */
  sections?: ScrollSection[]
  /** Force enable/disable regardless of page length */
  mode?: 'auto' | 'disabled' | 'forced'
}

export default function GlobalScrollFAB({ 
  sections: customSections,
  mode = 'auto' 
}: GlobalScrollFABProps) {
  const { isLight } = useCityContext()
  const [sections, setSections] = useState<ScrollSection[]>([])
  const [mounted, setMounted] = useState(false)

  // Ensure client-side only rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // ==========================================================================
  // AUTO-DETECT SECTIONS FROM PAGE STRUCTURE
  // ==========================================================================
  // Looks for: h2[id], section[id], [data-scroll-section]
  // Priority: data-scroll-section > h2 > section
  // ==========================================================================
  useEffect(() => {
    if (!mounted || customSections) return

    const detectSections = () => {
      const detected: ScrollSection[] = []
      
      // Priority 1: Elements with data-scroll-section attribute
      const markedSections = document.querySelectorAll('[data-scroll-section]')
      if (markedSections.length > 0) {
        markedSections.forEach((el) => {
          const id = el.getAttribute('id')
          const label = el.getAttribute('data-scroll-label') || el.textContent?.trim().slice(0, 40)
          const icon = el.getAttribute('data-scroll-icon')
          
          if (id && label) {
            detected.push({ id, label, icon: icon || undefined })
          }
        })
        
        if (detected.length >= 2) {
          setSections(detected)
          return
        }
      }

      // Priority 2: H2 headings with IDs
      const headings = document.querySelectorAll('h2[id]')
      headings.forEach((el) => {
        const id = el.getAttribute('id')
        if (id) {
          // Extract emoji if present at start (simplified check)
          const text = el.textContent?.trim() || id
          // Check if first 2 chars might be an emoji (emoji are often 2+ code units)
          const firstTwo = text.slice(0, 2)
          // Simple check: if char code is high (surrogate pair) or known emoji range
          const charCode = text.charCodeAt(0)
          const isEmoji = charCode > 0x1F00 || (charCode >= 0xD800 && charCode <= 0xDFFF)
          const icon = isEmoji ? firstTwo.trim() : undefined
          const label = isEmoji ? text.slice(2).trim().slice(0, 40) : text.slice(0, 40)
          
          detected.push({ id, label, icon })
        }
      })

      // Priority 3: Section elements with IDs (if no h2s found)
      if (detected.length < 2) {
        const sectionElements = document.querySelectorAll('section[id]')
        sectionElements.forEach((el) => {
          const id = el.getAttribute('id')
          if (id && !detected.some(d => d.id === id)) {
            detected.push({ 
              id, 
              label: id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
              icon: undefined 
            })
          }
        })
      }

      setSections(detected)
    }

    // Initial detection
    detectSections()

    // Re-detect after potential dynamic content loads
    const timeout = setTimeout(detectSections, 500)

    // Watch for DOM changes (SPA navigation)
    const observer = new MutationObserver(() => {
      setTimeout(detectSections, 100)
    })

    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    })

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [mounted, customSections])

  if (!mounted) return null

  return (
    <ScrollFAB
      sections={customSections || sections}
      mode={mode}
      isLight={isLight}
    />
  )
}
