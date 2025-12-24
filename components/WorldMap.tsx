'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'
import { cities, City } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes } from '@/lib/themes'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MapSVG from './WorldMap/MapSVG'

export default function WorldMap() {
  const { theme: mainTheme, isLight, time } = useCityContext()
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  
  // Search states
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [focusedCity, setFocusedCity] = useState<City | null>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  
  // Tab states
  const [activeTimeTab, setActiveTimeTab] = useState<'all' | 'dawn' | 'day' | 'dusk' | 'night'>('all')
  const [activeContinentTab, setActiveContinentTab] = useState<'all' | 'americas' | 'europe' | 'asia' | 'africa' | 'oceania'>('all')
  
  const handleZoomIn = () => setZoom(z => Math.min(z + 0.5, 8))
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.5, 1))
  const handleReset = () => {
    setZoom(1)
    setFocusedCity(null)
  }
  
  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    return cities
      .filter(city => 
        city.city.toLowerCase().includes(query) ||
        city.country.toLowerCase().includes(query) ||
        city.slug.includes(query)
      )
      .slice(0, 10) // Max 10 results
  }, [searchQuery])
  
  // Handle search selection
  const handleSearchSelect = (city: City) => {
    setFocusedCity(city)
    setSelectedCity(city.slug)
    setSearchQuery('')
    setShowSearchResults(false)
  }
  
  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  // Get city data with current time
  const getCityData = (slug: string) => {
    const city = cities.find(c => c.slug === slug)
    if (!city) return null
    
    const localTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
    const timeStr = localTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
    const timeOfDay = getTimeOfDay(time, city.lat, city.lng, city.timezone)
    const theme = themes[timeOfDay]
    
    return { city, timeStr, timeOfDay, theme }
  }

  return (
    <div className={`min-h-screen transition-colors duration-700 bg-gradient-to-br ${mainTheme.bg}`}>
      {/* Shared Header */}
      <Header />

      {/* Map Container */}
      <div className="relative max-w-6xl mx-auto px-4 py-8">
        <h1 className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${isLight ? 'text-slate-800' : 'text-white'}`}>
          🗺️ World Time Map
        </h1>
        
        {/* Search Bar */}
        <div ref={searchRef} className="relative max-w-md mx-auto mb-6">
          <div className={`relative rounded-2xl overflow-hidden backdrop-blur-xl border ${
            isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
          }`}>
            <div className="flex items-center px-4">
              <span className="text-xl">🔍</span>
              <input
                type="text"
                placeholder="Search city or country..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setShowSearchResults(true)
                }}
                onFocus={() => setShowSearchResults(true)}
                className={`w-full px-3 py-3 bg-transparent outline-none ${
                  isLight ? 'text-slate-800 placeholder-slate-400' : 'text-white placeholder-slate-400'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setShowSearchResults(false)
                  }}
                  className={`p-1 rounded-full ${isLight ? 'hover:bg-slate-200' : 'hover:bg-slate-700'}`}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
          
          {/* Search Results Dropdown */}
          {showSearchResults && searchResults.length > 0 && (
            <div className={`absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden backdrop-blur-xl border z-50 ${
              isLight ? 'bg-white/95 border-white/50' : 'bg-slate-800/95 border-slate-700/50'
            }`}>
              {searchResults.map((city) => {
                const data = getCityData(city.slug)
                return (
                  <button
                    key={city.slug}
                    onClick={() => handleSearchSelect(city)}
                    className={`w-full px-4 py-3 flex items-center justify-between transition-colors ${
                      isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'
                    }`}
                  >
                    <div className="text-left">
                      <div className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>
                        {city.city}
                      </div>
                      <div className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        {city.country}
                      </div>
                    </div>
                    <div className={`text-lg font-bold ${isLight ? 'text-slate-700' : 'text-white'}`}>
                      {data?.timeStr || '--:--'}
                    </div>
                  </button>
                )
              })}
            </div>
          )}
          
          {/* No results */}
          {showSearchResults && searchQuery && searchResults.length === 0 && (
            <div className={`absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl text-center backdrop-blur-xl border ${
              isLight ? 'bg-white/95 border-white/50 text-slate-500' : 'bg-slate-800/95 border-slate-700/50 text-slate-400'
            }`}>
              No cities found for "{searchQuery}"
            </div>
          )}
        </div>
        
        <div className={`relative rounded-3xl overflow-hidden backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          {/* Zoom Controls */}
          <div className={`absolute top-4 right-4 z-20 flex flex-col gap-2`}>
            <button
              onClick={handleZoomIn}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold transition-all ${
                isLight 
                  ? 'bg-white/80 text-slate-700 hover:bg-white shadow-lg' 
                  : 'bg-slate-700/80 text-white hover:bg-slate-600 shadow-lg'
              }`}
            >
              +
            </button>
            <button
              onClick={handleZoomOut}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold transition-all ${
                isLight 
                  ? 'bg-white/80 text-slate-700 hover:bg-white shadow-lg' 
                  : 'bg-slate-700/80 text-white hover:bg-slate-600 shadow-lg'
              }`}
            >
              −
            </button>
            {zoom > 1 && (
              <button
                onClick={handleReset}
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all ${
                  isLight 
                    ? 'bg-white/80 text-slate-700 hover:bg-white shadow-lg' 
                    : 'bg-slate-700/80 text-white hover:bg-slate-600 shadow-lg'
                }`}
              >
                ↺
              </button>
            )}
          </div>

          {/* SVG Map */}
          <MapSVG
            isLight={isLight}
            zoom={zoom}
            setZoom={setZoom}
            selectedCity={selectedCity}
            onCitySelect={setSelectedCity}
            getCityData={getCityData}
            cities={cities}
            focusedCity={focusedCity}
          />
          
          {/* Selected City Info */}
          {selectedCity && (() => {
            const data = getCityData(selectedCity)
            if (!data) return null
            const { city, timeStr, timeOfDay } = data
            const timeIcons: Record<string, string> = { dawn: '🌅', day: '☀️', dusk: '🌆', night: '🌙' }
            
            return (
              <div className={`absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-64 p-4 rounded-2xl backdrop-blur-xl border ${
                isLight ? 'bg-white/80 border-white/50' : 'bg-slate-800/80 border-slate-700/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-xs uppercase tracking-wide ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {city.country}
                    </div>
                    <div className={`text-lg font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                      {city.city}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                      {timeStr}
                    </div>
                    <div className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                      {timeIcons[timeOfDay]} {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}
                    </div>
                  </div>
                </div>
                <Link 
                  href={`/${selectedCity}`}
                  className={`mt-3 block w-full text-center py-2 rounded-full text-sm font-medium transition-all ${
                    isLight 
                      ? 'bg-slate-800 text-white hover:bg-slate-700' 
                      : 'bg-white text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  View Details →
                </Link>
              </div>
            )
          })()}
        </div>
        
        {/* Legend */}
        <div className={`mt-6 flex flex-wrap justify-center gap-6 text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span>Daytime</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <span>Nighttime</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 border-t-2 border-dashed border-yellow-500"></span>
            <span>Day/Night Line</span>
          </div>
        </div>
        
        {/* SEO Content Section */}
        <div className={`mt-8 rounded-2xl p-6 ${isLight ? 'bg-white/60' : 'bg-slate-800/40'}`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Interactive World Time Zone Map
          </h2>
          <div className={`space-y-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <p>
              Our interactive world time map displays current local time across 50+ major cities worldwide. 
              The map features a real-time day/night terminator line showing which parts of the world are 
              experiencing daylight or darkness at any given moment.
            </p>
            <p>
              Each city marker shows the current local time with color coding: yellow dots indicate daytime 
              hours while cyan dots represent nighttime. Click on any city to see detailed information 
              including the exact time, time of day status, and a link to the full city page with weather, 
              sunrise/sunset times, and more.
            </p>
            <h3 className={`text-lg font-medium mt-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
              Understanding Time Zones
            </h3>
            <p>
              The world is divided into 24 primary time zones, each roughly 15 degrees of longitude wide. 
              As Earth rotates, different regions experience different times of day. The International Date 
              Line in the Pacific Ocean marks where one calendar day becomes the next.
            </p>
            <p>
              Major business hubs like New York, London, Tokyo, and Sydney often need to coordinate across 
              multiple time zones. Our map helps visualize these differences at a glance, making it easier 
              to schedule international meetings, calls, and events.
            </p>
            <h3 className={`text-lg font-medium mt-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
              Day and Night Visualization
            </h3>
            <p>
              The dashed yellow lines on the map represent the approximate boundaries between day and night. 
              These terminator lines move continuously as Earth rotates, completing a full cycle every 24 hours. 
              The position changes throughout the year due to Earth's axial tilt, affecting how much daylight 
              each region receives.
            </p>
          </div>
        </div>
        
        {/* City Grid with Tabs */}
        <div className="mt-8">
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
            World Cities
          </h2>
          
          {/* Time of Day Tabs */}
          <div className="mb-4">
            <div className={`text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Filter by Time of Day
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: '🌍 All', count: cities.length },
                { id: 'dawn', label: '🌅 Dawn', emoji: '🌅' },
                { id: 'day', label: '☀️ Day', emoji: '☀️' },
                { id: 'dusk', label: '🌆 Dusk', emoji: '🌆' },
                { id: 'night', label: '🌙 Night', emoji: '🌙' },
              ].map(tab => {
                const isActive = activeTimeTab === tab.id
                const count = tab.id === 'all' 
                  ? cities.length 
                  : cities.filter(c => getTimeOfDay(time, c.lat, c.lng, c.timezone) === tab.id).length
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTimeTab(tab.id as typeof activeTimeTab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? isLight 
                          ? 'bg-slate-800 text-white' 
                          : 'bg-white text-slate-800'
                        : isLight
                          ? 'bg-white/60 text-slate-600 hover:bg-white/80'
                          : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
                    }`}
                  >
                    {tab.label} <span className="opacity-70">({count})</span>
                  </button>
                )
              })}
            </div>
          </div>
          
          {/* Continent Tabs */}
          <div className="mb-6">
            <div className={`text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Filter by Region
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Regions' },
                { id: 'americas', label: '🌎 Americas' },
                { id: 'europe', label: '🌍 Europe' },
                { id: 'asia', label: '🌏 Asia' },
                { id: 'africa', label: '🌍 Africa' },
                { id: 'oceania', label: '🌏 Oceania' },
              ].map(tab => {
                const isActive = activeContinentTab === tab.id
                const filteredByTime = activeTimeTab === 'all' 
                  ? cities 
                  : cities.filter(c => getTimeOfDay(time, c.lat, c.lng, c.timezone) === activeTimeTab)
                const count = tab.id === 'all'
                  ? filteredByTime.length
                  : filteredByTime.filter(c => c.continent === tab.id).length
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveContinentTab(tab.id as typeof activeContinentTab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? isLight 
                          ? 'bg-slate-800 text-white' 
                          : 'bg-white text-slate-800'
                        : isLight
                          ? 'bg-white/60 text-slate-600 hover:bg-white/80'
                          : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
                    }`}
                  >
                    {tab.label} <span className="opacity-70">({count})</span>
                  </button>
                )
              })}
            </div>
          </div>
          
          {/* Filtered City Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {cities
              .filter(city => {
                // Time of day filter
                if (activeTimeTab !== 'all') {
                  const cityTimeOfDay = getTimeOfDay(time, city.lat, city.lng, city.timezone)
                  if (cityTimeOfDay !== activeTimeTab) return false
                }
                // Continent filter
                if (activeContinentTab !== 'all' && city.continent !== activeContinentTab) {
                  return false
                }
                return true
              })
              .sort((a, b) => a.city.localeCompare(b.city))
              .map(city => {
                const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
                const timeStr = cityTime.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: false 
                })
                const timeOfDay = getTimeOfDay(time, city.lat, city.lng, city.timezone)
                const isNight = timeOfDay === 'night'
                const isDusk = timeOfDay === 'dusk'
                const isDawn = timeOfDay === 'dawn'
                
                const timeColor = isNight 
                  ? 'text-cyan-400' 
                  : isDusk 
                    ? 'text-orange-400' 
                    : isDawn 
                      ? 'text-pink-400' 
                      : 'text-amber-500'
                
                return (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className={`p-3 rounded-xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${
                      isLight 
                        ? 'bg-white/60 border-white/50 hover:bg-white/80' 
                        : 'bg-slate-800/60 border-slate-700/50 hover:bg-slate-700/60'
                    }`}
                  >
                    <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {city.country}
                    </div>
                    <div className={`font-medium truncate ${isLight ? 'text-slate-800' : 'text-white'}`}>
                      {city.city}
                    </div>
                    <div className={`text-lg font-bold ${timeColor}`}>
                      {timeStr}
                    </div>
                  </Link>
                )
              })}
          </div>
          
          {/* Empty state */}
          {cities.filter(city => {
            if (activeTimeTab !== 'all') {
              const cityTimeOfDay = getTimeOfDay(time, city.lat, city.lng, city.timezone)
              if (cityTimeOfDay !== activeTimeTab) return false
            }
            if (activeContinentTab !== 'all' && city.continent !== activeContinentTab) {
              return false
            }
            return true
          }).length === 0 && (
            <div className={`text-center py-12 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              No cities match the selected filters
            </div>
          )}
        </div>
        
        {/* Additional SEO Content */}
        <div className={`mt-8 rounded-2xl p-6 ${isLight ? 'bg-white/60' : 'bg-slate-800/40'}`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            How to Use the World Clock Map
          </h2>
          <div className={`space-y-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <p>
              <strong>Zoom Controls:</strong> Use the + and − buttons in the top right corner to zoom in 
              for a closer look at specific regions. The reset button (↺) returns to the default view.
            </p>
            <p>
              <strong>City Selection:</strong> Click on any city dot to see a popup with the city name, 
              country, current time, and time of day. From there, you can navigate to the detailed city 
              page for comprehensive information.
            </p>
            <p>
              <strong>Time Comparison:</strong> Use this map alongside our Time Converter tool to calculate 
              exact time differences between cities and find optimal meeting times across different time zones.
            </p>
          </div>
        </div>
      </div>
      
      <Footer isLight={isLight} />
    </div>
  )
}
