'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { translations, detectLanguage, Language } from '@/lib/translations'
import { useToolsTheme } from '@/lib/useToolsTheme'
import Header from '@/components/Header'

// Tool definitions - Normalized names (2 words, English only)
const tools = [
  {
    id: 'converter',
    name: 'Time Converter',
    description: 'Convert time between any two cities instantly. Perfect for scheduling international calls and meetings.',
    url: '/tools/converter',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
        <path d="M17 21l2-2-2-2"/>
        <path d="M7 3L5 5l2 2"/>
      </svg>
    )
  },
  {
    id: 'meeting-planner',
    name: 'Meeting Planner',
    description: 'Find the best meeting time across multiple time zones. Visualize working hours overlap for global teams.',
    url: '/tools/meeting-planner',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01"/>
        <path d="M12 14h.01"/>
        <path d="M16 14h.01"/>
        <path d="M8 18h.01"/>
        <path d="M12 18h.01"/>
      </svg>
    )
  },
  {
    id: 'flight-times',
    name: 'Flight Time',
    description: 'Calculate arrival times across time zones. Know exactly when you\'ll land in local time.',
    url: '/tools/flight-times',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
      </svg>
    )
  },
  {
    id: 'jet-lag',
    name: 'Jet Lag',
    description: 'Get personalized jet lag recovery tips based on your travel route and sleep schedule.',
    url: '/tools/jet-lag',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
        <path d="M8.5 8.5v.01"/>
        <path d="M16 15.5v.01"/>
        <path d="M12 12v.01"/>
        <path d="M11 17v.01"/>
        <path d="M7 14v.01"/>
      </svg>
    )
  },
  {
    id: 'event-time',
    name: 'Event Time',
    description: 'Share event times that automatically convert to each viewer\'s local time zone.',
    url: '/tools/event-time',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 10"/>
        <path d="M2 12h2"/>
        <path d="M20 12h2"/>
        <path d="M12 2v2"/>
        <path d="M12 20v2"/>
      </svg>
    )
  },
  {
    id: 'alarm',
    name: 'World Alarm',
    description: 'Set alarms for any city\'s local time. Never miss an international deadline or call.',
    url: '/tools/alarm',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="8"/>
        <path d="M12 9v4l2 2"/>
        <path d="M5 3L2 6"/>
        <path d="M22 6l-3-3"/>
        <path d="M6 19l-2 2"/>
        <path d="M18 19l2 2"/>
      </svg>
    )
  }
]

export default function ToolsPage() {
  const { theme, isLight } = useToolsTheme()
  const [lang, setLang] = useState<Language>('en')
  
  useEffect(() => {
    setLang(detectLanguage())
  }, [])
  
  const t = translations[lang]
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {/* Shared Header */}
        <Header isLight={isLight} theme={theme} currentPage="tools" />

        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Time Zone Tools
          </h1>
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Essential tools for managing time across the globe
          </p>
        </div>

        {/* Tools Grid - Primary Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.url}
              className={`group p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                isLight 
                  ? 'bg-white/60 border-white/50 hover:bg-white/80' 
                  : 'bg-slate-800/60 border-slate-700/50 hover:bg-slate-800/80'
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${theme.accentBgLight} ${theme.accentText}`}>
                {tool.icon}
              </div>
              
              {/* Tool Name */}
              <h2 className={`text-xl font-semibold mb-2 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                {tool.name}
              </h2>
              
              {/* Description */}
              <p className={`text-sm mb-4 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {tool.description}
              </p>
              
              {/* CTA */}
              <div className={`flex items-center gap-2 text-sm font-medium ${theme.accentText} group-hover:gap-3 transition-all`}>
                <span>Open Tool</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer className={`mt-16 pt-8 border-t ${isLight ? 'border-slate-200/50' : 'border-slate-700/50'}`}>
          <div className="text-center">
            <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              © {new Date().getFullYear()} whattime.city — All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
