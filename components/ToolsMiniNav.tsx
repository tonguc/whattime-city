'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCityContext } from '@/lib/CityContext'

// 5 Tool Navigation - World Alarm removed
const toolNavItems = [
  {
    id: 'time-converter',
    name: 'Time Converter',
    url: '/time',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    )
  },
  {
    id: 'meeting-planner',
    name: 'Meeting Planner',
    url: '/meeting',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    )
  },
  {
    id: 'flight-time',
    name: 'Flight Time',
    url: '/flight-time',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
      </svg>
    )
  },
  {
    id: 'jet-lag-advisor',
    name: 'Jet Lag Advisor',
    url: '/jet-lag-advisor',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
        <path d="M8.5 8.5v.01"/>
        <path d="M16 15.5v.01"/>
      </svg>
    )
  },
  {
    id: 'event-time',
    name: 'Event Time',
    url: '/event-time',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 10"/>
      </svg>
    )
  }
]

export default function ToolsMiniNav() {
  const pathname = usePathname()
  const { isLight } = useCityContext()
  
  return (
    <nav className="mt-2 mb-6 -mx-4 px-4">
      {/* Horizontal scroll on mobile, centered on desktop */}
      <div className="flex sm:justify-center gap-2 overflow-x-auto scrollbar-hide pb-2 sm:pb-0 sm:overflow-visible sm:flex-wrap">
        {toolNavItems.map((tool) => {
          // Enhanced path matching
          const isActive = pathname === tool.url || 
                          pathname === `${tool.url}/` ||
                          (tool.id === 'meeting-planner' && pathname?.startsWith('/meeting')) ||
                          (tool.id === 'time-converter' && pathname?.startsWith('/time'))
          
          const className = `inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border whitespace-nowrap flex-shrink-0 ${
            isActive
              ? 'bg-blue-600 text-white border-blue-600 shadow-md'
              : isLight
                ? 'bg-white/60 text-slate-600 hover:bg-white/80 border-slate-200'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 border-slate-600'
          }`
          
          return (
            <Link
              key={tool.id}
              href={tool.url}
              className={className}
            >
              <span className={isActive ? 'text-white' : isLight ? 'text-amber-600' : 'text-amber-400'}>
                {tool.icon}
              </span>
              <span>{tool.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
