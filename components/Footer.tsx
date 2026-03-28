'use client'

import Link from 'next/link'
import { TimeIcons } from '@/components/TimeIcons'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface FooterProps {
  // Legacy prop - kept for backward compatibility, no longer used
  isLight?: boolean
}

export default function Footer(_props: FooterProps) {
  const { card, textMuted } = useThemeClasses()
  
  return (
    <footer className={`py-6 border-t backdrop-blur-xl ${card} shadow-sm`}>
      <div className="max-w-6xl mx-auto px-4">

        {/* Two-column link grid */}
        <nav className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5 text-sm">
          <div>
            <p className={`font-semibold mb-2 ${textMuted}`}>Explore</p>
            <div className="flex flex-col gap-1.5">
              <Link href="/cities" className={`${textMuted} hover:underline`}>All Cities</Link>
              <Link href="/country" className={`${textMuted} hover:underline`}>Countries</Link>
              <Link href="/map" className={`${textMuted} hover:underline`}>World Map</Link>
              <Link href="/guides" className={`${textMuted} hover:underline`}>City Guides</Link>
              <Link href="/articles" className={`${textMuted} hover:underline`}>Articles</Link>
            </div>
          </div>
          <div>
            <p className={`font-semibold mb-2 ${textMuted}`}>Tools</p>
            <div className="flex flex-col gap-1.5">
              <Link href="/time-converter/" className={`${textMuted} hover:underline`}>Time Converter</Link>
              <Link href="/meeting/" className={`${textMuted} hover:underline`}>Meeting Planner</Link>
              <Link href="/flight-time/" className={`${textMuted} hover:underline`}>Flight Time</Link>
              <Link href="/military-time/" className={`${textMuted} hover:underline`}>Military Time</Link>
            </div>
          </div>
          <div>
            <p className={`font-semibold mb-2 ${textMuted}`}>Reference</p>
            <div className="flex flex-col gap-1.5">
              <Link href="/daylight-saving-time" className={`${textMuted} hover:underline`}>Daylight Saving Time</Link>
              <Link href="/us-time-zones" className={`${textMuted} hover:underline`}>US Time Zones</Link>
              <Link href="/area-code" className={`${textMuted} hover:underline`}>Area Codes</Link>
              <Link href="/eastern-time-zone" className={`${textMuted} hover:underline`}>Eastern Time</Link>
              <Link href="/pacific-time-zone" className={`${textMuted} hover:underline`}>Pacific Time</Link>
            </div>
          </div>
          <div>
            <p className={`font-semibold mb-2 ${textMuted}`}>About</p>
            <div className="flex flex-col gap-1.5">
              <Link href="/widget" className={`${textMuted} hover:underline`}>Embed Widget</Link>
              <Link href="/about" className={`${textMuted} hover:underline`}>About</Link>
              <Link href="/privacy" className={`${textMuted} hover:underline`}>Privacy</Link>
              <Link href="/contact" className={`${textMuted} hover:underline`}>Contact</Link>
            </div>
          </div>
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
