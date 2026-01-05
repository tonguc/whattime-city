'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface EEATFooterProps {
  city: City
}

export default function EEATFooter({ city }: EEATFooterProps) {
  const { textMuted, isLight } = useThemeClasses()
  
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={`rounded-2xl p-4 mt-4 ${
      isLight ? 'bg-slate-50 border border-slate-200' : 'bg-slate-800/30 border border-slate-700'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
        {/* Data Source */}
        <div className={`flex items-center gap-2 ${textMuted}`}>
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
          <span>
            Time data based on <a 
              href="https://www.iana.org/time-zones" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`underline hover:no-underline ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
            >
              IANA Time Zone Database
            </a>
          </span>
        </div>
        
        {/* Last Updated */}
        <div className={`flex items-center gap-2 ${textMuted}`}>
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <span>Updated {currentYear} • <a 
            href="/about" 
            className={`underline hover:no-underline ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
          >
            About this data
          </a></span>
        </div>
      </div>
      
      {/* Additional Trust Signal */}
      <p className={`mt-3 text-xs ${textMuted} opacity-70`}>
        {city.city} timezone: <code className={`px-1 py-0.5 rounded ${isLight ? 'bg-slate-200' : 'bg-slate-700'}`}>{city.timezone}</code>. 
        Coordinates: {city.lat.toFixed(2)}°{city.lat >= 0 ? 'N' : 'S'}, {Math.abs(city.lng).toFixed(2)}°{city.lng >= 0 ? 'E' : 'W'}.
        DST rules and business hours are for general reference only.
      </p>
    </footer>
  )
}
