import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities } from '@/lib/cities'
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
  
  // Find city from cities array
  const city = cities.find(c => c.slug === citySlug)
  
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
