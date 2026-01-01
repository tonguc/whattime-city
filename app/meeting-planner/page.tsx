import { redirect } from 'next/navigation'

// Redirect /meeting-planner to /meeting for consistency
export default function MeetingPlannerPage() {
  redirect('/meeting')
}
