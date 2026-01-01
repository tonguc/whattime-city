import { City } from '@/lib/cities'

interface TravelBridgeProps {
  city: City
  isLight: boolean
}

export default function TravelBridge({ city, isLight }: TravelBridgeProps) {
  if (!city.info) return null
  
  return (
    <div className={`rounded-3xl p-6 mt-4 ${isLight ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-gradient-to-r from-blue-600 to-indigo-700'}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Visiting {city.city}?</h3>
            <p className="text-white/80 text-sm">{city.info.seoContent?.bestTimeToVisit?.split('.')[0] || 'Plan your perfect trip'}.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="/flight-time/" className="px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-medium transition-all flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
            </svg>
            Flight Time
          </a>
          <a href="/jet-lag-advisor/" className="px-5 py-2.5 rounded-xl bg-white text-blue-600 font-medium hover:bg-blue-50 transition-all flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6"/>
              <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
            </svg>
            Jet Lag Tips
          </a>
        </div>
      </div>
    </div>
  )
}
