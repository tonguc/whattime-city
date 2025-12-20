'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { City, cities } from '@/lib/cities'
import { getTimeOfDay, getSunTimes, formatSunTime } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { saveCityContext } from '@/lib/city-context'

interface CityPageContentProps {
  city: City
}

// Comparison cities for each region
const comparisonCities: Record<string, string[]> = {
  americas: ['london', 'tokyo', 'dubai', 'sydney'],
  europe: ['new-york', 'tokyo', 'dubai', 'sydney'],
  asia: ['new-york', 'london', 'dubai', 'sydney'],
  africa: ['new-york', 'london', 'tokyo', 'dubai'],
  oceania: ['new-york', 'london', 'tokyo', 'singapore'],
}

// Tool cards data
const tools = [
  { 
    slug: 'converter', 
    icon: '🔄', 
    title: 'Time Converter',
    desc: 'Convert time between cities'
  },
  { 
    slug: 'meeting-planner', 
    icon: '📅', 
    title: 'Meeting Planner',
    desc: 'Find best meeting times'
  },
  { 
    slug: 'flight-times', 
    icon: '✈️', 
    title: 'Flight Time',
    desc: 'Calculate flight duration'
  },
  { 
    slug: 'jet-lag', 
    icon: '😴', 
    title: 'Jet Lag Advisor',
    desc: 'Plan your recovery'
  },
]

export default function CityPageContent({ city }: CityPageContentProps) {
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    // Save city context on mount
    saveCityContext({
      slug: city.slug,
      city: city.city,
      lat: city.lat,
      lng: city.lng,
      timezone: city.timezone
    })
    
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [city])
  
  // Theme calculation using real UTC time
  const timeOfDay = getTimeOfDay(time, city.lat, city.lng, city.timezone)
  const theme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)
  
  // Sun times
  const { sunrise, sunset } = getSunTimes(time, city.lat, city.lng)
  
  // Local time display
  const localTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const timeStr = localTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })
  const dateStr = localTime.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
  
  // Timezone offset
  const offset = new Date().toLocaleString('en-US', { 
    timeZone: city.timezone, 
    timeZoneName: 'shortOffset' 
  }).split(' ').pop() || ''
  
  // Get comparison cities
  const continent = city.continent || 'americas'
  const comparisons = comparisonCities[continent]
    .map(slug => cities.find(c => c.slug === slug))
    .filter((c): c is City => c !== undefined && c.slug !== city.slug)
    .slice(0, 4)
  
  // Calculate time difference
  const getTimeDiff = (otherCity: City) => {
    const cityOffset = getOffsetHours(city.timezone)
    const otherOffset = getOffsetHours(otherCity.timezone)
    const diff = otherOffset - cityOffset
    if (diff === 0) return 'Same time'
    return diff > 0 ? `+${diff}h` : `${diff}h`
  }
  
  const getOffsetHours = (tz: string) => {
    const date = new Date()
    const utc = date.getTime() + date.getTimezoneOffset() * 60000
    const tzTime = new Date(utc).toLocaleString('en-US', { timeZone: tz })
    const tzDate = new Date(tzTime)
    return Math.round((tzDate.getTime() - utc) / 3600000)
  }
  
  // FAQ data for schema
  const faqs = [
    {
      q: `What time is it in ${city.city} right now?`,
      a: `The current local time in ${city.city} is ${timeStr} on ${dateStr}. ${city.city} uses the ${city.timezone} timezone (${offset}).`
    },
    {
      q: `What timezone is ${city.city} in?`,
      a: `${city.city} is in the ${city.timezone} timezone, which is ${offset} from UTC. ${city.info?.seoContent?.daylightSaving || `Check if ${city.city} observes Daylight Saving Time for accurate conversions.`}`
    },
    {
      q: `What is the best time to call ${city.city}?`,
      a: city.info?.seoContent?.businessHours || `Business hours in ${city.city} are typically 9 AM to 5 PM local time. For international calls, consider the time difference with your location.`
    },
    {
      q: `When does the sun rise and set in ${city.city}?`,
      a: `Today in ${city.city}, sunrise is at ${formatSunTime(sunrise)} and sunset is at ${formatSunTime(sunset)} local time. These times change throughout the year.`
    }
  ]

  return (
    <div className={`relative z-10 bg-gradient-to-br ${theme.bg}`}>
      {/* SEO H1 - Screen reader ve SEO için */}
      <h1 className="sr-only">Current Time in {city.city}, {city.country}</h1>
      
      {/* Quick Actions - Tool Entry Points */}
      <section className="px-4 py-8 max-w-6xl mx-auto">
        <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
          ⚡ Quick Tools for {city.city}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {tools.map(tool => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className={`p-4 rounded-2xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${
                isLight 
                  ? 'bg-white/60 border-white/50 hover:bg-white/80' 
                  : 'bg-slate-800/60 border-slate-700/50 hover:bg-slate-700/60'
              }`}
            >
              <div className="text-2xl mb-2">{tool.icon}</div>
              <div className={`font-medium text-sm ${isLight ? 'text-slate-800' : 'text-white'}`}>
                {tool.title}
              </div>
              <div className={`text-xs mt-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {tool.desc}
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Quick Facts */}
      <section className="px-4 py-8 max-w-6xl mx-auto">
        <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
          📊 Quick Facts
        </h2>
        <div className={`rounded-2xl backdrop-blur-xl border p-6 ${
          isLight 
            ? 'bg-white/60 border-white/50' 
            : 'bg-slate-800/60 border-slate-700/50'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className={`text-xs uppercase tracking-wide mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Timezone
              </div>
              <div className={`font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                {offset}
              </div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {city.timezone}
              </div>
            </div>
            <div>
              <div className={`text-xs uppercase tracking-wide mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Sunrise
              </div>
              <div className={`font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                {formatSunTime(sunrise)}
              </div>
            </div>
            <div>
              <div className={`text-xs uppercase tracking-wide mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Sunset
              </div>
              <div className={`font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                {formatSunTime(sunset)}
              </div>
            </div>
            {city.info && (
              <div>
                <div className={`text-xs uppercase tracking-wide mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Population
                </div>
                <div className={`font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                  {city.info.population}
                </div>
              </div>
            )}
          </div>
          
          {city.info && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-slate-200/20">
              <div>
                <div className={`text-xs uppercase tracking-wide mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Currency
                </div>
                <div className={`font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                  {city.info.currencySymbol} {city.info.currency}
                </div>
              </div>
              <div>
                <div className={`text-xs uppercase tracking-wide mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Phone Code
                </div>
                <div className={`font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                  {city.info.phoneCode}
                </div>
              </div>
              <div>
                <div className={`text-xs uppercase tracking-wide mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Language
                </div>
                <div className={`font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                  {city.info.language}
                </div>
              </div>
              <div>
                <div className={`text-xs uppercase tracking-wide mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Country
                </div>
                <Link 
                  href={`/country/${city.country.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`font-semibold hover:underline ${isLight ? 'text-slate-800' : 'text-white'}`}
                >
                  {city.country}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Time Comparison */}
      <section className="px-4 py-8 max-w-6xl mx-auto">
        <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
          🌍 Time Comparison
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {comparisons.map(otherCity => {
            const otherLocalTime = new Date(time.toLocaleString('en-US', { timeZone: otherCity.timezone }))
            const otherTimeStr = otherLocalTime.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: false 
            })
            const otherTimeOfDay = getTimeOfDay(time, otherCity.lat, otherCity.lng, otherCity.timezone)
            const otherTheme = themes[otherTimeOfDay]
            
            return (
              <Link
                key={otherCity.slug}
                href={`/${otherCity.slug}`}
                className={`p-4 rounded-2xl backdrop-blur-xl border transition-all hover:scale-[1.02] ${
                  isLight 
                    ? 'bg-white/60 border-white/50 hover:bg-white/80' 
                    : 'bg-slate-800/60 border-slate-700/50 hover:bg-slate-700/60'
                }`}
              >
                <div className={`text-xs uppercase tracking-wide mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {otherCity.country}
                </div>
                <div className={`font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                  {otherCity.city}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className={`text-lg font-medium ${otherTheme.accentClass}`}>
                    {otherTimeStr}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {getTimeDiff(otherCity)}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
      
      {/* Travel Planning Section - Affiliate Ready */}
      <section className="px-4 py-8 max-w-6xl mx-auto">
        <div className={`rounded-2xl backdrop-blur-xl border p-6 ${
          isLight 
            ? 'bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border-blue-100' 
            : 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-blue-800/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-2 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            ✈️ Planning a Trip to {city.city}?
          </h2>
          <p className={`mb-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            {city.info?.seoContent?.bestTimeToVisit || 
              `${city.city} is a wonderful destination. Check local time, weather, and plan your perfect visit.`}
          </p>
          
          {city.info?.seoContent?.businessHours && (
            <div className="mb-4">
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                🕐 Business Hours
              </h3>
              <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {city.info.seoContent.businessHours}
              </p>
            </div>
          )}
          
          {city.info?.attractions && (
            <div>
              <h3 className={`font-medium mb-2 ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                🎯 Top Attractions
              </h3>
              <div className="flex flex-wrap gap-2">
                {city.info.attractions.slice(0, 5).map((attraction, i) => (
                  <span 
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full ${
                      isLight 
                        ? 'bg-white/80 text-slate-700' 
                        : 'bg-slate-800/80 text-slate-300'
                    }`}
                  >
                    {attraction}
                  </span>
                ))}
              </div>
            </div>
          )}
          

        </div>
      </section>
      
      {/* FAQ Section with Schema.org markup */}
      <section className="px-4 py-8 max-w-6xl mx-auto">
        <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details 
              key={i}
              className={`group rounded-2xl backdrop-blur-xl border overflow-hidden ${
                isLight 
                  ? 'bg-white/60 border-white/50' 
                  : 'bg-slate-800/60 border-slate-700/50'
              }`}
            >
              <summary className={`p-4 cursor-pointer font-medium flex items-center justify-between ${
                isLight ? 'text-slate-800' : 'text-white'
              }`}>
                {faq.q}
                <span className="text-lg transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className={`px-4 pb-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
        
        {/* JSON-LD Schema for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.q,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': faq.a
                }
              }))
            })
          }}
        />
      </section>
      
      {/* Footer */}
      <footer className={`mt-12 pt-8 border-t text-center ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
        <nav className={`flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-sm`}>
          <a href="/" className={`hover:underline ${isLight ? 'text-slate-600 hover:text-slate-800' : 'text-slate-400 hover:text-white'}`}>World Clock</a>
          <a href="/map" className={`hover:underline ${isLight ? 'text-slate-600 hover:text-slate-800' : 'text-slate-400 hover:text-white'}`}>World Map</a>
          <a href="/country" className={`hover:underline ${isLight ? 'text-slate-600 hover:text-slate-800' : 'text-slate-400 hover:text-white'}`}>Countries</a>
          <a href="/tools" className={`hover:underline ${isLight ? 'text-slate-600 hover:text-slate-800' : 'text-slate-400 hover:text-white'}`}>Tools</a>
          <a href="/widget" className={`hover:underline ${isLight ? 'text-slate-600 hover:text-slate-800' : 'text-slate-400 hover:text-white'}`}>Free Widget</a>
        </nav>
        <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
          © {new Date().getFullYear()} whattime.city
        </p>
        <div className={`flex justify-center gap-4 mt-3 text-xs ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
          <a href="/about" className="hover:underline">About</a>
          <span>•</span>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <span>•</span>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </footer>
      
      <div className="h-8" />
    </div>
  )
}
