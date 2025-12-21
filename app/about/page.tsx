import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About Us - whattime.city',
  description: 'Learn about whattime.city - your free, instant world clock for checking local time in any city worldwide.',
  alternates: {
    canonical: 'https://whattime.city/about'
  }
}

export default function AboutPage() {
  return <AboutContent />
}
