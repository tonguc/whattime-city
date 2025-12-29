'use client'

import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { City, cities, searchCities } from '@/lib/cities'

interface TimeSliderProps {
  isLight: boolean
  initialCities?: City[]
  onCitiesChange?: (cities: City[]) => void
  themeColors?: {
    bg: string
    card: string
    text: string
    textMuted: string
  }
}

// Get time in a specific timezone
const getTimeInTimezone = (date: Date, timezone: string): Date => {
  const str = date.toLocaleString('en-US', { timeZone: timezone })
  return new Date(str)
}

// Format hour for display
const formatHour = (hour: number, use12h: boolean = false): string => {
  if (use12h) {
    const h = hour % 12 || 12
    const ampm = hour < 12 ? 'AM' : 'PM'
    return `${h}${ampm}`
  }
  return `${hour.toString().padStart(2, '0')}:00`
}

// Check if hour is business hours (9-17)
const isBusinessHour = (hour: number): boolean => hour >= 9 && hour < 17

// Check if hour is night (22-6)
const isNightHour = (hour: number): boolean => hour >= 22 || hour < 6

export default function TimeSlider({ isLight, initialCities = [], onCitiesChange, themeColors }: TimeSliderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedCities, setSelectedCities] = useState<City[]>(initialCities)
  const [baseTime, setBaseTime] = useState<Date>(new Date())
  const [offsetHours, setOffsetHours] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<City[]>([])
  const [showSearch, setShowSearch] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef(0)
  const dragStartOffset = useRef(0)
  const searchRef = useRef<HTMLDivElement>(null)

  // Update base time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        setBaseTime(new Date())
      }
    }, 60000)
    return () => clearInterval(timer)
  }, [isDragging])

  // Search cities
  useEffect(() => {
    if (searchQuery.length >= 1) {
      const results = searchCities(searchQuery)
        .filter(c => !selectedCities.find(sc => sc.slug === c.slug))
        .slice(0, 6)
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchQuery, selectedCities])

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearch(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Add city
  const addCity = (city: City) => {
    if (selectedCities.length < 6) {
      const newCities = [...selectedCities, city]
      setSelectedCities(newCities)
      onCitiesChange?.(newCities)
      setSearchQuery('')
      setShowSearch(false)
    }
  }

  // Remove city
  const removeCity = (slug: string) => {
    const newCities = selectedCities.filter(c => c.slug !== slug)
    setSelectedCities(newCities)
    onCitiesChange?.(newCities)
  }

  // Get adjusted time for a city
  const getAdjustedTime = useCallback((city: City): Date => {
    const adjusted = new Date(baseTime.getTime() + offsetHours * 60 * 60 * 1000)
    return getTimeInTimezone(adjusted, city.timezone)
  }, [baseTime, offsetHours])

  // Handle drag
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    dragStartX.current = clientX
    dragStartOffset.current = offsetHours
  }

  const handleMouseMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging || !sliderRef.current) return
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const rect = sliderRef.current.getBoundingClientRect()
    const deltaX = clientX - dragStartX.current
    const hoursPerPixel = 24 / rect.width
    const newOffset = dragStartOffset.current + deltaX * hoursPerPixel
    
    // Limit to ±24 hours
    setOffsetHours(Math.max(-24, Math.min(24, newOffset)))
  }, [isDragging])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleMouseMove)
      window.addEventListener('touchend', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleMouseMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  // Reset to now
  const resetToNow = () => {
    setOffsetHours(0)
    setBaseTime(new Date())
    
    // Navigate to default meeting URL with current cities
    if (selectedCities.length >= 2) {
      const slugs = [selectedCities[0].slug, selectedCities[1].slug].sort()
      router.push(`/meeting/${slugs.join('-vs-')}/`)
    } else if (selectedCities.length === 1) {
      router.push(`/meeting/${selectedCities[0].slug}`)
    } else {
      router.push('/meeting')
    }
  }

  // Calculate overlap hours (memoized for performance)
  const overlapHours = useMemo(() => {
    if (selectedCities.length < 2) return []
    
    const overlap: number[] = []
    for (let h = 0; h < 24; h++) {
      const allInBusiness = selectedCities.every(city => {
        const time = getAdjustedTime(city)
        const cityHour = (time.getHours() + h) % 24
        return isBusinessHour(cityHour)
      })
      if (allInBusiness) overlap.push(h)
    }
    return overlap
  }, [selectedCities, offsetHours, baseTime]) // Re-calculate only when these change

  return (
    <div className={`rounded-2xl p-4 md:p-6 backdrop-blur-xl border ${themeColors ? themeColors.card : isLight ? 'bg-white/80 border-white/50' : 'bg-slate-800/80 border-slate-700/50'}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h3 className={`text-lg font-bold ${themeColors ? themeColors.text : isLight ? 'text-slate-800' : 'text-white'}`}>
            ⏰ Time Slider
          </h3>
          <p className={`text-sm ${themeColors ? themeColors.textMuted : isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Drag to compare times • Find meeting overlap
          </p>
        </div>
        
        {/* Add City */}
        <div className="relative" ref={searchRef}>
          <button
            onClick={() => setShowSearch(!showSearch)}
            disabled={selectedCities.length >= 6}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedCities.length >= 6
                ? 'opacity-50 cursor-not-allowed'
                : isLight
                  ? 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                  : 'bg-blue-900/50 hover:bg-blue-800/50 text-blue-300'
            }`}
          >
            + Add City ({selectedCities.length}/6)
          </button>
          
          {showSearch && (
            <div className={`fixed right-4 top-20 w-72 rounded-xl shadow-2xl border p-3 z-[9999] ${themeColors ? themeColors.card : isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'}`}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city..."
                autoFocus
                className={`w-full px-3 py-2 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-blue-500 ${
                  themeColors 
                    ? `${themeColors.card} ${themeColors.text}`
                    : isLight 
                      ? 'bg-slate-50 border-slate-200 text-slate-800' 
                      : 'bg-slate-900 border-slate-700 text-white'
                }`}
                style={{ fontSize: '16px' }}
              />
              {searchResults.length > 0 && (
                <div className="mt-2 max-h-48 overflow-y-auto">
                  {searchResults.map(city => (
                    <button
                      key={city.slug}
                      onClick={() => addCity(city)}
                      className={`w-full px-3 py-2 text-left text-sm rounded-lg ${
                        themeColors 
                          ? 'hover:bg-black/10'
                          : isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'
                      }`}
                    >
                      <span className={themeColors ? themeColors.text : isLight ? 'text-slate-800' : 'text-white'}>{city.city}</span>
                      <span className={`ml-2 ${themeColors ? themeColors.textMuted : isLight ? 'text-slate-500' : 'text-slate-400'}`}>{city.country}</span>
                    </button>
                  ))}
                </div>
              )}
              {searchQuery && searchResults.length === 0 && (
                <p className={`text-sm mt-2 ${themeColors ? themeColors.textMuted : isLight ? 'text-slate-500' : 'text-slate-400'}`}>No cities found</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Selected Cities Tags */}
      {selectedCities.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedCities.map((city, idx) => {
            const time = getAdjustedTime(city)
            const colors = [
              'bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 
              'bg-orange-500', 'bg-pink-500', 'bg-cyan-500'
            ]
            return (
              <div
                key={city.slug}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-sm ${colors[idx % colors.length]}`}
              >
                <span className="font-medium">{city.city}</span>
                <span className="opacity-80">
                  {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                </span>
                <button
                  onClick={() => removeCity(city.slug)}
                  className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )
          })}
        </div>
      )}

      {/* Time Slider */}
      {selectedCities.length > 0 ? (
        <div className="space-y-3">
          {selectedCities.map((city, idx) => {
            const time = getAdjustedTime(city)
            const currentHour = time.getHours()
            const colors = [
              { bar: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600' },
              { bar: 'bg-emerald-500', light: 'bg-emerald-100', text: 'text-emerald-600' },
              { bar: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-600' },
              { bar: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-600' },
              { bar: 'bg-pink-500', light: 'bg-pink-100', text: 'text-pink-600' },
              { bar: 'bg-cyan-500', light: 'bg-cyan-100', text: 'text-cyan-600' },
            ]
            const color = colors[idx % colors.length]

            return (
              <div key={city.slug} className="relative">
                {/* City Label */}
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-medium ${themeColors ? themeColors.text : isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {city.city}
                  </span>
                  <span className={`text-lg font-bold ${color.text} ${!isLight && 'brightness-150'}`}>
                    {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                  </span>
                </div>

                {/* Timeline Bar */}
                <div
                  ref={idx === 0 ? sliderRef : undefined}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleMouseDown}
                  className={`relative h-10 rounded-lg cursor-grab active:cursor-grabbing overflow-hidden ${isLight ? 'bg-slate-100' : 'bg-slate-700/50'}`}
                >
                  {/* Hour blocks */}
                  <div className="absolute inset-0 flex">
                    {Array.from({ length: 24 }, (_, h) => {
                      const hour = (currentHour + h - 12 + 24) % 24
                      const isBusiness = isBusinessHour(hour)
                      const isNight = isNightHour(hour)
                      const isCurrent = h === 12

                      return (
                        <div
                          key={h}
                          className={`flex-1 border-r ${isLight ? 'border-slate-200' : 'border-slate-600/50'} flex items-center justify-center relative ${
                            isCurrent
                              ? color.bar + ' text-white'
                              : isBusiness
                                ? isLight ? 'bg-green-50' : 'bg-green-900/20'
                                : isNight
                                  ? isLight ? 'bg-slate-200' : 'bg-slate-800'
                                  : ''
                          }`}
                        >
                          <span className={`text-[10px] font-medium ${
                            isCurrent ? 'text-white' : isLight ? 'text-slate-500' : 'text-slate-400'
                          }`}>
                            {formatHour(hour, true)}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Overlap Indicator */}
          {selectedCities.length >= 2 && (
            <div className={`mt-4 p-3 rounded-xl ${
              overlapHours.length > 0
                ? isLight ? 'bg-green-50 border border-green-200' : 'bg-green-900/20 border border-green-800/50'
                : isLight ? 'bg-orange-50 border border-orange-200' : 'bg-orange-900/20 border border-orange-800/50'
            }`}>
              <div className="flex items-center gap-2">
                {overlapHours.length > 0 ? (
                  <svg className={`w-5 h-5 ${isLight ? 'text-green-600' : 'text-green-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className={`w-5 h-5 ${isLight ? 'text-orange-600' : 'text-orange-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )}
                <span className={`text-sm font-medium ${
                  overlapHours.length > 0
                    ? isLight ? 'text-green-700' : 'text-green-300'
                    : isLight ? 'text-orange-700' : 'text-orange-300'
                }`}>
                  {overlapHours.length > 0 
                    ? `${overlapHours.length} hours of business overlap found`
                    : 'No business hours overlap'
                  }
                </span>
              </div>
              {overlapHours.length > 0 && (
                <p className={`text-xs mt-1 ${
                  themeColors 
                    ? (themeColors.text.includes('white') ? 'text-green-400' : 'text-green-600')
                    : isLight ? 'text-green-600' : 'text-green-400'
                }`}>
                  Best meeting times: {overlapHours.slice(0, 4).map(h => formatHour((getAdjustedTime(selectedCities[0]).getHours() + h) % 24, true)).join(', ')}
                  {overlapHours.length > 4 && ` +${overlapHours.length - 4} more`}
                </p>
              )}
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-between pt-2">
            <div className={`text-xs ${themeColors ? themeColors.textMuted : isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {offsetHours !== 0 && (
                <span>
                  {offsetHours > 0 ? '+' : ''}{Math.round(offsetHours * 10) / 10}h from now
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={resetToNow}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105 ${
                themeColors
                  ? `${themeColors.card} ${themeColors.text} hover:brightness-95`
                  : isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
              }`}
            >
              Reset to Now
            </button>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className={`text-center py-8 ${themeColors ? themeColors.textMuted : isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-medium">Add cities to compare times</p>
          <p className="text-sm mt-1">Drag the timeline to find the best meeting time</p>
        </div>
      )}

      {/* Legend */}
      <div className={`flex flex-wrap items-center justify-center gap-4 mt-4 pt-4 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
        <div className="flex items-center gap-1.5 text-xs">
          <div className={`w-3 h-3 rounded ${isLight ? 'bg-green-100 border border-green-300' : 'bg-green-900/30 border border-green-700'}`}></div>
          <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Business hours (9-17)</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <div className={`w-3 h-3 rounded ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}></div>
          <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Night (22-6)</span>
        </div>
      </div>
    </div>
  )
}
