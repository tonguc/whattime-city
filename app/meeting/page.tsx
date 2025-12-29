import { Metadata } from 'next'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import MeetingPlannerClient from '@/components/meeting/MeetingPlannerClient'

export const metadata: Metadata = {
  title: 'Meeting Planner: Find Best Time Across Time Zones | whattime.city',
  description: 'Schedule meetings across time zones. Compare business hours and find the best time to call with our meeting planner tool.',
  keywords: 'meeting planner, time zone converter, best time to call, business hours overlap, schedule across time zones'
}

export default function MeetingPlannerEmptyPage() {
  // FORCE LIGHT MODE for consistent professional look
  const isLight = true
  
  // Light mode theme for components
  const theme = {
    accentBg: 'bg-blue-600',
    accentBgLight: 'bg-blue-100',
    accentText: 'text-blue-600',
    accentBorder: 'border-blue-200'
  }
  
  const themeColors = {
    bg: 'from-slate-50 via-gray-50 to-slate-100',
    card: 'bg-white border-slate-200',
    text: 'text-slate-800',
    textMuted: 'text-slate-600',
    accent: 'blue',
    accentBg: 'bg-blue-600',
    accentBgLight: 'bg-blue-100',
    accentText: 'text-blue-600',
    accentBorder: 'border-blue-200',
  }

  return (
    <>
      {/* TOOLS MINI NAV */}
      <ToolsMiniNav />

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
