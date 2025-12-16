'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { translations, Language } from '@/lib/translations'

interface ToolsSubNavProps {
  isLight: boolean
  theme: {
    accentBg: string
    accentBgLight: string
    accentText: string
    accentBorder: string
  }
  lang: Language
}

// Tool navigation items with smaller icons
const toolNavItems = [
  {
    id: 'converter',
    nameKey: 'timeConverter',
    name: 'Time Converter',
    url: '/tools/converter',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
        <path d="M17 21l2-2-2-2"/>
        <path d="M7 3L5 5l2 2"/>
      </svg>
    )
  },
  {
    id: 'meeting-planner',
    nameKey: 'meetingPlanner',
    name: 'Meeting Planner',
    url: '/tools/meeting-planner',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    )
  },
  {
    id: 'flight-times',
    nameKey: 'flightTimeCalculator',
    name: 'Flight Time',
    url: '/tools/flight-times',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
      </svg>
    )
  },
  {
    id: 'jet-lag',
    nameKey: 'jetLagAdvisor',
    name: 'Jet Lag',
    url: '/tools/jet-lag',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
        <path d="M8.5 8.5v.01"/>
        <path d="M16 15.5v.01"/>
        <path d="M12 12v.01"/>
      </svg>
    )
  },
  {
    id: 'event-time',
    nameKey: 'eventTimeConverter',
    name: 'Event Time',
    url: '/tools/event-time',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 10"/>
        <path d="M2 12h2"/>
        <path d="M20 12h2"/>
      </svg>
    )
  },
  {
    id: 'alarm',
    nameKey: 'worldAlarmClock',
    name: 'World Alarm',
    url: '/tools/alarm',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="8"/>
        <path d="M12 9v4l2 2"/>
        <path d="M5 3L2 6"/>
        <path d="M22 6l-3-3"/>
      </svg>
    )
  }
]

export default function ToolsSubNav({ isLight, theme, lang }: ToolsSubNavProps) {
  const pathname = usePathname()
  const t = translations[lang]
  
  return (
    <nav className="mb-8 relative">
      {/* Left fade indicator */}
      <div 
        className={`absolute left-0 top-0 bottom-0 w-6 pointer-events-none rounded-l-2xl z-10 ${
          isLight 
            ? 'bg-gradient-to-r from-white/80 to-transparent' 
            : 'bg-gradient-to-r from-slate-900/80 to-transparent'
        }`}
      />
      
      {/* Scroll container - hidden scrollbar with smooth scroll */}
      <div 
        className={`flex items-center gap-2 sm:gap-3 py-3 px-4 overflow-x-auto rounded-2xl backdrop-blur-xl border ${
          isLight 
            ? 'bg-white/40 border-white/50' 
            : 'bg-slate-800/40 border-slate-700/50'
        }`}
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {toolNavItems.map((tool) => {
          const isActive = pathname === tool.url
          const translatedName = t[tool.nameKey as keyof typeof t] as string || tool.name
          
          return (
            <Link
              key={tool.id}
              href={tool.url}
              className={`flex-shrink-0 flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? `${theme.accentBg} text-white shadow-lg`
                  : isLight
                    ? 'bg-white/60 text-slate-600 hover:bg-white/80 hover:shadow-md border border-white/50'
                    : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700/80 hover:shadow-md border border-slate-600/50'
              }`}
            >
              <span className={isActive ? 'text-white' : theme.accentText}>
                {tool.icon}
              </span>
              <span className="text-sm font-medium whitespace-nowrap">
                {translatedName}
              </span>
            </Link>
          )
        })}
      </div>
      
      {/* Right fade indicator */}
      <div 
        className={`absolute right-0 top-0 bottom-0 w-6 pointer-events-none rounded-r-2xl z-10 ${
          isLight 
            ? 'bg-gradient-to-l from-white/80 to-transparent' 
            : 'bg-gradient-to-l from-slate-900/80 to-transparent'
        }`}
      />
    </nav>
  )
}
