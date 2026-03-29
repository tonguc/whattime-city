import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Days Ago Calculator — What Date Was X Days Ago?',
  description: 'Find out what date was 30, 60, 90, 120, or 180 days ago. Exact date, day of week, and week number for any past day count.',
  alternates: { canonical: 'https://whattime.city/days-ago/' },
}

export default function DaysAgoPage() {
  redirect('/days-from-today/')
}
