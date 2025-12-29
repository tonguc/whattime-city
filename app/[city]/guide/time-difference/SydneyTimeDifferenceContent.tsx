'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function SydneyTimeDifferenceContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const cities = [
    { name: 'London', diff: '+11 hours', example: '9 AM Sydney = 10 PM London (previous day)' },
    { name: 'New York', diff: '+16 hours', example: '9 AM Sydney = 5 PM NYC (previous day)' },
    { name: 'Los Angeles', diff: '+19 hours', example: '9 AM Sydney = 2 PM LA (previous day)' },
    { name: 'Tokyo', diff: '+1 hour', example: '9 AM Sydney = 8 AM Tokyo' },
    { name: 'Singapore', diff: '+3 hours', example: '9 AM Sydney = 6 AM Singapore' },
    { name: 'Dubai', diff: '+7 hours', example: '9 AM Sydney = 2 AM Dubai' },
    { name: 'Paris', diff: '+10 hours', example: '9 AM Sydney = 11 PM Paris (previous day)' },
    { name: 'Hong Kong', diff: '+3 hours', example: '9 AM Sydney = 6 AM Hong Kong' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Sydney Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Sydney Time Difference Calculator
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Sydney time compared to major cities worldwide
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Reference</h2>
        <p>
          Sydney is <strong>UTC+10</strong> (AEST) or <strong>UTC+11</strong> (AEDT during daylight saving, 
          Oct-Apr). This puts Sydney ahead of most major cities — often by a full day!
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 Time Difference from Sydney</h2>
        
        <div className="space-y-3">
          {cities.map((city, index) => (
            <div key={index} className={`p-4 rounded-lg border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
              <div className="flex justify-between items-start mb-1">
                <h3 className={`font-medium ${headingColor}`}>{city.name}</h3>
                <span className="text-sm font-medium text-amber-600">{city.diff}</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{city.example}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>🛠️ Tools</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/time-converter/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <span>🔄</span>
            <span className={`font-medium ${headingColor}`}>Time Converter</span>
          </Link>
          <Link href="/meeting/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <span>📅</span>
            <span className={`font-medium ${headingColor}`}>Meeting Planner</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
