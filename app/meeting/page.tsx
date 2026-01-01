import { Metadata } from 'next'
import MeetingPageContent from '@/components/meeting/MeetingPageContent'

export const metadata: Metadata = {
  title: 'Meeting Planner: Find Best Time Across Time Zones | whattime.city',
  description: 'Schedule meetings across time zones. Compare business hours and find the best time to call with our meeting planner tool.',
  keywords: 'meeting planner, time zone converter, best time to call, business hours overlap, schedule across time zones'
}

export default function MeetingPlannerPage() {
  return <MeetingPageContent initialCities={[]} />
}
