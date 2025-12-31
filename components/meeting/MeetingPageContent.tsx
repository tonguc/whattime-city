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
  
  // City tag colors - muted/pastel versions (less saturated, less attention-grabbing)
  const cityColors = [
    'bg-blue-400/70', 'bg-emerald-400/70', 'bg-purple-400/70', 
    'bg-orange-400/70', 'bg-pink-400/70', 'bg-cyan-400/70'
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
      {/* Header */}
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
            
            {/* Add City Search */}
            {selectedCities.length < 6 && (
              <div className="relative" ref={searchRef}>
                <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all ${
                  isLight 
                    ? 'bg-white border-slate-200 focus-within:border-blue-400' 
                    : 'bg-slate-700 border-slate-600 focus-within:border-blue-500'
                }`}>
                  <svg className={`w-4 h-4 ${theme.textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setShowSearch(true)
                    }}
                    onFocus={() => setShowSearch(true)}
                    placeholder="Add city..."
                    className={`bg-transparent outline-none text-sm w-36 sm:w-48 ${theme.text}`}
                    style={{ fontSize: '16px' }} // Prevent iOS zoom
                  />
                </div>
                
                {/* Search Dropdown */}
                {showSearch && searchResults.length > 0 && (
                  <div className={`absolute top-full left-0 right-0 mt-2 rounded-xl shadow-xl border overflow-hidden z-50 ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-600'
                  }`}>
                    {searchResults.map(city => (
                      <button
                        key={city.slug}
                        onClick={() => addCity(city)}
                        className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                          isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700'
                        }`}
                      >
                        <div>
                          <span className={theme.text}>{city.city}</span>
                          <span className={`text-sm ml-2 ${theme.textMuted}`}>{city.country}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Selected Cities Tags */}
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
                  {selectedCities.length > 1 && (
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
        
        {/* Overlap Heatmap Section - PRIMARY DECISION AREA */}
        <section className={`rounded-3xl p-6 mb-8 backdrop-blur-xl border-2 ${theme.card}`}>
          <OverlapHeatmap 
            cities={selectedCities}
            isLight={isLight}
          />
        </section>
        
        {/* Visual Separator */}
        <div className={`flex items-center gap-4 mb-6 ${theme.textMuted}`}>
          <div className={`flex-1 h-px ${isLight ? 'bg-slate-200' : 'bg-slate-700'}`}></div>
          <span className="text-xs uppercase tracking-wider">or explore alternatives</span>
          <div className={`flex-1 h-px ${isLight ? 'bg-slate-200' : 'bg-slate-700'}`}></div>
        </div>
        
        {/* Time Slider - SECONDARY: for exploration */}
        <div className="mb-6">
          <TimeSlider 
            isLight={isLight} 
            initialCities={selectedCities}
            onCitiesChange={(newCities) => setSelectedCities(newCities)}
          />
        </div>
        
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
                Yes! You can add up to 6 cities. Simply use the "Add city" search to add more participants.
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
