'use client'

import { City, getCitiesByContinent } from '@/lib/cities'
import type { ContinentFilter } from '@/lib/cities'
import { themes } from '@/lib/themes'
import { Translations } from '@/lib/translations'
import CityCard from '@/components/CityCard'

interface WorldCitiesGridProps {
  selectedCity: City
  onCitySelect: (city: City) => void
  selectedContinent: ContinentFilter
  onContinentChange: (continent: ContinentFilter) => void
  continentFilter: string
  onFilterChange: (filter: string) => void
  theme: typeof themes[keyof typeof themes]
  currentTheme: string
  isLight: boolean
  use12Hour: boolean
  t: Translations
}

const CONTINENTS: ContinentFilter[] = ['all', 'americas', 'europe', 'asia', 'africa', 'oceania']

export default function WorldCitiesGrid({
  selectedCity,
  onCitySelect,
  selectedContinent,
  onContinentChange,
  continentFilter,
  onFilterChange,
  theme,
  currentTheme,
  isLight,
  use12Hour,
  t
}: WorldCitiesGridProps) {
  const filteredCities = getCitiesByContinent(selectedContinent).filter(city => 
    selectedContinent === 'all' || !continentFilter ||
    city.city.toLowerCase().includes(continentFilter.toLowerCase()) ||
    city.country.toLowerCase().includes(continentFilter.toLowerCase())
  )

  return (
    <div className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card} mt-4`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h3 className={`text-xl font-semibold ${theme.text} self-center`}>
          {t.worldCities}
        </h3>
        
        {/* Continent Tabs */}
        <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-full ${isLight ? 'bg-slate-100' : 'bg-slate-800/60'}`}>
          {CONTINENTS.map((continent) => (
            <button
              key={continent}
              onClick={() => {
                onContinentChange(continent)
                onFilterChange('')
              }}
              className={`px-4 py-1.5 rounded-full text-base font-medium transition-all ${
                selectedContinent === continent
                  ? `${theme.accentBg} text-white shadow`
                  : isLight ? 'text-slate-600 hover:bg-white' : 'text-slate-400 hover:bg-slate-700'
              }`}
            >
              {continent === 'all' ? t.topCities : t[continent]}
            </button>
          ))}
        </div>
      </div>
      
      {/* Continent Filter */}
      {selectedContinent !== 'all' && (
        <div className="flex items-center gap-3 mb-4">
          <div className={`flex items-center gap-2 flex-1 max-w-xs px-3 py-2 rounded-xl ${isLight ? 'bg-white/60' : 'bg-slate-800/60'}`}>
            <svg className={`w-4 h-4 ${theme.textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={continentFilter}
              onChange={(e) => onFilterChange(e.target.value)}
              placeholder={`Filter ${t[selectedContinent]}...`}
              className={`bg-transparent outline-none text-sm w-full ${theme.text} placeholder:${theme.textMuted}`}
            />
            {continentFilter && (
              <button onClick={() => onFilterChange('')} className={`${theme.textMuted} hover:${theme.text}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <span className={`text-sm ${theme.textMuted}`}>
            {filteredCities.length} cities
          </span>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCities.map((city) => (
          <CityCard
            key={city.slug}
            city={city}
            isSelected={selectedCity.slug === city.slug}
            onClick={() => onCitySelect(city)}
            currentTheme={currentTheme}
            themeData={theme}
            use12Hour={use12Hour}
          />
        ))}
      </div>
    </div>
  )
}
