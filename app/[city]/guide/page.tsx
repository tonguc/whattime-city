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
    title: `${city.city} Time Zone Guide: Everything You Need to Know | whattime.city`,
    description: `Complete guide to ${city.city} time zone. Business hours, best time to visit, remote work tips, stock market hours, and more. Your ultimate resource for ${city.city} time.`,
    keywords: [
      `${city.city.toLowerCase()} time zone`,
      `what time is it in ${city.city.toLowerCase()}`,
      `${city.city.toLowerCase()} business hours`,
      `best time to visit ${city.city.toLowerCase()}`,
      `${city.city.toLowerCase()} est edt`,
    ],
    openGraph: {
      title: `${city.city} Time Zone: The Complete Guide`,
      description: `Everything you need to know about ${city.city} time - from business hours to jet lag tips.`,
      type: 'article',
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
