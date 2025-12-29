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
  normalizeCities
} from '@/lib/meetingPlanner'

interface Props {
  initialCities: City[]  // Changed: support multiple cities
  isLight: boolean
  theme: any
}

export default function MeetingPlannerClient({ initialCities, isLight, theme }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  
  // Multiple cities support (2+)
  const [selectedCities, setSelectedCities] = useState<City[]>(initialCities)
  
  // Track if we've done initial mount
  const hasMounted = useRef(false)
  
  // Reset to default cities
  const handleReset = () => {
    router.push('/meeting/istanbul-vs-london')
  }
  
  // Sync URL when cities change (alfabetik sıralama ile)
  useEffect(() => {
    // Skip initial mount
    if (!hasMounted.current) {
      hasMounted.current = true
      return
    }

    // If all cities removed, go to default cities
    if (selectedCities.length < 2) {
      router.push('/meeting/istanbul-vs-london')
      return
    }

    // Alfabetik sıralama ile URL oluştur
    const slugs = selectedCities.map(c => c.slug)
    const newUrl = `/meeting/${normalizeCities(slugs)}/`
    
    // Only update if URL actually different
    if (pathname !== newUrl) {
      router.push(newUrl, { scroll: false })
    }
  }, [selectedCities, pathname, router])

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
            // Allow removing cities (URL sync will redirect if < 2)
            setSelectedCities(cities)
          }}
        />

        {/* Reset Button - After TimeSlider */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleReset}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
              isLight 
                ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                : 'bg-blue-600 hover:bg-blue-500 text-white'
            }`}
          >
            ↺ Reset to Now
          </button>
        </div>

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
