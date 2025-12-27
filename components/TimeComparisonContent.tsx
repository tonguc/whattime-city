'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CompareWidget from '@/components/CompareWidget'

interface TimeComparisonContentProps {
  fromCity: City
  toCity: City
}

// ---------- helpers ----------
function getTimezoneOffset(timezone: string): number {
  const now = new Date()
  const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }))
  const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }))
  return (tzDate.getTime() - utcDate.getTime()) / (1000 * 60 * 60)
}

function formatTimeDifference(hours: number): string {
  const abs = Math.abs(hours)
  const h = Math.floor(abs)
  const m = Math.round((abs - h) * 60)
  return m === 0
    ? `${h} hour${h !== 1 ? 's' : ''}`
    : `${h} hour${h !== 1 ? 's' : ''} ${m} min`
}

const TimeIcon = ({ timeOfDay }: { timeOfDay: string }) => {
  const icons: Record<string, string> = {
    dawn: '🌅',
    day: '☀️',
    dusk: '🌆',
    night: '🌙'
  }
  return <span className="text-2xl">{icons[timeOfDay] || '🕐'}</span>
}

// ---------- component ----------
export default function TimeComparisonContent({
  fromCity: initialFromCity,
  toCity: initialToCity
}: TimeComparisonContentProps) {
  const [time, setTime] = useState(new Date())

  // 🔑 swap’e bağlı gerçek state
  const [fromCity, setFromCity] = useState<City>(initialFromCity)
  const [toCity, setToCity] = useState<City>(initialToCity)

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  // ---------- time calculations ----------
  const fromTime = time.toLocaleTimeString('en-US', {
    timeZone: fromCity.timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })

  const toTime = time.toLocaleTimeString('en-US', {
    timeZone: toCity.timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })

  const fromDate = time.toLocaleDateString('en-US', {
    timeZone: fromCity.timezone,
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })

  const toDate = time.toLocaleDateString('en-US', {
    timeZone: toCity.timezone,
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })

  const fromTimeOfDay = getTimeOfDay(time, fromCity.lat, fromCity.lng, fromCity.timezone)
  const toTimeOfDay = getTimeOfDay(time, toCity.lat, toCity.lng, toCity.timezone)

  const mainTheme = themes[fromTimeOfDay]
  const isLight = isLightTheme(fromTimeOfDay)

  const diffHours =
    getTimezoneOffset(toCity.timezone) -
    getTimezoneOffset(fromCity.timezone)

  // ---------- swap handler ----------
  const handleCitiesChange = (newFrom: City | null, newTo: City | null) => {
    if (newFrom) setFromCity(newFrom)
    if (newTo) setToCity(newTo)
  }

  // ---------- render ----------
  return (
    <div
      className={`min-h-screen transition-colors duration-700 bg-gradient-to-br ${mainTheme.bg}`}
    >
      {/* ✅ Header artık theme aware */}
      <Header isLight={isLight} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1
          className={`text-2xl sm:text-3xl font-bold text-center mb-6 ${
            isLight ? 'text-slate-800' : 'text-white'
          }`}
        >
          {fromCity.city} → {toCity.city} Time
        </h1>

        <div className="max-w-2xl mx-auto mb-8">
          <CompareWidget
            initialFromCity={fromCity}
            initialToCity={toCity}
            isLight={isLight}
            onCitiesChange={handleCitiesChange}
          />
        </div>

        {/* clocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[{ city: fromCity, time: fromTime, date: fromDate, tod: fromTimeOfDay },
            { city: toCity, time: toTime, date: toDate, tod: toTimeOfDay }
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl backdrop-blur-xl border ${
                isLight
                  ? 'bg-white/50 border-white/60'
                  : 'bg-slate-800/50 border-slate-700/60'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <TimeIcon timeOfDay={item.tod} />
                <div>
                  <h2 className={`text-xl font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                    {item.city.city}
                  </h2>
                  <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    {item.city.country}
                  </p>
                </div>
              </div>
              <div className={`text-5xl font-bold mb-2 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                {item.time}
              </div>
              <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {item.date}
              </p>
            </div>
          ))}
        </div>

        {/* difference */}
        <div
          className={`text-center mb-8 p-4 rounded-2xl backdrop-blur-xl ${
            isLight ? 'bg-white/50' : 'bg-slate-800/50'
          }`}
        >
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <span className={`font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>
              {formatTimeDifference(Math.abs(diffHours))}
            </span>{' '}
            {diffHours > 0 ? 'ahead' : diffHours < 0 ? 'behind' : 'same time'}
          </p>
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/time/${toCity.slug}/${fromCity.slug}`}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              isLight
                ? 'bg-slate-800 text-white hover:bg-slate-700'
                : 'bg-white text-slate-800 hover:bg-slate-100'
            }`}
          >
            🔄 View {toCity.city} to {fromCity.city}
          </Link>
        </div>
      </main>

      <Footer isLight={isLight} />
    </div>
  )
}
