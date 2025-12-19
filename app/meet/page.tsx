import { Metadata } from 'next'
import { Suspense } from 'react'
import SharedMeetingView from '@/components/SharedMeetingView'

export const metadata: Metadata = {
  title: 'Shared Meeting Time | whattime.city',
  description: 'View meeting times across multiple time zones. Find the best time to meet with your global team.',
  keywords: [
    'meeting planner',
    'time zone meeting',
    'shared meeting time',
    'global team meeting',
    'world clock meeting'
  ],
  openGraph: {
    title: 'Shared Meeting Time',
    description: 'Find the best time to meet across time zones',
    type: 'website',
    siteName: 'whattime.city',
  }
}

export default function MeetPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-500">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <SharedMeetingView />
    </Suspense>
  )
}
