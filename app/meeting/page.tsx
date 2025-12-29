import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import MeetingPlannerClient from '@/components/meeting/MeetingPlannerClient'
import RelatedTools from '@/components/meeting/RelatedTools'
import { getTimeOfDay } from '@/lib/sun-calculator'

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
  
  const isLight = timeOfDay === 'day' || timeOfDay === 'dawn'
  
  // Theme colors for ToolsMiniNav
  const theme = {
    accentBg: isLight ? 'bg-blue-500' : 'bg-blue-600',
    accentBgLight: isLight ? 'bg-blue-100' : 'bg-blue-900',
    accentText: isLight ? 'text-blue-600' : 'text-blue-400',
    accentBorder: isLight ? 'border-blue-200' : 'border-blue-800'
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
        />

        {/* Related Tools - Box içinde */}
        <div className={`rounded-2xl p-6 mt-8 backdrop-blur-xl border relative z-10 ${
          isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
        }`}>
          <RelatedTools isLight={isLight} />
        </div>
      </main>
    </>
  )
}
