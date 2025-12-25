'use client'

import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

interface CityTime {
  name: string
  slug: string
  time: string
}

interface Props {
  currentCity: string
  currentTime: string
  cities: CityTime[]
}

export default function QuickTimeFinder({ currentCity, currentTime, cities }: Props) {
  const { isLight } = useCityContext()
  
  const cardBg = isLight ? 'bg-slate-800' : 'bg-slate-700'
  const borderColor = isLight ? 'border-amber-500' : 'border-amber-400'
  const textMuted = isLight ? 'text-slate-300' : 'text-slate-400'
  const buttonBg = isLight ? 'bg-amber-500 hover:bg-amber-600' : 'bg-amber-600 hover:bg-amber-700'
  
  return (
    <section className={`mb-10 p-6 rounded-2xl border-2 ${borderColor} ${cardBg}`}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🕐</span>
        <h2 className="text-xl font-bold text-white">Quick Time Finder</h2>
      </div>
      
      <p className={`mb-6 ${textMuted}`}>
        Right now in {currentCity}: <span className="text-2xl font-bold text-white">{currentTime}</span>
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {cities.map((city) => (
          <div 
            key={city.slug}
            className="bg-slate-900/50 rounded-xl p-4 text-center"
          >
            <div className={`text-sm mb-1 ${textMuted}`}>{city.name}</div>
            <div className="text-xl font-bold text-white">{city.time}</div>
          </div>
        ))}
      </div>
      
      <Link
        href="/tools/meeting-planner/"
        className={`block w-full py-4 px-6 rounded-xl ${buttonBg} text-white font-semibold text-center transition-colors`}
      >
        Open Full Meeting Planner →
      </Link>
    </section>
  )
}
