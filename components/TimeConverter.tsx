'use client'

import { useState, useEffect, useRef } from 'react'
import { City, cities } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, Theme } from '@/lib/themes'
import TimeIcons from './TimeIcons'

interface TimeConverterProps {
  currentTheme: string
  themeData: Theme
  use12Hour: boolean
  isLight: boolean
}

export default function TimeConverter({ currentTheme, themeData, use12Hour, isLight }: TimeConverterProps) {
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
    const localTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
    return getTimeOfDay(localTime, city.lat, city.lng)
  }
  
  const getTimeDifference = () => {
    if (!fromCity || !toCity) return null
    
    const fromOffset = new Date().toLocaleString('en-US', { timeZone: fromCity.timezone, timeZoneName: 'shortOffset' }).split(' ').pop()
    const toOffset = new Date().toLocaleString('en-US', { timeZone: toCity.timezone, timeZoneName: 'shortOffset' }).split(' ').pop()
    
    const parseOffset = (str: string) => {
      const match = str?.match(/GMT([+-]?\d+)?/)
      return match ? (parseInt(match[1]) || 0) : 0
    }
    
    const diff = parseOffset(toOffset || '') - parseOffset(fromOffset || '')
    return diff
  }
  
  const filteredFromCities = cities.filter(c => 
    c.city.toLowerCase().includes(fromSearch.toLowerCase()) ||
    c.country.toLowerCase().includes(fromSearch.toLowerCase())
  ).slice(0, 6)
  
  const filteredToCities = cities.filter(c => 
    c.city.toLowerCase().includes(toSearch.toLowerCase()) ||
    c.country.toLowerCase().includes(toSearch.toLowerCase())
  ).slice(0, 6)
  
  const timeDiff = getTimeDifference()
  
  return (
    <div className={`rounded-3xl p-6 backdrop-blur-xl border ${themeData.card} mb-8`}>
      <h3 className={`text-xl font-semibold ${themeData.text} mb-4`}>
        🔄 Two-City Time Converter
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* From City */}
        <div ref={fromRef} className="relative">
          <label className={`text-xs font-medium mb-1.5 block ${themeData.textMuted}`}>
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
              onFocus={() => setShowFromDropdown(true)}
              placeholder="Select a city..."
              className={`w-full px-4 py-2.5 rounded-xl border text-sm ${
                isLight 
                  ? 'bg-white/80 border-slate-200 text-slate-800 placeholder:text-slate-400'
                  : 'bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500'
              } outline-none focus:ring-2 focus:ring-cyan-500/30`}
            />
            {fromCity && (
              <button
                onClick={() => { setFromCity(null); setFromSearch('') }}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${themeData.textMuted} hover:${themeData.text}`}
              >
                ✕
              </button>
            )}
          </div>
          
          {/* From Dropdown */}
          {showFromDropdown && !fromCity && fromSearch && filteredFromCities.length > 0 && (
            <div className={`absolute z-20 w-full mt-1 rounded-xl border shadow-lg overflow-hidden ${
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
                      <span className={`font-medium ${themeData.text}`}>{city.city}</span>
                      <span className={`text-sm ml-2 ${themeData.textMuted}`}>{city.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${themeData.textMuted}`}>{getCityTime(city)}</span>
                      <Icon className={`w-4 h-4 ${themes[tod].accentClass}`} />
                    </div>
                  </button>
                )
              })}
            </div>
          )}
          
          {/* Selected From City Time */}
          {fromCity && (
            <div className={`mt-2 flex items-center gap-2 ${themeData.textMuted}`}>
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
          <label className={`text-xs font-medium mb-1.5 block ${themeData.textMuted}`}>
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
              onFocus={() => setShowToDropdown(true)}
              placeholder="Select a city..."
              className={`w-full px-4 py-2.5 rounded-xl border text-sm ${
                isLight 
                  ? 'bg-white/80 border-slate-200 text-slate-800 placeholder:text-slate-400'
                  : 'bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500'
              } outline-none focus:ring-2 focus:ring-cyan-500/30`}
            />
            {toCity && (
              <button
                onClick={() => { setToCity(null); setToSearch('') }}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${themeData.textMuted} hover:${themeData.text}`}
              >
                ✕
              </button>
            )}
          </div>
          
          {/* To Dropdown */}
          {showToDropdown && !toCity && toSearch && filteredToCities.length > 0 && (
            <div className={`absolute z-20 w-full mt-1 rounded-xl border shadow-lg overflow-hidden ${
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
                      <span className={`font-medium ${themeData.text}`}>{city.city}</span>
                      <span className={`text-sm ml-2 ${themeData.textMuted}`}>{city.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${themeData.textMuted}`}>{getCityTime(city)}</span>
                      <Icon className={`w-4 h-4 ${themes[tod].accentClass}`} />
                    </div>
                  </button>
                )
              })}
            </div>
          )}
          
          {/* Selected To City Time */}
          {toCity && (
            <div className={`mt-2 flex items-center gap-2 ${themeData.textMuted}`}>
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
      
      {/* Result */}
      {fromCity && toCity ? (
        <div className={`mt-4 pt-4 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
          <div className="text-center">
            <p className={`text-lg font-medium ${themeData.text}`}>
              {getCityTime(fromCity)} in {fromCity.city} = {getCityTime(toCity)} in {toCity.city}
            </p>
            <p className={`text-sm mt-1 ${themeData.textMuted}`}>
              {toCity.city} is {timeDiff === 0 ? 'the same time as' : timeDiff! > 0 ? `+${timeDiff} hours ahead of` : `${timeDiff} hours behind`} {fromCity.city}
            </p>
          </div>
        </div>
      ) : (
        <p className={`mt-4 text-center text-sm ${themeData.textMuted} opacity-70`}>
          Select two cities to compare their local time.
        </p>
      )}
    </div>
  )
}
