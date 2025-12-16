'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { cities } from '@/lib/cities'
import ToolsMiniNav from '@/components/ToolsMiniNav'

export default function MeetingPlannerPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedCities, setSelectedCities] = useState([
    cities.find(c => c.city === 'New York') || cities[0],
    cities.find(c => c.city === 'London') || cities[1],
    cities.find(c => c.city === 'Tokyo') || cities[2]
  ])
  const [userLat, setUserLat] = useState(40.71)
  const [userLng, setUserLng] = useState(-74.01)
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLat(pos.coords.latitude)
          setUserLng(pos.coords.longitude)
        },
        () => {}
      )
    }
    return () => clearInterval(timer)
  }, [])
  
  const timeOfDay = getTimeOfDay(currentTime, userLat, userLng)
  const theme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)

  // Get current hour in each city
  const getCityHour = (timezone: string) => {
    return new Date().toLocaleString('en-US', { 
      timeZone: timezone, 
      hour: 'numeric', 
      hour12: false 
    })
  }

  // Check if hour is within working hours (9-17)
  const isWorkingHour = (hour: number) => hour >= 9 && hour <= 17

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
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
            <Link href="/" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isLight ? 'text-slate-600 hover:bg-white/60' : 'text-slate-300 hover:bg-slate-800/60'
            }`}>
              World Clock
            </Link>
            <Link href="/tools" className={`px-4 py-2 rounded-full text-sm font-medium ${theme.accentBg} text-white`}>
              Tools
            </Link>
          </nav>
        </header>

        {/* Mini Navigation */}
        <ToolsMiniNav isLight={isLight} theme={theme} />

        {/* Tool Hero */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Meeting Planner
          </h1>
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Find the best meeting time across multiple time zones
          </p>
        </div>

        {/* Tool Interface */}
        <div className={`rounded-2xl p-6 mb-8 backdrop-blur-xl border ${
          isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
        }`}>
          {/* City Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {selectedCities.map((city, index) => (
              <div key={index}>
                <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Participant {index + 1}
                </label>
                <select
                  value={city.city}
                  onChange={(e) => {
                    const newCities = [...selectedCities]
                    newCities[index] = cities.find(c => c.city === e.target.value) || cities[0]
                    setSelectedCities(newCities)
                  }}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isLight 
                      ? 'bg-white border-slate-200 text-slate-800' 
                      : 'bg-slate-700 border-slate-600 text-white'
                  }`}
                >
                  {cities.map(c => (
                    <option key={c.city} value={c.city}>{c.city}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className={`text-xs mb-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Hours (24h format) — Green = Working hours overlap
              </div>
              {selectedCities.map((city, cityIndex) => (
                <div key={cityIndex} className="flex items-center gap-2 mb-2">
                  <div className={`w-24 text-sm truncate ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {city.city}
                  </div>
                  <div className="flex-1 flex gap-0.5">
                    {Array.from({ length: 24 }, (_, hour) => {
                      const cityDate = new Date(currentTime.toLocaleString('en-US', { timeZone: city.timezone }))
                      const adjustedHour = (hour + cityDate.getHours() - new Date().getHours() + 24) % 24
                      const isWorking = isWorkingHour(adjustedHour)
                      const allWorking = selectedCities.every(c => {
                        const cDate = new Date(currentTime.toLocaleString('en-US', { timeZone: c.timezone }))
                        const cHour = (hour + cDate.getHours() - new Date().getHours() + 24) % 24
                        return isWorkingHour(cHour)
                      })
                      
                      return (
                        <div
                          key={hour}
                          className={`flex-1 h-8 rounded-sm flex items-center justify-center text-xs ${
                            allWorking 
                              ? 'bg-green-500 text-white' 
                              : isWorking 
                                ? isLight ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/50 text-blue-300'
                                : isLight ? 'bg-slate-100 text-slate-400' : 'bg-slate-700/50 text-slate-500'
                          }`}
                          title={`${adjustedHour}:00`}
                        >
                          {hour % 6 === 0 ? hour : ''}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
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
                <strong>Global team standups</strong> — Find a time that works for team members across continents.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Client calls across regions</strong> — Schedule calls during mutual business hours.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Webinars and live events</strong> — Maximize attendance by choosing optimal broadcast times.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Family video calls</strong> — Coordinate convenient times for relatives in different countries.
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
            The Meeting Planner is built for distributed teams, international project managers, and anyone 
            organizing calls with participants in multiple time zones. It visualizes working hour overlaps 
            so you can find the sweet spot where everyone is available during reasonable hours.
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
            <Link href="/tools/converter" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Time Converter</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Quick conversions</div>
            </Link>
            <Link href="/tools/event-time" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Event Time</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Share event times</div>
            </Link>
            <Link href="/tools/jet-lag" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Jet Lag</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Travel recovery tips</div>
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
                What are "working hours" in the planner?
              </h3>
              <p className="text-sm">
                Working hours are defined as 9:00 AM to 5:00 PM local time for each city.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Can I add more than 3 participants?
              </h3>
              <p className="text-sm">
                Currently the tool supports up to 3 cities. For larger groups, we recommend grouping by region.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Does it account for Daylight Saving Time?
              </h3>
              <p className="text-sm">
                Yes, DST is automatically applied based on each city's current time zone rules.
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
