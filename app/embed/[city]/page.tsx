import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, getAllSlugs } from '@/lib/cities'
import EmbedClockWidget from '@/components/EmbedClockWidget'

// ✅ Sayfanın tamamen statik olmasını zorunlu kılıyoruz
export const dynamic = 'force-static'

interface EmbedPageProps {
  params: { city: string }
}

// ✅ Build sırasında tüm şehir sayfalarını (HTML) önceden üretir
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    city: slug,
  }))
}

// ✅ SEO ve Meta etiketleri
export async function generateMetadata({ params }: EmbedPageProps): Promise<Metadata> {
  const { city: citySlug } = params
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

// ✅ Ana Sayfa Bileşeni
export default function EmbedPage({ params }: EmbedPageProps) {
  const { city: citySlug } = params
  const city = cities.find(c => c.slug === citySlug)

  if (!city) {
    notFound()
  }
  
  // URL parametreleri (theme, size vb.) artık server'da değil, 
  // EmbedClockWidget bileşeni içinde (client-side) okunacak.
  return (
    <EmbedClockWidget 
      city={city} 
      // Varsayılan değerler geçiyoruz, bileşen URL'den gerçekleri okuyacak
      theme="auto"
      size="medium"
      showDate={true}
      showTimezone={true}
      transparent={false}
    />
  )
}