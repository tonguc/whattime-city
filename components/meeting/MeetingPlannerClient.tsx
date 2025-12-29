'use client'

/**
 * Meeting Planner Client Component - HOTFIX V2
 * Simplified: Only Hero + TimeSlider (no container, no footer)
 */

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { City } from '@/lib/cities'
import { useToolsTheme } from '@/lib/useToolsTheme'
import TimeSlider from '@/components/TimeSlider'

interface Props {
  initialCities?: City[]
  isLight?: boolean
  theme?: {
    accentBg: string
    accentBgLight: string
    accentText: string
    accentBorder: string
  }
  themeColors?: {
    bg: string
    card: string
    text: string
    textMuted: string
    accent: string
    accentBg: string
    accentBgLight: string
    accentText: string
    accentBorder: string
  }
}

export default function MeetingPlannerClient({ 
  initialCities = [], 
  isLight: isLightProp,
  theme: themeProp,
  themeColors
}: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const { theme: contextTheme, isLight: contextIsLight } = useToolsTheme()
  
  // Use provided props or fall back to context
  const theme = themeProp || contextTheme
  const isLight = isLightProp !== undefined ? isLightProp : contextIsLight
  
  const [selectedCities, setSelectedCities] = useState<City[]>(
    initialCities.length > 0 ? initialCities : []
  )
  
  // Prevent infinite loop with ref
  const isInitialMount = useRef(true)

  // Sync URL when cities change (supports 0, 1, 2+ cities)
  useEffect(() => {
    // Skip on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    // 0 cities: go to /meeting
    if (selectedCities.length === 0) {
      if (pathname !== '/meeting') {
        router.push('/meeting')
      }
      return
    }

    // 1 city: /meeting/berlin
    if (selectedCities.length === 1) {
      const newUrl = `/meeting/${selectedCities[0].slug}`
      if (pathname !== newUrl) {
        router.push(newUrl, { scroll: false })
      }
      return
    }

    // 2+ cities: /meeting/berlin-vs-istanbul (alphabetical)
    const slugs = selectedCities.map(c => c.slug)
    const normalized = slugs.sort().join('-vs-')
    const newUrl = `/meeting/${normalized}/`
    
    if (pathname !== newUrl) {
      router.push(newUrl, { scroll: false })
    }
  }, [selectedCities, router, pathname])

  return (
    <>
      {/* Hero */}
      <div className="text-center mb-8">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${themeColors ? themeColors.text : isLight ? 'text-slate-800' : 'text-white'}`}>
          {selectedCities.length === 0
            ? 'Meeting Planner: Find Best Time Across Time Zones'
            : selectedCities.length === 1
              ? `Best Time to Call ${selectedCities[0].city}`
              : `Meeting Planner: Find Overlap Hours for ${selectedCities.map(c => c.city).join(', ').replace(/, ([^,]*)$/, ' & $1')}`
          }
        </h1>
        <p className={`text-lg ${themeColors ? themeColors.textMuted : isLight ? 'text-slate-600' : 'text-slate-300'}`}>
          {selectedCities.length === 1
            ? `Current time and business hours in ${selectedCities[0].city}`
            : 'Compare business hours and schedule calls across time zones'
          }
        </p>
      </div>

      {/* Interactive Time Slider */}
      <div className="mb-8">
        <TimeSlider 
          isLight={isLight} 
          initialCities={selectedCities}
          onCitiesChange={(newCities) => setSelectedCities(newCities)}
          themeColors={themeColors}
        />
      </div>
    </>
  )
}
