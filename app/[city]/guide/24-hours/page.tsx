import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import TwentyFourHoursContent from './TwentyFourHoursContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [{ city: 'new-york' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) return { title: '24 Hours in NYC' }
  
  return {
    title: `24 Hours in New York: The City's Daily Rhythm | whattime.city`,
    description: `What happens in NYC from dawn to night? Discover New York's daily rhythm - when locals wake up, rush hours, nightlife, and what's open at 3 AM.`,
    keywords: [
      '24 hours in new york',
      'what time do new yorkers wake up',
      'new york rush hour times',
      'when do bars close in nyc',
      'late night new york',
      'new york city daily life',
    ],
    openGraph: {
      title: `24 Hours in NYC: The City's Daily Rhythm`,
      description: `From 6 AM joggers to 4 AM pizza - how New York actually works around the clock.`,
      type: 'article',
    },
  }
}

export default async function TwentyFourHoursPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city || citySlug !== 'new-york') notFound()
  
  return <TwentyFourHoursContent city={city} />
}
