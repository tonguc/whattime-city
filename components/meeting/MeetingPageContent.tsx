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
import ToolsMiniNav from '@/components/ToolsMiniNav'
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
  const [hasUserCleared, setHasUserCleared] = useState(false) // Prevent auto-add after clear
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<City[]>([])
  const [showSearch, setShowSearch] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0) // For keyboard navigation
  const searchRef = useRef<HTMLDivElement>(null)
  
  // View mode state - tab'lı görselleştirme
  const [viewMode, setViewMode] = useState<'heatmap' | 'timeline'>('heatmap')
  
  // Snackbar state for undo
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [clearedCities, setClearedCities] = useState<City[]>([])
  const snackbarTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Prevent URL sync on initial mount
  const isInitialMount = useRef(true)
  
  // Initialize with detected city when available (only if no initialCities and user hasn't cleared)
  useEffect(() => {
    if (!hasInitialized && !hasUserCleared && detectedCity) {
      setSelectedCities([detectedCity])
      setHasInitialized(true)
    }
  }, [detectedCity, hasInitialized, hasUserCleared])
  
  // Search effect
  useEffect(() => {
    if (searchQuery.length >= 1) {
      const results = searchCities(searchQuery)
        .filter(c => !selectedCities.find(sc => sc.slug === c.slug))
        .slice(0, 6)
      setSearchResults(results)
      setHighlightedIndex(0) // Reset highlight on new search
    } else {
      setSearchResults([])
      setHighlightedIndex(0)
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
      // Navigate to base meeting URL when no cities
      const currentPath = pathname?.replace(/\/$/, '') || ''
      if (currentPath !== '/meeting' && currentPath !== '/meeting-planner') {
        router.push('/meeting', { scroll: false })
      }
      return
    }
    
    if (selectedCities.length === 1) {
      const newUrl = `/meeting/${selectedCities[0].slug}`
      const currentPath = pathname?.replace(/\/$/, '') || ''
      if (currentPath !== newUrl) router.push(newUrl, { scroll: false })
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
      setHighlightedIndex(0)
    }
  }
  
  // Keyboard navigation for search
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchResults.length === 0) return
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : 0)
        break
      case 'Enter':
        e.preventDefault()
        if (searchResults[highlightedIndex]) {
          addCity(searchResults[highlightedIndex])
        }
        break
      case 'Escape':
        setShowSearch(false)
        setSearchQuery('')
        break
    }
  }
  
  // Remove city
  const removeCity = (slug: string) => {
    const newCities = selectedCities.filter(c => c.slug !== slug)
    setSelectedCities(newCities)
    // If removing last city, prevent auto-add
    if (newCities.length === 0) {
      setHasUserCleared(true)
    }
  }
  
  // Clear all cities
  const clearAllCities = () => {
    // Store for undo
    setClearedCities([...selectedCities])
    setSelectedCities([])
    setHasUserCleared(true) // Prevent auto-add of detected city
    
    // Show snackbar
    setShowSnackbar(true)
    
    // Clear previous timeout if any
    if (snackbarTimeoutRef.current) {
      clearTimeout(snackbarTimeoutRef.current)
    }
    
    // Auto-hide after 6 seconds
    snackbarTimeoutRef.current = setTimeout(() => {
      setShowSnackbar(false)
      setClearedCities([])
    }, 6000)
  }
  
  // Undo clear
  const undoClear = () => {
    if (clearedCities.length > 0) {
      setSelectedCities(clearedCities)
      setClearedCities([])
      setShowSnackbar(false)
      setHasUserCleared(false) // Allow auto-add again if user undoes
      if (snackbarTimeoutRef.current) {
        clearTimeout(snackbarTimeoutRef.current)
      }
    }
  }
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (snackbarTimeoutRef.current) {
        clearTimeout(snackbarTimeoutRef.current)
      }
    }
  }, [])
  
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
        
        {/* Tools Mini Navigation */}
        <ToolsMiniNav />
        
        {/* Hero Section */}
        <section className={`rounded-3xl p-6 md:p-8 mb-6 backdrop-blur-xl border ${theme.card}`}>
          <div className="text-center">
            <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.text}`}>
              {getTitle()}
            </h1>
            <p className={`text-lg ${theme.textMuted}`}>
              Find the best working-hour overlap across time zones
            </p>
          </div>
        </section>
        
        {/* Participants Section */}
        <section className={`rounded-3xl p-6 mb-6 backdrop-blur-xl border overflow-visible ${theme.card}`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className={`text-xl font-semibold flex items-center gap-2 ${theme.text}`}>
              <span>👥</span>
              <span>Participants</span>
              <span 
                className={`text-base font-normal ${theme.textMuted}`}
                title="You can compare up to 6 cities"
              >
                ({selectedCities.length}/6)
              </span>
            </h2>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2 relative z-50">
              {/* Clear all - ghost button, only show when 2+ cities */}
              {selectedCities.length >= 2 && (
                <button
                  onClick={clearAllCities}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    isLight
                      ? 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  Clear all
                </button>
              )}
              
              {/* Add City Button */}
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
                  <div className={`absolute top-full right-0 mt-2 w-72 rounded-xl shadow-2xl border p-3 z-[100] ${theme.card}`}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearchKeyDown}
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
                        {searchResults.map((city, idx) => (
                          <button
                            key={city.slug}
                            onClick={() => addCity(city)}
                            className={`w-full px-3 py-2 text-left text-sm rounded-lg transition-colors ${
                              idx === highlightedIndex
                                ? isLight ? 'bg-blue-100' : 'bg-blue-900/50'
                                : isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'
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
                Add cities to compare meeting times
              </p>
            )}
            
            {/* Helper text - encourage adding more cities */}
            {selectedCities.length > 0 && selectedCities.length < 3 && (
              <p className={`text-xs mt-2 ${theme.textMuted}`}>
                💡 Add more cities to see better overlap options
              </p>
            )}
          </div>
        </section>
        
        {/* View Mode Tabs */}
        <div className="flex flex-col items-center mb-4">
          <div className={`inline-flex rounded-full p-1 ${isLight ? 'bg-slate-100' : 'bg-slate-800'}`}>
            <button
              onClick={() => setViewMode('heatmap')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                viewMode === 'heatmap'
                  ? isLight 
                    ? 'bg-white shadow-sm text-slate-800'
                    : 'bg-slate-700 shadow-sm text-white'
                  : isLight
                    ? 'text-slate-500 hover:text-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              📊 Heatmap View
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                viewMode === 'timeline'
                  ? isLight 
                    ? 'bg-white shadow-sm text-slate-800'
                    : 'bg-slate-700 shadow-sm text-white'
                  : isLight
                    ? 'text-slate-500 hover:text-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ⏱️ Timeline View
            </button>
          </div>
          {/* Tab descriptions */}
          <p className={`text-xs mt-2 ${theme.textMuted}`}>
            {viewMode === 'heatmap' 
              ? 'Best overall meeting times at a glance' 
              : 'Hour-by-hour comparison for each city'}
          </p>
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
      
      {/* Snackbar - Cities cleared with Undo */}
      {showSnackbar && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg ${
            isLight 
              ? 'bg-slate-800 text-white' 
              : 'bg-white text-slate-800'
          }`}>
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">Cities cleared</span>
            <button
              onClick={undoClear}
              className={`ml-2 px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                isLight 
                  ? 'bg-white/20 hover:bg-white/30 text-white' 
                  : 'bg-slate-800/20 hover:bg-slate-800/30 text-slate-800'
              }`}
            >
              Undo
            </button>
            <button
              onClick={() => setShowSnackbar(false)}
              className={`p-1 rounded-lg transition-colors ${
                isLight 
                  ? 'hover:bg-white/20' 
                  : 'hover:bg-slate-800/20'
              }`}
              aria-label="Dismiss"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
