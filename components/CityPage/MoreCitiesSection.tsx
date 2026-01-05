'use client'

import { useState, useEffect } from 'react'
import { City, getCitiesByCountryCode, getCountryBySlug } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'
import { useCityContext } from '@/lib/CityContext'

interface MoreCitiesSectionProps {
  selectedCity: City
}

export default function MoreCitiesSection({ selectedCity }: MoreCitiesSectionProps) {
  const { card, text, textMuted, accentText, isLight } = useThemeClasses()
  const { use12Hour } = useCityContext()
  
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  const countryCities = getCitiesByCountryCode(selectedCity.countryCode)
    .filter(c => c.slug !== selectedCity.slug)
    .slice(0, 8)
  const countryData = getCountryBySlug(selectedCity.country.toLowerCase().replace(/\s+/g, '-'))
  
  if (countryCities.length === 0) return null
  
  const formatCityTime = (city: City) => {
    const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
    return cityTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: use12Hour 
    })
  }
  
  return (
    <div className={`rounded-3xl p-6 backdrop-blur-xl border ${card} mt-4`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-lg font-bold flex items-center gap-2 ${text}`}>
          <span>🏙️</span>
          More Cities in {selectedCity.country}
        </h2>
        {countryData && (
          <a 
            href={`/country/${countryData.slug}`}
            className={`text-sm font-medium ${accentText} hover:underline`}
          >
            View Country →
          </a>
        )}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {countryCities.map(city => (
          <a
            key={city.slug}
            href={`/${city.slug}`}
            className={`p-3 rounded-xl transition-all ${
              isLight 
                ? 'bg-slate-100 hover:bg-slate-200' 
                : 'bg-slate-800/50 hover:bg-slate-700/50'
            }`}
          >
            <div className={`font-medium text-sm ${text}`}>{city.city}</div>
            <div className={`text-xs mt-0.5 ${textMuted}`}>
              {formatCityTime(city)}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
