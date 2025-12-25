import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LondonCallTimesContent from './LondonCallTimesContent'
import DubaiCallTimesContent from './DubaiCallTimesContent'
import ParisCallTimesContent from './ParisCallTimesContent'
import SingaporeCallTimesContent from './SingaporeCallTimesContent'
import SydneyCallTimesContent from './SydneyCallTimesContent'
import TokyoCallTimesContent from './TokyoCallTimesContent'
import CallTimesContent from './CallTimesContent'

export const metadata: Metadata = {
  title: 'Best Time to Call - Time Zone Guide | whattime.city',
  description: 'Find the best time to call across different time zones with our overlap chart.',
}

// CRITICAL: All cities that have call-times pages
export async function generateStaticParams() {
  return [
    { city: 'london' },
    { city: 'dubai' },
    { city: 'paris' },
    { city: 'singapore' },
    { city: 'sydney' },
    { city: 'tokyo' },
    { city: 'new-york' },
  ]
}

interface PageProps {
  params: {
    city: string
  }
}

export default function CallTimesPage({ params }: PageProps) {
  const citySlug = params.city
  
  // City data mapping
  const cityData: Record<string, { slug: string; name: string; timezone: string }> = {
    'london': { slug: 'london', name: 'London', timezone: 'Europe/London' },
    'dubai': { slug: 'dubai', name: 'Dubai', timezone: 'Asia/Dubai' },
    'paris': { slug: 'paris', name: 'Paris', timezone: 'Europe/Paris' },
    'singapore': { slug: 'singapore', name: 'Singapore', timezone: 'Asia/Singapore' },
    'sydney': { slug: 'sydney', name: 'Sydney', timezone: 'Australia/Sydney' },
    'tokyo': { slug: 'tokyo', name: 'Tokyo', timezone: 'Asia/Tokyo' },
    'new-york': { slug: 'new-york', name: 'New York', timezone: 'America/New_York' },
  }

  const city = cityData[citySlug]
  
  if (!city) {
    notFound()
  }

  // Select the appropriate component based on city
  let ContentComponent
  
  switch (citySlug) {
    case 'london':
      ContentComponent = LondonCallTimesContent
      break
    case 'dubai':
      ContentComponent = DubaiCallTimesContent
      break
    case 'paris':
      ContentComponent = ParisCallTimesContent
      break
    case 'singapore':
      ContentComponent = SingaporeCallTimesContent
      break
    case 'sydney':
      ContentComponent = SydneyCallTimesContent
      break
    case 'tokyo':
      ContentComponent = TokyoCallTimesContent
      break
    case 'new-york':
      ContentComponent = CallTimesContent
      break
    default:
      ContentComponent = CallTimesContent
  }

  return <ContentComponent city={city} />
}