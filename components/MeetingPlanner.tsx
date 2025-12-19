'use client'

import { useState, useEffect, useRef } from 'react'
import { City, cities } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, Theme } from '@/lib/themes'
import TimeIcons from './TimeIcons'

interface MeetingPlannerProps {
  currentTheme: string
  themeData: Theme
  use12Hour: boolean
  isLight: boolean
}

interface CitySlot {
  city: City | null
  search: string
  showDropdown: boolean
}

interface DropdownPosition {
  top: number
  left: number
  width: number
}

export default function MeetingPlanner({ currentTheme, themeData, use12Hour, isLight }: MeetingPlannerProps) {
  const [slots, setSlots] = useState<CitySlot[]>([
    { city: null, search: '', showDropdown: false },
    { city: null, search: '', showDropdown: false },
    { city: null, search: '', showDropdown: false },
  ])
  const [time, setTime] = useState(new Date())
  const [shareLink, setShareLink] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [dropdownPositions, setDropdownPositions] = useState<DropdownPosition[]>([
    { top: 0, left: 0, width: 0 },
    { top: 0, left: 0, width: 0 },
    { top: 0, left: 0, width: 0 },
  ])
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRefs = useRef<(HTMLDivElement | null)[]>([null, null, null])

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000) // Update every minute
    return () => clearInterval(timer)
  }, [])

  // Update dropdown positions
  useEffect(() => {
    const updatePositions = () => {
      const newPositions = inputRefs.current.map((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          return {
            top: rect.bottom + window.scrollY + 4,
            left: rect.left + window.scrollX,
            width: rect.width
          }
        }
        return { top: 0, left: 0, width: 0 }
      })
      setDropdownPositions(newPositions)
    }
    
    updatePositions()
    window.addEventListener('scroll', updatePositions, true)
    window.addEventListener('resize', updatePositions)
    return () => {
      window.removeEventListener('scroll', updatePositions, true)
      window.removeEventListener('resize', updatePositions)
    }
  }, [slots])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setSlots(prev => prev.map(s => ({ ...s, showDropdown: false })))
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const updateSlot = (index: number, updates: Partial<CitySlot>) => {
    setSlots(prev => prev.map((s, i) => i === index ? { ...s, ...updates } : s))
  }

  const getFilteredCities = (search: string) => {
    return cities.filter(c =>
      c.city.toLowerCase().includes(search.toLowerCase()) ||
      c.country.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 6)
  }

  const getCityTime = (city: City) => {
    const localTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
    return localTime
  }

  const getUTCOffset = (city: City): number => {
    const now = new Date()
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000
    const cityTime = new Date(now.toLocaleString('en-US', { timeZone: city.timezone }))
    const diff = (cityTime.getTime() - utcTime) / 3600000
    return Math.round(diff)
  }

  // Calculate working hours in UTC for each city
  const getWorkingHoursUTC = (city: City): { start: number; end: number } => {
    const offset = getUTCOffset(city)
    let start = (9 - offset + 24) % 24
    let end = (17 - offset + 24) % 24
    return { start, end }
  }

  // Find overlap of working hours
  const findOverlap = (): { start: number; end: number } | null => {
    const selectedCities = slots.filter(s => s.city).map(s => s.city!)
    if (selectedCities.length < 2) return null

    const workingHours = selectedCities.map(c => getWorkingHoursUTC(c))
    
    // Find common overlap
    let overlapStart = 0
    let overlapEnd = 24
    let hasOverlap = false

    // Simple overlap calculation for non-wrapping hours
    for (const wh of workingHours) {
      if (wh.start < wh.end) {
        // Normal range (e.g., 9-17)
        overlapStart = Math.max(overlapStart, wh.start)
        overlapEnd = Math.min(overlapEnd, wh.end)
      }
    }

    if (overlapStart < overlapEnd) {
      hasOverlap = true
    }

    if (!hasOverlap || overlapEnd - overlapStart < 1) return null

    return { start: overlapStart, end: overlapEnd }
  }

  // Convert UTC hour to city local hour
  const utcToLocal = (utcHour: number, city: City): number => {
    const offset = getUTCOffset(city)
    return (utcHour + offset + 24) % 24
  }

  const formatHour = (hour: number): string => {
    if (use12Hour) {
      const h = hour % 12 || 12
      const period = hour >= 12 ? 'PM' : 'AM'
      return `${h}${period}`
    }
    return `${hour.toString().padStart(2, '0')}:00`
  }

  // Generate shareable link
  const generateShareLink = () => {
    const citySlugs = slots
      .filter(s => s.city)
      .map(s => s.city!.slug)
      .join(',')
    
    if (citySlugs) {
      const link = `${window.location.origin}/meet?c=${citySlugs}`
      setShareLink(link)
      return link
    }
    return null
  }

  // Copy share link
  const copyShareLink = async () => {
    const link = generateShareLink()
    if (link) {
      try {
        await navigator.clipboard.writeText(link)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    }
  }

  const selectedCities = slots.filter(s => s.city).map(s => s.city!)
  const overlap = findOverlap()

  // Render dropdown content for a slot
  const renderDropdownContent = (slotIndex: number, search: string) => (
    <div className={`rounded-xl border shadow-lg overflow-hidden ${
      isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'
    }`}>
      {getFilteredCities(search).map(city => (
        <button
          key={city.slug}
          onClick={() => updateSlot(slotIndex, { city, search: '', showDropdown: false })}
          className={`w-full px-4 py-2.5 flex items-center justify-between text-left ${
            isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700'
          }`}
        >
          <div>
            <span className={`font-medium ${themeData.text}`}>{city.city}</span>
            <span className={`text-sm ml-2 ${themeData.textMuted}`}>{city.country}</span>
          </div>
        </button>
      ))}
    </div>
  )

  return (
    <>
      <div ref={containerRef} className={`rounded-3xl p-6 backdrop-blur-xl border ${themeData.card} mb-4`}>
        <h3 className={`text-xl font-semibold ${themeData.text} mb-4 flex items-center gap-2`}>
          <svg className={`w-5 h-5 ${isLight ? 'text-cyan-500' : 'text-cyan-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <path d="M16 2v4M8 2v4M3 10h18"/>
            <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
          </svg>
          Meeting Planner
        </h3>

        {/* City Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {slots.map((slot, index) => (
            <div key={index} className="relative">
              <label className={`text-xs font-medium mb-1.5 block ${themeData.textMuted}`}>
                City {index + 1}{index === 2 ? ' (optional)' : ''}
              </label>
              <div className="relative" ref={el => { inputRefs.current[index] = el }}>
                <input
                  type="text"
                  value={slot.city ? slot.city.city : slot.search}
                  onChange={(e) => {
                    updateSlot(index, { search: e.target.value, city: null, showDropdown: true })
                  }}
                  onFocus={() => updateSlot(index, { showDropdown: true })}
                  placeholder="Select a city..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm ${
                    isLight
                      ? 'bg-white/80 border-slate-200 text-slate-800 placeholder:text-slate-400'
                      : 'bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500'
                  } outline-none focus:ring-2 focus:ring-cyan-500/30`}
                />
                {slot.city && (
                  <button
                    onClick={() => updateSlot(index, { city: null, search: '' })}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 ${themeData.textMuted} hover:opacity-70`}
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Selected city current time */}
              {slot.city && (
                <p className={`mt-1.5 text-xs ${themeData.textMuted}`}>
                  Current: {formatHour(getCityTime(slot.city).getHours())}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Visualization */}
        {selectedCities.length >= 2 && (
          <div className={`rounded-2xl p-4 mb-4 ${isLight ? 'bg-slate-100/80' : 'bg-slate-800/60'}`}>
            <p className={`text-xs font-medium mb-3 ${themeData.textMuted}`}>Working Hours Timeline (09:00–17:00 local)</p>
            
            {/* Hour markers */}
            <div className="flex justify-between mb-1 px-20">
              {[0, 6, 12, 18, 24].map(h => (
                <span key={h} className={`text-xs ${themeData.textMuted} opacity-50`}>{h}</span>
              ))}
            </div>

            {/* Timeline bars */}
            <div className="space-y-3">
              {selectedCities.map((city, idx) => {
                const offset = getUTCOffset(city)
                // Working hours 9-17 local time
                const workStart = 9
                const workEnd = 17
                
                // Convert to percentage position (0-24 hours = 0-100%)
                const startPercent = (workStart / 24) * 100
                const widthPercent = ((workEnd - workStart) / 24) * 100

                return (
                  <div key={city.slug} className="flex items-center gap-3">
                    <span className={`text-sm font-medium w-16 truncate ${themeData.text}`}>
                      {city.city}
                    </span>
                    <div className={`flex-1 h-6 rounded-full relative ${isLight ? 'bg-slate-200' : 'bg-slate-700'}`}>
                      {/* Hour markers */}
                      {[6, 12, 18].map(h => (
                        <div
                          key={h}
                          className={`absolute top-0 bottom-0 w-px ${isLight ? 'bg-slate-300' : 'bg-slate-600'}`}
                          style={{ left: `${(h / 24) * 100}%` }}
                        />
                      ))}
                      {/* Working hours bar */}
                      <div
                        className="absolute top-1 bottom-1 rounded-full bg-cyan-500"
                        style={{
                          left: `${startPercent}%`,
                          width: `${widthPercent}%`,
                        }}
                      />
                    </div>
                    <span className={`text-xs w-12 ${themeData.textMuted}`}>
                      UTC{offset >= 0 ? '+' : ''}{offset}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Overlap indicator */}
            {overlap && (
              <div className="mt-3 flex items-center gap-3">
                <span className={`text-sm font-medium w-16 ${themeData.text}`}>Overlap</span>
                <div className={`flex-1 h-6 rounded-full relative ${isLight ? 'bg-slate-200' : 'bg-slate-700'}`}>
                  {[6, 12, 18].map(h => (
                    <div
                      key={h}
                      className={`absolute top-0 bottom-0 w-px ${isLight ? 'bg-slate-300' : 'bg-slate-600'}`}
                      style={{ left: `${(h / 24) * 100}%` }}
                    />
                  ))}
                  <div
                    className="absolute top-1 bottom-1 rounded-full bg-emerald-500"
                    style={{
                      left: `${(overlap.start / 24) * 100}%`,
                      width: `${((overlap.end - overlap.start) / 24) * 100}%`,
                    }}
                  />
                </div>
                <span className={`text-xs w-12 ${themeData.textMuted}`}>UTC</span>
              </div>
            )}
          </div>
        )}

        {/* Result Box */}
        {selectedCities.length >= 2 ? (
          <div className={`rounded-2xl p-4 text-center ${isLight ? 'bg-slate-100/80' : 'bg-slate-800/60'}`}>
            {overlap ? (
              <>
                <p className={`text-lg font-medium ${themeData.text}`}>
                  Best meeting time: {formatHour(overlap.start)} – {formatHour(overlap.end)} UTC
                </p>
                <p className={`text-sm mt-1 ${themeData.textMuted}`}>
                  {selectedCities.map((c, i) => (
                    <span key={c.slug}>
                      {c.city}: {formatHour(utcToLocal(overlap.start, c))}–{formatHour(utcToLocal(overlap.end, c))}
                      {i < selectedCities.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </p>
                <p className={`text-xs mt-2 ${themeData.textMuted} opacity-70`}>
                  Fits all selected cities' working hours.
                </p>
              </>
            ) : (
              <p className={`text-sm ${themeData.textMuted}`}>
                No shared working-hours window found.
              </p>
            )}
          </div>
        ) : (
          <p className={`text-center text-sm ${themeData.textMuted} opacity-70`}>
            Select at least 2 cities to find the best meeting time.
          </p>
        )}

        {/* Share Button - only show when cities are selected */}
        {selectedCities.length >= 2 && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={copyShareLink}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                copied
                  ? 'bg-green-500 text-white'
                  : `${themeData.accentBg} text-white hover:opacity-90`
              }`}
            >
              {copied ? '✓ Link Copied!' : '🔗 Share This Meeting'}
            </button>
          </div>
        )}
      </div>

      {/* Portal-style dropdowns - rendered at fixed position outside container */}
      {slots.map((slot, index) => (
        slot.showDropdown && !slot.city && slot.search && getFilteredCities(slot.search).length > 0 && (
          <div
            key={`dropdown-${index}`}
            style={{
              position: 'fixed',
              top: dropdownPositions[index].top - window.scrollY,
              left: dropdownPositions[index].left,
              width: dropdownPositions[index].width,
              zIndex: 99999
            }}
          >
            {renderDropdownContent(index, slot.search)}
          </div>
        )
      ))}
    </>
  )
}
