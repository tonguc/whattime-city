import { Metadata } from 'next'
import Link from 'next/link'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import GuideContent from './GuideContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  // Şimdilik sadece New York için
  return [{ city: 'new-york' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) return { title: 'City Guide' }
  
  return {
    title: `New York Time Zone Guide | EST/EDT, Business Hours & More`,
    description: `Complete NYC time zone guide. Business hours, Wall Street trading times, best time to call NYC, remote work overlap, holidays, and local tips. Updated regularly.`,
    keywords: [
      'new york time zone',
      'nyc time now',
      'est edt time',
      'new york business hours',
      'wall street hours',
      'best time to call new york',
      'nyc time difference',
      'eastern time zone guide',
    ],
    openGraph: {
      title: `New York Time Zone Guide | Complete NYC Time Resource`,
      description: `Everything about NYC time: business hours, stock market, holidays, remote work tips. The definitive guide.`,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/`,
    },
  }
}

export default async function GuidePage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) notFound()
  
  // Şimdilik sadece New York için
  if (citySlug !== 'new-york') notFound()
  
  return <GuideContent city={city} />
}
