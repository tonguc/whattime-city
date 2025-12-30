import { Metadata } from 'next'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import MeetingPlannerClient from '@/components/meeting/MeetingPlannerClient'

export const metadata: Metadata = {
  title: 'Meeting Planner: Find Best Time Across Time Zones | whattime.city',
  description: 'Schedule meetings across time zones. Compare business hours and find the best time to call with our meeting planner tool.',
  keywords: 'meeting planner, time zone converter, best time to call, business hours overlap, schedule across time zones'
}

export default function MeetingPlannerEmptyPage() {
  // Theme is now handled by MeetingPlannerClient using CityContext
  // This ensures user's location determines theme, not selected cities
  
  return (
    <>
      {/* TOOLS MINI NAV - will get theme from its own context */}
      <ToolsMiniNav />

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* Interactive Tool - Empty State */}
        <MeetingPlannerClient initialCities={[]} />
      </main>
    </>
  )
}
