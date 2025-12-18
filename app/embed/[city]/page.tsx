import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities } from '@/lib/cities'
import EmbedClockWidget from '@/components/EmbedClockWidget'

interface EmbedPageProps {
  params: Promise<{ city: string }>
  searchParams: Promise<{ 
    theme?: string
    size?: string
    showDate?: string
    showTimezone?: string
    transparent?: string
  }>
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: EmbedPageProps): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) {
    return { title: 'Widget Not Found' }
  }
  
  return {
    title: `${city.city} Clock Widget - whattime.city`,
    description: `Embeddable clock widget for ${city.city}, ${city.country}`,
    robots: 'noindex, nofollow', // Don't index embed pages
  }
}

export default async function EmbedPage({ params, searchParams }: EmbedPageProps) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) {
    notFound()
  }
  
  const options = await searchParams
  
  return (
    <EmbedClockWidget 
      city={city} 
      theme={options.theme || 'auto'}
      size={options.size || 'medium'}
      showDate={options.showDate !== 'false'}
      showTimezone={options.showTimezone !== 'false'}
      transparent={options.transparent === 'true'}
    />
  )
}
