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
    title: `NYC 24 Hour Guide | What's Open & When in New York City`,
    description: `NYC hour-by-hour: when New Yorkers wake up, rush hours, lunch crowds, happy hour, nightlife peaks, and what's open at 3 AM. The city that never sleeps explained.`,
    keywords: [
      '24 hours in new york',
      'nyc rush hour times',
      'when do bars close nyc',
      'late night food new york',
      'new york nightlife hours',
      '24 hour restaurants nyc',
      'what time do clubs open nyc',
      'new york city rhythm',
    ],
    openGraph: {
      title: `NYC 24 Hour Guide | The City That Never Sleeps`,
      description: `From 6 AM joggers to 4 AM pizza - how New York works around the clock.`,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/24-hours/`,
    },
  }
}

export default async function TwentyFourHoursPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city || citySlug !== 'new-york') notFound()
  
  return <TwentyFourHoursContent city={city} />
}
