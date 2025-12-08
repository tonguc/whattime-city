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
  
  const title = `Current Time in ${city.city}, ${city.country} - Local Time Now | whattime.city`
  const description = `What time is it in ${city.city} right now? Check current local time, sunrise at, sunset times, and weather in ${city.city}, ${city.country}. Timezone: ${city.timezone}.`
  
  return {
    title,
    description,
    keywords: [
      `time in ${city.city}`,
      `${city.city} time now`,
      `what time is it in ${city.city}`,
      `${city.city} current time`,
      `${city.city} local time`,
      `${city.city} timezone`,
      `${city.city} sunrise sunset`,
      `${city.country} time`,
      `${city.timezone}`
    ],
    openGraph: {
      title: `Current Time in ${city.city} - What Time Is It Now?`,
      description: `Live local time in ${city.city}, ${city.country}. Check sunrise, sunset and weather.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'whattime.city',
      url: `https://whattime.city/${slug}`,
      images: [`/og/${slug}.png`]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Time in ${city.city} Now | whattime.city`,
      description: `Current local time in ${city.city}, ${city.country}. Live clock with sunrise & sunset.`
    },
    alternates: {
      canonical: `https://whattime.city/${slug}`
    },
    robots: {
      index: true,
      follow: true
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
