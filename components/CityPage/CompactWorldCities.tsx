'use client'

import { useState } from 'react'
import { City, getTier1Cities, cities } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface CompactWorldCitiesProps {
  selectedCity: City
  onCitySelect: (city: City) => void
}

// Get current time for a city
function getCurrentTime(city: City): string {
  const now = new Date()
  return now.toLocaleTimeString('en-US', {
    timeZone: city.timezone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })
}

export default function CompactWorldCities({ selectedCity, onCitySelect }: CompactWorldCitiesProps) {
  const { card, textSection, textMeta, textCityName, textCityTime, isLight } = useThemeClasses()
  const [showAll, setShowAll] = useState(false)
  
  // Get diverse cities (exclude selected city)
  const worldCities = getTier1Cities()
    .filter(c => c.slug !== selectedCity.slug)
    .slice(0, showAll ? 24 : 12)
  
  const totalCities = getTier1Cities().filter(c => c.slug !== selectedCity.slug).length
  const remainingCount = totalCities - 12

  return (
    <section className={`rounded-2xl p-5 border ${card} mt-4`}>
      <h3 className={`mb-4 ${textSection}`}>
        🌍 World Cities
      </h3>
      
      {/* Compact City Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {worldCities.map((city) => (
          <a
            key={city.slug}
            href={`/${city.slug}`}
            onClick={(e) => {
              e.preventDefault()
              onCitySelect(city)
            }}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
              isLight 
                ? 'bg-slate-100 hover:bg-slate-200' 
                : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span className={textCityName}>
              {city.city}
            </span>
            <span className={`time-display text-sm ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {getCurrentTime(city)}
            </span>
          </a>
        ))}
      </div>
      
      {/* Show More Button */}
      {!showAll && remainingCount > 0 && (
        <button
          onClick={() => setShowAll(true)}
          className={`w-full mt-4 py-2.5 rounded-lg text-body font-medium transition-all ${
            isLight 
              ? 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200' 
              : 'bg-slate-800/50 hover:bg-slate-700 text-slate-400 border border-slate-700'
          }`}
        >
          Show {remainingCount} more cities
        </button>
      )}
      
      {/* Show Less Button */}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className={`w-full mt-4 py-2.5 rounded-lg text-body font-medium transition-all ${
            isLight 
              ? 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200' 
              : 'bg-slate-800/50 hover:bg-slate-700 text-slate-400 border border-slate-700'
          }`}
        >
          Show less
        </button>
      )}
      
      {/* All Cities Link */}
      <div className="mt-4 text-center">
        <a 
          href="/cities" 
          className={`text-body font-semibold ${isLight ? 'text-blue-600' : 'text-blue-400'} hover:underline`}
        >
          View all {cities.length} cities →
        </a>
      </div>
    </section>
  )
}
