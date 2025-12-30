'use client'

/**
 * Meeting Planner Client Component - HOTFIX V3
 * Uses global user theme from CityContext (user's location)
 * NOT the selected cities' time zones
 */

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import TimeSlider from '@/components/TimeSlider'

interface Props {
  initialCities?: City[]
  // These props are now ignored - we use CityContext for consistent theme
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
  initialCities = []
}: Props) {
  const router = useRouter()
  const pathname = usePathname()
  
  // ALWAYS use global CityContext theme (based on USER's location, not selected cities)
  const { theme, isLight } = useCityContext()
  
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

    // DEBUG: Log what we're working with
    console.log('=== MeetingPlannerClient URL Update ===')
    console.log('selectedCities:', selectedCities)
    console.log('selectedCities.length:', selectedCities.length)
    if (selectedCities.length > 0) {
      console.log('First city object:', selectedCities[0])
      console.log('First city slug:', selectedCities[0]?.slug)
      console.log('First city name:', selectedCities[0]?.city)
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
      const slug = selectedCities[0].slug
      console.log('Single city - using slug:', slug)
      const newUrl = `/meeting/${slug}`
      console.log('New URL:', newUrl)
      if (pathname !== newUrl) {
        router.push(newUrl, { scroll: false })
      }
      return
    }

    // 2+ cities: /meeting/berlin-vs-istanbul (alphabetical)
    const slugs = selectedCities.map(c => {
      console.log('Mapping city:', c, '-> slug:', c.slug)
      return c.slug
    })
    console.log('All slugs:', slugs)
    const normalized = [...slugs].sort().join('-vs-')
    console.log('Normalized URL part:', normalized)
    const newUrl = `/meeting/${normalized}/`
    
    if (pathname !== newUrl) {
      router.push(newUrl, { scroll: false })
    }
  }, [selectedCities, router, pathname])

  return (
    <>
      {/* Hero */}
      <div className="text-center mb-8">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.text}`}>
          {selectedCities.length === 0
            ? 'Meeting Planner: Find Best Time Across Time Zones'
            : selectedCities.length === 1
              ? `Best Time to Call ${selectedCities[0].city}`
              : `Meeting Planner: Find Overlap Hours for ${selectedCities.map(c => c.city).join(', ').replace(/, ([^,]*)$/, ' & $1')}`
          }
        </h1>
        <p className={`text-lg ${theme.textMuted}`}>
          {selectedCities.length === 1
            ? `Current time and business hours in ${selectedCities[0].city}`
            : 'Compare business hours and schedule calls across time zones'
          }
        </p>
      </div>

      {/* Interactive Time Slider - uses isLight only, no themeColors to prevent city-based changes */}
      <div className="mb-8">
        <TimeSlider 
          isLight={isLight} 
          initialCities={selectedCities}
          onCitiesChange={(newCities) => setSelectedCities(newCities)}
        />
      </div>
    </>
  )
}
