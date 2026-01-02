'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface TimeIntelligenceProps {
  city: City
}

export default function TimeIntelligence({ city }: TimeIntelligenceProps) {
  const { card, text, textMuted, isLight } = useThemeClasses()
  
  if (!city.info?.seoContent) return null

  const seoContent = city.info.seoContent

  return (
    <div className={`rounded-3xl p-6 backdrop-blur-xl border ${card} mt-4`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isLight ? 'bg-indigo-100' : 'bg-indigo-900/30'}`}>
          <svg className={`w-5 h-5 ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
            <path d="M2 12h2M20 12h2M12 2v2M12 20v2"/>
          </svg>
        </div>
        <h2 className={`text-xl font-bold ${text}`}>
          Time in {city.city}
        </h2>
      </div>
      
      <div className="space-y-5">
        {/* Intro */}
        <p className={`leading-relaxed ${textMuted}`}>{seoContent.intro}</p>
        
        {/* DST Info */}
        {seoContent.daylightSaving && (
          <div className={`p-4 rounded-xl ${isLight ? 'bg-amber-50 border border-amber-100' : 'bg-amber-900/20 border border-amber-800/30'}`}>
            <div className="flex items-center gap-2 mb-2">
              <svg className={`w-5 h-5 ${isLight ? 'text-amber-600' : 'text-amber-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              <h3 className={`font-semibold ${text}`}>Daylight Saving Time</h3>
            </div>
            <p className={`leading-relaxed ${textMuted}`}>{seoContent.daylightSaving}</p>
          </div>
        )}
        
        {/* Time Difference */}
        {seoContent.timeDifference && (
          <div>
            <h3 className={`font-semibold mb-2 flex items-center gap-2 ${text}`}>
              <svg className={`w-4 h-4 ${textMuted}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="6" cy="12" r="4"/>
                <circle cx="18" cy="12" r="4"/>
                <path d="M10 12h4"/>
              </svg>
              Time Difference
            </h3>
            <p className={`leading-relaxed ${textMuted}`}>{seoContent.timeDifference}</p>
          </div>
        )}
        
        {/* Business Hours */}
        <div className={`p-4 rounded-xl ${isLight ? 'bg-green-50 border border-green-100' : 'bg-green-900/20 border border-green-800/30'}`}>
          <div className="flex items-center gap-2 mb-2">
            <svg className={`w-5 h-5 ${isLight ? 'text-green-600' : 'text-green-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8M12 17v4"/>
            </svg>
            <h3 className={`font-semibold ${text}`}>Business Hours</h3>
          </div>
          <p className={`leading-relaxed ${textMuted}`}>{seoContent.businessHours}</p>
        </div>
        
        {/* Timezone Facts */}
        <div>
          <h3 className={`font-semibold mb-2 ${text}`}>Timezone Facts</h3>
          <p className={`leading-relaxed ${textMuted}`}>{seoContent.timezoneFacts}</p>
        </div>
      </div>
    </div>
  )
}
