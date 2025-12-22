import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import HolidaysContent from './HolidaysContent'

type Props = { params: Promise<{ city: string }> }
export async function generateStaticParams() { return [{ city: 'new-york' }] }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  return {
    title: `NYC Holidays 2025 | Bank Closures, Store Hours & What's Open`,
    description: `New York public holidays 2025 calendar. What's closed on Thanksgiving, Christmas, July 4th? Bank hours, store schedules, transit changes. Plan your NYC visit.`,
    keywords: [
      'new york public holidays 2025',
      'nyc bank holidays',
      'what is closed thanksgiving nyc',
      'christmas day new york open',
      'new year day nyc stores',
      'federal holidays new york',
      'labor day nyc 2025',
      'is nyc open memorial day',
    ],
    openGraph: {
      title: `NYC Public Holidays 2025 | Complete Calendar`,
      description: `What's open and closed on NYC holidays - banks, stores, transit, and attractions.`,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/new-york/guide/holidays/`,
    },
  }
}
export default async function HolidaysPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city || citySlug !== 'new-york') notFound()
  return <HolidaysContent city={city} />
}
