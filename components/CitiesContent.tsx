'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { cities, City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { TimeIcons } from '@/components/TimeIcons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function CitiesContent() {
  const { time, detectedCity, getLocalTime, getCityTimeOfDay } = useCityContext()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  // Theme based on detected city
  const timeOfDay = detectedCity
    ? getTimeOfDay(time, detectedCity.lat, detectedCity.lng, detectedCity.timezone)
    : 'day'
  const theme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)

  // Sort cities alphabetically
  const sortedCities = useMemo(() => {
    return [...cities].sort((a, b) => a.city.localeCompare(b.city))
  }, [])

  // Filter cities based on search and letter filter
  const filteredCities = useMemo(() => {
    let result = sortedCities

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        city =>
          city.city.toLowerCase().includes(query) ||
          city.country.toLowerCase().includes(query)
      )
    }

    if (activeFilter) {
      result = result.filter(city =>
        city.city.toUpperCase().startsWith(activeFilter)
      )
    }

    return result
  }, [sortedCities, searchQuery, activeFilter])

  // Group cities by first letter
  const groupedCities = useMemo(() => {
    const groups: Record<string, City[]> = {}
    
    filteredCities.forEach(city => {
      const letter = city.city[0].toUpperCase()
      if (!groups[letter]) {
        groups[letter] = []
      }
      groups[letter].push(city)
    })

    return groups
  }, [filteredCities])

  // Get available letters (letters that have cities)
  const availableLetters = useMemo(() => {
    const letters = new Set<string>()
    sortedCities.forEach(city => {
      letters.add(city.city[0].toUpperCase())
    })
    return letters
  }, [sortedCities])

  const handleLetterClick = (letter: string) => {
    if (activeFilter === letter) {
      setActiveFilter(null)
    } else {
      setActiveFilter(letter)
      setSearchQuery('')
      // Scroll to letter section
      const element = document.getElementById(`letter-${letter}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className={`text-3xl font-bold mb-2 ${theme.text}`}>
            🌍 All Cities
          </h1>
          <p className={theme.textMuted}>
            Browse current local time for {cities.length}+ cities worldwide
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className={`rounded-2xl p-4 mb-6 backdrop-blur-xl border ${theme.card}`}>
          {/* Search Input */}
          <div className="relative mb-4">
            <svg
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textMuted}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search cities..."
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value)
                setActiveFilter(null)
              }}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all ${
                isLight
                  ? 'bg-white border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'
                  : 'bg-slate-800 border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-900'
              } ${theme.text} outline-none`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${theme.textMuted} hover:${theme.text}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* A-Z Index */}
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeFilter === null
                  ? 'bg-blue-500 text-white'
                  : isLight
                    ? 'text-slate-600 hover:bg-slate-100'
                    : 'text-slate-400 hover:bg-slate-700'
              }`}
            >
              All
            </button>
            {alphabet.map(letter => {
              const hasCity = availableLetters.has(letter)
              return (
                <button
                  key={letter}
                  onClick={() => hasCity && handleLetterClick(letter)}
                  disabled={!hasCity}
                  className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                    activeFilter === letter
                      ? 'bg-blue-500 text-white'
                      : hasCity
                        ? isLight
                          ? 'text-slate-700 hover:bg-slate-100'
                          : 'text-slate-300 hover:bg-slate-700'
                        : isLight
                          ? 'text-slate-300 cursor-not-allowed'
                          : 'text-slate-600 cursor-not-allowed'
                  }`}
                >
                  {letter}
                </button>
              )
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className={`mb-4 text-sm ${theme.textMuted}`}>
          {searchQuery || activeFilter ? (
            <span>
              Showing {filteredCities.length} of {cities.length} cities
              {activeFilter && !searchQuery && ` starting with "${activeFilter}"`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
          ) : (
            <span>{cities.length} cities</span>
          )}
        </div>

        {/* Cities List - Grouped by Letter */}
        <div className={`rounded-2xl backdrop-blur-xl border ${theme.card} overflow-hidden`}>
          {Object.keys(groupedCities).length === 0 ? (
            <div className={`p-8 text-center ${theme.textMuted}`}>
              <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>No cities found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveFilter(null)
                }}
                className="mt-3 text-blue-500 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            Object.keys(groupedCities)
              .sort()
              .map(letter => (
                <div key={letter} id={`letter-${letter}`}>
                  {/* Letter Header */}
                  <div
                    className={`sticky top-0 px-4 py-2 font-bold text-lg ${
                      isLight ? 'bg-slate-100 text-slate-700' : 'bg-slate-800 text-slate-200'
                    }`}
                  >
                    {letter}
                    <span className={`ml-2 text-sm font-normal ${theme.textMuted}`}>
                      ({groupedCities[letter].length})
                    </span>
                  </div>

                  {/* Cities in this letter group */}
                  <div className="divide-y divide-slate-200 dark:divide-slate-700">
                    {groupedCities[letter].map(city => {
                      const cityTime = getLocalTime(city)
                      const tod = getCityTimeOfDay(city)
                      const Icon = TimeIcons[tod]

                      return (
                        <Link
                          key={city.slug}
                          href={`/${city.slug}`}
                          className={`flex items-center justify-between px-4 py-3 transition-colors ${
                            isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-800/50'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <Icon
                              className={`w-4 h-4 flex-shrink-0 ${
                                tod === 'day'
                                  ? 'text-amber-500'
                                  : tod === 'night'
                                    ? 'text-indigo-400'
                                    : tod === 'dawn'
                                      ? 'text-orange-400'
                                      : 'text-purple-400'
                              }`}
                            />
                            <div className="min-w-0">
                              <span className={`font-medium ${theme.text}`}>{city.city}</span>
                              <span className={`ml-2 text-sm ${theme.textMuted}`}>{city.country}</span>
                            </div>
                          </div>
                          <div className={`text-right flex-shrink-0 ml-4`}>
                            <span className={`font-mono font-medium tabular-nums ${theme.text}`}>
                              {cityTime}
                            </span>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ))
          )}
        </div>

        {/* Quick Jump - Fixed bottom on mobile */}
        <div className={`mt-6 rounded-2xl p-4 backdrop-blur-xl border ${theme.card}`}>
          <h2 className={`text-sm font-semibold mb-3 ${theme.text}`}>Quick Jump</h2>
          <div className="flex flex-wrap gap-1">
            {alphabet.map(letter => {
              const hasCity = availableLetters.has(letter)
              return (
                <button
                  key={`jump-${letter}`}
                  onClick={() => {
                    if (hasCity) {
                      setActiveFilter(null)
                      setSearchQuery('')
                      const element = document.getElementById(`letter-${letter}`)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }
                  }}
                  disabled={!hasCity}
                  className={`w-8 h-8 rounded text-xs font-medium transition-all ${
                    hasCity
                      ? isLight
                        ? 'text-slate-700 hover:bg-blue-100 hover:text-blue-700'
                        : 'text-slate-300 hover:bg-blue-900/30 hover:text-blue-400'
                      : isLight
                        ? 'text-slate-300 cursor-not-allowed'
                        : 'text-slate-600 cursor-not-allowed'
                  }`}
                >
                  {letter}
                </button>
              )
            })}
          </div>
        </div>

        {/* SEO Content */}
        <section className={`mt-6 rounded-2xl p-5 backdrop-blur-xl border ${theme.card}`}>
          <h2 className={`text-lg font-semibold mb-3 ${theme.text}`}>
            World Clock - All Cities Directory
          </h2>
          <div className={`space-y-3 text-sm ${theme.textMuted}`}>
            <p>
              Our comprehensive world clock directory includes {cities.length}+ cities across all 
              continents. Each city page shows the current local time, timezone information, 
              sunrise and sunset times, and live weather conditions.
            </p>
            <p>
              Use the search bar to quickly find any city, or browse alphabetically using the 
              A-Z index. Click on any city to see detailed time information and compare times 
              with other cities around the world.
            </p>
          </div>
        </section>
      </main>

      <Footer isLight={isLight} />
    </div>
  )
}
