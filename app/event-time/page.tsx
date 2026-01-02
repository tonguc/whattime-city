'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cities } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import ToolPageWrapper from '@/components/ToolPageWrapper'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'

export default function EventTimePage() {
  const { theme, isLight } = useCityContext()
  
  const [eventCity, setEventCity] = useState(() => cities.find(c => c.city === 'New York') || cities[0])
  const [eventHour, setEventHour] = useState(14)
  const [eventMinute, setEventMinute] = useState(0)
  const [eventName, setEventName] = useState('My Event')

  const popularCities = cities.slice(0, 8)

  const getEventTimeIn = (targetTimezone: string) => {
    const eventDate = new Date()
    eventDate.setHours(eventHour, eventMinute, 0, 0)
    
    const eventOffset = new Date(eventDate.toLocaleString('en-US', { timeZone: eventCity.timezone }))
    const targetOffset = new Date(eventDate.toLocaleString('en-US', { timeZone: targetTimezone }))
    const diff = targetOffset.getTime() - eventOffset.getTime()
    
    const targetTime = new Date(eventDate.getTime() + diff)
    return targetTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  }

  // Dynamic styles based on theme (like HomePage)
  const cardClass = `rounded-2xl p-6 backdrop-blur-xl border ${theme.card}`
  const boxClass = isLight 
    ? 'bg-white/60 border border-white/70 rounded-xl' 
    : 'bg-slate-800/60 border border-slate-600/60 rounded-xl'
  const inputClass = isLight 
    ? 'bg-white border-slate-200 text-slate-800' 
    : 'bg-slate-700 border-slate-600 text-white'

  return (
    <ToolPageWrapper footer={<Footer />}>
      <ToolsMiniNav />

      <div className="text-center mb-6">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.text}`}>
          Event Time Converter
        </h1>
        <p className={`text-lg ${theme.textMuted}`}>
          Share event times across time zones
        </p>
      </div>

      <div className={`${cardClass} mb-4`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>Event Name</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="e.g., Team Standup"
              className={`w-full px-4 py-3 rounded-xl border ${inputClass}`}
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>Event Location</label>
            <select
              value={eventCity.city}
              onChange={(e) => setEventCity(cities.find(c => c.city === e.target.value) || cities[0])}
              className={`w-full px-4 py-3 rounded-xl border ${inputClass}`}
            >
              {cities.map(city => (
                <option key={city.city} value={city.city}>{city.city}, {city.country}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>
            Event Time (local to {eventCity.city})
          </label>
          <div className="flex gap-2 max-w-xs">
            <select
              value={eventHour}
              onChange={(e) => setEventHour(parseInt(e.target.value))}
              className={`flex-1 px-3 py-2 rounded-lg border ${inputClass}`}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
              ))}
            </select>
            <span className={`flex items-center ${theme.textMuted}`}>:</span>
            <select
              value={eventMinute}
              onChange={(e) => setEventMinute(parseInt(e.target.value))}
              className={`flex-1 px-3 py-2 rounded-lg border ${inputClass}`}
            >
              {[0, 15, 30, 45].map(m => (
                <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h3 className={`font-medium mb-3 ${theme.text}`}>"{eventName}" in other time zones:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {popularCities.map(city => (
              <div key={city.city} className={`p-3 rounded-xl text-center ${isLight ? 'bg-slate-100' : 'bg-slate-700/50'}`}>
                <div className={`text-xs ${theme.textMuted}`}>{city.city}</div>
                <div className={`text-lg font-semibold ${city.city === eventCity.city ? theme.accentText : theme.text}`}>
                  {getEventTimeIn(city.timezone)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Common Use Cases</h2>
        <ul className={`space-y-3 ${theme.textMuted}`}>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Live streaming announcements</strong> — Let global audiences know when to tune in.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Webinar invitations</strong> — Show attendees the event time in their local zone.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Product launches</strong> — Coordinate global release timing.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Sports events</strong> — Share kickoff times for international fans.</div></li>
        </ul>
      </section>

      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-3 ${theme.text}`}>Who Is This Tool For?</h2>
        <p className={theme.textMuted}>
          Content creators, event organizers, marketing teams, and community managers will find this tool 
          invaluable. It helps you communicate event times clearly to a global audience without confusion 
          about time zone conversions.
        </p>
      </section>

      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/meeting" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>Meeting Planner</div>
            <div className={`text-xs ${theme.textMuted}`}>Find overlap hours</div>
          </Link>
          <Link href="/time-converter" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>Time Converter</div>
            <div className={`text-xs ${theme.textMuted}`}>Quick conversions</div>
          </Link>
          <Link href="/world-alarm" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>World Alarm</div>
            <div className={`text-xs ${theme.textMuted}`}>Set event reminders</div>
          </Link>
        </div>
      </section>

      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Frequently Asked Questions</h2>
        <div className={`space-y-4 ${theme.textMuted}`}>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>Can I share these times with others?</h3>
            <p className="text-sm">Yes, you can screenshot or copy the converted times to share on social media or in emails.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>Does it account for DST?</h3>
            <p className="text-sm">Yes, all conversions automatically account for Daylight Saving Time in each location.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>Can I add more cities?</h3>
            <p className="text-sm">The display shows 8 major cities. Use the Time Converter for specific city lookups.</p>
          </div>
        </div>
      </section>
    </ToolPageWrapper>
  )
}
