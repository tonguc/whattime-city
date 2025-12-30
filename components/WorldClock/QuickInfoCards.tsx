import { City } from '@/lib/cities'
import { themes } from '@/lib/themes'

interface QuickInfoCardsProps {
  city: City
  localTime: Date
  theme: typeof themes[keyof typeof themes]
  isLight: boolean
}

// Plug type lookup by country code
const plugTypes: Record<string, string> = {
  US: 'A, B', CA: 'A, B', MX: 'A, B', JP: 'A, B',
  GB: 'G', IE: 'G', HK: 'G', SG: 'G', MY: 'G', AE: 'G',
  DE: 'C, F', FR: 'C, E', ES: 'C, F', IT: 'C, F, L', NL: 'C, F', BE: 'C, E',
  AT: 'C, F', CH: 'C, J', PT: 'C, F', PL: 'C, E', CZ: 'C, E', SE: 'C, F',
  NO: 'C, F', DK: 'C, E, F, K', FI: 'C, F', GR: 'C, F', HU: 'C, F',
  RU: 'C, F', UA: 'C, F', TR: 'C, F',
  AU: 'I', NZ: 'I', CN: 'A, C, I', AR: 'C, I', 
  BR: 'C, N', CL: 'C, L', CO: 'A, B', PE: 'A, B, C',
  IN: 'C, D, M', PK: 'C, D', BD: 'C, D, G, K', TH: 'A, B, C, O',
  VN: 'A, C', PH: 'A, B, C', ID: 'C, F', KR: 'C, F',
  ZA: 'C, D, M, N', EG: 'C, F', NG: 'D, G', KE: 'G',
  IL: 'C, H', SA: 'G', QA: 'G', KW: 'G',
}

// Driving side lookup
const drivingLeft: string[] = [
  'GB', 'IE', 'AU', 'NZ', 'JP', 'IN', 'HK', 'SG', 'MY', 'TH', 'ID', 
  'ZA', 'KE', 'NG', 'PK', 'BD', 'CY', 'MT'
]

export default function QuickInfoCards({ city, localTime, theme, isLight }: QuickInfoCardsProps) {
  const plugType = plugTypes[city.countryCode] || 'C, F'
  const drivingSide = drivingLeft.includes(city.countryCode) ? 'Left' : 'Right'

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
      
      {/* Plug Type */}
      <div className={`rounded-2xl p-4 backdrop-blur-xl border ${theme.card} flex items-center gap-3`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? 'bg-amber-100' : 'bg-amber-900/30'}`}>
          <svg className={`w-6 h-6 ${isLight ? 'text-amber-600' : 'text-amber-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v6"/>
            <path d="M8 4v4"/>
            <path d="M16 4v4"/>
            <rect x="6" y="8" width="12" height="8" rx="2"/>
            <path d="M10 16v4"/>
            <path d="M14 16v4"/>
            <path d="M8 20h8"/>
          </svg>
        </div>
        <div>
          <div className={`text-xs uppercase tracking-wide ${theme.textMuted}`}>Plug Type</div>
          <div className={`font-bold ${theme.text}`}>Type {plugType}</div>
        </div>
      </div>
      
      {/* Driving Side */}
      <div className={`rounded-2xl p-4 backdrop-blur-xl border ${theme.card} flex items-center gap-3`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? 'bg-purple-100' : 'bg-purple-900/30'}`}>
          <svg className={`w-6 h-6 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v8"/>
            <path d={drivingSide === 'Left' ? "M8 12l4-4 4 4" : "M8 12l4 4 4-4"}/>
          </svg>
        </div>
        <div>
          <div className={`text-xs uppercase tracking-wide ${theme.textMuted}`}>Driving</div>
          <div className={`font-bold ${theme.text}`}>{drivingSide} Side</div>
        </div>
      </div>
    </>
  )
}
