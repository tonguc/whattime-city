import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import HolidaysContent from './HolidaysContent'

type Props = { params: Promise<{ city: string }> }
export async function generateStaticParams() { return [{ city: 'new-york' }] }
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `New York Public Holidays 2025: Bank Closures & Business Hours | whattime.city`,
    description: `Complete guide to NYC holidays in 2025. What's closed on Thanksgiving, Christmas, and more. Plan your visit around public holidays.`,
    keywords: ['new york public holidays', 'nyc bank holidays 2025', 'what is closed thanksgiving nyc', 'new york federal holidays'],
  }
}
export default async function HolidaysPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city || citySlug !== 'new-york') notFound()
  return <HolidaysContent city={city} />
}
