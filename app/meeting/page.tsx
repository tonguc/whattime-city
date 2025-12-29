import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import MeetingPlannerClient from '@/components/meeting/MeetingPlannerClient'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'

export const metadata: Metadata = {
  title: 'Meeting Planner: Find Best Time Across Time Zones | whattime.city',
  description: 'Schedule meetings across time zones. Compare business hours and find the best time to call with our meeting planner tool.',
  keywords: 'meeting planner, time zone converter, best time to call, business hours overlap, schedule across time zones'
}

export default function MeetingPlannerEmptyPage() {
  // Force light mode like homepage
  const isLight = true
  const currentTheme = themes['light']
  
  // Light mode theme colors (matching homepage)
  const themeColors = {
    bg: 'from-gray-50 via-white to-gray-100',
    card: 'bg-white/70 border-white/80',  // Homepage style
    text: 'text-slate-800',
    textMuted: 'text-slate-600',
    accent: 'amber',
    accentBg: 'bg-amber-500',
    accentBgLight: 'bg-amber-500/20',
    accentText: 'text-amber-500',
    accentBorder: 'border-amber-500/50',
  }
  
  // Theme for components
  const theme = {
    accentBg: currentTheme.accentBg,
    accentBgLight: currentTheme.accentBgLight,
    accentText: currentTheme.accentText,
    accentBorder: currentTheme.accentBorder
  }

  return (
    <>
      {/* TOOLS MINI NAV */}
      <ToolsMiniNav isLight={isLight} theme={theme} />

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* Interactive Tool - Empty State */}
        <MeetingPlannerClient 
          initialCities={[]}
          isLight={isLight}
          theme={theme}
          themeColors={themeColors}
        />
      </main>
    </>
  )
}
