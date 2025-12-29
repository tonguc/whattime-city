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

export default function EventTimePage() {
  const [eventCity, setEventCity] = useState(() => cities.find(c => c.city === 'New York') || cities[0])
  const [eventHour, setEventHour] = useState(14)
  const [eventMinute, setEventMinute] = useState(0)
  const [eventName, setEventName] = useState('My Event')

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
    <ToolPageWrapper>
      {/* Mini Navigation */}
      <ToolsMiniNav />

      {/* Tool Hero */}
      <div className="text-center mb-8">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${headingClass}`}>
          Event Time Converter
        </h1>
        <p className={`text-lg ${textClass}`}>
          Share event times across time zones
        </p>
      </div>

      {/* Tool Interface - Main Card */}
      <div className={`${cardClass} p-6 mb-8`}>
        {/* Event Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${labelClass}`}>
              Event Name
            </label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="e.g., Team Standup"
              className={`w-full px-4 py-3 ${inputClass}`}
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${labelClass}`}>
              Event Location
            </label>
            <select
              value={eventCity.city}
              onChange={(e) => setEventCity(cities.find(c => c.city === e.target.value) || cities[0])}
              className={`w-full px-4 py-3 ${inputClass}`}
            >
              {cities.map(city => (
                <option key={city.city} value={city.city}>{city.city}, {city.country}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Time Selection */}
        <div className="mb-6">
          <label className={`block text-sm font-medium mb-2 ${labelClass}`}>
            Event Time (local to {eventCity.city})
          </label>
          <div className="flex gap-2 max-w-xs">
            <select
              value={eventHour}
              onChange={(e) => setEventHour(parseInt(e.target.value))}
              className={`flex-1 px-3 py-2 ${inputClass}`}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
              ))}
            </select>
            <span className={`flex items-center ${labelClass}`}>:</span>
            <select
              value={eventMinute}
              onChange={(e) => setEventMinute(parseInt(e.target.value))}
              className={`flex-1 px-3 py-2 ${inputClass}`}
            >
              {[0, 15, 30, 45].map(m => (
                <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Time Conversions */}
        <div>
          <h3 className={`font-medium mb-3 ${headingClass}`}>
            "{eventName}" in other time zones:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {popularCities.map(city => (
              <div 
                key={city.city}
                className="p-3 rounded-xl text-center bg-slate-50 border border-slate-200"
              >
                <div className="text-xs text-slate-500">
                  {city.city}
                </div>
                <div className={`text-lg font-semibold ${
                  city.city === eventCity.city ? accentClass : headingClass
                }`}>
                  {getEventTimeIn(city.timezone)}
                </div>
              </div>
            ))}
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
              <strong>Live streaming announcements</strong> — Let global audiences know when to tune in.
            </div>
          </li>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div>
              <strong>Webinar invitations</strong> — Show attendees the event time in their local zone.
            </div>
          </li>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div>
              <strong>Product launches</strong> — Coordinate global release timing.
            </div>
          </li>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div>
              <strong>Sports events</strong> — Share kickoff times for international fans.
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
          Content creators, event organizers, marketing teams, and community managers will find this tool 
          invaluable. It helps you communicate event times clearly to a global audience without confusion 
          about time zone conversions.
        </p>
      </section>

      {/* SEO SECTION 3: Related Tools */}
      <section className={`${cardClass} p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingClass}`}>
          Related Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/meeting" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-[1.02]">
            <div className={`text-sm font-medium ${headingClass}`}>Meeting Planner</div>
            <div className="text-xs text-slate-500">Find overlap hours</div>
          </Link>
          <Link href="/time-converter" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-[1.02]">
            <div className={`text-sm font-medium ${headingClass}`}>Time Converter</div>
            <div className="text-xs text-slate-500">Quick conversions</div>
          </Link>
          <Link href="/world-alarm" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-[1.02]">
            <div className={`text-sm font-medium ${headingClass}`}>World Alarm</div>
            <div className="text-xs text-slate-500">Set event reminders</div>
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
              Can I share these times with others?
            </h3>
            <p className="text-sm">
              Yes, you can screenshot or copy the converted times to share on social media or in emails.
            </p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${headingClass}`}>
              Does it account for DST?
            </h3>
            <p className="text-sm">
              Yes, all conversions automatically account for Daylight Saving Time in each location.
            </p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${headingClass}`}>
              Can I add more cities?
            </h3>
            <p className="text-sm">
              The display shows 8 major cities. Use the Time Converter for specific city lookups.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer isLight={true} />
    </ToolPageWrapper>
  )
}
