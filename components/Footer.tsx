'use client'

import Link from 'next/link'
import { TimeIcons } from '@/components/TimeIcons'

interface FooterProps {
  isLight: boolean
}

export default function Footer({ isLight }: FooterProps) {
  const textMuted = isLight ? 'text-slate-500' : 'text-slate-400'
  const textHover = isLight ? 'text-slate-800' : 'text-white'
  
  return (
    <footer className={`py-8 border-t ${isLight ? 'border-slate-200 bg-white/50' : 'border-slate-800 bg-slate-900/50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          <Link href="/map" className={`flex items-center gap-2 text-sm ${textMuted} hover:${textHover} transition-colors group`} title="Interactive world time map">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth={2}/>
              <path strokeWidth={2} d="M2 12h20"/>
              <path strokeWidth={2} d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span className="group-hover:underline">World Map</span>
          </Link>
          <Link href="/country" className={`flex items-center gap-2 text-sm ${textMuted} hover:${textHover} transition-colors group`} title="Browse cities by country">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
            <span className="group-hover:underline">Countries</span>
          </Link>
          <Link href="/tools" className={`flex items-center gap-2 text-sm ${textMuted} hover:${textHover} transition-colors group`} title="Time zone tools">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="group-hover:underline">Tools</span>
          </Link>
          <Link href="/widget" className={`flex items-center gap-2 text-sm ${textMuted} hover:${textHover} transition-colors group`} title="Embed a clock on your site">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="group-hover:underline">Free Widget</span>
          </Link>
        </nav>
        
        {/* Time of day legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
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
        
        <p className={`text-center text-sm ${textMuted}`}>© {new Date().getFullYear()} whattime.city</p>
        
        {/* Legal Links */}
        <div className="flex justify-center gap-4 mt-4">
          <Link href="/about" className={`text-xs ${textMuted} hover:underline`}>About</Link>
          <span className={textMuted}>•</span>
          <Link href="/privacy" className={`text-xs ${textMuted} hover:underline`}>Privacy</Link>
          <span className={textMuted}>•</span>
          <Link href="/contact" className={`text-xs ${textMuted} hover:underline`}>Contact</Link>
        </div>
      </div>
    </footer>
  )
}
