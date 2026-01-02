'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cities } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import ToolPageWrapper from '@/components/ToolPageWrapper'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'

export default function JetLagPage() {
  const { theme, isLight } = useCityContext()
  
  const [fromCity, setFromCity] = useState(() => cities.find(c => c.city === 'New York') || cities[0])
  const [toCity, setToCity] = useState(() => cities.find(c => c.city === 'Tokyo') || cities[2])

  const getTimeDiff = () => {
    const now = new Date()
    const fromTime = new Date(now.toLocaleString('en-US', { timeZone: fromCity.timezone }))
    const toTime = new Date(now.toLocaleString('en-US', { timeZone: toCity.timezone }))
    return Math.round((toTime.getTime() - fromTime.getTime()) / (1000 * 60 * 60))
  }

  const timeDiff = getTimeDiff()
  const direction = timeDiff > 0 ? 'east' : 'west'
  const recoveryDays = Math.ceil(Math.abs(timeDiff) / 1.5)

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

      <div className="text-center mb-8">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.text}`}>
          Jet Lag Advisor
        </h1>
        <p className={`text-lg ${theme.textMuted}`}>
          Get personalized jet lag recovery tips
        </p>
      </div>

      <div className={`${cardClass} mb-8`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>Traveling From</label>
            <select
              value={fromCity.city}
              onChange={(e) => setFromCity(cities.find(c => c.city === e.target.value) || cities[0])}
              className={`w-full px-4 py-3 rounded-xl border ${inputClass}`}
            >
              {cities.map(city => (
                <option key={city.city} value={city.city}>{city.city}, {city.country}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>Traveling To</label>
            <select
              value={toCity.city}
              onChange={(e) => setToCity(cities.find(c => c.city === e.target.value) || cities[1])}
              className={`w-full px-4 py-3 rounded-xl border ${inputClass}`}
            >
              {cities.map(city => (
                <option key={city.city} value={city.city}>{city.city}, {city.country}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-100' : 'bg-slate-700/50'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className={`text-sm ${theme.textMuted}`}>Time Difference</div>
              <div className={`text-2xl font-bold ${theme.accentText}`}>{timeDiff > 0 ? '+' : ''}{timeDiff} hours</div>
            </div>
            <div>
              <div className={`text-sm ${theme.textMuted}`}>Direction</div>
              <div className={`text-2xl font-bold ${theme.text}`}>{timeDiff === 0 ? 'Same zone' : `Traveling ${direction}`}</div>
            </div>
            <div>
              <div className={`text-sm ${theme.textMuted}`}>Est. Recovery</div>
              <div className={`text-2xl font-bold ${theme.text}`}>{timeDiff === 0 ? 'None' : `${recoveryDays} days`}</div>
            </div>
          </div>
        </div>

        {timeDiff !== 0 && (
          <div className="mt-6">
            <h3 className={`font-medium mb-3 ${theme.text}`}>Recovery Tips for {direction}ward travel:</h3>
            <ul className={`space-y-2 ${theme.textMuted}`}>
              {tips.map((tip, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className={theme.accentText}>✓</span>{tip}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <section className={`${cardClass} mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Common Use Cases</h2>
        <ul className={`space-y-3 ${theme.textMuted}`}>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Business trip preparation</strong> — Arrive alert and ready for important meetings.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Vacation planning</strong> — Minimize lost vacation days to jet lag recovery.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Athletic competition travel</strong> — Optimize performance by adjusting ahead of events.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Relocating internationally</strong> — Plan your first week in a new time zone.</div></li>
        </ul>
      </section>

      <section className={`${cardClass} mb-6`}>
        <h2 className={`text-xl font-semibold mb-3 ${theme.text}`}>Who Is This Tool For?</h2>
        <p className={theme.textMuted}>
          Long-haul travelers, business executives, athletes, and anyone crossing 3+ time zones will benefit 
          from these personalized recommendations. The tips are based on circadian rhythm science and vary 
          depending on whether you're traveling east or west.
        </p>
      </section>

      <section className={`${cardClass} mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/flight-time" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>Flight Time</div>
            <div className={`text-xs ${theme.textMuted}`}>Calculate arrivals</div>
          </Link>
          <Link href="/time-converter" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>Time Converter</div>
            <div className={`text-xs ${theme.textMuted}`}>Quick conversions</div>
          </Link>
          <Link href="/world-alarm" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>World Alarm</div>
            <div className={`text-xs ${theme.textMuted}`}>Adjust sleep schedule</div>
          </Link>
        </div>
      </section>

      <section className={`${cardClass} mb-8`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Frequently Asked Questions</h2>
        <div className={`space-y-4 ${theme.textMuted}`}>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>Is eastward or westward travel worse for jet lag?</h3>
            <p className="text-sm">Generally, traveling east is harder because you lose hours. Your body finds it easier to extend the day than shorten it.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>How is recovery time calculated?</h3>
            <p className="text-sm">A common rule is 1 day of recovery for every 1.5 time zones crossed, though individual experiences vary.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>Do these tips work for everyone?</h3>
            <p className="text-sm">These are general guidelines. Age, health, and personal circadian rhythms affect how you experience jet lag.</p>
          </div>
        </div>
      </section>
    </ToolPageWrapper>
  )
}
