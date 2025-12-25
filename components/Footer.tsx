'use client'

import Link from 'next/link'
import { TimeIcons } from '@/components/TimeIcons'
import { useCityContext } from '@/lib/CityContext'

interface FooterProps {
  isLight?: boolean  // Optional for backward compatibility
}

export default function Footer({ isLight: isLightProp }: FooterProps = {}) {
  const context = useCityContext()
  
  // Use prop if provided, otherwise use context
  const { theme, isLight: contextIsLight } = context
  const isLight = isLightProp !== undefined ? isLightProp : contextIsLight
  const textMuted = isLight ? 'text-slate-500' : 'text-slate-400'
  
  return (
    <footer className={`py-6 backdrop-blur-xl ${theme.card} shadow-sm`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Links Row */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          <Link href="/map" className={`text-sm ${textMuted} hover:underline`}>World Map</Link>
          <Link href="/country" className={`text-sm ${textMuted} hover:underline`}>Countries</Link>
          <Link href="/guides" className={`text-sm ${textMuted} hover:underline`}>City Guides</Link>
          <Link href="/tools" className={`text-sm ${textMuted} hover:underline`}>Tools</Link>
          <Link href="/widget" className={`text-sm ${textMuted} hover:underline`}>Widget</Link>
          <span className={textMuted}>|</span>
          <Link href="/about" className={`text-sm ${textMuted} hover:underline`}>About</Link>
          <Link href="/privacy" className={`text-sm ${textMuted} hover:underline`}>Privacy</Link>
          <Link href="/contact" className={`text-sm ${textMuted} hover:underline`}>Contact</Link>
        </nav>
        
        {/* Time of day legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-3">
          {(['dawn', 'day', 'dusk', 'night'] as const).map(tod => {
            const Icon = TimeIcons[tod]
            const labels = { dawn: 'Dawn', day: 'Day', dusk: 'Dusk', night: 'Night' }
            return (
              <div key={tod} className={`flex items-center gap-1.5 text-xs ${textMuted}`} title={labels[tod]}>
                <Icon className="w-4 h-4" />
                <span>{labels[tod]}</span>
              </div>
            )
          })}
        </div>
        
        {/* Copyright Row */}
        <p className={`text-center text-sm ${textMuted}`}>© {new Date().getFullYear()} whattime.city</p>
      </div>
    </footer>
  )
}
