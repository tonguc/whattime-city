'use client'

import Link from 'next/link'
import { countries } from '@/lib/cities'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCityContext } from '@/lib/CityContext'

// Convert country code to flag emoji (TR → 🇹🇷)
function getFlag(countryCode: string): string {
  return countryCode
    .toUpperCase()
    .split('')
    .map(char => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join('')
}

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
  const { theme, isLight } = useCityContext()
  
  const countriesByContinent = getCountriesByContinent()
  const totalCountries = countries.length
  
  const textMain = isLight ? 'text-slate-800' : 'text-white'
  const textMuted = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-white/60 border-slate-200/50 hover:bg-white/80' : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-700/50'
  const badgeBg = isLight ? 'bg-slate-200 text-slate-600' : 'bg-slate-700 text-slate-300'
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <Header />

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
        
        {/* SEO Intro Section */}
        <div className={`rounded-2xl p-6 mb-10 ${isLight ? 'bg-white/60' : 'bg-slate-800/40'}`}>
          <p className={`${isLight ? 'text-slate-600' : 'text-slate-300'} leading-relaxed`}>
            Explore current local time, time zones, and detailed information for countries around the world. 
            Our comprehensive directory covers {totalCountries} countries across five continents, providing 
            accurate time zone data, capital cities, currencies, and phone codes. Whether you're planning 
            international business calls, scheduling meetings across borders, or simply curious about the 
            time in another part of the world, select any country below to view detailed time zone information 
            and all major cities within that country.
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
                          <span className="text-xl flex-shrink-0">{getFlag(country.code)}</span>
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
        
        {/* SEO Content Section */}
        <div className={`mt-12 rounded-2xl p-6 ${isLight ? 'bg-white/60' : 'bg-slate-800/40'}`}>
          <h2 className={`text-xl font-semibold mb-4 ${textMain}`}>
            Understanding World Time Zones
          </h2>
          <div className={`space-y-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <p>
              The world is divided into 24 standard time zones, each typically spanning 15 degrees of longitude. 
              However, many countries have adopted time zones that don't follow these exact boundaries for 
              practical, political, or economic reasons. Some large countries like Russia, the United States, 
              and Australia span multiple time zones, while others like China and India use a single time zone 
              despite their vast geographic size.
            </p>
            <p>
              Coordinated Universal Time (UTC) serves as the primary time standard by which the world regulates 
              clocks and time. Time zones are expressed as positive or negative offsets from UTC. For example, 
              New York operates on UTC-5 during standard time and UTC-4 during daylight saving time, while 
              Tokyo is always UTC+9.
            </p>
            
            <h3 className={`text-lg font-medium mt-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
              Daylight Saving Time
            </h3>
            <p>
              Many countries observe Daylight Saving Time (DST), temporarily advancing clocks during warmer 
              months to extend evening daylight. However, DST practices vary significantly: most of Europe 
              and North America observe DST, while most of Asia, Africa, and South America do not. Some 
              countries have recently abolished DST, and the rules can change, so it's important to verify 
              current practices for accurate time conversion.
            </p>
            
            <h3 className={`text-lg font-medium mt-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
              International Business and Time Zones
            </h3>
            <p>
              Understanding time zones is crucial for international business, travel, and communication. 
              When scheduling meetings across multiple countries, consider the local business hours in each 
              location. Our country pages provide information about typical business hours, best times to 
              call, and other helpful details for cross-border coordination.
            </p>
          </div>
        </div>
      </main>

      <Footer isLight={isLight} />
    </div>
  )
}
