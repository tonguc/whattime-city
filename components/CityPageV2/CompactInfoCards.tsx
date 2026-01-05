'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface CompactInfoCardsProps {
  city: City
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

export default function CompactInfoCards({ city }: CompactInfoCardsProps) {
  const { textMuted, isLight } = useThemeClasses()
  
  const plugType = plugTypes[city.countryCode] || 'C, F'
  const drivingSide = drivingLeft.includes(city.countryCode) ? 'Left' : 'Right'
  
  const items = [
    { 
      icon: '💵', 
      label: 'Currency', 
      value: city.info?.currencySymbol ? `${city.info.currencySymbol} ${city.info.currency}` : 'USD'
    },
    { 
      icon: '📞', 
      label: 'Phone', 
      value: city.info?.phoneCode || '+1' 
    },
    { 
      icon: '🔌', 
      label: 'Plug', 
      value: `Type ${plugType}` 
    },
    { 
      icon: '🚗', 
      label: 'Drive', 
      value: `${drivingSide}` 
    },
  ]

  return (
    <div className={`flex flex-wrap justify-center gap-2 mt-3 px-2`}>
      {items.map((item, i) => (
        <div 
          key={i}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs ${
            isLight 
              ? 'bg-slate-100 text-slate-600' 
              : 'bg-slate-800 text-slate-400'
          }`}
        >
          <span>{item.icon}</span>
          <span className="font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  )
}
