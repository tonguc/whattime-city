import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import CallTimesContent from './CallTimesContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [{ city: 'new-york' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Best Time to Call New York from London, Tokyo, Dubai & More | whattime.city`,
    description: `When should you call NYC? Optimal calling times from major cities worldwide. Business hours overlap and personal call windows.`,
    keywords: [
      'best time to call new york',
      'best time to call usa from uk',
      'call new york from london',
      'call nyc from india',
      'when to call america',
    ],
  }
}

export default async function CallTimesPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city || citySlug !== 'new-york') notFound()
  return <CallTimesContent city={city} />
}
