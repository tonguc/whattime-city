'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { City, cities } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes } from '@/lib/themes'
import { useThemeClasses } from '@/lib/useThemeClasses'
import { useCityContext } from '@/lib/CityContext'
import TimeIcons from './TimeIcons'

interface TimeConverterProps {
  currentCitySlug?: string // For pre-filling Meeting Planner link
}

export default function TimeConverter({ currentCitySlug }: TimeConverterProps) {
  const router = useRouter()
  const { text, textMuted, isLight, accentText } = useThemeClasses()
  const { use12Hour } = useCityContext()
  
  const [fromCity, setFromCity] = useState<City | null>(null)
  const [toCity, setToCity] = useState<City | null>(null)
  const [fromSearch, setFromSearch] = useState('')
  const [toSearch, setToSearch] = useState('')
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)
  const [time, setTime] = useState(new Date())
  
  const fromRef = useRef<HTMLDivElement>(null)
  const toRef = useRef<HTMLDivElement>(null)
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  // Navigate to time page when both cities are selected
  useEffect(() => {
    if (fromCity && toCity) {
      router.push(`/time/${fromCity.slug}/${toCity.slug}/`)
    }
  }, [fromCity, toCity, router])
  
  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (fromRef.current && !fromRef.current.contains(e.target as Node)) {
        setShowFromDropdown(false)
      }
      if (toRef.current && !toRef.current.contains(e.target as Node)) {
        setShowToDropdown(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  
  const getCityTime = (city: City) => {
    const localTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
    if (use12Hour) {
      const hours = localTime.getHours()
      const minutes = localTime.getMinutes()
      const period = hours >= 12 ? 'PM' : 'AM'
      const displayHours = hours % 12 || 12
      return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`
    }
    return localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  }
  
  const getCityTimeOfDay = (city: City) => {
    return getTimeOfDay(time, city.lat, city.lng, city.timezone)
  }
  
  const filteredFromCities = cities.filter(c => 
    c.city.toLowerCase().includes(fromSearch.toLowerCase()) ||
    c.country.toLowerCase().includes(fromSearch.toLowerCase())
  ).slice(0, 5)
  
  const filteredToCities = cities.filter(c => 
    c.city.toLowerCase().includes(toSearch.toLowerCase()) ||
    c.country.toLowerCase().includes(toSearch.toLowerCase())
  ).slice(0, 5)
  
  return (
    <div className={`rounded-2xl p-4 border ${
      isLight ? 'bg-[#F9FAFB] border-slate-200' : 'bg-slate-800/40 border-slate-700'
    }`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* From City */}
        <div ref={fromRef} className="relative">
          <label className={`text-xs font-medium mb-1.5 block ${textMuted}`}>
            From city
          </label>
          <div className="relative">
            <input
              type="text"
              value={fromCity ? fromCity.city : fromSearch}
              onChange={(e) => {
                setFromSearch(e.target.value)
                setFromCity(null)
                setShowFromDropdown(true)
              }}
              onFocus={() => !fromCity && setShowFromDropdown(true)}
              placeholder="Select a city..."
              className={`w-full px-4 py-2.5 rounded-xl border text-sm shadow-sm ${
                isLight 
                  ? 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400'
                  : 'bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500'
              } outline-none focus:ring-2 focus:ring-cyan-500/30`}
            />
            {fromCity && (
              <button
                onClick={() => { setFromCity(null); setFromSearch('') }}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${textMuted} hover:opacity-70`}
              >
                ✕
              </button>
            )}
          </div>
          
          {/* From Dropdown - absolute positioned */}
          {showFromDropdown && !fromCity && fromSearch && filteredFromCities.length > 0 && (
            <div className={`absolute left-0 right-0 top-full mt-1 z-50 rounded-xl border shadow-lg overflow-hidden max-h-64 overflow-y-auto ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'
            }`}>
              {filteredFromCities.map(city => {
                const tod = getCityTimeOfDay(city)
                const Icon = TimeIcons[tod]
                return (
                  <button
                    key={city.slug}
                    onClick={() => {
                      setFromCity(city)
                      setFromSearch('')
                      setShowFromDropdown(false)
                    }}
                    className={`w-full px-4 py-2.5 flex items-center justify-between text-left ${
                      isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700'
                    }`}
                  >
                    <div>
                      <span className={`font-medium ${text}`}>{city.city}</span>
                      <span className={`text-sm ml-2 ${textMuted}`}>{city.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${textMuted}`}>{getCityTime(city)}</span>
                      <Icon className={`w-4 h-4 ${themes[tod].accentClass}`} />
                    </div>
                  </button>
                )
              })}
            </div>
          )}
          
          {/* Selected From City Time */}
          {fromCity && (
            <div className={`mt-2 flex items-center gap-2 ${textMuted}`}>
              {(() => {
                const tod = getCityTimeOfDay(fromCity)
                const Icon = TimeIcons[tod]
                return (
                  <>
                    <Icon className={`w-4 h-4 ${themes[tod].accentClass}`} />
                    <span className="text-sm">{getCityTime(fromCity)}</span>
                  </>
                )
              })()}
            </div>
          )}
        </div>
        
        {/* To City */}
        <div ref={toRef} className="relative">
          <label className={`text-xs font-medium mb-1.5 block ${textMuted}`}>
            To city
          </label>
          <div className="relative">
            <input
              type="text"
              value={toCity ? toCity.city : toSearch}
              onChange={(e) => {
                setToSearch(e.target.value)
                setToCity(null)
                setShowToDropdown(true)
              }}
              onFocus={() => !toCity && setShowToDropdown(true)}
              placeholder="Select a city..."
              className={`w-full px-4 py-2.5 rounded-xl border text-sm shadow-sm ${
                isLight 
                  ? 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400'
                  : 'bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500'
              } outline-none focus:ring-2 focus:ring-cyan-500/30`}
            />
            {toCity && (
              <button
                onClick={() => { setToCity(null); setToSearch('') }}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${textMuted} hover:opacity-70`}
              >
                ✕
              </button>
            )}
          </div>
          
          {/* To Dropdown - absolute positioned */}
          {showToDropdown && !toCity && toSearch && filteredToCities.length > 0 && (
            <div className={`absolute left-0 right-0 top-full mt-1 z-50 rounded-xl border shadow-lg overflow-hidden max-h-64 overflow-y-auto ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'
            }`}>
              {filteredToCities.map(city => {
                const tod = getCityTimeOfDay(city)
                const Icon = TimeIcons[tod]
                return (
                  <button
                    key={city.slug}
                    onClick={() => {
                      setToCity(city)
                      setToSearch('')
                      setShowToDropdown(false)
                    }}
                    className={`w-full px-4 py-2.5 flex items-center justify-between text-left ${
                      isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700'
                    }`}
                  >
                    <div>
                      <span className={`font-medium ${text}`}>{city.city}</span>
                      <span className={`text-sm ml-2 ${textMuted}`}>{city.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${textMuted}`}>{getCityTime(city)}</span>
                      <Icon className={`w-4 h-4 ${themes[tod].accentClass}`} />
                    </div>
                  </button>
                )
              })}
            </div>
          )}
          
          {/* Selected To City Time */}
          {toCity && (
            <div className={`mt-2 flex items-center gap-2 ${textMuted}`}>
              {(() => {
                const tod = getCityTimeOfDay(toCity)
                const Icon = TimeIcons[tod]
                return (
                  <>
                    <Icon className={`w-4 h-4 ${themes[tod].accentClass}`} />
                    <span className="text-sm">{getCityTime(toCity)}</span>
                  </>
                )
              })()}
            </div>
          )}
        </div>
      </div>
      
      {/* Help text */}
      <p className={`mt-6 text-center text-sm ${textMuted} opacity-70`}>
        Select two cities to compare their local time.
      </p>
      
      {/* Meeting Planner CTA */}
      <div className={`mt-4 pt-4 border-t ${isLight ? 'border-slate-200/50' : 'border-slate-700/50'}`}>
        <a 
          href={currentCitySlug ? `/meeting/${currentCitySlug}` : '/meeting'}
          className={`flex items-center justify-center gap-2 text-sm font-medium ${textMuted} hover:opacity-70 transition-colors`}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span>Need to compare 3+ cities? Use the Meeting Planner</span>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
