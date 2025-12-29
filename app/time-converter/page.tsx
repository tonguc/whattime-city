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

export default function TimeConverterPage() {
  const [fromCity, setFromCity] = useState(() => cities.find(c => c.city === 'New York') || cities[0])
  const [toCity, setToCity] = useState(() => cities.find(c => c.city === 'London') || cities[1])
  const [selectedHour, setSelectedHour] = useState(12)
  const [selectedMinute, setSelectedMinute] = useState(0)

  // Calculate converted time
  const getConvertedTime = () => {
    const now = new Date()
    now.setHours(selectedHour, selectedMinute, 0, 0)
    
    const fromOffset = new Date(now.toLocaleString('en-US', { timeZone: fromCity.timezone })).getTime()
    const toOffset = new Date(now.toLocaleString('en-US', { timeZone: toCity.timezone })).getTime()
    
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
    <ToolPageWrapper>
      {/* Mini Navigation */}
      <ToolsMiniNav />

      {/* Tool Hero */}
      <div className="text-center mb-8">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${headingClass}`}>
          Time Converter
        </h1>
        <p className={`text-lg ${textClass}`}>
          Convert time between any two cities instantly
        </p>
      </div>

      {/* Tool Interface - Main Card */}
      <div className={`${cardClass} p-6 mb-8`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* From City */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${labelClass}`}>
              From
            </label>
            <select
              value={fromCity.city}
              onChange={(e) => setFromCity(cities.find(c => c.city === e.target.value) || cities[0])}
              className={`w-full px-4 py-3 ${inputClass}`}
            >
              {cities.map(city => (
                <option key={city.slug} value={city.city}>{city.city}, {city.country}</option>
              ))}
            </select>
            <div className="mt-2 flex gap-2">
              <select
                value={selectedHour}
                onChange={(e) => setSelectedHour(parseInt(e.target.value))}
                className={`flex-1 px-3 py-2 text-center ${inputClass}`}
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                ))}
              </select>
              <span className={`flex items-center ${labelClass}`}>:</span>
              <select
                value={selectedMinute}
                onChange={(e) => setSelectedMinute(parseInt(e.target.value))}
                className={`flex-1 px-3 py-2 text-center ${inputClass}`}
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
              className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all border border-slate-200"
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
            <label className={`block text-sm font-medium mb-2 ${labelClass}`}>
              To
            </label>
            <select
              value={toCity.city}
              onChange={(e) => setToCity(cities.find(c => c.city === e.target.value) || cities[1])}
              className={`w-full px-4 py-3 ${inputClass}`}
            >
              {cities.map(city => (
                <option key={city.slug} value={city.city}>{city.city}, {city.country}</option>
              ))}
            </select>
            <div className={`mt-2 text-center text-2xl font-bold ${accentClass}`}>
              {getConvertedTime()}
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
              <strong>Scheduling international calls</strong> — Find the right time to call colleagues, clients, or family abroad.
            </div>
          </li>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div>
              <strong>Planning virtual meetings</strong> — Coordinate meeting times across multiple time zones.
            </div>
          </li>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div>
              <strong>Travel preparation</strong> — Know what time it will be at your destination when you depart.
            </div>
          </li>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div>
              <strong>Remote work coordination</strong> — Align working hours with distributed team members.
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
          This tool is ideal for remote workers, international business professionals, frequent travelers, 
          and anyone who needs to coordinate across time zones. Whether you're scheduling a call with overseas 
          clients or planning when to contact family abroad, the Time Converter gives you instant answers.
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
          <Link href="/event-time" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-[1.02]">
            <div className={`text-sm font-medium ${headingClass}`}>Event Time</div>
            <div className="text-xs text-slate-500">Share event times</div>
          </Link>
          <Link href="/" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-[1.02]">
            <div className={`text-sm font-medium ${headingClass}`}>World Clock</div>
            <div className="text-xs text-slate-500">See all time zones</div>
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
              Does this tool account for Daylight Saving Time?
            </h3>
            <p className="text-sm">
              Yes. The converter automatically adjusts for DST based on each city's current rules.
            </p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${headingClass}`}>
              How accurate is the time conversion?
            </h3>
            <p className="text-sm">
              Conversions are based on the IANA time zone database, the same source used by operating systems worldwide.
            </p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${headingClass}`}>
              Can I convert time for cities not listed?
            </h3>
            <p className="text-sm">
              We support over 150 major cities. Use the World Clock to find cities in the same time zone as your target.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer isLight={true} />
    </ToolPageWrapper>
  )
}
