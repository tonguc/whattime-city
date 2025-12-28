'use client'

/**
 * Meeting Planner Client Component
 * Interactive tool with URL sync and smart compromise
 */

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { City, cities } from '@/lib/cities'
import { useToolsTheme } from '@/lib/useToolsTheme'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'
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
}

export default function MeetingPlannerClient({ initialCity1, initialCity2 }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const { theme, isLight } = useToolsTheme()
  
  const [selectedCities, setSelectedCities] = useState<City[]>([
    initialCity1,
    initialCity2,
    cities.find(c => c.city === 'Tokyo') || cities[2]
  ])
  
  const [currentTime, setCurrentTime] = useState(new Date())
  
  // Prevent infinite loop with ref
  const isInitialMount = useRef(true)

  // Sync URL when first two cities change (FIXED: with safety checks)
  useEffect(() => {
    // Skip on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    // Safety check: both cities must exist
    if (!selectedCities[0] || !selectedCities[1]) {
      return
    }

    const newUrl = `/meeting/${normalizeCityPair(selectedCities[0].slug, selectedCities[1].slug)}/`
    
    // Only update if URL actually changed
    if (pathname !== newUrl) {
      router.push(newUrl, { scroll: false })
    }
  }, [selectedCities[0]?.slug, selectedCities[1]?.slug, router, pathname])

  // Check if hour is within working hours (9-17)
  const isWorkingHour = (hour: number) => hour >= 9 && hour <= 17

  // Get local hour for a city
  const getLocalHour = (city: City, utcHour: number) => {
    const now = new Date()
    now.setUTCHours(utcHour, 0, 0, 0)
    const localTime = new Date(now.toLocaleString('en-US', { timeZone: city.timezone }))
    return localTime.getHours()
  }

  // Check for business hours overlap (SAFE: with null checks)
  const hasOverlap = selectedCities[0] && selectedCities[1] 
    ? hasBusinessHoursOverlap(selectedCities[0], selectedCities[1])
    : false
  
  const bestSlots = !hasOverlap && selectedCities[0] && selectedCities[1]
    ? findBestCompromise(selectedCities[0], selectedCities[1]) 
    : []

  return (
    <>
      {/* Mini Navigation */}
      <ToolsMiniNav isLight={isLight} theme={theme} />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Meeting Planner{selectedCities[0] && selectedCities[1] ? `: ${selectedCities[0].city} ↔ ${selectedCities[1].city}` : ''}
          </h1>
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Find the best time for meetings across time zones
          </p>
        </div>

        {/* City Selectors */}
        <div className={`rounded-2xl p-6 mb-8 backdrop-blur-xl border ${
          isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
        }`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {selectedCities.map((city, index) => (
              <div key={index}>
                <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {index === 0 ? '🏢' : index === 1 ? '🌍' : '➕'} Participant {index + 1}
                </label>
                <select
                  value={city.city}
                  onChange={(e) => {
                    const newCities = [...selectedCities]
                    newCities[index] = cities.find(c => c.city === e.target.value) || cities[0]
                    setSelectedCities(newCities)
                  }}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isLight 
                      ? 'bg-white border-slate-200 text-slate-800' 
                      : 'bg-slate-700 border-slate-600 text-white'
                  }`}
                >
                  {cities.map(c => (
                    <option key={c.city} value={c.city}>{c.city}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className={`text-xs mb-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Hours (24h format) — Green = Working hours overlap
              </div>
              {selectedCities.map((city, cityIndex) => (
                <div key={cityIndex} className="flex items-center gap-2 mb-2">
                  <div className={`w-24 text-sm truncate ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {city.city}
                  </div>
                  <div className="flex-1 flex gap-0.5">
                    {Array.from({ length: 24 }, (_, hour) => {
                      const cityDate = new Date(currentTime.toLocaleString('en-US', { timeZone: city.timezone }))
                      const adjustedHour = (hour + cityDate.getHours() - new Date().getHours() + 24) % 24
                      const isWorking = isWorkingHour(adjustedHour)
                      const allWorking = selectedCities.every(c => {
                        const cDate = new Date(currentTime.toLocaleString('en-US', { timeZone: c.timezone }))
                        const cHour = (hour + cDate.getHours() - new Date().getHours() + 24) % 24
                        return isWorkingHour(cHour)
                      })
                      
                      return (
                        <div
                          key={hour}
                          className={`flex-1 h-8 rounded-sm flex items-center justify-center text-xs ${
                            allWorking 
                              ? 'bg-green-500 text-white' 
                              : isWorking 
                                ? isLight ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/50 text-blue-300'
                                : isLight ? 'bg-slate-100 text-slate-400' : 'bg-slate-700/50 text-slate-500'
                          }`}
                          title={`${adjustedHour}:00`}
                        >
                          {hour % 6 === 0 ? hour : ''}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Compromise or Success Message */}
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

          {/* Share Buttons */}
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

        {/* Interactive Time Slider */}
        <div className="mb-8">
          <TimeSlider 
            isLight={isLight} 
            initialCities={selectedCities}
            onCitiesChange={(newCities) => setSelectedCities(newCities)}
          />
        </div>

        {/* Related Tools */}
        <section className={`rounded-2xl p-6 mb-8 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/tools/converter" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Time Converter</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Quick conversions</div>
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
        </section>
      </div>

      {/* Footer */}
      <Footer isLight={isLight} />
    </>
  )
}
