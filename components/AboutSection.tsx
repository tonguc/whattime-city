'use client'

import { useState } from 'react'
import { Theme } from '@/lib/themes'
import { Translations } from '@/lib/translations'

interface AboutSectionProps {
  theme: Theme
  isLight: boolean
  t: Translations
}

export default function AboutSection({ theme, isLight, t }: AboutSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Summary text (first 3-5 lines)
  const summaryText = t.aboutSummary || "whattime.city is your free, instant world clock for checking current local time in any city worldwide. Whether you're scheduling international calls, planning travel, or coordinating with global teams, our accurate time zone converter helps you stay synchronized across the globe."

  // Full article content
  const fullContent = t.aboutFull || [
    "Our world clock displays real-time updates for hundreds of cities across all continents. Each city shows not just the current time, but also sunrise and sunset times calculated from actual solar positions—giving you a true sense of whether it's day or night at your destination.",
    "The Meeting Planner feature helps you find overlapping work hours across multiple time zones. Simply select up to three cities, and we'll visualize their working hours (9 AM–5 PM local time) on a timeline, highlighting the best windows for scheduling calls or meetings.",
    "Use the Two-City Time Converter for quick comparisons between any two locations. See the exact time difference and current local times side by side, perfect for coordinating with colleagues, friends, or family abroad.",
    "Save your frequently checked cities to Favorites for instant access. The adaptive theme automatically adjusts to match each city's current daylight—showing warm tones during the day and cool tones at night—creating an intuitive visual experience.",
    "whattime.city is completely free, requires no registration, and works on any device. Bookmark us for quick access whenever you need to check time zones around the world."
  ]

  return (
    <div className={`rounded-3xl p-6 backdrop-blur-xl border ${theme.card} mb-4`}>
      <h3 className={`text-xl font-semibold ${theme.text} mb-4`}>
        {t.aboutTitle || 'About whattime.city'}
      </h3>

      {/* Summary - Always visible */}
      <p className={`text-sm leading-relaxed ${theme.textMuted}`}>
        {summaryText}
      </p>

      {/* Collapsible full content */}
      {isExpanded && (
        <div className="mt-4 space-y-3 animate-fadeIn">
          {(Array.isArray(fullContent) ? fullContent : [fullContent]).map((paragraph, index) => (
            <p key={index} className={`text-sm leading-relaxed ${theme.textMuted}`}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`mt-4 px-4 py-2 rounded-full text-sm font-medium transition-all ${
          isLight
            ? 'bg-slate-200/80 text-slate-700 hover:bg-slate-300/80'
            : 'bg-slate-700/80 text-slate-300 hover:bg-slate-600/80'
        }`}
      >
        {isExpanded 
          ? (t.aboutHideFull || 'Hide full article') 
          : (t.aboutReadFull || 'Read full article')
        }
      </button>
    </div>
  )
}
