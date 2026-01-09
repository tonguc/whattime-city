'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface BusinessHoursBoxProps {
  city: City
}

// Business hours data by city
const businessHoursData: Record<string, {
  standard: string
  banks: string
  shops: string
  restaurants?: string
  note?: string
}> = {
  'new-york': {
    standard: '9:00 AM – 5:00 PM',
    banks: '9:00 AM – 5:00 PM (some Saturday)',
    shops: '10:00 AM – 9:00 PM',
    restaurants: 'Until midnight or later',
    note: 'Wall Street: 9:30 AM – 4:00 PM'
  },
  'london': {
    standard: '9:00 AM – 5:30 PM',
    banks: '9:30 AM – 4:30 PM',
    shops: '10:00 AM – 6:00 PM (9 PM Thu)',
    restaurants: 'Until 11:00 PM',
    note: 'Sunday trading limited for large stores'
  },
  'tokyo': {
    standard: '9:00 AM – 6:00 PM',
    banks: '9:00 AM – 3:00 PM (weekdays only)',
    shops: '10:00 AM – 8:00 PM',
    restaurants: 'Many close 2–5 PM',
    note: 'Konbini (convenience stores) 24/7'
  },
  'paris': {
    standard: '9:00 AM – 6:00 PM',
    banks: '9:00 AM – 5:00 PM (closed lunch)',
    shops: '10:00 AM – 7:00 PM',
    restaurants: '12–2 PM, 7–11 PM',
    note: 'Many shops closed Sunday & Monday'
  },
  'dubai': {
    standard: '8:00 AM – 6:00 PM',
    banks: '8:00 AM – 1:00 PM (some 4–6 PM)',
    shops: '10:00 AM – 10:00 PM',
    restaurants: 'Until midnight',
    note: 'Friday is weekend day, not Sunday'
  },
  'singapore': {
    standard: '9:00 AM – 6:00 PM',
    banks: '9:30 AM – 3:00 PM',
    shops: '10:00 AM – 10:00 PM',
    restaurants: 'Hawkers open late',
    note: 'Malls often open until 10 PM'
  },
  'hong-kong': {
    standard: '9:00 AM – 6:00 PM',
    banks: '9:00 AM – 4:30 PM',
    shops: '10:00 AM – 9:00 PM',
    restaurants: 'Until 11:00 PM',
    note: 'Many businesses open Saturday half-day'
  },
  'sydney': {
    standard: '9:00 AM – 5:00 PM',
    banks: '9:30 AM – 4:00 PM',
    shops: '9:00 AM – 5:30 PM (9 PM Thu)',
    restaurants: 'Until 10:00 PM',
    note: 'Late night shopping Thursday'
  },
  'los-angeles': {
    standard: '9:00 AM – 5:00 PM',
    banks: '9:00 AM – 5:00 PM',
    shops: '10:00 AM – 9:00 PM',
    restaurants: 'Until 10–11 PM',
    note: 'Hollywood operates on its own schedule'
  },
  'istanbul': {
    standard: '9:00 AM – 6:00 PM',
    banks: '9:00 AM – 5:00 PM',
    shops: '10:00 AM – 10:00 PM',
    restaurants: 'Until midnight',
    note: 'Grand Bazaar: 9 AM – 7 PM (closed Sun)'
  },
  'chicago': {
    standard: '8:00 AM – 5:00 PM',
    banks: '9:00 AM – 5:00 PM',
    shops: '10:00 AM – 9:00 PM',
    restaurants: 'Until 10–11 PM',
    note: 'CME trading: 8:30 AM – 3:15 PM CT'
  },
  'frankfurt': {
    standard: '9:00 AM – 6:00 PM',
    banks: '9:00 AM – 4:00 PM',
    shops: '10:00 AM – 8:00 PM',
    restaurants: 'Until 11:00 PM',
    note: 'Most shops closed Sunday'
  },
  'mumbai': {
    standard: '9:30 AM – 5:30 PM',
    banks: '10:00 AM – 4:00 PM',
    shops: '11:00 AM – 8:00 PM',
    restaurants: 'Until 11:00 PM',
    note: 'BSE/NSE: 9:15 AM – 3:30 PM IST'
  },
  'bangkok': {
    standard: '8:30 AM – 5:30 PM',
    banks: '8:30 AM – 3:30 PM',
    shops: '10:00 AM – 10:00 PM',
    restaurants: 'Street food 24/7',
    note: 'Many businesses close for lunch 12–1 PM'
  },
  'seoul': {
    standard: '9:00 AM – 6:00 PM',
    banks: '9:00 AM – 4:00 PM',
    shops: '10:30 AM – 10:00 PM',
    restaurants: 'Until midnight (many 24/7)',
    note: 'Convenience stores 24/7'
  },
  'shanghai': {
    standard: '9:00 AM – 6:00 PM',
    banks: '9:00 AM – 5:00 PM',
    shops: '10:00 AM – 10:00 PM',
    restaurants: 'Until 10:00 PM',
    note: 'SSE: 9:30 AM – 3:00 PM (lunch break)'
  },
  'toronto': {
    standard: '9:00 AM – 5:00 PM',
    banks: '10:00 AM – 4:00 PM',
    shops: '10:00 AM – 9:00 PM',
    restaurants: 'Until 10–11 PM',
    note: 'TSX: 9:30 AM – 4:00 PM ET'
  },
  'berlin': {
    standard: '9:00 AM – 6:00 PM',
    banks: '9:00 AM – 4:00 PM',
    shops: '10:00 AM – 8:00 PM',
    restaurants: 'Until 11:00 PM',
    note: 'Shops closed Sunday (except some areas)'
  },
  'amsterdam': {
    standard: '9:00 AM – 5:30 PM',
    banks: '9:00 AM – 5:00 PM',
    shops: '10:00 AM – 6:00 PM (9 PM Thu)',
    restaurants: 'Until 10:00 PM',
    note: 'Many shops closed Sunday morning'
  },
  'sao-paulo': {
    standard: '9:00 AM – 6:00 PM',
    banks: '10:00 AM – 4:00 PM',
    shops: '10:00 AM – 10:00 PM',
    restaurants: 'Until midnight or later',
    note: 'B3: 10:00 AM – 5:00 PM BRT'
  },
}

// Default hours for cities without specific data
const defaultHours = {
  standard: '9:00 AM – 5:00 PM',
  banks: '9:00 AM – 4:00 PM',
  shops: '10:00 AM – 8:00 PM',
  restaurants: 'Varies',
}

export default function BusinessHoursBox({ city }: BusinessHoursBoxProps) {
  const { textSection, isLight } = useThemeClasses()
  
  const hours = businessHoursData[city.slug] || defaultHours
  
  return (
    <section className={`rounded-2xl p-5 border-2 ${
      isLight 
        ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200' 
        : 'bg-gradient-to-br from-emerald-900/20 to-green-900/20 border-emerald-700/50'
    }`}>
      <h2 className={`mb-4 flex items-center gap-2 ${textSection}`}>
        <span>🏢</span>
        <span>Business Hours in {city.city}</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Standard Business */}
        <div className={`p-3 rounded-xl ${isLight ? 'bg-white/70' : 'bg-slate-800/50'}`}>
          <div className={`text-micro mb-1.5 font-semibold ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`}>
            OFFICES
          </div>
          <div className={`text-body font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>{hours.standard}</div>
        </div>
        
        {/* Banks */}
        <div className={`p-3 rounded-xl ${isLight ? 'bg-white/70' : 'bg-slate-800/50'}`}>
          <div className={`text-micro mb-1.5 font-semibold ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`}>
            BANKS
          </div>
          <div className={`text-body font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>{hours.banks}</div>
        </div>
        
        {/* Shops */}
        <div className={`p-3 rounded-xl ${isLight ? 'bg-white/70' : 'bg-slate-800/50'}`}>
          <div className={`text-micro mb-1.5 font-semibold ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`}>
            SHOPS
          </div>
          <div className={`text-body font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>{hours.shops}</div>
        </div>
        
        {/* Restaurants */}
        <div className={`p-3 rounded-xl ${isLight ? 'bg-white/70' : 'bg-slate-800/50'}`}>
          <div className={`text-micro mb-1.5 font-semibold ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`}>
            RESTAURANTS
          </div>
          <div className={`text-body font-semibold ${isLight ? 'text-slate-800' : 'text-white'}`}>{hours.restaurants || 'Varies'}</div>
        </div>
      </div>
      
      {/* Note */}
      {hours.note && (
        <p className={`mt-4 text-body ${isLight ? 'text-emerald-700' : 'text-emerald-300'} flex items-center gap-2`}>
          <span>💡</span>
          <span>{hours.note}</span>
        </p>
      )}
      
      {/* Source Disclaimer */}
      <p className={`mt-4 pt-3 border-t text-meta ${
        isLight ? 'border-emerald-200 text-emerald-600/70' : 'border-emerald-800 text-emerald-400/70'
      }`}>
        Hours are general references based on official business standards. Actual hours may vary.
      </p>
    </section>
  )
}
