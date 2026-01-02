'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cities } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'
import { useCityContext } from '@/lib/CityContext'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'

export default function TimeConverterPage() {
  // Theme from useThemeClasses
  const { theme, isLight, text, textMuted, card, accentBg, accentText } = useThemeClasses()
  const { activeCity } = useCityContext()
  
  // Get initial city from context or default
  const [fromCity, setFromCity] = useState(() => cities.find(c => c.city === 'New York') || cities[0])
  const [toCity, setToCity] = useState(() => cities.find(c => c.city === 'London') || cities[1])
  const [selectedHour, setSelectedHour] = useState(12)
  const [selectedMinute, setSelectedMinute] = useState(0)
  
  // Sync fromCity with context when it becomes available
  useEffect(() => {
    if (activeCity) {
      setFromCity(activeCity)
    }
  }, [activeCity])

  // Calculate converted time
  const getConvertedTime = () => {
    const now = new Date()
    now.setHours(selectedHour, selectedMinute, 0, 0)
    
    const fromOffset = new Date(now.toLocaleString('en-US', { timeZone: fromCity.timezone })).getTime()
    const toOffset = new Date(now.toLocaleString('en-US', { timeZone: toCity.timezone })).getTime()
    const localOffset = now.getTime()
    
    const diff = (toOffset - fromOffset)
    const convertedTime = new Date(now.getTime() + diff)
    
    return convertedTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const swapCities = () => {
    const temp = fromCity
    setFromCity(toCity)
    setToCity(temp)
  }

  // NO container/header here - from layout
  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        {/* Mini Navigation */}
        <ToolsMiniNav />

        {/* Tool Hero */}
        <div className="text-center mb-6">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.text}`}>
            Time Converter
          </h1>
          <p className={`text-lg ${theme.textMuted}`}>
            Convert time between any two cities instantly
          </p>
        </div>

        {/* Tool Interface */}
        <div className={`rounded-2xl p-6 mb-4 backdrop-blur-xl ${
          theme.card
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* From City */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>
                From
              </label>
              <select
                value={fromCity.city}
                onChange={(e) => setFromCity(cities.find(c => c.city === e.target.value) || cities[0])}
                className={`w-full px-4 py-3 rounded-xl ${
                  isLight 
                    ? 'bg-white border-slate-200 text-slate-800' 
                    : 'bg-slate-700 border-slate-600 text-white'
                }`}
              >
                {cities.map(city => (
                  <option key={city.slug} value={city.city}>{city.city}, {city.country}</option>
                ))}
              </select>
              <div className="mt-2 flex gap-2">
                <select
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(parseInt(e.target.value))}
                  className={`flex-1 px-3 py-2 rounded-lg border text-center ${
                    isLight 
                      ? 'bg-white border-slate-200 text-slate-800' 
                      : 'bg-slate-700 border-slate-600 text-white'
                  }`}
                >
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                  ))}
                </select>
                <span className={`flex items-center ${theme.textMuted}`}>:</span>
                <select
                  value={selectedMinute}
                  onChange={(e) => setSelectedMinute(parseInt(e.target.value))}
                  className={`flex-1 px-3 py-2 rounded-lg border text-center ${
                    isLight 
                      ? 'bg-white border-slate-200 text-slate-800' 
                      : 'bg-slate-700 border-slate-600 text-white'
                  }`}
                >
                  {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <button
                onClick={swapCities}
                className={`p-3 rounded-full transition-all ${
                  isLight 
                    ? 'bg-white hover:bg-slate-100 text-slate-600' 
                    : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 16l-4-4 4-4"/>
                  <path d="M17 8l4 4-4 4"/>
                  <path d="M3 12h18"/>
                </svg>
              </button>
            </div>

            {/* To City */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>
                To
              </label>
              <select
                value={toCity.city}
                onChange={(e) => setToCity(cities.find(c => c.city === e.target.value) || cities[1])}
                className={`w-full px-4 py-3 rounded-xl ${
                  isLight 
                    ? 'bg-white border-slate-200 text-slate-800' 
                    : 'bg-slate-700 border-slate-600 text-white'
                }`}
              >
                {cities.map(city => (
                  <option key={city.slug} value={city.city}>{city.city}, {city.country}</option>
                ))}
              </select>
              <div className={`mt-2 text-center text-2xl font-bold ${theme.accentText}`}>
                {getConvertedTime()}
              </div>
            </div>
          </div>
        </div>

        {/* SEO SECTION 1: Common Use Cases */}
        <section className={`rounded-2xl p-6 mb-4 backdrop-blur-xl ${
          theme.card
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>
            Common Use Cases
          </h2>
          <ul className={`space-y-3 ${theme.textMuted}`}>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Scheduling international calls</strong> — Find the right time to call colleagues, clients, or family abroad.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Planning virtual meetings</strong> — Coordinate meeting times across multiple time zones.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Travel preparation</strong> — Know what time it will be at your destination when you depart.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Remote work coordination</strong> — Align working hours with distributed team members.
              </div>
            </li>
          </ul>
        </section>

        {/* SEO SECTION 2: Who Is This Tool For? */}
        <section className={`rounded-2xl p-6 mb-4 backdrop-blur-xl ${
          theme.card
        }`}>
          <h2 className={`text-xl font-semibold mb-3 ${theme.text}`}>
            Who Is This Tool For?
          </h2>
          <p className={`${theme.textMuted}`}>
            This tool is ideal for remote workers, international business professionals, frequent travelers, 
            and anyone who needs to coordinate across time zones. Whether you're scheduling a call with overseas 
            clients or planning when to contact family abroad, the Time Converter gives you instant answers.
          </p>
        </section>

        {/* SEO SECTION 3: Related Tools */}
        <section className={`rounded-2xl p-6 mb-4 backdrop-blur-xl ${
          theme.card
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/meeting-planner" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${theme.text}`}>Meeting Planner</div>
              <div className={`text-xs ${theme.textMuted}`}>Find overlap hours</div>
            </Link>
            <Link href="/event-time" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${theme.text}`}>Event Time</div>
              <div className={`text-xs ${theme.textMuted}`}>Share event times</div>
            </Link>
            <Link href="/" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${theme.text}`}>World Clock</div>
              <div className={`text-xs ${theme.textMuted}`}>See all time zones</div>
            </Link>
          </div>
        </section>

        {/* SEO SECTION 4: FAQ */}
        <section className={`rounded-2xl p-6 mb-4 backdrop-blur-xl ${
          theme.card
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>
            Frequently Asked Questions
          </h2>
          <div className={`space-y-4 ${theme.textMuted}`}>
            <div>
              <h3 className={`font-medium mb-1 ${theme.text}`}>
                Does this tool account for Daylight Saving Time?
              </h3>
              <p className="text-sm">
                Yes. The converter automatically adjusts for DST based on each city's current rules.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${theme.text}`}>
                How accurate is the time conversion?
              </h3>
              <p className="text-sm">
                Conversions are based on the IANA time zone database, the same source used by operating systems worldwide.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${theme.text}`}>
                Can I convert time for cities not listed?
              </h3>
              <p className="text-sm">
                We support over 150 major cities. Use the World Clock to find cities in the same time zone as your target.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer - Full Width */}
      <div className="relative z-10 mt-10">
        <Footer />
      </div>
    </>
  )
}
