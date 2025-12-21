'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { countries } from '@/lib/cities'
import SimpleHeader from '@/components/SimpleHeader'
import Footer from '@/components/Footer'

// Group countries by continent
function getCountriesByContinent() {
  const continents: Record<string, typeof countries> = {
    americas: [],
    europe: [],
    asia: [],
    africa: [],
    oceania: []
  }
  
  countries.forEach(country => {
    if (continents[country.continent]) {
      continents[country.continent].push(country)
    }
  })
  
  // Sort each continent alphabetically
  Object.keys(continents).forEach(key => {
    continents[key].sort((a, b) => a.name.localeCompare(b.name))
  })
  
  return continents
}

const continentInfo: Record<string, { name: string; emoji: string }> = {
  americas: { name: 'Americas', emoji: '🌎' },
  europe: { name: 'Europe', emoji: '🌍' },
  asia: { name: 'Asia', emoji: '🌏' },
  africa: { name: 'Africa', emoji: '🌍' },
  oceania: { name: 'Oceania', emoji: '🌏' }
}

export default function CountriesContent() {
  const [isLight, setIsLight] = useState(false)
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode')
    if (savedTheme === 'light') {
      setIsLight(true)
    } else if (savedTheme === 'dark') {
      setIsLight(false)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsLight(!prefersDark)
    }
  }, [])
  
  const countriesByContinent = getCountriesByContinent()
  const totalCountries = countries.length
  
  const textMain = isLight ? 'text-slate-800' : 'text-white'
  const textMuted = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-white/60 border-slate-200/50 hover:bg-white/80' : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-700/50'
  const badgeBg = isLight ? 'bg-slate-200 text-slate-600' : 'bg-slate-700 text-slate-300'
  
  return (
    <div className={`min-h-screen ${isLight 
      ? 'bg-gradient-to-br from-slate-100 via-white to-slate-100' 
      : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
    }`}>
      <SimpleHeader isLight={isLight} />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className={`text-3xl sm:text-4xl font-bold ${textMain} mb-3 flex items-center justify-center gap-3`}>
            <svg className="w-9 h-9 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            Time Zones by Country
          </h1>
          <p className={`text-lg ${textMuted}`}>
            Browse {totalCountries} countries across all continents
          </p>
        </div>

        {/* Continent Sections */}
        <div className="space-y-10">
          {Object.entries(continentInfo).map(([key, info]) => {
            const continentCountries = countriesByContinent[key]
            if (!continentCountries || continentCountries.length === 0) return null
            
            return (
              <section key={key}>
                <h2 className={`text-xl sm:text-2xl font-semibold ${textMain} mb-4 flex items-center gap-2`}>
                  <span>{info.emoji}</span>
                  <span>{info.name}</span>
                  <span className={`text-sm font-normal ${textMuted}`}>({continentCountries.length})</span>
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {continentCountries.map(country => {
                    return (
                      <Link
                        key={country.slug}
                        href={`/country/${country.slug}`}
                        className={`group p-3 rounded-xl border transition-all ${cardBg}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xs px-2 py-1 rounded font-mono font-medium ${badgeBg}`}>
                            {country.code.toUpperCase()}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className={`font-medium truncate group-hover:text-cyan-500 transition-colors ${textMain}`}>
                              {country.name}
                            </div>
                            <div className={`text-xs truncate ${textMuted}`}>
                              {country.timezones[0]}
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className={`${textMuted} mb-4`}>
            Can't find your country? Try searching for a city instead.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors"
          >
            🔍 Search Cities
          </Link>
        </div>
      </main>

      <Footer isLight={isLight} />
    </div>
  )
}
