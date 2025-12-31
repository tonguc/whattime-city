'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { cities, City, searchCities } from '@/lib/cities'
import { useToolsTheme, getContextCity } from '@/lib/useToolsTheme'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'
import TimeSlider from '@/components/TimeSlider'
import OverlapHeatmap from '@/components/OverlapHeatmap'

export default function MeetingPlannerPage() {
  const router = useRouter()
  const { theme, isLight, selectedCity } = useToolsTheme()
  
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedCities, setSelectedCities] = useState<City[]>(() => [
    cities.find(c => c.city === 'New York') || cities[0],
    cities.find(c => c.city === 'London') || cities[1],
    cities.find(c => c.city === 'Tokyo') || cities[2]
  ])
  
  // Search state for adding cities
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<City[]>([])
  const [showSearch, setShowSearch] = useState(false)
  
  // Sync first city with context when it becomes available
  useEffect(() => {
    if (selectedCity) {
      setSelectedCities(prev => {
        // Replace first city with context city, keep others
        const newCities = [...prev]
        newCities[0] = selectedCity
        return newCities
      })
    }
  }, [selectedCity])
  
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

  // Get current hour in each city
  const getCityHour = (timezone: string) => {
    return new Date().toLocaleString('en-US', { 
      timeZone: timezone, 
      hour: 'numeric', 
      hour12: false 
    })
  }

  // Check if hour is within working hours (9-17)
  const isWorkingHour = (hour: number) => hour >= 9 && hour <= 17

  // City tag colors
  const cityColors = [
    'bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 
    'bg-orange-500', 'bg-pink-500', 'bg-cyan-500'
  ]

  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        {/* Mini Navigation */}
        <ToolsMiniNav />

        {/* Tool Hero */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Meeting Planner
          </h1>
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Find the best meeting time across multiple time zones
          </p>
        </div>

        {/* City Selection Interface */}
        <div className={`rounded-2xl p-6 mb-6 backdrop-blur-xl border ${
          isLight ? 'bg-white/60 border-white/70' : 'bg-slate-800/60 border-slate-700/50'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className={`text-lg font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>
              👥 Participants ({selectedCities.length}/6)
            </h2>
            
            {/* Add City Search */}
            {selectedCities.length < 6 && (
              <div className="relative">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-700 border-slate-600'
                }`}>
                  <svg className={`w-4 h-4 ${isLight ? 'text-slate-400' : 'text-slate-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    className={`bg-transparent outline-none text-sm w-32 sm:w-48 ${
                      isLight ? 'text-slate-800 placeholder-slate-400' : 'text-white placeholder-slate-500'
                    }`}
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
                        className={`w-full px-4 py-3 text-left flex items-center justify-between ${
                          isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700'
                        }`}
                      >
                        <div>
                          <span className={isLight ? 'text-slate-800' : 'text-white'}>{city.city}</span>
                          <span className={`text-sm ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                            {city.country}
                          </span>
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
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-white text-sm ${cityColors[idx % cityColors.length]}`}
                >
                  <span className="font-medium">{city.city}</span>
                  <span className="opacity-80 text-xs">{cityTime}</span>
                  {selectedCities.length > 1 && (
                    <button
                      onClick={() => removeCity(city.slug)}
                      className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                      aria-label={`Remove ${city.city}`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* NEW: Overlap Heatmap */}
        <div className="mb-6">
          <OverlapHeatmap 
            cities={selectedCities}
            isLight={isLight}
          />
        </div>

        {/* Interactive Time Slider */}
        <div className="mb-8">
          <TimeSlider 
            isLight={isLight} 
            initialCities={selectedCities}
            onCitiesChange={(newCities) => setSelectedCities(newCities)}
          />
        </div>

        {/* SEO SECTION 1: Common Use Cases */}
        <section className={`rounded-2xl p-6 mb-6 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/70' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Common Use Cases
          </h2>
          <ul className={`space-y-3 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Global team standups</strong> — Find a time that works for team members across continents.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Client calls across regions</strong> — Schedule calls during mutual business hours.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Webinars and live events</strong> — Maximize attendance by choosing optimal broadcast times.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Family video calls</strong> — Coordinate convenient times for relatives in different countries.
              </div>
            </li>
          </ul>
        </section>

        {/* SEO SECTION 2: Who Is This Tool For? */}
        <section className={`rounded-2xl p-6 mb-6 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/70' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Who Is This Tool For?
          </h2>
          <p className={`${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            The Meeting Planner is built for distributed teams, international project managers, and anyone 
            organizing calls with participants in multiple time zones. It visualizes working hour overlaps 
            so you can find the sweet spot where everyone is available during reasonable hours.
          </p>
        </section>

        {/* SEO SECTION 3: Related Tools */}
        <section className={`rounded-2xl p-6 mb-6 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/70' : 'bg-slate-800/40 border-slate-700/50'
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
            <Link href="/tools/jet-lag" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Jet Lag</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Travel recovery tips</div>
            </Link>
          </div>
        </section>

        {/* SEO SECTION 4: FAQ */}
        <section className={`rounded-2xl p-6 mb-8 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/70' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Frequently Asked Questions
          </h2>
          <div className={`space-y-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                What are "working hours" in the planner?
              </h3>
              <p className="text-sm">
                Working hours are defined as 9:00 AM to 5:00 PM local time for each city.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Can I add more than 3 participants?
              </h3>
              <p className="text-sm">
                Yes! Use the Time Slider below to compare up to 6 cities at once with drag-to-explore functionality.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Does it account for Daylight Saving Time?
              </h3>
              <p className="text-sm">
                Yes, DST is automatically applied based on each city's current time zone rules.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer - Full Width */}
      <div className="relative z-10 mt-10">
        <Footer isLight={isLight} />
      </div>
    </>
  )
}
