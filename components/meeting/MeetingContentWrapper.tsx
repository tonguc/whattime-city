'use client'

/**
 * Meeting Content Wrapper
 * Wraps meeting content with proper theming from CityContext
 * DynamicContent handles its own theming internally via useCityContext
 */

import { ReactNode } from 'react'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import DynamicContent from './DynamicContent'

interface Props {
  cities: City[]
  overlapCount?: number
  children?: ReactNode
}

export default function MeetingContentWrapper({ cities, overlapCount, children }: Props) {
  const { theme, isLight } = useCityContext()
  
  return (
    <div className={`rounded-2xl p-6 mt-8 backdrop-blur-xl border relative z-10 ${theme.card}`}>
      {/* Dynamic Content - handles its own theming via useCityContext */}
      {cities.length >= 2 && (
        <DynamicContent 
          cities={cities}
          overlapCount={overlapCount}
        />
      )}

      {/* Single City Info */}
      {cities.length === 1 && (
        <div className={`prose max-w-none ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Current Time in {cities[0].city}
          </h2>
          <p className="text-lg mb-4">
            <strong className={isLight ? 'text-slate-800' : 'text-white'}>
              Timezone:</strong> {cities[0].timezone}
          </p>
          <p className="mb-4">
            <strong className={isLight ? 'text-slate-800' : 'text-white'}>
              Business Hours:</strong> 9:00 AM - 5:00 PM local time
          </p>
          <div className={`p-4 rounded-lg mt-6 ${
            isLight 
              ? 'bg-blue-50 border border-blue-200' 
              : 'bg-blue-900/20 border border-blue-800/50'
          }`}>
            <p className={`text-sm ${isLight ? 'text-blue-700' : 'text-blue-300'}`}>
              <strong>💡 Tip:</strong> Add a second city to compare time zones and find the best meeting time!
            </p>
          </div>
        </div>
      )}

      {/* Additional children if provided */}
      {children}
    </div>
  )
}
