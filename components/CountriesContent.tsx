'use client'

import Link from 'next/link'
import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { countries } from '@/lib/cities'
import { COUNTRY_HUB_SLUGS } from '@/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCityContext } from '@/lib/CityContext'
import { getFlagUrl } from '@/shared/utils'

function getCountriesByContinent(filtered: typeof countries) {
  const continents: Record<string, typeof countries> = {
    americas: [],
    europe: [],
    asia: [],
    africa: [],
    oceania: []
  }
  filtered.forEach(country => {
    if (continents[country.continent]) {
      continents[country.continent].push(country)
    }
  })
  Object.keys(continents).forEach(key => {
    continents[key].sort((a, b) => a.name.localeCompare(b.name))
  })
  return continents
}

const continentInfo: Record<string, { name: string; emoji: string }> = {
  americas: { name: 'Americas', emoji: '🌎' },
  europe:   { name: 'Europe',   emoji: '🌍' },
  asia:     { name: 'Asia',     emoji: '🌏' },
  africa:   { name: 'Africa',   emoji: '🌍' },
  oceania:  { name: 'Oceania',  emoji: '🌏' }
}

interface DropdownPos { top: number; left: number; width: number }

export default function CountriesContent() {
  const { theme, isLight } = useCityContext()
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [dropPos, setDropPos] = useState<DropdownPos | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchDropRef = useRef<HTMLDivElement>(null)

  const searchResults = query.trim().length > 0
    ? countries.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.capital.toLowerCase().includes(query.toLowerCase()) ||
        c.timezones.some(tz => tz.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 10)
    : []

  const updateDropPos = useCallback(() => {
    if (searchInputRef.current) {
      const r = searchInputRef.current.getBoundingClientRect()
      setDropPos({ top: r.bottom + 4, left: r.left, width: r.width })
    }
  }, [])

  useEffect(() => {
    if (!searchOpen) return
    window.addEventListener('scroll', updateDropPos, true)
    window.addEventListener('resize', updateDropPos)
    return () => {
      window.removeEventListener('scroll', updateDropPos, true)
      window.removeEventListener('resize', updateDropPos)
    }
  }, [searchOpen, updateDropPos])

  useEffect(() => {
    if (!searchOpen) return
    const handler = (e: MouseEvent) => {
      if (
        searchInputRef.current && !searchInputRef.current.contains(e.target as Node) &&
        searchDropRef.current && !searchDropRef.current.contains(e.target as Node)
      ) setSearchOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [searchOpen])

  const handleSearchSelect = (slug: string) => {
    setSearchOpen(false)
    setQuery('')
    const hubSlug = COUNTRY_HUB_SLUGS[slug]
    router.push(hubSlug ? `/${hubSlug}/` : `/country/${slug}/`)
  }

  const totalCountries = countries.length

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return countries
    return countries.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.capital.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.timezones.some(tz => tz.toLowerCase().includes(q))
    )
  }, [query])

  const countriesByContinent = useMemo(() => getCountriesByContinent(filtered), [filtered])

  const textMain  = theme.text
  const textMuted = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg    = isLight ? 'bg-white/60 border-slate-200/50 hover:bg-white/80' : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-700/50'
  const badgeBg   = isLight ? 'bg-slate-200 text-slate-600' : 'bg-slate-700 text-slate-300'
  const inputBg   = isLight
    ? 'bg-white border-slate-300 focus:border-cyan-400 text-slate-800 placeholder-slate-400'
    : 'bg-slate-800 border-slate-600 focus:border-cyan-500 text-white placeholder-slate-500'

  const totalFiltered = filtered.length
  const hasResults    = totalFiltered > 0
  const isFiltering   = query.trim().length > 0

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title + Search */}
        <div className="text-center mb-6">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${textMain} mb-5 flex items-center justify-center gap-3 flex-wrap`}>
            <svg className="w-9 h-9 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            Time Zones by Country
          </h1>

          {/* Search Bar — inline with fixed dropdown */}
          <div className="relative max-w-xl mx-auto">
            <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border transition-colors ${inputBg}`}>
              <svg className={`w-5 h-5 flex-shrink-0 ${textMuted}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={e => { setQuery(e.target.value); setSearchOpen(true); updateDropPos() }}
                onFocus={() => { setSearchOpen(true); updateDropPos() }}
                placeholder={`Search ${totalCountries} countries by name, capital, or timezone…`}
                className={`flex-1 bg-transparent outline-none text-sm ${isLight ? 'text-slate-800 placeholder-slate-400' : 'text-white placeholder-slate-500'}`}
                style={{ fontSize: '16px' }}
                autoComplete="off"
                spellCheck={false}
              />
              {query && (
                <button onClick={() => { setQuery(''); setSearchOpen(false) }} className={`${textMuted} hover:text-current`} aria-label="Clear">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              )}
            </div>
            {/* Fixed dropdown */}
            {searchOpen && searchResults.length > 0 && dropPos && (
              <div
                ref={searchDropRef}
                className={`fixed z-[99999] rounded-xl border overflow-hidden shadow-xl ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-700'}`}
                style={{ top: dropPos.top, left: dropPos.left, width: dropPos.width }}
              >
                {searchResults.map(c => {
                  const hubSlug = COUNTRY_HUB_SLUGS[c.slug]
                  return (
                    <button
                      key={c.slug}
                      onMouseDown={(e) => { e.preventDefault(); handleSearchSelect(c.slug) }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left border-b last:border-0 transition-colors ${isLight ? 'border-slate-100 hover:bg-slate-50 text-slate-800' : 'border-slate-800 hover:bg-slate-800 text-slate-100'}`}
                    >
                      <img src={getFlagUrl(c.code, 'sm')} alt="" className="w-7 h-[18px] object-cover rounded-sm flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{c.name}</div>
                        <div className={`text-xs ${textMuted}`}>{c.capital} · {c.timezones[0]}</div>
                      </div>
                      {hubSlug && <span className="text-xs text-cyan-500 font-medium flex-shrink-0">Live</span>}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

        </div>

        {/* SEO Intro (hidden while searching) */}
        {!isFiltering && (
          <div className={`rounded-2xl p-6 mb-4 ${isLight ? 'bg-white/60' : 'bg-slate-800/40'}`}>
            <p className={`${theme.textMuted} leading-relaxed`}>
              Explore current local time, time zones, and detailed information for countries around the world.
              Our comprehensive directory covers {totalCountries} countries across five continents, providing
              accurate time zone data, capital cities, currencies, and phone codes. Whether you&apos;re planning
              international business calls, scheduling meetings across borders, or simply curious about the
              time in another part of the world, select any country below to view detailed time zone information.
            </p>
          </div>
        )}

        {/* No results */}
        {isFiltering && !hasResults && (
          <div className={`text-center py-16 ${textMuted}`}>
            <div className="text-5xl mb-4">🌍</div>
            <p className="text-lg font-medium mb-2">No countries match &quot;{query}&quot;</p>
            <p className="text-sm">Try a country name, capital city, or timezone (e.g. "UTC+5")</p>
          </div>
        )}

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
                    const hubSlug = COUNTRY_HUB_SLUGS[country.slug]
                    const href = hubSlug ? `/${hubSlug}/` : `/country/${country.slug}/`
                    return (
                      <Link
                        key={country.slug}
                        href={href}
                        className={`group p-3 rounded-xl border transition-all ${cardBg}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xs px-2 py-1 rounded tabular-nums font-medium flex-shrink-0 ${badgeBg}`}>
                            {country.code.toUpperCase()}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className={`font-medium truncate group-hover:text-cyan-500 transition-colors ${textMain}`}>
                              {country.name}
                            </div>
                            <div className={`text-xs truncate ${textMuted}`}>
                              {hubSlug ? (
                                <span className="text-cyan-600 dark:text-cyan-400 font-medium">● Live clock</span>
                              ) : (
                                country.timezones[0]
                              )}
                            </div>
                          </div>
                          <img
                            src={getFlagUrl(country.code)}
                            alt={`${country.name} flag`}
                            className="w-6 h-4 object-cover rounded-sm flex-shrink-0"
                          />
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
        {!isFiltering && (
          <div className="mt-12 text-center">
            <p className={`${textMuted} mb-4`}>
              Looking for a US state or specific city?
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors"
            >
              🔍 Search Cities & States
            </Link>
          </div>
        )}

        {/* SEO Content Section */}
        {!isFiltering && (
          <div className={`mt-12 rounded-2xl p-6 ${isLight ? 'bg-white/60' : 'bg-slate-800/40'}`}>
            <h2 className={`text-xl font-semibold mb-4 ${textMain}`}>
              Understanding World Time Zones
            </h2>
            <div className={`space-y-4 ${theme.textMuted}`}>
              <p>
                The world is divided into 24 standard time zones, each typically spanning 15 degrees of longitude.
                However, many countries have adopted time zones that don&apos;t follow these exact boundaries for
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
                and North America observe DST, while most of Asia, Africa, and South America do not.
              </p>
              <h3 className={`text-lg font-medium mt-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
                International Business and Time Zones
              </h3>
              <p>
                Understanding time zones is crucial for international business, travel, and communication.
                Countries marked with <span className="text-cyan-600 dark:text-cyan-400 font-medium">● Live clock</span> have
                dedicated hub pages with a real-time clock, time zone comparison tables, and FAQ content.
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
