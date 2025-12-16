'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { cities } from '@/lib/cities'
import { getCityContext } from '@/lib/city-context'
import ToolsMiniNav from '@/components/ToolsMiniNav'

export default function TimeConverterPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [fromCity, setFromCity] = useState(cities.find(c => c.city === 'New York') || cities[0])
  const [toCity, setToCity] = useState(cities.find(c => c.city === 'London') || cities[1])
  const [selectedHour, setSelectedHour] = useState(12)
  const [selectedMinute, setSelectedMinute] = useState(0)
  // Theme coordinates - from city context or defaults
  const [themeLat, setThemeLat] = useState(40.71)
  const [themeLng, setThemeLng] = useState(-74.01)
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    
    // Priority 1: Check for saved city context (from city page navigation)
    const savedContext = getCityContext()
    if (savedContext) {
      setThemeLat(savedContext.lat)
      setThemeLng(savedContext.lng)
      // Also set fromCity to the context city
      const contextCity = cities.find(c => c.slug === savedContext.slug)
      if (contextCity) {
        setFromCity(contextCity)
      }
    } else {
      // Priority 2: Try geolocation only if no saved context
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setThemeLat(pos.coords.latitude)
            setThemeLng(pos.coords.longitude)
          },
          () => {} // Silent fail, use defaults
        )
      }
    }
    
    return () => clearInterval(timer)
  }, [])
  
  const timeOfDay = getTimeOfDay(currentTime, themeLat, themeLng)
  const theme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)

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

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src={isLight ? "/logo.svg" : "/logo-dark.svg"} 
              alt="whattime.city" 
              className="h-11 sm:h-14"
            />
          </Link>
          <nav className="flex items-center gap-4">
            <Link 
              href="/"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isLight ? 'text-slate-600 hover:bg-white/60' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              World Clock
            </Link>
            <Link 
              href="/tools"
              className={`px-4 py-2 rounded-full text-sm font-medium ${theme.accentBg} text-white`}
            >
              Tools
            </Link>
          </nav>
        </header>

        {/* Mini Navigation */}
        <ToolsMiniNav isLight={isLight} theme={theme} />

        {/* Tool Hero */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Time Converter
          </h1>
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Convert time between any two cities instantly
          </p>
        </div>

        {/* Tool Interface */}
        <div className={`rounded-2xl p-6 mb-8 backdrop-blur-xl border ${
          isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* From City */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                From
              </label>
              <select
                value={fromCity.city}
                onChange={(e) => setFromCity(cities.find(c => c.city === e.target.value) || cities[0])}
                className={`w-full px-4 py-3 rounded-xl border ${
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
                <span className={`flex items-center ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>:</span>
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
              <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                To
              </label>
              <select
                value={toCity.city}
                onChange={(e) => setToCity(cities.find(c => c.city === e.target.value) || cities[1])}
                className={`w-full px-4 py-3 rounded-xl border ${
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
        <section className={`rounded-2xl p-6 mb-6 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Common Use Cases
          </h2>
          <ul className={`space-y-3 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
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
        <section className={`rounded-2xl p-6 mb-6 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Who Is This Tool For?
          </h2>
          <p className={`${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            This tool is ideal for remote workers, international business professionals, frequent travelers, 
            and anyone who needs to coordinate across time zones. Whether you're scheduling a call with overseas 
            clients or planning when to contact family abroad, the Time Converter gives you instant answers.
          </p>
        </section>

        {/* SEO SECTION 3: Related Tools */}
        <section className={`rounded-2xl p-6 mb-6 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/tools/meeting-planner" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Meeting Planner</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Find overlap hours</div>
            </Link>
            <Link href="/tools/event-time" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Event Time</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Share event times</div>
            </Link>
            <Link href="/" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>World Clock</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>See all time zones</div>
            </Link>
          </div>
        </section>

        {/* SEO SECTION 4: FAQ */}
        <section className={`rounded-2xl p-6 mb-8 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Frequently Asked Questions
          </h2>
          <div className={`space-y-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Does this tool account for Daylight Saving Time?
              </h3>
              <p className="text-sm">
                Yes. The converter automatically adjusts for DST based on each city's current rules.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                How accurate is the time conversion?
              </h3>
              <p className="text-sm">
                Conversions are based on the IANA time zone database, the same source used by operating systems worldwide.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Can I convert time for cities not listed?
              </h3>
              <p className="text-sm">
                We support over 150 major cities. Use the World Clock to find cities in the same time zone as your target.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`pt-6 border-t ${isLight ? 'border-slate-200/50' : 'border-slate-700/50'}`}>
          <div className="text-center">
            <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              © {new Date().getFullYear()} whattime.city — All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
