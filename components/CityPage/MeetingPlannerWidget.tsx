'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface Props {
  city: City
}

export default function MeetingPlannerWidget({ city }: Props) {
  const { isLight, card } = useThemeClasses()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = `/meeting/${city.slug}`
  }

  return (
    <div className={`rounded-2xl p-5 mt-4 ${card}`}>
      <h3 className={`text-section flex items-center gap-2 mb-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
        <span>📅</span>
        <span>Meeting Planner</span>
      </h3>
      <p className={`text-xs mb-4 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
        Find the best overlap hours between {city.city} and your location
      </p>

      <div className={`rounded-xl p-4 mb-4 ${isLight ? 'bg-slate-50 border border-slate-200' : 'bg-slate-800/60 border border-slate-600'}`}>
        <div className="flex items-center justify-between gap-4">
          {/* City */}
          <div className="flex items-center gap-2">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold ${isLight ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/40 text-blue-300'}`}>
              {city.city.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className={`text-sm font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>{city.city}</div>
              <div className={`text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>{city.timezone}</div>
            </div>
          </div>

          {/* VS */}
          <div className={`text-xs font-bold px-2 py-1 rounded-full ${isLight ? 'bg-slate-200 text-slate-500' : 'bg-slate-700 text-slate-400'}`}>VS</div>

          {/* User location */}
          <div className="flex items-center gap-2">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isLight ? 'bg-green-100' : 'bg-green-900/40'}`}>
              <svg className={`w-4 h-4 ${isLight ? 'text-green-600' : 'text-green-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <div className={`text-sm font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>Your Location</div>
              <div className={`text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>Auto-detected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Best hours preview */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 24 }, (_, i) => {
          const isWork = i >= 9 && i <= 17
          return (
            <div
              key={i}
              className={`flex-1 h-2 rounded-sm ${
                isWork
                  ? isLight ? 'bg-blue-500' : 'bg-blue-400'
                  : isLight ? 'bg-slate-200' : 'bg-slate-700'
              }`}
            />
          )
        })}
      </div>
      <p className={`text-xs mb-4 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
        Business hours: 9 AM – 5 PM · Overlap calculated on open
      </p>

      <a
        href={`/meeting/${city.slug}`}
        onClick={handleClick}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.01] ${
          isLight
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        Find Best Meeting Time
      </a>
    </div>
  )
}
