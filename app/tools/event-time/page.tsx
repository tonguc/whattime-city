'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { cities } from '@/lib/cities'
import ToolsMiniNav from '@/components/ToolsMiniNav'

export default function EventTimePage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [eventCity, setEventCity] = useState(cities.find(c => c.city === 'New York') || cities[0])
  const [eventHour, setEventHour] = useState(14)
  const [eventMinute, setEventMinute] = useState(0)
  const [eventName, setEventName] = useState('My Event')
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  const timeOfDay = getTimeOfDay(currentTime, 41.01, 28.98)
  const theme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)

  // Popular cities to show conversions
  const popularCities = cities.slice(0, 8)

  // Get event time in another city
  const getEventTimeIn = (targetTimezone: string) => {
    const eventDate = new Date()
    eventDate.setHours(eventHour, eventMinute, 0, 0)
    
    const eventOffset = new Date(eventDate.toLocaleString('en-US', { timeZone: eventCity.timezone }))
    const targetOffset = new Date(eventDate.toLocaleString('en-US', { timeZone: targetTimezone }))
    const diff = targetOffset.getTime() - eventOffset.getTime()
    
    const targetTime = new Date(eventDate.getTime() + diff)
    return targetTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  }

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
            Event Time
          </h1>
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Share event times across time zones
          </p>
        </div>

        {/* Tool Interface */}
        <div className={`rounded-2xl p-6 mb-8 backdrop-blur-xl border ${
          isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
        }`}>
          {/* Event Setup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Event Name
              </label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="e.g., Team Standup"
                className={`w-full px-4 py-3 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Event Location
              </label>
              <select
                value={eventCity.city}
                onChange={(e) => setEventCity(cities.find(c => c.city === e.target.value) || cities[0])}
                className={`w-full px-4 py-3 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                }`}
              >
                {cities.slice(0, 50).map(city => (
                  <option key={city.city} value={city.city}>{city.city}, {city.country}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Time Selection */}
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Event Time (local to {eventCity.city})
            </label>
            <div className="flex gap-2 max-w-xs">
              <select
                value={eventHour}
                onChange={(e) => setEventHour(parseInt(e.target.value))}
                className={`flex-1 px-3 py-2 rounded-lg border ${
                  isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                }`}
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                ))}
              </select>
              <span className={`flex items-center ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>:</span>
              <select
                value={eventMinute}
                onChange={(e) => setEventMinute(parseInt(e.target.value))}
                className={`flex-1 px-3 py-2 rounded-lg border ${
                  isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                }`}
              >
                {[0, 15, 30, 45].map(m => (
                  <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Time Conversions */}
          <div>
            <h3 className={`font-medium mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
              "{eventName}" in other time zones:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {popularCities.map(city => (
                <div 
                  key={city.city}
                  className={`p-3 rounded-xl text-center ${
                    isLight ? 'bg-slate-100' : 'bg-slate-700/50'
                  }`}
                >
                  <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    {city.city}
                  </div>
                  <div className={`text-lg font-semibold ${
                    city.city === eventCity.city ? theme.accentText : isLight ? 'text-slate-800' : 'text-white'
                  }`}>
                    {getEventTimeIn(city.timezone)}
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
                <strong>Live streaming announcements</strong> — Let global audiences know when to tune in.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Webinar invitations</strong> — Show attendees the event time in their local zone.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Product launches</strong> — Coordinate global release timing.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Sports events</strong> — Share kickoff times for international fans.
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
            Content creators, event organizers, marketing teams, and community managers will find this tool 
            invaluable. It helps you communicate event times clearly to a global audience without confusion 
            about time zone conversions.
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
            <Link href="/tools/converter" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Time Converter</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Quick conversions</div>
            </Link>
            <Link href="/tools/alarm" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>World Alarm</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Set event reminders</div>
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
                Can I share these times with others?
              </h3>
              <p className="text-sm">
                Yes, you can screenshot or copy the converted times to share on social media or in emails.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Does it account for DST?
              </h3>
              <p className="text-sm">
                Yes, all conversions automatically account for Daylight Saving Time in each location.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Can I add more cities?
              </h3>
              <p className="text-sm">
                The display shows 8 major cities. Use the Time Converter for specific city lookups.
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
