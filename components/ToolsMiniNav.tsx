'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ToolsMiniNavProps {
  isLight: boolean
  theme: {
    accentBg: string
    accentBgLight: string
    accentText: string
    accentBorder: string
  }
}

// Normalized tool names (2 words, English only)
const toolNavItems = [
  {
    id: 'converter',
    name: 'Time Converter',
    url: '/tools/converter',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  },
  {
    id: 'meeting-planner',
    name: 'Meeting Planner',
    url: '/tools/meeting-planner',
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
    id: 'flight-times',
    name: 'Flight Time',
    url: '/tools/flight-times',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
      </svg>
    )
  },
  {
    id: 'jet-lag',
    name: 'Jet Lag Advisor',
    url: '/tools/jet-lag',
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
    url: '/tools/event-time',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 10"/>
      </svg>
    )
  },
  {
    id: 'alarm',
    name: 'World Alarm',
    url: '/tools/alarm',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="8"/>
        <path d="M12 9v4l2 2"/>
        <path d="M5 3L2 6"/>
        <path d="M22 6l-3-3"/>
      </svg>
    )
  }
]

export default function ToolsMiniNav({ isLight, theme }: ToolsMiniNavProps) {
  const pathname = usePathname()
  
  return (
    <nav className="mb-6">
      {/* Wrapping flex container - no horizontal scroll */}
      <div className="flex flex-wrap justify-center gap-2">
        {toolNavItems.map((tool) => {
          const isActive = pathname === tool.url
          
          return (
            <Link
              key={tool.id}
              href={tool.url}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? `${theme.accentBg} text-white shadow-md`
                  : isLight
                    ? 'bg-white/50 text-slate-600 hover:bg-white/70 border border-white/60'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 border border-slate-600/50'
              }`}
            >
              <span className={isActive ? 'text-white' : theme.accentText}>
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
