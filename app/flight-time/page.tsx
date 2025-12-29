'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cities } from '@/lib/cities'
import ToolPageWrapper from '@/components/ToolPageWrapper'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'

// Consistent card styling for light mode
const cardClass = 'bg-white border border-slate-200 rounded-2xl shadow-sm'
const inputClass = 'bg-white border border-gray-300 text-slate-900 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
const labelClass = 'text-slate-600'
const headingClass = 'text-slate-800'
const textClass = 'text-slate-600'
const accentClass = 'text-blue-600'

export default function FlightTimePage() {
  const [departureCity, setDepartureCity] = useState(() => cities.find(c => c.city === 'New York') || cities[0])
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
    <ToolPageWrapper>
      {/* Mini Navigation */}
      <ToolsMiniNav />

      {/* Tool Hero */}
      <div className="text-center mb-8">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${headingClass}`}>
          Flight Time Calculator
        </h1>
        <p className={`text-lg ${textClass}`}>
          Calculate your arrival time in local time
        </p>
      </div>

      {/* Tool Interface - Main Card */}
      <div className={`${cardClass} p-6 mb-8`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Departure */}
          <div>
            <h3 className={`font-medium mb-3 ${headingClass}`}>Departure</h3>
            <select
              value={departureCity.city}
              onChange={(e) => setDepartureCity(cities.find(c => c.city === e.target.value) || cities[0])}
              className={`w-full px-4 py-3 ${inputClass} mb-3`}
            >
              {cities.map(city => (
                <option key={city.city} value={city.city}>{city.city}, {city.country}</option>
              ))}
            </select>
            <div className="flex gap-2">
              <select
                value={departureHour}
                onChange={(e) => setDepartureHour(parseInt(e.target.value))}
                className={`flex-1 px-3 py-2 ${inputClass}`}
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>{i.toString().padStart(2, '0')}:00</option>
                ))}
              </select>
              <select
                value={departureMinute}
                onChange={(e) => setDepartureMinute(parseInt(e.target.value))}
                className={`flex-1 px-3 py-2 ${inputClass}`}
              >
                {[0, 15, 30, 45].map(m => (
                  <option key={m} value={m}>:{m.toString().padStart(2, '0')}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Arrival */}
          <div>
            <h3 className={`font-medium mb-3 ${headingClass}`}>Arrival</h3>
            <select
              value={arrivalCity.city}
              onChange={(e) => setArrivalCity(cities.find(c => c.city === e.target.value) || cities[1])}
              className={`w-full px-4 py-3 ${inputClass} mb-3`}
            >
              {cities.map(city => (
                <option key={city.city} value={city.city}>{city.city}, {city.country}</option>
              ))}
            </select>
            <div className={`text-center py-2 text-2xl font-bold ${accentClass}`}>
              {arrival.time} {arrival.nextDay && <span className="text-sm">(+1 day)</span>}
            </div>
          </div>
        </div>

        {/* Flight Duration */}
        <div className="mt-6 pt-6 border-t border-slate-200">
          <label className={`block text-sm font-medium mb-2 ${labelClass}`}>
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
                className={`w-20 px-3 py-2 text-center ${inputClass}`}
              />
              <span className={labelClass}>hours</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="59"
                value={flightDuration.minutes}
                onChange={(e) => setFlightDuration({ ...flightDuration, minutes: parseInt(e.target.value) || 0 })}
                className={`w-20 px-3 py-2 text-center ${inputClass}`}
              />
              <span className={labelClass}>minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* SEO SECTION 1: Common Use Cases */}
      <section className={`${cardClass} p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingClass}`}>
          Common Use Cases
        </h2>
        <ul className={`space-y-3 ${textClass}`}>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div>
              <strong>Airport pickup coordination</strong> — Let someone know exactly when you'll land in their time.
            </div>
          </li>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div>
              <strong>Hotel check-in planning</strong> — Verify if you'll arrive in time for check-in.
            </div>
          </li>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div>
              <strong>Connecting flight timing</strong> — Ensure you have enough layover time.
            </div>
          </li>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div>
              <strong>Meeting scheduling on arrival day</strong> — Know if you can make that afternoon meeting.
            </div>
          </li>
        </ul>
      </section>

      {/* SEO SECTION 2: Who Is This Tool For? */}
      <section className={`${cardClass} p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${headingClass}`}>
          Who Is This Tool For?
        </h2>
        <p className={textClass}>
          Frequent flyers, travel planners, and anyone booking international flights will find this tool useful. 
          It eliminates confusion about what time you'll actually arrive at your destination in local time, 
          especially when crossing multiple time zones.
        </p>
      </section>

      {/* SEO SECTION 3: Related Tools */}
      <section className={`${cardClass} p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingClass}`}>
          Related Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/jet-lag-advisor" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-[1.02]">
            <div className={`text-sm font-medium ${headingClass}`}>Jet Lag Advisor</div>
            <div className="text-xs text-slate-500">Recovery tips</div>
          </Link>
          <Link href="/time-converter" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-[1.02]">
            <div className={`text-sm font-medium ${headingClass}`}>Time Converter</div>
            <div className="text-xs text-slate-500">Quick conversions</div>
          </Link>
          <Link href="/world-alarm" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-[1.02]">
            <div className={`text-sm font-medium ${headingClass}`}>World Alarm</div>
            <div className="text-xs text-slate-500">Set travel alarms</div>
          </Link>
        </div>
      </section>

      {/* SEO SECTION 4: FAQ */}
      <section className={`${cardClass} p-6 mb-8`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingClass}`}>
          Frequently Asked Questions
        </h2>
        <div className={`space-y-4 ${textClass}`}>
          <div>
            <h3 className={`font-medium mb-1 ${headingClass}`}>
              Does this calculate actual flight distance?
            </h3>
            <p className="text-sm">
              No, you need to input the flight duration. Check your airline for estimated flight time.
            </p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${headingClass}`}>
              What does "+1 day" mean?
            </h3>
            <p className="text-sm">
              This indicates you'll arrive on the following calendar day due to time zone differences or long flight duration.
            </p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${headingClass}`}>
              Does it account for DST?
            </h3>
            <p className="text-sm">
              Yes, Daylight Saving Time is automatically applied for both departure and arrival cities.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer isLight={true} />
    </ToolPageWrapper>
  )
}
