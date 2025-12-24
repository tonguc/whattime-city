import { City } from '@/lib/cities'
import { getSunTimes } from '@/lib/sun-calculator'
import { themes } from '@/lib/themes'

interface QuickInfoCardsProps {
  city: City
  localTime: Date
  theme: typeof themes[keyof typeof themes]
  isLight: boolean
}

export default function QuickInfoCards({ city, localTime, theme, isLight }: QuickInfoCardsProps) {
  const sunTimes = getSunTimes(localTime, city.lat, city.lng)
  
  const formatSunTime = (time: number) => {
    const h = Math.floor(time)
    const m = Math.round((time - h) * 60)
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
  }

  return (
    <>
      {/* Currency */}
      <div className={`rounded-2xl p-4 backdrop-blur-xl border ${theme.card} flex items-center gap-3`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? 'bg-emerald-100' : 'bg-emerald-900/30'}`}>
          <svg className={`w-6 h-6 ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.5 8.5h5M9.5 15.5h5M12 8.5v7"/>
          </svg>
        </div>
        <div>
          <div className={`text-xs uppercase tracking-wide ${theme.textMuted}`}>Currency</div>
          <div className={`font-bold ${theme.text}`}>{city.info?.currencySymbol || '$'} {city.info?.currency || 'USD'}</div>
        </div>
      </div>
      
      {/* Phone Code */}
      <div className={`rounded-2xl p-4 backdrop-blur-xl border ${theme.card} flex items-center gap-3`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? 'bg-blue-100' : 'bg-blue-900/30'}`}>
          <svg className={`w-6 h-6 ${isLight ? 'text-blue-600' : 'text-blue-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </div>
        <div>
          <div className={`text-xs uppercase tracking-wide ${theme.textMuted}`}>Phone Code</div>
          <div className={`font-bold ${theme.text}`}>{city.info?.phoneCode || '+1'}</div>
        </div>
      </div>
      
      {/* Sunrise */}
      <div className={`rounded-2xl p-4 backdrop-blur-xl border ${theme.card} flex items-center gap-3`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? 'bg-amber-100' : 'bg-amber-900/30'}`}>
          <svg className={`w-6 h-6 ${isLight ? 'text-amber-600' : 'text-amber-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 18a5 5 0 00-10 0"/>
            <line x1="12" y1="2" x2="12" y2="9"/>
            <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/>
            <line x1="1" y1="18" x2="3" y2="18"/>
            <line x1="21" y1="18" x2="23" y2="18"/>
            <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/>
            <line x1="23" y1="22" x2="1" y2="22"/>
            <polyline points="8,6 12,2 16,6"/>
          </svg>
        </div>
        <div>
          <div className={`text-xs uppercase tracking-wide ${theme.textMuted}`}>Sunrise</div>
          <div className={`font-bold ${theme.text}`}>{formatSunTime(sunTimes.sunrise)}</div>
        </div>
      </div>
      
      {/* Sunset */}
      <div className={`rounded-2xl p-4 backdrop-blur-xl border ${theme.card} flex items-center gap-3`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? 'bg-orange-100' : 'bg-orange-900/30'}`}>
          <svg className={`w-6 h-6 ${isLight ? 'text-orange-600' : 'text-orange-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 18a5 5 0 00-10 0"/>
            <line x1="12" y1="9" x2="12" y2="2"/>
            <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/>
            <line x1="1" y1="18" x2="3" y2="18"/>
            <line x1="21" y1="18" x2="23" y2="18"/>
            <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/>
            <line x1="23" y1="22" x2="1" y2="22"/>
            <polyline points="16,5 12,9 8,5"/>
          </svg>
        </div>
        <div>
          <div className={`text-xs uppercase tracking-wide ${theme.textMuted}`}>Sunset</div>
          <div className={`font-bold ${theme.text}`}>{formatSunTime(sunTimes.sunset)}</div>
        </div>
      </div>
    </>
  )
}
