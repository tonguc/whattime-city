'use client'

import { useCityContext } from '@/lib/CityContext'
import { City } from '@/lib/cities'
import DynamicContent from './DynamicContent'

interface ContentWrapperProps {
  cityList: City[]
  overlapCount: number
}

export function MeetingContentWrapper({ cityList, overlapCount }: ContentWrapperProps) {
  const { theme, isLight } = useCityContext()
  
  if (cityList.length < 2) return null
  
  return (
    <div className={`rounded-2xl p-6 mt-8 backdrop-blur-xl border relative z-10 ${theme.card}`}>
      <DynamicContent 
        cities={cityList}
        isLight={isLight}
        overlapCount={overlapCount}
      />
    </div>
  )
}

interface SingleCityWrapperProps {
  city: City
}

export function SingleCityWrapper({ city }: SingleCityWrapperProps) {
  const { theme, isLight } = useCityContext()
  
  return (
    <div className={`rounded-2xl p-6 mt-8 backdrop-blur-xl border relative z-10 ${theme.card}`}>
      <div className={`prose max-w-none ${theme.textMuted}`}>
        <h2 className={`text-2xl font-bold mb-4 ${theme.text}`}>
          Current Time in {city.city}
        </h2>
        <p className="text-lg mb-4">
          <strong className={theme.text}>
            Timezone: </strong>{city.timezone}
        </p>
        <p className="mb-4">
          <strong className={theme.text}>
            Business Hours: </strong>9:00 AM - 5:00 PM local time
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
    </div>
  )
}
