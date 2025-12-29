'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cities } from '@/lib/cities'
import { useToolsTheme, getContextCity } from '@/lib/useToolsTheme'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'

export default function JetLagPage() {
  const { theme, isLight, selectedCity } = useToolsTheme()
  
  const [currentTime, setCurrentTime] = useState(new Date())
  const [fromCity, setFromCity] = useState(() => cities.find(c => c.city === 'New York') || cities[0])
  const [toCity, setToCity] = useState(() => cities.find(c => c.city === 'Tokyo') || cities[2])
  
  // Sync fromCity with context when it becomes available
  useEffect(() => {
    if (selectedCity) {
      setFromCity(selectedCity)
    }
  }, [selectedCity])

  // Calculate time difference
  const getTimeDiff = () => {
    const now = new Date()
    const fromTime = new Date(now.toLocaleString('en-US', { timeZone: fromCity.timezone }))
    const toTime = new Date(now.toLocaleString('en-US', { timeZone: toCity.timezone }))
    const diffHours = Math.round((toTime.getTime() - fromTime.getTime()) / (1000 * 60 * 60))
    return diffHours
  }

  const timeDiff = getTimeDiff()
  const direction = timeDiff > 0 ? 'east' : 'west'
  const recoveryDays = Math.ceil(Math.abs(timeDiff) / 1.5) // Rule of thumb: 1 day per 1.5 hours

  const tips = timeDiff > 0 ? [
    'Start shifting your sleep schedule 2-3 days before departure by going to bed earlier.',
    'Seek morning sunlight at your destination to help reset your circadian rhythm.',
    'Avoid heavy meals and alcohol during the flight.',
    'Stay hydrated throughout your journey.',
    'Consider a short nap (20-30 min) upon arrival if needed, but avoid sleeping too long.'
  ] : [
    'Start shifting your sleep schedule 2-3 days before departure by going to bed later.',
    'Seek afternoon/evening sunlight at your destination.',
    'Avoid caffeine in the second half of your travel day.',
    'Stay active during the day to promote natural tiredness at night.',
    'Expose yourself to bright light in the evening at your destination.'
  ]

  return (
    <>
      {/* Mini Navigation */}
      <ToolsMiniNav />

        {/* Tool Hero */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Jet Lag Advisor
          </h1>
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Get personalized jet lag recovery tips
          </p>
        </div>

        {/* Tool Interface */}
        <div className={`rounded-2xl p-6 mb-8 backdrop-blur-xl border ${
          isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* From */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Traveling From
              </label>
              <select
                value={fromCity.city}
                onChange={(e) => setFromCity(cities.find(c => c.city === e.target.value) || cities[0])}
                className={`w-full px-4 py-3 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                }`}
              >
                {cities.map(city => (
                  <option key={city.city} value={city.city}>{city.city}, {city.country}</option>
                ))}
              </select>
            </div>

            {/* To */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Traveling To
              </label>
              <select
                value={toCity.city}
                onChange={(e) => setToCity(cities.find(c => c.city === e.target.value) || cities[1])}
                className={`w-full px-4 py-3 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                }`}
              >
                {cities.map(city => (
                  <option key={city.city} value={city.city}>{city.city}, {city.country}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-100' : 'bg-slate-700/50'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Time Difference</div>
                <div className={`text-2xl font-bold ${theme.accentText}`}>
                  {timeDiff > 0 ? '+' : ''}{timeDiff} hours
                </div>
              </div>
              <div>
                <div className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Direction</div>
                <div className={`text-2xl font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                  {timeDiff === 0 ? 'Same zone' : `Traveling ${direction}`}
                </div>
              </div>
              <div>
                <div className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Est. Recovery</div>
                <div className={`text-2xl font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                  {timeDiff === 0 ? 'None' : `${recoveryDays} days`}
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          {timeDiff !== 0 && (
            <div className="mt-6">
              <h3 className={`font-medium mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Recovery Tips for {direction}ward travel:
              </h3>
              <ul className={`space-y-2 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                {tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className={theme.accentText}>✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
                <strong>Business trip preparation</strong> — Arrive alert and ready for important meetings.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Vacation planning</strong> — Minimize lost vacation days to jet lag recovery.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Athletic competition travel</strong> — Optimize performance by adjusting ahead of events.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Relocating internationally</strong> — Plan your first week in a new time zone.
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
            Long-haul travelers, business executives, athletes, and anyone crossing 3+ time zones will benefit 
            from these personalized recommendations. The tips are based on circadian rhythm science and vary 
            depending on whether you're traveling east or west.
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
            <Link href="/flight-times" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Flight Time</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Calculate arrivals</div>
            </Link>
            <Link href="/converter" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Time Converter</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Quick conversions</div>
            </Link>
            <Link href="/alarm" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>World Alarm</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Adjust sleep schedule</div>
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
                Is eastward or westward travel worse for jet lag?
              </h3>
              <p className="text-sm">
                Generally, traveling east is harder because you lose hours. Your body finds it easier to extend the day than shorten it.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                How is recovery time calculated?
              </h3>
              <p className="text-sm">
                A common rule is 1 day of recovery for every 1.5 time zones crossed, though individual experiences vary.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Do these tips work for everyone?
              </h3>
              <p className="text-sm">
                These are general guidelines. Age, health, and personal circadian rhythms affect how you experience jet lag.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer isLight={isLight} />
    </>
  )
}
