'use client'

/**
 * Meeting Planner Client Component - HOTFIX VERSION
 * Simplified: Only TimeSlider, no participant widget
 */

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'
import Footer from '@/components/Footer'
import TimeSlider from '@/components/TimeSlider'

interface Props {
  initialCities?: City[]
}

export default function MeetingPlannerClient({ initialCities = [] }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const { theme, isLight, text, textMuted, card } = useThemeClasses()
  
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

    if (selectedCities.length === 0) {
      router.push('/meeting')
    } else {
      const slugs = selectedCities.map(c => c.slug).join('-')
      router.push(`/meeting/${slugs}`)
    }
  }, [selectedCities, router])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${text}`}>
              Meeting Planner
            </h1>
            <p className={textMuted}>
              Find the best time to meet across time zones
            </p>
          </div>

          {/* TimeSlider */}
          {selectedCities.length > 0 && (
            <div className={`rounded-2xl p-6 ${card}`}>
              <TimeSlider
                initialCities={selectedCities}
                onCitiesChange={setSelectedCities}
              />
            </div>
          )}

          {/* Empty State */}
          {selectedCities.length === 0 && (
            <div className={`rounded-2xl p-8 text-center ${card}`}>
              <p className={textMuted}>
                Add cities to start planning your meeting
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
