import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About whattime.city - Free World Clock & Time Zone Tools',
  description: 'Learn about whattime.city - your free world clock for checking local time, sunrise/sunset, weather in 200+ cities. Time converter, meeting planner, and more tools.',
  keywords: ['world clock', 'time zone converter', 'about whattime.city', 'free time tools', 'international time'],
  alternates: {
    canonical: 'https://whattime.city/about'
  }
}

export default function AboutPage() {
  return <AboutContent />
}
