'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { City } from '@/lib/cities'
import TimeSlider from '@/components/TimeSlider'
import SmartCompromise from './SmartCompromise'
import ShareButtons from './ShareButtons'
import { 
  findBestCompromise, 
  hasBusinessHoursOverlap,
  normalizeCityPair 
} from '@/lib/meetingPlanner'

interface Props {
  initialCity1: City
  initialCity2: City
  isLight: boolean
  theme: any
}

export default function MeetingPlannerClient({ initialCity1, initialCity2, isLight, theme }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  
  // Only 2 cities by default (no Tokyo!)
  const [selectedCities, setSelectedCities] = useState<City[]>([
    initialCity1,
    initialCity2
  ])
  
  // Track if we've done initial mount
  const hasMounted = useRef(false)
  
  // Sync URL ONLY when cities actually change (not on initial mount)
  useEffect(() => {
    // Skip initial mount
    if (!hasMounted.current) {
      hasMounted.current = true
      return
    }

    // Safety: both cities must exist
    if (!selectedCities[0] || !selectedCities[1]) {
      return
    }

    const newUrl = `/meeting/${normalizeCityPair(selectedCities[0].slug, selectedCities[1].slug)}/`
    
    // Only update if URL actually different
    if (pathname !== newUrl) {
      router.push(newUrl, { scroll: false })
    }
  }, [selectedCities[0]?.slug, selectedCities[1]?.slug, pathname, router])

  // Safe calculations with null checks
  const hasOverlap = selectedCities[0] && selectedCities[1] 
    ? hasBusinessHoursOverlap(selectedCities[0], selectedCities[1])
    : false
  
  const bestSlots = !hasOverlap && selectedCities[0] && selectedCities[1]
    ? findBestCompromise(selectedCities[0], selectedCities[1]) 
    : []

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center mb-8">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
          Meeting Planner{selectedCities[0] && selectedCities[1] ? `: ${selectedCities[0].city} ↔ ${selectedCities[1].city}` : ''}
        </h1>
        <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
          Find the best time for meetings across time zones
        </p>
      </div>

      {/* Interactive Time Slider */}
      <div className={`rounded-2xl p-6 backdrop-blur-xl border ${
        isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
      }`}>
        <TimeSlider 
          isLight={isLight}
          initialCities={selectedCities}
          onCitiesChange={(cities) => {
            // Meeting planner URL supports only 2 cities
            setSelectedCities(cities.slice(0, 2))
          }}
        />

        {/* Smart Compromise or Success */}
        {selectedCities[0] && selectedCities[1] && (
          <>
            {!hasOverlap ? (
              <div className="mt-6">
                <SmartCompromise 
                  city1={selectedCities[0]} 
                  city2={selectedCities[1]}
                  slots={bestSlots}
                  isLight={isLight}
                />
              </div>
            ) : (
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span className={isLight ? 'text-green-700' : 'text-green-400'}>
                    Perfect! Business hours overlap found.
                  </span>
                </div>
              </div>
            )}
          </>
        )}

        {/* Share Buttons (only if 2+ cities) */}
        {selectedCities[0] && selectedCities[1] && (
          <div className="mt-6">
            <ShareButtons 
              city1={selectedCities[0]} 
              city2={selectedCities[1]}
              isLight={isLight}
            />
          </div>
        )}
      </div>

      {/* Related Tools */}
      <div className={`rounded-2xl p-6 backdrop-blur-xl border ${
        isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
      }`}>
        <h2 className={`text-xl font-bold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
          Related Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/tools/converter" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
            isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
          }`}>
            <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Time Converter</div>
            <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Convert times instantly</div>
          </Link>
          <Link href="/tools/event-time" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
            isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
          }`}>
            <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Event Time</div>
            <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Share event times</div>
          </Link>
          {selectedCities[0] && selectedCities[1] ? (
            <Link href={`/time/${selectedCities[0].slug}/${selectedCities[1].slug}/`} className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Time Comparison</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Side-by-side times</div>
            </Link>
          ) : (
            <div className={`p-4 rounded-xl opacity-50 ${
              isLight ? 'bg-white/60' : 'bg-slate-700/60'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Time Comparison</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Select 2 cities first</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
