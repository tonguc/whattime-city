import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, getCityBySlug, getAllSlugs } from '@/lib/cities'
import CityPage from '@/components/CityPage'

interface PageProps {
  params: Promise<{ city: string }>
}

// Statik sayfa oluşturma için tüm şehir slug'larını döndür
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    city: slug,
  }))
}

// Dinamik metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  
  if (!city) {
    return {
      title: 'City Not Found - whattime.city'
    }
  }
  
  const info = city.info
  // Keep title under 60 characters for SEO
  // Format: "Current Time in {City}, {Country} | whattime.city" 
  const title = `Current Time in ${city.city}, ${city.country} | whattime.city`
  const description = info 
    ? `What time is it in ${city.city}? Check current local time, sunrise & sunset. Population: ${info.population}. Currency: ${info.currency} (${info.currencySymbol}). Phone: ${info.phoneCode}. Top attractions: ${info.attractions.slice(0, 3).join(', ')}.`
    : `What time is it in ${city.city} right now? Check current local time, sunrise at, sunset times, and weather in ${city.city}, ${city.country}. Timezone: ${city.timezone}.`
  
  const keywords = [
    `time in ${city.city}`,
    `${city.city} time now`,
    `what time is it in ${city.city}`,
    `${city.city} current time`,
    `${city.city} local time`,
    `${city.city} timezone`,
    `${city.city} sunrise sunset`,
    `${city.country} time`,
    `${city.timezone}`
  ]
  
  // Add rich keywords if info exists
  if (info) {
    keywords.push(
      `${city.city} population`,
      `${city.city} currency`,
      `${city.city} phone code`,
      `things to do in ${city.city}`,
      `${city.city} attractions`,
      `${city.city} weather`
    )
  }
  
  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `Current Time in ${city.city} - What Time Is It Now?`,
      description: info 
        ? `Live local time in ${city.city}. Population: ${info.population}. Currency: ${info.currencySymbol}. Top spots: ${info.attractions.slice(0, 2).join(', ')}.`
        : `Live local time in ${city.city}, ${city.country}. Check sunrise, sunset and weather.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'whattime.city',
      url: `https://whattime.city/${slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `Time in ${city.city} Now | whattime.city`,
      description: info
        ? `Current time in ${city.city}. ${info.population} people. ${info.currency} (${info.currencySymbol}).`
        : `Current local time in ${city.city}, ${city.country}. Live clock with sunrise & sunset.`
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

export default async function Page({ params }: PageProps) {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  
  if (!city) {
    notFound()
  }
  
  return (
    <CityPage initialCity={city} />
  )
}
