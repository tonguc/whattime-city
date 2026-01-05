import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import TimeZonesContent from './TimeZonesContent'

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) return { title: 'Not Found' }
  
  return {
    title: `${city.city} Time Zone: Current Time, UTC Offset & DST Info`,
    description: `${city.city} timezone explained: current local time, UTC offset, daylight saving time changes, and time difference from major world cities.`,
    keywords: [
      `${city.city} time zone`,
      `${city.city} current time`,
      `${city.city} UTC offset`,
      `${city.city} DST`,
      `time in ${city.city}`,
      `${city.city} time difference`,
    ],
    openGraph: {
      title: `${city.city} Time Zone Guide`,
      description: `Everything about ${city.city} timezone: current time, UTC offset, and DST changes.`,
    },
  }
}

export default async function TimeZonesPage({ params }: PageProps) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) {
    notFound()
  }
  
  return <TimeZonesContent city={city} />
}
