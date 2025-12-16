'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cities } from '@/lib/cities'
import { useToolsTheme, getContextCity } from '@/lib/useToolsTheme'
import ToolsMiniNav from '@/components/ToolsMiniNav'

export default function FlightTimePage() {
  const { theme, isLight } = useToolsTheme()
  
  const [currentTime, setCurrentTime] = useState(new Date())
  const [departureCity, setDepartureCity] = useState(() => getContextCity('New York'))
  const [arrivalCity, setArrivalCity] = useState(() => cities.find(c => c.city === 'London') || cities[1])
  const [departureHour, setDepartureHour] = useState(10)
  const [departureMinute, setDepartureMinute] = useState(0)
  const [flightDuration, setFlightDuration] = useState({ hours: 7, minutes: 0 })

  // Calculate arrival time
  const getArrivalTime = () => {
    const departure = new Date()
    departure.setHours(departureHour, departureMinute, 0, 0)
    
    // Add flight duration
    const arrivalUTC = new Date(departure.getTime() + (flightDuration.hours * 60 + flightDuration.minutes) * 60 * 1000)
    
    // Get time zone offsets
    const depOffset = new Date(departure.toLocaleString('en-US', { timeZone: departureCity.timezone }))
    const arrOffset = new Date(departure.toLocaleString('en-US', { timeZone: arrivalCity.timezone }))
    const tzDiff = arrOffset.getTime() - depOffset.getTime()
    
    const arrivalLocal = new Date(arrivalUTC.getTime() + tzDiff)
    
    return {
      time: arrivalLocal.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      nextDay: arrivalLocal.getDate() !== departure.getDate()
    }
  }

  const arrival = getArrivalTime()

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
            Flight Time
          </h1>
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Calculate your arrival time in local time
          </p>
        </div>

        {/* Tool Interface */}
        <div className={`rounded-2xl p-6 mb-8 backdrop-blur-xl border ${
          isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Departure */}
            <div>
              <h3 className={`font-medium mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>Departure</h3>
              <select
                value={departureCity.city}
                onChange={(e) => setDepartureCity(cities.find(c => c.city === e.target.value) || cities[0])}
                className={`w-full px-4 py-3 rounded-xl border mb-3 ${
                  isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                }`}
              >
                {cities.map(city => (
                  <option key={city.city} value={city.city}>{city.city}, {city.country}</option>
                ))}
              </select>
              <div className="flex gap-2">
                <select
                  value={departureHour}
                  onChange={(e) => setDepartureHour(parseInt(e.target.value))}
                  className={`flex-1 px-3 py-2 rounded-lg border ${
                    isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                  }`}
                >
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i}>{i.toString().padStart(2, '0')}:00</option>
                  ))}
                </select>
                <select
                  value={departureMinute}
                  onChange={(e) => setDepartureMinute(parseInt(e.target.value))}
                  className={`flex-1 px-3 py-2 rounded-lg border ${
                    isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                  }`}
                >
                  {[0, 15, 30, 45].map(m => (
                    <option key={m} value={m}>:{m.toString().padStart(2, '0')}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Arrival */}
            <div>
              <h3 className={`font-medium mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>Arrival</h3>
              <select
                value={arrivalCity.city}
                onChange={(e) => setArrivalCity(cities.find(c => c.city === e.target.value) || cities[1])}
                className={`w-full px-4 py-3 rounded-xl border mb-3 ${
                  isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                }`}
              >
                {cities.map(city => (
                  <option key={city.city} value={city.city}>{city.city}, {city.country}</option>
                ))}
              </select>
              <div className={`text-center py-2 text-2xl font-bold ${theme.accentText}`}>
                {arrival.time} {arrival.nextDay && <span className="text-sm">(+1 day)</span>}
              </div>
            </div>
          </div>

          {/* Flight Duration */}
          <div className="mt-6 pt-6 border-t border-slate-200/50">
            <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Flight Duration
            </label>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  max="24"
                  value={flightDuration.hours}
                  onChange={(e) => setFlightDuration({ ...flightDuration, hours: parseInt(e.target.value) || 0 })}
                  className={`w-20 px-3 py-2 rounded-lg border text-center ${
                    isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                  }`}
                />
                <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>hours</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={flightDuration.minutes}
                  onChange={(e) => setFlightDuration({ ...flightDuration, minutes: parseInt(e.target.value) || 0 })}
                  className={`w-20 px-3 py-2 rounded-lg border text-center ${
                    isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                  }`}
                />
                <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>minutes</span>
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
                <strong>Airport pickup coordination</strong> — Let someone know exactly when you'll land in their time.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Hotel check-in planning</strong> — Verify if you'll arrive in time for check-in.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Connecting flight timing</strong> — Ensure you have enough layover time.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Meeting scheduling on arrival day</strong> — Know if you can make that afternoon meeting.
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
            Frequent flyers, travel planners, and anyone booking international flights will find this tool useful. 
            It eliminates confusion about what time you'll actually arrive at your destination in local time, 
            especially when crossing multiple time zones.
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
            <Link href="/tools/jet-lag" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Jet Lag</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Recovery tips</div>
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
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Set travel alarms</div>
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
                Does this calculate actual flight distance?
              </h3>
              <p className="text-sm">
                No, you need to input the flight duration. Check your airline for estimated flight time.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                What does "+1 day" mean?
              </h3>
              <p className="text-sm">
                This indicates you'll arrive on the following calendar day due to time zone differences or long flight duration.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Does it account for DST?
              </h3>
              <p className="text-sm">
                Yes, Daylight Saving Time is automatically applied for both departure and arrival cities.
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
