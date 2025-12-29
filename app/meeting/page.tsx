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
  // Use Istanbul for default theme (or any city)
  const defaultCity = cities.find(c => c.slug === 'istanbul') || cities[0]
  
  // Get theme based on default city's time
  const now = new Date()
  const timeOfDay = getTimeOfDay(
    now,
    defaultCity.lat || 0,
    defaultCity.lng || 0
  )
  
  // Use central theme system
  const currentTheme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)
  
  // Theme for components
  const theme = {
    accentBg: currentTheme.accentBg,
    accentBgLight: currentTheme.accentBgLight,
    accentText: currentTheme.accentText,
    accentBorder: currentTheme.accentBorder
  }
  
  const themeColors = {
    bg: currentTheme.bg,
    card: currentTheme.card,
    text: currentTheme.text,
    textMuted: currentTheme.textMuted,
    accent: currentTheme.accent,
    accentBg: currentTheme.accentBg,
    accentBgLight: currentTheme.accentBgLight,
    accentText: currentTheme.accentText,
    accentBorder: currentTheme.accentBorder,
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
