'use client'

/**
 * Meeting Page Content - Full Page Component
 * Follows HomePage structure: Header, themed background, containers with borders, Footer
 * Uses CityContext for theme (user's location based)
 */

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { City, cities, searchCities } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TimeSlider from '@/components/TimeSlider'
import OverlapHeatmap from '@/components/OverlapHeatmap'

interface MeetingPageContentProps {
  initialCities?: City[]
}

export default function MeetingPageContent({ initialCities = [] }: MeetingPageContentProps) {
  const router = useRouter()
  const pathname = usePathname()
  
  // Use global CityContext theme (based on USER's location)
  const { theme, isLight, detectedCity } = useCityContext()
  
  // Selected cities state - start empty, will be populated by detectedCity or initialCities
  const [selectedCities, setSelectedCities] = useState<City[]>(initialCities)
  const [hasInitialized, setHasInitialized] = useState(initialCities.length > 0)
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<City[]>([])
  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  
  // View mode state - tab'lı görselleştirme
  const [viewMode, setViewMode] = useState<'heatmap' | 'timeline'>('heatmap')
  
  // Prevent URL sync on initial mount
  const isInitialMount = useRef(true)
  
  // Initialize with detected city when available (only if no initialCities)
  useEffect(() => {
    if (!hasInitialized && detectedCity) {
      setSelectedCities([detectedCity])
      setHasInitialized(true)
    }
  }, [detectedCity, hasInitialized])
  
  // Search effect
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
  
  // URL sync when cities change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    
    if (selectedCities.length === 0) {
      if (pathname !== '/meeting') router.push('/meeting')
      return
    }
    
    if (selectedCities.length === 1) {
      const newUrl = `/meeting/${selectedCities[0].slug}`
      if (pathname !== newUrl) router.push(newUrl, { scroll: false })
      return
    }
    
    // 2+ cities: alphabetical order with -vs- separator
    const slugs = selectedCities.map(c => c.slug)
    const normalized = [...slugs].sort().join('-vs-')
    const newUrl = `/meeting/${normalized}/`
    if (pathname !== newUrl) router.push(newUrl, { scroll: false })
  }, [selectedCities, router, pathname])
  
  // Add city
  const addCity = (city: City) => {
    if (selectedCities.length < 6) {
      setSelectedCities([...selectedCities, city])
      setSearchQuery('')
      setShowSearch(false)
    }
  }
  
  // Remove city
  const removeCity = (slug: string) => {
    setSelectedCities(selectedCities.filter(c => c.slug !== slug))
  }
  
  // City tag colors - VIVID (same as TimeSlider)
  const cityColors = [
    'bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 
    'bg-orange-500', 'bg-pink-500', 'bg-cyan-500'
  ]
  
  // Dynamic title based on cities
  const getTitle = () => {
    if (selectedCities.length === 0) return 'Meeting Planner'
    if (selectedCities.length === 1) return `Best Time to Call ${selectedCities[0].city}`
    const cityNames = selectedCities.map(c => c.city)
    if (cityNames.length === 2) return `${cityNames[0]} & ${cityNames[1]} Meeting Times`
    return `Meeting Planner: ${cityNames.slice(0, -1).join(', ')} & ${cityNames.slice(-1)}`
  }
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      {/* Header - ONLY ONE */}
      <Header />
      
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        
        {/* Hero Section */}
        <section className={`rounded-3xl p-6 md:p-8 mb-6 backdrop-blur-xl border ${theme.card}`}>
          <div className="text-center">
            <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.text}`}>
              {getTitle()}
            </h1>
            <p className={`text-lg ${theme.textMuted}`}>
              Find the best meeting time across multiple time zones
            </p>
          </div>
        </section>
        
        {/* Participants Section */}
        <section className={`rounded-3xl p-6 mb-6 backdrop-blur-xl border ${theme.card}`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className={`text-xl font-semibold flex items-center gap-2 ${theme.text}`}>
              <span>👥</span>
              Participants ({selectedCities.length}/6)
            </h2>
            
            {/* Add City Button - TimeSlider style */}
            {selectedCities.length < 6 && (
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isLight
                      ? 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                      : 'bg-blue-900/50 hover:bg-blue-800/50 text-blue-300'
                  }`}
                >
                  + Add City
                </button>
                
                {/* Search Dropdown */}
                {showSearch && (
                  <div className={`absolute top-full right-0 mt-2 w-72 rounded-xl shadow-2xl border p-3 z-50 ${theme.card}`}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search city..."
                      autoFocus
                      className={`w-full px-3 py-2 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-blue-500 ${
                        isLight 
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
                            className={`w-full px-3 py-2 text-left text-sm rounded-lg transition-colors ${
                              isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'
                            }`}
                          >
                            <span className={theme.text}>{city.city}</span>
                            <span className={`ml-2 ${theme.textMuted}`}>{city.country}</span>
                          </button>
                        ))}
                      </div>
                    )}
                    {searchQuery && searchResults.length === 0 && (
                      <p className={`text-sm mt-2 ${theme.textMuted}`}>No cities found</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Selected Cities Tags - VIVID COLORS */}
          <div className="flex flex-wrap gap-2">
            {selectedCities.map((city, idx) => {
              const cityTime = new Date().toLocaleTimeString('en-US', {
                timeZone: city.timezone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              })
              
              return (
                <div
                  key={city.slug}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium ${cityColors[idx % cityColors.length]}`}
                >
                  <span>{city.city}</span>
                  <span className="opacity-80 text-xs">{cityTime}</span>
                  {selectedCities.length > 0 && (
                    <button
                      onClick={() => removeCity(city.slug)}
                      className="ml-1 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                      aria-label={`Remove ${city.city}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              )
            })}
            
            {selectedCities.length === 0 && (
              <p className={`text-sm ${theme.textMuted}`}>
                Add cities above to start planning your meeting
              </p>
            )}
          </div>
        </section>
        
        {/* View Mode Tabs */}
        <div className="flex justify-center mb-4">
          <div className={`inline-flex rounded-xl p-1 ${isLight ? 'bg-slate-100' : 'bg-slate-800'}`}>
            <button
              onClick={() => setViewMode('heatmap')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === 'heatmap'
                  ? isLight 
                    ? 'bg-white shadow text-blue-600'
                    : 'bg-slate-700 shadow text-blue-400'
                  : theme.textMuted
              }`}
            >
              📊 Heatmap View
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === 'timeline'
                  ? isLight 
                    ? 'bg-white shadow text-blue-600'
                    : 'bg-slate-700 shadow text-blue-400'
                  : theme.textMuted
              }`}
            >
              ⏱️ Timeline View
            </button>
          </div>
        </div>
        
        {/* Visualization Section - Tab content */}
        {viewMode === 'heatmap' ? (
          <section className={`rounded-3xl p-6 mb-6 backdrop-blur-xl border ${theme.card}`}>
            <OverlapHeatmap 
              cities={selectedCities}
              isLight={isLight}
            />
          </section>
        ) : (
          <section className={`rounded-3xl p-6 mb-6 backdrop-blur-xl border ${theme.card}`}>
            <h3 className={`text-lg font-bold mb-2 ${theme.text}`}>
              🔍 Explore other time options
            </h3>
            <p className={`text-sm mb-4 ${theme.textMuted}`}>
              Drag to see how this time affects each city
            </p>
            <TimeSlider 
              isLight={isLight} 
              initialCities={selectedCities}
              onCitiesChange={(newCities) => setSelectedCities(newCities)}
              hideControls={true}
            />
          </section>
        )}
        
        {/* Use Cases Section */}
        <section className={`rounded-3xl p-6 mb-6 backdrop-blur-xl border ${theme.card}`}>
          <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>
            Common Use Cases
          </h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${theme.textMuted}`}>
            <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🌍</span>
                <h3 className={`font-medium ${theme.text}`}>Global Team Standups</h3>
              </div>
              <p className="text-sm">Find a time that works for team members across continents.</p>
            </div>
            <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">💼</span>
                <h3 className={`font-medium ${theme.text}`}>Client Calls</h3>
              </div>
              <p className="text-sm">Schedule calls during mutual business hours.</p>
            </div>
            <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎥</span>
                <h3 className={`font-medium ${theme.text}`}>Webinars & Events</h3>
              </div>
              <p className="text-sm">Maximize attendance by choosing optimal broadcast times.</p>
            </div>
            <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">👨‍👩‍👧</span>
                <h3 className={`font-medium ${theme.text}`}>Family Video Calls</h3>
              </div>
              <p className="text-sm">Coordinate convenient times for relatives in different countries.</p>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className={`rounded-3xl p-6 mb-6 backdrop-blur-xl border ${theme.card}`}>
          <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
              <h3 className={`font-medium mb-2 ${theme.text}`}>
                How does the heatmap work?
              </h3>
              <p className={`text-sm ${theme.textMuted}`}>
                The heatmap shows overlap quality across 24 hours. Darker blue means more participants 
                are awake (7 AM - 11 PM local time). The "Best Time" marker shows the optimal meeting slot.
              </p>
            </div>
            <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
              <h3 className={`font-medium mb-2 ${theme.text}`}>
                Can I add more than 3 participants?
              </h3>
              <p className={`text-sm ${theme.textMuted}`}>
                Yes! You can add up to 6 cities. Simply use the "Add city" button to add more participants.
              </p>
            </div>
            <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
              <h3 className={`font-medium mb-2 ${theme.text}`}>
                Does it account for Daylight Saving Time?
              </h3>
              <p className={`text-sm ${theme.textMuted}`}>
                Yes, DST is automatically applied based on each city's current time zone rules.
              </p>
            </div>
          </div>
        </section>
        
        {/* Related Tools Section */}
        <section className={`rounded-3xl p-6 mb-6 backdrop-blur-xl border ${theme.card}`}>
          <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/time-converter" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-slate-50 hover:bg-slate-100' : 'bg-slate-800/50 hover:bg-slate-700/50'
            }`}>
              <div className={`font-medium ${theme.text}`}>⏱️ Time Converter</div>
              <div className={`text-sm ${theme.textMuted}`}>Quick time zone conversions</div>
            </Link>
            <Link href="/event-time" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-slate-50 hover:bg-slate-100' : 'bg-slate-800/50 hover:bg-slate-700/50'
            }`}>
              <div className={`font-medium ${theme.text}`}>📅 Event Time</div>
              <div className={`text-sm ${theme.textMuted}`}>Share event times globally</div>
            </Link>
            <Link href="/jet-lag-advisor" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-slate-50 hover:bg-slate-100' : 'bg-slate-800/50 hover:bg-slate-700/50'
            }`}>
              <div className={`font-medium ${theme.text}`}>✈️ Jet Lag Advisor</div>
              <div className={`text-sm ${theme.textMuted}`}>Travel recovery tips</div>
            </Link>
          </div>
        </section>
        
      </main>
      
      {/* Footer */}
      <Footer isLight={isLight} />
    </div>
  )
}
