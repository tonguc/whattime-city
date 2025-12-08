import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, getCityBySlug, getAllSlugs } from '@/lib/cities'
import WorldClock from '@/components/WorldClock'

interface CityPageProps {
  params: Promise<{ city: string }>
}

// Statik sayfa oluşturma için tüm şehir slug'larını döndür
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    city: slug,
  }))
}

// Dinamik metadata
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  
  if (!city) {
    return {
      title: 'City Not Found - whattime.city'
    }
  }
  
  const title = `${city.city} Time - What Time Is It Now? | whattime.city`
  const description = `Current local time in ${city.city}, ${city.country}. Live clock with sunrise and sunset times. Timezone: ${city.timezone}`
  
  return {
    title,
    description,
    keywords: [
      `${city.city} time`,
      `what time is it in ${city.city}`,
      `${city.city} current time`,
      `${city.city} timezone`,
      `${city.city} sunrise sunset`,
      `${city.country} time`
    ],
    openGraph: {
      title: `${city.city} - Current Time`,
      description: `What time is it in ${city.city}? Live clock, sunrise and sunset times.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'whattime.city',
      images: [`/og/${slug}.png`]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.city} Time | whattime.city`,
      description: `Current time in ${city.city}, ${city.country}`
    },
    alternates: {
      canonical: `https://whattime.city/${slug}`
    }
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  
  if (!city) {
    notFound()
  }
  
  return <WorldClock initialCity={city} />
}
