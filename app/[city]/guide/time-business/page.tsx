import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import TimeBusinessContent from './TimeBusinessContent'

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
    title: `${city.city} Business Hours, Call Times & Market Hours | Complete Guide`,
    description: `Everything about doing business with ${city.city}: office hours, best times to call, stock market trading hours, bank schedules, and timezone tips for ${city.timezone}.`,
    keywords: [
      `${city.city} business hours`,
      `${city.city} office hours`,
      `best time to call ${city.city}`,
      `${city.city} stock market hours`,
      `${city.city} bank hours`,
      `${city.city} working hours`,
      `${city.city} timezone business`,
    ],
    openGraph: {
      title: `${city.city} Time & Business Guide`,
      description: `Complete business timing guide for ${city.city}: office hours, call times, market hours.`,
    },
  }
}

export default async function TimeBusinessPage({ params }: PageProps) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) {
    notFound()
  }
  
  return <TimeBusinessContent city={city} />
}
