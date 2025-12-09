'use client'

import { useState, useEffect } from 'react'
import { City } from '@/lib/cities'

interface CityInfoProps {
  city: City
  theme: {
    text: string
    textMuted: string
    card: string
    accentText: string
  }
  isLight: boolean
}

// Calculate time difference between local and city timezone
function getTimeDifference(timezone: string): { hours: number; minutes: number; text: string } {
  const now = new Date()
  
  // Get local offset in minutes
  const localOffset = now.getTimezoneOffset()
  
  // Get city time
  const cityTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }))
  const localTime = new Date(now.toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
  
  // Calculate difference in minutes
  const diffMs = cityTime.getTime() - localTime.getTime()
  const diffMinutes = Math.round(diffMs / 60000)
  
  const hours = Math.floor(Math.abs(diffMinutes) / 60)
  const minutes = Math.abs(diffMinutes) % 60
  
  let text = ''
  if (diffMinutes === 0) {
    text = 'Aynı saat dilimi'
  } else if (diffMinutes > 0) {
    if (minutes === 0) {
      text = `${hours} saat ileri`
    } else {
      text = `${hours} saat ${minutes} dk ileri`
    }
  } else {
    if (minutes === 0) {
      text = `${hours} saat geri`
    } else {
      text = `${hours} saat ${minutes} dk geri`
    }
  }
  
  return { hours, minutes, text }
}

// Modern flat icons
const Icons = {
  TimeDiffArrow: ({ className, direction }: { className?: string; direction: 'ahead' | 'behind' | 'same' }) => {
    if (direction === 'same') {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12h8"/>
        </svg>
      )
    }
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        {direction === 'ahead' ? (
          <path d="M12 8v8m0-8l3 3m-3-3l-3 3"/>
        ) : (
          <path d="M12 16V8m0 8l3-3m-3 3l-3-3"/>
        )}
      </svg>
    )
  },
  Currency: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M15 9.5c-.5-1-1.5-1.5-3-1.5-2 0-3 1-3 2.5s1 2 3 2.5 3 1 3 2.5-1 2.5-3 2.5c-1.5 0-2.5-.5-3-1.5"/>
      <path d="M12 6v2m0 8v2"/>
    </svg>
  ),
  Population: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3"/>
      <circle cx="17" cy="7" r="2"/>
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/>
      <path d="M21 21v-1.5a3 3 0 00-3-3h-1"/>
    </svg>
  ),
  Phone: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
  Language: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  ),
  Climate: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      <circle cx="12" cy="12" r="5"/>
    </svg>
  ),
  Attractions: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/>
      <path d="M5 21V7l7-4 7 4v14"/>
      <path d="M9 21v-6h6v6"/>
      <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/>
    </svg>
  ),
  Demographics: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/>
      <path d="M7 16l4-4 4 4 5-6"/>
    </svg>
  ),
  Globe: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  ),
  Clock: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  ),
  TimeDiff: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="12" r="5"/>
      <path d="M7 9v3l2 1"/>
      <circle cx="17" cy="12" r="5"/>
      <path d="M17 9v3l2 1"/>
      <path d="M12 7v10"/>
    </svg>
  ),
  DaylightSaving: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  ),
  Calendar: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18"/>
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
    </svg>
  ),
  Business: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/>
      <path d="M9 8h1m5 0h1m-7 4h1m5 0h1m-7 4h1m5 0h1"/>
      <path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/>
    </svg>
  ),
  Lightbulb: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
      <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z"/>
    </svg>
  ),
  Transport: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 6v6m8-6v6"/>
      <rect x="4" y="3" width="16" height="14" rx="2"/>
      <path d="M4 11h16"/>
      <path d="M7 17v2m10-2v2"/>
      <circle cx="7.5" cy="14" r="1"/>
      <circle cx="16.5" cy="14" r="1"/>
    </svg>
  ),
  Emergency: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 9v4m0 4h.01"/>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
    </svg>
  ),
  Holiday: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

export default function CityInfo({ city, theme, isLight }: CityInfoProps) {
  const info = city.info
  const [timeDiff, setTimeDiff] = useState<{ hours: number; minutes: number; text: string } | null>(null)
  
  useEffect(() => {
    // Calculate on client side only
    setTimeDiff(getTimeDifference(city.timezone))
    
    // Update every minute
    const interval = setInterval(() => {
      setTimeDiff(getTimeDifference(city.timezone))
    }, 60000)
    
    return () => clearInterval(interval)
  }, [city.timezone])
  
  if (!info) return null
  
  const seo = info.seoContent
  const iconClass = `w-5 h-5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`
  const accentIconClass = `w-5 h-5 ${theme.accentText}`
  
  // Determine direction for icon
  const direction = timeDiff ? (timeDiff.text.includes('ileri') ? 'ahead' : timeDiff.text.includes('geri') ? 'behind' : 'same') : 'same'
  
  return (
    <div className={`rounded-2xl p-6 ${theme.card} backdrop-blur-md space-y-6`}>
      <div className="flex items-center justify-between">
        <h3 className={`text-xl font-semibold ${theme.text}`}>
          About {city.city}
        </h3>
        
        {/* Compact Time Difference Badge */}
        {timeDiff && (
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm ${
            direction === 'ahead' 
              ? (isLight ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-900/40 text-emerald-400')
              : direction === 'behind'
              ? (isLight ? 'bg-orange-100 text-orange-700' : 'bg-orange-900/40 text-orange-400')
              : (isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700/50 text-slate-400')
          }`}>
            {direction === 'ahead' && (
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5m0 0l-5 5m5-5l5 5"/>
              </svg>
            )}
            {direction === 'behind' && (
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14m0 0l5-5m-5 5l-5-5"/>
              </svg>
            )}
            <span className="font-medium">{timeDiff.text}</span>
          </div>
        )}
      </div>
      
      {/* Quick Facts Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className={`p-3 rounded-xl ${isLight ? 'bg-white/50' : 'bg-slate-800/50'}`}>
          <div className={`flex items-center gap-2 ${theme.textMuted} mb-1`}>
            <Icons.Currency className={iconClass} />
            <span className="text-sm">Currency</span>
          </div>
          <div className={`text-base font-medium ${theme.text}`}>{info.currency}</div>
          <div className={`text-xl font-bold ${theme.accentText}`}>{info.currencySymbol}</div>
        </div>
        
        <div className={`p-3 rounded-xl ${isLight ? 'bg-white/50' : 'bg-slate-800/50'}`}>
          <div className={`flex items-center gap-2 ${theme.textMuted} mb-1`}>
            <Icons.Population className={iconClass} />
            <span className="text-sm">Population</span>
          </div>
          <div className={`text-base font-medium ${theme.text}`}>{info.population}</div>
          {info.metroPopulation && (
            <div className={`text-sm ${theme.textMuted}`}>Metro: {info.metroPopulation}</div>
          )}
        </div>
        
        <div className={`p-3 rounded-xl ${isLight ? 'bg-white/50' : 'bg-slate-800/50'}`}>
          <div className={`flex items-center gap-2 ${theme.textMuted} mb-1`}>
            <Icons.Phone className={iconClass} />
            <span className="text-sm">Phone Code</span>
          </div>
          <div className={`text-base font-medium ${theme.text}`}>{info.phoneCode}</div>
        </div>
        
        <div className={`p-3 rounded-xl ${isLight ? 'bg-white/50' : 'bg-slate-800/50'}`}>
          <div className={`flex items-center gap-2 ${theme.textMuted} mb-1`}>
            <Icons.Language className={iconClass} />
            <span className="text-sm">Language</span>
          </div>
          <div className={`text-base font-medium ${theme.text}`}>{info.language}</div>
        </div>
        
        <div className={`p-3 rounded-xl col-span-2 ${isLight ? 'bg-white/50' : 'bg-slate-800/50'}`}>
          <div className={`flex items-center gap-2 ${theme.textMuted} mb-1`}>
            <Icons.Climate className={iconClass} />
            <span className="text-sm">Climate</span>
          </div>
          <div className={`text-base ${theme.text}`}>{info.climate}</div>
        </div>
      </div>
      
      {/* Top Attractions */}
      <div>
        <h4 className={`flex items-center gap-2 text-base font-bold mb-3 ${theme.text}`}>
          <Icons.Attractions className={accentIconClass} />
          Top Attractions
        </h4>
        <div className="flex flex-wrap gap-2">
          {info.attractions.map((attraction, index) => (
            <span 
              key={index}
              className={`px-3 py-1.5 rounded-full text-base ${
                isLight ? 'bg-white/60 text-slate-700' : 'bg-slate-700/60 text-slate-200'
              }`}
            >
              {attraction}
            </span>
          ))}
        </div>
      </div>
      
      {/* Demographics */}
      <div>
        <h4 className={`flex items-center gap-2 text-base font-bold mb-2 ${theme.text}`}>
          <Icons.Demographics className={accentIconClass} />
          Demographics
        </h4>
        <p className={`text-base leading-relaxed ${theme.textMuted}`}>
          {info.demographics}
        </p>
      </div>
      
      {/* SEO Content Sections */}
      {seo && (
        <>
          {/* Introduction */}
          <div>
            <h4 className={`flex items-center gap-2 text-base font-bold mb-2 ${theme.text}`}>
              <Icons.Globe className={accentIconClass} />
              Overview
            </h4>
            <p className={`text-base leading-relaxed ${theme.textMuted}`}>{seo.intro}</p>
          </div>
          
          {/* Timezone Facts */}
          <div>
            <h4 className={`flex items-center gap-2 text-base font-bold mb-2 ${theme.text}`}>
              <Icons.Clock className={accentIconClass} />
              Timezone Facts
            </h4>
            <p className={`text-base leading-relaxed ${theme.textMuted}`}>{seo.timezoneFacts}</p>
          </div>
          
          {/* Time Difference */}
          {seo.timeDifference && (
            <div className={`p-4 rounded-xl ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
              <h4 className={`flex items-center gap-2 text-base font-bold mb-2 ${theme.text}`}>
                <Icons.TimeDiff className="w-5 h-5 text-amber-500" />
                Time Difference
              </h4>
              <p className={`text-base leading-relaxed ${theme.textMuted}`}>{seo.timeDifference}</p>
            </div>
          )}
          
          {/* Daylight Saving */}
          {seo.daylightSaving && (
            <div>
              <h4 className={`flex items-center gap-2 text-base font-bold mb-2 ${theme.text}`}>
                <Icons.DaylightSaving className={accentIconClass} />
                Daylight Saving Time
              </h4>
              <p className={`text-base leading-relaxed ${theme.textMuted}`}>{seo.daylightSaving}</p>
            </div>
          )}
          
          {/* Best Time to Visit */}
          <div>
            <h4 className={`flex items-center gap-2 text-base font-bold mb-2 ${theme.text}`}>
              <Icons.Calendar className={accentIconClass} />
              Best Time to Visit
            </h4>
            <p className={`text-base leading-relaxed ${theme.textMuted}`}>{seo.bestTimeToVisit}</p>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className={`flex items-center gap-2 text-base font-bold mb-2 ${theme.text}`}>
              <Icons.Business className={accentIconClass} />
              Business Hours
            </h4>
            <p className={`text-base leading-relaxed ${theme.textMuted}`}>{seo.businessHours}</p>
          </div>
          
          {/* Local Tips */}
          {seo.localTips && (
            <div className={`p-4 rounded-xl ${isLight ? 'bg-blue-50' : 'bg-blue-900/20'}`}>
              <h4 className={`flex items-center gap-2 text-base font-bold mb-2 ${theme.text}`}>
                <Icons.Lightbulb className="w-5 h-5 text-blue-500" />
                Local Tips
              </h4>
              <p className={`text-base leading-relaxed ${theme.textMuted}`}>{seo.localTips}</p>
            </div>
          )}
          
          {/* Transportation */}
          {seo.transportation && (
            <div>
              <h4 className={`flex items-center gap-2 text-base font-bold mb-2 ${theme.text}`}>
                <Icons.Transport className={accentIconClass} />
                Transportation
              </h4>
              <p className={`text-base leading-relaxed ${theme.textMuted}`}>{seo.transportation}</p>
            </div>
          )}
          
          {/* Emergency Numbers */}
          {seo.emergencyNumbers && (
            <div className={`p-4 rounded-xl ${isLight ? 'bg-red-50' : 'bg-red-900/20'}`}>
              <h4 className={`flex items-center gap-2 text-base font-bold mb-2 ${theme.text}`}>
                <Icons.Emergency className="w-5 h-5 text-red-500" />
                Emergency Numbers
              </h4>
              <p className={`text-base leading-relaxed ${theme.textMuted}`}>{seo.emergencyNumbers}</p>
            </div>
          )}
          
          {/* Public Holidays */}
          {seo.publicHolidays && (
            <div>
              <h4 className={`flex items-center gap-2 text-base font-bold mb-2 ${theme.text}`}>
                <Icons.Holiday className={accentIconClass} />
                Public Holidays
              </h4>
              <p className={`text-base leading-relaxed ${theme.textMuted}`}>{seo.publicHolidays}</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
