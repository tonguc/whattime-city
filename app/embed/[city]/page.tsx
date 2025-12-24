import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, getAllSlugs } from '@/lib/cities'
import EmbedClockWidget from '@/components/EmbedClockWidget'

interface EmbedPageProps {
  params: Promise<{ city: string }>
}

// ✅ Tüm şehirler için statik sayfa oluştur
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    city: slug,
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
    robots: 'noindex, nofollow',
  }
}

export default async function EmbedPage({ params }: EmbedPageProps) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) {
    notFound()
  }
  
  // ✅ Statik export için varsayılan değerler kullan
  // URL parametreleri client-side'da EmbedClockWidget içinde işlenecek
  return (
    <EmbedClockWidget 
      city={city} 
      theme="auto"
      size="medium"
      showDate={true}
      showTimezone={true}
      transparent={false}
    />
  )
}
